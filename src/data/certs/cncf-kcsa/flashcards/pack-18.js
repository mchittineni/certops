export const CNCF_KCSA_FLASHCARDS_18 = [
  {
    id: 'cncf-kcsa-fc-426',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'In the hub-and-spoke model, which connections go from the control plane out to the nodes?',
    hint: 'Most traffic flows toward the API server; a few paths go the other way.',
    back: 'Nodes and pods only ever connect <strong>to the API server</strong>. The reverse direction has two paths: <strong>API server to kubelet</strong> (port 10250) for logs, exec, attach and port-forward, and <strong>API server proxy</strong> connections to nodes, pods and services. These outbound paths need extra care, because by default they are not fully verified.',
    tags: ['Control plane', 'Connectivity']
  },
  {
    id: 'cncf-kcsa-fc-427',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'How secure are API server proxy connections to nodes, pods and services by default?',
    hint: 'Read the fine print in the control plane to node communication page.',
    back: 'By default they are <strong>plain HTTP</strong>, so they are <strong>neither authenticated nor encrypted</strong>. They can run over HTTPS by prefixing the name in the proxy URL with https:, but the API server does not verify the endpoint\'s certificate. Kubernetes documents that these connections are not currently safe over untrusted or public networks.',
    tags: ['API server proxy', 'Connectivity']
  },
  {
    id: 'cncf-kcsa-fc-428',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'What is the Konnectivity service, and what does it replace?',
    hint: 'Agents dial out; the server sits next to the API server.',
    back: 'Konnectivity provides a <strong>TCP-level proxy</strong> for control-plane-to-cluster traffic. A <strong>Konnectivity server</strong> runs in the control-plane network and <strong>Konnectivity agents</strong> run in the node network, opening outbound connections to it. The API server then sends its traffic to kubelets, pods and services through those tunnels, which suits nodes behind firewalls. It replaces the deprecated <strong>SSH tunnels</strong> feature.',
    tags: ['Konnectivity', 'Control plane']
  },
  {
    id: 'cncf-kcsa-fc-429',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Gateway API: how do GatewayClass, Gateway and Route objects split responsibility, and why does that help security?',
    hint: 'Three personas, three objects.',
    back: '<strong>GatewayClass</strong> is cluster-scoped and defined by the infrastructure provider. A <strong>Gateway</strong> is owned by the cluster operator and defines listeners, TLS certificates and, through <strong>allowedRoutes</strong>, which namespaces may attach routes. <strong>HTTPRoute</strong> and other Route objects are owned by application teams. Because of this role-oriented split, developers can manage routing without editing shared load balancers or reading TLS keys, and cross-namespace references need a <strong>ReferenceGrant</strong>.',
    tags: ['Gateway API', 'Multi-tenancy']
  },
  {
    id: 'cncf-kcsa-fc-430',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Ingress vs Gateway API: what is the difference?',
    hint: 'One is frozen, one is where development happens now.',
    back: '<strong>Ingress</strong> is the original, HTTP-focused API. It is stable but <strong>frozen</strong>, and depends on controller-specific annotations for features such as backend TLS or header rules. <strong>Gateway API</strong> is its successor: role-oriented (GatewayClass, Gateway, Routes), portable, covering HTTP, gRPC, TLS and TCP routing, with explicit cross-namespace controls. New features are added to the Gateway API, not to Ingress.',
    tags: ['Ingress', 'Gateway API']
  },
  {
    id: 'cncf-kcsa-fc-431',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Edge termination, re-encryption and TLS passthrough: what does each mean at an ingress point?',
    hint: 'Where is the TLS session decrypted?',
    back: '<strong>Edge termination</strong>: the proxy decrypts, and traffic to the pod is plaintext. <strong>Re-encryption</strong>: the proxy decrypts, inspects or routes, then opens a new TLS connection to the backend. <strong>Passthrough</strong>: the proxy routes on SNI without decrypting, and the pod terminates TLS and holds the key. Only re-encryption and passthrough keep data encrypted all the way to the pod. Passthrough rules out L7 features at the proxy.',
    tags: ['TLS', 'Ingress']
  },
  {
    id: 'cncf-kcsa-fc-432',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Rank the Service types ClusterIP, NodePort, LoadBalancer and ExternalName by how much they expose.',
    hint: 'Each type builds on the one before.',
    back: '<strong>ClusterIP</strong>: a virtual IP reachable only inside the cluster (least exposed). <strong>NodePort</strong>: also opens a port (30000-32767 by default) on <strong>every node</strong>. <strong>LoadBalancer</strong>: also provisions an external load balancer, usually public unless annotated as internal or limited by loadBalancerSourceRanges. <strong>ExternalName</strong> exposes nothing; it is only a DNS CNAME to another name, but it can be abused to send traffic somewhere unexpected.',
    tags: ['Services', 'Exposure']
  },
  {
    id: 'cncf-kcsa-fc-433',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Why is a Service\'s spec.externalIPs field a traffic-interception risk (CVE-2020-8554), and how is it mitigated?',
    hint: 'Anyone who can create a Service can claim any address.',
    back: 'kube-proxy on every node captures traffic for any IP listed in <strong>spec.externalIPs</strong>, with no check on who owns that address. A tenant allowed to create Services can claim, say, a public DNS resolver\'s IP and receive the traffic other pods send to it: a man-in-the-middle design flaw with no code fix. Mitigations: enable the <strong>DenyServiceExternalIPs</strong> admission plugin (off by default) when nothing needs the field, or let Kyverno or Gatekeeper allow a vetted list. Also restrict <code>patch</code> on <code>services/status</code>, which allows the same trick through LoadBalancer ingress IPs.',
    tags: ['Services', 'externalIPs', 'Admission control']
  },
  {
    id: 'cncf-kcsa-fc-434',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'What is an admission controller, and where does it sit in the API request flow?',
    hint: 'After you are known and allowed, before it is saved.',
    back: 'An <strong>admission controller</strong> is code that intercepts requests to the API server <strong>after authentication and authorization</strong> and <strong>before the object is persisted</strong> to etcd. It can <strong>mutate</strong> the object, <strong>validate</strong> it, or both, and can reject the request. It sees create, update, delete and connect requests, never reads.',
    tags: ['Admission control']
  },
  {
    id: 'cncf-kcsa-fc-435',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Why should a must-hold security rule be enforced by validating rather than mutating admission?',
    hint: 'Who gets the last look at the object?',
    back: '<strong>Mutating</strong> admission may modify the object, for example to set defaults, inject sidecars, or add labels and tolerations. <strong>Validating</strong> admission may only accept or reject it. Mutating runs first, then schema validation, then validating, so validators judge the final object. Security guarantees belong in validating admission, since a later mutation could undo a mutating default.',
    tags: ['Admission control', 'Mutating', 'Validating']
  },
  {
    id: 'cncf-kcsa-fc-436',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'What are the defaults for failurePolicy and timeoutSeconds on admissionregistration.k8s.io/v1 webhooks?',
    hint: 'Closed by default, and about ten seconds.',
    back: '<strong>failurePolicy</strong> defaults to <strong>Fail</strong> in v1 (v1beta1 defaulted to Ignore), so errors and timeouts reject the request. <strong>timeoutSeconds</strong> defaults to <strong>10</strong> and must be between 1 and 30. Keep webhooks fast, highly available and scoped with selectors, because every matching request waits on them.',
    tags: ['Admission webhooks', 'failurePolicy']
  },
  {
    id: 'cncf-kcsa-fc-437',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'What are the three building blocks of a ValidatingAdmissionPolicy?',
    hint: 'Rule, where it applies, and optional configuration.',
    back: 'The <strong>ValidatingAdmissionPolicy</strong> holds matchConstraints and <strong>CEL</strong> validations, with optional variables, messages and auditAnnotations. A <strong>ValidatingAdmissionPolicyBinding</strong> connects it to resources or namespaces and sets <strong>validationActions</strong> (Deny, Warn, Audit). An optional <strong>parameter resource</strong> (paramKind and paramRef) supplies per-binding values. It is evaluated in-process by the API server, so no webhook has to be run. GA since v1.30.',
    tags: ['ValidatingAdmissionPolicy', 'CEL']
  },
  {
    id: 'cncf-kcsa-fc-438',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'How are built-in admission plugins turned on and off, and is NodeRestriction on by default?',
    hint: 'Two flags. Check the default list.',
    back: 'Use <strong>--enable-admission-plugins</strong> and <strong>--disable-admission-plugins</strong> on kube-apiserver; the order you list them in does not matter. A default set (NamespaceLifecycle, LimitRanger, ServiceAccount, ResourceQuota, PodSecurity, the webhook and ValidatingAdmissionPolicy plugins, among others) is enabled automatically. <strong>NodeRestriction is not</strong> in the upstream default set, so it has to be enabled explicitly. kubeadm enables it for you.',
    tags: ['Admission plugins', 'NodeRestriction']
  },
  {
    id: 'cncf-kcsa-fc-439',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'OPA Gatekeeper: what is the difference between a ConstraintTemplate and a Constraint?',
    hint: 'A reusable rule versus one use of it.',
    back: 'A <strong>ConstraintTemplate</strong> contains the <strong>Rego</strong> logic and a parameter schema, and creates a new CRD kind such as K8sRequiredLabels. A <strong>Constraint</strong> is an instance of that kind: it chooses which resources to match (kinds, namespaces) and supplies parameters, and its enforcementAction can be deny, dryrun or warn. Gatekeeper\'s audit writes existing violations to the Constraint\'s status.',
    tags: ['OPA Gatekeeper', 'Rego']
  },
  {
    id: 'cncf-kcsa-fc-440',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Which rule types can a Kyverno policy contain?',
    hint: 'Five verbs.',
    back: '<strong>validate</strong> (accept or reject, in Enforce or Audit mode), <strong>mutate</strong> (patch resources), <strong>generate</strong> (create or sync related resources such as a default NetworkPolicy per namespace), <strong>verifyImages</strong> (check signatures and attestations, and optionally pin digests), and <strong>cleanup</strong> policies that delete matching resources on a schedule. Results appear in PolicyReport resources.',
    tags: ['Kyverno', 'Policy engines']
  },
  {
    id: 'cncf-kcsa-fc-441',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'What does the CertificateSubjectRestriction admission plugin prevent?',
    hint: 'A sensitive group in a certificate request.',
    back: 'It rejects any CertificateSigningRequest for the <strong>kubernetes.io/kube-apiserver-client</strong> signer that asks for the group <strong>system:masters</strong> in its Organization field. This stops someone who may create and approve CSRs from minting an unrevocable credential that bypasses authorization. The plugin is enabled by default.',
    tags: ['Admission plugins', 'system:masters', 'CSR']
  },
  {
    id: 'cncf-kcsa-fc-442',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'What does the EventRateLimit admission plugin protect against?',
    hint: 'A noisy client flooding one kind of object.',
    back: '<strong>EventRateLimit</strong> caps how fast Event objects are accepted by the API server. Limits can be set per server, per namespace, per user, or per source and object, through a configuration file passed with --admission-control-config-file. It protects the API server and etcd from being flooded with events by a misbehaving or malicious client. It is not enabled by default.',
    tags: ['Admission plugins', 'Denial of service']
  },
  {
    id: 'cncf-kcsa-fc-443',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'What are matchConditions on an admission webhook, and why use them?',
    hint: 'CEL filters that run before the call goes out.',
    back: '<strong>matchConditions</strong> are up to 64 <strong>CEL</strong> expressions evaluated by the API server. The webhook is called only when all of them are true. They cut load and latency by skipping requests that obviously do not concern the policy, for example requests from node identities or updates that touch only status. Unlike label selectors, they can test the request itself, including the user. They are stable since v1.30.',
    tags: ['Admission webhooks', 'CEL', 'matchConditions']
  },
  {
    id: 'cncf-kcsa-fc-444',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'What does the sideEffects field on an admission webhook declare?',
    hint: 'What happens on dryRun requests?',
    back: 'It declares whether calling the webhook changes anything outside the admission response, such as writing to an external system. In v1 the only allowed values are <strong>None</strong> and <strong>NoneOnDryRun</strong>. A request with <strong>dryRun</strong> is sent only to webhooks that declare one of those values. A webhook that really does have side effects has to skip them when the request has dryRun set.',
    tags: ['Admission webhooks', 'Dry run']
  },
  {
    id: 'cncf-kcsa-fc-445',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'How can you tell from the audit log that a mutating webhook changed an object?',
    hint: 'Look at the annotations on the audit event.',
    back: 'The API server adds audit annotations for every mutating webhook it calls. <strong>mutation.webhook.admission.k8s.io/round_N_index_M</strong> records the webhook\'s name and whether it mutated the object. At the <strong>Request</strong> level or above, <strong>patch.webhook.admission.k8s.io/round_N_index_M</strong> also records the JSON patch it applied. This is how a malicious or misconfigured mutating webhook injecting containers can be spotted.',
    tags: ['Audit logging', 'Mutating webhooks']
  },
  {
    id: 'cncf-kcsa-fc-446',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Why is an ingress controller a high-value target?',
    hint: 'What it is exposed to, and what it can read.',
    back: 'It is <strong>internet-facing</strong>, it parses untrusted input, and it usually holds RBAC permission to <strong>read Secrets across namespaces</strong> so it can load TLS keys. A remote code execution bug in it can therefore expose every certificate and credential it can read. Keep it patched, restrict its Secret access where the controller supports that, run it on dedicated nodes, and restrict network access to its admission webhook.',
    tags: ['Ingress controller', 'Attack surface']
  },
  {
    id: 'cncf-kcsa-fc-447',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'API server and kubelet: which setting lets each side verify the other?',
    hint: 'One flag on each side, one per direction.',
    back: '<strong>API server verifying the kubelet</strong>: --kubelet-certificate-authority, which only works if kubelets present CA-signed serving certificates. <strong>API server proving itself to the kubelet</strong>: --kubelet-client-certificate and --kubelet-client-key. <strong>Kubelet accepting that client</strong>: authentication.x509.clientCAFile, with anonymous authentication disabled and Webhook authorization enabled.',
    tags: ['Kubelet', 'kube-apiserver', 'mTLS']
  },
  {
    id: 'cncf-kcsa-fc-448',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'What are the main settings in an ImagePolicyWebhook configuration?',
    hint: 'A kubeconfig for the backend, plus caching and failure behaviour.',
    back: '<strong>kubeConfigFile</strong> says how to reach the backend. <strong>allowTTL</strong> and <strong>denyTTL</strong> set how long approvals and denials are cached. <strong>retryBackoff</strong> sets the wait between retries. <strong>defaultAllow</strong> decides what happens when the backend cannot be reached, and false makes it fail closed. The file is referenced from the AdmissionConfiguration passed with --admission-control-config-file.',
    tags: ['ImagePolicyWebhook', 'Admission plugins']
  },
  {
    id: 'cncf-kcsa-fc-449',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Are admission webhooks called one at a time or in parallel?',
    hint: 'The answer differs for the two kinds.',
    back: '<strong>Mutating</strong> webhooks are called <strong>serially</strong>, each seeing the output of the one before, and they may be called again if reinvocationPolicy is IfNeeded. <strong>Validating</strong> webhooks are called <strong>in parallel</strong>, and a rejection from any one of them rejects the request. Do not write mutating webhooks that depend on running in a particular order. Put the checks that must hold into validating admission.',
    tags: ['Admission webhooks', 'Ordering']
  },
  {
    id: 'cncf-kcsa-fc-450',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'How does a pod reach and authenticate to the Kubernetes API from inside the cluster?',
    hint: 'A well-known DNS name and a mounted token.',
    back: 'Pods reach the API at <strong>kubernetes.default.svc</strong> (the kubernetes Service in the default namespace), which fronts the API server endpoints. The client checks the server against the mounted <strong>ca.crt</strong> and authenticates with the projected <strong>service account token</strong>. Pods that never call the API should set <strong>automountServiceAccountToken: false</strong>.',
    tags: ['Service accounts', 'kube-apiserver']
  }
];

export default CNCF_KCSA_FLASHCARDS_18;
