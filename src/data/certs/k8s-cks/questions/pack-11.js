export const K8S_CKS_QUESTIONS_11 = [
  {
    id: "k8s-cks-251",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "CIS Kubernetes Benchmark Verification: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates CIS Benchmarks to audit a newly installed Kubernetes control plane and worker nodes against official CIS Security Benchmarks.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Auditing control plane and node security with kube-bench is under consideration.",
    options: [
      { id: 'A', text: "Execute `kube-bench` against master and node components and remediate reported FAIL findings." },
      { id: 'B', text: "Inspect cluster logs manually with grep without a standardized benchmark." },
      { id: 'C', text: "Assume the default kubeadm installation passes all CIS benchmark criteria automatically." },
      { id: 'D', text: "Disable all authentication flags on the apiserver to simplify audit testing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kube-bench` against master and node components and remediate reported FAIL findings. `kube-bench` is an open-source tool from Aqua Security that checks whether Kubernetes is deployed according to security best practices defined in the CIS Kubernetes Benchmark, verifying file permissions, ownerships, and apiserver flags.",
    referenceUrl: "https://github.com/aquasecurity/kube-bench",
    tags: ["CIS Benchmarks", "CIS Benchmark", "Dr Failover"]
  },
  {
    id: "k8s-cks-252",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "CIS Kubernetes Benchmark Verification: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates CIS Benchmarks to audit a newly installed Kubernetes control plane and worker nodes against official CIS Security Benchmarks.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Auditing control plane and node security with kube-bench is under consideration.",
    options: [
      { id: 'A', text: "Execute `kube-bench` against master and node components and remediate reported FAIL findings." },
      { id: 'B', text: "Inspect cluster logs manually with grep without a standardized benchmark." },
      { id: 'C', text: "Assume the default kubeadm installation passes all CIS benchmark criteria automatically." },
      { id: 'D', text: "Disable all authentication flags on the apiserver to simplify audit testing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kube-bench` against master and node components and remediate reported FAIL findings. `kube-bench` is an open-source tool from Aqua Security that checks whether Kubernetes is deployed according to security best practices defined in the CIS Kubernetes Benchmark, verifying file permissions, ownerships, and apiserver flags.",
    referenceUrl: "https://github.com/aquasecurity/kube-bench",
    tags: ["CIS Benchmarks", "CIS Benchmark", "High Load Scale"]
  },
  {
    id: "k8s-cks-253",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "CIS Kubernetes Benchmark Verification: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates CIS Benchmarks to audit a newly installed Kubernetes control plane and worker nodes against official CIS Security Benchmarks.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Auditing control plane and node security with kube-bench is under consideration.",
    options: [
      { id: 'A', text: "Execute `kube-bench` against master and node components and remediate reported FAIL findings." },
      { id: 'B', text: "Inspect cluster logs manually with grep without a standardized benchmark." },
      { id: 'C', text: "Assume the default kubeadm installation passes all CIS benchmark criteria automatically." },
      { id: 'D', text: "Disable all authentication flags on the apiserver to simplify audit testing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kube-bench` against master and node components and remediate reported FAIL findings. `kube-bench` is an open-source tool from Aqua Security that checks whether Kubernetes is deployed according to security best practices defined in the CIS Kubernetes Benchmark, verifying file permissions, ownerships, and apiserver flags.",
    referenceUrl: "https://github.com/aquasecurity/kube-bench",
    tags: ["CIS Benchmarks", "CIS Benchmark", "Security Compliance"]
  },
  {
    id: "k8s-cks-254",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "CIS Kubernetes Benchmark Verification: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates CIS Benchmarks to audit a newly installed Kubernetes control plane and worker nodes against official CIS Security Benchmarks.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Auditing control plane and node security with kube-bench is under consideration.",
    options: [
      { id: 'A', text: "Execute `kube-bench` against master and node components and remediate reported FAIL findings." },
      { id: 'B', text: "Inspect cluster logs manually with grep without a standardized benchmark." },
      { id: 'C', text: "Assume the default kubeadm installation passes all CIS benchmark criteria automatically." },
      { id: 'D', text: "Disable all authentication flags on the apiserver to simplify audit testing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kube-bench` against master and node components and remediate reported FAIL findings. `kube-bench` is an open-source tool from Aqua Security that checks whether Kubernetes is deployed according to security best practices defined in the CIS Kubernetes Benchmark, verifying file permissions, ownerships, and apiserver flags.",
    referenceUrl: "https://github.com/aquasecurity/kube-bench",
    tags: ["CIS Benchmarks", "CIS Benchmark", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-255",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "CIS Kubernetes Benchmark Verification: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates CIS Benchmarks to audit a newly installed Kubernetes control plane and worker nodes against official CIS Security Benchmarks.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Auditing control plane and node security with kube-bench is under consideration.",
    options: [
      { id: 'A', text: "Execute `kube-bench` against master and node components and remediate reported FAIL findings." },
      { id: 'B', text: "Inspect cluster logs manually with grep without a standardized benchmark." },
      { id: 'C', text: "Assume the default kubeadm installation passes all CIS benchmark criteria automatically." },
      { id: 'D', text: "Disable all authentication flags on the apiserver to simplify audit testing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kube-bench` against master and node components and remediate reported FAIL findings. `kube-bench` is an open-source tool from Aqua Security that checks whether Kubernetes is deployed according to security best practices defined in the CIS Kubernetes Benchmark, verifying file permissions, ownerships, and apiserver flags.",
    referenceUrl: "https://github.com/aquasecurity/kube-bench",
    tags: ["CIS Benchmarks", "CIS Benchmark", "Resilience Failure"]
  },
  {
    id: "k8s-cks-256",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Securing the Kube-apiserver: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Control Plane Hardening to harden the Kubernetes API server against unauthenticated requests and enforce RBAC and Node authorization.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Configuring secure flags on kube-apiserver: anonymous-auth, authorization-mode is under consideration.",
    options: [
      { id: 'A', text: "Set `--anonymous-auth=false` and `--authorization-mode=Node,RBAC` in `/etc/kubernetes/manifests/kube-apiserver.yaml`." },
      { id: 'B', text: "Set `--anonymous-auth=true` and `--authorization-mode=AlwaysAllow`." },
      { id: 'C', text: "Expose the unencrypted insecure port 8080 on all network interfaces." },
      { id: 'D', text: "Disable TLS client certificate verification on the API server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `--anonymous-auth=false` and `--authorization-mode=Node,RBAC` in `/etc/kubernetes/manifests/kube-apiserver.yaml`. Setting `--anonymous-auth=false` rejects unauthenticated requests that do not present valid bearer tokens or client certificates. Configuring `--authorization-mode=Node,RBAC` ensures strict role-based access control and limits kubelet authority strictly to node-assigned pods.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/",
    tags: ["Control Plane Hardening", "apiserver Hardening", "Dr Failover"]
  },
  {
    id: "k8s-cks-257",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Securing the Kube-apiserver: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Control Plane Hardening to harden the Kubernetes API server against unauthenticated requests and enforce RBAC and Node authorization.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Configuring secure flags on kube-apiserver: anonymous-auth, authorization-mode is under consideration.",
    options: [
      { id: 'A', text: "Set `--anonymous-auth=false` and `--authorization-mode=Node,RBAC` in `/etc/kubernetes/manifests/kube-apiserver.yaml`." },
      { id: 'B', text: "Set `--anonymous-auth=true` and `--authorization-mode=AlwaysAllow`." },
      { id: 'C', text: "Expose the unencrypted insecure port 8080 on all network interfaces." },
      { id: 'D', text: "Disable TLS client certificate verification on the API server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `--anonymous-auth=false` and `--authorization-mode=Node,RBAC` in `/etc/kubernetes/manifests/kube-apiserver.yaml`. Setting `--anonymous-auth=false` rejects unauthenticated requests that do not present valid bearer tokens or client certificates. Configuring `--authorization-mode=Node,RBAC` ensures strict role-based access control and limits kubelet authority strictly to node-assigned pods.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/",
    tags: ["Control Plane Hardening", "apiserver Hardening", "High Load Scale"]
  },
  {
    id: "k8s-cks-258",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Securing the Kube-apiserver: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Control Plane Hardening to harden the Kubernetes API server against unauthenticated requests and enforce RBAC and Node authorization.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Configuring secure flags on kube-apiserver: anonymous-auth, authorization-mode is under consideration.",
    options: [
      { id: 'A', text: "Set `--anonymous-auth=false` and `--authorization-mode=Node,RBAC` in `/etc/kubernetes/manifests/kube-apiserver.yaml`." },
      { id: 'B', text: "Set `--anonymous-auth=true` and `--authorization-mode=AlwaysAllow`." },
      { id: 'C', text: "Expose the unencrypted insecure port 8080 on all network interfaces." },
      { id: 'D', text: "Disable TLS client certificate verification on the API server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `--anonymous-auth=false` and `--authorization-mode=Node,RBAC` in `/etc/kubernetes/manifests/kube-apiserver.yaml`. Setting `--anonymous-auth=false` rejects unauthenticated requests that do not present valid bearer tokens or client certificates. Configuring `--authorization-mode=Node,RBAC` ensures strict role-based access control and limits kubelet authority strictly to node-assigned pods.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/",
    tags: ["Control Plane Hardening", "apiserver Hardening", "Security Compliance"]
  },
  {
    id: "k8s-cks-259",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Securing the Kube-apiserver: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Control Plane Hardening to harden the Kubernetes API server against unauthenticated requests and enforce RBAC and Node authorization.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Configuring secure flags on kube-apiserver: anonymous-auth, authorization-mode is under consideration.",
    options: [
      { id: 'A', text: "Set `--anonymous-auth=false` and `--authorization-mode=Node,RBAC` in `/etc/kubernetes/manifests/kube-apiserver.yaml`." },
      { id: 'B', text: "Set `--anonymous-auth=true` and `--authorization-mode=AlwaysAllow`." },
      { id: 'C', text: "Expose the unencrypted insecure port 8080 on all network interfaces." },
      { id: 'D', text: "Disable TLS client certificate verification on the API server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `--anonymous-auth=false` and `--authorization-mode=Node,RBAC` in `/etc/kubernetes/manifests/kube-apiserver.yaml`. Setting `--anonymous-auth=false` rejects unauthenticated requests that do not present valid bearer tokens or client certificates. Configuring `--authorization-mode=Node,RBAC` ensures strict role-based access control and limits kubelet authority strictly to node-assigned pods.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/",
    tags: ["Control Plane Hardening", "apiserver Hardening", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-260",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Securing the Kube-apiserver: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Control Plane Hardening to harden the Kubernetes API server against unauthenticated requests and enforce RBAC and Node authorization.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Configuring secure flags on kube-apiserver: anonymous-auth, authorization-mode is under consideration.",
    options: [
      { id: 'A', text: "Set `--anonymous-auth=false` and `--authorization-mode=Node,RBAC` in `/etc/kubernetes/manifests/kube-apiserver.yaml`." },
      { id: 'B', text: "Set `--anonymous-auth=true` and `--authorization-mode=AlwaysAllow`." },
      { id: 'C', text: "Expose the unencrypted insecure port 8080 on all network interfaces." },
      { id: 'D', text: "Disable TLS client certificate verification on the API server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `--anonymous-auth=false` and `--authorization-mode=Node,RBAC` in `/etc/kubernetes/manifests/kube-apiserver.yaml`. Setting `--anonymous-auth=false` rejects unauthenticated requests that do not present valid bearer tokens or client certificates. Configuring `--authorization-mode=Node,RBAC` ensures strict role-based access control and limits kubelet authority strictly to node-assigned pods.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/",
    tags: ["Control Plane Hardening", "apiserver Hardening", "Resilience Failure"]
  },
  {
    id: "k8s-cks-261",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Securing Kubelet Configuration: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Kubelet Hardening to prevent unauthorized attackers from querying kubelet endpoints or running arbitrary commands via kubelet port 10250.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Restricting kubelet anonymous access, webhooks, and read-only port is under consideration.",
    options: [
      { id: 'A', text: "In `/var/lib/kubelet/config.yaml`, set `authentication.anonymous.enabled: false`, `authorization.mode: Webhook`, and `readOnlyPort: 0`." },
      { id: 'B', text: "Set `authentication.anonymous.enabled: true` and `authorization.mode: AlwaysAllow`." },
      { id: 'C', text: "Open the kubelet read-only port 10255 to public internet access." },
      { id: 'D', text: "Grant full root sudo permissions to anonymous callers on the node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In `/var/lib/kubelet/config.yaml`, set `authentication.anonymous.enabled: false`, `authorization.mode: Webhook`, and `readOnlyPort: 0`. Securing the kubelet daemon requires disabling anonymous authentication, enforcing `authorization.mode: Webhook` so all kubelet API requests are verified via the API server, and setting `readOnlyPort: 0` to close unauthenticated metrics access.",
    referenceUrl: "https://kubernetes.io/docs/reference/config-api/kubelet-config.v1beta1/",
    tags: ["Kubelet Hardening", "Kubelet Hardening", "Dr Failover"]
  },
  {
    id: "k8s-cks-262",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Securing Kubelet Configuration: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Kubelet Hardening to prevent unauthorized attackers from querying kubelet endpoints or running arbitrary commands via kubelet port 10250.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Restricting kubelet anonymous access, webhooks, and read-only port is under consideration.",
    options: [
      { id: 'A', text: "In `/var/lib/kubelet/config.yaml`, set `authentication.anonymous.enabled: false`, `authorization.mode: Webhook`, and `readOnlyPort: 0`." },
      { id: 'B', text: "Set `authentication.anonymous.enabled: true` and `authorization.mode: AlwaysAllow`." },
      { id: 'C', text: "Open the kubelet read-only port 10255 to public internet access." },
      { id: 'D', text: "Grant full root sudo permissions to anonymous callers on the node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In `/var/lib/kubelet/config.yaml`, set `authentication.anonymous.enabled: false`, `authorization.mode: Webhook`, and `readOnlyPort: 0`. Securing the kubelet daemon requires disabling anonymous authentication, enforcing `authorization.mode: Webhook` so all kubelet API requests are verified via the API server, and setting `readOnlyPort: 0` to close unauthenticated metrics access.",
    referenceUrl: "https://kubernetes.io/docs/reference/config-api/kubelet-config.v1beta1/",
    tags: ["Kubelet Hardening", "Kubelet Hardening", "High Load Scale"]
  },
  {
    id: "k8s-cks-263",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Securing Kubelet Configuration: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Kubelet Hardening to prevent unauthorized attackers from querying kubelet endpoints or running arbitrary commands via kubelet port 10250.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Restricting kubelet anonymous access, webhooks, and read-only port is under consideration.",
    options: [
      { id: 'A', text: "In `/var/lib/kubelet/config.yaml`, set `authentication.anonymous.enabled: false`, `authorization.mode: Webhook`, and `readOnlyPort: 0`." },
      { id: 'B', text: "Set `authentication.anonymous.enabled: true` and `authorization.mode: AlwaysAllow`." },
      { id: 'C', text: "Open the kubelet read-only port 10255 to public internet access." },
      { id: 'D', text: "Grant full root sudo permissions to anonymous callers on the node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In `/var/lib/kubelet/config.yaml`, set `authentication.anonymous.enabled: false`, `authorization.mode: Webhook`, and `readOnlyPort: 0`. Securing the kubelet daemon requires disabling anonymous authentication, enforcing `authorization.mode: Webhook` so all kubelet API requests are verified via the API server, and setting `readOnlyPort: 0` to close unauthenticated metrics access.",
    referenceUrl: "https://kubernetes.io/docs/reference/config-api/kubelet-config.v1beta1/",
    tags: ["Kubelet Hardening", "Kubelet Hardening", "Security Compliance"]
  },
  {
    id: "k8s-cks-264",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Securing Kubelet Configuration: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Kubelet Hardening to prevent unauthorized attackers from querying kubelet endpoints or running arbitrary commands via kubelet port 10250.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Restricting kubelet anonymous access, webhooks, and read-only port is under consideration.",
    options: [
      { id: 'A', text: "In `/var/lib/kubelet/config.yaml`, set `authentication.anonymous.enabled: false`, `authorization.mode: Webhook`, and `readOnlyPort: 0`." },
      { id: 'B', text: "Set `authentication.anonymous.enabled: true` and `authorization.mode: AlwaysAllow`." },
      { id: 'C', text: "Open the kubelet read-only port 10255 to public internet access." },
      { id: 'D', text: "Grant full root sudo permissions to anonymous callers on the node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In `/var/lib/kubelet/config.yaml`, set `authentication.anonymous.enabled: false`, `authorization.mode: Webhook`, and `readOnlyPort: 0`. Securing the kubelet daemon requires disabling anonymous authentication, enforcing `authorization.mode: Webhook` so all kubelet API requests are verified via the API server, and setting `readOnlyPort: 0` to close unauthenticated metrics access.",
    referenceUrl: "https://kubernetes.io/docs/reference/config-api/kubelet-config.v1beta1/",
    tags: ["Kubelet Hardening", "Kubelet Hardening", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-265",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Securing Kubelet Configuration: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Kubelet Hardening to prevent unauthorized attackers from querying kubelet endpoints or running arbitrary commands via kubelet port 10250.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Restricting kubelet anonymous access, webhooks, and read-only port is under consideration.",
    options: [
      { id: 'A', text: "In `/var/lib/kubelet/config.yaml`, set `authentication.anonymous.enabled: false`, `authorization.mode: Webhook`, and `readOnlyPort: 0`." },
      { id: 'B', text: "Set `authentication.anonymous.enabled: true` and `authorization.mode: AlwaysAllow`." },
      { id: 'C', text: "Open the kubelet read-only port 10255 to public internet access." },
      { id: 'D', text: "Grant full root sudo permissions to anonymous callers on the node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In `/var/lib/kubelet/config.yaml`, set `authentication.anonymous.enabled: false`, `authorization.mode: Webhook`, and `readOnlyPort: 0`. Securing the kubelet daemon requires disabling anonymous authentication, enforcing `authorization.mode: Webhook` so all kubelet API requests are verified via the API server, and setting `readOnlyPort: 0` to close unauthenticated metrics access.",
    referenceUrl: "https://kubernetes.io/docs/reference/config-api/kubelet-config.v1beta1/",
    tags: ["Kubelet Hardening", "Kubelet Hardening", "Resilience Failure"]
  },
  {
    id: "k8s-cks-266",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Encrypting Secret Data at Rest: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Data-at-Rest Encryption to ensure that all Kubernetes Secret resources stored within the etcd database are encrypted at rest on disk.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Configuring EncryptionConfiguration with aescbc or kms providers in etcd is under consideration.",
    options: [
      { id: 'A', text: "Configure an `EncryptionConfiguration` provider file (e.g., using `aescbc` or `kms`) and pass `--encryption-provider-config` to the apiserver." },
      { id: 'B', text: "Rely on standard Linux ext4 filesystem encryption without etcd configuration." },
      { id: 'C', text: "Encode Secrets with base64 and assume base64 provides cryptographic confidentiality." },
      { id: 'D', text: "Store Secrets in plaintext ConfigMaps instead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an `EncryptionConfiguration` provider file (e.g., using `aescbc` or `kms`) and pass `--encryption-provider-config` to the apiserver. By default, Kubernetes stores Secrets in etcd in plaintext. Implementing an `EncryptionConfiguration` manifest encrypts secret values before they are written to etcd. A subsequent `kubectl get secrets --all-namespaces -o json | kubectl replace -f -` encrypts existing secrets.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/",
    tags: ["Data-at-Rest Encryption", "Secret Encryption", "Dr Failover"]
  },
  {
    id: "k8s-cks-267",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Encrypting Secret Data at Rest: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Data-at-Rest Encryption to ensure that all Kubernetes Secret resources stored within the etcd database are encrypted at rest on disk.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Configuring EncryptionConfiguration with aescbc or kms providers in etcd is under consideration.",
    options: [
      { id: 'A', text: "Configure an `EncryptionConfiguration` provider file (e.g., using `aescbc` or `kms`) and pass `--encryption-provider-config` to the apiserver." },
      { id: 'B', text: "Rely on standard Linux ext4 filesystem encryption without etcd configuration." },
      { id: 'C', text: "Encode Secrets with base64 and assume base64 provides cryptographic confidentiality." },
      { id: 'D', text: "Store Secrets in plaintext ConfigMaps instead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an `EncryptionConfiguration` provider file (e.g., using `aescbc` or `kms`) and pass `--encryption-provider-config` to the apiserver. By default, Kubernetes stores Secrets in etcd in plaintext. Implementing an `EncryptionConfiguration` manifest encrypts secret values before they are written to etcd. A subsequent `kubectl get secrets --all-namespaces -o json | kubectl replace -f -` encrypts existing secrets.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/",
    tags: ["Data-at-Rest Encryption", "Secret Encryption", "High Load Scale"]
  },
  {
    id: "k8s-cks-268",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Encrypting Secret Data at Rest: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Data-at-Rest Encryption to ensure that all Kubernetes Secret resources stored within the etcd database are encrypted at rest on disk.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Configuring EncryptionConfiguration with aescbc or kms providers in etcd is under consideration.",
    options: [
      { id: 'A', text: "Configure an `EncryptionConfiguration` provider file (e.g., using `aescbc` or `kms`) and pass `--encryption-provider-config` to the apiserver." },
      { id: 'B', text: "Rely on standard Linux ext4 filesystem encryption without etcd configuration." },
      { id: 'C', text: "Encode Secrets with base64 and assume base64 provides cryptographic confidentiality." },
      { id: 'D', text: "Store Secrets in plaintext ConfigMaps instead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an `EncryptionConfiguration` provider file (e.g., using `aescbc` or `kms`) and pass `--encryption-provider-config` to the apiserver. By default, Kubernetes stores Secrets in etcd in plaintext. Implementing an `EncryptionConfiguration` manifest encrypts secret values before they are written to etcd. A subsequent `kubectl get secrets --all-namespaces -o json | kubectl replace -f -` encrypts existing secrets.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/",
    tags: ["Data-at-Rest Encryption", "Secret Encryption", "Security Compliance"]
  },
  {
    id: "k8s-cks-269",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Encrypting Secret Data at Rest: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Data-at-Rest Encryption to ensure that all Kubernetes Secret resources stored within the etcd database are encrypted at rest on disk.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Configuring EncryptionConfiguration with aescbc or kms providers in etcd is under consideration.",
    options: [
      { id: 'A', text: "Configure an `EncryptionConfiguration` provider file (e.g., using `aescbc` or `kms`) and pass `--encryption-provider-config` to the apiserver." },
      { id: 'B', text: "Rely on standard Linux ext4 filesystem encryption without etcd configuration." },
      { id: 'C', text: "Encode Secrets with base64 and assume base64 provides cryptographic confidentiality." },
      { id: 'D', text: "Store Secrets in plaintext ConfigMaps instead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an `EncryptionConfiguration` provider file (e.g., using `aescbc` or `kms`) and pass `--encryption-provider-config` to the apiserver. By default, Kubernetes stores Secrets in etcd in plaintext. Implementing an `EncryptionConfiguration` manifest encrypts secret values before they are written to etcd. A subsequent `kubectl get secrets --all-namespaces -o json | kubectl replace -f -` encrypts existing secrets.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/",
    tags: ["Data-at-Rest Encryption", "Secret Encryption", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-270",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Encrypting Secret Data at Rest: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Data-at-Rest Encryption to ensure that all Kubernetes Secret resources stored within the etcd database are encrypted at rest on disk.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Configuring EncryptionConfiguration with aescbc or kms providers in etcd is under consideration.",
    options: [
      { id: 'A', text: "Configure an `EncryptionConfiguration` provider file (e.g., using `aescbc` or `kms`) and pass `--encryption-provider-config` to the apiserver." },
      { id: 'B', text: "Rely on standard Linux ext4 filesystem encryption without etcd configuration." },
      { id: 'C', text: "Encode Secrets with base64 and assume base64 provides cryptographic confidentiality." },
      { id: 'D', text: "Store Secrets in plaintext ConfigMaps instead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an `EncryptionConfiguration` provider file (e.g., using `aescbc` or `kms`) and pass `--encryption-provider-config` to the apiserver. By default, Kubernetes stores Secrets in etcd in plaintext. Implementing an `EncryptionConfiguration` manifest encrypts secret values before they are written to etcd. A subsequent `kubectl get secrets --all-namespaces -o json | kubectl replace -f -` encrypts existing secrets.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/",
    tags: ["Data-at-Rest Encryption", "Secret Encryption", "Resilience Failure"]
  },
  {
    id: "k8s-cks-271",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Securing Network Ingress with NetworkPolicies: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Network Isolation to prevent workloads in a multi-tenant cluster from accessing sensitive services running in other namespaces.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Strict multi-tenant namespace segmentation using default-deny network policies is under consideration.",
    options: [
      { id: 'A', text: "Apply a default-deny NetworkPolicy in every tenant namespace and whitelist only required ingress/egress CIDRs and selectors." },
      { id: 'B', text: "Rely on Kubernetes namespaces as secure network isolation boundaries by default." },
      { id: 'C', text: "Disable CNI network plugins across tenant nodes." },
      { id: 'D', text: "Assign unique DNS domain suffixes without network firewall rules." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply a default-deny NetworkPolicy in every tenant namespace and whitelist only required ingress/egress CIDRs and selectors. Namespaces in Kubernetes provide logical scoping, not network isolation. Without NetworkPolicies, all pods across all namespaces can route traffic to each other. Implementing a default-deny NetworkPolicy enforces strict tenant boundary isolation at the network layer.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["Network Isolation", "Network Isolation", "Dr Failover"]
  },
  {
    id: "k8s-cks-272",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Securing Network Ingress with NetworkPolicies: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Network Isolation to prevent workloads in a multi-tenant cluster from accessing sensitive services running in other namespaces.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Strict multi-tenant namespace segmentation using default-deny network policies is under consideration.",
    options: [
      { id: 'A', text: "Apply a default-deny NetworkPolicy in every tenant namespace and whitelist only required ingress/egress CIDRs and selectors." },
      { id: 'B', text: "Rely on Kubernetes namespaces as secure network isolation boundaries by default." },
      { id: 'C', text: "Disable CNI network plugins across tenant nodes." },
      { id: 'D', text: "Assign unique DNS domain suffixes without network firewall rules." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply a default-deny NetworkPolicy in every tenant namespace and whitelist only required ingress/egress CIDRs and selectors. Namespaces in Kubernetes provide logical scoping, not network isolation. Without NetworkPolicies, all pods across all namespaces can route traffic to each other. Implementing a default-deny NetworkPolicy enforces strict tenant boundary isolation at the network layer.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["Network Isolation", "Network Isolation", "High Load Scale"]
  },
  {
    id: "k8s-cks-273",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Securing Network Ingress with NetworkPolicies: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Network Isolation to prevent workloads in a multi-tenant cluster from accessing sensitive services running in other namespaces.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Strict multi-tenant namespace segmentation using default-deny network policies is under consideration.",
    options: [
      { id: 'A', text: "Apply a default-deny NetworkPolicy in every tenant namespace and whitelist only required ingress/egress CIDRs and selectors." },
      { id: 'B', text: "Rely on Kubernetes namespaces as secure network isolation boundaries by default." },
      { id: 'C', text: "Disable CNI network plugins across tenant nodes." },
      { id: 'D', text: "Assign unique DNS domain suffixes without network firewall rules." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply a default-deny NetworkPolicy in every tenant namespace and whitelist only required ingress/egress CIDRs and selectors. Namespaces in Kubernetes provide logical scoping, not network isolation. Without NetworkPolicies, all pods across all namespaces can route traffic to each other. Implementing a default-deny NetworkPolicy enforces strict tenant boundary isolation at the network layer.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["Network Isolation", "Network Isolation", "Security Compliance"]
  },
  {
    id: "k8s-cks-274",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Securing Network Ingress with NetworkPolicies: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Network Isolation to prevent workloads in a multi-tenant cluster from accessing sensitive services running in other namespaces.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Strict multi-tenant namespace segmentation using default-deny network policies is under consideration.",
    options: [
      { id: 'A', text: "Apply a default-deny NetworkPolicy in every tenant namespace and whitelist only required ingress/egress CIDRs and selectors." },
      { id: 'B', text: "Rely on Kubernetes namespaces as secure network isolation boundaries by default." },
      { id: 'C', text: "Disable CNI network plugins across tenant nodes." },
      { id: 'D', text: "Assign unique DNS domain suffixes without network firewall rules." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply a default-deny NetworkPolicy in every tenant namespace and whitelist only required ingress/egress CIDRs and selectors. Namespaces in Kubernetes provide logical scoping, not network isolation. Without NetworkPolicies, all pods across all namespaces can route traffic to each other. Implementing a default-deny NetworkPolicy enforces strict tenant boundary isolation at the network layer.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["Network Isolation", "Network Isolation", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-275",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Securing Network Ingress with NetworkPolicies: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Network Isolation to prevent workloads in a multi-tenant cluster from accessing sensitive services running in other namespaces.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Strict multi-tenant namespace segmentation using default-deny network policies is under consideration.",
    options: [
      { id: 'A', text: "Apply a default-deny NetworkPolicy in every tenant namespace and whitelist only required ingress/egress CIDRs and selectors." },
      { id: 'B', text: "Rely on Kubernetes namespaces as secure network isolation boundaries by default." },
      { id: 'C', text: "Disable CNI network plugins across tenant nodes." },
      { id: 'D', text: "Assign unique DNS domain suffixes without network firewall rules." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply a default-deny NetworkPolicy in every tenant namespace and whitelist only required ingress/egress CIDRs and selectors. Namespaces in Kubernetes provide logical scoping, not network isolation. Without NetworkPolicies, all pods across all namespaces can route traffic to each other. Implementing a default-deny NetworkPolicy enforces strict tenant boundary isolation at the network layer.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["Network Isolation", "Network Isolation", "Resilience Failure"]
  }
];

export default K8S_CKS_QUESTIONS_11;
