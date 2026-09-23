/**
 * Linux Foundation Certified System Administrator (LFCS) — exam blueprint.
 *
 * Domains and weights from the official Linux Foundation competency domains.
 */
export default {
  "id": "linux-lfcs",
  "provider": "Linux Foundation",
  "code": "LFCS",
  "title": "Linux Foundation Certified System Administrator",
  "category": "DevOps & SRE",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-linux",
  "icon": "linuxfoundation",
  "color": "#003366",
  "description": "Validates core system administration competencies required to configure, operate, and troubleshoot Linux enterprise systems supporting container, Kubernetes, and cloud infrastructure.",
  "passingScore": 700,
  "maxScore": 1000,
  "defaultTimeMinutes": 120,
  "blueprintSource": "https://training.linuxfoundation.org/certification/linux-foundation-certified-sysadmin-lfcs/",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Essential Commands", "weight": 25 },
    { "id": "d2", "name": "Operation of Running Systems", "weight": 20 },
    { "id": "d3", "name": "User and Group Management", "weight": 10 },
    { "id": "d4", "name": "Networking", "weight": 15 },
    { "id": "d5", "name": "Service Configuration", "weight": 20 },
    { "id": "d6", "name": "Storage Management", "weight": 10 }
  ]
};
