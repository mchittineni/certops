import { CERTIFICATIONS } from './data/catalog.generated.js';
import { CONTENT_MANIFEST } from './data/manifest.generated.js';
import { loadCertContent, getCachedCertContent, getCertById } from './data/loader.js';
import { state, setTheme, stopTimer } from './state.js';
import {
  buildSession, filterByDifficulty, drawAdaptive, nextAdaptiveLevel,
  isCorrect, recommendedCount
} from './lib/select.js';
import { orderForStudy, recordReview, resetDeck, deckStats } from './lib/srs.js';
import { pickDailyCertIds, buildDailyQuestions, recordDailyResult, DAILY_SIZE } from './lib/daily.js';
import { recordAttempt, clearHistory } from './lib/progress.js';
import { renderHome } from './views/home.js';
import { renderCertModule } from './views/cert.js';
import { renderQuiz, showsFeedback, isLinear } from './views/quiz.js';
import { renderResults, scoreSession } from './views/results.js';
import { renderFlashcards } from './views/flashcards.js';
import { renderBank } from './views/bank.js';
import { icon, spinner, escapeHtml } from './views/ui.js';

document.documentElement.setAttribute('data-theme', state.theme);

/* ------------------------------------------------------------------ render */

function currentContent() {
  return state.certId ? getCachedCertContent(state.certId) : null;
}

function viewContent() {
  if (state.error) {
    return `<div class="empty-state"><h2>Could not load content</h2><p>${escapeHtml(state.error)}</p><button class="btn-primary" data-action="go-home">Back to certifications</button></div>`;
  }
  switch (state.view) {
    case 'cert': return renderCertModule(state, currentContent());
    case 'quiz': return state.loading ? spinner('Building your session…') : renderQuiz(state);
    case 'results': return renderResults(state);
    case 'flashcards': return renderFlashcards(state, currentContent());
    case 'bank': return renderBank(state, state.bank.certId ? getCachedCertContent(state.bank.certId) : null);
    default: return renderHome(state);
  }
}

function navbar() {
  return `
    <header class="navbar">
      <div class="navbar-inner">
        <a href="#" class="brand" data-action="go-home">
          <div class="brand-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 5l6 7-6 7"></path>
              <path d="M21 5l-6 7 6 7"></path>
              <circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none"></circle>
            </svg>
          </div>
          <span>Con<span class="brand-light">verge</span></span>
          <span class="brand-badge">CERT PREP</span>
        </a>
        <nav class="nav-links">
          <button class="nav-btn ${state.view === 'home' ? 'active' : ''}" data-action="go-home">${icon.home} Certifications</button>
          <button class="nav-btn nav-btn-daily" data-action="start-daily">${icon.bolt} Daily Challenge</button>
          <button class="nav-btn ${state.view === 'bank' ? 'active' : ''}" data-action="open-bank">${icon.book} Question Bank</button>
          <button class="theme-toggle" data-action="toggle-theme" title="Toggle light/dark theme">${state.theme === 'dark' ? '☀️' : '🌙'}</button>
        </nav>
      </div>
    </header>
  `;
}

function render() {
  const app = document.getElementById('app');
  const scrollTop = state.view === 'bank' ? window.scrollY : 0;
  const isSearchActive = state.view === 'bank' ? Boolean(state.bank.search) : (state.view === 'home' ? Boolean(state.certSearch) : false);
  const searchRole = state.view === 'bank' ? 'bank-search' : (state.view === 'home' ? 'cert-search' : null);
  const searchLen = state.view === 'bank' ? state.bank.search.length : (state.view === 'home' ? state.certSearch.length : 0);

  app.innerHTML = `${navbar()}<main class="main-content">${viewContent()}</main>`;
  if (state.view === 'bank') window.scrollTo(0, scrollTop);

  if (isSearchActive && searchRole) {
    const input = app.querySelector(`[data-role="${searchRole}"]`);
    if (input) {
      input.focus();
      input.setSelectionRange(searchLen, searchLen);
    }
  }
}

/* ------------------------------------------------------------- quiz engine */

