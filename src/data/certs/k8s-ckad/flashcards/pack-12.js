export const K8S_CKAD_FLASHCARDS_12 = [
  {
    id: "k8s-ckad-fc-276",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Multi-Stage Container Builds (Dr Failover)",
    hint: "Separating build tooling from runtime images to reduce size and CVEs.",
    back: "<strong>Multi-stage container builds</strong> compile binaries in temporary builder stages and copy only final executables to minimal base images, shrinking image size and eliminating build-time vulnerabilities.",
    tags: ["Container Builds", "Multi-Stage Builds", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-277",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Multi-Stage Container Builds (High Load Scale)",
    hint: "Separating build tooling from runtime images to reduce size and CVEs.",
    back: "<strong>Multi-stage container builds</strong> compile binaries in temporary builder stages and copy only final executables to minimal base images, shrinking image size and eliminating build-time vulnerabilities.",
    tags: ["Container Builds", "Multi-Stage Builds", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-278",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Multi-Stage Container Builds (Security Compliance)",
    hint: "Separating build tooling from runtime images to reduce size and CVEs.",
    back: "<strong>Multi-stage container builds</strong> compile binaries in temporary builder stages and copy only final executables to minimal base images, shrinking image size and eliminating build-time vulnerabilities.",
    tags: ["Container Builds", "Multi-Stage Builds", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-279",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Multi-Stage Container Builds (Hybrid Migration)",
    hint: "Separating build tooling from runtime images to reduce size and CVEs.",
    back: "<strong>Multi-stage container builds</strong> compile binaries in temporary builder stages and copy only final executables to minimal base images, shrinking image size and eliminating build-time vulnerabilities.",
    tags: ["Container Builds", "Multi-Stage Builds", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-280",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Multi-Stage Container Builds (Resilience Failure)",
    hint: "Separating build tooling from runtime images to reduce size and CVEs.",
    back: "<strong>Multi-stage container builds</strong> compile binaries in temporary builder stages and copy only final executables to minimal base images, shrinking image size and eliminating build-time vulnerabilities.",
    tags: ["Container Builds", "Multi-Stage Builds", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-281",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes emptyDir Volumes (Dr Failover)",
    hint: "Ephemeral scratchpad storage shared between containers in the same pod.",
    back: "An <strong>emptyDir</strong> volume provides temporary, pod-scoped storage shared across containers; it is created when the pod starts and automatically cleaned up when the pod terminates.",
    tags: ["Ephemeral Storage", "emptyDir Volumes", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-282",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes emptyDir Volumes (High Load Scale)",
    hint: "Ephemeral scratchpad storage shared between containers in the same pod.",
    back: "An <strong>emptyDir</strong> volume provides temporary, pod-scoped storage shared across containers; it is created when the pod starts and automatically cleaned up when the pod terminates.",
    tags: ["Ephemeral Storage", "emptyDir Volumes", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-283",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes emptyDir Volumes (Security Compliance)",
    hint: "Ephemeral scratchpad storage shared between containers in the same pod.",
    back: "An <strong>emptyDir</strong> volume provides temporary, pod-scoped storage shared across containers; it is created when the pod starts and automatically cleaned up when the pod terminates.",
    tags: ["Ephemeral Storage", "emptyDir Volumes", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-284",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes emptyDir Volumes (Hybrid Migration)",
    hint: "Ephemeral scratchpad storage shared between containers in the same pod.",
    back: "An <strong>emptyDir</strong> volume provides temporary, pod-scoped storage shared across containers; it is created when the pod starts and automatically cleaned up when the pod terminates.",
    tags: ["Ephemeral Storage", "emptyDir Volumes", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-285",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes emptyDir Volumes (Resilience Failure)",
    hint: "Ephemeral scratchpad storage shared between containers in the same pod.",
    back: "An <strong>emptyDir</strong> volume provides temporary, pod-scoped storage shared across containers; it is created when the pod starts and automatically cleaned up when the pod terminates.",
    tags: ["Ephemeral Storage", "emptyDir Volumes", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-286",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Container Build Layer Caching (Dr Failover)",
    hint: "Ordering instructions to cache dependency installations across builds.",
    back: "Structuring Dockerfiles to copy <strong>dependency manifests</strong> and install packages before copying source code maximizes layer cache hits and accelerates CI build pipelines.",
    tags: ["Build Caching", "Build Caching", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-287",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Container Build Layer Caching (High Load Scale)",
    hint: "Ordering instructions to cache dependency installations across builds.",
    back: "Structuring Dockerfiles to copy <strong>dependency manifests</strong> and install packages before copying source code maximizes layer cache hits and accelerates CI build pipelines.",
    tags: ["Build Caching", "Build Caching", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-288",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Container Build Layer Caching (Security Compliance)",
    hint: "Ordering instructions to cache dependency installations across builds.",
    back: "Structuring Dockerfiles to copy <strong>dependency manifests</strong> and install packages before copying source code maximizes layer cache hits and accelerates CI build pipelines.",
    tags: ["Build Caching", "Build Caching", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-289",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Container Build Layer Caching (Hybrid Migration)",
    hint: "Ordering instructions to cache dependency installations across builds.",
    back: "Structuring Dockerfiles to copy <strong>dependency manifests</strong> and install packages before copying source code maximizes layer cache hits and accelerates CI build pipelines.",
    tags: ["Build Caching", "Build Caching", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-290",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Container Build Layer Caching (Resilience Failure)",
    hint: "Ordering instructions to cache dependency installations across builds.",
    back: "Structuring Dockerfiles to copy <strong>dependency manifests</strong> and install packages before copying source code maximizes layer cache hits and accelerates CI build pipelines.",
    tags: ["Build Caching", "Build Caching", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-291",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Immutable Image Digests and Semantic Tagging (Dr Failover)",
    hint: "Preventing unpredictable deployments by avoiding mutable latest tags.",
    back: "Referencing <strong>immutable image digests (SHA256)</strong> or strict semantic version tags prevents deployment inconsistencies caused by mutable <code>latest</code> tags being overwritten in registries.",
    tags: ["Image Tagging", "Image Digests", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-292",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Immutable Image Digests and Semantic Tagging (High Load Scale)",
    hint: "Preventing unpredictable deployments by avoiding mutable latest tags.",
    back: "Referencing <strong>immutable image digests (SHA256)</strong> or strict semantic version tags prevents deployment inconsistencies caused by mutable <code>latest</code> tags being overwritten in registries.",
    tags: ["Image Tagging", "Image Digests", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-293",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Immutable Image Digests and Semantic Tagging (Security Compliance)",
    hint: "Preventing unpredictable deployments by avoiding mutable latest tags.",
    back: "Referencing <strong>immutable image digests (SHA256)</strong> or strict semantic version tags prevents deployment inconsistencies caused by mutable <code>latest</code> tags being overwritten in registries.",
    tags: ["Image Tagging", "Image Digests", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-294",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Immutable Image Digests and Semantic Tagging (Hybrid Migration)",
    hint: "Preventing unpredictable deployments by avoiding mutable latest tags.",
    back: "Referencing <strong>immutable image digests (SHA256)</strong> or strict semantic version tags prevents deployment inconsistencies caused by mutable <code>latest</code> tags being overwritten in registries.",
    tags: ["Image Tagging", "Image Digests", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-295",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Immutable Image Digests and Semantic Tagging (Resilience Failure)",
    hint: "Preventing unpredictable deployments by avoiding mutable latest tags.",
    back: "Referencing <strong>immutable image digests (SHA256)</strong> or strict semantic version tags prevents deployment inconsistencies caused by mutable <code>latest</code> tags being overwritten in registries.",
    tags: ["Image Tagging", "Image Digests", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-296",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Distroless and Non-Root Base Images (Dr Failover)",
    hint: "Eliminating shells and package managers to minimize container attack surfaces.",
    back: "<strong>Distroless container images</strong> contain only application binaries without OS shells or package managers; running as non-root prevents attackers from executing arbitrary system commands.",
    tags: ["Base Images", "Distroless Images", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-297",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Distroless and Non-Root Base Images (High Load Scale)",
    hint: "Eliminating shells and package managers to minimize container attack surfaces.",
    back: "<strong>Distroless container images</strong> contain only application binaries without OS shells or package managers; running as non-root prevents attackers from executing arbitrary system commands.",
    tags: ["Base Images", "Distroless Images", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-298",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Distroless and Non-Root Base Images (Security Compliance)",
    hint: "Eliminating shells and package managers to minimize container attack surfaces.",
    back: "<strong>Distroless container images</strong> contain only application binaries without OS shells or package managers; running as non-root prevents attackers from executing arbitrary system commands.",
    tags: ["Base Images", "Distroless Images", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-299",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Distroless and Non-Root Base Images (Hybrid Migration)",
    hint: "Eliminating shells and package managers to minimize container attack surfaces.",
    back: "<strong>Distroless container images</strong> contain only application binaries without OS shells or package managers; running as non-root prevents attackers from executing arbitrary system commands.",
    tags: ["Base Images", "Distroless Images", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-300",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Distroless and Non-Root Base Images (Resilience Failure)",
    hint: "Eliminating shells and package managers to minimize container attack surfaces.",
    back: "<strong>Distroless container images</strong> contain only application binaries without OS shells or package managers; running as non-root prevents attackers from executing arbitrary system commands.",
    tags: ["Base Images", "Distroless Images", "Resilience Failure"]
  }
];

export default K8S_CKAD_FLASHCARDS_12;
