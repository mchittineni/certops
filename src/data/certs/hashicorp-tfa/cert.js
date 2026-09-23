/**
 * HashiCorp Certified: Terraform Associate (004) — exam blueprint.
 *
 * Objectives from developer.hashicorp.com/certifications/infrastructure-automation
 * and the 004 exam content list, verified 2026-09-23. The 004 exam tests
 * Terraform 1.12 and replaced 003; it added depends_on and create_before_destroy
 * lifecycle rules (4f), custom conditions (4g), ephemeral values and write-only
 * arguments (4h), and HCP Terraform workspaces and projects (8c).
 *
 * HashiCorp publishes neither domain weights nor a passing score. The weights
 * below split 100 in proportion to each domain's sub-objective count
 * (3/4/7/8/4/4/3/4 of 37); 70 is the conventional passing figure, not an
 * official one.
 */
export default {
  "id": "hashicorp-tfa",
  "provider": "HashiCorp",
  "code": "TA-004",
  "title": "HashiCorp Certified: Terraform Associate (004)",
  "category": "DevOps & SRE",
  "tier": "associate",
  "status": "live",
  "priority": 22,
  "badgeClass": "badge-hashicorp",
  "icon": "terraform",
  "color": "#7B42BC",
  "description": "Validates foundational Terraform 1.12 skills: IaC concepts, providers, the core workflow, configuration and custom conditions, modules, state management, maintaining infrastructure, and HCP Terraform.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 60,
  "blueprintSource": "https://developer.hashicorp.com/terraform/tutorials/certification-004/associate-review-004",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Infrastructure as Code (IaC) with Terraform", "weight": 8 },
    { "id": "d2", "name": "Terraform fundamentals", "weight": 11 },
    { "id": "d3", "name": "Core Terraform workflow", "weight": 19 },
    { "id": "d4", "name": "Terraform configuration", "weight": 21 },
    { "id": "d5", "name": "Terraform modules", "weight": 11 },
    { "id": "d6", "name": "Terraform state management", "weight": 11 },
    { "id": "d7", "name": "Maintain infrastructure with Terraform", "weight": 8 },
    { "id": "d8", "name": "HCP Terraform", "weight": 11 }
  ]
};
