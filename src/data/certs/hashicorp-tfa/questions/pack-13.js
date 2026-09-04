export const HASHICORP_TFA_QUESTIONS_13 = [
  {
    id: "hashicorp-tfa-301",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Data Sources for Fetching External State: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Data Sources to retrieve the ID of the default VPC or the latest official Ubuntu AMI ID in an AWS account without hardcoding static IDs in Terraform code.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Querying existing cloud infrastructure and unmanaged resources via data blocks is under consideration.",
    options: [
      { id: 'A', text: "Use a `data \"aws_vpc\" \"default\" { default = true }` or `data \"aws_ami\" \"ubuntu\"` block to query live AWS APIs at plan time." },
      { id: 'B', text: "Hardcode static AMI string IDs directly in the resource definition." },
      { id: 'C', text: "Create a duplicate VPC resource using `resource \"aws_vpc\"`." },
      { id: 'D', text: "Run external bash scripts to fetch IDs and paste them into `.tf` files by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `data \"aws_vpc\" \"default\" { default = true }` or `data \"aws_ami\" \"ubuntu\"` block to query live AWS APIs at plan time. Data sources allow Terraform to read information from external resources or infrastructure defined outside of the current Terraform configuration. At plan/apply time, data blocks query cloud provider APIs and expose resource attributes (like VPC IDs, subnets, AMIs) for use by managed resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/data-sources",
    tags: ["Data Sources", "Data Sources", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-302",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Data Sources for Fetching External State: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Data Sources to retrieve the ID of the default VPC or the latest official Ubuntu AMI ID in an AWS account without hardcoding static IDs in Terraform code.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Querying existing cloud infrastructure and unmanaged resources via data blocks is under consideration.",
    options: [
      { id: 'A', text: "Use a `data \"aws_vpc\" \"default\" { default = true }` or `data \"aws_ami\" \"ubuntu\"` block to query live AWS APIs at plan time." },
      { id: 'B', text: "Hardcode static AMI string IDs directly in the resource definition." },
      { id: 'C', text: "Create a duplicate VPC resource using `resource \"aws_vpc\"`." },
      { id: 'D', text: "Run external bash scripts to fetch IDs and paste them into `.tf` files by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `data \"aws_vpc\" \"default\" { default = true }` or `data \"aws_ami\" \"ubuntu\"` block to query live AWS APIs at plan time. Data sources allow Terraform to read information from external resources or infrastructure defined outside of the current Terraform configuration. At plan/apply time, data blocks query cloud provider APIs and expose resource attributes (like VPC IDs, subnets, AMIs) for use by managed resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/data-sources",
    tags: ["Data Sources", "Data Sources", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-303",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Data Sources for Fetching External State: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Data Sources to retrieve the ID of the default VPC or the latest official Ubuntu AMI ID in an AWS account without hardcoding static IDs in Terraform code.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Querying existing cloud infrastructure and unmanaged resources via data blocks is under consideration.",
    options: [
      { id: 'A', text: "Use a `data \"aws_vpc\" \"default\" { default = true }` or `data \"aws_ami\" \"ubuntu\"` block to query live AWS APIs at plan time." },
      { id: 'B', text: "Hardcode static AMI string IDs directly in the resource definition." },
      { id: 'C', text: "Create a duplicate VPC resource using `resource \"aws_vpc\"`." },
      { id: 'D', text: "Run external bash scripts to fetch IDs and paste them into `.tf` files by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `data \"aws_vpc\" \"default\" { default = true }` or `data \"aws_ami\" \"ubuntu\"` block to query live AWS APIs at plan time. Data sources allow Terraform to read information from external resources or infrastructure defined outside of the current Terraform configuration. At plan/apply time, data blocks query cloud provider APIs and expose resource attributes (like VPC IDs, subnets, AMIs) for use by managed resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/data-sources",
    tags: ["Data Sources", "Data Sources", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-304",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Data Sources for Fetching External State: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Data Sources to retrieve the ID of the default VPC or the latest official Ubuntu AMI ID in an AWS account without hardcoding static IDs in Terraform code.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Querying existing cloud infrastructure and unmanaged resources via data blocks is under consideration.",
    options: [
      { id: 'A', text: "Use a `data \"aws_vpc\" \"default\" { default = true }` or `data \"aws_ami\" \"ubuntu\"` block to query live AWS APIs at plan time." },
      { id: 'B', text: "Hardcode static AMI string IDs directly in the resource definition." },
      { id: 'C', text: "Create a duplicate VPC resource using `resource \"aws_vpc\"`." },
      { id: 'D', text: "Run external bash scripts to fetch IDs and paste them into `.tf` files by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `data \"aws_vpc\" \"default\" { default = true }` or `data \"aws_ami\" \"ubuntu\"` block to query live AWS APIs at plan time. Data sources allow Terraform to read information from external resources or infrastructure defined outside of the current Terraform configuration. At plan/apply time, data blocks query cloud provider APIs and expose resource attributes (like VPC IDs, subnets, AMIs) for use by managed resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/data-sources",
    tags: ["Data Sources", "Data Sources", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-305",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Data Sources for Fetching External State: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Data Sources to retrieve the ID of the default VPC or the latest official Ubuntu AMI ID in an AWS account without hardcoding static IDs in Terraform code.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Querying existing cloud infrastructure and unmanaged resources via data blocks is under consideration.",
    options: [
      { id: 'A', text: "Use a `data \"aws_vpc\" \"default\" { default = true }` or `data \"aws_ami\" \"ubuntu\"` block to query live AWS APIs at plan time." },
      { id: 'B', text: "Hardcode static AMI string IDs directly in the resource definition." },
      { id: 'C', text: "Create a duplicate VPC resource using `resource \"aws_vpc\"`." },
      { id: 'D', text: "Run external bash scripts to fetch IDs and paste them into `.tf` files by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `data \"aws_vpc\" \"default\" { default = true }` or `data \"aws_ami\" \"ubuntu\"` block to query live AWS APIs at plan time. Data sources allow Terraform to read information from external resources or infrastructure defined outside of the current Terraform configuration. At plan/apply time, data blocks query cloud provider APIs and expose resource attributes (like VPC IDs, subnets, AMIs) for use by managed resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/data-sources",
    tags: ["Data Sources", "Data Sources", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-306",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Input Variables and Validation Rules: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Input Variables to enforce that an input variable for an environment name accepts only 'dev', 'staging', or 'prod' and rejects any other value before running plan.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Parameterizing configurations with type constraints, defaults, and custom validation blocks is under consideration.",
    options: [
      { id: 'A', text: "Define a `validation` block inside the `variable` definition with a `condition` and meaningful `error_message`." },
      { id: 'B', text: "Write a custom shell script that validates variable values outside of Terraform." },
      { id: 'C', text: "Accept any string value and let the cloud provider API fail during apply." },
      { id: 'D', text: "Hardcode environment names inside resource blocks to prevent variables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `validation` block inside the `variable` definition with a `condition` and meaningful `error_message`. Input variables parameterize Terraform configurations. Adding a `validation` block with a boolean `condition` (e.g., `contains([\"dev\", \"staging\", \"prod\"], var.env)`) validates user inputs at the start of plan execution, failing immediately with a helpful error message if violated.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#custom-validation-rules",
    tags: ["Input Variables", "Variable Validation", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-307",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Input Variables and Validation Rules: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Input Variables to enforce that an input variable for an environment name accepts only 'dev', 'staging', or 'prod' and rejects any other value before running plan.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Parameterizing configurations with type constraints, defaults, and custom validation blocks is under consideration.",
    options: [
      { id: 'A', text: "Define a `validation` block inside the `variable` definition with a `condition` and meaningful `error_message`." },
      { id: 'B', text: "Write a custom shell script that validates variable values outside of Terraform." },
      { id: 'C', text: "Accept any string value and let the cloud provider API fail during apply." },
      { id: 'D', text: "Hardcode environment names inside resource blocks to prevent variables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `validation` block inside the `variable` definition with a `condition` and meaningful `error_message`. Input variables parameterize Terraform configurations. Adding a `validation` block with a boolean `condition` (e.g., `contains([\"dev\", \"staging\", \"prod\"], var.env)`) validates user inputs at the start of plan execution, failing immediately with a helpful error message if violated.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#custom-validation-rules",
    tags: ["Input Variables", "Variable Validation", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-308",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Input Variables and Validation Rules: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Input Variables to enforce that an input variable for an environment name accepts only 'dev', 'staging', or 'prod' and rejects any other value before running plan.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Parameterizing configurations with type constraints, defaults, and custom validation blocks is under consideration.",
    options: [
      { id: 'A', text: "Define a `validation` block inside the `variable` definition with a `condition` and meaningful `error_message`." },
      { id: 'B', text: "Write a custom shell script that validates variable values outside of Terraform." },
      { id: 'C', text: "Accept any string value and let the cloud provider API fail during apply." },
      { id: 'D', text: "Hardcode environment names inside resource blocks to prevent variables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `validation` block inside the `variable` definition with a `condition` and meaningful `error_message`. Input variables parameterize Terraform configurations. Adding a `validation` block with a boolean `condition` (e.g., `contains([\"dev\", \"staging\", \"prod\"], var.env)`) validates user inputs at the start of plan execution, failing immediately with a helpful error message if violated.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#custom-validation-rules",
    tags: ["Input Variables", "Variable Validation", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-309",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Input Variables and Validation Rules: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Input Variables to enforce that an input variable for an environment name accepts only 'dev', 'staging', or 'prod' and rejects any other value before running plan.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Parameterizing configurations with type constraints, defaults, and custom validation blocks is under consideration.",
    options: [
      { id: 'A', text: "Define a `validation` block inside the `variable` definition with a `condition` and meaningful `error_message`." },
      { id: 'B', text: "Write a custom shell script that validates variable values outside of Terraform." },
      { id: 'C', text: "Accept any string value and let the cloud provider API fail during apply." },
      { id: 'D', text: "Hardcode environment names inside resource blocks to prevent variables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `validation` block inside the `variable` definition with a `condition` and meaningful `error_message`. Input variables parameterize Terraform configurations. Adding a `validation` block with a boolean `condition` (e.g., `contains([\"dev\", \"staging\", \"prod\"], var.env)`) validates user inputs at the start of plan execution, failing immediately with a helpful error message if violated.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#custom-validation-rules",
    tags: ["Input Variables", "Variable Validation", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-310",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Input Variables and Validation Rules: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Input Variables to enforce that an input variable for an environment name accepts only 'dev', 'staging', or 'prod' and rejects any other value before running plan.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Parameterizing configurations with type constraints, defaults, and custom validation blocks is under consideration.",
    options: [
      { id: 'A', text: "Define a `validation` block inside the `variable` definition with a `condition` and meaningful `error_message`." },
      { id: 'B', text: "Write a custom shell script that validates variable values outside of Terraform." },
      { id: 'C', text: "Accept any string value and let the cloud provider API fail during apply." },
      { id: 'D', text: "Hardcode environment names inside resource blocks to prevent variables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `validation` block inside the `variable` definition with a `condition` and meaningful `error_message`. Input variables parameterize Terraform configurations. Adding a `validation` block with a boolean `condition` (e.g., `contains([\"dev\", \"staging\", \"prod\"], var.env)`) validates user inputs at the start of plan execution, failing immediately with a helpful error message if violated.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#custom-validation-rules",
    tags: ["Input Variables", "Variable Validation", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-311",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Output Values and Sensitive Flags: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Output Values to expose an RDS database endpoint to child modules while preventing the database master password from printing in plaintext CLI stdout logs.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Exporting resource attributes and masking secrets with sensitive = true is under consideration.",
    options: [
      { id: 'A', text: "Define an `output \"db_password\"` block with `value = aws_db_instance.db.password` and `sensitive = true`." },
      { id: 'B', text: "Never use outputs for sensitive data." },
      { id: 'C', text: "Echo the password to a plaintext file on the local file system." },
      { id: 'D', text: "Disable output values entirely in the Terraform root configuration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an `output \"db_password\"` block with `value = aws_db_instance.db.password` and `sensitive = true`. Output values expose resource attributes to parent modules or CLI users upon apply. Setting `sensitive = true` prevents Terraform from displaying the value in `terraform plan` and `terraform apply` terminal output, although the value is still preserved in the state file.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/outputs#sensitive-suppressing-values-in-cli-output",
    tags: ["Output Values", "Sensitive Outputs", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-312",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Output Values and Sensitive Flags: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Output Values to expose an RDS database endpoint to child modules while preventing the database master password from printing in plaintext CLI stdout logs.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Exporting resource attributes and masking secrets with sensitive = true is under consideration.",
    options: [
      { id: 'A', text: "Define an `output \"db_password\"` block with `value = aws_db_instance.db.password` and `sensitive = true`." },
      { id: 'B', text: "Never use outputs for sensitive data." },
      { id: 'C', text: "Echo the password to a plaintext file on the local file system." },
      { id: 'D', text: "Disable output values entirely in the Terraform root configuration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an `output \"db_password\"` block with `value = aws_db_instance.db.password` and `sensitive = true`. Output values expose resource attributes to parent modules or CLI users upon apply. Setting `sensitive = true` prevents Terraform from displaying the value in `terraform plan` and `terraform apply` terminal output, although the value is still preserved in the state file.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/outputs#sensitive-suppressing-values-in-cli-output",
    tags: ["Output Values", "Sensitive Outputs", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-313",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Output Values and Sensitive Flags: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Output Values to expose an RDS database endpoint to child modules while preventing the database master password from printing in plaintext CLI stdout logs.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Exporting resource attributes and masking secrets with sensitive = true is under consideration.",
    options: [
      { id: 'A', text: "Define an `output \"db_password\"` block with `value = aws_db_instance.db.password` and `sensitive = true`." },
      { id: 'B', text: "Never use outputs for sensitive data." },
      { id: 'C', text: "Echo the password to a plaintext file on the local file system." },
      { id: 'D', text: "Disable output values entirely in the Terraform root configuration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an `output \"db_password\"` block with `value = aws_db_instance.db.password` and `sensitive = true`. Output values expose resource attributes to parent modules or CLI users upon apply. Setting `sensitive = true` prevents Terraform from displaying the value in `terraform plan` and `terraform apply` terminal output, although the value is still preserved in the state file.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/outputs#sensitive-suppressing-values-in-cli-output",
    tags: ["Output Values", "Sensitive Outputs", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-314",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Output Values and Sensitive Flags: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Output Values to expose an RDS database endpoint to child modules while preventing the database master password from printing in plaintext CLI stdout logs.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Exporting resource attributes and masking secrets with sensitive = true is under consideration.",
    options: [
      { id: 'A', text: "Define an `output \"db_password\"` block with `value = aws_db_instance.db.password` and `sensitive = true`." },
      { id: 'B', text: "Never use outputs for sensitive data." },
      { id: 'C', text: "Echo the password to a plaintext file on the local file system." },
      { id: 'D', text: "Disable output values entirely in the Terraform root configuration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an `output \"db_password\"` block with `value = aws_db_instance.db.password` and `sensitive = true`. Output values expose resource attributes to parent modules or CLI users upon apply. Setting `sensitive = true` prevents Terraform from displaying the value in `terraform plan` and `terraform apply` terminal output, although the value is still preserved in the state file.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/outputs#sensitive-suppressing-values-in-cli-output",
    tags: ["Output Values", "Sensitive Outputs", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-315",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Output Values and Sensitive Flags: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Output Values to expose an RDS database endpoint to child modules while preventing the database master password from printing in plaintext CLI stdout logs.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Exporting resource attributes and masking secrets with sensitive = true is under consideration.",
    options: [
      { id: 'A', text: "Define an `output \"db_password\"` block with `value = aws_db_instance.db.password` and `sensitive = true`." },
      { id: 'B', text: "Never use outputs for sensitive data." },
      { id: 'C', text: "Echo the password to a plaintext file on the local file system." },
      { id: 'D', text: "Disable output values entirely in the Terraform root configuration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an `output \"db_password\"` block with `value = aws_db_instance.db.password` and `sensitive = true`. Output values expose resource attributes to parent modules or CLI users upon apply. Setting `sensitive = true` prevents Terraform from displaying the value in `terraform plan` and `terraform apply` terminal output, although the value is still preserved in the state file.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/outputs#sensitive-suppressing-values-in-cli-output",
    tags: ["Output Values", "Sensitive Outputs", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-316",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform init Workflow and Lockfile (.terraform.lock.hcl): Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates CLI Init to initialize a Terraform working directory and ensure all team members and CI runners use the exact same provider versions.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Initializing working directories, downloading providers, and managing .terraform.lock.hcl is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform init` and commit the generated `.terraform.lock.hcl` dependency lockfile to Git source control." },
      { id: 'B', text: "Add `.terraform.lock.hcl` to `.gitignore` so every machine downloads random provider versions." },
      { id: 'C', text: "Run `terraform plan` before initializing the directory." },
      { id: 'D', text: "Manually download provider zip files from the web browser." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform init` and commit the generated `.terraform.lock.hcl` dependency lockfile to Git source control. `terraform init` initializes the working directory, downloads required provider plugins, and configures the backend. It generates or updates the `.terraform.lock.hcl` file, which records cryptographic hashes of downloaded providers to ensure consistent, deterministic provider binaries across environments.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init",
    tags: ["CLI Init", "terraform init", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-317",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform init Workflow and Lockfile (.terraform.lock.hcl): High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates CLI Init to initialize a Terraform working directory and ensure all team members and CI runners use the exact same provider versions.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Initializing working directories, downloading providers, and managing .terraform.lock.hcl is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform init` and commit the generated `.terraform.lock.hcl` dependency lockfile to Git source control." },
      { id: 'B', text: "Add `.terraform.lock.hcl` to `.gitignore` so every machine downloads random provider versions." },
      { id: 'C', text: "Run `terraform plan` before initializing the directory." },
      { id: 'D', text: "Manually download provider zip files from the web browser." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform init` and commit the generated `.terraform.lock.hcl` dependency lockfile to Git source control. `terraform init` initializes the working directory, downloads required provider plugins, and configures the backend. It generates or updates the `.terraform.lock.hcl` file, which records cryptographic hashes of downloaded providers to ensure consistent, deterministic provider binaries across environments.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init",
    tags: ["CLI Init", "terraform init", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-318",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform init Workflow and Lockfile (.terraform.lock.hcl): Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates CLI Init to initialize a Terraform working directory and ensure all team members and CI runners use the exact same provider versions.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Initializing working directories, downloading providers, and managing .terraform.lock.hcl is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform init` and commit the generated `.terraform.lock.hcl` dependency lockfile to Git source control." },
      { id: 'B', text: "Add `.terraform.lock.hcl` to `.gitignore` so every machine downloads random provider versions." },
      { id: 'C', text: "Run `terraform plan` before initializing the directory." },
      { id: 'D', text: "Manually download provider zip files from the web browser." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform init` and commit the generated `.terraform.lock.hcl` dependency lockfile to Git source control. `terraform init` initializes the working directory, downloads required provider plugins, and configures the backend. It generates or updates the `.terraform.lock.hcl` file, which records cryptographic hashes of downloaded providers to ensure consistent, deterministic provider binaries across environments.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init",
    tags: ["CLI Init", "terraform init", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-319",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform init Workflow and Lockfile (.terraform.lock.hcl): Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates CLI Init to initialize a Terraform working directory and ensure all team members and CI runners use the exact same provider versions.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Initializing working directories, downloading providers, and managing .terraform.lock.hcl is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform init` and commit the generated `.terraform.lock.hcl` dependency lockfile to Git source control." },
      { id: 'B', text: "Add `.terraform.lock.hcl` to `.gitignore` so every machine downloads random provider versions." },
      { id: 'C', text: "Run `terraform plan` before initializing the directory." },
      { id: 'D', text: "Manually download provider zip files from the web browser." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform init` and commit the generated `.terraform.lock.hcl` dependency lockfile to Git source control. `terraform init` initializes the working directory, downloads required provider plugins, and configures the backend. It generates or updates the `.terraform.lock.hcl` file, which records cryptographic hashes of downloaded providers to ensure consistent, deterministic provider binaries across environments.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init",
    tags: ["CLI Init", "terraform init", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-320",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform init Workflow and Lockfile (.terraform.lock.hcl): Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates CLI Init to initialize a Terraform working directory and ensure all team members and CI runners use the exact same provider versions.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Initializing working directories, downloading providers, and managing .terraform.lock.hcl is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform init` and commit the generated `.terraform.lock.hcl` dependency lockfile to Git source control." },
      { id: 'B', text: "Add `.terraform.lock.hcl` to `.gitignore` so every machine downloads random provider versions." },
      { id: 'C', text: "Run `terraform plan` before initializing the directory." },
      { id: 'D', text: "Manually download provider zip files from the web browser." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform init` and commit the generated `.terraform.lock.hcl` dependency lockfile to Git source control. `terraform init` initializes the working directory, downloads required provider plugins, and configures the backend. It generates or updates the `.terraform.lock.hcl` file, which records cryptographic hashes of downloaded providers to ensure consistent, deterministic provider binaries across environments.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init",
    tags: ["CLI Init", "terraform init", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-321",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform plan and Plan File Artifacts: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates CLI Plan to generate a speculative execution plan in a CI pipeline and ensure that the exact previewed plan is applied in production without race conditions.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Generating execution plans and saving speculative changes to disk with -out is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform plan -out=tfplan` in the validation stage and pass the `tfplan` binary artifact to `terraform apply tfplan` in the deployment stage." },
      { id: 'B', text: "Run `terraform apply -auto-approve` without generating or reviewing an execution plan." },
      { id: 'C', text: "Take a screenshot of the plan output and apply code manually from a laptop." },
      { id: 'D', text: "Save the plan output as a text file and pipe it into bash." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform plan -out=tfplan` in the validation stage and pass the `tfplan` binary artifact to `terraform apply tfplan` in the deployment stage. `terraform plan` determines what actions are necessary to achieve the desired state. Using `-out=filename` saves the calculated execution plan to disk as a binary artifact. Applying that specific plan file (`terraform apply tfplan`) guarantees that only the exact reviewed changes are executed.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["CLI Plan", "terraform plan", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-322",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform plan and Plan File Artifacts: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates CLI Plan to generate a speculative execution plan in a CI pipeline and ensure that the exact previewed plan is applied in production without race conditions.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Generating execution plans and saving speculative changes to disk with -out is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform plan -out=tfplan` in the validation stage and pass the `tfplan` binary artifact to `terraform apply tfplan` in the deployment stage." },
      { id: 'B', text: "Run `terraform apply -auto-approve` without generating or reviewing an execution plan." },
      { id: 'C', text: "Take a screenshot of the plan output and apply code manually from a laptop." },
      { id: 'D', text: "Save the plan output as a text file and pipe it into bash." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform plan -out=tfplan` in the validation stage and pass the `tfplan` binary artifact to `terraform apply tfplan` in the deployment stage. `terraform plan` determines what actions are necessary to achieve the desired state. Using `-out=filename` saves the calculated execution plan to disk as a binary artifact. Applying that specific plan file (`terraform apply tfplan`) guarantees that only the exact reviewed changes are executed.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["CLI Plan", "terraform plan", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-323",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform plan and Plan File Artifacts: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates CLI Plan to generate a speculative execution plan in a CI pipeline and ensure that the exact previewed plan is applied in production without race conditions.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Generating execution plans and saving speculative changes to disk with -out is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform plan -out=tfplan` in the validation stage and pass the `tfplan` binary artifact to `terraform apply tfplan` in the deployment stage." },
      { id: 'B', text: "Run `terraform apply -auto-approve` without generating or reviewing an execution plan." },
      { id: 'C', text: "Take a screenshot of the plan output and apply code manually from a laptop." },
      { id: 'D', text: "Save the plan output as a text file and pipe it into bash." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform plan -out=tfplan` in the validation stage and pass the `tfplan` binary artifact to `terraform apply tfplan` in the deployment stage. `terraform plan` determines what actions are necessary to achieve the desired state. Using `-out=filename` saves the calculated execution plan to disk as a binary artifact. Applying that specific plan file (`terraform apply tfplan`) guarantees that only the exact reviewed changes are executed.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["CLI Plan", "terraform plan", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-324",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform plan and Plan File Artifacts: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates CLI Plan to generate a speculative execution plan in a CI pipeline and ensure that the exact previewed plan is applied in production without race conditions.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Generating execution plans and saving speculative changes to disk with -out is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform plan -out=tfplan` in the validation stage and pass the `tfplan` binary artifact to `terraform apply tfplan` in the deployment stage." },
      { id: 'B', text: "Run `terraform apply -auto-approve` without generating or reviewing an execution plan." },
      { id: 'C', text: "Take a screenshot of the plan output and apply code manually from a laptop." },
      { id: 'D', text: "Save the plan output as a text file and pipe it into bash." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform plan -out=tfplan` in the validation stage and pass the `tfplan` binary artifact to `terraform apply tfplan` in the deployment stage. `terraform plan` determines what actions are necessary to achieve the desired state. Using `-out=filename` saves the calculated execution plan to disk as a binary artifact. Applying that specific plan file (`terraform apply tfplan`) guarantees that only the exact reviewed changes are executed.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["CLI Plan", "terraform plan", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-325",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform plan and Plan File Artifacts: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates CLI Plan to generate a speculative execution plan in a CI pipeline and ensure that the exact previewed plan is applied in production without race conditions.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Generating execution plans and saving speculative changes to disk with -out is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform plan -out=tfplan` in the validation stage and pass the `tfplan` binary artifact to `terraform apply tfplan` in the deployment stage." },
      { id: 'B', text: "Run `terraform apply -auto-approve` without generating or reviewing an execution plan." },
      { id: 'C', text: "Take a screenshot of the plan output and apply code manually from a laptop." },
      { id: 'D', text: "Save the plan output as a text file and pipe it into bash." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform plan -out=tfplan` in the validation stage and pass the `tfplan` binary artifact to `terraform apply tfplan` in the deployment stage. `terraform plan` determines what actions are necessary to achieve the desired state. Using `-out=filename` saves the calculated execution plan to disk as a binary artifact. Applying that specific plan file (`terraform apply tfplan`) guarantees that only the exact reviewed changes are executed.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["CLI Plan", "terraform plan", "Resilience Failure"]
  }
];

export default HASHICORP_TFA_QUESTIONS_13;
