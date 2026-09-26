export const CNCF_KCSA_FLASHCARDS_12 = [
  {
    id: "cncf-kcsa-fc-276",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "What does system:anonymous in an audit event tell you?",
    hint: "The request carried no credentials the API server accepted.",
    back: "The request was <strong>unauthenticated</strong> and anonymous authentication is enabled, so it was assigned user <code>system:anonymous</code> in group <code>system:unauthenticated</code>. Any <strong>allowed</strong> anonymous request other than health and version checks deserves investigation: it usually means a binding grants rights to those subjects. Disable anonymous auth or restrict it to health endpoints where possible.",
    tags: ["Audit logging","Anonymous auth"]
  },
  {
    id: "cncf-kcsa-fc-277",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "How is a named port in a NetworkPolicy resolved?",
    hint: "Per pod, not per policy.",
    back: "A named port (for example <code>port: metrics</code>) is matched against the <strong>containerPort names of each selected pod</strong>, so different pods can map the same name to different numbers and one rule stays correct for all of them. Services play no part. A named port cannot be combined with <code>endPort</code>.",
    tags: ["NetworkPolicy","Named ports"]
  },
  {
    id: "cncf-kcsa-fc-278",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "How do you change the audit policy on a self-managed control plane, and what does it take effect on?",
    hint: "It is a file, not an API object.",
    back: "Edit the file named by <code>--audit-policy-file</code> on <strong>every control plane node</strong> and <strong>restart each kube-apiserver</strong>; the policy is read at startup. There is no API object for it, since the alpha dynamic audit (AuditSink) API was removed. Keep policy files identical across API servers or events will differ by which server handled a request.",
    tags: ["Audit policy","Operations"]
  },
  {
    id: "cncf-kcsa-fc-279",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Which fields can an audit policy rule match on?",
    hint: "Who, what, where, and paths.",
    back: "<strong>users</strong> and <strong>userGroups</strong> (who), <strong>verbs</strong> (what action), <strong>resources</strong> with group, resource names and optional <code>resourceNames</code>, <strong>namespaces</strong> (where), and <strong>nonResourceURLs</strong> such as <code>/healthz*</code>. A rule matches when all its fields match; per rule you can also set <code>omitStages</code> and <code>omitManagedFields</code>.",
    tags: ["Audit policy"]
  },
  {
    id: "cncf-kcsa-fc-280",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Audit webhook modes batch, blocking and blocking-strict: what does each trade off?",
    hint: "Availability vs guaranteed records.",
    back: "<strong>batch</strong> (webhook default): events buffered and sent asynchronously; fast, but events can be dropped if the buffer overflows. <strong>blocking</strong>: each request waits for its events to be processed, yet proceeds if delivery fails. <strong>blocking-strict</strong>: like blocking, but a delivery failure at <strong>RequestReceived</strong> fails the whole request, so no change happens unaudited.",
    tags: ["Audit logging","Webhook backend"]
  },
  {
    id: "cncf-kcsa-fc-281",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Which audit annotations explain why a request was allowed or denied?",
    hint: "They live under the authorization.k8s.io prefix.",
    back: "<code>authorization.k8s.io/decision</code> records <strong>allow</strong> or <strong>forbid</strong>; <code>authorization.k8s.io/reason</code> gives the human-readable reason, which for RBAC names the <strong>RoleBinding or ClusterRoleBinding and role</strong> that granted access. They appear even at Metadata level, so an investigator can reconstruct access decisions after bindings change.",
    tags: ["Audit logging","RBAC"]
  },
  {
    id: "cncf-kcsa-fc-282",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Which flags tune the audit webhook backend in batch mode?",
    hint: "Buffer, batch size, wait time, throttle.",
    back: "<code>--audit-webhook-batch-buffer-size</code> (events queued before new ones are dropped), <code>--audit-webhook-batch-max-size</code> (events per request), <code>--audit-webhook-batch-max-wait</code> (longest wait before sending a partial batch), and <code>--audit-webhook-batch-throttle-qps</code> / <code>-burst</code>. A buffer that is too small silently drops events when the collector is slow.",
    tags: ["Audit logging","Webhook backend"]
  },
  {
    id: "cncf-kcsa-fc-283",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Which audit event fields identify who made a request and from where?",
    hint: "Four fields cover the caller.",
    back: "<strong>user</strong> (username, groups, extra) for the authenticated identity; <strong>impersonatedUser</strong> when the caller used impersonation; <strong>sourceIPs</strong> for the client address chain; <strong>userAgent</strong> for the client program. Combined with <code>verb</code>, <code>objectRef</code> and <code>responseStatus</code>, they answer who did what to which object and whether it worked.",
    tags: ["Audit logging","Forensics"]
  },
  {
    id: "cncf-kcsa-fc-284",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Audit log backend rotation: which flags keep the file from filling the disk?",
    hint: "Size, count and age.",
    back: "<code>--audit-log-maxsize</code> (MB before rotation), <code>--audit-log-maxbackup</code> (rotated files to keep) and <code>--audit-log-maxage</code> (days to keep old files). Without them one file grows forever. Ship logs off the node as well, since local files are also exposed to anyone with root on the control plane.",
    tags: ["Audit logging","Operations"]
  },
  {
    id: "cncf-kcsa-fc-285",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "If any pod creator can set labels, how far can a podSelector-based allow rule be trusted?",
    hint: "Who controls the label controls the policy.",
    back: "Only as far as <strong>pod creation rights</strong> in that namespace: anyone who can create pods there can label one to match and inherit the allowed path. For sensitive targets, select clients by a <strong>namespaceSelector</strong> on a namespace only administrators can write to, restrict who may create pods, or add identity-aware controls such as mesh mTLS authorization that check a workload's service account.",
    tags: ["NetworkPolicy","Labels","Threat model"]
  },
  {
    id: "cncf-kcsa-fc-286",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Can a NetworkPolicy allow traffic for one container in a pod but not another?",
    hint: "Count the network namespaces in a pod.",
    back: "<strong>No.</strong> All containers in a pod share <strong>one network namespace and IP</strong>, and NetworkPolicy selects pods, so whatever one container may reach, every container in that pod may reach. To separate a sidecar's access from the application's, put it in its own pod or use a control that understands process or workload identity.",
    tags: ["NetworkPolicy","Pod networking"]
  },
  {
    id: "cncf-kcsa-fc-287",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Ingress rule with no from field vs empty ingress list: allow or deny?",
    hint: "An empty rule matches everything; no rules match nothing.",
    back: "<code>ingress: [ {} ]</code> or a rule listing only ports with no <code>from</code> means <strong>allow from all sources</strong>, including outside the cluster. <code>ingress: []</code> (or no ingress rules) with the Ingress policy type means <strong>allow nothing</strong>. The same holds for egress rules without <code>to</code>. Mixing them up turns a lockdown into an open door.",
    tags: ["NetworkPolicy","Rules"]
  },
  {
    id: "cncf-kcsa-fc-288",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "In a from or to list, when are namespaceSelector and podSelector ANDed and when ORed?",
    hint: "Count the dashes.",
    back: "<strong>Same list element</strong> (one dash): <strong>AND</strong>, meaning pods matching podSelector inside namespaces matching namespaceSelector. <strong>Separate elements</strong> (two dashes): <strong>OR</strong>, meaning any pod in matching namespaces, or matching pods in the policy's own namespace. One stray dash turns a tight rule into a wide one.",
    tags: ["NetworkPolicy","Selectors"]
  },
  {
    id: "cncf-kcsa-fc-289",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Can a NetworkPolicy deny traffic, and how do multiple policies combine?",
    hint: "Allow lists only.",
    back: "Standard NetworkPolicies contain <strong>only allow rules</strong>. Policies selecting the same pod combine as a <strong>union</strong>: traffic is allowed if any policy allows it. There is no ordering or priority, so you cannot carve out an exception with a second policy; narrow the allowing policy instead. Deny and priority need AdminNetworkPolicy or CNI-specific resources.",
    tags: ["NetworkPolicy","Additive rules"]
  },
  {
    id: "cncf-kcsa-fc-290",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "How should you verify that a NetworkPolicy does what you intended?",
    hint: "Test both the allowed and the denied paths.",
    back: "Launch short-lived test pods with the <strong>allowed labels and namespace</strong> and with <strong>wrong ones</strong>, then try connections (curl, nc) to the target port and to a port that should stay closed. Check both directions when egress is also locked down, including DNS. CNI tooling such as Cilium Hubble or Calico flow logs shows which policy dropped a flow, since NetworkPolicy itself logs nothing.",
    tags: ["NetworkPolicy","Testing"]
  },
  {
    id: "cncf-kcsa-fc-291",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "namespaceSelector: {} vs podSelector: {} in a from list: what does each match?",
    hint: "Scope of the empty selector.",
    back: "<code>namespaceSelector: {}</code> matches <strong>every namespace</strong> in the cluster, so on its own it admits all pods everywhere (but no external IPs). <code>podSelector: {}</code> on its own matches <strong>all pods in the policy's own namespace</strong> only. Combine both in one entry with a non-empty podSelector to admit, say, Prometheus pods from any namespace.",
    tags: ["NetworkPolicy","Selectors"]
  },
  {
    id: "cncf-kcsa-fc-292",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "When should a NetworkPolicy use ipBlock instead of selectors?",
    hint: "Inside vs outside the cluster.",
    back: "Use <strong>ipBlock</strong> for destinations or sources <strong>outside the cluster</strong>, such as partner networks, with <code>except</code> to carve out subranges. Use <strong>pod and namespace selectors</strong> for anything inside, because pod IPs are ephemeral. Beware that ingress through load balancers or NAT may rewrite source IPs, making ipBlock ingress rules unreliable.",
    tags: ["NetworkPolicy","ipBlock"]
  },
  {
    id: "cncf-kcsa-fc-293",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "If policyTypes is omitted, which directions does a NetworkPolicy govern?",
    hint: "One is always assumed.",
    back: "<strong>Ingress is always assumed</strong>; <strong>Egress</strong> is included only if the policy has at least one egress rule. So a policy with an empty <code>egress</code> list and no policyTypes does <strong>not</strong> isolate egress. Always set policyTypes explicitly, especially for deny-style policies.",
    tags: ["NetworkPolicy","policyTypes"]
  },
  {
    id: "cncf-kcsa-fc-294",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "In a NetworkPolicy, what does spec.podSelector select?",
    hint: "Targets, not clients.",
    back: "The pods the policy <strong>applies to</strong>: the ones being isolated and protected, in the policy's own namespace. Allowed clients go in <code>ingress.from</code> and allowed destinations in <code>egress.to</code>. Putting client labels in spec.podSelector isolates the clients instead and leaves the intended target open.",
    tags: ["NetworkPolicy","podSelector"]
  },
  {
    id: "cncf-kcsa-fc-295",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "For pod A to connect to pod B, which policies must allow it?",
    hint: "Two ends, two directions.",
    back: "If A is isolated for egress, some policy selecting A must allow <strong>egress to B</strong>. If B is isolated for ingress, some policy selecting B must allow <strong>ingress from A</strong>. Both must hold. In namespaces with default-deny in both directions, every new path needs a matching pair of rules.",
    tags: ["NetworkPolicy","Ingress","Egress"]
  },
  {
    id: "cncf-kcsa-fc-296",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "What happens to an audit event that exceeds the truncation size limit?",
    hint: "Two steps, then the event is dropped.",
    back: "With truncation enabled (<code>--audit-log-truncate-enabled</code> or the webhook equivalent), an event larger than <code>...-truncate-max-event-size</code> first loses its <strong>request and response bodies</strong>; if it is still too large it is <strong>discarded</strong>. Batches larger than <code>...-truncate-max-batch-size</code> are split. Forensics that depend on bodies should keep events small (for example with <code>omitManagedFields</code>) rather than rely on truncation.",
    tags: ["Audit logging","Truncation"]
  },
  {
    id: "cncf-kcsa-fc-297",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "What format does the audit webhook backend configuration file use?",
    hint: "The same format kubectl uses to find a cluster.",
    back: "A <strong>kubeconfig</strong> file, passed with <code>--audit-webhook-config-file</code>: the cluster entry gives the collector URL and CA, and the user entry gives the client credentials the API server presents. The API server POSTs batches of audit events to it as JSON <code>EventList</code> objects.",
    tags: ["Audit logging","Webhook backend"]
  },
  {
    id: "cncf-kcsa-fc-298",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Which omitManagedFields and omitStages settings shrink audit logs, and what does each drop?",
    hint: "One trims bodies, the other drops whole events.",
    back: "<code>omitManagedFields: true</code> (policy-wide or per rule) strips <code>metadata.managedFields</code> from logged request and response bodies, keeping the rest of each object. <code>omitStages</code> drops entire stage events, commonly <strong>RequestReceived</strong>, which duplicates the later ResponseComplete event. Neither loses the per-request record if ResponseComplete is kept.",
    tags: ["Audit policy","Cost"]
  },
  {
    id: "cncf-kcsa-fc-299",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Where do audit logs come from on managed Kubernetes such as EKS, GKE or AKS?",
    hint: "You do not own the API server flags.",
    back: "The provider runs the API server, so you enable audit logging in its <strong>control plane logging</strong> settings: EKS sends the <strong>audit</strong> log type to CloudWatch Logs, GKE writes Kubernetes API activity to <strong>Cloud Audit Logs</strong>, and AKS exports <strong>kube-audit</strong> through diagnostic settings. The provider's own cloud audit trail (for example CloudTrail) covers its management API, not requests inside the cluster.",
    tags: ["Audit logging","Managed Kubernetes"]
  },
  {
    id: "cncf-kcsa-fc-300",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Which audit events are worth alerting on for signs of compromise?",
    hint: "Privilege, persistence, secrets, anonymous access.",
    back: "Creation of <strong>ClusterRoleBindings or RoleBindings</strong> to powerful roles; <strong>pods/exec</strong> and <strong>pods/attach</strong> into production pods; <strong>list or get on secrets</strong> by unusual identities; new <strong>mutating or validating webhooks</strong>; privileged or hostPath pods; <strong>serviceaccounts/token</strong> requests; allowed requests from <code>system:anonymous</code>; and bursts of forbidden responses that suggest enumeration.",
    tags: ["Audit logging","Detection"]
  }
];

export default CNCF_KCSA_FLASHCARDS_12;
