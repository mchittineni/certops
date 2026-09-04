import { CERTIFICATIONS, CATEGORIES, PROVIDERS, TIERS } from '../data/catalog.generated.js';
import { CONTENT_MANIFEST, CONTENT_TOTALS } from '../data/manifest.generated.js';
import { getCertSummary, getAttempts } from '../lib/progress.js';
import { getDailyResult, dailyStreak, DAILY_SIZE } from '../lib/daily.js';
import { icon, progressBar, escapeHtml } from './ui.js';
import { providerIcon, certIcon, disciplineIcon, roleIcon } from './brand.js';
import { ROLES, ROLE_BY_ID, roleCertIds } from '../data/roles.js';

const CATEGORY_BLURB = {
  'Cloud Engineering': 'Architect, deploy, and operate on AWS, Azure, and Google Cloud.',
  'DevOps & SRE': 'CI/CD, Terraform, release engineering, and reliability practice.',
  'Kubernetes & Cloud Native': 'CKA/CKAD/CKS plus Argo, GitOps, OpenTelemetry, and Prometheus.',
  'Platform Engineering': 'Internal developer platforms, Backstage, Cilium, Istio, Kyverno.',
  'FinOps': 'Cloud cost management, unit economics, and optimisation practice.',
  'DevSecOps & Security': 'Shift-left security, cloud security engineering, CCSP and CISSP.'
};

const TIER_LABEL = { foundational: 'Foundational', associate: 'Associate', professional: 'Professional', specialty: 'Specialty' };

export function renderHome(state) {
  const live = CERTIFICATIONS.filter(c => c.status === 'live');
  const planned = CERTIFICATIONS.filter(c => c.status === 'planned');
  const filtered = applyFilters(state, live);
  const filtersActive = state.category !== 'all' || state.provider !== 'all' || state.tier !== 'all' || state.certSearch.trim() !== '' || state.roleFilter;

  return `
    ${renderHero(state)}
    ${renderBenefits()}
    ${renderDailyCard(live)}
    ${renderRolePaths(state)}
    ${renderCategoryGrid(state, live, planned)}
    ${renderCatalog(state, filtered, filtersActive)}
    ${renderFeatures()}
    ${renderRoadmap(planned)}
    ${renderFooter()}
  `;
}

function applyFilters(state, live) {
  let certs = live;
  if (state.roleFilter && state.role) {
    const wanted = new Set(roleCertIds(state.role));
    certs = certs.filter(c => wanted.has(c.id));
  }
  if (state.category !== 'all') certs = certs.filter(c => c.category === state.category);
  if (state.provider !== 'all') certs = certs.filter(c => c.provider === state.provider);
  if (state.tier !== 'all') certs = certs.filter(c => c.tier === state.tier);
  if (state.certSearch.trim()) {
    const needle = state.certSearch.trim().toLowerCase();
    certs = certs.filter(c => `${c.title} ${c.code} ${c.provider} ${c.category}`.toLowerCase().includes(needle));
  }
  return certs;
}

function renderHero(state) {
  const attempts = getAttempts();
  const answered = attempts.reduce((s, a) => s + (a.total || 0), 0);

  return `
    <section class="hero">
      <div class="hero-pill"><span>⚡ Scenario-based questions · instant explanations · 100% free</span></div>
      <h1>Know it cold before exam day</h1>
      <p class="hero-sub">
        Full exam scenarios with real architecture trade-offs — and an explanation of <em>why</em> every
        distractor is wrong. Set a difficulty band or let adaptive mode find yours, across
        ${CONTENT_TOTALS.certifications} certifications in cloud, DevOps, Kubernetes, platform engineering,
        FinOps, and security.
      </p>

      <div class="hero-stats">
        <div class="hero-stat"><strong>${CONTENT_TOTALS.questions}</strong><span>exam questions</span></div>
        <div class="hero-stat"><strong>${CONTENT_TOTALS.flashcards}</strong><span>flashcards</span></div>
        <div class="hero-stat"><strong>${CONTENT_TOTALS.certifications}</strong><span>certifications</span></div>
        <div class="hero-stat"><strong>${answered}</strong><span>you've answered</span></div>
      </div>
    </section>
  `;
}

