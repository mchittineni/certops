/**
 * AWS Certified Generative AI Developer - Professional (AIP-C01) — exam blueprint.
 *
 * Domains and weights from the official exam guide, verified 2026-09-23.
 * 180 minutes, 75 questions, passing score 750 of 1000.
 */
export default {
  "id": "aws-aip",
  "provider": "AWS",
  "code": "AIP-C01",
  "title": "AWS Certified Generative AI Developer - Professional",
  "category": "Cloud Engineering",
  "tier": "professional",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-aws",
  "icon": "aws",
  "color": "#ff9900",
  "description": "Validates building production generative AI applications on AWS: foundation model integration and data management, implementation, safety and governance, operational efficiency, and testing and troubleshooting.",
  "passingScore": 750,
  "maxScore": 1000,
  "defaultTimeMinutes": 180,
  "blueprintSource": "https://docs.aws.amazon.com/aws-certification/latest/ai-professional-01.html",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Foundation Model Integration, Data Management, and Compliance", "weight": 31 },
    { "id": "d2", "name": "Implementation and Integration", "weight": 26 },
    { "id": "d3", "name": "AI Safety, Security, and Governance", "weight": 20 },
    { "id": "d4", "name": "Operational Efficiency and Optimization for GenAI Applications", "weight": 12 },
    { "id": "d5", "name": "Testing, Validation, and Troubleshooting", "weight": 11 }
  ]
};
