/**
 * Google Cloud Professional Security Operations Engineer (GCP-PSOE) — exam blueprint.
 *
 * Domains and weights from the official Google Cloud exam guide, verified 2026-09-23.
 * 2 hours, 50-60 questions.
 * Google does not publish a passing score; the 70 of 100 below is the project default.
 */
export default {
  "id": "gcp-psoe",
  "provider": "Google Cloud",
  "code": "GCP-PSOE",
  "title": "Google Cloud Professional Security Operations Engineer",
  "category": "DevSecOps & Security",
  "tier": "professional",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-gcp",
  "icon": "googlecloud",
  "color": "#4285F4",
  "description": "Validates operating Google Security Operations: platform operations, data management, threat hunting, detection engineering, incident response, and observability.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://cloud.google.com/learn/certification/security-operations-engineer",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Platform operations", "weight": 14 },
    { "id": "d2", "name": "Data management", "weight": 14 },
    { "id": "d3", "name": "Threat hunting", "weight": 19 },
    { "id": "d4", "name": "Detection engineering", "weight": 22 },
    { "id": "d5", "name": "Incident response", "weight": 21 },
    { "id": "d6", "name": "Observability", "weight": 10 }
  ]
};
