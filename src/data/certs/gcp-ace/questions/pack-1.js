export const GCP_ACE_QUESTIONS = [
  {
    id: "gcp-ace-1",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Deploying a Container to Google Kubernetes Engine (GKE)",
    scenario: "A developer has built a container image and pushed it to Artifact Registry. They need to run three replicas of it on an existing GKE cluster and expose it to the public internet on port 80.",
    question: "Which sequence of commands accomplishes this?",
    options: [
      { id: 'A', text: "gcloud container clusters resize CLUSTER --num-nodes=3, then kubectl apply -f service.yaml" },
      { id: 'B', text: "kubectl run app --image=IMAGE, then kubectl expose pod app --type=ClusterIP --port=80" },
      { id: 'C', text: "kubectl create deployment app --image=IMAGE --replicas=3, then kubectl expose deployment app --type=LoadBalancer --port=80 --target-port=8080" },
      { id: 'D', text: "gcloud compute instances create-with-container app --container-image=IMAGE, repeated three times" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A Deployment manages the desired replica count and rolling updates, and a Service of type LoadBalancer provisions a Google Cloud external load balancer with a public IP. Creating individual container VMs (B) bypasses the cluster entirely, a bare pod behind a ClusterIP (C) is neither replicated nor publicly reachable, and resizing the node pool (D) changes cluster capacity rather than deploying the workload.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/exposing-apps",
    tags: ["GKE", "kubectl", "Deployment", "LoadBalancer"]
  },
  {
    id: "gcp-ace-2",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Least Privilege IAM Role for Cloud Storage Bucket Operations",
    scenario: "An application service account must upload new objects to a Cloud Storage bucket and read them back. It must not be able to delete the bucket itself or change its IAM policy.",
    question: "Which predefined IAM role should be granted on the bucket?",
    options: [
      { id: 'A', text: "roles/storage.objectAdmin" },
      { id: 'B', text: "roles/storage.admin" },
      { id: 'C', text: "roles/editor at the project level" },
      { id: 'D', text: "roles/storage.objectViewer" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "roles/storage.objectAdmin grants full control over objects - create, read, list, and delete - without any permission over the bucket resource or its IAM policy, which is exactly the least-privilege fit. roles/storage.admin (B) adds bucket-level control including deletion, the project Editor basic role (C) is vastly over-privileged, and objectViewer (D) is read-only and cannot upload.",
    referenceUrl: "https://cloud.google.com/storage/docs/access-control/iam-roles",
    tags: ["IAM", "Cloud Storage", "Least Privilege", "Security"]
  },
  {
    id: "gcp-ace-3",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Automated VM Snapshot Lifecycle Policy",
    scenario: "An operations team must take daily backups of the persistent disks attached to a set of Compute Engine VMs and delete snapshots older than 14 days, without running any cron jobs or custom scripts.",
    question: "What should they configure?",
    options: [
      { id: 'A', text: "A snapshot schedule (resource policy) attached to the persistent disks, with a 14-day retention policy." },
      { id: 'B', text: "A Cloud Storage lifecycle rule on the bucket holding the disk images." },
      { id: 'C', text: "A Cloud Scheduler job that invokes a Cloud Function calling the snapshots.insert API." },
      { id: 'D', text: "Managed instance group auto-healing with a 14-day health check window." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Compute Engine snapshot schedules are resource policies attached to a disk: they create snapshots on a defined cadence and delete them automatically once the retention period expires, with no code to maintain. Scheduler plus a Cloud Function (B) works but is exactly the custom automation the requirement excludes, Cloud Storage lifecycle rules (C) govern objects rather than disk snapshots, and auto-healing (D) recreates unhealthy instances and has nothing to do with backups.",
    referenceUrl: "https://cloud.google.com/compute/docs/disks/scheduled-snapshots",
    tags: ["Compute Engine", "Snapshots", "Backup", "Operations"]
  },
  {
    id: "gcp-ace-4",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Unit of Billing and API Enablement",
    scenario: "A team is onboarding to Google Cloud and must decide at which level of the resource hierarchy billing accounts are linked and APIs are enabled.",
    question: "Which resource is the unit of billing, quota, and API enablement in Google Cloud?",
    options: [
      { id: 'A', text: "The VPC network." },
      { id: 'B', text: "The organization." },
      { id: 'C', text: "The project." },
      { id: 'D', text: "The folder." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A Google Cloud project is the fundamental container: it is linked to exactly one billing account, owns per-service quotas, and is where individual APIs are enabled. Folders and the organization exist to group projects and apply inherited IAM and org policies; a VPC is a networking resource that lives inside a project.",
    referenceUrl: "https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy",
    tags: ["Projects", "Resource Hierarchy", "Billing"]
  },
  {
    id: "gcp-ace-5",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Storage Class for a Yearly Compliance Archive",
    scenario: "A company must retain audit logs for seven years to satisfy regulators. The logs are expected to be read at most once a year, and a retrieval latency of milliseconds is not required, but storage cost must be as low as possible.",
    question: "Which Cloud Storage class should be used?",
    options: [
      { id: 'A', text: "Nearline." },
      { id: 'B', text: "Archive." },
      { id: 'C', text: "Coldline." },
      { id: 'D', text: "Standard." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Archive is the lowest-cost Cloud Storage class and is designed for data accessed less than once a year, with a 365-day minimum storage duration - a match for a seven-year regulatory retention requirement. Nearline (30-day minimum, monthly access) and Coldline (90-day minimum, quarterly access) cost more per GB stored, and Standard is for frequently accessed data.",
    referenceUrl: "https://cloud.google.com/storage/docs/storage-classes",
    tags: ["Cloud Storage", "Archive", "Cost"]
  },
  {
    id: "gcp-ace-6",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Exporting Logs for Long-Term SQL Analysis",
    scenario: "A platform team needs to run ad-hoc SQL analysis over two years of Cloud Logging data, but Cloud Logging retains _Default bucket logs for only 30 days.",
    question: "What is the correct way to retain and query these logs?",
    options: [
      { id: 'A', text: "Increase the retention of the _Required log bucket to 730 days." },
      { id: 'B', text: "Create a log sink with a BigQuery dataset destination and an inclusion filter for the relevant log names." },
      { id: 'C', text: "Create a log-based metric and chart it in Cloud Monitoring for two years." },
      { id: 'D', text: "Schedule a Cloud Function to page through the Logging API and write CSV files to a Compute Engine persistent disk." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A log sink routes matching entries to BigQuery, where they become queryable tables with whatever retention the dataset defines - the standard pattern for long-term log analytics. The _Required bucket has a fixed 400-day retention that cannot be changed, log-based metrics store only aggregated time-series numbers rather than log content, and hand-rolling an export to a persistent disk reinvents the sink with more operational risk.",
    referenceUrl: "https://cloud.google.com/logging/docs/export/configure_export_v2",
    tags: ["Cloud Logging", "BigQuery", "Log Sinks", "Operations"]
  },
  {
    id: "gcp-ace-7",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Pod-Level Identity Without Distributing Service Account Keys",
    scenario: "An application running in a GKE cluster must call the Cloud Storage and Pub/Sub APIs. Security policy forbids creating or distributing service account JSON keys, and each of the three microservices in the cluster must have its own distinct set of permissions.",
    question: "Which approach satisfies both requirements?",
    options: [
      { id: 'A', text: "Grant the Compute Engine default service account the Editor basic role at the project level." },
      { id: 'B', text: "Create one Google service account, download its JSON key, and mount it as a Kubernetes Secret in all three deployments." },
      { id: 'C', text: "Grant the node pool service account the union of all permissions the three microservices need." },
      { id: 'D', text: "Enable Workload Identity on the cluster and bind each Kubernetes service account to a dedicated Google service account via an IAM policy on the workloadIdentityUser role." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Workload Identity is the recommended GKE mechanism: a Kubernetes service account is bound to a Google service account through the iam.workloadIdentityUser role, and pods receive short-lived, automatically rotated credentials with no keys on disk. Options B and D collapse all three services onto one over-privileged identity, violating least privilege, and option C is exactly the key distribution the policy forbids.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity",
    tags: ["Workload Identity", "GKE", "IAM", "Security"]
  },
  {
    id: "gcp-ace-8",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Choosing Between Cloud SQL and Spanner for a Global Transactional Workload",
    scenario: "A payments service currently runs on a single regional Cloud SQL for PostgreSQL instance. The business is expanding to three continents, needs strongly consistent transactional reads and writes from all of them, expects write throughput to grow past what a single primary can absorb, and cannot tolerate a sharding rewrite in the application.",
    question: "Which migration target is appropriate?",
    options: [
      { id: 'A', text: "Bigtable with a multi-cluster routing app profile." },
      { id: 'B', text: "Cloud Spanner with a multi-region instance configuration." },
      { id: 'C', text: "Firestore in Native mode with multi-region replication." },
      { id: 'D', text: "Cloud SQL with cross-region read replicas and application-side write routing." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud Spanner is the only Google Cloud database offering horizontally scalable relational writes with external (strong) consistency across regions and SQL semantics, which removes the need for application-level sharding. Cloud SQL read replicas scale reads only - the single primary remains the write ceiling. Firestore is a document store without full relational joins, and Bigtable offers no multi-row ACID transactions or SQL query surface for this workload.",
    referenceUrl: "https://cloud.google.com/spanner/docs/instance-configurations",
    tags: ["Spanner", "Cloud SQL", "Databases", "Global Scale"]
  },
  {
    id: "gcp-ace-9",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Zero-Downtime Traffic Shifting on Cloud Run",
    scenario: "A team deploys a new revision of a Cloud Run service and wants to send 5% of production traffic to it, observe error rates for an hour, then complete the rollout - all without a redeploy and without the new revision receiving traffic the moment it is created.",
    question: "Which sequence achieves this? (Choose TWO)",
    options: [
      { id: 'A', text: "Put an external HTTP(S) Load Balancer in front of two separate Cloud Run services and split traffic with a URL map weight." },
      { id: 'B', text: "Scale the previous revision to zero instances so the new revision absorbs all requests gradually." },
      { id: 'C', text: "Use gcloud run services update-traffic --to-revisions REVISION=5 and later --to-latest to finish the rollout." },
      { id: 'D', text: "Deploy the revision with --no-traffic so it starts at 0% of traffic." },
      { id: 'E', text: "Deploy the revision normally and rely on Cloud Run sending traffic to the newest revision only after health checks pass." }
    ],
    correctAnswers: ['C', 'D'],
    type: "multiple",
    explanation: "Cloud Run has native revision-based traffic splitting. Deploying with --no-traffic creates the revision while leaving it at 0%, and update-traffic --to-revisions assigns an explicit percentage, letting you canary at 5% and later shift to 100% with --to-latest - all without redeploying. Cloud Run does not withhold traffic from the latest revision by default (C), a load balancer split (D) is a heavier alternative that duplicates the service, and scaling the old revision to zero (E) does not control traffic allocation.",
    referenceUrl: "https://cloud.google.com/run/docs/rollouts-rollbacks-traffic-migration",
    tags: ["Cloud Run", "Canary", "Traffic Splitting", "Deployment"]
  }
];

export default GCP_ACE_QUESTIONS;
