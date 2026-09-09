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
    ("AppRole Authentication", "configuring machine authentication for containerized workloads",
     "Configure the AppRole auth engine with a static role_id and dynamically generated secret_id bound to CIDR subnets and short TTLs.",
     "Hardcode root tokens in environment variables inside container definitions.",
     "Deploy a single shared token to all production application instances.",
     "Store long-lived API keys in a plaintext configmap mounted to pods.",
     "AppRole is specifically designed for automated workflows where machines require credentials. It separates machine identity (RoleID) from authorization proof (SecretID), allowing strict CIDR constraints, response wrapping, and short-lived renewable tokens. Hardcoding root tokens or sharing static credentials completely violates Vault security best practices.",
     ["approle", "auth", "security"]),
    
    ("Kubernetes Service Account Auth", "authenticating ephemeral cluster pods without pre-seeded secrets",
     "Enable the Kubernetes auth method, configure Vault with the cluster token reviewer JWT, and bind Vault roles to Kubernetes service accounts and namespaces.",
     "Mount a static root token into a Kubernetes Secret and inject it as an environment variable.",
     "Use the Userpass auth engine and have pod initialization scripts curl credentials with hardcoded passwords.",
     "Enable LDAP authentication and provision dedicated LDAP user accounts for each ephemeral Kubernetes pod.",
     "The Vault Kubernetes auth method validates ephemeral pod identity by verifying the pod's service account JWT against the Kubernetes TokenReview API. This removes any requirement for pre-seeding credentials in pods or storing static passwords. Userpass and LDAP are for human operators, while root tokens must never be used in workloads.",
     ["k8s", "auth", "jwt"]),
    
    ("Vault Policy Capabilities", "enforcing least privilege access control with granular permissions",
     "Specify path 'secret/data/app/*' with capabilities ['read'] to allow reading credentials while denying creation or modification.",
     "Grant the 'sudo' capability to all paths to avoid permission denial errors during deployment.",
     "Assign capability 'write' without 'read' on a KV v2 data path.",
     "Use capability 'deny' on all parent paths without configuring explicit subpath permissions.",
     "Vault policies follow an explicit deny-by-default model. Granular capabilities ('create', 'read', 'update', 'delete', 'list', 'sudo', 'deny') must be assigned strictly on relevant path prefixes. Sudo capability bypasses safeguards and is reserved for root-level operations, not general application reads.",
     ["policy", "hcl", "capabilities"]),

    ("Templated Vault Policies", "scaling access control using identity metadata and entity aliases",
     "Define policy paths using template syntax like 'secret/data/teams/{{identity.entity.metadata.team}}/*' to restrict access by metadata.",
     "Hardcode individual username paths for every user in separate monolithic policy files.",
     "Disable identity entities and rely exclusively on unmapped client IP addresses.",
     "Store policies in database secret engines to allow dynamic SQL queries during authorization.",
     "Vault policy templating allows administrators to write concise, scalable policies using identity metadata, entity IDs, or mount accessors (e.g., 'identity.entity.metadata.team'). This avoids authoring thousands of repetitive static policies for individual users or departments.",
     ["policy", "identity", "templating"]),

    ("Response Wrapping", "securing the initial transport of sensitive SecretIDs and tokens",
     "Generate wrapped tokens or SecretIDs using the '-wrap-ttl' parameter so the recipient retrieves the secret with 'vault unwrap'.",
     "Encrypt the SecretID using base64 encoding and transmit it over unencrypted email.",
     "Print the SecretID to standard application build logs for developers to retrieve.",
     "Store the raw SecretID in a shared public S3 bucket with read access.",
     "Vault response wrapping provides single-use, time-bound covering tokens ('cubbyhole') for sensitive payloads. If an attacker intercepts and unwraps the token first, the intended recipient's subsequent unwrap attempt fails immediately with an audit alert, alerting the security team of credential tampering.",
     ["response-wrapping", "cubbyhole", "transport"]),

    ("Periodic Tokens", "managing long-running daemon authentication without root tokens",
     "Issue a periodic token with a defined period, requiring the daemon to renew it within the period interval indefinitely without hitting a max TTL.",
     "Issue an immutable root token with an infinite TTL that never expires.",
     "Generate standard service tokens and increase the system-wide maximum TTL to 10 years.",
     "Use batch tokens and restart the application daemon every 10 minutes to obtain fresh tokens.",
     "Periodic tokens have no maximum TTL as long as they are renewed within their specified period interval. This makes them ideal for persistent background services and daemons that must maintain continuous authentication without requiring manual intervention or root credentials.",
     ["tokens", "periodic", "ttl"]),

    ("Orphan Tokens", "decoupling token lifecycles from parent administrative accounts",
     "Create an orphan token using 'vault token create -orphan' so its lifetime is independent of the creator's token revocation.",
     "Create standard child tokens that immediately revoke when the parent user logs out at the end of the day.",
     "Share the primary administrative token across all delegate worker processes.",
     "Convert the parent token into a batch token before spawning asynchronous tasks.",
     "By default, tokens are created as children of the caller's token; revoking a parent token cascades and revokes all children. Orphan tokens have no parent, so they survive the termination or logout of the creating entity, which is vital for provisioning independent service lifecycles.",
     ["tokens", "orphan", "hierarchy"])
]

