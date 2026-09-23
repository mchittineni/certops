/**
 * Certified Cloud Native Platform Engineering Associate (CNPA) — exam blueprint.
 *
 * Domains and weights from the Linux Foundation exam page, verified 2026-09-23.
 * The earlier domains in this file were not the published ones; the bank was
 * reclassified onto these in the same change.
 */
export default {
  "id": "cncf-cnpa",
  "provider": "Cloud Native (CNCF)",
  "code": "CNPA",
  "title": "Certified Cloud Native Platform Engineering Associate",
  "category": "Platform Engineering",
  "tier": "associate",
  "status": "live",
  "priority": 7,
  "badgeClass": "badge-k8s",
  "icon": "cncf",
  "color": "#231F20",
  "description": "Validates foundational platform engineering knowledge: core fundamentals, platform observability, security and conformance, continuous delivery, platform APIs and provisioning, IDPs and developer experience, and measuring a platform.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://training.linuxfoundation.org/certification/certified-cloud-native-platform-engineering-associate-cnpa/",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Platform Engineering Core Fundamentals", "weight": 36 },
    { "id": "d2", "name": "Platform Observability, Security, and Conformance", "weight": 20 },
    { "id": "d3", "name": "Continuous Delivery & Platform Engineering", "weight": 16 },
    { "id": "d4", "name": "Platform APIs and Provisioning Infrastructure", "weight": 12 },
    { "id": "d5", "name": "IDPs and Developer Experience", "weight": 8 },
    { "id": "d6", "name": "Measuring your Platform", "weight": 8 }
  ]
};
