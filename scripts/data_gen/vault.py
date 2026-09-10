#!/usr/bin/env python3
"""
Generator for HashiCorp Vault Associate (VAULT-003) content:
- 500 questions (20 packs x 25)
- 500 flashcards (20 packs x 25)
"""
import os, json
from generate_content import write_question_pack, write_flashcard_pack

DOMAINS = [
    {"id": "d1", "name": "Compare authentication methods and manage Vault policies", "weight": 35},
    {"id": "d2", "name": "Configure Vault secrets engines and transit encryption", "weight": 35},
    {"id": "d3", "name": "Manage Vault tokens, leases, and operational architecture", "weight": 30}
]

CERT_ID = "hashicorp-vault"
EXPORT_PREFIX = "HASHICORP_VAULT"
REF_URL = "https://developer.hashicorp.com/vault/tutorials/certification-vault-associate-003"

CONTEXTS = [
    ("High-Frequency FinTech Trading", "A quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees."),
    ("Healthcare Patient Records & HIPAA", "A national hospital network requires strict cryptographic privacy, auditable access controls, and HIPAA compliance."),
    ("Global E-Commerce Black Friday Scale", "An international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover."),
    ("Autonomous Vehicle Telemetry", "A self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection."),
    ("Multi-Tenant B2B SaaS Platform", "An enterprise cloud SaaS architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas."),
    ("Media Streaming & Global CDN", "A global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized DRM protection."),
    ("Aerospace Satellite Ground Systems", "An aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing."),
    ("Telecommunications 5G Core Network", "A national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing."),
    ("Renewable Energy Smart Grid IoT", "A smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding."),
    ("Supply Chain Cold-Chain Logistics", "A pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts."),
    ("Banking Core Ledger & Payments", "A central banking consortium enforces ACID consistency, immutable transaction audit trails, and automated reconciliation."),
    ("Genomic Sequencing & Biotech Pipeline", "A genomics laboratory processes petabyte-scale FASTQ files with distributed batch computing and high-throughput POSIX storage."),
    ("Defense-Grade Zero-Trust Network", "A defense intelligence system enforces continuous mutual TLS authentication, strict least privilege, and non-repudiation."),
    ("Online Multiplayer Gaming Engine", "A real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation."),
    ("Insurance Risk & Actuarial Modeling", "An actuarial underwriting platform executes Monte Carlo simulations across millions of policy holder records with parallel workers."),
    ("Pharmaceutical Clinical Trial Platform", "A global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails."),
    ("Smart City Traffic & Mobility Sensor Hub", "A metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference."),
    ("Digital Identity & Biometric Verification", "A cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs."),
    ("Legal Discovery & Semantic Document Search", "A global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval."),
    ("AdTech Real-Time Bidding Exchange", "An advertising exchange processes 500,000 bids per second with a strict 20-millisecond SLA and distributed caching."),
    ("Precision Agriculture & Drone Scouting", "An agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification."),
    ("Industrial Robotics Predictive Maintenance", "A semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime."),
    ("Educational Remote Proctoring Platform", "An online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams."),
    ("Real Estate Valuation & Geo-Spatial Analytics", "A property appraisal engine fuses GIS parcel maps with real-time market transactions for automated valuation."),
    ("Disaster Emergency Dispatch & Operations", "A municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover.")
]

