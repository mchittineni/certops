/**
 * Microsoft Certified: Azure Network Engineer Associate (AZ-700) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide (skills measured as of July 27, 2026), verified 2026-09-23.
 * 100 minutes, scored 700 of 1000.
 *
 * Microsoft publishes the weights as ranges (25-30/20-25/15-20/10-15/15-20); the midpoints below are normalised to sum to 100.
 */
export default {
  "id": "azure-az700",
  "provider": "Microsoft Azure",
  "code": "AZ-700",
  "title": "Microsoft Certified: Azure Network Engineer Associate",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Validates designing and implementing Azure networking: core infrastructure, hybrid connectivity, application delivery, private access to services, and network security.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 100,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-700",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Design and implement core networking infrastructure", "weight": 28 },
    { "id": "d2", "name": "Design, implement, and manage connectivity services", "weight": 23 },
    { "id": "d3", "name": "Design and implement application delivery services", "weight": 18 },
    { "id": "d4", "name": "Design and implement private access to Azure services", "weight": 13 },
    { "id": "d5", "name": "Design and implement Azure network security services", "weight": 18 }
  ]
};
