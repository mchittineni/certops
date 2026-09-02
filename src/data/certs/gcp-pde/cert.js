/**
 * Google Cloud Professional Data Engineer (GCP-PDE) — exam blueprint.
 */
export default {
  "id": "gcp-pde",
  "provider": "Google Cloud",
  "code": "GCP-PDE",
  "title": "Google Cloud Professional Data Engineer",
  "category": "Cloud Engineering",
  "tier": "professional",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-gcp",
  "icon": "googlecloud",
  "color": "#4285F4",
  "description": "Validates technical proficiency in designing, building, operationalizing, securing, and monitoring data processing systems and pipelines on Google Cloud.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://cloud.google.com/learn/certification/data-engineer",
  "blueprintVerified": false,
  "domains": [
    {
      "id": "d1",
      "name": "Designing data processing systems and storage architectures",
      "weight": 35
    },
    {
      "id": "d2",
      "name": "Ingesting and processing batch and streaming data (Dataflow, BigQuery, Pub/Sub)",
      "weight": 35
    },
    {
      "id": "d3",
      "name": "Securing, monitoring, and scaling data solutions",
      "weight": 30
    }
  ]
};
