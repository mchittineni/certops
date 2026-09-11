export const HASHICORP_VAULT_QUESTIONS_6 = [
  {
    id: "hashicorp-vault-126",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Pod Identity Without Distributing Credentials: High-Frequency FinTech Trading",
    scenario: "A quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The platform team is authenticating ephemeral cluster pods whose identity must be revocable the moment they are deleted. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Enable the Kubernetes auth method bound to service accounts." },
      { id: 'B', text: "Enable the JWT auth method, point it at the cluster's public JWKS issuer URL, and bind roles to the subject claim carried in each pod's projected service account token." },
      { id: 'C', text: "Enable the AppRole auth method and deliver a Vault response-wrapped secret_id to every pod through an init container at startup." },
      { id: 'D', text: "Enable the TLS certificate auth method and mount a per-namespace client certificate into each pod as a Kubernetes Secret." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Kubernetes auth method calls the cluster TokenReview API on every login, so a service account token stops working the instant the account or pod is removed. JWT auth against the JWKS endpoint verifies the token signature offline and therefore keeps accepting a token after the pod is gone. AppRole works but reintroduces the credential-delivery problem this method exists to remove, and certificate auth puts long-lived key material back into a Secret.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["k8s","auth","jwt","High-Frequency FinTech Trading"]
  },
  {
    id: "hashicorp-vault-127",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Read-Only Access to a KV v2 Path: Healthcare Patient Records & HIPAA",
    scenario: "A national hospital network requires strict cryptographic privacy, auditable access controls, and HIPAA compliance. The platform team is granting an application read access to its own secrets without allowing it to overwrite them. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Specify path 'secret/app/*' with capabilities ['read'] so a single rule covers the application's secrets under the KV mount." },
      { id: 'B', text: "Path 'secret/data/app/*' with capabilities ['read']." },
      { id: 'C', text: "Specify path 'secret/data/app/*' with capabilities ['read', 'list'] and add a denied_parameters block for every write parameter." },
      { id: 'D', text: "Specify path 'secret/data/app/*' with capabilities ['create', 'update'] and rely on the default policy to supply read access." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Vault denies by default, so a policy granting only 'read' on the path already prevents writes. On a KV version 2 mount the API path is prefixed with 'data/', so a rule written against 'secret/app/*' matches nothing and the application is denied outright. A denied_parameters block filters parameters on requests the policy already allows and is redundant once write capabilities are absent, and the default policy grants token self-management rather than access to application secrets.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["policy","hcl","capabilities","Healthcare Patient Records & HIPAA"]
  },
  {
    id: "hashicorp-vault-128",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "One Policy Rule Covering Many Teams: Global E-Commerce Black Friday Scale",
    scenario: "An international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The platform team is scaling per-team access control without authoring a separate rule for every team. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Create one policy per team and attach the matching policy to each auth method role and identity entity as new teams are onboarded." },
      { id: 'B', text: "Create a separate KV v2 mount for each team and grant every auth role a policy scoped to its own mount path." },
      { id: 'C', text: "Template the policy path on 'identity.entity.metadata.team'." },
      { id: 'D', text: "Grant a single shared rule at 'secret/data/teams/*' and have the application check the caller's team claim before returning any secret that it reads." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Policy templating resolves identity metadata at request time, so one rule serves every team and new teams need no policy change at all. Writing a policy or a mount per team is functionally correct but the operational cost grows with headcount, which is exactly what the templating feature removes. Pushing the separation into the application layer abandons the trust boundary, because the token itself still grants access to every team's path.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["policy","identity","templating","Global E-Commerce Black Friday Scale"]
  },
  {
    id: "hashicorp-vault-129",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Tamper-Evident Hand-Off of a Bootstrap Credential: Autonomous Vehicle Telemetry",
    scenario: "A self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The platform team is delivering an initial credential to a new client so that any interception is detected. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Issue the credential with a very short TTL so that an intercepted value expires before an attacker is able to use it." },
      { id: 'B', text: "Deliver the credential over a mutually authenticated TLS channel and record both the issuing request and the delivery itself in the file audit device." },
      { id: 'C', text: "Store the credential at a KV v2 path readable only by the recipient's own policy and have the client fetch it from Vault on boot." },
      { id: 'D', text: "Generate wrapped tokens or SecretIDs using the '-wrap-ttl' parameter so the recipient retrieves the secret with 'vault unwrap'." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A wrapping token can be unwrapped exactly once. If anyone intercepts and unwraps it first, the intended recipient's unwrap fails immediately, which turns a silent interception into a loud alert. A short TTL narrows the window but an interception inside that window is still undetectable, TLS protects the channel without proving the payload was never read, and storing the credential in KV requires the client to already hold a token that can read it.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["response-wrapping","cubbyhole","transport","Autonomous Vehicle Telemetry"]
  },
  {
    id: "hashicorp-vault-130",
    difficulty: "easy",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Indefinite Authentication for a Long-Running Daemon: Multi-Tenant B2B SaaS Platform",
    scenario: "An enterprise cloud SaaS architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The platform team is keeping a background daemon authenticated indefinitely without handing it privileged credentials. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Issue a periodic token with a defined period, requiring the daemon to renew it within the period interval indefinitely without hitting a max TTL." },
      { id: 'B', text: "Issue a service token with a long explicit max TTL and have the daemon re-authenticate through its AppRole role once the token eventually reaches that limit." },
      { id: 'C', text: "Issue a batch token and have the daemon request a replacement each time its current token is rejected as expired." },
      { id: 'D', text: "Issue a service token and raise the mount's max_lease_ttl so renewals continue well past the system default." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A periodic token has no maximum TTL: as long as it is renewed within its period it lives forever, which is precisely what an always-on daemon needs. Every other option still runs into a ceiling. A long max TTL and a raised max_lease_ttl only move the expiry further out, so the daemon must eventually re-authenticate and needs stored credentials to do it, and batch tokens cannot be renewed at all.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["tokens","periodic","ttl","Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "hashicorp-vault-131",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "A Token That Outlives the Session That Created It: Media Streaming & Global CDN",
    scenario: "A global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized DRM protection. The platform team is provisioning a service token whose lifetime must not depend on the operator who created it. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Create the token with 'vault token create -ttl' set longer than the parent token's remaining lifetime." },
      { id: 'B', text: "Create an orphan token using 'vault token create -orphan' so its lifetime is independent of the creator's token revocation." },
      { id: 'C', text: "Create the token with renewable set to true and have the service renew it before the parent token is revoked." },
      { id: 'D', text: "Create the token through a second auth method role so that it is bound to a different identity entity than its creator." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Tokens are created as children of the calling token by default, and revoking a parent revokes the entire subtree immediately. That cascade ignores the child's TTL, its renewable flag, and which identity entity it maps to, so none of those options survive the operator's token being revoked. Only an orphan token has no parent link to follow.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["tokens","orphan","hierarchy","Media Streaming & Global CDN"]
  },
  {
    id: "hashicorp-vault-132",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Machine Identity for Containerized Workloads: Aerospace Satellite Ground Systems",
    scenario: "An aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The platform team is configuring machine authentication for workloads that cannot be pre-seeded with credentials. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Enable the Kubernetes auth method and bind roles to each workload's service account, validating pod identity through the cluster TokenReview API." },
      { id: 'B', text: "Enable the TLS certificate auth method and issue each workload a client certificate from Vault's PKI secrets engine for mutual TLS login." },
      { id: 'C', text: "Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs." },
      { id: 'D', text: "Enable the JWT auth method and validate workload-supplied OIDC tokens against the external identity provider's public JWKS endpoint." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AppRole is the general-purpose machine auth method for platforms that have no external identity to borrow. It splits machine identity (role_id) from proof of authorization (secret_id), and the secret_id can be CIDR-bound, response-wrapped, and given a short TTL. The Kubernetes method is stronger but only works for workloads running as pods in a cluster Vault can reach; certificate auth requires distributing and rotating client certificates before login is possible; JWT auth needs an external provider already issuing workload tokens.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["approle","auth","security","Aerospace Satellite Ground Systems"]
  },
  {
    id: "hashicorp-vault-133",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Pod Identity Without Distributing Credentials: Telecommunications 5G Core Network",
    scenario: "A national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The platform team is authenticating ephemeral cluster pods whose identity must be revocable the moment they are deleted. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Enable the JWT auth method, point it at the cluster's public JWKS issuer URL, and bind roles to the subject claim carried in each pod's projected service account token." },
      { id: 'B', text: "Enable the AppRole auth method and deliver a Vault response-wrapped secret_id to every pod through an init container at startup." },
      { id: 'C', text: "Enable the TLS certificate auth method and mount a per-namespace client certificate into each pod as a Kubernetes Secret." },
      { id: 'D', text: "Enable the Kubernetes auth method bound to service accounts." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Kubernetes auth method calls the cluster TokenReview API on every login, so a service account token stops working the instant the account or pod is removed. JWT auth against the JWKS endpoint verifies the token signature offline and therefore keeps accepting a token after the pod is gone. AppRole works but reintroduces the credential-delivery problem this method exists to remove, and certificate auth puts long-lived key material back into a Secret.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["k8s","auth","jwt","Telecommunications 5G Core Network"]
  },
  {
    id: "hashicorp-vault-134",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Read-Only Access to a KV v2 Path: Renewable Energy Smart Grid IoT",
    scenario: "A smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The platform team is granting an application read access to its own secrets without allowing it to overwrite them. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Path 'secret/data/app/*' with capabilities ['read']." },
      { id: 'B', text: "Specify path 'secret/app/*' with capabilities ['read'] so a single rule covers the application's secrets under the KV mount." },
      { id: 'C', text: "Specify path 'secret/data/app/*' with capabilities ['read', 'list'] and add a denied_parameters block for every write parameter." },
      { id: 'D', text: "Specify path 'secret/data/app/*' with capabilities ['create', 'update'] and rely on the default policy to supply read access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Vault denies by default, so a policy granting only 'read' on the path already prevents writes. On a KV version 2 mount the API path is prefixed with 'data/', so a rule written against 'secret/app/*' matches nothing and the application is denied outright. A denied_parameters block filters parameters on requests the policy already allows and is redundant once write capabilities are absent, and the default policy grants token self-management rather than access to application secrets.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["policy","hcl","capabilities","Renewable Energy Smart Grid IoT"]
  },
  {
    id: "hashicorp-vault-135",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "One Policy Rule Covering Many Teams: Supply Chain Cold-Chain Logistics",
    scenario: "A pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The platform team is scaling per-team access control without authoring a separate rule for every team. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Create one policy per team and attach the matching policy to each auth method role and identity entity as new teams are onboarded." },
      { id: 'B', text: "Template the policy path on 'identity.entity.metadata.team'." },
      { id: 'C', text: "Create a separate KV v2 mount for each team and grant every auth role a policy scoped to its own mount path." },
      { id: 'D', text: "Grant a single shared rule at 'secret/data/teams/*' and have the application check the caller's team claim before returning any secret that it reads." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Policy templating resolves identity metadata at request time, so one rule serves every team and new teams need no policy change at all. Writing a policy or a mount per team is functionally correct but the operational cost grows with headcount, which is exactly what the templating feature removes. Pushing the separation into the application layer abandons the trust boundary, because the token itself still grants access to every team's path.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["policy","identity","templating","Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "hashicorp-vault-136",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Tamper-Evident Hand-Off of a Bootstrap Credential: Banking Core Ledger & Payments",
    scenario: "A central banking consortium enforces ACID consistency, immutable transaction audit trails, and automated reconciliation. The platform team is delivering an initial credential to a new client so that any interception is detected. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Issue the credential with a very short TTL so that an intercepted value expires before an attacker is able to use it." },
      { id: 'B', text: "Deliver the credential over a mutually authenticated TLS channel and record both the issuing request and the delivery itself in the file audit device." },
      { id: 'C', text: "Generate wrapped tokens or SecretIDs using the '-wrap-ttl' parameter so the recipient retrieves the secret with 'vault unwrap'." },
      { id: 'D', text: "Store the credential at a KV v2 path readable only by the recipient's own policy and have the client fetch it from Vault on boot." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A wrapping token can be unwrapped exactly once. If anyone intercepts and unwraps it first, the intended recipient's unwrap fails immediately, which turns a silent interception into a loud alert. A short TTL narrows the window but an interception inside that window is still undetectable, TLS protects the channel without proving the payload was never read, and storing the credential in KV requires the client to already hold a token that can read it.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["response-wrapping","cubbyhole","transport","Banking Core Ledger & Payments"]
  },
  {
    id: "hashicorp-vault-137",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Indefinite Authentication for a Long-Running Daemon: Genomic Sequencing & Biotech Pipeline",
    scenario: "A genomics laboratory processes petabyte-scale FASTQ files with distributed batch computing and high-throughput POSIX storage. The platform team is keeping a background daemon authenticated indefinitely without handing it privileged credentials. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Issue a service token with a long explicit max TTL and have the daemon re-authenticate through its AppRole role once the token eventually reaches that limit." },
      { id: 'B', text: "Issue a batch token and have the daemon request a replacement each time its current token is rejected as expired." },
      { id: 'C', text: "Issue a service token and raise the mount's max_lease_ttl so renewals continue well past the system default." },
      { id: 'D', text: "Issue a periodic token with a defined period, requiring the daemon to renew it within the period interval indefinitely without hitting a max TTL." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A periodic token has no maximum TTL: as long as it is renewed within its period it lives forever, which is precisely what an always-on daemon needs. Every other option still runs into a ceiling. A long max TTL and a raised max_lease_ttl only move the expiry further out, so the daemon must eventually re-authenticate and needs stored credentials to do it, and batch tokens cannot be renewed at all.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["tokens","periodic","ttl","Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "hashicorp-vault-138",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "A Token That Outlives the Session That Created It: Defense-Grade Zero-Trust Network",
    scenario: "A defense intelligence system enforces continuous mutual TLS authentication, strict least privilege, and non-repudiation. The platform team is provisioning a service token whose lifetime must not depend on the operator who created it. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Create an orphan token using 'vault token create -orphan' so its lifetime is independent of the creator's token revocation." },
      { id: 'B', text: "Create the token with 'vault token create -ttl' set longer than the parent token's remaining lifetime." },
      { id: 'C', text: "Create the token with renewable set to true and have the service renew it before the parent token is revoked." },
      { id: 'D', text: "Create the token through a second auth method role so that it is bound to a different identity entity than its creator." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Tokens are created as children of the calling token by default, and revoking a parent revokes the entire subtree immediately. That cascade ignores the child's TTL, its renewable flag, and which identity entity it maps to, so none of those options survive the operator's token being revoked. Only an orphan token has no parent link to follow.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["tokens","orphan","hierarchy","Defense-Grade Zero-Trust Network"]
  },
  {
    id: "hashicorp-vault-139",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Machine Identity for Containerized Workloads: Online Multiplayer Gaming Engine",
    scenario: "A real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The platform team is configuring machine authentication for workloads that cannot be pre-seeded with credentials. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Enable the Kubernetes auth method and bind roles to each workload's service account, validating pod identity through the cluster TokenReview API." },
      { id: 'B', text: "Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs." },
      { id: 'C', text: "Enable the TLS certificate auth method and issue each workload a client certificate from Vault's PKI secrets engine for mutual TLS login." },
      { id: 'D', text: "Enable the JWT auth method and validate workload-supplied OIDC tokens against the external identity provider's public JWKS endpoint." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AppRole is the general-purpose machine auth method for platforms that have no external identity to borrow. It splits machine identity (role_id) from proof of authorization (secret_id), and the secret_id can be CIDR-bound, response-wrapped, and given a short TTL. The Kubernetes method is stronger but only works for workloads running as pods in a cluster Vault can reach; certificate auth requires distributing and rotating client certificates before login is possible; JWT auth needs an external provider already issuing workload tokens.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["approle","auth","security","Online Multiplayer Gaming Engine"]
  },
  {
    id: "hashicorp-vault-140",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Pod Identity Without Distributing Credentials: Insurance Risk & Actuarial Modeling",
    scenario: "An actuarial underwriting platform executes Monte Carlo simulations across millions of policy holder records with parallel workers. The platform team is authenticating ephemeral cluster pods whose identity must be revocable the moment they are deleted. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Enable the JWT auth method, point it at the cluster's public JWKS issuer URL, and bind roles to the subject claim carried in each pod's projected service account token." },
      { id: 'B', text: "Enable the AppRole auth method and deliver a Vault response-wrapped secret_id to every pod through an init container at startup." },
      { id: 'C', text: "Enable the Kubernetes auth method bound to service accounts." },
      { id: 'D', text: "Enable the TLS certificate auth method and mount a per-namespace client certificate into each pod as a Kubernetes Secret." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Kubernetes auth method calls the cluster TokenReview API on every login, so a service account token stops working the instant the account or pod is removed. JWT auth against the JWKS endpoint verifies the token signature offline and therefore keeps accepting a token after the pod is gone. AppRole works but reintroduces the credential-delivery problem this method exists to remove, and certificate auth puts long-lived key material back into a Secret.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["k8s","auth","jwt","Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "hashicorp-vault-141",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Read-Only Access to a KV v2 Path: Pharmaceutical Clinical Trial Platform",
    scenario: "A global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The platform team is granting an application read access to its own secrets without allowing it to overwrite them. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Specify path 'secret/app/*' with capabilities ['read'] so a single rule covers the application's secrets under the KV mount." },
      { id: 'B', text: "Specify path 'secret/data/app/*' with capabilities ['read', 'list'] and add a denied_parameters block for every write parameter." },
      { id: 'C', text: "Specify path 'secret/data/app/*' with capabilities ['create', 'update'] and rely on the default policy to supply read access." },
      { id: 'D', text: "Path 'secret/data/app/*' with capabilities ['read']." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Vault denies by default, so a policy granting only 'read' on the path already prevents writes. On a KV version 2 mount the API path is prefixed with 'data/', so a rule written against 'secret/app/*' matches nothing and the application is denied outright. A denied_parameters block filters parameters on requests the policy already allows and is redundant once write capabilities are absent, and the default policy grants token self-management rather than access to application secrets.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["policy","hcl","capabilities","Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "hashicorp-vault-142",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "One Policy Rule Covering Many Teams: Smart City Traffic & Mobility Sensor Hub",
    scenario: "A metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The platform team is scaling per-team access control without authoring a separate rule for every team. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Template the policy path on 'identity.entity.metadata.team'." },
      { id: 'B', text: "Create one policy per team and attach the matching policy to each auth method role and identity entity as new teams are onboarded." },
      { id: 'C', text: "Create a separate KV v2 mount for each team and grant every auth role a policy scoped to its own mount path." },
      { id: 'D', text: "Grant a single shared rule at 'secret/data/teams/*' and have the application check the caller's team claim before returning any secret that it reads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Policy templating resolves identity metadata at request time, so one rule serves every team and new teams need no policy change at all. Writing a policy or a mount per team is functionally correct but the operational cost grows with headcount, which is exactly what the templating feature removes. Pushing the separation into the application layer abandons the trust boundary, because the token itself still grants access to every team's path.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["policy","identity","templating","Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "hashicorp-vault-143",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Tamper-Evident Hand-Off of a Bootstrap Credential: Digital Identity & Biometric Verification",
    scenario: "A cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The platform team is delivering an initial credential to a new client so that any interception is detected. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Issue the credential with a very short TTL so that an intercepted value expires before an attacker is able to use it." },
      { id: 'B', text: "Generate wrapped tokens or SecretIDs using the '-wrap-ttl' parameter so the recipient retrieves the secret with 'vault unwrap'." },
      { id: 'C', text: "Deliver the credential over a mutually authenticated TLS channel and record both the issuing request and the delivery itself in the file audit device." },
      { id: 'D', text: "Store the credential at a KV v2 path readable only by the recipient's own policy and have the client fetch it from Vault on boot." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A wrapping token can be unwrapped exactly once. If anyone intercepts and unwraps it first, the intended recipient's unwrap fails immediately, which turns a silent interception into a loud alert. A short TTL narrows the window but an interception inside that window is still undetectable, TLS protects the channel without proving the payload was never read, and storing the credential in KV requires the client to already hold a token that can read it.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["response-wrapping","cubbyhole","transport","Digital Identity & Biometric Verification"]
  },
  {
    id: "hashicorp-vault-144",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Indefinite Authentication for a Long-Running Daemon: Legal Discovery & Semantic Document Search",
    scenario: "A global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The platform team is keeping a background daemon authenticated indefinitely without handing it privileged credentials. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Issue a service token with a long explicit max TTL and have the daemon re-authenticate through its AppRole role once the token eventually reaches that limit." },
      { id: 'B', text: "Issue a batch token and have the daemon request a replacement each time its current token is rejected as expired." },
      { id: 'C', text: "Issue a periodic token with a defined period, requiring the daemon to renew it within the period interval indefinitely without hitting a max TTL." },
      { id: 'D', text: "Issue a service token and raise the mount's max_lease_ttl so renewals continue well past the system default." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A periodic token has no maximum TTL: as long as it is renewed within its period it lives forever, which is precisely what an always-on daemon needs. Every other option still runs into a ceiling. A long max TTL and a raised max_lease_ttl only move the expiry further out, so the daemon must eventually re-authenticate and needs stored credentials to do it, and batch tokens cannot be renewed at all.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["tokens","periodic","ttl","Legal Discovery & Semantic Document Search"]
  },
  {
    id: "hashicorp-vault-145",
    difficulty: "medium",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "A Token That Outlives the Session That Created It: AdTech Real-Time Bidding Exchange",
    scenario: "An advertising exchange processes 500,000 bids per second with a strict 20-millisecond SLA and distributed caching. The platform team is provisioning a service token whose lifetime must not depend on the operator who created it. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Create the token with 'vault token create -ttl' set longer than the parent token's remaining lifetime." },
      { id: 'B', text: "Create the token with renewable set to true and have the service renew it before the parent token is revoked." },
      { id: 'C', text: "Create the token through a second auth method role so that it is bound to a different identity entity than its creator." },
      { id: 'D', text: "Create an orphan token using 'vault token create -orphan' so its lifetime is independent of the creator's token revocation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Tokens are created as children of the calling token by default, and revoking a parent revokes the entire subtree immediately. That cascade ignores the child's TTL, its renewable flag, and which identity entity it maps to, so none of those options survive the operator's token being revoked. Only an orphan token has no parent link to follow.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["tokens","orphan","hierarchy","AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "hashicorp-vault-146",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Machine Identity for Containerized Workloads: Precision Agriculture & Drone Scouting",
    scenario: "An agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The platform team is configuring machine authentication for workloads that cannot be pre-seeded with credentials. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs." },
      { id: 'B', text: "Enable the Kubernetes auth method and bind roles to each workload's service account, validating pod identity through the cluster TokenReview API." },
      { id: 'C', text: "Enable the TLS certificate auth method and issue each workload a client certificate from Vault's PKI secrets engine for mutual TLS login." },
      { id: 'D', text: "Enable the JWT auth method and validate workload-supplied OIDC tokens against the external identity provider's public JWKS endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AppRole is the general-purpose machine auth method for platforms that have no external identity to borrow. It splits machine identity (role_id) from proof of authorization (secret_id), and the secret_id can be CIDR-bound, response-wrapped, and given a short TTL. The Kubernetes method is stronger but only works for workloads running as pods in a cluster Vault can reach; certificate auth requires distributing and rotating client certificates before login is possible; JWT auth needs an external provider already issuing workload tokens.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["approle","auth","security","Precision Agriculture & Drone Scouting"]
  },
  {
    id: "hashicorp-vault-147",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Pod Identity Without Distributing Credentials: Industrial Robotics Predictive Maintenance",
    scenario: "A semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The platform team is authenticating ephemeral cluster pods whose identity must be revocable the moment they are deleted. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Enable the JWT auth method, point it at the cluster's public JWKS issuer URL, and bind roles to the subject claim carried in each pod's projected service account token." },
      { id: 'B', text: "Enable the Kubernetes auth method bound to service accounts." },
      { id: 'C', text: "Enable the AppRole auth method and deliver a Vault response-wrapped secret_id to every pod through an init container at startup." },
      { id: 'D', text: "Enable the TLS certificate auth method and mount a per-namespace client certificate into each pod as a Kubernetes Secret." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Kubernetes auth method calls the cluster TokenReview API on every login, so a service account token stops working the instant the account or pod is removed. JWT auth against the JWKS endpoint verifies the token signature offline and therefore keeps accepting a token after the pod is gone. AppRole works but reintroduces the credential-delivery problem this method exists to remove, and certificate auth puts long-lived key material back into a Secret.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["k8s","auth","jwt","Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "hashicorp-vault-148",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Read-Only Access to a KV v2 Path: Educational Remote Proctoring Platform",
    scenario: "An online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The platform team is granting an application read access to its own secrets without allowing it to overwrite them. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Specify path 'secret/app/*' with capabilities ['read'] so a single rule covers the application's secrets under the KV mount." },
      { id: 'B', text: "Specify path 'secret/data/app/*' with capabilities ['read', 'list'] and add a denied_parameters block for every write parameter." },
      { id: 'C', text: "Path 'secret/data/app/*' with capabilities ['read']." },
      { id: 'D', text: "Specify path 'secret/data/app/*' with capabilities ['create', 'update'] and rely on the default policy to supply read access." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Vault denies by default, so a policy granting only 'read' on the path already prevents writes. On a KV version 2 mount the API path is prefixed with 'data/', so a rule written against 'secret/app/*' matches nothing and the application is denied outright. A denied_parameters block filters parameters on requests the policy already allows and is redundant once write capabilities are absent, and the default policy grants token self-management rather than access to application secrets.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["policy","hcl","capabilities","Educational Remote Proctoring Platform"]
  },
  {
    id: "hashicorp-vault-149",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "One Policy Rule Covering Many Teams: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "A property appraisal engine fuses GIS parcel maps with real-time market transactions for automated valuation. The platform team is scaling per-team access control without authoring a separate rule for every team. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Create one policy per team and attach the matching policy to each auth method role and identity entity as new teams are onboarded." },
      { id: 'B', text: "Create a separate KV v2 mount for each team and grant every auth role a policy scoped to its own mount path." },
      { id: 'C', text: "Grant a single shared rule at 'secret/data/teams/*' and have the application check the caller's team claim before returning any secret that it reads." },
      { id: 'D', text: "Template the policy path on 'identity.entity.metadata.team'." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Policy templating resolves identity metadata at request time, so one rule serves every team and new teams need no policy change at all. Writing a policy or a mount per team is functionally correct but the operational cost grows with headcount, which is exactly what the templating feature removes. Pushing the separation into the application layer abandons the trust boundary, because the token itself still grants access to every team's path.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["policy","identity","templating","Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "hashicorp-vault-150",
    difficulty: "hard",
    certId: "hashicorp-vault",
    domainId: "d1",
    domainName: "Compare authentication methods and manage Vault policies",
    title: "Tamper-Evident Hand-Off of a Bootstrap Credential: Disaster Emergency Dispatch & Operations",
    scenario: "A municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The platform team is delivering an initial credential to a new client so that any interception is detected. The work is scoped to the development environment.",
    question: "Which HashiCorp Vault approach best meets these requirements?",
    options: [
      { id: 'A', text: "Generate wrapped tokens or SecretIDs using the '-wrap-ttl' parameter so the recipient retrieves the secret with 'vault unwrap'." },
      { id: 'B', text: "Issue the credential with a very short TTL so that an intercepted value expires before an attacker is able to use it." },
      { id: 'C', text: "Deliver the credential over a mutually authenticated TLS channel and record both the issuing request and the delivery itself in the file audit device." },
      { id: 'D', text: "Store the credential at a KV v2 path readable only by the recipient's own policy and have the client fetch it from Vault on boot." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A wrapping token can be unwrapped exactly once. If anyone intercepts and unwraps it first, the intended recipient's unwrap fails immediately, which turns a silent interception into a loud alert. A short TTL narrows the window but an interception inside that window is still undetectable, TLS protects the channel without proving the payload was never read, and storing the credential in KV requires the client to already hold a token that can read it.",
    referenceUrl: "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003",
    tags: ["response-wrapping","cubbyhole","transport","Disaster Emergency Dispatch & Operations"]
  }
];

export default HASHICORP_VAULT_QUESTIONS_6;
