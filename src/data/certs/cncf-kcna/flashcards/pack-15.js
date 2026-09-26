export const CNCF_KCNA_FLASHCARDS_15 = [
  {
    id: 'cncf-kcna-fc-351',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Static vs dynamic provisioning of PersistentVolumes',
    hint: 'Who creates the PV, and when?',
    back: '<strong>Static</strong>: an administrator creates PersistentVolumes in advance and claims bind to whichever matches. <strong>Dynamic</strong>: a claim names a <strong>StorageClass</strong> and its provisioner (usually a CSI driver) creates the disk and PV on demand. Dynamic is the norm in cloud clusters; static suits pre-existing disks or NFS exports.',
    tags: ['Dynamic provisioning', 'PersistentVolume']
  },
  {
    id: 'cncf-kcna-fc-352',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'The main fields of a StorageClass',
    hint: 'Who, how, when, afterwards.',
    back: '<strong>provisioner</strong> (which driver, e.g. a CSI driver name), <strong>parameters</strong> (driver-specific disk settings), <strong>reclaimPolicy</strong> (Delete by default, or Retain), <strong>volumeBindingMode</strong> (Immediate or WaitForFirstConsumer), <strong>allowVolumeExpansion</strong>, <strong>mountOptions</strong> and <strong>allowedTopologies</strong>. Apart from metadata, these cannot be changed after creation.',
    tags: ['StorageClass']
  },
  {
    id: 'cncf-kcna-fc-353',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What is a VolumeAttributesClass, and how does it differ from a StorageClass?',
    hint: 'Changing the performance of a volume that already exists.',
    back: 'A <strong>StorageClass</strong> applies its parameters once, when the volume is provisioned. A <strong>VolumeAttributesClass</strong> (<code>storage.k8s.io/v1</code>, GA in Kubernetes 1.34) holds modifiable attributes such as IOPS or throughput tiers. Set <code>volumeAttributesClassName</code> on a PVC, then change it to another class later to <strong>modify the live volume in place</strong>. The CSI driver must implement <code>ModifyVolume</code>, and a class\'s parameters are immutable, so you switch classes rather than edit one.',
    tags: ['VolumeAttributesClass', 'CSI', 'Storage']
  },
  {
    id: 'cncf-kcna-fc-354',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Reclaim policies: Delete vs Retain (and Recycle)',
    hint: 'What happens to the disk after the claim is gone?',
    back: '<strong>Delete</strong>: deleting the claim deletes the PV and the underlying disk (default for dynamic provisioning). <strong>Retain</strong>: the PV becomes Released with its data kept for manual recovery (default for manually created PVs). <strong>Recycle</strong> (basic scrub and reuse) is <strong>deprecated</strong>; use dynamic provisioning instead.',
    tags: ['Reclaim policy']
  },
  {
    id: 'cncf-kcna-fc-355',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'How is a StorageClass marked as the cluster default?',
    hint: 'An annotation, not a field.',
    back: 'With the annotation <code>storageclass.kubernetes.io/is-default-class: "true"</code>. Claims with <strong>no</strong> storageClassName get the default; claims with <code>storageClassName: ""</code> explicitly ask for <strong>no class</strong> and only bind to pre-created PVs without a class. Keep a single default to avoid surprises.',
    tags: ['StorageClass', 'Default class']
  },
  {
    id: 'cncf-kcna-fc-356',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'VolumeSnapshot, VolumeSnapshotContent, VolumeSnapshotClass: how do they map to PV concepts?',
    hint: 'Think PVC, PV, StorageClass.',
    back: '<strong>VolumeSnapshot</strong> (namespaced) is the user\'s request, like a PVC. <strong>VolumeSnapshotContent</strong> (cluster-scoped) is the actual snapshot in the storage system, like a PV. <strong>VolumeSnapshotClass</strong> names the CSI driver and a deletionPolicy, like a StorageClass. The snapshot CRDs and snapshot controller must be installed; many distributions include them.',
    tags: ['VolumeSnapshot', 'CSI']
  },
  {
    id: 'cncf-kcna-fc-357',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Restore from a snapshot vs clone a volume: how do you ask for each?',
    hint: 'Both use dataSource on a new claim.',
    back: 'Create a new PVC with <code>dataSource</code> (or <code>dataSourceRef</code>) pointing at either a <strong>VolumeSnapshot</strong> (restore) or an existing <strong>PersistentVolumeClaim</strong> (clone). Both need CSI driver support, must be in the <strong>same namespace</strong>, and the new claim must request <strong>at least</strong> the source size. A clone needs no snapshot step first.',
    tags: ['VolumeSnapshot', 'Cloning']
  },
  {
    id: 'cncf-kcna-fc-358',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Is a volume snapshot a backup?',
    hint: 'Where does the snapshot live?',
    back: 'Not by itself. A CSI snapshot usually lives in the <strong>same storage system</strong> (and often the same region or account) as the volume, so it protects against logical mistakes such as a bad migration but not against losing that system or account. A real backup copies data <strong>elsewhere</strong> and captures the Kubernetes objects too; tools such as Velero combine resource backups with volume snapshots or file copies.',
    tags: ['VolumeSnapshot', 'Backup']
  },
  {
    id: 'cncf-kcna-fc-359',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'How do you grow a PersistentVolumeClaim?',
    hint: 'Edit the claim, if the class allows it.',
    back: 'The StorageClass must have <strong>allowVolumeExpansion: true</strong> and the driver must support resizing. Then raise <code>spec.resources.requests.storage</code> on the claim. Many CSI drivers expand <strong>online</strong>, including the filesystem, while the Pod runs; others finish the filesystem resize on the next mount. Claims can only grow, never shrink.',
    tags: ['Volume expansion', 'PVC']
  },
  {
    id: 'cncf-kcna-fc-360',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'How does a StatefulSet give each replica its own storage?',
    hint: 'A template for claims, not a shared claim.',
    back: '<code>volumeClaimTemplates</code> makes the controller create one PVC per replica, named <code>TEMPLATE-STATEFULSET-ORDINAL</code> (e.g. data-db-0). A replacement db-0 reattaches to data-db-0. By default the claims <strong>survive</strong> scale-down and StatefulSet deletion; <code>persistentVolumeClaimRetentionPolicy</code> (whenScaled, whenDeleted) can switch that to Delete.',
    tags: ['StatefulSet', 'PVC']
  },
  {
    id: 'cncf-kcna-fc-361',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Block vs file vs object storage for Kubernetes workloads',
    hint: 'Disk, shared filesystem, HTTP API.',
    back: '<strong>Block</strong> (cloud disks, iSCSI): one node at a time (RWO), best for databases. <strong>File</strong> (NFS, cloud file shares, CephFS): a shared filesystem many nodes can mount (RWX). <strong>Object</strong> (S3-compatible buckets): accessed by the app over an <strong>HTTP API</strong>, not mounted as a PV. Choose by access pattern.',
    tags: ['Storage types']
  },
  {
    id: 'cncf-kcna-fc-362',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Which CNCF projects provide storage for Kubernetes?',
    hint: 'One orchestrates Ceph, one is built by Rancher.',
    back: '<strong>Rook</strong> (graduated): an operator that runs <strong>Ceph</strong> inside the cluster for block, file and object storage. <strong>Longhorn</strong> (incubating): lightweight distributed <strong>block storage</strong> with replicas across nodes, snapshots and backups. Both expose storage through CSI drivers and StorageClasses. <strong>Vitess</strong> and <strong>TiKV</strong> are CNCF databases rather than volume providers.',
    tags: ['Rook', 'Longhorn', 'CNCF']
  },
  {
    id: 'cncf-kcna-fc-363',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'StorageClass parameters vs mountOptions',
    hint: 'Creating the disk vs mounting it.',
    back: '<strong>parameters</strong> go to the <strong>provisioner</strong> when a volume is created: disk type, IOPS, encryption, filesystem type, all defined by the driver. <strong>mountOptions</strong> are passed to the <strong>mount</strong> on the node each time the volume is attached to a Pod, such as <code>nfsvers=4.1</code> or <code>noatime</code>. Unsupported mount options make mounts fail.',
    tags: ['StorageClass', 'mountOptions']
  },
  {
    id: 'cncf-kcna-fc-364',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'How do you cap storage per namespace, overall and per class?',
    hint: 'ResourceQuota with class-prefixed keys.',
    back: 'A ResourceQuota with <code>requests.storage</code> caps the total requested by all claims, and <code>persistentvolumeclaims</code> caps their number. Per class: <code>CLASS.storageclass.storage.k8s.io/requests.storage</code> and <code>CLASS.storageclass.storage.k8s.io/persistentvolumeclaims</code>. A LimitRange with type PersistentVolumeClaim bounds the size of each individual claim.',
    tags: ['ResourceQuota', 'StorageClass']
  },
  {
    id: 'cncf-kcna-fc-365',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What does allowedTopologies do in a StorageClass?',
    hint: 'Where volumes may exist.',
    back: 'It restricts provisioning to listed <strong>topology domains</strong>, typically zones (<code>topology.kubernetes.io/zone</code>). Volumes from that class can only be created there, which helps with data residency or keeping disks near specific node pools. Combined with WaitForFirstConsumer, Pods using the class are scheduled only to nodes in those zones.',
    tags: ['StorageClass', 'Topology']
  },
  {
    id: 'cncf-kcna-fc-366',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'CSI storage capacity tracking: what problem does it solve?',
    hint: 'The scheduler normally cannot see free disk space in a pool.',
    back: 'For drivers with limited capacity per node or zone (such as local LVM), the scheduler could pick a node whose pool is full, and provisioning would then fail and retry. With capacity tracking, the driver publishes <strong>CSIStorageCapacity</strong> objects per topology segment and the scheduler uses them for <strong>WaitForFirstConsumer</strong> claims to choose nodes with room.',
    tags: ['Storage capacity', 'CSI']
  },
  {
    id: 'cncf-kcna-fc-367',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Why might a node refuse more Pods with volumes while CPU and memory are free?',
    hint: 'Clouds limit attachments per instance.',
    back: 'Each instance type can only attach a limited number of block volumes. CSI drivers report this per-node limit, recorded in the node\'s <strong>CSINode</strong> object, and the scheduler will not place a Pod whose volumes would exceed it ("exceed max volume count"). Fewer, larger volumes, other instance types, or more nodes are the usual fixes.',
    tags: ['Volume limits', 'CSI']
  },
  {
    id: 'cncf-kcna-fc-368',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Gi vs G, Mi vs M in Kubernetes quantities',
    hint: 'Binary vs decimal.',
    back: '<strong>Ki, Mi, Gi, Ti</strong> are powers of 1024 (1Gi = 1,073,741,824 bytes). <strong>k, M, G, T</strong> are powers of 1000 (1G = 1,000,000,000 bytes). So 1Gi is about 7% more than 1G. The same rules apply to memory requests and limits; a lowercase <code>m</code> means milli, so 500m memory is half a byte.',
    tags: ['Quantities']
  },
  {
    id: 'cncf-kcna-fc-369',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Can a Pod use a PVC from another namespace?',
    hint: 'Claims are namespaced; PVs are not.',
    back: 'No. A Pod references claims by name <strong>in its own namespace</strong> only. PVs are cluster-scoped, but each binds to exactly one claim. To share data across namespaces, give each namespace its own claim and PV pointing at the same <strong>shared file storage</strong> (for example the same NFS export), or share via an API instead.',
    tags: ['PVC', 'Namespaces']
  },
  {
    id: 'cncf-kcna-fc-370',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What is retroactive default StorageClass assignment?',
    hint: 'Pending claims get a second chance.',
    back: 'Stable since Kubernetes 1.28: when a default StorageClass is created or marked, existing claims whose storageClassName is <strong>unset</strong> are updated to use it and can then be provisioned. Claims with an explicit empty string (<code>""</code>) are left alone. This avoids Pending claims when a default is added after workloads were deployed.',
    tags: ['StorageClass', 'Default class']
  },
  {
    id: 'cncf-kcna-fc-371',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'How do you mount a volume read-only for one container?',
    hint: 'A flag on the mount, not on the claim.',
    back: 'Set <code>readOnly: true</code> on that container\'s <code>volumeMount</code> (or on the Pod\'s volume source). Other containers or Pods can still mount the same volume read-write if the access mode allows. This is separate from <code>readOnlyRootFilesystem</code>, which protects the image\'s own filesystem.',
    tags: ['Volumes', 'readOnly']
  },
  {
    id: 'cncf-kcna-fc-372',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Why can a ReadWriteOnce cloud disk strand a Pod after a zone failure?',
    hint: 'Block disks are zonal.',
    back: 'Most cloud block disks exist in <strong>one zone</strong> and a PV records that with node affinity. If the zone fails, the Pod can only be rescheduled to nodes in that same zone, so it stays Pending. Resilience comes from application-level replication across zones (for example one StatefulSet replica per zone), regional disks where offered, or backups restored elsewhere.',
    tags: ['Topology', 'Availability']
  },
  {
    id: 'cncf-kcna-fc-373',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'dataSource vs dataSourceRef on a PVC',
    hint: 'One accepts only core sources, the other also custom populators.',
    back: '<strong>dataSource</strong> accepts only a PersistentVolumeClaim (clone) or a VolumeSnapshot (restore). <strong>dataSourceRef</strong> accepts those plus objects of <strong>any</strong> kind handled by a <strong>volume populator</strong>, for example a custom resource that fills a new volume from a backup or an HTTP URL, and it reports errors instead of silently ignoring unsupported sources.',
    tags: ['PVC', 'Volume populators']
  },
  {
    id: 'cncf-kcna-fc-374',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What does storageClassName: "" mean on a claim, compared with leaving it out?',
    hint: 'Empty is a choice; missing is a question.',
    back: '<strong>Omitted</strong>: use the cluster\'s <strong>default</strong> StorageClass (dynamic provisioning), or pick one up later if a default appears. <strong>Empty string</strong>: explicitly <strong>no class</strong>, so dynamic provisioning is disabled and the claim only binds to pre-created PVs that also have no class.',
    tags: ['PVC', 'StorageClass']
  },
  {
    id: 'cncf-kcna-fc-375',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Which attributes describe a cloud native storage system?',
    hint: 'The CNCF storage whitepaper lists five.',
    back: '<strong>Availability</strong> (can data be reached during failures), <strong>scalability</strong> (capacity, operations and throughput as load grows), <strong>performance</strong> (latency and throughput), <strong>consistency</strong> (how soon reads see writes), and <strong>durability</strong> (protection against data loss). Comparing solutions along these helps choose between block, file, object and database options.',
    tags: ['Storage', 'CNCF']
  }
];

export default CNCF_KCNA_FLASHCARDS_15;
