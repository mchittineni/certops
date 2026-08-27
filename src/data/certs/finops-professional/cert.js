/**
 * FinOps Certified Professional (FOC-PRO) — exam blueprint.
 *
 * SEEDED PLACEHOLDER. passingScore, defaultTimeMinutes, and domains are guesses.
 * Before flipping status to 'live':
 *   1. replace domains + weights from blueprintSource (they must sum to 100)
 *   2. correct passingScore / maxScore / defaultTimeMinutes
 *   3. set blueprintVerified: true
 *   4. add content: npm run new:pack -- --cert finops-professional --kind questions --count 50
 */
export default {
  "id": "finops-professional",
  "provider": "FinOps Foundation",
  "code": "FOC-PRO",
  "title": "FinOps Certified Professional",
  "category": "FinOps",
  "tier": "professional",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-finops",
  "icon": "finops",
  "color": "#10b981",
  "description": "TODO one-sentence description of what FOC-PRO validates.",
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
