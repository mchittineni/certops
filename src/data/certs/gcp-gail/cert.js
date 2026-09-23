/**
 * Google Cloud Generative AI Leader (GCP-GAIL) — exam blueprint.
 *
 * Domains and weights from the official Google Cloud exam guide, verified 2026-09-23.
 * 90 minutes, 50-60 questions.
 * Google does not publish a passing score; the 70 of 100 below is the project default.
 */
export default {
  "id": "gcp-gail",
  "provider": "Google Cloud",
  "code": "GCP-GAIL",
  "title": "Google Cloud Generative AI Leader",
  "category": "Cloud Engineering",
  "tier": "foundational",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-gcp",
  "icon": "googlecloud",
  "color": "#4285F4",
  "description": "Validates business-level knowledge of generative AI: core concepts, Google Cloud gen AI offerings, techniques to improve model output, and strategies for successful adoption.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 90,
  "blueprintSource": "https://cloud.google.com/learn/certification/generative-ai-leader",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Fundamentals of gen AI", "weight": 30 },
    { "id": "d2", "name": "Google Cloud's gen AI offerings", "weight": 35 },
    { "id": "d3", "name": "Techniques to improve gen AI model output", "weight": 20 },
    { "id": "d4", "name": "Business strategies for a successful gen AI solution", "weight": 15 }
  ]
};
