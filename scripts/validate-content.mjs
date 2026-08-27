#!/usr/bin/env node
/**
 * Content gate. Run before every commit and in CI:  npm run validate
 * Exits 1 on any error. This is what makes a 2,500-question bank maintainable —
 * the schema is enforced by a machine, not by review discipline.
 */
import { loadAllContent, flatten, DIFFICULTIES, countByDifficulty } from './lib/content-io.mjs';

const TARGET_PER_CERT = Number(process.env.TARGET_PER_CERT || 500);
const VERBOSE = process.argv.includes('--verbose');
const errors = [];
const warnings = [];
const plannedCertIds = new Set();
const seenIds = new Set();
const seenPrompts = new Map();

function err(where, msg) { errors.push(`${where}: ${msg}`); }
function warn(where, msg) { warnings.push(`${where}: ${msg}`); }

function normalize(text) {
  return String(text || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

/**
 * Views render content with innerHTML, so a pack is trusted markup. Content is
 * authored in-repo and reviewed, but a pasted exam-guide snippet can carry a tag
 * along with it — this makes that a build failure instead of an injection.
 */
const DANGEROUS_MARKUP = /<\s*(script|iframe|object|embed|link|style|svg|form|meta|base)\b|\son[a-z]+\s*=|javascript:|data:text\/html/i;
const ANY_TAG = /<\s*\/?\s*[a-z][a-z0-9-]*(\s|\/?>)/i;
const ALLOWED_TAGS = /^(em|strong|code|kbd|br|ul|ol|li|p)$/i;

function checkMarkup(item, where, fields) {
  for (const f of fields) {
    const value = String(item[f] ?? '');
    if (!value) continue;
    if (DANGEROUS_MARKUP.test(value)) {
      err(where, `field "${f}" contains markup that must never reach innerHTML (script/iframe/handler/javascript: URL)`);
      continue;
    }
    if (!ANY_TAG.test(value)) continue;
    const tags = [...value.matchAll(/<\s*\/?\s*([a-z][a-z0-9-]*)/gi)].map(m => m[1].toLowerCase());
    const disallowed = [...new Set(tags.filter(tag => !ALLOWED_TAGS.test(tag)))];
    if (disallowed.length) err(where, `field "${f}" uses HTML tag(s) not on the allow-list: ${disallowed.join(', ')}`);
  }
}

/** TODO placeholders are fine while a certification is 'planned' and fatal once it is 'live'. */
function checkUnfilled(item, where, cert, fields) {
  const unfilled = fields.filter(f => /^\s*TODO/i.test(String(item[f] || '')) || String(item[f] || '').includes('https://TODO'));
  if (!unfilled.length) return;
  const msg = `unfilled template field(s): ${unfilled.join(', ')}`;
  if (cert.status === 'live') err(where, msg + ' — a live certification cannot ship TODO content');
  else warn(where, msg);
}

function validateQuestion(q, where, cert) {
  const req = ['id', 'certId', 'domainId', 'domainName', 'difficulty', 'title', 'scenario', 'question', 'options', 'correctAnswers', 'type', 'explanation'];
  for (const f of req) {
    if (q[f] === undefined || q[f] === null || q[f] === '') err(where, `missing field "${f}"`);
  }
  if (q.certId !== cert.id) err(where, `certId "${q.certId}" does not match its pack's certification "${cert.id}"`);
  if (!DIFFICULTIES.includes(q.difficulty)) err(where, `difficulty must be one of ${DIFFICULTIES.join('|')}, got "${q.difficulty}"`);
  if (!cert.domains.some(d => d.id === q.domainId)) err(where, `domainId "${q.domainId}" is not a domain of ${cert.id}`);
  const domain = cert.domains.find(d => d.id === q.domainId);
  if (domain && q.domainName !== domain.name) err(where, `domainName "${q.domainName}" does not match domain ${q.domainId} ("${domain.name}")`);

  if (!Array.isArray(q.options) || q.options.length < 3 || q.options.length > 6) {
    err(where, `expected 3-6 options, got ${Array.isArray(q.options) ? q.options.length : 'none'}`);
  } else {
    const optIds = q.options.map(o => o.id);
    if (new Set(optIds).size !== optIds.length) err(where, 'duplicate option ids');
    for (const o of q.options) if (!o.text) err(where, `option ${o.id} has no text`);
    if (!Array.isArray(q.correctAnswers) || q.correctAnswers.length === 0) {
      err(where, 'correctAnswers must be a non-empty array');
    } else {
      for (const a of q.correctAnswers) if (!optIds.includes(a)) err(where, `correctAnswers references unknown option "${a}"`);
      if (q.type === 'single' && q.correctAnswers.length !== 1) err(where, `type "single" must have exactly 1 correct answer, got ${q.correctAnswers.length}`);
      if (q.type === 'multiple' && q.correctAnswers.length < 2) err(where, `type "multiple" must have 2+ correct answers, got ${q.correctAnswers.length}`);
      if (q.correctAnswers.length === q.options.length) err(where, 'every option is marked correct');
    }
  }
  if (!['single', 'multiple'].includes(q.type)) err(where, `type must be "single" or "multiple", got "${q.type}"`);
  if (q.type === 'multiple' && !/choose\s+(two|three|2|3|all)/i.test(q.question)) {
    warn(where, 'multiple-answer question does not tell the candidate how many to choose');
  }
  if (String(q.explanation).length < 80) warn(where, 'explanation is shorter than 80 characters');
  if (q.referenceUrl && !/^https:\/\//.test(q.referenceUrl)) err(where, 'referenceUrl must be https');
  if (q.tags && !Array.isArray(q.tags)) err(where, 'tags must be an array');
  checkUnfilled(q, where, cert, ['title', 'scenario', 'question', 'explanation', 'referenceUrl']);
  checkMarkup(q, where, ['title', 'scenario', 'question', 'explanation']);
  if (Array.isArray(q.options)) {
    for (const o of q.options) checkMarkup(o, `${where} option ${o.id}`, ['text']);
  }
}

function validateFlashcard(c, where, cert) {
  for (const f of ['id', 'certId', 'domainId', 'difficulty', 'front', 'back']) {
    if (!c[f]) err(where, `missing field "${f}"`);
  }
  if (c.certId !== cert.id) err(where, `certId "${c.certId}" does not match pack certification "${cert.id}"`);
  if (!DIFFICULTIES.includes(c.difficulty)) err(where, `difficulty must be one of ${DIFFICULTIES.join('|')}`);
  if (!cert.domains.some(d => d.id === c.domainId)) err(where, `domainId "${c.domainId}" is not a domain of ${cert.id}`);
  if (String(c.back).length < 40) warn(where, 'back of card is shorter than 40 characters');
  checkUnfilled(c, where, cert, ['front', 'back']);
  checkMarkup(c, where, ['front', 'back']);
}

const TIERS = ['foundational', 'associate', 'professional', 'specialty'];
const STATUSES = ['live', 'planned', 'retired'];
const CATEGORIES = [
  'Cloud Engineering',
  'DevOps & SRE',
  'Kubernetes & Cloud Native',
  'Platform Engineering',
  'FinOps',
  'DevSecOps & Security'
];

function validateBlueprint(cert) {
  const where = `src/data/certs/${cert.id}/cert.js`;
  for (const f of ['id', 'provider', 'code', 'title', 'tier', 'status', 'passingScore', 'maxScore', 'defaultTimeMinutes', 'domains']) {
    if (cert[f] === undefined || cert[f] === null || cert[f] === '') err(where, `missing field "${f}"`);
  }
  if (!TIERS.includes(cert.tier)) err(where, `tier must be one of ${TIERS.join('|')}, got "${cert.tier}"`);
  if (!CATEGORIES.includes(cert.category)) err(where, `category must be one of ${CATEGORIES.join(' | ')}, got "${cert.category}"`);
  if (cert.priority !== null && cert.priority !== undefined && !(Number.isInteger(cert.priority) && cert.priority > 0)) {
    err(where, 'priority must be a positive integer or null');
  }
  if (!STATUSES.includes(cert.status)) err(where, `status must be one of ${STATUSES.join('|')}, got "${cert.status}"`);
  if (!Array.isArray(cert.domains) || !cert.domains.length) {
    err(where, 'domains must be a non-empty array');
  } else {
    const ids = cert.domains.map(d => d.id);
    if (new Set(ids).size !== ids.length) err(where, 'duplicate domain ids');
    const weight = cert.domains.reduce((s, d) => s + (d.weight || 0), 0);
    if (Math.abs(weight - 100) > 1) err(where, `domain weights sum to ${weight}, expected 100`);
    for (const d of cert.domains) {
      if (/^TODO/.test(d.name)) warn(where, `domain ${d.id} still says "${d.name}" — fill it in from the exam guide`);
    }
  }
  if (cert.passingScore > cert.maxScore) err(where, 'passingScore exceeds maxScore');
  if (cert.blueprintSource && !/^https:\/\//.test(cert.blueprintSource)) err(where, 'blueprintSource must be https');
  if (cert.status === 'live' && cert.blueprintVerified !== true) {
    warn(where, 'blueprintVerified is false — confirm domains and weights against the official exam guide, then set it to true');
  }
}

const content = await loadAllContent();

for (const [certId, bundle] of Object.entries(content)) {
  const { cert } = bundle;
  validateBlueprint(cert);
  const questions = flatten(bundle.questionPacks);
  const flashcards = flatten(bundle.flashcardPacks);

  for (const { item, pack } of [...questions, ...flashcards]) {
    const where = `${pack} [${item.id || '<no id>'}]`;
    if (item.id) {
      if (seenIds.has(item.id)) err(where, `duplicate id "${item.id}" (ids must be unique across the whole bank)`);
      seenIds.add(item.id);
    }
  }

  for (const { item, pack } of questions) {
    const where = `${pack} [${item.id || '<no id>'}]`;
    validateQuestion(item, where, cert);
    const key = normalize(item.question) + '|' + normalize(item.scenario);
    if (seenPrompts.has(key)) err(where, `near-duplicate of ${seenPrompts.get(key)} (same scenario + question text)`);
    else seenPrompts.set(key, item.id);
  }

  for (const { item, pack } of flashcards) {
    validateFlashcard(item, `${pack} [${item.id || '<no id>'}]`, cert);
  }

  // Coverage checks: a bank that is 90% easy cannot simulate an exam.
  const qItems = questions.map(q => q.item);
  if (cert.status === 'planned') {
    plannedCertIds.add(certId);
    if (qItems.length) warn(certId, `status is "planned" but it has ${qItems.length} questions — flip status to "live" so it appears in the catalogue`);
    continue;   // planned certifications are exempt from coverage checks
  }
  if (!qItems.length) err(certId, 'status is "live" but it has no questions — scaffold content or set status to "planned"');
  if (qItems.length < TARGET_PER_CERT) {
    warn(certId, `${qItems.length}/${TARGET_PER_CERT} questions toward the target bank size`);
  }

  const byDiff = countByDifficulty(qItems);
  for (const d of DIFFICULTIES) {
    if (byDiff[d] === 0) warn(certId, `no "${d}" questions — the ${d} filter and adaptive mode will fall back to mixed`);
  }
  for (const domain of cert.domains) {
    if (!qItems.some(q => q.domainId === domain.id)) warn(certId, `domain "${domain.name}" has no questions`);
  }
}

/**
 * Planned certifications are expected to be full of TODOs, so their warnings are
 * collapsed to one line each. Without this, seeding 47 roadmap certifications
 * buries the warnings that actually matter under ~200 lines of noise.
 */
const isPlannedWarning = w => [...plannedCertIds].find(id => w.startsWith(`${id}:`) || w.includes(`/certs/${id}/`));

const shown = [];
const plannedCounts = new Map();
for (const w of warnings) {
  const planned = VERBOSE ? null : isPlannedWarning(w);
  if (planned) plannedCounts.set(planned, (plannedCounts.get(planned) || 0) + 1);
  else shown.push(w);
}

for (const w of shown) console.log(`\x1b[33mWARN\x1b[0m  ${w}`);
if (plannedCounts.size) {
  const totalCollapsed = [...plannedCounts.values()].reduce((a, b) => a + b, 0);
  console.log(`\x1b[36mPLANNED\x1b[0m ${plannedCounts.size} certification(s) awaiting content — ${totalCollapsed} warning(s) collapsed (--verbose to expand):`);
  const ids = [...plannedCounts.keys()].sort();
  console.log(`         ${ids.join(', ')}`);
}
for (const e of errors) console.log(`\x1b[31mERROR\x1b[0m ${e}`);
console.log(`\n${seenIds.size} items validated across ${Object.keys(content).length} certifications · ${errors.length} error(s) · ${warnings.length} warning(s)`);
process.exit(errors.length ? 1 : 0);
