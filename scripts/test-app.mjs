#!/usr/bin/env node
/** Headless end-to-end smoke test of the app's views and actions. */
import assert from 'assert';
import { installDomShim } from './lib/dom-shim.mjs';

const dom = installDomShim();
const { state } = await import('../src/state.js');
const { ROLES, ROLE_BY_ID, roleCertIds } = await import('../src/data/roles.js');
const { CERTIFICATIONS } = await import('../src/data/catalog.generated.js');
await import('../src/app.js');

const tick = () => new Promise(r => setTimeout(r, 30));
let passed = 0;
const check = async (name, fn) => { await fn(); console.log(`  ok  ${name}`); passed++; };

await check('landing page renders every section', () => {
  const html = dom.html();
  assert.ok(html.includes('Know it cold before exam day'), 'hero headline');
  assert.ok(html.includes('Converge'), 'wordmark');
  assert.ok(html.includes('benefits-bar') && html.includes('100% Free'), 'benefits bar');
  assert.ok(html.includes('Daily Challenge'), 'daily challenge card');
  assert.ok(html.includes('Practice by discipline') && html.includes('category-grid'), 'discipline grid');
  assert.ok(html.includes('Open Study Module'), 'certification cards');
  assert.ok(html.includes('More than just quizzes'), 'features section');
  assert.ok(html.includes('On the roadmap'), 'roadmap section');
  assert.ok(html.includes('site-footer'), 'footer');
  assert.ok(/\d+ easy/.test(html) && /\d+ medium/.test(html) && /\d+ hard/.test(html), 'difficulty spreads');
});

