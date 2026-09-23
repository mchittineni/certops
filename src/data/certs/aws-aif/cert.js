/**
 * AWS Certified AI Practitioner (AIF-C01) — exam blueprint.
 *
 * Domains and weights from the official exam guide.
 */
export default {
  "id": "aws-aif",
  "provider": "AWS",
  "code": "AIF-C01",
  "title": "AWS Certified AI Practitioner",
  "category": "Cloud Engineering",
  "tier": "foundational",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-aws",
  "icon": "aws",
  "color": "#ff9900",
  "description": "Foundational understanding of AI and ML concepts, generative AI principles, applications of foundation models with Amazon Bedrock, responsible AI guidelines, and security governance.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 90,
  "blueprintSource": "https://d1.awsstatic.com/training-and-certification/docs-ai-practitioner/AWS-Certified-AI-Practitioner_Exam-Guide.pdf",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Fundamentals of AI and ML", "weight": 20 },
    { "id": "d2", "name": "Fundamentals of Generative AI", "weight": 24 },
    { "id": "d3", "name": "Applications of Foundation Models", "weight": 28 },
    { "id": "d4", "name": "Guidelines for Responsible AI", "weight": 14 },
    { "id": "d5", "name": "Security, Compliance, and Governance for AI Solutions", "weight": 14 }
  ]
};
