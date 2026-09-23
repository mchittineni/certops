/**
 * Microsoft Certified: Azure Security Engineer Associate (AZ-500) — exam blueprint.
 *
 * Domains and weights from the official Microsoft study guide.
 */
export default {
  "id": "azure-az500",
  "provider": "Microsoft Azure",
  "code": "AZ-500",
  "title": "Microsoft Certified: Azure Security Engineer Associate",
  "category": "DevSecOps & Security",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Validates engineering skills for implementing Azure security controls, threat protection with Microsoft Defender for Cloud and Sentinel, Entra ID governance, and securing networks, compute, and storage.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 100,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-500",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Manage Identity and Access", "weight": 28 },
    { "id": "d2", "name": "Secure Networking", "weight": 22 },
    { "id": "d3", "name": "Secure Compute, Storage, and Databases", "weight": 23 },
    { "id": "d4", "name": "Manage Security Operations", "weight": 27 }
  ]
};
