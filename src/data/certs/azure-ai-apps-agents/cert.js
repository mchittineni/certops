/**
 * Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide (skills measured as of April 16, 2026), verified 2026-09-23.
 * AI-103 replaced AI-102 (retired June 30, 2026). 120 minutes, scored 700 of 1000.
 *
 * Microsoft publishes the weights as ranges (25-30/30-35/10-15/10-15/10-15); the midpoints below are normalised to sum to 100.
 */
export default {
  "id": "azure-ai-apps-agents",
  "provider": "Microsoft Azure",
  "code": "AI-103",
  "title": "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "planned",
  "priority": 18,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Validates planning and managing Azure AI solutions in Microsoft Foundry and building generative AI, agentic, computer vision, text analysis, and information extraction solutions.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Plan and manage an Azure AI solution", "weight": 28 },
    { "id": "d2", "name": "Implement generative AI and agentic solutions", "weight": 33 },
    { "id": "d3", "name": "Implement computer vision solutions", "weight": 13 },
    { "id": "d4", "name": "Implement text analysis solutions", "weight": 13 },
    { "id": "d5", "name": "Implement information extraction solutions", "weight": 13 }
  ]
};
