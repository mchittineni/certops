/**
 * Microsoft Certified: Azure AI Engineer Associate (AI-102) — exam blueprint.
 *
 * RETIRED. Microsoft retired AI-102 and the Azure AI Engineer Associate certification
 * on June 30, 2026. Its successor is AI-103 (azure-ai-apps-agents). The bank is kept but
 * hidden from the catalogue; do not author it further.
 *
 * The domains below are the bank's original four. The final study guide (December 23,
 * 2025) had six, adding agentic solutions, so the blueprint is marked unverified.
 */
export default {
  "id": "azure-ai102",
  "provider": "Microsoft Azure",
  "code": "AI-102",
  "title": "Microsoft Certified: Azure AI Engineer Associate",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "retired",
  "priority": null,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Validates technical skills in building, managing, and deploying AI solutions using Azure Cognitive Services, Azure OpenAI, Vision, Language, and Speech.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-102",
  "blueprintVerified": false,
  "domains": [
    { "id": "d1", "name": "Plan and manage an Azure AI solution", "weight": 20 },
    { "id": "d2", "name": "Implement generative AI solutions with Azure OpenAI Service", "weight": 25 },
    { "id": "d3", "name": "Implement computer vision and natural language processing solutions", "weight": 35 },
    { "id": "d4", "name": "Implement knowledge mining and document intelligence solutions", "weight": 20 }
  ]
};
