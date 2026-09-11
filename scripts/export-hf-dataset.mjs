#!/usr/bin/env node
/**
 * Builds a Hugging Face dataset from the live certification banks.
 *
 * Writes to dist-dataset/:
 *   questions.jsonl    one row per question, options flattened to a list
 *   flashcards.jsonl   one row per flashcard
 *   certifications.jsonl  one row per certification, with its domain weights
 *   README.md          the dataset card, carrying the CC BY-SA 4.0 licence and
 *                      the trademark notice the content is published under
 *
 * The card reports the answer-giveaway scores from audit-distractors.mjs per
 * certification, because a large part of the bank can still be answered without
 * knowing the material and anyone training on it deserves to see that up front.
 *
 * Publishing is a separate, manual step — see .github/workflows/publish-hf.yml.
 * This script only writes local files and never contacts the network.
 *
 * Run: npm run dataset:export [-- --out <dir>] [-- --only-clean]
 */
import { mkdirSync, writeFileSync, rmSync } from 'fs';
import path from 'path';
import { loadAllContent, flatten } from './lib/content-io.mjs';
import { scoreCertification, THRESHOLDS } from './lib/distractor-metrics.mjs';

const argv = process.argv.slice(2);
const outDir = argv.includes('--out') ? argv[argv.indexOf('--out') + 1] : 'dist-dataset';
/** Restrict the export to certifications that pass every distractor target. */
const onlyClean = argv.includes('--only-clean');

const content = await loadAllContent();
const jsonl = rows => rows.map(r => JSON.stringify(r)).join('\n') + '\n';

const certRows = [];
const questionRows = [];
const cardRows = [];
const scores = [];

for (const [certId, entry] of Object.entries(content)) {
  const cert = entry.cert;
  if (cert.status !== 'live') continue;

  const questions = flatten(entry.questionPacks).map(x => x.item);
  const cards = flatten(entry.flashcardPacks).map(x => x.item);
  if (!questions.length && !cards.length) continue;

  const score = scoreCertification(questions);
  const clean = score && !score.breached;
  if (onlyClean && !clean) continue;
  if (score) scores.push({ certId, ...score, clean });

  certRows.push({
    cert_id: cert.id,
    provider: cert.provider,
    exam_code: cert.code,
    title: cert.title,
    category: cert.category,
    tier: cert.tier,
    description: cert.description,
    passing_score: cert.passingScore ?? null,
    max_score: cert.maxScore ?? null,
    exam_minutes: cert.defaultTimeMinutes ?? null,
    blueprint_source: cert.blueprintSource ?? null,
    blueprint_verified: Boolean(cert.blueprintVerified),
    domains: (cert.domains || []).map(d => ({ id: d.id, name: d.name, weight: d.weight })),
    question_count: questions.length,
    flashcard_count: cards.length
  });

  for (const q of questions) {
    const correct = new Set(q.correctAnswers || []);
    const options = (q.options || []).map(o => o.text);
    questionRows.push({
      id: q.id,
      cert_id: cert.id,
      provider: cert.provider,
      exam_code: cert.code,
      domain_id: q.domainId ?? null,
      domain_name: q.domainName ?? null,
      difficulty: q.difficulty ?? null,
      type: q.type ?? 'single',
      title: q.title ?? null,
      scenario: q.scenario ?? null,
      question: q.question ?? null,
      options,
      // Indices into `options`, so a consumer that shuffles the list keeps the
      // key. The A/B/C/D letters are deliberately not exported: they are a
      // presentation detail and go stale the moment options are reordered.
      answer_indices: (q.options || [])
        .map((o, i) => (correct.has(o.id) ? i : -1))
        .filter(i => i !== -1),
      explanation: q.explanation ?? null,
      reference_url: q.referenceUrl ?? null,
      tags: q.tags || []
    });
  }

  for (const c of cards) {
    cardRows.push({
      id: c.id,
      cert_id: cert.id,
      provider: cert.provider,
      exam_code: cert.code,
      domain_id: c.domainId ?? null,
      difficulty: c.difficulty ?? null,
      front: c.front ?? null,
      hint: c.hint ?? null,
      // Backs carry inline HTML (<strong>, <code>) for emphasis in the app.
      back: c.back ?? null,
      tags: c.tags || []
    });
  }
}

if (!questionRows.length) {
  console.error('Nothing to export. With --only-clean, no certification passed every target.');
  process.exit(1);
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });
writeFileSync(path.join(outDir, 'questions.jsonl'), jsonl(questionRows));
writeFileSync(path.join(outDir, 'flashcards.jsonl'), jsonl(cardRows));
writeFileSync(path.join(outDir, 'certifications.jsonl'), jsonl(certRows));
writeFileSync(path.join(outDir, 'README.md'), card());
console.log(`Wrote ${outDir}/`);
console.log(`  certifications.jsonl  ${certRows.length}`);
console.log(`  questions.jsonl       ${questionRows.length}`);
console.log(`  flashcards.jsonl      ${cardRows.length}`);
console.log(`  README.md             dataset card`);

