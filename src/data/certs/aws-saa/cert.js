/**
 * AWS Certified Solutions Architect - Associate (SAA-C03) — exam blueprint.
 *
 * Everything about this certification lives in this folder: the blueprint here,
 * question packs in ./questions/, flashcard packs in ./flashcards/. Nothing
 * outside the folder needs editing — the content index is generated from it.
 *
 * blueprintVerified: flip to true only after checking domains and weights
 * against blueprintSource. `npm run validate` warns while it is false.
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
  "defaultTimeMinutes": 65,
  "blueprintSource": "https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf",
  "blueprintVerified": true,
  "domains": [
    {
      "id": "d1",
      "name": "Design Resilient Architectures",
      "weight": 26
    },
    {
      "id": "d2",
      "name": "Design High-Performing Architectures",
      "weight": 24
    },
    {
      "id": "d3",
      "name": "Design Secure Applications and Architectures",
      "weight": 30
    },
    {
      "id": "d4",
      "name": "Design Cost-Optimized Architectures",
      "weight": 20
    }
  ]
};
