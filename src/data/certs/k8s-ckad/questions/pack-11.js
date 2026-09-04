export const K8S_CKAD_QUESTIONS_11 = [
  {
    id: "k8s-ckad-251",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Sidecar: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Sidecar Pattern to collect, filter, and stream application log files from a shared volume to an external logging service without modifying application source code.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Sidecar container enhancing or extending main application functionality is under consideration.",
    options: [
      { id: 'A', text: "Run a separate CronJob that SSHs into the node every minute to copy logs." },
      { id: 'B', text: "Merge the logging daemon code directly into the application binary repository." },
      { id: 'C', text: "Add a sidecar container to the pod sharing an `emptyDir` volume with the main application container to stream log data." },
      { id: 'D', text: "Require the application container to execute with full root privileges." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add a sidecar container to the pod sharing an `emptyDir` volume with the main application container to stream log data. The sidecar pattern deploys a helper container alongside the primary application container in the same pod. By sharing a local `emptyDir` volume, the sidecar can read log files emitted by the primary application and stream them asynchronously to external destinations without touching application code.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/#how-pods-manage-multiple-containers",
    tags: ["Sidecar Pattern", "Sidecar Pattern", "Dr Failover"]
  },
  {
    id: "k8s-ckad-252",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Sidecar: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Sidecar Pattern to collect, filter, and stream application log files from a shared volume to an external logging service without modifying application source code.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Sidecar container enhancing or extending main application functionality is under consideration.",
    options: [
      { id: 'A', text: "Run a separate CronJob that SSHs into the node every minute to copy logs." },
      { id: 'B', text: "Add a sidecar container to the pod sharing an `emptyDir` volume with the main application container to stream log data." },
      { id: 'C', text: "Require the application container to execute with full root privileges." },
      { id: 'D', text: "Merge the logging daemon code directly into the application binary repository." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add a sidecar container to the pod sharing an `emptyDir` volume with the main application container to stream log data. The sidecar pattern deploys a helper container alongside the primary application container in the same pod. By sharing a local `emptyDir` volume, the sidecar can read log files emitted by the primary application and stream them asynchronously to external destinations without touching application code.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/#how-pods-manage-multiple-containers",
    tags: ["Sidecar Pattern", "Sidecar Pattern", "High Load Scale"]
  },
  {
    id: "k8s-ckad-253",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Sidecar: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Sidecar Pattern to collect, filter, and stream application log files from a shared volume to an external logging service without modifying application source code.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Sidecar container enhancing or extending main application functionality is under consideration.",
    options: [
      { id: 'A', text: "Run a separate CronJob that SSHs into the node every minute to copy logs." },
      { id: 'B', text: "Require the application container to execute with full root privileges." },
      { id: 'C', text: "Add a sidecar container to the pod sharing an `emptyDir` volume with the main application container to stream log data." },
      { id: 'D', text: "Merge the logging daemon code directly into the application binary repository." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add a sidecar container to the pod sharing an `emptyDir` volume with the main application container to stream log data. The sidecar pattern deploys a helper container alongside the primary application container in the same pod. By sharing a local `emptyDir` volume, the sidecar can read log files emitted by the primary application and stream them asynchronously to external destinations without touching application code.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/#how-pods-manage-multiple-containers",
    tags: ["Sidecar Pattern", "Sidecar Pattern", "Security Compliance"]
  },
  {
    id: "k8s-ckad-254",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Sidecar: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Sidecar Pattern to collect, filter, and stream application log files from a shared volume to an external logging service without modifying application source code.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Sidecar container enhancing or extending main application functionality is under consideration.",
    options: [
      { id: 'A', text: "Require the application container to execute with full root privileges." },
      { id: 'B', text: "Add a sidecar container to the pod sharing an `emptyDir` volume with the main application container to stream log data." },
      { id: 'C', text: "Merge the logging daemon code directly into the application binary repository." },
      { id: 'D', text: "Run a separate CronJob that SSHs into the node every minute to copy logs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add a sidecar container to the pod sharing an `emptyDir` volume with the main application container to stream log data. The sidecar pattern deploys a helper container alongside the primary application container in the same pod. By sharing a local `emptyDir` volume, the sidecar can read log files emitted by the primary application and stream them asynchronously to external destinations without touching application code.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/#how-pods-manage-multiple-containers",
    tags: ["Sidecar Pattern", "Sidecar Pattern", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-255",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Sidecar: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Sidecar Pattern to collect, filter, and stream application log files from a shared volume to an external logging service without modifying application source code.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Sidecar container enhancing or extending main application functionality is under consideration.",
    options: [
      { id: 'A', text: "Add a sidecar container to the pod sharing an `emptyDir` volume with the main application container to stream log data." },
      { id: 'B', text: "Merge the logging daemon code directly into the application binary repository." },
      { id: 'C', text: "Require the application container to execute with full root privileges." },
      { id: 'D', text: "Run a separate CronJob that SSHs into the node every minute to copy logs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add a sidecar container to the pod sharing an `emptyDir` volume with the main application container to stream log data. The sidecar pattern deploys a helper container alongside the primary application container in the same pod. By sharing a local `emptyDir` volume, the sidecar can read log files emitted by the primary application and stream them asynchronously to external destinations without touching application code.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/#how-pods-manage-multiple-containers",
    tags: ["Sidecar Pattern", "Sidecar Pattern", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-256",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Ambassador: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Ambassador Pattern to decouple an application container from the complexities of connecting to an external database cluster with custom sharding and read-write split logic.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Ambassador container proxying outbound network connections to external services is under consideration.",
    options: [
      { id: 'A', text: "Hardcode all external database replica IP addresses directly into the application container environment." },
      { id: 'B', text: "Expose the database cluster directly over the public internet without credentials." },
      { id: 'C', text: "Deploy the database inside the same pod as the application." },
      { id: 'D', text: "Deploy an ambassador container in the pod that listens on localhost and transparently proxies connections to the appropriate external database instances." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy an ambassador container in the pod that listens on localhost and transparently proxies connections to the appropriate external database instances. The ambassador pattern uses a helper container to proxy outbound network communication on behalf of the main application. The application simply connects to `localhost:&lt;port&gt;`, and the ambassador handles connection pooling, TLS termination, sharding logic, and failover transparently.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Ambassador Pattern", "Ambassador Pattern", "Dr Failover"]
  },
  {
    id: "k8s-ckad-257",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Ambassador: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Ambassador Pattern to decouple an application container from the complexities of connecting to an external database cluster with custom sharding and read-write split logic.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Ambassador container proxying outbound network connections to external services is under consideration.",
    options: [
      { id: 'A', text: "Deploy an ambassador container in the pod that listens on localhost and transparently proxies connections to the appropriate external database instances." },
      { id: 'B', text: "Deploy the database inside the same pod as the application." },
      { id: 'C', text: "Expose the database cluster directly over the public internet without credentials." },
      { id: 'D', text: "Hardcode all external database replica IP addresses directly into the application container environment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an ambassador container in the pod that listens on localhost and transparently proxies connections to the appropriate external database instances. The ambassador pattern uses a helper container to proxy outbound network communication on behalf of the main application. The application simply connects to `localhost:&lt;port&gt;`, and the ambassador handles connection pooling, TLS termination, sharding logic, and failover transparently.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Ambassador Pattern", "Ambassador Pattern", "High Load Scale"]
  },
  {
    id: "k8s-ckad-258",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Ambassador: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Ambassador Pattern to decouple an application container from the complexities of connecting to an external database cluster with custom sharding and read-write split logic.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Ambassador container proxying outbound network connections to external services is under consideration.",
    options: [
      { id: 'A', text: "Hardcode all external database replica IP addresses directly into the application container environment." },
      { id: 'B', text: "Deploy the database inside the same pod as the application." },
      { id: 'C', text: "Expose the database cluster directly over the public internet without credentials." },
      { id: 'D', text: "Deploy an ambassador container in the pod that listens on localhost and transparently proxies connections to the appropriate external database instances." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy an ambassador container in the pod that listens on localhost and transparently proxies connections to the appropriate external database instances. The ambassador pattern uses a helper container to proxy outbound network communication on behalf of the main application. The application simply connects to `localhost:&lt;port&gt;`, and the ambassador handles connection pooling, TLS termination, sharding logic, and failover transparently.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Ambassador Pattern", "Ambassador Pattern", "Security Compliance"]
  },
  {
    id: "k8s-ckad-259",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Ambassador: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Ambassador Pattern to decouple an application container from the complexities of connecting to an external database cluster with custom sharding and read-write split logic.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Ambassador container proxying outbound network connections to external services is under consideration.",
    options: [
      { id: 'A', text: "Expose the database cluster directly over the public internet without credentials." },
      { id: 'B', text: "Deploy the database inside the same pod as the application." },
      { id: 'C', text: "Hardcode all external database replica IP addresses directly into the application container environment." },
      { id: 'D', text: "Deploy an ambassador container in the pod that listens on localhost and transparently proxies connections to the appropriate external database instances." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy an ambassador container in the pod that listens on localhost and transparently proxies connections to the appropriate external database instances. The ambassador pattern uses a helper container to proxy outbound network communication on behalf of the main application. The application simply connects to `localhost:&lt;port&gt;`, and the ambassador handles connection pooling, TLS termination, sharding logic, and failover transparently.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Ambassador Pattern", "Ambassador Pattern", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-260",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Ambassador: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Ambassador Pattern to decouple an application container from the complexities of connecting to an external database cluster with custom sharding and read-write split logic.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Ambassador container proxying outbound network connections to external services is under consideration.",
    options: [
      { id: 'A', text: "Deploy an ambassador container in the pod that listens on localhost and transparently proxies connections to the appropriate external database instances." },
      { id: 'B', text: "Hardcode all external database replica IP addresses directly into the application container environment." },
      { id: 'C', text: "Expose the database cluster directly over the public internet without credentials." },
      { id: 'D', text: "Deploy the database inside the same pod as the application." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an ambassador container in the pod that listens on localhost and transparently proxies connections to the appropriate external database instances. The ambassador pattern uses a helper container to proxy outbound network communication on behalf of the main application. The application simply connects to `localhost:&lt;port&gt;`, and the ambassador handles connection pooling, TLS termination, sharding logic, and failover transparently.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Ambassador Pattern", "Ambassador Pattern", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-261",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Adapter: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Adapter Pattern to standardize legacy application telemetry and custom metrics into Prometheus-compliant format without rewriting legacy application code.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Adapter container standardizing heterogeneous application outputs into uniform metrics is under consideration.",
    options: [
      { id: 'A', text: "Deploy an adapter container in the pod that scrapes the legacy application output, transforms it into Prometheus exposition format, and exposes it on port 9090." },
      { id: 'B', text: "Disable all metric collection across the application deployment." },
      { id: 'C', text: "Require external monitoring servers to parse non-standard raw application outputs manually." },
      { id: 'D', text: "Replace the legacy application with an entirely new codebase immediately." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an adapter container in the pod that scrapes the legacy application output, transforms it into Prometheus exposition format, and exposes it on port 9090. The adapter pattern standardizes or normalizes the output of an application container to conform to cluster standards. A common use case is an adapter that reads proprietary metrics or logs and exposes them in standard Prometheus or OpenTelemetry format for cluster-wide scraping.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Adapter Pattern", "Adapter Pattern", "Dr Failover"]
  },
  {
    id: "k8s-ckad-262",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Adapter: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Adapter Pattern to standardize legacy application telemetry and custom metrics into Prometheus-compliant format without rewriting legacy application code.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Adapter container standardizing heterogeneous application outputs into uniform metrics is under consideration.",
    options: [
      { id: 'A', text: "Require external monitoring servers to parse non-standard raw application outputs manually." },
      { id: 'B', text: "Deploy an adapter container in the pod that scrapes the legacy application output, transforms it into Prometheus exposition format, and exposes it on port 9090." },
      { id: 'C', text: "Replace the legacy application with an entirely new codebase immediately." },
      { id: 'D', text: "Disable all metric collection across the application deployment." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an adapter container in the pod that scrapes the legacy application output, transforms it into Prometheus exposition format, and exposes it on port 9090. The adapter pattern standardizes or normalizes the output of an application container to conform to cluster standards. A common use case is an adapter that reads proprietary metrics or logs and exposes them in standard Prometheus or OpenTelemetry format for cluster-wide scraping.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Adapter Pattern", "Adapter Pattern", "High Load Scale"]
  },
  {
    id: "k8s-ckad-263",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Adapter: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Adapter Pattern to standardize legacy application telemetry and custom metrics into Prometheus-compliant format without rewriting legacy application code.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Adapter container standardizing heterogeneous application outputs into uniform metrics is under consideration.",
    options: [
      { id: 'A', text: "Replace the legacy application with an entirely new codebase immediately." },
      { id: 'B', text: "Deploy an adapter container in the pod that scrapes the legacy application output, transforms it into Prometheus exposition format, and exposes it on port 9090." },
      { id: 'C', text: "Disable all metric collection across the application deployment." },
      { id: 'D', text: "Require external monitoring servers to parse non-standard raw application outputs manually." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an adapter container in the pod that scrapes the legacy application output, transforms it into Prometheus exposition format, and exposes it on port 9090. The adapter pattern standardizes or normalizes the output of an application container to conform to cluster standards. A common use case is an adapter that reads proprietary metrics or logs and exposes them in standard Prometheus or OpenTelemetry format for cluster-wide scraping.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Adapter Pattern", "Adapter Pattern", "Security Compliance"]
  },
  {
    id: "k8s-ckad-264",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Adapter: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Adapter Pattern to standardize legacy application telemetry and custom metrics into Prometheus-compliant format without rewriting legacy application code.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Adapter container standardizing heterogeneous application outputs into uniform metrics is under consideration.",
    options: [
      { id: 'A', text: "Require external monitoring servers to parse non-standard raw application outputs manually." },
      { id: 'B', text: "Disable all metric collection across the application deployment." },
      { id: 'C', text: "Deploy an adapter container in the pod that scrapes the legacy application output, transforms it into Prometheus exposition format, and exposes it on port 9090." },
      { id: 'D', text: "Replace the legacy application with an entirely new codebase immediately." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an adapter container in the pod that scrapes the legacy application output, transforms it into Prometheus exposition format, and exposes it on port 9090. The adapter pattern standardizes or normalizes the output of an application container to conform to cluster standards. A common use case is an adapter that reads proprietary metrics or logs and exposes them in standard Prometheus or OpenTelemetry format for cluster-wide scraping.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Adapter Pattern", "Adapter Pattern", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-265",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Adapter: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Adapter Pattern to standardize legacy application telemetry and custom metrics into Prometheus-compliant format without rewriting legacy application code.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Adapter container standardizing heterogeneous application outputs into uniform metrics is under consideration.",
    options: [
      { id: 'A', text: "Disable all metric collection across the application deployment." },
      { id: 'B', text: "Deploy an adapter container in the pod that scrapes the legacy application output, transforms it into Prometheus exposition format, and exposes it on port 9090." },
      { id: 'C', text: "Replace the legacy application with an entirely new codebase immediately." },
      { id: 'D', text: "Require external monitoring servers to parse non-standard raw application outputs manually." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an adapter container in the pod that scrapes the legacy application output, transforms it into Prometheus exposition format, and exposes it on port 9090. The adapter pattern standardizes or normalizes the output of an application container to conform to cluster standards. A common use case is an adapter that reads proprietary metrics or logs and exposes them in standard Prometheus or OpenTelemetry format for cluster-wide scraping.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Adapter Pattern", "Adapter Pattern", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-266",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Init Containers for Startup Initialization: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Init Containers to ensure a web application container does not start until a backend database service is fully reachable and database schema migrations have executed.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Sequential initialization tasks running to completion before app containers start is under consideration.",
    options: [
      { id: 'A', text: "Manually start the application container after observing database startup." },
      { id: 'B', text: "Configure an `initContainers` block in the pod spec to run connectivity checks and migration scripts before the application container launches." },
      { id: 'C', text: "Deploy the database and application simultaneously without sequencing." },
      { id: 'D', text: "Put an infinite retry sleep loop inside the main container's entrypoint script." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an `initContainers` block in the pod spec to run connectivity checks and migration scripts before the application container launches. Init containers run sequentially to completion before any application containers in the pod are started. If an init container fails, the kubelet restarts the pod until it succeeds, guaranteeing that prerequisites (like database readiness, seed data, or schema migrations) are satisfied first.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/init-containers/",
    tags: ["Init Containers", "Init Containers", "Dr Failover"]
  },
  {
    id: "k8s-ckad-267",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Init Containers for Startup Initialization: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Init Containers to ensure a web application container does not start until a backend database service is fully reachable and database schema migrations have executed.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Sequential initialization tasks running to completion before app containers start is under consideration.",
    options: [
      { id: 'A', text: "Manually start the application container after observing database startup." },
      { id: 'B', text: "Put an infinite retry sleep loop inside the main container's entrypoint script." },
      { id: 'C', text: "Deploy the database and application simultaneously without sequencing." },
      { id: 'D', text: "Configure an `initContainers` block in the pod spec to run connectivity checks and migration scripts before the application container launches." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an `initContainers` block in the pod spec to run connectivity checks and migration scripts before the application container launches. Init containers run sequentially to completion before any application containers in the pod are started. If an init container fails, the kubelet restarts the pod until it succeeds, guaranteeing that prerequisites (like database readiness, seed data, or schema migrations) are satisfied first.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/init-containers/",
    tags: ["Init Containers", "Init Containers", "High Load Scale"]
  },
  {
    id: "k8s-ckad-268",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Init Containers for Startup Initialization: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Init Containers to ensure a web application container does not start until a backend database service is fully reachable and database schema migrations have executed.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Sequential initialization tasks running to completion before app containers start is under consideration.",
    options: [
      { id: 'A', text: "Manually start the application container after observing database startup." },
      { id: 'B', text: "Put an infinite retry sleep loop inside the main container's entrypoint script." },
      { id: 'C', text: "Deploy the database and application simultaneously without sequencing." },
      { id: 'D', text: "Configure an `initContainers` block in the pod spec to run connectivity checks and migration scripts before the application container launches." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an `initContainers` block in the pod spec to run connectivity checks and migration scripts before the application container launches. Init containers run sequentially to completion before any application containers in the pod are started. If an init container fails, the kubelet restarts the pod until it succeeds, guaranteeing that prerequisites (like database readiness, seed data, or schema migrations) are satisfied first.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/init-containers/",
    tags: ["Init Containers", "Init Containers", "Security Compliance"]
  },
  {
    id: "k8s-ckad-269",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Init Containers for Startup Initialization: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Init Containers to ensure a web application container does not start until a backend database service is fully reachable and database schema migrations have executed.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Sequential initialization tasks running to completion before app containers start is under consideration.",
    options: [
      { id: 'A', text: "Put an infinite retry sleep loop inside the main container's entrypoint script." },
      { id: 'B', text: "Configure an `initContainers` block in the pod spec to run connectivity checks and migration scripts before the application container launches." },
      { id: 'C', text: "Manually start the application container after observing database startup." },
      { id: 'D', text: "Deploy the database and application simultaneously without sequencing." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an `initContainers` block in the pod spec to run connectivity checks and migration scripts before the application container launches. Init containers run sequentially to completion before any application containers in the pod are started. If an init container fails, the kubelet restarts the pod until it succeeds, guaranteeing that prerequisites (like database readiness, seed data, or schema migrations) are satisfied first.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/init-containers/",
    tags: ["Init Containers", "Init Containers", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-270",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Init Containers for Startup Initialization: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Init Containers to ensure a web application container does not start until a backend database service is fully reachable and database schema migrations have executed.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Sequential initialization tasks running to completion before app containers start is under consideration.",
    options: [
      { id: 'A', text: "Manually start the application container after observing database startup." },
      { id: 'B', text: "Put an infinite retry sleep loop inside the main container's entrypoint script." },
      { id: 'C', text: "Deploy the database and application simultaneously without sequencing." },
      { id: 'D', text: "Configure an `initContainers` block in the pod spec to run connectivity checks and migration scripts before the application container launches." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an `initContainers` block in the pod spec to run connectivity checks and migration scripts before the application container launches. Init containers run sequentially to completion before any application containers in the pod are started. If an init container fails, the kubelet restarts the pod until it succeeds, guaranteeing that prerequisites (like database readiness, seed data, or schema migrations) are satisfied first.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/init-containers/",
    tags: ["Init Containers", "Init Containers", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-271",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Native Sidecar Containers (RestartPolicy: Always): Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Native Sidecars to run a proxy container that starts before the main application starts and remains running continuously throughout the entire pod lifecycle.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Native Kubernetes sidecar containers in initContainers with restartPolicy Always is under consideration.",
    options: [
      { id: 'A', text: "Define the proxy in `initContainers` with `restartPolicy: Always`, ensuring it starts first and continues running alongside application containers." },
      { id: 'B', text: "Define the proxy as a standard container and hope it starts before the main container." },
      { id: 'C', text: "Run the proxy as a host operating system process on the worker node." },
      { id: 'D', text: "Write a custom controller to restart dead sidecar containers every thirty seconds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the proxy in `initContainers` with `restartPolicy: Always`, ensuring it starts first and continues running alongside application containers. Kubernetes supports native sidecar containers defined within `initContainers` with `restartPolicy: Always`. The kubelet starts these containers sequentially before main application containers, but does not wait for them to terminate; they run continuously for the pod lifetime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/",
    tags: ["Native Sidecars", "Native Sidecars", "Dr Failover"]
  },
  {
    id: "k8s-ckad-272",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Native Sidecar Containers (RestartPolicy: Always): High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Native Sidecars to run a proxy container that starts before the main application starts and remains running continuously throughout the entire pod lifecycle.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Native Kubernetes sidecar containers in initContainers with restartPolicy Always is under consideration.",
    options: [
      { id: 'A', text: "Write a custom controller to restart dead sidecar containers every thirty seconds." },
      { id: 'B', text: "Define the proxy as a standard container and hope it starts before the main container." },
      { id: 'C', text: "Run the proxy as a host operating system process on the worker node." },
      { id: 'D', text: "Define the proxy in `initContainers` with `restartPolicy: Always`, ensuring it starts first and continues running alongside application containers." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define the proxy in `initContainers` with `restartPolicy: Always`, ensuring it starts first and continues running alongside application containers. Kubernetes supports native sidecar containers defined within `initContainers` with `restartPolicy: Always`. The kubelet starts these containers sequentially before main application containers, but does not wait for them to terminate; they run continuously for the pod lifetime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/",
    tags: ["Native Sidecars", "Native Sidecars", "High Load Scale"]
  },
  {
    id: "k8s-ckad-273",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Native Sidecar Containers (RestartPolicy: Always): Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Native Sidecars to run a proxy container that starts before the main application starts and remains running continuously throughout the entire pod lifecycle.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Native Kubernetes sidecar containers in initContainers with restartPolicy Always is under consideration.",
    options: [
      { id: 'A', text: "Write a custom controller to restart dead sidecar containers every thirty seconds." },
      { id: 'B', text: "Define the proxy as a standard container and hope it starts before the main container." },
      { id: 'C', text: "Define the proxy in `initContainers` with `restartPolicy: Always`, ensuring it starts first and continues running alongside application containers." },
      { id: 'D', text: "Run the proxy as a host operating system process on the worker node." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define the proxy in `initContainers` with `restartPolicy: Always`, ensuring it starts first and continues running alongside application containers. Kubernetes supports native sidecar containers defined within `initContainers` with `restartPolicy: Always`. The kubelet starts these containers sequentially before main application containers, but does not wait for them to terminate; they run continuously for the pod lifetime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/",
    tags: ["Native Sidecars", "Native Sidecars", "Security Compliance"]
  },
  {
    id: "k8s-ckad-274",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Native Sidecar Containers (RestartPolicy: Always): Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Native Sidecars to run a proxy container that starts before the main application starts and remains running continuously throughout the entire pod lifecycle.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Native Kubernetes sidecar containers in initContainers with restartPolicy Always is under consideration.",
    options: [
      { id: 'A', text: "Define the proxy as a standard container and hope it starts before the main container." },
      { id: 'B', text: "Define the proxy in `initContainers` with `restartPolicy: Always`, ensuring it starts first and continues running alongside application containers." },
      { id: 'C', text: "Write a custom controller to restart dead sidecar containers every thirty seconds." },
      { id: 'D', text: "Run the proxy as a host operating system process on the worker node." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define the proxy in `initContainers` with `restartPolicy: Always`, ensuring it starts first and continues running alongside application containers. Kubernetes supports native sidecar containers defined within `initContainers` with `restartPolicy: Always`. The kubelet starts these containers sequentially before main application containers, but does not wait for them to terminate; they run continuously for the pod lifetime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/",
    tags: ["Native Sidecars", "Native Sidecars", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-275",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Native Sidecar Containers (RestartPolicy: Always): Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Native Sidecars to run a proxy container that starts before the main application starts and remains running continuously throughout the entire pod lifecycle.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Native Kubernetes sidecar containers in initContainers with restartPolicy Always is under consideration.",
    options: [
      { id: 'A', text: "Write a custom controller to restart dead sidecar containers every thirty seconds." },
      { id: 'B', text: "Run the proxy as a host operating system process on the worker node." },
      { id: 'C', text: "Define the proxy in `initContainers` with `restartPolicy: Always`, ensuring it starts first and continues running alongside application containers." },
      { id: 'D', text: "Define the proxy as a standard container and hope it starts before the main container." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define the proxy in `initContainers` with `restartPolicy: Always`, ensuring it starts first and continues running alongside application containers. Kubernetes supports native sidecar containers defined within `initContainers` with `restartPolicy: Always`. The kubelet starts these containers sequentially before main application containers, but does not wait for them to terminate; they run continuously for the pod lifetime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/",
    tags: ["Native Sidecars", "Native Sidecars", "Resilience Failure"]
  }
];

export default K8S_CKAD_QUESTIONS_11;
