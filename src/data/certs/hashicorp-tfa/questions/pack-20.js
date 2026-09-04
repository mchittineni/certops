export const HASHICORP_TFA_QUESTIONS_20 = [
  {
    id: "hashicorp-tfa-476",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Conditional Expressions (Ternary Operator): Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Conditional Expressions to provision a high-capacity multi-AZ database in production but a minimal single-AZ instance in development using a single resource definition.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Configuring conditional attribute values using condition ? true_val : false_val is under consideration.",
    options: [
      { id: 'A', text: "Conditional logic is not permitted in Terraform." },
      { id: 'B', text: "Maintain two completely separate and duplicate `.tf` files for dev and prod." },
      { id: 'C', text: "Use a conditional expression in the resource spec: `multi_az = var.env == \"prod\" ? true : false`." },
      { id: 'D', text: "Manually edit the configuration before each deployment." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use a conditional expression in the resource spec: `multi_az = var.env == \"prod\" ? true : false`. Terraform supports ternary conditional expressions in the format `condition ? true_val : false_val`. They evaluate a boolean expression to return one of two values, allowing single resource definitions to adapt gracefully across environment tiers.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/conditionals",
    tags: ["Conditional Expressions", "Conditional Expressions", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-477",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Conditional Expressions (Ternary Operator): High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Conditional Expressions to provision a high-capacity multi-AZ database in production but a minimal single-AZ instance in development using a single resource definition.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Configuring conditional attribute values using condition ? true_val : false_val is under consideration.",
    options: [
      { id: 'A', text: "Use a conditional expression in the resource spec: `multi_az = var.env == \"prod\" ? true : false`." },
      { id: 'B', text: "Maintain two completely separate and duplicate `.tf` files for dev and prod." },
      { id: 'C', text: "Conditional logic is not permitted in Terraform." },
      { id: 'D', text: "Manually edit the configuration before each deployment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a conditional expression in the resource spec: `multi_az = var.env == \"prod\" ? true : false`. Terraform supports ternary conditional expressions in the format `condition ? true_val : false_val`. They evaluate a boolean expression to return one of two values, allowing single resource definitions to adapt gracefully across environment tiers.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/conditionals",
    tags: ["Conditional Expressions", "Conditional Expressions", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-478",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Conditional Expressions (Ternary Operator): Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Conditional Expressions to provision a high-capacity multi-AZ database in production but a minimal single-AZ instance in development using a single resource definition.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Configuring conditional attribute values using condition ? true_val : false_val is under consideration.",
    options: [
      { id: 'A', text: "Manually edit the configuration before each deployment." },
      { id: 'B', text: "Maintain two completely separate and duplicate `.tf` files for dev and prod." },
      { id: 'C', text: "Use a conditional expression in the resource spec: `multi_az = var.env == \"prod\" ? true : false`." },
      { id: 'D', text: "Conditional logic is not permitted in Terraform." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use a conditional expression in the resource spec: `multi_az = var.env == \"prod\" ? true : false`. Terraform supports ternary conditional expressions in the format `condition ? true_val : false_val`. They evaluate a boolean expression to return one of two values, allowing single resource definitions to adapt gracefully across environment tiers.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/conditionals",
    tags: ["Conditional Expressions", "Conditional Expressions", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-479",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Conditional Expressions (Ternary Operator): Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Conditional Expressions to provision a high-capacity multi-AZ database in production but a minimal single-AZ instance in development using a single resource definition.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Configuring conditional attribute values using condition ? true_val : false_val is under consideration.",
    options: [
      { id: 'A', text: "Use a conditional expression in the resource spec: `multi_az = var.env == \"prod\" ? true : false`." },
      { id: 'B', text: "Conditional logic is not permitted in Terraform." },
      { id: 'C', text: "Manually edit the configuration before each deployment." },
      { id: 'D', text: "Maintain two completely separate and duplicate `.tf` files for dev and prod." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a conditional expression in the resource spec: `multi_az = var.env == \"prod\" ? true : false`. Terraform supports ternary conditional expressions in the format `condition ? true_val : false_val`. They evaluate a boolean expression to return one of two values, allowing single resource definitions to adapt gracefully across environment tiers.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/conditionals",
    tags: ["Conditional Expressions", "Conditional Expressions", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-480",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Conditional Expressions (Ternary Operator): Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Conditional Expressions to provision a high-capacity multi-AZ database in production but a minimal single-AZ instance in development using a single resource definition.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Configuring conditional attribute values using condition ? true_val : false_val is under consideration.",
    options: [
      { id: 'A', text: "Manually edit the configuration before each deployment." },
      { id: 'B', text: "Maintain two completely separate and duplicate `.tf` files for dev and prod." },
      { id: 'C', text: "Use a conditional expression in the resource spec: `multi_az = var.env == \"prod\" ? true : false`." },
      { id: 'D', text: "Conditional logic is not permitted in Terraform." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use a conditional expression in the resource spec: `multi_az = var.env == \"prod\" ? true : false`. Terraform supports ternary conditional expressions in the format `condition ? true_val : false_val`. They evaluate a boolean expression to return one of two values, allowing single resource definitions to adapt gracefully across environment tiers.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/conditionals",
    tags: ["Conditional Expressions", "Conditional Expressions", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-481",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Resource count for Conditional Creation: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Conditional Creation to conditionally create a cloud bastion host instance only when the `create_bastion` variable is set to true.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Toggling resource creation using count = var.enabled ? 1 : 0 is under consideration.",
    options: [
      { id: 'A', text: "Delete the bastion instance manually in the cloud console after every apply." },
      { id: 'B', text: "Set `count = var.create_bastion ? 1 : 0` in the bastion host resource block." },
      { id: 'C', text: "Comment out the bastion resource block when deploying to environments that do not need it." },
      { id: 'D', text: "Set instance_type to none." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `count = var.create_bastion ? 1 : 0` in the bastion host resource block. The `count` meta-argument can be combined with a conditional expression (`count = var.enable_feature ? 1 : 0`) to conditionally create resources. If the condition is false, `count` evaluates to 0, and Terraform creates zero instances of the resource.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/count#conditional-creation-of-resources",
    tags: ["Conditional Creation", "Conditional Creation", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-482",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Resource count for Conditional Creation: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Conditional Creation to conditionally create a cloud bastion host instance only when the `create_bastion` variable is set to true.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Toggling resource creation using count = var.enabled ? 1 : 0 is under consideration.",
    options: [
      { id: 'A', text: "Delete the bastion instance manually in the cloud console after every apply." },
      { id: 'B', text: "Set instance_type to none." },
      { id: 'C', text: "Set `count = var.create_bastion ? 1 : 0` in the bastion host resource block." },
      { id: 'D', text: "Comment out the bastion resource block when deploying to environments that do not need it." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set `count = var.create_bastion ? 1 : 0` in the bastion host resource block. The `count` meta-argument can be combined with a conditional expression (`count = var.enable_feature ? 1 : 0`) to conditionally create resources. If the condition is false, `count` evaluates to 0, and Terraform creates zero instances of the resource.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/count#conditional-creation-of-resources",
    tags: ["Conditional Creation", "Conditional Creation", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-483",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Resource count for Conditional Creation: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Conditional Creation to conditionally create a cloud bastion host instance only when the `create_bastion` variable is set to true.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Toggling resource creation using count = var.enabled ? 1 : 0 is under consideration.",
    options: [
      { id: 'A', text: "Set `count = var.create_bastion ? 1 : 0` in the bastion host resource block." },
      { id: 'B', text: "Set instance_type to none." },
      { id: 'C', text: "Delete the bastion instance manually in the cloud console after every apply." },
      { id: 'D', text: "Comment out the bastion resource block when deploying to environments that do not need it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `count = var.create_bastion ? 1 : 0` in the bastion host resource block. The `count` meta-argument can be combined with a conditional expression (`count = var.enable_feature ? 1 : 0`) to conditionally create resources. If the condition is false, `count` evaluates to 0, and Terraform creates zero instances of the resource.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/count#conditional-creation-of-resources",
    tags: ["Conditional Creation", "Conditional Creation", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-484",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Resource count for Conditional Creation: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Conditional Creation to conditionally create a cloud bastion host instance only when the `create_bastion` variable is set to true.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Toggling resource creation using count = var.enabled ? 1 : 0 is under consideration.",
    options: [
      { id: 'A', text: "Set instance_type to none." },
      { id: 'B', text: "Set `count = var.create_bastion ? 1 : 0` in the bastion host resource block." },
      { id: 'C', text: "Delete the bastion instance manually in the cloud console after every apply." },
      { id: 'D', text: "Comment out the bastion resource block when deploying to environments that do not need it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `count = var.create_bastion ? 1 : 0` in the bastion host resource block. The `count` meta-argument can be combined with a conditional expression (`count = var.enable_feature ? 1 : 0`) to conditionally create resources. If the condition is false, `count` evaluates to 0, and Terraform creates zero instances of the resource.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/count#conditional-creation-of-resources",
    tags: ["Conditional Creation", "Conditional Creation", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-485",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Resource count for Conditional Creation: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Conditional Creation to conditionally create a cloud bastion host instance only when the `create_bastion` variable is set to true.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Toggling resource creation using count = var.enabled ? 1 : 0 is under consideration.",
    options: [
      { id: 'A', text: "Comment out the bastion resource block when deploying to environments that do not need it." },
      { id: 'B', text: "Set instance_type to none." },
      { id: 'C', text: "Delete the bastion instance manually in the cloud console after every apply." },
      { id: 'D', text: "Set `count = var.create_bastion ? 1 : 0` in the bastion host resource block." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set `count = var.create_bastion ? 1 : 0` in the bastion host resource block. The `count` meta-argument can be combined with a conditional expression (`count = var.enable_feature ? 1 : 0`) to conditionally create resources. If the condition is false, `count` evaluates to 0, and Terraform creates zero instances of the resource.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/count#conditional-creation-of-resources",
    tags: ["Conditional Creation", "Conditional Creation", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-486",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Local Values (locals) for Computed Variables: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Local Values to standardize a common resource naming convention (combining company, business unit, project, and env) across 50 cloud resources.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Declaring intermediate computed expressions and eliminating duplicate calculations with locals is under consideration.",
    options: [
      { id: 'A', text: "Pass the full concatenated name as an input variable from the command line on every run." },
      { id: 'B', text: "Store the name prefix in an external database and query it with a bash script." },
      { id: 'C', text: "Copy-paste the full string interpolation expression 50 times across all resource blocks." },
      { id: 'D', text: "Define a `locals {}` block with `name_prefix = \"${var.org}-${var.dept}-${var.env}\"` and reference `local.name_prefix` in resources." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define a `locals {}` block with `name_prefix = \"${var.org}-${var.dept}-${var.env}\"` and reference `local.name_prefix` in resources. Local values (`locals`) assign names to intermediate expressions. Unlike input variables, locals are not set directly by users; they allow configurations to compute reusable values, avoiding repetitive boilerplate and simplifying complex expression maintenance.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/locals",
    tags: ["Local Values", "Local Values", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-487",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Local Values (locals) for Computed Variables: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Local Values to standardize a common resource naming convention (combining company, business unit, project, and env) across 50 cloud resources.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Declaring intermediate computed expressions and eliminating duplicate calculations with locals is under consideration.",
    options: [
      { id: 'A', text: "Define a `locals {}` block with `name_prefix = \"${var.org}-${var.dept}-${var.env}\"` and reference `local.name_prefix` in resources." },
      { id: 'B', text: "Copy-paste the full string interpolation expression 50 times across all resource blocks." },
      { id: 'C', text: "Pass the full concatenated name as an input variable from the command line on every run." },
      { id: 'D', text: "Store the name prefix in an external database and query it with a bash script." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `locals {}` block with `name_prefix = \"${var.org}-${var.dept}-${var.env}\"` and reference `local.name_prefix` in resources. Local values (`locals`) assign names to intermediate expressions. Unlike input variables, locals are not set directly by users; they allow configurations to compute reusable values, avoiding repetitive boilerplate and simplifying complex expression maintenance.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/locals",
    tags: ["Local Values", "Local Values", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-488",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Local Values (locals) for Computed Variables: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Local Values to standardize a common resource naming convention (combining company, business unit, project, and env) across 50 cloud resources.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Declaring intermediate computed expressions and eliminating duplicate calculations with locals is under consideration.",
    options: [
      { id: 'A', text: "Pass the full concatenated name as an input variable from the command line on every run." },
      { id: 'B', text: "Store the name prefix in an external database and query it with a bash script." },
      { id: 'C', text: "Copy-paste the full string interpolation expression 50 times across all resource blocks." },
      { id: 'D', text: "Define a `locals {}` block with `name_prefix = \"${var.org}-${var.dept}-${var.env}\"` and reference `local.name_prefix` in resources." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define a `locals {}` block with `name_prefix = \"${var.org}-${var.dept}-${var.env}\"` and reference `local.name_prefix` in resources. Local values (`locals`) assign names to intermediate expressions. Unlike input variables, locals are not set directly by users; they allow configurations to compute reusable values, avoiding repetitive boilerplate and simplifying complex expression maintenance.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/locals",
    tags: ["Local Values", "Local Values", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-489",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Local Values (locals) for Computed Variables: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Local Values to standardize a common resource naming convention (combining company, business unit, project, and env) across 50 cloud resources.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Declaring intermediate computed expressions and eliminating duplicate calculations with locals is under consideration.",
    options: [
      { id: 'A', text: "Define a `locals {}` block with `name_prefix = \"${var.org}-${var.dept}-${var.env}\"` and reference `local.name_prefix` in resources." },
      { id: 'B', text: "Copy-paste the full string interpolation expression 50 times across all resource blocks." },
      { id: 'C', text: "Pass the full concatenated name as an input variable from the command line on every run." },
      { id: 'D', text: "Store the name prefix in an external database and query it with a bash script." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `locals {}` block with `name_prefix = \"${var.org}-${var.dept}-${var.env}\"` and reference `local.name_prefix` in resources. Local values (`locals`) assign names to intermediate expressions. Unlike input variables, locals are not set directly by users; they allow configurations to compute reusable values, avoiding repetitive boilerplate and simplifying complex expression maintenance.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/locals",
    tags: ["Local Values", "Local Values", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-490",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Local Values (locals) for Computed Variables: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Local Values to standardize a common resource naming convention (combining company, business unit, project, and env) across 50 cloud resources.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Declaring intermediate computed expressions and eliminating duplicate calculations with locals is under consideration.",
    options: [
      { id: 'A', text: "Pass the full concatenated name as an input variable from the command line on every run." },
      { id: 'B', text: "Define a `locals {}` block with `name_prefix = \"${var.org}-${var.dept}-${var.env}\"` and reference `local.name_prefix` in resources." },
      { id: 'C', text: "Copy-paste the full string interpolation expression 50 times across all resource blocks." },
      { id: 'D', text: "Store the name prefix in an external database and query it with a bash script." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define a `locals {}` block with `name_prefix = \"${var.org}-${var.dept}-${var.env}\"` and reference `local.name_prefix` in resources. Local values (`locals`) assign names to intermediate expressions. Unlike input variables, locals are not set directly by users; they allow configurations to compute reusable values, avoiding repetitive boilerplate and simplifying complex expression maintenance.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/locals",
    tags: ["Local Values", "Local Values", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-491",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Resource Lifecycle meta-argument (create_before_destroy, prevent_destroy): Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Resource Lifecycle to prevent anyone from accidentally destroying a production database and ensure zero-downtime replacement for web server instances.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Safeguarding production assets with prevent_destroy and zero-downtime updates with create_before_destroy is under consideration.",
    options: [
      { id: 'A', text: "Configure `lifecycle { prevent_destroy = true }` on the database and `lifecycle { create_before_destroy = true }` on web servers." },
      { id: 'B', text: "Delete the state file so Terraform cannot destroy resources." },
      { id: 'C', text: "Change the database username to read-only in the cloud console." },
      { id: 'D', text: "Rely on human discipline to never run terraform destroy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `lifecycle { prevent_destroy = true }` on the database and `lifecycle { create_before_destroy = true }` on web servers. The `lifecycle` block customizes resource behavior. `prevent_destroy = true` causes Terraform to reject any execution plan that would destroy the resource. `create_before_destroy = true` creates the replacement resource before terminating the existing one, avoiding downtime.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle",
    tags: ["Resource Lifecycle", "Lifecycle Rules", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-492",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Resource Lifecycle meta-argument (create_before_destroy, prevent_destroy): High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Resource Lifecycle to prevent anyone from accidentally destroying a production database and ensure zero-downtime replacement for web server instances.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Safeguarding production assets with prevent_destroy and zero-downtime updates with create_before_destroy is under consideration.",
    options: [
      { id: 'A', text: "Configure `lifecycle { prevent_destroy = true }` on the database and `lifecycle { create_before_destroy = true }` on web servers." },
      { id: 'B', text: "Change the database username to read-only in the cloud console." },
      { id: 'C', text: "Rely on human discipline to never run terraform destroy." },
      { id: 'D', text: "Delete the state file so Terraform cannot destroy resources." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `lifecycle { prevent_destroy = true }` on the database and `lifecycle { create_before_destroy = true }` on web servers. The `lifecycle` block customizes resource behavior. `prevent_destroy = true` causes Terraform to reject any execution plan that would destroy the resource. `create_before_destroy = true` creates the replacement resource before terminating the existing one, avoiding downtime.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle",
    tags: ["Resource Lifecycle", "Lifecycle Rules", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-493",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Resource Lifecycle meta-argument (create_before_destroy, prevent_destroy): Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Resource Lifecycle to prevent anyone from accidentally destroying a production database and ensure zero-downtime replacement for web server instances.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Safeguarding production assets with prevent_destroy and zero-downtime updates with create_before_destroy is under consideration.",
    options: [
      { id: 'A', text: "Change the database username to read-only in the cloud console." },
      { id: 'B', text: "Configure `lifecycle { prevent_destroy = true }` on the database and `lifecycle { create_before_destroy = true }` on web servers." },
      { id: 'C', text: "Rely on human discipline to never run terraform destroy." },
      { id: 'D', text: "Delete the state file so Terraform cannot destroy resources." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `lifecycle { prevent_destroy = true }` on the database and `lifecycle { create_before_destroy = true }` on web servers. The `lifecycle` block customizes resource behavior. `prevent_destroy = true` causes Terraform to reject any execution plan that would destroy the resource. `create_before_destroy = true` creates the replacement resource before terminating the existing one, avoiding downtime.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle",
    tags: ["Resource Lifecycle", "Lifecycle Rules", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-494",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Resource Lifecycle meta-argument (create_before_destroy, prevent_destroy): Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Resource Lifecycle to prevent anyone from accidentally destroying a production database and ensure zero-downtime replacement for web server instances.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Safeguarding production assets with prevent_destroy and zero-downtime updates with create_before_destroy is under consideration.",
    options: [
      { id: 'A', text: "Configure `lifecycle { prevent_destroy = true }` on the database and `lifecycle { create_before_destroy = true }` on web servers." },
      { id: 'B', text: "Rely on human discipline to never run terraform destroy." },
      { id: 'C', text: "Delete the state file so Terraform cannot destroy resources." },
      { id: 'D', text: "Change the database username to read-only in the cloud console." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `lifecycle { prevent_destroy = true }` on the database and `lifecycle { create_before_destroy = true }` on web servers. The `lifecycle` block customizes resource behavior. `prevent_destroy = true` causes Terraform to reject any execution plan that would destroy the resource. `create_before_destroy = true` creates the replacement resource before terminating the existing one, avoiding downtime.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle",
    tags: ["Resource Lifecycle", "Lifecycle Rules", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-495",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Resource Lifecycle meta-argument (create_before_destroy, prevent_destroy): Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Resource Lifecycle to prevent anyone from accidentally destroying a production database and ensure zero-downtime replacement for web server instances.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Safeguarding production assets with prevent_destroy and zero-downtime updates with create_before_destroy is under consideration.",
    options: [
      { id: 'A', text: "Rely on human discipline to never run terraform destroy." },
      { id: 'B', text: "Delete the state file so Terraform cannot destroy resources." },
      { id: 'C', text: "Configure `lifecycle { prevent_destroy = true }` on the database and `lifecycle { create_before_destroy = true }` on web servers." },
      { id: 'D', text: "Change the database username to read-only in the cloud console." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure `lifecycle { prevent_destroy = true }` on the database and `lifecycle { create_before_destroy = true }` on web servers. The `lifecycle` block customizes resource behavior. `prevent_destroy = true` causes Terraform to reject any execution plan that would destroy the resource. `create_before_destroy = true` creates the replacement resource before terminating the existing one, avoiding downtime.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle",
    tags: ["Resource Lifecycle", "Lifecycle Rules", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-496",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Variable Definition Files (.tfvars and .auto.tfvars): Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Variable Files to manage different variable values for staging and production environments without changing the underlying `.tf` codebase.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Loading variable values via terraform.tfvars, *.auto.tfvars, and -var-file flags is under consideration.",
    options: [
      { id: 'A', text: "Use environment variables exclusively for all complex object structures." },
      { id: 'B', text: "Prompt the user to type 50 variable values interactively into the terminal prompt." },
      { id: 'C', text: "Hardcode environment values directly inside `variables.tf` and commit changes before each run." },
      { id: 'D', text: "Create `staging.tfvars` and `prod.tfvars` and apply using `terraform apply -var-file=prod.tfvars`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create `staging.tfvars` and `prod.tfvars` and apply using `terraform apply -var-file=prod.tfvars`. Terraform automatically loads variables from `terraform.tfvars` and files ending in `.auto.tfvars`. To manage distinct environment values cleanly, teams maintain separate files (e.g., `staging.tfvars`, `prod.tfvars`) and pass them explicitly using `-var-file`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#variable-definitions-tfvars-files",
    tags: ["Variable Files", "Variable Files", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-497",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Variable Definition Files (.tfvars and .auto.tfvars): High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Variable Files to manage different variable values for staging and production environments without changing the underlying `.tf` codebase.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Loading variable values via terraform.tfvars, *.auto.tfvars, and -var-file flags is under consideration.",
    options: [
      { id: 'A', text: "Use environment variables exclusively for all complex object structures." },
      { id: 'B', text: "Hardcode environment values directly inside `variables.tf` and commit changes before each run." },
      { id: 'C', text: "Create `staging.tfvars` and `prod.tfvars` and apply using `terraform apply -var-file=prod.tfvars`." },
      { id: 'D', text: "Prompt the user to type 50 variable values interactively into the terminal prompt." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create `staging.tfvars` and `prod.tfvars` and apply using `terraform apply -var-file=prod.tfvars`. Terraform automatically loads variables from `terraform.tfvars` and files ending in `.auto.tfvars`. To manage distinct environment values cleanly, teams maintain separate files (e.g., `staging.tfvars`, `prod.tfvars`) and pass them explicitly using `-var-file`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#variable-definitions-tfvars-files",
    tags: ["Variable Files", "Variable Files", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-498",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Variable Definition Files (.tfvars and .auto.tfvars): Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Variable Files to manage different variable values for staging and production environments without changing the underlying `.tf` codebase.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Loading variable values via terraform.tfvars, *.auto.tfvars, and -var-file flags is under consideration.",
    options: [
      { id: 'A', text: "Hardcode environment values directly inside `variables.tf` and commit changes before each run." },
      { id: 'B', text: "Create `staging.tfvars` and `prod.tfvars` and apply using `terraform apply -var-file=prod.tfvars`." },
      { id: 'C', text: "Prompt the user to type 50 variable values interactively into the terminal prompt." },
      { id: 'D', text: "Use environment variables exclusively for all complex object structures." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create `staging.tfvars` and `prod.tfvars` and apply using `terraform apply -var-file=prod.tfvars`. Terraform automatically loads variables from `terraform.tfvars` and files ending in `.auto.tfvars`. To manage distinct environment values cleanly, teams maintain separate files (e.g., `staging.tfvars`, `prod.tfvars`) and pass them explicitly using `-var-file`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#variable-definitions-tfvars-files",
    tags: ["Variable Files", "Variable Files", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-499",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Variable Definition Files (.tfvars and .auto.tfvars): Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Variable Files to manage different variable values for staging and production environments without changing the underlying `.tf` codebase.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Loading variable values via terraform.tfvars, *.auto.tfvars, and -var-file flags is under consideration.",
    options: [
      { id: 'A', text: "Use environment variables exclusively for all complex object structures." },
      { id: 'B', text: "Create `staging.tfvars` and `prod.tfvars` and apply using `terraform apply -var-file=prod.tfvars`." },
      { id: 'C', text: "Prompt the user to type 50 variable values interactively into the terminal prompt." },
      { id: 'D', text: "Hardcode environment values directly inside `variables.tf` and commit changes before each run." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create `staging.tfvars` and `prod.tfvars` and apply using `terraform apply -var-file=prod.tfvars`. Terraform automatically loads variables from `terraform.tfvars` and files ending in `.auto.tfvars`. To manage distinct environment values cleanly, teams maintain separate files (e.g., `staging.tfvars`, `prod.tfvars`) and pass them explicitly using `-var-file`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#variable-definitions-tfvars-files",
    tags: ["Variable Files", "Variable Files", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-500",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Variable Definition Files (.tfvars and .auto.tfvars): Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Variable Files to manage different variable values for staging and production environments without changing the underlying `.tf` codebase.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Loading variable values via terraform.tfvars, *.auto.tfvars, and -var-file flags is under consideration.",
    options: [
      { id: 'A', text: "Prompt the user to type 50 variable values interactively into the terminal prompt." },
      { id: 'B', text: "Hardcode environment values directly inside `variables.tf` and commit changes before each run." },
      { id: 'C', text: "Use environment variables exclusively for all complex object structures." },
      { id: 'D', text: "Create `staging.tfvars` and `prod.tfvars` and apply using `terraform apply -var-file=prod.tfvars`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create `staging.tfvars` and `prod.tfvars` and apply using `terraform apply -var-file=prod.tfvars`. Terraform automatically loads variables from `terraform.tfvars` and files ending in `.auto.tfvars`. To manage distinct environment values cleanly, teams maintain separate files (e.g., `staging.tfvars`, `prod.tfvars`) and pass them explicitly using `-var-file`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#variable-definitions-tfvars-files",
    tags: ["Variable Files", "Variable Files", "Resilience Failure"]
  }
];

export default HASHICORP_TFA_QUESTIONS_20;
