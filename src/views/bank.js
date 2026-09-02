import { CERTIFICATIONS, CATEGORIES } from '../data/catalog.generated.js';
import { CONTENT_MANIFEST } from '../data/manifest.generated.js';
import { countByDifficulty } from '../lib/select.js';
import { icon, difficultyFilter, difficultyPill, escapeHtml, spinner } from './ui.js';
import { certIcon } from './brand.js';

/**
 * The bank loads one certification at a time and paginates, so it stays fast
 * whether the bank holds 47 questions or 2,500.
 */
export function renderBank(state, content) {
  const bank = state.bank;
  const cert = CERTIFICATIONS.find(c => c.id === bank.certId);

  const header = `
    <div class="bank-head">
      <div>
        <h1>${cert ? `${certIcon(cert, { size: 24 })} ` : ''}Question Bank</h1>
        <p class="panel-note">Search every scenario, answer, and explanation. Filter by certification, difficulty, and domain.</p>
      </div>
      <div class="bank-cert-select">
        <label for="bank-cert">Certification</label>
        <select id="bank-cert" class="bank-select" data-role="bank-cert" aria-label="Choose a certification">
          ${CATEGORIES.map(category => {
            const inCat = CERTIFICATIONS.filter(c => c.category === category && (CONTENT_MANIFEST[c.id]?.questions.total || 0) > 0);
            if (!inCat.length) return '';
            return `<optgroup label="${escapeHtml(category)}">${inCat.map(c => `
              <option value="${escapeHtml(c.id)}" ${bank.certId === c.id ? 'selected' : ''}>${escapeHtml(c.code)} — ${escapeHtml(c.title)} (${CONTENT_MANIFEST[c.id].questions.total})</option>
            `).join('')}</optgroup>`;
          }).join('')}
        </select>
      </div>
    </div>
  `;

  if (!content) return `<div class="bank-page">${header}${spinner(`Loading ${cert ? cert.code : ''} questions…`)}</div>`;

  const counts = countByDifficulty(content.questions);
  const filterCounts = { ...counts, mixed: content.questions.length };

  let items = content.questions;
  if (bank.difficulty !== 'mixed') items = items.filter(q => q.difficulty === bank.difficulty);
  if (bank.domainId) items = items.filter(q => q.domainId === bank.domainId);
  if (bank.search.trim()) {
    const needle = bank.search.trim().toLowerCase();
    items = items.filter(q =>
      [q.title, q.scenario, q.question, q.explanation, ...(q.tags || [])]
        .join(' ').toLowerCase().includes(needle)
    );
  }

  const pages = Math.max(1, Math.ceil(items.length / bank.perPage));
  const page = Math.min(bank.page, pages - 1);
  const slice = items.slice(page * bank.perPage, page * bank.perPage + bank.perPage);

  return `
    <div class="bank-page">
      ${header}

      <div class="bank-filters">
        ${difficultyFilter(bank.difficulty, 'set-bank-difficulty', filterCounts, { includeAdaptive: false })}
        <input class="bank-search" type="search" placeholder="Search scenarios, services, explanations…"
               value="${escapeHtml(bank.search)}" data-role="bank-search" aria-label="Search the question bank">
      </div>

      <div class="deck-domain-filter">
        <button class="filter-chip ${!bank.domainId ? 'active' : ''}" data-action="set-bank-domain" data-domain-id="">All domains</button>
        ${(cert ? cert.domains : []).map(d => {
          const n = content.questions.filter(q => q.domainId === d.id).length;
          return `<button class="filter-chip ${bank.domainId === d.id ? 'active' : ''}" data-action="set-bank-domain" data-domain-id="${d.id}" ${n ? '' : 'disabled'}>${escapeHtml(d.name)} (${n})</button>`;
        }).join('')}
      </div>

      <div class="bank-summary">
        <span><strong>${items.length}</strong> question${items.length === 1 ? '' : 's'} matched</span>
        ${pages > 1 ? `<span class="panel-note">page ${page + 1} of ${pages}</span>` : ''}
        <button class="btn-secondary btn-tiny" data-action="open-cert" data-cert-id="${escapeHtml(bank.certId)}">${icon.play} Quiz this certification</button>
      </div>

      ${slice.length ? slice.map((q, i) => renderBankItem(q, page * bank.perPage + i + 1)).join('') : `
        <div class="empty-state"><h2>Nothing matched.</h2><p>Clear the search or widen the difficulty filter.</p></div>
      `}

      ${pages > 1 ? `
        <div class="pager">
          <button class="btn-secondary" data-action="bank-page" data-page="${page - 1}" ${page === 0 ? 'disabled' : ''}>${icon.back} Previous</button>
          <span class="panel-note">${page + 1} / ${pages}</span>
          <button class="btn-secondary" data-action="bank-page" data-page="${page + 1}" ${page >= pages - 1 ? 'disabled' : ''}>Next ${icon.forward}</button>
        </div>
      ` : ''}
    </div>
  `;
}

function renderBankItem(q, index) {
  return `
    <details class="bank-item">
      <summary>
        <span class="bank-item-index">${index}</span>
        <span class="bank-item-title">${escapeHtml(q.title)}</span>
        ${difficultyPill(q.difficulty)}
        <span class="bank-item-domain">${escapeHtml(q.domainName)}</span>
      </summary>
      <div class="bank-item-body">
        <div class="question-scenario">${escapeHtml(q.scenario)}</div>
        <p class="question-prompt">${escapeHtml(q.question)}</p>
        <div class="bank-options">
          ${q.options.map(opt => {
            const right = q.correctAnswers.includes(opt.id);
            return `<div class="bank-option ${right ? 'right' : ''}"><strong>${opt.id}.</strong> ${escapeHtml(opt.text)} ${right ? '✅' : ''}</div>`;
          }).join('')}
        </div>
        <div class="explanation-box">
          <div class="explanation-title">${icon.shield}<span>Explanation</span></div>
          <p class="explanation-text">${escapeHtml(q.explanation)}</p>
          ${q.tags && q.tags.length ? `<div class="tag-row">${q.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>` : ''}
          ${q.referenceUrl ? `<a class="reference-link" href="${escapeHtml(q.referenceUrl)}" target="_blank" rel="noopener noreferrer"><span>Official documentation</span>${icon.external}</a>` : ''}
        </div>
      </div>
    </details>
  `;
}
