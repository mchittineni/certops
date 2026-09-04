export const HASHICORP_TFA_QUESTIONS_15 = [
  {
    id: "hashicorp-tfa-351",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform import for Bringing Existing Infrastructure Under Management: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates CLI Import to bring an existing AWS S3 bucket created manually in the AWS Console under Terraform management without deleting or recreating the bucket.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Adopting unmanaged cloud resources using terraform import or import blocks is under consideration.",
    options: [
      { id: 'A', text: "Delete the bucket in the console and recreate it via `terraform apply`." },
      { id: 'B', text: "Terraform cannot manage resources that were created outside of Terraform." },
      { id: 'C', text: "Write the `resource \"aws_s3_bucket\" \"app\" {}` configuration and execute `terraform import aws_s3_bucket.app &lt;bucket-name&gt;` (or use an `import {}` block)." },
      { id: 'D', text: "Manually edit the JSON state file to fabricate resource metadata." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Write the `resource \"aws_s3_bucket\" \"app\" {}` configuration and execute `terraform import aws_s3_bucket.app &lt;bucket-name&gt;` (or use an `import {}` block). `terraform import` associates existing real-world cloud infrastructure with a Terraform configuration block. It populates the state file with the resource's current live attributes, allowing Terraform to manage the resource going forward without recreating it.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/import",
    tags: ["CLI Import", "terraform import", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-352",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform import for Bringing Existing Infrastructure Under Management: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates CLI Import to bring an existing AWS S3 bucket created manually in the AWS Console under Terraform management without deleting or recreating the bucket.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Adopting unmanaged cloud resources using terraform import or import blocks is under consideration.",
    options: [
      { id: 'A', text: "Manually edit the JSON state file to fabricate resource metadata." },
      { id: 'B', text: "Terraform cannot manage resources that were created outside of Terraform." },
      { id: 'C', text: "Delete the bucket in the console and recreate it via `terraform apply`." },
      { id: 'D', text: "Write the `resource \"aws_s3_bucket\" \"app\" {}` configuration and execute `terraform import aws_s3_bucket.app &lt;bucket-name&gt;` (or use an `import {}` block)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Write the `resource \"aws_s3_bucket\" \"app\" {}` configuration and execute `terraform import aws_s3_bucket.app &lt;bucket-name&gt;` (or use an `import {}` block). `terraform import` associates existing real-world cloud infrastructure with a Terraform configuration block. It populates the state file with the resource's current live attributes, allowing Terraform to manage the resource going forward without recreating it.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/import",
    tags: ["CLI Import", "terraform import", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-353",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform import for Bringing Existing Infrastructure Under Management: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates CLI Import to bring an existing AWS S3 bucket created manually in the AWS Console under Terraform management without deleting or recreating the bucket.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Adopting unmanaged cloud resources using terraform import or import blocks is under consideration.",
    options: [
      { id: 'A', text: "Delete the bucket in the console and recreate it via `terraform apply`." },
      { id: 'B', text: "Manually edit the JSON state file to fabricate resource metadata." },
      { id: 'C', text: "Terraform cannot manage resources that were created outside of Terraform." },
      { id: 'D', text: "Write the `resource \"aws_s3_bucket\" \"app\" {}` configuration and execute `terraform import aws_s3_bucket.app &lt;bucket-name&gt;` (or use an `import {}` block)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Write the `resource \"aws_s3_bucket\" \"app\" {}` configuration and execute `terraform import aws_s3_bucket.app &lt;bucket-name&gt;` (or use an `import {}` block). `terraform import` associates existing real-world cloud infrastructure with a Terraform configuration block. It populates the state file with the resource's current live attributes, allowing Terraform to manage the resource going forward without recreating it.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/import",
    tags: ["CLI Import", "terraform import", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-354",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform import for Bringing Existing Infrastructure Under Management: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates CLI Import to bring an existing AWS S3 bucket created manually in the AWS Console under Terraform management without deleting or recreating the bucket.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Adopting unmanaged cloud resources using terraform import or import blocks is under consideration.",
    options: [
      { id: 'A', text: "Write the `resource \"aws_s3_bucket\" \"app\" {}` configuration and execute `terraform import aws_s3_bucket.app &lt;bucket-name&gt;` (or use an `import {}` block)." },
      { id: 'B', text: "Terraform cannot manage resources that were created outside of Terraform." },
      { id: 'C', text: "Manually edit the JSON state file to fabricate resource metadata." },
      { id: 'D', text: "Delete the bucket in the console and recreate it via `terraform apply`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Write the `resource \"aws_s3_bucket\" \"app\" {}` configuration and execute `terraform import aws_s3_bucket.app &lt;bucket-name&gt;` (or use an `import {}` block). `terraform import` associates existing real-world cloud infrastructure with a Terraform configuration block. It populates the state file with the resource's current live attributes, allowing Terraform to manage the resource going forward without recreating it.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/import",
    tags: ["CLI Import", "terraform import", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-355",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform import for Bringing Existing Infrastructure Under Management: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates CLI Import to bring an existing AWS S3 bucket created manually in the AWS Console under Terraform management without deleting or recreating the bucket.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Adopting unmanaged cloud resources using terraform import or import blocks is under consideration.",
    options: [
      { id: 'A', text: "Write the `resource \"aws_s3_bucket\" \"app\" {}` configuration and execute `terraform import aws_s3_bucket.app &lt;bucket-name&gt;` (or use an `import {}` block)." },
      { id: 'B', text: "Manually edit the JSON state file to fabricate resource metadata." },
      { id: 'C', text: "Terraform cannot manage resources that were created outside of Terraform." },
      { id: 'D', text: "Delete the bucket in the console and recreate it via `terraform apply`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Write the `resource \"aws_s3_bucket\" \"app\" {}` configuration and execute `terraform import aws_s3_bucket.app &lt;bucket-name&gt;` (or use an `import {}` block). `terraform import` associates existing real-world cloud infrastructure with a Terraform configuration block. It populates the state file with the resource's current live attributes, allowing Terraform to manage the resource going forward without recreating it.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/import",
    tags: ["CLI Import", "terraform import", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-356",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform refresh and -refresh-only Plans: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates CLI Refresh to update the Terraform state file to reflect an out-of-band tag update on an EC2 instance without applying any other configuration changes.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Reconciling state with live infrastructure using terraform apply -refresh-only is under consideration.",
    options: [
      { id: 'A', text: "Manually edit the JSON state file to type in the new tag." },
      { id: 'B', text: "Delete the EC2 instance and re-provision it." },
      { id: 'C', text: "Run `terraform apply` with breaking code modifications." },
      { id: 'D', text: "Execute `terraform plan -refresh-only` to review detected state differences, followed by `terraform apply -refresh-only`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute `terraform plan -refresh-only` to review detected state differences, followed by `terraform apply -refresh-only`. `terraform plan -refresh-only` queries cloud provider APIs for the live state of all managed resources and compares it strictly against the current state file. Running `terraform apply -refresh-only` saves these live updates directly to the state without making any changes to cloud infrastructure.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#refresh-only-mode",
    tags: ["CLI Refresh", "Refresh-Only", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-357",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform refresh and -refresh-only Plans: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates CLI Refresh to update the Terraform state file to reflect an out-of-band tag update on an EC2 instance without applying any other configuration changes.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Reconciling state with live infrastructure using terraform apply -refresh-only is under consideration.",
    options: [
      { id: 'A', text: "Manually edit the JSON state file to type in the new tag." },
      { id: 'B', text: "Delete the EC2 instance and re-provision it." },
      { id: 'C', text: "Execute `terraform plan -refresh-only` to review detected state differences, followed by `terraform apply -refresh-only`." },
      { id: 'D', text: "Run `terraform apply` with breaking code modifications." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `terraform plan -refresh-only` to review detected state differences, followed by `terraform apply -refresh-only`. `terraform plan -refresh-only` queries cloud provider APIs for the live state of all managed resources and compares it strictly against the current state file. Running `terraform apply -refresh-only` saves these live updates directly to the state without making any changes to cloud infrastructure.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#refresh-only-mode",
    tags: ["CLI Refresh", "Refresh-Only", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-358",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform refresh and -refresh-only Plans: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates CLI Refresh to update the Terraform state file to reflect an out-of-band tag update on an EC2 instance without applying any other configuration changes.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Reconciling state with live infrastructure using terraform apply -refresh-only is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform apply` with breaking code modifications." },
      { id: 'B', text: "Execute `terraform plan -refresh-only` to review detected state differences, followed by `terraform apply -refresh-only`." },
      { id: 'C', text: "Manually edit the JSON state file to type in the new tag." },
      { id: 'D', text: "Delete the EC2 instance and re-provision it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute `terraform plan -refresh-only` to review detected state differences, followed by `terraform apply -refresh-only`. `terraform plan -refresh-only` queries cloud provider APIs for the live state of all managed resources and compares it strictly against the current state file. Running `terraform apply -refresh-only` saves these live updates directly to the state without making any changes to cloud infrastructure.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#refresh-only-mode",
    tags: ["CLI Refresh", "Refresh-Only", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-359",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform refresh and -refresh-only Plans: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates CLI Refresh to update the Terraform state file to reflect an out-of-band tag update on an EC2 instance without applying any other configuration changes.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Reconciling state with live infrastructure using terraform apply -refresh-only is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform apply` with breaking code modifications." },
      { id: 'B', text: "Manually edit the JSON state file to type in the new tag." },
      { id: 'C', text: "Delete the EC2 instance and re-provision it." },
      { id: 'D', text: "Execute `terraform plan -refresh-only` to review detected state differences, followed by `terraform apply -refresh-only`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute `terraform plan -refresh-only` to review detected state differences, followed by `terraform apply -refresh-only`. `terraform plan -refresh-only` queries cloud provider APIs for the live state of all managed resources and compares it strictly against the current state file. Running `terraform apply -refresh-only` saves these live updates directly to the state without making any changes to cloud infrastructure.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#refresh-only-mode",
    tags: ["CLI Refresh", "Refresh-Only", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-360",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform refresh and -refresh-only Plans: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates CLI Refresh to update the Terraform state file to reflect an out-of-band tag update on an EC2 instance without applying any other configuration changes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Reconciling state with live infrastructure using terraform apply -refresh-only is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform apply` with breaking code modifications." },
      { id: 'B', text: "Execute `terraform plan -refresh-only` to review detected state differences, followed by `terraform apply -refresh-only`." },
      { id: 'C', text: "Delete the EC2 instance and re-provision it." },
      { id: 'D', text: "Manually edit the JSON state file to type in the new tag." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute `terraform plan -refresh-only` to review detected state differences, followed by `terraform apply -refresh-only`. `terraform plan -refresh-only` queries cloud provider APIs for the live state of all managed resources and compares it strictly against the current state file. Running `terraform apply -refresh-only` saves these live updates directly to the state without making any changes to cloud infrastructure.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#refresh-only-mode",
    tags: ["CLI Refresh", "Refresh-Only", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-361",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Terraform CLI Logging and Debugging (TF_LOG): Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates CLI Logging to troubleshoot an obscure HTTP 403 Forbidden API error returned by a cloud provider plugin during `terraform apply`.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Enabling verbose debug and trace logging using the TF_LOG environment variable is under consideration.",
    options: [
      { id: 'A', text: "Disable all logging to prevent seeing error messages." },
      { id: 'B', text: "Reboot the operating system and re-run the command." },
      { id: 'C', text: "Decompile the Terraform Go binary using a disassembler." },
      { id: 'D', text: "Set `export TF_LOG=DEBUG` (or `TRACE`) and optionally `TF_LOG_PATH=terraform.log` before executing the command." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set `export TF_LOG=DEBUG` (or `TRACE`) and optionally `TF_LOG_PATH=terraform.log` before executing the command. The `TF_LOG` environment variable configures logging verbosity in Terraform CLI. Setting `TF_LOG=DEBUG` or `TRACE` outputs detailed logs, including raw HTTP request and response payloads exchanged between provider plugins and cloud vendor APIs, exposing exact permission and validation errors.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["CLI Logging", "TF_LOG Debugging", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-362",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Terraform CLI Logging and Debugging (TF_LOG): High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates CLI Logging to troubleshoot an obscure HTTP 403 Forbidden API error returned by a cloud provider plugin during `terraform apply`.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Enabling verbose debug and trace logging using the TF_LOG environment variable is under consideration.",
    options: [
      { id: 'A', text: "Set `export TF_LOG=DEBUG` (or `TRACE`) and optionally `TF_LOG_PATH=terraform.log` before executing the command." },
      { id: 'B', text: "Decompile the Terraform Go binary using a disassembler." },
      { id: 'C', text: "Reboot the operating system and re-run the command." },
      { id: 'D', text: "Disable all logging to prevent seeing error messages." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `export TF_LOG=DEBUG` (or `TRACE`) and optionally `TF_LOG_PATH=terraform.log` before executing the command. The `TF_LOG` environment variable configures logging verbosity in Terraform CLI. Setting `TF_LOG=DEBUG` or `TRACE` outputs detailed logs, including raw HTTP request and response payloads exchanged between provider plugins and cloud vendor APIs, exposing exact permission and validation errors.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["CLI Logging", "TF_LOG Debugging", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-363",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Terraform CLI Logging and Debugging (TF_LOG): Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates CLI Logging to troubleshoot an obscure HTTP 403 Forbidden API error returned by a cloud provider plugin during `terraform apply`.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Enabling verbose debug and trace logging using the TF_LOG environment variable is under consideration.",
    options: [
      { id: 'A', text: "Decompile the Terraform Go binary using a disassembler." },
      { id: 'B', text: "Set `export TF_LOG=DEBUG` (or `TRACE`) and optionally `TF_LOG_PATH=terraform.log` before executing the command." },
      { id: 'C', text: "Disable all logging to prevent seeing error messages." },
      { id: 'D', text: "Reboot the operating system and re-run the command." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `export TF_LOG=DEBUG` (or `TRACE`) and optionally `TF_LOG_PATH=terraform.log` before executing the command. The `TF_LOG` environment variable configures logging verbosity in Terraform CLI. Setting `TF_LOG=DEBUG` or `TRACE` outputs detailed logs, including raw HTTP request and response payloads exchanged between provider plugins and cloud vendor APIs, exposing exact permission and validation errors.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["CLI Logging", "TF_LOG Debugging", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-364",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Terraform CLI Logging and Debugging (TF_LOG): Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates CLI Logging to troubleshoot an obscure HTTP 403 Forbidden API error returned by a cloud provider plugin during `terraform apply`.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Enabling verbose debug and trace logging using the TF_LOG environment variable is under consideration.",
    options: [
      { id: 'A', text: "Reboot the operating system and re-run the command." },
      { id: 'B', text: "Set `export TF_LOG=DEBUG` (or `TRACE`) and optionally `TF_LOG_PATH=terraform.log` before executing the command." },
      { id: 'C', text: "Disable all logging to prevent seeing error messages." },
      { id: 'D', text: "Decompile the Terraform Go binary using a disassembler." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `export TF_LOG=DEBUG` (or `TRACE`) and optionally `TF_LOG_PATH=terraform.log` before executing the command. The `TF_LOG` environment variable configures logging verbosity in Terraform CLI. Setting `TF_LOG=DEBUG` or `TRACE` outputs detailed logs, including raw HTTP request and response payloads exchanged between provider plugins and cloud vendor APIs, exposing exact permission and validation errors.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["CLI Logging", "TF_LOG Debugging", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-365",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Terraform CLI Logging and Debugging (TF_LOG): Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates CLI Logging to troubleshoot an obscure HTTP 403 Forbidden API error returned by a cloud provider plugin during `terraform apply`.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Enabling verbose debug and trace logging using the TF_LOG environment variable is under consideration.",
    options: [
      { id: 'A', text: "Disable all logging to prevent seeing error messages." },
      { id: 'B', text: "Decompile the Terraform Go binary using a disassembler." },
      { id: 'C', text: "Set `export TF_LOG=DEBUG` (or `TRACE`) and optionally `TF_LOG_PATH=terraform.log` before executing the command." },
      { id: 'D', text: "Reboot the operating system and re-run the command." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set `export TF_LOG=DEBUG` (or `TRACE`) and optionally `TF_LOG_PATH=terraform.log` before executing the command. The `TF_LOG` environment variable configures logging verbosity in Terraform CLI. Setting `TF_LOG=DEBUG` or `TRACE` outputs detailed logs, including raw HTTP request and response payloads exchanged between provider plugins and cloud vendor APIs, exposing exact permission and validation errors.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["CLI Logging", "TF_LOG Debugging", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-366",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Module Structure and Standard Layout: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Module Structure to organize a reusable Terraform module according to official HashiCorp standard directory conventions.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Standard module layout: main.tf, variables.tf, outputs.tf, and README.md is under consideration.",
    options: [
      { id: 'A', text: "Put all code, variables, and outputs into a single 5,000-line `terraform.tf` file." },
      { id: 'B', text: "Split configuration into dozens of subdirectories with arbitrary file extensions." },
      { id: 'C', text: "Structure the module with `main.tf` (primary resources), `variables.tf` (inputs), `outputs.tf` (return values), and `README.md`." },
      { id: 'D', text: "Place all module files inside a hidden `.git` folder." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Structure the module with `main.tf` (primary resources), `variables.tf` (inputs), `outputs.tf` (return values), and `README.md`. HashiCorp defines a canonical layout for standard reusable modules: `main.tf` contains primary resources, `variables.tf` declares typed input variables, `outputs.tf` exports useful attributes, and `README.md` documents usage, prerequisites, and examples.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure",
    tags: ["Module Structure", "Standard Module Layout", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-367",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Module Structure and Standard Layout: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Module Structure to organize a reusable Terraform module according to official HashiCorp standard directory conventions.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Standard module layout: main.tf, variables.tf, outputs.tf, and README.md is under consideration.",
    options: [
      { id: 'A', text: "Place all module files inside a hidden `.git` folder." },
      { id: 'B', text: "Split configuration into dozens of subdirectories with arbitrary file extensions." },
      { id: 'C', text: "Put all code, variables, and outputs into a single 5,000-line `terraform.tf` file." },
      { id: 'D', text: "Structure the module with `main.tf` (primary resources), `variables.tf` (inputs), `outputs.tf` (return values), and `README.md`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Structure the module with `main.tf` (primary resources), `variables.tf` (inputs), `outputs.tf` (return values), and `README.md`. HashiCorp defines a canonical layout for standard reusable modules: `main.tf` contains primary resources, `variables.tf` declares typed input variables, `outputs.tf` exports useful attributes, and `README.md` documents usage, prerequisites, and examples.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure",
    tags: ["Module Structure", "Standard Module Layout", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-368",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Module Structure and Standard Layout: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Module Structure to organize a reusable Terraform module according to official HashiCorp standard directory conventions.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Standard module layout: main.tf, variables.tf, outputs.tf, and README.md is under consideration.",
    options: [
      { id: 'A', text: "Put all code, variables, and outputs into a single 5,000-line `terraform.tf` file." },
      { id: 'B', text: "Split configuration into dozens of subdirectories with arbitrary file extensions." },
      { id: 'C', text: "Place all module files inside a hidden `.git` folder." },
      { id: 'D', text: "Structure the module with `main.tf` (primary resources), `variables.tf` (inputs), `outputs.tf` (return values), and `README.md`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Structure the module with `main.tf` (primary resources), `variables.tf` (inputs), `outputs.tf` (return values), and `README.md`. HashiCorp defines a canonical layout for standard reusable modules: `main.tf` contains primary resources, `variables.tf` declares typed input variables, `outputs.tf` exports useful attributes, and `README.md` documents usage, prerequisites, and examples.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure",
    tags: ["Module Structure", "Standard Module Layout", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-369",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Module Structure and Standard Layout: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Module Structure to organize a reusable Terraform module according to official HashiCorp standard directory conventions.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Standard module layout: main.tf, variables.tf, outputs.tf, and README.md is under consideration.",
    options: [
      { id: 'A', text: "Put all code, variables, and outputs into a single 5,000-line `terraform.tf` file." },
      { id: 'B', text: "Place all module files inside a hidden `.git` folder." },
      { id: 'C', text: "Structure the module with `main.tf` (primary resources), `variables.tf` (inputs), `outputs.tf` (return values), and `README.md`." },
      { id: 'D', text: "Split configuration into dozens of subdirectories with arbitrary file extensions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Structure the module with `main.tf` (primary resources), `variables.tf` (inputs), `outputs.tf` (return values), and `README.md`. HashiCorp defines a canonical layout for standard reusable modules: `main.tf` contains primary resources, `variables.tf` declares typed input variables, `outputs.tf` exports useful attributes, and `README.md` documents usage, prerequisites, and examples.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure",
    tags: ["Module Structure", "Standard Module Layout", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-370",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Module Structure and Standard Layout: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Module Structure to organize a reusable Terraform module according to official HashiCorp standard directory conventions.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Standard module layout: main.tf, variables.tf, outputs.tf, and README.md is under consideration.",
    options: [
      { id: 'A', text: "Put all code, variables, and outputs into a single 5,000-line `terraform.tf` file." },
      { id: 'B', text: "Place all module files inside a hidden `.git` folder." },
      { id: 'C', text: "Split configuration into dozens of subdirectories with arbitrary file extensions." },
      { id: 'D', text: "Structure the module with `main.tf` (primary resources), `variables.tf` (inputs), `outputs.tf` (return values), and `README.md`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Structure the module with `main.tf` (primary resources), `variables.tf` (inputs), `outputs.tf` (return values), and `README.md`. HashiCorp defines a canonical layout for standard reusable modules: `main.tf` contains primary resources, `variables.tf` declares typed input variables, `outputs.tf` exports useful attributes, and `README.md` documents usage, prerequisites, and examples.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure",
    tags: ["Module Structure", "Standard Module Layout", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-371",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Calling Modules and Module Sources: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer evaluates Module Sources to call a verified open-source VPC module from the public Terraform Registry with strict version pinning.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives? Sourcing modules from local paths, Terraform Registry, Git repositories, and S3 is under consideration.",
    options: [
      { id: 'A', text: "Download the module manually and unzip it into the user's Downloads folder." },
      { id: 'B', text: "Copy the raw source code of the module directly into the root folder." },
      { id: 'C', text: "Declare a `module` block specifying `source = \"terraform-aws-modules/vpc/aws\"` and `version = \"~&gt; 5.0\"`." },
      { id: 'D', text: "Specify `source = \"http://unencrypted-website.com/vpc.zip\"`." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Declare a `module` block specifying `source = \"terraform-aws-modules/vpc/aws\"` and `version = \"~&gt; 5.0\"`. The `module` block instantiates a child module. The `source` argument specifies the module location (e.g., Terraform Registry, GitHub repo, S3 bucket, local path). When referencing registry modules, specifying `version` constraints ensures stability against upstream modifications.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax",
    tags: ["Module Sources", "Module Sourcing", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-372",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Calling Modules and Module Sources: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer evaluates Module Sources to call a verified open-source VPC module from the public Terraform Registry with strict version pinning.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks? Sourcing modules from local paths, Terraform Registry, Git repositories, and S3 is under consideration.",
    options: [
      { id: 'A', text: "Download the module manually and unzip it into the user's Downloads folder." },
      { id: 'B', text: "Specify `source = \"http://unencrypted-website.com/vpc.zip\"`." },
      { id: 'C', text: "Declare a `module` block specifying `source = \"terraform-aws-modules/vpc/aws\"` and `version = \"~&gt; 5.0\"`." },
      { id: 'D', text: "Copy the raw source code of the module directly into the root folder." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Declare a `module` block specifying `source = \"terraform-aws-modules/vpc/aws\"` and `version = \"~&gt; 5.0\"`. The `module` block instantiates a child module. The `source` argument specifies the module location (e.g., Terraform Registry, GitHub repo, S3 bucket, local path). When referencing registry modules, specifying `version` constraints ensures stability against upstream modifications.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax",
    tags: ["Module Sources", "Module Sourcing", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-373",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Calling Modules and Module Sources: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer evaluates Module Sources to call a verified open-source VPC module from the public Terraform Registry with strict version pinning.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Sourcing modules from local paths, Terraform Registry, Git repositories, and S3 is under consideration.",
    options: [
      { id: 'A', text: "Declare a `module` block specifying `source = \"terraform-aws-modules/vpc/aws\"` and `version = \"~&gt; 5.0\"`." },
      { id: 'B', text: "Copy the raw source code of the module directly into the root folder." },
      { id: 'C', text: "Specify `source = \"http://unencrypted-website.com/vpc.zip\"`." },
      { id: 'D', text: "Download the module manually and unzip it into the user's Downloads folder." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declare a `module` block specifying `source = \"terraform-aws-modules/vpc/aws\"` and `version = \"~&gt; 5.0\"`. The `module` block instantiates a child module. The `source` argument specifies the module location (e.g., Terraform Registry, GitHub repo, S3 bucket, local path). When referencing registry modules, specifying `version` constraints ensures stability against upstream modifications.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax",
    tags: ["Module Sources", "Module Sourcing", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-374",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Calling Modules and Module Sources: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer evaluates Module Sources to call a verified open-source VPC module from the public Terraform Registry with strict version pinning.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Sourcing modules from local paths, Terraform Registry, Git repositories, and S3 is under consideration.",
    options: [
      { id: 'A', text: "Download the module manually and unzip it into the user's Downloads folder." },
      { id: 'B', text: "Declare a `module` block specifying `source = \"terraform-aws-modules/vpc/aws\"` and `version = \"~&gt; 5.0\"`." },
      { id: 'C', text: "Copy the raw source code of the module directly into the root folder." },
      { id: 'D', text: "Specify `source = \"http://unencrypted-website.com/vpc.zip\"`." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Declare a `module` block specifying `source = \"terraform-aws-modules/vpc/aws\"` and `version = \"~&gt; 5.0\"`. The `module` block instantiates a child module. The `source` argument specifies the module location (e.g., Terraform Registry, GitHub repo, S3 bucket, local path). When referencing registry modules, specifying `version` constraints ensures stability against upstream modifications.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax",
    tags: ["Module Sources", "Module Sourcing", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-375",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Calling Modules and Module Sources: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer evaluates Module Sources to call a verified open-source VPC module from the public Terraform Registry with strict version pinning.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Sourcing modules from local paths, Terraform Registry, Git repositories, and S3 is under consideration.",
    options: [
      { id: 'A', text: "Specify `source = \"http://unencrypted-website.com/vpc.zip\"`." },
      { id: 'B', text: "Download the module manually and unzip it into the user's Downloads folder." },
      { id: 'C', text: "Copy the raw source code of the module directly into the root folder." },
      { id: 'D', text: "Declare a `module` block specifying `source = \"terraform-aws-modules/vpc/aws\"` and `version = \"~&gt; 5.0\"`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Declare a `module` block specifying `source = \"terraform-aws-modules/vpc/aws\"` and `version = \"~&gt; 5.0\"`. The `module` block instantiates a child module. The `source` argument specifies the module location (e.g., Terraform Registry, GitHub repo, S3 bucket, local path). When referencing registry modules, specifying `version` constraints ensures stability against upstream modifications.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax",
    tags: ["Module Sources", "Module Sourcing", "Resilience Failure"]
  }
];

export default HASHICORP_TFA_QUESTIONS_15;
