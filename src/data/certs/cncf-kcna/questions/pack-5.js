export const CNCF_KCNA_QUESTIONS_5 = [
  {
    id: "cncf-kcna-101",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Teaching the API a new kind of object",
    scenario: "A platform team wants developers to request databases by applying YAML such as kind: PostgresCluster, stored and versioned by the Kubernetes API like any built-in object, with kubectl get postgresclusters working. They do not want to run a separate API server of their own.",
    question: "What should the team create first so the API server accepts these objects?",
    options: [
      { id: 'A', text: "A MutatingWebhookConfiguration that rewrites each PostgresCluster into a Deployment" },
      { id: 'B', text: "A CustomResourceDefinition that declares the PostgresCluster group, versions and schema" },
      { id: 'C', text: "An APIService that registers the PostgresCluster kind with the built-in apps group" },
      { id: 'D', text: "A ConfigMap in kube-system that lists PostgresCluster as an additional allowed kind" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A CustomResourceDefinition tells the API server to serve a new resource type with a given group, versions, scope and OpenAPI schema; objects of that kind are then stored in etcd and work with kubectl, RBAC and watches, with no extra server to run. A ConfigMap is just data and cannot extend the API. An APIService registers an aggregated API that another server must serve, which the team wants to avoid, and the apps group belongs to Kubernetes itself. A mutating webhook can change objects of kinds that already exist, but it cannot make the API accept an unknown kind.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",
    tags: ["CRDs","Extensibility"]
  },
  {
    id: "cncf-kcna-102",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Automating what a database administrator does",
    scenario: "A company runs dozens of PostgreSQL clusters on Kubernetes. Beyond deploying them, the team wants failover, backups and minor-version upgrades to happen automatically, following the same steps an experienced database administrator would take, driven by a PostgresCluster custom resource.",
    question: "Which pattern fits this requirement?",
    options: [
      { id: 'A', text: "An Operator: its own controller encodes those procedures and reconciles them continuously" },
      { id: 'B', text: "A CronJob per database that runs kubectl commands from a script to repair each cluster" },
      { id: 'C', text: "A Helm chart with post-install hooks, which run the failover and backup steps once at install" },
      { id: 'D', text: "A StatefulSet with liveness probes, which restarts replicas and promotes a new primary on failure" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Operator pattern pairs a custom resource with a controller that encodes operational knowledge: it watches PostgresCluster objects and continuously reconciles, performing failover, backups and upgrades as conditions change. Helm hooks run at install, upgrade or delete time, not continuously in response to failures. A scheduled script only acts on its timer and lacks a reconcile loop tied to the resource. A StatefulSet with probes can restart containers, but it knows nothing about database roles and cannot promote a new primary.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/operator/",
    tags: ["Operators","Controllers","CRDs"]
  },
  {
    id: "cncf-kcna-103",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Two tools claiming the same field",
    scenario: "A GitOps agent applies a Deployment with server-side apply, owning spec.replicas as 3. An engineer then runs kubectl apply --server-side with a local file setting replicas: 5 under the default field manager kubectl. The command fails with a conflict naming the other manager.",
    question: "What is happening, and what would make the engineer's value win?",
    options: [
      { id: 'A', text: "Server-side apply rejects edits to live Deployments; delete and recreate it with the file" },
      { id: 'B', text: "The object's resourceVersion is stale; rerun after fetching the latest version of the file" },
      { id: 'C', text: "Ownership of spec.replicas belongs elsewhere; rerun with --force-conflicts to take it" },
      { id: 'D', text: "The engineer lacks RBAC for spec.replicas; request the patch verb on the scale subresource" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Server-side apply records which field manager owns each field in managedFields. Setting a field owned by another manager to a different value produces a conflict, and --force-conflicts transfers ownership to the caller so its value is applied, though the GitOps agent will likely set it back on its next sync. Apply requests are not rejected for a stale resourceVersion unless the file sets one. Server-side apply updates live objects routinely. RBAC works on resources and verbs, not individual fields, and an authorization failure would say forbidden rather than conflict.",
    referenceUrl: "https://kubernetes.io/docs/reference/using-api/server-side-apply/#conflicts",
    tags: ["Server-side apply","Field management"]
  },
  {
    id: "cncf-kcna-104",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Rejecting malformed custom objects early",
    scenario: "Developers keep creating Backup custom resources with a misspelled retentionDays field or with a string where a number belongs, and the controller only fails hours later. The team wants the API server to reject such objects when they are applied.",
    question: "Where should this validation be defined?",
    options: [
      { id: 'A', text: "In a ResourceQuota for the namespace, which counts only well-formed Backup objects" },
      { id: 'B', text: "In the CRD's openAPIV3Schema, with types, required fields and pruning of unknown fields" },
      { id: 'C', text: "In a LimitRange for the namespace, with a minimum and maximum value for retentionDays" },
      { id: 'D', text: "In the controller, which should log an error each time it finds a malformed Backup object" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Each version of a CustomResourceDefinition carries an OpenAPI v3 schema; the API server validates types, required fields, enums and ranges against it, prunes unknown fields such as a misspelled key, and can run CEL rules through x-kubernetes-validations. Logging from the controller still accepts bad objects and reports errors late. LimitRange constrains CPU, memory and storage values, not custom fields. ResourceQuota counts objects but does not check their contents.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#validation",
    tags: ["CRDs","Validation","OpenAPI"]
  },
  {
    id: "cncf-kcna-105",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Listing objects from a newly installed add-on",
    scenario: "An administrator installs cert-manager, which adds CustomResourceDefinitions such as certificates.cert-manager.io. She now wants to see every Certificate object in the payments namespace from the command line.",
    question: "Which command lists them?",
    options: [
      { id: 'A', text: "kubectl get configmaps -l certificate -n payments" },
      { id: 'B', text: "kubectl describe crd -n payments --all" },
      { id: 'C', text: "kubectl get certificates -n payments" },
      { id: 'D', text: "kubectl get crd certificates -n payments" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Once a CRD is installed, its resource works with kubectl exactly like a built-in one, so kubectl get certificates -n payments lists the Certificate objects in that namespace. kubectl get crd returns the definitions themselves, which are cluster-scoped, not the objects created from them. Describing CRDs shows their schemas, not the instances. Certificates are not stored as ConfigMaps, so a label query on ConfigMaps finds nothing relevant.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#create-custom-objects",
    tags: ["CRDs","kubectl"]
  },
  {
    id: "cncf-kcna-106",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Asking for a quarter of a CPU",
    scenario: "A lightweight sidecar needs about a quarter of one CPU core under normal load. The developer is writing the container's resources section and must express that amount in Kubernetes CPU units.",
    question: "Which request expresses a quarter of a CPU?",
    options: [
      { id: 'A', text: "cpu: 25m under resources.requests" },
      { id: 'B', text: "cpu: 0.025 under resources.requests" },
      { id: 'C', text: "cpu: 250m under resources.requests" },
      { id: 'D', text: "cpu: 250Mi under resources.requests" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CPU is measured in cores (one vCPU or hyperthread), and the m suffix means millicores, a thousandth of a core, so 250m equals 0.25 CPU. 25m and 0.025 both mean a fortieth of a core, ten times too little. Mi is a binary suffix for byte quantities used with memory; it has no meaning for CPU.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-cpu",
    tags: ["Resource units","CPU"]
  },
  {
    id: "cncf-kcna-107",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A memory limit a little smaller than expected",
    scenario: "A developer sets a container's memory limit to 512M, expecting 512 mebibytes like the value on the team's other services. The container is OOM-killed at a slightly lower usage than on those services, whose manifests say 512Mi.",
    question: "What explains the difference?",
    options: [
      { id: 'A', text: "M is interpreted as millibytes, so 512M allows almost no memory for the container at all" },
      { id: 'B', text: "M means megabits, so 512M is one eighth of the memory that 512Mi would allow in total" },
      { id: 'C', text: "M and Mi are equal, but limits written with M are rounded down to the nearest gigabyte" },
      { id: 'D', text: "M is a decimal suffix (512,000,000 bytes), while Mi is binary (536,870,912 bytes)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Kubernetes quantities accept decimal suffixes (k, M, G) and binary suffixes (Ki, Mi, Gi): 512M is 512 x 10^6 bytes and 512Mi is 512 x 2^20 bytes, about five percent more, which matches the slightly earlier OOM kill. Quantities are bytes, never bits. There is no rounding to gigabytes. Millibytes use a lowercase m, so 512m would be a tiny fraction of a byte, a common mistake, but uppercase M is mega.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-memory",
    tags: ["Resource units","Memory"]
  },
  {
    id: "cncf-kcna-108",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Defaults for Pods that forget their requests",
    scenario: "In a shared development namespace, many developers deploy Pods without any resource requests or limits, which makes capacity planning impossible. The administrator wants every container that omits them to receive sensible baseline requests and limits automatically, without rejecting anyone's Pods.",
    question: "What should the administrator create in the namespace?",
    options: [
      { id: 'A', text: "A PriorityClass with a low value, which the scheduler uses to assign small requests" },
      { id: 'B', text: "A ResourceQuota with requests.cpu and requests.memory totals set for the namespace" },
      { id: 'C', text: "A PodDisruptionBudget with minAvailable, which adds requests to Pods when they start" },
      { id: 'D', text: "A LimitRange of type Container with defaultRequest and default values configured" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A LimitRange is enforced at admission and, with defaultRequest and default set for type Container, injects those requests and limits into containers that do not specify their own; it can also enforce minimum and maximum values. A ResourceQuota caps namespace totals and, when it covers requests, rejects Pods without them instead of filling them in. PriorityClasses order scheduling and preemption and do not set requests. PodDisruptionBudgets limit voluntary disruptions and do not touch resources.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/limit-range/",
    tags: ["LimitRange","Resource requests"]
  },
  {
    id: "cncf-kcna-109",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Applying a folder of manifests",
    scenario: "An application repository keeps its Kubernetes manifests in a k8s/ directory with separate files for the Deployment, Service and ConfigMap, plus a k8s/monitoring/ subdirectory with more files. The pipeline should apply all of them in one command.",
    question: "Which command applies every manifest, including the subdirectory?",
    options: [
      { id: 'A', text: "kubectl create -f k8s/" },
      { id: 'B', text: "kubectl apply -f k8s/*.yaml" },
      { id: 'C', text: "kubectl apply -f k8s/ -R" },
      { id: 'D', text: "kubectl apply -k k8s/ --all" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "kubectl apply -f accepts a directory, and -R (--recursive) also processes its subdirectories, so every manifest is created or updated in one command. A shell glob on k8s/*.yaml skips the monitoring subdirectory. kubectl create fails for objects that already exist and would not recurse without -R. -k builds a Kustomize kustomization and needs a kustomization.yaml in that directory, and apply has no --all flag for this purpose.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/#how-to-create-objects",
    tags: ["kubectl","Declarative management"]
  },
  {
    id: "cncf-kcna-110",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Uninstalling an add-on by removing its CRD",
    scenario: "An administrator wants to remove an old backup operator. She plans to delete its CustomResourceDefinition backups.example.com first, assuming the dozens of Backup objects that teams created will remain in etcd in case the operator is reinstalled later.",
    question: "What will actually happen to the Backup objects?",
    options: [
      { id: 'A', text: "They stay in etcd but are hidden until a CRD with the same name is created again later" },
      { id: 'B', text: "They are deleted along with the CRD, since removing a definition removes its resources" },
      { id: 'C', text: "They are converted to ConfigMaps in the same namespaces so their data is still readable" },
      { id: 'D', text: "They block the CRD deletion until each one has been deleted by a person with kubectl" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deleting a CustomResourceDefinition deletes all custom objects of that kind: the API server stops serving the endpoint and removes the stored objects, so the Backup records are lost unless they were exported first. They are not kept in hidden form for a later reinstall. Kubernetes never converts custom objects into ConfigMaps. A CRD deletion does not wait for someone to delete the objects by hand; it removes them itself, although finalizers on individual objects can hold the process until their controller handles them.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#delete-a-customresourcedefinition",
    tags: ["CRDs","Deletion"]
  },
  {
    id: "cncf-kcna-111",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Changing an existing node label",
    scenario: "Node worker-3 carries the label tier=general. After a hardware upgrade the administrator runs kubectl label node worker-3 tier=memory, and kubectl refuses with an error that the label already has a value.",
    question: "How should the administrator change the value?",
    options: [
      { id: 'A', text: "Add --force to the kubectl label command" },
      { id: 'B', text: "Add --overwrite to the kubectl label command" },
      { id: 'C', text: "Use kubectl annotate node worker-3 tier=memory" },
      { id: 'D', text: "Delete the node and join it again with the label" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubectl label refuses to change an existing label unless --overwrite is given, which protects against accidental changes; kubectl label node worker-3 tier=memory --overwrite updates it, and tier- would remove it. kubectl label has no --force option. Annotations are a separate map, so annotating would leave the label unchanged. Deleting and rejoining a node is disruptive and unnecessary for a label change.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_label/",
    tags: ["kubectl","Labels","Nodes"]
  },
  {
    id: "cncf-kcna-112",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Removing everything a manifest created",
    scenario: "A developer deployed a demo from demo.yaml, which defines a Deployment, a Service and a ConfigMap in the demo-app namespace. The namespace also contains other people's work, so she wants to remove only the objects defined in that file.",
    question: "Which command removes exactly those objects?",
    options: [
      { id: 'A', text: "kubectl delete namespace demo-app" },
      { id: 'B', text: "kubectl delete -f demo.yaml" },
      { id: 'C', text: "kubectl delete deploy,svc,cm --all -n demo-app" },
      { id: 'D', text: "kubectl delete -k demo.yaml --all" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubectl delete -f reads the file and deletes each object it defines, by kind, name and namespace, leaving everything else alone. Deleting the namespace would remove other people's objects too. Deleting every Deployment, Service and ConfigMap in the namespace with --all again removes other people's objects. -k expects a Kustomize directory, not a single manifest file.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_delete/",
    tags: ["kubectl","Object management"]
  },
  {
    id: "cncf-kcna-113",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Turning on a built-in admission plugin",
    scenario: "A security review asks that a kubeadm cluster enable the AlwaysPullImages admission plugin, so every new Pod always re-pulls its images and cannot reuse private images cached on a node without registry credentials. The plugin ships with kube-apiserver but is off by default.",
    question: "How is the plugin enabled on this cluster?",
    options: [
      { id: 'A', text: "Create a ValidatingAdmissionPolicy named AlwaysPullImages in kube-system to switch on the plugin" },
      { id: 'B', text: "Label each namespace with admission.kubernetes.io/AlwaysPullImages=enabled so the API applies it" },
      { id: 'C', text: "Set imagePullPolicy: Always in a ConfigMap named kube-apiserver so every Pod picks up the setting" },
      { id: 'D', text: "Add it to --enable-admission-plugins in the kube-apiserver static Pod manifest on each control plane node" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Built-in admission plugins are compiled into kube-apiserver and enabled with its --enable-admission-plugins flag; on kubeadm the flag lives in the static Pod manifest under /etc/kubernetes/manifests, and the kubelet restarts the API server when the file changes. A ValidatingAdmissionPolicy defines CEL-based validation and cannot switch on compiled-in plugins. Namespace labels do not enable admission plugins; that label pattern belongs to Pod Security Admission. The API server does not read its settings from a ConfigMap of that name.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#how-do-i-turn-on-an-admission-controller",
    tags: ["Admission control","kube-apiserver"]
  },
  {
    id: "cncf-kcna-114",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Fixing one field on a live object quickly",
    scenario: "During a test, an engineer wants to change a single annotation on a live Service without finding or writing a manifest file. She is comfortable editing YAML and wants to see the whole object while she makes the change.",
    question: "Which command opens the live object for editing?",
    options: [
      { id: 'A', text: "kubectl describe service web -w" },
      { id: 'B', text: "kubectl edit service web" },
      { id: 'C', text: "kubectl get service web --edit" },
      { id: 'D', text: "kubectl explain service web" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubectl edit fetches the live object, opens it in the editor set by KUBE_EDITOR or EDITOR, and submits the change when the file is saved; changes made this way drift from any manifest in Git. kubectl explain shows schema documentation, not a live object. kubectl get has no --edit flag. describe prints a human-readable summary and does not accept a watch flag or allow editing.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_edit/",
    tags: ["kubectl","Object management"]
  },
  {
    id: "cncf-kcna-115",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Managing fifty clusters like any other resource",
    scenario: "A retailer runs fifty Kubernetes clusters across two clouds and on-premises. The platform team wants to create, scale and upgrade those clusters by applying declarative YAML to a central management cluster, reconciled by controllers, instead of running kubeadm by hand on each machine.",
    question: "Which project is built for this?",
    options: [
      { id: 'A', text: "Cluster API, which models each cluster and its machines as custom resources in a hub cluster" },
      { id: 'B', text: "Kustomize, which layers a base cluster definition with overlays for each cloud and data center" },
      { id: 'C', text: "kind, which creates node containers per cluster and scales them from a configuration file" },
      { id: 'D', text: "Helm, which installs a cluster chart per environment and upgrades it with helm upgrade --install" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cluster API, a Kubernetes SIG Cluster Lifecycle project, defines resources such as Cluster, Machine and MachineDeployment; controllers in a management cluster use provider plugins for each cloud or bare metal to create, scale, upgrade and delete workload clusters declaratively. Kustomize and Helm template and install manifests into a cluster that already exists; neither provisions machines or bootstraps clusters by itself. kind creates local clusters for development and testing, not fleets across clouds.",
    referenceUrl: "https://cluster-api.sigs.k8s.io/introduction",
    tags: ["Cluster API","Cluster lifecycle"]
  },
  {
    id: "cncf-kcna-116",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Patching node operating systems at scale",
    scenario: "A company must apply monthly operating system patches to 200 worker nodes in a cloud. Logging into each node to run package updates has led to configuration drift and nodes that behave differently. The workloads tolerate Pods being rescheduled.",
    question: "Which practice best fits cloud native operations?",
    options: [
      { id: 'A', text: "Run package updates on every node in parallel over SSH, then reboot them all" },
      { id: 'B', text: "Roll out new nodes from an updated image, drain the old ones and remove them" },
      { id: 'C', text: "Patch the container images each month so that the host kernels are updated" },
      { id: 'D', text: "Keep the nodes unpatched and rely on container isolation to contain exploits" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Treating nodes as immutable and replacing them, by adding nodes built from a patched image, draining the old ones and deleting them, keeps every node identical and removes drift; managed node pools and Cluster API automate this. Parallel in-place updates keep the drift problem and rebooting everything at once would take workloads down together. Containers share the host kernel, so leaving hosts unpatched exposes every workload. Container images do not contain or update the host kernel.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/cluster-upgrade/",
    tags: ["Node management","Immutable infrastructure"]
  },
  {
    id: "cncf-kcna-117",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "No more addresses for new Services",
    scenario: "A cluster was built with --service-cluster-ip-range set to a /24. After years of growth, creating any new ClusterIP Service fails with an error that no Service IP could be allocated. Pods and nodes still have plenty of address space, and the cluster runs a current Kubernetes release.",
    question: "What is the cause, and what fixes it without rebuilding the cluster?",
    options: [
      { id: 'A', text: "The Pod CIDR is exhausted; extend --pod-network-cidr on kubeadm and restart each kubelet" },
      { id: 'B', text: "The node subnet is exhausted; add worker nodes in a new subnet so Services get addresses" },
      { id: 'C', text: "The DNS zone is full; raise the CoreDNS cache size so it can hold records for new Services" },
      { id: 'D', text: "The Service CIDR is exhausted; add another range for Services with a ServiceCIDR object" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "ClusterIPs come from the Service CIDR, and a /24 provides only about 250 addresses. Since the MultiCIDRServiceAllocator feature became stable (1.33), an administrator can create additional ServiceCIDR objects so new Services get addresses from the added range, with no rebuild. Pod IPs come from a separate range, so the Pod CIDR is not the problem, and it cannot be changed with a kubelet restart. Node subnets do not supply ClusterIPs. CoreDNS has no record limit that blocks Service creation; the failure happens at IP allocation in the API server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/network/extend-service-ip-ranges/",
    tags: ["Services","IP allocation"]
  },
  {
    id: "cncf-kcna-118",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A pipeline that waits for a batch to finish",
    scenario: "A deployment pipeline creates a Job that runs database migrations and must pause until that Job has finished successfully before rolling out the new application version. If the Job takes longer than ten minutes, the pipeline should fail.",
    question: "Which command fits this step?",
    options: [
      { id: 'A', text: "kubectl wait --for=condition=complete job/migrate --timeout=10m" },
      { id: 'B', text: "kubectl rollout status job/migrate --timeout=10m --watch=true" },
      { id: 'C', text: "kubectl logs job/migrate --follow --timeout=10m --tail=1" },
      { id: 'D', text: "kubectl get job migrate --watch --timeout=10m -o name" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "kubectl wait blocks until the named condition is true on the object, here the Job's Complete condition, and exits non-zero if the timeout passes, which is exactly what a pipeline step needs. kubectl rollout status supports Deployments, DaemonSets and StatefulSets, not Jobs. get --watch streams changes but does not exit when the Job completes and has no timeout flag. logs --follow ends when the container stops, whether it succeeded or failed, so it cannot tell the pipeline whether to proceed, and logs has no timeout flag.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_wait/",
    tags: ["kubectl","Jobs","Pipelines"]
  },
  {
    id: "cncf-kcna-119",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Two admins saving the same object",
    scenario: "Two administrators fetch the same ConfigMap at the same moment with kubectl get -o yaml, each edits a different key in their local copy, and each runs kubectl replace -f. The first succeeds; the second fails with an error saying the object has been modified.",
    question: "Why did the second update fail?",
    options: [
      { id: 'A', text: "The second file lacked the first change, so validation rejected the missing key" },
      { id: 'B', text: "The first administrator's replace took an exclusive lock that is held for an hour" },
      { id: 'C', text: "ConfigMaps accept a single write per minute, so the second write was rate-limited" },
      { id: 'D', text: "Its resourceVersion was stale, so optimistic concurrency returned a 409 conflict" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Every object carries a resourceVersion, and replace sends the one fetched earlier; since the first write changed it, the API server rejected the second request with 409 Conflict instead of silently overwriting the other change. The administrator should fetch again and reapply, or use apply or patch on only the fields they own. There is no one-write-per-minute limit on ConfigMaps. Kubernetes does not take exclusive locks on objects. Validation checks the object's schema, not whether it contains another person's edit.",
    referenceUrl: "https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions",
    tags: ["Concurrency","resourceVersion"]
  },
  {
    id: "cncf-kcna-120",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "How much of the namespace quota is left",
    scenario: "A team's deployments to the analytics namespace have started failing with exceeded quota errors. The team lead wants to see, for each resource the namespace quota tracks, how much is used and what the hard limit is.",
    question: "Which command shows this?",
    options: [
      { id: 'A', text: "kubectl describe resourcequota -n analytics" },
      { id: 'B', text: "kubectl top pods -n analytics --containers" },
      { id: 'C', text: "kubectl get limitrange -n analytics -o wide" },
      { id: 'D', text: "kubectl describe namespace default --quota" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "kubectl describe resourcequota lists each tracked resource with its Used and Hard values, making it obvious which limit the new Pods exceed; describe namespace analytics also includes a quota summary. kubectl top shows live CPU and memory usage from metrics-server, not quota accounting. A LimitRange sets per-object defaults and bounds but tracks no usage totals. The default namespace is the wrong one, and describe has no --quota flag.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/#viewing-and-setting-quotas",
    tags: ["ResourceQuota","kubectl"]
  },
  {
    id: "cncf-kcna-121",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Retiring a worker node for good",
    scenario: "A worker node's hardware is being decommissioned permanently in a kubeadm cluster. The administrator has already drained it so its Pods run elsewhere. She wants the cluster to stop listing it and the machine to be left clean for reuse.",
    question: "What are the remaining steps?",
    options: [
      { id: 'A', text: "Delete the Node object with kubectl delete node, then run kubeadm reset on the machine" },
      { id: 'B', text: "Uncordon the node so the scheduler releases it, then power the machine off for storage" },
      { id: 'C', text: "Delete the node's Lease in kube-node-lease, which removes the Node from the cluster" },
      { id: 'D', text: "Run kubeadm upgrade node on the machine, which unregisters it from the control plane" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "After draining, kubectl delete node removes the Node object from the API, and kubeadm reset on the machine removes the kubelet configuration, certificates and local state that kubeadm created, so the host can be reused. Uncordoning makes the node schedulable again, the opposite of retiring it. Deleting the Lease only removes a heartbeat record, which the kubelet recreates while it runs, and the Node object remains. kubeadm upgrade node upgrades a node's configuration and does not unregister it.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/#remove-the-node",
    tags: ["Nodes","kubeadm"]
  },
  {
    id: "cncf-kcna-122",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Issuing a client certificate for a new admin",
    scenario: "A new operator joins the team of a self-managed cluster that authenticates people with X.509 client certificates. She has generated a private key and a certificate signing request with her name as the common name. The cluster administrator wants to issue her a certificate signed by the cluster CA.",
    question: "Which process should the administrator follow?",
    options: [
      { id: 'A', text: "Create a Secret of type kubernetes.io/tls with her key, which the controller manager signs with the cluster CA" },
      { id: 'B', text: "Create a User object named after her common name, then bind it to a Role so that the API server issues her a certificate" },
      { id: 'C', text: "Create a ServiceAccount named after her, then copy its token into her kubeconfig in place of a client certificate" },
      { id: 'D', text: "Create a CertificateSigningRequest with the kube-apiserver-client signer, approve it, and hand back the issued certificate" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The certificates API lets an administrator submit a CertificateSigningRequest object with signerName kubernetes.io/kube-apiserver-client, approve it with kubectl certificate approve, and read the signed certificate from its status; the common name becomes her username and organizations become groups for RBAC. Kubernetes has no User object; users are identities asserted by authentication. ServiceAccount tokens are meant for workloads, and the cluster here authenticates people by certificate. Creating a TLS Secret only stores a key pair; nothing signs it.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/certificate-signing-requests/#normal-user",
    tags: ["Certificates","Authentication"]
  },
  {
    id: "cncf-kcna-123",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Newest Pods at the bottom of the list",
    scenario: "During an incident, an engineer wants to list the Pods in a namespace ordered by when they were created, so the most recently created replacements appear together at the end of the output.",
    question: "Which command produces that ordering?",
    options: [
      { id: 'A', text: "kubectl get pods -o wide --show-kind --newest-last" },
      { id: 'B', text: "kubectl get pods --sort-by=.metadata.creationTimestamp" },
      { id: 'C', text: "kubectl get pods --order=age --namespace current" },
      { id: 'D', text: "kubectl get pods --field-selector=sort=creation" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "--sort-by takes a JSONPath expression, and sorting on .metadata.creationTimestamp lists Pods from oldest to newest. kubectl get has no --order or --newest-last flag. --show-kind only prefixes names with their kind. Field selectors filter on a few fields such as status.phase and cannot sort.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/quick-reference/#viewing-and-finding-resources",
    tags: ["kubectl","Sorting"]
  },
  {
    id: "cncf-kcna-124",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Sharing only the active cluster connection",
    scenario: "An engineer's kubeconfig contains contexts for six clusters. She needs to show a colleague the cluster address, user entry and namespace for only the context she is currently using, without printing the other five.",
    question: "Which command prints just that part of the configuration?",
    options: [
      { id: 'A', text: "kubectl config get-contexts -o name" },
      { id: 'B', text: "kubectl cluster-info dump --current" },
      { id: 'C', text: "kubectl config current-context -o yaml" },
      { id: 'D', text: "kubectl config view --minify" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kubectl config view --minify limits the output to the current context and the cluster and user it references; credentials stay redacted unless --raw is added, which matters before sharing. get-contexts -o name prints only context names. current-context prints just the name of the active context and has no YAML output. cluster-info dump exports cluster state and logs rather than kubeconfig entries.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_config/kubectl_config_view/",
    tags: ["kubectl","kubeconfig"]
  },
  {
    id: "cncf-kcna-125",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Listing every image running in the cluster",
    scenario: "A security team wants a plain list of the container images used by every Pod in every namespace, one per line, to compare against an approved list. They want it straight from kubectl, without writing a separate program.",
    question: "Which command produces that list?",
    options: [
      { id: 'A', text: "kubectl get pods -A -o wide --show-images | sort -u" },
      { id: 'B', text: "kubectl describe pods -A --output=images --no-headers" },
      { id: 'C', text: "kubectl get pods -A -o jsonpath='{.items[*].spec.containers[*].image}'" },
      { id: 'D', text: "kubectl get images -A -o name --sort-by=.metadata.name" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The jsonpath output format extracts fields from the returned objects, so .items[*].spec.containers[*].image yields every container image across all namespaces; piping it through tr and sort -u gives one unique image per line, and custom-columns is an alternative. -o wide adds node and IP columns and kubectl has no --show-images flag. Images are not an API resource, so kubectl get images fails. describe has no images output mode.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/jsonpath/",
    tags: ["kubectl","JSONPath"]
  }
];

export default CNCF_KCNA_QUESTIONS_5;
