/**
 * Certified Kubernetes Network Engineer (CKNE) — exam blueprint.
 *
 * Domains and weights from the Linux Foundation exam page, verified 2026-09-23.
 * New Linux Foundation exam, in beta as of September 2026; performance-based, 2 hours.
 */
export default {
  "id": "cncf-ckne",
  "provider": "Cloud Native (CNCF)",
  "code": "CKNE",
  "title": "Certified Kubernetes Network Engineer",
  "category": "Kubernetes & Cloud Native",
  "tier": "professional",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-k8s",
  "icon": "kubernetes",
  "color": "#326CE5",
  "description": "Validates hands-on Kubernetes networking: core infrastructure and CNI, service networking and DNS, advanced traffic management, network security and policy, and network observability.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://training.linuxfoundation.org/certification/certified-kubernetes-network-engineer-ckne/",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Core Infrastructure and CNI", "weight": 15 },
    { "id": "d2", "name": "Service Networking and DNS", "weight": 25 },
    { "id": "d3", "name": "Advanced Traffic Management", "weight": 20 },
    { "id": "d4", "name": "Network Security and Policy", "weight": 25 },
    { "id": "d5", "name": "Observability", "weight": 15 }
  ]
};
