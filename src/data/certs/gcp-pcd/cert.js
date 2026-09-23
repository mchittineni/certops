/**
 * Google Cloud Professional Cloud Developer (GCP-PCD) — exam blueprint.
 *
 * Domains and weights from the official Google Cloud exam guide, verified 2026-09-23.
 * 2 hours, 50-60 questions.
 * Google does not publish a passing score; the 70 of 100 below is the project default.
 */
export default {
  "id": "gcp-pcd",
  "provider": "Google Cloud",
  "code": "GCP-PCD",
  "title": "Google Cloud Professional Cloud Developer",
  "category": "Cloud Engineering",
  "tier": "professional",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-gcp",
  "icon": "googlecloud",
  "color": "#4285F4",
  "description": "Validates designing, building, testing, and deploying scalable cloud-native applications on Google Cloud and integrating them with Google Cloud services.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://cloud.google.com/learn/certification/cloud-developer",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Designing highly scalable, secure, and reliable cloud-native applications", "weight": 32 },
    { "id": "d2", "name": "Building and testing applications", "weight": 23 },
    { "id": "d3", "name": "Configuring cloud-native applications for deployment", "weight": 24 },
    { "id": "d4", "name": "Integrating applications with Google Cloud services", "weight": 21 }
  ]
};
