/**
 * Certified Cloud Native Platform Engineering Associate (CNPA) — exam blueprint.
 *
 * BLUEPRINT NOT VERIFIED. The published curriculum has six domains (Platform Engineering Core Fundamentals 36, Platform Observability Security and Conformance 20, Continuous Delivery & Platform Engineering 16, Platform APIs and Provisioning Infrastructure 12, IDPs and Developer Experience 8, Measuring your Platform 8); the four below were seeded, not taken from it.
 * Correcting the domains means re-authoring the bank, because every question
 * carries its domainName. See docs/EXAM-READINESS.md.
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
  "description": "Validates foundational knowledge of cloud native platform engineering principles, internal developer platforms (IDPs), and developer experience tooling.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 90,
  "blueprintSource": "https://www.cncf.io/certification/cnpa/",
  "blueprintVerified": false,
  "domains": [
    {
      "id": "d1",
      "name": "Cloud Native Architecture and Substrates",
      "weight": 25
    },
    {
      "id": "d2",
      "name": "Internal Developer Platforms and Portals",
      "weight": 30
    },
    {
      "id": "d3",
      "name": "Golden Paths and Workflows",
      "weight": 25
    },
    {
      "id": "d4",
      "name": "Platform Observability and Governance",
      "weight": 20
    }
  ]
};
