import { icon, progressBar, difficultyPill, escapeHtml } from './ui.js';
import { certIcon } from './brand.js';

/** Score a finished session — also the shape written to attempt history. */
export function scoreSession(quiz) {
  const { cert, questions, answers } = quiz;
  const byDomain = {};
  const byDifficulty = { easy: { correct: 0, total: 0 }, medium: { correct: 0, total: 0 }, hard: { correct: 0, total: 0 } };
  const missed = [];
  let correctCount = 0;

  cert.domains.forEach(d => { byDomain[d.id] = { name: d.name, weight: d.weight, correct: 0, total: 0 }; });

  const groupKey = q => (cert.groupByCert ? q.certId : q.domainId);

  for (const q of questions) {
    const given = (answers[q.id] || []).slice().sort().join(',');
    const expected = (q.correctAnswers || []).slice().sort().join(',');
    const right = given !== '' && given === expected;
    if (right) correctCount++; else missed.push(q);

    if (byDomain[groupKey(q)]) {
      byDomain[groupKey(q)].total++;
      if (right) byDomain[groupKey(q)].correct++;
    }
    if (byDifficulty[q.difficulty]) {
      byDifficulty[q.difficulty].total++;
      if (right) byDifficulty[q.difficulty].correct++;
    }
  }

  const answeredTotal = questions.length || 1;
  const percentage = Math.round((correctCount / answeredTotal) * 100);
  const scaledScore = Math.round((percentage / 100) * cert.maxScore);

  return {
    certId: cert.id,
    certCode: cert.code,
    mode: quiz.mode,
    difficulty: quiz.difficulty,
    finalLevel: quiz.level,
    total: questions.length,
    correct: correctCount,
    percentage,
    scaledScore,
    passed: scaledScore >= cert.passingScore,
    byDomain,
    byDifficulty,
    missed,
    durationSeconds: quiz.elapsedSeconds
  };
}

export function renderResults(state) {
  const r = state.results;
  const cert = state.quiz.cert;
  if (!r) return '<p>No results to show.</p>';

  const mins = Math.floor(r.durationSeconds / 60);
  const secs = r.durationSeconds % 60;

  return `
    <div class="results-card">
      <span class="provider-badge ${cert.badgeClass}">${cert.groupByCert ? '' : certIcon(cert, { size: 15, tone: 'inherit' })} ${escapeHtml(cert.provider)} • ${escapeHtml(cert.code)}</span>
      <h1>${escapeHtml(cert.title)}</h1>
      <p class="results-sub">
        ${{ quick: 'Quick quiz', practice: 'Practice session', daily: 'Daily challenge', exam: 'Exam simulation' }[r.mode] || 'Session'} ·
        ${r.difficulty === 'adaptive' ? `adaptive (finished at ${r.finalLevel})` : `${r.difficulty} difficulty`} ·
        ${mins}m ${secs}s
      </p>

      <div class="score-badge ${r.passed ? 'passed' : 'failed'}">
        <span class="score-val">${r.scaledScore}</span>
        <span class="score-label">${r.passed ? 'PASSED' : 'NEEDS STUDY'}</span>
      </div>

      <p class="results-headline">
        You answered <span class="accent">${r.correct} of ${r.total}</span> correctly (${r.percentage}%).
        <br><span class="panel-note">Passing threshold: ${cert.passingScore} / ${cert.maxScore}</span>
      </p>

      <div class="domain-breakdown">
        <h3>Accuracy by difficulty</h3>
        ${['easy', 'medium', 'hard'].map(band => {
          const s = r.byDifficulty[band];
          if (!s.total) return '';
          const pct = Math.round((s.correct / s.total) * 100);
          return `
            <div class="domain-stat">
              <div class="domain-stat-header">
                <span>${difficultyPill(band)}</span>
                <span>${s.correct}/${s.total} (${pct}%)</span>
              </div>
              ${progressBar(pct, pct >= 75 ? 'good' : pct < 50 ? 'bad' : '')}
            </div>
          `;
        }).join('')}
      </div>

      <div class="domain-breakdown">
        <h3>${cert.groupByCert ? 'Breakdown by certification' : 'Domain mastery breakdown'}</h3>
        ${Object.values(r.byDomain).map(d => {
          const pct = d.total ? Math.round((d.correct / d.total) * 100) : 0;
          return `
            <div class="domain-stat">
              <div class="domain-stat-header">
                <span>${escapeHtml(d.name)} ${d.weight ? `<span class="panel-note">(${d.weight}% of exam)</span>` : ''}</span>
                <span>${d.correct}/${d.total} (${d.total ? pct + '%' : 'not sampled'})</span>
              </div>
              ${progressBar(pct, pct >= 75 ? 'good' : pct < 50 ? 'bad' : '')}
            </div>
          `;
        }).join('')}
      </div>

      ${r.missed.length ? `
        <div class="missed-list">
          <h3>${r.missed.length} to revisit</h3>
          ${r.missed.map(q => `
            <details class="missed-item">
              <summary>
                <span>${escapeHtml(q.title)}</span>
                ${difficultyPill(q.difficulty)}
              </summary>
              <p class="question-scenario">${escapeHtml(q.scenario)}</p>
              <p class="question-prompt">${escapeHtml(q.question)}</p>
              <p class="missed-answer">Correct answer: <strong>${q.correctAnswers.join(', ')}</strong></p>
              <p class="explanation-text">${escapeHtml(q.explanation)}</p>
              ${q.referenceUrl ? `<a class="reference-link" href="${escapeHtml(q.referenceUrl)}" target="_blank" rel="noopener noreferrer"><span>Documentation</span>${icon.external}</a>` : ''}
            </details>
          `).join('')}
        </div>
      ` : '<div class="callout good">Clean sweep — every question correct. Try a harder band or adaptive mode.</div>'}

      <div class="results-actions">
        ${cert.groupByCert ? `
          <button class="btn-primary" data-action="go-home">${icon.home} Back to catalogue</button>
          <button class="btn-secondary" data-action="start-daily">${icon.refresh} Replay today's challenge</button>
        ` : `
          <button class="btn-primary" data-action="retake-quiz">${icon.refresh} Retake (new questions)</button>
          <button class="btn-secondary" data-action="open-flashcards">${icon.cards} Study flashcards</button>
          <button class="btn-secondary" data-action="open-cert" data-cert-id="${cert.id}">Back to module</button>
        `}
      </div>
    </div>
  `;
}
