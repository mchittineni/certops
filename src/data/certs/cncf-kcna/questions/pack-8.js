export const CNCF_KCNA_QUESTIONS_8 = [
  {
    id: "cncf-kcna-176",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Image versus running container",
    scenario: "A support engineer new to containers says that the web team has deployed 12 images, because kubectl get pods shows 12 running web pods. All 12 pods were created by one Deployment whose template references a single image, shop-web:3.1.",
    question: "Which statement corrects the misunderstanding?",
    options: [
      { id: 'A', text: "There is one image, a read-only template, and 12 containers started from it, each with its own writable layer." },
      { id: 'B', text: "There are 12 images and 12 containers, because each pod rebuilds the image from its Dockerfile before starting." },
      { id: 'C', text: "There is one container shared by 12 pods, because pods using the same image share one running process tree." },
      { id: 'D', text: "There are 12 images, because the runtime copies the template into a new image each time a container starts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An image is an immutable, read-only package of filesystem layers and metadata; a container is a running instance created from it, with a thin writable layer on top, so one image can back any number of containers. The runtime does not duplicate the image per container; the read-only layers are shared on each node. Each pod runs its own containers with separate processes, not a shared one. Nothing rebuilds images at pod start; images are built once, pushed to a registry and pulled.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/",
    tags: ["Container images","Containers"]
  },
  {
    id: "cncf-kcna-177",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "An edited config file that others never see",
    scenario: "An engineer uses kubectl exec to edit /etc/nginx/nginx.conf inside one of four nginx pods created from the same image. The change works in that pod, but the other three pods still use the original file, and after the edited container restarts, its change is gone too.",
    question: "Which explanation is correct?",
    options: [
      { id: 'A', text: "Each container writes to its own thin writable layer above the shared read-only image layers." },
      { id: 'B', text: "The four pods share one filesystem, but nginx caches its config per pod until it is restarted." },
      { id: 'C', text: "The edit was written to the node's copy of the image, which only the edited pod had mounted." },
      { id: 'D', text: "The kubelet reverts file edits every sync period because images are checked against their digest." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Container filesystems use copy-on-write: the image layers are read-only and shared, and each container gets its own writable layer, so a change made in one container is invisible to the others and is discarded when that container is recreated from the image. The kubelet does not scan or revert files inside containers. Image layers on the node are never modified by container writes; that is the point of the writable layer. Pods do not share a root filesystem, so there is no shared file for nginx to cache. Configuration belongs in a ConfigMap or a rebuilt image.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/",
    tags: ["Copy-on-write","Containers","Layers"]
  },
  {
    id: "cncf-kcna-178",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A runtime built only for Kubernetes",
    scenario: "A telecom operator wants the smallest possible container runtime on its edge nodes. It does not need a general-purpose developer CLI or image builder on the nodes, only a runtime that implements the Kubernetes Container Runtime Interface and follows OCI standards.",
    question: "Which runtime was designed specifically for this purpose?",
    options: [
      { id: 'A', text: "Podman, which runs as a node daemon that the kubelet connects to through its REST-compatible API." },
      { id: 'B', text: "runc, a runtime the kubelet calls directly over gRPC to pull images and start containers." },
      { id: 'C', text: "Docker Engine, which bundles a build system, CLI and daemon and is called natively by the Kubernetes kubelet." },
      { id: 'D', text: "CRI-O, a lightweight runtime created specifically to implement the Kubernetes CRI using OCI tools." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CRI-O was built from the start to implement the Container Runtime Interface for Kubernetes, pulling OCI images and running them through an OCI runtime such as runc or crun, with nothing extra for developers. Docker Engine includes a build system and CLI, and since Kubernetes 1.24 the kubelet no longer talks to it natively; it needs the external cri-dockerd adapter. runc is a low-level OCI runtime with no gRPC CRI interface and no image handling. Podman is daemonless and is not a CRI runtime the kubelet connects to.",
    referenceUrl: "https://cri-o.io/",
    tags: ["CRI-O","Container runtime","CRI"]
  },
  {
    id: "cncf-kcna-179",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Keeping secrets out of the build context",
    scenario: "A startup builds its image with COPY . . from the repository root. A security review finds that the resulting image contains the .git directory and a .env file with a database password, and that each build uploads 900 MB of local files to the builder.",
    question: "What is the simplest fix?",
    options: [
      { id: 'A', text: "Add a .dockerignore file listing .git, .env and other unneeded paths so they never enter the context." },
      { id: 'B', text: "Add a .gitignore entry for .env so the builder skips any file that Git has been told to leave untracked." },
      { id: 'C', text: "Add a final RUN rm -rf .git .env instruction so the files are removed from the image after they are copied." },
      { id: 'D', text: "Add the --squash flag to the build so that the copied .git and .env files are merged away from the layers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The .dockerignore file excludes matching paths from the build context before it is sent to the builder, so the .git history and .env secrets are never available to COPY, and the upload shrinks. Builders do not read .gitignore, so the file is still sent and copied. Deleting files in a later RUN leaves them in the earlier COPY layer, where anyone who pulls the image can extract them. Squashing merges layers after the fact, but the files are still uploaded to the builder and copied, so it does not replace excluding them from the context.",
    referenceUrl: "https://docs.docker.com/build/concepts/context/#dockerignore-files",
    tags: [".dockerignore","Build context","Dockerfile"]
  },
  {
    id: "cncf-kcna-180",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A self-hosted registry with scanning built in",
    scenario: "A government agency cannot use public registries and needs to host its own OCI registry on premises. It wants role-based access per project, replication to a disaster recovery site and built-in vulnerability scanning, preferably from a CNCF graduated project.",
    question: "Which project fits these requirements?",
    options: [
      { id: 'A', text: "Harbor, a CNCF graduated registry offering project RBAC, replication and integrated scanning." },
      { id: 'B', text: "Helm, a CNCF graduated project that stores images alongside charts, with replication and scanning." },
      { id: 'C', text: "Falco, a CNCF graduated project that hosts images and blocks those with known vulnerabilities." },
      { id: 'D', text: "etcd, a CNCF graduated key-value store that clusters can use as a private image registry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Harbor is a CNCF graduated, open source registry that stores and distributes OCI images and artefacts, with per-project role-based access control, replication between registries and integrated vulnerability scanning (Trivy by default). Helm packages Kubernetes applications as charts; it does not host container images. Falco detects suspicious runtime behaviour from system calls and does not host or scan images. etcd stores cluster state for the Kubernetes control plane and is not an image registry.",
    referenceUrl: "https://goharbor.io/docs/",
    tags: ["Harbor","Registries","CNCF"]
  },
  {
    id: "cncf-kcna-181",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Running containers without a daemon",
    scenario: "A university lab wants students to build and run containers on shared Linux workstations. The administrators refuse to run a long-lived root daemon on the machines, but students are used to Docker commands such as run, build and ps.",
    question: "Which tool meets both constraints?",
    options: [
      { id: 'A', text: "Podman, which provides a Docker-compatible CLI and runs containers without a central root daemon." },
      { id: 'B', text: "Docker Engine configured with a TCP socket so that each student can connect to one central root daemon." },
      { id: 'C', text: "minikube, which runs every student's containers inside a shared VM using the Docker CLI commands." },
      { id: 'D', text: "containerd with its ctr CLI, which offers the same commands and flags as the Docker command line." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Podman is daemonless: each container is a child process of the invoking user, rootless operation is a core feature, and its CLI mirrors Docker's commands so students can keep using run, build and ps. A shared Docker daemon over TCP is still a long-lived root daemon, and an exposed socket is a serious security risk. containerd itself runs as a daemon, and ctr is a low-level debugging client whose commands differ from Docker's. minikube runs a local Kubernetes cluster, which is heavier than needed and still relies on a daemon or VM.",
    referenceUrl: "https://docs.podman.io/en/latest/",
    tags: ["Podman","Container tooling"]
  },
  {
    id: "cncf-kcna-182",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Builds that change without code changes",
    scenario: "A logistics team's Dockerfile starts with FROM python:latest. Two builds of the same commit, a month apart, behave differently in production because the second one picked up a new major Python version. The team wants builds from the same commit to be predictable.",
    question: "What should the team change?",
    options: [
      { id: 'A', text: "Keep python:latest but build with --no-cache so the builder always starts from a clean Python environment." },
      { id: 'B', text: "Pin the base image to a specific version such as python:3.12.4-slim and upgrade it deliberately." },
      { id: 'C', text: "Keep python:latest but add imagePullPolicy IfNotPresent so nodes keep the image they already downloaded." },
      { id: 'D', text: "Keep python:latest but add a RUN pip install --upgrade pip step so dependency versions stay consistent." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "latest is a moving tag that the publisher repoints with every release, so an unpinned FROM line makes the base image change silently between builds; pinning a precise version tag, or a digest, fixes the input and turns upgrades into deliberate, reviewable changes. imagePullPolicy affects how nodes pull the built application image, not which base image the build uses. Upgrading pip makes the environment drift even more. --no-cache forces a fresh pull of latest, which guarantees the drift rather than preventing it.",
    referenceUrl: "https://docs.docker.com/build/building/best-practices/#pin-base-image-versions",
    tags: ["Dockerfile","Base images","Reproducibility"]
  },
  {
    id: "cncf-kcna-183",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Choosing tags for release images",
    scenario: "A payments team pushes every build as payments-api:latest and deploys that tag. During an incident nobody can tell which commit is running, and rolling back is guesswork because the previous build's tag has been overwritten.",
    question: "Which tagging practice solves both problems?",
    options: [
      { id: 'A', text: "Keep pushing latest and rely on the registry's garbage collector to retain the old builds." },
      { id: 'B', text: "Push each build as latest and stable, and deploy stable only after the team tests the build." },
      { id: 'C', text: "Keep pushing latest but add a label to the Deployment recording the commit of every new build." },
      { id: 'D', text: "Push each build under a unique, never-reused tag such as a version number or Git commit SHA." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Unique, immutable tags such as semantic versions or commit SHAs identify exactly what is running and keep every earlier build addressable, so a rollback simply redeploys the previous tag. A commit label on the Deployment is manual metadata that nothing ties to the image content, and the old image behind latest is still overwritten. latest and stable are both mutable, so the same traceability and rollback problems remain. Registry garbage collection removes untagged content; it does not preserve builds whose tag has been moved.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/overview/#container-images",
    tags: ["Tags","Container images","Rollback"]
  },
  {
    id: "cncf-kcna-184",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Moving a Compose stack onto Kubernetes",
    scenario: "A small agency runs its web app, worker and Redis with a docker-compose.yml file on a single VM. It is moving to a managed Kubernetes cluster and wants a quick starting point for Kubernetes manifests without rewriting everything by hand.",
    question: "Which tool is designed to help with this?",
    options: [
      { id: 'A', text: "kubectl apply, which accepts docker-compose.yml directly and creates the matching Kubernetes objects." },
      { id: 'B', text: "kubeadm, which imports a Docker Compose file when it initialises the cluster's first control plane." },
      { id: 'C', text: "Kompose, which converts a Docker Compose file into Kubernetes Deployments and Services to refine." },
      { id: 'D', text: "Kustomize, which reads the Compose services and generates overlays for each environment it detects." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kompose, a Kubernetes project, translates Compose services into Kubernetes resources such as Deployments, Services and PersistentVolumeClaims, giving teams a starting point that they then refine, for example adding probes and resource requests. kubeadm bootstraps clusters and knows nothing about Compose files. kubectl apply only understands Kubernetes API objects, so a Compose file is rejected. Kustomize customises existing Kubernetes manifests and cannot read Compose files.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/translate-compose-kubernetes/",
    tags: ["Kompose","Docker Compose","Migration"]
  },
  {
    id: "cncf-kcna-185",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "exec format error on new ARM nodes",
    scenario: "A company adds cost-efficient arm64 nodes to its cluster. Pods of an internal service scheduled there crash immediately, and kubectl logs shows exec /app/server: exec format error. The same image runs fine on the existing amd64 nodes.",
    question: "What is the most likely cause?",
    options: [
      { id: 'A', text: "The arm64 nodes use a CRI runtime that cannot read the image's layers in the OCI format." },
      { id: 'B', text: "The kubelet on the arm64 nodes is a newer version that rejects images built on amd64 builders." },
      { id: 'C', text: "The container lacks execute permission on /app/server because arm64 nodes mount images read-only." },
      { id: 'D', text: "The image was built only for linux/amd64, so its binary cannot run on the arm64 node's CPU." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "exec format error is the kernel refusing to execute a binary compiled for a different CPU architecture; an image built only for linux/amd64 pulls successfully onto an arm64 node when no platform match is enforced but cannot run there. The fix is a multi-architecture image or a nodeSelector on kubernetes.io/arch. OCI-compliant runtimes read layers regardless of CPU architecture. Image layers being read-only does not strip execute permission, and it works on amd64. The kubelet does not reject images by builder version.",
    referenceUrl: "https://kubernetes.io/docs/reference/labels-annotations-taints/#kubernetes-io-arch",
    tags: ["Multi-architecture","Container images","Troubleshooting"]
  },
  {
    id: "cncf-kcna-186",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Who actually creates the container process",
    scenario: "A platform engineer is tracing what happens after the kubelet asks containerd, over the CRI, to start a container. She sees a runc process briefly appear on the node and wants to explain the division of labour between containerd and runc to her team.",
    question: "Which description is accurate?",
    options: [
      { id: 'A', text: "runc schedules containers across nodes, and containerd reports their status back to the API server itself." },
      { id: 'B', text: "containerd manages images and container lifecycle; runc creates the process using namespaces and cgroups." },
      { id: 'C', text: "runc pulls and unpacks images and serves the CRI; containerd sets up namespaces and cgroups for the process." },
      { id: 'D', text: "containerd and runc are two names for the same binary, with runc used only when running Linux containers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "containerd is a high-level runtime: it serves the CRI, pulls and stores images, prepares snapshots and supervises containers through shims. For the actual start it calls a low-level OCI runtime, usually runc, which uses the OCI runtime spec to create the Linux namespaces and cgroups and exec the process, then exits. The reversed description swaps their roles. They are separate projects and binaries. Neither schedules across nodes, which is the kube-scheduler's job, and the kubelet, not containerd, reports pod status to the API server.",
    referenceUrl: "https://github.com/opencontainers/runc",
    tags: ["containerd","runc","Container runtime"]
  },
  {
    id: "cncf-kcna-187",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "CI pods lose their Docker socket",
    scenario: "After a cluster upgrade moved nodes from Docker Engine to containerd, application pods keep running normally, but the CI runner pods that mounted /var/run/docker.sock from the host to run docker build now fail at startup. The team is confused because their Docker-built application images still work.",
    question: "What explains this?",
    options: [
      { id: 'A', text: "The upgrade deleted all images built by Docker, so only CI pods that rebuild them are left failing." },
      { id: 'B', text: "containerd cannot run Docker-built images, so CI pods fail while older pods keep cached copies." },
      { id: 'C', text: "Nodes no longer run the Docker daemon, so the socket is gone, while Docker-built OCI images still run." },
      { id: 'D', text: "The upgrade blocked hostPath volumes cluster-wide, which is why every pod mounting the socket fails." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Images built with Docker are standard OCI images, so containerd runs them unchanged; what disappeared is the Docker Engine daemon on the nodes, and with it /var/run/docker.sock, so anything that depended on the node's Docker daemon breaks. The usual fix is a daemonless builder or a dedicated build service. Upgrades do not delete images from registries. Docker-built images are not incompatible with containerd. Nothing in the migration blocks hostPath volumes in general; the socket file simply no longer exists.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/migrating-from-dockershim/check-if-dockershim-removal-affects-you/",
    tags: ["dockershim","containerd","CI"]
  },
  {
    id: "cncf-kcna-188",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A token visible in docker history",
    scenario: "A team passes a private package-registry token to its build with ARG NPM_TOKEN and uses it in a RUN npm ci step. A penetration tester later recovers the token from the published image's history without running it. The team needs the token available during the install without it ending up in the image.",
    question: "Which approach should the team use?",
    options: [
      { id: 'A', text: "Base64-encode the token before passing it as an ARG so the value no longer appears in plain text." },
      { id: 'B', text: "Unset the ARG in a later step so the value is removed from the image history after the install." },
      { id: 'C', text: "Pass the token with ENV instead of ARG so the builder removes it from the final image metadata." },
      { id: 'D', text: "Mount the token with a BuildKit secret mount on the RUN step, so it is never written to a layer." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "BuildKit secret mounts expose a secret as a temporary file, or environment variable, only for the duration of one RUN instruction; it is never stored in a layer, the image config or the build history. ARG values used by RUN steps are recorded in the image history, which is how the token leaked. ENV is worse, because it persists into the image configuration and into every running container. There is no way to unset an ARG retroactively; earlier history is already written. Base64 is an encoding, not encryption, and is trivially reversed.",
    referenceUrl: "https://docs.docker.com/build/building/secrets/",
    tags: ["Build secrets","BuildKit","Dockerfile"]
  },
  {
    id: "cncf-kcna-189",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Images from source without a Dockerfile",
    scenario: "A company has 300 Java and Node.js services, each with a hand-written Dockerfile of varying quality. The platform team wants developers to stop maintaining Dockerfiles, to produce OCI images directly from source with consistent base layers, and to patch the OS layer of every image without rebuilding the applications.",
    question: "Which CNCF project is designed for this?",
    options: [
      { id: 'A', text: "Kustomize, whose image transformer rebuilds OS layers when the base image referenced in overlays changes." },
      { id: 'B', text: "Argo Workflows, which converts source repositories into OCI images using its built-in language detection." },
      { id: 'C', text: "Cloud Native Buildpacks, which detect the language, build OCI images from source and rebase OS layers." },
      { id: 'D', text: "Helm, whose chart templates generate a Dockerfile for each language and build the images during install." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Native Buildpacks, a CNCF incubating project, inspect source code, apply language-specific buildpacks and output an OCI image without a Dockerfile; because layers are well defined, the rebase operation swaps in a patched run image under the application layers without rebuilding them. Helm templates Kubernetes manifests and never builds images. Argo Workflows orchestrates arbitrary container steps and has no language detection of its own. Kustomize's image transformer rewrites image names and tags in manifests; it does not build or rebase images.",
    referenceUrl: "https://buildpacks.io/docs/",
    tags: ["Buildpacks","Container images","CNCF"]
  },
  {
    id: "cncf-kcna-190",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Building images inside the cluster safely",
    scenario: "A multi-tenant platform runs CI jobs as Kubernetes pods. Security policy enforces the restricted Pod Security Standard, so pods cannot be privileged or mount host sockets, yet teams still need their pipelines to build and push container images from Dockerfiles.",
    question: "Which approach fits within these constraints?",
    options: [
      { id: 'A', text: "Run Docker-in-Docker as a sidecar in each CI pod to build and push through a shared emptyDir socket." },
      { id: 'B', text: "Use a daemonless builder such as BuildKit in rootless mode or Buildah to build and push unprivileged." },
      { id: 'C', text: "Mount the node's containerd socket into the CI pods so builds reuse the runtime that runs on each node." },
      { id: 'D', text: "Run the build in an init container with hostNetwork enabled so that it can reach the registry directly." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Daemonless, rootless builders such as BuildKit in rootless mode and Buildah build images from Dockerfiles in user space and push them to a registry, so CI pods can run without privileged mode or host sockets, subject to the platform's settings for user namespaces and seccomp. Docker-in-Docker requires a privileged container, which the restricted standard forbids. Mounting the node's containerd socket is a host-path escape route with root-equivalent access to the node and is also forbidden. hostNetwork only changes networking and does nothing to enable image building.",
    referenceUrl: "https://github.com/moby/buildkit/blob/master/docs/rootless.md",
    tags: ["Image builds","BuildKit","CI"]
  },
  {
    id: "cncf-kcna-191",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Pulls throttled during a scale-out",
    scenario: "During a large scale-out, dozens of new nodes pull public base images from Docker Hub anonymously, and many pods fail with a toomanyrequests error from the registry. The team wants scale-outs to stop depending on Docker Hub's pull limits while still using the same public images.",
    question: "Which change addresses this most effectively?",
    options: [
      { id: 'A', text: "Increase the kubelet's image pull back-off limit so that pods wait longer before the retries resume." },
      { id: 'B', text: "Switch the nodes from containerd to CRI-O, which sends fewer requests to Docker Hub for each image." },
      { id: 'C', text: "Set imagePullPolicy Always on every workload so that failed pulls are retried more aggressively." },
      { id: 'D', text: "Run a pull-through cache registry, such as Harbor's proxy cache, and point nodes at it as a mirror." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A pull-through cache fetches each image from Docker Hub once and serves every later node request locally; configuring it as a registry mirror in the runtime, or rewriting image references to it, removes the dependency on Docker Hub's per-client rate limits. Authenticating pulls also raises the limit. imagePullPolicy Always makes nodes contact the registry more often, worsening throttling. CRI-O makes the same registry requests as containerd for the same images. Longer back-off only delays the failures and slows the scale-out further.",
    referenceUrl: "https://goharbor.io/docs/main/administration/configure-proxy-cache/",
    tags: ["Registries","Pull-through cache","Rate limits"]
  },
  {
    id: "cncf-kcna-192",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Old images piling up on nodes",
    scenario: "A CI-heavy cluster deploys dozens of new image versions a day. An operator sees node disks steadily fill with image layers until, at around 85% usage, old unused images suddenly start disappearing without anyone deleting them.",
    question: "What is removing the images?",
    options: [
      { id: 'A', text: "The kube-scheduler, which evicts the images as part of freeing disk for pods it is about to place." },
      { id: 'B', text: "The kube-controller-manager, which deletes images belonging to ReplicaSets whose pods scaled to zero." },
      { id: 'C', text: "The kubelet's image garbage collection, which removes unused images once disk passes a threshold." },
      { id: 'D', text: "The container registry, which asks each node to delete unused tags it has garbage collected upstream." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The kubelet runs image garbage collection: when image filesystem usage exceeds imageGCHighThresholdPercent (85 by default) it deletes images not used by any container, oldest first, until usage falls below imageGCLowThresholdPercent (80 by default). Registries never reach into nodes to delete content. The controller manager works on API objects, not node-local images. The scheduler places pods and never touches node storage.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/garbage-collection/#containers-images",
    tags: ["Image garbage collection","kubelet"]
  },
  {
    id: "cncf-kcna-193",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Package install using a stale index",
    scenario: "A Dockerfile has RUN apt-get update on one line and RUN apt-get install -y curl openssl on the next. Months later a developer adds a new package to the install line, the build reuses the cached update layer, and the install fails because the package index is out of date.",
    question: "How should the instructions be written?",
    options: [
      { id: 'A', text: "Combine update and install in one RUN instruction with && so both always run and cache together." },
      { id: 'B', text: "Keep them separate but put apt-get update after the install line so the index refreshes last." },
      { id: 'C', text: "Replace apt-get update with ADD of a Debian package list so that the index is always current." },
      { id: 'D', text: "Keep them separate and add --no-cache to every build so the update layer is never reused at all." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Putting apt-get update and apt-get install in the same RUN instruction means any change to the package list invalidates that single layer, so the index is refreshed every time the install changes; cleaning /var/lib/apt/lists in the same step also keeps the layer small. Running update after install is pointless, because the install has already used the stale index. --no-cache works but throws away caching for every step on every build. Adding a static package list does not refresh anything and would itself go stale.",
    referenceUrl: "https://docs.docker.com/build/building/best-practices/#apt-get",
    tags: ["Dockerfile","Build cache"]
  },
  {
    id: "cncf-kcna-194",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Unexpected files unpacked into an image",
    scenario: "A reviewer notices that a Dockerfile uses ADD vendor.tar.gz /opt/vendor/ and ADD https://example.com/tool /usr/local/bin/tool, while the team guideline asks for the most predictable copy behaviour. The resulting image contains the tarball's contents expanded rather than the archive file itself.",
    question: "What is the recommended change?",
    options: [
      { id: 'A', text: "Use COPY for both lines, because COPY also downloads remote URLs but does not extract tar archives." },
      { id: 'B', text: "Use COPY for local files, and fetch remote files in an explicit RUN step, since ADD adds tar and URL magic." },
      { id: 'C', text: "Use ADD for everything, because COPY cannot place files outside the working directory set by WORKDIR." },
      { id: 'D', text: "Use VOLUME for local archives, so that they are mounted at run time instead of being baked into layers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "ADD auto-extracts local tar archives and can fetch remote URLs, which makes its behaviour less obvious; best practice is COPY for plain local files and an explicit download step, or ADD only where extraction is intended, so reviewers can see what happens. COPY can write to any absolute path, not just the working directory. VOLUME declares a mount point for runtime data and does not add build-time files to the image. COPY does not download URLs, so the second line would fail.",
    referenceUrl: "https://docs.docker.com/build/building/best-practices/#add-or-copy",
    tags: ["Dockerfile","COPY","ADD"]
  },
  {
    id: "cncf-kcna-195",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A .NET Framework image in a mixed cluster",
    scenario: "A manufacturer's cluster has Linux worker nodes and a new pool of Windows Server nodes. A legacy .NET Framework service packaged as a Windows container image keeps failing to start when its pods land on Linux nodes, with an error that no matching manifest exists for linux/amd64.",
    question: "What should the team change so the service runs reliably?",
    options: [
      { id: 'A', text: "Rebuild the image from a multi-stage Dockerfile so that the final stage can run on either kernel type." },
      { id: 'B', text: "Add a nodeSelector on kubernetes.io/os: windows so the pods are only scheduled onto the Windows nodes." },
      { id: 'C', text: "Set imagePullPolicy Always so that the Linux nodes fetch the Windows image variant from the registry." },
      { id: 'D', text: "Add a RuntimeClass using gVisor so the Linux nodes can emulate the Windows kernel inside a sandbox." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Containers share the host kernel, so a Windows container image can only run on a Windows node; constraining the pods with the well-known kubernetes.io/os=windows label (often together with a taint on Windows nodes to keep Linux pods off) makes the scheduler place them correctly. A multi-stage build changes how the image is assembled, not which kernel its binaries need. gVisor implements a Linux kernel interface in user space and cannot run Windows binaries. imagePullPolicy decides when to pull, not which platform exists in the registry; there is no Linux variant to fetch.",
    referenceUrl: "https://kubernetes.io/docs/concepts/windows/user-guide/",
    tags: ["Windows containers","nodeSelector"]
  },
  {
    id: "cncf-kcna-196",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Telling the kubelet which runtime to use",
    scenario: "An administrator installs CRI-O instead of containerd on a new node built by hand. The kubelet starts but logs errors about being unable to connect to the container runtime at unix:///run/containerd/containerd.sock.",
    question: "What should the administrator change?",
    options: [
      { id: 'A', text: "Set the kubelet's container runtime endpoint to CRI-O's socket, such as unix:///var/run/crio/crio.sock." },
      { id: 'B', text: "Restart kube-proxy with the CRI-O socket path so that the node registers its new runtime with the API." },
      { id: 'C', text: "Add a RuntimeClass named crio so the kubelet discovers unix:///var/run/crio/crio.sock on the node." },
      { id: 'D', text: "Install cri-dockerd on the node so that the kubelet can reach CRI-O through the Docker-compatible shim." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The kubelet connects to exactly one CRI endpoint, set by containerRuntimeEndpoint in its configuration file or the --container-runtime-endpoint flag; pointing it at CRI-O's socket fixes the connection. A RuntimeClass selects a handler configured inside the runtime, and it cannot tell the kubelet where the runtime's socket is. cri-dockerd is an adapter for Docker Engine, not for CRI-O, which implements the CRI natively. kube-proxy handles Service networking and has no relationship with the container runtime.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/container-runtimes/",
    tags: ["kubelet","CRI-O","Container runtime"]
  },
  {
    id: "cncf-kcna-197",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "One tag for amd64 and arm64 nodes",
    scenario: "After fixing its exec format error by pinning pods to amd64 nodes, the same team now wants a single image tag, api:2.0, that runs natively on both amd64 and arm64 nodes, without separate Deployments or per-architecture tags in the manifests.",
    question: "Which approach delivers this?",
    options: [
      { id: 'A', text: "Add a nodeSelector on kubernetes.io/arch to the single Deployment listing both amd64 and arm64 values." },
      { id: 'B', text: "Build and push a multi-platform image index, for example with docker buildx and a --platform list." },
      { id: 'C', text: "Build the image once for amd64 and rely on containerd to translate the instructions on each arm64 node." },
      { id: 'D', text: "Push two images under api:2.0 in sequence, so that each node keeps whichever architecture it pulled first." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A multi-platform build produces one manifest per architecture and an image index (manifest list) under a single tag; when a node pulls api:2.0, the runtime selects the manifest matching its own OS and CPU, so one reference works everywhere. Container runtimes do not translate CPU instructions; emulation such as QEMU is only used at build time. Pushing twice under the same tag overwrites the first push, leaving one architecture. A nodeSelector only chooses where pods run; allowing both architectures with a single-architecture image brings the exec format error back.",
    referenceUrl: "https://docs.docker.com/build/building/multi-platform/",
    tags: ["Multi-architecture","Image index","BuildKit"]
  },
  {
    id: "cncf-kcna-198",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Binary exists but will not run on Alpine",
    scenario: "To shrink an image, a team switches its base from debian:bookworm-slim to alpine:3.20 and copies in a prebuilt vendor binary downloaded for generic Linux x86-64. The container fails with /usr/local/bin/agent: not found, although ls shows the file is present and executable.",
    question: "What is the most likely cause?",
    options: [
      { id: 'A', text: "Alpine mounts /usr/local/bin with the noexec option, so the kernel reports executables there as missing." },
      { id: 'B', text: "Alpine uses BusyBox as PID 1, which only starts binaries that are listed in its own applet table." },
      { id: 'C', text: "Alpine images cannot run on x86-64 nodes, so the kernel refuses every binary copied into the image." },
      { id: 'D', text: "The binary was built against glibc, and Alpine uses musl, so its dynamic loader and libraries are absent." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Most prebuilt Linux binaries are dynamically linked against glibc and name glibc's loader as their interpreter; Alpine ships musl libc instead, so the loader file does not exist and the kernel's failure is reported as not found for a file that is plainly there. Fixes include a musl or static build, or keeping a glibc-based slim or distroless base. Alpine does not mount /usr/local/bin noexec. Alpine publishes x86-64 images, which is its most common platform. BusyBox provides shell utilities, and PID 1 is whatever the image's entrypoint names, with no applet restriction on executing other binaries.",
    referenceUrl: "https://wiki.alpinelinux.org/wiki/Running_glibc_programs",
    tags: ["Alpine","Base images","Troubleshooting"]
  },
  {
    id: "cncf-kcna-199",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Slow starts for an 8 GB model image",
    scenario: "A machine learning service uses an 8 GB inference image. When the cluster autoscaler adds a node, new pods on it take seven minutes to become ready, almost all of it spent pulling the image. The team wants pods on fresh nodes to start faster without changing the application.",
    question: "Which approach reduces this delay?",
    options: [
      { id: 'A', text: "Set imagePullPolicy Always on the Deployment so the kubelet begins pulling as soon as the node joins." },
      { id: 'B', text: "Raise the pod's initialDelaySeconds on its readiness probe so that the kubelet waits for the image pull." },
      { id: 'C', text: "Pre-pull the image onto every node, for example with a DaemonSet or by baking it into the node image." },
      { id: 'D', text: "Split the Deployment into more replicas with smaller requests so that each pod pulls less of the image." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Placing the image on nodes before workload pods need it, with a DaemonSet whose pod uses that image (so every new node pulls it on arrival) or by baking it into the node's machine image, moves the pull off the critical path; the application is unchanged. imagePullPolicy Always forces a registry check on every start and cannot begin before the pod is scheduled. Readiness probe delays only affect when traffic starts after the container runs, not the pull. Every replica pulls the full image regardless of its requests, so more replicas mean more pulls.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#pre-pulled-images",
    tags: ["Container images","Startup time","DaemonSet"]
  },
  {
    id: "cncf-kcna-200",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A deleted key still inside the image",
    scenario: "A Dockerfile copies an SSH private key in one instruction, uses it to clone a private repository in the next, and deletes it with RUN rm /root/.ssh/id_rsa in a third. The final container has no key file, and the team believes the image is safe to publish to a partner registry.",
    question: "Why is the image still unsafe?",
    options: [
      { id: 'A', text: "The key remains in the build cache of whoever runs the image, because pulls replay each Dockerfile step." },
      { id: 'B', text: "The key remains in the earlier layer, and a later deletion only hides it, so anyone pulling can extract it." },
      { id: 'C', text: "The key remains in the registry's audit log, because registries record every file that was pushed to them." },
      { id: 'D', text: "The key remains in the environment of every container started from the image, even after the file is gone." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Layers are immutable and additive; deleting a file in a later layer adds a whiteout entry that hides it from the merged filesystem, but the original layer containing the key is still part of the image, and anyone who pulls it can extract that layer. The key must be rotated and the build redone with a secret mount or a multi-stage build that never copies the key into a shipped layer. Copying a file does not place it in the container environment. Registries store blobs; they do not keep per-file audit logs. Pulling downloads layers and never replays Dockerfile steps.",
    referenceUrl: "https://github.com/opencontainers/image-spec/blob/main/layer.md#whiteouts",
    tags: ["Layers","Secrets","Image security"]
  }
];

export default CNCF_KCNA_QUESTIONS_8;
