/**
 * Microsoft Certified: Azure Cosmos DB AI Developer Associate (DP-420) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide (skills measured as of October 6, 2026), verified 2026-09-23.
 * On October 6, 2026 Microsoft renames the Azure Cosmos DB Developer Specialty to the
 * Azure Cosmos DB AI Developer Associate; this blueprint follows the renamed exam.
 * 100 minutes, scored 700 of 1000.
 *
 * Microsoft publishes the weights as ranges (40-45/30-35/20-25); the midpoints below are normalised to sum to 100.
 */
export default {
  "id": "azure-dp420",
  "provider": "Microsoft Azure",
  "code": "DP-420",
  "title": "Microsoft Certified: Azure Cosmos DB AI Developer Associate",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Validates designing, building, securing, and optimizing Azure Cosmos DB for NoSQL solutions, including AI and analytics capabilities.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 100,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-420",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Design and develop database solutions", "weight": 44 },
    { "id": "d2", "name": "Secure, optimize, and deploy database solutions", "weight": 33 },
    { "id": "d3", "name": "Implement AI and Analytics capabilities in database solutions", "weight": 23 }
  ]
};
