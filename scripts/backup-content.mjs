#!/usr/bin/env node
/**
 * Snapshots every authored content file into .content-backups/<timestamp>/.
 * Cheap insurance: the packs are the only irreplaceable artefacts in this repo,
 * and `npm run check` runs this first so there is always a recent copy.
 *
 * Run: npm run backup   ·   restore by copying a folder back over src/data/certs/
 */
import fs from 'fs';
import path from 'path';

const CERTS = 'src/data/certs';
const ROOT = '.content-backups';
const KEEP = 10;

const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const dest = path.join(ROOT, stamp);
let files = 0;

for (const certId of fs.readdirSync(CERTS)) {
  const certDir = path.join(CERTS, certId);
  if (!fs.statSync(certDir).isDirectory()) continue;
  for (const rel of ['cert.js', 'questions', 'flashcards']) {
    const src = path.join(certDir, rel);
    if (!fs.existsSync(src)) continue;
    const isDir = fs.statSync(src).isDirectory();
    const entries = isDir ? fs.readdirSync(src).map(f => path.join(src, f)) : [src];
    for (const file of entries) {
      if (!file.endsWith('.js')) continue;
      if (fs.statSync(file).size <= 30) continue;   // skip empty scaffolds
      const target = path.join(dest, path.relative(CERTS, file));
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.copyFileSync(file, target);
      files++;
    }
  }
}

// Prune old snapshots so this never grows unbounded.
const snapshots = fs.existsSync(ROOT) ? fs.readdirSync(ROOT).sort() : [];
for (const old of snapshots.slice(0, Math.max(0, snapshots.length - KEEP))) {
  fs.rmSync(path.join(ROOT, old), { recursive: true, force: true });
}

console.log(`backed up ${files} content file(s) to ${dest}`);
