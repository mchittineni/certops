/** Central mutable app state. Views read it; actions in app.js write it. */
import { KEYS, migrateLegacyStorage } from './lib/storage.js';

migrateLegacyStorage();
export const state = {
  view: 'home',            // home | cert | quiz | results | flashcards | bank
  category: 'all',
  provider: 'all',
  tier: 'all',
  certSearch: '',
  role: localStorage.getItem(KEYS.role) || null,   // active role path, see data/roles.js
  roleFilter: false,       // when true, the catalogue is narrowed to the active role's path
  theme: localStorage.getItem(KEYS.theme) || 'light',
  certId: null,
  loading: false,
  error: null,

  quiz: {
    cert: null,
    mode: 'exam',          // exam | practice | quick
    difficulty: 'mixed',   // easy | medium | hard | mixed | adaptive
    pool: [],
    questions: [],
    plannedCount: 0,
    currentIndex: 0,
    answers: {},
    revealed: new Set(),
    locked: new Set(),
    flagged: new Set(),
    results: [],
    level: 'medium',
    timeRemainingSeconds: 0,
    elapsedSeconds: 0,
    timerInterval: null,
    startedAt: 0
  },

  cards: {
    cert: null,
    deck: [],
    index: 0,
    revealed: false,
    difficulty: 'mixed',
    domainId: null,
    session: { again: 0, good: 0, reviewed: [] },
    finished: false
  },

  bank: {
    certId: null,
    difficulty: 'mixed',
    domainId: null,
    search: '',
    page: 0,
    perPage: 25
  },

  results: null
};

export function setRole(roleId) {
  state.role = roleId;
  try {
    if (roleId) localStorage.setItem(KEYS.role, roleId);
    else localStorage.removeItem(KEYS.role);
  } catch { /* ignore */ }
}

export function setTheme(theme) {
  state.theme = theme;
  try { localStorage.setItem(KEYS.theme, theme); } catch { /* ignore */ }
  document.documentElement.setAttribute('data-theme', theme);
}

export function stopTimer() {
  if (state.quiz.timerInterval) clearInterval(state.quiz.timerInterval);
  state.quiz.timerInterval = null;
}
