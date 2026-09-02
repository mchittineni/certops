/**
 * GitOps Certified Associate (CGOA) — exam blueprint.
 */
export default {
  "id": "cncf-cgoa",
  "provider": "Cloud Native (CNCF)",
  "code": "CGOA",
  "title": "GitOps Certified Associate",
  "category": "Kubernetes & Cloud Native",
  "tier": "associate",
  "status": "live",
  "priority": 9,
  "badgeClass": "badge-k8s",
  "icon": "cncf",
  "color": "#231F20",
  "description": "Validates foundational understanding of GitOps principles, declarative application delivery, continuous reconciliation, and repository structures.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 90,
  "blueprintSource": "https://www.cncf.io/certification/cgoa/",
  "blueprintVerified": true,
  "domains": [
    {
      "id": "d1",
      "name": "GitOps Terminology and Principles",
      "weight": 20
    },
    {
      "id": "d2",
      "name": "GitOps Architecture and Repositories",
      "weight": 30
    },
    {
      "id": "d3",
      "name": "GitOps Tools and Workflows",
      "weight": 30
    },
    {
      "id": "d4",
      "name": "GitOps Security and Secret Management",
      "weight": 20
    }
  ]
};
