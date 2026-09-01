export const K8S_CKA_FLASHCARDS_3 = [
  {
    id: 'k8s-cka-fc-38', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd4',
    front: 'Generate a fresh worker join command.',
    hint: 'One kubeadm subcommand does it all.',
    back: '<code>kubeadm token create --print-join-command</code> — mints a new bootstrap token (default TTL 24h) and prints the whole <code>kubeadm join</code> line including <code>--discovery-token-ca-cert-hash</code>. For a control plane node, add <code>--control-plane --certificate-key</code> from <code>kubeadm init phase upload-certs</code>.',
    tags: ['kubeadm', 'Tokens']
  },
  {
    id: 'k8s-cka-fc-39', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'DNS is broken cluster-wide. Where do you look, in order?',
    hint: 'Backend before clients.',
    back: '1. <code>kubectl get pods -n kube-system -l k8s-app=kube-dns</code> — are CoreDNS pods Ready? 2. Their logs — Corefile parse errors, upstream failures. 3. <code>kubectl get svc,endpointslices -n kube-system kube-dns</code>. 4. Only then test from a client pod with <code>nslookup</code>.',
    tags: ['CoreDNS', 'Troubleshooting']
  },
  {
    id: 'k8s-cka-fc-40', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'How do you grow a PersistentVolumeClaim?',
    hint: 'One class flag, one field edit.',
    back: 'The StorageClass must have <code>allowVolumeExpansion: true</code>; then increase <code>spec.resources.requests.storage</code> on the PVC. The CSI driver expands the volume and the kubelet grows the filesystem. Shrinking is <strong>not</strong> supported, and <code>storageClassName</code> is immutable once bound.',
    tags: ['Storage', 'Volume Expansion']
  },
  {
    id: 'k8s-cka-fc-41', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd5',
    front: 'NetworkPolicy: podSelector vs namespaceSelector vs ipBlock inside a rule.',
    hint: 'And the AND/OR trap.',
    back: '<code>podSelector</code> — pods in the <em>policy own</em> namespace. <code>namespaceSelector</code> — all pods in matching namespaces. Both in <strong>one list item</strong> = AND (those pods in those namespaces); as <strong>two list items</strong> = OR. <code>ipBlock</code> — CIDR with optional <code>except</code>, for non-pod traffic.',
    tags: ['NetworkPolicy', 'Security']
  },
  {
    id: 'k8s-cka-fc-42', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'Approve a pending user CertificateSigningRequest.',
    hint: 'Two commands: see it, sign it.',
    back: '<code>kubectl get csr</code> then <code>kubectl certificate approve NAME</code>. Retrieve the signed cert with <code>kubectl get csr NAME -o jsonpath=\'{.status.certificate}\' | base64 -d</code>. Deny with <code>kubectl certificate deny</code>. Control plane certs are a different thing — <code>kubeadm certs renew</code>.',
    tags: ['Certificates', 'Authentication']
  },
  {
    id: 'k8s-cka-fc-43', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'Liveness vs readiness vs startup probe.',
    hint: 'Restart, route, wait.',
    back: '<strong>Liveness</strong> — failure restarts the container. <strong>Readiness</strong> — failure removes the pod from Service endpoints (no restart). <strong>Startup</strong> — disables the other two until it first succeeds, so slow-booting apps are not killed. Slow start + a liveness probe with no startup probe is the classic crash loop.',
    tags: ['Probes', 'Reliability']
  },
  {
    id: 'k8s-cka-fc-44', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd3',
    front: 'Job: completions vs parallelism vs backoffLimit.',
    hint: 'How many, how fast, how many retries.',
    back: '<code>completions</code> — how many successful pod runs are required. <code>parallelism</code> — how many run at once. <code>backoffLimit</code> — retries before the Job is marked Failed (default 6). <code>activeDeadlineSeconds</code> caps total wall-clock time and beats backoffLimit.',
    tags: ['Jobs', 'Batch']
  },
  {
    id: 'k8s-cka-fc-45', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd5',
    front: 'Gateway API: the three roles and their objects.',
    hint: 'Infra, cluster, app.',
    back: '<strong>GatewayClass</strong> — owned by the infrastructure provider (which controller implements it). <strong>Gateway</strong> — owned by the cluster operator: listeners, ports, TLS, address. <strong>HTTPRoute</strong> (and friends) — owned by application teams and attached to a Gateway. This role split is the main reason it replaces Ingress.',
    tags: ['Gateway API', 'Ingress']
  },
  {
    id: 'k8s-cka-fc-46', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'emptyDir vs hostPath vs PVC.',
    hint: 'Lifetime and blast radius.',
    back: '<strong>emptyDir</strong> — scratch space for the pod lifetime, shared by its containers; survives container restarts, dies with the pod. <strong>hostPath</strong> — a node directory; a privilege-escalation risk, banned by baseline/restricted PSS. <strong>PVC</strong> — durable storage that outlives the pod.',
    tags: ['Volumes', 'Storage']
  },
  {
    id: 'k8s-cka-fc-47', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd4',
    front: 'Check what an identity is allowed to do.',
    hint: 'One verb, one flag.',
    back: '<code>kubectl auth can-i VERB RESOURCE -n NS</code>, and impersonate with <code>--as=system:serviceaccount:NS:NAME</code> or <code>--as=user</code>. <code>kubectl auth can-i --list</code> dumps everything the identity can do. Much faster than reading RoleBindings by hand.',
    tags: ['RBAC', 'kubectl']
  },
  {
    id: 'k8s-cka-fc-48', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'A static pod does not appear at all. Two checks.',
    hint: 'Path, then parse.',
    back: '1. Is <code>staticPodPath</code> in <code>/var/lib/kubelet/config.yaml</code> really the directory you wrote to? 2. <code>journalctl -u kubelet</code> for a YAML parse error. The scheduler and API server are never involved, so scheduler logs and <code>kubectl apply</code> are both dead ends.',
    tags: ['Static Pods', 'kubelet']
  },
  {
    id: 'k8s-cka-fc-49', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'Init containers vs native sidecars.',
    hint: 'restartPolicy on an init container.',
    back: '<strong>Init container</strong> — runs to completion, in order, before app containers start. <strong>Native sidecar</strong> — an init container with <code>restartPolicy: Always</code>: starts before the app, keeps running alongside it, and does not block Job completion. Ordinary containers have no ordering at all.',
    tags: ['Init Containers', 'Sidecar']
  },
  {
    id: 'k8s-cka-fc-50', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd1',
    front: 'A pod is stuck Terminating and its volume will not attach elsewhere. Why?',
    hint: 'The Node object.',
    back: 'While the <strong>Node object still exists</strong>, Kubernetes assumes the kubelet may still be writing and refuses to force-detach. Deleting the Node object lets the attach-detach controller release the volume. Never strip PVC/PV finalizers to "fix" this — that orphans real storage.',
    tags: ['Storage', 'CSI', 'Troubleshooting']
  },
  {
    id: 'k8s-cka-fc-51', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd4',
    front: 'ResourceQuota vs LimitRange.',
    hint: 'Namespace total vs per-container.',
    back: '<strong>ResourceQuota</strong> — an aggregate cap for the namespace (total CPU/memory requests and limits, object counts); requests that would exceed it are rejected. <strong>LimitRange</strong> — per-container defaults, minimums, and maximums, injected at admission when a container omits them.',
    tags: ['ResourceQuota', 'LimitRange']
  },
  {
    id: 'k8s-cka-fc-52', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'Which Ingress field selects the controller, and which is deprecated?',
    hint: 'Spec field beats annotation.',
    back: 'Use <code>spec.ingressClassName</code>, which references an <strong>IngressClass</strong> object; a class can be marked default via the <code>ingressclass.kubernetes.io/is-default-class</code> annotation. The old <code>kubernetes.io/ingress.class</code> annotation is deprecated.',
    tags: ['Ingress', 'IngressClass']
  },
  {
    id: 'k8s-cka-fc-53', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'Debug a distroless container with no shell.',
    hint: 'Ephemeral container.',
    back: '<code>kubectl debug -it POD --image=busybox --target=app</code> attaches an <strong>ephemeral container</strong> sharing the process namespace of <code>app</code>. Variants: <code>--copy-to</code> makes a debug copy of the pod, and <code>kubectl debug node/NODE -it --image=…</code> gives a host-namespace pod on a node.',
    tags: ['kubectl debug', 'Troubleshooting']
  },
  {
    id: 'k8s-cka-fc-54', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd3',
    front: 'Node affinity vs pod affinity vs pod anti-affinity vs taints.',
    hint: 'Who is attracted to whom.',
    back: '<strong>Node affinity</strong> — pod → node labels (attract). <strong>Pod affinity</strong> — pod → nodes already running matching pods (co-locate). <strong>Pod anti-affinity</strong> — keep matching pods apart, per <code>topologyKey</code>. <strong>Taints</strong> — set on the node, repel pods lacking a toleration. Affinity attracts, taints repel.',
    tags: ['Scheduling', 'Affinity']
  },
  {
    id: 'k8s-cka-fc-55', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'Rolling back a Helm release vs a Deployment.',
    hint: 'Two different histories.',
    back: 'Deployment: <code>kubectl rollout undo deployment/X [--to-revision=N]</code>, backed by old ReplicaSets (<code>revisionHistoryLimit</code>, default 10). Helm: <code>helm rollback RELEASE [REVISION]</code>, backed by release Secrets. <code>helm template | kubectl apply</code> throws that history away.',
    tags: ['Helm', 'Rollout']
  },
  {
    id: 'k8s-cka-fc-56', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd5',
    front: 'Expose a Deployment on a stable in-cluster address in one command.',
    hint: 'Two ports involved.',
    back: '<code>kubectl expose deployment api --port=80 --target-port=8080</code> — creates a ClusterIP Service (<code>port</code> is what clients call, <code>targetPort</code> is the container port; it may be a <em>named</em> port). Add <code>--type=NodePort</code> or <code>--type=LoadBalancer</code> for external access.',
    tags: ['Services', 'kubectl']
  },
  {
    id: 'k8s-cka-fc-57', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'Wire a TLS certificate into an Ingress.',
    hint: 'One Secret type, one spec block.',
    back: 'Create a <code>kubernetes.io/tls</code> Secret: <code>kubectl create secret tls shop-tls --cert=tls.crt --key=tls.key</code>. Reference it in <code>spec.tls: [{hosts: [shop.example.com], secretName: shop-tls}]</code>. The Secret must live in the <strong>same namespace</strong> as the Ingress.',
    tags: ['Ingress', 'TLS', 'Secrets']
  },
  {
    id: 'k8s-cka-fc-58', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'Pod is Pending: the five things to check.',
    hint: 'All visible in describe Events.',
    back: '1. Insufficient CPU/memory on every node. 2. nodeSelector / affinity matches nothing. 3. A taint with no matching toleration. 4. An unbound PVC (missing StorageClass or provisioner). 5. Scheduling gates, or no Ready nodes at all. <code>kubectl describe pod</code> names which.',
    tags: ['Scheduling', 'Troubleshooting']
  },
  {
    id: 'k8s-cka-fc-59', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'Encrypt Secrets at rest — what actually has to happen?',
    hint: 'Config file, flag, rewrite.',
    back: 'Write an <strong>EncryptionConfiguration</strong> (aescbc, aesgcm, secretbox, or a KMS provider), pass <code>--encryption-provider-config</code> to kube-apiserver and mount the file into the static pod. Existing Secrets stay unencrypted until rewritten: <code>kubectl get secrets -A -o json | kubectl replace -f -</code>.',
    tags: ['Secrets', 'Encryption']
  },
  {
    id: 'k8s-cka-fc-60', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd3',
    front: 'Rolling update knobs: maxSurge and maxUnavailable.',
    hint: 'Above and below the desired count.',
    back: '<code>maxSurge</code> — how many pods above the desired count may exist during the roll. <code>maxUnavailable</code> — how many below it. Both default to 25%. Zero downtime = <code>maxUnavailable: 0</code> with a non-zero surge. <code>Recreate</code> strategy kills everything first.',
    tags: ['Deployment', 'Rolling Update']
  },
  {
    id: 'k8s-cka-fc-61', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'What does a headless Service (clusterIP: None) change?',
    hint: 'No VIP, different DNS answer.',
    back: 'No ClusterIP is allocated and kube-proxy programs nothing. CoreDNS returns the <strong>pod A records</strong> directly instead of a single VIP, and for a StatefulSet naming it as <code>serviceName</code> gives per-pod names <code>pod-0.svc.ns.svc.cluster.local</code>. Used for peer discovery in clustered systems.',
    tags: ['Services', 'DNS', 'StatefulSet']
  },
  {
    id: 'k8s-cka-fc-62', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'Which node/pod placement decisions belong to which component?',
    hint: 'Scheduler, kubelet, API server.',
    back: '<strong>kube-scheduler</strong> — filters and scores nodes (affinity, taints, resources, spread) and binds the pod. <strong>kubelet</strong> — admits or rejects on the node, restarts containers, evicts under node pressure. <strong>API server admission</strong> — quotas, defaults, PSS, webhooks, all before persistence.',
    tags: ['Architecture', 'Scheduling']
  }
];

export default K8S_CKA_FLASHCARDS_3;
