export const HASHICORP_VAULT_QUESTIONS_13 = [
  {
    id: "hashicorp-vault-301",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Transit Secrets Engine: High-Frequency FinTech Trading",
    scenario: "In a high-frequency fintech trading infrastructure, a quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The operations team is currently providing encryption-as-a-service without exposing private keys under production deployment cycle 13.1.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these high-frequency fintech trading criteria for transit secrets engine?",
    options: [
      { id: 'A', text: "Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault." },
      { id: 'B', text: "Export the transit master private key to the application server and execute AES encryption in local application memory." },
      { id: 'C', text: "Store all encryption keys in unencrypted environment variables on host operating systems." },
      { id: 'D', text: "Use base64 encoding on application strings before storing them in database tables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Vault Transit secrets engine acts as Cryptography-as-a-Service (EaaS). Vault manages key generation, key rotation, and encryption/decryption operations internally; the private key material never leaves the secure boundaries of Vault storage.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["transit", "encryption", "eaas", "High-Frequency FinTech Trading"]
  },
  {
    id: "hashicorp-vault-302",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Database Dynamic Credentials: Healthcare Patient Records & HIPAA",
    scenario: "In a healthcare patient records & hipaa infrastructure, a national hospital network requires strict cryptographic privacy, auditable access controls, and hipaa compliance. The operations team is currently generating ephemeral database users with automatic lease expiration under production deployment cycle 13.2.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these healthcare patient records & hipaa criteria for database dynamic credentials?",
    options: [
      { id: 'A', text: "Provide a single static DBA root username and password hardcoded in database client connection pools." },
      { id: 'B', text: "Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL." },
      { id: 'C', text: "Manually run SQL scripts each week to rotate passwords and email updated credentials to engineers." },
      { id: 'D', text: "Use Vault KV to store a permanent shared PostgreSQL superuser password accessed by all microservices." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Database secrets engine generates dynamic, on-demand credentials with explicit time-to-live (TTL) leases. When the lease expires and is not renewed, Vault automatically executes revocation statements in the target database to drop the ephemeral role, eliminating static credential leakage.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["database", "dynamic-secrets", "leases", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "hashicorp-vault-303",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "PKI Secrets Engine: Global E-Commerce Black Friday Scale",
    scenario: "In a global e-commerce black friday scale infrastructure, an international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The operations team is currently issuing dynamic X.509 certificates and short-lived TLS keys under production deployment cycle 13.3.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these global e-commerce black friday scale criteria for pki secrets engine?",
    options: [
      { id: 'A', text: "Generate a self-signed 10-year root certificate and distribute the private key directly to web servers." },
      { id: 'B', text: "Purchase individual static certificates from public CAs and store them on unencrypted shared NFS drives." },
      { id: 'C', text: "Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API." },
      { id: 'D', text: "Disable TLS encryption across internal service mesh communications to eliminate certificate renewal overhead." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Vault PKI secrets engine automates the issuance of short-lived TLS certificates for internal microservices and infrastructure. Using short expiration windows (e.g., hours or days) eliminates the operational nightmare of Certificate Revocation Lists (CRLs) and manual certificate renewal fires.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["pki", "tls", "certificates", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "hashicorp-vault-304",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Transit Key Rotation and Rewrap: Autonomous Vehicle Telemetry",
    scenario: "In a autonomous vehicle telemetry infrastructure, a self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The operations team is currently rotating cryptographic keys with zero downtime for stored ciphertext under production deployment cycle 13.4.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these autonomous vehicle telemetry criteria for transit key rotation and rewrap?",
    options: [
      { id: 'A', text: "Delete the existing transit key and re-encrypt all historic data using a new key name." },
      { id: 'B', text: "Change the Vault master unseal key to force all transit ciphertexts to decrypt automatically." },
      { id: 'C', text: "Store both old and new plaintext keys side-by-side in database columns." },
      { id: 'D', text: "Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When a transit key is rotated, Vault creates a new key version used for future encryptions while retaining older versions for decrypting legacy data. The 'rewrap' endpoint updates older ciphertexts to the latest key version without returning plaintext to the client application.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["transit", "key-rotation", "rewrap", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "hashicorp-vault-305",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "AWS Dynamic IAM Credentials: Multi-Tenant B2B SaaS Platform",
    scenario: "In a multi-tenant b2b saas platform infrastructure, an enterprise cloud saas architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The operations team is currently provisioning short-lived cloud credentials for distributed apps under production deployment cycle 13.5.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these multi-tenant b2b saas platform criteria for aws dynamic iam credentials?",
    options: [
      { id: 'A', text: "Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users." },
      { id: 'B', text: "Generate permanent IAM user access keys with AdministratorAccess and embed them in Docker images." },
      { id: 'C', text: "Store AWS root account credentials in a public GitHub repository." },
      { id: 'D', text: "Disable IAM authentication and allow public unauthenticated access to AWS S3 buckets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The AWS secrets engine generates ephemeral IAM credentials (assumed roles or IAM users) tied to specific policies and TTLs. When the lease expires, Vault automatically cleans up the temporary credentials, preventing long-lived cloud key compromises.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["aws", "iam", "dynamic-secrets", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "hashicorp-vault-306",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "SSH Secrets Engine: Media Streaming & Global CDN",
    scenario: "In a media streaming & global cdn infrastructure, a global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized drm protection. The operations team is currently issuing signed client certificates for zero-trust server access under production deployment cycle 13.6.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these media streaming & global cdn criteria for ssh secrets engine?",
    options: [
      { id: 'A', text: "Distribute an unencrypted private SSH key to all developer laptops and append it to authorized_keys." },
      { id: 'B', text: "Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons." },
      { id: 'C', text: "Disable SSH password authentication and allow root login with no credentials on public bastion hosts." },
      { id: 'D', text: "Store static SSH host keys in public Slack channels for team access." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Vault SSH secrets engine uses signed SSH certificates. Servers trust Vault's CA public key in their 'sshd_config', allowing engineers to authenticate using short-lived client certificates signed by Vault without maintaining static public keys in 'authorized_keys' files on thousands of hosts.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["ssh", "certificates", "zero-trust", "Media Streaming & Global CDN"]
  },
  {
    id: "hashicorp-vault-307",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "KV v2 Secrets Engine: Aerospace Satellite Ground Systems",
    scenario: "In a aerospace satellite ground systems infrastructure, an aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The operations team is currently storing versioned secrets with rollback and soft-delete capabilities under production deployment cycle 13.7.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these aerospace satellite ground systems criteria for kv v2 secrets engine?",
    options: [
      { id: 'A', text: "Use KV version 1 and manually append timestamps to secret keys to track past values." },
      { id: 'B', text: "Store secret versions as separate plaintext files inside the Vault Raft data folder." },
      { id: 'C', text: "Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations." },
      { id: 'D', text: "Configure Transit encryption on KV v1 to simulate secret revision history." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "KV Secrets Engine v2 natively provides versioning, metadata inspection, soft deletion (undelete), permanent destruction, and optimistic locking via Check-And-Set (CAS). KV v1 only supports unversioned static overwrite operations without history.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["kv-v2", "versioning", "secrets", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "hashicorp-vault-308",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Transit Secrets Engine: Telecommunications 5G Core Network",
    scenario: "In a telecommunications 5g core network infrastructure, a national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The operations team is currently providing encryption-as-a-service without exposing private keys under production deployment cycle 13.8.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these telecommunications 5g core network criteria for transit secrets engine?",
    options: [
      { id: 'A', text: "Export the transit master private key to the application server and execute AES encryption in local application memory." },
      { id: 'B', text: "Store all encryption keys in unencrypted environment variables on host operating systems." },
      { id: 'C', text: "Use base64 encoding on application strings before storing them in database tables." },
      { id: 'D', text: "Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Vault Transit secrets engine acts as Cryptography-as-a-Service (EaaS). Vault manages key generation, key rotation, and encryption/decryption operations internally; the private key material never leaves the secure boundaries of Vault storage.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["transit", "encryption", "eaas", "Telecommunications 5G Core Network"]
  },
  {
    id: "hashicorp-vault-309",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Database Dynamic Credentials: Renewable Energy Smart Grid IoT",
    scenario: "In a renewable energy smart grid iot infrastructure, a smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The operations team is currently generating ephemeral database users with automatic lease expiration under production deployment cycle 13.9.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these renewable energy smart grid iot criteria for database dynamic credentials?",
    options: [
      { id: 'A', text: "Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL." },
      { id: 'B', text: "Provide a single static DBA root username and password hardcoded in database client connection pools." },
      { id: 'C', text: "Manually run SQL scripts each week to rotate passwords and email updated credentials to engineers." },
      { id: 'D', text: "Use Vault KV to store a permanent shared PostgreSQL superuser password accessed by all microservices." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Database secrets engine generates dynamic, on-demand credentials with explicit time-to-live (TTL) leases. When the lease expires and is not renewed, Vault automatically executes revocation statements in the target database to drop the ephemeral role, eliminating static credential leakage.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["database", "dynamic-secrets", "leases", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "hashicorp-vault-310",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "PKI Secrets Engine: Supply Chain Cold-Chain Logistics",
    scenario: "In a supply chain cold-chain logistics infrastructure, a pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The operations team is currently issuing dynamic X.509 certificates and short-lived TLS keys under production deployment cycle 13.10.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these supply chain cold-chain logistics criteria for pki secrets engine?",
    options: [
      { id: 'A', text: "Generate a self-signed 10-year root certificate and distribute the private key directly to web servers." },
      { id: 'B', text: "Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API." },
      { id: 'C', text: "Purchase individual static certificates from public CAs and store them on unencrypted shared NFS drives." },
      { id: 'D', text: "Disable TLS encryption across internal service mesh communications to eliminate certificate renewal overhead." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Vault PKI secrets engine automates the issuance of short-lived TLS certificates for internal microservices and infrastructure. Using short expiration windows (e.g., hours or days) eliminates the operational nightmare of Certificate Revocation Lists (CRLs) and manual certificate renewal fires.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["pki", "tls", "certificates", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "hashicorp-vault-311",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Transit Key Rotation and Rewrap: Banking Core Ledger & Payments",
    scenario: "In a banking core ledger & payments infrastructure, a central banking consortium enforces acid consistency, immutable transaction audit trails, and automated reconciliation. The operations team is currently rotating cryptographic keys with zero downtime for stored ciphertext under production deployment cycle 13.11.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these banking core ledger & payments criteria for transit key rotation and rewrap?",
    options: [
      { id: 'A', text: "Delete the existing transit key and re-encrypt all historic data using a new key name." },
      { id: 'B', text: "Change the Vault master unseal key to force all transit ciphertexts to decrypt automatically." },
      { id: 'C', text: "Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'." },
      { id: 'D', text: "Store both old and new plaintext keys side-by-side in database columns." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When a transit key is rotated, Vault creates a new key version used for future encryptions while retaining older versions for decrypting legacy data. The 'rewrap' endpoint updates older ciphertexts to the latest key version without returning plaintext to the client application.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["transit", "key-rotation", "rewrap", "Banking Core Ledger & Payments"]
  },
  {
    id: "hashicorp-vault-312",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "AWS Dynamic IAM Credentials: Genomic Sequencing & Biotech Pipeline",
    scenario: "In a genomic sequencing & biotech pipeline infrastructure, a genomics laboratory processes petabyte-scale fastq files with distributed batch computing and high-throughput posix storage. The operations team is currently provisioning short-lived cloud credentials for distributed apps under production deployment cycle 13.12.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these genomic sequencing & biotech pipeline criteria for aws dynamic iam credentials?",
    options: [
      { id: 'A', text: "Generate permanent IAM user access keys with AdministratorAccess and embed them in Docker images." },
      { id: 'B', text: "Store AWS root account credentials in a public GitHub repository." },
      { id: 'C', text: "Disable IAM authentication and allow public unauthenticated access to AWS S3 buckets." },
      { id: 'D', text: "Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The AWS secrets engine generates ephemeral IAM credentials (assumed roles or IAM users) tied to specific policies and TTLs. When the lease expires, Vault automatically cleans up the temporary credentials, preventing long-lived cloud key compromises.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["aws", "iam", "dynamic-secrets", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "hashicorp-vault-313",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "SSH Secrets Engine: Defense-Grade Zero-Trust Network",
    scenario: "In a defense-grade zero-trust network infrastructure, a defense intelligence system enforces continuous mutual tls authentication, strict least privilege, and non-repudiation. The operations team is currently issuing signed client certificates for zero-trust server access under production deployment cycle 13.13.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these defense-grade zero-trust network criteria for ssh secrets engine?",
    options: [
      { id: 'A', text: "Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons." },
      { id: 'B', text: "Distribute an unencrypted private SSH key to all developer laptops and append it to authorized_keys." },
      { id: 'C', text: "Disable SSH password authentication and allow root login with no credentials on public bastion hosts." },
      { id: 'D', text: "Store static SSH host keys in public Slack channels for team access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Vault SSH secrets engine uses signed SSH certificates. Servers trust Vault's CA public key in their 'sshd_config', allowing engineers to authenticate using short-lived client certificates signed by Vault without maintaining static public keys in 'authorized_keys' files on thousands of hosts.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["ssh", "certificates", "zero-trust", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "hashicorp-vault-314",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "KV v2 Secrets Engine: Online Multiplayer Gaming Engine",
    scenario: "In a online multiplayer gaming engine infrastructure, a real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The operations team is currently storing versioned secrets with rollback and soft-delete capabilities under production deployment cycle 13.14.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these online multiplayer gaming engine criteria for kv v2 secrets engine?",
    options: [
      { id: 'A', text: "Use KV version 1 and manually append timestamps to secret keys to track past values." },
      { id: 'B', text: "Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations." },
      { id: 'C', text: "Store secret versions as separate plaintext files inside the Vault Raft data folder." },
      { id: 'D', text: "Configure Transit encryption on KV v1 to simulate secret revision history." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "KV Secrets Engine v2 natively provides versioning, metadata inspection, soft deletion (undelete), permanent destruction, and optimistic locking via Check-And-Set (CAS). KV v1 only supports unversioned static overwrite operations without history.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["kv-v2", "versioning", "secrets", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "hashicorp-vault-315",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Transit Secrets Engine: Insurance Risk & Actuarial Modeling",
    scenario: "In a insurance risk & actuarial modeling infrastructure, an actuarial underwriting platform executes monte carlo simulations across millions of policy holder records with parallel workers. The operations team is currently providing encryption-as-a-service without exposing private keys under production deployment cycle 13.15.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these insurance risk & actuarial modeling criteria for transit secrets engine?",
    options: [
      { id: 'A', text: "Export the transit master private key to the application server and execute AES encryption in local application memory." },
      { id: 'B', text: "Store all encryption keys in unencrypted environment variables on host operating systems." },
      { id: 'C', text: "Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault." },
      { id: 'D', text: "Use base64 encoding on application strings before storing them in database tables." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Vault Transit secrets engine acts as Cryptography-as-a-Service (EaaS). Vault manages key generation, key rotation, and encryption/decryption operations internally; the private key material never leaves the secure boundaries of Vault storage.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["transit", "encryption", "eaas", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "hashicorp-vault-316",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Database Dynamic Credentials: Pharmaceutical Clinical Trial Platform",
    scenario: "In a pharmaceutical clinical trial platform infrastructure, a global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The operations team is currently generating ephemeral database users with automatic lease expiration under production deployment cycle 13.16.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these pharmaceutical clinical trial platform criteria for database dynamic credentials?",
    options: [
      { id: 'A', text: "Provide a single static DBA root username and password hardcoded in database client connection pools." },
      { id: 'B', text: "Manually run SQL scripts each week to rotate passwords and email updated credentials to engineers." },
      { id: 'C', text: "Use Vault KV to store a permanent shared PostgreSQL superuser password accessed by all microservices." },
      { id: 'D', text: "Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Database secrets engine generates dynamic, on-demand credentials with explicit time-to-live (TTL) leases. When the lease expires and is not renewed, Vault automatically executes revocation statements in the target database to drop the ephemeral role, eliminating static credential leakage.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["database", "dynamic-secrets", "leases", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "hashicorp-vault-317",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "PKI Secrets Engine: Smart City Traffic & Mobility Sensor Hub",
    scenario: "In a smart city traffic & mobility sensor hub infrastructure, a metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The operations team is currently issuing dynamic X.509 certificates and short-lived TLS keys under production deployment cycle 13.17.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these smart city traffic & mobility sensor hub criteria for pki secrets engine?",
    options: [
      { id: 'A', text: "Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API." },
      { id: 'B', text: "Generate a self-signed 10-year root certificate and distribute the private key directly to web servers." },
      { id: 'C', text: "Purchase individual static certificates from public CAs and store them on unencrypted shared NFS drives." },
      { id: 'D', text: "Disable TLS encryption across internal service mesh communications to eliminate certificate renewal overhead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Vault PKI secrets engine automates the issuance of short-lived TLS certificates for internal microservices and infrastructure. Using short expiration windows (e.g., hours or days) eliminates the operational nightmare of Certificate Revocation Lists (CRLs) and manual certificate renewal fires.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["pki", "tls", "certificates", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "hashicorp-vault-318",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Transit Key Rotation and Rewrap: Digital Identity & Biometric Verification",
    scenario: "In a digital identity & biometric verification infrastructure, a cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The operations team is currently rotating cryptographic keys with zero downtime for stored ciphertext under production deployment cycle 13.18.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these digital identity & biometric verification criteria for transit key rotation and rewrap?",
    options: [
      { id: 'A', text: "Delete the existing transit key and re-encrypt all historic data using a new key name." },
      { id: 'B', text: "Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'." },
      { id: 'C', text: "Change the Vault master unseal key to force all transit ciphertexts to decrypt automatically." },
      { id: 'D', text: "Store both old and new plaintext keys side-by-side in database columns." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When a transit key is rotated, Vault creates a new key version used for future encryptions while retaining older versions for decrypting legacy data. The 'rewrap' endpoint updates older ciphertexts to the latest key version without returning plaintext to the client application.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["transit", "key-rotation", "rewrap", "Digital Identity & Biometric Verification"]
  },
  {
    id: "hashicorp-vault-319",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "AWS Dynamic IAM Credentials: Legal Discovery & Semantic Document Search",
    scenario: "In a legal discovery & semantic document search infrastructure, a global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The operations team is currently provisioning short-lived cloud credentials for distributed apps under production deployment cycle 13.19.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these legal discovery & semantic document search criteria for aws dynamic iam credentials?",
    options: [
      { id: 'A', text: "Generate permanent IAM user access keys with AdministratorAccess and embed them in Docker images." },
      { id: 'B', text: "Store AWS root account credentials in a public GitHub repository." },
      { id: 'C', text: "Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users." },
      { id: 'D', text: "Disable IAM authentication and allow public unauthenticated access to AWS S3 buckets." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The AWS secrets engine generates ephemeral IAM credentials (assumed roles or IAM users) tied to specific policies and TTLs. When the lease expires, Vault automatically cleans up the temporary credentials, preventing long-lived cloud key compromises.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["aws", "iam", "dynamic-secrets", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "hashicorp-vault-320",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "SSH Secrets Engine: AdTech Real-Time Bidding Exchange",
    scenario: "In a adtech real-time bidding exchange infrastructure, an advertising exchange processes 500,000 bids per second with a strict 20-millisecond sla and distributed caching. The operations team is currently issuing signed client certificates for zero-trust server access under production deployment cycle 13.20.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these adtech real-time bidding exchange criteria for ssh secrets engine?",
    options: [
      { id: 'A', text: "Distribute an unencrypted private SSH key to all developer laptops and append it to authorized_keys." },
      { id: 'B', text: "Disable SSH password authentication and allow root login with no credentials on public bastion hosts." },
      { id: 'C', text: "Store static SSH host keys in public Slack channels for team access." },
      { id: 'D', text: "Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Vault SSH secrets engine uses signed SSH certificates. Servers trust Vault's CA public key in their 'sshd_config', allowing engineers to authenticate using short-lived client certificates signed by Vault without maintaining static public keys in 'authorized_keys' files on thousands of hosts.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["ssh", "certificates", "zero-trust", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "hashicorp-vault-321",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "KV v2 Secrets Engine: Precision Agriculture & Drone Scouting",
    scenario: "In a precision agriculture & drone scouting infrastructure, an agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The operations team is currently storing versioned secrets with rollback and soft-delete capabilities under production deployment cycle 13.21.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these precision agriculture & drone scouting criteria for kv v2 secrets engine?",
    options: [
      { id: 'A', text: "Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations." },
      { id: 'B', text: "Use KV version 1 and manually append timestamps to secret keys to track past values." },
      { id: 'C', text: "Store secret versions as separate plaintext files inside the Vault Raft data folder." },
      { id: 'D', text: "Configure Transit encryption on KV v1 to simulate secret revision history." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "KV Secrets Engine v2 natively provides versioning, metadata inspection, soft deletion (undelete), permanent destruction, and optimistic locking via Check-And-Set (CAS). KV v1 only supports unversioned static overwrite operations without history.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["kv-v2", "versioning", "secrets", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "hashicorp-vault-322",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Transit Secrets Engine: Industrial Robotics Predictive Maintenance",
    scenario: "In a industrial robotics predictive maintenance infrastructure, a semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The operations team is currently providing encryption-as-a-service without exposing private keys under production deployment cycle 13.22.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these industrial robotics predictive maintenance criteria for transit secrets engine?",
    options: [
      { id: 'A', text: "Export the transit master private key to the application server and execute AES encryption in local application memory." },
      { id: 'B', text: "Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault." },
      { id: 'C', text: "Store all encryption keys in unencrypted environment variables on host operating systems." },
      { id: 'D', text: "Use base64 encoding on application strings before storing them in database tables." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Vault Transit secrets engine acts as Cryptography-as-a-Service (EaaS). Vault manages key generation, key rotation, and encryption/decryption operations internally; the private key material never leaves the secure boundaries of Vault storage.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["transit", "encryption", "eaas", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "hashicorp-vault-323",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Database Dynamic Credentials: Educational Remote Proctoring Platform",
    scenario: "In a educational remote proctoring platform infrastructure, an online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The operations team is currently generating ephemeral database users with automatic lease expiration under production deployment cycle 13.23.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these educational remote proctoring platform criteria for database dynamic credentials?",
    options: [
      { id: 'A', text: "Provide a single static DBA root username and password hardcoded in database client connection pools." },
      { id: 'B', text: "Manually run SQL scripts each week to rotate passwords and email updated credentials to engineers." },
      { id: 'C', text: "Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL." },
      { id: 'D', text: "Use Vault KV to store a permanent shared PostgreSQL superuser password accessed by all microservices." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Database secrets engine generates dynamic, on-demand credentials with explicit time-to-live (TTL) leases. When the lease expires and is not renewed, Vault automatically executes revocation statements in the target database to drop the ephemeral role, eliminating static credential leakage.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["database", "dynamic-secrets", "leases", "Educational Remote Proctoring Platform"]
  },
  {
    id: "hashicorp-vault-324",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "PKI Secrets Engine: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "In a real estate valuation & geo-spatial analytics infrastructure, a property appraisal engine fuses gis parcel maps with real-time market transactions for automated valuation. The operations team is currently issuing dynamic X.509 certificates and short-lived TLS keys under production deployment cycle 13.24.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these real estate valuation & geo-spatial analytics criteria for pki secrets engine?",
    options: [
      { id: 'A', text: "Generate a self-signed 10-year root certificate and distribute the private key directly to web servers." },
      { id: 'B', text: "Purchase individual static certificates from public CAs and store them on unencrypted shared NFS drives." },
      { id: 'C', text: "Disable TLS encryption across internal service mesh communications to eliminate certificate renewal overhead." },
      { id: 'D', text: "Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Vault PKI secrets engine automates the issuance of short-lived TLS certificates for internal microservices and infrastructure. Using short expiration windows (e.g., hours or days) eliminates the operational nightmare of Certificate Revocation Lists (CRLs) and manual certificate renewal fires.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["pki", "tls", "certificates", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "hashicorp-vault-325",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Transit Key Rotation and Rewrap: Disaster Emergency Dispatch & Operations",
    scenario: "In a disaster emergency dispatch & operations infrastructure, a municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The operations team is currently rotating cryptographic keys with zero downtime for stored ciphertext under production deployment cycle 13.25.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these disaster emergency dispatch & operations criteria for transit key rotation and rewrap?",
    options: [
      { id: 'A', text: "Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'." },
      { id: 'B', text: "Delete the existing transit key and re-encrypt all historic data using a new key name." },
      { id: 'C', text: "Change the Vault master unseal key to force all transit ciphertexts to decrypt automatically." },
      { id: 'D', text: "Store both old and new plaintext keys side-by-side in database columns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When a transit key is rotated, Vault creates a new key version used for future encryptions while retaining older versions for decrypting legacy data. The 'rewrap' endpoint updates older ciphertexts to the latest key version without returning plaintext to the client application.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["transit", "key-rotation", "rewrap", "Disaster Emergency Dispatch & Operations"]
  }
];

export default HASHICORP_VAULT_QUESTIONS_13;