d1_topics = [
    ("AppRole Authentication", "Machine Identity for Containerized Workloads",
     "configuring machine authentication for workloads that cannot be pre-seeded with credentials",
     "Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs.",
     "Enable the Kubernetes auth method and bind roles to each workload's service account, validating pod identity through the cluster TokenReview API.",
     "Enable the TLS certificate auth method and issue each workload a client certificate from Vault's PKI secrets engine for mutual TLS login.",
     "Enable the JWT auth method and validate workload-supplied OIDC tokens against the external identity provider's public JWKS endpoint.",
     "AppRole is the general-purpose machine auth method for platforms that have no external identity to borrow. It splits machine identity (role_id) from proof of authorization (secret_id), and the secret_id can be CIDR-bound, response-wrapped, and given a short TTL. The Kubernetes method is stronger but only works for workloads running as pods in a cluster Vault can reach; certificate auth requires distributing and rotating client certificates before login is possible; JWT auth needs an external provider already issuing workload tokens.",
     ["approle", "auth", "security"]),

    ("Kubernetes Service Account Auth", "Pod Identity Without Distributing Credentials",
     "authenticating ephemeral cluster pods whose identity must be revocable the moment they are deleted",
     "Enable the Kubernetes auth method, configure Vault with the cluster token reviewer JWT, and bind Vault roles to Kubernetes service accounts and namespaces.",
     "Enable the JWT auth method, point it at the cluster's public JWKS issuer URL, and bind roles to the subject claim carried in each pod's projected service account token.",
     "Enable the AppRole auth method and deliver a Vault response-wrapped secret_id to every pod through an init container at startup.",
     "Enable the TLS certificate auth method and mount a per-namespace client certificate into each pod as a Kubernetes Secret.",
     "The Kubernetes auth method calls the cluster TokenReview API on every login, so a service account token stops working the instant the account or pod is removed. JWT auth against the JWKS endpoint verifies the token signature offline and therefore keeps accepting a token after the pod is gone. AppRole works but reintroduces the credential-delivery problem this method exists to remove, and certificate auth puts long-lived key material back into a Secret.",
     ["k8s", "auth", "jwt"]),

    ("Vault Policy Capabilities", "Read-Only Access to a KV v2 Path",
     "granting an application read access to its own secrets without allowing it to overwrite them",
     "Specify path 'secret/data/app/*' with capabilities ['read'] to allow reading credentials while denying creation or modification.",
     "Specify path 'secret/app/*' with capabilities ['read'] so a single rule covers the application's secrets under the KV mount.",
     "Specify path 'secret/data/app/*' with capabilities ['read', 'list'] and add a denied_parameters block for every write parameter.",
     "Specify path 'secret/data/app/*' with capabilities ['create', 'update'] and rely on the default policy to supply read access.",
     "Vault denies by default, so a policy granting only 'read' on the path already prevents writes. On a KV version 2 mount the API path is prefixed with 'data/', so a rule written against 'secret/app/*' matches nothing and the application is denied outright. A denied_parameters block filters parameters on requests the policy already allows and is redundant once write capabilities are absent, and the default policy grants token self-management rather than access to application secrets.",
     ["policy", "hcl", "capabilities"]),

    ("Templated Vault Policies", "One Policy Rule Covering Many Teams",
     "scaling per-team access control without authoring a separate rule for every team",
     "Define policy paths using template syntax like 'secret/data/teams/{{identity.entity.metadata.team}}/*' to restrict access by metadata.",
     "Create one policy per team and attach the matching policy to each auth method role and identity entity as new teams are onboarded.",
     "Create a separate KV v2 mount for each team and grant every auth role a policy scoped to its own mount path.",
     "Grant a single shared rule at 'secret/data/teams/*' and have the application check the caller's team claim before returning any secret that it reads.",
     "Policy templating resolves identity metadata at request time, so one rule serves every team and new teams need no policy change at all. Writing a policy or a mount per team is functionally correct but the operational cost grows with headcount, which is exactly what the templating feature removes. Pushing the separation into the application layer abandons the trust boundary, because the token itself still grants access to every team's path.",
     ["policy", "identity", "templating"]),

    ("Response Wrapping", "Tamper-Evident Hand-Off of a Bootstrap Credential",
     "delivering an initial credential to a new client so that any interception is detected",
     "Generate wrapped tokens or SecretIDs using the '-wrap-ttl' parameter so the recipient retrieves the secret with 'vault unwrap'.",
     "Issue the credential with a very short TTL so that an intercepted value expires before an attacker is able to use it.",
     "Deliver the credential over a mutually authenticated TLS channel and record both the issuing request and the delivery itself in the file audit device.",
     "Store the credential at a KV v2 path readable only by the recipient's own policy and have the client fetch it from Vault on boot.",
     "A wrapping token can be unwrapped exactly once. If anyone intercepts and unwraps it first, the intended recipient's unwrap fails immediately, which turns a silent interception into a loud alert. A short TTL narrows the window but an interception inside that window is still undetectable, TLS protects the channel without proving the payload was never read, and storing the credential in KV requires the client to already hold a token that can read it.",
     ["response-wrapping", "cubbyhole", "transport"]),

    ("Periodic Tokens", "Indefinite Authentication for a Long-Running Daemon",
     "keeping a background daemon authenticated indefinitely without handing it privileged credentials",
     "Issue a periodic token with a defined period, requiring the daemon to renew it within the period interval indefinitely without hitting a max TTL.",
     "Issue a service token with a long explicit max TTL and have the daemon re-authenticate through its AppRole role once the token eventually reaches that limit.",
     "Issue a batch token and have the daemon request a replacement each time its current token is rejected as expired.",
     "Issue a service token and raise the mount's max_lease_ttl so renewals continue well past the system default.",
     "A periodic token has no maximum TTL: as long as it is renewed within its period it lives forever, which is precisely what an always-on daemon needs. Every other option still runs into a ceiling. A long max TTL and a raised max_lease_ttl only move the expiry further out, so the daemon must eventually re-authenticate and needs stored credentials to do it, and batch tokens cannot be renewed at all.",
     ["tokens", "periodic", "ttl"]),

    ("Orphan Tokens", "A Token That Outlives the Session That Created It",
     "provisioning a service token whose lifetime must not depend on the operator who created it",
     "Create an orphan token using 'vault token create -orphan' so its lifetime is independent of the creator's token revocation.",
     "Create the token with 'vault token create -ttl' set longer than the parent token's remaining lifetime.",
     "Create the token with renewable set to true and have the service renew it before the parent token is revoked.",
     "Create the token through a second auth method role so that it is bound to a different identity entity than its creator.",
     "Tokens are created as children of the calling token by default, and revoking a parent revokes the entire subtree immediately. That cascade ignores the child's TTL, its renewable flag, and which identity entity it maps to, so none of those options survive the operator's token being revoked. Only an orphan token has no parent link to follow.",
     ["tokens", "orphan", "hierarchy"])
]

