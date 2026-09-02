/**
 * Certified Kubernetes Network Engineer (CKNE) — exam blueprint.
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
  "description": "Demonstrates advanced competency in Kubernetes networking, CNI plugins, Service Mesh routing, Ingress, NetworkPolicies, and DNS troubleshooting.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://www.cncf.io/certification/ckne/",
  "blueprintVerified": false,
  "domains": [
    {
      "id": "d1",
      "name": "Kubernetes Pod & Service Networking and CNI Architecture",
      "weight": 35
    },
    {
      "id": "d2",
      "name": "Ingress Controllers, Gateway API, and Service Mesh",
      "weight": 35
    },
    {
      "id": "d3",
      "name": "NetworkPolicy Enforcement, Multi-cluster, and Packet Diagnostics",
      "weight": 30
    }
  ]
};
