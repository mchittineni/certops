/**
 * AWS Certified Data Engineer – Associate (DEA-C01) — exam blueprint.
 *
 * Domains and weights from the official exam guide.
 */
export default {
  "id": "aws-dea",
  "provider": "AWS",
  "code": "DEA-C01",
  "title": "AWS Certified Data Engineer – Associate",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-aws",
  "icon": "aws",
  "color": "#ff9900",
  "description": "Validates ability to ingest, transform, and orchestrate batch and real-time data pipelines, manage data stores with Redshift, Athena, and Glue, and maintain security and governance using Lake Formation.",
  "passingScore": 720,
  "maxScore": 1000,
  "defaultTimeMinutes": 130,
  "blueprintSource": "https://d1.awsstatic.com/training-and-certification/docs-data-engineer-associate/AWS-Certified-Data-Engineer-Associate_Exam-Guide.pdf",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Data Ingestion and Transformation", "weight": 34 },
    { "id": "d2", "name": "Data Store Management", "weight": 26 },
    { "id": "d3", "name": "Data Operations and Support", "weight": 22 },
    { "id": "d4", "name": "Data Security and Governance", "weight": 18 }
  ]
};
