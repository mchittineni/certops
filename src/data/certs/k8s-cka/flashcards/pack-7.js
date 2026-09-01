export const K8S_CKA_FLASHCARDS_7 = [
  {
    id: 'k8s-cka-fc-138', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'Pod is Init:0/1. Where are the logs?',
    hint: 'Name the container.',
    back: '<code>kubectl logs POD -c INIT_CONTAINER_NAME</code>. Plain <code>kubectl logs</code> targets an app container that has not started, and <code>exec</code> fails for the same reason. <code>kubectl describe pod</code> lists init containers and their state separately from the app containers.',
    tags: ['Init Containers', 'Troubleshooting']
  },
  {
    id: 'k8s-cka-fc-139', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'Joining a control plane node vs a worker.',
    hint: 'One extra secret.',
    back: 'Worker: <code>kubeadm join HOST --token … --discovery-token-ca-cert-hash sha256:…</code>. Control plane: the same plus <code>--control-plane --certificate-key KEY</code>, where the key comes from <code>kubeadm init phase upload-certs --upload-certs</code> (it decrypts the shared CA material, and expires after 2 hours).',
    tags: ['kubeadm', 'High Availability']
  },
  {
    id: 'k8s-cka-fc-140', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'What must match for a PVC to bind to a static PV?',
    hint: 'Three things, one inequality.',
    back: '<strong>storageClassName</strong> equal, <strong>accessModes</strong> compatible, and PV <strong>capacity ≥ requested</strong> size (the claim gets the whole volume, so an oversized PV is wasted but legal). Selectors and volumeMode must also match if set.',
    tags: ['Storage', 'Static Provisioning']
  },
  {
    id: 'k8s-cka-fc-141', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'What does setting spec.nodeName do?',
    hint: 'It skips something important.',
    back: 'It <strong>pre-binds the pod</strong>, so kube-scheduler never evaluates it — cordons, taints, affinity, and spread constraints are all ignored. The kubelet on that node then admits or rejects it on local resources. Useful for static pods and rescue work, dangerous otherwise.',
    tags: ['Scheduling', 'Pods']
  },
  {
    id: 'k8s-cka-fc-142', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd4',
    front: 'The Kubernetes version skew rule you must remember for upgrades.',
    hint: 'Control plane first.',
    back: 'The <strong>kubelet may lag the API server by up to 3 minor versions but must never be newer</strong>. So you always upgrade the control plane first, one minor version at a time, then the nodes. kubectl is supported within one minor version either side.',
    tags: ['Upgrades', 'Version Skew']
  },
  {
    id: 'k8s-cka-fc-143', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'sessionAffinity on a Service — what does it actually do?',
    hint: 'Layer 4 hashing.',
    back: '<code>sessionAffinity: ClientIP</code> makes kube-proxy pin a client IP to one backend for <code>sessionAffinityConfig.clientIP.timeoutSeconds</code> (default 3h). It is IP-based, not cookie-based — behind a NAT everyone looks like one client. Real sticky sessions belong at L7.',
    tags: ['Services', 'Session Affinity']
  },
  {
    id: 'k8s-cka-fc-144', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd1',
    front: 'ReadWriteOnce vs ReadWriteOncePod — the subtle difference.',
    hint: 'Node vs pod.',
    back: 'RWO restricts read-write mounting to <strong>one node</strong> — several pods on that node can still mount and write to it. RWOP restricts it to <strong>one pod</strong> cluster-wide, which is the only real single-writer guarantee (databases, anything doing its own locking).',
    tags: ['Access Modes', 'Storage']
  },
  {
    id: 'k8s-cka-fc-145', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'A ReplicaSet is created and bare pods already match its selector.',
    hint: 'Adoption.',
    back: 'It <strong>adopts</strong> them — any matching pod with no controller ownerReference is claimed and counted toward the replica total, so it creates fewer (or no) new pods. This is also why overlapping selectors between controllers cause pods to be fought over.',
    tags: ['ReplicaSet', 'Ownership']
  },
  {
    id: 'k8s-cka-fc-146', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: '"Liveness probe failed: HTTP probe failed with statuscode: 500" — whose fault?',
    hint: 'It connected.',
    back: 'The <strong>application</strong> answered unhealthily, so the fault is inside the app — read its logs. Compare: <em>connection refused</em> or <em>i/o timeout</em> means the probe never got an answer (wrong port, app not listening, or policy blocking the kubelet).',
    tags: ['Probes', 'Troubleshooting']
  },
  {
    id: 'k8s-cka-fc-147', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'Confine a certificate user to one namespace.',
    hint: 'Subject kind matters.',
    back: 'The client certificate <strong>CN becomes the username</strong> and <strong>O becomes a group</strong>. Bind it with a namespaced Role + RoleBinding whose subject is <code>kind: User, name: &lt;CN&gt;</code>. There is no User object in Kubernetes — identity comes entirely from the authenticator.',
    tags: ['RBAC', 'Authentication']
  },
  {
    id: 'k8s-cka-fc-148', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd5',
    front: 'One Service, several ports — what is mandatory?',
    hint: 'A field you can omit with one port.',
    back: 'Every entry in <code>spec.ports</code> must have a unique <strong>name</strong> once there is more than one. Each entry carries its own <code>protocol</code> (TCP default, also UDP and SCTP), and <code>targetPort</code> may be a <em>named</em> container port for robustness.',
    tags: ['Services', 'Ports']
  },
  {
    id: 'k8s-cka-fc-149', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd3',
    front: 'A rollout stalls with "exceeded quota" on the ReplicaSet.',
    hint: 'Surge costs quota.',
    back: 'Rolling updates create surge pods <em>before</em> deleting old ones, and those extra requests are charged to the namespace <strong>ResourceQuota</strong>. With the quota nearly full the roll deadlocks. Fix: raise the quota, or set <code>maxSurge: 0</code> with a non-zero <code>maxUnavailable</code>.',
    tags: ['ResourceQuota', 'Deployment']
  },
  {
    id: 'k8s-cka-fc-150', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'Move a PVC to a different StorageClass.',
    hint: 'The field is immutable.',
    back: 'You cannot edit <code>storageClassName</code> on a bound PVC. Create a <strong>new PVC</strong> on the target class, run a pod mounting both and copy the data, then repoint the workload and delete the old claim. Snapshot-and-restore works only within a driver/class that supports it.',
    tags: ['Storage', 'Migration']
  },
  {
    id: 'k8s-cka-fc-151', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'Everything is slow to start and the gap is between Scheduled and Pulling.',
    hint: 'Not the scheduler.',
    back: 'The pods are already placed, so the bottleneck is the <strong>image lifecycle</strong>: a saturated or distant registry, cold node caches, huge images, or serialised pulls. Check the Pulling/Pulled event timestamps and the registry. Mitigate with smaller images, a pull-through cache, or pre-pulling.',
    tags: ['Images', 'Performance']
  },
  {
    id: 'k8s-cka-fc-152', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'Why is only etcd not enough for control plane backup?',
    hint: 'Identity.',
    back: 'Restored objects (ServiceAccount tokens, issued certificates, kubeconfigs) were signed by the <strong>original cluster CA</strong>. Without <code>/etc/kubernetes/pki</code> the restored control plane cannot authenticate its own components. Back up the PKI directory and the static pod manifests alongside the snapshot.',
    tags: ['Backup', 'Certificates']
  },
  {
    id: 'k8s-cka-fc-153', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd3',
    front: 'Batch several Deployment edits into one rollout.',
    hint: 'Two commands around the edits.',
    back: '<code>kubectl rollout pause deployment/X</code>, make all your changes (image, resources, env), then <code>kubectl rollout resume deployment/X</code> — one roll instead of one per edit. While paused the controller ignores pod-template changes.',
    tags: ['Deployment', 'Rollout']
  },
  {
    id: 'k8s-cka-fc-154', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'Which node CIDR mask sets your maximum pods per node?',
    hint: 'Controller manager flag.',
    back: '<code>--node-cidr-mask-size</code> on kube-controller-manager slices the cluster pod CIDR into per-node subnets. A /16 cluster CIDR with /24 nodes gives 256 nodes × ~254 pod IPs. The kubelet <code>maxPods</code> setting (default 110) caps it independently — the lower of the two wins.',
    tags: ['Networking', 'Capacity Planning']
  },
  {
    id: 'k8s-cka-fc-155', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'Node is Ready and untainted, but nothing schedules there.',
    hint: 'One boolean in the spec.',
    back: '<code>spec.unschedulable: true</code> — the node was <strong>cordoned</strong> and never uncordoned (describe shows <code>Unschedulable: true</code> and a <code>node.kubernetes.io/unschedulable:NoSchedule</code> taint). Fix: <code>kubectl uncordon NODE</code>.',
    tags: ['Nodes', 'Cordon']
  },
  {
    id: 'k8s-cka-fc-156', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd3',
    front: 'Why will the cluster autoscaler not remove a nearly empty node?',
    hint: 'Four usual blockers.',
    back: 'Pods it cannot safely recreate elsewhere: <strong>bare pods</strong> with no controller, pods using <strong>local storage</strong>, pods a <strong>PodDisruptionBudget</strong> forbids evicting, and anything with the <code>cluster-autoscaler.kubernetes.io/safe-to-evict: "false"</code> annotation. DaemonSet pods are ignored.',
    tags: ['Cluster Autoscaler', 'Operations']
  },
  {
    id: 'k8s-cka-fc-157', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'Where do you add a DNS stub domain or upstream forwarder?',
    hint: 'One ConfigMap.',
    back: 'The <strong>coredns ConfigMap in kube-system</strong>, which holds the Corefile. Add a server block or a <code>forward internal.corp 10.0.0.53</code> directive, then <code>kubectl rollout restart deployment/coredns -n kube-system</code> (CoreDNS also auto-reloads if the reload plugin is enabled).',
    tags: ['CoreDNS', 'DNS']
  },
  {
    id: 'k8s-cka-fc-158', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd1',
    front: 'Does emptyDir survive a container restart? A pod restart?',
    hint: 'Two different scopes.',
    back: '<strong>Container restart: yes</strong> — the volume is tied to the pod, not the container. <strong>Pod deleted/rescheduled: no</strong> — the data is gone with the pod. A crash-looping container therefore keeps seeing its old scratch files.',
    tags: ['emptyDir', 'Pod Lifecycle']
  },
  {
    id: 'k8s-cka-fc-159', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'A NetworkPolicy for traffic arriving via an ingress controller.',
    hint: 'The source is not the internet.',
    back: 'The controller <strong>proxies</strong> the request, so from the backend pod the source is the <em>controller pod</em>. Allow it with a <code>namespaceSelector</code> matching the ingress controller namespace (plus a podSelector if you want to be precise) — not an <code>ipBlock: 0.0.0.0/0</code>.',
    tags: ['NetworkPolicy', 'Ingress']
  },
  {
    id: 'k8s-cka-fc-160', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'kubectl top says "Metrics API not available" on a self-managed cluster.',
    hint: 'TLS to the kubelets.',
    back: 'metrics-server scrapes kubelets over TLS and self-signed kubelet <em>serving</em> certs fail verification. Proper fix: enable kubelet serving certificate rotation signed by the cluster CA (and approve the CSRs). Lab shortcut: <code>--kubelet-insecure-tls</code>.',
    tags: ['metrics-server', 'TLS']
  },
  {
    id: 'k8s-cka-fc-161', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'kubectl apply --prune: what makes it safe or dangerous?',
    hint: 'Scope.',
    back: 'Pruning deletes cluster objects that are no longer in the applied set — so it must be <strong>scoped by a label selector</strong> covering exactly the objects your pipeline owns. Too broad a selector deletes other people work; too narrow leaves orphans behind.',
    tags: ['kubectl', 'GitOps']
  },
  {
    id: 'k8s-cka-fc-162', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'Which taint effect touches already-running pods?',
    hint: 'Only one of three.',
    back: '<strong>NoExecute</strong> — evicts running pods that lack a matching toleration (immediately, or after <code>tolerationSeconds</code>). <strong>NoSchedule</strong> and <strong>PreferNoSchedule</strong> affect placement of <em>new</em> pods only, hard and soft respectively.',
    tags: ['Taints', 'Eviction']
  }
];

export default K8S_CKA_FLASHCARDS_7;
