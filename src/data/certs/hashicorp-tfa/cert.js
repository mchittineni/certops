/**
 * HashiCorp Certified: Terraform Associate (TA-003) — exam blueprint.
 *
 * SEEDED PLACEHOLDER. passingScore, defaultTimeMinutes, and domains are guesses.
 * Before flipping status to 'live':
 *   1. replace domains + weights from blueprintSource (they must sum to 100)
 *   2. correct passingScore / maxScore / defaultTimeMinutes
 *   3. set blueprintVerified: true
 *   4. add content: npm run new:pack -- --cert hashicorp-tfa --kind questions --count 50
 */
export default {
  "id": "hashicorp-tfa",
  "provider": "HashiCorp",
  "code": "TA-003",
  "title": "HashiCorp Certified: Terraform Associate",
  "category": "DevOps & SRE",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-hashicorp",
  "icon": "terraform",
  "color": "#7B42BC",
  "description": "TODO one-sentence description of what TA-003 validates.",
  "passingScore": 70,
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
