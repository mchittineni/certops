/**
 * AWS Certified Machine Learning Engineer – Associate (MLA-C01) — exam blueprint.
 */
export default {
  "id": "aws-mla",
  "provider": "AWS",
  "code": "MLA-C01",
  "title": "AWS Certified Machine Learning Engineer – Associate",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-aws",
  "icon": "aws",
  "color": "#ff9900",
  "description": "Validates technical expertise in building, deploying, monitoring, and scaling machine learning pipelines and models using Amazon SageMaker and AWS ML services.",
  "passingScore": 720,
  "maxScore": 1000,
  "defaultTimeMinutes": 130,
  "blueprintSource": "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
  "blueprintVerified": false,
  "domains": [
    {
      "id": "d1",
      "name": "Data Preparation and Feature Engineering for ML",
      "weight": 28
    },
    {
      "id": "d2",
      "name": "Model Training and Evaluation on SageMaker",
      "weight": 26
    },
    {
      "id": "d3",
      "name": "Model Deployment, Serving, and Orchestration",
      "weight": 26
    },
    {
      "id": "d4",
      "name": "MLOps, Monitoring, and Governance",
      "weight": 20
    }
  ]
};
