export const K8S_CKA_FLASHCARDS_12 = [
  {
    id: "k8s-cka-fc-251",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    front: "WaitForFirstConsumer StorageClass Binding (Dr Failover)",
    hint: "Delaying volume provisioning until pod node placement is resolved.",
    back: "Setting <strong>volumeBindingMode: WaitForFirstConsumer</strong> delays PersistentVolume provisioning until pod scheduling completes, preventing zone-mismatch failures with topology-constrained cloud disks.",
    tags: ["StorageClass", "StorageClass", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-252",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    front: "WaitForFirstConsumer StorageClass Binding (High Load Scale)",
    hint: "Delaying volume provisioning until pod node placement is resolved.",
    back: "Setting <strong>volumeBindingMode: WaitForFirstConsumer</strong> delays PersistentVolume provisioning until pod scheduling completes, preventing zone-mismatch failures with topology-constrained cloud disks.",
    tags: ["StorageClass", "StorageClass", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-253",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    front: "WaitForFirstConsumer StorageClass Binding (Security Compliance)",
    hint: "Delaying volume provisioning until pod node placement is resolved.",
    back: "Setting <strong>volumeBindingMode: WaitForFirstConsumer</strong> delays PersistentVolume provisioning until pod scheduling completes, preventing zone-mismatch failures with topology-constrained cloud disks.",
    tags: ["StorageClass", "StorageClass", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-254",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d1",
    front: "WaitForFirstConsumer StorageClass Binding (Hybrid Migration)",
    hint: "Delaying volume provisioning until pod node placement is resolved.",
    back: "Setting <strong>volumeBindingMode: WaitForFirstConsumer</strong> delays PersistentVolume provisioning until pod scheduling completes, preventing zone-mismatch failures with topology-constrained cloud disks.",
    tags: ["StorageClass", "StorageClass", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-255",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    front: "WaitForFirstConsumer StorageClass Binding (Resilience Failure)",
    hint: "Delaying volume provisioning until pod node placement is resolved.",
    back: "Setting <strong>volumeBindingMode: WaitForFirstConsumer</strong> delays PersistentVolume provisioning until pod scheduling completes, preventing zone-mismatch failures with topology-constrained cloud disks.",
    tags: ["StorageClass", "StorageClass", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-256",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    front: "PersistentVolume Retain Reclaim Policy (Dr Failover)",
    hint: "Preserving underlying storage volumes when PVCs are deleted.",
    back: "The <strong>Retain</strong> reclaim policy preserves the physical storage asset and data after a PVC is deleted, leaving the PV in <code>Released</code> state for administrative inspection and recovery.",
    tags: ["PV Reclaim Policy", "PV Lifecycle", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-257",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    front: "PersistentVolume Retain Reclaim Policy (High Load Scale)",
    hint: "Preserving underlying storage volumes when PVCs are deleted.",
    back: "The <strong>Retain</strong> reclaim policy preserves the physical storage asset and data after a PVC is deleted, leaving the PV in <code>Released</code> state for administrative inspection and recovery.",
    tags: ["PV Reclaim Policy", "PV Lifecycle", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-258",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    front: "PersistentVolume Retain Reclaim Policy (Security Compliance)",
    hint: "Preserving underlying storage volumes when PVCs are deleted.",
    back: "The <strong>Retain</strong> reclaim policy preserves the physical storage asset and data after a PVC is deleted, leaving the PV in <code>Released</code> state for administrative inspection and recovery.",
    tags: ["PV Reclaim Policy", "PV Lifecycle", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-259",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d1",
    front: "PersistentVolume Retain Reclaim Policy (Hybrid Migration)",
    hint: "Preserving underlying storage volumes when PVCs are deleted.",
    back: "The <strong>Retain</strong> reclaim policy preserves the physical storage asset and data after a PVC is deleted, leaving the PV in <code>Released</code> state for administrative inspection and recovery.",
    tags: ["PV Reclaim Policy", "PV Lifecycle", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-260",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    front: "PersistentVolume Retain Reclaim Policy (Resilience Failure)",
    hint: "Preserving underlying storage volumes when PVCs are deleted.",
    back: "The <strong>Retain</strong> reclaim policy preserves the physical storage asset and data after a PVC is deleted, leaving the PV in <code>Released</code> state for administrative inspection and recovery.",
    tags: ["PV Reclaim Policy", "PV Lifecycle", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-261",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    front: "Online PVC Volume Expansion (Dr Failover)",
    hint: "Expanding PersistentVolumeClaims dynamically with allowVolumeExpansion.",
    back: "Setting <strong>allowVolumeExpansion: true</strong> on a StorageClass allows administrators to increase PVC capacity on-the-fly by editing the claim spec, triggering automatic CSI volume and filesystem expansion.",
    tags: ["Volume Expansion", "PVC Expansion", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-262",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    front: "Online PVC Volume Expansion (High Load Scale)",
    hint: "Expanding PersistentVolumeClaims dynamically with allowVolumeExpansion.",
    back: "Setting <strong>allowVolumeExpansion: true</strong> on a StorageClass allows administrators to increase PVC capacity on-the-fly by editing the claim spec, triggering automatic CSI volume and filesystem expansion.",
    tags: ["Volume Expansion", "PVC Expansion", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-263",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    front: "Online PVC Volume Expansion (Security Compliance)",
    hint: "Expanding PersistentVolumeClaims dynamically with allowVolumeExpansion.",
    back: "Setting <strong>allowVolumeExpansion: true</strong> on a StorageClass allows administrators to increase PVC capacity on-the-fly by editing the claim spec, triggering automatic CSI volume and filesystem expansion.",
    tags: ["Volume Expansion", "PVC Expansion", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-264",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d1",
    front: "Online PVC Volume Expansion (Hybrid Migration)",
    hint: "Expanding PersistentVolumeClaims dynamically with allowVolumeExpansion.",
    back: "Setting <strong>allowVolumeExpansion: true</strong> on a StorageClass allows administrators to increase PVC capacity on-the-fly by editing the claim spec, triggering automatic CSI volume and filesystem expansion.",
    tags: ["Volume Expansion", "PVC Expansion", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-265",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    front: "Online PVC Volume Expansion (Resilience Failure)",
    hint: "Expanding PersistentVolumeClaims dynamically with allowVolumeExpansion.",
    back: "Setting <strong>allowVolumeExpansion: true</strong> on a StorageClass allows administrators to increase PVC capacity on-the-fly by editing the claim spec, triggering automatic CSI volume and filesystem expansion.",
    tags: ["Volume Expansion", "PVC Expansion", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-266",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    front: "ReadWriteMany (RWX) Access Mode (Dr Failover)",
    hint: "Simultaneous read-write volume sharing across multiple cluster nodes.",
    back: "<strong>ReadWriteMany (RWX)</strong> allows multiple pods across distinct worker nodes to mount and write to a single volume simultaneously, requiring a compatible network storage provider like NFS.",
    tags: ["Volume Access Modes", "Access Modes", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-267",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    front: "ReadWriteMany (RWX) Access Mode (High Load Scale)",
    hint: "Simultaneous read-write volume sharing across multiple cluster nodes.",
    back: "<strong>ReadWriteMany (RWX)</strong> allows multiple pods across distinct worker nodes to mount and write to a single volume simultaneously, requiring a compatible network storage provider like NFS.",
    tags: ["Volume Access Modes", "Access Modes", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-268",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    front: "ReadWriteMany (RWX) Access Mode (Security Compliance)",
    hint: "Simultaneous read-write volume sharing across multiple cluster nodes.",
    back: "<strong>ReadWriteMany (RWX)</strong> allows multiple pods across distinct worker nodes to mount and write to a single volume simultaneously, requiring a compatible network storage provider like NFS.",
    tags: ["Volume Access Modes", "Access Modes", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-269",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d1",
    front: "ReadWriteMany (RWX) Access Mode (Hybrid Migration)",
    hint: "Simultaneous read-write volume sharing across multiple cluster nodes.",
    back: "<strong>ReadWriteMany (RWX)</strong> allows multiple pods across distinct worker nodes to mount and write to a single volume simultaneously, requiring a compatible network storage provider like NFS.",
    tags: ["Volume Access Modes", "Access Modes", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-270",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    front: "ReadWriteMany (RWX) Access Mode (Resilience Failure)",
    hint: "Simultaneous read-write volume sharing across multiple cluster nodes.",
    back: "<strong>ReadWriteMany (RWX)</strong> allows multiple pods across distinct worker nodes to mount and write to a single volume simultaneously, requiring a compatible network storage provider like NFS.",
    tags: ["Volume Access Modes", "Access Modes", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-271",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    front: "ConfigMap and Secret subPath Mounts (Dr Failover)",
    hint: "Mounting single files into directories without overwriting existing files.",
    back: "Using <strong>subPath</strong> when mounting ConfigMaps or Secrets injects a single file into a container directory without masking or obliterating the other files already present in that directory.",
    tags: ["Configuration Storage", "Volume Mounts", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-272",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    front: "ConfigMap and Secret subPath Mounts (High Load Scale)",
    hint: "Mounting single files into directories without overwriting existing files.",
    back: "Using <strong>subPath</strong> when mounting ConfigMaps or Secrets injects a single file into a container directory without masking or obliterating the other files already present in that directory.",
    tags: ["Configuration Storage", "Volume Mounts", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-273",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    front: "ConfigMap and Secret subPath Mounts (Security Compliance)",
    hint: "Mounting single files into directories without overwriting existing files.",
    back: "Using <strong>subPath</strong> when mounting ConfigMaps or Secrets injects a single file into a container directory without masking or obliterating the other files already present in that directory.",
    tags: ["Configuration Storage", "Volume Mounts", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-274",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d1",
    front: "ConfigMap and Secret subPath Mounts (Hybrid Migration)",
    hint: "Mounting single files into directories without overwriting existing files.",
    back: "Using <strong>subPath</strong> when mounting ConfigMaps or Secrets injects a single file into a container directory without masking or obliterating the other files already present in that directory.",
    tags: ["Configuration Storage", "Volume Mounts", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-275",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    front: "ConfigMap and Secret subPath Mounts (Resilience Failure)",
    hint: "Mounting single files into directories without overwriting existing files.",
    back: "Using <strong>subPath</strong> when mounting ConfigMaps or Secrets injects a single file into a container directory without masking or obliterating the other files already present in that directory.",
    tags: ["Configuration Storage", "Volume Mounts", "Resilience Failure"]
  }
];

export default K8S_CKA_FLASHCARDS_12;
