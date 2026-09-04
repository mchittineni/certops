export const HASHICORP_TFP_QUESTIONS_17 = [
  {
    id: "hashicorp-tfp-401",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Cross-Workspace State Sharing Patterns: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Cross-State Sharing to share network subnet IDs from a foundational networking workspace to an application compute workspace in HCP Terraform.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Comparing terraform_remote_state data source vs HCP Terraform run triggers and outputs is under consideration.",
    options: [
      { id: 'A', text: "Grant application developers root access to the networking state S3 bucket." },
      { id: 'B', text: "Deploy all applications directly inside the networking workspace." },
      { id: 'C', text: "Use HCP Terraform workspace outputs via `tfe_outputs` or `terraform_remote_state` with fine-grained workspace sharing permissions." },
      { id: 'D', text: "Hardcode subnet IDs in application variable files committed to Git." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use HCP Terraform workspace outputs via `tfe_outputs` or `terraform_remote_state` with fine-grained workspace sharing permissions. In HCP Terraform, workspaces can selectively share outputs with other workspaces within the organization. Using `tfe_outputs` or `terraform_remote_state` coupled with workspace sharing permissions maintains clean boundaries while enabling cross-layer architectural coordination.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/state#sharing-state",
    tags: ["Cross-State Sharing", "Workspace State Sharing", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-402",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Cross-Workspace State Sharing Patterns: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Cross-State Sharing to share network subnet IDs from a foundational networking workspace to an application compute workspace in HCP Terraform.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Comparing terraform_remote_state data source vs HCP Terraform run triggers and outputs is under consideration.",
    options: [
      { id: 'A', text: "Deploy all applications directly inside the networking workspace." },
      { id: 'B', text: "Use HCP Terraform workspace outputs via `tfe_outputs` or `terraform_remote_state` with fine-grained workspace sharing permissions." },
      { id: 'C', text: "Hardcode subnet IDs in application variable files committed to Git." },
      { id: 'D', text: "Grant application developers root access to the networking state S3 bucket." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use HCP Terraform workspace outputs via `tfe_outputs` or `terraform_remote_state` with fine-grained workspace sharing permissions. In HCP Terraform, workspaces can selectively share outputs with other workspaces within the organization. Using `tfe_outputs` or `terraform_remote_state` coupled with workspace sharing permissions maintains clean boundaries while enabling cross-layer architectural coordination.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/state#sharing-state",
    tags: ["Cross-State Sharing", "Workspace State Sharing", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-403",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Cross-Workspace State Sharing Patterns: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Cross-State Sharing to share network subnet IDs from a foundational networking workspace to an application compute workspace in HCP Terraform.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Comparing terraform_remote_state data source vs HCP Terraform run triggers and outputs is under consideration.",
    options: [
      { id: 'A', text: "Grant application developers root access to the networking state S3 bucket." },
      { id: 'B', text: "Deploy all applications directly inside the networking workspace." },
      { id: 'C', text: "Hardcode subnet IDs in application variable files committed to Git." },
      { id: 'D', text: "Use HCP Terraform workspace outputs via `tfe_outputs` or `terraform_remote_state` with fine-grained workspace sharing permissions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use HCP Terraform workspace outputs via `tfe_outputs` or `terraform_remote_state` with fine-grained workspace sharing permissions. In HCP Terraform, workspaces can selectively share outputs with other workspaces within the organization. Using `tfe_outputs` or `terraform_remote_state` coupled with workspace sharing permissions maintains clean boundaries while enabling cross-layer architectural coordination.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/state#sharing-state",
    tags: ["Cross-State Sharing", "Workspace State Sharing", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-404",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Cross-Workspace State Sharing Patterns: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Cross-State Sharing to share network subnet IDs from a foundational networking workspace to an application compute workspace in HCP Terraform.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Comparing terraform_remote_state data source vs HCP Terraform run triggers and outputs is under consideration.",
    options: [
      { id: 'A', text: "Hardcode subnet IDs in application variable files committed to Git." },
      { id: 'B', text: "Deploy all applications directly inside the networking workspace." },
      { id: 'C', text: "Use HCP Terraform workspace outputs via `tfe_outputs` or `terraform_remote_state` with fine-grained workspace sharing permissions." },
      { id: 'D', text: "Grant application developers root access to the networking state S3 bucket." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use HCP Terraform workspace outputs via `tfe_outputs` or `terraform_remote_state` with fine-grained workspace sharing permissions. In HCP Terraform, workspaces can selectively share outputs with other workspaces within the organization. Using `tfe_outputs` or `terraform_remote_state` coupled with workspace sharing permissions maintains clean boundaries while enabling cross-layer architectural coordination.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/state#sharing-state",
    tags: ["Cross-State Sharing", "Workspace State Sharing", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-405",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Cross-Workspace State Sharing Patterns: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Cross-State Sharing to share network subnet IDs from a foundational networking workspace to an application compute workspace in HCP Terraform.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Comparing terraform_remote_state data source vs HCP Terraform run triggers and outputs is under consideration.",
    options: [
      { id: 'A', text: "Grant application developers root access to the networking state S3 bucket." },
      { id: 'B', text: "Hardcode subnet IDs in application variable files committed to Git." },
      { id: 'C', text: "Use HCP Terraform workspace outputs via `tfe_outputs` or `terraform_remote_state` with fine-grained workspace sharing permissions." },
      { id: 'D', text: "Deploy all applications directly inside the networking workspace." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use HCP Terraform workspace outputs via `tfe_outputs` or `terraform_remote_state` with fine-grained workspace sharing permissions. In HCP Terraform, workspaces can selectively share outputs with other workspaces within the organization. Using `tfe_outputs` or `terraform_remote_state` coupled with workspace sharing permissions maintains clean boundaries while enabling cross-layer architectural coordination.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/state#sharing-state",
    tags: ["Cross-State Sharing", "Workspace State Sharing", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-406",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State Replace and Recreate Operations (-replace): Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates CLI Replace to force the destruction and recreation of a specific virtual machine instance that has become corrupted without modifying HCL code.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Forcing resource recreation without manual state editing using terraform apply -replace is under consideration.",
    options: [
      { id: 'A', text: "Delete the instance from state using `state rm`." },
      { id: 'B', text: "Execute `terraform apply -replace=\"aws_instance.web\"` to mark the resource for recreation in the execution plan." },
      { id: 'C', text: "Manually terminate the VM in the cloud console and let Terraform crash." },
      { id: 'D', text: "Run `terraform taint` which is deprecated in modern Terraform versions." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute `terraform apply -replace=\"aws_instance.web\"` to mark the resource for recreation in the execution plan. In modern Terraform (1.0+), the `-replace` flag on `plan` and `apply` replaces the legacy, deprecated `terraform taint` command. Passing `-replace=\"resource.address\"` instructs Terraform to mark the resource for destruction and recreation in the plan without mutating state beforehand.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#replace-resource-address",
    tags: ["CLI Replace", "terraform apply -replace", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-407",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State Replace and Recreate Operations (-replace): High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates CLI Replace to force the destruction and recreation of a specific virtual machine instance that has become corrupted without modifying HCL code.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Forcing resource recreation without manual state editing using terraform apply -replace is under consideration.",
    options: [
      { id: 'A', text: "Delete the instance from state using `state rm`." },
      { id: 'B', text: "Execute `terraform apply -replace=\"aws_instance.web\"` to mark the resource for recreation in the execution plan." },
      { id: 'C', text: "Manually terminate the VM in the cloud console and let Terraform crash." },
      { id: 'D', text: "Run `terraform taint` which is deprecated in modern Terraform versions." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute `terraform apply -replace=\"aws_instance.web\"` to mark the resource for recreation in the execution plan. In modern Terraform (1.0+), the `-replace` flag on `plan` and `apply` replaces the legacy, deprecated `terraform taint` command. Passing `-replace=\"resource.address\"` instructs Terraform to mark the resource for destruction and recreation in the plan without mutating state beforehand.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#replace-resource-address",
    tags: ["CLI Replace", "terraform apply -replace", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-408",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State Replace and Recreate Operations (-replace): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates CLI Replace to force the destruction and recreation of a specific virtual machine instance that has become corrupted without modifying HCL code.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Forcing resource recreation without manual state editing using terraform apply -replace is under consideration.",
    options: [
      { id: 'A', text: "Execute `terraform apply -replace=\"aws_instance.web\"` to mark the resource for recreation in the execution plan." },
      { id: 'B', text: "Run `terraform taint` which is deprecated in modern Terraform versions." },
      { id: 'C', text: "Delete the instance from state using `state rm`." },
      { id: 'D', text: "Manually terminate the VM in the cloud console and let Terraform crash." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `terraform apply -replace=\"aws_instance.web\"` to mark the resource for recreation in the execution plan. In modern Terraform (1.0+), the `-replace` flag on `plan` and `apply` replaces the legacy, deprecated `terraform taint` command. Passing `-replace=\"resource.address\"` instructs Terraform to mark the resource for destruction and recreation in the plan without mutating state beforehand.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#replace-resource-address",
    tags: ["CLI Replace", "terraform apply -replace", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-409",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State Replace and Recreate Operations (-replace): Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates CLI Replace to force the destruction and recreation of a specific virtual machine instance that has become corrupted without modifying HCL code.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Forcing resource recreation without manual state editing using terraform apply -replace is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform taint` which is deprecated in modern Terraform versions." },
      { id: 'B', text: "Delete the instance from state using `state rm`." },
      { id: 'C', text: "Execute `terraform apply -replace=\"aws_instance.web\"` to mark the resource for recreation in the execution plan." },
      { id: 'D', text: "Manually terminate the VM in the cloud console and let Terraform crash." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `terraform apply -replace=\"aws_instance.web\"` to mark the resource for recreation in the execution plan. In modern Terraform (1.0+), the `-replace` flag on `plan` and `apply` replaces the legacy, deprecated `terraform taint` command. Passing `-replace=\"resource.address\"` instructs Terraform to mark the resource for destruction and recreation in the plan without mutating state beforehand.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#replace-resource-address",
    tags: ["CLI Replace", "terraform apply -replace", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-410",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State Replace and Recreate Operations (-replace): Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates CLI Replace to force the destruction and recreation of a specific virtual machine instance that has become corrupted without modifying HCL code.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Forcing resource recreation without manual state editing using terraform apply -replace is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform taint` which is deprecated in modern Terraform versions." },
      { id: 'B', text: "Execute `terraform apply -replace=\"aws_instance.web\"` to mark the resource for recreation in the execution plan." },
      { id: 'C', text: "Manually terminate the VM in the cloud console and let Terraform crash." },
      { id: 'D', text: "Delete the instance from state using `state rm`." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute `terraform apply -replace=\"aws_instance.web\"` to mark the resource for recreation in the execution plan. In modern Terraform (1.0+), the `-replace` flag on `plan` and `apply` replaces the legacy, deprecated `terraform taint` command. Passing `-replace=\"resource.address\"` instructs Terraform to mark the resource for destruction and recreation in the plan without mutating state beforehand.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#replace-resource-address",
    tags: ["CLI Replace", "terraform apply -replace", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-411",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Running Terraform in CI/CD Automation: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates CI/CD Automation to design an automated, secure CI/CD pipeline for Terraform that guarantees speculative review and eliminates concurrency collisions.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Best practices for automated pipelines: non-interactive flags, saved plans, and approvals is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform plan -out=tfplan` on pull requests, require manual sign-off on the plan artifact, and run `terraform apply tfplan` upon merge." },
      { id: 'B', text: "Run Terraform operations locally on developer laptops and skip CI/CD automation entirely." },
      { id: 'C', text: "Run `terraform apply -auto-approve` directly on every commit to personal feature branches." },
      { id: 'D', text: "Have CI runners execute `terraform apply` without saving a plan file artifact." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform plan -out=tfplan` on pull requests, require manual sign-off on the plan artifact, and run `terraform apply tfplan` upon merge. A robust Terraform CI/CD pipeline generates a saved plan file (`-out=tfplan`) during pull request validation. Reviewers inspect the plan output, and upon approval and merge, the pipeline applies that exact saved plan file, preventing race conditions and guaranteeing execution fidelity.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/automation/automate-terraform",
    tags: ["CI/CD Automation", "CI/CD Workflows", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-412",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Running Terraform in CI/CD Automation: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates CI/CD Automation to design an automated, secure CI/CD pipeline for Terraform that guarantees speculative review and eliminates concurrency collisions.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Best practices for automated pipelines: non-interactive flags, saved plans, and approvals is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform plan -out=tfplan` on pull requests, require manual sign-off on the plan artifact, and run `terraform apply tfplan` upon merge." },
      { id: 'B', text: "Run Terraform operations locally on developer laptops and skip CI/CD automation entirely." },
      { id: 'C', text: "Have CI runners execute `terraform apply` without saving a plan file artifact." },
      { id: 'D', text: "Run `terraform apply -auto-approve` directly on every commit to personal feature branches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform plan -out=tfplan` on pull requests, require manual sign-off on the plan artifact, and run `terraform apply tfplan` upon merge. A robust Terraform CI/CD pipeline generates a saved plan file (`-out=tfplan`) during pull request validation. Reviewers inspect the plan output, and upon approval and merge, the pipeline applies that exact saved plan file, preventing race conditions and guaranteeing execution fidelity.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/automation/automate-terraform",
    tags: ["CI/CD Automation", "CI/CD Workflows", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-413",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Running Terraform in CI/CD Automation: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates CI/CD Automation to design an automated, secure CI/CD pipeline for Terraform that guarantees speculative review and eliminates concurrency collisions.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Best practices for automated pipelines: non-interactive flags, saved plans, and approvals is under consideration.",
    options: [
      { id: 'A', text: "Have CI runners execute `terraform apply` without saving a plan file artifact." },
      { id: 'B', text: "Run `terraform plan -out=tfplan` on pull requests, require manual sign-off on the plan artifact, and run `terraform apply tfplan` upon merge." },
      { id: 'C', text: "Run Terraform operations locally on developer laptops and skip CI/CD automation entirely." },
      { id: 'D', text: "Run `terraform apply -auto-approve` directly on every commit to personal feature branches." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run `terraform plan -out=tfplan` on pull requests, require manual sign-off on the plan artifact, and run `terraform apply tfplan` upon merge. A robust Terraform CI/CD pipeline generates a saved plan file (`-out=tfplan`) during pull request validation. Reviewers inspect the plan output, and upon approval and merge, the pipeline applies that exact saved plan file, preventing race conditions and guaranteeing execution fidelity.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/automation/automate-terraform",
    tags: ["CI/CD Automation", "CI/CD Workflows", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-414",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Running Terraform in CI/CD Automation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates CI/CD Automation to design an automated, secure CI/CD pipeline for Terraform that guarantees speculative review and eliminates concurrency collisions.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Best practices for automated pipelines: non-interactive flags, saved plans, and approvals is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform plan -out=tfplan` on pull requests, require manual sign-off on the plan artifact, and run `terraform apply tfplan` upon merge." },
      { id: 'B', text: "Run `terraform apply -auto-approve` directly on every commit to personal feature branches." },
      { id: 'C', text: "Run Terraform operations locally on developer laptops and skip CI/CD automation entirely." },
      { id: 'D', text: "Have CI runners execute `terraform apply` without saving a plan file artifact." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform plan -out=tfplan` on pull requests, require manual sign-off on the plan artifact, and run `terraform apply tfplan` upon merge. A robust Terraform CI/CD pipeline generates a saved plan file (`-out=tfplan`) during pull request validation. Reviewers inspect the plan output, and upon approval and merge, the pipeline applies that exact saved plan file, preventing race conditions and guaranteeing execution fidelity.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/automation/automate-terraform",
    tags: ["CI/CD Automation", "CI/CD Workflows", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-415",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Running Terraform in CI/CD Automation: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates CI/CD Automation to design an automated, secure CI/CD pipeline for Terraform that guarantees speculative review and eliminates concurrency collisions.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Best practices for automated pipelines: non-interactive flags, saved plans, and approvals is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform apply -auto-approve` directly on every commit to personal feature branches." },
      { id: 'B', text: "Have CI runners execute `terraform apply` without saving a plan file artifact." },
      { id: 'C', text: "Run Terraform operations locally on developer laptops and skip CI/CD automation entirely." },
      { id: 'D', text: "Run `terraform plan -out=tfplan` on pull requests, require manual sign-off on the plan artifact, and run `terraform apply tfplan` upon merge." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Run `terraform plan -out=tfplan` on pull requests, require manual sign-off on the plan artifact, and run `terraform apply tfplan` upon merge. A robust Terraform CI/CD pipeline generates a saved plan file (`-out=tfplan`) during pull request validation. Reviewers inspect the plan output, and upon approval and merge, the pipeline applies that exact saved plan file, preventing race conditions and guaranteeing execution fidelity.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/automation/automate-terraform",
    tags: ["CI/CD Automation", "CI/CD Workflows", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-416",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Automated Policy Enforcement with Open Policy Agent (OPA) / Sentinel: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Policy as Code to prevent engineers from provisioning unencrypted S3 buckets or oversized cloud instances before `terraform apply` executes.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Enforcing compliance, cost, and security rules pre-apply using Sentinel or OPA is under consideration.",
    options: [
      { id: 'A', text: "Rely on security engineers manually reviewing thousands of lines of plan output." },
      { id: 'B', text: "Implement Policy as Code (HCP Terraform Sentinel or OPA Rego) to evaluate saved plan files and block runs that violate policies." },
      { id: 'C', text: "Disable all automated guardrails to speed up developer release velocity." },
      { id: 'D', text: "Scan resources only after they have been running in production for three months." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement Policy as Code (HCP Terraform Sentinel or OPA Rego) to evaluate saved plan files and block runs that violate policies. Policy as Code integrates into the CI/CD pipeline between `plan` and `apply`. Frameworks like HashiCorp Sentinel or Open Policy Agent (OPA) evaluate the JSON representation of the plan against organizational security rules, rejecting non-compliant changes before infrastructure is provisioned.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement",
    tags: ["Policy as Code", "Policy as Code", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-417",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Automated Policy Enforcement with Open Policy Agent (OPA) / Sentinel: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Policy as Code to prevent engineers from provisioning unencrypted S3 buckets or oversized cloud instances before `terraform apply` executes.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Enforcing compliance, cost, and security rules pre-apply using Sentinel or OPA is under consideration.",
    options: [
      { id: 'A', text: "Scan resources only after they have been running in production for three months." },
      { id: 'B', text: "Rely on security engineers manually reviewing thousands of lines of plan output." },
      { id: 'C', text: "Implement Policy as Code (HCP Terraform Sentinel or OPA Rego) to evaluate saved plan files and block runs that violate policies." },
      { id: 'D', text: "Disable all automated guardrails to speed up developer release velocity." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement Policy as Code (HCP Terraform Sentinel or OPA Rego) to evaluate saved plan files and block runs that violate policies. Policy as Code integrates into the CI/CD pipeline between `plan` and `apply`. Frameworks like HashiCorp Sentinel or Open Policy Agent (OPA) evaluate the JSON representation of the plan against organizational security rules, rejecting non-compliant changes before infrastructure is provisioned.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement",
    tags: ["Policy as Code", "Policy as Code", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-418",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Automated Policy Enforcement with Open Policy Agent (OPA) / Sentinel: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Policy as Code to prevent engineers from provisioning unencrypted S3 buckets or oversized cloud instances before `terraform apply` executes.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Enforcing compliance, cost, and security rules pre-apply using Sentinel or OPA is under consideration.",
    options: [
      { id: 'A', text: "Disable all automated guardrails to speed up developer release velocity." },
      { id: 'B', text: "Scan resources only after they have been running in production for three months." },
      { id: 'C', text: "Implement Policy as Code (HCP Terraform Sentinel or OPA Rego) to evaluate saved plan files and block runs that violate policies." },
      { id: 'D', text: "Rely on security engineers manually reviewing thousands of lines of plan output." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement Policy as Code (HCP Terraform Sentinel or OPA Rego) to evaluate saved plan files and block runs that violate policies. Policy as Code integrates into the CI/CD pipeline between `plan` and `apply`. Frameworks like HashiCorp Sentinel or Open Policy Agent (OPA) evaluate the JSON representation of the plan against organizational security rules, rejecting non-compliant changes before infrastructure is provisioned.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement",
    tags: ["Policy as Code", "Policy as Code", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-419",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Automated Policy Enforcement with Open Policy Agent (OPA) / Sentinel: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Policy as Code to prevent engineers from provisioning unencrypted S3 buckets or oversized cloud instances before `terraform apply` executes.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Enforcing compliance, cost, and security rules pre-apply using Sentinel or OPA is under consideration.",
    options: [
      { id: 'A', text: "Scan resources only after they have been running in production for three months." },
      { id: 'B', text: "Implement Policy as Code (HCP Terraform Sentinel or OPA Rego) to evaluate saved plan files and block runs that violate policies." },
      { id: 'C', text: "Disable all automated guardrails to speed up developer release velocity." },
      { id: 'D', text: "Rely on security engineers manually reviewing thousands of lines of plan output." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement Policy as Code (HCP Terraform Sentinel or OPA Rego) to evaluate saved plan files and block runs that violate policies. Policy as Code integrates into the CI/CD pipeline between `plan` and `apply`. Frameworks like HashiCorp Sentinel or Open Policy Agent (OPA) evaluate the JSON representation of the plan against organizational security rules, rejecting non-compliant changes before infrastructure is provisioned.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement",
    tags: ["Policy as Code", "Policy as Code", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-420",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Automated Policy Enforcement with Open Policy Agent (OPA) / Sentinel: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Policy as Code to prevent engineers from provisioning unencrypted S3 buckets or oversized cloud instances before `terraform apply` executes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Enforcing compliance, cost, and security rules pre-apply using Sentinel or OPA is under consideration.",
    options: [
      { id: 'A', text: "Scan resources only after they have been running in production for three months." },
      { id: 'B', text: "Implement Policy as Code (HCP Terraform Sentinel or OPA Rego) to evaluate saved plan files and block runs that violate policies." },
      { id: 'C', text: "Disable all automated guardrails to speed up developer release velocity." },
      { id: 'D', text: "Rely on security engineers manually reviewing thousands of lines of plan output." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement Policy as Code (HCP Terraform Sentinel or OPA Rego) to evaluate saved plan files and block runs that violate policies. Policy as Code integrates into the CI/CD pipeline between `plan` and `apply`. Frameworks like HashiCorp Sentinel or Open Policy Agent (OPA) evaluate the JSON representation of the plan against organizational security rules, rejecting non-compliant changes before infrastructure is provisioned.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement",
    tags: ["Policy as Code", "Policy as Code", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-421",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Cost Estimation and Budget Guardrails in Automation: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Cost Estimation to give infrastructure teams visibility into how a proposed Terraform pull request will impact monthly AWS spending before merging.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Previewing hourly and monthly cloud cost deltas during plan generation is under consideration.",
    options: [
      { id: 'A', text: "Wait for the monthly AWS bill to discover unexpected spending surges." },
      { id: 'B', text: "Instruct developers to calculate AWS pricing manually using pen and paper." },
      { id: 'C', text: "Prohibit scaling cloud resources under any circumstance." },
      { id: 'D', text: "Enable Cost Estimation in HCP Terraform or integrate tools like Infracost into pull request pipelines to comment with cost deltas." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Cost Estimation in HCP Terraform or integrate tools like Infracost into pull request pipelines to comment with cost deltas. Cost estimation tools (HCP Terraform Cost Estimation, Infracost) parse the speculative Terraform plan and calculate monthly cost differentials (e.g., +$120/month for 2 new instances). Surfacing cost deltas directly in pull requests empowers teams to make cost-conscious architectural decisions.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/cost-estimation",
    tags: ["Cost Estimation", "Cost Estimation", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-422",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Cost Estimation and Budget Guardrails in Automation: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Cost Estimation to give infrastructure teams visibility into how a proposed Terraform pull request will impact monthly AWS spending before merging.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Previewing hourly and monthly cloud cost deltas during plan generation is under consideration.",
    options: [
      { id: 'A', text: "Prohibit scaling cloud resources under any circumstance." },
      { id: 'B', text: "Wait for the monthly AWS bill to discover unexpected spending surges." },
      { id: 'C', text: "Instruct developers to calculate AWS pricing manually using pen and paper." },
      { id: 'D', text: "Enable Cost Estimation in HCP Terraform or integrate tools like Infracost into pull request pipelines to comment with cost deltas." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Cost Estimation in HCP Terraform or integrate tools like Infracost into pull request pipelines to comment with cost deltas. Cost estimation tools (HCP Terraform Cost Estimation, Infracost) parse the speculative Terraform plan and calculate monthly cost differentials (e.g., +$120/month for 2 new instances). Surfacing cost deltas directly in pull requests empowers teams to make cost-conscious architectural decisions.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/cost-estimation",
    tags: ["Cost Estimation", "Cost Estimation", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-423",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Cost Estimation and Budget Guardrails in Automation: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Cost Estimation to give infrastructure teams visibility into how a proposed Terraform pull request will impact monthly AWS spending before merging.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Previewing hourly and monthly cloud cost deltas during plan generation is under consideration.",
    options: [
      { id: 'A', text: "Instruct developers to calculate AWS pricing manually using pen and paper." },
      { id: 'B', text: "Wait for the monthly AWS bill to discover unexpected spending surges." },
      { id: 'C', text: "Prohibit scaling cloud resources under any circumstance." },
      { id: 'D', text: "Enable Cost Estimation in HCP Terraform or integrate tools like Infracost into pull request pipelines to comment with cost deltas." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Cost Estimation in HCP Terraform or integrate tools like Infracost into pull request pipelines to comment with cost deltas. Cost estimation tools (HCP Terraform Cost Estimation, Infracost) parse the speculative Terraform plan and calculate monthly cost differentials (e.g., +$120/month for 2 new instances). Surfacing cost deltas directly in pull requests empowers teams to make cost-conscious architectural decisions.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/cost-estimation",
    tags: ["Cost Estimation", "Cost Estimation", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-424",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Cost Estimation and Budget Guardrails in Automation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Cost Estimation to give infrastructure teams visibility into how a proposed Terraform pull request will impact monthly AWS spending before merging.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Previewing hourly and monthly cloud cost deltas during plan generation is under consideration.",
    options: [
      { id: 'A', text: "Prohibit scaling cloud resources under any circumstance." },
      { id: 'B', text: "Enable Cost Estimation in HCP Terraform or integrate tools like Infracost into pull request pipelines to comment with cost deltas." },
      { id: 'C', text: "Instruct developers to calculate AWS pricing manually using pen and paper." },
      { id: 'D', text: "Wait for the monthly AWS bill to discover unexpected spending surges." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Cost Estimation in HCP Terraform or integrate tools like Infracost into pull request pipelines to comment with cost deltas. Cost estimation tools (HCP Terraform Cost Estimation, Infracost) parse the speculative Terraform plan and calculate monthly cost differentials (e.g., +$120/month for 2 new instances). Surfacing cost deltas directly in pull requests empowers teams to make cost-conscious architectural decisions.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/cost-estimation",
    tags: ["Cost Estimation", "Cost Estimation", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-425",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Cost Estimation and Budget Guardrails in Automation: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Cost Estimation to give infrastructure teams visibility into how a proposed Terraform pull request will impact monthly AWS spending before merging.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Previewing hourly and monthly cloud cost deltas during plan generation is under consideration.",
    options: [
      { id: 'A', text: "Instruct developers to calculate AWS pricing manually using pen and paper." },
      { id: 'B', text: "Prohibit scaling cloud resources under any circumstance." },
      { id: 'C', text: "Enable Cost Estimation in HCP Terraform or integrate tools like Infracost into pull request pipelines to comment with cost deltas." },
      { id: 'D', text: "Wait for the monthly AWS bill to discover unexpected spending surges." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Cost Estimation in HCP Terraform or integrate tools like Infracost into pull request pipelines to comment with cost deltas. Cost estimation tools (HCP Terraform Cost Estimation, Infracost) parse the speculative Terraform plan and calculate monthly cost differentials (e.g., +$120/month for 2 new instances). Surfacing cost deltas directly in pull requests empowers teams to make cost-conscious architectural decisions.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/cost-estimation",
    tags: ["Cost Estimation", "Cost Estimation", "Resilience Failure"]
  }
];

export default HASHICORP_TFP_QUESTIONS_17;
