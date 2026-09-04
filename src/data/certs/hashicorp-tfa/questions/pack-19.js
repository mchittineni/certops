export const HASHICORP_TFA_QUESTIONS_19 = [
  {
    id: "hashicorp-tfa-451",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Remote State Data Source (terraform_remote_state): Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Cross-State Sharing to allow an application deployment configuration to read the VPC and subnet IDs produced by a separate networking Terraform pipeline.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Consuming root outputs from other state files via terraform_remote_state is under consideration.",
    options: [
      { id: 'A', text: "Use a `data \"terraform_remote_state\" \"network\"` block pointing to the networking project's remote backend configuration." },
      { id: 'B', text: "Hardcode the subnet IDs directly into the application `.tf` file." },
      { id: 'C', text: "Merge the networking and application configurations into a single massive 50,000-line codebase." },
      { id: 'D', text: "Grant full read access to all developer AWS accounts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `data \"terraform_remote_state\" \"network\"` block pointing to the networking project's remote backend configuration. The `terraform_remote_state` data source uses the latest state snapshot from another remote backend to expose its root output values. This allows teams to decouple infrastructure into independent layers (e.g., foundational networking vs application compute) with isolated lifecycles and blast radiuses.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/remote-state-data",
    tags: ["Cross-State Sharing", "terraform_remote_state", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-452",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Remote State Data Source (terraform_remote_state): High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Cross-State Sharing to allow an application deployment configuration to read the VPC and subnet IDs produced by a separate networking Terraform pipeline.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Consuming root outputs from other state files via terraform_remote_state is under consideration.",
    options: [
      { id: 'A', text: "Use a `data \"terraform_remote_state\" \"network\"` block pointing to the networking project's remote backend configuration." },
      { id: 'B', text: "Hardcode the subnet IDs directly into the application `.tf` file." },
      { id: 'C', text: "Merge the networking and application configurations into a single massive 50,000-line codebase." },
      { id: 'D', text: "Grant full read access to all developer AWS accounts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `data \"terraform_remote_state\" \"network\"` block pointing to the networking project's remote backend configuration. The `terraform_remote_state` data source uses the latest state snapshot from another remote backend to expose its root output values. This allows teams to decouple infrastructure into independent layers (e.g., foundational networking vs application compute) with isolated lifecycles and blast radiuses.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/remote-state-data",
    tags: ["Cross-State Sharing", "terraform_remote_state", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-453",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Remote State Data Source (terraform_remote_state): Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Cross-State Sharing to allow an application deployment configuration to read the VPC and subnet IDs produced by a separate networking Terraform pipeline.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Consuming root outputs from other state files via terraform_remote_state is under consideration.",
    options: [
      { id: 'A', text: "Use a `data \"terraform_remote_state\" \"network\"` block pointing to the networking project's remote backend configuration." },
      { id: 'B', text: "Hardcode the subnet IDs directly into the application `.tf` file." },
      { id: 'C', text: "Merge the networking and application configurations into a single massive 50,000-line codebase." },
      { id: 'D', text: "Grant full read access to all developer AWS accounts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `data \"terraform_remote_state\" \"network\"` block pointing to the networking project's remote backend configuration. The `terraform_remote_state` data source uses the latest state snapshot from another remote backend to expose its root output values. This allows teams to decouple infrastructure into independent layers (e.g., foundational networking vs application compute) with isolated lifecycles and blast radiuses.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/remote-state-data",
    tags: ["Cross-State Sharing", "terraform_remote_state", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-454",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Remote State Data Source (terraform_remote_state): Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Cross-State Sharing to allow an application deployment configuration to read the VPC and subnet IDs produced by a separate networking Terraform pipeline.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Consuming root outputs from other state files via terraform_remote_state is under consideration.",
    options: [
      { id: 'A', text: "Use a `data \"terraform_remote_state\" \"network\"` block pointing to the networking project's remote backend configuration." },
      { id: 'B', text: "Hardcode the subnet IDs directly into the application `.tf` file." },
      { id: 'C', text: "Merge the networking and application configurations into a single massive 50,000-line codebase." },
      { id: 'D', text: "Grant full read access to all developer AWS accounts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `data \"terraform_remote_state\" \"network\"` block pointing to the networking project's remote backend configuration. The `terraform_remote_state` data source uses the latest state snapshot from another remote backend to expose its root output values. This allows teams to decouple infrastructure into independent layers (e.g., foundational networking vs application compute) with isolated lifecycles and blast radiuses.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/remote-state-data",
    tags: ["Cross-State Sharing", "terraform_remote_state", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-455",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Remote State Data Source (terraform_remote_state): Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Cross-State Sharing to allow an application deployment configuration to read the VPC and subnet IDs produced by a separate networking Terraform pipeline.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Consuming root outputs from other state files via terraform_remote_state is under consideration.",
    options: [
      { id: 'A', text: "Use a `data \"terraform_remote_state\" \"network\"` block pointing to the networking project's remote backend configuration." },
      { id: 'B', text: "Hardcode the subnet IDs directly into the application `.tf` file." },
      { id: 'C', text: "Merge the networking and application configurations into a single massive 50,000-line codebase." },
      { id: 'D', text: "Grant full read access to all developer AWS accounts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `data \"terraform_remote_state\" \"network\"` block pointing to the networking project's remote backend configuration. The `terraform_remote_state` data source uses the latest state snapshot from another remote backend to expose its root output values. This allows teams to decouple infrastructure into independent layers (e.g., foundational networking vs application compute) with isolated lifecycles and blast radiuses.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/remote-state-data",
    tags: ["Cross-State Sharing", "terraform_remote_state", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-456",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "HCL Data Types: Primitive and Complex: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates HCL Data Types to declare a strongly typed variable representing a collection of server configurations with names, port numbers, and enabled flags.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Working with string, number, bool, list, set, map, object, and tuple types is under consideration.",
    options: [
      { id: 'A', text: "Define the variable type as `list(object({ name = string, port = number, enabled = bool }))`." },
      { id: 'B', text: "Define the variable type as `any` without type constraints." },
      { id: 'C', text: "Store all configurations as comma-separated strings inside a single text variable." },
      { id: 'D', text: "Terraform variables only support string and number types." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the variable type as `list(object({ name = string, port = number, enabled = bool }))`. Terraform HCL provides primitive types (`string`, `number`, `bool`) and complex collection/structural types (`list`, `set`, `map`, `object`, `tuple`). Defining explicit structural types ensures early validation of configuration data and catches typos before plan execution.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/types",
    tags: ["HCL Data Types", "HCL Data Types", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-457",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "HCL Data Types: Primitive and Complex: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates HCL Data Types to declare a strongly typed variable representing a collection of server configurations with names, port numbers, and enabled flags.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Working with string, number, bool, list, set, map, object, and tuple types is under consideration.",
    options: [
      { id: 'A', text: "Define the variable type as `list(object({ name = string, port = number, enabled = bool }))`." },
      { id: 'B', text: "Define the variable type as `any` without type constraints." },
      { id: 'C', text: "Store all configurations as comma-separated strings inside a single text variable." },
      { id: 'D', text: "Terraform variables only support string and number types." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the variable type as `list(object({ name = string, port = number, enabled = bool }))`. Terraform HCL provides primitive types (`string`, `number`, `bool`) and complex collection/structural types (`list`, `set`, `map`, `object`, `tuple`). Defining explicit structural types ensures early validation of configuration data and catches typos before plan execution.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/types",
    tags: ["HCL Data Types", "HCL Data Types", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-458",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "HCL Data Types: Primitive and Complex: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates HCL Data Types to declare a strongly typed variable representing a collection of server configurations with names, port numbers, and enabled flags.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Working with string, number, bool, list, set, map, object, and tuple types is under consideration.",
    options: [
      { id: 'A', text: "Define the variable type as `list(object({ name = string, port = number, enabled = bool }))`." },
      { id: 'B', text: "Define the variable type as `any` without type constraints." },
      { id: 'C', text: "Store all configurations as comma-separated strings inside a single text variable." },
      { id: 'D', text: "Terraform variables only support string and number types." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the variable type as `list(object({ name = string, port = number, enabled = bool }))`. Terraform HCL provides primitive types (`string`, `number`, `bool`) and complex collection/structural types (`list`, `set`, `map`, `object`, `tuple`). Defining explicit structural types ensures early validation of configuration data and catches typos before plan execution.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/types",
    tags: ["HCL Data Types", "HCL Data Types", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-459",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "HCL Data Types: Primitive and Complex: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates HCL Data Types to declare a strongly typed variable representing a collection of server configurations with names, port numbers, and enabled flags.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Working with string, number, bool, list, set, map, object, and tuple types is under consideration.",
    options: [
      { id: 'A', text: "Define the variable type as `list(object({ name = string, port = number, enabled = bool }))`." },
      { id: 'B', text: "Define the variable type as `any` without type constraints." },
      { id: 'C', text: "Store all configurations as comma-separated strings inside a single text variable." },
      { id: 'D', text: "Terraform variables only support string and number types." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the variable type as `list(object({ name = string, port = number, enabled = bool }))`. Terraform HCL provides primitive types (`string`, `number`, `bool`) and complex collection/structural types (`list`, `set`, `map`, `object`, `tuple`). Defining explicit structural types ensures early validation of configuration data and catches typos before plan execution.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/types",
    tags: ["HCL Data Types", "HCL Data Types", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-460",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "HCL Data Types: Primitive and Complex: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates HCL Data Types to declare a strongly typed variable representing a collection of server configurations with names, port numbers, and enabled flags.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Working with string, number, bool, list, set, map, object, and tuple types is under consideration.",
    options: [
      { id: 'A', text: "Define the variable type as `list(object({ name = string, port = number, enabled = bool }))`." },
      { id: 'B', text: "Define the variable type as `any` without type constraints." },
      { id: 'C', text: "Store all configurations as comma-separated strings inside a single text variable." },
      { id: 'D', text: "Terraform variables only support string and number types." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the variable type as `list(object({ name = string, port = number, enabled = bool }))`. Terraform HCL provides primitive types (`string`, `number`, `bool`) and complex collection/structural types (`list`, `set`, `map`, `object`, `tuple`). Defining explicit structural types ensures early validation of configuration data and catches typos before plan execution.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/types",
    tags: ["HCL Data Types", "HCL Data Types", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-461",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Terraform Expressions and Built-in Functions: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates HCL Functions to merge default server tags with environment-specific tags into a single unified tag map across all cloud resources.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Manipulating data using lookup, merge, coalesce, and format functions is under consideration.",
    options: [
      { id: 'A', text: "Use the built-in `merge(var.default_tags, var.environment_tags)` function in the resource `tags` attribute." },
      { id: 'B', text: "Write a custom Python script to concatenate dictionaries outside of Terraform." },
      { id: 'C', text: "Hand-code all tags repeatedly on every single resource block." },
      { id: 'D', text: "Functions are not supported in Terraform HCL expressions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the built-in `merge(var.default_tags, var.environment_tags)` function in the resource `tags` attribute. Terraform HCL includes built-in functions for string, collection, numeric, and filesystem manipulation (e.g., `merge`, `lookup`, `coalesce`, `element`, `jsonencode`). Functions allow dynamic transformation of configuration data without writing external scripts.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions",
    tags: ["HCL Functions", "HCL Functions", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-462",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Terraform Expressions and Built-in Functions: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates HCL Functions to merge default server tags with environment-specific tags into a single unified tag map across all cloud resources.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Manipulating data using lookup, merge, coalesce, and format functions is under consideration.",
    options: [
      { id: 'A', text: "Use the built-in `merge(var.default_tags, var.environment_tags)` function in the resource `tags` attribute." },
      { id: 'B', text: "Write a custom Python script to concatenate dictionaries outside of Terraform." },
      { id: 'C', text: "Hand-code all tags repeatedly on every single resource block." },
      { id: 'D', text: "Functions are not supported in Terraform HCL expressions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the built-in `merge(var.default_tags, var.environment_tags)` function in the resource `tags` attribute. Terraform HCL includes built-in functions for string, collection, numeric, and filesystem manipulation (e.g., `merge`, `lookup`, `coalesce`, `element`, `jsonencode`). Functions allow dynamic transformation of configuration data without writing external scripts.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions",
    tags: ["HCL Functions", "HCL Functions", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-463",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Terraform Expressions and Built-in Functions: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates HCL Functions to merge default server tags with environment-specific tags into a single unified tag map across all cloud resources.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Manipulating data using lookup, merge, coalesce, and format functions is under consideration.",
    options: [
      { id: 'A', text: "Use the built-in `merge(var.default_tags, var.environment_tags)` function in the resource `tags` attribute." },
      { id: 'B', text: "Write a custom Python script to concatenate dictionaries outside of Terraform." },
      { id: 'C', text: "Hand-code all tags repeatedly on every single resource block." },
      { id: 'D', text: "Functions are not supported in Terraform HCL expressions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the built-in `merge(var.default_tags, var.environment_tags)` function in the resource `tags` attribute. Terraform HCL includes built-in functions for string, collection, numeric, and filesystem manipulation (e.g., `merge`, `lookup`, `coalesce`, `element`, `jsonencode`). Functions allow dynamic transformation of configuration data without writing external scripts.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions",
    tags: ["HCL Functions", "HCL Functions", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-464",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Terraform Expressions and Built-in Functions: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates HCL Functions to merge default server tags with environment-specific tags into a single unified tag map across all cloud resources.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Manipulating data using lookup, merge, coalesce, and format functions is under consideration.",
    options: [
      { id: 'A', text: "Use the built-in `merge(var.default_tags, var.environment_tags)` function in the resource `tags` attribute." },
      { id: 'B', text: "Write a custom Python script to concatenate dictionaries outside of Terraform." },
      { id: 'C', text: "Hand-code all tags repeatedly on every single resource block." },
      { id: 'D', text: "Functions are not supported in Terraform HCL expressions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the built-in `merge(var.default_tags, var.environment_tags)` function in the resource `tags` attribute. Terraform HCL includes built-in functions for string, collection, numeric, and filesystem manipulation (e.g., `merge`, `lookup`, `coalesce`, `element`, `jsonencode`). Functions allow dynamic transformation of configuration data without writing external scripts.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions",
    tags: ["HCL Functions", "HCL Functions", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-465",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Terraform Expressions and Built-in Functions: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates HCL Functions to merge default server tags with environment-specific tags into a single unified tag map across all cloud resources.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Manipulating data using lookup, merge, coalesce, and format functions is under consideration.",
    options: [
      { id: 'A', text: "Use the built-in `merge(var.default_tags, var.environment_tags)` function in the resource `tags` attribute." },
      { id: 'B', text: "Write a custom Python script to concatenate dictionaries outside of Terraform." },
      { id: 'C', text: "Hand-code all tags repeatedly on every single resource block." },
      { id: 'D', text: "Functions are not supported in Terraform HCL expressions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the built-in `merge(var.default_tags, var.environment_tags)` function in the resource `tags` attribute. Terraform HCL includes built-in functions for string, collection, numeric, and filesystem manipulation (e.g., `merge`, `lookup`, `coalesce`, `element`, `jsonencode`). Functions allow dynamic transformation of configuration data without writing external scripts.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions",
    tags: ["HCL Functions", "HCL Functions", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-466",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Dynamic Blocks and Content Iteration: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Dynamic Blocks to dynamically generate multiple ingress rule blocks inside an AWS security group based on a list of approved ports.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Generating repeated nested configuration blocks using dynamic and content is under consideration.",
    options: [
      { id: 'A', text: "Use a `dynamic \"ingress\"` block iterating over `var.service_ports` with a `content` block defining port parameters." },
      { id: 'B', text: "Manually write out 20 identical ingress blocks by hand in the configuration file." },
      { id: 'C', text: "Use `for_each` on the entire security group resource, creating 20 separate security groups." },
      { id: 'D', text: "Nested blocks cannot be generated dynamically in Terraform." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `dynamic \"ingress\"` block iterating over `var.service_ports` with a `content` block defining port parameters. `dynamic` blocks construct repeated nested configuration blocks (like `ingress` in security groups or `setting` in App Service) within top-level resources. Iterating over a collection via `dynamic` keeps configurations DRY without duplicating boilerplate code.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks",
    tags: ["Dynamic Blocks", "Dynamic Blocks", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-467",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Dynamic Blocks and Content Iteration: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Dynamic Blocks to dynamically generate multiple ingress rule blocks inside an AWS security group based on a list of approved ports.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Generating repeated nested configuration blocks using dynamic and content is under consideration.",
    options: [
      { id: 'A', text: "Use a `dynamic \"ingress\"` block iterating over `var.service_ports` with a `content` block defining port parameters." },
      { id: 'B', text: "Manually write out 20 identical ingress blocks by hand in the configuration file." },
      { id: 'C', text: "Use `for_each` on the entire security group resource, creating 20 separate security groups." },
      { id: 'D', text: "Nested blocks cannot be generated dynamically in Terraform." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `dynamic \"ingress\"` block iterating over `var.service_ports` with a `content` block defining port parameters. `dynamic` blocks construct repeated nested configuration blocks (like `ingress` in security groups or `setting` in App Service) within top-level resources. Iterating over a collection via `dynamic` keeps configurations DRY without duplicating boilerplate code.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks",
    tags: ["Dynamic Blocks", "Dynamic Blocks", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-468",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Dynamic Blocks and Content Iteration: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Dynamic Blocks to dynamically generate multiple ingress rule blocks inside an AWS security group based on a list of approved ports.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Generating repeated nested configuration blocks using dynamic and content is under consideration.",
    options: [
      { id: 'A', text: "Use a `dynamic \"ingress\"` block iterating over `var.service_ports` with a `content` block defining port parameters." },
      { id: 'B', text: "Manually write out 20 identical ingress blocks by hand in the configuration file." },
      { id: 'C', text: "Use `for_each` on the entire security group resource, creating 20 separate security groups." },
      { id: 'D', text: "Nested blocks cannot be generated dynamically in Terraform." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `dynamic \"ingress\"` block iterating over `var.service_ports` with a `content` block defining port parameters. `dynamic` blocks construct repeated nested configuration blocks (like `ingress` in security groups or `setting` in App Service) within top-level resources. Iterating over a collection via `dynamic` keeps configurations DRY without duplicating boilerplate code.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks",
    tags: ["Dynamic Blocks", "Dynamic Blocks", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-469",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Dynamic Blocks and Content Iteration: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Dynamic Blocks to dynamically generate multiple ingress rule blocks inside an AWS security group based on a list of approved ports.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Generating repeated nested configuration blocks using dynamic and content is under consideration.",
    options: [
      { id: 'A', text: "Use a `dynamic \"ingress\"` block iterating over `var.service_ports` with a `content` block defining port parameters." },
      { id: 'B', text: "Manually write out 20 identical ingress blocks by hand in the configuration file." },
      { id: 'C', text: "Use `for_each` on the entire security group resource, creating 20 separate security groups." },
      { id: 'D', text: "Nested blocks cannot be generated dynamically in Terraform." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `dynamic \"ingress\"` block iterating over `var.service_ports` with a `content` block defining port parameters. `dynamic` blocks construct repeated nested configuration blocks (like `ingress` in security groups or `setting` in App Service) within top-level resources. Iterating over a collection via `dynamic` keeps configurations DRY without duplicating boilerplate code.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks",
    tags: ["Dynamic Blocks", "Dynamic Blocks", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-470",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Dynamic Blocks and Content Iteration: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Dynamic Blocks to dynamically generate multiple ingress rule blocks inside an AWS security group based on a list of approved ports.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Generating repeated nested configuration blocks using dynamic and content is under consideration.",
    options: [
      { id: 'A', text: "Use a `dynamic \"ingress\"` block iterating over `var.service_ports` with a `content` block defining port parameters." },
      { id: 'B', text: "Manually write out 20 identical ingress blocks by hand in the configuration file." },
      { id: 'C', text: "Use `for_each` on the entire security group resource, creating 20 separate security groups." },
      { id: 'D', text: "Nested blocks cannot be generated dynamically in Terraform." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `dynamic \"ingress\"` block iterating over `var.service_ports` with a `content` block defining port parameters. `dynamic` blocks construct repeated nested configuration blocks (like `ingress` in security groups or `setting` in App Service) within top-level resources. Iterating over a collection via `dynamic` keeps configurations DRY without duplicating boilerplate code.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks",
    tags: ["Dynamic Blocks", "Dynamic Blocks", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-471",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "for Expressions and List/Map Comprehensions: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates for Expressions to transform a list of uppercase server names into lowercase strings with an environment suffix for resource naming.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Transforming collections using [for x in list : transform] and {for k, v in map : k =&gt; v} is under consideration.",
    options: [
      { id: 'A', text: "Use a list comprehension `[for name in var.server_names : lower(\"${name}-${var.env}\")]`." },
      { id: 'B', text: "Run a shell script to rewrite the variable file before applying." },
      { id: 'C', text: "Write a custom provider to handle string formatting." },
      { id: 'D', text: "Use a while loop inside a local block." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a list comprehension `[for name in var.server_names : lower(\"${name}-${var.env}\")]`. `for` expressions transform one collection type into another. A tuple comprehension (`[for x in list : ...]`) produces a list, while an object comprehension (`{for k, v in map : k =&gt; ...}`) produces a map, enabling elegant and concise data transformations directly in HCL.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/for",
    tags: ["for Expressions", "for Expressions", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-472",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "for Expressions and List/Map Comprehensions: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates for Expressions to transform a list of uppercase server names into lowercase strings with an environment suffix for resource naming.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Transforming collections using [for x in list : transform] and {for k, v in map : k =&gt; v} is under consideration.",
    options: [
      { id: 'A', text: "Use a list comprehension `[for name in var.server_names : lower(\"${name}-${var.env}\")]`." },
      { id: 'B', text: "Run a shell script to rewrite the variable file before applying." },
      { id: 'C', text: "Write a custom provider to handle string formatting." },
      { id: 'D', text: "Use a while loop inside a local block." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a list comprehension `[for name in var.server_names : lower(\"${name}-${var.env}\")]`. `for` expressions transform one collection type into another. A tuple comprehension (`[for x in list : ...]`) produces a list, while an object comprehension (`{for k, v in map : k =&gt; ...}`) produces a map, enabling elegant and concise data transformations directly in HCL.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/for",
    tags: ["for Expressions", "for Expressions", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-473",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "for Expressions and List/Map Comprehensions: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates for Expressions to transform a list of uppercase server names into lowercase strings with an environment suffix for resource naming.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Transforming collections using [for x in list : transform] and {for k, v in map : k =&gt; v} is under consideration.",
    options: [
      { id: 'A', text: "Use a list comprehension `[for name in var.server_names : lower(\"${name}-${var.env}\")]`." },
      { id: 'B', text: "Run a shell script to rewrite the variable file before applying." },
      { id: 'C', text: "Write a custom provider to handle string formatting." },
      { id: 'D', text: "Use a while loop inside a local block." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a list comprehension `[for name in var.server_names : lower(\"${name}-${var.env}\")]`. `for` expressions transform one collection type into another. A tuple comprehension (`[for x in list : ...]`) produces a list, while an object comprehension (`{for k, v in map : k =&gt; ...}`) produces a map, enabling elegant and concise data transformations directly in HCL.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/for",
    tags: ["for Expressions", "for Expressions", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-474",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "for Expressions and List/Map Comprehensions: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates for Expressions to transform a list of uppercase server names into lowercase strings with an environment suffix for resource naming.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Transforming collections using [for x in list : transform] and {for k, v in map : k =&gt; v} is under consideration.",
    options: [
      { id: 'A', text: "Use a list comprehension `[for name in var.server_names : lower(\"${name}-${var.env}\")]`." },
      { id: 'B', text: "Run a shell script to rewrite the variable file before applying." },
      { id: 'C', text: "Write a custom provider to handle string formatting." },
      { id: 'D', text: "Use a while loop inside a local block." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a list comprehension `[for name in var.server_names : lower(\"${name}-${var.env}\")]`. `for` expressions transform one collection type into another. A tuple comprehension (`[for x in list : ...]`) produces a list, while an object comprehension (`{for k, v in map : k =&gt; ...}`) produces a map, enabling elegant and concise data transformations directly in HCL.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/for",
    tags: ["for Expressions", "for Expressions", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-475",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "for Expressions and List/Map Comprehensions: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates for Expressions to transform a list of uppercase server names into lowercase strings with an environment suffix for resource naming.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Transforming collections using [for x in list : transform] and {for k, v in map : k =&gt; v} is under consideration.",
    options: [
      { id: 'A', text: "Use a list comprehension `[for name in var.server_names : lower(\"${name}-${var.env}\")]`." },
      { id: 'B', text: "Run a shell script to rewrite the variable file before applying." },
      { id: 'C', text: "Write a custom provider to handle string formatting." },
      { id: 'D', text: "Use a while loop inside a local block." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a list comprehension `[for name in var.server_names : lower(\"${name}-${var.env}\")]`. `for` expressions transform one collection type into another. A tuple comprehension (`[for x in list : ...]`) produces a list, while an object comprehension (`{for k, v in map : k =&gt; ...}`) produces a map, enabling elegant and concise data transformations directly in HCL.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/for",
    tags: ["for Expressions", "for Expressions", "Resilience Failure"]
  }
];

export default HASHICORP_TFA_QUESTIONS_19;
