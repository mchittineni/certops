/**
 * Microsoft Certified: DevOps Engineer Expert (AZ-400) — exam blueprint.
 *
 * SEEDED PLACEHOLDER. passingScore, defaultTimeMinutes, and domains are guesses.
 * Before flipping status to 'live':
 *   1. replace domains + weights from blueprintSource (they must sum to 100)
 *   2. correct passingScore / maxScore / defaultTimeMinutes
 *   3. set blueprintVerified: true
 *   4. add content: npm run new:pack -- --cert azure-az400 --kind questions --count 50
 */
export default {
  "id": "azure-az400",
  "provider": "Microsoft Azure",
  "code": "AZ-400",
  "title": "Microsoft Certified: DevOps Engineer Expert",
  "category": "DevOps & SRE",
  "tier": "professional",
  "status": "planned",
  "priority": 6,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "TODO one-sentence description of what AZ-400 validates.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 150,
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
