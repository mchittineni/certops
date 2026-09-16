export const K8S_CKS_QUESTIONS_16 = [
  {
    id: "k8s-cks-376",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Managing Pod Security with Network Egress Policies: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to prevent a compromised microservice from connecting to external command-and-control (C2) servers or exfiltrating stolen customer data.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Apply an egress NetworkPolicy allowing only cluster services and the payment API endpoints." },
      { id: 'B', text: "Apply an ingress NetworkPolicy allowing only the cluster services that call into the workload." },
      { id: 'C', text: "Apply an egress NetworkPolicy whose `ipBlock` covers the whole VPC range on port 443." },
      { id: 'D', text: "Apply a `dnsPolicy: None` with a resolver that answers only for the payment API hostname." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply an egress NetworkPolicy restricting outbound traffic strictly to approved cluster internal services and designated external payment API endpoints. Attackers who compromise an internal container often download attack tools or exfiltrate sensitive data to external command-and-control servers. Restricting egress traffic via NetworkPolicies blocks unauthorized outbound connections, confining the compromise.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress-rule-example",
    tags: ["Egress Restriction","Egress Defense","Dr Failover"]
  },
  {
    id: "k8s-cks-377",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Managing Pod Security with Network Egress Policies: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to prevent a compromised microservice from connecting to external command-and-control (C2) servers or exfiltrating stolen customer data.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Apply an egress NetworkPolicy allowing only cluster services and the payment API endpoints." },
      { id: 'B', text: "Apply an egress NetworkPolicy whose `ipBlock` covers the whole VPC range on port 443." },
      { id: 'C', text: "Apply a `dnsPolicy: None` with a resolver that answers only for the payment API hostname." },
      { id: 'D', text: "Apply an ingress NetworkPolicy allowing only the cluster services that call into the workload." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply an egress NetworkPolicy restricting outbound traffic strictly to approved cluster internal services and designated external payment API endpoints. Attackers who compromise an internal container often download attack tools or exfiltrate sensitive data to external command-and-control servers. Restricting egress traffic via NetworkPolicies blocks unauthorized outbound connections, confining the compromise.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress-rule-example",
    tags: ["Egress Restriction","Egress Defense","High Load Scale"]
  },
  {
    id: "k8s-cks-378",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Managing Pod Security with Network Egress Policies: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to prevent a compromised microservice from connecting to external command-and-control (C2) servers or exfiltrating stolen customer data.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Apply an egress NetworkPolicy whose `ipBlock` covers the whole VPC range on port 443." },
      { id: 'B', text: "Apply an egress NetworkPolicy allowing only cluster services and the payment API endpoints." },
      { id: 'C', text: "Apply an ingress NetworkPolicy allowing only the cluster services that call into the workload." },
      { id: 'D', text: "Apply a `dnsPolicy: None` with a resolver that answers only for the payment API hostname." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Apply an egress NetworkPolicy restricting outbound traffic strictly to approved cluster internal services and designated external payment API endpoints. Attackers who compromise an internal container often download attack tools or exfiltrate sensitive data to external command-and-control servers. Restricting egress traffic via NetworkPolicies blocks unauthorized outbound connections, confining the compromise.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress-rule-example",
    tags: ["Egress Restriction","Egress Defense","Security Compliance"]
  },
  {
    id: "k8s-cks-379",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Managing Pod Security with Network Egress Policies: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to prevent a compromised microservice from connecting to external command-and-control (C2) servers or exfiltrating stolen customer data.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Apply a `dnsPolicy: None` with a resolver that answers only for the payment API hostname." },
      { id: 'B', text: "Apply an egress NetworkPolicy allowing only cluster services and the payment API endpoints." },
      { id: 'C', text: "Apply an egress NetworkPolicy whose `ipBlock` covers the whole VPC range on port 443." },
      { id: 'D', text: "Apply an ingress NetworkPolicy allowing only the cluster services that call into the workload." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Apply an egress NetworkPolicy restricting outbound traffic strictly to approved cluster internal services and designated external payment API endpoints. Attackers who compromise an internal container often download attack tools or exfiltrate sensitive data to external command-and-control servers. Restricting egress traffic via NetworkPolicies blocks unauthorized outbound connections, confining the compromise.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress-rule-example",
    tags: ["Egress Restriction","Egress Defense","Hybrid Migration"]
  },
  {
    id: "k8s-cks-380",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Managing Pod Security with Network Egress Policies: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to prevent a compromised microservice from connecting to external command-and-control (C2) servers or exfiltrating stolen customer data.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Apply an ingress NetworkPolicy allowing only the cluster services that call into the workload." },
      { id: 'B', text: "Apply an egress NetworkPolicy whose `ipBlock` covers the whole VPC range on port 443." },
      { id: 'C', text: "Apply an egress NetworkPolicy allowing only cluster services and the payment API endpoints." },
      { id: 'D', text: "Apply a `dnsPolicy: None` with a resolver that answers only for the payment API hostname." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply an egress NetworkPolicy restricting outbound traffic strictly to approved cluster internal services and designated external payment API endpoints. Attackers who compromise an internal container often download attack tools or exfiltrate sensitive data to external command-and-control servers. Restricting egress traffic via NetworkPolicies blocks unauthorized outbound connections, confining the compromise.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress-rule-example",
    tags: ["Egress Restriction","Egress Defense","Resilience Failure"]
  },
  {
    id: "k8s-cks-381",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Static Manifest Analysis with Kube-linter and Conftest: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to detect security misconfigurations (such as missing resource limits or running as root) in Kubernetes YAML manifests before merging pull requests.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Run Pod Security Admission in `warn` mode so insecure manifests are reported on apply." },
      { id: 'B', text: "Run Trivy's image scan in CI so the manifests are checked against the image's findings." },
      { id: 'C', text: "Run a Kyverno mutate policy in the cluster that repairs each of the insecure fields on admission." },
      { id: 'D', text: "Run `kube-linter`, `checkov` or `conftest` in CI so insecure manifest patterns fail the build." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Integrate static analysis tools like `kube-linter`, `checkov`, or `conftest` (OPA) into the CI pipeline to fail builds on insecure manifest patterns. Static analysis tools like `kube-linter` and `conftest` parse Kubernetes YAML manifests before deployment, checking for violations of security best practices (e.g., privileged containers, missing probes, root UIDs) early in the development lifecycle (shifting security left).",
    referenceUrl: "https://github.com/stackrox/kube-linter",
    tags: ["Static Manifest Scanning","Static Analysis","Dr Failover"]
  },
  {
    id: "k8s-cks-382",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Static Manifest Analysis with Kube-linter and Conftest: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to detect security misconfigurations (such as missing resource limits or running as root) in Kubernetes YAML manifests before merging pull requests.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Run a Kyverno mutate policy in the cluster that repairs each of the insecure fields on admission." },
      { id: 'B', text: "Run Trivy's image scan in CI so the manifests are checked against the image's findings." },
      { id: 'C', text: "Run `kube-linter`, `checkov` or `conftest` in CI so insecure manifest patterns fail the build." },
      { id: 'D', text: "Run Pod Security Admission in `warn` mode so insecure manifests are reported on apply." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Integrate static analysis tools like `kube-linter`, `checkov`, or `conftest` (OPA) into the CI pipeline to fail builds on insecure manifest patterns. Static analysis tools like `kube-linter` and `conftest` parse Kubernetes YAML manifests before deployment, checking for violations of security best practices (e.g., privileged containers, missing probes, root UIDs) early in the development lifecycle (shifting security left).",
    referenceUrl: "https://github.com/stackrox/kube-linter",
    tags: ["Static Manifest Scanning","Static Analysis","High Load Scale"]
  },
  {
    id: "k8s-cks-383",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Static Manifest Analysis with Kube-linter and Conftest: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to detect security misconfigurations (such as missing resource limits or running as root) in Kubernetes YAML manifests before merging pull requests.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Run Trivy's image scan in CI so the manifests are checked against the image's findings." },
      { id: 'B', text: "Run Pod Security Admission in `warn` mode so insecure manifests are reported on apply." },
      { id: 'C', text: "Run `kube-linter`, `checkov` or `conftest` in CI so insecure manifest patterns fail the build." },
      { id: 'D', text: "Run a Kyverno mutate policy in the cluster that repairs each of the insecure fields on admission." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Integrate static analysis tools like `kube-linter`, `checkov`, or `conftest` (OPA) into the CI pipeline to fail builds on insecure manifest patterns. Static analysis tools like `kube-linter` and `conftest` parse Kubernetes YAML manifests before deployment, checking for violations of security best practices (e.g., privileged containers, missing probes, root UIDs) early in the development lifecycle (shifting security left).",
    referenceUrl: "https://github.com/stackrox/kube-linter",
    tags: ["Static Manifest Scanning","Static Analysis","Security Compliance"]
  },
  {
    id: "k8s-cks-384",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Static Manifest Analysis with Kube-linter and Conftest: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to detect security misconfigurations (such as missing resource limits or running as root) in Kubernetes YAML manifests before merging pull requests.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Run `kube-linter`, `checkov` or `conftest` in CI so insecure manifest patterns fail the build." },
      { id: 'B', text: "Run a Kyverno mutate policy in the cluster that repairs each of the insecure fields on admission." },
      { id: 'C', text: "Run Trivy's image scan in CI so the manifests are checked against the image's findings." },
      { id: 'D', text: "Run Pod Security Admission in `warn` mode so insecure manifests are reported on apply." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate static analysis tools like `kube-linter`, `checkov`, or `conftest` (OPA) into the CI pipeline to fail builds on insecure manifest patterns. Static analysis tools like `kube-linter` and `conftest` parse Kubernetes YAML manifests before deployment, checking for violations of security best practices (e.g., privileged containers, missing probes, root UIDs) early in the development lifecycle (shifting security left).",
    referenceUrl: "https://github.com/stackrox/kube-linter",
    tags: ["Static Manifest Scanning","Static Analysis","Hybrid Migration"]
  },
  {
    id: "k8s-cks-385",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Static Manifest Analysis with Kube-linter and Conftest: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to detect security misconfigurations (such as missing resource limits or running as root) in Kubernetes YAML manifests before merging pull requests.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Run Pod Security Admission in `warn` mode so insecure manifests are reported on apply." },
      { id: 'B', text: "Run Trivy's image scan in CI so the manifests are checked against the image's findings." },
      { id: 'C', text: "Run a Kyverno mutate policy in the cluster that repairs each of the insecure fields on admission." },
      { id: 'D', text: "Run `kube-linter`, `checkov` or `conftest` in CI so insecure manifest patterns fail the build." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Integrate static analysis tools like `kube-linter`, `checkov`, or `conftest` (OPA) into the CI pipeline to fail builds on insecure manifest patterns. Static analysis tools like `kube-linter` and `conftest` parse Kubernetes YAML manifests before deployment, checking for violations of security best practices (e.g., privileged containers, missing probes, root UIDs) early in the development lifecycle (shifting security left).",
    referenceUrl: "https://github.com/stackrox/kube-linter",
    tags: ["Static Manifest Scanning","Static Analysis","Resilience Failure"]
  },
  {
    id: "k8s-cks-386",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Container Image Vulnerability Scanning with Trivy: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to prevent container images containing high or critical severity CVEs from being pushed to the enterprise container registry.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Run `trivy image --severity HIGH,CRITICAL --exit-code 0 &lt;image&gt;` and publish the report." },
      { id: 'B', text: "Run the registry's own scheduled scanning and review the findings on the release cadence." },
      { id: 'C', text: "Run `trivy image --ignore-unfixed &lt;image&gt;` so only actionable findings reach the build." },
      { id: 'D', text: "Run `trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image&gt;` as a CI build step." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute `trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image-name&gt;` in the CI build step to block vulnerable artifacts. `Trivy` is a comprehensive vulnerability scanner for container images. Configuring `--severity HIGH,CRITICAL --exit-code 1` causes the CI runner to return a non-zero exit code upon finding severe vulnerabilities, blocking the build from publishing the insecure artifact.",
    referenceUrl: "https://github.com/aquasecurity/trivy",
    tags: ["Vulnerability Scanning","Vulnerability Scanning","Dr Failover"]
  },
  {
    id: "k8s-cks-387",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Container Image Vulnerability Scanning with Trivy: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to prevent container images containing high or critical severity CVEs from being pushed to the enterprise container registry.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Run `trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image&gt;` as a CI build step." },
      { id: 'B', text: "Run the registry's own scheduled scanning and review the findings on the release cadence." },
      { id: 'C', text: "Run `trivy image --severity HIGH,CRITICAL --exit-code 0 &lt;image&gt;` and publish the report." },
      { id: 'D', text: "Run `trivy image --ignore-unfixed &lt;image&gt;` so only actionable findings reach the build." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image-name&gt;` in the CI build step to block vulnerable artifacts. `Trivy` is a comprehensive vulnerability scanner for container images. Configuring `--severity HIGH,CRITICAL --exit-code 1` causes the CI runner to return a non-zero exit code upon finding severe vulnerabilities, blocking the build from publishing the insecure artifact.",
    referenceUrl: "https://github.com/aquasecurity/trivy",
    tags: ["Vulnerability Scanning","Vulnerability Scanning","High Load Scale"]
  },
  {
    id: "k8s-cks-388",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Container Image Vulnerability Scanning with Trivy: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to prevent container images containing high or critical severity CVEs from being pushed to the enterprise container registry.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Run `trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image&gt;` as a CI build step." },
      { id: 'B', text: "Run `trivy image --ignore-unfixed &lt;image&gt;` so only actionable findings reach the build." },
      { id: 'C', text: "Run the registry's own scheduled scanning and review the findings on the release cadence." },
      { id: 'D', text: "Run `trivy image --severity HIGH,CRITICAL --exit-code 0 &lt;image&gt;` and publish the report." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image-name&gt;` in the CI build step to block vulnerable artifacts. `Trivy` is a comprehensive vulnerability scanner for container images. Configuring `--severity HIGH,CRITICAL --exit-code 1` causes the CI runner to return a non-zero exit code upon finding severe vulnerabilities, blocking the build from publishing the insecure artifact.",
    referenceUrl: "https://github.com/aquasecurity/trivy",
    tags: ["Vulnerability Scanning","Vulnerability Scanning","Security Compliance"]
  },
  {
    id: "k8s-cks-389",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Container Image Vulnerability Scanning with Trivy: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to prevent container images containing high or critical severity CVEs from being pushed to the enterprise container registry.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Run `trivy image --severity HIGH,CRITICAL --exit-code 0 &lt;image&gt;` and publish the report." },
      { id: 'B', text: "Run the registry's own scheduled scanning and review the findings on the release cadence." },
      { id: 'C', text: "Run `trivy image --ignore-unfixed &lt;image&gt;` so only actionable findings reach the build." },
      { id: 'D', text: "Run `trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image&gt;` as a CI build step." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute `trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image-name&gt;` in the CI build step to block vulnerable artifacts. `Trivy` is a comprehensive vulnerability scanner for container images. Configuring `--severity HIGH,CRITICAL --exit-code 1` causes the CI runner to return a non-zero exit code upon finding severe vulnerabilities, blocking the build from publishing the insecure artifact.",
    referenceUrl: "https://github.com/aquasecurity/trivy",
    tags: ["Vulnerability Scanning","Vulnerability Scanning","Hybrid Migration"]
  },
  {
    id: "k8s-cks-390",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Container Image Vulnerability Scanning with Trivy: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to prevent container images containing high or critical severity CVEs from being pushed to the enterprise container registry.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Run `trivy image --ignore-unfixed &lt;image&gt;` so only actionable findings reach the build." },
      { id: 'B', text: "Run `trivy image --severity HIGH,CRITICAL --exit-code 0 &lt;image&gt;` and publish the report." },
      { id: 'C', text: "Run the registry's own scheduled scanning and review the findings on the release cadence." },
      { id: 'D', text: "Run `trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image&gt;` as a CI build step." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute `trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image-name&gt;` in the CI build step to block vulnerable artifacts. `Trivy` is a comprehensive vulnerability scanner for container images. Configuring `--severity HIGH,CRITICAL --exit-code 1` causes the CI runner to return a non-zero exit code upon finding severe vulnerabilities, blocking the build from publishing the insecure artifact.",
    referenceUrl: "https://github.com/aquasecurity/trivy",
    tags: ["Vulnerability Scanning","Vulnerability Scanning","Resilience Failure"]
  },
  {
    id: "k8s-cks-391",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Image Signing and Verification with Cosign (Sigstore): Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to guarantee that only container images built and signed by the authorized corporate CI pipeline can be executed in Kubernetes.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Sign images in CI with `cosign sign` and have the deploy job verify them before it applies." },
      { id: 'B', text: "Enable registry content trust so the registry rejects any unsigned tag on push." },
      { id: 'C', text: "Pin every workload to an image digest so the tag cannot be moved after review." },
      { id: 'D', text: "Sign images in CI with `cosign sign` and verify the signature in an admission controller." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Sign container images in CI using `cosign sign` with KMS or keyless OIDC, and verify signatures before deployment using Cosign or an admission controller. Cosign (part of the Sigstore project) signs and verifies container images using OCI registry artifacts. Verifying signatures against trusted public keys or OIDC identities ensures the container image has not been tampered with or replaced since build time.",
    referenceUrl: "https://docs.sigstore.dev/cosign/overview/",
    tags: ["Cryptographic Signing","Image Signing","Dr Failover"]
  },
  {
    id: "k8s-cks-392",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Image Signing and Verification with Cosign (Sigstore): High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to guarantee that only container images built and signed by the authorized corporate CI pipeline can be executed in Kubernetes.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Sign images in CI with `cosign sign` and verify the signature in an admission controller." },
      { id: 'B', text: "Pin every workload to an image digest so the tag cannot be moved after review." },
      { id: 'C', text: "Enable registry content trust so the registry rejects any unsigned tag on push." },
      { id: 'D', text: "Sign images in CI with `cosign sign` and have the deploy job verify them before it applies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Sign container images in CI using `cosign sign` with KMS or keyless OIDC, and verify signatures before deployment using Cosign or an admission controller. Cosign (part of the Sigstore project) signs and verifies container images using OCI registry artifacts. Verifying signatures against trusted public keys or OIDC identities ensures the container image has not been tampered with or replaced since build time.",
    referenceUrl: "https://docs.sigstore.dev/cosign/overview/",
    tags: ["Cryptographic Signing","Image Signing","High Load Scale"]
  },
  {
    id: "k8s-cks-393",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Image Signing and Verification with Cosign (Sigstore): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to guarantee that only container images built and signed by the authorized corporate CI pipeline can be executed in Kubernetes.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Sign images in CI with `cosign sign` and verify the signature in an admission controller." },
      { id: 'B', text: "Pin every workload to an image digest so the tag cannot be moved after review." },
      { id: 'C', text: "Enable registry content trust so the registry rejects any unsigned tag on push." },
      { id: 'D', text: "Sign images in CI with `cosign sign` and have the deploy job verify them before it applies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Sign container images in CI using `cosign sign` with KMS or keyless OIDC, and verify signatures before deployment using Cosign or an admission controller. Cosign (part of the Sigstore project) signs and verifies container images using OCI registry artifacts. Verifying signatures against trusted public keys or OIDC identities ensures the container image has not been tampered with or replaced since build time.",
    referenceUrl: "https://docs.sigstore.dev/cosign/overview/",
    tags: ["Cryptographic Signing","Image Signing","Security Compliance"]
  },
  {
    id: "k8s-cks-394",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Image Signing and Verification with Cosign (Sigstore): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to guarantee that only container images built and signed by the authorized corporate CI pipeline can be executed in Kubernetes.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Enable registry content trust so the registry rejects any unsigned tag on push." },
      { id: 'B', text: "Pin every workload to an image digest so the tag cannot be moved after review." },
      { id: 'C', text: "Sign images in CI with `cosign sign` and have the deploy job verify them before it applies." },
      { id: 'D', text: "Sign images in CI with `cosign sign` and verify the signature in an admission controller." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Sign container images in CI using `cosign sign` with KMS or keyless OIDC, and verify signatures before deployment using Cosign or an admission controller. Cosign (part of the Sigstore project) signs and verifies container images using OCI registry artifacts. Verifying signatures against trusted public keys or OIDC identities ensures the container image has not been tampered with or replaced since build time.",
    referenceUrl: "https://docs.sigstore.dev/cosign/overview/",
    tags: ["Cryptographic Signing","Image Signing","Hybrid Migration"]
  },
  {
    id: "k8s-cks-395",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Image Signing and Verification with Cosign (Sigstore): Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to guarantee that only container images built and signed by the authorized corporate CI pipeline can be executed in Kubernetes.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Enable registry content trust so the registry rejects any unsigned tag on push." },
      { id: 'B', text: "Sign images in CI with `cosign sign` and have the deploy job verify them before it applies." },
      { id: 'C', text: "Sign images in CI with `cosign sign` and verify the signature in an admission controller." },
      { id: 'D', text: "Pin every workload to an image digest so the tag cannot be moved after review." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Sign container images in CI using `cosign sign` with KMS or keyless OIDC, and verify signatures before deployment using Cosign or an admission controller. Cosign (part of the Sigstore project) signs and verifies container images using OCI registry artifacts. Verifying signatures against trusted public keys or OIDC identities ensures the container image has not been tampered with or replaced since build time.",
    referenceUrl: "https://docs.sigstore.dev/cosign/overview/",
    tags: ["Cryptographic Signing","Image Signing","Resilience Failure"]
  },
  {
    id: "k8s-cks-396",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Software Bill of Materials (SBOM) Generation: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to produce a comprehensive, machine-readable inventory of all software packages and open-source dependencies included in a production container image.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Generate an SBOM at build time with `syft` or `trivy image --format cyclonedx`." },
      { id: 'B', text: "Generate an SBOM at admission time with a Kyverno policy that records each image's layers." },
      { id: 'C', text: "Generate an SBOM from the registry's own manifest list once the image has been pushed." },
      { id: 'D', text: "Generate an SBOM from the package manager's lock files checked into the source repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate an SBOM using tools like `syft &lt;image&gt; -o spdx-json` or `trivy image --format cyclonedx` during container image build. A Software Bill of Materials (SBOM) is a nested inventory of all components, libraries, and modules making up software. Tools like Syft extract package manifests into standard formats (SPDX or CycloneDX), enabling rapid querying when zero-day vulnerabilities (like Log4j) are disclosed.",
    referenceUrl: "https://github.com/anchore/syft",
    tags: ["SBOM","SBOM","Dr Failover"]
  },
  {
    id: "k8s-cks-397",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Software Bill of Materials (SBOM) Generation: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to produce a comprehensive, machine-readable inventory of all software packages and open-source dependencies included in a production container image.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Generate an SBOM from the package manager's lock files checked into the source repository." },
      { id: 'B', text: "Generate an SBOM from the registry's own manifest list once the image has been pushed." },
      { id: 'C', text: "Generate an SBOM at admission time with a Kyverno policy that records each image's layers." },
      { id: 'D', text: "Generate an SBOM at build time with `syft` or `trivy image --format cyclonedx`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Generate an SBOM using tools like `syft &lt;image&gt; -o spdx-json` or `trivy image --format cyclonedx` during container image build. A Software Bill of Materials (SBOM) is a nested inventory of all components, libraries, and modules making up software. Tools like Syft extract package manifests into standard formats (SPDX or CycloneDX), enabling rapid querying when zero-day vulnerabilities (like Log4j) are disclosed.",
    referenceUrl: "https://github.com/anchore/syft",
    tags: ["SBOM","SBOM","High Load Scale"]
  },
  {
    id: "k8s-cks-398",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Software Bill of Materials (SBOM) Generation: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to produce a comprehensive, machine-readable inventory of all software packages and open-source dependencies included in a production container image.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Generate an SBOM from the registry's own manifest list once the image has been pushed." },
      { id: 'B', text: "Generate an SBOM at admission time with a Kyverno policy that records each image's layers." },
      { id: 'C', text: "Generate an SBOM from the package manager's lock files checked into the source repository." },
      { id: 'D', text: "Generate an SBOM at build time with `syft` or `trivy image --format cyclonedx`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Generate an SBOM using tools like `syft &lt;image&gt; -o spdx-json` or `trivy image --format cyclonedx` during container image build. A Software Bill of Materials (SBOM) is a nested inventory of all components, libraries, and modules making up software. Tools like Syft extract package manifests into standard formats (SPDX or CycloneDX), enabling rapid querying when zero-day vulnerabilities (like Log4j) are disclosed.",
    referenceUrl: "https://github.com/anchore/syft",
    tags: ["SBOM","SBOM","Security Compliance"]
  },
  {
    id: "k8s-cks-399",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Software Bill of Materials (SBOM) Generation: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to produce a comprehensive, machine-readable inventory of all software packages and open-source dependencies included in a production container image.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Generate an SBOM from the registry's own manifest list once the image has been pushed." },
      { id: 'B', text: "Generate an SBOM at build time with `syft` or `trivy image --format cyclonedx`." },
      { id: 'C', text: "Generate an SBOM at admission time with a Kyverno policy that records each image's layers." },
      { id: 'D', text: "Generate an SBOM from the package manager's lock files checked into the source repository." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Generate an SBOM using tools like `syft &lt;image&gt; -o spdx-json` or `trivy image --format cyclonedx` during container image build. A Software Bill of Materials (SBOM) is a nested inventory of all components, libraries, and modules making up software. Tools like Syft extract package manifests into standard formats (SPDX or CycloneDX), enabling rapid querying when zero-day vulnerabilities (like Log4j) are disclosed.",
    referenceUrl: "https://github.com/anchore/syft",
    tags: ["SBOM","SBOM","Hybrid Migration"]
  },
  {
    id: "k8s-cks-400",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Software Bill of Materials (SBOM) Generation: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to produce a comprehensive, machine-readable inventory of all software packages and open-source dependencies included in a production container image.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Generate an SBOM at admission time with a Kyverno policy that records each image's layers." },
      { id: 'B', text: "Generate an SBOM at build time with `syft` or `trivy image --format cyclonedx`." },
      { id: 'C', text: "Generate an SBOM from the package manager's lock files checked into the source repository." },
      { id: 'D', text: "Generate an SBOM from the registry's own manifest list once the image has been pushed." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Generate an SBOM using tools like `syft &lt;image&gt; -o spdx-json` or `trivy image --format cyclonedx` during container image build. A Software Bill of Materials (SBOM) is a nested inventory of all components, libraries, and modules making up software. Tools like Syft extract package manifests into standard formats (SPDX or CycloneDX), enabling rapid querying when zero-day vulnerabilities (like Log4j) are disclosed.",
    referenceUrl: "https://github.com/anchore/syft",
    tags: ["SBOM","SBOM","Resilience Failure"]
  }
];

export default K8S_CKS_QUESTIONS_16;
