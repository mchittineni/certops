/**
 * AWS Certified Solutions Architect - Professional (SAP-C02) — exam blueprint.
 *
 * SEEDED PLACEHOLDER. passingScore, defaultTimeMinutes, and domains are guesses.
 * Before flipping status to 'live':
 *   1. replace domains + weights from blueprintSource (they must sum to 100)
 *   2. correct passingScore / maxScore / defaultTimeMinutes
 *   3. set blueprintVerified: true
 *   4. add content: npm run new:pack -- --cert aws-sap --kind questions --count 50
 */
export default {
  "id": "aws-sap",
  "provider": "AWS",
  "code": "SAP-C02",
  "title": "AWS Certified Solutions Architect - Professional",
  "category": "Cloud Engineering",
  "tier": "professional",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-aws",
  "icon": "aws",
  "color": "#ff9900",
  "description": "TODO one-sentence description of what SAP-C02 validates.",
  "passingScore": 750,
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
