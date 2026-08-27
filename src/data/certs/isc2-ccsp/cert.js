/**
 * Certified Cloud Security Professional (CCSP) — exam blueprint.
 *
 * SEEDED PLACEHOLDER. passingScore, defaultTimeMinutes, and domains are guesses.
 * Before flipping status to 'live':
 *   1. replace domains + weights from blueprintSource (they must sum to 100)
 *   2. correct passingScore / maxScore / defaultTimeMinutes
 *   3. set blueprintVerified: true
 *   4. add content: npm run new:pack -- --cert isc2-ccsp --kind questions --count 50
 */
export default {
  "id": "isc2-ccsp",
  "provider": "ISC2",
  "code": "CCSP",
  "title": "Certified Cloud Security Professional",
  "category": "DevSecOps & Security",
  "tier": "professional",
  "status": "planned",
  "priority": 12,
  "badgeClass": "badge-security",
  "icon": "shield",
  "color": "#ef4444",
  "description": "TODO one-sentence description of what CCSP validates.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 180,
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
