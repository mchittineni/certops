/**
 * Microsoft Certified: Azure Virtual Desktop Specialty (AZ-140) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide (skills measured as of July 20, 2026), verified 2026-09-23.
 * 100 minutes, scored 700 of 1000.
 *
 * Microsoft publishes the weights as ranges (40-45/15-20/20-25/10-15); the midpoints below are normalised to sum to 100.
 */
export default {
  "id": "azure-az140",
  "provider": "Microsoft Azure",
  "code": "AZ-140",
  "title": "Microsoft Certified: Azure Virtual Desktop Specialty",
  "category": "Cloud Engineering",
  "tier": "specialty",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Validates planning, delivering, managing, and monitoring Azure Virtual Desktop: infrastructure, identity and security, user environments and apps.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 100,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-140",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Plan and implement an Azure Virtual Desktop infrastructure", "weight": 45 },
    { "id": "d2", "name": "Plan and implement identity and security", "weight": 18 },
    { "id": "d3", "name": "Plan and implement user environments and apps", "weight": 24 },
    { "id": "d4", "name": "Monitor and maintain an Azure Virtual Desktop infrastructure", "weight": 13 }
  ]
};
