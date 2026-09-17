/**
 * AWS Certified Solutions Architect - Professional (SAP-C02) — exam blueprint.
 *
 * Everything about this certification lives in this folder: the blueprint here,
 * question packs in ./questions/, flashcard packs in ./flashcards/. Nothing
 * outside the folder needs editing — the content index is generated from it.
 *
 * blueprintVerified: flip to true only after checking domains and weights
 * against blueprintSource. `npm run validate` warns while it is false.
 */
export default {
  "id": "aws-sap",
  "provider": "AWS",
  "code": "SAP-C02",
  "title": "AWS Certified Solutions Architect - Professional",
  "category": "Cloud Engineering",
  "tier": "professional",
  "status": "live",
  "priority": null,
  "badgeClass": "badge-aws",
  "icon": "aws",
  "color": "#ff9900",
  "description": "Validates advanced skills in designing, migrating, and continuously improving complex multi-account, multi-region solutions on AWS.",
  "passingScore": 750,
  "maxScore": 1000,
  "defaultTimeMinutes": 180,
  "blueprintSource": "https://d1.awsstatic.com/training-and-certification/docs-sa-pro/AWS-Certified-Solutions-Architect-Professional_Exam-Guide.pdf",
  "blueprintVerified": true,
  "domains": [
    {
      "id": "d1",
      "name": "Design Solutions for Organizational Complexity",
      "weight": 26
    },
    {
      "id": "d2",
      "name": "Design for New Solutions",
      "weight": 29
    },
    {
      "id": "d3",
      "name": "Continuous Improvement for Existing Solutions",
      "weight": 25
    },
    {
      "id": "d4",
      "name": "Accelerate Workload Migration and Modernization",
      "weight": 20
    }
  ]
};
