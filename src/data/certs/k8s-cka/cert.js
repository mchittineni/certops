/**
 * Certified Kubernetes Administrator (CKA) — exam blueprint.
 *
 * Everything about this certification lives in this folder: the blueprint here,
 * question packs in ./questions/, flashcard packs in ./flashcards/. Nothing
 * outside the folder needs editing — the content index is generated from it.
 *
 * blueprintVerified: flip to true only after checking domains and weights
 * against blueprintSource. `npm run validate` warns while it is false.
 */
export default {
  "id": "k8s-cka",
  "provider": "Cloud Native (CNCF)",
  "code": "CKA",
  "title": "Certified Kubernetes Administrator",
  "category": "Kubernetes & Cloud Native",
  "tier": "professional",
  "status": "live",
  "priority": 2,
  "badgeClass": "badge-k8s",
  "icon": "kubernetes",
  "color": "#326CE5",
  "description": "Demonstrates competence in Kubernetes architecture, installation, configuration, networking, storage, and cluster maintenance.",
  "passingScore": 66,
  "maxScore": 100,
  "defaultTimeMinutes": 60,
  "blueprintSource": "https://www.cncf.io/certifications/cka/",
  "blueprintVerified": true,
  "domains": [
    {
      "id": "d1",
      "name": "Storage",
      "weight": 10
    },
    {
      "id": "d2",
      "name": "Troubleshooting",
      "weight": 30
    },
    {
      "id": "d3",
      "name": "Workloads & Scheduling",
      "weight": 15
    },
    {
      "id": "d4",
      "name": "Cluster Architecture, Installation & Config",
      "weight": 25
    },
    {
      "id": "d5",
      "name": "Services & Networking",
      "weight": 20
    }
  ]
};
