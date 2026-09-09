export const HASHICORP_VAULT_FLASHCARDS_3 = [
  {
    id: "hashicorp-vault-fc-51",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Orphan Tokens in High-Frequency FinTech Trading",
    hint: "Focus on tokens and orphan operational principles.",
    back: "<strong>Orphan Tokens</strong>: Create an orphan token using 'vault token create -orphan' so its lifetime is independent of the creator's token revocation. Core architectural rationale: By default, tokens are created as children of the caller's token; revoking a parent token cascades and revokes all children. Orphan tokens have no parent, so th...",
    tags: ["tokens", "orphan", "hierarchy", "High-Frequency FinTech Trading"]
  },
  {
    id: "hashicorp-vault-fc-52",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: AppRole Authentication in Healthcare Patient Records & HIPAA",
    hint: "Focus on approle and auth operational principles.",
    back: "<strong>AppRole Authentication</strong>: Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs. Core architectural rationale: AppRole is specifically designed for automated workflows where machines require credentials. It separates machine identity (RoleID) from authorization proof (Se...",
    tags: ["approle", "auth", "security", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "hashicorp-vault-fc-53",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Kubernetes Service Account Auth in Global E-Commerce Black Friday Scale",
    hint: "Focus on k8s and auth operational principles.",
    back: "<strong>Kubernetes Service Account Auth</strong>: Enable the Kubernetes auth method, configure Vault with the cluster token reviewer JWT, and bind Vault roles to Kubernetes service accounts and namespaces. Core architectural rationale: The Vault Kubernetes auth method validates ephemeral pod identity by verifying the pod's service account JWT against the Kubernetes TokenReview API. This remove...",
    tags: ["k8s", "auth", "jwt", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "hashicorp-vault-fc-54",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Vault Policy Capabilities in Autonomous Vehicle Telemetry",
    hint: "Focus on policy and hcl operational principles.",
    back: "<strong>Vault Policy Capabilities</strong>: Specify path 'secret/data/app/*' with capabilities ['read'] to allow reading credentials while denying creation or modification. Core architectural rationale: Vault policies follow an explicit deny-by-default model. Granular capabilities ('create', 'read', 'update', 'delete', 'list', 'sudo', 'deny') must be assigned s...",
    tags: ["policy", "hcl", "capabilities", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "hashicorp-vault-fc-55",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Templated Vault Policies in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on policy and identity operational principles.",
    back: "<strong>Templated Vault Policies</strong>: Define policy paths using template syntax like 'secret/data/teams/{{identity.entity.metadata.team}}/*' to restrict access by metadata. Core architectural rationale: Vault policy templating allows administrators to write concise, scalable policies using identity metadata, entity IDs, or mount accessors (e.g., 'identity.entit...",
    tags: ["policy", "identity", "templating", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "hashicorp-vault-fc-56",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Response Wrapping in Media Streaming & Global CDN",
    hint: "Focus on response-wrapping and cubbyhole operational principles.",
    back: "<strong>Response Wrapping</strong>: Generate wrapped tokens or SecretIDs using the '-wrap-ttl' parameter so the recipient retrieves the secret with 'vault unwrap'. Core architectural rationale: Vault response wrapping provides single-use, time-bound covering tokens ('cubbyhole') for sensitive payloads. If an attacker intercepts and unwraps the token fi...",
    tags: ["response-wrapping", "cubbyhole", "transport", "Media Streaming & Global CDN"]
  },
  {
    id: "hashicorp-vault-fc-57",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Periodic Tokens in Aerospace Satellite Ground Systems",
    hint: "Focus on tokens and periodic operational principles.",
    back: "<strong>Periodic Tokens</strong>: Issue a periodic token with a defined period, requiring the daemon to renew it within the period interval indefinitely without hitting a max TTL. Core architectural rationale: Periodic tokens have no maximum TTL as long as they are renewed within their specified period interval. This makes them ideal for persistent background services...",
    tags: ["tokens", "periodic", "ttl", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "hashicorp-vault-fc-58",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Orphan Tokens in Telecommunications 5G Core Network",
    hint: "Focus on tokens and orphan operational principles.",
    back: "<strong>Orphan Tokens</strong>: Create an orphan token using 'vault token create -orphan' so its lifetime is independent of the creator's token revocation. Core architectural rationale: By default, tokens are created as children of the caller's token; revoking a parent token cascades and revokes all children. Orphan tokens have no parent, so th...",
    tags: ["tokens", "orphan", "hierarchy", "Telecommunications 5G Core Network"]
  },
  {
    id: "hashicorp-vault-fc-59",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: AppRole Authentication in Renewable Energy Smart Grid IoT",
    hint: "Focus on approle and auth operational principles.",
    back: "<strong>AppRole Authentication</strong>: Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs. Core architectural rationale: AppRole is specifically designed for automated workflows where machines require credentials. It separates machine identity (RoleID) from authorization proof (Se...",
    tags: ["approle", "auth", "security", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "hashicorp-vault-fc-60",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Kubernetes Service Account Auth in Supply Chain Cold-Chain Logistics",
    hint: "Focus on k8s and auth operational principles.",
    back: "<strong>Kubernetes Service Account Auth</strong>: Enable the Kubernetes auth method, configure Vault with the cluster token reviewer JWT, and bind Vault roles to Kubernetes service accounts and namespaces. Core architectural rationale: The Vault Kubernetes auth method validates ephemeral pod identity by verifying the pod's service account JWT against the Kubernetes TokenReview API. This remove...",
    tags: ["k8s", "auth", "jwt", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "hashicorp-vault-fc-61",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Vault Policy Capabilities in Banking Core Ledger & Payments",
    hint: "Focus on policy and hcl operational principles.",
    back: "<strong>Vault Policy Capabilities</strong>: Specify path 'secret/data/app/*' with capabilities ['read'] to allow reading credentials while denying creation or modification. Core architectural rationale: Vault policies follow an explicit deny-by-default model. Granular capabilities ('create', 'read', 'update', 'delete', 'list', 'sudo', 'deny') must be assigned s...",
    tags: ["policy", "hcl", "capabilities", "Banking Core Ledger & Payments"]
  },
  {
    id: "hashicorp-vault-fc-62",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Templated Vault Policies in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on policy and identity operational principles.",
    back: "<strong>Templated Vault Policies</strong>: Define policy paths using template syntax like 'secret/data/teams/{{identity.entity.metadata.team}}/*' to restrict access by metadata. Core architectural rationale: Vault policy templating allows administrators to write concise, scalable policies using identity metadata, entity IDs, or mount accessors (e.g., 'identity.entit...",
    tags: ["policy", "identity", "templating", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "hashicorp-vault-fc-63",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Response Wrapping in Defense-Grade Zero-Trust Network",
    hint: "Focus on response-wrapping and cubbyhole operational principles.",
    back: "<strong>Response Wrapping</strong>: Generate wrapped tokens or SecretIDs using the '-wrap-ttl' parameter so the recipient retrieves the secret with 'vault unwrap'. Core architectural rationale: Vault response wrapping provides single-use, time-bound covering tokens ('cubbyhole') for sensitive payloads. If an attacker intercepts and unwraps the token fi...",
    tags: ["response-wrapping", "cubbyhole", "transport", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "hashicorp-vault-fc-64",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Periodic Tokens in Online Multiplayer Gaming Engine",
    hint: "Focus on tokens and periodic operational principles.",
    back: "<strong>Periodic Tokens</strong>: Issue a periodic token with a defined period, requiring the daemon to renew it within the period interval indefinitely without hitting a max TTL. Core architectural rationale: Periodic tokens have no maximum TTL as long as they are renewed within their specified period interval. This makes them ideal for persistent background services...",
    tags: ["tokens", "periodic", "ttl", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "hashicorp-vault-fc-65",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Orphan Tokens in Insurance Risk & Actuarial Modeling",
    hint: "Focus on tokens and orphan operational principles.",
    back: "<strong>Orphan Tokens</strong>: Create an orphan token using 'vault token create -orphan' so its lifetime is independent of the creator's token revocation. Core architectural rationale: By default, tokens are created as children of the caller's token; revoking a parent token cascades and revokes all children. Orphan tokens have no parent, so th...",
    tags: ["tokens", "orphan", "hierarchy", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "hashicorp-vault-fc-66",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: AppRole Authentication in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on approle and auth operational principles.",
    back: "<strong>AppRole Authentication</strong>: Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs. Core architectural rationale: AppRole is specifically designed for automated workflows where machines require credentials. It separates machine identity (RoleID) from authorization proof (Se...",
    tags: ["approle", "auth", "security", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "hashicorp-vault-fc-67",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Kubernetes Service Account Auth in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on k8s and auth operational principles.",
    back: "<strong>Kubernetes Service Account Auth</strong>: Enable the Kubernetes auth method, configure Vault with the cluster token reviewer JWT, and bind Vault roles to Kubernetes service accounts and namespaces. Core architectural rationale: The Vault Kubernetes auth method validates ephemeral pod identity by verifying the pod's service account JWT against the Kubernetes TokenReview API. This remove...",
    tags: ["k8s", "auth", "jwt", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "hashicorp-vault-fc-68",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Vault Policy Capabilities in Digital Identity & Biometric Verification",
    hint: "Focus on policy and hcl operational principles.",
    back: "<strong>Vault Policy Capabilities</strong>: Specify path 'secret/data/app/*' with capabilities ['read'] to allow reading credentials while denying creation or modification. Core architectural rationale: Vault policies follow an explicit deny-by-default model. Granular capabilities ('create', 'read', 'update', 'delete', 'list', 'sudo', 'deny') must be assigned s...",
    tags: ["policy", "hcl", "capabilities", "Digital Identity & Biometric Verification"]
  },
  {
    id: "hashicorp-vault-fc-69",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Templated Vault Policies in Legal Discovery & Semantic Document Search",
    hint: "Focus on policy and identity operational principles.",
    back: "<strong>Templated Vault Policies</strong>: Define policy paths using template syntax like 'secret/data/teams/{{identity.entity.metadata.team}}/*' to restrict access by metadata. Core architectural rationale: Vault policy templating allows administrators to write concise, scalable policies using identity metadata, entity IDs, or mount accessors (e.g., 'identity.entit...",
    tags: ["policy", "identity", "templating", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "hashicorp-vault-fc-70",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Response Wrapping in AdTech Real-Time Bidding Exchange",
    hint: "Focus on response-wrapping and cubbyhole operational principles.",
    back: "<strong>Response Wrapping</strong>: Generate wrapped tokens or SecretIDs using the '-wrap-ttl' parameter so the recipient retrieves the secret with 'vault unwrap'. Core architectural rationale: Vault response wrapping provides single-use, time-bound covering tokens ('cubbyhole') for sensitive payloads. If an attacker intercepts and unwraps the token fi...",
    tags: ["response-wrapping", "cubbyhole", "transport", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "hashicorp-vault-fc-71",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Periodic Tokens in Precision Agriculture & Drone Scouting",
    hint: "Focus on tokens and periodic operational principles.",
    back: "<strong>Periodic Tokens</strong>: Issue a periodic token with a defined period, requiring the daemon to renew it within the period interval indefinitely without hitting a max TTL. Core architectural rationale: Periodic tokens have no maximum TTL as long as they are renewed within their specified period interval. This makes them ideal for persistent background services...",
    tags: ["tokens", "periodic", "ttl", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "hashicorp-vault-fc-72",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Orphan Tokens in Industrial Robotics Predictive Maintenance",
    hint: "Focus on tokens and orphan operational principles.",
    back: "<strong>Orphan Tokens</strong>: Create an orphan token using 'vault token create -orphan' so its lifetime is independent of the creator's token revocation. Core architectural rationale: By default, tokens are created as children of the caller's token; revoking a parent token cascades and revokes all children. Orphan tokens have no parent, so th...",
    tags: ["tokens", "orphan", "hierarchy", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "hashicorp-vault-fc-73",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: AppRole Authentication in Educational Remote Proctoring Platform",
    hint: "Focus on approle and auth operational principles.",
    back: "<strong>AppRole Authentication</strong>: Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs. Core architectural rationale: AppRole is specifically designed for automated workflows where machines require credentials. It separates machine identity (RoleID) from authorization proof (Se...",
    tags: ["approle", "auth", "security", "Educational Remote Proctoring Platform"]
  },
  {
    id: "hashicorp-vault-fc-74",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Kubernetes Service Account Auth in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on k8s and auth operational principles.",
    back: "<strong>Kubernetes Service Account Auth</strong>: Enable the Kubernetes auth method, configure Vault with the cluster token reviewer JWT, and bind Vault roles to Kubernetes service accounts and namespaces. Core architectural rationale: The Vault Kubernetes auth method validates ephemeral pod identity by verifying the pod's service account JWT against the Kubernetes TokenReview API. This remove...",
    tags: ["k8s", "auth", "jwt", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "hashicorp-vault-fc-75",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Vault Policy Capabilities in Disaster Emergency Dispatch & Operations",
    hint: "Focus on policy and hcl operational principles.",
    back: "<strong>Vault Policy Capabilities</strong>: Specify path 'secret/data/app/*' with capabilities ['read'] to allow reading credentials while denying creation or modification. Core architectural rationale: Vault policies follow an explicit deny-by-default model. Granular capabilities ('create', 'read', 'update', 'delete', 'list', 'sudo', 'deny') must be assigned s...",
    tags: ["policy", "hcl", "capabilities", "Disaster Emergency Dispatch & Operations"]
  }
];

export default HASHICORP_VAULT_FLASHCARDS_3;
