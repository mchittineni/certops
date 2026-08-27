export const GCP_ACE_FLASHCARDS = [
  {
    id: 'gcp-ace-fc-1',
    difficulty: 'easy',
    certId: 'gcp-ace',
    domainId: 'd1',
    front: 'What is the Google Cloud resource hierarchy, and where can IAM policies attach?',
    hint: 'Four levels, and inheritance flows one way.',
    back: 'Organization → Folder → Project → Resource. IAM policies can be set at every level and are <strong>inherited downward</strong>; the effective policy on a resource is the union of its own policy and all ancestors. A project is the unit of billing, quota, and API enablement.',
    tags: ['IAM', 'Resource Hierarchy', 'Governance']
  },
  {
    id: 'gcp-ace-fc-2',
    difficulty: 'medium',
    certId: 'gcp-ace',
    domainId: 'd5',
    front: 'Basic roles vs. predefined roles vs. custom roles',
    hint: 'One of them is discouraged in production.',
    back: '<strong>Basic</strong> — Owner/Editor/Viewer, project-wide and far too broad; avoid in production. <strong>Predefined</strong> — service-specific, curated and maintained by Google (e.g. roles/storage.objectViewer). <strong>Custom</strong> — you pick the individual permissions; you own the maintenance when Google adds new ones.',
    tags: ['IAM', 'Roles', 'Security']
  },
  {
    id: 'gcp-ace-fc-3',
    difficulty: 'easy',
    certId: 'gcp-ace',
    domainId: 'd3',
    front: 'Compute Engine vs. GKE vs. Cloud Run vs. App Engine vs. Cloud Functions',
    hint: 'VM, cluster, container-serverless, PaaS, FaaS.',
    back: '<strong>Compute Engine</strong> — raw VMs, full OS control. <strong>GKE</strong> — managed Kubernetes (Standard = you size node pools, Autopilot = per-pod, Google manages nodes). <strong>Cloud Run</strong> — any stateless container, scales to zero, request-based. <strong>App Engine</strong> — opinionated PaaS for web apps. <strong>Cloud Functions</strong> — single-purpose event handlers.',
    tags: ['Compute Engine', 'GKE', 'Cloud Run', 'Compute']
  },
  {
    id: 'gcp-ace-fc-4',
    difficulty: 'medium',
    certId: 'gcp-ace',
    domainId: 'd2',
    front: 'Which database: Cloud SQL, Spanner, Firestore, Bigtable, or BigQuery?',
    hint: 'Relational, global relational, document, wide-column, warehouse.',
    back: '<strong>Cloud SQL</strong> — managed MySQL/PostgreSQL/SQL Server, regional, up to tens of TB. <strong>Spanner</strong> — horizontally scalable relational with global strong consistency. <strong>Firestore</strong> — serverless document store for mobile/web with realtime sync. <strong>Bigtable</strong> — petabyte wide-column NoSQL, single-digit-ms, time-series/IoT. <strong>BigQuery</strong> — serverless analytics warehouse for SQL over huge datasets.',
    tags: ['Cloud SQL', 'Spanner', 'BigQuery', 'Databases']
  },
  {
    id: 'gcp-ace-fc-5',
    difficulty: 'easy',
    certId: 'gcp-ace',
    domainId: 'd2',
    front: 'Cloud Storage classes and their minimum storage durations.',
    hint: 'Four classes, same API and latency.',
    back: '<strong>Standard</strong> (no minimum) · <strong>Nearline</strong> (30 days) · <strong>Coldline</strong> (90 days) · <strong>Archive</strong> (365 days). All four give millisecond first-byte latency — you trade a lower storage price for a higher retrieval price and an early-deletion charge.',
    tags: ['Cloud Storage', 'Lifecycle', 'Cost']
  },
  {
    id: 'gcp-ace-fc-6',
    difficulty: 'medium',
    certId: 'gcp-ace',
    domainId: 'd1',
    front: 'What is special about a Google Cloud VPC compared with other clouds?',
    hint: 'It is not regional.',
    back: 'A VPC network is a <strong>global</strong> resource; subnets are regional. Instances in different regions on the same VPC talk over private IPs with no peering required. Routes and firewall rules are global; firewall rules are stateful and target by network tag or service account.',
    tags: ['VPC', 'Networking']
  },
  {
    id: 'gcp-ace-fc-7',
    difficulty: 'medium',
    certId: 'gcp-ace',
    domainId: 'd4',
    front: 'What are the four Cloud Operations (ex-Stackdriver) pillars?',
    hint: 'Metrics, logs, traces, plus two debugging tools.',
    back: '<strong>Cloud Monitoring</strong> — metrics, dashboards, uptime checks, alerting policies. <strong>Cloud Logging</strong> — log ingestion, log-based metrics, sinks to GCS/BigQuery/Pub/Sub. <strong>Cloud Trace</strong> — distributed latency traces. <strong>Cloud Profiler</strong> — continuous CPU/heap profiling in production.',
    tags: ['Cloud Monitoring', 'Cloud Logging', 'Operations']
  },
  {
    id: 'gcp-ace-fc-8',
    difficulty: 'medium',
    certId: 'gcp-ace',
    domainId: 'd3',
    front: 'Which gcloud/kubectl commands get you a working GKE kubeconfig?',
    hint: 'One command does it.',
    back: '<code>gcloud container clusters get-credentials CLUSTER --region REGION --project PROJECT</code> writes the context into ~/.kube/config. Then <code>kubectl config current-context</code> to confirm. <code>gcloud config set project</code> changes the active project for subsequent commands.',
    tags: ['gcloud', 'GKE', 'CLI']
  },
  {
    id: 'gcp-ace-fc-9',
    difficulty: 'hard',
    certId: 'gcp-ace',
    domainId: 'd2',
    front: 'Preemptible/Spot VMs, committed use discounts, sustained use discounts — what applies automatically?',
    hint: 'One requires no action at all.',
    back: '<strong>Sustained use discounts</strong> apply automatically as an instance runs a larger share of the month (Compute Engine, no commitment). <strong>Committed use discounts</strong> require a 1- or 3-year commitment for up to ~57–70% off. <strong>Spot VMs</strong> give 60–91% off but can be preempted at any time with a 30-second notice, and Spot VMs have no maximum runtime (legacy preemptible VMs capped at 24 h).',
    tags: ['Pricing', 'Spot VMs', 'Cost']
  },
  {
    id: 'gcp-ace-fc-10',
    difficulty: 'hard',
    certId: 'gcp-ace',
    domainId: 'd5',
    front: 'Service account best practice on Google Cloud.',
    hint: 'Do not download the key.',
    back: 'Attach a dedicated, least-privilege service account to the workload and let the metadata server issue short-lived tokens — do not create and distribute JSON keys. For GKE use <strong>Workload Identity</strong> to bind a Kubernetes service account to a Google service account. For cross-boundary access use service account impersonation.',
    tags: ['Service Accounts', 'Workload Identity', 'Security']
  }
];

export default GCP_ACE_FLASHCARDS;
