export const HASHICORP_TFA_QUESTIONS_12 = [
  {
    id: "hashicorp-tfa-276",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Terraform fundamentals",
    title: "Terraform Core vs Terraform Plugins (Providers): Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to understand how Terraform communicates with diverse cloud APIs (AWS, Azure, GCP, GitHub, Datadog) through a unified workflow.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Terraform Core evaluates the configuration graph and calls provider plugins over gRPC." },
      { id: 'B', text: "Terraform Core ships the cloud API clients inside its own binary, with no plugins." },
      { id: 'C', text: "Providers run as web services in the cloud, while Terraform Core runs locally without plugins." },
      { id: 'D', text: "Terraform executes raw bash scripts to talk to cloud APIs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform Core evaluates HCL configurations and dependency graphs, communicating with external Provider plugins over gRPC. Terraform uses a plugin-based architecture. Terraform Core manages the configuration parser, dependency graph, and state management, while standalone Provider binaries (plugins) translate Terraform resource CRUD requests into actual vendor API calls over gRPC.",
    referenceUrl: "https://developer.hashicorp.com/terraform/plugin/how-terraform-works",
    tags: ["Architecture","Provider Architecture","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-277",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Terraform fundamentals",
    title: "Terraform Core vs Terraform Plugins (Providers): High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to understand how Terraform communicates with diverse cloud APIs (AWS, Azure, GCP, GitHub, Datadog) through a unified workflow.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Providers run as web services in the cloud, while Terraform Core runs locally without plugins." },
      { id: 'B', text: "Terraform executes raw bash scripts to talk to cloud APIs." },
      { id: 'C', text: "Terraform Core evaluates the configuration graph and calls provider plugins over gRPC." },
      { id: 'D', text: "Terraform Core ships the cloud API clients inside its own binary, with no plugins." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Terraform Core evaluates HCL configurations and dependency graphs, communicating with external Provider plugins over gRPC. Terraform uses a plugin-based architecture. Terraform Core manages the configuration parser, dependency graph, and state management, while standalone Provider binaries (plugins) translate Terraform resource CRUD requests into actual vendor API calls over gRPC.",
    referenceUrl: "https://developer.hashicorp.com/terraform/plugin/how-terraform-works",
    tags: ["Architecture","Provider Architecture","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-278",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Terraform fundamentals",
    title: "Terraform Core vs Terraform Plugins (Providers): Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to understand how Terraform communicates with diverse cloud APIs (AWS, Azure, GCP, GitHub, Datadog) through a unified workflow.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Terraform Core evaluates the configuration graph and calls provider plugins over gRPC." },
      { id: 'B', text: "Providers run as web services in the cloud, while Terraform Core runs locally without plugins." },
      { id: 'C', text: "Terraform executes raw bash scripts to talk to cloud APIs." },
      { id: 'D', text: "Terraform Core ships the cloud API clients inside its own binary, with no plugins." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform Core evaluates HCL configurations and dependency graphs, communicating with external Provider plugins over gRPC. Terraform uses a plugin-based architecture. Terraform Core manages the configuration parser, dependency graph, and state management, while standalone Provider binaries (plugins) translate Terraform resource CRUD requests into actual vendor API calls over gRPC.",
    referenceUrl: "https://developer.hashicorp.com/terraform/plugin/how-terraform-works",
    tags: ["Architecture","Provider Architecture","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-279",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Terraform fundamentals",
    title: "Terraform Core vs Terraform Plugins (Providers): Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to understand how Terraform communicates with diverse cloud APIs (AWS, Azure, GCP, GitHub, Datadog) through a unified workflow.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Terraform executes raw bash scripts to talk to cloud APIs." },
      { id: 'B', text: "Terraform Core ships the cloud API clients inside its own binary, with no plugins." },
      { id: 'C', text: "Terraform Core evaluates the configuration graph and calls provider plugins over gRPC." },
      { id: 'D', text: "Providers run as web services in the cloud, while Terraform Core runs locally without plugins." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Terraform Core evaluates HCL configurations and dependency graphs, communicating with external Provider plugins over gRPC. Terraform uses a plugin-based architecture. Terraform Core manages the configuration parser, dependency graph, and state management, while standalone Provider binaries (plugins) translate Terraform resource CRUD requests into actual vendor API calls over gRPC.",
    referenceUrl: "https://developer.hashicorp.com/terraform/plugin/how-terraform-works",
    tags: ["Architecture","Provider Architecture","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-280",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Terraform fundamentals",
    title: "Terraform Core vs Terraform Plugins (Providers): Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to understand how Terraform communicates with diverse cloud APIs (AWS, Azure, GCP, GitHub, Datadog) through a unified workflow.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Providers run as web services in the cloud, while Terraform Core runs locally without plugins." },
      { id: 'B', text: "Terraform Core ships the cloud API clients inside its own binary, with no plugins." },
      { id: 'C', text: "Terraform executes raw bash scripts to talk to cloud APIs." },
      { id: 'D', text: "Terraform Core evaluates the configuration graph and calls provider plugins over gRPC." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Terraform Core evaluates HCL configurations and dependency graphs, communicating with external Provider plugins over gRPC. Terraform uses a plugin-based architecture. Terraform Core manages the configuration parser, dependency graph, and state management, while standalone Provider binaries (plugins) translate Terraform resource CRUD requests into actual vendor API calls over gRPC.",
    referenceUrl: "https://developer.hashicorp.com/terraform/plugin/how-terraform-works",
    tags: ["Architecture","Provider Architecture","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-281",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Terraform fundamentals",
    title: "Terraform Providers: Declaration and Version Constraints: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to ensure that a Terraform project always uses a specific, tested version of the AWS provider and avoids breaking changes from major provider updates.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Vendor the provider binary into the repository and reference it with a local mirror." },
      { id: 'B', text: "Declare it in `required_providers` with a lower bound only, such as `>= 1.0`." },
      { id: 'C', text: "Declare it in `required_providers` with a pessimistic constraint." },
      { id: 'D', text: "Omit the declaration and let the lock file pin whatever `init` resolves first." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Declare the provider in `terraform.required_providers` with source address (`hashicorp/aws`) and pessimistic version constraint (e.g., `~&gt; 5.0`). The `required_providers` block inside `terraform {}` specifies the global source address (e.g., `hashicorp/aws`) and version constraints for each provider. Using the pessimistic operator (`~&gt; 5.0`) allows backward-compatible minor/patch updates while preventing breaking major version upgrades.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/requirements",
    tags: ["Providers","Provider Versioning","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-282",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Terraform fundamentals",
    title: "Terraform Providers: Declaration and Version Constraints: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to ensure that a Terraform project always uses a specific, tested version of the AWS provider and avoids breaking changes from major provider updates.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Vendor the provider binary into the repository and reference it with a local mirror." },
      { id: 'B', text: "Omit the declaration and let the lock file pin whatever `init` resolves first." },
      { id: 'C', text: "Declare it in `required_providers` with a lower bound only, such as `>= 1.0`." },
      { id: 'D', text: "Declare it in `required_providers` with a pessimistic constraint." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Declare the provider in `terraform.required_providers` with source address (`hashicorp/aws`) and pessimistic version constraint (e.g., `~&gt; 5.0`). The `required_providers` block inside `terraform {}` specifies the global source address (e.g., `hashicorp/aws`) and version constraints for each provider. Using the pessimistic operator (`~&gt; 5.0`) allows backward-compatible minor/patch updates while preventing breaking major version upgrades.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/requirements",
    tags: ["Providers","Provider Versioning","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-283",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Terraform fundamentals",
    title: "Terraform Providers: Declaration and Version Constraints: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to ensure that a Terraform project always uses a specific, tested version of the AWS provider and avoids breaking changes from major provider updates.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Declare it in `required_providers` with a lower bound only, such as `>= 1.0`." },
      { id: 'B', text: "Declare it in `required_providers` with a pessimistic constraint." },
      { id: 'C', text: "Vendor the provider binary into the repository and reference it with a local mirror." },
      { id: 'D', text: "Omit the declaration and let the lock file pin whatever `init` resolves first." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Declare the provider in `terraform.required_providers` with source address (`hashicorp/aws`) and pessimistic version constraint (e.g., `~&gt; 5.0`). The `required_providers` block inside `terraform {}` specifies the global source address (e.g., `hashicorp/aws`) and version constraints for each provider. Using the pessimistic operator (`~&gt; 5.0`) allows backward-compatible minor/patch updates while preventing breaking major version upgrades.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/requirements",
    tags: ["Providers","Provider Versioning","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-284",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Terraform fundamentals",
    title: "Terraform Providers: Declaration and Version Constraints: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to ensure that a Terraform project always uses a specific, tested version of the AWS provider and avoids breaking changes from major provider updates.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Omit the declaration and let the lock file pin whatever `init` resolves first." },
      { id: 'B', text: "Declare it in `required_providers` with a pessimistic constraint." },
      { id: 'C', text: "Declare it in `required_providers` with a lower bound only, such as `>= 1.0`." },
      { id: 'D', text: "Vendor the provider binary into the repository and reference it with a local mirror." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Declare the provider in `terraform.required_providers` with source address (`hashicorp/aws`) and pessimistic version constraint (e.g., `~&gt; 5.0`). The `required_providers` block inside `terraform {}` specifies the global source address (e.g., `hashicorp/aws`) and version constraints for each provider. Using the pessimistic operator (`~&gt; 5.0`) allows backward-compatible minor/patch updates while preventing breaking major version upgrades.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/requirements",
    tags: ["Providers","Provider Versioning","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-285",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Terraform fundamentals",
    title: "Terraform Providers: Declaration and Version Constraints: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to ensure that a Terraform project always uses a specific, tested version of the AWS provider and avoids breaking changes from major provider updates.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Declare it in `required_providers` with a pessimistic constraint." },
      { id: 'B', text: "Omit the declaration and let the lock file pin whatever `init` resolves first." },
      { id: 'C', text: "Vendor the provider binary into the repository and reference it with a local mirror." },
      { id: 'D', text: "Declare it in `required_providers` with a lower bound only, such as `>= 1.0`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declare the provider in `terraform.required_providers` with source address (`hashicorp/aws`) and pessimistic version constraint (e.g., `~&gt; 5.0`). The `required_providers` block inside `terraform {}` specifies the global source address (e.g., `hashicorp/aws`) and version constraints for each provider. Using the pessimistic operator (`~&gt; 5.0`) allows backward-compatible minor/patch updates while preventing breaking major version upgrades.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/requirements",
    tags: ["Providers","Provider Versioning","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-286",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Terraform configuration",
    title: "Terraform Dependency Graph and Implicit Dependencies: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to ensure that a security group is created before an EC2 instance that references its ID without writing explicit dependency directives.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Add `depends_on` on the instance, naming the security group resource explicitly." },
      { id: 'B', text: "Add `depends_on` to every resource in the configuration for safety." },
      { id: 'C', text: "Reference the group's attribute directly, as `vpc_security_group_ids = [...]`." },
      { id: 'D', text: "Move the security group into its own configuration and read it back." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Reference the security group attribute directly in the EC2 instance block (e.g., `vpc_security_group_ids = [aws_security_group.web.id]`). Terraform builds a Directed Acyclic Graph (DAG) of all resources. Referencing an attribute of one resource in another (e.g., `aws_security_group.web.id`) creates an implicit dependency, instructing Terraform to automatically provision the referenced resource first without requiring manual `depends_on` blocks.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior#resource-dependencies",
    tags: ["Dependency Graph","Implicit Dependencies","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-287",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Terraform configuration",
    title: "Terraform Dependency Graph and Implicit Dependencies: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to ensure that a security group is created before an EC2 instance that references its ID without writing explicit dependency directives.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Reference the group's attribute directly, as `vpc_security_group_ids = [...]`." },
      { id: 'B', text: "Add `depends_on` to every resource in the configuration for safety." },
      { id: 'C', text: "Move the security group into its own configuration and read it back." },
      { id: 'D', text: "Add `depends_on` on the instance, naming the security group resource explicitly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Reference the security group attribute directly in the EC2 instance block (e.g., `vpc_security_group_ids = [aws_security_group.web.id]`). Terraform builds a Directed Acyclic Graph (DAG) of all resources. Referencing an attribute of one resource in another (e.g., `aws_security_group.web.id`) creates an implicit dependency, instructing Terraform to automatically provision the referenced resource first without requiring manual `depends_on` blocks.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior#resource-dependencies",
    tags: ["Dependency Graph","Implicit Dependencies","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-288",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Terraform configuration",
    title: "Terraform Dependency Graph and Implicit Dependencies: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to ensure that a security group is created before an EC2 instance that references its ID without writing explicit dependency directives.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Reference the group's attribute directly, as `vpc_security_group_ids = [...]`." },
      { id: 'B', text: "Add `depends_on` to every resource in the configuration for safety." },
      { id: 'C', text: "Move the security group into its own configuration and read it back." },
      { id: 'D', text: "Add `depends_on` on the instance, naming the security group resource explicitly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Reference the security group attribute directly in the EC2 instance block (e.g., `vpc_security_group_ids = [aws_security_group.web.id]`). Terraform builds a Directed Acyclic Graph (DAG) of all resources. Referencing an attribute of one resource in another (e.g., `aws_security_group.web.id`) creates an implicit dependency, instructing Terraform to automatically provision the referenced resource first without requiring manual `depends_on` blocks.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior#resource-dependencies",
    tags: ["Dependency Graph","Implicit Dependencies","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-289",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Terraform configuration",
    title: "Terraform Dependency Graph and Implicit Dependencies: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to ensure that a security group is created before an EC2 instance that references its ID without writing explicit dependency directives.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Add `depends_on` to every resource in the configuration for safety." },
      { id: 'B', text: "Add `depends_on` on the instance, naming the security group resource explicitly." },
      { id: 'C', text: "Move the security group into its own configuration and read it back." },
      { id: 'D', text: "Reference the group's attribute directly, as `vpc_security_group_ids = [...]`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Reference the security group attribute directly in the EC2 instance block (e.g., `vpc_security_group_ids = [aws_security_group.web.id]`). Terraform builds a Directed Acyclic Graph (DAG) of all resources. Referencing an attribute of one resource in another (e.g., `aws_security_group.web.id`) creates an implicit dependency, instructing Terraform to automatically provision the referenced resource first without requiring manual `depends_on` blocks.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior#resource-dependencies",
    tags: ["Dependency Graph","Implicit Dependencies","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-290",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Terraform configuration",
    title: "Terraform Dependency Graph and Implicit Dependencies: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to ensure that a security group is created before an EC2 instance that references its ID without writing explicit dependency directives.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Add `depends_on` to every resource in the configuration for safety." },
      { id: 'B', text: "Add `depends_on` on the instance, naming the security group resource explicitly." },
      { id: 'C', text: "Move the security group into its own configuration and read it back." },
      { id: 'D', text: "Reference the group's attribute directly, as `vpc_security_group_ids = [...]`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Reference the security group attribute directly in the EC2 instance block (e.g., `vpc_security_group_ids = [aws_security_group.web.id]`). Terraform builds a Directed Acyclic Graph (DAG) of all resources. Referencing an attribute of one resource in another (e.g., `aws_security_group.web.id`) creates an implicit dependency, instructing Terraform to automatically provision the referenced resource first without requiring manual `depends_on` blocks.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior#resource-dependencies",
    tags: ["Dependency Graph","Implicit Dependencies","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-291",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Terraform configuration",
    title: "Explicit Dependencies with depends_on: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to ensure an EC2 instance is not created until an IAM role policy attachment completes, even though the instance does not directly reference the policy attachment object.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Set `depends_on` on the instance, naming the policy attachment." },
      { id: 'B', text: "Rely on implicit dependencies which cannot detect out-of-band relationships." },
      { id: 'C', text: "Insert a `sleep 60` command into the local operating system terminal." },
      { id: 'D', text: "Deploy the IAM policy attachment in a completely different AWS account." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `depends_on = [aws_iam_role_policy_attachment.app]` in the EC2 instance resource block. The `depends_on` meta-argument defines explicit dependencies between resources. When resources have hidden or behavioral dependencies that are not expressed through direct attribute references (such as IAM permission propagation), `depends_on` forces Terraform to complete the dependency first.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/depends_on",
    tags: ["Explicit Dependencies","depends_on","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-292",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Terraform configuration",
    title: "Explicit Dependencies with depends_on: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to ensure an EC2 instance is not created until an IAM role policy attachment completes, even though the instance does not directly reference the policy attachment object.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Set `depends_on` on the instance, naming the policy attachment." },
      { id: 'B', text: "Rely on implicit dependencies which cannot detect out-of-band relationships." },
      { id: 'C', text: "Insert a `sleep 60` command into the local operating system terminal." },
      { id: 'D', text: "Deploy the IAM policy attachment in a completely different AWS account." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `depends_on = [aws_iam_role_policy_attachment.app]` in the EC2 instance resource block. The `depends_on` meta-argument defines explicit dependencies between resources. When resources have hidden or behavioral dependencies that are not expressed through direct attribute references (such as IAM permission propagation), `depends_on` forces Terraform to complete the dependency first.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/depends_on",
    tags: ["Explicit Dependencies","depends_on","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-293",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Terraform configuration",
    title: "Explicit Dependencies with depends_on: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to ensure an EC2 instance is not created until an IAM role policy attachment completes, even though the instance does not directly reference the policy attachment object.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Set `depends_on` on the instance, naming the policy attachment." },
      { id: 'B', text: "Rely on implicit dependencies which cannot detect out-of-band relationships." },
      { id: 'C', text: "Insert a `sleep 60` command into the local operating system terminal." },
      { id: 'D', text: "Deploy the IAM policy attachment in a completely different AWS account." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `depends_on = [aws_iam_role_policy_attachment.app]` in the EC2 instance resource block. The `depends_on` meta-argument defines explicit dependencies between resources. When resources have hidden or behavioral dependencies that are not expressed through direct attribute references (such as IAM permission propagation), `depends_on` forces Terraform to complete the dependency first.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/depends_on",
    tags: ["Explicit Dependencies","depends_on","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-294",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Terraform configuration",
    title: "Explicit Dependencies with depends_on: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to ensure an EC2 instance is not created until an IAM role policy attachment completes, even though the instance does not directly reference the policy attachment object.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Rely on implicit dependencies which cannot detect out-of-band relationships." },
      { id: 'B', text: "Set `depends_on` on the instance, naming the policy attachment." },
      { id: 'C', text: "Deploy the IAM policy attachment in a completely different AWS account." },
      { id: 'D', text: "Insert a `sleep 60` command into the local operating system terminal." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Specify `depends_on = [aws_iam_role_policy_attachment.app]` in the EC2 instance resource block. The `depends_on` meta-argument defines explicit dependencies between resources. When resources have hidden or behavioral dependencies that are not expressed through direct attribute references (such as IAM permission propagation), `depends_on` forces Terraform to complete the dependency first.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/depends_on",
    tags: ["Explicit Dependencies","depends_on","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-295",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Terraform configuration",
    title: "Explicit Dependencies with depends_on: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to ensure an EC2 instance is not created until an IAM role policy attachment completes, even though the instance does not directly reference the policy attachment object.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Set `depends_on` on the instance, naming the policy attachment." },
      { id: 'B', text: "Rely on implicit dependencies which cannot detect out-of-band relationships." },
      { id: 'C', text: "Insert a `sleep 60` command into the local operating system terminal." },
      { id: 'D', text: "Deploy the IAM policy attachment in a completely different AWS account." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `depends_on = [aws_iam_role_policy_attachment.app]` in the EC2 instance resource block. The `depends_on` meta-argument defines explicit dependencies between resources. When resources have hidden or behavioral dependencies that are not expressed through direct attribute references (such as IAM permission propagation), `depends_on` forces Terraform to complete the dependency first.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/depends_on",
    tags: ["Explicit Dependencies","depends_on","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-296",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Core Terraform workflow",
    title: "Resource Life Cycle: Create, Read, Update, Delete (CRUD): Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to understand how Terraform determines whether an in-place update or a destructive replacement is required when modifying a resource property.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "It compares configuration, state and schema; a ForceNew attribute means destroy and recreate." },
      { id: 'B', text: "It destroys and recreates every one of the resources on each apply, which is why the plan is long." },
      { id: 'C', text: "It never destroys a resource, and issues only update calls to the provider's API." },
      { id: 'D', text: "It asks the provider which attributes can change in place and updates only those." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform compares configuration against state and provider schemas; changing a 'ForceNew' attribute triggers resource destruction and recreation. Terraform resources follow CRUD lifecycles. Provider schemas define which attributes can be updated in-place (Update) and which attributes require recreating the resource (Delete followed by Create, marked as 'forces replacement' or `ForceNew` in execution plans).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior",
    tags: ["Resource Lifecycle","Resource Lifecycle","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-297",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Core Terraform workflow",
    title: "Resource Life Cycle: Create, Read, Update, Delete (CRUD): High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to understand how Terraform determines whether an in-place update or a destructive replacement is required when modifying a resource property.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "It destroys and recreates every one of the resources on each apply, which is why the plan is long." },
      { id: 'B', text: "It asks the provider which attributes can change in place and updates only those." },
      { id: 'C', text: "It never destroys a resource, and issues only update calls to the provider's API." },
      { id: 'D', text: "It compares configuration, state and schema; a ForceNew attribute means destroy and recreate." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Terraform compares configuration against state and provider schemas; changing a 'ForceNew' attribute triggers resource destruction and recreation. Terraform resources follow CRUD lifecycles. Provider schemas define which attributes can be updated in-place (Update) and which attributes require recreating the resource (Delete followed by Create, marked as 'forces replacement' or `ForceNew` in execution plans).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior",
    tags: ["Resource Lifecycle","Resource Lifecycle","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-298",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Core Terraform workflow",
    title: "Resource Life Cycle: Create, Read, Update, Delete (CRUD): Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to understand how Terraform determines whether an in-place update or a destructive replacement is required when modifying a resource property.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "It asks the provider which attributes can change in place and updates only those." },
      { id: 'B', text: "It compares configuration, state and schema; a ForceNew attribute means destroy and recreate." },
      { id: 'C', text: "It never destroys a resource, and issues only update calls to the provider's API." },
      { id: 'D', text: "It destroys and recreates every one of the resources on each apply, which is why the plan is long." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Terraform compares configuration against state and provider schemas; changing a 'ForceNew' attribute triggers resource destruction and recreation. Terraform resources follow CRUD lifecycles. Provider schemas define which attributes can be updated in-place (Update) and which attributes require recreating the resource (Delete followed by Create, marked as 'forces replacement' or `ForceNew` in execution plans).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior",
    tags: ["Resource Lifecycle","Resource Lifecycle","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-299",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Core Terraform workflow",
    title: "Resource Life Cycle: Create, Read, Update, Delete (CRUD): Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to understand how Terraform determines whether an in-place update or a destructive replacement is required when modifying a resource property.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "It compares configuration, state and schema; a ForceNew attribute means destroy and recreate." },
      { id: 'B', text: "It destroys and recreates every one of the resources on each apply, which is why the plan is long." },
      { id: 'C', text: "It never destroys a resource, and issues only update calls to the provider's API." },
      { id: 'D', text: "It asks the provider which attributes can change in place and updates only those." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform compares configuration against state and provider schemas; changing a 'ForceNew' attribute triggers resource destruction and recreation. Terraform resources follow CRUD lifecycles. Provider schemas define which attributes can be updated in-place (Update) and which attributes require recreating the resource (Delete followed by Create, marked as 'forces replacement' or `ForceNew` in execution plans).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior",
    tags: ["Resource Lifecycle","Resource Lifecycle","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-300",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Core Terraform workflow",
    title: "Resource Life Cycle: Create, Read, Update, Delete (CRUD): Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to understand how Terraform determines whether an in-place update or a destructive replacement is required when modifying a resource property.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "It destroys and recreates every one of the resources on each apply, which is why the plan is long." },
      { id: 'B', text: "It asks the provider which attributes can change in place and updates only those." },
      { id: 'C', text: "It never destroys a resource, and issues only update calls to the provider's API." },
      { id: 'D', text: "It compares configuration, state and schema; a ForceNew attribute means destroy and recreate." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Terraform compares configuration against state and provider schemas; changing a 'ForceNew' attribute triggers resource destruction and recreation. Terraform resources follow CRUD lifecycles. Provider schemas define which attributes can be updated in-place (Update) and which attributes require recreating the resource (Delete followed by Create, marked as 'forces replacement' or `ForceNew` in execution plans).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior",
    tags: ["Resource Lifecycle","Resource Lifecycle","Resilience Failure"]
  }
];

export default HASHICORP_TFA_QUESTIONS_12;
