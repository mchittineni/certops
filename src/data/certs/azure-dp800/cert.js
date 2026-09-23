/**
 * Microsoft Certified: SQL AI Developer Associate (DP-800) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide (skills measured as of October 19, 2026), verified 2026-09-23.
 * Scored 700 of 1000.
 *
 * Microsoft publishes the weights as ranges (35-40/35-40/25-30); the midpoints below are normalised to sum to 100.
 */
export default {
  "id": "azure-dp800",
  "provider": "Microsoft Azure",
  "code": "DP-800",
  "title": "Microsoft Certified: SQL AI Developer Associate",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Validates designing, securing, optimizing, and deploying SQL database solutions and adding AI capabilities such as vector search to them.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 100,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-800",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Design and develop database solutions", "weight": 37 },
    { "id": "d2", "name": "Secure, optimize, and deploy database solutions", "weight": 36 },
    { "id": "d3", "name": "Implement AI capabilities in database solutions", "weight": 27 }
  ]
};
