/**
 * Certified Kubernetes Administrator (CKA) — exam blueprint.
 *
 * Domains and weights from the Linux Foundation exam page, verified 2026-09-23.
 * Performance-based, 2 hours, Kubernetes v1.35; passing score 66% (LF FAQ).
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
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Storage", "weight": 10 },
    { "id": "d2", "name": "Troubleshooting", "weight": 30 },
    { "id": "d3", "name": "Workloads & Scheduling", "weight": 15 },
    { "id": "d4", "name": "Cluster Architecture, Installation & Configuration", "weight": 25 },
    { "id": "d5", "name": "Services & Networking", "weight": 20 }
  ]
};
