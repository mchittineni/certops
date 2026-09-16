export const HASHICORP_TFA_QUESTIONS_15 = [
  {
    id: "hashicorp-tfa-351",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform import for Bringing Existing Infrastructure Under Management: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to bring an existing AWS S3 bucket created manually in the AWS Console under Terraform management without deleting or recreating the bucket.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Write the `aws_s3_bucket` block and run `terraform apply`, which adopts the existing bucket." },
      { id: 'B', text: "Write the block and add a `moved` block naming the bucket's existing physical name." },
      { id: 'C', text: "Delete the bucket in the console and let `terraform apply` create it afresh." },
      { id: 'D', text: "Write the `aws_s3_bucket` block and run `terraform import` for it, or use an `import {}` block." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Write the `resource \"aws_s3_bucket\" \"app\" {}` configuration and execute `terraform import aws_s3_bucket.app &lt;bucket-name&gt;` (or use an `import {}` block). `terraform import` associates existing real-world cloud infrastructure with a Terraform configuration block. It populates the state file with the resource's current live attributes, allowing Terraform to manage the resource going forward without recreating it.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/import",
    tags: ["CLI Import","terraform import","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-352",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform import for Bringing Existing Infrastructure Under Management: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to bring an existing AWS S3 bucket created manually in the AWS Console under Terraform management without deleting or recreating the bucket.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Delete the bucket in the console and let `terraform apply` create it afresh." },
      { id: 'B', text: "Write the `aws_s3_bucket` block and run `terraform import` for it, or use an `import {}` block." },
      { id: 'C', text: "Write the `aws_s3_bucket` block and run `terraform apply`, which adopts the existing bucket." },
      { id: 'D', text: "Write the block and add a `moved` block naming the bucket's existing physical name." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Write the `resource \"aws_s3_bucket\" \"app\" {}` configuration and execute `terraform import aws_s3_bucket.app &lt;bucket-name&gt;` (or use an `import {}` block). `terraform import` associates existing real-world cloud infrastructure with a Terraform configuration block. It populates the state file with the resource's current live attributes, allowing Terraform to manage the resource going forward without recreating it.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/import",
    tags: ["CLI Import","terraform import","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-353",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform import for Bringing Existing Infrastructure Under Management: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to bring an existing AWS S3 bucket created manually in the AWS Console under Terraform management without deleting or recreating the bucket.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Write the block and add a `moved` block naming the bucket's existing physical name." },
      { id: 'B', text: "Write the `aws_s3_bucket` block and run `terraform apply`, which adopts the existing bucket." },
      { id: 'C', text: "Write the `aws_s3_bucket` block and run `terraform import` for it, or use an `import {}` block." },
      { id: 'D', text: "Delete the bucket in the console and let `terraform apply` create it afresh." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Write the `resource \"aws_s3_bucket\" \"app\" {}` configuration and execute `terraform import aws_s3_bucket.app &lt;bucket-name&gt;` (or use an `import {}` block). `terraform import` associates existing real-world cloud infrastructure with a Terraform configuration block. It populates the state file with the resource's current live attributes, allowing Terraform to manage the resource going forward without recreating it.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/import",
    tags: ["CLI Import","terraform import","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-354",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform import for Bringing Existing Infrastructure Under Management: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to bring an existing AWS S3 bucket created manually in the AWS Console under Terraform management without deleting or recreating the bucket.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Write the `aws_s3_bucket` block and run `terraform import` for it, or use an `import {}` block." },
      { id: 'B', text: "Delete the bucket in the console and let `terraform apply` create it afresh." },
      { id: 'C', text: "Write the block and add a `moved` block naming the bucket's existing physical name." },
      { id: 'D', text: "Write the `aws_s3_bucket` block and run `terraform apply`, which adopts the existing bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Write the `resource \"aws_s3_bucket\" \"app\" {}` configuration and execute `terraform import aws_s3_bucket.app &lt;bucket-name&gt;` (or use an `import {}` block). `terraform import` associates existing real-world cloud infrastructure with a Terraform configuration block. It populates the state file with the resource's current live attributes, allowing Terraform to manage the resource going forward without recreating it.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/import",
    tags: ["CLI Import","terraform import","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-355",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform import for Bringing Existing Infrastructure Under Management: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to bring an existing AWS S3 bucket created manually in the AWS Console under Terraform management without deleting or recreating the bucket.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Write the `aws_s3_bucket` block and run `terraform import` for it, or use an `import {}` block." },
      { id: 'B', text: "Write the `aws_s3_bucket` block and run `terraform apply`, which adopts the existing bucket." },
      { id: 'C', text: "Delete the bucket in the console and let `terraform apply` create it afresh." },
      { id: 'D', text: "Write the block and add a `moved` block naming the bucket's existing physical name." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Write the `resource \"aws_s3_bucket\" \"app\" {}` configuration and execute `terraform import aws_s3_bucket.app &lt;bucket-name&gt;` (or use an `import {}` block). `terraform import` associates existing real-world cloud infrastructure with a Terraform configuration block. It populates the state file with the resource's current live attributes, allowing Terraform to manage the resource going forward without recreating it.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/import",
    tags: ["CLI Import","terraform import","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-356",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform refresh and -refresh-only Plans: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to update the Terraform state file to reflect an out-of-band tag update on an EC2 instance without applying any other configuration changes.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Run `terraform apply` so the configuration overwrites the manual change." },
      { id: 'B', text: "Run `terraform plan -refresh-only`, then apply it to record the observed change." },
      { id: 'C', text: "Run `terraform taint` on the instance so the next apply replaces it." },
      { id: 'D', text: "Run `terraform state pull`, edit the tag, and push the state back." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute `terraform plan -refresh-only` to review detected state differences, followed by `terraform apply -refresh-only`. `terraform plan -refresh-only` queries cloud provider APIs for the live state of all managed resources and compares it strictly against the current state file. Running `terraform apply -refresh-only` saves these live updates directly to the state without making any changes to cloud infrastructure.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#refresh-only-mode",
    tags: ["CLI Refresh","Refresh-Only","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-357",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform refresh and -refresh-only Plans: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to update the Terraform state file to reflect an out-of-band tag update on an EC2 instance without applying any other configuration changes.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Run `terraform plan -refresh-only`, then apply it to record the observed change." },
      { id: 'B', text: "Run `terraform apply` so the configuration overwrites the manual change." },
      { id: 'C', text: "Run `terraform state pull`, edit the tag, and push the state back." },
      { id: 'D', text: "Run `terraform taint` on the instance so the next apply replaces it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `terraform plan -refresh-only` to review detected state differences, followed by `terraform apply -refresh-only`. `terraform plan -refresh-only` queries cloud provider APIs for the live state of all managed resources and compares it strictly against the current state file. Running `terraform apply -refresh-only` saves these live updates directly to the state without making any changes to cloud infrastructure.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#refresh-only-mode",
    tags: ["CLI Refresh","Refresh-Only","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-358",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform refresh and -refresh-only Plans: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to update the Terraform state file to reflect an out-of-band tag update on an EC2 instance without applying any other configuration changes.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Run `terraform plan -refresh-only`, then apply it to record the observed change." },
      { id: 'B', text: "Run `terraform apply` so the configuration overwrites the manual change." },
      { id: 'C', text: "Run `terraform state pull`, edit the tag, and push the state back." },
      { id: 'D', text: "Run `terraform taint` on the instance so the next apply replaces it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `terraform plan -refresh-only` to review detected state differences, followed by `terraform apply -refresh-only`. `terraform plan -refresh-only` queries cloud provider APIs for the live state of all managed resources and compares it strictly against the current state file. Running `terraform apply -refresh-only` saves these live updates directly to the state without making any changes to cloud infrastructure.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#refresh-only-mode",
    tags: ["CLI Refresh","Refresh-Only","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-359",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform refresh and -refresh-only Plans: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to update the Terraform state file to reflect an out-of-band tag update on an EC2 instance without applying any other configuration changes.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Run `terraform state pull`, edit the tag, and push the state back." },
      { id: 'B', text: "Run `terraform taint` on the instance so the next apply replaces it." },
      { id: 'C', text: "Run `terraform plan -refresh-only`, then apply it to record the observed change." },
      { id: 'D', text: "Run `terraform apply` so the configuration overwrites the manual change." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `terraform plan -refresh-only` to review detected state differences, followed by `terraform apply -refresh-only`. `terraform plan -refresh-only` queries cloud provider APIs for the live state of all managed resources and compares it strictly against the current state file. Running `terraform apply -refresh-only` saves these live updates directly to the state without making any changes to cloud infrastructure.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#refresh-only-mode",
    tags: ["CLI Refresh","Refresh-Only","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-360",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform refresh and -refresh-only Plans: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to update the Terraform state file to reflect an out-of-band tag update on an EC2 instance without applying any other configuration changes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Run `terraform plan -refresh-only`, then apply it to record the observed change." },
      { id: 'B', text: "Run `terraform apply` so the configuration overwrites the manual change." },
      { id: 'C', text: "Run `terraform state pull`, edit the tag, and push the state back." },
      { id: 'D', text: "Run `terraform taint` on the instance so the next apply replaces it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `terraform plan -refresh-only` to review detected state differences, followed by `terraform apply -refresh-only`. `terraform plan -refresh-only` queries cloud provider APIs for the live state of all managed resources and compares it strictly against the current state file. Running `terraform apply -refresh-only` saves these live updates directly to the state without making any changes to cloud infrastructure.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#refresh-only-mode",
    tags: ["CLI Refresh","Refresh-Only","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-361",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Terraform CLI Logging and Debugging (TF_LOG): Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to troubleshoot an obscure HTTP 403 Forbidden API error returned by a cloud provider plugin during `terraform apply`.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Set `TF_LOG_PROVIDER=TRACE` alone, which covers the core as well." },
      { id: 'B', text: "Set `TF_LOG=DEBUG`, and `TF_LOG_PATH` to capture the output to a file." },
      { id: 'C', text: "Run the command with `-verbose`, which raises the logging level." },
      { id: 'D', text: "Set `TF_LOG=OFF` and read the crash log the run leaves behind." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `export TF_LOG=DEBUG` (or `TRACE`) and optionally `TF_LOG_PATH=terraform.log` before executing the command. The `TF_LOG` environment variable configures logging verbosity in Terraform CLI. Setting `TF_LOG=DEBUG` or `TRACE` outputs detailed logs, including raw HTTP request and response payloads exchanged between provider plugins and cloud vendor APIs, exposing exact permission and validation errors.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["CLI Logging","TF_LOG Debugging","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-362",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Terraform CLI Logging and Debugging (TF_LOG): High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to troubleshoot an obscure HTTP 403 Forbidden API error returned by a cloud provider plugin during `terraform apply`.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Set `TF_LOG=DEBUG`, and `TF_LOG_PATH` to capture the output to a file." },
      { id: 'B', text: "Set `TF_LOG_PROVIDER=TRACE` alone, which covers the core as well." },
      { id: 'C', text: "Set `TF_LOG=OFF` and read the crash log the run leaves behind." },
      { id: 'D', text: "Run the command with `-verbose`, which raises the logging level." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `export TF_LOG=DEBUG` (or `TRACE`) and optionally `TF_LOG_PATH=terraform.log` before executing the command. The `TF_LOG` environment variable configures logging verbosity in Terraform CLI. Setting `TF_LOG=DEBUG` or `TRACE` outputs detailed logs, including raw HTTP request and response payloads exchanged between provider plugins and cloud vendor APIs, exposing exact permission and validation errors.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["CLI Logging","TF_LOG Debugging","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-363",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Terraform CLI Logging and Debugging (TF_LOG): Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to troubleshoot an obscure HTTP 403 Forbidden API error returned by a cloud provider plugin during `terraform apply`.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Set `TF_LOG=DEBUG`, and `TF_LOG_PATH` to capture the output to a file." },
      { id: 'B', text: "Set `TF_LOG_PROVIDER=TRACE` alone, which covers the core as well." },
      { id: 'C', text: "Set `TF_LOG=OFF` and read the crash log the run leaves behind." },
      { id: 'D', text: "Run the command with `-verbose`, which raises the logging level." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `export TF_LOG=DEBUG` (or `TRACE`) and optionally `TF_LOG_PATH=terraform.log` before executing the command. The `TF_LOG` environment variable configures logging verbosity in Terraform CLI. Setting `TF_LOG=DEBUG` or `TRACE` outputs detailed logs, including raw HTTP request and response payloads exchanged between provider plugins and cloud vendor APIs, exposing exact permission and validation errors.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["CLI Logging","TF_LOG Debugging","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-364",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Terraform CLI Logging and Debugging (TF_LOG): Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to troubleshoot an obscure HTTP 403 Forbidden API error returned by a cloud provider plugin during `terraform apply`.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Set `TF_LOG_PROVIDER=TRACE` alone, which covers the core as well." },
      { id: 'B', text: "Run the command with `-verbose`, which raises the logging level." },
      { id: 'C', text: "Set `TF_LOG=OFF` and read the crash log the run leaves behind." },
      { id: 'D', text: "Set `TF_LOG=DEBUG`, and `TF_LOG_PATH` to capture the output to a file." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set `export TF_LOG=DEBUG` (or `TRACE`) and optionally `TF_LOG_PATH=terraform.log` before executing the command. The `TF_LOG` environment variable configures logging verbosity in Terraform CLI. Setting `TF_LOG=DEBUG` or `TRACE` outputs detailed logs, including raw HTTP request and response payloads exchanged between provider plugins and cloud vendor APIs, exposing exact permission and validation errors.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["CLI Logging","TF_LOG Debugging","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-365",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Terraform CLI Logging and Debugging (TF_LOG): Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to troubleshoot an obscure HTTP 403 Forbidden API error returned by a cloud provider plugin during `terraform apply`.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Set `TF_LOG=DEBUG`, and `TF_LOG_PATH` to capture the output to a file." },
      { id: 'B', text: "Set `TF_LOG_PROVIDER=TRACE` alone, which covers the core as well." },
      { id: 'C', text: "Set `TF_LOG=OFF` and read the crash log the run leaves behind." },
      { id: 'D', text: "Run the command with `-verbose`, which raises the logging level." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `export TF_LOG=DEBUG` (or `TRACE`) and optionally `TF_LOG_PATH=terraform.log` before executing the command. The `TF_LOG` environment variable configures logging verbosity in Terraform CLI. Setting `TF_LOG=DEBUG` or `TRACE` outputs detailed logs, including raw HTTP request and response payloads exchanged between provider plugins and cloud vendor APIs, exposing exact permission and validation errors.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["CLI Logging","TF_LOG Debugging","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-366",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Module Structure and Standard Layout: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to organize a reusable Terraform module according to official HashiCorp standard directory conventions.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Structure it as one file per resource type, named after that resource." },
      { id: 'B', text: "Structure it as `main.tf`, `variables.tf`, `outputs.tf` and a `README.md`." },
      { id: 'C', text: "Structure it as a single `terraform.tf` holding every block in order." },
      { id: 'D', text: "Structure it as a directory per environment, each with the same files." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Structure the module with `main.tf` (primary resources), `variables.tf` (inputs), `outputs.tf` (return values), and `README.md`. HashiCorp defines a canonical layout for standard reusable modules: `main.tf` contains primary resources, `variables.tf` declares typed input variables, `outputs.tf` exports useful attributes, and `README.md` documents usage, prerequisites, and examples.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure",
    tags: ["Module Structure","Standard Module Layout","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-367",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Module Structure and Standard Layout: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to organize a reusable Terraform module according to official HashiCorp standard directory conventions.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Structure it as `main.tf`, `variables.tf`, `outputs.tf` and a `README.md`." },
      { id: 'B', text: "Structure it as a single `terraform.tf` holding every block in order." },
      { id: 'C', text: "Structure it as one file per resource type, named after that resource." },
      { id: 'D', text: "Structure it as a directory per environment, each with the same files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Structure the module with `main.tf` (primary resources), `variables.tf` (inputs), `outputs.tf` (return values), and `README.md`. HashiCorp defines a canonical layout for standard reusable modules: `main.tf` contains primary resources, `variables.tf` declares typed input variables, `outputs.tf` exports useful attributes, and `README.md` documents usage, prerequisites, and examples.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure",
    tags: ["Module Structure","Standard Module Layout","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-368",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Module Structure and Standard Layout: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to organize a reusable Terraform module according to official HashiCorp standard directory conventions.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Structure it as one file per resource type, named after that resource." },
      { id: 'B', text: "Structure it as a directory per environment, each with the same files." },
      { id: 'C', text: "Structure it as `main.tf`, `variables.tf`, `outputs.tf` and a `README.md`." },
      { id: 'D', text: "Structure it as a single `terraform.tf` holding every block in order." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Structure the module with `main.tf` (primary resources), `variables.tf` (inputs), `outputs.tf` (return values), and `README.md`. HashiCorp defines a canonical layout for standard reusable modules: `main.tf` contains primary resources, `variables.tf` declares typed input variables, `outputs.tf` exports useful attributes, and `README.md` documents usage, prerequisites, and examples.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure",
    tags: ["Module Structure","Standard Module Layout","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-369",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Module Structure and Standard Layout: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to organize a reusable Terraform module according to official HashiCorp standard directory conventions.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Structure it as a directory per environment, each with the same files." },
      { id: 'B', text: "Structure it as one file per resource type, named after that resource." },
      { id: 'C', text: "Structure it as a single `terraform.tf` holding every block in order." },
      { id: 'D', text: "Structure it as `main.tf`, `variables.tf`, `outputs.tf` and a `README.md`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Structure the module with `main.tf` (primary resources), `variables.tf` (inputs), `outputs.tf` (return values), and `README.md`. HashiCorp defines a canonical layout for standard reusable modules: `main.tf` contains primary resources, `variables.tf` declares typed input variables, `outputs.tf` exports useful attributes, and `README.md` documents usage, prerequisites, and examples.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure",
    tags: ["Module Structure","Standard Module Layout","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-370",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Module Structure and Standard Layout: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to organize a reusable Terraform module according to official HashiCorp standard directory conventions.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Structure it as a directory per environment, each with the same files." },
      { id: 'B', text: "Structure it as `main.tf`, `variables.tf`, `outputs.tf` and a `README.md`." },
      { id: 'C', text: "Structure it as one file per resource type, named after that resource." },
      { id: 'D', text: "Structure it as a single `terraform.tf` holding every block in order." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Structure the module with `main.tf` (primary resources), `variables.tf` (inputs), `outputs.tf` (return values), and `README.md`. HashiCorp defines a canonical layout for standard reusable modules: `main.tf` contains primary resources, `variables.tf` declares typed input variables, `outputs.tf` exports useful attributes, and `README.md` documents usage, prerequisites, and examples.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure",
    tags: ["Module Structure","Standard Module Layout","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-371",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Calling Modules and Module Sources: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to call a verified open-source VPC module from the public Terraform Registry with strict version pinning.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "A `module` block whose source is an HTTP archive of the module." },
      { id: 'B', text: "The module's source copied into the root directory and called locally." },
      { id: 'C', text: "The module downloaded by hand and referenced by its local path." },
      { id: 'D', text: "A `module` block with the registry source and a `version` constraint." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Declare a `module` block specifying `source = \"terraform-aws-modules/vpc/aws\"` and `version = \"~&gt; 5.0\"`. The `module` block instantiates a child module. The `source` argument specifies the module location (e.g., Terraform Registry, GitHub repo, S3 bucket, local path). When referencing registry modules, specifying `version` constraints ensures stability against upstream modifications.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax",
    tags: ["Module Sources","Module Sourcing","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-372",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Calling Modules and Module Sources: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to call a verified open-source VPC module from the public Terraform Registry with strict version pinning.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "The module's source copied into the root directory and called locally." },
      { id: 'B', text: "A `module` block with the registry source and a `version` constraint." },
      { id: 'C', text: "The module downloaded by hand and referenced by its local path." },
      { id: 'D', text: "A `module` block whose source is an HTTP archive of the module." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Declare a `module` block specifying `source = \"terraform-aws-modules/vpc/aws\"` and `version = \"~&gt; 5.0\"`. The `module` block instantiates a child module. The `source` argument specifies the module location (e.g., Terraform Registry, GitHub repo, S3 bucket, local path). When referencing registry modules, specifying `version` constraints ensures stability against upstream modifications.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax",
    tags: ["Module Sources","Module Sourcing","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-373",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Calling Modules and Module Sources: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to call a verified open-source VPC module from the public Terraform Registry with strict version pinning.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "A `module` block with the registry source and a `version` constraint." },
      { id: 'B', text: "The module's source copied into the root directory and called locally." },
      { id: 'C', text: "A `module` block whose source is an HTTP archive of the module." },
      { id: 'D', text: "The module downloaded by hand and referenced by its local path." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declare a `module` block specifying `source = \"terraform-aws-modules/vpc/aws\"` and `version = \"~&gt; 5.0\"`. The `module` block instantiates a child module. The `source` argument specifies the module location (e.g., Terraform Registry, GitHub repo, S3 bucket, local path). When referencing registry modules, specifying `version` constraints ensures stability against upstream modifications.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax",
    tags: ["Module Sources","Module Sourcing","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-374",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Calling Modules and Module Sources: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to call a verified open-source VPC module from the public Terraform Registry with strict version pinning.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "A `module` block whose source is an HTTP archive of the module." },
      { id: 'B', text: "The module downloaded by hand and referenced by its local path." },
      { id: 'C', text: "A `module` block with the registry source and a `version` constraint." },
      { id: 'D', text: "The module's source copied into the root directory and called locally." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Declare a `module` block specifying `source = \"terraform-aws-modules/vpc/aws\"` and `version = \"~&gt; 5.0\"`. The `module` block instantiates a child module. The `source` argument specifies the module location (e.g., Terraform Registry, GitHub repo, S3 bucket, local path). When referencing registry modules, specifying `version` constraints ensures stability against upstream modifications.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax",
    tags: ["Module Sources","Module Sourcing","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-375",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Calling Modules and Module Sources: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to call a verified open-source VPC module from the public Terraform Registry with strict version pinning.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "The module's source copied into the root directory and called locally." },
      { id: 'B', text: "A `module` block with the registry source and a `version` constraint." },
      { id: 'C', text: "The module downloaded by hand and referenced by its local path." },
      { id: 'D', text: "A `module` block whose source is an HTTP archive of the module." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Declare a `module` block specifying `source = \"terraform-aws-modules/vpc/aws\"` and `version = \"~&gt; 5.0\"`. The `module` block instantiates a child module. The `source` argument specifies the module location (e.g., Terraform Registry, GitHub repo, S3 bucket, local path). When referencing registry modules, specifying `version` constraints ensures stability against upstream modifications.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax",
    tags: ["Module Sources","Module Sourcing","Resilience Failure"]
  }
];

export default HASHICORP_TFA_QUESTIONS_15;
