/**
 * AWS Certified AI Business Strategist (AIB-C01) — exam blueprint.
 *
 * AWS files this under a new "Business" category; the closest category here is
 * Cloud Engineering. Domains and weights from the exam guide, verified 2026-09-23. The exam
 * is in beta: 170 minutes, 85 questions, passing score 700 of 1000.
 */
export default {
  "id": "aws-aib",
  "provider": "AWS",
  "code": "AIB-C01",
  "title": "AWS Certified AI Business Strategist",
  "category": "Cloud Engineering",
  "tier": "foundational",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-aws",
  "icon": "aws",
  "color": "#ff9900",
  "description": "Validates the business judgment to take AI from adoption to scale: AI literacy, strategy and business value, governance and responsible AI leadership, and organisational readiness.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 170,
  "blueprintSource": "https://docs.aws.amazon.com/aws-certification/latest/ai-business-strategist-01.html",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "AI Fundamentals and Literacy", "weight": 24 },
    { "id": "d2", "name": "AI Strategy and Business Value Creation", "weight": 28 },
    { "id": "d3", "name": "AI Governance and Responsible AI Leadership", "weight": 24 },
    { "id": "d4", "name": "Business Readiness, Leadership, and AI Transformation", "weight": 24 }
  ]
};
