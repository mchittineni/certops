export const K8S_CKS_FLASHCARDS_17 = [
  {
    id: "k8s-cks-fc-401",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Immutable Container Image Digests (Dr Failover)",
    hint: "Preventing tag-spoofing and ensuring bit-identical deployments via SHA256 digests.",
    back: "Referencing container images by their <strong>SHA256 digest</strong> guarantees bit-identical deployment across nodes, neutralizing tag-hijacking and registry tampering attacks.",
    tags: ["Image Digests", "Image Digests", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-402",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Immutable Container Image Digests (High Load Scale)",
    hint: "Preventing tag-spoofing and ensuring bit-identical deployments via SHA256 digests.",
    back: "Referencing container images by their <strong>SHA256 digest</strong> guarantees bit-identical deployment across nodes, neutralizing tag-hijacking and registry tampering attacks.",
    tags: ["Image Digests", "Image Digests", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-403",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Immutable Container Image Digests (Security Compliance)",
    hint: "Preventing tag-spoofing and ensuring bit-identical deployments via SHA256 digests.",
    back: "Referencing container images by their <strong>SHA256 digest</strong> guarantees bit-identical deployment across nodes, neutralizing tag-hijacking and registry tampering attacks.",
    tags: ["Image Digests", "Image Digests", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-404",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Immutable Container Image Digests (Hybrid Migration)",
    hint: "Preventing tag-spoofing and ensuring bit-identical deployments via SHA256 digests.",
    back: "Referencing container images by their <strong>SHA256 digest</strong> guarantees bit-identical deployment across nodes, neutralizing tag-hijacking and registry tampering attacks.",
    tags: ["Image Digests", "Image Digests", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-405",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Immutable Container Image Digests (Resilience Failure)",
    hint: "Preventing tag-spoofing and ensuring bit-identical deployments via SHA256 digests.",
    back: "Referencing container images by their <strong>SHA256 digest</strong> guarantees bit-identical deployment across nodes, neutralizing tag-hijacking and registry tampering attacks.",
    tags: ["Image Digests", "Image Digests", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-406",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Securing Registries with imagePullSecrets (Dr Failover)",
    hint: "Restricting container image retrieval using authenticated dockerconfigjson secrets.",
    back: "Configuring <strong>imagePullSecrets</strong> with a <code>dockerconfigjson</code> Secret ensures worker nodes authenticate securely when pulling proprietary images from private enterprise registries.",
    tags: ["Registry Security", "imagePullSecrets", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-407",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Securing Registries with imagePullSecrets (High Load Scale)",
    hint: "Restricting container image retrieval using authenticated dockerconfigjson secrets.",
    back: "Configuring <strong>imagePullSecrets</strong> with a <code>dockerconfigjson</code> Secret ensures worker nodes authenticate securely when pulling proprietary images from private enterprise registries.",
    tags: ["Registry Security", "imagePullSecrets", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-408",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Securing Registries with imagePullSecrets (Security Compliance)",
    hint: "Restricting container image retrieval using authenticated dockerconfigjson secrets.",
    back: "Configuring <strong>imagePullSecrets</strong> with a <code>dockerconfigjson</code> Secret ensures worker nodes authenticate securely when pulling proprietary images from private enterprise registries.",
    tags: ["Registry Security", "imagePullSecrets", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-409",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Securing Registries with imagePullSecrets (Hybrid Migration)",
    hint: "Restricting container image retrieval using authenticated dockerconfigjson secrets.",
    back: "Configuring <strong>imagePullSecrets</strong> with a <code>dockerconfigjson</code> Secret ensures worker nodes authenticate securely when pulling proprietary images from private enterprise registries.",
    tags: ["Registry Security", "imagePullSecrets", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-410",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Securing Registries with imagePullSecrets (Resilience Failure)",
    hint: "Restricting container image retrieval using authenticated dockerconfigjson secrets.",
    back: "Configuring <strong>imagePullSecrets</strong> with a <code>dockerconfigjson</code> Secret ensures worker nodes authenticate securely when pulling proprietary images from private enterprise registries.",
    tags: ["Registry Security", "imagePullSecrets", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-411",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Dockerfile Security Hardening (Dr Failover)",
    hint: "Eliminating unsafe build scripts, pinning versions, and enforcing non-root users.",
    back: "Hardening <strong>Dockerfiles</strong> involves pinning package versions, eliminating risky <code>curl | sh</code> instructions, running multi-stage builds, and defining unprivileged application users.",
    tags: ["Dockerfile Hardening", "Dockerfile Best Practices", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-412",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Dockerfile Security Hardening (High Load Scale)",
    hint: "Eliminating unsafe build scripts, pinning versions, and enforcing non-root users.",
    back: "Hardening <strong>Dockerfiles</strong> involves pinning package versions, eliminating risky <code>curl | sh</code> instructions, running multi-stage builds, and defining unprivileged application users.",
    tags: ["Dockerfile Hardening", "Dockerfile Best Practices", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-413",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Dockerfile Security Hardening (Security Compliance)",
    hint: "Eliminating unsafe build scripts, pinning versions, and enforcing non-root users.",
    back: "Hardening <strong>Dockerfiles</strong> involves pinning package versions, eliminating risky <code>curl | sh</code> instructions, running multi-stage builds, and defining unprivileged application users.",
    tags: ["Dockerfile Hardening", "Dockerfile Best Practices", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-414",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Dockerfile Security Hardening (Hybrid Migration)",
    hint: "Eliminating unsafe build scripts, pinning versions, and enforcing non-root users.",
    back: "Hardening <strong>Dockerfiles</strong> involves pinning package versions, eliminating risky <code>curl | sh</code> instructions, running multi-stage builds, and defining unprivileged application users.",
    tags: ["Dockerfile Hardening", "Dockerfile Best Practices", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-415",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Dockerfile Security Hardening (Resilience Failure)",
    hint: "Eliminating unsafe build scripts, pinning versions, and enforcing non-root users.",
    back: "Hardening <strong>Dockerfiles</strong> involves pinning package versions, eliminating risky <code>curl | sh</code> instructions, running multi-stage builds, and defining unprivileged application users.",
    tags: ["Dockerfile Hardening", "Dockerfile Best Practices", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-416",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Enforcing Approved Image Registries (Dr Failover)",
    hint: "Blocking unauthorized public container registries using admission controllers.",
    back: "Using admission controllers (Kyverno, OPA Gatekeeper) to enforce <strong>registry whitelists</strong> blocks containers pulled from untrusted public sources from executing in production.",
    tags: ["Registry Governance", "Registry Governance", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-417",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Enforcing Approved Image Registries (High Load Scale)",
    hint: "Blocking unauthorized public container registries using admission controllers.",
    back: "Using admission controllers (Kyverno, OPA Gatekeeper) to enforce <strong>registry whitelists</strong> blocks containers pulled from untrusted public sources from executing in production.",
    tags: ["Registry Governance", "Registry Governance", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-418",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Enforcing Approved Image Registries (Security Compliance)",
    hint: "Blocking unauthorized public container registries using admission controllers.",
    back: "Using admission controllers (Kyverno, OPA Gatekeeper) to enforce <strong>registry whitelists</strong> blocks containers pulled from untrusted public sources from executing in production.",
    tags: ["Registry Governance", "Registry Governance", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-419",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Enforcing Approved Image Registries (Hybrid Migration)",
    hint: "Blocking unauthorized public container registries using admission controllers.",
    back: "Using admission controllers (Kyverno, OPA Gatekeeper) to enforce <strong>registry whitelists</strong> blocks containers pulled from untrusted public sources from executing in production.",
    tags: ["Registry Governance", "Registry Governance", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-420",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Enforcing Approved Image Registries (Resilience Failure)",
    hint: "Blocking unauthorized public container registries using admission controllers.",
    back: "Using admission controllers (Kyverno, OPA Gatekeeper) to enforce <strong>registry whitelists</strong> blocks containers pulled from untrusted public sources from executing in production.",
    tags: ["Registry Governance", "Registry Governance", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-421",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Automated Application Dependency Auditing (Dr Failover)",
    hint: "Scanning language dependencies for known CVEs in CI pipelines.",
    back: "Integrating <strong>dependency auditing tools</strong> (such as govulncheck or npm audit) into CI pipelines catches vulnerable libraries before application code is packaged into container images.",
    tags: ["Dependency Auditing", "Dependency Auditing", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-422",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Automated Application Dependency Auditing (High Load Scale)",
    hint: "Scanning language dependencies for known CVEs in CI pipelines.",
    back: "Integrating <strong>dependency auditing tools</strong> (such as govulncheck or npm audit) into CI pipelines catches vulnerable libraries before application code is packaged into container images.",
    tags: ["Dependency Auditing", "Dependency Auditing", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-423",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Automated Application Dependency Auditing (Security Compliance)",
    hint: "Scanning language dependencies for known CVEs in CI pipelines.",
    back: "Integrating <strong>dependency auditing tools</strong> (such as govulncheck or npm audit) into CI pipelines catches vulnerable libraries before application code is packaged into container images.",
    tags: ["Dependency Auditing", "Dependency Auditing", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-424",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Automated Application Dependency Auditing (Hybrid Migration)",
    hint: "Scanning language dependencies for known CVEs in CI pipelines.",
    back: "Integrating <strong>dependency auditing tools</strong> (such as govulncheck or npm audit) into CI pipelines catches vulnerable libraries before application code is packaged into container images.",
    tags: ["Dependency Auditing", "Dependency Auditing", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-425",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Automated Application Dependency Auditing (Resilience Failure)",
    hint: "Scanning language dependencies for known CVEs in CI pipelines.",
    back: "Integrating <strong>dependency auditing tools</strong> (such as govulncheck or npm audit) into CI pipelines catches vulnerable libraries before application code is packaged into container images.",
    tags: ["Dependency Auditing", "Dependency Auditing", "Resilience Failure"]
  }
];

export default K8S_CKS_FLASHCARDS_17;
