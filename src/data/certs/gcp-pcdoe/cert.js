/**
 * Google Cloud Professional Cloud DevOps Engineer (GCP-PCDE) — exam blueprint.
 *
 * SEEDED PLACEHOLDER. passingScore, defaultTimeMinutes, and domains are guesses.
 * Before flipping status to 'live':
 *   1. replace domains + weights from blueprintSource (they must sum to 100)
 *   2. correct passingScore / maxScore / defaultTimeMinutes
 *   3. set blueprintVerified: true
 *   4. add content: npm run new:pack -- --cert gcp-pcdoe --kind questions --count 50
 */
export default {
  "id": "gcp-pcdoe",
  "provider": "Google Cloud",
  "code": "GCP-PCDE",
  "title": "Google Cloud Professional Cloud DevOps Engineer",
  "category": "DevOps & SRE",
  "tier": "professional",
  "status": "planned",
  "priority": 5,
  "badgeClass": "badge-gcp",
  "icon": "googlecloud",
  "color": "#4285F4",
  "description": "TODO one-sentence description of what GCP-PCDE validates.",
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
