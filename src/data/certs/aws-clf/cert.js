/**
 * AWS Certified Cloud Practitioner (CLF-C02) — exam blueprint.
 *
 * Everything about this certification lives in this folder: the blueprint here,
 * question packs in ./questions/, flashcard packs in ./flashcards/. Nothing
 * outside the folder needs editing — the content index is generated from it.
 *
 * blueprintVerified: flip to true only after checking domains and weights
 * against blueprintSource. `npm run validate` warns while it is false.
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
  "defaultTimeMinutes": 45,
  "blueprintSource": "https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf",
  "blueprintVerified": true,
  "domains": [
    {
      "id": "d1",
      "name": "Cloud Concepts",
      "weight": 24
    },
    {
      "id": "d2",
      "name": "Security and Compliance",
      "weight": 30
    },
    {
      "id": "d3",
      "name": "Cloud Technology and Services",
      "weight": 34
    },
    {
      "id": "d4",
      "name": "Billing, Pricing, and Support",
      "weight": 12
    }
  ]
};
