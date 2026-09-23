/**
 * Certified Argo Project Associate (CAPA) — exam blueprint.
 *
 * Domains and weights from the Linux Foundation exam page, verified 2026-09-23.
 */
export default {
  "id": "cncf-capa",
  "provider": "Cloud Native (CNCF)",
  "code": "CAPA",
  "title": "Certified Argo Project Associate",
  "category": "Kubernetes & Cloud Native",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-k8s",
  "icon": "kubernetes",
  "color": "#326CE5",
  "description": "Validates knowledge of the Argo project: authoring and running Argo Workflows, GitOps delivery with Argo CD, progressive delivery with Argo Rollouts, and event-driven automation with Argo Events.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 90,
  "blueprintSource": "https://training.linuxfoundation.org/certification/certified-argo-project-associate-capa/",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Argo Workflows", "weight": 36 },
    { "id": "d2", "name": "Argo CD", "weight": 34 },
    { "id": "d3", "name": "Argo Rollouts", "weight": 18 },
    { "id": "d4", "name": "Argo Events", "weight": 12 }
  ]
};