d2_topics = [
    ("KV v2 Secrets Engine", "storing versioned secrets with rollback and soft-delete capabilities",
     "Enable KV version 2 to benefit from automated secret versioning, soft deletion, undelete capabilities, and check-and-set (CAS) operations.",
     "Use KV version 1 and manually append timestamps to secret keys to track past values.",
     "Store secret versions as separate plaintext files inside the Vault Raft data folder.",
     "Configure Transit encryption on KV v1 to simulate secret revision history.",
     "KV Secrets Engine v2 natively provides versioning, metadata inspection, soft deletion (undelete), permanent destruction, and optimistic locking via Check-And-Set (CAS). KV v1 only supports unversioned static overwrite operations without history.",
     ["kv-v2", "versioning", "secrets"]),

    ("Transit Secrets Engine", "providing encryption-as-a-service without exposing private keys",
     "Send plaintext to Vault's transit engine endpoint 'transit/encrypt/keyname' to receive ciphertext, keeping keys securely inside Vault.",
     "Export the transit master private key to the application server and execute AES encryption in local application memory.",
     "Store all encryption keys in unencrypted environment variables on host operating systems.",
     "Use base64 encoding on application strings before storing them in database tables.",
     "Vault Transit secrets engine acts as Cryptography-as-a-Service (EaaS). Vault manages key generation, key rotation, and encryption/decryption operations internally; the private key material never leaves the secure boundaries of Vault storage.",
     ["transit", "encryption", "eaas"]),

    ("Database Dynamic Credentials", "generating ephemeral database users with automatic lease expiration",
     "Configure the Database secrets engine with a connection plugin and role definition that executes 'CREATE USER' with a short lease TTL.",
     "Provide a single static DBA root username and password hardcoded in database client connection pools.",
     "Manually run SQL scripts each week to rotate passwords and email updated credentials to engineers.",
     "Use Vault KV to store a permanent shared PostgreSQL superuser password accessed by all microservices.",
     "The Database secrets engine generates dynamic, on-demand credentials with explicit time-to-live (TTL) leases. When the lease expires and is not renewed, Vault automatically executes revocation statements in the target database to drop the ephemeral role, eliminating static credential leakage.",
     ["database", "dynamic-secrets", "leases"]),

    ("PKI Secrets Engine", "issuing dynamic X.509 certificates and short-lived TLS keys",
     "Mount the PKI engine, configure an intermediate CA signed by an enterprise root, and generate short-lived TLS certificates dynamically via API.",
     "Generate a self-signed 10-year root certificate and distribute the private key directly to web servers.",
     "Purchase individual static certificates from public CAs and store them on unencrypted shared NFS drives.",
     "Disable TLS encryption across internal service mesh communications to eliminate certificate renewal overhead.",
     "Vault PKI secrets engine automates the issuance of short-lived TLS certificates for internal microservices and infrastructure. Using short expiration windows (e.g., hours or days) eliminates the operational nightmare of Certificate Revocation Lists (CRLs) and manual certificate renewal fires.",
     ["pki", "tls", "certificates"]),

    ("Transit Key Rotation and Rewrap", "rotating cryptographic keys with zero downtime for stored ciphertext",
     "Rotate the transit key with 'vault write -f transit/keys/my-key/rotate' and rewrap existing ciphertexts with 'transit/rewrap/my-key'.",
     "Delete the existing transit key and re-encrypt all historic data using a new key name.",
     "Change the Vault master unseal key to force all transit ciphertexts to decrypt automatically.",
     "Store both old and new plaintext keys side-by-side in database columns.",
     "When a transit key is rotated, Vault creates a new key version used for future encryptions while retaining older versions for decrypting legacy data. The 'rewrap' endpoint updates older ciphertexts to the latest key version without returning plaintext to the client application.",
     ["transit", "key-rotation", "rewrap"]),

    ("AWS Dynamic IAM Credentials", "provisioning short-lived cloud credentials for distributed apps",
     "Configure the AWS secrets engine with an administrative IAM role to generate ephemeral STS assumed-role credentials or temporary IAM users.",
     "Generate permanent IAM user access keys with AdministratorAccess and embed them in Docker images.",
     "Store AWS root account credentials in a public GitHub repository.",
     "Disable IAM authentication and allow public unauthenticated access to AWS S3 buckets.",
     "The AWS secrets engine generates ephemeral IAM credentials (assumed roles or IAM users) tied to specific policies and TTLs. When the lease expires, Vault automatically cleans up the temporary credentials, preventing long-lived cloud key compromises.",
     ["aws", "iam", "dynamic-secrets"]),

    ("SSH Secrets Engine", "issuing signed client certificates for zero-trust server access",
     "Configure the SSH secrets engine as a Certificate Authority to issue signed client certificates validated by host sshd daemons.",
     "Distribute an unencrypted private SSH key to all developer laptops and append it to authorized_keys.",
     "Disable SSH password authentication and allow root login with no credentials on public bastion hosts.",
     "Store static SSH host keys in public Slack channels for team access.",
     "Vault SSH secrets engine uses signed SSH certificates. Servers trust Vault's CA public key in their 'sshd_config', allowing engineers to authenticate using short-lived client certificates signed by Vault without maintaining static public keys in 'authorized_keys' files on thousands of hosts.",
     ["ssh", "certificates", "zero-trust"])
]

