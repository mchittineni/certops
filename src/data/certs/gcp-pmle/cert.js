/**
 * Google Cloud Professional Machine Learning Engineer (GCP-PMLE) — exam blueprint.
 *
 * Domains and weights from the official Google Cloud exam guide, verified 2026-09-23.
 * This version reflects the move from Vertex AI to Gemini Enterprise Agent Platform.
 * 2 hours, 50-60 questions. Google's rounded weights sum to 101. Every item was
 * reclassified onto these sections when the blueprint was corrected.
 * Google does not publish a passing score; the 70 of 100 below is the project default.
 */
export default {
  "id": "gcp-pmle",
  "provider": "Google Cloud",
  "code": "GCP-PMLE",
  "title": "Google Cloud Professional Machine Learning Engineer",
  "category": "Cloud Engineering",
  "tier": "professional",
  "status": "live",
  "priority": 15,
  "badgeClass": "badge-gcp",
  "icon": "googlecloud",
  "color": "#4285F4",
  "description": "Validates professional competence in designing, building, and productionizing machine learning models and MLOps pipelines on Google Cloud Vertex AI.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://cloud.google.com/learn/certification/machine-learning-engineer",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Architecting low-code AI solutions", "weight": 13 },
    { "id": "d2", "name": "Collaborating within and across teams to manage data and models", "weight": 16 },
    { "id": "d3", "name": "Scaling prototypes into ML models", "weight": 21 },
    { "id": "d4", "name": "Serving and scaling models", "weight": 20 },
    { "id": "d5", "name": "Automating and orchestrating ML pipelines", "weight": 18 },
    { "id": "d6", "name": "Monitoring AI solutions", "weight": 13 }
  ]
};
