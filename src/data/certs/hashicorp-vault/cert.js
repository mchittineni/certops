/**
 * HashiCorp Certified: Vault Associate (003) — exam blueprint.
 *
 * Objectives from developer.hashicorp.com/certifications/security-automation,
 * verified 2026-09-23: one hour, multiple choice, tests Vault 1.19. The earlier
 * three-domain split in this file was not HashiCorp's; the nine domains below
 * are the published objectives.
 *
 * HashiCorp publishes neither domain weights nor a passing score. The weights
 * below split 100 in proportion to each domain's sub-objective count
 * (6/5/6/3/8/2/3/5/2 of 40); 70 is the conventional figure, not an official one.
 */
export default {
  "id": "hashicorp-vault",
  "provider": "HashiCorp",
  "code": "VAULT-003",
  "title": "HashiCorp Certified: Vault Associate (003)",
  "category": "DevSecOps & Security",
  "tier": "associate",
  "status": "live",
  "priority": 16,
  "badgeClass": "badge-hashicorp",
  "icon": "hashicorp",
  "color": "#000000",
  "description": "Validates foundational Vault 1.19 skills: authentication methods, policies, tokens, leases, secrets engines, encryption as a service, and Vault's core, deployment, and access management architecture.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 60,
  "blueprintSource": "https://developer.hashicorp.com/certifications/security-automation",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Authentication methods", "weight": 15 },
    { "id": "d2", "name": "Vault policies", "weight": 13 },
    { "id": "d3", "name": "Vault tokens", "weight": 15 },
    { "id": "d4", "name": "Vault leases", "weight": 7 },
    { "id": "d5", "name": "Secrets engines", "weight": 20 },
    { "id": "d6", "name": "Encryption as a service", "weight": 5 },
    { "id": "d7", "name": "Vault architecture fundamentals", "weight": 7 },
    { "id": "d8", "name": "Vault deployment architecture", "weight": 13 },
    { "id": "d9", "name": "Access management architecture", "weight": 5 }
  ]
};
