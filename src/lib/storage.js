/**
 * Storage keys, in one place.
 *
 * Keys are namespaced under 'certops_'. Legacy data written under previous
 * keys is migrated once on boot and then removed so user attempts, streaks,
 * and flashcard SRS data are preserved.
 */
export const KEYS = {
  theme: 'certops_theme',
  history: 'certops_history',
  srs: 'certops_flashcard_srs',
  daily: 'certops_daily',
  role: 'certops_role'
};

const LEGACY = {
  certops_theme: 'converge_theme',
  certops_history: 'converge_history',
  certops_flashcard_srs: 'converge_flashcard_srs',
  certops_daily: 'converge_daily',
  certops_role: 'converge_role'
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
