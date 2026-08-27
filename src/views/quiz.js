import { isCorrect, LEVELS } from '../lib/select.js';
import { icon, difficultyPill, escapeHtml } from './ui.js';
import { providerIcon } from './brand.js';

const MODE_LABEL = { exam: 'EXAM SIMULATION', practice: 'PRACTICE MODE', quick: 'QUICK QUIZ', daily: 'DAILY CHALLENGE' };

export function showsFeedback(quiz) {
  return quiz.mode === 'practice' || quiz.mode === 'quick' || quiz.mode === 'daily';
}

/** Adaptive and quick sessions are linear: once you advance, the answer is final. */
export function isLinear(quiz) {
  return quiz.difficulty === 'adaptive' || quiz.mode === 'quick' || quiz.mode === 'daily';
}

function formatClock(totalSeconds) {
  const m = Math.floor(Math.max(0, totalSeconds) / 60);
  const s = Math.max(0, totalSeconds) % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function renderQuiz(state) {
  const quiz = state.quiz;
  const { cert, questions, currentIndex, answers, flagged } = quiz;

  if (!questions.length) {
    return `
      <div class="empty-state">
        <h2>No questions matched this difficulty.</h2>
        <p>Try Mixed difficulty, or add content with <code>npm run new:pack</code>.</p>
        <button class="btn-primary" data-action="open-cert" data-cert-id="${cert.id}">Back to module</button>
      </div>
    `;
  }

  const q = questions[currentIndex];
  const selected = answers[q.id] || [];
  const revealed = quiz.revealed.has(q.id);
  const locked = quiz.locked.has(q.id);
  const isFlagged = flagged.has(q.id);
  const feedback = showsFeedback(quiz) && revealed;
  const linear = isLinear(quiz);
  const total = quiz.plannedCount;
  const answeredCount = Object.keys(answers).filter(id => (answers[id] || []).length).length;
  const untimed = quiz.mode === 'practice' || quiz.mode === 'daily';
  const clock = untimed ? formatClock(quiz.elapsedSeconds) : formatClock(quiz.timeRemainingSeconds);
  const lowTime = !untimed && quiz.timeRemainingSeconds <= 60;

  return `
    <div class="quiz-wrapper">
      <div class="quiz-main">
        <div class="quiz-top-bar">
          <div class="exam-badge-group">
            <span class="provider-badge ${cert.badgeClass}">${cert.groupByCert ? '' : providerIcon(cert.provider, { size: 15, tone: 'inherit' })} ${escapeHtml(cert.code)}</span>
            <span class="quiz-counter">Question ${currentIndex + 1} of ${total}</span>
            <span class="mode-chip">${MODE_LABEL[quiz.mode]}</span>
            ${quiz.difficulty === 'adaptive'
              ? `<span class="level-chip level-${quiz.level}" title="Adaptive difficulty level">${icon.brain} ${quiz.level}</span>`
              : difficultyPill(q.difficulty)}
          </div>
          <div class="timer-box ${untimed ? 'practice' : ''} ${lowTime ? 'urgent' : ''}">
            ${icon.clock}<span>${clock}</span>
          </div>
        </div>

        <div class="quiz-progress">${`<div class="quiz-progress-fill" style="width:${Math.round(((currentIndex + 1) / total) * 100)}%"></div>`}</div>

        <div class="question-header">
          <div class="question-domain">${quiz.mode === 'daily' ? `<span class="from-cert">${escapeHtml(q.certId)}</span> · ` : ''}${escapeHtml(q.domainName)} ${quiz.difficulty === 'adaptive' ? difficultyPill(q.difficulty) : ''}</div>
          <h2 class="question-title">${escapeHtml(q.title)}</h2>
          <div class="question-scenario">${escapeHtml(q.scenario)}</div>
          <div class="question-prompt">${escapeHtml(q.question)}</div>
          ${q.type === 'multiple' ? '<div class="multi-hint">Multiple answers required — select every option that applies.</div>' : ''}
        </div>

        <div class="options-list ${locked ? 'locked' : ''}">
          ${q.options.map(opt => {
            const isSelected = selected.includes(opt.id);
            const isRight = q.correctAnswers.includes(opt.id);
            let cls = isSelected ? 'selected' : '';
            if (feedback) {
              if (isRight) cls += ' correct-reveal';
              else if (isSelected) cls += ' incorrect-reveal';
            }
            return `
              <div class="option-item ${cls}" ${locked ? '' : `data-action="toggle-option" data-option-id="${opt.id}"`}>
                <div class="option-badge">${opt.id}</div>
                <div class="option-text">${escapeHtml(opt.text)}</div>
                ${feedback && isRight ? '<div class="option-mark ok">✓</div>' : ''}
                ${feedback && isSelected && !isRight ? '<div class="option-mark no">✕</div>' : ''}
              </div>
            `;
          }).join('')}
        </div>

        ${feedback ? renderExplanation(q, selected) : ''}

        <div class="quiz-footer">
          <div class="quiz-footer-left">
            ${linear ? '' : `
              <button class="btn-secondary ${isFlagged ? 'is-flagged' : ''}" data-action="toggle-flag">
                ${icon.flag} ${isFlagged ? 'Flagged' : 'Flag for Review'}
              </button>
            `}
          </div>
          <div class="quiz-footer-right">
            ${linear ? '' : `
              <button class="btn-secondary" data-action="prev-question" ${currentIndex === 0 ? 'disabled' : ''}>${icon.back} Previous</button>
            `}
            ${showsFeedback(quiz) && !revealed ? `
              <button class="btn-primary" data-action="check-answer" ${selected.length ? '' : 'disabled'}>
                ${icon.shield} Check Answer
              </button>
            ` : renderAdvanceButton(quiz, currentIndex, total, selected)}
          </div>
        </div>
      </div>

      <aside class="quiz-sidebar">
        ${linear ? renderLinearSidebar(quiz, total) : renderNavigator(quiz, total, answeredCount)}
        <button class="btn-secondary btn-danger" data-action="end-session">End Session Early</button>
      </aside>
    </div>
  `;
}

function renderAdvanceButton(quiz, currentIndex, total, selected) {
  const isLast = currentIndex >= total - 1;
  if (isLast) {
    return `<button class="btn-primary btn-submit" data-action="submit-quiz">Submit &amp; Score ${icon.check}</button>`;
  }
  const needsAnswer = isLinear(quiz) && !selected.length;
  return `<button class="btn-primary" data-action="next-question" ${needsAnswer ? 'disabled' : ''}>Next ${icon.forward}</button>`;
}

function renderExplanation(q, selected) {
  const right = isCorrect(q, selected);
  return `
    <div class="explanation-box ${right ? 'is-right' : 'is-wrong'}">
      <div class="explanation-title">
        ${icon.shield}
        <span>${right ? 'Correct' : 'Not quite'} — correct answer: ${q.correctAnswers.join(', ')}</span>
      </div>
      <p class="explanation-text">${escapeHtml(q.explanation)}</p>
      ${q.tags && q.tags.length ? `<div class="tag-row">${q.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>` : ''}
      ${q.referenceUrl ? `
        <a href="${escapeHtml(q.referenceUrl)}" target="_blank" rel="noopener noreferrer" class="reference-link">
          <span>Official documentation reference</span>${icon.external}
        </a>` : ''}
    </div>
  `;
}

function renderNavigator(quiz, total, answeredCount) {
  return `
    <div>
      <div class="nav-grid-title">
        <span>Question Navigator</span>
        <span class="panel-note">${answeredCount}/${total} done</span>
      </div>
      <div class="nav-grid">
        ${quiz.questions.map((ques, idx) => {
          const answered = (quiz.answers[ques.id] || []).length > 0;
          let cls = 'nav-grid-btn';
          if (idx === quiz.currentIndex) cls += ' current';
          if (answered) cls += ' answered';
          if (quiz.flagged.has(ques.id)) cls += ' flagged';
          return `<button class="${cls}" data-action="jump-question" data-index="${idx}">${idx + 1}</button>`;
        }).join('')}
      </div>
    </div>
    <div class="sidebar-legend">
      <div class="legend-item"><div class="legend-dot answered"></div><span>Answered</span></div>
      <div class="legend-item"><div class="legend-dot flagged"></div><span>Flagged for review</span></div>
      <div class="legend-item"><div class="legend-dot unanswered"></div><span>Unanswered</span></div>
    </div>
  `;
}

function renderLinearSidebar(quiz, total) {
  const correct = quiz.results.filter(Boolean).length;
  const answered = quiz.results.length;
  return `
    <div>
      <div class="nav-grid-title"><span>Session</span><span class="panel-note">${answered}/${total}</span></div>
      <div class="streak-row">
        ${Array.from({ length: total }, (_, i) => {
          const r = quiz.results[i];
          const cls = i >= answered ? 'pending' : r ? 'hit' : 'miss';
          return `<div class="streak-dot ${cls}" title="Question ${i + 1}"></div>`;
        }).join('')}
      </div>
      ${quiz.difficulty === 'adaptive' ? `
        <div class="level-ladder">
          <div class="nav-grid-title"><span>Difficulty level</span></div>
          ${LEVELS.slice().reverse().map(l => `
            <div class="ladder-step ${quiz.level === l ? 'active' : ''}">
              <span class="diff-pill diff-${l}">${l}</span>
              ${quiz.level === l ? '<span class="ladder-now">you are here</span>' : ''}
            </div>
          `).join('')}
          <p class="fineprint">Two in a row right moves you up. Two wrong moves you down.</p>
        </div>
      ` : `
        <div class="stat-row stat-row-compact">
          <div class="stat-tile"><strong>${correct}</strong><span>correct</span></div>
          <div class="stat-tile"><strong>${answered - correct}</strong><span>missed</span></div>
        </div>
      `}
    </div>
  `;
}
