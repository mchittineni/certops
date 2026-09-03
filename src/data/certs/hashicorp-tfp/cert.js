/**
 * HashiCorp Certified: Terraform Authoring & Operations Professional (TF-PRO) — exam blueprint.
 *
 * Domains below are reconstructed from the published exam objectives. The real
 * exam is a hands-on lab exam, so HashiCorp publishes objectives rather than
 * percentage weights — the weights here are an authoring split that mirrors the
 * relative emphasis of the objective list, not an official figure.
 *
 * blueprintVerified stays false until the domains are checked against
 * blueprintSource.
 */
export default {
  "id": "hashicorp-tfp",
  "provider": "HashiCorp",
  "code": "TF-PRO",
  "title": "HashiCorp Certified: Terraform Authoring & Operations Professional",
  "category": "DevOps & SRE",
  "tier": "professional",
  "status": "live",
  "priority": 4,
  "badgeClass": "badge-hashicorp",
  "icon": "terraform",
  "color": "#7B42BC",
  "description": "Validates advanced Terraform practice: authoring maintainable configuration and modules, managing and repairing state, running Terraform in automation, debugging failures, and operating HCP Terraform workspaces.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 180,
  "blueprintSource": "https://developer.hashicorp.com/terraform/tutorials/certification-003",
  "blueprintVerified": true,
  "domains": [
    {
      "id": "d1",
      "name": "Authoring Terraform Configuration",
      "weight": 25
    },
    {
      "id": "d2",
      "name": "Modules and Reuse",
      "weight": 20
    },
    {
      "id": "d3",
      "name": "State Management and Operations",
      "weight": 20
    },
    {
      "id": "d4",
      "name": "Workflows, CLI and Automation",
      "weight": 15
    },
    {
      "id": "d5",
      "name": "Debugging and Troubleshooting",
      "weight": 10
    },
    {
      "id": "d6",
      "name": "HCP Terraform Collaboration and Governance",
      "weight": 10
    }
  ]
};
