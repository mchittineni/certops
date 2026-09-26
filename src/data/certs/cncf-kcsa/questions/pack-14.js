export const CNCF_KCSA_QUESTIONS_14 = [
  {
    id: "cncf-kcsa-326",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "What a shell-less image does not stop",
    scenario: "A fintech rebuilt its Python API on a distroless base image with no shell or package manager, and a manager now describes the service as immune to remote code execution. A penetration tester is asked to explain what an attacker who finds an injection flaw in the API could still do.",
    question: "What should the tester explain?",
    options: [
      { id: 'A', text: "The attacker can run Python code only as root, because distroless images force every process to use UID 0." },
      { id: 'B', text: "The attacker can run nothing, because a container without a shell cannot start any new processes at all." },
      { id: 'C', text: "The attacker can still run code only after the kubelet restarts the container and reinstalls a shell." },
      { id: 'D', text: "The attacker can still run code through the app's own Python interpreter, only without the usual tools." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Distroless images remove shells, package managers and utilities, which slows post-exploitation, but an injection flaw lets the attacker execute code in whatever runtime the application already has, here the Python interpreter, and write or download further payloads. Processes can start without a shell; a shell is only one way to launch them. The kubelet restarts containers from the same image and never adds a shell. Distroless images do not force root, and many variants default to a non-root user.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/security-checklist/",
    tags: ["Malicious code execution","Distroless","Images"]
  },
  {
    id: "cncf-kcsa-327",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Containing a miner on a shared node",
    scenario: "An attacker exploited a vulnerable image-resizing service and started a cryptocurrency miner inside its container. The service's pods had no CPU limits, and within minutes every other workload on the same nodes became sluggish until the pods were deleted.",
    question: "Which control would have limited the miner's impact on neighbouring workloads?",
    options: [
      { id: 'A', text: "CPU limits on the resizer containers, plus a ResourceQuota on the namespace's total CPU limits." },
      { id: 'B', text: "A readiness probe with tight timeout limits, so that the resizer pods stop receiving traffic under load." },
      { id: 'C', text: "A PodDisruptionBudget on the resizer Deployment, so that fewer of its pods can run on the same node." },
      { id: 'D', text: "A higher PriorityClass for the resizer pods, so that the scheduler spreads them across more nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A CPU limit makes the kernel throttle a container once it uses its allowance, so a miner inside it cannot starve other workloads on the node, and a namespace quota caps how much CPU all of the compromised service's pods can claim. It does not remove the miner, which still needs detection and response. Readiness probes route traffic but do nothing to CPU consumption. A PodDisruptionBudget controls voluntary evictions, not placement or usage. A higher priority would make the resizer pods harder to evict, not less harmful.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Malicious code execution","Resource limits","Cryptomining"]
  },
  {
    id: "cncf-kcsa-328",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Short-lived pods against in-container malware",
    scenario: "A SaaS company notices that most of its security incidents involved long-running pods that had been up for months, giving attackers time to install tools inside the containers. The platform team is looking for a low-effort practice that shortens how long any in-container foothold can survive.",
    question: "Which practice best serves that goal?",
    options: [
      { id: 'A', text: "Regularly redeploying pods from known-good images, so changes made inside running containers are discarded." },
      { id: 'B', text: "Enabling imagePullPolicy Never on each pod, so that no new image is pulled into the node during the incident." },
      { id: 'C', text: "Setting restartPolicy Never on each pod, so containers crashing with attacker changes inside cannot restart." },
      { id: 'D', text: "Increasing the terminationGracePeriodSeconds of each pod, so attackers are flushed out in a slower stop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Treating containers as immutable and replacing them regularly from trusted images discards anything an attacker wrote into a container's filesystem, limiting dwell time, although data on persistent volumes and anything reachable with stolen credentials still need separate attention. A longer grace period only delays shutdown. Refusing to pull images does not remove changes in running containers and blocks patched releases. A restarted container gets a fresh writable layer from the image, so restartPolicy Never does not help and hurts availability.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Malicious code execution","Immutable infrastructure"]
  },
  {
    id: "cncf-kcsa-329",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Copying files out of a running container",
    scenario: "A contractor's Role in the finance namespace grants get and list on pods and pods/log but nothing else. After the contract ended, auditors found that he had copied a report file out of a running container with kubectl cp on his last day, and they want to know which permission made that possible.",
    question: "Which permission does kubectl cp rely on?",
    options: [
      { id: 'A', text: "Access to the pods/log subresource, because kubectl cp streams files through the container log output." },
      { id: 'B', text: "Access to the nodes/proxy subresource, because kubectl cp reads files through the kubelet file endpoint." },
      { id: 'C', text: "Access to the pods/portforward subresource, because kubectl cp opens a tunnel to the container port." },
      { id: 'D', text: "Access to the pods/exec subresource, because kubectl cp runs tar inside the container through exec." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Kubectl cp works by executing tar inside the container through the pods/exec subresource and streaming the archive back, so it needs exec rights, and the audit finding implies the contractor had them, perhaps through another binding, despite what his Role showed. It fails in containers without a tar binary. The log subresource only returns container output. Port-forwarding tunnels network traffic to a port. Nodes/proxy reaches the kubelet API, which is powerful but is not what kubectl cp uses.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_cp/",
    tags: ["pods/exec","RBAC","Data exfiltration"]
  },
  {
    id: "cncf-kcsa-330",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Mapping the cluster through DNS",
    scenario: "A red team gains a shell in a low-value pod on a cluster where no NetworkPolicies exist. Within minutes, they list the names and ports of services in many namespaces without calling the Kubernetes API, and then connect to an internal admin service they found that way.",
    question: "What did the red team most likely use for discovery, and what limits the follow-on connection?",
    options: [
      { id: 'A', text: "The Kubernetes Dashboard's service list; deleting the Dashboard would stop both the discovery and connection." },
      { id: 'B', text: "The kubelet's read-only port on each node; disabling anonymous kubelet access would stop both steps at once." },
      { id: 'C', text: "Cluster DNS queries for service records; only network segmentation stops the connection, as DNS checks no one." },
      { id: 'D', text: "The ServiceAccount token in the pod; removing it would stop the discovery and the admin connection together." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cluster DNS answers queries for service names and SRV records for any pod, so an attacker can enumerate services and ports without API credentials, and DNS performs no authorization. The only thing that stops the next step is network segmentation, such as default-deny NetworkPolicies with explicit allows, plus authentication on the admin service. The kubelet read-only port and the Dashboard are other discovery paths, but the scenario rules out API use and neither would stop direct connections. Removing the token helps against API abuse but not against DNS discovery or network connections.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
    tags: ["Attacker on the network","DNS","Lateral movement"]
  },
  {
    id: "cncf-kcsa-331",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "An internal service that got a public address",
    scenario: "A developer exposed an internal reporting API with a Service of type LoadBalancer on a managed cloud cluster so that a partner system in the same VPC could reach it. A week later a scan showed the API answering on a public IP address from anywhere on the internet.",
    question: "What should the developer have used instead?",
    options: [
      { id: 'A', text: "A Service of type ExternalName, so the partner resolves the API through an internal DNS address instead." },
      { id: 'B', text: "The cloud provider's internal load balancer annotation on the Service, so it gets a private VPC address." },
      { id: 'C', text: "A Service of type NodePort, so the API is reachable only on the nodes' ports within the cluster network." },
      { id: 'D', text: "A headless Service with clusterIP None, so the load balancer publishes the pod IPs only inside the VPC." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "On managed clusters a LoadBalancer Service is public by default; each provider supports an annotation, such as the internal scheme on AWS or the internal load balancer type on GKE and AKS, that provisions a private load balancer inside the VPC, optionally further limited by source ranges. NodePort opens the port on every node, which can be even more exposed if nodes have public addresses. ExternalName creates a DNS alias to another name and does not expose a Service at all. A headless Service provisions no load balancer.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#internal-load-balancer",
    tags: ["Attacker on the network","LoadBalancer","Exposure"]
  },
  {
    id: "cncf-kcsa-332",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Is a private network reason enough to skip TLS inside?",
    scenario: "An architect at a logistics company proposes leaving all service-to-service traffic inside the cluster as plain HTTP, because the cluster runs in a private cloud network with no public addresses. Several of those services pass customer session tokens between them.",
    question: "What is the main flaw in the architect's reasoning?",
    options: [
      { id: 'A', text: "An attacker who compromises any node, or a pod able to capture traffic, can read or alter unencrypted calls." },
      { id: 'B', text: "Kubernetes already encrypts all pod traffic with the cluster CA, so adding TLS would encrypt the data twice." },
      { id: 'C', text: "NetworkPolicies already encrypt traffic between allowed pods, so plain HTTP is only visible to denied pods." },
      { id: 'D', text: "Private cloud networks block packet capture at the hypervisor, so interception inside the cluster cannot occur." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A private network keeps outsiders away but not an attacker who has already compromised a workload or a node; from there, unencrypted traffic can be captured on the node or intercepted through tricks such as spoofing, so tokens moving in plain HTTP are exposed. The threat model should assume breach and encrypt and authenticate service-to-service traffic, for example with a mesh or application TLS. Kubernetes does not encrypt pod traffic by default. NetworkPolicy filters connections and never encrypts them. Cloud isolation between tenants does not stop an attacker inside your own nodes from reading local traffic.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/security-checklist/",
    tags: ["Attacker on the network","Encryption","Zero trust"]
  },
  {
    id: "cncf-kcsa-333",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Sizing up the damage after remote code execution",
    scenario: "An attacker achieves remote code execution in a customer-facing Node.js pod. The incident commander asks the security engineer to list what will determine whether this stays a single-container incident or becomes a cluster compromise.",
    question: "Which factors matter most?",
    options: [
      { id: 'A', text: "The pod's service account rights, its security context and host access, and what it can reach on the network." },
      { id: 'B', text: "The pod's resource requests, its readiness probe settings, and the number of replicas in its Deployment." },
      { id: 'C', text: "The pod's labels, its annotations, and whether the Deployment uses a rolling update or a recreate strategy." },
      { id: 'D', text: "The pod's image size, its imagePullPolicy, and whether the image was built from a multi-stage Dockerfile." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "After code execution, the attacker's next moves depend on the credentials in the pod, chiefly its service account token and what RBAC grants it, on its security context, such as privileged mode, capabilities, host namespaces and hostPath mounts that ease escape to the node, and on network reach to other services, the API server and cloud metadata. Resource requests, probes and replica counts affect availability, not attacker capability. Image size and build style influence which tools are present but not the privilege boundary. Labels and rollout strategy have no bearing on what a compromised container can do.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/security-checklist/",
    tags: ["Malicious code execution","Blast radius","Least privilege"]
  },
  {
    id: "cncf-kcsa-334",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Code that runs before the chart is even installed",
    scenario: "A team wants to install a popular Helm chart from a community repository into its production cluster. The security reviewer notices that the chart defines pre-install and post-install hooks and asks the team to explain what those hooks mean for the review.",
    question: "What should the team understand about the hooks?",
    options: [
      { id: 'A', text: "They run only inside the Helm client on the operator's laptop, so they cannot create anything in the cluster." },
      { id: 'B', text: "They create cluster objects, often Jobs running arbitrary images, at points during the release lifecycle." },
      { id: 'C', text: "They run only after the chart passes Helm's built-in security scan, which blocks privileged or root containers." },
      { id: 'D', text: "They are ignored unless the cluster enables the HelmHooks admission plugin, so the rendered objects matter most." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Helm hooks are ordinary Kubernetes manifests, typically Jobs or pods, that Helm creates at specific points in the release lifecycle, so a malicious or careless chart can run any image with any service account it defines before or after the main resources appear; reviewers should render the chart with helm template and inspect the hooks alongside everything else. Hooks run in the cluster, not in the client. Helm has no built-in security scan that blocks privileged containers. There is no HelmHooks admission plugin; hooks need nothing special from the cluster.",
    referenceUrl: "https://helm.sh/docs/topics/charts_hooks/",
    tags: ["Malicious code execution","Helm","Supply chain"]
  },
  {
    id: "cncf-kcsa-335",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "No interactive shells in production",
    scenario: "A bank's production namespaces hold customer data, and its policy says nobody may open an interactive shell into a production container except during an approved break-glass procedure. Today the built-in admin role is bound to the operations group in those namespaces.",
    question: "Which approach best enforces the policy?",
    options: [
      { id: 'A', text: "Enforce the Restricted Pod Security Standard outside break-glass windows, which disables exec for running pods." },
      { id: 'B', text: "Drop pods/exec and pods/attach from their Roles and grant them only through a temporary break-glass binding." },
      { id: 'C', text: "Set readOnlyRootFilesystem on every container, which prevents a shell from starting inside any container." },
      { id: 'D', text: "Apply a default-deny NetworkPolicy in the namespaces, which blocks the connection that kubectl exec opens." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kubectl exec and attach require access to the pods/exec and pods/attach subresources, so replacing the built-in admin role with custom Roles that omit them, and granting exec only through a time-limited break-glass binding, enforces the policy; an admission webhook on CONNECT operations can add further checks. Exec traffic flows from the API server to the kubelet, not over the pod network, so NetworkPolicy does not block it. Pod Security Standards constrain pod specifications, not exec. A read-only root filesystem does not stop a shell binary already present in the image from running.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/",
    tags: ["Malicious code execution","pods/exec","RBAC"]
  },
  {
    id: "cncf-kcsa-336",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Quarantining a compromised pod without losing evidence",
    scenario: "Runtime alerts show a web pod in the storefront namespace running an unexpected binary that is connecting to an unknown address. The forensics team wants to keep the container running for memory and disk analysis while making sure it can do no further harm and receives no customer traffic.",
    question: "What should responders do first?",
    options: [
      { id: 'A', text: "Scale the Deployment to zero so that the pod stops receiving traffic while its container keeps running on the node." },
      { id: 'B', text: "Restart the kubelet on the pod's node so that the container's network connections are dropped and re-established." },
      { id: 'C', text: "Relabel the pod so it leaves its Service and ReplicaSet, and apply a deny-all NetworkPolicy matching the new label." },
      { id: 'D', text: "Delete the pod immediately so that its ReplicaSet replaces it with a clean copy from the original container image." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Changing the pod's labels detaches it from the Service's selector, so no traffic reaches it, and from its ReplicaSet, which starts a clean replacement; a NetworkPolicy that selects the quarantine label and allows nothing cuts its ingress and egress while the container keeps running for evidence capture, and cordoning the node prevents new work landing there. Deleting the pod destroys volatile evidence. Scaling to zero deletes the pod rather than leaving it running. Restarting the kubelet does not isolate the container and may disturb the evidence.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/",
    tags: ["Incident response","Forensics","NetworkPolicy"]
  },
  {
    id: "cncf-kcsa-337",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "A compromised app rewriting its neighbours",
    scenario: "The order service's service account can update any ConfigMap in the shop namespace because a developer found that easier when adding feature flags. Other services in the namespace load startup scripts and proxy routes from ConfigMaps. An attacker achieves code execution in the order service.",
    question: "Why does the ConfigMap permission raise the severity of this incident?",
    options: [
      { id: 'A', text: "The attacker can alter scripts and routes that other services read, turning one compromise into several." },
      { id: 'B', text: "The attacker can modify the order service's image, because ConfigMaps store the image references pods use." },
      { id: 'C', text: "The attacker can create privileged pods, because update on configmaps allows changes to Pod Security labels." },
      { id: 'D', text: "The attacker can read Secrets that other services use for scripts and routes, since update implies get on secrets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When other workloads consume ConfigMaps as startup scripts, proxy configuration or feature flags, write access to them lets an attacker inject code or redirect traffic in those workloads the next time they read or restart, so the service account should be limited to the one ConfigMap it needs, with resourceNames. RBAC permissions on ConfigMaps grant nothing on Secrets. Image references live in pod templates, not in ConfigMaps. Pod Security labels are set on Namespace objects, which ConfigMap permissions do not cover.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/",
    tags: ["Malicious code execution","ConfigMaps","Lateral movement"]
  },
  {
    id: "cncf-kcsa-338",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Blocking unexpected binaries at run time",
    scenario: "A payments company already alerts on unexpected processes in containers, but by the time the on-call engineer responds, attackers have finished their work. It now wants the kernel to stop any process in its payment pods that is not one of a short list of approved binaries, while the pods keep running normally.",
    question: "Which kind of tool provides this enforcement?",
    options: [
      { id: 'A', text: "The Restricted Pod Security Standard on the payment namespace, which permits only binaries named in the image." },
      { id: 'B', text: "A Falco deployment with process rules and alert-driven enforcement through the on-call paging system." },
      { id: 'C', text: "An eBPF or LSM enforcement engine, such as Tetragon or KubeArmor, applying a process allow-list to the pods." },
      { id: 'D', text: "A Trivy scan of the payment images in CI, failing the build when an unapproved binary appears in any layer." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Runtime enforcement tools such as Tetragon, with eBPF-based policies that can kill offending processes, or KubeArmor, which uses Linux security modules, can block or terminate processes that are not on an allow-list inside selected pods. Falco detects and alerts, which is what the company already has. Image scanning checks what is in the image at build time and cannot stop a binary downloaded at run time. The Restricted Pod Security Standard governs pod settings such as privilege and capabilities; it has no notion of approved binaries.",
    referenceUrl: "https://tetragon.io/docs/concepts/enforcement/",
    tags: ["Malicious code execution","Runtime security","eBPF"]
  },
  {
    id: "cncf-kcsa-339",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "A seccomp profile tighter than the default",
    scenario: "A company runs a high-risk document-conversion service and wants a seccomp profile allowing only the syscalls that service actually uses, far stricter than RuntimeDefault. Engineers do not want to guess the syscall list by trial and error or maintain JSON files on every node by hand.",
    question: "Which approach fits best?",
    options: [
      { id: 'A', text: "Use a LimitRange in the namespace to define the allowed syscalls, which the kubelet then converts to a profile." },
      { id: 'B', text: "Set the seccompProfile type to RuntimeDefault and add the capabilities the service needs to its securityContext." },
      { id: 'C', text: "Record the service's syscalls with the Security Profiles Operator and let it distribute the profile to nodes." },
      { id: 'D', text: "Set the seccompProfile type to Unconfined and add AppArmor rules that block every syscall the service omits." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Security Profiles Operator, a Kubernetes SIG project, can record the syscalls a workload makes while it runs representative traffic, generate a tailored seccomp profile and distribute it to nodes as a custom resource, which pods then reference as a Localhost profile. Unconfined turns seccomp off, and AppArmor controls file paths and capabilities rather than acting as a syscall allow-list. RuntimeDefault is the generic profile the company wants to tighten, and adding capabilities widens privilege. LimitRange handles resource defaults and has no syscall settings.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/security/seccomp/",
    tags: ["Seccomp","Security Profiles Operator","Hardening"]
  },
  {
    id: "cncf-kcsa-340",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "A debugging pod that sees everyone's traffic",
    scenario: "A network team asks to run a troubleshooting pod with tcpdump on every node. Its manifest sets hostNetwork true and adds the NET_RAW and NET_ADMIN capabilities. The security team is asked what an attacker who compromised this pod could observe.",
    question: "What could the attacker observe from that pod?",
    options: [
      { id: 'A', text: "Only DNS traffic, because NET_RAW allows raw sockets for name resolution but not for capturing other packets." },
      { id: 'B', text: "Only traffic addressed to the troubleshooting pod itself, because each pod keeps a separate network namespace." },
      { id: 'C', text: "Only traffic between nodes, because pod-to-pod packets on one node never reach any interface tcpdump can see." },
      { id: 'D', text: "Traffic on the node's interfaces, including other pods' veth links on that node, readable unless it is encrypted." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "With hostNetwork the pod shares the node's network namespace, and with NET_RAW and NET_ADMIN it can put interfaces into capture mode, so it sees packets on the node's physical interfaces and the virtual links of every pod on the node; anything not encrypted end to end, such as plain HTTP between services, is readable. It does not keep its own network namespace, which is the point of hostNetwork. Same-node pod traffic crosses the node's virtual interfaces, where tcpdump can capture it. NET_RAW is not limited to DNS; it permits raw packet sockets in general.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Attacker on the network","hostNetwork","Capabilities"]
  },
  {
    id: "cncf-kcsa-341",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Workloads that never need to reach the API server",
    scenario: "Most application pods at an insurance company never call the Kubernetes API, yet any of them can open a connection to it through the kubernetes Service in the default namespace. After an incident in which an attacker used a compromised pod to probe the API anonymously, the security team wants that network path closed for ordinary workloads.",
    question: "Which approach closes the path while keeping it for the few controllers that need it?",
    options: [
      { id: 'A', text: "Apply default-deny egress and allow the API server's endpoint addresses only for the pods that need the API." },
      { id: 'B', text: "Remove the kubernetes.default record from CoreDNS, since pods can reach the API only through that DNS name." },
      { id: 'C', text: "Delete the kubernetes Service from the default namespace so that pods can no longer discover the API endpoint." },
      { id: 'D', text: "Set automountServiceAccountToken to false everywhere, which also blocks network connections to the API server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A default-deny egress policy stops ordinary pods from reaching anything not explicitly allowed, including the API server, while controllers that need the API get an egress rule to the API server's endpoint addresses and port, which is what most CNI plugins evaluate after Service translation. The kubernetes Service is managed by the API server, which recreates it, and deleting it would break legitimate clients. Removing tokens stops authenticated use but leaves the network path, and anonymous requests, open. Pods can reach the API by IP through injected environment variables without DNS.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["Attacker on the network","NetworkPolicy","kube-apiserver"]
  },
  {
    id: "cncf-kcsa-342",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Spotting a pod that scans the network",
    scenario: "A security team suspects that a compromised pod is scanning other services inside the cluster. Default-deny NetworkPolicies are in place, so most probes fail, but the team has no record of which connections were attempted or dropped, and it runs Cilium as its CNI.",
    question: "Where should the team look for evidence of the scanning?",
    options: [
      { id: 'A', text: "In the CNI's flow observability, such as Cilium Hubble, which shows allowed and dropped flows with verdicts." },
      { id: 'B', text: "In the kube-proxy logs on each node, which record every packet dropped by NetworkPolicy along with its source pod." },
      { id: 'C', text: "In the API server audit log, which records each pod-to-pod connection attempt as an event with the policy decision." },
      { id: 'D', text: "In the Cilium NetworkPolicy objects' status fields, which log each connection a policy allowed or dropped." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Standard NetworkPolicy has no logging, so evidence of blocked or allowed connections comes from the CNI's own observability; with Cilium, Hubble shows flows between workloads with their verdicts, which reveals a pod probing many destinations. NetworkPolicy objects keep no connection records in their status. Pod-to-pod traffic never passes through the API server, so audit logs cannot see it. Kube-proxy programs Service translation and does not enforce or log NetworkPolicy.",
    referenceUrl: "https://docs.cilium.io/en/stable/observability/hubble/",
    tags: ["Attacker on the network","Detection","Cilium"]
  },
  {
    id: "cncf-kcsa-343",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Metrics endpoints that reveal too much",
    scenario: "A red team shows that from any pod in the cluster they can scrape kube-state-metrics and several application metrics endpoints over plain HTTP, learning the names of every Secret, the labels of every workload and internal hostnames. The cluster has no NetworkPolicies.",
    question: "Which combination best reduces this exposure?",
    options: [
      { id: 'A', text: "Scale kube-state-metrics to a single replica so that fewer endpoints exist for the red team to discover and scrape." },
      { id: 'B', text: "Limit network reach to the monitoring system and put authentication, for example kube-rbac-proxy, in front of it." },
      { id: 'C', text: "Move the metrics endpoints from HTTP to gRPC so that ordinary scraping tools cannot parse the exposed metrics." },
      { id: 'D', text: "Rename the metrics ports to non-standard numbers so that automated scanners inside the cluster do not find them." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Metrics endpoints often leak reconnaissance data, and kube-state-metrics in particular exposes object names, labels and annotations across the cluster, so access should be limited to the monitoring system with NetworkPolicies and protected by authentication and authorization, for example kube-rbac-proxy checking the scraper's identity against RBAC. Non-standard ports are obscurity; DNS and scanning find them. Changing the protocol does not add access control. Replica count does not change who can reach the endpoint.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/system-metrics/",
    tags: ["Attacker on the network","Metrics","Information disclosure"]
  },
  {
    id: "cncf-kcsa-344",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Encryption to a database outside the cluster",
    scenario: "Application pods connect to a managed PostgreSQL instance outside the cluster over the company's shared network. An auditor warns that an attacker positioned on that network could intercept or impersonate the database. The client library currently uses sslmode=require.",
    question: "Which change addresses both interception and impersonation?",
    options: [
      { id: 'A', text: "Keep sslmode=require, since the client already verifies the certificate chain and hostname before sending data." },
      { id: 'B', text: "Enable the cluster's service mesh in STRICT mode, which encrypts and authenticates the managed database's side too." },
      { id: 'C', text: "Enable WireGuard node-to-node encryption in the CNI, which also encrypts connections from pods to external hosts." },
      { id: 'D', text: "Use sslmode=verify-full with the provider's CA so the client checks the server certificate and the hostname." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "With sslmode=require the connection is encrypted but the client does not verify the server certificate, so an attacker in the middle can present their own certificate; verify-full checks the certificate against a trusted CA and matches the hostname, defeating both interception and impersonation. A mesh's mutual TLS covers workloads that run its proxies, not a managed database outside the mesh. CNI WireGuard encryption protects traffic between cluster nodes and does not extend to external destinations.",
    referenceUrl: "https://www.postgresql.org/docs/current/libpq-ssl.html",
    tags: ["Attacker on the network","TLS","Databases"]
  },
  {
    id: "cncf-kcsa-345",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "A web shell that returns after every crash",
    scenario: "Responders keep killing the main container of a compromised PHP pod, and each time the kubelet restarts it the attacker's web shell is back in /var/www/uploads. After a new rollout replaced the pod, the web shell disappeared. The container image itself is verified clean.",
    question: "Where was the web shell most likely stored?",
    options: [
      { id: 'A', text: "In an emptyDir volume at the uploads path, which survives container restarts but is deleted with the pod." },
      { id: 'B', text: "In the container's writable layer, which survives container restarts and is removed only when the image changes." },
      { id: 'C', text: "In the node's image cache, which the kubelet reuses on restarts but refreshes on every rollout." },
      { id: 'D', text: "In a PersistentVolumeClaim mounted at the uploads path, which is cleared whenever the Deployment rolls out." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An emptyDir volume lives as long as the pod, so data written there survives restarts of its containers but is removed when the pod is deleted, exactly matching the shell returning after each crash and vanishing after the rollout. A restarted container gets a fresh writable layer from the image, so a shell stored there would not survive a restart. A PersistentVolumeClaim outlives pods and rollouts, so the shell would have stayed. The image cache holds the verified clean image, and containers cannot write into it.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#emptydir",
    tags: ["Malicious code execution","Volumes","Forensics"]
  },
  {
    id: "cncf-kcsa-346",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "A runtime flaw that overwrote the host binary",
    scenario: "A security team studies CVE-2019-5736, in which a malicious container running as root could overwrite the host's runc binary through /proc/self/exe and gain root on the node the next time runc ran. It wants to know which controls would have prevented or blunted such an escape on its own clusters.",
    question: "Which set of controls addresses this class of container escape?",
    options: [
      { id: 'A', text: "Enforce CPU and memory limits, add liveness probes, and spread replicas across nodes with pod anti-affinity." },
      { id: 'B', text: "Encrypt Secrets at rest with KMS, rotate service account tokens, and require TLS for every Service connection." },
      { id: 'C', text: "Use NetworkPolicies to deny egress, disable the kubelet read-only port, and move etcd to dedicated hosts." },
      { id: 'D', text: "Patch the runtime promptly, run containers as non-root or in user namespaces, and keep SELinux enforcing." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The runc vulnerability needed root inside the container and write access to the host binary, so patching the runtime removes the flaw, running as non-root or with user namespaces removes the privilege it depended on, and SELinux in enforcing mode on distributions that used container labels blocked the overwrite. Resource limits, probes and anti-affinity address availability. Encryption at rest and token rotation protect data and credentials, not the container boundary. Egress rules, the kubelet read-only port and etcd placement are unrelated to a runtime escape on the node.",
    referenceUrl: "https://kubernetes.io/blog/2019/02/11/runc-and-cve-2019-5736/",
    tags: ["Container escape","Container runtime","Patching"]
  },
  {
    id: "cncf-kcsa-347",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Redirecting a Service by editing its endpoints",
    scenario: "A payment Service in the checkout namespace has no selector; its Endpoints object is maintained by hand and points at the payment gateway's private IP. A developer with a custom Role that allows update on endpoints changed the address to a host she controlled, and checkout pods sent card data there for an hour.",
    question: "Which access-control change closes this path for users like her?",
    options: [
      { id: 'A', text: "Remove get access to services and endpoints from developers so they cannot see which Services lack selectors." },
      { id: 'B', text: "Remove write access to endpoints and endpointslices from developer roles, as the built-in edit role now does." },
      { id: 'C', text: "Remove list access to secrets from developer roles so that they cannot read the payment gateway's address." },
      { id: 'D', text: "Remove create access to pods from each developer role so they cannot deploy the attacker-controlled host." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Whoever can write Endpoints or EndpointSlices can point a Service at any address and intercept its traffic, which is why the built-in edit and admin roles no longer include write access to them in new clusters since Kubernetes 1.22 after CVE-2021-25740; custom Roles should follow suit. Hiding Services does not stop someone who already knows the name. The attacker host was outside the cluster, so pod creation rights were not needed. The gateway address was in the Endpoints object, not a Secret, and reading it is not the problem; changing it is.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles",
    tags: ["Attacker on the network","Endpoints","RBAC"]
  },
  {
    id: "cncf-kcsa-348",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "One ConfigMap that can redirect every name lookup",
    scenario: "During an RBAC review, a platform team finds that a monitoring vendor's service account can update any ConfigMap in kube-system. The cluster's CoreDNS reads its Corefile from a ConfigMap there and reloads it automatically when it changes.",
    question: "Why is this permission especially dangerous?",
    options: [
      { id: 'A', text: "An attacker using it could edit the Corefile so cluster lookups resolve to their own addresses and redirect traffic." },
      { id: 'B', text: "An attacker using it could change kubelet flags on every node, since kubelets load their settings from there." },
      { id: 'C', text: "An attacker using it could disable API server auditing, since the audit policy is stored as a ConfigMap there." },
      { id: 'D', text: "An attacker using it could read every Secret in kube-system, since the Corefile and other ConfigMaps embed them." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Write access to the coredns ConfigMap lets an attacker add rewrite, hosts or forwarding rules to the Corefile, which CoreDNS reloads, so service and external names across the whole cluster resolve to attacker-controlled addresses: a cluster-wide traffic interception position. Update on configmaps does not grant access to Secrets. Kubelet flags come from files and command lines on each node; the kubeadm kubelet-config ConfigMap is read only when nodes join or upgrade. The audit policy is a file on the control plane nodes, not a ConfigMap.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/dns-custom-nameservers/",
    tags: ["Attacker on the network","CoreDNS","RBAC"]
  },
  {
    id: "cncf-kcsa-349",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Encrypted between nodes, plaintext on the same node",
    scenario: "A healthcare company enabled transparent WireGuard encryption in its CNI so that pod traffic crossing its data centre network is encrypted. A consultant warns that this does not protect two pods on the same node from an attacker who has root on that node, and the CISO asks why.",
    question: "What is the consultant's reasoning?",
    options: [
      { id: 'A', text: "WireGuard encrypts only UDP traffic, so TCP connections between pods on the same node stay in cleartext on the host." },
      { id: 'B', text: "WireGuard keys are stored in etcd, so any attacker with node root can decrypt traffic for every node in the cluster." },
      { id: 'C', text: "Node-to-node encryption covers packets leaving a node, so same-node pod traffic stays in cleartext on the host." },
      { id: 'D', text: "WireGuard encryption covers only pods that run with hostNetwork, so ordinary pods on a node are never covered." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CNI transparent encryption, such as WireGuard in Cilium or Calico, encrypts pod traffic as it leaves one node for another; traffic between pods on the same node never crosses the network and is not encrypted, and root on a node can read it and, indeed, the decrypted traffic of every local pod. End-to-end protection against a compromised node needs application-level or mesh mTLS terminating inside the workloads. Ordinary pods are covered for inter-node traffic, not only host-network pods. Each node holds its own WireGuard private key locally. WireGuard tunnels carry TCP as well as UDP traffic.",
    referenceUrl: "https://docs.cilium.io/en/stable/security/network/encryption-wireguard/",
    tags: ["Attacker on the network","Encryption","WireGuard"]
  },
  {
    id: "cncf-kcsa-350",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Data leaving through name lookups",
    scenario: "A tightly controlled namespace uses default-deny egress with a single exception: UDP and TCP 53 to the cluster DNS pods. During a red-team exercise, a compromised pod still exfiltrated a database dump by encoding it into thousands of queries for subdomains of an attacker-owned domain.",
    question: "Which control addresses this remaining channel?",
    options: [
      { id: 'A', text: "Restrict and monitor what cluster DNS resolves externally, with DNS-aware egress rules and query logging." },
      { id: 'B', text: "Move the DNS pods to a dedicated namespace, since queries crossing a namespace boundary cannot be forwarded." },
      { id: 'C', text: "Remove the DNS exception from the egress policy, since pods can find Services through environment variables." },
      { id: 'D', text: "Allow DNS only over TCP, since tunnelling tools need UDP and cannot encode data into TCP queries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When cluster DNS forwards any external name upstream, queries to an attacker's domain carry encoded data out even though direct egress is blocked, so the fix is to control and watch resolution itself: DNS-aware policies, such as Cilium FQDN rules or a filtering upstream resolver, limit which external names pods may resolve, and CoreDNS query logging exposes high-volume or high-entropy lookups. Removing DNS breaks nearly every application, and environment variables cover only some Services. Tunnelling works over TCP DNS too. Namespaces do not stop CoreDNS from forwarding queries upstream.",
    referenceUrl: "https://docs.cilium.io/en/stable/security/dns/",
    tags: ["Attacker on the network","DNS","Exfiltration"]
  }
];

export default CNCF_KCSA_QUESTIONS_14;
