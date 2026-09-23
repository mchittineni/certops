/**
 * Google Cloud Professional Agentic Architect (GCP-PAA) — exam blueprint.
 *
 * Domains and weights from the official Google Cloud exam guide, verified 2026-09-23.
 * Beta exam (open until September 30, 2026): 3 hours, about 80 questions.
 * Google does not publish a passing score; the 70 of 100 below is the project default.
 */
export default {
  "id": "gcp-paa",
  "provider": "Google Cloud",
  "code": "GCP-PAA",
  "title": "Google Cloud Professional Agentic Architect",
  "category": "Cloud Engineering",
  "tier": "professional",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-gcp",
  "icon": "googlecloud",
  "color": "#4285F4",
  "description": "Validates building agents with low-code tools and coding agents, developing custom agents, and evaluating, deploying, securing, and governing agentic workflows on Google Cloud.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 180,
  "blueprintSource": "https://cloud.google.com/learn/certification/agentic-architect",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Building agents using low-code tools", "weight": 13 },
    { "id": "d2", "name": "Using coding agents for application development", "weight": 17 },
    { "id": "d3", "name": "Developing custom agents", "weight": 33 },
    { "id": "d4", "name": "Evaluating and deploying agentic workflows", "weight": 22 },
    { "id": "d5", "name": "Securing and governing agentic workflows", "weight": 15 }
  ]
};
