export const HASHICORP_VAULT_FLASHCARDS_1 = [
  {
    id: "hashicorp-vault-fc-1",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: AppRole Authentication in High-Frequency FinTech Trading",
    hint: "Focus on approle and auth operational principles.",
    back: "<strong>AppRole Authentication</strong>: Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs. Core architectural rationale: AppRole is specifically designed for automated workflows where machines require credentials. It separates machine identity (RoleID) from authorization proof (Se...",
    tags: ["approle", "auth", "security", "High-Frequency FinTech Trading"]
  },
  {
    id: "hashicorp-vault-fc-2",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Kubernetes Service Account Auth in Healthcare Patient Records & HIPAA",
    hint: "Focus on k8s and auth operational principles.",
    back: "<strong>Kubernetes Service Account Auth</strong>: Enable the Kubernetes auth method, configure Vault with the cluster token reviewer JWT, and bind Vault roles to Kubernetes service accounts and namespaces. Core architectural rationale: The Vault Kubernetes auth method validates ephemeral pod identity by verifying the pod's service account JWT against the Kubernetes TokenReview API. This remove...",
    tags: ["k8s", "auth", "jwt", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "hashicorp-vault-fc-3",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Vault Policy Capabilities in Global E-Commerce Black Friday Scale",
    hint: "Focus on policy and hcl operational principles.",
    back: "<strong>Vault Policy Capabilities</strong>: Specify path 'secret/data/app/*' with capabilities ['read'] to allow reading credentials while denying creation or modification. Core architectural rationale: Vault policies follow an explicit deny-by-default model. Granular capabilities ('create', 'read', 'update', 'delete', 'list', 'sudo', 'deny') must be assigned s...",
    tags: ["policy", "hcl", "capabilities", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "hashicorp-vault-fc-4",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Templated Vault Policies in Autonomous Vehicle Telemetry",
    hint: "Focus on policy and identity operational principles.",
    back: "<strong>Templated Vault Policies</strong>: Define policy paths using template syntax like 'secret/data/teams/{{identity.entity.metadata.team}}/*' to restrict access by metadata. Core architectural rationale: Vault policy templating allows administrators to write concise, scalable policies using identity metadata, entity IDs, or mount accessors (e.g., 'identity.entit...",
    tags: ["policy", "identity", "templating", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "hashicorp-vault-fc-5",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Response Wrapping in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on response-wrapping and cubbyhole operational principles.",
    back: "<strong>Response Wrapping</strong>: Generate wrapped tokens or SecretIDs using the '-wrap-ttl' parameter so the recipient retrieves the secret with 'vault unwrap'. Core architectural rationale: Vault response wrapping provides single-use, time-bound covering tokens ('cubbyhole') for sensitive payloads. If an attacker intercepts and unwraps the token fi...",
    tags: ["response-wrapping", "cubbyhole", "transport", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "hashicorp-vault-fc-6",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Periodic Tokens in Media Streaming & Global CDN",
    hint: "Focus on tokens and periodic operational principles.",
    back: "<strong>Periodic Tokens</strong>: Issue a periodic token with a defined period, requiring the daemon to renew it within the period interval indefinitely without hitting a max TTL. Core architectural rationale: Periodic tokens have no maximum TTL as long as they are renewed within their specified period interval. This makes them ideal for persistent background services...",
    tags: ["tokens", "periodic", "ttl", "Media Streaming & Global CDN"]
  },
  {
    id: "hashicorp-vault-fc-7",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Orphan Tokens in Aerospace Satellite Ground Systems",
    hint: "Focus on tokens and orphan operational principles.",
    back: "<strong>Orphan Tokens</strong>: Create an orphan token using 'vault token create -orphan' so its lifetime is independent of the creator's token revocation. Core architectural rationale: By default, tokens are created as children of the caller's token; revoking a parent token cascades and revokes all children. Orphan tokens have no parent, so th...",
    tags: ["tokens", "orphan", "hierarchy", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "hashicorp-vault-fc-8",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: AppRole Authentication in Telecommunications 5G Core Network",
    hint: "Focus on approle and auth operational principles.",
    back: "<strong>AppRole Authentication</strong>: Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs. Core architectural rationale: AppRole is specifically designed for automated workflows where machines require credentials. It separates machine identity (RoleID) from authorization proof (Se...",
    tags: ["approle", "auth", "security", "Telecommunications 5G Core Network"]
  },
  {
    id: "hashicorp-vault-fc-9",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Kubernetes Service Account Auth in Renewable Energy Smart Grid IoT",
    hint: "Focus on k8s and auth operational principles.",
    back: "<strong>Kubernetes Service Account Auth</strong>: Enable the Kubernetes auth method, configure Vault with the cluster token reviewer JWT, and bind Vault roles to Kubernetes service accounts and namespaces. Core architectural rationale: The Vault Kubernetes auth method validates ephemeral pod identity by verifying the pod's service account JWT against the Kubernetes TokenReview API. This remove...",
    tags: ["k8s", "auth", "jwt", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "hashicorp-vault-fc-10",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Vault Policy Capabilities in Supply Chain Cold-Chain Logistics",
    hint: "Focus on policy and hcl operational principles.",
    back: "<strong>Vault Policy Capabilities</strong>: Specify path 'secret/data/app/*' with capabilities ['read'] to allow reading credentials while denying creation or modification. Core architectural rationale: Vault policies follow an explicit deny-by-default model. Granular capabilities ('create', 'read', 'update', 'delete', 'list', 'sudo', 'deny') must be assigned s...",
    tags: ["policy", "hcl", "capabilities", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "hashicorp-vault-fc-11",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Templated Vault Policies in Banking Core Ledger & Payments",
    hint: "Focus on policy and identity operational principles.",
    back: "<strong>Templated Vault Policies</strong>: Define policy paths using template syntax like 'secret/data/teams/{{identity.entity.metadata.team}}/*' to restrict access by metadata. Core architectural rationale: Vault policy templating allows administrators to write concise, scalable policies using identity metadata, entity IDs, or mount accessors (e.g., 'identity.entit...",
    tags: ["policy", "identity", "templating", "Banking Core Ledger & Payments"]
  },
  {
    id: "hashicorp-vault-fc-12",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Response Wrapping in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on response-wrapping and cubbyhole operational principles.",
    back: "<strong>Response Wrapping</strong>: Generate wrapped tokens or SecretIDs using the '-wrap-ttl' parameter so the recipient retrieves the secret with 'vault unwrap'. Core architectural rationale: Vault response wrapping provides single-use, time-bound covering tokens ('cubbyhole') for sensitive payloads. If an attacker intercepts and unwraps the token fi...",
    tags: ["response-wrapping", "cubbyhole", "transport", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "hashicorp-vault-fc-13",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Periodic Tokens in Defense-Grade Zero-Trust Network",
    hint: "Focus on tokens and periodic operational principles.",
    back: "<strong>Periodic Tokens</strong>: Issue a periodic token with a defined period, requiring the daemon to renew it within the period interval indefinitely without hitting a max TTL. Core architectural rationale: Periodic tokens have no maximum TTL as long as they are renewed within their specified period interval. This makes them ideal for persistent background services...",
    tags: ["tokens", "periodic", "ttl", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "hashicorp-vault-fc-14",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Orphan Tokens in Online Multiplayer Gaming Engine",
    hint: "Focus on tokens and orphan operational principles.",
    back: "<strong>Orphan Tokens</strong>: Create an orphan token using 'vault token create -orphan' so its lifetime is independent of the creator's token revocation. Core architectural rationale: By default, tokens are created as children of the caller's token; revoking a parent token cascades and revokes all children. Orphan tokens have no parent, so th...",
    tags: ["tokens", "orphan", "hierarchy", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "hashicorp-vault-fc-15",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: AppRole Authentication in Insurance Risk & Actuarial Modeling",
    hint: "Focus on approle and auth operational principles.",
    back: "<strong>AppRole Authentication</strong>: Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs. Core architectural rationale: AppRole is specifically designed for automated workflows where machines require credentials. It separates machine identity (RoleID) from authorization proof (Se...",
    tags: ["approle", "auth", "security", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "hashicorp-vault-fc-16",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Kubernetes Service Account Auth in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on k8s and auth operational principles.",
    back: "<strong>Kubernetes Service Account Auth</strong>: Enable the Kubernetes auth method, configure Vault with the cluster token reviewer JWT, and bind Vault roles to Kubernetes service accounts and namespaces. Core architectural rationale: The Vault Kubernetes auth method validates ephemeral pod identity by verifying the pod's service account JWT against the Kubernetes TokenReview API. This remove...",
    tags: ["k8s", "auth", "jwt", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "hashicorp-vault-fc-17",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Vault Policy Capabilities in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on policy and hcl operational principles.",
    back: "<strong>Vault Policy Capabilities</strong>: Specify path 'secret/data/app/*' with capabilities ['read'] to allow reading credentials while denying creation or modification. Core architectural rationale: Vault policies follow an explicit deny-by-default model. Granular capabilities ('create', 'read', 'update', 'delete', 'list', 'sudo', 'deny') must be assigned s...",
    tags: ["policy", "hcl", "capabilities", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "hashicorp-vault-fc-18",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Templated Vault Policies in Digital Identity & Biometric Verification",
    hint: "Focus on policy and identity operational principles.",
    back: "<strong>Templated Vault Policies</strong>: Define policy paths using template syntax like 'secret/data/teams/{{identity.entity.metadata.team}}/*' to restrict access by metadata. Core architectural rationale: Vault policy templating allows administrators to write concise, scalable policies using identity metadata, entity IDs, or mount accessors (e.g., 'identity.entit...",
    tags: ["policy", "identity", "templating", "Digital Identity & Biometric Verification"]
  },
  {
    id: "hashicorp-vault-fc-19",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Response Wrapping in Legal Discovery & Semantic Document Search",
    hint: "Focus on response-wrapping and cubbyhole operational principles.",
    back: "<strong>Response Wrapping</strong>: Generate wrapped tokens or SecretIDs using the '-wrap-ttl' parameter so the recipient retrieves the secret with 'vault unwrap'. Core architectural rationale: Vault response wrapping provides single-use, time-bound covering tokens ('cubbyhole') for sensitive payloads. If an attacker intercepts and unwraps the token fi...",
    tags: ["response-wrapping", "cubbyhole", "transport", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "hashicorp-vault-fc-20",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Periodic Tokens in AdTech Real-Time Bidding Exchange",
    hint: "Focus on tokens and periodic operational principles.",
    back: "<strong>Periodic Tokens</strong>: Issue a periodic token with a defined period, requiring the daemon to renew it within the period interval indefinitely without hitting a max TTL. Core architectural rationale: Periodic tokens have no maximum TTL as long as they are renewed within their specified period interval. This makes them ideal for persistent background services...",
    tags: ["tokens", "periodic", "ttl", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "hashicorp-vault-fc-21",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Orphan Tokens in Precision Agriculture & Drone Scouting",
    hint: "Focus on tokens and orphan operational principles.",
    back: "<strong>Orphan Tokens</strong>: Create an orphan token using 'vault token create -orphan' so its lifetime is independent of the creator's token revocation. Core architectural rationale: By default, tokens are created as children of the caller's token; revoking a parent token cascades and revokes all children. Orphan tokens have no parent, so th...",
    tags: ["tokens", "orphan", "hierarchy", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "hashicorp-vault-fc-22",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: AppRole Authentication in Industrial Robotics Predictive Maintenance",
    hint: "Focus on approle and auth operational principles.",
    back: "<strong>AppRole Authentication</strong>: Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs. Core architectural rationale: AppRole is specifically designed for automated workflows where machines require credentials. It separates machine identity (RoleID) from authorization proof (Se...",
    tags: ["approle", "auth", "security", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "hashicorp-vault-fc-23",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Kubernetes Service Account Auth in Educational Remote Proctoring Platform",
    hint: "Focus on k8s and auth operational principles.",
    back: "<strong>Kubernetes Service Account Auth</strong>: Enable the Kubernetes auth method, configure Vault with the cluster token reviewer JWT, and bind Vault roles to Kubernetes service accounts and namespaces. Core architectural rationale: The Vault Kubernetes auth method validates ephemeral pod identity by verifying the pod's service account JWT against the Kubernetes TokenReview API. This remove...",
    tags: ["k8s", "auth", "jwt", "Educational Remote Proctoring Platform"]
  },
  {
    id: "hashicorp-vault-fc-24",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Vault Policy Capabilities in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on policy and hcl operational principles.",
    back: "<strong>Vault Policy Capabilities</strong>: Specify path 'secret/data/app/*' with capabilities ['read'] to allow reading credentials while denying creation or modification. Core architectural rationale: Vault policies follow an explicit deny-by-default model. Granular capabilities ('create', 'read', 'update', 'delete', 'list', 'sudo', 'deny') must be assigned s...",
    tags: ["policy", "hcl", "capabilities", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "hashicorp-vault-fc-25",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Templated Vault Policies in Disaster Emergency Dispatch & Operations",
    hint: "Focus on policy and identity operational principles.",
    back: "<strong>Templated Vault Policies</strong>: Define policy paths using template syntax like 'secret/data/teams/{{identity.entity.metadata.team}}/*' to restrict access by metadata. Core architectural rationale: Vault policy templating allows administrators to write concise, scalable policies using identity metadata, entity IDs, or mount accessors (e.g., 'identity.entit...",
    tags: ["policy", "identity", "templating", "Disaster Emergency Dispatch & Operations"]
  }
];

export default HASHICORP_VAULT_FLASHCARDS_1;
