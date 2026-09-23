/**
 * Google Cloud Associate Data Practitioner (GCP-ADP) — exam blueprint.
 *
 * Domains and weights from the official Google Cloud exam guide, verified 2026-09-23.
 * 2 hours, 50-60 questions.
 * Google does not publish a passing score; the 70 of 100 below is the project default.
 */
export default {
  "id": "gcp-adp",
  "provider": "Google Cloud",
  "code": "GCP-ADP",
  "title": "Google Cloud Associate Data Practitioner",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-gcp",
  "icon": "googlecloud",
  "color": "#4285F4",
  "description": "Validates preparing, ingesting, analysing, and managing data on Google Cloud and orchestrating data pipelines.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://cloud.google.com/learn/certification/data-practitioner",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Data Preparation and Ingestion", "weight": 30 },
    { "id": "d2", "name": "Data Analysis and Presentation", "weight": 27 },
    { "id": "d3", "name": "Data Pipeline Orchestration", "weight": 18 },
    { "id": "d4", "name": "Data Management", "weight": 25 }
  ]
};
