/**
 * FinOps Certified Engineer (FOCE) — exam blueprint.
 *
 * SEEDED PLACEHOLDER. passingScore, defaultTimeMinutes, and domains are guesses.
 * Before flipping status to 'live':
 *   1. replace domains + weights from blueprintSource (they must sum to 100)
 *   2. correct passingScore / maxScore / defaultTimeMinutes
 *   3. set blueprintVerified: true
 *   4. add content: npm run new:pack -- --cert finops-engineer --kind questions --count 50
 */
export default {
  "id": "finops-engineer",
  "provider": "FinOps Foundation",
  "code": "FOCE",
  "title": "FinOps Certified Engineer",
  "category": "FinOps",
  "tier": "professional",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-finops",
  "icon": "finops",
  "color": "#10b981",
  "description": "TODO one-sentence description of what FOCE validates.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 90,
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
