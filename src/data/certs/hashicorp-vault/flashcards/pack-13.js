export const HASHICORP_VAULT_FLASHCARDS_13 = [
  {
    id: "hashicorp-vault-fc-301",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Secrets Engine in High-Frequency FinTech Trading",
    hint: "Focus on transit and encryption operational principles.",
    back: "<strong>Transit Secrets Engine</strong>: Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault. Core architectural rationale: Transit performs the cryptographic operation inside Vault, so the key never crosses the boundary and a compromised host yields no key material. The datakey endp...",
    tags: ["transit", "encryption", "eaas", "High-Frequency FinTech Trading"]
  },
  {
    id: "hashicorp-vault-fc-302",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Database Dynamic Credentials in Healthcare Patient Records & HIPAA",
    hint: "Focus on database and dynamic-secrets operational principles.",
    back: "<strong>Database Dynamic Credentials</strong>: Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL. Core architectural rationale: A dynamic database role creates a distinct user per lease and runs the revocation statement when that lease expires, so access ends without anyone acting. Stati...",
    tags: ["database", "dynamic-secrets", "leases", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "hashicorp-vault-fc-303",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: PKI Secrets Engine in Global E-Commerce Black Friday Scale",
    hint: "Focus on pki and tls operational principles.",
    back: "<strong>PKI Secrets Engine</strong>: Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API. Core architectural rationale: Running an intermediate CA in Vault lets certificates be issued through the API with lifetimes short enough that expiry replaces revocation, and it keeps the en...",
    tags: ["pki", "tls", "certificates", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "hashicorp-vault-fc-304",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Key Rotation and Rewrap in Autonomous Vehicle Telemetry",
    hint: "Focus on transit and key-rotation operational principles.",
    back: "<strong>Transit Key Rotation and Rewrap</strong>: Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'. Core architectural rationale: Rotation adds a new key version for future encryptions while older versions stay available to decrypt existing data, and the rewrap endpoint upgrades that data ...",
    tags: ["transit", "key-rotation", "rewrap", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "hashicorp-vault-fc-305",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: AWS Dynamic IAM Credentials in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on aws and iam operational principles.",
    back: "<strong>AWS Dynamic IAM Credentials</strong>: Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users. Core architectural rationale: The AWS secrets engine issues credentials out of Vault with a lease, so they expire and are cleaned up automatically under policy Vault controls. The AWS auth m...",
    tags: ["aws", "iam", "dynamic-secrets", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "hashicorp-vault-fc-306",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: SSH Secrets Engine in Media Streaming & Global CDN",
    hint: "Focus on ssh and certificates operational principles.",
    back: "<strong>SSH Secrets Engine</strong>: Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons. Core architectural rationale: In CA mode each host trusts Vault's public key once in sshd_config and thereafter accepts any short-lived certificate Vault signs, so no per-user key is ever wr...",
    tags: ["ssh", "certificates", "zero-trust", "Media Streaming & Global CDN"]
  },
  {
    id: "hashicorp-vault-fc-307",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: KV v2 Secrets Engine in Aerospace Satellite Ground Systems",
    hint: "Focus on kv-v2 and versioning operational principles.",
    back: "<strong>KV v2 Secrets Engine</strong>: Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations. Core architectural rationale: KV version 2 keeps prior versions of every secret and can restore one with a single undelete call. Raft snapshots do recover old values but only at cluster gran...",
    tags: ["kv-v2", "versioning", "secrets", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "hashicorp-vault-fc-308",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Secrets Engine in Telecommunications 5G Core Network",
    hint: "Focus on transit and encryption operational principles.",
    back: "<strong>Transit Secrets Engine</strong>: Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault. Core architectural rationale: Transit performs the cryptographic operation inside Vault, so the key never crosses the boundary and a compromised host yields no key material. The datakey endp...",
    tags: ["transit", "encryption", "eaas", "Telecommunications 5G Core Network"]
  },
  {
    id: "hashicorp-vault-fc-309",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Database Dynamic Credentials in Renewable Energy Smart Grid IoT",
    hint: "Focus on database and dynamic-secrets operational principles.",
    back: "<strong>Database Dynamic Credentials</strong>: Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL. Core architectural rationale: A dynamic database role creates a distinct user per lease and runs the revocation statement when that lease expires, so access ends without anyone acting. Stati...",
    tags: ["database", "dynamic-secrets", "leases", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "hashicorp-vault-fc-310",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: PKI Secrets Engine in Supply Chain Cold-Chain Logistics",
    hint: "Focus on pki and tls operational principles.",
    back: "<strong>PKI Secrets Engine</strong>: Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API. Core architectural rationale: Running an intermediate CA in Vault lets certificates be issued through the API with lifetimes short enough that expiry replaces revocation, and it keeps the en...",
    tags: ["pki", "tls", "certificates", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "hashicorp-vault-fc-311",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Key Rotation and Rewrap in Banking Core Ledger & Payments",
    hint: "Focus on transit and key-rotation operational principles.",
    back: "<strong>Transit Key Rotation and Rewrap</strong>: Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'. Core architectural rationale: Rotation adds a new key version for future encryptions while older versions stay available to decrypt existing data, and the rewrap endpoint upgrades that data ...",
    tags: ["transit", "key-rotation", "rewrap", "Banking Core Ledger & Payments"]
  },
  {
    id: "hashicorp-vault-fc-312",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: AWS Dynamic IAM Credentials in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on aws and iam operational principles.",
    back: "<strong>AWS Dynamic IAM Credentials</strong>: Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users. Core architectural rationale: The AWS secrets engine issues credentials out of Vault with a lease, so they expire and are cleaned up automatically under policy Vault controls. The AWS auth m...",
    tags: ["aws", "iam", "dynamic-secrets", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "hashicorp-vault-fc-313",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: SSH Secrets Engine in Defense-Grade Zero-Trust Network",
    hint: "Focus on ssh and certificates operational principles.",
    back: "<strong>SSH Secrets Engine</strong>: Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons. Core architectural rationale: In CA mode each host trusts Vault's public key once in sshd_config and thereafter accepts any short-lived certificate Vault signs, so no per-user key is ever wr...",
    tags: ["ssh", "certificates", "zero-trust", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "hashicorp-vault-fc-314",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: KV v2 Secrets Engine in Online Multiplayer Gaming Engine",
    hint: "Focus on kv-v2 and versioning operational principles.",
    back: "<strong>KV v2 Secrets Engine</strong>: Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations. Core architectural rationale: KV version 2 keeps prior versions of every secret and can restore one with a single undelete call. Raft snapshots do recover old values but only at cluster gran...",
    tags: ["kv-v2", "versioning", "secrets", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "hashicorp-vault-fc-315",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Secrets Engine in Insurance Risk & Actuarial Modeling",
    hint: "Focus on transit and encryption operational principles.",
    back: "<strong>Transit Secrets Engine</strong>: Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault. Core architectural rationale: Transit performs the cryptographic operation inside Vault, so the key never crosses the boundary and a compromised host yields no key material. The datakey endp...",
    tags: ["transit", "encryption", "eaas", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "hashicorp-vault-fc-316",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Database Dynamic Credentials in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on database and dynamic-secrets operational principles.",
    back: "<strong>Database Dynamic Credentials</strong>: Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL. Core architectural rationale: A dynamic database role creates a distinct user per lease and runs the revocation statement when that lease expires, so access ends without anyone acting. Stati...",
    tags: ["database", "dynamic-secrets", "leases", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "hashicorp-vault-fc-317",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: PKI Secrets Engine in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on pki and tls operational principles.",
    back: "<strong>PKI Secrets Engine</strong>: Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API. Core architectural rationale: Running an intermediate CA in Vault lets certificates be issued through the API with lifetimes short enough that expiry replaces revocation, and it keeps the en...",
    tags: ["pki", "tls", "certificates", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "hashicorp-vault-fc-318",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Key Rotation and Rewrap in Digital Identity & Biometric Verification",
    hint: "Focus on transit and key-rotation operational principles.",
    back: "<strong>Transit Key Rotation and Rewrap</strong>: Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'. Core architectural rationale: Rotation adds a new key version for future encryptions while older versions stay available to decrypt existing data, and the rewrap endpoint upgrades that data ...",
    tags: ["transit", "key-rotation", "rewrap", "Digital Identity & Biometric Verification"]
  },
  {
    id: "hashicorp-vault-fc-319",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: AWS Dynamic IAM Credentials in Legal Discovery & Semantic Document Search",
    hint: "Focus on aws and iam operational principles.",
    back: "<strong>AWS Dynamic IAM Credentials</strong>: Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users. Core architectural rationale: The AWS secrets engine issues credentials out of Vault with a lease, so they expire and are cleaned up automatically under policy Vault controls. The AWS auth m...",
    tags: ["aws", "iam", "dynamic-secrets", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "hashicorp-vault-fc-320",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: SSH Secrets Engine in AdTech Real-Time Bidding Exchange",
    hint: "Focus on ssh and certificates operational principles.",
    back: "<strong>SSH Secrets Engine</strong>: Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons. Core architectural rationale: In CA mode each host trusts Vault's public key once in sshd_config and thereafter accepts any short-lived certificate Vault signs, so no per-user key is ever wr...",
    tags: ["ssh", "certificates", "zero-trust", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "hashicorp-vault-fc-321",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: KV v2 Secrets Engine in Precision Agriculture & Drone Scouting",
    hint: "Focus on kv-v2 and versioning operational principles.",
    back: "<strong>KV v2 Secrets Engine</strong>: Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations. Core architectural rationale: KV version 2 keeps prior versions of every secret and can restore one with a single undelete call. Raft snapshots do recover old values but only at cluster gran...",
    tags: ["kv-v2", "versioning", "secrets", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "hashicorp-vault-fc-322",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Secrets Engine in Industrial Robotics Predictive Maintenance",
    hint: "Focus on transit and encryption operational principles.",
    back: "<strong>Transit Secrets Engine</strong>: Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault. Core architectural rationale: Transit performs the cryptographic operation inside Vault, so the key never crosses the boundary and a compromised host yields no key material. The datakey endp...",
    tags: ["transit", "encryption", "eaas", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "hashicorp-vault-fc-323",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Database Dynamic Credentials in Educational Remote Proctoring Platform",
    hint: "Focus on database and dynamic-secrets operational principles.",
    back: "<strong>Database Dynamic Credentials</strong>: Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL. Core architectural rationale: A dynamic database role creates a distinct user per lease and runs the revocation statement when that lease expires, so access ends without anyone acting. Stati...",
    tags: ["database", "dynamic-secrets", "leases", "Educational Remote Proctoring Platform"]
  },
  {
    id: "hashicorp-vault-fc-324",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: PKI Secrets Engine in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on pki and tls operational principles.",
    back: "<strong>PKI Secrets Engine</strong>: Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API. Core architectural rationale: Running an intermediate CA in Vault lets certificates be issued through the API with lifetimes short enough that expiry replaces revocation, and it keeps the en...",
    tags: ["pki", "tls", "certificates", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "hashicorp-vault-fc-325",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Key Rotation and Rewrap in Disaster Emergency Dispatch & Operations",
    hint: "Focus on transit and key-rotation operational principles.",
    back: "<strong>Transit Key Rotation and Rewrap</strong>: Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'. Core architectural rationale: Rotation adds a new key version for future encryptions while older versions stay available to decrypt existing data, and the rewrap endpoint upgrades that data ...",
    tags: ["transit", "key-rotation", "rewrap", "Disaster Emergency Dispatch & Operations"]
  }
];

export default HASHICORP_VAULT_FLASHCARDS_13;
