export const K8S_CKA_FLASHCARDS_11 = [
  {
    id: 'k8s-cka-fc-238', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'Upgrade order for a 3 control plane, 20 worker cluster.',
    hint: 'Control plane leads, one node at a time.',
    back: 'First control plane node: upgrade <code>kubeadm</code> → <code>kubeadm upgrade apply vX.Y.Z</code> → drain → upgrade kubelet/kubectl → uncordon. Other control plane nodes: <code>kubeadm upgrade node</code> then the same node steps. Then workers, <strong>one at a time</strong>, respecting PDBs.',
    tags: ['Upgrades', 'kubeadm']
  },
  {
    id: 'k8s-cka-fc-239', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'Protect a cluster-critical pod from preemption.',
    hint: 'A value, not a flag.',
    back: 'Give it a high-value <strong>PriorityClass</strong> — the built-in <code>system-cluster-critical</code> and <code>system-node-critical</code> exist for genuine cluster components. Preemption compares priority values. A PDB does <em>not</em> help: it governs voluntary evictions, not scheduler preemption.',
    tags: ['Priority', 'Preemption']
  },
  {
    id: 'k8s-cka-fc-240', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd5',
    front: 'port vs targetPort vs nodePort — one line each.',
    hint: 'Client, container, node.',
    back: '<code>port</code> — what clients dial on the ClusterIP. <code>targetPort</code> — the container port traffic is delivered to (may be a <em>name</em>). <code>nodePort</code> — 30000–32767, opened on every node. <code>containerPort</code> on the pod is documentation; it opens nothing.',
    tags: ['Services', 'Ports']
  },
  {
    id: 'k8s-cka-fc-241', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'Apply a whole tree of manifests.',
    hint: 'One flag.',
    back: '<code>kubectl apply -f DIR --recursive</code> (or <code>-R</code>) descends into subdirectories. Without it, only files directly in the directory are applied — a silent way to miss half your manifests.',
    tags: ['kubectl', 'Manifests']
  },
  {
    id: 'k8s-cka-fc-242', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd1',
    front: 'The full path of a dynamically provisioned volume.',
    hint: 'Six stages, two CSI halves.',
    back: 'PVC created → (with <code>WaitForFirstConsumer</code>) scheduler picks a node → provisioner creates the PV and binds → CSI <strong>controller</strong> attaches it to that node → CSI <strong>node</strong> plugin stages (formats/mounts) then publishes (bind-mounts) it → container starts.',
    tags: ['CSI', 'Storage']
  },
  {
    id: 'k8s-cka-fc-243', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'Which pod QoS class, if one container is missing a limit?',
    hint: 'QoS is a pod-level verdict.',
    back: '<strong>Burstable.</strong> Guaranteed requires <em>every</em> container to set CPU and memory limits with requests equal to them. One container falling short downgrades the whole pod. BestEffort means no requests or limits anywhere.',
    tags: ['QoS', 'Resources']
  },
  {
    id: 'k8s-cka-fc-244', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd3',
    front: 'You delete one pod of a three-replica Deployment.',
    hint: 'Seconds later.',
    back: 'The ReplicaSet notices the shortfall and creates a <strong>replacement with a new name and new IP</strong>. Deployment pods have no stable identity — that is what StatefulSets provide. The replica count is unchanged.',
    tags: ['ReplicaSet', 'Reconciliation']
  },
  {
    id: 'k8s-cka-fc-245', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'Node prerequisites before kubeadm join.',
    hint: 'Four, and one is a sysctl.',
    back: '<strong>Swap off</strong>; a <strong>CRI runtime</strong> running with a known socket; kernel modules <code>overlay</code> and <code>br_netfilter</code>; sysctls <code>net.bridge.bridge-nf-call-iptables=1</code> and <code>net.ipv4.ip_forward=1</code>. Plus matching package versions and reachability to the control plane on 6443.',
    tags: ['kubeadm', 'Nodes']
  },
  {
    id: 'k8s-cka-fc-246', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'Systematic order for debugging an unreachable Service.',
    hint: 'Backend outwards.',
    back: '1. <code>get endpointslices</code> — selection and readiness. 2. curl the <strong>pod IP</strong> — is the app up? 3. curl the <strong>ClusterIP</strong> — is kube-proxy right? 4. <code>nslookup</code> from a pod — is DNS right? 5. Review <strong>NetworkPolicies</strong> on both sides. Never restart things first.',
    tags: ['Troubleshooting', 'Services']
  },
  {
    id: 'k8s-cka-fc-247', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd5',
    front: 'Health checks fail after you add a NetworkPolicy. Where do the probes come from?',
    hint: 'Two different sources.',
    back: '<strong>Kubelet probes</strong> originate from the <em>node</em>, not a pod — so a policy allowing only pod sources can block them. <strong>Ingress controller checks</strong> come from the controller pod, so allow its namespace. Both are <em>ingress</em> to your pod; reply traffic needs no rule.',
    tags: ['NetworkPolicy', 'Probes']
  },
  {
    id: 'k8s-cka-fc-248', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'Read-only reference data for 50 pods across many nodes.',
    hint: 'Access mode, or no volume at all.',
    back: 'A PV with <strong>ReadOnlyMany</strong>, or — if it is small and immutable — <strong>bake it into the image</strong>. ReadWriteOnce cannot span nodes, hostPath means maintaining a copy per node, and re-fetching into an emptyDir per pod wastes bandwidth and startup time.',
    tags: ['Storage', 'Access Modes']
  },
  {
    id: 'k8s-cka-fc-249', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd2',
    front: 'The single most useful triage habit.',
    hint: 'Bottom of one command.',
    back: 'Read the <strong>Events</strong> at the bottom of <code>kubectl describe</code>. They are the controllers and the kubelet narrating exactly what they tried and why it failed — scheduling reasons, image pulls, probe failures, volume attachment — before you touch anything.',
    tags: ['Troubleshooting', 'kubectl']
  },
  {
    id: 'k8s-cka-fc-250', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'The four things that decide whether a pod may run somewhere.',
    hint: 'Two attract, one repels, one admits.',
    back: '<strong>Resources</strong> (requests vs allocatable), <strong>affinity / nodeSelector / topology spread</strong> (attract and balance), <strong>taints and tolerations</strong> (repel), and finally <strong>kubelet admission</strong> on the node itself. Plus scheduling gates, which hold the pod before any of this.',
    tags: ['Scheduling', 'Architecture']
  }
];

export default K8S_CKA_FLASHCARDS_11;
