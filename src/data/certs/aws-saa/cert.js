/**
 * AWS Certified Solutions Architect - Associate (SAA-C03) — exam blueprint.
 *
 * Domains and weights from the official exam guide, verified 2026-09-23. The guide orders
 * them Secure 30 / Resilient 26 / High-Performing 24 / Cost-Optimized 20; the ids
 * below keep this bank's original order. 130 minutes, 65 questions, passing
 * score 720 of 1000.
 */
export default {
  "id": "aws-saa",
  "provider": "AWS",
  "code": "SAA-C03",
  "title": "AWS Certified Solutions Architect - Associate",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "live",
  "priority": null,
  "badgeClass": "badge-aws",
  "icon": "aws",
  "color": "#ff9900",
  "description": "Validates knowledge of designing resilient, high-performing, secure, and cost-optimized architectures on Amazon Web Services.",
  "passingScore": 720,
  "maxScore": 1000,
  "defaultTimeMinutes": 130,
  "blueprintSource": "https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03.html",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Design Resilient Architectures", "weight": 26 },
    { "id": "d2", "name": "Design High-Performing Architectures", "weight": 24 },
    { "id": "d3", "name": "Design Secure Architectures", "weight": 30 },
    { "id": "d4", "name": "Design Cost-Optimized Architectures", "weight": 20 }
  ]
};
