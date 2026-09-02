/**
 * HashiCorp Certified: Vault Associate (VAULT-003) — exam blueprint.
 */
export default {
  "id": "hashicorp-vault",
  "provider": "HashiCorp",
  "code": "VAULT-003",
  "title": "HashiCorp Certified: Vault Associate",
  "category": "DevSecOps & Security",
  "tier": "associate",
  "status": "planned",
  "priority": null,
  "badgeClass": "badge-hashicorp",
  "icon": "hashicorp",
  "color": "#000000",
  "description": "Validates foundational knowledge of HashiCorp Vault architecture, secret engines, authentication methods, tokens, leases, and encryption as a service.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 60,
  "blueprintSource": "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
  "blueprintVerified": false,
  "domains": [
    {
      "id": "d1",
      "name": "Compare authentication methods and manage Vault policies",
      "weight": 35
    },
    {
      "id": "d2",
      "name": "Configure Vault secrets engines and transit encryption",
      "weight": 35
    },
    {
      "id": "d3",
      "name": "Manage Vault tokens, leases, and operational architecture",
      "weight": 30
    }
  ]
};
