export const HASHICORP_TFP_QUESTIONS_16 = [
  {
    id: "hashicorp-tfp-376",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State Encryption at Rest and Key Rotation: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates State Encryption to protect sensitive database passwords and private keys stored in Terraform state with customer-managed cryptographic keys and automated key rotation.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Configuring native state encryption and key rotation in modern Terraform is under consideration.",
    options: [
      { id: 'A', text: "Configure the native `encryption {}` block in Terraform configuration with KMS key providers and method configurations." },
      { id: 'B', text: "Encode the state file with base64 and assume it is cryptographically secure." },
      { id: 'C', text: "Commit the state file to private GitHub repositories with no encryption." },
      { id: 'D', text: "Disable state persistence to avoid storing secrets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the native `encryption {}` block in Terraform configuration with KMS key providers and method configurations. Terraform 1.4+ introduced native state encryption configurations. Defining an `encryption {}` block in the root module enables client-side encryption of state files and plan files using cloud KMS keys, ensuring secrets remain encrypted even before being transmitted to the backend.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/v1.4.x/encryption",
    tags: ["State Encryption", "Native State Encryption", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-377",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State Encryption at Rest and Key Rotation: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates State Encryption to protect sensitive database passwords and private keys stored in Terraform state with customer-managed cryptographic keys and automated key rotation.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Configuring native state encryption and key rotation in modern Terraform is under consideration.",
    options: [
      { id: 'A', text: "Configure the native `encryption {}` block in Terraform configuration with KMS key providers and method configurations." },
      { id: 'B', text: "Encode the state file with base64 and assume it is cryptographically secure." },
      { id: 'C', text: "Commit the state file to private GitHub repositories with no encryption." },
      { id: 'D', text: "Disable state persistence to avoid storing secrets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the native `encryption {}` block in Terraform configuration with KMS key providers and method configurations. Terraform 1.4+ introduced native state encryption configurations. Defining an `encryption {}` block in the root module enables client-side encryption of state files and plan files using cloud KMS keys, ensuring secrets remain encrypted even before being transmitted to the backend.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/v1.4.x/encryption",
    tags: ["State Encryption", "Native State Encryption", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-378",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State Encryption at Rest and Key Rotation: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates State Encryption to protect sensitive database passwords and private keys stored in Terraform state with customer-managed cryptographic keys and automated key rotation.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Configuring native state encryption and key rotation in modern Terraform is under consideration.",
    options: [
      { id: 'A', text: "Configure the native `encryption {}` block in Terraform configuration with KMS key providers and method configurations." },
      { id: 'B', text: "Encode the state file with base64 and assume it is cryptographically secure." },
      { id: 'C', text: "Commit the state file to private GitHub repositories with no encryption." },
      { id: 'D', text: "Disable state persistence to avoid storing secrets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the native `encryption {}` block in Terraform configuration with KMS key providers and method configurations. Terraform 1.4+ introduced native state encryption configurations. Defining an `encryption {}` block in the root module enables client-side encryption of state files and plan files using cloud KMS keys, ensuring secrets remain encrypted even before being transmitted to the backend.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/v1.4.x/encryption",
    tags: ["State Encryption", "Native State Encryption", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-379",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State Encryption at Rest and Key Rotation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates State Encryption to protect sensitive database passwords and private keys stored in Terraform state with customer-managed cryptographic keys and automated key rotation.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Configuring native state encryption and key rotation in modern Terraform is under consideration.",
    options: [
      { id: 'A', text: "Configure the native `encryption {}` block in Terraform configuration with KMS key providers and method configurations." },
      { id: 'B', text: "Encode the state file with base64 and assume it is cryptographically secure." },
      { id: 'C', text: "Commit the state file to private GitHub repositories with no encryption." },
      { id: 'D', text: "Disable state persistence to avoid storing secrets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the native `encryption {}` block in Terraform configuration with KMS key providers and method configurations. Terraform 1.4+ introduced native state encryption configurations. Defining an `encryption {}` block in the root module enables client-side encryption of state files and plan files using cloud KMS keys, ensuring secrets remain encrypted even before being transmitted to the backend.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/v1.4.x/encryption",
    tags: ["State Encryption", "Native State Encryption", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-380",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State Encryption at Rest and Key Rotation: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates State Encryption to protect sensitive database passwords and private keys stored in Terraform state with customer-managed cryptographic keys and automated key rotation.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Configuring native state encryption and key rotation in modern Terraform is under consideration.",
    options: [
      { id: 'A', text: "Configure the native `encryption {}` block in Terraform configuration with KMS key providers and method configurations." },
      { id: 'B', text: "Encode the state file with base64 and assume it is cryptographically secure." },
      { id: 'C', text: "Commit the state file to private GitHub repositories with no encryption." },
      { id: 'D', text: "Disable state persistence to avoid storing secrets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the native `encryption {}` block in Terraform configuration with KMS key providers and method configurations. Terraform 1.4+ introduced native state encryption configurations. Defining an `encryption {}` block in the root module enables client-side encryption of state files and plan files using cloud KMS keys, ensuring secrets remain encrypted even before being transmitted to the backend.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/v1.4.x/encryption",
    tags: ["State Encryption", "Native State Encryption", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-381",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State File Disaster Recovery: Pull, Edit, and Push: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates State Disaster Recovery to repair an edge-case state corruption issue in a remote backend by safely downloading the raw state JSON and pushing the corrected file.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Safely downloading, inspecting, and pushing state with terraform state pull and push is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform state pull &gt; state.json`, make precise modifications, increment the serial number, and upload via `terraform state push state.json`." },
      { id: 'B', text: "Directly overwrite the remote S3 object using AWS CLI s3 cp without serial verification." },
      { id: 'C', text: "Delete the state file and rebuild all infrastructure from memory." },
      { id: 'D', text: "Execute `terraform destroy -force`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform state pull &gt; state.json`, make precise modifications, increment the serial number, and upload via `terraform state push state.json`. `terraform state pull` safely streams remote state to stdout, preserving formatting. If manual surgical repairs are necessary, updating the state and running `terraform state push` performs sanity checks and validates the state serial number, preventing accidental overwrites of newer state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/pull",
    tags: ["State Disaster Recovery", "state pull and push", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-382",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State File Disaster Recovery: Pull, Edit, and Push: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates State Disaster Recovery to repair an edge-case state corruption issue in a remote backend by safely downloading the raw state JSON and pushing the corrected file.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Safely downloading, inspecting, and pushing state with terraform state pull and push is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform state pull &gt; state.json`, make precise modifications, increment the serial number, and upload via `terraform state push state.json`." },
      { id: 'B', text: "Directly overwrite the remote S3 object using AWS CLI s3 cp without serial verification." },
      { id: 'C', text: "Delete the state file and rebuild all infrastructure from memory." },
      { id: 'D', text: "Execute `terraform destroy -force`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform state pull &gt; state.json`, make precise modifications, increment the serial number, and upload via `terraform state push state.json`. `terraform state pull` safely streams remote state to stdout, preserving formatting. If manual surgical repairs are necessary, updating the state and running `terraform state push` performs sanity checks and validates the state serial number, preventing accidental overwrites of newer state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/pull",
    tags: ["State Disaster Recovery", "state pull and push", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-383",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State File Disaster Recovery: Pull, Edit, and Push: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates State Disaster Recovery to repair an edge-case state corruption issue in a remote backend by safely downloading the raw state JSON and pushing the corrected file.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Safely downloading, inspecting, and pushing state with terraform state pull and push is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform state pull &gt; state.json`, make precise modifications, increment the serial number, and upload via `terraform state push state.json`." },
      { id: 'B', text: "Directly overwrite the remote S3 object using AWS CLI s3 cp without serial verification." },
      { id: 'C', text: "Delete the state file and rebuild all infrastructure from memory." },
      { id: 'D', text: "Execute `terraform destroy -force`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform state pull &gt; state.json`, make precise modifications, increment the serial number, and upload via `terraform state push state.json`. `terraform state pull` safely streams remote state to stdout, preserving formatting. If manual surgical repairs are necessary, updating the state and running `terraform state push` performs sanity checks and validates the state serial number, preventing accidental overwrites of newer state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/pull",
    tags: ["State Disaster Recovery", "state pull and push", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-384",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State File Disaster Recovery: Pull, Edit, and Push: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates State Disaster Recovery to repair an edge-case state corruption issue in a remote backend by safely downloading the raw state JSON and pushing the corrected file.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Safely downloading, inspecting, and pushing state with terraform state pull and push is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform state pull &gt; state.json`, make precise modifications, increment the serial number, and upload via `terraform state push state.json`." },
      { id: 'B', text: "Directly overwrite the remote S3 object using AWS CLI s3 cp without serial verification." },
      { id: 'C', text: "Delete the state file and rebuild all infrastructure from memory." },
      { id: 'D', text: "Execute `terraform destroy -force`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform state pull &gt; state.json`, make precise modifications, increment the serial number, and upload via `terraform state push state.json`. `terraform state pull` safely streams remote state to stdout, preserving formatting. If manual surgical repairs are necessary, updating the state and running `terraform state push` performs sanity checks and validates the state serial number, preventing accidental overwrites of newer state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/pull",
    tags: ["State Disaster Recovery", "state pull and push", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-385",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State File Disaster Recovery: Pull, Edit, and Push: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates State Disaster Recovery to repair an edge-case state corruption issue in a remote backend by safely downloading the raw state JSON and pushing the corrected file.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Safely downloading, inspecting, and pushing state with terraform state pull and push is under consideration.",
    options: [
      { id: 'A', text: "Run `terraform state pull &gt; state.json`, make precise modifications, increment the serial number, and upload via `terraform state push state.json`." },
      { id: 'B', text: "Directly overwrite the remote S3 object using AWS CLI s3 cp without serial verification." },
      { id: 'C', text: "Delete the state file and rebuild all infrastructure from memory." },
      { id: 'D', text: "Execute `terraform destroy -force`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform state pull &gt; state.json`, make precise modifications, increment the serial number, and upload via `terraform state push state.json`. `terraform state pull` safely streams remote state to stdout, preserving formatting. If manual surgical repairs are necessary, updating the state and running `terraform state push` performs sanity checks and validates the state serial number, preventing accidental overwrites of newer state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/pull",
    tags: ["State Disaster Recovery", "state pull and push", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-386",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Splitting Large State Files into Micro-States: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates State Architecture to improve plan execution speed and eliminate lock contention across a team by decomposing a 5,000-resource state file.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Decomposing monolithic state files into smaller, decoupled state domains is under consideration.",
    options: [
      { id: 'A', text: "Split the monolithic configuration into multiple smaller root modules (networking, compute, data) and connect them via `terraform_remote_state`." },
      { id: 'B', text: "Increase the timeout of `terraform apply` to 24 hours." },
      { id: 'C', text: "Run `terraform apply` with `-parallelism=500` to overwhelm cloud provider rate limits." },
      { id: 'D', text: "Disable state locking to allow simultaneous runs on the monolith." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Split the monolithic configuration into multiple smaller root modules (networking, compute, data) and connect them via `terraform_remote_state`. Large state files cause slow plan generation, API throttling from cloud providers, and severe lock contention among engineers. Decomposing infrastructure into smaller, decoupled state domains isolates lifecycles, accelerates execution, and shrinks failure domains.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["State Architecture", "State Decomposition", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-387",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Splitting Large State Files into Micro-States: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates State Architecture to improve plan execution speed and eliminate lock contention across a team by decomposing a 5,000-resource state file.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Decomposing monolithic state files into smaller, decoupled state domains is under consideration.",
    options: [
      { id: 'A', text: "Split the monolithic configuration into multiple smaller root modules (networking, compute, data) and connect them via `terraform_remote_state`." },
      { id: 'B', text: "Increase the timeout of `terraform apply` to 24 hours." },
      { id: 'C', text: "Run `terraform apply` with `-parallelism=500` to overwhelm cloud provider rate limits." },
      { id: 'D', text: "Disable state locking to allow simultaneous runs on the monolith." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Split the monolithic configuration into multiple smaller root modules (networking, compute, data) and connect them via `terraform_remote_state`. Large state files cause slow plan generation, API throttling from cloud providers, and severe lock contention among engineers. Decomposing infrastructure into smaller, decoupled state domains isolates lifecycles, accelerates execution, and shrinks failure domains.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["State Architecture", "State Decomposition", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-388",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Splitting Large State Files into Micro-States: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates State Architecture to improve plan execution speed and eliminate lock contention across a team by decomposing a 5,000-resource state file.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Decomposing monolithic state files into smaller, decoupled state domains is under consideration.",
    options: [
      { id: 'A', text: "Split the monolithic configuration into multiple smaller root modules (networking, compute, data) and connect them via `terraform_remote_state`." },
      { id: 'B', text: "Increase the timeout of `terraform apply` to 24 hours." },
      { id: 'C', text: "Run `terraform apply` with `-parallelism=500` to overwhelm cloud provider rate limits." },
      { id: 'D', text: "Disable state locking to allow simultaneous runs on the monolith." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Split the monolithic configuration into multiple smaller root modules (networking, compute, data) and connect them via `terraform_remote_state`. Large state files cause slow plan generation, API throttling from cloud providers, and severe lock contention among engineers. Decomposing infrastructure into smaller, decoupled state domains isolates lifecycles, accelerates execution, and shrinks failure domains.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["State Architecture", "State Decomposition", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-389",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Splitting Large State Files into Micro-States: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates State Architecture to improve plan execution speed and eliminate lock contention across a team by decomposing a 5,000-resource state file.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Decomposing monolithic state files into smaller, decoupled state domains is under consideration.",
    options: [
      { id: 'A', text: "Split the monolithic configuration into multiple smaller root modules (networking, compute, data) and connect them via `terraform_remote_state`." },
      { id: 'B', text: "Increase the timeout of `terraform apply` to 24 hours." },
      { id: 'C', text: "Run `terraform apply` with `-parallelism=500` to overwhelm cloud provider rate limits." },
      { id: 'D', text: "Disable state locking to allow simultaneous runs on the monolith." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Split the monolithic configuration into multiple smaller root modules (networking, compute, data) and connect them via `terraform_remote_state`. Large state files cause slow plan generation, API throttling from cloud providers, and severe lock contention among engineers. Decomposing infrastructure into smaller, decoupled state domains isolates lifecycles, accelerates execution, and shrinks failure domains.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["State Architecture", "State Decomposition", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-390",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Splitting Large State Files into Micro-States: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates State Architecture to improve plan execution speed and eliminate lock contention across a team by decomposing a 5,000-resource state file.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Decomposing monolithic state files into smaller, decoupled state domains is under consideration.",
    options: [
      { id: 'A', text: "Split the monolithic configuration into multiple smaller root modules (networking, compute, data) and connect them via `terraform_remote_state`." },
      { id: 'B', text: "Increase the timeout of `terraform apply` to 24 hours." },
      { id: 'C', text: "Run `terraform apply` with `-parallelism=500` to overwhelm cloud provider rate limits." },
      { id: 'D', text: "Disable state locking to allow simultaneous runs on the monolith." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Split the monolithic configuration into multiple smaller root modules (networking, compute, data) and connect them via `terraform_remote_state`. Large state files cause slow plan generation, API throttling from cloud providers, and severe lock contention among engineers. Decomposing infrastructure into smaller, decoupled state domains isolates lifecycles, accelerates execution, and shrinks failure domains.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["State Architecture", "State Decomposition", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-391",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State File Scrubbing and Sensitive Data Sanitization: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates State Sanitization to cleanse an accidentally exposed production database credential recorded in historical remote state bucket versions.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Identifying and removing sensitive values or compromised credentials from state history is under consideration.",
    options: [
      { id: 'A', text: "Rotate the credential in the database immediately, update Terraform code, apply changes, and purge historical state versions in S3." },
      { id: 'B', text: "Change the database username and leave the old password active." },
      { id: 'C', text: "Delete the Terraform codebase and stop using infrastructure as code." },
      { id: 'D', text: "Rely on GitHub commit deletion to purge remote S3 objects." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rotate the credential in the database immediately, update Terraform code, apply changes, and purge historical state versions in S3. Because cloud storage backends (S3, GCS, Azure Blob) often retain object versions, an exposed secret remains in historical state snapshots even after being removed from the current state. Complete remediation requires rotating the secret and purging historical state versions from storage.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["State Sanitization", "State Sanitization", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-392",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State File Scrubbing and Sensitive Data Sanitization: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates State Sanitization to cleanse an accidentally exposed production database credential recorded in historical remote state bucket versions.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Identifying and removing sensitive values or compromised credentials from state history is under consideration.",
    options: [
      { id: 'A', text: "Rotate the credential in the database immediately, update Terraform code, apply changes, and purge historical state versions in S3." },
      { id: 'B', text: "Change the database username and leave the old password active." },
      { id: 'C', text: "Delete the Terraform codebase and stop using infrastructure as code." },
      { id: 'D', text: "Rely on GitHub commit deletion to purge remote S3 objects." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rotate the credential in the database immediately, update Terraform code, apply changes, and purge historical state versions in S3. Because cloud storage backends (S3, GCS, Azure Blob) often retain object versions, an exposed secret remains in historical state snapshots even after being removed from the current state. Complete remediation requires rotating the secret and purging historical state versions from storage.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["State Sanitization", "State Sanitization", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-393",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State File Scrubbing and Sensitive Data Sanitization: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates State Sanitization to cleanse an accidentally exposed production database credential recorded in historical remote state bucket versions.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Identifying and removing sensitive values or compromised credentials from state history is under consideration.",
    options: [
      { id: 'A', text: "Rotate the credential in the database immediately, update Terraform code, apply changes, and purge historical state versions in S3." },
      { id: 'B', text: "Change the database username and leave the old password active." },
      { id: 'C', text: "Delete the Terraform codebase and stop using infrastructure as code." },
      { id: 'D', text: "Rely on GitHub commit deletion to purge remote S3 objects." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rotate the credential in the database immediately, update Terraform code, apply changes, and purge historical state versions in S3. Because cloud storage backends (S3, GCS, Azure Blob) often retain object versions, an exposed secret remains in historical state snapshots even after being removed from the current state. Complete remediation requires rotating the secret and purging historical state versions from storage.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["State Sanitization", "State Sanitization", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-394",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State File Scrubbing and Sensitive Data Sanitization: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates State Sanitization to cleanse an accidentally exposed production database credential recorded in historical remote state bucket versions.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Identifying and removing sensitive values or compromised credentials from state history is under consideration.",
    options: [
      { id: 'A', text: "Rotate the credential in the database immediately, update Terraform code, apply changes, and purge historical state versions in S3." },
      { id: 'B', text: "Change the database username and leave the old password active." },
      { id: 'C', text: "Delete the Terraform codebase and stop using infrastructure as code." },
      { id: 'D', text: "Rely on GitHub commit deletion to purge remote S3 objects." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rotate the credential in the database immediately, update Terraform code, apply changes, and purge historical state versions in S3. Because cloud storage backends (S3, GCS, Azure Blob) often retain object versions, an exposed secret remains in historical state snapshots even after being removed from the current state. Complete remediation requires rotating the secret and purging historical state versions from storage.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["State Sanitization", "State Sanitization", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-395",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State File Scrubbing and Sensitive Data Sanitization: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates State Sanitization to cleanse an accidentally exposed production database credential recorded in historical remote state bucket versions.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Identifying and removing sensitive values or compromised credentials from state history is under consideration.",
    options: [
      { id: 'A', text: "Rotate the credential in the database immediately, update Terraform code, apply changes, and purge historical state versions in S3." },
      { id: 'B', text: "Change the database username and leave the old password active." },
      { id: 'C', text: "Delete the Terraform codebase and stop using infrastructure as code." },
      { id: 'D', text: "Rely on GitHub commit deletion to purge remote S3 objects." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rotate the credential in the database immediately, update Terraform code, apply changes, and purge historical state versions in S3. Because cloud storage backends (S3, GCS, Azure Blob) often retain object versions, an exposed secret remains in historical state snapshots even after being removed from the current state. Complete remediation requires rotating the secret and purging historical state versions from storage.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["State Sanitization", "State Sanitization", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-396",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Targeted Planning and Applying (-target) Anti-Patterns: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Targeting Risks to understand the operational risks of using `terraform apply -target=resource` for everyday infrastructure updates.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives? Understanding risks, state divergence, and appropriate use cases of -target is under consideration.",
    options: [
      { id: 'A', text: "`-target` can introduce state divergence, violate hidden dependencies, and lead to unintended configuration drift; it is intended only for emergency recovery." },
      { id: 'B', text: "`-target` is the recommended way to deploy routine production updates daily." },
      { id: 'C', text: "`-target` automatically updates all dependent resources in the graph." },
      { id: 'D', text: "`-target` permanently deletes all un-targeted resources from the state file." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`-target` can introduce state divergence, violate hidden dependencies, and lead to unintended configuration drift; it is intended only for emergency recovery. Using `-target` isolates execution to a specific resource, bypassing the rest of the dependency graph. While useful for bootstrapping or recovering from broken dependencies, routine use creates state divergence and hidden dependency errors; normal deployments should always evaluate the full configuration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#targeting-resources",
    tags: ["Targeting Risks", "Targeting Risks", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-397",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Targeted Planning and Applying (-target) Anti-Patterns: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Targeting Risks to understand the operational risks of using `terraform apply -target=resource` for everyday infrastructure updates.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift? Understanding risks, state divergence, and appropriate use cases of -target is under consideration.",
    options: [
      { id: 'A', text: "`-target` can introduce state divergence, violate hidden dependencies, and lead to unintended configuration drift; it is intended only for emergency recovery." },
      { id: 'B', text: "`-target` is the recommended way to deploy routine production updates daily." },
      { id: 'C', text: "`-target` automatically updates all dependent resources in the graph." },
      { id: 'D', text: "`-target` permanently deletes all un-targeted resources from the state file." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`-target` can introduce state divergence, violate hidden dependencies, and lead to unintended configuration drift; it is intended only for emergency recovery. Using `-target` isolates execution to a specific resource, bypassing the rest of the dependency graph. While useful for bootstrapping or recovering from broken dependencies, routine use creates state divergence and hidden dependency errors; normal deployments should always evaluate the full configuration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#targeting-resources",
    tags: ["Targeting Risks", "Targeting Risks", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-398",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Targeted Planning and Applying (-target) Anti-Patterns: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Targeting Risks to understand the operational risks of using `terraform apply -target=resource` for everyday infrastructure updates.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls? Understanding risks, state divergence, and appropriate use cases of -target is under consideration.",
    options: [
      { id: 'A', text: "`-target` can introduce state divergence, violate hidden dependencies, and lead to unintended configuration drift; it is intended only for emergency recovery." },
      { id: 'B', text: "`-target` is the recommended way to deploy routine production updates daily." },
      { id: 'C', text: "`-target` automatically updates all dependent resources in the graph." },
      { id: 'D', text: "`-target` permanently deletes all un-targeted resources from the state file." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`-target` can introduce state divergence, violate hidden dependencies, and lead to unintended configuration drift; it is intended only for emergency recovery. Using `-target` isolates execution to a specific resource, bypassing the rest of the dependency graph. While useful for bootstrapping or recovering from broken dependencies, routine use creates state divergence and hidden dependency errors; normal deployments should always evaluate the full configuration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#targeting-resources",
    tags: ["Targeting Risks", "Targeting Risks", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-399",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Targeted Planning and Applying (-target) Anti-Patterns: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Targeting Risks to understand the operational risks of using `terraform apply -target=resource` for everyday infrastructure updates.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction? Understanding risks, state divergence, and appropriate use cases of -target is under consideration.",
    options: [
      { id: 'A', text: "`-target` can introduce state divergence, violate hidden dependencies, and lead to unintended configuration drift; it is intended only for emergency recovery." },
      { id: 'B', text: "`-target` is the recommended way to deploy routine production updates daily." },
      { id: 'C', text: "`-target` automatically updates all dependent resources in the graph." },
      { id: 'D', text: "`-target` permanently deletes all un-targeted resources from the state file." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`-target` can introduce state divergence, violate hidden dependencies, and lead to unintended configuration drift; it is intended only for emergency recovery. Using `-target` isolates execution to a specific resource, bypassing the rest of the dependency graph. While useful for bootstrapping or recovering from broken dependencies, routine use creates state divergence and hidden dependency errors; normal deployments should always evaluate the full configuration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#targeting-resources",
    tags: ["Targeting Risks", "Targeting Risks", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-400",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Targeted Planning and Applying (-target) Anti-Patterns: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Targeting Risks to understand the operational risks of using `terraform apply -target=resource` for everyday infrastructure updates.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Understanding risks, state divergence, and appropriate use cases of -target is under consideration.",
    options: [
      { id: 'A', text: "`-target` can introduce state divergence, violate hidden dependencies, and lead to unintended configuration drift; it is intended only for emergency recovery." },
      { id: 'B', text: "`-target` is the recommended way to deploy routine production updates daily." },
      { id: 'C', text: "`-target` automatically updates all dependent resources in the graph." },
      { id: 'D', text: "`-target` permanently deletes all un-targeted resources from the state file." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`-target` can introduce state divergence, violate hidden dependencies, and lead to unintended configuration drift; it is intended only for emergency recovery. Using `-target` isolates execution to a specific resource, bypassing the rest of the dependency graph. While useful for bootstrapping or recovering from broken dependencies, routine use creates state divergence and hidden dependency errors; normal deployments should always evaluate the full configuration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#targeting-resources",
    tags: ["Targeting Risks", "Targeting Risks", "Resilience Failure"]
  }
];

export default HASHICORP_TFP_QUESTIONS_16;
