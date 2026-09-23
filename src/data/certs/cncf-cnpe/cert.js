/**
 * Certified Cloud Native Platform Engineer (CNPE) — exam blueprint.
 *
 * Domains and weights from the Linux Foundation exam page, verified 2026-09-23.
 * Performance-based, 2 hours.
 * The earlier domains in this file were not the published ones; the bank was
 * reclassified onto these in the same change.
 */
export default {
  "id": "cncf-cnpe",
  "provider": "Cloud Native (CNCF)",
  "code": "CNPE",
  "title": "Certified Cloud Native Platform Engineer",
  "category": "Platform Engineering",
  "tier": "professional",
  "status": "live",
  "priority": 8,
  "badgeClass": "badge-k8s",
  "icon": "cncf",
  "color": "#231F20",
  "description": "Validates hands-on platform engineering: platform architecture and infrastructure, GitOps and continuous delivery, platform APIs and self-service, observability and operations, and security and policy enforcement.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://training.linuxfoundation.org/certification/certified-cloud-native-platform-engineer-cnpe/",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Platform Architecture and Infrastructure", "weight": 15 },
    { "id": "d2", "name": "GitOps and Continuous Delivery", "weight": 25 },
    { "id": "d3", "name": "Platform APIs and Self-Service Capabilities", "weight": 25 },
    { "id": "d4", "name": "Observability and Operations", "weight": 20 },
    { "id": "d5", "name": "Security and Policy Enforcement", "weight": 15 }
  ]
};
