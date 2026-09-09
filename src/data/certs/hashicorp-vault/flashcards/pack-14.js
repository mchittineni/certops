export const HASHICORP_VAULT_FLASHCARDS_14 = [
  {
    id: "hashicorp-vault-fc-326",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Key Rotation and Rewrap in High-Frequency FinTech Trading",
    hint: "Focus on transit and key-rotation operational principles.",
    back: "<strong>Transit Key Rotation and Rewrap</strong>: Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'. Core architectural rationale: When a transit key is rotated, Vault creates a new key version used for future encryptions while retaining older versions for decrypting legacy data. The 'rewra...",
    tags: ["transit", "key-rotation", "rewrap", "High-Frequency FinTech Trading"]
  },
  {
    id: "hashicorp-vault-fc-327",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: AWS Dynamic IAM Credentials in Healthcare Patient Records & HIPAA",
    hint: "Focus on aws and iam operational principles.",
    back: "<strong>AWS Dynamic IAM Credentials</strong>: Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users. Core architectural rationale: The AWS secrets engine generates ephemeral IAM credentials (assumed roles or IAM users) tied to specific policies and TTLs. When the lease expires, Vault automa...",
    tags: ["aws", "iam", "dynamic-secrets", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "hashicorp-vault-fc-328",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: SSH Secrets Engine in Global E-Commerce Black Friday Scale",
    hint: "Focus on ssh and certificates operational principles.",
    back: "<strong>SSH Secrets Engine</strong>: Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons. Core architectural rationale: Vault SSH secrets engine uses signed SSH certificates. Servers trust Vault's CA public key in their 'sshd_config', allowing engineers to authenticate using shor...",
    tags: ["ssh", "certificates", "zero-trust", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "hashicorp-vault-fc-329",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: KV v2 Secrets Engine in Autonomous Vehicle Telemetry",
    hint: "Focus on kv-v2 and versioning operational principles.",
    back: "<strong>KV v2 Secrets Engine</strong>: Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations. Core architectural rationale: KV Secrets Engine v2 natively provides versioning, metadata inspection, soft deletion (undelete), permanent destruction, and optimistic locking via Check-And-Se...",
    tags: ["kv-v2", "versioning", "secrets", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "hashicorp-vault-fc-330",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Secrets Engine in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on transit and encryption operational principles.",
    back: "<strong>Transit Secrets Engine</strong>: Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault. Core architectural rationale: Vault Transit secrets engine acts as Cryptography-as-a-Service (EaaS). Vault manages key generation, key rotation, and encryption/decryption operations internal...",
    tags: ["transit", "encryption", "eaas", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "hashicorp-vault-fc-331",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Database Dynamic Credentials in Media Streaming & Global CDN",
    hint: "Focus on database and dynamic-secrets operational principles.",
    back: "<strong>Database Dynamic Credentials</strong>: Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL. Core architectural rationale: The Database secrets engine generates dynamic, on-demand credentials with explicit time-to-live (TTL) leases. When the lease expires and is not renewed, Vault a...",
    tags: ["database", "dynamic-secrets", "leases", "Media Streaming & Global CDN"]
  },
  {
    id: "hashicorp-vault-fc-332",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: PKI Secrets Engine in Aerospace Satellite Ground Systems",
    hint: "Focus on pki and tls operational principles.",
    back: "<strong>PKI Secrets Engine</strong>: Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API. Core architectural rationale: Vault PKI secrets engine automates the issuance of short-lived TLS certificates for internal microservices and infrastructure. Using short expiration windows (e...",
    tags: ["pki", "tls", "certificates", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "hashicorp-vault-fc-333",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Key Rotation and Rewrap in Telecommunications 5G Core Network",
    hint: "Focus on transit and key-rotation operational principles.",
    back: "<strong>Transit Key Rotation and Rewrap</strong>: Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'. Core architectural rationale: When a transit key is rotated, Vault creates a new key version used for future encryptions while retaining older versions for decrypting legacy data. The 'rewra...",
    tags: ["transit", "key-rotation", "rewrap", "Telecommunications 5G Core Network"]
  },
  {
    id: "hashicorp-vault-fc-334",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: AWS Dynamic IAM Credentials in Renewable Energy Smart Grid IoT",
    hint: "Focus on aws and iam operational principles.",
    back: "<strong>AWS Dynamic IAM Credentials</strong>: Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users. Core architectural rationale: The AWS secrets engine generates ephemeral IAM credentials (assumed roles or IAM users) tied to specific policies and TTLs. When the lease expires, Vault automa...",
    tags: ["aws", "iam", "dynamic-secrets", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "hashicorp-vault-fc-335",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: SSH Secrets Engine in Supply Chain Cold-Chain Logistics",
    hint: "Focus on ssh and certificates operational principles.",
    back: "<strong>SSH Secrets Engine</strong>: Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons. Core architectural rationale: Vault SSH secrets engine uses signed SSH certificates. Servers trust Vault's CA public key in their 'sshd_config', allowing engineers to authenticate using shor...",
    tags: ["ssh", "certificates", "zero-trust", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "hashicorp-vault-fc-336",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: KV v2 Secrets Engine in Banking Core Ledger & Payments",
    hint: "Focus on kv-v2 and versioning operational principles.",
    back: "<strong>KV v2 Secrets Engine</strong>: Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations. Core architectural rationale: KV Secrets Engine v2 natively provides versioning, metadata inspection, soft deletion (undelete), permanent destruction, and optimistic locking via Check-And-Se...",
    tags: ["kv-v2", "versioning", "secrets", "Banking Core Ledger & Payments"]
  },
  {
    id: "hashicorp-vault-fc-337",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Secrets Engine in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on transit and encryption operational principles.",
    back: "<strong>Transit Secrets Engine</strong>: Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault. Core architectural rationale: Vault Transit secrets engine acts as Cryptography-as-a-Service (EaaS). Vault manages key generation, key rotation, and encryption/decryption operations internal...",
    tags: ["transit", "encryption", "eaas", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "hashicorp-vault-fc-338",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Database Dynamic Credentials in Defense-Grade Zero-Trust Network",
    hint: "Focus on database and dynamic-secrets operational principles.",
    back: "<strong>Database Dynamic Credentials</strong>: Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL. Core architectural rationale: The Database secrets engine generates dynamic, on-demand credentials with explicit time-to-live (TTL) leases. When the lease expires and is not renewed, Vault a...",
    tags: ["database", "dynamic-secrets", "leases", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "hashicorp-vault-fc-339",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: PKI Secrets Engine in Online Multiplayer Gaming Engine",
    hint: "Focus on pki and tls operational principles.",
    back: "<strong>PKI Secrets Engine</strong>: Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API. Core architectural rationale: Vault PKI secrets engine automates the issuance of short-lived TLS certificates for internal microservices and infrastructure. Using short expiration windows (e...",
    tags: ["pki", "tls", "certificates", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "hashicorp-vault-fc-340",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Key Rotation and Rewrap in Insurance Risk & Actuarial Modeling",
    hint: "Focus on transit and key-rotation operational principles.",
    back: "<strong>Transit Key Rotation and Rewrap</strong>: Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'. Core architectural rationale: When a transit key is rotated, Vault creates a new key version used for future encryptions while retaining older versions for decrypting legacy data. The 'rewra...",
    tags: ["transit", "key-rotation", "rewrap", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "hashicorp-vault-fc-341",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: AWS Dynamic IAM Credentials in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on aws and iam operational principles.",
    back: "<strong>AWS Dynamic IAM Credentials</strong>: Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users. Core architectural rationale: The AWS secrets engine generates ephemeral IAM credentials (assumed roles or IAM users) tied to specific policies and TTLs. When the lease expires, Vault automa...",
    tags: ["aws", "iam", "dynamic-secrets", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "hashicorp-vault-fc-342",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: SSH Secrets Engine in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on ssh and certificates operational principles.",
    back: "<strong>SSH Secrets Engine</strong>: Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons. Core architectural rationale: Vault SSH secrets engine uses signed SSH certificates. Servers trust Vault's CA public key in their 'sshd_config', allowing engineers to authenticate using shor...",
    tags: ["ssh", "certificates", "zero-trust", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "hashicorp-vault-fc-343",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: KV v2 Secrets Engine in Digital Identity & Biometric Verification",
    hint: "Focus on kv-v2 and versioning operational principles.",
    back: "<strong>KV v2 Secrets Engine</strong>: Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations. Core architectural rationale: KV Secrets Engine v2 natively provides versioning, metadata inspection, soft deletion (undelete), permanent destruction, and optimistic locking via Check-And-Se...",
    tags: ["kv-v2", "versioning", "secrets", "Digital Identity & Biometric Verification"]
  },
  {
    id: "hashicorp-vault-fc-344",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Secrets Engine in Legal Discovery & Semantic Document Search",
    hint: "Focus on transit and encryption operational principles.",
    back: "<strong>Transit Secrets Engine</strong>: Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault. Core architectural rationale: Vault Transit secrets engine acts as Cryptography-as-a-Service (EaaS). Vault manages key generation, key rotation, and encryption/decryption operations internal...",
    tags: ["transit", "encryption", "eaas", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "hashicorp-vault-fc-345",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Database Dynamic Credentials in AdTech Real-Time Bidding Exchange",
    hint: "Focus on database and dynamic-secrets operational principles.",
    back: "<strong>Database Dynamic Credentials</strong>: Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL. Core architectural rationale: The Database secrets engine generates dynamic, on-demand credentials with explicit time-to-live (TTL) leases. When the lease expires and is not renewed, Vault a...",
    tags: ["database", "dynamic-secrets", "leases", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "hashicorp-vault-fc-346",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: PKI Secrets Engine in Precision Agriculture & Drone Scouting",
    hint: "Focus on pki and tls operational principles.",
    back: "<strong>PKI Secrets Engine</strong>: Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API. Core architectural rationale: Vault PKI secrets engine automates the issuance of short-lived TLS certificates for internal microservices and infrastructure. Using short expiration windows (e...",
    tags: ["pki", "tls", "certificates", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "hashicorp-vault-fc-347",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Key Rotation and Rewrap in Industrial Robotics Predictive Maintenance",
    hint: "Focus on transit and key-rotation operational principles.",
    back: "<strong>Transit Key Rotation and Rewrap</strong>: Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'. Core architectural rationale: When a transit key is rotated, Vault creates a new key version used for future encryptions while retaining older versions for decrypting legacy data. The 'rewra...",
    tags: ["transit", "key-rotation", "rewrap", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "hashicorp-vault-fc-348",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: AWS Dynamic IAM Credentials in Educational Remote Proctoring Platform",
    hint: "Focus on aws and iam operational principles.",
    back: "<strong>AWS Dynamic IAM Credentials</strong>: Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users. Core architectural rationale: The AWS secrets engine generates ephemeral IAM credentials (assumed roles or IAM users) tied to specific policies and TTLs. When the lease expires, Vault automa...",
    tags: ["aws", "iam", "dynamic-secrets", "Educational Remote Proctoring Platform"]
  },
  {
    id: "hashicorp-vault-fc-349",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: SSH Secrets Engine in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on ssh and certificates operational principles.",
    back: "<strong>SSH Secrets Engine</strong>: Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons. Core architectural rationale: Vault SSH secrets engine uses signed SSH certificates. Servers trust Vault's CA public key in their 'sshd_config', allowing engineers to authenticate using shor...",
    tags: ["ssh", "certificates", "zero-trust", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "hashicorp-vault-fc-350",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: KV v2 Secrets Engine in Disaster Emergency Dispatch & Operations",
    hint: "Focus on kv-v2 and versioning operational principles.",
    back: "<strong>KV v2 Secrets Engine</strong>: Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations. Core architectural rationale: KV Secrets Engine v2 natively provides versioning, metadata inspection, soft deletion (undelete), permanent destruction, and optimistic locking via Check-And-Se...",
    tags: ["kv-v2", "versioning", "secrets", "Disaster Emergency Dispatch & Operations"]
  }
];

export default HASHICORP_VAULT_FLASHCARDS_14;
