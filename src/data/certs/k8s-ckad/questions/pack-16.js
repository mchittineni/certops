export const K8S_CKAD_QUESTIONS_16 = [
  {
    id: "k8s-ckad-376",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Monitoring Resource Usage with kubectl top: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Metrics Server to identify which pods in a production namespace are consuming the highest amounts of CPU and memory during a traffic surge.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Viewing real-time pod and node CPU/memory consumption via kubectl top is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl top pods -n &lt;namespace&gt; --sort-by=cpu` (or `--sort-by=memory`) querying the cluster Metrics Server." },
      { id: 'B', text: "Inspect static YAML manifests to see what resource limits were requested." },
      { id: 'C', text: "Run top on a developer laptop." },
      { id: 'D', text: "Guess resource usage based on application response latency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl top pods -n &lt;namespace&gt; --sort-by=cpu` (or `--sort-by=memory`) querying the cluster Metrics Server. `kubectl top` queries the Kubernetes Metrics Server API (`metrics.k8s.io`) to report real-time CPU and memory metrics for nodes and pods. Sorting with `--sort-by=cpu` or `--sort-by=memory` quickly identifies resource-intensive workloads.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_top/",
    tags: ["Metrics Server", "kubectl top", "Dr Failover"]
  },
  {
    id: "k8s-ckad-377",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Monitoring Resource Usage with kubectl top: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Metrics Server to identify which pods in a production namespace are consuming the highest amounts of CPU and memory during a traffic surge.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Viewing real-time pod and node CPU/memory consumption via kubectl top is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl top pods -n &lt;namespace&gt; --sort-by=cpu` (or `--sort-by=memory`) querying the cluster Metrics Server." },
      { id: 'B', text: "Inspect static YAML manifests to see what resource limits were requested." },
      { id: 'C', text: "Run top on a developer laptop." },
      { id: 'D', text: "Guess resource usage based on application response latency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl top pods -n &lt;namespace&gt; --sort-by=cpu` (or `--sort-by=memory`) querying the cluster Metrics Server. `kubectl top` queries the Kubernetes Metrics Server API (`metrics.k8s.io`) to report real-time CPU and memory metrics for nodes and pods. Sorting with `--sort-by=cpu` or `--sort-by=memory` quickly identifies resource-intensive workloads.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_top/",
    tags: ["Metrics Server", "kubectl top", "High Load Scale"]
  },
  {
    id: "k8s-ckad-378",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Monitoring Resource Usage with kubectl top: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Metrics Server to identify which pods in a production namespace are consuming the highest amounts of CPU and memory during a traffic surge.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Viewing real-time pod and node CPU/memory consumption via kubectl top is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl top pods -n &lt;namespace&gt; --sort-by=cpu` (or `--sort-by=memory`) querying the cluster Metrics Server." },
      { id: 'B', text: "Inspect static YAML manifests to see what resource limits were requested." },
      { id: 'C', text: "Run top on a developer laptop." },
      { id: 'D', text: "Guess resource usage based on application response latency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl top pods -n &lt;namespace&gt; --sort-by=cpu` (or `--sort-by=memory`) querying the cluster Metrics Server. `kubectl top` queries the Kubernetes Metrics Server API (`metrics.k8s.io`) to report real-time CPU and memory metrics for nodes and pods. Sorting with `--sort-by=cpu` or `--sort-by=memory` quickly identifies resource-intensive workloads.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_top/",
    tags: ["Metrics Server", "kubectl top", "Security Compliance"]
  },
  {
    id: "k8s-ckad-379",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Monitoring Resource Usage with kubectl top: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Metrics Server to identify which pods in a production namespace are consuming the highest amounts of CPU and memory during a traffic surge.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Viewing real-time pod and node CPU/memory consumption via kubectl top is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl top pods -n &lt;namespace&gt; --sort-by=cpu` (or `--sort-by=memory`) querying the cluster Metrics Server." },
      { id: 'B', text: "Inspect static YAML manifests to see what resource limits were requested." },
      { id: 'C', text: "Run top on a developer laptop." },
      { id: 'D', text: "Guess resource usage based on application response latency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl top pods -n &lt;namespace&gt; --sort-by=cpu` (or `--sort-by=memory`) querying the cluster Metrics Server. `kubectl top` queries the Kubernetes Metrics Server API (`metrics.k8s.io`) to report real-time CPU and memory metrics for nodes and pods. Sorting with `--sort-by=cpu` or `--sort-by=memory` quickly identifies resource-intensive workloads.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_top/",
    tags: ["Metrics Server", "kubectl top", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-380",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Monitoring Resource Usage with kubectl top: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Metrics Server to identify which pods in a production namespace are consuming the highest amounts of CPU and memory during a traffic surge.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Viewing real-time pod and node CPU/memory consumption via kubectl top is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl top pods -n &lt;namespace&gt; --sort-by=cpu` (or `--sort-by=memory`) querying the cluster Metrics Server." },
      { id: 'B', text: "Inspect static YAML manifests to see what resource limits were requested." },
      { id: 'C', text: "Run top on a developer laptop." },
      { id: 'D', text: "Guess resource usage based on application response latency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl top pods -n &lt;namespace&gt; --sort-by=cpu` (or `--sort-by=memory`) querying the cluster Metrics Server. `kubectl top` queries the Kubernetes Metrics Server API (`metrics.k8s.io`) to report real-time CPU and memory metrics for nodes and pods. Sorting with `--sort-by=cpu` or `--sort-by=memory` quickly identifies resource-intensive workloads.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_top/",
    tags: ["Metrics Server", "kubectl top", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-381",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Pod Lifecycle Hooks: PostStart and PreStop: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Lifecycle Hooks to ensure an application gracefully closes active database connections and drains in-flight transactions before its container is terminated by Kubernetes.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Executing graceful termination and startup actions with container lifecycle hooks is under consideration.",
    options: [
      { id: 'A', text: "Define a `preStop` hook in the container lifecycle spec to run a shutdown script or execute an HTTP GET request." },
      { id: 'B', text: "Rely on immediate SIGKILL signal handling by the Linux kernel." },
      { id: 'C', text: "Configure a postStart hook to handle graceful termination." },
      { id: 'D', text: "Block pod deletion by disabling the kubelet eviction manager." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `preStop` hook in the container lifecycle spec to run a shutdown script or execute an HTTP GET request. Kubernetes provides `postStart` and `preStop` container lifecycle hooks. The `preStop` hook is called immediately before a container is terminated due to API request, eviction, or liveness failure. It blocks the delivery of `SIGTERM`, allowing the container to complete cleanup tasks gracefully.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/",
    tags: ["Lifecycle Hooks", "Lifecycle Hooks", "Dr Failover"]
  },
  {
    id: "k8s-ckad-382",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Pod Lifecycle Hooks: PostStart and PreStop: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Lifecycle Hooks to ensure an application gracefully closes active database connections and drains in-flight transactions before its container is terminated by Kubernetes.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Executing graceful termination and startup actions with container lifecycle hooks is under consideration.",
    options: [
      { id: 'A', text: "Define a `preStop` hook in the container lifecycle spec to run a shutdown script or execute an HTTP GET request." },
      { id: 'B', text: "Rely on immediate SIGKILL signal handling by the Linux kernel." },
      { id: 'C', text: "Configure a postStart hook to handle graceful termination." },
      { id: 'D', text: "Block pod deletion by disabling the kubelet eviction manager." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `preStop` hook in the container lifecycle spec to run a shutdown script or execute an HTTP GET request. Kubernetes provides `postStart` and `preStop` container lifecycle hooks. The `preStop` hook is called immediately before a container is terminated due to API request, eviction, or liveness failure. It blocks the delivery of `SIGTERM`, allowing the container to complete cleanup tasks gracefully.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/",
    tags: ["Lifecycle Hooks", "Lifecycle Hooks", "High Load Scale"]
  },
  {
    id: "k8s-ckad-383",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Pod Lifecycle Hooks: PostStart and PreStop: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Lifecycle Hooks to ensure an application gracefully closes active database connections and drains in-flight transactions before its container is terminated by Kubernetes.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Executing graceful termination and startup actions with container lifecycle hooks is under consideration.",
    options: [
      { id: 'A', text: "Define a `preStop` hook in the container lifecycle spec to run a shutdown script or execute an HTTP GET request." },
      { id: 'B', text: "Rely on immediate SIGKILL signal handling by the Linux kernel." },
      { id: 'C', text: "Configure a postStart hook to handle graceful termination." },
      { id: 'D', text: "Block pod deletion by disabling the kubelet eviction manager." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `preStop` hook in the container lifecycle spec to run a shutdown script or execute an HTTP GET request. Kubernetes provides `postStart` and `preStop` container lifecycle hooks. The `preStop` hook is called immediately before a container is terminated due to API request, eviction, or liveness failure. It blocks the delivery of `SIGTERM`, allowing the container to complete cleanup tasks gracefully.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/",
    tags: ["Lifecycle Hooks", "Lifecycle Hooks", "Security Compliance"]
  },
  {
    id: "k8s-ckad-384",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Pod Lifecycle Hooks: PostStart and PreStop: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Lifecycle Hooks to ensure an application gracefully closes active database connections and drains in-flight transactions before its container is terminated by Kubernetes.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Executing graceful termination and startup actions with container lifecycle hooks is under consideration.",
    options: [
      { id: 'A', text: "Define a `preStop` hook in the container lifecycle spec to run a shutdown script or execute an HTTP GET request." },
      { id: 'B', text: "Rely on immediate SIGKILL signal handling by the Linux kernel." },
      { id: 'C', text: "Configure a postStart hook to handle graceful termination." },
      { id: 'D', text: "Block pod deletion by disabling the kubelet eviction manager." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `preStop` hook in the container lifecycle spec to run a shutdown script or execute an HTTP GET request. Kubernetes provides `postStart` and `preStop` container lifecycle hooks. The `preStop` hook is called immediately before a container is terminated due to API request, eviction, or liveness failure. It blocks the delivery of `SIGTERM`, allowing the container to complete cleanup tasks gracefully.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/",
    tags: ["Lifecycle Hooks", "Lifecycle Hooks", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-385",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Pod Lifecycle Hooks: PostStart and PreStop: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Lifecycle Hooks to ensure an application gracefully closes active database connections and drains in-flight transactions before its container is terminated by Kubernetes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Executing graceful termination and startup actions with container lifecycle hooks is under consideration.",
    options: [
      { id: 'A', text: "Define a `preStop` hook in the container lifecycle spec to run a shutdown script or execute an HTTP GET request." },
      { id: 'B', text: "Rely on immediate SIGKILL signal handling by the Linux kernel." },
      { id: 'C', text: "Configure a postStart hook to handle graceful termination." },
      { id: 'D', text: "Block pod deletion by disabling the kubelet eviction manager." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `preStop` hook in the container lifecycle spec to run a shutdown script or execute an HTTP GET request. Kubernetes provides `postStart` and `preStop` container lifecycle hooks. The `preStop` hook is called immediately before a container is terminated due to API request, eviction, or liveness failure. It blocks the delivery of `SIGTERM`, allowing the container to complete cleanup tasks gracefully.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/",
    tags: ["Lifecycle Hooks", "Lifecycle Hooks", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-386",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "TerminationGracePeriodSeconds Tuning: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Graceful Termination to allow a background data-processing pod up to 120 seconds to finish processing its active batch before being forcibly killed with SIGKILL.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Configuring pod terminationGracePeriodSeconds for long-running transactions is under consideration.",
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
    tags: ["Graceful Termination", "Grace Period", "Dr Failover"]
  },
  {
    id: "k8s-ckad-387",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "TerminationGracePeriodSeconds Tuning: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Graceful Termination to allow a background data-processing pod up to 120 seconds to finish processing its active batch before being forcibly killed with SIGKILL.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Configuring pod terminationGracePeriodSeconds for long-running transactions is under consideration.",
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
    tags: ["Graceful Termination", "Grace Period", "High Load Scale"]
  },
  {
    id: "k8s-ckad-388",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "TerminationGracePeriodSeconds Tuning: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Graceful Termination to allow a background data-processing pod up to 120 seconds to finish processing its active batch before being forcibly killed with SIGKILL.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Configuring pod terminationGracePeriodSeconds for long-running transactions is under consideration.",
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
    tags: ["Graceful Termination", "Grace Period", "Security Compliance"]
  },
  {
    id: "k8s-ckad-389",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "TerminationGracePeriodSeconds Tuning: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Graceful Termination to allow a background data-processing pod up to 120 seconds to finish processing its active batch before being forcibly killed with SIGKILL.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Configuring pod terminationGracePeriodSeconds for long-running transactions is under consideration.",
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
    tags: ["Graceful Termination", "Grace Period", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-390",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "TerminationGracePeriodSeconds Tuning: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Graceful Termination to allow a background data-processing pod up to 120 seconds to finish processing its active batch before being forcibly killed with SIGKILL.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Configuring pod terminationGracePeriodSeconds for long-running transactions is under consideration.",
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
    tags: ["Graceful Termination", "Grace Period", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-391",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ConfigMaps as Environment Variables: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates ConfigMaps to pass multiple application configuration settings from a ConfigMap into a container as environment variables at runtime.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Injecting individual keys and entire ConfigMaps via env and envFrom is under consideration.",
    options: [
      { id: 'A', text: "Use `envFrom` with `configMapRef` in the container spec to inject all key-value pairs as environment variables." },
      { id: 'B', text: "Hardcode configuration values directly into the container Dockerfile." },
      { id: 'C', text: "Pass configuration values through command line flags in the image entrypoint." },
      { id: 'D', text: "Require the application to query the Kubernetes API server directly on startup." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `envFrom` with `configMapRef` in the container spec to inject all key-value pairs as environment variables. `envFrom` references a ConfigMap to inject all its key-value entries as environment variables inside the container. Alternatively, `env` with `valueFrom.configMapKeyRef` injects specific individual keys, decoupling application configuration from container images.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/",
    tags: ["ConfigMaps", "ConfigMaps", "Dr Failover"]
  },
  {
    id: "k8s-ckad-392",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ConfigMaps as Environment Variables: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates ConfigMaps to pass multiple application configuration settings from a ConfigMap into a container as environment variables at runtime.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Injecting individual keys and entire ConfigMaps via env and envFrom is under consideration.",
    options: [
      { id: 'A', text: "Use `envFrom` with `configMapRef` in the container spec to inject all key-value pairs as environment variables." },
      { id: 'B', text: "Hardcode configuration values directly into the container Dockerfile." },
      { id: 'C', text: "Pass configuration values through command line flags in the image entrypoint." },
      { id: 'D', text: "Require the application to query the Kubernetes API server directly on startup." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `envFrom` with `configMapRef` in the container spec to inject all key-value pairs as environment variables. `envFrom` references a ConfigMap to inject all its key-value entries as environment variables inside the container. Alternatively, `env` with `valueFrom.configMapKeyRef` injects specific individual keys, decoupling application configuration from container images.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/",
    tags: ["ConfigMaps", "ConfigMaps", "High Load Scale"]
  },
  {
    id: "k8s-ckad-393",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ConfigMaps as Environment Variables: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates ConfigMaps to pass multiple application configuration settings from a ConfigMap into a container as environment variables at runtime.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Injecting individual keys and entire ConfigMaps via env and envFrom is under consideration.",
    options: [
      { id: 'A', text: "Use `envFrom` with `configMapRef` in the container spec to inject all key-value pairs as environment variables." },
      { id: 'B', text: "Hardcode configuration values directly into the container Dockerfile." },
      { id: 'C', text: "Pass configuration values through command line flags in the image entrypoint." },
      { id: 'D', text: "Require the application to query the Kubernetes API server directly on startup." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `envFrom` with `configMapRef` in the container spec to inject all key-value pairs as environment variables. `envFrom` references a ConfigMap to inject all its key-value entries as environment variables inside the container. Alternatively, `env` with `valueFrom.configMapKeyRef` injects specific individual keys, decoupling application configuration from container images.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/",
    tags: ["ConfigMaps", "ConfigMaps", "Security Compliance"]
  },
  {
    id: "k8s-ckad-394",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ConfigMaps as Environment Variables: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates ConfigMaps to pass multiple application configuration settings from a ConfigMap into a container as environment variables at runtime.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Injecting individual keys and entire ConfigMaps via env and envFrom is under consideration.",
    options: [
      { id: 'A', text: "Use `envFrom` with `configMapRef` in the container spec to inject all key-value pairs as environment variables." },
      { id: 'B', text: "Hardcode configuration values directly into the container Dockerfile." },
      { id: 'C', text: "Pass configuration values through command line flags in the image entrypoint." },
      { id: 'D', text: "Require the application to query the Kubernetes API server directly on startup." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `envFrom` with `configMapRef` in the container spec to inject all key-value pairs as environment variables. `envFrom` references a ConfigMap to inject all its key-value entries as environment variables inside the container. Alternatively, `env` with `valueFrom.configMapKeyRef` injects specific individual keys, decoupling application configuration from container images.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/",
    tags: ["ConfigMaps", "ConfigMaps", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-395",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ConfigMaps as Environment Variables: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates ConfigMaps to pass multiple application configuration settings from a ConfigMap into a container as environment variables at runtime.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Injecting individual keys and entire ConfigMaps via env and envFrom is under consideration.",
    options: [
      { id: 'A', text: "Use `envFrom` with `configMapRef` in the container spec to inject all key-value pairs as environment variables." },
      { id: 'B', text: "Hardcode configuration values directly into the container Dockerfile." },
      { id: 'C', text: "Pass configuration values through command line flags in the image entrypoint." },
      { id: 'D', text: "Require the application to query the Kubernetes API server directly on startup." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `envFrom` with `configMapRef` in the container spec to inject all key-value pairs as environment variables. `envFrom` references a ConfigMap to inject all its key-value entries as environment variables inside the container. Alternatively, `env` with `valueFrom.configMapKeyRef` injects specific individual keys, decoupling application configuration from container images.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/",
    tags: ["ConfigMaps", "ConfigMaps", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-396",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Secrets as Environment Variables and Mounted Volumes: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Secrets to provide a container access to database credentials stored in a Secret while ensuring values are not exposed in plaintext command-line inspection.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Consuming sensitive credentials via Secret volumes and secretKeyRef is under consideration.",
    options: [
      { id: 'A', text: "Mount the Secret as a read-only volume in the container or inject specific keys via `valueFrom.secretKeyRef`." },
      { id: 'B', text: "Store passwords in cleartext in a public ConfigMap." },
      { id: 'C', text: "Hardcode the database password in the container image layer." },
      { id: 'D', text: "Pass credentials via pod annotations visible to all cluster users." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Mount the Secret as a read-only volume in the container or inject specific keys via `valueFrom.secretKeyRef`. Kubernetes Secrets store sensitive data (tokens, passwords, keys). Consuming Secrets as mounted volumes or via `secretKeyRef` environment variables provides secure access to applications without hardcoding credentials in Dockerfiles or committing them to source control.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets",
    tags: ["Secrets", "Secrets", "Dr Failover"]
  },
  {
    id: "k8s-ckad-397",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Secrets as Environment Variables and Mounted Volumes: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Secrets to provide a container access to database credentials stored in a Secret while ensuring values are not exposed in plaintext command-line inspection.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Consuming sensitive credentials via Secret volumes and secretKeyRef is under consideration.",
    options: [
      { id: 'A', text: "Mount the Secret as a read-only volume in the container or inject specific keys via `valueFrom.secretKeyRef`." },
      { id: 'B', text: "Store passwords in cleartext in a public ConfigMap." },
      { id: 'C', text: "Hardcode the database password in the container image layer." },
      { id: 'D', text: "Pass credentials via pod annotations visible to all cluster users." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Mount the Secret as a read-only volume in the container or inject specific keys via `valueFrom.secretKeyRef`. Kubernetes Secrets store sensitive data (tokens, passwords, keys). Consuming Secrets as mounted volumes or via `secretKeyRef` environment variables provides secure access to applications without hardcoding credentials in Dockerfiles or committing them to source control.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets",
    tags: ["Secrets", "Secrets", "High Load Scale"]
  },
  {
    id: "k8s-ckad-398",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Secrets as Environment Variables and Mounted Volumes: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Secrets to provide a container access to database credentials stored in a Secret while ensuring values are not exposed in plaintext command-line inspection.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Consuming sensitive credentials via Secret volumes and secretKeyRef is under consideration.",
    options: [
      { id: 'A', text: "Mount the Secret as a read-only volume in the container or inject specific keys via `valueFrom.secretKeyRef`." },
      { id: 'B', text: "Store passwords in cleartext in a public ConfigMap." },
      { id: 'C', text: "Hardcode the database password in the container image layer." },
      { id: 'D', text: "Pass credentials via pod annotations visible to all cluster users." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Mount the Secret as a read-only volume in the container or inject specific keys via `valueFrom.secretKeyRef`. Kubernetes Secrets store sensitive data (tokens, passwords, keys). Consuming Secrets as mounted volumes or via `secretKeyRef` environment variables provides secure access to applications without hardcoding credentials in Dockerfiles or committing them to source control.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets",
    tags: ["Secrets", "Secrets", "Security Compliance"]
  },
  {
    id: "k8s-ckad-399",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Secrets as Environment Variables and Mounted Volumes: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Secrets to provide a container access to database credentials stored in a Secret while ensuring values are not exposed in plaintext command-line inspection.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Consuming sensitive credentials via Secret volumes and secretKeyRef is under consideration.",
    options: [
      { id: 'A', text: "Mount the Secret as a read-only volume in the container or inject specific keys via `valueFrom.secretKeyRef`." },
      { id: 'B', text: "Store passwords in cleartext in a public ConfigMap." },
      { id: 'C', text: "Hardcode the database password in the container image layer." },
      { id: 'D', text: "Pass credentials via pod annotations visible to all cluster users." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Mount the Secret as a read-only volume in the container or inject specific keys via `valueFrom.secretKeyRef`. Kubernetes Secrets store sensitive data (tokens, passwords, keys). Consuming Secrets as mounted volumes or via `secretKeyRef` environment variables provides secure access to applications without hardcoding credentials in Dockerfiles or committing them to source control.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets",
    tags: ["Secrets", "Secrets", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-400",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Secrets as Environment Variables and Mounted Volumes: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Secrets to provide a container access to database credentials stored in a Secret while ensuring values are not exposed in plaintext command-line inspection.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Consuming sensitive credentials via Secret volumes and secretKeyRef is under consideration.",
    options: [
      { id: 'A', text: "Mount the Secret as a read-only volume in the container or inject specific keys via `valueFrom.secretKeyRef`." },
      { id: 'B', text: "Store passwords in cleartext in a public ConfigMap." },
      { id: 'C', text: "Hardcode the database password in the container image layer." },
      { id: 'D', text: "Pass credentials via pod annotations visible to all cluster users." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Mount the Secret as a read-only volume in the container or inject specific keys via `valueFrom.secretKeyRef`. Kubernetes Secrets store sensitive data (tokens, passwords, keys). Consuming Secrets as mounted volumes or via `secretKeyRef` environment variables provides secure access to applications without hardcoding credentials in Dockerfiles or committing them to source control.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets",
    tags: ["Secrets", "Secrets", "Resilience Failure"]
  }
];

export default K8S_CKAD_QUESTIONS_16;
