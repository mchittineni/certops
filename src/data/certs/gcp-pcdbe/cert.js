/**
 * Google Cloud Professional Cloud Database Engineer (GCP-PCDBE) — exam blueprint.
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
  "description": "Validates capabilities to design, build, administer, migrate, and optimize Google Cloud databases including Cloud SQL, Spanner, Bigtable, and Firestore.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://cloud.google.com/learn/certification/cloud-database-engineer",
  "blueprintVerified": false,
  "domains": [
    {
      "id": "d1",
      "name": "Designing scalable enterprise database solutions on Google Cloud",
      "weight": 30
    },
    {
      "id": "d2",
      "name": "Managing and migrating relational and NoSQL databases",
      "weight": 40
    },
    {
      "id": "d3",
      "name": "Deploying high availability, disaster recovery, and security",
      "weight": 30
    }
  ]
};
