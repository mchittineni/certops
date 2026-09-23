/**
 * Certified Kubernetes Security Specialist (CKS) — exam blueprint.
 *
 * Domains and weights from the Linux Foundation exam page, verified 2026-09-23.
 * Performance-based, 2 hours, Kubernetes v1.35; passing score 67% (LF FAQ).
 * The earlier domains in this file were not the published ones; the bank was
 * reclassified onto these in the same change.
 */
export default {
  "id": "k8s-cks",
  "provider": "Cloud Native (CNCF)",
  "code": "CKS",
  "title": "Certified Kubernetes Security Specialist",
  "category": "DevSecOps & Security",
  "tier": "professional",
  "status": "live",
  "priority": 3,
  "badgeClass": "badge-k8s",
  "icon": "kubernetes",
  "color": "#326CE5",
  "description": "Demonstrates deep competence in securing container-based applications and Kubernetes platforms during build, deployment, and runtime.",
  "passingScore": 67,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Cluster Setup", "weight": 15 },
    { "id": "d2", "name": "Cluster Hardening", "weight": 15 },
    { "id": "d3", "name": "System Hardening", "weight": 10 },
    { "id": "d4", "name": "Minimize Microservice Vulnerabilities", "weight": 20 },
    { "id": "d5", "name": "Supply Chain Security", "weight": 20 },
    { "id": "d6", "name": "Monitoring, Logging and Runtime Security", "weight": 20 }
  ]
};
