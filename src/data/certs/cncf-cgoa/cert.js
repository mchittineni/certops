/**
 * Certified GitOps Associate (CGOA) — exam blueprint.
 *
 * Domains and weights from the Linux Foundation exam page, verified 2026-09-23.
 * The earlier domains in this file were not the published ones; the bank was
 * reclassified onto these in the same change.
 */
export default {
  "id": "cncf-cgoa",
  "provider": "Cloud Native (CNCF)",
  "code": "CGOA",
  "title": "Certified GitOps Associate",
  "category": "Kubernetes & Cloud Native",
  "tier": "associate",
  "status": "live",
  "priority": 9,
  "badgeClass": "badge-k8s",
  "icon": "cncf",
  "color": "#231F20",
  "description": "Validates foundational GitOps knowledge: terminology, the OpenGitOps principles, related practices, GitOps patterns, and tooling.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 90,
  "blueprintSource": "https://training.linuxfoundation.org/certification/certified-gitops-associate-cgoa/",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "GitOps Terminology", "weight": 20 },
    { "id": "d2", "name": "GitOps Principles", "weight": 30 },
    { "id": "d3", "name": "Related Practices", "weight": 16 },
    { "id": "d4", "name": "GitOps Patterns", "weight": 20 },
    { "id": "d5", "name": "Tooling", "weight": 14 }
  ]
};
