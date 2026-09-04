export const HASHICORP_TFP_QUESTIONS_20 = [
  {
    id: "hashicorp-tfp-476",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "HCP Terraform Workspaces and VCS Integration: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates HCP Workspaces to configure an HCP Terraform workspace that automatically triggers speculative plans on pull requests and executes applies upon merge to `main`.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Configuring VCS-driven workflows with automatic plan generation on pull requests is under consideration.",
    options: [
      { id: 'A', text: "Connect the workspace to the GitHub repository using VCS-driven workflow settings with automatic speculative plans enabled." },
      { id: 'B', text: "Require developers to run `terraform apply` locally on their laptops." },
      { id: 'C', text: "Trigger runs using manual CLI API tokens with no VCS link." },
      { id: 'D', text: "Disable speculative plans on pull requests to reduce run volume." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Connect the workspace to the GitHub repository using VCS-driven workflow settings with automatic speculative plans enabled. VCS-driven workflows in HCP Terraform bind workspaces directly to Git repositories. Pull requests automatically trigger speculative plans that post formatted plan summaries directly as PR comments, allowing peer review before changes are merged and applied automatically.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces",
    tags: ["HCP Workspaces", "HCP VCS Workspaces", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-477",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "HCP Terraform Workspaces and VCS Integration: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates HCP Workspaces to configure an HCP Terraform workspace that automatically triggers speculative plans on pull requests and executes applies upon merge to `main`.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Configuring VCS-driven workflows with automatic plan generation on pull requests is under consideration.",
    options: [
      { id: 'A', text: "Connect the workspace to the GitHub repository using VCS-driven workflow settings with automatic speculative plans enabled." },
      { id: 'B', text: "Require developers to run `terraform apply` locally on their laptops." },
      { id: 'C', text: "Trigger runs using manual CLI API tokens with no VCS link." },
      { id: 'D', text: "Disable speculative plans on pull requests to reduce run volume." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Connect the workspace to the GitHub repository using VCS-driven workflow settings with automatic speculative plans enabled. VCS-driven workflows in HCP Terraform bind workspaces directly to Git repositories. Pull requests automatically trigger speculative plans that post formatted plan summaries directly as PR comments, allowing peer review before changes are merged and applied automatically.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces",
    tags: ["HCP Workspaces", "HCP VCS Workspaces", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-478",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "HCP Terraform Workspaces and VCS Integration: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates HCP Workspaces to configure an HCP Terraform workspace that automatically triggers speculative plans on pull requests and executes applies upon merge to `main`.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Configuring VCS-driven workflows with automatic plan generation on pull requests is under consideration.",
    options: [
      { id: 'A', text: "Connect the workspace to the GitHub repository using VCS-driven workflow settings with automatic speculative plans enabled." },
      { id: 'B', text: "Require developers to run `terraform apply` locally on their laptops." },
      { id: 'C', text: "Trigger runs using manual CLI API tokens with no VCS link." },
      { id: 'D', text: "Disable speculative plans on pull requests to reduce run volume." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Connect the workspace to the GitHub repository using VCS-driven workflow settings with automatic speculative plans enabled. VCS-driven workflows in HCP Terraform bind workspaces directly to Git repositories. Pull requests automatically trigger speculative plans that post formatted plan summaries directly as PR comments, allowing peer review before changes are merged and applied automatically.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces",
    tags: ["HCP Workspaces", "HCP VCS Workspaces", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-479",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "HCP Terraform Workspaces and VCS Integration: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates HCP Workspaces to configure an HCP Terraform workspace that automatically triggers speculative plans on pull requests and executes applies upon merge to `main`.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Configuring VCS-driven workflows with automatic plan generation on pull requests is under consideration.",
    options: [
      { id: 'A', text: "Connect the workspace to the GitHub repository using VCS-driven workflow settings with automatic speculative plans enabled." },
      { id: 'B', text: "Require developers to run `terraform apply` locally on their laptops." },
      { id: 'C', text: "Trigger runs using manual CLI API tokens with no VCS link." },
      { id: 'D', text: "Disable speculative plans on pull requests to reduce run volume." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Connect the workspace to the GitHub repository using VCS-driven workflow settings with automatic speculative plans enabled. VCS-driven workflows in HCP Terraform bind workspaces directly to Git repositories. Pull requests automatically trigger speculative plans that post formatted plan summaries directly as PR comments, allowing peer review before changes are merged and applied automatically.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces",
    tags: ["HCP Workspaces", "HCP VCS Workspaces", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-480",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "HCP Terraform Workspaces and VCS Integration: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates HCP Workspaces to configure an HCP Terraform workspace that automatically triggers speculative plans on pull requests and executes applies upon merge to `main`.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Configuring VCS-driven workflows with automatic plan generation on pull requests is under consideration.",
    options: [
      { id: 'A', text: "Connect the workspace to the GitHub repository using VCS-driven workflow settings with automatic speculative plans enabled." },
      { id: 'B', text: "Require developers to run `terraform apply` locally on their laptops." },
      { id: 'C', text: "Trigger runs using manual CLI API tokens with no VCS link." },
      { id: 'D', text: "Disable speculative plans on pull requests to reduce run volume." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Connect the workspace to the GitHub repository using VCS-driven workflow settings with automatic speculative plans enabled. VCS-driven workflows in HCP Terraform bind workspaces directly to Git repositories. Pull requests automatically trigger speculative plans that post formatted plan summaries directly as PR comments, allowing peer review before changes are merged and applied automatically.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces",
    tags: ["HCP Workspaces", "HCP VCS Workspaces", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-481",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Sentinel Policy as Code Enforcement Levels: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Sentinel Levels to enforce a security policy where non-compliant resources block deployment unless an authorized security manager explicitly overrides the failure.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Configuring Advisory, Soft-Mandatory, and Hard-Mandatory policy enforcement in Sentinel is under consideration.",
    options: [
      { id: 'A', text: "Configure the Sentinel policy enforcement level as `soft-mandatory`." },
      { id: 'B', text: "Configure the enforcement level as `advisory` which only prints warnings without blocking." },
      { id: 'C', text: "Configure the enforcement level as `hard-mandatory` which forbids any human override under all circumstances." },
      { id: 'D', text: "Disable policy enforcement across all production workspaces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Sentinel policy enforcement level as `soft-mandatory`. Sentinel supports three enforcement levels: `Advisory` (emits warnings, never halts runs), `Soft-Mandatory` (blocks runs unless an authorized user with override permissions approves), and `Hard-Mandatory` (strictly blocks runs with zero override capability), providing flexible governance tiers.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement/sentinel#enforcement-levels",
    tags: ["Sentinel Levels", "Sentinel Enforcement", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-482",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Sentinel Policy as Code Enforcement Levels: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Sentinel Levels to enforce a security policy where non-compliant resources block deployment unless an authorized security manager explicitly overrides the failure.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Configuring Advisory, Soft-Mandatory, and Hard-Mandatory policy enforcement in Sentinel is under consideration.",
    options: [
      { id: 'A', text: "Configure the Sentinel policy enforcement level as `soft-mandatory`." },
      { id: 'B', text: "Configure the enforcement level as `advisory` which only prints warnings without blocking." },
      { id: 'C', text: "Configure the enforcement level as `hard-mandatory` which forbids any human override under all circumstances." },
      { id: 'D', text: "Disable policy enforcement across all production workspaces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Sentinel policy enforcement level as `soft-mandatory`. Sentinel supports three enforcement levels: `Advisory` (emits warnings, never halts runs), `Soft-Mandatory` (blocks runs unless an authorized user with override permissions approves), and `Hard-Mandatory` (strictly blocks runs with zero override capability), providing flexible governance tiers.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement/sentinel#enforcement-levels",
    tags: ["Sentinel Levels", "Sentinel Enforcement", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-483",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Sentinel Policy as Code Enforcement Levels: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Sentinel Levels to enforce a security policy where non-compliant resources block deployment unless an authorized security manager explicitly overrides the failure.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Configuring Advisory, Soft-Mandatory, and Hard-Mandatory policy enforcement in Sentinel is under consideration.",
    options: [
      { id: 'A', text: "Configure the Sentinel policy enforcement level as `soft-mandatory`." },
      { id: 'B', text: "Configure the enforcement level as `advisory` which only prints warnings without blocking." },
      { id: 'C', text: "Configure the enforcement level as `hard-mandatory` which forbids any human override under all circumstances." },
      { id: 'D', text: "Disable policy enforcement across all production workspaces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Sentinel policy enforcement level as `soft-mandatory`. Sentinel supports three enforcement levels: `Advisory` (emits warnings, never halts runs), `Soft-Mandatory` (blocks runs unless an authorized user with override permissions approves), and `Hard-Mandatory` (strictly blocks runs with zero override capability), providing flexible governance tiers.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement/sentinel#enforcement-levels",
    tags: ["Sentinel Levels", "Sentinel Enforcement", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-484",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Sentinel Policy as Code Enforcement Levels: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Sentinel Levels to enforce a security policy where non-compliant resources block deployment unless an authorized security manager explicitly overrides the failure.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Configuring Advisory, Soft-Mandatory, and Hard-Mandatory policy enforcement in Sentinel is under consideration.",
    options: [
      { id: 'A', text: "Configure the Sentinel policy enforcement level as `soft-mandatory`." },
      { id: 'B', text: "Configure the enforcement level as `advisory` which only prints warnings without blocking." },
      { id: 'C', text: "Configure the enforcement level as `hard-mandatory` which forbids any human override under all circumstances." },
      { id: 'D', text: "Disable policy enforcement across all production workspaces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Sentinel policy enforcement level as `soft-mandatory`. Sentinel supports three enforcement levels: `Advisory` (emits warnings, never halts runs), `Soft-Mandatory` (blocks runs unless an authorized user with override permissions approves), and `Hard-Mandatory` (strictly blocks runs with zero override capability), providing flexible governance tiers.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement/sentinel#enforcement-levels",
    tags: ["Sentinel Levels", "Sentinel Enforcement", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-485",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Sentinel Policy as Code Enforcement Levels: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Sentinel Levels to enforce a security policy where non-compliant resources block deployment unless an authorized security manager explicitly overrides the failure.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Configuring Advisory, Soft-Mandatory, and Hard-Mandatory policy enforcement in Sentinel is under consideration.",
    options: [
      { id: 'A', text: "Configure the Sentinel policy enforcement level as `soft-mandatory`." },
      { id: 'B', text: "Configure the enforcement level as `advisory` which only prints warnings without blocking." },
      { id: 'C', text: "Configure the enforcement level as `hard-mandatory` which forbids any human override under all circumstances." },
      { id: 'D', text: "Disable policy enforcement across all production workspaces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Sentinel policy enforcement level as `soft-mandatory`. Sentinel supports three enforcement levels: `Advisory` (emits warnings, never halts runs), `Soft-Mandatory` (blocks runs unless an authorized user with override permissions approves), and `Hard-Mandatory` (strictly blocks runs with zero override capability), providing flexible governance tiers.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement/sentinel#enforcement-levels",
    tags: ["Sentinel Levels", "Sentinel Enforcement", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-486",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "HCP Terraform Variable Sets: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Variable Sets to share common AWS credentials and enterprise organizational tags across 50 distinct HCP Terraform workspaces without manual duplication.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Reusing environment and Terraform variables across multiple workspaces with Variable Sets is under consideration.",
    options: [
      { id: 'A', text: "Create an HCP Terraform Variable Set containing the shared credentials and tags, and apply it globally to all workspaces or specific projects." },
      { id: 'B', text: "Copy-paste the credentials manually into 50 individual workspace settings pages." },
      { id: 'C', text: "Hardcode the credentials into every child module configuration file." },
      { id: 'D', text: "Commit cloud access keys directly to the public Git repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an HCP Terraform Variable Set containing the shared credentials and tags, and apply it globally to all workspaces or specific projects. Variable Sets in HCP Terraform allow administrators to define collections of environment variables (e.g., `AWS_ACCESS_KEY_ID`) and Terraform variables once, and apply them across multiple workspaces or entire projects, eliminating credential duplication and simplifying secret rotation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/variables/variable-sets",
    tags: ["Variable Sets", "Variable Sets", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-487",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "HCP Terraform Variable Sets: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Variable Sets to share common AWS credentials and enterprise organizational tags across 50 distinct HCP Terraform workspaces without manual duplication.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Reusing environment and Terraform variables across multiple workspaces with Variable Sets is under consideration.",
    options: [
      { id: 'A', text: "Create an HCP Terraform Variable Set containing the shared credentials and tags, and apply it globally to all workspaces or specific projects." },
      { id: 'B', text: "Copy-paste the credentials manually into 50 individual workspace settings pages." },
      { id: 'C', text: "Hardcode the credentials into every child module configuration file." },
      { id: 'D', text: "Commit cloud access keys directly to the public Git repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an HCP Terraform Variable Set containing the shared credentials and tags, and apply it globally to all workspaces or specific projects. Variable Sets in HCP Terraform allow administrators to define collections of environment variables (e.g., `AWS_ACCESS_KEY_ID`) and Terraform variables once, and apply them across multiple workspaces or entire projects, eliminating credential duplication and simplifying secret rotation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/variables/variable-sets",
    tags: ["Variable Sets", "Variable Sets", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-488",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "HCP Terraform Variable Sets: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Variable Sets to share common AWS credentials and enterprise organizational tags across 50 distinct HCP Terraform workspaces without manual duplication.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Reusing environment and Terraform variables across multiple workspaces with Variable Sets is under consideration.",
    options: [
      { id: 'A', text: "Create an HCP Terraform Variable Set containing the shared credentials and tags, and apply it globally to all workspaces or specific projects." },
      { id: 'B', text: "Copy-paste the credentials manually into 50 individual workspace settings pages." },
      { id: 'C', text: "Hardcode the credentials into every child module configuration file." },
      { id: 'D', text: "Commit cloud access keys directly to the public Git repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an HCP Terraform Variable Set containing the shared credentials and tags, and apply it globally to all workspaces or specific projects. Variable Sets in HCP Terraform allow administrators to define collections of environment variables (e.g., `AWS_ACCESS_KEY_ID`) and Terraform variables once, and apply them across multiple workspaces or entire projects, eliminating credential duplication and simplifying secret rotation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/variables/variable-sets",
    tags: ["Variable Sets", "Variable Sets", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-489",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "HCP Terraform Variable Sets: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Variable Sets to share common AWS credentials and enterprise organizational tags across 50 distinct HCP Terraform workspaces without manual duplication.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Reusing environment and Terraform variables across multiple workspaces with Variable Sets is under consideration.",
    options: [
      { id: 'A', text: "Create an HCP Terraform Variable Set containing the shared credentials and tags, and apply it globally to all workspaces or specific projects." },
      { id: 'B', text: "Copy-paste the credentials manually into 50 individual workspace settings pages." },
      { id: 'C', text: "Hardcode the credentials into every child module configuration file." },
      { id: 'D', text: "Commit cloud access keys directly to the public Git repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an HCP Terraform Variable Set containing the shared credentials and tags, and apply it globally to all workspaces or specific projects. Variable Sets in HCP Terraform allow administrators to define collections of environment variables (e.g., `AWS_ACCESS_KEY_ID`) and Terraform variables once, and apply them across multiple workspaces or entire projects, eliminating credential duplication and simplifying secret rotation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/variables/variable-sets",
    tags: ["Variable Sets", "Variable Sets", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-490",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "HCP Terraform Variable Sets: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Variable Sets to share common AWS credentials and enterprise organizational tags across 50 distinct HCP Terraform workspaces without manual duplication.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Reusing environment and Terraform variables across multiple workspaces with Variable Sets is under consideration.",
    options: [
      { id: 'A', text: "Create an HCP Terraform Variable Set containing the shared credentials and tags, and apply it globally to all workspaces or specific projects." },
      { id: 'B', text: "Copy-paste the credentials manually into 50 individual workspace settings pages." },
      { id: 'C', text: "Hardcode the credentials into every child module configuration file." },
      { id: 'D', text: "Commit cloud access keys directly to the public Git repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an HCP Terraform Variable Set containing the shared credentials and tags, and apply it globally to all workspaces or specific projects. Variable Sets in HCP Terraform allow administrators to define collections of environment variables (e.g., `AWS_ACCESS_KEY_ID`) and Terraform variables once, and apply them across multiple workspaces or entire projects, eliminating credential duplication and simplifying secret rotation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/variables/variable-sets",
    tags: ["Variable Sets", "Variable Sets", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-491",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "HCP Terraform Run Triggers: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Run Triggers to automatically trigger an execution in the application compute workspace whenever changes are applied in the foundational networking workspace.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Orchestrating cross-workspace execution pipelines using Run Triggers is under consideration.",
    options: [
      { id: 'A', text: "Configure a Run Trigger on the application workspace targeting the networking workspace as the upstream source." },
      { id: 'B', text: "Write a custom bash script that polls the HCP Terraform API every 10 seconds." },
      { id: 'C', text: "Require human operators to remember to manually start application runs after networking updates." },
      { id: 'D', text: "Merge networking and application code into a single monolithic workspace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Run Trigger on the application workspace targeting the networking workspace as the upstream source. Run Triggers connect workspaces hierarchically. When a run successfully completes in an upstream workspace (e.g., core networking), HCP Terraform automatically initiates a new plan and apply in downstream workspaces (e.g., application clusters), orchestrating multi-tier infrastructure pipelines.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings/run-triggers",
    tags: ["Run Triggers", "Run Triggers", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-492",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "HCP Terraform Run Triggers: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Run Triggers to automatically trigger an execution in the application compute workspace whenever changes are applied in the foundational networking workspace.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Orchestrating cross-workspace execution pipelines using Run Triggers is under consideration.",
    options: [
      { id: 'A', text: "Configure a Run Trigger on the application workspace targeting the networking workspace as the upstream source." },
      { id: 'B', text: "Write a custom bash script that polls the HCP Terraform API every 10 seconds." },
      { id: 'C', text: "Require human operators to remember to manually start application runs after networking updates." },
      { id: 'D', text: "Merge networking and application code into a single monolithic workspace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Run Trigger on the application workspace targeting the networking workspace as the upstream source. Run Triggers connect workspaces hierarchically. When a run successfully completes in an upstream workspace (e.g., core networking), HCP Terraform automatically initiates a new plan and apply in downstream workspaces (e.g., application clusters), orchestrating multi-tier infrastructure pipelines.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings/run-triggers",
    tags: ["Run Triggers", "Run Triggers", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-493",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "HCP Terraform Run Triggers: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Run Triggers to automatically trigger an execution in the application compute workspace whenever changes are applied in the foundational networking workspace.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Orchestrating cross-workspace execution pipelines using Run Triggers is under consideration.",
    options: [
      { id: 'A', text: "Configure a Run Trigger on the application workspace targeting the networking workspace as the upstream source." },
      { id: 'B', text: "Write a custom bash script that polls the HCP Terraform API every 10 seconds." },
      { id: 'C', text: "Require human operators to remember to manually start application runs after networking updates." },
      { id: 'D', text: "Merge networking and application code into a single monolithic workspace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Run Trigger on the application workspace targeting the networking workspace as the upstream source. Run Triggers connect workspaces hierarchically. When a run successfully completes in an upstream workspace (e.g., core networking), HCP Terraform automatically initiates a new plan and apply in downstream workspaces (e.g., application clusters), orchestrating multi-tier infrastructure pipelines.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings/run-triggers",
    tags: ["Run Triggers", "Run Triggers", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-494",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "HCP Terraform Run Triggers: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Run Triggers to automatically trigger an execution in the application compute workspace whenever changes are applied in the foundational networking workspace.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Orchestrating cross-workspace execution pipelines using Run Triggers is under consideration.",
    options: [
      { id: 'A', text: "Configure a Run Trigger on the application workspace targeting the networking workspace as the upstream source." },
      { id: 'B', text: "Write a custom bash script that polls the HCP Terraform API every 10 seconds." },
      { id: 'C', text: "Require human operators to remember to manually start application runs after networking updates." },
      { id: 'D', text: "Merge networking and application code into a single monolithic workspace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Run Trigger on the application workspace targeting the networking workspace as the upstream source. Run Triggers connect workspaces hierarchically. When a run successfully completes in an upstream workspace (e.g., core networking), HCP Terraform automatically initiates a new plan and apply in downstream workspaces (e.g., application clusters), orchestrating multi-tier infrastructure pipelines.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings/run-triggers",
    tags: ["Run Triggers", "Run Triggers", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-495",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "HCP Terraform Run Triggers: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Run Triggers to automatically trigger an execution in the application compute workspace whenever changes are applied in the foundational networking workspace.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Orchestrating cross-workspace execution pipelines using Run Triggers is under consideration.",
    options: [
      { id: 'A', text: "Configure a Run Trigger on the application workspace targeting the networking workspace as the upstream source." },
      { id: 'B', text: "Write a custom bash script that polls the HCP Terraform API every 10 seconds." },
      { id: 'C', text: "Require human operators to remember to manually start application runs after networking updates." },
      { id: 'D', text: "Merge networking and application code into a single monolithic workspace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Run Trigger on the application workspace targeting the networking workspace as the upstream source. Run Triggers connect workspaces hierarchically. When a run successfully completes in an upstream workspace (e.g., core networking), HCP Terraform automatically initiates a new plan and apply in downstream workspaces (e.g., application clusters), orchestrating multi-tier infrastructure pipelines.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings/run-triggers",
    tags: ["Run Triggers", "Run Triggers", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-496",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "HCP Terraform Team Access and Role-Based Permissions: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Team Access to grant a team of developers permission to review plans and queue runs in a workspace without allowing them to edit workspace variables or delete the workspace.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Managing workspace permissions: Read, Plan, Write, and Admin across enterprise teams is under consideration.",
    options: [
      { id: 'A', text: "Assign the development team the `Write` permission on the workspace, reserving `Admin` for platform engineers." },
      { id: 'B', text: "Assign `Admin` permissions to all corporate employees." },
      { id: 'C', text: "Assign `Read` permissions which does not permit queuing runs." },
      { id: 'D', text: "Share a single organization owner account credential among all teams." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assign the development team the `Write` permission on the workspace, reserving `Admin` for platform engineers. HCP Terraform provides role-based access control (RBAC) on workspaces: `Read` (view state and outputs), `Plan` (queue speculative plans), `Write` (queue plans and applies), and `Admin` (manage variables, VCS connections, and delete workspace). Scoping teams ensures least-privilege collaboration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/users-teams-organizations/permissions",
    tags: ["Team Access", "HCP RBAC", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-497",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "HCP Terraform Team Access and Role-Based Permissions: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Team Access to grant a team of developers permission to review plans and queue runs in a workspace without allowing them to edit workspace variables or delete the workspace.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Managing workspace permissions: Read, Plan, Write, and Admin across enterprise teams is under consideration.",
    options: [
      { id: 'A', text: "Assign the development team the `Write` permission on the workspace, reserving `Admin` for platform engineers." },
      { id: 'B', text: "Assign `Admin` permissions to all corporate employees." },
      { id: 'C', text: "Assign `Read` permissions which does not permit queuing runs." },
      { id: 'D', text: "Share a single organization owner account credential among all teams." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assign the development team the `Write` permission on the workspace, reserving `Admin` for platform engineers. HCP Terraform provides role-based access control (RBAC) on workspaces: `Read` (view state and outputs), `Plan` (queue speculative plans), `Write` (queue plans and applies), and `Admin` (manage variables, VCS connections, and delete workspace). Scoping teams ensures least-privilege collaboration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/users-teams-organizations/permissions",
    tags: ["Team Access", "HCP RBAC", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-498",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "HCP Terraform Team Access and Role-Based Permissions: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Team Access to grant a team of developers permission to review plans and queue runs in a workspace without allowing them to edit workspace variables or delete the workspace.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Managing workspace permissions: Read, Plan, Write, and Admin across enterprise teams is under consideration.",
    options: [
      { id: 'A', text: "Assign the development team the `Write` permission on the workspace, reserving `Admin` for platform engineers." },
      { id: 'B', text: "Assign `Admin` permissions to all corporate employees." },
      { id: 'C', text: "Assign `Read` permissions which does not permit queuing runs." },
      { id: 'D', text: "Share a single organization owner account credential among all teams." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assign the development team the `Write` permission on the workspace, reserving `Admin` for platform engineers. HCP Terraform provides role-based access control (RBAC) on workspaces: `Read` (view state and outputs), `Plan` (queue speculative plans), `Write` (queue plans and applies), and `Admin` (manage variables, VCS connections, and delete workspace). Scoping teams ensures least-privilege collaboration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/users-teams-organizations/permissions",
    tags: ["Team Access", "HCP RBAC", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-499",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "HCP Terraform Team Access and Role-Based Permissions: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Team Access to grant a team of developers permission to review plans and queue runs in a workspace without allowing them to edit workspace variables or delete the workspace.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Managing workspace permissions: Read, Plan, Write, and Admin across enterprise teams is under consideration.",
    options: [
      { id: 'A', text: "Assign the development team the `Write` permission on the workspace, reserving `Admin` for platform engineers." },
      { id: 'B', text: "Assign `Admin` permissions to all corporate employees." },
      { id: 'C', text: "Assign `Read` permissions which does not permit queuing runs." },
      { id: 'D', text: "Share a single organization owner account credential among all teams." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assign the development team the `Write` permission on the workspace, reserving `Admin` for platform engineers. HCP Terraform provides role-based access control (RBAC) on workspaces: `Read` (view state and outputs), `Plan` (queue speculative plans), `Write` (queue plans and applies), and `Admin` (manage variables, VCS connections, and delete workspace). Scoping teams ensures least-privilege collaboration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/users-teams-organizations/permissions",
    tags: ["Team Access", "HCP RBAC", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-500",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "HCP Terraform Team Access and Role-Based Permissions: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Team Access to grant a team of developers permission to review plans and queue runs in a workspace without allowing them to edit workspace variables or delete the workspace.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Managing workspace permissions: Read, Plan, Write, and Admin across enterprise teams is under consideration.",
    options: [
      { id: 'A', text: "Assign the development team the `Write` permission on the workspace, reserving `Admin` for platform engineers." },
      { id: 'B', text: "Assign `Admin` permissions to all corporate employees." },
      { id: 'C', text: "Assign `Read` permissions which does not permit queuing runs." },
      { id: 'D', text: "Share a single organization owner account credential among all teams." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assign the development team the `Write` permission on the workspace, reserving `Admin` for platform engineers. HCP Terraform provides role-based access control (RBAC) on workspaces: `Read` (view state and outputs), `Plan` (queue speculative plans), `Write` (queue plans and applies), and `Admin` (manage variables, VCS connections, and delete workspace). Scoping teams ensures least-privilege collaboration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/users-teams-organizations/permissions",
    tags: ["Team Access", "HCP RBAC", "Resilience Failure"]
  }
];

export default HASHICORP_TFP_QUESTIONS_20;
