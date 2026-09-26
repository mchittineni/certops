export const CNCF_KCNA_QUESTIONS_4 = [
  {
    id: "cncf-kcna-76",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Bootstrapping a first control plane node",
    scenario: "A university lab wants to build a small self-managed Kubernetes cluster on three virtual machines using the upstream tooling. The container runtime and the kubelet are already installed on every machine, and the first machine should become the control plane.",
    question: "Which command initializes the control plane on the first machine?",
    options: [
      { id: 'A', text: "kubeadm join, which promotes the first machine to a control plane when run on its own" },
      { id: 'B', text: "kubeadm init, which creates certificates, static Pod manifests and an admin config" },
      { id: 'C', text: "kubelet --bootstrap, which generates certificates and starts the API server process" },
      { id: 'D', text: "kubectl init, which contacts the kubelet and asks it to host the control plane Pods" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubeadm init runs preflight checks, generates the cluster CA and component certificates, writes static Pod manifests for the API server, controller manager, scheduler and etcd, and writes an admin kubeconfig, then prints the join command for other nodes. kubectl has no init subcommand; it is a client for an API server that does not exist yet. kubeadm join adds a node to an existing cluster and needs a control plane endpoint to join. The kubelet can bootstrap its own client credentials against an existing cluster, but it does not create a cluster.",
    referenceUrl: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init/",
    tags: ["kubeadm","Cluster setup"]
  },
  {
    id: "cncf-kcna-77",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Adding a worker to a kubeadm cluster",
    scenario: "Right after running kubeadm init, an administrator is shown a command that includes an API server address, a --token value and a --discovery-token-ca-cert-hash value. She now wants to add two worker VMs to the cluster.",
    question: "What should she run on each worker?",
    options: [
      { id: 'A', text: "kubeadm init with the address, token and CA hash so the worker registers as a node" },
      { id: 'B', text: "kubeadm upgrade node with the address, token and CA hash so the worker is enrolled" },
      { id: 'C', text: "kubectl join with the address, token and CA hash from the output of kubeadm init" },
      { id: 'D', text: "kubeadm join with the address, token and CA hash from the output of kubeadm init" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kubeadm join uses the bootstrap token to authenticate to the API server and the CA certificate hash to verify it is talking to the right cluster, then configures the kubelet, which registers the node. Running kubeadm init on a worker would try to create a second, separate cluster. kubectl has no join subcommand. kubeadm upgrade node upgrades an existing node's configuration during a version upgrade; it does not enroll new nodes.",
    referenceUrl: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-join/",
    tags: ["kubeadm","Nodes"]
  },
  {
    id: "cncf-kcna-78",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "The join command from last week stopped working",
    scenario: "An engineer saved the kubeadm join command printed when the cluster was created ten days ago. Running it on a new worker now fails during discovery with an error saying the token is invalid or has expired.",
    question: "What is the simplest way to get a working join command?",
    options: [
      { id: 'A', text: "Run kubeadm token create --print-join-command on a control plane node to get one" },
      { id: 'B', text: "Run kubeadm certs renew all so the saved join token gets a fresh expiry date" },
      { id: 'C', text: "Run kubeadm init again on the control plane node so that it prints a fresh join command" },
      { id: 'D', text: "Run kubeadm reset on the new worker so that the saved token becomes valid for it again" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Bootstrap tokens created by kubeadm init expire after 24 hours by default, so an old join command stops working. kubeadm token create --print-join-command generates a new token and prints a complete join command including the CA hash. Rerunning kubeadm init on an existing control plane fails or, after a reset, builds a new cluster. Resetting the worker only cleans local state; it cannot revive an expired token. kubeadm certs renew renews component certificates and does not touch bootstrap tokens.",
    referenceUrl: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-token/",
    tags: ["kubeadm","Bootstrap tokens"]
  },
  {
    id: "cncf-kcna-79",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Taking a backup of cluster state",
    scenario: "An operator of a self-managed kubeadm cluster wants a nightly backup that captures every Kubernetes object, including Secrets and RBAC rules, so the cluster's configuration can be recovered after losing the control plane.",
    question: "What should the nightly backup job do?",
    options: [
      { id: 'A', text: "Take an etcd snapshot with etcdctl snapshot save, authenticating with the etcd client certificates" },
      { id: 'B', text: "Run kubectl get all -A -o yaml, which exports every kind, including Secrets and RBAC resources" },
      { id: 'C', text: "Copy the container images from every node, since the Pods can be recreated from those images later on" },
      { id: 'D', text: "Copy the /var/lib/kubelet directory from each worker, which holds every object the cluster serves" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "All cluster objects live in etcd, so an etcd snapshot, taken with etcdctl snapshot save against a member and using its client certificates, captures the full state in one consistent file. The kubelet directory on a worker holds that node's Pod data and credentials, not the cluster's objects. kubectl get all covers only a handful of common workload kinds and omits Secrets, ConfigMaps, RBAC and custom resources. Container images hold application code, not the objects that describe what should run.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#backing-up-an-etcd-cluster",
    tags: ["etcd","Backup"]
  },
  {
    id: "cncf-kcna-80",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Restoring a single-member etcd from a snapshot",
    scenario: "On a kubeadm cluster with one control plane node, a bad automation job deleted hundreds of objects. The administrator has a snapshot file from two hours earlier and wants to bring the cluster back to that state; etcd is run by the kubelet from a local file.",
    question: "Which procedure restores the snapshot correctly?",
    options: [
      { id: 'A', text: "Run etcdctl snapshot save with the file as input, which overwrites the live keyspace with the snapshot contents" },
      { id: 'B', text: "Copy the snapshot file over the member database in /var/lib/etcd while etcd keeps on serving requests from the API servers" },
      { id: 'C', text: "Restore the file with etcdutl snapshot restore into a new data directory, then point the etcd static Pod manifest at it" },
      { id: 'D', text: "Apply the snapshot with kubectl apply -f against the API server, which replays each object stored in the file" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A snapshot is restored offline: etcdutl snapshot restore builds a fresh data directory with new cluster metadata, and the etcd static Pod manifest is updated to use that directory so the kubelet restarts etcd on the restored data; restarting the other control plane components afterwards is recommended so nothing serves stale cached state. Overwriting files under a running member corrupts or ignores the data. A snapshot is an etcd database file, not a set of Kubernetes manifests, so kubectl cannot apply it. snapshot save only creates snapshots; it has no restore behavior.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#restoring-an-etcd-cluster",
    tags: ["etcd","Restore","Disaster recovery"]
  },
  {
    id: "cncf-kcna-81",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Which kubelet versions may join the cluster",
    scenario: "A cluster's API servers run Kubernetes 1.34. The team maintains a fleet of worker images and wants to know which kubelet versions are supported with these API servers under the current version skew policy, to plan staggered node upgrades.",
    question: "Which kubelet versions are supported?",
    options: [
      { id: 'A', text: "1.34 only, since every kubelet must run exactly the same minor version as the API server" },
      { id: 'B', text: "1.34 down to 1.31, since kubelets may trail the API server by up to three minor versions" },
      { id: 'C', text: "1.35 down to 1.33, since kubelets may be one minor version newer or older than the API" },
      { id: 'D', text: "1.36 down to 1.32, since kubelets may differ by two minor versions in either direction" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The version skew policy allows a kubelet to be up to three minor versions older than kube-apiserver (since Kubernetes 1.28), but never newer, so 1.31 through 1.34 are supported here. A kubelet newer than the API server is not supported, which rules out 1.35 and 1.36. Requiring an exact match would make staggered node upgrades impossible and is stricter than the policy.",
    referenceUrl: "https://kubernetes.io/releases/version-skew-policy/",
    tags: ["Version skew","Upgrades","kubelet"]
  },
  {
    id: "cncf-kcna-82",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Planning a jump across two minor versions",
    scenario: "A company running Kubernetes 1.32 on kubeadm wants to reach 1.34. A manager proposes upgrading every worker to 1.34 first, since workers run the business workloads, and then upgrading the control plane directly from 1.32 to 1.34 in one step.",
    question: "Which plan follows the supported upgrade process?",
    options: [
      { id: 'A', text: "Upgrade the workers to 1.33 first, then the control plane, and repeat the steps for 1.34" },
      { id: 'B', text: "Upgrade the workers to 1.34 first, then move the control plane from 1.32 to 1.34 at once" },
      { id: 'C', text: "Upgrade the control plane from 1.32 to 1.34 at once, then upgrade the workers to 1.34" },
      { id: 'D', text: "Upgrade the control plane to 1.33 then its workers, and repeat the same order for 1.34" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Minor versions must not be skipped: kubeadm upgrades one minor version at a time. Within each step the control plane is upgraded first, because kubelets may be older than the API server but never newer; the workers follow once the control plane runs the new version. Upgrading workers ahead of the control plane puts kubelets on a newer version than the API server, which is unsupported. Jumping the control plane straight from 1.32 to 1.34 skips a minor version.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/",
    tags: ["Upgrades","kubeadm"]
  },
  {
    id: "cncf-kcna-83",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Upgrading the first control plane node",
    scenario: "An administrator has installed the newer kubeadm package on the first control plane node of a kubeadm cluster. Before changing anything, she wants to see which versions she can move to and what will change, and then perform the control plane upgrade.",
    question: "Which commands should she run, in order?",
    options: [
      { id: 'A', text: "kubectl upgrade plan, then kubectl upgrade apply with the target version" },
      { id: 'B', text: "kubeadm reset, then kubeadm join to rejoin the node at the target version" },
      { id: 'C', text: "kubeadm upgrade node, then kubeadm init with the target version flag set" },
      { id: 'D', text: "kubeadm upgrade plan, then kubeadm upgrade apply with the target version" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kubeadm upgrade plan checks that the cluster can be upgraded and lists the available target versions and component changes; kubeadm upgrade apply then upgrades the static Pod manifests, certificates and configuration on the first control plane node. Additional control plane nodes and workers use kubeadm upgrade node, followed by upgrading their kubelet packages. kubeadm init creates clusters rather than upgrading them. kubectl has no upgrade subcommand. Resetting and rejoining the first control plane node would destroy its local etcd member and control plane state.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/",
    tags: ["kubeadm","Upgrades"]
  },
  {
    id: "cncf-kcna-84",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Capping expensive cloud load balancers",
    scenario: "Each Service of type LoadBalancer in the team-web namespace creates a billed cloud load balancer. Finance wants the namespace to hold at most two such Services, while ClusterIP Services remain unlimited.",
    question: "What should the cluster administrator create in team-web?",
    options: [
      { id: 'A', text: "A NetworkPolicy allowing traffic to two LoadBalancers" },
      { id: 'B', text: "A ResourceQuota with services.loadbalancers set to 2" },
      { id: 'C', text: "A ResourceQuota with services set to 2 for the namespace" },
      { id: 'D', text: "A LimitRange with a maximum of 2 on type LoadBalancer" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "ResourceQuota supports object-count limits, and services.loadbalancers caps only Services of type LoadBalancer, so ClusterIP Services stay unrestricted. A LimitRange sets per-object constraints and defaults for CPU, memory and storage, not counts of Service types. A quota on services counts every Service, which would also limit ClusterIP Services. NetworkPolicy controls Pod traffic and cannot stop a Service from being created.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/#object-count-quota",
    tags: ["ResourceQuota","Services"]
  },
  {
    id: "cncf-kcna-85",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Pods rejected after a quota was added",
    scenario: "An administrator adds a ResourceQuota with requests.cpu: 8 and requests.memory: 16Gi to the analytics namespace. Right afterwards, a Deployment that has worked for months cannot create new Pods, and its ReplicaSet events say the Pods are forbidden because they must specify requests.cpu and requests.memory.",
    question: "Why are the Pods rejected, and what resolves it?",
    options: [
      { id: 'A', text: "A compute quota requires every new Pod to declare those requests; add them or set a LimitRange default" },
      { id: 'B', text: "The quota blocks rollouts until the next reconcile; wait for the ReplicaSet controller to retry the creation" },
      { id: 'C', text: "A compute quota applies only to StatefulSets; convert the Deployment so the quota stops blocking it" },
      { id: 'D', text: "The quota is already exhausted by the running Pods; raise requests.cpu to 16 to make room for them" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When a namespace has a quota on compute resources such as requests.cpu, the quota admission check rejects any new Pod that does not specify those values, because it cannot account for them. Adding requests to the Pod template, or a LimitRange that injects default requests, fixes it. The error says the requests are missing, not that the quota is used up, so raising the limit does not help. Quotas apply to all Pods in the namespace, whatever controller creates them. Retrying changes nothing while the Pods still lack requests.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/#compute-resource-quota",
    tags: ["ResourceQuota","Resource requests"]
  },
  {
    id: "cncf-kcna-86",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Working with two clusters from one terminal",
    scenario: "A consultant receives separate kubeconfig files for a client's staging and production clusters, saved as staging.yaml and prod.yaml. She wants kubectl config get-contexts to list the contexts from both files without merging them by hand into one file.",
    question: "How can she achieve this?",
    options: [
      { id: 'A', text: "Run kubectl config use-context with both file names so both contexts become current" },
      { id: 'B', text: "Set KUBECONFIG to the folder holding the files, so kubectl loads each YAML file in it" },
      { id: 'C', text: "Run kubectl config set-cluster once per file so the clusters are copied into one file" },
      { id: 'D', text: "Set KUBECONFIG to both paths separated by a colon, so kubectl merges the files at runtime" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The KUBECONFIG environment variable accepts a list of files (colon-separated on Linux and macOS, semicolon on Windows); kubectl merges them in memory, so contexts from both appear and use-context can switch between them. KUBECONFIG expects file paths, not a directory. Only one context can be current at a time, and use-context takes a context name, not file names. set-cluster writes cluster entries by hand and would still require credentials and contexts to be recreated.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#the-kubeconfig-environment-variable",
    tags: ["kubeconfig","kubectl","Contexts"]
  },
  {
    id: "cncf-kcna-87",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Tagging nodes that have fast disks",
    scenario: "An administrator has just added three workers with NVMe drives. Before any workload can target them, she needs to mark those nodes so that manifests can later select them with disktype: nvme.",
    question: "Which command marks one of the nodes?",
    options: [
      { id: 'A', text: "kubectl taint node worker-7 disktype=nvme" },
      { id: 'B', text: "kubectl annotate node worker-7 disktype=nvme" },
      { id: 'C', text: "kubectl label node worker-7 disktype=nvme" },
      { id: 'D', text: "kubectl set env node/worker-7 disktype=nvme" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Node labels are what nodeSelector and node affinity match against, and kubectl label node adds one. Annotations cannot be used by selectors. A taint repels Pods that do not tolerate it, which is a different job, and the command as written lacks an effect. kubectl set env changes environment variables in workload Pod templates and does not apply to nodes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/#add-a-label-to-a-node",
    tags: ["Nodes","Labels","kubectl"]
  },
  {
    id: "cncf-kcna-88",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Cleaning up a finished project",
    scenario: "A hackathon team ran everything for their project in a namespace named hack-2026: Deployments, Services, ConfigMaps and Secrets. The event is over, and an administrator wants to remove all of it with a single command.",
    question: "What will kubectl delete namespace hack-2026 do?",
    options: [
      { id: 'A', text: "Delete the namespace but move its objects into the default namespace" },
      { id: 'B', text: "Delete only the namespace object, leaving its Pods running unowned" },
      { id: 'C', text: "Fail until each object inside the namespace is deleted beforehand" },
      { id: 'D', text: "Delete the namespace along with every namespaced object inside it" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deleting a namespace deletes everything in it: the namespace enters Terminating while the namespace controller removes all its namespaced objects, then the namespace itself disappears. Objects are never relocated to default. Nothing is left running unowned, since Pods and other objects belong to the namespace. Kubernetes does not require the namespace to be emptied first; it empties it for you. Cluster-scoped objects, such as PersistentVolumes, are not in the namespace and remain.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/namespaces/#deleting-a-namespace",
    tags: ["Namespaces","Cleanup"]
  },
  {
    id: "cncf-kcna-89",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Which kinds does this cluster serve",
    scenario: "A new administrator inherits a cluster with several add-ons installed and wants a list of every resource kind the API server serves, including custom resources, along with their short names and whether each is namespaced.",
    question: "Which command provides this list?",
    options: [
      { id: 'A', text: "kubectl get crd --all" },
      { id: 'B', text: "kubectl get all -A" },
      { id: 'C', text: "kubectl cluster-info dump" },
      { id: 'D', text: "kubectl api-resources" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kubectl api-resources queries API discovery and prints every served resource with its short names, API group, whether it is namespaced and its kind, including those added by CRDs and aggregated APIs. kubectl get all shows objects of a few common workload kinds, not the list of kinds. cluster-info dump outputs diagnostic state and logs. Listing CRDs shows only custom resource definitions and misses all the built-in kinds.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_api-resources/",
    tags: ["kubectl","API discovery"]
  },
  {
    id: "cncf-kcna-90",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "What a managed Kubernetes service takes over",
    scenario: "A startup is choosing between building clusters with kubeadm on virtual machines and using a managed offering such as Amazon EKS, Google GKE or Azure AKS. The founders want to know which responsibility typically moves to the provider.",
    question: "What does the provider typically operate in a managed Kubernetes service?",
    options: [
      { id: 'A', text: "The RBAC rules for every team, including who may create workloads in each namespace" },
      { id: 'B', text: "The container images, including patching the vulnerabilities inside each application" },
      { id: 'C', text: "The application Deployments, including their images, replicas and rollout configuration" },
      { id: 'D', text: "The control plane, including the API server and etcd, with its availability and upgrades" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Managed Kubernetes services run and patch the control plane, including the API servers and etcd, and handle its availability and version upgrades; customers usually still decide when to upgrade and manage their worker nodes to varying degrees. Application Deployments, their images and rollout settings remain the customer's workloads. Access policies for the customer's teams are the customer's to define. Vulnerabilities inside application images are fixed by whoever builds those images.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/",
    tags: ["Managed Kubernetes","Shared responsibility"]
  },
  {
    id: "cncf-kcna-91",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "How long a minor release gets patches",
    scenario: "A platform team is writing an internal policy on how often clusters must be upgraded. They want the policy to reflect the upstream Kubernetes project's release cadence and how long each minor version receives patch releases.",
    question: "Which statement matches the upstream project's practice?",
    options: [
      { id: 'A', text: "About three minor releases a year, each patched for roughly fourteen months" },
      { id: 'B', text: "About three minor releases a year, each patched until the next one is out" },
      { id: 'C', text: "About one minor release a year, each patched for roughly three years after" },
      { id: 'D', text: "About six minor releases a year, each patched for roughly four months after" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Kubernetes project ships roughly three minor releases per year, and each minor version gets about one year of patch support plus a two-month upgrade period, around fourteen months in total, so clusters need a minor upgrade at least yearly to stay supported. One release a year with three years of support describes some vendor long-term-support offerings, not upstream. Six releases a year is faster than the project's cadence. Upstream maintains the three most recent minor versions in parallel, not only the latest.",
    referenceUrl: "https://kubernetes.io/releases/",
    tags: ["Releases","Support lifecycle"]
  },
  {
    id: "cncf-kcna-92",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Manifests that will break after the upgrade",
    scenario: "Before upgrading a cluster, an engineer reads the release notes and sees that an API version used by some of the team's manifests is removed in the target version. kubectl apply already prints a deprecation warning for those files today.",
    question: "What should the team do before the upgrade?",
    options: [
      { id: 'A', text: "Delete the affected objects and recreate them after the upgrade using the same manifest files" },
      { id: 'B', text: "Update the manifests to the replacement apiVersion, for example with the kubectl convert plugin" },
      { id: 'C', text: "Nothing, because the API server converts removed versions to new ones automatically after upgrade" },
      { id: 'D', text: "Enable the removed API version with a feature gate so the old manifests keep working forever" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Removed API versions stop being served, so applying manifests that still use them fails after the upgrade; they must be rewritten to the replacement version, which the kubectl convert plugin can help with, and existing objects are readable through the new version. The API server converts between versions that are still served, but cannot accept requests to a removed version. Removed versions cannot be kept forever with a feature gate. Recreating objects from the same files would fail for the same reason.",
    referenceUrl: "https://kubernetes.io/docs/reference/using-api/deprecation-guide/",
    tags: ["API deprecation","Upgrades"]
  },
  {
    id: "cncf-kcna-93",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Control plane certificates about to lapse",
    scenario: "A kubeadm cluster built about eleven months ago has never been upgraded. An auditor warns that the API server may soon start rejecting kubectl and component connections. The administrator wants to check the dates and fix it without rebuilding the cluster.",
    question: "What should the administrator do?",
    options: [
      { id: 'A', text: "Replace the cluster CA with a new one each year, since kubeadm issues the CA for twelve months" },
      { id: 'B', text: "Run kubeadm certs check-expiration, then kubeadm certs renew all and restart control plane Pods" },
      { id: 'C', text: "Run kubeadm token create to issue new certificates for the API server and the admin kubeconfig" },
      { id: 'D', text: "Run kubectl certificate approve on the control plane's pending requests to extend them a year" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubeadm issues component and admin client certificates valid for one year (the CA itself lasts ten years). kubeadm certs check-expiration lists the dates, kubeadm certs renew all renews them, and the control plane static Pods must then be restarted to load them; a regular kubeadm upgrade also renews them automatically. Bootstrap tokens are for joining nodes and do not renew certificates. The kubeadm CA is valid for ten years, so it does not need replacing annually. kubectl certificate approve handles CertificateSigningRequests such as kubelet ones, not kubeadm's control plane certificates.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/",
    tags: ["kubeadm","Certificates"]
  },
  {
    id: "cncf-kcna-94",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Nodes stuck NotReady after init",
    scenario: "An administrator ran kubeadm init and joined two workers. All three nodes show NotReady, the CoreDNS Pods sit in Pending, and the kubelet logs say the container runtime network is not ready because no network config was found.",
    question: "What step was missed?",
    options: [
      { id: 'A', text: "Installing a CNI plugin such as Calico or Cilium to give Pods connectivity" },
      { id: 'B', text: "Installing the metrics-server add-on so the nodes can report their status" },
      { id: 'C', text: "Installing an Ingress controller so the CoreDNS Pods can receive traffic" },
      { id: 'D', text: "Creating a LoadBalancer Service so that the nodes can reach each other" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "kubeadm does not install Pod networking; until a CNI plugin is deployed, kubelets report that the network is not ready, nodes stay NotReady and Pods that need Pod networking, like CoreDNS, cannot start. metrics-server provides resource usage for autoscaling and kubectl top, and has no effect on node readiness. Services, including LoadBalancer ones, rely on Pod networking rather than provide it. An Ingress controller handles external HTTP routing and cannot fix missing Pod networking.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/#pod-network",
    tags: ["CNI","kubeadm","Nodes"]
  },
  {
    id: "cncf-kcna-95",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A throwaway cluster on a laptop",
    scenario: "A developer wants to try Kubernetes manifests on her laptop before sending them to the shared cluster. She needs a single-machine cluster she can create and delete in minutes, with no cloud account.",
    question: "Which tool fits this purpose?",
    options: [
      { id: 'A', text: "kubeadm, which creates a managed cluster in the developer's cloud account" },
      { id: 'B', text: "Helm, which starts a local Kubernetes control plane from a chart package" },
      { id: 'C', text: "etcdctl, which runs a local API server backed by an embedded datastore" },
      { id: 'D', text: "kind, which runs Kubernetes nodes as containers on the local machine" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kind (Kubernetes in Docker) runs each Kubernetes node as a container, so a conformant cluster can be created and deleted locally in minutes; minikube is a similar option. kubeadm bootstraps clusters on machines you provide and is not a cloud service. Helm packages and installs applications into an existing cluster and does not start one. etcdctl is a client for etcd and never runs an API server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/tools/",
    tags: ["kind","Local development"]
  },
  {
    id: "cncf-kcna-96",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A live edit undone by the next deploy",
    scenario: "During an incident, an engineer ran kubectl edit deployment api and raised replicas from 4 to 8. The Deployment's manifest in Git, which sets replicas: 4, is applied by the pipeline with kubectl apply. An hour later the replicas dropped back to 4.",
    question: "Why did this happen?",
    options: [
      { id: 'A', text: "kubectl edit saved the change only in the local kubeconfig cache, not in the cluster" },
      { id: 'B', text: "The next declarative deploy reset the field to the value the file in Git declares" },
      { id: 'C', text: "The ReplicaSet controller reverts any change not made through the kubectl scale command" },
      { id: 'D', text: "kubectl edit changes last only one hour before the API server restores the prior object" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubectl apply makes the live object match the fields declared in the manifest, so the next pipeline run reset replicas to 4; live edits that are not written back to Git drift and get overwritten, which is why declarative workflows avoid them (or leave replicas out of the manifest when an autoscaler owns it). The API server has no time-limited edits. The ReplicaSet controller follows the Deployment's replica count however it was changed. kubectl edit saves the object to the API server, not to a local cache.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/",
    tags: ["kubectl","Declarative management","Drift"]
  },
  {
    id: "cncf-kcna-97",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Checking client and server versions",
    scenario: "Before running an upgrade script, an engineer wants to confirm both the version of her local kubectl binary and the Kubernetes version of the API server it is connected to, in a single command.",
    question: "Which command shows both?",
    options: [
      { id: 'A', text: "kubectl get nodes -o name" },
      { id: 'B', text: "kubectl config view" },
      { id: 'C', text: "kubectl api-versions" },
      { id: 'D', text: "kubectl version" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kubectl version prints the client version and, when it can reach the cluster, the server version, which also helps check that kubectl is within one minor version of the API server. kubectl api-versions lists the API group versions the server serves, such as apps/v1, not the Kubernetes release. Nodes do report kubelet versions, but -o name prints only node names and says nothing about the API server. kubectl config view shows the kubeconfig contents.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_version/",
    tags: ["kubectl","Versions"]
  },
  {
    id: "cncf-kcna-98",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Probing API server health from a script",
    scenario: "A monitoring script used kubectl get componentstatuses to check control plane health, and it now prints a deprecation warning. The team wants the supported way to ask the API server whether it is ready to serve traffic.",
    question: "What should the script query instead?",
    options: [
      { id: 'A', text: "The /metrics endpoint of each kubelet, which reports the health of every control plane component" },
      { id: 'B', text: "The kube-system events list, which the API server updates each minute with a readiness entry" },
      { id: 'C', text: "The /readyz endpoint of the API server, for example with kubectl get --raw='/readyz?verbose'" },
      { id: 'D', text: "The status of the default Namespace object, which turns Terminating when the API is unhealthy" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The API server exposes /livez and /readyz health endpoints, and ?verbose lists each individual check; componentstatuses has been deprecated since 1.19. Kubelet metrics describe that node's kubelet, not API server readiness. The API server does not post periodic readiness events. A Namespace's phase reflects deletion, not API health, and would be unreadable if the API were down anyway.",
    referenceUrl: "https://kubernetes.io/docs/reference/using-api/health-checks/",
    tags: ["API server","Health checks"]
  },
  {
    id: "cncf-kcna-99",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Finding the control plane address",
    scenario: "A support engineer connected to an unfamiliar cluster wants a quick summary of where the Kubernetes control plane is served and the URL of the cluster DNS service, as seen through her current kubeconfig context.",
    question: "Which command gives this summary?",
    options: [
      { id: 'A', text: "kubectl get endpoints" },
      { id: 'B', text: "kubectl config get-users" },
      { id: 'C', text: "kubectl describe nodes" },
      { id: 'D', text: "kubectl cluster-info" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kubectl cluster-info prints the address of the control plane and of cluster services labeled kubernetes.io/cluster-service, such as CoreDNS. kubectl get endpoints lists Service endpoints in the current namespace, without saying which is the control plane. describe nodes prints detailed node information, not the API endpoint. get-users lists user entries in the kubeconfig and no server addresses.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_cluster-info/",
    tags: ["kubectl","Clusters"]
  },
  {
    id: "cncf-kcna-100",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Selecting a namespace by its name label",
    scenario: "An administrator wants a NetworkPolicy namespaceSelector to match only the monitoring namespace, but nobody has ever added labels to that namespace, and she prefers not to rely on a label that someone could forget to set on a rebuilt cluster.",
    question: "Which label can she select on?",
    options: [
      { id: 'A', text: "namespace.kubernetes.io/name: monitoring, which kubectl adds when the namespace is created" },
      { id: 'B', text: "metadata.namespace: monitoring, which the kubelet applies once Pods run in the namespace" },
      { id: 'C', text: "kubernetes.io/metadata.name: monitoring, which the control plane sets on every namespace" },
      { id: 'D', text: "app.kubernetes.io/name: monitoring, which the API server copies from the namespace name" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Since Kubernetes 1.22 the control plane automatically sets the immutable label kubernetes.io/metadata.name on every namespace, with the namespace's name as its value, so selectors can target a namespace by name without anyone labeling it. kubectl adds no namespace.kubernetes.io/name label. app.kubernetes.io/name is a recommended application label that people set themselves. metadata.namespace is a field of namespaced objects, not a label, and the kubelet does not label namespaces.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/#automatic-labelling",
    tags: ["Namespaces","Labels"]
  }
];

export default CNCF_KCNA_QUESTIONS_4;
