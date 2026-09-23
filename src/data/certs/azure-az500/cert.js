/**
 * Microsoft Certified: Azure Security Engineer Associate (AZ-500) — exam blueprint.
 *
 * RETIRED. Microsoft retired AZ-500 and the Azure Security Engineer Associate
 * certification on August 31, 2026. Its successor is SC-500 (azure-sc500).
 *
 * The domains below do not match the final study guide (January 22, 2026: identity
 * 15-20, networking 20-25, compute/storage/databases 20-25, Defender for Cloud and
 * Sentinel 30-35), so the blueprint is marked unverified.
 */
export default {
  "id": "azure-az500",
  "provider": "Microsoft Azure",
  "code": "AZ-500",
  "title": "Microsoft Certified: Azure Security Engineer Associate",
  "category": "DevSecOps & Security",
  "tier": "associate",
  "status": "retired",
  "priority": null,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Validates engineering skills for implementing Azure security controls, threat protection with Microsoft Defender for Cloud and Sentinel, Entra ID governance, and securing networks, compute, and storage.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 100,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-500",
  "blueprintVerified": false,
  "domains": [
    { "id": "d1", "name": "Manage Identity and Access", "weight": 28 },
    { "id": "d2", "name": "Secure Networking", "weight": 22 },
    { "id": "d3", "name": "Secure Compute, Storage, and Databases", "weight": 23 },
    { "id": "d4", "name": "Manage Security Operations", "weight": 27 }
  ]
};
