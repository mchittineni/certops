/**
 * Google Cloud Digital Leader (GCP-CDL) — exam blueprint.
 *
 * Domains and weights from the official Google Cloud exam guide, verified 2026-09-23.
 * The new version of the exam went live on August 12, 2026 with six sections,
 * adding AI as its own section. 90 minutes, 50-60 questions.
 */
export default {
  "id": "gcp-cdl",
  "provider": "Google Cloud",
  "code": "GCP-CDL",
  "title": "Google Cloud Digital Leader",
  "category": "Cloud Engineering",
  "tier": "foundational",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-gcp",
  "icon": "googlecloud",
  "color": "#4285F4",
  "description": "Validates foundational knowledge of cloud computing fundamentals and how Google Cloud products and services enable digital transformation, data innovation, infrastructure modernization, and operational security.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 90,
  "blueprintSource": "https://cloud.google.com/learn/certification/cloud-digital-leader",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Digital Transformation with Google Cloud", "weight": 18 },
    { "id": "d2", "name": "Exploring Data Transformation with Google Cloud", "weight": 18 },
    { "id": "d3", "name": "Innovating with Google Cloud Artificial Intelligence", "weight": 18 },
    { "id": "d4", "name": "Modernize Infrastructure and Applications with Google Cloud", "weight": 18 },
    { "id": "d5", "name": "Trust and Security with Google Cloud", "weight": 18 },
    { "id": "d6", "name": "Scaling with Google Cloud Operations", "weight": 10 }
  ]
};
