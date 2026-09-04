export const HASHICORP_TFA_QUESTIONS_14 = [
  {
    id: "hashicorp-tfa-326",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform apply and Auto-Approve Flags: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates CLI Apply to apply an approved Terraform plan inside an automated non-interactive CI/CD deployment pipeline without waiting for manual terminal confirmation.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Executing infrastructure mutations and using -auto-approve in automated pipelines is under consideration.",
    options: [
      { id: 'A', text: "Execute `terraform apply -auto-approve` or apply a pre-generated plan file (`terraform apply tfplan`)." },
      { id: 'B', text: "Run `terraform apply` and write a custom expect script to type 'yes'." },
      { id: 'C', text: "Disable all confirmation prompts by modifying the Terraform Go binary." },
      { id: 'D', text: "Run `terraform destroy` followed by `terraform init`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `terraform apply -auto-approve` or apply a pre-generated plan file (`terraform apply tfplan`). In interactive terminal sessions, `terraform apply` prompts the user to review the plan and type `yes` before modifying infrastructure. In automated CI/CD pipelines, passing `-auto-approve` skips this prompt, executing the planned actions immediately without interactive blocking.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/apply",
    tags: ["CLI Apply", "terraform apply", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-327",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform apply and Auto-Approve Flags: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates CLI Apply to apply an approved Terraform plan inside an automated non-interactive CI/CD deployment pipeline without waiting for manual terminal confirmation.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Executing infrastructure mutations and using -auto-approve in automated pipelines is under consideration.",
    options: [
      { id: 'A', text: "Execute `terraform apply -auto-approve` or apply a pre-generated plan file (`terraform apply tfplan`)." },
      { id: 'B', text: "Run `terraform apply` and write a custom expect script to type 'yes'." },
      { id: 'C', text: "Disable all confirmation prompts by modifying the Terraform Go binary." },
      { id: 'D', text: "Run `terraform destroy` followed by `terraform init`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `terraform apply -auto-approve` or apply a pre-generated plan file (`terraform apply tfplan`). In interactive terminal sessions, `terraform apply` prompts the user to review the plan and type `yes` before modifying infrastructure. In automated CI/CD pipelines, passing `-auto-approve` skips this prompt, executing the planned actions immediately without interactive blocking.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/apply",
    tags: ["CLI Apply", "terraform apply", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-328",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform apply and Auto-Approve Flags: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates CLI Apply to apply an approved Terraform plan inside an automated non-interactive CI/CD deployment pipeline without waiting for manual terminal confirmation.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Executing infrastructure mutations and using -auto-approve in automated pipelines is under consideration.",
    options: [
      { id: 'A', text: "Execute `terraform apply -auto-approve` or apply a pre-generated plan file (`terraform apply tfplan`)." },
      { id: 'B', text: "Run `terraform apply` and write a custom expect script to type 'yes'." },
      { id: 'C', text: "Disable all confirmation prompts by modifying the Terraform Go binary." },
      { id: 'D', text: "Run `terraform destroy` followed by `terraform init`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `terraform apply -auto-approve` or apply a pre-generated plan file (`terraform apply tfplan`). In interactive terminal sessions, `terraform apply` prompts the user to review the plan and type `yes` before modifying infrastructure. In automated CI/CD pipelines, passing `-auto-approve` skips this prompt, executing the planned actions immediately without interactive blocking.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/apply",
    tags: ["CLI Apply", "terraform apply", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-329",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform apply and Auto-Approve Flags: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates CLI Apply to apply an approved Terraform plan inside an automated non-interactive CI/CD deployment pipeline without waiting for manual terminal confirmation.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Executing infrastructure mutations and using -auto-approve in automated pipelines is under consideration.",
    options: [
      { id: 'A', text: "Execute `terraform apply -auto-approve` or apply a pre-generated plan file (`terraform apply tfplan`)." },
      { id: 'B', text: "Run `terraform apply` and write a custom expect script to type 'yes'." },
      { id: 'C', text: "Disable all confirmation prompts by modifying the Terraform Go binary." },
      { id: 'D', text: "Run `terraform destroy` followed by `terraform init`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `terraform apply -auto-approve` or apply a pre-generated plan file (`terraform apply tfplan`). In interactive terminal sessions, `terraform apply` prompts the user to review the plan and type `yes` before modifying infrastructure. In automated CI/CD pipelines, passing `-auto-approve` skips this prompt, executing the planned actions immediately without interactive blocking.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/apply",
    tags: ["CLI Apply", "terraform apply", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-330",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform apply and Auto-Approve Flags: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates CLI Apply to apply an approved Terraform plan inside an automated non-interactive CI/CD deployment pipeline without waiting for manual terminal confirmation.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Executing infrastructure mutations and using -auto-approve in automated pipelines is under consideration.",
    options: [
      { id: 'A', text: "Execute `terraform apply -auto-approve` or apply a pre-generated plan file (`terraform apply tfplan`)." },
      { id: 'B', text: "Run `terraform apply` and write a custom expect script to type 'yes'." },
      { id: 'C', text: "Disable all confirmation prompts by modifying the Terraform Go binary." },
      { id: 'D', text: "Run `terraform destroy` followed by `terraform init`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `terraform apply -auto-approve` or apply a pre-generated plan file (`terraform apply tfplan`). In interactive terminal sessions, `terraform apply` prompts the user to review the plan and type `yes` before modifying infrastructure. In automated CI/CD pipelines, passing `-auto-approve` skips this prompt, executing the planned actions immediately without interactive blocking.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/apply",
    tags: ["CLI Apply", "terraform apply", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-331",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform destroy and Target Destruction: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates CLI Destroy to safely tear down all resources created for a temporary development environment at the end of a testing cycle to stop incurring cloud costs.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Deprovisioning managed infrastructure safely with terraform destroy is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform destroy` in the environment workspace and review the destruction plan before confirming." },
      { id: 'B', text: "Delete the `.terraform` folder on the local machine and assume cloud resources vanish." },
      { id: 'C', text: "Delete the Terraform state file from the remote S3 bucket." },
      { id: 'D', text: "Log into the cloud console and terminate instances manually, leaving orphaned storage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform destroy` in the environment workspace and review the destruction plan before confirming. `terraform destroy` is a convenient command to terminate all infrastructure managed by the current Terraform configuration. It generates a speculative plan showing all resources marked for deletion (rendered with `-` prefixes in red) and prompts for confirmation before executing destruction.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/destroy",
    tags: ["CLI Destroy", "terraform destroy", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-332",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform destroy and Target Destruction: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates CLI Destroy to safely tear down all resources created for a temporary development environment at the end of a testing cycle to stop incurring cloud costs.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Deprovisioning managed infrastructure safely with terraform destroy is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform destroy` in the environment workspace and review the destruction plan before confirming." },
      { id: 'B', text: "Delete the `.terraform` folder on the local machine and assume cloud resources vanish." },
      { id: 'C', text: "Delete the Terraform state file from the remote S3 bucket." },
      { id: 'D', text: "Log into the cloud console and terminate instances manually, leaving orphaned storage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform destroy` in the environment workspace and review the destruction plan before confirming. `terraform destroy` is a convenient command to terminate all infrastructure managed by the current Terraform configuration. It generates a speculative plan showing all resources marked for deletion (rendered with `-` prefixes in red) and prompts for confirmation before executing destruction.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/destroy",
    tags: ["CLI Destroy", "terraform destroy", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-333",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform destroy and Target Destruction: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates CLI Destroy to safely tear down all resources created for a temporary development environment at the end of a testing cycle to stop incurring cloud costs.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Deprovisioning managed infrastructure safely with terraform destroy is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform destroy` in the environment workspace and review the destruction plan before confirming." },
      { id: 'B', text: "Delete the `.terraform` folder on the local machine and assume cloud resources vanish." },
      { id: 'C', text: "Delete the Terraform state file from the remote S3 bucket." },
      { id: 'D', text: "Log into the cloud console and terminate instances manually, leaving orphaned storage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform destroy` in the environment workspace and review the destruction plan before confirming. `terraform destroy` is a convenient command to terminate all infrastructure managed by the current Terraform configuration. It generates a speculative plan showing all resources marked for deletion (rendered with `-` prefixes in red) and prompts for confirmation before executing destruction.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/destroy",
    tags: ["CLI Destroy", "terraform destroy", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-334",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform destroy and Target Destruction: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates CLI Destroy to safely tear down all resources created for a temporary development environment at the end of a testing cycle to stop incurring cloud costs.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Deprovisioning managed infrastructure safely with terraform destroy is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform destroy` in the environment workspace and review the destruction plan before confirming." },
      { id: 'B', text: "Delete the `.terraform` folder on the local machine and assume cloud resources vanish." },
      { id: 'C', text: "Delete the Terraform state file from the remote S3 bucket." },
      { id: 'D', text: "Log into the cloud console and terminate instances manually, leaving orphaned storage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform destroy` in the environment workspace and review the destruction plan before confirming. `terraform destroy` is a convenient command to terminate all infrastructure managed by the current Terraform configuration. It generates a speculative plan showing all resources marked for deletion (rendered with `-` prefixes in red) and prompts for confirmation before executing destruction.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/destroy",
    tags: ["CLI Destroy", "terraform destroy", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-335",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform destroy and Target Destruction: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates CLI Destroy to safely tear down all resources created for a temporary development environment at the end of a testing cycle to stop incurring cloud costs.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Deprovisioning managed infrastructure safely with terraform destroy is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform destroy` in the environment workspace and review the destruction plan before confirming." },
      { id: 'B', text: "Delete the `.terraform` folder on the local machine and assume cloud resources vanish." },
      { id: 'C', text: "Delete the Terraform state file from the remote S3 bucket." },
      { id: 'D', text: "Log into the cloud console and terminate instances manually, leaving orphaned storage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform destroy` in the environment workspace and review the destruction plan before confirming. `terraform destroy` is a convenient command to terminate all infrastructure managed by the current Terraform configuration. It generates a speculative plan showing all resources marked for deletion (rendered with `-` prefixes in red) and prompts for confirmation before executing destruction.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/destroy",
    tags: ["CLI Destroy", "terraform destroy", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-336",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform validate vs terraform fmt: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates CLI Formatting & Validation to enforce standardized HCL formatting and verify internal syntax and attribute consistency in a pre-commit hook or pull request pipeline.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Syntactic validation with terraform validate vs style formatting with terraform fmt is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform fmt -check` to verify canonical style and `terraform validate` to verify syntax, types, and resource attributes." },
      { id: 'B', text: "Run `terraform apply` against production to see if syntax errors exist." },
      { id: 'C', text: "Use a generic JSON linter that cannot parse HCL." },
      { id: 'D', text: "Assume developer text editors always produce canonical HCL formatting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform fmt -check` to verify canonical style and `terraform validate` to verify syntax, types, and resource attributes. `terraform fmt` rewrites configuration files to canonical style and indentation (using `-check` in CI to fail on unformatted code). `terraform validate` verifies syntactical validity, attribute names, and variable types against provider schemas without contacting remote cloud APIs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/validate",
    tags: ["CLI Formatting & Validation", "validate vs fmt", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-337",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform validate vs terraform fmt: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates CLI Formatting & Validation to enforce standardized HCL formatting and verify internal syntax and attribute consistency in a pre-commit hook or pull request pipeline.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Syntactic validation with terraform validate vs style formatting with terraform fmt is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform fmt -check` to verify canonical style and `terraform validate` to verify syntax, types, and resource attributes." },
      { id: 'B', text: "Run `terraform apply` against production to see if syntax errors exist." },
      { id: 'C', text: "Use a generic JSON linter that cannot parse HCL." },
      { id: 'D', text: "Assume developer text editors always produce canonical HCL formatting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform fmt -check` to verify canonical style and `terraform validate` to verify syntax, types, and resource attributes. `terraform fmt` rewrites configuration files to canonical style and indentation (using `-check` in CI to fail on unformatted code). `terraform validate` verifies syntactical validity, attribute names, and variable types against provider schemas without contacting remote cloud APIs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/validate",
    tags: ["CLI Formatting & Validation", "validate vs fmt", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-338",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform validate vs terraform fmt: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates CLI Formatting & Validation to enforce standardized HCL formatting and verify internal syntax and attribute consistency in a pre-commit hook or pull request pipeline.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Syntactic validation with terraform validate vs style formatting with terraform fmt is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform fmt -check` to verify canonical style and `terraform validate` to verify syntax, types, and resource attributes." },
      { id: 'B', text: "Run `terraform apply` against production to see if syntax errors exist." },
      { id: 'C', text: "Use a generic JSON linter that cannot parse HCL." },
      { id: 'D', text: "Assume developer text editors always produce canonical HCL formatting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform fmt -check` to verify canonical style and `terraform validate` to verify syntax, types, and resource attributes. `terraform fmt` rewrites configuration files to canonical style and indentation (using `-check` in CI to fail on unformatted code). `terraform validate` verifies syntactical validity, attribute names, and variable types against provider schemas without contacting remote cloud APIs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/validate",
    tags: ["CLI Formatting & Validation", "validate vs fmt", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-339",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform validate vs terraform fmt: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates CLI Formatting & Validation to enforce standardized HCL formatting and verify internal syntax and attribute consistency in a pre-commit hook or pull request pipeline.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Syntactic validation with terraform validate vs style formatting with terraform fmt is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform fmt -check` to verify canonical style and `terraform validate` to verify syntax, types, and resource attributes." },
      { id: 'B', text: "Run `terraform apply` against production to see if syntax errors exist." },
      { id: 'C', text: "Use a generic JSON linter that cannot parse HCL." },
      { id: 'D', text: "Assume developer text editors always produce canonical HCL formatting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform fmt -check` to verify canonical style and `terraform validate` to verify syntax, types, and resource attributes. `terraform fmt` rewrites configuration files to canonical style and indentation (using `-check` in CI to fail on unformatted code). `terraform validate` verifies syntactical validity, attribute names, and variable types against provider schemas without contacting remote cloud APIs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/validate",
    tags: ["CLI Formatting & Validation", "validate vs fmt", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-340",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform validate vs terraform fmt: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates CLI Formatting & Validation to enforce standardized HCL formatting and verify internal syntax and attribute consistency in a pre-commit hook or pull request pipeline.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Syntactic validation with terraform validate vs style formatting with terraform fmt is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform fmt -check` to verify canonical style and `terraform validate` to verify syntax, types, and resource attributes." },
      { id: 'B', text: "Run `terraform apply` against production to see if syntax errors exist." },
      { id: 'C', text: "Use a generic JSON linter that cannot parse HCL." },
      { id: 'D', text: "Assume developer text editors always produce canonical HCL formatting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform fmt -check` to verify canonical style and `terraform validate` to verify syntax, types, and resource attributes. `terraform fmt` rewrites configuration files to canonical style and indentation (using `-check` in CI to fail on unformatted code). `terraform validate` verifies syntactical validity, attribute names, and variable types against provider schemas without contacting remote cloud APIs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/validate",
    tags: ["CLI Formatting & Validation", "validate vs fmt", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-341",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform show and terraform output: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates CLI Inspection to extract the public IP address of an EC2 instance created by Terraform for use in a downstream deployment bash script.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Inspecting human-readable state with terraform show and extracting outputs with terraform output is under consideration.",
    options: [
      { id: 'A', text: "Execute `terraform output -raw instance_public_ip` to extract the raw string value." },
      { id: 'B', text: "Open the `.tfstate` JSON file with vi and manually copy-paste the IP." },
      { id: 'C', text: "Run `terraform plan` and parse terminal text output with regex." },
      { id: 'D', text: "Log into the cloud console to find the instance IP by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `terraform output -raw instance_public_ip` to extract the raw string value. `terraform output` reads output variables defined in the configuration directly from the state file. The `-raw` flag extracts the plain string without quotes or formatting, making it ideal for passing variables to downstream automation scripts or configuration managers.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/output",
    tags: ["CLI Inspection", "terraform output", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-342",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform show and terraform output: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates CLI Inspection to extract the public IP address of an EC2 instance created by Terraform for use in a downstream deployment bash script.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Inspecting human-readable state with terraform show and extracting outputs with terraform output is under consideration.",
    options: [
      { id: 'A', text: "Execute `terraform output -raw instance_public_ip` to extract the raw string value." },
      { id: 'B', text: "Open the `.tfstate` JSON file with vi and manually copy-paste the IP." },
      { id: 'C', text: "Run `terraform plan` and parse terminal text output with regex." },
      { id: 'D', text: "Log into the cloud console to find the instance IP by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `terraform output -raw instance_public_ip` to extract the raw string value. `terraform output` reads output variables defined in the configuration directly from the state file. The `-raw` flag extracts the plain string without quotes or formatting, making it ideal for passing variables to downstream automation scripts or configuration managers.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/output",
    tags: ["CLI Inspection", "terraform output", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-343",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform show and terraform output: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates CLI Inspection to extract the public IP address of an EC2 instance created by Terraform for use in a downstream deployment bash script.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Inspecting human-readable state with terraform show and extracting outputs with terraform output is under consideration.",
    options: [
      { id: 'A', text: "Execute `terraform output -raw instance_public_ip` to extract the raw string value." },
      { id: 'B', text: "Open the `.tfstate` JSON file with vi and manually copy-paste the IP." },
      { id: 'C', text: "Run `terraform plan` and parse terminal text output with regex." },
      { id: 'D', text: "Log into the cloud console to find the instance IP by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `terraform output -raw instance_public_ip` to extract the raw string value. `terraform output` reads output variables defined in the configuration directly from the state file. The `-raw` flag extracts the plain string without quotes or formatting, making it ideal for passing variables to downstream automation scripts or configuration managers.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/output",
    tags: ["CLI Inspection", "terraform output", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-344",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform show and terraform output: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates CLI Inspection to extract the public IP address of an EC2 instance created by Terraform for use in a downstream deployment bash script.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Inspecting human-readable state with terraform show and extracting outputs with terraform output is under consideration.",
    options: [
      { id: 'A', text: "Execute `terraform output -raw instance_public_ip` to extract the raw string value." },
      { id: 'B', text: "Open the `.tfstate` JSON file with vi and manually copy-paste the IP." },
      { id: 'C', text: "Run `terraform plan` and parse terminal text output with regex." },
      { id: 'D', text: "Log into the cloud console to find the instance IP by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `terraform output -raw instance_public_ip` to extract the raw string value. `terraform output` reads output variables defined in the configuration directly from the state file. The `-raw` flag extracts the plain string without quotes or formatting, making it ideal for passing variables to downstream automation scripts or configuration managers.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/output",
    tags: ["CLI Inspection", "terraform output", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-345",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform show and terraform output: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates CLI Inspection to extract the public IP address of an EC2 instance created by Terraform for use in a downstream deployment bash script.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Inspecting human-readable state with terraform show and extracting outputs with terraform output is under consideration.",
    options: [
      { id: 'A', text: "Execute `terraform output -raw instance_public_ip` to extract the raw string value." },
      { id: 'B', text: "Open the `.tfstate` JSON file with vi and manually copy-paste the IP." },
      { id: 'C', text: "Run `terraform plan` and parse terminal text output with regex." },
      { id: 'D', text: "Log into the cloud console to find the instance IP by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `terraform output -raw instance_public_ip` to extract the raw string value. `terraform output` reads output variables defined in the configuration directly from the state file. The `-raw` flag extracts the plain string without quotes or formatting, making it ideal for passing variables to downstream automation scripts or configuration managers.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/output",
    tags: ["CLI Inspection", "terraform output", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-346",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform state Subcommands (list, show, mv, rm): Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates CLI State Inspection to view all resources currently tracked in the state file and inspect the detailed attributes of a specific security group.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Inspecting and modifying state mapping using terraform state subcommands is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform state list` to see all resource addresses, and `terraform state show aws_security_group.web` to view attributes." },
      { id: 'B', text: "Open the remote S3 state file in an external hex editor." },
      { id: 'C', text: "Run `terraform destroy` to see what resources get listed." },
      { id: 'D', text: "Run `cat terraform.tfstate` and scroll through thousands of lines of JSON." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform state list` to see all resource addresses, and `terraform state show aws_security_group.web` to view attributes. The `terraform state` command family allows safe inspection and modification of the state file. `state list` displays all tracked resource addresses, and `state show` prints the complete set of recorded attributes for a specific resource without modifying the state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state",
    tags: ["CLI State Inspection", "terraform state", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-347",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform state Subcommands (list, show, mv, rm): High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates CLI State Inspection to view all resources currently tracked in the state file and inspect the detailed attributes of a specific security group.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Inspecting and modifying state mapping using terraform state subcommands is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform state list` to see all resource addresses, and `terraform state show aws_security_group.web` to view attributes." },
      { id: 'B', text: "Open the remote S3 state file in an external hex editor." },
      { id: 'C', text: "Run `terraform destroy` to see what resources get listed." },
      { id: 'D', text: "Run `cat terraform.tfstate` and scroll through thousands of lines of JSON." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform state list` to see all resource addresses, and `terraform state show aws_security_group.web` to view attributes. The `terraform state` command family allows safe inspection and modification of the state file. `state list` displays all tracked resource addresses, and `state show` prints the complete set of recorded attributes for a specific resource without modifying the state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state",
    tags: ["CLI State Inspection", "terraform state", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-348",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform state Subcommands (list, show, mv, rm): Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates CLI State Inspection to view all resources currently tracked in the state file and inspect the detailed attributes of a specific security group.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Inspecting and modifying state mapping using terraform state subcommands is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform state list` to see all resource addresses, and `terraform state show aws_security_group.web` to view attributes." },
      { id: 'B', text: "Open the remote S3 state file in an external hex editor." },
      { id: 'C', text: "Run `terraform destroy` to see what resources get listed." },
      { id: 'D', text: "Run `cat terraform.tfstate` and scroll through thousands of lines of JSON." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform state list` to see all resource addresses, and `terraform state show aws_security_group.web` to view attributes. The `terraform state` command family allows safe inspection and modification of the state file. `state list` displays all tracked resource addresses, and `state show` prints the complete set of recorded attributes for a specific resource without modifying the state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state",
    tags: ["CLI State Inspection", "terraform state", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-349",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform state Subcommands (list, show, mv, rm): Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates CLI State Inspection to view all resources currently tracked in the state file and inspect the detailed attributes of a specific security group.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Inspecting and modifying state mapping using terraform state subcommands is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform state list` to see all resource addresses, and `terraform state show aws_security_group.web` to view attributes." },
      { id: 'B', text: "Open the remote S3 state file in an external hex editor." },
      { id: 'C', text: "Run `terraform destroy` to see what resources get listed." },
      { id: 'D', text: "Run `cat terraform.tfstate` and scroll through thousands of lines of JSON." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform state list` to see all resource addresses, and `terraform state show aws_security_group.web` to view attributes. The `terraform state` command family allows safe inspection and modification of the state file. `state list` displays all tracked resource addresses, and `state show` prints the complete set of recorded attributes for a specific resource without modifying the state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state",
    tags: ["CLI State Inspection", "terraform state", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-350",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform state Subcommands (list, show, mv, rm): Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates CLI State Inspection to view all resources currently tracked in the state file and inspect the detailed attributes of a specific security group.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Inspecting and modifying state mapping using terraform state subcommands is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform state list` to see all resource addresses, and `terraform state show aws_security_group.web` to view attributes." },
      { id: 'B', text: "Open the remote S3 state file in an external hex editor." },
      { id: 'C', text: "Run `terraform destroy` to see what resources get listed." },
      { id: 'D', text: "Run `cat terraform.tfstate` and scroll through thousands of lines of JSON." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform state list` to see all resource addresses, and `terraform state show aws_security_group.web` to view attributes. The `terraform state` command family allows safe inspection and modification of the state file. `state list` displays all tracked resource addresses, and `state show` prints the complete set of recorded attributes for a specific resource without modifying the state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state",
    tags: ["CLI State Inspection", "terraform state", "Resilience Failure"]
  }
];

export default HASHICORP_TFA_QUESTIONS_14;
