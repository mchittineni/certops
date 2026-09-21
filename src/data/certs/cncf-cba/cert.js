/**
 * Certified Backstage Associate (CBA) — exam blueprint.
 *
 * BLUEPRINT NOT VERIFIED. The published curriculum has Backstage Development Workflow 24, Backstage Infrastructure 22, Backstage Catalog 22, Customizing Backstage 32; the four below were seeded, not taken from it.
 * Correcting the domains means re-authoring the bank, because every question
 * carries its domainName. See docs/EXAM-READINESS.md.
 */
export default {
  "id": "cncf-cba",
  "provider": "Cloud Native (CNCF)",
  "code": "CBA",
  "title": "Certified Backstage Associate",
  "category": "Platform Engineering",
  "tier": "associate",
  "status": "live",
  "priority": 14,
  "badgeClass": "badge-k8s",
  "icon": "cncf",
  "color": "#231F20",
  "description": "Validates understanding of Backstage architecture, software catalog schemas, software templates, plugin ecosystem, and internal developer portals.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 90,
  "blueprintSource": "https://www.cncf.io/certification/cba/",
  "blueprintVerified": false,
  "domains": [
    {
      "id": "d1",
      "name": "Backstage Architecture and Core Concepts",
      "weight": 30
    },
    {
      "id": "d2",
      "name": "Software Catalog and Metadata",
      "weight": 25
    },
    {
      "id": "d3",
      "name": "Software Templates and Scaffolder",
      "weight": 25
    },
    {
      "id": "d4",
      "name": "Plugins, TechDocs and Administration",
      "weight": 20
    }
  ]
};
