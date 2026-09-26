export const CNCF_KCNA_FLASHCARDS_20 = [
  {
    id: 'cncf-kcna-fc-476',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'What qualities does the CNCF definition say cloud native systems should have?',
    hint: 'Five adjectives plus automation.',
    back: 'The definition describes systems that are <strong>loosely coupled</strong>, <strong>resilient</strong>, <strong>manageable</strong> and <strong>observable</strong>, and that, combined with <strong>robust automation</strong>, let engineers make high-impact changes frequently and predictably with minimal toil. Containers, service meshes, microservices, immutable infrastructure and declarative APIs are named as example technologies.',
    tags: ['Cloud native', 'Definition']
  },
  {
    id: 'cncf-kcna-fc-477',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'What must a CNCF project typically show to move from Sandbox to Incubating to Graduated?',
    hint: 'Adoption, maintainers, security, governance.',
    back: '<strong>Sandbox</strong>: an early-stage project with a clear fit for the CNCF. <strong>Incubating</strong>: production use by several end users, a healthy number of committers, and a clear governance and release process. <strong>Graduated</strong>: committers from <strong>at least two organisations</strong>, a completed <strong>independent security audit</strong>, an OpenSSF Best Practices badge, documented governance and broad adoption. The TOC votes on each move.',
    tags: ['CNCF', 'Maturity levels']
  },
  {
    id: 'cncf-kcna-fc-478',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'CNCF Governing Board vs Technical Oversight Committee: who handles what?',
    hint: 'Money and marketing versus technology.',
    back: 'The <strong>Governing Board</strong>, mostly member-company representatives, oversees budget, marketing, events and business policy. The <strong>Technical Oversight Committee (TOC)</strong> defines the technical vision, accepts projects and approves maturity changes, supported by <strong>TAGs</strong> (Technical Advisory Groups) that do domain-focused work such as security reviews. Individual projects keep their own technical governance.',
    tags: ['CNCF', 'Governance']
  },
  {
    id: 'cncf-kcna-fc-479',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'How is the Kubernetes project itself governed?',
    hint: 'One committee at the top, many groups below.',
    back: 'An elected <strong>Steering Committee</strong> oversees project governance and charters groups. <strong>Special Interest Groups (SIGs)</strong> own long-lived areas such as Network, Storage or Node, with chairs and tech leads. <strong>Working Groups</strong> are temporary cross-SIG efforts, and <strong>committees</strong> handle sensitive topics such as security response and the Code of Conduct. Everything happens in public meetings, repositories and mailing lists.',
    tags: ['Kubernetes', 'Governance']
  },
  {
    id: 'cncf-kcna-fc-480',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'What is CloudEvents, and which attributes must every event carry?',
    hint: 'A common envelope, not a transport or a broker.',
    back: '<strong>CloudEvents</strong> is a CNCF graduated specification for describing event data in a common way, so producers, brokers and consumers from different vendors can interoperate. Every event must carry four context attributes: <strong>id</strong>, <strong>source</strong>, <strong>type</strong> and <strong>specversion</strong>; optional ones include time, subject and datacontenttype. Protocol bindings map events onto HTTP, Kafka, AMQP, MQTT and NATS. Knative Eventing and many cloud event services use it.',
    tags: ['CloudEvents', 'Open standards']
  },
  {
    id: 'cncf-kcna-fc-481',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'Feature gates vs API versions: which are enabled by default at each stage?',
    hint: 'Beta features and beta APIs are treated differently.',
    back: '<strong>Feature gates</strong>: alpha features are off by default; beta features are usually <strong>on</strong> by default; GA features are always on and the gate is later removed. <strong>API versions</strong>: since 1.24 (KEP-3136), <strong>new beta APIs are off by default</strong> and must be enabled with <code>--runtime-config</code>, so a beta feature that adds a new API may still need that API turned on.',
    tags: ['Feature gates', 'APIs']
  },
  {
    id: 'cncf-kcna-fc-482',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'Monolith vs microservices: what does splitting an application buy you, and what does it cost?',
    hint: 'Independence on one side, distributed-systems problems on the other.',
    back: '<strong>Gains</strong>: each service is deployed, scaled and released on its own schedule, owned by one team, can pick its own language, and a fault stays more contained. Each service should <strong>own its data</strong> rather than share one database. <strong>Costs</strong>: in-process calls become network calls (latency, retries, timeouts), consistency across services is harder, and you need service discovery, tracing and more automation. A small team with one release cadence is often better served by a well-structured monolith.',
    tags: ['Microservices', 'Architecture']
  },
  {
    id: 'cncf-kcna-fc-483',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'Which twelve-factor app principles matter most when an app runs in containers on Kubernetes?',
    hint: 'Config, state, startup and shutdown, output.',
    back: '<strong>Config</strong> in the environment, not the image, so one image moves from dev to prod. <strong>Stateless processes</strong>: keep state in backing services so any replica can serve any request. <strong>Disposability</strong>: start fast and shut down cleanly on SIGTERM. <strong>Logs</strong> as event streams to stdout. <strong>Port binding</strong>: the app serves on its own port. <strong>Concurrency</strong>: scale out by adding processes (replicas). <strong>Dev/prod parity</strong> and a strict <strong>build, release, run</strong> split complete the picture.',
    tags: ['Twelve-factor', 'Architecture']
  },
  {
    id: 'cncf-kcna-fc-484',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'FaaS vs serverless containers: how do the two serverless models differ?',
    hint: 'Hand over a function or a whole image.',
    back: '<strong>Functions as a Service</strong> (for example AWS Lambda or OpenFaaS): you supply a function in a supported language and the platform provides the runtime, triggers and scaling. <strong>Serverless containers</strong> (for example Knative Serving or Google Cloud Run): you supply any container image serving HTTP, and the platform scales it on requests, including to zero. Both remove server management and bill for use.',
    tags: ['Serverless', 'FaaS']
  },
  {
    id: 'cncf-kcna-fc-485',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'Knative Serving vs Knative Eventing: what does each provide?',
    hint: 'Handling requests versus routing events.',
    back: '<strong>Serving</strong> runs request-driven containers: Service, Revision, Route and Configuration resources, autoscaling on concurrency including to zero, and traffic splitting between revisions. <strong>Eventing</strong> routes <strong>CloudEvents</strong> from sources to consumers through Brokers and Triggers or Channels and Subscriptions, so producers and consumers stay decoupled. They can be used independently or together.',
    tags: ['Knative', 'Serverless']
  },
  {
    id: 'cncf-kcna-fc-486',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'What is a cold start, and how do serverless platforms reduce it?',
    hint: 'The price of scaling to zero.',
    back: 'A <strong>cold start</strong> is the extra latency when a request arrives and no instance is running, so the platform must schedule a pod or sandbox, pull the image and start the process. Mitigations: keep a <strong>minimum number of warm instances</strong> (for example Knative\'s min-scale annotation), use small images and fast-starting runtimes, and cache images on nodes. The trade-off is paying for idle capacity.',
    tags: ['Serverless', 'Cold start']
  },
  {
    id: 'cncf-kcna-fc-487',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'Which metric sources can a HorizontalPodAutoscaler scale on?',
    hint: 'Four metric types in autoscaling/v2.',
    back: '<strong>Resource</strong> metrics (CPU, memory) from metrics-server, as utilisation of requests or absolute values. <strong>ContainerResource</strong> for one container in the pod. <strong>Pods</strong> and <strong>Object</strong> custom metrics served through the custom metrics API (for example by the Prometheus Adapter). <strong>External</strong> metrics from outside the cluster, such as queue length, through the external metrics API, which KEDA also implements.',
    tags: ['HPA', 'Metrics']
  },
  {
    id: 'cncf-kcna-fc-488',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'What are the Vertical Pod Autoscaler\'s update modes?',
    hint: 'From advice only to live changes.',
    back: '<strong>Off</strong>: only computes recommendations. <strong>Initial</strong>: applies recommendations when pods are created, never touching running ones. <strong>Recreate</strong>: evicts pods whose requests are far from the recommendation so they restart with new values. <strong>InPlaceOrRecreate</strong> (newer releases): tries in-place pod resizing before falling back to eviction. VPA is an add-on from the Kubernetes autoscaler project, not part of core Kubernetes.',
    tags: ['VPA', 'Autoscaling']
  },
  {
    id: 'cncf-kcna-fc-489',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'Why should you not run HPA and VPA on the same CPU or memory metric for one workload?',
    hint: 'Two controllers reacting to one signal.',
    back: 'Both react to the same utilisation signal in conflicting ways: VPA raises requests, which lowers <strong>utilisation as a percentage of requests</strong>, so the HPA scales in, which raises per-pod usage, so VPA raises requests again. The result is oscillation. Combine them safely by letting the HPA scale on custom or external metrics (requests per second, queue depth) while VPA manages CPU and memory requests.',
    tags: ['HPA', 'VPA']
  },
  {
    id: 'cncf-kcna-fc-490',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'Cluster Autoscaler vs Karpenter: how do they add nodes?',
    hint: 'Node groups versus direct provisioning.',
    back: 'Both add nodes when pods are <strong>Pending</strong> for lack of capacity and remove underused nodes. The <strong>Cluster Autoscaler</strong> resizes predefined <strong>node groups</strong> (for example cloud autoscaling groups) and works across many providers. <strong>Karpenter</strong> provisions individual nodes directly, choosing instance types to fit the pending pods, and consolidates workloads onto fewer, cheaper nodes.',
    tags: ['Cluster Autoscaler', 'Karpenter']
  },
  {
    id: 'cncf-kcna-fc-491',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'Which resilience patterns help loosely coupled services survive failing dependencies?',
    hint: 'Time out, retry carefully, stop calling.',
    back: '<strong>Timeouts</strong> so a slow dependency cannot hold resources forever. <strong>Retries with exponential backoff and jitter</strong>, only for idempotent operations, to ride out brief faults. <strong>Circuit breakers</strong> that stop calling a failing service and fail fast. <strong>Bulkheads</strong> that isolate resource pools. <strong>Asynchronous queues</strong> that absorb bursts. Service meshes can apply timeouts, retries and circuit breaking without code changes.',
    tags: ['Resilience', 'Architecture']
  },
  {
    id: 'cncf-kcna-fc-492',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'DevOps engineer, SRE and platform engineer: how do their focuses differ?',
    hint: 'Culture, reliability, product for developers.',
    back: '<strong>DevOps</strong> is a culture and set of practices that joins development and operations; a DevOps engineer usually builds pipelines and automation. An <strong>SRE</strong> applies software engineering to reliability through SLOs, error budgets, incident response and toil reduction. A <strong>platform engineer</strong> builds the internal developer platform, with golden paths and self-service, as a product for other engineers.',
    tags: ['Roles', 'Personas']
  },
  {
    id: 'cncf-kcna-fc-493',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'How often does Kubernetes ship minor releases, and how long is each one supported upstream?',
    hint: 'Count releases per year, then how many release branches still get patches.',
    back: 'The project ships about <strong>three minor releases per year</strong>. The community maintains the <strong>three most recent minor versions</strong>, and each gets about <strong>14 months</strong> of patch support: 12 months of normal support plus a 2-month upgrade period. Patch releases (for example 1.34.2) arrive roughly monthly with bug and security fixes. Managed services such as EKS, AKS and GKE publish their own, often longer, support calendars.',
    tags: ['Releases', 'Kubernetes project']
  },
  {
    id: 'cncf-kcna-fc-494',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'Where does the Kubernetes community communicate and meet?',
    hint: 'Chat, lists, video calls and conferences.',
    back: 'The <strong>Kubernetes Slack</strong> (slack.k8s.io) with per-SIG channels, <strong>mailing lists</strong> on Google Groups, recorded <strong>SIG and community meetings</strong> on public calendars, GitHub issues and pull requests, and the discussion forum. In person, the community gathers at <strong>KubeCon + CloudNativeCon</strong> and local Kubernetes Community Days, where maintainers run contributor summits.',
    tags: ['Community', 'Communication']
  },
  {
    id: 'cncf-kcna-fc-495',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'What stages does a Kubernetes Enhancement Proposal move through?',
    hint: 'Idea, agreed, done.',
    back: 'A KEP starts <strong>provisional</strong> (the SIG agrees the problem is worth solving), becomes <strong>implementable</strong> once design, test plan, graduation criteria and a production readiness review are approved, and ends <strong>implemented</strong> when the feature reaches GA. It may also be marked deferred, rejected, withdrawn or replaced. The release team tracks KEPs per release against enhancement and code freeze dates.',
    tags: ['KEP', 'Community']
  },
  {
    id: 'cncf-kcna-fc-496',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'What are the rungs of the Kubernetes contributor ladder, and what does each allow?',
    hint: 'From membership to ownership.',
    back: '<strong>Member</strong>: an active contributor, sponsored by two reviewers, who can be assigned issues and trigger tests. <strong>Reviewer</strong>: listed in OWNERS files, reviews code and gives <code>/lgtm</code>. <strong>Approver</strong>: accepts changes for a directory with <code>/approve</code>. <strong>Subproject owner</strong>: sets technical direction for a subproject. Each step requires a record of sustained, quality contributions.',
    tags: ['Contributor ladder', 'Community']
  },
  {
    id: 'cncf-kcna-fc-497',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'Which licence do most CNCF projects use, and why does it matter to adopters?',
    hint: 'Permissive, with a patent grant.',
    back: 'CNCF projects are normally licensed under <strong>Apache License 2.0</strong>, a permissive licence that allows commercial use, modification and redistribution and includes an explicit <strong>patent grant</strong> from contributors. Combined with neutral CNCF ownership of trademarks, this lets competing companies build products on the same projects without fear of one vendor changing the terms.',
    tags: ['Licensing', 'CNCF']
  },
  {
    id: 'cncf-kcna-fc-498',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'What are CNCF TAGs, and how can a newcomer use them?',
    hint: 'Advisory groups by domain.',
    back: '<strong>Technical Advisory Groups</strong> support the TOC in domains such as security, observability, app delivery, network and runtime. They publish white papers (for example on platforms or cloud native security), review projects applying for maturity levels, and hold open meetings. Newcomers can join a TAG\'s meetings or Slack channel to learn a domain and contribute without writing project code.',
    tags: ['CNCF', 'TAGs']
  },
  {
    id: 'cncf-kcna-fc-499',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'How do KEDA and the HPA work together?',
    hint: 'KEDA handles zero; the HPA handles one to many.',
    back: 'For each ScaledObject, KEDA does two things: it <strong>activates</strong> the workload from zero to one replica when its scaler (queue length, Kafka lag, cron, Prometheus query and many more) detects work, and back to zero when idle; and it creates and feeds an <strong>HPA</strong> through the external metrics API to scale between one and the maximum. KEDA is a graduated CNCF project.',
    tags: ['KEDA', 'HPA']
  },
  {
    id: 'cncf-kcna-fc-500',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'What is the difference between declarative and imperative APIs, and why is declarative central to cloud native?',
    hint: 'What you want versus how to get there.',
    back: 'An <strong>imperative</strong> API takes commands that perform steps ("start three containers"). A <strong>declarative</strong> API stores the <strong>desired state</strong> ("three replicas should exist") and controllers continuously reconcile reality towards it, retrying after failures. Declarative state can be versioned, reviewed and reapplied idempotently, which enables self-healing, GitOps and the operator pattern.',
    tags: ['Declarative APIs', 'Principles']
  }
];

export default CNCF_KCNA_FLASHCARDS_20;
