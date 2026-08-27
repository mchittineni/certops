#!/usr/bin/env node
/**
 * Scaffolds a whole certification folder: blueprint + empty question and
 * flashcard pack. Adding a certification is one command plus filling in the
 * blueprint from the official exam guide.
 *
 *   npm run new:cert -- --id aws-sap --provider AWS --code SAP-C02 \
 *     --title "AWS Certified Solutions Architect - Professional" --tier professional
 */
import fs from 'fs';
import path from 'path';

const args = {};
for (let i = 2; i < process.argv.length; i += 2) args[process.argv[i].replace(/^--/, '')] = process.argv[i + 1];

const REQUIRED = ['id', 'provider', 'code', 'title'];
const missing = REQUIRED.filter(k => !args[k]);
if (missing.length) {
  console.error(`Missing required flag(s): ${missing.map(m => '--' + m).join(', ')}`);
  console.error('\nExample:\n  npm run new:cert -- --id aws-sap --provider AWS --code SAP-C02 \\\n    --title "AWS Certified Solutions Architect - Professional" \\\n    --category "Cloud Engineering" --tier professional\n');
  process.exit(1);
}

const TIERS = ['foundational', 'associate', 'professional', 'specialty'];
const CATEGORIES = [
  'Cloud Engineering',
  'DevOps & SRE',
  'Kubernetes & Cloud Native',
  'Platform Engineering',
  'FinOps',
  'DevSecOps & Security'
];
const category = args.category || 'Cloud Engineering';
if (!CATEGORIES.includes(category)) {
  console.error(`--category must be one of:\n  ${CATEGORIES.join('\n  ')}`);
  process.exit(1);
}
const tier = args.tier || 'associate';
if (!TIERS.includes(tier)) { console.error(`--tier must be one of ${TIERS.join(', ')}`); process.exit(1); }
if (!/^[a-z0-9-]+$/.test(args.id)) { console.error('--id must be lowercase kebab-case (it becomes the folder name)'); process.exit(1); }

const BADGE = { AWS: ['badge-aws', 'aws', '#ff9900'], 'Google Cloud': ['badge-gcp', 'googlecloud', '#4285F4'], 'Microsoft Azure': ['badge-azure', 'azure', '#0078D4'] };
const [badgeClass, icon, color] = BADGE[args.provider] || ['badge-k8s', 'kubernetes', '#326CE5'];

const dir = path.join('src/data/certs', args.id);
if (fs.existsSync(dir)) { console.error(`${dir} already exists.`); process.exit(1); }
fs.mkdirSync(path.join(dir, 'questions'), { recursive: true });
fs.mkdirSync(path.join(dir, 'flashcards'), { recursive: true });

const blueprint = {
  id: args.id,
  provider: args.provider,
  code: args.code,
  title: args.title,
  category,
  tier,
  status: 'planned',
  badgeClass,
  icon,
  color,
  description: args.description || 'TODO one-sentence description of what this exam validates.',
  passingScore: Number(args.passingScore || 700),
  maxScore: Number(args.maxScore || 1000),
  defaultTimeMinutes: Number(args.minutes || 130),
  blueprintSource: args.source || 'https://TODO-official-exam-guide',
  blueprintVerified: false,
  domains: [
    { id: 'd1', name: 'TODO Domain 1', weight: 30 },
    { id: 'd2', name: 'TODO Domain 2', weight: 40 },
    { id: 'd3', name: 'TODO Domain 3', weight: 30 }
  ]
};

fs.writeFileSync(path.join(dir, 'cert.js'), `/**
 * ${args.title} (${args.code}) — exam blueprint.
 *
 * status: 'planned' keeps this certification out of the catalogue until it has
 * content. Flip to 'live' once the packs are filled in.
 * blueprintVerified: flip to true only after checking domains and weights
 * against blueprintSource.
 */
export default ${JSON.stringify(blueprint, null, 2)};
`);


console.log(`\nCreated ${dir}/\n  cert.js\n  questions/   (empty — add packs with npm run new:pack)\n  flashcards/  (empty)\n`);
console.log('Next:');
console.log(`  1. fill in domains + weights in ${dir}/cert.js from the official exam guide`);
console.log('  2. npm run build:content');
console.log(`  3. npm run new:pack -- --cert ${args.id} --kind questions --count 50`);
console.log(`  4. flip status to 'live' when the packs have content\n`);
