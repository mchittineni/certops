export const CNCF_KCSA_FLASHCARDS_1 = [
  {
    id: 'cncf-kcsa-fc-1',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'What are the 4Cs of cloud native security, and what does their nesting imply?',
    hint: 'Think of concentric rings, outermost first.',
    back: '<strong>Cloud</strong> (or corporate datacenter) contains the <strong>Cluster</strong>, which contains the <strong>Container</strong>, which contains the <strong>Code</strong>. Each layer builds on the security of the layer around it, so strong controls in an inner layer cannot compensate for a weak outer layer: hardening application code does not help if the cloud account or etcd is exposed.',
    tags: ['4C model', 'Defense in depth']
  },
  {
    id: 'cncf-kcsa-fc-2',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Which controls belong to the Container layer of the 4C model?',
    hint: 'Image contents, image trust, process identity, isolation strength.',
    back: '<ul><li><strong>Vulnerability scanning</strong> of the image and its OS dependencies</li><li><strong>Image signing and enforcement</strong> so only trusted images run</li><li><strong>Disallowing privileged users</strong>: build images that run as a non-root user</li><li><strong>Stronger isolation runtimes</strong> (sandboxed runtimes via RuntimeClass) where workloads need it</li></ul>',
    tags: ['4C model', 'Container layer']
  },
  {
    id: 'cncf-kcsa-fc-3',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Which practices make up the Code layer of the 4C model?',
    hint: 'Five items, from transport to testing.',
    back: 'Serve and consume <strong>only over TLS</strong>; <strong>limit the port ranges</strong> the application listens and talks on; manage <strong>third-party dependency security</strong> (scan the libraries you import); run <strong>static code analysis</strong>; and run <strong>dynamic probing</strong> (DAST) against the running service. Application code is the primary attack surface you control most directly.',
    tags: ['4C model', 'Code layer']
  },
  {
    id: 'cncf-kcsa-fc-4',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'The Cluster layer has two halves. What are they?',
    hint: 'The machinery, and what runs on it.',
    back: '<strong>1. Securing the configurable cluster components</strong>: API server, etcd, kubelet, controller manager, scheduler (TLS, authentication, authorization, flags). <strong>2. Securing the applications in the cluster</strong>: RBAC for workload identities, Secrets management, Pod Security admission, resource quotas, NetworkPolicies and TLS for Ingress. A CIS pass on component flags covers only the first half.',
    tags: ['4C model', 'Cluster layer']
  },
  {
    id: 'cncf-kcsa-fc-5',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'List the five classic infrastructure (Cloud layer) concerns for a Kubernetes cluster.',
    hint: 'Two network paths, one cloud permission, two about the datastore.',
    back: '<ul><li><strong>Network access to the API server</strong>: not open to the internet; allow-list trusted ranges</li><li><strong>Network access to nodes</strong>: only from the control plane and for exposed Services</li><li><strong>Kubernetes access to the cloud provider API</strong>: least privilege</li><li><strong>Access to etcd</strong>: control plane only, over mutual TLS</li><li><strong>etcd encryption</strong>: encrypt storage at rest</li></ul>',
    tags: ['Cloud layer', 'Infrastructure security']
  },
  {
    id: 'cncf-kcsa-fc-6',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'How does the CNCF lifecycle view (Develop, Distribute, Deploy, Runtime) differ from the 4C view?',
    hint: 'One slices by time, the other by layer.',
    back: 'The <strong>4Cs</strong> slice security by <strong>layer</strong> (where a control sits). The <strong>lifecycle phases</strong> slice it by <strong>time</strong>: <strong>Develop</strong> (secure design, code review, dependency hygiene), <strong>Distribute</strong> (supply chain, image signing, scanning), <strong>Deploy</strong> (what may run, who may deploy it, and where) and <strong>Runtime</strong> (access, compute and storage protection). Current Kubernetes documentation uses the lifecycle framing; the two are complementary, not competing.',
    tags: ['Lifecycle phases', '4C model']
  },
  {
    id: 'cncf-kcsa-fc-7',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'On a managed Kubernetes service, who secures the control plane and who secures the workloads?',
    hint: 'The provider runs the brain; you run what is scheduled.',
    back: 'The <strong>provider</strong> operates and patches the API server, etcd, controller manager and scheduler, and sets their flags. The <strong>customer</strong> keeps RBAC bindings, NetworkPolicies, Pod Security, workload configuration, images, application code and, unless nodes are provider-managed, node configuration and patching. Cloud IAM for the customer\'s own people is always the customer\'s job.',
    tags: ['Shared responsibility', 'Managed Kubernetes']
  },
  {
    id: 'cncf-kcsa-fc-8',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Why is write access to etcd treated as equivalent to root on the whole cluster?',
    hint: 'What sits behind the API server\'s checks?',
    back: 'etcd stores every Kubernetes object. A client talking to etcd directly <strong>bypasses authentication, RBAC, admission control and audit logging</strong> in the API server, so it can create a privileged pod, bind itself to cluster-admin or read every Secret. That is why etcd must be reachable only from the control plane and must require client certificates.',
    tags: ['etcd', 'Cloud layer']
  },
  {
    id: 'cncf-kcsa-fc-9',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'etcd ports 2379 and 2380: what uses each, and who should reach them?',
    hint: 'Clients vs members.',
    back: '<strong>2379</strong> is the <strong>client</strong> port, used by the API server. <strong>2380</strong> is the <strong>peer</strong> port, used by etcd members to replicate with each other. Both should be firewalled so that only control plane hosts (and etcd members for 2380) can connect, and both should use TLS with client certificate authentication (<code>--client-cert-auth</code>, <code>--peer-client-cert-auth</code>).',
    tags: ['etcd', 'Network access']
  },
  {
    id: 'cncf-kcsa-fc-10',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Why is the cloud instance metadata endpoint a risk for pods, and how is it mitigated?',
    hint: '169.254.169.254 answers anyone on the node.',
    back: 'The metadata service returns the <strong>node\'s cloud role credentials</strong> to any process that can reach it, including pods, so a compromised pod inherits the node\'s cloud permissions. Mitigations: <strong>block pod egress</strong> to the metadata address (NetworkPolicy or provider feature), require token-based metadata with a <strong>hop limit</strong>, and give pods that need cloud access their own <strong>workload identity</strong> instead of the node role.',
    tags: ['Instance metadata', 'Cloud layer']
  },
  {
    id: 'cncf-kcsa-fc-11',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'How does workload identity (IRSA, EKS Pod Identity, GKE or Azure Workload Identity) give a pod cloud credentials?',
    hint: 'A Kubernetes token traded for a cloud token.',
    back: 'The pod receives a <strong>projected service account token</strong> issued by the cluster. The cloud provider trusts the cluster\'s issuer (OIDC federation or an agent) and <strong>exchanges that token for short-lived cloud credentials</strong> scoped to a role mapped to that one service account. Result: per-workload least privilege, no static keys, and no reliance on the shared node role.',
    tags: ['Workload identity', 'Cloud IAM']
  },
  {
    id: 'cncf-kcsa-fc-12',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'How does KMS v2 envelope encryption protect Secrets, and why is it stronger than aescbc?',
    hint: 'Where does the key that protects the keys live?',
    back: 'The API server encrypts each resource with a <strong>data encryption key (DEK)</strong>; the DEK is encrypted by a <strong>key encryption key (KEK)</strong> that stays inside an <strong>external KMS</strong> and is reached through a KMS plugin. With aescbc, aesgcm or secretbox the key sits in the EncryptionConfiguration file on the control plane disk, so anyone who copies that disk plus an etcd snapshot can decrypt. KMS v2 is GA since Kubernetes 1.29; KMS v1 is deprecated.',
    tags: ['Encryption at rest', 'KMS']
  },
  {
    id: 'cncf-kcsa-fc-13',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'In an EncryptionConfiguration, which provider is used to write data, and what does identity do?',
    hint: 'Order matters.',
    back: 'The <strong>first provider in the list encrypts new writes</strong>; all listed providers are tried in order when reading. <code>identity</code> means <strong>no encryption</strong>: if it is first, Secrets are stored in plaintext. It is listed last during migration so existing unencrypted data can still be read.',
    tags: ['Encryption at rest', 'EncryptionConfiguration']
  },
  {
    id: 'cncf-kcsa-fc-14',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'You just enabled encryption at rest. Are Secrets that already existed now encrypted?',
    hint: 'Encryption happens on write.',
    back: '<strong>No.</strong> Data is encrypted only when it is written. Rewrite existing Secrets so the API server re-stores them with the new provider, for example <code>kubectl get secrets --all-namespaces -o json | kubectl replace -f -</code>. The same rewrite is needed after rotating to a new key.',
    tags: ['Encryption at rest', 'Key rotation']
  },
  {
    id: 'cncf-kcsa-fc-15',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'What are the usual ways to limit network access to a managed cluster\'s API server endpoint?',
    hint: 'Allow-list, or no public address at all.',
    back: 'Keep a public endpoint but restrict it to <strong>authorised network ranges</strong> (for example VPN and CI egress addresses), or use a <strong>private endpoint</strong> reachable only from inside the VPC or over peering/VPN. NetworkPolicy does not apply, because the API server endpoint is not a pod in your cluster.',
    tags: ['API server', 'Network access']
  },
  {
    id: 'cncf-kcsa-fc-16',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'How do you give operators shell access to nodes without exposing SSH to the network?',
    hint: 'Let the cloud broker the session.',
    back: 'Use a provider-brokered session service such as <strong>AWS Systems Manager Session Manager</strong>, <strong>Google Cloud IAP TCP forwarding</strong> or <strong>Azure Bastion</strong>, or a hardened bastion host in a management subnet. Sessions are authorised by cloud IAM and logged centrally, nodes need no inbound SSH rule and no public IP, and <code>kubectl debug node/...</code> covers many troubleshooting needs without SSH at all.',
    tags: ['Node security', 'Access management']
  },
  {
    id: 'cncf-kcsa-fc-17',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Cloud provider audit logs vs Kubernetes audit logs: which question does each answer?',
    hint: 'Two different APIs.',
    back: '<strong>Cloud audit logs</strong> (CloudTrail, Cloud Audit Logs, Azure Activity Log) record calls to the <strong>provider API</strong>: firewall changes, IAM grants, node pool or cluster creation, disk snapshots. <strong>Kubernetes audit logs</strong> record requests to the <strong>Kubernetes API server</strong>: who created a pod, read a Secret or changed a RoleBinding. Investigating a cluster incident usually needs both, correlated by time and identity.',
    tags: ['Audit logging', 'Cloud layer']
  },
  {
    id: 'cncf-kcsa-fc-18',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'What makes a container-optimised node OS a security improvement? Name examples.',
    hint: 'Less software, fewer ways to change it.',
    back: 'Examples: <strong>Bottlerocket</strong>, <strong>Flatcar Container Linux</strong>, <strong>Google Container-Optimized OS</strong>, <strong>Talos</strong>. They ship only what is needed to run containers, often mount the root filesystem <strong>read-only</strong>, update atomically and omit package managers, which cuts the host attack surface and makes persistence after a compromise harder.',
    tags: ['Node hardening', 'Cloud layer']
  },
  {
    id: 'cncf-kcsa-fc-19',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Why separate production and non-production into different cloud accounts or projects?',
    hint: 'IAM stops at the account boundary.',
    back: 'A separate account, subscription or project is a <strong>hard IAM and billing boundary</strong>: broad permissions granted for experimentation in development simply do not apply to production resources, quotas and networks are isolated, and a compromised development credential has a <strong>limited blast radius</strong>. Namespaces inside one cluster, or tags inside one account, do not provide that boundary.',
    tags: ['Blast radius', 'Account separation']
  },
  {
    id: 'cncf-kcsa-fc-20',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'How does AWS IMDSv2 with a hop limit of 1 keep pods away from node credentials?',
    hint: 'Count the network hops from inside a pod.',
    back: 'IMDSv2 requires a session token obtained with a <strong>PUT</strong> request; the response is sent with an IP <strong>TTL equal to the hop limit</strong>. With a hop limit of <strong>1</strong>, the reply cannot cross the extra hop from the node into a pod\'s network namespace, so pods cannot get a token (pods using <code>hostNetwork</code> still can). EKS recommends this, together with IRSA or EKS Pod Identity for pods that do need AWS access.',
    tags: ['Instance metadata', 'AWS']
  },
  {
    id: 'cncf-kcsa-fc-21',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'What is the default NodePort range, and why does it matter for firewall design?',
    hint: 'Five digits, starting with 3.',
    back: 'The default range is <strong>30000-32767</strong> (set by <code>--service-node-port-range</code>). A NodePort Service opens its port on <strong>every node</strong>, so opening the whole range at the infrastructure firewall exposes every NodePort Service in the cluster. Allow only the specific ports that must be reachable, ideally only from a load balancer.',
    tags: ['NodePort', 'Network exposure']
  },
  {
    id: 'cncf-kcsa-fc-22',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Disk encryption vs API server encryption at rest: which threat does each stop?',
    hint: 'Stolen media vs stolen data.',
    back: '<strong>Disk or volume encryption</strong> protects against stolen or improperly disposed storage media; once the volume is mounted, etcd reads plaintext. <strong>API server encryption at rest</strong> encrypts Secret values before they reach etcd, so they stay protected in <strong>etcd snapshots, backups and direct etcd reads</strong>. Use both.',
    tags: ['Encryption at rest', 'Cloud layer']
  },
  {
    id: 'cncf-kcsa-fc-23',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Where does infrastructure-as-code scanning fit, and what does it catch?',
    hint: 'Before anything is provisioned.',
    back: 'Tools such as <strong>Checkov</strong>, <strong>tfsec/Trivy config</strong>, <strong>KICS</strong> or OPA/Conftest policies run in the <strong>pull request or plan stage</strong> against Terraform, CloudFormation, Helm or manifests. They catch misconfigurations such as world-open firewall rules, public buckets, unencrypted volumes or public API endpoints <strong>before</strong> they exist, which is cheaper than detecting them in production.',
    tags: ['Infrastructure as code', 'Shift left']
  },
  {
    id: 'cncf-kcsa-fc-24',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'On managed clusters, how can cloud IAM grant Kubernetes permissions that RBAC does not show?',
    hint: 'Look outside the cluster.',
    back: '<strong>GKE</strong> authorizes a request if <strong>either</strong> Google Cloud IAM <strong>or</strong> RBAC allows it, so a project-level role like Kubernetes Engine Admin grants access to every cluster in the project. <strong>EKS</strong> maps IAM principals to Kubernetes identities through <strong>access entries</strong> (or the legacy aws-auth ConfigMap), and the cluster creator may hold admin rights. Reviews of who can do what must therefore include cloud IAM, not only RoleBindings.',
    tags: ['Cloud IAM', 'RBAC', 'Managed Kubernetes']
  },
  {
    id: 'cncf-kcsa-fc-25',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'What does defense in depth mean in a Kubernetes context?',
    hint: 'No single control is trusted to hold.',
    back: 'Layer <strong>independent controls</strong> so that the failure of one does not expose the system: for example, network restrictions around the API server, strong authentication, least-privilege RBAC, admission policies, Pod Security, NetworkPolicies, runtime detection and encryption. Each control addresses a different threat, so an attacker who bypasses one still meets the next.',
    tags: ['Defense in depth']
  }
];

export default CNCF_KCSA_FLASHCARDS_1;
