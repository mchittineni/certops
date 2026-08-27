/**
 * Storage keys, in one place.
 *
 * The app was renamed from OpsQuiz to Converge. Renaming the keys outright
 * would silently wipe every existing attempt history, flashcard schedule, and
 * daily streak, so the old keys are migrated once on boot and then removed.
 * This migration can be deleted after a release or two.
 */
export const KEYS = {
  theme: 'converge_theme',
  history: 'converge_history',
  srs: 'converge_flashcard_srs',
  daily: 'converge_daily'
};

const LEGACY = {
  converge_theme: 'opsquiz_theme',
  converge_history: 'opsquiz_history',
  converge_flashcard_srs: 'opsquiz_flashcard_srs',
  converge_daily: 'opsquiz_daily'
};

export function migrateLegacyStorage() {
  let moved = 0;
  for (const [current, legacy] of Object.entries(LEGACY)) {
    try {
      const old = localStorage.getItem(legacy);
      if (old === null) continue;
      if (localStorage.getItem(current) === null) {
        localStorage.setItem(current, old);
        moved++;
      }
      localStorage.removeItem(legacy);
    } catch {
      /* storage blocked — nothing to migrate */
    }
  }
  return moved;
}
