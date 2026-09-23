/**
 * Microsoft Certified: Azure Databricks Data Engineer Associate (DP-750) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide (skills measured as of October 19, 2026), verified 2026-09-23.
 * Scored 700 of 1000.
 *
 * Microsoft publishes the weights as ranges (15-20/15-20/30-35/30-35); the midpoints below are normalised to sum to 100.
 */
export default {
  "id": "azure-dp750",
  "provider": "Microsoft Azure",
  "code": "DP-750",
  "title": "Microsoft Certified: Azure Databricks Data Engineer Associate",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Validates implementing data engineering on Azure Databricks: environment setup, Unity Catalog governance, data preparation and processing, and pipeline deployment and maintenance.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 100,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-750",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Set up and configure an Azure Databricks environment", "weight": 17 },
    { "id": "d2", "name": "Secure and govern Unity Catalog objects", "weight": 18 },
    { "id": "d3", "name": "Prepare and process data", "weight": 32 },
    { "id": "d4", "name": "Deploy and maintain data pipelines and workloads", "weight": 33 }
  ]
};
