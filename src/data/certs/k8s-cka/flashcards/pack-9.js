export const K8S_CKA_FLASHCARDS_9 = [
  {
    id: 'k8s-cka-fc-188', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'Confirm an upgrade landed everywhere.',
    hint: 'Two commands.',
    back: '<code>kubectl get nodes</code> — the VERSION column is each <em>kubelet</em>. <code>kubectl version</code> — client and API server. Also check that every kube-system static pod image tag moved, and that <code>kubeadm upgrade plan</code> reports nothing left to do.',
    tags: ['Upgrades', 'Verification']
  },
  {
    id: 'k8s-cka-fc-189', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd3',
    front: 'Scale a Deployment right now, and conditionally.',
    hint: 'One flag makes it safe in scripts.',
    back: '<code>kubectl scale deployment/web --replicas=10</code>, or guard it with <code>--current-replicas=3</code> so it only applies if the count still matches. <code>kubectl autoscale</code> creates an HPA instead — do not use both on the same workload without thinking.',
    tags: ['Scaling', 'kubectl']
  },
  {
    id: 'k8s-cka-fc-190', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'Which log for which failure: kubelet, scheduler, controller-manager, apiserver?',
    hint: 'Match the symptom to the loop.',
    back: '<strong>kubelet</strong> — pod will not start <em>on a node</em>, node NotReady, static pods. <strong>scheduler</strong> — pod stays Pending. <strong>controller-manager</strong> — no ReplicaSet/endpoints/PV binding. <strong>apiserver</strong> — every request fails, admission or auth errors.',
    tags: ['Troubleshooting', 'Control Plane']
  },
  {
    id: 'k8s-cka-fc-191', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd1',
    front: 'Trace a PVC from creation to a running pod.',
    hint: 'Six steps.',
    back: 'PVC created → StorageClass provisioner (or a matching static PV) → PV created and <strong>Bound</strong> → pod scheduled (binding may wait for this with WaitForFirstConsumer) → CSI <em>ControllerPublish</em> attaches to the node → CSI <em>NodeStage/NodePublish</em> formats and mounts it into the container.',
    tags: ['Storage', 'CSI']
  },
  {
    id: 'k8s-cka-fc-192', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'Service port vs targetPort vs nodePort vs containerPort.',
    hint: 'Four numbers, three of them matter.',
    back: '<code>port</code> — what clients dial on the ClusterIP. <code>targetPort</code> — the pod port traffic is sent to (number or <em>name</em>). <code>nodePort</code> — 30000–32767, opened on every node. <code>containerPort</code> — documentation on the pod spec; it does not open anything by itself.',
    tags: ['Services', 'Ports']
  },
  {
    id: 'k8s-cka-fc-193', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'Should applications ever live in kube-system?',
    hint: 'No — and here is why.',
    back: 'It is reserved for control plane add-ons. Workloads there tend to inherit elevated RBAC, system-critical PriorityClasses, and looser Pod Security levels, and they blur the blast radius operators depend on. Give each team its own namespace with quotas and policy.',
    tags: ['Namespaces', 'Best Practices']
  },
  {
    id: 'k8s-cka-fc-194', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd2',
    front: 'Preview what an apply would change.',
    hint: 'Server-side comparison.',
    back: '<code>kubectl diff -f manifest.yaml</code> shows the difference against the live object (running admission and defaulting server-side). Then <code>kubectl get RES NAME -o yaml</code> to confirm what was actually persisted, since defaults and webhooks may add fields.',
    tags: ['kubectl', 'Declarative']
  },
  {
    id: 'k8s-cka-fc-195', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'Which resources can a LimitRange constrain?',
    hint: 'More than CPU.',
    back: 'Per-container and per-pod <code>min</code>, <code>max</code>, <code>default</code>, <code>defaultRequest</code>, and <code>maxLimitRequestRatio</code> for CPU, memory, and ephemeral-storage — plus min/max size for PVC storage requests. It defaults <em>and</em> rejects; ResourceQuota caps namespace totals.',
    tags: ['LimitRange', 'Governance']
  },
  {
    id: 'k8s-cka-fc-196', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd5',
    front: 'One node cannot reach a ClusterIP, others can.',
    hint: 'Per-node data plane.',
    back: 'Service routing is programmed <strong>per node by kube-proxy</strong>, so check that it is running there (<code>kubectl get pods -n kube-system -l k8s-app=kube-proxy -o wide</code>), read its logs, and inspect the rules with <code>iptables-save | grep SERVICE</code> or <code>ipvsadm -Ln</code>.',
    tags: ['kube-proxy', 'Troubleshooting']
  },
  {
    id: 'k8s-cka-fc-197', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'What does the PV phase tell you: Available, Bound, Released, Failed?',
    hint: 'Four states.',
    back: '<strong>Available</strong> — free and unclaimed. <strong>Bound</strong> — matched to a PVC. <strong>Released</strong> — the claim is gone but the data is still there (Retain policy); it will not rebind automatically. <strong>Failed</strong> — automatic reclamation failed. Released volumes need manual cleanup or recreation.',
    tags: ['PersistentVolume', 'Storage']
  },
  {
    id: 'k8s-cka-fc-198', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'What does an APIService object do?',
    hint: 'Aggregation layer.',
    back: 'It registers an <strong>aggregated API server</strong> (for example <code>v1beta1.metrics.k8s.io</code>) so the main API server proxies that group/version to another service. A broken APIService makes <code>kubectl api-resources</code> error and can block namespace deletion via finalizers.',
    tags: ['API Aggregation', 'Architecture']
  },
  {
    id: 'k8s-cka-fc-199', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd3',
    front: 'Guaranteed QoS: what exactly must be true?',
    hint: 'Every container, both resources.',
    back: '<strong>Every container</strong> in the pod sets CPU and memory <em>limits</em>, and each request equals its limit. Set only some, or requests below limits, and the pod is Burstable; set none at all and it is BestEffort. QoS is derived, never declared.',
    tags: ['QoS', 'Resources']
  },
  {
    id: 'k8s-cka-fc-200', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'CoreDNS pods are CrashLoopBackOff right after install. Classic cause?',
    hint: 'Loops and Corefile.',
    back: 'A <strong>resolv.conf loop</strong> — the node resolver points at 127.0.0.53, CoreDNS forwards to itself and the <code>loop</code> plugin kills it. Fix the node upstream resolver (or point <code>resolvConf</code> at <code>/run/systemd/resolve/resolv.conf</code>). Second most common: an invalid Corefile after an edit.',
    tags: ['CoreDNS', 'Troubleshooting']
  },
  {
    id: 'k8s-cka-fc-201', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'Which control plane components use leader election, and why does it matter?',
    hint: 'Not the API server.',
    back: '<strong>kube-scheduler</strong> and <strong>kube-controller-manager</strong> (and cloud-controller-manager) run active/passive via a Lease in kube-system — only the leader acts. So "three replicas" does not mean three schedulers working; if the Lease is stuck or clocks are skewed, nothing gets scheduled despite healthy pods. API servers are all active.',
    tags: ['High Availability', 'Control Plane']
  },
  {
    id: 'k8s-cka-fc-202', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'Restrict egress to the private network only.',
    hint: 'Allow-list, plus one exception.',
    back: 'Select the pods, set <code>policyTypes: [Egress]</code>, and allow only <code>ipBlock: {cidr: 10.0.0.0/8}</code> — everything else is then denied. Remember to also allow <strong>DNS to kube-system on port 53</strong>, or name resolution dies and every request fails.',
    tags: ['NetworkPolicy', 'Egress']
  },
  {
    id: 'k8s-cka-fc-203', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd1',
    front: 'Which volume types are read-only by nature?',
    hint: 'Two config kinds, one image field.',
    back: '<code>configMap</code> and <code>secret</code> volumes are mounted read-only, as are <code>downwardAPI</code> and projected volumes. Any mount can be forced read-only with <code>readOnly: true</code> on the volumeMount — good practice for anything the app only reads.',
    tags: ['Volumes', 'Configuration']
  },
  {
    id: 'k8s-cka-fc-204', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'What is the downward API good for?',
    hint: 'Pod metadata into the container.',
    back: 'It exposes pod and container fields as env vars or files: <code>metadata.name</code>, <code>metadata.namespace</code>, <code>status.podIP</code>, <code>spec.nodeName</code>, labels/annotations, and resource limits/requests. Used for self-identification in logs, metrics, and clustered peer discovery — no API call needed.',
    tags: ['Downward API', 'Pods']
  },
  {
    id: 'k8s-cka-fc-205', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'A PVC is Pending. Three causes.',
    hint: 'Class, capacity, topology.',
    back: '1. <code>storageClassName</code> names a class that does not exist (or none is default). 2. No matching PV for a static setup, or the provisioner is failing — read the PVC events. 3. <code>WaitForFirstConsumer</code>: it is waiting for a pod to be scheduled, which is normal, not a fault.',
    tags: ['Storage', 'Troubleshooting']
  },
  {
    id: 'k8s-cka-fc-206', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'Node authorization: how does a kubelet authenticate to the API server?',
    hint: 'A group and a username pattern.',
    back: 'With a client certificate whose CN is <code>system:node:&lt;nodeName&gt;</code> and O is <code>system:nodes</code>. The <strong>Node authorizer</strong> uses that identity to scope access to the objects tied to that node pods; certificates are bootstrapped by a token and rotated via CSRs.',
    tags: ['Authentication', 'kubelet']
  },
  {
    id: 'k8s-cka-fc-207', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'Which Kubernetes objects can select pods?',
    hint: 'Four, with different consequences.',
    back: '<strong>Service</strong> (equality selector only) → endpoints. <strong>ReplicaSet/Deployment/StatefulSet/Job</strong> (set-based too) → ownership. <strong>NetworkPolicy</strong> → traffic rules. <strong>PodDisruptionBudget</strong> → eviction protection. Overlapping selectors between controllers cause pods to be fought over.',
    tags: ['Labels', 'Selectors']
  },
  {
    id: 'k8s-cka-fc-208', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd3',
    front: 'What triggers a new ReplicaSet on a Deployment?',
    hint: 'Only one part of the spec.',
    back: 'Any change to the <strong>pod template</strong> (<code>spec.template</code>) — image, env, labels, resources, annotations. Changing <code>replicas</code> alone does not: it just scales the current ReplicaSet. That is also why <code>rollout restart</code> works by stamping a template annotation.',
    tags: ['Deployment', 'ReplicaSet']
  },
  {
    id: 'k8s-cka-fc-209', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'Reduce a huge image pull cost on every node.',
    hint: 'Three levers.',
    back: 'Smaller images (multi-stage builds, distroless), a <strong>pull-through registry cache</strong> or in-cluster mirror close to the nodes, and sensible <code>imagePullPolicy</code> (<code>IfNotPresent</code>, never <code>:latest</code> with Always in hot paths). Pre-pulling on node bootstrap helps for large base images.',
    tags: ['Images', 'Performance']
  },
  {
    id: 'k8s-cka-fc-210', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'What does kubectl describe give you that get -o yaml does not?',
    hint: 'The bottom of the output.',
    back: '<strong>Events</strong> — the controller and kubelet narration of what has been tried and why it failed — plus resolved and human-formatted fields. <code>-o yaml</code> gives the exact persisted spec and status. Triage almost always starts with describe.',
    tags: ['kubectl', 'Troubleshooting']
  },
  {
    id: 'k8s-cka-fc-211', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'Rotate the cluster CA — why is it painful?',
    hint: 'Everything trusts it.',
    back: 'Every component kubeconfig, every kubelet client cert, every ServiceAccount token signer relationship, and every user certificate chains to it. A rotation means reissuing all of them and restarting the control plane — which is why CA material is backed up carefully and given a long lifetime, and why leaf certs are rotated instead.',
    tags: ['Certificates', 'Security']
  },
  {
    id: 'k8s-cka-fc-212', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'Your five-command network triage order.',
    hint: 'Layer by layer.',
    back: '1. <code>kubectl get endpointslices</code> — does the Service have backends? 2. curl the <strong>pod IP</strong> — is the app up? 3. curl the <strong>ClusterIP</strong> — is kube-proxy right? 4. <code>nslookup</code> from a pod — is DNS right? 5. Check <strong>NetworkPolicies</strong> selecting either side.',
    tags: ['Networking', 'Troubleshooting']
  }
];

export default K8S_CKA_FLASHCARDS_9;
