export const GCP_PCDOE_QUESTIONS_20 = [
  {
    id: "gcp-pcdoe-476",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Workload Identity Federation for CI/CD: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Authentication & IAM to allow GitHub Actions or GitLab CI/CD pipelines to deploy resources to Google Cloud without storing long-lived service account key JSON files in repository secrets.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Keyless authentication from external CI/CD platforms to Google Cloud is under consideration.",
    options: [
      { id: 'A', text: "Grant public access to all Google Cloud APIs to avoid configuring authentication tokens." },
      { id: 'B', text: "Generate a permanent service account JSON private key file and commit it directly to the repository codebase." },
      { id: 'C', text: "Configure Workload Identity Federation with OpenID Connect (OIDC) between the external CI provider and Google Cloud IAM service accounts." },
      { id: 'D', text: "Store long-lived service account keys in repository secrets and never rotate or audit them." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure Workload Identity Federation with OpenID Connect (OIDC) between the external CI provider and Google Cloud IAM service accounts. Workload Identity Federation allows external CI/CD workflows (GitHub Actions, GitLab CI) to exchange short-lived OIDC tokens for Google Cloud federated credentials. This eliminates the need to create, download, and manage risky, long-lived service account JSON keys.",
    referenceUrl: "https://cloud.google.com/iam/docs/workload-identity-federation",
    tags: ["Authentication & IAM", "Workload Identity", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-477",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Workload Identity Federation for CI/CD: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Authentication & IAM to allow GitHub Actions or GitLab CI/CD pipelines to deploy resources to Google Cloud without storing long-lived service account key JSON files in repository secrets.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Keyless authentication from external CI/CD platforms to Google Cloud is under consideration.",
    options: [
      { id: 'A', text: "Store long-lived service account keys in repository secrets and never rotate or audit them." },
      { id: 'B', text: "Grant public access to all Google Cloud APIs to avoid configuring authentication tokens." },
      { id: 'C', text: "Generate a permanent service account JSON private key file and commit it directly to the repository codebase." },
      { id: 'D', text: "Configure Workload Identity Federation with OpenID Connect (OIDC) between the external CI provider and Google Cloud IAM service accounts." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Workload Identity Federation with OpenID Connect (OIDC) between the external CI provider and Google Cloud IAM service accounts. Workload Identity Federation allows external CI/CD workflows (GitHub Actions, GitLab CI) to exchange short-lived OIDC tokens for Google Cloud federated credentials. This eliminates the need to create, download, and manage risky, long-lived service account JSON keys.",
    referenceUrl: "https://cloud.google.com/iam/docs/workload-identity-federation",
    tags: ["Authentication & IAM", "Workload Identity", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-478",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Workload Identity Federation for CI/CD: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Authentication & IAM to allow GitHub Actions or GitLab CI/CD pipelines to deploy resources to Google Cloud without storing long-lived service account key JSON files in repository secrets.",
    question: "Which solution implements these mandatory compliance and security controls? Keyless authentication from external CI/CD platforms to Google Cloud is under consideration.",
    options: [
      { id: 'A', text: "Configure Workload Identity Federation with OpenID Connect (OIDC) between the external CI provider and Google Cloud IAM service accounts." },
      { id: 'B', text: "Generate a permanent service account JSON private key file and commit it directly to the repository codebase." },
      { id: 'C', text: "Store long-lived service account keys in repository secrets and never rotate or audit them." },
      { id: 'D', text: "Grant public access to all Google Cloud APIs to avoid configuring authentication tokens." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Workload Identity Federation with OpenID Connect (OIDC) between the external CI provider and Google Cloud IAM service accounts. Workload Identity Federation allows external CI/CD workflows (GitHub Actions, GitLab CI) to exchange short-lived OIDC tokens for Google Cloud federated credentials. This eliminates the need to create, download, and manage risky, long-lived service account JSON keys.",
    referenceUrl: "https://cloud.google.com/iam/docs/workload-identity-federation",
    tags: ["Authentication & IAM", "Workload Identity", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-479",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Workload Identity Federation for CI/CD: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Authentication & IAM to allow GitHub Actions or GitLab CI/CD pipelines to deploy resources to Google Cloud without storing long-lived service account key JSON files in repository secrets.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Keyless authentication from external CI/CD platforms to Google Cloud is under consideration.",
    options: [
      { id: 'A', text: "Store long-lived service account keys in repository secrets and never rotate or audit them." },
      { id: 'B', text: "Grant public access to all Google Cloud APIs to avoid configuring authentication tokens." },
      { id: 'C', text: "Generate a permanent service account JSON private key file and commit it directly to the repository codebase." },
      { id: 'D', text: "Configure Workload Identity Federation with OpenID Connect (OIDC) between the external CI provider and Google Cloud IAM service accounts." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Workload Identity Federation with OpenID Connect (OIDC) between the external CI provider and Google Cloud IAM service accounts. Workload Identity Federation allows external CI/CD workflows (GitHub Actions, GitLab CI) to exchange short-lived OIDC tokens for Google Cloud federated credentials. This eliminates the need to create, download, and manage risky, long-lived service account JSON keys.",
    referenceUrl: "https://cloud.google.com/iam/docs/workload-identity-federation",
    tags: ["Authentication & IAM", "Workload Identity", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-480",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Workload Identity Federation for CI/CD: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Authentication & IAM to allow GitHub Actions or GitLab CI/CD pipelines to deploy resources to Google Cloud without storing long-lived service account key JSON files in repository secrets.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Keyless authentication from external CI/CD platforms to Google Cloud is under consideration.",
    options: [
      { id: 'A', text: "Configure Workload Identity Federation with OpenID Connect (OIDC) between the external CI provider and Google Cloud IAM service accounts." },
      { id: 'B', text: "Generate a permanent service account JSON private key file and commit it directly to the repository codebase." },
      { id: 'C', text: "Store long-lived service account keys in repository secrets and never rotate or audit them." },
      { id: 'D', text: "Grant public access to all Google Cloud APIs to avoid configuring authentication tokens." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Workload Identity Federation with OpenID Connect (OIDC) between the external CI provider and Google Cloud IAM service accounts. Workload Identity Federation allows external CI/CD workflows (GitHub Actions, GitLab CI) to exchange short-lived OIDC tokens for Google Cloud federated credentials. This eliminates the need to create, download, and manage risky, long-lived service account JSON keys.",
    referenceUrl: "https://cloud.google.com/iam/docs/workload-identity-federation",
    tags: ["Authentication & IAM", "Workload Identity", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-481",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Secret Manager with Automated Rotation: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Secret Lifecycle to manage database credentials and API tokens securely while ensuring automated periodic rotation without application downtime.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Centralized secret storage with automated Cloud Functions rotation is under consideration.",
    options: [
      { id: 'A', text: "Write database passwords on whiteboard walls in the engineering conference room." },
      { id: 'B', text: "Store credentials in Secret Manager and configure Cloud Functions rotation triggers linked to Pub/Sub rotation notifications." },
      { id: 'C', text: "Hardcode database credentials in application configuration files and recompile binaries when secrets change." },
      { id: 'D', text: "Store production secrets in plain environment variables committed to public source control." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Store credentials in Secret Manager and configure Cloud Functions rotation triggers linked to Pub/Sub rotation notifications. Secret Manager provides encrypted, centralized storage for API keys, passwords, and certificates. Configuring automated rotation leverages Pub/Sub rotation schedule topics to trigger Cloud Functions that generate new credentials in the target database and update the secret version seamlessly.",
    referenceUrl: "https://cloud.google.com/secret-manager/docs/rotating-secrets",
    tags: ["Secret Lifecycle", "Secret Rotation", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-482",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Secret Manager with Automated Rotation: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Secret Lifecycle to manage database credentials and API tokens securely while ensuring automated periodic rotation without application downtime.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Centralized secret storage with automated Cloud Functions rotation is under consideration.",
    options: [
      { id: 'A', text: "Write database passwords on whiteboard walls in the engineering conference room." },
      { id: 'B', text: "Hardcode database credentials in application configuration files and recompile binaries when secrets change." },
      { id: 'C', text: "Store production secrets in plain environment variables committed to public source control." },
      { id: 'D', text: "Store credentials in Secret Manager and configure Cloud Functions rotation triggers linked to Pub/Sub rotation notifications." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Store credentials in Secret Manager and configure Cloud Functions rotation triggers linked to Pub/Sub rotation notifications. Secret Manager provides encrypted, centralized storage for API keys, passwords, and certificates. Configuring automated rotation leverages Pub/Sub rotation schedule topics to trigger Cloud Functions that generate new credentials in the target database and update the secret version seamlessly.",
    referenceUrl: "https://cloud.google.com/secret-manager/docs/rotating-secrets",
    tags: ["Secret Lifecycle", "Secret Rotation", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-483",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Secret Manager with Automated Rotation: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Secret Lifecycle to manage database credentials and API tokens securely while ensuring automated periodic rotation without application downtime.",
    question: "Which solution implements these mandatory compliance and security controls? Centralized secret storage with automated Cloud Functions rotation is under consideration.",
    options: [
      { id: 'A', text: "Hardcode database credentials in application configuration files and recompile binaries when secrets change." },
      { id: 'B', text: "Store credentials in Secret Manager and configure Cloud Functions rotation triggers linked to Pub/Sub rotation notifications." },
      { id: 'C', text: "Write database passwords on whiteboard walls in the engineering conference room." },
      { id: 'D', text: "Store production secrets in plain environment variables committed to public source control." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Store credentials in Secret Manager and configure Cloud Functions rotation triggers linked to Pub/Sub rotation notifications. Secret Manager provides encrypted, centralized storage for API keys, passwords, and certificates. Configuring automated rotation leverages Pub/Sub rotation schedule topics to trigger Cloud Functions that generate new credentials in the target database and update the secret version seamlessly.",
    referenceUrl: "https://cloud.google.com/secret-manager/docs/rotating-secrets",
    tags: ["Secret Lifecycle", "Secret Rotation", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-484",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Secret Manager with Automated Rotation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Secret Lifecycle to manage database credentials and API tokens securely while ensuring automated periodic rotation without application downtime.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Centralized secret storage with automated Cloud Functions rotation is under consideration.",
    options: [
      { id: 'A', text: "Hardcode database credentials in application configuration files and recompile binaries when secrets change." },
      { id: 'B', text: "Store production secrets in plain environment variables committed to public source control." },
      { id: 'C', text: "Write database passwords on whiteboard walls in the engineering conference room." },
      { id: 'D', text: "Store credentials in Secret Manager and configure Cloud Functions rotation triggers linked to Pub/Sub rotation notifications." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Store credentials in Secret Manager and configure Cloud Functions rotation triggers linked to Pub/Sub rotation notifications. Secret Manager provides encrypted, centralized storage for API keys, passwords, and certificates. Configuring automated rotation leverages Pub/Sub rotation schedule topics to trigger Cloud Functions that generate new credentials in the target database and update the secret version seamlessly.",
    referenceUrl: "https://cloud.google.com/secret-manager/docs/rotating-secrets",
    tags: ["Secret Lifecycle", "Secret Rotation", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-485",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Secret Manager with Automated Rotation: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Secret Lifecycle to manage database credentials and API tokens securely while ensuring automated periodic rotation without application downtime.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Centralized secret storage with automated Cloud Functions rotation is under consideration.",
    options: [
      { id: 'A', text: "Store credentials in Secret Manager and configure Cloud Functions rotation triggers linked to Pub/Sub rotation notifications." },
      { id: 'B', text: "Store production secrets in plain environment variables committed to public source control." },
      { id: 'C', text: "Hardcode database credentials in application configuration files and recompile binaries when secrets change." },
      { id: 'D', text: "Write database passwords on whiteboard walls in the engineering conference room." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store credentials in Secret Manager and configure Cloud Functions rotation triggers linked to Pub/Sub rotation notifications. Secret Manager provides encrypted, centralized storage for API keys, passwords, and certificates. Configuring automated rotation leverages Pub/Sub rotation schedule topics to trigger Cloud Functions that generate new credentials in the target database and update the secret version seamlessly.",
    referenceUrl: "https://cloud.google.com/secret-manager/docs/rotating-secrets",
    tags: ["Secret Lifecycle", "Secret Rotation", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-486",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Cloud KMS and Customer-Managed Encryption Keys: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Data Encryption to satisfy strict regulatory compliance mandates requiring the enterprise to retain complete cryptographic control and revocation capability over data at rest across Cloud Storage and BigQuery.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Customer-Managed Encryption Keys (CMEK) with Cloud KMS for regulatory compliance is under consideration.",
    options: [
      { id: 'A', text: "Disable all encryption at rest to improve disk I/O performance." },
      { id: 'B', text: "Implement custom AES encryption algorithms in Python code and store key files on ephemeral virtual machine disks." },
      { id: 'C', text: "Rely exclusively on default Google-managed keys without retaining cryptographic control." },
      { id: 'D', text: "Configure Customer-Managed Encryption Keys (CMEK) using Cloud Key Management Service (Cloud KMS) and associate the keys with target Cloud Storage buckets and BigQuery datasets." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Customer-Managed Encryption Keys (CMEK) using Cloud Key Management Service (Cloud KMS) and associate the keys with target Cloud Storage buckets and BigQuery datasets. Google Cloud encrypts all customer data at rest by default using Google-managed keys. For regulatory compliance (HIPAA, PCI-DSS, GDPR), Customer-Managed Encryption Keys (CMEK) using Cloud KMS grant customers granular control over key lifecycle, rotation, and instantaneous data revocation by disabling the KMS key.",
    referenceUrl: "https://cloud.google.com/kms/docs/cmek",
    tags: ["Data Encryption", "KMS & CMEK", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-487",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Cloud KMS and Customer-Managed Encryption Keys: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Data Encryption to satisfy strict regulatory compliance mandates requiring the enterprise to retain complete cryptographic control and revocation capability over data at rest across Cloud Storage and BigQuery.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Customer-Managed Encryption Keys (CMEK) with Cloud KMS for regulatory compliance is under consideration.",
    options: [
      { id: 'A', text: "Rely exclusively on default Google-managed keys without retaining cryptographic control." },
      { id: 'B', text: "Disable all encryption at rest to improve disk I/O performance." },
      { id: 'C', text: "Implement custom AES encryption algorithms in Python code and store key files on ephemeral virtual machine disks." },
      { id: 'D', text: "Configure Customer-Managed Encryption Keys (CMEK) using Cloud Key Management Service (Cloud KMS) and associate the keys with target Cloud Storage buckets and BigQuery datasets." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Customer-Managed Encryption Keys (CMEK) using Cloud Key Management Service (Cloud KMS) and associate the keys with target Cloud Storage buckets and BigQuery datasets. Google Cloud encrypts all customer data at rest by default using Google-managed keys. For regulatory compliance (HIPAA, PCI-DSS, GDPR), Customer-Managed Encryption Keys (CMEK) using Cloud KMS grant customers granular control over key lifecycle, rotation, and instantaneous data revocation by disabling the KMS key.",
    referenceUrl: "https://cloud.google.com/kms/docs/cmek",
    tags: ["Data Encryption", "KMS & CMEK", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-488",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Cloud KMS and Customer-Managed Encryption Keys: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Data Encryption to satisfy strict regulatory compliance mandates requiring the enterprise to retain complete cryptographic control and revocation capability over data at rest across Cloud Storage and BigQuery.",
    question: "Which solution implements these mandatory compliance and security controls? Customer-Managed Encryption Keys (CMEK) with Cloud KMS for regulatory compliance is under consideration.",
    options: [
      { id: 'A', text: "Implement custom AES encryption algorithms in Python code and store key files on ephemeral virtual machine disks." },
      { id: 'B', text: "Configure Customer-Managed Encryption Keys (CMEK) using Cloud Key Management Service (Cloud KMS) and associate the keys with target Cloud Storage buckets and BigQuery datasets." },
      { id: 'C', text: "Rely exclusively on default Google-managed keys without retaining cryptographic control." },
      { id: 'D', text: "Disable all encryption at rest to improve disk I/O performance." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Customer-Managed Encryption Keys (CMEK) using Cloud Key Management Service (Cloud KMS) and associate the keys with target Cloud Storage buckets and BigQuery datasets. Google Cloud encrypts all customer data at rest by default using Google-managed keys. For regulatory compliance (HIPAA, PCI-DSS, GDPR), Customer-Managed Encryption Keys (CMEK) using Cloud KMS grant customers granular control over key lifecycle, rotation, and instantaneous data revocation by disabling the KMS key.",
    referenceUrl: "https://cloud.google.com/kms/docs/cmek",
    tags: ["Data Encryption", "KMS & CMEK", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-489",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Cloud KMS and Customer-Managed Encryption Keys: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Data Encryption to satisfy strict regulatory compliance mandates requiring the enterprise to retain complete cryptographic control and revocation capability over data at rest across Cloud Storage and BigQuery.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Customer-Managed Encryption Keys (CMEK) with Cloud KMS for regulatory compliance is under consideration.",
    options: [
      { id: 'A', text: "Disable all encryption at rest to improve disk I/O performance." },
      { id: 'B', text: "Rely exclusively on default Google-managed keys without retaining cryptographic control." },
      { id: 'C', text: "Implement custom AES encryption algorithms in Python code and store key files on ephemeral virtual machine disks." },
      { id: 'D', text: "Configure Customer-Managed Encryption Keys (CMEK) using Cloud Key Management Service (Cloud KMS) and associate the keys with target Cloud Storage buckets and BigQuery datasets." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Customer-Managed Encryption Keys (CMEK) using Cloud Key Management Service (Cloud KMS) and associate the keys with target Cloud Storage buckets and BigQuery datasets. Google Cloud encrypts all customer data at rest by default using Google-managed keys. For regulatory compliance (HIPAA, PCI-DSS, GDPR), Customer-Managed Encryption Keys (CMEK) using Cloud KMS grant customers granular control over key lifecycle, rotation, and instantaneous data revocation by disabling the KMS key.",
    referenceUrl: "https://cloud.google.com/kms/docs/cmek",
    tags: ["Data Encryption", "KMS & CMEK", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-490",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Cloud KMS and Customer-Managed Encryption Keys: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Data Encryption to satisfy strict regulatory compliance mandates requiring the enterprise to retain complete cryptographic control and revocation capability over data at rest across Cloud Storage and BigQuery.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Customer-Managed Encryption Keys (CMEK) with Cloud KMS for regulatory compliance is under consideration.",
    options: [
      { id: 'A', text: "Disable all encryption at rest to improve disk I/O performance." },
      { id: 'B', text: "Implement custom AES encryption algorithms in Python code and store key files on ephemeral virtual machine disks." },
      { id: 'C', text: "Rely exclusively on default Google-managed keys without retaining cryptographic control." },
      { id: 'D', text: "Configure Customer-Managed Encryption Keys (CMEK) using Cloud Key Management Service (Cloud KMS) and associate the keys with target Cloud Storage buckets and BigQuery datasets." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Customer-Managed Encryption Keys (CMEK) using Cloud Key Management Service (Cloud KMS) and associate the keys with target Cloud Storage buckets and BigQuery datasets. Google Cloud encrypts all customer data at rest by default using Google-managed keys. For regulatory compliance (HIPAA, PCI-DSS, GDPR), Customer-Managed Encryption Keys (CMEK) using Cloud KMS grant customers granular control over key lifecycle, rotation, and instantaneous data revocation by disabling the KMS key.",
    referenceUrl: "https://cloud.google.com/kms/docs/cmek",
    tags: ["Data Encryption", "KMS & CMEK", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-491",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Security Command Center and Policy Controller: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Security Governance to enforce Kubernetes security standards (such as disallowing privileged containers and requiring resource limits) across all development clusters continuously.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Policy Controller on GKE with OPA Gatekeeper for continuous configuration auditing is under consideration.",
    options: [
      { id: 'A', text: "Trust all developers to always configure non-privileged security contexts voluntarily." },
      { id: 'B', text: "Manually review pod YAML manifests in production clusters using kubectl get pods once a quarter." },
      { id: 'C', text: "Disable Kubernetes admission webhooks to prevent validation failures during container deployment." },
      { id: 'D', text: "Deploy Policy Controller on GKE to enforce declarative Open Policy Agent (OPA) Gatekeeper constraint templates across all cluster namespaces." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Policy Controller on GKE to enforce declarative Open Policy Agent (OPA) Gatekeeper constraint templates across all cluster namespaces. Policy Controller on GKE is based on OPA Gatekeeper. It intercepts pod creation requests at the Kubernetes admission phase, evaluating them against declarative constraint templates. Non-compliant configurations (e.g., privileged containers, root users) are rejected pre-runtime.",
    referenceUrl: "https://cloud.google.com/anthos-config-management/docs/concepts/policy-controller",
    tags: ["Security Governance", "Policy Controller", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-492",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Security Command Center and Policy Controller: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Security Governance to enforce Kubernetes security standards (such as disallowing privileged containers and requiring resource limits) across all development clusters continuously.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Policy Controller on GKE with OPA Gatekeeper for continuous configuration auditing is under consideration.",
    options: [
      { id: 'A', text: "Disable Kubernetes admission webhooks to prevent validation failures during container deployment." },
      { id: 'B', text: "Manually review pod YAML manifests in production clusters using kubectl get pods once a quarter." },
      { id: 'C', text: "Deploy Policy Controller on GKE to enforce declarative Open Policy Agent (OPA) Gatekeeper constraint templates across all cluster namespaces." },
      { id: 'D', text: "Trust all developers to always configure non-privileged security contexts voluntarily." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Policy Controller on GKE to enforce declarative Open Policy Agent (OPA) Gatekeeper constraint templates across all cluster namespaces. Policy Controller on GKE is based on OPA Gatekeeper. It intercepts pod creation requests at the Kubernetes admission phase, evaluating them against declarative constraint templates. Non-compliant configurations (e.g., privileged containers, root users) are rejected pre-runtime.",
    referenceUrl: "https://cloud.google.com/anthos-config-management/docs/concepts/policy-controller",
    tags: ["Security Governance", "Policy Controller", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-493",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Security Command Center and Policy Controller: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Security Governance to enforce Kubernetes security standards (such as disallowing privileged containers and requiring resource limits) across all development clusters continuously.",
    question: "Which solution implements these mandatory compliance and security controls? Policy Controller on GKE with OPA Gatekeeper for continuous configuration auditing is under consideration.",
    options: [
      { id: 'A', text: "Manually review pod YAML manifests in production clusters using kubectl get pods once a quarter." },
      { id: 'B', text: "Trust all developers to always configure non-privileged security contexts voluntarily." },
      { id: 'C', text: "Disable Kubernetes admission webhooks to prevent validation failures during container deployment." },
      { id: 'D', text: "Deploy Policy Controller on GKE to enforce declarative Open Policy Agent (OPA) Gatekeeper constraint templates across all cluster namespaces." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Policy Controller on GKE to enforce declarative Open Policy Agent (OPA) Gatekeeper constraint templates across all cluster namespaces. Policy Controller on GKE is based on OPA Gatekeeper. It intercepts pod creation requests at the Kubernetes admission phase, evaluating them against declarative constraint templates. Non-compliant configurations (e.g., privileged containers, root users) are rejected pre-runtime.",
    referenceUrl: "https://cloud.google.com/anthos-config-management/docs/concepts/policy-controller",
    tags: ["Security Governance", "Policy Controller", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-494",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Security Command Center and Policy Controller: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Security Governance to enforce Kubernetes security standards (such as disallowing privileged containers and requiring resource limits) across all development clusters continuously.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Policy Controller on GKE with OPA Gatekeeper for continuous configuration auditing is under consideration.",
    options: [
      { id: 'A', text: "Disable Kubernetes admission webhooks to prevent validation failures during container deployment." },
      { id: 'B', text: "Trust all developers to always configure non-privileged security contexts voluntarily." },
      { id: 'C', text: "Manually review pod YAML manifests in production clusters using kubectl get pods once a quarter." },
      { id: 'D', text: "Deploy Policy Controller on GKE to enforce declarative Open Policy Agent (OPA) Gatekeeper constraint templates across all cluster namespaces." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Policy Controller on GKE to enforce declarative Open Policy Agent (OPA) Gatekeeper constraint templates across all cluster namespaces. Policy Controller on GKE is based on OPA Gatekeeper. It intercepts pod creation requests at the Kubernetes admission phase, evaluating them against declarative constraint templates. Non-compliant configurations (e.g., privileged containers, root users) are rejected pre-runtime.",
    referenceUrl: "https://cloud.google.com/anthos-config-management/docs/concepts/policy-controller",
    tags: ["Security Governance", "Policy Controller", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-495",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Security Command Center and Policy Controller: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Security Governance to enforce Kubernetes security standards (such as disallowing privileged containers and requiring resource limits) across all development clusters continuously.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Policy Controller on GKE with OPA Gatekeeper for continuous configuration auditing is under consideration.",
    options: [
      { id: 'A', text: "Deploy Policy Controller on GKE to enforce declarative Open Policy Agent (OPA) Gatekeeper constraint templates across all cluster namespaces." },
      { id: 'B', text: "Manually review pod YAML manifests in production clusters using kubectl get pods once a quarter." },
      { id: 'C', text: "Disable Kubernetes admission webhooks to prevent validation failures during container deployment." },
      { id: 'D', text: "Trust all developers to always configure non-privileged security contexts voluntarily." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Policy Controller on GKE to enforce declarative Open Policy Agent (OPA) Gatekeeper constraint templates across all cluster namespaces. Policy Controller on GKE is based on OPA Gatekeeper. It intercepts pod creation requests at the Kubernetes admission phase, evaluating them against declarative constraint templates. Non-compliant configurations (e.g., privileged containers, root users) are rejected pre-runtime.",
    referenceUrl: "https://cloud.google.com/anthos-config-management/docs/concepts/policy-controller",
    tags: ["Security Governance", "Policy Controller", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-496",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Cloud Audit Logs and Security Analytics: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Audit Logging to track every administrative privilege elevation, firewall rule alteration, and IAM policy change across an enterprise Google Cloud organization for audit compliance.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Admin Activity, Data Access, and System Event audit logs with BigQuery export is under consideration.",
    options: [
      { id: 'A', text: "Delete all log records after 24 hours to prevent compliance auditors from finding discrepancies." },
      { id: 'B', text: "Disable audit logging to reduce cloud project storage consumption." },
      { id: 'C', text: "Rely on individual engineers to remember who altered production firewall configurations." },
      { id: 'D', text: "Enable Cloud Audit Logs (Admin Activity, Data Access) across all projects and aggregate them via an organization-level log sink into BigQuery for forensic SQL auditing." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Cloud Audit Logs (Admin Activity, Data Access) across all projects and aggregate them via an organization-level log sink into BigQuery for forensic SQL auditing. Cloud Audit Logs automatically record who did what, where, and when across Google Cloud. Admin Activity logs are permanently retained at no cost. Aggregating Admin Activity and Data Access logs via an organization-level sink into BigQuery enables fast SQL forensic analysis and compliance verification.",
    referenceUrl: "https://cloud.google.com/logging/docs/audit",
    tags: ["Audit Logging", "Audit Logging", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-497",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Cloud Audit Logs and Security Analytics: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Audit Logging to track every administrative privilege elevation, firewall rule alteration, and IAM policy change across an enterprise Google Cloud organization for audit compliance.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Admin Activity, Data Access, and System Event audit logs with BigQuery export is under consideration.",
    options: [
      { id: 'A', text: "Enable Cloud Audit Logs (Admin Activity, Data Access) across all projects and aggregate them via an organization-level log sink into BigQuery for forensic SQL auditing." },
      { id: 'B', text: "Delete all log records after 24 hours to prevent compliance auditors from finding discrepancies." },
      { id: 'C', text: "Rely on individual engineers to remember who altered production firewall configurations." },
      { id: 'D', text: "Disable audit logging to reduce cloud project storage consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Cloud Audit Logs (Admin Activity, Data Access) across all projects and aggregate them via an organization-level log sink into BigQuery for forensic SQL auditing. Cloud Audit Logs automatically record who did what, where, and when across Google Cloud. Admin Activity logs are permanently retained at no cost. Aggregating Admin Activity and Data Access logs via an organization-level sink into BigQuery enables fast SQL forensic analysis and compliance verification.",
    referenceUrl: "https://cloud.google.com/logging/docs/audit",
    tags: ["Audit Logging", "Audit Logging", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-498",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Cloud Audit Logs and Security Analytics: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Audit Logging to track every administrative privilege elevation, firewall rule alteration, and IAM policy change across an enterprise Google Cloud organization for audit compliance.",
    question: "Which solution implements these mandatory compliance and security controls? Admin Activity, Data Access, and System Event audit logs with BigQuery export is under consideration.",
    options: [
      { id: 'A', text: "Enable Cloud Audit Logs (Admin Activity, Data Access) across all projects and aggregate them via an organization-level log sink into BigQuery for forensic SQL auditing." },
      { id: 'B', text: "Delete all log records after 24 hours to prevent compliance auditors from finding discrepancies." },
      { id: 'C', text: "Disable audit logging to reduce cloud project storage consumption." },
      { id: 'D', text: "Rely on individual engineers to remember who altered production firewall configurations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Cloud Audit Logs (Admin Activity, Data Access) across all projects and aggregate them via an organization-level log sink into BigQuery for forensic SQL auditing. Cloud Audit Logs automatically record who did what, where, and when across Google Cloud. Admin Activity logs are permanently retained at no cost. Aggregating Admin Activity and Data Access logs via an organization-level sink into BigQuery enables fast SQL forensic analysis and compliance verification.",
    referenceUrl: "https://cloud.google.com/logging/docs/audit",
    tags: ["Audit Logging", "Audit Logging", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-499",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Cloud Audit Logs and Security Analytics: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Audit Logging to track every administrative privilege elevation, firewall rule alteration, and IAM policy change across an enterprise Google Cloud organization for audit compliance.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Admin Activity, Data Access, and System Event audit logs with BigQuery export is under consideration.",
    options: [
      { id: 'A', text: "Enable Cloud Audit Logs (Admin Activity, Data Access) across all projects and aggregate them via an organization-level log sink into BigQuery for forensic SQL auditing." },
      { id: 'B', text: "Rely on individual engineers to remember who altered production firewall configurations." },
      { id: 'C', text: "Disable audit logging to reduce cloud project storage consumption." },
      { id: 'D', text: "Delete all log records after 24 hours to prevent compliance auditors from finding discrepancies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Cloud Audit Logs (Admin Activity, Data Access) across all projects and aggregate them via an organization-level log sink into BigQuery for forensic SQL auditing. Cloud Audit Logs automatically record who did what, where, and when across Google Cloud. Admin Activity logs are permanently retained at no cost. Aggregating Admin Activity and Data Access logs via an organization-level sink into BigQuery enables fast SQL forensic analysis and compliance verification.",
    referenceUrl: "https://cloud.google.com/logging/docs/audit",
    tags: ["Audit Logging", "Audit Logging", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-500",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Cloud Audit Logs and Security Analytics: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Audit Logging to track every administrative privilege elevation, firewall rule alteration, and IAM policy change across an enterprise Google Cloud organization for audit compliance.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Admin Activity, Data Access, and System Event audit logs with BigQuery export is under consideration.",
    options: [
      { id: 'A', text: "Disable audit logging to reduce cloud project storage consumption." },
      { id: 'B', text: "Rely on individual engineers to remember who altered production firewall configurations." },
      { id: 'C', text: "Enable Cloud Audit Logs (Admin Activity, Data Access) across all projects and aggregate them via an organization-level log sink into BigQuery for forensic SQL auditing." },
      { id: 'D', text: "Delete all log records after 24 hours to prevent compliance auditors from finding discrepancies." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Cloud Audit Logs (Admin Activity, Data Access) across all projects and aggregate them via an organization-level log sink into BigQuery for forensic SQL auditing. Cloud Audit Logs automatically record who did what, where, and when across Google Cloud. Admin Activity logs are permanently retained at no cost. Aggregating Admin Activity and Data Access logs via an organization-level sink into BigQuery enables fast SQL forensic analysis and compliance verification.",
    referenceUrl: "https://cloud.google.com/logging/docs/audit",
    tags: ["Audit Logging", "Audit Logging", "Resilience Failure"]
  }
];

export default GCP_PCDOE_QUESTIONS_20;
