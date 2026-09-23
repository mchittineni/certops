/**
 * HashiCorp Certified: Terraform Authoring and Operations Advanced — exam blueprint.
 *
 * HashiCorp renamed this exam from "Professional" to "Advanced". Objectives from
 * developer.hashicorp.com/certifications/infrastructure-automation, verified
 * 2026-09-23: lab-based plus multiple choice, 4 hours including a 15-minute
 * break, tests Terraform 1.6. The certId stays hashicorp-tfp so saved progress
 * keeps working. HashiCorp publishes no exam code; TF-ADV is this app's label.
 *
 * HashiCorp publishes neither domain weights nor a passing score. The weights
 * below split 100 in proportion to each domain's sub-objective count
 * (5/6/4/4/4/4 of 27); 70 is a conventional figure, not an official one.
 */
export default {
  "id": "hashicorp-tfp",
  "provider": "HashiCorp",
  "code": "TF-ADV",
  "title": "HashiCorp Certified: Terraform Authoring and Operations Advanced",
  "category": "DevOps & SRE",
  "tier": "professional",
  "status": "live",
  "priority": 4,
  "badgeClass": "badge-hashicorp",
  "icon": "terraform",
  "color": "#7B42BC",
  "description": "Validates production-level Terraform: managing resource lifecycle and state, dynamic configuration, collaborative workflows and automation, authoring and refactoring modules, configuring providers, and operating HCP Terraform.",
  "passingScore": 70,
  "maxScore": 100,
  "defaultTimeMinutes": 240,
  "blueprintSource": "https://developer.hashicorp.com/certifications/infrastructure-automation",
  "blueprintVerified": true,
  "domains": [
    { "id": "d1", "name": "Manage resource lifecycle", "weight": 18 },
    { "id": "d2", "name": "Develop and troubleshoot dynamic configuration", "weight": 22 },
    { "id": "d3", "name": "Develop collaborative Terraform workflows", "weight": 15 },
    { "id": "d4", "name": "Create, maintain, and use Terraform modules", "weight": 15 },
    { "id": "d5", "name": "Configure and use Terraform providers", "weight": 15 },
    { "id": "d6", "name": "Collaborate on infrastructure as code using HCP Terraform", "weight": 15 }
  ]
};
