export const CNCF_KCNA_QUESTIONS_14 = [
  {
    id: "cncf-kcna-326",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Claim waiting with no class to use",
    scenario: "On a freshly installed cluster, a PersistentVolumeClaim without a storageClassName has sat in Pending for an hour, and the Pod using it is Pending too. kubectl describe pvc shows 'no persistent volumes available for this claim and no storage class is set'. kubectl get storageclass shows two classes, neither marked (default).",
    question: "What is the simplest fix?",
    options: [
      { id: 'A', text: "Set the claim's storageClassName to an empty string so any StorageClass can serve it" },
      { id: 'B', text: "Mark one StorageClass as the default, or set storageClassName on the claim" },
      { id: 'C', text: "Delete the Pod so the scheduler can place it on a node with more storage" },
      { id: 'D', text: "Change the claim's access mode to ReadWriteMany so the default StorageClass binds it" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A claim with no storageClassName uses the cluster's default StorageClass for dynamic provisioning; with no default and no matching pre-created PersistentVolume, nothing can satisfy it. Annotating one class with storageclass.kubernetes.io/is-default-class: \"true\", or naming a class in the claim, lets a provisioner create a volume. Setting storageClassName to an empty string does the opposite: it disables dynamic provisioning and binds only pre-created volumes without a class. Changing the access mode does not give the claim a provisioner. Rescheduling the Pod does nothing while the claim is unbound. volumeMode Block still needs a volume to be provisioned or pre-created.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/#default-storageclass",
    tags: ["PVC", "StorageClass", "Troubleshooting"]
  },
  {
    id: "cncf-kcna-327",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Volume node affinity conflict",
    scenario: "A database Pod bound to a PersistentVolume of type local, created on node worker-2, stays Pending after worker-2 was drained for repair. The scheduler reports '0/5 nodes are available: 1 node(s) were unschedulable, 4 node(s) had volume node affinity conflict'.",
    question: "Why can the Pod not run elsewhere?",
    options: [
      { id: 'A', text: "The local PV's reclaim policy is Retain, which forbids the volume from moving off worker-2" },
      { id: 'B', text: "The PVC uses ReadWriteOnce, which forbids the Pod from running on another node ever" },
      { id: 'C', text: "The local PV's nodeAffinity pins it, and so the Pod, to worker-2, which is cordoned" },
      { id: 'D', text: "The StorageClass has allowVolumeExpansion off, so the volume cannot follow the Pod" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A local PersistentVolume is a disk attached to one node, and its required nodeAffinity tells the scheduler that any Pod using it must run on that node. With worker-2 cordoned, the other four nodes fail the volume node affinity check. The Pod can only return when worker-2 does, or the data must be restored onto a new volume. The reclaim policy decides what happens to a volume after its claim is deleted, not where it can be used. ReadWriteOnce limits simultaneous mounts to one node, not which node. Volume expansion concerns size, not location.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#local",
    tags: ["Local volumes", "Node affinity", "Scheduling"]
  },
  {
    id: "cncf-kcna-328",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Multi-Attach error during a rolling update",
    scenario: "A single-replica Deployment mounts a ReadWriteOnce block-storage PVC. During a rolling update, the new Pod is scheduled to a different node and sits in ContainerCreating with 'Multi-Attach error for volume: Volume is already exclusively attached to one node', while the old Pod keeps running.",
    question: "What change prevents this on future rollouts?",
    options: [
      { id: 'A', text: "Add a readiness probe to the new Pod so it waits for the volume to be attached to its node" },
      { id: 'B', text: "Switch the reclaim policy to Delete so that the volume detaches automatically between Pods" },
      { id: 'C', text: "Raise maxSurge to 100% so the new Pod starts sooner and the attach operation has more time" },
      { id: 'D', text: "Use the Recreate strategy so the old Pod stops and releases the volume before the new one starts" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A ReadWriteOnce block volume can be attached to only one node at a time. The default RollingUpdate strategy starts the new Pod before stopping the old one, so if it lands on another node the attach fails until the old Pod goes away. The Recreate strategy terminates the old Pod first (a StatefulSet is another option), accepting a short outage. More surge makes overlap more likely, not less. The reclaim policy only applies when the claim is deleted and would destroy the data. A readiness probe runs after containers start, which cannot happen without the volume.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#recreate-deployment",
    tags: ["ReadWriteOnce", "Deployments", "Troubleshooting"]
  },
  {
    id: "cncf-kcna-329",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Which policies apply to this Pod?",
    scenario: "Since a security team added several NetworkPolicies to the orders namespace, the orders API can no longer reach its Redis Pod on port 6379, although both run and a direct curl from a debug Pod elsewhere succeeds. The engineer needs to find which rules now govern traffic to Redis.",
    question: "What should the engineer do?",
    options: [
      { id: 'A', text: "Restart kube-proxy on the Redis node so it reloads the latest NetworkPolicy rules from the API" },
      { id: 'B', text: "Describe the Redis Service, whose status lists every NetworkPolicy currently applied to it" },
      { id: 'C', text: "Read the audit log for the namespace to see which NetworkPolicies dropped the Redis packets" },
      { id: 'D', text: "List the namespace's NetworkPolicies and describe those whose podSelector matches the Redis labels" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Policies apply to the Pods their podSelector matches, and once any ingress policy selects Redis only the union of their allow rules gets in. Listing the namespace's policies and describing the ones matching Redis's labels shows whether the orders API's labels and port 6379 are allowed. kube-proxy does not implement NetworkPolicy. Services have no field listing policies, and policies select Pods rather than Services. The audit log records API requests, not dropped packets; per-packet drop visibility comes from the CNI plugin's own tools.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "Troubleshooting"]
  },
  {
    id: "cncf-kcna-330",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Node still marked SchedulingDisabled",
    scenario: "A node was drained last night for a kernel patch and has rebooted successfully. It shows Ready,SchedulingDisabled in kubectl get nodes, and no new Pods have landed on it all morning even though other nodes are busy.",
    question: "Which command returns the node to service?",
    options: [
      { id: 'A', text: "kubectl drain worker-4 --undo" },
      { id: 'B', text: "kubectl uncordon worker-4" },
      { id: 'C', text: "kubectl label node worker-4 ready=yes" },
      { id: 'D', text: "kubectl taint nodes worker-4 ready" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubectl drain cordons the node, setting spec.unschedulable, which kubectl shows as SchedulingDisabled; a reboot does not clear it. kubectl uncordon removes the flag so the scheduler places Pods there again. drain has no undo flag. Adding a taint would repel Pods rather than admit them. A label has no effect on the unschedulable flag.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",
    tags: ["Nodes", "Cordon", "Maintenance"]
  },
  {
    id: "cncf-kcna-331",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Curling a Pod IP from a laptop",
    scenario: "A developer copies a Pod's IP address, 10.244.3.17, from kubectl get pods -o wide and tries to open it in a browser on her laptop, which is on the office network. The request times out, although the Pod is Running and Ready and other Pods can reach it.",
    question: "What explains the timeout?",
    options: [
      { id: 'A', text: "Pod IPs only accept traffic from an outside network once a NetworkPolicy allows the source" },
      { id: 'B', text: "Pod IPs are virtual addresses that only kube-proxy rules on each node know how to answer" },
      { id: 'C', text: "Pod IPs change every few minutes, so the address she copied had already been reassigned" },
      { id: 'D', text: "Pod IPs belong to the cluster's internal Pod network and are not routed to outside clients" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pod IPs come from the cluster's Pod network (here 10.244.0.0/16), which is routable between nodes and Pods but normally not from outside networks. To reach the app she can use kubectl port-forward, or it can be exposed with a Service of type NodePort or LoadBalancer, or through Ingress. Traffic is allowed by default until a NetworkPolicy selects the Pod, and other Pods already reach it. Pod IPs are real interface addresses; ClusterIPs are the virtual ones kube-proxy handles. A Pod keeps its IP for its lifetime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/",
    tags: ["Pod network", "Services"]
  },
  {
    id: "cncf-kcna-332",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Browser shows the controller's fake certificate",
    scenario: "An Ingress for shop.example.com lists a tls section with secretName shop-tls, but browsers warn that the site presents 'Kubernetes Ingress Controller Fake Certificate'. The Ingress is in the storefront namespace, and the TLS Secret was created in the ingress-nginx namespace.",
    question: "What should be fixed?",
    options: [
      { id: 'A', text: "Change the storefront backend Service to port 443 so traffic stays encrypted" },
      { id: 'B', text: "Add a NetworkPolicy in the namespace so the controller can read the shop-tls Secret" },
      { id: 'C', text: "Change the Ingress's pathType from Prefix to Exact so the TLS rule matches" },
      { id: 'D', text: "Create the shop-tls Secret in the storefront namespace, alongside the Ingress" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An Ingress can only reference a TLS Secret in its own namespace. The controller cannot find shop-tls in storefront, so it falls back to its self-signed default certificate. Creating the Secret (with tls.crt and tls.key) in storefront fixes it. The backend port affects the hop from the controller to the Pods, not the certificate presented to browsers. NetworkPolicy governs network traffic, not which Secrets an Ingress may reference. pathType affects URL matching, not TLS.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls",
    tags: ["Ingress", "TLS", "Secrets"]
  },
  {
    id: "cncf-kcna-333",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "NodePort Service unreachable on port 80",
    scenario: "A team exposes a web app with a Service of type NodePort using port: 80, and kubectl get svc shows PORT(S) 80:31542/TCP. Opening http://NODE-IP:80 from the office fails, although the Pods are healthy and the node firewall allows the NodePort range.",
    question: "Which address should they use?",
    options: [
      { id: 'A', text: "http://NODE-IP:31542, the port allocated on every node" },
      { id: 'B', text: "http://CLUSTER-IP:80, the Service's virtual cluster IP" },
      { id: 'C', text: "http://POD-IP:31542, the Pod address on the node port" },
      { id: 'D', text: "http://NODE-IP:6443, the API server's secure port" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A NodePort Service opens the same port on every node, allocated from 30000-32767 by default, and forwards it to the Service; here that is 31542, while 80 is the Service port on its ClusterIP. The ClusterIP is only reachable inside the cluster. Pods do not listen on the node port. Port 6443 is the Kubernetes API server, not the application.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport",
    tags: ["NodePort", "Services"]
  },
  {
    id: "cncf-kcna-334",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "No matches for kind Certificate",
    scenario: "Applying a manifest copied from a tutorial fails with: 'no matches for kind \"Certificate\" in version \"cert-manager.io/v1\"'. The cluster is healthy, and other manifests apply normally.",
    question: "What is the cause?",
    options: [
      { id: 'A', text: "The user lacks RBAC permission to create Certificate objects in that namespace" },
      { id: 'B', text: "The cert-manager CustomResourceDefinitions are not installed in the cluster" },
      { id: 'C', text: "The cluster's API server is newer than the cert-manager release the tutorial was using" },
      { id: 'D', text: "The manifest's metadata.name is not a valid DNS subdomain for the Certificate" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "'no matches for kind' means the API server does not serve that group, version and kind. Certificate in cert-manager.io/v1 is a custom resource that exists only after cert-manager's CustomResourceDefinitions are installed. Missing RBAC permission produces a Forbidden error. An invalid name is reported as a validation error on the field. The core API server version does not determine whether a third-party CRD is served.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",
    tags: ["CRDs", "Troubleshooting"]
  },
  {
    id: "cncf-kcna-335",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Claim stuck in Terminating",
    scenario: "An engineer deleted a PersistentVolumeClaim named reports-data to free space, but kubectl get pvc shows it in Terminating for hours. kubectl describe lists the finalizer kubernetes.io/pvc-protection and shows the claim is still used by a running Pod named reports-7c9.",
    question: "Why has the claim not been deleted?",
    options: [
      { id: 'A', text: "The CSI driver must first take a VolumeSnapshot of the claim's contents" },
      { id: 'B', text: "The bound PersistentVolume has a Retain policy, which blocks deletion" },
      { id: 'C', text: "The StorageClass needs allowVolumeExpansion before claims can be removed" },
      { id: 'D', text: "Storage object in use protection waits until no Pod is using the claim" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The pvc-protection finalizer implements storage object in use protection: a claim in active use by a Pod is not removed until that Pod is deleted, preventing data loss under a running workload. Deleting or scaling down reports-7c9 lets the deletion complete. A Retain policy decides what happens to the PersistentVolume after the claim is gone; it does not block the claim's deletion. Volume expansion and snapshots are unrelated to deletion.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#storage-object-in-use-protection",
    tags: ["PVC", "Finalizers", "Troubleshooting"]
  },
  {
    id: "cncf-kcna-336",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Permission denied on a fresh volume",
    scenario: "A container running as UID 1000 fails at start-up with 'permission denied' when writing to /data, which is a newly provisioned PersistentVolume whose filesystem root is owned by root. The team must keep the container non-root.",
    question: "Which Pod setting is the usual fix?",
    options: [
      { id: 'A', text: "securityContext.fsGroup, so the volume is group-owned by a group the process has" },
      { id: 'B', text: "securityContext.privileged: true, so the container bypasses file permissions" },
      { id: 'C', text: "securityContext.runAsUser: 0, so the process can write anywhere on the volume" },
      { id: 'D', text: "securityContext.readOnlyRootFilesystem: false, so /data becomes writable" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Setting fsGroup in the Pod securityContext makes the kubelet change the group ownership and permissions of supported volumes to that group and add it to the container processes' supplementary groups, so a non-root user can write. Running as UID 0 or privileged would work but breaks the non-root requirement and weakens security. readOnlyRootFilesystem concerns the container image's filesystem, not a mounted volume's permissions.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#configure-volume-permission-and-ownership-change-policy-for-pods",
    tags: ["fsGroup", "Volumes", "securityContext"]
  },
  {
    id: "cncf-kcna-337",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "A claim that will not grow",
    scenario: "A team edits a bound PersistentVolumeClaim from 10Gi to 20Gi because its database is nearly full. The edit is refused with an error that only dynamically provisioned claims whose storage class supports resize can be expanded. The claim uses the StorageClass standard-ssd.",
    question: "What has to change before the claim can be expanded?",
    options: [
      { id: 'A', text: "The PersistentVolume must use the Retain policy before the driver can resize it" },
      { id: 'B', text: "The Pod must be deleted first, since the StorageClass makes bound claims immutable" },
      { id: 'C', text: "The claim must switch to ReadWriteMany so that the new capacity can be attached" },
      { id: 'D', text: "allowVolumeExpansion: true on the StorageClass, with a driver able to resize" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A claim can only be expanded if its StorageClass has allowVolumeExpansion: true and the underlying CSI driver supports resizing; the error says the class lacks that setting. Once it is set, editing spec.resources.requests.storage upwards triggers the resize, often while the Pod keeps running. The reclaim policy is irrelevant to resizing. Access modes do not govern capacity changes. Bound claims can have their storage request increased, and many drivers expand volumes online.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#expanding-persistent-volumes-claims",
    tags: ["PVC", "Volume expansion", "StorageClass"]
  },
  {
    id: "cncf-kcna-338",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Certificate files from a Secret",
    scenario: "A web server expects its certificate and key as files named tls.crt and tls.key in /etc/tls. They are stored in a Secret named web-tls with exactly those two keys, and the team does not want them baked into the image or set as environment variables.",
    question: "How should the Pod consume the Secret?",
    options: [
      { id: 'A', text: "Use envFrom with a secretRef to web-tls in the web container" },
      { id: 'B', text: "List the web-tls Secret under imagePullSecrets for mounting" },
      { id: 'C', text: "Declare a secret volume for web-tls and mount it at /etc/tls" },
      { id: 'D', text: "Declare a hostPath volume for /etc/tls populated from web-tls" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A secret volume projects each key of the Secret as a file in the mount directory, so mounting web-tls at /etc/tls yields /etc/tls/tls.crt and /etc/tls/tls.key, and the volume is backed by tmpfs on the node. envFrom turns the keys into environment variables, which the team wants to avoid. hostPath mounts a node directory and has no link to Secrets. imagePullSecrets are only used by the kubelet to authenticate image pulls and are never mounted into containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-files-from-a-pod",
    tags: ["Secrets", "Volumes"]
  },
  {
    id: "cncf-kcna-339",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Data that must follow a rescheduled Pod",
    scenario: "A small wiki runs as a single Pod. When its node was replaced last month, the Pod came back on another node with an empty database, because the data had been kept in a directory on the old node. The team wants the data to survive the Pod moving between nodes.",
    question: "Which storage should the Pod use?",
    options: [
      { id: 'A', text: "An emptyDir volume with its medium set to the node's disk" },
      { id: 'B', text: "A ConfigMap volume that the wiki writes its database into" },
      { id: 'C', text: "A hostPath volume pointing to the same path on every node" },
      { id: 'D', text: "A PersistentVolumeClaim backed by network-attached storage" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A PersistentVolumeClaim backed by network-attached storage (a cloud disk, iSCSI, NFS and so on) is independent of any node, so when the Pod is rescheduled the volume is detached and attached wherever the Pod lands, with the data intact. A hostPath with the same path on every node still points to separate disks on each node, which is exactly what lost the data. An emptyDir is deleted when the Pod leaves the node. ConfigMap volumes are read-only and not meant for application data.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["PVC", "Persistence"]
  },
  {
    id: "cncf-kcna-340",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "How long an emptyDir lasts",
    scenario: "A build Pod caches downloaded dependencies in an emptyDir so retries are faster. The team wants to know which events keep the cached data and which throw it away, so they can decide whether a PersistentVolumeClaim is needed.",
    question: "Which statement is correct?",
    options: [
      { id: 'A', text: "The data survives a container crash and restart but is deleted when the Pod is removed" },
      { id: 'B', text: "The data is deleted on a container restart but survives when the Pod is rescheduled" },
      { id: 'C', text: "The data is kept until the node reboots, regardless of what happens to the Pod itself" },
      { id: 'D', text: "The data survives the Pod's deletion and is reattached to its replacement Pod later" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An emptyDir's lifetime is tied to the Pod on its node: container crashes and restarts keep the data, because the volume belongs to the Pod rather than the container, but when the Pod is removed from the node for any reason the data is deleted permanently. A rescheduled Pod is a new Pod with a new, empty emptyDir. Nothing reattaches the old data to a replacement. The node's reboot is not what bounds its lifetime; the Pod is.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#emptydir",
    tags: ["emptyDir", "Lifecycle"]
  },
  {
    id: "cncf-kcna-341",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Reusing a volume after its claim was deleted",
    scenario: "A manually created PersistentVolume with persistentVolumeReclaimPolicy: Retain held a team's reports. The team deleted its claim by mistake and immediately created a new claim with the same name, size and class, but the new claim stays Pending while the volume shows the status Released.",
    question: "Why will the new claim not bind to the volume?",
    options: [
      { id: 'A', text: "A Retain policy lets a volume bind once only, so the data must be copied to a new one" },
      { id: 'B', text: "A Released volume still holds a claimRef to the deleted claim; an admin must clear it" },
      { id: 'C', text: "A Released volume has already been wiped by the provisioner and can no longer be used" },
      { id: 'D', text: "A new claim reusing a deleted claim's name must wait for a finalizer to time out" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When a claim bound to a Retain volume is deleted, the volume moves to Released and keeps its data and a claimRef pointing at the old claim's UID, so it is not available to any other claim, even one with the same name. After checking the data, an administrator removes the claimRef (or recreates the volume object) to make it Available again. Retain means nothing is deleted or scrubbed. A volume can be rebound after that manual step, so copying is unnecessary. No finalizer is holding the new claim back.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#retain",
    tags: ["PersistentVolume", "Reclaim policy", "Troubleshooting"]
  },
  {
    id: "cncf-kcna-342",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Who creates the volume and who asks for it",
    scenario: "In a company without dynamic provisioning, a storage administrator prepares network disks for the Kubernetes cluster, and application developers need storage for their Pods without knowing anything about the storage backend.",
    question: "How do these two roles map to Kubernetes objects?",
    options: [
      { id: 'A', text: "The admin creates PersistentVolumes; developers create PersistentVolumeClaims that bind to them" },
      { id: 'B', text: "The admin creates PersistentVolumeClaims; developers create PersistentVolumes that bind to them" },
      { id: 'C', text: "The admin creates StorageClasses; developers create CSIDriver objects that mount the disks" },
      { id: 'D', text: "The admin creates ConfigMaps with disk paths; developers mount them as hostPath volumes" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A PersistentVolume is a cluster-scoped piece of storage provisioned by an administrator (or dynamically by a StorageClass), and a PersistentVolumeClaim is a namespaced request for storage by size and access mode that the control plane binds to a matching volume; Pods then reference the claim. Reversing the roles contradicts the model. CSIDriver objects describe installed drivers and are not how developers request storage. ConfigMaps with hostPath mounts would tie Pods to node disks and bypass the storage abstraction entirely.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["PersistentVolume", "PVC"]
  },
  {
    id: "cncf-kcna-343",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Shared uploads across many nodes",
    scenario: "A content management system runs six replicas spread across several nodes, and all of them must read and write the same directory of uploaded media at the same time.",
    question: "Which access mode should the PersistentVolumeClaim request?",
    options: [
      { id: 'A', text: "ReadWriteMany" },
      { id: 'B', text: "ReadWriteOncePod" },
      { id: 'C', text: "ReadOnlyMany" },
      { id: 'D', text: "ReadWriteOnce" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "ReadWriteMany allows the volume to be mounted read-write by many nodes simultaneously, which is what replicas on different nodes need; it requires a backend that supports it, such as NFS or a cloud file service. ReadWriteOnce allows read-write mounting by a single node only. ReadOnlyMany lets many nodes mount it but only for reading. ReadWriteOncePod restricts the volume to a single Pod in the whole cluster.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes",
    tags: ["Access modes", "ReadWriteMany"]
  },
  {
    id: "cncf-kcna-344",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Exactly one writer, even on one node",
    scenario: "A licensing server keeps its state on a block volume and corrupts the data if two instances ever write to it at once. With ReadWriteOnce, the team noticed that a second Pod scheduled onto the same node could mount the volume too.",
    question: "Which access mode guarantees only a single Pod can use the volume?",
    options: [
      { id: 'A', text: "ReadOnlyMany with a writer Pod" },
      { id: 'B', text: "ReadWriteOnce with one replica" },
      { id: 'C', text: "ReadWriteOncePod" },
      { id: 'D', text: "ReadWriteMany with a lock file" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "ReadWriteOnce restricts mounting to a single node, so several Pods on that node can still share the volume. ReadWriteOncePod, stable since Kubernetes 1.29 for CSI volumes, ensures only one Pod in the whole cluster can use the claim. Keeping one replica does not stop a rolling update or a second workload from mounting it. ReadOnlyMany gives no Pod write access. ReadWriteMany explicitly allows many writers and relies on the application for locking.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes",
    tags: ["Access modes", "ReadWriteOncePod"]
  },
  {
    id: "cncf-kcna-345",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Claim larger than any available volume",
    scenario: "An administrator pre-created three 5Gi PersistentVolumes with no storage class. A developer creates a PVC with storageClassName set to an empty string that requests 10Gi with ReadWriteOnce. The claim stays Pending, and all three volumes stay Available.",
    question: "Why does the claim not bind?",
    options: [
      { id: 'A', text: "Claims only bind to available volumes after a Pod that requests them has started" },
      { id: 'B', text: "Pre-created volumes can only bind to claims that request ReadWriteMany mode" },
      { id: 'C', text: "Several 5Gi volumes must first be merged by the scheduler into one 10Gi disk" },
      { id: 'D', text: "No available volume offers at least the 10Gi capacity the claim requests" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Binding requires a PersistentVolume whose capacity is at least the requested size and whose access modes and class match. None of the 5Gi volumes satisfies a 10Gi request, and with an empty storageClassName dynamic provisioning is disabled, so the claim stays Pending until a large enough volume appears. Binding is immediate for volumes without WaitForFirstConsumer. Kubernetes never combines volumes. Pre-created volumes can bind with any access mode they support.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#binding",
    tags: ["PVC", "Binding"]
  },
  {
    id: "cncf-kcna-346",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Deleting a Pod that used a claim",
    scenario: "A developer deletes a standalone Pod that had a PersistentVolumeClaim named notes-data mounted at /data. A week later she creates a new Pod that references the same claim.",
    question: "What will the new Pod find at /data?",
    options: [
      { id: 'A', text: "An empty directory, since deleting a Pod also wipes the claim's volume" },
      { id: 'B', text: "Read-only files, since reused claims are remounted in read-only mode" },
      { id: 'C', text: "The files the old Pod wrote, since the claim and its volume outlive Pods" },
      { id: 'D', text: "An error, since a claim can only ever be mounted by the Pod that made it" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "PersistentVolumeClaims and their bound PersistentVolumes have a lifecycle independent of Pods. Deleting the Pod releases the mount, but the claim stays bound and the data stays on the volume, so a new Pod referencing notes-data sees the same files. Data is only at risk when the claim itself is deleted and the reclaim policy is Delete. Claims are not tied to the Pod that first used them. Mount mode comes from the Pod spec and the access mode, not from reuse.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#lifecycle-of-a-volume-and-claim",
    tags: ["PVC", "Lifecycle"]
  },
  {
    id: "cncf-kcna-347",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "One directory from several sources",
    scenario: "An application expects its settings file, its TLS certificate and a file with its own namespace name to all appear in a single directory, /etc/app. They come from a ConfigMap, a Secret and the Pod's metadata respectively, and the team does not want an init container copying files.",
    question: "Which volume type should they use?",
    options: [
      { id: 'A', text: "A csi volume using the Secrets Store driver to merge all three sources" },
      { id: 'B', text: "An emptyDir volume with the three sources listed under its items field" },
      { id: 'C', text: "A hostPath volume pointing at the kubelet directory that holds the ConfigMap and Secret" },
      { id: 'D', text: "A projected volume combining configMap, secret and downwardAPI sources" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A projected volume maps several volume sources, namely secret, configMap, downwardAPI, serviceAccountToken and clusterTrustBundle, into one directory, which is exactly this requirement. An emptyDir has no sources to list; it starts empty. Pointing hostPath into kubelet internals is fragile and insecure. The Secrets Store CSI driver mounts secrets from external stores and does not project ConfigMaps or Pod metadata.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/projected-volumes/",
    tags: ["Projected volumes", "ConfigMap", "Downward API"]
  },
  {
    id: "cncf-kcna-348",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Old in-tree volumes after an upgrade",
    scenario: "A long-running cloud cluster still has PersistentVolumes created years ago with the in-tree kubernetes.io/aws-ebs plugin. Before upgrading to a release where the in-tree plugin code is removed, the team wants to know how those volumes keep working.",
    question: "What keeps the existing volumes usable?",
    options: [
      { id: 'A', text: "Volume cloning, which copies every in-tree volume into a new CSI volume during upgrade" },
      { id: 'B', text: "CSI migration, which redirects in-tree volume operations to the installed EBS CSI driver" },
      { id: 'C', text: "The Recycle reclaim policy, which reformats in-tree volumes as CSI volumes on release" },
      { id: 'D', text: "A VolumeSnapshotClass, which converts in-tree volume objects into CSI snapshot objects" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CSI migration translates operations on PersistentVolumes that use in-tree plugin types into calls to the equivalent CSI driver, so existing volume objects keep working unchanged, provided the matching CSI driver (here the EBS CSI driver) is installed. Cloning creates new volumes from existing claims and is not part of an upgrade. Recycle is deprecated and was only ever a basic scrub. VolumeSnapshotClasses configure snapshots and convert nothing.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#csi-migration",
    tags: ["CSI migration", "Upgrades", "Storage"]
  },
  {
    id: "cncf-kcna-349",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Raw device for a database engine",
    scenario: "A database vendor recommends giving its engine an unformatted block device so it can manage the on-disk layout itself, instead of writing through a filesystem. The cluster's CSI driver supports both modes.",
    question: "How should the PersistentVolumeClaim and Pod be configured?",
    options: [
      { id: 'A', text: "Set a hostPath volume to /dev on the node and point the engine at a disk" },
      { id: 'B', text: "Set volumeMode: Block on the claim and use volumeDevices in the container" },
      { id: 'C', text: "Set volumeMode: Filesystem on the claim and mount the block device with volumeMounts" },
      { id: 'D', text: "Set accessModes: ReadWriteMany on the claim so the device stays unformatted" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "volumeMode: Block provisions the volume as a raw block device, and the container consumes it through volumeDevices with a devicePath rather than volumeMounts, so no filesystem is created. Filesystem is the default mode and formats the volume. Access modes govern how many nodes or Pods can use it, not whether it is formatted. Mounting /dev from the host bypasses the storage abstraction and requires privileged access.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#raw-block-volume-support",
    tags: ["Block volumes", "volumeMode"]
  },
  {
    id: "cncf-kcna-350",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Edited ConfigMap never reaches one file",
    scenario: "A Pod mounts a ConfigMap twice: the whole ConfigMap at /etc/app, and a single key as /etc/nginx/nginx.conf using subPath. After the ConfigMap is edited, the files under /etc/app update within a minute, but nginx.conf keeps its old content indefinitely.",
    question: "Why does only the subPath file stay stale?",
    options: [
      { id: 'A', text: "ConfigMap updates reach subPath mounts only for keys with no dot in the name" },
      { id: 'B', text: "A key mounted twice is locked by the first mount and cannot change" },
      { id: 'C', text: "Volumes mounted with subPath do not receive ConfigMap updates" },
      { id: 'D', text: "The kubelet refreshes nginx.conf only when nginx itself is reloaded" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The kubelet updates ConfigMap volumes by atomically swapping a symlinked directory, but a subPath mount binds one file directly and is never swapped, so a container using a ConfigMap as a subPath volume mount does not receive updates. Restarting the Pod, or mounting the directory and pointing nginx at it, solves this. Key names with dots update normally, as the whole-directory mount shows. The kubelet does not coordinate with application reloads. Mounting the same ConfigMap twice is allowed and locks nothing.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/configmap/#mounted-configmaps-are-updated-automatically",
    tags: ["ConfigMap", "subPath", "Volumes"]
  }
];

export default CNCF_KCNA_QUESTIONS_14;
