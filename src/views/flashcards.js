import { countByDifficulty } from '../lib/select.js';
import { deckStats, getCardState, BOX_INTERVALS_DAYS, MASTERED_BOX } from '../lib/srs.js';
import { icon, difficultyFilter, difficultyPill, progressBar, escapeHtml, spinner } from './ui.js';
import { providerIcon } from './brand.js';

export function renderFlashcards(state, content) {
  const cert = state.quiz.cert;
  const cards = state.cards;
  if (!cert) return '<p>Certification not found.</p>';
  if (!content) return spinner('Loading flashcard deck…');

  const counts = countByDifficulty(content.flashcards);
  const filterCounts = { ...counts, mixed: content.flashcards.length };
  const stats = deckStats(cards.deck);

  if (cards.finished || !cards.deck.length) {
    return renderDeckSummary(state, content, filterCounts, stats);
  }

  const card = cards.deck[cards.index];
  const cardState = getCardState(card.id);
  const domain = cert.domains.find(d => d.id === card.domainId);
  const progress = Math.round((cards.index / cards.deck.length) * 100);

  return `
    <div class="cards-page">
      <div class="cards-top">
        <button class="btn-ghost" data-action="open-cert" data-cert-id="${cert.id}">${icon.back} ${escapeHtml(cert.code)} module</button>
        <div class="cards-counter">Card ${cards.index + 1} of ${cards.deck.length}</div>
        <div class="cards-tally">
          <span class="tally good">${cards.session.good} got it</span>
          <span class="tally bad">${cards.session.again} again</span>
        </div>
      </div>

      <div class="quiz-progress">${`<div class="quiz-progress-fill" style="width:${progress}%"></div>`}</div>

      <div class="flashcard ${cards.revealed ? 'revealed' : ''}" data-action="flip-card" role="button" tabindex="0" aria-label="Flip card">
        <div class="flashcard-inner">
          <div class="flashcard-face flashcard-front">
            <div class="flashcard-meta">
              ${difficultyPill(card.difficulty)}
              <span class="flashcard-domain">${escapeHtml(domain ? domain.name : '')}</span>
              ${cardState.reviews ? `<span class="box-chip" title="Leitner box ${cardState.box} · next review in ${BOX_INTERVALS_DAYS[cardState.box]} day(s)">box ${cardState.box}${cardState.box >= MASTERED_BOX ? ' · mastered' : ''}</span>` : '<span class="box-chip new">new</span>'}
            </div>
            <div class="flashcard-question">${escapeHtml(card.front)}</div>
            ${card.hint ? `<div class="flashcard-hint">${icon.help} ${escapeHtml(card.hint)}</div>` : ''}
            <div class="flashcard-cta">Click, tap, or press Space to reveal</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-meta">${difficultyPill(card.difficulty)}<span class="flashcard-domain">${escapeHtml(domain ? domain.name : '')}</span></div>
            <div class="flashcard-answer">${card.back}</div>
            ${card.tags && card.tags.length ? `<div class="tag-row">${card.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>` : ''}
          </div>
        </div>
      </div>

      <div class="cards-controls">
        ${cards.revealed ? `
          <button class="btn-secondary grade-again" data-action="grade-card" data-grade="again">↻ Again <span class="key-hint">1</span></button>
          <button class="btn-primary grade-good" data-action="grade-card" data-grade="good">✓ Got it <span class="key-hint">2</span></button>
        ` : `
          <button class="btn-secondary" data-action="skip-card">Skip</button>
          <button class="btn-primary" data-action="flip-card">Reveal answer <span class="key-hint">space</span></button>
        `}
      </div>

      <p class="fineprint">Grading "Again" resets the card to box 0 so it returns today. "Got it" promotes it — ${BOX_INTERVALS_DAYS.map((d, i) => `box ${i}: ${d === 0 ? 'today' : d + 'd'}`).join(' · ')}. Progress is stored in this browser only.</p>
    </div>
  `;
}

function renderDeckSummary(state, content, filterCounts, stats) {
  const cert = state.quiz.cert;
  const cards = state.cards;
  const reviewed = cards.session.reviewed.length;
  const accuracy = reviewed ? Math.round((cards.session.good / reviewed) * 100) : 0;

  return `
    <div class="cards-page">
      <button class="btn-ghost" data-action="open-cert" data-cert-id="${cert.id}">${icon.back} ${escapeHtml(cert.code)} module</button>

      <div class="panel">
        <div class="panel-head"><h2>${providerIcon(cert.provider, { size: 22 })} ${reviewed ? 'Deck complete' : 'Flashcard deck'}</h2><span class="panel-note">${escapeHtml(cert.title)}</span></div>

        ${reviewed ? `
          <div class="stat-row">
            <div class="stat-tile"><strong>${reviewed}</strong><span>reviewed</span></div>
            <div class="stat-tile"><strong>${cards.session.good}</strong><span>got it</span></div>
            <div class="stat-tile"><strong>${cards.session.again}</strong><span>need repeat</span></div>
            <div class="stat-tile"><strong>${accuracy}%</strong><span>recall rate</span></div>
          </div>
        ` : ''}

        <div class="deck-mastery">
          <div class="domain-stat-header"><span>Deck mastery</span><span>${stats.mastered}/${stats.total} cards in box ${MASTERED_BOX}+</span></div>
          ${progressBar(stats.masteryPct, stats.masteryPct >= 75 ? 'good' : '')}
          <div class="deck-legend">
            <span>${stats.due} due now</span><span>${stats.unseen} never seen</span><span>${stats.learning} learning</span><span>${stats.mastered} mastered</span>
          </div>
        </div>

        <div class="panel-head"><h3>Filter the deck</h3></div>
        ${difficultyFilter(cards.difficulty, 'set-card-difficulty', filterCounts, { includeAdaptive: false })}

        <div class="deck-domain-filter">
          <button class="filter-chip ${!cards.domainId ? 'active' : ''}" data-action="set-card-domain" data-domain-id="">All domains</button>
          ${cert.domains.map(d => {
            const n = content.flashcards.filter(c => c.domainId === d.id).length;
            return `<button class="filter-chip ${cards.domainId === d.id ? 'active' : ''}" data-action="set-card-domain" data-domain-id="${d.id}" ${n ? '' : 'disabled'}>${escapeHtml(d.name)} (${n})</button>`;
          }).join('')}
        </div>

        <div class="results-actions">
          <button class="btn-primary" data-action="start-cards">${icon.cards} ${reviewed ? 'Study again' : 'Start studying'}</button>
          <button class="btn-secondary" data-action="start-cards" data-due-only="1">Due &amp; new only (${stats.due + stats.unseen})</button>
          <button class="btn-secondary btn-danger" data-action="reset-deck">Reset deck progress</button>
        </div>
      </div>
    </div>
  `;
}