d2_topics = [
    ("KV v2 Secrets Engine", "Recovering a Previous Secret Value",
     "storing configuration secrets so that an accidental overwrite can be rolled back",
     "Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations.",
     "Enable KV version 1 and take scheduled Raft snapshots of the cluster so that earlier secret values can be recovered by restoring a snapshot into a staging cluster.",
     "Enable KV version 1 and enable a file audit device so that previous values can be reconstructed from the request log.",
     "Enable KV version 2 but disable check-and-set so that concurrent write operations never receive a version conflict error.",
     "KV version 2 keeps prior versions of every secret and can restore one with a single undelete call. Raft snapshots do recover old values but only at cluster granularity and only as far back as the last snapshot. Audit devices HMAC sensitive values precisely so they cannot be read back out of the log. Disabling check-and-set on a v2 mount keeps the version history but removes the protection against two writers clobbering each other, which is what causes the overwrite in the first place.",
     ["kv-v2", "versioning", "secrets"]),

    ("Transit Secrets Engine", "Encrypting Records Without Distributing Key Material",
     "encrypting application records where the key must never be readable by the application host",
     "Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault.",
     "Call the transit engine's datakey endpoint for a plaintext data key per record and hold it in application memory while encrypting.",
     "Store an AES data key at a KV v2 path and have each service read it at startup to encrypt records locally.",
     "Use Vault's PKI secrets engine to issue a certificate per service and encrypt each record with that certificate's public key.",
     "Transit performs the cryptographic operation inside Vault, so the key never crosses the boundary and a compromised host yields no key material. The datakey endpoint is a legitimate envelope-encryption pattern but it hands the application a plaintext key, which is the exposure this requirement forbids. Reading a key out of KV has the same flaw with none of the rotation support, and PKI exists for identity and TLS rather than bulk record encryption.",
     ["transit", "encryption", "eaas"]),

    ("Database Dynamic Credentials", "Database Access That Expires On Its Own",
     "giving services database access that disappears automatically when it is no longer needed",
     "Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL.",
     "Configure the Database secrets engine's static roles feature to rotate the password of a fixed application account on a schedule that Vault manages.",
     "Configure the AWS secrets engine to issue IAM credentials and have services connect through RDS IAM database authentication.",
     "Store the database password in KV v2 and use a Vault Agent template to re-render the connection configuration hourly.",
     "A dynamic database role creates a distinct user per lease and runs the revocation statement when that lease expires, so access ends without anyone acting. Static roles keep one long-lived shared account and only change its password, which preserves the shared identity the requirement is trying to remove. RDS IAM authentication is a real option but binds the design to one managed database on one cloud, and a KV-plus-template approach still distributes a standing credential.",
     ["database", "dynamic-secrets", "leases"]),

    ("PKI Secrets Engine", "Internal TLS Without Manual Certificate Renewal",
     "issuing TLS certificates to internal services without an operator renewing them by hand",
     "Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API.",
     "Mount the PKI engine as a self-signed root certificate authority inside Vault and issue leaf certificates directly from that root with multi-year lifetimes.",
     "Use the SSH secrets engine as a certificate authority to sign a certificate for each service to present during mutual TLS.",
     "Use the Transit engine to sign each certificate signing request with a managed key and distribute the results to the services.",
     "Running an intermediate CA in Vault lets certificates be issued through the API with lifetimes short enough that expiry replaces revocation, and it keeps the enterprise root offline. Issuing multi-year leaves from a self-signed root in Vault forfeits both properties and makes a compromise unrecoverable. The SSH engine signs the OpenSSH certificate format, which sshd understands and TLS stacks do not, and Transit signs arbitrary data without producing the X.509 structure a certificate requires.",
     ["pki", "tls", "certificates"]),

    ("Transit Key Rotation and Rewrap", "Moving Stored Ciphertext to a New Key Version",
     "rotating an encryption key and bringing existing ciphertext onto the new version",
     "Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'.",
     "Rotate the transit key and raise min_decryption_version with 'vault write transit/keys/my-key/config' so that stored ciphertext moves onto the new version.",
     "Rotate the transit key and let the seal's automatic master key rotation bring the stored ciphertexts onto the current version.",
     "Create a second transit key, then have the application decrypt each record with the old key and encrypt it again with the new one.",
     "Rotation adds a new key version for future encryptions while older versions stay available to decrypt existing data, and the rewrap endpoint upgrades that data without ever returning plaintext to the caller. Raising min_decryption_version before rewrapping does the opposite of what it appears to: it makes older ciphertext permanently undecryptable. The seal key protects Vault's own storage and has no relationship to transit ciphertext, and a client-side re-encryption loop exposes every record in plaintext.",
     ["transit", "key-rotation", "rewrap"]),

    ("AWS Dynamic IAM Credentials", "Short-Lived Cloud Credentials Brokered Centrally",
     "issuing time-bound cloud credentials to workloads under one central policy",
     "Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users.",
     "Configure the AWS auth method so that workloads log in to Vault by proving their IAM identity, then read the cloud credentials they need from a KV v2 secrets engine mount.",
     "Attach an IAM instance profile to every host and let the AWS SDK collect credentials from the instance metadata service.",
     "Store a long-lived IAM access key pair in KV v2 and rotate it on a schedule using a Vault Agent template.",
     "The AWS secrets engine issues credentials out of Vault with a lease, so they expire and are cleaned up automatically under policy Vault controls. The AWS auth method solves the opposite direction, letting a workload prove its IAM identity in order to log in, and pairing it with a KV mount still leaves a static credential to manage. Instance profiles are sound AWS practice but move the grant into IAM where the central brokering and audit trail are lost, and a rotated static key pair is valid in full between rotations.",
     ["aws", "iam", "dynamic-secrets"]),

    ("SSH Secrets Engine", "Server Access Without Standing Authorized Keys",
     "granting engineers shell access to a large fleet without maintaining authorized_keys files",
     "Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons.",
     "Configure the SSH secrets engine in one-time password mode and install the Vault SSH helper on every target host so that it can verify each login.",
     "Use the PKI secrets engine to issue X.509 client certificates and configure sshd to trust the issuing intermediate CA.",
     "Store a per-host private key in KV v2 and have Vault Agent render it into the engineer's local SSH directory at login.",
     "In CA mode each host trusts Vault's public key once in sshd_config and thereafter accepts any short-lived certificate Vault signs, so no per-user key is ever written to a host. One-time password mode also avoids standing keys but requires the Vault helper installed and maintained on every machine in the fleet. OpenSSH does not consume X.509 certificates, so the PKI engine cannot satisfy sshd, and rendering private keys to disk recreates the standing key material the requirement removes.",
     ["ssh", "certificates", "zero-trust"])
]

