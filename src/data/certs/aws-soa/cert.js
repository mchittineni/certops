/**
 * AWS Certified CloudOps Engineer - Associate (SOA-C03) — exam blueprint.
 *
 * SOA-C03 replaced SysOps Administrator - Associate (SOA-C02); the new title
 * applies to those who pass SOA-C03. Domains and weights from the exam guide, verified 2026-09-23.
 * 130 minutes, 65 questions, passing score 720 of 1000.
 */
export default {
  "id": "aws-soa",
  "provider": "AWS",
  "code": "SOA-C03",
  "title": "AWS Certified CloudOps Engineer - Associate",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-aws",
  "icon": "aws",
  "color": "#ff9900",
  "description": "Validates deploying, managing, and operating workloads on AWS: monitoring and performance optimization, reliability, automation, security and compliance, and networking.",
  "passingScore": 720,
  "maxScore": 1000,
  "defaultTimeMinutes": 130,
  "blueprintSource": "https://docs.aws.amazon.com/aws-certification/latest/sysops-administrator-associate-03.html",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Monitoring, Logging, Analysis, Remediation, and Performance Optimization", "weight": 22 },
    { "id": "d2", "name": "Reliability and Business Continuity", "weight": 22 },
    { "id": "d3", "name": "Deployment, Provisioning, and Automation", "weight": 22 },
    { "id": "d4", "name": "Security and Compliance", "weight": 16 },
    { "id": "d5", "name": "Networking and Content Delivery", "weight": 18 }
  ]
};
