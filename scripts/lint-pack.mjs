#!/usr/bin/env node
/**
 * Lint one content pack in isolation, before build:content has registered it.
 *
 * npm run validate scores a whole bank once a pack is in the registry, and
 * npm run audit:distractors scores form tells across 500 items. Neither tells an
 * author whether *the file they have open* meets the bar. This does: schema, the
 * authoring rules in docs/DISTRACTOR-REMEDIATION.md, and the same form metrics
 * audit:distractors uses, computed on the pack alone so the answer arrives while
 * the pack is still being written.
 *
 *   node scripts/lint-pack.mjs --file src/data/certs/<cert>/questions/pack-3.js --cert <cert> \
 *        [--domain d1] [--start 51 --end 75] [--quota 7/12/6] [--multi 3]
 *   node scripts/lint-pack.mjs --file src/data/certs/<cert>/flashcards/pack-3.js --cert <cert> \
 *        --kind flashcards [--domain d1] [--start 51 --end 75] [--quota 7/12/6]
 *
 * --start/--end pin the id range (`<cert>-51` … `<cert>-75`, or `<cert>-fc-51` …),
 * --quota pins the easy/medium/hard split, --multi the minimum number of
 * "(Choose two.)" items. Exits 1 on any error; warnings are advisory.
 */
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { scoreCertification, STRAWMAN, terms, LENGTH_BAND, THRESHOLDS } from './lib/distractor-metrics.mjs';
import { FRAMING, ALL_SIGNALS } from './lib/generator-signals.mjs';

const argv = process.argv.slice(2);
const arg = (name, fallback = null) => (argv.includes(name) ? argv[argv.indexOf(name) + 1] : fallback);
const file = arg('--file');
const certId = arg('--cert');
if (!file || !certId) {
  console.error('Usage: node scripts/lint-pack.mjs --file <pack.js> --cert <id> [--kind questions|flashcards] [--domain dN] [--start N --end M] [--quota e/m/h] [--multi N]');
  process.exit(2);
}
const kind = arg('--kind', file.includes('/flashcards/') ? 'flashcards' : 'questions');
const domainId = arg('--domain');
const start = arg('--start') === null ? null : Number(arg('--start'));
const end = arg('--end') === null ? null : Number(arg('--end'));
const quota = arg('--quota') ? arg('--quota').split('/').map(Number) : null;
const minMulti = Number(arg('--multi', kind === 'questions' ? 3 : 0));

const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);
const norm = s => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const DIFFS = ['easy', 'medium', 'hard'];

function finish(extra = '') {
  for (const w of warnings) console.log(`\x1b[33mWARN\x1b[0m  ${w}`);
  for (const e of errors) console.log(`\x1b[31mERROR\x1b[0m ${e}`);
  if (extra) console.log(`\n${extra}`);
  console.log(`\n${path.relative(process.cwd(), file)} · ${errors.length} error(s) · ${warnings.length} warning(s)`);
  process.exit(errors.length ? 1 : 0);
}

if (!fs.existsSync(file)) { err(file, 'file does not exist'); finish(); }
const certPath = path.resolve(`src/data/certs/${certId}/cert.js`);
if (!fs.existsSync(certPath)) { err(certId, `no blueprint at ${certPath}`); finish(); }
const cert = (await import(pathToFileURL(certPath).href)).default;

let mod;
try { mod = await import(pathToFileURL(path.resolve(file)).href + '?t=' + Date.now()); }
catch (e) { err(file, `does not import as an ES module: ${e.message}`); finish(); }
const items = mod.default;
if (!Array.isArray(items)) { err(file, 'must default-export an array'); finish(); }
const named = Object.keys(mod).filter(k => k !== 'default');
if (named.length !== 1 || mod[named[0]] !== items) {
  err(file, 'expected exactly one named export that is the same array as the default (export const X = [...]; export default X;)');
}
const packNo = Number((file.match(/pack-(\d+)\.js$/) || [])[1]);
const conventional = `${certId.toUpperCase().replace(/[^A-Z0-9]/g, '_')}_${kind.toUpperCase()}_${packNo}`;
if (named[0] && named[0] !== conventional) warn(file, `named export is ${named[0]}; the convention here is ${conventional}`);

