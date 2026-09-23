/**
 * HashiCorp Certified: Vault Operations Advanced — exam blueprint.
 *
 * Objectives from developer.hashicorp.com/certifications/security-automation,
 * verified 2026-09-23: lab-based plus multiple choice, 4 hours including a
 * 15-minute break, tests Vault 1.16. Many objectives are Vault Enterprise
 * features (DR and performance replication, HSM and seal wrap, performance
 * standbys, paths filters, Sentinel, control groups, namespaces). HashiCorp
 * publishes no exam code; VAULT-ADV is this app's label.
 *
 * HashiCorp publishes neither domain weights nor a passing score. The weights
 * below split 100 in proportion to each domain's sub-objective count
 * (8/3/2/3/2/4/5/2 of 29); 70 is a conventional figure, not an official one.
 */
export default {
  "id": "hashicorp-vault-ops",
  "provider": "HashiCorp",
  "code": "VAULT-ADV",
  "title": "HashiCorp Certified: Vault Operations Advanced",
  "category": "DevSecOps & Security",
  "tier": "professional",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-hashicorp",
  "icon": "hashicorp",
  "color": "#000000",
  "description": "Validates production-level Vault operations: building and hardening server configurations, monitoring, the security model, fault tolerance and replication, HSM integration, scaling, access control, and Vault Agent.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 240,
  "blueprintSource": "https://developer.hashicorp.com/certifications/security-automation",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Create a working Vault server configuration given a scenario", "weight": 28 },
    { "id": "d2", "name": "Monitor a Vault environment", "weight": 10 },
    { "id": "d3", "name": "Employ the Vault security model", "weight": 7 },
    { "id": "d4", "name": "Build fault-tolerant Vault environments", "weight": 10 },
    { "id": "d5", "name": "Understand the hardware security module (HSM) integration", "weight": 7 },
    { "id": "d6", "name": "Scale Vault for performance", "weight": 14 },
    { "id": "d7", "name": "Configure access control", "weight": 17 },
    { "id": "d8", "name": "Configure Vault Agent", "weight": 7 }
  ]
};
