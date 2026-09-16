export const K8S_CKAD_QUESTIONS_12 = [
  {
    id: "k8s-ckad-276",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Stage Dockerfile Builds for Lean Images: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Container Builds to build a secure, minimal container image for a Go web application without bundling the Go compiler, SDK, or build tools into the production image.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Build in the `golang` image and delete the toolchain with a `RUN apk del go` step in the final instruction." },
      { id: 'B', text: "Build with `CGO_ENABLED=0` and keep `golang:alpine` as the runtime base so the binary stays statically linked." },
      { id: 'C', text: "Use a multi-stage build and copy the compiled binary from the builder stage into a `distroless` runtime image." },
      { id: 'D', text: "Build normally and shrink the result with `docker build --squash` so the toolchain layers are merged away." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use a multi-stage Dockerfile with a builder stage (e.g., `golang:alpine`) and copy the compiled binary into a minimal runtime base image (e.g., `scratch` or `distroless`). Multi-stage Docker builds separate the build environment from the final execution runtime. Artifacts produced in early builder stages are copied into minimal runtime images (such as distroless or scratch), drastically shrinking image size, speeding up image pull times, and eliminating attack vectors.",
    referenceUrl: "https://docs.docker.com/build/building/multi-stage/",
    tags: ["Container Builds","Multi-Stage Builds","Dr Failover"]
  },
  {
    id: "k8s-ckad-277",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Stage Dockerfile Builds for Lean Images: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Container Builds to build a secure, minimal container image for a Go web application without bundling the Go compiler, SDK, or build tools into the production image.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Use a multi-stage build and copy the compiled binary from the builder stage into a `distroless` runtime image." },
      { id: 'B', text: "Build with `CGO_ENABLED=0` and keep `golang:alpine` as the runtime base so the binary stays statically linked." },
      { id: 'C', text: "Build normally and shrink the result with `docker build --squash` so the toolchain layers are merged away." },
      { id: 'D', text: "Build in the `golang` image and delete the toolchain with a `RUN apk del go` step in the final instruction." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a multi-stage Dockerfile with a builder stage (e.g., `golang:alpine`) and copy the compiled binary into a minimal runtime base image (e.g., `scratch` or `distroless`). Multi-stage Docker builds separate the build environment from the final execution runtime. Artifacts produced in early builder stages are copied into minimal runtime images (such as distroless or scratch), drastically shrinking image size, speeding up image pull times, and eliminating attack vectors.",
    referenceUrl: "https://docs.docker.com/build/building/multi-stage/",
    tags: ["Container Builds","Multi-Stage Builds","High Load Scale"]
  },
  {
    id: "k8s-ckad-278",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Stage Dockerfile Builds for Lean Images: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Container Builds to build a secure, minimal container image for a Go web application without bundling the Go compiler, SDK, or build tools into the production image.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Use a multi-stage build and copy the compiled binary from the builder stage into a `distroless` runtime image." },
      { id: 'B', text: "Build with `CGO_ENABLED=0` and keep `golang:alpine` as the runtime base so the binary stays statically linked." },
      { id: 'C', text: "Build normally and shrink the result with `docker build --squash` so the toolchain layers are merged away." },
      { id: 'D', text: "Build in the `golang` image and delete the toolchain with a `RUN apk del go` step in the final instruction." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a multi-stage Dockerfile with a builder stage (e.g., `golang:alpine`) and copy the compiled binary into a minimal runtime base image (e.g., `scratch` or `distroless`). Multi-stage Docker builds separate the build environment from the final execution runtime. Artifacts produced in early builder stages are copied into minimal runtime images (such as distroless or scratch), drastically shrinking image size, speeding up image pull times, and eliminating attack vectors.",
    referenceUrl: "https://docs.docker.com/build/building/multi-stage/",
    tags: ["Container Builds","Multi-Stage Builds","Security Compliance"]
  },
  {
    id: "k8s-ckad-279",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Stage Dockerfile Builds for Lean Images: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Container Builds to build a secure, minimal container image for a Go web application without bundling the Go compiler, SDK, or build tools into the production image.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Use a multi-stage build and copy the compiled binary from the builder stage into a `distroless` runtime image." },
      { id: 'B', text: "Build with `CGO_ENABLED=0` and keep `golang:alpine` as the runtime base so the binary stays statically linked." },
      { id: 'C', text: "Build normally and shrink the result with `docker build --squash` so the toolchain layers are merged away." },
      { id: 'D', text: "Build in the `golang` image and delete the toolchain with a `RUN apk del go` step in the final instruction." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a multi-stage Dockerfile with a builder stage (e.g., `golang:alpine`) and copy the compiled binary into a minimal runtime base image (e.g., `scratch` or `distroless`). Multi-stage Docker builds separate the build environment from the final execution runtime. Artifacts produced in early builder stages are copied into minimal runtime images (such as distroless or scratch), drastically shrinking image size, speeding up image pull times, and eliminating attack vectors.",
    referenceUrl: "https://docs.docker.com/build/building/multi-stage/",
    tags: ["Container Builds","Multi-Stage Builds","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-280",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Stage Dockerfile Builds for Lean Images: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Container Builds to build a secure, minimal container image for a Go web application without bundling the Go compiler, SDK, or build tools into the production image.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Use a multi-stage build and copy the compiled binary from the builder stage into a `distroless` runtime image." },
      { id: 'B', text: "Build with `CGO_ENABLED=0` and keep `golang:alpine` as the runtime base so the binary stays statically linked." },
      { id: 'C', text: "Build normally and shrink the result with `docker build --squash` so the toolchain layers are merged away." },
      { id: 'D', text: "Build in the `golang` image and delete the toolchain with a `RUN apk del go` step in the final instruction." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a multi-stage Dockerfile with a builder stage (e.g., `golang:alpine`) and copy the compiled binary into a minimal runtime base image (e.g., `scratch` or `distroless`). Multi-stage Docker builds separate the build environment from the final execution runtime. Artifacts produced in early builder stages are copied into minimal runtime images (such as distroless or scratch), drastically shrinking image size, speeding up image pull times, and eliminating attack vectors.",
    referenceUrl: "https://docs.docker.com/build/building/multi-stage/",
    tags: ["Container Builds","Multi-Stage Builds","Resilience Failure"]
  },
  {
    id: "k8s-ckad-281",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Ephemeral Container Storage with emptyDir: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Ephemeral Storage to enable two containers in the same pod to exchange temporary rendering files on disk without persisting data after the pod terminates.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Mount a persistent cloud disk volume with ReadWriteMany access mode." },
      { id: 'B', text: "Configure containers to exchange files over external FTP servers." },
      { id: 'C', text: "Mount the host node root filesystem (`/`) with read-write permissions." },
      { id: 'D', text: "Mount an `emptyDir: {}` volume into both containers at the specified mount paths." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Mount an `emptyDir: {}` volume into both containers at the specified mount paths. An `emptyDir` volume is created when a pod is assigned to a node and exists as long as the pod is running on that node. Containers in the pod can read and write the same files in the `emptyDir` volume, providing fast, scratchpad storage that is automatically deleted when the pod is removed.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#emptydir",
    tags: ["Ephemeral Storage","emptyDir Volumes","Dr Failover"]
  },
  {
    id: "k8s-ckad-282",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Ephemeral Container Storage with emptyDir: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Ephemeral Storage to enable two containers in the same pod to exchange temporary rendering files on disk without persisting data after the pod terminates.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Mount a persistent cloud disk volume with ReadWriteMany access mode." },
      { id: 'B', text: "Mount an `emptyDir: {}` volume into both containers at the specified mount paths." },
      { id: 'C', text: "Configure containers to exchange files over external FTP servers." },
      { id: 'D', text: "Mount the host node root filesystem (`/`) with read-write permissions." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Mount an `emptyDir: {}` volume into both containers at the specified mount paths. An `emptyDir` volume is created when a pod is assigned to a node and exists as long as the pod is running on that node. Containers in the pod can read and write the same files in the `emptyDir` volume, providing fast, scratchpad storage that is automatically deleted when the pod is removed.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#emptydir",
    tags: ["Ephemeral Storage","emptyDir Volumes","High Load Scale"]
  },
  {
    id: "k8s-ckad-283",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Ephemeral Container Storage with emptyDir: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Ephemeral Storage to enable two containers in the same pod to exchange temporary rendering files on disk without persisting data after the pod terminates.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Mount a persistent cloud disk volume with ReadWriteMany access mode." },
      { id: 'B', text: "Mount an `emptyDir: {}` volume into both containers at the specified mount paths." },
      { id: 'C', text: "Configure containers to exchange files over external FTP servers." },
      { id: 'D', text: "Mount the host node root filesystem (`/`) with read-write permissions." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Mount an `emptyDir: {}` volume into both containers at the specified mount paths. An `emptyDir` volume is created when a pod is assigned to a node and exists as long as the pod is running on that node. Containers in the pod can read and write the same files in the `emptyDir` volume, providing fast, scratchpad storage that is automatically deleted when the pod is removed.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#emptydir",
    tags: ["Ephemeral Storage","emptyDir Volumes","Security Compliance"]
  },
  {
    id: "k8s-ckad-284",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Ephemeral Container Storage with emptyDir: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Ephemeral Storage to enable two containers in the same pod to exchange temporary rendering files on disk without persisting data after the pod terminates.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Mount an `emptyDir: {}` volume into both containers at the specified mount paths." },
      { id: 'B', text: "Mount a persistent cloud disk volume with ReadWriteMany access mode." },
      { id: 'C', text: "Mount the host node root filesystem (`/`) with read-write permissions." },
      { id: 'D', text: "Configure containers to exchange files over external FTP servers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Mount an `emptyDir: {}` volume into both containers at the specified mount paths. An `emptyDir` volume is created when a pod is assigned to a node and exists as long as the pod is running on that node. Containers in the pod can read and write the same files in the `emptyDir` volume, providing fast, scratchpad storage that is automatically deleted when the pod is removed.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#emptydir",
    tags: ["Ephemeral Storage","emptyDir Volumes","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-285",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Ephemeral Container Storage with emptyDir: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Ephemeral Storage to enable two containers in the same pod to exchange temporary rendering files on disk without persisting data after the pod terminates.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Mount an `emptyDir: {}` volume into both containers at the specified mount paths." },
      { id: 'B', text: "Mount a persistent cloud disk volume with ReadWriteMany access mode." },
      { id: 'C', text: "Mount the host node root filesystem (`/`) with read-write permissions." },
      { id: 'D', text: "Configure containers to exchange files over external FTP servers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Mount an `emptyDir: {}` volume into both containers at the specified mount paths. An `emptyDir` volume is created when a pod is assigned to a node and exists as long as the pod is running on that node. Containers in the pod can read and write the same files in the `emptyDir` volume, providing fast, scratchpad storage that is automatically deleted when the pod is removed.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#emptydir",
    tags: ["Ephemeral Storage","emptyDir Volumes","Resilience Failure"]
  },
  {
    id: "k8s-ckad-286",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Optimizing Container Build Caching: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Build Caching to speed up CI container build pipelines so that modifying application source code does not trigger re-downloading thousands of third-party package dependencies.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Combine the copy and install steps into a single `RUN` instruction so the whole step is cached as a unit." },
      { id: 'B', text: "Copy the dependency manifests and install them in an earlier layer than the one that copies the source." },
      { id: 'C', text: "Add a `.dockerignore` file so unrelated working-tree files stop invalidating the dependency layer." },
      { id: 'D', text: "Mount a package cache with `RUN --mount=type=cache` and copy the source in the Dockerfile's first layer." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Structure the Dockerfile to copy dependency manifests (e.g., `package.json`, `go.mod`) and install dependencies before copying application source code. Docker executes build instructions in order, caching intermediate layers. By copying package manifests and running installation steps before copying source files, package installation layers are reused from cache as long as dependencies have not changed, reducing build times from minutes to seconds.",
    referenceUrl: "https://docs.docker.com/build/cache/",
    tags: ["Build Caching","Build Caching","Dr Failover"]
  },
  {
    id: "k8s-ckad-287",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Optimizing Container Build Caching: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Build Caching to speed up CI container build pipelines so that modifying application source code does not trigger re-downloading thousands of third-party package dependencies.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Mount a package cache with `RUN --mount=type=cache` and copy the source in the Dockerfile's first layer." },
      { id: 'B', text: "Copy the dependency manifests and install them in an earlier layer than the one that copies the source." },
      { id: 'C', text: "Combine the copy and install steps into a single `RUN` instruction so the whole step is cached as a unit." },
      { id: 'D', text: "Add a `.dockerignore` file so unrelated working-tree files stop invalidating the dependency layer." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Structure the Dockerfile to copy dependency manifests (e.g., `package.json`, `go.mod`) and install dependencies before copying application source code. Docker executes build instructions in order, caching intermediate layers. By copying package manifests and running installation steps before copying source files, package installation layers are reused from cache as long as dependencies have not changed, reducing build times from minutes to seconds.",
    referenceUrl: "https://docs.docker.com/build/cache/",
    tags: ["Build Caching","Build Caching","High Load Scale"]
  },
  {
    id: "k8s-ckad-288",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Optimizing Container Build Caching: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Build Caching to speed up CI container build pipelines so that modifying application source code does not trigger re-downloading thousands of third-party package dependencies.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Copy the dependency manifests and install them in an earlier layer than the one that copies the source." },
      { id: 'B', text: "Combine the copy and install steps into a single `RUN` instruction so the whole step is cached as a unit." },
      { id: 'C', text: "Mount a package cache with `RUN --mount=type=cache` and copy the source in the Dockerfile's first layer." },
      { id: 'D', text: "Add a `.dockerignore` file so unrelated working-tree files stop invalidating the dependency layer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Structure the Dockerfile to copy dependency manifests (e.g., `package.json`, `go.mod`) and install dependencies before copying application source code. Docker executes build instructions in order, caching intermediate layers. By copying package manifests and running installation steps before copying source files, package installation layers are reused from cache as long as dependencies have not changed, reducing build times from minutes to seconds.",
    referenceUrl: "https://docs.docker.com/build/cache/",
    tags: ["Build Caching","Build Caching","Security Compliance"]
  },
  {
    id: "k8s-ckad-289",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Optimizing Container Build Caching: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Build Caching to speed up CI container build pipelines so that modifying application source code does not trigger re-downloading thousands of third-party package dependencies.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Add a `.dockerignore` file so unrelated working-tree files stop invalidating the dependency layer." },
      { id: 'B', text: "Mount a package cache with `RUN --mount=type=cache` and copy the source in the Dockerfile's first layer." },
      { id: 'C', text: "Combine the copy and install steps into a single `RUN` instruction so the whole step is cached as a unit." },
      { id: 'D', text: "Copy the dependency manifests and install them in an earlier layer than the one that copies the source." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Structure the Dockerfile to copy dependency manifests (e.g., `package.json`, `go.mod`) and install dependencies before copying application source code. Docker executes build instructions in order, caching intermediate layers. By copying package manifests and running installation steps before copying source files, package installation layers are reused from cache as long as dependencies have not changed, reducing build times from minutes to seconds.",
    referenceUrl: "https://docs.docker.com/build/cache/",
    tags: ["Build Caching","Build Caching","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-290",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Optimizing Container Build Caching: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Build Caching to speed up CI container build pipelines so that modifying application source code does not trigger re-downloading thousands of third-party package dependencies.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Copy the dependency manifests and install them in an earlier layer than the one that copies the source." },
      { id: 'B', text: "Combine the copy and install steps into a single `RUN` instruction so the whole step is cached as a unit." },
      { id: 'C', text: "Mount a package cache with `RUN --mount=type=cache` and copy the source in the Dockerfile's first layer." },
      { id: 'D', text: "Add a `.dockerignore` file so unrelated working-tree files stop invalidating the dependency layer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Structure the Dockerfile to copy dependency manifests (e.g., `package.json`, `go.mod`) and install dependencies before copying application source code. Docker executes build instructions in order, caching intermediate layers. By copying package manifests and running installation steps before copying source files, package installation layers are reused from cache as long as dependencies have not changed, reducing build times from minutes to seconds.",
    referenceUrl: "https://docs.docker.com/build/cache/",
    tags: ["Build Caching","Build Caching","Resilience Failure"]
  },
  {
    id: "k8s-ckad-291",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Container Image Tagging and Immutability: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Image Tagging to prevent unexpected production application behavior caused by overwriting the `latest` image tag with an untested breaking release.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Keep the `latest` tag and set `imagePullPolicy: IfNotPresent` so nodes reuse the cached layer." },
      { id: 'B', text: "Keep the `latest` tag and re-tag the known-good build as `stable` after each release." },
      { id: 'C', text: "Pin image references to an immutable digest (`@sha256:...`) or an exact version tag." },
      { id: 'D', text: "Keep a floating major-version tag such as `v2` and let patch releases land underneath it." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Pin container image references to immutable image digest hashes (`@sha256:...`) or strict semantic version tags in pod manifests. The `latest` tag is mutable and can point to different code revisions over time, leading to unpredictable deployments and inconsistent replicas. Pinning images to semantic versions or immutable cryptographic digests (`sha256:...`) guarantees deterministic, repeatable, and audited deployments.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-names",
    tags: ["Image Tagging","Image Digests","Dr Failover"]
  },
  {
    id: "k8s-ckad-292",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Container Image Tagging and Immutability: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Image Tagging to prevent unexpected production application behavior caused by overwriting the `latest` image tag with an untested breaking release.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Pin image references to an immutable digest (`@sha256:...`) or an exact version tag." },
      { id: 'B', text: "Keep the `latest` tag and re-tag the known-good build as `stable` after each release." },
      { id: 'C', text: "Keep a floating major-version tag such as `v2` and let patch releases land underneath it." },
      { id: 'D', text: "Keep the `latest` tag and set `imagePullPolicy: IfNotPresent` so nodes reuse the cached layer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pin container image references to immutable image digest hashes (`@sha256:...`) or strict semantic version tags in pod manifests. The `latest` tag is mutable and can point to different code revisions over time, leading to unpredictable deployments and inconsistent replicas. Pinning images to semantic versions or immutable cryptographic digests (`sha256:...`) guarantees deterministic, repeatable, and audited deployments.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-names",
    tags: ["Image Tagging","Image Digests","High Load Scale"]
  },
  {
    id: "k8s-ckad-293",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Container Image Tagging and Immutability: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Image Tagging to prevent unexpected production application behavior caused by overwriting the `latest` image tag with an untested breaking release.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Pin image references to an immutable digest (`@sha256:...`) or an exact version tag." },
      { id: 'B', text: "Keep the `latest` tag and re-tag the known-good build as `stable` after each release." },
      { id: 'C', text: "Keep a floating major-version tag such as `v2` and let patch releases land underneath it." },
      { id: 'D', text: "Keep the `latest` tag and set `imagePullPolicy: IfNotPresent` so nodes reuse the cached layer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pin container image references to immutable image digest hashes (`@sha256:...`) or strict semantic version tags in pod manifests. The `latest` tag is mutable and can point to different code revisions over time, leading to unpredictable deployments and inconsistent replicas. Pinning images to semantic versions or immutable cryptographic digests (`sha256:...`) guarantees deterministic, repeatable, and audited deployments.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-names",
    tags: ["Image Tagging","Image Digests","Security Compliance"]
  },
  {
    id: "k8s-ckad-294",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Container Image Tagging and Immutability: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Image Tagging to prevent unexpected production application behavior caused by overwriting the `latest` image tag with an untested breaking release.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Pin image references to an immutable digest (`@sha256:...`) or an exact version tag." },
      { id: 'B', text: "Keep a floating major-version tag such as `v2` and let patch releases land underneath it." },
      { id: 'C', text: "Keep the `latest` tag and set `imagePullPolicy: IfNotPresent` so nodes reuse the cached layer." },
      { id: 'D', text: "Keep the `latest` tag and re-tag the known-good build as `stable` after each release." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pin container image references to immutable image digest hashes (`@sha256:...`) or strict semantic version tags in pod manifests. The `latest` tag is mutable and can point to different code revisions over time, leading to unpredictable deployments and inconsistent replicas. Pinning images to semantic versions or immutable cryptographic digests (`sha256:...`) guarantees deterministic, repeatable, and audited deployments.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-names",
    tags: ["Image Tagging","Image Digests","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-295",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Container Image Tagging and Immutability: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Image Tagging to prevent unexpected production application behavior caused by overwriting the `latest` image tag with an untested breaking release.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Keep the `latest` tag and set `imagePullPolicy: IfNotPresent` so nodes reuse the cached layer." },
      { id: 'B', text: "Keep the `latest` tag and re-tag the known-good build as `stable` after each release." },
      { id: 'C', text: "Pin image references to an immutable digest (`@sha256:...`) or an exact version tag." },
      { id: 'D', text: "Keep a floating major-version tag such as `v2` and let patch releases land underneath it." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Pin container image references to immutable image digest hashes (`@sha256:...`) or strict semantic version tags in pod manifests. The `latest` tag is mutable and can point to different code revisions over time, leading to unpredictable deployments and inconsistent replicas. Pinning images to semantic versions or immutable cryptographic digests (`sha256:...`) guarantees deterministic, repeatable, and audited deployments.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-names",
    tags: ["Image Tagging","Image Digests","Resilience Failure"]
  },
  {
    id: "k8s-ckad-296",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Distroless and Non-Root Container Base Images: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Base Images to harden container images against remote code execution vulnerabilities by removing operating system shells and utilities.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Build on the vendor's full base image and remove the shells with a `RUN` step at the end." },
      { id: 'B', text: "Build on the vendor's full base image and set `readOnlyRootFilesystem: true` at runtime." },
      { id: 'C', text: "Build on a slim Debian base and drop the shell binaries through a `.dockerignore` entry." },
      { id: 'D', text: "Build on a distroless or minimal Alpine base and run the process as a non-root UID." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use Google Distroless or minimal Alpine base images and explicitly configure the container to run as a non-root UID. Distroless images contain only the application binary and its immediate runtime dependencies (libc, SSL certs), omitting package managers, shells (bash/sh), and system utilities. Pairing distroless images with a non-root UID severely restricts an attacker's ability to execute commands if a vulnerability is exploited.",
    referenceUrl: "https://github.com/GoogleContainerTools/distroless",
    tags: ["Base Images","Distroless Images","Dr Failover"]
  },
  {
    id: "k8s-ckad-297",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Distroless and Non-Root Container Base Images: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Base Images to harden container images against remote code execution vulnerabilities by removing operating system shells and utilities.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Build on a distroless or minimal Alpine base and run the process as a non-root UID." },
      { id: 'B', text: "Build on a slim Debian base and drop the shell binaries through a `.dockerignore` entry." },
      { id: 'C', text: "Build on the vendor's full base image and set `readOnlyRootFilesystem: true` at runtime." },
      { id: 'D', text: "Build on the vendor's full base image and remove the shells with a `RUN` step at the end." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Google Distroless or minimal Alpine base images and explicitly configure the container to run as a non-root UID. Distroless images contain only the application binary and its immediate runtime dependencies (libc, SSL certs), omitting package managers, shells (bash/sh), and system utilities. Pairing distroless images with a non-root UID severely restricts an attacker's ability to execute commands if a vulnerability is exploited.",
    referenceUrl: "https://github.com/GoogleContainerTools/distroless",
    tags: ["Base Images","Distroless Images","High Load Scale"]
  },
  {
    id: "k8s-ckad-298",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Distroless and Non-Root Container Base Images: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Base Images to harden container images against remote code execution vulnerabilities by removing operating system shells and utilities.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Build on a distroless or minimal Alpine base and run the process as a non-root UID." },
      { id: 'B', text: "Build on a slim Debian base and drop the shell binaries through a `.dockerignore` entry." },
      { id: 'C', text: "Build on the vendor's full base image and set `readOnlyRootFilesystem: true` at runtime." },
      { id: 'D', text: "Build on the vendor's full base image and remove the shells with a `RUN` step at the end." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Google Distroless or minimal Alpine base images and explicitly configure the container to run as a non-root UID. Distroless images contain only the application binary and its immediate runtime dependencies (libc, SSL certs), omitting package managers, shells (bash/sh), and system utilities. Pairing distroless images with a non-root UID severely restricts an attacker's ability to execute commands if a vulnerability is exploited.",
    referenceUrl: "https://github.com/GoogleContainerTools/distroless",
    tags: ["Base Images","Distroless Images","Security Compliance"]
  },
  {
    id: "k8s-ckad-299",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Distroless and Non-Root Container Base Images: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Base Images to harden container images against remote code execution vulnerabilities by removing operating system shells and utilities.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Build on a slim Debian base and drop the shell binaries through a `.dockerignore` entry." },
      { id: 'B', text: "Build on a distroless or minimal Alpine base and run the process as a non-root UID." },
      { id: 'C', text: "Build on the vendor's full base image and remove the shells with a `RUN` step at the end." },
      { id: 'D', text: "Build on the vendor's full base image and set `readOnlyRootFilesystem: true` at runtime." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use Google Distroless or minimal Alpine base images and explicitly configure the container to run as a non-root UID. Distroless images contain only the application binary and its immediate runtime dependencies (libc, SSL certs), omitting package managers, shells (bash/sh), and system utilities. Pairing distroless images with a non-root UID severely restricts an attacker's ability to execute commands if a vulnerability is exploited.",
    referenceUrl: "https://github.com/GoogleContainerTools/distroless",
    tags: ["Base Images","Distroless Images","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-300",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Distroless and Non-Root Container Base Images: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Base Images to harden container images against remote code execution vulnerabilities by removing operating system shells and utilities.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Build on a slim Debian base and drop the shell binaries through a `.dockerignore` entry." },
      { id: 'B', text: "Build on a distroless or minimal Alpine base and run the process as a non-root UID." },
      { id: 'C', text: "Build on the vendor's full base image and remove the shells with a `RUN` step at the end." },
      { id: 'D', text: "Build on the vendor's full base image and set `readOnlyRootFilesystem: true` at runtime." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use Google Distroless or minimal Alpine base images and explicitly configure the container to run as a non-root UID. Distroless images contain only the application binary and its immediate runtime dependencies (libc, SSL certs), omitting package managers, shells (bash/sh), and system utilities. Pairing distroless images with a non-root UID severely restricts an attacker's ability to execute commands if a vulnerability is exploited.",
    referenceUrl: "https://github.com/GoogleContainerTools/distroless",
    tags: ["Base Images","Distroless Images","Resilience Failure"]
  }
];

export default K8S_CKAD_QUESTIONS_12;
