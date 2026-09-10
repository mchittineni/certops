export const HASHICORP_VAULT_FLASHCARDS_1 = [
  {
    id: "hashicorp-vault-fc-1",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: AppRole Authentication in High-Frequency FinTech Trading",
    hint: "Focus on approle and auth operational principles.",
    back: "<strong>AppRole Authentication</strong>: Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs. Core architectural rationale: AppRole is the general-purpose machine auth method for platforms that have no external identity to borrow. It splits machine identity (role_id) from proof of au...",
    tags: ["approle", "auth", "security", "High-Frequency FinTech Trading"]
  },
  {
    id: "hashicorp-vault-fc-2",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Kubernetes Service Account Auth in Healthcare Patient Records & HIPAA",
    hint: "Focus on k8s and auth operational principles.",
    back: "<strong>Kubernetes Service Account Auth</strong>: Enable the Kubernetes auth method, configure Vault with the cluster token reviewer JWT, and bind Vault roles to Kubernetes service accounts and namespaces. Core architectural rationale: The Kubernetes auth method calls the cluster TokenReview API on every login, so a service account token stops working the instant the account or pod is removed....",
    tags: ["k8s", "auth", "jwt", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "hashicorp-vault-fc-3",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Vault Policy Capabilities in Global E-Commerce Black Friday Scale",
    hint: "Focus on policy and hcl operational principles.",
    back: "<strong>Vault Policy Capabilities</strong>: Specify path 'secret/data/app/*' with capabilities ['read'] to allow reading credentials while denying creation or modification. Core architectural rationale: Vault denies by default, so a policy granting only 'read' on the path already prevents writes. On a KV version 2 mount the API path is prefixed with 'data/', so...",
    tags: ["policy", "hcl", "capabilities", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "hashicorp-vault-fc-4",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Templated Vault Policies in Autonomous Vehicle Telemetry",
    hint: "Focus on policy and identity operational principles.",
    back: "<strong>Templated Vault Policies</strong>: Define policy paths using template syntax like 'secret/data/teams/{{identity.entity.metadata.team}}/*' to restrict access by metadata. Core architectural rationale: Policy templating resolves identity metadata at request time, so one rule serves every team and new teams need no policy change at all. Writing a policy or a mo...",
    tags: ["policy", "identity", "templating", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "hashicorp-vault-fc-5",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Response Wrapping in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on response-wrapping and cubbyhole operational principles.",
    back: "<strong>Response Wrapping</strong>: Generate wrapped tokens or SecretIDs using the '-wrap-ttl' parameter so the recipient retrieves the secret with 'vault unwrap'. Core architectural rationale: A wrapping token can be unwrapped exactly once. If anyone intercepts and unwraps it first, the intended recipient's unwrap fails immediately, which turns a sile...",
    tags: ["response-wrapping", "cubbyhole", "transport", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "hashicorp-vault-fc-6",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Periodic Tokens in Media Streaming & Global CDN",
    hint: "Focus on tokens and periodic operational principles.",
    back: "<strong>Periodic Tokens</strong>: Issue a periodic token with a defined period, requiring the daemon to renew it within the period interval indefinitely without hitting a max TTL. Core architectural rationale: A periodic token has no maximum TTL: as long as it is renewed within its period it lives forever, which is precisely what an always-on daemon needs. Every other...",
    tags: ["tokens", "periodic", "ttl", "Media Streaming & Global CDN"]
  },
  {
    id: "hashicorp-vault-fc-7",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Orphan Tokens in Aerospace Satellite Ground Systems",
    hint: "Focus on tokens and orphan operational principles.",
    back: "<strong>Orphan Tokens</strong>: Create an orphan token using 'vault token create -orphan' so its lifetime is independent of the creator's token revocation. Core architectural rationale: Tokens are created as children of the calling token by default, and revoking a parent revokes the entire subtree immediately. That cascade ignores the child's T...",
    tags: ["tokens", "orphan", "hierarchy", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "hashicorp-vault-fc-8",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: AppRole Authentication in Telecommunications 5G Core Network",
    hint: "Focus on approle and auth operational principles.",
    back: "<strong>AppRole Authentication</strong>: Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs. Core architectural rationale: AppRole is the general-purpose machine auth method for platforms that have no external identity to borrow. It splits machine identity (role_id) from proof of au...",
    tags: ["approle", "auth", "security", "Telecommunications 5G Core Network"]
  },
  {
    id: "hashicorp-vault-fc-9",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Kubernetes Service Account Auth in Renewable Energy Smart Grid IoT",
    hint: "Focus on k8s and auth operational principles.",
    back: "<strong>Kubernetes Service Account Auth</strong>: Enable the Kubernetes auth method, configure Vault with the cluster token reviewer JWT, and bind Vault roles to Kubernetes service accounts and namespaces. Core architectural rationale: The Kubernetes auth method calls the cluster TokenReview API on every login, so a service account token stops working the instant the account or pod is removed....",
    tags: ["k8s", "auth", "jwt", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "hashicorp-vault-fc-10",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Vault Policy Capabilities in Supply Chain Cold-Chain Logistics",
    hint: "Focus on policy and hcl operational principles.",
    back: "<strong>Vault Policy Capabilities</strong>: Specify path 'secret/data/app/*' with capabilities ['read'] to allow reading credentials while denying creation or modification. Core architectural rationale: Vault denies by default, so a policy granting only 'read' on the path already prevents writes. On a KV version 2 mount the API path is prefixed with 'data/', so...",
    tags: ["policy", "hcl", "capabilities", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "hashicorp-vault-fc-11",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Templated Vault Policies in Banking Core Ledger & Payments",
    hint: "Focus on policy and identity operational principles.",
    back: "<strong>Templated Vault Policies</strong>: Define policy paths using template syntax like 'secret/data/teams/{{identity.entity.metadata.team}}/*' to restrict access by metadata. Core architectural rationale: Policy templating resolves identity metadata at request time, so one rule serves every team and new teams need no policy change at all. Writing a policy or a mo...",
    tags: ["policy", "identity", "templating", "Banking Core Ledger & Payments"]
  },
  {
    id: "hashicorp-vault-fc-12",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Response Wrapping in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on response-wrapping and cubbyhole operational principles.",
    back: "<strong>Response Wrapping</strong>: Generate wrapped tokens or SecretIDs using the '-wrap-ttl' parameter so the recipient retrieves the secret with 'vault unwrap'. Core architectural rationale: A wrapping token can be unwrapped exactly once. If anyone intercepts and unwraps it first, the intended recipient's unwrap fails immediately, which turns a sile...",
    tags: ["response-wrapping", "cubbyhole", "transport", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "hashicorp-vault-fc-13",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Periodic Tokens in Defense-Grade Zero-Trust Network",
    hint: "Focus on tokens and periodic operational principles.",
    back: "<strong>Periodic Tokens</strong>: Issue a periodic token with a defined period, requiring the daemon to renew it within the period interval indefinitely without hitting a max TTL. Core architectural rationale: A periodic token has no maximum TTL: as long as it is renewed within its period it lives forever, which is precisely what an always-on daemon needs. Every other...",
    tags: ["tokens", "periodic", "ttl", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "hashicorp-vault-fc-14",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Orphan Tokens in Online Multiplayer Gaming Engine",
    hint: "Focus on tokens and orphan operational principles.",
    back: "<strong>Orphan Tokens</strong>: Create an orphan token using 'vault token create -orphan' so its lifetime is independent of the creator's token revocation. Core architectural rationale: Tokens are created as children of the calling token by default, and revoking a parent revokes the entire subtree immediately. That cascade ignores the child's T...",
    tags: ["tokens", "orphan", "hierarchy", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "hashicorp-vault-fc-15",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: AppRole Authentication in Insurance Risk & Actuarial Modeling",
    hint: "Focus on approle and auth operational principles.",
    back: "<strong>AppRole Authentication</strong>: Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs. Core architectural rationale: AppRole is the general-purpose machine auth method for platforms that have no external identity to borrow. It splits machine identity (role_id) from proof of au...",
    tags: ["approle", "auth", "security", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "hashicorp-vault-fc-16",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Kubernetes Service Account Auth in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on k8s and auth operational principles.",
    back: "<strong>Kubernetes Service Account Auth</strong>: Enable the Kubernetes auth method, configure Vault with the cluster token reviewer JWT, and bind Vault roles to Kubernetes service accounts and namespaces. Core architectural rationale: The Kubernetes auth method calls the cluster TokenReview API on every login, so a service account token stops working the instant the account or pod is removed....",
    tags: ["k8s", "auth", "jwt", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "hashicorp-vault-fc-17",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Vault Policy Capabilities in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on policy and hcl operational principles.",
    back: "<strong>Vault Policy Capabilities</strong>: Specify path 'secret/data/app/*' with capabilities ['read'] to allow reading credentials while denying creation or modification. Core architectural rationale: Vault denies by default, so a policy granting only 'read' on the path already prevents writes. On a KV version 2 mount the API path is prefixed with 'data/', so...",
    tags: ["policy", "hcl", "capabilities", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "hashicorp-vault-fc-18",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Templated Vault Policies in Digital Identity & Biometric Verification",
    hint: "Focus on policy and identity operational principles.",
    back: "<strong>Templated Vault Policies</strong>: Define policy paths using template syntax like 'secret/data/teams/{{identity.entity.metadata.team}}/*' to restrict access by metadata. Core architectural rationale: Policy templating resolves identity metadata at request time, so one rule serves every team and new teams need no policy change at all. Writing a policy or a mo...",
    tags: ["policy", "identity", "templating", "Digital Identity & Biometric Verification"]
  },
  {
    id: "hashicorp-vault-fc-19",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Response Wrapping in Legal Discovery & Semantic Document Search",
    hint: "Focus on response-wrapping and cubbyhole operational principles.",
    back: "<strong>Response Wrapping</strong>: Generate wrapped tokens or SecretIDs using the '-wrap-ttl' parameter so the recipient retrieves the secret with 'vault unwrap'. Core architectural rationale: A wrapping token can be unwrapped exactly once. If anyone intercepts and unwraps it first, the intended recipient's unwrap fails immediately, which turns a sile...",
    tags: ["response-wrapping", "cubbyhole", "transport", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "hashicorp-vault-fc-20",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Periodic Tokens in AdTech Real-Time Bidding Exchange",
    hint: "Focus on tokens and periodic operational principles.",
    back: "<strong>Periodic Tokens</strong>: Issue a periodic token with a defined period, requiring the daemon to renew it within the period interval indefinitely without hitting a max TTL. Core architectural rationale: A periodic token has no maximum TTL: as long as it is renewed within its period it lives forever, which is precisely what an always-on daemon needs. Every other...",
    tags: ["tokens", "periodic", "ttl", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "hashicorp-vault-fc-21",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Orphan Tokens in Precision Agriculture & Drone Scouting",
    hint: "Focus on tokens and orphan operational principles.",
    back: "<strong>Orphan Tokens</strong>: Create an orphan token using 'vault token create -orphan' so its lifetime is independent of the creator's token revocation. Core architectural rationale: Tokens are created as children of the calling token by default, and revoking a parent revokes the entire subtree immediately. That cascade ignores the child's T...",
    tags: ["tokens", "orphan", "hierarchy", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "hashicorp-vault-fc-22",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: AppRole Authentication in Industrial Robotics Predictive Maintenance",
    hint: "Focus on approle and auth operational principles.",
    back: "<strong>AppRole Authentication</strong>: Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs. Core architectural rationale: AppRole is the general-purpose machine auth method for platforms that have no external identity to borrow. It splits machine identity (role_id) from proof of au...",
    tags: ["approle", "auth", "security", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "hashicorp-vault-fc-23",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Kubernetes Service Account Auth in Educational Remote Proctoring Platform",
    hint: "Focus on k8s and auth operational principles.",
    back: "<strong>Kubernetes Service Account Auth</strong>: Enable the Kubernetes auth method, configure Vault with the cluster token reviewer JWT, and bind Vault roles to Kubernetes service accounts and namespaces. Core architectural rationale: The Kubernetes auth method calls the cluster TokenReview API on every login, so a service account token stops working the instant the account or pod is removed....",
    tags: ["k8s", "auth", "jwt", "Educational Remote Proctoring Platform"]
  },
  {
    id: "hashicorp-vault-fc-24",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Vault Policy Capabilities in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on policy and hcl operational principles.",
    back: "<strong>Vault Policy Capabilities</strong>: Specify path 'secret/data/app/*' with capabilities ['read'] to allow reading credentials while denying creation or modification. Core architectural rationale: Vault denies by default, so a policy granting only 'read' on the path already prevents writes. On a KV version 2 mount the API path is prefixed with 'data/', so...",
    tags: ["policy", "hcl", "capabilities", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "hashicorp-vault-fc-25",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    front: "Vault: Templated Vault Policies in Disaster Emergency Dispatch & Operations",
    hint: "Focus on policy and identity operational principles.",
    back: "<strong>Templated Vault Policies</strong>: Define policy paths using template syntax like 'secret/data/teams/{{identity.entity.metadata.team}}/*' to restrict access by metadata. Core architectural rationale: Policy templating resolves identity metadata at request time, so one rule serves every team and new teams need no policy change at all. Writing a policy or a mo...",
    tags: ["policy", "identity", "templating", "Disaster Emergency Dispatch & Operations"]
  }
];

export default HASHICORP_VAULT_FLASHCARDS_1;
