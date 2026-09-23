/**
 * Microsoft Certified: Cloud and AI Security Engineer Associate (SC-500) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide, verified 2026-09-23.
 * SC-500 replaced AZ-500 (retired August 31, 2026). Scored 700 of 1000.
 *
 * Microsoft publishes the weights as ranges (20-25/25-30/20-25/20-25); the midpoints below are normalised to sum to 100.
 */
export default {
  "id": "azure-sc500",
  "provider": "Microsoft Azure",
  "code": "SC-500",
  "title": "Microsoft Certified: Cloud and AI Security Engineer Associate",
  "category": "DevSecOps & Security",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Validates implementing end-to-end security controls for cloud and AI workloads: identity and governance, storage, database and network security, compute security, and security posture management.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 100,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-500",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Manage identity, access, and governance", "weight": 24 },
    { "id": "d2", "name": "Secure storage, databases, and networking", "weight": 28 },
    { "id": "d3", "name": "Secure compute", "weight": 24 },
    { "id": "d4", "name": "Manage and monitor security posture", "weight": 24 }
  ]
};
