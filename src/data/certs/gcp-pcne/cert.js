/**
 * Google Cloud Professional Cloud Network Engineer (GCP-PCNE) — exam blueprint.
 *
 * Domains and weights from the official Google Cloud exam guide, verified 2026-09-23.
 * 2 hours, 50-60 questions.
 * Google does not publish a passing score; the 70 of 100 below is the project default.
 */
export default {
  "id": "gcp-pcne",
  "provider": "Google Cloud",
  "code": "GCP-PCNE",
  "title": "Google Cloud Professional Cloud Network Engineer",
  "category": "Cloud Engineering",
  "tier": "professional",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-gcp",
  "icon": "googlecloud",
  "color": "#4285F4",
  "description": "Validates designing, implementing, and managing Google Cloud networks: VPCs, managed network services, hybrid and multicloud interconnectivity, network operations, and network security.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://cloud.google.com/learn/certification/cloud-network-engineer",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Designing and planning a Google Cloud VPC network", "weight": 21 },
    { "id": "d2", "name": "Implementing a VPC network", "weight": 20 },
    { "id": "d3", "name": "Configuring managed network services", "weight": 16 },
    { "id": "d4", "name": "Configuring and implementing hybrid and multicloud network interconnectivity", "weight": 16 },
    { "id": "d5", "name": "Managing, monitoring, and troubleshooting network operations", "weight": 14 },
    { "id": "d6", "name": "Configuring, implementing and managing a cloud network security solution", "weight": 13 }
  ]
};
