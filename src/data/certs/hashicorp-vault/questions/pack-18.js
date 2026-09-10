export const HASHICORP_VAULT_QUESTIONS_18 = [
  {
    id: "hashicorp-vault-426",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Choosing a Cross-Region Replication Mode: High-Frequency FinTech Trading",
    scenario: "A quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The platform team is planning cross-region failover alongside low-latency reads in each region.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Disaster Recovery (DR) replication to maintain a synchronous hot-standby secondary cluster, or Performance Replication for localized secret reads." },
      { id: 'B', text: "Use Performance Replication alone in every region and promote whichever performance secondary is healthiest if the primary region becomes unavailable for an extended period." },
      { id: 'C', text: "Take scheduled Raft snapshots on the primary and restore the most recent one into a standby cluster in the second region as the disaster recovery path." },
      { id: 'D', text: "Run an independent cluster in each region and keep their secrets aligned with Vault Agent templates that copy values between them." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The two replication modes answer different questions: DR keeps a warm secondary carrying tokens and leases so it can be promoted, while performance replication serves local reads in each region. Performance secondaries deliberately do not replicate tokens and leases, so promoting one leaves every client re-authenticating. Snapshot-and-restore is a real recovery path but its recovery point is only as recent as the last snapshot, and template-based copying between clusters reimplements replication without its consistency guarantees.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["replication", "dr", "performance-replication", "High-Frequency FinTech Trading"]
  },
  {
    id: "hashicorp-vault-427",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Withdrawing Credentials Already in Circulation: Healthcare Patient Records & HIPAA",
    scenario: "A national hospital network requires strict cryptographic privacy, auditable access controls, and HIPAA compliance. The platform team is cutting off credentials that have already been issued after a suspected compromise.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Delete the auth method role so that no further credentials can be issued, and allow the ones already outstanding to lapse when their own TTL expires naturally." },
      { id: 'B', text: "Monitor lease TTLs, allow clients to renew active leases, and invoke 'sys/leases/revoke-prefix' to revoke compromised credential trees immediately." },
      { id: 'C', text: "Rotate the root credential of the backing database so that credentials handed out earlier can no longer connect." },
      { id: 'D', text: "Seal the Vault cluster so that every outstanding lease is invalidated until an operator unseals it again." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Revoking by prefix walks the lease tree and runs each revocation statement, so credentials already in an attacker's hands stop working within seconds. Deleting the role only closes the door on new issuance and leaves every existing credential valid for the rest of its TTL. Rotating the database root credential changes Vault's own connection account rather than the dynamic users it created, and sealing the cluster stops Vault from serving requests while the credentials it issued keep working against the database.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["leases", "revocation", "lifecycle", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "hashicorp-vault-428",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Audit Logging That Cannot Fail Quietly: Global E-Commerce Black Friday Scale",
    scenario: "An international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The platform team is guaranteeing every request is recorded without the logging path halting the cluster.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Enable a single socket audit device pointed at the central logging collector so that audit records leave the Vault host immediately at the moment they are written." },
      { id: 'B', text: "Enable a single file audit device and configure aggressive log rotation so the destination cannot fill its disk." },
      { id: 'C', text: "Enable multiple audit devices (e.g., file and syslog) and configure monitoring to ensure Vault never halts due to blocked logging destinations." },
      { id: 'D', text: "Enable a file audit device with log_raw set to true so that responders can read unhashed values during an investigation." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Vault refuses to serve a request it cannot log, so with one audit device that device becomes an availability dependency. Enabling a second device means Vault keeps serving as long as either one accepts writes. A lone socket device is the most fragile choice of all, because a brief network problem at the collector stalls the cluster, and rotation does not help a file device whose filesystem is full or read-only. Setting log_raw writes secrets to the log in the clear, trading a logging problem for a disclosure one.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["audit", "logging", "compliance", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "hashicorp-vault-429",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Token Type for Very High Request Volume: Autonomous Vehicle Telemetry",
    scenario: "A self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The platform team is choosing a token type for short-lived functions invoked many thousands of times per second.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use service tokens with very short TTLs so that expired entries are pruned from the token store by routine cleanup operations." },
      { id: 'B', text: "Use service tokens obtained through Vault Agent's token cache so that repeat invocations avoid contacting Vault." },
      { id: 'C', text: "Use batch tokens with renewable set to true so that a long-running invocation is able to extend its own lifetime." },
      { id: 'D', text: "Use Batch tokens for high-volume, short-lived workloads to eliminate write operations to the storage backend." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A batch token is an encrypted blob handed to the client rather than a record in storage, so issuing one costs no write and the storage backend stops being the bottleneck. Service tokens are persisted whatever their TTL, and a short TTL raises the write rate because clients return sooner. Vault Agent's cache reduces round trips for a repeated caller but every distinct invocation still needs a token that must be written. Batch tokens are not renewable at all, so the last option cannot be configured as described.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["batch-tokens", "service-tokens", "throughput", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "hashicorp-vault-430",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Delivering Secrets to Mixed Kubernetes and VM Workloads: Multi-Tenant B2B SaaS Platform",
    scenario: "An enterprise cloud SaaS architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The platform team is delivering secrets into applications that run on both Kubernetes and plain virtual machines.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy Vault Agent as a sidecar or daemon to handle authentication, token renewal, and automated secret templating to local disk." },
      { id: 'B', text: "Deploy the Vault Secrets Operator so that secrets are synchronised into native Kubernetes Secret objects for pods to consume." },
      { id: 'C', text: "Deploy the Vault CSI provider so that secrets are mounted into each pod's filesystem through the secrets-store CSI driver." },
      { id: 'D', text: "Have each application import the Vault API client library and manage its own login, token renewal, and secret refresh logic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Vault Agent runs anywhere a process can run, which is what a fleet spanning Kubernetes and virtual machines needs, and its templating renders secrets into whatever configuration format the application already reads. The Secrets Operator and the CSI provider are both strong choices, but each is Kubernetes-only and would leave the VM half of the estate unserved. Embedding the API client works everywhere too, at the cost of reimplementing renewal and retry logic in every application and language.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["vault-agent", "sidecar", "templating", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "hashicorp-vault-431",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Surviving the Loss of a Cluster Node: Media Streaming & Global CDN",
    scenario: "A global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized DRM protection. The platform team is designing a production cluster topology that tolerates the loss of a node.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy a multi-node Vault cluster backed by an external Consul storage backend running its own separate server quorum." },
      { id: 'B', text: "Deploy a multi-node Vault cluster using integrated Raft storage, where one node is elected active and standby nodes forward requests." },
      { id: 'C', text: "Deploy several independent Vault clusters behind a load balancer that spreads write requests evenly across all of them." },
      { id: 'D', text: "Deploy a single Vault node against a highly available managed database backend and restart the node automatically on failure." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Integrated Raft gives Vault its own replicated storage and leader election, so a node can be lost without an external dependency to operate alongside it. A Consul backend is fully supported and was long the standard, but it means running and upgrading a second distributed system purely for Vault's storage. Vault serves writes from a single active node, so balancing writes across independent clusters splits state rather than sharing it, and an HA database keeps the storage available while the single Vault node remains the outage.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["raft", "ha", "clustering", "Media Streaming & Global CDN"]
  },
  {
    id: "hashicorp-vault-432",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Restarting a Node Without an Operator Key Ceremony: Aerospace Satellite Ground Systems",
    scenario: "An aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The platform team is bringing nodes back into service after a restart without assembling key holders.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure the 'seal' stanza to use the transit engine of the same Vault cluster so that each node can decrypt its own root key automatically on restart." },
      { id: 'B', text: "Reduce the Shamir key threshold to a single share and place that share in the orchestrator's secret store for startup." },
      { id: 'C', text: "Configure the 'seal' stanza with AWS KMS, Azure Key Vault, or GCP KMS to automatically unseal Vault upon service initialization and reboot." },
      { id: 'D', text: "Configure Vault Agent auto-auth so that the agent submits the stored unseal keys to the sys/unseal endpoint at boot." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Delegating the seal to a cloud KMS or HSM lets Vault decrypt its own root key through an API call at startup with no human present. A transit seal is a genuine option, but it must point at a separate Vault cluster: aiming it at the same cluster means the sealed node depends on itself to unseal. A single Shamir share stored next to the service reduces the ceremony to one secret that also unlocks everything, and Vault Agent auto-auth logs in after the node is already unsealed, so it cannot unseal it.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["auto-unseal", "kms", "shamir", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "hashicorp-vault-433",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Choosing a Cross-Region Replication Mode: Telecommunications 5G Core Network",
    scenario: "A national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The platform team is planning cross-region failover alongside low-latency reads in each region.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Performance Replication alone in every region and promote whichever performance secondary is healthiest if the primary region becomes unavailable for an extended period." },
      { id: 'B', text: "Take scheduled Raft snapshots on the primary and restore the most recent one into a standby cluster in the second region as the disaster recovery path." },
      { id: 'C', text: "Run an independent cluster in each region and keep their secrets aligned with Vault Agent templates that copy values between them." },
      { id: 'D', text: "Use Disaster Recovery (DR) replication to maintain a synchronous hot-standby secondary cluster, or Performance Replication for localized secret reads." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The two replication modes answer different questions: DR keeps a warm secondary carrying tokens and leases so it can be promoted, while performance replication serves local reads in each region. Performance secondaries deliberately do not replicate tokens and leases, so promoting one leaves every client re-authenticating. Snapshot-and-restore is a real recovery path but its recovery point is only as recent as the last snapshot, and template-based copying between clusters reimplements replication without its consistency guarantees.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["replication", "dr", "performance-replication", "Telecommunications 5G Core Network"]
  },
  {
    id: "hashicorp-vault-434",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Withdrawing Credentials Already in Circulation: Renewable Energy Smart Grid IoT",
    scenario: "A smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The platform team is cutting off credentials that have already been issued after a suspected compromise.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Monitor lease TTLs, allow clients to renew active leases, and invoke 'sys/leases/revoke-prefix' to revoke compromised credential trees immediately." },
      { id: 'B', text: "Delete the auth method role so that no further credentials can be issued, and allow the ones already outstanding to lapse when their own TTL expires naturally." },
      { id: 'C', text: "Rotate the root credential of the backing database so that credentials handed out earlier can no longer connect." },
      { id: 'D', text: "Seal the Vault cluster so that every outstanding lease is invalidated until an operator unseals it again." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Revoking by prefix walks the lease tree and runs each revocation statement, so credentials already in an attacker's hands stop working within seconds. Deleting the role only closes the door on new issuance and leaves every existing credential valid for the rest of its TTL. Rotating the database root credential changes Vault's own connection account rather than the dynamic users it created, and sealing the cluster stops Vault from serving requests while the credentials it issued keep working against the database.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["leases", "revocation", "lifecycle", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "hashicorp-vault-435",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Audit Logging That Cannot Fail Quietly: Supply Chain Cold-Chain Logistics",
    scenario: "A pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The platform team is guaranteeing every request is recorded without the logging path halting the cluster.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Enable a single socket audit device pointed at the central logging collector so that audit records leave the Vault host immediately at the moment they are written." },
      { id: 'B', text: "Enable multiple audit devices (e.g., file and syslog) and configure monitoring to ensure Vault never halts due to blocked logging destinations." },
      { id: 'C', text: "Enable a single file audit device and configure aggressive log rotation so the destination cannot fill its disk." },
      { id: 'D', text: "Enable a file audit device with log_raw set to true so that responders can read unhashed values during an investigation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Vault refuses to serve a request it cannot log, so with one audit device that device becomes an availability dependency. Enabling a second device means Vault keeps serving as long as either one accepts writes. A lone socket device is the most fragile choice of all, because a brief network problem at the collector stalls the cluster, and rotation does not help a file device whose filesystem is full or read-only. Setting log_raw writes secrets to the log in the clear, trading a logging problem for a disclosure one.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["audit", "logging", "compliance", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "hashicorp-vault-436",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Token Type for Very High Request Volume: Banking Core Ledger & Payments",
    scenario: "A central banking consortium enforces ACID consistency, immutable transaction audit trails, and automated reconciliation. The platform team is choosing a token type for short-lived functions invoked many thousands of times per second.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use service tokens with very short TTLs so that expired entries are pruned from the token store by routine cleanup operations." },
      { id: 'B', text: "Use service tokens obtained through Vault Agent's token cache so that repeat invocations avoid contacting Vault." },
      { id: 'C', text: "Use Batch tokens for high-volume, short-lived workloads to eliminate write operations to the storage backend." },
      { id: 'D', text: "Use batch tokens with renewable set to true so that a long-running invocation is able to extend its own lifetime." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A batch token is an encrypted blob handed to the client rather than a record in storage, so issuing one costs no write and the storage backend stops being the bottleneck. Service tokens are persisted whatever their TTL, and a short TTL raises the write rate because clients return sooner. Vault Agent's cache reduces round trips for a repeated caller but every distinct invocation still needs a token that must be written. Batch tokens are not renewable at all, so the last option cannot be configured as described.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["batch-tokens", "service-tokens", "throughput", "Banking Core Ledger & Payments"]
  },
  {
    id: "hashicorp-vault-437",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Delivering Secrets to Mixed Kubernetes and VM Workloads: Genomic Sequencing & Biotech Pipeline",
    scenario: "A genomics laboratory processes petabyte-scale FASTQ files with distributed batch computing and high-throughput POSIX storage. The platform team is delivering secrets into applications that run on both Kubernetes and plain virtual machines.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy the Vault Secrets Operator so that secrets are synchronised into native Kubernetes Secret objects for pods to consume." },
      { id: 'B', text: "Deploy the Vault CSI provider so that secrets are mounted into each pod's filesystem through the secrets-store CSI driver." },
      { id: 'C', text: "Have each application import the Vault API client library and manage its own login, token renewal, and secret refresh logic." },
      { id: 'D', text: "Deploy Vault Agent as a sidecar or daemon to handle authentication, token renewal, and automated secret templating to local disk." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Vault Agent runs anywhere a process can run, which is what a fleet spanning Kubernetes and virtual machines needs, and its templating renders secrets into whatever configuration format the application already reads. The Secrets Operator and the CSI provider are both strong choices, but each is Kubernetes-only and would leave the VM half of the estate unserved. Embedding the API client works everywhere too, at the cost of reimplementing renewal and retry logic in every application and language.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["vault-agent", "sidecar", "templating", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "hashicorp-vault-438",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Surviving the Loss of a Cluster Node: Defense-Grade Zero-Trust Network",
    scenario: "A defense intelligence system enforces continuous mutual TLS authentication, strict least privilege, and non-repudiation. The platform team is designing a production cluster topology that tolerates the loss of a node.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy a multi-node Vault cluster using integrated Raft storage, where one node is elected active and standby nodes forward requests." },
      { id: 'B', text: "Deploy a multi-node Vault cluster backed by an external Consul storage backend running its own separate server quorum." },
      { id: 'C', text: "Deploy several independent Vault clusters behind a load balancer that spreads write requests evenly across all of them." },
      { id: 'D', text: "Deploy a single Vault node against a highly available managed database backend and restart the node automatically on failure." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrated Raft gives Vault its own replicated storage and leader election, so a node can be lost without an external dependency to operate alongside it. A Consul backend is fully supported and was long the standard, but it means running and upgrading a second distributed system purely for Vault's storage. Vault serves writes from a single active node, so balancing writes across independent clusters splits state rather than sharing it, and an HA database keeps the storage available while the single Vault node remains the outage.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["raft", "ha", "clustering", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "hashicorp-vault-439",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Restarting a Node Without an Operator Key Ceremony: Online Multiplayer Gaming Engine",
    scenario: "A real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The platform team is bringing nodes back into service after a restart without assembling key holders.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure the 'seal' stanza to use the transit engine of the same Vault cluster so that each node can decrypt its own root key automatically on restart." },
      { id: 'B', text: "Configure the 'seal' stanza with AWS KMS, Azure Key Vault, or GCP KMS to automatically unseal Vault upon service initialization and reboot." },
      { id: 'C', text: "Reduce the Shamir key threshold to a single share and place that share in the orchestrator's secret store for startup." },
      { id: 'D', text: "Configure Vault Agent auto-auth so that the agent submits the stored unseal keys to the sys/unseal endpoint at boot." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Delegating the seal to a cloud KMS or HSM lets Vault decrypt its own root key through an API call at startup with no human present. A transit seal is a genuine option, but it must point at a separate Vault cluster: aiming it at the same cluster means the sealed node depends on itself to unseal. A single Shamir share stored next to the service reduces the ceremony to one secret that also unlocks everything, and Vault Agent auto-auth logs in after the node is already unsealed, so it cannot unseal it.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["auto-unseal", "kms", "shamir", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "hashicorp-vault-440",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Choosing a Cross-Region Replication Mode: Insurance Risk & Actuarial Modeling",
    scenario: "An actuarial underwriting platform executes Monte Carlo simulations across millions of policy holder records with parallel workers. The platform team is planning cross-region failover alongside low-latency reads in each region.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Performance Replication alone in every region and promote whichever performance secondary is healthiest if the primary region becomes unavailable for an extended period." },
      { id: 'B', text: "Take scheduled Raft snapshots on the primary and restore the most recent one into a standby cluster in the second region as the disaster recovery path." },
      { id: 'C', text: "Use Disaster Recovery (DR) replication to maintain a synchronous hot-standby secondary cluster, or Performance Replication for localized secret reads." },
      { id: 'D', text: "Run an independent cluster in each region and keep their secrets aligned with Vault Agent templates that copy values between them." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The two replication modes answer different questions: DR keeps a warm secondary carrying tokens and leases so it can be promoted, while performance replication serves local reads in each region. Performance secondaries deliberately do not replicate tokens and leases, so promoting one leaves every client re-authenticating. Snapshot-and-restore is a real recovery path but its recovery point is only as recent as the last snapshot, and template-based copying between clusters reimplements replication without its consistency guarantees.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["replication", "dr", "performance-replication", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "hashicorp-vault-441",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Withdrawing Credentials Already in Circulation: Pharmaceutical Clinical Trial Platform",
    scenario: "A global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The platform team is cutting off credentials that have already been issued after a suspected compromise.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Delete the auth method role so that no further credentials can be issued, and allow the ones already outstanding to lapse when their own TTL expires naturally." },
      { id: 'B', text: "Rotate the root credential of the backing database so that credentials handed out earlier can no longer connect." },
      { id: 'C', text: "Seal the Vault cluster so that every outstanding lease is invalidated until an operator unseals it again." },
      { id: 'D', text: "Monitor lease TTLs, allow clients to renew active leases, and invoke 'sys/leases/revoke-prefix' to revoke compromised credential trees immediately." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Revoking by prefix walks the lease tree and runs each revocation statement, so credentials already in an attacker's hands stop working within seconds. Deleting the role only closes the door on new issuance and leaves every existing credential valid for the rest of its TTL. Rotating the database root credential changes Vault's own connection account rather than the dynamic users it created, and sealing the cluster stops Vault from serving requests while the credentials it issued keep working against the database.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["leases", "revocation", "lifecycle", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "hashicorp-vault-442",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Audit Logging That Cannot Fail Quietly: Smart City Traffic & Mobility Sensor Hub",
    scenario: "A metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The platform team is guaranteeing every request is recorded without the logging path halting the cluster.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Enable multiple audit devices (e.g., file and syslog) and configure monitoring to ensure Vault never halts due to blocked logging destinations." },
      { id: 'B', text: "Enable a single socket audit device pointed at the central logging collector so that audit records leave the Vault host immediately at the moment they are written." },
      { id: 'C', text: "Enable a single file audit device and configure aggressive log rotation so the destination cannot fill its disk." },
      { id: 'D', text: "Enable a file audit device with log_raw set to true so that responders can read unhashed values during an investigation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Vault refuses to serve a request it cannot log, so with one audit device that device becomes an availability dependency. Enabling a second device means Vault keeps serving as long as either one accepts writes. A lone socket device is the most fragile choice of all, because a brief network problem at the collector stalls the cluster, and rotation does not help a file device whose filesystem is full or read-only. Setting log_raw writes secrets to the log in the clear, trading a logging problem for a disclosure one.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["audit", "logging", "compliance", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "hashicorp-vault-443",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Token Type for Very High Request Volume: Digital Identity & Biometric Verification",
    scenario: "A cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The platform team is choosing a token type for short-lived functions invoked many thousands of times per second.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use service tokens with very short TTLs so that expired entries are pruned from the token store by routine cleanup operations." },
      { id: 'B', text: "Use Batch tokens for high-volume, short-lived workloads to eliminate write operations to the storage backend." },
      { id: 'C', text: "Use service tokens obtained through Vault Agent's token cache so that repeat invocations avoid contacting Vault." },
      { id: 'D', text: "Use batch tokens with renewable set to true so that a long-running invocation is able to extend its own lifetime." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A batch token is an encrypted blob handed to the client rather than a record in storage, so issuing one costs no write and the storage backend stops being the bottleneck. Service tokens are persisted whatever their TTL, and a short TTL raises the write rate because clients return sooner. Vault Agent's cache reduces round trips for a repeated caller but every distinct invocation still needs a token that must be written. Batch tokens are not renewable at all, so the last option cannot be configured as described.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["batch-tokens", "service-tokens", "throughput", "Digital Identity & Biometric Verification"]
  },
  {
    id: "hashicorp-vault-444",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Delivering Secrets to Mixed Kubernetes and VM Workloads: Legal Discovery & Semantic Document Search",
    scenario: "A global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The platform team is delivering secrets into applications that run on both Kubernetes and plain virtual machines.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy the Vault Secrets Operator so that secrets are synchronised into native Kubernetes Secret objects for pods to consume." },
      { id: 'B', text: "Deploy the Vault CSI provider so that secrets are mounted into each pod's filesystem through the secrets-store CSI driver." },
      { id: 'C', text: "Deploy Vault Agent as a sidecar or daemon to handle authentication, token renewal, and automated secret templating to local disk." },
      { id: 'D', text: "Have each application import the Vault API client library and manage its own login, token renewal, and secret refresh logic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Vault Agent runs anywhere a process can run, which is what a fleet spanning Kubernetes and virtual machines needs, and its templating renders secrets into whatever configuration format the application already reads. The Secrets Operator and the CSI provider are both strong choices, but each is Kubernetes-only and would leave the VM half of the estate unserved. Embedding the API client works everywhere too, at the cost of reimplementing renewal and retry logic in every application and language.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["vault-agent", "sidecar", "templating", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "hashicorp-vault-445",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Surviving the Loss of a Cluster Node: AdTech Real-Time Bidding Exchange",
    scenario: "An advertising exchange processes 500,000 bids per second with a strict 20-millisecond SLA and distributed caching. The platform team is designing a production cluster topology that tolerates the loss of a node.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy a multi-node Vault cluster backed by an external Consul storage backend running its own separate server quorum." },
      { id: 'B', text: "Deploy several independent Vault clusters behind a load balancer that spreads write requests evenly across all of them." },
      { id: 'C', text: "Deploy a single Vault node against a highly available managed database backend and restart the node automatically on failure." },
      { id: 'D', text: "Deploy a multi-node Vault cluster using integrated Raft storage, where one node is elected active and standby nodes forward requests." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Integrated Raft gives Vault its own replicated storage and leader election, so a node can be lost without an external dependency to operate alongside it. A Consul backend is fully supported and was long the standard, but it means running and upgrading a second distributed system purely for Vault's storage. Vault serves writes from a single active node, so balancing writes across independent clusters splits state rather than sharing it, and an HA database keeps the storage available while the single Vault node remains the outage.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["raft", "ha", "clustering", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "hashicorp-vault-446",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Restarting a Node Without an Operator Key Ceremony: Precision Agriculture & Drone Scouting",
    scenario: "An agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The platform team is bringing nodes back into service after a restart without assembling key holders.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure the 'seal' stanza with AWS KMS, Azure Key Vault, or GCP KMS to automatically unseal Vault upon service initialization and reboot." },
      { id: 'B', text: "Configure the 'seal' stanza to use the transit engine of the same Vault cluster so that each node can decrypt its own root key automatically on restart." },
      { id: 'C', text: "Reduce the Shamir key threshold to a single share and place that share in the orchestrator's secret store for startup." },
      { id: 'D', text: "Configure Vault Agent auto-auth so that the agent submits the stored unseal keys to the sys/unseal endpoint at boot." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Delegating the seal to a cloud KMS or HSM lets Vault decrypt its own root key through an API call at startup with no human present. A transit seal is a genuine option, but it must point at a separate Vault cluster: aiming it at the same cluster means the sealed node depends on itself to unseal. A single Shamir share stored next to the service reduces the ceremony to one secret that also unlocks everything, and Vault Agent auto-auth logs in after the node is already unsealed, so it cannot unseal it.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["auto-unseal", "kms", "shamir", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "hashicorp-vault-447",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Choosing a Cross-Region Replication Mode: Industrial Robotics Predictive Maintenance",
    scenario: "A semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The platform team is planning cross-region failover alongside low-latency reads in each region.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Performance Replication alone in every region and promote whichever performance secondary is healthiest if the primary region becomes unavailable for an extended period." },
      { id: 'B', text: "Use Disaster Recovery (DR) replication to maintain a synchronous hot-standby secondary cluster, or Performance Replication for localized secret reads." },
      { id: 'C', text: "Take scheduled Raft snapshots on the primary and restore the most recent one into a standby cluster in the second region as the disaster recovery path." },
      { id: 'D', text: "Run an independent cluster in each region and keep their secrets aligned with Vault Agent templates that copy values between them." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The two replication modes answer different questions: DR keeps a warm secondary carrying tokens and leases so it can be promoted, while performance replication serves local reads in each region. Performance secondaries deliberately do not replicate tokens and leases, so promoting one leaves every client re-authenticating. Snapshot-and-restore is a real recovery path but its recovery point is only as recent as the last snapshot, and template-based copying between clusters reimplements replication without its consistency guarantees.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["replication", "dr", "performance-replication", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "hashicorp-vault-448",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Withdrawing Credentials Already in Circulation: Educational Remote Proctoring Platform",
    scenario: "An online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The platform team is cutting off credentials that have already been issued after a suspected compromise.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Delete the auth method role so that no further credentials can be issued, and allow the ones already outstanding to lapse when their own TTL expires naturally." },
      { id: 'B', text: "Rotate the root credential of the backing database so that credentials handed out earlier can no longer connect." },
      { id: 'C', text: "Monitor lease TTLs, allow clients to renew active leases, and invoke 'sys/leases/revoke-prefix' to revoke compromised credential trees immediately." },
      { id: 'D', text: "Seal the Vault cluster so that every outstanding lease is invalidated until an operator unseals it again." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Revoking by prefix walks the lease tree and runs each revocation statement, so credentials already in an attacker's hands stop working within seconds. Deleting the role only closes the door on new issuance and leaves every existing credential valid for the rest of its TTL. Rotating the database root credential changes Vault's own connection account rather than the dynamic users it created, and sealing the cluster stops Vault from serving requests while the credentials it issued keep working against the database.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["leases", "revocation", "lifecycle", "Educational Remote Proctoring Platform"]
  },
  {
    id: "hashicorp-vault-449",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Audit Logging That Cannot Fail Quietly: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "A property appraisal engine fuses GIS parcel maps with real-time market transactions for automated valuation. The platform team is guaranteeing every request is recorded without the logging path halting the cluster.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Enable a single socket audit device pointed at the central logging collector so that audit records leave the Vault host immediately at the moment they are written." },
      { id: 'B', text: "Enable a single file audit device and configure aggressive log rotation so the destination cannot fill its disk." },
      { id: 'C', text: "Enable a file audit device with log_raw set to true so that responders can read unhashed values during an investigation." },
      { id: 'D', text: "Enable multiple audit devices (e.g., file and syslog) and configure monitoring to ensure Vault never halts due to blocked logging destinations." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Vault refuses to serve a request it cannot log, so with one audit device that device becomes an availability dependency. Enabling a second device means Vault keeps serving as long as either one accepts writes. A lone socket device is the most fragile choice of all, because a brief network problem at the collector stalls the cluster, and rotation does not help a file device whose filesystem is full or read-only. Setting log_raw writes secrets to the log in the clear, trading a logging problem for a disclosure one.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["audit", "logging", "compliance", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "hashicorp-vault-450",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Token Type for Very High Request Volume: Disaster Emergency Dispatch & Operations",
    scenario: "A municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The platform team is choosing a token type for short-lived functions invoked many thousands of times per second.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Batch tokens for high-volume, short-lived workloads to eliminate write operations to the storage backend." },
      { id: 'B', text: "Use service tokens with very short TTLs so that expired entries are pruned from the token store by routine cleanup operations." },
      { id: 'C', text: "Use service tokens obtained through Vault Agent's token cache so that repeat invocations avoid contacting Vault." },
      { id: 'D', text: "Use batch tokens with renewable set to true so that a long-running invocation is able to extend its own lifetime." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A batch token is an encrypted blob handed to the client rather than a record in storage, so issuing one costs no write and the storage backend stops being the bottleneck. Service tokens are persisted whatever their TTL, and a short TTL raises the write rate because clients return sooner. Vault Agent's cache reduces round trips for a repeated caller but every distinct invocation still needs a token that must be written. Batch tokens are not renewable at all, so the last option cannot be configured as described.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["batch-tokens", "service-tokens", "throughput", "Disaster Emergency Dispatch & Operations"]
  }
];

export default HASHICORP_VAULT_QUESTIONS_18;
