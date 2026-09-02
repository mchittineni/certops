/**
 * AWS Certified Security - Specialty (SCS-C02) — exam blueprint.
 */
export default {
  "id": "aws-scs",
  "provider": "AWS",
  "code": "SCS-C02",
  "title": "AWS Certified Security - Specialty",
  "category": "DevSecOps & Security",
  "tier": "specialty",
  "status": "live",
  "priority": 11,
  "badgeClass": "badge-aws",
  "icon": "aws",
  "color": "#ff9900",
  "description": "Demonstrates deep knowledge of data protection mechanisms, IAM strategies, infrastructure security, and incident response across AWS workloads.",
  "passingScore": 750,
  "maxScore": 1000,
  "defaultTimeMinutes": 170,
  "blueprintSource": "https://aws.amazon.com/certification/certified-security-specialty/",
  "blueprintVerified": true,
  "domains": [
    {
      "id": "d1",
      "name": "Threat Detection and Incident Response",
      "weight": 14
    },
    {
      "id": "d2",
      "name": "Security Logging and Monitoring",
      "weight": 18
    },
    {
      "id": "d3",
      "name": "Infrastructure Security",
      "weight": 20
    },
    {
      "id": "d4",
      "name": "Identity and Access Management",
      "weight": 16
    },
    {
      "id": "d5",
      "name": "Data Protection",
      "weight": 18
    },
    {
      "id": "d6",
      "name": "Management and Security Governance",
      "weight": 14
    }
  ]
};
