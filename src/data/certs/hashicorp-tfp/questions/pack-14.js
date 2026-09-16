export const HASHICORP_TFP_QUESTIONS_14 = [
  {
    id: "hashicorp-tfp-326",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Passing Provider Configurations to Child Modules: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Module Providers to pass an aliased AWS provider configuration for `us-west-2` into a child module that provisions secondary disaster recovery resources.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Define a new `provider \"aws\"` block directly inside the child module code." },
      { id: 'B', text: "Child modules automatically detect and choose the correct cloud region." },
      { id: 'C', text: "Specify `providers = { aws = aws.west }` inside the `module` invocation block." },
      { id: 'D', text: "Export environment variables before calling each child module." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specify `providers = { aws = aws.west }` inside the `module` invocation block. Child modules should not declare provider configurations directly; doing so creates tight coupling and inhibits reusability. Instead, the root module passes provider instances to child modules using the `providers` map meta-argument (`providers = { aws.alias_name = aws.root_alias }`).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/module-providers",
    tags: ["Module Providers","Module Providers","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-327",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Passing Provider Configurations to Child Modules: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Module Providers to pass an aliased AWS provider configuration for `us-west-2` into a child module that provisions secondary disaster recovery resources.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Specify `providers = { aws = aws.west }` inside the `module` invocation block." },
      { id: 'B', text: "Define a new `provider \"aws\"` block directly inside the child module code." },
      { id: 'C', text: "Child modules automatically detect and choose the correct cloud region." },
      { id: 'D', text: "Export environment variables before calling each child module." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `providers = { aws = aws.west }` inside the `module` invocation block. Child modules should not declare provider configurations directly; doing so creates tight coupling and inhibits reusability. Instead, the root module passes provider instances to child modules using the `providers` map meta-argument (`providers = { aws.alias_name = aws.root_alias }`).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/module-providers",
    tags: ["Module Providers","Module Providers","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-328",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Passing Provider Configurations to Child Modules: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Module Providers to pass an aliased AWS provider configuration for `us-west-2` into a child module that provisions secondary disaster recovery resources.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Specify `providers = { aws = aws.west }` inside the `module` invocation block." },
      { id: 'B', text: "Export environment variables before calling each child module." },
      { id: 'C', text: "Define a new `provider \"aws\"` block directly inside the child module code." },
      { id: 'D', text: "Child modules automatically detect and choose the correct cloud region." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `providers = { aws = aws.west }` inside the `module` invocation block. Child modules should not declare provider configurations directly; doing so creates tight coupling and inhibits reusability. Instead, the root module passes provider instances to child modules using the `providers` map meta-argument (`providers = { aws.alias_name = aws.root_alias }`).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/module-providers",
    tags: ["Module Providers","Module Providers","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-329",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Passing Provider Configurations to Child Modules: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Module Providers to pass an aliased AWS provider configuration for `us-west-2` into a child module that provisions secondary disaster recovery resources.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Child modules automatically detect and choose the correct cloud region." },
      { id: 'B', text: "Define a new `provider \"aws\"` block directly inside the child module code." },
      { id: 'C', text: "Export environment variables before calling each child module." },
      { id: 'D', text: "Specify `providers = { aws = aws.west }` inside the `module` invocation block." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Specify `providers = { aws = aws.west }` inside the `module` invocation block. Child modules should not declare provider configurations directly; doing so creates tight coupling and inhibits reusability. Instead, the root module passes provider instances to child modules using the `providers` map meta-argument (`providers = { aws.alias_name = aws.root_alias }`).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/module-providers",
    tags: ["Module Providers","Module Providers","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-330",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Passing Provider Configurations to Child Modules: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Module Providers to pass an aliased AWS provider configuration for `us-west-2` into a child module that provisions secondary disaster recovery resources.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Specify `providers = { aws = aws.west }` inside the `module` invocation block." },
      { id: 'B', text: "Define a new `provider \"aws\"` block directly inside the child module code." },
      { id: 'C', text: "Child modules automatically detect and choose the correct cloud region." },
      { id: 'D', text: "Export environment variables before calling each child module." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `providers = { aws = aws.west }` inside the `module` invocation block. Child modules should not declare provider configurations directly; doing so creates tight coupling and inhibits reusability. Instead, the root module passes provider instances to child modules using the `providers` map meta-argument (`providers = { aws.alias_name = aws.root_alias }`).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/module-providers",
    tags: ["Module Providers","Module Providers","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-331",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Version Constraints and Pessimistic Pinning (~>): Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Module Pinning to consume an external registry module while ensuring the project automatically receives minor bug fixes but blocks breaking major API releases.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Hardcode the Git commit hash without a version string." },
      { id: 'B', text: "Specify `version = \"&gt;= 1.0\"` allowing all future major breaking changes." },
      { id: 'C', text: "Specify `version = \"~&gt; 3.2\"` in the `module` declaration block." },
      { id: 'D', text: "Omit the `version` argument, pulling the unverified latest commit on every run." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specify `version = \"~&gt; 3.2\"` in the `module` declaration block. When sourcing modules from a registry, the `version` argument controls acceptable versions. The pessimistic constraint operator (`~&gt; 3.2`) allows updates to patch and minor versions within the `3.x` series (up to `&lt; 4.0`), protecting against breaking structural modifications.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#version",
    tags: ["Module Pinning","Module Pinning","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-332",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Version Constraints and Pessimistic Pinning (~>): High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Module Pinning to consume an external registry module while ensuring the project automatically receives minor bug fixes but blocks breaking major API releases.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Specify `version = \"~&gt; 3.2\"` in the `module` declaration block." },
      { id: 'B', text: "Specify `version = \"&gt;= 1.0\"` allowing all future major breaking changes." },
      { id: 'C', text: "Omit the `version` argument, pulling the unverified latest commit on every run." },
      { id: 'D', text: "Hardcode the Git commit hash without a version string." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `version = \"~&gt; 3.2\"` in the `module` declaration block. When sourcing modules from a registry, the `version` argument controls acceptable versions. The pessimistic constraint operator (`~&gt; 3.2`) allows updates to patch and minor versions within the `3.x` series (up to `&lt; 4.0`), protecting against breaking structural modifications.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#version",
    tags: ["Module Pinning","Module Pinning","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-333",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Version Constraints and Pessimistic Pinning (~>): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Module Pinning to consume an external registry module while ensuring the project automatically receives minor bug fixes but blocks breaking major API releases.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Specify `version = \"~&gt; 3.2\"` in the `module` declaration block." },
      { id: 'B', text: "Specify `version = \"&gt;= 1.0\"` allowing all future major breaking changes." },
      { id: 'C', text: "Omit the `version` argument, pulling the unverified latest commit on every run." },
      { id: 'D', text: "Hardcode the Git commit hash without a version string." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `version = \"~&gt; 3.2\"` in the `module` declaration block. When sourcing modules from a registry, the `version` argument controls acceptable versions. The pessimistic constraint operator (`~&gt; 3.2`) allows updates to patch and minor versions within the `3.x` series (up to `&lt; 4.0`), protecting against breaking structural modifications.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#version",
    tags: ["Module Pinning","Module Pinning","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-334",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Version Constraints and Pessimistic Pinning (~>): Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Module Pinning to consume an external registry module while ensuring the project automatically receives minor bug fixes but blocks breaking major API releases.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Specify `version = \"~&gt; 3.2\"` in the `module` declaration block." },
      { id: 'B', text: "Specify `version = \"&gt;= 1.0\"` allowing all future major breaking changes." },
      { id: 'C', text: "Omit the `version` argument, pulling the unverified latest commit on every run." },
      { id: 'D', text: "Hardcode the Git commit hash without a version string." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `version = \"~&gt; 3.2\"` in the `module` declaration block. When sourcing modules from a registry, the `version` argument controls acceptable versions. The pessimistic constraint operator (`~&gt; 3.2`) allows updates to patch and minor versions within the `3.x` series (up to `&lt; 4.0`), protecting against breaking structural modifications.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#version",
    tags: ["Module Pinning","Module Pinning","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-335",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Version Constraints and Pessimistic Pinning (~>): Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Module Pinning to consume an external registry module while ensuring the project automatically receives minor bug fixes but blocks breaking major API releases.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Hardcode the Git commit hash without a version string." },
      { id: 'B', text: "Specify `version = \"&gt;= 1.0\"` allowing all future major breaking changes." },
      { id: 'C', text: "Specify `version = \"~&gt; 3.2\"` in the `module` declaration block." },
      { id: 'D', text: "Omit the `version` argument, pulling the unverified latest commit on every run." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specify `version = \"~&gt; 3.2\"` in the `module` declaration block. When sourcing modules from a registry, the `version` argument controls acceptable versions. The pessimistic constraint operator (`~&gt; 3.2`) allows updates to patch and minor versions within the `3.x` series (up to `&lt; 4.0`), protecting against breaking structural modifications.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#version",
    tags: ["Module Pinning","Module Pinning","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-336",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Testing with the terraform test Framework: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Native Testing to validate that a reusable Terraform module correctly calculates CIDR subnets and sets resource tags without deploying real cloud resources.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Add a `check` block to the module so the assertions run on every plan and apply." },
      { id: 'B', text: "Add a policy set in HCP Terraform that evaluates the plan against the same rules." },
      { id: 'C', text: "Add a pipeline step that runs `terraform plan -json` and asserts on the output." },
      { id: 'D', text: "Add a `tests/*.tftest.hcl` file with `run` blocks at `command = plan` and `assert` conditions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a `tests/unit.tftest.hcl` file containing `run` blocks with `command = plan` and custom `assert` conditions. Terraform 1.6 introduced the native `terraform test` framework. Test files (`.tftest.hcl`) contain sequential `run` blocks that execute `plan` or `apply` commands against mock or live providers, validating assertions without requiring third-party tools like Terratest.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests",
    tags: ["Native Testing","terraform test","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-337",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Testing with the terraform test Framework: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Native Testing to validate that a reusable Terraform module correctly calculates CIDR subnets and sets resource tags without deploying real cloud resources.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Add a `tests/*.tftest.hcl` file with `run` blocks at `command = plan` and `assert` conditions." },
      { id: 'B', text: "Add a policy set in HCP Terraform that evaluates the plan against the same rules." },
      { id: 'C', text: "Add a `check` block to the module so the assertions run on every plan and apply." },
      { id: 'D', text: "Add a pipeline step that runs `terraform plan -json` and asserts on the output." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `tests/unit.tftest.hcl` file containing `run` blocks with `command = plan` and custom `assert` conditions. Terraform 1.6 introduced the native `terraform test` framework. Test files (`.tftest.hcl`) contain sequential `run` blocks that execute `plan` or `apply` commands against mock or live providers, validating assertions without requiring third-party tools like Terratest.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests",
    tags: ["Native Testing","terraform test","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-338",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Testing with the terraform test Framework: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Native Testing to validate that a reusable Terraform module correctly calculates CIDR subnets and sets resource tags without deploying real cloud resources.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Add a `check` block to the module so the assertions run on every plan and apply." },
      { id: 'B', text: "Add a `tests/*.tftest.hcl` file with `run` blocks at `command = plan` and `assert` conditions." },
      { id: 'C', text: "Add a policy set in HCP Terraform that evaluates the plan against the same rules." },
      { id: 'D', text: "Add a pipeline step that runs `terraform plan -json` and asserts on the output." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a `tests/unit.tftest.hcl` file containing `run` blocks with `command = plan` and custom `assert` conditions. Terraform 1.6 introduced the native `terraform test` framework. Test files (`.tftest.hcl`) contain sequential `run` blocks that execute `plan` or `apply` commands against mock or live providers, validating assertions without requiring third-party tools like Terratest.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests",
    tags: ["Native Testing","terraform test","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-339",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Testing with the terraform test Framework: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Native Testing to validate that a reusable Terraform module correctly calculates CIDR subnets and sets resource tags without deploying real cloud resources.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Add a policy set in HCP Terraform that evaluates the plan against the same rules." },
      { id: 'B', text: "Add a `check` block to the module so the assertions run on every plan and apply." },
      { id: 'C', text: "Add a `tests/*.tftest.hcl` file with `run` blocks at `command = plan` and `assert` conditions." },
      { id: 'D', text: "Add a pipeline step that runs `terraform plan -json` and asserts on the output." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `tests/unit.tftest.hcl` file containing `run` blocks with `command = plan` and custom `assert` conditions. Terraform 1.6 introduced the native `terraform test` framework. Test files (`.tftest.hcl`) contain sequential `run` blocks that execute `plan` or `apply` commands against mock or live providers, validating assertions without requiring third-party tools like Terratest.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests",
    tags: ["Native Testing","terraform test","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-340",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Testing with the terraform test Framework: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Native Testing to validate that a reusable Terraform module correctly calculates CIDR subnets and sets resource tags without deploying real cloud resources.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Add a `tests/*.tftest.hcl` file with `run` blocks at `command = plan` and `assert` conditions." },
      { id: 'B', text: "Add a policy set in HCP Terraform that evaluates the plan against the same rules." },
      { id: 'C', text: "Add a `check` block to the module so the assertions run on every plan and apply." },
      { id: 'D', text: "Add a pipeline step that runs `terraform plan -json` and asserts on the output." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `tests/unit.tftest.hcl` file containing `run` blocks with `command = plan` and custom `assert` conditions. Terraform 1.6 introduced the native `terraform test` framework. Test files (`.tftest.hcl`) contain sequential `run` blocks that execute `plan` or `apply` commands against mock or live providers, validating assertions without requiring third-party tools like Terratest.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests",
    tags: ["Native Testing","terraform test","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-341",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Mocking Providers in Module Tests: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Mock Testing to run fast, cost-free automated unit tests for a Terraform module in a pull request CI pipeline without granting AWS credentials.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Use a read-only cloud credential in CI so the plan runs but nothing can be created." },
      { id: 'B', text: "Use `mock_provider \"aws\" {}` blocks in the `.tftest.hcl` files so no API call is made." },
      { id: 'C', text: "Use a local provider such as `null` in place of the cloud one for the test runs." },
      { id: 'D', text: "Use `command = plan` in the test runs, which never contacts the cloud provider." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `mock_provider \"aws\" {}` blocks inside `.tftest.hcl` files to simulate provider responses without cloud API calls. Terraform 1.7 introduced provider mocking in `terraform test`. Defining a `mock_provider` block simulates resource creation and attribute return values in-memory, enabling thorough unit testing of module logic, loops, and conditions without real cloud credentials or infrastructure costs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests#mock-providers",
    tags: ["Mock Testing","Mock Providers","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-342",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Mocking Providers in Module Tests: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Mock Testing to run fast, cost-free automated unit tests for a Terraform module in a pull request CI pipeline without granting AWS credentials.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Use `mock_provider \"aws\" {}` blocks in the `.tftest.hcl` files so no API call is made." },
      { id: 'B', text: "Use a read-only cloud credential in CI so the plan runs but nothing can be created." },
      { id: 'C', text: "Use `command = plan` in the test runs, which never contacts the cloud provider." },
      { id: 'D', text: "Use a local provider such as `null` in place of the cloud one for the test runs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `mock_provider \"aws\" {}` blocks inside `.tftest.hcl` files to simulate provider responses without cloud API calls. Terraform 1.7 introduced provider mocking in `terraform test`. Defining a `mock_provider` block simulates resource creation and attribute return values in-memory, enabling thorough unit testing of module logic, loops, and conditions without real cloud credentials or infrastructure costs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests#mock-providers",
    tags: ["Mock Testing","Mock Providers","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-343",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Mocking Providers in Module Tests: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Mock Testing to run fast, cost-free automated unit tests for a Terraform module in a pull request CI pipeline without granting AWS credentials.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Use a local provider such as `null` in place of the cloud one for the test runs." },
      { id: 'B', text: "Use `mock_provider \"aws\" {}` blocks in the `.tftest.hcl` files so no API call is made." },
      { id: 'C', text: "Use `command = plan` in the test runs, which never contacts the cloud provider." },
      { id: 'D', text: "Use a read-only cloud credential in CI so the plan runs but nothing can be created." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `mock_provider \"aws\" {}` blocks inside `.tftest.hcl` files to simulate provider responses without cloud API calls. Terraform 1.7 introduced provider mocking in `terraform test`. Defining a `mock_provider` block simulates resource creation and attribute return values in-memory, enabling thorough unit testing of module logic, loops, and conditions without real cloud credentials or infrastructure costs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests#mock-providers",
    tags: ["Mock Testing","Mock Providers","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-344",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Mocking Providers in Module Tests: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Mock Testing to run fast, cost-free automated unit tests for a Terraform module in a pull request CI pipeline without granting AWS credentials.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Use `mock_provider \"aws\" {}` blocks in the `.tftest.hcl` files so no API call is made." },
      { id: 'B', text: "Use a read-only cloud credential in CI so the plan runs but nothing can be created." },
      { id: 'C', text: "Use `command = plan` in the test runs, which never contacts the cloud provider." },
      { id: 'D', text: "Use a local provider such as `null` in place of the cloud one for the test runs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `mock_provider \"aws\" {}` blocks inside `.tftest.hcl` files to simulate provider responses without cloud API calls. Terraform 1.7 introduced provider mocking in `terraform test`. Defining a `mock_provider` block simulates resource creation and attribute return values in-memory, enabling thorough unit testing of module logic, loops, and conditions without real cloud credentials or infrastructure costs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests#mock-providers",
    tags: ["Mock Testing","Mock Providers","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-345",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Mocking Providers in Module Tests: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Mock Testing to run fast, cost-free automated unit tests for a Terraform module in a pull request CI pipeline without granting AWS credentials.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Use a read-only cloud credential in CI so the plan runs but nothing can be created." },
      { id: 'B', text: "Use `mock_provider \"aws\" {}` blocks in the `.tftest.hcl` files so no API call is made." },
      { id: 'C', text: "Use a local provider such as `null` in place of the cloud one for the test runs." },
      { id: 'D', text: "Use `command = plan` in the test runs, which never contacts the cloud provider." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `mock_provider \"aws\" {}` blocks inside `.tftest.hcl` files to simulate provider responses without cloud API calls. Terraform 1.7 introduced provider mocking in `terraform test`. Defining a `mock_provider` block simulates resource creation and attribute return values in-memory, enabling thorough unit testing of module logic, loops, and conditions without real cloud credentials or infrastructure costs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests#mock-providers",
    tags: ["Mock Testing","Mock Providers","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-346",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Output Documentation and README Generation: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Module Documentation to maintain accurate, up-to-date documentation for module inputs, outputs, requirements, and providers automatically as code evolves.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Keep the documentation in a wiki that the module owners update per release." },
      { id: 'B', text: "Require the README tables to be updated in the same pull request as the change." },
      { id: 'C', text: "Run `terraform-docs` from a pre-commit hook to regenerate the README tables." },
      { id: 'D', text: "Generate the documentation in CI and publish it to the registry listing only." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Integrate `terraform-docs` into pre-commit hooks to automatically generate markdown tables in `README.md`. `terraform-docs` is a widely adopted utility that parses Terraform HCL files and automatically generates formatted Markdown tables detailing inputs, outputs, providers, and requirements. Automating this in CI or pre-commit ensures documentation never drifts from actual code.",
    referenceUrl: "https://terraform-docs.io/",
    tags: ["Module Documentation","terraform-docs","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-347",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Output Documentation and README Generation: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Module Documentation to maintain accurate, up-to-date documentation for module inputs, outputs, requirements, and providers automatically as code evolves.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Run `terraform-docs` from a pre-commit hook to regenerate the README tables." },
      { id: 'B', text: "Generate the documentation in CI and publish it to the registry listing only." },
      { id: 'C', text: "Keep the documentation in a wiki that the module owners update per release." },
      { id: 'D', text: "Require the README tables to be updated in the same pull request as the change." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate `terraform-docs` into pre-commit hooks to automatically generate markdown tables in `README.md`. `terraform-docs` is a widely adopted utility that parses Terraform HCL files and automatically generates formatted Markdown tables detailing inputs, outputs, providers, and requirements. Automating this in CI or pre-commit ensures documentation never drifts from actual code.",
    referenceUrl: "https://terraform-docs.io/",
    tags: ["Module Documentation","terraform-docs","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-348",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Output Documentation and README Generation: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Module Documentation to maintain accurate, up-to-date documentation for module inputs, outputs, requirements, and providers automatically as code evolves.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Keep the documentation in a wiki that the module owners update per release." },
      { id: 'B', text: "Require the README tables to be updated in the same pull request as the change." },
      { id: 'C', text: "Run `terraform-docs` from a pre-commit hook to regenerate the README tables." },
      { id: 'D', text: "Generate the documentation in CI and publish it to the registry listing only." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Integrate `terraform-docs` into pre-commit hooks to automatically generate markdown tables in `README.md`. `terraform-docs` is a widely adopted utility that parses Terraform HCL files and automatically generates formatted Markdown tables detailing inputs, outputs, providers, and requirements. Automating this in CI or pre-commit ensures documentation never drifts from actual code.",
    referenceUrl: "https://terraform-docs.io/",
    tags: ["Module Documentation","terraform-docs","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-349",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Output Documentation and README Generation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Module Documentation to maintain accurate, up-to-date documentation for module inputs, outputs, requirements, and providers automatically as code evolves.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Run `terraform-docs` from a pre-commit hook to regenerate the README tables." },
      { id: 'B', text: "Generate the documentation in CI and publish it to the registry listing only." },
      { id: 'C', text: "Keep the documentation in a wiki that the module owners update per release." },
      { id: 'D', text: "Require the README tables to be updated in the same pull request as the change." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate `terraform-docs` into pre-commit hooks to automatically generate markdown tables in `README.md`. `terraform-docs` is a widely adopted utility that parses Terraform HCL files and automatically generates formatted Markdown tables detailing inputs, outputs, providers, and requirements. Automating this in CI or pre-commit ensures documentation never drifts from actual code.",
    referenceUrl: "https://terraform-docs.io/",
    tags: ["Module Documentation","terraform-docs","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-350",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Output Documentation and README Generation: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Module Documentation to maintain accurate, up-to-date documentation for module inputs, outputs, requirements, and providers automatically as code evolves.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Require the README tables to be updated in the same pull request as the change." },
      { id: 'B', text: "Generate the documentation in CI and publish it to the registry listing only." },
      { id: 'C', text: "Run `terraform-docs` from a pre-commit hook to regenerate the README tables." },
      { id: 'D', text: "Keep the documentation in a wiki that the module owners update per release." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Integrate `terraform-docs` into pre-commit hooks to automatically generate markdown tables in `README.md`. `terraform-docs` is a widely adopted utility that parses Terraform HCL files and automatically generates formatted Markdown tables detailing inputs, outputs, providers, and requirements. Automating this in CI or pre-commit ensures documentation never drifts from actual code.",
    referenceUrl: "https://terraform-docs.io/",
    tags: ["Module Documentation","terraform-docs","Resilience Failure"]
  }
];

export default HASHICORP_TFP_QUESTIONS_14;
