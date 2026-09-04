export const K8S_CKS_QUESTIONS_16 = [
  {
    id: "k8s-cks-376",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Managing Pod Security with Network Egress Policies: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Egress Restriction to prevent a compromised microservice from connecting to external command-and-control (C2) servers or exfiltrating stolen customer data.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Blocking unauthorized outbound internet access to mitigate data exfiltration is under consideration.",
    options: [
      { id: 'A', text: "Delete the DNS configuration from the pod." },
      { id: 'B', text: "Allow unrestricted outbound egress to 0.0.0.0/0 on all ports." },
      { id: 'C', text: "Apply an egress NetworkPolicy restricting outbound traffic strictly to approved cluster internal services and designated external payment API endpoints." },
      { id: 'D', text: "Assume internal containers cannot be compromised." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply an egress NetworkPolicy restricting outbound traffic strictly to approved cluster internal services and designated external payment API endpoints. Attackers who compromise an internal container often download attack tools or exfiltrate sensitive data to external command-and-control servers. Restricting egress traffic via NetworkPolicies blocks unauthorized outbound connections, confining the compromise.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress-rule-example",
    tags: ["Egress Restriction", "Egress Defense", "Dr Failover"]
  },
  {
    id: "k8s-cks-377",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Managing Pod Security with Network Egress Policies: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Egress Restriction to prevent a compromised microservice from connecting to external command-and-control (C2) servers or exfiltrating stolen customer data.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Blocking unauthorized outbound internet access to mitigate data exfiltration is under consideration.",
    options: [
      { id: 'A', text: "Apply an egress NetworkPolicy restricting outbound traffic strictly to approved cluster internal services and designated external payment API endpoints." },
      { id: 'B', text: "Assume internal containers cannot be compromised." },
      { id: 'C', text: "Allow unrestricted outbound egress to 0.0.0.0/0 on all ports." },
      { id: 'D', text: "Delete the DNS configuration from the pod." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply an egress NetworkPolicy restricting outbound traffic strictly to approved cluster internal services and designated external payment API endpoints. Attackers who compromise an internal container often download attack tools or exfiltrate sensitive data to external command-and-control servers. Restricting egress traffic via NetworkPolicies blocks unauthorized outbound connections, confining the compromise.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress-rule-example",
    tags: ["Egress Restriction", "Egress Defense", "High Load Scale"]
  },
  {
    id: "k8s-cks-378",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Managing Pod Security with Network Egress Policies: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Egress Restriction to prevent a compromised microservice from connecting to external command-and-control (C2) servers or exfiltrating stolen customer data.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Blocking unauthorized outbound internet access to mitigate data exfiltration is under consideration.",
    options: [
      { id: 'A', text: "Allow unrestricted outbound egress to 0.0.0.0/0 on all ports." },
      { id: 'B', text: "Delete the DNS configuration from the pod." },
      { id: 'C', text: "Apply an egress NetworkPolicy restricting outbound traffic strictly to approved cluster internal services and designated external payment API endpoints." },
      { id: 'D', text: "Assume internal containers cannot be compromised." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply an egress NetworkPolicy restricting outbound traffic strictly to approved cluster internal services and designated external payment API endpoints. Attackers who compromise an internal container often download attack tools or exfiltrate sensitive data to external command-and-control servers. Restricting egress traffic via NetworkPolicies blocks unauthorized outbound connections, confining the compromise.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress-rule-example",
    tags: ["Egress Restriction", "Egress Defense", "Security Compliance"]
  },
  {
    id: "k8s-cks-379",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Managing Pod Security with Network Egress Policies: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Egress Restriction to prevent a compromised microservice from connecting to external command-and-control (C2) servers or exfiltrating stolen customer data.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Blocking unauthorized outbound internet access to mitigate data exfiltration is under consideration.",
    options: [
      { id: 'A', text: "Allow unrestricted outbound egress to 0.0.0.0/0 on all ports." },
      { id: 'B', text: "Assume internal containers cannot be compromised." },
      { id: 'C', text: "Delete the DNS configuration from the pod." },
      { id: 'D', text: "Apply an egress NetworkPolicy restricting outbound traffic strictly to approved cluster internal services and designated external payment API endpoints." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Apply an egress NetworkPolicy restricting outbound traffic strictly to approved cluster internal services and designated external payment API endpoints. Attackers who compromise an internal container often download attack tools or exfiltrate sensitive data to external command-and-control servers. Restricting egress traffic via NetworkPolicies blocks unauthorized outbound connections, confining the compromise.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress-rule-example",
    tags: ["Egress Restriction", "Egress Defense", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-380",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Managing Pod Security with Network Egress Policies: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Egress Restriction to prevent a compromised microservice from connecting to external command-and-control (C2) servers or exfiltrating stolen customer data.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Blocking unauthorized outbound internet access to mitigate data exfiltration is under consideration.",
    options: [
      { id: 'A', text: "Delete the DNS configuration from the pod." },
      { id: 'B', text: "Apply an egress NetworkPolicy restricting outbound traffic strictly to approved cluster internal services and designated external payment API endpoints." },
      { id: 'C', text: "Allow unrestricted outbound egress to 0.0.0.0/0 on all ports." },
      { id: 'D', text: "Assume internal containers cannot be compromised." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Apply an egress NetworkPolicy restricting outbound traffic strictly to approved cluster internal services and designated external payment API endpoints. Attackers who compromise an internal container often download attack tools or exfiltrate sensitive data to external command-and-control servers. Restricting egress traffic via NetworkPolicies blocks unauthorized outbound connections, confining the compromise.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress-rule-example",
    tags: ["Egress Restriction", "Egress Defense", "Resilience Failure"]
  },
  {
    id: "k8s-cks-381",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Static Manifest Analysis with Kube-linter and Conftest: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Static Manifest Scanning to detect security misconfigurations (such as missing resource limits or running as root) in Kubernetes YAML manifests before merging pull requests.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Analyzing Kubernetes YAML manifests for security misconfigurations pre-commit is under consideration.",
    options: [
      { id: 'A', text: "Deploy unvalidated manifests directly to production and test security at runtime." },
      { id: 'B', text: "Integrate static analysis tools like `kube-linter`, `checkov`, or `conftest` (OPA) into the CI pipeline to fail builds on insecure manifest patterns." },
      { id: 'C', text: "Disable all automated pull request checks to speed up releases." },
      { id: 'D', text: "Rely on manual human code review of thousands of YAML files." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Integrate static analysis tools like `kube-linter`, `checkov`, or `conftest` (OPA) into the CI pipeline to fail builds on insecure manifest patterns. Static analysis tools like `kube-linter` and `conftest` parse Kubernetes YAML manifests before deployment, checking for violations of security best practices (e.g., privileged containers, missing probes, root UIDs) early in the development lifecycle (shifting security left).",
    referenceUrl: "https://github.com/stackrox/kube-linter",
    tags: ["Static Manifest Scanning", "Static Analysis", "Dr Failover"]
  },
  {
    id: "k8s-cks-382",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Static Manifest Analysis with Kube-linter and Conftest: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Static Manifest Scanning to detect security misconfigurations (such as missing resource limits or running as root) in Kubernetes YAML manifests before merging pull requests.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Analyzing Kubernetes YAML manifests for security misconfigurations pre-commit is under consideration.",
    options: [
      { id: 'A', text: "Deploy unvalidated manifests directly to production and test security at runtime." },
      { id: 'B', text: "Integrate static analysis tools like `kube-linter`, `checkov`, or `conftest` (OPA) into the CI pipeline to fail builds on insecure manifest patterns." },
      { id: 'C', text: "Rely on manual human code review of thousands of YAML files." },
      { id: 'D', text: "Disable all automated pull request checks to speed up releases." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Integrate static analysis tools like `kube-linter`, `checkov`, or `conftest` (OPA) into the CI pipeline to fail builds on insecure manifest patterns. Static analysis tools like `kube-linter` and `conftest` parse Kubernetes YAML manifests before deployment, checking for violations of security best practices (e.g., privileged containers, missing probes, root UIDs) early in the development lifecycle (shifting security left).",
    referenceUrl: "https://github.com/stackrox/kube-linter",
    tags: ["Static Manifest Scanning", "Static Analysis", "High Load Scale"]
  },
  {
    id: "k8s-cks-383",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Static Manifest Analysis with Kube-linter and Conftest: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Static Manifest Scanning to detect security misconfigurations (such as missing resource limits or running as root) in Kubernetes YAML manifests before merging pull requests.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Analyzing Kubernetes YAML manifests for security misconfigurations pre-commit is under consideration.",
    options: [
      { id: 'A', text: "Rely on manual human code review of thousands of YAML files." },
      { id: 'B', text: "Deploy unvalidated manifests directly to production and test security at runtime." },
      { id: 'C', text: "Disable all automated pull request checks to speed up releases." },
      { id: 'D', text: "Integrate static analysis tools like `kube-linter`, `checkov`, or `conftest` (OPA) into the CI pipeline to fail builds on insecure manifest patterns." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Integrate static analysis tools like `kube-linter`, `checkov`, or `conftest` (OPA) into the CI pipeline to fail builds on insecure manifest patterns. Static analysis tools like `kube-linter` and `conftest` parse Kubernetes YAML manifests before deployment, checking for violations of security best practices (e.g., privileged containers, missing probes, root UIDs) early in the development lifecycle (shifting security left).",
    referenceUrl: "https://github.com/stackrox/kube-linter",
    tags: ["Static Manifest Scanning", "Static Analysis", "Security Compliance"]
  },
  {
    id: "k8s-cks-384",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Static Manifest Analysis with Kube-linter and Conftest: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Static Manifest Scanning to detect security misconfigurations (such as missing resource limits or running as root) in Kubernetes YAML manifests before merging pull requests.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Analyzing Kubernetes YAML manifests for security misconfigurations pre-commit is under consideration.",
    options: [
      { id: 'A', text: "Integrate static analysis tools like `kube-linter`, `checkov`, or `conftest` (OPA) into the CI pipeline to fail builds on insecure manifest patterns." },
      { id: 'B', text: "Rely on manual human code review of thousands of YAML files." },
      { id: 'C', text: "Disable all automated pull request checks to speed up releases." },
      { id: 'D', text: "Deploy unvalidated manifests directly to production and test security at runtime." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate static analysis tools like `kube-linter`, `checkov`, or `conftest` (OPA) into the CI pipeline to fail builds on insecure manifest patterns. Static analysis tools like `kube-linter` and `conftest` parse Kubernetes YAML manifests before deployment, checking for violations of security best practices (e.g., privileged containers, missing probes, root UIDs) early in the development lifecycle (shifting security left).",
    referenceUrl: "https://github.com/stackrox/kube-linter",
    tags: ["Static Manifest Scanning", "Static Analysis", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-385",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Static Manifest Analysis with Kube-linter and Conftest: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Static Manifest Scanning to detect security misconfigurations (such as missing resource limits or running as root) in Kubernetes YAML manifests before merging pull requests.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Analyzing Kubernetes YAML manifests for security misconfigurations pre-commit is under consideration.",
    options: [
      { id: 'A', text: "Deploy unvalidated manifests directly to production and test security at runtime." },
      { id: 'B', text: "Integrate static analysis tools like `kube-linter`, `checkov`, or `conftest` (OPA) into the CI pipeline to fail builds on insecure manifest patterns." },
      { id: 'C', text: "Disable all automated pull request checks to speed up releases." },
      { id: 'D', text: "Rely on manual human code review of thousands of YAML files." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Integrate static analysis tools like `kube-linter`, `checkov`, or `conftest` (OPA) into the CI pipeline to fail builds on insecure manifest patterns. Static analysis tools like `kube-linter` and `conftest` parse Kubernetes YAML manifests before deployment, checking for violations of security best practices (e.g., privileged containers, missing probes, root UIDs) early in the development lifecycle (shifting security left).",
    referenceUrl: "https://github.com/stackrox/kube-linter",
    tags: ["Static Manifest Scanning", "Static Analysis", "Resilience Failure"]
  },
  {
    id: "k8s-cks-386",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Container Image Vulnerability Scanning with Trivy: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Vulnerability Scanning to prevent container images containing high or critical severity CVEs from being pushed to the enterprise container registry.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Scanning container images for OS package and dependency CVEs with Trivy is under consideration.",
    options: [
      { id: 'A', text: "Rely on public Docker Hub star ratings as proof of container security." },
      { id: 'B', text: "Scan containers only after they have run in production for six months." },
      { id: 'C', text: "Execute `trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image-name&gt;` in the CI build step to block vulnerable artifacts." },
      { id: 'D', text: "Filter out all critical CVEs from scanner reports to prevent build interruptions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image-name&gt;` in the CI build step to block vulnerable artifacts. `Trivy` is a comprehensive vulnerability scanner for container images. Configuring `--severity HIGH,CRITICAL --exit-code 1` causes the CI runner to return a non-zero exit code upon finding severe vulnerabilities, blocking the build from publishing the insecure artifact.",
    referenceUrl: "https://github.com/aquasecurity/trivy",
    tags: ["Vulnerability Scanning", "Vulnerability Scanning", "Dr Failover"]
  },
  {
    id: "k8s-cks-387",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Container Image Vulnerability Scanning with Trivy: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Vulnerability Scanning to prevent container images containing high or critical severity CVEs from being pushed to the enterprise container registry.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Scanning container images for OS package and dependency CVEs with Trivy is under consideration.",
    options: [
      { id: 'A', text: "Filter out all critical CVEs from scanner reports to prevent build interruptions." },
      { id: 'B', text: "Rely on public Docker Hub star ratings as proof of container security." },
      { id: 'C', text: "Execute `trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image-name&gt;` in the CI build step to block vulnerable artifacts." },
      { id: 'D', text: "Scan containers only after they have run in production for six months." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image-name&gt;` in the CI build step to block vulnerable artifacts. `Trivy` is a comprehensive vulnerability scanner for container images. Configuring `--severity HIGH,CRITICAL --exit-code 1` causes the CI runner to return a non-zero exit code upon finding severe vulnerabilities, blocking the build from publishing the insecure artifact.",
    referenceUrl: "https://github.com/aquasecurity/trivy",
    tags: ["Vulnerability Scanning", "Vulnerability Scanning", "High Load Scale"]
  },
  {
    id: "k8s-cks-388",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Container Image Vulnerability Scanning with Trivy: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Vulnerability Scanning to prevent container images containing high or critical severity CVEs from being pushed to the enterprise container registry.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Scanning container images for OS package and dependency CVEs with Trivy is under consideration.",
    options: [
      { id: 'A', text: "Execute `trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image-name&gt;` in the CI build step to block vulnerable artifacts." },
      { id: 'B', text: "Filter out all critical CVEs from scanner reports to prevent build interruptions." },
      { id: 'C', text: "Rely on public Docker Hub star ratings as proof of container security." },
      { id: 'D', text: "Scan containers only after they have run in production for six months." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image-name&gt;` in the CI build step to block vulnerable artifacts. `Trivy` is a comprehensive vulnerability scanner for container images. Configuring `--severity HIGH,CRITICAL --exit-code 1` causes the CI runner to return a non-zero exit code upon finding severe vulnerabilities, blocking the build from publishing the insecure artifact.",
    referenceUrl: "https://github.com/aquasecurity/trivy",
    tags: ["Vulnerability Scanning", "Vulnerability Scanning", "Security Compliance"]
  },
  {
    id: "k8s-cks-389",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Container Image Vulnerability Scanning with Trivy: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Vulnerability Scanning to prevent container images containing high or critical severity CVEs from being pushed to the enterprise container registry.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Scanning container images for OS package and dependency CVEs with Trivy is under consideration.",
    options: [
      { id: 'A', text: "Rely on public Docker Hub star ratings as proof of container security." },
      { id: 'B', text: "Scan containers only after they have run in production for six months." },
      { id: 'C', text: "Execute `trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image-name&gt;` in the CI build step to block vulnerable artifacts." },
      { id: 'D', text: "Filter out all critical CVEs from scanner reports to prevent build interruptions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image-name&gt;` in the CI build step to block vulnerable artifacts. `Trivy` is a comprehensive vulnerability scanner for container images. Configuring `--severity HIGH,CRITICAL --exit-code 1` causes the CI runner to return a non-zero exit code upon finding severe vulnerabilities, blocking the build from publishing the insecure artifact.",
    referenceUrl: "https://github.com/aquasecurity/trivy",
    tags: ["Vulnerability Scanning", "Vulnerability Scanning", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-390",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Container Image Vulnerability Scanning with Trivy: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Vulnerability Scanning to prevent container images containing high or critical severity CVEs from being pushed to the enterprise container registry.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Scanning container images for OS package and dependency CVEs with Trivy is under consideration.",
    options: [
      { id: 'A', text: "Scan containers only after they have run in production for six months." },
      { id: 'B', text: "Rely on public Docker Hub star ratings as proof of container security." },
      { id: 'C', text: "Execute `trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image-name&gt;` in the CI build step to block vulnerable artifacts." },
      { id: 'D', text: "Filter out all critical CVEs from scanner reports to prevent build interruptions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image-name&gt;` in the CI build step to block vulnerable artifacts. `Trivy` is a comprehensive vulnerability scanner for container images. Configuring `--severity HIGH,CRITICAL --exit-code 1` causes the CI runner to return a non-zero exit code upon finding severe vulnerabilities, blocking the build from publishing the insecure artifact.",
    referenceUrl: "https://github.com/aquasecurity/trivy",
    tags: ["Vulnerability Scanning", "Vulnerability Scanning", "Resilience Failure"]
  },
  {
    id: "k8s-cks-391",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Image Signing and Verification with Cosign (Sigstore): Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Cryptographic Signing to guarantee that only container images built and signed by the authorized corporate CI pipeline can be executed in Kubernetes.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Signing container images and verifying cryptographic signatures with Cosign is under consideration.",
    options: [
      { id: 'A', text: "Commit unencrypted GPG private keys to public GitHub repositories." },
      { id: 'B', text: "Sign container images in CI using `cosign sign` with KMS or keyless OIDC, and verify signatures before deployment using Cosign or an admission controller." },
      { id: 'C', text: "Allow developers to manually sign images using self-signed ad-hoc certificates." },
      { id: 'D', text: "Trust image tags without cryptographic verification." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Sign container images in CI using `cosign sign` with KMS or keyless OIDC, and verify signatures before deployment using Cosign or an admission controller. Cosign (part of the Sigstore project) signs and verifies container images using OCI registry artifacts. Verifying signatures against trusted public keys or OIDC identities ensures the container image has not been tampered with or replaced since build time.",
    referenceUrl: "https://docs.sigstore.dev/cosign/overview/",
    tags: ["Cryptographic Signing", "Image Signing", "Dr Failover"]
  },
  {
    id: "k8s-cks-392",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Image Signing and Verification with Cosign (Sigstore): High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Cryptographic Signing to guarantee that only container images built and signed by the authorized corporate CI pipeline can be executed in Kubernetes.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Signing container images and verifying cryptographic signatures with Cosign is under consideration.",
    options: [
      { id: 'A', text: "Allow developers to manually sign images using self-signed ad-hoc certificates." },
      { id: 'B', text: "Trust image tags without cryptographic verification." },
      { id: 'C', text: "Commit unencrypted GPG private keys to public GitHub repositories." },
      { id: 'D', text: "Sign container images in CI using `cosign sign` with KMS or keyless OIDC, and verify signatures before deployment using Cosign or an admission controller." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Sign container images in CI using `cosign sign` with KMS or keyless OIDC, and verify signatures before deployment using Cosign or an admission controller. Cosign (part of the Sigstore project) signs and verifies container images using OCI registry artifacts. Verifying signatures against trusted public keys or OIDC identities ensures the container image has not been tampered with or replaced since build time.",
    referenceUrl: "https://docs.sigstore.dev/cosign/overview/",
    tags: ["Cryptographic Signing", "Image Signing", "High Load Scale"]
  },
  {
    id: "k8s-cks-393",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Image Signing and Verification with Cosign (Sigstore): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Cryptographic Signing to guarantee that only container images built and signed by the authorized corporate CI pipeline can be executed in Kubernetes.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Signing container images and verifying cryptographic signatures with Cosign is under consideration.",
    options: [
      { id: 'A', text: "Commit unencrypted GPG private keys to public GitHub repositories." },
      { id: 'B', text: "Trust image tags without cryptographic verification." },
      { id: 'C', text: "Sign container images in CI using `cosign sign` with KMS or keyless OIDC, and verify signatures before deployment using Cosign or an admission controller." },
      { id: 'D', text: "Allow developers to manually sign images using self-signed ad-hoc certificates." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Sign container images in CI using `cosign sign` with KMS or keyless OIDC, and verify signatures before deployment using Cosign or an admission controller. Cosign (part of the Sigstore project) signs and verifies container images using OCI registry artifacts. Verifying signatures against trusted public keys or OIDC identities ensures the container image has not been tampered with or replaced since build time.",
    referenceUrl: "https://docs.sigstore.dev/cosign/overview/",
    tags: ["Cryptographic Signing", "Image Signing", "Security Compliance"]
  },
  {
    id: "k8s-cks-394",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Image Signing and Verification with Cosign (Sigstore): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Cryptographic Signing to guarantee that only container images built and signed by the authorized corporate CI pipeline can be executed in Kubernetes.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Signing container images and verifying cryptographic signatures with Cosign is under consideration.",
    options: [
      { id: 'A', text: "Allow developers to manually sign images using self-signed ad-hoc certificates." },
      { id: 'B', text: "Trust image tags without cryptographic verification." },
      { id: 'C', text: "Sign container images in CI using `cosign sign` with KMS or keyless OIDC, and verify signatures before deployment using Cosign or an admission controller." },
      { id: 'D', text: "Commit unencrypted GPG private keys to public GitHub repositories." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Sign container images in CI using `cosign sign` with KMS or keyless OIDC, and verify signatures before deployment using Cosign or an admission controller. Cosign (part of the Sigstore project) signs and verifies container images using OCI registry artifacts. Verifying signatures against trusted public keys or OIDC identities ensures the container image has not been tampered with or replaced since build time.",
    referenceUrl: "https://docs.sigstore.dev/cosign/overview/",
    tags: ["Cryptographic Signing", "Image Signing", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-395",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Image Signing and Verification with Cosign (Sigstore): Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Cryptographic Signing to guarantee that only container images built and signed by the authorized corporate CI pipeline can be executed in Kubernetes.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Signing container images and verifying cryptographic signatures with Cosign is under consideration.",
    options: [
      { id: 'A', text: "Trust image tags without cryptographic verification." },
      { id: 'B', text: "Commit unencrypted GPG private keys to public GitHub repositories." },
      { id: 'C', text: "Allow developers to manually sign images using self-signed ad-hoc certificates." },
      { id: 'D', text: "Sign container images in CI using `cosign sign` with KMS or keyless OIDC, and verify signatures before deployment using Cosign or an admission controller." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Sign container images in CI using `cosign sign` with KMS or keyless OIDC, and verify signatures before deployment using Cosign or an admission controller. Cosign (part of the Sigstore project) signs and verifies container images using OCI registry artifacts. Verifying signatures against trusted public keys or OIDC identities ensures the container image has not been tampered with or replaced since build time.",
    referenceUrl: "https://docs.sigstore.dev/cosign/overview/",
    tags: ["Cryptographic Signing", "Image Signing", "Resilience Failure"]
  },
  {
    id: "k8s-cks-396",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Software Bill of Materials (SBOM) Generation: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates SBOM to produce a comprehensive, machine-readable inventory of all software packages and open-source dependencies included in a production container image.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Generating and auditing container Software Bill of Materials with Syft is under consideration.",
    options: [
      { id: 'A', text: "Ask developers to recall dependencies from memory during compliance audits." },
      { id: 'B', text: "Maintain a handwritten text file listing libraries remembered by the author." },
      { id: 'C', text: "Generate an SBOM using tools like `syft &lt;image&gt; -o spdx-json` or `trivy image --format cyclonedx` during container image build." },
      { id: 'D', text: "Delete all package metadata from containers to save disk space." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Generate an SBOM using tools like `syft &lt;image&gt; -o spdx-json` or `trivy image --format cyclonedx` during container image build. A Software Bill of Materials (SBOM) is a nested inventory of all components, libraries, and modules making up software. Tools like Syft extract package manifests into standard formats (SPDX or CycloneDX), enabling rapid querying when zero-day vulnerabilities (like Log4j) are disclosed.",
    referenceUrl: "https://github.com/anchore/syft",
    tags: ["SBOM", "SBOM", "Dr Failover"]
  },
  {
    id: "k8s-cks-397",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Software Bill of Materials (SBOM) Generation: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates SBOM to produce a comprehensive, machine-readable inventory of all software packages and open-source dependencies included in a production container image.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Generating and auditing container Software Bill of Materials with Syft is under consideration.",
    options: [
      { id: 'A', text: "Ask developers to recall dependencies from memory during compliance audits." },
      { id: 'B', text: "Generate an SBOM using tools like `syft &lt;image&gt; -o spdx-json` or `trivy image --format cyclonedx` during container image build." },
      { id: 'C', text: "Delete all package metadata from containers to save disk space." },
      { id: 'D', text: "Maintain a handwritten text file listing libraries remembered by the author." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Generate an SBOM using tools like `syft &lt;image&gt; -o spdx-json` or `trivy image --format cyclonedx` during container image build. A Software Bill of Materials (SBOM) is a nested inventory of all components, libraries, and modules making up software. Tools like Syft extract package manifests into standard formats (SPDX or CycloneDX), enabling rapid querying when zero-day vulnerabilities (like Log4j) are disclosed.",
    referenceUrl: "https://github.com/anchore/syft",
    tags: ["SBOM", "SBOM", "High Load Scale"]
  },
  {
    id: "k8s-cks-398",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Software Bill of Materials (SBOM) Generation: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates SBOM to produce a comprehensive, machine-readable inventory of all software packages and open-source dependencies included in a production container image.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Generating and auditing container Software Bill of Materials with Syft is under consideration.",
    options: [
      { id: 'A', text: "Delete all package metadata from containers to save disk space." },
      { id: 'B', text: "Maintain a handwritten text file listing libraries remembered by the author." },
      { id: 'C', text: "Generate an SBOM using tools like `syft &lt;image&gt; -o spdx-json` or `trivy image --format cyclonedx` during container image build." },
      { id: 'D', text: "Ask developers to recall dependencies from memory during compliance audits." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Generate an SBOM using tools like `syft &lt;image&gt; -o spdx-json` or `trivy image --format cyclonedx` during container image build. A Software Bill of Materials (SBOM) is a nested inventory of all components, libraries, and modules making up software. Tools like Syft extract package manifests into standard formats (SPDX or CycloneDX), enabling rapid querying when zero-day vulnerabilities (like Log4j) are disclosed.",
    referenceUrl: "https://github.com/anchore/syft",
    tags: ["SBOM", "SBOM", "Security Compliance"]
  },
  {
    id: "k8s-cks-399",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Software Bill of Materials (SBOM) Generation: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates SBOM to produce a comprehensive, machine-readable inventory of all software packages and open-source dependencies included in a production container image.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Generating and auditing container Software Bill of Materials with Syft is under consideration.",
    options: [
      { id: 'A', text: "Maintain a handwritten text file listing libraries remembered by the author." },
      { id: 'B', text: "Ask developers to recall dependencies from memory during compliance audits." },
      { id: 'C', text: "Generate an SBOM using tools like `syft &lt;image&gt; -o spdx-json` or `trivy image --format cyclonedx` during container image build." },
      { id: 'D', text: "Delete all package metadata from containers to save disk space." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Generate an SBOM using tools like `syft &lt;image&gt; -o spdx-json` or `trivy image --format cyclonedx` during container image build. A Software Bill of Materials (SBOM) is a nested inventory of all components, libraries, and modules making up software. Tools like Syft extract package manifests into standard formats (SPDX or CycloneDX), enabling rapid querying when zero-day vulnerabilities (like Log4j) are disclosed.",
    referenceUrl: "https://github.com/anchore/syft",
    tags: ["SBOM", "SBOM", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-400",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Software Bill of Materials (SBOM) Generation: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates SBOM to produce a comprehensive, machine-readable inventory of all software packages and open-source dependencies included in a production container image.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Generating and auditing container Software Bill of Materials with Syft is under consideration.",
    options: [
      { id: 'A', text: "Delete all package metadata from containers to save disk space." },
      { id: 'B', text: "Ask developers to recall dependencies from memory during compliance audits." },
      { id: 'C', text: "Generate an SBOM using tools like `syft &lt;image&gt; -o spdx-json` or `trivy image --format cyclonedx` during container image build." },
      { id: 'D', text: "Maintain a handwritten text file listing libraries remembered by the author." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Generate an SBOM using tools like `syft &lt;image&gt; -o spdx-json` or `trivy image --format cyclonedx` during container image build. A Software Bill of Materials (SBOM) is a nested inventory of all components, libraries, and modules making up software. Tools like Syft extract package manifests into standard formats (SPDX or CycloneDX), enabling rapid querying when zero-day vulnerabilities (like Log4j) are disclosed.",
    referenceUrl: "https://github.com/anchore/syft",
    tags: ["SBOM", "SBOM", "Resilience Failure"]
  }
];

export default K8S_CKS_QUESTIONS_16;