d3_topics = [
    ("Vault High Availability Architecture", "Surviving the Loss of a Cluster Node",
     "designing a production cluster topology that tolerates the loss of a node",
     "Deploy a multi-node Vault cluster using integrated Raft storage, where one node is elected active and standby nodes forward requests.",
     "Deploy a multi-node Vault cluster backed by an external Consul storage backend running its own separate server quorum.",
     "Deploy several independent Vault clusters behind a load balancer that spreads write requests evenly across all of them.",
     "Deploy a single Vault node against a highly available managed database backend and restart the node automatically on failure.",
     "Integrated Raft gives Vault its own replicated storage and leader election, so a node can be lost without an external dependency to operate alongside it. A Consul backend is fully supported and was long the standard, but it means running and upgrading a second distributed system purely for Vault's storage. Vault serves writes from a single active node, so balancing writes across independent clusters splits state rather than sharing it, and an HA database keeps the storage available while the single Vault node remains the outage.",
     ["raft", "ha", "clustering"]),

    ("Auto-Unseal with Cloud KMS", "Restarting a Node Without an Operator Key Ceremony",
     "bringing nodes back into service after a restart without assembling key holders",
     "Configure the 'seal' stanza with AWS KMS, Azure Key Vault, or GCP KMS to automatically unseal Vault upon service initialization and reboot.",
     "Configure the 'seal' stanza to use the transit engine of the same Vault cluster so that each node can decrypt its own root key automatically on restart.",
     "Reduce the Shamir key threshold to a single share and place that share in the orchestrator's secret store for startup.",
     "Configure Vault Agent auto-auth so that the agent submits the stored unseal keys to the sys/unseal endpoint at boot.",
     "Delegating the seal to a cloud KMS or HSM lets Vault decrypt its own root key through an API call at startup with no human present. A transit seal is a genuine option, but it must point at a separate Vault cluster: aiming it at the same cluster means the sealed node depends on itself to unseal. A single Shamir share stored next to the service reduces the ceremony to one secret that also unlocks everything, and Vault Agent auto-auth logs in after the node is already unsealed, so it cannot unseal it.",
     ["auto-unseal", "kms", "shamir"]),

    ("Disaster Recovery vs Performance Replication", "Choosing a Cross-Region Replication Mode",
     "planning cross-region failover alongside low-latency reads in each region",
     "Use Disaster Recovery (DR) replication to maintain a synchronous hot-standby secondary cluster, or Performance Replication for localized secret reads.",
     "Use Performance Replication alone in every region and promote whichever performance secondary is healthiest if the primary region becomes unavailable for an extended period.",
     "Take scheduled Raft snapshots on the primary and restore the most recent one into a standby cluster in the second region as the disaster recovery path.",
     "Run an independent cluster in each region and keep their secrets aligned with Vault Agent templates that copy values between them.",
     "The two replication modes answer different questions: DR keeps a warm secondary carrying tokens and leases so it can be promoted, while performance replication serves local reads in each region. Performance secondaries deliberately do not replicate tokens and leases, so promoting one leaves every client re-authenticating. Snapshot-and-restore is a real recovery path but its recovery point is only as recent as the last snapshot, and template-based copying between clusters reimplements replication without its consistency guarantees.",
     ["replication", "dr", "performance-replication"]),

    ("Lease Expiration and Revocation", "Withdrawing Credentials Already in Circulation",
     "cutting off credentials that have already been issued after a suspected compromise",
     "Monitor lease TTLs, allow clients to renew active leases, and invoke 'sys/leases/revoke-prefix' to revoke compromised credential trees immediately.",
     "Delete the auth method role so that no further credentials can be issued, and allow the ones already outstanding to lapse when their own TTL expires naturally.",
     "Rotate the root credential of the backing database so that credentials handed out earlier can no longer connect.",
     "Seal the Vault cluster so that every outstanding lease is invalidated until an operator unseals it again.",
     "Revoking by prefix walks the lease tree and runs each revocation statement, so credentials already in an attacker's hands stop working within seconds. Deleting the role only closes the door on new issuance and leaves every existing credential valid for the rest of its TTL. Rotating the database root credential changes Vault's own connection account rather than the dynamic users it created, and sealing the cluster stops Vault from serving requests while the credentials it issued keep working against the database.",
     ["leases", "revocation", "lifecycle"]),

    ("Audit Devices and Failure Behavior", "Audit Logging That Cannot Fail Quietly",
     "guaranteeing every request is recorded without the logging path halting the cluster",
     "Enable multiple audit devices (e.g., file and syslog) and configure monitoring to ensure Vault never halts due to blocked logging destinations.",
     "Enable a single socket audit device pointed at the central logging collector so that audit records leave the Vault host immediately at the moment they are written.",
     "Enable a single file audit device and configure aggressive log rotation so the destination cannot fill its disk.",
     "Enable a file audit device with log_raw set to true so that responders can read unhashed values during an investigation.",
     "Vault refuses to serve a request it cannot log, so with one audit device that device becomes an availability dependency. Enabling a second device means Vault keeps serving as long as either one accepts writes. A lone socket device is the most fragile choice of all, because a brief network problem at the collector stalls the cluster, and rotation does not help a file device whose filesystem is full or read-only. Setting log_raw writes secrets to the log in the clear, trading a logging problem for a disclosure one.",
     ["audit", "logging", "compliance"]),

    ("Batch Tokens vs Service Tokens", "Token Type for Very High Request Volume",
     "choosing a token type for short-lived functions invoked many thousands of times per second",
     "Use Batch tokens for high-volume, short-lived workloads to eliminate write operations to the storage backend.",
     "Use service tokens with very short TTLs so that expired entries are pruned from the token store by routine cleanup operations.",
     "Use service tokens obtained through Vault Agent's token cache so that repeat invocations avoid contacting Vault.",
     "Use batch tokens with renewable set to true so that a long-running invocation is able to extend its own lifetime.",
     "A batch token is an encrypted blob handed to the client rather than a record in storage, so issuing one costs no write and the storage backend stops being the bottleneck. Service tokens are persisted whatever their TTL, and a short TTL raises the write rate because clients return sooner. Vault Agent's cache reduces round trips for a repeated caller but every distinct invocation still needs a token that must be written. Batch tokens are not renewable at all, so the last option cannot be configured as described.",
     ["batch-tokens", "service-tokens", "throughput"]),

    ("Vault Agent and Secret Injection", "Delivering Secrets to Mixed Kubernetes and VM Workloads",
     "delivering secrets into applications that run on both Kubernetes and plain virtual machines",
     "Deploy Vault Agent as a sidecar or daemon to handle authentication, token renewal, and automated secret templating to local disk.",
     "Deploy the Vault Secrets Operator so that secrets are synchronised into native Kubernetes Secret objects for pods to consume.",
     "Deploy the Vault CSI provider so that secrets are mounted into each pod's filesystem through the secrets-store CSI driver.",
     "Have each application import the Vault API client library and manage its own login, token renewal, and secret refresh logic.",
     "Vault Agent runs anywhere a process can run, which is what a fleet spanning Kubernetes and virtual machines needs, and its templating renders secrets into whatever configuration format the application already reads. The Secrets Operator and the CSI provider are both strong choices, but each is Kubernetes-only and would leave the VM half of the estate unserved. Embedding the API client works everywhere too, at the cost of reimplementing renewal and retry logic in every application and language.",
     ["vault-agent", "sidecar", "templating"])
]

