/**
 * The smallest DOM surface src/app.js actually touches, so the whole app can be
 * driven headlessly in Node. Not a browser — just enough to render views and
 * dispatch data-action clicks and keydowns.
 */
export function installDomShim() {
  const listeners = { app: {}, document: {}, window: {} };

  /**
   * The app restores focus and the caret into a live search box after every
   * re-render, so querySelector has to hand back something input-shaped when
   * the rendered HTML actually contains that input with a value.
   */
  function findSearchInput(selector, html) {
    const roles = [...selector.matchAll(/data-role="([^"]+)"/g)].map(m => m[1]);
    for (const role of roles) {
      const tag = new RegExp(`<input[^>]*data-role="${role}"[^>]*>`).exec(html);
      if (!tag) continue;
      const value = /value="([^"]*)"/.exec(tag[0]);
      return {
        value: value ? value[1] : '',
        focused: false,
        selection: null,
        focus() { this.focused = true; },
        setSelectionRange(start, end) { this.selection = [start, end]; }
      };
    }
    return null;
  }

  let lastSearchInput = null;
  const appEl = {
    innerHTML: '',
    addEventListener(type, fn) { (listeners.app[type] ||= []).push(fn); },
    querySelector(selector) {
      lastSearchInput = findSearchInput(String(selector), appEl.innerHTML);
      return lastSearchInput;
    },
    querySelectorAll() { return []; }
  };

  const store = {};
  globalThis.localStorage = {
    getItem: k => (k in store ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: k => { delete store[k]; },
    clear: () => { for (const k of Object.keys(store)) delete store[k]; }
  };

  // The quiz timer writes the clock into this element every tick and marks it
  // urgent in the last minute, so it has to exist for that code to be reachable.
  const timerBox = {
    textContent: '',
    parentElement: { classes: new Set(), classList: { add(c) { timerBox.parentElement.classes.add(c); } } }
  };

  globalThis.document = {
    documentElement: { attrs: {}, setAttribute(k, v) { this.attrs[k] = v; } },
    getElementById: id => (id === 'app' ? appEl : null),
    querySelector: selector =>
      (String(selector).includes('.timer-box') && appEl.innerHTML.includes('timer-box') ? timerBox : null),
    addEventListener(type, fn) { (listeners.document[type] ||= []).push(fn); }
  };

  globalThis.window = {
    scrollY: 0,
    scrollTo() {},
    addEventListener(type, fn) { (listeners.window[type] ||= []).push(fn); }
  };

  globalThis.confirm = () => true;
  globalThis.alert = () => {};

  // Intervals are captured rather than scheduled: a test that needs to watch a
  // 20-minute exam clock run out cannot wait for wall-clock seconds, and a real
  // interval firing mid-assertion is exactly how a suite turns flaky.
  const intervals = new Map();
  let nextTimerId = 1;
  globalThis.setInterval = fn => { const id = nextTimerId++; intervals.set(id, fn); return id; };
  globalThis.clearInterval = id => { intervals.delete(id); };

  return {
    appEl,
    html: () => appEl.innerHTML,
    /** Fire a data-action click as the delegated handler would receive it. */
    click(action, dataset = {}) {
      const el = { dataset: { action, ...dataset }, tagName: 'BUTTON', disabled: false, closest: () => el };
      for (const fn of listeners.app.click || []) fn({ target: el, preventDefault() {} });
    },
    key(k, code = '') {
      for (const fn of listeners.document.keydown || []) {
        fn({ key: k, code, preventDefault() {}, target: { matches: () => false } });
      }
    },
    /** A keypress that landed inside a text field — the app must ignore it. */
    keyInInput(k) {
      for (const fn of listeners.document.keydown || []) {
        fn({ key: k, code: '', preventDefault() {}, target: { matches: () => true } });
      }
    },
    input(role, value) {
      for (const fn of listeners.app.input || []) fn({ target: { dataset: { role }, value } });
    },
    change(role, value) {
      for (const fn of listeners.app.change || []) fn({ target: { dataset: { role }, value } });
    },
    /** Drive the captured quiz interval forward one second per step. */
    advanceSeconds(seconds) {
      for (let i = 0; i < seconds; i++) {
        for (const fn of [...intervals.values()]) fn();
      }
    },
    timerBox,
    /** The input element the last render focused, if any. */
    searchInput: () => lastSearchInput,
    cleanup() { intervals.clear(); }
  };
}
