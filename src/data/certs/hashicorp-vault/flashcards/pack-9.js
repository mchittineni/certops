export const HASHICORP_VAULT_FLASHCARDS_9 = [
  {
    id: "hashicorp-vault-fc-201",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: PKI Secrets Engine in High-Frequency FinTech Trading",
    hint: "Focus on pki and tls operational principles.",
    back: "<strong>PKI Secrets Engine</strong>: Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API. Core architectural rationale: Vault PKI secrets engine automates the issuance of short-lived TLS certificates for internal microservices and infrastructure. Using short expiration windows (e...",
    tags: ["pki", "tls", "certificates", "High-Frequency FinTech Trading"]
  },
  {
    id: "hashicorp-vault-fc-202",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Key Rotation and Rewrap in Healthcare Patient Records & HIPAA",
    hint: "Focus on transit and key-rotation operational principles.",
    back: "<strong>Transit Key Rotation and Rewrap</strong>: Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'. Core architectural rationale: When a transit key is rotated, Vault creates a new key version used for future encryptions while retaining older versions for decrypting legacy data. The 'rewra...",
    tags: ["transit", "key-rotation", "rewrap", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "hashicorp-vault-fc-203",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: AWS Dynamic IAM Credentials in Global E-Commerce Black Friday Scale",
    hint: "Focus on aws and iam operational principles.",
    back: "<strong>AWS Dynamic IAM Credentials</strong>: Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users. Core architectural rationale: The AWS secrets engine generates ephemeral IAM credentials (assumed roles or IAM users) tied to specific policies and TTLs. When the lease expires, Vault automa...",
    tags: ["aws", "iam", "dynamic-secrets", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "hashicorp-vault-fc-204",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: SSH Secrets Engine in Autonomous Vehicle Telemetry",
    hint: "Focus on ssh and certificates operational principles.",
    back: "<strong>SSH Secrets Engine</strong>: Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons. Core architectural rationale: Vault SSH secrets engine uses signed SSH certificates. Servers trust Vault's CA public key in their 'sshd_config', allowing engineers to authenticate using shor...",
    tags: ["ssh", "certificates", "zero-trust", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "hashicorp-vault-fc-205",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: KV v2 Secrets Engine in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on kv-v2 and versioning operational principles.",
    back: "<strong>KV v2 Secrets Engine</strong>: Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations. Core architectural rationale: KV Secrets Engine v2 natively provides versioning, metadata inspection, soft deletion (undelete), permanent destruction, and optimistic locking via Check-And-Se...",
    tags: ["kv-v2", "versioning", "secrets", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "hashicorp-vault-fc-206",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Secrets Engine in Media Streaming & Global CDN",
    hint: "Focus on transit and encryption operational principles.",
    back: "<strong>Transit Secrets Engine</strong>: Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault. Core architectural rationale: Vault Transit secrets engine acts as Cryptography-as-a-Service (EaaS). Vault manages key generation, key rotation, and encryption/decryption operations internal...",
    tags: ["transit", "encryption", "eaas", "Media Streaming & Global CDN"]
  },
  {
    id: "hashicorp-vault-fc-207",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Database Dynamic Credentials in Aerospace Satellite Ground Systems",
    hint: "Focus on database and dynamic-secrets operational principles.",
    back: "<strong>Database Dynamic Credentials</strong>: Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL. Core architectural rationale: The Database secrets engine generates dynamic, on-demand credentials with explicit time-to-live (TTL) leases. When the lease expires and is not renewed, Vault a...",
    tags: ["database", "dynamic-secrets", "leases", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "hashicorp-vault-fc-208",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: PKI Secrets Engine in Telecommunications 5G Core Network",
    hint: "Focus on pki and tls operational principles.",
    back: "<strong>PKI Secrets Engine</strong>: Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API. Core architectural rationale: Vault PKI secrets engine automates the issuance of short-lived TLS certificates for internal microservices and infrastructure. Using short expiration windows (e...",
    tags: ["pki", "tls", "certificates", "Telecommunications 5G Core Network"]
  },
  {
    id: "hashicorp-vault-fc-209",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Key Rotation and Rewrap in Renewable Energy Smart Grid IoT",
    hint: "Focus on transit and key-rotation operational principles.",
    back: "<strong>Transit Key Rotation and Rewrap</strong>: Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'. Core architectural rationale: When a transit key is rotated, Vault creates a new key version used for future encryptions while retaining older versions for decrypting legacy data. The 'rewra...",
    tags: ["transit", "key-rotation", "rewrap", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "hashicorp-vault-fc-210",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: AWS Dynamic IAM Credentials in Supply Chain Cold-Chain Logistics",
    hint: "Focus on aws and iam operational principles.",
    back: "<strong>AWS Dynamic IAM Credentials</strong>: Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users. Core architectural rationale: The AWS secrets engine generates ephemeral IAM credentials (assumed roles or IAM users) tied to specific policies and TTLs. When the lease expires, Vault automa...",
    tags: ["aws", "iam", "dynamic-secrets", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "hashicorp-vault-fc-211",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: SSH Secrets Engine in Banking Core Ledger & Payments",
    hint: "Focus on ssh and certificates operational principles.",
    back: "<strong>SSH Secrets Engine</strong>: Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons. Core architectural rationale: Vault SSH secrets engine uses signed SSH certificates. Servers trust Vault's CA public key in their 'sshd_config', allowing engineers to authenticate using shor...",
    tags: ["ssh", "certificates", "zero-trust", "Banking Core Ledger & Payments"]
  },
  {
    id: "hashicorp-vault-fc-212",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: KV v2 Secrets Engine in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on kv-v2 and versioning operational principles.",
    back: "<strong>KV v2 Secrets Engine</strong>: Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations. Core architectural rationale: KV Secrets Engine v2 natively provides versioning, metadata inspection, soft deletion (undelete), permanent destruction, and optimistic locking via Check-And-Se...",
    tags: ["kv-v2", "versioning", "secrets", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "hashicorp-vault-fc-213",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Secrets Engine in Defense-Grade Zero-Trust Network",
    hint: "Focus on transit and encryption operational principles.",
    back: "<strong>Transit Secrets Engine</strong>: Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault. Core architectural rationale: Vault Transit secrets engine acts as Cryptography-as-a-Service (EaaS). Vault manages key generation, key rotation, and encryption/decryption operations internal...",
    tags: ["transit", "encryption", "eaas", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "hashicorp-vault-fc-214",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Database Dynamic Credentials in Online Multiplayer Gaming Engine",
    hint: "Focus on database and dynamic-secrets operational principles.",
    back: "<strong>Database Dynamic Credentials</strong>: Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL. Core architectural rationale: The Database secrets engine generates dynamic, on-demand credentials with explicit time-to-live (TTL) leases. When the lease expires and is not renewed, Vault a...",
    tags: ["database", "dynamic-secrets", "leases", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "hashicorp-vault-fc-215",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: PKI Secrets Engine in Insurance Risk & Actuarial Modeling",
    hint: "Focus on pki and tls operational principles.",
    back: "<strong>PKI Secrets Engine</strong>: Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API. Core architectural rationale: Vault PKI secrets engine automates the issuance of short-lived TLS certificates for internal microservices and infrastructure. Using short expiration windows (e...",
    tags: ["pki", "tls", "certificates", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "hashicorp-vault-fc-216",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Key Rotation and Rewrap in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on transit and key-rotation operational principles.",
    back: "<strong>Transit Key Rotation and Rewrap</strong>: Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'. Core architectural rationale: When a transit key is rotated, Vault creates a new key version used for future encryptions while retaining older versions for decrypting legacy data. The 'rewra...",
    tags: ["transit", "key-rotation", "rewrap", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "hashicorp-vault-fc-217",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: AWS Dynamic IAM Credentials in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on aws and iam operational principles.",
    back: "<strong>AWS Dynamic IAM Credentials</strong>: Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users. Core architectural rationale: The AWS secrets engine generates ephemeral IAM credentials (assumed roles or IAM users) tied to specific policies and TTLs. When the lease expires, Vault automa...",
    tags: ["aws", "iam", "dynamic-secrets", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "hashicorp-vault-fc-218",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: SSH Secrets Engine in Digital Identity & Biometric Verification",
    hint: "Focus on ssh and certificates operational principles.",
    back: "<strong>SSH Secrets Engine</strong>: Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons. Core architectural rationale: Vault SSH secrets engine uses signed SSH certificates. Servers trust Vault's CA public key in their 'sshd_config', allowing engineers to authenticate using shor...",
    tags: ["ssh", "certificates", "zero-trust", "Digital Identity & Biometric Verification"]
  },
  {
    id: "hashicorp-vault-fc-219",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: KV v2 Secrets Engine in Legal Discovery & Semantic Document Search",
    hint: "Focus on kv-v2 and versioning operational principles.",
    back: "<strong>KV v2 Secrets Engine</strong>: Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations. Core architectural rationale: KV Secrets Engine v2 natively provides versioning, metadata inspection, soft deletion (undelete), permanent destruction, and optimistic locking via Check-And-Se...",
    tags: ["kv-v2", "versioning", "secrets", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "hashicorp-vault-fc-220",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Secrets Engine in AdTech Real-Time Bidding Exchange",
    hint: "Focus on transit and encryption operational principles.",
    back: "<strong>Transit Secrets Engine</strong>: Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault. Core architectural rationale: Vault Transit secrets engine acts as Cryptography-as-a-Service (EaaS). Vault manages key generation, key rotation, and encryption/decryption operations internal...",
    tags: ["transit", "encryption", "eaas", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "hashicorp-vault-fc-221",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Database Dynamic Credentials in Precision Agriculture & Drone Scouting",
    hint: "Focus on database and dynamic-secrets operational principles.",
    back: "<strong>Database Dynamic Credentials</strong>: Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL. Core architectural rationale: The Database secrets engine generates dynamic, on-demand credentials with explicit time-to-live (TTL) leases. When the lease expires and is not renewed, Vault a...",
    tags: ["database", "dynamic-secrets", "leases", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "hashicorp-vault-fc-222",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: PKI Secrets Engine in Industrial Robotics Predictive Maintenance",
    hint: "Focus on pki and tls operational principles.",
    back: "<strong>PKI Secrets Engine</strong>: Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API. Core architectural rationale: Vault PKI secrets engine automates the issuance of short-lived TLS certificates for internal microservices and infrastructure. Using short expiration windows (e...",
    tags: ["pki", "tls", "certificates", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "hashicorp-vault-fc-223",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Key Rotation and Rewrap in Educational Remote Proctoring Platform",
    hint: "Focus on transit and key-rotation operational principles.",
    back: "<strong>Transit Key Rotation and Rewrap</strong>: Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'. Core architectural rationale: When a transit key is rotated, Vault creates a new key version used for future encryptions while retaining older versions for decrypting legacy data. The 'rewra...",
    tags: ["transit", "key-rotation", "rewrap", "Educational Remote Proctoring Platform"]
  },
  {
    id: "hashicorp-vault-fc-224",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: AWS Dynamic IAM Credentials in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on aws and iam operational principles.",
    back: "<strong>AWS Dynamic IAM Credentials</strong>: Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users. Core architectural rationale: The AWS secrets engine generates ephemeral IAM credentials (assumed roles or IAM users) tied to specific policies and TTLs. When the lease expires, Vault automa...",
    tags: ["aws", "iam", "dynamic-secrets", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "hashicorp-vault-fc-225",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: SSH Secrets Engine in Disaster Emergency Dispatch & Operations",
    hint: "Focus on ssh and certificates operational principles.",
    back: "<strong>SSH Secrets Engine</strong>: Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons. Core architectural rationale: Vault SSH secrets engine uses signed SSH certificates. Servers trust Vault's CA public key in their 'sshd_config', allowing engineers to authenticate using shor...",
    tags: ["ssh", "certificates", "zero-trust", "Disaster Emergency Dispatch & Operations"]
  }
];

export default HASHICORP_VAULT_FLASHCARDS_9;
