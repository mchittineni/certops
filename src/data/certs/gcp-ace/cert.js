/**
 * Associate Cloud Engineer (GCP-ACE) — exam blueprint.
 *
 * Domains and weights from the official Google Cloud exam guide, verified 2026-09-23.
 * The current guide has four sections: "Planning and implementing" merges the old
 * planning and deploying sections. 2 hours, 50-60 questions.
 * Google does not publish a passing score; the 70 of 100 below is the project default.
 */
export default {
  "id": "gcp-ace",
  "provider": "Google Cloud",
  "code": "GCP-ACE",
  "title": "Associate Cloud Engineer",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "live",
  "priority": null,
  "badgeClass": "badge-gcp",
  "icon": "googlecloud",
  "color": "#4285F4",
  "description": "Deploys applications, monitors operations, and manages enterprise solutions across Compute Engine, GKE, Cloud Storage, and IAM.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://cloud.google.com/learn/certification/cloud-engineer",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Setting up a cloud solution environment", "weight": 20 },
    { "id": "d2", "name": "Planning and implementing a cloud solution", "weight": 30 },
    { "id": "d3", "name": "Ensuring the successful operation of a cloud solution", "weight": 30 },
    { "id": "d4", "name": "Configuring access and security", "weight": 20 }
  ]
};
