export const HASHICORP_VAULT_QUESTIONS_1 = [
  {
    id: "hashicorp-vault-1",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "AppRole Authentication: High-Frequency FinTech Trading",
    scenario: "In a high-frequency fintech trading infrastructure, a quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The operations team is currently configuring machine authentication for containerized workloads under production deployment cycle 1.1.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these high-frequency fintech trading criteria for approle authentication?",
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
    tags: ["approle", "auth", "security", "High-Frequency FinTech Trading"]
  },
  {
    id: "hashicorp-vault-2",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Kubernetes Service Account Auth: Healthcare Patient Records & HIPAA",
    scenario: "In a healthcare patient records & hipaa infrastructure, a national hospital network requires strict cryptographic privacy, auditable access controls, and hipaa compliance. The operations team is currently authenticating ephemeral cluster pods without pre-seeded secrets under production deployment cycle 1.2.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these healthcare patient records & hipaa criteria for kubernetes service account auth?",
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
    tags: ["k8s", "auth", "jwt", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "hashicorp-vault-3",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Vault Policy Capabilities: Global E-Commerce Black Friday Scale",
    scenario: "In a global e-commerce black friday scale infrastructure, an international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The operations team is currently enforcing least privilege access control with granular permissions under production deployment cycle 1.3.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these global e-commerce black friday scale criteria for vault policy capabilities?",
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
    tags: ["policy", "hcl", "capabilities", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "hashicorp-vault-4",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Templated Vault Policies: Autonomous Vehicle Telemetry",
    scenario: "In a autonomous vehicle telemetry infrastructure, a self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The operations team is currently scaling access control using identity metadata and entity aliases under production deployment cycle 1.4.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these autonomous vehicle telemetry criteria for templated vault policies?",
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
    tags: ["policy", "identity", "templating", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "hashicorp-vault-5",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Response Wrapping: Multi-Tenant B2B SaaS Platform",
    scenario: "In a multi-tenant b2b saas platform infrastructure, an enterprise cloud saas architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The operations team is currently securing the initial transport of sensitive SecretIDs and tokens under production deployment cycle 1.5.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these multi-tenant b2b saas platform criteria for response wrapping?",
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
    tags: ["response-wrapping", "cubbyhole", "transport", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "hashicorp-vault-6",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Periodic Tokens: Media Streaming & Global CDN",
    scenario: "In a media streaming & global cdn infrastructure, a global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized drm protection. The operations team is currently managing long-running daemon authentication without root tokens under production deployment cycle 1.6.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these media streaming & global cdn criteria for periodic tokens?",
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
    tags: ["tokens", "periodic", "ttl", "Media Streaming & Global CDN"]
  },
  {
    id: "hashicorp-vault-7",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Orphan Tokens: Aerospace Satellite Ground Systems",
    scenario: "In a aerospace satellite ground systems infrastructure, an aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The operations team is currently decoupling token lifecycles from parent administrative accounts under production deployment cycle 1.7.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these aerospace satellite ground systems criteria for orphan tokens?",
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
    tags: ["tokens", "orphan", "hierarchy", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "hashicorp-vault-8",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "AppRole Authentication: Telecommunications 5G Core Network",
    scenario: "In a telecommunications 5g core network infrastructure, a national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The operations team is currently configuring machine authentication for containerized workloads under production deployment cycle 1.8.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these telecommunications 5g core network criteria for approle authentication?",
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
    tags: ["approle", "auth", "security", "Telecommunications 5G Core Network"]
  },
  {
    id: "hashicorp-vault-9",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Kubernetes Service Account Auth: Renewable Energy Smart Grid IoT",
    scenario: "In a renewable energy smart grid iot infrastructure, a smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The operations team is currently authenticating ephemeral cluster pods without pre-seeded secrets under production deployment cycle 1.9.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these renewable energy smart grid iot criteria for kubernetes service account auth?",
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
    tags: ["k8s", "auth", "jwt", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "hashicorp-vault-10",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Vault Policy Capabilities: Supply Chain Cold-Chain Logistics",
    scenario: "In a supply chain cold-chain logistics infrastructure, a pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The operations team is currently enforcing least privilege access control with granular permissions under production deployment cycle 1.10.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these supply chain cold-chain logistics criteria for vault policy capabilities?",
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
    tags: ["policy", "hcl", "capabilities", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "hashicorp-vault-11",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Templated Vault Policies: Banking Core Ledger & Payments",
    scenario: "In a banking core ledger & payments infrastructure, a central banking consortium enforces acid consistency, immutable transaction audit trails, and automated reconciliation. The operations team is currently scaling access control using identity metadata and entity aliases under production deployment cycle 1.11.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these banking core ledger & payments criteria for templated vault policies?",
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
    tags: ["policy", "identity", "templating", "Banking Core Ledger & Payments"]
  },
  {
    id: "hashicorp-vault-12",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Response Wrapping: Genomic Sequencing & Biotech Pipeline",
    scenario: "In a genomic sequencing & biotech pipeline infrastructure, a genomics laboratory processes petabyte-scale fastq files with distributed batch computing and high-throughput posix storage. The operations team is currently securing the initial transport of sensitive SecretIDs and tokens under production deployment cycle 1.12.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these genomic sequencing & biotech pipeline criteria for response wrapping?",
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
    tags: ["response-wrapping", "cubbyhole", "transport", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "hashicorp-vault-13",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Periodic Tokens: Defense-Grade Zero-Trust Network",
    scenario: "In a defense-grade zero-trust network infrastructure, a defense intelligence system enforces continuous mutual tls authentication, strict least privilege, and non-repudiation. The operations team is currently managing long-running daemon authentication without root tokens under production deployment cycle 1.13.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these defense-grade zero-trust network criteria for periodic tokens?",
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
    tags: ["tokens", "periodic", "ttl", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "hashicorp-vault-14",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Orphan Tokens: Online Multiplayer Gaming Engine",
    scenario: "In a online multiplayer gaming engine infrastructure, a real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The operations team is currently decoupling token lifecycles from parent administrative accounts under production deployment cycle 1.14.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these online multiplayer gaming engine criteria for orphan tokens?",
    options: [
      { id: 'A', text: "Create standard child tokens that immediately revoke when the parent user logs out at the end of the day." },
      { id: 'B', text: "Create an orphan token using 'vault token create -orphan' so its lifetime is independent of the creator's token revocation." },
      { id: 'C', text: "Share the primary administrative token across all delegate worker processes." },
      { id: 'D', text: "Convert the parent token into a batch token before spawning asynchronous tasks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "By default, tokens are created as children of the caller's token; revoking a parent token cascades and revokes all children. Orphan tokens have no parent, so they survive the termination or logout of the creating entity, which is vital for provisioning independent service lifecycles.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["tokens", "orphan", "hierarchy", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "hashicorp-vault-15",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "AppRole Authentication: Insurance Risk & Actuarial Modeling",
    scenario: "In a insurance risk & actuarial modeling infrastructure, an actuarial underwriting platform executes monte carlo simulations across millions of policy holder records with parallel workers. The operations team is currently configuring machine authentication for containerized workloads under production deployment cycle 1.15.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these insurance risk & actuarial modeling criteria for approle authentication?",
    options: [
      { id: 'A', text: "Hardcode root tokens in environment variables inside container definitions." },
      { id: 'B', text: "Deploy a single shared token to all production application instances." },
      { id: 'C', text: "Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs." },
      { id: 'D', text: "Store long-lived API keys in a plaintext configmap mounted to pods." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AppRole is specifically designed for automated workflows where machines require credentials. It separates machine identity (RoleID) from authorization proof (SecretID), allowing strict CIDR constraints, response wrapping, and short-lived renewable tokens. Hardcoding root tokens or sharing static credentials completely violates Vault security best practices.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["approle", "auth", "security", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "hashicorp-vault-16",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Kubernetes Service Account Auth: Pharmaceutical Clinical Trial Platform",
    scenario: "In a pharmaceutical clinical trial platform infrastructure, a global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The operations team is currently authenticating ephemeral cluster pods without pre-seeded secrets under production deployment cycle 1.16.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these pharmaceutical clinical trial platform criteria for kubernetes service account auth?",
    options: [
      { id: 'A', text: "Mount a static root token into a Kubernetes Secret and inject it as an environment variable." },
      { id: 'B', text: "Use the Userpass auth engine and have pod initialization scripts curl credentials with hardcoded passwords." },
      { id: 'C', text: "Enable LDAP authentication and provision dedicated LDAP user accounts for each ephemeral Kubernetes pod." },
      { id: 'D', text: "Enable the Kubernetes auth method, configure Vault with the cluster token reviewer JWT, and bind Vault roles to Kubernetes service accounts and namespaces." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Vault Kubernetes auth method validates ephemeral pod identity by verifying the pod's service account JWT against the Kubernetes TokenReview API. This removes any requirement for pre-seeding credentials in pods or storing static passwords. Userpass and LDAP are for human operators, while root tokens must never be used in workloads.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["k8s", "auth", "jwt", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "hashicorp-vault-17",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Vault Policy Capabilities: Smart City Traffic & Mobility Sensor Hub",
    scenario: "In a smart city traffic & mobility sensor hub infrastructure, a metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The operations team is currently enforcing least privilege access control with granular permissions under production deployment cycle 1.17.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these smart city traffic & mobility sensor hub criteria for vault policy capabilities?",
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
    tags: ["policy", "hcl", "capabilities", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "hashicorp-vault-18",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Templated Vault Policies: Digital Identity & Biometric Verification",
    scenario: "In a digital identity & biometric verification infrastructure, a cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The operations team is currently scaling access control using identity metadata and entity aliases under production deployment cycle 1.18.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these digital identity & biometric verification criteria for templated vault policies?",
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
    tags: ["policy", "identity", "templating", "Digital Identity & Biometric Verification"]
  },
  {
    id: "hashicorp-vault-19",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Response Wrapping: Legal Discovery & Semantic Document Search",
    scenario: "In a legal discovery & semantic document search infrastructure, a global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The operations team is currently securing the initial transport of sensitive SecretIDs and tokens under production deployment cycle 1.19.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these legal discovery & semantic document search criteria for response wrapping?",
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
    tags: ["response-wrapping", "cubbyhole", "transport", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "hashicorp-vault-20",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Periodic Tokens: AdTech Real-Time Bidding Exchange",
    scenario: "In a adtech real-time bidding exchange infrastructure, an advertising exchange processes 500,000 bids per second with a strict 20-millisecond sla and distributed caching. The operations team is currently managing long-running daemon authentication without root tokens under production deployment cycle 1.20.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these adtech real-time bidding exchange criteria for periodic tokens?",
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
    tags: ["tokens", "periodic", "ttl", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "hashicorp-vault-21",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Orphan Tokens: Precision Agriculture & Drone Scouting",
    scenario: "In a precision agriculture & drone scouting infrastructure, an agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The operations team is currently decoupling token lifecycles from parent administrative accounts under production deployment cycle 1.21.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these precision agriculture & drone scouting criteria for orphan tokens?",
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
    tags: ["tokens", "orphan", "hierarchy", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "hashicorp-vault-22",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "AppRole Authentication: Industrial Robotics Predictive Maintenance",
    scenario: "In a industrial robotics predictive maintenance infrastructure, a semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The operations team is currently configuring machine authentication for containerized workloads under production deployment cycle 1.22.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these industrial robotics predictive maintenance criteria for approle authentication?",
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
    tags: ["approle", "auth", "security", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "hashicorp-vault-23",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Kubernetes Service Account Auth: Educational Remote Proctoring Platform",
    scenario: "In a educational remote proctoring platform infrastructure, an online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The operations team is currently authenticating ephemeral cluster pods without pre-seeded secrets under production deployment cycle 1.23.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these educational remote proctoring platform criteria for kubernetes service account auth?",
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
    tags: ["k8s", "auth", "jwt", "Educational Remote Proctoring Platform"]
  },
  {
    id: "hashicorp-vault-24",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Vault Policy Capabilities: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "In a real estate valuation & geo-spatial analytics infrastructure, a property appraisal engine fuses gis parcel maps with real-time market transactions for automated valuation. The operations team is currently enforcing least privilege access control with granular permissions under production deployment cycle 1.24.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these real estate valuation & geo-spatial analytics criteria for vault policy capabilities?",
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
    tags: ["policy", "hcl", "capabilities", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "hashicorp-vault-25",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Templated Vault Policies: Disaster Emergency Dispatch & Operations",
    scenario: "In a disaster emergency dispatch & operations infrastructure, a municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The operations team is currently scaling access control using identity metadata and entity aliases under production deployment cycle 1.25.",
    question: "Which HashiCorp Vault implementation or architectural pattern satisfies these disaster emergency dispatch & operations criteria for templated vault policies?",
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
    tags: ["policy", "identity", "templating", "Disaster Emergency Dispatch & Operations"]
  }
];

export default HASHICORP_VAULT_QUESTIONS_1;
