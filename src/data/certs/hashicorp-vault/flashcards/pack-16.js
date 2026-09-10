export const HASHICORP_VAULT_FLASHCARDS_16 = [
  {
    id: "hashicorp-vault-fc-376",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Lease Expiration and Revocation in High-Frequency FinTech Trading",
    hint: "Focus on leases and revocation operational principles.",
    back: "<strong>Lease Expiration and Revocation</strong>: Monitor lease TTLs, allow clients to renew active leases, and invoke 'sys/leases/revoke-prefix' to revoke compromised credential trees immediately. Core architectural rationale: Revoking by prefix walks the lease tree and runs each revocation statement, so credentials already in an attacker's hands stop working within seconds. Deleting ...",
    tags: ["leases", "revocation", "lifecycle", "High-Frequency FinTech Trading"]
  },
  {
    id: "hashicorp-vault-fc-377",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Audit Devices and Failure Behavior in Healthcare Patient Records & HIPAA",
    hint: "Focus on audit and logging operational principles.",
    back: "<strong>Audit Devices and Failure Behavior</strong>: Enable multiple audit devices (e.g., file and syslog) and configure monitoring to ensure Vault never halts due to blocked logging destinations. Core architectural rationale: Vault refuses to serve a request it cannot log, so with one audit device that device becomes an availability dependency. Enabling a second device means Vault ke...",
    tags: ["audit", "logging", "compliance", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "hashicorp-vault-fc-378",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Batch Tokens vs Service Tokens in Global E-Commerce Black Friday Scale",
    hint: "Focus on batch-tokens and service-tokens operational principles.",
    back: "<strong>Batch Tokens vs Service Tokens</strong>: Use Batch tokens for high-volume, short-lived workloads to eliminate write operations to the storage backend. Core architectural rationale: A batch token is an encrypted blob handed to the client rather than a record in storage, so issuing one costs no write and the storage backend stops being the b...",
    tags: ["batch-tokens", "service-tokens", "throughput", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "hashicorp-vault-fc-379",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Vault Agent and Secret Injection in Autonomous Vehicle Telemetry",
    hint: "Focus on vault-agent and sidecar operational principles.",
    back: "<strong>Vault Agent and Secret Injection</strong>: Deploy Vault Agent as a sidecar or daemon to handle authentication, token renewal, and automated secret templating to local disk. Core architectural rationale: Vault Agent runs anywhere a process can run, which is what a fleet spanning Kubernetes and virtual machines needs, and its templating renders secrets into whate...",
    tags: ["vault-agent", "sidecar", "templating", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "hashicorp-vault-fc-380",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Vault High Availability Architecture in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on raft and ha operational principles.",
    back: "<strong>Vault High Availability Architecture</strong>: Deploy a multi-node Vault cluster using integrated Raft storage, where one node is elected active and standby nodes forward requests. Core architectural rationale: Integrated Raft gives Vault its own replicated storage and leader election, so a node can be lost without an external dependency to operate alongside it. A Cons...",
    tags: ["raft", "ha", "clustering", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "hashicorp-vault-fc-381",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Auto-Unseal with Cloud KMS in Media Streaming & Global CDN",
    hint: "Focus on auto-unseal and kms operational principles.",
    back: "<strong>Auto-Unseal with Cloud KMS</strong>: Configure the 'seal' stanza with AWS KMS, Azure Key Vault, or GCP KMS to automatically unseal Vault upon service initialization and reboot. Core architectural rationale: Delegating the seal to a cloud KMS or HSM lets Vault decrypt its own root key through an API call at startup with no human present. A transit seal is a genuine ...",
    tags: ["auto-unseal", "kms", "shamir", "Media Streaming & Global CDN"]
  },
  {
    id: "hashicorp-vault-fc-382",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Disaster Recovery vs Performance Replication in Aerospace Satellite Ground Systems",
    hint: "Focus on replication and dr operational principles.",
    back: "<strong>Disaster Recovery vs Performance Replication</strong>: Use Disaster Recovery (DR) replication to maintain a synchronous hot-standby secondary cluster, or Performance Replication for localized secret reads. Core architectural rationale: The two replication modes answer different questions: DR keeps a warm secondary carrying tokens and leases so it can be promoted, while performance replication ...",
    tags: ["replication", "dr", "performance-replication", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "hashicorp-vault-fc-383",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Lease Expiration and Revocation in Telecommunications 5G Core Network",
    hint: "Focus on leases and revocation operational principles.",
    back: "<strong>Lease Expiration and Revocation</strong>: Monitor lease TTLs, allow clients to renew active leases, and invoke 'sys/leases/revoke-prefix' to revoke compromised credential trees immediately. Core architectural rationale: Revoking by prefix walks the lease tree and runs each revocation statement, so credentials already in an attacker's hands stop working within seconds. Deleting ...",
    tags: ["leases", "revocation", "lifecycle", "Telecommunications 5G Core Network"]
  },
  {
    id: "hashicorp-vault-fc-384",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Audit Devices and Failure Behavior in Renewable Energy Smart Grid IoT",
    hint: "Focus on audit and logging operational principles.",
    back: "<strong>Audit Devices and Failure Behavior</strong>: Enable multiple audit devices (e.g., file and syslog) and configure monitoring to ensure Vault never halts due to blocked logging destinations. Core architectural rationale: Vault refuses to serve a request it cannot log, so with one audit device that device becomes an availability dependency. Enabling a second device means Vault ke...",
    tags: ["audit", "logging", "compliance", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "hashicorp-vault-fc-385",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Batch Tokens vs Service Tokens in Supply Chain Cold-Chain Logistics",
    hint: "Focus on batch-tokens and service-tokens operational principles.",
    back: "<strong>Batch Tokens vs Service Tokens</strong>: Use Batch tokens for high-volume, short-lived workloads to eliminate write operations to the storage backend. Core architectural rationale: A batch token is an encrypted blob handed to the client rather than a record in storage, so issuing one costs no write and the storage backend stops being the b...",
    tags: ["batch-tokens", "service-tokens", "throughput", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "hashicorp-vault-fc-386",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Vault Agent and Secret Injection in Banking Core Ledger & Payments",
    hint: "Focus on vault-agent and sidecar operational principles.",
    back: "<strong>Vault Agent and Secret Injection</strong>: Deploy Vault Agent as a sidecar or daemon to handle authentication, token renewal, and automated secret templating to local disk. Core architectural rationale: Vault Agent runs anywhere a process can run, which is what a fleet spanning Kubernetes and virtual machines needs, and its templating renders secrets into whate...",
    tags: ["vault-agent", "sidecar", "templating", "Banking Core Ledger & Payments"]
  },
  {
    id: "hashicorp-vault-fc-387",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Vault High Availability Architecture in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on raft and ha operational principles.",
    back: "<strong>Vault High Availability Architecture</strong>: Deploy a multi-node Vault cluster using integrated Raft storage, where one node is elected active and standby nodes forward requests. Core architectural rationale: Integrated Raft gives Vault its own replicated storage and leader election, so a node can be lost without an external dependency to operate alongside it. A Cons...",
    tags: ["raft", "ha", "clustering", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "hashicorp-vault-fc-388",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Auto-Unseal with Cloud KMS in Defense-Grade Zero-Trust Network",
    hint: "Focus on auto-unseal and kms operational principles.",
    back: "<strong>Auto-Unseal with Cloud KMS</strong>: Configure the 'seal' stanza with AWS KMS, Azure Key Vault, or GCP KMS to automatically unseal Vault upon service initialization and reboot. Core architectural rationale: Delegating the seal to a cloud KMS or HSM lets Vault decrypt its own root key through an API call at startup with no human present. A transit seal is a genuine ...",
    tags: ["auto-unseal", "kms", "shamir", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "hashicorp-vault-fc-389",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Disaster Recovery vs Performance Replication in Online Multiplayer Gaming Engine",
    hint: "Focus on replication and dr operational principles.",
    back: "<strong>Disaster Recovery vs Performance Replication</strong>: Use Disaster Recovery (DR) replication to maintain a synchronous hot-standby secondary cluster, or Performance Replication for localized secret reads. Core architectural rationale: The two replication modes answer different questions: DR keeps a warm secondary carrying tokens and leases so it can be promoted, while performance replication ...",
    tags: ["replication", "dr", "performance-replication", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "hashicorp-vault-fc-390",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Lease Expiration and Revocation in Insurance Risk & Actuarial Modeling",
    hint: "Focus on leases and revocation operational principles.",
    back: "<strong>Lease Expiration and Revocation</strong>: Monitor lease TTLs, allow clients to renew active leases, and invoke 'sys/leases/revoke-prefix' to revoke compromised credential trees immediately. Core architectural rationale: Revoking by prefix walks the lease tree and runs each revocation statement, so credentials already in an attacker's hands stop working within seconds. Deleting ...",
    tags: ["leases", "revocation", "lifecycle", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "hashicorp-vault-fc-391",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Audit Devices and Failure Behavior in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on audit and logging operational principles.",
    back: "<strong>Audit Devices and Failure Behavior</strong>: Enable multiple audit devices (e.g., file and syslog) and configure monitoring to ensure Vault never halts due to blocked logging destinations. Core architectural rationale: Vault refuses to serve a request it cannot log, so with one audit device that device becomes an availability dependency. Enabling a second device means Vault ke...",
    tags: ["audit", "logging", "compliance", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "hashicorp-vault-fc-392",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Batch Tokens vs Service Tokens in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on batch-tokens and service-tokens operational principles.",
    back: "<strong>Batch Tokens vs Service Tokens</strong>: Use Batch tokens for high-volume, short-lived workloads to eliminate write operations to the storage backend. Core architectural rationale: A batch token is an encrypted blob handed to the client rather than a record in storage, so issuing one costs no write and the storage backend stops being the b...",
    tags: ["batch-tokens", "service-tokens", "throughput", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "hashicorp-vault-fc-393",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Vault Agent and Secret Injection in Digital Identity & Biometric Verification",
    hint: "Focus on vault-agent and sidecar operational principles.",
    back: "<strong>Vault Agent and Secret Injection</strong>: Deploy Vault Agent as a sidecar or daemon to handle authentication, token renewal, and automated secret templating to local disk. Core architectural rationale: Vault Agent runs anywhere a process can run, which is what a fleet spanning Kubernetes and virtual machines needs, and its templating renders secrets into whate...",
    tags: ["vault-agent", "sidecar", "templating", "Digital Identity & Biometric Verification"]
  },
  {
    id: "hashicorp-vault-fc-394",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Vault High Availability Architecture in Legal Discovery & Semantic Document Search",
    hint: "Focus on raft and ha operational principles.",
    back: "<strong>Vault High Availability Architecture</strong>: Deploy a multi-node Vault cluster using integrated Raft storage, where one node is elected active and standby nodes forward requests. Core architectural rationale: Integrated Raft gives Vault its own replicated storage and leader election, so a node can be lost without an external dependency to operate alongside it. A Cons...",
    tags: ["raft", "ha", "clustering", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "hashicorp-vault-fc-395",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Auto-Unseal with Cloud KMS in AdTech Real-Time Bidding Exchange",
    hint: "Focus on auto-unseal and kms operational principles.",
    back: "<strong>Auto-Unseal with Cloud KMS</strong>: Configure the 'seal' stanza with AWS KMS, Azure Key Vault, or GCP KMS to automatically unseal Vault upon service initialization and reboot. Core architectural rationale: Delegating the seal to a cloud KMS or HSM lets Vault decrypt its own root key through an API call at startup with no human present. A transit seal is a genuine ...",
    tags: ["auto-unseal", "kms", "shamir", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "hashicorp-vault-fc-396",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Disaster Recovery vs Performance Replication in Precision Agriculture & Drone Scouting",
    hint: "Focus on replication and dr operational principles.",
    back: "<strong>Disaster Recovery vs Performance Replication</strong>: Use Disaster Recovery (DR) replication to maintain a synchronous hot-standby secondary cluster, or Performance Replication for localized secret reads. Core architectural rationale: The two replication modes answer different questions: DR keeps a warm secondary carrying tokens and leases so it can be promoted, while performance replication ...",
    tags: ["replication", "dr", "performance-replication", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "hashicorp-vault-fc-397",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Lease Expiration and Revocation in Industrial Robotics Predictive Maintenance",
    hint: "Focus on leases and revocation operational principles.",
    back: "<strong>Lease Expiration and Revocation</strong>: Monitor lease TTLs, allow clients to renew active leases, and invoke 'sys/leases/revoke-prefix' to revoke compromised credential trees immediately. Core architectural rationale: Revoking by prefix walks the lease tree and runs each revocation statement, so credentials already in an attacker's hands stop working within seconds. Deleting ...",
    tags: ["leases", "revocation", "lifecycle", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "hashicorp-vault-fc-398",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Audit Devices and Failure Behavior in Educational Remote Proctoring Platform",
    hint: "Focus on audit and logging operational principles.",
    back: "<strong>Audit Devices and Failure Behavior</strong>: Enable multiple audit devices (e.g., file and syslog) and configure monitoring to ensure Vault never halts due to blocked logging destinations. Core architectural rationale: Vault refuses to serve a request it cannot log, so with one audit device that device becomes an availability dependency. Enabling a second device means Vault ke...",
    tags: ["audit", "logging", "compliance", "Educational Remote Proctoring Platform"]
  },
  {
    id: "hashicorp-vault-fc-399",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Batch Tokens vs Service Tokens in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on batch-tokens and service-tokens operational principles.",
    back: "<strong>Batch Tokens vs Service Tokens</strong>: Use Batch tokens for high-volume, short-lived workloads to eliminate write operations to the storage backend. Core architectural rationale: A batch token is an encrypted blob handed to the client rather than a record in storage, so issuing one costs no write and the storage backend stops being the b...",
    tags: ["batch-tokens", "service-tokens", "throughput", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "hashicorp-vault-fc-400",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d3",
    front: "Vault: Vault Agent and Secret Injection in Disaster Emergency Dispatch & Operations",
    hint: "Focus on vault-agent and sidecar operational principles.",
    back: "<strong>Vault Agent and Secret Injection</strong>: Deploy Vault Agent as a sidecar or daemon to handle authentication, token renewal, and automated secret templating to local disk. Core architectural rationale: Vault Agent runs anywhere a process can run, which is what a fleet spanning Kubernetes and virtual machines needs, and its templating renders secrets into whate...",
    tags: ["vault-agent", "sidecar", "templating", "Disaster Emergency Dispatch & Operations"]
  }
];

export default HASHICORP_VAULT_FLASHCARDS_16;
