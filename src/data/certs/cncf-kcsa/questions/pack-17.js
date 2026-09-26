export const CNCF_KCSA_QUESTIONS_17 = [
  {
    id: "cncf-kcsa-401",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Encrypting east-west traffic across sixty services",
    scenario: "An insurance company runs 60 microservices written in five languages. A new regulation requires every service-to-service call inside the cluster to be encrypted and mutually authenticated, and the application teams have said they cannot change their code or manage certificates themselves before the deadline.",
    question: "Which approach meets the requirement?",
    options: [
      { id: 'A', text: "Terminate TLS for every service at an Ingress controller that holds a certificate issued by the corporate authority." },
      { id: 'B', text: "Apply a default-deny NetworkPolicy in every namespace and allow only the service-to-service flows that are required." },
      { id: 'C', text: "Enable encryption at rest for Secrets in etcd with a KMS provider so that service credentials are always encrypted." },
      { id: 'D', text: "Deploy a service mesh whose proxies establish mutual TLS between workloads with automatically rotated identities." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A service mesh such as Istio or Linkerd places a proxy next to each workload (or on each node) that transparently upgrades connections to mutual TLS, using certificates the mesh issues and rotates automatically, so applications need no code changes and no certificate handling. A default-deny NetworkPolicy restricts which flows are allowed but does not encrypt or authenticate them. An Ingress controller terminates TLS only for north-south traffic entering the cluster, leaving internal calls in plaintext. Encryption at rest protects data stored in etcd, not data moving between pods.",
    referenceUrl: "https://istio.io/latest/docs/concepts/security/",
    tags: ["Service mesh", "mTLS", "Encryption in transit"]
  },
  {
    id: "cncf-kcsa-402",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Plaintext still accepted after the Istio rollout",
    scenario: "A payments team finished injecting Istio sidecars into every pod in its namespace a month ago. A penetration tester has now shown that a pod in another namespace without a sidecar can still call the payments API over plain HTTP. The team wants workloads in the payments namespace to refuse any connection that is not mutual TLS.",
    question: "Which configuration should be applied?",
    options: [
      { id: 'A', text: "A PeerAuthentication in the payments namespace with its mTLS mode set to STRICT." },
      { id: 'B', text: "A DestinationRule for payments hosts with the TLS mode set to ISTIO_MUTUAL." },
      { id: 'C', text: "A Sidecar resource in the payments namespace that limits egress to istio-system only." },
      { id: 'D', text: "An AuthorizationPolicy in the payments namespace with an empty spec that denies all." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Istio's default PeerAuthentication mode is PERMISSIVE, which accepts both mutual TLS and plaintext so that meshes can be adopted gradually; setting the mode to STRICT makes the server-side sidecars reject any connection that does not present a mesh certificate. A DestinationRule with ISTIO_MUTUAL controls how clients originate connections, so it does not stop an unmeshed client from sending plaintext. An AuthorizationPolicy with an empty spec denies every request, including legitimate meshed ones. A Sidecar resource scopes what configuration and egress hosts a proxy sees; it has no effect on inbound plaintext.",
    referenceUrl: "https://istio.io/latest/docs/reference/config/security/peer_authentication/",
    tags: ["Istio", "PeerAuthentication", "mTLS"]
  },
  {
    id: "cncf-kcsa-403",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Only the storefront may read orders, and only with GET",
    scenario: "In an online retailer's Istio mesh with strict mutual TLS, the orders service must accept requests only from workloads running as the frontend ServiceAccount in the shop namespace, and those callers may only issue GET requests to paths under /orders/. Pod IP addresses change constantly as the frontend autoscales.",
    question: "Which control expresses this rule?",
    options: [
      { id: 'A', text: "A RequestAuthentication on orders that validates JWTs issued to the frontend and rejects requests whose token has expired." },
      { id: 'B', text: "An AuthorizationPolicy on orders allowing source principal cluster.local/ns/shop/sa/frontend with GET on /orders/* only." },
      { id: 'C', text: "A PeerAuthentication on orders with port-level STRICT mTLS so that only callers presenting a frontend certificate connect." },
      { id: 'D', text: "A NetworkPolicy on the orders pods that allows ingress on port 8080 only from pods labelled app=frontend in the shop namespace." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Istio AuthorizationPolicy evaluates the caller's mTLS identity, expressed as a principal derived from its SPIFFE ID (trust domain, namespace and ServiceAccount), together with HTTP attributes such as methods and paths, so it can allow exactly GET /orders/* from the frontend identity regardless of pod IPs. A NetworkPolicy works at layers 3 and 4 and cannot restrict HTTP methods or paths. PeerAuthentication decides whether mTLS is required; it authenticates any mesh workload and does not authorise one identity over another. RequestAuthentication validates end-user JWTs when present but, on its own, does not reject requests without a token or check the calling workload.",
    referenceUrl: "https://istio.io/latest/docs/reference/config/security/authorization-policy/",
    tags: ["Istio", "AuthorizationPolicy", "Workload identity"]
  },
  {
    id: "cncf-kcsa-404",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Sidecar injection that breaks the restricted profile",
    scenario: "A bank wants to enforce the restricted Pod Security Standard on every application namespace. After labelling the namespaces, all new pods with Istio sidecars are rejected, because the injected istio-init container requests the NET_ADMIN and NET_RAW capabilities to program traffic redirection. The bank needs both the restricted profile and the mesh.",
    question: "What should the platform team do?",
    options: [
      { id: 'A', text: "Label the namespaces with the baseline profile instead, since baseline permits NET_ADMIN and NET_RAW for init containers." },
      { id: 'B', text: "Install the Istio CNI node agent so traffic redirection is set up during pod network setup, removing the privileged init." },
      { id: 'C', text: "Exempt the istio-init container by name in the PodSecurity admission configuration so the rest of each pod is checked." },
      { id: 'D', text: "Set holdApplicationUntilProxyStarts so the sidecar itself sets up traffic redirection before the app container starts." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Istio CNI node agent runs as a privileged DaemonSet on each node and configures the pod's traffic redirection as part of network setup, so injected pods no longer carry an init container that needs NET_ADMIN and NET_RAW and can satisfy the restricted profile. The baseline profile does not allow adding NET_ADMIN either, and it would give up the restricted controls the bank wants. PodSecurity admission exemptions apply to usernames, RuntimeClasses or namespaces, not to individual containers within a pod. holdApplicationUntilProxyStarts only orders container startup; the proxy container does not program iptables and the privileged init container remains.",
    referenceUrl: "https://istio.io/latest/docs/setup/additional-setup/cni/",
    tags: ["Istio CNI", "Pod Security Standards", "Sidecars"]
  },
  {
    id: "cncf-kcsa-405",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "What identity does a meshed workload present?",
    scenario: "A security architect is writing access rules for a mesh that issues X.509 certificates to workloads following the SPIFFE standard. He needs to know what the identity in each workload certificate is based on, so that rules keep working when pods are rescheduled, scaled or restarted.",
    question: "What is the workload identity derived from in Istio?",
    options: [
      { id: 'A', text: "The trust domain, namespace and ServiceAccount of the pod" },
      { id: 'B', text: "The pod name and the node that it is currently scheduled on" },
      { id: 'C', text: "The container image digest and the Deployment that owns it" },
      { id: 'D', text: "The pod's IP address at the moment the certificate was issued" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Istio encodes workload identity as a SPIFFE ID of the form spiffe://TRUST_DOMAIN/ns/NAMESPACE/sa/SERVICE_ACCOUNT, placed in the certificate's URI SAN. Every replica running as the same ServiceAccount shares the identity, so policies survive rescheduling and scaling. Pod IPs change with every restart and are exactly what identity-based policy avoids. Pod and node names are ephemeral scheduling details. Image digests and owning Deployments are not part of the certificate identity.",
    referenceUrl: "https://istio.io/latest/docs/concepts/security/#istio-identity",
    tags: ["SPIFFE", "Workload identity", "Istio"]
  },
  {
    id: "cncf-kcsa-406",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Which Linkerd traffic is still plaintext?",
    scenario: "A health-tech start-up installed Linkerd and injected proxies into most namespaces, but a legacy reporting namespace was left uninjected because its pods fail with a sidecar. The CTO has told auditors that all in-cluster traffic is now encrypted with mutual TLS.",
    question: "Which traffic in this cluster is not protected by Linkerd's mTLS?",
    options: [
      { id: 'A', text: "gRPC calls between meshed pods that run on two different worker nodes" },
      { id: 'B', text: "Raw TCP connections on non-HTTP ports between two meshed workloads" },
      { id: 'C', text: "HTTP/1.1 calls between meshed pods that share one worker node" },
      { id: 'D', text: "Any connection in which one side runs without a Linkerd proxy" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Linkerd automatically enables mutual TLS for all TCP traffic between meshed pods, but mTLS needs a Linkerd proxy on both ends; a connection to or from a pod without a proxy cannot be upgraded, so traffic involving the reporting namespace stays plaintext. Meshed gRPC between nodes is encrypted. Linkerd's automatic mTLS covers all TCP, not only HTTP, so non-HTTP ports between meshed workloads are protected. Meshed pods on the same node still talk through their proxies and are encrypted too.",
    referenceUrl: "https://linkerd.io/2/features/automatic-mtls/",
    tags: ["Linkerd", "mTLS", "Mesh coverage"]
  },
  {
    id: "cncf-kcsa-407",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Mesh workloads calling any host on the internet",
    scenario: "A payment processor's security team found that workloads in its Istio mesh can reach any external domain, which would make data exfiltration from a compromised pod easy. The only external dependency the checkout workloads need is api.stripe.com, and the team wants the mesh to block every other outbound destination.",
    question: "Which configuration achieves this in Istio?",
    options: [
      { id: 'A', text: "Route api.stripe.com through the ingress gateway with TLS passthrough so that external calls pass a single proxy." },
      { id: 'B', text: "Set outboundTrafficPolicy to REGISTRY_ONLY in the mesh config and add a ServiceEntry for api.stripe.com only." },
      { id: 'C', text: "Set PeerAuthentication to STRICT mesh-wide so that every outbound connection must present a workload certificate." },
      { id: 'D', text: "Create a DestinationRule for external hosts with outlier detection so that unknown destinations are ejected." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Istio's default outboundTrafficPolicy is ALLOW_ANY, which passes traffic to unknown external hosts. REGISTRY_ONLY makes sidecars block any destination not in the service registry, and a ServiceEntry registers api.stripe.com as the single permitted external host; an egress gateway plus a NetworkPolicy blocking direct egress hardens this further, because sidecar controls alone can be bypassed by a compromised pod. PeerAuthentication governs inbound mTLS between mesh workloads and does not restrict external destinations. The ingress gateway handles traffic entering the mesh, not outbound calls. Outlier detection ejects unhealthy endpoints for resilience; it is not an access control.",
    referenceUrl: "https://istio.io/latest/docs/tasks/traffic-management/egress/egress-control/",
    tags: ["Istio", "Egress control", "ServiceEntry"]
  },
  {
    id: "cncf-kcsa-408",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Ambient mesh policy that suddenly denies everything",
    scenario: "A SaaS provider migrated a namespace to Istio ambient mode, where ztunnel handles traffic on each node. It then applied an ALLOW AuthorizationPolicy with a workload selector that permits only GET requests on /api/ from the web ServiceAccount. Immediately, every request to the selected workloads was denied, including the permitted GETs.",
    question: "What explains this, and what is the fix?",
    options: [
      { id: 'A', text: "The namespace must also carry istio-injection=enabled so that sidecars can evaluate the HTTP rules next to each workload." },
      { id: 'B', text: "ztunnel only enforces policies when a STRICT PeerAuthentication exists, so the namespace needs one before any rule is allowed." },
      { id: 'C', text: "HTTP rules need a waypoint proxy; ztunnel cannot evaluate them and treats the policy as DENY, so deploy one and target it." },
      { id: 'D', text: "Ambient mode only enforces policies placed in the istio-system root namespace, so the policy must be moved into that namespace." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In ambient mode, ztunnel provides layer 4 mTLS and can enforce only L4 attributes such as identities and ports. HTTP methods and paths require a waypoint proxy, and an L7 policy that is targeted at ztunnel through a workload selector fails safe by being treated as DENY. Deploying a waypoint for the namespace or service and attaching the policy to it with targetRefs lets the L7 rules be evaluated. Policies in istio-system apply mesh-wide, but that is not required. Adding sidecar injection mixes data plane modes and is not the ambient answer. A STRICT PeerAuthentication is not a prerequisite for ztunnel to enforce L4 authorization.",
    referenceUrl: "https://istio.io/latest/docs/ambient/usage/l7-features/",
    tags: ["Istio ambient", "Waypoint", "AuthorizationPolicy"]
  },
  {
    id: "cncf-kcsa-409",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "New namespace whose pods get no sidecar",
    scenario: "A developer created the invoices namespace in a cluster running Istio in sidecar mode and deployed three services. None of the pods has an istio-proxy container, so they are outside the mesh and its mutual TLS. Other namespaces are injected correctly.",
    question: "What must be done so the invoices pods join the mesh?",
    options: [
      { id: 'A', text: "Label the namespace istio-injection=enabled and restart the pods." },
      { id: 'B', text: "Add an istio-proxy image to the pods' imagePullSecrets list." },
      { id: 'C', text: "Grant the pods' ServiceAccount a RoleBinding to the istiod ClusterRole." },
      { id: 'D', text: "Create a PeerAuthentication in STRICT mode for the invoices namespace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Istio injects sidecars with a mutating admission webhook that acts on pods created in namespaces labelled istio-injection=enabled (or with a revision label); injection happens only at pod creation, so existing pods must be recreated. imagePullSecrets hold registry credentials and do not add containers. A STRICT PeerAuthentication would make meshed servers reject plaintext but does not inject anything. RBAC for the ServiceAccount has no role in whether the webhook injects a proxy.",
    referenceUrl: "https://istio.io/latest/docs/setup/additional-setup/sidecar-injection/",
    tags: ["Istio", "Sidecar injection", "Mutating webhook"]
  },
  {
    id: "cncf-kcsa-410",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Mesh certificates that must chain to the corporate root",
    scenario: "A bank's Istio mesh uses the self-signed root that istiod generated at install time. Compliance now requires every workload certificate to chain to the bank's offline corporate root CA, while keeping automatic issuance and the short default lifetimes for workload certificates.",
    question: "What should the platform team configure?",
    options: [
      { id: 'A', text: "Issue a cert-manager Certificate for every pod from the corporate CA and mount it into the application containers." },
      { id: 'B', text: "Give istiod an intermediate CA signed by the corporate root through the cacerts secret in istio-system." },
      { id: 'C', text: "Load a corporate-issued certificate on the Istio ingress gateway so that all clients see the corporate chain." },
      { id: 'D', text: "Replace the Kubernetes cluster CA with the corporate root so that istiod inherits it for all workload certificates." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Istio supports a plug-in CA: an intermediate certificate and key signed by the organisation's root, together with the root and chain, are placed in the cacerts secret in istio-system, and istiod then signs workload certificates from that intermediate, keeping automatic issuance and the default 24-hour lifetimes while chaining to the corporate root. Mounting cert-manager certificates into application containers bypasses the mesh proxies and pushes certificate handling onto the apps. The Kubernetes cluster CA signs component and client certificates; istiod does not inherit it, and it should not be the offline root. An ingress gateway certificate covers only edge traffic.",
    referenceUrl: "https://istio.io/latest/docs/tasks/security/cert-management/plugin-ca-cert/",
    tags: ["Istio", "Plug-in CA", "PKI"]
  },
  {
    id: "cncf-kcsa-411",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Dropping NetworkPolicies once the mesh is in place",
    scenario: "A media company has rolled out Istio with strict mTLS and fine-grained AuthorizationPolicies. To simplify operations, an architect proposes deleting all Calico NetworkPolicies, arguing that the mesh now controls who can talk to whom. The CISO asks for the main security objection.",
    question: "What is the strongest reason to keep the NetworkPolicies?",
    options: [
      { id: 'A', text: "Istio evaluates AuthorizationPolicies only for HTTP traffic, so all raw TCP connections are left without any controls at all." },
      { id: 'B', text: "Calico NetworkPolicies encrypt traffic between nodes, which the mesh does not do for connections that cross node boundaries." },
      { id: 'C', text: "AuthorizationPolicies are advisory in STRICT mode and only log denials, so NetworkPolicies are the layer that actually blocks traffic." },
      { id: 'D', text: "NetworkPolicies are enforced by the CNI on the node, so they still apply to unmeshed pods and to a pod that bypasses its proxy." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Mesh authorization is enforced by proxies that sit in, or next to, the workload's traffic path; traffic from unmeshed pods, ports excluded from redirection, or a compromised pod that manages to bypass its proxy is not covered. NetworkPolicy is enforced by the CNI in the node's datapath, outside the pod's control, so keeping both provides defence in depth. AuthorizationPolicies do enforce denials; audit-only behaviour exists only with the AUDIT action. Istio authorization supports TCP attributes such as principals and ports, not only HTTP. NetworkPolicy does not encrypt anything; the mesh's mTLS already encrypts cross-node traffic.",
    referenceUrl: "https://istio.io/latest/docs/ops/best-practices/security/",
    tags: ["Service mesh", "NetworkPolicy", "Defence in depth"]
  },
  {
    id: "cncf-kcsa-412",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Eighty namespaces that need the same private CA bundle",
    scenario: "A bank issues TLS certificates for internal services from a private CA through cert-manager. Client pods in 80 namespaces fail to verify those services because they do not trust the private CA, and engineers have been copying the CA certificate into ConfigMaps by hand, which drifted when the CA was renewed.",
    question: "What is the most maintainable way to give every namespace the CA bundle?",
    options: [
      { id: 'A', text: "Set InsecureSkipVerify in the client libraries for internal hostnames, since traffic never leaves the cluster." },
      { id: 'B', text: "Copy the CA Secret, including its private key, into each namespace so client pods can build the chain locally." },
      { id: 'C', text: "Mount the kube-root-ca.crt ConfigMap in each client pod, since it already exists in every namespace of the cluster." },
      { id: 'D', text: "Deploy trust-manager with a Bundle that publishes the private CA certificate as a ConfigMap to every namespace." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "trust-manager, a cert-manager project, watches a Bundle resource that names trusted CA sources and writes the combined, public certificates into a ConfigMap or Secret in every selected namespace, updating them automatically when the CA changes. kube-root-ca.crt contains the Kubernetes cluster CA, which did not sign these service certificates. Clients need only the public CA certificate; copying the private key into every namespace would let anyone there mint trusted certificates. Skipping verification removes the protection TLS is meant to provide, and in-cluster traffic can still be intercepted by a compromised pod or node.",
    referenceUrl: "https://cert-manager.io/docs/trust/trust-manager/",
    tags: ["trust-manager", "cert-manager", "CA distribution"]
  },
  {
    id: "cncf-kcsa-413",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "x509 expired on a thirteen-month-old cluster",
    scenario: "A lab cluster built with kubeadm 13 months ago has never been upgraded. This morning kubectl fails with an x509 error saying the certificate has expired, and the control-plane components are logging the same error when they talk to each other.",
    question: "What is the most likely cause, and how is it remedied?",
    options: [
      { id: 'A', text: "The service account signing key expired; rotate it with kubeadm token create and restart the kubelet." },
      { id: 'B', text: "The node clocks drifted a month ahead; resync NTP so the certificates fall back inside their validity." },
      { id: 'C', text: "Leaf certificates expired after kubeadm's one-year default; renew them and restart the control plane." },
      { id: 'D', text: "The cluster CA expired after one year; run kubeadm init again to create a new CA and rejoin the nodes." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "kubeadm issues control-plane leaf certificates (API server, front-proxy client, etcd and the admin kubeconfig) with a one-year validity and renews them automatically only during kubeadm upgrade. A cluster that was never upgraded hits expiry after a year; kubeadm certs check-expiration shows the dates and kubeadm certs renew all followed by restarting the control-plane static pods fixes it. kubeadm CAs are valid for ten years, so the CA is not the problem. Service account signing keys are raw key pairs with no expiry, and kubeadm token create makes bootstrap tokens. Clock drift is possible, but a thirteen-month-old cluster matches the one-year default exactly.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/",
    tags: ["kubeadm", "Certificate expiry", "PKI"]
  },
  {
    id: "cncf-kcsa-414",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Node joins work, but certificate renewals stay Pending",
    scenario: "A team built a cluster by hand and enabled rotateCertificates on every kubelet. New nodes join through TLS bootstrapping and get their first client certificate automatically, but near expiry each kubelet's renewal CSR, signed with its existing node certificate, sits in Pending indefinitely. The kube-controller-manager has its signing certificate and key configured.",
    question: "What is the most likely cause?",
    options: [
      { id: 'A', text: "The nodes also need serverTLSBootstrap set to true, because client renewals are only sent alongside serving ones." },
      { id: 'B', text: "The bootstrap token expired after 24 hours, so the kubelets can no longer authenticate the CSRs that renew their certs." },
      { id: 'C', text: "kubelet-serving requests are never auto-approved by the built-in approver, so each renewal must be approved by hand." },
      { id: 'D', text: "The system:nodes group lacks a ClusterRoleBinding to the selfnodeclient ClusterRole that permits auto-approved renewal." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The csrapproving controller auto-approves node client CSRs only when the requester is authorised for the matching ClusterRole: system:certificates.k8s.io:certificatesigningrequests:nodeclient for first-time requests from system:bootstrappers, and ...:selfnodeclient for renewals by a node using its own certificate. kubeadm creates both bindings; a hand-built cluster that bound only the first gets working joins and stuck renewals. Client renewals use the kube-apiserver-client-kubelet signer, not kubelet-serving, so the never-auto-approved rule for serving certificates does not apply. serverTLSBootstrap is independent of client rotation. Renewals authenticate with the node's current client certificate, so an expired bootstrap token is irrelevant.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/kubelet-tls-bootstrapping/",
    tags: ["TLS bootstrapping", "Certificate rotation", "CSR approval"]
  },
  {
    id: "cncf-kcsa-415",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Issuing a user certificate through the CSR API",
    scenario: "A platform engineer at a logistics company wants to give an external auditor read-only kubectl access using an X.509 client certificate signed by the cluster's CA. She generated a key and certificate request with CN=auditor and is writing the CertificateSigningRequest object for the auditor's certificate.",
    question: "Which signerName should the request use?",
    options: [
      { id: 'A', text: "kubernetes.io/kube-apiserver-client-kubelet" },
      { id: 'B', text: "kubernetes.io/legacy-unknown" },
      { id: 'C', text: "kubernetes.io/kube-apiserver-client" },
      { id: 'D', text: "kubernetes.io/kubelet-serving" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "kubernetes.io/kube-apiserver-client issues client certificates that the API server accepts for authentication, and it is never auto-approved, so an administrator must approve the auditor's request before kube-controller-manager signs it; RBAC then grants the read-only rights to the auditor username. kube-apiserver-client-kubelet is reserved for kubelet client certificates with the system:node: prefix and system:nodes group. kubelet-serving issues serving certificates for kubelet endpoints, not client credentials. legacy-unknown has no guaranteed trust and cannot be requested through the certificates.k8s.io/v1 API.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/certificate-signing-requests/",
    tags: ["CertificateSigningRequest", "Signers", "Client certificates"]
  },
  {
    id: "cncf-kcsa-416",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Kubelets waiting forever for serving certificates",
    scenario: "To stop kubelets using self-signed serving certificates, an SRE set serverTLSBootstrap: true in the kubelet configuration on all nodes. Afterwards kubectl logs and kubectl exec fail with TLS errors, and kubectl get csr shows a growing list of Pending requests with the signer kubernetes.io/kubelet-serving.",
    question: "What is happening?",
    options: [
      { id: 'A', text: "kube-controller-manager never auto-approves kubelet-serving requests, so they need approval by a person or approver." },
      { id: 'B', text: "The requests are waiting for the cluster CA to be rotated, because serving certificates need a separate root CA." },
      { id: 'C', text: "The kubelets lack RBAC to request kubelet-serving certificates, so each CSR stays Pending until a binding exists." },
      { id: 'D', text: "serverTLSBootstrap also needs rotateCertificates set to false, otherwise client and serving rotation conflict." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "With serverTLSBootstrap, each kubelet requests its serving certificate through the CSR API with the kubelet-serving signer. The built-in approver deliberately never auto-approves these, because it cannot verify that the requested IP and DNS names really belong to the node, so they wait in Pending and the API server cannot establish a trusted connection for logs and exec. An administrator, or a dedicated approver that validates the SANs, must approve them. The requests exist, so the kubelets already had permission to create them. rotateCertificates controls client certificate rotation and does not conflict. Serving certificates are signed by the cluster CA and need no separate root.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/kubelet-tls-bootstrapping/",
    tags: ["Kubelet", "Serving certificates", "CSR approval"]
  },
  {
    id: "cncf-kcsa-417",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Letting the API server trust user certificates",
    scenario: "A team building a cluster by hand wants engineers to authenticate to the API server with X.509 client certificates issued by its internal CA. Engineers presenting valid certificates are currently treated as anonymous, because the API server has not been told which authority to trust for client authentication.",
    question: "Which kube-apiserver flag must reference the internal CA bundle?",
    options: [
      { id: 'A', text: "--client-ca-file on the API server command line" },
      { id: 'B', text: "--kubelet-certificate-authority on the server" },
      { id: 'C', text: "--service-account-key-file on the API server" },
      { id: 'D', text: "--tls-cert-file on the API server command line" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "--client-ca-file tells the API server which CA bundle to use when validating client certificates; a certificate that chains to it authenticates as the user in its Common Name, with groups taken from its Organization fields. --tls-cert-file is the API server's own serving certificate that clients verify. --kubelet-certificate-authority is used by the API server to verify kubelets' serving certificates on its outbound connections. --service-account-key-file holds public keys for verifying service account tokens, not certificates.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authentication/#x509-client-certificates",
    tags: ["kube-apiserver", "Client certificates", "Authentication"]
  },
  {
    id: "cncf-kcsa-418",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Forged identity headers against an aggregated API",
    scenario: "An e-commerce cluster serves a custom metrics API through the aggregation layer. The kube-apiserver authenticates users and forwards requests to the extension API server with X-Remote-User and X-Remote-Group headers. A reviewer asks what stops a pod from calling the extension server directly with forged headers claiming to be cluster-admin.",
    question: "What prevents the forgery?",
    options: [
      { id: 'A', text: "The kube-apiserver strips all X-Remote headers at the cluster edge, so pod traffic never contains any of them." },
      { id: 'B', text: "The extension server accepts the headers only from clients with a front-proxy CA certificate whose CN is allowed." },
      { id: 'C', text: "The extension server re-sends every header to the kube-apiserver's TokenReview API before trusting any value." },
      { id: 'D', text: "The aggregation layer signs the headers with the service account key, and the extension server verifies it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Requests from the aggregation layer carry a client certificate signed by the front-proxy (request header) CA. The extension API server reads --requestheader-client-ca-file and --requestheader-allowed-names (published in the extension-apiserver-authentication ConfigMap) and honours identity headers only on connections presenting such a certificate with an allowed Common Name; a pod without that certificate cannot assert an identity. TokenReview validates bearer tokens, not headers. The headers are not signed with the service account key. The API server cannot strip headers from traffic that goes straight from a pod to the extension server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/configure-aggregation-layer/",
    tags: ["Aggregation layer", "Front-proxy CA", "Authentication"]
  },
  {
    id: "cncf-kcsa-419",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "API server that never checks who the kubelet is",
    scenario: "A CIS Benchmark scan of a telecom's self-managed cluster flags that the kube-apiserver does not verify the certificate presented by kubelets when it connects to them for logs, exec and port-forward. The network team notes that an attacker who can intercept traffic to a node could impersonate its kubelet and capture exec sessions.",
    question: "What remediation addresses the finding?",
    options: [
      { id: 'A', text: "Set --kubelet-certificate-authority and give kubelets serving certificates signed by that CA, not self-signed ones." },
      { id: 'B', text: "Set anonymous authentication to false and the authorization mode to Webhook in every kubelet's configuration file." },
      { id: 'C', text: "Set --kubelet-preferred-address-types to InternalIP only so the API server reaches kubelets over the private network." },
      { id: 'D', text: "Set --kubelet-client-certificate and --kubelet-client-key so the API server authenticates itself to every kubelet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Without --kubelet-certificate-authority, the API server uses TLS to reach kubelets but does not verify their serving certificates, which permits a man-in-the-middle. Setting the flag makes it validate each kubelet's certificate, which requires kubelets to present certificates signed by that CA, for example via serverTLSBootstrap and approved kubelet-serving CSRs, instead of the default self-signed ones. The client certificate and key flags authenticate the API server to the kubelet, the opposite direction. Kubelet anonymous and Webhook settings protect the kubelet from unauthorised callers but do not help the API server verify the kubelet. A private address type reduces exposure but still performs no verification.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/control-plane-node-communication/",
    tags: ["kube-apiserver", "Kubelet", "TLS verification", "CIS Benchmark"]
  },
  {
    id: "cncf-kcsa-420",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Group binding ignored for a new user certificate",
    scenario: "An administrator issued a client certificate to Priya with the subject CN=priya, OU=dev-team and bound the edit ClusterRole to the group dev-team in the web namespace. Priya authenticates successfully, but every write request is forbidden, and the audit log shows her with only the system:authenticated group.",
    question: "What is wrong with the setup?",
    options: [
      { id: 'A', text: "Groups are read from Organization (O) fields, so the certificate must be reissued with O=dev-team." },
      { id: 'B', text: "Groups are read from the Common Name after a colon, so the CN must be written as priya:dev-team." },
      { id: 'C', text: "Groups need a matching ClusterRoleBinding, so a RoleBinding in the web namespace is being ignored." },
      { id: 'D', text: "Groups are not supported for client certificates, so the binding must name the user priya instead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "For X.509 client certificates, Kubernetes takes the username from the Common Name and group memberships from the Organization fields, one group per O value; Organizational Unit is ignored, so Priya has no dev-team group and the binding never matches. The CN is used verbatim as the username and is not split on colons. Certificates do support groups, which is how system:nodes and system:masters work. A RoleBinding may reference a ClusterRole and a group subject; it grants the role within its namespace, so no ClusterRoleBinding is required.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authentication/#x509-client-certificates",
    tags: ["Client certificates", "RBAC", "Groups"]
  },
  {
    id: "cncf-kcsa-421",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Ingress certificates renewed by calendar reminder",
    scenario: "A marketing agency hosts 40 customer sites behind an NGINX Ingress controller. TLS certificates are bought yearly and copied into Secrets by hand, and two sites went down this year when certificates expired unnoticed. The agency wants certificates issued and renewed automatically inside the cluster.",
    question: "What should the agency deploy?",
    options: [
      { id: 'A', text: "The CSR API with the kubernetes.io/kubelet-serving signer for each hostname" },
      { id: 'B', text: "cert-manager with an ACME ClusterIssuer and a Certificate for each site" },
      { id: 'C', text: "A Sealed Secrets controller so the certificate Secrets can be kept in Git" },
      { id: 'D', text: "kubeadm certs renew all on a monthly CronJob running on the control plane" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "cert-manager watches Certificate resources (or annotated Ingresses), obtains certificates from an Issuer or ClusterIssuer such as Let's Encrypt via ACME or an internal CA, stores them in Secrets and renews them before expiry. The kubelet-serving signer issues kubelet serving certificates signed by the cluster CA, which public browsers do not trust. Sealed Secrets encrypts Secrets for Git storage but does not issue or renew anything. kubeadm certs renew handles control-plane certificates only.",
    referenceUrl: "https://cert-manager.io/docs/",
    tags: ["cert-manager", "TLS", "Certificate lifecycle"]
  },
  {
    id: "cncf-kcsa-422",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "An approver that signs every kubelet serving request",
    scenario: "Tired of approving kubelet-serving CSRs by hand, a platform team deployed a small controller that automatically approves every CSR using the kubernetes.io/kubelet-serving signer. A security review asks what a compromised worker node could now do and how the approver should be fixed.",
    question: "Which assessment is correct?",
    options: [
      { id: 'A', text: "It could obtain a cluster-admin client certificate, so the approver must reject any request that lists system:masters." },
      { id: 'B', text: "It could get a serving cert naming another node's IPs or names; the approver must check SANs against that Node." },
      { id: 'C', text: "Nothing new, because kubelet-serving certificates are only used by the kubelet itself for its own outbound calls." },
      { id: 'D', text: "It could sign its own CSRs with the cluster CA, so the approver must run on the control plane instead of workers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kubelet serving certificates prove a kubelet's identity to the API server when it connects for logs, exec and port-forward. If every request is approved, a compromised node can ask for a certificate whose SANs contain another node's hostname or IP address and then impersonate that kubelet to intercept exec sessions and logs. This is why kube-controller-manager never auto-approves these requests. A safe approver checks that the requester is system:node:NAME and that every SAN matches the addresses on that Node object. Serving certificates are for inbound connections, not outbound calls. The kubelet-serving signer issues serving certificates, not client certificates, so system:masters is irrelevant here. Approving a request does not give anyone the CA key.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/kubelet-tls-bootstrapping/#certificate-rotation",
    tags: ["Kubelet", "Serving certificates", "CSR approval"]
  },
  {
    id: "cncf-kcsa-423",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Nodes dropping to NotReady on their first birthday",
    scenario: "Worker nodes in a manufacturer's self-managed cluster started going NotReady one by one, each almost exactly a year after joining. The kubelet logs show that its client certificate for talking to the API server has expired. The operations team wants this to never happen again without manual intervention.",
    question: "Which kubelet setting prevents it?",
    options: [
      { id: 'A', text: "Set rotateCertificates to true so the kubelet requests a new client certificate before the old expires." },
      { id: 'B', text: "Set serverTLSBootstrap to true so each kubelet requests a fresh serving certificate on every restart." },
      { id: 'C', text: "Set authentication.x509.clientCAFile to the cluster CA so that expired certificates are still accepted." },
      { id: 'D', text: "Set readOnlyPort to 10255 so the kubelet can still report node status when its certificate has expired." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "With rotateCertificates enabled (the --rotate-certificates flag), the kubelet submits a CSR for a new client certificate as the current one approaches expiry; kube-controller-manager auto-approves and signs node client renewals when the required RBAC bindings are in place, and the kubelet switches to the new certificate without interruption. serverTLSBootstrap concerns serving certificates, which are not what expired. clientCAFile tells the kubelet which CA to trust for callers; it does not affect the kubelet's own client certificate, and nothing makes expired certificates valid. The read-only port is an unauthenticated listener and plays no part in node status reporting.",
    referenceUrl: "https://kubernetes.io/docs/tasks/tls/certificate-rotation/",
    tags: ["Kubelet", "Certificate rotation", "Node health"]
  },
  {
    id: "cncf-kcsa-424",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Join command with a never-expiring token in the wiki",
    scenario: "While auditing a kubeadm cluster, a security engineer finds a kubeadm join command pasted in the team wiki eight months ago. It contains a bootstrap token created with --ttl 0, and kubeadm token list shows the token is still valid. The cluster uses the default CSR auto-approval for node client certificates.",
    question: "What is the main risk, and what should be done?",
    options: [
      { id: 'A', text: "Anyone can gain cluster-admin with it; delete the kubeadm-config ConfigMap so the token no longer works." },
      { id: 'B', text: "Anyone can join etcd as a peer with it; rotate the etcd CA and move the join command to a private page." },
      { id: 'C', text: "Anyone can get a node certificate with it; delete the token and use short-lived tokens only when joining." },
      { id: 'D', text: "Anyone can read Secrets in kube-system with it; rotate every Secret there and keep the token for joining nodes." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A bootstrap token authenticates as a member of system:bootstrappers, which is allowed to create node client CSRs that the controller manager auto-approves, so its holder can obtain a certificate for a system:node identity and act as a kubelet, reading the Secrets and objects that node authorization permits. The fix is kubeadm token delete, plus creating tokens with the default 24-hour TTL (or shorter) only when a node is joining. The token does not grant direct read access to kube-system Secrets or cluster-admin, and the kubeadm-config ConfigMap does not control token validity; tokens are Secrets named bootstrap-token-TOKEN_ID in kube-system. Bootstrap tokens do not authenticate to etcd.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/bootstrap-tokens/",
    tags: ["Bootstrap tokens", "TLS bootstrapping", "kubeadm"]
  },
  {
    id: "cncf-kcsa-425",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Approved CSR that never receives a certificate",
    scenario: "In a cluster assembled by hand for a training lab, an administrator approves a CertificateSigningRequest for signer kubernetes.io/kube-apiserver-client. kubectl get csr shows the request as Approved, but its status.certificate field stays empty for hours and no errors appear in the API server logs.",
    question: "What is missing?",
    options: [
      { id: 'A', text: "The kube-controller-manager needs --cluster-signing-cert-file and --cluster-signing-key-file set." },
      { id: 'B', text: "The kube-apiserver needs --client-ca-file pointing at the CA bundle that should sign the request." },
      { id: 'C', text: "The CertificateSigningRequest needs a matching RoleBinding before the signer will act on it." },
      { id: 'D', text: "The kubelet needs rotateCertificates set to true so it can sign approved client requests locally." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Approval and signing are separate steps. For the built-in kubernetes.io signers, signing is done by the csrsigning controller inside kube-controller-manager, which needs the cluster CA certificate and key through --cluster-signing-cert-file and --cluster-signing-key-file; without them an approved request is never signed. --client-ca-file tells the API server which CA to trust for client authentication, but the API server does not sign anything. Kubelets request certificates; they never sign them. A CSR needs no RoleBinding to be signed; RBAC governs who may create and approve requests.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/certificate-signing-requests/",
    tags: ["CertificateSigningRequest", "kube-controller-manager", "Signing"]
  }
];

export default CNCF_KCSA_QUESTIONS_17;
