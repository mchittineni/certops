/**
 * Cilium Certified Associate (CCA) — exam blueprint.
 *
 * Domains and weights from the Linux Foundation exam page, verified 2026-09-23.
 */
export default {
  "id": "cncf-cca",
  "provider": "Cloud Native (CNCF)",
  "code": "CCA",
  "title": "Cilium Certified Associate",
  "category": "Platform Engineering",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-k8s",
  "icon": "kubernetes",
  "color": "#326CE5",
  "description": "Validates Cilium knowledge: its eBPF-based architecture, installation, network policy, service mesh, observability with Hubble, Cluster Mesh, and BGP and external networking.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 90,
  "blueprintSource": "https://training.linuxfoundation.org/certification/cilium-certified-associate-cca/",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Architecture", "weight": 20 },
    { "id": "d2", "name": "Network Policy", "weight": 18 },
    { "id": "d3", "name": "Service Mesh", "weight": 16 },
    { "id": "d4", "name": "Network Observability", "weight": 10 },
    { "id": "d5", "name": "Installation and Configuration", "weight": 10 },
    { "id": "d6", "name": "Cluster Mesh", "weight": 10 },
    { "id": "d7", "name": "eBPF", "weight": 10 },
    { "id": "d8", "name": "BGP and External Networking", "weight": 6 }
  ]
};
