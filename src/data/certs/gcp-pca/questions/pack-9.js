export const GCP_PCA_QUESTIONS_9 = [
  {
    id: "gcp-pca-201",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Terraform Drift Detection and Automated GitOps Reconciliation",
    scenario: "A platform team uses Terraform to manage cloud infrastructure. A junior engineer manually alters a firewall rule through the Google Cloud console, creating configuration drift.",
    question: "How can the platform team detect and reconcile configuration drift automatically?",
    options: [
      { id: 'A', text: "Run automated periodic terraform plan jobs in CI/CD (or use Google Cloud Config Controller / Config Sync) to alert on deviations and reapply the declared code" },
      { id: 'B', text: "Disable the Google Cloud console permanently" },
      { id: 'C', text: "Terraform automatically reverts console changes in real time without tooling" },
      { id: 'D', text: "Delete the state file" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configuration drift occurs when cloud resources are modified out-of-band. Running scheduled `terraform plan -detailed-exitcode` in a CI/CD pipeline detects differences between real infrastructure and the state file, enabling automated alerting or re-applying declared state via GitOps tools like Config Sync.",
    referenceUrl: "https://cloud.google.com/docs/terraform/best-practices-for-terraform#drift",
    tags: ["Terraform", "Drift Detection", "GitOps"]
  },
  {
    id: "gcp-pca-202",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Apigee Hybrid Architecture: Management Plane vs Runtime Plane",
    scenario: "A global bank deploys Apigee API Management. Due to strict financial data privacy regulations, API request and response payloads must never leave the bank's on-premises Kubernetes cluster.",
    question: "Which Apigee deployment model hosts the runtime data plane on customer infrastructure while hosting the management plane in Google Cloud?",
    options: [
      { id: 'A', text: "Cloud Endpoints ESPv2" },
      { id: 'B', text: "Cloud Load Balancing basic routing" },
      { id: 'C', text: "Apigee Hybrid" },
      { id: 'D', text: "Apigee X (Fully Managed SaaS)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`Apigee Hybrid` decouples the management plane from the runtime data plane. The management plane runs in Google Cloud (governance, UI, analytics), while the runtime plane (Message Processors, Envoy proxies) runs in customer-managed Kubernetes clusters on-premises, keeping payload data completely within customer boundaries.",
    referenceUrl: "https://cloud.google.com/apigee/docs/hybrid/v1.11/what-is-hybrid",
    tags: ["Apigee", "Apigee Hybrid", "API Management"]
  },
  {
    id: "gcp-pca-203",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Cloud Dataflow Flex Templates for Parameterized Batch Pipelines",
    scenario: "A software vendor distributes standardized Apache Beam data processing pipelines to 50 enterprise customers. Customers need to customize input Cloud Storage paths and BigQuery destinations via simple REST or gcloud parameters.",
    question: "Which Cloud Dataflow packaging format bundles pipeline logic as a container image with dynamic runtime parameter specification?",
    options: [
      { id: 'A', text: "Dataflow Flex Templates" },
      { id: 'B', text: "Dataflow Classic Templates" },
      { id: 'C', text: "Custom Python virtual environments" },
      { id: 'D', text: "Shell scripts on Compute Engine" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Dataflow Flex Templates` package Apache Beam pipelines into Docker container images stored in Artifact Registry. Flex Templates separate pipeline construction from execution, allowing users to pass dynamic parameters at runtime without recompiling code or maintaining local SDK environments.",
    referenceUrl: "https://cloud.google.com/dataflow/docs/guides/templates/overview#flex-templates",
    tags: ["Dataflow", "Flex Templates", "Apache Beam"]
  },
  {
    id: "gcp-pca-204",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Anthos Service Mesh Ingress Gateway vs Classic GKE Ingress",
    scenario: "A cloud architect is designing ingress for a microservice mesh. The application requires advanced traffic management including HTTP header-based routing, mTLS client certificate termination, and weighted canary splitting at the mesh entry point.",
    question: "Which component serves as the intelligent edge entry point for traffic entering an Anthos Service Mesh?",
    options: [
      { id: 'A', text: "NodePort Service" },
      { id: 'B', text: "Anthos Service Mesh Ingress Gateway (Istio Ingress Gateway)" },
      { id: 'C', text: "Standard GKE Ingress Controller" },
      { id: 'D', text: "External TCP Proxy Load Balancer alone" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `ASM Ingress Gateway` is a dedicated Envoy-based proxy deployed at the edge of the mesh. It terminates incoming client traffic, enforces mesh-level security policies, and routes traffic dynamically to backend mesh services based on Istio VirtualService and Gateway routing rules.",
    referenceUrl: "https://cloud.google.com/service-mesh/docs/gateways",
    tags: ["Anthos Service Mesh", "Ingress Gateway", "Istio"]
  },
  {
    id: "gcp-pca-205",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Cloud Deploy Promotion and Rollback Automation",
    scenario: "A software release deployed to a production GKE cluster via Google Cloud Deploy starts generating an unexpected spike in HTTP 500 errors.",
    question: "Which Google Cloud Deploy operation instantly switches the target cluster back to the previous successful release manifest?",
    options: [
      { id: 'A', text: "Execute a Rollback in Google Cloud Deploy (e.g. gcloud deploy targets rollback)" },
      { id: 'B', text: "Run git revert and trigger a 30-minute full build pipeline" },
      { id: 'C', text: "Delete the GKE cluster and recreate it" },
      { id: 'D', text: "Manually edit Kubernetes deployments using kubectl edit" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Cloud Deploy natively supports instant rollbacks. Executing a `Rollback` command instructs Cloud Deploy to immediately redeploy the last known successful release artifact to the target GKE cluster, minimizing MTTR without waiting for code rebuilds.",
    referenceUrl: "https://cloud.google.com/deploy/docs/rollback-release",
    tags: ["Cloud Deploy", "Rollback", "Continuous Delivery"]
  },
  {
    id: "gcp-pca-206",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Apigee API Proxies: Flow Execution Order",
    scenario: "An API developer is writing an Apigee API proxy that validates an OAuth 2.0 token, enforces rate limits, transforms an XML backend response into JSON, and strips internal headers.",
    question: "In which execution flow sections should the OAuth validation and XML-to-JSON transformation be placed respectively?",
    options: [
      { id: 'A', text: "OAuth in PostFlow; XML-to-JSON in PreFlow" },
      { id: 'B', text: "Both in the ProxyEndpoint PreFlow" },
      { id: 'C', text: "Both in the TargetEndpoint PostFlow" },
      { id: 'D', text: "OAuth validation in the ProxyEndpoint PreFlow (inbound); XML-to-JSON transformation in the ProxyEndpoint PostFlow (outbound)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In Apigee, incoming client requests pass through the `ProxyEndpoint PreFlow` where security checks (OAuth, rate-limiting) execute before routing to the target. Outgoing responses return through the `ProxyEndpoint PostFlow` where final transformations (XML to JSON, header stripping) are applied.",
    referenceUrl: "https://cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-flows",
    tags: ["Apigee", "API Proxies", "Flow Architecture"]
  },
  {
    id: "gcp-pca-207",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Migrate to Virtual Machines Wave Planning and Groups",
    scenario: "An enterprise data center migration involves moving 500 virtual machines to Google Cloud. Several multi-tier applications consist of interconnected web, app, and database servers that must be cut over simultaneously.",
    question: "Which Migrate to Virtual Machines feature groups interdependent VMs to ensure synchronized replication and cutover?",
    options: [
      { id: 'A', text: "Migration Groups" },
      { id: 'B', text: "Compute Engine Instance Templates" },
      { id: 'C', text: "VPC Network Tags" },
      { id: 'D', text: "Resource Manager Folders" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Migration Groups` in Migrate to Virtual Machines allow architects to organize related, interdependent servers (e.g. all VMs in a multi-tier ERP system) into a single logical entity. Groups allow administrators to schedule synchronized replication, test-cloning, and coordinated cutovers.",
    referenceUrl: "https://cloud.google.com/migrate/virtual-machines/docs/5.0/how-to/grouping-vms",
    tags: ["Migrate to Virtual Machines", "Migration Groups", "Migration Planning"]
  },
  {
    id: "gcp-pca-208",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Cloud Dataflow Dynamic Work Rebalancing for Straggler Mitigation",
    scenario: "A batch Dataflow pipeline experiences performance delays where one worker VM processes a massive split for hours while all other workers sit idle.",
    question: "Which built-in Cloud Dataflow capability automatically splits uncompleted work from slow workers and redistributes it to available idle workers?",
    options: [
      { id: 'A', text: "Dynamic Work Rebalancing" },
      { id: 'B', text: "Static partitioning" },
      { id: 'C', text: "Manual cluster resizing" },
      { id: 'D', text: "Cloud Pub/Sub batching" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Dataflow `Dynamic Work Rebalancing` continuously monitors processing progress across workers. If it detects straggler workers struggling with oversized partitions, it automatically splits the remaining unread portions of the work and assigns them to idle workers, eliminating pipeline bottlenecks.",
    referenceUrl: "https://cloud.google.com/dataflow/docs/concepts/dynamic-work-rebalancing",
    tags: ["Dataflow", "Dynamic Work Rebalancing", "Optimization"]
  },
  {
    id: "gcp-pca-209",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Google Cloud Managed Service for Prometheus Custom PodMonitoring CRD",
    scenario: "A development team deploys a custom Java Spring Boot application exposing metrics at `/actuator/prometheus` on port 8080 in GKE. The team uses Google Cloud Managed Service for Prometheus (GMP).",
    question: "Which Kubernetes Custom Resource defines the metric scraping target and interval for the application pods?",
    options: [
      { id: 'A', text: "PrometheusRule" },
      { id: 'B', text: "ConfigMap alone" },
      { id: 'C', text: "ServiceMonitor alone (legacy Prometheus Operator only)" },
      { id: 'D', text: "PodMonitoring (or ClusterPodMonitoring)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Google Cloud Managed Service for Prometheus uses the `PodMonitoring` (namespace-scoped) and `ClusterPodMonitoring` (cluster-scoped) Custom Resource Definitions (CRDs). The CRD specifies the pod label selector, port, scraping interval, and metrics path for GMP to scrape automatically.",
    referenceUrl: "https://cloud.google.com/stackdriver/docs/managed-prometheus/setup-managed#gmp-pod-monitoring",
    tags: ["GKE", "GMP", "PodMonitoring"]
  },
  {
    id: "gcp-pca-210",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Anthos Config Sync Multi-Repo vs Mono-Repo Architecture",
    scenario: "An enterprise organization has a central platform security team that manages cluster-wide RBAC and network policies, and 20 autonomous application teams that manage their own Kubernetes deployments in their own namespaces.",
    question: "Which Config Sync architecture allows independent application teams to maintain their own Git repositories without sharing access to the root cluster repository?",
    options: [
      { id: 'A', text: "Multi-Repo Architecture (Root repository + Namespace repositories)" },
      { id: 'B', text: "Mono-Repo Architecture with full cluster admin access for all developers" },
      { id: 'C', text: "Manual kubectl apply via local terminals" },
      { id: 'D', text: "Storing all manifests in Cloud Storage buckets without Git" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Config Sync supports `Multi-Repo Architecture`. A centralized platform team manages a `RootSync` repository governing cluster-wide policies (CRDs, cluster roles, network policies), while individual app teams manage independent `RepoSync` repositories scoped strictly to their own namespaces.",
    referenceUrl: "https://cloud.google.com/anthos-config-management/docs/how-to/multi-repo",
    tags: ["Anthos Config Management", "Config Sync", "Multi-Repo"]
  },
  {
    id: "gcp-pca-211",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Migrate to Virtual Machines Test-Clone Verification",
    scenario: "Before executing a production cutover of an on-premises database server to Compute Engine, the database administrator needs to test that the migrated VM boots cleanly, without impacting ongoing continuous data replication.",
    question: "Which Migrate to Virtual Machines feature boots a sandbox copy of the migrated instance for non-disruptive testing?",
    options: [
      { id: 'A', text: "Pre-migration assessment" },
      { id: 'B', text: "Storage snapshot alone" },
      { id: 'C', text: "Test-Clone" },
      { id: 'D', text: "Cutover" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Migrate to Virtual Machines supports `Test-Clone`. Test-Clone creates a temporary, fully functional Compute Engine instance from the replicated disk state in an isolated test VPC. The test clone boots cleanly for validation while background replication continues uninterrupted.",
    referenceUrl: "https://cloud.google.com/migrate/virtual-machines/docs/5.0/how-to/test-clone",
    tags: ["Migrate to Virtual Machines", "Test-Clone", "Migration Validation"]
  },
  {
    id: "gcp-pca-212",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Cloud Dataflow Exactly-Once Processing Semantics",
    scenario: "A financial payment processing pipeline in Cloud Dataflow ingests transactions from Cloud Pub/Sub and updates account balance records in BigQuery. The business demands that no transaction is ever processed twice or missed.",
    question: "How does Cloud Dataflow ensure exactly-once processing for streaming data?",
    options: [
      { id: 'A', text: "Through automated message deduplication, checkpointing, and end-to-end exactly-once sinks integrating with Cloud Pub/Sub and BigQuery" },
      { id: 'B', text: "By running single-threaded workers with no retries" },
      { id: 'C', text: "Pub/Sub guarantees exactly-once delivery natively under all conditions without Dataflow" },
      { id: 'D', text: "By discarding all duplicate messages after 1 hour" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Dataflow delivers `exactly-once processing` for streaming pipelines. Dataflow tracks message unique IDs from sources like Pub/Sub, detects and discards duplicates during streaming shuffles, and utilizes atomic, transactional mutations when writing to sinks like BigQuery.",
    referenceUrl: "https://cloud.google.com/blog/products/gcp/after-a-storm-comes-a-calm-predictable-data-processing-with-cloud-dataflow",
    tags: ["Dataflow", "Exactly-Once", "Streaming Integrity"]
  },
  {
    id: "gcp-pca-213",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Apigee Quotas vs Spike Arrest Policies",
    scenario: "An API provider needs to protect backend services from sudden short-term traffic spikes (e.g. preventing more than 20 requests per second) and separately enforce business monetization limits (e.g. 50,000 calls per month per customer).",
    question: "Which two Apigee policies enforce short-term infrastructure smoothing and long-term business limits respectively?",
    options: [
      { id: 'A', text: "Quota for short-term rate smoothing; SpikeArrest for long-term limits" },
      { id: 'B', text: "SpikeArrest for short-term rate smoothing; Quota for long-term business consumption limits" },
      { id: 'C', text: "Quota for both scenarios" },
      { id: 'D', text: "SpikeArrest for both scenarios" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Apigee, `SpikeArrest` protects backend servers against sudden, unexpected traffic bursts by smoothing traffic over milliseconds/seconds (e.g. 20 requests per second). `Quota` enforces contractual business tier consumption limits measured over days, weeks, or months.",
    referenceUrl: "https://cloud.google.com/apigee/docs/api-platform/reference/policies/spike-arrest-policy",
    tags: ["Apigee", "SpikeArrest", "Quota Policy"]
  },
  {
    id: "gcp-pca-214",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Google Cloud Deploy Canary Automated Traffic Stepping",
    scenario: "A continuous delivery pipeline in Google Cloud Deploy deploys an update to GKE. The rollout must start at 10%, automatically advance to 50% after 1 hour of stable metrics, and complete at 100%.",
    question: "Where is this progressive canary schedule defined in Google Cloud Deploy?",
    options: [
      { id: 'A', text: "In Cloud Monitoring alert rules" },
      { id: 'B', text: "In the Kubernetes Service manifest alone" },
      { id: 'C', text: "In the Dockerfile ENTRYPOINT command" },
      { id: 'D', text: "In the Delivery Pipeline configuration using the canary phase with defined percentages and runtime routing" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Google Cloud Deploy supports declarative `Canary deployment strategies` within the Delivery Pipeline definition. Architects specify phased percentages (e.g. `10%`, `50%`, `100%`) and configure automated verification hooks between phases to automate progressive promotions.",
    referenceUrl: "https://cloud.google.com/deploy/docs/canary-service-mesh",
    tags: ["Cloud Deploy", "Canary Strategy", "Progressive Rollout"]
  },
  {
    id: "gcp-pca-215",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Cloud Data Fusion Private Instances and Peering",
    scenario: "An enterprise deploys a Cloud Data Fusion instance to extract data from an on-premises Oracle database reachable via Cloud Interconnect. Security requires that Data Fusion must not use public IP endpoints.",
    question: "Which Cloud Data Fusion configuration provisions the tenant execution environment inside a private network peered with the customer VPC?",
    options: [
      { id: 'A', text: "Private Cloud Data Fusion Instance (with VPC Network Peering)" },
      { id: 'B', text: "Public Data Fusion instance with firewall rules" },
      { id: 'C', text: "Cloud NAT on the tenant project" },
      { id: 'D', text: "Cloud Data Fusion cannot connect to private on-premises databases" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A `Private Cloud Data Fusion Instance` deploys the CDAP control plane and execution engines in a Google-managed tenant project that communicates with customer VPC networks exclusively via VPC Network Peering and private RFC 1918 IP addresses, ensuring zero public exposure.",
    referenceUrl: "https://cloud.google.com/data-fusion/docs/how-to/create-private-ip",
    tags: ["Cloud Data Fusion", "Private IP", "VPC Peering"]
  },
  {
    id: "gcp-pca-216",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Anthos Service Mesh AuthorizationPolicy for Zero-Trust L7 Security",
    scenario: "In a multi-service GKE cluster running Anthos Service Mesh, the `payments` microservice must only accept HTTP POST requests on path `/charge` originating from the authenticated `checkout` service account.",
    question: "Which Istio security resource enforces Layer 7 client identity, path, and HTTP method authorization in Anthos Service Mesh?",
    options: [
      { id: 'A', text: "PeerAuthentication (which handles mTLS encryption mode only)" },
      { id: 'B', text: "AuthorizationPolicy" },
      { id: 'C', text: "VPC Firewall Rule" },
      { id: 'D', text: "Kubernetes NetworkPolicy (which operates only at Layer 3/4)" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`AuthorizationPolicy` in Anthos Service Mesh provides fine-grained Layer 7 access control. It evaluates source identity (SPIFFE ID matching service account `checkout`), target service, HTTP methods (`POST`), and request paths (`/charge`), enforcing strict zero-trust application authorization.",
    referenceUrl: "https://cloud.google.com/service-mesh/docs/security/authorization-policy",
    tags: ["Anthos Service Mesh", "AuthorizationPolicy", "Zero-Trust"]
  },
  {
    id: "gcp-pca-217",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Cloud Deploy Parallel Deployment to Multiple Regional Clusters",
    scenario: "A global SaaS application needs to deploy release updates simultaneously to 10 GKE clusters across Europe, North America, and Asia in parallel.",
    question: "Which Google Cloud Deploy feature enables concurrent deployment across a group of target clusters?",
    options: [
      { id: 'A', text: "Multi-Target / Parallel Deployments" },
      { id: 'B', text: "Sequential promotion pipelines only" },
      { id: 'C', text: "Running 10 separate manual commands" },
      { id: 'D', text: "Cloud Functions batch triggers" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Cloud Deploy supports `Multi-Target Deployments` (Parallel Deployments). By defining a multi-target consisting of multiple child targets (e.g. regional GKE clusters), Cloud Deploy renders and applies Kubernetes manifests to all target clusters concurrently.",
    referenceUrl: "https://cloud.google.com/deploy/docs/multi-targets",
    tags: ["Cloud Deploy", "Multi-Target", "Parallel Rollouts"]
  },
  {
    id: "gcp-pca-218",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Datastream Stream Metrics and Troubleshooting Connection Profiles",
    scenario: "A real-time CDC replication pipeline in Datastream stops streaming data from an on-premises MySQL database. The database administrator confirms the database is running normally.",
    question: "Which Datastream component stores the network routing, host IP, credentials, and CDC log position for the source database?",
    options: [
      { id: 'A', text: "BigQuery Destination Profile" },
      { id: 'B', text: "Connection Profile" },
      { id: 'C', text: "Private Connectivity configuration alone" },
      { id: 'D', text: "Stream Definition alone" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Datastream, a `Connection Profile` encapsulates the configuration, credentials, network connectivity method (IP whitelisting, Forward-SSH tunnel, or Private Connectivity via VPC peering), and database-specific settings for communicating with a source or destination data store.",
    referenceUrl: "https://cloud.google.com/datastream/docs/connection-profiles",
    tags: ["Datastream", "Connection Profile", "CDC"]
  },
  {
    id: "gcp-pca-219",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Google Cloud Migration Wave Prioritization Strategies",
    scenario: "An enterprise architect is structuring a multi-wave datacenter migration plan for 300 business applications.",
    question: "How should applications be categorized and sequenced across migration waves to minimize business risk?",
    options: [
      { id: 'A', text: "Migrate the most complex, mission-critical core database in Wave 1" },
      { id: 'B', text: "Migrate all 300 applications in a single weekend cutover" },
      { id: 'C', text: "Migrate applications in alphabetical order by application name" },
      { id: 'D', text: "Start with low-complexity, non-critical stateless applications to validate network and IAM patterns, followed by interconnected business systems, and migrate high-complexity core transactional databases last" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enterprise migration best practices recommend sequencing waves from lowest risk/complexity to highest. Beginning with simple stateless or internal dev/test apps validates landing zones, networking, and CI/CD pipelines before tackling business-critical, high-dependency core databases.",
    referenceUrl: "https://cloud.google.com/architecture/migration-to-gcp-planning-workspace#categorize-workloads",
    tags: ["Migration Planning", "Migration Waves", "Best Practices"]
  },
  {
    id: "gcp-pca-220",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Cloud Dataflow Streaming Engine for Offloaded State and Autoscaling",
    scenario: "A streaming pipeline on Cloud Dataflow experiences high memory pressure and slow shuffle execution when maintaining large stateful windows across millions of user sessions.",
    question: "Which Cloud Dataflow architectural feature offloads window state storage and shuffle operations from worker VM RAM to dedicated Google backend infrastructure?",
    options: [
      { id: 'A', text: "Dataflow Streaming Engine" },
      { id: 'B', text: "Batch Engine" },
      { id: 'C', text: "Persistent Disk SSD striping" },
      { id: 'D', text: "Cloud Memorystore integration" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Dataflow Streaming Engine` offloads streaming shuffle and state management from worker VMs to a specialized, dedicated Google cloud service. This reduces worker VM resource consumption (allowing smaller worker VMs), improves autoscaling responsiveness, and provides smoother throughput.",
    referenceUrl: "https://cloud.google.com/dataflow/docs/streaming-engine",
    tags: ["Dataflow", "Streaming Engine", "Stateful Processing"]
  },
  {
    id: "gcp-pca-221",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Anthos Service Mesh PeerAuthentication for Strict mTLS Enforcement",
    scenario: "A compliance policy requires that all communication between services inside a GKE cluster must use mutual TLS encryption and reject any unencrypted plain-text HTTP connections.",
    question: "Which Anthos Service Mesh resource enforces strict mTLS cluster-wide or per-namespace?",
    options: [
      { id: 'A', text: "PeerAuthentication with mode: STRICT" },
      { id: 'B', text: "PeerAuthentication with mode: PERMISSIVE" },
      { id: 'C', text: "AuthorizationPolicy with action: ALLOW" },
      { id: 'D', text: "Kubernetes NetworkPolicy" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`PeerAuthentication` defines how traffic is encrypted in transit between workloads in Anthos Service Mesh. Setting `mode: STRICT` enforces that incoming connections must use mutual TLS (mTLS), immediately rejecting any legacy unencrypted plain-text traffic.",
    referenceUrl: "https://cloud.google.com/service-mesh/docs/security/peer-authentication",
    tags: ["Anthos Service Mesh", "PeerAuthentication", "mTLS"]
  },
  {
    id: "gcp-pca-222",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Apigee Analytics for API Traffic Patterns and Latency Profiling",
    scenario: "An enterprise API operations team investigates latency issues. The team needs to analyze average backend response times vs proxy response times grouped by developer app and geographic location.",
    question: "Which Apigee feature provides interactive dashboards and custom reports analyzing API performance and usage metrics?",
    options: [
      { id: 'A', text: "Apigee Analytics" },
      { id: 'B', text: "Cloud Monitoring Metrics Explorer alone" },
      { id: 'C', text: "BigQuery Billing Export" },
      { id: 'D', text: "Cloud Trace alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Apigee Analytics` tracks operational and business API metrics in real time. Dashboards visualize traffic volume, error rates, proxy latency, target backend latency, developer app activity, and geographic traffic distribution to optimize API performance and governance.",
    referenceUrl: "https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-services-overview",
    tags: ["Apigee", "Apigee Analytics", "Observability"]
  },
  {
    id: "gcp-pca-223",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Migrate to Virtual Machines OS Adaptation Engine",
    scenario: "When migrating on-premises Windows and Linux virtual machines to Compute Engine, the instances often have hardware-specific hypervisor drivers (e.g. VMware Tools) that cause boot failures in KVM.",
    question: "How does Migrate to Virtual Machines adapt guest operating systems to boot successfully on Compute Engine?",
    options: [
      { id: 'A', text: "Administrators must manually rebuild all OS kernels on-premises prior to migration" },
      { id: 'B', text: "The built-in OS Adaptation Engine automatically injects Google Cloud virtio storage/network drivers and installs Google guest environment packages during migration" },
      { id: 'C', text: "The VM must be converted to an unmanaged Docker container" },
      { id: 'D', text: "Compute Engine runs VMware ESXi natively under all conditions" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Migrate to Virtual Machines includes an automated `OS Adaptation Engine`. During the migration process, it automatically modifies the guest operating system: injecting required `virtio` drivers, configuring serial consoles, installing the Google Guest Agent, and disabling proprietary hypervisor tools.",
    referenceUrl: "https://cloud.google.com/migrate/virtual-machines/docs/5.0/how-to/os-adaptation",
    tags: ["Migrate to Virtual Machines", "OS Adaptation", "Virtio Drivers"]
  },
  {
    id: "gcp-pca-224",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Terraform State Locking Mechanism in Google Cloud Storage",
    scenario: "Two DevOps engineers simultaneously execute `terraform apply` targeting the same Google Cloud infrastructure repository.",
    question: "How does the Terraform GCS backend prevent concurrent state file corruption?",
    options: [
      { id: 'A', text: "Cloud Storage uses object generation numbers to achieve atomic state locking; the second terraform apply fails immediately with an Error acquiring the state lock" },
      { id: 'B', text: "The second apply silently overwrites the changes of the first apply" },
      { id: 'C', text: "Terraform merges both plans automatically using Git merge algorithms" },
      { id: 'D', text: "Cloud Storage pauses the second engineer's laptop" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Terraform `gcs` backend uses Google Cloud Storage object generation preconditions (match-generation) to implement distributed state locking. When an engineer starts `terraform apply`, Terraform locks the state. Any concurrent execution trying to acquire the lock fails with an error.",
    referenceUrl: "https://cloud.google.com/docs/terraform/resource-management/store-state#state-locking",
    tags: ["Terraform", "State Locking", "GCS Backend"]
  },
  {
    id: "gcp-pca-225",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Cloud Deploy Phased Canary Promotion Verification Failure Handling",
    scenario: "A continuous delivery pipeline in Google Cloud Deploy is promoted to 25% canary traffic on a production GKE cluster. The automated Verify phase tests fail with high latency errors.",
    question: "What action does Google Cloud Deploy take when a verification test fails during a canary rollout?",
    options: [
      { id: 'A', text: "Cloud Deploy deletes the entire GKE cluster" },
      { id: 'B', text: "Cloud Deploy terminates all worker nodes in the zone" },
      { id: 'C', text: "Cloud Deploy marks the rollout as failed, halts further percentage promotion, and allows immediate automated or manual rollback to the previous release" },
      { id: 'D', text: "Cloud Deploy automatically promotes to 100% anyway" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When an automated `Verify` step in Cloud Deploy fails, Cloud Deploy immediately halts the promotion pipeline, marks the rollout status as `FAILED`, prevents traffic from escalating to the next canary phase, and allows operators or automated hooks to trigger an instant rollback.",
    referenceUrl: "https://cloud.google.com/deploy/docs/verify-deployment#how_verification_works",
    tags: ["Cloud Deploy", "Canary Verification", "Failure Handling"]
  }
];

export default GCP_PCA_QUESTIONS_9;
