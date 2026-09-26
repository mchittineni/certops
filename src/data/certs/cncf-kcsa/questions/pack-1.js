export const CNCF_KCSA_QUESTIONS_1 = [
  {
    id: "cncf-kcsa-1",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Ordering the four layers for a security onboarding deck",
    scenario: "A platform team is preparing an onboarding deck that explains the layered 4C model of cloud native security to new developers. The slide must list the layers from the outermost, which every other layer depends on, to the innermost, which the developers write themselves.",
    question: "Which ordering belongs on the slide?",
    options: [
      { id: 'A', text: "Cloud, then Cluster, then Container, then Code, with each inner layer relying on the security of the layer around it." },
      { id: 'B', text: "Cloud, then Container, then Cluster, then Code, since containers run directly on cloud instances before a cluster exists." },
      { id: 'C', text: "Cluster, then Cloud, then Container, then Code, with the cluster acting as the trusted base underneath the cloud account." },
      { id: 'D', text: "Code, then Container, then Cluster, then Cloud, because application code is the first thing an external attacker touches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The 4C model nests Code inside Container, Container inside Cluster, and Cluster inside Cloud (or the corporate datacenter), so the outermost layer is Cloud and the innermost is Code; each layer can only be as secure as the layers that enclose it. Putting Cluster outside Cloud inverts the dependency, because the cluster's nodes and control plane run on the cloud infrastructure. Listing Code first confuses the direction an attacker may probe with the trust dependency the model describes. Placing Container outside Cluster ignores that in Kubernetes the containers are scheduled and run by the cluster's nodes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/cloud-native-security/",
    tags: ["4C model", "Defense in depth"]
  },
  {
    id: "cncf-kcsa-2",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Placing OS package scanning and non-root rules",
    scenario: "A payments company adds two controls to its pipeline: every build is scanned for CVEs in the operating system packages of the base image, and any image whose default user is root is rejected. The security architect is mapping new controls onto the 4C model for the audit binder.",
    question: "Which layer do these two controls belong to?",
    options: [
      { id: 'A', text: "The Cluster layer, because images are eventually admitted by the API server before any pod can start on a node." },
      { id: 'B', text: "The Container layer, which covers what is inside the image and the privileges the containerised process runs with." },
      { id: 'C', text: "The Cloud layer, because the image is stored in a registry service that the cloud provider operates for the company." },
      { id: 'D', text: "The Code layer, because the scans run in the same CI pipeline that compiles and unit-tests the application source." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Container vulnerability scanning of OS dependencies and disallowing privileged users inside images are the classic Container-layer controls: they concern the image contents and the identity the container process runs as. The Code layer covers the application's own source and its third-party libraries, not the base image's OS packages, even if the same pipeline runs both scans. The Cluster layer covers securing the cluster components and the Kubernetes resources that run workloads, such as RBAC and NetworkPolicy; admission is where a rule could be enforced, but the property being checked is a container property. Hosting the registry on a cloud service does not move image contents into the Cloud layer.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/cloud-native-security/",
    tags: ["4C model", "Container layer", "Image scanning"]
  },
  {
    id: "cncf-kcsa-3",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Where a small SaaS team has the most leverage",
    scenario: "A four-person startup runs its product on a fully managed Kubernetes service with provider-managed nodes and uses vendor-maintained base images. The CTO wants to focus the team's limited security time on the layer that is both a primary attack surface and the one they control most directly.",
    question: "Which layer should the team prioritise?",
    options: [
      { id: 'A', text: "The Cluster layer, by tuning control plane flags on the API server and etcd that the provider runs for them." },
      { id: 'B', text: "The Container layer, by rebuilding the vendor's base images from source so that every package is compiled in-house." },
      { id: 'C', text: "The Cloud layer, by writing hypervisor hardening baselines for the regions of the fully managed service they use." },
      { id: 'D', text: "The Code layer, by securing their own application logic, dependencies and endpoints, which they fully own and change daily." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Application code is one of the primary attack surfaces and the one the team has the most control over; on a fully managed platform, the provider owns most of the Cloud and Cluster concerns, so input validation, dependency hygiene and endpoint security are where the team's effort changes risk the most. Hypervisor hardening is the provider's responsibility and is not something a customer can apply. Control plane flags on a managed service are set by the provider and are usually not exposed to customers. Rebuilding every base image from source is a large effort that duplicates work the image vendor already does and still leaves the application itself unaddressed.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/cloud-native-security/",
    tags: ["4C model", "Code layer", "Shared responsibility"]
  },
  {
    id: "cncf-kcsa-4",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "What the Cloud layer means in a private datacenter",
    scenario: "A hospital group runs Kubernetes on bare-metal servers in its own colocation cage and uses no public cloud at all. During a risk workshop, a clinician on the governance board asks whether the outermost layer of the 4C model is therefore irrelevant to them.",
    question: "How should the security lead answer?",
    options: [
      { id: 'A', text: "It collapses into the Cluster layer, because on bare metal the kubelet is the lowest component the team can secure." },
      { id: 'B', text: "It does not apply: that layer exists only when a hyperscaler, not your own servers, provides the virtual machines." },
      { id: 'C', text: "It applies only to the backup copies of etcd, because those are the only data that ever leaves the hospital's cage." },
      { id: 'D', text: "It still applies: that layer is the physical servers, network, power and access to the cage that the cluster sits on top of." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The outermost layer is the trusted computing base the cluster runs on, whether that is a public cloud, a co-located datacenter or a corporate server room; physical access, network segmentation, firmware and host provisioning are exactly those concerns on bare metal. Saying the layer vanishes without a hyperscaler would leave the physical and network foundations unprotected, and every inner layer depends on them. Limiting it to off-site backups ignores the servers and network inside the cage. The kubelet runs on an operating system on physical hardware, so the Cluster layer still depends on the infrastructure beneath it.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/cloud-native-security/",
    tags: ["4C model", "Cloud layer", "On-premises"]
  },
  {
    id: "cncf-kcsa-5",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Mapping a two-step breach onto the layers",
    scenario: "A post-incident review at a retailer finds that attackers exploited a vulnerable version of a Java logging library bundled with the checkout service, then read the pod's service account token, which was bound to a ClusterRole allowing list and get on Secrets in every namespace. The review template asks which 4C layer each failure belongs to.",
    question: "Which mapping is accurate?",
    options: [
      { id: 'A', text: "The vulnerable library is a Code-layer failure and the over-broad token binding is a Container-layer failure." },
      { id: 'B', text: "The vulnerable library is a Container-layer failure and the over-broad token binding is a Cluster-layer failure." },
      { id: 'C', text: "The vulnerable library is a Container-layer failure and the over-broad token binding is a Cloud-layer failure." },
      { id: 'D', text: "The vulnerable library is a Code-layer failure and the over-broad token binding is a Cluster-layer failure." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Third-party dependencies that the application itself imports, such as a Java logging library, are Code-layer concerns, while OS packages in the base image are the Container-layer concern; and RBAC bindings for workload service accounts are part of securing applications at the Cluster layer. Calling the library a Container failure conflates application dependencies with the image's OS packages, which is the distinction the model draws. Treating the RoleBinding as a Container failure misplaces a Kubernetes authorization object that exists independently of any image. Pinning the binding on the Cloud layer confuses Kubernetes RBAC with the cloud provider's IAM.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/cloud-native-security/",
    tags: ["4C model", "Dependencies", "RBAC"]
  },
  {
    id: "cncf-kcsa-6",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Closing the gap after a control plane CIS pass",
    scenario: "An insurer's platform team has hardened every control plane flag to pass a CIS benchmark scan and considers the Cluster layer complete. An external assessor disagrees, noting that the layer also covers how the applications running in the cluster are secured.",
    question: "Which set of work items would close the assessor's Cluster-layer finding?",
    options: [
      { id: 'A', text: "Switch to minimal distroless base images and sign every image in the registry so that tampering can be detected." },
      { id: 'B', text: "Add static analysis and secret scanning to the application repositories and fail merges on high-severity findings." },
      { id: 'C', text: "Encrypt the worker node disks with provider keys and tighten the VPC firewall around the node subnets used by the cluster." },
      { id: 'D', text: "Scope RBAC for workload service accounts, manage Secrets properly and apply NetworkPolicies and Pod Security admission." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Cluster layer has two halves: securing the configurable cluster components, which the CIS work addressed, and securing the applications that run in the cluster through Kubernetes objects such as RBAC for service accounts, Secrets management, NetworkPolicy and Pod Security admission. Static analysis and secret scanning in repositories are Code-layer controls. Node disk encryption and VPC firewalls sit in the Cloud layer. Distroless images and image signing are Container-layer controls; all three are useful, but none addresses the Kubernetes-level configuration of the workloads.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/cloud-native-security/",
    tags: ["4C model", "Cluster layer", "RBAC", "NetworkPolicy"]
  },
  {
    id: "cncf-kcsa-7",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Finding flaws that only appear while the service runs",
    scenario: "A travel-booking team already runs static analysis on every pull request, yet a penetration test found an injection flaw that only manifested when crafted HTTP requests hit the running service. The team wants an automated Code-layer control in the staging pipeline that would catch this class of issue.",
    question: "What should the team add?",
    options: [
      { id: 'A', text: "A container image vulnerability scan of the service's image before it is pushed to the staging registry repository." },
      { id: 'B', text: "Generation of a software bill of materials for every build so that the libraries in the service are fully inventoried." },
      { id: 'C', text: "A kube-bench run against the staging cluster nodes to compare the kubelet and control plane with the CIS benchmark." },
      { id: 'D', text: "Dynamic application security testing that probes the deployed staging endpoints with attack payloads on each release." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Dynamic probing of a running application, often called DAST, sends crafted requests to live endpoints and finds issues such as injection that static analysis cannot see; it is one of the Code-layer practices alongside static analysis and dependency scanning. An image vulnerability scan finds known CVEs in packages, not logic flaws in the team's own request handling. kube-bench checks cluster component configuration against the CIS benchmark and never exercises the application. An SBOM inventories components, which helps with known-vulnerability tracking, but it does not test behaviour.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/cloud-native-security/",
    tags: ["4C model", "Code layer", "DAST"]
  },
  {
    id: "cncf-kcsa-8",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Customer duties on a managed control plane",
    scenario: "A logistics firm is moving from self-managed clusters to a managed Kubernetes offering in which the provider operates the control plane and etcd. The CISO wants the responsibility matrix to show which security task stays with the firm after the move.",
    question: "Which task remains the firm's responsibility?",
    options: [
      { id: 'A', text: "Defining RoleBindings for its own users and workloads and the NetworkPolicies that govern traffic between its pods." },
      { id: 'B', text: "Rotating the peer and client TLS certificates that etcd members use to talk to each other and to the API server." },
      { id: 'C', text: "Patching the kube-apiserver binary and the operating system of the control plane hosts when a CVE is published." },
      { id: 'D', text: "Setting the kube-controller-manager and kube-scheduler flags to the values recommended by the CIS benchmark." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Under the shared responsibility model of managed Kubernetes, the provider secures and operates the control plane components and etcd, while the customer keeps responsibility for what runs in the cluster and who can use it: RBAC bindings, NetworkPolicies, workload configuration and usually the nodes they manage. Patching the API server and its hosts is part of operating the control plane and falls to the provider. etcd certificate rotation is likewise provider-managed and typically not even visible to customers. Control plane component flags are set by the provider, which is why CIS publishes separate benchmarks for managed services.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/overview/",
    tags: ["Shared responsibility", "Managed Kubernetes"]
  },
  {
    id: "cncf-kcsa-9",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Does a strict pod profile make network rules redundant?",
    scenario: "A bank enforces the Restricted Pod Security Standard on every application namespace. A developer proposes dropping the planned NetworkPolicies, arguing that pods which cannot run privileged, cannot use host namespaces and must run as non-root already pose no lateral-movement risk.",
    question: "Which response reflects layered security correctly?",
    options: [
      { id: 'A', text: "Disagree, because the profile limits what a pod can do on its node but not which services a compromised pod can reach." },
      { id: 'B', text: "Agree, because blocking hostNetwork removes the only path by which one pod can open connections to another pod." },
      { id: 'C', text: "Agree, because the Restricted profile also denies egress from pods except to the cluster DNS service by default." },
      { id: 'D', text: "Disagree, because the Restricted profile is advisory only and is never enforced by the built-in admission controller." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pod Security Standards constrain a pod's privileges on its node, such as capabilities, host namespaces and the user it runs as; they say nothing about network reachability, so a compromised non-privileged pod can still connect to any other service on the flat pod network unless NetworkPolicies restrict it. Layered controls address different threats, which is the point of defense in depth. The Restricted profile contains no egress rules at all; traffic filtering is NetworkPolicy's job. Pods talk to each other over the pod network, not the host network, so blocking hostNetwork does not isolate them. Pod Security admission does enforce the profile when a namespace is labelled with enforce mode.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Defense in depth", "Pod Security Standards", "NetworkPolicy"]
  },
  {
    id: "cncf-kcsa-10",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Keeping the reporting pods away from the ledger database",
    scenario: "An accounting SaaS runs a ledger database and a reporting service as pods on the same pool of worker nodes. Compliance requires that only the ledger API pods may open connections to the database pods, and pods move between nodes constantly as they are rescheduled.",
    question: "Which control satisfies the requirement?",
    options: [
      { id: 'A', text: "A NetworkPolicy selecting the database pods that allows ingress only from pods labelled as the ledger API service." },
      { id: 'B', text: "Image signing for the ledger API so that only trusted builds of that service can be scheduled onto the node pool." },
      { id: 'C', text: "Mutual TLS in the ledger API code so that its database connections are encrypted end to end while in transit." },
      { id: 'D', text: "A cloud security group on the worker nodes that allows the database port only from the node subnet that all the pods share." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A NetworkPolicy selects pods by label and restricts which other pods may connect to them, so it follows the pods wherever they are scheduled; allowing ingress to the database only from the ledger API label is a Cluster-layer control that fits exactly. A node security group sees node addresses, and because every pod shares the same nodes, it cannot tell the reporting pods from the ledger pods. Mutual TLS in the client encrypts its own connections but does not stop another pod from connecting. Image signing controls which builds run, not which pods may reach the database.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["4C model", "Cluster layer", "NetworkPolicy"]
  },
  {
    id: "cncf-kcsa-11",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Triage order for four assessment findings",
    scenario: "A media company receives four findings from a security assessment and can fix only one this sprint: an internal admin endpoint lacks input validation; production images still contain curl; an object storage bucket holding nightly etcd snapshots is readable by anyone on the internet; a staging namespace has no LimitRange.",
    question: "Which finding should be fixed first?",
    options: [
      { id: 'A', text: "The publicly readable bucket of etcd snapshots, since it exposes every Secret and object in the cluster at once." },
      { id: 'B', text: "The curl binary in production images, since it gives any attacker who gains a shell an easy download tool." },
      { id: 'C', text: "The missing LimitRange in staging, since an unbounded pod could exhaust node resources for other tenants." },
      { id: 'D', text: "The admin endpoint without input validation, since application code is the attack surface the team controls most." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "etcd snapshots contain the entire cluster state, including every Secret unless encryption at rest was configured, and a world-readable bucket is an outer-layer failure that needs no foothold to exploit; weaknesses in the outer layers undermine everything inside them, so this is the most urgent. The unvalidated admin endpoint is serious but internal, so an attacker first needs network access. Removing curl reduces post-exploitation convenience but only matters after a compromise. A missing LimitRange in staging is an availability hygiene issue with a far smaller blast radius than a full cluster data leak.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/",
    tags: ["4C model", "etcd", "Risk prioritisation"]
  },
  {
    id: "cncf-kcsa-12",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Taking a public API endpoint off the internet",
    scenario: "A retailer's managed Kubernetes cluster was created with its API server endpoint reachable from any internet address. The security team requires that the endpoint accept connections only from the corporate VPN range and the CI runners' network.",
    question: "Which change meets the requirement?",
    options: [
      { id: 'A', text: "Restrict the endpoint to authorised network ranges or a private endpoint so that only those networks can connect." },
      { id: 'B', text: "Place the API server behind an Ingress controller with TLS termination and a certificate from a public authority." },
      { id: 'C', text: "Disable anonymous authentication on the API server so unauthenticated requests from the internet are rejected." },
      { id: 'D', text: "Create a NetworkPolicy in kube-system that denies ingress to the endpoint except from the VPN and CI ranges." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Network access to the control plane is an infrastructure concern: the provider's authorised-networks or private-endpoint feature limits which source addresses can reach the API server at all, which matches the VPN-and-CI requirement. NetworkPolicy applies to pod traffic inside the cluster and has no effect on the provider-hosted API server endpoint. Disabling anonymous authentication is worthwhile but leaves the endpoint reachable from the whole internet for credential attacks and exploits. Routing the API server through an Ingress adds another public entry point rather than removing the existing one.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/overview/",
    tags: ["Cloud layer", "API server", "Network access"]
  },
  {
    id: "cncf-kcsa-13",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Worker nodes with public addresses and open SSH",
    scenario: "A game studio's self-managed cluster runs worker nodes in a public subnet, each with a public IP and SSH open to the world. The nodes must keep serving two LoadBalancer Services and receiving traffic from the control plane, but nothing else should reach them.",
    question: "Which configuration should the team adopt?",
    options: [
      { id: 'A', text: "Move the nodes to private subnets and allow only control plane ports and the load balancers' traffic in their firewall rules." },
      { id: 'B', text: "Apply a default-deny NetworkPolicy in every namespace so that pods on the nodes refuse unexpected traffic." },
      { id: 'C', text: "Run the nodes with a read-only root filesystem so that anyone who logs in over SSH cannot persist changes to the host." },
      { id: 'D', text: "Keep the public subnet and disable password login for SSH so that only key-based sessions can reach the nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Nodes should accept connections only from the control plane on the required ports and from the load balancers for NodePort and LoadBalancer Services, and ideally should not be exposed to the public internet at all; private subnets with tight firewall rules do exactly that. Key-only SSH still leaves every node reachable for scanning and exploitation of the SSH daemon or kubelet. NetworkPolicy filters pod traffic and does not protect the node's own services such as SSH or the kubelet API. A read-only root filesystem limits persistence after a login but does nothing to prevent the exposure.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/overview/",
    tags: ["Cloud layer", "Node security", "Network segmentation"]
  },
  {
    id: "cncf-kcsa-14",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Stopping a pod from borrowing the node's cloud role",
    scenario: "During a red-team exercise on a cloud-hosted cluster, a compromised web pod sent a request to the instance metadata endpoint at 169.254.169.254, obtained temporary credentials for the worker node's cloud role and used them to list storage buckets. Only one workload in the cluster legitimately needs cloud API access.",
    question: "Which remediation addresses the root cause?",
    options: [
      { id: 'A', text: "Block pod access to the metadata endpoint and give the one workload its own scoped workload identity." },
      { id: 'B', text: "Rotate the node role credentials that the metadata endpoint serves more often and cap their lifetime at fifteen minutes." },
      { id: 'C', text: "Enable encryption at rest for Secrets in etcd so the credentials cannot be read from the cluster datastore." },
      { id: 'D', text: "Enforce the Restricted Pod Security Standard on the web namespace so the pod cannot run as the root user." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The metadata service hands the node's role credentials to anything on the node that can reach it, so pods must be prevented from reaching it (an egress NetworkPolicy, a metadata hop limit or the provider's metadata concealment), and the single workload that needs cloud access should get narrowly scoped credentials through workload identity instead of relying on the node role. Rotating the node role more often does not stop the pod fetching fresh credentials each time. Running as non-root does not block an ordinary HTTP request to the metadata address. The credentials never pass through etcd, so encrypting Secrets at rest is unrelated.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/security-checklist/",
    tags: ["Cloud layer", "Instance metadata", "Workload identity"]
  },
  {
    id: "cncf-kcsa-15",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "An administrator role granted for a storage driver",
    scenario: "To get a CSI storage driver working quickly, an engineer attached a cloud role with full administrator rights to the cluster's worker nodes. The driver only needs to create, attach and delete block volumes, and the other workloads on those nodes need no cloud permissions at all.",
    question: "What should replace the current setup?",
    options: [
      { id: 'A', text: "A scoped role limited to volume operations, bound to the driver's service account through workload identity." },
      { id: 'B', text: "The same administrator role, but with the driver moved to a dedicated node pool so fewer pods share those nodes." },
      { id: 'C', text: "A Kubernetes ClusterRole that limits the driver to PersistentVolume objects so it cannot touch other resources." },
      { id: 'D', text: "An administrator role with an IAM condition that allows calls only during the change window for storage work." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Access from Kubernetes components to the cloud provider API should follow least privilege: the driver needs only volume operations, and binding a scoped role to its service account via workload identity keeps those rights away from every other pod on the node. Isolating the driver on a dedicated pool reduces the number of neighbours but leaves an administrator credential available to anything that compromises that pool. A Kubernetes ClusterRole limits what the driver can do through the Kubernetes API, not what the cloud role allows against the provider's API. A time-window condition keeps full administrator rights during the window and would break volume provisioning outside it.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/overview/",
    tags: ["Cloud layer", "Least privilege", "Cloud IAM"]
  },
  {
    id: "cncf-kcsa-16",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "etcd ports reachable from the worker subnet",
    scenario: "A network scan of a self-managed cluster shows that etcd's client port 2379 and peer port 2380 accept TCP connections from every host in the worker node subnet. The control plane nodes are the only machines that should ever talk to etcd.",
    question: "Which change should the team make?",
    options: [
      { id: 'A', text: "Firewall the etcd ports to the control plane hosts only and require client certificates for every connection." },
      { id: 'B', text: "Enable encryption at rest for Secrets on the API server so any data a client reads from etcd is useless to an attacker." },
      { id: 'C', text: "Enable the NodeRestriction admission plugin so that kubelets on workers cannot modify objects in etcd directly." },
      { id: 'D', text: "Move etcd to a non-standard port so that routine scans of the worker subnet no longer discover the service." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Write access to etcd is equivalent to root on the whole cluster, so access should be limited to the control plane by network rules and authenticated with mutual TLS client certificates. A non-standard port is obscurity and leaves the service reachable. Encryption at rest protects Secret values only; an attacker with etcd access could still read other objects or write arbitrary ones. NodeRestriction limits what kubelets can change through the API server, but it has no effect on direct connections to etcd that bypass the API server entirely.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/",
    tags: ["Cloud layer", "etcd", "Mutual TLS"]
  },
  {
    id: "cncf-kcsa-17",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Unencrypted etcd volumes and backups on VMs",
    scenario: "A university runs Kubernetes on virtual machines in a public cloud. The etcd data directory sits on an unencrypted block volume, nightly snapshots are copied to an unencrypted storage bucket, and the API server has no encryption configuration. The research office wants data at rest protected at both the storage and the Kubernetes level.",
    question: "Which combination addresses the requirement?",
    options: [
      { id: 'A', text: "Encrypt the volume and bucket with provider keys and configure API server encryption at rest for Secret resources." },
      { id: 'B', text: "Apply encryption at rest to the storage bucket only, because the etcd volume is attached to a VM in a private subnet." },
      { id: 'C', text: "Enable TLS between the API server and etcd and between etcd peers so that no cluster data crosses the network in clear." },
      { id: 'D', text: "Store Secrets in ConfigMaps instead, since ConfigMaps are kept in a separate etcd keyspace that is not backed up." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Storage-level encryption of the etcd volume and the snapshot bucket protects against stolen disks and leaked backups, and API server encryption at rest encrypts Secret values before they are written to etcd, so they stay protected even if a snapshot is read by someone with storage access. TLS protects data in transit, not the files on disk. Leaving the volume unencrypted because it is in a private subnet ignores snapshot, disk and cloud-console exposure. ConfigMaps are stored in the same etcd database, included in the same snapshots and offer less protection than Secrets.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/",
    tags: ["Cloud layer", "Encryption at rest", "etcd"]
  },
  {
    id: "cncf-kcsa-18",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "No other cloud customer on the same physical host",
    scenario: "A card processor is moving its cardholder-data workloads to a Kubernetes node pool in a public cloud. Its acquiring bank's contract requires that the physical servers running those nodes are never shared with virtual machines belonging to any other cloud customer, while the rest of the company's clusters can stay on ordinary shared instances.",
    question: "Which infrastructure choice satisfies the contract clause?",
    options: [
      { id: 'A', text: "A sandboxed container runtime such as gVisor for the pods, so each workload gets its own user-space kernel." },
      { id: 'B', text: "Sole-tenant nodes or dedicated hosts for the node pool, so the underlying servers are reserved for the company." },
      { id: 'C', text: "Confidential VM instances for the node pool, so guest memory is encrypted with keys the host hypervisor cannot read." },
      { id: 'D', text: "A separate VPC with its own firewall rules for the node pool, so no other network can route to those nodes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Sole-tenant nodes (Google Cloud), dedicated hosts or dedicated instances (AWS) and Azure Dedicated Host reserve the physical server for a single customer, which is exactly what the clause requires, and a node pool can be placed on them while other pools stay on shared capacity. Confidential VMs encrypt guest memory against the host, a valuable control, but the VM still runs on hardware shared with other customers. A sandboxed runtime isolates containers from each other and from the node kernel, but says nothing about which customers share the physical machine. A separate VPC is network isolation; it does not change where the virtual machines are physically placed.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/sole-tenancy",
    tags: ["Cloud layer", "Sole tenancy", "Compliance"]
  },
  {
    id: "cncf-kcsa-19",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Slimming the operating system under the nodes",
    scenario: "A telecom's worker nodes run a general-purpose Linux distribution with compilers, a desktop package group and dozens of daemons installed by default. The team wants to shrink the host attack surface and make unauthorised changes to the node OS harder, without changing the applications.",
    question: "What should the team do?",
    options: [
      { id: 'A', text: "Move to a minimal, container-optimised OS image with an immutable or read-only root filesystem." },
      { id: 'B', text: "Install a host-based antivirus agent on every node and schedule a full filesystem scan once a night." },
      { id: 'C', text: "Keep the distribution but run all workloads under a sandboxed runtime so the host OS is never touched." },
      { id: 'D', text: "Enforce the Baseline Pod Security Standard cluster-wide so that pods cannot use the extra host packages." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Container-optimised operating systems such as Bottlerocket, Flatcar or Container-Optimized OS ship only what is needed to run containers and typically mount the root filesystem read-only, which removes most of the host attack surface and makes tampering harder. An antivirus agent adds another privileged component and detects rather than removes the unnecessary software. Pod Security Standards govern pod specifications, not the packages installed on the host. A sandboxed runtime isolates workloads but leaves the bloated host OS, its daemons and its vulnerabilities in place.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/overview/",
    tags: ["Cloud layer", "Node hardening"]
  },
  {
    id: "cncf-kcsa-20",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "What an IaaS provider secures for its customers",
    scenario: "A charity is building its first cluster on virtual machines rented from a public cloud and is drafting a responsibility matrix. The board wants to know which security task it can rely on the provider to perform.",
    question: "Which task belongs to the cloud provider?",
    options: [
      { id: 'A', text: "Writing the firewall rules that limit which addresses can reach the charity's virtual machines and API server." },
      { id: 'B', text: "Configuring RBAC so that volunteers can only view workloads in the namespaces they are responsible for." },
      { id: 'C', text: "Physical security of the datacenters and isolation of the hypervisor that runs the customers' virtual machines." },
      { id: 'D', text: "Granting least-privilege IAM permissions to the charity's engineers and the cluster's service identities." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In infrastructure as a service, the provider secures the physical facilities, hardware and virtualisation layer that separates tenants, while the customer configures everything they build on top. Firewall rules around the customer's nodes and endpoints are customer configuration of provider tools. IAM permissions for the customer's own people and services are the customer's to design, even though the provider supplies the IAM service. RBAC is Kubernetes configuration inside a cluster the charity runs itself, so it is entirely the charity's responsibility.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/overview/",
    tags: ["Shared responsibility", "Cloud layer"]
  },
  {
    id: "cncf-kcsa-21",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Who opened the node firewall on Friday night?",
    scenario: "On Monday a fintech discovers that a firewall rule protecting its cluster's node subnet was widened to allow all inbound traffic sometime over the weekend. The team needs to identify which identity made the change and from where.",
    question: "Which log source will answer the question?",
    options: [
      { id: 'A', text: "The kubelet journal on each node, which records every change to the host's firewall rules." },
      { id: 'B', text: "The container runtime logs, which capture the network namespace changes made when pods are started." },
      { id: 'C', text: "The Kubernetes API server audit log filtered for update events on Service and NetworkPolicy objects." },
      { id: 'D', text: "The cloud provider's audit trail of control-plane API calls against the network and firewall resources." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud firewall rules are changed through the provider's own API, so the provider's audit trail (such as CloudTrail or Cloud Audit Logs) records the caller identity, source address and time of the change. The Kubernetes audit log records requests to the Kubernetes API only, and a cloud firewall is not a Kubernetes object. The kubelet does not manage or log the cloud provider's network firewall. Container runtime logs describe container lifecycle events on a node and have no visibility into cloud network configuration.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/overview/",
    tags: ["Cloud layer", "Audit logging"]
  },
  {
    id: "cncf-kcsa-22",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "An entire NodePort range opened to the internet",
    scenario: "To expose a single partner API, an engineer opened TCP ports 30000 to 32767 on every worker node to all internet addresses. Several internal services in the cluster also use NodePort, and the partner only needs to reach the one API on HTTPS.",
    question: "Which approach reduces the exposure while keeping the partner working?",
    options: [
      { id: 'A', text: "Expose the API through a LoadBalancer and allow node traffic only from the load balancer on the needed port." },
      { id: 'B', text: "Expose internal Services as ExternalName instead of NodePort so that the node ports are no longer allocated." },
      { id: 'C', text: "Keep the open range but require the partner to send a shared API key header with every HTTPS request made." },
      { id: 'D', text: "Keep the open range and add a default-deny NetworkPolicy so internal NodePort services drop outside traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Nodes should accept traffic only for the services that must be exposed, so fronting the partner API with a load balancer and allowing node traffic only from that load balancer on its port closes the rest of the NodePort range to the internet. A default-deny NetworkPolicy could block traffic but depends on the CNI enforcing it on node-port paths and leaves the whole range advertised; it is not a substitute for the infrastructure firewall. An API key protects only the partner API and leaves every other internal NodePort reachable. ExternalName Services map to a DNS name outside the cluster and cannot replace internal services backed by pods.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/",
    tags: ["Cloud layer", "NodePort", "Network exposure"]
  },
  {
    id: "cncf-kcsa-23",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Cluster access that no RoleBinding explains",
    scenario: "An auditor at a media firm finds that a contractor can delete Deployments in a managed GKE cluster, yet no RoleBinding or ClusterRoleBinding names the contractor or any group they belong to. The contractor was recently granted a broad Kubernetes-related role at the Google Cloud project level for an unrelated migration.",
    question: "What explains the access?",
    options: [
      { id: 'A', text: "Project-level IAM roles authorise Kubernetes API actions alongside RBAC, so the IAM grant allows the deletion." },
      { id: 'B', text: "The contractor's kubeconfig holds a static client certificate that bypasses RBAC and the webhook authorizer." },
      { id: 'C', text: "The system:authenticated group is bound to edit rights in every namespace by the default GKE role bindings." },
      { id: 'D', text: "GKE grants cluster-admin automatically to anyone who can view the cluster in the console for the first 30 days." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "On GKE, authorization checks both Google Cloud IAM and Kubernetes RBAC, and permission from either is enough; a project-level role such as Kubernetes Engine Developer or Admin grants API actions in every cluster in the project, which is why cloud IAM must be held to least privilege as tightly as RBAC. GKE grants no time-limited cluster-admin to console viewers. Client certificates authenticate a user but do not bypass authorization, and GKE disables client-certificate issuance on current clusters. The system:authenticated group is not bound to edit rights by default; it receives only discovery and basic self-review permissions.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/iam",
    tags: ["Cloud IAM", "RBAC", "Managed Kubernetes"]
  },
  {
    id: "cncf-kcsa-24",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Catching an open security group before it is created",
    scenario: "A health-tech company provisions its clusters, subnets and firewall rules with Terraform. Twice this year a pull request created a firewall rule open to 0.0.0.0/0 that was only caught after deployment, and the team wants such misconfigurations blocked before anything is provisioned.",
    question: "Which control should be added to the pipeline?",
    options: [
      { id: 'A', text: "A kube-bench job that runs on each new node and reports kubelet settings that differ from the CIS benchmark." },
      { id: 'B', text: "A runtime detection agent on the nodes that alerts whenever a process opens an unexpected listening network port." },
      { id: 'C', text: "Static scanning of the Terraform code with a policy checker that fails the pull request on open ingress rules." },
      { id: 'D', text: "A container image scan in each pull request pipeline, failing the build on any critical CVE that it reports." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Infrastructure-as-code scanning tools such as Checkov, tfsec or an OPA policy on the Terraform plan evaluate the declared cloud resources and can fail the pull request before the open rule is ever provisioned. An image scan examines container contents, not cloud network configuration. kube-bench checks Kubernetes component settings on nodes after they exist and does not read Terraform or firewall rules. A runtime detection agent observes processes on running nodes, so it reacts after deployment and cannot see the cloud firewall definition.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/cloud-native-security/",
    tags: ["Cloud layer", "Infrastructure as code", "Shift left"]
  },
  {
    id: "cncf-kcsa-25",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Development admins who can edit production networking",
    scenario: "An e-commerce company runs its development and production clusters in the same cloud account. Developers hold broad permissions in that account so they can experiment, and last month one of them accidentally modified a production firewall rule.",
    question: "Which change most effectively limits the blast radius?",
    options: [
      { id: 'A', text: "Tag every production resource so that developers can see at a glance which firewall rules they must avoid." },
      { id: 'B', text: "Require developers to enable multi-factor authentication before they sign in to the shared cloud account." },
      { id: 'C', text: "Put the production cluster in a separate cloud account or project with its own tightly scoped IAM policies." },
      { id: 'D', text: "Place the two clusters in separate Kubernetes namespaces of a single larger shared cluster within that account." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Separate cloud accounts or projects create a hard IAM boundary, so broad development permissions simply do not apply to production resources. Tags only inform people and prevent nothing unless an IAM policy also enforces them. Consolidating into namespaces of one cluster in the same account keeps the shared cloud permissions and adds shared-cluster risk. Multi-factor authentication proves who is signing in but does not reduce what a legitimately signed-in developer can change.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/multi-tenancy/",
    tags: ["Cloud layer", "Blast radius", "Account separation"]
  }
];

export default CNCF_KCSA_QUESTIONS_1;
