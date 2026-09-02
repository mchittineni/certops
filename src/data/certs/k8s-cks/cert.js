/**
 * Certified Kubernetes Security Specialist (CKS) — exam blueprint.
 */
export default {
  "id": "k8s-cks",
  "provider": "Cloud Native (CNCF)",
  "code": "CKS",
  "title": "Certified Kubernetes Security Specialist",
  "category": "DevSecOps & Security",
  "tier": "professional",
  "status": "live",
  "priority": 3,
  "badgeClass": "badge-k8s",
  "icon": "kubernetes",
  "color": "#326CE5",
  "description": "Demonstrates deep competence in securing container-based applications and Kubernetes platforms during build, deployment, and runtime.",
  "passingScore": 67,
  "maxScore": 100,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://www.cncf.io/certification/cks/",
  "blueprintVerified": true,
  "domains": [
    {
      "id": "d1",
      "name": "Cluster Setup and Hardening",
      "weight": 15
    },
    {
      "id": "d2",
      "name": "System Hardening and Kernel Security",
      "weight": 15
    },
    {
      "id": "d3",
      "name": "Minimize Microservice Vulnerabilities",
      "weight": 20
    },
    {
      "id": "d4",
      "name": "Supply Chain Security and Static Analysis",
      "weight": 20
    },
    {
      "id": "d5",
      "name": "Monitoring, Logging and Runtime Security",
      "weight": 20
    },
    {
      "id": "d6",
      "name": "Cluster Threat Defense and Admission Control",
      "weight": 10
    }
  ]
};
