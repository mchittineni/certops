/**
 * Kubernetes and Cloud Native Security Associate (KCSA) — exam blueprint.
 *
 * Domains and weights from the Linux Foundation exam page, verified 2026-09-23.
 */
export default {
  "id": "cncf-kcsa",
  "provider": "Cloud Native (CNCF)",
  "code": "KCSA",
  "title": "Kubernetes and Cloud Native Security Associate",
  "category": "DevSecOps & Security",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-k8s",
  "icon": "kubernetes",
  "color": "#326CE5",
  "description": "Validates foundational Kubernetes security knowledge: cloud native security, cluster component security, security fundamentals, the Kubernetes threat model, platform security, and compliance frameworks.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 90,
  "blueprintSource": "https://training.linuxfoundation.org/certification/kubernetes-and-cloud-native-security-associate-kcsa/",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Overview of Cloud Native Security", "weight": 14 },
    { "id": "d2", "name": "Kubernetes Cluster Component Security", "weight": 22 },
    { "id": "d3", "name": "Kubernetes Security Fundamentals", "weight": 22 },
    { "id": "d4", "name": "Kubernetes Threat Model", "weight": 16 },
    { "id": "d5", "name": "Platform Security", "weight": 16 },
    { "id": "d6", "name": "Compliance and Security Frameworks", "weight": 10 }
  ]
};
