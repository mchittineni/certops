export const CNCF_KCNA_QUESTIONS_1 = [
  {
    id: "cncf-kcna-1",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Which component may write to the cluster datastore",
    scenario: "A security reviewer at a fintech startup is mapping network flows in a new Kubernetes cluster. She wants to firewall the etcd members so that only the one control plane component that is supposed to read and write cluster state can reach them on their client port.",
    question: "Which component should be allowed to connect to etcd?",
    options: [
      { id: 'A', text: "kubelet on each node, because it reports Pod status by writing records into the datastore" },
      { id: 'B', text: "kube-controller-manager, because its control loops persist desired state straight to etcd" },
      { id: 'C', text: "kube-apiserver, because every other component reads and writes state through its API" },
      { id: 'D', text: "kube-scheduler, because it records each Pod-to-node binding directly in the datastore" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The API server is the only component that talks to etcd; the scheduler, the controllers and every kubelet read and write cluster state by calling the API server, which validates the request and then persists it. The scheduler creates a binding through the API rather than writing to etcd. Controller-manager loops also work through the API server's watch and update calls. Kubelets report node and Pod status by updating objects through the API server, never by opening an etcd connection, so firewalling etcd down to the API servers is the standard hardening step.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/components/",
    tags: ["Control plane","etcd","kube-apiserver"]
  },
  {
    id: "cncf-kcna-2",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "What is lost if the etcd data disappears",
    scenario: "A lab cluster's only control plane node lost its disk, including the /var/lib/etcd directory, but the worker nodes are healthy and their containers are still running. The team has no etcd snapshot. A junior engineer asks what exactly was kept in that directory.",
    question: "What did the etcd data directory hold?",
    options: [
      { id: 'A', text: "The kernel routing tables that kube-proxy programs on each node for Service traffic" },
      { id: 'B', text: "The application log files written by containers, collected centrally from every worker" },
      { id: 'C', text: "The container images pulled by each node, cached so Pods can restart without a registry" },
      { id: 'D', text: "The consistent key-value record of all cluster objects, such as Deployments and Services" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "etcd is the consistent, highly available key-value store that backs the Kubernetes API: every object you create, from Deployments and Services to Secrets and ConfigMaps, lives there, so losing it without a snapshot means losing the cluster's recorded desired and observed state. Container images are cached by the container runtime on each node's own disk, not in etcd. Container logs are written to files on the node where the container runs and are not stored in etcd. Service routing rules are programmed locally by kube-proxy on every node from Service and EndpointSlice objects; they are not the datastore itself.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/#etcd",
    tags: ["etcd","Cluster state"]
  },
  {
    id: "cncf-kcna-3",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Deciding where a new Pod will run",
    scenario: "A developer creates a Pod with kubectl and watches it with kubectl get pods -o wide. For a second or two the NODE column is empty, and then a node name appears before the container starts pulling its image.",
    question: "Which control plane component filled in the node for that Pod?",
    options: [
      { id: 'A', text: "kube-scheduler, which watches for unassigned Pods and binds each one to a feasible node" },
      { id: 'B', text: "kube-proxy, which watches Service traffic and picks a node for the Pod where it arrives" },
      { id: 'C', text: "kube-controller-manager, whose node controller places each new Pod on a healthy node" },
      { id: 'D', text: "cloud-controller-manager, which chooses a virtual machine for the Pod from the provider" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The scheduler watches for Pods whose spec.nodeName is empty, filters out nodes that cannot run them, scores the remaining nodes and binds the Pod to the best one; only then does that node's kubelet start the containers. kube-proxy runs on every node to implement Service networking and plays no part in placement. The node controller inside kube-controller-manager tracks node health and evicts Pods from unreachable nodes, but it does not assign new Pods. The cloud-controller-manager integrates with the provider for nodes, routes and load balancers and does not schedule Pods.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/",
    tags: ["kube-scheduler","Control plane"]
  },
  {
    id: "cncf-kcna-4",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A deleted replica comes straight back",
    scenario: "An operator runs kubectl delete pod web-7d9f-abcde to clear a stuck replica of a Deployment set to replicas: 3. Within seconds kubectl get pods shows three web Pods again, one of them with a new random suffix.",
    question: "Which component noticed the shortfall and created the replacement Pod object?",
    options: [
      { id: 'A', text: "The kubelet on the node, which restarts any Pod that was deleted from its local runtime" },
      { id: 'B', text: "The ReplicaSet controller running inside kube-controller-manager, reconciling the count" },
      { id: 'C', text: "The kube-scheduler, which recreates Pods whenever a node reports free capacity again" },
      { id: 'D', text: "The etcd cluster, which restores deleted keys from its write-ahead log automatically" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A Deployment manages a ReplicaSet, and the ReplicaSet controller inside kube-controller-manager continuously compares the number of matching Pods with the desired replicas; when one disappears it creates a new Pod object through the API server, which the scheduler then places. A kubelet restarts containers that exit inside an existing Pod, but it does not recreate a Pod object that was deleted from the API. The scheduler only assigns nodes to Pods that already exist. etcd simply stores what the API server writes and never resurrects deleted keys on its own.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/controller/",
    tags: ["Controllers","ReplicaSet","Reconciliation"]
  },
  {
    id: "cncf-kcna-5",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Who asks the cloud for a load balancer",
    scenario: "On a managed cluster in a public cloud, a team applies a Service with type: LoadBalancer. A minute later the provider's console shows a new network load balancer, and the Service's EXTERNAL-IP changes from pending to a public address.",
    question: "Which Kubernetes component called the cloud provider's API to create that load balancer?",
    options: [
      { id: 'A', text: "The kubelet, which registers each node with the provider's load balancer at startup" },
      { id: 'B', text: "CoreDNS, which requests a public address when it publishes the Service's DNS record" },
      { id: 'C', text: "kube-proxy, which opens the provider's load balancer when it programs the node rules" },
      { id: 'D', text: "The cloud-controller-manager, whose service controller provisions provider resources" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The cloud-controller-manager embeds provider-specific control loops; its service controller watches Services of type LoadBalancer and creates, updates or deletes the matching cloud load balancer, then writes the address back into the Service status. kube-proxy only programs local packet-forwarding rules on each node. The kubelet registers the node with the API server, not with a provider load balancer. CoreDNS serves in-cluster DNS names and never provisions cloud infrastructure.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/cloud-controller/",
    tags: ["cloud-controller-manager","LoadBalancer"]
  },
  {
    id: "cncf-kcna-6",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "The agent that starts containers on a node",
    scenario: "A platform engineer SSHes into a worker node where the API shows a Pod as Running. She wants to find the node-level process that received the Pod spec from the API server and made sure its containers were actually started through the runtime.",
    question: "Which process should she look at?",
    options: [
      { id: 'A', text: "kube-proxy, which receives Pod specs and asks the runtime to start matching containers" },
      { id: 'B', text: "The kube-scheduler, which runs as a daemon on every node to launch the Pods it places" },
      { id: 'C', text: "The kubelet, which ensures the containers described in its assigned PodSpecs are running" },
      { id: 'D', text: "etcd, which runs on every worker and hands Pod definitions to the local runtime directly" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The kubelet is the node agent: it watches the API server for Pods bound to its node, asks the container runtime through the Container Runtime Interface to create them, runs their probes and reports status back. kube-proxy runs on each node too, but its job is Service networking, not container lifecycle. The scheduler is a control plane component that only chooses nodes. etcd runs on control plane or dedicated datastore hosts, not on every worker, and it never talks to container runtimes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/components/#kubelet",
    tags: ["kubelet","Node components"]
  },
  {
    id: "cncf-kcna-7",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A Node object appears for a new machine",
    scenario: "An operator installs the node components on a fresh virtual machine and points them at an existing cluster's API server. Within a minute kubectl get nodes lists the machine, and its Node object already shows CPU and memory capacity and a kubernetes.io/hostname label, although no one ran kubectl create node.",
    question: "Which component created that Node object?",
    options: [
      { id: 'A', text: "kube-proxy on the new machine, which creates the Node when it programs its first rules" },
      { id: 'B', text: "The node controller in kube-controller-manager, which discovers machines on the network" },
      { id: 'C', text: "The kube-scheduler, which adds a Node for each machine it can place Pods on later" },
      { id: 'D', text: "The kubelet on the new machine, which registers its own Node with the API server" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "By default the kubelet self-registers: when it starts with valid credentials it creates a Node object for its host and reports capacity, allocatable resources, addresses and well-known labels such as kubernetes.io/hostname, then keeps the status up to date. The node controller manages Nodes that already exist, tracking health and, with a cloud provider, cleaning up deleted machines; it does not scan the network for new ones. kube-proxy consumes Service data and does not register nodes. The scheduler only reads Nodes when choosing where Pods go.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/nodes/#self-registration-of-nodes",
    tags: ["Nodes","kubelet","Registration"]
  },
  {
    id: "cncf-kcna-8",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "The interface between kubelet and the runtime",
    scenario: "A company is moving its worker nodes from one container runtime to another and wants to know what makes it possible to swap the runtime without changing the kubelet binary or the Pod manifests.",
    question: "What allows the kubelet to work with different container runtimes such as containerd or CRI-O?",
    options: [
      { id: 'A', text: "The Container Storage Interface, which standardizes how the runtime starts images" },
      { id: 'B', text: "The Open Container Initiative image format, which the kubelet executes on its own" },
      { id: 'C', text: "The Container Runtime Interface, a gRPC API that any conforming runtime implements" },
      { id: 'D', text: "The Container Network Interface, a plugin API the kubelet uses to launch containers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The kubelet talks to container runtimes over the Container Runtime Interface, a gRPC API; containerd and CRI-O implement it, so either can sit under the same kubelet and the same Pod specs. The Container Network Interface is for configuring Pod networking, not for starting containers. The Container Storage Interface lets storage vendors provide volumes. OCI specifications define image and runtime formats that the runtimes use, but the kubelet does not run OCI images by itself; it delegates through CRI.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/cri/",
    tags: ["CRI","Container runtime","kubelet"]
  },
  {
    id: "cncf-kcna-9",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Control plane Pods that ignore kubectl delete",
    scenario: "On a kubeadm cluster, an administrator runs kubectl delete pod kube-apiserver-cp1 -n kube-system to force a restart. The Pod vanishes briefly and reappears with the same name and the same age as the running process, and no Deployment or DaemonSet owns it.",
    question: "What explains this behavior?",
    options: [
      { id: 'A', text: "It is protected by a finalizer that blocks deletion until kubeadm confirms a replacement" },
      { id: 'B', text: "It is a static Pod read by the kubelet from a manifest directory; the API shows only a mirror" },
      { id: 'C', text: "It is recreated by the kube-controller-manager, which reconciles all kube-system Pods" },
      { id: 'D', text: "It is part of a hidden DaemonSet in kube-system that recreates the Pod on every control node" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubeadm runs the API server, controller manager, scheduler and etcd as static Pods: the kubelet reads their manifests from a local directory (by default /etc/kubernetes/manifests) and runs them without the API server's involvement, publishing a read-only mirror Pod so they are visible to kubectl. Deleting the mirror Pod does not stop the static Pod; editing or removing the manifest file on the node does. There is no hidden DaemonSet; a DaemonSet would appear as the Pod's owner. A finalizer delays deletion but would leave the Pod in Terminating rather than letting it return unchanged. The controller manager reconciles controller-owned objects and has no loop that recreates arbitrary kube-system Pods.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/",
    tags: ["Static Pods","kubeadm","kubelet"]
  },
  {
    id: "cncf-kcna-10",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Declaring the outcome instead of the steps",
    scenario: "A team used to run shell scripts that started containers on specific servers. In Kubernetes they now apply a manifest saying they want four replicas of their API, and when a node fails the cluster restores four replicas on its own without anyone rerunning a script.",
    question: "Which Kubernetes principle is at work?",
    options: [
      { id: 'A', text: "Scheduled batch processing, where a timer reapplies the manifest every few minutes" },
      { id: 'B', text: "Imperative orchestration, where an operator issues each start and stop command in turn" },
      { id: 'C', text: "Declarative desired state, with controllers reconciling actual state toward the spec" },
      { id: 'D', text: "Manual placement, where each replica is pinned to a named node when it is first created" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kubernetes is declarative: you record the desired state in an object's spec, and control loops continually observe the actual state and act to close the gap, which is why lost replicas come back without any script. An imperative approach would require someone to issue the start commands again. Nothing here pins replicas to named nodes; the scheduler chooses placement. No periodic reapplication is involved either; controllers react through watches on the API server.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/working-with-objects/",
    tags: ["Desired state","Declarative"]
  },
  {
    id: "cncf-kcna-11",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Sizing etcd for failure tolerance",
    scenario: "A bank's platform team is designing a self-managed, highly available control plane with a stacked etcd topology. The requirement is that the cluster must keep accepting writes if any two etcd members fail at the same time, using as few members as possible.",
    question: "How many etcd members should the design use?",
    options: [
      { id: 'A', text: "Four members, because an even count gives two spare members beyond the required pair" },
      { id: 'B', text: "Three members, because a majority of two remains even after two members are down" },
      { id: 'C', text: "Five members, because a quorum of three survives when any two members are lost" },
      { id: 'D', text: "Six members, because each failure domain needs a pair of voting members for writes" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "etcd uses Raft and needs a majority (quorum) of members to commit writes; a cluster of n members tolerates the loss of (n-1)/2 rounded down. Five members have a quorum of three and survive two failures, which is the smallest size that does. Three members have a quorum of two, so losing two leaves one member and writes stop. Four members also need three for quorum and tolerate only one failure, so the extra member adds cost without adding tolerance. Six members need four for quorum and still tolerate only two failures, so they add a member without benefit.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/",
    tags: ["etcd","High availability","Quorum"]
  },
  {
    id: "cncf-kcna-12",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Workloads during a control plane outage",
    scenario: "The single control plane node of a small on-premises cluster has crashed and will take an hour to repair. The three worker nodes stay up, and their existing Pods were serving traffic through Services before the crash.",
    question: "What happens to the cluster until the control plane is restored?",
    options: [
      { id: 'A', text: "Existing Pods keep running, but new scheduling, scaling and self-healing cannot happen" },
      { id: 'B', text: "Existing Pods keep running and self-heal normally, but kubectl returns read-only data" },
      { id: 'C', text: "Workers elect one of themselves as a temporary control plane and continue scheduling" },
      { id: 'D', text: "Every Pod stops at once, because kubelets terminate containers when the API is unreachable" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubelets keep running the containers they already have when they lose contact with the API server, and the forwarding rules kube-proxy already programmed stay in place, so running Pods keep serving. What stops is everything that needs the control plane: new Pods cannot be scheduled, Deployments cannot scale or roll out, and controllers cannot replace failed Pods. Kubelets do not stop containers just because the API is unreachable. Worker nodes cannot promote themselves to control plane. With the API server down, kubectl cannot return any data at all, and controller-driven self-healing does not occur.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/",
    tags: ["Control plane","Availability"]
  },
  {
    id: "cncf-kcna-13",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "How the control plane knows a node is alive",
    scenario: "An SRE is explaining why a node that lost power was marked NotReady within about a minute, even though the node never sent a message saying it was going down. She wants to show the mechanism that the node controller relies on.",
    question: "Which mechanism signals node liveness to the control plane?",
    options: [
      { id: 'A', text: "etcd opens a watch connection to every kubelet and flags the node when that stream closes" },
      { id: 'B', text: "kube-proxy writes a heartbeat into each Service's EndpointSlices while its node is healthy" },
      { id: 'C', text: "The node controller pings every node's IP address with ICMP and times out missing replies" },
      { id: 'D', text: "The kubelet renews a Lease object in the kube-node-lease namespace at a regular interval" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Each kubelet updates a Lease object named after its node in the kube-node-lease namespace every few seconds, alongside periodic node status updates; when the node controller sees no renewal within the grace period, it sets the node's Ready condition to Unknown and later evicts its Pods. There is no ICMP probing by the node controller. kube-proxy does not write heartbeats into EndpointSlices; those are maintained by the EndpointSlice controller. etcd never connects to kubelets; all node reporting flows through the API server.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/nodes/#node-heartbeats",
    tags: ["Nodes","Leases","Heartbeats"]
  },
  {
    id: "cncf-kcna-14",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "How controllers learn about changes quickly",
    scenario: "A developer writing a small Kubernetes controller wants it to react within moments when a ConfigMap changes, without hammering the API server by listing every ConfigMap once a second.",
    question: "Which API server feature do built-in controllers use for this?",
    options: [
      { id: 'A', text: "A WATCH request that streams change notifications for the resources after an initial list" },
      { id: 'B', text: "A direct subscription to the etcd keyspace, bypassing the API server for faster events" },
      { id: 'C', text: "Repeated LIST calls with a short timer, comparing each result with the previous response" },
      { id: 'D', text: "An admission webhook that forwards a copy of every write request to the controller itself" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Controllers list a resource once and then open a watch, which streams added, modified and deleted events from that resourceVersion onward; client libraries wrap this as informers with local caches, giving fast reactions with little load. Polling with repeated lists is what the developer is trying to avoid and scales badly. Controllers do not subscribe to etcd directly; only the API server talks to etcd. Admission webhooks exist to validate or mutate requests before they are stored, not to feed controllers with change events.",
    referenceUrl: "https://kubernetes.io/docs/reference/using-api/api-concepts/#efficient-detection-of-changes",
    tags: ["Watch","Controllers","API server"]
  },
  {
    id: "cncf-kcna-15",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Calling the API without kubectl",
    scenario: "A developer is writing a script that uses curl against the Kubernetes API server instead of kubectl. She needs the URL path that returns the Deployment named web in the shop namespace, and knows that Deployments are served by the apps group at version v1.",
    question: "Which path should the script request?",
    options: [
      { id: 'A', text: "/apis/v1/apps/shop/deployments/web, with the version placed before the group name" },
      { id: 'B', text: "/api/v1/namespaces/shop/deployments/web, since every workload kind uses the core path" },
      { id: 'C', text: "/apps/v1/deployments/shop/web, where the namespace follows the resource type" },
      { id: 'D', text: "/apis/apps/v1/namespaces/shop/deployments/web, the path for a non-core API group" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The API is RESTful: named groups are served under /apis/GROUP/VERSION, and namespaced resources add /namespaces/NAMESPACE/RESOURCE/NAME, giving /apis/apps/v1/namespaces/shop/deployments/web. The /api/v1 prefix is only for the legacy core group, which holds Pods, Services and ConfigMaps but not Deployments. The version never comes before the group, and every path starts with /api or /apis with the namespace segment ahead of the resource type. kubectl get deployment web -n shop -v=6 prints the exact URL it calls.",
    referenceUrl: "https://kubernetes.io/docs/reference/using-api/api-concepts/",
    tags: ["Kubernetes API","REST","API groups"]
  },
  {
    id: "cncf-kcna-16",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Injecting defaults before a policy check",
    scenario: "A cluster runs a webhook that adds a team label to every new Pod that lacks one, and a second webhook that rejects any Pod without a team label. Both are admission webhooks. The platform lead wants to be sure that Pods submitted without the label are labeled rather than rejected.",
    question: "Why does this combination work as intended?",
    options: [
      { id: 'A', text: "Both webhooks run in parallel, and the API server merges their responses into one result" },
      { id: 'B', text: "Mutating admission runs before validating admission, so the team key is present when checked" },
      { id: 'C', text: "Validating admission runs first, but it retries each rejected request after mutation" },
      { id: 'D', text: "Webhooks run in alphabetical order, so the label-adding one must be named first" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The API server runs mutating admission first, including mutating webhooks, then schema validation, then validating admission. The mutating webhook therefore adds the missing label before the validating webhook inspects the Pod, and the Pod is accepted. Validating admission does not retry rejected requests. The two phases are sequential, not merged in parallel; only webhooks within the validating phase may be called in parallel. Webhook names do not set the order between phases.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/",
    tags: ["Admission control","Webhooks"]
  },
  {
    id: "cncf-kcna-17",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Resolving Service names inside the cluster",
    scenario: "Pods in a new cluster can reach each other by IP, but a call to http://payments from another Pod in the same namespace fails with a name resolution error. The engineer finds that the kube-system namespace has no DNS Pods at all.",
    question: "Which cluster add-on is missing?",
    options: [
      { id: 'A', text: "metrics-server, which resolves Service names from the resource metrics it gathers" },
      { id: 'B', text: "CoreDNS, the cluster DNS server that answers queries for Service and Pod names" },
      { id: 'C', text: "The Ingress controller, which maps Service names to addresses for internal callers" },
      { id: 'D', text: "kube-proxy, which answers DNS queries for each Service's virtual IP on the node" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kubernetes relies on a cluster DNS add-on, CoreDNS by default, which watches Services and answers names such as payments or payments.shop.svc.cluster.local; kubelets point each Pod's resolver at it. metrics-server collects CPU and memory usage for autoscaling and kubectl top and has nothing to do with names. kube-proxy forwards traffic for virtual IPs but does not answer DNS queries. An Ingress controller routes external HTTP traffic into the cluster and does not act as the internal resolver.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
    tags: ["CoreDNS","DNS","Add-ons"]
  },
  {
    id: "cncf-kcna-18",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Choosing the apiVersion for a Deployment",
    scenario: "A developer copies an old manifest that begins with apiVersion: extensions/v1beta1 and kind: Deployment. Applying it to a current cluster fails with no matches for kind Deployment in version extensions/v1beta1.",
    question: "Which apiVersion should the manifest use?",
    options: [
      { id: 'A', text: "apps/v1, the named API group and stable version that now serves Deployments" },
      { id: 'B', text: "batch/v1, the group that serves workload controllers such as Deployments and Jobs" },
      { id: 'C', text: "apps/v1beta2, because beta versions are served indefinitely for older manifests" },
      { id: 'D', text: "v1, because Deployments belong to the core group and version along with Pods" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deployments are served by the apps API group at the stable version v1, so the manifest should say apiVersion: apps/v1; the old extensions/v1beta1 and apps/v1beta2 versions were removed in Kubernetes 1.16. The core group, written simply as v1, holds Pods, Services, ConfigMaps and similar objects but not Deployments. Beta API versions are deprecated and removed on a schedule, not served forever. The batch group serves Jobs and CronJobs, not Deployments.",
    referenceUrl: "https://kubernetes.io/docs/reference/using-api/deprecation-guide/",
    tags: ["API groups","apiVersion","Deployments"]
  },
  {
    id: "cncf-kcna-19",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "How kubectl finds and reaches the cluster",
    scenario: "A new team member installs kubectl on her laptop and copies a file from a colleague into ~/.kube/config. Running kubectl get nodes now lists the cluster's nodes.",
    question: "What did kubectl use that file for?",
    options: [
      { id: 'A', text: "To store SSH keys that kubectl uses to log in to each node and read its container list" },
      { id: 'B', text: "To register her laptop as a worker node so it can report the other nodes to kubectl" },
      { id: 'C', text: "To mount the etcd database locally so kubectl can read the node objects from disk" },
      { id: 'D', text: "To hold the API server address and credentials so kubectl can call it over HTTPS" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A kubeconfig file lists clusters (API server URLs and CA data), users (credentials such as client certificates or tokens) and contexts that pair them; kubectl reads it and sends authenticated HTTPS requests to the API server. kubectl never SSHes into nodes. It does not read etcd, which only the API server accesses. Using a kubeconfig does not join the laptop to the cluster; joining a node is a kubelet operation.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/",
    tags: ["kubectl","kubeconfig"]
  },
  {
    id: "cncf-kcna-20",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "What must run on every worker node",
    scenario: "A company is building a hardened golden image for its Kubernetes worker nodes and wants to include only the components a worker needs in a standard cluster. The control plane runs on separate machines.",
    question: "Which set of components belongs on each worker node?",
    options: [
      { id: 'A', text: "etcd, kube-controller-manager and a container runtime such as containerd" },
      { id: 'B', text: "kube-scheduler, kube-proxy and a container runtime such as containerd or CRI-O" },
      { id: 'C', text: "kubelet, kube-proxy and a container runtime such as containerd or CRI-O" },
      { id: 'D', text: "kube-apiserver, kubelet and a container runtime such as containerd or CRI-O" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Every node runs the kubelet to manage Pods, kube-proxy (or an equivalent network component) to implement Services, and a CRI-compatible container runtime to run containers. The API server, scheduler, controller manager and etcd are control plane components; in this design they run on the separate control plane machines, not on workers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/components/#node-components",
    tags: ["Node components","Architecture"]
  },
  {
    id: "cncf-kcna-21",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Two containers talking over localhost",
    scenario: "A Pod runs an application container and a small metrics-exporter container. The exporter scrapes the application at http://localhost:8080/metrics and it works, even though no Service has been created.",
    question: "Why can the exporter reach the application on localhost?",
    options: [
      { id: 'A', text: "Each container gets its own IP, and CoreDNS maps localhost to the other container" },
      { id: 'B', text: "The kubelet creates an automatic Service for every Pod that listens on localhost" },
      { id: 'C', text: "Containers in one Pod share a network namespace, including its IP and loopback device" },
      { id: 'D', text: "kube-proxy redirects localhost traffic to any container that exposes that port" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A Pod is the smallest deployable unit in Kubernetes, and all containers in it share one network namespace: one Pod IP, one port space and one loopback interface, so they reach each other on localhost. The kubelet does not create Services. kube-proxy handles Service virtual IPs, not loopback traffic. Containers in a Pod do not get separate IPs, and CoreDNS never remaps the name localhost.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Pods","Networking"]
  },
  {
    id: "cncf-kcna-22",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Reading what the cluster observed",
    scenario: "An engineer runs kubectl get deployment api -o yaml. Near the top she sees replicas: 5 that she wrote, and further down a section with fields such as availableReplicas: 3 and conditions that she never set herself.",
    question: "What does that second section represent?",
    options: [
      { id: 'A', text: "The managedFields, which hold a copy of the replicas each earlier revision requested" },
      { id: 'B', text: "The status, which controllers update to report the object's current observed state" },
      { id: 'C', text: "The spec, which the API server rewrote to match the replicas that can currently run" },
      { id: 'D', text: "The metadata, which stores the annotations that kubectl added on the last apply" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Most Kubernetes objects have a spec that you write to describe desired state and a status that the system writes to describe observed state; here the Deployment controller reports three available replicas against five desired. The API server does not rewrite your spec to match reality. Metadata holds name, labels, annotations and similar identifying data, not availability counts. managedFields record which manager set which fields for server-side apply; they are not a history of replica counts.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/working-with-objects/#object-spec-and-status",
    tags: ["Objects","Spec and status"]
  },
  {
    id: "cncf-kcna-23",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Where the cluster components live",
    scenario: "A developer lists Pods in the default namespace and sees only her own apps. A colleague tells her that CoreDNS and, on kubeadm clusters, the control plane Pods themselves can also be seen with kubectl.",
    question: "Which command shows those system Pods?",
    options: [
      { id: 'A', text: "kubectl get pods -n kube-node-lease, the namespace for control plane workloads" },
      { id: 'B', text: "kubectl get pods -n kube-public, the namespace that hosts cluster components" },
      { id: 'C', text: "kubectl get pods -n default --show-all, which reveals hidden system workloads" },
      { id: 'D', text: "kubectl get pods -n kube-system, the namespace for objects the system creates" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The kube-system namespace holds objects created by the Kubernetes system, such as CoreDNS, kube-proxy and, on kubeadm clusters, the static Pods of the control plane. kube-public is readable by everyone and holds items like the cluster-info ConfigMap, not system Pods. kube-node-lease contains the Lease objects used for node heartbeats. There is no hidden-workload flag for the default namespace; system Pods simply live elsewhere.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",
    tags: ["Namespaces","kube-system"]
  },
  {
    id: "cncf-kcna-24",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Labels for selection, annotations for notes",
    scenario: "A team wants to record the Git commit and the on-call contact on each Deployment for humans and tools to read, and separately wants Services to pick Pods by tier and app name. A reviewer points out they are putting the commit hash and a long contact URL into labels.",
    question: "What should the team change?",
    options: [
      { id: 'A', text: "Move tier and app into annotations and keep the commit and contact as labels" },
      { id: 'B', text: "Move the commit and contact into annotations and keep tier and app as labels" },
      { id: 'C', text: "Move all four values into annotations, since Services can select by annotation" },
      { id: 'D', text: "Keep all four values as labels and add a field selector for the contact value" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Labels are short identifying key-value pairs that selectors use to group objects, so tier and app belong there. Annotations hold non-identifying metadata such as build information, contact details or tool configuration; they may be longer and cannot be used by selectors, which is exactly right for the commit hash and a contact URL. Moving tier and app to annotations would break the Service selector. Services cannot select Pods by annotation. Field selectors filter on a few built-in fields, not on arbitrary label values, and label values are limited to 63 characters, which a URL may exceed.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/",
    tags: ["Labels","Annotations","Metadata"]
  },
  {
    id: "cncf-kcna-25",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Deleting a Deployment but keeping its Pods",
    scenario: "During a migration, an operator must delete a Deployment object so that a new controller can adopt its Pods, but the running Pods must not be terminated. By default, kubectl delete deployment removes the ReplicaSets and Pods as well.",
    question: "What makes the default behavior happen, and how can the operator avoid it?",
    options: [
      { id: 'A', text: "The Deployment puts finalizers on its ReplicaSets and Pods, so patch them away first" },
      { id: 'B', text: "The Pods share the Deployment's labels, so relabel them first, then run the normal delete" },
      { id: 'C', text: "The ReplicaSets and Pods carry ownerReferences, so use kubectl delete with --cascade=orphan" },
      { id: 'D', text: "The scheduler removes Pods whose owner is gone, so cordon every node before the delete" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Dependents such as ReplicaSets and Pods carry ownerReferences pointing at their owner, and the garbage collector deletes dependents when the owner is deleted with the default background cascading policy. Passing --cascade=orphan deletes only the Deployment and removes the owner references, leaving the ReplicaSets and Pods running. Deployments do not place finalizers on their dependents. Relabeling a Pod makes the ReplicaSet release it and immediately create a replacement to restore its replica count, so it does not stop the cascade cleanly. The scheduler never deletes Pods, and cordoning only stops new placements.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/garbage-collection/",
    tags: ["Garbage collection","Owner references"]
  }
];

export default CNCF_KCNA_QUESTIONS_1;
