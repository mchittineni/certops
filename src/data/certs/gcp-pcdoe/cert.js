/**
 * Google Cloud Professional Cloud DevOps Engineer (GCP-PCDE) — exam blueprint.
 *
 * Domains and weights from the official Google Cloud exam guide, verified 2026-09-23.
 * 2 hours, 50-60 questions. Every item was reclassified onto these sections when the
 * blueprint was corrected.
 * Google does not publish a passing score; the 70 of 100 below is the project default.
 */
export default {
  "id": "gcp-pcdoe",
  "provider": "Google Cloud",
  "code": "GCP-PCDE",
  "title": "Google Cloud Professional Cloud DevOps Engineer",
  "category": "DevOps & SRE",
  "tier": "professional",
  "status": "live",
  "priority": 5,
  "badgeClass": "badge-gcp",
  "icon": "googlecloud",
  "color": "#4285F4",
  "description": "Validates ability to foster SRE culture, build reliable continuous delivery pipelines, and ensure high availability across Google Cloud environments.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://cloud.google.com/learn/certification/cloud-devops-engineer",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Bootstrapping and maintaining a Google Cloud organization", "weight": 20 },
    { "id": "d2", "name": "Building and implementing CI/CD pipelines, including continuous testing, for application, infrastructure, and machine learning workloads", "weight": 25 },
    { "id": "d3", "name": "Applying site reliability engineering practices", "weight": 18 },
    { "id": "d4", "name": "Implementing observability practices and troubleshooting issues", "weight": 25 },
    { "id": "d5", "name": "Optimizing performance and cost", "weight": 12 }
  ]
};
