export const K8S_CKS_QUESTIONS_10 = [
  {
    id: "k8s-cks-226",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "ValidatingAdmissionPolicy: In-Tree CEL-Based Admission Control",
    scenario: "An enterprise wants to enforce admission control rules (e.g., forbidding privileged pods and requiring resource limits) without the network latency, certificate management overhead, and availability failure modes of external webhook controllers.",
    question: "Which native Kubernetes feature evaluates admission rules directly in kube-apiserver using Common Expression Language (CEL)?",
    options: [
      { id: 'A', text: "<code>CustomResourceDefinition</code> validation schemas" },
      { id: 'B', text: "<code>ValidatingAdmissionPolicy</code> and <code>ValidatingAdmissionPolicyBinding</code>" },
      { id: 'C', text: "<code>LimitRange</code> admission controller" },
      { id: 'D', text: "<code>MutatingWebhookConfiguration</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "<code>ValidatingAdmissionPolicy</code> (introduced as beta in modern Kubernetes) allows cluster administrators to declare admission rules directly in <code>kube-apiserver</code> using Common Expression Language (CEL). Rules execute in-process without network calls, external pods, or webhook CA management.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CEL", "ValidatingAdmissionPolicy", "In-Tree", "Admission-Control"]
  },
  {
    id: "k8s-cks-227",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Writing CEL Expressions in ValidatingAdmissionPolicy",
    scenario: "A security policy requires that every Deployment deployed to production must have a replica count greater than or equal to 2.",
    question: "Which CEL expression in a <code>ValidatingAdmissionPolicy</code> enforces this replica constraint?",
    options: [
      { id: 'A', text: "<code>regex(object.spec.replicas, '^[2-9]$')</code>" },
      { id: 'B', text: "<code>object.spec.replicas &gt;= 2</code>" },
      { id: 'C', text: "<code>input.review.object.spec.replicas &gt;= 2</code>" },
      { id: 'D', text: "<code>spec.replicas &gt; 2 or die()</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Kubernetes CEL admission policies, the incoming object is accessed via the <code>object</code> identifier. The expression <code>object.spec.replicas &gt;= 2</code> evaluates to boolean true if the replica count meets the requirement; if false, admission is rejected.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CEL", "ValidatingAdmissionPolicy", "Replicas", "Syntax"]
  },
  {
    id: "k8s-cks-228",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Binding ValidatingAdmissionPolicies with Param Resources",
    scenario: "An administrator creates a generic <code>ValidatingAdmissionPolicy</code> that checks if an image comes from an allowed registry list. Different namespaces need different lists of allowed registries.",
    question: "How does <code>ValidatingAdmissionPolicyBinding</code> support parameterization across namespaces?",
    options: [
      { id: 'A', text: "The policy must be duplicated with hardcoded strings into every namespace" },
      { id: 'B', text: "The binding executes an external shell script to read local environment variables" },
      { id: 'C', text: "The binding specifies a <code>paramRef</code> that references a custom configuration object or ConfigMap containing the environment-specific registry list via <code>params</code> in CEL" },
      { id: 'D', text: "The binding passes secrets via HTTP GET parameters to the API server" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "<code>ValidatingAdmissionPolicyBinding</code> supports parameter resources via <code>paramRef</code>. The referenced resource (e.g., a custom param CRD or ConfigMap) is exposed to the CEL expression as <code>params</code>, enabling reusable parameterized policies across different namespaces.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CEL", "ValidatingAdmissionPolicyBinding", "Parameters", "Governance"]
  },
  {
    id: "k8s-cks-229",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Configuring Webhook SideEffects in Admission Controllers",
    scenario: "When configuring a <code>ValidatingWebhookConfiguration</code>, the API server requires declaring the <code>sideEffects</code> field.",
    question: "What does setting <code>sideEffects: None</code> signify to the Kubernetes API server?",
    options: [
      { id: 'A', text: "The webhook has no out-of-band side effects on external systems during dry-run evaluations, ensuring <code>kubectl apply --dry-run=server</code> executes safely without modifying external state" },
      { id: 'B', text: "The webhook ignores non-root containers" },
      { id: 'C', text: "The webhook does not log incoming requests to disk" },
      { id: 'D', text: "The webhook allows requests even if TLS certificates are expired" }
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
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Securing Admission Webhook Traffic with caBundle",
    scenario: "A custom <code>ValidatingAdmissionWebhook</code> fails with the error: <code>x509: certificate signed by unknown authority</code>.",
    question: "How must the API server be configured to trust the TLS certificate presented by the webhook server?",
    options: [
      { id: 'A', text: "Embed the base64-encoded root CA certificate that signed the webhook server's certificate into the <code>clientConfig.caBundle</code> field of the webhook configuration" },
      { id: 'B', text: "Add the webhook certificate directly to the Linux host kernel keystore" },
      { id: 'C', text: "Mount <code>/etc/kubernetes/pki</code> into the webhook pod" },
      { id: 'D', text: "Disable TLS verification by setting <code>insecureSkipVerify: true</code> on the API server static pod" }
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
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Automated CIS Benchmark Scanning with Kube-bench",
    scenario: "An enterprise requires verifying that all master and worker nodes comply with the Center for Internet Security (CIS) Kubernetes Benchmark.",
    question: "Which tool runs automated CIS benchmark checks and provides remediation instructions for failing control plane and worker configurations?",
    options: [
      { id: 'A', text: "<code>kube-bench</code> (run as a Job or binary on cluster nodes)" },
      { id: 'B', text: "<code>falco</code>" },
      { id: 'C', text: "<code>kubesec</code>" },
      { id: 'D', text: "<code>kube-hunter</code>" }
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
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Active Cluster Penetration Testing with Kube-hunter",
    scenario: "A red team wants to hunt for security weaknesses, exposed etcd instances, open kubelet read-only ports, and unauthenticated proxy endpoints from both inside and outside the cluster network.",
    question: "Which tool actively hunts for vulnerabilities and simulates attacker penetration techniques against a running cluster?",
    options: [
      { id: 'A', text: "<code>trivy</code>" },
      { id: 'B', text: "<code>kube-hunter</code>" },
      { id: 'C', text: "<code>sonobuoy</code>" },
      { id: 'D', text: "<code>kube-bench</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "<code>kube-hunter</code> (by Aqua Security) performs active penetration testing against Kubernetes clusters. It probes API servers, kubelets, etcd, and cloud metadata endpoints from an attacker's perspective, discovering exposed services and configuration vulnerabilities.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["kube-hunter", "Penetration-Testing", "Red-Team", "Threat-Detection"]
  },
  {
    id: "k8s-cks-233",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "OPA Gatekeeper ConstraintTemplate Structure",
    scenario: "A platform team develops an OPA Gatekeeper policy requiring that all namespaces have an <code>owner</code> label.",
    question: "What are the two distinct custom resources required to define and enforce this policy in Gatekeeper?",
    options: [
      { id: 'A', text: "A <code>ValidatingWebhookConfiguration</code> and a <code>ClusterRole</code>" },
      { id: 'B', text: "A <code>ConstraintTemplate</code> (defining the Rego logic and CRD schema) and a corresponding <code>Constraint</code> CRD (instantiating the template with scope and parameters)" },
      { id: 'C', text: "A <code>ConfigMap</code> and an <code>AdmissionPlugin</code>" },
      { id: 'D', text: "A <code>PolicyRule</code> and a <code>PolicyBinding</code>" }
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
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Enforcing Pod Labeling Policies with Kyverno",
    scenario: "An organization requires that all new Pods in development namespaces must have an <code>environment</code> label.",
    question: "Which Kyverno <code>ClusterPolicy</code> rule pattern validates the presence of this label?",
    options: [
      { id: 'A', text: "A <code>generate</code> rule that clones a label ConfigMap" },
      { id: 'B', text: "A <code>mutate</code> rule with <code>patchStrategicMerge</code>" },
      { id: 'C', text: "A <code>verifyImages</code> rule matching <code>environment</code>" },
      { id: 'D', text: "A <code>validate</code> rule with a <code>pattern: { metadata: { labels: { environment: '?*' } } }</code>" }
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
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Webhook FailurePolicy: Fail vs Ignore Trade-offs",
    scenario: "An organization configures a mutating admission webhook that injects security sidecars. During high traffic spikes, the webhook pod crashes under load.",
    question: "What happens to new deployment requests if the webhook is configured with <code>failurePolicy: Fail</code>?",
    options: [
      { id: 'A', text: "All new pod creation requests fail immediately with an API error, ensuring uninspected pods never run at the expense of cluster deployment availability" },
      { id: 'B', text: "The API server automatically restarts the webhook pod" },
      { id: 'C', text: "Requests are allowed to proceed without sidecar injection" },
      { id: 'D', text: "The requests are converted into dry-run requests" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "<code>failurePolicy: Fail</code> enforces strict security (fail-closed). If the webhook endpoint cannot be reached or times out, the API server denies the creation of matching objects. In contrast, <code>failurePolicy: Ignore</code> allows the creation to succeed unvalidated (fail-open).",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Admission-Webhooks", "failurePolicy", "Fail-Closed", "High-Availability"]
  },
  {
    id: "k8s-cks-236",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Mitigating Webhook Re-Entrancy and Looping",
    scenario: "A mutating admission webhook modifies deployments. When the webhook patches a deployment, the resulting update triggers another admission review, causing an infinite loop.",
    question: "Which webhook configuration setting or filter prevents mutating webhooks from endlessly intercepting their own modifications?",
    options: [
      { id: 'A', text: "Set <code>timeoutSeconds: 0</code> in the webhook configuration" },
      { id: 'B', text: "Disable admission control on the API server" },
      { id: 'C', text: "Change the webhook to a ValidatingAdmissionWebhook" },
      { id: 'D', text: "Configure <code>reinvocationPolicy: IfNeeded</code> and ensure the webhook logic is idempotent (producing no changes if the desired state is already present)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Mutating webhooks must be strictly idempotent: if an incoming object already contains the required sidecar or annotations, the webhook must return an empty patch. Setting <code>reinvocationPolicy: IfNeeded</code> allows webhooks to be re-called only if another webhook in the chain altered the object.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Admission-Webhooks", "reinvocationPolicy", "Idempotency", "Loop-Prevention"]
  },
  {
    id: "k8s-cks-237",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
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
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Restricting Admission Webhook Scope with namespaceSelector",
    scenario: "A custom admission webhook must only inspect pods created in user application namespaces and must never intercept critical system pods in <code>kube-system</code> or <code>kube-node-lease</code>.",
    question: "Which configuration block in the webhook manifest excludes system namespaces from interception?",
    options: [
      { id: 'A', text: "Set <code>failurePolicy: Ignore</code> across all namespaces" },
      { id: 'B', text: "Set <code>rules: [{ apiGroups: ['*'], resources: ['nodes'] }]</code>" },
      { id: 'C', text: "Configure <code>namespaceSelector.matchExpressions</code> to exclude namespaces with label <code>kubernetes.io/metadata.name: kube-system</code>" },
      { id: 'D', text: "Delete the <code>kube-system</code> namespace" }
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
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Remediating Kube-bench Findings: Anonymous Kubelet Requests",
    scenario: "A <code>kube-bench</code> scan reports failure on CIS check 4.2.1: 'Ensure that the --anonymous-auth argument is set to false'.",
    question: "How should this vulnerability be remediated in the worker node kubelet configuration?",
    options: [
      { id: 'A', text: "Add an ingress rule blocking port 6443" },
      { id: 'B', text: "Delete <code>/etc/kubernetes/kubelet.conf</code>" },
      { id: 'C', text: "Add <code>--anonymous-auth=true</code> to <code>/etc/kubernetes/manifests/kube-apiserver.yaml</code>" },
      { id: 'D', text: "In <code>/var/lib/kubelet/config.yaml</code>, set <code>authentication.anonymous.enabled: false</code> and restart the kubelet daemon" }
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
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Remediating Kube-bench Findings: Kubelet Client CA",
    scenario: "A <code>kube-bench</code> report flags check 4.2.3: 'Ensure that the --client-ca-file argument is set as appropriate'.",
    question: "Why is configuring <code>client-ca-file</code> on the kubelet critical for node security?",
    options: [
      { id: 'A', text: "It instructs the kubelet to authenticate incoming requests to its HTTPS API (port 10250) using X.509 client certificate verification, preventing unauthenticated callers from executing commands or reading logs" },
      { id: 'B', text: "It encrypts the host root filesystem using client certificates" },
      { id: 'C', text: "It allows the kubelet to issue TLS certificates to pods" },
      { id: 'D', text: "It automatically updates Docker daemon configurations" }
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
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
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
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Validating Admission Policy Matching by Labels with matchConditions",
    scenario: "A CEL-based <code>ValidatingAdmissionPolicy</code> should only apply to pods that have the label <code>tier: frontend</code>.",
    question: "How can policy evaluation be conditionally filtered in modern Kubernetes admission policies?",
    options: [
      { id: 'A', text: "Add a <code>matchCondition</code> with expression <code>object.metadata.labels['tier'] == 'frontend'</code>" },
      { id: 'B', text: "Create a separate webhook server for frontend pods" },
      { id: 'C', text: "Add an emptyDir volume to the frontend pod" },
      { id: 'D', text: "Deploy an egress NetworkPolicy targeting port 80" }
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
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Remediating Kube-bench Findings: Etcd Client Certificate Authentication",
    scenario: "A <code>kube-bench</code> scan flags CIS check 2.1: 'Ensure that the --client-cert-auth argument is set to true for etcd'.",
    question: "Where and how must this parameter be configured?",
    options: [
      { id: 'A', text: "In <code>/etc/kubernetes/manifests/kube-apiserver.yaml</code>, add <code>--etcd-client-cert-auth=true</code>" },
      { id: 'B', text: "In <code>/var/lib/kubelet/config.yaml</code>, set <code>etcd.auth: client</code>" },
      { id: 'C', text: "In the etcd CoreDNS configuration file" },
      { id: 'D', text: "In <code>/etc/kubernetes/manifests/etcd.yaml</code>, ensure <code>--client-cert-auth=true</code> is present in the etcd command flags" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The etcd static pod manifest is located at <code>/etc/kubernetes/manifests/etcd.yaml</code>. Setting <code>--client-cert-auth=true</code> mandates that all clients (including the API server) must present a valid TLS certificate to communicate with etcd.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["kube-bench", "etcd", "client-cert-auth", "Control-Plane"]
  },
  {
    id: "k8s-cks-244",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
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
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "ValidatingAdmissionPolicy Message Expressions",
    scenario: "A CEL admission policy rejects pods exceeding 4 CPU cores. The administrator wants the rejection error message returned to the developer to dynamically state the exact CPU request that was rejected.",
    question: "Which field in <code>ValidatingAdmissionPolicy</code> generates dynamic, formatted rejection messages?",
    options: [
      { id: 'A', text: "<code>errorMessage</code>" },
      { id: 'B', text: "<code>messageExpression</code> using string concatenation or formatting in CEL (e.g., <code>'CPU request ' + object.spec.containers[0].resources.requests.cpu + ' exceeds maximum limit 4'</code>)" },
      { id: 'C', text: "<code>alertTemplate</code>" },
      { id: 'D', text: "<code>rejectionText</code>" }
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
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Securing Webhook Configurations against Unauthorized Modifications",
    scenario: "An attacker with compromised namespace administrative credentials attempts to delete the cluster's <code>ValidatingWebhookConfiguration</code> to bypass admission security checks.",
    question: "Which RBAC rule prevents namespace-level administrators from tampering with admission webhooks?",
    options: [
      { id: 'A', text: "Ensure that permissions to <code>create, update, patch, delete</code> on resources <code>validatingwebhookconfigurations</code> and <code>mutatingwebhookconfigurations</code> in API group <code>admissionregistration.k8s.io</code> are strictly restricted to <code>cluster-admin</code>" },
      { id: 'B', text: "Set <code>readOnlyRootFilesystem: true</code> on the API server pod" },
      { id: 'C', text: "Annotate the webhook with <code>immutable: true</code>" },
      { id: 'D', text: "Mount <code>/etc/kubernetes/admin.conf</code> as read-only" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Webhook configurations are cluster-scoped resources in the <code>admissionregistration.k8s.io</code> API group. Restricting RBAC write permissions (<code>create</code>, <code>update</code>, <code>delete</code>, <code>patch</code>) on these resources ensures that only high-privilege cluster administrators can alter admission pipelines.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["RBAC", "Admission-Webhooks", "Tampering", "Least-Privilege"]
  },
  {
    id: "k8s-cks-247",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Remediating Kube-bench Findings: Kubelet Authorization Mode",
    scenario: "A CIS Benchmark audit reveals check 4.2.2 is failing: 'Ensure that the --authorization-mode argument is not set to AlwaysAllow'.",
    question: "What is the secure authorization mode for Kubelet that delegates permission checks to the API server via RBAC?",
    options: [
      { id: 'A', text: "Set <code>authorization.mode: Webhook</code> in <code>/var/lib/kubelet/config.yaml</code>" },
      { id: 'B', text: "Set <code>authorization.mode: AlwaysAllow</code>" },
      { id: 'C', text: "Set <code>authorization.mode: Node</code>" },
      { id: 'D', text: "Set <code>authorization.mode: ABAC</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Setting <code>authorization.mode: Webhook</code> causes the kubelet to query the <code>kube-apiserver</code> via <code>SubjectAccessReview</code> API calls to authorize incoming requests. This ensures that only callers with appropriate RBAC roles can interact with kubelet endpoints.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["kube-bench", "authorization-mode", "Webhook", "Kubelet"]
  },
  {
    id: "k8s-cks-248",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Kyverno Image Verification: Attestation Verification via Cosign",
    scenario: "An enterprise requires that container images must have both a cryptographic signature and an attached vulnerability scan attestation with zero critical CVEs before being scheduled.",
    question: "How does Kyverno verify signed in-toto attestations during admission?",
    options: [
      { id: 'A', text: "In the <code>verifyImages</code> rule, declare an <code>attestations</code> block specifying the predicate type (e.g., <code>https://cosign.sigstore.dev/attestation/vuln/v1</code>) and conditions inspecting CVE counts" },
      { id: 'B', text: "Run <code>trivy image</code> inside a Kubernetes init container" },
      { id: 'C', text: "Mount the vulnerability scan report as a ConfigMap in the target namespace" },
      { id: 'D', text: "Pass the Cosign public key to the Linux kernel via <code>sysctl</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kyverno's <code>verifyImages</code> rule supports verifying signed attestations. By defining <code>attestations</code> with the expected predicate type and adding CEL-like condition blocks, Kyverno can inspect the signed scan results and reject images with excessive vulnerabilities.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Kyverno", "Attestations", "Cosign", "Supply-Chain"]
  },
  {
    id: "k8s-cks-249",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Remediating Kube-bench Findings: Protecting Worker Node PKI Files",
    scenario: "A <code>kube-bench</code> report flags check 4.1.1: 'Ensure that the kubelet service file permissions are set to 600 or more restrictive' and check 4.1.2: 'Ensure that the kubelet service file ownership is set to root:root'.",
    question: "Which commands remediate file ownership and permissions for the kubelet systemd service unit?",
    options: [
      { id: 'A', text: "Execute <code>chown root:root /etc/systemd/system/kubelet.service.d/10-kubeadm.conf && chmod 600 /etc/systemd/system/kubelet.service.d/10-kubeadm.conf</code>" },
      { id: 'B', text: "Execute <code>chmod 777 /etc/systemd/system/kubelet.service.d/10-kubeadm.conf</code>" },
      { id: 'C', text: "Execute <code>chown kubelet:kubelet /var/lib/kubelet/config.yaml</code>" },
      { id: 'D', text: "Execute <code>systemctl mask kubelet</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubelet systemd configuration drop-in files control kubelet startup parameters. To prevent tampering by local unprivileged users, CIS benchmarks mandate that they must be owned by <code>root:root</code> and have permissions set to <code>600</code> (or <code>644</code>).",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["kube-bench", "File-Permissions", "Kubelet", "Host-Hardening"]
  },
  {
    id: "k8s-cks-250",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Validating Admission Policy: Restricting HostPath and Privileged Containers",
    scenario: "A security engineer creates a single, self-contained <code>ValidatingAdmissionPolicy</code> to enforce the CIS benchmark recommendation that containers must not run in privileged mode.",
    question: "Which CEL expression evaluates whether any container in a pod has <code>privileged: true</code>?",
    options: [
      { id: 'A', text: "<code>object.spec.privileged == false</code>" },
      { id: 'B', text: "<code>!object.spec.containers.exists(c, has(c.securityContext) && has(c.securityContext.privileged) && c.securityContext.privileged == true)</code>" },
      { id: 'C', text: "<code>object.containers.filter(c =&gt; c.privileged).length() == 0</code>" },
      { id: 'D', text: "<code>spec.securityContext.privileged != true</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In CEL, list iteration uses macros like <code>exists</code>. The expression <code>!object.spec.containers.exists(c, has(c.securityContext) && has(c.securityContext.privileged) && c.securityContext.privileged == true)</code> checks whether any container in the pod specification has <code>securityContext.privileged</code> set to true; if so, it returns false and rejects the pod.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CEL", "ValidatingAdmissionPolicy", "Privileged", "CIS-Benchmark"]
  }
];

export default K8S_CKS_QUESTIONS_10;
