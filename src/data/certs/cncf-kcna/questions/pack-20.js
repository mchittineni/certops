export const CNCF_KCNA_QUESTIONS_20 = [
  {
    id: "cncf-kcna-476",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "How mature is that CNCF project",
    scenario: "A bank's architecture board will only approve open source components that the CNCF considers stable, widely adopted and proven in production, with an independent security audit. A team proposes a promising project that joined the CNCF last year as an early-stage experiment.",
    question: "Which CNCF maturity level should the board require?",
    options: [
      { id: 'A', text: "Graduated, the level for projects proven at scale with audited processes" },
      { id: 'B', text: "Incubating, the level for projects with growing production use and committers" },
      { id: 'C', text: "Archived, the level for projects that have finished development and are frozen" },
      { id: 'D', text: "Sandbox, the level for early-stage projects not yet proven in production" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CNCF projects move from Sandbox to Incubating to Graduated. Graduation requires broad production adoption, a healthy committer base from multiple organisations, a completed independent security audit and mature governance, which matches the board's criteria. Sandbox is the entry point for experimental projects, such as the one proposed. Incubating projects are used in production but have not yet met every graduation requirement. Archived projects are no longer actively maintained, which is the opposite of what the board wants.",
    referenceUrl: "https://www.cncf.io/projects/",
    tags: ["CNCF", "Maturity levels", "Governance"]
  },
  {
    id: "cncf-kcna-477",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Serverless containers on our own cluster",
    scenario: "A company wants developers to deploy HTTP container images to its existing Kubernetes clusters with a single resource, get automatic scale-to-zero when idle and request-driven scale-up, and keep immutable revisions for traffic splitting between versions.",
    question: "Which project provides this on Kubernetes?",
    options: [
      { id: 'A', text: "Helm, whose chart hooks start a new container revision for each incoming HTTP request" },
      { id: 'B', text: "Kubernetes CronJobs, which start revisions of the container on a schedule and remove them" },
      { id: 'C', text: "Knative Serving, whose Service resource manages routes, revisions and request-based scaling" },
      { id: 'D', text: "The Vertical Pod Autoscaler, whose resource recommendations resize pods to zero when idle" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Knative Serving adds a Service custom resource that creates immutable Revisions and Routes, scales pods on concurrent requests including down to zero through its autoscaler and activator, and can split traffic by percentage between revisions. VPA adjusts CPU and memory requests of running pods and never removes them. CronJobs run on a time schedule and are not triggered by HTTP requests. Helm hooks run during install and upgrade operations, not per request.",
    referenceUrl: "https://knative.dev/docs/serving/",
    tags: ["Knative", "Serverless", "Autoscaling"]
  },
  {
    id: "cncf-kcna-478",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "When a function platform makes sense",
    scenario: "A small team needs to resize images whenever a file lands in object storage. Uploads arrive in unpredictable bursts with long idle periods, and the team does not want to manage servers or pay for idle capacity. They can accept an occasional slower first request.",
    question: "Which characteristic of serverless platforms best matches this workload?",
    options: [
      { id: 'A', text: "Long-running stateful processes that hold large datasets in local memory" },
      { id: 'B', text: "Event-driven execution that scales to zero and bills only per invocation" },
      { id: 'C', text: "Fixed reserved capacity that is paid for monthly whether used or not" },
      { id: 'D', text: "Guaranteed dedicated nodes that keep functions warm with no cold start at all" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Serverless and FaaS platforms run code in response to events such as a file upload, scale automatically, including to zero between bursts, and usually charge per invocation or execution time, so idle periods cost nothing; the trade-off is cold starts, which the team accepts. Dedicated warm nodes remove cold starts but reintroduce idle cost. Functions are generally short-lived and stateless, so long-running in-memory state is a poor fit. Fixed reserved capacity is the model the team wants to avoid.",
    referenceUrl: "https://glossary.cncf.io/serverless/",
    tags: ["Serverless", "FaaS", "Event-driven"]
  },
  {
    id: "cncf-kcna-479",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Switching registries and runtimes freely",
    scenario: "A company builds images with Buildah, stores them in Harbor, and runs them with containerd on Kubernetes and with Podman on developer laptops. An architect is asked why these tools from different vendors interoperate without any conversion steps.",
    question: "Which set of open standards makes this possible?",
    options: [
      { id: 'A', text: "The OCI image, runtime and distribution specifications under the Linux Foundation" },
      { id: 'B', text: "The Container Network Interface, which defines how every tool packages and ships images" },
      { id: 'C', text: "The Docker Compose specification, which all runtimes and registries implement internally" },
      { id: 'D', text: "The Kubernetes Container Runtime Interface, which also governs how Podman runs containers" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Open Container Initiative defines the image format spec (how images are built and layered), the runtime spec (how a bundle is run, implemented by runc and others) and the distribution spec (how registries push and pull content), so compliant builders, registries and runtimes interoperate. CNI defines pod networking, not images. CRI is the gRPC API between the kubelet and a runtime; Podman does not use it. The Compose specification describes multi-container applications and is not what registries or runtimes implement.",
    referenceUrl: "https://opencontainers.org/about/overview/",
    tags: ["OCI", "Open standards", "Containers"]
  },
  {
    id: "cncf-kcna-480",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Docker images after the dockershim removal",
    scenario: "A team reads that Kubernetes removed dockershim in version 1.24 and worries that the hundreds of images it builds with docker build will no longer run after its clusters move from Docker Engine to containerd. Developers will keep using Docker on their laptops.",
    question: "What should the architect tell them?",
    options: [
      { id: 'A', text: "Images must be rebuilt with a containerd build tool, because Docker's format is not supported" },
      { id: 'B', text: "Existing images keep working, since Docker's output is OCI-compatible for any runtime" },
      { id: 'C', text: "Images keep working only after they are converted with kompose into containerd bundle format" },
      { id: 'D', text: "Images keep working only if each node also runs Docker Engine as a fallback beside containerd" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Removing dockershim changed only how the kubelet talks to the runtime: it now uses CRI implementations such as containerd or CRI-O directly. Images built by Docker follow the OCI image specification, so containerd pulls and runs them unchanged, and developers can keep using Docker locally. No rebuild with a different tool is needed. Nodes do not need Docker Engine installed. kompose converts Docker Compose files into Kubernetes manifests and has nothing to do with image formats.",
    referenceUrl: "https://kubernetes.io/blog/2022/02/17/dockershim-faq/",
    tags: ["CRI", "dockershim", "OCI"]
  },
  {
    id: "cncf-kcna-481",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "More pods or bigger pods",
    scenario: "A stateless web API's pods reach their CPU limits during daily peaks. The architect wants the service to handle more load by adding identical pods behind its Service rather than giving each pod more CPU, so that capacity can grow across many nodes.",
    question: "What kind of scaling is the architect describing?",
    options: [
      { id: 'A', text: "Cluster federation, which merges several clusters into one scheduling domain" },
      { id: 'B', text: "Node cordoning, which moves work away from nodes that are at full capacity" },
      { id: 'C', text: "Vertical scaling, which gives each existing pod replica more CPU for the load" },
      { id: 'D', text: "Horizontal scaling, which adds replicas of the same pod to share the load" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Horizontal scaling (scaling out) adds more instances of the same workload, which in Kubernetes means more pod replicas behind a Service, typically automated with a HorizontalPodAutoscaler; it suits stateless services and spreads across nodes. Vertical scaling (scaling up) gives each pod more resources and is bounded by node size. Federation is a multi-cluster management approach, not a scaling type. Cordoning marks a node unschedulable and adds no capacity.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/autoscaling/",
    tags: ["Autoscaling", "Horizontal scaling", "Principles"]
  },
  {
    id: "cncf-kcna-482",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "A storage vendor ships its own driver",
    scenario: "A storage vendor wants Kubernetes users to provision and attach its arrays through PersistentVolumeClaims. It needs to release driver fixes on its own schedule, without waiting for a Kubernetes release or getting code merged into the Kubernetes repository.",
    question: "Which standard should the vendor implement?",
    options: [
      { id: 'A', text: "The Container Network Interface, so the arrays appear as pod network routes" },
      { id: 'B', text: "The Container Storage Interface, deploying its driver as pods in the cluster" },
      { id: 'C', text: "The Container Runtime Interface, so containerd's driver mounts the arrays" },
      { id: 'D', text: "An in-tree volume plugin, contributed to the main Kubernetes code repository" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CSI is the standard interface between container orchestrators and storage systems; vendors ship CSI drivers as ordinary containers (a controller plus a node DaemonSet) and release them independently of Kubernetes. In-tree volume plugins live in the Kubernetes codebase, follow its release cycle, and are being migrated to CSI and removed. CRI concerns running containers, not provisioning volumes. CNI handles pod networking.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#csi",
    tags: ["CSI", "Storage", "Open standards"]
  },
  {
    id: "cncf-kcna-483",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "One change, one giant redeploy",
    scenario: "An online bookshop runs as a single large application. A one-line fix to the recommendations feature requires rebuilding, retesting and redeploying the whole system, and a memory leak in search regularly takes down checkout too. Teams want to release and scale features independently.",
    question: "Which architectural approach addresses these goals?",
    options: [
      { id: 'A', text: "Move the single application onto larger virtual machines with more memory headroom" },
      { id: 'B', text: "Split the system into microservices that own their data and deploy on their own" },
      { id: 'C', text: "Run more replicas of the whole system behind a load balancer for resilience" },
      { id: 'D', text: "Package the single application in one container image and run it on Kubernetes" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Microservices break a system into small, loosely coupled services with their own data and deployment pipelines, so recommendations can ship without redeploying checkout and a leak in search is contained to that service, at the cost of more operational and networking complexity. More replicas of the monolith improve availability but still couple every release and failure. Larger VMs postpone the leak without isolating it. Containerising the monolith unchanged gives packaging benefits but keeps the coupling.",
    referenceUrl: "https://glossary.cncf.io/microservices-architecture/",
    tags: ["Microservices", "Architecture", "Principles"]
  },
  {
    id: "cncf-kcna-484",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Orders lost when email is slow",
    scenario: "An order service calls the email service synchronously over HTTP to send confirmations. When the email provider slows down, order requests time out and customers see failed checkouts, even though sending the email could safely happen a minute later.",
    question: "Which design change best improves resilience here?",
    options: [
      { id: 'A', text: "Merge the email code into the order service so there is no network call to wait on" },
      { id: 'B', text: "Publish an order-placed event to a message queue that the email service consumes" },
      { id: 'C', text: "Raise the HTTP timeout on the email call to 60 seconds so fewer requests time out" },
      { id: 'D', text: "Run the order and email containers in one pod so they share a network namespace" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Asynchronous messaging decouples the services: the order service records the order, publishes an event and returns immediately, and the email service processes the queue at its own pace, retrying when the provider recovers. Merging the code keeps the slow provider call on the checkout path. A 60-second timeout makes customers wait longer and ties up resources. Sharing a pod lowers network latency but leaves checkout waiting on the slow email provider.",
    referenceUrl: "https://glossary.cncf.io/loosely-coupled-architecture/",
    tags: ["Loose coupling", "Messaging", "Resilience"]
  },
  {
    id: "cncf-kcna-485",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Autoscaler removes pods too eagerly",
    scenario: "A HorizontalPodAutoscaler on a bursty API scales up correctly during spikes, but engineers want to stop it from scaling down too aggressively when load dips briefly. They want it to wait until a full 10 minutes of lower load has passed before removing replicas.",
    question: "Which HPA setting achieves this?",
    options: [
      { id: 'A', text: "terminationGracePeriodSeconds: 600 on the pods of the target Deployment" },
      { id: 'B', text: "behavior.scaleDown.stabilizationWindowSeconds: 600 on the autoscaler" },
      { id: 'C', text: "minReplicas set equal to maxReplicas so that the replica count is fixed" },
      { id: 'D', text: "A PodDisruptionBudget with minAvailable set to the peak replica count" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The HPA's scale-down stabilization window makes it use the highest recommendation seen over that period before scaling down, so a 600-second window keeps replicas until load has stayed lower for 10 minutes (the default is 300 seconds). Fixing min and max disables autoscaling entirely. A PodDisruptionBudget limits voluntary evictions such as drains, not HPA scale-down decisions. A long termination grace period only delays each pod's shutdown after the decision is made.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/#stabilization-window",
    tags: ["HPA", "Autoscaling", "Stabilization"]
  },
  {
    id: "cncf-kcna-486",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Right-sizing requests without surprises",
    scenario: "A platform team suspects most teams request far more CPU and memory than their pods use, wasting node capacity. They want data-driven request suggestions per workload first, and do not want anything to evict or restart pods on its own yet.",
    question: "Which approach fits?",
    options: [
      { id: 'A', text: "Enable the Cluster Autoscaler so it removes nodes that pods do not fully use" },
      { id: 'B', text: "Configure a HorizontalPodAutoscaler on memory so each Deployment finds its own size" },
      { id: 'C', text: "Run the Vertical Pod Autoscaler with updateMode: Off and read its recommendations" },
      { id: 'D', text: "Set a LimitRange with low default requests so new pods start with smaller values" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "VPA's recommender analyses historical usage and publishes target requests in the VPA object; with updateMode Off it only recommends and never evicts or modifies pods, which is exactly the safe first step. An HPA changes replica counts, not per-pod requests. A LimitRange default applies only to pods that omit requests and is a guess rather than data. The Cluster Autoscaler removes underused nodes but cannot shrink over-sized requests, which still reserve capacity.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/autoscaling/#scaling-workloads-vertically",
    tags: ["VPA", "Right-sizing", "Autoscaling"]
  },
  {
    id: "cncf-kcna-487",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Predicting the autoscaler's next move",
    scenario: "A Deployment runs 4 replicas with a HorizontalPodAutoscaler targeting 60% average CPU utilization, with minReplicas 2 and maxReplicas 10. Current average utilization across the pods is 90%, and no scaling behavior policies are configured beyond the defaults.",
    question: "How many replicas will the HPA ask for?",
    options: [
      { id: 'A', text: "6 replicas, since ceil(4 x 90 / 60) is 6" },
      { id: 'B', text: "8 replicas, since it doubles on each breach" },
      { id: 'C', text: "10 replicas, since it jumps to its maximum" },
      { id: 'D', text: "5 replicas, since it adds one pod per cycle" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The HPA computes desiredReplicas = ceil(currentReplicas x currentMetric / targetMetric) = ceil(4 x 90 / 60) = 6, which lies within the 2 to 10 bounds and outside the default 10% tolerance, so it scales to 6. It does not add one pod at a time by default; the default scale-up policy even allows doubling or adding four pods per period, but only up to the computed target. It never jumps straight to the maximum unless the formula demands it, and it has no fixed doubling rule.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/#algorithm-details",
    tags: ["HPA", "Autoscaling", "Algorithm"]
  },
  {
    id: "cncf-kcna-488",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "The role that owns reliability targets",
    scenario: "A growing SaaS company wants a role that applies software engineering to operations: defining SLOs with product teams, managing error budgets, automating toil away and leading blameless postmortems after incidents.",
    question: "Which role is this?",
    options: [
      { id: 'A', text: "A cloud security architect" },
      { id: 'B', text: "A front-end web developer" },
      { id: 'C', text: "A data platform engineer" },
      { id: 'D', text: "A site reliability engineer" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Site reliability engineering, which originated at Google, treats operations as a software problem: SREs set SLOs and error budgets with product teams, automate repetitive toil, run incident response and write blameless postmortems. A cloud security architect designs security controls and compliance. Front-end developers build user interfaces. Data platform engineers build pipelines and storage for data, not reliability practices for services.",
    referenceUrl: "https://sre.google/sre-book/introduction/",
    tags: ["SRE", "Roles", "Personas"]
  },
  {
    id: "cncf-kcna-489",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Developers drowning in YAML",
    scenario: "Each of 30 product teams at a company writes its own Kubernetes manifests, CI pipelines and monitoring setup, with inconsistent security and long onboarding. Leadership wants a dedicated team to provide golden paths and self-service tooling, treating other developers as its customers.",
    question: "Which practice describes this approach?",
    options: [
      { id: 'A', text: "Chaos engineering, injecting failures to make every team's services robust" },
      { id: 'B', text: "Pair programming, having senior engineers write each team's YAML with them" },
      { id: 'C', text: "Platform engineering, building an internal developer platform as a product" },
      { id: 'D', text: "Site reliability engineering, taking on-call duty for every product team" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Platform engineering builds and runs an internal developer platform, with templates, golden paths, self-service provisioning and built-in guardrails, as a product whose customers are the application teams, reducing cognitive load and inconsistency. Chaos engineering tests resilience by injecting failures. SRE focuses on reliability and does not by itself provide self-service tooling. Pair programming spreads knowledge but does not scale consistent tooling to 30 teams.",
    referenceUrl: "https://tag-app-delivery.cncf.io/whitepapers/platforms/",
    tags: ["Platform engineering", "Roles", "IDP"]
  },
  {
    id: "cncf-kcna-490",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Getting involved in storage features",
    scenario: "An engineer at a storage company wants to contribute to how Kubernetes handles persistent volumes and to attend the community meetings where related design decisions are discussed.",
    question: "Which part of the Kubernetes community should the engineer join?",
    options: [
      { id: 'A', text: "The Kubernetes Steering Committee, which reviews storage pull requests" },
      { id: 'B', text: "The CNCF End User Community, which writes the volume subsystem code" },
      { id: 'C', text: "The CNCF Governing Board, which approves each individual code change" },
      { id: 'D', text: "SIG Storage, the special interest group that owns the storage area" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Kubernetes is organised into Special Interest Groups that own areas of the project; SIG Storage owns volumes, persistent volumes and CSI integration, and holds open, recorded meetings anyone can join. The CNCF Governing Board handles budget and business matters, not code review. The Steering Committee governs the project as a whole and delegates technical ownership to SIGs. The End User Community gathers organisations that use cloud native technology to share feedback; it does not write Kubernetes code.",
    referenceUrl: "https://github.com/kubernetes/community/blob/master/sig-list.md",
    tags: ["SIGs", "Community", "Kubernetes"]
  },
  {
    id: "cncf-kcna-491",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Proposing a significant new feature",
    scenario: "A contributor wants to add a user-visible feature to Kubernetes that changes the API and will take several releases to move from alpha to stable. She has discussed it informally in the relevant SIG meeting and wants to follow the project's formal process.",
    question: "What should she write next?",
    options: [
      { id: 'A', text: "A large pull request with the complete code, submitted directly for review" },
      { id: 'B', text: "A Kubernetes Enhancement Proposal, tracked by the owning SIG through stages" },
      { id: 'C', text: "A blog post on kubernetes.io, which the release team uses to pick features" },
      { id: 'D', text: "A CNCF sandbox application, since new features start as separate projects" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Significant Kubernetes changes go through the KEP process: a Kubernetes Enhancement Proposal documents motivation, design, graduation criteria and test plans, is owned by a SIG, and is tracked by the release team as the feature progresses through alpha, beta and GA. A huge unannounced pull request skips design review and will not be accepted for API changes. Sandbox is for new standalone projects joining the CNCF, not features of an existing one. Blog posts announce features; they are not how features are proposed.",
    referenceUrl: "https://github.com/kubernetes/enhancements/blob/master/keps/README.md",
    tags: ["KEP", "Community", "Enhancements"]
  },
  {
    id: "cncf-kcna-492",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Before the first pull request",
    scenario: "A developer opens her first pull request to fix a typo in the Kubernetes documentation. A bot comments on the pull request and adds a label saying it cannot be merged yet, even though the change itself is fine.",
    question: "What is the bot most likely asking her to do?",
    options: [
      { id: 'A', text: "Open a Kubernetes Enhancement Proposal to describe the typo correction" },
      { id: 'B', text: "Pass the Kubernetes certification exams to prove her technical knowledge" },
      { id: 'C', text: "Sign the CNCF Contributor License Agreement through the EasyCLA check" },
      { id: 'D', text: "Become an approver in an OWNERS file before any change can be merged" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kubernetes requires every contributor to sign the CNCF Contributor License Agreement, checked automatically by the EasyCLA bot, which labels the pull request as not ready until the CLA is signed. Contributors do not need to be approvers; approvers from OWNERS files review and approve other people's changes. KEPs are for significant features, not typo fixes. Certifications have nothing to do with contributing.",
    referenceUrl: "https://github.com/kubernetes/community/blob/master/CLA.md",
    tags: ["Contributing", "CLA", "Community"]
  },
  {
    id: "cncf-kcna-493",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Who decides a project has graduated",
    scenario: "A CNCF incubating project believes it now meets all graduation criteria, including adoption, a security audit and multi-company maintainers. Its maintainers want to know which CNCF body reviews the evidence and votes on promoting the project to Graduated.",
    question: "Which body makes that decision?",
    options: [
      { id: 'A', text: "The Technical Oversight Committee, which votes on moving projects between levels" },
      { id: 'B', text: "The project's largest corporate sponsor, which decides once it commits enough funding" },
      { id: 'C', text: "The Linux Foundation's legal team, which approves project maturity after a licence review" },
      { id: 'D', text: "The Kubernetes Steering Committee, which votes on every project in the CNCF landscape" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The CNCF Technical Oversight Committee (TOC) is responsible for the foundation's technical vision, accepts new projects and votes on moving projects between Sandbox, Incubating and Graduated after due diligence. The Kubernetes Steering Committee governs only the Kubernetes project. Legal review of licensing is part of the process but does not decide maturity. The CNCF is vendor neutral, so no sponsor can buy a project's graduation.",
    referenceUrl: "https://www.cncf.io/people/technical-oversight-committee/",
    tags: ["CNCF", "TOC", "Governance"]
  },
  {
    id: "cncf-kcna-494",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Turning on an alpha feature in production",
    scenario: "A team read about a new Kubernetes scheduling feature announced as alpha in the latest release and wants to enable its feature gate on the production control plane to use it immediately. The cluster administrator objects.",
    question: "Which statement about alpha features supports the administrator's objection?",
    options: [
      { id: 'A', text: "Alpha features are enabled by default but cannot be switched off once a workload depends on them" },
      { id: 'B', text: "Alpha features are off by default, may be buggy, and can change or be dropped without deprecation" },
      { id: 'C', text: "Alpha features are fully supported but require a paid support contract with the CNCF to be enabled" },
      { id: 'D', text: "Alpha features are only available in managed services and cannot be enabled on self-built clusters" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Alpha features are disabled by default behind feature gates, may contain bugs, and their API or behaviour can change incompatibly or be removed in any later release without a deprecation period, so they are recommended only for short-lived test clusters. They are not on by default, and they can be disabled. Any cluster whose control plane flags you control can enable them; many managed services actually do not allow it. The CNCF does not sell support contracts for Kubernetes features.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/feature-gates/#feature-stages",
    tags: ["Feature gates", "Alpha", "Release process"]
  },
  {
    id: "cncf-kcna-495",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Why Kubernetes has a neutral home",
    scenario: "A manager asks why companies that compete fiercely in the cloud market all contribute to Kubernetes, and who actually holds its trademark and infrastructure so that no single vendor controls it.",
    question: "What is the best answer?",
    options: [
      { id: 'A', text: "The CNCF, part of the Linux Foundation, hosts it as a vendor-neutral home" },
      { id: 'B', text: "Google owns and controls Kubernetes, licensing it free to cloud vendors" },
      { id: 'C', text: "Each cloud provider owns its own Kubernetes fork, synchronised each year" },
      { id: 'D', text: "The Apache Software Foundation owns Kubernetes under its incubator programme" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google donated Kubernetes to the Cloud Native Computing Foundation in 2015; the CNCF, part of the Linux Foundation, holds the trademark and funds shared infrastructure as a vendor-neutral home, while technical decisions are made by the open community. Google no longer controls the project. Providers ship conformant distributions from one upstream project, not independently owned forks. Kubernetes has never been an Apache Software Foundation project.",
    referenceUrl: "https://www.cncf.io/about/who-we-are/",
    tags: ["CNCF", "Linux Foundation", "Governance"]
  },
  {
    id: "cncf-kcna-496",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "How long a deprecated beta API survives",
    scenario: "A platform team's policy must state the minimum time the upstream project guarantees between a beta API version being announced as deprecated and its removal, so teams can plan manifest migrations. They are reading the Kubernetes deprecation policy.",
    question: "What does the policy guarantee for beta API versions?",
    options: [
      { id: 'A', text: "Permanent support within the major version, exactly like GA API versions" },
      { id: 'B', text: "Support for 12 months or 1 release after deprecation, whichever is shorter" },
      { id: 'C', text: "Support for 9 months or 3 releases after deprecation, whichever is longer" },
      { id: 'D', text: "No guarantee at all; a deprecated beta API can be removed in the very next release" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Kubernetes deprecation policy requires beta API versions to be supported for at least 9 months or 3 releases, whichever is longer, after they are deprecated. Alpha API versions can be removed in any release without notice, which is the no-guarantee case. There is no 12-month-or-one-release rule. GA API versions may be deprecated but are not removed within a major version, a stronger guarantee than beta receives.",
    referenceUrl: "https://kubernetes.io/docs/reference/using-api/deprecation-policy/",
    tags: ["Deprecation policy", "APIs", "Release process"]
  },
  {
    id: "cncf-kcna-497",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Who can approve changes in a directory",
    scenario: "A regular contributor to a Kubernetes subproject has been reviewing pull requests for months and wants to take on more responsibility. She asks how the project records who may review and who may approve changes for a given directory of the repository.",
    question: "How is this recorded?",
    options: [
      { id: 'A', text: "In the project's Helm chart values, which define who may merge pull requests" },
      { id: 'B', text: "In a Kubernetes RBAC RoleBinding on the project's own production cluster" },
      { id: 'C', text: "In per-directory OWNERS files that list the reviewers and the approvers" },
      { id: 'D', text: "In the CNCF Landscape entry, which lists every approver for each repository" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kubernetes repositories use OWNERS files per directory that list reviewers and approvers; automation assigns them to pull requests and honours /lgtm and /approve commands. Contributors move up the ladder from member to reviewer to approver to subproject owner by showing sustained, quality contributions. The CNCF Landscape catalogues projects, not people. Helm values configure deployments. RBAC controls access to cluster APIs, not GitHub merge rights.",
    referenceUrl: "https://github.com/kubernetes/community/blob/master/community-membership.md",
    tags: ["Contributor ladder", "OWNERS", "Community"]
  },
  {
    id: "cncf-kcna-498",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Surveying the options for a new tool",
    scenario: "An architect must shortlist tools for service mesh, tracing and container registries and wants one interactive map that groups cloud native projects and products by category and shows each project's CNCF maturity level.",
    question: "Which resource fits best?",
    options: [
      { id: 'A', text: "The OCI image specification on GitHub" },
      { id: 'B', text: "The Kubernetes enhancements repository" },
      { id: 'C', text: "The CNCF Landscape at landscape.cncf.io" },
      { id: 'D', text: "The Kubernetes API reference documentation" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The CNCF Landscape is an interactive map of cloud native projects and products grouped by category, such as service mesh, observability and registries, with filters for CNCF maturity level, licence and more. The API reference documents Kubernetes resources, not the wider ecosystem. The enhancements repository tracks KEPs for Kubernetes features. The OCI image spec defines one standard and lists no tools.",
    referenceUrl: "https://landscape.cncf.io/",
    tags: ["CNCF Landscape", "Ecosystem", "Tools"]
  },
  {
    id: "cncf-kcna-499",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Explaining cloud native to the board",
    scenario: "A CTO preparing a board presentation wants to use the CNCF's own definition of cloud native, including the example technologies it names, rather than an informal description of running software in the cloud.",
    question: "Which description matches the CNCF definition?",
    options: [
      { id: 'A', text: "Applications packaged in containers, exemplified by a single large image that holds every component of the system" },
      { id: 'B', text: "Any application hosted on a public cloud provider, exemplified by virtual machines lifted and shifted from a data centre" },
      { id: 'C', text: "Scalable apps in dynamic environments, exemplified by containers, meshes, microservices, immutable infrastructure and declarative APIs" },
      { id: 'D', text: "Applications written only for one provider's managed services, exemplified by proprietary functions and databases" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The CNCF defines cloud native technologies as empowering organisations to build and run scalable applications in modern, dynamic environments such as public, private and hybrid clouds, naming containers, service meshes, microservices, immutable infrastructure and declarative APIs as examples, and emphasising loosely coupled, resilient, manageable and observable systems. Lifting VMs into a public cloud is hosting, not cloud native design. The definition is explicitly not tied to one provider. Containerising one monolithic image misses the loosely coupled architecture the definition describes.",
    referenceUrl: "https://github.com/cncf/toc/blob/main/DEFINITION.md",
    tags: ["Cloud native", "Definition", "CNCF"]
  },
  {
    id: "cncf-kcna-500",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Events that every tool can read",
    scenario: "A company's event producers include a storage system, a Git server and custom services, and its consumers run on Knative, a cloud function service and Argo Events. Every producer uses a different envelope for its events, so each consumer carries custom parsing code. The team wants a common way to describe event metadata across producers and transports.",
    question: "What should the team standardise on?",
    options: [
      { id: 'A', text: "The OCI distribution specification, which defines how events are pushed to and pulled from registries" },
      { id: 'B', text: "The OpenTelemetry trace specification, which defines each event as a span with common parent and duration fields" },
      { id: 'C', text: "The Kubernetes Event API, which defines how every external system reports events to the API server" },
      { id: 'D', text: "The CloudEvents specification, defining common attributes such as id, source, type and specversion" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CloudEvents, a graduated CNCF specification, defines a common set of event metadata attributes (id, source, type, specversion, plus optional ones such as subject and time) and bindings for HTTP, Kafka, AMQP and more, so producers and consumers such as Knative Eventing and Argo Events interoperate without custom envelopes. OpenTelemetry traces describe request execution, not business events. The OCI distribution spec covers registry content. Kubernetes Events record cluster object activity and are not a general event envelope for external systems.",
    referenceUrl: "https://cloudevents.io/",
    tags: ["CloudEvents", "Open standards", "Event-driven"]
  }
];

export default CNCF_KCNA_QUESTIONS_20;
