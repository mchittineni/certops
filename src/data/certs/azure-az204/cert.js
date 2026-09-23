/**
 * Microsoft Certified: Azure Developer Associate (AZ-204) — exam blueprint.
 *
 * RETIRED. Microsoft retired AZ-204 and the Azure Developer Associate certification
 * on July 31, 2026. Its successor is AI-200 (azure-ai200). The bank is kept but hidden
 * from the catalogue; do not author it further.
 *
 * Domains from the final study guide (skills measured as of January 14, 2026).
 * Microsoft publishes the weights as ranges (25-30/15-20/15-20/5-10/20-25); the midpoints below are normalised to sum to 100.
 */
export default {
  "id": "azure-az204",
  "provider": "Microsoft Azure",
  "code": "AZ-204",
  "title": "Microsoft Certified: Azure Developer Associate",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "retired",
  "priority": null,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Validates technical skills in designing, building, testing, and maintaining cloud applications and services on Microsoft Azure.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-204",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Develop Azure compute solutions", "weight": 30 },
    { "id": "d2", "name": "Develop for Azure storage", "weight": 19 },
    { "id": "d3", "name": "Implement Azure security", "weight": 19 },
    { "id": "d4", "name": "Monitor, troubleshoot, and optimize Azure solutions", "weight": 8 },
    { "id": "d5", "name": "Connect to and consume Azure services and third-party services", "weight": 24 }
  ]
};
