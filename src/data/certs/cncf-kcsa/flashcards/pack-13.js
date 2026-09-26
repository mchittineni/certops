export const CNCF_KCSA_FLASHCARDS_13 = [
  {
    id: "cncf-kcsa-fc-301",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Which data flows belong on a Kubernetes data-flow diagram?",
    hint: "Follow requests into, around and out of the control plane.",
    back: "Users and CI to the <strong>API server</strong>; API server to <strong>etcd</strong>; API server to <strong>kubelets</strong> (exec, logs) and to <strong>webhooks</strong> and aggregated APIs; kubelets to the API server and to the <strong>container runtime</strong>; pods to the API server, to each other and to external services; <strong>ingress</strong> traffic to pods; and registries to nodes for image pulls. Mark where each flow crosses a trust boundary.",
    tags: ["Data flow","Threat model"]
  },
  {
    id: "cncf-kcsa-fc-302",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Why is the API server the key control point in a Kubernetes data-flow diagram?",
    hint: "Who talks to etcd?",
    back: "Every component and user reads and writes state <strong>through the API server</strong>, and it is the <strong>only client of etcd</strong>. Each request passes <strong>authentication, authorization, admission and audit</strong> there. Anything that reaches state another way (direct etcd access, node filesystem changes such as static pods) bypasses all four and must be modelled as a separate path.",
    tags: ["Data flow","kube-apiserver"]
  },
  {
    id: "cncf-kcsa-fc-303",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Push-based CI deploys vs pull-based GitOps: where do cluster credentials live?",
    hint: "Which side initiates the connection?",
    back: "<strong>Push</strong>: the CI system holds a kubeconfig or token and connects into the cluster, so compromising CI (or a plugin) compromises the cluster. <strong>Pull</strong>: an in-cluster controller (Argo CD, Flux) uses its own in-cluster identity to fetch from Git; CI never holds cluster credentials. The Git repository and its branch protection become the critical trust point instead.",
    tags: ["GitOps","CI/CD","Trust boundaries"]
  },
  {
    id: "cncf-kcsa-fc-304",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "What data does an admission webhook receive, and why does that matter?",
    hint: "Full objects, not summaries.",
    back: "An <strong>AdmissionReview</strong> with the <strong>full object</strong> (and the old object on updates), plus the requesting user. A webhook matching Secrets receives their values. Scope rules to the resources and operations actually needed, keep webhooks in-cluster where possible, protect their endpoints, and treat the webhook service as part of the control plane's trust boundary.",
    tags: ["Admission webhooks","Data flow"]
  },
  {
    id: "cncf-kcsa-fc-305",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "How does a service account token audience limit replay?",
    hint: "The aud claim and the API server's accepted audiences.",
    back: "Projected tokens carry an <strong>aud</strong> claim chosen in the pod spec (<code>serviceAccountToken.audience</code>). The API server accepts only tokens for its own audiences (<code>--api-audiences</code>), so a token minted for an external service, such as Vault, <strong>cannot be replayed</strong> against the Kubernetes API by whoever receives it. Legacy Secret-based tokens have no such binding and never expire.",
    tags: ["Service accounts","Token audience"]
  },
  {
    id: "cncf-kcsa-fc-306",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Where along its path is a Secret plaintext when encryption at rest is enabled?",
    hint: "Encryption at rest covers one hop.",
    back: "<strong>Encrypted</strong>: in etcd and its backups. <strong>Plaintext</strong>: in API server memory, inside TLS on the wire to the kubelet, on the node's <strong>tmpfs</strong> volume or in the container environment, and in the application. So node root, API server compromise and any identity with get on the Secret all see plaintext; encryption at rest defends only against etcd and backup exposure.",
    tags: ["Secrets","Data flow"]
  },
  {
    id: "cncf-kcsa-fc-307",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Which Kubernetes objects do attackers commonly abuse for persistence?",
    hint: "Things that recreate, inject or grant.",
    back: "<strong>CronJobs</strong> and <strong>Deployments or DaemonSets</strong> that recreate backdoor pods; <strong>static pod manifests</strong> on nodes; <strong>mutating admission webhooks</strong> that inject containers; <strong>RoleBindings and ClusterRoleBindings</strong> granting extra access; long-lived <strong>service account token Secrets</strong>; and <strong>writable hostPath</strong> mounts used to change the node. Alert on their creation in audit logs.",
    tags: ["Persistence"]
  },
  {
    id: "cncf-kcsa-fc-308",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Kubernetes-level vs node-level persistence: how does cleanup differ?",
    hint: "API objects vs files on a host.",
    back: "<strong>Kubernetes-level</strong> persistence (CronJobs, webhooks, RoleBindings, token Secrets) lives in the API: find it with audit logs and Git diffs, delete the objects and rotate credentials. <strong>Node-level</strong> persistence (static pod manifests, SSH keys, cron, altered binaries via hostPath or escape) lives on hosts: drain and <strong>rebuild the node</strong>. Incidents often involve both.",
    tags: ["Persistence","Incident response"]
  },
  {
    id: "cncf-kcsa-fc-309",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "After an incident, how do you hunt for RBAC-based persistence?",
    hint: "Bindings, subjects, timestamps.",
    back: "List all <strong>RoleBindings and ClusterRoleBindings</strong> and review subjects that are unknown, external, or broad groups such as <code>system:authenticated</code> and <code>system:unauthenticated</code>; compare with Git; check <strong>creation timestamps</strong> and audit events for the incident window; look for new or edited <strong>ClusterRoles</strong>, including aggregation labels; and check cloud IAM mappings on managed clusters.",
    tags: ["Persistence","RBAC"]
  },
  {
    id: "cncf-kcsa-fc-310",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Why does a write directly to etcd defeat Kubernetes audit logging?",
    hint: "Audit lives in the API server.",
    back: "Auditing, authentication, authorization and admission all run <strong>inside the API server</strong>. A client writing straight to etcd with an etcd client certificate skips every one of them, so the object appears with <strong>no audit event</strong>. Objects with no creation record in complete logs are a strong sign of etcd credential compromise: rotate etcd certificates and restrict network access to 2379.",
    tags: ["etcd","Audit logging","Persistence"]
  },
  {
    id: "cncf-kcsa-fc-311",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Why is a node rebuilt rather than cleaned after a container escape?",
    hint: "You cannot enumerate everything an attacker changed.",
    back: "Once an attacker writes to the host (via hostPath, privileged containers or an escape), they may have planted SSH keys, cron jobs, altered binaries or kubelet configuration that survive pod deletion. Deleting pods or restarting the kubelet cannot prove the host is clean. <strong>Cordon, drain, preserve evidence, and replace the node</strong> from a trusted image, then rotate anything the node could read.",
    tags: ["Incident response","Node compromise"]
  },
  {
    id: "cncf-kcsa-fc-312",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "How does GitOps help detect attacker persistence?",
    hint: "Git is the declared state.",
    back: "If Git declares everything that should exist, <strong>drift</strong> (objects changed in the cluster) and <strong>unmanaged or orphaned resources</strong> (objects Git never declared) are suspect by definition. Argo CD and Flux can report both, so a backdoor DaemonSet or RoleBinding stands out whatever its name. Combine with audit logs to see who created it.",
    tags: ["GitOps","Detection"]
  },
  {
    id: "cncf-kcsa-fc-313",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "What kinds of denial of service does a Kubernetes threat model cover?",
    hint: "Control plane, nodes, workloads, wallet.",
    back: "<strong>Control plane</strong>: API server request floods, etcd growth from object or event storms. <strong>Nodes</strong>: CPU, memory, PID and disk exhaustion that starves the kubelet and runtime. <strong>Workloads</strong>: application-level floods and noisy neighbours. <strong>Availability controls</strong> that fail closed, such as webhooks. <strong>Cost</strong>: autoscaling without ceilings, known as denial of wallet.",
    tags: ["Denial of service","Threat model"]
  },
  {
    id: "cncf-kcsa-fc-314",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "In what order does the kubelet evict pods under node pressure?",
    hint: "QoS class and usage relative to requests.",
    back: "Pods whose usage <strong>exceeds their requests</strong> go first, ranked by priority and then by how far they exceed; <strong>BestEffort</strong> pods (no requests) are therefore early victims, <strong>Burstable</strong> pods over their requests next, and <strong>Guaranteed</strong> pods within their limits last. Setting requests protects critical workloads when a neighbour exhausts memory or disk.",
    tags: ["Denial of service","QoS"]
  },
  {
    id: "cncf-kcsa-fc-315",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "How do object count quotas protect the control plane?",
    hint: "A count/ prefix plus a resource name.",
    back: "A ResourceQuota can cap the number of objects per namespace with <code>count/&lt;resource&gt;.&lt;group&gt;</code>, such as <code>count/configmaps</code>, <code>count/secrets</code> or <code>count/jobs.batch</code>. That stops one tenant's runaway automation from filling etcd and slowing the API server for everyone. Core objects such as pods, services and PVCs have dedicated quota names.",
    tags: ["ResourceQuota","Denial of service"]
  },
  {
    id: "cncf-kcsa-fc-316",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "How do --max-requests-inflight and --max-mutating-requests-inflight relate to API Priority and Fairness?",
    hint: "One total, split into shares.",
    back: "With APF enabled, the two flags are <strong>added together</strong> to set the API server's total concurrency limit, which APF then <strong>divides among priority levels</strong> by their configured shares. Raising them increases capacity for everyone; isolating a noisy client is done with FlowSchemas and priority levels, not by these flags alone.",
    tags: ["API Priority and Fairness","kube-apiserver"]
  },
  {
    id: "cncf-kcsa-fc-317",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "kube-reserved, system-reserved and eviction thresholds: how do they protect a node?",
    hint: "Allocatable = capacity minus reservations minus eviction threshold.",
    back: "<strong>kube-reserved</strong> sets aside resources for the kubelet and runtime; <strong>system-reserved</strong> for OS daemons. <strong>Hard eviction thresholds</strong> (for example <code>memory.available&lt;100Mi</code>) make the kubelet evict pods before the kernel OOM killer hits daemons. Node allocatable is capacity minus these, so pods cannot schedule into the reserved headroom.",
    tags: ["Kubelet","Node resources"]
  },
  {
    id: "cncf-kcsa-fc-318",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "API Priority and Fairness vs EventRateLimit vs ResourceQuota: which denial of service does each address?",
    hint: "Request rate, event writes, stored objects and resources.",
    back: "<strong>APF</strong>: shares API server <strong>concurrency</strong> fairly so one client's request flood cannot starve others, reads included. <strong>EventRateLimit</strong>: caps the <strong>rate of Event creation</strong> at server, namespace, user or object scope. <strong>ResourceQuota</strong>: caps <strong>what a namespace may hold</strong>, object counts and compute. None limits application traffic, which belongs at the edge.",
    tags: ["Denial of service","API Priority and Fairness"]
  },
  {
    id: "cncf-kcsa-fc-319",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "How do you stop tenants from using a high PriorityClass to preempt others?",
    hint: "Quota can gate priority.",
    back: "Configure the <strong>ResourceQuota admission plugin</strong> with <code>limitedResources</code> matching pods of that PriorityClass, so they are admitted <strong>only</strong> in namespaces with a ResourceQuota whose <code>scopeSelector</code> covers the class. Give that quota to platform namespaces only. Tenants without it cannot create pods at that priority, removing their ability to evict others.",
    tags: ["PriorityClass","ResourceQuota"]
  },
  {
    id: "cncf-kcsa-fc-320",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "What is denial of wallet, and which Kubernetes controls bound it?",
    hint: "Autoscaling turns traffic into spend.",
    back: "An attacker drives load that makes autoscalers add pods and nodes, so the damage is <strong>cost</strong> rather than downtime. Bound it with <strong>maxReplicas</strong> on HorizontalPodAutoscalers, <strong>ResourceQuota</strong> per namespace, <strong>maximum node group sizes</strong> in the cluster autoscaler, edge rate limiting, and billing alerts.",
    tags: ["Denial of service","Cost"]
  },
  {
    id: "cncf-kcsa-fc-321",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Which outbound connections does the API server itself make, and why do they matter?",
    hint: "The control plane is also a client.",
    back: "To <strong>etcd</strong>, to <strong>kubelets</strong> for exec, logs and port-forward, to <strong>admission webhooks</strong>, to <strong>aggregated API servers</strong>, to authentication and authorization <strong>webhooks</strong>, and to <strong>KMS plugins</strong>. Each carries sensitive data or decisions, so each needs TLS with verification, and each endpoint becomes part of the control plane's trust boundary.",
    tags: ["Data flow","kube-apiserver"]
  },
  {
    id: "cncf-kcsa-fc-322",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Why should a cluster-admin operator or privileged DaemonSet be modelled as its own trust boundary?",
    hint: "Its supply chain is your cluster's supply chain.",
    back: "Whoever controls its <strong>image, Helm chart or update channel</strong> inherits its privileges: cluster-wide API rights for an operator, host access on <strong>every node</strong> for a privileged DaemonSet. Reduce RBAC to what it reconciles, pin images by digest, verify signatures at admission, restrict who can change its namespace, and watch its API activity in audit logs.",
    tags: ["Operators","DaemonSets","Supply chain"]
  },
  {
    id: "cncf-kcsa-fc-323",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Namespace admin vs cluster-admin: what is the blast radius of each if compromised?",
    hint: "RoleBinding scope and what the namespace holds.",
    back: "<strong>Namespace admin</strong> (admin role via RoleBinding): every Secret and workload in that namespace, any service account there, and whatever those accounts can reach, which may be more if powerful accounts share the namespace. <strong>Cluster-admin</strong>: everything, including nodes via privileged pods and all cluster-scoped objects. Keep powerful identities out of tenant namespaces so namespace admin stays contained.",
    tags: ["Blast radius","RBAC"]
  },
  {
    id: "cncf-kcsa-fc-324",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "What does a PodDisruptionBudget protect against, and what does it not?",
    hint: "Voluntary vs involuntary disruptions.",
    back: "It limits <strong>voluntary</strong> disruptions through the eviction API, such as node drains and cluster upgrades, by keeping a minimum number (or maximum unavailable) of pods. It does <strong>not</strong> protect against involuntary ones: node crashes, kernel OOM kills, or direct pod deletion. For availability of security components such as admission webhooks, pair it with multiple replicas spread across nodes.",
    tags: ["Availability","PodDisruptionBudget"]
  },
  {
    id: "cncf-kcsa-fc-325",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "During incident response, how do you check for malicious admission webhooks?",
    hint: "Two cluster-scoped kinds, and where they send requests.",
    back: "List <code>mutatingwebhookconfigurations</code> and <code>validatingwebhookconfigurations</code>. For each, check the <strong>clientConfig</strong> (in-cluster Service or external URL), the <strong>rules</strong> (which resources and operations it sees), <strong>namespaceSelector</strong> and <strong>failurePolicy</strong>, and match the object against Git and against audit events showing who created it. An unknown mutating webhook matching pods is a prime persistence suspect.",
    tags: ["Admission webhooks","Incident response"]
  }
];

export default CNCF_KCSA_FLASHCARDS_13;