const prefix = kind === 'flashcards' ? `${certId}-fc-` : `${certId}-`;
if (start !== null && end !== null) {
  const want = end - start + 1;
  if (items.length !== want) err(file, `expected ${want} items (${prefix}${start} … ${prefix}${end}), found ${items.length}`);
  items.forEach((it, i) => {
    const id = `${prefix}${start + i}`;
    if (it.id !== id) err(it.id || `#${i + 1}`, `id should be ${id} (ids run in order through the pack)`);
  });
}
const seenIds = new Set();
for (const it of items) { if (seenIds.has(it.id)) err(it.id, 'duplicate id inside the pack'); seenIds.add(it.id); }

const counts = { easy: 0, medium: 0, hard: 0 };
for (const it of items) if (counts[it.difficulty] !== undefined) counts[it.difficulty]++;
if (quota) {
  DIFFS.forEach((d, i) => { if (counts[d] !== quota[i]) err(file, `difficulty quota: ${d} is ${counts[d]}, the assignment says ${quota[i]}`); });
}
const domain = domainId ? cert.domains.find(d => d.id === domainId) : null;
if (domainId && !domain) err(file, `--domain ${domainId} is not a domain of ${certId} (${cert.domains.map(d => d.id).join(', ')})`);

/* ---- shared text rules ---------------------------------------------------- */

const HTML_TAG = /<\s*\/?\s*[a-z][a-z0-9-]*(?:\s|\/?>)/i;
const DANGEROUS = /<\s*(script|iframe|object|embed|link|style|svg|form|meta|base)\b|\son[a-z]+\s*=|javascript:|data:text\/html/i;
const ALLOWED_TAG = /^(em|strong|code|kbd|br|ul|ol|li|p)$/i;
const BOILERPLATE = ALL_SIGNALS;

const LETTER_PROSE = /\b(?:option|choice|answer|response|alternative|distractor)s?\s+[A-F]\b/;
const LETTER_BARE = /\(\s*[A-F]\s*\)/;
const LETTER_VERDICT = /\b[A-F]\s+(?:is|are|was|were)\s+(?:wrong|incorrect|correct|right|the)\b/;
const QUALIFIERS = new Set(['wrong', 'incorrect', 'correct', 'right', 'and', 'or', 'is', 'are', 'not', 'the', 'both', 'option', 'options', 'answer', 'answers', 'choice', 'choices', 'only', 'also', 'here']);
function letterReference(text) {
  if (LETTER_PROSE.test(text) || LETTER_BARE.test(text) || LETTER_VERDICT.test(text)) return true;
  for (const m of text.matchAll(/\(([^()]{1,40})\)/g)) {
    const tokens = m[1].split(/[\s,/&]+/).filter(Boolean);
    if (tokens.some(t => /^[A-F]$/.test(t)) && tokens.every(t => /^[A-F]$/.test(t) || QUALIFIERS.has(t.toLowerCase()))) return true;
  }
  return false;
}

function checkCommon(it, w) {
  if (it.certId !== certId) err(w, `certId "${it.certId}" should be "${certId}"`);
  const d = cert.domains.find(x => x.id === it.domainId);
  if (!d) err(w, `domainId "${it.domainId}" is not a domain of ${certId} (${cert.domains.map(x => x.id).join(', ')})`);
  if (domain && it.domainId !== domain.id) err(w, `this pack is assigned to ${domain.id}; the item says ${it.domainId}`);
  if (!DIFFS.includes(it.difficulty)) err(w, 'difficulty must be easy | medium | hard');
  if (!Array.isArray(it.tags) || it.tags.length < 1 || it.tags.length > 6 || it.tags.some(t => !t || /^TODO/i.test(t))) err(w, 'tags: 1-6 short, filled-in strings');
  return d;
}

/* ---- questions -------------------------------------------------------------- */

