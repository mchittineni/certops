export const CNCF_KCNA_QUESTIONS_2 = [
  {
    id: "cncf-kcna-26",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Waiting for the database before the app starts",
    scenario: "A web application crashes on startup if its PostgreSQL database is not yet accepting connections. The team wants a small container in the same Pod that loops until the database port answers, finishes, and only then lets the application container start.",
    question: "Which Pod feature fits this requirement?",
    options: [
      { id: 'A', text: "A second app container, which Kubernetes starts first because it is listed first" },
      { id: 'B', text: "A readiness probe, which delays the app container's start until the database answers" },
      { id: 'C', text: "A postStart lifecycle hook, which runs before the container's entrypoint is launched" },
      { id: 'D', text: "An init container, which runs to completion before any of the app containers start" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Init containers run one after another, each to successful completion, before the regular containers of the Pod start, so a wait-for-database loop belongs there. A readiness probe does not delay startup; it only controls whether a running container receives Service traffic. A postStart hook runs alongside the entrypoint, with no guarantee it runs before it, so it cannot gate startup. Regular containers in a Pod start without waiting for each other to finish, whatever order they are listed in.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/init-containers/",
    tags: ["Init containers","Pods"]
  },
  {
    id: "cncf-kcna-27",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A log shipper that must outlive the app container",
    scenario: "A team runs a log-shipping helper alongside a batch container in a Job's Pod. With the helper as a normal container, the Pod never completes because the helper keeps running after the batch work exits. They want the helper to start first, run for the Pod's whole life, and stop on its own after the batch container finishes, on a current Kubernetes release.",
    question: "How should the helper be declared?",
    options: [
      { id: 'A', text: "As a regular container with a preStop hook that kills the batch container on exit" },
      { id: 'B', text: "As an ephemeral container attached with kubectl debug after the batch container starts" },
      { id: 'C', text: "As an init container with restartPolicy: OnFailure, so it restarts only when it fails" },
      { id: 'D', text: "As an init container with restartPolicy: Always, which Kubernetes treats as a sidecar" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Native sidecars are declared in initContainers with restartPolicy: Always; they start before the app containers, keep running beside them, and are shut down after the main containers end, so a Job's Pod can complete (stable since Kubernetes 1.33). An init container with any other restart setting must exit before the app containers start, so it cannot run alongside them. Ephemeral containers are for interactive debugging and cannot be declared in the Pod spec up front. A preStop hook runs when a container is being terminated; it does not make the helper stop when the batch work completes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/",
    tags: ["Sidecar containers","Jobs"]
  },
  {
    id: "cncf-kcna-28",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Reading the phase of a finished task Pod",
    scenario: "An analyst runs a one-off Pod that generates a report and then exits with code 0. The Pod uses restartPolicy: Never, and kubectl get pod report-gen -o jsonpath='{.status.phase}' is run afterwards.",
    question: "Which phase will the command print?",
    options: [
      { id: 'A', text: "Succeeded, the phase for Pods whose containers all terminated successfully" },
      { id: 'B', text: "Completed, the phase set when every container finished with exit code zero" },
      { id: 'C', text: "Terminated, the phase set once the kubelet has removed the Pod's containers" },
      { id: 'D', text: "Running, the phase kept until the Pod is deleted, even after the exit code" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Pod phase is one of Pending, Running, Succeeded, Failed or Unknown; when all containers terminate with success and will not restart, the phase is Succeeded. kubectl get pods shows Completed in its STATUS column, but that is a display reason, not the phase value. Terminated is a container state, not a Pod phase. A Pod whose containers have exited and will not restart no longer counts as Running.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-phase",
    tags: ["Pod lifecycle","Pod phase"]
  },
  {
    id: "cncf-kcna-29",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Restart behavior for a Job Pod",
    scenario: "A developer writes a Job manifest by copying the Pod template from a Deployment. The API server rejects it with an error saying spec.template.spec.restartPolicy: Unsupported value: Always.",
    question: "What should the Pod template set instead?",
    options: [
      { id: 'A', text: "restartPolicy: Always on the container, since the Pod level cannot set it for a Job" },
      { id: 'B', text: "restartPolicy: OnFailure or Never, the only values a Job accepts for its Pods" },
      { id: 'C', text: "restartPolicy: IfNotPresent, the value that stops the kubelet re-running success" },
      { id: 'D', text: "restartPolicy: Manual, so the Job controller decides when a container restarts" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pods run by a Job must use restartPolicy OnFailure (the kubelet restarts a failed container in place) or Never (the Job controller creates a new Pod on failure); Always, the default that Deployments rely on, would keep restarting a task that finished. Container-level restartPolicy: Always is reserved for sidecar init containers and does not make Always acceptable for the Pod. IfNotPresent is an imagePullPolicy value, not a restart policy. Manual is not a valid restartPolicy.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/job/#pod-template",
    tags: ["Jobs","restartPolicy"]
  },
  {
    id: "cncf-kcna-30",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Pausing traffic without restarting the container",
    scenario: "An API container occasionally spends a minute rebuilding an in-memory cache, during which it cannot answer requests but is otherwise healthy. The team wants Services to stop sending it traffic during the rebuild, and does not want the kubelet to restart the container.",
    question: "Which probe should the team configure against its status endpoint?",
    options: [
      { id: 'A', text: "A readiness probe, so that failures only remove the Pod from Service endpoints" },
      { id: 'B', text: "A liveness probe, so that a failed check restarts the container after the rebuild" },
      { id: 'C', text: "A startup probe, so that every check is suspended while the cache is rebuilding" },
      { id: 'D', text: "A liveness probe with a long period, so that the rebuild finishes before a check" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When a readiness probe fails, the Pod is marked not ready and removed from Service endpoints, but the container keeps running; traffic returns when the probe passes again. A failing liveness probe tells the kubelet to restart the container, which is exactly what the team wants to avoid, and stretching its period only delays detection of real hangs. A startup probe applies only until the container first starts successfully; it does not cover rebuilds later in the container's life.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/liveness-readiness-startup-probes/",
    tags: ["Probes","Readiness"]
  },
  {
    id: "cncf-kcna-31",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Default exposure for an internal API",
    scenario: "A developer creates a Service for an internal inventory API without setting a type field. Other Pods in the cluster can reach it, but nothing outside the cluster can.",
    question: "Which Service type did the API server assign?",
    options: [
      { id: 'A', text: "ClusterIP, which gives the Service a virtual IP reachable only inside the cluster" },
      { id: 'B', text: "LoadBalancer, which provisions an external load balancer from the cloud provider" },
      { id: 'C', text: "NodePort, which opens the same port on every node for callers outside the cluster" },
      { id: 'D', text: "ExternalName, which maps the Service to a DNS name outside the cluster's network" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "ClusterIP is the default Service type: the Service gets a stable virtual IP that only in-cluster clients can reach, which matches what the developer sees. NodePort would also expose a port on every node's address, reachable from outside if the network allows it. LoadBalancer would provision an external load balancer on a supporting platform. ExternalName returns a DNS CNAME for an outside host and has no cluster IP at all.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#type-clusterip",
    tags: ["Services","ClusterIP"]
  },
  {
    id: "cncf-kcna-32",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Opening a test app on every node",
    scenario: "On a bare-metal lab cluster with no cloud load balancer, a tester wants to reach a web app from her laptop by browsing to any node's IP address on a fixed high port. She creates a Service with type: NodePort and leaves the port unset.",
    question: "From which port range will Kubernetes allocate the node port by default?",
    options: [
      { id: 'A', text: "8000 to 8999, the web-traffic range the kube-proxy reserves on every node" },
      { id: 'B', text: "30000 to 32767, the range the API server allocates node ports from unless changed" },
      { id: 'C', text: "49152 to 65535, the ephemeral range the kernel hands out for Service ports" },
      { id: 'D', text: "1 to 1023, the privileged ports reserved on each node for exposed Services" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "By default the API server allocates NodePort values from 30000-32767 (configurable with --service-node-port-range), and kube-proxy opens that port on every node. Privileged ports below 1024 are not used for node ports by default. There is no 8000-8999 range reserved by kube-proxy. The 49152-65535 range is the kernel's ephemeral source-port range and is not where node ports come from.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport",
    tags: ["Services","NodePort"]
  },
  {
    id: "cncf-kcna-33",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A public address for a storefront on a cloud cluster",
    scenario: "A retailer runs a storefront on a managed Kubernetes cluster in a public cloud. It needs one stable public IP address that spreads customer traffic across the storefront Pods, and wants Kubernetes to provision it automatically.",
    question: "Which Service type should the team use?",
    options: [
      { id: 'A', text: "ClusterIP, which assigns a public virtual IP when the cluster runs on a cloud" },
      { id: 'B', text: "Headless, which exposes each Pod IP publicly so clients can balance across them" },
      { id: 'C', text: "LoadBalancer, which asks the provider for an external load balancer and address" },
      { id: 'D', text: "ExternalName, which publishes the storefront under a public DNS name automatically" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A LoadBalancer Service asks the cloud integration to create an external load balancer, whose address appears in the Service status and forwards traffic to the backing Pods. ClusterIP addresses are internal to the cluster even on a cloud. ExternalName points a cluster name at an outside host, the opposite direction. A headless Service (clusterIP: None) only changes how DNS answers inside the cluster; it does not make Pod IPs public.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer",
    tags: ["Services","LoadBalancer"]
  },
  {
    id: "cncf-kcna-34",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Changing the container port without editing the Service",
    scenario: "A Service sends port 80 to Pods of a checkout app that listens on 8080. The app team plans to move the container to port 9090 through a rolling update, and old and new Pods will both be behind the Service for a while. They want the Service to keep working throughout without editing it again.",
    question: "How should the Service and Pods be configured?",
    options: [
      { id: 'A', text: "Set the Service port to 9090 and add a second port 8080 until the rollout completes" },
      { id: 'B', text: "Set targetPort to 0 so that kube-proxy discovers whichever port each Pod listens on" },
      { id: 'C', text: "Remove targetPort so that the Service follows the containerPort declared by each Pod" },
      { id: 'D', text: "Name the container port, such as http, in old and new Pods and set targetPort: http" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "targetPort can refer to a named container port; if the old Pods declare name: http on 8080 and the new Pods declare name: http on 9090, the Service resolves the name per Pod and reaches both. Changing the Service port changes what clients dial and still needs a later edit to remove the extra port. A targetPort of 0 does not trigger discovery; kube-proxy has no such behavior. If targetPort is omitted it defaults to the same value as port, 80 here, not to the Pod's containerPort, so traffic would miss both versions.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#field-spec-ports",
    tags: ["Services","targetPort","Named ports"]
  },
  {
    id: "cncf-kcna-35",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "An environment variable that only some Pods have",
    scenario: "A legacy app finds its backend by reading the variables REDIS_SERVICE_HOST and REDIS_SERVICE_PORT. Pods of the app started last week have them, but Pods started before the redis Service was created a few minutes ago do not, and those Pods cannot connect.",
    question: "What explains this, and what is the more reliable way for the app to find the backend?",
    options: [
      { id: 'A', text: "Service variables are injected only into Pods created after the Service exists; resolve the name redis through cluster DNS" },
      { id: 'B', text: "Service variables are refreshed by the kubelet once an hour; wait for the next refresh or restart the kubelet on each node" },
      { id: 'C', text: "Service variables are copied only into Pods that share the Service's labels; add the redis labels to the app's Pods" },
      { id: 'D', text: "Service variables are written only once a ConfigMap is created that references the Service" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When a Pod starts, the kubelet adds environment variables such as REDIS_SERVICE_HOST and REDIS_SERVICE_PORT for each Service that already exists in its namespace; variables are never added to running containers, so Pods created before the Service lack them. Looking the Service up by DNS name works regardless of creation order, which is why cluster DNS is the recommended discovery method. There is no hourly refresh of environment variables. Injection does not depend on the Pod's labels matching the Service selector. ConfigMaps play no part in Service variables.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#environment-variables",
    tags: ["Services","Service discovery","DNS"]
  },
  {
    id: "cncf-kcna-36",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A Service that routes nowhere",
    scenario: "A developer applies a Service with selector app: billing and a Deployment whose Pod template has labels app: billing-api. The Pods are Running and Ready, but requests to the Service time out, and kubectl get endpointslices shows no endpoints for it.",
    question: "What is the cause?",
    options: [
      { id: 'A', text: "The Deployment must list the Service name in its spec to register endpoints" },
      { id: 'B', text: "The Service needs an exact key and value match, and no running Pod carries that pair" },
      { id: 'C', text: "The Pods need a readiness probe before a Service will add them as endpoints" },
      { id: 'D', text: "The Service needs type: NodePort before endpoints are created for its Pods" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A Service selects backends purely by label: selector app: billing matches only Pods labeled exactly app: billing, so Pods labeled app: billing-api are ignored and the Service has no endpoints. Pods without a readiness probe count as ready once their containers are running, so a probe is not required. Deployments do not reference Services; the relationship is created by the selector alone. Endpoint creation does not depend on the Service type.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#services-in-kubernetes",
    tags: ["Services","Labels","Selectors"]
  },
  {
    id: "cncf-kcna-37",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Tracking thousands of backends for one Service",
    scenario: "A Service in front of a large fleet has around 2,000 ready Pods. Engineers notice that Kubernetes stores the backend addresses in several objects labeled with the Service's name, each listing a subset of the Pods, rather than in one huge list.",
    question: "Which API objects are they seeing?",
    options: [
      { id: 'A', text: "Leases, which each hold a heartbeat and IP address for one group of backends" },
      { id: 'B', text: "EndpointSlices, which group a Service's backends into multiple smaller objects" },
      { id: 'C', text: "Endpoints objects, which the controller splits into shards of 100 addresses each" },
      { id: 'D', text: "ReplicaSets, which each record the IP addresses of the Pods they are managing" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "EndpointSlices are the scalable replacement for the single Endpoints object: the EndpointSlice controller splits a Service's backends across several slices (up to 100 endpoints each by default) labeled kubernetes.io/service-name, so a change to one Pod only rewrites one small slice. The legacy Endpoints API keeps all addresses in one object and is not sharded; it is deprecated in recent releases. ReplicaSets track Pods by selector, not by IP. Leases are used for heartbeats and leader election.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/",
    tags: ["EndpointSlices","Services"]
  },
  {
    id: "cncf-kcna-38",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Which edits start a new rollout",
    scenario: "An operator makes two changes to a Deployment on the same afternoon: first kubectl scale deployment api --replicas=6, then kubectl set image deployment/api api=registry.example.com/api:2.4. Afterwards kubectl get rs shows only two ReplicaSets for the Deployment.",
    question: "Which statement describes what happened?",
    options: [
      { id: 'A', text: "Both edits created a ReplicaSet, and the controller merged the scale one into the first" },
      { id: 'B', text: "Only the scale change created a new ReplicaSet, since image edits patch Pods in place" },
      { id: 'C', text: "Neither edit created a ReplicaSet, since a Deployment keeps two ReplicaSets at all times" },
      { id: 'D', text: "Only the image change created a new ReplicaSet, since it modified the Pod template" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A Deployment creates a new ReplicaSet, and so a rollout, only when its Pod template (spec.template) changes; the image is part of the template, so set image produced the second ReplicaSet. Scaling changes spec.replicas, which just resizes the current ReplicaSet without a rollout. Nothing merges ReplicaSets after the fact. Image edits do not patch running Pods in place through a Deployment; the new ReplicaSet brings up new Pods. The number of ReplicaSets depends on the template history, not a fixed pair.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#updating-a-deployment",
    tags: ["Deployments","ReplicaSets","Rollouts"]
  },
  {
    id: "cncf-kcna-39",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A Pod that shows 1/2 in the READY column",
    scenario: "kubectl get pods shows a Pod named cart-6b8c with READY 1/2 and STATUS Running. The Pod runs an application container and a proxy sidecar container.",
    question: "What does 1/2 mean?",
    options: [
      { id: 'A', text: "The Pod has restarted once in the last two minutes and is ready again now" },
      { id: 'B', text: "One of the Pod's two containers is passing readiness and the other is not ready" },
      { id: 'C', text: "The Pod is on one node of the two nodes that its Deployment spreads it across" },
      { id: 'D', text: "One of the Pod's two replicas is ready and the other is still being scheduled" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The READY column counts containers within the Pod: ready containers over total containers, so one of the two is not ready, commonly because its readiness probe is failing or it is still starting. Replicas are separate Pods, each shown on its own row. Restarts appear in the RESTARTS column. A single Pod always runs on exactly one node.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_get/",
    tags: ["kubectl","Pods"]
  },
  {
    id: "cncf-kcna-40",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "The objects behind one Deployment",
    scenario: "After applying a Deployment named frontend with replicas: 3, a developer runs kubectl get all and sees frontend listed at three different levels, with random suffixes appended at the lower levels.",
    question: "Which ownership chain is she looking at?",
    options: [
      { id: 'A', text: "Deployment owns Pods directly, and each Pod owns a ReplicaSet for its containers" },
      { id: 'B', text: "ReplicaSet owns a Deployment, and that Deployment owns the three Pods it created" },
      { id: 'C', text: "Deployment owns a StatefulSet, and that StatefulSet owns the three Pods it created" },
      { id: 'D', text: "Deployment owns a ReplicaSet, and that ReplicaSet owns the three Pods it created" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A Deployment manages ReplicaSets, one per Pod template revision, and each ReplicaSet creates and owns the Pods, so you see frontend, frontend-7c9f8d6b4 and frontend-7c9f8d6b4-x2kqp. Deployments do not own Pods directly, and Pods never own ReplicaSets. The relationship does not run the other way either. StatefulSets are a separate workload controller, not something a Deployment creates.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Deployments","ReplicaSets","Pods"]
  },
  {
    id: "cncf-kcna-41",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A hand-made Pod after a node failure",
    scenario: "A developer created a Pod directly from a Pod manifest, with no Deployment or other controller. The node running it failed and was removed from the cluster, and the Pod did not come back anywhere else.",
    question: "Why was the Pod not recreated?",
    options: [
      { id: 'A', text: "No controller owned the Pod, so nothing existed to create a replacement elsewhere" },
      { id: 'B', text: "The scheduler only reschedules Pods that carry a priority class of system-critical" },
      { id: 'C', text: "The controller manager recreates only Pods a PodDisruptionBudget lists as protected" },
      { id: 'D', text: "The kubelet on another node needed the Pod's image cached before it could adopt it" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pods are not rescheduled on their own: a Pod is bound to one node for its whole life, and replacement Pods come from controllers such as ReplicaSets, Deployments or StatefulSets. A Pod created directly has no owner, so when its node is gone it is deleted and nothing replaces it. Priority classes affect scheduling order and preemption, not recreation. Kubelets never adopt Pods from other nodes. PodDisruptionBudgets limit voluntary evictions; they do not recreate anything.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/#working-with-pods",
    tags: ["Pods","Controllers"]
  },
  {
    id: "cncf-kcna-42",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Resources that no namespace contains",
    scenario: "A team lead running kubectl get -n team-a pv,nodes,clusterroles notices that the output is the same no matter which namespace she names. She asks why these three kinds ignore the namespace flag.",
    question: "What explains the behavior?",
    options: [
      { id: 'A', text: "They live in kube-system, and kubectl shows kube-system objects from any namespace" },
      { id: 'B', text: "They are cluster-scoped kinds, so they exist once for the whole cluster, not per namespace" },
      { id: 'C', text: "They are namespaced kinds whose objects are copied into every namespace automatically" },
      { id: 'D', text: "They are cached by kubectl, which ignores the namespace flag for cached resource kinds" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Some kinds are cluster-scoped: Nodes, PersistentVolumes, ClusterRoles, Namespaces, StorageClasses and others exist at cluster level, so a namespace flag has no effect on them (kubectl api-resources --namespaced=false lists them). They are not copied into each namespace. They do not live in kube-system; a namespace can only contain namespaced kinds. kubectl's discovery cache stores API metadata, not objects, and does not change namespace handling.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/#not-all-objects-are-in-a-namespace",
    tags: ["Namespaces","Cluster-scoped"]
  },
  {
    id: "cncf-kcna-43",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Keeping one client on the same replica",
    scenario: "A legacy shopping-cart service stores session data in memory on each replica. Until the team adds a shared session store, requests from the same client IP address should keep reaching the same Pod behind its ClusterIP Service.",
    question: "Which Service setting provides this?",
    options: [
      { id: 'A', text: "externalTrafficPolicy: Local, which keeps each client on the Pod of the first node" },
      { id: 'B', text: "sessionAffinity: ClientIP, which sends a given client IP to the same backend Pod" },
      { id: 'C', text: "publishNotReadyAddresses: true, which pins a client IP to the Pod it reached first" },
      { id: 'D', text: "internalTrafficPolicy: Local, which keeps each client on a Pod of its own node" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "sessionAffinity: ClientIP makes kube-proxy route connections from the same client IP to the same endpoint, for a configurable timeout (three hours by default). externalTrafficPolicy: Local restricts external traffic to Pods on the receiving node to preserve source IPs; it does not pin clients. internalTrafficPolicy: Local sends in-cluster traffic only to Pods on the caller's node, which is about locality, not per-client stickiness. publishNotReadyAddresses includes unready Pods in DNS and endpoints and has nothing to do with affinity.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/virtual-ips/#session-affinity",
    tags: ["Services","Session affinity"]
  },
  {
    id: "cncf-kcna-44",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Selecting Pods across several environments",
    scenario: "A Deployment selector must match Pods labeled env: staging or env: qa, but never Pods that carry a tier label of legacy. The team wants a single selector expressed in the manifest rather than two Deployments.",
    question: "Which selector expresses this?",
    options: [
      { id: 'A', text: "matchLabels with env: staging and a second matchLabels block with env: qa below" },
      { id: 'B', text: "matchExpressions with env In [staging, qa] and tier NotIn [legacy] together" },
      { id: 'C', text: "matchLabels with env: staging,qa and tier set to !legacy in the same selector block" },
      { id: 'D', text: "matchExpressions with env Exists and tier DoesNotExist, both inside one block" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set-based requirements in matchExpressions support In, NotIn, Exists and DoesNotExist, and all requirements are ANDed, so env In (staging, qa) plus tier NotIn (legacy) matches exactly the wanted Pods, including those without any tier label. matchLabels takes literal key-value equality, so a value of staging,qa or !legacy is just a string that no Pod carries. env Exists would also match production Pods, and tier DoesNotExist would exclude every Pod with any tier label, not only legacy. A selector has a single matchLabels map, so a second block is invalid.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#set-based-requirement",
    tags: ["Labels","Selectors"]
  },
  {
    id: "cncf-kcna-45",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A stable address for Pods that come and go",
    scenario: "A frontend team has been calling a backend Pod by its IP address. After the backend Deployment rolled out a new version, the calls started failing because the new Pods had different IPs.",
    question: "What should the frontend use instead?",
    options: [
      { id: 'A', text: "A Service in front of the backend, giving a stable name and virtual address" },
      { id: 'B', text: "The backend Pod's hostname, which stays the same when the Pod is replaced" },
      { id: 'C', text: "The node's IP address, since the new Pods always land on the same node" },
      { id: 'D', text: "A static Pod IP, reserved in the Pod spec so each replacement keeps its IP" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pods are ephemeral and get new IPs when they are replaced, so clients should call a Service, which provides a stable DNS name and virtual IP and routes to whichever ready Pods match its selector. Deployment Pods get new generated names, and so new hostnames, on each replacement. Standard Pod specs cannot reserve a fixed IP. Nothing guarantees replacement Pods land on the same node, and a node IP would not route to the Pod's port anyway.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/",
    tags: ["Services","Pods"]
  },
  {
    id: "cncf-kcna-46",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Editing a running Pod rejected",
    scenario: "An engineer tries kubectl edit pod api-debug to add an environment variable to a bare Pod that no controller manages. The API server rejects the save with a message that the Pod spec may not be updated except for a small set of fields.",
    question: "What is the correct way to get the new variable into the Pod?",
    options: [
      { id: 'A', text: "Run kubectl apply with --force-conflicts so the API server accepts the new variable" },
      { id: 'B', text: "Delete and recreate the Pod with the variable, or manage it with a Deployment instead" },
      { id: 'C', text: "Restart the kubelet on the node so that it re-reads the edited spec from the API" },
      { id: 'D', text: "Add the variable to the Pod's annotations, which the kubelet copies into the container" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Most of a Pod's spec is immutable once created; only a few fields, such as container images, activeDeadlineSeconds and added tolerations, may change in place. To change environment variables you recreate the Pod, which is why workloads are normally managed by a Deployment that rolls out a new Pod template for you. --force-conflicts resolves server-side apply field-ownership conflicts but cannot bypass immutability validation. Annotations are not copied into container environments. The rejection happens at the API server, so restarting a kubelet changes nothing.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/#pod-update-and-replacement",
    tags: ["Pods","Immutability"]
  },
  {
    id: "cncf-kcna-47",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A test Pod swallowed by a Deployment",
    scenario: "The web Deployment in the shop namespace runs three replicas selected by app: web. To test a patched image, a developer creates a single bare Pod from a manifest that also carries the label app: web. Moments later one of the Pods labeled app: web is terminated, and the count settles back at three.",
    question: "Why did one of the Pods disappear?",
    options: [
      { id: 'A', text: "The scheduler evicted one Pod because four Pods with the same labels exceeded the node's capacity for that app" },
      { id: 'B', text: "The Deployment started a rollout to the patched image because the new Pod's template differed from the current one" },
      { id: 'C', text: "The Deployment's ReplicaSet adopted the unowned Pod because its labels matched, then removed one Pod to keep three" },
      { id: 'D', text: "The kubelet removed the bare Pod because Pods without an owner are not allowed to share labels with a Deployment" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A ReplicaSet acquires any Pod in its namespace that matches its selector and has no controller ownerReference, so the bare Pod was adopted and counted; with four matching Pods against three desired replicas, the ReplicaSet deleted one to restore the count, possibly the test Pod itself. The scheduler does not evict Pods for having matching labels. The kubelet does not enforce label rules between Pods and controllers. A Deployment rolls out only when its own Pod template changes, never because a separately created Pod has a different image. Test Pods should use labels that no controller selects.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/#non-template-pod-acquisitions",
    tags: ["ReplicaSets","Labels","Owner references"]
  },
  {
    id: "cncf-kcna-48",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Two objects with the same name",
    scenario: "A developer creates a ConfigMap named settings in the payments namespace, and a colleague creates a ConfigMap named settings in the search namespace. A third person then tries to create another ConfigMap named settings in payments and gets an AlreadyExists error.",
    question: "Which rule explains all three results?",
    options: [
      { id: 'A', text: "Names are never checked for uniqueness, and the error came from a quota on the team" },
      { id: 'B', text: "Names must be unique per kind within a namespace, and every object also carries a UID" },
      { id: 'C', text: "Names must be unique across the whole cluster for each kind of namespaced resource" },
      { id: 'D', text: "Names must be unique per namespace across all kinds, including Pods and Services" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "For namespaced resources, a name is unique only among objects of the same kind in the same namespace, so settings can exist once in payments and once in search, but not twice in payments. Every object also receives a UID that is unique across the whole cluster's history. If names had to be unique cluster-wide, the second ConfigMap would have failed. Different kinds can share a name, so a ConfigMap and a Service can both be called settings. The AlreadyExists error is a name conflict, not a quota rejection.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/working-with-objects/names/",
    tags: ["Object names","UIDs"]
  },
  {
    id: "cncf-kcna-49",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Letting a web server finish its requests",
    scenario: "A web server Pod is deleted during a scale-down. The team wants to understand what the container experiences so they can make it finish in-flight requests before exiting, with the default Pod settings.",
    question: "What happens to the container when the Pod is deleted?",
    options: [
      { id: 'A', text: "It receives SIGKILL at once, since Kubernetes cannot deliver signals to containers" },
      { id: 'B', text: "It receives SIGTERM, then SIGKILL if still running after a 30-second grace period" },
      { id: 'C', text: "It receives SIGHUP, then the kubelet waits indefinitely until the process exits" },
      { id: 'D', text: "It is frozen and checkpointed, then resumed on another node by the scheduler" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "On deletion the kubelet runs any preStop hook, then sends SIGTERM to the container's main process, and after terminationGracePeriodSeconds (30 seconds by default) sends SIGKILL to anything still running, so the app should handle SIGTERM by draining. Kubernetes does deliver signals, and SIGKILL comes only at the end of the grace period. SIGHUP is not the termination signal, and the wait is bounded. Deletion does not checkpoint or migrate containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-termination",
    tags: ["Pod lifecycle","Termination"]
  },
  {
    id: "cncf-kcna-50",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Why every restart pulls the image again",
    scenario: "A team deploys containers with image: registry.example.com/web:latest and no imagePullPolicy set. They notice the nodes contact the registry each time a container starts, while another team using image: registry.example.com/web:3.1.2 sees no registry traffic after the first start.",
    question: "What explains the difference?",
    options: [
      { id: 'A', text: "The latest tag defaults imagePullPolicy to Never; a specific tag defaults to Always" },
      { id: 'B', text: "Both images use Always, but the registry skips version-tagged images already cached" },
      { id: 'C', text: "Both images use IfNotPresent, but the kubelet evicts images tagged latest after use" },
      { id: 'D', text: "The latest tag defaults imagePullPolicy to Always; a specific tag defaults to IfNotPresent" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When imagePullPolicy is omitted, Kubernetes sets it to Always if the tag is latest or missing, and to IfNotPresent for any other tag, so the latest image is re-checked with the registry on every container start while 3.1.2 is reused from the node cache. Never would stop pulls entirely. The kubelet's image garbage collection is driven by disk usage, not by tag. The second team's policy is IfNotPresent, not Always. Pinning a version tag or digest also makes deployments reproducible.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#imagepullpolicy-defaulting",
    tags: ["Images","imagePullPolicy"]
  }
];

export default CNCF_KCNA_QUESTIONS_2;
