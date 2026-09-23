/**
 * AWS Certified DevOps Engineer - Professional (DOP-C02) — exam blueprint.
 *
 * Domains and weights from the official exam guide, verified 2026-09-23.
 * 180 minutes, 75 questions, passing score 750 of 1000.
 */
export default {
  "id": "aws-dop",
  "provider": "AWS",
  "code": "DOP-C02",
  "title": "AWS Certified DevOps Engineer - Professional",
  "category": "DevOps & SRE",
  "tier": "professional",
  "status": "live",
  "priority": 1,
  "badgeClass": "badge-aws",
  "icon": "aws",
  "color": "#ff9900",
  "description": "Validates advanced technical skills in provisioning, operating, and managing distributed application systems and CI/CD automation on AWS.",
  "passingScore": 750,
  "maxScore": 1000,
  "defaultTimeMinutes": 180,
  "blueprintSource": "https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02.html",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "SDLC Automation", "weight": 22 },
    { "id": "d2", "name": "Configuration Management and IaC", "weight": 17 },
    { "id": "d3", "name": "Resilient Cloud Solutions", "weight": 15 },
    { "id": "d4", "name": "Monitoring and Logging", "weight": 15 },
    { "id": "d5", "name": "Incident and Event Response", "weight": 14 },
    { "id": "d6", "name": "Security and Compliance", "weight": 17 }
  ]
};
