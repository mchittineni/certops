/**
 * AWS Certified Security - Specialty (SCS-C03) — exam blueprint.
 *
 * Domains and weights from the official SCS-C03 exam guide, verified 2026-09-23.
 * SCS-C03 replaced SCS-C02; Detection and Incident Response are now separate
 * domains and governance is framed as Security Foundations and Governance.
 * 170 minutes, 65 questions, passing score 750 of 1000.
 */
export default {
  "id": "aws-scs",
  "provider": "AWS",
  "code": "SCS-C03",
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
  "blueprintSource": "https://docs.aws.amazon.com/aws-certification/latest/security-specialty-03.html",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Detection", "weight": 16 },
    { "id": "d2", "name": "Incident Response", "weight": 14 },
    { "id": "d3", "name": "Infrastructure Security", "weight": 18 },
    { "id": "d4", "name": "Identity and Access Management", "weight": 20 },
    { "id": "d5", "name": "Data Protection", "weight": 18 },
    { "id": "d6", "name": "Security Foundations and Governance", "weight": 14 }
  ]
};