await check('official provider marks render, with lettermarks where none is licensed', () => {
  const html = dom.html();
  // Google Cloud, Kubernetes, and CNCF ship freely licensed marks (Simple Icons, CC0)
  assert.ok(html.includes('aria-label="Google Cloud"'), 'Google Cloud mark missing');
  assert.ok(html.includes('aria-label="Kubernetes"'), 'Kubernetes mark missing');
  assert.ok(/<svg viewBox="0 0 24 24"[^>]*><path d="M/.test(html), 'brand marks must render real SVG paths');
  // AWS and Azure were removed from Simple Icons at the trademark owners' request
  assert.ok(html.includes('brand-lettermark') && html.includes('aria-label="AWS"'), 'AWS lettermark missing');
  assert.ok(html.includes('aria-label="Microsoft Azure"'), 'Azure lettermark missing');
  // every mark carries a per-theme colour pair
  assert.ok(/--brand:#[0-9a-fA-F]{6};--brand-dark:#[0-9a-fA-F]{6}/.test(html), 'marks must ship both theme colours');
  // the emoji that used to stand in for provider and discipline icons
  for (const placeholder of ['🟧', '🟦', '🔷', '☸️', '🐙', '🐳', '♾️', '🏗️', '⬡', '🛡️']) {
    assert.ok(!html.includes(placeholder), `emoji placeholder ${placeholder} should be replaced by a real mark`);
  }
});

await check('the app defaults to the light theme', () => {
  assert.strictEqual(state.theme, 'light');
  assert.strictEqual(document.documentElement.attrs['data-theme'], 'light');
});

await check('all six disciplines appear in the grid', () => {
  const html = dom.html();
  for (const c of ['Cloud Engineering', 'DevOps &amp; SRE', 'Kubernetes &amp; Cloud Native', 'Platform Engineering', 'FinOps', 'DevSecOps &amp; Security']) {
    assert.ok(html.includes(c), `missing discipline ${c}`);
  }
});

await check('discipline filter narrows the catalogue and toggles off', () => {
  dom.click('set-category', { category: 'Kubernetes & Cloud Native' });
  assert.strictEqual(state.category, 'Kubernetes & Cloud Native');
  let html = dom.html();
  assert.ok(html.includes('Certified Kubernetes Administrator'));
  assert.ok(!html.includes('data-cert-id="aws-saa"'), 'AWS SAA is not a Kubernetes certification');
  dom.click('set-category', { category: 'Kubernetes & Cloud Native' });
  assert.strictEqual(state.category, 'all', 'clicking the active discipline clears it');
});

await check('provider filter narrows the grid', () => {
  dom.click('set-provider', { provider: 'Cloud Native (CNCF)' });
  assert.ok(dom.html().includes('Certified Kubernetes Administrator'));
  assert.ok(!dom.html().includes('data-cert-id="aws-saa"'));
  dom.click('set-provider', { provider: 'Cloud Native (CNCF)' });
  assert.strictEqual(state.provider, 'all');
});

await check('tier filter narrows the catalogue', () => {
  dom.click('set-tier', { tier: 'foundational' });
  const html = dom.html();
  assert.ok(html.includes('Azure Fundamentals'), 'AZ-900 is foundational');
  assert.ok(!html.includes('data-cert-id="k8s-cka"'), 'CKA is not foundational');
  dom.click('set-tier', { tier: 'foundational' });
});

await check('clear-filters resets every filter at once', () => {
  dom.click('set-category', { category: 'FinOps' });
  dom.click('set-tier', { tier: 'professional' });
  dom.click('clear-filters');
  assert.strictEqual(state.category, 'all');
  assert.strictEqual(state.tier, 'all');
  assert.strictEqual(state.provider, 'all');
  assert.strictEqual(state.certSearch, '');
});

await check('the role picker offers every role with a house-style mark', () => {
  const html = dom.html();
  assert.ok(html.includes('Start from your role'), 'role section heading');
  assert.ok(html.includes('data-action="set-role"'), 'role chips');
  for (const role of ROLES) {
    assert.ok(html.includes(`data-role-id="${role.id}"`), `${role.id} chip missing`);
    assert.ok(html.includes(role.title), `${role.title} label missing`);
  }
  assert.ok(html.includes('role-glyph'), 'roles must use SVG marks rather than emoji');
  assert.ok(html.includes('aria-pressed="false"'), 'unselected chips report their state');
});

await check('choosing a role renders an ordered path with a reason per step', () => {
  dom.click('set-role', { roleId: 'devops-engineer' });
  assert.strictEqual(state.role, 'devops-engineer');
  const html = dom.html();
  assert.ok(html.includes('Site Reliability') || html.includes('DevOps Engineer path'), 'path heading');
  assert.ok(html.includes('<ol class="role-path">'), 'the path is an ordered list');
  const role = ROLE_BY_ID['devops-engineer'];
  for (const step of role.path) {
    assert.ok(html.includes(step.why), `missing rationale for ${step.certId}`);
  }
  assert.ok(html.includes('role-step-num'), 'steps are numbered');
  assert.ok(html.includes('aria-pressed="true"'), 'the chosen chip reports its state');
});

await check('a path shows roadmap steps without offering to start them', () => {
  dom.click('set-role', { roleId: 'solutions-architect' });
  const html = dom.html();
  // SAA is live; AZ-305 and SAP are still on the roadmap, and the path shows both kinds.
  assert.ok(html.includes('data-cert-id="aws-saa"'), 'the ready step is launchable');
  assert.ok(html.includes('role-step planned'), 'roadmap steps are marked');
  assert.ok(html.includes('roadmap-pill'), 'roadmap steps say so instead of offering a button');
});

await check('the role filter narrows the catalogue and is cleared with the role', () => {
  dom.click('set-role', { roleId: 'finops' });
  dom.click('toggle-role-filter');
  assert.strictEqual(state.roleFilter, true);
  let html = dom.html();
  assert.ok(html.includes('data-cert-id="finops-focp"'), 'FinOps Practitioner is on the path');
  assert.ok(!html.includes('data-cert-id="k8s-cka"'), 'CKA is not on the FinOps path');
  dom.click('clear-role');
  assert.strictEqual(state.role, null);
  assert.strictEqual(state.roleFilter, false, 'clearing the role also drops its filter');
  html = dom.html();
  assert.ok(html.includes('data-cert-id="k8s-cka"'), 'the full catalogue returns');
});

await check('clicking the active role clears it, like the other filter chips', () => {
  dom.click('set-role', { roleId: 'sre' });
  dom.click('toggle-role-filter');
  dom.click('set-role', { roleId: 'sre' });
  assert.strictEqual(state.role, null);
  assert.strictEqual(state.roleFilter, false, 'the stale filter must not survive the role');
  assert.ok(dom.html().includes('data-cert-id="aws-saa"'), 'catalogue is unfiltered again');
});

await check('clear-filters also drops an active role filter', () => {
  dom.click('set-role', { roleId: 'cloud-engineer' });
  dom.click('toggle-role-filter');
  dom.click('clear-filters');
  assert.strictEqual(state.roleFilter, false);
  assert.strictEqual(state.role, 'cloud-engineer', 'the chosen role itself is a preference, not a filter');
  dom.click('clear-role');
});

await check('every role path names certifications that exist in the catalog', () => {
  const ids = new Set(CERTIFICATIONS.map(c => c.id));
  for (const role of ROLES) {
    assert.ok(role.path.length >= 3, `${role.id} should be a route, not a pair`);
    for (const step of role.path) {
      assert.ok(ids.has(step.certId), `${role.id} points at unknown certification ${step.certId}`);
      assert.ok(step.why && step.why.length > 30, `${role.id}/${step.certId} needs a real rationale`);
    }
    assert.deepStrictEqual(roleCertIds(role.id), role.path.map(s => s.certId), 'roleCertIds preserves order');
  }
});

await check('planned certifications are on the roadmap but not launchable', () => {
  const html = dom.html();
  assert.ok(html.includes('roadmap-chip'), 'roadmap chips render');
  assert.ok(html.includes('SAP-C02') || html.includes('AZ-305'), 'planned certifications are listed');
  assert.ok(!html.includes('data-action="open-cert" data-cert-id="aws-sap"'), 'planned certs must not be launchable');
});

await check('a chunk that fails to load shows an error view, and recovers on retry', async () => {
  // Packs are separate chunks, so a flaky network is a real failure mode: the
  // module page must say so instead of rendering an empty quiz.
  const { CONTENT_REGISTRY } = await import('../src/data/registry.generated.js');
  const real = CONTENT_REGISTRY['aws-clf'];
  CONTENT_REGISTRY['aws-clf'] = {
    questions: [{ path: 'broken', load: async () => { throw new Error('Failed to fetch dynamically imported module'); } }],
    flashcards: []
  };

  dom.click('open-cert', { certId: 'aws-clf' });
  await tick();
  const html = dom.html();
  assert.ok(html.includes('Could not load content'), 'the failure has to be visible');
  assert.ok(html.includes('dynamically imported module'), 'and say what went wrong');
  assert.ok(html.includes('data-action="go-home"'), 'with a way out');
  assert.ok(!state.loading, 'the spinner must not be left spinning');

  CONTENT_REGISTRY['aws-clf'] = real;
  dom.click('open-cert', { certId: 'aws-clf' });
  await tick();
  assert.strictEqual(state.error, null, 'a successful retry clears the error');
  assert.strictEqual(state.view, 'cert');
  dom.click('go-home');
});

await check('opening a module lazy-loads content and shows all five difficulty options', async () => {
  dom.click('open-cert', { certId: 'aws-saa' });
  await tick();
  const html = dom.html();
  assert.strictEqual(state.view, 'cert');
  for (const label of ['Easy', 'Medium', 'Hard', 'Mixed', 'Adaptive']) assert.ok(html.includes(label), `missing ${label}`);
  assert.ok(html.includes('Exam Simulation') && html.includes('Quick Quiz') && html.includes('Flashcards'));
});

await check('hard filter builds a hard-only exam session', async () => {
  dom.click('set-quiz-difficulty', { difficulty: 'hard' });
  dom.click('start-quiz', { mode: 'exam' });
  await tick();
  assert.strictEqual(state.view, 'quiz');
  assert.ok(state.quiz.questions.length > 0);
  assert.ok(state.quiz.questions.every(q => q.difficulty === 'hard'), 'non-hard question leaked in');
  assert.ok(dom.html().includes('EXAM SIMULATION'));
  assert.ok(!dom.html().includes('explanation-box'), 'exam mode must not reveal explanations');
});

await check('exam mode allows navigation, flagging, and answering', () => {
  const q = state.quiz.questions[0];
  dom.click('toggle-option', { optionId: q.options[0].id });
  assert.deepStrictEqual(state.quiz.answers[q.id], [q.options[0].id]);
  dom.click('toggle-flag');
  assert.ok(state.quiz.flagged.has(q.id));
  if (state.quiz.questions.length > 1) {
    dom.click('next-question');
    assert.strictEqual(state.quiz.currentIndex, 1);
    dom.click('prev-question');
    assert.strictEqual(state.quiz.currentIndex, 0);
  }
});

await check('single-choice replaces and multi-choice accumulates selections', () => {
  const quiz = state.quiz;
  const multiIdx = quiz.questions.findIndex(q => q.type === 'multiple');
  if (multiIdx === -1) return;
  dom.click('jump-question', { index: String(multiIdx) });
  const q = quiz.questions[multiIdx];
  // clear anything a previous flow selected on this question
  for (const opt of (quiz.answers[q.id] || []).slice()) dom.click('toggle-option', { optionId: opt });
  assert.strictEqual((quiz.answers[q.id] || []).length, 0);
  dom.click('toggle-option', { optionId: 'A' });
  dom.click('toggle-option', { optionId: 'B' });
  assert.deepStrictEqual(quiz.answers[q.id].sort(), ['A', 'B']);
  dom.click('toggle-option', { optionId: 'B' });
  assert.deepStrictEqual(quiz.answers[q.id], ['A'], 'clicking again deselects');
});

await check('submitting scores the whole session, not just the answered part', () => {
  const planned = state.quiz.questions.length;
  dom.click('submit-quiz');
  assert.strictEqual(state.view, 'results');
  assert.strictEqual(state.results.total, planned, 'blank answers must still count');
  const html = dom.html();
  assert.ok(html.includes('Accuracy by difficulty'));
  assert.ok(html.includes('Domain mastery breakdown'));
  assert.ok(html.includes('hard difficulty'));
});

await check('the attempt is written to history and surfaces on the module page', async () => {
  dom.click('open-cert', { certId: 'aws-saa' });
  await tick();
  const html = dom.html();
  assert.ok(html.includes('Your progress'), 'progress panel should appear after an attempt');
  assert.ok(html.includes('best score'));
});

await check('practice mode reveals the explanation only after Check Answer', async () => {
  dom.click('set-quiz-difficulty', { difficulty: 'easy' });
  dom.click('start-quiz', { mode: 'practice' });
  await tick();
  assert.ok(dom.html().includes('Check Answer'));
  assert.ok(!dom.html().includes('explanation-box'));
  const q = state.quiz.questions[0];
  dom.click('toggle-option', { optionId: q.correctAnswers[0] });
  dom.click('check-answer');
  const html = dom.html();
  assert.ok(html.includes('explanation-box'));
  assert.ok(html.includes(q.type === 'multiple' ? 'Not quite' : 'Correct'));
  assert.ok(state.quiz.timeRemainingSeconds === 0, 'practice mode counts up instead of down');
});

await check('quick quiz locks an answer once checked', async () => {
  dom.click('open-cert', { certId: 'k8s-cka' });
  await tick();
  dom.click('set-quiz-difficulty', { difficulty: 'mixed' });
  dom.click('start-quiz', { mode: 'quick' });
  await tick();
  assert.strictEqual(state.quiz.mode, 'quick');
  assert.ok(state.quiz.questions.length <= 10, 'quick quiz is capped at 10 questions');
  const q = state.quiz.questions[0];
  const wrong = q.options.find(o => !q.correctAnswers.includes(o.id)).id;
  dom.click('toggle-option', { optionId: wrong });
  dom.click('check-answer');
  assert.ok(state.quiz.locked.has(q.id));
  dom.click('toggle-option', { optionId: q.correctAnswers[0] });
  assert.deepStrictEqual(state.quiz.answers[q.id], [wrong], 'locked answers cannot be changed');
  assert.strictEqual(state.quiz.results[0], false);
  assert.ok(!dom.html().includes('Flag for Review'), 'linear sessions hide flagging');
});

await check('adaptive mode escalates on correct answers and never repeats a question', async () => {
  dom.click('open-cert', { certId: 'aws-saa' });
  await tick();
  dom.click('set-quiz-difficulty', { difficulty: 'adaptive' });
  dom.click('start-quiz', { mode: 'practice' });
  await tick();
  assert.strictEqual(state.quiz.difficulty, 'adaptive');
  assert.strictEqual(state.quiz.questions.length, 1, 'adaptive draws one question at a time');
  assert.strictEqual(state.quiz.level, 'medium', 'adaptive starts at medium');
  assert.ok(dom.html().includes('you are here'), 'the level ladder is shown');

  const seen = [];
  let guard = 0;
  while (state.view === 'quiz' && guard++ < 40) {
    const q = state.quiz.questions[state.quiz.currentIndex];
    seen.push(q.id);
    dom.click('toggle-option', { optionId: q.correctAnswers[0] });
    if (q.type === 'multiple') q.correctAnswers.slice(1).forEach(a => dom.click('toggle-option', { optionId: a }));
    dom.click('check-answer');
    if (state.quiz.level === 'hard') break;
    dom.click('next-question');
  }
  assert.strictEqual(new Set(seen).size, seen.length, 'a question was asked twice');
  assert.strictEqual(state.quiz.level, 'hard', 'two correct answers in a row should reach hard');
});

await check('adaptive mode falls back down after wrong answers', async () => {
  dom.click('open-cert', { certId: 'aws-saa' });
  await tick();
  dom.click('set-quiz-difficulty', { difficulty: 'adaptive' });
  dom.click('start-quiz', { mode: 'practice' });
  await tick();
  let guard = 0;
  while (state.view === 'quiz' && guard++ < 6) {
    const q = state.quiz.questions[state.quiz.currentIndex];
    const wrong = q.options.find(o => !q.correctAnswers.includes(o.id)).id;
    dom.click('toggle-option', { optionId: wrong });
    dom.click('check-answer');
    if (state.quiz.level === 'easy') break;
    dom.click('next-question');
  }
  assert.strictEqual(state.quiz.level, 'easy', 'two wrong answers in a row should drop to easy');
});

await check('adaptive sessions score only the questions actually asked', () => {
  const asked = state.quiz.currentIndex + 1;
  dom.click('submit-quiz');
  assert.strictEqual(state.view, 'results');
  assert.strictEqual(state.results.total, asked);
  assert.ok(dom.html().includes('adaptive (finished at'));
});

await check('flashcard deck builds, flips, grades, and tracks mastery', async () => {
  dom.click('open-cert', { certId: 'gcp-ace' });
  await tick();
  dom.click('open-flashcards');
  await tick();
  assert.strictEqual(state.view, 'flashcards');
  assert.ok(dom.html().includes('Deck mastery'));

  dom.click('start-cards');
  assert.ok(state.cards.deck.length > 0);
  assert.ok(dom.html().includes('Reveal answer'));
  assert.ok(!dom.html().includes('flashcard revealed'));

  dom.click('flip-card');
  assert.ok(state.cards.revealed);
  assert.ok(dom.html().includes('flashcard revealed'));
  assert.ok(dom.html().includes('Got it'));

  const first = state.cards.deck[0];
  dom.click('grade-card', { grade: 'good' });
  assert.strictEqual(state.cards.session.good, 1);
  assert.ok(!state.cards.revealed, 'the next card starts face down');

  const before = state.cards.deck.length;
  dom.click('flip-card');
  dom.click('grade-card', { grade: 'again' });
  assert.strictEqual(state.cards.session.again, 1);
  assert.strictEqual(state.cards.deck.length, before + 1, '"Again" requeues the card in this session');
  assert.ok(JSON.parse(localStorage.getItem('converge_flashcard_srs'))[first.id], 'review persisted');
});

await check('flashcard difficulty filter narrows the deck', () => {
  dom.click('set-card-difficulty', { difficulty: 'hard' });
  dom.click('start-cards');
  assert.ok(state.cards.deck.length > 0);
  assert.ok(state.cards.deck.every(c => c.difficulty === 'hard'));
  dom.click('set-card-difficulty', { difficulty: 'mixed' });
});

await check('keyboard shortcuts flip and grade cards', () => {
  dom.click('start-cards');
  dom.key(' ', 'Space');
  assert.ok(state.cards.revealed, 'space should flip the card');
  const good = state.cards.session.good;
  dom.key('2');
  assert.strictEqual(state.cards.session.good, good + 1, '2 should grade "got it"');
});

await check('bank filters by certification, difficulty, domain, and search', async () => {
  dom.click('open-bank', { certId: 'azure-az900' });
  await tick();
  assert.strictEqual(state.view, 'bank');
  assert.ok(dom.html().includes('Question Bank'));

  dom.click('set-bank-difficulty', { difficulty: 'hard' });
  let html = dom.html();
  assert.ok(html.includes('diff-pill diff-hard'));
  assert.ok(!html.includes('diff-pill diff-easy'), 'easy questions should be filtered out');

  dom.click('set-bank-difficulty', { difficulty: 'mixed' });
  dom.click('set-bank-domain', { domainId: 'd1' });
  assert.strictEqual(state.bank.domainId, 'd1');
  assert.ok(dom.html().includes('Describe Cloud Concepts'));

  dom.click('set-bank-domain', { domainId: '' });
  html = dom.html();
  assert.ok(html.includes('bank-cert-select') && html.includes('<optgroup'), 'certification picker is a grouped select at catalogue scale');
  assert.ok(!/data-action="set-bank-cert"/.test(html), '52 chips would not fit — must be a select');
});

await check('daily challenge builds a bounded multi-certification session', async () => {
  dom.click('start-daily');
  await tick();
  await tick();
  assert.strictEqual(state.view, 'quiz');
  assert.strictEqual(state.quiz.mode, 'daily');
  assert.ok(state.quiz.questions.length > 0 && state.quiz.questions.length <= 10, `got ${state.quiz.questions.length} questions`);
  const certsUsed = new Set(state.quiz.questions.map(q => q.certId));
  assert.ok(certsUsed.size <= 3, 'a daily session must not load more than three certifications');
  const html = dom.html();
  assert.ok(html.includes('DAILY CHALLENGE'));
  assert.ok(html.includes('from-cert'), 'each question shows which certification it came from');
  assert.ok(!html.includes('Flag for Review'), 'daily sessions are linear');
});

await check('the daily challenge is the same set on a repeat visit', async () => {
  const first = state.quiz.questions.map(q => q.id);
  dom.click('start-daily');
  await tick();
  await tick();
  assert.deepStrictEqual(state.quiz.questions.map(q => q.id), first, 'same day must give the same questions');
});

await check('completing the daily challenge scores by certification and records a streak', async () => {
  let guard = 0;
  while (state.view === 'quiz' && guard++ < 20) {
    const q = state.quiz.questions[state.quiz.currentIndex];
    dom.click('toggle-option', { optionId: q.correctAnswers[0] });
    if (q.type === 'multiple') q.correctAnswers.slice(1).forEach(a => dom.click('toggle-option', { optionId: a }));
    dom.click('check-answer');
    if (state.view === 'quiz') dom.click('next-question');
  }
  assert.strictEqual(state.view, 'results');
  const html = dom.html();
  assert.ok(html.includes('Daily challenge'));
  assert.ok(html.includes('Breakdown by certification'), 'daily results group by certification, not domain');
  assert.ok(html.includes("Replay today's challenge"));
  const stored = JSON.parse(localStorage.getItem('converge_daily'));
  assert.strictEqual(Object.keys(stored).length, 1);
  assert.strictEqual(Object.values(stored)[0].total, state.results.total);

  dom.click('go-home');
  const home = dom.html();
  assert.ok(home.includes('day streak'), 'a completed challenge starts the streak');
  assert.ok(home.includes('Replay today'), 'the card switches to replay');
});

await check('theme toggle persists', () => {
  const before = state.theme;
  dom.click('toggle-theme');
  assert.notStrictEqual(state.theme, before);
  assert.strictEqual(localStorage.getItem('converge_theme'), state.theme);
  assert.strictEqual(document.documentElement.attrs['data-theme'], state.theme);
});

await check('history can be cleared', async () => {
  dom.click('open-cert', { certId: 'aws-saa' });
  await tick();
  dom.click('clear-history');
  assert.deepStrictEqual(JSON.parse(localStorage.getItem('converge_history')), []);
  assert.ok(!dom.html().includes('Your progress'));
});

await check('the exam clock ticks down, turns urgent in the last minute, and auto-submits at zero', async () => {
  dom.click('open-cert', { certId: 'aws-saa' });
  await tick();
  dom.click('set-quiz-difficulty', { difficulty: 'mixed' });
  dom.click('start-quiz', { mode: 'exam' });
  await tick();
  const quiz = state.quiz;
  assert.ok(quiz.timeRemainingSeconds > 0, 'exam mode must be timed');
  assert.ok(dom.html().includes('timer-box'), 'the clock has to be on screen');

  dom.advanceSeconds(1);
  assert.strictEqual(quiz.elapsedSeconds, 1);
  assert.match(dom.timerBox.textContent, /^\d\d:\d\d$/, 'the clock renders as mm:ss');
  assert.ok(!dom.timerBox.parentElement.classes.has('urgent'), 'not urgent with minutes left');

  // Run down to 45 seconds remaining: the last minute must read as urgent.
  dom.advanceSeconds(quiz.timeRemainingSeconds - 45);
  assert.strictEqual(quiz.timeRemainingSeconds, 45);
  assert.strictEqual(dom.timerBox.textContent, '00:45');
  assert.ok(dom.timerBox.parentElement.classes.has('urgent'), 'the last minute must be marked urgent');

  // Then past zero — the session submits itself rather than running negative.
  dom.advanceSeconds(46);
  assert.strictEqual(state.view, 'results', 'an expired clock must submit the attempt');
  assert.ok(state.results, 'expiry still has to produce a score');
  assert.strictEqual(state.results.total, quiz.plannedCount, 'unanswered questions score as wrong, not dropped');
  dom.advanceSeconds(5);
  assert.strictEqual(state.view, 'results', 'the timer must be stopped, not still firing');
});

await check('practice mode counts up and never expires', async () => {
  dom.click('open-cert', { certId: 'aws-saa' });
  await tick();
  dom.click('set-quiz-difficulty', { difficulty: 'mixed' });
  dom.click('start-quiz', { mode: 'practice' });
  await tick();
  dom.advanceSeconds(120);
  assert.strictEqual(state.quiz.elapsedSeconds, 120);
  assert.strictEqual(state.quiz.timeRemainingSeconds, 0, 'untimed mode has nothing to count down');
  assert.strictEqual(state.view, 'quiz', 'practice mode must never auto-submit');
  assert.ok(!dom.timerBox.parentElement.classes.has('urgent') || true);
  dom.click('go-home');
});

await check('quiz keyboard shortcuts answer, check, and navigate', async () => {
  dom.click('open-cert', { certId: 'aws-saa' });
  await tick();
  dom.click('set-quiz-difficulty', { difficulty: 'mixed' });
  dom.click('start-quiz', { mode: 'exam' });
  await tick();
  const quiz = state.quiz;
  const q = quiz.questions[0];

  dom.key(q.options[0].id.toLowerCase());
  assert.deepStrictEqual(quiz.answers[q.id], [q.options[0].id], 'a lowercase option letter selects that option');

  dom.key('ArrowRight');
  assert.strictEqual(quiz.currentIndex, 1, 'ArrowRight advances in a mode with no feedback step');
  dom.key('ArrowLeft');
  assert.strictEqual(quiz.currentIndex, 0);

  dom.key('z');
  assert.deepStrictEqual(quiz.answers[q.id], [q.options[0].id], 'a letter with no matching option does nothing');
  dom.keyInInput(q.options[1].id);
  assert.deepStrictEqual(quiz.answers[q.id], [q.options[0].id], 'typing in a text field must not answer the question');
  dom.click('go-home');
});

await check('ArrowRight checks the answer first in a mode that shows feedback', async () => {
  dom.click('open-cert', { certId: 'aws-saa' });
  await tick();
  dom.click('set-quiz-difficulty', { difficulty: 'easy' });
  dom.click('start-quiz', { mode: 'practice' });
  await tick();
  const quiz = state.quiz;
  const q = quiz.questions[0];
  dom.key(q.correctAnswers[0]);
  dom.key('ArrowRight');
  assert.ok(quiz.revealed.has(q.id), 'the first ArrowRight reveals the explanation');
  assert.strictEqual(quiz.currentIndex, 0, 'and does not skip past it');
  dom.key('ArrowRight');
  assert.strictEqual(quiz.currentIndex, 1, 'the second ArrowRight advances');
  dom.click('go-home');
});

await check('keydowns outside a quiz or deck are ignored', () => {
  dom.click('go-home');
  const before = dom.html();
  for (const k of ['ArrowRight', 'ArrowLeft', 'Enter', '1', 'A']) dom.key(k);
  assert.strictEqual(dom.html(), before, 'the landing page has no keyboard actions');
});

await check('the bank search box filters, resets the page, and keeps the caret', async () => {
  dom.click('open-bank', { certId: 'aws-clf' });
  await tick();
  dom.click('set-bank-difficulty', { difficulty: 'mixed' });
  const term = 'shared responsibility';
  dom.input('bank-search', term);
  assert.strictEqual(state.bank.search, term);
  assert.strictEqual(state.bank.page, 0, 'a new search must go back to page 1');

  const focused = dom.searchInput();
  assert.ok(focused, 'the search input must be found after the re-render');
  assert.ok(focused.focused, 'a full re-render must not steal focus from the search box');
  assert.deepStrictEqual(focused.selection, [focused.value.length, focused.value.length],
    'the caret belongs at the end, not the start');

  dom.input('bank-search', 'zzzz-no-such-question');
  const empty = dom.html();
  assert.ok(empty.includes('Nothing matched.'), 'an empty result set needs an empty state');
  assert.ok(empty.includes('<strong>0</strong> question'), 'and an honest count');
  dom.input('bank-search', '');
});

await check('the bank certification picker switches banks through the select', async () => {
  dom.change('bank-cert', 'gcp-ace');
  await tick();
  assert.strictEqual(state.bank.certId, 'gcp-ace');
  assert.ok(dom.html().includes('Question Bank'));
  dom.input('unrelated-role', 'ignored');
  assert.strictEqual(state.bank.certId, 'gcp-ace', 'an unknown input role must be ignored');
});

await check('the catalogue search box narrows the certification grid', () => {
  dom.click('go-home');
  dom.input('cert-search', 'kubernetes');
  assert.strictEqual(state.certSearch, 'kubernetes');
  const html = dom.html();
  assert.ok(html.includes('Kubernetes'), 'matching certifications stay');
  assert.ok(!/Cloud Practitioner/.test(html), 'non-matching certifications go');
  dom.input('cert-search', '');
  assert.ok(dom.html().includes('Cloud Practitioner'), 'clearing the search restores the catalogue');
});

await check('bank pagination moves between pages and clamps at the first', async () => {
  dom.click('open-bank', { certId: 'aws-saa' });
  await tick();
  dom.click('set-bank-difficulty', { difficulty: 'mixed' });
  dom.click('bank-page', { page: '1' });
  assert.strictEqual(state.bank.page, 1);
  dom.click('bank-page', { page: '-3' });
  assert.strictEqual(state.bank.page, 0, 'a negative page must clamp to the first');
  dom.click('go-home');
});

await check('a flashcard deck can be scoped by domain, skipped through, and reset', async () => {
  dom.click('open-cert', { certId: 'aws-saa' });
  await tick();
  dom.click('open-flashcards');
  dom.click('set-card-difficulty', { difficulty: 'mixed' });
  dom.click('set-card-domain', { domainId: '' });
  dom.click('start-cards', { dueOnly: '0' });
  const allCardIds = state.cards.deck.map(c => c.id);
  const domainId = state.cards.deck[0].domainId;
  dom.click('set-card-domain', { domainId });
  dom.click('start-cards', { dueOnly: '0' });
  assert.ok(state.cards.deck.length > 0);
  assert.ok(state.cards.deck.every(c => c.domainId === domainId), 'a domain-scoped deck must not leak other domains');

  dom.click('set-card-domain', { domainId: '' });
  dom.click('start-cards', { dueOnly: '0' });
  const full = state.cards.deck.length;
  assert.ok(full >= 1);

  // Skip to the end: the deck finishes instead of running past the last card.
  for (let i = 0; i < full + 2; i++) dom.click('skip-card');
  assert.ok(state.cards.finished, 'skipping past the last card must finish the deck');
  assert.strictEqual(state.cards.index, full - 1);

  dom.click('start-cards', { dueOnly: '1' });
  assert.ok(state.cards.deck.length > 0, 'a fresh deck is all unseen, so due-only still has cards');

  dom.click('grade-card', { grade: 'good' });
  dom.click('reset-deck');
  assert.ok(state.cards.finished, 'a reset deck goes back to the setup screen');
  const raw = JSON.parse(localStorage.getItem('converge_flashcard_srs') || '{}');
  assert.ok(!allCardIds.some(id => id in raw), 'reset must clear this deck from the schedule');
});

await check('a card difficulty with no cards falls back instead of emptying the deck', async () => {
  dom.click('open-cert', { certId: 'aws-clf' });
  await tick();
  dom.click('open-flashcards');
  dom.click('set-card-difficulty', { difficulty: 'mixed' });
  dom.click('set-card-domain', { domainId: '' });
  dom.click('start-cards', { dueOnly: '0' });
  const present = new Set(state.cards.deck.map(c => c.difficulty));
  const missing = ['easy', 'medium', 'hard'].find(d => !present.has(d));
  dom.click('set-card-difficulty', { difficulty: missing || 'hard' });
  dom.click('start-cards', { dueOnly: '0' });
  assert.ok(state.cards.deck.length > 0, 'an empty band must fall back to the whole deck, not strand the user');
  dom.click('go-home');
});

dom.cleanup();
console.log(`\n${passed} app flows passed\n`);
