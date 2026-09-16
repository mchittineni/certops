export const HASHICORP_TFA_QUESTIONS_11 = [
  {
    id: "hashicorp-tfa-251",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Declarative vs Imperative IaC Approaches: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to choose an infrastructure management paradigm that automatically calculates resource dependencies and only executes necessary state mutations.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "A declarative tool that describes the end state and lets the engine work out the changes." },
      { id: 'B', text: "An imperative script making the provider's API calls in the required order." },
      { id: 'C', text: "A configuration management tool that converges each host towards the role it has been given." },
      { id: 'D', text: "A procedural program that handles the retries and rollbacks for each call." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt a declarative IaC tool (such as Terraform) that defines the desired end-state and relies on the engine to calculate deltas and reconciliation steps. Declarative IaC allows engineers to define the target end-state of infrastructure. The IaC engine compares current state against desired state, determines necessary additions, modifications, or deletions, and builds an execution graph automatically, unlike imperative scripts that require procedural step management.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro",
    tags: ["IaC Paradigms","IaC Paradigms","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-252",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Declarative vs Imperative IaC Approaches: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to choose an infrastructure management paradigm that automatically calculates resource dependencies and only executes necessary state mutations.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "A declarative tool that describes the end state and lets the engine work out the changes." },
      { id: 'B', text: "An imperative script making the provider's API calls in the required order." },
      { id: 'C', text: "A configuration management tool that converges each host towards the role it has been given." },
      { id: 'D', text: "A procedural program that handles the retries and rollbacks for each call." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt a declarative IaC tool (such as Terraform) that defines the desired end-state and relies on the engine to calculate deltas and reconciliation steps. Declarative IaC allows engineers to define the target end-state of infrastructure. The IaC engine compares current state against desired state, determines necessary additions, modifications, or deletions, and builds an execution graph automatically, unlike imperative scripts that require procedural step management.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro",
    tags: ["IaC Paradigms","IaC Paradigms","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-253",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Declarative vs Imperative IaC Approaches: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to choose an infrastructure management paradigm that automatically calculates resource dependencies and only executes necessary state mutations.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "A configuration management tool that converges each host towards the role it has been given." },
      { id: 'B', text: "A procedural program that handles the retries and rollbacks for each call." },
      { id: 'C', text: "A declarative tool that describes the end state and lets the engine work out the changes." },
      { id: 'D', text: "An imperative script making the provider's API calls in the required order." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Adopt a declarative IaC tool (such as Terraform) that defines the desired end-state and relies on the engine to calculate deltas and reconciliation steps. Declarative IaC allows engineers to define the target end-state of infrastructure. The IaC engine compares current state against desired state, determines necessary additions, modifications, or deletions, and builds an execution graph automatically, unlike imperative scripts that require procedural step management.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro",
    tags: ["IaC Paradigms","IaC Paradigms","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-254",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Declarative vs Imperative IaC Approaches: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to choose an infrastructure management paradigm that automatically calculates resource dependencies and only executes necessary state mutations.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "A procedural program that handles the retries and rollbacks for each call." },
      { id: 'B', text: "A configuration management tool that converges each host towards the role it has been given." },
      { id: 'C', text: "An imperative script making the provider's API calls in the required order." },
      { id: 'D', text: "A declarative tool that describes the end state and lets the engine work out the changes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Adopt a declarative IaC tool (such as Terraform) that defines the desired end-state and relies on the engine to calculate deltas and reconciliation steps. Declarative IaC allows engineers to define the target end-state of infrastructure. The IaC engine compares current state against desired state, determines necessary additions, modifications, or deletions, and builds an execution graph automatically, unlike imperative scripts that require procedural step management.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro",
    tags: ["IaC Paradigms","IaC Paradigms","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-255",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Declarative vs Imperative IaC Approaches: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to choose an infrastructure management paradigm that automatically calculates resource dependencies and only executes necessary state mutations.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "An imperative script making the provider's API calls in the required order." },
      { id: 'B', text: "A procedural program that handles the retries and rollbacks for each call." },
      { id: 'C', text: "A configuration management tool that converges each host towards the role it has been given." },
      { id: 'D', text: "A declarative tool that describes the end state and lets the engine work out the changes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Adopt a declarative IaC tool (such as Terraform) that defines the desired end-state and relies on the engine to calculate deltas and reconciliation steps. Declarative IaC allows engineers to define the target end-state of infrastructure. The IaC engine compares current state against desired state, determines necessary additions, modifications, or deletions, and builds an execution graph automatically, unlike imperative scripts that require procedural step management.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro",
    tags: ["IaC Paradigms","IaC Paradigms","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-256",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Idempotency in Infrastructure Management: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to ensure that executing an automated infrastructure deployment pipeline multiple times consecutively without configuration changes does not create duplicate resources.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Use an idempotent tool, where applying an unchanged configuration makes no changes." },
      { id: 'B', text: "Destroy and recreate the whole infrastructure on each run so that the result is identical." },
      { id: 'C', text: "Keep a register of what has been provisioned and check it before each run." },
      { id: 'D', text: "Write scripts that check for each resource's existence before creating it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use an idempotent IaC tool like Terraform where running `apply` repeatedly on an unchanged configuration produces zero modifications. Idempotency is the property where an operation can be applied multiple times without changing the result beyond the initial application. In Terraform, running `terraform apply` against an existing, matching state produces no changes, preventing resource duplication and drift.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro/how-terraform-works",
    tags: ["Idempotency","Idempotency","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-257",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Idempotency in Infrastructure Management: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to ensure that executing an automated infrastructure deployment pipeline multiple times consecutively without configuration changes does not create duplicate resources.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Use an idempotent tool, where applying an unchanged configuration makes no changes." },
      { id: 'B', text: "Write scripts that check for each resource's existence before creating it." },
      { id: 'C', text: "Destroy and recreate the whole infrastructure on each run so that the result is identical." },
      { id: 'D', text: "Keep a register of what has been provisioned and check it before each run." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use an idempotent IaC tool like Terraform where running `apply` repeatedly on an unchanged configuration produces zero modifications. Idempotency is the property where an operation can be applied multiple times without changing the result beyond the initial application. In Terraform, running `terraform apply` against an existing, matching state produces no changes, preventing resource duplication and drift.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro/how-terraform-works",
    tags: ["Idempotency","Idempotency","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-258",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Idempotency in Infrastructure Management: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to ensure that executing an automated infrastructure deployment pipeline multiple times consecutively without configuration changes does not create duplicate resources.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Use an idempotent tool, where applying an unchanged configuration makes no changes." },
      { id: 'B', text: "Write scripts that check for each resource's existence before creating it." },
      { id: 'C', text: "Destroy and recreate the whole infrastructure on each run so that the result is identical." },
      { id: 'D', text: "Keep a register of what has been provisioned and check it before each run." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use an idempotent IaC tool like Terraform where running `apply` repeatedly on an unchanged configuration produces zero modifications. Idempotency is the property where an operation can be applied multiple times without changing the result beyond the initial application. In Terraform, running `terraform apply` against an existing, matching state produces no changes, preventing resource duplication and drift.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro/how-terraform-works",
    tags: ["Idempotency","Idempotency","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-259",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Idempotency in Infrastructure Management: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to ensure that executing an automated infrastructure deployment pipeline multiple times consecutively without configuration changes does not create duplicate resources.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Keep a register of what has been provisioned and check it before each run." },
      { id: 'B', text: "Destroy and recreate the whole infrastructure on each run so that the result is identical." },
      { id: 'C', text: "Write scripts that check for each resource's existence before creating it." },
      { id: 'D', text: "Use an idempotent tool, where applying an unchanged configuration makes no changes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use an idempotent IaC tool like Terraform where running `apply` repeatedly on an unchanged configuration produces zero modifications. Idempotency is the property where an operation can be applied multiple times without changing the result beyond the initial application. In Terraform, running `terraform apply` against an existing, matching state produces no changes, preventing resource duplication and drift.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro/how-terraform-works",
    tags: ["Idempotency","Idempotency","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-260",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Idempotency in Infrastructure Management: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to ensure that executing an automated infrastructure deployment pipeline multiple times consecutively without configuration changes does not create duplicate resources.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Use an idempotent tool, where applying an unchanged configuration makes no changes." },
      { id: 'B', text: "Write scripts that check for each resource's existence before creating it." },
      { id: 'C', text: "Destroy and recreate the whole infrastructure on each run so that the result is identical." },
      { id: 'D', text: "Keep a register of what has been provisioned and check it before each run." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use an idempotent IaC tool like Terraform where running `apply` repeatedly on an unchanged configuration produces zero modifications. Idempotency is the property where an operation can be applied multiple times without changing the result beyond the initial application. In Terraform, running `terraform apply` against an existing, matching state produces no changes, preventing resource duplication and drift.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro/how-terraform-works",
    tags: ["Idempotency","Idempotency","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-261",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Infrastructure Versioning and Collaboration in Git: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to enable multiple infrastructure engineers to propose, review, test, and audit cloud architecture modifications before applying them to production.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Keep the configuration in version control, with pull request review and CI plan checks." },
      { id: 'B', text: "Keep the configuration on a shared drive with a change log alongside it." },
      { id: 'C', text: "Keep the configuration in the workspace and export it after each change." },
      { id: 'D', text: "Keep the configuration in version control and apply it from each of the engineers' laptops." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store all Terraform configuration files in a Git version control repository governed by pull request reviews and CI plan checks. Treating infrastructure code as software source code (GitOps) enables peer code reviews, automated CI plan checks, commit history tracking, and reproducible rollbacks. Every infrastructure modification is audited and tied to specific commits and author identities.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/it-ops/github-actions",
    tags: ["IaC Versioning","IaC Versioning","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-262",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Infrastructure Versioning and Collaboration in Git: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to enable multiple infrastructure engineers to propose, review, test, and audit cloud architecture modifications before applying them to production.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Keep the configuration in the workspace and export it after each change." },
      { id: 'B', text: "Keep the configuration on a shared drive with a change log alongside it." },
      { id: 'C', text: "Keep the configuration in version control and apply it from each of the engineers' laptops." },
      { id: 'D', text: "Keep the configuration in version control, with pull request review and CI plan checks." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Store all Terraform configuration files in a Git version control repository governed by pull request reviews and CI plan checks. Treating infrastructure code as software source code (GitOps) enables peer code reviews, automated CI plan checks, commit history tracking, and reproducible rollbacks. Every infrastructure modification is audited and tied to specific commits and author identities.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/it-ops/github-actions",
    tags: ["IaC Versioning","IaC Versioning","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-263",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Infrastructure Versioning and Collaboration in Git: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to enable multiple infrastructure engineers to propose, review, test, and audit cloud architecture modifications before applying them to production.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Keep the configuration in version control and apply it from each of the engineers' laptops." },
      { id: 'B', text: "Keep the configuration on a shared drive with a change log alongside it." },
      { id: 'C', text: "Keep the configuration in version control, with pull request review and CI plan checks." },
      { id: 'D', text: "Keep the configuration in the workspace and export it after each change." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Store all Terraform configuration files in a Git version control repository governed by pull request reviews and CI plan checks. Treating infrastructure code as software source code (GitOps) enables peer code reviews, automated CI plan checks, commit history tracking, and reproducible rollbacks. Every infrastructure modification is audited and tied to specific commits and author identities.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/it-ops/github-actions",
    tags: ["IaC Versioning","IaC Versioning","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-264",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Infrastructure Versioning and Collaboration in Git: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to enable multiple infrastructure engineers to propose, review, test, and audit cloud architecture modifications before applying them to production.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Keep the configuration in the workspace and export it after each change." },
      { id: 'B', text: "Keep the configuration in version control, with pull request review and CI plan checks." },
      { id: 'C', text: "Keep the configuration on a shared drive with a change log alongside it." },
      { id: 'D', text: "Keep the configuration in version control and apply it from each of the engineers' laptops." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Store all Terraform configuration files in a Git version control repository governed by pull request reviews and CI plan checks. Treating infrastructure code as software source code (GitOps) enables peer code reviews, automated CI plan checks, commit history tracking, and reproducible rollbacks. Every infrastructure modification is audited and tied to specific commits and author identities.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/it-ops/github-actions",
    tags: ["IaC Versioning","IaC Versioning","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-265",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Infrastructure Versioning and Collaboration in Git: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to enable multiple infrastructure engineers to propose, review, test, and audit cloud architecture modifications before applying them to production.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Keep the configuration in the workspace and export it after each change." },
      { id: 'B', text: "Keep the configuration on a shared drive with a change log alongside it." },
      { id: 'C', text: "Keep the configuration in version control and apply it from each of the engineers' laptops." },
      { id: 'D', text: "Keep the configuration in version control, with pull request review and CI plan checks." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Store all Terraform configuration files in a Git version control repository governed by pull request reviews and CI plan checks. Treating infrastructure code as software source code (GitOps) enables peer code reviews, automated CI plan checks, commit history tracking, and reproducible rollbacks. Every infrastructure modification is audited and tied to specific commits and author identities.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/it-ops/github-actions",
    tags: ["IaC Versioning","IaC Versioning","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-266",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Configuration Drift and Remediation: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to detect when an engineer has manually modified a cloud firewall rule or instance size via the web console outside of approved Terraform configurations.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Run `terraform apply -auto-approve` on a schedule so that drift is corrected at once." },
      { id: 'B', text: "Run `terraform plan`, which compares state and configuration with reality." },
      { id: 'C', text: "Review the cloud provider's own change history against the last applied plan." },
      { id: 'D', text: "Run `terraform state list` and check each resource against the console by hand." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run `terraform plan` or `terraform refresh` to compare real-world infrastructure against the state and configuration, highlighting drift for remediation. Configuration drift occurs when real-world resources are altered out-of-band (via console, CLI, or other tools). Running `terraform plan` refreshes the state against live cloud APIs, detecting differences between real infrastructure and code, and proposing actions to reconcile drift.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/state/drift",
    tags: ["Configuration Drift","Configuration Drift","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-267",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Configuration Drift and Remediation: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to detect when an engineer has manually modified a cloud firewall rule or instance size via the web console outside of approved Terraform configurations.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Review the cloud provider's own change history against the last applied plan." },
      { id: 'B', text: "Run `terraform apply -auto-approve` on a schedule so that drift is corrected at once." },
      { id: 'C', text: "Run `terraform plan`, which compares state and configuration with reality." },
      { id: 'D', text: "Run `terraform state list` and check each resource against the console by hand." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run `terraform plan` or `terraform refresh` to compare real-world infrastructure against the state and configuration, highlighting drift for remediation. Configuration drift occurs when real-world resources are altered out-of-band (via console, CLI, or other tools). Running `terraform plan` refreshes the state against live cloud APIs, detecting differences between real infrastructure and code, and proposing actions to reconcile drift.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/state/drift",
    tags: ["Configuration Drift","Configuration Drift","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-268",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Configuration Drift and Remediation: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to detect when an engineer has manually modified a cloud firewall rule or instance size via the web console outside of approved Terraform configurations.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Run `terraform plan`, which compares state and configuration with reality." },
      { id: 'B', text: "Review the cloud provider's own change history against the last applied plan." },
      { id: 'C', text: "Run `terraform apply -auto-approve` on a schedule so that drift is corrected at once." },
      { id: 'D', text: "Run `terraform state list` and check each resource against the console by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform plan` or `terraform refresh` to compare real-world infrastructure against the state and configuration, highlighting drift for remediation. Configuration drift occurs when real-world resources are altered out-of-band (via console, CLI, or other tools). Running `terraform plan` refreshes the state against live cloud APIs, detecting differences between real infrastructure and code, and proposing actions to reconcile drift.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/state/drift",
    tags: ["Configuration Drift","Configuration Drift","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-269",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Configuration Drift and Remediation: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to detect when an engineer has manually modified a cloud firewall rule or instance size via the web console outside of approved Terraform configurations.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Run `terraform apply -auto-approve` on a schedule so that drift is corrected at once." },
      { id: 'B', text: "Run `terraform plan`, which compares state and configuration with reality." },
      { id: 'C', text: "Review the cloud provider's own change history against the last applied plan." },
      { id: 'D', text: "Run `terraform state list` and check each resource against the console by hand." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run `terraform plan` or `terraform refresh` to compare real-world infrastructure against the state and configuration, highlighting drift for remediation. Configuration drift occurs when real-world resources are altered out-of-band (via console, CLI, or other tools). Running `terraform plan` refreshes the state against live cloud APIs, detecting differences between real infrastructure and code, and proposing actions to reconcile drift.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/state/drift",
    tags: ["Configuration Drift","Configuration Drift","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-270",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Configuration Drift and Remediation: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to detect when an engineer has manually modified a cloud firewall rule or instance size via the web console outside of approved Terraform configurations.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Run `terraform state list` and check each resource against the console by hand." },
      { id: 'B', text: "Run `terraform apply -auto-approve` on a schedule so that drift is corrected at once." },
      { id: 'C', text: "Review the cloud provider's own change history against the last applied plan." },
      { id: 'D', text: "Run `terraform plan`, which compares state and configuration with reality." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Run `terraform plan` or `terraform refresh` to compare real-world infrastructure against the state and configuration, highlighting drift for remediation. Configuration drift occurs when real-world resources are altered out-of-band (via console, CLI, or other tools). Running `terraform plan` refreshes the state against live cloud APIs, detecting differences between real infrastructure and code, and proposing actions to reconcile drift.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/state/drift",
    tags: ["Configuration Drift","Configuration Drift","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-271",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Disposable and Immutable Infrastructure: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to upgrade operating systems and applications on cloud virtual machines without accumulating configuration drift or patch discrepancies over time.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Adopt immutable infrastructure: build a new image and replace the instances with it." },
      { id: 'B', text: "Adopt a configuration management agent that converges each running instance." },
      { id: 'C', text: "Adopt a patching window in which each instance is updated over SSH in turn." },
      { id: 'D', text: "Adopt a provisioner in the Terraform configuration that patches the host as it is created." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt immutable infrastructure practices where updated server images (AMIs) are deployed as new replacement instances, terminating old instances. Immutable infrastructure replaces servers entirely rather than updating them in-place. If an OS patch or application update is required, a new golden image is baked and deployed via Terraform, terminating old instances and ensuring consistency and reproducibility across environments.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro",
    tags: ["Immutable Infrastructure","Immutable Infrastructure","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-272",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Disposable and Immutable Infrastructure: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to upgrade operating systems and applications on cloud virtual machines without accumulating configuration drift or patch discrepancies over time.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Adopt immutable infrastructure: build a new image and replace the instances with it." },
      { id: 'B', text: "Adopt a patching window in which each instance is updated over SSH in turn." },
      { id: 'C', text: "Adopt a provisioner in the Terraform configuration that patches the host as it is created." },
      { id: 'D', text: "Adopt a configuration management agent that converges each running instance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt immutable infrastructure practices where updated server images (AMIs) are deployed as new replacement instances, terminating old instances. Immutable infrastructure replaces servers entirely rather than updating them in-place. If an OS patch or application update is required, a new golden image is baked and deployed via Terraform, terminating old instances and ensuring consistency and reproducibility across environments.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro",
    tags: ["Immutable Infrastructure","Immutable Infrastructure","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-273",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Disposable and Immutable Infrastructure: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to upgrade operating systems and applications on cloud virtual machines without accumulating configuration drift or patch discrepancies over time.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Adopt immutable infrastructure: build a new image and replace the instances with it." },
      { id: 'B', text: "Adopt a patching window in which each instance is updated over SSH in turn." },
      { id: 'C', text: "Adopt a provisioner in the Terraform configuration that patches the host as it is created." },
      { id: 'D', text: "Adopt a configuration management agent that converges each running instance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt immutable infrastructure practices where updated server images (AMIs) are deployed as new replacement instances, terminating old instances. Immutable infrastructure replaces servers entirely rather than updating them in-place. If an OS patch or application update is required, a new golden image is baked and deployed via Terraform, terminating old instances and ensuring consistency and reproducibility across environments.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro",
    tags: ["Immutable Infrastructure","Immutable Infrastructure","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-274",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Disposable and Immutable Infrastructure: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to upgrade operating systems and applications on cloud virtual machines without accumulating configuration drift or patch discrepancies over time.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Adopt immutable infrastructure: build a new image and replace the instances with it." },
      { id: 'B', text: "Adopt a patching window in which each instance is updated over SSH in turn." },
      { id: 'C', text: "Adopt a provisioner in the Terraform configuration that patches the host as it is created." },
      { id: 'D', text: "Adopt a configuration management agent that converges each running instance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt immutable infrastructure practices where updated server images (AMIs) are deployed as new replacement instances, terminating old instances. Immutable infrastructure replaces servers entirely rather than updating them in-place. If an OS patch or application update is required, a new golden image is baked and deployed via Terraform, terminating old instances and ensuring consistency and reproducibility across environments.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro",
    tags: ["Immutable Infrastructure","Immutable Infrastructure","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-275",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Disposable and Immutable Infrastructure: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to upgrade operating systems and applications on cloud virtual machines without accumulating configuration drift or patch discrepancies over time.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Adopt immutable infrastructure: build a new image and replace the instances with it." },
      { id: 'B', text: "Adopt a configuration management agent that converges each running instance." },
      { id: 'C', text: "Adopt a patching window in which each instance is updated over SSH in turn." },
      { id: 'D', text: "Adopt a provisioner in the Terraform configuration that patches the host as it is created." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt immutable infrastructure practices where updated server images (AMIs) are deployed as new replacement instances, terminating old instances. Immutable infrastructure replaces servers entirely rather than updating them in-place. If an OS patch or application update is required, a new golden image is baked and deployed via Terraform, terminating old instances and ensuring consistency and reproducibility across environments.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro",
    tags: ["Immutable Infrastructure","Immutable Infrastructure","Resilience Failure"]
  }
];

export default HASHICORP_TFA_QUESTIONS_11;
