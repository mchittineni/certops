/**
 * Microsoft Certified: Azure Fundamentals (AZ-900) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide (skills measured as of July 20, 2026), verified 2026-09-23.
 * 45 minutes, scored 700 of 1000.
 *
 * Microsoft publishes the weights as ranges (25-30/35-40/30-35); the midpoints below are normalised to sum to 100.
 */
export default {
  "id": "azure-az900",
  "provider": "Microsoft Azure",
  "code": "AZ-900",
  "title": "Microsoft Certified: Azure Fundamentals",
  "category": "Cloud Engineering",
  "tier": "foundational",
  "status": "live",
  "priority": null,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Demonstrates foundational knowledge of cloud services, Azure architecture and services, and Azure management and governance.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 45,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Describe cloud concepts", "weight": 28 },
    { "id": "d2", "name": "Describe Azure architecture and services", "weight": 39 },
    { "id": "d3", "name": "Describe Azure management and governance", "weight": 33 }
  ]
};
