/**
 * Google Cloud Digital Leader (CDL) — exam blueprint.
 *
 * Domains and weights from the official Google Cloud exam guide.
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
  "blueprintSource": "https://cloud.google.com/learn/certification/guides/cloud-digital-leader",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Digital Transformation with Google Cloud", "weight": 17 },
    { "id": "d2", "name": "Innovating with Data and Google Cloud", "weight": 30 },
    { "id": "d3", "name": "Infrastructure and Application Modernization", "weight": 27 },
    { "id": "d4", "name": "Google Cloud Security and Operations", "weight": 26 }
  ]
};
