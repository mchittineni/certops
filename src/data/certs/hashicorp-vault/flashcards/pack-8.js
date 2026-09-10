export const HASHICORP_VAULT_FLASHCARDS_8 = [
  {
    id: "hashicorp-vault-fc-176",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: KV v2 Secrets Engine in High-Frequency FinTech Trading",
    hint: "Focus on kv-v2 and versioning operational principles.",
    back: "<strong>KV v2 Secrets Engine</strong>: Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations. Core architectural rationale: KV version 2 keeps prior versions of every secret and can restore one with a single undelete call. Raft snapshots do recover old values but only at cluster gran...",
    tags: ["kv-v2", "versioning", "secrets", "High-Frequency FinTech Trading"]
  },
  {
    id: "hashicorp-vault-fc-177",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Secrets Engine in Healthcare Patient Records & HIPAA",
    hint: "Focus on transit and encryption operational principles.",
    back: "<strong>Transit Secrets Engine</strong>: Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault. Core architectural rationale: Transit performs the cryptographic operation inside Vault, so the key never crosses the boundary and a compromised host yields no key material. The datakey endp...",
    tags: ["transit", "encryption", "eaas", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "hashicorp-vault-fc-178",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Database Dynamic Credentials in Global E-Commerce Black Friday Scale",
    hint: "Focus on database and dynamic-secrets operational principles.",
    back: "<strong>Database Dynamic Credentials</strong>: Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL. Core architectural rationale: A dynamic database role creates a distinct user per lease and runs the revocation statement when that lease expires, so access ends without anyone acting. Stati...",
    tags: ["database", "dynamic-secrets", "leases", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "hashicorp-vault-fc-179",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: PKI Secrets Engine in Autonomous Vehicle Telemetry",
    hint: "Focus on pki and tls operational principles.",
    back: "<strong>PKI Secrets Engine</strong>: Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API. Core architectural rationale: Running an intermediate CA in Vault lets certificates be issued through the API with lifetimes short enough that expiry replaces revocation, and it keeps the en...",
    tags: ["pki", "tls", "certificates", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "hashicorp-vault-fc-180",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Key Rotation and Rewrap in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on transit and key-rotation operational principles.",
    back: "<strong>Transit Key Rotation and Rewrap</strong>: Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'. Core architectural rationale: Rotation adds a new key version for future encryptions while older versions stay available to decrypt existing data, and the rewrap endpoint upgrades that data ...",
    tags: ["transit", "key-rotation", "rewrap", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "hashicorp-vault-fc-181",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: AWS Dynamic IAM Credentials in Media Streaming & Global CDN",
    hint: "Focus on aws and iam operational principles.",
    back: "<strong>AWS Dynamic IAM Credentials</strong>: Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users. Core architectural rationale: The AWS secrets engine issues credentials out of Vault with a lease, so they expire and are cleaned up automatically under policy Vault controls. The AWS auth m...",
    tags: ["aws", "iam", "dynamic-secrets", "Media Streaming & Global CDN"]
  },
  {
    id: "hashicorp-vault-fc-182",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: SSH Secrets Engine in Aerospace Satellite Ground Systems",
    hint: "Focus on ssh and certificates operational principles.",
    back: "<strong>SSH Secrets Engine</strong>: Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons. Core architectural rationale: In CA mode each host trusts Vault's public key once in sshd_config and thereafter accepts any short-lived certificate Vault signs, so no per-user key is ever wr...",
    tags: ["ssh", "certificates", "zero-trust", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "hashicorp-vault-fc-183",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: KV v2 Secrets Engine in Telecommunications 5G Core Network",
    hint: "Focus on kv-v2 and versioning operational principles.",
    back: "<strong>KV v2 Secrets Engine</strong>: Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations. Core architectural rationale: KV version 2 keeps prior versions of every secret and can restore one with a single undelete call. Raft snapshots do recover old values but only at cluster gran...",
    tags: ["kv-v2", "versioning", "secrets", "Telecommunications 5G Core Network"]
  },
  {
    id: "hashicorp-vault-fc-184",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Secrets Engine in Renewable Energy Smart Grid IoT",
    hint: "Focus on transit and encryption operational principles.",
    back: "<strong>Transit Secrets Engine</strong>: Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault. Core architectural rationale: Transit performs the cryptographic operation inside Vault, so the key never crosses the boundary and a compromised host yields no key material. The datakey endp...",
    tags: ["transit", "encryption", "eaas", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "hashicorp-vault-fc-185",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Database Dynamic Credentials in Supply Chain Cold-Chain Logistics",
    hint: "Focus on database and dynamic-secrets operational principles.",
    back: "<strong>Database Dynamic Credentials</strong>: Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL. Core architectural rationale: A dynamic database role creates a distinct user per lease and runs the revocation statement when that lease expires, so access ends without anyone acting. Stati...",
    tags: ["database", "dynamic-secrets", "leases", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "hashicorp-vault-fc-186",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: PKI Secrets Engine in Banking Core Ledger & Payments",
    hint: "Focus on pki and tls operational principles.",
    back: "<strong>PKI Secrets Engine</strong>: Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API. Core architectural rationale: Running an intermediate CA in Vault lets certificates be issued through the API with lifetimes short enough that expiry replaces revocation, and it keeps the en...",
    tags: ["pki", "tls", "certificates", "Banking Core Ledger & Payments"]
  },
  {
    id: "hashicorp-vault-fc-187",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Key Rotation and Rewrap in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on transit and key-rotation operational principles.",
    back: "<strong>Transit Key Rotation and Rewrap</strong>: Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'. Core architectural rationale: Rotation adds a new key version for future encryptions while older versions stay available to decrypt existing data, and the rewrap endpoint upgrades that data ...",
    tags: ["transit", "key-rotation", "rewrap", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "hashicorp-vault-fc-188",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: AWS Dynamic IAM Credentials in Defense-Grade Zero-Trust Network",
    hint: "Focus on aws and iam operational principles.",
    back: "<strong>AWS Dynamic IAM Credentials</strong>: Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users. Core architectural rationale: The AWS secrets engine issues credentials out of Vault with a lease, so they expire and are cleaned up automatically under policy Vault controls. The AWS auth m...",
    tags: ["aws", "iam", "dynamic-secrets", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "hashicorp-vault-fc-189",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: SSH Secrets Engine in Online Multiplayer Gaming Engine",
    hint: "Focus on ssh and certificates operational principles.",
    back: "<strong>SSH Secrets Engine</strong>: Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons. Core architectural rationale: In CA mode each host trusts Vault's public key once in sshd_config and thereafter accepts any short-lived certificate Vault signs, so no per-user key is ever wr...",
    tags: ["ssh", "certificates", "zero-trust", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "hashicorp-vault-fc-190",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: KV v2 Secrets Engine in Insurance Risk & Actuarial Modeling",
    hint: "Focus on kv-v2 and versioning operational principles.",
    back: "<strong>KV v2 Secrets Engine</strong>: Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations. Core architectural rationale: KV version 2 keeps prior versions of every secret and can restore one with a single undelete call. Raft snapshots do recover old values but only at cluster gran...",
    tags: ["kv-v2", "versioning", "secrets", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "hashicorp-vault-fc-191",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Secrets Engine in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on transit and encryption operational principles.",
    back: "<strong>Transit Secrets Engine</strong>: Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault. Core architectural rationale: Transit performs the cryptographic operation inside Vault, so the key never crosses the boundary and a compromised host yields no key material. The datakey endp...",
    tags: ["transit", "encryption", "eaas", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "hashicorp-vault-fc-192",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Database Dynamic Credentials in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on database and dynamic-secrets operational principles.",
    back: "<strong>Database Dynamic Credentials</strong>: Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL. Core architectural rationale: A dynamic database role creates a distinct user per lease and runs the revocation statement when that lease expires, so access ends without anyone acting. Stati...",
    tags: ["database", "dynamic-secrets", "leases", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "hashicorp-vault-fc-193",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: PKI Secrets Engine in Digital Identity & Biometric Verification",
    hint: "Focus on pki and tls operational principles.",
    back: "<strong>PKI Secrets Engine</strong>: Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API. Core architectural rationale: Running an intermediate CA in Vault lets certificates be issued through the API with lifetimes short enough that expiry replaces revocation, and it keeps the en...",
    tags: ["pki", "tls", "certificates", "Digital Identity & Biometric Verification"]
  },
  {
    id: "hashicorp-vault-fc-194",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Key Rotation and Rewrap in Legal Discovery & Semantic Document Search",
    hint: "Focus on transit and key-rotation operational principles.",
    back: "<strong>Transit Key Rotation and Rewrap</strong>: Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'. Core architectural rationale: Rotation adds a new key version for future encryptions while older versions stay available to decrypt existing data, and the rewrap endpoint upgrades that data ...",
    tags: ["transit", "key-rotation", "rewrap", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "hashicorp-vault-fc-195",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: AWS Dynamic IAM Credentials in AdTech Real-Time Bidding Exchange",
    hint: "Focus on aws and iam operational principles.",
    back: "<strong>AWS Dynamic IAM Credentials</strong>: Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users. Core architectural rationale: The AWS secrets engine issues credentials out of Vault with a lease, so they expire and are cleaned up automatically under policy Vault controls. The AWS auth m...",
    tags: ["aws", "iam", "dynamic-secrets", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "hashicorp-vault-fc-196",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: SSH Secrets Engine in Precision Agriculture & Drone Scouting",
    hint: "Focus on ssh and certificates operational principles.",
    back: "<strong>SSH Secrets Engine</strong>: Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons. Core architectural rationale: In CA mode each host trusts Vault's public key once in sshd_config and thereafter accepts any short-lived certificate Vault signs, so no per-user key is ever wr...",
    tags: ["ssh", "certificates", "zero-trust", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "hashicorp-vault-fc-197",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: KV v2 Secrets Engine in Industrial Robotics Predictive Maintenance",
    hint: "Focus on kv-v2 and versioning operational principles.",
    back: "<strong>KV v2 Secrets Engine</strong>: Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations. Core architectural rationale: KV version 2 keeps prior versions of every secret and can restore one with a single undelete call. Raft snapshots do recover old values but only at cluster gran...",
    tags: ["kv-v2", "versioning", "secrets", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "hashicorp-vault-fc-198",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Transit Secrets Engine in Educational Remote Proctoring Platform",
    hint: "Focus on transit and encryption operational principles.",
    back: "<strong>Transit Secrets Engine</strong>: Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault. Core architectural rationale: Transit performs the cryptographic operation inside Vault, so the key never crosses the boundary and a compromised host yields no key material. The datakey endp...",
    tags: ["transit", "encryption", "eaas", "Educational Remote Proctoring Platform"]
  },
  {
    id: "hashicorp-vault-fc-199",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: Database Dynamic Credentials in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on database and dynamic-secrets operational principles.",
    back: "<strong>Database Dynamic Credentials</strong>: Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL. Core architectural rationale: A dynamic database role creates a distinct user per lease and runs the revocation statement when that lease expires, so access ends without anyone acting. Stati...",
    tags: ["database", "dynamic-secrets", "leases", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "hashicorp-vault-fc-200",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    front: "Vault: PKI Secrets Engine in Disaster Emergency Dispatch & Operations",
    hint: "Focus on pki and tls operational principles.",
    back: "<strong>PKI Secrets Engine</strong>: Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API. Core architectural rationale: Running an intermediate CA in Vault lets certificates be issued through the API with lifetimes short enough that expiry replaces revocation, and it keeps the en...",
    tags: ["pki", "tls", "certificates", "Disaster Emergency Dispatch & Operations"]
  }
];

export default HASHICORP_VAULT_FLASHCARDS_8;
