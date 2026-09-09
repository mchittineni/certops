export const HASHICORP_VAULT_QUESTIONS_19 = [
  {
    id: "hashicorp-vault-451",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Batch Tokens vs Service Tokens: High-Frequency FinTech Trading",
    scenario: "In a high-frequency fintech trading infrastructure, a quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The operations team is currently optimizing token performance for high-throughput serverless executions under production deployment cycle 19.1.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these high-frequency fintech trading criteria for batch tokens vs service tokens?",
    options: [
      { id: 'A', text: "Use Batch tokens for high-volume, short-lived workloads to eliminate write operations to the storage backend." },
      { id: 'B', text: "Use Service tokens with 30-day TTLs for transient functions executed 10,000 times per second." },
      { id: 'C', text: "Assign root tokens to serverless AWS Lambda invocations to avoid storage contention." },
      { id: 'D', text: "Store all batch tokens in an external Redis cache to make them renewable." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Batch tokens are lightweight, encrypted binary blobs that carry their own authorization state without being written to Vault's storage backend or index. This allows Vault to process extreme request throughput in serverless and batch workloads without storage I/O bottlenecks.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["batch-tokens", "service-tokens", "throughput", "High-Frequency FinTech Trading"]
  },
  {
    id: "hashicorp-vault-452",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Vault Agent and Secret Injection: Healthcare Patient Records & HIPAA",
    scenario: "In a healthcare patient records & hipaa infrastructure, a national hospital network requires strict cryptographic privacy, auditable access controls, and hipaa compliance. The operations team is currently automating client secret delivery through transparent sidecars under production deployment cycle 19.2.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these healthcare patient records & hipaa criteria for vault agent and secret injection?",
    options: [
      { id: 'A', text: "Embed Vault root credentials directly in the application source code repository." },
      { id: 'B', text: "Deploy Vault Agent as a sidecar or daemon to handle authentication, token renewal, and automated secret templating to local disk." },
      { id: 'C', text: "Require developers to SSH into production servers daily to manually export credentials into environment variables." },
      { id: 'D', text: "Use custom cron scripts that curl the Vault API and write static JSON secrets to public web directories." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Vault Agent automates the client-side lifecycle of Vault authentication, token renewal, and secret retrieval. Using Vault Agent Templates, it renders application configuration files populated with fresh secrets directly into application shared memory or local files.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["vault-agent", "sidecar", "templating", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "hashicorp-vault-453",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Vault High Availability Architecture: Global E-Commerce Black Friday Scale",
    scenario: "In a global e-commerce black friday scale infrastructure, an international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The operations team is currently orchestrating active/standby clusters with integrated Raft consensus under production deployment cycle 19.3.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these global e-commerce black friday scale criteria for vault high availability architecture?",
    options: [
      { id: 'A', text: "Run a single standalone Vault node with local file storage in production without backups." },
      { id: 'B', text: "Deploy multiple active Vault nodes writing concurrently to an uncoordinated NFS filesystem." },
      { id: 'C', text: "Deploy a multi-node Vault cluster using integrated Raft storage, where one node is elected active and standby nodes forward requests." },
      { id: 'D', text: "Place Vault in read-only mode and disable all state updates to achieve high availability." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Production Vault architectures utilize an Active/Standby clustering model backed by integrated Raft consensus (or Consul). Only the elected active leader processes write operations, while standby nodes handle client request forwarding or read performance scaling.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["raft", "ha", "clustering", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "hashicorp-vault-454",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Auto-Unseal with Cloud KMS: Autonomous Vehicle Telemetry",
    scenario: "In a autonomous vehicle telemetry infrastructure, a self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The operations team is currently automating cluster boot recovery without manual Shamir key coordination under production deployment cycle 19.4.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these autonomous vehicle telemetry criteria for auto-unseal with cloud kms?",
    options: [
      { id: 'A', text: "Store Shamir unseal keys in plaintext inside a shell startup script on the local host." },
      { id: 'B', text: "Disable Vault encryption so that the storage backend does not require unsealing." },
      { id: 'C', text: "Share all Shamir unseal keys in an unencrypted team chat channel." },
      { id: 'D', text: "Configure the 'seal' stanza with AWS KMS, Azure Key Vault, or GCP KMS to automatically unseal Vault upon service initialization and reboot." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Auto-unseal delegates the unsealing process to a trusted cloud Key Management Service (AWS KMS, Azure Key Vault, Google Cloud KMS, or PKCS#11 HSM). When Vault restarts, it decrypts its master key via the KMS API without human intervention, eliminating operational downtime.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["auto-unseal", "kms", "shamir", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "hashicorp-vault-455",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Disaster Recovery vs Performance Replication: Multi-Tenant B2B SaaS Platform",
    scenario: "In a multi-tenant b2b saas platform infrastructure, an enterprise cloud saas architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The operations team is currently designing multi-datacenter replication and failover topologies under production deployment cycle 19.5.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these multi-tenant b2b saas platform criteria for disaster recovery vs performance replication?",
    options: [
      { id: 'A', text: "Use Disaster Recovery (DR) replication to maintain a synchronous hot-standby secondary cluster, or Performance Replication for localized secret reads." },
      { id: 'B', text: "Copy raw Raft storage directories across cloud regions using hourly rsync cron jobs while Vault is running." },
      { id: 'C', text: "Deploy independent Vault clusters with identical unseal keys and manually replicate secrets via copy-paste." },
      { id: 'D', text: "Disable all secondary clusters and rely exclusively on tape backups stored offsite." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Vault Enterprise provides two distinct replication types: Performance Replication scales read traffic across regions while sharing the same active state, whereas Disaster Recovery (DR) Replication maintains an isolated secondary cluster ready to be promoted if the primary fails.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["replication", "dr", "performance-replication", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "hashicorp-vault-456",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Lease Expiration and Revocation: Media Streaming & Global CDN",
    scenario: "In a media streaming & global cdn infrastructure, a global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized drm protection. The operations team is currently managing dynamic credential lifecycles and emergency access revocation under production deployment cycle 19.6.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these media streaming & global cdn criteria for lease expiration and revocation?",
    options: [
      { id: 'A', text: "Set lease TTLs to 0 so that credentials persist permanently without tracking." },
      { id: 'B', text: "Monitor lease TTLs, allow clients to renew active leases, and invoke 'sys/leases/revoke-prefix' to revoke compromised credential trees immediately." },
      { id: 'C', text: "Delete the Vault audit log file to force all active leases to clear from memory." },
      { id: 'D', text: "Restart the Vault service process whenever credentials need to be revoked." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Every dynamic secret and service token is accompanied by a lease with an explicit duration (TTL). Vault provides granular lease revocation APIs; invoking 'revoke-prefix' revokes every secret issued under a specified path, immediately neutralizing security incidents.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["leases", "revocation", "lifecycle", "Media Streaming & Global CDN"]
  },
  {
    id: "hashicorp-vault-457",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Audit Devices and Failure Behavior: Aerospace Satellite Ground Systems",
    scenario: "In a aerospace satellite ground systems infrastructure, an aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The operations team is currently implementing non-repudiation and resilient security logging under production deployment cycle 19.7.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these aerospace satellite ground systems criteria for audit devices and failure behavior?",
    options: [
      { id: 'A', text: "Disable audit logging completely to maximize raw API request throughput." },
      { id: 'B', text: "Write audit logs to an unmonitored /tmp directory that gets wiped every hour." },
      { id: 'C', text: "Enable multiple audit devices (e.g., file and syslog) and configure monitoring to ensure Vault never halts due to blocked logging destinations." },
      { id: 'D', text: "Log audit records in plaintext without hashing sensitive parameter fields." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Vault audit devices log every authenticated request and response. Vault enforces a strict security policy: if an audit device is configured but cannot write (e.g., disk full), Vault will block incoming requests rather than allow unlogged actions. Best practice requires at least two distinct audit devices.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["audit", "logging", "compliance", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "hashicorp-vault-458",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Batch Tokens vs Service Tokens: Telecommunications 5G Core Network",
    scenario: "In a telecommunications 5g core network infrastructure, a national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The operations team is currently optimizing token performance for high-throughput serverless executions under production deployment cycle 19.8.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these telecommunications 5g core network criteria for batch tokens vs service tokens?",
    options: [
      { id: 'A', text: "Use Service tokens with 30-day TTLs for transient functions executed 10,000 times per second." },
      { id: 'B', text: "Assign root tokens to serverless AWS Lambda invocations to avoid storage contention." },
      { id: 'C', text: "Store all batch tokens in an external Redis cache to make them renewable." },
      { id: 'D', text: "Use Batch tokens for high-volume, short-lived workloads to eliminate write operations to the storage backend." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Batch tokens are lightweight, encrypted binary blobs that carry their own authorization state without being written to Vault's storage backend or index. This allows Vault to process extreme request throughput in serverless and batch workloads without storage I/O bottlenecks.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["batch-tokens", "service-tokens", "throughput", "Telecommunications 5G Core Network"]
  },
  {
    id: "hashicorp-vault-459",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Vault Agent and Secret Injection: Renewable Energy Smart Grid IoT",
    scenario: "In a renewable energy smart grid iot infrastructure, a smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The operations team is currently automating client secret delivery through transparent sidecars under production deployment cycle 19.9.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these renewable energy smart grid iot criteria for vault agent and secret injection?",
    options: [
      { id: 'A', text: "Deploy Vault Agent as a sidecar or daemon to handle authentication, token renewal, and automated secret templating to local disk." },
      { id: 'B', text: "Embed Vault root credentials directly in the application source code repository." },
      { id: 'C', text: "Require developers to SSH into production servers daily to manually export credentials into environment variables." },
      { id: 'D', text: "Use custom cron scripts that curl the Vault API and write static JSON secrets to public web directories." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Vault Agent automates the client-side lifecycle of Vault authentication, token renewal, and secret retrieval. Using Vault Agent Templates, it renders application configuration files populated with fresh secrets directly into application shared memory or local files.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["vault-agent", "sidecar", "templating", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "hashicorp-vault-460",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Vault High Availability Architecture: Supply Chain Cold-Chain Logistics",
    scenario: "In a supply chain cold-chain logistics infrastructure, a pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The operations team is currently orchestrating active/standby clusters with integrated Raft consensus under production deployment cycle 19.10.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these supply chain cold-chain logistics criteria for vault high availability architecture?",
    options: [
      { id: 'A', text: "Run a single standalone Vault node with local file storage in production without backups." },
      { id: 'B', text: "Deploy a multi-node Vault cluster using integrated Raft storage, where one node is elected active and standby nodes forward requests." },
      { id: 'C', text: "Deploy multiple active Vault nodes writing concurrently to an uncoordinated NFS filesystem." },
      { id: 'D', text: "Place Vault in read-only mode and disable all state updates to achieve high availability." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Production Vault architectures utilize an Active/Standby clustering model backed by integrated Raft consensus (or Consul). Only the elected active leader processes write operations, while standby nodes handle client request forwarding or read performance scaling.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["raft", "ha", "clustering", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "hashicorp-vault-461",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Auto-Unseal with Cloud KMS: Banking Core Ledger & Payments",
    scenario: "In a banking core ledger & payments infrastructure, a central banking consortium enforces acid consistency, immutable transaction audit trails, and automated reconciliation. The operations team is currently automating cluster boot recovery without manual Shamir key coordination under production deployment cycle 19.11.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these banking core ledger & payments criteria for auto-unseal with cloud kms?",
    options: [
      { id: 'A', text: "Store Shamir unseal keys in plaintext inside a shell startup script on the local host." },
      { id: 'B', text: "Disable Vault encryption so that the storage backend does not require unsealing." },
      { id: 'C', text: "Configure the 'seal' stanza with AWS KMS, Azure Key Vault, or GCP KMS to automatically unseal Vault upon service initialization and reboot." },
      { id: 'D', text: "Share all Shamir unseal keys in an unencrypted team chat channel." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Auto-unseal delegates the unsealing process to a trusted cloud Key Management Service (AWS KMS, Azure Key Vault, Google Cloud KMS, or PKCS#11 HSM). When Vault restarts, it decrypts its master key via the KMS API without human intervention, eliminating operational downtime.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["auto-unseal", "kms", "shamir", "Banking Core Ledger & Payments"]
  },
  {
    id: "hashicorp-vault-462",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Disaster Recovery vs Performance Replication: Genomic Sequencing & Biotech Pipeline",
    scenario: "In a genomic sequencing & biotech pipeline infrastructure, a genomics laboratory processes petabyte-scale fastq files with distributed batch computing and high-throughput posix storage. The operations team is currently designing multi-datacenter replication and failover topologies under production deployment cycle 19.12.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these genomic sequencing & biotech pipeline criteria for disaster recovery vs performance replication?",
    options: [
      { id: 'A', text: "Copy raw Raft storage directories across cloud regions using hourly rsync cron jobs while Vault is running." },
      { id: 'B', text: "Deploy independent Vault clusters with identical unseal keys and manually replicate secrets via copy-paste." },
      { id: 'C', text: "Disable all secondary clusters and rely exclusively on tape backups stored offsite." },
      { id: 'D', text: "Use Disaster Recovery (DR) replication to maintain a synchronous hot-standby secondary cluster, or Performance Replication for localized secret reads." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Vault Enterprise provides two distinct replication types: Performance Replication scales read traffic across regions while sharing the same active state, whereas Disaster Recovery (DR) Replication maintains an isolated secondary cluster ready to be promoted if the primary fails.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["replication", "dr", "performance-replication", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "hashicorp-vault-463",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Lease Expiration and Revocation: Defense-Grade Zero-Trust Network",
    scenario: "In a defense-grade zero-trust network infrastructure, a defense intelligence system enforces continuous mutual tls authentication, strict least privilege, and non-repudiation. The operations team is currently managing dynamic credential lifecycles and emergency access revocation under production deployment cycle 19.13.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these defense-grade zero-trust network criteria for lease expiration and revocation?",
    options: [
      { id: 'A', text: "Monitor lease TTLs, allow clients to renew active leases, and invoke 'sys/leases/revoke-prefix' to revoke compromised credential trees immediately." },
      { id: 'B', text: "Set lease TTLs to 0 so that credentials persist permanently without tracking." },
      { id: 'C', text: "Delete the Vault audit log file to force all active leases to clear from memory." },
      { id: 'D', text: "Restart the Vault service process whenever credentials need to be revoked." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Every dynamic secret and service token is accompanied by a lease with an explicit duration (TTL). Vault provides granular lease revocation APIs; invoking 'revoke-prefix' revokes every secret issued under a specified path, immediately neutralizing security incidents.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["leases", "revocation", "lifecycle", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "hashicorp-vault-464",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Audit Devices and Failure Behavior: Online Multiplayer Gaming Engine",
    scenario: "In a online multiplayer gaming engine infrastructure, a real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The operations team is currently implementing non-repudiation and resilient security logging under production deployment cycle 19.14.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these online multiplayer gaming engine criteria for audit devices and failure behavior?",
    options: [
      { id: 'A', text: "Disable audit logging completely to maximize raw API request throughput." },
      { id: 'B', text: "Enable multiple audit devices (e.g., file and syslog) and configure monitoring to ensure Vault never halts due to blocked logging destinations." },
      { id: 'C', text: "Write audit logs to an unmonitored /tmp directory that gets wiped every hour." },
      { id: 'D', text: "Log audit records in plaintext without hashing sensitive parameter fields." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Vault audit devices log every authenticated request and response. Vault enforces a strict security policy: if an audit device is configured but cannot write (e.g., disk full), Vault will block incoming requests rather than allow unlogged actions. Best practice requires at least two distinct audit devices.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["audit", "logging", "compliance", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "hashicorp-vault-465",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Batch Tokens vs Service Tokens: Insurance Risk & Actuarial Modeling",
    scenario: "In a insurance risk & actuarial modeling infrastructure, an actuarial underwriting platform executes monte carlo simulations across millions of policy holder records with parallel workers. The operations team is currently optimizing token performance for high-throughput serverless executions under production deployment cycle 19.15.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these insurance risk & actuarial modeling criteria for batch tokens vs service tokens?",
    options: [
      { id: 'A', text: "Use Service tokens with 30-day TTLs for transient functions executed 10,000 times per second." },
      { id: 'B', text: "Assign root tokens to serverless AWS Lambda invocations to avoid storage contention." },
      { id: 'C', text: "Use Batch tokens for high-volume, short-lived workloads to eliminate write operations to the storage backend." },
      { id: 'D', text: "Store all batch tokens in an external Redis cache to make them renewable." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Batch tokens are lightweight, encrypted binary blobs that carry their own authorization state without being written to Vault's storage backend or index. This allows Vault to process extreme request throughput in serverless and batch workloads without storage I/O bottlenecks.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["batch-tokens", "service-tokens", "throughput", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "hashicorp-vault-466",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Vault Agent and Secret Injection: Pharmaceutical Clinical Trial Platform",
    scenario: "In a pharmaceutical clinical trial platform infrastructure, a global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The operations team is currently automating client secret delivery through transparent sidecars under production deployment cycle 19.16.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these pharmaceutical clinical trial platform criteria for vault agent and secret injection?",
    options: [
      { id: 'A', text: "Embed Vault root credentials directly in the application source code repository." },
      { id: 'B', text: "Require developers to SSH into production servers daily to manually export credentials into environment variables." },
      { id: 'C', text: "Use custom cron scripts that curl the Vault API and write static JSON secrets to public web directories." },
      { id: 'D', text: "Deploy Vault Agent as a sidecar or daemon to handle authentication, token renewal, and automated secret templating to local disk." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Vault Agent automates the client-side lifecycle of Vault authentication, token renewal, and secret retrieval. Using Vault Agent Templates, it renders application configuration files populated with fresh secrets directly into application shared memory or local files.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["vault-agent", "sidecar", "templating", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "hashicorp-vault-467",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Vault High Availability Architecture: Smart City Traffic & Mobility Sensor Hub",
    scenario: "In a smart city traffic & mobility sensor hub infrastructure, a metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The operations team is currently orchestrating active/standby clusters with integrated Raft consensus under production deployment cycle 19.17.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these smart city traffic & mobility sensor hub criteria for vault high availability architecture?",
    options: [
      { id: 'A', text: "Deploy a multi-node Vault cluster using integrated Raft storage, where one node is elected active and standby nodes forward requests." },
      { id: 'B', text: "Run a single standalone Vault node with local file storage in production without backups." },
      { id: 'C', text: "Deploy multiple active Vault nodes writing concurrently to an uncoordinated NFS filesystem." },
      { id: 'D', text: "Place Vault in read-only mode and disable all state updates to achieve high availability." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Production Vault architectures utilize an Active/Standby clustering model backed by integrated Raft consensus (or Consul). Only the elected active leader processes write operations, while standby nodes handle client request forwarding or read performance scaling.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["raft", "ha", "clustering", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "hashicorp-vault-468",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Auto-Unseal with Cloud KMS: Digital Identity & Biometric Verification",
    scenario: "In a digital identity & biometric verification infrastructure, a cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The operations team is currently automating cluster boot recovery without manual Shamir key coordination under production deployment cycle 19.18.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these digital identity & biometric verification criteria for auto-unseal with cloud kms?",
    options: [
      { id: 'A', text: "Store Shamir unseal keys in plaintext inside a shell startup script on the local host." },
      { id: 'B', text: "Configure the 'seal' stanza with AWS KMS, Azure Key Vault, or GCP KMS to automatically unseal Vault upon service initialization and reboot." },
      { id: 'C', text: "Disable Vault encryption so that the storage backend does not require unsealing." },
      { id: 'D', text: "Share all Shamir unseal keys in an unencrypted team chat channel." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Auto-unseal delegates the unsealing process to a trusted cloud Key Management Service (AWS KMS, Azure Key Vault, Google Cloud KMS, or PKCS#11 HSM). When Vault restarts, it decrypts its master key via the KMS API without human intervention, eliminating operational downtime.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["auto-unseal", "kms", "shamir", "Digital Identity & Biometric Verification"]
  },
  {
    id: "hashicorp-vault-469",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Disaster Recovery vs Performance Replication: Legal Discovery & Semantic Document Search",
    scenario: "In a legal discovery & semantic document search infrastructure, a global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The operations team is currently designing multi-datacenter replication and failover topologies under production deployment cycle 19.19.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these legal discovery & semantic document search criteria for disaster recovery vs performance replication?",
    options: [
      { id: 'A', text: "Copy raw Raft storage directories across cloud regions using hourly rsync cron jobs while Vault is running." },
      { id: 'B', text: "Deploy independent Vault clusters with identical unseal keys and manually replicate secrets via copy-paste." },
      { id: 'C', text: "Use Disaster Recovery (DR) replication to maintain a synchronous hot-standby secondary cluster, or Performance Replication for localized secret reads." },
      { id: 'D', text: "Disable all secondary clusters and rely exclusively on tape backups stored offsite." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Vault Enterprise provides two distinct replication types: Performance Replication scales read traffic across regions while sharing the same active state, whereas Disaster Recovery (DR) Replication maintains an isolated secondary cluster ready to be promoted if the primary fails.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["replication", "dr", "performance-replication", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "hashicorp-vault-470",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Lease Expiration and Revocation: AdTech Real-Time Bidding Exchange",
    scenario: "In a adtech real-time bidding exchange infrastructure, an advertising exchange processes 500,000 bids per second with a strict 20-millisecond sla and distributed caching. The operations team is currently managing dynamic credential lifecycles and emergency access revocation under production deployment cycle 19.20.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these adtech real-time bidding exchange criteria for lease expiration and revocation?",
    options: [
      { id: 'A', text: "Set lease TTLs to 0 so that credentials persist permanently without tracking." },
      { id: 'B', text: "Delete the Vault audit log file to force all active leases to clear from memory." },
      { id: 'C', text: "Restart the Vault service process whenever credentials need to be revoked." },
      { id: 'D', text: "Monitor lease TTLs, allow clients to renew active leases, and invoke 'sys/leases/revoke-prefix' to revoke compromised credential trees immediately." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Every dynamic secret and service token is accompanied by a lease with an explicit duration (TTL). Vault provides granular lease revocation APIs; invoking 'revoke-prefix' revokes every secret issued under a specified path, immediately neutralizing security incidents.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["leases", "revocation", "lifecycle", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "hashicorp-vault-471",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Audit Devices and Failure Behavior: Precision Agriculture & Drone Scouting",
    scenario: "In a precision agriculture & drone scouting infrastructure, an agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The operations team is currently implementing non-repudiation and resilient security logging under production deployment cycle 19.21.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these precision agriculture & drone scouting criteria for audit devices and failure behavior?",
    options: [
      { id: 'A', text: "Enable multiple audit devices (e.g., file and syslog) and configure monitoring to ensure Vault never halts due to blocked logging destinations." },
      { id: 'B', text: "Disable audit logging completely to maximize raw API request throughput." },
      { id: 'C', text: "Write audit logs to an unmonitored /tmp directory that gets wiped every hour." },
      { id: 'D', text: "Log audit records in plaintext without hashing sensitive parameter fields." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Vault audit devices log every authenticated request and response. Vault enforces a strict security policy: if an audit device is configured but cannot write (e.g., disk full), Vault will block incoming requests rather than allow unlogged actions. Best practice requires at least two distinct audit devices.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["audit", "logging", "compliance", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "hashicorp-vault-472",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Batch Tokens vs Service Tokens: Industrial Robotics Predictive Maintenance",
    scenario: "In a industrial robotics predictive maintenance infrastructure, a semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The operations team is currently optimizing token performance for high-throughput serverless executions under production deployment cycle 19.22.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these industrial robotics predictive maintenance criteria for batch tokens vs service tokens?",
    options: [
      { id: 'A', text: "Use Service tokens with 30-day TTLs for transient functions executed 10,000 times per second." },
      { id: 'B', text: "Use Batch tokens for high-volume, short-lived workloads to eliminate write operations to the storage backend." },
      { id: 'C', text: "Assign root tokens to serverless AWS Lambda invocations to avoid storage contention." },
      { id: 'D', text: "Store all batch tokens in an external Redis cache to make them renewable." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Batch tokens are lightweight, encrypted binary blobs that carry their own authorization state without being written to Vault's storage backend or index. This allows Vault to process extreme request throughput in serverless and batch workloads without storage I/O bottlenecks.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["batch-tokens", "service-tokens", "throughput", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "hashicorp-vault-473",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Vault Agent and Secret Injection: Educational Remote Proctoring Platform",
    scenario: "In a educational remote proctoring platform infrastructure, an online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The operations team is currently automating client secret delivery through transparent sidecars under production deployment cycle 19.23.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these educational remote proctoring platform criteria for vault agent and secret injection?",
    options: [
      { id: 'A', text: "Embed Vault root credentials directly in the application source code repository." },
      { id: 'B', text: "Require developers to SSH into production servers daily to manually export credentials into environment variables." },
      { id: 'C', text: "Deploy Vault Agent as a sidecar or daemon to handle authentication, token renewal, and automated secret templating to local disk." },
      { id: 'D', text: "Use custom cron scripts that curl the Vault API and write static JSON secrets to public web directories." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Vault Agent automates the client-side lifecycle of Vault authentication, token renewal, and secret retrieval. Using Vault Agent Templates, it renders application configuration files populated with fresh secrets directly into application shared memory or local files.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["vault-agent", "sidecar", "templating", "Educational Remote Proctoring Platform"]
  },
  {
    id: "hashicorp-vault-474",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Vault High Availability Architecture: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "In a real estate valuation & geo-spatial analytics infrastructure, a property appraisal engine fuses gis parcel maps with real-time market transactions for automated valuation. The operations team is currently orchestrating active/standby clusters with integrated Raft consensus under production deployment cycle 19.24.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these real estate valuation & geo-spatial analytics criteria for vault high availability architecture?",
    options: [
      { id: 'A', text: "Run a single standalone Vault node with local file storage in production without backups." },
      { id: 'B', text: "Deploy multiple active Vault nodes writing concurrently to an uncoordinated NFS filesystem." },
      { id: 'C', text: "Place Vault in read-only mode and disable all state updates to achieve high availability." },
      { id: 'D', text: "Deploy a multi-node Vault cluster using integrated Raft storage, where one node is elected active and standby nodes forward requests." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Production Vault architectures utilize an Active/Standby clustering model backed by integrated Raft consensus (or Consul). Only the elected active leader processes write operations, while standby nodes handle client request forwarding or read performance scaling.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["raft", "ha", "clustering", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "hashicorp-vault-475",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d3",
    domainName: "Manage Vault tokens, leases, and operational architecture",
    title: "Auto-Unseal with Cloud KMS: Disaster Emergency Dispatch & Operations",
    scenario: "In a disaster emergency dispatch & operations infrastructure, a municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The operations team is currently automating cluster boot recovery without manual Shamir key coordination under production deployment cycle 19.25.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these disaster emergency dispatch & operations criteria for auto-unseal with cloud kms?",
    options: [
      { id: 'A', text: "Configure the 'seal' stanza with AWS KMS, Azure Key Vault, or GCP KMS to automatically unseal Vault upon service initialization and reboot." },
      { id: 'B', text: "Store Shamir unseal keys in plaintext inside a shell startup script on the local host." },
      { id: 'C', text: "Disable Vault encryption so that the storage backend does not require unsealing." },
      { id: 'D', text: "Share all Shamir unseal keys in an unencrypted team chat channel." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Auto-unseal delegates the unsealing process to a trusted cloud Key Management Service (AWS KMS, Azure Key Vault, Google Cloud KMS, or PKCS#11 HSM). When Vault restarts, it decrypts its master key via the KMS API without human intervention, eliminating operational downtime.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["auto-unseal", "kms", "shamir", "Disaster Emergency Dispatch & Operations"]
  }
];

export default HASHICORP_VAULT_QUESTIONS_19;
