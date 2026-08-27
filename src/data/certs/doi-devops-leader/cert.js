/**
 * DevOps Institute DevOps Leader (DOL) — exam blueprint.
 *
 * SEEDED PLACEHOLDER. passingScore, defaultTimeMinutes, and domains are guesses.
 * Before flipping status to 'live':
 *   1. replace domains + weights from blueprintSource (they must sum to 100)
 *   2. correct passingScore / maxScore / defaultTimeMinutes
 *   3. set blueprintVerified: true
 *   4. add content: npm run new:pack -- --cert doi-devops-leader --kind questions --count 50
 */
export default {
  "id": "doi-devops-leader",
  "provider": "DevOps Institute",
  "code": "DOL",
  "title": "DevOps Institute DevOps Leader",
  "category": "DevOps & SRE",
  "tier": "professional",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-neutral",
  "icon": "devops",
  "color": "#14b8a6",
  "description": "TODO one-sentence description of what DOL validates.",
  "passingScore": 65,
  "maxScore": 100,
  "defaultTimeMinutes": 60,
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
