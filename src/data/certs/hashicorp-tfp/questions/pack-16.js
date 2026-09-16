export const HASHICORP_TFP_QUESTIONS_16 = [
  {
    id: "hashicorp-tfp-376",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State Encryption at Rest and Key Rotation: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates State Encryption to protect sensitive database passwords and private keys stored in Terraform state with customer-managed cryptographic keys and automated key rotation.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Configure the native `encryption {}` block with a KMS key provider and method." },
      { id: 'B', text: "Configure the backend's own server-side encryption with a customer-managed key." },
      { id: 'C', text: "Configure the backend to write to a private bucket with versioning switched on." },
      { id: 'D', text: "Configure `sensitive = true` on the variables so the values are absent from state." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the native `encryption {}` block in Terraform configuration with KMS key providers and method configurations. Terraform 1.4+ introduced native state encryption configurations. Defining an `encryption {}` block in the root module enables client-side encryption of state files and plan files using cloud KMS keys, ensuring secrets remain encrypted even before being transmitted to the backend.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/v1.4.x/encryption",
    tags: ["State Encryption","Native State Encryption","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-377",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State Encryption at Rest and Key Rotation: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates State Encryption to protect sensitive database passwords and private keys stored in Terraform state with customer-managed cryptographic keys and automated key rotation.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Configure `sensitive = true` on the variables so the values are absent from state." },
      { id: 'B', text: "Configure the backend to write to a private bucket with versioning switched on." },
      { id: 'C', text: "Configure the backend's own server-side encryption with a customer-managed key." },
      { id: 'D', text: "Configure the native `encryption {}` block with a KMS key provider and method." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure the native `encryption {}` block in Terraform configuration with KMS key providers and method configurations. Terraform 1.4+ introduced native state encryption configurations. Defining an `encryption {}` block in the root module enables client-side encryption of state files and plan files using cloud KMS keys, ensuring secrets remain encrypted even before being transmitted to the backend.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/v1.4.x/encryption",
    tags: ["State Encryption","Native State Encryption","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-378",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State Encryption at Rest and Key Rotation: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates State Encryption to protect sensitive database passwords and private keys stored in Terraform state with customer-managed cryptographic keys and automated key rotation.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Configure the native `encryption {}` block with a KMS key provider and method." },
      { id: 'B', text: "Configure the backend's own server-side encryption with a customer-managed key." },
      { id: 'C', text: "Configure the backend to write to a private bucket with versioning switched on." },
      { id: 'D', text: "Configure `sensitive = true` on the variables so the values are absent from state." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the native `encryption {}` block in Terraform configuration with KMS key providers and method configurations. Terraform 1.4+ introduced native state encryption configurations. Defining an `encryption {}` block in the root module enables client-side encryption of state files and plan files using cloud KMS keys, ensuring secrets remain encrypted even before being transmitted to the backend.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/v1.4.x/encryption",
    tags: ["State Encryption","Native State Encryption","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-379",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State Encryption at Rest and Key Rotation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates State Encryption to protect sensitive database passwords and private keys stored in Terraform state with customer-managed cryptographic keys and automated key rotation.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Configure the backend to write to a private bucket with versioning switched on." },
      { id: 'B', text: "Configure `sensitive = true` on the variables so the values are absent from state." },
      { id: 'C', text: "Configure the native `encryption {}` block with a KMS key provider and method." },
      { id: 'D', text: "Configure the backend's own server-side encryption with a customer-managed key." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure the native `encryption {}` block in Terraform configuration with KMS key providers and method configurations. Terraform 1.4+ introduced native state encryption configurations. Defining an `encryption {}` block in the root module enables client-side encryption of state files and plan files using cloud KMS keys, ensuring secrets remain encrypted even before being transmitted to the backend.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/v1.4.x/encryption",
    tags: ["State Encryption","Native State Encryption","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-380",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State Encryption at Rest and Key Rotation: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates State Encryption to protect sensitive database passwords and private keys stored in Terraform state with customer-managed cryptographic keys and automated key rotation.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Configure `sensitive = true` on the variables so the values are absent from state." },
      { id: 'B', text: "Configure the backend to write to a private bucket with versioning switched on." },
      { id: 'C', text: "Configure the backend's own server-side encryption with a customer-managed key." },
      { id: 'D', text: "Configure the native `encryption {}` block with a KMS key provider and method." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure the native `encryption {}` block in Terraform configuration with KMS key providers and method configurations. Terraform 1.4+ introduced native state encryption configurations. Defining an `encryption {}` block in the root module enables client-side encryption of state files and plan files using cloud KMS keys, ensuring secrets remain encrypted even before being transmitted to the backend.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/v1.4.x/encryption",
    tags: ["State Encryption","Native State Encryption","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-381",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State File Disaster Recovery: Pull, Edit, and Push: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates State Disaster Recovery to repair an edge-case state corruption issue in a remote backend by safely downloading the raw state JSON and pushing the corrected file.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Overwrite the remote object with `aws s3 cp` after editing the downloaded copy." },
      { id: 'B', text: "Remove the resource with `terraform state rm` and import it again afterwards." },
      { id: 'C', text: "`terraform state pull`, edit, bump the serial, then `terraform state push` the file back." },
      { id: 'D', text: "Roll the bucket back to the previous object version and re-run the plan." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run `terraform state pull &gt; state.json`, make precise modifications, increment the serial number, and upload via `terraform state push state.json`. `terraform state pull` safely streams remote state to stdout, preserving formatting. If manual surgical repairs are necessary, updating the state and running `terraform state push` performs sanity checks and validates the state serial number, preventing accidental overwrites of newer state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/pull",
    tags: ["State Disaster Recovery","state pull and push","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-382",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State File Disaster Recovery: Pull, Edit, and Push: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates State Disaster Recovery to repair an edge-case state corruption issue in a remote backend by safely downloading the raw state JSON and pushing the corrected file.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "`terraform state pull`, edit, bump the serial, then `terraform state push` the file back." },
      { id: 'B', text: "Roll the bucket back to the previous object version and re-run the plan." },
      { id: 'C', text: "Overwrite the remote object with `aws s3 cp` after editing the downloaded copy." },
      { id: 'D', text: "Remove the resource with `terraform state rm` and import it again afterwards." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform state pull &gt; state.json`, make precise modifications, increment the serial number, and upload via `terraform state push state.json`. `terraform state pull` safely streams remote state to stdout, preserving formatting. If manual surgical repairs are necessary, updating the state and running `terraform state push` performs sanity checks and validates the state serial number, preventing accidental overwrites of newer state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/pull",
    tags: ["State Disaster Recovery","state pull and push","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-383",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State File Disaster Recovery: Pull, Edit, and Push: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates State Disaster Recovery to repair an edge-case state corruption issue in a remote backend by safely downloading the raw state JSON and pushing the corrected file.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "`terraform state pull`, edit, bump the serial, then `terraform state push` the file back." },
      { id: 'B', text: "Overwrite the remote object with `aws s3 cp` after editing the downloaded copy." },
      { id: 'C', text: "Remove the resource with `terraform state rm` and import it again afterwards." },
      { id: 'D', text: "Roll the bucket back to the previous object version and re-run the plan." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform state pull &gt; state.json`, make precise modifications, increment the serial number, and upload via `terraform state push state.json`. `terraform state pull` safely streams remote state to stdout, preserving formatting. If manual surgical repairs are necessary, updating the state and running `terraform state push` performs sanity checks and validates the state serial number, preventing accidental overwrites of newer state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/pull",
    tags: ["State Disaster Recovery","state pull and push","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-384",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State File Disaster Recovery: Pull, Edit, and Push: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates State Disaster Recovery to repair an edge-case state corruption issue in a remote backend by safely downloading the raw state JSON and pushing the corrected file.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Roll the bucket back to the previous object version and re-run the plan." },
      { id: 'B', text: "`terraform state pull`, edit, bump the serial, then `terraform state push` the file back." },
      { id: 'C', text: "Remove the resource with `terraform state rm` and import it again afterwards." },
      { id: 'D', text: "Overwrite the remote object with `aws s3 cp` after editing the downloaded copy." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run `terraform state pull &gt; state.json`, make precise modifications, increment the serial number, and upload via `terraform state push state.json`. `terraform state pull` safely streams remote state to stdout, preserving formatting. If manual surgical repairs are necessary, updating the state and running `terraform state push` performs sanity checks and validates the state serial number, preventing accidental overwrites of newer state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/pull",
    tags: ["State Disaster Recovery","state pull and push","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-385",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State File Disaster Recovery: Pull, Edit, and Push: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates State Disaster Recovery to repair an edge-case state corruption issue in a remote backend by safely downloading the raw state JSON and pushing the corrected file.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "`terraform state pull`, edit, bump the serial, then `terraform state push` the file back." },
      { id: 'B', text: "Overwrite the remote object with `aws s3 cp` after editing the downloaded copy." },
      { id: 'C', text: "Remove the resource with `terraform state rm` and import it again afterwards." },
      { id: 'D', text: "Roll the bucket back to the previous object version and re-run the plan." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `terraform state pull &gt; state.json`, make precise modifications, increment the serial number, and upload via `terraform state push state.json`. `terraform state pull` safely streams remote state to stdout, preserving formatting. If manual surgical repairs are necessary, updating the state and running `terraform state push` performs sanity checks and validates the state serial number, preventing accidental overwrites of newer state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/pull",
    tags: ["State Disaster Recovery","state pull and push","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-386",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Splitting Large State Files into Micro-States: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates State Architecture to improve plan execution speed and eliminate lock contention across a team by decomposing a 5,000-resource state file.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Split it into networking, compute and data root modules joined by `terraform_remote_state`." },
      { id: 'B', text: "Raise the apply timeout and the provider's own retry count so the run completes." },
      { id: 'C', text: "Raise `-parallelism` so more of the graph is applied in each pass of the run." },
      { id: 'D', text: "Split the configuration by workspace, with one workspace per environment tier." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Split the monolithic configuration into multiple smaller root modules (networking, compute, data) and connect them via `terraform_remote_state`. Large state files cause slow plan generation, API throttling from cloud providers, and severe lock contention among engineers. Decomposing infrastructure into smaller, decoupled state domains isolates lifecycles, accelerates execution, and shrinks failure domains.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["State Architecture","State Decomposition","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-387",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Splitting Large State Files into Micro-States: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates State Architecture to improve plan execution speed and eliminate lock contention across a team by decomposing a 5,000-resource state file.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Split it into networking, compute and data root modules joined by `terraform_remote_state`." },
      { id: 'B', text: "Raise the apply timeout and the provider's own retry count so the run completes." },
      { id: 'C', text: "Raise `-parallelism` so more of the graph is applied in each pass of the run." },
      { id: 'D', text: "Split the configuration by workspace, with one workspace per environment tier." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Split the monolithic configuration into multiple smaller root modules (networking, compute, data) and connect them via `terraform_remote_state`. Large state files cause slow plan generation, API throttling from cloud providers, and severe lock contention among engineers. Decomposing infrastructure into smaller, decoupled state domains isolates lifecycles, accelerates execution, and shrinks failure domains.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["State Architecture","State Decomposition","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-388",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Splitting Large State Files into Micro-States: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates State Architecture to improve plan execution speed and eliminate lock contention across a team by decomposing a 5,000-resource state file.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Split it into networking, compute and data root modules joined by `terraform_remote_state`." },
      { id: 'B', text: "Raise `-parallelism` so more of the graph is applied in each pass of the run." },
      { id: 'C', text: "Split the configuration by workspace, with one workspace per environment tier." },
      { id: 'D', text: "Raise the apply timeout and the provider's own retry count so the run completes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Split the monolithic configuration into multiple smaller root modules (networking, compute, data) and connect them via `terraform_remote_state`. Large state files cause slow plan generation, API throttling from cloud providers, and severe lock contention among engineers. Decomposing infrastructure into smaller, decoupled state domains isolates lifecycles, accelerates execution, and shrinks failure domains.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["State Architecture","State Decomposition","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-389",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Splitting Large State Files into Micro-States: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates State Architecture to improve plan execution speed and eliminate lock contention across a team by decomposing a 5,000-resource state file.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Split the configuration by workspace, with one workspace per environment tier." },
      { id: 'B', text: "Split it into networking, compute and data root modules joined by `terraform_remote_state`." },
      { id: 'C', text: "Raise `-parallelism` so more of the graph is applied in each pass of the run." },
      { id: 'D', text: "Raise the apply timeout and the provider's own retry count so the run completes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Split the monolithic configuration into multiple smaller root modules (networking, compute, data) and connect them via `terraform_remote_state`. Large state files cause slow plan generation, API throttling from cloud providers, and severe lock contention among engineers. Decomposing infrastructure into smaller, decoupled state domains isolates lifecycles, accelerates execution, and shrinks failure domains.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["State Architecture","State Decomposition","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-390",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Splitting Large State Files into Micro-States: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates State Architecture to improve plan execution speed and eliminate lock contention across a team by decomposing a 5,000-resource state file.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Split it into networking, compute and data root modules joined by `terraform_remote_state`." },
      { id: 'B', text: "Raise the apply timeout and the provider's own retry count so the run completes." },
      { id: 'C', text: "Raise `-parallelism` so more of the graph is applied in each pass of the run." },
      { id: 'D', text: "Split the configuration by workspace, with one workspace per environment tier." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Split the monolithic configuration into multiple smaller root modules (networking, compute, data) and connect them via `terraform_remote_state`. Large state files cause slow plan generation, API throttling from cloud providers, and severe lock contention among engineers. Decomposing infrastructure into smaller, decoupled state domains isolates lifecycles, accelerates execution, and shrinks failure domains.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["State Architecture","State Decomposition","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-391",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State File Scrubbing and Sensitive Data Sanitization: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates State Sanitization to cleanse an accidentally exposed production database credential recorded in historical remote state bucket versions.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Rotate the credential at the database, update the configuration, apply, and purge the old state versions." },
      { id: 'B', text: "Remove the value from the repository's history, which also clears the remote state copies." },
      { id: 'C', text: "Move the value into a `sensitive = true` variable, which redacts it in the stored state." },
      { id: 'D', text: "Move the resource out of Terraform and manage that credential outside the configuration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rotate the credential in the database immediately, update Terraform code, apply changes, and purge historical state versions in S3. Because cloud storage backends (S3, GCS, Azure Blob) often retain object versions, an exposed secret remains in historical state snapshots even after being removed from the current state. Complete remediation requires rotating the secret and purging historical state versions from storage.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["State Sanitization","State Sanitization","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-392",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State File Scrubbing and Sensitive Data Sanitization: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates State Sanitization to cleanse an accidentally exposed production database credential recorded in historical remote state bucket versions.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "Move the value into a `sensitive = true` variable, which redacts it in the stored state." },
      { id: 'B', text: "Rotate the credential at the database, update the configuration, apply, and purge the old state versions." },
      { id: 'C', text: "Remove the value from the repository's history, which also clears the remote state copies." },
      { id: 'D', text: "Move the resource out of Terraform and manage that credential outside the configuration." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Rotate the credential in the database immediately, update Terraform code, apply changes, and purge historical state versions in S3. Because cloud storage backends (S3, GCS, Azure Blob) often retain object versions, an exposed secret remains in historical state snapshots even after being removed from the current state. Complete remediation requires rotating the secret and purging historical state versions from storage.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["State Sanitization","State Sanitization","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-393",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State File Scrubbing and Sensitive Data Sanitization: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates State Sanitization to cleanse an accidentally exposed production database credential recorded in historical remote state bucket versions.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "Rotate the credential at the database, update the configuration, apply, and purge the old state versions." },
      { id: 'B', text: "Move the value into a `sensitive = true` variable, which redacts it in the stored state." },
      { id: 'C', text: "Move the resource out of Terraform and manage that credential outside the configuration." },
      { id: 'D', text: "Remove the value from the repository's history, which also clears the remote state copies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rotate the credential in the database immediately, update Terraform code, apply changes, and purge historical state versions in S3. Because cloud storage backends (S3, GCS, Azure Blob) often retain object versions, an exposed secret remains in historical state snapshots even after being removed from the current state. Complete remediation requires rotating the secret and purging historical state versions from storage.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["State Sanitization","State Sanitization","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-394",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State File Scrubbing and Sensitive Data Sanitization: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates State Sanitization to cleanse an accidentally exposed production database credential recorded in historical remote state bucket versions.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "Rotate the credential at the database, update the configuration, apply, and purge the old state versions." },
      { id: 'B', text: "Move the value into a `sensitive = true` variable, which redacts it in the stored state." },
      { id: 'C', text: "Move the resource out of Terraform and manage that credential outside the configuration." },
      { id: 'D', text: "Remove the value from the repository's history, which also clears the remote state copies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rotate the credential in the database immediately, update Terraform code, apply changes, and purge historical state versions in S3. Because cloud storage backends (S3, GCS, Azure Blob) often retain object versions, an exposed secret remains in historical state snapshots even after being removed from the current state. Complete remediation requires rotating the secret and purging historical state versions from storage.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["State Sanitization","State Sanitization","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-395",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "State File Scrubbing and Sensitive Data Sanitization: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates State Sanitization to cleanse an accidentally exposed production database credential recorded in historical remote state bucket versions.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Move the resource out of Terraform and manage that credential outside the configuration." },
      { id: 'B', text: "Rotate the credential at the database, update the configuration, apply, and purge the old state versions." },
      { id: 'C', text: "Move the value into a `sensitive = true` variable, which redacts it in the stored state." },
      { id: 'D', text: "Remove the value from the repository's history, which also clears the remote state copies." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Rotate the credential in the database immediately, update Terraform code, apply changes, and purge historical state versions in S3. Because cloud storage backends (S3, GCS, Azure Blob) often retain object versions, an exposed secret remains in historical state snapshots even after being removed from the current state. Complete remediation requires rotating the secret and purging historical state versions from storage.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["State Sanitization","State Sanitization","Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-396",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Targeted Planning and Applying (-target) Anti-Patterns: Dr Failover",
    scenario: "A principal cloud platform architect is establishing high-availability standards, automated disaster recovery procedures, and infrastructure resilience frameworks across multi-region environments using Terraform. The Terraform professional evaluates Targeting Risks to understand the operational risks of using `terraform apply -target=resource` for everyday infrastructure updates.",
    question: "Which architectural approach or advanced configuration satisfies these multi-region recovery and resilience objectives?",
    options: [
      { id: 'A', text: "`-target` can leave state divergent and skip hidden dependencies; it is for emergency recovery only." },
      { id: 'B', text: "`-target` is the supported way to apply a routine change to one part of a large configuration." },
      { id: 'C', text: "`-target` applies the named resource and every resource that depends on it in the graph." },
      { id: 'D', text: "`-target` removes the untargeted resources from state so the next plan re-imports them." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`-target` can introduce state divergence, violate hidden dependencies, and lead to unintended configuration drift; it is intended only for emergency recovery. Using `-target` isolates execution to a specific resource, bypassing the rest of the dependency graph. While useful for bootstrapping or recovering from broken dependencies, routine use creates state divergence and hidden dependency errors; normal deployments should always evaluate the full configuration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#targeting-resources",
    tags: ["Targeting Risks","Targeting Risks","Dr Failover"]
  },
  {
    id: "hashicorp-tfp-397",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Targeted Planning and Applying (-target) Anti-Patterns: High Load Scale",
    scenario: "A complex enterprise multi-cloud platform experiences massive scaling requirements and requires modular, automated, and performant infrastructure provisioning across dozens of teams. The Terraform professional evaluates Targeting Risks to understand the operational risks of using `terraform apply -target=resource` for everyday infrastructure updates.",
    question: "Which architectural pattern or Terraform capability manages this scale effectively while preventing dependency bottlenecks and configuration drift?",
    options: [
      { id: 'A', text: "`-target` applies the named resource and every resource that depends on it in the graph." },
      { id: 'B', text: "`-target` can leave state divergent and skip hidden dependencies; it is for emergency recovery only." },
      { id: 'C', text: "`-target` is the supported way to apply a routine change to one part of a large configuration." },
      { id: 'D', text: "`-target` removes the untargeted resources from state so the next plan re-imports them." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`-target` can introduce state divergence, violate hidden dependencies, and lead to unintended configuration drift; it is intended only for emergency recovery. Using `-target` isolates execution to a specific resource, bypassing the rest of the dependency graph. While useful for bootstrapping or recovering from broken dependencies, routine use creates state divergence and hidden dependency errors; normal deployments should always evaluate the full configuration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#targeting-resources",
    tags: ["Targeting Risks","Targeting Risks","High Load Scale"]
  },
  {
    id: "hashicorp-tfp-398",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Targeted Planning and Applying (-target) Anti-Patterns: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic state protection, policy-as-code enforcement, and automated governance across all enterprise Terraform delivery pipelines. The Terraform professional evaluates Targeting Risks to understand the operational risks of using `terraform apply -target=resource` for everyday infrastructure updates.",
    question: "Which solution implements these mandatory infrastructure as code security and governance controls?",
    options: [
      { id: 'A', text: "`-target` can leave state divergent and skip hidden dependencies; it is for emergency recovery only." },
      { id: 'B', text: "`-target` applies the named resource and every resource that depends on it in the graph." },
      { id: 'C', text: "`-target` removes the untargeted resources from state so the next plan re-imports them." },
      { id: 'D', text: "`-target` is the supported way to apply a routine change to one part of a large configuration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`-target` can introduce state divergence, violate hidden dependencies, and lead to unintended configuration drift; it is intended only for emergency recovery. Using `-target` isolates execution to a specific resource, bypassing the rest of the dependency graph. While useful for bootstrapping or recovering from broken dependencies, routine use creates state divergence and hidden dependency errors; normal deployments should always evaluate the full configuration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#targeting-resources",
    tags: ["Targeting Risks","Targeting Risks","Security Compliance"]
  },
  {
    id: "hashicorp-tfp-399",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Targeted Planning and Applying (-target) Anti-Patterns: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises infrastructure and refactoring monolithic legacy deployments into modular, cloud-native architectures using advanced Terraform practices. The Terraform professional evaluates Targeting Risks to understand the operational risks of using `terraform apply -target=resource` for everyday infrastructure updates.",
    question: "Which practice or platform feature enables the engineering team to modernize provisioning workflows with minimal operational friction?",
    options: [
      { id: 'A', text: "`-target` removes the untargeted resources from state so the next plan re-imports them." },
      { id: 'B', text: "`-target` applies the named resource and every resource that depends on it in the graph." },
      { id: 'C', text: "`-target` is the supported way to apply a routine change to one part of a large configuration." },
      { id: 'D', text: "`-target` can leave state divergent and skip hidden dependencies; it is for emergency recovery only." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`-target` can introduce state divergence, violate hidden dependencies, and lead to unintended configuration drift; it is intended only for emergency recovery. Using `-target` isolates execution to a specific resource, bypassing the rest of the dependency graph. While useful for bootstrapping or recovering from broken dependencies, routine use creates state divergence and hidden dependency errors; normal deployments should always evaluate the full configuration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#targeting-resources",
    tags: ["Targeting Risks","Targeting Risks","Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-400",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Targeted Planning and Applying (-target) Anti-Patterns: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline zero-downtime state refactoring, and automate operational recovery. The Terraform professional evaluates Targeting Risks to understand the operational risks of using `terraform apply -target=resource` for everyday infrastructure updates.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "`-target` applies the named resource and every resource that depends on it in the graph." },
      { id: 'B', text: "`-target` removes the untargeted resources from state so the next plan re-imports them." },
      { id: 'C', text: "`-target` can leave state divergent and skip hidden dependencies; it is for emergency recovery only." },
      { id: 'D', text: "`-target` is the supported way to apply a routine change to one part of a large configuration." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`-target` can introduce state divergence, violate hidden dependencies, and lead to unintended configuration drift; it is intended only for emergency recovery. Using `-target` isolates execution to a specific resource, bypassing the rest of the dependency graph. While useful for bootstrapping or recovering from broken dependencies, routine use creates state divergence and hidden dependency errors; normal deployments should always evaluate the full configuration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#targeting-resources",
    tags: ["Targeting Risks","Targeting Risks","Resilience Failure"]
  }
];

export default HASHICORP_TFP_QUESTIONS_16;
