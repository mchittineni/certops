export const CNCF_KCSA_FLASHCARDS_17 = [
  {
    id: 'cncf-kcsa-fc-401',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Service mesh: what is the data plane and what is the control plane?',
    hint: 'Who carries the packets, who hands out config and certificates.',
    back: 'The <strong>data plane</strong> is the set of proxies (Envoy sidecars, Istio ztunnel and waypoints, or the Linkerd2-proxy) that sit in the traffic path and enforce mTLS, routing and authorization. The <strong>control plane</strong> (istiod, or Linkerd\'s destination and identity controllers) distributes configuration to those proxies and issues and rotates their <strong>workload certificates</strong>. Security features only apply to traffic that actually passes through the data plane.',
    tags: ['Service mesh', 'Architecture']
  },
  {
    id: 'cncf-kcsa-fc-402',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Istio sidecar mode vs ambient mode: how does each place the proxy?',
    hint: 'Per pod, or per node plus optional per service.',
    back: '<strong>Sidecar mode</strong>: an Envoy container is injected into every pod and handles L4 and L7 for that pod. <strong>Ambient mode</strong>: a per-node <strong>ztunnel</strong> provides L4 mTLS and identity-based authorization for all ambient pods on the node, and optional <strong>waypoint proxies</strong> (per namespace or service) handle L7 features such as HTTP authorization. Ambient avoids injecting and restarting pods and removes the per-pod proxy overhead, but L7 policy needs a waypoint.',
    tags: ['Istio', 'Ambient mode', 'Sidecars']
  },
  {
    id: 'cncf-kcsa-fc-403',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'What do the Istio PeerAuthentication modes STRICT, PERMISSIVE and DISABLE mean?',
    hint: 'What the server-side proxy will accept.',
    back: '<strong>STRICT</strong>: accept only mutual TLS; plaintext is rejected. <strong>PERMISSIVE</strong> (the default): accept both mTLS and plaintext, used during migration. <strong>DISABLE</strong>: mTLS off for the workload. <strong>UNSET</strong> inherits from the parent scope. Policies apply mesh-wide (in the root namespace), per namespace, per workload by selector, and per port, with the narrowest scope winning.',
    tags: ['Istio', 'PeerAuthentication', 'mTLS']
  },
  {
    id: 'cncf-kcsa-fc-404',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'How does Istio combine CUSTOM, DENY and ALLOW authorization policies for a request?',
    hint: 'Order of evaluation, then what happens if no ALLOW matches.',
    back: 'Evaluated in order: <strong>CUSTOM</strong> (external authorizer) first; if it denies, the request is denied. Then <strong>DENY</strong>: any match denies. Then <strong>ALLOW</strong>: if <strong>no</strong> ALLOW policies apply to the workload, the request is allowed; if ALLOW policies exist, the request must match at least one or it is denied. An ALLOW policy with an empty spec matches nothing, so it denies everything. AUDIT policies only mark requests for logging.',
    tags: ['Istio', 'AuthorizationPolicy']
  },
  {
    id: 'cncf-kcsa-fc-405',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'What role does Envoy play in an Istio mesh?',
    hint: 'The proxy doing the actual work.',
    back: '<strong>Envoy</strong> is the CNCF graduated L4/L7 proxy that Istio uses as its sidecar and in its gateways and waypoints. It terminates and originates <strong>mutual TLS</strong>, enforces authorization and routing rules, and emits metrics, logs and traces. It receives configuration and certificates from istiod over the xDS APIs, including SDS for secrets, so certificates never need to be mounted as files.',
    tags: ['Envoy', 'Istio']
  },
  {
    id: 'cncf-kcsa-fc-406',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'SPIFFE vs SPIRE: what is the standard and what is the implementation?',
    hint: 'A spec for identity, and a system that issues it.',
    back: '<strong>SPIFFE</strong> is a CNCF standard for workload identity: an ID of the form spiffe://trust-domain/path, delivered as an <strong>SVID</strong> (an X.509 certificate or a JWT) through the Workload API. <strong>SPIRE</strong> is the reference implementation: a server and per-node agents that attest workloads (for example by Kubernetes namespace and ServiceAccount) and issue short-lived SVIDs. Istio and Linkerd use SPIFFE-format identities.',
    tags: ['SPIFFE', 'SPIRE', 'Workload identity']
  },
  {
    id: 'cncf-kcsa-fc-407',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Istio RequestAuthentication vs AuthorizationPolicy: why do you usually need both for JWTs?',
    hint: 'Validating a token is not requiring one.',
    back: '<strong>RequestAuthentication</strong> defines which JWT issuers and keys are valid; requests with an invalid token are rejected, but requests with <strong>no token</strong> are still accepted. An <strong>AuthorizationPolicy</strong> that requires requestPrincipals (for example ["*"] or a specific issuer/subject) is what rejects unauthenticated requests. Peer identity from mTLS (principals) and end-user identity from JWTs (requestPrincipals) are separate attributes.',
    tags: ['Istio', 'JWT', 'RequestAuthentication']
  },
  {
    id: 'cncf-kcsa-fc-408',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'What does a service mesh not protect you from?',
    hint: 'Anything outside the proxy\'s view.',
    back: 'A mesh secures traffic that passes through its proxies. It does not protect <strong>unmeshed pods</strong> or ports excluded from redirection, <strong>hostNetwork</strong> pods, traffic from a workload that <strong>bypasses</strong> its proxy (for example with NET_ADMIN), a <strong>compromised node</strong> where keys can be read, or <strong>application vulnerabilities</strong> exploited over an allowed, authenticated connection. Pair it with NetworkPolicy, Pod Security and runtime detection.',
    tags: ['Service mesh', 'Limitations', 'Defence in depth']
  },
  {
    id: 'cncf-kcsa-fc-409',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Which certificate authorities and key pairs does kubeadm create in /etc/kubernetes/pki?',
    hint: 'Three CAs and one key pair that is not a CA.',
    back: '<strong>ca</strong>: the cluster CA for API server, kubelet and user certificates. <strong>etcd/ca</strong>: a separate CA for etcd server, peer and client certificates. <strong>front-proxy-ca</strong>: for the aggregation layer\'s front-proxy client certificate. <strong>sa.key / sa.pub</strong>: a plain key pair (no certificate) used to sign and verify service account tokens.',
    tags: ['Kubernetes PKI', 'kubeadm']
  },
  {
    id: 'cncf-kcsa-fc-410',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'How long are kubeadm certificates valid, and how are they renewed?',
    hint: 'One number for leaves, another for CAs.',
    back: 'Leaf certificates (API server, etcd, front-proxy client, kubeconfig client certs): <strong>1 year</strong>. CA certificates: <strong>10 years</strong>. kubeadm renews leaf certificates automatically during <strong>kubeadm upgrade apply</strong>; otherwise use <strong>kubeadm certs check-expiration</strong> and <strong>kubeadm certs renew</strong> (then restart the control-plane static pods). Kubelet client certificates are renewed separately by kubelet rotation.',
    tags: ['kubeadm', 'Certificate expiry']
  },
  {
    id: 'cncf-kcsa-fc-411',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Walk through the lifecycle of a CertificateSigningRequest object.',
    hint: 'Create, decide, sign, collect.',
    back: '1. A client generates a key and submits a <strong>CSR</strong> object with the PEM request, a <strong>signerName</strong>, usages and an optional <strong>expirationSeconds</strong> (minimum 600). 2. An approver (a person with approve permission on the signer, or a controller) sets the <strong>Approved</strong> or <strong>Denied</strong> condition. 3. The signer issues the certificate into <strong>status.certificate</strong>. 4. The client retrieves it. Approved CSRs are garbage-collected after about an hour.',
    tags: ['CertificateSigningRequest', 'PKI']
  },
  {
    id: 'cncf-kcsa-fc-412',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'How does a kubelet get a CA-signed serving certificate instead of a self-signed one, and why do those requests sit Pending?',
    hint: 'A kubelet config setting, and a signer that nothing approves automatically.',
    back: 'By default the kubelet serves its HTTPS API on 10250 with a <strong>self-signed</strong> certificate, which the API server cannot verify. Setting <code>serverTLSBootstrap: true</code> in the KubeletConfiguration makes it request (and later rotate) a serving certificate through a CSR with signer <code>kubernetes.io/kubelet-serving</code>. kube-controller-manager <strong>never auto-approves</strong> these, because it cannot prove the requested IPs and DNS names belong to the node, so an admin or a SAN-validating approver must approve them; until then kubectl logs and exec fail. Once they are issued, the API server can set <code>--kubelet-certificate-authority</code> and verify every kubelet.',
    tags: ['Kubelet', 'Serving certificates', 'CSR']
  },
  {
    id: 'cncf-kcsa-fc-413',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'In a Kubernetes client certificate, which fields give the username and the groups?',
    hint: 'CN and O.',
    back: 'The <strong>Common Name (CN)</strong> becomes the <strong>username</strong>; each <strong>Organization (O)</strong> value becomes a <strong>group</strong>. OU and other fields are ignored. Example: CN=jane, O=dev, O=ops authenticates as user jane in groups dev and ops (plus system:authenticated). Groups are fixed at issuance and cannot be changed without a new certificate.',
    tags: ['Client certificates', 'Authentication']
  },
  {
    id: 'cncf-kcsa-fc-414',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Pods in many namespaces must trust a private CA. How does cert-manager\'s trust-manager distribute it, and what must never go in the bundle?',
    hint: 'One cluster-scoped resource fans out to many ConfigMaps.',
    back: 'trust-manager watches a cluster-scoped <strong>Bundle</strong> resource listing CA sources (ConfigMaps or Secrets in the trust namespace, inline PEM, or the optional default public CA package) and writes the combined certificates to a <strong>ConfigMap</strong> (or, if enabled, a Secret) in every namespace its selector matches, updating them when a CA is renewed. Clients mount it to verify internal TLS. Only <strong>public CA certificates</strong> belong there, such as the <code>ca.crt</code> of a cert-manager Secret; a copied CA private key would let anyone in those namespaces mint trusted certificates. kube-root-ca.crt holds only the cluster CA.',
    tags: ['cert-manager', 'trust-manager', 'PKI']
  },
  {
    id: 'cncf-kcsa-fc-415',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'How does kubelet TLS bootstrapping get a new node its client certificate?',
    hint: 'Token first, certificate second.',
    back: 'The kubelet starts with a bootstrap kubeconfig holding a <strong>bootstrap token</strong> (group system:bootstrappers). It generates a key and submits a CSR for signer <strong>kube-apiserver-client-kubelet</strong>. With the right ClusterRoleBindings, kube-controller-manager auto-approves and signs it; the kubelet writes the certificate and a real kubeconfig and uses that from then on. With rotation enabled, later renewals use the node\'s own certificate.',
    tags: ['TLS bootstrapping', 'Kubelet']
  },
  {
    id: 'cncf-kcsa-fc-416',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'An aggregated API server trusts X-Remote-User headers from kube-apiserver. What stops a pod calling it directly with forged headers?',
    hint: 'Headers only count on a connection carrying the right client certificate.',
    back: 'kube-apiserver proxies aggregated requests with a client certificate (<code>--proxy-client-cert-file</code> and <code>--proxy-client-key-file</code>) signed by the <strong>front-proxy (request header) CA</strong>. The extension server reads <code>--requestheader-client-ca-file</code> and <code>--requestheader-allowed-names</code>, published in the kube-system <strong>extension-apiserver-authentication</strong> ConfigMap, and honours the user, group and extra headers <strong>only</strong> on connections presenting such a certificate with an allowed CN. A pod without it cannot assert an identity. Keep the front-proxy CA separate from the cluster CA and set allowed names, because an empty list accepts any CN that CA signed.',
    tags: ['API aggregation', 'Authenticating proxy', 'Front-proxy CA']
  },
  {
    id: 'cncf-kcsa-fc-417',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'cert-manager Issuer vs ClusterIssuer: what is the difference?',
    hint: 'Scope.',
    back: 'An <strong>Issuer</strong> is namespaced and can only issue Certificates in its own namespace. A <strong>ClusterIssuer</strong> is cluster-scoped and can issue in any namespace. Both can use ACME (for example Let\'s Encrypt), a CA key pair, Vault, or other backends. Use namespaced Issuers when tenants must not obtain certificates from each other\'s CAs.',
    tags: ['cert-manager', 'Issuers']
  },
  {
    id: 'cncf-kcsa-fc-418',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Why must kubeconfig files such as admin.conf be protected like private keys?',
    hint: 'Look at what is embedded in them.',
    back: 'A kubeconfig usually embeds the <strong>client certificate and private key</strong> (or a bearer token) in client-certificate-data and client-key-data, so whoever copies the file becomes that identity until the credential expires, with no revocation. Keep admin kubeconfigs root-owned with mode 600 on control-plane nodes, never commit or share them, and give people individual, short-lived credentials instead.',
    tags: ['kubeconfig', 'Credentials']
  },
  {
    id: 'cncf-kcsa-fc-419',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'A phished developer token let an attacker push straight to main. Which repository controls make one compromised account insufficient?',
    hint: 'A second person, required checks, and verifiable authorship.',
    back: '<strong>Branch protection</strong> or rulesets that block direct and force pushes to protected branches, require an approving <strong>review from someone other than the author</strong> and require passing status checks; <strong>CODEOWNERS</strong> on sensitive paths such as manifests and pipeline definitions; and <strong>signed commits</strong> (GPG, SSH or Sigstore gitsign) so authorship can be verified. Add phishing-resistant MFA and short-lived tokens for developers. Every later supply chain control, such as provenance and image signing, assumes the source it builds from was trustworthy.',
    tags: ['Source integrity', 'Branch protection', 'Signed commits']
  },
  {
    id: 'cncf-kcsa-fc-420',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'How do you enforce a minimum TLS version and cipher list on the API server and kubelet?',
    hint: 'Same idea, different spelling per component.',
    back: 'kube-apiserver (and other control-plane binaries) take <strong>--tls-min-version</strong> (for example VersionTLS12 or VersionTLS13) and <strong>--tls-cipher-suites</strong> to restrict TLS 1.2 ciphers to strong AEAD suites. The kubelet sets the same in its config file as <strong>tlsMinVersion</strong> and <strong>tlsCipherSuites</strong>. TLS 1.3 cipher suites are not configurable. etcd has equivalent --tls-min-version and --cipher-suites flags.',
    tags: ['TLS', 'Hardening', 'kube-apiserver']
  },
  {
    id: 'cncf-kcsa-fc-421',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'How long do Istio workload certificates live, and who rotates them?',
    hint: 'Measured in hours, handled by the agent.',
    back: 'By default Istio workload certificates are valid for <strong>24 hours</strong>. The istio-agent next to each proxy generates the key, sends a CSR to istiod (or a plugged-in CA) and delivers the certificate to Envoy over <strong>SDS</strong>, rotating it automatically before expiry. Private keys stay in memory and are never written to a Kubernetes Secret.',
    tags: ['Istio', 'Certificate rotation']
  },
  {
    id: 'cncf-kcsa-fc-422',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'What is an Istio egress gateway for, and why is it not enough on its own?',
    hint: 'A choke point needs a wall around it.',
    back: 'An <strong>egress gateway</strong> is a dedicated Envoy deployment through which outbound traffic to external services is routed, giving one place to apply policy, logging and TLS origination, and a fixed set of source nodes for firewall rules. On its own it only affects traffic the sidecars send to it; a compromised pod can connect directly. Pair it with <strong>NetworkPolicy</strong> or cloud firewall rules that block direct egress from application pods.',
    tags: ['Istio', 'Egress gateway']
  },
  {
    id: 'cncf-kcsa-fc-423',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Linkerd identity: what are the trust anchor and the issuer certificate?',
    hint: 'Root and intermediate.',
    back: 'The <strong>trust anchor</strong> is Linkerd\'s root CA certificate, distributed to every proxy to validate peers; it should be long-lived and its key kept offline. The <strong>issuer certificate</strong> is an intermediate CA held by the identity controller, which signs each proxy\'s <strong>24-hour</strong> workload certificate. Linkerd does not rotate the trust anchor or issuer automatically, so many teams manage the issuer with cert-manager.',
    tags: ['Linkerd', 'Trust anchor', 'PKI']
  },
  {
    id: 'cncf-kcsa-fc-424',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'What must be true for mTLS to work between workloads in two different meshes or clusters?',
    hint: 'Common roots and agreed names.',
    back: 'Each side must be able to <strong>validate the other\'s certificate</strong>: the meshes share a common root CA (each typically with its own intermediate), or exchange trust bundles through SPIFFE federation. Authorization rules must also recognise the remote <strong>trust domain</strong> in identities, for example through Istio trust domain aliases. Independent self-signed roots in each cluster cannot interoperate.',
    tags: ['Multi-cluster', 'Trust domain', 'mTLS']
  },
  {
    id: 'cncf-kcsa-fc-425',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'What is the ca.crt that Kubernetes places in every pod used for?',
    hint: 'Verifying the server, not proving the pod.',
    back: 'The cluster CA bundle is published in the <strong>kube-root-ca.crt</strong> ConfigMap in every namespace and mounted with the projected service account volume at /var/run/secrets/kubernetes.io/serviceaccount/ca.crt. Clients in the pod use it to <strong>verify the API server\'s serving certificate</strong>. It contains no private key and grants no access by itself.',
    tags: ['Kubernetes PKI', 'Service accounts']
  }
];

export default CNCF_KCSA_FLASHCARDS_17;