d3_topics = [
    ("Vault High Availability Architecture", "orchestrating active/standby clusters with integrated Raft consensus",
     "Deploy a multi-node Vault cluster using integrated Raft storage, where one node is elected active and standby nodes forward requests.",
     "Run a single standalone Vault node with local file storage in production without backups.",
     "Deploy multiple active Vault nodes writing concurrently to an uncoordinated NFS filesystem.",
     "Place Vault in read-only mode and disable all state updates to achieve high availability.",
     "Production Vault architectures utilize an Active/Standby clustering model backed by integrated Raft consensus (or Consul). Only the elected active leader processes write operations, while standby nodes handle client request forwarding or read performance scaling.",
     ["raft", "ha", "clustering"]),

    ("Auto-Unseal with Cloud KMS", "automating cluster boot recovery without manual Shamir key coordination",
     "Configure the 'seal' stanza with AWS KMS, Azure Key Vault, or GCP KMS to automatically unseal Vault upon service initialization and reboot.",
     "Store Shamir unseal keys in plaintext inside a shell startup script on the local host.",
     "Disable Vault encryption so that the storage backend does not require unsealing.",
     "Share all Shamir unseal keys in an unencrypted team chat channel.",
     "Auto-unseal delegates the unsealing process to a trusted cloud Key Management Service (AWS KMS, Azure Key Vault, Google Cloud KMS, or PKCS#11 HSM). When Vault restarts, it decrypts its master key via the KMS API without human intervention, eliminating operational downtime.",
     ["auto-unseal", "kms", "shamir"]),

    ("Disaster Recovery vs Performance Replication", "designing multi-datacenter replication and failover topologies",
     "Use Disaster Recovery (DR) replication to maintain a synchronous hot-standby secondary cluster, or Performance Replication for localized secret reads.",
     "Copy raw Raft storage directories across cloud regions using hourly rsync cron jobs while Vault is running.",
     "Deploy independent Vault clusters with identical unseal keys and manually replicate secrets via copy-paste.",
     "Disable all secondary clusters and rely exclusively on tape backups stored offsite.",
     "Vault Enterprise provides two distinct replication types: Performance Replication scales read traffic across regions while sharing the same active state, whereas Disaster Recovery (DR) Replication maintains an isolated secondary cluster ready to be promoted if the primary fails.",
     ["replication", "dr", "performance-replication"]),

    ("Lease Expiration and Revocation", "managing dynamic credential lifecycles and emergency access revocation",
     "Monitor lease TTLs, allow clients to renew active leases, and invoke 'sys/leases/revoke-prefix' to revoke compromised credential trees immediately.",
     "Set lease TTLs to 0 so that credentials persist permanently without tracking.",
     "Delete the Vault audit log file to force all active leases to clear from memory.",
     "Restart the Vault service process whenever credentials need to be revoked.",
     "Every dynamic secret and service token is accompanied by a lease with an explicit duration (TTL). Vault provides granular lease revocation APIs; invoking 'revoke-prefix' revokes every secret issued under a specified path, immediately neutralizing security incidents.",
     ["leases", "revocation", "lifecycle"]),

    ("Audit Devices and Failure Behavior", "implementing non-repudiation and resilient security logging",
     "Enable multiple audit devices (e.g., file and syslog) and configure monitoring to ensure Vault never halts due to blocked logging destinations.",
     "Disable audit logging completely to maximize raw API request throughput.",
     "Write audit logs to an unmonitored /tmp directory that gets wiped every hour.",
     "Log audit records in plaintext without hashing sensitive parameter fields.",
     "Vault audit devices log every authenticated request and response. Vault enforces a strict security policy: if an audit device is configured but cannot write (e.g., disk full), Vault will block incoming requests rather than allow unlogged actions. Best practice requires at least two distinct audit devices.",
     ["audit", "logging", "compliance"]),

    ("Batch Tokens vs Service Tokens", "optimizing token performance for high-throughput serverless executions",
     "Use Batch tokens for high-volume, short-lived workloads to eliminate write operations to the storage backend.",
     "Use Service tokens with 30-day TTLs for transient functions executed 10,000 times per second.",
     "Assign root tokens to serverless AWS Lambda invocations to avoid storage contention.",
     "Store all batch tokens in an external Redis cache to make them renewable.",
     "Batch tokens are lightweight, encrypted binary blobs that carry their own authorization state without being written to Vault's storage backend or index. This allows Vault to process extreme request throughput in serverless and batch workloads without storage I/O bottlenecks.",
     ["batch-tokens", "service-tokens", "throughput"]),

    ("Vault Agent and Secret Injection", "automating client secret delivery through transparent sidecars",
     "Deploy Vault Agent as a sidecar or daemon to handle authentication, token renewal, and automated secret templating to local disk.",
     "Embed Vault root credentials directly in the application source code repository.",
     "Require developers to SSH into production servers daily to manually export credentials into environment variables.",
     "Use custom cron scripts that curl the Vault API and write static JSON secrets to public web directories.",
     "Vault Agent automates the client-side lifecycle of Vault authentication, token renewal, and secret retrieval. Using Vault Agent Templates, it renders application configuration files populated with fresh secrets directly into application shared memory or local files.",
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
            title_prefix, scenario_core, correct_text, dist1, dist2, dist3, explanation, tags = topics_pool[topic_idx]
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
            
            scenario = f"In a {context_title.lower()} infrastructure, {context_desc.lower()} The operations team is currently {scenario_core} under production deployment cycle {pack_idx}.{i+1}."
            question_text = f"Which HashiCorp Vault implementation or architectural pattern satisfies these {context_title.lower()} criteria for {title_prefix.lower()}?"
            
            pack_questions.append({
                "id": q_id,
                "difficulty": diff,
                "certId": CERT_ID,
                "domainId": domain["id"],
                "domainName": domain["name"],
                "title": f"{title_prefix}: {context_title}",
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