function card() {
  const passing = scores.filter(s => s.clean).length;
  const rows = scores
    .slice()
    .sort((a, b) => b.longest - a.longest)
    .map(s => `| \`${s.certId}\` | ${s.n} | ${s.longest.toFixed(1)} | ` +
      `${s.shortest === null ? '-' : s.shortest.toFixed(1)} | ${s.strawman.toFixed(1)} | ` +
      `${s.leak.toFixed(1)} | ${s.clean ? 'passes' : 'below target'} |`)
    .join('\n');

  const total = questionRows.length + cardRows.length;
  const sizeCategory = total < 1e3 ? 'n<1K'
    : total < 1e4 ? '1K<n<10K'
    : total < 1e5 ? '10K<n<100K'
    : '100K<n<1M';

  return `---
license: cc-by-sa-4.0
language:
  - en
pretty_name: CertOps Cloud Certification Question Bank
size_categories:
  - ${sizeCategory}
task_categories:
  - question-answering
  - multiple-choice
tags:
  - cloud
  - certification
  - exam-preparation
  - aws
  - azure
  - gcp
  - kubernetes
configs:
  - config_name: questions
    data_files: questions.jsonl
    default: true
  - config_name: flashcards
    data_files: flashcards.jsonl
  - config_name: certifications
    data_files: certifications.jsonl
---

# CertOps Cloud Certification Question Bank

${questionRows.length.toLocaleString()} multiple-choice practice questions and
${cardRows.length.toLocaleString()} flashcards across ${certRows.length} cloud and
platform-engineering certifications, written for exam preparation.

Source: [CertOps](https://github.com/mchittineni/certops).

## Configs

| Config | Rows | Description |
| --- | --- | --- |
| \`questions\` | ${questionRows.length} | Scenario, question, options, answer indices, explanation |
| \`flashcards\` | ${cardRows.length} | Front, hint, back. Backs contain inline HTML |
| \`certifications\` | ${certRows.length} | Exam metadata and official domain weights |

## Answers

\`answer_indices\` holds positions in the \`options\` list, not letters, so the key
survives shuffling. Most questions have exactly one correct index; \`type\` is
\`multi\` where more than one applies.

\`\`\`python
from datasets import load_dataset

ds = load_dataset("REPLACE_WITH_DATASET_ID", "questions", split="train")
row = ds[0]
print(row["question"])
for i, opt in enumerate(row["options"]):
    print("*" if i in row["answer_indices"] else " ", opt)
\`\`\`

## Known limitations

Read this before training on the bank.

**Some certifications still give their answers away through form.** In a weak
item the correct option is the longest one, or the question stem names a term
only the key uses. \`longest%\` is how often the single longest option is correct
and \`shortest%\` how often the single shortest one is — chance is ~25% each on
four options, so a bank at either extreme hands the reader a rule. \`leak%\` is
how often the stem shares a distinctive term with the key that no distractor
uses. ${passing} of ${scores.length} certifications currently pass every target.

| Certification | Questions | longest% | shortest% | strawman% | leak% | Status |
| --- | --- | --- | --- | --- | --- | --- |
${rows}

Targets: longest ≤${THRESHOLDS.longest}%, shortest ≥${THRESHOLDS.shortest}%, strawman ≤${THRESHOLDS.strawman}%, leak ≤${THRESHOLDS.leak}%.
Filter on the certifications marked \`passes\` if you need items that cannot be
answered by shape alone.

**Questions are drawn from a limited topic pool.** Several banks generate 500
questions from roughly 20 underlying topics, each wrapped in a different
scenario context, so topics recur and the surrounding context often does not
bear on the answer.

**Content is unofficial.** It is independently written and has not been reviewed
by any certification body.

## Licence

**CC BY-SA 4.0.** You may share and adapt this content, including commercially,
provided you give credit to the CertOps project, link to the licence, indicate
changes, and license your contributions under the same terms.

## Not affiliated with any certification body

This content is independently written. It is not endorsed by, affiliated with,
or derived from the confidential exam material of AWS, Microsoft, Google, the
Linux Foundation, CNCF, HashiCorp, GitHub, Docker, the FinOps Foundation, the
DevOps Institute, ISC2, OffSec, or any other certification body. Certification
names and exam codes are trademarks of their respective owners and are used only
to identify the exam a question prepares you for.
`;
}
