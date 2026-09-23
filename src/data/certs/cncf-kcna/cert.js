/**
 * Kubernetes and Cloud Native Associate (KCNA) — exam blueprint.
 *
 * Domains and weights from the Linux Foundation exam page, verified 2026-09-23.
 */
export default {
  "id": "cncf-kcna",
  "provider": "Cloud Native (CNCF)",
  "code": "KCNA",
  "title": "Kubernetes and Cloud Native Associate",
  "category": "Kubernetes & Cloud Native",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-k8s",
  "icon": "kubernetes",
  "color": "#326CE5",
  "description": "Validates foundational Kubernetes and cloud native knowledge: Kubernetes fundamentals, container orchestration, cloud native application delivery, and cloud native architecture.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 90,
  "blueprintSource": "https://training.linuxfoundation.org/certification/kubernetes-cloud-native-associate/",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Kubernetes Fundamentals", "weight": 44 },
    { "id": "d2", "name": "Container Orchestration", "weight": 28 },
    { "id": "d3", "name": "Cloud Native Application Delivery", "weight": 16 },
    { "id": "d4", "name": "Cloud Native Architecture", "weight": 12 }
  ]
};