function renderBenefits() {
  const items = [
    { icon: 'bolt', title: '100% Free', text: 'No account, no paywall, no upsell. Everything runs in your browser.' },
    { icon: 'shield', title: 'Instant Explanations', text: 'Every answer explains the right choice and why each distractor fails.' },
    { icon: 'brain', title: 'Adaptive Difficulty', text: 'Easy, medium, hard — or adaptive, which tracks your accuracy live.' }
  ];
  return `
    <section class="benefits-bar">
      ${items.map(i => `
        <div class="benefit">
          <div class="benefit-icon">${icon[i.icon]}</div>
          <div><h3>${i.title}</h3><p>${i.text}</p></div>
        </div>
      `).join('')}
    </section>
  `;
}

function renderDailyCard(live) {
  const eligible = live.filter(c => (CONTENT_MANIFEST[c.id]?.questions.total || 0) > 0);
  const done = getDailyResult();
  const streak = dailyStreak();

  return `
    <section class="daily-card">
      <div class="daily-main">
        <span class="daily-tag">${icon.bolt} Daily Challenge</span>
        <h2>${done ? 'Today’s challenge is done' : `${DAILY_SIZE} questions, mixed certifications`}</h2>
        <p>
          ${done
            ? `You scored <strong>${done.correct}/${done.total}</strong> (${done.percentage}%). A new challenge unlocks tomorrow — replay today's any time.`
            : 'The same set for everyone today, drawn from three certifications at random. Instant feedback, no timer pressure.'}
        </p>
        ${streak ? `<div class="streak-badge">🔥 ${streak}-day streak</div>` : ''}
      </div>
      <div class="daily-action">
        <button class="btn-primary btn-lg" data-action="start-daily" ${eligible.length ? '' : 'disabled'}>
          ${icon.play} ${done ? 'Replay today' : 'Start challenge'}
        </button>
        <span class="panel-note">${eligible.length} certification${eligible.length === 1 ? '' : 's'} in the pool</span>
      </div>
    </section>
  `;
}

function renderCategoryGrid(state, live, planned) {
  return `
    <section class="section">
      <div class="section-head">
        <h2>Practice by discipline</h2>
        <p>Six tracks, mapped to the 2026 certification roadmap.</p>
      </div>
      <div class="category-grid">
        ${CATEGORIES.map(category => {
          const blurb = CATEGORY_BLURB[category] || '';
          const inCat = live.filter(c => c.category === category);
          const plannedInCat = planned.filter(c => c.category === category).length;
          const questions = inCat.reduce((s, c) => s + (CONTENT_MANIFEST[c.id]?.questions.total || 0), 0);
          const active = state.category === category;
          return `
            <button class="category-card ${active ? 'active' : ''} ${inCat.length ? '' : 'empty'}" data-action="set-category" data-category="${escapeHtml(category)}">
              <span class="category-emoji">${disciplineIcon(category, { size: 24 })}</span>
              <h3>${escapeHtml(category)}</h3>
              <p>${escapeHtml(blurb)}</p>
              <span class="category-meta">
                ${inCat.length ? `${inCat.length} ready · ${questions} questions` : `${plannedInCat} on the roadmap`}
              </span>
            </button>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

function renderCatalog(state, certs, filtersActive) {
  const groups = new Map();
  for (const cert of certs) {
    if (!groups.has(cert.category)) groups.set(cert.category, []);
    groups.get(cert.category).push(cert);
  }

  return `
    <section class="section" id="catalog">
      <div class="section-head">
        <h2>${state.category === 'all' ? 'Certification modules' : escapeHtml(state.category)}</h2>
        <p>Each module holds an exam simulation, practice mode, a quick quiz, and a flashcard deck.</p>
      </div>

      <div class="catalog-toolbar">
        <div class="filter-bar filter-bar-tight">
          <button class="filter-chip ${state.category === 'all' ? 'active' : ''}" data-action="set-category" data-category="all">All disciplines</button>
          ${PROVIDERS.filter(p => certsExist(p)).map(p => `
            <button class="filter-chip ${state.provider === p ? 'active' : ''}" data-action="set-provider" data-provider="${escapeHtml(p)}">${providerIcon(p, { size: 16 })} ${escapeHtml(shortProvider(p))}</button>
          `).join('')}
        </div>
        <div class="catalog-toolbar-right">
          <div class="filter-bar filter-bar-tight">
            ${TIERS.map(t => `<button class="filter-chip ${state.tier === t ? 'active' : ''}" data-action="set-tier" data-tier="${t}">${TIER_LABEL[t] || t}</button>`).join('')}
          </div>
          <input class="bank-search" type="search" placeholder="Search certifications…" value="${escapeHtml(state.certSearch)}" data-role="cert-search" aria-label="Search certifications">
        </div>
      </div>

      ${filtersActive ? `<div class="filter-summary"><span>${certs.length} match${certs.length === 1 ? '' : 'es'}</span><button class="btn-ghost btn-tiny" data-action="clear-filters">Clear filters</button></div>` : ''}

      ${certs.length === 0 ? `
        <div class="empty-state">
          <h2>Nothing ready in that slice yet.</h2>
          <p>These certifications are scaffolded on the roadmap below — content is still being written.</p>
          <button class="btn-primary" data-action="clear-filters">Show everything ready</button>
        </div>
      ` : [...groups.entries()].map(([category, list]) => `
        ${groups.size > 1 ? `<h3 class="catalog-group-head">${disciplineIcon(category, { size: 18 })} ${escapeHtml(category)} <span class="panel-note">${list.length}</span></h3>` : ''}
        <div class="cert-grid">${list.map(renderCertCard).join('')}</div>
      `).join('')}
    </section>
  `;
}

function certsExist(provider) {
  return CERTIFICATIONS.some(c => c.provider === provider && c.status === 'live');
}

function shortProvider(provider) {
  return { 'Google Cloud': 'Google Cloud', 'Microsoft Azure': 'Azure', 'Cloud Native (CNCF)': 'Kubernetes' }[provider] || provider;
}

function renderCertCard(cert) {
  const stats = CONTENT_MANIFEST[cert.id] || { questions: { total: 0, byDifficulty: {} }, flashcards: { total: 0 } };
  const summary = getCertSummary(cert.id);
  const d = stats.questions.byDifficulty || {};

  return `
    <div class="cert-card" style="border-top: 3px solid ${cert.color};">
      <div>
        <div class="cert-header">
          <div class="cert-brand">
            ${certIcon(cert, { size: 26 })}
            <span class="cert-brand-name">${escapeHtml(cert.provider)}</span>
          </div>
          <span class="cert-code">${escapeHtml(cert.code)}</span>
        </div>
        <h3 class="cert-title">${escapeHtml(cert.title)}</h3>
        <div class="cert-chips">
          <span class="tier-chip tier-${cert.tier}">${TIER_LABEL[cert.tier] || cert.tier}</span>
          ${cert.priority ? `<span class="priority-chip" title="Priority ${cert.priority} on the 2026 roadmap">★ #${cert.priority} priority</span>` : ''}
        </div>
        <p class="cert-desc">${escapeHtml(cert.description)}</p>
        <div class="diff-summary">
          <span class="diff-pill diff-easy">${d.easy || 0} easy</span>
          <span class="diff-pill diff-medium">${d.medium || 0} medium</span>
          <span class="diff-pill diff-hard">${d.hard || 0} hard</span>
        </div>
      </div>

      <div>
        ${summary ? `
          <div class="cert-progress">
            <div class="cert-progress-head">
              <span>Best score</span>
              <span><strong>${summary.best.percentage}%</strong> · ${summary.attempts} attempt${summary.attempts === 1 ? '' : 's'}</span>
            </div>
            ${progressBar(summary.best.percentage, summary.best.passed ? 'good' : '')}
          </div>
        ` : ''}
        <div class="cert-meta">
          <div class="cert-meta-item">${icon.clock}<span>${cert.defaultTimeMinutes} mins</span></div>
          <div class="cert-meta-item">${icon.file}<span>${stats.questions.total} questions</span></div>
          <div class="cert-meta-item">${icon.cards}<span>${stats.flashcards.total} cards</span></div>
          <div class="cert-meta-item">${icon.check}<span>Pass: ${cert.passingScore}/${cert.maxScore}</span></div>
        </div>
        <div class="cert-actions">
          <button class="btn-primary" data-action="open-cert" data-cert-id="${cert.id}">${icon.play} Open Study Module</button>
          <button class="btn-secondary" data-action="open-bank" data-cert-id="${cert.id}">${icon.book} Browse Bank</button>
        </div>
      </div>
    </div>
  `;
}

function renderFeatures() {
  const features = [
    { icon: 'play', title: 'Exam Simulation', text: 'Timed, domain-weighted sampling scored against the real passing threshold.' },
    { icon: 'help', title: 'Practice Mode', text: 'Untimed, with an explicit check step and the full architecture explanation.' },
    { icon: 'bolt', title: 'Quick Quiz', text: 'Ten questions, answers lock once checked. Built for a coffee break.' },
    { icon: 'brain', title: 'Adaptive Sessions', text: 'Two right escalates a band, two wrong eases one. No going back.' },
    { icon: 'cards', title: 'Flashcards + SRS', text: 'Leitner boxes: due cards return first, mastered cards drop out.' },
    { icon: 'book', title: 'Question Bank', text: 'Search every scenario, answer, and explanation with full-text search.' }
  ];
  return `
    <section class="section">
      <div class="section-head">
        <h2>More than just quizzes</h2>
        <p>Five study modes per certification, all sharing one difficulty selector.</p>
      </div>
      <div class="feature-grid">
        ${features.map(f => `
          <div class="feature-card">
            <div class="feature-icon">${icon[f.icon]}</div>
            <h3>${f.title}</h3>
            <p>${f.text}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function renderRoadmap(planned) {
  if (!planned.length) return '';
  const byCategory = new Map();
  for (const cert of planned) {
    if (!byCategory.has(cert.category)) byCategory.set(cert.category, []);
    byCategory.get(cert.category).push(cert);
  }
  const priorities = planned.filter(c => c.priority).sort((a, b) => a.priority - b.priority).slice(0, 8);

  return `
    <section class="section">
      <div class="section-head">
        <h2>On the roadmap</h2>
        <p>${planned.length} certifications scaffolded and awaiting content. Highest-priority first.</p>
      </div>

      ${priorities.length ? `
        <div class="priority-strip">
          ${priorities.map(c => `<span class="priority-item"><span class="priority-rank">#${c.priority}</span> ${certIcon(c, { size: 15 })} ${escapeHtml(c.code)}</span>`).join('')}
        </div>
      ` : ''}

      <div class="roadmap-columns">
        ${[...byCategory.entries()].map(([category, list]) => `
          <div class="roadmap-column">
            <h4>${disciplineIcon(category, { size: 16 })} ${escapeHtml(category)} <span class="panel-note">${list.length}</span></h4>
            <div class="roadmap-chips">
              ${list.map(c => `<span class="roadmap-chip" title="${escapeHtml(c.title)}">${certIcon(c, { size: 14 })} ${escapeHtml(c.code)}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      <p class="fineprint">Adding content is two commands — see <code>docs/CERTIFICATION-ROADMAP.md</code>.</p>
    </section>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div>
          <strong>CertOps</strong>
          <p class="fineprint">Open-source certification practice. No backend, no account — your attempt history, flashcard scheduling, and streak live in this browser only.</p>
        </div>
        <div class="footer-links">
          <button class="btn-ghost btn-tiny" data-action="open-bank">Question Bank</button>
          <button class="btn-ghost btn-tiny" data-action="start-daily">Daily Challenge</button>
          <button class="btn-ghost btn-tiny" data-action="toggle-theme">Switch theme</button>
        </div>
      </div>
    </footer>
  `;
}

/**
 * Role paths.
 *
 * A role is an ordered route rather than another filter, so the value is in the
 * sequence and the per-step rationale. Steps naming a `planned` certification are
 * still shown: the route has to read as a whole even where the content is not
 * written yet, and hiding those steps would make short paths look like the plan.
 */
function renderRolePaths(state) {
  const active = state.role ? ROLE_BY_ID[state.role] : null;

  const chips = ROLES.map(role => `
    <button class="role-chip ${state.role === role.id ? 'active' : ''}"
            data-action="set-role" data-role-id="${role.id}"
            aria-pressed="${state.role === role.id}">
      <span class="role-chip-icon">${roleIcon(role.id, { size: 22 })}</span>
      <span class="role-chip-text">
        <strong>${escapeHtml(role.title)}</strong>
        <em>${escapeHtml(role.blurb)}</em>
      </span>
    </button>
  `).join('');

  return `
    <section class="section role-section" id="roles">
      <div class="section-head">
        <h2>Start from your role</h2>
        <p>Pick what you do and get an ordered route, with a reason for every step — not just a filtered list.</p>
      </div>

      <div class="role-chips" role="group" aria-label="Choose a role">${chips}</div>

      ${active ? renderRolePath(state, active) : `
        <p class="role-hint">Nothing selected — the full catalogue is below. Choosing a role remembers itself on this device.</p>
      `}
    </section>
  `;
}

function renderRolePath(state, role) {
  const steps = role.path.map((step, i) => renderRoleStep(step, i));
  const certs = role.path.map(s => CERTIFICATIONS.find(c => c.id === s.certId)).filter(Boolean);
  const ready = certs.filter(c => c.status === 'live').length;
  const questions = certs.reduce((sum, c) => sum + (CONTENT_MANIFEST[c.id]?.questions.total || 0), 0);

  return `
    <div class="role-path-wrap">
      <div class="role-path-head">
        <div>
          <h3 class="role-path-title">${roleIcon(role.id, { size: 22 })} ${escapeHtml(role.title)} path</h3>
          <p class="panel-note">
            ${ready} of ${role.path.length} ready now · ${questions} question${questions === 1 ? '' : 's'} across the ready steps
          </p>
        </div>
        <div class="role-path-actions">
          <button class="btn-ghost btn-tiny ${state.roleFilter ? 'active' : ''}" data-action="toggle-role-filter" aria-pressed="${!!state.roleFilter}">
            ${state.roleFilter ? 'Showing only this path' : 'Filter catalogue to this path'}
          </button>
          <button class="btn-ghost btn-tiny" data-action="clear-role">Clear role</button>
        </div>
      </div>
      <ol class="role-path">${steps.join('')}</ol>
    </div>
  `;
}

function renderRoleStep(step, index) {
  const cert = CERTIFICATIONS.find(c => c.id === step.certId);
  if (!cert) return '';

  const live = cert.status === 'live';
  const stats = CONTENT_MANIFEST[cert.id] || { questions: { total: 0 } };
  const summary = live ? getCertSummary(cert.id) : null;

  return `
    <li class="role-step ${live ? '' : 'planned'}">
      <span class="role-step-num" aria-hidden="true">${index + 1}</span>
      <div class="role-step-body">
        <div class="role-step-head">
          <span class="role-step-brand">${certIcon(cert, { size: 20 })}</span>
          <h4>${escapeHtml(cert.title)}</h4>
          <span class="cert-code">${escapeHtml(cert.code)}</span>
          <span class="tier-chip tier-${cert.tier}">${TIER_LABEL[cert.tier] || cert.tier}</span>
        </div>
        <p class="role-step-why">${escapeHtml(step.why)}</p>
        ${summary ? `
          <div class="role-step-progress">
            <span class="panel-note">Best ${summary.best.percentage}% over ${summary.attempts} attempt${summary.attempts === 1 ? '' : 's'}</span>
            ${progressBar(summary.best.percentage, summary.best.passed ? 'good' : '')}
          </div>
        ` : ''}
      </div>
      <div class="role-step-action">
        ${live
          ? `<button class="btn-primary btn-tiny" data-action="open-cert" data-cert-id="${cert.id}">
               ${summary ? 'Practise again' : 'Start'}
             </button>
             <span class="panel-note">${stats.questions.total} question${stats.questions.total === 1 ? '' : 's'}</span>`
          : `<span class="roadmap-pill">On the roadmap</span>`}
      </div>
    </li>
  `;
}
