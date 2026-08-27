/**
 * Google Cloud Professional Machine Learning Engineer (GCP-PMLE) — exam blueprint.
 *
 * SEEDED PLACEHOLDER. passingScore, defaultTimeMinutes, and domains are guesses.
 * Before flipping status to 'live':
 *   1. replace domains + weights from blueprintSource (they must sum to 100)
 *   2. correct passingScore / maxScore / defaultTimeMinutes
 *   3. set blueprintVerified: true
 *   4. add content: npm run new:pack -- --cert gcp-pmle --kind questions --count 50
 */
export default {
  "id": "gcp-pmle",
  "provider": "Google Cloud",
  "code": "GCP-PMLE",
  "title": "Google Cloud Professional Machine Learning Engineer",
  "category": "Cloud Engineering",
  "tier": "professional",
  "status": "planned",
  "priority": 15,
  "badgeClass": "badge-gcp",
  "icon": "googlecloud",
  "color": "#4285F4",
  "description": "TODO one-sentence description of what GCP-PMLE validates.",
  "passingScore": 70,
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
