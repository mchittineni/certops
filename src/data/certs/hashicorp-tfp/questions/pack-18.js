export const HASHICORP_TFP_QUESTIONS_18 = [
  {
    id: "hashicorp-tfp-426",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Automated Drift Detection and Scheduled Runs: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Scheduled Drift to detect when cloud resources have been modified out-of-band via the AWS console without waiting for the next developer code commit.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Compare the cloud provider's config history against the last applied plan each week." },
      { id: 'B', text: "Run a full `terraform apply` on a schedule so any drift is corrected automatically." },
      { id: 'C', text: "Enable the provider's own change notifications and route them to the platform team." },
      { id: 'D', text: "Schedule drift detection runs, or nightly speculative plans, with alerts on the difference." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure scheduled speculative plans (e.g., HCP Terraform Drift Detection or nightly CI cron jobs) with alert webhooks. Continuous drift detection executes periodic `terraform plan` operations (e.g., daily at 2:00 AM) against live infrastructure. If differences between state and live cloud APIs are detected, the system dispatches notifications to Slack or PagerDuty, allowing rapid remediation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/health",
    tags: ["Scheduled Drift","Drift Detection Automation","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-427",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Automated Drift Detection and Scheduled Runs: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Scheduled Drift to detect when cloud resources have been modified out-of-band via the AWS console without waiting for the next developer code commit.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Schedule drift detection runs, or nightly speculative plans, with alerts on the difference." },
      { id: 'B', text: "Run a full `terraform apply` on a schedule so any drift is corrected automatically." },
      { id: 'C', text: "Compare the cloud provider's config history against the last applied plan each week." },
      { id: 'D', text: "Enable the provider's own change notifications and route them to the platform team." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure scheduled speculative plans (e.g., HCP Terraform Drift Detection or nightly CI cron jobs) with alert webhooks. Continuous drift detection executes periodic `terraform plan` operations (e.g., daily at 2:00 AM) against live infrastructure. If differences between state and live cloud APIs are detected, the system dispatches notifications to Slack or PagerDuty, allowing rapid remediation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/health",
    tags: ["Scheduled Drift","Drift Detection Automation","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-428",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Automated Drift Detection and Scheduled Runs: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Scheduled Drift to detect when cloud resources have been modified out-of-band via the AWS console without waiting for the next developer code commit.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Enable the provider's own change notifications and route them to the platform team." },
      { id: 'B', text: "Schedule drift detection runs, or nightly speculative plans, with alerts on the difference." },
      { id: 'C', text: "Compare the cloud provider's config history against the last applied plan each week." },
      { id: 'D', text: "Run a full `terraform apply` on a schedule so any drift is corrected automatically." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure scheduled speculative plans (e.g., HCP Terraform Drift Detection or nightly CI cron jobs) with alert webhooks. Continuous drift detection executes periodic `terraform plan` operations (e.g., daily at 2:00 AM) against live infrastructure. If differences between state and live cloud APIs are detected, the system dispatches notifications to Slack or PagerDuty, allowing rapid remediation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/health",
    tags: ["Scheduled Drift","Drift Detection Automation","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-429",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Automated Drift Detection and Scheduled Runs: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Scheduled Drift to detect when cloud resources have been modified out-of-band via the AWS console without waiting for the next developer code commit.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Schedule drift detection runs, or nightly speculative plans, with alerts on the difference." },
      { id: 'B', text: "Run a full `terraform apply` on a schedule so any drift is corrected automatically." },
      { id: 'C', text: "Compare the cloud provider's config history against the last applied plan each week." },
      { id: 'D', text: "Enable the provider's own change notifications and route them to the platform team." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure scheduled speculative plans (e.g., HCP Terraform Drift Detection or nightly CI cron jobs) with alert webhooks. Continuous drift detection executes periodic `terraform plan` operations (e.g., daily at 2:00 AM) against live infrastructure. If differences between state and live cloud APIs are detected, the system dispatches notifications to Slack or PagerDuty, allowing rapid remediation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/health",
    tags: ["Scheduled Drift","Drift Detection Automation","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-430",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Automated Drift Detection and Scheduled Runs: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Scheduled Drift to detect when cloud resources have been modified out-of-band via the AWS console without waiting for the next developer code commit.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Enable the provider's own change notifications and route them to the platform team." },
      { id: 'B', text: "Run a full `terraform apply` on a schedule so any drift is corrected automatically." },
      { id: 'C', text: "Schedule drift detection runs, or nightly speculative plans, with alerts on the difference." },
      { id: 'D', text: "Compare the cloud provider's config history against the last applied plan each week." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure scheduled speculative plans (e.g., HCP Terraform Drift Detection or nightly CI cron jobs) with alert webhooks. Continuous drift detection executes periodic `terraform plan` operations (e.g., daily at 2:00 AM) against live infrastructure. If differences between state and live cloud APIs are detected, the system dispatches notifications to Slack or PagerDuty, allowing rapid remediation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/health",
    tags: ["Scheduled Drift","Drift Detection Automation","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-431",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Environment Variable Precedence and Parameter Injection: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Variable Precedence to understand which value takes priority when a variable is defined simultaneously in `variables.tf`, `terraform.tfvars`, and via `TF_VAR_`.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "`terraform.tfvars` wins, then `-var`, then `*.auto.tfvars`, `TF_VAR_` env vars and defaults." },
      { id: 'B', text: "The default in `variables.tf` wins, and every other source is applied only when it is absent." },
      { id: 'C', text: "`-var` wins, then `-var-file`, then `*.auto.tfvars`, `terraform.tfvars`, `TF_VAR_` and defaults." },
      { id: 'D', text: "`TF_VAR_` environment variables win, then `-var`, then the various variable files in order." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Command-line `-var` flags take highest precedence, followed by `-var-file`, `*.auto.tfvars`, `terraform.tfvars`, `TF_VAR_` env vars, and defaults. Terraform evaluates variables according to strict precedence rules (lowest to highest): default value, `TF_VAR_` environment variables, `terraform.tfvars`, `terraform.tfvars.json`, `*.auto.tfvars`, `-var-file` flags, and finally `-var` command-line arguments (highest priority).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#variable-definition-precedence",
    tags: ["Variable Precedence","Variable Precedence","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-432",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Environment Variable Precedence and Parameter Injection: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Variable Precedence to understand which value takes priority when a variable is defined simultaneously in `variables.tf`, `terraform.tfvars`, and via `TF_VAR_`.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "`-var` wins, then `-var-file`, then `*.auto.tfvars`, `terraform.tfvars`, `TF_VAR_` and defaults." },
      { id: 'B', text: "The default in `variables.tf` wins, and every other source is applied only when it is absent." },
      { id: 'C', text: "`TF_VAR_` environment variables win, then `-var`, then the various variable files in order." },
      { id: 'D', text: "`terraform.tfvars` wins, then `-var`, then `*.auto.tfvars`, `TF_VAR_` env vars and defaults." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Command-line `-var` flags take highest precedence, followed by `-var-file`, `*.auto.tfvars`, `terraform.tfvars`, `TF_VAR_` env vars, and defaults. Terraform evaluates variables according to strict precedence rules (lowest to highest): default value, `TF_VAR_` environment variables, `terraform.tfvars`, `terraform.tfvars.json`, `*.auto.tfvars`, `-var-file` flags, and finally `-var` command-line arguments (highest priority).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#variable-definition-precedence",
    tags: ["Variable Precedence","Variable Precedence","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-433",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Environment Variable Precedence and Parameter Injection: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Variable Precedence to understand which value takes priority when a variable is defined simultaneously in `variables.tf`, `terraform.tfvars`, and via `TF_VAR_`.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "`TF_VAR_` environment variables win, then `-var`, then the various variable files in order." },
      { id: 'B', text: "The default in `variables.tf` wins, and every other source is applied only when it is absent." },
      { id: 'C', text: "`terraform.tfvars` wins, then `-var`, then `*.auto.tfvars`, `TF_VAR_` env vars and defaults." },
      { id: 'D', text: "`-var` wins, then `-var-file`, then `*.auto.tfvars`, `terraform.tfvars`, `TF_VAR_` and defaults." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Command-line `-var` flags take highest precedence, followed by `-var-file`, `*.auto.tfvars`, `terraform.tfvars`, `TF_VAR_` env vars, and defaults. Terraform evaluates variables according to strict precedence rules (lowest to highest): default value, `TF_VAR_` environment variables, `terraform.tfvars`, `terraform.tfvars.json`, `*.auto.tfvars`, `-var-file` flags, and finally `-var` command-line arguments (highest priority).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#variable-definition-precedence",
    tags: ["Variable Precedence","Variable Precedence","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-434",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Environment Variable Precedence and Parameter Injection: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Variable Precedence to understand which value takes priority when a variable is defined simultaneously in `variables.tf`, `terraform.tfvars`, and via `TF_VAR_`.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "The default in `variables.tf` wins, and every other source is applied only when it is absent." },
      { id: 'B', text: "`-var` wins, then `-var-file`, then `*.auto.tfvars`, `terraform.tfvars`, `TF_VAR_` and defaults." },
      { id: 'C', text: "`terraform.tfvars` wins, then `-var`, then `*.auto.tfvars`, `TF_VAR_` env vars and defaults." },
      { id: 'D', text: "`TF_VAR_` environment variables win, then `-var`, then the various variable files in order." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Command-line `-var` flags take highest precedence, followed by `-var-file`, `*.auto.tfvars`, `terraform.tfvars`, `TF_VAR_` env vars, and defaults. Terraform evaluates variables according to strict precedence rules (lowest to highest): default value, `TF_VAR_` environment variables, `terraform.tfvars`, `terraform.tfvars.json`, `*.auto.tfvars`, `-var-file` flags, and finally `-var` command-line arguments (highest priority).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#variable-definition-precedence",
    tags: ["Variable Precedence","Variable Precedence","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-435",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Environment Variable Precedence and Parameter Injection: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Variable Precedence to understand which value takes priority when a variable is defined simultaneously in `variables.tf`, `terraform.tfvars`, and via `TF_VAR_`.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "`terraform.tfvars` wins, then `-var`, then `*.auto.tfvars`, `TF_VAR_` env vars and defaults." },
      { id: 'B', text: "`-var` wins, then `-var-file`, then `*.auto.tfvars`, `terraform.tfvars`, `TF_VAR_` and defaults." },
      { id: 'C', text: "`TF_VAR_` environment variables win, then `-var`, then the various variable files in order." },
      { id: 'D', text: "The default in `variables.tf` wins, and every other source is applied only when it is absent." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Command-line `-var` flags take highest precedence, followed by `-var-file`, `*.auto.tfvars`, `terraform.tfvars`, `TF_VAR_` env vars, and defaults. Terraform evaluates variables according to strict precedence rules (lowest to highest): default value, `TF_VAR_` environment variables, `terraform.tfvars`, `terraform.tfvars.json`, `*.auto.tfvars`, `-var-file` flags, and finally `-var` command-line arguments (highest priority).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#variable-definition-precedence",
    tags: ["Variable Precedence","Variable Precedence","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-436",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Managing Multiple Providers and Third-Party Plugins: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Provider Management to run Terraform in a strictly air-gapped, isolated environment with zero outbound internet access to the public Terraform Registry.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Copy the `.terraform` directory from a connected machine onto each air-gapped host." },
      { id: 'B', text: "Vendor the providers into the repository and reference them with `dev_overrides`." },
      { id: 'C', text: "Run `terraform init -plugin-dir` against a share holding the downloaded plugins." },
      { id: 'D', text: "Build a provider mirror with `terraform providers mirror` and point the CLI config at it." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `terraform providers mirror &lt;directory&gt;` in a connected environment to create a local provider mirror, and configure CLI network mirrors. `terraform providers mirror` downloads all required provider plugins for a configuration into a local directory structure. In air-gapped or restricted environments, configuring the CLI config file (`.terraformrc`) to use `network_mirror` or `filesystem_mirror` redirects provider downloads to internal sources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/providers/mirror",
    tags: ["Provider Management","Provider Mirrors","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-437",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Managing Multiple Providers and Third-Party Plugins: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Provider Management to run Terraform in a strictly air-gapped, isolated environment with zero outbound internet access to the public Terraform Registry.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Run `terraform init -plugin-dir` against a share holding the downloaded plugins." },
      { id: 'B', text: "Copy the `.terraform` directory from a connected machine onto each air-gapped host." },
      { id: 'C', text: "Vendor the providers into the repository and reference them with `dev_overrides`." },
      { id: 'D', text: "Build a provider mirror with `terraform providers mirror` and point the CLI config at it." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `terraform providers mirror &lt;directory&gt;` in a connected environment to create a local provider mirror, and configure CLI network mirrors. `terraform providers mirror` downloads all required provider plugins for a configuration into a local directory structure. In air-gapped or restricted environments, configuring the CLI config file (`.terraformrc`) to use `network_mirror` or `filesystem_mirror` redirects provider downloads to internal sources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/providers/mirror",
    tags: ["Provider Management","Provider Mirrors","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-438",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Managing Multiple Providers and Third-Party Plugins: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Provider Management to run Terraform in a strictly air-gapped, isolated environment with zero outbound internet access to the public Terraform Registry.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Build a provider mirror with `terraform providers mirror` and point the CLI config at it." },
      { id: 'B', text: "Copy the `.terraform` directory from a connected machine onto each air-gapped host." },
      { id: 'C', text: "Run `terraform init -plugin-dir` against a share holding the downloaded plugins." },
      { id: 'D', text: "Vendor the providers into the repository and reference them with `dev_overrides`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `terraform providers mirror &lt;directory&gt;` in a connected environment to create a local provider mirror, and configure CLI network mirrors. `terraform providers mirror` downloads all required provider plugins for a configuration into a local directory structure. In air-gapped or restricted environments, configuring the CLI config file (`.terraformrc`) to use `network_mirror` or `filesystem_mirror` redirects provider downloads to internal sources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/providers/mirror",
    tags: ["Provider Management","Provider Mirrors","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-439",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Managing Multiple Providers and Third-Party Plugins: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Provider Management to run Terraform in a strictly air-gapped, isolated environment with zero outbound internet access to the public Terraform Registry.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Build a provider mirror with `terraform providers mirror` and point the CLI config at it." },
      { id: 'B', text: "Copy the `.terraform` directory from a connected machine onto each air-gapped host." },
      { id: 'C', text: "Run `terraform init -plugin-dir` against a share holding the downloaded plugins." },
      { id: 'D', text: "Vendor the providers into the repository and reference them with `dev_overrides`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `terraform providers mirror &lt;directory&gt;` in a connected environment to create a local provider mirror, and configure CLI network mirrors. `terraform providers mirror` downloads all required provider plugins for a configuration into a local directory structure. In air-gapped or restricted environments, configuring the CLI config file (`.terraformrc`) to use `network_mirror` or `filesystem_mirror` redirects provider downloads to internal sources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/providers/mirror",
    tags: ["Provider Management","Provider Mirrors","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-440",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Managing Multiple Providers and Third-Party Plugins: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Provider Management to run Terraform in a strictly air-gapped, isolated environment with zero outbound internet access to the public Terraform Registry.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Build a provider mirror with `terraform providers mirror` and point the CLI config at it." },
      { id: 'B', text: "Run `terraform init -plugin-dir` against a share holding the downloaded plugins." },
      { id: 'C', text: "Vendor the providers into the repository and reference them with `dev_overrides`." },
      { id: 'D', text: "Copy the `.terraform` directory from a connected machine onto each air-gapped host." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `terraform providers mirror &lt;directory&gt;` in a connected environment to create a local provider mirror, and configure CLI network mirrors. `terraform providers mirror` downloads all required provider plugins for a configuration into a local directory structure. In air-gapped or restricted environments, configuring the CLI config file (`.terraformrc`) to use `network_mirror` or `filesystem_mirror` redirects provider downloads to internal sources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/providers/mirror",
    tags: ["Provider Management","Provider Mirrors","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-441",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Headless CI Execution with -no-color and -input=false: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Headless CLI to ensure that Terraform commands executed inside a headless Jenkins or GitLab CI runner do not hang waiting for interactive input.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Include `-input=false` and `-no-color` on all automated CLI command invocations." },
      { id: 'B', text: "Write a custom terminal wrapper that simulates human keystrokes." },
      { id: 'C', text: "Run commands in an interactive screen session on a persistent server." },
      { id: 'D', text: "Disable all automated testing to avoid terminal prompts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Include `-input=false` and `-no-color` on all automated CLI command invocations. By default, Terraform prompts for missing required variables in interactive terminals. In CI/CD automation, passing `-input=false` forces Terraform to return an error immediately if a variable is missing rather than hanging indefinitely. `-no-color` removes ANSI escape codes from build logs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands#input-false",
    tags: ["Headless CLI","Headless CLI Flags","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-442",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Headless CI Execution with -no-color and -input=false: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Headless CLI to ensure that Terraform commands executed inside a headless Jenkins or GitLab CI runner do not hang waiting for interactive input.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Include `-input=false` and `-no-color` on all automated CLI command invocations." },
      { id: 'B', text: "Disable all automated testing to avoid terminal prompts." },
      { id: 'C', text: "Write a custom terminal wrapper that simulates human keystrokes." },
      { id: 'D', text: "Run commands in an interactive screen session on a persistent server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Include `-input=false` and `-no-color` on all automated CLI command invocations. By default, Terraform prompts for missing required variables in interactive terminals. In CI/CD automation, passing `-input=false` forces Terraform to return an error immediately if a variable is missing rather than hanging indefinitely. `-no-color` removes ANSI escape codes from build logs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands#input-false",
    tags: ["Headless CLI","Headless CLI Flags","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-443",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Headless CI Execution with -no-color and -input=false: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Headless CLI to ensure that Terraform commands executed inside a headless Jenkins or GitLab CI runner do not hang waiting for interactive input.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Include `-input=false` and `-no-color` on all automated CLI command invocations." },
      { id: 'B', text: "Write a custom terminal wrapper that simulates human keystrokes." },
      { id: 'C', text: "Run commands in an interactive screen session on a persistent server." },
      { id: 'D', text: "Disable all automated testing to avoid terminal prompts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Include `-input=false` and `-no-color` on all automated CLI command invocations. By default, Terraform prompts for missing required variables in interactive terminals. In CI/CD automation, passing `-input=false` forces Terraform to return an error immediately if a variable is missing rather than hanging indefinitely. `-no-color` removes ANSI escape codes from build logs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands#input-false",
    tags: ["Headless CLI","Headless CLI Flags","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-444",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Headless CI Execution with -no-color and -input=false: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Headless CLI to ensure that Terraform commands executed inside a headless Jenkins or GitLab CI runner do not hang waiting for interactive input.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Include `-input=false` and `-no-color` on all automated CLI command invocations." },
      { id: 'B', text: "Write a custom terminal wrapper that simulates human keystrokes." },
      { id: 'C', text: "Run commands in an interactive screen session on a persistent server." },
      { id: 'D', text: "Disable all automated testing to avoid terminal prompts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Include `-input=false` and `-no-color` on all automated CLI command invocations. By default, Terraform prompts for missing required variables in interactive terminals. In CI/CD automation, passing `-input=false` forces Terraform to return an error immediately if a variable is missing rather than hanging indefinitely. `-no-color` removes ANSI escape codes from build logs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands#input-false",
    tags: ["Headless CLI","Headless CLI Flags","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-445",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Headless CI Execution with -no-color and -input=false: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Headless CLI to ensure that Terraform commands executed inside a headless Jenkins or GitLab CI runner do not hang waiting for interactive input.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Disable all automated testing to avoid terminal prompts." },
      { id: 'B', text: "Write a custom terminal wrapper that simulates human keystrokes." },
      { id: 'C', text: "Include `-input=false` and `-no-color` on all automated CLI command invocations." },
      { id: 'D', text: "Run commands in an interactive screen session on a persistent server." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Include `-input=false` and `-no-color` on all automated CLI command invocations. By default, Terraform prompts for missing required variables in interactive terminals. In CI/CD automation, passing `-input=false` forces Terraform to return an error immediately if a variable is missing rather than hanging indefinitely. `-no-color` removes ANSI escape codes from build logs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands#input-false",
    tags: ["Headless CLI","Headless CLI Flags","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-446",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Terraform Cloud Agent Pools for Private Environments: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates HCP Agents to allow HCP Terraform to manage private on-premises vSphere and OpenStack infrastructure behind a corporate firewall without opening inbound ports.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Run HCP Terraform agents inside the private network and point the workspaces at the pool." },
      { id: 'B', text: "Open the backend's inbound ports to the platform's published address ranges." },
      { id: 'C', text: "Put an authenticated reverse proxy in the DMZ for the platform to reach through." },
      { id: 'D', text: "Run the CLI from a bastion inside the network and store state in the backend." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy self-hosted HCP Terraform Agents in the private network and configure target workspaces to use the agent pool. HCP Terraform Agents allow HCP Terraform to manage infrastructure in isolated or private environments (on-premises datacenters, private VPCs). The agent establishes outbound polling connections to HCP Terraform over HTTPS, executing plan and apply tasks locally without requiring inbound firewall rules.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/agents",
    tags: ["HCP Agents","HCP Agents","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-447",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Terraform Cloud Agent Pools for Private Environments: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates HCP Agents to allow HCP Terraform to manage private on-premises vSphere and OpenStack infrastructure behind a corporate firewall without opening inbound ports.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Put an authenticated reverse proxy in the DMZ for the platform to reach through." },
      { id: 'B', text: "Open the backend's inbound ports to the platform's published address ranges." },
      { id: 'C', text: "Run the CLI from a bastion inside the network and store state in the backend." },
      { id: 'D', text: "Run HCP Terraform agents inside the private network and point the workspaces at the pool." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy self-hosted HCP Terraform Agents in the private network and configure target workspaces to use the agent pool. HCP Terraform Agents allow HCP Terraform to manage infrastructure in isolated or private environments (on-premises datacenters, private VPCs). The agent establishes outbound polling connections to HCP Terraform over HTTPS, executing plan and apply tasks locally without requiring inbound firewall rules.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/agents",
    tags: ["HCP Agents","HCP Agents","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-448",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Terraform Cloud Agent Pools for Private Environments: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates HCP Agents to allow HCP Terraform to manage private on-premises vSphere and OpenStack infrastructure behind a corporate firewall without opening inbound ports.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Run HCP Terraform agents inside the private network and point the workspaces at the pool." },
      { id: 'B', text: "Open the backend's inbound ports to the platform's published address ranges." },
      { id: 'C', text: "Put an authenticated reverse proxy in the DMZ for the platform to reach through." },
      { id: 'D', text: "Run the CLI from a bastion inside the network and store state in the backend." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy self-hosted HCP Terraform Agents in the private network and configure target workspaces to use the agent pool. HCP Terraform Agents allow HCP Terraform to manage infrastructure in isolated or private environments (on-premises datacenters, private VPCs). The agent establishes outbound polling connections to HCP Terraform over HTTPS, executing plan and apply tasks locally without requiring inbound firewall rules.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/agents",
    tags: ["HCP Agents","HCP Agents","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-449",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Terraform Cloud Agent Pools for Private Environments: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates HCP Agents to allow HCP Terraform to manage private on-premises vSphere and OpenStack infrastructure behind a corporate firewall without opening inbound ports.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Run the CLI from a bastion inside the network and store state in the backend." },
      { id: 'B', text: "Put an authenticated reverse proxy in the DMZ for the platform to reach through." },
      { id: 'C', text: "Open the backend's inbound ports to the platform's published address ranges." },
      { id: 'D', text: "Run HCP Terraform agents inside the private network and point the workspaces at the pool." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy self-hosted HCP Terraform Agents in the private network and configure target workspaces to use the agent pool. HCP Terraform Agents allow HCP Terraform to manage infrastructure in isolated or private environments (on-premises datacenters, private VPCs). The agent establishes outbound polling connections to HCP Terraform over HTTPS, executing plan and apply tasks locally without requiring inbound firewall rules.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/agents",
    tags: ["HCP Agents","HCP Agents","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-450",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Terraform Cloud Agent Pools for Private Environments: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates HCP Agents to allow HCP Terraform to manage private on-premises vSphere and OpenStack infrastructure behind a corporate firewall without opening inbound ports.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Put an authenticated reverse proxy in the DMZ for the platform to reach through." },
      { id: 'B', text: "Run HCP Terraform agents inside the private network and point the workspaces at the pool." },
      { id: 'C', text: "Open the backend's inbound ports to the platform's published address ranges." },
      { id: 'D', text: "Run the CLI from a bastion inside the network and store state in the backend." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy self-hosted HCP Terraform Agents in the private network and configure target workspaces to use the agent pool. HCP Terraform Agents allow HCP Terraform to manage infrastructure in isolated or private environments (on-premises datacenters, private VPCs). The agent establishes outbound polling connections to HCP Terraform over HTTPS, executing plan and apply tasks locally without requiring inbound firewall rules.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/agents",
    tags: ["HCP Agents","HCP Agents","Resilience Failure"]
  }
];

export default HASHICORP_TFP_QUESTIONS_18;
