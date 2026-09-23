/**
 * Microsoft Certified: DevOps Engineer Expert (AZ-400) — exam blueprint.
 *
 * Domains from the Microsoft Learn study guide (skills measured as of July 27, 2026), verified 2026-09-23.
 * Scored 700 of 1000. Build and release pipelines are half the exam.
 *
 * Microsoft publishes the weights as ranges (10-15/10-15/50-55/10-15/5-10); the midpoints below are normalised to sum to 100.
 */
export default {
  "id": "azure-az400",
  "provider": "Microsoft Azure",
  "code": "AZ-400",
  "title": "Microsoft Certified: DevOps Engineer Expert",
  "category": "DevOps & SRE",
  "tier": "professional",
  "status": "live",
  "priority": 6,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Demonstrates expertise in designing and implementing DevOps practices for version control, compliance, infrastructure as code, configuration management, and monitoring on Azure.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-400",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Design and implement processes and communications", "weight": 13 },
    { "id": "d2", "name": "Design and implement a source control strategy", "weight": 13 },
    { "id": "d3", "name": "Design and implement build and release pipelines", "weight": 54 },
    { "id": "d4", "name": "Develop a security and compliance plan", "weight": 13 },
    { "id": "d5", "name": "Implement an instrumentation strategy", "weight": 7 }
  ]
};
