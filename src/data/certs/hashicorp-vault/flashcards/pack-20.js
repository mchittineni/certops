export const HASHICORP_VAULT_FLASHCARDS_20 = [
  {
    id: "hashicorp-vault-fc-476",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Auto-Unseal with Cloud KMS in High-Frequency FinTech Trading",
    hint: "Focus on auto-unseal and kms operational principles.",
    back: "<strong>Auto-Unseal with Cloud KMS</strong>: Configure the 'seal' stanza with AWS KMS, Azure Key Vault, or GCP KMS to automatically unseal Vault upon service initialization and reboot. Core architectural rationale: Auto-unseal delegates the unsealing process to a trusted cloud Key Management Service (AWS KMS, Azure Key Vault, Google Cloud KMS, or PKCS#11 HSM). When Vault r...",
    tags: ["auto-unseal", "kms", "shamir", "High-Frequency FinTech Trading"]
  },
  {
    id: "hashicorp-vault-fc-477",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Disaster Recovery vs Performance Replication in Healthcare Patient Records & HIPAA",
    hint: "Focus on replication and dr operational principles.",
    back: "<strong>Disaster Recovery vs Performance Replication</strong>: Use Disaster Recovery (DR) replication to maintain a synchronous hot-standby secondary cluster, or Performance Replication for localized secret reads. Core architectural rationale: Vault Enterprise provides two distinct replication types: Performance Replication scales read traffic across regions while sharing the same active state, wherea...",
    tags: ["replication", "dr", "performance-replication", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "hashicorp-vault-fc-478",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Lease Expiration and Revocation in Global E-Commerce Black Friday Scale",
    hint: "Focus on leases and revocation operational principles.",
    back: "<strong>Lease Expiration and Revocation</strong>: Monitor lease TTLs, allow clients to renew active leases, and invoke 'sys/leases/revoke-prefix' to revoke compromised credential trees immediately. Core architectural rationale: Every dynamic secret and service token is accompanied by a lease with an explicit duration (TTL). Vault provides granular lease revocation APIs; invoking 'revok...",
    tags: ["leases", "revocation", "lifecycle", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "hashicorp-vault-fc-479",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Audit Devices and Failure Behavior in Autonomous Vehicle Telemetry",
    hint: "Focus on audit and logging operational principles.",
    back: "<strong>Audit Devices and Failure Behavior</strong>: Enable multiple audit devices (e.g., file and syslog) and configure monitoring to ensure Vault never halts due to blocked logging destinations. Core architectural rationale: Vault audit devices log every authenticated request and response. Vault enforces a strict security policy: if an audit device is configured but cannot write (e....",
    tags: ["audit", "logging", "compliance", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "hashicorp-vault-fc-480",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Batch Tokens vs Service Tokens in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on batch-tokens and service-tokens operational principles.",
    back: "<strong>Batch Tokens vs Service Tokens</strong>: Use Batch tokens for high-volume, short-lived workloads to eliminate write operations to the storage backend. Core architectural rationale: Batch tokens are lightweight, encrypted binary blobs that carry their own authorization state without being written to Vault's storage backend or index. This al...",
    tags: ["batch-tokens", "service-tokens", "throughput", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "hashicorp-vault-fc-481",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Vault Agent and Secret Injection in Media Streaming & Global CDN",
    hint: "Focus on vault-agent and sidecar operational principles.",
    back: "<strong>Vault Agent and Secret Injection</strong>: Deploy Vault Agent as a sidecar or daemon to handle authentication, token renewal, and automated secret templating to local disk. Core architectural rationale: Vault Agent automates the client-side lifecycle of Vault authentication, token renewal, and secret retrieval. Using Vault Agent Templates, it renders applicatio...",
    tags: ["vault-agent", "sidecar", "templating", "Media Streaming & Global CDN"]
  },
  {
    id: "hashicorp-vault-fc-482",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Vault High Availability Architecture in Aerospace Satellite Ground Systems",
    hint: "Focus on raft and ha operational principles.",
    back: "<strong>Vault High Availability Architecture</strong>: Deploy a multi-node Vault cluster using integrated Raft storage, where one node is elected active and standby nodes forward requests. Core architectural rationale: Production Vault architectures utilize an Active/Standby clustering model backed by integrated Raft consensus (or Consul). Only the elected active leader proces...",
    tags: ["raft", "ha", "clustering", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "hashicorp-vault-fc-483",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Auto-Unseal with Cloud KMS in Telecommunications 5G Core Network",
    hint: "Focus on auto-unseal and kms operational principles.",
    back: "<strong>Auto-Unseal with Cloud KMS</strong>: Configure the 'seal' stanza with AWS KMS, Azure Key Vault, or GCP KMS to automatically unseal Vault upon service initialization and reboot. Core architectural rationale: Auto-unseal delegates the unsealing process to a trusted cloud Key Management Service (AWS KMS, Azure Key Vault, Google Cloud KMS, or PKCS#11 HSM). When Vault r...",
    tags: ["auto-unseal", "kms", "shamir", "Telecommunications 5G Core Network"]
  },
  {
    id: "hashicorp-vault-fc-484",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Disaster Recovery vs Performance Replication in Renewable Energy Smart Grid IoT",
    hint: "Focus on replication and dr operational principles.",
    back: "<strong>Disaster Recovery vs Performance Replication</strong>: Use Disaster Recovery (DR) replication to maintain a synchronous hot-standby secondary cluster, or Performance Replication for localized secret reads. Core architectural rationale: Vault Enterprise provides two distinct replication types: Performance Replication scales read traffic across regions while sharing the same active state, wherea...",
    tags: ["replication", "dr", "performance-replication", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "hashicorp-vault-fc-485",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Lease Expiration and Revocation in Supply Chain Cold-Chain Logistics",
    hint: "Focus on leases and revocation operational principles.",
    back: "<strong>Lease Expiration and Revocation</strong>: Monitor lease TTLs, allow clients to renew active leases, and invoke 'sys/leases/revoke-prefix' to revoke compromised credential trees immediately. Core architectural rationale: Every dynamic secret and service token is accompanied by a lease with an explicit duration (TTL). Vault provides granular lease revocation APIs; invoking 'revok...",
    tags: ["leases", "revocation", "lifecycle", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "hashicorp-vault-fc-486",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Audit Devices and Failure Behavior in Banking Core Ledger & Payments",
    hint: "Focus on audit and logging operational principles.",
    back: "<strong>Audit Devices and Failure Behavior</strong>: Enable multiple audit devices (e.g., file and syslog) and configure monitoring to ensure Vault never halts due to blocked logging destinations. Core architectural rationale: Vault audit devices log every authenticated request and response. Vault enforces a strict security policy: if an audit device is configured but cannot write (e....",
    tags: ["audit", "logging", "compliance", "Banking Core Ledger & Payments"]
  },
  {
    id: "hashicorp-vault-fc-487",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Batch Tokens vs Service Tokens in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on batch-tokens and service-tokens operational principles.",
    back: "<strong>Batch Tokens vs Service Tokens</strong>: Use Batch tokens for high-volume, short-lived workloads to eliminate write operations to the storage backend. Core architectural rationale: Batch tokens are lightweight, encrypted binary blobs that carry their own authorization state without being written to Vault's storage backend or index. This al...",
    tags: ["batch-tokens", "service-tokens", "throughput", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "hashicorp-vault-fc-488",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Vault Agent and Secret Injection in Defense-Grade Zero-Trust Network",
    hint: "Focus on vault-agent and sidecar operational principles.",
    back: "<strong>Vault Agent and Secret Injection</strong>: Deploy Vault Agent as a sidecar or daemon to handle authentication, token renewal, and automated secret templating to local disk. Core architectural rationale: Vault Agent automates the client-side lifecycle of Vault authentication, token renewal, and secret retrieval. Using Vault Agent Templates, it renders applicatio...",
    tags: ["vault-agent", "sidecar", "templating", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "hashicorp-vault-fc-489",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Vault High Availability Architecture in Online Multiplayer Gaming Engine",
    hint: "Focus on raft and ha operational principles.",
    back: "<strong>Vault High Availability Architecture</strong>: Deploy a multi-node Vault cluster using integrated Raft storage, where one node is elected active and standby nodes forward requests. Core architectural rationale: Production Vault architectures utilize an Active/Standby clustering model backed by integrated Raft consensus (or Consul). Only the elected active leader proces...",
    tags: ["raft", "ha", "clustering", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "hashicorp-vault-fc-490",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Auto-Unseal with Cloud KMS in Insurance Risk & Actuarial Modeling",
    hint: "Focus on auto-unseal and kms operational principles.",
    back: "<strong>Auto-Unseal with Cloud KMS</strong>: Configure the 'seal' stanza with AWS KMS, Azure Key Vault, or GCP KMS to automatically unseal Vault upon service initialization and reboot. Core architectural rationale: Auto-unseal delegates the unsealing process to a trusted cloud Key Management Service (AWS KMS, Azure Key Vault, Google Cloud KMS, or PKCS#11 HSM). When Vault r...",
    tags: ["auto-unseal", "kms", "shamir", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "hashicorp-vault-fc-491",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Disaster Recovery vs Performance Replication in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on replication and dr operational principles.",
    back: "<strong>Disaster Recovery vs Performance Replication</strong>: Use Disaster Recovery (DR) replication to maintain a synchronous hot-standby secondary cluster, or Performance Replication for localized secret reads. Core architectural rationale: Vault Enterprise provides two distinct replication types: Performance Replication scales read traffic across regions while sharing the same active state, wherea...",
    tags: ["replication", "dr", "performance-replication", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "hashicorp-vault-fc-492",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Lease Expiration and Revocation in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on leases and revocation operational principles.",
    back: "<strong>Lease Expiration and Revocation</strong>: Monitor lease TTLs, allow clients to renew active leases, and invoke 'sys/leases/revoke-prefix' to revoke compromised credential trees immediately. Core architectural rationale: Every dynamic secret and service token is accompanied by a lease with an explicit duration (TTL). Vault provides granular lease revocation APIs; invoking 'revok...",
    tags: ["leases", "revocation", "lifecycle", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "hashicorp-vault-fc-493",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Audit Devices and Failure Behavior in Digital Identity & Biometric Verification",
    hint: "Focus on audit and logging operational principles.",
    back: "<strong>Audit Devices and Failure Behavior</strong>: Enable multiple audit devices (e.g., file and syslog) and configure monitoring to ensure Vault never halts due to blocked logging destinations. Core architectural rationale: Vault audit devices log every authenticated request and response. Vault enforces a strict security policy: if an audit device is configured but cannot write (e....",
    tags: ["audit", "logging", "compliance", "Digital Identity & Biometric Verification"]
  },
  {
    id: "hashicorp-vault-fc-494",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Batch Tokens vs Service Tokens in Legal Discovery & Semantic Document Search",
    hint: "Focus on batch-tokens and service-tokens operational principles.",
    back: "<strong>Batch Tokens vs Service Tokens</strong>: Use Batch tokens for high-volume, short-lived workloads to eliminate write operations to the storage backend. Core architectural rationale: Batch tokens are lightweight, encrypted binary blobs that carry their own authorization state without being written to Vault's storage backend or index. This al...",
    tags: ["batch-tokens", "service-tokens", "throughput", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "hashicorp-vault-fc-495",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Vault Agent and Secret Injection in AdTech Real-Time Bidding Exchange",
    hint: "Focus on vault-agent and sidecar operational principles.",
    back: "<strong>Vault Agent and Secret Injection</strong>: Deploy Vault Agent as a sidecar or daemon to handle authentication, token renewal, and automated secret templating to local disk. Core architectural rationale: Vault Agent automates the client-side lifecycle of Vault authentication, token renewal, and secret retrieval. Using Vault Agent Templates, it renders applicatio...",
    tags: ["vault-agent", "sidecar", "templating", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "hashicorp-vault-fc-496",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Vault High Availability Architecture in Precision Agriculture & Drone Scouting",
    hint: "Focus on raft and ha operational principles.",
    back: "<strong>Vault High Availability Architecture</strong>: Deploy a multi-node Vault cluster using integrated Raft storage, where one node is elected active and standby nodes forward requests. Core architectural rationale: Production Vault architectures utilize an Active/Standby clustering model backed by integrated Raft consensus (or Consul). Only the elected active leader proces...",
    tags: ["raft", "ha", "clustering", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "hashicorp-vault-fc-497",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Auto-Unseal with Cloud KMS in Industrial Robotics Predictive Maintenance",
    hint: "Focus on auto-unseal and kms operational principles.",
    back: "<strong>Auto-Unseal with Cloud KMS</strong>: Configure the 'seal' stanza with AWS KMS, Azure Key Vault, or GCP KMS to automatically unseal Vault upon service initialization and reboot. Core architectural rationale: Auto-unseal delegates the unsealing process to a trusted cloud Key Management Service (AWS KMS, Azure Key Vault, Google Cloud KMS, or PKCS#11 HSM). When Vault r...",
    tags: ["auto-unseal", "kms", "shamir", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "hashicorp-vault-fc-498",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Disaster Recovery vs Performance Replication in Educational Remote Proctoring Platform",
    hint: "Focus on replication and dr operational principles.",
    back: "<strong>Disaster Recovery vs Performance Replication</strong>: Use Disaster Recovery (DR) replication to maintain a synchronous hot-standby secondary cluster, or Performance Replication for localized secret reads. Core architectural rationale: Vault Enterprise provides two distinct replication types: Performance Replication scales read traffic across regions while sharing the same active state, wherea...",
    tags: ["replication", "dr", "performance-replication", "Educational Remote Proctoring Platform"]
  },
  {
    id: "hashicorp-vault-fc-499",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Lease Expiration and Revocation in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on leases and revocation operational principles.",
    back: "<strong>Lease Expiration and Revocation</strong>: Monitor lease TTLs, allow clients to renew active leases, and invoke 'sys/leases/revoke-prefix' to revoke compromised credential trees immediately. Core architectural rationale: Every dynamic secret and service token is accompanied by a lease with an explicit duration (TTL). Vault provides granular lease revocation APIs; invoking 'revok...",
    tags: ["leases", "revocation", "lifecycle", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "hashicorp-vault-fc-500",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Audit Devices and Failure Behavior in Disaster Emergency Dispatch & Operations",
    hint: "Focus on audit and logging operational principles.",
    back: "<strong>Audit Devices and Failure Behavior</strong>: Enable multiple audit devices (e.g., file and syslog) and configure monitoring to ensure Vault never halts due to blocked logging destinations. Core architectural rationale: Vault audit devices log every authenticated request and response. Vault enforces a strict security policy: if an audit device is configured but cannot write (e....",
    tags: ["audit", "logging", "compliance", "Disaster Emergency Dispatch & Operations"]
  }
];

export default HASHICORP_VAULT_FLASHCARDS_20;
