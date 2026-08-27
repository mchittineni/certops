/**
 * Certified Information Systems Security Professional (CISSP) — exam blueprint.
 *
 * SEEDED PLACEHOLDER. passingScore, defaultTimeMinutes, and domains are guesses.
 * Before flipping status to 'live':
 *   1. replace domains + weights from blueprintSource (they must sum to 100)
 *   2. correct passingScore / maxScore / defaultTimeMinutes
 *   3. set blueprintVerified: true
 *   4. add content: npm run new:pack -- --cert isc2-cissp --kind questions --count 50
 */
export default {
  "id": "isc2-cissp",
  "provider": "ISC2",
  "code": "CISSP",
  "title": "Certified Information Systems Security Professional",
  "category": "DevSecOps & Security",
  "tier": "professional",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-security",
  "icon": "shield",
  "color": "#ef4444",
  "description": "TODO one-sentence description of what CISSP validates.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 240,
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
