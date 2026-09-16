export const K8S_CKAD_QUESTIONS_11 = [
  {
    id: "k8s-ckad-251",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Sidecar: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Sidecar Pattern to collect, filter, and stream application log files from a shared volume to an external logging service without modifying application source code.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Add a DaemonSet log agent that reads the container logs from the node's own `/var/log` path." },
      { id: 'B', text: "Add a sidecar container that reads the logs from an `emptyDir` shared with the application." },
      { id: 'C', text: "Add a CronJob that mounts the same `emptyDir` each minute and ships whatever it finds." },
      { id: 'D', text: "Add an init container that opens the log file and forwards it for the pod's lifetime." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add a sidecar container to the pod sharing an `emptyDir` volume with the main application container to stream log data. The sidecar pattern deploys a helper container alongside the primary application container in the same pod. By sharing a local `emptyDir` volume, the sidecar can read log files emitted by the primary application and stream them asynchronously to external destinations without touching application code.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/#how-pods-manage-multiple-containers",
    tags: ["Sidecar Pattern","Sidecar Pattern","Dr Failover"]
  },
  {
    id: "k8s-ckad-252",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Sidecar: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Sidecar Pattern to collect, filter, and stream application log files from a shared volume to an external logging service without modifying application source code.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Add a sidecar container that reads the logs from an `emptyDir` shared with the application." },
      { id: 'B', text: "Add a CronJob that mounts the same `emptyDir` each minute and ships whatever it finds." },
      { id: 'C', text: "Add a DaemonSet log agent that reads the container logs from the node's own `/var/log` path." },
      { id: 'D', text: "Add an init container that opens the log file and forwards it for the pod's lifetime." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add a sidecar container to the pod sharing an `emptyDir` volume with the main application container to stream log data. The sidecar pattern deploys a helper container alongside the primary application container in the same pod. By sharing a local `emptyDir` volume, the sidecar can read log files emitted by the primary application and stream them asynchronously to external destinations without touching application code.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/#how-pods-manage-multiple-containers",
    tags: ["Sidecar Pattern","Sidecar Pattern","High Load Scale"]
  },
  {
    id: "k8s-ckad-253",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Sidecar: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Sidecar Pattern to collect, filter, and stream application log files from a shared volume to an external logging service without modifying application source code.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Add an init container that opens the log file and forwards it for the pod's lifetime." },
      { id: 'B', text: "Add a DaemonSet log agent that reads the container logs from the node's own `/var/log` path." },
      { id: 'C', text: "Add a CronJob that mounts the same `emptyDir` each minute and ships whatever it finds." },
      { id: 'D', text: "Add a sidecar container that reads the logs from an `emptyDir` shared with the application." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add a sidecar container to the pod sharing an `emptyDir` volume with the main application container to stream log data. The sidecar pattern deploys a helper container alongside the primary application container in the same pod. By sharing a local `emptyDir` volume, the sidecar can read log files emitted by the primary application and stream them asynchronously to external destinations without touching application code.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/#how-pods-manage-multiple-containers",
    tags: ["Sidecar Pattern","Sidecar Pattern","Security Compliance"]
  },
  {
    id: "k8s-ckad-254",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Sidecar: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Sidecar Pattern to collect, filter, and stream application log files from a shared volume to an external logging service without modifying application source code.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Add a CronJob that mounts the same `emptyDir` each minute and ships whatever it finds." },
      { id: 'B', text: "Add an init container that opens the log file and forwards it for the pod's lifetime." },
      { id: 'C', text: "Add a DaemonSet log agent that reads the container logs from the node's own `/var/log` path." },
      { id: 'D', text: "Add a sidecar container that reads the logs from an `emptyDir` shared with the application." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add a sidecar container to the pod sharing an `emptyDir` volume with the main application container to stream log data. The sidecar pattern deploys a helper container alongside the primary application container in the same pod. By sharing a local `emptyDir` volume, the sidecar can read log files emitted by the primary application and stream them asynchronously to external destinations without touching application code.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/#how-pods-manage-multiple-containers",
    tags: ["Sidecar Pattern","Sidecar Pattern","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-255",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Sidecar: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Sidecar Pattern to collect, filter, and stream application log files from a shared volume to an external logging service without modifying application source code.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Add a sidecar container that reads the logs from an `emptyDir` shared with the application." },
      { id: 'B', text: "Add an init container that opens the log file and forwards it for the pod's lifetime." },
      { id: 'C', text: "Add a CronJob that mounts the same `emptyDir` each minute and ships whatever it finds." },
      { id: 'D', text: "Add a DaemonSet log agent that reads the container logs from the node's own `/var/log` path." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add a sidecar container to the pod sharing an `emptyDir` volume with the main application container to stream log data. The sidecar pattern deploys a helper container alongside the primary application container in the same pod. By sharing a local `emptyDir` volume, the sidecar can read log files emitted by the primary application and stream them asynchronously to external destinations without touching application code.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/#how-pods-manage-multiple-containers",
    tags: ["Sidecar Pattern","Sidecar Pattern","Resilience Failure"]
  },
  {
    id: "k8s-ckad-256",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Ambassador: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Ambassador Pattern to decouple an application container from the complexities of connecting to an external database cluster with custom sharding and read-write split logic.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Point the application at a headless Service for the database cluster and let DNS resolution pick the shard." },
      { id: 'B', text: "Use an init container to write the shard map and read-write split rules into a config file the application reads." },
      { id: 'C', text: "Add an ambassador container that listens on localhost and proxies each connection to the right database endpoint." },
      { id: 'D', text: "Add a sidecar that watches the database endpoints and rewrites the application's connection string in place." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an ambassador container in the pod that listens on localhost and transparently proxies connections to the appropriate external database instances. The ambassador pattern uses a helper container to proxy outbound network communication on behalf of the main application. The application simply connects to `localhost:&lt;port&gt;`, and the ambassador handles connection pooling, TLS termination, sharding logic, and failover transparently.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Ambassador Pattern","Ambassador Pattern","Dr Failover"]
  },
  {
    id: "k8s-ckad-257",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Ambassador: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Ambassador Pattern to decouple an application container from the complexities of connecting to an external database cluster with custom sharding and read-write split logic.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Add an ambassador container that listens on localhost and proxies each connection to the right database endpoint." },
      { id: 'B', text: "Add a sidecar that watches the database endpoints and rewrites the application's connection string in place." },
      { id: 'C', text: "Point the application at a headless Service for the database cluster and let DNS resolution pick the shard." },
      { id: 'D', text: "Use an init container to write the shard map and read-write split rules into a config file the application reads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an ambassador container in the pod that listens on localhost and transparently proxies connections to the appropriate external database instances. The ambassador pattern uses a helper container to proxy outbound network communication on behalf of the main application. The application simply connects to `localhost:&lt;port&gt;`, and the ambassador handles connection pooling, TLS termination, sharding logic, and failover transparently.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Ambassador Pattern","Ambassador Pattern","High Load Scale"]
  },
  {
    id: "k8s-ckad-258",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Ambassador: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Ambassador Pattern to decouple an application container from the complexities of connecting to an external database cluster with custom sharding and read-write split logic.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Use an init container to write the shard map and read-write split rules into a config file the application reads." },
      { id: 'B', text: "Add an ambassador container that listens on localhost and proxies each connection to the right database endpoint." },
      { id: 'C', text: "Point the application at a headless Service for the database cluster and let DNS resolution pick the shard." },
      { id: 'D', text: "Add a sidecar that watches the database endpoints and rewrites the application's connection string in place." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an ambassador container in the pod that listens on localhost and transparently proxies connections to the appropriate external database instances. The ambassador pattern uses a helper container to proxy outbound network communication on behalf of the main application. The application simply connects to `localhost:&lt;port&gt;`, and the ambassador handles connection pooling, TLS termination, sharding logic, and failover transparently.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Ambassador Pattern","Ambassador Pattern","Security Compliance"]
  },
  {
    id: "k8s-ckad-259",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Ambassador: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Ambassador Pattern to decouple an application container from the complexities of connecting to an external database cluster with custom sharding and read-write split logic.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Add a sidecar that watches the database endpoints and rewrites the application's connection string in place." },
      { id: 'B', text: "Add an ambassador container that listens on localhost and proxies each connection to the right database endpoint." },
      { id: 'C', text: "Use an init container to write the shard map and read-write split rules into a config file the application reads." },
      { id: 'D', text: "Point the application at a headless Service for the database cluster and let DNS resolution pick the shard." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an ambassador container in the pod that listens on localhost and transparently proxies connections to the appropriate external database instances. The ambassador pattern uses a helper container to proxy outbound network communication on behalf of the main application. The application simply connects to `localhost:&lt;port&gt;`, and the ambassador handles connection pooling, TLS termination, sharding logic, and failover transparently.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Ambassador Pattern","Ambassador Pattern","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-260",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Ambassador: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Ambassador Pattern to decouple an application container from the complexities of connecting to an external database cluster with custom sharding and read-write split logic.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Add an ambassador container that listens on localhost and proxies each connection to the right database endpoint." },
      { id: 'B', text: "Add a sidecar that watches the database endpoints and rewrites the application's connection string in place." },
      { id: 'C', text: "Point the application at a headless Service for the database cluster and let DNS resolution pick the shard." },
      { id: 'D', text: "Use an init container to write the shard map and read-write split rules into a config file the application reads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an ambassador container in the pod that listens on localhost and transparently proxies connections to the appropriate external database instances. The ambassador pattern uses a helper container to proxy outbound network communication on behalf of the main application. The application simply connects to `localhost:&lt;port&gt;`, and the ambassador handles connection pooling, TLS termination, sharding logic, and failover transparently.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Ambassador Pattern","Ambassador Pattern","Resilience Failure"]
  },
  {
    id: "k8s-ckad-261",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Adapter: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Adapter Pattern to standardize legacy application telemetry and custom metrics into Prometheus-compliant format without rewriting legacy application code.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Add an adapter container that reads the legacy output and re-exposes it in Prometheus exposition format." },
      { id: 'B', text: "Add `metric_relabel_configs` to the Prometheus scrape job so the legacy metric names are reshaped on ingest." },
      { id: 'C', text: "Run the application behind a sidecar proxy and scrape the proxy's own request and latency metrics instead." },
      { id: 'D', text: "Ship the legacy output to a Fluentd sidecar and scrape the metrics the log pipeline derives from it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an adapter container in the pod that scrapes the legacy application output, transforms it into Prometheus exposition format, and exposes it on port 9090. The adapter pattern standardizes or normalizes the output of an application container to conform to cluster standards. A common use case is an adapter that reads proprietary metrics or logs and exposes them in standard Prometheus or OpenTelemetry format for cluster-wide scraping.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Adapter Pattern","Adapter Pattern","Dr Failover"]
  },
  {
    id: "k8s-ckad-262",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Adapter: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Adapter Pattern to standardize legacy application telemetry and custom metrics into Prometheus-compliant format without rewriting legacy application code.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Add `metric_relabel_configs` to the Prometheus scrape job so the legacy metric names are reshaped on ingest." },
      { id: 'B', text: "Run the application behind a sidecar proxy and scrape the proxy's own request and latency metrics instead." },
      { id: 'C', text: "Add an adapter container that reads the legacy output and re-exposes it in Prometheus exposition format." },
      { id: 'D', text: "Ship the legacy output to a Fluentd sidecar and scrape the metrics the log pipeline derives from it." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an adapter container in the pod that scrapes the legacy application output, transforms it into Prometheus exposition format, and exposes it on port 9090. The adapter pattern standardizes or normalizes the output of an application container to conform to cluster standards. A common use case is an adapter that reads proprietary metrics or logs and exposes them in standard Prometheus or OpenTelemetry format for cluster-wide scraping.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Adapter Pattern","Adapter Pattern","High Load Scale"]
  },
  {
    id: "k8s-ckad-263",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Adapter: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Adapter Pattern to standardize legacy application telemetry and custom metrics into Prometheus-compliant format without rewriting legacy application code.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Add an adapter container that reads the legacy output and re-exposes it in Prometheus exposition format." },
      { id: 'B', text: "Add `metric_relabel_configs` to the Prometheus scrape job so the legacy metric names are reshaped on ingest." },
      { id: 'C', text: "Run the application behind a sidecar proxy and scrape the proxy's own request and latency metrics instead." },
      { id: 'D', text: "Ship the legacy output to a Fluentd sidecar and scrape the metrics the log pipeline derives from it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an adapter container in the pod that scrapes the legacy application output, transforms it into Prometheus exposition format, and exposes it on port 9090. The adapter pattern standardizes or normalizes the output of an application container to conform to cluster standards. A common use case is an adapter that reads proprietary metrics or logs and exposes them in standard Prometheus or OpenTelemetry format for cluster-wide scraping.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Adapter Pattern","Adapter Pattern","Security Compliance"]
  },
  {
    id: "k8s-ckad-264",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Adapter: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Adapter Pattern to standardize legacy application telemetry and custom metrics into Prometheus-compliant format without rewriting legacy application code.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Add an adapter container that reads the legacy output and re-exposes it in Prometheus exposition format." },
      { id: 'B', text: "Add `metric_relabel_configs` to the Prometheus scrape job so the legacy metric names are reshaped on ingest." },
      { id: 'C', text: "Run the application behind a sidecar proxy and scrape the proxy's own request and latency metrics instead." },
      { id: 'D', text: "Ship the legacy output to a Fluentd sidecar and scrape the metrics the log pipeline derives from it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an adapter container in the pod that scrapes the legacy application output, transforms it into Prometheus exposition format, and exposes it on port 9090. The adapter pattern standardizes or normalizes the output of an application container to conform to cluster standards. A common use case is an adapter that reads proprietary metrics or logs and exposes them in standard Prometheus or OpenTelemetry format for cluster-wide scraping.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Adapter Pattern","Adapter Pattern","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-265",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Patterns: Adapter: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Adapter Pattern to standardize legacy application telemetry and custom metrics into Prometheus-compliant format without rewriting legacy application code.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Run the application behind a sidecar proxy and scrape the proxy's own request and latency metrics instead." },
      { id: 'B', text: "Ship the legacy output to a Fluentd sidecar and scrape the metrics the log pipeline derives from it." },
      { id: 'C', text: "Add an adapter container that reads the legacy output and re-exposes it in Prometheus exposition format." },
      { id: 'D', text: "Add `metric_relabel_configs` to the Prometheus scrape job so the legacy metric names are reshaped on ingest." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an adapter container in the pod that scrapes the legacy application output, transforms it into Prometheus exposition format, and exposes it on port 9090. The adapter pattern standardizes or normalizes the output of an application container to conform to cluster standards. A common use case is an adapter that reads proprietary metrics or logs and exposes them in standard Prometheus or OpenTelemetry format for cluster-wide scraping.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Adapter Pattern","Adapter Pattern","Resilience Failure"]
  },
  {
    id: "k8s-ckad-266",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Init Containers for Startup Initialization: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Init Containers to ensure a web application container does not start until a backend database service is fully reachable and database schema migrations have executed.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Add a readiness probe that fails until the database answers, so that the container is kept out of the Service." },
      { id: 'B', text: "Add a `postStart` lifecycle hook that runs the migration script as the application container comes up." },
      { id: 'C', text: "Add a sidecar container that runs the migrations alongside the application and exits when they complete." },
      { id: 'D', text: "Add an `initContainers` block that runs the connectivity check and the schema migration before the app starts." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an `initContainers` block in the pod spec to run connectivity checks and migration scripts before the application container launches. Init containers run sequentially to completion before any application containers in the pod are started. If an init container fails, the kubelet restarts the pod until it succeeds, guaranteeing that prerequisites (like database readiness, seed data, or schema migrations) are satisfied first.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/init-containers/",
    tags: ["Init Containers","Init Containers","Dr Failover"]
  },
  {
    id: "k8s-ckad-267",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Init Containers for Startup Initialization: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Init Containers to ensure a web application container does not start until a backend database service is fully reachable and database schema migrations have executed.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Add an `initContainers` block that runs the connectivity check and the schema migration before the app starts." },
      { id: 'B', text: "Add a readiness probe that fails until the database answers, so that the container is kept out of the Service." },
      { id: 'C', text: "Add a sidecar container that runs the migrations alongside the application and exits when they complete." },
      { id: 'D', text: "Add a `postStart` lifecycle hook that runs the migration script as the application container comes up." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an `initContainers` block in the pod spec to run connectivity checks and migration scripts before the application container launches. Init containers run sequentially to completion before any application containers in the pod are started. If an init container fails, the kubelet restarts the pod until it succeeds, guaranteeing that prerequisites (like database readiness, seed data, or schema migrations) are satisfied first.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/init-containers/",
    tags: ["Init Containers","Init Containers","High Load Scale"]
  },
  {
    id: "k8s-ckad-268",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Init Containers for Startup Initialization: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Init Containers to ensure a web application container does not start until a backend database service is fully reachable and database schema migrations have executed.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Add an `initContainers` block that runs the connectivity check and the schema migration before the app starts." },
      { id: 'B', text: "Add a readiness probe that fails until the database answers, so that the container is kept out of the Service." },
      { id: 'C', text: "Add a sidecar container that runs the migrations alongside the application and exits when they complete." },
      { id: 'D', text: "Add a `postStart` lifecycle hook that runs the migration script as the application container comes up." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an `initContainers` block in the pod spec to run connectivity checks and migration scripts before the application container launches. Init containers run sequentially to completion before any application containers in the pod are started. If an init container fails, the kubelet restarts the pod until it succeeds, guaranteeing that prerequisites (like database readiness, seed data, or schema migrations) are satisfied first.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/init-containers/",
    tags: ["Init Containers","Init Containers","Security Compliance"]
  },
  {
    id: "k8s-ckad-269",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Init Containers for Startup Initialization: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Init Containers to ensure a web application container does not start until a backend database service is fully reachable and database schema migrations have executed.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Add an `initContainers` block that runs the connectivity check and the schema migration before the app starts." },
      { id: 'B', text: "Add a readiness probe that fails until the database answers, so that the container is kept out of the Service." },
      { id: 'C', text: "Add a sidecar container that runs the migrations alongside the application and exits when they complete." },
      { id: 'D', text: "Add a `postStart` lifecycle hook that runs the migration script as the application container comes up." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an `initContainers` block in the pod spec to run connectivity checks and migration scripts before the application container launches. Init containers run sequentially to completion before any application containers in the pod are started. If an init container fails, the kubelet restarts the pod until it succeeds, guaranteeing that prerequisites (like database readiness, seed data, or schema migrations) are satisfied first.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/init-containers/",
    tags: ["Init Containers","Init Containers","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-270",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Init Containers for Startup Initialization: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Init Containers to ensure a web application container does not start until a backend database service is fully reachable and database schema migrations have executed.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Add an `initContainers` block that runs the connectivity check and the schema migration before the app starts." },
      { id: 'B', text: "Add a readiness probe that fails until the database answers, so that the container is kept out of the Service." },
      { id: 'C', text: "Add a sidecar container that runs the migrations alongside the application and exits when they complete." },
      { id: 'D', text: "Add a `postStart` lifecycle hook that runs the migration script as the application container comes up." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an `initContainers` block in the pod spec to run connectivity checks and migration scripts before the application container launches. Init containers run sequentially to completion before any application containers in the pod are started. If an init container fails, the kubelet restarts the pod until it succeeds, guaranteeing that prerequisites (like database readiness, seed data, or schema migrations) are satisfied first.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/init-containers/",
    tags: ["Init Containers","Init Containers","Resilience Failure"]
  },
  {
    id: "k8s-ckad-271",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Native Sidecar Containers (RestartPolicy: Always): Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Native Sidecars to run a proxy container that starts before the main application starts and remains running continuously throughout the entire pod lifecycle.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Define the proxy in `initContainers` with `restartPolicy: Always`, so it starts first and keeps running." },
      { id: 'B', text: "Define the proxy as a regular container and place it first in the pod's `containers` list." },
      { id: 'C', text: "Define the proxy in `initContainers` and let the default restart policy bring it back after it has exited." },
      { id: 'D', text: "Define the proxy as a regular container with a `postStart` hook that waits for it to accept traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the proxy in `initContainers` with `restartPolicy: Always`, ensuring it starts first and continues running alongside application containers. Kubernetes supports native sidecar containers defined within `initContainers` with `restartPolicy: Always`. The kubelet starts these containers sequentially before main application containers, but does not wait for them to terminate; they run continuously for the pod lifetime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/",
    tags: ["Native Sidecars","Native Sidecars","Dr Failover"]
  },
  {
    id: "k8s-ckad-272",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Native Sidecar Containers (RestartPolicy: Always): High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Native Sidecars to run a proxy container that starts before the main application starts and remains running continuously throughout the entire pod lifecycle.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Define the proxy as a regular container with a `postStart` hook that waits for it to accept traffic." },
      { id: 'B', text: "Define the proxy as a regular container and place it first in the pod's `containers` list." },
      { id: 'C', text: "Define the proxy in `initContainers` with `restartPolicy: Always`, so it starts first and keeps running." },
      { id: 'D', text: "Define the proxy in `initContainers` and let the default restart policy bring it back after it has exited." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define the proxy in `initContainers` with `restartPolicy: Always`, ensuring it starts first and continues running alongside application containers. Kubernetes supports native sidecar containers defined within `initContainers` with `restartPolicy: Always`. The kubelet starts these containers sequentially before main application containers, but does not wait for them to terminate; they run continuously for the pod lifetime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/",
    tags: ["Native Sidecars","Native Sidecars","High Load Scale"]
  },
  {
    id: "k8s-ckad-273",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Native Sidecar Containers (RestartPolicy: Always): Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Native Sidecars to run a proxy container that starts before the main application starts and remains running continuously throughout the entire pod lifecycle.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Define the proxy in `initContainers` with `restartPolicy: Always`, so it starts first and keeps running." },
      { id: 'B', text: "Define the proxy as a regular container and place it first in the pod's `containers` list." },
      { id: 'C', text: "Define the proxy in `initContainers` and let the default restart policy bring it back after it has exited." },
      { id: 'D', text: "Define the proxy as a regular container with a `postStart` hook that waits for it to accept traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the proxy in `initContainers` with `restartPolicy: Always`, ensuring it starts first and continues running alongside application containers. Kubernetes supports native sidecar containers defined within `initContainers` with `restartPolicy: Always`. The kubelet starts these containers sequentially before main application containers, but does not wait for them to terminate; they run continuously for the pod lifetime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/",
    tags: ["Native Sidecars","Native Sidecars","Security Compliance"]
  },
  {
    id: "k8s-ckad-274",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Native Sidecar Containers (RestartPolicy: Always): Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Native Sidecars to run a proxy container that starts before the main application starts and remains running continuously throughout the entire pod lifecycle.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Define the proxy in `initContainers` with `restartPolicy: Always`, so it starts first and keeps running." },
      { id: 'B', text: "Define the proxy as a regular container and place it first in the pod's `containers` list." },
      { id: 'C', text: "Define the proxy in `initContainers` and let the default restart policy bring it back after it has exited." },
      { id: 'D', text: "Define the proxy as a regular container with a `postStart` hook that waits for it to accept traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the proxy in `initContainers` with `restartPolicy: Always`, ensuring it starts first and continues running alongside application containers. Kubernetes supports native sidecar containers defined within `initContainers` with `restartPolicy: Always`. The kubelet starts these containers sequentially before main application containers, but does not wait for them to terminate; they run continuously for the pod lifetime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/",
    tags: ["Native Sidecars","Native Sidecars","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-275",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Native Sidecar Containers (RestartPolicy: Always): Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Native Sidecars to run a proxy container that starts before the main application starts and remains running continuously throughout the entire pod lifecycle.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Define the proxy in `initContainers` with `restartPolicy: Always`, so it starts first and keeps running." },
      { id: 'B', text: "Define the proxy as a regular container and place it first in the pod's `containers` list." },
      { id: 'C', text: "Define the proxy in `initContainers` and let the default restart policy bring it back after it has exited." },
      { id: 'D', text: "Define the proxy as a regular container with a `postStart` hook that waits for it to accept traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the proxy in `initContainers` with `restartPolicy: Always`, ensuring it starts first and continues running alongside application containers. Kubernetes supports native sidecar containers defined within `initContainers` with `restartPolicy: Always`. The kubelet starts these containers sequentially before main application containers, but does not wait for them to terminate; they run continuously for the pod lifetime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/",
    tags: ["Native Sidecars","Native Sidecars","Resilience Failure"]
  }
];

export default K8S_CKAD_QUESTIONS_11;
