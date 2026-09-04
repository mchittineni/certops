export const K8S_CKAD_QUESTIONS_15 = [
  {
    id: "k8s-ckad-351",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Liveness Probes for Deadlock Detection: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Liveness Probes to detect and automatically restart a web server container that has encountered an internal thread deadlock and stopped serving requests.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Restarting stalled or deadlocked containers using httpGet, tcpSocket, and exec probes is under consideration.",
    options: [
      { id: 'A', text: "Rely on the container runtime process table to detect deadlocks." },
      { id: 'B', text: "Configure a `livenessProbe` in the container spec with an HTTP GET check against `/healthz` or an exec probe." },
      { id: 'C', text: "Manually restart the pod whenever end-user customers complain of timeouts." },
      { id: 'D', text: "Configure a readiness probe without a liveness probe." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a `livenessProbe` in the container spec with an HTTP GET check against `/healthz` or an exec probe. The kubelet uses `livenessProbes` to know when to restart a container. If an application enters a deadlocked state where the process is running but unresponsive, the liveness probe fails, triggering the kubelet to terminate and restart the container.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",
    tags: ["Liveness Probes", "Liveness Probes", "Dr Failover"]
  },
  {
    id: "k8s-ckad-352",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Liveness Probes for Deadlock Detection: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Liveness Probes to detect and automatically restart a web server container that has encountered an internal thread deadlock and stopped serving requests.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Restarting stalled or deadlocked containers using httpGet, tcpSocket, and exec probes is under consideration.",
    options: [
      { id: 'A', text: "Configure a readiness probe without a liveness probe." },
      { id: 'B', text: "Rely on the container runtime process table to detect deadlocks." },
      { id: 'C', text: "Manually restart the pod whenever end-user customers complain of timeouts." },
      { id: 'D', text: "Configure a `livenessProbe` in the container spec with an HTTP GET check against `/healthz` or an exec probe." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a `livenessProbe` in the container spec with an HTTP GET check against `/healthz` or an exec probe. The kubelet uses `livenessProbes` to know when to restart a container. If an application enters a deadlocked state where the process is running but unresponsive, the liveness probe fails, triggering the kubelet to terminate and restart the container.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",
    tags: ["Liveness Probes", "Liveness Probes", "High Load Scale"]
  },
  {
    id: "k8s-ckad-353",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Liveness Probes for Deadlock Detection: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Liveness Probes to detect and automatically restart a web server container that has encountered an internal thread deadlock and stopped serving requests.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Restarting stalled or deadlocked containers using httpGet, tcpSocket, and exec probes is under consideration.",
    options: [
      { id: 'A', text: "Configure a `livenessProbe` in the container spec with an HTTP GET check against `/healthz` or an exec probe." },
      { id: 'B', text: "Configure a readiness probe without a liveness probe." },
      { id: 'C', text: "Rely on the container runtime process table to detect deadlocks." },
      { id: 'D', text: "Manually restart the pod whenever end-user customers complain of timeouts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a `livenessProbe` in the container spec with an HTTP GET check against `/healthz` or an exec probe. The kubelet uses `livenessProbes` to know when to restart a container. If an application enters a deadlocked state where the process is running but unresponsive, the liveness probe fails, triggering the kubelet to terminate and restart the container.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",
    tags: ["Liveness Probes", "Liveness Probes", "Security Compliance"]
  },
  {
    id: "k8s-ckad-354",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Liveness Probes for Deadlock Detection: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Liveness Probes to detect and automatically restart a web server container that has encountered an internal thread deadlock and stopped serving requests.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Restarting stalled or deadlocked containers using httpGet, tcpSocket, and exec probes is under consideration.",
    options: [
      { id: 'A', text: "Configure a `livenessProbe` in the container spec with an HTTP GET check against `/healthz` or an exec probe." },
      { id: 'B', text: "Rely on the container runtime process table to detect deadlocks." },
      { id: 'C', text: "Manually restart the pod whenever end-user customers complain of timeouts." },
      { id: 'D', text: "Configure a readiness probe without a liveness probe." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a `livenessProbe` in the container spec with an HTTP GET check against `/healthz` or an exec probe. The kubelet uses `livenessProbes` to know when to restart a container. If an application enters a deadlocked state where the process is running but unresponsive, the liveness probe fails, triggering the kubelet to terminate and restart the container.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",
    tags: ["Liveness Probes", "Liveness Probes", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-355",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Liveness Probes for Deadlock Detection: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Liveness Probes to detect and automatically restart a web server container that has encountered an internal thread deadlock and stopped serving requests.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Restarting stalled or deadlocked containers using httpGet, tcpSocket, and exec probes is under consideration.",
    options: [
      { id: 'A', text: "Rely on the container runtime process table to detect deadlocks." },
      { id: 'B', text: "Configure a `livenessProbe` in the container spec with an HTTP GET check against `/healthz` or an exec probe." },
      { id: 'C', text: "Manually restart the pod whenever end-user customers complain of timeouts." },
      { id: 'D', text: "Configure a readiness probe without a liveness probe." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a `livenessProbe` in the container spec with an HTTP GET check against `/healthz` or an exec probe. The kubelet uses `livenessProbes` to know when to restart a container. If an application enters a deadlocked state where the process is running but unresponsive, the liveness probe fails, triggering the kubelet to terminate and restart the container.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",
    tags: ["Liveness Probes", "Liveness Probes", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-356",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Readiness Probes for Traffic Gating: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Readiness Probes to ensure that an application container does not receive incoming network traffic from a Service until its in-memory caches and database connections are fully initialized.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Preventing traffic from reaching initializing or overloaded containers is under consideration.",
    options: [
      { id: 'A', text: "Assume the Service will naturally delay traffic until the process opens a port." },
      { id: 'B', text: "Configure a `readinessProbe` with appropriate `initialDelaySeconds` and `periodSeconds` checking `/ready`." },
      { id: 'C', text: "Configure a liveness probe with a 10-minute timeout." },
      { id: 'D', text: "Rely on manual verification before registering pods in DNS." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a `readinessProbe` with appropriate `initialDelaySeconds` and `periodSeconds` checking `/ready`. The kubelet uses `readinessProbes` to determine if a container is ready to accept traffic. If a readiness probe fails, the pod's IP is temporarily removed from the endpoints of all Services matching the pod, preventing user requests from hitting an unready backend.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-readiness-probes",
    tags: ["Readiness Probes", "Readiness Probes", "Dr Failover"]
  },
  {
    id: "k8s-ckad-357",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Readiness Probes for Traffic Gating: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Readiness Probes to ensure that an application container does not receive incoming network traffic from a Service until its in-memory caches and database connections are fully initialized.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Preventing traffic from reaching initializing or overloaded containers is under consideration.",
    options: [
      { id: 'A', text: "Assume the Service will naturally delay traffic until the process opens a port." },
      { id: 'B', text: "Rely on manual verification before registering pods in DNS." },
      { id: 'C', text: "Configure a `readinessProbe` with appropriate `initialDelaySeconds` and `periodSeconds` checking `/ready`." },
      { id: 'D', text: "Configure a liveness probe with a 10-minute timeout." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a `readinessProbe` with appropriate `initialDelaySeconds` and `periodSeconds` checking `/ready`. The kubelet uses `readinessProbes` to determine if a container is ready to accept traffic. If a readiness probe fails, the pod's IP is temporarily removed from the endpoints of all Services matching the pod, preventing user requests from hitting an unready backend.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-readiness-probes",
    tags: ["Readiness Probes", "Readiness Probes", "High Load Scale"]
  },
  {
    id: "k8s-ckad-358",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Readiness Probes for Traffic Gating: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Readiness Probes to ensure that an application container does not receive incoming network traffic from a Service until its in-memory caches and database connections are fully initialized.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Preventing traffic from reaching initializing or overloaded containers is under consideration.",
    options: [
      { id: 'A', text: "Configure a `readinessProbe` with appropriate `initialDelaySeconds` and `periodSeconds` checking `/ready`." },
      { id: 'B', text: "Assume the Service will naturally delay traffic until the process opens a port." },
      { id: 'C', text: "Configure a liveness probe with a 10-minute timeout." },
      { id: 'D', text: "Rely on manual verification before registering pods in DNS." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a `readinessProbe` with appropriate `initialDelaySeconds` and `periodSeconds` checking `/ready`. The kubelet uses `readinessProbes` to determine if a container is ready to accept traffic. If a readiness probe fails, the pod's IP is temporarily removed from the endpoints of all Services matching the pod, preventing user requests from hitting an unready backend.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-readiness-probes",
    tags: ["Readiness Probes", "Readiness Probes", "Security Compliance"]
  },
  {
    id: "k8s-ckad-359",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Readiness Probes for Traffic Gating: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Readiness Probes to ensure that an application container does not receive incoming network traffic from a Service until its in-memory caches and database connections are fully initialized.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Preventing traffic from reaching initializing or overloaded containers is under consideration.",
    options: [
      { id: 'A', text: "Configure a `readinessProbe` with appropriate `initialDelaySeconds` and `periodSeconds` checking `/ready`." },
      { id: 'B', text: "Assume the Service will naturally delay traffic until the process opens a port." },
      { id: 'C', text: "Rely on manual verification before registering pods in DNS." },
      { id: 'D', text: "Configure a liveness probe with a 10-minute timeout." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a `readinessProbe` with appropriate `initialDelaySeconds` and `periodSeconds` checking `/ready`. The kubelet uses `readinessProbes` to determine if a container is ready to accept traffic. If a readiness probe fails, the pod's IP is temporarily removed from the endpoints of all Services matching the pod, preventing user requests from hitting an unready backend.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-readiness-probes",
    tags: ["Readiness Probes", "Readiness Probes", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-360",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Readiness Probes for Traffic Gating: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Readiness Probes to ensure that an application container does not receive incoming network traffic from a Service until its in-memory caches and database connections are fully initialized.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Preventing traffic from reaching initializing or overloaded containers is under consideration.",
    options: [
      { id: 'A', text: "Configure a `readinessProbe` with appropriate `initialDelaySeconds` and `periodSeconds` checking `/ready`." },
      { id: 'B', text: "Rely on manual verification before registering pods in DNS." },
      { id: 'C', text: "Configure a liveness probe with a 10-minute timeout." },
      { id: 'D', text: "Assume the Service will naturally delay traffic until the process opens a port." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a `readinessProbe` with appropriate `initialDelaySeconds` and `periodSeconds` checking `/ready`. The kubelet uses `readinessProbes` to determine if a container is ready to accept traffic. If a readiness probe fails, the pod's IP is temporarily removed from the endpoints of all Services matching the pod, preventing user requests from hitting an unready backend.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-readiness-probes",
    tags: ["Readiness Probes", "Readiness Probes", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-361",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Startup Probes for Slow-Starting Legacy Workloads: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Startup Probes to prevent a legacy monolithic application that takes five minutes to load large datasets on startup from being killed prematurely by liveness probes.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Startup probes protecting slow legacy containers from premature liveness kills is under consideration.",
    options: [
      { id: 'A', text: "Remove all probes from the pod specification entirely." },
      { id: 'B', text: "Run the application without containerization on a bare metal server." },
      { id: 'C', text: "Increase the liveness probe initialDelaySeconds to one hour, disabling crash recovery permanently." },
      { id: 'D', text: "Define a `startupProbe` with `failureThreshold: 30` and `periodSeconds: 10`, disabling liveness checks until the startup probe succeeds." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define a `startupProbe` with `failureThreshold: 30` and `periodSeconds: 10`, disabling liveness checks until the startup probe succeeds. A `startupProbe` verifies whether the application within a container has started. All other probes (liveness and readiness) are disabled until the startup probe succeeds. This allows slow-starting legacy apps to boot without risking premature termination by aggressive liveness probes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-startup-probes",
    tags: ["Startup Probes", "Startup Probes", "Dr Failover"]
  },
  {
    id: "k8s-ckad-362",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Startup Probes for Slow-Starting Legacy Workloads: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Startup Probes to prevent a legacy monolithic application that takes five minutes to load large datasets on startup from being killed prematurely by liveness probes.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Startup probes protecting slow legacy containers from premature liveness kills is under consideration.",
    options: [
      { id: 'A', text: "Remove all probes from the pod specification entirely." },
      { id: 'B', text: "Define a `startupProbe` with `failureThreshold: 30` and `periodSeconds: 10`, disabling liveness checks until the startup probe succeeds." },
      { id: 'C', text: "Run the application without containerization on a bare metal server." },
      { id: 'D', text: "Increase the liveness probe initialDelaySeconds to one hour, disabling crash recovery permanently." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define a `startupProbe` with `failureThreshold: 30` and `periodSeconds: 10`, disabling liveness checks until the startup probe succeeds. A `startupProbe` verifies whether the application within a container has started. All other probes (liveness and readiness) are disabled until the startup probe succeeds. This allows slow-starting legacy apps to boot without risking premature termination by aggressive liveness probes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-startup-probes",
    tags: ["Startup Probes", "Startup Probes", "High Load Scale"]
  },
  {
    id: "k8s-ckad-363",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Startup Probes for Slow-Starting Legacy Workloads: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Startup Probes to prevent a legacy monolithic application that takes five minutes to load large datasets on startup from being killed prematurely by liveness probes.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Startup probes protecting slow legacy containers from premature liveness kills is under consideration.",
    options: [
      { id: 'A', text: "Define a `startupProbe` with `failureThreshold: 30` and `periodSeconds: 10`, disabling liveness checks until the startup probe succeeds." },
      { id: 'B', text: "Remove all probes from the pod specification entirely." },
      { id: 'C', text: "Run the application without containerization on a bare metal server." },
      { id: 'D', text: "Increase the liveness probe initialDelaySeconds to one hour, disabling crash recovery permanently." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `startupProbe` with `failureThreshold: 30` and `periodSeconds: 10`, disabling liveness checks until the startup probe succeeds. A `startupProbe` verifies whether the application within a container has started. All other probes (liveness and readiness) are disabled until the startup probe succeeds. This allows slow-starting legacy apps to boot without risking premature termination by aggressive liveness probes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-startup-probes",
    tags: ["Startup Probes", "Startup Probes", "Security Compliance"]
  },
  {
    id: "k8s-ckad-364",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Startup Probes for Slow-Starting Legacy Workloads: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Startup Probes to prevent a legacy monolithic application that takes five minutes to load large datasets on startup from being killed prematurely by liveness probes.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Startup probes protecting slow legacy containers from premature liveness kills is under consideration.",
    options: [
      { id: 'A', text: "Define a `startupProbe` with `failureThreshold: 30` and `periodSeconds: 10`, disabling liveness checks until the startup probe succeeds." },
      { id: 'B', text: "Increase the liveness probe initialDelaySeconds to one hour, disabling crash recovery permanently." },
      { id: 'C', text: "Remove all probes from the pod specification entirely." },
      { id: 'D', text: "Run the application without containerization on a bare metal server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `startupProbe` with `failureThreshold: 30` and `periodSeconds: 10`, disabling liveness checks until the startup probe succeeds. A `startupProbe` verifies whether the application within a container has started. All other probes (liveness and readiness) are disabled until the startup probe succeeds. This allows slow-starting legacy apps to boot without risking premature termination by aggressive liveness probes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-startup-probes",
    tags: ["Startup Probes", "Startup Probes", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-365",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Startup Probes for Slow-Starting Legacy Workloads: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Startup Probes to prevent a legacy monolithic application that takes five minutes to load large datasets on startup from being killed prematurely by liveness probes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Startup probes protecting slow legacy containers from premature liveness kills is under consideration.",
    options: [
      { id: 'A', text: "Define a `startupProbe` with `failureThreshold: 30` and `periodSeconds: 10`, disabling liveness checks until the startup probe succeeds." },
      { id: 'B', text: "Increase the liveness probe initialDelaySeconds to one hour, disabling crash recovery permanently." },
      { id: 'C', text: "Run the application without containerization on a bare metal server." },
      { id: 'D', text: "Remove all probes from the pod specification entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `startupProbe` with `failureThreshold: 30` and `periodSeconds: 10`, disabling liveness checks until the startup probe succeeds. A `startupProbe` verifies whether the application within a container has started. All other probes (liveness and readiness) are disabled until the startup probe succeeds. This allows slow-starting legacy apps to boot without risking premature termination by aggressive liveness probes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-startup-probes",
    tags: ["Startup Probes", "Startup Probes", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-366",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Multi-Container Log Streaming with kubectl logs: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Container Logging to view and stream stdout/stderr log output from a specific logging sidecar container running inside a multi-container pod.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Streaming logs from specific containers in multi-container pods with -c is under consideration.",
    options: [
      { id: 'A', text: "SSH into the worker node and tail docker JSON log files directly." },
      { id: 'B', text: "Run `kubectl logs &lt;pod-name&gt;` without container flags and accept the command failure." },
      { id: 'C', text: "Execute `kubectl logs &lt;pod-name&gt; -c &lt;container-name&gt; -f` to target the specific container stream." },
      { id: 'D', text: "Reboot the pod to print all logs to the master node console." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `kubectl logs &lt;pod-name&gt; -c &lt;container-name&gt; -f` to target the specific container stream. When a pod contains multiple containers, running `kubectl logs` without specifying a container returns an error listing the available container names. Adding `-c &lt;container-name&gt;` targets the exact container, while `-f` follows the stream in real time.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/",
    tags: ["Container Logging", "kubectl logs", "Dr Failover"]
  },
  {
    id: "k8s-ckad-367",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Multi-Container Log Streaming with kubectl logs: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Container Logging to view and stream stdout/stderr log output from a specific logging sidecar container running inside a multi-container pod.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Streaming logs from specific containers in multi-container pods with -c is under consideration.",
    options: [
      { id: 'A', text: "Reboot the pod to print all logs to the master node console." },
      { id: 'B', text: "SSH into the worker node and tail docker JSON log files directly." },
      { id: 'C', text: "Execute `kubectl logs &lt;pod-name&gt; -c &lt;container-name&gt; -f` to target the specific container stream." },
      { id: 'D', text: "Run `kubectl logs &lt;pod-name&gt;` without container flags and accept the command failure." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `kubectl logs &lt;pod-name&gt; -c &lt;container-name&gt; -f` to target the specific container stream. When a pod contains multiple containers, running `kubectl logs` without specifying a container returns an error listing the available container names. Adding `-c &lt;container-name&gt;` targets the exact container, while `-f` follows the stream in real time.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/",
    tags: ["Container Logging", "kubectl logs", "High Load Scale"]
  },
  {
    id: "k8s-ckad-368",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Multi-Container Log Streaming with kubectl logs: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Container Logging to view and stream stdout/stderr log output from a specific logging sidecar container running inside a multi-container pod.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Streaming logs from specific containers in multi-container pods with -c is under consideration.",
    options: [
      { id: 'A', text: "Execute `kubectl logs &lt;pod-name&gt; -c &lt;container-name&gt; -f` to target the specific container stream." },
      { id: 'B', text: "Reboot the pod to print all logs to the master node console." },
      { id: 'C', text: "SSH into the worker node and tail docker JSON log files directly." },
      { id: 'D', text: "Run `kubectl logs &lt;pod-name&gt;` without container flags and accept the command failure." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubectl logs &lt;pod-name&gt; -c &lt;container-name&gt; -f` to target the specific container stream. When a pod contains multiple containers, running `kubectl logs` without specifying a container returns an error listing the available container names. Adding `-c &lt;container-name&gt;` targets the exact container, while `-f` follows the stream in real time.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/",
    tags: ["Container Logging", "kubectl logs", "Security Compliance"]
  },
  {
    id: "k8s-ckad-369",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Multi-Container Log Streaming with kubectl logs: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Container Logging to view and stream stdout/stderr log output from a specific logging sidecar container running inside a multi-container pod.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Streaming logs from specific containers in multi-container pods with -c is under consideration.",
    options: [
      { id: 'A', text: "Execute `kubectl logs &lt;pod-name&gt; -c &lt;container-name&gt; -f` to target the specific container stream." },
      { id: 'B', text: "SSH into the worker node and tail docker JSON log files directly." },
      { id: 'C', text: "Reboot the pod to print all logs to the master node console." },
      { id: 'D', text: "Run `kubectl logs &lt;pod-name&gt;` without container flags and accept the command failure." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubectl logs &lt;pod-name&gt; -c &lt;container-name&gt; -f` to target the specific container stream. When a pod contains multiple containers, running `kubectl logs` without specifying a container returns an error listing the available container names. Adding `-c &lt;container-name&gt;` targets the exact container, while `-f` follows the stream in real time.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/",
    tags: ["Container Logging", "kubectl logs", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-370",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Multi-Container Log Streaming with kubectl logs: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Container Logging to view and stream stdout/stderr log output from a specific logging sidecar container running inside a multi-container pod.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Streaming logs from specific containers in multi-container pods with -c is under consideration.",
    options: [
      { id: 'A', text: "Reboot the pod to print all logs to the master node console." },
      { id: 'B', text: "SSH into the worker node and tail docker JSON log files directly." },
      { id: 'C', text: "Run `kubectl logs &lt;pod-name&gt;` without container flags and accept the command failure." },
      { id: 'D', text: "Execute `kubectl logs &lt;pod-name&gt; -c &lt;container-name&gt; -f` to target the specific container stream." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute `kubectl logs &lt;pod-name&gt; -c &lt;container-name&gt; -f` to target the specific container stream. When a pod contains multiple containers, running `kubectl logs` without specifying a container returns an error listing the available container names. Adding `-c &lt;container-name&gt;` targets the exact container, while `-f` follows the stream in real time.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/",
    tags: ["Container Logging", "kubectl logs", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-371",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Live Container Debugging with kubectl exec: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Container Inspection to execute an interactive bash shell or network diagnostic command inside a running application container to inspect local configuration files.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Executing interactive commands inside running containers for debugging is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl describe pod` to view container filesystem contents." },
      { id: 'B', text: "Run `kubectl exec -it &lt;pod-name&gt; -c &lt;container-name&gt; -- /bin/sh` to launch an interactive session." },
      { id: 'C', text: "Modify the pod manifest to add a telnet daemon and redeploy." },
      { id: 'D', text: "Log in to the cloud provider console and restart the virtual machine." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run `kubectl exec -it &lt;pod-name&gt; -c &lt;container-name&gt; -- /bin/sh` to launch an interactive session. `kubectl exec` executes a command directly inside a running container. Using `-it` allocates a pseudo-TTY and keeps stdin open, enabling interactive debugging sessions (such as `/bin/sh` or curl commands) directly within the container runtime environment.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_exec/",
    tags: ["Container Inspection", "kubectl exec", "Dr Failover"]
  },
  {
    id: "k8s-ckad-372",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Live Container Debugging with kubectl exec: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Container Inspection to execute an interactive bash shell or network diagnostic command inside a running application container to inspect local configuration files.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Executing interactive commands inside running containers for debugging is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl exec -it &lt;pod-name&gt; -c &lt;container-name&gt; -- /bin/sh` to launch an interactive session." },
      { id: 'B', text: "Modify the pod manifest to add a telnet daemon and redeploy." },
      { id: 'C', text: "Log in to the cloud provider console and restart the virtual machine." },
      { id: 'D', text: "Run `kubectl describe pod` to view container filesystem contents." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl exec -it &lt;pod-name&gt; -c &lt;container-name&gt; -- /bin/sh` to launch an interactive session. `kubectl exec` executes a command directly inside a running container. Using `-it` allocates a pseudo-TTY and keeps stdin open, enabling interactive debugging sessions (such as `/bin/sh` or curl commands) directly within the container runtime environment.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_exec/",
    tags: ["Container Inspection", "kubectl exec", "High Load Scale"]
  },
  {
    id: "k8s-ckad-373",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Live Container Debugging with kubectl exec: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Container Inspection to execute an interactive bash shell or network diagnostic command inside a running application container to inspect local configuration files.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Executing interactive commands inside running containers for debugging is under consideration.",
    options: [
      { id: 'A', text: "Modify the pod manifest to add a telnet daemon and redeploy." },
      { id: 'B', text: "Run `kubectl describe pod` to view container filesystem contents." },
      { id: 'C', text: "Log in to the cloud provider console and restart the virtual machine." },
      { id: 'D', text: "Run `kubectl exec -it &lt;pod-name&gt; -c &lt;container-name&gt; -- /bin/sh` to launch an interactive session." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Run `kubectl exec -it &lt;pod-name&gt; -c &lt;container-name&gt; -- /bin/sh` to launch an interactive session. `kubectl exec` executes a command directly inside a running container. Using `-it` allocates a pseudo-TTY and keeps stdin open, enabling interactive debugging sessions (such as `/bin/sh` or curl commands) directly within the container runtime environment.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_exec/",
    tags: ["Container Inspection", "kubectl exec", "Security Compliance"]
  },
  {
    id: "k8s-ckad-374",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Live Container Debugging with kubectl exec: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Container Inspection to execute an interactive bash shell or network diagnostic command inside a running application container to inspect local configuration files.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Executing interactive commands inside running containers for debugging is under consideration.",
    options: [
      { id: 'A', text: "Log in to the cloud provider console and restart the virtual machine." },
      { id: 'B', text: "Modify the pod manifest to add a telnet daemon and redeploy." },
      { id: 'C', text: "Run `kubectl exec -it &lt;pod-name&gt; -c &lt;container-name&gt; -- /bin/sh` to launch an interactive session." },
      { id: 'D', text: "Run `kubectl describe pod` to view container filesystem contents." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run `kubectl exec -it &lt;pod-name&gt; -c &lt;container-name&gt; -- /bin/sh` to launch an interactive session. `kubectl exec` executes a command directly inside a running container. Using `-it` allocates a pseudo-TTY and keeps stdin open, enabling interactive debugging sessions (such as `/bin/sh` or curl commands) directly within the container runtime environment.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_exec/",
    tags: ["Container Inspection", "kubectl exec", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-375",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Live Container Debugging with kubectl exec: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Container Inspection to execute an interactive bash shell or network diagnostic command inside a running application container to inspect local configuration files.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Executing interactive commands inside running containers for debugging is under consideration.",
    options: [
      { id: 'A', text: "Modify the pod manifest to add a telnet daemon and redeploy." },
      { id: 'B', text: "Run `kubectl exec -it &lt;pod-name&gt; -c &lt;container-name&gt; -- /bin/sh` to launch an interactive session." },
      { id: 'C', text: "Log in to the cloud provider console and restart the virtual machine." },
      { id: 'D', text: "Run `kubectl describe pod` to view container filesystem contents." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run `kubectl exec -it &lt;pod-name&gt; -c &lt;container-name&gt; -- /bin/sh` to launch an interactive session. `kubectl exec` executes a command directly inside a running container. Using `-it` allocates a pseudo-TTY and keeps stdin open, enabling interactive debugging sessions (such as `/bin/sh` or curl commands) directly within the container runtime environment.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_exec/",
    tags: ["Container Inspection", "kubectl exec", "Resilience Failure"]
  }
];

export default K8S_CKAD_QUESTIONS_15;
