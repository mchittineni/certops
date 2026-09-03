export const K8S_CKS_FLASHCARDS_10 = [
  {
    "id": "k8s-cks-fc-226",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "ValidatingAdmissionPolicy: What is its primary advantage over external webhooks?",
    "hint": "In-tree CEL execution without network hops or webhook CA overhead.",
    "back": "It executes <strong>directly in kube-apiserver using CEL</strong> (Common Expression Language). There are zero network calls, no webhook pods to maintain, and no TLS certificate renewal issues.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-227",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "CEL Admission Expression Syntax: How do you access the submitted resource in CEL?",
    "hint": "Via the object variable.",
    "back": "The incoming resource is referenced via <strong>object</strong> (e.g., <code>object.spec.replicas &gt;= 2</code> or <code>object.metadata.labels</code>).",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-228",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "ValidatingAdmissionPolicyBinding: What is the purpose of paramRef?",
    "hint": "Binds policies to configurable parameter resources like ConfigMaps.",
    "back": "<code>paramRef</code> links the policy to a parameter resource (e.g., a ConfigMap or custom CRD), exposing configuration data as <strong>params</strong> inside the CEL expression for flexible multi-tenant policies.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-229",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "Webhook sideEffects: None: Why is sideEffects: None required?",
    "hint": "Guarantees no external state changes during server-side dry-run.",
    "back": "It confirms that calling the webhook has <strong>no out-of-band side effects</strong> on external systems, allowing <code>kubectl apply --dry-run=server</code> to execute safely.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-230",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "Webhook caBundle: What does clientConfig.caBundle contain?",
    "hint": "Base64-encoded root CA certificate that signed the webhook server cert.",
    "back": "The <strong>base64-encoded root CA certificate</strong> that signed the webhook server's TLS certificate, enabling <code>kube-apiserver</code> to verify the webhook server.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-231",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "kube-bench Purpose: What does kube-bench evaluate?",
    "hint": "Automated CIS Kubernetes Benchmark checks and remediations.",
    "back": "It runs automated checks against the <strong>CIS Kubernetes Benchmark</strong>, verifying control plane manifests, etcd configurations, kubelet settings, and file permissions.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-232",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "kube-hunter: How does kube-hunter differ from kube-bench?",
    "hint": "Active penetration testing probing for open ports and exploits.",
    "back": "<code>kube-bench</code> does static configuration audits. <strong>kube-hunter</strong> performs <strong>active network penetration testing</strong>, hunting for exposed kubelets, open etcd, and exploitable endpoints.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-233",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "Gatekeeper Architecture: What are the two core resources in Gatekeeper?",
    "hint": "ConstraintTemplate and Constraint.",
    "back": "1. <strong>ConstraintTemplate</strong>: Defines the Rego logic and parameter schema.<br>2. <strong>Constraint</strong>: Instantiates the template to enforce rules on specific resources/namespaces.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-234",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "Kyverno validate Pattern: How do you enforce a required label in Kyverno?",
    "hint": "validate rule with pattern metadata.labels.",
    "back": "Use a <strong>validate</strong> rule with <code>pattern: { metadata: { labels: { &lt;label-name&gt;: '?*' } } }</code> to ensure the label exists and is non-empty.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-235",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "failurePolicy: Fail Risk: What happens if a webhook pod crashes?",
    "hint": "Blocks all matching resource creation requests (fail-closed).",
    "back": "The API server <strong>rejects all matching creation/update requests</strong>. This guarantees security at the cost of potential deployment outages if the webhook fails.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-236",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "Webhook Idempotency: Why must mutating webhooks be idempotent?",
    "hint": "Prevents infinite loops and inconsistent mutations on retry.",
    "back": "If a webhook modifies an object, it may be re-invoked. Webhooks must produce <strong>no changes if the object already meets requirements</strong>, preventing infinite loops.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-237",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "Gatekeeper dryrun Enforcement: What does enforcementAction: dryrun do?",
    "hint": "Logs violations in status and metrics without rejecting requests.",
    "back": "It allows non-compliant resources to be created while <strong>recording violations in the constraint status and Prometheus metrics</strong> for auditing.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-238",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "namespaceSelector on Webhooks: Why exclude kube-system from webhooks?",
    "hint": "Prevents webhook failures from locking down essential control plane daemons.",
    "back": "Excluding <code>kube-system</code> ensures that if the webhook fails, critical cluster components (CoreDNS, CNI plugins) can still start and function.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-239",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "Kubelet Anonymous Auth CIS Check: How do you disable anonymous kubelet access?",
    "hint": "authentication.anonymous.enabled: false in config.yaml.",
    "back": "Set <strong>authentication.anonymous.enabled: false</strong> in <code>/var/lib/kubelet/config.yaml</code> and restart the kubelet service.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-240",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "Kubelet clientCAFile: Why is configuring a client CA on port 10250 critical?",
    "hint": "Mandates TLS client certificate authentication for kubelet API.",
    "back": "It ensures the Kubelet API requires and verifies <strong>X.509 client certificates</strong>, preventing unauthenticated network attackers from executing commands in pods.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-241",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "Kyverno mutate Rules: How does Kyverno auto-inject securityContexts?",
    "hint": "Using patchStrategicMerge in a mutate rule.",
    "back": "A <strong>mutate</strong> rule with <code>patchStrategicMerge</code> injects default fields (e.g., <code>runAsNonRoot: true</code>) into pod templates before admission without rejecting requests.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-242",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "matchConditions in CEL Policies: What is their purpose?",
    "hint": "Filters which resources are evaluated by the CEL policy.",
    "back": "<code>matchConditions</code> evaluate lightweight CEL expressions (e.g., <code>object.metadata.labels['tier'] == 'prod'</code>) to skip policy evaluation for non-targeted resources.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-243",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "etcd --client-cert-auth: Where is this CIS benchmark check configured?",
    "hint": "/etc/kubernetes/manifests/etcd.yaml command flags.",
    "back": "In the etcd static pod manifest at <strong>/etc/kubernetes/manifests/etcd.yaml</strong>. It enforces that all clients connecting to etcd must present verified TLS certificates.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-244",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "Kubelet Read-Only Port 10255: Why does kube-hunter flag port 10255?",
    "hint": "Unauthenticated access to all pod manifests and metadata.",
    "back": "TCP port 10255 exposes an <strong>unauthenticated read-only HTTP API</strong> that leaks all running pod definitions, configurations, and environment metadata.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-245",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "messageExpression in CEL Policies: What does it accomplish?",
    "hint": "Generates dynamic error messages using object values.",
    "back": "It evaluates a CEL expression that constructs <strong>dynamic, contextual rejection messages</strong> (e.g., displaying the exact invalid value submitted by the user).",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-246",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "Protecting Webhook Configurations: Which RBAC permissions must be guarded?",
    "hint": "write access on validating/mutatingwebhookconfigurations in admissionregistration.k8s.io.",
    "back": "Restrict <code>create, update, patch, delete</code> on <strong>validatingwebhookconfigurations</strong> and <strong>mutatingwebhookconfigurations</strong> to <code>cluster-admin</code> only.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-247",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "Kubelet authorization.mode: Webhook: How does it authorize API calls?",
    "hint": "Delegates authorization to kube-apiserver via SubjectAccessReview.",
    "back": "The kubelet sends a <strong>SubjectAccessReview</strong> request to <code>kube-apiserver</code> to verify whether the calling user has RBAC permission to perform the action.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-248",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "Kyverno Attestation Verification: What can Kyverno verify via Cosign?",
    "hint": "Vulnerability scan results and SLSA build provenance.",
    "back": "In <code>verifyImages</code>, Kyverno inspects signed <strong>in-toto attestations</strong>, verifying vulnerability scan thresholds (e.g., 0 critical CVEs) and SLSA build provenance.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-249",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "Kubelet Systemd Drop-in Permissions: What ownership and permissions are required by CIS?",
    "hint": "root:root with 600 (or 644) permissions.",
    "back": "Owned by <strong>root:root</strong> with permissions <strong>600</strong> (or 644) on <code>10-kubeadm.conf</code> to prevent local unprivileged modification of kubelet startup flags.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-250",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d6",
    "front": "Privileged Pod Prevention in CEL: What CEL list macro checks container fields?",
    "hint": "object.spec.containers.exists(...).",
    "back": "<code>!object.spec.containers.exists(c, has(c.securityContext) && c.securityContext.privileged == true)</code>",
    "tags": [
      "CKS",
      "Cluster"
    ]
  }
];

export default K8S_CKS_FLASHCARDS_10;
