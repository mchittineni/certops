export const HASHICORP_TFP_QUESTIONS_12 = [
  {
    id: "hashicorp-tfp-276",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Managing Complex Types with Optional Object Attributes: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Optional Attributes to declare a complex variable schema for database instance options where advanced parameters have default fallbacks if omitted by callers.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Type it as an `object({ ... })` with `optional()` attributes carrying defaults." },
      { id: 'B', text: "Type it as an `object({ ... })` with every attribute required of the caller each time." },
      { id: 'C', text: "Type it as `any` and validate the shape in a `validation` block instead." },
      { id: 'D', text: "Type each field as its own scalar variable with a default value each." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the type using `object({ name = string, port = optional(number, 3306), backup_retention = optional(number, 7) })`. The `optional()` modifier in type constraints allows structural object attributes to be omitted by callers. Supplying a second argument (`optional(type, default)`) automatically injects fallback default values, providing ergonomic, clean module interfaces for complex resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/type-constraints#experimental-optional-object-type-attributes",
    tags: ["Optional Attributes","Optional Attributes","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-277",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Managing Complex Types with Optional Object Attributes: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Optional Attributes to declare a complex variable schema for database instance options where advanced parameters have default fallbacks if omitted by callers.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Type each field as its own scalar variable with a default value each." },
      { id: 'B', text: "Type it as an `object({ ... })` with `optional()` attributes carrying defaults." },
      { id: 'C', text: "Type it as `any` and validate the shape in a `validation` block instead." },
      { id: 'D', text: "Type it as an `object({ ... })` with every attribute required of the caller each time." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define the type using `object({ name = string, port = optional(number, 3306), backup_retention = optional(number, 7) })`. The `optional()` modifier in type constraints allows structural object attributes to be omitted by callers. Supplying a second argument (`optional(type, default)`) automatically injects fallback default values, providing ergonomic, clean module interfaces for complex resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/type-constraints#experimental-optional-object-type-attributes",
    tags: ["Optional Attributes","Optional Attributes","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-278",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Managing Complex Types with Optional Object Attributes: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Optional Attributes to declare a complex variable schema for database instance options where advanced parameters have default fallbacks if omitted by callers.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Type each field as its own scalar variable with a default value each." },
      { id: 'B', text: "Type it as `any` and validate the shape in a `validation` block instead." },
      { id: 'C', text: "Type it as an `object({ ... })` with every attribute required of the caller each time." },
      { id: 'D', text: "Type it as an `object({ ... })` with `optional()` attributes carrying defaults." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define the type using `object({ name = string, port = optional(number, 3306), backup_retention = optional(number, 7) })`. The `optional()` modifier in type constraints allows structural object attributes to be omitted by callers. Supplying a second argument (`optional(type, default)`) automatically injects fallback default values, providing ergonomic, clean module interfaces for complex resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/type-constraints#experimental-optional-object-type-attributes",
    tags: ["Optional Attributes","Optional Attributes","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-279",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Managing Complex Types with Optional Object Attributes: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Optional Attributes to declare a complex variable schema for database instance options where advanced parameters have default fallbacks if omitted by callers.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Type it as `any` and validate the shape in a `validation` block instead." },
      { id: 'B', text: "Type it as an `object({ ... })` with `optional()` attributes carrying defaults." },
      { id: 'C', text: "Type it as an `object({ ... })` with every attribute required of the caller each time." },
      { id: 'D', text: "Type each field as its own scalar variable with a default value each." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define the type using `object({ name = string, port = optional(number, 3306), backup_retention = optional(number, 7) })`. The `optional()` modifier in type constraints allows structural object attributes to be omitted by callers. Supplying a second argument (`optional(type, default)`) automatically injects fallback default values, providing ergonomic, clean module interfaces for complex resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/type-constraints#experimental-optional-object-type-attributes",
    tags: ["Optional Attributes","Optional Attributes","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-280",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Managing Complex Types with Optional Object Attributes: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Optional Attributes to declare a complex variable schema for database instance options where advanced parameters have default fallbacks if omitted by callers.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Type each field as its own scalar variable with a default value each." },
      { id: 'B', text: "Type it as an `object({ ... })` with every attribute required of the caller each time." },
      { id: 'C', text: "Type it as an `object({ ... })` with `optional()` attributes carrying defaults." },
      { id: 'D', text: "Type it as `any` and validate the shape in a `validation` block instead." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define the type using `object({ name = string, port = optional(number, 3306), backup_retention = optional(number, 7) })`. The `optional()` modifier in type constraints allows structural object attributes to be omitted by callers. Supplying a second argument (`optional(type, default)`) automatically injects fallback default values, providing ergonomic, clean module interfaces for complex resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/type-constraints#experimental-optional-object-type-attributes",
    tags: ["Optional Attributes","Optional Attributes","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-281",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Dynamic Block Iteration over Complex Maps: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Dynamic Blocks to generate complex nested routing rule blocks within an Azure Application Gateway resource based on environment-specific routing maps.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Use `count` on the whole gateway resource, with one instance per routing rule needed." },
      { id: 'B', text: "Use a `for` expression to build the block's contents and assign it in one go." },
      { id: 'C', text: "Use a `dynamic \"request_routing_rule\"` block with `for_each` over the rules variable." },
      { id: 'D', text: "Use a separate `azurerm_application_gateway_rule` resource per routing rule." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use a `dynamic \"request_routing_rule\"` block with `for_each = var.routing_rules` and `iterator = rule`. `dynamic` blocks allow procedural-style repetition of nested configuration blocks within top-level resources. Specifying `iterator` customizes the name of the loop variable, making complex nested block logic (e.g., Application Gateway rules, security policies) clean and readable.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks",
    tags: ["Dynamic Blocks","Dynamic Blocks","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-282",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Dynamic Block Iteration over Complex Maps: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Dynamic Blocks to generate complex nested routing rule blocks within an Azure Application Gateway resource based on environment-specific routing maps.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Use a `for` expression to build the block's contents and assign it in one go." },
      { id: 'B', text: "Use a separate `azurerm_application_gateway_rule` resource per routing rule." },
      { id: 'C', text: "Use a `dynamic \"request_routing_rule\"` block with `for_each` over the rules variable." },
      { id: 'D', text: "Use `count` on the whole gateway resource, with one instance per routing rule needed." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use a `dynamic \"request_routing_rule\"` block with `for_each = var.routing_rules` and `iterator = rule`. `dynamic` blocks allow procedural-style repetition of nested configuration blocks within top-level resources. Specifying `iterator` customizes the name of the loop variable, making complex nested block logic (e.g., Application Gateway rules, security policies) clean and readable.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks",
    tags: ["Dynamic Blocks","Dynamic Blocks","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-283",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Dynamic Block Iteration over Complex Maps: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Dynamic Blocks to generate complex nested routing rule blocks within an Azure Application Gateway resource based on environment-specific routing maps.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Use a separate `azurerm_application_gateway_rule` resource per routing rule." },
      { id: 'B', text: "Use `count` on the whole gateway resource, with one instance per routing rule needed." },
      { id: 'C', text: "Use a `dynamic \"request_routing_rule\"` block with `for_each` over the rules variable." },
      { id: 'D', text: "Use a `for` expression to build the block's contents and assign it in one go." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use a `dynamic \"request_routing_rule\"` block with `for_each = var.routing_rules` and `iterator = rule`. `dynamic` blocks allow procedural-style repetition of nested configuration blocks within top-level resources. Specifying `iterator` customizes the name of the loop variable, making complex nested block logic (e.g., Application Gateway rules, security policies) clean and readable.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks",
    tags: ["Dynamic Blocks","Dynamic Blocks","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-284",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Dynamic Block Iteration over Complex Maps: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Dynamic Blocks to generate complex nested routing rule blocks within an Azure Application Gateway resource based on environment-specific routing maps.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Use a `dynamic \"request_routing_rule\"` block with `for_each` over the rules variable." },
      { id: 'B', text: "Use a `for` expression to build the block's contents and assign it in one go." },
      { id: 'C', text: "Use a separate `azurerm_application_gateway_rule` resource per routing rule." },
      { id: 'D', text: "Use `count` on the whole gateway resource, with one instance per routing rule needed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `dynamic \"request_routing_rule\"` block with `for_each = var.routing_rules` and `iterator = rule`. `dynamic` blocks allow procedural-style repetition of nested configuration blocks within top-level resources. Specifying `iterator` customizes the name of the loop variable, making complex nested block logic (e.g., Application Gateway rules, security policies) clean and readable.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks",
    tags: ["Dynamic Blocks","Dynamic Blocks","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-285",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Dynamic Block Iteration over Complex Maps: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Dynamic Blocks to generate complex nested routing rule blocks within an Azure Application Gateway resource based on environment-specific routing maps.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Use a `dynamic \"request_routing_rule\"` block with `for_each` over the rules variable." },
      { id: 'B', text: "Use a `for` expression to build the block's contents and assign it in one go." },
      { id: 'C', text: "Use a separate `azurerm_application_gateway_rule` resource per routing rule." },
      { id: 'D', text: "Use `count` on the whole gateway resource, with one instance per routing rule needed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `dynamic \"request_routing_rule\"` block with `for_each = var.routing_rules` and `iterator = rule`. `dynamic` blocks allow procedural-style repetition of nested configuration blocks within top-level resources. Specifying `iterator` customizes the name of the loop variable, making complex nested block logic (e.g., Application Gateway rules, security policies) clean and readable.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks",
    tags: ["Dynamic Blocks","Dynamic Blocks","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-286",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Provider Aliases and Multi-Region Configuration: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Provider Aliases to deploy resources across two different AWS regions (us-east-1 and us-west-2) simultaneously within a single Terraform configuration.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Keep one provider block and set the region from a variable, applying once per region." },
      { id: 'B', text: "Keep one provider block and override the region with `-var` on each apply in turn." },
      { id: 'C', text: "Declare extra `provider \"aws\"` blocks with `alias`, and set `provider = aws.west`." },
      { id: 'D', text: "Keep one workspace per region and duplicate the configuration in each of them." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define multiple `provider \"aws\"` blocks using the `alias` meta-argument (e.g., `alias = \"west\"`) and reference `provider = aws.west` in resources. Provider aliases allow multiple configurations for the same provider plugin (e.g., different AWS regions or different subscription IDs). Resources specify which provider configuration to use via the `provider` meta-argument (`aws.west`), enabling multi-region architecture orchestration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/configuration#alias-multiple-provider-configurations",
    tags: ["Provider Aliases","Provider Aliases","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-287",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Provider Aliases and Multi-Region Configuration: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Provider Aliases to deploy resources across two different AWS regions (us-east-1 and us-west-2) simultaneously within a single Terraform configuration.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Keep one workspace per region and duplicate the configuration in each of them." },
      { id: 'B', text: "Keep one provider block and set the region from a variable, applying once per region." },
      { id: 'C', text: "Declare extra `provider \"aws\"` blocks with `alias`, and set `provider = aws.west`." },
      { id: 'D', text: "Keep one provider block and override the region with `-var` on each apply in turn." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define multiple `provider \"aws\"` blocks using the `alias` meta-argument (e.g., `alias = \"west\"`) and reference `provider = aws.west` in resources. Provider aliases allow multiple configurations for the same provider plugin (e.g., different AWS regions or different subscription IDs). Resources specify which provider configuration to use via the `provider` meta-argument (`aws.west`), enabling multi-region architecture orchestration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/configuration#alias-multiple-provider-configurations",
    tags: ["Provider Aliases","Provider Aliases","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-288",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Provider Aliases and Multi-Region Configuration: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Provider Aliases to deploy resources across two different AWS regions (us-east-1 and us-west-2) simultaneously within a single Terraform configuration.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Keep one provider block and override the region with `-var` on each apply in turn." },
      { id: 'B', text: "Keep one workspace per region and duplicate the configuration in each of them." },
      { id: 'C', text: "Declare extra `provider \"aws\"` blocks with `alias`, and set `provider = aws.west`." },
      { id: 'D', text: "Keep one provider block and set the region from a variable, applying once per region." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define multiple `provider \"aws\"` blocks using the `alias` meta-argument (e.g., `alias = \"west\"`) and reference `provider = aws.west` in resources. Provider aliases allow multiple configurations for the same provider plugin (e.g., different AWS regions or different subscription IDs). Resources specify which provider configuration to use via the `provider` meta-argument (`aws.west`), enabling multi-region architecture orchestration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/configuration#alias-multiple-provider-configurations",
    tags: ["Provider Aliases","Provider Aliases","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-289",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Provider Aliases and Multi-Region Configuration: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Provider Aliases to deploy resources across two different AWS regions (us-east-1 and us-west-2) simultaneously within a single Terraform configuration.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Declare extra `provider \"aws\"` blocks with `alias`, and set `provider = aws.west`." },
      { id: 'B', text: "Keep one workspace per region and duplicate the configuration in each of them." },
      { id: 'C', text: "Keep one provider block and set the region from a variable, applying once per region." },
      { id: 'D', text: "Keep one provider block and override the region with `-var` on each apply in turn." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define multiple `provider \"aws\"` blocks using the `alias` meta-argument (e.g., `alias = \"west\"`) and reference `provider = aws.west` in resources. Provider aliases allow multiple configurations for the same provider plugin (e.g., different AWS regions or different subscription IDs). Resources specify which provider configuration to use via the `provider` meta-argument (`aws.west`), enabling multi-region architecture orchestration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/configuration#alias-multiple-provider-configurations",
    tags: ["Provider Aliases","Provider Aliases","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-290",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Provider Aliases and Multi-Region Configuration: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Provider Aliases to deploy resources across two different AWS regions (us-east-1 and us-west-2) simultaneously within a single Terraform configuration.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Keep one provider block and override the region with `-var` on each apply in turn." },
      { id: 'B', text: "Keep one provider block and set the region from a variable, applying once per region." },
      { id: 'C', text: "Keep one workspace per region and duplicate the configuration in each of them." },
      { id: 'D', text: "Declare extra `provider \"aws\"` blocks with `alias`, and set `provider = aws.west`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define multiple `provider \"aws\"` blocks using the `alias` meta-argument (e.g., `alias = \"west\"`) and reference `provider = aws.west` in resources. Provider aliases allow multiple configurations for the same provider plugin (e.g., different AWS regions or different subscription IDs). Resources specify which provider configuration to use via the `provider` meta-argument (`aws.west`), enabling multi-region architecture orchestration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/configuration#alias-multiple-provider-configurations",
    tags: ["Provider Aliases","Provider Aliases","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-291",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Terraform Built-in Functions: try and can for Error Handling: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Defensive Coding to extract an optional nested configuration value safely without causing Terraform to abort evaluation with an unhandled runtime error if the key is missing.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Use `lookup(var.settings, \"timeout\", 30)`, which walks the nested attributes for it." },
      { id: 'B', text: "Use `coalesce(var.settings.advanced.timeout, 30)` to substitute the default." },
      { id: 'C', text: "Use `try(var.settings.advanced.timeout, 30)` so a missing attribute falls back." },
      { id: 'D', text: "Use `can(var.settings.advanced.timeout)` as a `count` guard on the resource." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use the `try(var.settings.advanced.timeout, 30)` function to provide a fallback value if the attribute lookup fails. `try()` evaluates a list of expressions in sequence and returns the result of the first one that does not produce an error. It is particularly useful for handling dynamic data where nested attributes or map keys might be missing, returning clean fallback values.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/try",
    tags: ["Defensive Coding","try Function","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-292",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Terraform Built-in Functions: try and can for Error Handling: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Defensive Coding to extract an optional nested configuration value safely without causing Terraform to abort evaluation with an unhandled runtime error if the key is missing.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Use `coalesce(var.settings.advanced.timeout, 30)` to substitute the default." },
      { id: 'B', text: "Use `try(var.settings.advanced.timeout, 30)` so a missing attribute falls back." },
      { id: 'C', text: "Use `lookup(var.settings, \"timeout\", 30)`, which walks the nested attributes for it." },
      { id: 'D', text: "Use `can(var.settings.advanced.timeout)` as a `count` guard on the resource." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the `try(var.settings.advanced.timeout, 30)` function to provide a fallback value if the attribute lookup fails. `try()` evaluates a list of expressions in sequence and returns the result of the first one that does not produce an error. It is particularly useful for handling dynamic data where nested attributes or map keys might be missing, returning clean fallback values.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/try",
    tags: ["Defensive Coding","try Function","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-293",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Terraform Built-in Functions: try and can for Error Handling: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Defensive Coding to extract an optional nested configuration value safely without causing Terraform to abort evaluation with an unhandled runtime error if the key is missing.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Use `can(var.settings.advanced.timeout)` as a `count` guard on the resource." },
      { id: 'B', text: "Use `try(var.settings.advanced.timeout, 30)` so a missing attribute falls back." },
      { id: 'C', text: "Use `coalesce(var.settings.advanced.timeout, 30)` to substitute the default." },
      { id: 'D', text: "Use `lookup(var.settings, \"timeout\", 30)`, which walks the nested attributes for it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the `try(var.settings.advanced.timeout, 30)` function to provide a fallback value if the attribute lookup fails. `try()` evaluates a list of expressions in sequence and returns the result of the first one that does not produce an error. It is particularly useful for handling dynamic data where nested attributes or map keys might be missing, returning clean fallback values.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/try",
    tags: ["Defensive Coding","try Function","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-294",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Terraform Built-in Functions: try and can for Error Handling: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Defensive Coding to extract an optional nested configuration value safely without causing Terraform to abort evaluation with an unhandled runtime error if the key is missing.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Use `try(var.settings.advanced.timeout, 30)` so a missing attribute falls back." },
      { id: 'B', text: "Use `can(var.settings.advanced.timeout)` as a `count` guard on the resource." },
      { id: 'C', text: "Use `lookup(var.settings, \"timeout\", 30)`, which walks the nested attributes for it." },
      { id: 'D', text: "Use `coalesce(var.settings.advanced.timeout, 30)` to substitute the default." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the `try(var.settings.advanced.timeout, 30)` function to provide a fallback value if the attribute lookup fails. `try()` evaluates a list of expressions in sequence and returns the result of the first one that does not produce an error. It is particularly useful for handling dynamic data where nested attributes or map keys might be missing, returning clean fallback values.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/try",
    tags: ["Defensive Coding","try Function","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-295",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Terraform Built-in Functions: try and can for Error Handling: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Defensive Coding to extract an optional nested configuration value safely without causing Terraform to abort evaluation with an unhandled runtime error if the key is missing.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Use `lookup(var.settings, \"timeout\", 30)`, which walks the nested attributes for it." },
      { id: 'B', text: "Use `can(var.settings.advanced.timeout)` as a `count` guard on the resource." },
      { id: 'C', text: "Use `coalesce(var.settings.advanced.timeout, 30)` to substitute the default." },
      { id: 'D', text: "Use `try(var.settings.advanced.timeout, 30)` so a missing attribute falls back." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the `try(var.settings.advanced.timeout, 30)` function to provide a fallback value if the attribute lookup fails. `try()` evaluates a list of expressions in sequence and returns the result of the first one that does not produce an error. It is particularly useful for handling dynamic data where nested attributes or map keys might be missing, returning clean fallback values.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/try",
    tags: ["Defensive Coding","try Function","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-296",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Managing Terraform Deprecations and Breaking Changes: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates HCL Evolution to modernize a legacy Terraform 0.12 codebase to modern Terraform 1.x standards, eliminating deprecated provider data sources and syntax.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Replace the `template_file` data sources with the `templatefile()` function." },
      { id: 'B', text: "Replace the `template_file` data sources with `local_file` resources rendered by an external script." },
      { id: 'C', text: "Pin the `template` provider to its final release so the deprecation warning stops appearing." },
      { id: 'D', text: "Pin the Terraform version in `required_version` so the deprecated syntax keeps working." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Replace deprecated `template_file` data sources with native `templatefile()` functions and remove obsolete `${var.foo}` redundant interpolation. Terraform has evolved significantly. Modern HCL replaces legacy plugins like `template_file` with the native `templatefile()` function, eliminates redundant interpolation (`foo = var.bar` instead of `foo = \"${var.bar}\"`), and provides native type constraints, improving performance.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/templatefile",
    tags: ["HCL Evolution","templatefile Function","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-297",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Managing Terraform Deprecations and Breaking Changes: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates HCL Evolution to modernize a legacy Terraform 0.12 codebase to modern Terraform 1.x standards, eliminating deprecated provider data sources and syntax.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Replace the `template_file` data sources with the `templatefile()` function." },
      { id: 'B', text: "Pin the Terraform version in `required_version` so the deprecated syntax keeps working." },
      { id: 'C', text: "Replace the `template_file` data sources with `local_file` resources rendered by an external script." },
      { id: 'D', text: "Pin the `template` provider to its final release so the deprecation warning stops appearing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Replace deprecated `template_file` data sources with native `templatefile()` functions and remove obsolete `${var.foo}` redundant interpolation. Terraform has evolved significantly. Modern HCL replaces legacy plugins like `template_file` with the native `templatefile()` function, eliminates redundant interpolation (`foo = var.bar` instead of `foo = \"${var.bar}\"`), and provides native type constraints, improving performance.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/templatefile",
    tags: ["HCL Evolution","templatefile Function","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-298",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Managing Terraform Deprecations and Breaking Changes: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates HCL Evolution to modernize a legacy Terraform 0.12 codebase to modern Terraform 1.x standards, eliminating deprecated provider data sources and syntax.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Replace the `template_file` data sources with `local_file` resources rendered by an external script." },
      { id: 'B', text: "Pin the `template` provider to its final release so the deprecation warning stops appearing." },
      { id: 'C', text: "Replace the `template_file` data sources with the `templatefile()` function." },
      { id: 'D', text: "Pin the Terraform version in `required_version` so the deprecated syntax keeps working." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Replace deprecated `template_file` data sources with native `templatefile()` functions and remove obsolete `${var.foo}` redundant interpolation. Terraform has evolved significantly. Modern HCL replaces legacy plugins like `template_file` with the native `templatefile()` function, eliminates redundant interpolation (`foo = var.bar` instead of `foo = \"${var.bar}\"`), and provides native type constraints, improving performance.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/templatefile",
    tags: ["HCL Evolution","templatefile Function","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-299",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Managing Terraform Deprecations and Breaking Changes: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates HCL Evolution to modernize a legacy Terraform 0.12 codebase to modern Terraform 1.x standards, eliminating deprecated provider data sources and syntax.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Replace the `template_file` data sources with `local_file` resources rendered by an external script." },
      { id: 'B', text: "Pin the `template` provider to its final release so the deprecation warning stops appearing." },
      { id: 'C', text: "Replace the `template_file` data sources with the `templatefile()` function." },
      { id: 'D', text: "Pin the Terraform version in `required_version` so the deprecated syntax keeps working." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Replace deprecated `template_file` data sources with native `templatefile()` functions and remove obsolete `${var.foo}` redundant interpolation. Terraform has evolved significantly. Modern HCL replaces legacy plugins like `template_file` with the native `templatefile()` function, eliminates redundant interpolation (`foo = var.bar` instead of `foo = \"${var.bar}\"`), and provides native type constraints, improving performance.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/templatefile",
    tags: ["HCL Evolution","templatefile Function","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-300",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Managing Terraform Deprecations and Breaking Changes: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates HCL Evolution to modernize a legacy Terraform 0.12 codebase to modern Terraform 1.x standards, eliminating deprecated provider data sources and syntax.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Pin the Terraform version in `required_version` so the deprecated syntax keeps working." },
      { id: 'B', text: "Replace the `template_file` data sources with `local_file` resources rendered by an external script." },
      { id: 'C', text: "Replace the `template_file` data sources with the `templatefile()` function." },
      { id: 'D', text: "Pin the `template` provider to its final release so the deprecation warning stops appearing." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Replace deprecated `template_file` data sources with native `templatefile()` functions and remove obsolete `${var.foo}` redundant interpolation. Terraform has evolved significantly. Modern HCL replaces legacy plugins like `template_file` with the native `templatefile()` function, eliminates redundant interpolation (`foo = var.bar` instead of `foo = \"${var.bar}\"`), and provides native type constraints, improving performance.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/templatefile",
    tags: ["HCL Evolution","templatefile Function","Resilience Failure"]
  }
];

export default HASHICORP_TFP_QUESTIONS_12;
