export const CNCF_KCSA_QUESTIONS_18 = [
  {
    id: "cncf-kcsa-426",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Where node-originated connections are allowed to go",
    scenario: "A hospital is writing firewall rules for a new cluster whose control plane runs on three dedicated VMs. The network team asks which control-plane endpoint kubelets and pods need to reach, so that every other control-plane port can be closed to the worker subnet.",
    question: "Which component should be the only control-plane destination for traffic from nodes and pods?",
    options: [
      { id: 'A', text: "The kube-controller-manager, reached on port 10257" },
      { id: 'B', text: "The kube-scheduler, reached on its secure port 10259" },
      { id: 'C', text: "The kube-apiserver, over TLS on its secure HTTPS port" },
      { id: 'D', text: "The etcd cluster, reached on client port 2379 over TLS" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kubernetes uses a hub-and-spoke model in which all API usage from nodes and pods terminates at the API server, which listens on a secure HTTPS port (typically 443 or 6443) and authenticates kubelets with client certificates and pods with service account tokens. No other control-plane component is designed to receive connections from nodes. Only the API servers should reach etcd, and exposing it to workers would let a compromised node bypass all API authorization. The scheduler and controller manager talk to the API server themselves; their secure ports serve health and metrics and should stay closed to the worker subnet.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/control-plane-node-communication/",
    tags: ["Control plane", "Network segmentation", "kube-apiserver"]
  },
  {
    id: "cncf-kcsa-427",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Control plane in the cloud, nodes behind an on-premises firewall",
    scenario: "A manufacturer runs its control plane in a cloud VPC while worker nodes sit in factories that connect over the internet. The factory firewalls allow only outbound connections, so kubectl logs, exec and port-forward fail because the API server cannot open connections to the kubelets. Security will not allow any inbound port to be opened at the factories.",
    question: "What should the platform team deploy?",
    options: [
      { id: 'A', text: "A NodePort Service in front of the kubelets so the API server reaches port 10250 through a stable node port." },
      { id: 'B', text: "The Konnectivity service, whose agents on the nodes dial out to a server that carries control-plane traffic back." },
      { id: 'C', text: "SSH tunnels configured on the kube-apiserver so that it reaches each kubelet through a node-initiated session." },
      { id: 'D', text: "Port forwarding for 10250 on each factory firewall, restricted to the public IP of the cloud control plane." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Konnectivity service provides a TCP-level proxy for control-plane-to-cluster traffic: agents running in the cluster initiate connections to the Konnectivity server beside the API server, and the API server sends its traffic to kubelets, pods and services through those established tunnels, so no inbound port is needed at the nodes. The API server's SSH tunnel feature is deprecated and was the approach Konnectivity replaced. A NodePort Service routes to pods, not to the kubelet, and would still need inbound access. Opening 10250 inbound violates the stated rule, even if restricted by source address.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/setup-konnectivity/",
    tags: ["Konnectivity", "Control plane connectivity", "Firewalls"]
  },
  {
    id: "cncf-kcsa-428",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "An agent DaemonSet that ignores its NetworkPolicy",
    scenario: "A retailer's monitoring agent runs as a DaemonSet with hostNetwork: true. The security team wrote a NetworkPolicy selecting the agent pods that permits egress only to the metrics backend, yet a test shows the agents can still connect anywhere. Pod-network workloads in the same namespace are restricted correctly by similar policies on the same CNI plugin.",
    question: "Why is the policy ineffective for the agent?",
    options: [
      { id: 'A', text: "The policy must be created in kube-system, because policies for node-level agents are only read from that namespace." },
      { id: 'B', text: "Egress policies apply only once a matching ingress policy selects the same pods, which is missing for the agent." },
      { id: 'C', text: "DaemonSet pods, hostNetwork or not, are exempt from NetworkPolicy because the kubelet creates them directly." },
      { id: 'D', text: "NetworkPolicy behaviour for hostNetwork pods is undefined, and most plugins treat their traffic as the node's own." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A hostNetwork pod shares the node's network namespace and IP address. Kubernetes leaves NetworkPolicy behaviour for such pods undefined, and the most common implementation ignores them when matching podSelector and namespaceSelector, treating their traffic like any other traffic from the node, so the policy does nothing. Restricting them requires host firewall rules or avoiding hostNetwork altogether, which the baseline Pod Security Standard forbids. Ingress and egress policy types are independent. DaemonSet pods are normal pods, scheduled by the default scheduler, and subject to policies. NetworkPolicy is namespaced but works in any namespace; there is nothing special about kube-system.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#networkpolicy-and-hostnetwork-pods",
    tags: ["NetworkPolicy", "hostNetwork", "CNI"]
  },
  {
    id: "cncf-kcsa-429",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Monitoring vendor asking for nodes/proxy",
    scenario: "A SaaS monitoring vendor's installation guide asks for a ClusterRole granting get on the nodes/proxy subresource so its agent can scrape kubelet metrics and stats from every node. The security team at a bank reviewing the request has read that this permission is far more powerful than it looks.",
    question: "What should the bank grant instead?",
    options: [
      { id: 'A', text: "get on nodes/proxy, bound with a RoleBinding in the vendor's namespace so metrics access stays namespace-scoped." },
      { id: 'B', text: "get on nodes/metrics and nodes/stats, which the kubelet maps to only its metrics and stats endpoints." },
      { id: 'C', text: "No RBAC at all, re-enabling the kubelet read-only port 10255 so scraping metrics and stats needs no token." },
      { id: 'D', text: "get on nodes/proxy as requested, relying on the audit log to flag any exec that is sent through the kubelet." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "With Webhook authorization, the kubelet maps requests to subresources of the node: /metrics to nodes/metrics, /stats to nodes/stats, /logs to nodes/log, and everything else, including exec, run and attach, to nodes/proxy. Access to nodes/proxy therefore allows command execution in any pod on the node, and because it goes straight to the kubelet it bypasses API server audit logging and admission control. Granting the specific metrics and stats subresources gives the vendor exactly what it needs. Nodes are cluster-scoped, so a RoleBinding cannot scope the access to a namespace. The read-only port is unauthenticated and exposes pod specs to anyone who can reach it. Relying on the audit log fails because kubelet exec through nodes/proxy is not seen by the API server audit log as a pod exec.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/",
    tags: ["nodes/proxy", "Kubelet authorization", "RBAC"]
  },
  {
    id: "cncf-kcsa-430",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Serving a public shop over HTTPS through Ingress",
    scenario: "A small online bookshop exposes its storefront through an NGINX-based Ingress controller at shop.example.org. It has obtained a certificate and private key for the hostname and now wants the controller to serve HTTPS for that host instead of plain HTTP.",
    question: "How should the certificate be configured?",
    options: [
      { id: 'A', text: "Store the key pair in a kubernetes.io/dockerconfigjson Secret that the Ingress class refers to." },
      { id: 'B', text: "Store the key pair in the controller's image so every Ingress it serves can present that key." },
      { id: 'C', text: "Store the key pair in a ConfigMap and mount it into every storefront pod behind the Ingress." },
      { id: 'D', text: "Store the key pair in a kubernetes.io/tls Secret and reference it in the Ingress spec.tls section." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An Ingress secures a host by listing it under spec.tls with a secretName that references a Secret of type kubernetes.io/tls containing tls.crt and tls.key in the same namespace; the controller loads it and terminates TLS for that host. ConfigMaps are not meant for private keys, and mounting the key into the application pods does nothing for a controller that terminates TLS in front of them. Baking a key into an image exposes it to anyone who can pull the image and prevents rotation. dockerconfigjson Secrets hold registry credentials, not TLS material.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls",
    tags: ["Ingress", "TLS", "Secrets"]
  },
  {
    id: "cncf-kcsa-431",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "HTTPRoute that cannot reach a Service in another namespace",
    scenario: "An airline uses the Gateway API. The loyalty team's HTTPRoute in the loyalty namespace names a backend Service in the pricing namespace, but the route reports a RefNotPermitted condition and no traffic flows. The pricing team is happy to accept this traffic but wants other namespaces to stay unable to route to its Services.",
    question: "What should be created to allow the route?",
    options: [
      { id: 'A', text: "A NetworkPolicy in pricing that allows ingress from pods in the loyalty namespace on the Service's port." },
      { id: 'B', text: "A RoleBinding in pricing that gives the loyalty team's users get and list permissions on its Services." },
      { id: 'C', text: "A ReferenceGrant in pricing that allows HTTPRoutes from the loyalty namespace to reference its Services." },
      { id: 'D', text: "An ExternalName Service in loyalty that points at the pricing Service's cluster DNS name for the route." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Gateway API blocks cross-namespace references by default so that one namespace cannot send traffic to, or expose, another namespace's backends without consent. The owner of the target namespace creates a ReferenceGrant that permits a specific kind in a specific namespace (HTTPRoutes from loyalty) to reference a specific kind (Services) in its own namespace. A NetworkPolicy controls packet flow, not whether the route is accepted. RBAC on Services affects what users can read through the API, not route resolution. An ExternalName Service is a DNS alias; many Gateway implementations reject it as a backend precisely because it can be used to bypass the cross-namespace protection.",
    referenceUrl: "https://gateway-api.sigs.k8s.io/reference/api-types/referencegrant/",
    tags: ["Gateway API", "ReferenceGrant", "Multi-tenancy"]
  },
  {
    id: "cncf-kcsa-432",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Encryption that stops at the Ingress controller",
    scenario: "A payment processor terminates TLS for its card API at an Ingress controller running on shared nodes. A PCI assessor notes that traffic from the controller to the API pods travels unencrypted across the node network and asks for card data to stay encrypted until it reaches the application pod. The company does not run a service mesh.",
    question: "Which change satisfies the assessor?",
    options: [
      { id: 'A', text: "Enable HTTPS from the controller to the backends, with the pods serving TLS, or use TLS passthrough to them." },
      { id: 'B', text: "Enable encryption at rest in the API server so the card API's TLS Secret is stored encrypted inside etcd." },
      { id: 'C', text: "Add a NetworkPolicy so the card API pods accept connections only from the Ingress controller's own pods." },
      { id: 'D', text: "Add an HSTS header at the controller so that browsers always use HTTPS when they connect to the card API host." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "End-to-end encryption requires the hop from the controller to the pod to be TLS as well: either the controller re-encrypts to a backend that serves HTTPS (for example with a backend-protocol setting, or a BackendTLSPolicy in the Gateway API), or it passes the TLS stream through untouched so the pod terminates it. HSTS only affects the client-to-edge hop, which is already encrypted. A NetworkPolicy restricts who can connect but does not encrypt anything. Encryption at rest protects the stored Secret, not traffic in transit.",
    referenceUrl: "https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#backend-protocol",
    tags: ["Ingress", "End-to-end TLS", "PCI DSS"]
  },
  {
    id: "cncf-kcsa-433",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Operator locked out of the API by its own egress rule",
    scenario: "A team applied default-deny egress to the namespace of a database operator, then added an egress rule allowing TCP 443 to the kubernetes Service's ClusterIP, 10.96.0.1/32, plus DNS. The operator still times out talking to the API server. The CNI plugin's documentation states that egress policy is evaluated after Service addresses are translated to endpoints.",
    question: "What should the egress rule allow instead?",
    options: [
      { id: 'A', text: "The API server endpoint addresses and their real port, such as 6443, listed by kubectl get endpointslices." },
      { id: 'B', text: "TCP 443 to 10.96.0.0/12, the whole Service CIDR, so the ClusterIP is matched whichever address it resolves to." },
      { id: 'C', text: "Egress to the kube-apiserver pod addresses in kube-system through podSelector and namespaceSelector rules." },
      { id: 'D', text: "Egress on TCP 443 to 0.0.0.0/0, because NetworkPolicy cannot express rules for the kubernetes API Service." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes leaves it to each plugin whether policy is evaluated before or after Service translation. On a plugin that evaluates after translation, the packet's destination is already the API server's real address and port (commonly the control-plane node IPs on 6443), so a rule for the ClusterIP never matches; allowing the endpoint addresses and port from the kubernetes EndpointSlice fixes it. Widening to the Service CIDR has the same problem, because translated packets are no longer addressed to it. API servers usually run with host networking or outside the cluster, so pod selectors do not match them. Allowing 443 to everywhere defeats the purpose and still misses port 6443.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "Egress", "kube-apiserver"]
  },
  {
    id: "cncf-kcsa-434",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "An internal admin console that must not leave the cluster",
    scenario: "A logistics company is deploying an internal admin console that only other workloads inside the cluster should ever call. The team wants no port for the console opened on any node's network interface and no cloud load balancer created for it.",
    question: "Which Service type should be used?",
    options: [
      { id: 'A', text: "ClusterIP, which gives a virtual IP reachable only from inside the cluster" },
      { id: 'B', text: "NodePort, which opens a port from 30000-32767 on every node in the cluster" },
      { id: 'C', text: "ExternalName, which returns a CNAME to the console through the cluster DNS" },
      { id: 'D', text: "LoadBalancer with loadBalancerSourceRanges set to addresses inside the VPC" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A ClusterIP Service, the default type, gets a virtual IP that is routable only within the cluster, so nothing is exposed on node interfaces and no external load balancer is provisioned. NodePort opens the chosen port on every node, reachable by anything that can reach the nodes. LoadBalancer creates a cloud load balancer (and node ports behind it), which the team explicitly does not want, even with source ranges. ExternalName only returns a DNS alias to another name and does not front the console's pods at all.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types",
    tags: ["Services", "ClusterIP", "Exposure"]
  },
  {
    id: "cncf-kcsa-435",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Probes that pass straight through default-deny ingress",
    scenario: "After applying a default-deny ingress NetworkPolicy to every namespace, a bank's auditors notice that kubelet HTTP liveness probes still succeed against every pod, and that a process running directly on a worker node can connect to pods scheduled on that same node. They ask whether the policies are broken.",
    question: "What explains the observation?",
    options: [
      { id: 'A', text: "Traffic between a pod and the node it runs on is always allowed by NetworkPolicy, whatever the pod or node IP." },
      { id: 'B', text: "The policies are broken: default-deny should block probes too, so the CNI plugin is not enforcing any of them." },
      { id: 'C', text: "Probes go through the API server, which NetworkPolicy exempts, and the node process reaches pods via a Service." },
      { id: 'D', text: "The kubelet uses a hostNetwork sidecar in each pod to run probes, so its traffic never leaves the pod itself." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The NetworkPolicy specification makes one exception to IP-based rules: traffic to and from the node where a pod is running is always allowed, which is what keeps kubelet probes working under default-deny. The flip side is that anything with a foothold on the node, including hostNetwork pods, can reach local pods regardless of policy, so node access and hostNetwork must be controlled separately. The policies are working as specified. Probes are issued by the kubelet on the node, not relayed through the API server. There is no kubelet sidecar inside pods; the kubelet runs on the host.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "Probes", "Node traffic"]
  },
  {
    id: "cncf-kcsa-436",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Can a validating rule see what a mutating webhook added?",
    scenario: "A platform team runs a mutating webhook that injects a logging sidecar into pods, and a validating admission policy that rejects any container running as privileged. A reviewer worries that if the injected sidecar were ever privileged, the validating policy would not notice because it only sees what the user submitted.",
    question: "In what order does the API server run these admission stages?",
    options: [
      { id: 'A', text: "Mutating first, then object schema validation, then validating admission before storage" },
      { id: 'B', text: "Mutating and validating in parallel, with the API server merging both of their verdicts" },
      { id: 'C', text: "Schema validation first, then validating, and mutating only after the object is stored" },
      { id: 'D', text: "Validating first, then mutating, then schema validation of the object before it is stored" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "After authentication and authorization, the API server runs mutating admission (built-in mutating plugins and mutating webhooks), then validates the object against its schema, then runs validating admission (built-in validating plugins, ValidatingAdmissionPolicies and validating webhooks), and only then persists it. Validators therefore see the final object including any injected sidecar, which addresses the reviewer's concern. Validating before mutating would let mutations slip past checks, which is exactly why the order is fixed the other way. The stages run in sequence, not in parallel, and nothing is mutated after storage.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/",
    tags: ["Admission control", "Mutating", "Validating"]
  },
  {
    id: "cncf-kcsa-437",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Security webhook down, risky pods admitted",
    scenario: "A gaming company's validating webhook blocks pods that mount hostPath volumes. During a node pool upgrade the webhook's only replica was unavailable for forty minutes, and in that window a developer successfully deployed a pod mounting the host's root filesystem. The webhook configuration was copied from a tutorial.",
    question: "Which setting most likely allowed the pod through?",
    options: [
      { id: 'A', text: "reinvocationPolicy was set to Never, so the webhook was only called for the first pod in each ReplicaSet." },
      { id: 'B', text: "timeoutSeconds was set to 30, so the API server allowed the request once the webhook exceeded that time." },
      { id: 'C', text: "sideEffects was set to None, so the API server skipped the webhook for requests that were not dry runs." },
      { id: 'D', text: "failurePolicy was set to Ignore, so the API server admitted requests it could not send to the webhook." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "failurePolicy decides what happens when a webhook cannot be reached or errors: Ignore fails open and admits the request, while Fail rejects it. A security control should fail closed with Fail, run multiple replicas with a PodDisruptionBudget, and exclude critical system namespaces to avoid lock-outs. sideEffects declares whether the webhook has out-of-band effects and determines dry-run handling; it does not skip real requests. A timeout is treated as a failure and handled by failurePolicy, so a timeout alone does not admit anything under Fail. reinvocationPolicy applies to mutating webhooks and controls repeat calls within one request, not which pods are evaluated.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#failure-policy",
    tags: ["Admission webhooks", "failurePolicy", "Fail closed"]
  },
  {
    id: "cncf-kcsa-438",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Trialling a CEL rule before it starts rejecting",
    scenario: "A bank has written a ValidatingAdmissionPolicy that requires every Deployment to set resource limits. About 200 existing Deployments would fail it. Before the rule starts rejecting anything, the platform team wants users to see a message when they apply a non-compliant Deployment and wants violations recorded in the audit log.",
    question: "How should the ValidatingAdmissionPolicyBinding be configured?",
    options: [
      { id: 'A', text: "Set validationActions to Deny with a paramRef that points at an empty ConfigMap, so no rule has values yet." },
      { id: 'B', text: "Set failurePolicy to Ignore on the policy so violations are written to the audit log but never enforced." },
      { id: 'C', text: "Set validationActions to Warn and Audit, and change it to Deny once the teams have fixed their Deployments." },
      { id: 'D', text: "Set the binding's matchResources to exclude every namespace until the teams have fixed their Deployments." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A ValidatingAdmissionPolicyBinding's validationActions can include Deny, Warn and Audit: Warn returns a warning to the client (kubectl prints it) and Audit adds the violation to the audit event's annotations, without rejecting the request. Switching to Deny later enforces the rule. failurePolicy governs what happens when the policy itself errors, such as a misconfiguration or CEL evaluation failure, not what happens on a normal violation. Excluding every namespace means nothing is evaluated, so there are no warnings or audit records. Deny rejects immediately, and a paramRef with missing parameters is handled by parameterNotFoundAction rather than giving a clean trial run.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/validating-admission-policy/",
    tags: ["ValidatingAdmissionPolicy", "CEL", "Policy rollout"]
  },
  {
    id: "cncf-kcsa-439",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Policy engine that could not restart after an outage",
    scenario: "A power failure restarted every node of a telecom's cluster. Afterwards, no pods could be created anywhere, including the pods of the policy engine's own validating webhook, which runs in the policy-system namespace. The webhook configuration matches pods in all namespaces with failurePolicy set to Fail.",
    question: "Which configuration change prevents this deadlock?",
    options: [
      { id: 'A', text: "Add a matchCondition that skips requests from system:masters so administrators can recreate the webhook pods." },
      { id: 'B', text: "Exclude policy-system and kube-system through the webhook's namespaceSelector, keeping failurePolicy at Fail." },
      { id: 'C', text: "Raise timeoutSeconds to the maximum of 30 so the API server waits long enough for the webhook to start up." },
      { id: 'D', text: "Change failurePolicy to Ignore for policy-system and all other namespaces so pods can always be created." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A fail-closed webhook that intercepts the creation of its own pods can never recover once it is down: the API server rejects the new webhook pods because the webhook is unavailable. Excluding the webhook's namespace and critical system namespaces with a namespaceSelector (for example on the immutable kubernetes.io/metadata.name label) breaks the loop while keeping Fail for everything else. Switching to Ignore removes the deadlock by making the whole control fail open. A longer timeout does not help when the webhook has no running pods. The webhook pods are created by the ReplicaSet controller, not by an administrator in system:masters, so that exception would not let them start.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/admission-webhooks-good-practices/",
    tags: ["Admission webhooks", "namespaceSelector", "Availability"]
  },
  {
    id: "cncf-kcsa-440",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Compromised node deleting pods on other nodes",
    scenario: "In a red-team exercise at a streaming company, testers took the kubelet credentials from one worker node and used them to modify the Node object of another worker and delete pods running elsewhere in the cluster. The API server uses the Node and RBAC authorizers.",
    question: "Which admission plugin should be enabled to confine a kubelet to its own node?",
    options: [
      { id: 'A', text: "The PodSecurity admission plugin" },
      { id: 'B', text: "The NodeRestriction admission plugin" },
      { id: 'C', text: "The ServiceAccount admission plugin" },
      { id: 'D', text: "The AlwaysPullImages admission plugin" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "NodeRestriction limits the Node and Pod objects a kubelet can modify: a kubelet may change only its own Node object and only pods bound to its node, and it cannot set labels with the node-restriction.kubernetes.io/ prefix. It works together with the Node authorizer, which limits what kubelets can read. AlwaysPullImages forces image pulls to use credentials. PodSecurity enforces the Pod Security Standards on pod specs, not on which identity edits which object. The ServiceAccount plugin sets up service account tokens for pods.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#noderestriction",
    tags: ["NodeRestriction", "Kubelet", "Admission control"]
  },
  {
    id: "cncf-kcsa-441",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Image policy webhook that fails open",
    scenario: "A defence supplier enabled the ImagePolicyWebhook admission plugin so an external service approves every image before pods are created. When that service was taken down for maintenance, pods with unapproved images were still admitted. The plugin configuration was left at its sample values.",
    question: "Which change makes the control fail closed?",
    options: [
      { id: 'A', text: "Set failurePolicy to Fail in a ValidatingWebhookConfiguration for the ImagePolicyWebhook backend." },
      { id: 'B', text: "Set defaultAllow to false in the ImagePolicyWebhook file named by --admission-control-config-file." },
      { id: 'C', text: "Add the AlwaysPullImages plugin alongside it so images are always re-checked by the backend at pull time." },
      { id: 'D', text: "Set allowTTL to zero in the plugin configuration so the API server never reuses an earlier allow decision." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "ImagePolicyWebhook is a built-in admission plugin configured through the file given to --admission-control-config-file; its defaultAllow setting decides what happens when the backend cannot be reached, and false rejects pods in that case. failurePolicy belongs to dynamic admission webhooks registered with ValidatingWebhookConfiguration objects, which is a different mechanism from this plugin. allowTTL only controls how long approvals are cached, so setting it to zero adds backend calls but still admits pods when the backend is down if defaultAllow is true. AlwaysPullImages makes kubelets re-pull images; it does not involve the image policy backend.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#imagepolicywebhook",
    tags: ["ImagePolicyWebhook", "Fail closed", "Admission control"]
  },
  {
    id: "cncf-kcsa-442",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "New Gatekeeper constraint and the pods already running",
    scenario: "A media company added an OPA Gatekeeper constraint that denies containers without a readOnlyRootFilesystem setting. New non-compliant pods are now rejected, but the CISO asks how many of the 3,000 pods created before the constraint existed are in violation, without restarting anything.",
    question: "Where should the team look?",
    options: [
      { id: 'A', text: "The ConstraintTemplate's status, which lists every object the Rego rule has ever evaluated in the cluster." },
      { id: 'B', text: "The API server audit log, which records a violation event for every existing pod when a constraint is created." },
      { id: 'C', text: "The audit results in the constraint's status, filled by Gatekeeper's periodic checks of existing resources." },
      { id: 'D', text: "The Kubernetes events in each namespace, where the Gatekeeper webhook posts a warning for each violating pod." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Admission control only evaluates requests as they arrive, so resources that existed before a policy are never checked by the webhook. Gatekeeper's audit controller periodically evaluates existing resources against every constraint and records the total and a sample of violations in each constraint's status.violations field, without modifying anything. The API server audit log records requests, and creating a constraint does not generate requests for existing pods. The webhook only acts on incoming requests, so it posts nothing about pods already running. The ConstraintTemplate's status reports whether the template compiled and was created, not evaluation results.",
    referenceUrl: "https://open-policy-agent.github.io/gatekeeper/website/docs/audit/",
    tags: ["OPA Gatekeeper", "Audit", "Policy compliance"]
  },
  {
    id: "cncf-kcsa-443",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Trying to block Secret reads with an admission policy",
    scenario: "A security engineer at an insurer wants to stop the analytics team from reading Secrets in the claims namespace. The team's RBAC grants get and list on Secrets through a shared ClusterRole used by other teams as well, so she drafts a ValidatingAdmissionPolicy matching secrets that denies requests from the analytics group.",
    question: "Why will this approach fail, and what will work?",
    options: [
      { id: 'A', text: "Admission policies only support pods, so a Kyverno ClusterPolicy matching the analytics group must be used instead." },
      { id: 'B', text: "Admission denies take effect only after the next audit cycle, so a Gatekeeper constraint must be used for instant effect." },
      { id: 'C', text: "Admission never sees get, list or watch requests, so the analytics group needs its own narrower RBAC role and binding." },
      { id: 'D', text: "Admission policies apply only to CONNECT requests on Secrets, so the policy must be written as a mutating webhook instead." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Admission control, including ValidatingAdmissionPolicy and every webhook-based engine, is invoked only for requests that create, update, delete or connect to objects; reads such as get, list and watch are decided entirely by authorization. Stopping the analytics team from reading Secrets therefore requires changing RBAC, for example giving the group its own role without Secret access instead of the shared ClusterRole. ValidatingAdmissionPolicy can match any resource, not just pods. Admission decisions are synchronous with the request, and audit cycles belong to policy engines' background scans. CONNECT applies to subresources such as pods/exec, not to reading Secrets, and mutating webhooks are not called for reads either.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/",
    tags: ["Admission control", "RBAC", "Secrets"]
  },
  {
    id: "cncf-kcsa-444",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Policies written in plain YAML, including defaults",
    scenario: "A small platform team wants a policy engine for its clusters. Engineers want to write policies as Kubernetes-style YAML rather than learn a new programming language, and they need to validate pods, add default labels through mutation, and automatically generate a default-deny NetworkPolicy in each new namespace.",
    question: "Which tool fits these requirements most directly?",
    options: [
      { id: 'A', text: "OPA Gatekeeper, whose ConstraintTemplates hold Rego policies that validate" },
      { id: 'B', text: "kube-bench, whose YAML tests generate CIS Benchmark reports for nodes" },
      { id: 'C', text: "Falco, whose YAML rules match events from system calls and audit logs" },
      { id: 'D', text: "Kyverno, whose YAML policies support validate, mutate and generate rules" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Kyverno is a CNCF policy engine that runs as an admission controller with policies expressed as Kubernetes resources in YAML; its rule types include validate, mutate, generate (creating resources such as a NetworkPolicy when a namespace appears), cleanup and verifyImages. Gatekeeper is also a strong admission policy engine, but its logic is written in Rego, which the team wants to avoid, and generating resources is not its focus. Falco uses YAML rules for runtime detection, not admission. kube-bench audits node and control-plane configuration against CIS checks and enforces nothing at admission.",
    referenceUrl: "https://kyverno.io/docs/introduction/",
    tags: ["Kyverno", "Policy engines", "Admission control"]
  },
  {
    id: "cncf-kcsa-445",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Injected sidecar that escaped the security defaults",
    scenario: "A retailer runs two mutating webhooks: one sets allowPrivilegeEscalation: false and drops all capabilities on every container, and another, called afterwards, injects a tracing sidecar. Audits find the sidecars running without the hardened settings, even though the first webhook's logic covers every container it sees.",
    question: "Which change makes the defaults apply to the injected sidecar as well?",
    options: [
      { id: 'A', text: "Set sideEffects to NoneOnDryRun on both webhooks so the API server evaluates them together in one merged pass." },
      { id: 'B', text: "Set matchPolicy to Equivalent on the defaults webhook so that it also receives the pod after injection completes." },
      { id: 'C', text: "Set reinvocationPolicy to IfNeeded on the defaults webhook so it runs again after later mutations change the pod." },
      { id: 'D', text: "Set failurePolicy to Fail on the sidecar webhook so that it rejects pods that the defaults webhook has not handled." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Mutating webhooks run in sequence, so a webhook that runs before another cannot see containers the later one adds. With reinvocationPolicy set to IfNeeded, the API server calls the webhook again if later mutations changed the object, so the defaults webhook sees and hardens the sidecar. A validating policy that rejects non-compliant containers is a good backstop. failurePolicy governs behaviour when a webhook is unreachable. sideEffects declares out-of-band effects and affects dry-run handling, not ordering. matchPolicy Equivalent lets a webhook receive requests made through other API versions of a resource; it does not trigger a second call.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#reinvocation-policy",
    tags: ["Mutating webhooks", "reinvocationPolicy", "Sidecars"]
  },
  {
    id: "cncf-kcsa-446",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Webhook calls failing with unknown authority",
    scenario: "A team deployed an in-house validating webhook whose Service presents a certificate signed by the company's internal CA. Every pod creation now fails because the API server reports x509: certificate signed by unknown authority when calling the webhook. The team does not want to weaken TLS.",
    question: "What should be configured?",
    options: [
      { id: 'A', text: "Mount the internal CA into the webhook pods at /var/run/secrets so the API server reads it from the pods." },
      { id: 'B', text: "Point clientConfig.url at the webhook's plain HTTP port so that no certificate needs to be verified at all." },
      { id: 'C', text: "Add the internal CA that signed the certificate to the kube-apiserver --client-ca-file bundle." },
      { id: 'D', text: "Set the webhook's clientConfig.caBundle to the internal CA that signed the webhook's serving certificate." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When calling a webhook, the API server verifies the webhook's serving certificate against the PEM bundle in clientConfig.caBundle of the webhook configuration (tools such as cert-manager's CA injector can fill it automatically). --client-ca-file controls which CAs the API server trusts for authenticating its own clients, not which servers it trusts on outbound calls. Webhooks must be served over HTTPS; switching to plain HTTP is both unsupported and a downgrade. The API server does not read trust anchors from files inside webhook pods.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#contacting-the-webhook",
    tags: ["Admission webhooks", "caBundle", "TLS"]
  },
  {
    id: "cncf-kcsa-447",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Hardening guide that says to enable PodSecurityPolicy",
    scenario: "An engineer following a 2019 hardening guide added PodSecurityPolicy to --enable-admission-plugins on a cluster running Kubernetes 1.33, and the API server no longer starts. The organisation still needs pod-level restrictions such as forbidding privileged containers and host namespaces.",
    question: "What should the engineer do?",
    options: [
      { id: 'A', text: "Keep PodSecurityPolicy but create PSP objects before starting the API server so the plugin can load them." },
      { id: 'B', text: "Enable the PodSecurityPolicy feature gate first, because the plugin is hidden behind it in newer releases." },
      { id: 'C', text: "Remove PodSecurityPolicy, which was deleted in 1.25, and use Pod Security Admission or a policy engine." },
      { id: 'D', text: "Replace PodSecurityPolicy with SecurityContextDeny, the built-in plugin that took over its role in 1.25." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "PodSecurityPolicy was deprecated in 1.21 and removed in 1.25, so the API server rejects an unknown admission plugin name. Its replacement is the built-in Pod Security Admission controller, which enforces the privileged, baseline and restricted Pod Security Standards through namespace labels, optionally combined with a policy engine such as Kyverno, Gatekeeper or ValidatingAdmissionPolicy for custom rules. There is no feature gate that restores PSP. PSP objects cannot be created because the policy/v1beta1 API is gone. SecurityContextDeny was a deprecated plugin that has since been removed too, and it never replaced PSP.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/",
    tags: ["PodSecurityPolicy", "Pod Security Admission", "Migration"]
  },
  {
    id: "cncf-kcsa-448",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Quietly powerful rights in an RBAC review",
    scenario: "During an RBAC review, a fintech's security team must pick which of several permissions held by a CI service account deserves the same scrutiny as cluster-admin. The cluster enforces the restricted Pod Security Standard on all application namespaces, and admission webhooks are the main line of workload policy.",
    question: "Which permission is effectively cluster-wide control over workloads?",
    options: [
      { id: 'A', text: "create on tokenreviews in the authentication.k8s.io API group for validating bearer tokens" },
      { id: 'B', text: "update on ConfigMaps in the kube-public namespace, which every authenticated user can read" },
      { id: 'C', text: "create on pods in one application namespace where the restricted Pod Security Standard is enforced" },
      { id: 'D', text: "create and update on mutatingwebhookconfigurations in the admissionregistration.k8s.io API group" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Whoever can create or update MutatingWebhookConfigurations can register a webhook that receives and rewrites every pod, Secret or other object created in any namespace, injecting privileged containers or exfiltrating data, and can also remove or weaken existing policy webhooks. That makes it equivalent to cluster-wide control. Creating pods in a namespace under the restricted profile is constrained by Pod Security Admission and limited to that namespace. tokenreviews only lets the caller check whether a token is valid, which delegated authenticators routinely need. kube-public ConfigMaps are world-readable by design and hold public bootstrap data such as cluster-info.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/",
    tags: ["RBAC", "Admission webhooks", "Privilege escalation"]
  },
  {
    id: "cncf-kcsa-449",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Tenants exempting themselves from the policy webhook",
    scenario: "A SaaS platform's validating webhook skips namespaces labelled policy=exempt so that system components can run privileged pods. Tenant administrators hold a ClusterRole that lets them update their own Namespace objects, and one tenant added the label to its namespace and then deployed a privileged pod.",
    question: "What should the platform team change?",
    options: [
      { id: 'A', text: "Rename the label to policy.kubernetes.io/exempt, because the API server protects all labels under that prefix." },
      { id: 'B', text: "Switch failurePolicy to Fail so the webhook rejects updates from namespaces that carry the exempt label." },
      { id: 'C', text: "Move the exemption to an objectSelector on the pods so the label must be set on each pod in the namespace." },
      { id: 'D', text: "Exempt namespaces by the kubernetes.io/metadata.name label and stop tenants updating Namespaces." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An exemption keyed on a label that tenants can set is self-service bypass. The kubernetes.io/metadata.name label is set by the API server to the namespace's name and cannot be changed, so selecting system namespaces by it cannot be spoofed, and tenants should not be able to update Namespace objects at all. failurePolicy concerns webhook availability, not selector matching. The API server does not protect arbitrary label prefixes on namespaces; node-restriction.kubernetes.io is protected for Nodes by the NodeRestriction plugin, not for namespaces. An objectSelector on pods makes things worse, since anyone creating pods chooses their labels.",
    referenceUrl: "https://kubernetes.io/docs/reference/labels-annotations-taints/#kubernetes-io-metadata-name",
    tags: ["Admission webhooks", "namespaceSelector", "Multi-tenancy"]
  },
  {
    id: "cncf-kcsa-450",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Rejecting pods without limits for a team allowed to deploy",
    scenario: "A retailer's developers are rightly allowed by RBAC to create Deployments and pods in their namespace. The platform team now wants to reject any pod whose containers lack CPU and memory limits, and has found that no RBAC rule can express the requirement.",
    question: "Which mechanism is designed for this kind of rule?",
    options: [
      { id: 'A', text: "Validating admission control that inspects each pod spec on creation" },
      { id: 'B', text: "A NetworkPolicy that isolates any pod whose containers lack limits" },
      { id: 'C', text: "The kubelet's eviction thresholds for memory.available on each node" },
      { id: 'D', text: "RBAC with a Role that grants create on pods only with the limits verb" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Authorization decides whether an identity may perform a verb on a resource type; it never looks inside the object. Admission control runs after authorization and can inspect the full object, so a validating policy (ValidatingAdmissionPolicy, Kyverno, Gatekeeper) can reject pods without limits; a LimitRange can also apply defaults. RBAC has no limits verb and cannot inspect specs. NetworkPolicy selects pods by labels, not resource settings, and only affects traffic. Kubelet eviction thresholds react to node pressure after pods are running and do not reject anything.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/",
    tags: ["Admission control", "RBAC", "Resource limits"]
  }
];

export default CNCF_KCSA_QUESTIONS_18;
