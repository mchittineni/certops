/**
 * HashiCorp Certified: Terraform Authoring & Operations Professional (TF-PRO) — exam blueprint.
 *
 * SEEDED PLACEHOLDER. passingScore, defaultTimeMinutes, and domains are guesses.
 * Before flipping status to 'live':
 *   1. replace domains + weights from blueprintSource (they must sum to 100)
 *   2. correct passingScore / maxScore / defaultTimeMinutes
 *   3. set blueprintVerified: true
 *   4. add content: npm run new:pack -- --cert hashicorp-tfp --kind questions --count 50
 */
export default {
  "id": "hashicorp-tfp",
  "provider": "HashiCorp",
  "code": "TF-PRO",
  "title": "HashiCorp Certified: Terraform Authoring & Operations Professional",
  "category": "DevOps & SRE",
  "tier": "professional",
  "status": "planned",
  "priority": 4,
  "badgeClass": "badge-hashicorp",
  "icon": "terraform",
  "color": "#7B42BC",
  "description": "TODO one-sentence description of what TF-PRO validates.",
  "passingScore": 70,
  "maxScore": 100,
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
