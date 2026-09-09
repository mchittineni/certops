export const HASHICORP_VAULT_QUESTIONS_4 = [
  {
    id: "hashicorp-vault-76",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Vault Policy Capabilities: High-Frequency FinTech Trading",
    scenario: "In a high-frequency fintech trading infrastructure, a quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The operations team is currently enforcing least privilege access control with granular permissions under production deployment cycle 4.1.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these high-frequency fintech trading criteria for vault policy capabilities?",
    options: [
      { id: 'A', text: "Specify path 'secret/data/app/*' with capabilities ['read'] to allow reading credentials while denying creation or modification." },
      { id: 'B', text: "Grant the 'sudo' capability to all paths to avoid permission denial errors during deployment." },
      { id: 'C', text: "Assign capability 'write' without 'read' on a KV v2 data path." },
      { id: 'D', text: "Use capability 'deny' on all parent paths without configuring explicit subpath permissions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Vault policies follow an explicit deny-by-default model. Granular capabilities ('create', 'read', 'update', 'delete', 'list', 'sudo', 'deny') must be assigned strictly on relevant path prefixes. Sudo capability bypasses safeguards and is reserved for root-level operations, not general application reads.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["policy", "hcl", "capabilities", "High-Frequency FinTech Trading"]
  },
  {
    id: "hashicorp-vault-77",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Templated Vault Policies: Healthcare Patient Records & HIPAA",
    scenario: "In a healthcare patient records & hipaa infrastructure, a national hospital network requires strict cryptographic privacy, auditable access controls, and hipaa compliance. The operations team is currently scaling access control using identity metadata and entity aliases under production deployment cycle 4.2.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these healthcare patient records & hipaa criteria for templated vault policies?",
    options: [
      { id: 'A', text: "Hardcode individual username paths for every user in separate monolithic policy files." },
      { id: 'B', text: "Define policy paths using template syntax like 'secret/data/teams/{{identity.entity.metadata.team}}/*' to restrict access by metadata." },
      { id: 'C', text: "Disable identity entities and rely exclusively on unmapped client IP addresses." },
      { id: 'D', text: "Store policies in database secret engines to allow dynamic SQL queries during authorization." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Vault policy templating allows administrators to write concise, scalable policies using identity metadata, entity IDs, or mount accessors (e.g., 'identity.entity.metadata.team'). This avoids authoring thousands of repetitive static policies for individual users or departments.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["policy", "identity", "templating", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "hashicorp-vault-78",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Response Wrapping: Global E-Commerce Black Friday Scale",
    scenario: "In a global e-commerce black friday scale infrastructure, an international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The operations team is currently securing the initial transport of sensitive SecretIDs and tokens under production deployment cycle 4.3.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these global e-commerce black friday scale criteria for response wrapping?",
    options: [
      { id: 'A', text: "Encrypt the SecretID using base64 encoding and transmit it over unencrypted email." },
      { id: 'B', text: "Print the SecretID to standard application build logs for developers to retrieve." },
      { id: 'C', text: "Generate wrapped tokens or SecretIDs using the '-wrap-ttl' parameter so the recipient retrieves the secret with 'vault unwrap'." },
      { id: 'D', text: "Store the raw SecretID in a shared public S3 bucket with read access." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Vault response wrapping provides single-use, time-bound covering tokens ('cubbyhole') for sensitive payloads. If an attacker intercepts and unwraps the token first, the intended recipient's subsequent unwrap attempt fails immediately with an audit alert, alerting the security team of credential tampering.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["response-wrapping", "cubbyhole", "transport", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "hashicorp-vault-79",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Periodic Tokens: Autonomous Vehicle Telemetry",
    scenario: "In a autonomous vehicle telemetry infrastructure, a self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The operations team is currently managing long-running daemon authentication without root tokens under production deployment cycle 4.4.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these autonomous vehicle telemetry criteria for periodic tokens?",
    options: [
      { id: 'A', text: "Issue an immutable root token with an infinite TTL that never expires." },
      { id: 'B', text: "Generate standard service tokens and increase the system-wide maximum TTL to 10 years." },
      { id: 'C', text: "Use batch tokens and restart the application daemon every 10 minutes to obtain fresh tokens." },
      { id: 'D', text: "Issue a periodic token with a defined period, requiring the daemon to renew it within the period interval indefinitely without hitting a max TTL." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Periodic tokens have no maximum TTL as long as they are renewed within their specified period interval. This makes them ideal for persistent background services and daemons that must maintain continuous authentication without requiring manual intervention or root credentials.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["tokens", "periodic", "ttl", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "hashicorp-vault-80",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Orphan Tokens: Multi-Tenant B2B SaaS Platform",
    scenario: "In a multi-tenant b2b saas platform infrastructure, an enterprise cloud saas architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The operations team is currently decoupling token lifecycles from parent administrative accounts under production deployment cycle 4.5.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these multi-tenant b2b saas platform criteria for orphan tokens?",
    options: [
      { id: 'A', text: "Create an orphan token using 'vault token create -orphan' so its lifetime is independent of the creator's token revocation." },
      { id: 'B', text: "Create standard child tokens that immediately revoke when the parent user logs out at the end of the day." },
      { id: 'C', text: "Share the primary administrative token across all delegate worker processes." },
      { id: 'D', text: "Convert the parent token into a batch token before spawning asynchronous tasks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "By default, tokens are created as children of the caller's token; revoking a parent token cascades and revokes all children. Orphan tokens have no parent, so they survive the termination or logout of the creating entity, which is vital for provisioning independent service lifecycles.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["tokens", "orphan", "hierarchy", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "hashicorp-vault-81",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "AppRole Authentication: Media Streaming & Global CDN",
    scenario: "In a media streaming & global cdn infrastructure, a global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized drm protection. The operations team is currently configuring machine authentication for containerized workloads under production deployment cycle 4.6.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these media streaming & global cdn criteria for approle authentication?",
    options: [
      { id: 'A', text: "Hardcode root tokens in environment variables inside container definitions." },
      { id: 'B', text: "Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs." },
      { id: 'C', text: "Deploy a single shared token to all production application instances." },
      { id: 'D', text: "Store long-lived API keys in a plaintext configmap mounted to pods." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AppRole is specifically designed for automated workflows where machines require credentials. It separates machine identity (RoleID) from authorization proof (SecretID), allowing strict CIDR constraints, response wrapping, and short-lived renewable tokens. Hardcoding root tokens or sharing static credentials completely violates Vault security best practices.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["approle", "auth", "security", "Media Streaming & Global CDN"]
  },
  {
    id: "hashicorp-vault-82",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Kubernetes Service Account Auth: Aerospace Satellite Ground Systems",
    scenario: "In a aerospace satellite ground systems infrastructure, an aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The operations team is currently authenticating ephemeral cluster pods without pre-seeded secrets under production deployment cycle 4.7.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these aerospace satellite ground systems criteria for kubernetes service account auth?",
    options: [
      { id: 'A', text: "Mount a static root token into a Kubernetes Secret and inject it as an environment variable." },
      { id: 'B', text: "Use the Userpass auth engine and have pod initialization scripts curl credentials with hardcoded passwords." },
      { id: 'C', text: "Enable the Kubernetes auth method, configure Vault with the cluster token reviewer JWT, and bind Vault roles to Kubernetes service accounts and namespaces." },
      { id: 'D', text: "Enable LDAP authentication and provision dedicated LDAP user accounts for each ephemeral Kubernetes pod." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Vault Kubernetes auth method validates ephemeral pod identity by verifying the pod's service account JWT against the Kubernetes TokenReview API. This removes any requirement for pre-seeding credentials in pods or storing static passwords. Userpass and LDAP are for human operators, while root tokens must never be used in workloads.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["k8s", "auth", "jwt", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "hashicorp-vault-83",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Vault Policy Capabilities: Telecommunications 5G Core Network",
    scenario: "In a telecommunications 5g core network infrastructure, a national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The operations team is currently enforcing least privilege access control with granular permissions under production deployment cycle 4.8.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these telecommunications 5g core network criteria for vault policy capabilities?",
    options: [
      { id: 'A', text: "Grant the 'sudo' capability to all paths to avoid permission denial errors during deployment." },
      { id: 'B', text: "Assign capability 'write' without 'read' on a KV v2 data path." },
      { id: 'C', text: "Use capability 'deny' on all parent paths without configuring explicit subpath permissions." },
      { id: 'D', text: "Specify path 'secret/data/app/*' with capabilities ['read'] to allow reading credentials while denying creation or modification." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Vault policies follow an explicit deny-by-default model. Granular capabilities ('create', 'read', 'update', 'delete', 'list', 'sudo', 'deny') must be assigned strictly on relevant path prefixes. Sudo capability bypasses safeguards and is reserved for root-level operations, not general application reads.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["policy", "hcl", "capabilities", "Telecommunications 5G Core Network"]
  },
  {
    id: "hashicorp-vault-84",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Templated Vault Policies: Renewable Energy Smart Grid IoT",
    scenario: "In a renewable energy smart grid iot infrastructure, a smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The operations team is currently scaling access control using identity metadata and entity aliases under production deployment cycle 4.9.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these renewable energy smart grid iot criteria for templated vault policies?",
    options: [
      { id: 'A', text: "Define policy paths using template syntax like 'secret/data/teams/{{identity.entity.metadata.team}}/*' to restrict access by metadata." },
      { id: 'B', text: "Hardcode individual username paths for every user in separate monolithic policy files." },
      { id: 'C', text: "Disable identity entities and rely exclusively on unmapped client IP addresses." },
      { id: 'D', text: "Store policies in database secret engines to allow dynamic SQL queries during authorization." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Vault policy templating allows administrators to write concise, scalable policies using identity metadata, entity IDs, or mount accessors (e.g., 'identity.entity.metadata.team'). This avoids authoring thousands of repetitive static policies for individual users or departments.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["policy", "identity", "templating", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "hashicorp-vault-85",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Response Wrapping: Supply Chain Cold-Chain Logistics",
    scenario: "In a supply chain cold-chain logistics infrastructure, a pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The operations team is currently securing the initial transport of sensitive SecretIDs and tokens under production deployment cycle 4.10.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these supply chain cold-chain logistics criteria for response wrapping?",
    options: [
      { id: 'A', text: "Encrypt the SecretID using base64 encoding and transmit it over unencrypted email." },
      { id: 'B', text: "Generate wrapped tokens or SecretIDs using the '-wrap-ttl' parameter so the recipient retrieves the secret with 'vault unwrap'." },
      { id: 'C', text: "Print the SecretID to standard application build logs for developers to retrieve." },
      { id: 'D', text: "Store the raw SecretID in a shared public S3 bucket with read access." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Vault response wrapping provides single-use, time-bound covering tokens ('cubbyhole') for sensitive payloads. If an attacker intercepts and unwraps the token first, the intended recipient's subsequent unwrap attempt fails immediately with an audit alert, alerting the security team of credential tampering.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["response-wrapping", "cubbyhole", "transport", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "hashicorp-vault-86",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Periodic Tokens: Banking Core Ledger & Payments",
    scenario: "In a banking core ledger & payments infrastructure, a central banking consortium enforces acid consistency, immutable transaction audit trails, and automated reconciliation. The operations team is currently managing long-running daemon authentication without root tokens under production deployment cycle 4.11.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these banking core ledger & payments criteria for periodic tokens?",
    options: [
      { id: 'A', text: "Issue an immutable root token with an infinite TTL that never expires." },
      { id: 'B', text: "Generate standard service tokens and increase the system-wide maximum TTL to 10 years." },
      { id: 'C', text: "Issue a periodic token with a defined period, requiring the daemon to renew it within the period interval indefinitely without hitting a max TTL." },
      { id: 'D', text: "Use batch tokens and restart the application daemon every 10 minutes to obtain fresh tokens." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Periodic tokens have no maximum TTL as long as they are renewed within their specified period interval. This makes them ideal for persistent background services and daemons that must maintain continuous authentication without requiring manual intervention or root credentials.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["tokens", "periodic", "ttl", "Banking Core Ledger & Payments"]
  },
  {
    id: "hashicorp-vault-87",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Orphan Tokens: Genomic Sequencing & Biotech Pipeline",
    scenario: "In a genomic sequencing & biotech pipeline infrastructure, a genomics laboratory processes petabyte-scale fastq files with distributed batch computing and high-throughput posix storage. The operations team is currently decoupling token lifecycles from parent administrative accounts under production deployment cycle 4.12.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these genomic sequencing & biotech pipeline criteria for orphan tokens?",
    options: [
      { id: 'A', text: "Create standard child tokens that immediately revoke when the parent user logs out at the end of the day." },
      { id: 'B', text: "Share the primary administrative token across all delegate worker processes." },
      { id: 'C', text: "Convert the parent token into a batch token before spawning asynchronous tasks." },
      { id: 'D', text: "Create an orphan token using 'vault token create -orphan' so its lifetime is independent of the creator's token revocation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "By default, tokens are created as children of the caller's token; revoking a parent token cascades and revokes all children. Orphan tokens have no parent, so they survive the termination or logout of the creating entity, which is vital for provisioning independent service lifecycles.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["tokens", "orphan", "hierarchy", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "hashicorp-vault-88",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "AppRole Authentication: Defense-Grade Zero-Trust Network",
    scenario: "In a defense-grade zero-trust network infrastructure, a defense intelligence system enforces continuous mutual tls authentication, strict least privilege, and non-repudiation. The operations team is currently configuring machine authentication for containerized workloads under production deployment cycle 4.13.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these defense-grade zero-trust network criteria for approle authentication?",
    options: [
      { id: 'A', text: "Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs." },
      { id: 'B', text: "Hardcode root tokens in environment variables inside container definitions." },
      { id: 'C', text: "Deploy a single shared token to all production application instances." },
      { id: 'D', text: "Store long-lived API keys in a plaintext configmap mounted to pods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AppRole is specifically designed for automated workflows where machines require credentials. It separates machine identity (RoleID) from authorization proof (SecretID), allowing strict CIDR constraints, response wrapping, and short-lived renewable tokens. Hardcoding root tokens or sharing static credentials completely violates Vault security best practices.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["approle", "auth", "security", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "hashicorp-vault-89",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Kubernetes Service Account Auth: Online Multiplayer Gaming Engine",
    scenario: "In a online multiplayer gaming engine infrastructure, a real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The operations team is currently authenticating ephemeral cluster pods without pre-seeded secrets under production deployment cycle 4.14.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these online multiplayer gaming engine criteria for kubernetes service account auth?",
    options: [
      { id: 'A', text: "Mount a static root token into a Kubernetes Secret and inject it as an environment variable." },
      { id: 'B', text: "Enable the Kubernetes auth method, configure Vault with the cluster token reviewer JWT, and bind Vault roles to Kubernetes service accounts and namespaces." },
      { id: 'C', text: "Use the Userpass auth engine and have pod initialization scripts curl credentials with hardcoded passwords." },
      { id: 'D', text: "Enable LDAP authentication and provision dedicated LDAP user accounts for each ephemeral Kubernetes pod." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Vault Kubernetes auth method validates ephemeral pod identity by verifying the pod's service account JWT against the Kubernetes TokenReview API. This removes any requirement for pre-seeding credentials in pods or storing static passwords. Userpass and LDAP are for human operators, while root tokens must never be used in workloads.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["k8s", "auth", "jwt", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "hashicorp-vault-90",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Vault Policy Capabilities: Insurance Risk & Actuarial Modeling",
    scenario: "In a insurance risk & actuarial modeling infrastructure, an actuarial underwriting platform executes monte carlo simulations across millions of policy holder records with parallel workers. The operations team is currently enforcing least privilege access control with granular permissions under production deployment cycle 4.15.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these insurance risk & actuarial modeling criteria for vault policy capabilities?",
    options: [
      { id: 'A', text: "Grant the 'sudo' capability to all paths to avoid permission denial errors during deployment." },
      { id: 'B', text: "Assign capability 'write' without 'read' on a KV v2 data path." },
      { id: 'C', text: "Specify path 'secret/data/app/*' with capabilities ['read'] to allow reading credentials while denying creation or modification." },
      { id: 'D', text: "Use capability 'deny' on all parent paths without configuring explicit subpath permissions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Vault policies follow an explicit deny-by-default model. Granular capabilities ('create', 'read', 'update', 'delete', 'list', 'sudo', 'deny') must be assigned strictly on relevant path prefixes. Sudo capability bypasses safeguards and is reserved for root-level operations, not general application reads.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["policy", "hcl", "capabilities", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "hashicorp-vault-91",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Templated Vault Policies: Pharmaceutical Clinical Trial Platform",
    scenario: "In a pharmaceutical clinical trial platform infrastructure, a global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The operations team is currently scaling access control using identity metadata and entity aliases under production deployment cycle 4.16.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these pharmaceutical clinical trial platform criteria for templated vault policies?",
    options: [
      { id: 'A', text: "Hardcode individual username paths for every user in separate monolithic policy files." },
      { id: 'B', text: "Disable identity entities and rely exclusively on unmapped client IP addresses." },
      { id: 'C', text: "Store policies in database secret engines to allow dynamic SQL queries during authorization." },
      { id: 'D', text: "Define policy paths using template syntax like 'secret/data/teams/{{identity.entity.metadata.team}}/*' to restrict access by metadata." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Vault policy templating allows administrators to write concise, scalable policies using identity metadata, entity IDs, or mount accessors (e.g., 'identity.entity.metadata.team'). This avoids authoring thousands of repetitive static policies for individual users or departments.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["policy", "identity", "templating", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "hashicorp-vault-92",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Response Wrapping: Smart City Traffic & Mobility Sensor Hub",
    scenario: "In a smart city traffic & mobility sensor hub infrastructure, a metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The operations team is currently securing the initial transport of sensitive SecretIDs and tokens under production deployment cycle 4.17.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these smart city traffic & mobility sensor hub criteria for response wrapping?",
    options: [
      { id: 'A', text: "Generate wrapped tokens or SecretIDs using the '-wrap-ttl' parameter so the recipient retrieves the secret with 'vault unwrap'." },
      { id: 'B', text: "Encrypt the SecretID using base64 encoding and transmit it over unencrypted email." },
      { id: 'C', text: "Print the SecretID to standard application build logs for developers to retrieve." },
      { id: 'D', text: "Store the raw SecretID in a shared public S3 bucket with read access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Vault response wrapping provides single-use, time-bound covering tokens ('cubbyhole') for sensitive payloads. If an attacker intercepts and unwraps the token first, the intended recipient's subsequent unwrap attempt fails immediately with an audit alert, alerting the security team of credential tampering.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["response-wrapping", "cubbyhole", "transport", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "hashicorp-vault-93",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Periodic Tokens: Digital Identity & Biometric Verification",
    scenario: "In a digital identity & biometric verification infrastructure, a cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The operations team is currently managing long-running daemon authentication without root tokens under production deployment cycle 4.18.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these digital identity & biometric verification criteria for periodic tokens?",
    options: [
      { id: 'A', text: "Issue an immutable root token with an infinite TTL that never expires." },
      { id: 'B', text: "Issue a periodic token with a defined period, requiring the daemon to renew it within the period interval indefinitely without hitting a max TTL." },
      { id: 'C', text: "Generate standard service tokens and increase the system-wide maximum TTL to 10 years." },
      { id: 'D', text: "Use batch tokens and restart the application daemon every 10 minutes to obtain fresh tokens." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Periodic tokens have no maximum TTL as long as they are renewed within their specified period interval. This makes them ideal for persistent background services and daemons that must maintain continuous authentication without requiring manual intervention or root credentials.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["tokens", "periodic", "ttl", "Digital Identity & Biometric Verification"]
  },
  {
    id: "hashicorp-vault-94",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Orphan Tokens: Legal Discovery & Semantic Document Search",
    scenario: "In a legal discovery & semantic document search infrastructure, a global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The operations team is currently decoupling token lifecycles from parent administrative accounts under production deployment cycle 4.19.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these legal discovery & semantic document search criteria for orphan tokens?",
    options: [
      { id: 'A', text: "Create standard child tokens that immediately revoke when the parent user logs out at the end of the day." },
      { id: 'B', text: "Share the primary administrative token across all delegate worker processes." },
      { id: 'C', text: "Create an orphan token using 'vault token create -orphan' so its lifetime is independent of the creator's token revocation." },
      { id: 'D', text: "Convert the parent token into a batch token before spawning asynchronous tasks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "By default, tokens are created as children of the caller's token; revoking a parent token cascades and revokes all children. Orphan tokens have no parent, so they survive the termination or logout of the creating entity, which is vital for provisioning independent service lifecycles.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["tokens", "orphan", "hierarchy", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "hashicorp-vault-95",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "AppRole Authentication: AdTech Real-Time Bidding Exchange",
    scenario: "In a adtech real-time bidding exchange infrastructure, an advertising exchange processes 500,000 bids per second with a strict 20-millisecond sla and distributed caching. The operations team is currently configuring machine authentication for containerized workloads under production deployment cycle 4.20.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these adtech real-time bidding exchange criteria for approle authentication?",
    options: [
      { id: 'A', text: "Hardcode root tokens in environment variables inside container definitions." },
      { id: 'B', text: "Deploy a single shared token to all production application instances." },
      { id: 'C', text: "Store long-lived API keys in a plaintext configmap mounted to pods." },
      { id: 'D', text: "Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AppRole is specifically designed for automated workflows where machines require credentials. It separates machine identity (RoleID) from authorization proof (SecretID), allowing strict CIDR constraints, response wrapping, and short-lived renewable tokens. Hardcoding root tokens or sharing static credentials completely violates Vault security best practices.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["approle", "auth", "security", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "hashicorp-vault-96",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Kubernetes Service Account Auth: Precision Agriculture & Drone Scouting",
    scenario: "In a precision agriculture & drone scouting infrastructure, an agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The operations team is currently authenticating ephemeral cluster pods without pre-seeded secrets under production deployment cycle 4.21.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these precision agriculture & drone scouting criteria for kubernetes service account auth?",
    options: [
      { id: 'A', text: "Enable the Kubernetes auth method, configure Vault with the cluster token reviewer JWT, and bind Vault roles to Kubernetes service accounts and namespaces." },
      { id: 'B', text: "Mount a static root token into a Kubernetes Secret and inject it as an environment variable." },
      { id: 'C', text: "Use the Userpass auth engine and have pod initialization scripts curl credentials with hardcoded passwords." },
      { id: 'D', text: "Enable LDAP authentication and provision dedicated LDAP user accounts for each ephemeral Kubernetes pod." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Vault Kubernetes auth method validates ephemeral pod identity by verifying the pod's service account JWT against the Kubernetes TokenReview API. This removes any requirement for pre-seeding credentials in pods or storing static passwords. Userpass and LDAP are for human operators, while root tokens must never be used in workloads.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["k8s", "auth", "jwt", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "hashicorp-vault-97",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Vault Policy Capabilities: Industrial Robotics Predictive Maintenance",
    scenario: "In a industrial robotics predictive maintenance infrastructure, a semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The operations team is currently enforcing least privilege access control with granular permissions under production deployment cycle 4.22.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these industrial robotics predictive maintenance criteria for vault policy capabilities?",
    options: [
      { id: 'A', text: "Grant the 'sudo' capability to all paths to avoid permission denial errors during deployment." },
      { id: 'B', text: "Specify path 'secret/data/app/*' with capabilities ['read'] to allow reading credentials while denying creation or modification." },
      { id: 'C', text: "Assign capability 'write' without 'read' on a KV v2 data path." },
      { id: 'D', text: "Use capability 'deny' on all parent paths without configuring explicit subpath permissions." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Vault policies follow an explicit deny-by-default model. Granular capabilities ('create', 'read', 'update', 'delete', 'list', 'sudo', 'deny') must be assigned strictly on relevant path prefixes. Sudo capability bypasses safeguards and is reserved for root-level operations, not general application reads.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["policy", "hcl", "capabilities", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "hashicorp-vault-98",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Templated Vault Policies: Educational Remote Proctoring Platform",
    scenario: "In a educational remote proctoring platform infrastructure, an online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The operations team is currently scaling access control using identity metadata and entity aliases under production deployment cycle 4.23.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these educational remote proctoring platform criteria for templated vault policies?",
    options: [
      { id: 'A', text: "Hardcode individual username paths for every user in separate monolithic policy files." },
      { id: 'B', text: "Disable identity entities and rely exclusively on unmapped client IP addresses." },
      { id: 'C', text: "Define policy paths using template syntax like 'secret/data/teams/{{identity.entity.metadata.team}}/*' to restrict access by metadata." },
      { id: 'D', text: "Store policies in database secret engines to allow dynamic SQL queries during authorization." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Vault policy templating allows administrators to write concise, scalable policies using identity metadata, entity IDs, or mount accessors (e.g., 'identity.entity.metadata.team'). This avoids authoring thousands of repetitive static policies for individual users or departments.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["policy", "identity", "templating", "Educational Remote Proctoring Platform"]
  },
  {
    id: "hashicorp-vault-99",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Response Wrapping: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "In a real estate valuation & geo-spatial analytics infrastructure, a property appraisal engine fuses gis parcel maps with real-time market transactions for automated valuation. The operations team is currently securing the initial transport of sensitive SecretIDs and tokens under production deployment cycle 4.24.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these real estate valuation & geo-spatial analytics criteria for response wrapping?",
    options: [
      { id: 'A', text: "Encrypt the SecretID using base64 encoding and transmit it over unencrypted email." },
      { id: 'B', text: "Print the SecretID to standard application build logs for developers to retrieve." },
      { id: 'C', text: "Store the raw SecretID in a shared public S3 bucket with read access." },
      { id: 'D', text: "Generate wrapped tokens or SecretIDs using the '-wrap-ttl' parameter so the recipient retrieves the secret with 'vault unwrap'." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Vault response wrapping provides single-use, time-bound covering tokens ('cubbyhole') for sensitive payloads. If an attacker intercepts and unwraps the token first, the intended recipient's subsequent unwrap attempt fails immediately with an audit alert, alerting the security team of credential tampering.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["response-wrapping", "cubbyhole", "transport", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "hashicorp-vault-100",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Periodic Tokens: Disaster Emergency Dispatch & Operations",
    scenario: "In a disaster emergency dispatch & operations infrastructure, a municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The operations team is currently managing long-running daemon authentication without root tokens under production deployment cycle 4.25.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these disaster emergency dispatch & operations criteria for periodic tokens?",
    options: [
      { id: 'A', text: "Issue a periodic token with a defined period, requiring the daemon to renew it within the period interval indefinitely without hitting a max TTL." },
      { id: 'B', text: "Issue an immutable root token with an infinite TTL that never expires." },
      { id: 'C', text: "Generate standard service tokens and increase the system-wide maximum TTL to 10 years." },
      { id: 'D', text: "Use batch tokens and restart the application daemon every 10 minutes to obtain fresh tokens." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Periodic tokens have no maximum TTL as long as they are renewed within their specified period interval. This makes them ideal for persistent background services and daemons that must maintain continuous authentication without requiring manual intervention or root credentials.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["tokens", "periodic", "ttl", "Disaster Emergency Dispatch & Operations"]
  }
];

export default HASHICORP_VAULT_QUESTIONS_4;
