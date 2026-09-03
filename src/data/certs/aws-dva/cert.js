/**
 * AWS Certified Developer - Associate (DVA-C02) — exam blueprint.
 */
export default {
  "id": "aws-dva",
  "provider": "AWS",
  "code": "DVA-C02",
  "title": "AWS Certified Developer - Associate",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "live",
  "priority": 18,
  "badgeClass": "badge-aws",
  "icon": "aws",
  "color": "#ff9900",
  "description": "Validates technical expertise in developing, deploying, securing, and debugging cloud-based applications using AWS core services.",
  "passingScore": 720,
  "maxScore": 1000,
  "defaultTimeMinutes": 130,
  "blueprintSource": "https://d1.awsstatic.com/training-and-certification/docs-dev-associate/AWS-Certified-Developer-Associate_Exam-Guide.pdf",
  "blueprintVerified": true,
  "domains": [
    {
      "id": "d1",
      "name": "Development with AWS Services",
      "weight": 32
    },
    {
      "id": "d2",
      "name": "Security",
      "weight": 26
    },
    {
      "id": "d3",
      "name": "Deployment",
      "weight": 24
    },
    {
      "id": "d4",
      "name": "Troubleshooting and Optimization",
      "weight": 18
    }
  ]
};
