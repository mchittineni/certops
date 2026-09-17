/**
 * AWS Certified SysOps Administrator - Associate (SOA-C02) — exam blueprint.
 *
 * Everything about this certification lives in this folder: the blueprint here,
 * question packs in ./questions/, flashcard packs in ./flashcards/. Nothing
 * outside the folder needs editing — the content index is generated from it.
 *
 * blueprintVerified: flip to true only after checking domains and weights
 * against blueprintSource. `npm run validate` warns while it is false.
 */
export default {
  "id": "aws-soa",
  "provider": "AWS",
  "code": "SOA-C02",
  "title": "AWS Certified SysOps Administrator - Associate",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-aws",
  "icon": "aws",
  "color": "#ff9900",
  "description": "Validates skills in deploying, managing, and operating workloads on AWS, including monitoring, reliability, automation, and incident remediation.",
  "passingScore": 720,
  "maxScore": 1000,
  "defaultTimeMinutes": 130,
  "blueprintSource": "https://d1.awsstatic.com/training-and-certification/docs-sysops/AWS-Certified-SysOps-Administrator-Associate_Exam-Guide.pdf",
  "blueprintVerified": true,
  "domains": [
    {
      "id": "d1",
      "name": "Monitoring, Logging, and Remediation",
      "weight": 20
    },
    {
      "id": "d2",
      "name": "Reliability and Business Continuity",
      "weight": 16
    },
    {
      "id": "d3",
      "name": "Deployment, Provisioning, and Automation",
      "weight": 18
    },
    {
      "id": "d4",
      "name": "Security and Compliance",
      "weight": 16
    },
    {
      "id": "d5",
      "name": "Networking and Content Delivery",
      "weight": 18
    },
    {
      "id": "d6",
      "name": "Cost and Performance Optimization",
      "weight": 12
    }
  ]
};
