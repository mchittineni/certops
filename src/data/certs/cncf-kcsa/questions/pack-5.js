export const CNCF_KCSA_QUESTIONS_5 = [
  {
    id: "cncf-kcsa-101",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "What happens after the scheduler picks a node",
    scenario: "During a threat-modelling workshop at a charity, a volunteer assumes that kube-scheduler starts containers on worker nodes and therefore needs credentials for every container runtime. The facilitator wants to correct the data-flow diagram before the team assesses risks.",
    question: "What does the scheduler actually do, and which component starts the containers?",
    options: [
      { id: 'A', text: "The scheduler opens a session to the node's kubelet, which runs whatever containers the scheduler sends." },
      { id: 'B', text: "The scheduler pulls images to the chosen node, and the container runtime then starts them on request." },
      { id: 'C', text: "The scheduler writes the pod straight into etcd, and kube-proxy then creates the containers on the node." },
      { id: 'D', text: "The scheduler records a node binding through the API server, and the kubelet on that node then starts the pod." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kube-scheduler watches for pods without a node, chooses one, and creates a Binding through the API server; the kubelet on that node sees the pod assigned to it and asks the container runtime to pull images and start containers. The scheduler never contacts runtimes or pulls images. It does not write to etcd directly; only the API server does. kube-proxy programs Service networking and does not create containers. The scheduler has no connection to kubelets; all coordination happens through the API server.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/",
    tags: ["Scheduler", "Kubelet", "Architecture"]
  },
  {
    id: "cncf-kcsa-102",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "A tenant that pins pods to the secure node pool",
    scenario: "A shared cluster taints its PCI node pool with NoSchedule and relies on that taint to keep other tenants off it. A tenant with permission to create pods in its own namespace sets spec.nodeName to one of the PCI nodes, and its pod starts there despite having no toleration.",
    question: "Why did this work, and how should the platform team close the gap?",
    options: [
      { id: 'A', text: "The tenant's pod had a high priority class, which overrides taints; lower the priority in its namespace." },
      { id: 'B', text: "The PCI taint was not applied to all nodes; re-taint the pool and label the nodes with the tenant's name." },
      { id: 'C', text: "Setting nodeName skips the scheduler, which enforces NoSchedule; reject tenant pods that set nodeName." },
      { id: 'D', text: "NoSchedule applies only to Deployments, so bare pods with nodeName ignore it; require tenants to use them." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "NoSchedule taints are honoured by kube-scheduler; a pod created with spec.nodeName already set is never seen by the scheduler and goes straight to that node's kubelet, which does not enforce NoSchedule. Placement guarantees therefore need admission control, for example a ValidatingAdmissionPolicy or policy engine rule that rejects tenant pods setting nodeName or tolerations for protected pools. Taints apply to pods however they are created, since Deployments create ordinary pods. The scenario shows the taint was present and simply bypassed. Priority affects preemption and never overrides taints.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodename",
    tags: ["Scheduler", "Taints", "Admission control"]
  },
  {
    id: "cncf-kcsa-103",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "A pod rejected with SysctlForbidden",
    scenario: "A messaging team's pod sets kernel.msgmax in its securityContext sysctls and fails to start on every node with the status SysctlForbidden. The team asks the platform engineers to 'just turn off the check' across the whole cluster.",
    question: "Which component enforces this, and what is the safe way to allow it?",
    options: [
      { id: 'A', text: "The kubelet; allow only that sysctl with allowedUnsafeSysctls on a dedicated, tainted node pool." },
      { id: 'B', text: "The container runtime; run the pod as privileged so that the runtime skips its sysctl validation." },
      { id: 'C', text: "The API server; add the sysctl to --enable-admission-plugins so that every namespace may use it." },
      { id: 'D', text: "The scheduler; add the sysctl to the pod's tolerations so the scheduler lets it reach a suitable node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The kubelet admits pods only if their sysctls are on the safe list or explicitly allowed through its allowedUnsafeSysctls setting (the --allowed-unsafe-sysctls flag); allowing just the needed namespaced sysctl on a dedicated, tainted pool keeps the risk away from other workloads. Tolerations relate to taints, not sysctls, and the scheduler does not enforce this check. Admission plugin flags list plugins, not sysctls. Running privileged grants far more power than the one parameter, and the kubelet check still applies.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/",
    tags: ["Kubelet", "Sysctls", "Node hardening"]
  },
  {
    id: "cncf-kcsa-104",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Any valid client certificate can exec through a kubelet",
    scenario: "An audit of a self-managed cluster shows that kubelets require client certificates signed by the cluster CA, but any certificate from that CA, including ones issued to developers for read-only access, can call the kubelet's exec and logs endpoints on every node.",
    question: "Which kubelet setting should change?",
    options: [
      { id: 'A', text: "Set authentication.anonymous.enabled to false so that the kubelet refuses unauthenticated clients." },
      { id: 'B', text: "Set authorization.mode to Webhook so each call is checked with a SubjectAccessReview against RBAC." },
      { id: 'C', text: "Set streamingConnectionIdleTimeout to five minutes so exec sessions close after a short idle period." },
      { id: 'D', text: "Set clientCAFile to a new CA that signs only the API server's client cert and rotate every node." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Authentication is working; the gap is authorization. With authorization.mode set to AlwaysAllow, any authenticated caller can use every kubelet endpoint, while Webhook mode maps each request to a resource such as nodes/proxy or nodes/log and asks the API server, via SubjectAccessReview, whether RBAC allows it. Disabling anonymous access changes nothing, because these callers present valid certificates. A dedicated CA could work in principle but is disruptive and still leaves no fine-grained authorization. A shorter idle timeout limits session length, not who can start one.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/kubelet-authn-authz/",
    tags: ["Kubelet", "Authorization", "RBAC"]
  },
  {
    id: "cncf-kcsa-105",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "A manifest dropped into the kubelet's watch folder",
    scenario: "After gaining write access to /etc/kubernetes/manifests on one worker node, an attacker placed a pod manifest requesting privileged mode and a hostPath mount of /. The cluster enforces the Baseline Pod Security Standard on every namespace, yet the container is running on that node.",
    question: "Why did Pod Security enforcement not stop it?",
    options: [
      { id: 'A', text: "Static pods are scheduled by the scheduler, which ignores Pod Security labels on the target namespace." },
      { id: 'B', text: "Pod Security admission only evaluates pods created by Deployments, and static manifests are exempt." },
      { id: 'C', text: "The attacker's manifest used kube-system as its namespace, which admission always treats as exempt." },
      { id: 'D', text: "The kubelet runs static pods from local files itself; admission can only reject the API mirror pod." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Static pods are read from the kubelet's staticPodPath and started directly by the kubelet; the API server only receives a mirror pod for visibility, so rejecting that mirror pod at admission does not stop the container on the node. Protecting the directory with root-only permissions, disabling staticPodPath on workers that do not need it, and detecting changes to it are the real controls. Pod Security admission evaluates all pods, not just those from Deployments. kube-system is not automatically exempt; exemptions come only from the admission configuration. The scheduler plays no part in static pods.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/",
    tags: ["Kubelet", "Static pods", "Admission control"]
  },
  {
    id: "cncf-kcsa-106",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Admission webhook replicas stacked on one node",
    scenario: "A fintech runs three replicas of its fail-closed policy webhook, but the scheduler placed all three on the same worker node. When that node failed, every pod creation in the cluster was rejected until the node recovered twenty minutes later.",
    question: "Which scheduling change prevents a repeat?",
    options: [
      { id: 'A', text: "Add pod anti-affinity or topology spread constraints so replicas are placed across nodes and zones." },
      { id: 'B', text: "Set the webhook pods' priority class to system-cluster-critical so that they are never preempted." },
      { id: 'C', text: "Raise the webhook's replicas to ten so at least one is likely to be placed on a different node." },
      { id: 'D', text: "Give the webhook pods a nodeSelector for the control plane nodes so they run beside the API server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Required pod anti-affinity on the hostname topology key, or topologySpreadConstraints across hostnames and zones, tells the scheduler to spread the replicas so a single node or zone failure cannot take the fail-closed webhook down entirely. Placing application pods on control plane nodes weakens isolation of the most sensitive hosts. More replicas make spreading likely but guarantee nothing without a constraint. A critical priority protects against preemption, not against co-location on a node that then fails.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/",
    tags: ["Scheduler", "Availability", "Admission webhooks"]
  },
  {
    id: "cncf-kcsa-107",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Isolating a suspect node without destroying evidence",
    scenario: "Runtime alerts suggest a worker node at a media company may be compromised. The incident commander wants no new pods placed on it, but the pods already running there must stay in place so responders can capture their memory and filesystem state.",
    question: "What should the responders do first?",
    options: [
      { id: 'A', text: "Run kubectl cordon on the node so the scheduler stops placing new pods but existing pods keep running." },
      { id: 'B', text: "Run kubectl delete node so the cluster forgets the node and recreates its pods elsewhere immediately." },
      { id: 'C', text: "Run kubectl drain on the node so that its pods are evicted safely to other healthy nodes right away." },
      { id: 'D', text: "Apply a NoExecute taint to the node so that all running pods without a toleration are evicted at once." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cordoning marks the node unschedulable, so kube-scheduler places no new pods there while existing pods keep running for evidence collection; network isolation of the node usually follows. Draining evicts the pods and destroys their in-memory state. A NoExecute taint likewise evicts pods that do not tolerate it. Deleting the Node object causes its pods to be removed and recreated elsewhere, losing the evidence and the cluster's view of the host.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_cordon/",
    tags: ["Scheduler", "Incident response", "Node isolation"]
  },
  {
    id: "cncf-kcsa-108",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Kernel parameters the kubelet silently rewrites",
    scenario: "A bank hardens its worker node images with specific kernel parameters set through sysctl, and a CIS scan now flags that the kubelet is not configured with protectKernelDefaults. The team wants to know what that setting would change.",
    question: "What does enabling protectKernelDefaults do?",
    options: [
      { id: 'A', text: "It makes the kubelet fail if kernel settings differ from what it needs, instead of changing them itself." },
      { id: 'B', text: "It prevents pods from setting any sysctl through their securityContext, including safe namespaced ones." },
      { id: 'C', text: "It enables the default seccomp profile for every container that the kubelet starts on the node." },
      { id: 'D', text: "It makes the kubelet reset every kernel parameter on the node to the distribution's defaults at boot." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "With protectKernelDefaults set to true, the kubelet refuses to start if required kernel tunables do not match its expected values, rather than modifying them, so the node's hardened kernel configuration stays under the administrators' control and drift is caught at startup. It does not reset parameters to distribution defaults. Pod sysctls are governed by the safe list and --allowed-unsafe-sysctls. The kubelet's seccomp default is a separate setting, seccompDefault.",
    referenceUrl: "https://kubernetes.io/docs/reference/config-api/kubelet-config.v1beta1/",
    tags: ["Kubelet", "Node hardening", "CIS Benchmark"]
  },
  {
    id: "cncf-kcsa-109",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Exec sessions left open for hours",
    scenario: "Session monitoring at a SaaS company shows kubectl exec and port-forward connections to production pods sitting idle for up to four hours, often on laptops that were simply left unlocked. The CIS benchmark for the kubelet includes a check that addresses this.",
    question: "Which kubelet setting should be tuned?",
    options: [
      { id: 'A', text: "Lower imageMinimumGCAge so that the images used by long-running debug sessions are cleaned up sooner." },
      { id: 'B', text: "Lower the API server's --request-timeout so every exec request fails after one minute of total time." },
      { id: 'C', text: "Lower nodeStatusUpdateFrequency so the kubelet reports its status and closes idle sessions more often." },
      { id: 'D', text: "Lower streamingConnectionIdleTimeout so idle exec, attach and port-forward streams are closed sooner." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "streamingConnectionIdleTimeout (four hours by default) sets how long an idle streaming connection such as exec, attach or port-forward may stay open; the CIS benchmark asks that it not be disabled, and a shorter value like five minutes limits abandoned sessions. Node status frequency controls heartbeats, not streaming sessions. Image garbage collection age has nothing to do with open connections. The API server's request timeout does not apply to long-running streaming requests in the same way and would not target idle sessions specifically.",
    referenceUrl: "https://kubernetes.io/docs/reference/config-api/kubelet-config.v1beta1/",
    tags: ["Kubelet", "Session management", "CIS Benchmark"]
  },
  {
    id: "cncf-kcsa-110",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Relying on the firewall to guard port 10250",
    scenario: "A platform team argues that kubelet authentication can stay loose because the cloud firewall blocks port 10250 from every source except the control plane subnet. The cluster also runs several monitoring DaemonSets with hostNetwork: true on every worker node.",
    question: "Why is the argument flawed?",
    options: [
      { id: 'A', text: "The cloud firewall rules are ignored for TLS traffic, so port 10250 is reachable from the internet anyway." },
      { id: 'B', text: "Pods on the node, especially hostNetwork ones, can reach the kubelet locally without crossing that firewall." },
      { id: 'C', text: "Kubelets forward hostNetwork pods' requests to the API server, so the firewall must block port 6443 too." },
      { id: 'D', text: "The control plane subnet is shared with etcd, and etcd members can call the kubelet API without any token." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The perimeter firewall only filters traffic between machines; a pod on the node, and trivially one using hostNetwork, can connect to the kubelet on the node's own address without passing through it, and a compromise of any such pod would then reach the kubelet's exec and pod-listing endpoints. The kubelet must therefore authenticate and authorize every request itself. Cloud firewalls do filter TLS traffic by port. Kubelets do not forward client requests to the API server; they answer them locally, consulting the API server only for authorization decisions. etcd members have no special kubelet access.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/kubelet-authn-authz/",
    tags: ["Kubelet", "Defense in depth", "hostNetwork"]
  },
  {
    id: "cncf-kcsa-111",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "World-readable kubelet configuration on workers",
    scenario: "A CIS node scan at a logistics firm reports that /var/lib/kubelet/config.yaml and /etc/kubernetes/kubelet.conf are readable and writable by every local user on the worker nodes. The second file contains the node's client credentials for the API server.",
    question: "What should the operators do?",
    options: [
      { id: 'A', text: "Make the files immutable with chattr so they cannot change, while leaving them readable by everyone." },
      { id: 'B', text: "Move both files into a ConfigMap in kube-system so RBAC decides which users are able to read them." },
      { id: 'C', text: "Restrict both files to root ownership with mode 600 or stricter, as the CIS benchmark's node checks require." },
      { id: 'D', text: "Keep the modes, because kubelet files are regenerated on each restart and so any change does not last." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The kubelet configuration controls authentication, authorization and many security settings, and kubelet.conf holds the node's credentials, so both must be owned by root and restricted to mode 600 or stricter; a local user who can read the credentials can act as the node, and one who can write the config can weaken the kubelet. The files persist across restarts. A ConfigMap would expose node credentials through the API to anyone with the view role. An immutable but world-readable credential file still leaks the node's identity.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/kubelet-tls-bootstrapping/",
    tags: ["Kubelet", "File permissions", "CIS Benchmark"]
  },
  {
    id: "cncf-kcsa-112",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Nodes that no one ever needs to exec into",
    scenario: "A research institute runs a dedicated pool of batch nodes whose jobs are fully automated. Nobody runs kubectl exec, attach, port-forward or logs against these pods, because results and logs are shipped to object storage. Security wants to remove unused kubelet functionality from these nodes.",
    question: "Which kubelet setting removes those endpoints?",
    options: [
      { id: 'A', text: "Set readOnlyPort to 0 so the kubelet stops serving the exec, attach and logs endpoints to callers." },
      { id: 'B', text: "Set enableDebuggingHandlers to false so the kubelet stops serving exec, attach, logs and port-forward." },
      { id: 'C', text: "Set failSwapOn to true so the kubelet refuses debugging requests while memory swapping is available." },
      { id: 'D', text: "Set serializeImagePulls to true so that only one command can be executed in the node's pods at a time." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "enableDebuggingHandlers, true by default, turns on the kubelet server endpoints for container logs, exec, attach, run and port-forward; setting it to false on nodes where nobody needs them removes that attack surface, at the cost of kubectl exec and logs no longer working there. The read-only port is a separate, unauthenticated listener for status data and does not host exec. serializeImagePulls controls whether images are pulled one at a time. failSwapOn makes the kubelet refuse to start when swap is enabled and has nothing to do with debugging endpoints.",
    referenceUrl: "https://kubernetes.io/docs/reference/config-api/kubelet-config.v1beta1/",
    tags: ["Kubelet", "Attack surface", "Node hardening"]
  },
  {
    id: "cncf-kcsa-113",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Prometheus tokens rejected by the kubelet",
    scenario: "A telco configures Prometheus to scrape each kubelet's /metrics endpoint using its service account token, and RBAC grants that service account get on nodes/metrics. Every scrape fails with 401 Unauthorized, while requests using client certificates succeed.",
    question: "Which kubelet setting is most likely missing?",
    options: [
      { id: 'A', text: "authentication.webhook.enabled, which lets the kubelet validate bearer tokens with a TokenReview." },
      { id: 'B', text: "authorization.mode set to AlwaysAllow, so that the kubelet accepts any token from any service account." },
      { id: 'C', text: "authentication.anonymous.enabled, so the kubelet treats the Prometheus requests as system:anonymous." },
      { id: 'D', text: "readOnlyPort set to 10255, so Prometheus can scrape metrics over plain HTTP with no authentication." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A 401 means authentication failed. The kubelet accepts bearer tokens only when webhook authentication is enabled, in which case it sends each token to the API server as a TokenReview; with only x509 authentication configured, certificates work and tokens are rejected. AlwaysAllow is an authorization setting and would remove all access control. Reopening the unauthenticated read-only port trades the problem for a larger exposure. Anonymous access would not identify Prometheus and would be denied or, worse, allowed for everyone.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/kubelet-authn-authz/",
    tags: ["Kubelet", "Authentication", "Monitoring"]
  },
  {
    id: "cncf-kcsa-114",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "A second scheduler with cluster-wide binding rights",
    scenario: "A machine-learning team wants to deploy its own scheduler for GPU bin-packing and asks for a service account bound to the system:kube-scheduler ClusterRole. The platform team knows that any pod may name a scheduler through spec.schedulerName.",
    question: "What is the main security consideration?",
    options: [
      { id: 'A', text: "A second scheduler reads every Secret in the cluster through its role, so all Secrets must be rotated." },
      { id: 'B', text: "The custom scheduler bypasses the API server and writes bindings to etcd, so etcd access must be granted." },
      { id: 'C', text: "Two schedulers cannot run at once, so the default scheduler must be disabled while the custom one runs." },
      { id: 'D', text: "Its binding rights let it place any pod on any node, so treat it as privileged and restrict which pods use it." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A scheduler with the permissions of system:kube-scheduler can bind pods to any node, so a compromised or buggy custom scheduler could place pods on sensitive or control plane nodes, ignoring the taints and affinity rules the default scheduler enforces; it should get narrowly scoped RBAC and admission rules should control which pods may set its schedulerName. The scheduler role is not designed to read Secrets. Multiple schedulers can run side by side, each handling pods that name it. Custom schedulers bind pods through the API server like the default one.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/configure-multiple-schedulers/",
    tags: ["Scheduler", "RBAC", "Least privilege"]
  },
  {
    id: "cncf-kcsa-115",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Scraping scheduler metrics without opening it up",
    scenario: "A retailer's monitoring team needs to scrape kube-scheduler's /metrics endpoint on its secure port. An engineer proposes adding /metrics to the scheduler's --authorization-always-allow-paths so Prometheus needs no credentials, and asks whether there is a better way.",
    question: "What should the team do instead?",
    options: [
      { id: 'A', text: "Add /metrics to the always-allow list but restrict the scheduler's port with a NetworkPolicy instead." },
      { id: 'B', text: "Grant Prometheus's service account get on the /metrics non-resource URL, checked via the API server." },
      { id: 'C', text: "Bind the scheduler to 0.0.0.0 and set --secure-port=0, so metrics are served on every interface freely." },
      { id: 'D', text: "Point Prometheus at the old insecure port 10251, which serves metrics over HTTP without credentials." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kube-scheduler, like the controller manager, delegates authentication and authorization of its secure port to the API server through TokenReview and SubjectAccessReview; a ClusterRole allowing get on the nonResourceURL /metrics, bound to Prometheus's service account, lets it scrape with its token while everyone else is refused. The insecure port has been removed from current releases. Setting the secure port to 0 disables the listener entirely. Always-allowing /metrics makes it anonymous, and the scheduler's static pod uses host networking, so a NetworkPolicy would not protect it.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-scheduler/",
    tags: ["Scheduler", "Metrics", "Authorization"]
  },
  {
    id: "cncf-kcsa-116",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Sandboxed pods landing on nodes without the handler",
    scenario: "A hosting company defines a RuntimeClass for a sandboxed runtime that is installed only on a dedicated node pool. Customer pods that reference the RuntimeClass sometimes get scheduled onto ordinary nodes and then fail to start, and the team wants placement handled automatically.",
    question: "What should the team configure?",
    options: [
      { id: 'A', text: "Set the RuntimeClass scheduling field with the pool's nodeSelector and tolerations for its taints." },
      { id: 'B', text: "Install the RuntimeClass handler on every node outside the pool so placement stops mattering at all." },
      { id: 'C', text: "Add a nodeName for one sandbox node to every customer pod so they always run on the right host." },
      { id: 'D', text: "Enable the NodeRestriction admission plugin so kubelets without the handler refuse sandboxed pods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A RuntimeClass can carry a scheduling section whose nodeSelector and tolerations are merged into every pod that uses it, so the scheduler places those pods only on nodes that support the handler and that tolerate the pool's taints. Hard-coding nodeName bypasses the scheduler and ties every pod to one node. NodeRestriction controls what kubelets may change through the API and does not influence scheduling. Installing the sandbox everywhere may be possible but removes the dedicated pool's separation and cost model rather than fixing placement.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/runtime-class/#scheduling",
    tags: ["Scheduler", "RuntimeClass", "Isolation"]
  },
  {
    id: "cncf-kcsa-117",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Scheduler endpoints reachable across the network",
    scenario: "A penetration test of a self-managed cluster finds kube-scheduler's secure port answering from the worker subnet, and its Go profiling endpoints are enabled. The scheduler's health is checked only by a local liveness probe, and no remote system uses the profiling data.",
    question: "Which pair of scheduler settings addresses both findings?",
    options: [
      { id: 'A', text: "Set --bind-address=127.0.0.1 and --profiling=false so the port is local-only and pprof is turned off." },
      { id: 'B', text: "Set --config to a new KubeSchedulerConfiguration that disables the default plugins and adds a profile." },
      { id: 'C', text: "Set --leader-elect=false and --secure-port=0 so one instance runs with no listener and no profiling data." },
      { id: 'D', text: "Set --authorization-always-allow-paths=/healthz and --kubeconfig to a new file for the scheduler to use." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Binding the scheduler to 127.0.0.1 keeps its health endpoints available to the local probe while removing them from the network, and --profiling=false turns off the pprof handlers; both are CIS benchmark recommendations. Disabling the secure port breaks the liveness probe, and disabling leader election undermines high availability. Always-allowed paths make endpoints anonymous rather than restricting them, and changing the kubeconfig does not affect the listener. Scheduling profiles and plugins decide placement logic, not network exposure.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-scheduler/",
    tags: ["Scheduler", "Network exposure", "CIS Benchmark"]
  },
  {
    id: "cncf-kcsa-118",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Forcing a namespace's pods onto its node group",
    scenario: "A government cluster must guarantee that every pod in the classified namespace lands on nodes labelled tier=classified, whatever the pod spec says, and that pods in other namespaces cannot request those nodes through a node selector.",
    question: "Which approach enforces this at admission time?",
    options: [
      { id: 'A', text: "Label the classified namespace with the Restricted Pod Security level so pods stay off other nodes." },
      { id: 'B', text: "Use a namespace node selector enforced by admission, such as PodNodeSelector or a policy engine rule." },
      { id: 'C', text: "Taint the classified nodes and trust that no team adds a toleration for that taint to its own pods." },
      { id: 'D', text: "Ask each team to add a nodeSelector for tier=classified to its pod templates and review manifests monthly." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An admission-time control, such as the PodNodeSelector plugin with a namespace annotation or an equivalent Kyverno or Gatekeeper rule, adds or validates the required node selector for every pod in the classified namespace and can reject pods elsewhere that ask for those nodes, so placement no longer depends on each team's manifests. Voluntary selectors with monthly review leave gaps between reviews. A taint repels pods without tolerations but does not force classified pods onto those nodes, and anyone can add a toleration. Pod Security levels govern privileges, not node placement.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#podnodeselector",
    tags: ["Scheduler", "Admission control", "Node isolation"]
  },
  {
    id: "cncf-kcsa-119",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "A kubelet CVE on a managed cluster",
    scenario: "A security advisory announces a high-severity vulnerability in the kubelet. A startup's managed Kubernetes provider has already patched the control plane, and the CTO assumes nothing else needs to be done because the provider manages the cluster.",
    question: "What must the startup still do?",
    options: [
      { id: 'A', text: "Nothing, because the kubelet runs inside the managed control plane that the provider has already patched." },
      { id: 'B', text: "Upgrade the kubelet on every worker node, for example by rolling each node pool to a patched node image." },
      { id: 'C', text: "Restart all application pods so that the patched kubelet version is injected into each pod's sandbox." },
      { id: 'D', text: "Rotate every service account token, because a kubelet vulnerability is fixed by reissuing credentials." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The kubelet runs on every worker node, so unless the provider manages the nodes as well, the customer must roll node pools to a patched version; control plane upgrades do not update kubelets, which may lag the API server by up to three minor versions. The kubelet is not part of the managed control plane. It is a node daemon, not something injected into pods, so restarting pods changes nothing. Rotating tokens does not remove a code vulnerability in the kubelet.",
    referenceUrl: "https://kubernetes.io/releases/version-skew-policy/",
    tags: ["Kubelet", "Patching", "Shared responsibility"]
  },
  {
    id: "cncf-kcsa-120",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Every node joined with the same kubelet credential",
    scenario: "A manufacturer built its worker nodes from a golden image containing one shared kubeconfig for the user kubelet, which is bound to a broad ClusterRole. The team has now enabled the Node authorizer and NodeRestriction, but a test shows one node can still modify another node's pods.",
    question: "What must change for these controls to take effect?",
    options: [
      { id: 'A', text: "Give each node its own credential as system:node:NODE_NAME in system:nodes, via TLS bootstrapping." },
      { id: 'B', text: "Rename the shared user to system:node so that the Node authorizer recognises every node as one identity." },
      { id: 'C', text: "Add the Node authorizer after RBAC in --authorization-mode so it runs as the final, deciding check." },
      { id: 'D', text: "Enable anonymous authentication on the kubelets so that node identities are derived from their IPs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Node authorizer and NodeRestriction only restrict requests from identities named system:node:NODE_NAME in the system:nodes group, and they limit each node to objects related to its own name; a shared kubelet identity is not recognised, and its broad RBAC binding allows everything. Issuing each node a distinct certificate, usually through kubelet TLS bootstrapping, and removing the old binding makes the controls effective. Moving the Node authorizer later does not help when the identity is not a node identity at all. A single shared system:node name still cannot distinguish nodes. Anonymous access would remove authentication rather than create per-node identities.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/node/",
    tags: ["Kubelet", "Node authorizer", "Identity"]
  },
  {
    id: "cncf-kcsa-121",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "kubectl logs breaks after hardening the kubelet",
    scenario: "On a cluster built by hand, the team switched every kubelet to anonymous access disabled and Webhook authorization. Pods keep running, but kubectl logs and kubectl exec now fail with a Forbidden error naming the user in the API server's kubelet client certificate.",
    question: "What completes the hardening?",
    options: [
      { id: 'A', text: "Bind the API server's kubelet client identity to a role such as system:kubelet-api-admin through RBAC." },
      { id: 'B', text: "Re-enable anonymous access on the kubelets, since the API server cannot present credentials to them." },
      { id: 'C', text: "Add the API server's user to system:masters in each kubelet's config so that it bypasses the webhook." },
      { id: 'D', text: "Switch the kubelets back to AlwaysAllow, because Webhook mode never authorizes the API server's calls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When kubectl logs or exec runs, the API server connects to the kubelet using its kubelet client certificate, and in Webhook mode the kubelet asks the API server whether that identity may use nodes/log or nodes/proxy. The error shows authentication succeeded and authorization failed, so binding the API server's user to the built-in system:kubelet-api-admin ClusterRole (or an equivalent role) completes the setup. Re-enabling anonymous access or AlwaysAllow reverses the hardening. Group membership comes from the certificate and RBAC, not kubelet configuration, and system:masters is far broader than needed.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/kubelet-authn-authz/",
    tags: ["Kubelet", "Authorization", "RBAC"]
  },
  {
    id: "cncf-kcsa-122",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "The kubelet's health port seen from the network",
    scenario: "A network scan of a bank's worker nodes finds that the kubelet's health endpoint on port 10248 answers from other hosts. Only the local systemd watchdog and node problem detector on each node need to query it.",
    question: "Which kubelet setting should be applied?",
    options: [
      { id: 'A', text: "Set healthzPort to 10250 so the health endpoint moves behind the authenticated kubelet API port." },
      { id: 'B', text: "Set readOnlyPort to 10248 so that the health endpoint and read-only data share a single listener." },
      { id: 'C', text: "Set healthzBindAddress to 127.0.0.1 so the health endpoint listens only on the node's loopback." },
      { id: 'D', text: "Set address to 127.0.0.1 so the whole kubelet API stops answering requests from the API server." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "healthzBindAddress (127.0.0.1 by default) and healthzPort (10248) define the kubelet's unauthenticated health listener; binding it to loopback serves local checks while hiding it from the network, so the scan finding shows it was changed. The health server cannot share the authenticated API port. Pointing the read-only port at it merges two unauthenticated endpoints and exposes more data. Binding the main kubelet address to loopback would break the API server's logs, exec and metrics access.",
    referenceUrl: "https://kubernetes.io/docs/reference/config-api/kubelet-config.v1beta1/",
    tags: ["Kubelet", "Network exposure"]
  },
  {
    id: "cncf-kcsa-123",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "A revoked binding that still works for minutes",
    scenario: "During an incident at an e-commerce firm, an administrator removed the RoleBinding that let a compromised service account read pod logs. For a few minutes afterwards, the attacker could still fetch logs directly from a kubelet's API, although requests through the API server were denied at once.",
    question: "What explains the delay?",
    options: [
      { id: 'A', text: "Service account tokens embed their permissions, so the old token carried the log access until expiry." },
      { id: 'B', text: "The kubelet caches webhook authorization decisions, keeping allowed results for about five minutes." },
      { id: 'C', text: "The kubelet stores a local copy of all RoleBindings and refreshes it only when the node restarts." },
      { id: 'D', text: "RBAC changes take up to thirty minutes to replicate between etcd members before any component sees them." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Webhook mode the kubelet caches SubjectAccessReview results, by default for five minutes for allowed decisions and thirty seconds for denials (authorization.webhook.cacheAuthorizedTTL and cacheUnauthorizedTTL), so a revoked permission can keep working against the kubelet until the cache entry expires. Shortening the TTL trades API server load for faster revocation. etcd replication is near-instant within a healthy cluster. The kubelet does not keep a local copy of RBAC objects. Tokens identify the service account; permissions are evaluated at request time, not embedded in the token.",
    referenceUrl: "https://kubernetes.io/docs/reference/config-api/kubelet-config.v1beta1/",
    tags: ["Kubelet", "Authorization", "Incident response"]
  },
  {
    id: "cncf-kcsa-124",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "What a reachable kubelet API hands an attacker",
    scenario: "A threat model for a streaming company must rate the impact of an attacker who can send authorized requests to a worker node's kubelet API on port 10250 but has no Kubernetes API credentials. Leadership assumes the impact is limited to reading node metrics.",
    question: "Which assessment is accurate?",
    options: [
      { id: 'A', text: "The attacker can list that node's pods and run commands in their containers, reaching their mounted secrets." },
      { id: 'B', text: "The attacker can modify any object in the cluster, because the kubelet relays writes to the API server." },
      { id: 'C', text: "The attacker can only read node CPU and memory metrics, because the kubelet API is limited to monitoring." },
      { id: 'D', text: "The attacker can read etcd directly, because the kubelet API proxies requests to the cluster datastore." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The kubelet API exposes pod listings, container logs, exec, attach, run and port-forward for every pod on the node, so an attacker with that access can execute commands in any container there and read its mounted Secrets and service account tokens, which often leads further. That is why the kubelet must require authentication and Webhook authorization. Metrics are only a small part of the API. The kubelet does not relay arbitrary writes to the API server; its own identity is restricted by the Node authorizer. It has no path to etcd.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/kubelet-authn-authz/",
    tags: ["Kubelet", "Threat modelling", "Impact"]
  },
  {
    id: "cncf-kcsa-125",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "The identity a kubelet uses toward the API server",
    scenario: "A new platform engineer at a university is reviewing API server audit logs and sees requests from a user named system:node:worker-07 in the group system:nodes. She asks what this identity is and why every node should have a different one.",
    question: "What is the correct explanation?",
    options: [
      { id: 'A', text: "It is an anonymous identity that the API server assigns to any request arriving from a node address." },
      { id: 'B', text: "It is a human operator's account named after the node they manage, created by the cloud provider." },
      { id: 'C', text: "It is a service account the scheduler creates per node, so each node's pods get their own API token." },
      { id: 'D', text: "It is the kubelet's identity; unique per-node names let the Node authorizer limit each to its own pods." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Kubelets authenticate as system:node:NODE_NAME in the system:nodes group, typically with a client certificate obtained through TLS bootstrapping; because each node has a distinct name, the Node authorizer and NodeRestriction can restrict every kubelet to the Node object, pods, Secrets and volumes related to itself. It is not a service account and is not created by the scheduler. It is not a human account. The API server does not derive identities from source IP addresses.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/node/",
    tags: ["Kubelet", "Node authorizer", "Identity"]
  }
];

export default CNCF_KCSA_QUESTIONS_5;
