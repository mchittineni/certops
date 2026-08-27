import { CONTENT_MANIFEST } from '../data/manifest.generated.js';
import { countByDifficulty, recommendedCount, DIFFICULTY_OPTIONS } from '../lib/select.js';
import { deckStats } from '../lib/srs.js';
import { getCertSummary, getDifficultyAccuracy } from '../lib/progress.js';
import { icon, difficultyFilter, difficultyBlurb, progressBar, escapeHtml, spinner } from './ui.js';
import { providerIcon } from './brand.js';

/**
 * The certification study module — the page the whole app now hangs off.
 * One difficulty selection at the top governs every mode launched below it.
 */
export function renderCertModule(state, content) {
  const cert = state.quiz.cert;
  if (!cert) return '<p>Certification not found.</p>';
  if (!content) return spinner(`Loading ${cert.code} content…`);

  const difficulty = state.quiz.difficulty;
  const questionCounts = countByDifficulty(content.questions);
  const cardCounts = countByDifficulty(content.flashcards);
  const available = difficulty === 'mixed' || difficulty === 'adaptive'
    ? content.questions.length
    : (questionCounts[difficulty] || 0);
  const cards = deckStats(content.flashcards);
  const summary = getCertSummary(cert.id);
  const accuracy = getDifficultyAccuracy(cert.id);
  const adaptive = difficulty === 'adaptive';

  const filterCounts = {
    ...questionCounts,
    mixed: content.questions.length,
    adaptive: content.questions.length
  };

  const modes = [
    {
      id: 'exam',
      title: 'Exam Simulation',
      iconKey: 'play',
      meta: `${recommendedCount('exam', available)} questions · ${cert.defaultTimeMinutes} min timer`,
      desc: adaptive
        ? 'Timed, no feedback until you submit — and the difficulty silently tracks your accuracy.'
        : 'Timed, scored against the real passing threshold, with a domain-by-domain breakdown at the end.'
    },
    {
      id: 'practice',
      title: 'Practice & Study',
      iconKey: 'help',
      meta: `${recommendedCount('practice', available)} questions · untimed`,
      desc: 'Check each answer as you go and read the full architecture explanation before moving on.'
    },
    {
      id: 'quick',
      title: 'Quick Quiz',
      iconKey: 'bolt',
      meta: `${recommendedCount('quick', available)} questions · ${recommendedCount('quick', available)} min`,
      desc: 'A short, locked-in drill: answer, see the verdict immediately, no going back. Good for a coffee break.'
    }
  ];

  return `
    <div class="module-page">
      <button class="btn-ghost" data-action="go-home">${icon.back} All certifications</button>

      <header class="module-header" style="border-left: 3px solid ${cert.color};">
        <div class="module-header-main">
          <div class="cert-header">
            <div class="cert-brand">
              ${providerIcon(cert.provider, { size: 30 })}
              <span class="cert-brand-name">${escapeHtml(cert.provider)}</span>
            </div>
            <span class="cert-code">${escapeHtml(cert.code)}</span>
          </div>
          <h1>${escapeHtml(cert.title)}</h1>
          <p>${escapeHtml(cert.description)}</p>
        </div>
        <div class="module-header-stats">
          <div><strong>${content.questions.length}</strong><span>questions</span></div>
          <div><strong>${content.flashcards.length}</strong><span>flashcards</span></div>
          <div><strong>${cert.passingScore}</strong><span>to pass /${cert.maxScore}</span></div>
        </div>
      </header>

      ${summary ? `
        <section class="panel">
          <div class="panel-head"><h2>Your progress</h2><button class="btn-ghost btn-tiny" data-action="clear-history">Reset history</button></div>
          <div class="stat-row">
            <div class="stat-tile"><strong>${summary.best.percentage}%</strong><span>best score</span></div>
            <div class="stat-tile"><strong>${summary.avg}%</strong><span>average</span></div>
            <div class="stat-tile"><strong>${summary.attempts}</strong><span>sessions</span></div>
            <div class="stat-tile"><strong>${cards.masteryPct}%</strong><span>cards mastered</span></div>
          </div>
          <div class="accuracy-grid">
            ${['easy', 'medium', 'hard'].map(band => {
              const a = accuracy[band];
              const pct = a.total ? Math.round((a.correct / a.total) * 100) : null;
              return `
                <div class="accuracy-item">
                  <div class="accuracy-head"><span class="diff-pill diff-${band}">${band}</span><span>${pct === null ? 'not attempted' : `${pct}% · ${a.correct}/${a.total}`}</span></div>
                  ${progressBar(pct || 0, pct !== null && pct >= 75 ? 'good' : pct !== null && pct < 50 ? 'bad' : '')}
                </div>
              `;
            }).join('')}
          </div>
        </section>
      ` : ''}

      <section class="panel">
        <div class="panel-head">
          <h2>1 · Choose your difficulty</h2>
          <span class="panel-note">${available} question${available === 1 ? '' : 's'} available</span>
        </div>
        ${difficultyFilter(difficulty, 'set-quiz-difficulty', filterCounts)}
        <p class="diff-blurb">${escapeHtml(difficultyBlurb(difficulty))}</p>
        ${adaptive ? `
          <div class="callout">
            ${icon.brain}
            <div><strong>Adaptive mode.</strong> The session starts at medium. Two correct answers in a row push you up a band; two wrong pull you back down. Questions are drawn one at a time, so you cannot revisit an earlier answer.</div>
          </div>
        ` : ''}
        ${available === 0 ? `<div class="callout warn">No ${difficulty} questions exist for this certification yet — the session will fall back to the full pool.</div>` : ''}
      </section>

      <section class="panel">
        <div class="panel-head"><h2>2 · Pick a mode</h2></div>
        <div class="mode-grid">
          ${modes.map(mode => `
            <button class="mode-card" data-action="start-quiz" data-mode="${mode.id}">
              <div class="mode-card-icon">${icon[mode.iconKey]}</div>
              <div class="mode-card-body">
                <h3>${mode.title}${adaptive ? ' <span class="mode-tag">adaptive</span>' : ''}</h3>
                <p>${mode.desc}</p>
                <span class="mode-meta">${mode.meta}</span>
              </div>
            </button>
          `).join('')}

          <button class="mode-card mode-card-cards" data-action="open-flashcards">
            <div class="mode-card-icon">${icon.cards}</div>
            <div class="mode-card-body">
              <h3>Flashcards</h3>
              <p>Flip-card recall with Leitner-box spaced repetition. Due cards come back first; mastered cards drop out.</p>
              <span class="mode-meta">${cards.total} cards · ${cards.due} due · ${cards.unseen} new · ${cards.masteryPct}% mastered</span>
            </div>
          </button>

          <button class="mode-card mode-card-bank" data-action="open-bank" data-cert-id="${cert.id}">
            <div class="mode-card-icon">${icon.book}</div>
            <div class="mode-card-body">
              <h3>Question Bank</h3>
              <p>Read every scenario, answer, and explanation for this certification with search and difficulty filters.</p>
              <span class="mode-meta">${content.questions.length} questions · ${cert.domains.length} domains</span>
            </div>
          </button>
        </div>
      </section>

      <section class="panel">
        <div class="panel-head"><h2>Exam blueprint</h2><span class="panel-note">Mixed difficulty samples in these proportions</span></div>
        <div class="domain-breakdown">
          ${cert.domains.map(d => {
            const qCount = (CONTENT_MANIFEST[cert.id]?.questions.byDomain || {})[d.id] || 0;
            return `
              <div class="domain-stat">
                <div class="domain-stat-header">
                  <span>${escapeHtml(d.name)}</span>
                  <span>${d.weight}% blueprint · ${qCount} question${qCount === 1 ? '' : 's'}</span>
                </div>
                ${progressBar(d.weight * 2)}
              </div>
            `;
          }).join('')}
        </div>
      </section>

      <p class="fineprint">Card deck spread: ${['easy', 'medium', 'hard'].map(b => `${cardCounts[b] || 0} ${b}`).join(' · ')}. Difficulty options: ${DIFFICULTY_OPTIONS.map(o => o.label).join(' · ')}.</p>
    </div>
  `;
}
