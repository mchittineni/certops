export const CNCF_CGOA_QUESTIONS_19 = [
  {
    id: "cncf-cgoa-451",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "The Secret Management Problem in GitOps: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Secret Fundamentals to manage sensitive database passwords in a GitOps workflow without committing plaintext credentials to version control.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Why plaintext secrets must never be committed to Git and secret storage patterns is under consideration.",
    options: [
      { id: 'A', text: "Use encrypted secret repositories (e.g., Sealed Secrets, SOPS) or external secret operators that resolve credentials from KMS/Vault at runtime." },
      { id: 'B', text: "Commit base64-encoded Kubernetes Secret YAML directly to the public Git repository." },
      { id: 'C', text: "Hardcode passwords inside Docker container images." },
      { id: 'D', text: "Disable passwords across all production database instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use encrypted secret repositories (e.g., Sealed Secrets, SOPS) or external secret operators that resolve credentials from KMS/Vault at runtime. Kubernetes Secrets are merely base64-encoded, not encrypted. Committing raw Secret YAML to Git exposes credentials to anyone with repository read access. GitOps secret solutions either encrypt secrets before committing to Git (SOPS/Sealed Secrets) or fetch them dynamically from external vaults.",
    referenceUrl: "https://www.cncf.io/blog/2021/04/13/secrets-management-in-a-gitops-world/",
    tags: ["Secret Fundamentals", "Secret Problem in GitOps", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-452",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "The Secret Management Problem in GitOps: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Secret Fundamentals to manage sensitive database passwords in a GitOps workflow without committing plaintext credentials to version control.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Why plaintext secrets must never be committed to Git and secret storage patterns is under consideration.",
    options: [
      { id: 'A', text: "Use encrypted secret repositories (e.g., Sealed Secrets, SOPS) or external secret operators that resolve credentials from KMS/Vault at runtime." },
      { id: 'B', text: "Commit base64-encoded Kubernetes Secret YAML directly to the public Git repository." },
      { id: 'C', text: "Hardcode passwords inside Docker container images." },
      { id: 'D', text: "Disable passwords across all production database instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use encrypted secret repositories (e.g., Sealed Secrets, SOPS) or external secret operators that resolve credentials from KMS/Vault at runtime. Kubernetes Secrets are merely base64-encoded, not encrypted. Committing raw Secret YAML to Git exposes credentials to anyone with repository read access. GitOps secret solutions either encrypt secrets before committing to Git (SOPS/Sealed Secrets) or fetch them dynamically from external vaults.",
    referenceUrl: "https://www.cncf.io/blog/2021/04/13/secrets-management-in-a-gitops-world/",
    tags: ["Secret Fundamentals", "Secret Problem in GitOps", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-453",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "The Secret Management Problem in GitOps: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Secret Fundamentals to manage sensitive database passwords in a GitOps workflow without committing plaintext credentials to version control.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Why plaintext secrets must never be committed to Git and secret storage patterns is under consideration.",
    options: [
      { id: 'A', text: "Use encrypted secret repositories (e.g., Sealed Secrets, SOPS) or external secret operators that resolve credentials from KMS/Vault at runtime." },
      { id: 'B', text: "Commit base64-encoded Kubernetes Secret YAML directly to the public Git repository." },
      { id: 'C', text: "Hardcode passwords inside Docker container images." },
      { id: 'D', text: "Disable passwords across all production database instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use encrypted secret repositories (e.g., Sealed Secrets, SOPS) or external secret operators that resolve credentials from KMS/Vault at runtime. Kubernetes Secrets are merely base64-encoded, not encrypted. Committing raw Secret YAML to Git exposes credentials to anyone with repository read access. GitOps secret solutions either encrypt secrets before committing to Git (SOPS/Sealed Secrets) or fetch them dynamically from external vaults.",
    referenceUrl: "https://www.cncf.io/blog/2021/04/13/secrets-management-in-a-gitops-world/",
    tags: ["Secret Fundamentals", "Secret Problem in GitOps", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-454",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "The Secret Management Problem in GitOps: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Secret Fundamentals to manage sensitive database passwords in a GitOps workflow without committing plaintext credentials to version control.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Why plaintext secrets must never be committed to Git and secret storage patterns is under consideration.",
    options: [
      { id: 'A', text: "Use encrypted secret repositories (e.g., Sealed Secrets, SOPS) or external secret operators that resolve credentials from KMS/Vault at runtime." },
      { id: 'B', text: "Commit base64-encoded Kubernetes Secret YAML directly to the public Git repository." },
      { id: 'C', text: "Hardcode passwords inside Docker container images." },
      { id: 'D', text: "Disable passwords across all production database instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use encrypted secret repositories (e.g., Sealed Secrets, SOPS) or external secret operators that resolve credentials from KMS/Vault at runtime. Kubernetes Secrets are merely base64-encoded, not encrypted. Committing raw Secret YAML to Git exposes credentials to anyone with repository read access. GitOps secret solutions either encrypt secrets before committing to Git (SOPS/Sealed Secrets) or fetch them dynamically from external vaults.",
    referenceUrl: "https://www.cncf.io/blog/2021/04/13/secrets-management-in-a-gitops-world/",
    tags: ["Secret Fundamentals", "Secret Problem in GitOps", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-455",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "The Secret Management Problem in GitOps: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Secret Fundamentals to manage sensitive database passwords in a GitOps workflow without committing plaintext credentials to version control.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Why plaintext secrets must never be committed to Git and secret storage patterns is under consideration.",
    options: [
      { id: 'A', text: "Use encrypted secret repositories (e.g., Sealed Secrets, SOPS) or external secret operators that resolve credentials from KMS/Vault at runtime." },
      { id: 'B', text: "Commit base64-encoded Kubernetes Secret YAML directly to the public Git repository." },
      { id: 'C', text: "Hardcode passwords inside Docker container images." },
      { id: 'D', text: "Disable passwords across all production database instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use encrypted secret repositories (e.g., Sealed Secrets, SOPS) or external secret operators that resolve credentials from KMS/Vault at runtime. Kubernetes Secrets are merely base64-encoded, not encrypted. Committing raw Secret YAML to Git exposes credentials to anyone with repository read access. GitOps secret solutions either encrypt secrets before committing to Git (SOPS/Sealed Secrets) or fetch them dynamically from external vaults.",
    referenceUrl: "https://www.cncf.io/blog/2021/04/13/secrets-management-in-a-gitops-world/",
    tags: ["Secret Fundamentals", "Secret Problem in GitOps", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-456",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Sealed Secrets by Bitnami: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Sealed Secrets to allow developers to commit encrypted secrets to Git that can only be decrypted by the specific Kubernetes cluster controller.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Asymmetric encryption allowing safe storage of encrypted secrets in public Git repositories is under consideration.",
    options: [
      { id: 'A', text: "Encrypt secrets locally using `kubeseal` with the cluster's public key, generating a `SealedSecret` custom resource committed to Git." },
      { id: 'B', text: "Share the cluster's private decryption key with all developers." },
      { id: 'C', text: "Encrypt secrets using a symmetric password committed to `.gitignore`." },
      { id: 'D', text: "Commit unencrypted secrets and delete the Git commit history later." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Encrypt secrets locally using `kubeseal` with the cluster's public key, generating a `SealedSecret` custom resource committed to Git. Bitnami Sealed Secrets uses asymmetric public-key cryptography. Developers encrypt secrets offline using the cluster's public key via `kubeseal`. The resulting `SealedSecret` custom resource is safely committed to Git; only the in-cluster controller holding the private key can decrypt it into a Secret.",
    referenceUrl: "https://github.com/bitnami-labs/sealed-secrets",
    tags: ["Sealed Secrets", "Sealed Secrets", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-457",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Sealed Secrets by Bitnami: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Sealed Secrets to allow developers to commit encrypted secrets to Git that can only be decrypted by the specific Kubernetes cluster controller.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Asymmetric encryption allowing safe storage of encrypted secrets in public Git repositories is under consideration.",
    options: [
      { id: 'A', text: "Encrypt secrets locally using `kubeseal` with the cluster's public key, generating a `SealedSecret` custom resource committed to Git." },
      { id: 'B', text: "Share the cluster's private decryption key with all developers." },
      { id: 'C', text: "Encrypt secrets using a symmetric password committed to `.gitignore`." },
      { id: 'D', text: "Commit unencrypted secrets and delete the Git commit history later." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Encrypt secrets locally using `kubeseal` with the cluster's public key, generating a `SealedSecret` custom resource committed to Git. Bitnami Sealed Secrets uses asymmetric public-key cryptography. Developers encrypt secrets offline using the cluster's public key via `kubeseal`. The resulting `SealedSecret` custom resource is safely committed to Git; only the in-cluster controller holding the private key can decrypt it into a Secret.",
    referenceUrl: "https://github.com/bitnami-labs/sealed-secrets",
    tags: ["Sealed Secrets", "Sealed Secrets", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-458",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Sealed Secrets by Bitnami: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Sealed Secrets to allow developers to commit encrypted secrets to Git that can only be decrypted by the specific Kubernetes cluster controller.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Asymmetric encryption allowing safe storage of encrypted secrets in public Git repositories is under consideration.",
    options: [
      { id: 'A', text: "Encrypt secrets locally using `kubeseal` with the cluster's public key, generating a `SealedSecret` custom resource committed to Git." },
      { id: 'B', text: "Share the cluster's private decryption key with all developers." },
      { id: 'C', text: "Encrypt secrets using a symmetric password committed to `.gitignore`." },
      { id: 'D', text: "Commit unencrypted secrets and delete the Git commit history later." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Encrypt secrets locally using `kubeseal` with the cluster's public key, generating a `SealedSecret` custom resource committed to Git. Bitnami Sealed Secrets uses asymmetric public-key cryptography. Developers encrypt secrets offline using the cluster's public key via `kubeseal`. The resulting `SealedSecret` custom resource is safely committed to Git; only the in-cluster controller holding the private key can decrypt it into a Secret.",
    referenceUrl: "https://github.com/bitnami-labs/sealed-secrets",
    tags: ["Sealed Secrets", "Sealed Secrets", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-459",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Sealed Secrets by Bitnami: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Sealed Secrets to allow developers to commit encrypted secrets to Git that can only be decrypted by the specific Kubernetes cluster controller.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Asymmetric encryption allowing safe storage of encrypted secrets in public Git repositories is under consideration.",
    options: [
      { id: 'A', text: "Encrypt secrets locally using `kubeseal` with the cluster's public key, generating a `SealedSecret` custom resource committed to Git." },
      { id: 'B', text: "Share the cluster's private decryption key with all developers." },
      { id: 'C', text: "Encrypt secrets using a symmetric password committed to `.gitignore`." },
      { id: 'D', text: "Commit unencrypted secrets and delete the Git commit history later." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Encrypt secrets locally using `kubeseal` with the cluster's public key, generating a `SealedSecret` custom resource committed to Git. Bitnami Sealed Secrets uses asymmetric public-key cryptography. Developers encrypt secrets offline using the cluster's public key via `kubeseal`. The resulting `SealedSecret` custom resource is safely committed to Git; only the in-cluster controller holding the private key can decrypt it into a Secret.",
    referenceUrl: "https://github.com/bitnami-labs/sealed-secrets",
    tags: ["Sealed Secrets", "Sealed Secrets", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-460",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Sealed Secrets by Bitnami: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Sealed Secrets to allow developers to commit encrypted secrets to Git that can only be decrypted by the specific Kubernetes cluster controller.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Asymmetric encryption allowing safe storage of encrypted secrets in public Git repositories is under consideration.",
    options: [
      { id: 'A', text: "Encrypt secrets locally using `kubeseal` with the cluster's public key, generating a `SealedSecret` custom resource committed to Git." },
      { id: 'B', text: "Share the cluster's private decryption key with all developers." },
      { id: 'C', text: "Encrypt secrets using a symmetric password committed to `.gitignore`." },
      { id: 'D', text: "Commit unencrypted secrets and delete the Git commit history later." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Encrypt secrets locally using `kubeseal` with the cluster's public key, generating a `SealedSecret` custom resource committed to Git. Bitnami Sealed Secrets uses asymmetric public-key cryptography. Developers encrypt secrets offline using the cluster's public key via `kubeseal`. The resulting `SealedSecret` custom resource is safely committed to Git; only the in-cluster controller holding the private key can decrypt it into a Secret.",
    referenceUrl: "https://github.com/bitnami-labs/sealed-secrets",
    tags: ["Sealed Secrets", "Sealed Secrets", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-461",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Mozilla SOPS for GitOps Secret Encryption: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Mozilla SOPS to encrypt only the sensitive value fields in a Kubernetes Secret manifest while leaving metadata, keys, and structure visible in Git for diffing.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Encrypting YAML values with KMS, PGP, or age while preserving manifest structure and keys is under consideration.",
    options: [
      { id: 'A', text: "Use Mozilla SOPS with cloud KMS (AWS KMS, GCP KMS, Azure Key Vault, or age) and integrate with Flux decryption or Argo CD plugins." },
      { id: 'B', text: "Encrypt the entire YAML file into an unreadable binary blob that cannot be diffed in pull requests." },
      { id: 'C', text: "Store encryption keys in plaintext inside the repository root." },
      { id: 'D', text: "Use standard GPG encryption on the entire repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Mozilla SOPS with cloud KMS (AWS KMS, GCP KMS, Azure Key Vault, or age) and integrate with Flux decryption or Argo CD plugins. Mozilla SOPS encrypts only the values of YAML/JSON keys while keeping the keys and metadata unencrypted. This allows engineers and CI tools to review structural pull request diffs in Git while protecting sensitive values using cloud KMS or age keys.",
    referenceUrl: "https://fluxcd.io/flux/guides/mozilla-sops/",
    tags: ["Mozilla SOPS", "Mozilla SOPS", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-462",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Mozilla SOPS for GitOps Secret Encryption: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Mozilla SOPS to encrypt only the sensitive value fields in a Kubernetes Secret manifest while leaving metadata, keys, and structure visible in Git for diffing.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Encrypting YAML values with KMS, PGP, or age while preserving manifest structure and keys is under consideration.",
    options: [
      { id: 'A', text: "Use Mozilla SOPS with cloud KMS (AWS KMS, GCP KMS, Azure Key Vault, or age) and integrate with Flux decryption or Argo CD plugins." },
      { id: 'B', text: "Encrypt the entire YAML file into an unreadable binary blob that cannot be diffed in pull requests." },
      { id: 'C', text: "Store encryption keys in plaintext inside the repository root." },
      { id: 'D', text: "Use standard GPG encryption on the entire repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Mozilla SOPS with cloud KMS (AWS KMS, GCP KMS, Azure Key Vault, or age) and integrate with Flux decryption or Argo CD plugins. Mozilla SOPS encrypts only the values of YAML/JSON keys while keeping the keys and metadata unencrypted. This allows engineers and CI tools to review structural pull request diffs in Git while protecting sensitive values using cloud KMS or age keys.",
    referenceUrl: "https://fluxcd.io/flux/guides/mozilla-sops/",
    tags: ["Mozilla SOPS", "Mozilla SOPS", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-463",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Mozilla SOPS for GitOps Secret Encryption: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Mozilla SOPS to encrypt only the sensitive value fields in a Kubernetes Secret manifest while leaving metadata, keys, and structure visible in Git for diffing.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Encrypting YAML values with KMS, PGP, or age while preserving manifest structure and keys is under consideration.",
    options: [
      { id: 'A', text: "Use Mozilla SOPS with cloud KMS (AWS KMS, GCP KMS, Azure Key Vault, or age) and integrate with Flux decryption or Argo CD plugins." },
      { id: 'B', text: "Encrypt the entire YAML file into an unreadable binary blob that cannot be diffed in pull requests." },
      { id: 'C', text: "Store encryption keys in plaintext inside the repository root." },
      { id: 'D', text: "Use standard GPG encryption on the entire repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Mozilla SOPS with cloud KMS (AWS KMS, GCP KMS, Azure Key Vault, or age) and integrate with Flux decryption or Argo CD plugins. Mozilla SOPS encrypts only the values of YAML/JSON keys while keeping the keys and metadata unencrypted. This allows engineers and CI tools to review structural pull request diffs in Git while protecting sensitive values using cloud KMS or age keys.",
    referenceUrl: "https://fluxcd.io/flux/guides/mozilla-sops/",
    tags: ["Mozilla SOPS", "Mozilla SOPS", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-464",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Mozilla SOPS for GitOps Secret Encryption: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Mozilla SOPS to encrypt only the sensitive value fields in a Kubernetes Secret manifest while leaving metadata, keys, and structure visible in Git for diffing.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Encrypting YAML values with KMS, PGP, or age while preserving manifest structure and keys is under consideration.",
    options: [
      { id: 'A', text: "Use Mozilla SOPS with cloud KMS (AWS KMS, GCP KMS, Azure Key Vault, or age) and integrate with Flux decryption or Argo CD plugins." },
      { id: 'B', text: "Encrypt the entire YAML file into an unreadable binary blob that cannot be diffed in pull requests." },
      { id: 'C', text: "Store encryption keys in plaintext inside the repository root." },
      { id: 'D', text: "Use standard GPG encryption on the entire repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Mozilla SOPS with cloud KMS (AWS KMS, GCP KMS, Azure Key Vault, or age) and integrate with Flux decryption or Argo CD plugins. Mozilla SOPS encrypts only the values of YAML/JSON keys while keeping the keys and metadata unencrypted. This allows engineers and CI tools to review structural pull request diffs in Git while protecting sensitive values using cloud KMS or age keys.",
    referenceUrl: "https://fluxcd.io/flux/guides/mozilla-sops/",
    tags: ["Mozilla SOPS", "Mozilla SOPS", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-465",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Mozilla SOPS for GitOps Secret Encryption: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Mozilla SOPS to encrypt only the sensitive value fields in a Kubernetes Secret manifest while leaving metadata, keys, and structure visible in Git for diffing.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Encrypting YAML values with KMS, PGP, or age while preserving manifest structure and keys is under consideration.",
    options: [
      { id: 'A', text: "Use Mozilla SOPS with cloud KMS (AWS KMS, GCP KMS, Azure Key Vault, or age) and integrate with Flux decryption or Argo CD plugins." },
      { id: 'B', text: "Encrypt the entire YAML file into an unreadable binary blob that cannot be diffed in pull requests." },
      { id: 'C', text: "Store encryption keys in plaintext inside the repository root." },
      { id: 'D', text: "Use standard GPG encryption on the entire repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Mozilla SOPS with cloud KMS (AWS KMS, GCP KMS, Azure Key Vault, or age) and integrate with Flux decryption or Argo CD plugins. Mozilla SOPS encrypts only the values of YAML/JSON keys while keeping the keys and metadata unencrypted. This allows engineers and CI tools to review structural pull request diffs in Git while protecting sensitive values using cloud KMS or age keys.",
    referenceUrl: "https://fluxcd.io/flux/guides/mozilla-sops/",
    tags: ["Mozilla SOPS", "Mozilla SOPS", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-466",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "External Secrets Operator (ESO): Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates External Secrets to synchronize production database credentials managed in AWS Secrets Manager or HashiCorp Vault into native Kubernetes Secrets automatically.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Synchronizing secrets from AWS Secrets Manager, HashiCorp Vault, and Azure Key Vault into Kubernetes is under consideration.",
    options: [
      { id: 'A', text: "Deploy the External Secrets Operator (ESO) and configure `SecretStore` and `ExternalSecret` CRDs in Git." },
      { id: 'B', text: "Write a custom bash script running on an EC2 instance that runs `kubectl create secret` every 5 minutes." },
      { id: 'C', text: "Copy passwords manually from the AWS Console and paste them into terminal commands." },
      { id: 'D', text: "Require applications to query AWS Secrets Manager APIs directly on every HTTP request." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the External Secrets Operator (ESO) and configure `SecretStore` and `ExternalSecret` CRDs in Git. The External Secrets Operator (ESO) integrates external secret management systems (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault, GCP Secret Manager) with Kubernetes. An `ExternalSecret` resource declared in Git instructs the operator to fetch the secret and create a native Kubernetes Secret.",
    referenceUrl: "https://external-secrets.io/latest/",
    tags: ["External Secrets", "External Secrets Operator", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-467",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "External Secrets Operator (ESO): High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates External Secrets to synchronize production database credentials managed in AWS Secrets Manager or HashiCorp Vault into native Kubernetes Secrets automatically.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Synchronizing secrets from AWS Secrets Manager, HashiCorp Vault, and Azure Key Vault into Kubernetes is under consideration.",
    options: [
      { id: 'A', text: "Deploy the External Secrets Operator (ESO) and configure `SecretStore` and `ExternalSecret` CRDs in Git." },
      { id: 'B', text: "Write a custom bash script running on an EC2 instance that runs `kubectl create secret` every 5 minutes." },
      { id: 'C', text: "Copy passwords manually from the AWS Console and paste them into terminal commands." },
      { id: 'D', text: "Require applications to query AWS Secrets Manager APIs directly on every HTTP request." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the External Secrets Operator (ESO) and configure `SecretStore` and `ExternalSecret` CRDs in Git. The External Secrets Operator (ESO) integrates external secret management systems (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault, GCP Secret Manager) with Kubernetes. An `ExternalSecret` resource declared in Git instructs the operator to fetch the secret and create a native Kubernetes Secret.",
    referenceUrl: "https://external-secrets.io/latest/",
    tags: ["External Secrets", "External Secrets Operator", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-468",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "External Secrets Operator (ESO): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates External Secrets to synchronize production database credentials managed in AWS Secrets Manager or HashiCorp Vault into native Kubernetes Secrets automatically.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Synchronizing secrets from AWS Secrets Manager, HashiCorp Vault, and Azure Key Vault into Kubernetes is under consideration.",
    options: [
      { id: 'A', text: "Deploy the External Secrets Operator (ESO) and configure `SecretStore` and `ExternalSecret` CRDs in Git." },
      { id: 'B', text: "Write a custom bash script running on an EC2 instance that runs `kubectl create secret` every 5 minutes." },
      { id: 'C', text: "Copy passwords manually from the AWS Console and paste them into terminal commands." },
      { id: 'D', text: "Require applications to query AWS Secrets Manager APIs directly on every HTTP request." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the External Secrets Operator (ESO) and configure `SecretStore` and `ExternalSecret` CRDs in Git. The External Secrets Operator (ESO) integrates external secret management systems (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault, GCP Secret Manager) with Kubernetes. An `ExternalSecret` resource declared in Git instructs the operator to fetch the secret and create a native Kubernetes Secret.",
    referenceUrl: "https://external-secrets.io/latest/",
    tags: ["External Secrets", "External Secrets Operator", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-469",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "External Secrets Operator (ESO): Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates External Secrets to synchronize production database credentials managed in AWS Secrets Manager or HashiCorp Vault into native Kubernetes Secrets automatically.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Synchronizing secrets from AWS Secrets Manager, HashiCorp Vault, and Azure Key Vault into Kubernetes is under consideration.",
    options: [
      { id: 'A', text: "Deploy the External Secrets Operator (ESO) and configure `SecretStore` and `ExternalSecret` CRDs in Git." },
      { id: 'B', text: "Write a custom bash script running on an EC2 instance that runs `kubectl create secret` every 5 minutes." },
      { id: 'C', text: "Copy passwords manually from the AWS Console and paste them into terminal commands." },
      { id: 'D', text: "Require applications to query AWS Secrets Manager APIs directly on every HTTP request." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the External Secrets Operator (ESO) and configure `SecretStore` and `ExternalSecret` CRDs in Git. The External Secrets Operator (ESO) integrates external secret management systems (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault, GCP Secret Manager) with Kubernetes. An `ExternalSecret` resource declared in Git instructs the operator to fetch the secret and create a native Kubernetes Secret.",
    referenceUrl: "https://external-secrets.io/latest/",
    tags: ["External Secrets", "External Secrets Operator", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-470",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "External Secrets Operator (ESO): Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates External Secrets to synchronize production database credentials managed in AWS Secrets Manager or HashiCorp Vault into native Kubernetes Secrets automatically.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Synchronizing secrets from AWS Secrets Manager, HashiCorp Vault, and Azure Key Vault into Kubernetes is under consideration.",
    options: [
      { id: 'A', text: "Deploy the External Secrets Operator (ESO) and configure `SecretStore` and `ExternalSecret` CRDs in Git." },
      { id: 'B', text: "Write a custom bash script running on an EC2 instance that runs `kubectl create secret` every 5 minutes." },
      { id: 'C', text: "Copy passwords manually from the AWS Console and paste them into terminal commands." },
      { id: 'D', text: "Require applications to query AWS Secrets Manager APIs directly on every HTTP request." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the External Secrets Operator (ESO) and configure `SecretStore` and `ExternalSecret` CRDs in Git. The External Secrets Operator (ESO) integrates external secret management systems (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault, GCP Secret Manager) with Kubernetes. An `ExternalSecret` resource declared in Git instructs the operator to fetch the secret and create a native Kubernetes Secret.",
    referenceUrl: "https://external-secrets.io/latest/",
    tags: ["External Secrets", "External Secrets Operator", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-471",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "HashiCorp Vault Integration with GitOps: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Vault Integration to inject dynamically rotated database credentials from HashiCorp Vault into application pods without persisting Secrets in etcd or Git.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Injecting secrets into pods via Vault Agent Sidecar or Vault CSI Provider is under consideration.",
    options: [
      { id: 'A', text: "Use the HashiCorp Vault Secrets Operator or Vault Agent Injector sidecar to inject secrets directly into ephemeral pod in-memory volumes." },
      { id: 'B', text: "Hardcode the Vault root token inside the Git repository." },
      { id: 'C', text: "Export Vault secrets to plaintext CSV files stored in Git." },
      { id: 'D', text: "Disable Vault encryption policies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the HashiCorp Vault Secrets Operator or Vault Agent Injector sidecar to inject secrets directly into ephemeral pod in-memory volumes. The Vault Agent Injector and Vault Secrets Operator provide secure, zero-persistence secret delivery. Applications consume secrets mounted in-memory or injected into environment variables without writing sensitive credentials to Git or persisting static secrets in the Kubernetes etcd database.",
    referenceUrl: "https://developer.hashicorp.com/vault/docs/platform/k8s",
    tags: ["Vault Integration", "Vault Kubernetes", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-472",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "HashiCorp Vault Integration with GitOps: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Vault Integration to inject dynamically rotated database credentials from HashiCorp Vault into application pods without persisting Secrets in etcd or Git.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Injecting secrets into pods via Vault Agent Sidecar or Vault CSI Provider is under consideration.",
    options: [
      { id: 'A', text: "Use the HashiCorp Vault Secrets Operator or Vault Agent Injector sidecar to inject secrets directly into ephemeral pod in-memory volumes." },
      { id: 'B', text: "Hardcode the Vault root token inside the Git repository." },
      { id: 'C', text: "Export Vault secrets to plaintext CSV files stored in Git." },
      { id: 'D', text: "Disable Vault encryption policies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the HashiCorp Vault Secrets Operator or Vault Agent Injector sidecar to inject secrets directly into ephemeral pod in-memory volumes. The Vault Agent Injector and Vault Secrets Operator provide secure, zero-persistence secret delivery. Applications consume secrets mounted in-memory or injected into environment variables without writing sensitive credentials to Git or persisting static secrets in the Kubernetes etcd database.",
    referenceUrl: "https://developer.hashicorp.com/vault/docs/platform/k8s",
    tags: ["Vault Integration", "Vault Kubernetes", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-473",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "HashiCorp Vault Integration with GitOps: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Vault Integration to inject dynamically rotated database credentials from HashiCorp Vault into application pods without persisting Secrets in etcd or Git.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Injecting secrets into pods via Vault Agent Sidecar or Vault CSI Provider is under consideration.",
    options: [
      { id: 'A', text: "Use the HashiCorp Vault Secrets Operator or Vault Agent Injector sidecar to inject secrets directly into ephemeral pod in-memory volumes." },
      { id: 'B', text: "Hardcode the Vault root token inside the Git repository." },
      { id: 'C', text: "Export Vault secrets to plaintext CSV files stored in Git." },
      { id: 'D', text: "Disable Vault encryption policies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the HashiCorp Vault Secrets Operator or Vault Agent Injector sidecar to inject secrets directly into ephemeral pod in-memory volumes. The Vault Agent Injector and Vault Secrets Operator provide secure, zero-persistence secret delivery. Applications consume secrets mounted in-memory or injected into environment variables without writing sensitive credentials to Git or persisting static secrets in the Kubernetes etcd database.",
    referenceUrl: "https://developer.hashicorp.com/vault/docs/platform/k8s",
    tags: ["Vault Integration", "Vault Kubernetes", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-474",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "HashiCorp Vault Integration with GitOps: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Vault Integration to inject dynamically rotated database credentials from HashiCorp Vault into application pods without persisting Secrets in etcd or Git.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Injecting secrets into pods via Vault Agent Sidecar or Vault CSI Provider is under consideration.",
    options: [
      { id: 'A', text: "Use the HashiCorp Vault Secrets Operator or Vault Agent Injector sidecar to inject secrets directly into ephemeral pod in-memory volumes." },
      { id: 'B', text: "Hardcode the Vault root token inside the Git repository." },
      { id: 'C', text: "Export Vault secrets to plaintext CSV files stored in Git." },
      { id: 'D', text: "Disable Vault encryption policies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the HashiCorp Vault Secrets Operator or Vault Agent Injector sidecar to inject secrets directly into ephemeral pod in-memory volumes. The Vault Agent Injector and Vault Secrets Operator provide secure, zero-persistence secret delivery. Applications consume secrets mounted in-memory or injected into environment variables without writing sensitive credentials to Git or persisting static secrets in the Kubernetes etcd database.",
    referenceUrl: "https://developer.hashicorp.com/vault/docs/platform/k8s",
    tags: ["Vault Integration", "Vault Kubernetes", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-475",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "HashiCorp Vault Integration with GitOps: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Vault Integration to inject dynamically rotated database credentials from HashiCorp Vault into application pods without persisting Secrets in etcd or Git.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Injecting secrets into pods via Vault Agent Sidecar or Vault CSI Provider is under consideration.",
    options: [
      { id: 'A', text: "Use the HashiCorp Vault Secrets Operator or Vault Agent Injector sidecar to inject secrets directly into ephemeral pod in-memory volumes." },
      { id: 'B', text: "Hardcode the Vault root token inside the Git repository." },
      { id: 'C', text: "Export Vault secrets to plaintext CSV files stored in Git." },
      { id: 'D', text: "Disable Vault encryption policies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the HashiCorp Vault Secrets Operator or Vault Agent Injector sidecar to inject secrets directly into ephemeral pod in-memory volumes. The Vault Agent Injector and Vault Secrets Operator provide secure, zero-persistence secret delivery. Applications consume secrets mounted in-memory or injected into environment variables without writing sensitive credentials to Git or persisting static secrets in the Kubernetes etcd database.",
    referenceUrl: "https://developer.hashicorp.com/vault/docs/platform/k8s",
    tags: ["Vault Integration", "Vault Kubernetes", "Resilience Failure"]
  }
];

export default CNCF_CGOA_QUESTIONS_19;
