/**
 * Google Cloud Professional Data Engineer (GCP-PDE) — exam blueprint.
 *
 * Domains and weights from the official Google Cloud exam guide, verified 2026-09-23.
 * 2 hours, 40-50 questions.
 * Google does not publish a passing score; the 70 of 100 below is the project default.
 */
export default {
  "id": "gcp-pde",
  "provider": "Google Cloud",
  "code": "GCP-PDE",
  "title": "Google Cloud Professional Data Engineer",
  "category": "Cloud Engineering",
  "tier": "professional",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-gcp",
  "icon": "googlecloud",
  "color": "#4285F4",
  "description": "Validates technical proficiency in designing, building, operationalizing, securing, and monitoring data processing systems and pipelines on Google Cloud.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://cloud.google.com/learn/certification/data-engineer",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Designing data processing systems", "weight": 22 },
    { "id": "d2", "name": "Ingesting and processing the data", "weight": 25 },
    { "id": "d3", "name": "Storing the data", "weight": 20 },
    { "id": "d4", "name": "Preparing and using data for analysis", "weight": 15 },
    { "id": "d5", "name": "Maintaining and automating data workloads", "weight": 18 }
  ]
};
