export const HASHICORP_VAULT_QUESTIONS_10 = [
  {
    id: "hashicorp-vault-226",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Server Access Without Standing Authorized Keys: High-Frequency FinTech Trading",
    scenario: "A quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The platform team is granting engineers shell access to a large fleet without maintaining authorized_keys files.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons." },
      { id: 'B', text: "Configure the SSH secrets engine in one-time password mode and install the Vault SSH helper on every target host so that it can verify each login." },
      { id: 'C', text: "Use the PKI secrets engine to issue X.509 client certificates and configure sshd to trust the issuing intermediate CA." },
      { id: 'D', text: "Store a per-host private key in KV v2 and have Vault Agent render it into the engineer's local SSH directory at login." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In CA mode each host trusts Vault's public key once in sshd_config and thereafter accepts any short-lived certificate Vault signs, so no per-user key is ever written to a host. One-time password mode also avoids standing keys but requires the Vault helper installed and maintained on every machine in the fleet. OpenSSH does not consume X.509 certificates, so the PKI engine cannot satisfy sshd, and rendering private keys to disk recreates the standing key material the requirement removes.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["ssh", "certificates", "zero-trust", "High-Frequency FinTech Trading"]
  },
  {
    id: "hashicorp-vault-227",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Recovering a Previous Secret Value: Healthcare Patient Records & HIPAA",
    scenario: "A national hospital network requires strict cryptographic privacy, auditable access controls, and HIPAA compliance. The platform team is storing configuration secrets so that an accidental overwrite can be rolled back.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Enable KV version 1 and take scheduled Raft snapshots of the cluster so that earlier secret values can be recovered by restoring a snapshot into a staging cluster." },
      { id: 'B', text: "Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations." },
      { id: 'C', text: "Enable KV version 1 and enable a file audit device so that previous values can be reconstructed from the request log." },
      { id: 'D', text: "Enable KV version 2 but disable check-and-set so that concurrent write operations never receive a version conflict error." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "KV version 2 keeps prior versions of every secret and can restore one with a single undelete call. Raft snapshots do recover old values but only at cluster granularity and only as far back as the last snapshot. Audit devices HMAC sensitive values precisely so they cannot be read back out of the log. Disabling check-and-set on a v2 mount keeps the version history but removes the protection against two writers clobbering each other, which is what causes the overwrite in the first place.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["kv-v2", "versioning", "secrets", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "hashicorp-vault-228",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Encrypting Records Without Distributing Key Material: Global E-Commerce Black Friday Scale",
    scenario: "An international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The platform team is encrypting application records where the key must never be readable by the application host.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Call the transit engine's datakey endpoint for a plaintext data key per record and hold it in application memory while encrypting." },
      { id: 'B', text: "Store an AES data key at a KV v2 path and have each service read it at startup to encrypt records locally." },
      { id: 'C', text: "Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault." },
      { id: 'D', text: "Use Vault's PKI secrets engine to issue a certificate per service and encrypt each record with that certificate's public key." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Transit performs the cryptographic operation inside Vault, so the key never crosses the boundary and a compromised host yields no key material. The datakey endpoint is a legitimate envelope-encryption pattern but it hands the application a plaintext key, which is the exposure this requirement forbids. Reading a key out of KV has the same flaw with none of the rotation support, and PKI exists for identity and TLS rather than bulk record encryption.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["transit", "encryption", "eaas", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "hashicorp-vault-229",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Database Access That Expires On Its Own: Autonomous Vehicle Telemetry",
    scenario: "A self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The platform team is giving services database access that disappears automatically when it is no longer needed.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure the Database secrets engine's static roles feature to rotate the password of a fixed application account on a schedule that Vault manages." },
      { id: 'B', text: "Configure the AWS secrets engine to issue IAM credentials and have services connect through RDS IAM database authentication." },
      { id: 'C', text: "Store the database password in KV v2 and use a Vault Agent template to re-render the connection configuration hourly." },
      { id: 'D', text: "Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A dynamic database role creates a distinct user per lease and runs the revocation statement when that lease expires, so access ends without anyone acting. Static roles keep one long-lived shared account and only change its password, which preserves the shared identity the requirement is trying to remove. RDS IAM authentication is a real option but binds the design to one managed database on one cloud, and a KV-plus-template approach still distributes a standing credential.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["database", "dynamic-secrets", "leases", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "hashicorp-vault-230",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Internal TLS Without Manual Certificate Renewal: Multi-Tenant B2B SaaS Platform",
    scenario: "An enterprise cloud SaaS architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The platform team is issuing TLS certificates to internal services without an operator renewing them by hand.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API." },
      { id: 'B', text: "Mount the PKI engine as a self-signed root certificate authority inside Vault and issue leaf certificates directly from that root with multi-year lifetimes." },
      { id: 'C', text: "Use the SSH secrets engine as a certificate authority to sign a certificate for each service to present during mutual TLS." },
      { id: 'D', text: "Use the Transit engine to sign each certificate signing request with a managed key and distribute the results to the services." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Running an intermediate CA in Vault lets certificates be issued through the API with lifetimes short enough that expiry replaces revocation, and it keeps the enterprise root offline. Issuing multi-year leaves from a self-signed root in Vault forfeits both properties and makes a compromise unrecoverable. The SSH engine signs the OpenSSH certificate format, which sshd understands and TLS stacks do not, and Transit signs arbitrary data without producing the X.509 structure a certificate requires.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["pki", "tls", "certificates", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "hashicorp-vault-231",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Moving Stored Ciphertext to a New Key Version: Media Streaming & Global CDN",
    scenario: "A global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized DRM protection. The platform team is rotating an encryption key and bringing existing ciphertext onto the new version.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Rotate the transit key and raise min_decryption_version with 'vault write transit/keys/my-key/config' so that stored ciphertext moves onto the new version." },
      { id: 'B', text: "Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'." },
      { id: 'C', text: "Rotate the transit key and let the seal's automatic master key rotation bring the stored ciphertexts onto the current version." },
      { id: 'D', text: "Create a second transit key, then have the application decrypt each record with the old key and encrypt it again with the new one." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Rotation adds a new key version for future encryptions while older versions stay available to decrypt existing data, and the rewrap endpoint upgrades that data without ever returning plaintext to the caller. Raising min_decryption_version before rewrapping does the opposite of what it appears to: it makes older ciphertext permanently undecryptable. The seal key protects Vault's own storage and has no relationship to transit ciphertext, and a client-side re-encryption loop exposes every record in plaintext.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["transit", "key-rotation", "rewrap", "Media Streaming & Global CDN"]
  },
  {
    id: "hashicorp-vault-232",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Short-Lived Cloud Credentials Brokered Centrally: Aerospace Satellite Ground Systems",
    scenario: "An aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The platform team is issuing time-bound cloud credentials to workloads under one central policy.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure the AWS auth method so that workloads log in to Vault by proving their IAM identity, then read the cloud credentials they need from a KV v2 secrets engine mount." },
      { id: 'B', text: "Attach an IAM instance profile to every host and let the AWS SDK collect credentials from the instance metadata service." },
      { id: 'C', text: "Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users." },
      { id: 'D', text: "Store a long-lived IAM access key pair in KV v2 and rotate it on a schedule using a Vault Agent template." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The AWS secrets engine issues credentials out of Vault with a lease, so they expire and are cleaned up automatically under policy Vault controls. The AWS auth method solves the opposite direction, letting a workload prove its IAM identity in order to log in, and pairing it with a KV mount still leaves a static credential to manage. Instance profiles are sound AWS practice but move the grant into IAM where the central brokering and audit trail are lost, and a rotated static key pair is valid in full between rotations.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["aws", "iam", "dynamic-secrets", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "hashicorp-vault-233",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Server Access Without Standing Authorized Keys: Telecommunications 5G Core Network",
    scenario: "A national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The platform team is granting engineers shell access to a large fleet without maintaining authorized_keys files.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure the SSH secrets engine in one-time password mode and install the Vault SSH helper on every target host so that it can verify each login." },
      { id: 'B', text: "Use the PKI secrets engine to issue X.509 client certificates and configure sshd to trust the issuing intermediate CA." },
      { id: 'C', text: "Store a per-host private key in KV v2 and have Vault Agent render it into the engineer's local SSH directory at login." },
      { id: 'D', text: "Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In CA mode each host trusts Vault's public key once in sshd_config and thereafter accepts any short-lived certificate Vault signs, so no per-user key is ever written to a host. One-time password mode also avoids standing keys but requires the Vault helper installed and maintained on every machine in the fleet. OpenSSH does not consume X.509 certificates, so the PKI engine cannot satisfy sshd, and rendering private keys to disk recreates the standing key material the requirement removes.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["ssh", "certificates", "zero-trust", "Telecommunications 5G Core Network"]
  },
  {
    id: "hashicorp-vault-234",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Recovering a Previous Secret Value: Renewable Energy Smart Grid IoT",
    scenario: "A smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The platform team is storing configuration secrets so that an accidental overwrite can be rolled back.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations." },
      { id: 'B', text: "Enable KV version 1 and take scheduled Raft snapshots of the cluster so that earlier secret values can be recovered by restoring a snapshot into a staging cluster." },
      { id: 'C', text: "Enable KV version 1 and enable a file audit device so that previous values can be reconstructed from the request log." },
      { id: 'D', text: "Enable KV version 2 but disable check-and-set so that concurrent write operations never receive a version conflict error." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "KV version 2 keeps prior versions of every secret and can restore one with a single undelete call. Raft snapshots do recover old values but only at cluster granularity and only as far back as the last snapshot. Audit devices HMAC sensitive values precisely so they cannot be read back out of the log. Disabling check-and-set on a v2 mount keeps the version history but removes the protection against two writers clobbering each other, which is what causes the overwrite in the first place.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["kv-v2", "versioning", "secrets", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "hashicorp-vault-235",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Encrypting Records Without Distributing Key Material: Supply Chain Cold-Chain Logistics",
    scenario: "A pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The platform team is encrypting application records where the key must never be readable by the application host.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Call the transit engine's datakey endpoint for a plaintext data key per record and hold it in application memory while encrypting." },
      { id: 'B', text: "Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault." },
      { id: 'C', text: "Store an AES data key at a KV v2 path and have each service read it at startup to encrypt records locally." },
      { id: 'D', text: "Use Vault's PKI secrets engine to issue a certificate per service and encrypt each record with that certificate's public key." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Transit performs the cryptographic operation inside Vault, so the key never crosses the boundary and a compromised host yields no key material. The datakey endpoint is a legitimate envelope-encryption pattern but it hands the application a plaintext key, which is the exposure this requirement forbids. Reading a key out of KV has the same flaw with none of the rotation support, and PKI exists for identity and TLS rather than bulk record encryption.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["transit", "encryption", "eaas", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "hashicorp-vault-236",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Database Access That Expires On Its Own: Banking Core Ledger & Payments",
    scenario: "A central banking consortium enforces ACID consistency, immutable transaction audit trails, and automated reconciliation. The platform team is giving services database access that disappears automatically when it is no longer needed.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure the Database secrets engine's static roles feature to rotate the password of a fixed application account on a schedule that Vault manages." },
      { id: 'B', text: "Configure the AWS secrets engine to issue IAM credentials and have services connect through RDS IAM database authentication." },
      { id: 'C', text: "Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL." },
      { id: 'D', text: "Store the database password in KV v2 and use a Vault Agent template to re-render the connection configuration hourly." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A dynamic database role creates a distinct user per lease and runs the revocation statement when that lease expires, so access ends without anyone acting. Static roles keep one long-lived shared account and only change its password, which preserves the shared identity the requirement is trying to remove. RDS IAM authentication is a real option but binds the design to one managed database on one cloud, and a KV-plus-template approach still distributes a standing credential.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["database", "dynamic-secrets", "leases", "Banking Core Ledger & Payments"]
  },
  {
    id: "hashicorp-vault-237",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Internal TLS Without Manual Certificate Renewal: Genomic Sequencing & Biotech Pipeline",
    scenario: "A genomics laboratory processes petabyte-scale FASTQ files with distributed batch computing and high-throughput POSIX storage. The platform team is issuing TLS certificates to internal services without an operator renewing them by hand.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Mount the PKI engine as a self-signed root certificate authority inside Vault and issue leaf certificates directly from that root with multi-year lifetimes." },
      { id: 'B', text: "Use the SSH secrets engine as a certificate authority to sign a certificate for each service to present during mutual TLS." },
      { id: 'C', text: "Use the Transit engine to sign each certificate signing request with a managed key and distribute the results to the services." },
      { id: 'D', text: "Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Running an intermediate CA in Vault lets certificates be issued through the API with lifetimes short enough that expiry replaces revocation, and it keeps the enterprise root offline. Issuing multi-year leaves from a self-signed root in Vault forfeits both properties and makes a compromise unrecoverable. The SSH engine signs the OpenSSH certificate format, which sshd understands and TLS stacks do not, and Transit signs arbitrary data without producing the X.509 structure a certificate requires.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["pki", "tls", "certificates", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "hashicorp-vault-238",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Moving Stored Ciphertext to a New Key Version: Defense-Grade Zero-Trust Network",
    scenario: "A defense intelligence system enforces continuous mutual TLS authentication, strict least privilege, and non-repudiation. The platform team is rotating an encryption key and bringing existing ciphertext onto the new version.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'." },
      { id: 'B', text: "Rotate the transit key and raise min_decryption_version with 'vault write transit/keys/my-key/config' so that stored ciphertext moves onto the new version." },
      { id: 'C', text: "Rotate the transit key and let the seal's automatic master key rotation bring the stored ciphertexts onto the current version." },
      { id: 'D', text: "Create a second transit key, then have the application decrypt each record with the old key and encrypt it again with the new one." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rotation adds a new key version for future encryptions while older versions stay available to decrypt existing data, and the rewrap endpoint upgrades that data without ever returning plaintext to the caller. Raising min_decryption_version before rewrapping does the opposite of what it appears to: it makes older ciphertext permanently undecryptable. The seal key protects Vault's own storage and has no relationship to transit ciphertext, and a client-side re-encryption loop exposes every record in plaintext.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["transit", "key-rotation", "rewrap", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "hashicorp-vault-239",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Short-Lived Cloud Credentials Brokered Centrally: Online Multiplayer Gaming Engine",
    scenario: "A real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The platform team is issuing time-bound cloud credentials to workloads under one central policy.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure the AWS auth method so that workloads log in to Vault by proving their IAM identity, then read the cloud credentials they need from a KV v2 secrets engine mount." },
      { id: 'B', text: "Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users." },
      { id: 'C', text: "Attach an IAM instance profile to every host and let the AWS SDK collect credentials from the instance metadata service." },
      { id: 'D', text: "Store a long-lived IAM access key pair in KV v2 and rotate it on a schedule using a Vault Agent template." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The AWS secrets engine issues credentials out of Vault with a lease, so they expire and are cleaned up automatically under policy Vault controls. The AWS auth method solves the opposite direction, letting a workload prove its IAM identity in order to log in, and pairing it with a KV mount still leaves a static credential to manage. Instance profiles are sound AWS practice but move the grant into IAM where the central brokering and audit trail are lost, and a rotated static key pair is valid in full between rotations.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["aws", "iam", "dynamic-secrets", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "hashicorp-vault-240",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Server Access Without Standing Authorized Keys: Insurance Risk & Actuarial Modeling",
    scenario: "An actuarial underwriting platform executes Monte Carlo simulations across millions of policy holder records with parallel workers. The platform team is granting engineers shell access to a large fleet without maintaining authorized_keys files.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure the SSH secrets engine in one-time password mode and install the Vault SSH helper on every target host so that it can verify each login." },
      { id: 'B', text: "Use the PKI secrets engine to issue X.509 client certificates and configure sshd to trust the issuing intermediate CA." },
      { id: 'C', text: "Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons." },
      { id: 'D', text: "Store a per-host private key in KV v2 and have Vault Agent render it into the engineer's local SSH directory at login." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In CA mode each host trusts Vault's public key once in sshd_config and thereafter accepts any short-lived certificate Vault signs, so no per-user key is ever written to a host. One-time password mode also avoids standing keys but requires the Vault helper installed and maintained on every machine in the fleet. OpenSSH does not consume X.509 certificates, so the PKI engine cannot satisfy sshd, and rendering private keys to disk recreates the standing key material the requirement removes.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["ssh", "certificates", "zero-trust", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "hashicorp-vault-241",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Recovering a Previous Secret Value: Pharmaceutical Clinical Trial Platform",
    scenario: "A global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The platform team is storing configuration secrets so that an accidental overwrite can be rolled back.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Enable KV version 1 and take scheduled Raft snapshots of the cluster so that earlier secret values can be recovered by restoring a snapshot into a staging cluster." },
      { id: 'B', text: "Enable KV version 1 and enable a file audit device so that previous values can be reconstructed from the request log." },
      { id: 'C', text: "Enable KV version 2 but disable check-and-set so that concurrent write operations never receive a version conflict error." },
      { id: 'D', text: "Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "KV version 2 keeps prior versions of every secret and can restore one with a single undelete call. Raft snapshots do recover old values but only at cluster granularity and only as far back as the last snapshot. Audit devices HMAC sensitive values precisely so they cannot be read back out of the log. Disabling check-and-set on a v2 mount keeps the version history but removes the protection against two writers clobbering each other, which is what causes the overwrite in the first place.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["kv-v2", "versioning", "secrets", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "hashicorp-vault-242",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Encrypting Records Without Distributing Key Material: Smart City Traffic & Mobility Sensor Hub",
    scenario: "A metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The platform team is encrypting application records where the key must never be readable by the application host.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault." },
      { id: 'B', text: "Call the transit engine's datakey endpoint for a plaintext data key per record and hold it in application memory while encrypting." },
      { id: 'C', text: "Store an AES data key at a KV v2 path and have each service read it at startup to encrypt records locally." },
      { id: 'D', text: "Use Vault's PKI secrets engine to issue a certificate per service and encrypt each record with that certificate's public key." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Transit performs the cryptographic operation inside Vault, so the key never crosses the boundary and a compromised host yields no key material. The datakey endpoint is a legitimate envelope-encryption pattern but it hands the application a plaintext key, which is the exposure this requirement forbids. Reading a key out of KV has the same flaw with none of the rotation support, and PKI exists for identity and TLS rather than bulk record encryption.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["transit", "encryption", "eaas", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "hashicorp-vault-243",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Database Access That Expires On Its Own: Digital Identity & Biometric Verification",
    scenario: "A cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The platform team is giving services database access that disappears automatically when it is no longer needed.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure the Database secrets engine's static roles feature to rotate the password of a fixed application account on a schedule that Vault manages." },
      { id: 'B', text: "Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL." },
      { id: 'C', text: "Configure the AWS secrets engine to issue IAM credentials and have services connect through RDS IAM database authentication." },
      { id: 'D', text: "Store the database password in KV v2 and use a Vault Agent template to re-render the connection configuration hourly." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A dynamic database role creates a distinct user per lease and runs the revocation statement when that lease expires, so access ends without anyone acting. Static roles keep one long-lived shared account and only change its password, which preserves the shared identity the requirement is trying to remove. RDS IAM authentication is a real option but binds the design to one managed database on one cloud, and a KV-plus-template approach still distributes a standing credential.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["database", "dynamic-secrets", "leases", "Digital Identity & Biometric Verification"]
  },
  {
    id: "hashicorp-vault-244",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Internal TLS Without Manual Certificate Renewal: Legal Discovery & Semantic Document Search",
    scenario: "A global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The platform team is issuing TLS certificates to internal services without an operator renewing them by hand.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Mount the PKI engine as a self-signed root certificate authority inside Vault and issue leaf certificates directly from that root with multi-year lifetimes." },
      { id: 'B', text: "Use the SSH secrets engine as a certificate authority to sign a certificate for each service to present during mutual TLS." },
      { id: 'C', text: "Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API." },
      { id: 'D', text: "Use the Transit engine to sign each certificate signing request with a managed key and distribute the results to the services." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Running an intermediate CA in Vault lets certificates be issued through the API with lifetimes short enough that expiry replaces revocation, and it keeps the enterprise root offline. Issuing multi-year leaves from a self-signed root in Vault forfeits both properties and makes a compromise unrecoverable. The SSH engine signs the OpenSSH certificate format, which sshd understands and TLS stacks do not, and Transit signs arbitrary data without producing the X.509 structure a certificate requires.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["pki", "tls", "certificates", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "hashicorp-vault-245",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Moving Stored Ciphertext to a New Key Version: AdTech Real-Time Bidding Exchange",
    scenario: "An advertising exchange processes 500,000 bids per second with a strict 20-millisecond SLA and distributed caching. The platform team is rotating an encryption key and bringing existing ciphertext onto the new version.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Rotate the transit key and raise min_decryption_version with 'vault write transit/keys/my-key/config' so that stored ciphertext moves onto the new version." },
      { id: 'B', text: "Rotate the transit key and let the seal's automatic master key rotation bring the stored ciphertexts onto the current version." },
      { id: 'C', text: "Create a second transit key, then have the application decrypt each record with the old key and encrypt it again with the new one." },
      { id: 'D', text: "Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Rotation adds a new key version for future encryptions while older versions stay available to decrypt existing data, and the rewrap endpoint upgrades that data without ever returning plaintext to the caller. Raising min_decryption_version before rewrapping does the opposite of what it appears to: it makes older ciphertext permanently undecryptable. The seal key protects Vault's own storage and has no relationship to transit ciphertext, and a client-side re-encryption loop exposes every record in plaintext.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["transit", "key-rotation", "rewrap", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "hashicorp-vault-246",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Short-Lived Cloud Credentials Brokered Centrally: Precision Agriculture & Drone Scouting",
    scenario: "An agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The platform team is issuing time-bound cloud credentials to workloads under one central policy.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users." },
      { id: 'B', text: "Configure the AWS auth method so that workloads log in to Vault by proving their IAM identity, then read the cloud credentials they need from a KV v2 secrets engine mount." },
      { id: 'C', text: "Attach an IAM instance profile to every host and let the AWS SDK collect credentials from the instance metadata service." },
      { id: 'D', text: "Store a long-lived IAM access key pair in KV v2 and rotate it on a schedule using a Vault Agent template." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The AWS secrets engine issues credentials out of Vault with a lease, so they expire and are cleaned up automatically under policy Vault controls. The AWS auth method solves the opposite direction, letting a workload prove its IAM identity in order to log in, and pairing it with a KV mount still leaves a static credential to manage. Instance profiles are sound AWS practice but move the grant into IAM where the central brokering and audit trail are lost, and a rotated static key pair is valid in full between rotations.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["aws", "iam", "dynamic-secrets", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "hashicorp-vault-247",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Server Access Without Standing Authorized Keys: Industrial Robotics Predictive Maintenance",
    scenario: "A semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The platform team is granting engineers shell access to a large fleet without maintaining authorized_keys files.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure the SSH secrets engine in one-time password mode and install the Vault SSH helper on every target host so that it can verify each login." },
      { id: 'B', text: "Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons." },
      { id: 'C', text: "Use the PKI secrets engine to issue X.509 client certificates and configure sshd to trust the issuing intermediate CA." },
      { id: 'D', text: "Store a per-host private key in KV v2 and have Vault Agent render it into the engineer's local SSH directory at login." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In CA mode each host trusts Vault's public key once in sshd_config and thereafter accepts any short-lived certificate Vault signs, so no per-user key is ever written to a host. One-time password mode also avoids standing keys but requires the Vault helper installed and maintained on every machine in the fleet. OpenSSH does not consume X.509 certificates, so the PKI engine cannot satisfy sshd, and rendering private keys to disk recreates the standing key material the requirement removes.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["ssh", "certificates", "zero-trust", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "hashicorp-vault-248",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Recovering a Previous Secret Value: Educational Remote Proctoring Platform",
    scenario: "An online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The platform team is storing configuration secrets so that an accidental overwrite can be rolled back.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Enable KV version 1 and take scheduled Raft snapshots of the cluster so that earlier secret values can be recovered by restoring a snapshot into a staging cluster." },
      { id: 'B', text: "Enable KV version 1 and enable a file audit device so that previous values can be reconstructed from the request log." },
      { id: 'C', text: "Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations." },
      { id: 'D', text: "Enable KV version 2 but disable check-and-set so that concurrent write operations never receive a version conflict error." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "KV version 2 keeps prior versions of every secret and can restore one with a single undelete call. Raft snapshots do recover old values but only at cluster granularity and only as far back as the last snapshot. Audit devices HMAC sensitive values precisely so they cannot be read back out of the log. Disabling check-and-set on a v2 mount keeps the version history but removes the protection against two writers clobbering each other, which is what causes the overwrite in the first place.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["kv-v2", "versioning", "secrets", "Educational Remote Proctoring Platform"]
  },
  {
    id: "hashicorp-vault-249",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Encrypting Records Without Distributing Key Material: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "A property appraisal engine fuses GIS parcel maps with real-time market transactions for automated valuation. The platform team is encrypting application records where the key must never be readable by the application host.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Call the transit engine's datakey endpoint for a plaintext data key per record and hold it in application memory while encrypting." },
      { id: 'B', text: "Store an AES data key at a KV v2 path and have each service read it at startup to encrypt records locally." },
      { id: 'C', text: "Use Vault's PKI secrets engine to issue a certificate per service and encrypt each record with that certificate's public key." },
      { id: 'D', text: "Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Transit performs the cryptographic operation inside Vault, so the key never crosses the boundary and a compromised host yields no key material. The datakey endpoint is a legitimate envelope-encryption pattern but it hands the application a plaintext key, which is the exposure this requirement forbids. Reading a key out of KV has the same flaw with none of the rotation support, and PKI exists for identity and TLS rather than bulk record encryption.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["transit", "encryption", "eaas", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "hashicorp-vault-250",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d2",
    domainName: "Configure Vault secrets engines and transit encryption",
    title: "Database Access That Expires On Its Own: Disaster Emergency Dispatch & Operations",
    scenario: "A municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The platform team is giving services database access that disappears automatically when it is no longer needed.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL." },
      { id: 'B', text: "Configure the Database secrets engine's static roles feature to rotate the password of a fixed application account on a schedule that Vault manages." },
      { id: 'C', text: "Configure the AWS secrets engine to issue IAM credentials and have services connect through RDS IAM database authentication." },
      { id: 'D', text: "Store the database password in KV v2 and use a Vault Agent template to re-render the connection configuration hourly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A dynamic database role creates a distinct user per lease and runs the revocation statement when that lease expires, so access ends without anyone acting. Static roles keep one long-lived shared account and only change its password, which preserves the shared identity the requirement is trying to remove. RDS IAM authentication is a real option but binds the design to one managed database on one cloud, and a KV-plus-template approach still distributes a standing credential.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["database", "dynamic-secrets", "leases", "Disaster Emergency Dispatch & Operations"]
  }
];

export default HASHICORP_VAULT_QUESTIONS_10;
