export const GCP_CDL_QUESTIONS_14 = [
  {
    id: "gcp-cdl-326",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Quarterly releases in a weekly market",
    scenario: "A mobile banking company ships new features once a quarter because every release requires engineers to compile, verify and copy files to servers by hand over a weekend. Competitors ship weekly, and the product director wants to release small changes far more often with less risk.",
    question: "Which change best supports the product director's goal?",
    options: [
      { id: 'A', text: "Automate build, test and deployment with managed CI/CD services such as Cloud Build and Cloud Deploy" },
      { id: 'B', text: "Add a second change-approval board that reviews each release before the weekend deployment" },
      { id: 'C', text: "Batch more features into each quarterly release so that fewer weekend deployments are needed" },
      { id: 'D', text: "Buy larger servers so that each manual deployment finishes in fewer hours over the weekend" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Modern application development relies on automated continuous integration and delivery: Cloud Build builds and tests every change and Cloud Deploy promotes it through environments, so small releases become routine, repeatable and low risk, accelerating time to market. Batching more features makes releases larger and riskier. Bigger servers do not remove the manual steps that slow releases. Extra approval boards add delay without automating anything.",
    referenceUrl: "https://docs.cloud.google.com/build/docs/overview",
    tags: ["CI/CD", "Cloud Build", "Modern application development"]
  },
  {
    id: "gcp-cdl-327",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Recommendations crash and checkout goes with them",
    scenario: "An online bookstore's recommendation feature has a memory leak. Because it runs inside the same application as checkout and search, each time it crashes the whole store goes offline. The CTO wants a crash in one feature to leave the rest of the store working.",
    question: "Which architectural approach addresses this?",
    options: [
      { id: 'A', text: "Replicate the application's database to a second region for disaster recovery" },
      { id: 'B', text: "Schedule a nightly restart of the whole application to clear leaked memory" },
      { id: 'C', text: "Scale the single application vertically onto a machine type with more memory" },
      { id: 'D', text: "Run the features as separate microservices so one failure stays isolated" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Splitting an application into microservices gives fault isolation: if the recommendation service crashes, checkout and search keep running, and the faulty service can be restarted, scaled or fixed on its own, which improves resilience. More memory only delays the next crash and the store still fails as one unit. Nightly restarts cause planned downtime and do not stop daytime crashes. Replicating the database protects data but does nothing when application code fails.",
    referenceUrl: "https://cloud.google.com/learn/what-is-microservices-architecture",
    tags: ["Microservices", "Resilience", "Fault isolation"]
  },
  {
    id: "gcp-cdl-328",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Servers sized for Black Friday all year",
    scenario: "A fashion retailer owns enough servers to survive Black Friday, but for the other 51 weeks of the year average utilisation is below 15 percent. The CFO asks how modernising the application on Google Cloud would improve cost efficiency.",
    question: "What is the main cost benefit to explain?",
    options: [
      { id: 'A', text: "Every cloud resource is free for the first year after an application is modernised" },
      { id: 'B', text: "Peak traffic is capped automatically so the retailer never needs more than today's capacity" },
      { id: 'C', text: "Capacity scales with demand and is billed by use, instead of being bought for the peak" },
      { id: 'D', text: "Hardware purchases move to a five-year schedule that is negotiated directly with Google" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Modern, cloud-native applications use autoscaling and pay-as-you-go managed services, so capacity grows for the peak and shrinks afterwards, and the retailer pays for what it uses rather than owning idle servers for most of the year. Cloud resources are not free for a year after modernisation. Customers do not buy hardware from Google on multi-year schedules; that is the capital model being left behind. Capping traffic would turn away Black Friday customers, which is the opposite of the goal.",
    referenceUrl: "https://docs.cloud.google.com/compute/docs/autoscaler",
    tags: ["Cost optimization", "Autoscaling", "Modern application development"]
  },
  {
    id: "gcp-cdl-329",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Four engineers, forty servers",
    scenario: "A startup's four platform engineers spend most of their week patching operating systems, replacing failed disks and adjusting server counts for 40 VMs, leaving little time for the developer tooling the company needs. The founders want the team to be more productive without hiring.",
    question: "Which modernisation benefit applies most directly?",
    options: [
      { id: 'A', text: "Adding more VMs so that each one runs at lower utilisation and fails less" },
      { id: 'B', text: "Writing longer runbooks so the patching steps are documented more clearly" },
      { id: 'C', text: "Replacing the operating systems with a different Linux distribution to patch" },
      { id: 'D', text: "Moving to managed platforms that handle infrastructure operations for the team" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Improved operational efficiency is a core benefit of modern application development: managed platforms such as GKE Autopilot and Cloud Run take over patching, hardware failures and scaling, so a small team can focus on work that moves the business forward. More VMs mean more to patch. Better runbooks document toil but do not remove it. Switching Linux distributions still leaves the team patching every server.",
    referenceUrl: "https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run",
    tags: ["Operational efficiency", "Managed services"]
  },
  {
    id: "gcp-cdl-330",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Container images scattered across laptops",
    scenario: "A logistics company's developers build containers on their laptops and pass them around through shared drives. Security has no idea which builds reach production or whether they contain known vulnerabilities. Leadership wants one governed place to store these builds and have them scanned.",
    question: "Which Google Cloud service should the company adopt?",
    options: [
      { id: 'A', text: "Cloud Deploy, which promotes releases through staging and production targets" },
      { id: 'B', text: "Secret Manager, which stores API keys and passwords with version history" },
      { id: 'C', text: "Artifact Registry, with vulnerability scanning of the stored container images" },
      { id: 'D', text: "Cloud Storage buckets with object versioning turned on for every image file saved" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Artifact Registry is Google Cloud's managed repository for container images and language packages, with IAM-controlled access, and Artifact Analysis can scan stored images for known vulnerabilities, giving security visibility and control over what is deployed. Cloud Storage can hold files but is not an image registry and does not scan images. Cloud Deploy manages release promotion and needs images from a registry. Secret Manager stores credentials, not container images.",
    referenceUrl: "https://docs.cloud.google.com/artifact-registry/docs/overview",
    tags: ["Artifact Registry", "Containers", "Software supply chain"]
  },
  {
    id: "gcp-cdl-331",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Trying a risky pricing change on a few users first",
    scenario: "A ride-hailing company is releasing a new pricing engine. Product managers want real traffic to reach the new version gradually, starting with a small share of users, with the option to widen exposure in stages or roll back if error rates rise, all without a maintenance window.",
    question: "Which deployment strategy fits this requirement?",
    options: [
      { id: 'A', text: "A big-bang release that replaces the old version for every user at once" },
      { id: 'B', text: "A blue-green switch that moves all traffic to the new environment in one step" },
      { id: 'C', text: "A canary rollout that shifts a growing percentage of traffic in phases" },
      { id: 'D', text: "A recreate deployment that stops the old version before starting the new one" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A canary rollout sends a small percentage of traffic to the new version, lets the team watch metrics, then increases the share in phases or rolls back; Cloud Deploy supports canary strategies for GKE and Cloud Run, and Cloud Run can also split traffic between revisions. A big-bang release exposes everyone at once. A blue-green switch keeps a standby environment but moves all traffic in a single cutover rather than gradually. A recreate deployment causes downtime between stopping and starting versions.",
    referenceUrl: "https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary",
    tags: ["Canary deployment", "Cloud Deploy", "Release strategy"]
  },
  {
    id: "gcp-cdl-332",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "The order service that calls everyone",
    scenario: "When an order is placed, a retailer's order service directly calls the inventory, email, loyalty and analytics services in turn. If any of them is slow or down, orders fail, and every new consumer requires changes to the order service. Architects want these services decoupled.",
    question: "Which approach should the architects take?",
    options: [
      { id: 'A', text: "Publish an order event to Pub/Sub and let each service subscribe to it" },
      { id: 'B', text: "Merge all five services into one application so the calls happen in memory" },
      { id: 'C', text: "Give the order service a larger machine type so it can wait for slow services" },
      { id: 'D', text: "Have each downstream service poll the order database every few seconds" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An event-driven design decouples producers from consumers: the order service publishes one event to a Pub/Sub topic and returns, and each interested service subscribes and processes the event at its own pace, so a slow consumer no longer blocks orders and new consumers can subscribe without changing the order service. Merging everything recreates a monolith. A bigger machine still waits on slow dependencies. Polling the database adds load and delay and tightly couples every service to the order schema.",
    referenceUrl: "https://docs.cloud.google.com/pubsub/docs/overview",
    tags: ["Event-driven architecture", "Pub/Sub", "Decoupling"]
  },
  {
    id: "gcp-cdl-333",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "What the new CTO means by cloud native",
    scenario: "A newly hired CTO tells an insurer's board that new customer-facing applications will be built cloud native. A board member asks whether that simply means running the existing applications on rented servers.",
    question: "Which description of cloud native is accurate?",
    options: [
      { id: 'A', text: "Keeping every application on premises but connecting it to the internet securely" },
      { id: 'B', text: "Designing apps for the cloud with containers, microservices and managed services" },
      { id: 'C', text: "Buying applications only from software vendors headquartered in the same country" },
      { id: 'D', text: "Running the existing applications unchanged on VMs rented from a cloud provider" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud-native applications are designed from the start to exploit the cloud: they are typically built from microservices packaged in containers, run on managed or serverless platforms, scale automatically and are delivered through automated pipelines. Running existing applications unchanged on rented VMs is rehosting, not cloud native. Vendor nationality has nothing to do with the term. Keeping applications on premises is the opposite of cloud native.",
    referenceUrl: "https://cloud.google.com/learn/what-is-cloud-native",
    tags: ["Cloud native", "Modern application development"]
  },
  {
    id: "gcp-cdl-334",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Running Kubernetes without running Kubernetes",
    scenario: "A retailer's developers love Kubernetes, but the small operations team struggled to keep its self-built clusters' control planes available, patched and upgraded. Leadership wants to keep using Kubernetes while shedding that operational burden.",
    question: "Which Google Cloud service meets this need?",
    options: [
      { id: 'A', text: "Cloud Storage with static website hosting turned on" },
      { id: 'B', text: "Google Cloud VMware Engine running the existing hosts" },
      { id: 'C', text: "Google Kubernetes Engine, a managed Kubernetes service" },
      { id: 'D', text: "Compute Engine VMs with Kubernetes installed by the team" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "GKE is Google's managed Kubernetes service: Google runs, secures and upgrades the control plane, and features such as auto-upgrade and auto-repair reduce node maintenance, so developers keep Kubernetes while the operations burden drops. Installing Kubernetes on Compute Engine VMs is the self-managed model the team wants to leave. VMware Engine runs VMware workloads, not managed Kubernetes. Static website hosting in Cloud Storage cannot run containerised applications.",
    referenceUrl: "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview",
    tags: ["GKE", "Managed Kubernetes"]
  },
  {
    id: "gcp-cdl-335",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Paying for half-empty nodes",
    scenario: "A media company runs containers on GKE but its team spends time choosing node sizes, and the nodes often sit half empty, yet the company pays for all of them. It wants Google to manage the nodes entirely and to pay based on what its workloads request.",
    question: "Which GKE option should the company use?",
    options: [
      { id: 'A', text: "GKE Standard mode with the nodes switched to sole-tenant hosts" },
      { id: 'B', text: "GKE Autopilot mode, where Google manages nodes and pods are billed" },
      { id: 'C', text: "GKE Standard mode with larger node pools sized for peak load" },
      { id: 'D', text: "GKE Standard mode with committed use discounts on every node" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In GKE Autopilot, Google provisions, scales, secures and maintains the nodes, and customers pay for the CPU, memory and storage their running pods request rather than for whole nodes, which removes both node-sizing work and the cost of idle node capacity. Standard mode bills for all node resources regardless of use, so larger node pools, sole-tenant hosts or commitments leave the team managing nodes and paying for unused capacity.",
    referenceUrl: "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview",
    tags: ["GKE Autopilot", "Cost optimization"]
  },
  {
    id: "gcp-cdl-336",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "A platform team that tunes every node",
    scenario: "A high-frequency trading firm's platform team needs to pick exact machine types for each node pool, apply custom node-level kernel settings, and control precisely when node upgrades happen around market hours. It accepts full responsibility for node sizing and utilisation.",
    question: "Which GKE mode best fits this team?",
    options: [
      { id: 'A', text: "Cloud Run functions, which run single-purpose code in response to events" },
      { id: 'B', text: "Autopilot mode, which hands node configuration and upgrades to Google" },
      { id: 'C', text: "Standard mode, where the team configures and manages its own node pools" },
      { id: 'D', text: "Cloud Run, which runs containers without any cluster or node to manage" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "GKE Standard mode gives the customer control of node pools: machine types, node configuration and upgrade strategies are the team's to manage, and it pays for the nodes it provisions, a trade that suits a platform team with specialised requirements and the skills to handle them. Autopilot, which Google recommends for most workloads, deliberately takes node configuration away from the customer. Cloud Run and Cloud Run functions are serverless and expose no nodes at all, so node-level tuning is impossible.",
    referenceUrl: "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/choose-cluster-mode",
    tags: ["GKE Standard", "Cluster modes"]
  },
  {
    id: "gcp-cdl-337",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "A ticket drop that overwhelms the cluster",
    scenario: "A concert promoter's GKE Standard cluster handles normal traffic comfortably, but during ticket drops new pods cannot be scheduled because the nodes are full, and engineers add nodes by hand. After the rush, the extra nodes sit idle for days.",
    question: "Which GKE capability solves both problems?",
    options: [
      { id: 'A', text: "Node auto-repair, which recreates nodes that fail their health checks" },
      { id: 'B', text: "Release channels, which keep the cluster's Kubernetes version up to date" },
      { id: 'C', text: "The cluster autoscaler, which adds and removes nodes as pod demand changes" },
      { id: 'D', text: "Workload Identity, which lets pods call Google Cloud APIs securely" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The GKE cluster autoscaler resizes node pools automatically: when pods cannot be scheduled for lack of capacity it adds nodes, and when nodes are underused it removes them, so the cluster absorbs ticket drops and then shrinks to save money. Node auto-repair fixes unhealthy nodes but does not change their number. Release channels manage version upgrades. Workload Identity handles authentication from pods to Google Cloud services.",
    referenceUrl: "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler",
    tags: ["GKE", "Cluster autoscaler", "Scalability"]
  },
  {
    id: "gcp-cdl-338",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Worried about being locked into one cloud",
    scenario: "A logistics company's board is concerned that modernising onto Google Cloud will lock it in. The architects plan to package applications as containers and run them on GKE, and the board asks how that choice affects portability.",
    question: "What should the architects explain?",
    options: [
      { id: 'A', text: "Containers on GKE are converted into a proprietary format when they are deployed" },
      { id: 'B', text: "Portability requires buying a separate licence for every container that is deployed" },
      { id: 'C', text: "GKE applications can run only in Google data centers and must be rewritten to move" },
      { id: 'D', text: "GKE uses open-source Kubernetes, so workloads can move to other environments" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "GKE runs standard, open-source Kubernetes and standard container images, so the same containers and much of the same configuration can run on Kubernetes elsewhere, on premises or on other clouds, which reduces lock-in and supports hybrid and multicloud strategies. GKE workloads do not need rewriting to move, containers are not converted into a proprietary format, and there is no per-container portability licence.",
    referenceUrl: "https://cloud.google.com/learn/what-is-kubernetes",
    tags: ["GKE", "Portability", "Open source"]
  },
  {
    id: "gcp-cdl-339",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Serving AI models alongside existing microservices",
    scenario: "A fintech already runs its microservices on GKE and now needs to serve several open AI models that require GPUs. The platform team wants to reuse its existing Kubernetes skills, grow model servers with demand and share accelerators efficiently rather than adopt a separate platform.",
    question: "Why is GKE a good fit for this new workload?",
    options: [
      { id: 'A', text: "GKE replaces the need for accelerators by running every model on its CPU cores" },
      { id: 'B', text: "GKE can only run web servers, so the models would need a separate GPU platform" },
      { id: 'C', text: "GKE converts each model into a SQL function that runs inside BigQuery tables" },
      { id: 'D', text: "GKE supports GPU and TPU nodes, so model servers scale with familiar tooling" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "GKE supports node pools with NVIDIA GPUs and Cloud TPUs, autoscaling and features for sharing and scheduling accelerators, so a team already skilled in Kubernetes can serve AI models with the same tools, pipelines and monitoring it uses for its microservices; GKE is also a core orchestration layer of AI Hypercomputer. GKE is not limited to web servers. It does not turn models into BigQuery SQL functions. It does not remove the need for accelerators; it makes them available to containers.",
    referenceUrl: "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/machine-learning",
    tags: ["GKE", "AI inference", "GPU"]
  },
  {
    id: "gcp-cdl-340",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Sixty services, a service mesh and stateful queues",
    scenario: "A telecom's platform runs about 60 containerised services, including stateful message brokers, custom network policies between services and a service mesh for mutual TLS. The platform team is experienced with Kubernetes and wants fine-grained say over how everything is scheduled and connected.",
    question: "Which Google Cloud platform is the best fit?",
    options: [
      { id: 'A', text: "GKE, running the services on Kubernetes with full orchestration control" },
      { id: 'B', text: "Cloud Run services, relying on its fully managed scaling for every service" },
      { id: 'C', text: "Cloud Run functions, deploying each service as an event-triggered function" },
      { id: 'D', text: "App Engine standard, deploying each service's code to language runtimes" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "GKE provides the full Kubernetes API, including StatefulSets for brokers, network policies, service mesh integration and detailed scheduling control, which suits a large, complex platform run by an experienced Kubernetes team. Cloud Run is excellent for stateless, request-driven containers but intentionally hides cluster-level controls such as custom scheduling and in-cluster network policies. Cloud Run functions suit small event handlers, not stateful brokers. App Engine standard runs code in managed language runtimes and does not provide Kubernetes-level orchestration.",
    referenceUrl: "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview",
    tags: ["GKE", "Cloud Run", "Platform choice"]
  },
  {
    id: "gcp-cdl-341",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Clusters stuck on an unsupported version",
    scenario: "An e-commerce company discovers that several of its GKE clusters are running old Kubernetes versions that miss security fixes, because version changes were always postponed. It wants clusters to be kept on supported, patched versions automatically, with the ability to favour stability over the newest features.",
    question: "Which GKE feature should the company use?",
    options: [
      { id: 'A', text: "Enrol the clusters in a release channel such as Stable for automatic upgrades" },
      { id: 'B', text: "Turn on the cluster autoscaler so the nodes are replaced when they are busy" },
      { id: 'C', text: "Take a daily snapshot of every node's boot disk to restore after problems" },
      { id: 'D', text: "Create a new cluster by hand each year and migrate every workload to it" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "GKE release channels (Rapid, Regular and Stable, plus Extended for longer support) let Google upgrade the control plane and nodes automatically to versions validated for that channel; the Stable channel prioritises maturity over new features, keeping clusters patched without manual upgrade projects. The cluster autoscaler changes capacity, not versions. Rebuilding clusters yearly is manual and still leaves long gaps without fixes. Disk snapshots are backups and do not upgrade Kubernetes.",
    referenceUrl: "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels",
    tags: ["GKE", "Release channels", "Security patching"]
  },
  {
    id: "gcp-cdl-342",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "A node that quietly stopped responding",
    scenario: "A game studio's on-call engineer is woken whenever a Kubernetes worker machine becomes unhealthy, and must drain and rebuild it by hand. After moving to GKE, the studio wants unhealthy machines detected and fixed without human intervention.",
    question: "Which GKE capability provides this?",
    options: [
      { id: 'A', text: "Horizontal Pod Autoscaler, which adds replicas under heavy load" },
      { id: 'B', text: "Artifact Registry, which stores the studio's container images" },
      { id: 'C', text: "Node auto-repair, which recreates nodes that fail health checks" },
      { id: 'D', text: "Cloud Deploy, which promotes releases between cluster targets" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "GKE node auto-repair periodically checks node health and, when a node fails its checks for a sustained period, automatically repairs it, typically by draining and recreating it, so engineers are not paged for routine node failures. The Horizontal Pod Autoscaler adjusts the number of pod replicas based on load, not node health. Artifact Registry stores images. Cloud Deploy manages release promotion.",
    referenceUrl: "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/node-auto-repair",
    tags: ["GKE", "Auto-repair", "Operational efficiency"]
  },
  {
    id: "gcp-cdl-343",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "A containerised API with no ops team",
    scenario: "A three-person startup has packaged its product API as a container image. It wants a public HTTPS endpoint, automatic scaling from idle to thousands of requests, and no servers or clusters to manage, paying only while requests are served.",
    question: "Where should the startup deploy the container?",
    options: [
      { id: 'A', text: "Google Cloud VMware Engine, running a VM that hosts the container runtime" },
      { id: 'B', text: "Cloud Run, which runs containers serverlessly and scales them to zero" },
      { id: 'C', text: "A GKE Standard cluster that the startup sizes and upgrades" },
      { id: 'D', text: "Compute Engine VMs in a managed instance group behind a load balancer" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud Run is a fully managed serverless platform for containers: deploying an image gives a secure HTTPS endpoint, instances scale automatically with traffic including down to zero, and with request-based billing the startup pays only while requests are processed. A GKE Standard cluster and a managed instance group both require managing infrastructure and incur cost while idle. VMware Engine is for running VMware workloads and is far heavier than a single API needs.",
    referenceUrl: "https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run",
    tags: ["Cloud Run", "Serverless", "Containers"]
  },
  {
    id: "gcp-cdl-344",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Making a thumbnail whenever a photo lands",
    scenario: "A real-estate portal wants a small piece of Python code to run every time an agent uploads a listing photo to a Cloud Storage bucket, generating a thumbnail. The developers prefer to write just the function, not build a container or run a web server.",
    question: "Which service is the best fit?",
    options: [
      { id: 'A', text: "A Compute Engine VM that polls the bucket for new photos every minute" },
      { id: 'B', text: "A nightly batch job on a VM that processes all of the day's new photos" },
      { id: 'C', text: "A GKE cluster that runs a thumbnail service watching the bucket's contents" },
      { id: 'D', text: "Cloud Run functions, triggered by the bucket's object-finalized events" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Run functions let developers deploy a single-purpose function from source code in supported languages such as Python, and an Eventarc trigger runs it whenever an object is finalized in a Cloud Storage bucket, so thumbnails appear seconds after upload with no servers and no container to build. A polling VM and a GKE service both add infrastructure to manage and pay for when idle. A nightly batch job delays thumbnails by up to a day.",
    referenceUrl: "https://docs.cloud.google.com/run/docs/triggering/storage-triggers",
    tags: ["Cloud Run functions", "Event-driven", "Serverless"]
  },
  {
    id: "gcp-cdl-345",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "A nightly reconciliation that runs and then stops",
    scenario: "A payments company runs a containerised reconciliation task every night that reads the day's transactions, produces a report and exits after about 40 minutes. It does not serve HTTP requests, and the company wants to stop paying for a VM that sits idle the other 23 hours.",
    question: "Which serverless option fits this task?",
    options: [
      { id: 'A', text: "A Cloud Run service with minimum instances set to keep one always warm" },
      { id: 'B', text: "A GKE Standard cluster with a dedicated node pool reserved for the task" },
      { id: 'C', text: "An App Engine flexible environment app that stays up to receive calls" },
      { id: 'D', text: "A Cloud Run job, run on a schedule and billed only while it executes" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Run jobs run containers that perform work and then exit, rather than listening for HTTP requests; a job can be triggered on a schedule, for example with Cloud Scheduler, and is billed only while its tasks run, eliminating the idle VM. A Cloud Run service with a warm minimum instance is designed for request-serving and incurs cost around the clock. A dedicated GKE node pool and an always-on App Engine flexible app both keep paying for idle capacity.",
    referenceUrl: "https://docs.cloud.google.com/run/docs/create-jobs",
    tags: ["Cloud Run jobs", "Batch", "Serverless"]
  },
  {
    id: "gcp-cdl-346",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "An internal tool used for an hour a day",
    scenario: "A school district's staff use an internal scheduling web app for about an hour each morning; the rest of the day it receives almost no traffic. It currently runs on a VM that is billed 24 hours a day. The finance office asks what running it on Cloud Run would change.",
    question: "What should the finance office be told?",
    options: [
      { id: 'A', text: "Costs double, since Cloud Run always keeps two instances running for resilience" },
      { id: 'B', text: "Costs follow use, since instances scale to zero when no requests are arriving" },
      { id: 'C', text: "Costs become fixed, since Cloud Run requires a three-year commitment to start" },
      { id: 'D', text: "Costs stay the same, since Cloud Run bills a flat monthly fee for each app deployed" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud Run scales instances with incoming requests and down to zero when idle, and with request-based billing charges only while requests are being handled, so an app used for an hour a day costs a fraction of an always-on VM. Cloud Run has no flat per-app monthly fee, does not force two always-running instances by default, and does not require a commitment; committed use discounts are optional.",
    referenceUrl: "https://docs.cloud.google.com/run/docs/configuring/billing-settings",
    tags: ["Cloud Run", "Pay per use", "Cost optimization"]
  },
  {
    id: "gcp-cdl-347",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "The first customer each morning waits",
    scenario: "A retailer's Cloud Run checkout service scales to zero overnight. The first shoppers each morning see a noticeable delay while a new instance starts, and marketing says this hurts conversion. The team will accept a small ongoing cost to remove the delay.",
    question: "What should the team configure?",
    options: [
      { id: 'A', text: "A lower maximum number of instances to limit scaling out" },
      { id: 'B', text: "A move to Cloud Run jobs so checkout runs on a schedule" },
      { id: 'C', text: "A daily snapshot of the service's container image in storage" },
      { id: 'D', text: "A minimum number of instances so some stay warm and ready" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Setting minimum instances on a Cloud Run service keeps that many instances initialised and ready, which avoids cold-start latency for the first requests after idle periods, at the cost of paying for the idle instances. Lowering the maximum limits scaling out and can worsen latency under load. Cloud Run jobs are for run-to-completion tasks, not an interactive checkout. Image snapshots do not keep instances running.",
    referenceUrl: "https://docs.cloud.google.com/run/docs/configuring/min-instances",
    tags: ["Cloud Run", "Cold starts", "Performance"]
  },
  {
    id: "gcp-cdl-348",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "A Rust service with a bundled image library",
    scenario: "A design startup's rendering API is written in Rust and depends on a native graphics library compiled into its container. It serves HTTP requests with unpredictable spikes. The team wants serverless operation and scale to zero, with no clusters to run.",
    question: "Which Google Cloud service should the team choose?",
    options: [
      { id: 'A', text: "Cloud Run services, deploying the existing container image as it stands" },
      { id: 'B', text: "GKE Standard, running the container on node pools the team manages" },
      { id: 'C', text: "App Engine standard, deploying the code to one of its sandboxed runtimes" },
      { id: 'D', text: "Cloud Run functions, deploying the source to a supported language runtime" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Run services run any container image that listens for HTTP requests, whatever the language or native libraries inside, and provide serverless autoscaling to zero, so the Rust service and its bundled library deploy unchanged. Cloud Run functions build from source for a set of supported language runtimes, which does not include Rust, and are aimed at small functions. GKE Standard would run the container but requires managing clusters and node pools. App Engine standard also relies on specific language runtimes and cannot run the existing container.",
    referenceUrl: "https://docs.cloud.google.com/run/docs/functions/comparison",
    tags: ["Cloud Run", "Cloud Run functions", "Platform choice"]
  },
  {
    id: "gcp-cdl-349",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Why the Cloud Run bill stayed small at peak",
    scenario: "A news site's Cloud Run service absorbed a traffic spike of 50,000 requests per minute on election night, yet only a few dozen copies of the service were running. The CFO expected one copy per simultaneous reader and asks how this was possible.",
    question: "Which Cloud Run behaviour explains it?",
    options: [
      { id: 'A', text: "Pages are served by BigQuery instead of Cloud Run during spikes" },
      { id: 'B', text: "Traffic is queued until the next morning when instances cost less" },
      { id: 'C', text: "Requests beyond the first few thousand are dropped to protect costs" },
      { id: 'D', text: "Each instance can handle many concurrent requests, up to a set limit" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Run instances can process multiple requests at the same time, up to a configurable concurrency limit (80 by default, and up to 1,000), so a modest number of instances can serve very high traffic, keeping costs efficient. Cloud Run does not drop requests to save money, does not queue traffic for cheaper hours, and does not hand web serving to BigQuery, which is an analytics warehouse.",
    referenceUrl: "https://docs.cloud.google.com/run/docs/about-concurrency",
    tags: ["Cloud Run", "Concurrency", "Scalability"]
  },
  {
    id: "gcp-cdl-350",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "A pitch deck promise about serverless",
    scenario: "A startup founder tells investors that building on Google Cloud serverless products will help the company reach the market faster than rivals running their own servers. An investor asks what the main reason for that claim is.",
    question: "Which answer is most accurate?",
    options: [
      { id: 'A', text: "Serverless products remove the need to write any application code at all" },
      { id: 'B', text: "Serverless products come with free unlimited usage for early-stage startups" },
      { id: 'C', text: "Developers focus on code while Google handles servers, scaling and patching" },
      { id: 'D', text: "Serverless products guarantee the app will never have a single software bug" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Serverless platforms such as Cloud Run and Cloud Run functions remove infrastructure work: Google provisions, scales, patches and secures the underlying servers, so a small team spends its time on product features and ships sooner. Developers still write application code. No platform can guarantee bug-free software. Usage is billed; free tiers exist but are limited, not unlimited.",
    referenceUrl: "https://cloud.google.com/discover/what-is-serverless-computing",
    tags: ["Serverless", "Time to market"]
  }
];

export default GCP_CDL_QUESTIONS_14;
