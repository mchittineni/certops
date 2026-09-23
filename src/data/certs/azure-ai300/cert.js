/**
 * Microsoft Certified: Machine Learning Operations Engineer Associate (AI-300) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide, verified 2026-09-23.
 * 120 minutes, scored 700 of 1000.
 *
 * Microsoft publishes the weights as ranges (15-20/25-30/20-25/10-15/10-15); the midpoints below are normalised to sum to 100.
 */
export default {
  "id": "azure-ai300",
  "provider": "Microsoft Azure",
  "code": "AI-300",
  "title": "Microsoft Certified: Machine Learning Operations Engineer Associate",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Validates operationalizing machine learning and generative AI on Azure: MLOps and GenAIOps infrastructure, model lifecycle, quality assurance and observability, and performance optimization.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-300",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Design and implement an MLOps infrastructure", "weight": 19 },
    { "id": "d2", "name": "Implement machine learning model lifecycle and operations", "weight": 29 },
    { "id": "d3", "name": "Design and implement a GenAIOps infrastructure", "weight": 24 },
    { "id": "d4", "name": "Implement generative AI quality assurance and observability", "weight": 14 },
    { "id": "d5", "name": "Optimize generative AI systems and model performance", "weight": 14 }
  ]
};
