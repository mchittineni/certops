export const HASHICORP_TFP_QUESTIONS_14 = [
  {
    id: "hashicorp-tfp-326",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Passing Provider Configurations to Child Modules: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Module Providers to pass an aliased AWS provider configuration for `us-west-2` into a child module that provisions secondary disaster recovery resources.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Passing explicit provider configurations using the providers meta-argument in module blocks is under consideration.",
    options: [
      { id: 'A', text: "Child modules automatically detect and choose the correct cloud region." },
      { id: 'B', text: "Specify `providers = { aws = aws.west }` inside the `module` invocation block." },
      { id: 'C', text: "Define a new `provider \"aws\"` block directly inside the child module code." },
      { id: 'D', text: "Export environment variables before calling each child module." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Specify `providers = { aws = aws.west }` inside the `module` invocation block. Child modules should not declare provider configurations directly; doing so creates tight coupling and inhibits reusability. Instead, the root module passes provider instances to child modules using the `providers` map meta-argument (`providers = { aws.alias_name = aws.root_alias }`).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/module-providers",
    tags: ["Module Providers", "Module Providers", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-327",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Passing Provider Configurations to Child Modules: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Module Providers to pass an aliased AWS provider configuration for `us-west-2` into a child module that provisions secondary disaster recovery resources.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Passing explicit provider configurations using the providers meta-argument in module blocks is under consideration.",
    options: [
      { id: 'A', text: "Specify `providers = { aws = aws.west }` inside the `module` invocation block." },
      { id: 'B', text: "Child modules automatically detect and choose the correct cloud region." },
      { id: 'C', text: "Define a new `provider \"aws\"` block directly inside the child module code." },
      { id: 'D', text: "Export environment variables before calling each child module." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `providers = { aws = aws.west }` inside the `module` invocation block. Child modules should not declare provider configurations directly; doing so creates tight coupling and inhibits reusability. Instead, the root module passes provider instances to child modules using the `providers` map meta-argument (`providers = { aws.alias_name = aws.root_alias }`).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/module-providers",
    tags: ["Module Providers", "Module Providers", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-328",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Passing Provider Configurations to Child Modules: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Module Providers to pass an aliased AWS provider configuration for `us-west-2` into a child module that provisions secondary disaster recovery resources.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Passing explicit provider configurations using the providers meta-argument in module blocks is under consideration.",
    options: [
      { id: 'A', text: "Specify `providers = { aws = aws.west }` inside the `module` invocation block." },
      { id: 'B', text: "Child modules automatically detect and choose the correct cloud region." },
      { id: 'C', text: "Export environment variables before calling each child module." },
      { id: 'D', text: "Define a new `provider \"aws\"` block directly inside the child module code." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `providers = { aws = aws.west }` inside the `module` invocation block. Child modules should not declare provider configurations directly; doing so creates tight coupling and inhibits reusability. Instead, the root module passes provider instances to child modules using the `providers` map meta-argument (`providers = { aws.alias_name = aws.root_alias }`).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/module-providers",
    tags: ["Module Providers", "Module Providers", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-329",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Passing Provider Configurations to Child Modules: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Module Providers to pass an aliased AWS provider configuration for `us-west-2` into a child module that provisions secondary disaster recovery resources.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Passing explicit provider configurations using the providers meta-argument in module blocks is under consideration.",
    options: [
      { id: 'A', text: "Export environment variables before calling each child module." },
      { id: 'B', text: "Define a new `provider \"aws\"` block directly inside the child module code." },
      { id: 'C', text: "Specify `providers = { aws = aws.west }` inside the `module` invocation block." },
      { id: 'D', text: "Child modules automatically detect and choose the correct cloud region." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specify `providers = { aws = aws.west }` inside the `module` invocation block. Child modules should not declare provider configurations directly; doing so creates tight coupling and inhibits reusability. Instead, the root module passes provider instances to child modules using the `providers` map meta-argument (`providers = { aws.alias_name = aws.root_alias }`).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/module-providers",
    tags: ["Module Providers", "Module Providers", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-330",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Passing Provider Configurations to Child Modules: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Module Providers to pass an aliased AWS provider configuration for `us-west-2` into a child module that provisions secondary disaster recovery resources.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Passing explicit provider configurations using the providers meta-argument in module blocks is under consideration.",
    options: [
      { id: 'A', text: "Define a new `provider \"aws\"` block directly inside the child module code." },
      { id: 'B', text: "Specify `providers = { aws = aws.west }` inside the `module` invocation block." },
      { id: 'C', text: "Child modules automatically detect and choose the correct cloud region." },
      { id: 'D', text: "Export environment variables before calling each child module." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Specify `providers = { aws = aws.west }` inside the `module` invocation block. Child modules should not declare provider configurations directly; doing so creates tight coupling and inhibits reusability. Instead, the root module passes provider instances to child modules using the `providers` map meta-argument (`providers = { aws.alias_name = aws.root_alias }`).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/module-providers",
    tags: ["Module Providers", "Module Providers", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-331",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Version Constraints and Pessimistic Pinning (~>): Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Module Pinning to consume an external registry module while ensuring the project automatically receives minor bug fixes but blocks breaking major API releases.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Preventing unexpected breaking updates using pessimistic version operators in module sources is under consideration.",
    options: [
      { id: 'A', text: "Omit the `version` argument, pulling the unverified latest commit on every run." },
      { id: 'B', text: "Specify `version = \"&gt;= 1.0\"` allowing all future major breaking changes." },
      { id: 'C', text: "Hardcode the Git commit hash without a version string." },
      { id: 'D', text: "Specify `version = \"~&gt; 3.2\"` in the `module` declaration block." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Specify `version = \"~&gt; 3.2\"` in the `module` declaration block. When sourcing modules from a registry, the `version` argument controls acceptable versions. The pessimistic constraint operator (`~&gt; 3.2`) allows updates to patch and minor versions within the `3.x` series (up to `&lt; 4.0`), protecting against breaking structural modifications.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#version",
    tags: ["Module Pinning", "Module Pinning", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-332",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Version Constraints and Pessimistic Pinning (~>): High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Module Pinning to consume an external registry module while ensuring the project automatically receives minor bug fixes but blocks breaking major API releases.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Preventing unexpected breaking updates using pessimistic version operators in module sources is under consideration.",
    options: [
      { id: 'A', text: "Omit the `version` argument, pulling the unverified latest commit on every run." },
      { id: 'B', text: "Hardcode the Git commit hash without a version string." },
      { id: 'C', text: "Specify `version = \"~&gt; 3.2\"` in the `module` declaration block." },
      { id: 'D', text: "Specify `version = \"&gt;= 1.0\"` allowing all future major breaking changes." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specify `version = \"~&gt; 3.2\"` in the `module` declaration block. When sourcing modules from a registry, the `version` argument controls acceptable versions. The pessimistic constraint operator (`~&gt; 3.2`) allows updates to patch and minor versions within the `3.x` series (up to `&lt; 4.0`), protecting against breaking structural modifications.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#version",
    tags: ["Module Pinning", "Module Pinning", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-333",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Version Constraints and Pessimistic Pinning (~>): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Module Pinning to consume an external registry module while ensuring the project automatically receives minor bug fixes but blocks breaking major API releases.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Preventing unexpected breaking updates using pessimistic version operators in module sources is under consideration.",
    options: [
      { id: 'A', text: "Specify `version = \"~&gt; 3.2\"` in the `module` declaration block." },
      { id: 'B', text: "Specify `version = \"&gt;= 1.0\"` allowing all future major breaking changes." },
      { id: 'C', text: "Hardcode the Git commit hash without a version string." },
      { id: 'D', text: "Omit the `version` argument, pulling the unverified latest commit on every run." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `version = \"~&gt; 3.2\"` in the `module` declaration block. When sourcing modules from a registry, the `version` argument controls acceptable versions. The pessimistic constraint operator (`~&gt; 3.2`) allows updates to patch and minor versions within the `3.x` series (up to `&lt; 4.0`), protecting against breaking structural modifications.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#version",
    tags: ["Module Pinning", "Module Pinning", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-334",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Version Constraints and Pessimistic Pinning (~>): Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Module Pinning to consume an external registry module while ensuring the project automatically receives minor bug fixes but blocks breaking major API releases.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Preventing unexpected breaking updates using pessimistic version operators in module sources is under consideration.",
    options: [
      { id: 'A', text: "Specify `version = \"~&gt; 3.2\"` in the `module` declaration block." },
      { id: 'B', text: "Omit the `version` argument, pulling the unverified latest commit on every run." },
      { id: 'C', text: "Specify `version = \"&gt;= 1.0\"` allowing all future major breaking changes." },
      { id: 'D', text: "Hardcode the Git commit hash without a version string." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `version = \"~&gt; 3.2\"` in the `module` declaration block. When sourcing modules from a registry, the `version` argument controls acceptable versions. The pessimistic constraint operator (`~&gt; 3.2`) allows updates to patch and minor versions within the `3.x` series (up to `&lt; 4.0`), protecting against breaking structural modifications.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#version",
    tags: ["Module Pinning", "Module Pinning", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-335",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Version Constraints and Pessimistic Pinning (~>): Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Module Pinning to consume an external registry module while ensuring the project automatically receives minor bug fixes but blocks breaking major API releases.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Preventing unexpected breaking updates using pessimistic version operators in module sources is under consideration.",
    options: [
      { id: 'A', text: "Omit the `version` argument, pulling the unverified latest commit on every run." },
      { id: 'B', text: "Specify `version = \"&gt;= 1.0\"` allowing all future major breaking changes." },
      { id: 'C', text: "Hardcode the Git commit hash without a version string." },
      { id: 'D', text: "Specify `version = \"~&gt; 3.2\"` in the `module` declaration block." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Specify `version = \"~&gt; 3.2\"` in the `module` declaration block. When sourcing modules from a registry, the `version` argument controls acceptable versions. The pessimistic constraint operator (`~&gt; 3.2`) allows updates to patch and minor versions within the `3.x` series (up to `&lt; 4.0`), protecting against breaking structural modifications.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#version",
    tags: ["Module Pinning", "Module Pinning", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-336",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Testing with the terraform test Framework: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Native Testing to validate that a reusable Terraform module correctly calculates CIDR subnets and sets resource tags without deploying real cloud resources.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Authoring unit and integration tests for modules using .tftest.hcl files is under consideration.",
    options: [
      { id: 'A', text: "Terraform does not support native testing frameworks." },
      { id: 'B', text: "Create a `tests/unit.tftest.hcl` file containing `run` blocks with `command = plan` and custom `assert` conditions." },
      { id: 'C', text: "Write custom Bash scripts parsing plan text outputs with grep." },
      { id: 'D', text: "Deploy the module to production and check if anyone complains." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a `tests/unit.tftest.hcl` file containing `run` blocks with `command = plan` and custom `assert` conditions. Terraform 1.6 introduced the native `terraform test` framework. Test files (`.tftest.hcl`) contain sequential `run` blocks that execute `plan` or `apply` commands against mock or live providers, validating assertions without requiring third-party tools like Terratest.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests",
    tags: ["Native Testing", "terraform test", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-337",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Testing with the terraform test Framework: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Native Testing to validate that a reusable Terraform module correctly calculates CIDR subnets and sets resource tags without deploying real cloud resources.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Authoring unit and integration tests for modules using .tftest.hcl files is under consideration.",
    options: [
      { id: 'A', text: "Create a `tests/unit.tftest.hcl` file containing `run` blocks with `command = plan` and custom `assert` conditions." },
      { id: 'B', text: "Write custom Bash scripts parsing plan text outputs with grep." },
      { id: 'C', text: "Terraform does not support native testing frameworks." },
      { id: 'D', text: "Deploy the module to production and check if anyone complains." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `tests/unit.tftest.hcl` file containing `run` blocks with `command = plan` and custom `assert` conditions. Terraform 1.6 introduced the native `terraform test` framework. Test files (`.tftest.hcl`) contain sequential `run` blocks that execute `plan` or `apply` commands against mock or live providers, validating assertions without requiring third-party tools like Terratest.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests",
    tags: ["Native Testing", "terraform test", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-338",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Testing with the terraform test Framework: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Native Testing to validate that a reusable Terraform module correctly calculates CIDR subnets and sets resource tags without deploying real cloud resources.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Authoring unit and integration tests for modules using .tftest.hcl files is under consideration.",
    options: [
      { id: 'A', text: "Terraform does not support native testing frameworks." },
      { id: 'B', text: "Write custom Bash scripts parsing plan text outputs with grep." },
      { id: 'C', text: "Create a `tests/unit.tftest.hcl` file containing `run` blocks with `command = plan` and custom `assert` conditions." },
      { id: 'D', text: "Deploy the module to production and check if anyone complains." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `tests/unit.tftest.hcl` file containing `run` blocks with `command = plan` and custom `assert` conditions. Terraform 1.6 introduced the native `terraform test` framework. Test files (`.tftest.hcl`) contain sequential `run` blocks that execute `plan` or `apply` commands against mock or live providers, validating assertions without requiring third-party tools like Terratest.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests",
    tags: ["Native Testing", "terraform test", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-339",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Testing with the terraform test Framework: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Native Testing to validate that a reusable Terraform module correctly calculates CIDR subnets and sets resource tags without deploying real cloud resources.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Authoring unit and integration tests for modules using .tftest.hcl files is under consideration.",
    options: [
      { id: 'A', text: "Write custom Bash scripts parsing plan text outputs with grep." },
      { id: 'B', text: "Deploy the module to production and check if anyone complains." },
      { id: 'C', text: "Terraform does not support native testing frameworks." },
      { id: 'D', text: "Create a `tests/unit.tftest.hcl` file containing `run` blocks with `command = plan` and custom `assert` conditions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a `tests/unit.tftest.hcl` file containing `run` blocks with `command = plan` and custom `assert` conditions. Terraform 1.6 introduced the native `terraform test` framework. Test files (`.tftest.hcl`) contain sequential `run` blocks that execute `plan` or `apply` commands against mock or live providers, validating assertions without requiring third-party tools like Terratest.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests",
    tags: ["Native Testing", "terraform test", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-340",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Testing with the terraform test Framework: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Native Testing to validate that a reusable Terraform module correctly calculates CIDR subnets and sets resource tags without deploying real cloud resources.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Authoring unit and integration tests for modules using .tftest.hcl files is under consideration.",
    options: [
      { id: 'A', text: "Create a `tests/unit.tftest.hcl` file containing `run` blocks with `command = plan` and custom `assert` conditions." },
      { id: 'B', text: "Write custom Bash scripts parsing plan text outputs with grep." },
      { id: 'C', text: "Terraform does not support native testing frameworks." },
      { id: 'D', text: "Deploy the module to production and check if anyone complains." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `tests/unit.tftest.hcl` file containing `run` blocks with `command = plan` and custom `assert` conditions. Terraform 1.6 introduced the native `terraform test` framework. Test files (`.tftest.hcl`) contain sequential `run` blocks that execute `plan` or `apply` commands against mock or live providers, validating assertions without requiring third-party tools like Terratest.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests",
    tags: ["Native Testing", "terraform test", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-341",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Mocking Providers in Module Tests: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Mock Testing to run fast, cost-free automated unit tests for a Terraform module in a pull request CI pipeline without granting AWS credentials.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Using mock_provider blocks to test module logic without cloud credentials is under consideration.",
    options: [
      { id: 'A', text: "Simulate cloud resources using local SQLite databases." },
      { id: 'B', text: "Skip all testing in CI pipelines to save cloud costs." },
      { id: 'C', text: "Use `mock_provider \"aws\" {}` blocks inside `.tftest.hcl` files to simulate provider responses without cloud API calls." },
      { id: 'D', text: "Grant full administrator AWS credentials to every untrusted pull request runner." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `mock_provider \"aws\" {}` blocks inside `.tftest.hcl` files to simulate provider responses without cloud API calls. Terraform 1.7 introduced provider mocking in `terraform test`. Defining a `mock_provider` block simulates resource creation and attribute return values in-memory, enabling thorough unit testing of module logic, loops, and conditions without real cloud credentials or infrastructure costs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests#mock-providers",
    tags: ["Mock Testing", "Mock Providers", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-342",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Mocking Providers in Module Tests: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Mock Testing to run fast, cost-free automated unit tests for a Terraform module in a pull request CI pipeline without granting AWS credentials.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Using mock_provider blocks to test module logic without cloud credentials is under consideration.",
    options: [
      { id: 'A', text: "Simulate cloud resources using local SQLite databases." },
      { id: 'B', text: "Grant full administrator AWS credentials to every untrusted pull request runner." },
      { id: 'C', text: "Skip all testing in CI pipelines to save cloud costs." },
      { id: 'D', text: "Use `mock_provider \"aws\" {}` blocks inside `.tftest.hcl` files to simulate provider responses without cloud API calls." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `mock_provider \"aws\" {}` blocks inside `.tftest.hcl` files to simulate provider responses without cloud API calls. Terraform 1.7 introduced provider mocking in `terraform test`. Defining a `mock_provider` block simulates resource creation and attribute return values in-memory, enabling thorough unit testing of module logic, loops, and conditions without real cloud credentials or infrastructure costs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests#mock-providers",
    tags: ["Mock Testing", "Mock Providers", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-343",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Mocking Providers in Module Tests: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Mock Testing to run fast, cost-free automated unit tests for a Terraform module in a pull request CI pipeline without granting AWS credentials.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Using mock_provider blocks to test module logic without cloud credentials is under consideration.",
    options: [
      { id: 'A', text: "Grant full administrator AWS credentials to every untrusted pull request runner." },
      { id: 'B', text: "Simulate cloud resources using local SQLite databases." },
      { id: 'C', text: "Skip all testing in CI pipelines to save cloud costs." },
      { id: 'D', text: "Use `mock_provider \"aws\" {}` blocks inside `.tftest.hcl` files to simulate provider responses without cloud API calls." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `mock_provider \"aws\" {}` blocks inside `.tftest.hcl` files to simulate provider responses without cloud API calls. Terraform 1.7 introduced provider mocking in `terraform test`. Defining a `mock_provider` block simulates resource creation and attribute return values in-memory, enabling thorough unit testing of module logic, loops, and conditions without real cloud credentials or infrastructure costs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests#mock-providers",
    tags: ["Mock Testing", "Mock Providers", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-344",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Mocking Providers in Module Tests: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Mock Testing to run fast, cost-free automated unit tests for a Terraform module in a pull request CI pipeline without granting AWS credentials.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Using mock_provider blocks to test module logic without cloud credentials is under consideration.",
    options: [
      { id: 'A', text: "Simulate cloud resources using local SQLite databases." },
      { id: 'B', text: "Grant full administrator AWS credentials to every untrusted pull request runner." },
      { id: 'C', text: "Skip all testing in CI pipelines to save cloud costs." },
      { id: 'D', text: "Use `mock_provider \"aws\" {}` blocks inside `.tftest.hcl` files to simulate provider responses without cloud API calls." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `mock_provider \"aws\" {}` blocks inside `.tftest.hcl` files to simulate provider responses without cloud API calls. Terraform 1.7 introduced provider mocking in `terraform test`. Defining a `mock_provider` block simulates resource creation and attribute return values in-memory, enabling thorough unit testing of module logic, loops, and conditions without real cloud credentials or infrastructure costs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests#mock-providers",
    tags: ["Mock Testing", "Mock Providers", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-345",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Mocking Providers in Module Tests: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Mock Testing to run fast, cost-free automated unit tests for a Terraform module in a pull request CI pipeline without granting AWS credentials.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Using mock_provider blocks to test module logic without cloud credentials is under consideration.",
    options: [
      { id: 'A', text: "Skip all testing in CI pipelines to save cloud costs." },
      { id: 'B', text: "Simulate cloud resources using local SQLite databases." },
      { id: 'C', text: "Grant full administrator AWS credentials to every untrusted pull request runner." },
      { id: 'D', text: "Use `mock_provider \"aws\" {}` blocks inside `.tftest.hcl` files to simulate provider responses without cloud API calls." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `mock_provider \"aws\" {}` blocks inside `.tftest.hcl` files to simulate provider responses without cloud API calls. Terraform 1.7 introduced provider mocking in `terraform test`. Defining a `mock_provider` block simulates resource creation and attribute return values in-memory, enabling thorough unit testing of module logic, loops, and conditions without real cloud credentials or infrastructure costs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests#mock-providers",
    tags: ["Mock Testing", "Mock Providers", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-346",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Output Documentation and README Generation: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Module Documentation to maintain accurate, up-to-date documentation for module inputs, outputs, requirements, and providers automatically as code evolves.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Automating module documentation using terraform-docs in pre-commit hooks is under consideration.",
    options: [
      { id: 'A', text: "Rely on developers to manually keep README tables updated in every pull request." },
      { id: 'B', text: "Integrate `terraform-docs` into pre-commit hooks to automatically generate markdown tables in `README.md`." },
      { id: 'C', text: "Write documentation manually in Word documents stored outside the repository." },
      { id: 'D', text: "Omit documentation and instruct developers to read raw `.tf` source code." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Integrate `terraform-docs` into pre-commit hooks to automatically generate markdown tables in `README.md`. `terraform-docs` is a widely adopted utility that parses Terraform HCL files and automatically generates formatted Markdown tables detailing inputs, outputs, providers, and requirements. Automating this in CI or pre-commit ensures documentation never drifts from actual code.",
    referenceUrl: "https://terraform-docs.io/",
    tags: ["Module Documentation", "terraform-docs", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-347",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Output Documentation and README Generation: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Module Documentation to maintain accurate, up-to-date documentation for module inputs, outputs, requirements, and providers automatically as code evolves.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Automating module documentation using terraform-docs in pre-commit hooks is under consideration.",
    options: [
      { id: 'A', text: "Integrate `terraform-docs` into pre-commit hooks to automatically generate markdown tables in `README.md`." },
      { id: 'B', text: "Rely on developers to manually keep README tables updated in every pull request." },
      { id: 'C', text: "Omit documentation and instruct developers to read raw `.tf` source code." },
      { id: 'D', text: "Write documentation manually in Word documents stored outside the repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate `terraform-docs` into pre-commit hooks to automatically generate markdown tables in `README.md`. `terraform-docs` is a widely adopted utility that parses Terraform HCL files and automatically generates formatted Markdown tables detailing inputs, outputs, providers, and requirements. Automating this in CI or pre-commit ensures documentation never drifts from actual code.",
    referenceUrl: "https://terraform-docs.io/",
    tags: ["Module Documentation", "terraform-docs", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-348",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Output Documentation and README Generation: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Module Documentation to maintain accurate, up-to-date documentation for module inputs, outputs, requirements, and providers automatically as code evolves.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Automating module documentation using terraform-docs in pre-commit hooks is under consideration.",
    options: [
      { id: 'A', text: "Rely on developers to manually keep README tables updated in every pull request." },
      { id: 'B', text: "Integrate `terraform-docs` into pre-commit hooks to automatically generate markdown tables in `README.md`." },
      { id: 'C', text: "Write documentation manually in Word documents stored outside the repository." },
      { id: 'D', text: "Omit documentation and instruct developers to read raw `.tf` source code." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Integrate `terraform-docs` into pre-commit hooks to automatically generate markdown tables in `README.md`. `terraform-docs` is a widely adopted utility that parses Terraform HCL files and automatically generates formatted Markdown tables detailing inputs, outputs, providers, and requirements. Automating this in CI or pre-commit ensures documentation never drifts from actual code.",
    referenceUrl: "https://terraform-docs.io/",
    tags: ["Module Documentation", "terraform-docs", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-349",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Output Documentation and README Generation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Module Documentation to maintain accurate, up-to-date documentation for module inputs, outputs, requirements, and providers automatically as code evolves.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Automating module documentation using terraform-docs in pre-commit hooks is under consideration.",
    options: [
      { id: 'A', text: "Integrate `terraform-docs` into pre-commit hooks to automatically generate markdown tables in `README.md`." },
      { id: 'B', text: "Rely on developers to manually keep README tables updated in every pull request." },
      { id: 'C', text: "Omit documentation and instruct developers to read raw `.tf` source code." },
      { id: 'D', text: "Write documentation manually in Word documents stored outside the repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate `terraform-docs` into pre-commit hooks to automatically generate markdown tables in `README.md`. `terraform-docs` is a widely adopted utility that parses Terraform HCL files and automatically generates formatted Markdown tables detailing inputs, outputs, providers, and requirements. Automating this in CI or pre-commit ensures documentation never drifts from actual code.",
    referenceUrl: "https://terraform-docs.io/",
    tags: ["Module Documentation", "terraform-docs", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-350",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Output Documentation and README Generation: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Module Documentation to maintain accurate, up-to-date documentation for module inputs, outputs, requirements, and providers automatically as code evolves.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Automating module documentation using terraform-docs in pre-commit hooks is under consideration.",
    options: [
      { id: 'A', text: "Omit documentation and instruct developers to read raw `.tf` source code." },
      { id: 'B', text: "Integrate `terraform-docs` into pre-commit hooks to automatically generate markdown tables in `README.md`." },
      { id: 'C', text: "Write documentation manually in Word documents stored outside the repository." },
      { id: 'D', text: "Rely on developers to manually keep README tables updated in every pull request." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Integrate `terraform-docs` into pre-commit hooks to automatically generate markdown tables in `README.md`. `terraform-docs` is a widely adopted utility that parses Terraform HCL files and automatically generates formatted Markdown tables detailing inputs, outputs, providers, and requirements. Automating this in CI or pre-commit ensures documentation never drifts from actual code.",
    referenceUrl: "https://terraform-docs.io/",
    tags: ["Module Documentation", "terraform-docs", "Resilience Failure"]
  }
];

export default HASHICORP_TFP_QUESTIONS_14;
