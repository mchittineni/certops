/**
 * Microsoft Certified: Azure AI Cloud Developer Associate (AI-200) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide, verified 2026-09-23.
 * AI-200 replaced AZ-204 (retired July 31, 2026). 120 minutes, scored 700 of 1000.
 *
 * Microsoft publishes the weights as ranges (20-25/25-30/20-25/20-25); the midpoints below are normalised to sum to 100.
 */
export default {
  "id": "azure-ai200",
  "provider": "Microsoft Azure",
  "code": "AI-200",
  "title": "Microsoft Certified: Azure AI Cloud Developer Associate",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Validates building back-end AI solutions on Azure: containerized apps on Container Apps and AKS, vector search with Cosmos DB, PostgreSQL and Managed Redis, messaging and Functions, and securing and monitoring them.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-200",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Develop containerized solutions on Azure", "weight": 24 },
    { "id": "d2", "name": "Develop AI solutions by using Azure data management services", "weight": 28 },
    { "id": "d3", "name": "Connect to and consume Azure services", "weight": 24 },
    { "id": "d4", "name": "Secure, monitor, and troubleshoot Azure solutions", "weight": 24 }
  ]
};
