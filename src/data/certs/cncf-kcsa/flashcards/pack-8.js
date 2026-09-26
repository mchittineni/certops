export const CNCF_KCSA_FLASHCARDS_8 = [
  {
    id: 'cncf-kcsa-fc-176',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What are the three main sections of a kubeconfig file, and which one holds secrets?',
    hint: 'Where to connect, who you are, and the pairing of the two.',
    back: '<strong>clusters</strong> (API server URL and the CA to trust), <strong>users</strong> (credentials: client certificate and key, bearer token, or an exec plugin) and <strong>contexts</strong> (a named pairing of a cluster, a user and an optional namespace). The <strong>users</strong> section carries the sensitive material, which is why the whole file should be owner-only (0600) and never shared.',
    tags: ['kubeconfig', 'Client security']
  },
  {
    id: 'cncf-kcsa-fc-177',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'In what order does kubectl find its kubeconfig?',
    hint: 'Flag, then environment, then home directory.',
    back: 'First the <code>--kubeconfig</code> flag (one file). Otherwise the <code>KUBECONFIG</code> environment variable, which may list several files that kubectl <strong>merges</strong>. Otherwise <code>~/.kube/config</code>. Knowing the order matters when auditing where credentials live, and merged files mean a context or exec entry can come from a file you did not expect.',
    tags: ['kubeconfig', 'kubectl']
  },
  {
    id: 'cncf-kcsa-fc-178',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'How does a client-go exec credential plugin work, and why is it preferred over static tokens?',
    hint: 'kubectl runs a command and reads JSON back.',
    back: 'The kubeconfig user entry names a command in an <strong>exec</strong> block. kubectl runs it, and the plugin returns an <strong>ExecCredential</strong> JSON object holding a token or client certificate plus an expiry; kubectl caches it and reruns the plugin when it expires. Plugins such as kubelogin or cloud CLIs get <strong>short-lived</strong> credentials from an IdP with MFA, so the kubeconfig itself holds no long-lived secret.',
    tags: ['Exec plugins', 'Client security', 'Authentication']
  },
  {
    id: 'cncf-kcsa-fc-179',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Why are X.509 client certificates a poor choice for human users of Kubernetes?',
    hint: 'Think about leaving the company.',
    back: 'Kubernetes does <strong>not check revocation</strong> for client certificates, so a leaked or departed user\'s certificate works until it <strong>expires</strong>. Group membership is baked into the certificate\'s Organization fields and cannot change without reissuing. Lifetimes are often long. A certificate in <strong>system:masters</strong> bypasses RBAC entirely. Prefer OIDC or another IdP with short-lived tokens, and keep certificates for components and break-glass access.',
    tags: ['Client certificates', 'Authentication', 'Revocation']
  },
  {
    id: 'cncf-kcsa-fc-180',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'certificate-authority-data vs insecure-skip-tls-verify in a kubeconfig cluster entry: what does each do?',
    hint: 'One verifies the server; the other trusts anyone.',
    back: '<strong>certificate-authority-data</strong> embeds the CA (base64 PEM) that kubectl uses to verify the API server\'s certificate, protecting against impersonation. <strong>insecure-skip-tls-verify: true</strong> skips that verification, so kubectl will talk to any server presenting any certificate and can hand its credentials to an attacker. Fix trust errors by supplying the right CA, never by skipping verification.',
    tags: ['kubeconfig', 'TLS', 'Client security']
  },
  {
    id: 'cncf-kcsa-fc-181',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What are kubectl proxy\'s default listen address and filters, and what makes it dangerous?',
    hint: 'It adds your credentials to whatever it forwards.',
    back: 'By default it listens on <strong>127.0.0.1:8001</strong> and only accepts requests whose Host is localhost, rejecting some sensitive paths such as exec and attach. Every request it forwards carries the <strong>local user\'s credentials</strong>, so anyone who can reach the listener acts as that user. Using <code>--address 0.0.0.0</code> with a permissive <code>--accept-hosts</code> turns it into an unauthenticated gateway to the API.',
    tags: ['kubectl proxy', 'Client security']
  },
  {
    id: 'cncf-kcsa-fc-182',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'In recent kubeadm clusters, how do admin.conf and super-admin.conf differ?',
    hint: 'One can be cut off with RBAC; one cannot.',
    back: 'Since kubeadm 1.29, <strong>admin.conf</strong> holds a certificate in the group <strong>kubeadm:cluster-admins</strong>, which is bound to cluster-admin through an ordinary ClusterRoleBinding, so its access can be removed with RBAC. <strong>super-admin.conf</strong> holds a certificate in <strong>system:masters</strong>, which bypasses RBAC and cannot be revoked short of rotating the CA. Keep super-admin.conf offline for emergencies only.',
    tags: ['kubeadm', 'system:masters', 'Client certificates']
  },
  {
    id: 'cncf-kcsa-fc-183',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What does kubectl --as do, and what permission does it need?',
    hint: 'Act as someone else, with an audit trail.',
    back: '<code>--as</code> (and <code>--as-group</code>) sends impersonation headers so the request is authorized as another user or group. The caller needs the <strong>impersonate</strong> verb on users, groups or serviceaccounts in RBAC. It supports a low-privilege default identity with deliberate elevation, and testing what another identity can do. Audit logs record both the real and the impersonated user, but impersonate rights are powerful and must be granted narrowly.',
    tags: ['Impersonation', 'RBAC', 'Client security']
  },
  {
    id: 'cncf-kcsa-fc-184',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'How can a user check what their current credentials are allowed to do?',
    hint: 'Ask the API server a yes-or-no question.',
    back: '<code>kubectl auth can-i &lt;verb&gt; &lt;resource&gt;</code> asks the API server via a SelfSubjectAccessReview whether the request would be allowed; <code>kubectl auth can-i --list</code> shows the rules granted in a namespace, and <code>kubectl auth whoami</code> shows the authenticated user and groups. Admins can check another identity with <code>--as</code> if they hold impersonate rights.',
    tags: ['kubectl', 'RBAC', 'Access review']
  },
  {
    id: 'cncf-kcsa-fc-185',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Which pod subresources should be treated as code execution or data access, and which verb do they need?',
    hint: 'Three interactive ones.',
    back: '<strong>pods/exec</strong> (run commands), <strong>pods/attach</strong> (attach to a running process) and <strong>pods/portforward</strong> (tunnel to pod ports, bypassing ingress NetworkPolicy) all require <strong>create</strong> on the subresource. Anyone with them can read the pod\'s Secrets and tokens from inside. Grant them separately from read-only roles and only where interactive debugging is really needed.',
    tags: ['RBAC', 'Subresources', 'kubectl']
  },
  {
    id: 'cncf-kcsa-fc-186',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'How can a script get a short-lived token for a service account without creating a token Secret?',
    hint: 'A kubectl subcommand backed by the TokenRequest API.',
    back: '<code>kubectl create token &lt;serviceaccount&gt;</code> calls the <strong>TokenRequest</strong> API and prints a signed, time-bound token (lifetime chosen by the server, typically one hour, or requested with <code>--duration</code>, and optionally scoped with <code>--audience</code>). Nothing is stored in etcd and the token simply expires, unlike legacy Secret-based tokens that stay valid until the Secret is deleted.',
    tags: ['Service accounts', 'Tokens', 'TokenRequest']
  },
  {
    id: 'cncf-kcsa-fc-187',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'List three client-side habits that protect Kubernetes credentials on workstations.',
    hint: 'File, lifetime, origin.',
    back: 'Keep kubeconfig files <strong>owner-only (0600)</strong> and out of repositories, backups and screen shares. Use <strong>short-lived credentials</strong> from an exec plugin or IdP instead of embedded static tokens or long-lived certificates. Only use kubeconfig files and kubectl plugins from <strong>trusted sources</strong>, because both can execute code with your privileges.',
    tags: ['Client security', 'kubeconfig', 'Hygiene']
  },
  {
    id: 'cncf-kcsa-fc-188',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'PersistentVolume, PersistentVolumeClaim and StorageClass: what does each represent, and what is its scope?',
    hint: 'Supply, demand and the recipe.',
    back: 'A <strong>PersistentVolume</strong> is a piece of provisioned storage (cluster-scoped). A <strong>PersistentVolumeClaim</strong> is a user\'s request for storage (namespaced) that binds to one PV. A <strong>StorageClass</strong> (cluster-scoped) tells a provisioner how to create PVs dynamically: driver, parameters such as encryption, reclaim policy and binding mode. Because PVs are cluster-scoped, creating them should be an admin privilege.',
    tags: ['Storage', 'PersistentVolume', 'StorageClass']
  },
  {
    id: 'cncf-kcsa-fc-189',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What happens to data under the Retain, Delete and Recycle reclaim policies?',
    hint: 'One is deprecated.',
    back: '<strong>Retain</strong>: the PV and its storage survive claim deletion (PV goes Released, not reusable automatically); an admin must wipe and delete it, or data lingers. <strong>Delete</strong>: the PV and its backing storage are removed with the claim, the default for dynamic provisioning. <strong>Recycle</strong>: a basic scrub (rm -rf) then reuse; it is <strong>deprecated</strong> in favour of dynamic provisioning.',
    tags: ['Storage', 'Reclaim policy', 'Data remanence']
  },
  {
    id: 'cncf-kcsa-fc-190',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What do the four PersistentVolume access modes allow?',
    hint: 'Once means once per node, except for one mode.',
    back: '<strong>ReadWriteOnce</strong>: read-write by a single <em>node</em> (several pods on it can share). <strong>ReadOnlyMany</strong>: read-only by many nodes. <strong>ReadWriteMany</strong>: read-write by many nodes. <strong>ReadWriteOncePod</strong>: read-write by a single <em>pod</em> cluster-wide (CSI only, stable since 1.29), the mode for guaranteeing exactly one writer.',
    tags: ['Storage', 'Access modes']
  },
  {
    id: 'cncf-kcsa-fc-191',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Which volume types does the restricted Pod Security Standard allow in a pod spec?',
    hint: 'Eight types, none of them reaches the host directly.',
    back: 'Only <strong>configMap, csi, downwardAPI, emptyDir, ephemeral, persistentVolumeClaim, projected and secret</strong>. Inline hostPath, nfs, iscsi and other direct types are rejected, so storage has to come through claims that admins control. Note that a claim may still bind to a dangerous PV such as a hostPath PV, because Pod Security does not look through the claim.',
    tags: ['Pod Security', 'Storage', 'Volumes']
  },
  {
    id: 'cncf-kcsa-fc-192',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What are the controller and node parts of a CSI driver, and which needs more privilege?',
    hint: 'One talks to the storage API; one mounts things on nodes.',
    back: 'The <strong>controller plugin</strong> (usually a Deployment with sidecars such as external-provisioner and external-attacher) creates, deletes, attaches and snapshots volumes through the storage backend\'s API, so it holds backend credentials. The <strong>node plugin</strong> (a DaemonSet) mounts volumes on each node and typically runs <strong>privileged</strong> with host mounts. Both are high-trust components deserving supply-chain vetting and a locked-down namespace.',
    tags: ['CSI', 'Storage', 'Node security']
  },
  {
    id: 'cncf-kcsa-fc-193',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Why is a hostPath volume dangerous, and which Pod Security level blocks it?',
    hint: 'It is a window into the node\'s disk.',
    back: 'A <strong>hostPath</strong> volume mounts a file or directory from the node into the pod, which can expose kubelet credentials, runtime sockets, other pods\' data or system binaries, and writable mounts can plant files on the host. The <strong>baseline</strong> Pod Security Standard (and therefore restricted) forbids hostPath volumes; use them only for vetted node agents in privileged system namespaces.',
    tags: ['hostPath', 'Pod Security', 'Storage']
  },
  {
    id: 'cncf-kcsa-fc-194',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'How can you stop a namespace from provisioning volumes from a particular StorageClass?',
    hint: 'Quota keys can be scoped to a class name.',
    back: 'Use a <strong>ResourceQuota</strong> with class-scoped keys: <code>NAME.storageclass.storage.k8s.io/requests.storage</code> and <code>NAME.storageclass.storage.k8s.io/persistentvolumeclaims</code>. Setting them to <strong>0</strong> blocks claims for that class in the namespace. RBAC cannot do this, because StorageClasses are cluster-scoped and any user who can create a PVC can name any class; admission policy is the other option.',
    tags: ['ResourceQuota', 'StorageClass', 'Multi-tenancy']
  },
  {
    id: 'cncf-kcsa-fc-195',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'VolumeSnapshot, VolumeSnapshotContent and VolumeSnapshotClass: how are they scoped, and what is the security point?',
    hint: 'The same split as claims and volumes.',
    back: '<strong>VolumeSnapshot</strong> is a namespaced request, like a PVC. <strong>VolumeSnapshotContent</strong> is the cluster-scoped record of the actual snapshot, like a PV. <strong>VolumeSnapshotClass</strong> is cluster-scoped configuration, like a StorageClass. Anyone who can create a PVC with a snapshot as dataSource in the namespace can read a full copy of the data, so snapshot and claim rights equal data access.',
    tags: ['VolumeSnapshot', 'Storage', 'RBAC']
  },
  {
    id: 'cncf-kcsa-fc-196',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What does mountPropagation: Bidirectional do, and why is it restricted?',
    hint: 'Mounts can flow back to the host.',
    back: 'With <strong>Bidirectional</strong> propagation, mounts the container creates under the volume propagate back to the <strong>host</strong> and to other containers using the same host path, and host mounts propagate in. That lets a container alter the node\'s mount table, which is why Kubernetes allows it only in <strong>privileged</strong> containers. It is needed by CSI node plugins; <strong>HostToContainer</strong> is the safer one-way mode for most agents.',
    tags: ['Mount propagation', 'CSI', 'Privileged']
  },
  {
    id: 'cncf-kcsa-fc-197',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'How do you stop a pod from exhausting node disk with logs, writable layers or emptyDir?',
    hint: 'Disk has its own resource name.',
    back: 'Set <strong>ephemeral-storage</strong> requests and limits on each container, which cover the writable layer, container logs and disk-backed emptyDir, and a <strong>sizeLimit</strong> on emptyDir volumes. When a pod exceeds its limit the kubelet evicts that pod, instead of the node reaching DiskPressure and evicting others. LimitRange can apply defaults per namespace and ResourceQuota can cap the total.',
    tags: ['Ephemeral storage', 'Denial of service', 'Resource limits']
  },
  {
    id: 'cncf-kcsa-fc-198',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'volumeMounts readOnly vs readOnlyRootFilesystem: what does each protect?',
    hint: 'One is per mount; one is the image layer.',
    back: '<code>readOnly: true</code> on a <strong>volumeMount</strong> makes that one mounted volume read-only for that container, while other containers may still write to it. <code>readOnlyRootFilesystem: true</code> in the security context makes the container\'s <strong>image filesystem</strong> read-only but leaves mounted volumes writable unless they are also mounted read-only. Use both to enforce least privilege on writes.',
    tags: ['Volumes', 'Security context', 'Least privilege']
  },
  {
    id: 'cncf-kcsa-fc-199',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What can a projected volume combine, and what does it add for service account tokens?',
    hint: 'Several sources, one directory.',
    back: 'A <strong>projected</strong> volume merges <strong>serviceAccountToken</strong>, <strong>secret</strong>, <strong>configMap</strong>, <strong>downwardAPI</strong> and <strong>clusterTrustBundle</strong> sources into one directory. For tokens it lets the pod request a <strong>bound, expiring</strong> token with a chosen <code>audience</code> and <code>expirationSeconds</code>, which the kubelet rotates automatically. This is how the default service account token is mounted today.',
    tags: ['Projected volumes', 'Service accounts', 'Tokens']
  },
  {
    id: 'cncf-kcsa-fc-200',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'CSI ephemeral inline volumes vs generic ephemeral volumes: what is the security consideration?',
    hint: 'Who controls the driver parameters?',
    back: '<strong>CSI inline</strong> volumes let a pod pass driver parameters directly in the pod spec, and only drivers whose CSIDriver object lists the <strong>Ephemeral</strong> lifecycle mode accept them; pod authors therefore control those parameters, and Pod Security allows the csi type. <strong>Generic ephemeral</strong> volumes create a normal PVC from a template through a StorageClass, so admin-controlled classes and quotas still apply. Only enable inline mode on drivers safe for untrusted pod authors.',
    tags: ['CSI', 'Ephemeral volumes', 'Storage']
  }
];

export default CNCF_KCSA_FLASHCARDS_8;
