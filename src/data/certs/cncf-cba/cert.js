/**
 * Certified Backstage Associate (CBA) — exam blueprint.
 *
 * Domains and weights from the Linux Foundation exam page, verified 2026-09-23.
 * The earlier domains in this file were not the published ones; the bank was
 * reclassified onto these in the same change.
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
  "description": "Validates Backstage skills: the development workflow, deploying and running Backstage infrastructure, modelling the software catalog, and customizing Backstage with plugins and templates.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 90,
  "blueprintSource": "https://training.linuxfoundation.org/certification/certified-backstage-associate-cba/",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Backstage Development Workflow", "weight": 24 },
    { "id": "d2", "name": "Backstage Infrastructure", "weight": 22 },
    { "id": "d3", "name": "Backstage Catalog", "weight": 22 },
    { "id": "d4", "name": "Customizing Backstage", "weight": 32 }
  ]
};
