/**
 * Google Cloud Professional Cloud Security Engineer (GCP-PCSE) — exam blueprint.
 *
 * Domains and weights from the official Google Cloud exam guide, verified 2026-09-23.
 * 2 hours, 50-60 questions.
 * Google does not publish a passing score; the 70 of 100 below is the project default.
 */
export default {
  "id": "gcp-pcse",
  "provider": "Google Cloud",
  "code": "GCP-PCSE",
  "title": "Google Cloud Professional Cloud Security Engineer",
  "category": "DevSecOps & Security",
  "tier": "professional",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-gcp",
  "icon": "googlecloud",
  "color": "#4285F4",
  "description": "Validates configuring access, securing communications and boundaries, protecting data, managing security operations, and supporting compliance on Google Cloud.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://cloud.google.com/learn/certification/cloud-security-engineer",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Configuring access", "weight": 25 },
    { "id": "d2", "name": "Securing communications and establishing boundary protection", "weight": 22 },
    { "id": "d3", "name": "Ensuring data protection", "weight": 23 },
    { "id": "d4", "name": "Managing operations", "weight": 19 },
    { "id": "d5", "name": "Supporting compliance requirements", "weight": 11 }
  ]
};
