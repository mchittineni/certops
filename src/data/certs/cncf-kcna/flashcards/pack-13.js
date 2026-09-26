export const CNCF_KCNA_FLASHCARDS_13 = [
  {
    id: 'cncf-kcna-fc-301',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What are the three building blocks of a kubeconfig file?',
    hint: 'Where, who, and the pairing of the two.',
    back: '<strong>clusters</strong> (API server URL plus the CA to trust), <strong>users</strong> (credentials: client cert, token or exec plugin) and <strong>contexts</strong> (a cluster + user + optional default namespace). <code>current-context</code> decides where every kubectl command goes; check it with <code>kubectl config current-context</code> and switch with <code>use-context</code> or <code>--context</code>.',
    tags: ['kubeconfig', 'Contexts']
  },
  {
    id: 'cncf-kcna-fc-302',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What does CrashLoopBackOff actually mean?',
    hint: 'It is not an error by itself.',
    back: 'The container <strong>started and then exited</strong> (or was killed) repeatedly, and the kubelet is waiting an exponentially growing delay (10s, 20s, 40s ... capped at 5 minutes) before restarting it again. The real cause is in <code>kubectl logs --previous</code> and in the last termination reason and exit code shown by kubectl describe.',
    tags: ['CrashLoopBackOff', 'Pod status']
  },
  {
    id: 'cncf-kcna-fc-303',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Common container exit codes: 0, 1, 126, 127, 137, 143',
    hint: '128 + signal number for the high ones.',
    back: '<strong>0</strong>: success. <strong>1</strong>: generic application error. <strong>126</strong>: command found but not executable (permissions). <strong>127</strong>: command not found. <strong>137</strong> = 128 + 9: SIGKILL, often OOMKilled or a forced kill after the grace period. <strong>143</strong> = 128 + 15: SIGTERM, a normal graceful stop.',
    tags: ['Exit codes']
  },
  {
    id: 'cncf-kcna-fc-304',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'A basic triage order for a failing Pod',
    hint: 'Status, story, output.',
    back: '1. <code>kubectl get pods</code> (status, restarts). 2. <code>kubectl describe pod</code> (conditions, container states, <strong>Events</strong>). 3. <code>kubectl logs</code> (add <code>--previous</code> after a crash, <code>-c</code> for a specific container). 4. <code>kubectl exec</code> or <code>kubectl debug</code> to inspect from inside. 5. Look wider: node conditions, Services, events in the namespace.',
    tags: ['Troubleshooting', 'kubectl']
  },
  {
    id: 'cncf-kcna-fc-305',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'How long do Kubernetes Events stick around?',
    hint: 'Not long enough for a post-mortem next week.',
    back: 'Events are ordinary API objects with a TTL, <strong>one hour by default</strong> (the kube-apiserver <code>--event-ttl</code> flag). After that they vanish, so for history you ship them elsewhere, for example with an event exporter into your logging or observability stack.',
    tags: ['Events']
  },
  {
    id: 'cncf-kcna-fc-306',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Which control-plane component is down? Match the symptom.',
    hint: 'Think about which step of the pipeline stopped.',
    back: '<strong>kube-apiserver</strong>: kubectl gets connection refused; running Pods keep working. <strong>etcd</strong>: the API server errors or times out on reads and writes. <strong>kube-scheduler</strong>: new Pods stay Pending with no node and no scheduling events. <strong>kube-controller-manager</strong>: edits are stored but nothing reconciles (no new ReplicaSets, deleted Pods not replaced).',
    tags: ['Control plane', 'Troubleshooting']
  },
  {
    id: 'cncf-kcna-fc-307',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Admission webhook failurePolicy: Fail vs Ignore',
    hint: 'What happens when the webhook cannot be reached?',
    back: '<strong>Fail</strong> (the v1 default): if the API server cannot reach the webhook or it errors, the request is <strong>rejected</strong>, safe for security policy but a webhook covering all Pods can halt the cluster when its backend dies. <strong>Ignore</strong>: errors are skipped and the request proceeds. Limit the blast radius with namespaceSelector/objectSelector (exclude kube-system), short timeouts and a highly available webhook.',
    tags: ['Admission webhooks', 'failurePolicy']
  },
  {
    id: 'cncf-kcna-fc-308',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What are the three ways to use kubectl debug, and when does each fit?',
    hint: 'Into the Pod, a copy of the Pod, or onto the node.',
    back: '<strong>Ephemeral container</strong>: <code>kubectl debug -it POD --image=busybox --target=app</code> adds a tools container to a running Pod, ideal for distroless images; it shares the target\'s process namespace and cannot be removed afterwards. <strong>Copy</strong>: <code>--copy-to=NAME</code> clones the Pod so you can change the image or command (for example start a shell instead of an app that crashes instantly). <strong>Node</strong>: <code>kubectl debug node/NAME -it --image=...</code> starts a Pod in the host namespaces with the node filesystem at <code>/host</code>.',
    tags: ['kubectl debug', 'Troubleshooting']
  },
  {
    id: 'cncf-kcna-fc-309',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'CreateContainerConfigError vs RunContainerError',
    hint: 'Before the process exists, or while starting it.',
    back: '<strong>CreateContainerConfigError</strong>: the kubelet cannot build the container config, typically a referenced ConfigMap or Secret (or a key in it) is missing. <strong>RunContainerError</strong> (or StartError): the runtime failed to start the process, for example a bad command or entrypoint path, or a mount that cannot be set up.',
    tags: ['Pod status', 'ConfigMap']
  },
  {
    id: 'cncf-kcna-fc-310',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'API server health endpoints: /livez vs /readyz',
    hint: 'Alive vs ready to serve.',
    back: '<strong>/livez</strong>: is the API server process alive (used to decide on restarts). <strong>/readyz</strong>: is it ready to serve traffic, including its etcd connection and post-start hooks (used by load balancers). Append <code>?verbose</code> to list each check, for example <code>kubectl get --raw=\'/readyz?verbose\'</code>. The older /healthz and componentstatuses are deprecated.',
    tags: ['kube-apiserver', 'Health checks']
  },
  {
    id: 'cncf-kcna-fc-311',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'How long are kubeadm-issued control-plane certificates valid?',
    hint: 'Upgrades quietly fix it.',
    back: 'Client and serving certificates last <strong>one year</strong>; the cluster CA lasts ten years. kubeadm renews certificates automatically during <code>kubeadm upgrade</code>, so clusters upgraded at least yearly never notice. Otherwise run <code>kubeadm certs check-expiration</code> and <code>kubeadm certs renew all</code>, then restart the control-plane static Pods.',
    tags: ['kubeadm', 'Certificates']
  },
  {
    id: 'cncf-kcna-fc-312',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'A checklist for "my Service does not work"',
    hint: 'Name, endpoints, ports, Pods.',
    back: '1. Does the name resolve from a Pod (nslookup)? 2. Does the Service have <strong>ready endpoints</strong> (<code>kubectl get endpointslices -l kubernetes.io/service-name=NAME</code>)? Empty means the selector or readiness is wrong. 3. Does <strong>targetPort</strong> match the port the container listens on? 4. Does the Pod answer directly on its IP? 5. Is a NetworkPolicy or kube-proxy problem in the way?',
    tags: ['Services', 'Troubleshooting']
  },
  {
    id: 'cncf-kcna-fc-313',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'How do you troubleshoot cluster DNS step by step?',
    hint: 'Client, config, server.',
    back: 'Run a test Pod and <code>nslookup kubernetes.default</code>. Check its <code>/etc/resolv.conf</code> points at the kube-dns Service IP with the cluster search domains. Check the <strong>CoreDNS Pods</strong> are running and read their logs. Confirm the <strong>kube-dns Service has endpoints</strong>. Review the <strong>Corefile</strong> in the coredns ConfigMap for recent edits.',
    tags: ['DNS', 'CoreDNS']
  },
  {
    id: 'cncf-kcna-fc-314',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'metrics-server vs kube-state-metrics',
    hint: 'Usage vs object state.',
    back: '<strong>metrics-server</strong> collects current <strong>CPU and memory usage</strong> from kubelets and serves the Metrics API used by <code>kubectl top</code> and the HPA; it keeps no history. <strong>kube-state-metrics</strong> exposes the <strong>state of objects</strong> (replicas desired vs available, Pod phases, restarts) as Prometheus metrics for dashboards and alerts.',
    tags: ['metrics-server', 'kube-state-metrics']
  },
  {
    id: 'cncf-kcna-fc-315',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Node conditions to know: Ready, MemoryPressure, DiskPressure, PIDPressure, NetworkUnavailable',
    hint: 'One must be True, the rest should be False.',
    back: '<strong>Ready</strong> should be True; False or Unknown means the kubelet is unhealthy or not reporting. <strong>MemoryPressure, DiskPressure, PIDPressure</strong> True means the node is short of that resource, the kubelet may evict Pods and a matching taint keeps new Pods off. <strong>NetworkUnavailable</strong> True means the Pod network is not configured on the node.',
    tags: ['Nodes', 'Conditions']
  },
  {
    id: 'cncf-kcna-fc-316',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Where are the kubelet\'s logs, and why can\'t kubectl logs show them?',
    hint: 'The kubelet is not a Pod.',
    back: 'On most distributions the kubelet runs as a <strong>systemd service</strong> on the host, so its logs are in the journal: <code>journalctl -u kubelet</code> (or /var/log files on older setups). kubectl logs only reads <strong>container</strong> logs; reach the node via SSH or <code>kubectl debug node/NAME</code>. Newer clusters can also expose node logs through the API with the NodeLogQuery feature.',
    tags: ['kubelet', 'Logs']
  },
  {
    id: 'cncf-kcna-fc-317',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What is a finalizer and why can it leave objects stuck in Terminating?',
    hint: 'A to-do list that must be emptied before deletion.',
    back: 'A <strong>finalizer</strong> is a key in <code>metadata.finalizers</code>. On delete, the API server only sets <code>deletionTimestamp</code>; the object stays until the controller responsible does its clean-up and removes its finalizer. If that controller is gone or failing, the object (and its namespace) sit in <strong>Terminating</strong> forever. Removing finalizers by hand skips the clean-up, so do it knowingly.',
    tags: ['Finalizers']
  },
  {
    id: 'cncf-kcna-fc-318',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What is a static Pod and how do you fix a broken one?',
    hint: 'The kubelet reads it from disk.',
    back: 'A <strong>static Pod</strong> is defined by a manifest file in the kubelet\'s static Pod path (kubeadm: <code>/etc/kubernetes/manifests</code>), not through the API. The kubelet runs it directly and publishes a read-only <strong>mirror Pod</strong>, so kubectl delete does not remove it. To fix or change one, <strong>edit the file on the node</strong>; the kubelet recreates the Pod. kubeadm runs the control plane this way.',
    tags: ['Static Pods', 'kubeadm']
  },
  {
    id: 'cncf-kcna-fc-319',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'When do you reach for crictl instead of kubectl?',
    hint: 'When you are on the node and the API may not help.',
    back: '<strong>crictl</strong> talks straight to the node\'s CRI runtime (containerd, CRI-O): <code>crictl ps -a</code>, <code>crictl logs</code>, <code>crictl pods</code>, <code>crictl images</code>. Use it on a node when the <strong>API server is down</strong> or you need runtime-level detail. kubectl works through the API server and sees the cluster-wide picture.',
    tags: ['crictl', 'CRI']
  },
  {
    id: 'cncf-kcna-fc-320',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'kubectl get -o wide vs -o yaml vs -o jsonpath',
    hint: 'More columns, the whole object, one field.',
    back: '<strong>-o wide</strong>: extra table columns (Pod IP, node). <strong>-o yaml</strong> (or json): the <strong>full live object</strong> including defaults and status. <strong>-o jsonpath=\'{.status.podIP}\'</strong>: extract specific fields for scripts. Add <code>--watch</code> (-w) to follow changes live.',
    tags: ['kubectl get', 'Output']
  },
  {
    id: 'cncf-kcna-fc-321',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Why does kubectl logs show nothing for a Pod in ContainerCreating?',
    hint: 'No process has run yet.',
    back: 'Logs come from a container\'s stdout/stderr, and in <strong>ContainerCreating</strong> no container has started: the kubelet is still setting up the sandbox, network (CNI), volume mounts or image. The explanation lives in <strong>kubectl describe pod events</strong>, such as FailedMount, FailedCreatePodSandBox or a slow pull.',
    tags: ['ContainerCreating', 'Events']
  },
  {
    id: 'cncf-kcna-fc-322',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Evicted vs preempted Pods: who removed them and why?',
    hint: 'Node pressure vs priority.',
    back: '<strong>Evicted</strong> (node-pressure): the <strong>kubelet</strong> removed the Pod because the node ran low on memory, disk or PIDs; the Pod status shows reason Evicted. <strong>Preempted</strong>: the <strong>scheduler</strong> removed lower-priority Pods to make room for a pending higher-priority Pod. API-initiated eviction (drain) is a third kind and respects PodDisruptionBudgets.',
    tags: ['Eviction', 'Preemption']
  },
  {
    id: 'cncf-kcna-fc-323',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What does ContainerCreating with FailedCreatePodSandBox usually point to?',
    hint: 'The sandbox needs a network before anything else.',
    back: 'The runtime could not create the Pod sandbox, almost always a <strong>CNI problem</strong> on that node: plugin binary or config missing, the CNI agent Pod crashed, or <strong>IPAM ran out of addresses</strong> in the node\'s Pod CIDR. Check the CNI DaemonSet Pods on that node and their logs; other nodes may be fine.',
    tags: ['CNI', 'ContainerCreating']
  },
  {
    id: 'cncf-kcna-fc-324',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What does kubectl explain do?',
    hint: 'Documentation from the cluster itself.',
    back: 'It prints the <strong>schema documentation</strong> for a resource or field straight from the API server\'s OpenAPI, for example <code>kubectl explain pod.spec.containers.livenessProbe</code>; add <code>--recursive</code> to see the whole tree. Handy for checking a field name or type when a manifest is rejected, and it covers CRDs too.',
    tags: ['kubectl explain']
  },
  {
    id: 'cncf-kcna-fc-325',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Kubernetes version skew: how far may a kubelet and kubectl drift from the API server?',
    hint: 'Kubelets may lag, never lead.',
    back: 'A <strong>kubelet</strong> must not be newer than the kube-apiserver and may be up to <strong>three minor versions older</strong>. <strong>kubectl</strong> is supported within <strong>one minor version</strong> (older or newer) of the API server. That is why upgrades go control plane first, then nodes; a node running a newer kubelet than the control plane is unsupported.',
    tags: ['Version skew', 'Upgrades']
  }
];

export default CNCF_KCNA_FLASHCARDS_13;
