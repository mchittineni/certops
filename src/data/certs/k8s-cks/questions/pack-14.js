export const K8S_CKS_QUESTIONS_14 = [
  {
    id: "k8s-cks-326",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Container Runtime Sandbox Isolation (gVisor / Kata): Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Runtime Sandboxing to run untrusted, multi-tenant container code on Kubernetes without risking host kernel exploits if a container escape occurs.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Multi-tenant workload isolation using gVisor (runsc) or Kata Containers is under consideration.",
    options: [
      { id: 'A', text: "Deploy a sandboxed container runtime (like gVisor with `runsc` or Kata Containers) and specify the corresponding `RuntimeClass` in the pod spec." },
      { id: 'B', text: "Run untrusted code inside standard runc containers with root privileges." },
      { id: 'C', text: "Rely on Linux namespace isolation as a sufficient sandbox for hostile code." },
      { id: 'D', text: "Execute untrusted code directly in the master node host shell." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a sandboxed container runtime (like gVisor with `runsc` or Kata Containers) and specify the corresponding `RuntimeClass` in the pod spec. Standard containers share the host Linux kernel, meaning a kernel vulnerability (e.g., Dirty COW, Dirty Pipe) can allow complete host compromise. Sandboxed runtimes like gVisor (`runsc`) intercept system calls in userspace, providing an impermeable virtualization barrier between untrusted workloads and the host kernel.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/runtime-class/",
    tags: ["Runtime Sandboxing", "RuntimeClass Sandboxing", "Dr Failover"]
  },
  {
    id: "k8s-cks-327",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Container Runtime Sandbox Isolation (gVisor / Kata): High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Runtime Sandboxing to run untrusted, multi-tenant container code on Kubernetes without risking host kernel exploits if a container escape occurs.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Multi-tenant workload isolation using gVisor (runsc) or Kata Containers is under consideration.",
    options: [
      { id: 'A', text: "Deploy a sandboxed container runtime (like gVisor with `runsc` or Kata Containers) and specify the corresponding `RuntimeClass` in the pod spec." },
      { id: 'B', text: "Run untrusted code inside standard runc containers with root privileges." },
      { id: 'C', text: "Rely on Linux namespace isolation as a sufficient sandbox for hostile code." },
      { id: 'D', text: "Execute untrusted code directly in the master node host shell." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a sandboxed container runtime (like gVisor with `runsc` or Kata Containers) and specify the corresponding `RuntimeClass` in the pod spec. Standard containers share the host Linux kernel, meaning a kernel vulnerability (e.g., Dirty COW, Dirty Pipe) can allow complete host compromise. Sandboxed runtimes like gVisor (`runsc`) intercept system calls in userspace, providing an impermeable virtualization barrier between untrusted workloads and the host kernel.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/runtime-class/",
    tags: ["Runtime Sandboxing", "RuntimeClass Sandboxing", "High Load Scale"]
  },
  {
    id: "k8s-cks-328",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Container Runtime Sandbox Isolation (gVisor / Kata): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Runtime Sandboxing to run untrusted, multi-tenant container code on Kubernetes without risking host kernel exploits if a container escape occurs.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Multi-tenant workload isolation using gVisor (runsc) or Kata Containers is under consideration.",
    options: [
      { id: 'A', text: "Deploy a sandboxed container runtime (like gVisor with `runsc` or Kata Containers) and specify the corresponding `RuntimeClass` in the pod spec." },
      { id: 'B', text: "Run untrusted code inside standard runc containers with root privileges." },
      { id: 'C', text: "Rely on Linux namespace isolation as a sufficient sandbox for hostile code." },
      { id: 'D', text: "Execute untrusted code directly in the master node host shell." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a sandboxed container runtime (like gVisor with `runsc` or Kata Containers) and specify the corresponding `RuntimeClass` in the pod spec. Standard containers share the host Linux kernel, meaning a kernel vulnerability (e.g., Dirty COW, Dirty Pipe) can allow complete host compromise. Sandboxed runtimes like gVisor (`runsc`) intercept system calls in userspace, providing an impermeable virtualization barrier between untrusted workloads and the host kernel.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/runtime-class/",
    tags: ["Runtime Sandboxing", "RuntimeClass Sandboxing", "Security Compliance"]
  },
  {
    id: "k8s-cks-329",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Container Runtime Sandbox Isolation (gVisor / Kata): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Runtime Sandboxing to run untrusted, multi-tenant container code on Kubernetes without risking host kernel exploits if a container escape occurs.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Multi-tenant workload isolation using gVisor (runsc) or Kata Containers is under consideration.",
    options: [
      { id: 'A', text: "Deploy a sandboxed container runtime (like gVisor with `runsc` or Kata Containers) and specify the corresponding `RuntimeClass` in the pod spec." },
      { id: 'B', text: "Run untrusted code inside standard runc containers with root privileges." },
      { id: 'C', text: "Rely on Linux namespace isolation as a sufficient sandbox for hostile code." },
      { id: 'D', text: "Execute untrusted code directly in the master node host shell." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a sandboxed container runtime (like gVisor with `runsc` or Kata Containers) and specify the corresponding `RuntimeClass` in the pod spec. Standard containers share the host Linux kernel, meaning a kernel vulnerability (e.g., Dirty COW, Dirty Pipe) can allow complete host compromise. Sandboxed runtimes like gVisor (`runsc`) intercept system calls in userspace, providing an impermeable virtualization barrier between untrusted workloads and the host kernel.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/runtime-class/",
    tags: ["Runtime Sandboxing", "RuntimeClass Sandboxing", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-330",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Container Runtime Sandbox Isolation (gVisor / Kata): Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Runtime Sandboxing to run untrusted, multi-tenant container code on Kubernetes without risking host kernel exploits if a container escape occurs.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Multi-tenant workload isolation using gVisor (runsc) or Kata Containers is under consideration.",
    options: [
      { id: 'A', text: "Deploy a sandboxed container runtime (like gVisor with `runsc` or Kata Containers) and specify the corresponding `RuntimeClass` in the pod spec." },
      { id: 'B', text: "Run untrusted code inside standard runc containers with root privileges." },
      { id: 'C', text: "Rely on Linux namespace isolation as a sufficient sandbox for hostile code." },
      { id: 'D', text: "Execute untrusted code directly in the master node host shell." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a sandboxed container runtime (like gVisor with `runsc` or Kata Containers) and specify the corresponding `RuntimeClass` in the pod spec. Standard containers share the host Linux kernel, meaning a kernel vulnerability (e.g., Dirty COW, Dirty Pipe) can allow complete host compromise. Sandboxed runtimes like gVisor (`runsc`) intercept system calls in userspace, providing an impermeable virtualization barrier between untrusted workloads and the host kernel.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/runtime-class/",
    tags: ["Runtime Sandboxing", "RuntimeClass Sandboxing", "Resilience Failure"]
  },
  {
    id: "k8s-cks-331",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Pod Security Admission (PSA) Enforcement: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Pod Security Admission to enforce cluster-wide pod security baselines without deploying complex third-party policy engines.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Replacing deprecated PodSecurityPolicies with built-in Pod Security Admission is under consideration.",
    options: [
      { id: 'A', text: "Label target namespaces with `pod-security.kubernetes.io/enforce: baseline` or `restricted` with `audit` and `warn` modes." },
      { id: 'B', text: "Install deprecated PodSecurityPolicy manifests in Kubernetes 1.25+." },
      { id: 'C', text: "Remove all securityContext blocks from pod manifests." },
      { id: 'D', text: "Allow all pods to run as privileged users unconditionally." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Label target namespaces with `pod-security.kubernetes.io/enforce: baseline` or `restricted` with `audit` and `warn` modes. Pod Security Admission (PSA) is the built-in replacement for deprecated PodSecurityPolicies (PSP). By applying labels to namespaces (`enforce`, `audit`, `warn` with levels `privileged`, `baseline`, `restricted`), PSA validates pod creation against defined standards at admission time.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/",
    tags: ["Pod Security Admission", "PSA", "Dr Failover"]
  },
  {
    id: "k8s-cks-332",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Pod Security Admission (PSA) Enforcement: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Pod Security Admission to enforce cluster-wide pod security baselines without deploying complex third-party policy engines.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Replacing deprecated PodSecurityPolicies with built-in Pod Security Admission is under consideration.",
    options: [
      { id: 'A', text: "Label target namespaces with `pod-security.kubernetes.io/enforce: baseline` or `restricted` with `audit` and `warn` modes." },
      { id: 'B', text: "Install deprecated PodSecurityPolicy manifests in Kubernetes 1.25+." },
      { id: 'C', text: "Remove all securityContext blocks from pod manifests." },
      { id: 'D', text: "Allow all pods to run as privileged users unconditionally." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Label target namespaces with `pod-security.kubernetes.io/enforce: baseline` or `restricted` with `audit` and `warn` modes. Pod Security Admission (PSA) is the built-in replacement for deprecated PodSecurityPolicies (PSP). By applying labels to namespaces (`enforce`, `audit`, `warn` with levels `privileged`, `baseline`, `restricted`), PSA validates pod creation against defined standards at admission time.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/",
    tags: ["Pod Security Admission", "PSA", "High Load Scale"]
  },
  {
    id: "k8s-cks-333",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Pod Security Admission (PSA) Enforcement: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Pod Security Admission to enforce cluster-wide pod security baselines without deploying complex third-party policy engines.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Replacing deprecated PodSecurityPolicies with built-in Pod Security Admission is under consideration.",
    options: [
      { id: 'A', text: "Label target namespaces with `pod-security.kubernetes.io/enforce: baseline` or `restricted` with `audit` and `warn` modes." },
      { id: 'B', text: "Install deprecated PodSecurityPolicy manifests in Kubernetes 1.25+." },
      { id: 'C', text: "Remove all securityContext blocks from pod manifests." },
      { id: 'D', text: "Allow all pods to run as privileged users unconditionally." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Label target namespaces with `pod-security.kubernetes.io/enforce: baseline` or `restricted` with `audit` and `warn` modes. Pod Security Admission (PSA) is the built-in replacement for deprecated PodSecurityPolicies (PSP). By applying labels to namespaces (`enforce`, `audit`, `warn` with levels `privileged`, `baseline`, `restricted`), PSA validates pod creation against defined standards at admission time.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/",
    tags: ["Pod Security Admission", "PSA", "Security Compliance"]
  },
  {
    id: "k8s-cks-334",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Pod Security Admission (PSA) Enforcement: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Pod Security Admission to enforce cluster-wide pod security baselines without deploying complex third-party policy engines.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Replacing deprecated PodSecurityPolicies with built-in Pod Security Admission is under consideration.",
    options: [
      { id: 'A', text: "Label target namespaces with `pod-security.kubernetes.io/enforce: baseline` or `restricted` with `audit` and `warn` modes." },
      { id: 'B', text: "Install deprecated PodSecurityPolicy manifests in Kubernetes 1.25+." },
      { id: 'C', text: "Remove all securityContext blocks from pod manifests." },
      { id: 'D', text: "Allow all pods to run as privileged users unconditionally." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Label target namespaces with `pod-security.kubernetes.io/enforce: baseline` or `restricted` with `audit` and `warn` modes. Pod Security Admission (PSA) is the built-in replacement for deprecated PodSecurityPolicies (PSP). By applying labels to namespaces (`enforce`, `audit`, `warn` with levels `privileged`, `baseline`, `restricted`), PSA validates pod creation against defined standards at admission time.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/",
    tags: ["Pod Security Admission", "PSA", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-335",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Pod Security Admission (PSA) Enforcement: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Pod Security Admission to enforce cluster-wide pod security baselines without deploying complex third-party policy engines.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Replacing deprecated PodSecurityPolicies with built-in Pod Security Admission is under consideration.",
    options: [
      { id: 'A', text: "Label target namespaces with `pod-security.kubernetes.io/enforce: baseline` or `restricted` with `audit` and `warn` modes." },
      { id: 'B', text: "Install deprecated PodSecurityPolicy manifests in Kubernetes 1.25+." },
      { id: 'C', text: "Remove all securityContext blocks from pod manifests." },
      { id: 'D', text: "Allow all pods to run as privileged users unconditionally." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Label target namespaces with `pod-security.kubernetes.io/enforce: baseline` or `restricted` with `audit` and `warn` modes. Pod Security Admission (PSA) is the built-in replacement for deprecated PodSecurityPolicies (PSP). By applying labels to namespaces (`enforce`, `audit`, `warn` with levels `privileged`, `baseline`, `restricted`), PSA validates pod creation against defined standards at admission time.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/",
    tags: ["Pod Security Admission", "PSA", "Resilience Failure"]
  },
  {
    id: "k8s-cks-336",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Secret Access with RBAC: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Secret RBAC to prevent developers with debugging access in a namespace from inspecting production database passwords stored in Secrets.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Least-privilege RBAC policies restricting secret reading and listing is under consideration.",
    options: [
      { id: 'A', text: "Ensure developer Roles omit `get`, `list`, and `watch` permissions on `secrets` resources, granting access only to `configmaps` and `pods`." },
      { id: 'B', text: "Grant full read access to all resources in the namespace using wildcard `*`." },
      { id: 'C', text: "Store database passwords in ConfigMaps so Secrets are not needed." },
      { id: 'D', text: "Hardcode passwords in application container environment variables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure developer Roles omit `get`, `list`, and `watch` permissions on `secrets` resources, granting access only to `configmaps` and `pods`. Kubernetes Secrets are accessible via the standard API. If a user or ServiceAccount has `get` or `list` permissions on `secrets`, they can retrieve and decode all secret values. Restricting Secret verbs in RBAC Roles ensures sensitive credentials remain confidential.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["Secret RBAC", "Secret RBAC", "Dr Failover"]
  },
  {
    id: "k8s-cks-337",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Secret Access with RBAC: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Secret RBAC to prevent developers with debugging access in a namespace from inspecting production database passwords stored in Secrets.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Least-privilege RBAC policies restricting secret reading and listing is under consideration.",
    options: [
      { id: 'A', text: "Ensure developer Roles omit `get`, `list`, and `watch` permissions on `secrets` resources, granting access only to `configmaps` and `pods`." },
      { id: 'B', text: "Grant full read access to all resources in the namespace using wildcard `*`." },
      { id: 'C', text: "Store database passwords in ConfigMaps so Secrets are not needed." },
      { id: 'D', text: "Hardcode passwords in application container environment variables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure developer Roles omit `get`, `list`, and `watch` permissions on `secrets` resources, granting access only to `configmaps` and `pods`. Kubernetes Secrets are accessible via the standard API. If a user or ServiceAccount has `get` or `list` permissions on `secrets`, they can retrieve and decode all secret values. Restricting Secret verbs in RBAC Roles ensures sensitive credentials remain confidential.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["Secret RBAC", "Secret RBAC", "High Load Scale"]
  },
  {
    id: "k8s-cks-338",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Secret Access with RBAC: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Secret RBAC to prevent developers with debugging access in a namespace from inspecting production database passwords stored in Secrets.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Least-privilege RBAC policies restricting secret reading and listing is under consideration.",
    options: [
      { id: 'A', text: "Ensure developer Roles omit `get`, `list`, and `watch` permissions on `secrets` resources, granting access only to `configmaps` and `pods`." },
      { id: 'B', text: "Grant full read access to all resources in the namespace using wildcard `*`." },
      { id: 'C', text: "Store database passwords in ConfigMaps so Secrets are not needed." },
      { id: 'D', text: "Hardcode passwords in application container environment variables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure developer Roles omit `get`, `list`, and `watch` permissions on `secrets` resources, granting access only to `configmaps` and `pods`. Kubernetes Secrets are accessible via the standard API. If a user or ServiceAccount has `get` or `list` permissions on `secrets`, they can retrieve and decode all secret values. Restricting Secret verbs in RBAC Roles ensures sensitive credentials remain confidential.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["Secret RBAC", "Secret RBAC", "Security Compliance"]
  },
  {
    id: "k8s-cks-339",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Secret Access with RBAC: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Secret RBAC to prevent developers with debugging access in a namespace from inspecting production database passwords stored in Secrets.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Least-privilege RBAC policies restricting secret reading and listing is under consideration.",
    options: [
      { id: 'A', text: "Ensure developer Roles omit `get`, `list`, and `watch` permissions on `secrets` resources, granting access only to `configmaps` and `pods`." },
      { id: 'B', text: "Grant full read access to all resources in the namespace using wildcard `*`." },
      { id: 'C', text: "Store database passwords in ConfigMaps so Secrets are not needed." },
      { id: 'D', text: "Hardcode passwords in application container environment variables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure developer Roles omit `get`, `list`, and `watch` permissions on `secrets` resources, granting access only to `configmaps` and `pods`. Kubernetes Secrets are accessible via the standard API. If a user or ServiceAccount has `get` or `list` permissions on `secrets`, they can retrieve and decode all secret values. Restricting Secret verbs in RBAC Roles ensures sensitive credentials remain confidential.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["Secret RBAC", "Secret RBAC", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-340",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Secret Access with RBAC: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Secret RBAC to prevent developers with debugging access in a namespace from inspecting production database passwords stored in Secrets.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Least-privilege RBAC policies restricting secret reading and listing is under consideration.",
    options: [
      { id: 'A', text: "Ensure developer Roles omit `get`, `list`, and `watch` permissions on `secrets` resources, granting access only to `configmaps` and `pods`." },
      { id: 'B', text: "Grant full read access to all resources in the namespace using wildcard `*`." },
      { id: 'C', text: "Store database passwords in ConfigMaps so Secrets are not needed." },
      { id: 'D', text: "Hardcode passwords in application container environment variables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure developer Roles omit `get`, `list`, and `watch` permissions on `secrets` resources, granting access only to `configmaps` and `pods`. Kubernetes Secrets are accessible via the standard API. If a user or ServiceAccount has `get` or `list` permissions on `secrets`, they can retrieve and decode all secret values. Restricting Secret verbs in RBAC Roles ensures sensitive credentials remain confidential.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["Secret RBAC", "Secret RBAC", "Resilience Failure"]
  },
  {
    id: "k8s-cks-341",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Container Image Footprint and Distroless Hardening: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Minimal Images to minimize Common Vulnerabilities and Exposures (CVEs) and eliminate potential post-exploitation tools in a Java microservice.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Distroless and minimal container images to eliminate vulnerability blast radius is under consideration.",
    options: [
      { id: 'A', text: "Build the application using Google Distroless Java base images, removing package managers, shells, and utilities." },
      { id: 'B', text: "Use a full Debian or Ubuntu image and install developer tools in production." },
      { id: 'C', text: "Install netcat, curl, and nmap in the container image for debugging." },
      { id: 'D', text: "Deploy the application as an uncompiled source code repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build the application using Google Distroless Java base images, removing package managers, shells, and utilities. Minimal and distroless images contain only the application and its runtime dependencies. By eliminating package managers (`apt`, `yum`) and command shells (`sh`, `bash`), attackers cannot download rootkits or execute shell scripts even if an application remote code execution flaw exists.",
    referenceUrl: "https://github.com/GoogleContainerTools/distroless",
    tags: ["Minimal Images", "Distroless Hardening", "Dr Failover"]
  },
  {
    id: "k8s-cks-342",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Container Image Footprint and Distroless Hardening: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Minimal Images to minimize Common Vulnerabilities and Exposures (CVEs) and eliminate potential post-exploitation tools in a Java microservice.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Distroless and minimal container images to eliminate vulnerability blast radius is under consideration.",
    options: [
      { id: 'A', text: "Build the application using Google Distroless Java base images, removing package managers, shells, and utilities." },
      { id: 'B', text: "Use a full Debian or Ubuntu image and install developer tools in production." },
      { id: 'C', text: "Install netcat, curl, and nmap in the container image for debugging." },
      { id: 'D', text: "Deploy the application as an uncompiled source code repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build the application using Google Distroless Java base images, removing package managers, shells, and utilities. Minimal and distroless images contain only the application and its runtime dependencies. By eliminating package managers (`apt`, `yum`) and command shells (`sh`, `bash`), attackers cannot download rootkits or execute shell scripts even if an application remote code execution flaw exists.",
    referenceUrl: "https://github.com/GoogleContainerTools/distroless",
    tags: ["Minimal Images", "Distroless Hardening", "High Load Scale"]
  },
  {
    id: "k8s-cks-343",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Container Image Footprint and Distroless Hardening: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Minimal Images to minimize Common Vulnerabilities and Exposures (CVEs) and eliminate potential post-exploitation tools in a Java microservice.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Distroless and minimal container images to eliminate vulnerability blast radius is under consideration.",
    options: [
      { id: 'A', text: "Build the application using Google Distroless Java base images, removing package managers, shells, and utilities." },
      { id: 'B', text: "Use a full Debian or Ubuntu image and install developer tools in production." },
      { id: 'C', text: "Install netcat, curl, and nmap in the container image for debugging." },
      { id: 'D', text: "Deploy the application as an uncompiled source code repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build the application using Google Distroless Java base images, removing package managers, shells, and utilities. Minimal and distroless images contain only the application and its runtime dependencies. By eliminating package managers (`apt`, `yum`) and command shells (`sh`, `bash`), attackers cannot download rootkits or execute shell scripts even if an application remote code execution flaw exists.",
    referenceUrl: "https://github.com/GoogleContainerTools/distroless",
    tags: ["Minimal Images", "Distroless Hardening", "Security Compliance"]
  },
  {
    id: "k8s-cks-344",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Container Image Footprint and Distroless Hardening: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Minimal Images to minimize Common Vulnerabilities and Exposures (CVEs) and eliminate potential post-exploitation tools in a Java microservice.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Distroless and minimal container images to eliminate vulnerability blast radius is under consideration.",
    options: [
      { id: 'A', text: "Build the application using Google Distroless Java base images, removing package managers, shells, and utilities." },
      { id: 'B', text: "Use a full Debian or Ubuntu image and install developer tools in production." },
      { id: 'C', text: "Install netcat, curl, and nmap in the container image for debugging." },
      { id: 'D', text: "Deploy the application as an uncompiled source code repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build the application using Google Distroless Java base images, removing package managers, shells, and utilities. Minimal and distroless images contain only the application and its runtime dependencies. By eliminating package managers (`apt`, `yum`) and command shells (`sh`, `bash`), attackers cannot download rootkits or execute shell scripts even if an application remote code execution flaw exists.",
    referenceUrl: "https://github.com/GoogleContainerTools/distroless",
    tags: ["Minimal Images", "Distroless Hardening", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-345",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Container Image Footprint and Distroless Hardening: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Minimal Images to minimize Common Vulnerabilities and Exposures (CVEs) and eliminate potential post-exploitation tools in a Java microservice.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Distroless and minimal container images to eliminate vulnerability blast radius is under consideration.",
    options: [
      { id: 'A', text: "Build the application using Google Distroless Java base images, removing package managers, shells, and utilities." },
      { id: 'B', text: "Use a full Debian or Ubuntu image and install developer tools in production." },
      { id: 'C', text: "Install netcat, curl, and nmap in the container image for debugging." },
      { id: 'D', text: "Deploy the application as an uncompiled source code repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build the application using Google Distroless Java base images, removing package managers, shells, and utilities. Minimal and distroless images contain only the application and its runtime dependencies. By eliminating package managers (`apt`, `yum`) and command shells (`sh`, `bash`), attackers cannot download rootkits or execute shell scripts even if an application remote code execution flaw exists.",
    referenceUrl: "https://github.com/GoogleContainerTools/distroless",
    tags: ["Minimal Images", "Distroless Hardening", "Resilience Failure"]
  },
  {
    id: "k8s-cks-346",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Enforcing readOnlyRootFilesystem in Containers: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Filesystem Security to prevent malicious actors from writing scripts or modifying binaries inside a compromised microservice container.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Configuring readOnlyRootFilesystem: true with explicit emptyDir scratch mounts is under consideration.",
    options: [
      { id: 'A', text: "Set `readOnlyRootFilesystem: true` in the container `securityContext` and mount an `emptyDir` volume explicitly at `/tmp` if scratch space is required." },
      { id: 'B', text: "Leave the container root filesystem writable with chmod 777 permissions." },
      { id: 'C', text: "Mount the entire host root filesystem inside the container." },
      { id: 'D', text: "Grant write access to the host /bin and /usr directories." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `readOnlyRootFilesystem: true` in the container `securityContext` and mount an `emptyDir` volume explicitly at `/tmp` if scratch space is required. Enforcing `readOnlyRootFilesystem: true` blocks any write operations to the container root directory. Even if an attacker executes arbitrary code via an application bug, they cannot download payloads, modify existing binaries, or install persistent persistence mechanisms on disk.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Filesystem Security", "readOnlyRootFilesystem", "Dr Failover"]
  },
  {
    id: "k8s-cks-347",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Enforcing readOnlyRootFilesystem in Containers: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Filesystem Security to prevent malicious actors from writing scripts or modifying binaries inside a compromised microservice container.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Configuring readOnlyRootFilesystem: true with explicit emptyDir scratch mounts is under consideration.",
    options: [
      { id: 'A', text: "Set `readOnlyRootFilesystem: true` in the container `securityContext` and mount an `emptyDir` volume explicitly at `/tmp` if scratch space is required." },
      { id: 'B', text: "Leave the container root filesystem writable with chmod 777 permissions." },
      { id: 'C', text: "Mount the entire host root filesystem inside the container." },
      { id: 'D', text: "Grant write access to the host /bin and /usr directories." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `readOnlyRootFilesystem: true` in the container `securityContext` and mount an `emptyDir` volume explicitly at `/tmp` if scratch space is required. Enforcing `readOnlyRootFilesystem: true` blocks any write operations to the container root directory. Even if an attacker executes arbitrary code via an application bug, they cannot download payloads, modify existing binaries, or install persistent persistence mechanisms on disk.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Filesystem Security", "readOnlyRootFilesystem", "High Load Scale"]
  },
  {
    id: "k8s-cks-348",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Enforcing readOnlyRootFilesystem in Containers: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Filesystem Security to prevent malicious actors from writing scripts or modifying binaries inside a compromised microservice container.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Configuring readOnlyRootFilesystem: true with explicit emptyDir scratch mounts is under consideration.",
    options: [
      { id: 'A', text: "Set `readOnlyRootFilesystem: true` in the container `securityContext` and mount an `emptyDir` volume explicitly at `/tmp` if scratch space is required." },
      { id: 'B', text: "Leave the container root filesystem writable with chmod 777 permissions." },
      { id: 'C', text: "Mount the entire host root filesystem inside the container." },
      { id: 'D', text: "Grant write access to the host /bin and /usr directories." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `readOnlyRootFilesystem: true` in the container `securityContext` and mount an `emptyDir` volume explicitly at `/tmp` if scratch space is required. Enforcing `readOnlyRootFilesystem: true` blocks any write operations to the container root directory. Even if an attacker executes arbitrary code via an application bug, they cannot download payloads, modify existing binaries, or install persistent persistence mechanisms on disk.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Filesystem Security", "readOnlyRootFilesystem", "Security Compliance"]
  },
  {
    id: "k8s-cks-349",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Enforcing readOnlyRootFilesystem in Containers: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Filesystem Security to prevent malicious actors from writing scripts or modifying binaries inside a compromised microservice container.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Configuring readOnlyRootFilesystem: true with explicit emptyDir scratch mounts is under consideration.",
    options: [
      { id: 'A', text: "Set `readOnlyRootFilesystem: true` in the container `securityContext` and mount an `emptyDir` volume explicitly at `/tmp` if scratch space is required." },
      { id: 'B', text: "Leave the container root filesystem writable with chmod 777 permissions." },
      { id: 'C', text: "Mount the entire host root filesystem inside the container." },
      { id: 'D', text: "Grant write access to the host /bin and /usr directories." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `readOnlyRootFilesystem: true` in the container `securityContext` and mount an `emptyDir` volume explicitly at `/tmp` if scratch space is required. Enforcing `readOnlyRootFilesystem: true` blocks any write operations to the container root directory. Even if an attacker executes arbitrary code via an application bug, they cannot download payloads, modify existing binaries, or install persistent persistence mechanisms on disk.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Filesystem Security", "readOnlyRootFilesystem", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-350",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Enforcing readOnlyRootFilesystem in Containers: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Filesystem Security to prevent malicious actors from writing scripts or modifying binaries inside a compromised microservice container.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Configuring readOnlyRootFilesystem: true with explicit emptyDir scratch mounts is under consideration.",
    options: [
      { id: 'A', text: "Set `readOnlyRootFilesystem: true` in the container `securityContext` and mount an `emptyDir` volume explicitly at `/tmp` if scratch space is required." },
      { id: 'B', text: "Leave the container root filesystem writable with chmod 777 permissions." },
      { id: 'C', text: "Mount the entire host root filesystem inside the container." },
      { id: 'D', text: "Grant write access to the host /bin and /usr directories." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `readOnlyRootFilesystem: true` in the container `securityContext` and mount an `emptyDir` volume explicitly at `/tmp` if scratch space is required. Enforcing `readOnlyRootFilesystem: true` blocks any write operations to the container root directory. Even if an attacker executes arbitrary code via an application bug, they cannot download payloads, modify existing binaries, or install persistent persistence mechanisms on disk.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Filesystem Security", "readOnlyRootFilesystem", "Resilience Failure"]
  }
];

export default K8S_CKS_QUESTIONS_14;
