/**
 * Certified Open Policy Agent Associate (COPAA) — exam blueprint.
 */
export default {
  "id": "cncf-opa",
  "provider": "Cloud Native (CNCF)",
  "code": "COPAA",
  "title": "Certified Open Policy Agent Associate",
  "category": "DevSecOps & Security",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-k8s",
  "icon": "cncf",
  "color": "#231F20",
  "description": "Validates understanding of policy-as-code principles with Open Policy Agent (OPA), Rego syntax, Gatekeeper admission control, and Styra DAS.",
  "passingScore": 75,
  "maxScore": 100,
  "defaultTimeMinutes": 90,
  "blueprintSource": "https://www.cncf.io/certification/copaa/",
  "blueprintVerified": false,
  "domains": [
    {
      "id": "d1",
      "name": "OPA Architecture, Rego Language Fundamentals, and Testing",
      "weight": 40
    },
    {
      "id": "d2",
      "name": "Kubernetes Admission Control with Gatekeeper",
      "weight": 35
    },
    {
      "id": "d3",
      "name": "CI/CD Policy Enforcement and Microservice Authorization",
      "weight": 25
    }
  ]
};
