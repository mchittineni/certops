/**
 * Kyverno Certified Associate (KCA) — exam blueprint.
 *
 * Domains and weights from the Linux Foundation exam page, verified 2026-09-23.
 */
export default {
  "id": "cncf-kca",
  "provider": "Cloud Native (CNCF)",
  "code": "KCA",
  "title": "Kyverno Certified Associate",
  "category": "Platform Engineering",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-k8s",
  "icon": "kubernetes",
  "color": "#326CE5",
  "description": "Validates Kyverno skills: fundamentals, installation and upgrades, the Kyverno CLI, applying, writing and managing policies for Kubernetes.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 90,
  "blueprintSource": "https://training.linuxfoundation.org/certification/kyverno-certified-associate-kca/",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Fundamentals of Kyverno", "weight": 18 },
    { "id": "d2", "name": "Installation, Configuration, and Upgrades", "weight": 18 },
    { "id": "d3", "name": "Kyverno CLI", "weight": 12 },
    { "id": "d4", "name": "Applying Policies", "weight": 10 },
    { "id": "d5", "name": "Writing Policies", "weight": 32 },
    { "id": "d6", "name": "Policy Management", "weight": 10 }
  ]
};
