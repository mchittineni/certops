/**
 * AWS Certified Cloud Practitioner (CLF-C02) — exam blueprint.
 *
 * Domains and weights from the official exam guide, verified 2026-09-23.
 * 90 minutes, 65 questions, passing score 700 of 1000.
 */
export default {
  "id": "aws-clf",
  "provider": "AWS",
  "code": "CLF-C02",
  "title": "AWS Certified Cloud Practitioner",
  "category": "Cloud Engineering",
  "tier": "foundational",
  "status": "live",
  "priority": null,
  "badgeClass": "badge-aws",
  "icon": "aws",
  "color": "#ff9900",
  "description": "Foundational understanding of AWS Cloud concepts, security, compliance, technology, billing, and pricing models.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 90,
  "blueprintSource": "https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02.html",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Cloud Concepts", "weight": 24 },
    { "id": "d2", "name": "Security and Compliance", "weight": 30 },
    { "id": "d3", "name": "Cloud Technology and Services", "weight": 34 },
    { "id": "d4", "name": "Billing, Pricing, and Support", "weight": 12 }
  ]
};
