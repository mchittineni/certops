/**
 * DevOps Institute SRE Practitioner (SREP) — exam blueprint.
 *
 * SEEDED PLACEHOLDER. passingScore, defaultTimeMinutes, and domains are guesses.
 * Before flipping status to 'live':
 *   1. replace domains + weights from blueprintSource (they must sum to 100)
 *   2. correct passingScore / maxScore / defaultTimeMinutes
 *   3. set blueprintVerified: true
 *   4. add content: npm run new:pack -- --cert doi-sre-practitioner --kind questions --count 50
 */
export default {
  "id": "doi-sre-practitioner",
  "provider": "DevOps Institute",
  "code": "SREP",
  "title": "DevOps Institute SRE Practitioner",
  "category": "DevOps & SRE",
  "tier": "professional",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-neutral",
  "icon": "devops",
  "color": "#14b8a6",
  "description": "TODO one-sentence description of what SREP validates.",
  "passingScore": 65,
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
