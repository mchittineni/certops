export const K8S_CKS_QUESTIONS_10 = [
  {
    id: "k8s-cks-226",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "ValidatingAdmissionPolicy: In-Tree CEL-Based Admission Control",
    scenario: "An enterprise wants to enforce admission control rules (e.g., forbidding privileged pods and requiring resource limits) without the network latency, certificate management overhead, and availability failure modes of external webhook controllers.",
    question: "Which native Kubernetes feature evaluates admission rules directly in kube-apiserver using Common Expression Language (CEL)?",
    options: [
      { id: 'A', text: "<code>MutatingWebhookConfiguration</code>, with CEL rules" },
      { id: 'B', text: "<code>LimitRange</code>, evaluated by its admission plugin" },
      { id: 'C', text: "<code>ValidatingAdmissionPolicy</code>, with its binding" },
      { id: 'D', text: "<code>CustomResourceDefinition</code> validation schemas" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "<code>ValidatingAdmissionPolicy</code> (introduced as beta in modern Kubernetes) allows cluster administrators to declare admission rules directly in <code>kube-apiserver</code> using Common Expression Language (CEL). Rules execute in-process without network calls, external pods, or webhook CA management.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CEL", "ValidatingAdmissionPolicy", "In-Tree", "Admission-Control"]
  },
  {
    id: "k8s-cks-227",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Writing CEL Expressions in ValidatingAdmissionPolicy",
    scenario: "A security policy requires that every Deployment deployed to production must have a replica count greater than or equal to 2.",
    question: "Which CEL expression in a <code>ValidatingAdmissionPolicy</code> enforces this replica constraint?",
    options: [
      { id: 'A', text: "<code>input.review.object.spec.replicas &gt;= 2</code>" },
      { id: 'B', text: "<code>spec.replicas &gt; 2 or die()</code>" },
      { id: 'C', text: "<code>regex(object.spec.replicas, '^[2-9]$')</code>" },
      { id: 'D', text: "<code>object.spec.replicas &gt;= 2</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In Kubernetes CEL admission policies, the incoming object is accessed via the <code>object</code> identifier. The expression <code>object.spec.replicas &gt;= 2</code> evaluates to boolean true if the replica count meets the requirement; if false, admission is rejected.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CEL", "ValidatingAdmissionPolicy", "Replicas", "Syntax"]
  },
  {
    id: "k8s-cks-228",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Binding ValidatingAdmissionPolicies with Param Resources",
    scenario: "An administrator creates a generic <code>ValidatingAdmissionPolicy</code> that checks if an image comes from an allowed registry list. Different namespaces need different lists of allowed registries.",
    question: "How does <code>ValidatingAdmissionPolicyBinding</code> support parameterization across namespaces?",
    options: [
      { id: 'A', text: "The binding carries a <code>matchResources</code> selector, and each namespace supplies its own label values" },
      { id: 'B', text: "The binding carries a <code>paramRef</code> to a config object whose values the policy's CEL reads as <code>params</code>" },
      { id: 'C', text: "The binding carries a <code>validationActions</code> list, which selects the parameter set per namespace" },
      { id: 'D', text: "The policy itself must be duplicated per namespace with the registry list written into each copy" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "<code>ValidatingAdmissionPolicyBinding</code> supports parameter resources via <code>paramRef</code>. The referenced resource (e.g., a custom param CRD or ConfigMap) is exposed to the CEL expression as <code>params</code>, enabling reusable parameterized policies across different namespaces.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CEL", "ValidatingAdmissionPolicyBinding", "Parameters", "Governance"]
  },
  {
    id: "k8s-cks-229",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Configuring Webhook SideEffects in Admission Controllers",
    scenario: "When configuring a <code>ValidatingWebhookConfiguration</code>, the API server requires declaring the <code>sideEffects</code> field.",
    question: "What does setting <code>sideEffects: None</code> signify to the Kubernetes API server?",
    options: [
      { id: 'A', text: "That the webhook changes nothing outside the request, so a server-side dry run is safe to execute" },
      { id: 'B', text: "That the webhook makes no changes to the object, so the API server may skip re-running it" },
      { id: 'C', text: "That the webhook keeps no request log, so the API server need not redact the payload it sends" },
      { id: 'D', text: "That the webhook has no failure mode, so the API server admits the request when it cannot be reached" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Setting <code>sideEffects: None</code> guarantees that calling the admission webhook will not produce external state mutations (such as creating resources in third-party databases). This declaration is mandatory for admission webhooks that participate in Kubernetes server-side dry-run requests.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Admission-Webhooks", "sideEffects", "dry-run", "API-Server"]
  },
  {
    id: "k8s-cks-230",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Securing Admission Webhook Traffic with caBundle",
    scenario: "A custom <code>ValidatingAdmissionWebhook</code> fails with the error: <code>x509: certificate signed by unknown authority</code>.",
    question: "How must the API server be configured to trust the TLS certificate presented by the webhook server?",
    options: [
      { id: 'A', text: "Put the base64 root CA that signed the webhook's certificate in <code>clientConfig.caBundle</code>" },
      { id: 'B', text: "Put the webhook's own certificate in the node's trust store and restart the API server" },
      { id: 'C', text: "Mount <code>/etc/kubernetes/pki</code> into the webhook pod so it serves the cluster CA's chain" },
      { id: 'D', text: "Set <code>insecureSkipVerify: true</code> in the webhook's <code>clientConfig</code> block instead" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The <code>kube-apiserver</code> requires mutually authenticated and verified TLS when dispatching requests to external admission webhooks. The root CA certificate bundle that signed the webhook's serving certificate must be base64-encoded and placed into <code>clientConfig.caBundle</code>.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Admission-Webhooks", "caBundle", "TLS", "Certificate-Validation"]
  },
  {
    id: "k8s-cks-231",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup",
    title: "Automated CIS Benchmark Scanning with Kube-bench",
    scenario: "An enterprise requires verifying that all master and worker nodes comply with the Center for Internet Security (CIS) Kubernetes Benchmark.",
    question: "Which tool runs automated CIS benchmark checks and provides remediation instructions for failing control plane and worker configurations?",
    options: [
      { id: 'A', text: "<code>kube-bench</code>, run as a Job on the nodes" },
      { id: 'B', text: "<code>kube-hunter</code>, run against the cluster" },
      { id: 'C', text: "<code>kubesec</code>, run over the manifests" },
      { id: 'D', text: "<code>falco</code>, as a DaemonSet" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "<code>kube-bench</code> (by Aqua Security) is an open-source tool that automates CIS Kubernetes Benchmark checks. It scans control plane files, etcd permissions, kubelet arguments, and policies, providing pass/fail/warn statuses along with exact remediation commands.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["kube-bench", "CIS-Benchmark", "Compliance", "Auditing"]
  },
  {
    id: "k8s-cks-232",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup",
    title: "Active Cluster Penetration Testing with Kube-hunter",
    scenario: "A red team wants to hunt for security weaknesses, exposed etcd instances, open kubelet read-only ports, and unauthenticated proxy endpoints from both inside and outside the cluster network.",
    question: "Which tool actively hunts for vulnerabilities and simulates attacker penetration techniques against a running cluster?",
    options: [
      { id: 'A', text: "<code>sonobuoy</code>, as a Job" },
      { id: 'B', text: "<code>kube-hunter</code>, as a Job" },
      { id: 'C', text: "<code>kube-bench</code>" },
      { id: 'D', text: "<code>trivy</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "<code>kube-hunter</code> (by Aqua Security) hunts for security weaknesses the way an attacker would. It probes API servers, kubelets, etcd and proxy endpoints, either remotely or from a pod inside the cluster, to show how exposed the cluster is if a workload is compromised. It is no longer under active development, and Aqua now points users to Trivy for scanning clusters, but Trivy and kube-bench check for known vulnerabilities and misconfigurations and Sonobuoy runs conformance tests; none of them probes the cluster like an attacker. Falco only detects suspicious runtime behaviour.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["kube-hunter", "Penetration-Testing", "Red-Team", "Threat-Detection"]
  },
  {
    id: "k8s-cks-233",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "OPA Gatekeeper ConstraintTemplate Structure",
    scenario: "A platform team develops an OPA Gatekeeper policy requiring that all namespaces have an <code>owner</code> label.",
    question: "What are the two distinct custom resources required to define and enforce this policy in Gatekeeper?",
    options: [
      { id: 'A', text: "A <code>ValidatingWebhookConfiguration</code> for the admission hook, and a <code>ClusterRole</code> for its account" },
      { id: 'B', text: "A <code>ConstraintTemplate</code> holding the Rego and CRD schema, and a <code>Constraint</code> that instantiates it" },
      { id: 'C', text: "A <code>ConfigMap</code> holding the Rego source, and a <code>Constraint</code> that references it by name" },
      { id: 'D', text: "A <code>ValidatingAdmissionPolicy</code> holding the CEL, and a binding that scopes it to namespaces" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "OPA Gatekeeper separates policy logic from policy enforcement. The <code>ConstraintTemplate</code> declares the Rego code and parameter schema. Creating the template dynamically generates a new CRD (e.g., <code>K8sRequiredLabels</code>). Administrators then create a <code>Constraint</code> instance of that CRD to enforce the rule across resources.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Gatekeeper", "ConstraintTemplate", "Rego", "Policy-Engine"]
  },
  {
    id: "k8s-cks-234",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Enforcing Pod Labeling Policies with Kyverno",
    scenario: "An organization requires that all new Pods in development namespaces must have an <code>environment</code> label.",
    question: "Which Kyverno <code>ClusterPolicy</code> rule pattern validates the presence of this label?",
    options: [
      { id: 'A', text: "A <code>generate</code> rule that clones the label from a ConfigMap into each namespace" },
      { id: 'B', text: "A <code>mutate</code> rule with a <code>patchStrategicMerge</code> that adds the missing label" },
      { id: 'C', text: "A <code>verifyImages</code> rule whose attestation carries the <code>environment</code> value" },
      { id: 'D', text: "A <code>validate</code> rule with <code>pattern: { metadata: { labels: { environment: '?*' } } }</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In Kyverno, <code>validate</code> rules inspect resource specifications. Using the pattern <code>metadata: { labels: { environment: '?*' } }</code> ensures that the <code>environment</code> label exists and contains at least one character. If missing, Kyverno denies admission.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Kyverno", "Validation", "Labels", "Governance"]
  },
  {
    id: "k8s-cks-235",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Webhook FailurePolicy: Fail vs Ignore Trade-offs",
    scenario: "An organization configures a mutating admission webhook that injects security sidecars. During high traffic spikes, the webhook pod crashes under load.",
    question: "What happens to new deployment requests if the webhook is configured with <code>failurePolicy: Fail</code>?",
    options: [
      { id: 'A', text: "Every new pod request is retried until the webhook answers, then admitted with the sidecar" },
      { id: 'B', text: "Every new pod request is admitted without the sidecar, and the failure is only recorded" },
      { id: 'C', text: "Every new pod request fails outright, so nothing runs uninspected — at the cost of availability" },
      { id: 'D', text: "Every new pod request is converted to a dry run, so the object is validated but not stored" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "<code>failurePolicy: Fail</code> enforces strict security (fail-closed). If the webhook endpoint cannot be reached or times out, the API server denies the creation of matching objects. In contrast, <code>failurePolicy: Ignore</code> allows the creation to succeed unvalidated (fail-open).",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Admission-Webhooks", "failurePolicy", "Fail-Closed", "High-Availability"]
  },
  {
    id: "k8s-cks-236",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Mitigating Webhook Re-Entrancy and Looping",
    scenario: "A mutating admission webhook modifies deployments. When the webhook patches a deployment, the resulting update triggers another admission review, causing an infinite loop.",
    question: "Which webhook configuration setting or filter prevents mutating webhooks from endlessly intercepting their own modifications?",
    options: [
      { id: 'A', text: "Set <code>reinvocationPolicy: Never</code> and convert the hook to a validating one" },
      { id: 'B', text: "Set <code>reinvocationPolicy: IfNeeded</code> and make the mutation idempotent" },
      { id: 'C', text: "Set <code>matchPolicy: Exact</code> so the hook sees only the original request" },
      { id: 'D', text: "Set <code>objectSelector</code> to exclude the label the webhook itself adds" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Mutating webhooks must be strictly idempotent: if an incoming object already contains the required sidecar or annotations, the webhook must return an empty patch. Setting <code>reinvocationPolicy: IfNeeded</code> allows webhooks to be re-called only if another webhook in the chain altered the object.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Admission-Webhooks", "reinvocationPolicy", "Idempotency", "Loop-Prevention"]
  },
  {
    id: "k8s-cks-237",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Testing Admission Policies in Audit Mode with Gatekeeper",
    scenario: "Before blocking developer deployments in production, a platform team wants Gatekeeper to evaluate non-compliant workloads and report violations in Prometheus metrics without rejecting requests.",
    question: "Which setting in a Gatekeeper <code>Constraint</code> enables auditing without blocking deployments?",
    options: [
      { id: 'A', text: "Set <code>spec.enforcementAction: dryrun</code> (or <code>warn</code>)" },
      { id: 'B', text: "Set <code>spec.mode: passive</code>" },
      { id: 'C', text: "Set <code>spec.enforcementAction: deny</code>" },
      { id: 'D', text: "Annotate the constraint with <code>gatekeeper.sh/mode: 'audit'</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Gatekeeper supports three enforcement actions: <code>deny</code> (actively rejects non-compliant requests), <code>dryrun</code> (allows requests through, but logs violations in the constraint status and Prometheus metrics), and <code>warn</code> (allows requests but issues a warning message to the client).",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Gatekeeper", "dryrun", "EnforcementAction", "Auditing"]
  },
  {
    id: "k8s-cks-238",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Restricting Admission Webhook Scope with namespaceSelector",
    scenario: "A custom admission webhook must only inspect pods created in user application namespaces and must never intercept critical system pods in <code>kube-system</code> or <code>kube-node-lease</code>.",
    question: "Which configuration block in the webhook manifest excludes system namespaces from interception?",
    options: [
      { id: 'A', text: "A <code>failurePolicy: Ignore</code> so the system namespaces are admitted when the hook errors" },
      { id: 'B', text: "An <code>objectSelector</code> that matches only the workload pods the webhook should mutate" },
      { id: 'C', text: "A <code>namespaceSelector.matchExpressions</code> that excludes the <code>kube-system</code> namespace label" },
      { id: 'D', text: "A <code>rules</code> entry limited to the <code>apps</code> API group, which system pods do not use" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Using <code>namespaceSelector</code> (or <code>objectSelector</code>) allows targeting specific namespaces. Excluding <code>kube-system</code> prevents webhook outages or bugs from blocking core cluster daemons (CoreDNS, kube-proxy), averting catastrophic control plane lockouts.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Admission-Webhooks", "namespaceSelector", "kube-system", "Resilience"]
  },
  {
    id: "k8s-cks-239",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup",
    title: "Remediating Kube-bench Findings: Anonymous Kubelet Requests",
    scenario: "A <code>kube-bench</code> scan reports failure on CIS check 4.2.1: 'Ensure that the --anonymous-auth argument is set to false'.",
    question: "How should this vulnerability be remediated in the worker node kubelet configuration?",
    options: [
      { id: 'A', text: "In the kubelet config, set <code>authorization.mode: AlwaysAllow</code> and restart it" },
      { id: 'B', text: "Remove <code>/etc/kubernetes/kubelet.conf</code> and let the node re-bootstrap itself" },
      { id: 'C', text: "In the API server manifest, set <code>--anonymous-auth=false</code> and restart it" },
      { id: 'D', text: "In the kubelet config, set <code>authentication.anonymous.enabled: false</code> and restart it" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "To satisfy CIS Kubernetes Benchmark 4.2.1, anonymous access to the Kubelet API must be disabled. This is configured in <code>/var/lib/kubelet/config.yaml</code> by setting <code>authentication.anonymous.enabled: false</code>, followed by <code>systemctl restart kubelet</code>.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["kube-bench", "CIS-Benchmark", "Kubelet", "Remediation"]
  },
  {
    id: "k8s-cks-240",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup",
    title: "Remediating Kube-bench Findings: Kubelet Client CA",
    scenario: "A <code>kube-bench</code> report flags check 4.2.3: 'Ensure that the --client-ca-file argument is set as appropriate'.",
    question: "Why is configuring <code>client-ca-file</code> on the kubelet critical for node security?",
    options: [
      { id: 'A', text: "It makes the kubelet verify X.509 client certificates on its HTTPS API, so unauthenticated callers cannot exec or read logs" },
      { id: 'B', text: "It makes the kubelet present that CA's certificate on port 10250, so callers can verify the node they are talking to" },
      { id: 'C', text: "It makes the kubelet sign certificates for the pods it runs, so each workload gets an identity from the node's CA" },
      { id: 'D', text: "It makes the kubelet trust that CA when it dials the API server, which is how the node bootstraps its own credentials" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configuring <code>authentication.x509.clientCAFile</code> in <code>config.yaml</code> ensures that the Kubelet API (port 10250) mandates and verifies client TLS certificates against the cluster CA. Without it, unauthorized network callers can execute arbitrary code inside containers on the node.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["kube-bench", "clientCAFile", "Kubelet", "Authentication"]
  },
  {
    id: "k8s-cks-241",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Kyverno Resource Mutation: Auto-Injecting SecurityContext",
    scenario: "A platform engineering team wants to automatically inject <code>runAsNonRoot: true</code> and <code>allowPrivilegeEscalation: false</code> into any pod submitted without an explicit securityContext.",
    question: "Which Kyverno rule type modifies incoming manifests before admission to enforce standards seamlessly?",
    options: [
      { id: 'A', text: "A <code>generate</code> rule triggered by ServiceAccount creation" },
      { id: 'B', text: "A <code>mutate</code> rule using a <code>patchStrategicMerge</code> overlay" },
      { id: 'C', text: "A <code>validate</code> rule with <code>enforce</code> mode" },
      { id: 'D', text: "A <code>verifyImages</code> rule checking digest authenticity" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kyverno's <code>mutate</code> rules allow modifying manifests before they are written to etcd. Using <code>patchStrategicMerge</code>, Kyverno automatically injects missing security parameters (like <code>runAsNonRoot: true</code>) into pod templates without rejecting developer requests.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Kyverno", "Mutation", "patchStrategicMerge", "Auto-Remediation"]
  },
  {
    id: "k8s-cks-242",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Validating Admission Policy Matching by Labels with matchConditions",
    scenario: "A CEL-based <code>ValidatingAdmissionPolicy</code> should only apply to pods that have the label <code>tier: frontend</code>.",
    question: "How can policy evaluation be conditionally filtered in modern Kubernetes admission policies?",
    options: [
      { id: 'A', text: "Add a <code>matchCondition</code> whose CEL tests the object's own <code>tier</code> label" },
      { id: 'B', text: "Add a second webhook server that handles only the frontend namespace's pods" },
      { id: 'C', text: "Add an <code>objectSelector</code> that matches on the pod's container image name" },
      { id: 'D', text: "Add a <code>failurePolicy: Ignore</code> so non-frontend pods skip the evaluation" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes admission policies support <code>matchConditions</code> written in CEL. Declaring <code>matchConditions: [{ name: 'frontend-only', expression: \"object.metadata.labels['tier'] == 'frontend'\" }]</code> ensures the policy is evaluated only for matching workloads.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CEL", "matchConditions", "Filtering", "ValidatingAdmissionPolicy"]
  },
  {
    id: "k8s-cks-243",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup",
    title: "Remediating Kube-bench Findings: Etcd Client Certificate Authentication",
    scenario: "A <code>kube-bench</code> scan flags CIS check 2.1: 'Ensure that the --client-cert-auth argument is set to true for etcd'.",
    question: "Where and how must this parameter be configured?",
    options: [
      { id: 'A', text: "In <code>/etc/kubernetes/manifests/etcd.yaml</code>, as <code>--client-cert-auth=true</code>" },
      { id: 'B', text: "In <code>/var/lib/kubelet/config.yaml</code>, as <code>etcd.auth: client</code>" },
      { id: 'C', text: "In the API server manifest, as <code>--etcd-client-cert-auth=true</code>" },
      { id: 'D', text: "In <code>/etc/etcd/etcd.conf.yml</code>, as <code>client-cert-auth: true</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The etcd static pod manifest is located at <code>/etc/kubernetes/manifests/etcd.yaml</code>. Setting <code>--client-cert-auth=true</code> mandates that all clients (including the API server) must present a valid TLS certificate to communicate with etcd.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["kube-bench", "etcd", "client-cert-auth", "Control-Plane"]
  },
  {
    id: "k8s-cks-244",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup",
    title: "Detecting Exposed Node Ports with Kube-hunter",
    scenario: "A penetration tester runs <code>kube-hunter --remote &lt;cluster-ip&gt;</code> from an external workstation.",
    question: "Which vulnerable open port discovery indicates that an attacker can query cluster metadata and pod details without authentication?",
    options: [
      { id: 'A', text: "Discovery of open UDP port 53 inside the pod network" },
      { id: 'B', text: "Discovery of an open SSH port requiring ed25519 key authentication" },
      { id: 'C', text: "Discovery of an open, unauthenticated Kubelet Read-Only Port on TCP port 10255" },
      { id: 'D', text: "Discovery of open TCP port 443 with TLS mutual authentication required" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kubelet historically opened an unauthenticated read-only HTTP port on TCP 10255. When exposed, attackers can query <code>/pods</code> on port 10255 to retrieve all running pod manifests, environment variables, and namespace configurations across the node.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["kube-hunter", "Port-10255", "Kubelet-ReadOnly", "Information-Disclosure"]
  },
  {
    id: "k8s-cks-245",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "ValidatingAdmissionPolicy Message Expressions",
    scenario: "A CEL admission policy rejects pods exceeding 4 CPU cores. The administrator wants the rejection error message returned to the developer to dynamically state the exact CPU request that was rejected.",
    question: "Which field in <code>ValidatingAdmissionPolicy</code> generates dynamic, formatted rejection messages?",
    options: [
      { id: 'A', text: "<code>validations[].message</code>, which holds the fixed text for a failed rule" },
      { id: 'B', text: "<code>messageExpression</code>, which builds the text from the object with a CEL expression" },
      { id: 'C', text: "<code>auditAnnotations[].valueExpression</code>, evaluated for each rejected request" },
      { id: 'D', text: "<code>failurePolicy</code>, which selects the text returned when a rule cannot run" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "<code>messageExpression</code> in a <code>ValidatingAdmissionPolicy</code> evaluates a CEL expression that outputs a string. This enables dynamic error messages containing resource values from the evaluated object rather than static error text.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CEL", "messageExpression", "ValidatingAdmissionPolicy", "Developer-Experience"]
  },
  {
    id: "k8s-cks-246",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Securing Webhook Configurations against Unauthorized Modifications",
    scenario: "An attacker with compromised namespace administrative credentials attempts to delete the cluster's <code>ValidatingWebhookConfiguration</code> to bypass admission security checks.",
    question: "Which RBAC rule prevents namespace-level administrators from tampering with admission webhooks?",
    options: [
      { id: 'A', text: "Restrict <code>get, list, watch</code> on <code>admissionregistration.k8s.io</code> resources to cluster-admin, leaving writes to namespace admins" },
      { id: 'B', text: "Restrict <code>create, update, patch, delete</code> on the webhook configuration kinds to cluster-admin" },
      { id: 'C', text: "Restrict the namespace admin Role to the <code>apps</code> and <code>core</code> API groups, so webhook objects fall outside its rules" },
      { id: 'D', text: "Restrict writes to webhook objects with a mutating webhook that rejects edits from non-cluster-admin users" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Webhook configurations are cluster-scoped resources in the <code>admissionregistration.k8s.io</code> API group. Restricting RBAC write permissions (<code>create</code>, <code>update</code>, <code>delete</code>, <code>patch</code>) on these resources ensures that only high-privilege cluster administrators can alter admission pipelines.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["RBAC", "Admission-Webhooks", "Tampering", "Least-Privilege"]
  },
  {
    id: "k8s-cks-247",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup",
    title: "Remediating Kube-bench Findings: Kubelet Authorization Mode",
    scenario: "A CIS Benchmark audit reveals check 4.2.2 is failing: 'Ensure that the --authorization-mode argument is not set to AlwaysAllow'.",
    question: "What is the secure authorization mode for Kubelet that delegates permission checks to the API server via RBAC?",
    options: [
      { id: 'A', text: "Set <code>authorization.mode: Node</code> in the kubelet config" },
      { id: 'B', text: "Set <code>authorization.mode: AlwaysAllow</code> in that config" },
      { id: 'C', text: "Set <code>authorization.mode: ABAC</code> in the kubelet config" },
      { id: 'D', text: "Set <code>authorization.mode: Webhook</code> in the kubelet config" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Setting <code>authorization.mode: Webhook</code> causes the kubelet to query the <code>kube-apiserver</code> via <code>SubjectAccessReview</code> API calls to authorize incoming requests. This ensures that only callers with appropriate RBAC roles can interact with kubelet endpoints.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["kube-bench", "authorization-mode", "Webhook", "Kubelet"]
  },
  {
    id: "k8s-cks-248",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Kyverno Image Verification: Attestation Verification via Cosign",
    scenario: "An enterprise requires that container images must have both a cryptographic signature and an attached vulnerability scan attestation with zero critical CVEs before being scheduled.",
    question: "How does Kyverno verify signed in-toto attestations during admission?",
    options: [
      { id: 'A', text: "In the <code>verifyImages</code> rule, add the Cosign public key and let the signature check cover the attestation too" },
      { id: 'B', text: "In the <code>verifyImages</code> rule, add an <code>attestations</code> block naming the predicate type and the conditions over it" },
      { id: 'C', text: "In a <code>validate</code> rule, compare the image's digest against a ConfigMap the scanner updates after each run" },
      { id: 'D', text: "In a <code>generate</code> rule, materialise the scan report into the namespace so the admission check can read it" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kyverno's <code>verifyImages</code> rule supports verifying signed attestations. By defining <code>attestations</code> with the expected predicate type and adding CEL-like condition blocks, Kyverno can inspect the signed scan results and reject images with excessive vulnerabilities.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Kyverno", "Attestations", "Cosign", "Supply-Chain"]
  },
  {
    id: "k8s-cks-249",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup",
    title: "Remediating Kube-bench Findings: Protecting Worker Node PKI Files",
    scenario: "A <code>kube-bench</code> report flags check 4.1.1: 'Ensure that the kubelet service file permissions are set to 600 or more restrictive' and check 4.1.2: 'Ensure that the kubelet service file ownership is set to root:root'.",
    question: "Which commands remediate file ownership and permissions for the kubelet systemd service unit?",
    options: [
      { id: 'A', text: "<code>chown root:root</code> the kubelet drop-in and <code>chmod 777</code> it" },
      { id: 'B', text: "<code>chown kubelet:kubelet</code> the drop-in and <code>chmod 640</code> it" },
      { id: 'C', text: "<code>chown root:root</code> the kubelet drop-in and <code>chmod 600</code> it" },
      { id: 'D', text: "<code>systemctl mask kubelet</code> and move the drop-in out of the path" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kubelet systemd configuration drop-in files control kubelet startup parameters. To prevent tampering by local unprivileged users, CIS benchmarks mandate that they must be owned by <code>root:root</code> and have permissions set to <code>600</code> (or <code>644</code>).",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["kube-bench", "File-Permissions", "Kubelet", "Host-Hardening"]
  },
  {
    id: "k8s-cks-250",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Validating Admission Policy: Restricting HostPath and Privileged Containers",
    scenario: "A security engineer creates a single, self-contained <code>ValidatingAdmissionPolicy</code> to enforce the CIS benchmark recommendation that containers must not run in privileged mode.",
    question: "Which CEL expression evaluates whether any container in a pod has <code>privileged: true</code>?",
    options: [
      { id: 'A', text: "<code>object.spec.containers.all(c, c.securityContext.privileged == false)</code>" },
      { id: 'B', text: "<code>!object.spec.containers.exists(c, c.securityContext.privileged == true)</code>" },
      { id: 'C', text: "<code>object.spec.containers.filter(c, c.privileged).size() == 0</code>" },
      { id: 'D', text: "<code>object.spec.securityContext.privileged != true</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In CEL, list iteration uses macros like <code>exists</code>. The expression <code>!object.spec.containers.exists(c, has(c.securityContext) && has(c.securityContext.privileged) && c.securityContext.privileged == true)</code> checks whether any container in the pod specification has <code>securityContext.privileged</code> set to true; if so, it returns false and rejects the pod.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CEL", "ValidatingAdmissionPolicy", "Privileged", "CIS-Benchmark"]
  }
];

export default K8S_CKS_QUESTIONS_10;
