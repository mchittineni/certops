/**
 * Google Cloud Professional Cloud Database Engineer (GCP-PCDBE) — exam blueprint.
 *
 * Domains and weights from the official Google Cloud exam guide, verified 2026-09-23.
 * 2 hours, 50-60 questions.
 * Google does not publish a passing score; the 70 of 100 below is the project default.
 */
export default {
  "id": "gcp-pcdbe",
  "provider": "Google Cloud",
  "code": "GCP-PCDBE",
  "title": "Google Cloud Professional Cloud Database Engineer",
  "category": "Cloud Engineering",
  "tier": "professional",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-gcp",
  "icon": "googlecloud",
  "color": "#4285F4",
  "description": "Validates designing, managing, migrating, and deploying scalable, highly available database solutions across Cloud SQL, AlloyDB, Spanner, Bigtable, and Firestore.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://cloud.google.com/learn/certification/cloud-database-engineer",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Design innovative, scalable, and highly available cloud database solutions", "weight": 32 },
    { "id": "d2", "name": "Manage a solution that can span multiple database technologies", "weight": 25 },
    { "id": "d3", "name": "Migrate data solutions", "weight": 23 },
    { "id": "d4", "name": "Deploy scalable and highly available databases in Google Cloud", "weight": 20 }
  ]
};
