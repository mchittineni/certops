/**
 * Microsoft Certified: Azure Administrator Associate (AZ-104) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide (skills measured as of April 17, 2026), verified 2026-09-23.
 * 100 minutes, scored 700 of 1000.
 *
 * Microsoft publishes the weights as ranges (20-25/15-20/20-25/15-20/10-15); the midpoints below are normalised to sum to 100.
 */
export default {
  "id": "azure-az104",
  "provider": "Microsoft Azure",
  "code": "AZ-104",
  "title": "Microsoft Certified: Azure Administrator Associate",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "live",
  "priority": null,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Demonstrates subject matter expertise in implementing, managing, and monitoring an organization's Microsoft Azure environment, including virtual networks, storage, compute, identity, security, and governance.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 100,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Manage Azure identities and governance", "weight": 24 },
    { "id": "d2", "name": "Implement and manage storage", "weight": 19 },
    { "id": "d3", "name": "Deploy and manage Azure compute resources", "weight": 24 },
    { "id": "d4", "name": "Implement and manage virtual networking", "weight": 19 },
    { "id": "d5", "name": "Monitor and maintain Azure resources", "weight": 14 }
  ]
};
