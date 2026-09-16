/**
 * Reading and rewriting question packs in place.
 *
 * Packs are hand-editable JS modules, so anything that rewrites them has to emit
 * the same shape the repository already uses. That formatter used to live inside
 * scripts/shuffle-options.mjs; it moved here when a second writer
 * (apply-option-rewrites.mjs) needed it, so the two cannot drift and start
 * producing files that differ only in whitespace.
 */
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { CONTENT_REGISTRY } from './content-io.mjs';

const SRC_DATA = 'src/data';

/** Absolute path for a registry pack specifier ('./certs/x/questions/pack-1.js'). */
export const packPath = spec => path.resolve(SRC_DATA, spec);

/** Every question pack file for one certification, in registry order. */
export function certPackFiles(certId) {
  const entry = CONTENT_REGISTRY[certId];
  if (!entry) throw new Error(`Unknown certification "${certId}"`);
  return (entry.questions || []).map(p => packPath(p.path));
}

/** Import a pack fresh, bypassing the module cache so repeated writes re-read. */
export async function readPack(file) {
  const mod = await import(pathToFileURL(file).href + '?t=' + Date.now());
  const exportName = Object.keys(mod).find(k => k !== 'default');
  const items = mod.default || mod[exportName];
  if (!Array.isArray(items)) throw new Error(`${file} does not export an array`);
  return { exportName, items };
}

export function formatQuestion(q, indent = '  ', tagSep = ', ') {
  const innerIndent = indent + '  ';
  const optIndent = innerIndent + '  ';

  const optionsStr = '[\n' + q.options.map(opt =>
    `${optIndent}{ id: '${opt.id}', text: ${JSON.stringify(opt.text)} }`
  ).join(',\n') + `\n${innerIndent}]`;

  const answersStr = '[' + q.correctAnswers.map(a => `'${a}'`).join(', ') + ']';
  const tagsStr = q.tags && q.tags.length ? '[' + q.tags.map(t => JSON.stringify(t)).join(tagSep) + ']' : '[]';

  return `${indent}{\n` +
    `${innerIndent}id: ${JSON.stringify(q.id)},\n` +
    `${innerIndent}difficulty: ${JSON.stringify(q.difficulty)},\n` +
    `${innerIndent}certId: ${JSON.stringify(q.certId)},\n` +
    `${innerIndent}domainId: ${JSON.stringify(q.domainId)},\n` +
    `${innerIndent}domainName: ${JSON.stringify(q.domainName)},\n` +
    `${innerIndent}title: ${JSON.stringify(q.title)},\n` +
    `${innerIndent}scenario: ${JSON.stringify(q.scenario)},\n` +
    `${innerIndent}question: ${JSON.stringify(q.question)},\n` +
    `${innerIndent}options: ${optionsStr},\n` +
    `${innerIndent}correctAnswers: ${answersStr},\n` +
    `${innerIndent}type: ${JSON.stringify(q.type)},\n` +
    `${innerIndent}explanation: ${JSON.stringify(q.explanation)},\n` +
    (q.referenceUrl ? `${innerIndent}referenceUrl: ${JSON.stringify(q.referenceUrl)},\n` : '') +
    `${innerIndent}tags: ${tagsStr}\n` +
    `${indent}}`;
}

/**
 * Two tag spellings are already committed — `["a", "b"]` and `["a","b"]` — because
 * an earlier formatter emitted the second. A rewrite keeps whichever the file
 * already uses, so a one-option edit shows up as a one-line diff rather than
 * reformatting every question in the pack.
 */
const tagSepOf = file => {
  try {
    return /tags: \[[^\]\n]*",[^\s]/.test(fs.readFileSync(file, 'utf8')) ? ',' : ', ';
  } catch { return ', '; }
};

export function writePack(file, exportName, items) {
  const sep = tagSepOf(file);
  const body = items.map(q => formatQuestion(q, '  ', sep)).join(',\n');
  fs.writeFileSync(file, `export const ${exportName} = [\n${body}\n];\n\nexport default ${exportName};\n`, 'utf8');
}

/** Longest key length minus longest distractor length — the per-item length tell. */
export function lengthGap(q) {
  const key = new Set(q.correctAnswers || []);
  const keys = (q.options || []).filter(o => key.has(o.id));
  const dist = (q.options || []).filter(o => !key.has(o.id));
  if (!keys.length || !dist.length) return null;
  return Math.max(...keys.map(o => (o.text || '').length)) -
    Math.max(...dist.map(o => (o.text || '').length));
}

/**
 * Short stable handle for one option's text, so a rewrite can name the option it
 * replaces without the author re-typing 200 characters of backticks and HTML
 * entities exactly. Content-addressed on purpose: once the text is rewritten the
 * old handle stops resolving, which makes a patch applied twice an error rather
 * than a silent no-op.
 */
export const optionHash = text => crypto.createHash('sha1').update(String(text)).digest('hex').slice(0, 8);

/** Option sets are compared order-independently: the shuffler re-letters them. */
export const optionSignature = q => (q.options || []).map(o => o.text).slice().sort().join('\u0000');
