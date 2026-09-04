export const HASHICORP_TFP_QUESTIONS_15 = [
  {
    id: "hashicorp-tfp-351",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Refactoring and Deprecation Warnings: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Module Lifecycle to notify consumers of an enterprise module that an input variable or module version is deprecated and will be removed in the next major release.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Emitting custom deprecation warnings using postcondition or validation messages is under consideration.",
    options: [
      { id: 'A', text: "Use variable validation rules or lifecycle postconditions to emit deprecation warnings when deprecated arguments are used." },
      { id: 'B', text: "Send an email to company employees hoping everyone reads it." },
      { id: 'C', text: "Delete the variable immediately, breaking all consumer pipelines without warning." },
      { id: 'D', text: "Rename the variable silently without updating documentation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use variable validation rules or lifecycle postconditions to emit deprecation warnings when deprecated arguments are used. Deprecating module parameters gracefully requires providing advance notice to consumers. Defining validation rules or custom check assertions highlights deprecated parameter usage during `terraform plan`, giving engineering teams time to transition before breaking changes occur.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Module Lifecycle", "Deprecation Warnings", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-352",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Refactoring and Deprecation Warnings: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Module Lifecycle to notify consumers of an enterprise module that an input variable or module version is deprecated and will be removed in the next major release.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Emitting custom deprecation warnings using postcondition or validation messages is under consideration.",
    options: [
      { id: 'A', text: "Use variable validation rules or lifecycle postconditions to emit deprecation warnings when deprecated arguments are used." },
      { id: 'B', text: "Send an email to company employees hoping everyone reads it." },
      { id: 'C', text: "Rename the variable silently without updating documentation." },
      { id: 'D', text: "Delete the variable immediately, breaking all consumer pipelines without warning." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use variable validation rules or lifecycle postconditions to emit deprecation warnings when deprecated arguments are used. Deprecating module parameters gracefully requires providing advance notice to consumers. Defining validation rules or custom check assertions highlights deprecated parameter usage during `terraform plan`, giving engineering teams time to transition before breaking changes occur.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Module Lifecycle", "Deprecation Warnings", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-353",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Refactoring and Deprecation Warnings: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Module Lifecycle to notify consumers of an enterprise module that an input variable or module version is deprecated and will be removed in the next major release.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Emitting custom deprecation warnings using postcondition or validation messages is under consideration.",
    options: [
      { id: 'A', text: "Delete the variable immediately, breaking all consumer pipelines without warning." },
      { id: 'B', text: "Send an email to company employees hoping everyone reads it." },
      { id: 'C', text: "Use variable validation rules or lifecycle postconditions to emit deprecation warnings when deprecated arguments are used." },
      { id: 'D', text: "Rename the variable silently without updating documentation." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use variable validation rules or lifecycle postconditions to emit deprecation warnings when deprecated arguments are used. Deprecating module parameters gracefully requires providing advance notice to consumers. Defining validation rules or custom check assertions highlights deprecated parameter usage during `terraform plan`, giving engineering teams time to transition before breaking changes occur.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Module Lifecycle", "Deprecation Warnings", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-354",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Refactoring and Deprecation Warnings: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Module Lifecycle to notify consumers of an enterprise module that an input variable or module version is deprecated and will be removed in the next major release.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Emitting custom deprecation warnings using postcondition or validation messages is under consideration.",
    options: [
      { id: 'A', text: "Send an email to company employees hoping everyone reads it." },
      { id: 'B', text: "Use variable validation rules or lifecycle postconditions to emit deprecation warnings when deprecated arguments are used." },
      { id: 'C', text: "Rename the variable silently without updating documentation." },
      { id: 'D', text: "Delete the variable immediately, breaking all consumer pipelines without warning." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use variable validation rules or lifecycle postconditions to emit deprecation warnings when deprecated arguments are used. Deprecating module parameters gracefully requires providing advance notice to consumers. Defining validation rules or custom check assertions highlights deprecated parameter usage during `terraform plan`, giving engineering teams time to transition before breaking changes occur.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Module Lifecycle", "Deprecation Warnings", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-355",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Refactoring and Deprecation Warnings: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Module Lifecycle to notify consumers of an enterprise module that an input variable or module version is deprecated and will be removed in the next major release.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Emitting custom deprecation warnings using postcondition or validation messages is under consideration.",
    options: [
      { id: 'A', text: "Rename the variable silently without updating documentation." },
      { id: 'B', text: "Delete the variable immediately, breaking all consumer pipelines without warning." },
      { id: 'C', text: "Send an email to company employees hoping everyone reads it." },
      { id: 'D', text: "Use variable validation rules or lifecycle postconditions to emit deprecation warnings when deprecated arguments are used." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use variable validation rules or lifecycle postconditions to emit deprecation warnings when deprecated arguments are used. Deprecating module parameters gracefully requires providing advance notice to consumers. Defining validation rules or custom check assertions highlights deprecated parameter usage during `terraform plan`, giving engineering teams time to transition before breaking changes occur.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Module Lifecycle", "Deprecation Warnings", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-356",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Blast Radius Reduction: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Blast Radius to prevent a minor update to an application DNS record from accidentally triggering recreation or locking on a production database cluster.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Structuring module state boundaries to minimize operational failure domains is under consideration.",
    options: [
      { id: 'A', text: "Run all deployments with `-target` to bypass state locking." },
      { id: 'B', text: "Put all production databases in the same state file as development testing tools." },
      { id: 'C', text: "Manage the entire enterprise infrastructure in a single monolithic Terraform root module." },
      { id: 'D', text: "Decompose infrastructure into independent state boundaries (networking, database, application compute) managed by separate configurations." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Decompose infrastructure into independent state boundaries (networking, database, application compute) managed by separate configurations. Large, monolithic state files create enormous operational blast radiuses: an error in one resource can halt all provisioning, state locking causes bottlenecks, and plan generation becomes slow. Dividing architecture into decoupled state boundaries minimizes risk and isolates failures.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/organization",
    tags: ["Blast Radius", "Blast Radius Reduction", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-357",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Blast Radius Reduction: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Blast Radius to prevent a minor update to an application DNS record from accidentally triggering recreation or locking on a production database cluster.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Structuring module state boundaries to minimize operational failure domains is under consideration.",
    options: [
      { id: 'A', text: "Run all deployments with `-target` to bypass state locking." },
      { id: 'B', text: "Decompose infrastructure into independent state boundaries (networking, database, application compute) managed by separate configurations." },
      { id: 'C', text: "Put all production databases in the same state file as development testing tools." },
      { id: 'D', text: "Manage the entire enterprise infrastructure in a single monolithic Terraform root module." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Decompose infrastructure into independent state boundaries (networking, database, application compute) managed by separate configurations. Large, monolithic state files create enormous operational blast radiuses: an error in one resource can halt all provisioning, state locking causes bottlenecks, and plan generation becomes slow. Dividing architecture into decoupled state boundaries minimizes risk and isolates failures.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/organization",
    tags: ["Blast Radius", "Blast Radius Reduction", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-358",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Blast Radius Reduction: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Blast Radius to prevent a minor update to an application DNS record from accidentally triggering recreation or locking on a production database cluster.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Structuring module state boundaries to minimize operational failure domains is under consideration.",
    options: [
      { id: 'A', text: "Put all production databases in the same state file as development testing tools." },
      { id: 'B', text: "Decompose infrastructure into independent state boundaries (networking, database, application compute) managed by separate configurations." },
      { id: 'C', text: "Manage the entire enterprise infrastructure in a single monolithic Terraform root module." },
      { id: 'D', text: "Run all deployments with `-target` to bypass state locking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Decompose infrastructure into independent state boundaries (networking, database, application compute) managed by separate configurations. Large, monolithic state files create enormous operational blast radiuses: an error in one resource can halt all provisioning, state locking causes bottlenecks, and plan generation becomes slow. Dividing architecture into decoupled state boundaries minimizes risk and isolates failures.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/organization",
    tags: ["Blast Radius", "Blast Radius Reduction", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-359",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Blast Radius Reduction: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Blast Radius to prevent a minor update to an application DNS record from accidentally triggering recreation or locking on a production database cluster.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Structuring module state boundaries to minimize operational failure domains is under consideration.",
    options: [
      { id: 'A', text: "Decompose infrastructure into independent state boundaries (networking, database, application compute) managed by separate configurations." },
      { id: 'B', text: "Put all production databases in the same state file as development testing tools." },
      { id: 'C', text: "Run all deployments with `-target` to bypass state locking." },
      { id: 'D', text: "Manage the entire enterprise infrastructure in a single monolithic Terraform root module." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Decompose infrastructure into independent state boundaries (networking, database, application compute) managed by separate configurations. Large, monolithic state files create enormous operational blast radiuses: an error in one resource can halt all provisioning, state locking causes bottlenecks, and plan generation becomes slow. Dividing architecture into decoupled state boundaries minimizes risk and isolates failures.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/organization",
    tags: ["Blast Radius", "Blast Radius Reduction", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-360",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Blast Radius Reduction: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Blast Radius to prevent a minor update to an application DNS record from accidentally triggering recreation or locking on a production database cluster.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Structuring module state boundaries to minimize operational failure domains is under consideration.",
    options: [
      { id: 'A', text: "Put all production databases in the same state file as development testing tools." },
      { id: 'B', text: "Run all deployments with `-target` to bypass state locking." },
      { id: 'C', text: "Manage the entire enterprise infrastructure in a single monolithic Terraform root module." },
      { id: 'D', text: "Decompose infrastructure into independent state boundaries (networking, database, application compute) managed by separate configurations." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Decompose infrastructure into independent state boundaries (networking, database, application compute) managed by separate configurations. Large, monolithic state files create enormous operational blast radiuses: an error in one resource can halt all provisioning, state locking causes bottlenecks, and plan generation becomes slow. Dividing architecture into decoupled state boundaries minimizes risk and isolates failures.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/organization",
    tags: ["Blast Radius", "Blast Radius Reduction", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-361",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Manipulating Complex State with terraform state mv: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Advanced State Manipulation to move an existing database resource `module.db.aws_rds_cluster.this` into a nested module `module.db.module.cluster.aws_rds_cluster.this` without recreation.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Renaming and moving resources within nested module hierarchies via state mv is under consideration.",
    options: [
      { id: 'A', text: "Edit the raw remote JSON state file in an external text editor." },
      { id: 'B', text: "Delete the cluster from AWS and re-provision it via apply." },
      { id: 'C', text: "Destroy the old module and recreate the database with empty data." },
      { id: 'D', text: "Execute `terraform state mv module.db.aws_rds_cluster.this module.db.module.cluster.aws_rds_cluster.this`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute `terraform state mv module.db.aws_rds_cluster.this module.db.module.cluster.aws_rds_cluster.this`. Refactoring nested module hierarchies requires updating state bindings. Running `terraform state mv` with full hierarchical resource addresses re-points the state metadata without touching the physical database, allowing architectural evolution with zero downtime.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/mv",
    tags: ["Advanced State Manipulation", "Nested state mv", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-362",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Manipulating Complex State with terraform state mv: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Advanced State Manipulation to move an existing database resource `module.db.aws_rds_cluster.this` into a nested module `module.db.module.cluster.aws_rds_cluster.this` without recreation.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Renaming and moving resources within nested module hierarchies via state mv is under consideration.",
    options: [
      { id: 'A', text: "Destroy the old module and recreate the database with empty data." },
      { id: 'B', text: "Execute `terraform state mv module.db.aws_rds_cluster.this module.db.module.cluster.aws_rds_cluster.this`." },
      { id: 'C', text: "Edit the raw remote JSON state file in an external text editor." },
      { id: 'D', text: "Delete the cluster from AWS and re-provision it via apply." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute `terraform state mv module.db.aws_rds_cluster.this module.db.module.cluster.aws_rds_cluster.this`. Refactoring nested module hierarchies requires updating state bindings. Running `terraform state mv` with full hierarchical resource addresses re-points the state metadata without touching the physical database, allowing architectural evolution with zero downtime.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/mv",
    tags: ["Advanced State Manipulation", "Nested state mv", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-363",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Manipulating Complex State with terraform state mv: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Advanced State Manipulation to move an existing database resource `module.db.aws_rds_cluster.this` into a nested module `module.db.module.cluster.aws_rds_cluster.this` without recreation.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Renaming and moving resources within nested module hierarchies via state mv is under consideration.",
    options: [
      { id: 'A', text: "Execute `terraform state mv module.db.aws_rds_cluster.this module.db.module.cluster.aws_rds_cluster.this`." },
      { id: 'B', text: "Destroy the old module and recreate the database with empty data." },
      { id: 'C', text: "Edit the raw remote JSON state file in an external text editor." },
      { id: 'D', text: "Delete the cluster from AWS and re-provision it via apply." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `terraform state mv module.db.aws_rds_cluster.this module.db.module.cluster.aws_rds_cluster.this`. Refactoring nested module hierarchies requires updating state bindings. Running `terraform state mv` with full hierarchical resource addresses re-points the state metadata without touching the physical database, allowing architectural evolution with zero downtime.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/mv",
    tags: ["Advanced State Manipulation", "Nested state mv", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-364",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Manipulating Complex State with terraform state mv: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Advanced State Manipulation to move an existing database resource `module.db.aws_rds_cluster.this` into a nested module `module.db.module.cluster.aws_rds_cluster.this` without recreation.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Renaming and moving resources within nested module hierarchies via state mv is under consideration.",
    options: [
      { id: 'A', text: "Edit the raw remote JSON state file in an external text editor." },
      { id: 'B', text: "Delete the cluster from AWS and re-provision it via apply." },
      { id: 'C', text: "Execute `terraform state mv module.db.aws_rds_cluster.this module.db.module.cluster.aws_rds_cluster.this`." },
      { id: 'D', text: "Destroy the old module and recreate the database with empty data." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `terraform state mv module.db.aws_rds_cluster.this module.db.module.cluster.aws_rds_cluster.this`. Refactoring nested module hierarchies requires updating state bindings. Running `terraform state mv` with full hierarchical resource addresses re-points the state metadata without touching the physical database, allowing architectural evolution with zero downtime.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/mv",
    tags: ["Advanced State Manipulation", "Nested state mv", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-365",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Manipulating Complex State with terraform state mv: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Advanced State Manipulation to move an existing database resource `module.db.aws_rds_cluster.this` into a nested module `module.db.module.cluster.aws_rds_cluster.this` without recreation.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Renaming and moving resources within nested module hierarchies via state mv is under consideration.",
    options: [
      { id: 'A', text: "Destroy the old module and recreate the database with empty data." },
      { id: 'B', text: "Delete the cluster from AWS and re-provision it via apply." },
      { id: 'C', text: "Edit the raw remote JSON state file in an external text editor." },
      { id: 'D', text: "Execute `terraform state mv module.db.aws_rds_cluster.this module.db.module.cluster.aws_rds_cluster.this`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute `terraform state mv module.db.aws_rds_cluster.this module.db.module.cluster.aws_rds_cluster.this`. Refactoring nested module hierarchies requires updating state bindings. Running `terraform state mv` with full hierarchical resource addresses re-points the state metadata without touching the physical database, allowing architectural evolution with zero downtime.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/mv",
    tags: ["Advanced State Manipulation", "Nested state mv", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-366",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Resolving State Lock Contention with force-unlock: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates State Lock Recovery to clear a stuck state lock on an S3 remote backend caused by an unexpected CI/CD agent process crash during `terraform apply`.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Safely releasing stuck locks using terraform force-unlock with Lock ID is under consideration.",
    options: [
      { id: 'A', text: "Obtain the unique Lock ID reported in the error message and run `terraform force-unlock &lt;LOCK_ID&gt;` after verifying no process is running." },
      { id: 'B', text: "Run `terraform apply -force` to overwrite the lock without unlocking." },
      { id: 'C', text: "Delete the entire S3 bucket containing the state file." },
      { id: 'D', text: "Delete the DynamoDB state locking table in AWS." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Obtain the unique Lock ID reported in the error message and run `terraform force-unlock &lt;LOCK_ID&gt;` after verifying no process is running. If a process terminates abnormally while holding a state lock, the lock remains in the backend. Running `terraform force-unlock &lt;LOCK_ID&gt;` safely removes the lock from the backend (e.g., DynamoDB), allowing future operations after confirming that no other process is actively mutating state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/force-unlock",
    tags: ["State Lock Recovery", "force-unlock", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-367",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Resolving State Lock Contention with force-unlock: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates State Lock Recovery to clear a stuck state lock on an S3 remote backend caused by an unexpected CI/CD agent process crash during `terraform apply`.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Safely releasing stuck locks using terraform force-unlock with Lock ID is under consideration.",
    options: [
      { id: 'A', text: "Delete the entire S3 bucket containing the state file." },
      { id: 'B', text: "Delete the DynamoDB state locking table in AWS." },
      { id: 'C', text: "Obtain the unique Lock ID reported in the error message and run `terraform force-unlock &lt;LOCK_ID&gt;` after verifying no process is running." },
      { id: 'D', text: "Run `terraform apply -force` to overwrite the lock without unlocking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Obtain the unique Lock ID reported in the error message and run `terraform force-unlock &lt;LOCK_ID&gt;` after verifying no process is running. If a process terminates abnormally while holding a state lock, the lock remains in the backend. Running `terraform force-unlock &lt;LOCK_ID&gt;` safely removes the lock from the backend (e.g., DynamoDB), allowing future operations after confirming that no other process is actively mutating state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/force-unlock",
    tags: ["State Lock Recovery", "force-unlock", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-368",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Resolving State Lock Contention with force-unlock: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates State Lock Recovery to clear a stuck state lock on an S3 remote backend caused by an unexpected CI/CD agent process crash during `terraform apply`.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Safely releasing stuck locks using terraform force-unlock with Lock ID is under consideration.",
    options: [
      { id: 'A', text: "Delete the DynamoDB state locking table in AWS." },
      { id: 'B', text: "Run `terraform apply -force` to overwrite the lock without unlocking." },
      { id: 'C', text: "Delete the entire S3 bucket containing the state file." },
      { id: 'D', text: "Obtain the unique Lock ID reported in the error message and run `terraform force-unlock &lt;LOCK_ID&gt;` after verifying no process is running." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Obtain the unique Lock ID reported in the error message and run `terraform force-unlock &lt;LOCK_ID&gt;` after verifying no process is running. If a process terminates abnormally while holding a state lock, the lock remains in the backend. Running `terraform force-unlock &lt;LOCK_ID&gt;` safely removes the lock from the backend (e.g., DynamoDB), allowing future operations after confirming that no other process is actively mutating state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/force-unlock",
    tags: ["State Lock Recovery", "force-unlock", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-369",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Resolving State Lock Contention with force-unlock: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates State Lock Recovery to clear a stuck state lock on an S3 remote backend caused by an unexpected CI/CD agent process crash during `terraform apply`.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Safely releasing stuck locks using terraform force-unlock with Lock ID is under consideration.",
    options: [
      { id: 'A', text: "Delete the DynamoDB state locking table in AWS." },
      { id: 'B', text: "Run `terraform apply -force` to overwrite the lock without unlocking." },
      { id: 'C', text: "Obtain the unique Lock ID reported in the error message and run `terraform force-unlock &lt;LOCK_ID&gt;` after verifying no process is running." },
      { id: 'D', text: "Delete the entire S3 bucket containing the state file." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Obtain the unique Lock ID reported in the error message and run `terraform force-unlock &lt;LOCK_ID&gt;` after verifying no process is running. If a process terminates abnormally while holding a state lock, the lock remains in the backend. Running `terraform force-unlock &lt;LOCK_ID&gt;` safely removes the lock from the backend (e.g., DynamoDB), allowing future operations after confirming that no other process is actively mutating state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/force-unlock",
    tags: ["State Lock Recovery", "force-unlock", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-370",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Resolving State Lock Contention with force-unlock: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates State Lock Recovery to clear a stuck state lock on an S3 remote backend caused by an unexpected CI/CD agent process crash during `terraform apply`.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Safely releasing stuck locks using terraform force-unlock with Lock ID is under consideration.",
    options: [
      { id: 'A', text: "Obtain the unique Lock ID reported in the error message and run `terraform force-unlock &lt;LOCK_ID&gt;` after verifying no process is running." },
      { id: 'B', text: "Delete the DynamoDB state locking table in AWS." },
      { id: 'C', text: "Run `terraform apply -force` to overwrite the lock without unlocking." },
      { id: 'D', text: "Delete the entire S3 bucket containing the state file." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Obtain the unique Lock ID reported in the error message and run `terraform force-unlock &lt;LOCK_ID&gt;` after verifying no process is running. If a process terminates abnormally while holding a state lock, the lock remains in the backend. Running `terraform force-unlock &lt;LOCK_ID&gt;` safely removes the lock from the backend (e.g., DynamoDB), allowing future operations after confirming that no other process is actively mutating state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/force-unlock",
    tags: ["State Lock Recovery", "force-unlock", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-371",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Recovering from Partial Apply Failures: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Partial Apply to reconcile state when a network timeout terminates a `terraform apply` after provisioning 5 out of 10 declared resources.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Inspecting and repairing state when a network failure interrupts terraform apply mid-run is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform destroy` immediately to delete all half-provisioned resources." },
      { id: 'B', text: "Assume all 10 resources were created and skip applying." },
      { id: 'C', text: "Run `terraform refresh` or `terraform plan` to allow Terraform to reconcile state with live infrastructure, then resume with `apply`." },
      { id: 'D', text: "Delete the state file and run `terraform apply` from scratch." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run `terraform refresh` or `terraform plan` to allow Terraform to reconcile state with live infrastructure, then resume with `apply`. Terraform writes state incrementally during `apply`. If an apply fails halfway through, resources created prior to the failure are recorded in state. Running `terraform plan` inspects live infrastructure, recognizes what exists, and plans only the remaining un-provisioned resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose#failure-recovery",
    tags: ["Partial Apply", "Partial Apply Recovery", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-372",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Recovering from Partial Apply Failures: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Partial Apply to reconcile state when a network timeout terminates a `terraform apply` after provisioning 5 out of 10 declared resources.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Inspecting and repairing state when a network failure interrupts terraform apply mid-run is under consideration.",
    options: [
      { id: 'A', text: "Assume all 10 resources were created and skip applying." },
      { id: 'B', text: "Run `terraform refresh` or `terraform plan` to allow Terraform to reconcile state with live infrastructure, then resume with `apply`." },
      { id: 'C', text: "Delete the state file and run `terraform apply` from scratch." },
      { id: 'D', text: "Run `terraform destroy` immediately to delete all half-provisioned resources." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run `terraform refresh` or `terraform plan` to allow Terraform to reconcile state with live infrastructure, then resume with `apply`. Terraform writes state incrementally during `apply`. If an apply fails halfway through, resources created prior to the failure are recorded in state. Running `terraform plan` inspects live infrastructure, recognizes what exists, and plans only the remaining un-provisioned resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose#failure-recovery",
    tags: ["Partial Apply", "Partial Apply Recovery", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-373",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Recovering from Partial Apply Failures: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Partial Apply to reconcile state when a network timeout terminates a `terraform apply` after provisioning 5 out of 10 declared resources.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Inspecting and repairing state when a network failure interrupts terraform apply mid-run is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform refresh` or `terraform plan` to allow Terraform to reconcile state with live infrastructure, then resume with `apply`." },
      { id: 'B', text: "Delete the state file and run `terraform apply` from scratch." },
      { id: 'C', text: "Run `terraform destroy` immediately to delete all half-provisioned resources." },
      { id: 'D', text: "Assume all 10 resources were created and skip applying." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform refresh` or `terraform plan` to allow Terraform to reconcile state with live infrastructure, then resume with `apply`. Terraform writes state incrementally during `apply`. If an apply fails halfway through, resources created prior to the failure are recorded in state. Running `terraform plan` inspects live infrastructure, recognizes what exists, and plans only the remaining un-provisioned resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose#failure-recovery",
    tags: ["Partial Apply", "Partial Apply Recovery", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-374",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Recovering from Partial Apply Failures: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Partial Apply to reconcile state when a network timeout terminates a `terraform apply` after provisioning 5 out of 10 declared resources.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Inspecting and repairing state when a network failure interrupts terraform apply mid-run is under consideration.",
    options: [
      { id: 'A', text: "Assume all 10 resources were created and skip applying." },
      { id: 'B', text: "Run `terraform destroy` immediately to delete all half-provisioned resources." },
      { id: 'C', text: "Delete the state file and run `terraform apply` from scratch." },
      { id: 'D', text: "Run `terraform refresh` or `terraform plan` to allow Terraform to reconcile state with live infrastructure, then resume with `apply`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Run `terraform refresh` or `terraform plan` to allow Terraform to reconcile state with live infrastructure, then resume with `apply`. Terraform writes state incrementally during `apply`. If an apply fails halfway through, resources created prior to the failure are recorded in state. Running `terraform plan` inspects live infrastructure, recognizes what exists, and plans only the remaining un-provisioned resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose#failure-recovery",
    tags: ["Partial Apply", "Partial Apply Recovery", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-375",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Recovering from Partial Apply Failures: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Partial Apply to reconcile state when a network timeout terminates a `terraform apply` after provisioning 5 out of 10 declared resources.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Inspecting and repairing state when a network failure interrupts terraform apply mid-run is under consideration.",
    options: [
      { id: 'A', text: "Delete the state file and run `terraform apply` from scratch." },
      { id: 'B', text: "Run `terraform refresh` or `terraform plan` to allow Terraform to reconcile state with live infrastructure, then resume with `apply`." },
      { id: 'C', text: "Assume all 10 resources were created and skip applying." },
      { id: 'D', text: "Run `terraform destroy` immediately to delete all half-provisioned resources." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run `terraform refresh` or `terraform plan` to allow Terraform to reconcile state with live infrastructure, then resume with `apply`. Terraform writes state incrementally during `apply`. If an apply fails halfway through, resources created prior to the failure are recorded in state. Running `terraform plan` inspects live infrastructure, recognizes what exists, and plans only the remaining un-provisioned resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose#failure-recovery",
    tags: ["Partial Apply", "Partial Apply Recovery", "Resilience Failure"]
  }
];

export default HASHICORP_TFP_QUESTIONS_15;
