/**
 * Google Cloud Professional Cloud DevOps Engineer (GCP-PCDE) — exam blueprint.
 */
export default {
  "id": "gcp-pcdoe",
  "provider": "Google Cloud",
  "code": "GCP-PCDE",
  "title": "Google Cloud Professional Cloud DevOps Engineer",
  "category": "DevOps & SRE",
  "tier": "professional",
  "status": "live",
  "priority": 5,
  "badgeClass": "badge-gcp",
  "icon": "googlecloud",
  "color": "#4285F4",
  "description": "Validates ability to foster SRE culture, build reliable continuous delivery pipelines, and ensure high availability across Google Cloud environments.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://cloud.google.com/learn/certification/cloud-devops-engineer",
  "blueprintVerified": true,
  "domains": [
    {
      "id": "d1",
      "name": "Applying site reliability engineering principles to a service",
      "weight": 22
    },
    {
      "id": "d2",
      "name": "Building and implementing CI/CD pipelines for a service",
      "weight": 25
    },
    {
      "id": "d3",
      "name": "Implementing service monitoring and alerting strategies",
      "weight": 23
    },
    {
      "id": "d4",
      "name": "Managing service incidents and postmortems",
      "weight": 15
    },
    {
      "id": "d5",
      "name": "Ensuring continuous security and compliance",
      "weight": 15
    }
  ]
};
