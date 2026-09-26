export const CNCF_KCNA_FLASHCARDS_14 = [
  {
    id: 'cncf-kcna-fc-326',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What is kubectl port-forward for, and why is it not a way to expose an app?',
    hint: 'A temporary tunnel through the control plane.',
    back: '<code>kubectl port-forward pod/web 8080:80</code> opens a local port and tunnels traffic through the <strong>API server and kubelet</strong> to one Pod, so you can reach a database or admin UI for <strong>debugging</strong> without a Service or Ingress. Given <code>svc/</code> or <code>deploy/</code>, it still picks a <strong>single Pod</strong>: no load balancing, no failover, and it stops when the command exits. It needs the <code>pods/portforward</code> RBAC permission. Use a Service, Ingress or Gateway for real exposure.',
    tags: ['kubectl', 'Troubleshooting']
  },
  {
    id: 'cncf-kcna-fc-327',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What does "no matches for kind X in version Y" mean?',
    hint: 'The API server has never heard of it.',
    back: 'The API server does not serve that <strong>group/version/kind</strong>. Either a <strong>CRD is not installed</strong> (for example cert-manager or Argo CD resources), or the apiVersion has been <strong>removed</strong> in this Kubernetes version (for example extensions/v1beta1 Ingress). Check with <code>kubectl api-resources</code> and <code>kubectl api-versions</code>.',
    tags: ['CRDs', 'API versions']
  },
  {
    id: 'cncf-kcna-fc-328',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'How do you reach a NodePort Service, and what range does it use?',
    hint: 'Same high port on every node.',
    back: 'A NodePort Service opens one port, by default in <strong>30000-32767</strong>, on <strong>every node</strong>; clients use <code>NODE-IP:NODEPORT</code>. It also still gets a ClusterIP and <code>port</code> for in-cluster use. kubectl get svc shows both as <code>80:31542/TCP</code> (Service port : node port).',
    tags: ['NodePort', 'Services']
  },
  {
    id: 'cncf-kcna-fc-329',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'How do you work out why traffic to a Pod is being blocked by NetworkPolicy?',
    hint: 'Start from the destination Pod\'s labels.',
    back: 'List policies in the destination namespace and find those whose <strong>podSelector</strong> matches the Pod: once any selects it for ingress, only their <strong>combined allow rules</strong> apply. Check the source\'s Pod and namespace labels and the port against each <code>from</code> entry. Remember egress policies on the <strong>source</strong> side too (including DNS on port 53). Packet-level drop visibility comes from the CNI plugin, such as Cilium Hubble.',
    tags: ['NetworkPolicy', 'Troubleshooting']
  },
  {
    id: 'cncf-kcna-fc-330',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Where must the TLS Secret for an Ingress live, and what keys does it hold?',
    hint: 'Same place as the Ingress.',
    back: 'In the <strong>same namespace as the Ingress</strong>, as type <code>kubernetes.io/tls</code> with keys <code>tls.crt</code> and <code>tls.key</code>. If the controller cannot find it, most controllers serve their own default self-signed certificate (for ingress-nginx, the "Kubernetes Ingress Controller Fake Certificate").',
    tags: ['Ingress', 'TLS']
  },
  {
    id: 'cncf-kcna-fc-331',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Why does data written inside a container disappear after it restarts?',
    hint: 'Each container instance gets its own top layer.',
    back: 'A container\'s writes go to a <strong>writable layer</strong> on top of the read-only image layers. A restarted container gets a <strong>fresh</strong> writable layer, so earlier writes are gone. Anything that must survive belongs on a <strong>volume</strong>: emptyDir for Pod lifetime, a PersistentVolumeClaim for beyond it.',
    tags: ['Volumes', 'Ephemeral storage']
  },
  {
    id: 'cncf-kcna-fc-332',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Ephemeral vs persistent volumes: which common types fall where?',
    hint: 'Does it outlive the Pod?',
    back: '<strong>Ephemeral</strong> (live and die with the Pod): <code>emptyDir</code>, <code>configMap</code>, <code>secret</code>, <code>downwardAPI</code>, <code>projected</code>, and generic ephemeral volumes. <strong>Persistent</strong> (independent of any Pod): PersistentVolumes consumed through a <code>persistentVolumeClaim</code>. <code>hostPath</code> data outlives the Pod but is stuck on one node and is a security risk.',
    tags: ['Volumes']
  },
  {
    id: 'cncf-kcna-fc-333',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'A PersistentVolumeClaim sits in Pending. What are the usual causes?',
    hint: 'Start with kubectl describe pvc and read the events.',
    back: '<strong>No class to provision from</strong>: the claim names no StorageClass and there is no default, or names one that does not exist. <strong>Provisioner not working</strong>: the CSI driver or external-provisioner is missing or failing. <strong>No matching static PV</strong>: capacity, access mode, storageClassName or selector do not match any Available PV. <strong>WaitForFirstConsumer</strong>: the claim is intentionally Pending until a Pod that uses it is scheduled, which is normal, not a fault.',
    tags: ['PersistentVolumeClaim', 'Troubleshooting']
  },
  {
    id: 'cncf-kcna-fc-334',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'PersistentVolume vs PersistentVolumeClaim: scope and purpose',
    hint: 'Supply and demand.',
    back: '<strong>PersistentVolume (PV)</strong>: a piece of storage in the cluster, <strong>cluster-scoped</strong>, created by an admin or dynamically by a StorageClass. <strong>PersistentVolumeClaim (PVC)</strong>: a <strong>namespaced</strong> request for storage (size, access mode, class). The control plane binds one PVC to one PV; Pods reference the PVC, never the PV directly.',
    tags: ['PersistentVolume', 'PVC']
  },
  {
    id: 'cncf-kcna-fc-335',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'The four PersistentVolume access modes',
    hint: 'Once per node, once per Pod, many readers, many writers.',
    back: '<strong>ReadWriteOnce (RWO)</strong>: read-write by one <strong>node</strong>. <strong>ReadOnlyMany (ROX)</strong>: read-only by many nodes. <strong>ReadWriteMany (RWX)</strong>: read-write by many nodes (needs a shared filesystem such as NFS). <strong>ReadWriteOncePod (RWOP)</strong>: read-write by exactly one <strong>Pod</strong> cluster-wide (CSI only). Which modes are available depends on the storage backend.',
    tags: ['Access modes']
  },
  {
    id: 'cncf-kcna-fc-336',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'PersistentVolume phases: Available, Bound, Released, Failed',
    hint: 'Follow one volume from creation to after its claim is deleted.',
    back: '<strong>Available</strong>: free, not yet bound. <strong>Bound</strong>: bound to a claim. <strong>Released</strong>: the claim was deleted but the volume (with <code>Retain</code>) still holds data and a stale claimRef, so it will <strong>not bind again automatically</strong> until an admin cleans it up. <strong>Failed</strong>: automatic reclamation failed.',
    tags: ['PersistentVolume', 'Lifecycle']
  },
  {
    id: 'cncf-kcna-fc-337',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What rules decide whether a PVC binds to a pre-created PV?',
    hint: 'Size, mode, class, selector.',
    back: 'The PV must have <strong>capacity at least</strong> the request, support the requested <strong>access modes</strong> and <strong>volumeMode</strong>, have the same <strong>storageClassName</strong> (an empty string means "no class"), and match any label <strong>selector</strong> on the claim. The smallest suitable PV wins; a bigger PV binds whole, so a 5Gi claim can end up owning a 100Gi volume.',
    tags: ['PVC', 'Binding']
  },
  {
    id: 'cncf-kcna-fc-338',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What is storage object in use protection?',
    hint: 'Two finalizers guard against pulling storage out from under a Pod.',
    back: 'A PVC in use by a Pod carries the <code>kubernetes.io/pvc-protection</code> finalizer, and a bound PV carries <code>kubernetes.io/pv-protection</code>. Deleting them only marks them <strong>Terminating</strong>; the PVC is removed once <strong>no Pod uses it</strong>, and the PV once it is no longer bound. This prevents data loss while a workload is running.',
    tags: ['PVC', 'Finalizers']
  },
  {
    id: 'cncf-kcna-fc-339',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'volumeMode: Filesystem vs Block',
    hint: 'volumeMounts or volumeDevices.',
    back: '<strong>Filesystem</strong> (default): the volume is formatted if needed and mounted into the container at a path via <code>volumeMounts</code>. <strong>Block</strong>: the volume is exposed as a <strong>raw block device</strong> via <code>volumeDevices</code> and <code>devicePath</code>, with no filesystem; used by databases or storage software that manage the disk themselves.',
    tags: ['volumeMode', 'Block volumes']
  },
  {
    id: 'cncf-kcna-fc-340',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Which sources can a projected volume combine?',
    hint: 'Five sources, one directory.',
    back: '<code>secret</code>, <code>configMap</code>, <code>downwardAPI</code>, <code>serviceAccountToken</code> and <code>clusterTrustBundle</code>, all mapped into <strong>one directory</strong>. The kubelet itself uses a projected volume to deliver the ServiceAccount token, the cluster CA bundle and the namespace file at /var/run/secrets/kubernetes.io/serviceaccount.',
    tags: ['Projected volumes']
  },
  {
    id: 'cncf-kcna-fc-341',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'CSI, CRI and CNI: which interface does what?',
    hint: 'Storage, runtime, network.',
    back: '<strong>CSI</strong> (Container Storage Interface): how Kubernetes provisions, attaches and mounts volumes through vendor drivers. <strong>CRI</strong> (Container Runtime Interface): how the kubelet talks to runtimes such as containerd or CRI-O. <strong>CNI</strong> (Container Network Interface): how Pod network interfaces and IPs are set up. All three let vendors plug in without changing Kubernetes core.',
    tags: ['CSI', 'CRI', 'CNI']
  },
  {
    id: 'cncf-kcna-fc-342',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What are the moving parts of a typical CSI driver deployment?',
    hint: 'A controller, a per-node plugin, and sidecars.',
    back: 'A <strong>controller plugin</strong> (Deployment or StatefulSet) handles create/delete, attach/detach, snapshots and resizing, with Kubernetes sidecars such as <strong>external-provisioner</strong>, external-attacher, external-snapshotter and external-resizer watching the API. A <strong>node plugin</strong> (DaemonSet) mounts volumes on each node for the kubelet, with node-driver-registrar. A <code>CSIDriver</code> object describes the driver\'s capabilities.',
    tags: ['CSI']
  },
  {
    id: 'cncf-kcna-fc-343',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Why can a single-replica Deployment with an RWO volume hang during a rollout, and how is it fixed?',
    hint: 'Old and new Pod overlap in time.',
    back: 'RollingUpdate starts the new Pod <strong>before</strong> stopping the old one. If it lands on another node, the ReadWriteOnce block volume is still attached to the old node, giving a <strong>Multi-Attach error</strong> and ContainerCreating. Fixes: <code>strategy: Recreate</code> (stop first, brief downtime), or a StatefulSet, which replaces its Pod only after the old one terminates.',
    tags: ['ReadWriteOnce', 'Deployments']
  },
  {
    id: 'cncf-kcna-fc-344',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'hostPath vs local PersistentVolume',
    hint: 'Both use a node\'s disk; only one tells the scheduler.',
    back: '<strong>hostPath</strong> mounts a node path directly into a Pod spec; the scheduler has no idea the data lives on one node, and it is a security risk. A <strong>local PV</strong> is a proper PersistentVolume with required <strong>nodeAffinity</strong>, so Pods using its claim are always scheduled to that node (a "volume node affinity conflict" if the node is unavailable). Use local PVs for node-attached disks.',
    tags: ['hostPath', 'Local volumes']
  },
  {
    id: 'cncf-kcna-fc-345',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Which mounts receive ConfigMap and Secret updates automatically?',
    hint: 'Directories yes; single files via subPath and env vars no.',
    back: 'Whole ConfigMap/Secret <strong>volume mounts</strong> are updated by the kubelet (atomic symlink swap) after a delay of up to the sync period plus cache TTL. <strong>subPath</strong> mounts and <strong>environment variables</strong> are never updated; they need a Pod restart. <strong>immutable</strong> objects cannot change at all. The app still has to re-read the file to notice.',
    tags: ['ConfigMap', 'Secrets', 'subPath']
  },
  {
    id: 'cncf-kcna-fc-346',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What do fsGroup and fsGroupChangePolicy do for volumes?',
    hint: 'Group ownership so non-root can write.',
    back: '<strong>fsGroup</strong> (Pod securityContext) adds a supplementary group to all containers and makes the kubelet set that <strong>group ownership and permissions</strong> on supported volumes, so non-root processes can write. On large volumes the recursive change is slow; <code>fsGroupChangePolicy: OnRootMismatch</code> skips it when the root directory already matches.',
    tags: ['fsGroup', 'securityContext']
  },
  {
    id: 'cncf-kcna-fc-347',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'How much data can a ConfigMap or Secret hold, and where should larger files go?',
    hint: 'Both are stored in etcd.',
    back: 'Each ConfigMap or Secret is limited to <strong>1 MiB</strong> of data, because every object lives in etcd and large objects slow the whole control plane. Use them for configuration and credentials, not datasets. Larger files belong in the <strong>image</strong>, on a <strong>PersistentVolume</strong>, in object storage, or are fetched by an init container into an emptyDir at startup.',
    tags: ['ConfigMap', 'Secrets', 'Limits']
  },
  {
    id: 'cncf-kcna-fc-348',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Can clients outside the cluster reach Pod IPs directly?',
    hint: 'Routable inside, usually not outside.',
    back: 'Normally <strong>no</strong>: Pod IPs come from the cluster\'s Pod CIDR and are routed between nodes, not advertised to outside networks (some cloud CNIs using VPC-native IPs are an exception). Expose apps with a <strong>Service</strong> (NodePort, LoadBalancer), <strong>Ingress</strong> or Gateway, or use <code>kubectl port-forward</code> for ad-hoc testing.',
    tags: ['Pod network', 'Services']
  },
  {
    id: 'cncf-kcna-fc-349',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'How do you limit how much node disk a container can fill?',
    hint: 'Disk is a resource too.',
    back: 'Set <code>resources.requests</code> and <code>limits</code> for <strong>ephemeral-storage</strong> on the container. It counts the writable layer, logs and disk-backed emptyDirs. Exceeding the limit gets the Pod <strong>evicted</strong> by the kubelet, and the request is used by the scheduler, just like CPU and memory.',
    tags: ['Ephemeral storage', 'Resources']
  },
  {
    id: 'cncf-kcna-fc-350',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What is a generic ephemeral volume and when would you use one?',
    hint: 'A PVC that lives and dies with its Pod.',
    back: 'Declared inline in the Pod spec with an <code>ephemeral.volumeClaimTemplate</code>: Kubernetes creates a <strong>PVC owned by the Pod</strong>, a StorageClass provisions it, and it is <strong>deleted with the Pod</strong>. Use it for large scratch space that needs real storage features (a specific class, snapshots, capacity tracking) but no persistence, instead of a node-disk emptyDir.',
    tags: ['Ephemeral volumes', 'PVC']
  }
];

export default CNCF_KCNA_FLASHCARDS_14;
