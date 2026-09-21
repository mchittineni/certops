/**
 * Google Cloud Professional Machine Learning Engineer (GCP-PMLE) — exam blueprint.
 *
 * BLUEPRINT NOT VERIFIED. The published exam guide (June 1, 2026) has Architecting low-code AI solutions ~13, Collaborating within and across teams to manage data and models ~16, Scaling prototypes into ML models ~21, Serving and scaling models ~20, Automating and orchestrating ML pipelines ~18, Monitoring AI solutions ~13; the four below were seeded, not taken from it.
 * Correcting the domains means re-authoring the bank, because every question
 * carries its domainName. See docs/EXAM-READINESS.md.
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
  "blueprintVerified": false,
  "domains": [
    {
      "id": "d1",
      "name": "Framing ML problems and architecting solutions",
      "weight": 20
    },
    {
      "id": "d2",
      "name": "Preparing data and feature engineering",
      "weight": 25
    },
    {
      "id": "d3",
      "name": "Developing and training ML models",
      "weight": 25
    },
    {
      "id": "d4",
      "name": "Deploying, scaling, and automating MLOps pipelines",
      "weight": 30
    }
  ]
};
