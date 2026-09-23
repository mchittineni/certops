/**
 * Google Cloud Professional Cloud Architect (GCP-PCA) — exam blueprint.
 *
 * Domains and weights from the official Google Cloud exam guide, verified 2026-09-23.
 * 2 hours, 50-60 questions. The guide gives sections 2 and 3 as 17.5% each and
 * sections 5 and 6 as 12.5% each; they are rounded to whole numbers below.
 * Google does not publish a passing score; the 70 of 100 below is the project default.
 */
export default {
  "id": "gcp-pca",
  "provider": "Google Cloud",
  "code": "GCP-PCA",
  "title": "Google Cloud Professional Cloud Architect",
  "category": "Cloud Engineering",
  "tier": "professional",
  "status": "live",
  "priority": 20,
  "badgeClass": "badge-gcp",
  "icon": "googlecloud",
  "color": "#4285F4",
  "description": "Validates professional ability to architect, develop, and manage robust, secure, scalable, highly available, and dynamic cloud solutions on Google Cloud.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://cloud.google.com/learn/certification/cloud-architect",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Designing and planning a cloud solution architecture", "weight": 25 },
    { "id": "d2", "name": "Managing and provisioning a cloud solution infrastructure", "weight": 18 },
    { "id": "d3", "name": "Designing for security and compliance", "weight": 17 },
    { "id": "d4", "name": "Analyzing and optimizing technical and business processes", "weight": 15 },
    { "id": "d5", "name": "Managing implementation", "weight": 13 },
    { "id": "d6", "name": "Ensuring solution and operations excellence", "weight": 12 }
  ]
};
