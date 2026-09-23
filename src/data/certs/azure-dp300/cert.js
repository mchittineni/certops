/**
 * Microsoft Certified: Azure Database Administrator Associate (DP-300) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide (skills measured as of April 24, 2026), verified 2026-09-23.
 * 100 minutes, scored 700 of 1000.
 *
 * Microsoft publishes the weights as ranges (15-20/20-25/20-25/15-20/20-25); the midpoints below are normalised to sum to 100.
 */
export default {
  "id": "azure-dp300",
  "provider": "Microsoft Azure",
  "code": "DP-300",
  "title": "Microsoft Certified: Azure Database Administrator Associate",
  "category": "Cloud Engineering",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Validates administering Azure SQL: deploying data platform resources, security, performance monitoring and tuning, task automation, and high availability and disaster recovery.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 100,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-300",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Plan and implement data platform resources", "weight": 17 },
    { "id": "d2", "name": "Implement a secure environment", "weight": 22 },
    { "id": "d3", "name": "Monitor, configure, and optimize database resources", "weight": 22 },
    { "id": "d4", "name": "Configure and manage automation of tasks", "weight": 17 },
    { "id": "d5", "name": "Plan and configure a high availability and disaster recovery (HA/DR) environment", "weight": 22 }
  ]
};
