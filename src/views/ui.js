/** Shared markup helpers: icons, badges, and the difficulty chip row. */
import { DIFFICULTY_OPTIONS } from '../lib/select.js';

export const icon = {
  home: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>',
  book: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
  clock: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  file: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg>',
  check: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
  play: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>',
  help: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
  cards: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="14" height="14" rx="2"></rect><path d="M8 3h12a2 2 0 0 1 2 2v12"></path></svg>',
  bolt: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
  brain: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5a3 3 0 0 0-6 0v1a3 3 0 0 0-1 5.8V15a4 4 0 0 0 7 2.6"></path><path d="M12 5a3 3 0 0 1 6 0v1a3 3 0 0 1 1 5.8V15a4 4 0 0 1-7 2.6"></path><line x1="12" y1="5" x2="12" y2="19"></line></svg>',
  flag: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>',
  back: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>',
  forward: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>',
  external: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
  refresh: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>',
  shield: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>'
};

export function escapeHtml(text) {
  return String(text == null ? '' : text)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

export function difficultyPill(difficulty) {
  return `<span class="diff-pill diff-${difficulty}">${difficulty}</span>`;
}

/**
 * The difficulty filter row. `action` is dispatched with data-difficulty so the
 * same component drives the module page, the flashcard deck, and the bank.
 */
export function difficultyFilter(active, action, counts = null, { includeAdaptive = true } = {}) {
  const options = includeAdaptive ? DIFFICULTY_OPTIONS : DIFFICULTY_OPTIONS.filter(o => o.id !== 'adaptive');
  return `
    <div class="diff-filter" role="group" aria-label="Question difficulty">
      ${options.map(opt => {
        const count = counts && counts[opt.id] !== undefined ? counts[opt.id] : null;
        const empty = count === 0;
        return `
          <button class="diff-chip diff-chip-${opt.id} ${active === opt.id ? 'active' : ''} ${empty ? 'empty' : ''}"
                  data-action="${action}" data-difficulty="${opt.id}" title="${escapeHtml(opt.blurb)}">
            ${opt.label}${count !== null ? `<span class="diff-count">${count}</span>` : ''}
          </button>
        `;
      }).join('')}
    </div>
  `;
}

export function difficultyBlurb(difficulty) {
  const opt = DIFFICULTY_OPTIONS.find(o => o.id === difficulty);
  return opt ? opt.blurb : '';
}

export function progressBar(pct, tone = '') {
  return `<div class="progress-track"><div class="progress-fill ${tone}" style="width:${Math.max(0, Math.min(100, pct))}%;"></div></div>`;
}

export function spinner(label = 'Loading question bank…') {
  return `<div class="loading-state"><div class="spinner"></div><p>${escapeHtml(label)}</p></div>`;
}
