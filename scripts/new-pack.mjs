#!/usr/bin/env node
/**
 * Scaffolds a content pack inside a certification folder, so authoring never
 * starts from a blank file and never requires editing a shared registry.
 *
 *   npm run new:pack -- --cert aws-saa --kind questions --count 50
 *   npm run new:pack -- --cert k8s-cka --kind flashcards --count 25 --difficulty hard --domain d2
 */
import fs from 'fs';
import path from 'path';
import { CERTIFICATIONS, DIFFICULTIES } from './lib/content-io.mjs';

const args = {};
for (let i = 2; i < process.argv.length; i += 2) args[process.argv[i].replace(/^--/, '')] = process.argv[i + 1];

const certId = args.cert;
const kind = args.kind || 'questions';
const count = Number(args.count || 25);
const difficulty = args.difficulty || 'medium';

const cert = CERTIFICATIONS.find(c => c.id === certId);
if (!cert) {
  console.error(`Unknown --cert "${certId}". Available: ${CERTIFICATIONS.map(c => c.id).join(', ')}`);
  process.exit(1);
}
if (!['questions', 'flashcards'].includes(kind)) { console.error('--kind must be "questions" or "flashcards"'); process.exit(1); }
if (!DIFFICULTIES.includes(difficulty)) { console.error(`--difficulty must be one of ${DIFFICULTIES.join(', ')}`); process.exit(1); }

const domain = args.domain ? cert.domains.find(d => d.id === args.domain) : cert.domains[0];
if (!domain) { console.error(`Unknown --domain "${args.domain}". Available: ${cert.domains.map(d => d.id).join(', ')}`); process.exit(1); }

const dir = path.join('src/data/certs', certId, kind);
fs.mkdirSync(dir, { recursive: true });
let n = 1;
while (fs.existsSync(path.join(dir, `pack-${n}.js`))) n++;
const file = path.join(dir, `pack-${n}.js`);

const items = Array.from({ length: count }, (_, i) => {
  const id = `${certId}-${kind === 'flashcards' ? 'fc' : 'q'}-p${n}-${i + 1}`;
  if (kind === 'flashcards') {
    return `  {
    id: '${id}',
    difficulty: '${difficulty}',
    certId: '${certId}',
    domainId: '${domain.id}',
    front: 'TODO front of card ${i + 1}',
    hint: 'TODO optional nudge',
    back: 'TODO back of card — at least 40 characters of real explanation.',
    tags: ['TODO']
  }`;
  }
  return `  {
    id: '${id}',
    difficulty: '${difficulty}',
    certId: '${certId}',
    domainId: '${domain.id}',
    domainName: '${domain.name}',
    title: 'TODO short title ${i + 1}',
    scenario: 'TODO scenario ${i + 1}: the situation the candidate is presented with.',
    question: 'TODO question ${i + 1}: what is actually being asked?',
    options: [
      { id: 'A', text: 'TODO option A' },
      { id: 'B', text: 'TODO option B' },
      { id: 'C', text: 'TODO option C' },
      { id: 'D', text: 'TODO option D' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'TODO why the answer is right AND why each distractor is wrong — at least 80 characters.',
    referenceUrl: 'https://TODO',
    tags: ['TODO']
  }`;
}).join(',\n');

const constName = `${certId.toUpperCase().replace(/[^A-Z0-9]/g, '_')}_${kind.toUpperCase()}_${n}`;
fs.writeFileSync(file, `export const ${constName} = [\n${items}\n];\n\nexport default ${constName};\n`);

console.log(`\nCreated ${file} — ${count} ${kind} templates for "${domain.name}" (${difficulty}).`);
console.log(`No registry edit needed. When you have filled it in:\n\n  npm run build:content && npm run check\n`);
