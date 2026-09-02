/**
 * Certified Cloud Security Professional (CCSP) — exam blueprint.
 */
export default {
  "id": "isc2-ccsp",
  "provider": "ISC2",
  "code": "CCSP",
  "title": "Certified Cloud Security Professional",
  "category": "DevSecOps & Security",
  "tier": "professional",
  "status": "live",
  "priority": 12,
  "badgeClass": "badge-vendor-neutral",
  "icon": "isc2",
  "color": "#468145",
  "description": "Demonstrates the highest standard of cloud security knowledge, architecture, data governance, and regulatory compliance across global multi-cloud ecosystems.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 180,
  "blueprintSource": "https://www.isc2.org/certifications/ccsp",
  "blueprintVerified": true,
  "domains": [
    {
      "id": "d1",
      "name": "Cloud Concepts, Architecture and Design",
      "weight": 17
    },
    {
      "id": "d2",
      "name": "Cloud Data Security",
      "weight": 20
    },
    {
      "id": "d3",
      "name": "Cloud Platform and Infrastructure Security",
      "weight": 17
    },
    {
      "id": "d4",
      "name": "Cloud Application Security",
      "weight": 17
    },
    {
      "id": "d5",
      "name": "Cloud Security Operations",
      "weight": 16
    },
    {
      "id": "d6",
      "name": "Legal, Risk and Compliance",
      "weight": 13
    }
  ]
};
