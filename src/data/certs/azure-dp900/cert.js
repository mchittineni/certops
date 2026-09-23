/**
 * Microsoft Certified: Azure Data Fundamentals (DP-900) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide (skills measured as of July 21, 2026), verified 2026-09-23.
 * 45 minutes, scored 700 of 1000.
 *
 * Microsoft publishes the weights as ranges (25-30/20-25/15-20/25-30); the midpoints below are normalised to sum to 100.
 */
export default {
  "id": "azure-dp900",
  "provider": "Microsoft Azure",
  "code": "DP-900",
  "title": "Microsoft Certified: Azure Data Fundamentals",
  "category": "Cloud Engineering",
  "tier": "foundational",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Validates foundational knowledge of core data concepts and of relational, non-relational, and analytics data workloads on Azure.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 45,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-900",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Describe core data concepts", "weight": 29 },
    { "id": "d2", "name": "Identify considerations for relational data on Azure", "weight": 24 },
    { "id": "d3", "name": "Describe considerations for working with non-relational data on Azure", "weight": 18 },
    { "id": "d4", "name": "Describe an analytics workload on Azure", "weight": 29 }
  ]
};
