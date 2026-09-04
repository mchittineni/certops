export const HASHICORP_TFP_QUESTIONS_13 = [
  {
    id: "hashicorp-tfp-301",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Handling Null Values and Dynamic Attribute Suppression: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Attribute Suppression to conditionally omit an optional configuration attribute (like `kms_key_id`) from a resource API call when encryption is disabled.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Using null to conditionally omit resource arguments from provider API calls is under consideration.",
    options: [
      { id: 'A', text: "Set `kms_key_id = var.enable_encryption ? var.kms_key_id : null` in the resource specification." },
      { id: 'B', text: "Pass a dummy invalid KMS ARN when encryption is disabled." },
      { id: 'C', text: "Duplicate the entire resource block into two versions (encrypted and unencrypted)." },
      { id: 'D', text: "Set `kms_key_id = \"\"` passing an empty string that cloud APIs reject with validation errors." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `kms_key_id = var.enable_encryption ? var.kms_key_id : null` in the resource specification. In Terraform, assigning `null` to an argument is equivalent to omitting that argument entirely. This allows configurations to dynamically suppress optional parameters without duplicating entire resource definitions or passing invalid empty string values to cloud APIs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/null",
    tags: ["Attribute Suppression", "null Values", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-302",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Handling Null Values and Dynamic Attribute Suppression: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Attribute Suppression to conditionally omit an optional configuration attribute (like `kms_key_id`) from a resource API call when encryption is disabled.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Using null to conditionally omit resource arguments from provider API calls is under consideration.",
    options: [
      { id: 'A', text: "Set `kms_key_id = var.enable_encryption ? var.kms_key_id : null` in the resource specification." },
      { id: 'B', text: "Duplicate the entire resource block into two versions (encrypted and unencrypted)." },
      { id: 'C', text: "Pass a dummy invalid KMS ARN when encryption is disabled." },
      { id: 'D', text: "Set `kms_key_id = \"\"` passing an empty string that cloud APIs reject with validation errors." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `kms_key_id = var.enable_encryption ? var.kms_key_id : null` in the resource specification. In Terraform, assigning `null` to an argument is equivalent to omitting that argument entirely. This allows configurations to dynamically suppress optional parameters without duplicating entire resource definitions or passing invalid empty string values to cloud APIs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/null",
    tags: ["Attribute Suppression", "null Values", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-303",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Handling Null Values and Dynamic Attribute Suppression: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Attribute Suppression to conditionally omit an optional configuration attribute (like `kms_key_id`) from a resource API call when encryption is disabled.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Using null to conditionally omit resource arguments from provider API calls is under consideration.",
    options: [
      { id: 'A', text: "Pass a dummy invalid KMS ARN when encryption is disabled." },
      { id: 'B', text: "Set `kms_key_id = \"\"` passing an empty string that cloud APIs reject with validation errors." },
      { id: 'C', text: "Duplicate the entire resource block into two versions (encrypted and unencrypted)." },
      { id: 'D', text: "Set `kms_key_id = var.enable_encryption ? var.kms_key_id : null` in the resource specification." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set `kms_key_id = var.enable_encryption ? var.kms_key_id : null` in the resource specification. In Terraform, assigning `null` to an argument is equivalent to omitting that argument entirely. This allows configurations to dynamically suppress optional parameters without duplicating entire resource definitions or passing invalid empty string values to cloud APIs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/null",
    tags: ["Attribute Suppression", "null Values", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-304",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Handling Null Values and Dynamic Attribute Suppression: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Attribute Suppression to conditionally omit an optional configuration attribute (like `kms_key_id`) from a resource API call when encryption is disabled.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Using null to conditionally omit resource arguments from provider API calls is under consideration.",
    options: [
      { id: 'A', text: "Pass a dummy invalid KMS ARN when encryption is disabled." },
      { id: 'B', text: "Set `kms_key_id = var.enable_encryption ? var.kms_key_id : null` in the resource specification." },
      { id: 'C', text: "Set `kms_key_id = \"\"` passing an empty string that cloud APIs reject with validation errors." },
      { id: 'D', text: "Duplicate the entire resource block into two versions (encrypted and unencrypted)." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `kms_key_id = var.enable_encryption ? var.kms_key_id : null` in the resource specification. In Terraform, assigning `null` to an argument is equivalent to omitting that argument entirely. This allows configurations to dynamically suppress optional parameters without duplicating entire resource definitions or passing invalid empty string values to cloud APIs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/null",
    tags: ["Attribute Suppression", "null Values", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-305",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Handling Null Values and Dynamic Attribute Suppression: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Attribute Suppression to conditionally omit an optional configuration attribute (like `kms_key_id`) from a resource API call when encryption is disabled.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Using null to conditionally omit resource arguments from provider API calls is under consideration.",
    options: [
      { id: 'A', text: "Duplicate the entire resource block into two versions (encrypted and unencrypted)." },
      { id: 'B', text: "Set `kms_key_id = \"\"` passing an empty string that cloud APIs reject with validation errors." },
      { id: 'C', text: "Set `kms_key_id = var.enable_encryption ? var.kms_key_id : null` in the resource specification." },
      { id: 'D', text: "Pass a dummy invalid KMS ARN when encryption is disabled." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set `kms_key_id = var.enable_encryption ? var.kms_key_id : null` in the resource specification. In Terraform, assigning `null` to an argument is equivalent to omitting that argument entirely. This allows configurations to dynamically suppress optional parameters without duplicating entire resource definitions or passing invalid empty string values to cloud APIs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/null",
    tags: ["Attribute Suppression", "null Values", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-306",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Terraform String Manipulation: jsonencode and yamlencode: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Encoding Functions to generate a complex AWS IAM policy document containing variable values without introducing JSON syntax or escaping errors.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Generating valid JSON IAM policies and YAML Kubernetes manifests safely with encoding functions is under consideration.",
    options: [
      { id: 'A', text: "Write raw JSON strings in heredoc blocks and manually escape all quotation marks." },
      { id: 'B', text: "Hardcode static JSON strings without parameterization." },
      { id: 'C', text: "Use `jsonencode()` with native HCL map and list structures rather than writing raw heredoc JSON strings with `${...}` interpolation." },
      { id: 'D', text: "Generate JSON using an external Python script executed via local-exec." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `jsonencode()` with native HCL map and list structures rather than writing raw heredoc JSON strings with `${...}` interpolation. Authoring JSON policies via string concatenation in heredoc blocks is error-prone and vulnerable to syntax errors. Using `jsonencode()` allows authoring policies using native HCL syntax with type safety, ensuring Terraform serializes perfectly formatted, valid JSON payloads.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/jsonencode",
    tags: ["Encoding Functions", "jsonencode Function", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-307",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Terraform String Manipulation: jsonencode and yamlencode: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Encoding Functions to generate a complex AWS IAM policy document containing variable values without introducing JSON syntax or escaping errors.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Generating valid JSON IAM policies and YAML Kubernetes manifests safely with encoding functions is under consideration.",
    options: [
      { id: 'A', text: "Generate JSON using an external Python script executed via local-exec." },
      { id: 'B', text: "Write raw JSON strings in heredoc blocks and manually escape all quotation marks." },
      { id: 'C', text: "Use `jsonencode()` with native HCL map and list structures rather than writing raw heredoc JSON strings with `${...}` interpolation." },
      { id: 'D', text: "Hardcode static JSON strings without parameterization." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `jsonencode()` with native HCL map and list structures rather than writing raw heredoc JSON strings with `${...}` interpolation. Authoring JSON policies via string concatenation in heredoc blocks is error-prone and vulnerable to syntax errors. Using `jsonencode()` allows authoring policies using native HCL syntax with type safety, ensuring Terraform serializes perfectly formatted, valid JSON payloads.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/jsonencode",
    tags: ["Encoding Functions", "jsonencode Function", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-308",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Terraform String Manipulation: jsonencode and yamlencode: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Encoding Functions to generate a complex AWS IAM policy document containing variable values without introducing JSON syntax or escaping errors.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Generating valid JSON IAM policies and YAML Kubernetes manifests safely with encoding functions is under consideration.",
    options: [
      { id: 'A', text: "Hardcode static JSON strings without parameterization." },
      { id: 'B', text: "Generate JSON using an external Python script executed via local-exec." },
      { id: 'C', text: "Write raw JSON strings in heredoc blocks and manually escape all quotation marks." },
      { id: 'D', text: "Use `jsonencode()` with native HCL map and list structures rather than writing raw heredoc JSON strings with `${...}` interpolation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `jsonencode()` with native HCL map and list structures rather than writing raw heredoc JSON strings with `${...}` interpolation. Authoring JSON policies via string concatenation in heredoc blocks is error-prone and vulnerable to syntax errors. Using `jsonencode()` allows authoring policies using native HCL syntax with type safety, ensuring Terraform serializes perfectly formatted, valid JSON payloads.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/jsonencode",
    tags: ["Encoding Functions", "jsonencode Function", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-309",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Terraform String Manipulation: jsonencode and yamlencode: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Encoding Functions to generate a complex AWS IAM policy document containing variable values without introducing JSON syntax or escaping errors.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Generating valid JSON IAM policies and YAML Kubernetes manifests safely with encoding functions is under consideration.",
    options: [
      { id: 'A', text: "Generate JSON using an external Python script executed via local-exec." },
      { id: 'B', text: "Hardcode static JSON strings without parameterization." },
      { id: 'C', text: "Use `jsonencode()` with native HCL map and list structures rather than writing raw heredoc JSON strings with `${...}` interpolation." },
      { id: 'D', text: "Write raw JSON strings in heredoc blocks and manually escape all quotation marks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `jsonencode()` with native HCL map and list structures rather than writing raw heredoc JSON strings with `${...}` interpolation. Authoring JSON policies via string concatenation in heredoc blocks is error-prone and vulnerable to syntax errors. Using `jsonencode()` allows authoring policies using native HCL syntax with type safety, ensuring Terraform serializes perfectly formatted, valid JSON payloads.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/jsonencode",
    tags: ["Encoding Functions", "jsonencode Function", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-310",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Terraform String Manipulation: jsonencode and yamlencode: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Encoding Functions to generate a complex AWS IAM policy document containing variable values without introducing JSON syntax or escaping errors.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Generating valid JSON IAM policies and YAML Kubernetes manifests safely with encoding functions is under consideration.",
    options: [
      { id: 'A', text: "Write raw JSON strings in heredoc blocks and manually escape all quotation marks." },
      { id: 'B', text: "Generate JSON using an external Python script executed via local-exec." },
      { id: 'C', text: "Use `jsonencode()` with native HCL map and list structures rather than writing raw heredoc JSON strings with `${...}` interpolation." },
      { id: 'D', text: "Hardcode static JSON strings without parameterization." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `jsonencode()` with native HCL map and list structures rather than writing raw heredoc JSON strings with `${...}` interpolation. Authoring JSON policies via string concatenation in heredoc blocks is error-prone and vulnerable to syntax errors. Using `jsonencode()` allows authoring policies using native HCL syntax with type safety, ensuring Terraform serializes perfectly formatted, valid JSON payloads.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/jsonencode",
    tags: ["Encoding Functions", "jsonencode Function", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-311",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Designing Composable and Single-Responsibility Modules: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Module Design to design a reusable infrastructure module library for enterprise development teams without creating monolithic, inflexible modules.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Creating focused, composable modules following single-responsibility principles is under consideration.",
    options: [
      { id: 'A', text: "Create a separate module for every single individual cloud resource." },
      { id: 'B', text: "Prohibit modules and require all teams to write standalone flat resource manifests." },
      { id: 'C', text: "Design small, composable modules focused on single infrastructure domains (e.g., networking, compute, database) that can be combined cleanly." },
      { id: 'D', text: "Create a single monolithic 10,000-line module that provisions an entire company's infrastructure in one block." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Design small, composable modules focused on single infrastructure domains (e.g., networking, compute, database) that can be combined cleanly. Effective module design follows software engineering principles: high cohesion and low coupling. Small, focused modules (single responsibility) are easily tested, versioned, and composed together, whereas monolithic modules become brittle and difficult to maintain.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop",
    tags: ["Module Design", "Module Composition", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-312",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Designing Composable and Single-Responsibility Modules: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Module Design to design a reusable infrastructure module library for enterprise development teams without creating monolithic, inflexible modules.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Creating focused, composable modules following single-responsibility principles is under consideration.",
    options: [
      { id: 'A', text: "Create a single monolithic 10,000-line module that provisions an entire company's infrastructure in one block." },
      { id: 'B', text: "Prohibit modules and require all teams to write standalone flat resource manifests." },
      { id: 'C', text: "Create a separate module for every single individual cloud resource." },
      { id: 'D', text: "Design small, composable modules focused on single infrastructure domains (e.g., networking, compute, database) that can be combined cleanly." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Design small, composable modules focused on single infrastructure domains (e.g., networking, compute, database) that can be combined cleanly. Effective module design follows software engineering principles: high cohesion and low coupling. Small, focused modules (single responsibility) are easily tested, versioned, and composed together, whereas monolithic modules become brittle and difficult to maintain.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop",
    tags: ["Module Design", "Module Composition", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-313",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Designing Composable and Single-Responsibility Modules: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Module Design to design a reusable infrastructure module library for enterprise development teams without creating monolithic, inflexible modules.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Creating focused, composable modules following single-responsibility principles is under consideration.",
    options: [
      { id: 'A', text: "Prohibit modules and require all teams to write standalone flat resource manifests." },
      { id: 'B', text: "Create a separate module for every single individual cloud resource." },
      { id: 'C', text: "Create a single monolithic 10,000-line module that provisions an entire company's infrastructure in one block." },
      { id: 'D', text: "Design small, composable modules focused on single infrastructure domains (e.g., networking, compute, database) that can be combined cleanly." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Design small, composable modules focused on single infrastructure domains (e.g., networking, compute, database) that can be combined cleanly. Effective module design follows software engineering principles: high cohesion and low coupling. Small, focused modules (single responsibility) are easily tested, versioned, and composed together, whereas monolithic modules become brittle and difficult to maintain.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop",
    tags: ["Module Design", "Module Composition", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-314",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Designing Composable and Single-Responsibility Modules: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Module Design to design a reusable infrastructure module library for enterprise development teams without creating monolithic, inflexible modules.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Creating focused, composable modules following single-responsibility principles is under consideration.",
    options: [
      { id: 'A', text: "Create a separate module for every single individual cloud resource." },
      { id: 'B', text: "Prohibit modules and require all teams to write standalone flat resource manifests." },
      { id: 'C', text: "Design small, composable modules focused on single infrastructure domains (e.g., networking, compute, database) that can be combined cleanly." },
      { id: 'D', text: "Create a single monolithic 10,000-line module that provisions an entire company's infrastructure in one block." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Design small, composable modules focused on single infrastructure domains (e.g., networking, compute, database) that can be combined cleanly. Effective module design follows software engineering principles: high cohesion and low coupling. Small, focused modules (single responsibility) are easily tested, versioned, and composed together, whereas monolithic modules become brittle and difficult to maintain.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop",
    tags: ["Module Design", "Module Composition", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-315",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Designing Composable and Single-Responsibility Modules: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Module Design to design a reusable infrastructure module library for enterprise development teams without creating monolithic, inflexible modules.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Creating focused, composable modules following single-responsibility principles is under consideration.",
    options: [
      { id: 'A', text: "Create a separate module for every single individual cloud resource." },
      { id: 'B', text: "Create a single monolithic 10,000-line module that provisions an entire company's infrastructure in one block." },
      { id: 'C', text: "Prohibit modules and require all teams to write standalone flat resource manifests." },
      { id: 'D', text: "Design small, composable modules focused on single infrastructure domains (e.g., networking, compute, database) that can be combined cleanly." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Design small, composable modules focused on single infrastructure domains (e.g., networking, compute, database) that can be combined cleanly. Effective module design follows software engineering principles: high cohesion and low coupling. Small, focused modules (single responsibility) are easily tested, versioned, and composed together, whereas monolithic modules become brittle and difficult to maintain.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop",
    tags: ["Module Design", "Module Composition", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-316",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Publishing Modules to HCP Terraform Private Registry: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Private Registry to distribute an internal enterprise security module across 40 development teams with automated versioning and usage tracking.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Semantic versioning and Git repository integration for private module registries is under consideration.",
    options: [
      { id: 'A', text: "Upload unversioned zip archives to an internal SharePoint drive." },
      { id: 'B', text: "Commit raw module files directly into every development repository branch." },
      { id: 'C', text: "Connect the module's Git repository (`terraform-&lt;provider&gt;-&lt;name&gt;`) to the HCP Terraform Private Registry using semantic Git release tags (e.g., `v1.2.0`)." },
      { id: 'D', text: "Send updated `.tf` files to developers via email." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Connect the module's Git repository (`terraform-&lt;provider&gt;-&lt;name&gt;`) to the HCP Terraform Private Registry using semantic Git release tags (e.g., `v1.2.0`). The HCP Terraform Private Registry enforces naming conventions (`terraform-&lt;provider&gt;-&lt;name&gt;`) and integrates with Git repositories. Creating semantic Git release tags (`vX.Y.Z`) automatically publishes versioned modules, allowing consumers to pin stable releases and track deprecations.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/registry",
    tags: ["Private Registry", "HCP Registry", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-317",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Publishing Modules to HCP Terraform Private Registry: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Private Registry to distribute an internal enterprise security module across 40 development teams with automated versioning and usage tracking.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Semantic versioning and Git repository integration for private module registries is under consideration.",
    options: [
      { id: 'A', text: "Send updated `.tf` files to developers via email." },
      { id: 'B', text: "Commit raw module files directly into every development repository branch." },
      { id: 'C', text: "Upload unversioned zip archives to an internal SharePoint drive." },
      { id: 'D', text: "Connect the module's Git repository (`terraform-&lt;provider&gt;-&lt;name&gt;`) to the HCP Terraform Private Registry using semantic Git release tags (e.g., `v1.2.0`)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Connect the module's Git repository (`terraform-&lt;provider&gt;-&lt;name&gt;`) to the HCP Terraform Private Registry using semantic Git release tags (e.g., `v1.2.0`). The HCP Terraform Private Registry enforces naming conventions (`terraform-&lt;provider&gt;-&lt;name&gt;`) and integrates with Git repositories. Creating semantic Git release tags (`vX.Y.Z`) automatically publishes versioned modules, allowing consumers to pin stable releases and track deprecations.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/registry",
    tags: ["Private Registry", "HCP Registry", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-318",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Publishing Modules to HCP Terraform Private Registry: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Private Registry to distribute an internal enterprise security module across 40 development teams with automated versioning and usage tracking.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Semantic versioning and Git repository integration for private module registries is under consideration.",
    options: [
      { id: 'A', text: "Upload unversioned zip archives to an internal SharePoint drive." },
      { id: 'B', text: "Connect the module's Git repository (`terraform-&lt;provider&gt;-&lt;name&gt;`) to the HCP Terraform Private Registry using semantic Git release tags (e.g., `v1.2.0`)." },
      { id: 'C', text: "Commit raw module files directly into every development repository branch." },
      { id: 'D', text: "Send updated `.tf` files to developers via email." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Connect the module's Git repository (`terraform-&lt;provider&gt;-&lt;name&gt;`) to the HCP Terraform Private Registry using semantic Git release tags (e.g., `v1.2.0`). The HCP Terraform Private Registry enforces naming conventions (`terraform-&lt;provider&gt;-&lt;name&gt;`) and integrates with Git repositories. Creating semantic Git release tags (`vX.Y.Z`) automatically publishes versioned modules, allowing consumers to pin stable releases and track deprecations.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/registry",
    tags: ["Private Registry", "HCP Registry", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-319",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Publishing Modules to HCP Terraform Private Registry: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Private Registry to distribute an internal enterprise security module across 40 development teams with automated versioning and usage tracking.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Semantic versioning and Git repository integration for private module registries is under consideration.",
    options: [
      { id: 'A', text: "Upload unversioned zip archives to an internal SharePoint drive." },
      { id: 'B', text: "Send updated `.tf` files to developers via email." },
      { id: 'C', text: "Commit raw module files directly into every development repository branch." },
      { id: 'D', text: "Connect the module's Git repository (`terraform-&lt;provider&gt;-&lt;name&gt;`) to the HCP Terraform Private Registry using semantic Git release tags (e.g., `v1.2.0`)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Connect the module's Git repository (`terraform-&lt;provider&gt;-&lt;name&gt;`) to the HCP Terraform Private Registry using semantic Git release tags (e.g., `v1.2.0`). The HCP Terraform Private Registry enforces naming conventions (`terraform-&lt;provider&gt;-&lt;name&gt;`) and integrates with Git repositories. Creating semantic Git release tags (`vX.Y.Z`) automatically publishes versioned modules, allowing consumers to pin stable releases and track deprecations.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/registry",
    tags: ["Private Registry", "HCP Registry", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-320",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Publishing Modules to HCP Terraform Private Registry: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Private Registry to distribute an internal enterprise security module across 40 development teams with automated versioning and usage tracking.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Semantic versioning and Git repository integration for private module registries is under consideration.",
    options: [
      { id: 'A', text: "Upload unversioned zip archives to an internal SharePoint drive." },
      { id: 'B', text: "Send updated `.tf` files to developers via email." },
      { id: 'C', text: "Connect the module's Git repository (`terraform-&lt;provider&gt;-&lt;name&gt;`) to the HCP Terraform Private Registry using semantic Git release tags (e.g., `v1.2.0`)." },
      { id: 'D', text: "Commit raw module files directly into every development repository branch." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Connect the module's Git repository (`terraform-&lt;provider&gt;-&lt;name&gt;`) to the HCP Terraform Private Registry using semantic Git release tags (e.g., `v1.2.0`). The HCP Terraform Private Registry enforces naming conventions (`terraform-&lt;provider&gt;-&lt;name&gt;`) and integrates with Git repositories. Creating semantic Git release tags (`vX.Y.Z`) automatically publishes versioned modules, allowing consumers to pin stable releases and track deprecations.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/registry",
    tags: ["Private Registry", "HCP Registry", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-321",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Submodules for Optional Architecture Patterns: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Submodules to provide a primary VPC module with optional specialized submodules for Transit Gateway attachments and VPC peering.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Organizing primary and specialized variants using the modules/ subfolder pattern is under consideration.",
    options: [
      { id: 'A', text: "Include all transit gateway code in the main root module and force all users to deploy it." },
      { id: 'B', text: "Place optional architectural patterns in a `modules/` subfolder within the module repository (e.g., `modules/transit_gateway/`)." },
      { id: 'C', text: "Create completely independent Git repositories with 90% duplicated VPC code." },
      { id: 'D', text: "Submodules are not supported in Terraform module structures." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Place optional architectural patterns in a `modules/` subfolder within the module repository (e.g., `modules/transit_gateway/`). Submodules reside in the `modules/` directory of a parent module repository. They allow module authors to provide optional or advanced variations of an architecture that consumers can call directly (`source = \"repo//modules/submodule\"`) without cluttering the primary module.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure#nested-modules",
    tags: ["Submodules", "Submodules", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-322",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Submodules for Optional Architecture Patterns: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Submodules to provide a primary VPC module with optional specialized submodules for Transit Gateway attachments and VPC peering.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Organizing primary and specialized variants using the modules/ subfolder pattern is under consideration.",
    options: [
      { id: 'A', text: "Create completely independent Git repositories with 90% duplicated VPC code." },
      { id: 'B', text: "Place optional architectural patterns in a `modules/` subfolder within the module repository (e.g., `modules/transit_gateway/`)." },
      { id: 'C', text: "Submodules are not supported in Terraform module structures." },
      { id: 'D', text: "Include all transit gateway code in the main root module and force all users to deploy it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Place optional architectural patterns in a `modules/` subfolder within the module repository (e.g., `modules/transit_gateway/`). Submodules reside in the `modules/` directory of a parent module repository. They allow module authors to provide optional or advanced variations of an architecture that consumers can call directly (`source = \"repo//modules/submodule\"`) without cluttering the primary module.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure#nested-modules",
    tags: ["Submodules", "Submodules", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-323",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Submodules for Optional Architecture Patterns: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Submodules to provide a primary VPC module with optional specialized submodules for Transit Gateway attachments and VPC peering.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Organizing primary and specialized variants using the modules/ subfolder pattern is under consideration.",
    options: [
      { id: 'A', text: "Submodules are not supported in Terraform module structures." },
      { id: 'B', text: "Place optional architectural patterns in a `modules/` subfolder within the module repository (e.g., `modules/transit_gateway/`)." },
      { id: 'C', text: "Include all transit gateway code in the main root module and force all users to deploy it." },
      { id: 'D', text: "Create completely independent Git repositories with 90% duplicated VPC code." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Place optional architectural patterns in a `modules/` subfolder within the module repository (e.g., `modules/transit_gateway/`). Submodules reside in the `modules/` directory of a parent module repository. They allow module authors to provide optional or advanced variations of an architecture that consumers can call directly (`source = \"repo//modules/submodule\"`) without cluttering the primary module.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure#nested-modules",
    tags: ["Submodules", "Submodules", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-324",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Submodules for Optional Architecture Patterns: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Submodules to provide a primary VPC module with optional specialized submodules for Transit Gateway attachments and VPC peering.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Organizing primary and specialized variants using the modules/ subfolder pattern is under consideration.",
    options: [
      { id: 'A', text: "Include all transit gateway code in the main root module and force all users to deploy it." },
      { id: 'B', text: "Submodules are not supported in Terraform module structures." },
      { id: 'C', text: "Create completely independent Git repositories with 90% duplicated VPC code." },
      { id: 'D', text: "Place optional architectural patterns in a `modules/` subfolder within the module repository (e.g., `modules/transit_gateway/`)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Place optional architectural patterns in a `modules/` subfolder within the module repository (e.g., `modules/transit_gateway/`). Submodules reside in the `modules/` directory of a parent module repository. They allow module authors to provide optional or advanced variations of an architecture that consumers can call directly (`source = \"repo//modules/submodule\"`) without cluttering the primary module.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure#nested-modules",
    tags: ["Submodules", "Submodules", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-325",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Submodules for Optional Architecture Patterns: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Submodules to provide a primary VPC module with optional specialized submodules for Transit Gateway attachments and VPC peering.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Organizing primary and specialized variants using the modules/ subfolder pattern is under consideration.",
    options: [
      { id: 'A', text: "Place optional architectural patterns in a `modules/` subfolder within the module repository (e.g., `modules/transit_gateway/`)." },
      { id: 'B', text: "Submodules are not supported in Terraform module structures." },
      { id: 'C', text: "Include all transit gateway code in the main root module and force all users to deploy it." },
      { id: 'D', text: "Create completely independent Git repositories with 90% duplicated VPC code." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Place optional architectural patterns in a `modules/` subfolder within the module repository (e.g., `modules/transit_gateway/`). Submodules reside in the `modules/` directory of a parent module repository. They allow module authors to provide optional or advanced variations of an architecture that consumers can call directly (`source = \"repo//modules/submodule\"`) without cluttering the primary module.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure#nested-modules",
    tags: ["Submodules", "Submodules", "Resilience Failure"]
  }
];

export default HASHICORP_TFP_QUESTIONS_13;
