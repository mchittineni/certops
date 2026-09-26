export const CNCF_KCNA_FLASHCARDS_8 = [
  {
    id: "cncf-kcna-fc-176",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Image vs container",
    hint: "Template and instance.",
    back: "An <strong>image</strong> is an immutable, read-only bundle of filesystem layers plus config (entrypoint, env, user). A <strong>container</strong> is a running instance of an image with its own thin <strong>writable layer</strong>, process tree and isolation. Many containers can run from one image, sharing its layers on disk.",
    tags: ["Container images","Containers"]
  },
  {
    id: "cncf-kcna-fc-177",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Which CLI inspects containers directly on a Kubernetes node that runs containerd or CRI-O?",
    hint: "It speaks the CRI.",
    back: "<strong>crictl</strong>. Common commands: <code>crictl pods</code>, <code>crictl ps -a</code>, <code>crictl images</code>, <code>crictl logs</code>, <code>crictl inspect</code>. It shows what the kubelet asked the runtime to create. <code>docker</code> is usually not installed, and containerd's own <code>ctr</code> is a lower-level debugging tool.",
    tags: ["crictl"]
  },
  {
    id: "cncf-kcna-fc-178",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "containerd vs CRI-O: what do they have in common and how do they differ?",
    hint: "Both implement one interface.",
    back: "Both are <strong>CNCF graduated, CRI-compatible, high-level runtimes</strong> that pull OCI images and call an OCI runtime (runc, crun) to start containers. <strong>containerd</strong> is general-purpose (also used by Docker Engine and other tools). <strong>CRI-O</strong> is built <strong>only for Kubernetes</strong> and versions in step with it.",
    tags: ["containerd","CRI-O"]
  },
  {
    id: "cncf-kcna-fc-179",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does a .dockerignore file do?",
    hint: "It filters before anything is sent.",
    back: "It excludes matching paths from the <strong>build context</strong> sent to the builder. Benefits: faster builds (less uploaded), better cache hits, and secrets such as <code>.env</code> or <code>.git</code> never reach a <code>COPY . .</code>. Builders ignore <code>.gitignore</code>.",
    tags: [".dockerignore"]
  },
  {
    id: "cncf-kcna-fc-180",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What is Harbor?",
    hint: "CNCF graduated, stores images.",
    back: "Harbor is a <strong>CNCF graduated OCI registry</strong> you host yourself. It adds <strong>project-level RBAC</strong>, <strong>vulnerability scanning</strong> (Trivy), <strong>replication</strong> between registries, <strong>proxy cache</strong> for upstream registries, quotas and signature verification on top of basic image storage.",
    tags: ["Harbor","Registries"]
  },
  {
    id: "cncf-kcna-fc-181",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What makes Podman different from Docker Engine?",
    hint: "Think about the background process.",
    back: "Podman is <strong>daemonless</strong>: containers run as child processes of the user who starts them, and it supports <strong>rootless</strong> operation natively. Its CLI is Docker-compatible, and it can generate Kubernetes YAML from pods it runs. Docker Engine relies on a long-running <code>dockerd</code> daemon.",
    tags: ["Podman"]
  },
  {
    id: "cncf-kcna-fc-182",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Why pin the base image in a FROM line?",
    hint: "latest moves.",
    back: "<code>FROM python:latest</code> changes whenever the publisher releases, so the same commit can build different images. Pin a <strong>specific version tag</strong> (<code>python:3.12.4-slim</code>) or a <strong>digest</strong>, and upgrade deliberately, ideally via automated update PRs that run your tests.",
    tags: ["Base images","Reproducibility"]
  },
  {
    id: "cncf-kcna-fc-183",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What makes a good tag for a release image?",
    hint: "Unique and never reused.",
    back: "Use <strong>immutable, unique tags</strong>: semantic versions (<code>2.4.1</code>) and/or the <strong>Git commit SHA</strong>. They show exactly what runs and keep old builds addressable for rollback. Avoid deploying <code>latest</code> or other moving tags to production.",
    tags: ["Tags"]
  },
  {
    id: "cncf-kcna-fc-184",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "ErrImagePull vs ImagePullBackOff",
    hint: "An attempt versus the wait.",
    back: "<strong>ErrImagePull</strong>: a pull attempt just failed (wrong name/tag, auth failure, network). <strong>ImagePullBackOff</strong>: the kubelet is waiting before retrying, with exponential back-off capped at five minutes. It never stops retrying; fix the reference or credentials and the next retry succeeds.",
    tags: ["ImagePullBackOff"]
  },
  {
    id: "cncf-kcna-fc-185",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does \"exec format error\" in a container log usually mean?",
    hint: "CPU architecture.",
    back: "The binary was compiled for a <strong>different CPU architecture</strong> than the node (e.g. amd64 image on an arm64 node). Fix with a <strong>multi-platform image</strong> or constrain pods with a nodeSelector on <code>kubernetes.io/arch</code>.",
    tags: ["Multi-architecture"]
  },
  {
    id: "cncf-kcna-fc-186",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "High-level vs low-level container runtime",
    hint: "containerd vs runc.",
    back: "<strong>High-level</strong> runtimes (containerd, CRI-O) serve the CRI, pull and store images, manage snapshots and supervise containers. <strong>Low-level</strong> OCI runtimes (runc, crun, or sandboxed ones like gVisor's runsc and Kata) take an unpacked bundle and create the process with namespaces and cgroups.",
    tags: ["containerd","runc"]
  },
  {
    id: "cncf-kcna-fc-187",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Removal of dockershim in Kubernetes 1.24: what broke and what did not?",
    hint: "Images versus the daemon.",
    back: "<strong>Did not break</strong>: images built with Docker; they are OCI images and run on containerd or CRI-O. <strong>Broke</strong>: anything depending on the node's <strong>Docker daemon</strong>, such as pods mounting <code>/var/run/docker.sock</code> or tools reading Docker's container list. Docker Engine as a node runtime now needs the external <strong>cri-dockerd</strong> adapter.",
    tags: ["dockershim"]
  },
  {
    id: "cncf-kcna-fc-188",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How do you use a secret during an image build without leaking it?",
    hint: "Mount, do not ARG.",
    back: "Use a <strong>BuildKit secret mount</strong>: <code>RUN --mount=type=secret,id=npm ...</code> with <code>--secret id=npm,...</code> at build time. The secret exists only during that RUN. <code>ARG</code> values used in RUN appear in the image history, and <code>ENV</code> persists into the image and containers.",
    tags: ["Build secrets","BuildKit"]
  },
  {
    id: "cncf-kcna-fc-189",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What do Cloud Native Buildpacks do that a Dockerfile does not?",
    hint: "Detect, build, rebase.",
    back: "Buildpacks (CNCF incubating) <strong>detect</strong> the language and build an OCI image from source with no Dockerfile, producing consistent, well-structured layers. <strong>Rebase</strong> swaps a patched OS run image beneath the app layers without rebuilding. Common CLIs: <code>pack build</code>, and Paketo builders.",
    tags: ["Buildpacks"]
  },
  {
    id: "cncf-kcna-fc-190",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How can CI pods build images without privileged mode or the host's runtime socket?",
    hint: "No daemon, no root.",
    back: "Use a <strong>daemonless, rootless builder</strong> such as <strong>BuildKit rootless</strong> or <strong>Buildah</strong>, or a hosted build service. Docker-in-Docker needs <code>privileged: true</code>, and mounting the node's docker or containerd socket gives root-equivalent access to the node.",
    tags: ["Image builds","CI"]
  },
  {
    id: "cncf-kcna-fc-191",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What is a pull-through cache registry and why use one?",
    hint: "Fetch once, serve many.",
    back: "A registry that <strong>proxies an upstream</strong> (e.g. Docker Hub): the first pull fetches and stores the image, later pulls are served locally. It avoids upstream <strong>rate limits</strong>, speeds up scale-outs and survives upstream outages. Examples: Harbor proxy cache projects, cloud registry pull-through rules, runtime mirror configuration.",
    tags: ["Registries"]
  },
  {
    id: "cncf-kcna-fc-192",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "When does the kubelet delete container images from a node?",
    hint: "Two percentages.",
    back: "Image <strong>garbage collection</strong> starts when image disk usage exceeds <code>imageGCHighThresholdPercent</code> (default 85) and deletes <strong>unused</strong> images, least recently used first, until usage drops below <code>imageGCLowThresholdPercent</code> (default 80). Images in use by running containers are never removed.",
    tags: ["Image garbage collection"]
  },
  {
    id: "cncf-kcna-fc-193",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Why combine apt-get update and apt-get install in one RUN?",
    hint: "Cache invalidation.",
    back: "If <code>update</code> sits in its own layer, the cache keeps reusing an old index while later install lines change, leading to missing or outdated packages. <code>RUN apt-get update && apt-get install -y ... && rm -rf /var/lib/apt/lists/*</code> refreshes the index whenever the list changes and keeps the layer small.",
    tags: ["Dockerfile","Build cache"]
  },
  {
    id: "cncf-kcna-fc-194",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "COPY vs ADD in a Dockerfile",
    hint: "One does extra things implicitly.",
    back: "<strong>COPY</strong> copies files from the build context, nothing more. <strong>ADD</strong> also <strong>auto-extracts local tar archives</strong> and can <strong>fetch remote URLs</strong> (and Git repositories). Prefer COPY for clarity; use ADD only when you want its extraction or remote-fetch behaviour.",
    tags: ["Dockerfile"]
  },
  {
    id: "cncf-kcna-fc-195",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Can a Windows container image run on a Linux node?",
    hint: "Containers share the host kernel.",
    back: "<strong>No.</strong> A container uses the host kernel, so Windows images need <strong>Windows nodes</strong> (with a compatible Windows Server version) and Linux images need Linux nodes. In mixed clusters, pin pods with <code>nodeSelector: kubernetes.io/os: windows</code> (or <code>linux</code>) and often taint Windows nodes so Linux-only workloads stay off.",
    tags: ["Windows containers"]
  },
  {
    id: "cncf-kcna-fc-196",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How does the kubelet know which container runtime to talk to?",
    hint: "One socket.",
    back: "Through its <strong>CRI endpoint</strong>: <code>containerRuntimeEndpoint</code> in the kubelet config (or <code>--container-runtime-endpoint</code>), e.g. <code>unix:///run/containerd/containerd.sock</code> or <code>unix:///var/run/crio/crio.sock</code>. A RuntimeClass then picks a <em>handler</em> configured inside that runtime.",
    tags: ["kubelet","CRI"]
  },
  {
    id: "cncf-kcna-fc-197",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What is an image index (manifest list)?",
    hint: "One tag, many platforms.",
    back: "An OCI <strong>image index</strong> maps platforms (<code>linux/amd64</code>, <code>linux/arm64</code>, ...) to per-platform image manifests under one tag. The runtime pulls the manifest matching the node's OS/architecture. Build one with <code>docker buildx build --platform linux/amd64,linux/arm64 --push</code>.",
    tags: ["Image index","Multi-architecture"]
  },
  {
    id: "cncf-kcna-fc-198",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Alpine vs Debian-slim vs distroless base images: key trade-offs?",
    hint: "libc and shells.",
    back: "<strong>Alpine</strong>: very small, uses <strong>musl</strong> libc, so glibc-linked binaries and some wheels break. <strong>Debian/Ubuntu slim</strong>: glibc, package manager, larger. <strong>Distroless</strong>: glibc runtime only, <strong>no shell or package manager</strong>, smallest attack surface; debug with ephemeral containers. <strong>scratch</strong>: empty, for static binaries.",
    tags: ["Base images","Alpine"]
  },
  {
    id: "cncf-kcna-fc-199",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Ways to cut image pull time for very large images",
    hint: "Get it there early, or pull less.",
    back: "<strong>Pre-pull</strong> via a DaemonSet or bake the image into the <strong>node machine image</strong>; <strong>shrink</strong> it (multi-stage, smaller base, move models to volumes); keep a <strong>registry close</strong> to nodes (regional mirror); use <strong>lazy-pulling snapshotters</strong> (e.g. stargz) or provider image streaming where available.",
    tags: ["Container images","Startup time"]
  },
  {
    id: "cncf-kcna-fc-200",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Does deleting a file in a later Dockerfile instruction remove it from the image?",
    hint: "Layers only add.",
    back: "<strong>No.</strong> The later layer records a <strong>whiteout</strong> that hides the file in the merged view, but the earlier layer still contains it and can be extracted by anyone who pulls the image. Keep secrets out of layers entirely (secret mounts, multi-stage builds) and rotate anything that was ever committed.",
    tags: ["Layers","Image security"]
  }
];

export default CNCF_KCNA_FLASHCARDS_8;
