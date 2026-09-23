export const K8S_CKS_QUESTIONS_14 = [
  {
    id: "k8s-cks-326",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Container Runtime Sandbox Isolation (gVisor / Kata): Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to run untrusted, multi-tenant container code on Kubernetes without risking host kernel exploits if a container escape occurs.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Run the workload on a dedicated node pool, tainted so only the untrusted pods are scheduled there." },
      { id: 'B', text: "Run the workload under a `seccompProfile` of `RuntimeDefault` with every capability dropped." },
      { id: 'C', text: "Run the workload in a user namespace by setting `hostUsers: false` on the pod spec." },
      { id: 'D', text: "Run the workload on a sandboxed runtime — gVisor's `runsc` or Kata — named by a `RuntimeClass`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy a sandboxed container runtime (like gVisor with `runsc` or Kata Containers) and specify the corresponding `RuntimeClass` in the pod spec. Standard containers share the host Linux kernel, meaning a kernel vulnerability (e.g., Dirty COW, Dirty Pipe) can allow complete host compromise. Sandboxed runtimes like gVisor (`runsc`) intercept system calls in userspace, providing an impermeable virtualization barrier between untrusted workloads and the host kernel.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/runtime-class/",
    tags: ["Runtime Sandboxing","RuntimeClass Sandboxing","Dr Failover"]
  },
  {
    id: "k8s-cks-327",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Container Runtime Sandbox Isolation (gVisor / Kata): High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to run untrusted, multi-tenant container code on Kubernetes without risking host kernel exploits if a container escape occurs.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Run the workload in a user namespace by setting `hostUsers: false` on the pod spec." },
      { id: 'B', text: "Run the workload on a dedicated node pool, tainted so only the untrusted pods are scheduled there." },
      { id: 'C', text: "Run the workload under a `seccompProfile` of `RuntimeDefault` with every capability dropped." },
      { id: 'D', text: "Run the workload on a sandboxed runtime — gVisor's `runsc` or Kata — named by a `RuntimeClass`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy a sandboxed container runtime (like gVisor with `runsc` or Kata Containers) and specify the corresponding `RuntimeClass` in the pod spec. Standard containers share the host Linux kernel, meaning a kernel vulnerability (e.g., Dirty COW, Dirty Pipe) can allow complete host compromise. Sandboxed runtimes like gVisor (`runsc`) intercept system calls in userspace, providing an impermeable virtualization barrier between untrusted workloads and the host kernel.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/runtime-class/",
    tags: ["Runtime Sandboxing","RuntimeClass Sandboxing","High Load Scale"]
  },
  {
    id: "k8s-cks-328",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Container Runtime Sandbox Isolation (gVisor / Kata): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to run untrusted, multi-tenant container code on Kubernetes without risking host kernel exploits if a container escape occurs.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Run the workload under a `seccompProfile` of `RuntimeDefault` with every capability dropped." },
      { id: 'B', text: "Run the workload in a user namespace by setting `hostUsers: false` on the pod spec." },
      { id: 'C', text: "Run the workload on a dedicated node pool, tainted so only the untrusted pods are scheduled there." },
      { id: 'D', text: "Run the workload on a sandboxed runtime — gVisor's `runsc` or Kata — named by a `RuntimeClass`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy a sandboxed container runtime (like gVisor with `runsc` or Kata Containers) and specify the corresponding `RuntimeClass` in the pod spec. Standard containers share the host Linux kernel, meaning a kernel vulnerability (e.g., Dirty COW, Dirty Pipe) can allow complete host compromise. Sandboxed runtimes like gVisor (`runsc`) intercept system calls in userspace, providing an impermeable virtualization barrier between untrusted workloads and the host kernel.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/runtime-class/",
    tags: ["Runtime Sandboxing","RuntimeClass Sandboxing","Security Compliance"]
  },
  {
    id: "k8s-cks-329",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Container Runtime Sandbox Isolation (gVisor / Kata): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to run untrusted, multi-tenant container code on Kubernetes without risking host kernel exploits if a container escape occurs.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Run the workload on a dedicated node pool, tainted so only the untrusted pods are scheduled there." },
      { id: 'B', text: "Run the workload under a `seccompProfile` of `RuntimeDefault` with every capability dropped." },
      { id: 'C', text: "Run the workload in a user namespace by setting `hostUsers: false` on the pod spec." },
      { id: 'D', text: "Run the workload on a sandboxed runtime — gVisor's `runsc` or Kata — named by a `RuntimeClass`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy a sandboxed container runtime (like gVisor with `runsc` or Kata Containers) and specify the corresponding `RuntimeClass` in the pod spec. Standard containers share the host Linux kernel, meaning a kernel vulnerability (e.g., Dirty COW, Dirty Pipe) can allow complete host compromise. Sandboxed runtimes like gVisor (`runsc`) intercept system calls in userspace, providing an impermeable virtualization barrier between untrusted workloads and the host kernel.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/runtime-class/",
    tags: ["Runtime Sandboxing","RuntimeClass Sandboxing","Hybrid Migration"]
  },
  {
    id: "k8s-cks-330",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Container Runtime Sandbox Isolation (gVisor / Kata): Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to run untrusted, multi-tenant container code on Kubernetes without risking host kernel exploits if a container escape occurs.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Run the workload in a user namespace by setting `hostUsers: false` on the pod spec." },
      { id: 'B', text: "Run the workload under a `seccompProfile` of `RuntimeDefault` with every capability dropped." },
      { id: 'C', text: "Run the workload on a sandboxed runtime — gVisor's `runsc` or Kata — named by a `RuntimeClass`." },
      { id: 'D', text: "Run the workload on a dedicated node pool, tainted so only the untrusted pods are scheduled there." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy a sandboxed container runtime (like gVisor with `runsc` or Kata Containers) and specify the corresponding `RuntimeClass` in the pod spec. Standard containers share the host Linux kernel, meaning a kernel vulnerability (e.g., Dirty COW, Dirty Pipe) can allow complete host compromise. Sandboxed runtimes like gVisor (`runsc`) intercept system calls in userspace, providing an impermeable virtualization barrier between untrusted workloads and the host kernel.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/runtime-class/",
    tags: ["Runtime Sandboxing","RuntimeClass Sandboxing","Resilience Failure"]
  },
  {
    id: "k8s-cks-331",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Pod Security Admission (PSA) Enforcement: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to enforce cluster-wide pod security baselines without deploying complex third-party policy engines.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Label the namespaces with `pod-security.kubernetes.io/warn: restricted` and leave the enforce label unset." },
      { id: 'B', text: "Install the Pod Security admission webhook and configure its default in the API server config." },
      { id: 'C', text: "Install PodSecurityPolicy objects and bind them to the namespaces' default ServiceAccounts." },
      { id: 'D', text: "Label the namespaces with `pod-security.kubernetes.io/enforce: restricted`, plus `audit` and `warn`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Label target namespaces with `pod-security.kubernetes.io/enforce: baseline` or `restricted` with `audit` and `warn` modes. Pod Security Admission (PSA) is the built-in replacement for deprecated PodSecurityPolicies (PSP). By applying labels to namespaces (`enforce`, `audit`, `warn` with levels `privileged`, `baseline`, `restricted`), PSA validates pod creation against defined standards at admission time.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/",
    tags: ["Pod Security Admission","PSA","Dr Failover"]
  },
  {
    id: "k8s-cks-332",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Pod Security Admission (PSA) Enforcement: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to enforce cluster-wide pod security baselines without deploying complex third-party policy engines.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Label the namespaces with `pod-security.kubernetes.io/warn: restricted` and leave the enforce label unset." },
      { id: 'B', text: "Install PodSecurityPolicy objects and bind them to the namespaces' default ServiceAccounts." },
      { id: 'C', text: "Label the namespaces with `pod-security.kubernetes.io/enforce: restricted`, plus `audit` and `warn`." },
      { id: 'D', text: "Install the Pod Security admission webhook and configure its default in the API server config." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Label target namespaces with `pod-security.kubernetes.io/enforce: baseline` or `restricted` with `audit` and `warn` modes. Pod Security Admission (PSA) is the built-in replacement for deprecated PodSecurityPolicies (PSP). By applying labels to namespaces (`enforce`, `audit`, `warn` with levels `privileged`, `baseline`, `restricted`), PSA validates pod creation against defined standards at admission time.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/",
    tags: ["Pod Security Admission","PSA","High Load Scale"]
  },
  {
    id: "k8s-cks-333",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Pod Security Admission (PSA) Enforcement: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to enforce cluster-wide pod security baselines without deploying complex third-party policy engines.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Install PodSecurityPolicy objects and bind them to the namespaces' default ServiceAccounts." },
      { id: 'B', text: "Label the namespaces with `pod-security.kubernetes.io/enforce: restricted`, plus `audit` and `warn`." },
      { id: 'C', text: "Label the namespaces with `pod-security.kubernetes.io/warn: restricted` and leave the enforce label unset." },
      { id: 'D', text: "Install the Pod Security admission webhook and configure its default in the API server config." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Label target namespaces with `pod-security.kubernetes.io/enforce: baseline` or `restricted` with `audit` and `warn` modes. Pod Security Admission (PSA) is the built-in replacement for deprecated PodSecurityPolicies (PSP). By applying labels to namespaces (`enforce`, `audit`, `warn` with levels `privileged`, `baseline`, `restricted`), PSA validates pod creation against defined standards at admission time.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/",
    tags: ["Pod Security Admission","PSA","Security Compliance"]
  },
  {
    id: "k8s-cks-334",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Pod Security Admission (PSA) Enforcement: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to enforce cluster-wide pod security baselines without deploying complex third-party policy engines.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Install PodSecurityPolicy objects and bind them to the namespaces' default ServiceAccounts." },
      { id: 'B', text: "Label the namespaces with `pod-security.kubernetes.io/enforce: restricted`, plus `audit` and `warn`." },
      { id: 'C', text: "Label the namespaces with `pod-security.kubernetes.io/warn: restricted` and leave the enforce label unset." },
      { id: 'D', text: "Install the Pod Security admission webhook and configure its default in the API server config." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Label target namespaces with `pod-security.kubernetes.io/enforce: baseline` or `restricted` with `audit` and `warn` modes. Pod Security Admission (PSA) is the built-in replacement for deprecated PodSecurityPolicies (PSP). By applying labels to namespaces (`enforce`, `audit`, `warn` with levels `privileged`, `baseline`, `restricted`), PSA validates pod creation against defined standards at admission time.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/",
    tags: ["Pod Security Admission","PSA","Hybrid Migration"]
  },
  {
    id: "k8s-cks-335",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Pod Security Admission (PSA) Enforcement: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to enforce cluster-wide pod security baselines without deploying complex third-party policy engines.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Install the Pod Security admission webhook and configure its default in the API server config." },
      { id: 'B', text: "Label the namespaces with `pod-security.kubernetes.io/warn: restricted` and leave the enforce label unset." },
      { id: 'C', text: "Label the namespaces with `pod-security.kubernetes.io/enforce: restricted`, plus `audit` and `warn`." },
      { id: 'D', text: "Install PodSecurityPolicy objects and bind them to the namespaces' default ServiceAccounts." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Label target namespaces with `pod-security.kubernetes.io/enforce: baseline` or `restricted` with `audit` and `warn` modes. Pod Security Admission (PSA) is the built-in replacement for deprecated PodSecurityPolicies (PSP). By applying labels to namespaces (`enforce`, `audit`, `warn` with levels `privileged`, `baseline`, `restricted`), PSA validates pod creation against defined standards at admission time.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/",
    tags: ["Pod Security Admission","PSA","Resilience Failure"]
  },
  {
    id: "k8s-cks-336",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Restricting Secret Access with RBAC: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to prevent developers with debugging access in a namespace from inspecting production database passwords stored in Secrets.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Grant the developer Role `get` on `secrets` but withhold `list`, so that none of the secrets can be enumerated." },
      { id: 'B', text: "Grant the developer Role the built-in `view` ClusterRole, which excludes the secret contents." },
      { id: 'C', text: "Grant the developer Role `*` on the namespace and rely on encryption at rest for the secrets." },
      { id: 'D', text: "Leave `get`, `list` and `watch` on `secrets` out of the developer Role, granting only pods and configmaps." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Ensure developer Roles omit `get`, `list`, and `watch` permissions on `secrets` resources, granting access only to `configmaps` and `pods`. Kubernetes Secrets are accessible via the standard API. If a user or ServiceAccount has `get` or `list` permissions on `secrets`, they can retrieve and decode all secret values. Restricting Secret verbs in RBAC Roles ensures sensitive credentials remain confidential.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["Secret RBAC","Secret RBAC","Dr Failover"]
  },
  {
    id: "k8s-cks-337",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Restricting Secret Access with RBAC: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to prevent developers with debugging access in a namespace from inspecting production database passwords stored in Secrets.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Leave `get`, `list` and `watch` on `secrets` out of the developer Role, granting only pods and configmaps." },
      { id: 'B', text: "Grant the developer Role `*` on the namespace and rely on encryption at rest for the secrets." },
      { id: 'C', text: "Grant the developer Role the built-in `view` ClusterRole, which excludes the secret contents." },
      { id: 'D', text: "Grant the developer Role `get` on `secrets` but withhold `list`, so that none of the secrets can be enumerated." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure developer Roles omit `get`, `list`, and `watch` permissions on `secrets` resources, granting access only to `configmaps` and `pods`. Kubernetes Secrets are accessible via the standard API. If a user or ServiceAccount has `get` or `list` permissions on `secrets`, they can retrieve and decode all secret values. Restricting Secret verbs in RBAC Roles ensures sensitive credentials remain confidential.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["Secret RBAC","Secret RBAC","High Load Scale"]
  },
  {
    id: "k8s-cks-338",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Restricting Secret Access with RBAC: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to prevent developers with debugging access in a namespace from inspecting production database passwords stored in Secrets.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Leave `get`, `list` and `watch` on `secrets` out of the developer Role, granting only pods and configmaps." },
      { id: 'B', text: "Grant the developer Role `*` on the namespace and rely on encryption at rest for the secrets." },
      { id: 'C', text: "Grant the developer Role the built-in `view` ClusterRole, which excludes the secret contents." },
      { id: 'D', text: "Grant the developer Role `get` on `secrets` but withhold `list`, so that none of the secrets can be enumerated." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure developer Roles omit `get`, `list`, and `watch` permissions on `secrets` resources, granting access only to `configmaps` and `pods`. Kubernetes Secrets are accessible via the standard API. If a user or ServiceAccount has `get` or `list` permissions on `secrets`, they can retrieve and decode all secret values. Restricting Secret verbs in RBAC Roles ensures sensitive credentials remain confidential.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["Secret RBAC","Secret RBAC","Security Compliance"]
  },
  {
    id: "k8s-cks-339",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Restricting Secret Access with RBAC: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to prevent developers with debugging access in a namespace from inspecting production database passwords stored in Secrets.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Leave `get`, `list` and `watch` on `secrets` out of the developer Role, granting only pods and configmaps." },
      { id: 'B', text: "Grant the developer Role `*` on the namespace and rely on encryption at rest for the secrets." },
      { id: 'C', text: "Grant the developer Role the built-in `view` ClusterRole, which excludes the secret contents." },
      { id: 'D', text: "Grant the developer Role `get` on `secrets` but withhold `list`, so that none of the secrets can be enumerated." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure developer Roles omit `get`, `list`, and `watch` permissions on `secrets` resources, granting access only to `configmaps` and `pods`. Kubernetes Secrets are accessible via the standard API. If a user or ServiceAccount has `get` or `list` permissions on `secrets`, they can retrieve and decode all secret values. Restricting Secret verbs in RBAC Roles ensures sensitive credentials remain confidential.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["Secret RBAC","Secret RBAC","Hybrid Migration"]
  },
  {
    id: "k8s-cks-340",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Restricting Secret Access with RBAC: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to prevent developers with debugging access in a namespace from inspecting production database passwords stored in Secrets.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Leave `get`, `list` and `watch` on `secrets` out of the developer Role, granting only pods and configmaps." },
      { id: 'B', text: "Grant the developer Role `*` on the namespace and rely on encryption at rest for the secrets." },
      { id: 'C', text: "Grant the developer Role the built-in `view` ClusterRole, which excludes the secret contents." },
      { id: 'D', text: "Grant the developer Role `get` on `secrets` but withhold `list`, so that none of the secrets can be enumerated." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure developer Roles omit `get`, `list`, and `watch` permissions on `secrets` resources, granting access only to `configmaps` and `pods`. Kubernetes Secrets are accessible via the standard API. If a user or ServiceAccount has `get` or `list` permissions on `secrets`, they can retrieve and decode all secret values. Restricting Secret verbs in RBAC Roles ensures sensitive credentials remain confidential.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["Secret RBAC","Secret RBAC","Resilience Failure"]
  },
  {
    id: "k8s-cks-341",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Container Image Footprint and Distroless Hardening: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to minimize Common Vulnerabilities and Exposures (CVEs) and eliminate potential post-exploitation tools in a Java microservice.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Build on a slim Debian base and remove the shells in a final `RUN` instruction." },
      { id: 'B', text: "Build on an Alpine base and keep `curl` and `nmap` for in-cluster debugging." },
      { id: 'C', text: "Build on the vendor's own JDK image and set `readOnlyRootFilesystem: true` on the container." },
      { id: 'D', text: "Build on a distroless Java base, which carries no package manager, shell or utilities." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Build the application using Google Distroless Java base images, removing package managers, shells, and utilities. Minimal and distroless images contain only the application and its runtime dependencies. By eliminating package managers (`apt`, `yum`) and command shells (`sh`, `bash`), attackers cannot download rootkits or execute shell scripts even if an application remote code execution flaw exists.",
    referenceUrl: "https://github.com/GoogleContainerTools/distroless",
    tags: ["Minimal Images","Distroless Hardening","Dr Failover"]
  },
  {
    id: "k8s-cks-342",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Container Image Footprint and Distroless Hardening: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to minimize Common Vulnerabilities and Exposures (CVEs) and eliminate potential post-exploitation tools in a Java microservice.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Build on the vendor's own JDK image and set `readOnlyRootFilesystem: true` on the container." },
      { id: 'B', text: "Build on an Alpine base and keep `curl` and `nmap` for in-cluster debugging." },
      { id: 'C', text: "Build on a distroless Java base, which carries no package manager, shell or utilities." },
      { id: 'D', text: "Build on a slim Debian base and remove the shells in a final `RUN` instruction." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Build the application using Google Distroless Java base images, removing package managers, shells, and utilities. Minimal and distroless images contain only the application and its runtime dependencies. By eliminating package managers (`apt`, `yum`) and command shells (`sh`, `bash`), attackers cannot download rootkits or execute shell scripts even if an application remote code execution flaw exists.",
    referenceUrl: "https://github.com/GoogleContainerTools/distroless",
    tags: ["Minimal Images","Distroless Hardening","High Load Scale"]
  },
  {
    id: "k8s-cks-343",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Container Image Footprint and Distroless Hardening: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to minimize Common Vulnerabilities and Exposures (CVEs) and eliminate potential post-exploitation tools in a Java microservice.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Build on a distroless Java base, which carries no package manager, shell or utilities." },
      { id: 'B', text: "Build on the vendor's own JDK image and set `readOnlyRootFilesystem: true` on the container." },
      { id: 'C', text: "Build on an Alpine base and keep `curl` and `nmap` for in-cluster debugging." },
      { id: 'D', text: "Build on a slim Debian base and remove the shells in a final `RUN` instruction." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build the application using Google Distroless Java base images, removing package managers, shells, and utilities. Minimal and distroless images contain only the application and its runtime dependencies. By eliminating package managers (`apt`, `yum`) and command shells (`sh`, `bash`), attackers cannot download rootkits or execute shell scripts even if an application remote code execution flaw exists.",
    referenceUrl: "https://github.com/GoogleContainerTools/distroless",
    tags: ["Minimal Images","Distroless Hardening","Security Compliance"]
  },
  {
    id: "k8s-cks-344",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Container Image Footprint and Distroless Hardening: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to minimize Common Vulnerabilities and Exposures (CVEs) and eliminate potential post-exploitation tools in a Java microservice.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Build on a distroless Java base, which carries no package manager, shell or utilities." },
      { id: 'B', text: "Build on the vendor's own JDK image and set `readOnlyRootFilesystem: true` on the container." },
      { id: 'C', text: "Build on an Alpine base and keep `curl` and `nmap` for in-cluster debugging." },
      { id: 'D', text: "Build on a slim Debian base and remove the shells in a final `RUN` instruction." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build the application using Google Distroless Java base images, removing package managers, shells, and utilities. Minimal and distroless images contain only the application and its runtime dependencies. By eliminating package managers (`apt`, `yum`) and command shells (`sh`, `bash`), attackers cannot download rootkits or execute shell scripts even if an application remote code execution flaw exists.",
    referenceUrl: "https://github.com/GoogleContainerTools/distroless",
    tags: ["Minimal Images","Distroless Hardening","Hybrid Migration"]
  },
  {
    id: "k8s-cks-345",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Container Image Footprint and Distroless Hardening: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to minimize Common Vulnerabilities and Exposures (CVEs) and eliminate potential post-exploitation tools in a Java microservice.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Build on a distroless Java base, which carries no package manager, shell or utilities." },
      { id: 'B', text: "Build on an Alpine base and keep `curl` and `nmap` for in-cluster debugging." },
      { id: 'C', text: "Build on a slim Debian base and remove the shells in a final `RUN` instruction." },
      { id: 'D', text: "Build on the vendor's own JDK image and set `readOnlyRootFilesystem: true` on the container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build the application using Google Distroless Java base images, removing package managers, shells, and utilities. Minimal and distroless images contain only the application and its runtime dependencies. By eliminating package managers (`apt`, `yum`) and command shells (`sh`, `bash`), attackers cannot download rootkits or execute shell scripts even if an application remote code execution flaw exists.",
    referenceUrl: "https://github.com/GoogleContainerTools/distroless",
    tags: ["Minimal Images","Distroless Hardening","Resilience Failure"]
  },
  {
    id: "k8s-cks-346",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Enforcing readOnlyRootFilesystem in Containers: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to prevent malicious actors from writing scripts or modifying binaries inside a compromised microservice container.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Set `readOnlyRootFilesystem: true` on the container and mount an `emptyDir` at `/tmp` for scratch." },
      { id: 'B', text: "Set `runAsNonRoot: true` on the container so that the process cannot write to the image's own paths." },
      { id: 'C', text: "Set `procMount: Unmasked` on the container and mount an `emptyDir` at `/tmp` for scratch space." },
      { id: 'D', text: "Set `fsGroup` on the pod so the mounted volumes, and not the image layers, hold the writes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `readOnlyRootFilesystem: true` in the container `securityContext` and mount an `emptyDir` volume explicitly at `/tmp` if scratch space is required. Enforcing `readOnlyRootFilesystem: true` blocks any write operations to the container root directory. Even if an attacker executes arbitrary code via an application bug, they cannot download payloads, modify existing binaries, or install persistent persistence mechanisms on disk.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Filesystem Security","readOnlyRootFilesystem","Dr Failover"]
  },
  {
    id: "k8s-cks-347",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Enforcing readOnlyRootFilesystem in Containers: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to prevent malicious actors from writing scripts or modifying binaries inside a compromised microservice container.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Set `fsGroup` on the pod so the mounted volumes, and not the image layers, hold the writes." },
      { id: 'B', text: "Set `readOnlyRootFilesystem: true` on the container and mount an `emptyDir` at `/tmp` for scratch." },
      { id: 'C', text: "Set `procMount: Unmasked` on the container and mount an `emptyDir` at `/tmp` for scratch space." },
      { id: 'D', text: "Set `runAsNonRoot: true` on the container so that the process cannot write to the image's own paths." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `readOnlyRootFilesystem: true` in the container `securityContext` and mount an `emptyDir` volume explicitly at `/tmp` if scratch space is required. Enforcing `readOnlyRootFilesystem: true` blocks any write operations to the container root directory. Even if an attacker executes arbitrary code via an application bug, they cannot download payloads, modify existing binaries, or install persistent persistence mechanisms on disk.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Filesystem Security","readOnlyRootFilesystem","High Load Scale"]
  },
  {
    id: "k8s-cks-348",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Enforcing readOnlyRootFilesystem in Containers: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to prevent malicious actors from writing scripts or modifying binaries inside a compromised microservice container.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Set `procMount: Unmasked` on the container and mount an `emptyDir` at `/tmp` for scratch space." },
      { id: 'B', text: "Set `fsGroup` on the pod so the mounted volumes, and not the image layers, hold the writes." },
      { id: 'C', text: "Set `readOnlyRootFilesystem: true` on the container and mount an `emptyDir` at `/tmp` for scratch." },
      { id: 'D', text: "Set `runAsNonRoot: true` on the container so that the process cannot write to the image's own paths." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set `readOnlyRootFilesystem: true` in the container `securityContext` and mount an `emptyDir` volume explicitly at `/tmp` if scratch space is required. Enforcing `readOnlyRootFilesystem: true` blocks any write operations to the container root directory. Even if an attacker executes arbitrary code via an application bug, they cannot download payloads, modify existing binaries, or install persistent persistence mechanisms on disk.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Filesystem Security","readOnlyRootFilesystem","Security Compliance"]
  },
  {
    id: "k8s-cks-349",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Enforcing readOnlyRootFilesystem in Containers: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to prevent malicious actors from writing scripts or modifying binaries inside a compromised microservice container.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Set `runAsNonRoot: true` on the container so that the process cannot write to the image's own paths." },
      { id: 'B', text: "Set `readOnlyRootFilesystem: true` on the container and mount an `emptyDir` at `/tmp` for scratch." },
      { id: 'C', text: "Set `fsGroup` on the pod so the mounted volumes, and not the image layers, hold the writes." },
      { id: 'D', text: "Set `procMount: Unmasked` on the container and mount an `emptyDir` at `/tmp` for scratch space." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `readOnlyRootFilesystem: true` in the container `securityContext` and mount an `emptyDir` volume explicitly at `/tmp` if scratch space is required. Enforcing `readOnlyRootFilesystem: true` blocks any write operations to the container root directory. Even if an attacker executes arbitrary code via an application bug, they cannot download payloads, modify existing binaries, or install persistent persistence mechanisms on disk.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Filesystem Security","readOnlyRootFilesystem","Hybrid Migration"]
  },
  {
    id: "k8s-cks-350",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Enforcing readOnlyRootFilesystem in Containers: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to prevent malicious actors from writing scripts or modifying binaries inside a compromised microservice container.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Set `readOnlyRootFilesystem: true` on the container and mount an `emptyDir` at `/tmp` for scratch." },
      { id: 'B', text: "Set `runAsNonRoot: true` on the container so that the process cannot write to the image's own paths." },
      { id: 'C', text: "Set `procMount: Unmasked` on the container and mount an `emptyDir` at `/tmp` for scratch space." },
      { id: 'D', text: "Set `fsGroup` on the pod so the mounted volumes, and not the image layers, hold the writes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `readOnlyRootFilesystem: true` in the container `securityContext` and mount an `emptyDir` volume explicitly at `/tmp` if scratch space is required. Enforcing `readOnlyRootFilesystem: true` blocks any write operations to the container root directory. Even if an attacker executes arbitrary code via an application bug, they cannot download payloads, modify existing binaries, or install persistent persistence mechanisms on disk.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Filesystem Security","readOnlyRootFilesystem","Resilience Failure"]
  }
];

export default K8S_CKS_QUESTIONS_14;
