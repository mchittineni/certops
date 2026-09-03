/**
 * Certified Kubernetes Application Developer (CKAD) — exam blueprint.
 */
export default {
  "id": "k8s-ckad",
  "provider": "Cloud Native (CNCF)",
  "code": "CKAD",
  "title": "Certified Kubernetes Application Developer",
  "category": "Kubernetes & Cloud Native",
  "tier": "professional",
  "status": "live",
  "priority": 21,
  "badgeClass": "badge-k8s",
  "icon": "kubernetes",
  "color": "#326CE5",
  "description": "Validates skills in designing, building, configuring, and exposing cloud-native applications for Kubernetes clusters.",
  "passingScore": 66,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://www.cncf.io/certification/ckad/",
  "blueprintVerified": true,
  "domains": [
    {
      "id": "d1",
      "name": "Application Design and Build",
      "weight": 20
    },
    {
      "id": "d2",
      "name": "Application Deployment",
      "weight": 20
    },
    {
      "id": "d3",
      "name": "Application Observability and Maintenance",
      "weight": 15
    },
    {
      "id": "d4",
      "name": "Application Environment, Configuration and Security",
      "weight": 25
    },
    {
      "id": "d5",
      "name": "Services and Networking",
      "weight": 20
    }
  ]
};
