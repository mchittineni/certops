/**
 * Certified Cloud Native Platform Engineer (CNPE) — exam blueprint.
 *
 * BLUEPRINT NOT VERIFIED. The published curriculum has Platform Architecture and Infrastructure 15, GitOps and Continuous Delivery 25, Platform APIs and Self-Service Capabilities 25, Observability and Operations 20, Security and Policy Enforcement 15, and the real exam is performance-based; the four below were seeded, not taken from it.
 * Correcting the domains means re-authoring the bank, because every question
 * carries its domainName. See docs/EXAM-READINESS.md.
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
  "description": "Demonstrates professional competence in designing, constructing, securing, and scaling advanced cloud native internal developer platforms.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://www.cncf.io/certification/cnpe/",
  "blueprintVerified": false,
  "domains": [
    {
      "id": "d1",
      "name": "Platform Architecture and API Design",
      "weight": 25
    },
    {
      "id": "d2",
      "name": "Self-Service Portals and Workload Automation",
      "weight": 30
    },
    {
      "id": "d3",
      "name": "Infrastructure Composition and Multi-Tenancy",
      "weight": 25
    },
    {
      "id": "d4",
      "name": "Reliability, Platform Security and Evolution",
      "weight": 20
    }
  ]
};
