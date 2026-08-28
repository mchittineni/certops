/**
 * Microsoft Azure Fundamentals (AZ-900) — exam blueprint.
 *
 * Everything about this certification lives in this folder: the blueprint here,
 * question packs in ./questions/, flashcard packs in ./flashcards/. Nothing
 * outside the folder needs editing — the content index is generated from it.
 *
 * blueprintVerified: flip to true only after checking domains and weights
 * against blueprintSource. `npm run validate` warns while it is false.
 */
export default {
  "id": "azure-az900",
  "provider": "Microsoft Azure",
  "code": "AZ-900",
  "title": "Microsoft Azure Fundamentals",
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
    {
      "id": "d1",
      "name": "Describe Cloud Concepts",
      "weight": 30
    },
    {
      "id": "d2",
      "name": "Describe Azure Architecture and Services",
      "weight": 40
    },
    {
      "id": "d3",
      "name": "Describe Azure Management and Governance",
      "weight": 30
    }
  ]
};
