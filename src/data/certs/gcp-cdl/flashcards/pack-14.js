export const GCP_CDL_FLASHCARDS_14 = [
  {
    id: 'gcp-cdl-fc-326',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What business value does modern application development deliver?',
    hint: 'Five benefits: architecture, speed, cost, resilience, efficiency.',
    back: '<strong>Flexible architectures</strong> such as microservices, <strong>faster deployment</strong> through managed services and automation, <strong>cost optimisation</strong> by paying for what is used, <strong>better scalability and resilience</strong>, and <strong>improved operational efficiency</strong> because the provider handles infrastructure toil.',
    tags: ['Modern application development', 'Business value']
  },
  {
    id: 'gcp-cdl-fc-327',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Continuous integration vs continuous delivery: what does each automate?',
    hint: 'Merge and test; then release.',
    back: '<strong>Continuous integration</strong>: every code change is automatically built and tested as it is merged, catching problems early. <strong>Continuous delivery</strong>: every change that passes is automatically packaged and promoted through environments so it can be released at any time. Together they turn big, risky releases into small, routine ones.',
    tags: ['CI/CD', 'DevOps']
  },
  {
    id: 'gcp-cdl-fc-328',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Cloud Build, Artifact Registry, Cloud Deploy: what role does each play in a release pipeline?',
    hint: 'Make it, store it, ship it.',
    back: '<strong>Cloud Build</strong>: builds and tests code into artifacts such as container images. <strong>Artifact Registry</strong>: stores and governs those images and packages, with vulnerability scanning. <strong>Cloud Deploy</strong>: promotes releases through targets such as staging and production on GKE or Cloud Run, with approvals, canaries and rollbacks.',
    tags: ['Cloud Build', 'Cloud Deploy']
  },
  {
    id: 'gcp-cdl-fc-329',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Canary vs blue-green deployment: how do they differ?',
    hint: 'Gradual percentage vs one switch.',
    back: '<strong>Canary</strong>: send a <strong>small, growing percentage</strong> of real traffic to the new version in phases, watching metrics and rolling back if needed. <strong>Blue-green</strong>: run the new version in a parallel environment and <strong>switch all traffic at once</strong>, keeping the old one for fast rollback. Canary limits how many users a bad release can reach.',
    tags: ['Deployment strategies', 'Release management']
  },
  {
    id: 'gcp-cdl-fc-330',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Why do modern applications use events and Pub/Sub instead of direct calls?',
    hint: 'Publish once, let anyone listen.',
    back: 'With an <strong>event-driven</strong> design, a service <strong>publishes an event</strong> (for example "order placed") to a Pub/Sub topic and moves on; any number of services <strong>subscribe</strong> and react at their own pace. Producers and consumers are <strong>decoupled</strong>: a slow consumer does not block the producer, and new consumers can be added without changing it.',
    tags: ['Event-driven architecture', 'Pub/Sub']
  },
  {
    id: 'gcp-cdl-fc-331',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What does "cloud native" mean?',
    hint: 'Built for the cloud, not just moved to it.',
    back: 'Applications <strong>designed to exploit the cloud from the start</strong>: typically microservices in <strong>containers</strong>, running on <strong>managed or serverless</strong> platforms, scaling automatically and delivered through <strong>automated pipelines</strong>. Rehosting an old application onto VMs is not cloud native.',
    tags: ['Cloud native', 'Modern application development']
  },
  {
    id: 'gcp-cdl-fc-332',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What does Google manage for you in Google Kubernetes Engine (GKE)?',
    hint: 'Start with the brain of the cluster.',
    back: 'Google runs, secures, scales and upgrades the <strong>Kubernetes control plane</strong>, and offers <strong>automatic node upgrades, auto-repair and cluster autoscaling</strong>. In <strong>Autopilot</strong> mode Google manages the nodes entirely. You keep the open Kubernetes API and tooling without building clusters yourself.',
    tags: ['GKE', 'Managed Kubernetes']
  },
  {
    id: 'gcp-cdl-fc-333',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'GKE Autopilot vs Standard: how do management and billing differ?',
    hint: 'Pay for pods, or pay for nodes?',
    back: '<strong>Autopilot</strong> (Google\'s recommended mode): Google manages nodes with built-in best-practice hardening, and you pay for the <strong>resources your pods request</strong>. <strong>Standard</strong>: you configure and manage <strong>node pools</strong> (machine types, upgrades) and pay for <strong>all node capacity</strong> whether used or not. Choose Standard only for specific node-level needs.',
    tags: ['GKE Autopilot', 'GKE Standard']
  },
  {
    id: 'gcp-cdl-fc-334',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Cluster autoscaler vs Horizontal Pod Autoscaler in GKE: what does each scale?',
    hint: 'Machines vs copies of the app.',
    back: 'The <strong>Horizontal Pod Autoscaler</strong> changes the <strong>number of pod replicas</strong> for a workload based on metrics such as CPU. The <strong>cluster autoscaler</strong> changes the <strong>number of nodes</strong>, adding them when pods cannot be scheduled and removing underused ones. They work together: more pods trigger more nodes.',
    tags: ['GKE', 'Autoscaling']
  },
  {
    id: 'gcp-cdl-fc-335',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What are GKE release channels and why use them?',
    hint: 'Pick your pace of upgrades.',
    back: 'Release channels (<strong>Rapid, Regular, Stable</strong>, plus <strong>Extended</strong> for longer support) let Google <strong>automatically upgrade</strong> clusters to versions validated for that channel. Rapid gets features first; Stable favours maturity. Clusters stay patched and supported without manual upgrade projects.',
    tags: ['GKE', 'Release channels']
  },
  {
    id: 'gcp-cdl-fc-336',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'GKE node auto-repair vs node auto-upgrade: what does each do?',
    hint: 'One fixes, one updates.',
    back: '<strong>Auto-repair</strong> watches node health and automatically <strong>repairs or recreates nodes</strong> that fail health checks. <strong>Auto-upgrade</strong> keeps nodes on a <strong>current, patched Kubernetes version</strong> in line with the control plane. Both remove routine on-call work.',
    tags: ['GKE', 'Operational efficiency']
  },
  {
    id: 'gcp-cdl-fc-337',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Why run AI model serving on GKE?',
    hint: 'Accelerators plus the tools the team already knows.',
    back: 'GKE supports <strong>GPU and TPU node pools</strong>, autoscaling and accelerator sharing, so teams serve models with the <strong>same Kubernetes tooling</strong> they use for other services. It is a core orchestration option in <strong>AI Hypercomputer</strong> and a common way to self-host open models such as Gemma.',
    tags: ['GKE', 'AI inference']
  },
  {
    id: 'gcp-cdl-fc-338',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'GKE or Cloud Run: what is the decision rule?',
    hint: 'How much control do you really need?',
    back: 'Choose <strong>Cloud Run</strong> for stateless, request- or event-driven containers when you want <strong>no cluster at all</strong>, scale to zero and per-use billing. Choose <strong>GKE</strong> when you need the <strong>full Kubernetes API</strong>: stateful workloads, custom scheduling, network policies, service mesh, specialised hardware control or a large platform run by Kubernetes-skilled teams.',
    tags: ['GKE', 'Cloud Run']
  },
  {
    id: 'gcp-cdl-fc-339',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What is Cloud Run?',
    hint: 'Containers without clusters.',
    back: 'A <strong>fully managed serverless platform</strong> that runs <strong>containers</strong> written in any language. Deploy an image (or source code) and get an HTTPS endpoint; instances <strong>scale automatically, including to zero</strong>, and billing follows actual use. Google manages all the infrastructure.',
    tags: ['Cloud Run', 'Serverless']
  },
  {
    id: 'gcp-cdl-fc-340',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Cloud Run services vs Cloud Run jobs: when do you use each?',
    hint: 'Listen for requests, or run and exit?',
    back: '<strong>Services</strong> listen for <strong>HTTP requests or events</strong> and scale with traffic, for example APIs and websites. <strong>Jobs</strong> run containers that <strong>do a task and then exit</strong>, for example nightly reports or data processing, often triggered on a schedule and billed only while they run.',
    tags: ['Cloud Run', 'Cloud Run jobs']
  },
  {
    id: 'gcp-cdl-fc-341',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Cloud Run functions vs Cloud Run services: how do you choose?',
    hint: 'A snippet of code, or a whole container?',
    back: '<strong>Cloud Run functions</strong>: write a <strong>single-purpose function</strong> in a supported runtime (such as Node.js, Python, Go, Java) and deploy source code; ideal for small event handlers like reacting to a file upload. <strong>Cloud Run services</strong>: deploy <strong>any container</strong>, any language or library, for full applications and APIs. Both are serverless.',
    tags: ['Cloud Run functions', 'Cloud Run']
  },
  {
    id: 'gcp-cdl-fc-342',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What is scale to zero, and what is its trade-off?',
    hint: 'Free when idle, slower on the first request.',
    back: 'When no requests arrive, a serverless service runs <strong>no instances</strong>, so it costs nothing for compute while idle. The trade-off is a <strong>cold start</strong>: the first request after idle waits while a new instance starts. Setting minimum instances removes the delay at a small ongoing cost.',
    tags: ['Serverless', 'Cold starts']
  },
  {
    id: 'gcp-cdl-fc-343',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'When should a Cloud Run service set minimum instances?',
    hint: 'Latency matters more than the last cent.',
    back: 'When <strong>cold-start latency is unacceptable</strong>, for example checkout or customer-facing APIs after quiet periods. Minimum instances keep that many instances <strong>warm and ready</strong>. You pay for them while idle, so use the smallest number that keeps latency acceptable, and leave it at zero for internal or batch-like services.',
    tags: ['Cloud Run', 'Performance']
  },
  {
    id: 'gcp-cdl-fc-344',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What is request concurrency in Cloud Run and why does it matter for cost?',
    hint: 'One instance, many requests.',
    back: 'Each Cloud Run instance can handle <strong>multiple requests at the same time</strong>, up to a configurable limit (<strong>80 by default, up to 1,000</strong>). High concurrency means fewer instances for the same traffic, which lowers cost and cold starts. Set it to 1 only when the code cannot safely handle parallel requests.',
    tags: ['Cloud Run', 'Concurrency']
  },
  {
    id: 'gcp-cdl-fc-345',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Cloud Run request-based vs instance-based billing: which fits which workload?',
    hint: 'Pay per request time, or pay for the instance\'s whole life?',
    back: '<strong>Request-based</strong>: you are charged for CPU and memory mainly <strong>while requests are being processed</strong>; best for spiky or low-traffic services that idle often. <strong>Instance-based</strong>: you pay for the <strong>entire lifetime</strong> of each instance at a lower rate, with CPU always available; best for steady traffic or services doing background work between requests.',
    tags: ['Cloud Run', 'Billing']
  },
  {
    id: 'gcp-cdl-fc-346',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What can trigger a Cloud Run function?',
    hint: 'A web call or something happening in the cloud.',
    back: '<strong>HTTP requests</strong>, or <strong>events</strong> delivered through Eventarc, such as a file finalized in a Cloud Storage bucket, a message on a Pub/Sub topic, a Firestore document change or an audit log entry. The function runs only when triggered, so there is nothing to pay while nothing happens.',
    tags: ['Cloud Run functions', 'Eventarc']
  },
  {
    id: 'gcp-cdl-fc-347',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Cloud Functions vs Cloud Run functions: are they different products?',
    hint: 'A rename that joined two families.',
    back: 'Cloud Functions (2nd gen) became <strong>Cloud Run functions</strong>: the same event-driven, write-a-function experience, now running on and managed through <strong>Cloud Run</strong>. Functions and container services share one serverless platform, features and console, so teams can mix both styles.',
    tags: ['Cloud Run functions', 'Serverless']
  },
  {
    id: 'gcp-cdl-fc-348',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'How do Cloud Run revisions make releases safer?',
    hint: 'Every deploy is kept and can share traffic.',
    back: 'Every deployment creates an <strong>immutable revision</strong>. You can <strong>split traffic</strong> between revisions by percentage (for example 5% to the new one), <strong>tag</strong> a revision for testing without live traffic, and <strong>roll back</strong> instantly by sending traffic to a previous revision, with no downtime.',
    tags: ['Cloud Run', 'Release management']
  },
  {
    id: 'gcp-cdl-fc-349',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What do you give up by choosing serverless?',
    hint: 'Convenience costs some control.',
    back: 'Less control over the <strong>underlying environment</strong>: no custom kernel modules or OS choices, platform limits on things like request timeouts and instance resources, and possible <strong>cold starts</strong>. In return you get no server management, automatic scaling and pay-per-use pricing. Workloads needing full OS control belong on VMs.',
    tags: ['Serverless', 'Trade-offs']
  },
  {
    id: 'gcp-cdl-fc-350',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Order Compute Engine, GKE and Cloud Run from most control to least management effort.',
    hint: 'VMs, orchestrated containers, serverless containers.',
    back: '<strong>Compute Engine</strong>: most control (full OS), most management. <strong>GKE</strong>: control over Kubernetes workloads and (in Standard) nodes; Autopilot removes node management. <strong>Cloud Run</strong>: least management, no infrastructure to see, but least low-level control. Pick the least-managed option that still meets the workload\'s requirements.',
    tags: ['Compute options', 'Platform choice']
  }
];

export default GCP_CDL_FLASHCARDS_14;