if (kind === 'questions') {
  const sigs = new Map();
  const prompts = new Map();
  const scenarios = new Map();
  const optTextCount = new Map();
  let multi = 0;

  for (const q of items) {
    const w = q.id || '<no id>';
    for (const f of ['id', 'certId', 'domainId', 'domainName', 'difficulty', 'title', 'scenario', 'question', 'options', 'correctAnswers', 'type', 'explanation', 'referenceUrl', 'tags']) {
      if (q[f] === undefined || q[f] === null || q[f] === '') err(w, `missing field "${f}"`);
    }
    const d = checkCommon(q, w);
    if (d && q.domainName !== d.name) err(w, `domainName must be exactly "${d.name}"`);

    const bounds = { title: [8, 100], scenario: [100, 1000], question: [15, 400], explanation: [160, 1800] };
    for (const [f, [min, max]] of Object.entries(bounds)) {
      const v = String(q[f] ?? '');
      if (v.length && v.length < min) err(w, `${f} is ${v.length} chars; minimum ${min}`);
      if (v.length > max) err(w, `${f} is ${v.length} chars; maximum ${max}`);
      if (/^\s*TODO/i.test(v) || v.includes('https://TODO')) err(w, `${f} still holds a TODO placeholder`);
      if (HTML_TAG.test(v)) err(w, `${f} contains an HTML tag; question fields render escaped, so it would show literally`);
      if (/`|\*\*/.test(v)) warn(w, `${f} uses backticks or markdown, which render literally; write commands and identifiers as plain text`);
    }
    if (String(q.scenario).length < 140) warn(w, 'scenario is short for an exam-style item (aim for 150-450 chars with concrete constraints)');
    if (String(q.explanation).length < 250) warn(w, 'explanation is under 250 chars; it should justify the key and say why each distractor fails here');
    if (!/[?)]\s*$/.test(String(q.question))) warn(w, 'question should end with "?" (or "(Choose two.)")');
    if (letterReference(String(q.explanation))) err(w, 'explanation refers to an option letter; describe options by content (npm run shuffle re-letters them)');
    if (FRAMING.test(String(q.title))) err(w, 'title carries a generator framing suffix');
    for (const re of BOILERPLATE) {
      if (re.test(String(q.scenario)) || re.test(String(q.question)) || re.test(String(q.title)) || re.test(String(q.explanation))) {
        err(w, `generator boilerplate pattern ${re}`);
        break;
      }
    }

    if (!Array.isArray(q.options)) { err(w, 'options must be an array'); continue; }
    const optIds = q.options.map(o => o.id);
    const expectIds = 'ABCDEF'.slice(0, q.options.length).split('');
    if (optIds.join('') !== expectIds.join('')) err(w, `option ids must be ${expectIds.join(', ')} in order`);
    const texts = q.options.map(o => String(o.text ?? ''));
    if (new Set(texts.map(norm)).size !== texts.length) err(w, 'two options have the same text');
    texts.forEach((t, i) => {
      if (!t) err(w, `option ${optIds[i]} is empty`);
      if (/^Option [A-F]\b|^[A-F][.):]\s/.test(t)) err(w, `option ${optIds[i]} hard-codes a letter in its text`);
      if (HTML_TAG.test(t)) err(w, `option ${optIds[i]} contains an HTML tag`);
      if (t.length > 320) err(w, `option ${optIds[i]} is ${t.length} chars; keep options under ~260`);
      else if (t.length > 260) warn(w, `option ${optIds[i]} is ${t.length} chars; long options tire the reader`);
      if (t && t.length < 12) err(w, `option ${optIds[i]} is only ${t.length} chars`);
      optTextCount.set(norm(t), (optTextCount.get(norm(t)) || 0) + 1);
    });

    const key = new Set(q.correctAnswers || []);
    if (!Array.isArray(q.correctAnswers) || !q.correctAnswers.length) err(w, 'correctAnswers must be a non-empty array');
    for (const a of q.correctAnswers || []) if (!optIds.includes(a)) err(w, `correctAnswers names "${a}", which is not an option`);
    if (q.type === 'single') {
      if (key.size !== 1) err(w, 'type single needs exactly one correct answer');
      if (q.options.length !== 4) err(w, `single-answer items use exactly 4 options here (found ${q.options.length})`);
    } else if (q.type === 'multiple') {
      multi++;
      if (key.size !== 2) err(w, 'type multiple needs exactly two correct answers here');
      if (q.options.length !== 5) err(w, `multiple-answer items use exactly 5 options here (found ${q.options.length})`);
      if (!/choose\s+two/i.test(String(q.question))) err(w, 'multiple-answer question must end with "(Choose two.)"');
    } else {
      err(w, 'type must be single or multiple');
    }

    const keys = q.options.filter(o => key.has(o.id));
    const dist = q.options.filter(o => !key.has(o.id));
    if (keys.length && dist.length) {
      /**
       * Per-item length is advisory; the pack-level figures below are the gate.
       * What makes a bank exploitable is the key being reliably the longest
       * option, not any single item being lopsided. Across the 500 items of
       * aws-sap — repeat-free and passing every bank-level target — the
       * longest-to-shortest ratio has a median of 1.58 and reaches 3.24, and the
       * key runs up to 60 characters longer than every distractor while the bank
       * average sits 12 characters *shorter*. Erroring on either in isolation
       * rejected 22 items of one aws-sap pack, so both warn and only the
       * indefensible extremes fail.
       */
      const lens = texts.map(t => t.length);
      const ratio = Math.max(...lens) / Math.max(1, Math.min(...lens));
      if (ratio > 3.3) err(w, `option lengths ${lens.join("/")}: the longest is ${ratio.toFixed(2)}x the shortest, beyond anything in the reference bank; rewrite the short options`);
      else if (ratio > 2.3) warn(w, `option lengths ${lens.join("/")} spread ${ratio.toFixed(2)}x; tighten toward parity`);
      const gap = Math.max(...keys.map(o => o.text.length)) - Math.max(...dist.map(o => o.text.length));
      if (gap > 80) err(w, `key is ${gap} chars longer than every distractor, beyond anything in the reference bank; move the extra clause into the explanation or grow a distractor`);
      else if (gap > 20) warn(w, `key is ${gap} chars longer than every distractor; move the extra clause into the explanation or grow a distractor`);
      for (const o of dist) for (const re of STRAWMAN) if (re.test(o.text)) err(w, `option ${o.id} is a strawman nobody would pick (${re}); replace it with a real alternative that fails for a scenario reason`);
    }

    const sig = texts.slice().sort().join('\u0000');
    if (sigs.has(sig)) err(w, `same option set as ${sigs.get(sig)}; every item needs its own options`); else sigs.set(sig, q.id);
    const pk = norm(q.scenario) + '|' + norm(q.question);
    if (prompts.has(pk)) err(w, `same scenario and question as ${prompts.get(pk)}`); else prompts.set(pk, q.id);
    const sk = norm(q.scenario);
    if (scenarios.has(sk)) err(w, `same scenario as ${scenarios.get(sk)}; each item gets its own situation`); else scenarios.set(sk, q.id);

    if (q.referenceUrl && !/^https:\/\/[a-z0-9.-]+\.[a-z]{2,}\/\S*$/i.test(q.referenceUrl)) err(w, 'referenceUrl must be an https URL to official documentation');
  }

  if (multi < minMulti) err(file, `only ${multi} multiple-answer item(s); the assignment asks for at least ${minMulti}`);
  for (const [t, n] of optTextCount) if (n >= 3) warn(file, `option text "${t.slice(0, 60)}…" appears ${n} times in this pack; vary the distractors`);

  // Vocabulary leak, item by item, using the pack itself as the corpus.
  //
  // Reported per item, never aggregated into a pack-level failure. The bank-level
  // measure in audit:distractors calls a term distinctive when at most 2% of the
  // bank's stems use it; in a 25-item pack that floor is 3 stems, i.e. 12%, so
  // almost every service name qualifies and the percentage inflates. Measured
  // across the 20 packs of aws-sap — the one bank that is repeat-free and passes
  // every bank-level target — pack-level leak runs from 20% to 72% with a median
  // of 48%, while the bank scores 33%. A pack-level threshold calibrated on the
  // bank's number would therefore reject this repository's best content. The
  // per-item lines below are still true and still worth acting on: that stem does
  // share a distinctive term with the key and with no distractor.
  const usable = items.filter(q => Array.isArray(q.options) && Array.isArray(q.correctAnswers));
  const df = new Map();
  for (const q of usable) for (const t of terms(`${q.question} ${q.scenario}`)) df.set(t, (df.get(t) || 0) + 1);
  const cap = Math.max(3, Math.round(usable.length * 0.02));
  for (const q of usable) {
    const key = new Set(q.correctAnswers);
    const stem = terms(`${q.question} ${q.scenario}`);
    const keyTerms = new Set(q.options.filter(o => key.has(o.id)).flatMap(o => [...terms(o.text)]));
    const distTerms = new Set(q.options.filter(o => !key.has(o.id)).flatMap(o => [...terms(o.text)]));
    const leaked = [...keyTerms].filter(t => stem.has(t) && !distTerms.has(t) && (df.get(t) || 0) <= cap);
    if (leaked.length) warn(q.id, `stem shares "${leaked.slice(0, 3).join('", "')}" with the key and with no distractor; name it in a distractor too, or ask without naming it`);
  }

  /**
   * Pack-level form. The bank-level band is 12-40% on 500 items; on 25 items the
   * same proportion carries far more sampling noise, so failing at the bank's band
   * would reject good packs. PACK_BAND is widened to 8-45%, which contains every
   * one of the 20 aws-sap packs (longest 8-28%, shortest 24-30%) and still catches
   * the generator packs that sit at 100% and 0%. The band printed as the target
   * stays the bank's, because that is what the pack has to add up to.
   */
  const PACK_BAND = { min: 8, max: 45 };
  const score = scoreCertification(items);
  let line = '';
  if (score) {
    const outOfBand = v => v !== null && (v < PACK_BAND.min || v > PACK_BAND.max);
    const pct = v => (v === null ? '-' : v.toFixed(0) + '%');
    line = `form (this pack): longest-is-key ${pct(score.longest)} · shortest-is-key ${pct(score.shortest)} · strawman ${pct(score.strawman)} · leak ${pct(score.leak)} · key minus distractor mean length ${score.delta >= 0 ? '+' : ''}${score.delta.toFixed(0)} chars\n` +
      `aim for both length figures near ${LENGTH_BAND.min}-${LENGTH_BAND.max}% (the band the whole bank must meet); this pack fails outside ${PACK_BAND.min}-${PACK_BAND.max}% · strawman 0% · mean gap <= +${THRESHOLDS.delta}\n` +
      `leak is reported, not gated: on 25 items it runs 20-72% even in the cleanest bank in this repository (see the comment in this script)`;
    if (outOfBand(score.longest)) err(file, `the key is the single longest option in ${score.longest.toFixed(0)}% of items; keep it inside ${PACK_BAND.min}-${PACK_BAND.max}% (2-11 of 25) and near ${LENGTH_BAND.max}% at most`);
    if (outOfBand(score.shortest)) err(file, `the key is the single shortest option in ${pct(score.shortest)} of items; keep it inside ${PACK_BAND.min}-${PACK_BAND.max}% (2-11 of 25)`);
    if (score.delta > THRESHOLDS.delta) err(file, `the key averages ${score.delta.toFixed(0)} chars longer than the distractors; the bank must stay <= +${THRESHOLDS.delta}`);
    if (score.delta < -30) warn(file, `the key averages ${(-score.delta).toFixed(0)} chars shorter than the distractors; check the shortest-is-key figure`);
  }
  finish(line);
}

/* ---- flashcards ------------------------------------------------------------- */

const fronts = new Map();
const backs = new Map();
for (const c of items) {
  const w = c.id || '<no id>';
  for (const f of ['id', 'certId', 'domainId', 'difficulty', 'front', 'back', 'tags']) if (!c[f]) err(w, `missing field "${f}"`);
  checkCommon(c, w);
  const front = String(c.front ?? ''), back = String(c.back ?? ''), hint = String(c.hint ?? '');
  if (front.length < 10) err(w, `front is ${front.length} chars; minimum 10`);
  if (front.length > 260) err(w, `front is ${front.length} chars; maximum 260`);
  else if (front.length > 200) warn(w, `front is ${front.length} chars; a card prompt should be scannable`);
  if (back.length < 60) err(w, `back is ${back.length} chars; minimum 60`);
  else if (back.length < 120) warn(w, `back is ${back.length} chars; say enough to teach the discrimination, not just name it`);
  if (back.length > 1100) err(w, `back is ${back.length} chars; maximum 1100`);
  if (hint.length > 220) warn(w, `hint is ${hint.length} chars; a hint is a nudge, not a second back`);
  for (const [f, v] of [['front', front], ['hint', hint], ['back', back]]) {
    if (/^\s*TODO/i.test(v)) err(w, `${f} still holds a TODO placeholder`);
    if (DANGEROUS.test(v)) err(w, `${f} contains markup that must never reach innerHTML`);
    const tags = [...v.matchAll(/<\s*\/?\s*([a-z][a-z0-9-]*)/gi)].map(m => m[1]);
    const bad = [...new Set(tags.filter(t => !ALLOWED_TAG.test(t)))];
    if (bad.length) err(w, `${f} uses HTML tag(s) outside the allow-list: ${bad.join(', ')}`);
    if (f !== 'back' && HTML_TAG.test(v)) err(w, `${f} contains an HTML tag; only the back of a card renders HTML`);
  }
  if (FRAMING.test(front)) err(w, 'front carries a generator framing suffix such as "(Dr Failover)"');
  for (const re of BOILERPLATE) if (re.test(front) || re.test(back)) { err(w, `generator boilerplate pattern ${re}`); break; }
  const fk = norm(front.replace(/\s*\([^()]*\)\s*$/, ''));
  if (fronts.has(fk)) err(w, `same front as ${fronts.get(fk)}`); else fronts.set(fk, c.id);
  const bk = norm(back);
  if (backs.has(bk)) err(w, `same back as ${backs.get(bk)}; one fact, one card`); else backs.set(bk, c.id);
}
finish();
