export const CNCF_KCNA_QUESTIONS_15 = [
  {
    id: "cncf-kcna-351",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Offering fast and cheap disk tiers",
    scenario: "A platform team wants developers to choose between premium SSD storage for databases and low-cost HDD storage for archives simply by naming a tier in their claims, without knowing any details of the cloud disk APIs.",
    question: "Which Kubernetes object should the platform team define for each tier?",
    options: [
      { id: 'A', text: "A LimitRange per tier, naming default disk sizes for every claim" },
      { id: 'B', text: "A StorageClass per tier, naming the provisioner and its parameters" },
      { id: 'C', text: "A ResourceQuota per tier, listing the disk types each team may use" },
      { id: 'D', text: "A PersistentVolume per tier, sized large enough to hold every developer's data" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A StorageClass describes a class of storage: which provisioner creates the volumes, with parameters such as disk type, plus the reclaim policy and binding mode. Developers select a tier by putting its name in storageClassName. A single large PersistentVolume binds to one claim only and cannot be shared out to many developers. A ResourceQuota can cap storage per class but does not define the tiers. A LimitRange can bound claim sizes but has nothing to do with disk types.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/",
    tags: ["StorageClass", "Storage tiers"]
  },
  {
    id: "cncf-kcna-352",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Where the new disk comes from",
    scenario: "A developer creates a PersistentVolumeClaim for 20Gi with storageClassName: fast-ssd. No administrator has created any PersistentVolume, yet within seconds the claim is Bound to a new volume named pvc-7f3c.",
    question: "What created the volume?",
    options: [
      { id: 'A', text: "The kubelet, which carves the named volume out of the node's ephemeral storage" },
      { id: 'B', text: "The provisioner named in the fast-ssd StorageClass, through dynamic provisioning" },
      { id: 'C', text: "The API server, which reserves space in etcd for each claim it has accepted" },
      { id: 'D', text: "The kube-scheduler, which creates a fast-ssd disk on whichever node it picked" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "With dynamic provisioning, a claim that names a StorageClass triggers that class's provisioner, typically a CSI driver's external-provisioner, to create a backing disk and a matching PersistentVolume, which is then bound to the claim; names like pvc-UID are the sign. The scheduler places Pods and never creates storage. The kubelet mounts volumes but does not provision persistent ones from node storage. etcd stores API objects, not volume data.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/dynamic-provisioning/",
    tags: ["Dynamic provisioning", "StorageClass"]
  },
  {
    id: "cncf-kcna-353",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Deleting a claim deleted the disk",
    scenario: "While cleaning up a namespace, an engineer deleted a dynamically provisioned PVC, expecting to reattach the data later. The PersistentVolume vanished and the cloud disk behind it was destroyed. The StorageClass did not set reclaimPolicy.",
    question: "What explains this, and what would have kept the disk?",
    options: [
      { id: 'A', text: "Dynamic volumes are always removed with their claim; only static volumes can be kept" },
      { id: 'B', text: "Dynamic volumes default to the Recycle policy; switching the class to Delete would keep it" },
      { id: 'C', text: "Dynamic volumes default to the Delete policy; a class or volume set to Retain keeps it" },
      { id: 'D', text: "Dynamic volumes default to the Retain policy; the namespace deletion then overrode it" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A StorageClass without reclaimPolicy gives its dynamically provisioned volumes the Delete policy, so deleting the claim deletes the PersistentVolume and the external disk. Setting reclaimPolicy: Retain on the class, or patching the individual volume to Retain, leaves the volume Released with its data for manual recovery. Recycle is deprecated and was never the default. Retain is the default for manually created volumes, not dynamic ones. Dynamic volumes can be retained once their policy is changed.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#reclaiming",
    tags: ["Reclaim policy", "Dynamic provisioning"]
  },
  {
    id: "cncf-kcna-354",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Protecting one important existing volume",
    scenario: "A team realises that the dynamically provisioned volume behind its production database claim has the Delete reclaim policy. They want this one existing volume kept if the claim is ever removed, without changing the StorageClass or any other team's volumes.",
    question: "What should they do?",
    options: [
      { id: 'A', text: "Patch the PersistentVolume's persistentVolumeReclaimPolicy field to Retain" },
      { id: 'B', text: "Edit the StorageClass reclaimPolicy, which then updates its existing PVs" },
      { id: 'C', text: "Add the pvc-protection finalizer so the disk is never deleted" },
      { id: 'D', text: "Patch the claim's spec to add a reclaimPolicy field with the value Retain" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The reclaim policy lives on the PersistentVolume, and it can be changed on a live volume, for example with kubectl patch pv NAME -p '{\"spec\":{\"persistentVolumeReclaimPolicy\":\"Retain\"}}', affecting only that volume. Claims have no reclaim policy field. A StorageClass's reclaimPolicy applies only to volumes it provisions in future, and StorageClass fields cannot be updated after creation anyway. The pvc-protection finalizer only delays deletion while a Pod uses the claim; once the Pod is gone the volume is still deleted.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/change-pv-reclaim-policy/",
    tags: ["Reclaim policy", "PersistentVolume"]
  },
  {
    id: "cncf-kcna-355",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Point-in-time copy before a risky migration",
    scenario: "Before running a schema migration, a team wants a point-in-time copy of its database's PersistentVolumeClaim, taken through the Kubernetes API using its CSI driver's snapshot support, so it can roll back if the migration corrupts data.",
    question: "Which Kubernetes object should they create?",
    options: [
      { id: 'A', text: "A CronJob that runs etcdctl snapshot save" },
      { id: 'B', text: "A VolumeSnapshot referencing the claim" },
      { id: 'C', text: "A second claim with the same name" },
      { id: 'D', text: "A PodDisruptionBudget for the claim" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A VolumeSnapshot, with a VolumeSnapshotClass naming the CSI driver, asks the storage system to take a point-in-time snapshot of the claim's volume, which can later be restored into a new claim. Claim names must be unique in a namespace, and a new claim would be empty anyway. etcdctl snapshot backs up cluster state in etcd, not application data on volumes. A PodDisruptionBudget limits voluntary evictions and has nothing to do with data copies.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volume-snapshots/",
    tags: ["VolumeSnapshot", "CSI"]
  },
  {
    id: "cncf-kcna-356",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Restoring from a volume snapshot",
    scenario: "The migration went wrong. A VolumeSnapshot named db-pre-migration is ReadyToUse in the same namespace, and the team wants a new PersistentVolumeClaim containing exactly that data so they can point the database at it.",
    question: "How should the new claim be defined?",
    options: [
      { id: 'A', text: "With volumeName naming the VolumeSnapshot db-pre-migration" },
      { id: 'B', text: "With storageClassName set to the VolumeSnapshotClass of db-pre-migration" },
      { id: 'C', text: "With a selector matching labels on the db-pre-migration snapshot" },
      { id: 'D', text: "With dataSource naming the VolumeSnapshot db-pre-migration" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Setting dataSource (or dataSourceRef) to kind VolumeSnapshot, apiGroup snapshot.storage.k8s.io and name db-pre-migration makes the CSI driver provision the new volume pre-populated from the snapshot; the claim must request at least the snapshot's size. volumeName binds a claim to a specific existing PersistentVolume, not a snapshot. A selector filters pre-created PersistentVolumes by label. storageClassName must name a StorageClass; a VolumeSnapshotClass is a different kind of object.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#volume-snapshot-and-restore-volume-from-snapshot-support",
    tags: ["VolumeSnapshot", "Restore", "PVC"]
  },
  {
    id: "cncf-kcna-357",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "A test copy of production data",
    scenario: "A QA team wants a writable copy of the reports-data claim in the same namespace to test a data-cleanup script, without touching the original and without first taking a snapshot. The claim is provisioned by a CSI driver that supports cloning.",
    question: "What should they create?",
    options: [
      { id: 'A', text: "A new claim whose volumeName is the PersistentVolume bound to reports-data" },
      { id: 'B', text: "A new claim whose dataSource is the PersistentVolumeClaim reports-data" },
      { id: 'C', text: "A second Pod mounting reports-data with readOnly set to false" },
      { id: 'D', text: "A new claim whose selector matches the labels of reports-data" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CSI volume cloning creates a new, independent volume pre-filled with an existing claim's data when a new claim sets dataSource to that PersistentVolumeClaim in the same namespace, on a driver that supports it. Setting volumeName to the existing volume tries to bind the already-bound volume and would not produce a copy. Mounting the original read-write lets the script modify production data. A selector matches PersistentVolume labels, not claims, and does not copy anything.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volume-pvc-datasource/",
    tags: ["Cloning", "PVC", "CSI"]
  },
  {
    id: "cncf-kcna-358",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Running Ceph inside the cluster",
    scenario: "A company with on-premises clusters and no cloud storage wants to run Ceph as software-defined storage inside Kubernetes, with an operator that deploys, scales and heals the Ceph daemons and exposes block, file and object storage to workloads.",
    question: "Which CNCF graduated project is built for this?",
    options: [
      { id: 'A', text: "The Harbor image registry" },
      { id: 'B', text: "The etcd key-value store" },
      { id: 'C', text: "The Vitess operator" },
      { id: 'D', text: "The Rook storage operator" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Rook is a CNCF graduated storage orchestrator that turns Ceph into a self-managing, self-scaling and self-healing storage service on Kubernetes, providing block, shared file system and object storage through CSI drivers and custom resources. Vitess is a CNCF graduated database clustering system for MySQL, not general storage. Harbor stores container images. etcd is the key-value store behind the Kubernetes API and is not meant for application volumes.",
    referenceUrl: "https://rook.io/docs/rook/latest-release/Getting-Started/intro/",
    tags: ["Rook", "Ceph", "CNCF"]
  },
  {
    id: "cncf-kcna-359",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Reference data that must not be modified",
    scenario: "Several reporting Pods mount a shared claim holding reference datasets. The data owners want to be sure that a bug in any of these Pods can never modify or delete the files, although other jobs still update the data through a separate Pod.",
    question: "What should be set in the reporting Pods?",
    options: [
      { id: 'A', text: "readOnly: true on the volumeMount for that claim" },
      { id: 'B', text: "readOnlyRootFilesystem: true in each container" },
      { id: 'C', text: "accessModes: ReadOnlyMany on the claim itself" },
      { id: 'D', text: "immutable: true set on the PersistentVolumeClaim spec" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Setting readOnly: true on the container's volumeMount (or on the Pod's persistentVolumeClaim volume source) mounts the volume read-only for those Pods, while the updater Pod can still mount it read-write. readOnlyRootFilesystem protects the container image's filesystem, not mounted volumes. Changing the claim to ReadOnlyMany would stop the updater from writing too. PersistentVolumeClaims have no immutable field; that exists on ConfigMaps and Secrets.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/",
    tags: ["Volumes", "readOnly"]
  },
  {
    id: "cncf-kcna-360",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Storing video files in a bucket",
    scenario: "A media company's application stores millions of video files and reads them over HTTP with an S3-compatible API from Pods in several clusters. A new engineer asks which PersistentVolume access mode those files use.",
    question: "What is the right answer?",
    options: [
      { id: 'A', text: "ReadWriteOncePod, because each object belongs to exactly one Pod at a time" },
      { id: 'B', text: "ReadWriteMany, because every Pod in every cluster writes to the same files" },
      { id: 'C', text: "ReadOnlyMany, because objects in a bucket can never be changed after upload" },
      { id: 'D', text: "None; object storage is reached through its API, not mounted as a volume" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Object storage such as S3 is consumed by applications through an HTTP API with credentials, not attached or mounted as a Kubernetes volume, so no PersistentVolume access mode applies. Access modes describe how block or file volumes attach to nodes and Pods. ReadWriteMany would be relevant only for a shared file system mounted into Pods. Objects can be overwritten or deleted, so they are not inherently read-only. ReadWriteOncePod restricts a mounted volume to one Pod and has nothing to do with objects.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes",
    tags: ["Object storage", "Access modes"]
  },
  {
    id: "cncf-kcna-361",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Using a claim from another namespace",
    scenario: "The analytics team wants its Pods in the analytics namespace to mount a PersistentVolumeClaim named shared-data that the data team created in the data namespace. Their Pod spec references claimName: shared-data, and the Pod fails to start because the claim is not found.",
    question: "Why does the reference fail?",
    options: [
      { id: 'A', text: "A Pod can only reference claims in its own namespace" },
      { id: 'B', text: "A claim can only be used by Pods created before the claim" },
      { id: 'C', text: "A Pod can only reference claims created by its own user" },
      { id: 'D', text: "A claim name must be prefixed with its StorageClass name" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "PersistentVolumeClaims are namespaced, and a Pod's persistentVolumeClaim volume refers to a claim by name in the Pod's own namespace, so the analytics Pod looks for analytics/shared-data, which does not exist. Sharing needs, for example, a separate claim and volume in analytics pointing at the same shared file storage. Kubernetes does not tie claims to the user who created them. Creation order does not matter. Claim names have no StorageClass prefix requirement.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#claims-as-volumes",
    tags: ["PVC", "Namespaces"]
  },
  {
    id: "cncf-kcna-362",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Gi versus G in a storage request",
    scenario: "Two teams request storage in their claims, one writing storage: 100G and the other storage: 100Gi. The finance team asks whether both claims ask for the same amount of space.",
    question: "How do the two requests compare?",
    options: [
      { id: 'A', text: "Both mean exactly 100 x 10^9 bytes; the i suffix only changes how kubectl prints it" },
      { id: 'B', text: "100Gi is binary (100 x 2^30 bytes), a little more than 100G, which is 100 x 10^9 bytes" },
      { id: 'C', text: "Both mean exactly 100 x 2^30 bytes; the G suffix is shorthand for the Gi suffix" },
      { id: 'D', text: "100G is binary (100 x 2^30 bytes), a little more than 100Gi, which is 100 x 10^9 bytes" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kubernetes quantities accept decimal suffixes (k, M, G, T) and binary suffixes (Ki, Mi, Gi, Ti). 100Gi is 100 x 1,073,741,824 bytes, about 107.4 x 10^9, so it is roughly 7% larger than 100G, which is exactly 100 x 10^9 bytes. Reversing them gets the definitions backwards. The i is part of the unit, not a display hint, and G is not shorthand for Gi.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/",
    tags: ["Quantities", "PVC"]
  },
  {
    id: "cncf-kcna-363",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Volumes listed without a namespace",
    scenario: "An engineer runs kubectl get pv -n payments expecting to see only the payments team's volumes, but the output lists every PersistentVolume in the cluster, and the table has no NAMESPACE column. kubectl get pvc -n payments shows only that team's claims.",
    question: "Why does the namespace flag not filter the volumes?",
    options: [
      { id: 'A', text: "PersistentVolumes only show a namespace after they are bound to a claim" },
      { id: 'B', text: "PersistentVolumes are cluster-scoped, while claims are namespaced objects" },
      { id: 'C', text: "PersistentVolumes are namespaced, but -n is ignored for storage resources" },
      { id: 'D', text: "PersistentVolumes inherit the namespace of the StorageClass that made them" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "PersistentVolumes, like Nodes and StorageClasses, are cluster-scoped, so -n has no effect and there is no namespace column; the link to a team is the CLAIM column showing namespace/claim for bound volumes. PersistentVolumeClaims are namespaced, which is why -n filters them. kubectl does not ignore -n for namespaced storage objects. StorageClasses are themselves cluster-scoped and pass no namespace on. Binding records a claimRef but does not give the volume a namespace.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["PersistentVolume", "Cluster-scoped"]
  },
  {
    id: "cncf-kcna-364",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Passing disk settings to the provisioner",
    scenario: "A team needs a StorageClass whose volumes are encrypted cloud SSDs with a specific IOPS level. Kubernetes has no built-in fields for encryption or IOPS, and each cloud's CSI driver defines its own options.",
    question: "Where are these driver-specific settings expressed?",
    options: [
      { id: 'A', text: "In the StorageClass mountOptions list, which the kubelet interprets" },
      { id: 'B', text: "In the claim's resources.limits section, which the scheduler reads" },
      { id: 'C', text: "In annotations on each Pod, read by the CSI node plugin at mount" },
      { id: 'D', text: "In the StorageClass parameters map, which the provisioner interprets" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "StorageClass parameters are an opaque key-value map handed to the provisioner, and each CSI driver documents its own keys, for example disk type, IOPS or encryption flags. mountOptions are passed to the mount command when a volume is mounted on a node, for things like NFS versions, not disk creation settings. A claim's resources carry storage size requests (and limits), not disk features. Pod annotations are not how CSI drivers receive provisioning parameters.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/#parameters",
    tags: ["StorageClass", "CSI", "Parameters"]
  },
  {
    id: "cncf-kcna-365",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Editing an existing StorageClass",
    scenario: "An administrator tries to change the parameters of the StorageClass standard so that new volumes use a faster disk type. kubectl apply fails with an error that the parameters field is forbidden to update. Dozens of existing claims already use this class.",
    question: "What is the supported way to offer the faster disk type?",
    options: [
      { id: 'A', text: "Delete the standard class, which also migrates all its volumes to the new type" },
      { id: 'B', text: "Create a new StorageClass with the new parameters and use it for new claims" },
      { id: 'C', text: "Edit each existing PersistentVolume's parameters so they pick up the new type" },
      { id: 'D', text: "Use kubectl apply --force-conflicts so the parameters field accepts the update" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Apart from metadata, StorageClass fields such as provisioner, parameters and reclaimPolicy cannot be updated once the object is created, so the usual path is a new class (optionally made the default) for new claims. PersistentVolumes have no parameters field to edit, and existing disks keep the type they were provisioned with. Deleting a class does not touch existing volumes or migrate them. --force-conflicts resolves server-side apply field ownership conflicts; it cannot make an immutable field mutable.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/",
    tags: ["StorageClass", "Immutable fields"]
  },
  {
    id: "cncf-kcna-366",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "NFS volumes need a specific protocol version",
    scenario: "A storage team serves shared file volumes from an NFS appliance that only supports NFS version 4.1. Pods using dynamically provisioned volumes from the nfs-shared StorageClass sometimes fail to mount because the node negotiates a different version.",
    question: "How can every volume from this class be mounted with NFS 4.1?",
    options: [
      { id: 'A', text: "Set volumeMode: Block on the claims so NFS is bypassed" },
      { id: 'B', text: "Add mountOptions such as nfsvers=4.1 to the StorageClass" },
      { id: 'C', text: "Add nfsvers=4.1 to each claim's resources.requests field" },
      { id: 'D', text: "Add an initContainer to each Pod that remounts the share" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A StorageClass can list mountOptions, which dynamically provisioned PersistentVolumes inherit and which are passed to the mount on the node, so nfsvers=4.1 applies to every volume from the class. resources.requests only carries sizes. NFS is a file protocol, so volumeMode Block is not an option for it. An init container cannot change how the kubelet mounts the volume, and remounting would need privileges.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/#mount-options",
    tags: ["StorageClass", "mountOptions", "NFS"]
  },
  {
    id: "cncf-kcna-367",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Large scratch space deleted with the Pod",
    scenario: "A machine-learning Pod needs 500Gi of fast scratch space from the cluster's premium StorageClass while it runs. The node disks are too small for an emptyDir that size, and the team wants the storage created with the Pod and removed automatically when it ends.",
    question: "Which volume type fits?",
    options: [
      { id: 'A', text: "A hostPath volume pointing at a large directory on a specific node" },
      { id: 'B', text: "A PersistentVolumeClaim created by hand and deleted after every run" },
      { id: 'C', text: "An emptyDir with a sizeLimit of 500Gi set on the Pod's scratch mount" },
      { id: 'D', text: "A generic ephemeral volume with a volumeClaimTemplate for that class" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A generic ephemeral volume is declared inline in the Pod spec with a volumeClaimTemplate; Kubernetes creates a claim owned by the Pod, the StorageClass provisions it, and garbage collection deletes it with the Pod. A hand-made claim works but needs manual clean-up, which is what the team wants to avoid. An emptyDir uses node storage, which is too small, and sizeLimit only caps usage. hostPath ties the Pod to one node's disk and is a security risk.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/ephemeral-volumes/#generic-ephemeral-volumes",
    tags: ["Ephemeral volumes", "StorageClass"]
  },
  {
    id: "cncf-kcna-368",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "CSI driver not registered on one node",
    scenario: "Claims from a CSI-backed StorageClass bind normally, but a Pod scheduled to a newly added GPU node stays in ContainerCreating with 'driver name ebs.csi.aws.com not found in the list of registered CSI drivers'. Pods using the same class work on other nodes. The GPU nodes carry a dedicated taint.",
    question: "What is the most likely cause?",
    options: [
      { id: 'A', text: "The CSI node plugin DaemonSet does not tolerate the taint, so it never runs on the GPU nodes" },
      { id: 'B', text: "The claim's access mode is ReadWriteOnce, which is not supported on nodes with GPU devices" },
      { id: 'C', text: "The StorageClass lacks a GPU parameter, so the provisioner rejects claims for those nodes" },
      { id: 'D', text: "The CSI controller Deployment cannot tolerate the taint, so no volumes can be provisioned" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Mounting on a node is done by the CSI node plugin, which runs as a DaemonSet and registers the driver with that node's kubelet. If the DaemonSet does not tolerate the GPU nodes' taint, no node plugin runs there and the kubelet reports the driver as not registered. Provisioning works, since claims bind, so the controller is fine. StorageClasses have no GPU parameter and binding already succeeded. Access modes are unrelated to GPUs.",
    referenceUrl: "https://kubernetes-csi.github.io/docs/deploying.html",
    tags: ["CSI", "DaemonSet", "Taints"]
  },
  {
    id: "cncf-kcna-369",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Capping premium storage per team",
    scenario: "A platform team wants to stop the analytics namespace from claiming more than 2Ti of the expensive premium-ssd StorageClass in total, while leaving the cheaper standard class unlimited for that namespace.",
    question: "How can this be enforced?",
    options: [
      { id: 'A', text: "A ResourceQuota setting requests.storage to 2Ti for all claims in the namespace" },
      { id: 'B', text: "A LimitRange capping each premium-ssd claim at 2Ti for claims in the namespace" },
      { id: 'C', text: "A StorageClass parameter on premium-ssd setting a 2Ti limit for each namespace using it" },
      { id: 'D', text: "A ResourceQuota setting premium-ssd.storageclass.storage.k8s.io/requests.storage to 2Ti" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "ResourceQuota supports per-StorageClass keys of the form CLASS.storageclass.storage.k8s.io/requests.storage (and a matching persistentvolumeclaims count), so a 2Ti cap applies only to premium-ssd claims in the namespace. A plain requests.storage quota caps all classes together, limiting the cheap class too. A LimitRange limits the size of each individual claim, not the namespace total. StorageClass parameters go to the provisioner and cannot enforce per-namespace totals.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/#storage-resource-quota",
    tags: ["ResourceQuota", "StorageClass"]
  },
  {
    id: "cncf-kcna-370",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Keeping volumes in approved zones",
    scenario: "A company's cluster spans three zones, but data-residency rules allow a particular StorageClass to create disks only in zones a and b. The team wants the provisioner itself to refuse any other zone, regardless of where Pods try to run.",
    question: "Which StorageClass field enforces this?",
    options: [
      { id: 'A', text: "mountOptions listing the zone names a and b" },
      { id: 'B', text: "volumeBindingMode set to Immediate" },
      { id: 'C', text: "reclaimPolicy set to Retain for the zones" },
      { id: 'D', text: "allowedTopologies listing zones a and b" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "allowedTopologies restricts the topology domains, such as zones, in which a StorageClass may provision volumes, so disks can only be created in zones a and b. volumeBindingMode decides when provisioning happens relative to Pod scheduling, not which zones are permitted. reclaimPolicy governs what happens after the claim is deleted. mountOptions are passed to the mount command on the node and have no effect on where disks are created.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/#allowed-topologies",
    tags: ["StorageClass", "Topology", "Zones"]
  },
  {
    id: "cncf-kcna-371",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Old claims waiting for a default class",
    scenario: "On a cluster that had no default StorageClass, several claims without storageClassName were created and sat Pending. An administrator then marked the StorageClass standard as the default. The cluster runs a current Kubernetes version.",
    question: "What happens to the Pending claims?",
    options: [
      { id: 'A', text: "They are deleted, because claims without a class are not valid anymore" },
      { id: 'B', text: "They stay Pending, because a default class only applies to claims created after it" },
      { id: 'C', text: "They bind to any existing volume regardless of its size or access mode" },
      { id: 'D', text: "They are updated to use the new default class and get provisioned" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Retroactive default StorageClass assignment, stable since Kubernetes 1.28, sets storageClassName on existing claims that have none once a default class exists, so the Pending claims get the standard class and are provisioned. Claims explicitly set to an empty string are left alone, since that means no class. storageClassName is only immutable once set, and the unset value can be filled in. Claims are not deleted. Binding still requires size, access mode and class to match.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#retroactive-default-storageclass-assignment",
    tags: ["StorageClass", "Default class", "PVC"]
  },
  {
    id: "cncf-kcna-372",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Too many disks on one node",
    scenario: "On a cloud cluster, a node already running many small database Pods, each with its own block volume, refuses new database Pods: the scheduler reports that the node exceeds its maximum volume count, although CPU and memory are mostly free.",
    question: "What limit has been reached?",
    options: [
      { id: 'A', text: "The CSI driver's per-node attachable volume limit, as reported in the CSINode object" },
      { id: 'B', text: "The node's ephemeral-storage allocatable limit, which the block volumes are carved from" },
      { id: 'C', text: "The kubelet's maxPods limit, which also caps how many volumes the node may mount" },
      { id: 'D', text: "The namespace ResourceQuota on persistentvolumeclaims, which counts per node" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud instance types can attach only a limited number of block volumes, and CSI drivers report that per-node limit, which Kubernetes records in the CSINode object's allocatable count. The scheduler will not place a Pod on a node where its volumes would exceed the limit. maxPods caps Pod count, not volume attachments. ResourceQuota counts claims per namespace, not per node. Attached block volumes are separate disks and do not consume the node's ephemeral storage.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-limits/",
    tags: ["CSI", "Volume limits", "Scheduling"]
  },
  {
    id: "cncf-kcna-373",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Scheduling around local storage capacity",
    scenario: "A cluster uses a CSI driver for node-local LVM volumes with WaitForFirstConsumer binding. Pods keep getting scheduled onto nodes whose volume groups turn out to be full, and provisioning then fails and retries. The team wants the scheduler to consider free storage per node before choosing one.",
    question: "Which feature addresses this?",
    options: [
      { id: 'A', text: "Volume snapshots, freeing space by moving older data into snapshot objects" },
      { id: 'B', text: "Pod topology spread constraints, spreading claims evenly across the nodes" },
      { id: 'C', text: "Volume expansion, with allowVolumeExpansion: true set on the LVM StorageClass" },
      { id: 'D', text: "Storage capacity tracking, with the driver publishing CSIStorageCapacity objects" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "With storage capacity tracking, a CSI driver that sets storageCapacity in its CSIDriver object publishes CSIStorageCapacity objects describing free capacity per topology segment, and the scheduler uses them for WaitForFirstConsumer volumes to avoid nodes that cannot fit the claim. Volume expansion grows existing volumes and does not guide placement. Spread constraints balance Pods but know nothing about free storage. Snapshots copy data; they do not inform scheduling or free a volume group.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-capacity/",
    tags: ["Storage capacity", "CSI", "Scheduling"]
  },
  {
    id: "cncf-kcna-374",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Two default StorageClasses at once",
    scenario: "During a migration, an administrator marks the new StorageClass premium as default but forgets to remove the default annotation from the old class standard. A developer then creates a claim with no storageClassName on a current Kubernetes version.",
    question: "What happens to the claim?",
    options: [
      { id: 'A', text: "It uses whichever default class sorts first by name" },
      { id: 'B', text: "It is rejected until only one default class remains" },
      { id: 'C', text: "It uses the most recently created default class" },
      { id: 'D', text: "It gets one volume from each default class at once" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Current Kubernetes documentation states that if more than one StorageClass is marked as default, a claim without a class is given the most recently created default, so it would get premium here. Older versions rejected such claims, which is why the documentation still recommends having only one default and removing the annotation from the old class. There is no alphabetical tie-break. A claim binds to exactly one volume.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/#default-storageclass",
    tags: ["StorageClass", "Default class"]
  },
  {
    id: "cncf-kcna-375",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Pod takes twenty minutes to start",
    scenario: "A Pod with fsGroup: 2000 mounts a 2Ti volume containing tens of millions of small files. Each restart spends about twenty minutes in ContainerCreating, although the files already have the right group ownership from previous runs.",
    question: "Which change shortens the start-up without dropping fsGroup?",
    options: [
      { id: 'A', text: "volumeMode: Block on the claim so no ownership change is needed" },
      { id: 'B', text: "fsGroupChangePolicy: OnRootMismatch in the Pod securityContext" },
      { id: 'C', text: "readOnly: true on the volumeMount so the kubelet skips the scan" },
      { id: 'D', text: "runAsGroup: 2000 in place of fsGroup in the Pod securityContext" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "With fsGroup set, the kubelet by default recursively changes ownership and permissions of every file on each mount, which is very slow on huge volumes. fsGroupChangePolicy: OnRootMismatch skips the recursive walk when the volume root already has the expected ownership and permissions. runAsGroup sets the process's primary group but does not make the files writable to it, so it drops the behaviour fsGroup provides. A raw block volume has no files and would break the application. A read-only mount would prevent the app from writing.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#configure-volume-permission-and-ownership-change-policy-for-pods",
    tags: ["fsGroup", "Volumes", "Performance"]
  }
];

export default CNCF_KCNA_QUESTIONS_15;
