/**
 * AWS Certified Advanced Networking - Specialty (ANS-C01) — exam blueprint.
 *
 * Domains and weights from the official exam guide, verified 2026-09-23.
 * 170 minutes, 65 questions; the guide gives the passing score as 700 of 1000.
 * AWS retires this exam on 2026-12-31, so it should not be authored further.
 */
export default {
  "id": "aws-ans",
  "provider": "AWS",
  "code": "ANS-C01",
  "title": "AWS Certified Advanced Networking - Specialty",
  "category": "Cloud Engineering",
  "tier": "specialty",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-aws",
  "icon": "aws",
  "color": "#ff9900",
  "description": "Validates designing, implementing, operating, and securing complex AWS and hybrid network architectures at scale.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 170,
  "blueprintSource": "https://docs.aws.amazon.com/aws-certification/latest/advanced-networking-specialty-01.html",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Network Design", "weight": 30 },
    { "id": "d2", "name": "Network Implementation", "weight": 26 },
    { "id": "d3", "name": "Network Management and Operation", "weight": 20 },
    { "id": "d4", "name": "Network Security, Compliance, and Governance", "weight": 24 }
  ]
};
