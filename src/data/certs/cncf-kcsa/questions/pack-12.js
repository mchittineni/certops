export const CNCF_KCSA_QUESTIONS_12 = [
  {
    id: "cncf-kcsa-276",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "An audit policy that produces no log file",
    scenario: "An engineer at a regional credit union writes an audit policy, adds --audit-policy-file to the kube-apiserver static pod manifest and waits for the API server to restart. Hours later no audit file exists anywhere on the control plane node, and the API server logs show no errors about the policy.",
    question: "What is most likely missing from the API server configuration?",
    options: [
      { id: 'A', text: "A backend such as --audit-log-path or a webhook config file, because a policy alone sends events nowhere." },
      { id: 'B', text: "The AuditSink object in kube-system that tells the API server where to deliver the policy file's events." },
      { id: 'C', text: "The --enable-admission-plugins flag listing AuditLogging, which turns the policy rules into written events." },
      { id: 'D', text: "The --v=5 verbosity flag, because audit events are emitted only as part of the API server's debug output." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Auditing needs two things: a policy that decides what to record and a backend that decides where to send it. With only --audit-policy-file set, events are generated but no backend exists, so an --audit-log-path for the log backend or --audit-webhook-config-file for the webhook backend is required. The AuditSink API for dynamic audit configuration was an alpha feature that has been removed. There is no AuditLogging admission plugin; audit is not part of admission. Audit events are separate from the API server's own klog verbosity and do not need debug logging.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/",
    tags: ["Audit logging","Backends","kube-apiserver"]
  },
  {
    id: "cncf-kcsa-277",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Audit files that filled the control plane disk",
    scenario: "A manufacturing company's single control plane node went read-only overnight because its root volume filled up. The culprit was one audit log file written by the log backend that had grown for eight months. Auditors need 30 days of history kept locally before it is shipped elsewhere.",
    question: "Which API server flags address the problem?",
    options: [
      { id: 'A', text: "Set --audit-log-mode to batch so that events are buffered in memory and written in smaller compressed chunks." },
      { id: 'B', text: "Set --audit-log-truncate-enabled so that each event is shortened and the file grows far more slowly each day." },
      { id: 'C', text: "Set --event-ttl to 720h so that the API server deletes audit entries older than 30 days from the log file." },
      { id: 'D', text: "Set --audit-log-maxage to 30 plus --audit-log-maxsize and --audit-log-maxbackup so that files rotate out." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The log backend rotates files by size with --audit-log-maxsize, keeps a bounded number with --audit-log-maxbackup, and deletes files older than --audit-log-maxage days, which caps disk use while keeping the 30 days auditors need. Batch mode changes how events are buffered before writing but not how much ends up on disk. Truncation only limits the size of individual oversized events; ordinary events keep accumulating in one file. The --event-ttl flag controls how long Kubernetes Event objects are kept in etcd and has nothing to do with audit files.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#log-backend",
    tags: ["Audit logging","Log rotation","Operations"]
  },
  {
    id: "cncf-kcsa-278",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Audit records on a managed control plane",
    scenario: "A travel booking startup runs Amazon EKS and must hand an auditor a record of every change made through the Kubernetes API over the last quarter. The team cannot find the kube-apiserver manifest anywhere on its worker nodes and assumes auditing is impossible on a managed service.",
    question: "How should the team obtain Kubernetes API audit records?",
    options: [
      { id: 'A', text: "Enable AWS CloudTrail data events for the cluster, which record each Kubernetes API request made against it." },
      { id: 'B', text: "Enable the audit log type in control plane logging so that EKS delivers the audit events to CloudWatch Logs." },
      { id: 'C', text: "Run kubectl get events across all namespaces each night and archive the output as the quarter's audit record." },
      { id: 'D', text: "Deploy a DaemonSet on the worker nodes that tails /var/log/kube-apiserver-audit.log and forwards it to the SIEM." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "On managed Kubernetes the provider runs the API server, so audit logging is switched on through the provider's control plane logging settings; on EKS enabling the audit log type sends API server audit events to CloudWatch Logs. Worker nodes never host the managed API server or its audit file, so a node DaemonSet has nothing to tail. CloudTrail records calls to the AWS EKS API, such as creating a cluster or node group, not requests made to the Kubernetes API inside the cluster. Kubernetes Events describe object state changes, lack the requesting user and expire after about an hour by default.",
    referenceUrl: "https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html",
    tags: ["Audit logging","Managed Kubernetes","EKS"]
  },
  {
    id: "cncf-kcsa-279",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Seeing the spec a user submitted",
    scenario: "A security team at a streaming service suspects that someone is creating Deployments with privileged containers and deleting them minutes later. Current audit entries show who created the objects but not what the manifests contained. Storage is tight, so the team wants the submitted objects without also storing the API server's full responses.",
    question: "Which audit level should the rule for deployments use?",
    options: [
      { id: 'A', text: "RequestReceived, because it records the manifest at the first stage before any admission plugin alters it." },
      { id: 'B', text: "RequestResponse, because it is the only level that records the body of a create request for a resource." },
      { id: 'C', text: "Metadata, because it records the object's labels and annotations along with the requesting user and verb." },
      { id: 'D', text: "Request, because it records the event metadata plus the request body but leaves out the response body." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Request level logs event metadata together with the request body, which for a create call is the manifest the user submitted, while omitting the response body, so it captures the privileged container settings at lower cost than RequestResponse. Metadata records the user, verb, resource, namespace and name but no body, and not the object's labels. RequestResponse also includes request bodies, so it is not the only level that does, and it doubles storage by adding responses. RequestReceived is an audit stage, not a level.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#audit-policy",
    tags: ["Audit logging","Audit levels","Forensics"]
  },
  {
    id: "cncf-kcsa-280",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "An audit stage that appears only for some requests",
    scenario: "An analyst parsing a cluster's audit log notices that most requests produce events at the RequestReceived and ResponseComplete stages, but requests from controllers and from kubectl get --watch also produce an extra event with a third stage between those two.",
    question: "Which stage is the analyst seeing, and why only for those requests?",
    options: [
      { id: 'A', text: "ResponseStarted, which is emitted once response headers are sent for long-running requests such as watch." },
      { id: 'B', text: "RequestAuthorized, which is emitted after authorization for requests that are served from the watch cache." },
      { id: 'C', text: "ResponseStreaming, which is emitted for list and watch calls when the API server sends results in chunks." },
      { id: 'D', text: "Panic, which is emitted whenever a request stays open longer than the API server's default request timeout." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The ResponseStarted stage is generated after the response headers are sent but before the body completes, and only for long-running requests such as watch, which is why watches from controllers and kubectl show it. Panic is emitted only when the API server panics while handling a request, not because of duration. There is no RequestAuthorized or ResponseStreaming stage; the four stages are RequestReceived, ResponseStarted, ResponseComplete and Panic.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#audit-stages",
    tags: ["Audit logging","Audit stages"]
  },
  {
    id: "cncf-kcsa-281",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Full detail for production writes, less for reads",
    scenario: "An airline wants complete request and response bodies for every create, update, patch and delete in its prod namespace, but only basic metadata for get, list and watch calls there, which make up most of the traffic. Other namespaces are already covered by a Metadata catch-all at the end of the policy.",
    question: "How should the rules for the prod namespace be written?",
    options: [
      { id: 'A', text: "One Request rule for prod with resourceNames set to the write verbs, since resourceNames filters by operation." },
      { id: 'B', text: "One RequestResponse rule listing the write verbs with namespaces set to prod, placed above a Metadata rule for prod." },
      { id: 'C', text: "One RequestResponse rule for prod with omitStages listing ResponseComplete for the get, list and watch verbs." },
      { id: 'D', text: "One RequestResponse rule for all of prod placed above a Metadata rule that lists the read verbs for prod." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Audit rules can match on verbs and namespaces, so a RequestResponse rule for create, update, patch and delete in prod, placed before a Metadata rule for prod, gives full bodies for writes and metadata for reads; because the first matching rule wins, the order matters. A RequestResponse rule covering every verb in prod, placed above the read-verb rule, matches reads first, so they would be logged with full bodies. OmitStages drops whole stage events and cannot vary the level by verb. ResourceNames matches object names, not verbs, and Request level omits the response bodies the airline wants.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#audit-policy",
    tags: ["Audit policy","Verbs","Namespaces"]
  },
  {
    id: "cncf-kcsa-282",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Which binding let the request through",
    scenario: "A fintech auditor finds audit events showing that a contractor's account listed Secrets in the ledger namespace last month. The cluster has hundreds of RoleBindings and ClusterRoleBindings, several of which have since been changed, and the auditor must name the specific binding that authorized each request at the time.",
    question: "Which part of the audit events answers the question most directly?",
    options: [
      { id: 'A', text: "The user field's extra map, which lists every RoleBinding bound to the user at the moment of the request." },
      { id: 'B', text: "The authorization.k8s.io/reason annotation, which names the RBAC binding and role that allowed the request." },
      { id: 'C', text: "The requestObject field, which embeds the RoleBinding that matched when the level is set to RequestResponse." },
      { id: 'D', text: "The objectRef field's apiGroup value, which records the binding group of the role the request resolved to." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The API server adds authorization annotations to audit events: authorization.k8s.io/decision records allow or forbid, and authorization.k8s.io/reason explains the decision, for RBAC naming the RoleBinding or ClusterRoleBinding and the role that granted access. These annotations are present even at Metadata level, so they survive later changes to the bindings. RequestObject holds the body of the request itself, and a list has no body, let alone the binding. ObjectRef's apiGroup is the API group of the target resource. The user's extra map carries authenticator-supplied attributes, not RBAC bindings.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authorization/",
    tags: ["Audit logging","RBAC","Annotations"]
  },
  {
    id: "cncf-kcsa-283",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Reviewing Pod Security violations before enforcing",
    scenario: "A logistics company plans to enforce the Restricted Pod Security Standard. As a first step it labels every namespace with pod-security.kubernetes.io/audit=restricted and wants a report of which pods would violate the standard, without blocking anything or relying on developers to read kubectl warnings.",
    question: "Where will the violations appear?",
    options: [
      { id: 'A', text: "As warnings returned to the client that created the pod, which kubectl prints to the developer's terminal." },
      { id: 'B', text: "As Kubernetes Event objects of type Warning attached to each violating pod in its own namespace." },
      { id: 'C', text: "As annotations on the API server's audit events, which the security team can query in its log store." },
      { id: 'D', text: "As status conditions on the Namespace object that list each violating pod along with the failed checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The audit mode of Pod Security Admission records violations as annotations, such as pod-security.kubernetes.io/audit-violations, on the API server's audit events, so the security team can search them centrally without blocking or depending on developers. Client warnings come from the warn mode, which is the reliance the team wants to avoid. Pod Security Admission does not create Event objects for violations. It does not write status conditions onto Namespace objects either.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/",
    tags: ["Audit logging","Pod Security Admission"]
  },
  {
    id: "cncf-kcsa-284",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "No API change without an audit record",
    scenario: "A stock exchange sends audit events to a remote collector through the webhook backend. Its regulator requires that no request may change cluster state unless the audit record of that request was accepted, and the exchange accepts that API requests will fail when the collector is unreachable.",
    question: "Which --audit-webhook-mode setting meets the requirement?",
    options: [
      { id: 'A', text: "batch, the default mode, which buffers events and retries delivery so that none of them are ever lost." },
      { id: 'B', text: "blocking with --audit-log-path also set, so the local file backend rejects requests when the webhook is down." },
      { id: 'C', text: "blocking-strict, which fails the whole API request when audit delivery fails at the RequestReceived stage." },
      { id: 'D', text: "blocking, which makes each request wait for the webhook to accept its events before the API server replies." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The blocking-strict mode behaves like blocking, but if audit delivery fails at the RequestReceived stage the API server rejects the whole request, so no state change can happen without its audit record, at the availability cost the exchange has accepted. Batch mode buffers events asynchronously and can drop them when the buffer overflows. Blocking waits for delivery but still processes the request if delivery fails. Configuring a local log backend alongside does not make either backend reject requests.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#webhook-backend",
    tags: ["Audit logging","Webhook backend","Compliance"]
  },
  {
    id: "cncf-kcsa-285",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Spotting a service account token used from outside",
    scenario: "A CI service account token at a healthcare company may have leaked through a public build log. Legitimate use comes only from the CI runners, which sit in a known subnet and use a custom client. The security team wants to find requests made with the token from anywhere else.",
    question: "Which audit event fields should the investigation filter on?",
    options: [
      { id: 'A', text: "The user.username of the service account combined with the sourceIPs and userAgent fields of each event." },
      { id: 'B', text: "The objectRef.namespace of the service account combined with the stage and the requestReceivedTimestamp." },
      { id: 'C', text: "The auditID of the first event combined with the responseObject of every later event for the account." },
      { id: 'D', text: "The impersonatedUser field combined with the annotations fields and the authorization decision." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Filtering on the service account's username isolates its requests, and the sourceIPs and userAgent fields then reveal calls from outside the runners' subnet or from a different client, which is the signature of a stolen token. ObjectRef describes the object acted on, not where the caller was. A stolen token is used directly rather than through impersonation, so impersonatedUser would be empty. An auditID identifies the events of one request only, and response bodies do not show where the request originated.",
    referenceUrl: "https://kubernetes.io/docs/reference/config-api/apiserver-audit.v1/",
    tags: ["Audit logging","Service accounts","Detection"]
  },
  {
    id: "cncf-kcsa-286",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Bloated bodies in RequestResponse events",
    scenario: "A retail platform logs Deployments and ConfigMaps at RequestResponse level for change forensics. Storage costs have tripled, and a sample shows that much of every event is the metadata.managedFields list recording server-side apply ownership, which investigators never read.",
    question: "Which change reduces the volume while keeping the object bodies?",
    options: [
      { id: 'A', text: "Enable --audit-log-truncate-enabled so that each event is cut to a fixed length before it is written." },
      { id: 'B', text: "Lower the rules for deployments and configmaps to Metadata level so that no bodies are stored at all." },
      { id: 'C', text: "Add RequestReceived to omitStages for the rules so that duplicate early events are no longer stored." },
      { id: 'D', text: "Set omitManagedFields to true in the audit policy so managed fields are dropped from logged bodies." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The audit policy's omitManagedFields option, set globally or per rule, strips managedFields from request and response bodies before they are logged, removing the bulk the investigators do not need while keeping the rest of each object. Metadata level discards the bodies the forensics depend on. Omitting RequestReceived removes a stage event that carries no response body, but the large ResponseComplete events with managedFields remain. Truncation drops bodies from events that exceed a size limit, which would lose exactly the data investigators want.",
    referenceUrl: "https://kubernetes.io/docs/reference/config-api/apiserver-audit.v1/#audit-k8s-io-v1-Policy",
    tags: ["Audit logging","Audit policy","Cost"]
  },
  {
    id: "cncf-kcsa-287",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Health check noise in the audit log",
    scenario: "A cloud gaming company's audit log is dominated by requests to /healthz, /livez and /readyz from load balancers probing the API servers every few seconds. The team wants to stop recording those probes while keeping every resource request at its current level.",
    question: "Which audit policy rule should be added at the top of the policy?",
    options: [
      { id: 'A', text: "A rule with level None matching those paths in the resources list under the core API group." },
      { id: 'B', text: "A rule with level None matching the system:unauthenticated group across every resource and verb." },
      { id: 'C', text: "A rule with level None matching those paths in nonResourceURLs, placed before the broader rules." },
      { id: 'D', text: "A rule with level Metadata matching those paths in nonResourceURLs so they are logged without bodies." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Health endpoints are non-resource URLs, so a rule matching them in nonResourceURLs with level None, placed ahead of the broader rules because the first matching rule wins, drops exactly those probes. Paths are not resources, so listing them under resources never matches. Metadata level still writes an event for every probe, which does not remove the noise. Matching system:unauthenticated for every resource would also silence unauthenticated resource requests, which are important to keep, and probes may be authenticated anyway.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#audit-policy",
    tags: ["Audit logging","Audit policy","Noise reduction"]
  },
  {
    id: "cncf-kcsa-288",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Client labels written into the wrong selector",
    scenario: "An engineer wants the orders pods to accept traffic only from the cart pods. She writes a NetworkPolicy whose spec.podSelector matches app=cart and adds an ingress rule allowing TCP 8080. Afterwards the orders pods still accept connections from everything, while the cart pods suddenly reject traffic from other services.",
    question: "What did the engineer misunderstand about the policy?",
    options: [
      { id: 'A', text: "The spec.podSelector must be empty when an ingress rule is defined, so the cart label belongs in an annotation." },
      { id: 'B', text: "The spec.podSelector picks the clients of the policy, so the ingress rule also needs app=orders in its to list." },
      { id: 'C', text: "The spec.podSelector picks the pods the policy protects, so it should match app=orders with app=cart in the from list." },
      { id: 'D', text: "The spec.podSelector applies only to egress traffic, so ingress protection needs a separate policy for orders." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The top-level podSelector chooses the pods the policy applies to, the ones being isolated, while peers allowed to connect go in the rule's from list. Her policy isolated the cart pods for ingress, which is why they started rejecting traffic, and left the orders pods unprotected. Ingress rules use from, not to, and spec.podSelector does not pick clients. The selector applies to whichever policy types are declared, not only egress. It need not be empty, and annotations play no part in NetworkPolicy matching.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#networkpolicy-resource",
    tags: ["NetworkPolicy","podSelector","Ingress"]
  },
  {
    id: "cncf-kcsa-289",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Only the sidecar should reach the secrets store",
    scenario: "A payments pod contains an application container and a secrets-agent sidecar. The security team wants only the sidecar to be able to open connections to the internal secrets store on TCP 8200, so that a compromised application container cannot talk to it directly. The CNI plugin enforces standard NetworkPolicy.",
    question: "What limits the team's ability to do this with NetworkPolicy?",
    options: [
      { id: 'A', text: "NetworkPolicy can select containers by name through a containerSelector, but only for ingress rules, not for egress." },
      { id: 'B', text: "NetworkPolicy can separate containers only when each sidecar declares its own hostPort for the outbound connection." },
      { id: 'C', text: "NetworkPolicy can separate containers only for UDP traffic, because TCP connections are tracked at the pod level." },
      { id: 'D', text: "NetworkPolicy applies to whole pods because all containers share one network namespace, so it is unable to tell them apart." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Containers in a pod share a single network namespace and IP address, and NetworkPolicy selects pods, so any egress allowed for the sidecar is equally available to the application container. Separating them needs another design, such as moving the agent into its own pod or using a mesh or runtime control that understands process identity. There is no containerSelector field in NetworkPolicy. HostPorts expose a pod port on the node and do not give containers separate identities. The protocol makes no difference, since both TCP and UDP traffic leave from the same pod address.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy","Sidecars","Pod networking"]
  },
  {
    id: "cncf-kcsa-290",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A pod label that opens the database",
    scenario: "The ledger database in a shared namespace allows ingress only from pods labelled role=ledger-api. During a red-team test, an attacker who had compromised a CI service account with rights to create pods in that namespace launched a pod labelled role=ledger-api and connected to the database directly.",
    question: "Which change most directly addresses the weakness the test exposed?",
    options: [
      { id: 'A', text: "Change the ingress rule to match the ledger-api pods' ipBlock, so that only their current addresses are allowed through." },
      { id: 'B', text: "Move the database and its API into a namespace the CI identity cannot create pods in, and select clients by that namespace." },
      { id: 'C', text: "Replace the pod label with a longer random value so that the attacker cannot guess which label the policy is matching." },
      { id: 'D', text: "Add a second NetworkPolicy on the database that denies ingress from pods the CI service account is able to create." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "NetworkPolicy trusts labels, and anyone who can create pods in a namespace can give them any label, so a podSelector is only as strong as the control over who creates pods there. Placing the database and its legitimate clients in a namespace the CI identity cannot write to, and matching clients with a namespaceSelector on an administrator-controlled namespace label, removes the path. Pod IPs change on every rollout and an ipBlock for pods is fragile. NetworkPolicy has no deny rules and cannot match on the identity that created a pod. A random label is obscurity; it is visible to anyone who can read the policy or the existing pods.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy","Labels","Threat model"]
  },
  {
    id: "cncf-kcsa-291",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Letting Prometheus in from any namespace",
    scenario: "The checkout namespace has a default-deny ingress policy. Several teams run their own Prometheus instances in different namespaces, and all of them must be able to scrape the checkout pods' metrics on TCP 9090, while traffic from outside the cluster must stay blocked.",
    question: "Which from entry should the new ingress rule for port 9090 contain?",
    options: [
      { id: 'A', text: "An ipBlock set to 0.0.0.0/0, which matches every Prometheus address in the cluster while the default deny keeps external clients out." },
      { id: 'B', text: "A podSelector set to an empty object, which matches every pod in the cluster regardless of the namespace the pod runs in." },
      { id: 'C', text: "No from entry at all, since omitting from allows only cluster-internal sources on the listed port and blocks external clients." },
      { id: 'D', text: "A namespaceSelector set to an empty object, which matches every namespace in the cluster, combined with a podSelector for Prometheus." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An empty namespaceSelector matches all namespaces, and pairing it in the same entry with a podSelector for the Prometheus pods admits those scrapers wherever they run while external addresses remain blocked. An ipBlock of 0.0.0.0/0 allows every source including external clients, and the default deny cannot subtract from an allow. Omitting from allows traffic from all sources on the port, not only internal ones. A podSelector on its own matches pods only in the policy's own namespace, so scrapers elsewhere would be refused.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#behavior-of-to-and-from-selectors",
    tags: ["NetworkPolicy","namespaceSelector","Monitoring"]
  },
  {
    id: "cncf-kcsa-292",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A named port that means different numbers",
    scenario: "A platform team writes one NetworkPolicy that allows ingress to all pods in a namespace on the named port metrics. Two Deployments in the namespace both declare a container port called metrics, one as 9100 and the other as 8080, and the team wonders which number the rule opens.",
    question: "How does the CNI plugin interpret the named port?",
    options: [
      { id: 'A', text: "It resolves the name per pod against that pod's containerPort names, opening 9100 on one set and 8080 on the other." },
      { id: 'B', text: "It rejects the policy at creation because a named port must refer to exactly one port number in the namespace." },
      { id: 'C', text: "It opens both 9100 and 8080 on every selected pod because named ports expand to all numbers that share the name." },
      { id: 'D', text: "It resolves the name once against the first matching Service port and opens that single number on every pod." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A named port in a NetworkPolicy refers to the port name declared in each selected pod's containers, so it is resolved pod by pod: the first Deployment's pods get 9100 opened and the second's get 8080, which keeps one rule correct across workloads that use different numbers. Services play no part in resolving the name. The API server does not check that a name maps to one number across the namespace. Pods are not opened on port numbers they never declared under that name.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubernetes-api/policy-resources/network-policy-v1/",
    tags: ["NetworkPolicy","Named ports"]
  },
  {
    id: "cncf-kcsa-293",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A public storefront inside a default-deny namespace",
    scenario: "The web namespace has a default-deny ingress policy. The storefront pods behind an external load balancer must accept HTTPS on TCP 8443 from any source, including the internet, while every other pod in the namespace stays isolated.",
    question: "Which NetworkPolicy achieves this?",
    options: [
      { id: 'A', text: "A policy selecting every pod in the namespace with an ingress rule allowing port 8443 from any ipBlock." },
      { id: 'B', text: "A policy selecting the storefront pods with one ingress rule whose from list contains an empty podSelector." },
      { id: 'C', text: "A policy selecting the storefront pods with one ingress rule that lists only port 8443 and has no from field." },
      { id: 'D', text: "A policy selecting the storefront pods with policyTypes set to Egress so that ingress falls back to allow." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "An ingress rule with no from field matches all sources, so restricting it to port 8443 on a policy that selects only the storefront pods opens exactly that path from anywhere while the default deny still isolates everything else. An empty podSelector in from matches only pods in the same namespace, blocking internet clients. Selecting every pod would open 8443 on pods that must stay isolated. Setting only the Egress type means the policy does not apply to ingress, and the existing default deny still blocks inbound traffic to the storefront.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy","Ingress","Default deny"]
  },
  {
    id: "cncf-kcsa-294",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Internet access without the corporate network",
    scenario: "A price-comparison company runs scraper pods that must fetch pages from any public website. After a breach elsewhere in which a compromised scraper pivoted into internal systems, the security team wants the scrapers unable to reach anything in the private address ranges used by the corporate network and the cluster itself.",
    question: "Which egress rule meets the requirement?",
    options: [
      { id: 'A', text: "A podSelector set to an empty object in the to list, which limits egress to destinations outside the cluster." },
      { id: 'B', text: "A namespaceSelector for an internet namespace combined with an ipBlock that excludes the pod CIDR range." },
      { id: 'C', text: "An ipBlock with cidr 10.0.0.0/8 placed in a separate deny rule ranked above an allow rule for 0.0.0.0/0." },
      { id: 'D', text: "An ipBlock with cidr 0.0.0.0/0 whose except list contains 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An ipBlock of 0.0.0.0/0 with the RFC 1918 ranges in its except list allows public destinations while blocking the private networks where corporate systems and cluster addresses live, which is the pattern for internet-only egress. If DNS runs in-cluster, a separate rule for it is still needed. NetworkPolicy has no deny rules or ranking. There is no internet namespace to select, and a selector cannot describe external hosts. An empty podSelector in to matches pods in the same namespace, the opposite of external destinations.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy","ipBlock","Lateral movement"]
  },
  {
    id: "cncf-kcsa-295",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Allowed on one side, blocked on the other",
    scenario: "Both the web and api namespaces of an online retailer have default-deny ingress and default-deny egress policies. The api team adds a NetworkPolicy allowing ingress to the api pods from the web namespace on TCP 8080, but requests from the web pods still time out.",
    question: "What else is needed for the connection to succeed?",
    options: [
      { id: 'A', text: "An egress policy in the web namespace allowing the web pods to reach the api pods on TCP 8080." },
      { id: 'B', text: "An egress policy in the api namespace allowing the api pods to send responses to the web namespace." },
      { id: 'C', text: "A Service of type ClusterIP in the web namespace that points at the api pods on TCP port 8080." },
      { id: 'D', text: "An ingress policy in the web namespace allowing return traffic from the api pods back on TCP 8080." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A connection must be allowed by the egress policies that select the source pod and by the ingress policies that select the destination pod, so with default-deny egress in the web namespace the web pods also need an egress rule to the api pods on TCP 8080. NetworkPolicy implementations are stateful, so reply packets of an allowed connection are permitted automatically and need no ingress rule on the client side or egress rule on the server side. A Service in the web namespace does not change policy evaluation, which applies to the pod-to-pod traffic after Service translation.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#isolated-and-non-isolated-pods",
    tags: ["NetworkPolicy","Ingress","Egress"]
  },
  {
    id: "cncf-kcsa-296",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A block of ports for a media relay",
    scenario: "A video conferencing company runs media relay pods that receive UDP traffic from the signalling pods on every port from 30000 to 30100. The team wants one concise ingress rule instead of listing 101 separate ports in the NetworkPolicy.",
    question: "How should the rule's ports entry be written?",
    options: [
      { id: 'A', text: "Set protocol UDP, port 30000 and a portCount of 101 in a single ports entry of the ingress rule." },
      { id: 'B', text: "Set protocol UDP and a named port called media that the relay container declares for the range." },
      { id: 'C', text: "Set protocol UDP and port to the string 30000-30100, which the API parses as an inclusive range." },
      { id: 'D', text: "Set protocol UDP, port 30000 and endPort 30100 in a single ports entry of the ingress rule." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "NetworkPolicy ports support an endPort field, stable since Kubernetes 1.25, which together with port defines an inclusive range, so port 30000 with endPort 30100 covers the relay's range in one entry when the CNI plugin supports it. The port field accepts a number or a named port, not a range string. A named port maps to a single containerPort, not a range. There is no portCount field.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#targeting-a-range-of-ports",
    tags: ["NetworkPolicy","Ports","endPort"]
  },
  {
    id: "cncf-kcsa-297",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Traffic allowed only inside the namespace",
    scenario: "A research lab wants the pods in its genomics namespace to talk freely to each other, but no pod from any other namespace should be able to connect to them. The namespace currently has no NetworkPolicies, and the CNI plugin enforces them.",
    question: "Which single NetworkPolicy fits the requirement?",
    options: [
      { id: 'A', text: "Select all pods with an empty podSelector and set policyTypes to Egress with no egress rules defined." },
      { id: 'B', text: "Select all pods with an empty podSelector and allow ingress from an empty namespaceSelector in from." },
      { id: 'C', text: "Select all pods with an empty podSelector and allow ingress from an empty podSelector in the from list." },
      { id: 'D', text: "Select all pods with an empty podSelector and allow ingress from the ipBlock of the cluster pod CIDR." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Selecting every pod isolates the namespace for ingress, and an ingress rule whose from list holds an empty podSelector allows traffic from all pods in the same namespace only, so pods talk freely to each other while other namespaces are blocked. An empty namespaceSelector matches every namespace in the cluster, which lets everyone in. An Egress-only policy leaves ingress open to all namespaces and blocks the pods' own outbound traffic. The pod CIDR covers pods in every namespace.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy","Namespaces","Segmentation"]
  },
  {
    id: "cncf-kcsa-298",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Developers loosening their own network rules",
    scenario: "A platform team writes the NetworkPolicies for every application namespace. A review finds that developers, who hold the built-in edit ClusterRole in their namespaces, have been adding allow-all policies whenever a connection fails. The team wants only its own group to be able to change network policy in those namespaces.",
    question: "What should the platform team change?",
    options: [
      { id: 'A', text: "Give developers a custom Role without create, update, patch or delete on networkpolicies in networking.k8s.io." },
      { id: 'B', text: "Keep the edit role and enforce the Restricted Pod Security Standard, which blocks changes to NetworkPolicies." },
      { id: 'C', text: "Give developers a custom Role that denies networkpolicies explicitly, because the edit role is evaluated first." },
      { id: 'D', text: "Keep the edit role and add an annotation to each policy that marks it as owned by the platform team's group." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The built-in edit role includes write access to networkpolicies, so developers need a narrower custom Role that leaves out write verbs on networkpolicies in the networking.k8s.io API group, with the platform group keeping those rights. RBAC has no deny rules, so an extra deny Role cannot subtract from edit. Annotations do not affect authorization. Pod Security Standards govern pod specifications and have nothing to do with who may modify NetworkPolicy objects.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles",
    tags: ["NetworkPolicy","RBAC","Governance"]
  },
  {
    id: "cncf-kcsa-299",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A guardrail tenants cannot override",
    scenario: "A multi-tenant platform gives each tenant full rights to manage NetworkPolicies in its own namespaces. The security team must guarantee that no tenant pod can ever reach the cluster's monitoring namespace, regardless of any allow rules the tenants write, and it runs a CNI plugin that supports cluster-scoped policy.",
    question: "Which mechanism meets the guarantee?",
    options: [
      { id: 'A', text: "A cluster-scoped deny rule, such as an AdminNetworkPolicy, which is evaluated before any tenant's own rules." },
      { id: 'B', text: "A default-deny egress NetworkPolicy with no rules, created in every tenant namespace before handover." },
      { id: 'C', text: "A default-deny egress NetworkPolicy in the monitoring namespace, so its pods cannot answer tenant connections." },
      { id: 'D', text: "A cluster-scoped RBAC rule that stops tenants creating NetworkPolicies whose egress names the monitoring namespace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Namespaced NetworkPolicies only allow, and anyone who can edit them can widen access, so a guarantee that overrides tenant rules needs a cluster-scoped policy with deny semantics and precedence, such as the AdminNetworkPolicy API or a CNI-specific resource like Calico GlobalNetworkPolicy or CiliumClusterwideNetworkPolicy. A default-deny egress policy in the monitoring namespace does not stop inbound connections at all, and because enforcement is stateful, replies on connections that ingress rules allow would still flow. Tenants can delete or supplement a default-deny egress policy in their own namespaces. RBAC authorizes verbs on objects and cannot inspect policy contents.",
    referenceUrl: "https://network-policy-api.sigs.k8s.io/",
    tags: ["NetworkPolicy","AdminNetworkPolicy","Multi-tenancy"]
  },
  {
    id: "cncf-kcsa-300",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "An egress lockdown that locked nothing",
    scenario: "An engineer writes a NetworkPolicy for the batch pods with podSelector app=batch, an ingress rule allowing the scheduler pods, and an empty egress list, intending to block all outbound traffic. The policy omits the policyTypes field. Afterwards the batch pods can still reach external websites.",
    question: "Why is outbound traffic still allowed?",
    options: [
      { id: 'A', text: "An empty egress list means allow all egress, so the engineer should have listed a deny-all ipBlock instead." },
      { id: 'B', text: "Without policyTypes, the policy applies to neither direction, so only the ingress rule of other policies counts." },
      { id: 'C', text: "Without policyTypes, Egress is set only when egress rules exist, so an empty egress list leaves egress open." },
      { id: 'D', text: "Egress to destinations outside the cluster is never governed by NetworkPolicy, only pod-to-pod traffic is." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When policyTypes is omitted, Ingress is always assumed and Egress is added only if the policy contains egress rules; an empty egress list counts as none, so the batch pods are not isolated for egress. Declaring policyTypes with both Ingress and Egress would make the empty list deny all outbound traffic. The policy still applies to ingress, because Ingress is assumed by default. An empty egress list under a declared Egress type denies everything rather than allowing it, and ipBlocks cannot deny. NetworkPolicy does govern traffic to external addresses, through ipBlock rules.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubernetes-api/policy-resources/network-policy-v1/",
    tags: ["NetworkPolicy","policyTypes","Egress"]
  }
];

export default CNCF_KCSA_QUESTIONS_12;
