export const HASHICORP_TFA_QUESTIONS_12 = [
  {
    id: "hashicorp-tfa-276",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Core vs Terraform Plugins (Providers): Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Architecture to understand how Terraform communicates with diverse cloud APIs (AWS, Azure, GCP, GitHub, Datadog) through a unified workflow.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? RPC-based separation between Terraform Core engine and provider plugins is under consideration.",
    options: [
      { id: 'A', text: "Terraform Core has hardcoded API integration code for all cloud providers inside a single monolithic binary." },
      { id: 'B', text: "Terraform Core evaluates HCL configurations and dependency graphs, communicating with external Provider plugins over gRPC." },
      { id: 'C', text: "Terraform executes raw bash scripts to talk to cloud APIs." },
      { id: 'D', text: "Providers run as web services in the cloud, while Terraform Core runs locally without plugins." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Terraform Core evaluates HCL configurations and dependency graphs, communicating with external Provider plugins over gRPC. Terraform uses a plugin-based architecture. Terraform Core manages the configuration parser, dependency graph, and state management, while standalone Provider binaries (plugins) translate Terraform resource CRUD requests into actual vendor API calls over gRPC.",
    referenceUrl: "https://developer.hashicorp.com/terraform/plugin/how-terraform-works",
    tags: ["Architecture", "Provider Architecture", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-277",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Core vs Terraform Plugins (Providers): High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Architecture to understand how Terraform communicates with diverse cloud APIs (AWS, Azure, GCP, GitHub, Datadog) through a unified workflow.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? RPC-based separation between Terraform Core engine and provider plugins is under consideration.",
    options: [
      { id: 'A', text: "Terraform executes raw bash scripts to talk to cloud APIs." },
      { id: 'B', text: "Terraform Core evaluates HCL configurations and dependency graphs, communicating with external Provider plugins over gRPC." },
      { id: 'C', text: "Terraform Core has hardcoded API integration code for all cloud providers inside a single monolithic binary." },
      { id: 'D', text: "Providers run as web services in the cloud, while Terraform Core runs locally without plugins." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Terraform Core evaluates HCL configurations and dependency graphs, communicating with external Provider plugins over gRPC. Terraform uses a plugin-based architecture. Terraform Core manages the configuration parser, dependency graph, and state management, while standalone Provider binaries (plugins) translate Terraform resource CRUD requests into actual vendor API calls over gRPC.",
    referenceUrl: "https://developer.hashicorp.com/terraform/plugin/how-terraform-works",
    tags: ["Architecture", "Provider Architecture", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-278",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Core vs Terraform Plugins (Providers): Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Architecture to understand how Terraform communicates with diverse cloud APIs (AWS, Azure, GCP, GitHub, Datadog) through a unified workflow.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? RPC-based separation between Terraform Core engine and provider plugins is under consideration.",
    options: [
      { id: 'A', text: "Terraform Core evaluates HCL configurations and dependency graphs, communicating with external Provider plugins over gRPC." },
      { id: 'B', text: "Terraform executes raw bash scripts to talk to cloud APIs." },
      { id: 'C', text: "Terraform Core has hardcoded API integration code for all cloud providers inside a single monolithic binary." },
      { id: 'D', text: "Providers run as web services in the cloud, while Terraform Core runs locally without plugins." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform Core evaluates HCL configurations and dependency graphs, communicating with external Provider plugins over gRPC. Terraform uses a plugin-based architecture. Terraform Core manages the configuration parser, dependency graph, and state management, while standalone Provider binaries (plugins) translate Terraform resource CRUD requests into actual vendor API calls over gRPC.",
    referenceUrl: "https://developer.hashicorp.com/terraform/plugin/how-terraform-works",
    tags: ["Architecture", "Provider Architecture", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-279",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Core vs Terraform Plugins (Providers): Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Architecture to understand how Terraform communicates with diverse cloud APIs (AWS, Azure, GCP, GitHub, Datadog) through a unified workflow.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? RPC-based separation between Terraform Core engine and provider plugins is under consideration.",
    options: [
      { id: 'A', text: "Providers run as web services in the cloud, while Terraform Core runs locally without plugins." },
      { id: 'B', text: "Terraform Core has hardcoded API integration code for all cloud providers inside a single monolithic binary." },
      { id: 'C', text: "Terraform executes raw bash scripts to talk to cloud APIs." },
      { id: 'D', text: "Terraform Core evaluates HCL configurations and dependency graphs, communicating with external Provider plugins over gRPC." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Terraform Core evaluates HCL configurations and dependency graphs, communicating with external Provider plugins over gRPC. Terraform uses a plugin-based architecture. Terraform Core manages the configuration parser, dependency graph, and state management, while standalone Provider binaries (plugins) translate Terraform resource CRUD requests into actual vendor API calls over gRPC.",
    referenceUrl: "https://developer.hashicorp.com/terraform/plugin/how-terraform-works",
    tags: ["Architecture", "Provider Architecture", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-280",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Core vs Terraform Plugins (Providers): Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Architecture to understand how Terraform communicates with diverse cloud APIs (AWS, Azure, GCP, GitHub, Datadog) through a unified workflow.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? RPC-based separation between Terraform Core engine and provider plugins is under consideration.",
    options: [
      { id: 'A', text: "Terraform executes raw bash scripts to talk to cloud APIs." },
      { id: 'B', text: "Terraform Core has hardcoded API integration code for all cloud providers inside a single monolithic binary." },
      { id: 'C', text: "Terraform Core evaluates HCL configurations and dependency graphs, communicating with external Provider plugins over gRPC." },
      { id: 'D', text: "Providers run as web services in the cloud, while Terraform Core runs locally without plugins." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Terraform Core evaluates HCL configurations and dependency graphs, communicating with external Provider plugins over gRPC. Terraform uses a plugin-based architecture. Terraform Core manages the configuration parser, dependency graph, and state management, while standalone Provider binaries (plugins) translate Terraform resource CRUD requests into actual vendor API calls over gRPC.",
    referenceUrl: "https://developer.hashicorp.com/terraform/plugin/how-terraform-works",
    tags: ["Architecture", "Provider Architecture", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-281",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Providers: Declaration and Version Constraints: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Providers to ensure that a Terraform project always uses a specific, tested version of the AWS provider and avoids breaking changes from major provider updates.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Configuring required_providers block with source address and version constraints is under consideration.",
    options: [
      { id: 'A', text: "Omit provider declarations and let Terraform download random versions on every run." },
      { id: 'B', text: "Hardcode the provider binary file inside the Git repository." },
      { id: 'C', text: "Use version constraint `&gt;= 1.0` allowing all future major breaking changes." },
      { id: 'D', text: "Declare the provider in `terraform.required_providers` with source address (`hashicorp/aws`) and pessimistic version constraint (e.g., `~&gt; 5.0`)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Declare the provider in `terraform.required_providers` with source address (`hashicorp/aws`) and pessimistic version constraint (e.g., `~&gt; 5.0`). The `required_providers` block inside `terraform {}` specifies the global source address (e.g., `hashicorp/aws`) and version constraints for each provider. Using the pessimistic operator (`~&gt; 5.0`) allows backward-compatible minor/patch updates while preventing breaking major version upgrades.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/requirements",
    tags: ["Providers", "Provider Versioning", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-282",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Providers: Declaration and Version Constraints: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Providers to ensure that a Terraform project always uses a specific, tested version of the AWS provider and avoids breaking changes from major provider updates.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Configuring required_providers block with source address and version constraints is under consideration.",
    options: [
      { id: 'A', text: "Use version constraint `&gt;= 1.0` allowing all future major breaking changes." },
      { id: 'B', text: "Omit provider declarations and let Terraform download random versions on every run." },
      { id: 'C', text: "Declare the provider in `terraform.required_providers` with source address (`hashicorp/aws`) and pessimistic version constraint (e.g., `~&gt; 5.0`)." },
      { id: 'D', text: "Hardcode the provider binary file inside the Git repository." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Declare the provider in `terraform.required_providers` with source address (`hashicorp/aws`) and pessimistic version constraint (e.g., `~&gt; 5.0`). The `required_providers` block inside `terraform {}` specifies the global source address (e.g., `hashicorp/aws`) and version constraints for each provider. Using the pessimistic operator (`~&gt; 5.0`) allows backward-compatible minor/patch updates while preventing breaking major version upgrades.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/requirements",
    tags: ["Providers", "Provider Versioning", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-283",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Providers: Declaration and Version Constraints: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Providers to ensure that a Terraform project always uses a specific, tested version of the AWS provider and avoids breaking changes from major provider updates.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Configuring required_providers block with source address and version constraints is under consideration.",
    options: [
      { id: 'A', text: "Omit provider declarations and let Terraform download random versions on every run." },
      { id: 'B', text: "Use version constraint `&gt;= 1.0` allowing all future major breaking changes." },
      { id: 'C', text: "Hardcode the provider binary file inside the Git repository." },
      { id: 'D', text: "Declare the provider in `terraform.required_providers` with source address (`hashicorp/aws`) and pessimistic version constraint (e.g., `~&gt; 5.0`)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Declare the provider in `terraform.required_providers` with source address (`hashicorp/aws`) and pessimistic version constraint (e.g., `~&gt; 5.0`). The `required_providers` block inside `terraform {}` specifies the global source address (e.g., `hashicorp/aws`) and version constraints for each provider. Using the pessimistic operator (`~&gt; 5.0`) allows backward-compatible minor/patch updates while preventing breaking major version upgrades.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/requirements",
    tags: ["Providers", "Provider Versioning", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-284",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Providers: Declaration and Version Constraints: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Providers to ensure that a Terraform project always uses a specific, tested version of the AWS provider and avoids breaking changes from major provider updates.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Configuring required_providers block with source address and version constraints is under consideration.",
    options: [
      { id: 'A', text: "Use version constraint `&gt;= 1.0` allowing all future major breaking changes." },
      { id: 'B', text: "Hardcode the provider binary file inside the Git repository." },
      { id: 'C', text: "Declare the provider in `terraform.required_providers` with source address (`hashicorp/aws`) and pessimistic version constraint (e.g., `~&gt; 5.0`)." },
      { id: 'D', text: "Omit provider declarations and let Terraform download random versions on every run." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Declare the provider in `terraform.required_providers` with source address (`hashicorp/aws`) and pessimistic version constraint (e.g., `~&gt; 5.0`). The `required_providers` block inside `terraform {}` specifies the global source address (e.g., `hashicorp/aws`) and version constraints for each provider. Using the pessimistic operator (`~&gt; 5.0`) allows backward-compatible minor/patch updates while preventing breaking major version upgrades.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/requirements",
    tags: ["Providers", "Provider Versioning", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-285",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Providers: Declaration and Version Constraints: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Providers to ensure that a Terraform project always uses a specific, tested version of the AWS provider and avoids breaking changes from major provider updates.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Configuring required_providers block with source address and version constraints is under consideration.",
    options: [
      { id: 'A', text: "Omit provider declarations and let Terraform download random versions on every run." },
      { id: 'B', text: "Declare the provider in `terraform.required_providers` with source address (`hashicorp/aws`) and pessimistic version constraint (e.g., `~&gt; 5.0`)." },
      { id: 'C', text: "Use version constraint `&gt;= 1.0` allowing all future major breaking changes." },
      { id: 'D', text: "Hardcode the provider binary file inside the Git repository." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Declare the provider in `terraform.required_providers` with source address (`hashicorp/aws`) and pessimistic version constraint (e.g., `~&gt; 5.0`). The `required_providers` block inside `terraform {}` specifies the global source address (e.g., `hashicorp/aws`) and version constraints for each provider. Using the pessimistic operator (`~&gt; 5.0`) allows backward-compatible minor/patch updates while preventing breaking major version upgrades.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/requirements",
    tags: ["Providers", "Provider Versioning", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-286",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Dependency Graph and Implicit Dependencies: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Dependency Graph to ensure that a security group is created before an EC2 instance that references its ID without writing explicit dependency directives.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Directed Acyclic Graphs (DAG) and implicit resource dependencies via attribute references is under consideration.",
    options: [
      { id: 'A', text: "Put the security group in a completely separate Terraform workspace." },
      { id: 'B', text: "Add an explicit `depends_on = [aws_security_group.web]` on every single resource." },
      { id: 'C', text: "Run `terraform apply` twice in a row hoping the second run succeeds." },
      { id: 'D', text: "Reference the security group attribute directly in the EC2 instance block (e.g., `vpc_security_group_ids = [aws_security_group.web.id]`)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Reference the security group attribute directly in the EC2 instance block (e.g., `vpc_security_group_ids = [aws_security_group.web.id]`). Terraform builds a Directed Acyclic Graph (DAG) of all resources. Referencing an attribute of one resource in another (e.g., `aws_security_group.web.id`) creates an implicit dependency, instructing Terraform to automatically provision the referenced resource first without requiring manual `depends_on` blocks.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior#resource-dependencies",
    tags: ["Dependency Graph", "Implicit Dependencies", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-287",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Dependency Graph and Implicit Dependencies: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Dependency Graph to ensure that a security group is created before an EC2 instance that references its ID without writing explicit dependency directives.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Directed Acyclic Graphs (DAG) and implicit resource dependencies via attribute references is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform apply` twice in a row hoping the second run succeeds." },
      { id: 'B', text: "Put the security group in a completely separate Terraform workspace." },
      { id: 'C', text: "Add an explicit `depends_on = [aws_security_group.web]` on every single resource." },
      { id: 'D', text: "Reference the security group attribute directly in the EC2 instance block (e.g., `vpc_security_group_ids = [aws_security_group.web.id]`)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Reference the security group attribute directly in the EC2 instance block (e.g., `vpc_security_group_ids = [aws_security_group.web.id]`). Terraform builds a Directed Acyclic Graph (DAG) of all resources. Referencing an attribute of one resource in another (e.g., `aws_security_group.web.id`) creates an implicit dependency, instructing Terraform to automatically provision the referenced resource first without requiring manual `depends_on` blocks.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior#resource-dependencies",
    tags: ["Dependency Graph", "Implicit Dependencies", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-288",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Dependency Graph and Implicit Dependencies: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Dependency Graph to ensure that a security group is created before an EC2 instance that references its ID without writing explicit dependency directives.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Directed Acyclic Graphs (DAG) and implicit resource dependencies via attribute references is under consideration.",
    options: [
      { id: 'A', text: "Reference the security group attribute directly in the EC2 instance block (e.g., `vpc_security_group_ids = [aws_security_group.web.id]`)." },
      { id: 'B', text: "Add an explicit `depends_on = [aws_security_group.web]` on every single resource." },
      { id: 'C', text: "Run `terraform apply` twice in a row hoping the second run succeeds." },
      { id: 'D', text: "Put the security group in a completely separate Terraform workspace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Reference the security group attribute directly in the EC2 instance block (e.g., `vpc_security_group_ids = [aws_security_group.web.id]`). Terraform builds a Directed Acyclic Graph (DAG) of all resources. Referencing an attribute of one resource in another (e.g., `aws_security_group.web.id`) creates an implicit dependency, instructing Terraform to automatically provision the referenced resource first without requiring manual `depends_on` blocks.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior#resource-dependencies",
    tags: ["Dependency Graph", "Implicit Dependencies", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-289",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Dependency Graph and Implicit Dependencies: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Dependency Graph to ensure that a security group is created before an EC2 instance that references its ID without writing explicit dependency directives.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Directed Acyclic Graphs (DAG) and implicit resource dependencies via attribute references is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform apply` twice in a row hoping the second run succeeds." },
      { id: 'B', text: "Reference the security group attribute directly in the EC2 instance block (e.g., `vpc_security_group_ids = [aws_security_group.web.id]`)." },
      { id: 'C', text: "Put the security group in a completely separate Terraform workspace." },
      { id: 'D', text: "Add an explicit `depends_on = [aws_security_group.web]` on every single resource." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Reference the security group attribute directly in the EC2 instance block (e.g., `vpc_security_group_ids = [aws_security_group.web.id]`). Terraform builds a Directed Acyclic Graph (DAG) of all resources. Referencing an attribute of one resource in another (e.g., `aws_security_group.web.id`) creates an implicit dependency, instructing Terraform to automatically provision the referenced resource first without requiring manual `depends_on` blocks.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior#resource-dependencies",
    tags: ["Dependency Graph", "Implicit Dependencies", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-290",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Dependency Graph and Implicit Dependencies: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Dependency Graph to ensure that a security group is created before an EC2 instance that references its ID without writing explicit dependency directives.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Directed Acyclic Graphs (DAG) and implicit resource dependencies via attribute references is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform apply` twice in a row hoping the second run succeeds." },
      { id: 'B', text: "Reference the security group attribute directly in the EC2 instance block (e.g., `vpc_security_group_ids = [aws_security_group.web.id]`)." },
      { id: 'C', text: "Put the security group in a completely separate Terraform workspace." },
      { id: 'D', text: "Add an explicit `depends_on = [aws_security_group.web]` on every single resource." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Reference the security group attribute directly in the EC2 instance block (e.g., `vpc_security_group_ids = [aws_security_group.web.id]`). Terraform builds a Directed Acyclic Graph (DAG) of all resources. Referencing an attribute of one resource in another (e.g., `aws_security_group.web.id`) creates an implicit dependency, instructing Terraform to automatically provision the referenced resource first without requiring manual `depends_on` blocks.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior#resource-dependencies",
    tags: ["Dependency Graph", "Implicit Dependencies", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-291",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Explicit Dependencies with depends_on: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Explicit Dependencies to ensure an EC2 instance is not created until an IAM role policy attachment completes, even though the instance does not directly reference the policy attachment object.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Using depends_on meta-argument for hidden or out-of-band ordering requirements is under consideration.",
    options: [
      { id: 'A', text: "Specify `depends_on = [aws_iam_role_policy_attachment.app]` in the EC2 instance resource block." },
      { id: 'B', text: "Rely on implicit dependencies which cannot detect out-of-band relationships." },
      { id: 'C', text: "Deploy the IAM policy attachment in a completely different AWS account." },
      { id: 'D', text: "Insert a `sleep 60` command into the local operating system terminal." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `depends_on = [aws_iam_role_policy_attachment.app]` in the EC2 instance resource block. The `depends_on` meta-argument defines explicit dependencies between resources. When resources have hidden or behavioral dependencies that are not expressed through direct attribute references (such as IAM permission propagation), `depends_on` forces Terraform to complete the dependency first.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/depends_on",
    tags: ["Explicit Dependencies", "depends_on", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-292",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Explicit Dependencies with depends_on: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Explicit Dependencies to ensure an EC2 instance is not created until an IAM role policy attachment completes, even though the instance does not directly reference the policy attachment object.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Using depends_on meta-argument for hidden or out-of-band ordering requirements is under consideration.",
    options: [
      { id: 'A', text: "Insert a `sleep 60` command into the local operating system terminal." },
      { id: 'B', text: "Rely on implicit dependencies which cannot detect out-of-band relationships." },
      { id: 'C', text: "Specify `depends_on = [aws_iam_role_policy_attachment.app]` in the EC2 instance resource block." },
      { id: 'D', text: "Deploy the IAM policy attachment in a completely different AWS account." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specify `depends_on = [aws_iam_role_policy_attachment.app]` in the EC2 instance resource block. The `depends_on` meta-argument defines explicit dependencies between resources. When resources have hidden or behavioral dependencies that are not expressed through direct attribute references (such as IAM permission propagation), `depends_on` forces Terraform to complete the dependency first.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/depends_on",
    tags: ["Explicit Dependencies", "depends_on", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-293",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Explicit Dependencies with depends_on: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Explicit Dependencies to ensure an EC2 instance is not created until an IAM role policy attachment completes, even though the instance does not directly reference the policy attachment object.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Using depends_on meta-argument for hidden or out-of-band ordering requirements is under consideration.",
    options: [
      { id: 'A', text: "Insert a `sleep 60` command into the local operating system terminal." },
      { id: 'B', text: "Rely on implicit dependencies which cannot detect out-of-band relationships." },
      { id: 'C', text: "Specify `depends_on = [aws_iam_role_policy_attachment.app]` in the EC2 instance resource block." },
      { id: 'D', text: "Deploy the IAM policy attachment in a completely different AWS account." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specify `depends_on = [aws_iam_role_policy_attachment.app]` in the EC2 instance resource block. The `depends_on` meta-argument defines explicit dependencies between resources. When resources have hidden or behavioral dependencies that are not expressed through direct attribute references (such as IAM permission propagation), `depends_on` forces Terraform to complete the dependency first.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/depends_on",
    tags: ["Explicit Dependencies", "depends_on", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-294",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Explicit Dependencies with depends_on: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Explicit Dependencies to ensure an EC2 instance is not created until an IAM role policy attachment completes, even though the instance does not directly reference the policy attachment object.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Using depends_on meta-argument for hidden or out-of-band ordering requirements is under consideration.",
    options: [
      { id: 'A', text: "Insert a `sleep 60` command into the local operating system terminal." },
      { id: 'B', text: "Deploy the IAM policy attachment in a completely different AWS account." },
      { id: 'C', text: "Rely on implicit dependencies which cannot detect out-of-band relationships." },
      { id: 'D', text: "Specify `depends_on = [aws_iam_role_policy_attachment.app]` in the EC2 instance resource block." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Specify `depends_on = [aws_iam_role_policy_attachment.app]` in the EC2 instance resource block. The `depends_on` meta-argument defines explicit dependencies between resources. When resources have hidden or behavioral dependencies that are not expressed through direct attribute references (such as IAM permission propagation), `depends_on` forces Terraform to complete the dependency first.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/depends_on",
    tags: ["Explicit Dependencies", "depends_on", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-295",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Explicit Dependencies with depends_on: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Explicit Dependencies to ensure an EC2 instance is not created until an IAM role policy attachment completes, even though the instance does not directly reference the policy attachment object.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Using depends_on meta-argument for hidden or out-of-band ordering requirements is under consideration.",
    options: [
      { id: 'A', text: "Specify `depends_on = [aws_iam_role_policy_attachment.app]` in the EC2 instance resource block." },
      { id: 'B', text: "Deploy the IAM policy attachment in a completely different AWS account." },
      { id: 'C', text: "Insert a `sleep 60` command into the local operating system terminal." },
      { id: 'D', text: "Rely on implicit dependencies which cannot detect out-of-band relationships." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `depends_on = [aws_iam_role_policy_attachment.app]` in the EC2 instance resource block. The `depends_on` meta-argument defines explicit dependencies between resources. When resources have hidden or behavioral dependencies that are not expressed through direct attribute references (such as IAM permission propagation), `depends_on` forces Terraform to complete the dependency first.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/depends_on",
    tags: ["Explicit Dependencies", "depends_on", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-296",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Resource Life Cycle: Create, Read, Update, Delete (CRUD): Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Resource Lifecycle to understand how Terraform determines whether an in-place update or a destructive replacement is required when modifying a resource property.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? How Terraform manages cloud resources through standardized CRUD operations is under consideration.",
    options: [
      { id: 'A', text: "Terraform compares configuration against state and provider schemas; changing a 'ForceNew' attribute triggers resource destruction and recreation." },
      { id: 'B', text: "The cloud provider console prompts the user interactively to decide whether to delete." },
      { id: 'C', text: "Terraform never destroys resources and only issues update API calls." },
      { id: 'D', text: "Terraform always destroys and recreates every resource on every apply." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform compares configuration against state and provider schemas; changing a 'ForceNew' attribute triggers resource destruction and recreation. Terraform resources follow CRUD lifecycles. Provider schemas define which attributes can be updated in-place (Update) and which attributes require recreating the resource (Delete followed by Create, marked as 'forces replacement' or `ForceNew` in execution plans).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior",
    tags: ["Resource Lifecycle", "Resource Lifecycle", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-297",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Resource Life Cycle: Create, Read, Update, Delete (CRUD): High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Resource Lifecycle to understand how Terraform determines whether an in-place update or a destructive replacement is required when modifying a resource property.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? How Terraform manages cloud resources through standardized CRUD operations is under consideration.",
    options: [
      { id: 'A', text: "The cloud provider console prompts the user interactively to decide whether to delete." },
      { id: 'B', text: "Terraform compares configuration against state and provider schemas; changing a 'ForceNew' attribute triggers resource destruction and recreation." },
      { id: 'C', text: "Terraform never destroys resources and only issues update API calls." },
      { id: 'D', text: "Terraform always destroys and recreates every resource on every apply." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Terraform compares configuration against state and provider schemas; changing a 'ForceNew' attribute triggers resource destruction and recreation. Terraform resources follow CRUD lifecycles. Provider schemas define which attributes can be updated in-place (Update) and which attributes require recreating the resource (Delete followed by Create, marked as 'forces replacement' or `ForceNew` in execution plans).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior",
    tags: ["Resource Lifecycle", "Resource Lifecycle", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-298",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Resource Life Cycle: Create, Read, Update, Delete (CRUD): Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Resource Lifecycle to understand how Terraform determines whether an in-place update or a destructive replacement is required when modifying a resource property.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? How Terraform manages cloud resources through standardized CRUD operations is under consideration.",
    options: [
      { id: 'A', text: "Terraform always destroys and recreates every resource on every apply." },
      { id: 'B', text: "The cloud provider console prompts the user interactively to decide whether to delete." },
      { id: 'C', text: "Terraform never destroys resources and only issues update API calls." },
      { id: 'D', text: "Terraform compares configuration against state and provider schemas; changing a 'ForceNew' attribute triggers resource destruction and recreation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Terraform compares configuration against state and provider schemas; changing a 'ForceNew' attribute triggers resource destruction and recreation. Terraform resources follow CRUD lifecycles. Provider schemas define which attributes can be updated in-place (Update) and which attributes require recreating the resource (Delete followed by Create, marked as 'forces replacement' or `ForceNew` in execution plans).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior",
    tags: ["Resource Lifecycle", "Resource Lifecycle", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-299",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Resource Life Cycle: Create, Read, Update, Delete (CRUD): Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Resource Lifecycle to understand how Terraform determines whether an in-place update or a destructive replacement is required when modifying a resource property.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? How Terraform manages cloud resources through standardized CRUD operations is under consideration.",
    options: [
      { id: 'A', text: "Terraform never destroys resources and only issues update API calls." },
      { id: 'B', text: "Terraform always destroys and recreates every resource on every apply." },
      { id: 'C', text: "Terraform compares configuration against state and provider schemas; changing a 'ForceNew' attribute triggers resource destruction and recreation." },
      { id: 'D', text: "The cloud provider console prompts the user interactively to decide whether to delete." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Terraform compares configuration against state and provider schemas; changing a 'ForceNew' attribute triggers resource destruction and recreation. Terraform resources follow CRUD lifecycles. Provider schemas define which attributes can be updated in-place (Update) and which attributes require recreating the resource (Delete followed by Create, marked as 'forces replacement' or `ForceNew` in execution plans).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior",
    tags: ["Resource Lifecycle", "Resource Lifecycle", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-300",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Resource Life Cycle: Create, Read, Update, Delete (CRUD): Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Resource Lifecycle to understand how Terraform determines whether an in-place update or a destructive replacement is required when modifying a resource property.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? How Terraform manages cloud resources through standardized CRUD operations is under consideration.",
    options: [
      { id: 'A', text: "The cloud provider console prompts the user interactively to decide whether to delete." },
      { id: 'B', text: "Terraform compares configuration against state and provider schemas; changing a 'ForceNew' attribute triggers resource destruction and recreation." },
      { id: 'C', text: "Terraform never destroys resources and only issues update API calls." },
      { id: 'D', text: "Terraform always destroys and recreates every resource on every apply." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Terraform compares configuration against state and provider schemas; changing a 'ForceNew' attribute triggers resource destruction and recreation. Terraform resources follow CRUD lifecycles. Provider schemas define which attributes can be updated in-place (Update) and which attributes require recreating the resource (Delete followed by Create, marked as 'forces replacement' or `ForceNew` in execution plans).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior",
    tags: ["Resource Lifecycle", "Resource Lifecycle", "Resilience Failure"]
  }
];

export default HASHICORP_TFA_QUESTIONS_12;
