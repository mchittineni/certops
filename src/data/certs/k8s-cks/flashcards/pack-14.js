export const K8S_CKS_FLASHCARDS_14 = [
  {
    id: "k8s-cks-fc-326",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Sandboxed Container Runtimes (gVisor / Kata) (Dr Failover)",
    hint: "Intercepting system calls to prevent host kernel exploits with RuntimeClass.",
    back: "Specifying a sandboxed <strong>RuntimeClass</strong> (such as gVisor <code>runsc</code>) intercepts system calls in userspace, providing strong isolation for untrusted multi-tenant workloads.",
    tags: ["Runtime Sandboxing", "RuntimeClass Sandboxing", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-327",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Sandboxed Container Runtimes (gVisor / Kata) (High Load Scale)",
    hint: "Intercepting system calls to prevent host kernel exploits with RuntimeClass.",
    back: "Specifying a sandboxed <strong>RuntimeClass</strong> (such as gVisor <code>runsc</code>) intercepts system calls in userspace, providing strong isolation for untrusted multi-tenant workloads.",
    tags: ["Runtime Sandboxing", "RuntimeClass Sandboxing", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-328",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Sandboxed Container Runtimes (gVisor / Kata) (Security Compliance)",
    hint: "Intercepting system calls to prevent host kernel exploits with RuntimeClass.",
    back: "Specifying a sandboxed <strong>RuntimeClass</strong> (such as gVisor <code>runsc</code>) intercepts system calls in userspace, providing strong isolation for untrusted multi-tenant workloads.",
    tags: ["Runtime Sandboxing", "RuntimeClass Sandboxing", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-329",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Sandboxed Container Runtimes (gVisor / Kata) (Hybrid Migration)",
    hint: "Intercepting system calls to prevent host kernel exploits with RuntimeClass.",
    back: "Specifying a sandboxed <strong>RuntimeClass</strong> (such as gVisor <code>runsc</code>) intercepts system calls in userspace, providing strong isolation for untrusted multi-tenant workloads.",
    tags: ["Runtime Sandboxing", "RuntimeClass Sandboxing", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-330",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Sandboxed Container Runtimes (gVisor / Kata) (Resilience Failure)",
    hint: "Intercepting system calls to prevent host kernel exploits with RuntimeClass.",
    back: "Specifying a sandboxed <strong>RuntimeClass</strong> (such as gVisor <code>runsc</code>) intercepts system calls in userspace, providing strong isolation for untrusted multi-tenant workloads.",
    tags: ["Runtime Sandboxing", "RuntimeClass Sandboxing", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-331",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Pod Security Admission (PSA) (Dr Failover)",
    hint: "Declarative namespace-level pod hardening using enforce, audit, and warn.",
    back: "<strong>Pod Security Admission (PSA)</strong> enforces pod security standards (Baseline, Restricted) through declarative namespace labels, rejecting non-compliant workloads at admission.",
    tags: ["Pod Security Admission", "PSA", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-332",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Pod Security Admission (PSA) (High Load Scale)",
    hint: "Declarative namespace-level pod hardening using enforce, audit, and warn.",
    back: "<strong>Pod Security Admission (PSA)</strong> enforces pod security standards (Baseline, Restricted) through declarative namespace labels, rejecting non-compliant workloads at admission.",
    tags: ["Pod Security Admission", "PSA", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-333",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Pod Security Admission (PSA) (Security Compliance)",
    hint: "Declarative namespace-level pod hardening using enforce, audit, and warn.",
    back: "<strong>Pod Security Admission (PSA)</strong> enforces pod security standards (Baseline, Restricted) through declarative namespace labels, rejecting non-compliant workloads at admission.",
    tags: ["Pod Security Admission", "PSA", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-334",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Pod Security Admission (PSA) (Hybrid Migration)",
    hint: "Declarative namespace-level pod hardening using enforce, audit, and warn.",
    back: "<strong>Pod Security Admission (PSA)</strong> enforces pod security standards (Baseline, Restricted) through declarative namespace labels, rejecting non-compliant workloads at admission.",
    tags: ["Pod Security Admission", "PSA", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-335",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Pod Security Admission (PSA) (Resilience Failure)",
    hint: "Declarative namespace-level pod hardening using enforce, audit, and warn.",
    back: "<strong>Pod Security Admission (PSA)</strong> enforces pod security standards (Baseline, Restricted) through declarative namespace labels, rejecting non-compliant workloads at admission.",
    tags: ["Pod Security Admission", "PSA", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-336",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Restricting RBAC Access to Secrets (Dr Failover)",
    hint: "Denying read access to Secrets to enforce credential confidentiality.",
    back: "Limiting RBAC permissions to exclude <strong>get and list verbs on secrets</strong> ensures developers and non-admin ServiceAccounts cannot inspect sensitive credentials.",
    tags: ["Secret RBAC", "Secret RBAC", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-337",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Restricting RBAC Access to Secrets (High Load Scale)",
    hint: "Denying read access to Secrets to enforce credential confidentiality.",
    back: "Limiting RBAC permissions to exclude <strong>get and list verbs on secrets</strong> ensures developers and non-admin ServiceAccounts cannot inspect sensitive credentials.",
    tags: ["Secret RBAC", "Secret RBAC", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-338",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Restricting RBAC Access to Secrets (Security Compliance)",
    hint: "Denying read access to Secrets to enforce credential confidentiality.",
    back: "Limiting RBAC permissions to exclude <strong>get and list verbs on secrets</strong> ensures developers and non-admin ServiceAccounts cannot inspect sensitive credentials.",
    tags: ["Secret RBAC", "Secret RBAC", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-339",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Restricting RBAC Access to Secrets (Hybrid Migration)",
    hint: "Denying read access to Secrets to enforce credential confidentiality.",
    back: "Limiting RBAC permissions to exclude <strong>get and list verbs on secrets</strong> ensures developers and non-admin ServiceAccounts cannot inspect sensitive credentials.",
    tags: ["Secret RBAC", "Secret RBAC", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-340",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Restricting RBAC Access to Secrets (Resilience Failure)",
    hint: "Denying read access to Secrets to enforce credential confidentiality.",
    back: "Limiting RBAC permissions to exclude <strong>get and list verbs on secrets</strong> ensures developers and non-admin ServiceAccounts cannot inspect sensitive credentials.",
    tags: ["Secret RBAC", "Secret RBAC", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-341",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Distroless Images for CVE Reduction (Dr Failover)",
    hint: "Eliminating package managers and shells to shrink container attack surfaces.",
    back: "Using <strong>distroless base images</strong> strips shells, utilities, and package managers from production containers, eliminating common tools used by attackers during post-exploitation.",
    tags: ["Minimal Images", "Distroless Hardening", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-342",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Distroless Images for CVE Reduction (High Load Scale)",
    hint: "Eliminating package managers and shells to shrink container attack surfaces.",
    back: "Using <strong>distroless base images</strong> strips shells, utilities, and package managers from production containers, eliminating common tools used by attackers during post-exploitation.",
    tags: ["Minimal Images", "Distroless Hardening", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-343",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Distroless Images for CVE Reduction (Security Compliance)",
    hint: "Eliminating package managers and shells to shrink container attack surfaces.",
    back: "Using <strong>distroless base images</strong> strips shells, utilities, and package managers from production containers, eliminating common tools used by attackers during post-exploitation.",
    tags: ["Minimal Images", "Distroless Hardening", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-344",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Distroless Images for CVE Reduction (Hybrid Migration)",
    hint: "Eliminating package managers and shells to shrink container attack surfaces.",
    back: "Using <strong>distroless base images</strong> strips shells, utilities, and package managers from production containers, eliminating common tools used by attackers during post-exploitation.",
    tags: ["Minimal Images", "Distroless Hardening", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-345",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Distroless Images for CVE Reduction (Resilience Failure)",
    hint: "Eliminating package managers and shells to shrink container attack surfaces.",
    back: "Using <strong>distroless base images</strong> strips shells, utilities, and package managers from production containers, eliminating common tools used by attackers during post-exploitation.",
    tags: ["Minimal Images", "Distroless Hardening", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-346",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Enforcing readOnlyRootFilesystem (Dr Failover)",
    hint: "Preventing file modification and payload downloads inside containers.",
    back: "Configuring <strong>readOnlyRootFilesystem: true</strong> locks the container filesystem as read-only, preventing attackers from downloading payloads or altering system binaries.",
    tags: ["Filesystem Security", "readOnlyRootFilesystem", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-347",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Enforcing readOnlyRootFilesystem (High Load Scale)",
    hint: "Preventing file modification and payload downloads inside containers.",
    back: "Configuring <strong>readOnlyRootFilesystem: true</strong> locks the container filesystem as read-only, preventing attackers from downloading payloads or altering system binaries.",
    tags: ["Filesystem Security", "readOnlyRootFilesystem", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-348",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Enforcing readOnlyRootFilesystem (Security Compliance)",
    hint: "Preventing file modification and payload downloads inside containers.",
    back: "Configuring <strong>readOnlyRootFilesystem: true</strong> locks the container filesystem as read-only, preventing attackers from downloading payloads or altering system binaries.",
    tags: ["Filesystem Security", "readOnlyRootFilesystem", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-349",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Enforcing readOnlyRootFilesystem (Hybrid Migration)",
    hint: "Preventing file modification and payload downloads inside containers.",
    back: "Configuring <strong>readOnlyRootFilesystem: true</strong> locks the container filesystem as read-only, preventing attackers from downloading payloads or altering system binaries.",
    tags: ["Filesystem Security", "readOnlyRootFilesystem", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-350",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Enforcing readOnlyRootFilesystem (Resilience Failure)",
    hint: "Preventing file modification and payload downloads inside containers.",
    back: "Configuring <strong>readOnlyRootFilesystem: true</strong> locks the container filesystem as read-only, preventing attackers from downloading payloads or altering system binaries.",
    tags: ["Filesystem Security", "readOnlyRootFilesystem", "Resilience Failure"]
  }
];

export default K8S_CKS_FLASHCARDS_14;
