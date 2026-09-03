export const GCP_PCA_FLASHCARDS_9 = [
  {
    id: "gcp-pca-fc-201",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Terraform: Drift Detection",
    hint: "Identifying manual out-of-band cloud changes.",
    back: "Schedule automated <strong>terraform plan drift detection jobs</strong> in CI/CD to detect manual console modifications and re-apply compliant declarative state.",
    tags: ["Terraform", "Drift Detection", "GitOps"]
  },
  {
    id: "gcp-pca-fc-202",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Apigee Hybrid: Decoupled Runtime Plane",
    hint: "Hosting API proxies on-premises for data sovereignty.",
    back: "<strong>Apigee Hybrid</strong> runs API runtime proxies inside customer-managed Kubernetes clusters while retaining centralized Google Cloud policy management.",
    tags: ["Apigee", "Apigee Hybrid", "API Management"]
  },
  {
    id: "gcp-pca-fc-203",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Dataflow Flex Templates: Reusable Containerized Pipelines",
    hint: "Dynamic runtime parameterization for Beam.",
    back: "<strong>Dataflow Flex Templates</strong> package Apache Beam code into Docker images, allowing operators to run pipelines with dynamic parameters via CLI or REST APIs.",
    tags: ["Dataflow", "Flex Templates", "Apache Beam"]
  },
  {
    id: "gcp-pca-fc-204",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    front: "ASM Ingress Gateway: Mesh Boundary Traffic Control",
    hint: "Envoy-driven ingress proxy for service mesh.",
    back: "The <strong>ASM Ingress Gateway</strong> acts as the intelligent edge of the service mesh, terminating client traffic and enforcing Istio routing and security policies.",
    tags: ["Anthos Service Mesh", "Ingress Gateway", "Istio"]
  },
  {
    id: "gcp-pca-fc-205",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Cloud Deploy: Single-Click Target Rollback",
    hint: "Rapidly restoring previous release manifests.",
    back: "Executing a <strong>Rollback in Cloud Deploy</strong> immediately redeploys the last known successful release manifest to the cluster, restoring stability in seconds.",
    tags: ["Cloud Deploy", "Rollback", "Continuous Delivery"]
  },
  {
    id: "gcp-pca-fc-206",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Apigee Flows: PreFlow vs. PostFlow",
    hint: "Inbound security vs outbound payload transformation.",
    back: "In Apigee, place inbound security policies in the <strong>ProxyEndpoint PreFlow</strong> and outbound payload transformations in the <strong>PostFlow</strong>.",
    tags: ["Apigee", "API Proxies", "Flow Architecture"]
  },
  {
    id: "gcp-pca-fc-207",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Migrate to VMs: Migration Groups",
    hint: "Synchronized cutover for multi-tier applications.",
    back: "Organize dependent multi-tier servers into <strong>Migration Groups</strong> to coordinate synchronized replication and simultaneous cutover.",
    tags: ["Migrate to Virtual Machines", "Migration Groups", "Migration Planning"]
  },
  {
    id: "gcp-pca-fc-208",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Dataflow: Dynamic Work Rebalancing",
    hint: "Automated straggler worker mitigation.",
    back: "<strong>Dynamic Work Rebalancing</strong> splits lagging work partitions on slow workers and redistributes them to idle workers dynamically, optimizing batch execution.",
    tags: ["Dataflow", "Dynamic Work Rebalancing", "Optimization"]
  },
  {
    id: "gcp-pca-fc-209",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    front: "GMP: PodMonitoring CRD",
    hint: "Declarative scraping configuration in Kubernetes.",
    back: "Deploy a <strong>PodMonitoring CRD</strong> manifest in GKE to instruct Google Cloud Managed Service for Prometheus where and how often to scrape application metric endpoints.",
    tags: ["GKE", "GMP", "PodMonitoring"]
  },
  {
    id: "gcp-pca-fc-210",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Config Sync: Multi-Repo Architecture",
    hint: "Decoupling platform governance from application repos.",
    back: "Use <strong>Config Sync Multi-Repo mode</strong> to allow central teams to manage root cluster policies while application teams control their own namespace repositories independently.",
    tags: ["Anthos Config Management", "Config Sync", "Multi-Repo"]
  },
  {
    id: "gcp-pca-fc-211",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Migrate to VMs: Test-Clone Verification",
    hint: "Non-disruptive pre-cutover sandbox testing.",
    back: "A <strong>Test-Clone</strong> boots an isolated copy of a migrated server in Compute Engine for verification without disrupting continuous replication or impacting production.",
    tags: ["Migrate to Virtual Machines", "Test-Clone", "Migration Validation"]
  },
  {
    id: "gcp-pca-fc-212",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Dataflow: Exactly-Once Processing",
    hint: "Guaranteed single-execution streaming semantics.",
    back: "<strong>Cloud Dataflow</strong> achieves end-to-end exactly-once semantics by combining automated Pub/Sub deduplication with transactional checkpointing at the sink layer.",
    tags: ["Dataflow", "Exactly-Once", "Streaming Integrity"]
  },
  {
    id: "gcp-pca-fc-213",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Apigee: SpikeArrest vs. Quota Policy",
    hint: "Micro-burst smoothing vs business usage caps.",
    back: "Use <strong>SpikeArrest</strong> for sub-second traffic smoothing to protect backends from micro-bursts, and <strong>Quota</strong> for monthly billing tier caps.",
    tags: ["Apigee", "SpikeArrest", "Quota Policy"]
  },
  {
    id: "gcp-pca-fc-214",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Cloud Deploy: Canary Percentage Stepping",
    hint: "Automating phased traffic increments.",
    back: "Configure <strong>canary phase percentages</strong> in the Cloud Deploy Delivery Pipeline to automate stepping through 10% &rarr; 50% &rarr; 100% traffic allocations.",
    tags: ["Cloud Deploy", "Canary Strategy", "Progressive Rollout"]
  },
  {
    id: "gcp-pca-fc-215",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Data Fusion: Private Instances",
    hint: "Private network integration for enterprise data pipelines.",
    back: "Deploy <strong>Private Cloud Data Fusion instances</strong> using VPC Network Peering to access internal on-premises databases securely without public internet hops.",
    tags: ["Cloud Data Fusion", "Private IP", "VPC Peering"]
  },
  {
    id: "gcp-pca-fc-216",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Anthos Service Mesh: AuthorizationPolicy",
    hint: "Layer 7 service-to-service access rules.",
    back: "<strong>AuthorizationPolicy</strong> enforces granular Layer 7 zero-trust authorization rules, matching authenticated caller service accounts to allowed HTTP methods and URL paths.",
    tags: ["Anthos Service Mesh", "AuthorizationPolicy", "Zero-Trust"]
  },
  {
    id: "gcp-pca-fc-217",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Cloud Deploy: Multi-Target Deployments",
    hint: "Simultaneous multi-cluster releases.",
    back: "Define <strong>Multi-Targets</strong> in Cloud Deploy to roll out releases concurrently across multiple regional GKE clusters in parallel.",
    tags: ["Cloud Deploy", "Multi-Target", "Parallel Rollouts"]
  },
  {
    id: "gcp-pca-fc-218",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Datastream: Connection Profiles",
    hint: "Managing database credentials and connectivity endpoints.",
    back: "A <strong>Connection Profile</strong> stores connection parameters, credentials, and network configurations for source and destination databases in Datastream.",
    tags: ["Datastream", "Connection Profile", "CDC"]
  },
  {
    id: "gcp-pca-fc-219",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Migration Planning: Phased Wave Strategy",
    hint: "De-risking migrations by sequencing complexity.",
    back: "Begin migration waves with <strong>low-complexity, low-risk workloads</strong> to validate cloud infrastructure before migrating high-complexity core transactional databases.",
    tags: ["Migration Planning", "Migration Waves", "Best Practices"]
  },
  {
    id: "gcp-pca-fc-220",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Dataflow: Streaming Engine",
    hint: "Offloading state and shuffle to dedicated cloud infrastructure.",
    back: "Enable <strong>Streaming Engine</strong> in Cloud Dataflow to offload stateful window storage and shuffles from worker VMs to managed Google streaming infrastructure.",
    tags: ["Dataflow", "Streaming Engine", "Stateful Processing"]
  },
  {
    id: "gcp-pca-fc-221",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Anthos Service Mesh: PeerAuthentication STRICT Mode",
    hint: "Enforcing zero plain-text communication.",
    back: "Configure <strong>PeerAuthentication with mode: STRICT</strong> to enforce mandatory mutual TLS (mTLS) and reject unencrypted HTTP traffic across the mesh.",
    tags: ["Anthos Service Mesh", "PeerAuthentication", "mTLS"]
  },
  {
    id: "gcp-pca-fc-222",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Apigee Analytics: Operational & Business Intelligence",
    hint: "Measuring proxy latency and consumer usage.",
    back: "<strong>Apigee Analytics</strong> visualizes proxy latency, backend response times, error rates, and API consumer engagement across global environments.",
    tags: ["Apigee", "Apigee Analytics", "Observability"]
  },
  {
    id: "gcp-pca-fc-223",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Migrate to VMs: Automated OS Adaptation",
    hint: "Injecting cloud drivers for clean KVM boots.",
    back: "The <strong>OS Adaptation Engine</strong> injects Google Cloud virtio drivers and guest agents automatically, ensuring migrated VMware/Hyper-V servers boot cleanly on Compute Engine.",
    tags: ["Migrate to Virtual Machines", "OS Adaptation", "Virtio Drivers"]
  },
  {
    id: "gcp-pca-fc-224",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Terraform GCS Backend: Distributed State Locking",
    hint: "Preventing concurrent race conditions.",
    back: "The <strong>gcs backend locks state</strong> using Cloud Storage generation preconditions, blocking concurrent runs and preventing state corruption.",
    tags: ["Terraform", "State Locking", "GCS Backend"]
  },
  {
    id: "gcp-pca-fc-225",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Cloud Deploy: Canary Failure Halting",
    hint: "Automated promotion halting on test failures.",
    back: "Failing a <strong>Verify step in Cloud Deploy</strong> immediately halts canary promotion, locking the rollout and enabling instant rollback to safety.",
    tags: ["Cloud Deploy", "Canary Verification", "Failure Handling"]
  }
];

export default GCP_PCA_FLASHCARDS_9;
