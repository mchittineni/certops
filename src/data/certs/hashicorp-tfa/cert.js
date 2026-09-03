/**
 * HashiCorp Certified: Terraform Associate (TA-003) — exam blueprint.
 */
export default {
  "id": "hashicorp-tfa",
  "provider": "HashiCorp",
  "code": "TA-003",
  "title": "HashiCorp Certified: Terraform Associate",
  "category": "DevOps & SRE",
  "tier": "associate",
  "status": "live",
  "priority": 22,
  "badgeClass": "badge-hashicorp",
  "icon": "terraform",
  "color": "#7B42BC",
  "description": "Validates foundational Infrastructure as Code concepts, Terraform architecture, state management, CLI workflows, modules, and Terraform Cloud.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 60,
  "blueprintSource": "https://www.hashicorp.com/certification/terraform-associate",
  "blueprintVerified": true,
  "domains": [
    {
      "id": "d1",
      "name": "Understand infrastructure as code (IaC) concepts",
      "weight": 10
    },
    {
      "id": "d2",
      "name": "Understand Terraform's purpose and basics",
      "weight": 15
    },
    {
      "id": "d3",
      "name": "Understand Terraform CLI",
      "weight": 20
    },
    {
      "id": "d4",
      "name": "Work with Terraform modules and workspaces",
      "weight": 15
    },
    {
      "id": "d5",
      "name": "Manage Terraform state",
      "weight": 20
    },
    {
      "id": "d6",
      "name": "Read, generate, and modify configuration",
      "weight": 20
    }
  ]
};
