/**
 * Microsoft Certified: Azure Solutions Architect Expert (AZ-305) — exam blueprint.
 *
 * Domains and weights from the official study guide (skills measured as of
 * April 17, 2026). Microsoft publishes the weights as ranges; the midpoints
 * below sum to 100.
 */
export default {
  "id": "azure-az305",
  "provider": "Microsoft Azure",
  "code": "AZ-305",
  "title": "Microsoft Certified: Azure Solutions Architect Expert",
  "category": "Cloud Engineering",
  "tier": "professional",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-azure",
  "icon": "azure",
  "color": "#0078D4",
  "description": "Validates expert-level ability to design Azure identity, governance, monitoring, data storage, business continuity, and infrastructure solutions that translate business requirements into Well-Architected designs.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-305",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Design identity, governance, and monitoring solutions", "weight": 27 },
    { "id": "d2", "name": "Design data storage solutions", "weight": 22 },
    { "id": "d3", "name": "Design business continuity solutions", "weight": 18 },
    { "id": "d4", "name": "Design infrastructure solutions", "weight": 33 }
  ]
};
