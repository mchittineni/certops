/**
 * AWS Certified Database – Specialty (DBS-C01) — exam blueprint.
 */
export default {
  "id": "aws-dbs",
  "provider": "AWS",
  "code": "DBS-C01",
  "title": "AWS Certified Database – Specialty",
  "category": "Cloud Engineering",
  "tier": "specialty",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-aws",
  "icon": "aws",
  "color": "#ff9900",
  "description": "Demonstrates expertise in the breadth of AWS database services, migration tools, workload sizing, disaster recovery, and encryption.",
  "passingScore": 750,
  "maxScore": 1000,
  "defaultTimeMinutes": 180,
  "blueprintSource": "https://aws.amazon.com/certification/certified-database-specialty/",
  "blueprintVerified": false,
  "domains": [
    {
      "id": "d1",
      "name": "Workload-Specific Database Design",
      "weight": 26
    },
    {
      "id": "d2",
      "name": "Deployment, Migration, and Fleet Management",
      "weight": 20
    },
    {
      "id": "d3",
      "name": "Management, Operations, and Backup & Restore",
      "weight": 18
    },
    {
      "id": "d4",
      "name": "Monitoring, Troubleshooting, and Optimization",
      "weight": 18
    },
    {
      "id": "d5",
      "name": "Database Security, Encryption, and Access Control",
      "weight": 18
    }
  ]
};
