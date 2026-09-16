export const HASHICORP_TFA_QUESTIONS_13 = [
  {
    id: "hashicorp-tfa-301",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Data Sources for Fetching External State: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to retrieve the ID of the default VPC or the latest official Ubuntu AMI ID in an AWS account without hardcoding static IDs in Terraform code.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "A second `resource \"aws_vpc\"` block describing the existing network in full." },
      { id: 'B', text: "An input variable holding the identifier, supplied per environment." },
      { id: 'C', text: "An `external` data source running a script that returns the ids." },
      { id: 'D', text: "A `data` block querying the VPC or AMI at plan time." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use a `data \"aws_vpc\" \"default\" { default = true }` or `data \"aws_ami\" \"ubuntu\"` block to query live AWS APIs at plan time. Data sources allow Terraform to read information from external resources or infrastructure defined outside of the current Terraform configuration. At plan/apply time, data blocks query cloud provider APIs and expose resource attributes (like VPC IDs, subnets, AMIs) for use by managed resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/data-sources",
    tags: ["Data Sources","Data Sources","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-302",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Data Sources for Fetching External State: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to retrieve the ID of the default VPC or the latest official Ubuntu AMI ID in an AWS account without hardcoding static IDs in Terraform code.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "An `external` data source running a script that returns the ids." },
      { id: 'B', text: "A second `resource \"aws_vpc\"` block describing the existing network in full." },
      { id: 'C', text: "An input variable holding the identifier, supplied per environment." },
      { id: 'D', text: "A `data` block querying the VPC or AMI at plan time." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use a `data \"aws_vpc\" \"default\" { default = true }` or `data \"aws_ami\" \"ubuntu\"` block to query live AWS APIs at plan time. Data sources allow Terraform to read information from external resources or infrastructure defined outside of the current Terraform configuration. At plan/apply time, data blocks query cloud provider APIs and expose resource attributes (like VPC IDs, subnets, AMIs) for use by managed resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/data-sources",
    tags: ["Data Sources","Data Sources","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-303",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Data Sources for Fetching External State: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to retrieve the ID of the default VPC or the latest official Ubuntu AMI ID in an AWS account without hardcoding static IDs in Terraform code.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "A second `resource \"aws_vpc\"` block describing the existing network in full." },
      { id: 'B', text: "An `external` data source running a script that returns the ids." },
      { id: 'C', text: "A `data` block querying the VPC or AMI at plan time." },
      { id: 'D', text: "An input variable holding the identifier, supplied per environment." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use a `data \"aws_vpc\" \"default\" { default = true }` or `data \"aws_ami\" \"ubuntu\"` block to query live AWS APIs at plan time. Data sources allow Terraform to read information from external resources or infrastructure defined outside of the current Terraform configuration. At plan/apply time, data blocks query cloud provider APIs and expose resource attributes (like VPC IDs, subnets, AMIs) for use by managed resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/data-sources",
    tags: ["Data Sources","Data Sources","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-304",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Data Sources for Fetching External State: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to retrieve the ID of the default VPC or the latest official Ubuntu AMI ID in an AWS account without hardcoding static IDs in Terraform code.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "An input variable holding the identifier, supplied per environment." },
      { id: 'B', text: "A `data` block querying the VPC or AMI at plan time." },
      { id: 'C', text: "An `external` data source running a script that returns the ids." },
      { id: 'D', text: "A second `resource \"aws_vpc\"` block describing the existing network in full." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use a `data \"aws_vpc\" \"default\" { default = true }` or `data \"aws_ami\" \"ubuntu\"` block to query live AWS APIs at plan time. Data sources allow Terraform to read information from external resources or infrastructure defined outside of the current Terraform configuration. At plan/apply time, data blocks query cloud provider APIs and expose resource attributes (like VPC IDs, subnets, AMIs) for use by managed resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/data-sources",
    tags: ["Data Sources","Data Sources","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-305",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Data Sources for Fetching External State: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to retrieve the ID of the default VPC or the latest official Ubuntu AMI ID in an AWS account without hardcoding static IDs in Terraform code.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "A `data` block querying the VPC or AMI at plan time." },
      { id: 'B', text: "An input variable holding the identifier, supplied per environment." },
      { id: 'C', text: "A second `resource \"aws_vpc\"` block describing the existing network in full." },
      { id: 'D', text: "An `external` data source running a script that returns the ids." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `data \"aws_vpc\" \"default\" { default = true }` or `data \"aws_ami\" \"ubuntu\"` block to query live AWS APIs at plan time. Data sources allow Terraform to read information from external resources or infrastructure defined outside of the current Terraform configuration. At plan/apply time, data blocks query cloud provider APIs and expose resource attributes (like VPC IDs, subnets, AMIs) for use by managed resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/data-sources",
    tags: ["Data Sources","Data Sources","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-306",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Input Variables and Validation Rules: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to enforce that an input variable for an environment name accepts only 'dev', 'staging', or 'prod' and rejects any other value before running plan.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "A `validation` block in the variable with a condition and error message." },
      { id: 'B', text: "A wrapper script that checks the values before Terraform is run." },
      { id: 'C', text: "No constraint at all, letting the provider reject the value at apply time." },
      { id: 'D', text: "A `locals` map keyed by environment, indexed by the variable." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `validation` block inside the `variable` definition with a `condition` and meaningful `error_message`. Input variables parameterize Terraform configurations. Adding a `validation` block with a boolean `condition` (e.g., `contains([\"dev\", \"staging\", \"prod\"], var.env)`) validates user inputs at the start of plan execution, failing immediately with a helpful error message if violated.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#custom-validation-rules",
    tags: ["Input Variables","Variable Validation","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-307",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Input Variables and Validation Rules: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to enforce that an input variable for an environment name accepts only 'dev', 'staging', or 'prod' and rejects any other value before running plan.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "A wrapper script that checks the values before Terraform is run." },
      { id: 'B', text: "A `validation` block in the variable with a condition and error message." },
      { id: 'C', text: "A `locals` map keyed by environment, indexed by the variable." },
      { id: 'D', text: "No constraint at all, letting the provider reject the value at apply time." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define a `validation` block inside the `variable` definition with a `condition` and meaningful `error_message`. Input variables parameterize Terraform configurations. Adding a `validation` block with a boolean `condition` (e.g., `contains([\"dev\", \"staging\", \"prod\"], var.env)`) validates user inputs at the start of plan execution, failing immediately with a helpful error message if violated.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#custom-validation-rules",
    tags: ["Input Variables","Variable Validation","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-308",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Input Variables and Validation Rules: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to enforce that an input variable for an environment name accepts only 'dev', 'staging', or 'prod' and rejects any other value before running plan.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "A `validation` block in the variable with a condition and error message." },
      { id: 'B', text: "A wrapper script that checks the values before Terraform is run." },
      { id: 'C', text: "No constraint at all, letting the provider reject the value at apply time." },
      { id: 'D', text: "A `locals` map keyed by environment, indexed by the variable." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `validation` block inside the `variable` definition with a `condition` and meaningful `error_message`. Input variables parameterize Terraform configurations. Adding a `validation` block with a boolean `condition` (e.g., `contains([\"dev\", \"staging\", \"prod\"], var.env)`) validates user inputs at the start of plan execution, failing immediately with a helpful error message if violated.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#custom-validation-rules",
    tags: ["Input Variables","Variable Validation","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-309",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Input Variables and Validation Rules: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to enforce that an input variable for an environment name accepts only 'dev', 'staging', or 'prod' and rejects any other value before running plan.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "A `validation` block in the variable with a condition and error message." },
      { id: 'B', text: "A wrapper script that checks the values before Terraform is run." },
      { id: 'C', text: "No constraint at all, letting the provider reject the value at apply time." },
      { id: 'D', text: "A `locals` map keyed by environment, indexed by the variable." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `validation` block inside the `variable` definition with a `condition` and meaningful `error_message`. Input variables parameterize Terraform configurations. Adding a `validation` block with a boolean `condition` (e.g., `contains([\"dev\", \"staging\", \"prod\"], var.env)`) validates user inputs at the start of plan execution, failing immediately with a helpful error message if violated.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#custom-validation-rules",
    tags: ["Input Variables","Variable Validation","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-310",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Input Variables and Validation Rules: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to enforce that an input variable for an environment name accepts only 'dev', 'staging', or 'prod' and rejects any other value before running plan.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "A wrapper script that checks the values before Terraform is run." },
      { id: 'B', text: "A `validation` block in the variable with a condition and error message." },
      { id: 'C', text: "A `locals` map keyed by environment, indexed by the variable." },
      { id: 'D', text: "No constraint at all, letting the provider reject the value at apply time." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define a `validation` block inside the `variable` definition with a `condition` and meaningful `error_message`. Input variables parameterize Terraform configurations. Adding a `validation` block with a boolean `condition` (e.g., `contains([\"dev\", \"staging\", \"prod\"], var.env)`) validates user inputs at the start of plan execution, failing immediately with a helpful error message if violated.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#custom-validation-rules",
    tags: ["Input Variables","Variable Validation","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-311",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Output Values and Sensitive Flags: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to expose an RDS database endpoint to child modules while preventing the database master password from printing in plaintext CLI stdout logs.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "A `local_file` resource writing the password out to disk instead." },
      { id: 'B', text: "An `output` for the password with `ephemeral = true` set." },
      { id: 'C', text: "An `output` with `sensitive = true` on it." },
      { id: 'D', text: "No output at all; the value is read from state directly." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define an `output \"db_password\"` block with `value = aws_db_instance.db.password` and `sensitive = true`. Output values expose resource attributes to parent modules or CLI users upon apply. Setting `sensitive = true` prevents Terraform from displaying the value in `terraform plan` and `terraform apply` terminal output, although the value is still preserved in the state file.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/outputs#sensitive-suppressing-values-in-cli-output",
    tags: ["Output Values","Sensitive Outputs","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-312",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Output Values and Sensitive Flags: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to expose an RDS database endpoint to child modules while preventing the database master password from printing in plaintext CLI stdout logs.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "An `output` with `sensitive = true` on it." },
      { id: 'B', text: "No output at all; the value is read from state directly." },
      { id: 'C', text: "A `local_file` resource writing the password out to disk instead." },
      { id: 'D', text: "An `output` for the password with `ephemeral = true` set." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an `output \"db_password\"` block with `value = aws_db_instance.db.password` and `sensitive = true`. Output values expose resource attributes to parent modules or CLI users upon apply. Setting `sensitive = true` prevents Terraform from displaying the value in `terraform plan` and `terraform apply` terminal output, although the value is still preserved in the state file.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/outputs#sensitive-suppressing-values-in-cli-output",
    tags: ["Output Values","Sensitive Outputs","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-313",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Output Values and Sensitive Flags: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to expose an RDS database endpoint to child modules while preventing the database master password from printing in plaintext CLI stdout logs.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "A `local_file` resource writing the password out to disk instead." },
      { id: 'B', text: "An `output` for the password with `ephemeral = true` set." },
      { id: 'C', text: "An `output` with `sensitive = true` on it." },
      { id: 'D', text: "No output at all; the value is read from state directly." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define an `output \"db_password\"` block with `value = aws_db_instance.db.password` and `sensitive = true`. Output values expose resource attributes to parent modules or CLI users upon apply. Setting `sensitive = true` prevents Terraform from displaying the value in `terraform plan` and `terraform apply` terminal output, although the value is still preserved in the state file.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/outputs#sensitive-suppressing-values-in-cli-output",
    tags: ["Output Values","Sensitive Outputs","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-314",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Output Values and Sensitive Flags: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to expose an RDS database endpoint to child modules while preventing the database master password from printing in plaintext CLI stdout logs.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "An `output` with `sensitive = true` on it." },
      { id: 'B', text: "No output at all; the value is read from state directly." },
      { id: 'C', text: "A `local_file` resource writing the password out to disk instead." },
      { id: 'D', text: "An `output` for the password with `ephemeral = true` set." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an `output \"db_password\"` block with `value = aws_db_instance.db.password` and `sensitive = true`. Output values expose resource attributes to parent modules or CLI users upon apply. Setting `sensitive = true` prevents Terraform from displaying the value in `terraform plan` and `terraform apply` terminal output, although the value is still preserved in the state file.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/outputs#sensitive-suppressing-values-in-cli-output",
    tags: ["Output Values","Sensitive Outputs","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-315",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Output Values and Sensitive Flags: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to expose an RDS database endpoint to child modules while preventing the database master password from printing in plaintext CLI stdout logs.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "A `local_file` resource writing the password out to disk instead." },
      { id: 'B', text: "An `output` for the password with `ephemeral = true` set." },
      { id: 'C', text: "An `output` with `sensitive = true` on it." },
      { id: 'D', text: "No output at all; the value is read from state directly." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define an `output \"db_password\"` block with `value = aws_db_instance.db.password` and `sensitive = true`. Output values expose resource attributes to parent modules or CLI users upon apply. Setting `sensitive = true` prevents Terraform from displaying the value in `terraform plan` and `terraform apply` terminal output, although the value is still preserved in the state file.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/outputs#sensitive-suppressing-values-in-cli-output",
    tags: ["Output Values","Sensitive Outputs","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-316",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform init Workflow and Lockfile (.terraform.lock.hcl): Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to initialize a Terraform working directory and ensure all team members and CI runners use the exact same provider versions.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Run `terraform plan` before initializing the directory." },
      { id: 'B', text: "Manually download provider zip files from the web browser." },
      { id: 'C', text: "Run `terraform init` and commit the lock file." },
      { id: 'D', text: "Add `.terraform.lock.hcl` to `.gitignore` so every machine downloads random provider versions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run `terraform init` and commit the generated `.terraform.lock.hcl` dependency lockfile to Git source control. `terraform init` initializes the working directory, downloads required provider plugins, and configures the backend. It generates or updates the `.terraform.lock.hcl` file, which records cryptographic hashes of downloaded providers to ensure consistent, deterministic provider binaries across environments.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init",
    tags: ["CLI Init","terraform init","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-317",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform init Workflow and Lockfile (.terraform.lock.hcl): High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to initialize a Terraform working directory and ensure all team members and CI runners use the exact same provider versions.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Manually download provider zip files from the web browser." },
      { id: 'B', text: "Run `terraform plan` before initializing the directory." },
      { id: 'C', text: "Add `.terraform.lock.hcl` to `.gitignore` so every machine downloads random provider versions." },
      { id: 'D', text: "Run `terraform init` and commit the lock file." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Run `terraform init` and commit the generated `.terraform.lock.hcl` dependency lockfile to Git source control. `terraform init` initializes the working directory, downloads required provider plugins, and configures the backend. It generates or updates the `.terraform.lock.hcl` file, which records cryptographic hashes of downloaded providers to ensure consistent, deterministic provider binaries across environments.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init",
    tags: ["CLI Init","terraform init","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-318",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform init Workflow and Lockfile (.terraform.lock.hcl): Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to initialize a Terraform working directory and ensure all team members and CI runners use the exact same provider versions.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Run `terraform init` and commit the lock file." },
      { id: 'B', text: "Add `.terraform.lock.hcl` to `.gitignore` so every machine downloads random provider versions." },
      { id: 'C', text: "Run `terraform plan` before initializing the directory." },
      { id: 'D', text: "Manually download provider zip files from the web browser." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform init` and commit the generated `.terraform.lock.hcl` dependency lockfile to Git source control. `terraform init` initializes the working directory, downloads required provider plugins, and configures the backend. It generates or updates the `.terraform.lock.hcl` file, which records cryptographic hashes of downloaded providers to ensure consistent, deterministic provider binaries across environments.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init",
    tags: ["CLI Init","terraform init","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-319",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform init Workflow and Lockfile (.terraform.lock.hcl): Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to initialize a Terraform working directory and ensure all team members and CI runners use the exact same provider versions.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Run `terraform init` and commit the lock file." },
      { id: 'B', text: "Add `.terraform.lock.hcl` to `.gitignore` so every machine downloads random provider versions." },
      { id: 'C', text: "Run `terraform plan` before initializing the directory." },
      { id: 'D', text: "Manually download provider zip files from the web browser." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform init` and commit the generated `.terraform.lock.hcl` dependency lockfile to Git source control. `terraform init` initializes the working directory, downloads required provider plugins, and configures the backend. It generates or updates the `.terraform.lock.hcl` file, which records cryptographic hashes of downloaded providers to ensure consistent, deterministic provider binaries across environments.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init",
    tags: ["CLI Init","terraform init","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-320",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform init Workflow and Lockfile (.terraform.lock.hcl): Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to initialize a Terraform working directory and ensure all team members and CI runners use the exact same provider versions.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Run `terraform init` and commit the lock file." },
      { id: 'B', text: "Add `.terraform.lock.hcl` to `.gitignore` so every machine downloads random provider versions." },
      { id: 'C', text: "Run `terraform plan` before initializing the directory." },
      { id: 'D', text: "Manually download provider zip files from the web browser." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform init` and commit the generated `.terraform.lock.hcl` dependency lockfile to Git source control. `terraform init` initializes the working directory, downloads required provider plugins, and configures the backend. It generates or updates the `.terraform.lock.hcl` file, which records cryptographic hashes of downloaded providers to ensure consistent, deterministic provider binaries across environments.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init",
    tags: ["CLI Init","terraform init","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-321",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform plan and Plan File Artifacts: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to generate a speculative execution plan in a CI pipeline and ensure that the exact previewed plan is applied in production without race conditions.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Run `terraform plan` in validation and `terraform apply` again in deployment." },
      { id: 'B', text: "Run `terraform plan -out=tfplan` and apply that file in deployment." },
      { id: 'C', text: "Run `terraform plan` in validation and post the output for a reviewer to approve." },
      { id: 'D', text: "Run `terraform apply -auto-approve` in deployment and review the log afterwards." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run `terraform plan -out=tfplan` in the validation stage and pass the `tfplan` binary artifact to `terraform apply tfplan` in the deployment stage. `terraform plan` determines what actions are necessary to achieve the desired state. Using `-out=filename` saves the calculated execution plan to disk as a binary artifact. Applying that specific plan file (`terraform apply tfplan`) guarantees that only the exact reviewed changes are executed.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["CLI Plan","terraform plan","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-322",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform plan and Plan File Artifacts: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to generate a speculative execution plan in a CI pipeline and ensure that the exact previewed plan is applied in production without race conditions.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Run `terraform plan -out=tfplan` and apply that file in deployment." },
      { id: 'B', text: "Run `terraform apply -auto-approve` in deployment and review the log afterwards." },
      { id: 'C', text: "Run `terraform plan` in validation and post the output for a reviewer to approve." },
      { id: 'D', text: "Run `terraform plan` in validation and `terraform apply` again in deployment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform plan -out=tfplan` in the validation stage and pass the `tfplan` binary artifact to `terraform apply tfplan` in the deployment stage. `terraform plan` determines what actions are necessary to achieve the desired state. Using `-out=filename` saves the calculated execution plan to disk as a binary artifact. Applying that specific plan file (`terraform apply tfplan`) guarantees that only the exact reviewed changes are executed.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["CLI Plan","terraform plan","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-323",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform plan and Plan File Artifacts: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to generate a speculative execution plan in a CI pipeline and ensure that the exact previewed plan is applied in production without race conditions.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Run `terraform plan -out=tfplan` and apply that file in deployment." },
      { id: 'B', text: "Run `terraform apply -auto-approve` in deployment and review the log afterwards." },
      { id: 'C', text: "Run `terraform plan` in validation and post the output for a reviewer to approve." },
      { id: 'D', text: "Run `terraform plan` in validation and `terraform apply` again in deployment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform plan -out=tfplan` in the validation stage and pass the `tfplan` binary artifact to `terraform apply tfplan` in the deployment stage. `terraform plan` determines what actions are necessary to achieve the desired state. Using `-out=filename` saves the calculated execution plan to disk as a binary artifact. Applying that specific plan file (`terraform apply tfplan`) guarantees that only the exact reviewed changes are executed.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["CLI Plan","terraform plan","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-324",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform plan and Plan File Artifacts: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to generate a speculative execution plan in a CI pipeline and ensure that the exact previewed plan is applied in production without race conditions.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Run `terraform plan -out=tfplan` and apply that file in deployment." },
      { id: 'B', text: "Run `terraform plan` in validation and `terraform apply` again in deployment." },
      { id: 'C', text: "Run `terraform apply -auto-approve` in deployment and review the log afterwards." },
      { id: 'D', text: "Run `terraform plan` in validation and post the output for a reviewer to approve." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform plan -out=tfplan` in the validation stage and pass the `tfplan` binary artifact to `terraform apply tfplan` in the deployment stage. `terraform plan` determines what actions are necessary to achieve the desired state. Using `-out=filename` saves the calculated execution plan to disk as a binary artifact. Applying that specific plan file (`terraform apply tfplan`) guarantees that only the exact reviewed changes are executed.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["CLI Plan","terraform plan","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-325",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform plan and Plan File Artifacts: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to generate a speculative execution plan in a CI pipeline and ensure that the exact previewed plan is applied in production without race conditions.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Run `terraform plan -out=tfplan` and apply that file in deployment." },
      { id: 'B', text: "Run `terraform apply -auto-approve` in deployment and review the log afterwards." },
      { id: 'C', text: "Run `terraform plan` in validation and post the output for a reviewer to approve." },
      { id: 'D', text: "Run `terraform plan` in validation and `terraform apply` again in deployment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform plan -out=tfplan` in the validation stage and pass the `tfplan` binary artifact to `terraform apply tfplan` in the deployment stage. `terraform plan` determines what actions are necessary to achieve the desired state. Using `-out=filename` saves the calculated execution plan to disk as a binary artifact. Applying that specific plan file (`terraform apply tfplan`) guarantees that only the exact reviewed changes are executed.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["CLI Plan","terraform plan","Resilience Failure"]
  }
];

export default HASHICORP_TFA_QUESTIONS_13;
