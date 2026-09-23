export const HASHICORP_TFP_QUESTIONS_15 = [
  {
    id: "hashicorp-tfp-351",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Create, maintain, and use Terraform modules",
    title: "Module Refactoring and Deprecation Warnings: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Module Lifecycle to notify consumers of an enterprise module that an input variable or module version is deprecated and will be removed in the next major release.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Add a `check` block whose assertion warns when the deprecated argument is set." },
      { id: 'B', text: "Remove the variable in the next minor release and note the change in the module's own changelog." },
      { id: 'C', text: "Keep the variable but ignore its value, so consumers migrate at their own pace." },
      { id: 'D', text: "Rename the variable and add a `moved` block so the old name still resolves." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `check` block that asserts the deprecated input is unset. A failed check assertion is reported as a warning and never blocks the run, so consumers see the deprecation notice during plan and apply while their configurations keep working. Variable validation rules and postconditions are errors that halt the run, which would break every consumer at once. Removing the input in a minor release breaks semantic versioning, and a `moved` block only renames resources, not variables.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Module Lifecycle","Deprecation Warnings","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-352",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Create, maintain, and use Terraform modules",
    title: "Module Refactoring and Deprecation Warnings: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Module Lifecycle to notify consumers of an enterprise module that an input variable or module version is deprecated and will be removed in the next major release.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Add a `check` block whose assertion warns when the deprecated argument is set." },
      { id: 'B', text: "Rename the variable and add a `moved` block so the old name still resolves." },
      { id: 'C', text: "Remove the variable in the next minor release and note the change in the module's own changelog." },
      { id: 'D', text: "Keep the variable but ignore its value, so consumers migrate at their own pace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `check` block that asserts the deprecated input is unset. A failed check assertion is reported as a warning and never blocks the run, so consumers see the deprecation notice during plan and apply while their configurations keep working. Variable validation rules and postconditions are errors that halt the run, which would break every consumer at once. Removing the input in a minor release breaks semantic versioning, and a `moved` block only renames resources, not variables.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Module Lifecycle","Deprecation Warnings","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-353",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Create, maintain, and use Terraform modules",
    title: "Module Refactoring and Deprecation Warnings: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Module Lifecycle to notify consumers of an enterprise module that an input variable or module version is deprecated and will be removed in the next major release.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Keep the variable but ignore its value, so consumers migrate at their own pace." },
      { id: 'B', text: "Add a `check` block whose assertion warns when the deprecated argument is set." },
      { id: 'C', text: "Remove the variable in the next minor release and note the change in the module's own changelog." },
      { id: 'D', text: "Rename the variable and add a `moved` block so the old name still resolves." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use a `check` block that asserts the deprecated input is unset. A failed check assertion is reported as a warning and never blocks the run, so consumers see the deprecation notice during plan and apply while their configurations keep working. Variable validation rules and postconditions are errors that halt the run, which would break every consumer at once. Removing the input in a minor release breaks semantic versioning, and a `moved` block only renames resources, not variables.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Module Lifecycle","Deprecation Warnings","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-354",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Create, maintain, and use Terraform modules",
    title: "Module Refactoring and Deprecation Warnings: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Module Lifecycle to notify consumers of an enterprise module that an input variable or module version is deprecated and will be removed in the next major release.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Rename the variable and add a `moved` block so the old name still resolves." },
      { id: 'B', text: "Keep the variable but ignore its value, so consumers migrate at their own pace." },
      { id: 'C', text: "Remove the variable in the next minor release and note the change in the module's own changelog." },
      { id: 'D', text: "Add a `check` block whose assertion warns when the deprecated argument is set." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use a `check` block that asserts the deprecated input is unset. A failed check assertion is reported as a warning and never blocks the run, so consumers see the deprecation notice during plan and apply while their configurations keep working. Variable validation rules and postconditions are errors that halt the run, which would break every consumer at once. Removing the input in a minor release breaks semantic versioning, and a `moved` block only renames resources, not variables.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Module Lifecycle","Deprecation Warnings","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-355",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Create, maintain, and use Terraform modules",
    title: "Module Refactoring and Deprecation Warnings: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Module Lifecycle to notify consumers of an enterprise module that an input variable or module version is deprecated and will be removed in the next major release.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Add a `check` block whose assertion warns when the deprecated argument is set." },
      { id: 'B', text: "Remove the variable in the next minor release and note the change in the module's own changelog." },
      { id: 'C', text: "Keep the variable but ignore its value, so consumers migrate at their own pace." },
      { id: 'D', text: "Rename the variable and add a `moved` block so the old name still resolves." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `check` block that asserts the deprecated input is unset. A failed check assertion is reported as a warning and never blocks the run, so consumers see the deprecation notice during plan and apply while their configurations keep working. Variable validation rules and postconditions are errors that halt the run, which would break every consumer at once. Removing the input in a minor release breaks semantic versioning, and a `moved` block only renames resources, not variables.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Module Lifecycle","Deprecation Warnings","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-356",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "Develop collaborative Terraform workflows",
    title: "Module Blast Radius Reduction: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Blast Radius to prevent a minor update to an application DNS record from accidentally triggering recreation or locking on a production database cluster.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Keep one root module and separate the tiers with `-target` on each apply." },
      { id: 'B', text: "Split the estate into separate state boundaries for networking, data and compute." },
      { id: 'C', text: "Keep one state file per environment, holding every tier for that environment." },
      { id: 'D', text: "Keep one root module and separate the tiers into distinct Terraform workspaces instead." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Decompose infrastructure into independent state boundaries (networking, database, application compute) managed by separate configurations. Large, monolithic state files create enormous operational blast radiuses: an error in one resource can halt all provisioning, state locking causes bottlenecks, and plan generation becomes slow. Dividing architecture into decoupled state boundaries minimizes risk and isolates failures.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/organization",
    tags: ["Blast Radius","Blast Radius Reduction","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-357",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "Develop collaborative Terraform workflows",
    title: "Module Blast Radius Reduction: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Blast Radius to prevent a minor update to an application DNS record from accidentally triggering recreation or locking on a production database cluster.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Keep one state file per environment, holding every tier for that environment." },
      { id: 'B', text: "Keep one root module and separate the tiers into distinct Terraform workspaces instead." },
      { id: 'C', text: "Keep one root module and separate the tiers with `-target` on each apply." },
      { id: 'D', text: "Split the estate into separate state boundaries for networking, data and compute." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Decompose infrastructure into independent state boundaries (networking, database, application compute) managed by separate configurations. Large, monolithic state files create enormous operational blast radiuses: an error in one resource can halt all provisioning, state locking causes bottlenecks, and plan generation becomes slow. Dividing architecture into decoupled state boundaries minimizes risk and isolates failures.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/organization",
    tags: ["Blast Radius","Blast Radius Reduction","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-358",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "Develop collaborative Terraform workflows",
    title: "Module Blast Radius Reduction: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Blast Radius to prevent a minor update to an application DNS record from accidentally triggering recreation or locking on a production database cluster.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Keep one root module and separate the tiers into distinct Terraform workspaces instead." },
      { id: 'B', text: "Keep one state file per environment, holding every tier for that environment." },
      { id: 'C', text: "Split the estate into separate state boundaries for networking, data and compute." },
      { id: 'D', text: "Keep one root module and separate the tiers with `-target` on each apply." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Decompose infrastructure into independent state boundaries (networking, database, application compute) managed by separate configurations. Large, monolithic state files create enormous operational blast radiuses: an error in one resource can halt all provisioning, state locking causes bottlenecks, and plan generation becomes slow. Dividing architecture into decoupled state boundaries minimizes risk and isolates failures.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/organization",
    tags: ["Blast Radius","Blast Radius Reduction","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-359",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "Develop collaborative Terraform workflows",
    title: "Module Blast Radius Reduction: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Blast Radius to prevent a minor update to an application DNS record from accidentally triggering recreation or locking on a production database cluster.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Split the estate into separate state boundaries for networking, data and compute." },
      { id: 'B', text: "Keep one root module and separate the tiers with `-target` on each apply." },
      { id: 'C', text: "Keep one root module and separate the tiers into distinct Terraform workspaces instead." },
      { id: 'D', text: "Keep one state file per environment, holding every tier for that environment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Decompose infrastructure into independent state boundaries (networking, database, application compute) managed by separate configurations. Large, monolithic state files create enormous operational blast radiuses: an error in one resource can halt all provisioning, state locking causes bottlenecks, and plan generation becomes slow. Dividing architecture into decoupled state boundaries minimizes risk and isolates failures.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/organization",
    tags: ["Blast Radius","Blast Radius Reduction","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-360",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "Develop collaborative Terraform workflows",
    title: "Module Blast Radius Reduction: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Blast Radius to prevent a minor update to an application DNS record from accidentally triggering recreation or locking on a production database cluster.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Split the estate into separate state boundaries for networking, data and compute." },
      { id: 'B', text: "Keep one root module and separate the tiers with `-target` on each apply." },
      { id: 'C', text: "Keep one root module and separate the tiers into distinct Terraform workspaces instead." },
      { id: 'D', text: "Keep one state file per environment, holding every tier for that environment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Decompose infrastructure into independent state boundaries (networking, database, application compute) managed by separate configurations. Large, monolithic state files create enormous operational blast radiuses: an error in one resource can halt all provisioning, state locking causes bottlenecks, and plan generation becomes slow. Dividing architecture into decoupled state boundaries minimizes risk and isolates failures.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/organization",
    tags: ["Blast Radius","Blast Radius Reduction","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-361",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "Manipulating Complex State with terraform state mv: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Advanced State Manipulation to move an existing database resource `module.db.aws_rds_cluster.this` into a nested module `module.db.module.cluster.aws_rds_cluster.this` without recreation.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Add a `moved` block in the configuration naming the old and new addresses." },
      { id: 'B', text: "Run `terraform import` at the new address after removing the old one." },
      { id: 'C', text: "Run `terraform state mv` for the resource's old address to its new one." },
      { id: 'D', text: "Run `terraform state replace-provider` for the module's resources." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `terraform state mv module.db.aws_rds_cluster.this module.db.module.cluster.aws_rds_cluster.this`. Refactoring nested module hierarchies requires updating state bindings. Running `terraform state mv` with full hierarchical resource addresses re-points the state metadata without touching the physical database, allowing architectural evolution with zero downtime.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/mv",
    tags: ["Advanced State Manipulation","Nested state mv","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-362",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "Manipulating Complex State with terraform state mv: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Advanced State Manipulation to move an existing database resource `module.db.aws_rds_cluster.this` into a nested module `module.db.module.cluster.aws_rds_cluster.this` without recreation.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Run `terraform import` at the new address after removing the old one." },
      { id: 'B', text: "Add a `moved` block in the configuration naming the old and new addresses." },
      { id: 'C', text: "Run `terraform state replace-provider` for the module's resources." },
      { id: 'D', text: "Run `terraform state mv` for the resource's old address to its new one." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute `terraform state mv module.db.aws_rds_cluster.this module.db.module.cluster.aws_rds_cluster.this`. Refactoring nested module hierarchies requires updating state bindings. Running `terraform state mv` with full hierarchical resource addresses re-points the state metadata without touching the physical database, allowing architectural evolution with zero downtime.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/mv",
    tags: ["Advanced State Manipulation","Nested state mv","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-363",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "Manipulating Complex State with terraform state mv: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Advanced State Manipulation to move an existing database resource `module.db.aws_rds_cluster.this` into a nested module `module.db.module.cluster.aws_rds_cluster.this` without recreation.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Run `terraform state mv` for the resource's old address to its new one." },
      { id: 'B', text: "Run `terraform import` at the new address after removing the old one." },
      { id: 'C', text: "Run `terraform state replace-provider` for the module's resources." },
      { id: 'D', text: "Add a `moved` block in the configuration naming the old and new addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `terraform state mv module.db.aws_rds_cluster.this module.db.module.cluster.aws_rds_cluster.this`. Refactoring nested module hierarchies requires updating state bindings. Running `terraform state mv` with full hierarchical resource addresses re-points the state metadata without touching the physical database, allowing architectural evolution with zero downtime.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/mv",
    tags: ["Advanced State Manipulation","Nested state mv","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-364",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "Manipulating Complex State with terraform state mv: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Advanced State Manipulation to move an existing database resource `module.db.aws_rds_cluster.this` into a nested module `module.db.module.cluster.aws_rds_cluster.this` without recreation.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Run `terraform state mv` for the resource's old address to its new one." },
      { id: 'B', text: "Run `terraform import` at the new address after removing the old one." },
      { id: 'C', text: "Run `terraform state replace-provider` for the module's resources." },
      { id: 'D', text: "Add a `moved` block in the configuration naming the old and new addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `terraform state mv module.db.aws_rds_cluster.this module.db.module.cluster.aws_rds_cluster.this`. Refactoring nested module hierarchies requires updating state bindings. Running `terraform state mv` with full hierarchical resource addresses re-points the state metadata without touching the physical database, allowing architectural evolution with zero downtime.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/mv",
    tags: ["Advanced State Manipulation","Nested state mv","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-365",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "Manipulating Complex State with terraform state mv: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Advanced State Manipulation to move an existing database resource `module.db.aws_rds_cluster.this` into a nested module `module.db.module.cluster.aws_rds_cluster.this` without recreation.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Run `terraform state mv` for the resource's old address to its new one." },
      { id: 'B', text: "Run `terraform import` at the new address after removing the old one." },
      { id: 'C', text: "Run `terraform state replace-provider` for the module's resources." },
      { id: 'D', text: "Add a `moved` block in the configuration naming the old and new addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `terraform state mv module.db.aws_rds_cluster.this module.db.module.cluster.aws_rds_cluster.this`. Refactoring nested module hierarchies requires updating state bindings. Running `terraform state mv` with full hierarchical resource addresses re-points the state metadata without touching the physical database, allowing architectural evolution with zero downtime.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/mv",
    tags: ["Advanced State Manipulation","Nested state mv","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-366",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "Develop collaborative Terraform workflows",
    title: "Resolving State Lock Contention with force-unlock: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates State Lock Recovery to clear a stuck state lock on an S3 remote backend caused by an unexpected CI/CD agent process crash during `terraform apply`.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Take the Lock ID from the error and `force-unlock` once no run is active." },
      { id: 'B', text: "Delete the lock item from the DynamoDB table so the next run acquires a new one." },
      { id: 'C', text: "Roll the state object back to its previous S3 version, which clears the lock flag." },
      { id: 'D', text: "Run `terraform apply -lock=false`, which proceeds without taking the state lock." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Obtain the unique Lock ID reported in the error message and run `terraform force-unlock &lt;LOCK_ID&gt;` after verifying no process is running. If a process terminates abnormally while holding a state lock, the lock remains in the backend. Running `terraform force-unlock &lt;LOCK_ID&gt;` safely removes the lock from the backend (e.g., DynamoDB), allowing future operations after confirming that no other process is actively mutating state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/force-unlock",
    tags: ["State Lock Recovery","force-unlock","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-367",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "Develop collaborative Terraform workflows",
    title: "Resolving State Lock Contention with force-unlock: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates State Lock Recovery to clear a stuck state lock on an S3 remote backend caused by an unexpected CI/CD agent process crash during `terraform apply`.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Take the Lock ID from the error and `force-unlock` once no run is active." },
      { id: 'B', text: "Delete the lock item from the DynamoDB table so the next run acquires a new one." },
      { id: 'C', text: "Roll the state object back to its previous S3 version, which clears the lock flag." },
      { id: 'D', text: "Run `terraform apply -lock=false`, which proceeds without taking the state lock." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Obtain the unique Lock ID reported in the error message and run `terraform force-unlock &lt;LOCK_ID&gt;` after verifying no process is running. If a process terminates abnormally while holding a state lock, the lock remains in the backend. Running `terraform force-unlock &lt;LOCK_ID&gt;` safely removes the lock from the backend (e.g., DynamoDB), allowing future operations after confirming that no other process is actively mutating state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/force-unlock",
    tags: ["State Lock Recovery","force-unlock","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-368",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "Develop collaborative Terraform workflows",
    title: "Resolving State Lock Contention with force-unlock: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates State Lock Recovery to clear a stuck state lock on an S3 remote backend caused by an unexpected CI/CD agent process crash during `terraform apply`.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Run `terraform apply -lock=false`, which proceeds without taking the state lock." },
      { id: 'B', text: "Take the Lock ID from the error and `force-unlock` once no run is active." },
      { id: 'C', text: "Roll the state object back to its previous S3 version, which clears the lock flag." },
      { id: 'D', text: "Delete the lock item from the DynamoDB table so the next run acquires a new one." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Obtain the unique Lock ID reported in the error message and run `terraform force-unlock &lt;LOCK_ID&gt;` after verifying no process is running. If a process terminates abnormally while holding a state lock, the lock remains in the backend. Running `terraform force-unlock &lt;LOCK_ID&gt;` safely removes the lock from the backend (e.g., DynamoDB), allowing future operations after confirming that no other process is actively mutating state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/force-unlock",
    tags: ["State Lock Recovery","force-unlock","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-369",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "Develop collaborative Terraform workflows",
    title: "Resolving State Lock Contention with force-unlock: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates State Lock Recovery to clear a stuck state lock on an S3 remote backend caused by an unexpected CI/CD agent process crash during `terraform apply`.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Run `terraform apply -lock=false`, which proceeds without taking the state lock." },
      { id: 'B', text: "Roll the state object back to its previous S3 version, which clears the lock flag." },
      { id: 'C', text: "Delete the lock item from the DynamoDB table so the next run acquires a new one." },
      { id: 'D', text: "Take the Lock ID from the error and `force-unlock` once no run is active." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Obtain the unique Lock ID reported in the error message and run `terraform force-unlock &lt;LOCK_ID&gt;` after verifying no process is running. If a process terminates abnormally while holding a state lock, the lock remains in the backend. Running `terraform force-unlock &lt;LOCK_ID&gt;` safely removes the lock from the backend (e.g., DynamoDB), allowing future operations after confirming that no other process is actively mutating state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/force-unlock",
    tags: ["State Lock Recovery","force-unlock","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-370",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "Develop collaborative Terraform workflows",
    title: "Resolving State Lock Contention with force-unlock: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates State Lock Recovery to clear a stuck state lock on an S3 remote backend caused by an unexpected CI/CD agent process crash during `terraform apply`.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Take the Lock ID from the error and `force-unlock` once no run is active." },
      { id: 'B', text: "Delete the lock item from the DynamoDB table so the next run acquires a new one." },
      { id: 'C', text: "Roll the state object back to its previous S3 version, which clears the lock flag." },
      { id: 'D', text: "Run `terraform apply -lock=false`, which proceeds without taking the state lock." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Obtain the unique Lock ID reported in the error message and run `terraform force-unlock &lt;LOCK_ID&gt;` after verifying no process is running. If a process terminates abnormally while holding a state lock, the lock remains in the backend. Running `terraform force-unlock &lt;LOCK_ID&gt;` safely removes the lock from the backend (e.g., DynamoDB), allowing future operations after confirming that no other process is actively mutating state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/force-unlock",
    tags: ["State Lock Recovery","force-unlock","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-371",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "Recovering from Partial Apply Failures: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Partial Apply to reconcile state when a network timeout terminates a `terraform apply` after provisioning 5 out of 10 declared resources.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Run `terraform state rm` for the ten resources and let the next apply recreate them." },
      { id: 'B', text: "Run `terraform import` for each of the ten resources before applying once more." },
      { id: 'C', text: "Run `terraform destroy -target` on the partially created resources, then apply." },
      { id: 'D', text: "Run `terraform plan` so the state is reconciled with what exists, then apply again." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Run `terraform plan` (the standalone `terraform refresh` command is deprecated) to allow Terraform to reconcile state with live infrastructure, then resume with `apply`. Terraform writes state incrementally during `apply`. If an apply fails halfway through, resources created prior to the failure are recorded in state. Running `terraform plan` inspects live infrastructure, recognizes what exists, and plans only the remaining un-provisioned resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose#failure-recovery",
    tags: ["Partial Apply","Partial Apply Recovery","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-372",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "Recovering from Partial Apply Failures: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Partial Apply to reconcile state when a network timeout terminates a `terraform apply` after provisioning 5 out of 10 declared resources.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Run `terraform plan` so the state is reconciled with what exists, then apply again." },
      { id: 'B', text: "Run `terraform import` for each of the ten resources before applying once more." },
      { id: 'C', text: "Run `terraform state rm` for the ten resources and let the next apply recreate them." },
      { id: 'D', text: "Run `terraform destroy -target` on the partially created resources, then apply." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform plan` (the standalone `terraform refresh` command is deprecated) to allow Terraform to reconcile state with live infrastructure, then resume with `apply`. Terraform writes state incrementally during `apply`. If an apply fails halfway through, resources created prior to the failure are recorded in state. Running `terraform plan` inspects live infrastructure, recognizes what exists, and plans only the remaining un-provisioned resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose#failure-recovery",
    tags: ["Partial Apply","Partial Apply Recovery","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-373",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "Recovering from Partial Apply Failures: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Partial Apply to reconcile state when a network timeout terminates a `terraform apply` after provisioning 5 out of 10 declared resources.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Run `terraform plan` so the state is reconciled with what exists, then apply again." },
      { id: 'B', text: "Run `terraform destroy -target` on the partially created resources, then apply." },
      { id: 'C', text: "Run `terraform import` for each of the ten resources before applying once more." },
      { id: 'D', text: "Run `terraform state rm` for the ten resources and let the next apply recreate them." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform plan` (the standalone `terraform refresh` command is deprecated) to allow Terraform to reconcile state with live infrastructure, then resume with `apply`. Terraform writes state incrementally during `apply`. If an apply fails halfway through, resources created prior to the failure are recorded in state. Running `terraform plan` inspects live infrastructure, recognizes what exists, and plans only the remaining un-provisioned resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose#failure-recovery",
    tags: ["Partial Apply","Partial Apply Recovery","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-374",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "Recovering from Partial Apply Failures: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Partial Apply to reconcile state when a network timeout terminates a `terraform apply` after provisioning 5 out of 10 declared resources.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Run `terraform destroy -target` on the partially created resources, then apply." },
      { id: 'B', text: "Run `terraform plan` so the state is reconciled with what exists, then apply again." },
      { id: 'C', text: "Run `terraform state rm` for the ten resources and let the next apply recreate them." },
      { id: 'D', text: "Run `terraform import` for each of the ten resources before applying once more." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run `terraform plan` (the standalone `terraform refresh` command is deprecated) to allow Terraform to reconcile state with live infrastructure, then resume with `apply`. Terraform writes state incrementally during `apply`. If an apply fails halfway through, resources created prior to the failure are recorded in state. Running `terraform plan` inspects live infrastructure, recognizes what exists, and plans only the remaining un-provisioned resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose#failure-recovery",
    tags: ["Partial Apply","Partial Apply Recovery","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-375",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "Recovering from Partial Apply Failures: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Partial Apply to reconcile state when a network timeout terminates a `terraform apply` after provisioning 5 out of 10 declared resources.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Run `terraform import` for each of the ten resources before applying once more." },
      { id: 'B', text: "Run `terraform state rm` for the ten resources and let the next apply recreate them." },
      { id: 'C', text: "Run `terraform plan` so the state is reconciled with what exists, then apply again." },
      { id: 'D', text: "Run `terraform destroy -target` on the partially created resources, then apply." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run `terraform plan` (the standalone `terraform refresh` command is deprecated) to allow Terraform to reconcile state with live infrastructure, then resume with `apply`. Terraform writes state incrementally during `apply`. If an apply fails halfway through, resources created prior to the failure are recorded in state. Running `terraform plan` inspects live infrastructure, recognizes what exists, and plans only the remaining un-provisioned resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose#failure-recovery",
    tags: ["Partial Apply","Partial Apply Recovery","Resilience Failure"]
  }
];

export default HASHICORP_TFP_QUESTIONS_15;
