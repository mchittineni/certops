/**
 * Microsoft Certified: Azure AI Fundamentals (AI-901) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide (skills measured as of April 15, 2026), verified 2026-09-23.
 * AI-901 replaced AI-900 for this certification. Scored 700 of 1000.
 *
 * Microsoft publishes the weights as ranges (40-45/55-60); the midpoints below are normalised to sum to 100.
 */
export default {
  "id": "azure-ai901",
  "provider": "Microsoft Azure",
  "code": "AI-901",
  "title": "Microsoft Certified: Azure AI Fundamentals",
  "category": "Cloud Engineering",
  "tier": "foundational",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Validates foundational knowledge of AI concepts and capabilities and of building AI solutions with Microsoft Foundry.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 45,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Identify AI concepts and capabilities", "weight": 43 },
    { "id": "d2", "name": "Implement AI solutions by using Microsoft Foundry", "weight": 57 }
  ]
};
