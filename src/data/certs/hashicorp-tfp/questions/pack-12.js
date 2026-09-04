export const HASHICORP_TFP_QUESTIONS_12 = [
  {
    id: "hashicorp-tfp-276",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Managing Complex Types with Optional Object Attributes: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Optional Attributes to declare a complex variable schema for database instance options where advanced parameters have default fallbacks if omitted by callers.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Configuring optional() with fallback defaults inside object type constraints is under consideration.",
    options: [
      { id: 'A', text: "Use `any` type with no schema validation." },
      { id: 'B', text: "Split the single configuration object into 30 separate scalar variables." },
      { id: 'C', text: "Define the type using `object({ name = string, port = optional(number, 3306), backup_retention = optional(number, 7) })`." },
      { id: 'D', text: "Define all fields as mandatory, forcing every caller to specify 30 redundant parameters." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define the type using `object({ name = string, port = optional(number, 3306), backup_retention = optional(number, 7) })`. The `optional()` modifier in type constraints allows structural object attributes to be omitted by callers. Supplying a second argument (`optional(type, default)`) automatically injects fallback default values, providing ergonomic, clean module interfaces for complex resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/type-constraints#experimental-optional-object-type-attributes",
    tags: ["Optional Attributes", "Optional Attributes", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-277",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Managing Complex Types with Optional Object Attributes: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Optional Attributes to declare a complex variable schema for database instance options where advanced parameters have default fallbacks if omitted by callers.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Configuring optional() with fallback defaults inside object type constraints is under consideration.",
    options: [
      { id: 'A', text: "Define all fields as mandatory, forcing every caller to specify 30 redundant parameters." },
      { id: 'B', text: "Split the single configuration object into 30 separate scalar variables." },
      { id: 'C', text: "Use `any` type with no schema validation." },
      { id: 'D', text: "Define the type using `object({ name = string, port = optional(number, 3306), backup_retention = optional(number, 7) })`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define the type using `object({ name = string, port = optional(number, 3306), backup_retention = optional(number, 7) })`. The `optional()` modifier in type constraints allows structural object attributes to be omitted by callers. Supplying a second argument (`optional(type, default)`) automatically injects fallback default values, providing ergonomic, clean module interfaces for complex resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/type-constraints#experimental-optional-object-type-attributes",
    tags: ["Optional Attributes", "Optional Attributes", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-278",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Managing Complex Types with Optional Object Attributes: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Optional Attributes to declare a complex variable schema for database instance options where advanced parameters have default fallbacks if omitted by callers.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Configuring optional() with fallback defaults inside object type constraints is under consideration.",
    options: [
      { id: 'A', text: "Define all fields as mandatory, forcing every caller to specify 30 redundant parameters." },
      { id: 'B', text: "Split the single configuration object into 30 separate scalar variables." },
      { id: 'C', text: "Define the type using `object({ name = string, port = optional(number, 3306), backup_retention = optional(number, 7) })`." },
      { id: 'D', text: "Use `any` type with no schema validation." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define the type using `object({ name = string, port = optional(number, 3306), backup_retention = optional(number, 7) })`. The `optional()` modifier in type constraints allows structural object attributes to be omitted by callers. Supplying a second argument (`optional(type, default)`) automatically injects fallback default values, providing ergonomic, clean module interfaces for complex resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/type-constraints#experimental-optional-object-type-attributes",
    tags: ["Optional Attributes", "Optional Attributes", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-279",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Managing Complex Types with Optional Object Attributes: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Optional Attributes to declare a complex variable schema for database instance options where advanced parameters have default fallbacks if omitted by callers.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Configuring optional() with fallback defaults inside object type constraints is under consideration.",
    options: [
      { id: 'A', text: "Define all fields as mandatory, forcing every caller to specify 30 redundant parameters." },
      { id: 'B', text: "Use `any` type with no schema validation." },
      { id: 'C', text: "Define the type using `object({ name = string, port = optional(number, 3306), backup_retention = optional(number, 7) })`." },
      { id: 'D', text: "Split the single configuration object into 30 separate scalar variables." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define the type using `object({ name = string, port = optional(number, 3306), backup_retention = optional(number, 7) })`. The `optional()` modifier in type constraints allows structural object attributes to be omitted by callers. Supplying a second argument (`optional(type, default)`) automatically injects fallback default values, providing ergonomic, clean module interfaces for complex resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/type-constraints#experimental-optional-object-type-attributes",
    tags: ["Optional Attributes", "Optional Attributes", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-280",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Managing Complex Types with Optional Object Attributes: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Optional Attributes to declare a complex variable schema for database instance options where advanced parameters have default fallbacks if omitted by callers.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Configuring optional() with fallback defaults inside object type constraints is under consideration.",
    options: [
      { id: 'A', text: "Use `any` type with no schema validation." },
      { id: 'B', text: "Define all fields as mandatory, forcing every caller to specify 30 redundant parameters." },
      { id: 'C', text: "Split the single configuration object into 30 separate scalar variables." },
      { id: 'D', text: "Define the type using `object({ name = string, port = optional(number, 3306), backup_retention = optional(number, 7) })`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define the type using `object({ name = string, port = optional(number, 3306), backup_retention = optional(number, 7) })`. The `optional()` modifier in type constraints allows structural object attributes to be omitted by callers. Supplying a second argument (`optional(type, default)`) automatically injects fallback default values, providing ergonomic, clean module interfaces for complex resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/type-constraints#experimental-optional-object-type-attributes",
    tags: ["Optional Attributes", "Optional Attributes", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-281",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Dynamic Block Iteration over Complex Maps: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Dynamic Blocks to generate complex nested routing rule blocks within an Azure Application Gateway resource based on environment-specific routing maps.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Advanced dynamic block authoring with for_each, iterator, and conditional content is under consideration.",
    options: [
      { id: 'A', text: "Configure routing rules through the Azure Portal post-deployment." },
      { id: 'B', text: "Duplicate the 500-line Application Gateway resource block 10 times." },
      { id: 'C', text: "Nested blocks cannot be generated dynamically in Terraform." },
      { id: 'D', text: "Use a `dynamic \"request_routing_rule\"` block with `for_each = var.routing_rules` and `iterator = rule`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use a `dynamic \"request_routing_rule\"` block with `for_each = var.routing_rules` and `iterator = rule`. `dynamic` blocks allow procedural-style repetition of nested configuration blocks within top-level resources. Specifying `iterator` customizes the name of the loop variable, making complex nested block logic (e.g., Application Gateway rules, security policies) clean and readable.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks",
    tags: ["Dynamic Blocks", "Dynamic Blocks", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-282",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Dynamic Block Iteration over Complex Maps: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Dynamic Blocks to generate complex nested routing rule blocks within an Azure Application Gateway resource based on environment-specific routing maps.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Advanced dynamic block authoring with for_each, iterator, and conditional content is under consideration.",
    options: [
      { id: 'A', text: "Configure routing rules through the Azure Portal post-deployment." },
      { id: 'B', text: "Use a `dynamic \"request_routing_rule\"` block with `for_each = var.routing_rules` and `iterator = rule`." },
      { id: 'C', text: "Duplicate the 500-line Application Gateway resource block 10 times." },
      { id: 'D', text: "Nested blocks cannot be generated dynamically in Terraform." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use a `dynamic \"request_routing_rule\"` block with `for_each = var.routing_rules` and `iterator = rule`. `dynamic` blocks allow procedural-style repetition of nested configuration blocks within top-level resources. Specifying `iterator` customizes the name of the loop variable, making complex nested block logic (e.g., Application Gateway rules, security policies) clean and readable.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks",
    tags: ["Dynamic Blocks", "Dynamic Blocks", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-283",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Dynamic Block Iteration over Complex Maps: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Dynamic Blocks to generate complex nested routing rule blocks within an Azure Application Gateway resource based on environment-specific routing maps.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Advanced dynamic block authoring with for_each, iterator, and conditional content is under consideration.",
    options: [
      { id: 'A', text: "Duplicate the 500-line Application Gateway resource block 10 times." },
      { id: 'B', text: "Configure routing rules through the Azure Portal post-deployment." },
      { id: 'C', text: "Nested blocks cannot be generated dynamically in Terraform." },
      { id: 'D', text: "Use a `dynamic \"request_routing_rule\"` block with `for_each = var.routing_rules` and `iterator = rule`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use a `dynamic \"request_routing_rule\"` block with `for_each = var.routing_rules` and `iterator = rule`. `dynamic` blocks allow procedural-style repetition of nested configuration blocks within top-level resources. Specifying `iterator` customizes the name of the loop variable, making complex nested block logic (e.g., Application Gateway rules, security policies) clean and readable.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks",
    tags: ["Dynamic Blocks", "Dynamic Blocks", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-284",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Dynamic Block Iteration over Complex Maps: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Dynamic Blocks to generate complex nested routing rule blocks within an Azure Application Gateway resource based on environment-specific routing maps.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Advanced dynamic block authoring with for_each, iterator, and conditional content is under consideration.",
    options: [
      { id: 'A', text: "Configure routing rules through the Azure Portal post-deployment." },
      { id: 'B', text: "Duplicate the 500-line Application Gateway resource block 10 times." },
      { id: 'C', text: "Use a `dynamic \"request_routing_rule\"` block with `for_each = var.routing_rules` and `iterator = rule`." },
      { id: 'D', text: "Nested blocks cannot be generated dynamically in Terraform." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use a `dynamic \"request_routing_rule\"` block with `for_each = var.routing_rules` and `iterator = rule`. `dynamic` blocks allow procedural-style repetition of nested configuration blocks within top-level resources. Specifying `iterator` customizes the name of the loop variable, making complex nested block logic (e.g., Application Gateway rules, security policies) clean and readable.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks",
    tags: ["Dynamic Blocks", "Dynamic Blocks", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-285",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Dynamic Block Iteration over Complex Maps: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Dynamic Blocks to generate complex nested routing rule blocks within an Azure Application Gateway resource based on environment-specific routing maps.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Advanced dynamic block authoring with for_each, iterator, and conditional content is under consideration.",
    options: [
      { id: 'A', text: "Use a `dynamic \"request_routing_rule\"` block with `for_each = var.routing_rules` and `iterator = rule`." },
      { id: 'B', text: "Duplicate the 500-line Application Gateway resource block 10 times." },
      { id: 'C', text: "Nested blocks cannot be generated dynamically in Terraform." },
      { id: 'D', text: "Configure routing rules through the Azure Portal post-deployment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `dynamic \"request_routing_rule\"` block with `for_each = var.routing_rules` and `iterator = rule`. `dynamic` blocks allow procedural-style repetition of nested configuration blocks within top-level resources. Specifying `iterator` customizes the name of the loop variable, making complex nested block logic (e.g., Application Gateway rules, security policies) clean and readable.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks",
    tags: ["Dynamic Blocks", "Dynamic Blocks", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-286",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Provider Aliases and Multi-Region Configuration: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Provider Aliases to deploy resources across two different AWS regions (us-east-1 and us-west-2) simultaneously within a single Terraform configuration.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Configuring provider alias blocks for multi-region and cross-account deployments is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform apply` in us-east-1, then edit the provider region and run `apply` again." },
      { id: 'B', text: "Maintain two completely separate repositories and pass state between them over HTTP." },
      { id: 'C', text: "Terraform does not support managing multiple regions in a single configuration." },
      { id: 'D', text: "Define multiple `provider \"aws\"` blocks using the `alias` meta-argument (e.g., `alias = \"west\"`) and reference `provider = aws.west` in resources." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define multiple `provider \"aws\"` blocks using the `alias` meta-argument (e.g., `alias = \"west\"`) and reference `provider = aws.west` in resources. Provider aliases allow multiple configurations for the same provider plugin (e.g., different AWS regions or different subscription IDs). Resources specify which provider configuration to use via the `provider` meta-argument (`aws.west`), enabling multi-region architecture orchestration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/configuration#alias-multiple-provider-configurations",
    tags: ["Provider Aliases", "Provider Aliases", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-287",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Provider Aliases and Multi-Region Configuration: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Provider Aliases to deploy resources across two different AWS regions (us-east-1 and us-west-2) simultaneously within a single Terraform configuration.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Configuring provider alias blocks for multi-region and cross-account deployments is under consideration.",
    options: [
      { id: 'A', text: "Maintain two completely separate repositories and pass state between them over HTTP." },
      { id: 'B', text: "Define multiple `provider \"aws\"` blocks using the `alias` meta-argument (e.g., `alias = \"west\"`) and reference `provider = aws.west` in resources." },
      { id: 'C', text: "Run `terraform apply` in us-east-1, then edit the provider region and run `apply` again." },
      { id: 'D', text: "Terraform does not support managing multiple regions in a single configuration." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define multiple `provider \"aws\"` blocks using the `alias` meta-argument (e.g., `alias = \"west\"`) and reference `provider = aws.west` in resources. Provider aliases allow multiple configurations for the same provider plugin (e.g., different AWS regions or different subscription IDs). Resources specify which provider configuration to use via the `provider` meta-argument (`aws.west`), enabling multi-region architecture orchestration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/configuration#alias-multiple-provider-configurations",
    tags: ["Provider Aliases", "Provider Aliases", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-288",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Provider Aliases and Multi-Region Configuration: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Provider Aliases to deploy resources across two different AWS regions (us-east-1 and us-west-2) simultaneously within a single Terraform configuration.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Configuring provider alias blocks for multi-region and cross-account deployments is under consideration.",
    options: [
      { id: 'A', text: "Maintain two completely separate repositories and pass state between them over HTTP." },
      { id: 'B', text: "Run `terraform apply` in us-east-1, then edit the provider region and run `apply` again." },
      { id: 'C', text: "Terraform does not support managing multiple regions in a single configuration." },
      { id: 'D', text: "Define multiple `provider \"aws\"` blocks using the `alias` meta-argument (e.g., `alias = \"west\"`) and reference `provider = aws.west` in resources." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define multiple `provider \"aws\"` blocks using the `alias` meta-argument (e.g., `alias = \"west\"`) and reference `provider = aws.west` in resources. Provider aliases allow multiple configurations for the same provider plugin (e.g., different AWS regions or different subscription IDs). Resources specify which provider configuration to use via the `provider` meta-argument (`aws.west`), enabling multi-region architecture orchestration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/configuration#alias-multiple-provider-configurations",
    tags: ["Provider Aliases", "Provider Aliases", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-289",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Provider Aliases and Multi-Region Configuration: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Provider Aliases to deploy resources across two different AWS regions (us-east-1 and us-west-2) simultaneously within a single Terraform configuration.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Configuring provider alias blocks for multi-region and cross-account deployments is under consideration.",
    options: [
      { id: 'A', text: "Define multiple `provider \"aws\"` blocks using the `alias` meta-argument (e.g., `alias = \"west\"`) and reference `provider = aws.west` in resources." },
      { id: 'B', text: "Run `terraform apply` in us-east-1, then edit the provider region and run `apply` again." },
      { id: 'C', text: "Maintain two completely separate repositories and pass state between them over HTTP." },
      { id: 'D', text: "Terraform does not support managing multiple regions in a single configuration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define multiple `provider \"aws\"` blocks using the `alias` meta-argument (e.g., `alias = \"west\"`) and reference `provider = aws.west` in resources. Provider aliases allow multiple configurations for the same provider plugin (e.g., different AWS regions or different subscription IDs). Resources specify which provider configuration to use via the `provider` meta-argument (`aws.west`), enabling multi-region architecture orchestration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/configuration#alias-multiple-provider-configurations",
    tags: ["Provider Aliases", "Provider Aliases", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-290",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Provider Aliases and Multi-Region Configuration: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Provider Aliases to deploy resources across two different AWS regions (us-east-1 and us-west-2) simultaneously within a single Terraform configuration.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Configuring provider alias blocks for multi-region and cross-account deployments is under consideration.",
    options: [
      { id: 'A', text: "Maintain two completely separate repositories and pass state between them over HTTP." },
      { id: 'B', text: "Define multiple `provider \"aws\"` blocks using the `alias` meta-argument (e.g., `alias = \"west\"`) and reference `provider = aws.west` in resources." },
      { id: 'C', text: "Terraform does not support managing multiple regions in a single configuration." },
      { id: 'D', text: "Run `terraform apply` in us-east-1, then edit the provider region and run `apply` again." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define multiple `provider \"aws\"` blocks using the `alias` meta-argument (e.g., `alias = \"west\"`) and reference `provider = aws.west` in resources. Provider aliases allow multiple configurations for the same provider plugin (e.g., different AWS regions or different subscription IDs). Resources specify which provider configuration to use via the `provider` meta-argument (`aws.west`), enabling multi-region architecture orchestration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/configuration#alias-multiple-provider-configurations",
    tags: ["Provider Aliases", "Provider Aliases", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-291",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Terraform Built-in Functions: try and can for Error Handling: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Defensive Coding to extract an optional nested configuration value safely without causing Terraform to abort evaluation with an unhandled runtime error if the key is missing.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Handling null values, type mismatches, and missing map keys using try() and can() is under consideration.",
    options: [
      { id: 'A', text: "Let the configuration fail and require users to always provide full object hierarchies." },
      { id: 'B', text: "Write custom regex parsing functions in local shell scripts." },
      { id: 'C', text: "Disable type checking across all module variables." },
      { id: 'D', text: "Use the `try(var.settings.advanced.timeout, 30)` function to provide a fallback value if the attribute lookup fails." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the `try(var.settings.advanced.timeout, 30)` function to provide a fallback value if the attribute lookup fails. `try()` evaluates a list of expressions in sequence and returns the result of the first one that does not produce an error. It is particularly useful for handling dynamic data where nested attributes or map keys might be missing, returning clean fallback values.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/try",
    tags: ["Defensive Coding", "try Function", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-292",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Terraform Built-in Functions: try and can for Error Handling: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Defensive Coding to extract an optional nested configuration value safely without causing Terraform to abort evaluation with an unhandled runtime error if the key is missing.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Handling null values, type mismatches, and missing map keys using try() and can() is under consideration.",
    options: [
      { id: 'A', text: "Let the configuration fail and require users to always provide full object hierarchies." },
      { id: 'B', text: "Disable type checking across all module variables." },
      { id: 'C', text: "Write custom regex parsing functions in local shell scripts." },
      { id: 'D', text: "Use the `try(var.settings.advanced.timeout, 30)` function to provide a fallback value if the attribute lookup fails." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the `try(var.settings.advanced.timeout, 30)` function to provide a fallback value if the attribute lookup fails. `try()` evaluates a list of expressions in sequence and returns the result of the first one that does not produce an error. It is particularly useful for handling dynamic data where nested attributes or map keys might be missing, returning clean fallback values.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/try",
    tags: ["Defensive Coding", "try Function", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-293",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Terraform Built-in Functions: try and can for Error Handling: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Defensive Coding to extract an optional nested configuration value safely without causing Terraform to abort evaluation with an unhandled runtime error if the key is missing.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Handling null values, type mismatches, and missing map keys using try() and can() is under consideration.",
    options: [
      { id: 'A', text: "Disable type checking across all module variables." },
      { id: 'B', text: "Write custom regex parsing functions in local shell scripts." },
      { id: 'C', text: "Use the `try(var.settings.advanced.timeout, 30)` function to provide a fallback value if the attribute lookup fails." },
      { id: 'D', text: "Let the configuration fail and require users to always provide full object hierarchies." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use the `try(var.settings.advanced.timeout, 30)` function to provide a fallback value if the attribute lookup fails. `try()` evaluates a list of expressions in sequence and returns the result of the first one that does not produce an error. It is particularly useful for handling dynamic data where nested attributes or map keys might be missing, returning clean fallback values.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/try",
    tags: ["Defensive Coding", "try Function", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-294",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Terraform Built-in Functions: try and can for Error Handling: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Defensive Coding to extract an optional nested configuration value safely without causing Terraform to abort evaluation with an unhandled runtime error if the key is missing.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Handling null values, type mismatches, and missing map keys using try() and can() is under consideration.",
    options: [
      { id: 'A', text: "Write custom regex parsing functions in local shell scripts." },
      { id: 'B', text: "Let the configuration fail and require users to always provide full object hierarchies." },
      { id: 'C', text: "Use the `try(var.settings.advanced.timeout, 30)` function to provide a fallback value if the attribute lookup fails." },
      { id: 'D', text: "Disable type checking across all module variables." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use the `try(var.settings.advanced.timeout, 30)` function to provide a fallback value if the attribute lookup fails. `try()` evaluates a list of expressions in sequence and returns the result of the first one that does not produce an error. It is particularly useful for handling dynamic data where nested attributes or map keys might be missing, returning clean fallback values.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/try",
    tags: ["Defensive Coding", "try Function", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-295",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Terraform Built-in Functions: try and can for Error Handling: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Defensive Coding to extract an optional nested configuration value safely without causing Terraform to abort evaluation with an unhandled runtime error if the key is missing.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Handling null values, type mismatches, and missing map keys using try() and can() is under consideration.",
    options: [
      { id: 'A', text: "Disable type checking across all module variables." },
      { id: 'B', text: "Let the configuration fail and require users to always provide full object hierarchies." },
      { id: 'C', text: "Use the `try(var.settings.advanced.timeout, 30)` function to provide a fallback value if the attribute lookup fails." },
      { id: 'D', text: "Write custom regex parsing functions in local shell scripts." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use the `try(var.settings.advanced.timeout, 30)` function to provide a fallback value if the attribute lookup fails. `try()` evaluates a list of expressions in sequence and returns the result of the first one that does not produce an error. It is particularly useful for handling dynamic data where nested attributes or map keys might be missing, returning clean fallback values.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/try",
    tags: ["Defensive Coding", "try Function", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-296",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Managing Terraform Deprecations and Breaking Changes: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates HCL Evolution to modernize a legacy Terraform 0.12 codebase to modern Terraform 1.x standards, eliminating deprecated provider data sources and syntax.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Updating legacy syntax (template_file, interpolation-only strings) to modern HCL2 standards is under consideration.",
    options: [
      { id: 'A', text: "Replace deprecated `template_file` data sources with native `templatefile()` functions and remove obsolete `${var.foo}` redundant interpolation." },
      { id: 'B', text: "Ignore deprecation warnings until pipelines completely fail." },
      { id: 'C', text: "Freeze the codebase permanently on Terraform 0.12." },
      { id: 'D', text: "Re-implement the entire infrastructure in shell scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Replace deprecated `template_file` data sources with native `templatefile()` functions and remove obsolete `${var.foo}` redundant interpolation. Terraform has evolved significantly. Modern HCL replaces legacy plugins like `template_file` with the native `templatefile()` function, eliminates redundant interpolation (`foo = var.bar` instead of `foo = \"${var.bar}\"`), and provides native type constraints, improving performance.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/templatefile",
    tags: ["HCL Evolution", "templatefile Function", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-297",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Managing Terraform Deprecations and Breaking Changes: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates HCL Evolution to modernize a legacy Terraform 0.12 codebase to modern Terraform 1.x standards, eliminating deprecated provider data sources and syntax.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Updating legacy syntax (template_file, interpolation-only strings) to modern HCL2 standards is under consideration.",
    options: [
      { id: 'A', text: "Freeze the codebase permanently on Terraform 0.12." },
      { id: 'B', text: "Replace deprecated `template_file` data sources with native `templatefile()` functions and remove obsolete `${var.foo}` redundant interpolation." },
      { id: 'C', text: "Re-implement the entire infrastructure in shell scripts." },
      { id: 'D', text: "Ignore deprecation warnings until pipelines completely fail." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Replace deprecated `template_file` data sources with native `templatefile()` functions and remove obsolete `${var.foo}` redundant interpolation. Terraform has evolved significantly. Modern HCL replaces legacy plugins like `template_file` with the native `templatefile()` function, eliminates redundant interpolation (`foo = var.bar` instead of `foo = \"${var.bar}\"`), and provides native type constraints, improving performance.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/templatefile",
    tags: ["HCL Evolution", "templatefile Function", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-298",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Managing Terraform Deprecations and Breaking Changes: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates HCL Evolution to modernize a legacy Terraform 0.12 codebase to modern Terraform 1.x standards, eliminating deprecated provider data sources and syntax.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Updating legacy syntax (template_file, interpolation-only strings) to modern HCL2 standards is under consideration.",
    options: [
      { id: 'A', text: "Ignore deprecation warnings until pipelines completely fail." },
      { id: 'B', text: "Replace deprecated `template_file` data sources with native `templatefile()` functions and remove obsolete `${var.foo}` redundant interpolation." },
      { id: 'C', text: "Freeze the codebase permanently on Terraform 0.12." },
      { id: 'D', text: "Re-implement the entire infrastructure in shell scripts." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Replace deprecated `template_file` data sources with native `templatefile()` functions and remove obsolete `${var.foo}` redundant interpolation. Terraform has evolved significantly. Modern HCL replaces legacy plugins like `template_file` with the native `templatefile()` function, eliminates redundant interpolation (`foo = var.bar` instead of `foo = \"${var.bar}\"`), and provides native type constraints, improving performance.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/templatefile",
    tags: ["HCL Evolution", "templatefile Function", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-299",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Managing Terraform Deprecations and Breaking Changes: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates HCL Evolution to modernize a legacy Terraform 0.12 codebase to modern Terraform 1.x standards, eliminating deprecated provider data sources and syntax.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Updating legacy syntax (template_file, interpolation-only strings) to modern HCL2 standards is under consideration.",
    options: [
      { id: 'A', text: "Freeze the codebase permanently on Terraform 0.12." },
      { id: 'B', text: "Re-implement the entire infrastructure in shell scripts." },
      { id: 'C', text: "Ignore deprecation warnings until pipelines completely fail." },
      { id: 'D', text: "Replace deprecated `template_file` data sources with native `templatefile()` functions and remove obsolete `${var.foo}` redundant interpolation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Replace deprecated `template_file` data sources with native `templatefile()` functions and remove obsolete `${var.foo}` redundant interpolation. Terraform has evolved significantly. Modern HCL replaces legacy plugins like `template_file` with the native `templatefile()` function, eliminates redundant interpolation (`foo = var.bar` instead of `foo = \"${var.bar}\"`), and provides native type constraints, improving performance.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/templatefile",
    tags: ["HCL Evolution", "templatefile Function", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-300",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Managing Terraform Deprecations and Breaking Changes: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates HCL Evolution to modernize a legacy Terraform 0.12 codebase to modern Terraform 1.x standards, eliminating deprecated provider data sources and syntax.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Updating legacy syntax (template_file, interpolation-only strings) to modern HCL2 standards is under consideration.",
    options: [
      { id: 'A', text: "Re-implement the entire infrastructure in shell scripts." },
      { id: 'B', text: "Replace deprecated `template_file` data sources with native `templatefile()` functions and remove obsolete `${var.foo}` redundant interpolation." },
      { id: 'C', text: "Freeze the codebase permanently on Terraform 0.12." },
      { id: 'D', text: "Ignore deprecation warnings until pipelines completely fail." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Replace deprecated `template_file` data sources with native `templatefile()` functions and remove obsolete `${var.foo}` redundant interpolation. Terraform has evolved significantly. Modern HCL replaces legacy plugins like `template_file` with the native `templatefile()` function, eliminates redundant interpolation (`foo = var.bar` instead of `foo = \"${var.bar}\"`), and provides native type constraints, improving performance.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/templatefile",
    tags: ["HCL Evolution", "templatefile Function", "Resilience Failure"]
  }
];

export default HASHICORP_TFP_QUESTIONS_12;
