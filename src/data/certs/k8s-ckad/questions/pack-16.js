export const K8S_CKAD_QUESTIONS_16 = [
  {
    id: "k8s-ckad-376",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Monitoring Resource Usage with kubectl top: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Metrics Server to identify which pods in a production namespace are consuming the highest amounts of CPU and memory during a traffic surge.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Run `kubectl top pods -n &lt;namespace&gt; --sort-by=cpu`, which reads the Metrics Server API." },
      { id: 'B', text: "Run `kubectl describe node` and read the allocated-resource percentages it prints per node." },
      { id: 'C', text: "Run `kubectl get pods -n &lt;namespace&gt; -o wide` and compare the restart counts it lists." },
      { id: 'D', text: "Run `kubectl get --raw /apis/metrics.k8s.io/v1beta1/nodes` and read the per-node totals." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl top pods -n &lt;namespace&gt; --sort-by=cpu` (or `--sort-by=memory`) querying the cluster Metrics Server. `kubectl top` queries the Kubernetes Metrics Server API (`metrics.k8s.io`) to report real-time CPU and memory metrics for nodes and pods. Sorting with `--sort-by=cpu` or `--sort-by=memory` quickly identifies resource-intensive workloads.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_top/",
    tags: ["Metrics Server","kubectl top","Dr Failover"]
  },
  {
    id: "k8s-ckad-377",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Monitoring Resource Usage with kubectl top: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Metrics Server to identify which pods in a production namespace are consuming the highest amounts of CPU and memory during a traffic surge.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Run `kubectl get pods -n &lt;namespace&gt; -o wide` and compare the restart counts it lists." },
      { id: 'B', text: "Run `kubectl describe node` and read the allocated-resource percentages it prints per node." },
      { id: 'C', text: "Run `kubectl get --raw /apis/metrics.k8s.io/v1beta1/nodes` and read the per-node totals." },
      { id: 'D', text: "Run `kubectl top pods -n &lt;namespace&gt; --sort-by=cpu`, which reads the Metrics Server API." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Run `kubectl top pods -n &lt;namespace&gt; --sort-by=cpu` (or `--sort-by=memory`) querying the cluster Metrics Server. `kubectl top` queries the Kubernetes Metrics Server API (`metrics.k8s.io`) to report real-time CPU and memory metrics for nodes and pods. Sorting with `--sort-by=cpu` or `--sort-by=memory` quickly identifies resource-intensive workloads.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_top/",
    tags: ["Metrics Server","kubectl top","High Load Scale"]
  },
  {
    id: "k8s-ckad-378",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Monitoring Resource Usage with kubectl top: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Metrics Server to identify which pods in a production namespace are consuming the highest amounts of CPU and memory during a traffic surge.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Run `kubectl top pods -n &lt;namespace&gt; --sort-by=cpu`, which reads the Metrics Server API." },
      { id: 'B', text: "Run `kubectl describe node` and read the allocated-resource percentages it prints per node." },
      { id: 'C', text: "Run `kubectl get pods -n &lt;namespace&gt; -o wide` and compare the restart counts it lists." },
      { id: 'D', text: "Run `kubectl get --raw /apis/metrics.k8s.io/v1beta1/nodes` and read the per-node totals." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl top pods -n &lt;namespace&gt; --sort-by=cpu` (or `--sort-by=memory`) querying the cluster Metrics Server. `kubectl top` queries the Kubernetes Metrics Server API (`metrics.k8s.io`) to report real-time CPU and memory metrics for nodes and pods. Sorting with `--sort-by=cpu` or `--sort-by=memory` quickly identifies resource-intensive workloads.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_top/",
    tags: ["Metrics Server","kubectl top","Security Compliance"]
  },
  {
    id: "k8s-ckad-379",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Monitoring Resource Usage with kubectl top: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Metrics Server to identify which pods in a production namespace are consuming the highest amounts of CPU and memory during a traffic surge.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Run `kubectl top pods -n &lt;namespace&gt; --sort-by=cpu`, which reads the Metrics Server API." },
      { id: 'B', text: "Run `kubectl get --raw /apis/metrics.k8s.io/v1beta1/nodes` and read the per-node totals." },
      { id: 'C', text: "Run `kubectl describe node` and read the allocated-resource percentages it prints per node." },
      { id: 'D', text: "Run `kubectl get pods -n &lt;namespace&gt; -o wide` and compare the restart counts it lists." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl top pods -n &lt;namespace&gt; --sort-by=cpu` (or `--sort-by=memory`) querying the cluster Metrics Server. `kubectl top` queries the Kubernetes Metrics Server API (`metrics.k8s.io`) to report real-time CPU and memory metrics for nodes and pods. Sorting with `--sort-by=cpu` or `--sort-by=memory` quickly identifies resource-intensive workloads.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_top/",
    tags: ["Metrics Server","kubectl top","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-380",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Monitoring Resource Usage with kubectl top: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Metrics Server to identify which pods in a production namespace are consuming the highest amounts of CPU and memory during a traffic surge.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Run `kubectl top pods -n &lt;namespace&gt; --sort-by=cpu`, which reads the Metrics Server API." },
      { id: 'B', text: "Run `kubectl describe node` and read the allocated-resource percentages it prints per node." },
      { id: 'C', text: "Run `kubectl get pods -n &lt;namespace&gt; -o wide` and compare the restart counts it lists." },
      { id: 'D', text: "Run `kubectl get --raw /apis/metrics.k8s.io/v1beta1/nodes` and read the per-node totals." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl top pods -n &lt;namespace&gt; --sort-by=cpu` (or `--sort-by=memory`) querying the cluster Metrics Server. `kubectl top` queries the Kubernetes Metrics Server API (`metrics.k8s.io`) to report real-time CPU and memory metrics for nodes and pods. Sorting with `--sort-by=cpu` or `--sort-by=memory` quickly identifies resource-intensive workloads.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_top/",
    tags: ["Metrics Server","kubectl top","Resilience Failure"]
  },
  {
    id: "k8s-ckad-381",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Pod Lifecycle Hooks: PostStart and PreStop: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Lifecycle Hooks to ensure an application gracefully closes active database connections and drains in-flight transactions before its container is terminated by Kubernetes.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Define a `postStart` hook that installs the application's own shutdown handler at container start." },
      { id: 'B', text: "Raise `terminationGracePeriodSeconds` so the kubelet waits longer before it sends `SIGKILL`." },
      { id: 'C', text: "Define a `preStop` hook that runs the connection-draining script before the container is signalled." },
      { id: 'D', text: "Add a readiness probe that fails during shutdown so the pod leaves the Service's endpoints." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define a `preStop` hook in the container lifecycle spec to run a shutdown script or execute an HTTP GET request. Kubernetes provides `postStart` and `preStop` container lifecycle hooks. The `preStop` hook is called immediately before a container is terminated due to API request, eviction, or liveness failure. It blocks the delivery of `SIGTERM`, allowing the container to complete cleanup tasks gracefully.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/",
    tags: ["Lifecycle Hooks","Lifecycle Hooks","Dr Failover"]
  },
  {
    id: "k8s-ckad-382",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Pod Lifecycle Hooks: PostStart and PreStop: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Lifecycle Hooks to ensure an application gracefully closes active database connections and drains in-flight transactions before its container is terminated by Kubernetes.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Add a readiness probe that fails during shutdown so the pod leaves the Service's endpoints." },
      { id: 'B', text: "Define a `preStop` hook that runs the connection-draining script before the container is signalled." },
      { id: 'C', text: "Raise `terminationGracePeriodSeconds` so the kubelet waits longer before it sends `SIGKILL`." },
      { id: 'D', text: "Define a `postStart` hook that installs the application's own shutdown handler at container start." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define a `preStop` hook in the container lifecycle spec to run a shutdown script or execute an HTTP GET request. Kubernetes provides `postStart` and `preStop` container lifecycle hooks. The `preStop` hook is called immediately before a container is terminated due to API request, eviction, or liveness failure. It blocks the delivery of `SIGTERM`, allowing the container to complete cleanup tasks gracefully.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/",
    tags: ["Lifecycle Hooks","Lifecycle Hooks","High Load Scale"]
  },
  {
    id: "k8s-ckad-383",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Pod Lifecycle Hooks: PostStart and PreStop: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Lifecycle Hooks to ensure an application gracefully closes active database connections and drains in-flight transactions before its container is terminated by Kubernetes.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Define a `preStop` hook that runs the connection-draining script before the container is signalled." },
      { id: 'B', text: "Add a readiness probe that fails during shutdown so the pod leaves the Service's endpoints." },
      { id: 'C', text: "Define a `postStart` hook that installs the application's own shutdown handler at container start." },
      { id: 'D', text: "Raise `terminationGracePeriodSeconds` so the kubelet waits longer before it sends `SIGKILL`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `preStop` hook in the container lifecycle spec to run a shutdown script or execute an HTTP GET request. Kubernetes provides `postStart` and `preStop` container lifecycle hooks. The `preStop` hook is called immediately before a container is terminated due to API request, eviction, or liveness failure. It blocks the delivery of `SIGTERM`, allowing the container to complete cleanup tasks gracefully.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/",
    tags: ["Lifecycle Hooks","Lifecycle Hooks","Security Compliance"]
  },
  {
    id: "k8s-ckad-384",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Pod Lifecycle Hooks: PostStart and PreStop: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Lifecycle Hooks to ensure an application gracefully closes active database connections and drains in-flight transactions before its container is terminated by Kubernetes.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Add a readiness probe that fails during shutdown so the pod leaves the Service's endpoints." },
      { id: 'B', text: "Define a `preStop` hook that runs the connection-draining script before the container is signalled." },
      { id: 'C', text: "Raise `terminationGracePeriodSeconds` so the kubelet waits longer before it sends `SIGKILL`." },
      { id: 'D', text: "Define a `postStart` hook that installs the application's own shutdown handler at container start." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define a `preStop` hook in the container lifecycle spec to run a shutdown script or execute an HTTP GET request. Kubernetes provides `postStart` and `preStop` container lifecycle hooks. The `preStop` hook is called immediately before a container is terminated due to API request, eviction, or liveness failure. It blocks the delivery of `SIGTERM`, allowing the container to complete cleanup tasks gracefully.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/",
    tags: ["Lifecycle Hooks","Lifecycle Hooks","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-385",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Pod Lifecycle Hooks: PostStart and PreStop: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Lifecycle Hooks to ensure an application gracefully closes active database connections and drains in-flight transactions before its container is terminated by Kubernetes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Define a `preStop` hook that runs the connection-draining script before the container is signalled." },
      { id: 'B', text: "Add a readiness probe that fails during shutdown so the pod leaves the Service's endpoints." },
      { id: 'C', text: "Define a `postStart` hook that installs the application's own shutdown handler at container start." },
      { id: 'D', text: "Raise `terminationGracePeriodSeconds` so the kubelet waits longer before it sends `SIGKILL`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `preStop` hook in the container lifecycle spec to run a shutdown script or execute an HTTP GET request. Kubernetes provides `postStart` and `preStop` container lifecycle hooks. The `preStop` hook is called immediately before a container is terminated due to API request, eviction, or liveness failure. It blocks the delivery of `SIGTERM`, allowing the container to complete cleanup tasks gracefully.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/",
    tags: ["Lifecycle Hooks","Lifecycle Hooks","Resilience Failure"]
  },
  {
    id: "k8s-ckad-386",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "TerminationGracePeriodSeconds Tuning: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Graceful Termination to allow a background data-processing pod up to 120 seconds to finish processing its active batch before being forcibly killed with SIGKILL.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Modify the kubelet source code to change the default cluster timeout." },
      { id: 'B', text: "Configure a readiness probe with a 120-second timeout." },
      { id: 'C', text: "Set `terminationGracePeriodSeconds: 120` in the pod specification." },
      { id: 'D', text: "Decrease terminationGracePeriodSeconds to 0 to force graceful termination." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set `terminationGracePeriodSeconds: 120` in the pod specification. When Kubernetes terminates a pod, it sends `SIGTERM` and waits `terminationGracePeriodSeconds` (default 30 seconds) before sending `SIGKILL`. Workloads that need additional time to finish open transactions should increase this parameter to prevent abrupt data corruption.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-termination",
    tags: ["Graceful Termination","Grace Period","Dr Failover"]
  },
  {
    id: "k8s-ckad-387",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "TerminationGracePeriodSeconds Tuning: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Graceful Termination to allow a background data-processing pod up to 120 seconds to finish processing its active batch before being forcibly killed with SIGKILL.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Set `terminationGracePeriodSeconds: 120` in the pod specification." },
      { id: 'B', text: "Decrease terminationGracePeriodSeconds to 0 to force graceful termination." },
      { id: 'C', text: "Modify the kubelet source code to change the default cluster timeout." },
      { id: 'D', text: "Configure a readiness probe with a 120-second timeout." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `terminationGracePeriodSeconds: 120` in the pod specification. When Kubernetes terminates a pod, it sends `SIGTERM` and waits `terminationGracePeriodSeconds` (default 30 seconds) before sending `SIGKILL`. Workloads that need additional time to finish open transactions should increase this parameter to prevent abrupt data corruption.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-termination",
    tags: ["Graceful Termination","Grace Period","High Load Scale"]
  },
  {
    id: "k8s-ckad-388",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "TerminationGracePeriodSeconds Tuning: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Graceful Termination to allow a background data-processing pod up to 120 seconds to finish processing its active batch before being forcibly killed with SIGKILL.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Set `terminationGracePeriodSeconds: 120` in the pod specification." },
      { id: 'B', text: "Decrease terminationGracePeriodSeconds to 0 to force graceful termination." },
      { id: 'C', text: "Modify the kubelet source code to change the default cluster timeout." },
      { id: 'D', text: "Configure a readiness probe with a 120-second timeout." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `terminationGracePeriodSeconds: 120` in the pod specification. When Kubernetes terminates a pod, it sends `SIGTERM` and waits `terminationGracePeriodSeconds` (default 30 seconds) before sending `SIGKILL`. Workloads that need additional time to finish open transactions should increase this parameter to prevent abrupt data corruption.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-termination",
    tags: ["Graceful Termination","Grace Period","Security Compliance"]
  },
  {
    id: "k8s-ckad-389",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "TerminationGracePeriodSeconds Tuning: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Graceful Termination to allow a background data-processing pod up to 120 seconds to finish processing its active batch before being forcibly killed with SIGKILL.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Set `terminationGracePeriodSeconds: 120` in the pod specification." },
      { id: 'B', text: "Decrease terminationGracePeriodSeconds to 0 to force graceful termination." },
      { id: 'C', text: "Modify the kubelet source code to change the default cluster timeout." },
      { id: 'D', text: "Configure a readiness probe with a 120-second timeout." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `terminationGracePeriodSeconds: 120` in the pod specification. When Kubernetes terminates a pod, it sends `SIGTERM` and waits `terminationGracePeriodSeconds` (default 30 seconds) before sending `SIGKILL`. Workloads that need additional time to finish open transactions should increase this parameter to prevent abrupt data corruption.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-termination",
    tags: ["Graceful Termination","Grace Period","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-390",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "TerminationGracePeriodSeconds Tuning: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Graceful Termination to allow a background data-processing pod up to 120 seconds to finish processing its active batch before being forcibly killed with SIGKILL.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Set `terminationGracePeriodSeconds: 120` in the pod specification." },
      { id: 'B', text: "Decrease terminationGracePeriodSeconds to 0 to force graceful termination." },
      { id: 'C', text: "Modify the kubelet source code to change the default cluster timeout." },
      { id: 'D', text: "Configure a readiness probe with a 120-second timeout." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `terminationGracePeriodSeconds: 120` in the pod specification. When Kubernetes terminates a pod, it sends `SIGTERM` and waits `terminationGracePeriodSeconds` (default 30 seconds) before sending `SIGKILL`. Workloads that need additional time to finish open transactions should increase this parameter to prevent abrupt data corruption.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-termination",
    tags: ["Graceful Termination","Grace Period","Resilience Failure"]
  },
  {
    id: "k8s-ckad-391",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ConfigMaps as Environment Variables: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates ConfigMaps to pass multiple application configuration settings from a ConfigMap into a container as environment variables at runtime.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Use `env` entries with `valueFrom.fieldRef` pointing at the ConfigMap's keys." },
      { id: 'B', text: "Mount the ConfigMap as a volume and pass the file path as a command-line flag." },
      { id: 'C', text: "Copy the ConfigMap values into Dockerfile `ENV` lines when the image is built." },
      { id: 'D', text: "Use `envFrom` with a `configMapRef` so every key arrives as an environment variable." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `envFrom` with `configMapRef` in the container spec to inject all key-value pairs as environment variables. `envFrom` references a ConfigMap to inject all its key-value entries as environment variables inside the container. Alternatively, `env` with `valueFrom.configMapKeyRef` injects specific individual keys, decoupling application configuration from container images.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/",
    tags: ["ConfigMaps","ConfigMaps","Dr Failover"]
  },
  {
    id: "k8s-ckad-392",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ConfigMaps as Environment Variables: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates ConfigMaps to pass multiple application configuration settings from a ConfigMap into a container as environment variables at runtime.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Copy the ConfigMap values into Dockerfile `ENV` lines when the image is built." },
      { id: 'B', text: "Use `envFrom` with a `configMapRef` so every key arrives as an environment variable." },
      { id: 'C', text: "Use `env` entries with `valueFrom.fieldRef` pointing at the ConfigMap's keys." },
      { id: 'D', text: "Mount the ConfigMap as a volume and pass the file path as a command-line flag." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `envFrom` with `configMapRef` in the container spec to inject all key-value pairs as environment variables. `envFrom` references a ConfigMap to inject all its key-value entries as environment variables inside the container. Alternatively, `env` with `valueFrom.configMapKeyRef` injects specific individual keys, decoupling application configuration from container images.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/",
    tags: ["ConfigMaps","ConfigMaps","High Load Scale"]
  },
  {
    id: "k8s-ckad-393",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ConfigMaps as Environment Variables: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates ConfigMaps to pass multiple application configuration settings from a ConfigMap into a container as environment variables at runtime.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Use `envFrom` with a `configMapRef` so every key arrives as an environment variable." },
      { id: 'B', text: "Copy the ConfigMap values into Dockerfile `ENV` lines when the image is built." },
      { id: 'C', text: "Mount the ConfigMap as a volume and pass the file path as a command-line flag." },
      { id: 'D', text: "Use `env` entries with `valueFrom.fieldRef` pointing at the ConfigMap's keys." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `envFrom` with `configMapRef` in the container spec to inject all key-value pairs as environment variables. `envFrom` references a ConfigMap to inject all its key-value entries as environment variables inside the container. Alternatively, `env` with `valueFrom.configMapKeyRef` injects specific individual keys, decoupling application configuration from container images.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/",
    tags: ["ConfigMaps","ConfigMaps","Security Compliance"]
  },
  {
    id: "k8s-ckad-394",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ConfigMaps as Environment Variables: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates ConfigMaps to pass multiple application configuration settings from a ConfigMap into a container as environment variables at runtime.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Use `envFrom` with a `configMapRef` so every key arrives as an environment variable." },
      { id: 'B', text: "Copy the ConfigMap values into Dockerfile `ENV` lines when the image is built." },
      { id: 'C', text: "Mount the ConfigMap as a volume and pass the file path as a command-line flag." },
      { id: 'D', text: "Use `env` entries with `valueFrom.fieldRef` pointing at the ConfigMap's keys." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `envFrom` with `configMapRef` in the container spec to inject all key-value pairs as environment variables. `envFrom` references a ConfigMap to inject all its key-value entries as environment variables inside the container. Alternatively, `env` with `valueFrom.configMapKeyRef` injects specific individual keys, decoupling application configuration from container images.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/",
    tags: ["ConfigMaps","ConfigMaps","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-395",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ConfigMaps as Environment Variables: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates ConfigMaps to pass multiple application configuration settings from a ConfigMap into a container as environment variables at runtime.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Copy the ConfigMap values into Dockerfile `ENV` lines when the image is built." },
      { id: 'B', text: "Use `envFrom` with a `configMapRef` so every key arrives as an environment variable." },
      { id: 'C', text: "Use `env` entries with `valueFrom.fieldRef` pointing at the ConfigMap's keys." },
      { id: 'D', text: "Mount the ConfigMap as a volume and pass the file path as a command-line flag." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `envFrom` with `configMapRef` in the container spec to inject all key-value pairs as environment variables. `envFrom` references a ConfigMap to inject all its key-value entries as environment variables inside the container. Alternatively, `env` with `valueFrom.configMapKeyRef` injects specific individual keys, decoupling application configuration from container images.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/",
    tags: ["ConfigMaps","ConfigMaps","Resilience Failure"]
  },
  {
    id: "k8s-ckad-396",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Secrets as Environment Variables and Mounted Volumes: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Secrets to provide a container access to database credentials stored in a Secret while ensuring values are not exposed in plaintext command-line inspection.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Hold the credentials in a ConfigMap and mount that read-only into the container instead." },
      { id: 'B', text: "Set the credentials as literal `env` values in the pod spec, which is stored with the manifest." },
      { id: 'C', text: "Hold the credentials in pod annotations and read them through the Downward API at startup." },
      { id: 'D', text: "Mount the Secret as a read-only volume, or inject single keys with `valueFrom.secretKeyRef`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Mount the Secret as a read-only volume in the container or inject specific keys via `valueFrom.secretKeyRef`. Kubernetes Secrets store sensitive data (tokens, passwords, keys). Consuming Secrets as mounted volumes or via `secretKeyRef` environment variables provides secure access to applications without hardcoding credentials in Dockerfiles or committing them to source control.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets",
    tags: ["Secrets","Secrets","Dr Failover"]
  },
  {
    id: "k8s-ckad-397",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Secrets as Environment Variables and Mounted Volumes: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Secrets to provide a container access to database credentials stored in a Secret while ensuring values are not exposed in plaintext command-line inspection.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Hold the credentials in pod annotations and read them through the Downward API at startup." },
      { id: 'B', text: "Mount the Secret as a read-only volume, or inject single keys with `valueFrom.secretKeyRef`." },
      { id: 'C', text: "Hold the credentials in a ConfigMap and mount that read-only into the container instead." },
      { id: 'D', text: "Set the credentials as literal `env` values in the pod spec, which is stored with the manifest." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Mount the Secret as a read-only volume in the container or inject specific keys via `valueFrom.secretKeyRef`. Kubernetes Secrets store sensitive data (tokens, passwords, keys). Consuming Secrets as mounted volumes or via `secretKeyRef` environment variables provides secure access to applications without hardcoding credentials in Dockerfiles or committing them to source control.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets",
    tags: ["Secrets","Secrets","High Load Scale"]
  },
  {
    id: "k8s-ckad-398",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Secrets as Environment Variables and Mounted Volumes: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Secrets to provide a container access to database credentials stored in a Secret while ensuring values are not exposed in plaintext command-line inspection.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Mount the Secret as a read-only volume, or inject single keys with `valueFrom.secretKeyRef`." },
      { id: 'B', text: "Set the credentials as literal `env` values in the pod spec, which is stored with the manifest." },
      { id: 'C', text: "Hold the credentials in a ConfigMap and mount that read-only into the container instead." },
      { id: 'D', text: "Hold the credentials in pod annotations and read them through the Downward API at startup." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Mount the Secret as a read-only volume in the container or inject specific keys via `valueFrom.secretKeyRef`. Kubernetes Secrets store sensitive data (tokens, passwords, keys). Consuming Secrets as mounted volumes or via `secretKeyRef` environment variables provides secure access to applications without hardcoding credentials in Dockerfiles or committing them to source control.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets",
    tags: ["Secrets","Secrets","Security Compliance"]
  },
  {
    id: "k8s-ckad-399",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Secrets as Environment Variables and Mounted Volumes: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Secrets to provide a container access to database credentials stored in a Secret while ensuring values are not exposed in plaintext command-line inspection.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Mount the Secret as a read-only volume, or inject single keys with `valueFrom.secretKeyRef`." },
      { id: 'B', text: "Set the credentials as literal `env` values in the pod spec, which is stored with the manifest." },
      { id: 'C', text: "Hold the credentials in a ConfigMap and mount that read-only into the container instead." },
      { id: 'D', text: "Hold the credentials in pod annotations and read them through the Downward API at startup." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Mount the Secret as a read-only volume in the container or inject specific keys via `valueFrom.secretKeyRef`. Kubernetes Secrets store sensitive data (tokens, passwords, keys). Consuming Secrets as mounted volumes or via `secretKeyRef` environment variables provides secure access to applications without hardcoding credentials in Dockerfiles or committing them to source control.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets",
    tags: ["Secrets","Secrets","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-400",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Secrets as Environment Variables and Mounted Volumes: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Secrets to provide a container access to database credentials stored in a Secret while ensuring values are not exposed in plaintext command-line inspection.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Mount the Secret as a read-only volume, or inject single keys with `valueFrom.secretKeyRef`." },
      { id: 'B', text: "Set the credentials as literal `env` values in the pod spec, which is stored with the manifest." },
      { id: 'C', text: "Hold the credentials in a ConfigMap and mount that read-only into the container instead." },
      { id: 'D', text: "Hold the credentials in pod annotations and read them through the Downward API at startup." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Mount the Secret as a read-only volume in the container or inject specific keys via `valueFrom.secretKeyRef`. Kubernetes Secrets store sensitive data (tokens, passwords, keys). Consuming Secrets as mounted volumes or via `secretKeyRef` environment variables provides secure access to applications without hardcoding credentials in Dockerfiles or committing them to source control.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets",
    tags: ["Secrets","Secrets","Resilience Failure"]
  }
];

export default K8S_CKAD_QUESTIONS_16;
