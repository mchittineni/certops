export const CNCF_KCSA_QUESTIONS_6 = [
  {
    id: "cncf-kcsa-126",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "CI runner pod that mounts the containerd socket",
    scenario: "A platform team runs self-hosted CI runners as pods so that pipelines can build and run test containers. To make this work, the runner pod mounts /run/containerd/containerd.sock from the node through a hostPath volume. A security review flags the design as critical even though the runner container is not privileged and runs as a non-root user.",
    question: "Why does the reviewer treat the socket mount as critical?",
    options: [
      { id: 'A', text: "Mounting any hostPath volume disables the pod's seccomp profile, so every syscall from the runner reaches the node kernel unfiltered." },
      { id: 'B', text: "Anyone who can talk to the runtime socket can start a privileged container with the host filesystem mounted, which is effectively root on the node." },
      { id: 'C', text: "The socket exposes the kubelet's serving certificate, so a pipeline could read it and impersonate the node when calling the API server." },
      { id: 'D', text: "The containerd socket carries etcd traffic for the node, so a pipeline could read cluster Secrets as they are replicated to that host." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The container runtime socket is an unauthenticated control channel: any process that can write to it can ask containerd to create containers with any settings, including privileged mode, host namespaces and a bind mount of the node's root filesystem. Being non-root and unprivileged inside the runner does not help once the socket is reachable, so the mount is equivalent to node root. The socket does not hand out the kubelet's certificate; those files live on disk under the kubelet's directories. A hostPath volume does not switch off seccomp, which is set per container in the security context. Containerd has nothing to do with etcd traffic; only the API server talks to etcd.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#hostpath",
    tags: ["Container runtime", "hostPath", "containerd", "Node compromise"]
  },
  {
    id: "cncf-kcsa-127",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Running customer-submitted code on shared nodes",
    scenario: "An online coding-education site executes code that students submit, inside short-lived pods on a shared node pool. The security team wants those pods to have a stronger boundary against kernel exploits than the default runc runtime gives, while ordinary platform pods keep using runc on the same cluster.",
    question: "Which Kubernetes mechanism lets the team apply the stronger boundary to only the student pods?",
    options: [
      { id: 'A', text: "A LimitRange in the student namespace that caps CPU and memory so a kernel exploit cannot exhaust resources on the shared node." },
      { id: 'B', text: "A PriorityClass with a low value assigned to student pods so that the scheduler places them on isolated nodes away from platform pods." },
      { id: 'C', text: "A ResourceQuota in the student namespace that restricts the number of pods, reducing how many exploit attempts can run at once." },
      { id: 'D', text: "A RuntimeClass whose handler points at gVisor's runsc, referenced through runtimeClassName in each student pod spec." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "RuntimeClass is the Kubernetes object for choosing a container runtime configuration per pod: its handler names a runtime configured in the CRI implementation, such as gVisor's runsc, and pods opt in with runtimeClassName while everything else keeps the default. gVisor intercepts system calls in a user-space kernel, so a kernel exploit from student code hits the sandbox rather than the host kernel. A PriorityClass only affects scheduling order and preemption, not isolation. A LimitRange and a ResourceQuota constrain resource consumption and object counts, which limits noisy neighbours but does nothing to stop a kernel escape.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/runtime-class/",
    tags: ["RuntimeClass", "gVisor", "Sandboxing"]
  },
  {
    id: "cncf-kcsa-128",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Tenant pods that each need their own guest kernel",
    scenario: "A hosting provider offers Kubernetes namespaces to external tenants on bare-metal nodes that support hardware virtualization. Its contract promises that every tenant pod runs behind a hypervisor-enforced boundary with a separate guest kernel, and tenants must be able to run unmodified Linux binaries that use a wide range of system calls.",
    question: "Which runtime configuration satisfies the contract?",
    options: [
      { id: 'A', text: "The default runc runtime with the RuntimeDefault seccomp profile and an AppArmor profile applied to each tenant container." },
      { id: 'B', text: "A RuntimeClass mapped to Kata Containers, which starts each pod inside a lightweight virtual machine with its own kernel." },
      { id: 'C', text: "The default runc runtime with user namespaces enabled through hostUsers set to false so container root maps to an unprivileged host UID." },
      { id: 'D', text: "A RuntimeClass mapped to gVisor, whose user-space application kernel intercepts every system call before it reaches the host." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kata Containers runs each pod in a lightweight virtual machine, so the boundary is enforced by the hypervisor using hardware virtualization and each pod gets a real guest Linux kernel, which also gives broad system-call compatibility for unmodified binaries. gVisor is a strong sandbox, but it is a user-space application kernel rather than a hypervisor-backed guest kernel, and it implements only a subset of Linux system calls. Seccomp and AppArmor on runc narrow what a container may do yet still share the host kernel. User namespaces remap container root to an unprivileged host UID, which reduces the impact of an escape but keeps the shared kernel.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/runtime-class/",
    tags: ["RuntimeClass", "Kata Containers", "Multi-tenancy", "Sandboxing"]
  },
  {
    id: "cncf-kcsa-129",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Inspecting containers when the API server is down",
    scenario: "During an incident the control plane of a cluster is unreachable, but responders have SSH access to a worker node running containerd. They need to see which containers are on that node, what images they came from and what they print, to decide whether a cryptominer is running there.",
    question: "What should the responders use on the node?",
    options: [
      { id: 'A', text: "kubectl with the node's kubelet kubeconfig, which falls back to listing pods and logs from the local kubelet cache when the API server is down." },
      { id: 'B', text: "etcdctl on the node, which reads the local copy of pod records that each worker keeps for recovery when the control plane is offline." },
      { id: 'C', text: "kubeadm, which queries the kubelet's local checkpoint files and reports the containers and images the node was last told to run." },
      { id: 'D', text: "crictl, which talks to the container runtime directly over the CRI socket and can list containers, show images and fetch logs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The kubelet drives the runtime through the Container Runtime Interface, a gRPC API exposed on a local Unix socket, and crictl is the CRI client built for debugging nodes at that layer: crictl ps, crictl images and crictl logs work without the API server. It also shows why that socket needs tight file permissions. kubectl always talks to the API server; a kubelet kubeconfig does not make it read local state. Worker nodes do not hold a copy of etcd, so etcdctl has nothing to read there. kubeadm bootstraps and upgrades clusters and does not list running containers.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/crictl/",
    tags: ["CRI", "crictl", "Incident response"]
  },
  {
    id: "cncf-kcsa-130",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Adopting the runtime's syscall filter by default",
    scenario: "An audit of a retail company's cluster shows that none of its pods set a seccomp profile, so containers run unconfined. The platform team wants a baseline syscall filter that blocks dangerous calls such as those used for kernel module loading, without writing or distributing custom profile files to every node.",
    question: "What should the team set in the pod security context?",
    options: [
      { id: 'A', text: "seccompProfile with type Localhost and a profile path, which loads a filter bundled inside the container runtime binary itself." },
      { id: 'B', text: "appArmorProfile with type RuntimeDefault, which filters system calls by number using the runtime's built-in syscall allowlist." },
      { id: 'C', text: "seccompProfile with type RuntimeDefault, which applies the container runtime's built-in default profile to each container." },
      { id: 'D', text: "seccompProfile with type Unconfined, which lets the runtime pick an appropriate filter for each container image when it starts." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Setting seccompProfile type RuntimeDefault tells the kubelet to apply the default seccomp profile shipped with the container runtime, such as containerd's or CRI-O's, which blocks a set of risky system calls while allowing what ordinary workloads need, and it requires no profile files on the nodes. Unconfined is exactly the current state: no filter at all. Localhost loads a profile file from the node's seccomp directory, so it is the option that does require distributing files. AppArmor is a separate Linux security module that confines file and capability access by path; it is not the syscall-number filter that seccomp provides.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/security/seccomp/",
    tags: ["seccomp", "Container runtime", "Security context"]
  },
  {
    id: "cncf-kcsa-131",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "kube-proxy metrics reachable from the node network",
    scenario: "A penetration tester scanning a bank's worker-node subnet finds that port 10249 on every node answers unauthenticated HTTP requests with kube-proxy's Prometheus metrics. The cluster's monitoring agent runs on each node with host networking and scrapes metrics locally.",
    question: "Which kube-proxy change closes the exposure without breaking the local scrape?",
    options: [
      { id: 'A', text: "Set healthzBindAddress in the kube-proxy configuration to 127.0.0.1:10256 so the endpoint listens only on loopback." },
      { id: 'B', text: "Apply a NetworkPolicy in kube-system that denies ingress to the kube-proxy pods on port 10249 from all sources." },
      { id: 'C', text: "Set metricsBindAddress in the kube-proxy configuration to 127.0.0.1:10249 so the endpoint listens only on loopback." },
      { id: 'D', text: "Switch kube-proxy from iptables mode to IPVS mode, which does not publish a metrics endpoint on the node at all." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "kube-proxy serves metrics on metricsBindAddress, and binding it to 127.0.0.1:10249, which is the upstream default, means only processes on the node itself, such as a host-network monitoring agent, can reach it. The healthz setting controls a different endpoint on port 10256 and leaves 10249 open. IPVS mode changes how Service traffic is programmed but kube-proxy still exposes metrics in every mode. kube-proxy runs with host networking, and NetworkPolicy generally does not apply to host-network pods, so a policy would not reliably block the port.",
    referenceUrl: "https://kubernetes.io/docs/reference/config-api/kube-proxy-config.v1alpha1/",
    tags: ["kube-proxy", "Metrics", "Hardening"]
  },
  {
    id: "cncf-kcsa-132",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "CIS finding on the kube-proxy credentials file",
    scenario: "A CIS Kubernetes Benchmark scan of self-managed worker nodes reports a failure for the file that holds kube-proxy's kubeconfig. The file currently has mode 0644 and is owned by a deploy user that several operators share for configuration management.",
    question: "What remediation matches the benchmark's intent?",
    options: [
      { id: 'A', text: "Delete the kubeconfig and let kube-proxy use anonymous requests, which the API server grants the node-proxier role." },
      { id: 'B', text: "Set mode 0755 so the kube-proxy process can execute the file and have the deploy user keep ownership for automation." },
      { id: 'C', text: "Set mode 0600 or stricter and make root:root the owner so only root on the node can read kube-proxy's credentials." },
      { id: 'D', text: "Keep mode 0644 but move the file under /etc/kubernetes/manifests so the kubelet manages it as a static pod definition." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The kube-proxy kubeconfig contains the credentials kube-proxy uses against the API server, so the CIS benchmark asks for permissions of 600 or more restrictive and root:root ownership; a world-readable file owned by a shared account lets any local user or operator lift those credentials. Moving the file into the static-pod manifest directory would make the kubelet try to parse it as a pod and does nothing for its permissions. Mode 0755 widens access and a kubeconfig is data, not an executable. Anonymous requests are not bound to system:node-proxier, and CIS recommends anonymous authentication be disabled on the API server.",
    referenceUrl: "https://www.cisecurity.org/benchmark/kubernetes",
    tags: ["kube-proxy", "CIS Benchmark", "File permissions"]
  },
  {
    id: "cncf-kcsa-133",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "NetworkPolicy objects that change nothing",
    scenario: "A startup applies a default-deny ingress NetworkPolicy to its payments namespace, yet pods in other namespaces can still connect to the payments API. The cluster was built by hand with kube-proxy in iptables mode and Flannel providing pod networking with its stock settings.",
    question: "Why is the policy not being enforced?",
    options: [
      { id: 'A', text: "NetworkPolicy applies only to Services of type ClusterIP, so the payments Service must be recreated as a ClusterIP Service." },
      { id: 'B', text: "Default-deny policies apply only to egress traffic, so the namespace needs an ingress rule listing the allowed namespaces." },
      { id: 'C', text: "The API server stores NetworkPolicy, but only a network plugin that implements it enforces it, and Flannel alone does not." },
      { id: 'D', text: "kube-proxy enforces NetworkPolicy for Flannel only in IPVS mode, so the cluster must switch proxy modes before it takes effect." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "NetworkPolicy is an API object with no built-in enforcement: the network plugin must implement it, and creating a policy without such a controller has no effect. Flannel on its own provides connectivity but not policy, so the team needs a policy-capable plugin such as Calico or Cilium. kube-proxy implements Service virtual IPs in every mode and never enforces NetworkPolicy. Policies select pods by label, not Services by type. A policy with policyTypes Ingress and no rules is a valid default deny for ingress, so the object itself is fine.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "CNI", "kube-proxy"]
  },
  {
    id: "cncf-kcsa-134",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "NodePorts answering on the public interface",
    scenario: "Each worker node in a telecom's cluster has two interfaces: a public one facing the internet and a private one on 10.20.0.0/16 used by the internal load balancers. Application teams create NodePort Services, and the security team finds those ports answering on the public addresses as well. Teams must keep using NodePort through the internal load balancers.",
    question: "Which change limits NodePort traffic to the private interface?",
    options: [
      { id: 'A', text: "Change the API server's service-node-port-range to a high range that internet scanners are less likely to probe for services." },
      { id: 'B', text: "Set externalTrafficPolicy to Local on every NodePort Service so that only nodes running a backend pod answer on the port." },
      { id: 'C', text: "Set loadBalancerSourceRanges to 10.20.0.0/16 on each NodePort Service so kube-proxy rejects clients outside that range." },
      { id: 'D', text: "Set nodePortAddresses in the kube-proxy configuration to 10.20.0.0/16 so NodePorts are only served on node IPs in that range." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "By default kube-proxy accepts NodePort traffic on all local addresses. The nodePortAddresses setting, or the --nodeport-addresses flag, restricts NodePorts to node IPs within the listed CIDRs, so listing the private range keeps the internal load balancers working while the public interface stops answering. Moving the port range is obscurity; the ports are still open. externalTrafficPolicy Local changes which nodes forward traffic and preserves client IPs but still listens on every interface of those nodes. loadBalancerSourceRanges applies to Services of type LoadBalancer, not to plain NodePort Services.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/virtual-ips/",
    tags: ["kube-proxy", "NodePort", "Network exposure"]
  },
  {
    id: "cncf-kcsa-135",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Source IPs lost behind a LoadBalancer Service",
    scenario: "A fintech exposes its login API through a Service of type LoadBalancer. The fraud team's rate limiter inside the pods keys on the client IP, but every request appears to come from a node address, so one attacker can spread requests across nodes and dodge the limit.",
    question: "Which Service setting preserves the original client IP for the pods?",
    options: [
      { id: 'A', text: "Set the Service type to NodePort so clients connect to nodes directly and kube-proxy leaves the connection unmodified." },
      { id: 'B', text: "Set internalTrafficPolicy to Local so traffic stays on the receiving node and is not masqueraded to another node's address." },
      { id: 'C', text: "Set sessionAffinity to ClientIP so kube-proxy pins each client to one backend pod and passes its address through to the pod." },
      { id: 'D', text: "Set externalTrafficPolicy to Local so kube-proxy forwards only to local endpoints without masquerading the source address." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "With the default externalTrafficPolicy Cluster, kube-proxy may forward external traffic to a pod on another node and source-NATs it to the node's IP. externalTrafficPolicy Local only forwards to endpoints on the node that received the traffic, so no SNAT is needed and the pod sees the real client address. sessionAffinity ClientIP keeps a client on one pod but does not stop the masquerade. internalTrafficPolicy governs traffic from inside the cluster, not external clients. A NodePort Service under the default policy is still source-NATed when traffic is forwarded across nodes.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/services/source-ip/",
    tags: ["kube-proxy", "externalTrafficPolicy", "Source IP"]
  },
  {
    id: "cncf-kcsa-136",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Loopback-only services reachable from neighbours",
    scenario: "A security researcher on the same layer-2 segment as an older cluster's nodes reaches a debug service that a node agent binds only to 127.0.0.1. Investigation shows kube-proxy had set the kernel parameter net.ipv4.conf.all.route_localnet to 1 on each node, a behaviour tracked as CVE-2020-8558.",
    question: "What does that kernel setting allow, and why does it matter here?",
    options: [
      { id: 'A', text: "It lets the node accept packets for 127.0.0.1 arriving on external interfaces, exposing loopback-bound services to neighbours." },
      { id: 'B', text: "It lets pods on the node share the host's loopback interface, so any container can reach localhost services as if running on the host." },
      { id: 'C', text: "It forwards the node's loopback traffic to the cluster CIDR, so localhost services become reachable through their Service IPs." },
      { id: 'D', text: "It disables reverse-path filtering on loopback, so packets spoofed with a 127.0.0.1 source are accepted by the kubelet API port." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "route_localnet permits the kernel to route traffic to and from 127.0.0.0/8 on non-loopback interfaces. Because kube-proxy enabled it for localhost NodePorts, a host on the same local network, or a pod on the node, could send packets to 127.0.0.1 via the node and reach services that were bound to loopback on the assumption that nothing off-host could connect. Fixed kube-proxy versions add rules to drop such traffic. It does not merge pod network namespaces with the host, which only hostNetwork does. It is not a reverse-path filtering switch aimed at the kubelet port. It does not map loopback services to Service IPs; Services only front the endpoints they select.",
    referenceUrl: "https://github.com/kubernetes/kubernetes/issues/92315",
    tags: ["kube-proxy", "CVE", "Network exposure"]
  },
  {
    id: "cncf-kcsa-137",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Right-sizing the identity of a custom service proxy",
    scenario: "A team replacing kube-proxy with an in-house proxy DaemonSet has bound its service account to cluster-admin during testing. Before production, the security team asks for the narrowest built-in permissions that still let the proxy watch Services, EndpointSlices and Nodes and record events, just as kube-proxy does.",
    question: "Which built-in ClusterRole should the proxy's service account be bound to?",
    options: [
      { id: 'A', text: "system:kube-controller-manager, which already watches Services and EndpointSlices for the endpoint controllers it runs." },
      { id: 'B', text: "system:node-proxier, which grants the access to Services, endpoints and Nodes that the kube-proxy component requires." },
      { id: 'C', text: "view, which grants read access to most namespaced objects and includes the cluster-scoped Nodes the proxy needs to watch." },
      { id: 'D', text: "system:node, which grants the read access a kubelet needs and therefore covers every object a service proxy must watch." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kubernetes ships system:node-proxier specifically for kube-proxy: it allows listing and watching Services, Endpoints, EndpointSlices and Nodes and creating events, which is what a replacement proxy needs and nothing more. system:node is intended for kubelets, is restricted by the Node authorizer, and carries permissions a proxy should not have, such as updating pod status. The view role is namespaced in its intent, does not include cluster-scoped Nodes and exposes objects the proxy never needs. The controller-manager role is far broader, covering the many controllers it runs.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#core-component-roles",
    tags: ["kube-proxy", "RBAC", "Least privilege"]
  },
  {
    id: "cncf-kcsa-138",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Tenants intercepting traffic with Service external IPs",
    scenario: "In a multi-tenant cluster, a tenant with permission to create Services in its own namespace sets spec.externalIPs to the address of a public DNS resolver. kube-proxy then redirects every pod's traffic for that address to the tenant's pods, a man-in-the-middle issue known as CVE-2020-8554. No workloads in the cluster legitimately use externalIPs.",
    question: "What is the most direct built-in control to stop this?",
    options: [
      { id: 'A', text: "Apply the restricted Pod Security Standard to tenant namespaces so pods cannot bind to addresses outside the pod CIDR." },
      { id: 'B', text: "Switch kube-proxy to IPVS mode, which ignores the externalIPs field and forwards only ClusterIP and NodePort traffic." },
      { id: 'C', text: "Enable the DenyServiceExternalIPs admission plugin on the API server so new Services that set externalIPs are rejected." },
      { id: 'D', text: "Enable the NodeRestriction admission plugin so nodes cannot program kube-proxy rules for Services outside their namespace." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The externalIPs field lets anyone who can create a Service claim an arbitrary IP, and kube-proxy on every node will capture traffic to it. The DenyServiceExternalIPs admission controller rejects any new use of the field, which is the upstream mitigation when no workload needs it; a policy engine such as Gatekeeper or Kyverno can instead allow a vetted list. NodeRestriction limits what kubelets may modify through the API and has nothing to do with Service specs. Pod Security Standards govern pod fields and cannot see Service objects. IPVS mode honours externalIPs as iptables mode does.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#denyserviceexternalips",
    tags: ["kube-proxy", "Admission control", "CVE", "Multi-tenancy"]
  },
  {
    id: "cncf-kcsa-139",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Refusing to start images that run as root",
    scenario: "A media company pulls many third-party images whose Dockerfiles never set a USER, so the processes run as UID 0. The platform team wants the node to refuse to start any container that would run as root, rather than finding out later in an audit.",
    question: "Which security context field enforces this at container start?",
    options: [
      { id: 'A', text: "privileged set to false, which strips root's elevated rights so the container process runs as an ordinary user." },
      { id: 'B', text: "allowPrivilegeEscalation set to false, which prevents any process in the container from running with a UID of 0." },
      { id: 'C', text: "readOnlyRootFilesystem set to true, which stops root inside the container from writing and so disables its rights." },
      { id: 'D', text: "runAsNonRoot set to true, which makes the kubelet check the effective user and block the container if it is root." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When runAsNonRoot is true, the kubelet validates at runtime that the container will not run as UID 0 and fails to start it if it would, which is exactly the refusal the team wants. privileged false is already the default and only withholds host-level privileges; the process can still be UID 0. A read-only root filesystem limits writes to the image layer but a root process remains root. allowPrivilegeEscalation false sets no_new_privs so a process cannot gain more privileges than its parent, but it does not stop a container that starts as root.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Pod security", "runAsNonRoot", "Security context"]
  },
  {
    id: "cncf-kcsa-140",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Blocking setuid binaries inside a web container",
    scenario: "A retailer's web image runs as UID 1000 but still ships a few setuid-root utilities from its base distribution. The security team worries that an attacker with code execution in the app could use one of them to become root inside the container, and wants a pod-spec control that stops that path without rebuilding the image.",
    question: "Which container security context setting addresses the concern?",
    options: [
      { id: 'A', text: "procMount set to Default, so the container's /proc is masked and setuid binaries cannot read the credentials of other processes." },
      { id: 'B', text: "fsGroup set to 1000, so the kubelet changes the ownership of the setuid binaries to a non-root group when the pod starts." },
      { id: 'C', text: "runAsGroup set to 1000, so every process in the container, including setuid binaries, is forced into an unprivileged group." },
      { id: 'D', text: "allowPrivilegeEscalation set to false, so the no_new_privs flag keeps setuid binaries from raising the process's privileges." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "allowPrivilegeEscalation false sets the Linux no_new_privs flag on the container process, which prevents execve of setuid or file-capability binaries from granting more privileges than the parent had, closing exactly this route without changing the image. runAsGroup sets the primary GID but a setuid-root binary still changes the effective UID. fsGroup changes ownership of mounted volumes, not files in the image layers. procMount Default is the normal masked /proc and has no bearing on setuid behaviour.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Pod security", "allowPrivilegeEscalation", "setuid"]
  },
  {
    id: "cncf-kcsa-141",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Read-only root filesystem for an app that writes temp files",
    scenario: "A logistics company wants attackers who gain code execution in its order service to be unable to drop tools or modify binaries in the container. The service does need to write scratch files to /tmp while processing uploads, and nothing written there has to survive a restart.",
    question: "Which pod configuration meets both needs?",
    options: [
      { id: 'A', text: "Set readOnlyRootFilesystem to true and mount a hostPath volume at /tmp so scratch files are written to the node's disk." },
      { id: 'B', text: "Set readOnlyRootFilesystem to true and mount a ConfigMap at /tmp so the application has a known, writable location." },
      { id: 'C', text: "Set readOnlyRootFilesystem to false and add a seccomp profile that blocks writes to every path except the /tmp directory." },
      { id: 'D', text: "Set readOnlyRootFilesystem to true and mount an emptyDir volume at /tmp so only that scratch path remains writable." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A read-only root filesystem stops writes anywhere in the container image, and an emptyDir mounted at /tmp gives the one writable, pod-scoped scratch space the service needs; its contents disappear with the pod, which matches the requirement. A hostPath volume writes onto the node and is disallowed by the baseline Pod Security Standard because it weakens isolation. Seccomp filters system calls by number and cannot express path-based rules. ConfigMap volumes are mounted read-only, so the application could not write there.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#emptydir",
    tags: ["Pod security", "readOnlyRootFilesystem", "emptyDir"]
  },
  {
    id: "cncf-kcsa-142",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Binding port 443 without the default capability set",
    scenario: "A legacy reverse proxy must listen directly on port 443 inside its container and runs as a non-root user. The security team wants the container to hold no Linux capabilities beyond what that one requirement needs, removing the default set the runtime grants.",
    question: "How should the capabilities be configured?",
    options: [
      { id: 'A', text: "Drop NET_RAW only and keep the remaining defaults, since NET_RAW is the capability that controls access to low ports." },
      { id: 'B', text: "Add NET_ADMIN and leave the runtime's default set in place, because NET_ADMIN covers binding to every privileged port." },
      { id: 'C', text: "Drop ALL capabilities and add back only NET_BIND_SERVICE, which permits binding to ports below 1024 as a non-root user." },
      { id: 'D', text: "Set privileged to true and drop ALL capabilities, so the proxy can bind any port while holding no capabilities at all." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Dropping ALL removes the runtime's default capability set, and adding back NET_BIND_SERVICE grants just the right to bind ports below 1024, which is the pattern the restricted Pod Security Standard allows. NET_ADMIN is a broad networking capability for changing interfaces and firewall rules and is not what grants low-port binding; keeping the defaults also fails the least-capability goal. privileged true gives the container effectively all host privileges regardless of dropped capabilities. NET_RAW governs raw sockets such as ping and spoofed packets; dropping it is good hygiene but has nothing to do with low ports.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Pod security", "Linux capabilities", "Least privilege"]
  },
  {
    id: "cncf-kcsa-143",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Static site pods that never call the API",
    scenario: "A marketing team runs an nginx Deployment that serves static pages and never talks to the Kubernetes API. A review points out that each pod still has a service account token mounted at /var/run/secrets/kubernetes.io/serviceaccount, which an attacker could use after compromising nginx.",
    question: "What is the simplest way to remove the token from these pods?",
    options: [
      { id: 'A', text: "Delete the default service account in the namespace so pods start without any Kubernetes identity or mounted token." },
      { id: 'B', text: "Bind the default service account to a Role with no rules so the token mounted into the pods grants no API access." },
      { id: 'C', text: "Set readOnlyRootFilesystem to true so the mounted token file cannot be read by processes inside the container." },
      { id: 'D', text: "Set automountServiceAccountToken to false in the pod spec so the kubelet does not mount a token into the pods." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "automountServiceAccountToken false, set on the pod or on its service account, tells Kubernetes not to project an API token into the pod, removing the credential entirely for workloads that never use it. The default service account is recreated automatically by the service account controller, so deleting it does not help. A read-only root filesystem prevents writes, not reads, and the token is on a separate projected volume anyway. An empty Role still leaves a valid token that authenticates as the service account and may pick up permissions granted to all service accounts or all authenticated users.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
    tags: ["Pod security", "Service accounts", "Tokens"]
  },
  {
    id: "cncf-kcsa-144",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Troubleshooting pod requesting the host PID namespace",
    scenario: "An observability vendor's troubleshooting pod asks for hostPID set to true so it can show every process on the node. The pod is not privileged and runs as a non-root user. The security team is deciding whether to allow it in a namespace shared by several product teams.",
    question: "What risk does hostPID introduce even without privileged mode?",
    options: [
      { id: 'A', text: "The pod can list all workloads on the node, reading their command lines and environment where file permissions let it." },
      { id: 'B', text: "The pod shares the node's IPC namespace, so it can attach to shared memory segments that other workloads rely upon." },
      { id: 'C', text: "The pod joins the node's network namespace, so it can bind to host ports and sniff traffic flowing to every other pod." },
      { id: 'D', text: "The pod can read and write the node's root filesystem, because the host PID namespace mounts / into the container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "hostPID puts the container in the node's process namespace, so it can list all host and container processes and read their command lines, which often contain secrets, and, for processes running as the same UID, their environment and memory; with more privileges it becomes a path to nsenter and full escape. That is why the baseline Pod Security Standard forbids it. Joining the network namespace is hostNetwork, a separate field. hostPID does not mount the host filesystem; that takes a hostPath volume. IPC sharing is controlled by hostIPC.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Pod security", "hostPID", "Host namespaces"]
  },
  {
    id: "cncf-kcsa-145",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Log shipper that mounts the node's root directory",
    scenario: "A contractor's log shipper DaemonSet mounts the node's / directory into the container through a hostPath volume so that it can find log files wherever they live. It is not privileged and does not use host namespaces. The cluster owner wants to understand what an attacker who compromised the shipper could do.",
    question: "What is the main risk of this volume?",
    options: [
      { id: 'A', text: "The shipper can consume unlimited node memory, because hostPath volumes are not counted against the container's limits." },
      { id: 'B', text: "The shipper can reach the API server as the node, because hostPath mounts add the kubelet's identity to the pod." },
      { id: 'C', text: "The shipper can read other pods' network traffic, because a hostPath mount of / joins the node's network namespace." },
      { id: 'D', text: "The shipper can read and change node files such as kubelet credentials and other pods' volumes, if file permissions allow." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A hostPath mount of / exposes the node's entire filesystem to the container, including the kubelet's kubeconfig and client certificates, container runtime state, and the data of every other pod on the node, subject only to file permissions and the container's UID; an attacker who steals the kubelet credentials can act as the node. That is why baseline Pod Security forbids hostPath. Memory limits are enforced by cgroups regardless of volume type. A volume mount does not change network namespaces. The kubelet's identity is not injected into pods; it is only reachable by reading its files, which is the real danger.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#hostpath",
    tags: ["Pod security", "hostPath", "Node compromise"]
  },
  {
    id: "cncf-kcsa-146",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "runAsNonRoot pod stuck in CreateContainerConfigError",
    scenario: "A team adds runAsNonRoot true to a Deployment whose image sets USER appuser, a named account with UID 10001 in the image's /etc/passwd. The pods fail with CreateContainerConfigError, and the event says the kubelet cannot verify that the user is non-root. The team does not want to drop the runAsNonRoot requirement.",
    question: "What change resolves the error while keeping the control?",
    options: [
      { id: 'A', text: "Set allowPrivilegeEscalation to false, which lets the kubelet trust that the named image user cannot gain root at runtime." },
      { id: 'B', text: "Set the RuntimeDefault seccomp profile, which lets the runtime resolve the image's username to a UID before the check." },
      { id: 'C', text: "Set fsGroup to 10001 at pod level, which tells the kubelet the group the named image user belongs to for verification." },
      { id: 'D', text: "Set runAsUser to 10001 in the security context, giving the kubelet a numeric UID that it can confirm is not root." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The kubelet enforces runAsNonRoot using the UID it can see: when the image specifies a non-numeric user and the pod does not set runAsUser, it cannot prove the user is not root and refuses to create the container. Setting runAsUser to the numeric UID, or changing the image to USER 10001, satisfies the check. allowPrivilegeEscalation is unrelated to identifying the starting user. fsGroup sets a supplemental group for volume ownership and says nothing about the UID. Seccomp filters system calls and does not resolve usernames for the kubelet.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Pod security", "runAsNonRoot", "Troubleshooting"]
  },
  {
    id: "cncf-kcsa-147",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Conflicting runAsUser at pod and container level",
    scenario: "A pod spec sets runAsUser 2000 in the pod-level securityContext. Its sidecar container sets runAsUser 3000 in its own securityContext, while the main container sets no user at all. An auditor asks which UID each container's process will run as.",
    question: "What UIDs will the processes use?",
    options: [
      { id: 'A', text: "The sidecar runs as 3000 and the main container falls back to the image's own USER, since pod-level values are advisory." },
      { id: 'B', text: "Both containers run as 2000, because the pod-level security context always overrides values set on individual containers." },
      { id: 'C', text: "The pod is rejected by the API server, because runAsUser may be set at pod level or container level but never both at once." },
      { id: 'D', text: "The sidecar runs as 3000 and the main container as 2000, because container-level values take precedence where both are set." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pod-level securityContext values apply to every container, and a container-level securityContext overrides the pod-level value for that container when both specify the same field. The sidecar therefore runs as UID 3000 and the main container inherits 2000. Pod-level settings do not trump container settings, and they are not advisory: they override the image's USER for containers that do not set their own value. Setting the field at both levels is valid and common.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Pod security", "Security context", "runAsUser"]
  },
  {
    id: "cncf-kcsa-148",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Non-root database cannot write to its volume",
    scenario: "A team hardens a database pod to run as UID 999 with runAsNonRoot, but it now crashes because its persistent volume's files are owned by root and are not group-writable. They want the volume made writable for the non-root process without running an init container as root to change ownership.",
    question: "Which pod security context field addresses this?",
    options: [
      { id: 'A', text: "runAsGroup, which gives the database process a primary group that the kubelet also stamps onto every file in the volume." },
      { id: 'B', text: "supplementalGroups set to 0, which adds the root group to the process so it can write to files owned by the root group." },
      { id: 'C', text: "fsGroup, which makes supported volumes owned by that group and adds it to the container's supplemental groups on startup." },
      { id: 'D', text: "privileged set to true only on the database container, which lets the non-root process bypass file ownership checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "With fsGroup set, the kubelet changes group ownership of supported volumes to that GID, makes them group-writable and adds the GID to every container's supplemental groups, so the non-root process can write; fsGroupChangePolicy OnRootMismatch avoids a slow recursive change on every start. runAsGroup sets the process's primary group but does not change the volume's ownership. Adding the root group gives broad access to root-group files across the container and does not help when files are not group-writable. privileged mode grants host-level power far beyond a file ownership fix.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Pod security", "fsGroup", "Volumes"]
  },
  {
    id: "cncf-kcsa-149",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Debug-friendly pod that shares one process namespace",
    scenario: "A developer sets shareProcessNamespace to true on a pod so a debugging sidecar can signal the main application. The main container holds a decrypted TLS private key in its filesystem, and both containers run as the same UID. The security team objects to leaving this setting on in production.",
    question: "What exposure does the setting create?",
    options: [
      { id: 'A', text: "The sidecar inherits the application's service account token, because shared-PID pods mount a single token for all members." },
      { id: 'B', text: "The sidecar can reach the application's loopback-only admin port, which it could not do before the namespaces were shared." },
      { id: 'C', text: "The sidecar gains the node's process view, because a shared process namespace in a pod is the same as setting hostPID." },
      { id: 'D', text: "The sidecar can read the application's files, including the key, through the /proc/PID/root link of the app's process." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "With a shared process namespace, containers in the pod see each other's processes, and container filesystems become visible through /proc/PID/root, so a sidecar with the same UID can read the application's private key; it can also read environment variables and send signals. Containers in a pod already share a network namespace, so loopback reachability exists with or without this setting. Service account token mounting is per container volume mount, not tied to the PID namespace. The shared namespace is scoped to the pod and is distinct from hostPID, which exposes the node's processes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/share-process-namespace/",
    tags: ["Pod security", "shareProcessNamespace", "Sidecars"]
  },
  {
    id: "cncf-kcsa-150",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Init container that only programs iptables rules",
    scenario: "A service-mesh-style init container writes iptables rules in the pod's network namespace to redirect traffic to a proxy, then exits. Its manifest currently sets privileged to true. The security team wants it to keep working while granting as little as possible.",
    question: "What should replace privileged mode?",
    options: [
      { id: 'A', text: "Add the NET_ADMIN and NET_RAW capabilities to the init container, which cover writing iptables rules in its namespace." },
      { id: 'B', text: "Add the SYS_ADMIN capability to the init container, which covers network configuration along with most admin actions." },
      { id: 'C', text: "Set hostNetwork to true, so the init container edits iptables rules on the node where it has the permissions it needs." },
      { id: 'D', text: "Set allowPrivilegeEscalation to true, so the init container can raise itself to root when it needs to change rules." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Changing iptables rules in the pod's own network namespace needs NET_ADMIN, and the iptables tooling commonly also needs NET_RAW; granting just those two replaces the full host privileges that privileged mode hands out. hostNetwork would make the container edit the node's rules, affecting every workload on the host, which is worse. SYS_ADMIN is an extremely broad capability often treated as nearly equivalent to root. allowPrivilegeEscalation only permits gaining privileges through setuid binaries or file capabilities and does not itself grant the capability to manage networking.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-capabilities-for-a-container",
    tags: ["Pod security", "Linux capabilities", "Init containers"]
  }
];

export default CNCF_KCSA_QUESTIONS_6;
