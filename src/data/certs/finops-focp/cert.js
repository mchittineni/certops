/**
 * FinOps Certified Practitioner (FOCP) — exam blueprint.
 *
 * SEEDED PLACEHOLDER. passingScore, defaultTimeMinutes, and domains are guesses.
 * Before flipping status to 'live':
 *   1. replace domains + weights from blueprintSource (they must sum to 100)
 *   2. correct passingScore / maxScore / defaultTimeMinutes
 *   3. set blueprintVerified: true
 *   4. add content: npm run new:pack -- --cert finops-focp --kind questions --count 50
 */
export default {
  "id": "finops-focp",
  "provider": "FinOps Foundation",
  "code": "FOCP",
  "title": "FinOps Certified Practitioner",
  "category": "FinOps",
  "tier": "foundational",
  "status": "live",
  "priority": 10,
  "badgeClass": "badge-finops",
  "icon": "finops",
  "color": "#10b981",
  "description": "Validates foundational knowledge of FinOps principles, lifecycle phases, personas, and optimization practices.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 60,
  "blueprintSource": "https://www.finops.org/certification/practitioner/",
  "blueprintVerified": true,
  "domains": [
    {
      "id": "d1",
      "name": "Understand Cloud & FinOps Principles",
      "weight": 20
    },
    {
      "id": "d2",
      "name": "FinOps Phases & Maturity Model",
      "weight": 25
    },
    {
      "id": "d3",
      "name": "FinOps Framework & Personas",
      "weight": 25
    },
    {
      "id": "d4",
      "name": "FinOps Capabilities & Optimization",
      "weight": 30
    }
  ]
};
