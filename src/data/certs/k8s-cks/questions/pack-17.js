export const K8S_CKS_QUESTIONS_17 = [
  {
    id: "k8s-cks-401",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Immutable Image References by Digest: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Image Digests to ensure that pods across all cluster nodes run the exact bit-for-bit identical binary image and prevent tag-hijacking attacks.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Enforcing pod deployment by immutable SHA256 digest rather than mutable tags is under consideration.",
    options: [
      { id: 'A', text: "Specify container images using the immutable SHA256 digest (`image: repo/app@sha256:...`) instead of mutable tags." },
      { id: 'B', text: "Deploy images using the mutable :latest tag." },
      { id: 'C', text: "Allow container runtimes to pull arbitrary versions if tags change." },
      { id: 'D', text: "Configure imagePullPolicy: IfNotPresent with mutable tags." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify container images using the immutable SHA256 digest (`image: repo/app@sha256:...`) instead of mutable tags. Tags in container registries are mutable pointers that can be overwritten by anyone with registry write access. Deploying pods using the immutable content addressable digest (`@sha256:...`) ensures that nodes pull the exact, tamper-evident cryptographic artifact.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-names",
    tags: ["Image Digests", "Image Digests", "Dr Failover"]
  },
  {
    id: "k8s-cks-402",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Immutable Image References by Digest: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Image Digests to ensure that pods across all cluster nodes run the exact bit-for-bit identical binary image and prevent tag-hijacking attacks.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Enforcing pod deployment by immutable SHA256 digest rather than mutable tags is under consideration.",
    options: [
      { id: 'A', text: "Specify container images using the immutable SHA256 digest (`image: repo/app@sha256:...`) instead of mutable tags." },
      { id: 'B', text: "Deploy images using the mutable :latest tag." },
      { id: 'C', text: "Allow container runtimes to pull arbitrary versions if tags change." },
      { id: 'D', text: "Configure imagePullPolicy: IfNotPresent with mutable tags." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify container images using the immutable SHA256 digest (`image: repo/app@sha256:...`) instead of mutable tags. Tags in container registries are mutable pointers that can be overwritten by anyone with registry write access. Deploying pods using the immutable content addressable digest (`@sha256:...`) ensures that nodes pull the exact, tamper-evident cryptographic artifact.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-names",
    tags: ["Image Digests", "Image Digests", "High Load Scale"]
  },
  {
    id: "k8s-cks-403",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Immutable Image References by Digest: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Image Digests to ensure that pods across all cluster nodes run the exact bit-for-bit identical binary image and prevent tag-hijacking attacks.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Enforcing pod deployment by immutable SHA256 digest rather than mutable tags is under consideration.",
    options: [
      { id: 'A', text: "Specify container images using the immutable SHA256 digest (`image: repo/app@sha256:...`) instead of mutable tags." },
      { id: 'B', text: "Deploy images using the mutable :latest tag." },
      { id: 'C', text: "Allow container runtimes to pull arbitrary versions if tags change." },
      { id: 'D', text: "Configure imagePullPolicy: IfNotPresent with mutable tags." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify container images using the immutable SHA256 digest (`image: repo/app@sha256:...`) instead of mutable tags. Tags in container registries are mutable pointers that can be overwritten by anyone with registry write access. Deploying pods using the immutable content addressable digest (`@sha256:...`) ensures that nodes pull the exact, tamper-evident cryptographic artifact.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-names",
    tags: ["Image Digests", "Image Digests", "Security Compliance"]
  },
  {
    id: "k8s-cks-404",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Immutable Image References by Digest: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Image Digests to ensure that pods across all cluster nodes run the exact bit-for-bit identical binary image and prevent tag-hijacking attacks.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Enforcing pod deployment by immutable SHA256 digest rather than mutable tags is under consideration.",
    options: [
      { id: 'A', text: "Specify container images using the immutable SHA256 digest (`image: repo/app@sha256:...`) instead of mutable tags." },
      { id: 'B', text: "Deploy images using the mutable :latest tag." },
      { id: 'C', text: "Allow container runtimes to pull arbitrary versions if tags change." },
      { id: 'D', text: "Configure imagePullPolicy: IfNotPresent with mutable tags." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify container images using the immutable SHA256 digest (`image: repo/app@sha256:...`) instead of mutable tags. Tags in container registries are mutable pointers that can be overwritten by anyone with registry write access. Deploying pods using the immutable content addressable digest (`@sha256:...`) ensures that nodes pull the exact, tamper-evident cryptographic artifact.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-names",
    tags: ["Image Digests", "Image Digests", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-405",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Immutable Image References by Digest: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Image Digests to ensure that pods across all cluster nodes run the exact bit-for-bit identical binary image and prevent tag-hijacking attacks.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Enforcing pod deployment by immutable SHA256 digest rather than mutable tags is under consideration.",
    options: [
      { id: 'A', text: "Specify container images using the immutable SHA256 digest (`image: repo/app@sha256:...`) instead of mutable tags." },
      { id: 'B', text: "Deploy images using the mutable :latest tag." },
      { id: 'C', text: "Allow container runtimes to pull arbitrary versions if tags change." },
      { id: 'D', text: "Configure imagePullPolicy: IfNotPresent with mutable tags." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify container images using the immutable SHA256 digest (`image: repo/app@sha256:...`) instead of mutable tags. Tags in container registries are mutable pointers that can be overwritten by anyone with registry write access. Deploying pods using the immutable content addressable digest (`@sha256:...`) ensures that nodes pull the exact, tamper-evident cryptographic artifact.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-names",
    tags: ["Image Digests", "Image Digests", "Resilience Failure"]
  },
  {
    id: "k8s-cks-406",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Private Container Registry Authentication: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Registry Security to restrict container image downloads so that only authenticated cluster worker nodes can pull proprietary enterprise software images.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Configuring imagePullSecrets and credentials for private registries is under consideration.",
    options: [
      { id: 'A', text: "Store private registry credentials in a Kubernetes Secret of type `kubernetes.io/dockerconfigjson` and reference it via `imagePullSecrets`." },
      { id: 'B', text: "Make the enterprise container registry completely public without authentication." },
      { id: 'C', text: "Hardcode registry admin passwords in the container entrypoint script." },
      { id: 'D', text: "Distribute raw docker config files manually across worker node file systems." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store private registry credentials in a Kubernetes Secret of type `kubernetes.io/dockerconfigjson` and reference it via `imagePullSecrets`. Private container registries protect intellectual property and sensitive corporate code. Workloads authenticate using `imagePullSecrets` referencing a `kubernetes.io/dockerconfigjson` Secret, ensuring only authorized pods running in permitted namespaces can pull the images.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/",
    tags: ["Registry Security", "imagePullSecrets", "Dr Failover"]
  },
  {
    id: "k8s-cks-407",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Private Container Registry Authentication: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Registry Security to restrict container image downloads so that only authenticated cluster worker nodes can pull proprietary enterprise software images.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Configuring imagePullSecrets and credentials for private registries is under consideration.",
    options: [
      { id: 'A', text: "Store private registry credentials in a Kubernetes Secret of type `kubernetes.io/dockerconfigjson` and reference it via `imagePullSecrets`." },
      { id: 'B', text: "Make the enterprise container registry completely public without authentication." },
      { id: 'C', text: "Hardcode registry admin passwords in the container entrypoint script." },
      { id: 'D', text: "Distribute raw docker config files manually across worker node file systems." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store private registry credentials in a Kubernetes Secret of type `kubernetes.io/dockerconfigjson` and reference it via `imagePullSecrets`. Private container registries protect intellectual property and sensitive corporate code. Workloads authenticate using `imagePullSecrets` referencing a `kubernetes.io/dockerconfigjson` Secret, ensuring only authorized pods running in permitted namespaces can pull the images.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/",
    tags: ["Registry Security", "imagePullSecrets", "High Load Scale"]
  },
  {
    id: "k8s-cks-408",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Private Container Registry Authentication: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Registry Security to restrict container image downloads so that only authenticated cluster worker nodes can pull proprietary enterprise software images.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Configuring imagePullSecrets and credentials for private registries is under consideration.",
    options: [
      { id: 'A', text: "Store private registry credentials in a Kubernetes Secret of type `kubernetes.io/dockerconfigjson` and reference it via `imagePullSecrets`." },
      { id: 'B', text: "Make the enterprise container registry completely public without authentication." },
      { id: 'C', text: "Hardcode registry admin passwords in the container entrypoint script." },
      { id: 'D', text: "Distribute raw docker config files manually across worker node file systems." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store private registry credentials in a Kubernetes Secret of type `kubernetes.io/dockerconfigjson` and reference it via `imagePullSecrets`. Private container registries protect intellectual property and sensitive corporate code. Workloads authenticate using `imagePullSecrets` referencing a `kubernetes.io/dockerconfigjson` Secret, ensuring only authorized pods running in permitted namespaces can pull the images.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/",
    tags: ["Registry Security", "imagePullSecrets", "Security Compliance"]
  },
  {
    id: "k8s-cks-409",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Private Container Registry Authentication: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Registry Security to restrict container image downloads so that only authenticated cluster worker nodes can pull proprietary enterprise software images.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Configuring imagePullSecrets and credentials for private registries is under consideration.",
    options: [
      { id: 'A', text: "Store private registry credentials in a Kubernetes Secret of type `kubernetes.io/dockerconfigjson` and reference it via `imagePullSecrets`." },
      { id: 'B', text: "Make the enterprise container registry completely public without authentication." },
      { id: 'C', text: "Hardcode registry admin passwords in the container entrypoint script." },
      { id: 'D', text: "Distribute raw docker config files manually across worker node file systems." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store private registry credentials in a Kubernetes Secret of type `kubernetes.io/dockerconfigjson` and reference it via `imagePullSecrets`. Private container registries protect intellectual property and sensitive corporate code. Workloads authenticate using `imagePullSecrets` referencing a `kubernetes.io/dockerconfigjson` Secret, ensuring only authorized pods running in permitted namespaces can pull the images.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/",
    tags: ["Registry Security", "imagePullSecrets", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-410",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Private Container Registry Authentication: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Registry Security to restrict container image downloads so that only authenticated cluster worker nodes can pull proprietary enterprise software images.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Configuring imagePullSecrets and credentials for private registries is under consideration.",
    options: [
      { id: 'A', text: "Store private registry credentials in a Kubernetes Secret of type `kubernetes.io/dockerconfigjson` and reference it via `imagePullSecrets`." },
      { id: 'B', text: "Make the enterprise container registry completely public without authentication." },
      { id: 'C', text: "Hardcode registry admin passwords in the container entrypoint script." },
      { id: 'D', text: "Distribute raw docker config files manually across worker node file systems." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store private registry credentials in a Kubernetes Secret of type `kubernetes.io/dockerconfigjson` and reference it via `imagePullSecrets`. Private container registries protect intellectual property and sensitive corporate code. Workloads authenticate using `imagePullSecrets` referencing a `kubernetes.io/dockerconfigjson` Secret, ensuring only authorized pods running in permitted namespaces can pull the images.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/",
    tags: ["Registry Security", "imagePullSecrets", "Resilience Failure"]
  },
  {
    id: "k8s-cks-411",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Dockerfile Security Best Practices: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Dockerfile Hardening to prevent malicious script injection and maintain build repeatability during container image construction.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Hardening Dockerfiles: avoiding curl | sh, pin package versions, multi-stage is under consideration.",
    options: [
      { id: 'A', text: "Pin base image digests, avoid downloading unverified scripts via `curl | sh`, create an unprivileged user, and run multi-stage builds." },
      { id: 'B', text: "Execute curl piped directly to bash inside Dockerfile RUN instructions." },
      { id: 'C', text: "Run all container build steps under root without creating a dedicated user." },
      { id: 'D', text: "Include developer SSH keys and API tokens in intermediate Docker build layers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pin base image digests, avoid downloading unverified scripts via `curl | sh`, create an unprivileged user, and run multi-stage builds. Dockerfile hardening eliminates dangerous patterns such as piping unverified internet scripts into shells (`curl | sh`), running as default root, and leaving credentials in build layers. Pinning package versions and using multi-stage builds ensures deterministic and secure images.",
    referenceUrl: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/",
    tags: ["Dockerfile Hardening", "Dockerfile Best Practices", "Dr Failover"]
  },
  {
    id: "k8s-cks-412",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Dockerfile Security Best Practices: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Dockerfile Hardening to prevent malicious script injection and maintain build repeatability during container image construction.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Hardening Dockerfiles: avoiding curl | sh, pin package versions, multi-stage is under consideration.",
    options: [
      { id: 'A', text: "Pin base image digests, avoid downloading unverified scripts via `curl | sh`, create an unprivileged user, and run multi-stage builds." },
      { id: 'B', text: "Execute curl piped directly to bash inside Dockerfile RUN instructions." },
      { id: 'C', text: "Run all container build steps under root without creating a dedicated user." },
      { id: 'D', text: "Include developer SSH keys and API tokens in intermediate Docker build layers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pin base image digests, avoid downloading unverified scripts via `curl | sh`, create an unprivileged user, and run multi-stage builds. Dockerfile hardening eliminates dangerous patterns such as piping unverified internet scripts into shells (`curl | sh`), running as default root, and leaving credentials in build layers. Pinning package versions and using multi-stage builds ensures deterministic and secure images.",
    referenceUrl: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/",
    tags: ["Dockerfile Hardening", "Dockerfile Best Practices", "High Load Scale"]
  },
  {
    id: "k8s-cks-413",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Dockerfile Security Best Practices: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Dockerfile Hardening to prevent malicious script injection and maintain build repeatability during container image construction.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Hardening Dockerfiles: avoiding curl | sh, pin package versions, multi-stage is under consideration.",
    options: [
      { id: 'A', text: "Pin base image digests, avoid downloading unverified scripts via `curl | sh`, create an unprivileged user, and run multi-stage builds." },
      { id: 'B', text: "Execute curl piped directly to bash inside Dockerfile RUN instructions." },
      { id: 'C', text: "Run all container build steps under root without creating a dedicated user." },
      { id: 'D', text: "Include developer SSH keys and API tokens in intermediate Docker build layers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pin base image digests, avoid downloading unverified scripts via `curl | sh`, create an unprivileged user, and run multi-stage builds. Dockerfile hardening eliminates dangerous patterns such as piping unverified internet scripts into shells (`curl | sh`), running as default root, and leaving credentials in build layers. Pinning package versions and using multi-stage builds ensures deterministic and secure images.",
    referenceUrl: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/",
    tags: ["Dockerfile Hardening", "Dockerfile Best Practices", "Security Compliance"]
  },
  {
    id: "k8s-cks-414",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Dockerfile Security Best Practices: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Dockerfile Hardening to prevent malicious script injection and maintain build repeatability during container image construction.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Hardening Dockerfiles: avoiding curl | sh, pin package versions, multi-stage is under consideration.",
    options: [
      { id: 'A', text: "Pin base image digests, avoid downloading unverified scripts via `curl | sh`, create an unprivileged user, and run multi-stage builds." },
      { id: 'B', text: "Execute curl piped directly to bash inside Dockerfile RUN instructions." },
      { id: 'C', text: "Run all container build steps under root without creating a dedicated user." },
      { id: 'D', text: "Include developer SSH keys and API tokens in intermediate Docker build layers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pin base image digests, avoid downloading unverified scripts via `curl | sh`, create an unprivileged user, and run multi-stage builds. Dockerfile hardening eliminates dangerous patterns such as piping unverified internet scripts into shells (`curl | sh`), running as default root, and leaving credentials in build layers. Pinning package versions and using multi-stage builds ensures deterministic and secure images.",
    referenceUrl: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/",
    tags: ["Dockerfile Hardening", "Dockerfile Best Practices", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-415",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Dockerfile Security Best Practices: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Dockerfile Hardening to prevent malicious script injection and maintain build repeatability during container image construction.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Hardening Dockerfiles: avoiding curl | sh, pin package versions, multi-stage is under consideration.",
    options: [
      { id: 'A', text: "Pin base image digests, avoid downloading unverified scripts via `curl | sh`, create an unprivileged user, and run multi-stage builds." },
      { id: 'B', text: "Execute curl piped directly to bash inside Dockerfile RUN instructions." },
      { id: 'C', text: "Run all container build steps under root without creating a dedicated user." },
      { id: 'D', text: "Include developer SSH keys and API tokens in intermediate Docker build layers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pin base image digests, avoid downloading unverified scripts via `curl | sh`, create an unprivileged user, and run multi-stage builds. Dockerfile hardening eliminates dangerous patterns such as piping unverified internet scripts into shells (`curl | sh`), running as default root, and leaving credentials in build layers. Pinning package versions and using multi-stage builds ensures deterministic and secure images.",
    referenceUrl: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/",
    tags: ["Dockerfile Hardening", "Dockerfile Best Practices", "Resilience Failure"]
  },
  {
    id: "k8s-cks-416",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Restricting Container Base Registries via Policy: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Registry Governance to prevent developers from deploying containers sourced from unvetted public registries (like personal Docker Hub accounts) to production clusters.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Enforcing allowed image registries using admission policies (OPA Gatekeeper) is under consideration.",
    options: [
      { id: 'A', text: "Deploy an admission policy (OPA Gatekeeper or Kyverno) that rejects any pod whose image does not originate from approved corporate registries." },
      { id: 'B', text: "Trust developers not to deploy images from unapproved registries." },
      { id: 'C', text: "Block internet access completely across all corporate workstations." },
      { id: 'D', text: "Rename public images to look like internal corporate repository names." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an admission policy (OPA Gatekeeper or Kyverno) that rejects any pod whose image does not originate from approved corporate registries. Supply chain defense requires governing the source of container images. Admission controllers evaluate incoming pod manifests and enforce whitelist policies, rejecting any image whose URL prefix does not match the company's verified private registry or mirror.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Registry Governance", "Registry Governance", "Dr Failover"]
  },
  {
    id: "k8s-cks-417",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Restricting Container Base Registries via Policy: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Registry Governance to prevent developers from deploying containers sourced from unvetted public registries (like personal Docker Hub accounts) to production clusters.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Enforcing allowed image registries using admission policies (OPA Gatekeeper) is under consideration.",
    options: [
      { id: 'A', text: "Deploy an admission policy (OPA Gatekeeper or Kyverno) that rejects any pod whose image does not originate from approved corporate registries." },
      { id: 'B', text: "Trust developers not to deploy images from unapproved registries." },
      { id: 'C', text: "Block internet access completely across all corporate workstations." },
      { id: 'D', text: "Rename public images to look like internal corporate repository names." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an admission policy (OPA Gatekeeper or Kyverno) that rejects any pod whose image does not originate from approved corporate registries. Supply chain defense requires governing the source of container images. Admission controllers evaluate incoming pod manifests and enforce whitelist policies, rejecting any image whose URL prefix does not match the company's verified private registry or mirror.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Registry Governance", "Registry Governance", "High Load Scale"]
  },
  {
    id: "k8s-cks-418",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Restricting Container Base Registries via Policy: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Registry Governance to prevent developers from deploying containers sourced from unvetted public registries (like personal Docker Hub accounts) to production clusters.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Enforcing allowed image registries using admission policies (OPA Gatekeeper) is under consideration.",
    options: [
      { id: 'A', text: "Deploy an admission policy (OPA Gatekeeper or Kyverno) that rejects any pod whose image does not originate from approved corporate registries." },
      { id: 'B', text: "Trust developers not to deploy images from unapproved registries." },
      { id: 'C', text: "Block internet access completely across all corporate workstations." },
      { id: 'D', text: "Rename public images to look like internal corporate repository names." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an admission policy (OPA Gatekeeper or Kyverno) that rejects any pod whose image does not originate from approved corporate registries. Supply chain defense requires governing the source of container images. Admission controllers evaluate incoming pod manifests and enforce whitelist policies, rejecting any image whose URL prefix does not match the company's verified private registry or mirror.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Registry Governance", "Registry Governance", "Security Compliance"]
  },
  {
    id: "k8s-cks-419",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Restricting Container Base Registries via Policy: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Registry Governance to prevent developers from deploying containers sourced from unvetted public registries (like personal Docker Hub accounts) to production clusters.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Enforcing allowed image registries using admission policies (OPA Gatekeeper) is under consideration.",
    options: [
      { id: 'A', text: "Deploy an admission policy (OPA Gatekeeper or Kyverno) that rejects any pod whose image does not originate from approved corporate registries." },
      { id: 'B', text: "Trust developers not to deploy images from unapproved registries." },
      { id: 'C', text: "Block internet access completely across all corporate workstations." },
      { id: 'D', text: "Rename public images to look like internal corporate repository names." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an admission policy (OPA Gatekeeper or Kyverno) that rejects any pod whose image does not originate from approved corporate registries. Supply chain defense requires governing the source of container images. Admission controllers evaluate incoming pod manifests and enforce whitelist policies, rejecting any image whose URL prefix does not match the company's verified private registry or mirror.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Registry Governance", "Registry Governance", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-420",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Restricting Container Base Registries via Policy: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Registry Governance to prevent developers from deploying containers sourced from unvetted public registries (like personal Docker Hub accounts) to production clusters.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Enforcing allowed image registries using admission policies (OPA Gatekeeper) is under consideration.",
    options: [
      { id: 'A', text: "Deploy an admission policy (OPA Gatekeeper or Kyverno) that rejects any pod whose image does not originate from approved corporate registries." },
      { id: 'B', text: "Trust developers not to deploy images from unapproved registries." },
      { id: 'C', text: "Block internet access completely across all corporate workstations." },
      { id: 'D', text: "Rename public images to look like internal corporate repository names." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an admission policy (OPA Gatekeeper or Kyverno) that rejects any pod whose image does not originate from approved corporate registries. Supply chain defense requires governing the source of container images. Admission controllers evaluate incoming pod manifests and enforce whitelist policies, rejecting any image whose URL prefix does not match the company's verified private registry or mirror.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Registry Governance", "Registry Governance", "Resilience Failure"]
  },
  {
    id: "k8s-cks-421",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Automated Dependency Auditing (npm audit / govulncheck): Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Dependency Auditing to detect vulnerable third-party open-source dependencies in application code before containerization.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Scanning application dependencies for CVEs during CI builds is under consideration.",
    options: [
      { id: 'A', text: "Run language-specific dependency auditors (e.g., `npm audit`, `govulncheck`, `pip-audit`, `snyk`) as mandatory steps in the CI build pipeline." },
      { id: 'B', text: "Assume open-source packages never contain security flaws." },
      { id: 'C', text: "Disable automated dependency updates to prevent code changes." },
      { id: 'D', text: "Ignore all dependency vulnerability alerts until an exploit is reported in the news." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run language-specific dependency auditors (e.g., `npm audit`, `govulncheck`, `pip-audit`, `snyk`) as mandatory steps in the CI build pipeline. Modern software relies heavily on open-source packages. Integrating automated vulnerability auditing tools into CI pipelines inspects dependency manifests against known vulnerability databases, alerting engineers to known flaws before images are built.",
    referenceUrl: "https://docs.npmjs.com/cli/v10/commands/npm-audit",
    tags: ["Dependency Auditing", "Dependency Auditing", "Dr Failover"]
  },
  {
    id: "k8s-cks-422",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Automated Dependency Auditing (npm audit / govulncheck): High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Dependency Auditing to detect vulnerable third-party open-source dependencies in application code before containerization.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Scanning application dependencies for CVEs during CI builds is under consideration.",
    options: [
      { id: 'A', text: "Run language-specific dependency auditors (e.g., `npm audit`, `govulncheck`, `pip-audit`, `snyk`) as mandatory steps in the CI build pipeline." },
      { id: 'B', text: "Assume open-source packages never contain security flaws." },
      { id: 'C', text: "Disable automated dependency updates to prevent code changes." },
      { id: 'D', text: "Ignore all dependency vulnerability alerts until an exploit is reported in the news." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run language-specific dependency auditors (e.g., `npm audit`, `govulncheck`, `pip-audit`, `snyk`) as mandatory steps in the CI build pipeline. Modern software relies heavily on open-source packages. Integrating automated vulnerability auditing tools into CI pipelines inspects dependency manifests against known vulnerability databases, alerting engineers to known flaws before images are built.",
    referenceUrl: "https://docs.npmjs.com/cli/v10/commands/npm-audit",
    tags: ["Dependency Auditing", "Dependency Auditing", "High Load Scale"]
  },
  {
    id: "k8s-cks-423",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Automated Dependency Auditing (npm audit / govulncheck): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Dependency Auditing to detect vulnerable third-party open-source dependencies in application code before containerization.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Scanning application dependencies for CVEs during CI builds is under consideration.",
    options: [
      { id: 'A', text: "Run language-specific dependency auditors (e.g., `npm audit`, `govulncheck`, `pip-audit`, `snyk`) as mandatory steps in the CI build pipeline." },
      { id: 'B', text: "Assume open-source packages never contain security flaws." },
      { id: 'C', text: "Disable automated dependency updates to prevent code changes." },
      { id: 'D', text: "Ignore all dependency vulnerability alerts until an exploit is reported in the news." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run language-specific dependency auditors (e.g., `npm audit`, `govulncheck`, `pip-audit`, `snyk`) as mandatory steps in the CI build pipeline. Modern software relies heavily on open-source packages. Integrating automated vulnerability auditing tools into CI pipelines inspects dependency manifests against known vulnerability databases, alerting engineers to known flaws before images are built.",
    referenceUrl: "https://docs.npmjs.com/cli/v10/commands/npm-audit",
    tags: ["Dependency Auditing", "Dependency Auditing", "Security Compliance"]
  },
  {
    id: "k8s-cks-424",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Automated Dependency Auditing (npm audit / govulncheck): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Dependency Auditing to detect vulnerable third-party open-source dependencies in application code before containerization.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Scanning application dependencies for CVEs during CI builds is under consideration.",
    options: [
      { id: 'A', text: "Run language-specific dependency auditors (e.g., `npm audit`, `govulncheck`, `pip-audit`, `snyk`) as mandatory steps in the CI build pipeline." },
      { id: 'B', text: "Assume open-source packages never contain security flaws." },
      { id: 'C', text: "Disable automated dependency updates to prevent code changes." },
      { id: 'D', text: "Ignore all dependency vulnerability alerts until an exploit is reported in the news." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run language-specific dependency auditors (e.g., `npm audit`, `govulncheck`, `pip-audit`, `snyk`) as mandatory steps in the CI build pipeline. Modern software relies heavily on open-source packages. Integrating automated vulnerability auditing tools into CI pipelines inspects dependency manifests against known vulnerability databases, alerting engineers to known flaws before images are built.",
    referenceUrl: "https://docs.npmjs.com/cli/v10/commands/npm-audit",
    tags: ["Dependency Auditing", "Dependency Auditing", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-425",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Automated Dependency Auditing (npm audit / govulncheck): Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Dependency Auditing to detect vulnerable third-party open-source dependencies in application code before containerization.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Scanning application dependencies for CVEs during CI builds is under consideration.",
    options: [
      { id: 'A', text: "Run language-specific dependency auditors (e.g., `npm audit`, `govulncheck`, `pip-audit`, `snyk`) as mandatory steps in the CI build pipeline." },
      { id: 'B', text: "Assume open-source packages never contain security flaws." },
      { id: 'C', text: "Disable automated dependency updates to prevent code changes." },
      { id: 'D', text: "Ignore all dependency vulnerability alerts until an exploit is reported in the news." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run language-specific dependency auditors (e.g., `npm audit`, `govulncheck`, `pip-audit`, `snyk`) as mandatory steps in the CI build pipeline. Modern software relies heavily on open-source packages. Integrating automated vulnerability auditing tools into CI pipelines inspects dependency manifests against known vulnerability databases, alerting engineers to known flaws before images are built.",
    referenceUrl: "https://docs.npmjs.com/cli/v10/commands/npm-audit",
    tags: ["Dependency Auditing", "Dependency Auditing", "Resilience Failure"]
  }
];

export default K8S_CKS_QUESTIONS_17;
