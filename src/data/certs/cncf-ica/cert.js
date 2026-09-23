/**
 * Istio Certified Associate (ICA) — exam blueprint.
 *
 * Domains and weights from the Linux Foundation exam page, verified 2026-09-23.
 * Performance-based and multiple choice, 2 hours.
 */
export default {
  "id": "cncf-ica",
  "provider": "Cloud Native (CNCF)",
  "code": "ICA",
  "title": "Istio Certified Associate",
  "category": "Platform Engineering",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-k8s",
  "icon": "kubernetes",
  "color": "#326CE5",
  "description": "Validates Istio skills: installation, upgrade and configuration, traffic management, securing workloads with mTLS and authorization policy, and troubleshooting the mesh.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://training.linuxfoundation.org/certification/istio-certified-associate-ica/",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Installation, Upgrade & Configuration", "weight": 20 },
    { "id": "d2", "name": "Traffic Management", "weight": 35 },
    { "id": "d3", "name": "Securing Workloads", "weight": 25 },
    { "id": "d4", "name": "Troubleshooting", "weight": 20 }
  ]
};
