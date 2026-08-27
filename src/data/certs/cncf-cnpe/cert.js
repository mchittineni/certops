/**
 * Certified Cloud Native Platform Engineer (CNPE) — exam blueprint.
 *
 * SEEDED PLACEHOLDER. passingScore, defaultTimeMinutes, and domains are guesses.
 * Before flipping status to 'live':
 *   1. replace domains + weights from blueprintSource (they must sum to 100)
 *   2. correct passingScore / maxScore / defaultTimeMinutes
 *   3. set blueprintVerified: true
 *   4. add content: npm run new:pack -- --cert cncf-cnpe --kind questions --count 50
 */
export default {
  "id": "cncf-cnpe",
  "provider": "Cloud Native (CNCF)",
  "code": "CNPE",
  "title": "Certified Cloud Native Platform Engineer",
  "category": "Platform Engineering",
  "tier": "professional",
  "status": "planned",
  "priority": 8,
  "badgeClass": "badge-k8s",
  "icon": "kubernetes",
  "color": "#326CE5",
  "description": "TODO one-sentence description of what CNPE validates.",
  "passingScore": 67,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://TODO-official-exam-guide",
  "blueprintVerified": false,
  "domains": [
    {
      "id": "d1",
      "name": "TODO Domain 1",
      "weight": 34
    },
    {
      "id": "d2",
      "name": "TODO Domain 2",
      "weight": 33
    },
    {
      "id": "d3",
      "name": "TODO Domain 3",
      "weight": 33
    }
  ]
};
