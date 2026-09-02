/**
 * Certified Cloud Native Platform Engineering Associate (CNPA) — exam blueprint.
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
  "blueprintVerified": true,
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
