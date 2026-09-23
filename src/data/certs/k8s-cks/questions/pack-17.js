export const K8S_CKS_QUESTIONS_17 = [
  {
    id: "k8s-cks-401",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Immutable Image References by Digest: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to ensure that pods across all cluster nodes run the exact bit-for-bit identical binary image and prevent tag-hijacking attacks.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Reference the image by tag with `imagePullPolicy: Always` so the newest layer is fetched." },
      { id: 'B', text: "Reference the image by a release tag and enable the `AlwaysPullImages` admission plugin." },
      { id: 'C', text: "Reference the image by immutable digest, as `image: repo/app@sha256:...`." },
      { id: 'D', text: "Reference the image by tag and mirror the registry so the tag cannot move underneath." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specify container images using the immutable SHA256 digest (`image: repo/app@sha256:...`) instead of mutable tags. Tags in container registries are mutable pointers that can be overwritten by anyone with registry write access. Deploying pods using the immutable content addressable digest (`@sha256:...`) ensures that nodes pull the exact, tamper-evident cryptographic artifact.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-names",
    tags: ["Image Digests","Image Digests","Dr Failover"]
  },
  {
    id: "k8s-cks-402",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Immutable Image References by Digest: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to ensure that pods across all cluster nodes run the exact bit-for-bit identical binary image and prevent tag-hijacking attacks.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Reference the image by tag and mirror the registry so the tag cannot move underneath." },
      { id: 'B', text: "Reference the image by a release tag and enable the `AlwaysPullImages` admission plugin." },
      { id: 'C', text: "Reference the image by tag with `imagePullPolicy: Always` so the newest layer is fetched." },
      { id: 'D', text: "Reference the image by immutable digest, as `image: repo/app@sha256:...`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Specify container images using the immutable SHA256 digest (`image: repo/app@sha256:...`) instead of mutable tags. Tags in container registries are mutable pointers that can be overwritten by anyone with registry write access. Deploying pods using the immutable content addressable digest (`@sha256:...`) ensures that nodes pull the exact, tamper-evident cryptographic artifact.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-names",
    tags: ["Image Digests","Image Digests","High Load Scale"]
  },
  {
    id: "k8s-cks-403",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Immutable Image References by Digest: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to ensure that pods across all cluster nodes run the exact bit-for-bit identical binary image and prevent tag-hijacking attacks.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Reference the image by immutable digest, as `image: repo/app@sha256:...`." },
      { id: 'B', text: "Reference the image by a release tag and enable the `AlwaysPullImages` admission plugin." },
      { id: 'C', text: "Reference the image by tag and mirror the registry so the tag cannot move underneath." },
      { id: 'D', text: "Reference the image by tag with `imagePullPolicy: Always` so the newest layer is fetched." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify container images using the immutable SHA256 digest (`image: repo/app@sha256:...`) instead of mutable tags. Tags in container registries are mutable pointers that can be overwritten by anyone with registry write access. Deploying pods using the immutable content addressable digest (`@sha256:...`) ensures that nodes pull the exact, tamper-evident cryptographic artifact.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-names",
    tags: ["Image Digests","Image Digests","Security Compliance"]
  },
  {
    id: "k8s-cks-404",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Immutable Image References by Digest: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to ensure that pods across all cluster nodes run the exact bit-for-bit identical binary image and prevent tag-hijacking attacks.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Reference the image by tag and mirror the registry so the tag cannot move underneath." },
      { id: 'B', text: "Reference the image by immutable digest, as `image: repo/app@sha256:...`." },
      { id: 'C', text: "Reference the image by a release tag and enable the `AlwaysPullImages` admission plugin." },
      { id: 'D', text: "Reference the image by tag with `imagePullPolicy: Always` so the newest layer is fetched." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Specify container images using the immutable SHA256 digest (`image: repo/app@sha256:...`) instead of mutable tags. Tags in container registries are mutable pointers that can be overwritten by anyone with registry write access. Deploying pods using the immutable content addressable digest (`@sha256:...`) ensures that nodes pull the exact, tamper-evident cryptographic artifact.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-names",
    tags: ["Image Digests","Image Digests","Hybrid Migration"]
  },
  {
    id: "k8s-cks-405",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Immutable Image References by Digest: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to ensure that pods across all cluster nodes run the exact bit-for-bit identical binary image and prevent tag-hijacking attacks.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Reference the image by immutable digest, as `image: repo/app@sha256:...`." },
      { id: 'B', text: "Reference the image by a release tag and enable the `AlwaysPullImages` admission plugin." },
      { id: 'C', text: "Reference the image by tag and mirror the registry so the tag cannot move underneath." },
      { id: 'D', text: "Reference the image by tag with `imagePullPolicy: Always` so the newest layer is fetched." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify container images using the immutable SHA256 digest (`image: repo/app@sha256:...`) instead of mutable tags. Tags in container registries are mutable pointers that can be overwritten by anyone with registry write access. Deploying pods using the immutable content addressable digest (`@sha256:...`) ensures that nodes pull the exact, tamper-evident cryptographic artifact.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-names",
    tags: ["Image Digests","Image Digests","Resilience Failure"]
  },
  {
    id: "k8s-cks-406",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Private Container Registry Authentication: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to restrict container image downloads so that only authenticated cluster worker nodes can pull proprietary enterprise software images.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Hold the registry credentials in a `kubernetes.io/dockerconfigjson` Secret named by `imagePullSecrets`." },
      { id: 'B', text: "Hold the registry credentials in an `Opaque` Secret mounted into each pod as a config file." },
      { id: 'C', text: "Hold the registry credentials in the node's own `/var/lib/kubelet/config.json` on every node." },
      { id: 'D', text: "Hold the registry credentials in the default ServiceAccount's `imagePullSecrets` in every namespace instead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store private registry credentials in a Kubernetes Secret of type `kubernetes.io/dockerconfigjson` and reference it via `imagePullSecrets`. Private container registries protect intellectual property and sensitive corporate code. Workloads authenticate using `imagePullSecrets` referencing a `kubernetes.io/dockerconfigjson` Secret, ensuring only authorized pods running in permitted namespaces can pull the images.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/",
    tags: ["Registry Security","imagePullSecrets","Dr Failover"]
  },
  {
    id: "k8s-cks-407",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Private Container Registry Authentication: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to restrict container image downloads so that only authenticated cluster worker nodes can pull proprietary enterprise software images.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Hold the registry credentials in a `kubernetes.io/dockerconfigjson` Secret named by `imagePullSecrets`." },
      { id: 'B', text: "Hold the registry credentials in the default ServiceAccount's `imagePullSecrets` in every namespace instead." },
      { id: 'C', text: "Hold the registry credentials in an `Opaque` Secret mounted into each pod as a config file." },
      { id: 'D', text: "Hold the registry credentials in the node's own `/var/lib/kubelet/config.json` on every node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store private registry credentials in a Kubernetes Secret of type `kubernetes.io/dockerconfigjson` and reference it via `imagePullSecrets`. Private container registries protect intellectual property and sensitive corporate code. Workloads authenticate using `imagePullSecrets` referencing a `kubernetes.io/dockerconfigjson` Secret, ensuring only authorized pods running in permitted namespaces can pull the images.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/",
    tags: ["Registry Security","imagePullSecrets","High Load Scale"]
  },
  {
    id: "k8s-cks-408",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Private Container Registry Authentication: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to restrict container image downloads so that only authenticated cluster worker nodes can pull proprietary enterprise software images.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Hold the registry credentials in a `kubernetes.io/dockerconfigjson` Secret named by `imagePullSecrets`." },
      { id: 'B', text: "Hold the registry credentials in an `Opaque` Secret mounted into each pod as a config file." },
      { id: 'C', text: "Hold the registry credentials in the node's own `/var/lib/kubelet/config.json` on every node." },
      { id: 'D', text: "Hold the registry credentials in the default ServiceAccount's `imagePullSecrets` in every namespace instead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store private registry credentials in a Kubernetes Secret of type `kubernetes.io/dockerconfigjson` and reference it via `imagePullSecrets`. Private container registries protect intellectual property and sensitive corporate code. Workloads authenticate using `imagePullSecrets` referencing a `kubernetes.io/dockerconfigjson` Secret, ensuring only authorized pods running in permitted namespaces can pull the images.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/",
    tags: ["Registry Security","imagePullSecrets","Security Compliance"]
  },
  {
    id: "k8s-cks-409",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Private Container Registry Authentication: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to restrict container image downloads so that only authenticated cluster worker nodes can pull proprietary enterprise software images.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Hold the registry credentials in a `kubernetes.io/dockerconfigjson` Secret named by `imagePullSecrets`." },
      { id: 'B', text: "Hold the registry credentials in an `Opaque` Secret mounted into each pod as a config file." },
      { id: 'C', text: "Hold the registry credentials in the node's own `/var/lib/kubelet/config.json` on every node." },
      { id: 'D', text: "Hold the registry credentials in the default ServiceAccount's `imagePullSecrets` in every namespace instead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store private registry credentials in a Kubernetes Secret of type `kubernetes.io/dockerconfigjson` and reference it via `imagePullSecrets`. Private container registries protect intellectual property and sensitive corporate code. Workloads authenticate using `imagePullSecrets` referencing a `kubernetes.io/dockerconfigjson` Secret, ensuring only authorized pods running in permitted namespaces can pull the images.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/",
    tags: ["Registry Security","imagePullSecrets","Hybrid Migration"]
  },
  {
    id: "k8s-cks-410",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Private Container Registry Authentication: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to restrict container image downloads so that only authenticated cluster worker nodes can pull proprietary enterprise software images.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Hold the registry credentials in an `Opaque` Secret mounted into each pod as a config file." },
      { id: 'B', text: "Hold the registry credentials in the node's own `/var/lib/kubelet/config.json` on every node." },
      { id: 'C', text: "Hold the registry credentials in a `kubernetes.io/dockerconfigjson` Secret named by `imagePullSecrets`." },
      { id: 'D', text: "Hold the registry credentials in the default ServiceAccount's `imagePullSecrets` in every namespace instead." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Store private registry credentials in a Kubernetes Secret of type `kubernetes.io/dockerconfigjson` and reference it via `imagePullSecrets`. Private container registries protect intellectual property and sensitive corporate code. Workloads authenticate using `imagePullSecrets` referencing a `kubernetes.io/dockerconfigjson` Secret, ensuring only authorized pods running in permitted namespaces can pull the images.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/",
    tags: ["Registry Security","imagePullSecrets","Resilience Failure"]
  },
  {
    id: "k8s-cks-411",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Dockerfile Security Best Practices: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to prevent malicious script injection and maintain build repeatability during container image construction.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Pin base digests, drop `curl | sh` steps, add an unprivileged user, and build in stages." },
      { id: 'B', text: "Pin base tags, verify downloads against a checksum, and run the final stage as root." },
      { id: 'C', text: "Pin base digests, squash the layers on push, and set `USER root` for the runtime stage." },
      { id: 'D', text: "Pin base digests, pass credentials with `ARG`, and keep the toolchain in the final image." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pin base image digests, avoid downloading unverified scripts via `curl | sh`, create an unprivileged user, and run multi-stage builds. Dockerfile hardening eliminates dangerous patterns such as piping unverified internet scripts into shells (`curl | sh`), running as default root, and leaving credentials in build layers. Pinning package versions and using multi-stage builds ensures deterministic and secure images.",
    referenceUrl: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/",
    tags: ["Dockerfile Hardening","Dockerfile Best Practices","Dr Failover"]
  },
  {
    id: "k8s-cks-412",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Dockerfile Security Best Practices: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to prevent malicious script injection and maintain build repeatability during container image construction.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Pin base digests, drop `curl | sh` steps, add an unprivileged user, and build in stages." },
      { id: 'B', text: "Pin base digests, pass credentials with `ARG`, and keep the toolchain in the final image." },
      { id: 'C', text: "Pin base tags, verify downloads against a checksum, and run the final stage as root." },
      { id: 'D', text: "Pin base digests, squash the layers on push, and set `USER root` for the runtime stage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pin base image digests, avoid downloading unverified scripts via `curl | sh`, create an unprivileged user, and run multi-stage builds. Dockerfile hardening eliminates dangerous patterns such as piping unverified internet scripts into shells (`curl | sh`), running as default root, and leaving credentials in build layers. Pinning package versions and using multi-stage builds ensures deterministic and secure images.",
    referenceUrl: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/",
    tags: ["Dockerfile Hardening","Dockerfile Best Practices","High Load Scale"]
  },
  {
    id: "k8s-cks-413",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Dockerfile Security Best Practices: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to prevent malicious script injection and maintain build repeatability during container image construction.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Pin base digests, drop `curl | sh` steps, add an unprivileged user, and build in stages." },
      { id: 'B', text: "Pin base tags, verify downloads against a checksum, and run the final stage as root." },
      { id: 'C', text: "Pin base digests, squash the layers on push, and set `USER root` for the runtime stage." },
      { id: 'D', text: "Pin base digests, pass credentials with `ARG`, and keep the toolchain in the final image." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pin base image digests, avoid downloading unverified scripts via `curl | sh`, create an unprivileged user, and run multi-stage builds. Dockerfile hardening eliminates dangerous patterns such as piping unverified internet scripts into shells (`curl | sh`), running as default root, and leaving credentials in build layers. Pinning package versions and using multi-stage builds ensures deterministic and secure images.",
    referenceUrl: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/",
    tags: ["Dockerfile Hardening","Dockerfile Best Practices","Security Compliance"]
  },
  {
    id: "k8s-cks-414",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Dockerfile Security Best Practices: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to prevent malicious script injection and maintain build repeatability during container image construction.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Pin base digests, drop `curl | sh` steps, add an unprivileged user, and build in stages." },
      { id: 'B', text: "Pin base tags, verify downloads against a checksum, and run the final stage as root." },
      { id: 'C', text: "Pin base digests, squash the layers on push, and set `USER root` for the runtime stage." },
      { id: 'D', text: "Pin base digests, pass credentials with `ARG`, and keep the toolchain in the final image." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pin base image digests, avoid downloading unverified scripts via `curl | sh`, create an unprivileged user, and run multi-stage builds. Dockerfile hardening eliminates dangerous patterns such as piping unverified internet scripts into shells (`curl | sh`), running as default root, and leaving credentials in build layers. Pinning package versions and using multi-stage builds ensures deterministic and secure images.",
    referenceUrl: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/",
    tags: ["Dockerfile Hardening","Dockerfile Best Practices","Hybrid Migration"]
  },
  {
    id: "k8s-cks-415",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Dockerfile Security Best Practices: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to prevent malicious script injection and maintain build repeatability during container image construction.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Pin base digests, pass credentials with `ARG`, and keep the toolchain in the final image." },
      { id: 'B', text: "Pin base digests, squash the layers on push, and set `USER root` for the runtime stage." },
      { id: 'C', text: "Pin base tags, verify downloads against a checksum, and run the final stage as root." },
      { id: 'D', text: "Pin base digests, drop `curl | sh` steps, add an unprivileged user, and build in stages." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pin base image digests, avoid downloading unverified scripts via `curl | sh`, create an unprivileged user, and run multi-stage builds. Dockerfile hardening eliminates dangerous patterns such as piping unverified internet scripts into shells (`curl | sh`), running as default root, and leaving credentials in build layers. Pinning package versions and using multi-stage builds ensures deterministic and secure images.",
    referenceUrl: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/",
    tags: ["Dockerfile Hardening","Dockerfile Best Practices","Resilience Failure"]
  },
  {
    id: "k8s-cks-416",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Restricting Container Base Registries via Policy: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to prevent developers from deploying containers sourced from unvetted public registries (like personal Docker Hub accounts) to production clusters.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Apply an `AlwaysPullImages` admission plugin so that unapproved registries fail the pull at admission." },
      { id: 'B', text: "Apply an `ImagePolicyWebhook` configuration whose backend defaults to allow when unreachable." },
      { id: 'C', text: "Apply a Kyverno mutate policy that rewrites every image reference to the internal mirror." },
      { id: 'D', text: "Apply a Gatekeeper or Kyverno policy that rejects pods whose images are not from approved registries." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy an admission policy (OPA Gatekeeper or Kyverno) that rejects any pod whose image does not originate from approved corporate registries. Supply chain defense requires governing the source of container images. Admission controllers evaluate incoming pod manifests and enforce whitelist policies, rejecting any image whose URL prefix does not match the company's verified private registry or mirror.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Registry Governance","Registry Governance","Dr Failover"]
  },
  {
    id: "k8s-cks-417",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Restricting Container Base Registries via Policy: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to prevent developers from deploying containers sourced from unvetted public registries (like personal Docker Hub accounts) to production clusters.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Apply an `ImagePolicyWebhook` configuration whose backend defaults to allow when unreachable." },
      { id: 'B', text: "Apply a Gatekeeper or Kyverno policy that rejects pods whose images are not from approved registries." },
      { id: 'C', text: "Apply a Kyverno mutate policy that rewrites every image reference to the internal mirror." },
      { id: 'D', text: "Apply an `AlwaysPullImages` admission plugin so that unapproved registries fail the pull at admission." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an admission policy (OPA Gatekeeper or Kyverno) that rejects any pod whose image does not originate from approved corporate registries. Supply chain defense requires governing the source of container images. Admission controllers evaluate incoming pod manifests and enforce whitelist policies, rejecting any image whose URL prefix does not match the company's verified private registry or mirror.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Registry Governance","Registry Governance","High Load Scale"]
  },
  {
    id: "k8s-cks-418",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Restricting Container Base Registries via Policy: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to prevent developers from deploying containers sourced from unvetted public registries (like personal Docker Hub accounts) to production clusters.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Apply a Gatekeeper or Kyverno policy that rejects pods whose images are not from approved registries." },
      { id: 'B', text: "Apply a Kyverno mutate policy that rewrites every image reference to the internal mirror." },
      { id: 'C', text: "Apply an `ImagePolicyWebhook` configuration whose backend defaults to allow when unreachable." },
      { id: 'D', text: "Apply an `AlwaysPullImages` admission plugin so that unapproved registries fail the pull at admission." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an admission policy (OPA Gatekeeper or Kyverno) that rejects any pod whose image does not originate from approved corporate registries. Supply chain defense requires governing the source of container images. Admission controllers evaluate incoming pod manifests and enforce whitelist policies, rejecting any image whose URL prefix does not match the company's verified private registry or mirror.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Registry Governance","Registry Governance","Security Compliance"]
  },
  {
    id: "k8s-cks-419",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Restricting Container Base Registries via Policy: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to prevent developers from deploying containers sourced from unvetted public registries (like personal Docker Hub accounts) to production clusters.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Apply a Gatekeeper or Kyverno policy that rejects pods whose images are not from approved registries." },
      { id: 'B', text: "Apply a Kyverno mutate policy that rewrites every image reference to the internal mirror." },
      { id: 'C', text: "Apply an `ImagePolicyWebhook` configuration whose backend defaults to allow when unreachable." },
      { id: 'D', text: "Apply an `AlwaysPullImages` admission plugin so that unapproved registries fail the pull at admission." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an admission policy (OPA Gatekeeper or Kyverno) that rejects any pod whose image does not originate from approved corporate registries. Supply chain defense requires governing the source of container images. Admission controllers evaluate incoming pod manifests and enforce whitelist policies, rejecting any image whose URL prefix does not match the company's verified private registry or mirror.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Registry Governance","Registry Governance","Hybrid Migration"]
  },
  {
    id: "k8s-cks-420",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Restricting Container Base Registries via Policy: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to prevent developers from deploying containers sourced from unvetted public registries (like personal Docker Hub accounts) to production clusters.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Apply an `AlwaysPullImages` admission plugin so that unapproved registries fail the pull at admission." },
      { id: 'B', text: "Apply a Gatekeeper or Kyverno policy that rejects pods whose images are not from approved registries." },
      { id: 'C', text: "Apply an `ImagePolicyWebhook` configuration whose backend defaults to allow when unreachable." },
      { id: 'D', text: "Apply a Kyverno mutate policy that rewrites every image reference to the internal mirror." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an admission policy (OPA Gatekeeper or Kyverno) that rejects any pod whose image does not originate from approved corporate registries. Supply chain defense requires governing the source of container images. Admission controllers evaluate incoming pod manifests and enforce whitelist policies, rejecting any image whose URL prefix does not match the company's verified private registry or mirror.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Registry Governance","Registry Governance","Resilience Failure"]
  },
  {
    id: "k8s-cks-421",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Automated Dependency Auditing (npm audit / govulncheck): Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to detect vulnerable third-party open-source dependencies in application code before containerization.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Run the image scanner over the built artifact, which covers the language packages it bundles." },
      { id: 'B', text: "Run a scheduled dependency update bot and merge its pull requests on the release branch." },
      { id: 'C', text: "Run the language auditors — `npm audit`, `govulncheck`, `pip-audit` — as required CI steps." },
      { id: 'D', text: "Run an SBOM generator in CI and file the output for the security team to review later." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run language-specific dependency auditors (e.g., `npm audit`, `govulncheck`, `pip-audit`, `snyk`) as mandatory steps in the CI build pipeline. Modern software relies heavily on open-source packages. Integrating automated vulnerability auditing tools into CI pipelines inspects dependency manifests against known vulnerability databases, alerting engineers to known flaws before images are built.",
    referenceUrl: "https://docs.npmjs.com/cli/v10/commands/npm-audit",
    tags: ["Dependency Auditing","Dependency Auditing","Dr Failover"]
  },
  {
    id: "k8s-cks-422",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Automated Dependency Auditing (npm audit / govulncheck): High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to detect vulnerable third-party open-source dependencies in application code before containerization.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Run a scheduled dependency update bot and merge its pull requests on the release branch." },
      { id: 'B', text: "Run an SBOM generator in CI and file the output for the security team to review later." },
      { id: 'C', text: "Run the language auditors — `npm audit`, `govulncheck`, `pip-audit` — as required CI steps." },
      { id: 'D', text: "Run the image scanner over the built artifact, which covers the language packages it bundles." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run language-specific dependency auditors (e.g., `npm audit`, `govulncheck`, `pip-audit`, `snyk`) as mandatory steps in the CI build pipeline. Modern software relies heavily on open-source packages. Integrating automated vulnerability auditing tools into CI pipelines inspects dependency manifests against known vulnerability databases, alerting engineers to known flaws before images are built.",
    referenceUrl: "https://docs.npmjs.com/cli/v10/commands/npm-audit",
    tags: ["Dependency Auditing","Dependency Auditing","High Load Scale"]
  },
  {
    id: "k8s-cks-423",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Automated Dependency Auditing (npm audit / govulncheck): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to detect vulnerable third-party open-source dependencies in application code before containerization.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Run the image scanner over the built artifact, which covers the language packages it bundles." },
      { id: 'B', text: "Run an SBOM generator in CI and file the output for the security team to review later." },
      { id: 'C', text: "Run a scheduled dependency update bot and merge its pull requests on the release branch." },
      { id: 'D', text: "Run the language auditors — `npm audit`, `govulncheck`, `pip-audit` — as required CI steps." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Run language-specific dependency auditors (e.g., `npm audit`, `govulncheck`, `pip-audit`, `snyk`) as mandatory steps in the CI build pipeline. Modern software relies heavily on open-source packages. Integrating automated vulnerability auditing tools into CI pipelines inspects dependency manifests against known vulnerability databases, alerting engineers to known flaws before images are built.",
    referenceUrl: "https://docs.npmjs.com/cli/v10/commands/npm-audit",
    tags: ["Dependency Auditing","Dependency Auditing","Security Compliance"]
  },
  {
    id: "k8s-cks-424",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Automated Dependency Auditing (npm audit / govulncheck): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to detect vulnerable third-party open-source dependencies in application code before containerization.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Run the language auditors — `npm audit`, `govulncheck`, `pip-audit` — as required CI steps." },
      { id: 'B', text: "Run the image scanner over the built artifact, which covers the language packages it bundles." },
      { id: 'C', text: "Run a scheduled dependency update bot and merge its pull requests on the release branch." },
      { id: 'D', text: "Run an SBOM generator in CI and file the output for the security team to review later." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run language-specific dependency auditors (e.g., `npm audit`, `govulncheck`, `pip-audit`, `snyk`) as mandatory steps in the CI build pipeline. Modern software relies heavily on open-source packages. Integrating automated vulnerability auditing tools into CI pipelines inspects dependency manifests against known vulnerability databases, alerting engineers to known flaws before images are built.",
    referenceUrl: "https://docs.npmjs.com/cli/v10/commands/npm-audit",
    tags: ["Dependency Auditing","Dependency Auditing","Hybrid Migration"]
  },
  {
    id: "k8s-cks-425",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Automated Dependency Auditing (npm audit / govulncheck): Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to detect vulnerable third-party open-source dependencies in application code before containerization.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Run the image scanner over the built artifact, which covers the language packages it bundles." },
      { id: 'B', text: "Run the language auditors — `npm audit`, `govulncheck`, `pip-audit` — as required CI steps." },
      { id: 'C', text: "Run an SBOM generator in CI and file the output for the security team to review later." },
      { id: 'D', text: "Run a scheduled dependency update bot and merge its pull requests on the release branch." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run language-specific dependency auditors (e.g., `npm audit`, `govulncheck`, `pip-audit`, `snyk`) as mandatory steps in the CI build pipeline. Modern software relies heavily on open-source packages. Integrating automated vulnerability auditing tools into CI pipelines inspects dependency manifests against known vulnerability databases, alerting engineers to known flaws before images are built.",
    referenceUrl: "https://docs.npmjs.com/cli/v10/commands/npm-audit",
    tags: ["Dependency Auditing","Dependency Auditing","Resilience Failure"]
  }
];

export default K8S_CKS_QUESTIONS_17;
