/**
 * FinOps Certified FOCUS Analyst (FOCUS) — exam blueprint.
 */
export default {
  "id": "finops-focus",
  "provider": "FinOps Foundation",
  "code": "FOCUS",
  "title": "FinOps Certified FOCUS Analyst",
  "category": "FinOps",
  "tier": "foundational",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-finops",
  "icon": "finops",
  "color": "#10b981",
  "description": "Validates deep practical expertise in the FinOps Open Cost & Usage Specification (FOCUS) standard schema, cross-cloud data normalization, and billing analytics.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 60,
  "blueprintSource": "https://www.finops.org/certification/focus-analyst/",
  "blueprintVerified": false,
  "domains": [
    {
      "id": "d1",
      "name": "FOCUS Specification Fundamentals and Column Taxonomy",
      "weight": 35
    },
    {
      "id": "d2",
      "name": "Multi-Cloud Billing Data Normalization and Ingestion",
      "weight": 35
    },
    {
      "id": "d3",
      "name": "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
      "weight": 30
    }
  ]
};