def build_vault_bank():
    pack_domains = (
        [DOMAINS[0]] * 7 +
        [DOMAINS[1]] * 7 +
        [DOMAINS[2]] * 6
    )

    q_id_counter = 1
    fc_id_counter = 1

    for pack_idx in range(1, 21):
        domain = pack_domains[pack_idx - 1]
        
        if domain["id"] == "d1":
            topics_pool = d1_topics
        elif domain["id"] == "d2":
            topics_pool = d2_topics
        else:
            topics_pool = d3_topics
            
        pack_questions = []
        pack_cards = []

        for i in range(25):
            topic_idx = (i + (pack_idx - 1) * 3) % len(topics_pool)
            title_prefix, challenge, scenario_core, correct_text, dist1, dist2, dist3, explanation, tags = topics_pool[topic_idx]
            context_title, context_desc = CONTEXTS[i]
            
            if i < 5:
                diff = "easy"
            elif i < 20:
                diff = "medium"
            else:
                diff = "hard"
                
            q_id = f"hashicorp-vault-{q_id_counter}"
            fc_id = f"hashicorp-vault-fc-{fc_id_counter}"
            
            target_slot = i % 4
            distractors = [dist1, dist2, dist3]
            
            options = []
            d_idx = 0
            for slot_idx in range(4):
                slot_id = chr(65 + slot_idx)
                if slot_idx == target_slot:
                    options.append({"id": slot_id, "text": correct_text})
                else:
                    options.append({"id": slot_id, "text": distractors[d_idx]})
                    d_idx += 1

            correct_letter = chr(65 + target_slot)
            
            scenario = f"{context_desc} The platform team is {scenario_core}."
            question_text = "Which HashiCorp Vault approach best meets these requirements?"
            
            pack_questions.append({
                "id": q_id,
                "difficulty": diff,
                "certId": CERT_ID,
                "domainId": domain["id"],
                "domainName": domain["name"],
                "title": f"{challenge}: {context_title}",
                "scenario": scenario,
                "question": question_text,
                "options": options,
                "correctAnswers": [correct_letter],
                "type": "single",
                "explanation": explanation,
                "referenceUrl": REF_URL,
                "tags": tags + [context_title]
            })
            
            fc_front = f"Vault: {title_prefix} in {context_title}"
            fc_hint = f"Focus on {tags[0]} and {tags[1]} operational principles."
            fc_back = f"<strong>{title_prefix}</strong>: {correct_text} Core architectural rationale: {explanation[:160]}..."
            
            pack_cards.append({
                "id": fc_id,
                "difficulty": diff,
                "certId": CERT_ID,
                "domainId": domain["id"],
                "front": fc_front,
                "hint": fc_hint,
                "back": fc_back,
                "tags": tags + [context_title]
            })
            
            q_id_counter += 1
            fc_id_counter += 1

        write_question_pack(CERT_ID, f"{EXPORT_PREFIX}_QUESTIONS", pack_idx, pack_questions)
        write_flashcard_pack(CERT_ID, f"{EXPORT_PREFIX}_FLASHCARDS", pack_idx, pack_cards)

    print(f"Generated 500 questions and 500 flashcards for {CERT_ID} across 20 packs.")

if __name__ == "__main__":
    build_vault_bank()
