#!/usr/bin/env node
/**
 * Renders coverage/coverage-summary.json as a markdown table.
 * CI appends it to the job summary; locally it just prints.
 */
import fs from 'fs';

const FILE = 'coverage/coverage-summary.json';
if (!fs.existsSync(FILE)) {
  console.error(`No ${FILE} — run "npm run coverage" first.`);
  process.exit(1);
}

const summary = JSON.parse(fs.readFileSync(FILE, 'utf8'));
const thresholds = JSON.parse(fs.readFileSync('.c8rc.json', 'utf8'));
const metrics = ['statements', 'branches', 'functions', 'lines'];

const rows = metrics.map(metric => {
  const { pct, covered, total } = summary.total[metric];
  const min = thresholds[metric];
  return `| ${metric} | ${pct}% | ${covered}/${total} | ${min}% | ${pct >= min ? '✅' : '❌'} |`;
});

console.log('### Coverage\n');
console.log('| Metric | Covered | Ratio | Threshold | |');
console.log('|---|---|---|---|---|');
for (const row of rows) console.log(row);
