export const CNCF_CGOA_FLASHCARDS_20 = [
  {
    id: "cncf-cgoa-fc-476",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Securing GitOps with Read-Only Deploy Keys (Dr Failover)",
    hint: "Enforcing repository least privilege using dedicated read-only SSH deploy keys.",
    back: "Configuring <strong>read-only SSH Deploy Keys</strong> scoped to specific repositories ensures in-cluster controllers can pull manifests without possessing write privileges or accessing other repositories.",
    tags: ["Repo Authentication", "Deploy Keys", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-fc-477",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Securing GitOps with Read-Only Deploy Keys (High Load Scale)",
    hint: "Enforcing repository least privilege using dedicated read-only SSH deploy keys.",
    back: "Configuring <strong>read-only SSH Deploy Keys</strong> scoped to specific repositories ensures in-cluster controllers can pull manifests without possessing write privileges or accessing other repositories.",
    tags: ["Repo Authentication", "Deploy Keys", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-fc-478",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Securing GitOps with Read-Only Deploy Keys (Security Compliance)",
    hint: "Enforcing repository least privilege using dedicated read-only SSH deploy keys.",
    back: "Configuring <strong>read-only SSH Deploy Keys</strong> scoped to specific repositories ensures in-cluster controllers can pull manifests without possessing write privileges or accessing other repositories.",
    tags: ["Repo Authentication", "Deploy Keys", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-fc-479",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Securing GitOps with Read-Only Deploy Keys (Hybrid Migration)",
    hint: "Enforcing repository least privilege using dedicated read-only SSH deploy keys.",
    back: "Configuring <strong>read-only SSH Deploy Keys</strong> scoped to specific repositories ensures in-cluster controllers can pull manifests without possessing write privileges or accessing other repositories.",
    tags: ["Repo Authentication", "Deploy Keys", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-fc-480",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Securing GitOps with Read-Only Deploy Keys (Resilience Failure)",
    hint: "Enforcing repository least privilege using dedicated read-only SSH deploy keys.",
    back: "Configuring <strong>read-only SSH Deploy Keys</strong> scoped to specific repositories ensures in-cluster controllers can pull manifests without possessing write privileges or accessing other repositories.",
    tags: ["Repo Authentication", "Deploy Keys", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-fc-481",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Hardening GitOps Controller ServiceAccount RBAC (Dr Failover)",
    hint: "Restricting controller permissions to designated application namespaces.",
    back: "Scoping <strong>GitOps controller ServiceAccounts with restricted RBAC</strong> prevents compromised or misconfigured deployment engines from tampering with core cluster security controls or <code>kube-system</code>.",
    tags: ["Controller RBAC", "Controller RBAC", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-fc-482",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Hardening GitOps Controller ServiceAccount RBAC (High Load Scale)",
    hint: "Restricting controller permissions to designated application namespaces.",
    back: "Scoping <strong>GitOps controller ServiceAccounts with restricted RBAC</strong> prevents compromised or misconfigured deployment engines from tampering with core cluster security controls or <code>kube-system</code>.",
    tags: ["Controller RBAC", "Controller RBAC", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-fc-483",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Hardening GitOps Controller ServiceAccount RBAC (Security Compliance)",
    hint: "Restricting controller permissions to designated application namespaces.",
    back: "Scoping <strong>GitOps controller ServiceAccounts with restricted RBAC</strong> prevents compromised or misconfigured deployment engines from tampering with core cluster security controls or <code>kube-system</code>.",
    tags: ["Controller RBAC", "Controller RBAC", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-fc-484",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Hardening GitOps Controller ServiceAccount RBAC (Hybrid Migration)",
    hint: "Restricting controller permissions to designated application namespaces.",
    back: "Scoping <strong>GitOps controller ServiceAccounts with restricted RBAC</strong> prevents compromised or misconfigured deployment engines from tampering with core cluster security controls or <code>kube-system</code>.",
    tags: ["Controller RBAC", "Controller RBAC", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-fc-485",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Hardening GitOps Controller ServiceAccount RBAC (Resilience Failure)",
    hint: "Restricting controller permissions to designated application namespaces.",
    back: "Scoping <strong>GitOps controller ServiceAccounts with restricted RBAC</strong> prevents compromised or misconfigured deployment engines from tampering with core cluster security controls or <code>kube-system</code>.",
    tags: ["Controller RBAC", "Controller RBAC", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-fc-486",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Pre-Merge Manifest Validation with Kubeconform and Conftest (Dr Failover)",
    hint: "Validating OpenAPI schemas and security policies in pull request pipelines.",
    back: "Integrating <strong>kubeconform and conftest</strong> into pull request pipelines catches schema errors, deprecated APIs, and security violations before code merges into GitOps deployment branches.",
    tags: ["Pre-Commit Validation", "Conftest Validation", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-fc-487",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Pre-Merge Manifest Validation with Kubeconform and Conftest (High Load Scale)",
    hint: "Validating OpenAPI schemas and security policies in pull request pipelines.",
    back: "Integrating <strong>kubeconform and conftest</strong> into pull request pipelines catches schema errors, deprecated APIs, and security violations before code merges into GitOps deployment branches.",
    tags: ["Pre-Commit Validation", "Conftest Validation", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-fc-488",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Pre-Merge Manifest Validation with Kubeconform and Conftest (Security Compliance)",
    hint: "Validating OpenAPI schemas and security policies in pull request pipelines.",
    back: "Integrating <strong>kubeconform and conftest</strong> into pull request pipelines catches schema errors, deprecated APIs, and security violations before code merges into GitOps deployment branches.",
    tags: ["Pre-Commit Validation", "Conftest Validation", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-fc-489",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Pre-Merge Manifest Validation with Kubeconform and Conftest (Hybrid Migration)",
    hint: "Validating OpenAPI schemas and security policies in pull request pipelines.",
    back: "Integrating <strong>kubeconform and conftest</strong> into pull request pipelines catches schema errors, deprecated APIs, and security violations before code merges into GitOps deployment branches.",
    tags: ["Pre-Commit Validation", "Conftest Validation", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-fc-490",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Pre-Merge Manifest Validation with Kubeconform and Conftest (Resilience Failure)",
    hint: "Validating OpenAPI schemas and security policies in pull request pipelines.",
    back: "Integrating <strong>kubeconform and conftest</strong> into pull request pipelines catches schema errors, deprecated APIs, and security violations before code merges into GitOps deployment branches.",
    tags: ["Pre-Commit Validation", "Conftest Validation", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-fc-491",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Argo CD Single Sign-On (SSO) and RBAC Mapping (Dr Failover)",
    hint: "Integrating enterprise OIDC providers and mapping directory groups to roles.",
    back: "Configuring <strong>OIDC SSO in Argo CD</strong> centralizes user authentication with enterprise identity providers (Okta, Entra ID) and maps directory groups to granular Argo CD RBAC permissions.",
    tags: ["Argo CD SSO", "Argo CD SSO", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-fc-492",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Argo CD Single Sign-On (SSO) and RBAC Mapping (High Load Scale)",
    hint: "Integrating enterprise OIDC providers and mapping directory groups to roles.",
    back: "Configuring <strong>OIDC SSO in Argo CD</strong> centralizes user authentication with enterprise identity providers (Okta, Entra ID) and maps directory groups to granular Argo CD RBAC permissions.",
    tags: ["Argo CD SSO", "Argo CD SSO", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-fc-493",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Argo CD Single Sign-On (SSO) and RBAC Mapping (Security Compliance)",
    hint: "Integrating enterprise OIDC providers and mapping directory groups to roles.",
    back: "Configuring <strong>OIDC SSO in Argo CD</strong> centralizes user authentication with enterprise identity providers (Okta, Entra ID) and maps directory groups to granular Argo CD RBAC permissions.",
    tags: ["Argo CD SSO", "Argo CD SSO", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-fc-494",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Argo CD Single Sign-On (SSO) and RBAC Mapping (Hybrid Migration)",
    hint: "Integrating enterprise OIDC providers and mapping directory groups to roles.",
    back: "Configuring <strong>OIDC SSO in Argo CD</strong> centralizes user authentication with enterprise identity providers (Okta, Entra ID) and maps directory groups to granular Argo CD RBAC permissions.",
    tags: ["Argo CD SSO", "Argo CD SSO", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-fc-495",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "Argo CD Single Sign-On (SSO) and RBAC Mapping (Resilience Failure)",
    hint: "Integrating enterprise OIDC providers and mapping directory groups to roles.",
    back: "Configuring <strong>OIDC SSO in Argo CD</strong> centralizes user authentication with enterprise identity providers (Okta, Entra ID) and maps directory groups to granular Argo CD RBAC permissions.",
    tags: ["Argo CD SSO", "Argo CD SSO", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-fc-496",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "End-to-End Cryptographic Verification in GitOps (Dr Failover)",
    hint: "Verifying signed Git commits and container signatures with Cosign.",
    back: "Combining <strong>GPG-signed Git commits</strong> with <strong>Cosign image signature verification</strong> establishes an unbroken chain of custody from source code to live running cluster workloads.",
    tags: ["Manifest Signing", "Manifest Verification", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-fc-497",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "End-to-End Cryptographic Verification in GitOps (High Load Scale)",
    hint: "Verifying signed Git commits and container signatures with Cosign.",
    back: "Combining <strong>GPG-signed Git commits</strong> with <strong>Cosign image signature verification</strong> establishes an unbroken chain of custody from source code to live running cluster workloads.",
    tags: ["Manifest Signing", "Manifest Verification", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-fc-498",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "End-to-End Cryptographic Verification in GitOps (Security Compliance)",
    hint: "Verifying signed Git commits and container signatures with Cosign.",
    back: "Combining <strong>GPG-signed Git commits</strong> with <strong>Cosign image signature verification</strong> establishes an unbroken chain of custody from source code to live running cluster workloads.",
    tags: ["Manifest Signing", "Manifest Verification", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-fc-499",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "End-to-End Cryptographic Verification in GitOps (Hybrid Migration)",
    hint: "Verifying signed Git commits and container signatures with Cosign.",
    back: "Combining <strong>GPG-signed Git commits</strong> with <strong>Cosign image signature verification</strong> establishes an unbroken chain of custody from source code to live running cluster workloads.",
    tags: ["Manifest Signing", "Manifest Verification", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-fc-500",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    front: "End-to-End Cryptographic Verification in GitOps (Resilience Failure)",
    hint: "Verifying signed Git commits and container signatures with Cosign.",
    back: "Combining <strong>GPG-signed Git commits</strong> with <strong>Cosign image signature verification</strong> establishes an unbroken chain of custody from source code to live running cluster workloads.",
    tags: ["Manifest Signing", "Manifest Verification", "Resilience Failure"]
  }
];

export default CNCF_CGOA_FLASHCARDS_20;