function startTimer() {
  stopTimer();
  state.quiz.timerInterval = setInterval(() => {
    const quiz = state.quiz;
    quiz.elapsedSeconds++;
    if (quiz.mode !== 'practice' && quiz.mode !== 'daily') {
      quiz.timeRemainingSeconds--;
      if (quiz.timeRemainingSeconds <= 0) {
        finishQuiz(true);
        return;
      }
    }
    const box = document.querySelector('.timer-box span');
    if (box) {
      const untimed = quiz.mode === 'practice' || quiz.mode === 'daily';
      const t = untimed ? quiz.elapsedSeconds : quiz.timeRemainingSeconds;
      box.textContent = `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;
      if (!untimed && quiz.timeRemainingSeconds <= 60) box.parentElement.classList.add('urgent');
    }
  }, 1000);
}

function sessionMinutes(cert, mode, count) {
  if (mode === 'quick') return Math.max(2, count);
  if (mode === 'practice') return 0;
  const perQuestion = cert.defaultTimeMinutes / Math.max(1, recommendedCount('exam', 65));
  return Math.max(5, Math.round(perQuestion * count));
}

async function startQuiz(mode) {
  const cert = state.quiz.cert;
  const difficulty = state.quiz.difficulty;
  state.view = 'quiz';
  state.loading = true;
  render();

  const content = await ensureContent(cert.id);
  if (!content) return;

  const pool = filterByDifficulty(content.questions, difficulty);
  const count = recommendedCount(difficulty === 'adaptive' ? 'adaptive' : mode, pool.length);
  const adaptive = difficulty === 'adaptive';

  const questions = adaptive
    ? [drawAdaptive(pool, new Set(), 'medium')].filter(Boolean)
    : buildSession(content.questions, { cert, difficulty, count });

  stopTimer();
  state.quiz = {
    ...state.quiz,
    cert,
    mode,
    difficulty,
    pool,
    questions,
    plannedCount: adaptive ? count : questions.length,
    currentIndex: 0,
    answers: {},
    revealed: new Set(),
    locked: new Set(),
    flagged: new Set(),
    results: [],
    level: 'medium',
    elapsedSeconds: 0,
    timeRemainingSeconds: sessionMinutes(cert, mode, adaptive ? count : questions.length) * 60,
    startedAt: Date.now(),
    timerInterval: null
  };

  state.loading = false;
  render();
  startTimer();
}

/** Advance one question, drawing the next adaptive question when needed. */
function advance() {
  const quiz = state.quiz;
  const q = quiz.questions[quiz.currentIndex];
  if (!q) return;

  if (isLinear(quiz)) {
    quiz.locked.add(q.id);
    quiz.results[quiz.currentIndex] = isCorrect(q, quiz.answers[q.id]);
  }

  if (quiz.difficulty === 'adaptive') {
    quiz.level = nextAdaptiveLevel(quiz.level, quiz.results);
    const asked = new Set(quiz.questions.map(x => x.id));
    const next = drawAdaptive(quiz.pool, asked, quiz.level);
    if (!next) {
      quiz.plannedCount = quiz.questions.length;
      finishQuiz();
      return;
    }
    quiz.questions.push(next);
  }

  if (quiz.currentIndex >= quiz.plannedCount - 1) {
    finishQuiz();
    return;
  }
  quiz.currentIndex++;
  render();
}

function finishQuiz(timeUp = false) {
  stopTimer();
  const quiz = state.quiz;
  if (quiz.difficulty === 'adaptive' || quiz.mode === 'quick') {
    const q = quiz.questions[quiz.currentIndex];
    if (q && quiz.results[quiz.currentIndex] === undefined) {
      quiz.results[quiz.currentIndex] = isCorrect(q, quiz.answers[q.id]);
    }
  }
  // Adaptive sessions draw ahead and can end short if the pool runs dry, so score
  // only what was actually asked. Fixed sessions score every question, including
  // ones left blank when the candidate submits early or the clock expires.
  if (quiz.difficulty === 'adaptive') {
    quiz.questions = quiz.questions.slice(0, Math.max(1, quiz.currentIndex + 1));
    quiz.plannedCount = quiz.questions.length;
  }
  const results = scoreSession(quiz);
  results.timeUp = timeUp;
  state.results = results;
  recordAttempt({
    certId: results.certId,
    mode: results.mode,
    difficulty: results.difficulty,
    finalLevel: results.finalLevel,
    total: results.total,
    correct: results.correct,
    percentage: results.percentage,
    scaledScore: results.scaledScore,
    passed: results.passed,
    byDifficulty: results.byDifficulty
  });
  if (results.mode === 'daily') recordDailyResult(results);
  state.view = 'results';
  render();
}

/**
 * Daily Challenge: a synthetic multi-certification session. Only a bounded
 * number of certifications is loaded (see lib/daily.js) so the cost does not
 * grow with the size of the catalogue.
 */
async function startDaily() {
  const eligible = CERTIFICATIONS
    .filter(c => c.status === 'live' && (CONTENT_MANIFEST[c.id]?.questions.total || 0) > 0)
    .map(c => c.id);
  if (!eligible.length) return;

  state.view = 'quiz';
  state.loading = true;
  render();

  const certIds = pickDailyCertIds(eligible);
  const loaded = [];
  for (const id of certIds) {
    const content = await ensureContent(id);
    if (!content) return;
    loaded.push(content);
  }

  const pool = loaded.flatMap(c => c.questions);
  const questions = buildDailyQuestions(pool);
  const certsById = new Map(CERTIFICATIONS.map(c => [c.id, c]));

  // Synthetic certification: the results screen groups a daily session by
  // certification rather than by domain, because domain ids are only unique
  // within a certification.
  const usedCerts = [...new Set(questions.map(q => q.certId))].map(id => certsById.get(id));
  const dailyCert = {
    id: 'daily',
    provider: 'Mixed',
    code: 'DAILY',
    title: 'Daily Challenge',
    badgeClass: 'badge-daily',
    color: '#8b5cf6',
    passingScore: 70,
    maxScore: 100,
    defaultTimeMinutes: DAILY_SIZE,
    groupByCert: true,
    domains: usedCerts.map(c => ({ id: c.id, name: `${c.code} — ${c.title}`, weight: 0 }))
  };

  stopTimer();
  state.certId = null;
  state.quiz = {
    ...state.quiz,
    cert: dailyCert,
    mode: 'daily',
    difficulty: 'mixed',
    pool,
    questions,
    plannedCount: questions.length,
    currentIndex: 0,
    answers: {},
    revealed: new Set(),
    locked: new Set(),
    flagged: new Set(),
    results: [],
    level: 'medium',
    elapsedSeconds: 0,
    timeRemainingSeconds: 0,
    startedAt: Date.now(),
    timerInterval: null
  };
  state.loading = false;
  render();
  startTimer();
}

/* -------------------------------------------------------------- flashcards */

function buildDeck(dueOnly = false) {
  const content = currentContent();
  if (!content) return;
  const cards = state.cards;
  let pool = content.flashcards;
  if (cards.difficulty !== 'mixed') {
    const scoped = pool.filter(c => c.difficulty === cards.difficulty);
    if (scoped.length) pool = scoped;
  }
  if (cards.domainId) {
    const scoped = pool.filter(c => c.domainId === cards.domainId);
    if (scoped.length) pool = scoped;
  }
  let deck = orderForStudy(pool);
  if (dueOnly) {
    const stats = deckStats(pool);
    const limit = stats.due + stats.unseen;
    deck = limit > 0 ? deck.slice(0, limit) : deck;
  }
  state.cards = { ...cards, deck, index: 0, revealed: false, finished: !deck.length, session: { again: 0, good: 0, reviewed: [] } };
}

function gradeCard(grade) {
  const cards = state.cards;
  const card = cards.deck[cards.index];
  if (!card) return;
  recordReview(card.id, grade);
  cards.session.reviewed.push(card.id);
  if (grade === 'again') {
    cards.session.again++;
    cards.deck = [...cards.deck, card];   // repeat lapsed cards at the end of this session
  } else {
    cards.session.good++;
  }
  cards.revealed = false;
  if (cards.index >= cards.deck.length - 1) cards.finished = true;
  else cards.index++;
  render();
}

/* ------------------------------------------------------------------ helpers */

async function ensureContent(certId) {
  const cached = getCachedCertContent(certId);
  if (cached) return cached;
  try {
    const content = await loadCertContent(certId);
    state.error = null;
    return content;
  } catch (err) {
    state.error = err && err.message ? err.message : String(err);
    state.loading = false;
    render();
    return null;
  }
}

async function openCert(certId) {
  const cert = getCertById(certId);
  if (!cert) return;
  state.certId = certId;
  state.quiz.cert = cert;
  state.view = 'cert';
  stopTimer();
  render();
  if (await ensureContent(certId)) render();
}

async function openFlashcards() {
  const certId = state.certId || (state.quiz.cert && state.quiz.cert.id);
  if (!certId) return;
  state.view = 'flashcards';
  state.cards = { ...state.cards, cert: getCertById(certId), finished: true, deck: [], session: { again: 0, good: 0, reviewed: [] } };
  render();
  if (await ensureContent(certId)) render();
}

async function openBank(certId) {
  const target = certId || state.bank.certId || state.certId || CERTIFICATIONS[0].id;
  state.view = 'bank';
  state.bank = { ...state.bank, certId: target, page: 0 };
  render();
  if (await ensureContent(target)) render();
}

/* ------------------------------------------------------------------ actions */

const actions = {
  'go-home': () => { stopTimer(); state.view = 'home'; state.error = null; render(); },
  'toggle-theme': () => { setTheme(state.theme === 'dark' ? 'light' : 'dark'); render(); },
  'set-provider': el => { state.provider = state.provider === el.dataset.provider ? 'all' : el.dataset.provider; render(); },
  'set-tier': el => { state.tier = state.tier === el.dataset.tier ? 'all' : el.dataset.tier; render(); },
  'set-category': el => {
    const next = el.dataset.category;
    state.category = state.category === next ? 'all' : next;
    render();
  },
  'clear-filters': () => {
    state.category = 'all';
    state.provider = 'all';
    state.tier = 'all';
    state.certSearch = '';
    render();
  },
  'start-daily': () => startDaily(),
  'open-cert': el => openCert(el.dataset.certId || state.certId),
  'open-bank': el => openBank(el.dataset.certId),
  'open-flashcards': () => openFlashcards(),
  'clear-history': () => { if (confirm('Delete all recorded attempts for every certification?')) { clearHistory(); render(); } },

  'set-quiz-difficulty': el => { state.quiz.difficulty = el.dataset.difficulty; render(); },
  'start-quiz': el => startQuiz(el.dataset.mode),

  'toggle-option': el => {
    const quiz = state.quiz;
    const q = quiz.questions[quiz.currentIndex];
    if (!q || quiz.locked.has(q.id) || quiz.revealed.has(q.id)) return;
    const optId = el.dataset.optionId;
    const current = quiz.answers[q.id] || [];
    quiz.answers[q.id] = q.type === 'multiple'
      ? (current.includes(optId) ? current.filter(id => id !== optId) : [...current, optId])
      : [optId];
    render();
  },
  'check-answer': () => {
    const quiz = state.quiz;
    const q = quiz.questions[quiz.currentIndex];
    if (!q || !(quiz.answers[q.id] || []).length) return;
    quiz.revealed.add(q.id);
    if (isLinear(quiz)) {
      quiz.locked.add(q.id);
      quiz.results[quiz.currentIndex] = isCorrect(q, quiz.answers[q.id]);
    }
    render();
  },
  'next-question': () => advance(),
  'prev-question': () => {
    const quiz = state.quiz;
    if (isLinear(quiz) || quiz.currentIndex === 0) return;
    quiz.currentIndex--;
    render();
  },
  'jump-question': el => {
    const quiz = state.quiz;
    if (isLinear(quiz)) return;
    const idx = Number(el.dataset.index);
    if (Number.isInteger(idx) && idx >= 0 && idx < quiz.questions.length) {
      quiz.currentIndex = idx;
      render();
    }
  },
  'toggle-flag': () => {
    const quiz = state.quiz;
    const q = quiz.questions[quiz.currentIndex];
    if (!q) return;
    if (quiz.flagged.has(q.id)) quiz.flagged.delete(q.id); else quiz.flagged.add(q.id);
    render();
  },
  'submit-quiz': () => {
    const quiz = state.quiz;
    const answered = Object.keys(quiz.answers).filter(id => (quiz.answers[id] || []).length).length;
    const unanswered = quiz.plannedCount - answered;
    if (unanswered > 0 && !confirm(`${unanswered} question${unanswered === 1 ? '' : 's'} still unanswered. Submit anyway?`)) return;
    if (quiz.difficulty === 'adaptive' || quiz.mode === 'quick') {
      const q = quiz.questions[quiz.currentIndex];
      if (q) quiz.results[quiz.currentIndex] = isCorrect(q, quiz.answers[q.id]);
    }
    finishQuiz();
  },
  'end-session': () => { if (confirm('End this session and score what you have answered?')) finishQuiz(); },
  'retake-quiz': () => startQuiz(state.quiz.mode),

  'set-card-difficulty': el => { state.cards.difficulty = el.dataset.difficulty; state.cards.finished = true; render(); },
  'set-card-domain': el => { state.cards.domainId = el.dataset.domainId || null; state.cards.finished = true; render(); },
  'start-cards': el => { buildDeck(el.dataset.dueOnly === '1'); render(); },
  'flip-card': () => { state.cards.revealed = !state.cards.revealed; render(); },
  'skip-card': () => {
    const cards = state.cards;
    if (cards.index >= cards.deck.length - 1) cards.finished = true; else cards.index++;
    cards.revealed = false;
    render();
  },
  'grade-card': el => gradeCard(el.dataset.grade),
  'reset-deck': () => {
    const content = currentContent();
    if (content && confirm('Reset spaced-repetition progress for this deck?')) {
      resetDeck(content.flashcards);
      state.cards.finished = true;
      render();
    }
  },

  'set-bank-cert': el => openBank(el.dataset.certId),
  'set-bank-difficulty': el => { state.bank.difficulty = el.dataset.difficulty; state.bank.page = 0; render(); },
  'set-bank-domain': el => { state.bank.domainId = el.dataset.domainId || null; state.bank.page = 0; render(); },
  'bank-page': el => { state.bank.page = Math.max(0, Number(el.dataset.page)); window.scrollTo(0, 0); render(); }
};

/* ------------------------------------------------------------------ wiring */

document.getElementById('app').addEventListener('click', event => {
  const target = event.target.closest('[data-action]');
  if (!target || target.disabled) return;
  const handler = actions[target.dataset.action];
  if (!handler) return;
  if (target.tagName === 'A') event.preventDefault();
  handler(target);
});

document.getElementById('app').addEventListener('change', event => {
  if (event.target.dataset.role === 'bank-cert') openBank(event.target.value);
});

document.getElementById('app').addEventListener('input', event => {
  const role = event.target.dataset.role;
  if (role === 'bank-search') {
    state.bank.search = event.target.value;
    state.bank.page = 0;
    render();
  } else if (role === 'cert-search') {
    state.certSearch = event.target.value;
    render();
  }
});

document.addEventListener('keydown', event => {
  if (event.target.matches('input, textarea')) return;

  if (state.view === 'flashcards' && state.cards.deck.length && !state.cards.finished) {
    if (event.code === 'Space' || event.key === 'Enter') { event.preventDefault(); actions['flip-card'](); return; }
    if (state.cards.revealed && event.key === '1') { gradeCard('again'); return; }
    if (state.cards.revealed && event.key === '2') { gradeCard('good'); return; }
  }

  if (state.view === 'quiz' && state.quiz.questions.length) {
    const quiz = state.quiz;
    const q = quiz.questions[quiz.currentIndex];
    if (!q) return;
    const key = event.key.toUpperCase();
    if (q.options.some(o => o.id === key)) {
      actions['toggle-option']({ dataset: { optionId: key } });
      return;
    }
    if (event.key === 'ArrowRight') {
      if (showsFeedback(quiz) && !quiz.revealed.has(q.id)) actions['check-answer']();
      else if (quiz.currentIndex < quiz.plannedCount - 1) advance();
      return;
    }
    if (event.key === 'ArrowLeft') actions['prev-question']();
  }
});

window.addEventListener('beforeunload', stopTimer);

render();
