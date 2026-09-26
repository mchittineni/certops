export const CNCF_KCSA_FLASHCARDS_7 = [
  {
    id: 'cncf-kcsa-fc-151',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'etcd data in transit vs at rest: which control protects each, and who configures it?',
    hint: 'Three layers: the wire, the objects, the disk.',
    back: '<strong>In transit</strong>: TLS on the client and peer ports, set with etcd\'s cert and peer-cert flags and the API server\'s --etcd-* flags. <strong>Objects at rest</strong>: an <strong>EncryptionConfiguration</strong> on kube-apiserver encrypts chosen resources such as Secrets before they are written, so etcd only ever stores ciphertext. <strong>Disk at rest</strong>: volume or filesystem encryption on the etcd hosts and for snapshot storage. Each layer covers a theft path the others miss.',
    tags: ['etcd', 'Encryption', 'TLS']
  },
  {
    id: 'cncf-kcsa-fc-152',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Which four etcd flags secure the client port with mutual TLS?',
    hint: 'Two describe etcd itself, two describe who it trusts.',
    back: '<code>--cert-file</code> and <code>--key-file</code>: etcd\'s own serving certificate and key. <code>--client-cert-auth=true</code>: require a client certificate on every connection. <code>--trusted-ca-file</code>: the CA whose signatures etcd accepts from clients. Without the last two, TLS encrypts traffic but anyone who can connect is let in.',
    tags: ['etcd', 'mTLS', 'Configuration']
  },
  {
    id: 'cncf-kcsa-fc-153',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Which etcd flags protect member-to-member traffic, and which CIS items relate to them?',
    hint: 'Same idea as the client flags with a prefix.',
    back: 'The <strong>peer</strong> flags: <code>--peer-cert-file</code>, <code>--peer-key-file</code>, <code>--peer-client-cert-auth=true</code> and <code>--peer-trusted-ca-file</code>. Together they encrypt Raft replication on 2380 and stop an unknown host from joining as a member. The CIS benchmark checks that peer certificates are set, that peer client authentication is on and that <code>--peer-auto-tls</code> is <strong>not</strong> true.',
    tags: ['etcd', 'Peer TLS', 'CIS Benchmark']
  },
  {
    id: 'cncf-kcsa-fc-154',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Why should etcd trust a dedicated CA rather than the Kubernetes cluster CA?',
    hint: 'etcd checks who signed the certificate, not who holds it.',
    back: 'etcd authorizes a client purely by whether its certificate chains to <code>--trusted-ca-file</code>. The cluster CA signs kubelet client certificates, user certificates and anything approved through the CSR API, so trusting it would let <strong>any</strong> of those identities read and write etcd directly, bypassing RBAC. A <strong>dedicated etcd CA</strong> that signs only the API server\'s etcd client certificate (and member certificates) keeps etcd access to that one client.',
    tags: ['etcd', 'PKI', 'Certificate authority']
  },
  {
    id: 'cncf-kcsa-fc-155',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What does etcd actually hold, and in what form, for a default Kubernetes cluster?',
    hint: 'Look under one key prefix.',
    back: 'Every API object, including Secrets, ConfigMaps, RBAC bindings and service account data, stored under the <code>/registry/</code> prefix in the API server\'s serialized form (protobuf or JSON). Without an encryption configuration, Secret data is merely <strong>base64</strong>, which is encoding, not encryption. So a stolen snapshot, data directory or etcd client credential exposes everything in the cluster.',
    tags: ['etcd', 'Secrets', 'Data exposure']
  },
  {
    id: 'cncf-kcsa-fc-156',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Which Kubernetes component should be etcd\'s only client, and why?',
    hint: 'Where do authentication and RBAC run?',
    back: '<strong>kube-apiserver</strong>. Authentication, authorization, admission control, validation and audit logging all happen inside it, so every other component (scheduler, controller manager, kubelets, operators) must go through it. Any other process with direct etcd access skips all of those controls, which is why etcd credentials are treated as cluster-admin equivalents.',
    tags: ['etcd', 'API server', 'Architecture']
  },
  {
    id: 'cncf-kcsa-fc-157',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What does taking an etcd snapshot require, and how should the result be handled?',
    hint: 'Credentials in, crown jewels out.',
    back: '<code>etcdctl snapshot save</code> needs the endpoint plus a client certificate, key and CA (<code>--cert</code>, <code>--key</code>, <code>--cacert</code>) that etcd trusts, so backup jobs hold a highly privileged credential. The snapshot is a complete copy of cluster state, Secrets included, so encrypt it, store it with tightly restricted access, and remember that restoring it rolls back every object, including RBAC changes and credential rotations.',
    tags: ['etcd', 'Backup and restore', 'etcdctl']
  },
  {
    id: 'cncf-kcsa-fc-158',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'How many etcd member failures can a cluster of 3, 4 and 5 members tolerate?',
    hint: 'Quorum is a strict majority.',
    back: 'Quorum is <strong>floor(n/2)+1</strong>, so tolerance is <strong>floor((n-1)/2)</strong>: <strong>3 members tolerate 1</strong>, <strong>4 tolerate 1</strong>, <strong>5 tolerate 2</strong>. An even member count adds cost and a failure point without adding tolerance. Without quorum etcd cannot commit writes, so the Kubernetes API stops accepting changes, making etcd sizing and placement across failure domains an availability control.',
    tags: ['etcd', 'Quorum', 'Availability']
  },
  {
    id: 'cncf-kcsa-fc-159',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Stacked vs external etcd: what is the security and resilience trade-off?',
    hint: 'Shared hosts versus extra hosts.',
    back: '<strong>Stacked</strong>: an etcd member runs on each control plane node. Fewer machines and simpler setup, but a compromise or failure of a control plane host also takes its etcd member and data. <strong>External</strong>: etcd runs on dedicated hosts reached only by the API servers, isolating the data from control plane processes and separating failure domains, at the cost of more machines and more certificates to manage.',
    tags: ['etcd', 'Topology', 'High availability']
  },
  {
    id: 'cncf-kcsa-fc-160',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What happens when etcd exceeds its backend space quota, and why does it matter for security?',
    hint: 'An alarm with a name, and a cluster that can no longer change.',
    back: 'etcd has a storage quota (<code>--quota-backend-bytes</code>, default about <strong>2 GiB</strong>). When it is exceeded, etcd raises a <strong>NOSPACE</strong> alarm and only accepts reads and deletes, so the Kubernetes API can no longer create or update objects. Flooding the cluster with large objects or many revisions is therefore a denial-of-service path; limit who can create objects, use ResourceQuota object counts, and keep compaction and defragmentation running.',
    tags: ['etcd', 'Denial of service', 'Quotas']
  },
  {
    id: 'cncf-kcsa-fc-161',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'How can etcd metrics and health be monitored without handing out an etcd client certificate?',
    hint: 'A second listener just for observability.',
    back: 'Use <code>--listen-metrics-urls</code> to serve <code>/metrics</code> and <code>/health</code> on a separate listener; kubeadm binds it to <strong>http://127.0.0.1:2381</strong>. Only processes on the node can reach it and it exposes no keys. A client certificate for port 2379 would instead grant full read and write access to the key space, far more than a monitoring agent needs.',
    tags: ['etcd', 'Metrics', 'Least privilege']
  },
  {
    id: 'cncf-kcsa-fc-162',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What permissions and ownership does the CIS benchmark expect on the etcd data directory?',
    hint: 'Only the database\'s own account.',
    back: 'Permissions <strong>700</strong> or more restrictive and ownership <strong>etcd:etcd</strong> on the data directory (commonly <code>/var/lib/etcd</code>). The directory holds the WAL and snapshot files with all cluster state, so any local user who can read it can extract Secrets without touching the API.',
    tags: ['etcd', 'CIS Benchmark', 'File permissions']
  },
  {
    id: 'cncf-kcsa-fc-163',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What does the Kubernetes network model require of every cluster network?',
    hint: 'No NAT, one address per pod.',
    back: 'Every pod gets its <strong>own IP address</strong>; pods can reach all other pods on any node <strong>without NAT</strong>; node agents such as the kubelet can reach all pods on their node; and a pod sees the same IP for itself that others use to reach it. The result is a <strong>flat network</strong>: isolation is not built in and must be added with NetworkPolicy.',
    tags: ['Pod networking', 'Network model']
  },
  {
    id: 'cncf-kcsa-fc-164',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What is CNI, and which component calls the plugin when a pod starts?',
    hint: 'It is a spec plus executables on the node.',
    back: 'The <strong>Container Network Interface</strong> is a specification for plugins that attach a container sandbox to a network: create interfaces, assign IPs (via IPAM) and set up routes. When the kubelet asks for a pod sandbox, the <strong>container runtime</strong> (containerd or CRI-O) reads the config in <code>/etc/cni/net.d</code> and executes the plugin binaries in <code>/opt/cni/bin</code>. Features such as NetworkPolicy and encryption depend on the plugin chosen.',
    tags: ['CNI', 'Pod networking', 'Container runtime']
  },
  {
    id: 'cncf-kcsa-fc-165',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'When does a pod become isolated for ingress or egress under NetworkPolicy?',
    hint: 'Isolation is per direction and triggered by selection.',
    back: 'A pod is <strong>isolated for ingress</strong> once any policy that selects it lists Ingress in policyTypes, and <strong>isolated for egress</strong> once any selecting policy lists Egress. From then on, only traffic allowed by some policy in that direction passes. Directions are independent: an ingress-only policy leaves the pod\'s egress fully open, and a pod no policy selects is non-isolated in both directions.',
    tags: ['NetworkPolicy', 'Policy semantics']
  },
  {
    id: 'cncf-kcsa-fc-166',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Do NetworkPolicies protect pods that run with hostNetwork: true?',
    hint: 'Their traffic looks like the node\'s traffic.',
    back: 'Not reliably. The documentation says NetworkPolicy behaviour for <strong>hostNetwork pods is undefined</strong>; in the common case plugins cannot tell them apart from the node, so podSelectors ignore them and their traffic is treated as node traffic. A hostNetwork pod can therefore escape namespace default-deny policies, which is one more reason baseline Pod Security forbids hostNetwork for ordinary workloads.',
    tags: ['NetworkPolicy', 'hostNetwork', 'Limitations']
  },
  {
    id: 'cncf-kcsa-fc-167',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What does a namespace-wide default-deny for both directions look like?',
    hint: 'Select everything, allow nothing.',
    back: 'A NetworkPolicy in the namespace with <code>podSelector: {}</code> (all pods), <code>policyTypes: [Ingress, Egress]</code> and <strong>no ingress or egress rules</strong>. Every pod becomes isolated in both directions with nothing allowed. Follow it with narrow allow policies, starting with egress to cluster DNS on port 53, or name resolution breaks for every pod.',
    tags: ['NetworkPolicy', 'Default deny']
  },
  {
    id: 'cncf-kcsa-fc-168',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Which three kinds of peer can a NetworkPolicy rule match?',
    hint: 'Two are label selectors.',
    back: '<strong>podSelector</strong> (pods by label, in the policy\'s namespace unless combined with a namespace selector), <strong>namespaceSelector</strong> (all pods in namespaces with matching labels) and <strong>ipBlock</strong> (CIDR ranges, with optional except entries, intended for traffic outside the cluster). Rules also list <strong>ports</strong> and protocols to narrow what is allowed.',
    tags: ['NetworkPolicy', 'Selectors']
  },
  {
    id: 'cncf-kcsa-fc-169',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'How can a NetworkPolicy select a namespace by name when nobody has labelled it?',
    hint: 'The control plane adds one label automatically.',
    back: 'Every namespace carries the immutable label <strong>kubernetes.io/metadata.name</strong> set to its name, added automatically by the API server. Use it in a namespaceSelector, for example to allow ingress only from the <code>monitoring</code> namespace. Relying on hand-applied labels is weaker, because anyone who can edit a namespace\'s labels could make it match an allow rule.',
    tags: ['NetworkPolicy', 'Namespaces', 'Labels']
  },
  {
    id: 'cncf-kcsa-fc-170',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'If an egress rule allows a pod to call a database, does the database also need an ingress rule for the replies?',
    hint: 'Connections, not packets.',
    back: 'No rule is needed for <strong>reply traffic</strong>: NetworkPolicy is connection-aware, so responses on an allowed connection are implicitly permitted. But the <strong>new connection</strong> must be allowed on both ends: egress from the client if the client is egress-isolated, and ingress to the database if the database is ingress-isolated. A connection passes only when every applicable direction allows it.',
    tags: ['NetworkPolicy', 'Policy semantics', 'Stateful']
  },
  {
    id: 'cncf-kcsa-fc-171',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'How do you allow a contiguous range of ports in a NetworkPolicy rule?',
    hint: 'A companion to the port field.',
    back: 'Set <code>port</code> to the first port and <code>endPort</code> to the last (stable since Kubernetes 1.25), for example 32000 to 32768 over TCP. Both must be numeric, endPort must be at least port, and the plugin must support the field. It avoids writing dozens of single-port entries or, worse, opening every port to make an application work.',
    tags: ['NetworkPolicy', 'Ports']
  },
  {
    id: 'cncf-kcsa-fc-172',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Which common CNI choices enforce NetworkPolicy, and which classic one does not?',
    hint: 'One popular overlay only does connectivity.',
    back: '<strong>Calico</strong>, <strong>Cilium</strong> and <strong>Antrea</strong> enforce NetworkPolicy (and add their own extended policy resources). <strong>Flannel</strong> on its own provides connectivity only, so policies created on a Flannel-only cluster are silently ignored; it is often paired with Calico (the Canal combination) to add enforcement. Always test that a deny actually denies.',
    tags: ['CNI', 'NetworkPolicy']
  },
  {
    id: 'cncf-kcsa-fc-173',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'CNI node-to-node encryption vs service mesh mTLS: what does each give you?',
    hint: 'Node keys versus workload identities.',
    back: '<strong>CNI encryption</strong> (WireGuard or IPsec in Calico or Cilium) encrypts traffic between nodes with node-level keys: transparent to every pod, but it does not authenticate which workload is talking and leaves same-node traffic as is. <strong>Service mesh mTLS</strong> gives each workload a certificate-based identity, encrypts per connection end to end, and enables identity-based authorization, at the cost of proxies and certificate management.',
    tags: ['Encryption in transit', 'Service mesh', 'CNI']
  },
  {
    id: 'cncf-kcsa-fc-174',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Which protocols can a NetworkPolicy port entry match, and what is the default?',
    hint: 'Three transport protocols.',
    back: '<strong>TCP</strong>, <strong>UDP</strong> and <strong>SCTP</strong>; when protocol is omitted it defaults to <strong>TCP</strong>. Other protocols such as ICMP are not part of the standard API, and their handling is up to the plugin. Remember that DNS needs both UDP and TCP on port 53.',
    tags: ['NetworkPolicy', 'Protocols']
  },
  {
    id: 'cncf-kcsa-fc-175',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Can NetworkPolicy reliably stop pods from reaching services on their own node, such as the kubelet API?',
    hint: 'Traffic to the host is a grey area in the spec.',
    back: 'Not reliably. How policies treat traffic between a pod and its <strong>own node</strong> is implementation-defined, and many plugins always allow it so health checks work. Protect node services such as the kubelet on 10250 with their own authentication and authorization (anonymous access off, webhook authorization) and with host firewall rules, treating NetworkPolicy as an extra layer rather than the only one.',
    tags: ['NetworkPolicy', 'Node security', 'kubelet']
  }
];

export default CNCF_KCSA_FLASHCARDS_7;
