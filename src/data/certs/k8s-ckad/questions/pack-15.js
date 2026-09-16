export const K8S_CKAD_QUESTIONS_15 = [
  {
    id: "k8s-ckad-351",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Liveness Probes for Deadlock Detection: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Liveness Probes to detect and automatically restart a web server container that has encountered an internal thread deadlock and stopped serving requests.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Configure a `livenessProbe` with an HTTP GET against `/healthz`." },
      { id: 'B', text: "Configure a `readinessProbe` with an HTTP GET against `/healthz` on the container." },
      { id: 'C', text: "Configure a `startupProbe` with an HTTP GET against `/healthz` on the container." },
      { id: 'D', text: "Configure a `preStop` hook that checks `/healthz` and exits non-zero when it hangs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a `livenessProbe` in the container spec with an HTTP GET check against `/healthz` or an exec probe. The kubelet uses `livenessProbes` to know when to restart a container. If an application enters a deadlocked state where the process is running but unresponsive, the liveness probe fails, triggering the kubelet to terminate and restart the container.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",
    tags: ["Liveness Probes","Liveness Probes","Dr Failover"]
  },
  {
    id: "k8s-ckad-352",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Liveness Probes for Deadlock Detection: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Liveness Probes to detect and automatically restart a web server container that has encountered an internal thread deadlock and stopped serving requests.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Configure a `preStop` hook that checks `/healthz` and exits non-zero when it hangs." },
      { id: 'B', text: "Configure a `readinessProbe` with an HTTP GET against `/healthz` on the container." },
      { id: 'C', text: "Configure a `livenessProbe` with an HTTP GET against `/healthz`." },
      { id: 'D', text: "Configure a `startupProbe` with an HTTP GET against `/healthz` on the container." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a `livenessProbe` in the container spec with an HTTP GET check against `/healthz` or an exec probe. The kubelet uses `livenessProbes` to know when to restart a container. If an application enters a deadlocked state where the process is running but unresponsive, the liveness probe fails, triggering the kubelet to terminate and restart the container.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",
    tags: ["Liveness Probes","Liveness Probes","High Load Scale"]
  },
  {
    id: "k8s-ckad-353",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Liveness Probes for Deadlock Detection: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Liveness Probes to detect and automatically restart a web server container that has encountered an internal thread deadlock and stopped serving requests.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Configure a `livenessProbe` with an HTTP GET against `/healthz`." },
      { id: 'B', text: "Configure a `readinessProbe` with an HTTP GET against `/healthz` on the container." },
      { id: 'C', text: "Configure a `startupProbe` with an HTTP GET against `/healthz` on the container." },
      { id: 'D', text: "Configure a `preStop` hook that checks `/healthz` and exits non-zero when it hangs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a `livenessProbe` in the container spec with an HTTP GET check against `/healthz` or an exec probe. The kubelet uses `livenessProbes` to know when to restart a container. If an application enters a deadlocked state where the process is running but unresponsive, the liveness probe fails, triggering the kubelet to terminate and restart the container.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",
    tags: ["Liveness Probes","Liveness Probes","Security Compliance"]
  },
  {
    id: "k8s-ckad-354",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Liveness Probes for Deadlock Detection: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Liveness Probes to detect and automatically restart a web server container that has encountered an internal thread deadlock and stopped serving requests.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Configure a `livenessProbe` with an HTTP GET against `/healthz`." },
      { id: 'B', text: "Configure a `readinessProbe` with an HTTP GET against `/healthz` on the container." },
      { id: 'C', text: "Configure a `startupProbe` with an HTTP GET against `/healthz` on the container." },
      { id: 'D', text: "Configure a `preStop` hook that checks `/healthz` and exits non-zero when it hangs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a `livenessProbe` in the container spec with an HTTP GET check against `/healthz` or an exec probe. The kubelet uses `livenessProbes` to know when to restart a container. If an application enters a deadlocked state where the process is running but unresponsive, the liveness probe fails, triggering the kubelet to terminate and restart the container.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",
    tags: ["Liveness Probes","Liveness Probes","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-355",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Liveness Probes for Deadlock Detection: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Liveness Probes to detect and automatically restart a web server container that has encountered an internal thread deadlock and stopped serving requests.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Configure a `livenessProbe` with an HTTP GET against `/healthz`." },
      { id: 'B', text: "Configure a `readinessProbe` with an HTTP GET against `/healthz` on the container." },
      { id: 'C', text: "Configure a `startupProbe` with an HTTP GET against `/healthz` on the container." },
      { id: 'D', text: "Configure a `preStop` hook that checks `/healthz` and exits non-zero when it hangs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a `livenessProbe` in the container spec with an HTTP GET check against `/healthz` or an exec probe. The kubelet uses `livenessProbes` to know when to restart a container. If an application enters a deadlocked state where the process is running but unresponsive, the liveness probe fails, triggering the kubelet to terminate and restart the container.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",
    tags: ["Liveness Probes","Liveness Probes","Resilience Failure"]
  },
  {
    id: "k8s-ckad-356",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Readiness Probes for Traffic Gating: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Readiness Probes to ensure that an application container does not receive incoming network traffic from a Service until its in-memory caches and database connections are fully initialized.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Configure a `livenessProbe` against `/ready` with a long `initialDelaySeconds`." },
      { id: 'B', text: "Configure a `startupProbe` against `/ready` and leave the Service selector alone." },
      { id: 'C', text: "Configure a `readinessProbe` against `/ready` with a suitable `periodSeconds`." },
      { id: 'D', text: "Configure `publishNotReadyAddresses: true` on the Service that fronts the pods." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a `readinessProbe` with appropriate `initialDelaySeconds` and `periodSeconds` checking `/ready`. The kubelet uses `readinessProbes` to determine if a container is ready to accept traffic. If a readiness probe fails, the pod's IP is temporarily removed from the endpoints of all Services matching the pod, preventing user requests from hitting an unready backend.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-readiness-probes",
    tags: ["Readiness Probes","Readiness Probes","Dr Failover"]
  },
  {
    id: "k8s-ckad-357",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Readiness Probes for Traffic Gating: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Readiness Probes to ensure that an application container does not receive incoming network traffic from a Service until its in-memory caches and database connections are fully initialized.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Configure `publishNotReadyAddresses: true` on the Service that fronts the pods." },
      { id: 'B', text: "Configure a `readinessProbe` against `/ready` with a suitable `periodSeconds`." },
      { id: 'C', text: "Configure a `startupProbe` against `/ready` and leave the Service selector alone." },
      { id: 'D', text: "Configure a `livenessProbe` against `/ready` with a long `initialDelaySeconds`." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a `readinessProbe` with appropriate `initialDelaySeconds` and `periodSeconds` checking `/ready`. The kubelet uses `readinessProbes` to determine if a container is ready to accept traffic. If a readiness probe fails, the pod's IP is temporarily removed from the endpoints of all Services matching the pod, preventing user requests from hitting an unready backend.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-readiness-probes",
    tags: ["Readiness Probes","Readiness Probes","High Load Scale"]
  },
  {
    id: "k8s-ckad-358",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Readiness Probes for Traffic Gating: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Readiness Probes to ensure that an application container does not receive incoming network traffic from a Service until its in-memory caches and database connections are fully initialized.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Configure a `readinessProbe` against `/ready` with a suitable `periodSeconds`." },
      { id: 'B', text: "Configure a `livenessProbe` against `/ready` with a long `initialDelaySeconds`." },
      { id: 'C', text: "Configure a `startupProbe` against `/ready` and leave the Service selector alone." },
      { id: 'D', text: "Configure `publishNotReadyAddresses: true` on the Service that fronts the pods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a `readinessProbe` with appropriate `initialDelaySeconds` and `periodSeconds` checking `/ready`. The kubelet uses `readinessProbes` to determine if a container is ready to accept traffic. If a readiness probe fails, the pod's IP is temporarily removed from the endpoints of all Services matching the pod, preventing user requests from hitting an unready backend.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-readiness-probes",
    tags: ["Readiness Probes","Readiness Probes","Security Compliance"]
  },
  {
    id: "k8s-ckad-359",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Readiness Probes for Traffic Gating: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Readiness Probes to ensure that an application container does not receive incoming network traffic from a Service until its in-memory caches and database connections are fully initialized.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Configure a `readinessProbe` against `/ready` with a suitable `periodSeconds`." },
      { id: 'B', text: "Configure `publishNotReadyAddresses: true` on the Service that fronts the pods." },
      { id: 'C', text: "Configure a `livenessProbe` against `/ready` with a long `initialDelaySeconds`." },
      { id: 'D', text: "Configure a `startupProbe` against `/ready` and leave the Service selector alone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a `readinessProbe` with appropriate `initialDelaySeconds` and `periodSeconds` checking `/ready`. The kubelet uses `readinessProbes` to determine if a container is ready to accept traffic. If a readiness probe fails, the pod's IP is temporarily removed from the endpoints of all Services matching the pod, preventing user requests from hitting an unready backend.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-readiness-probes",
    tags: ["Readiness Probes","Readiness Probes","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-360",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Readiness Probes for Traffic Gating: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Readiness Probes to ensure that an application container does not receive incoming network traffic from a Service until its in-memory caches and database connections are fully initialized.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Configure a `readinessProbe` against `/ready` with a suitable `periodSeconds`." },
      { id: 'B', text: "Configure `publishNotReadyAddresses: true` on the Service that fronts the pods." },
      { id: 'C', text: "Configure a `livenessProbe` against `/ready` with a long `initialDelaySeconds`." },
      { id: 'D', text: "Configure a `startupProbe` against `/ready` and leave the Service selector alone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a `readinessProbe` with appropriate `initialDelaySeconds` and `periodSeconds` checking `/ready`. The kubelet uses `readinessProbes` to determine if a container is ready to accept traffic. If a readiness probe fails, the pod's IP is temporarily removed from the endpoints of all Services matching the pod, preventing user requests from hitting an unready backend.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-readiness-probes",
    tags: ["Readiness Probes","Readiness Probes","Resilience Failure"]
  },
  {
    id: "k8s-ckad-361",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Startup Probes for Slow-Starting Legacy Workloads: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Startup Probes to prevent a legacy monolithic application that takes five minutes to load large datasets on startup from being killed prematurely by liveness probes.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Raise the liveness probe's `initialDelaySeconds` to 600 and leave the other probes as they are." },
      { id: 'B', text: "Define a `startupProbe` with `failureThreshold: 30` and `periodSeconds: 10` on the container." },
      { id: 'C', text: "Raise the liveness probe's `failureThreshold` to 30 so it tolerates the slow load window." },
      { id: 'D', text: "Move the dataset load into a `postStart` hook so it runs before the probes begin." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define a `startupProbe` with `failureThreshold: 30` and `periodSeconds: 10`, disabling liveness checks until the startup probe succeeds. A `startupProbe` verifies whether the application within a container has started. All other probes (liveness and readiness) are disabled until the startup probe succeeds. This allows slow-starting legacy apps to boot without risking premature termination by aggressive liveness probes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-startup-probes",
    tags: ["Startup Probes","Startup Probes","Dr Failover"]
  },
  {
    id: "k8s-ckad-362",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Startup Probes for Slow-Starting Legacy Workloads: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Startup Probes to prevent a legacy monolithic application that takes five minutes to load large datasets on startup from being killed prematurely by liveness probes.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Raise the liveness probe's `failureThreshold` to 30 so it tolerates the slow load window." },
      { id: 'B', text: "Move the dataset load into a `postStart` hook so it runs before the probes begin." },
      { id: 'C', text: "Raise the liveness probe's `initialDelaySeconds` to 600 and leave the other probes as they are." },
      { id: 'D', text: "Define a `startupProbe` with `failureThreshold: 30` and `periodSeconds: 10` on the container." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define a `startupProbe` with `failureThreshold: 30` and `periodSeconds: 10`, disabling liveness checks until the startup probe succeeds. A `startupProbe` verifies whether the application within a container has started. All other probes (liveness and readiness) are disabled until the startup probe succeeds. This allows slow-starting legacy apps to boot without risking premature termination by aggressive liveness probes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-startup-probes",
    tags: ["Startup Probes","Startup Probes","High Load Scale"]
  },
  {
    id: "k8s-ckad-363",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Startup Probes for Slow-Starting Legacy Workloads: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Startup Probes to prevent a legacy monolithic application that takes five minutes to load large datasets on startup from being killed prematurely by liveness probes.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Define a `startupProbe` with `failureThreshold: 30` and `periodSeconds: 10` on the container." },
      { id: 'B', text: "Raise the liveness probe's `failureThreshold` to 30 so it tolerates the slow load window." },
      { id: 'C', text: "Raise the liveness probe's `initialDelaySeconds` to 600 and leave the other probes as they are." },
      { id: 'D', text: "Move the dataset load into a `postStart` hook so it runs before the probes begin." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `startupProbe` with `failureThreshold: 30` and `periodSeconds: 10`, disabling liveness checks until the startup probe succeeds. A `startupProbe` verifies whether the application within a container has started. All other probes (liveness and readiness) are disabled until the startup probe succeeds. This allows slow-starting legacy apps to boot without risking premature termination by aggressive liveness probes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-startup-probes",
    tags: ["Startup Probes","Startup Probes","Security Compliance"]
  },
  {
    id: "k8s-ckad-364",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Startup Probes for Slow-Starting Legacy Workloads: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Startup Probes to prevent a legacy monolithic application that takes five minutes to load large datasets on startup from being killed prematurely by liveness probes.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Define a `startupProbe` with `failureThreshold: 30` and `periodSeconds: 10` on the container." },
      { id: 'B', text: "Raise the liveness probe's `initialDelaySeconds` to 600 and leave the other probes as they are." },
      { id: 'C', text: "Move the dataset load into a `postStart` hook so it runs before the probes begin." },
      { id: 'D', text: "Raise the liveness probe's `failureThreshold` to 30 so it tolerates the slow load window." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `startupProbe` with `failureThreshold: 30` and `periodSeconds: 10`, disabling liveness checks until the startup probe succeeds. A `startupProbe` verifies whether the application within a container has started. All other probes (liveness and readiness) are disabled until the startup probe succeeds. This allows slow-starting legacy apps to boot without risking premature termination by aggressive liveness probes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-startup-probes",
    tags: ["Startup Probes","Startup Probes","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-365",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Startup Probes for Slow-Starting Legacy Workloads: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Startup Probes to prevent a legacy monolithic application that takes five minutes to load large datasets on startup from being killed prematurely by liveness probes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Define a `startupProbe` with `failureThreshold: 30` and `periodSeconds: 10` on the container." },
      { id: 'B', text: "Raise the liveness probe's `initialDelaySeconds` to 600 and leave the other probes as they are." },
      { id: 'C', text: "Move the dataset load into a `postStart` hook so it runs before the probes begin." },
      { id: 'D', text: "Raise the liveness probe's `failureThreshold` to 30 so it tolerates the slow load window." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `startupProbe` with `failureThreshold: 30` and `periodSeconds: 10`, disabling liveness checks until the startup probe succeeds. A `startupProbe` verifies whether the application within a container has started. All other probes (liveness and readiness) are disabled until the startup probe succeeds. This allows slow-starting legacy apps to boot without risking premature termination by aggressive liveness probes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-startup-probes",
    tags: ["Startup Probes","Startup Probes","Resilience Failure"]
  },
  {
    id: "k8s-ckad-366",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Multi-Container Log Streaming with kubectl logs: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Container Logging to view and stream stdout/stderr log output from a specific logging sidecar container running inside a multi-container pod.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Run `kubectl logs &lt;pod&gt; -c &lt;container&gt; -f` to follow that container's stream." },
      { id: 'B', text: "Run `kubectl logs &lt;pod&gt; --all-containers -f` and read the interleaved output." },
      { id: 'C', text: "Run `kubectl logs &lt;pod&gt; --previous -f` to reach the sidecar's own stream." },
      { id: 'D', text: "Run `kubectl attach &lt;pod&gt; -c &lt;container&gt;` to follow its output." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubectl logs &lt;pod-name&gt; -c &lt;container-name&gt; -f` to target the specific container stream. When a pod contains multiple containers, running `kubectl logs` without specifying a container returns an error listing the available container names. Adding `-c &lt;container-name&gt;` targets the exact container, while `-f` follows the stream in real time.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/",
    tags: ["Container Logging","kubectl logs","Dr Failover"]
  },
  {
    id: "k8s-ckad-367",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Multi-Container Log Streaming with kubectl logs: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Container Logging to view and stream stdout/stderr log output from a specific logging sidecar container running inside a multi-container pod.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Run `kubectl logs &lt;pod&gt; --all-containers -f` and read the interleaved output." },
      { id: 'B', text: "Run `kubectl logs &lt;pod&gt; -c &lt;container&gt; -f` to follow that container's stream." },
      { id: 'C', text: "Run `kubectl attach &lt;pod&gt; -c &lt;container&gt;` to follow its output." },
      { id: 'D', text: "Run `kubectl logs &lt;pod&gt; --previous -f` to reach the sidecar's own stream." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute `kubectl logs &lt;pod-name&gt; -c &lt;container-name&gt; -f` to target the specific container stream. When a pod contains multiple containers, running `kubectl logs` without specifying a container returns an error listing the available container names. Adding `-c &lt;container-name&gt;` targets the exact container, while `-f` follows the stream in real time.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/",
    tags: ["Container Logging","kubectl logs","High Load Scale"]
  },
  {
    id: "k8s-ckad-368",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Multi-Container Log Streaming with kubectl logs: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Container Logging to view and stream stdout/stderr log output from a specific logging sidecar container running inside a multi-container pod.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Run `kubectl logs &lt;pod&gt; -c &lt;container&gt; -f` to follow that container's stream." },
      { id: 'B', text: "Run `kubectl logs &lt;pod&gt; --all-containers -f` and read the interleaved output." },
      { id: 'C', text: "Run `kubectl logs &lt;pod&gt; --previous -f` to reach the sidecar's own stream." },
      { id: 'D', text: "Run `kubectl attach &lt;pod&gt; -c &lt;container&gt;` to follow its output." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubectl logs &lt;pod-name&gt; -c &lt;container-name&gt; -f` to target the specific container stream. When a pod contains multiple containers, running `kubectl logs` without specifying a container returns an error listing the available container names. Adding `-c &lt;container-name&gt;` targets the exact container, while `-f` follows the stream in real time.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/",
    tags: ["Container Logging","kubectl logs","Security Compliance"]
  },
  {
    id: "k8s-ckad-369",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Multi-Container Log Streaming with kubectl logs: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Container Logging to view and stream stdout/stderr log output from a specific logging sidecar container running inside a multi-container pod.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Run `kubectl logs &lt;pod&gt; -c &lt;container&gt; -f` to follow that container's stream." },
      { id: 'B', text: "Run `kubectl attach &lt;pod&gt; -c &lt;container&gt;` to follow its output." },
      { id: 'C', text: "Run `kubectl logs &lt;pod&gt; --all-containers -f` and read the interleaved output." },
      { id: 'D', text: "Run `kubectl logs &lt;pod&gt; --previous -f` to reach the sidecar's own stream." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubectl logs &lt;pod-name&gt; -c &lt;container-name&gt; -f` to target the specific container stream. When a pod contains multiple containers, running `kubectl logs` without specifying a container returns an error listing the available container names. Adding `-c &lt;container-name&gt;` targets the exact container, while `-f` follows the stream in real time.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/",
    tags: ["Container Logging","kubectl logs","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-370",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Multi-Container Log Streaming with kubectl logs: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Container Logging to view and stream stdout/stderr log output from a specific logging sidecar container running inside a multi-container pod.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Run `kubectl logs &lt;pod&gt; -c &lt;container&gt; -f` to follow that container's stream." },
      { id: 'B', text: "Run `kubectl logs &lt;pod&gt; --all-containers -f` and read the interleaved output." },
      { id: 'C', text: "Run `kubectl logs &lt;pod&gt; --previous -f` to reach the sidecar's own stream." },
      { id: 'D', text: "Run `kubectl attach &lt;pod&gt; -c &lt;container&gt;` to follow its output." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubectl logs &lt;pod-name&gt; -c &lt;container-name&gt; -f` to target the specific container stream. When a pod contains multiple containers, running `kubectl logs` without specifying a container returns an error listing the available container names. Adding `-c &lt;container-name&gt;` targets the exact container, while `-f` follows the stream in real time.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/",
    tags: ["Container Logging","kubectl logs","Resilience Failure"]
  },
  {
    id: "k8s-ckad-371",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Live Container Debugging with kubectl exec: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Container Inspection to execute an interactive bash shell or network diagnostic command inside a running application container to inspect local configuration files.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Run `kubectl debug -it &lt;pod&gt; --image=busybox` to attach an ephemeral debug container." },
      { id: 'B', text: "Run `kubectl describe pod &lt;pod&gt;` and read the container's mounted configuration from it." },
      { id: 'C', text: "Run `kubectl exec -it &lt;pod&gt; -c &lt;container&gt; -- /bin/sh` to open a shell in the container." },
      { id: 'D', text: "Run `kubectl cp &lt;pod&gt;:/etc /tmp/etc` and inspect the copied files on the workstation." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run `kubectl exec -it &lt;pod-name&gt; -c &lt;container-name&gt; -- /bin/sh` to launch an interactive session. `kubectl exec` executes a command directly inside a running container. Using `-it` allocates a pseudo-TTY and keeps stdin open, enabling interactive debugging sessions (such as `/bin/sh` or curl commands) directly within the container runtime environment.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_exec/",
    tags: ["Container Inspection","kubectl exec","Dr Failover"]
  },
  {
    id: "k8s-ckad-372",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Live Container Debugging with kubectl exec: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Container Inspection to execute an interactive bash shell or network diagnostic command inside a running application container to inspect local configuration files.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Run `kubectl exec -it &lt;pod&gt; -c &lt;container&gt; -- /bin/sh` to open a shell in the container." },
      { id: 'B', text: "Run `kubectl cp &lt;pod&gt;:/etc /tmp/etc` and inspect the copied files on the workstation." },
      { id: 'C', text: "Run `kubectl debug -it &lt;pod&gt; --image=busybox` to attach an ephemeral debug container." },
      { id: 'D', text: "Run `kubectl describe pod &lt;pod&gt;` and read the container's mounted configuration from it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl exec -it &lt;pod-name&gt; -c &lt;container-name&gt; -- /bin/sh` to launch an interactive session. `kubectl exec` executes a command directly inside a running container. Using `-it` allocates a pseudo-TTY and keeps stdin open, enabling interactive debugging sessions (such as `/bin/sh` or curl commands) directly within the container runtime environment.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_exec/",
    tags: ["Container Inspection","kubectl exec","High Load Scale"]
  },
  {
    id: "k8s-ckad-373",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Live Container Debugging with kubectl exec: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Container Inspection to execute an interactive bash shell or network diagnostic command inside a running application container to inspect local configuration files.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Run `kubectl describe pod &lt;pod&gt;` and read the container's mounted configuration from it." },
      { id: 'B', text: "Run `kubectl exec -it &lt;pod&gt; -c &lt;container&gt; -- /bin/sh` to open a shell in the container." },
      { id: 'C', text: "Run `kubectl debug -it &lt;pod&gt; --image=busybox` to attach an ephemeral debug container." },
      { id: 'D', text: "Run `kubectl cp &lt;pod&gt;:/etc /tmp/etc` and inspect the copied files on the workstation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run `kubectl exec -it &lt;pod-name&gt; -c &lt;container-name&gt; -- /bin/sh` to launch an interactive session. `kubectl exec` executes a command directly inside a running container. Using `-it` allocates a pseudo-TTY and keeps stdin open, enabling interactive debugging sessions (such as `/bin/sh` or curl commands) directly within the container runtime environment.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_exec/",
    tags: ["Container Inspection","kubectl exec","Security Compliance"]
  },
  {
    id: "k8s-ckad-374",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Live Container Debugging with kubectl exec: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Container Inspection to execute an interactive bash shell or network diagnostic command inside a running application container to inspect local configuration files.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Run `kubectl exec -it &lt;pod&gt; -c &lt;container&gt; -- /bin/sh` to open a shell in the container." },
      { id: 'B', text: "Run `kubectl cp &lt;pod&gt;:/etc /tmp/etc` and inspect the copied files on the workstation." },
      { id: 'C', text: "Run `kubectl debug -it &lt;pod&gt; --image=busybox` to attach an ephemeral debug container." },
      { id: 'D', text: "Run `kubectl describe pod &lt;pod&gt;` and read the container's mounted configuration from it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl exec -it &lt;pod-name&gt; -c &lt;container-name&gt; -- /bin/sh` to launch an interactive session. `kubectl exec` executes a command directly inside a running container. Using `-it` allocates a pseudo-TTY and keeps stdin open, enabling interactive debugging sessions (such as `/bin/sh` or curl commands) directly within the container runtime environment.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_exec/",
    tags: ["Container Inspection","kubectl exec","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-375",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Live Container Debugging with kubectl exec: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Container Inspection to execute an interactive bash shell or network diagnostic command inside a running application container to inspect local configuration files.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Run `kubectl exec -it &lt;pod&gt; -c &lt;container&gt; -- /bin/sh` to open a shell in the container." },
      { id: 'B', text: "Run `kubectl cp &lt;pod&gt;:/etc /tmp/etc` and inspect the copied files on the workstation." },
      { id: 'C', text: "Run `kubectl debug -it &lt;pod&gt; --image=busybox` to attach an ephemeral debug container." },
      { id: 'D', text: "Run `kubectl describe pod &lt;pod&gt;` and read the container's mounted configuration from it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl exec -it &lt;pod-name&gt; -c &lt;container-name&gt; -- /bin/sh` to launch an interactive session. `kubectl exec` executes a command directly inside a running container. Using `-it` allocates a pseudo-TTY and keeps stdin open, enabling interactive debugging sessions (such as `/bin/sh` or curl commands) directly within the container runtime environment.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_exec/",
    tags: ["Container Inspection","kubectl exec","Resilience Failure"]
  }
];

export default K8S_CKAD_QUESTIONS_15;
