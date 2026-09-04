export const CNCF_CGOA_FLASHCARDS_19 = [
  {
    id: "cncf-cgoa-fc-451",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "The GitOps Secret Management Challenge (Dr Failover)",
    hint: "Preventing plaintext credential leaks in public and private Git repositories.",
    back: "Because standard Kubernetes Secrets are only base64-encoded, GitOps requires <strong>encrypting secrets pre-commit (SOPS/Sealed Secrets)</strong> or pulling credentials dynamically from external vaults.",
    tags: ["Secret Fundamentals", "Secret Problem in GitOps", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-fc-452",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "The GitOps Secret Management Challenge (High Load Scale)",
    hint: "Preventing plaintext credential leaks in public and private Git repositories.",
    back: "Because standard Kubernetes Secrets are only base64-encoded, GitOps requires <strong>encrypting secrets pre-commit (SOPS/Sealed Secrets)</strong> or pulling credentials dynamically from external vaults.",
    tags: ["Secret Fundamentals", "Secret Problem in GitOps", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-fc-453",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "The GitOps Secret Management Challenge (Security Compliance)",
    hint: "Preventing plaintext credential leaks in public and private Git repositories.",
    back: "Because standard Kubernetes Secrets are only base64-encoded, GitOps requires <strong>encrypting secrets pre-commit (SOPS/Sealed Secrets)</strong> or pulling credentials dynamically from external vaults.",
    tags: ["Secret Fundamentals", "Secret Problem in GitOps", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-fc-454",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "The GitOps Secret Management Challenge (Hybrid Migration)",
    hint: "Preventing plaintext credential leaks in public and private Git repositories.",
    back: "Because standard Kubernetes Secrets are only base64-encoded, GitOps requires <strong>encrypting secrets pre-commit (SOPS/Sealed Secrets)</strong> or pulling credentials dynamically from external vaults.",
    tags: ["Secret Fundamentals", "Secret Problem in GitOps", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-fc-455",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "The GitOps Secret Management Challenge (Resilience Failure)",
    hint: "Preventing plaintext credential leaks in public and private Git repositories.",
    back: "Because standard Kubernetes Secrets are only base64-encoded, GitOps requires <strong>encrypting secrets pre-commit (SOPS/Sealed Secrets)</strong> or pulling credentials dynamically from external vaults.",
    tags: ["Secret Fundamentals", "Secret Problem in GitOps", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-fc-456",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Bitnami Sealed Secrets Architecture (Dr Failover)",
    hint: "Asymmetric offline encryption allowing safe storage of secrets in Git.",
    back: "<strong>Bitnami Sealed Secrets</strong> encrypts secrets using the cluster's public key (<code>kubeseal</code>); only the in-cluster controller holding the private key can decrypt the resource into a live Secret.",
    tags: ["Sealed Secrets", "Sealed Secrets", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-fc-457",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Bitnami Sealed Secrets Architecture (High Load Scale)",
    hint: "Asymmetric offline encryption allowing safe storage of secrets in Git.",
    back: "<strong>Bitnami Sealed Secrets</strong> encrypts secrets using the cluster's public key (<code>kubeseal</code>); only the in-cluster controller holding the private key can decrypt the resource into a live Secret.",
    tags: ["Sealed Secrets", "Sealed Secrets", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-fc-458",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Bitnami Sealed Secrets Architecture (Security Compliance)",
    hint: "Asymmetric offline encryption allowing safe storage of secrets in Git.",
    back: "<strong>Bitnami Sealed Secrets</strong> encrypts secrets using the cluster's public key (<code>kubeseal</code>); only the in-cluster controller holding the private key can decrypt the resource into a live Secret.",
    tags: ["Sealed Secrets", "Sealed Secrets", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-fc-459",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Bitnami Sealed Secrets Architecture (Hybrid Migration)",
    hint: "Asymmetric offline encryption allowing safe storage of secrets in Git.",
    back: "<strong>Bitnami Sealed Secrets</strong> encrypts secrets using the cluster's public key (<code>kubeseal</code>); only the in-cluster controller holding the private key can decrypt the resource into a live Secret.",
    tags: ["Sealed Secrets", "Sealed Secrets", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-fc-460",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Bitnami Sealed Secrets Architecture (Resilience Failure)",
    hint: "Asymmetric offline encryption allowing safe storage of secrets in Git.",
    back: "<strong>Bitnami Sealed Secrets</strong> encrypts secrets using the cluster's public key (<code>kubeseal</code>); only the in-cluster controller holding the private key can decrypt the resource into a live Secret.",
    tags: ["Sealed Secrets", "Sealed Secrets", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-fc-461",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Mozilla SOPS Value-Level Encryption (Dr Failover)",
    hint: "Encrypting sensitive manifest values with cloud KMS while keeping keys readable in Git.",
    back: "<strong>Mozilla SOPS</strong> encrypts only the sensitive values within YAML files while leaving structure and keys readable, enabling clear Git pull request diffs alongside cloud KMS encryption.",
    tags: ["Mozilla SOPS", "Mozilla SOPS", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-fc-462",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Mozilla SOPS Value-Level Encryption (High Load Scale)",
    hint: "Encrypting sensitive manifest values with cloud KMS while keeping keys readable in Git.",
    back: "<strong>Mozilla SOPS</strong> encrypts only the sensitive values within YAML files while leaving structure and keys readable, enabling clear Git pull request diffs alongside cloud KMS encryption.",
    tags: ["Mozilla SOPS", "Mozilla SOPS", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-fc-463",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Mozilla SOPS Value-Level Encryption (Security Compliance)",
    hint: "Encrypting sensitive manifest values with cloud KMS while keeping keys readable in Git.",
    back: "<strong>Mozilla SOPS</strong> encrypts only the sensitive values within YAML files while leaving structure and keys readable, enabling clear Git pull request diffs alongside cloud KMS encryption.",
    tags: ["Mozilla SOPS", "Mozilla SOPS", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-fc-464",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Mozilla SOPS Value-Level Encryption (Hybrid Migration)",
    hint: "Encrypting sensitive manifest values with cloud KMS while keeping keys readable in Git.",
    back: "<strong>Mozilla SOPS</strong> encrypts only the sensitive values within YAML files while leaving structure and keys readable, enabling clear Git pull request diffs alongside cloud KMS encryption.",
    tags: ["Mozilla SOPS", "Mozilla SOPS", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-fc-465",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Mozilla SOPS Value-Level Encryption (Resilience Failure)",
    hint: "Encrypting sensitive manifest values with cloud KMS while keeping keys readable in Git.",
    back: "<strong>Mozilla SOPS</strong> encrypts only the sensitive values within YAML files while leaving structure and keys readable, enabling clear Git pull request diffs alongside cloud KMS encryption.",
    tags: ["Mozilla SOPS", "Mozilla SOPS", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-fc-466",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "External Secrets Operator (ESO) (Dr Failover)",
    hint: "Decoupling secret storage by pulling credentials from external enterprise vaults.",
    back: "The <strong>External Secrets Operator (ESO)</strong> reads <code>ExternalSecret</code> manifests declared in Git to pull credentials dynamically from AWS Secrets Manager or HashiCorp Vault into local Secrets.",
    tags: ["External Secrets", "External Secrets Operator", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-fc-467",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "External Secrets Operator (ESO) (High Load Scale)",
    hint: "Decoupling secret storage by pulling credentials from external enterprise vaults.",
    back: "The <strong>External Secrets Operator (ESO)</strong> reads <code>ExternalSecret</code> manifests declared in Git to pull credentials dynamically from AWS Secrets Manager or HashiCorp Vault into local Secrets.",
    tags: ["External Secrets", "External Secrets Operator", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-fc-468",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "External Secrets Operator (ESO) (Security Compliance)",
    hint: "Decoupling secret storage by pulling credentials from external enterprise vaults.",
    back: "The <strong>External Secrets Operator (ESO)</strong> reads <code>ExternalSecret</code> manifests declared in Git to pull credentials dynamically from AWS Secrets Manager or HashiCorp Vault into local Secrets.",
    tags: ["External Secrets", "External Secrets Operator", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-fc-469",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "External Secrets Operator (ESO) (Hybrid Migration)",
    hint: "Decoupling secret storage by pulling credentials from external enterprise vaults.",
    back: "The <strong>External Secrets Operator (ESO)</strong> reads <code>ExternalSecret</code> manifests declared in Git to pull credentials dynamically from AWS Secrets Manager or HashiCorp Vault into local Secrets.",
    tags: ["External Secrets", "External Secrets Operator", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-fc-470",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "External Secrets Operator (ESO) (Resilience Failure)",
    hint: "Decoupling secret storage by pulling credentials from external enterprise vaults.",
    back: "The <strong>External Secrets Operator (ESO)</strong> reads <code>ExternalSecret</code> manifests declared in Git to pull credentials dynamically from AWS Secrets Manager or HashiCorp Vault into local Secrets.",
    tags: ["External Secrets", "External Secrets Operator", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-fc-471",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "HashiCorp Vault Integration in Kubernetes (Dr Failover)",
    hint: "Injecting dynamic credentials into pods without persisting secrets in Git or etcd.",
    back: "Using the <strong>Vault Agent Injector or Secrets Operator</strong> streams dynamic secrets directly into in-memory pod volumes, avoiding credential persistence in Git repositories or etcd storage.",
    tags: ["Vault Integration", "Vault Kubernetes", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-fc-472",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "HashiCorp Vault Integration in Kubernetes (High Load Scale)",
    hint: "Injecting dynamic credentials into pods without persisting secrets in Git or etcd.",
    back: "Using the <strong>Vault Agent Injector or Secrets Operator</strong> streams dynamic secrets directly into in-memory pod volumes, avoiding credential persistence in Git repositories or etcd storage.",
    tags: ["Vault Integration", "Vault Kubernetes", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-fc-473",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "HashiCorp Vault Integration in Kubernetes (Security Compliance)",
    hint: "Injecting dynamic credentials into pods without persisting secrets in Git or etcd.",
    back: "Using the <strong>Vault Agent Injector or Secrets Operator</strong> streams dynamic secrets directly into in-memory pod volumes, avoiding credential persistence in Git repositories or etcd storage.",
    tags: ["Vault Integration", "Vault Kubernetes", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-fc-474",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "HashiCorp Vault Integration in Kubernetes (Hybrid Migration)",
    hint: "Injecting dynamic credentials into pods without persisting secrets in Git or etcd.",
    back: "Using the <strong>Vault Agent Injector or Secrets Operator</strong> streams dynamic secrets directly into in-memory pod volumes, avoiding credential persistence in Git repositories or etcd storage.",
    tags: ["Vault Integration", "Vault Kubernetes", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-fc-475",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "HashiCorp Vault Integration in Kubernetes (Resilience Failure)",
    hint: "Injecting dynamic credentials into pods without persisting secrets in Git or etcd.",
    back: "Using the <strong>Vault Agent Injector or Secrets Operator</strong> streams dynamic secrets directly into in-memory pod volumes, avoiding credential persistence in Git repositories or etcd storage.",
    tags: ["Vault Integration", "Vault Kubernetes", "Resilience Failure"]
  }
];

export default CNCF_CGOA_FLASHCARDS_19;
