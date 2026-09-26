export const CNCF_KCSA_QUESTIONS_7 = [
  {
    id: "cncf-kcsa-151",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Why a database write outranks every RoleBinding",
    scenario: "An insurer's threat model lists an attacker who obtains a client certificate that etcd accepts, but no Kubernetes credentials at all. A reviewer argues this is only a moderate risk because the attacker would still have to get past RBAC, admission control and audit logging to change anything in the cluster.",
    question: "Why is the reviewer's assessment wrong?",
    options: [
      { id: 'A', text: "etcd forwards each write back through the API server's admission and audit chain but skips RBAC, so the attacker can grant itself any role." },
      { id: 'B', text: "etcd holds the cluster CA's private key, so the attacker can mint an admin certificate and then pass RBAC as cluster-admin." },
      { id: 'C', text: "etcd write access lets the attacker replace the kube-apiserver binary on the control plane, disabling authorization on restart." },
      { id: 'D', text: "Direct etcd access bypasses the API server entirely, so RBAC, admission and audit never see the reads and writes the attacker makes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "RBAC, admission controllers and audit logging are all implemented inside kube-apiserver. etcd is only a key-value store, so a client talking to it directly can read every Secret and write any object, such as a new ClusterRoleBinding or a privileged pod spec, and none of those controls run or record anything. That makes etcd access equivalent to full cluster control. etcd does not call back into the API server's admission chain. The cluster CA key lives on the control plane filesystem, not in etcd. etcd stores API objects, not the binaries that run the control plane.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/",
    tags: ["etcd", "Threat model", "API server"]
  },
  {
    id: "cncf-kcsa-152",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Making etcd demand a certificate from every client",
    scenario: "A hardening review of a self-managed etcd cluster finds that it serves clients over HTTPS but accepts any TLS client, so anyone who can reach port 2379 can read and write keys. The cluster already has an etcd CA that signed the API server's etcd client certificate.",
    question: "Which etcd configuration change closes this gap?",
    options: [
      { id: 'A', text: "Set --auto-tls=true so etcd generates fresh certificates at startup and rejects clients that present older ones." },
      { id: 'B', text: "Set --peer-client-cert-auth=true with --peer-trusted-ca-file pointing at the etcd CA to verify connecting clients." },
      { id: 'C', text: "Set --client-cert-auth=true with --trusted-ca-file pointing at the etcd CA so only clients holding its certificates connect." },
      { id: 'D', text: "Set --cert-file and --key-file to a new server certificate so clients must trust it before they are allowed in." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "--client-cert-auth tells etcd to require and verify a client certificate on the client port, and --trusted-ca-file names the CA whose signatures it accepts, so only holders of certificates from the etcd CA, such as the API server, can connect. The peer flags secure member-to-member traffic on port 2380, not client access. --auto-tls creates self-signed certificates for encryption without authenticating anyone, and the CIS benchmark requires it to be off. --cert-file and --key-file set the server's own certificate, which proves etcd's identity to clients but does not verify theirs.",
    referenceUrl: "https://etcd.io/docs/v3.5/op-guide/security/",
    tags: ["etcd", "mTLS", "Client authentication"]
  },
  {
    id: "cncf-kcsa-153",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Sizing up what a stolen etcd snapshot contains",
    scenario: "An attacker exfiltrated a recent etcd snapshot from a misconfigured backup bucket belonging to a kubeadm cluster that has no encryption at rest configured. The attacker has no access to the control plane hosts themselves. The incident lead must decide which credentials to rotate first.",
    question: "What does the snapshot actually give the attacker?",
    options: [
      { id: 'A', text: "The service account signing key, which lets the attacker forge fresh tokens for any service account in any namespace." },
      { id: 'B', text: "Every Secret value, such as legacy service account tokens, bootstrap tokens and TLS keys, usable if they are still valid." },
      { id: 'C', text: "Nothing readable, because etcd seals every value in a snapshot with the member's peer TLS key before writing the file." },
      { id: 'D', text: "The cluster CA private key, which lets the attacker mint client certificates for any user or group, including system:masters." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A snapshot is a full copy of the keyspace, and without encryption at rest every Secret is stored as plain serialized data: legacy service account token Secrets, bootstrap tokens, TLS private keys held in Secrets and application credentials, all usable against the API or other systems until rotated. The cluster CA key and the service account signing key are files under /etc/kubernetes/pki on the control plane hosts, not API objects, so they are not in the snapshot; that is why those rotations can come after revoking the Secrets. etcd does not encrypt snapshot contents with its TLS keys, which only protect traffic in transit.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#backing-up-an-etcd-cluster",
    tags: ["etcd", "Backup and restore", "Secrets", "Incident response"]
  },
  {
    id: "cncf-kcsa-154",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Replicating etcd between availability zones",
    scenario: "A retail company runs a three-member etcd cluster with one member per availability zone, and replication traffic crosses a shared inter-zone network. Client traffic from the API server already uses mutual TLS, but members currently talk to each other over plain HTTP on port 2380.",
    question: "What should the team configure to protect replication traffic?",
    options: [
      { id: 'A', text: "Configure --listen-peer-urls with an http scheme bound to each zone's private address so traffic stays on local links." },
      { id: 'B', text: "Configure --peer-cert-file, --peer-key-file and --peer-client-cert-auth with a peer CA so members verify one another." },
      { id: 'C', text: "Configure API server encryption at rest with the aescbc provider so the values replicated between members are ciphertext." },
      { id: 'D', text: "Configure --client-cert-auth with --trusted-ca-file on each member so replication on port 2380 requires client certificates." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Member-to-member traffic is secured with the peer TLS flags: --peer-cert-file and --peer-key-file give each member a certificate, and --peer-client-cert-auth with --peer-trusted-ca-file makes members verify each other, so replication is encrypted and a rogue host cannot join as a peer. The client flags only affect port 2379. Encryption at rest covers Secret values but leaves every other object, and all Raft metadata, in clear on the wire. Binding peer URLs to private addresses over http still sends replication unencrypted across the shared inter-zone network.",
    referenceUrl: "https://etcd.io/docs/v3.5/op-guide/security/",
    tags: ["etcd", "Peer TLS", "Replication"]
  },
  {
    id: "cncf-kcsa-155",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Self-generated certificates on etcd peers",
    scenario: "To speed up a lab-to-production migration, an engineer started each etcd member with --peer-auto-tls=true, reasoning that peer traffic is now encrypted so the CIS benchmark item on peer TLS is satisfied. The auditor disagrees and flags the configuration as failing.",
    question: "Why does the auditor fail the configuration?",
    options: [
      { id: 'A', text: "Auto TLS creates self-signed certificates, so the channel is private but members cannot verify who they are talking to." },
      { id: 'B', text: "Auto TLS uses a weak cipher suite that the CIS benchmark prohibits, although the certificates it creates are properly trusted." },
      { id: 'C', text: "Auto TLS stores its generated keys inside the etcd keyspace, where any client with read access can retrieve them." },
      { id: 'D', text: "Auto TLS applies only to client traffic, so peer replication keeps running over plain HTTP despite the flag being set." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "--peer-auto-tls (like --auto-tls for clients) makes etcd generate self-signed certificates, which encrypts the channel but provides no authentication, because there is no CA both sides trust; a malicious host can present its own self-signed certificate and be accepted as a peer. CIS therefore requires peer-auto-tls and auto-tls to be off and real CA-signed certificates with peer client authentication to be used. The problem is identity, not cipher strength. The peer variant does apply to peer traffic. Generated keys are written to the member's data directory on disk, not into the keyspace clients read.",
    referenceUrl: "https://etcd.io/docs/v3.5/op-guide/configuration/",
    tags: ["etcd", "Peer TLS", "CIS Benchmark"]
  },
  {
    id: "cncf-kcsa-156",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "API server failing after etcd starts checking clients",
    scenario: "Shortly after an operator enabled client certificate authentication on etcd, kube-apiserver began logging TLS handshake errors and every kubectl command failed. The etcd CA has already issued a client certificate and key intended for the API server.",
    question: "Which kube-apiserver settings must reference those files?",
    options: [
      { id: 'A', text: "--etcd-certfile and --etcd-keyfile, with --etcd-cafile naming the etcd CA used to verify the etcd server." },
      { id: 'B', text: "--tls-cert-file and --tls-private-key-file, which the API server presents to every client and also to etcd." },
      { id: 'C', text: "--client-ca-file, which the API server uses to prove its identity to etcd when opening storage connections." },
      { id: 'D', text: "--kubelet-client-certificate and --kubelet-client-key, which the API server uses for outbound TLS calls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "kube-apiserver authenticates to etcd with the certificate and key given by --etcd-certfile and --etcd-keyfile, and verifies etcd's serving certificate with --etcd-cafile, alongside https URLs in --etcd-servers. --tls-cert-file and --tls-private-key-file are the API server's own serving certificate for incoming requests. --client-ca-file is the CA used to authenticate clients connecting to the API server, not a credential it presents. The kubelet client flags are used only when the API server calls kubelets for logs, exec and port-forward.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/",
    tags: ["etcd", "API server", "mTLS"]
  },
  {
    id: "cncf-kcsa-157",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Restoring etcd after revoking an intruder's access",
    scenario: "On Monday responders removed a ClusterRoleBinding an intruder had created, deleted a backdoor service account and rotated several Secrets. On Wednesday an unrelated corruption forces the team to restore etcd from Sunday night's snapshot. The incident lead asks what the restore means for the earlier containment work.",
    question: "What should the team expect and do?",
    options: [
      { id: 'A', text: "The restore brings back the rogue binding, identity and old Secret values, so the revocations must be repeated." },
      { id: 'B', text: "The restore fails, because etcd refuses snapshots older than the most recent RBAC change as a safeguard against rollback." },
      { id: 'C', text: "Nothing changes, because the API server replays audit events after a restore and reapplies Monday's deletions automatically." },
      { id: 'D', text: "Only Secrets revert, because RBAC objects are cached in the API server's memory and are not reloaded from the snapshot." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An etcd snapshot is a point-in-time copy of every object, so restoring Sunday's snapshot reinstates the intruder's ClusterRoleBinding and service account and the pre-rotation Secret values. Responders must reapply the revocations, rotate credentials again and check for anything else the attacker created before the snapshot. The API server does not replay audit logs; audit is a record, not a transaction journal. RBAC objects are read from etcd through the API server's watch cache, which is rebuilt from the restored data. etcd has no rule that rejects older snapshots.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#restoring-an-etcd-cluster",
    tags: ["etcd", "Backup and restore", "Incident response"]
  },
  {
    id: "cncf-kcsa-158",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "CIS failure on the etcd data directory",
    scenario: "On a kubeadm control plane node, the CIS benchmark reports that /var/lib/etcd has mode 0755 and is owned by root, while the organisation runs etcd under a dedicated etcd service user on its other clusters. Several operators have shell access to these nodes for troubleshooting.",
    question: "What does the benchmark expect for the data directory?",
    options: [
      { id: 'A', text: "Mode 0700 or stricter with etcd:etcd ownership, so only the etcd service account can read the database files." },
      { id: 'B', text: "Mode 0644 on the member files with root ownership, so the kubelet can check their integrity at every restart." },
      { id: 'C', text: "Mode 0750 with root:etcd ownership, so operators in the etcd group can read the files for their troubleshooting." },
      { id: 'D', text: "Mode 0700 with root:root ownership, moved under /etc/kubernetes/pki so it sits with the other protected material." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The data directory holds the complete database, including every Secret unless encryption at rest is on, so the CIS benchmark asks for permissions of 700 or more restrictive and ownership by the etcd user and group. With 0755 any local user can read snapshot and WAL files. Granting a troubleshooting group read access recreates the same exposure for more people. The kubelet does not check etcd file integrity. The PKI directory is for certificates and keys, and relocating the database there changes nothing about who can read it.",
    referenceUrl: "https://www.cisecurity.org/benchmark/kubernetes",
    tags: ["etcd", "CIS Benchmark", "File permissions"]
  },
  {
    id: "cncf-kcsa-159",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Where to run etcd for a regulated platform",
    scenario: "A payments company is designing a highly available self-managed control plane. Its security architects want an exploit of kube-apiserver or another control plane process not to land an attacker on the same host as the etcd data, and they accept running extra machines to get that.",
    question: "Which topology fits the requirement?",
    options: [
      { id: 'A', text: "External etcd, running members on dedicated hosts that allow connections on 2379 only from the control plane nodes." },
      { id: 'B', text: "External etcd, running members as a DaemonSet on worker nodes so they sit apart from every control plane process." },
      { id: 'C', text: "Stacked etcd, running members as static pods with hostNetwork disabled so they are isolated from the control plane." },
      { id: 'D', text: "Stacked etcd, running an etcd member on each control plane node so that each API server talks only to its local member." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An external etcd topology places members on their own hosts, decoupled from the API server, controller manager and scheduler, so compromising one of those processes does not put the attacker next to the data; firewalling the client port to the control plane nodes keeps the database reachable only by its legitimate client. It costs more machines, which the company accepts. Stacked etcd shares hosts with the control plane by definition, and hostNetwork settings do not change that co-location. Running etcd on workers places the database beside untrusted workloads, the opposite of the goal.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/",
    tags: ["etcd", "Topology", "High availability"]
  },
  {
    id: "cncf-kcsa-160",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Scraping etcd metrics without a client certificate",
    scenario: "A monitoring team wants Prometheus to scrape etcd health and latency metrics, but etcd's client port requires mutual TLS and the team does not want its scraper to hold a certificate that could also read and write keys. The scraper runs as a host-network agent on the control plane nodes.",
    question: "What is the safest way to expose metrics to it?",
    options: [
      { id: 'A', text: "Turn off --client-cert-auth during scrapes and re-enable it afterwards through a cron job on each control plane node." },
      { id: 'B', text: "Use --listen-metrics-urls to serve metrics on a separate loopback port such as http://127.0.0.1:2381 on each member." },
      { id: 'C', text: "Issue the scraper a client certificate from the etcd CA, since the /metrics path on port 2379 cannot touch any keys." },
      { id: 'D', text: "Use --listen-client-urls to add a second plain HTTP client URL on the node address reserved for the monitoring agent." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "--listen-metrics-urls lets etcd serve /metrics and /health on a separate listener, which kubeadm binds to http://127.0.0.1:2381, so a host-network agent on the node can scrape without holding any etcd client credential and nothing off-host can reach it. A client certificate from the etcd CA authenticates for the whole API, not just /metrics, so it would let the scraper read Secrets. Toggling client authentication opens the database to everyone during the window. A plain HTTP client URL exposes the full key-value API unauthenticated.",
    referenceUrl: "https://etcd.io/docs/v3.5/op-guide/configuration/",
    tags: ["etcd", "Metrics", "Least privilege"]
  },
  {
    id: "cncf-kcsa-161",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "An operator that wants to read etcd directly",
    scenario: "A team building an inventory operator asks for an etcd client certificate so the operator can list every Deployment faster than through the API. The platform security lead refuses and asks them to use the normal Kubernetes client libraries instead.",
    question: "Which principle is the security lead applying?",
    options: [
      { id: 'A', text: "etcd should be reachable only by kubelets, since they must read pod specs even when the API server is offline." },
      { id: 'B', text: "etcd should be reachable only by the scheduler, because it is the one component that reads every pod object." },
      { id: 'C', text: "etcd should be reachable only by the controller manager, which already runs every built-in reconciliation loop." },
      { id: 'D', text: "etcd should be reachable only by the API server, so every access passes authentication, RBAC and audit logs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kube-apiserver is designed to be etcd's only client: every other component, including the controller manager, scheduler, kubelets and custom operators, goes through the API server, where requests are authenticated, authorized with RBAC, checked by admission and recorded in audit logs. Giving the operator an etcd certificate would grant unrestricted access to every object, including Secrets, with none of those controls, and informers with watch caches already make API listing efficient. The controller manager and scheduler talk to the API server, not etcd. Kubelets never read etcd; they get pod specs from the API server or static manifests.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/components/",
    tags: ["etcd", "API server", "Least privilege"]
  },
  {
    id: "cncf-kcsa-162",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Sizing etcd to survive a zone outage",
    scenario: "A logistics firm's availability requirement says the Kubernetes API must keep accepting writes if any one of its availability zones, A, B and C, goes down. It currently runs two etcd members in zone A and two in zone B, reasoning that four members give more redundancy than three.",
    question: "What should the firm change?",
    options: [
      { id: 'A', text: "Add a fifth member in zone A so that zone holds a majority and can keep accepting writes if zone B is lost." },
      { id: 'B', text: "Run one member in each of zones A, B and C so that losing any one zone leaves two voting members for quorum." },
      { id: 'C', text: "Keep four members but enable etcd learner mode on two of them so that either zone alone can accept writes." },
      { id: 'D', text: "Keep four members but put a load balancer in front of them so API servers in both zones reach whichever members remain up." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "etcd needs a majority of members to commit writes. With two members in each of two zones, losing either zone leaves two of four, which is not a majority, so the API stops accepting writes. Three members spread across three zones tolerate the loss of any one zone, and odd sizes give the best fault tolerance per member. Putting three of five in zone A means losing zone A still loses quorum. Learners are non-voting members, so making two members learners shrinks the voting set rather than helping. A load balancer cannot create a quorum that does not exist.",
    referenceUrl: "https://etcd.io/docs/v3.5/faq/",
    tags: ["etcd", "Availability", "Quorum"]
  },
  {
    id: "cncf-kcsa-163",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "What a new cluster allows between namespaces",
    scenario: "A healthcare startup creates separate namespaces for its patient portal and its internal analytics jobs on a new cluster with a policy-capable CNI plugin. No NetworkPolicy objects have been created yet. A compliance officer asks whether an analytics pod can open connections to the portal's database pod.",
    question: "What is the correct answer?",
    options: [
      { id: 'A', text: "No, because the CNI plugin applies a default-deny policy to each namespace as soon as the namespace is created." },
      { id: 'B', text: "Yes, but only through a Service, because pod IPs in other namespaces are not routable without a ClusterIP." },
      { id: 'C', text: "No, because namespaces are network boundaries and cross-namespace traffic is blocked until a policy allows it." },
      { id: 'D', text: "Yes, because with no policies selecting the pods, all pod-to-pod traffic across namespaces is allowed by default." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Kubernetes network model is flat: every pod can reach every other pod's IP across nodes and namespaces, and a pod is non-isolated until some NetworkPolicy selects it. With no policies, the analytics pod can connect straight to the database pod, which is why teams apply default-deny policies per namespace. Namespaces scope names and RBAC, not network traffic. Policy-capable plugins enforce the policies you create; they do not add default-deny on their own. Pod IPs are directly routable within the cluster; Services are a convenience, not a requirement.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "Pod networking", "Namespaces"]
  },
  {
    id: "cncf-kcsa-164",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Encrypting pod traffic between nodes transparently",
    scenario: "A bank's regulator requires all pod-to-pod traffic that leaves a node to be encrypted, including traffic from legacy applications that cannot be changed to use TLS. The platform team does not want to run a sidecar in every pod and already uses a CNI plugin that supports several data paths.",
    question: "Which approach meets the requirement?",
    options: [
      { id: 'A', text: "Enable the CNI plugin's node-to-node encryption, such as WireGuard or IPsec, so packets are protected on the wire." },
      { id: 'B', text: "Enable the plugin's VXLAN overlay so traffic between nodes is wrapped in an encapsulation header and hidden from the underlay." },
      { id: 'C', text: "Apply default-deny NetworkPolicies with explicit allow rules so that only approved pods can exchange traffic at all." },
      { id: 'D', text: "Enable encryption at rest for Secrets so the credentials that applications send between nodes are kept as ciphertext." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Plugins such as Calico and Cilium can encrypt traffic between nodes at the network layer with WireGuard or IPsec, which protects every pod's traffic, including legacy applications, without sidecars or application changes. NetworkPolicy controls who may connect but sends allowed traffic in clear. Encryption at rest protects Secrets stored in etcd, not data in transit between pods. VXLAN encapsulation adds a header for routing but does not encrypt the payload, so anyone on the underlay can still read it.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/addons/",
    tags: ["CNI", "Encryption in transit", "WireGuard"]
  },
  {
    id: "cncf-kcsa-165",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Default-deny egress breaks every hostname lookup",
    scenario: "After applying a default-deny egress policy to its orders namespace, an e-commerce team added a rule allowing TCP 5432 to the database pods. The application now fails at startup because it cannot resolve the database Service name, even though connections by IP succeed.",
    question: "What additional egress rule is needed?",
    options: [
      { id: 'A', text: "Allow TCP 443 to the API server's Service IP, because pods resolve Service names by querying the API server." },
      { id: 'B', text: "Allow ICMP to the node addresses, because the kubelet answers DNS queries for pods on its own node only." },
      { id: 'C', text: "Allow TCP 10250 to every node, because the kubelet proxies name lookups from pods to the upstream resolvers." },
      { id: 'D', text: "Allow UDP and TCP 53 to the cluster DNS pods in kube-system so the app can resolve names before connecting." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pods resolve Service names through the cluster DNS service, usually CoreDNS pods in kube-system, on port 53 over UDP and, for larger responses, TCP. A default-deny egress policy blocks those queries until a rule allows them, which is why IP connections work and names fail. Pods do not query the API server for name resolution. The kubelet writes resolv.conf but does not answer DNS queries, and 10250 is its API port, which workloads should not reach. ICMP has no role in name resolution.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "DNS", "Egress"]
  },
  {
    id: "cncf-kcsa-166",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "A second policy that was meant to block one client",
    scenario: "A namespace has a NetworkPolicy allowing ingress to the reporting pods from all pods labelled team=finance. To stop one misbehaving finance pod labelled app=exporter, an engineer adds a second NetworkPolicy that selects the reporting pods and allows ingress only from pods labelled app=dashboard. The exporter can still connect.",
    question: "Why does the exporter still get through?",
    options: [
      { id: 'A', text: "Policies are additive allow lists, so traffic allowed by any selecting policy passes and the finance rule keeps admitting it." },
      { id: 'B', text: "Ingress policies apply only to traffic entering from outside the namespace, so pods in the same namespace are exempt." },
      { id: 'C', text: "The newer policy is applied only after the reporting pods are restarted, so the finance exporter keeps its existing access." },
      { id: 'D', text: "Policies are evaluated in name order and the first match wins, so the older policy's allow rule is used first." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "NetworkPolicies contain only allow rules. When several policies select a pod, the allowed traffic is the union of all of them, so the first policy still admits every team=finance pod, including the exporter; the standard API cannot express a deny for a specific client. The fix is to narrow the first policy's selector, for example to pods with team=finance and an approved app label. Policies take effect on existing pods without restarts. There is no ordering or first-match evaluation. Ingress rules apply to traffic from pods in the same namespace too.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "Policy semantics"]
  },
  {
    id: "cncf-kcsa-167",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "One dash too many in an ingress rule",
    scenario: "A policy for the ledger pods is meant to allow ingress only from pods labelled role=api that run in namespaces labelled env=prod. The engineer wrote the from section as two list items: one containing a namespaceSelector for env=prod and a second containing a podSelector for role=api. Testing shows every pod in prod namespaces can connect.",
    question: "What is wrong with the rule?",
    options: [
      { id: 'A', text: "A podSelector in a from list matches only pods in the policy's namespace, so the rule needs an ipBlock for the prod pods in the ledger namespace." },
      { id: 'B', text: "Two list items are ANDed, but namespace labels are matched before pod labels, so the role=api condition is never checked." },
      { id: 'C', text: "Two list items are ORed, so any pod in an env=prod namespace or any role=api pod in the ledger namespace is allowed." },
      { id: 'D', text: "A namespaceSelector cannot sit in a from list with a podSelector, so the API server silently dropped the pod selector." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Each element of a from list is a separate peer, and peers are ORed. The first element allows every pod in any env=prod namespace, and the second allows role=api pods in the policy's own namespace. To require both conditions, the namespaceSelector and podSelector must appear in the same element, which ANDs them. The API accepts both selectors together; that combination is exactly the fix. Separate elements are not ANDed. A podSelector on its own does match only the policy's namespace, but combining it with the namespaceSelector in one element solves that without an ipBlock, which is meant for external addresses.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#behavior-of-to-and-from-selectors",
    tags: ["NetworkPolicy", "Selectors", "Policy semantics"]
  },
  {
    id: "cncf-kcsa-168",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Tampering with the node's network plugin files",
    scenario: "A forensic review finds that an attacker who gained root on one worker modified a file under /etc/cni/net.d and replaced a binary in /opt/cni/bin. Pods scheduled to that node afterwards had their traffic mirrored to an external address.",
    question: "What do those locations control, and what hardening does this finding call for?",
    options: [
      { id: 'A', text: "They hold the plugin configuration and binaries the runtime runs for each new pod, so they need root-only write access and integrity monitoring." },
      { id: 'B', text: "They hold the kubelet's pod manifests, so the fix is setting staticPodPath to an empty value so no local manifests load." },
      { id: 'C', text: "They hold CoreDNS's zone files for the node, so the fix is running CoreDNS on control plane nodes where workers cannot edit them." },
      { id: 'D', text: "They hold kube-proxy's rule templates, so the fix is switching kube-proxy to IPVS mode, which no longer reads those paths." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "/etc/cni/net.d holds the CNI network configuration and /opt/cni/bin the plugin executables that the container runtime invokes to wire up every new pod sandbox. Whoever can write there controls pod networking on the node, so the directories should be writable only by root and watched by file-integrity monitoring, and nodes should be rebuilt after compromise. kube-proxy does not read CNI files in any mode. CoreDNS keeps its configuration in a ConfigMap, not on worker disks. Static pod manifests live in the kubelet's staticPodPath, usually /etc/kubernetes/manifests.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/",
    tags: ["CNI", "Node hardening", "File integrity"]
  },
  {
    id: "cncf-kcsa-169",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Allowing reads but not deletes on an internal API",
    scenario: "A media company's catalogue service exposes an HTTP API on port 8080. The recommendations service should be able to call GET endpoints but must be blocked from sending DELETE requests, while both services keep talking over the same port.",
    question: "What can enforce this?",
    options: [
      { id: 'A', text: "A standard NetworkPolicy with an ingress rule on port 8080 that lists HTTP GET as the only allowed protocol for the caller." },
      { id: 'B', text: "A layer 7 policy from a CNI such as Cilium or a service mesh authorization policy that matches the HTTP method." },
      { id: 'C', text: "A Kubernetes Service with sessionAffinity set to ClientIP, which pins each caller to one backend that checks HTTP methods." },
      { id: 'D', text: "A standard NetworkPolicy with an egress rule on the recommendations pods that limits them to port 8080 on the service." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Standard NetworkPolicy works at layers 3 and 4: it can match pods, namespaces, IP blocks, protocols such as TCP, UDP and SCTP, and ports, but it cannot inspect HTTP methods or paths. Distinguishing GET from DELETE on the same port needs a layer 7 control, such as a Cilium network policy with HTTP rules or an Istio AuthorizationPolicy enforced by the mesh proxy. The protocol field of a NetworkPolicy port means the transport protocol, so GET is not a valid value. An egress rule on port 8080 still allows every method. Session affinity is load-balancing behaviour and filters nothing.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#what-you-can-t-do-with-network-policies-at-least-not-yet",
    tags: ["NetworkPolicy", "Layer 7", "Service mesh"]
  },
  {
    id: "cncf-kcsa-170",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Allowing a partner pod by its current IP address",
    scenario: "To let a vendor's collector pod reach an internal metrics endpoint, an engineer writes an ingress rule with ipBlock set to the collector's current pod IP as a /32. The rule works for a day, then the collector is rescheduled and another team's pod briefly receives the old address and can connect.",
    question: "Which approach reflects how ipBlock is intended to be used?",
    options: [
      { id: 'A', text: "Replace the ipBlock with pod and namespace selectors, keeping ipBlock for cluster-external addresses whose IPs are stable." },
      { id: 'B', text: "Keep the ipBlock and add an except entry for the other team's pod CIDR so the recycled address can no longer connect." },
      { id: 'C', text: "Keep the ipBlock and give the collector a static pod IP through its Service, so the address stays with the collector." },
      { id: 'D', text: "Keep the ipBlock but widen it to the node's pod CIDR, so the collector matches wherever it is scheduled on that node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pod IPs are ephemeral and reused, so the Kubernetes documentation says ipBlock should target cluster-external IP ranges, and in-cluster peers should be selected by labels with podSelector and namespaceSelector, which follow the pods wherever they run. Widening to a node's pod CIDR admits every pod on that node. An except entry tries to deny by address and still breaks the next time IPs move. A Service gives a stable virtual IP for clients connecting to the collector; it does not fix the collector's source address, which remains the pod IP.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "ipBlock", "Selectors"]
  },
  {
    id: "cncf-kcsa-171",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Neighbour pods poisoning ARP on a shared bridge",
    scenario: "A penetration test shows that a compromised pod on a node using a bridge-based CNI can craft ARP replies and redirect traffic meant for other pods on the same node. The pod runs as a non-root user but kept the runtime's default Linux capabilities.",
    question: "Which change most directly removes the pod's ability to craft these packets?",
    options: [
      { id: 'A', text: "Drop the NET_RAW capability, which the pod needs to open raw sockets and send forged ARP or ICMP packets." },
      { id: 'B', text: "Set hostNetwork to false explicitly, which moves the pod off the shared bridge onto its own isolated network." },
      { id: 'C', text: "Drop the NET_BIND_SERVICE capability, which the pod needs to send packets on any port numbered below 1024." },
      { id: 'D', text: "Set readOnlyRootFilesystem to true, which prevents the pod from installing packet-crafting tools on its disk." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Crafting ARP replies or other forged packets requires raw or packet sockets, which need CAP_NET_RAW, a capability many runtimes grant by default. Dropping it, or dropping ALL as the restricted Pod Security Standard requires, removes the attack while leaving normal TCP and UDP traffic unaffected. NET_BIND_SERVICE only governs binding to low ports. A read-only root filesystem does not stop an attacker from using writable mounts or tools already present, and raw sockets can be opened by any language runtime. hostNetwork is already false by default and the pod is still on the node's bridge.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Pod networking", "Linux capabilities", "ARP spoofing"]
  },
  {
    id: "cncf-kcsa-172",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Egress allowed only to one SaaS hostname",
    scenario: "A fintech's payment pods must reach api.payments-provider.example over HTTPS and nothing else on the internet. The provider rotates the IP addresses behind that name frequently and publishes no stable range. The team uses a CNI that supports extended policy resources alongside standard NetworkPolicy.",
    question: "Which approach can enforce the requirement?",
    options: [
      { id: 'A', text: "A standard NetworkPolicy egress rule with an ipBlock listing the addresses the name resolves to on the day of deployment." },
      { id: 'B', text: "The CNI's own policy resource with an FQDN-based egress rule, or an egress gateway that allowlists the hostname." },
      { id: 'C', text: "A standard NetworkPolicy egress rule that allows TCP 443 to 0.0.0.0/0, since only the payment pods are selected." },
      { id: 'D', text: "A standard NetworkPolicy egress rule whose namespaceSelector names the provider's domain as a namespace label." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Standard NetworkPolicy cannot match DNS names, only pods, namespaces and IP blocks. Extended policies from plugins such as Cilium or Calico can allow egress by fully qualified domain name by tracking DNS answers, and an egress gateway or proxy can allowlist hostnames, so the rule follows the provider's changing addresses. An ipBlock of today's addresses breaks, or allows a stranger, when the IPs rotate. Allowing 443 to the whole internet does not meet the only-this-hostname requirement. Namespace selectors match Kubernetes namespace labels, not external domains.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#what-you-can-t-do-with-network-policies-at-least-not-yet",
    tags: ["NetworkPolicy", "Egress", "FQDN policy"]
  },
  {
    id: "cncf-kcsa-173",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "A policy that should cover every pod in the namespace",
    scenario: "An engineer at a media company writes a default-deny ingress policy for the billing namespace and wants it to apply to every pod there, including pods created later with labels nobody has chosen yet.",
    question: "What should the policy's podSelector be?",
    options: [
      { id: 'A', text: "A podSelector matching the label app, which every pod in the namespace is expected to carry by convention." },
      { id: 'B', text: "An empty podSelector, written as {}, which selects every pod in the namespace that holds the policy." },
      { id: 'C', text: "A namespaceSelector naming billing in place of the podSelector, which the policy spec accepts at top level." },
      { id: 'D', text: "A podSelector with matchExpressions using the Exists operator on every label currently used in billing." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In a NetworkPolicy spec, an empty podSelector selects all pods in the policy's namespace, including any created later regardless of their labels, which is the standard way to write a namespace-wide default deny. Selecting on an app label misses any pod that lacks it. Enumerating today's labels misses pods with new labels. The top level of a NetworkPolicy spec takes only a podSelector; namespaceSelector appears inside ingress and egress peer lists, and the policy's own namespace comes from its metadata.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#default-deny-all-ingress-traffic",
    tags: ["NetworkPolicy", "Default deny", "Selectors"]
  },
  {
    id: "cncf-kcsa-174",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Protecting one team's pods from another namespace",
    scenario: "The data team wants to prevent pods in the shared tools namespace from reaching its warehouse pods in the data namespace. A tools engineer offers to create a NetworkPolicy in the tools namespace that selects the warehouse pods by their app label and denies ingress.",
    question: "Why will that proposal not work?",
    options: [
      { id: 'A', text: "Policies in the tools namespace need cluster-admin to apply, and the tools engineer holds only namespace edit rights." },
      { id: 'B', text: "Cross-namespace traffic is controlled by the Namespace object's network field, not by NetworkPolicy resources." },
      { id: 'C', text: "A policy's podSelector only matches pods in the policy's own namespace, so it must be created in the data namespace." },
      { id: 'D', text: "NetworkPolicies cannot select pods by label, only by name, so the warehouse pods cannot be targeted this way at all." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "NetworkPolicy is namespaced: its podSelector picks pods only in the namespace where the policy object lives. A policy in tools cannot select the warehouse pods, so the data team should create an ingress policy in the data namespace that allows only approved sources; alternatively the tools namespace could restrict its own pods with an egress policy. Policies do select pods by label. Creating a policy needs only RBAC on networkpolicies in that namespace, not cluster-admin. Namespace objects have no network field.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "Namespaces"]
  },
  {
    id: "cncf-kcsa-175",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Limiting where a compromised pod can send data",
    scenario: "A security team worries that an attacker who compromises a public-facing image resizer could upload stolen data to arbitrary internet hosts. The resizer only needs to reach an internal object storage Service in the storage namespace.",
    question: "Which control addresses the exfiltration risk?",
    options: [
      { id: 'A', text: "An ingress policy on the resizer pods that allows traffic only from the load balancer serving public requests." },
      { id: 'B', text: "An egress policy on the resizer pods that allows traffic only to the storage pods and cluster DNS, denying all else." },
      { id: 'C', text: "An egress policy on the object storage pods that blocks every internet destination for the storage namespace." },
      { id: 'D', text: "An ingress policy on the object storage pods that allows traffic only from pods carrying the resizer's label." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Exfiltration is outbound traffic from the compromised workload, so the control belongs on the resizer's egress: allow only the storage pods and DNS, and every other destination, including the internet, is denied. Ingress rules on the resizer limit who can reach it, not where it can send data. An ingress rule on storage protects storage but does not stop the resizer talking to the internet. Egress rules on storage pods restrict storage, not the compromised resizer.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "Egress", "Exfiltration"]
  }
];

export default CNCF_KCSA_QUESTIONS_7;
