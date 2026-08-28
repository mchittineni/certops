import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

function getFiles(dir, match) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(full, match));
    } else if (match.test(file)) {
      results.push(full);
    }
  });
  return results;
}

const files = getFiles('./src/data/certs', /pack-\d+\.js$/).filter(f => f.includes('/questions/'));

function hashStr(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function shuffleArray(arr, seed) {
  const a = arr.slice();
  let s = (seed ^ 0x5DEECE66) & 0xFFFFFFFF;
  for (let i = a.length - 1; i > 0; i--) {
    s = (Math.imul(s, 1103515245) + 12345) & 0x7FFFFFFF;
    const j = Math.floor((s / 0x7FFFFFFF) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatQuestion(q, indent = '  ') {
  const innerIndent = indent + '  ';
  const optIndent = innerIndent + '  ';
  
  const optionsStr = '[\n' + q.options.map(opt => {
    return `${optIndent}{ id: '${opt.id}', text: ${JSON.stringify(opt.text)} }`;
  }).join(',\n') + `\n${innerIndent}]`;

  const answersStr = '[' + q.correctAnswers.map(a => `'${a}'`).join(', ') + ']';
  const tagsStr = q.tags && q.tags.length ? '[' + q.tags.map(t => JSON.stringify(t)).join(', ') + ']' : '[]';

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

let totalShuffled = 0;
let dist = { A: 0, B: 0, C: 0, D: 0, multi: 0 };

for (const file of files) {
  const fileUrl = pathToFileURL(path.resolve(file)).href + '?t=' + Date.now();
  const mod = await import(fileUrl);
  const arrayExportKey = Object.keys(mod).find(k => k !== 'default');
  const items = mod.default || mod[arrayExportKey];
  
  const shuffledItems = items.map(q => {
    totalShuffled++;
    const correctTexts = q.correctAnswers.map(ansId => {
      const opt = q.options.find(o => o.id === ansId);
      return opt ? opt.text : null;
    }).filter(Boolean);

    const seed = hashStr(q.id || file);
    const shuffledRawOptions = shuffleArray(q.options, seed);
    
    const newOptions = shuffledRawOptions.map((opt, idx) => ({
      id: String.fromCharCode(65 + idx),
      text: opt.text
    }));

    const newCorrectAnswers = newOptions
      .filter(opt => correctTexts.includes(opt.text))
      .map(opt => opt.id);

    if (newCorrectAnswers.length === 1) {
      dist[newCorrectAnswers[0]] = (dist[newCorrectAnswers[0]] || 0) + 1;
    } else {
      dist.multi++;
    }

    return {
      ...q,
      options: newOptions,
      correctAnswers: newCorrectAnswers
    };
  });

  const formattedQuestions = shuffledItems.map(q => formatQuestion(q, '  ')).join(',\n');
  const fileContent = `export const ${arrayExportKey} = [\n${formattedQuestions}\n];\n\nexport default ${arrayExportKey};\n`;

  fs.writeFileSync(file, fileContent, 'utf8');
}

console.log(`Successfully shuffled ${totalShuffled} questions across ${files.length} packs.`);
console.log('New balanced distribution:', dist);
