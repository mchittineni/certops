export const HASHICORP_TFA_QUESTIONS_18 = [
  {
    id: "hashicorp-tfa-426",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State Migration with terraform init -migrate-state: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to migrate an existing project's state file from local disk storage to a newly configured Amazon S3 remote backend.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Add the `backend \"s3\"` block and run `terraform init -migrate-state`." },
      { id: 'B', text: "Add the backend block and upload the existing state file to the bucket." },
      { id: 'C', text: "Add the backend block and let the next apply recreate the resources." },
      { id: 'D', text: "Add the backend block and run `terraform init -reconfigure` instead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add the `backend \"s3\"` block to the configuration and run `terraform init -migrate-state` to copy existing state to S3. When changing backend configurations, running `terraform init` detects the backend change and prompts to migrate state. Passing `-migrate-state` automatically copies existing state data from the previous backend to the new destination without data loss or manual intervention.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/configuration#backend-type-change",
    tags: ["State Migration","State Migration","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-427",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State Migration with terraform init -migrate-state: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to migrate an existing project's state file from local disk storage to a newly configured Amazon S3 remote backend.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Add the backend block and upload the existing state file to the bucket." },
      { id: 'B', text: "Add the `backend \"s3\"` block and run `terraform init -migrate-state`." },
      { id: 'C', text: "Add the backend block and run `terraform init -reconfigure` instead." },
      { id: 'D', text: "Add the backend block and let the next apply recreate the resources." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add the `backend \"s3\"` block to the configuration and run `terraform init -migrate-state` to copy existing state to S3. When changing backend configurations, running `terraform init` detects the backend change and prompts to migrate state. Passing `-migrate-state` automatically copies existing state data from the previous backend to the new destination without data loss or manual intervention.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/configuration#backend-type-change",
    tags: ["State Migration","State Migration","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-428",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State Migration with terraform init -migrate-state: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to migrate an existing project's state file from local disk storage to a newly configured Amazon S3 remote backend.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Add the backend block and let the next apply recreate the resources." },
      { id: 'B', text: "Add the backend block and run `terraform init -reconfigure` instead." },
      { id: 'C', text: "Add the `backend \"s3\"` block and run `terraform init -migrate-state`." },
      { id: 'D', text: "Add the backend block and upload the existing state file to the bucket." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add the `backend \"s3\"` block to the configuration and run `terraform init -migrate-state` to copy existing state to S3. When changing backend configurations, running `terraform init` detects the backend change and prompts to migrate state. Passing `-migrate-state` automatically copies existing state data from the previous backend to the new destination without data loss or manual intervention.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/configuration#backend-type-change",
    tags: ["State Migration","State Migration","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-429",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State Migration with terraform init -migrate-state: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to migrate an existing project's state file from local disk storage to a newly configured Amazon S3 remote backend.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Add the `backend \"s3\"` block and run `terraform init -migrate-state`." },
      { id: 'B', text: "Add the backend block and let the next apply recreate the resources." },
      { id: 'C', text: "Add the backend block and run `terraform init -reconfigure` instead." },
      { id: 'D', text: "Add the backend block and upload the existing state file to the bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add the `backend \"s3\"` block to the configuration and run `terraform init -migrate-state` to copy existing state to S3. When changing backend configurations, running `terraform init` detects the backend change and prompts to migrate state. Passing `-migrate-state` automatically copies existing state data from the previous backend to the new destination without data loss or manual intervention.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/configuration#backend-type-change",
    tags: ["State Migration","State Migration","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-430",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State Migration with terraform init -migrate-state: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to migrate an existing project's state file from local disk storage to a newly configured Amazon S3 remote backend.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Add the backend block and upload the existing state file to the bucket." },
      { id: 'B', text: "Add the backend block and run `terraform init -reconfigure` instead." },
      { id: 'C', text: "Add the backend block and let the next apply recreate the resources." },
      { id: 'D', text: "Add the `backend \"s3\"` block and run `terraform init -migrate-state`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add the `backend \"s3\"` block to the configuration and run `terraform init -migrate-state` to copy existing state to S3. When changing backend configurations, running `terraform init` detects the backend change and prompts to migrate state. Passing `-migrate-state` automatically copies existing state data from the previous backend to the new destination without data loss or manual intervention.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/configuration#backend-type-change",
    tags: ["State Migration","State Migration","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-431",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Sensitive Data Handling in State Files: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to protect sensitive database passwords and private keys that are recorded in plaintext inside the Terraform state file.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Remove the sensitive resources from state once they have been created." },
      { id: 'B', text: "Mark the values `sensitive = true`, which keeps them out of the state file." },
      { id: 'C', text: "Restrict the backend with IAM, enforce encryption in transit and at rest, and log access." },
      { id: 'D', text: "Encrypt the state file with a passphrase before it is written to the backend." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Restrict access to the remote backend storage using IAM policies, enforce encryption at rest and in transit, and enable audit logging. Marking a variable or output as `sensitive = true` only redacts it from CLI terminal output; the raw value is still stored in plaintext JSON inside `terraform.tfstate`. Securing state requires encrypting the storage backend (KMS), enforcing strict IAM access, and auditing read requests.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["State Security","Sensitive Data in State","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-432",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Sensitive Data Handling in State Files: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to protect sensitive database passwords and private keys that are recorded in plaintext inside the Terraform state file.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Restrict the backend with IAM, enforce encryption in transit and at rest, and log access." },
      { id: 'B', text: "Mark the values `sensitive = true`, which keeps them out of the state file." },
      { id: 'C', text: "Encrypt the state file with a passphrase before it is written to the backend." },
      { id: 'D', text: "Remove the sensitive resources from state once they have been created." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Restrict access to the remote backend storage using IAM policies, enforce encryption at rest and in transit, and enable audit logging. Marking a variable or output as `sensitive = true` only redacts it from CLI terminal output; the raw value is still stored in plaintext JSON inside `terraform.tfstate`. Securing state requires encrypting the storage backend (KMS), enforcing strict IAM access, and auditing read requests.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["State Security","Sensitive Data in State","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-433",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Sensitive Data Handling in State Files: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to protect sensitive database passwords and private keys that are recorded in plaintext inside the Terraform state file.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Restrict the backend with IAM, enforce encryption in transit and at rest, and log access." },
      { id: 'B', text: "Mark the values `sensitive = true`, which keeps them out of the state file." },
      { id: 'C', text: "Encrypt the state file with a passphrase before it is written to the backend." },
      { id: 'D', text: "Remove the sensitive resources from state once they have been created." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Restrict access to the remote backend storage using IAM policies, enforce encryption at rest and in transit, and enable audit logging. Marking a variable or output as `sensitive = true` only redacts it from CLI terminal output; the raw value is still stored in plaintext JSON inside `terraform.tfstate`. Securing state requires encrypting the storage backend (KMS), enforcing strict IAM access, and auditing read requests.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["State Security","Sensitive Data in State","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-434",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Sensitive Data Handling in State Files: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to protect sensitive database passwords and private keys that are recorded in plaintext inside the Terraform state file.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Remove the sensitive resources from state once they have been created." },
      { id: 'B', text: "Restrict the backend with IAM, enforce encryption in transit and at rest, and log access." },
      { id: 'C', text: "Encrypt the state file with a passphrase before it is written to the backend." },
      { id: 'D', text: "Mark the values `sensitive = true`, which keeps them out of the state file." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Restrict access to the remote backend storage using IAM policies, enforce encryption at rest and in transit, and enable audit logging. Marking a variable or output as `sensitive = true` only redacts it from CLI terminal output; the raw value is still stored in plaintext JSON inside `terraform.tfstate`. Securing state requires encrypting the storage backend (KMS), enforcing strict IAM access, and auditing read requests.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["State Security","Sensitive Data in State","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-435",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Sensitive Data Handling in State Files: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to protect sensitive database passwords and private keys that are recorded in plaintext inside the Terraform state file.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Restrict the backend with IAM, enforce encryption in transit and at rest, and log access." },
      { id: 'B', text: "Mark the values `sensitive = true`, which keeps them out of the state file." },
      { id: 'C', text: "Encrypt the state file with a passphrase before it is written to the backend." },
      { id: 'D', text: "Remove the sensitive resources from state once they have been created." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Restrict access to the remote backend storage using IAM policies, enforce encryption at rest and in transit, and enable audit logging. Marking a variable or output as `sensitive = true` only redacts it from CLI terminal output; the raw value is still stored in plaintext JSON inside `terraform.tfstate`. Securing state requires encrypting the storage backend (KMS), enforcing strict IAM access, and auditing read requests.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["State Security","Sensitive Data in State","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-436",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Refactoring with terraform state mv: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to refactor a standalone `aws_instance.web` resource into a module `module.web.aws_instance.server` without destroying and recreating the live VM.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Run `terraform state mv` to the new module address for that instance." },
      { id: 'B', text: "Apply the new configuration and let Terraform replace the instance." },
      { id: 'C', text: "Pull the state, edit the address in place, and push it back again." },
      { id: 'D', text: "Remove it from state with `state rm` and import it at the new address." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform state mv aws_instance.web module.web.aws_instance.server` to update the resource address in state. When code is refactored (e.g., moving a resource into a module or renaming it), Terraform treats the old address as deleted and the new address as new. Running `terraform state mv` updates the state address binding, allowing code refactoring without triggering destructive recreation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/mv",
    tags: ["State Refactoring","terraform state mv","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-437",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Refactoring with terraform state mv: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to refactor a standalone `aws_instance.web` resource into a module `module.web.aws_instance.server` without destroying and recreating the live VM.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Remove it from state with `state rm` and import it at the new address." },
      { id: 'B', text: "Run `terraform state mv` to the new module address for that instance." },
      { id: 'C', text: "Pull the state, edit the address in place, and push it back again." },
      { id: 'D', text: "Apply the new configuration and let Terraform replace the instance." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run `terraform state mv aws_instance.web module.web.aws_instance.server` to update the resource address in state. When code is refactored (e.g., moving a resource into a module or renaming it), Terraform treats the old address as deleted and the new address as new. Running `terraform state mv` updates the state address binding, allowing code refactoring without triggering destructive recreation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/mv",
    tags: ["State Refactoring","terraform state mv","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-438",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Refactoring with terraform state mv: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to refactor a standalone `aws_instance.web` resource into a module `module.web.aws_instance.server` without destroying and recreating the live VM.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Run `terraform state mv` to the new module address for that instance." },
      { id: 'B', text: "Pull the state, edit the address in place, and push it back again." },
      { id: 'C', text: "Remove it from state with `state rm` and import it at the new address." },
      { id: 'D', text: "Apply the new configuration and let Terraform replace the instance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform state mv aws_instance.web module.web.aws_instance.server` to update the resource address in state. When code is refactored (e.g., moving a resource into a module or renaming it), Terraform treats the old address as deleted and the new address as new. Running `terraform state mv` updates the state address binding, allowing code refactoring without triggering destructive recreation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/mv",
    tags: ["State Refactoring","terraform state mv","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-439",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Refactoring with terraform state mv: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to refactor a standalone `aws_instance.web` resource into a module `module.web.aws_instance.server` without destroying and recreating the live VM.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Pull the state, edit the address in place, and push it back again." },
      { id: 'B', text: "Remove it from state with `state rm` and import it at the new address." },
      { id: 'C', text: "Run `terraform state mv` to the new module address for that instance." },
      { id: 'D', text: "Apply the new configuration and let Terraform replace the instance." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run `terraform state mv aws_instance.web module.web.aws_instance.server` to update the resource address in state. When code is refactored (e.g., moving a resource into a module or renaming it), Terraform treats the old address as deleted and the new address as new. Running `terraform state mv` updates the state address binding, allowing code refactoring without triggering destructive recreation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/mv",
    tags: ["State Refactoring","terraform state mv","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-440",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Refactoring with terraform state mv: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to refactor a standalone `aws_instance.web` resource into a module `module.web.aws_instance.server` without destroying and recreating the live VM.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Run `terraform state mv` to the new module address for that instance." },
      { id: 'B', text: "Apply the new configuration and let Terraform replace the instance." },
      { id: 'C', text: "Pull the state, edit the address in place, and push it back again." },
      { id: 'D', text: "Remove it from state with `state rm` and import it at the new address." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform state mv aws_instance.web module.web.aws_instance.server` to update the resource address in state. When code is refactored (e.g., moving a resource into a module or renaming it), Terraform treats the old address as deleted and the new address as new. Running `terraform state mv` updates the state address binding, allowing code refactoring without triggering destructive recreation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/mv",
    tags: ["State Refactoring","terraform state mv","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-441",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Removing Resources with terraform state rm: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to stop managing a legacy database with Terraform without terminating or modifying the actual running RDS instance in AWS.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Run `terraform state rm` for it and delete its block from the configuration." },
      { id: 'B', text: "Run `terraform destroy -target` against that database resource." },
      { id: 'C', text: "Delete the database in the console and re-run the plan afterwards." },
      { id: 'D', text: "Add `ignore_changes = all` to the resource and leave it in state." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform state rm aws_db_instance.legacy` and remove the resource block from the HCL configuration. `terraform state rm` removes a resource from the state file. Terraform forgets that it manages the resource; future plans will not track or modify it, while the physical infrastructure in the cloud remains completely unaffected and running.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/rm",
    tags: ["State Removal","terraform state rm","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-442",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Removing Resources with terraform state rm: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to stop managing a legacy database with Terraform without terminating or modifying the actual running RDS instance in AWS.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Delete the database in the console and re-run the plan afterwards." },
      { id: 'B', text: "Run `terraform destroy -target` against that database resource." },
      { id: 'C', text: "Add `ignore_changes = all` to the resource and leave it in state." },
      { id: 'D', text: "Run `terraform state rm` for it and delete its block from the configuration." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Run `terraform state rm aws_db_instance.legacy` and remove the resource block from the HCL configuration. `terraform state rm` removes a resource from the state file. Terraform forgets that it manages the resource; future plans will not track or modify it, while the physical infrastructure in the cloud remains completely unaffected and running.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/rm",
    tags: ["State Removal","terraform state rm","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-443",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Removing Resources with terraform state rm: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to stop managing a legacy database with Terraform without terminating or modifying the actual running RDS instance in AWS.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Delete the database in the console and re-run the plan afterwards." },
      { id: 'B', text: "Add `ignore_changes = all` to the resource and leave it in state." },
      { id: 'C', text: "Run `terraform state rm` for it and delete its block from the configuration." },
      { id: 'D', text: "Run `terraform destroy -target` against that database resource." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run `terraform state rm aws_db_instance.legacy` and remove the resource block from the HCL configuration. `terraform state rm` removes a resource from the state file. Terraform forgets that it manages the resource; future plans will not track or modify it, while the physical infrastructure in the cloud remains completely unaffected and running.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/rm",
    tags: ["State Removal","terraform state rm","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-444",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Removing Resources with terraform state rm: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to stop managing a legacy database with Terraform without terminating or modifying the actual running RDS instance in AWS.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Delete the database in the console and re-run the plan afterwards." },
      { id: 'B', text: "Add `ignore_changes = all` to the resource and leave it in state." },
      { id: 'C', text: "Run `terraform state rm` for it and delete its block from the configuration." },
      { id: 'D', text: "Run `terraform destroy -target` against that database resource." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run `terraform state rm aws_db_instance.legacy` and remove the resource block from the HCL configuration. `terraform state rm` removes a resource from the state file. Terraform forgets that it manages the resource; future plans will not track or modify it, while the physical infrastructure in the cloud remains completely unaffected and running.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/rm",
    tags: ["State Removal","terraform state rm","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-445",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Removing Resources with terraform state rm: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to stop managing a legacy database with Terraform without terminating or modifying the actual running RDS instance in AWS.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Run `terraform state rm` for it and delete its block from the configuration." },
      { id: 'B', text: "Run `terraform destroy -target` against that database resource." },
      { id: 'C', text: "Delete the database in the console and re-run the plan afterwards." },
      { id: 'D', text: "Add `ignore_changes = all` to the resource and leave it in state." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform state rm aws_db_instance.legacy` and remove the resource block from the HCL configuration. `terraform state rm` removes a resource from the state file. Terraform forgets that it manages the resource; future plans will not track or modify it, while the physical infrastructure in the cloud remains completely unaffected and running.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/rm",
    tags: ["State Removal","terraform state rm","Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-446",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State Disaster Recovery and Versioning: Dr Failover",
    scenario: "An enterprise cloud operations team is establishing high-availability standards, automated state recovery procedures, and infrastructure resilience baselines with Terraform. The Terraform engineer needs to recover the Terraform state file after an accidental destructive overwrite or corrupted state operation in an S3 remote backend.",
    question: "Which architectural approach or configuration satisfies these infrastructure disaster recovery and operational resilience objectives?",
    options: [
      { id: 'A', text: "Enable versioning on the state bucket and restore the previous object version." },
      { id: 'B', text: "Accept the loss and rebuild the infrastructure from the configuration." },
      { id: 'C', text: "Run `terraform destroy` to clear the state and then apply it again." },
      { id: 'D', text: "Re-import each resource into a new state file at its own address." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable object versioning on the S3 state bucket and restore the previous version of the state object. Because state is the single source of truth for managed infrastructure, losing or corrupting state can cause severe outages. Enabling object versioning on the remote backend (e.g., S3 versioning) allows instantaneous recovery of prior healthy state revisions if corruption occurs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/state/state-backup",
    tags: ["State Recovery","State Versioning","Dr Failover"]
  },
  {
    id: "hashicorp-tfa-447",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State Disaster Recovery and Versioning: High Load Scale",
    scenario: "A large-scale multi-cloud platform experiences rapid infrastructure growth and requires automated, consistent provisioning across complex resource topologies. The Terraform engineer needs to recover the Terraform state file after an accidental destructive overwrite or corrupted state operation in an S3 remote backend.",
    question: "Which design pattern or Terraform capability manages this provisioning scale effectively while preventing configuration drift and deployment bottlenecks?",
    options: [
      { id: 'A', text: "Re-import each resource into a new state file at its own address." },
      { id: 'B', text: "Run `terraform destroy` to clear the state and then apply it again." },
      { id: 'C', text: "Accept the loss and rebuild the infrastructure from the configuration." },
      { id: 'D', text: "Enable versioning on the state bucket and restore the previous object version." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable object versioning on the S3 state bucket and restore the previous version of the state object. Because state is the single source of truth for managed infrastructure, losing or corrupting state can cause severe outages. Enabling object versioning on the remote backend (e.g., S3 versioning) allows instantaneous recovery of prior healthy state revisions if corruption occurs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/state/state-backup",
    tags: ["State Recovery","State Versioning","High Load Scale"]
  },
  {
    id: "hashicorp-tfa-448",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State Disaster Recovery and Versioning: Security Compliance",
    scenario: "A cloud security auditor requires strict protection of sensitive state data, verified provider dependencies, and automated governance across all Terraform pipelines. The Terraform engineer needs to recover the Terraform state file after an accidental destructive overwrite or corrupted state operation in an S3 remote backend.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Enable versioning on the state bucket and restore the previous object version." },
      { id: 'B', text: "Run `terraform destroy` to clear the state and then apply it again." },
      { id: 'C', text: "Re-import each resource into a new state file at its own address." },
      { id: 'D', text: "Accept the loss and rebuild the infrastructure from the configuration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable object versioning on the S3 state bucket and restore the previous version of the state object. Because state is the single source of truth for managed infrastructure, losing or corrupting state can cause severe outages. Enabling object versioning on the remote backend (e.g., S3 versioning) allows instantaneous recovery of prior healthy state revisions if corruption occurs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/state/state-backup",
    tags: ["State Recovery","State Versioning","Security Compliance"]
  },
  {
    id: "hashicorp-tfa-449",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State Disaster Recovery and Versioning: Hybrid Migration",
    scenario: "An organization is transitioning from manual, console-driven infrastructure provisioning to automated, declarative infrastructure as code using Terraform. The Terraform engineer needs to recover the Terraform state file after an accidental destructive overwrite or corrupted state operation in an S3 remote backend.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Re-import each resource into a new state file at its own address." },
      { id: 'B', text: "Accept the loss and rebuild the infrastructure from the configuration." },
      { id: 'C', text: "Enable versioning on the state bucket and restore the previous object version." },
      { id: 'D', text: "Run `terraform destroy` to clear the state and then apply it again." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable object versioning on the S3 state bucket and restore the previous version of the state object. Because state is the single source of truth for managed infrastructure, losing or corrupting state can cause severe outages. Enabling object versioning on the remote backend (e.g., S3 versioning) allows instantaneous recovery of prior healthy state revisions if corruption occurs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/state/state-backup",
    tags: ["State Recovery","State Versioning","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-450",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State Disaster Recovery and Versioning: Resilience Failure",
    scenario: "A platform engineering team is optimizing infrastructure stability to eliminate single points of failure, streamline state refactoring, and ensure zero-downtime resource replacement. The Terraform engineer needs to recover the Terraform state file after an accidental destructive overwrite or corrupted state operation in an S3 remote backend.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Enable versioning on the state bucket and restore the previous object version." },
      { id: 'B', text: "Accept the loss and rebuild the infrastructure from the configuration." },
      { id: 'C', text: "Run `terraform destroy` to clear the state and then apply it again." },
      { id: 'D', text: "Re-import each resource into a new state file at its own address." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable object versioning on the S3 state bucket and restore the previous version of the state object. Because state is the single source of truth for managed infrastructure, losing or corrupting state can cause severe outages. Enabling object versioning on the remote backend (e.g., S3 versioning) allows instantaneous recovery of prior healthy state revisions if corruption occurs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/state/state-backup",
    tags: ["State Recovery","State Versioning","Resilience Failure"]
  }
];

export default HASHICORP_TFA_QUESTIONS_18;
