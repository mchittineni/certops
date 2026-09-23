/**
 * AWS Certified Machine Learning Engineer – Associate (MLA-C02) — exam blueprint.
 *
 * Domains and weights from the official MLA-C02 exam guide, verified 2026-09-23. MLA-C02
 * replaces MLA-C01, whose last English sitting is 2026-09-28; each C01 domain maps
 * one-to-one onto its C02 successor, which adds foundation-model and generative AI
 * content. MLA-C02 is in beta: 170 minutes, 85 questions, passing score 720.
 */
export default {
  "id": "aws-mla",
  "provider": "AWS",
  "code": "MLA-C02",
  "title": "AWS Certified Machine Learning Engineer – Associate",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "live",
  "priority": 19,
  "badgeClass": "badge-aws",
  "icon": "aws",
  "color": "#ff9900",
  "description": "Validates building, deploying, operating, and securing ML and generative AI solutions on AWS: data preparation, ML and foundation model development, workflow orchestration, and monitoring.",
  "passingScore": 720,
  "maxScore": 1000,
  "defaultTimeMinutes": 170,
  "blueprintSource": "https://docs.aws.amazon.com/aws-certification/latest/machine-learning-engineer-associate-02.html",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Data Preparation for ML and AI", "weight": 28 },
    { "id": "d2", "name": "ML Model and Foundation Model (FM) Development", "weight": 24 },
    { "id": "d3", "name": "Deployment and Orchestration of ML and AI Workflows", "weight": 24 },
    { "id": "d4", "name": "Operating, Monitoring, and Securing ML and AI Solutions", "weight": 24 }
  ]
};
