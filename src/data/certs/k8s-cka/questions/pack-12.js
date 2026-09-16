export const K8S_CKA_QUESTIONS_12 = [
  {
    id: "k8s-cka-251",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "PersistentVolume and StorageClass Dynamic Provisioning: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to provision stateful storage dynamically while ensuring storage disks are provisioned in the same availability zone where the scheduled pod lands.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Disable PersistentVolumeClaims and write state directly to pod ephemeral container storage." },
      { id: 'B', text: "Manually create static PersistentVolumes in every possible availability zone." },
      { id: 'C', text: "Set `volumeBindingMode: Immediate` so storage is provisioned before the pod scheduler selects a node." },
      { id: 'D', text: "Configure a StorageClass with `volumeBindingMode: WaitForFirstConsumer` and CSI parameters." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a StorageClass with `volumeBindingMode: WaitForFirstConsumer` and appropriate CSI provisioner parameters. The `volumeBindingMode: WaitForFirstConsumer` setting delays PersistentVolume binding and dynamic provisioning until a pod requesting the claim is scheduled. This guarantees that topology-constrained storage (like cloud regional/zonal disks) is provisioned in the exact availability zone where the pod was assigned.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/#volume-binding-mode",
    tags: ["StorageClass","StorageClass","Dr Failover"]
  },
  {
    id: "k8s-cka-252",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "PersistentVolume and StorageClass Dynamic Provisioning: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to provision stateful storage dynamically while ensuring storage disks are provisioned in the same availability zone where the scheduled pod lands.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Configure a StorageClass with `volumeBindingMode: WaitForFirstConsumer` and CSI parameters." },
      { id: 'B', text: "Set `volumeBindingMode: Immediate` so storage is provisioned before the pod scheduler selects a node." },
      { id: 'C', text: "Manually create static PersistentVolumes in every possible availability zone." },
      { id: 'D', text: "Disable PersistentVolumeClaims and write state directly to pod ephemeral container storage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a StorageClass with `volumeBindingMode: WaitForFirstConsumer` and appropriate CSI provisioner parameters. The `volumeBindingMode: WaitForFirstConsumer` setting delays PersistentVolume binding and dynamic provisioning until a pod requesting the claim is scheduled. This guarantees that topology-constrained storage (like cloud regional/zonal disks) is provisioned in the exact availability zone where the pod was assigned.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/#volume-binding-mode",
    tags: ["StorageClass","StorageClass","High Load Scale"]
  },
  {
    id: "k8s-cka-253",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "PersistentVolume and StorageClass Dynamic Provisioning: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to provision stateful storage dynamically while ensuring storage disks are provisioned in the same availability zone where the scheduled pod lands.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Configure a StorageClass with `volumeBindingMode: WaitForFirstConsumer` and CSI parameters." },
      { id: 'B', text: "Set `volumeBindingMode: Immediate` so storage is provisioned before the pod scheduler selects a node." },
      { id: 'C', text: "Manually create static PersistentVolumes in every possible availability zone." },
      { id: 'D', text: "Disable PersistentVolumeClaims and write state directly to pod ephemeral container storage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a StorageClass with `volumeBindingMode: WaitForFirstConsumer` and appropriate CSI provisioner parameters. The `volumeBindingMode: WaitForFirstConsumer` setting delays PersistentVolume binding and dynamic provisioning until a pod requesting the claim is scheduled. This guarantees that topology-constrained storage (like cloud regional/zonal disks) is provisioned in the exact availability zone where the pod was assigned.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/#volume-binding-mode",
    tags: ["StorageClass","StorageClass","Security Compliance"]
  },
  {
    id: "k8s-cka-254",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "PersistentVolume and StorageClass Dynamic Provisioning: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to provision stateful storage dynamically while ensuring storage disks are provisioned in the same availability zone where the scheduled pod lands.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Manually create static PersistentVolumes in every possible availability zone." },
      { id: 'B', text: "Configure a StorageClass with `volumeBindingMode: WaitForFirstConsumer` and CSI parameters." },
      { id: 'C', text: "Set `volumeBindingMode: Immediate` so storage is provisioned before the pod scheduler selects a node." },
      { id: 'D', text: "Disable PersistentVolumeClaims and write state directly to pod ephemeral container storage." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a StorageClass with `volumeBindingMode: WaitForFirstConsumer` and appropriate CSI provisioner parameters. The `volumeBindingMode: WaitForFirstConsumer` setting delays PersistentVolume binding and dynamic provisioning until a pod requesting the claim is scheduled. This guarantees that topology-constrained storage (like cloud regional/zonal disks) is provisioned in the exact availability zone where the pod was assigned.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/#volume-binding-mode",
    tags: ["StorageClass","StorageClass","Hybrid Migration"]
  },
  {
    id: "k8s-cka-255",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "PersistentVolume and StorageClass Dynamic Provisioning: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to provision stateful storage dynamically while ensuring storage disks are provisioned in the same availability zone where the scheduled pod lands.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Manually create static PersistentVolumes in every possible availability zone." },
      { id: 'B', text: "Disable PersistentVolumeClaims and write state directly to pod ephemeral container storage." },
      { id: 'C', text: "Configure a StorageClass with `volumeBindingMode: WaitForFirstConsumer` and CSI parameters." },
      { id: 'D', text: "Set `volumeBindingMode: Immediate` so storage is provisioned before the pod scheduler selects a node." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a StorageClass with `volumeBindingMode: WaitForFirstConsumer` and appropriate CSI provisioner parameters. The `volumeBindingMode: WaitForFirstConsumer` setting delays PersistentVolume binding and dynamic provisioning until a pod requesting the claim is scheduled. This guarantees that topology-constrained storage (like cloud regional/zonal disks) is provisioned in the exact availability zone where the pod was assigned.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/#volume-binding-mode",
    tags: ["StorageClass","StorageClass","Resilience Failure"]
  },
  {
    id: "k8s-cka-256",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "PersistentVolume Reclaim Policies: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to protect mission-critical database data so that if a PersistentVolumeClaim is accidentally deleted, the underlying storage asset and data remain intact.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Set the reclaim policy to `Recycle` to perform an automated rm -rf scrub." },
      { id: 'B', text: "Set the PersistentVolume reclaim policy (`persistentVolumeReclaimPolicy`) to `Retain`." },
      { id: 'C', text: "Set the PersistentVolume reclaim policy to `Delete` so the volume is automatically wiped." },
      { id: 'D', text: "Rely on pod restart policies to prevent underlying disk deallocation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set the PersistentVolume reclaim policy (`persistentVolumeReclaimPolicy`) to `Retain`. The `Retain` reclaim policy ensures that when a PersistentVolumeClaim is deleted, the PersistentVolume is not deleted or scrubbed. It transitions to `Released` status, preserving all underlying storage assets and data for manual recovery, backup, or re-binding.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#reclaiming",
    tags: ["PV Reclaim Policy","PV Lifecycle","Dr Failover"]
  },
  {
    id: "k8s-cka-257",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "PersistentVolume Reclaim Policies: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to protect mission-critical database data so that if a PersistentVolumeClaim is accidentally deleted, the underlying storage asset and data remain intact.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Rely on pod restart policies to prevent underlying disk deallocation." },
      { id: 'B', text: "Set the reclaim policy to `Recycle` to perform an automated rm -rf scrub." },
      { id: 'C', text: "Set the PersistentVolume reclaim policy to `Delete` so the volume is automatically wiped." },
      { id: 'D', text: "Set the PersistentVolume reclaim policy (`persistentVolumeReclaimPolicy`) to `Retain`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set the PersistentVolume reclaim policy (`persistentVolumeReclaimPolicy`) to `Retain`. The `Retain` reclaim policy ensures that when a PersistentVolumeClaim is deleted, the PersistentVolume is not deleted or scrubbed. It transitions to `Released` status, preserving all underlying storage assets and data for manual recovery, backup, or re-binding.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#reclaiming",
    tags: ["PV Reclaim Policy","PV Lifecycle","High Load Scale"]
  },
  {
    id: "k8s-cka-258",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "PersistentVolume Reclaim Policies: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to protect mission-critical database data so that if a PersistentVolumeClaim is accidentally deleted, the underlying storage asset and data remain intact.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Set the PersistentVolume reclaim policy (`persistentVolumeReclaimPolicy`) to `Retain`." },
      { id: 'B', text: "Set the PersistentVolume reclaim policy to `Delete` so the volume is automatically wiped." },
      { id: 'C', text: "Set the reclaim policy to `Recycle` to perform an automated rm -rf scrub." },
      { id: 'D', text: "Rely on pod restart policies to prevent underlying disk deallocation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set the PersistentVolume reclaim policy (`persistentVolumeReclaimPolicy`) to `Retain`. The `Retain` reclaim policy ensures that when a PersistentVolumeClaim is deleted, the PersistentVolume is not deleted or scrubbed. It transitions to `Released` status, preserving all underlying storage assets and data for manual recovery, backup, or re-binding.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#reclaiming",
    tags: ["PV Reclaim Policy","PV Lifecycle","Security Compliance"]
  },
  {
    id: "k8s-cka-259",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "PersistentVolume Reclaim Policies: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to protect mission-critical database data so that if a PersistentVolumeClaim is accidentally deleted, the underlying storage asset and data remain intact.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Set the PersistentVolume reclaim policy to `Delete` so the volume is automatically wiped." },
      { id: 'B', text: "Set the PersistentVolume reclaim policy (`persistentVolumeReclaimPolicy`) to `Retain`." },
      { id: 'C', text: "Rely on pod restart policies to prevent underlying disk deallocation." },
      { id: 'D', text: "Set the reclaim policy to `Recycle` to perform an automated rm -rf scrub." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set the PersistentVolume reclaim policy (`persistentVolumeReclaimPolicy`) to `Retain`. The `Retain` reclaim policy ensures that when a PersistentVolumeClaim is deleted, the PersistentVolume is not deleted or scrubbed. It transitions to `Released` status, preserving all underlying storage assets and data for manual recovery, backup, or re-binding.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#reclaiming",
    tags: ["PV Reclaim Policy","PV Lifecycle","Hybrid Migration"]
  },
  {
    id: "k8s-cka-260",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "PersistentVolume Reclaim Policies: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to protect mission-critical database data so that if a PersistentVolumeClaim is accidentally deleted, the underlying storage asset and data remain intact.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Set the PersistentVolume reclaim policy (`persistentVolumeReclaimPolicy`) to `Retain`." },
      { id: 'B', text: "Set the PersistentVolume reclaim policy to `Delete` so the volume is automatically wiped." },
      { id: 'C', text: "Set the reclaim policy to `Recycle` to perform an automated rm -rf scrub." },
      { id: 'D', text: "Rely on pod restart policies to prevent underlying disk deallocation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set the PersistentVolume reclaim policy (`persistentVolumeReclaimPolicy`) to `Retain`. The `Retain` reclaim policy ensures that when a PersistentVolumeClaim is deleted, the PersistentVolume is not deleted or scrubbed. It transitions to `Released` status, preserving all underlying storage assets and data for manual recovery, backup, or re-binding.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#reclaiming",
    tags: ["PV Reclaim Policy","PV Lifecycle","Resilience Failure"]
  },
  {
    id: "k8s-cka-261",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Volume Expansion via PersistentVolumeClaim: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to increase the storage capacity of an existing database PersistentVolumeClaim without unmounting the volume or causing pod downtime.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Check the StorageClass allows expansion, then raise the PVC's requested size." },
      { id: 'B', text: "Delete the PVC and recreate it at the larger size, rebinding the same volume." },
      { id: 'C', text: "Grow the PersistentVolume's `capacity` field and restart the mounting pod." },
      { id: 'D', text: "Resize the underlying disk in the provider and remount it on the same node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure the StorageClass has `allowVolumeExpansion: true`, then edit the PVC spec to request a larger `storage` size. When a StorageClass has `allowVolumeExpansion: true`, resizing a PVC only requires updating `spec.resources.requests.storage` in the PVC manifest. The CSI driver expands the underlying storage volume and resizes the file system online while the workload continues running.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#expanding-persistent-volumes-claims",
    tags: ["Volume Expansion","PVC Expansion","Dr Failover"]
  },
  {
    id: "k8s-cka-262",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Volume Expansion via PersistentVolumeClaim: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to increase the storage capacity of an existing database PersistentVolumeClaim without unmounting the volume or causing pod downtime.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Check the StorageClass allows expansion, then raise the PVC's requested size." },
      { id: 'B', text: "Delete the PVC and recreate it at the larger size, rebinding the same volume." },
      { id: 'C', text: "Grow the PersistentVolume's `capacity` field and restart the mounting pod." },
      { id: 'D', text: "Resize the underlying disk in the provider and remount it on the same node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure the StorageClass has `allowVolumeExpansion: true`, then edit the PVC spec to request a larger `storage` size. When a StorageClass has `allowVolumeExpansion: true`, resizing a PVC only requires updating `spec.resources.requests.storage` in the PVC manifest. The CSI driver expands the underlying storage volume and resizes the file system online while the workload continues running.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#expanding-persistent-volumes-claims",
    tags: ["Volume Expansion","PVC Expansion","High Load Scale"]
  },
  {
    id: "k8s-cka-263",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Volume Expansion via PersistentVolumeClaim: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to increase the storage capacity of an existing database PersistentVolumeClaim without unmounting the volume or causing pod downtime.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Check the StorageClass allows expansion, then raise the PVC's requested size." },
      { id: 'B', text: "Delete the PVC and recreate it at the larger size, rebinding the same volume." },
      { id: 'C', text: "Grow the PersistentVolume's `capacity` field and restart the mounting pod." },
      { id: 'D', text: "Resize the underlying disk in the provider and remount it on the same node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure the StorageClass has `allowVolumeExpansion: true`, then edit the PVC spec to request a larger `storage` size. When a StorageClass has `allowVolumeExpansion: true`, resizing a PVC only requires updating `spec.resources.requests.storage` in the PVC manifest. The CSI driver expands the underlying storage volume and resizes the file system online while the workload continues running.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#expanding-persistent-volumes-claims",
    tags: ["Volume Expansion","PVC Expansion","Security Compliance"]
  },
  {
    id: "k8s-cka-264",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Volume Expansion via PersistentVolumeClaim: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to increase the storage capacity of an existing database PersistentVolumeClaim without unmounting the volume or causing pod downtime.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Grow the PersistentVolume's `capacity` field and restart the mounting pod." },
      { id: 'B', text: "Resize the underlying disk in the provider and remount it on the same node." },
      { id: 'C', text: "Check the StorageClass allows expansion, then raise the PVC's requested size." },
      { id: 'D', text: "Delete the PVC and recreate it at the larger size, rebinding the same volume." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Ensure the StorageClass has `allowVolumeExpansion: true`, then edit the PVC spec to request a larger `storage` size. When a StorageClass has `allowVolumeExpansion: true`, resizing a PVC only requires updating `spec.resources.requests.storage` in the PVC manifest. The CSI driver expands the underlying storage volume and resizes the file system online while the workload continues running.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#expanding-persistent-volumes-claims",
    tags: ["Volume Expansion","PVC Expansion","Hybrid Migration"]
  },
  {
    id: "k8s-cka-265",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Volume Expansion via PersistentVolumeClaim: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to increase the storage capacity of an existing database PersistentVolumeClaim without unmounting the volume or causing pod downtime.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Grow the PersistentVolume's `capacity` field and restart the mounting pod." },
      { id: 'B', text: "Resize the underlying disk in the provider and remount it on the same node." },
      { id: 'C', text: "Check the StorageClass allows expansion, then raise the PVC's requested size." },
      { id: 'D', text: "Delete the PVC and recreate it at the larger size, rebinding the same volume." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Ensure the StorageClass has `allowVolumeExpansion: true`, then edit the PVC spec to request a larger `storage` size. When a StorageClass has `allowVolumeExpansion: true`, resizing a PVC only requires updating `spec.resources.requests.storage` in the PVC manifest. The CSI driver expands the underlying storage volume and resizes the file system online while the workload continues running.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#expanding-persistent-volumes-claims",
    tags: ["Volume Expansion","PVC Expansion","Resilience Failure"]
  },
  {
    id: "k8s-cka-266",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "PersistentVolume Access Modes: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to allow multiple pods distributed across different worker nodes to read and write simultaneously to a shared asset directory.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Use a `ReadWriteOnce` PersistentVolume and schedule every replica onto the same node." },
      { id: 'B', text: "Use a `ReadOnlyMany` PersistentVolume and have the writers use a second claim of their own." },
      { id: 'C', text: "Use a `ReadWriteMany` PersistentVolume backed by a network filesystem for the claim." },
      { id: 'D', text: "Use a `ReadWriteOncePod` PersistentVolume, which admits one pod per node to the volume." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure the PersistentVolume and PersistentVolumeClaim with the `ReadWriteMany` (RWX) access mode using a supporting network filesystem. `ReadWriteMany` (RWX) allows a volume to be mounted for reading and writing simultaneously by multiple nodes (typically backed by NFS, CephFS, or cloud file services). In contrast, `ReadWriteOnce` (RWO) restricts volume mounting to a single node at a time.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes",
    tags: ["Volume Access Modes","Access Modes","Dr Failover"]
  },
  {
    id: "k8s-cka-267",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "PersistentVolume Access Modes: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to allow multiple pods distributed across different worker nodes to read and write simultaneously to a shared asset directory.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Use a `ReadOnlyMany` PersistentVolume and have the writers use a second claim of their own." },
      { id: 'B', text: "Use a `ReadWriteOnce` PersistentVolume and schedule every replica onto the same node." },
      { id: 'C', text: "Use a `ReadWriteOncePod` PersistentVolume, which admits one pod per node to the volume." },
      { id: 'D', text: "Use a `ReadWriteMany` PersistentVolume backed by a network filesystem for the claim." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure the PersistentVolume and PersistentVolumeClaim with the `ReadWriteMany` (RWX) access mode using a supporting network filesystem. `ReadWriteMany` (RWX) allows a volume to be mounted for reading and writing simultaneously by multiple nodes (typically backed by NFS, CephFS, or cloud file services). In contrast, `ReadWriteOnce` (RWO) restricts volume mounting to a single node at a time.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes",
    tags: ["Volume Access Modes","Access Modes","High Load Scale"]
  },
  {
    id: "k8s-cka-268",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "PersistentVolume Access Modes: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to allow multiple pods distributed across different worker nodes to read and write simultaneously to a shared asset directory.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Use a `ReadWriteOncePod` PersistentVolume, which admits one pod per node to the volume." },
      { id: 'B', text: "Use a `ReadWriteMany` PersistentVolume backed by a network filesystem for the claim." },
      { id: 'C', text: "Use a `ReadOnlyMany` PersistentVolume and have the writers use a second claim of their own." },
      { id: 'D', text: "Use a `ReadWriteOnce` PersistentVolume and schedule every replica onto the same node." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure the PersistentVolume and PersistentVolumeClaim with the `ReadWriteMany` (RWX) access mode using a supporting network filesystem. `ReadWriteMany` (RWX) allows a volume to be mounted for reading and writing simultaneously by multiple nodes (typically backed by NFS, CephFS, or cloud file services). In contrast, `ReadWriteOnce` (RWO) restricts volume mounting to a single node at a time.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes",
    tags: ["Volume Access Modes","Access Modes","Security Compliance"]
  },
  {
    id: "k8s-cka-269",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "PersistentVolume Access Modes: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to allow multiple pods distributed across different worker nodes to read and write simultaneously to a shared asset directory.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Use a `ReadWriteMany` PersistentVolume backed by a network filesystem for the claim." },
      { id: 'B', text: "Use a `ReadWriteOncePod` PersistentVolume, which admits one pod per node to the volume." },
      { id: 'C', text: "Use a `ReadWriteOnce` PersistentVolume and schedule every replica onto the same node." },
      { id: 'D', text: "Use a `ReadOnlyMany` PersistentVolume and have the writers use a second claim of their own." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the PersistentVolume and PersistentVolumeClaim with the `ReadWriteMany` (RWX) access mode using a supporting network filesystem. `ReadWriteMany` (RWX) allows a volume to be mounted for reading and writing simultaneously by multiple nodes (typically backed by NFS, CephFS, or cloud file services). In contrast, `ReadWriteOnce` (RWO) restricts volume mounting to a single node at a time.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes",
    tags: ["Volume Access Modes","Access Modes","Hybrid Migration"]
  },
  {
    id: "k8s-cka-270",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "PersistentVolume Access Modes: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to allow multiple pods distributed across different worker nodes to read and write simultaneously to a shared asset directory.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Use a `ReadWriteOnce` PersistentVolume and schedule every replica onto the same node." },
      { id: 'B', text: "Use a `ReadWriteOncePod` PersistentVolume, which admits one pod per node to the volume." },
      { id: 'C', text: "Use a `ReadOnlyMany` PersistentVolume and have the writers use a second claim of their own." },
      { id: 'D', text: "Use a `ReadWriteMany` PersistentVolume backed by a network filesystem for the claim." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure the PersistentVolume and PersistentVolumeClaim with the `ReadWriteMany` (RWX) access mode using a supporting network filesystem. `ReadWriteMany` (RWX) allows a volume to be mounted for reading and writing simultaneously by multiple nodes (typically backed by NFS, CephFS, or cloud file services). In contrast, `ReadWriteOnce` (RWO) restricts volume mounting to a single node at a time.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes",
    tags: ["Volume Access Modes","Access Modes","Resilience Failure"]
  },
  {
    id: "k8s-cka-271",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "ConfigMap and Secret Volume Mounts: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to inject a configuration file from a ConfigMap into an existing container directory without overwriting the directory's other pre-existing files.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Mount the ConfigMap with `subPath` naming the single configuration file key." },
      { id: 'B', text: "Mount the ConfigMap at the target directory with no `subPath` specified." },
      { id: 'C', text: "Bake the configuration file into the image and mount the ConfigMap elsewhere." },
      { id: 'D', text: "Use an init container to copy the file out of the ConfigMap into an `emptyDir`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Mount the ConfigMap volume using the `subPath` property pointing to the specific configuration file key. Mounting a ConfigMap directly to a directory replaces the entire contents of that directory with the ConfigMap keys. Using `subPath` mounts only the individual file into the directory, preserving existing files already present in the container image.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-files-from-a-pod",
    tags: ["Configuration Storage","Volume Mounts","Dr Failover"]
  },
  {
    id: "k8s-cka-272",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "ConfigMap and Secret Volume Mounts: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to inject a configuration file from a ConfigMap into an existing container directory without overwriting the directory's other pre-existing files.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Use an init container to copy the file out of the ConfigMap into an `emptyDir`." },
      { id: 'B', text: "Bake the configuration file into the image and mount the ConfigMap elsewhere." },
      { id: 'C', text: "Mount the ConfigMap at the target directory with no `subPath` specified." },
      { id: 'D', text: "Mount the ConfigMap with `subPath` naming the single configuration file key." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Mount the ConfigMap volume using the `subPath` property pointing to the specific configuration file key. Mounting a ConfigMap directly to a directory replaces the entire contents of that directory with the ConfigMap keys. Using `subPath` mounts only the individual file into the directory, preserving existing files already present in the container image.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-files-from-a-pod",
    tags: ["Configuration Storage","Volume Mounts","High Load Scale"]
  },
  {
    id: "k8s-cka-273",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "ConfigMap and Secret Volume Mounts: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to inject a configuration file from a ConfigMap into an existing container directory without overwriting the directory's other pre-existing files.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Bake the configuration file into the image and mount the ConfigMap elsewhere." },
      { id: 'B', text: "Mount the ConfigMap at the target directory with no `subPath` specified." },
      { id: 'C', text: "Use an init container to copy the file out of the ConfigMap into an `emptyDir`." },
      { id: 'D', text: "Mount the ConfigMap with `subPath` naming the single configuration file key." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Mount the ConfigMap volume using the `subPath` property pointing to the specific configuration file key. Mounting a ConfigMap directly to a directory replaces the entire contents of that directory with the ConfigMap keys. Using `subPath` mounts only the individual file into the directory, preserving existing files already present in the container image.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-files-from-a-pod",
    tags: ["Configuration Storage","Volume Mounts","Security Compliance"]
  },
  {
    id: "k8s-cka-274",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "ConfigMap and Secret Volume Mounts: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to inject a configuration file from a ConfigMap into an existing container directory without overwriting the directory's other pre-existing files.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Use an init container to copy the file out of the ConfigMap into an `emptyDir`." },
      { id: 'B', text: "Bake the configuration file into the image and mount the ConfigMap elsewhere." },
      { id: 'C', text: "Mount the ConfigMap at the target directory with no `subPath` specified." },
      { id: 'D', text: "Mount the ConfigMap with `subPath` naming the single configuration file key." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Mount the ConfigMap volume using the `subPath` property pointing to the specific configuration file key. Mounting a ConfigMap directly to a directory replaces the entire contents of that directory with the ConfigMap keys. Using `subPath` mounts only the individual file into the directory, preserving existing files already present in the container image.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-files-from-a-pod",
    tags: ["Configuration Storage","Volume Mounts","Hybrid Migration"]
  },
  {
    id: "k8s-cka-275",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "ConfigMap and Secret Volume Mounts: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to inject a configuration file from a ConfigMap into an existing container directory without overwriting the directory's other pre-existing files.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Bake the configuration file into the image and mount the ConfigMap elsewhere." },
      { id: 'B', text: "Use an init container to copy the file out of the ConfigMap into an `emptyDir`." },
      { id: 'C', text: "Mount the ConfigMap with `subPath` naming the single configuration file key." },
      { id: 'D', text: "Mount the ConfigMap at the target directory with no `subPath` specified." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Mount the ConfigMap volume using the `subPath` property pointing to the specific configuration file key. Mounting a ConfigMap directly to a directory replaces the entire contents of that directory with the ConfigMap keys. Using `subPath` mounts only the individual file into the directory, preserving existing files already present in the container image.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-files-from-a-pod",
    tags: ["Configuration Storage","Volume Mounts","Resilience Failure"]
  }
];

export default K8S_CKA_QUESTIONS_12;
