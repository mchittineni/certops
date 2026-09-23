/**
 * Microsoft Certified: Azure for SAP Workloads Specialty (AZ-120) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide (skills measured as of April 17, 2026), verified 2026-09-23.
 * 100 minutes, scored 700 of 1000.
 *
 * Microsoft publishes the weights as ranges (25-30/25-30/20-25/20-25); the midpoints below are normalised to sum to 100.
 */
export default {
  "id": "azure-az120",
  "provider": "Microsoft Azure",
  "code": "AZ-120",
  "title": "Microsoft Certified: Azure for SAP Workloads Specialty",
  "category": "Cloud Engineering",
  "tier": "specialty",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Validates planning, migrating, and operating SAP workloads on Azure, including infrastructure design and high availability and disaster recovery.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 100,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-120",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Migrate SAP workloads to Azure", "weight": 28 },
    { "id": "d2", "name": "Design and implement an infrastructure to support SAP workloads on Azure", "weight": 28 },
    { "id": "d3", "name": "Design and implement high availability and disaster recovery (HADR)", "weight": 22 },
    { "id": "d4", "name": "Maintain SAP workloads on Azure", "weight": 22 }
  ]
};
