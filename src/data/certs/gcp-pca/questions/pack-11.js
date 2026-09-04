export const GCP_PCA_QUESTIONS_11 = [
  {
    id: "gcp-pca-251",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Spanner Multi-Region Global Consistency: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Cloud Spanner to architect a globally distributed financial transaction ledger that requires multi-region synchronous write scaling, ACID guarantees, and 99.999% availability.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Cloud Spanner multi-region instance configuration with external consistency is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cloud Spanner using a multi-region instance configuration with read-write and witness replicas." },
      { id: 'B', text: "Deploy Cloud SQL for PostgreSQL with cross-region asynchronous read replicas." },
      { id: 'C', text: "Deploy a single-zone Firestore instance in Datastore mode." },
      { id: 'D', text: "Store financial ledgers in flat CSV files inside a regional Cloud Storage bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cloud Spanner using a multi-region instance configuration with read-write and witness replicas. Cloud Spanner is Google Cloud's fully managed, horizontally scalable relational database service providing external consistency across multi-region configurations, automatic sharding, and 99.999% availability backed by TrueTime atomic clocks.",
    referenceUrl: "https://cloud.google.com/spanner/docs/instance-configurations#multi-region-configurations",
    tags: ["Cloud Spanner", "Cloud Spanner", "Dr Failover"]
  },
  {
    id: "gcp-pca-252",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Spanner Multi-Region Global Consistency: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Cloud Spanner to architect a globally distributed financial transaction ledger that requires multi-region synchronous write scaling, ACID guarantees, and 99.999% availability.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Cloud Spanner multi-region instance configuration with external consistency is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cloud Spanner using a multi-region instance configuration with read-write and witness replicas." },
      { id: 'B', text: "Deploy Cloud SQL for PostgreSQL with cross-region asynchronous read replicas." },
      { id: 'C', text: "Deploy a single-zone Firestore instance in Datastore mode." },
      { id: 'D', text: "Store financial ledgers in flat CSV files inside a regional Cloud Storage bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cloud Spanner using a multi-region instance configuration with read-write and witness replicas. Cloud Spanner is Google Cloud's fully managed, horizontally scalable relational database service providing external consistency across multi-region configurations, automatic sharding, and 99.999% availability backed by TrueTime atomic clocks.",
    referenceUrl: "https://cloud.google.com/spanner/docs/instance-configurations#multi-region-configurations",
    tags: ["Cloud Spanner", "Cloud Spanner", "High Load Scale"]
  },
  {
    id: "gcp-pca-253",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Spanner Multi-Region Global Consistency: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Cloud Spanner to architect a globally distributed financial transaction ledger that requires multi-region synchronous write scaling, ACID guarantees, and 99.999% availability.",
    question: "Which solution properly implements these mandatory security and governance controls? Cloud Spanner multi-region instance configuration with external consistency is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cloud Spanner using a multi-region instance configuration with read-write and witness replicas." },
      { id: 'B', text: "Deploy Cloud SQL for PostgreSQL with cross-region asynchronous read replicas." },
      { id: 'C', text: "Deploy a single-zone Firestore instance in Datastore mode." },
      { id: 'D', text: "Store financial ledgers in flat CSV files inside a regional Cloud Storage bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cloud Spanner using a multi-region instance configuration with read-write and witness replicas. Cloud Spanner is Google Cloud's fully managed, horizontally scalable relational database service providing external consistency across multi-region configurations, automatic sharding, and 99.999% availability backed by TrueTime atomic clocks.",
    referenceUrl: "https://cloud.google.com/spanner/docs/instance-configurations#multi-region-configurations",
    tags: ["Cloud Spanner", "Cloud Spanner", "Security Compliance"]
  },
  {
    id: "gcp-pca-254",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Spanner Multi-Region Global Consistency: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Cloud Spanner to architect a globally distributed financial transaction ledger that requires multi-region synchronous write scaling, ACID guarantees, and 99.999% availability.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Cloud Spanner multi-region instance configuration with external consistency is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cloud Spanner using a multi-region instance configuration with read-write and witness replicas." },
      { id: 'B', text: "Deploy Cloud SQL for PostgreSQL with cross-region asynchronous read replicas." },
      { id: 'C', text: "Deploy a single-zone Firestore instance in Datastore mode." },
      { id: 'D', text: "Store financial ledgers in flat CSV files inside a regional Cloud Storage bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cloud Spanner using a multi-region instance configuration with read-write and witness replicas. Cloud Spanner is Google Cloud's fully managed, horizontally scalable relational database service providing external consistency across multi-region configurations, automatic sharding, and 99.999% availability backed by TrueTime atomic clocks.",
    referenceUrl: "https://cloud.google.com/spanner/docs/instance-configurations#multi-region-configurations",
    tags: ["Cloud Spanner", "Cloud Spanner", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-255",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Spanner Multi-Region Global Consistency: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Cloud Spanner to architect a globally distributed financial transaction ledger that requires multi-region synchronous write scaling, ACID guarantees, and 99.999% availability.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Cloud Spanner multi-region instance configuration with external consistency is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cloud Spanner using a multi-region instance configuration with read-write and witness replicas." },
      { id: 'B', text: "Deploy Cloud SQL for PostgreSQL with cross-region asynchronous read replicas." },
      { id: 'C', text: "Deploy a single-zone Firestore instance in Datastore mode." },
      { id: 'D', text: "Store financial ledgers in flat CSV files inside a regional Cloud Storage bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cloud Spanner using a multi-region instance configuration with read-write and witness replicas. Cloud Spanner is Google Cloud's fully managed, horizontally scalable relational database service providing external consistency across multi-region configurations, automatic sharding, and 99.999% availability backed by TrueTime atomic clocks.",
    referenceUrl: "https://cloud.google.com/spanner/docs/instance-configurations#multi-region-configurations",
    tags: ["Cloud Spanner", "Cloud Spanner", "Resilience Failure"]
  },
  {
    id: "gcp-pca-256",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Bigtable Time-Series Row Key Design: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Cloud Bigtable to ingest 1,000,000 telemetry sensor updates per second into Cloud Bigtable while preventing write hotspotting on tablet servers.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Cloud Bigtable schema design using non-sequential composite row keys is under consideration.",
    options: [
      { id: 'A', text: "Design composite row keys using a high-cardinality prefix combined with reversed timestamps (e.g. deviceId#reversedTimestamp)." },
      { id: 'B', text: "Use a sequential auto-incrementing integer as the row key." },
      { id: 'C', text: "Use a raw Unix timestamp as the sole row key attribute." },
      { id: 'D', text: "Store all sensor telemetry in a single row with 10 million columns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Design composite row keys using a high-cardinality prefix combined with reversed timestamps (e.g. deviceId#reversedTimestamp). In Cloud Bigtable, sequential row keys (such as timestamps) direct all consecutive writes to a single tablet server, causing severe write hotspots. Using a hashed or non-sequential prefix like `deviceId#reversedTimestamp` distributes writes across multiple nodes.",
    referenceUrl: "https://cloud.google.com/bigtable/docs/schema-design-time-series",
    tags: ["Cloud Bigtable", "Cloud Bigtable", "Dr Failover"]
  },
  {
    id: "gcp-pca-257",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Bigtable Time-Series Row Key Design: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Cloud Bigtable to ingest 1,000,000 telemetry sensor updates per second into Cloud Bigtable while preventing write hotspotting on tablet servers.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Cloud Bigtable schema design using non-sequential composite row keys is under consideration.",
    options: [
      { id: 'A', text: "Design composite row keys using a high-cardinality prefix combined with reversed timestamps (e.g. deviceId#reversedTimestamp)." },
      { id: 'B', text: "Use a sequential auto-incrementing integer as the row key." },
      { id: 'C', text: "Use a raw Unix timestamp as the sole row key attribute." },
      { id: 'D', text: "Store all sensor telemetry in a single row with 10 million columns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Design composite row keys using a high-cardinality prefix combined with reversed timestamps (e.g. deviceId#reversedTimestamp). In Cloud Bigtable, sequential row keys (such as timestamps) direct all consecutive writes to a single tablet server, causing severe write hotspots. Using a hashed or non-sequential prefix like `deviceId#reversedTimestamp` distributes writes across multiple nodes.",
    referenceUrl: "https://cloud.google.com/bigtable/docs/schema-design-time-series",
    tags: ["Cloud Bigtable", "Cloud Bigtable", "High Load Scale"]
  },
  {
    id: "gcp-pca-258",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Bigtable Time-Series Row Key Design: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Cloud Bigtable to ingest 1,000,000 telemetry sensor updates per second into Cloud Bigtable while preventing write hotspotting on tablet servers.",
    question: "Which solution properly implements these mandatory security and governance controls? Cloud Bigtable schema design using non-sequential composite row keys is under consideration.",
    options: [
      { id: 'A', text: "Design composite row keys using a high-cardinality prefix combined with reversed timestamps (e.g. deviceId#reversedTimestamp)." },
      { id: 'B', text: "Use a sequential auto-incrementing integer as the row key." },
      { id: 'C', text: "Use a raw Unix timestamp as the sole row key attribute." },
      { id: 'D', text: "Store all sensor telemetry in a single row with 10 million columns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Design composite row keys using a high-cardinality prefix combined with reversed timestamps (e.g. deviceId#reversedTimestamp). In Cloud Bigtable, sequential row keys (such as timestamps) direct all consecutive writes to a single tablet server, causing severe write hotspots. Using a hashed or non-sequential prefix like `deviceId#reversedTimestamp` distributes writes across multiple nodes.",
    referenceUrl: "https://cloud.google.com/bigtable/docs/schema-design-time-series",
    tags: ["Cloud Bigtable", "Cloud Bigtable", "Security Compliance"]
  },
  {
    id: "gcp-pca-259",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Bigtable Time-Series Row Key Design: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Cloud Bigtable to ingest 1,000,000 telemetry sensor updates per second into Cloud Bigtable while preventing write hotspotting on tablet servers.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Cloud Bigtable schema design using non-sequential composite row keys is under consideration.",
    options: [
      { id: 'A', text: "Design composite row keys using a high-cardinality prefix combined with reversed timestamps (e.g. deviceId#reversedTimestamp)." },
      { id: 'B', text: "Use a sequential auto-incrementing integer as the row key." },
      { id: 'C', text: "Use a raw Unix timestamp as the sole row key attribute." },
      { id: 'D', text: "Store all sensor telemetry in a single row with 10 million columns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Design composite row keys using a high-cardinality prefix combined with reversed timestamps (e.g. deviceId#reversedTimestamp). In Cloud Bigtable, sequential row keys (such as timestamps) direct all consecutive writes to a single tablet server, causing severe write hotspots. Using a hashed or non-sequential prefix like `deviceId#reversedTimestamp` distributes writes across multiple nodes.",
    referenceUrl: "https://cloud.google.com/bigtable/docs/schema-design-time-series",
    tags: ["Cloud Bigtable", "Cloud Bigtable", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-260",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Bigtable Time-Series Row Key Design: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Cloud Bigtable to ingest 1,000,000 telemetry sensor updates per second into Cloud Bigtable while preventing write hotspotting on tablet servers.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Cloud Bigtable schema design using non-sequential composite row keys is under consideration.",
    options: [
      { id: 'A', text: "Design composite row keys using a high-cardinality prefix combined with reversed timestamps (e.g. deviceId#reversedTimestamp)." },
      { id: 'B', text: "Use a sequential auto-incrementing integer as the row key." },
      { id: 'C', text: "Use a raw Unix timestamp as the sole row key attribute." },
      { id: 'D', text: "Store all sensor telemetry in a single row with 10 million columns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Design composite row keys using a high-cardinality prefix combined with reversed timestamps (e.g. deviceId#reversedTimestamp). In Cloud Bigtable, sequential row keys (such as timestamps) direct all consecutive writes to a single tablet server, causing severe write hotspots. Using a hashed or non-sequential prefix like `deviceId#reversedTimestamp` distributes writes across multiple nodes.",
    referenceUrl: "https://cloud.google.com/bigtable/docs/schema-design-time-series",
    tags: ["Cloud Bigtable", "Cloud Bigtable", "Resilience Failure"]
  },
  {
    id: "gcp-pca-261",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "GKE Autopilot vs GKE Standard: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Google Kubernetes Engine to minimize operational overhead by offloading node provisioning, OS patching, cluster hardening, and auto-repair entirely to Google Cloud.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? GKE Autopilot managed operations vs GKE Standard manual node management is under consideration.",
    options: [
      { id: 'A', text: "Deploy workloads on GKE Autopilot, allowing Google to manage all underlying node infrastructure and cluster hardening." },
      { id: 'B', text: "Deploy GKE Standard with manual node pool provisioning and unmanaged OS updates." },
      { id: 'C', text: "Manage a self-hosted Kubernetes cluster on bare-metal Compute Engine instances." },
      { id: 'D', text: "Deploy applications into unmanaged Compute Engine VMs using docker-compose." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy workloads on GKE Autopilot, allowing Google to manage all underlying node infrastructure and cluster hardening. GKE Autopilot is a hands-off, production-ready operational mode where Google provisions, manages, and hardens cluster infrastructure according to Kubernetes best practices, charging only for resources requested by running pods.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview",
    tags: ["Google Kubernetes Engine", "GKE", "Dr Failover"]
  },
  {
    id: "gcp-pca-262",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "GKE Autopilot vs GKE Standard: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Google Kubernetes Engine to minimize operational overhead by offloading node provisioning, OS patching, cluster hardening, and auto-repair entirely to Google Cloud.",
    question: "Which architectural approach should the team select to manage this demand efficiently? GKE Autopilot managed operations vs GKE Standard manual node management is under consideration.",
    options: [
      { id: 'A', text: "Deploy workloads on GKE Autopilot, allowing Google to manage all underlying node infrastructure and cluster hardening." },
      { id: 'B', text: "Deploy GKE Standard with manual node pool provisioning and unmanaged OS updates." },
      { id: 'C', text: "Manage a self-hosted Kubernetes cluster on bare-metal Compute Engine instances." },
      { id: 'D', text: "Deploy applications into unmanaged Compute Engine VMs using docker-compose." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy workloads on GKE Autopilot, allowing Google to manage all underlying node infrastructure and cluster hardening. GKE Autopilot is a hands-off, production-ready operational mode where Google provisions, manages, and hardens cluster infrastructure according to Kubernetes best practices, charging only for resources requested by running pods.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview",
    tags: ["Google Kubernetes Engine", "GKE", "High Load Scale"]
  },
  {
    id: "gcp-pca-263",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "GKE Autopilot vs GKE Standard: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Google Kubernetes Engine to minimize operational overhead by offloading node provisioning, OS patching, cluster hardening, and auto-repair entirely to Google Cloud.",
    question: "Which solution properly implements these mandatory security and governance controls? GKE Autopilot managed operations vs GKE Standard manual node management is under consideration.",
    options: [
      { id: 'A', text: "Deploy workloads on GKE Autopilot, allowing Google to manage all underlying node infrastructure and cluster hardening." },
      { id: 'B', text: "Deploy GKE Standard with manual node pool provisioning and unmanaged OS updates." },
      { id: 'C', text: "Manage a self-hosted Kubernetes cluster on bare-metal Compute Engine instances." },
      { id: 'D', text: "Deploy applications into unmanaged Compute Engine VMs using docker-compose." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy workloads on GKE Autopilot, allowing Google to manage all underlying node infrastructure and cluster hardening. GKE Autopilot is a hands-off, production-ready operational mode where Google provisions, manages, and hardens cluster infrastructure according to Kubernetes best practices, charging only for resources requested by running pods.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview",
    tags: ["Google Kubernetes Engine", "GKE", "Security Compliance"]
  },
  {
    id: "gcp-pca-264",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "GKE Autopilot vs GKE Standard: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Google Kubernetes Engine to minimize operational overhead by offloading node provisioning, OS patching, cluster hardening, and auto-repair entirely to Google Cloud.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? GKE Autopilot managed operations vs GKE Standard manual node management is under consideration.",
    options: [
      { id: 'A', text: "Deploy workloads on GKE Autopilot, allowing Google to manage all underlying node infrastructure and cluster hardening." },
      { id: 'B', text: "Deploy GKE Standard with manual node pool provisioning and unmanaged OS updates." },
      { id: 'C', text: "Manage a self-hosted Kubernetes cluster on bare-metal Compute Engine instances." },
      { id: 'D', text: "Deploy applications into unmanaged Compute Engine VMs using docker-compose." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy workloads on GKE Autopilot, allowing Google to manage all underlying node infrastructure and cluster hardening. GKE Autopilot is a hands-off, production-ready operational mode where Google provisions, manages, and hardens cluster infrastructure according to Kubernetes best practices, charging only for resources requested by running pods.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview",
    tags: ["Google Kubernetes Engine", "GKE", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-265",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "GKE Autopilot vs GKE Standard: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Google Kubernetes Engine to minimize operational overhead by offloading node provisioning, OS patching, cluster hardening, and auto-repair entirely to Google Cloud.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? GKE Autopilot managed operations vs GKE Standard manual node management is under consideration.",
    options: [
      { id: 'A', text: "Deploy workloads on GKE Autopilot, allowing Google to manage all underlying node infrastructure and cluster hardening." },
      { id: 'B', text: "Deploy GKE Standard with manual node pool provisioning and unmanaged OS updates." },
      { id: 'C', text: "Manage a self-hosted Kubernetes cluster on bare-metal Compute Engine instances." },
      { id: 'D', text: "Deploy applications into unmanaged Compute Engine VMs using docker-compose." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy workloads on GKE Autopilot, allowing Google to manage all underlying node infrastructure and cluster hardening. GKE Autopilot is a hands-off, production-ready operational mode where Google provisions, manages, and hardens cluster infrastructure according to Kubernetes best practices, charging only for resources requested by running pods.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview",
    tags: ["Google Kubernetes Engine", "GKE", "Resilience Failure"]
  },
  {
    id: "gcp-pca-266",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Global External Application Load Balancer (Anycast): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Cloud Load Balancing to provide a single Anycast IP address to serve global web traffic, routing users to the nearest regional GKE cluster over Google's private backbone network.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Global External Application Load Balancer with global Anycast IP routing is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Global External Application Load Balancer with backends distributed across regional GKE clusters." },
      { id: 'B', text: "Configure regional external passthrough Network Load Balancers in each region with separate public IPs." },
      { id: 'C', text: "Rely on external DNS round-robin routing across individual regional virtual machines." },
      { id: 'D', text: "Deploy an on-premises physical load balancing appliance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Global External Application Load Balancer with backends distributed across regional GKE clusters. The Global External Application Load Balancer uses Google's global Anycast IP infrastructure to terminate client TLS connections at the nearest Point of Presence (PoP) edge, routing traffic over Google's low-latency private fiber network to backend instances.",
    referenceUrl: "https://cloud.google.com/load-balancing/docs/https",
    tags: ["Cloud Load Balancing", "Load Balancing", "Dr Failover"]
  },
  {
    id: "gcp-pca-267",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Global External Application Load Balancer (Anycast): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Cloud Load Balancing to provide a single Anycast IP address to serve global web traffic, routing users to the nearest regional GKE cluster over Google's private backbone network.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Global External Application Load Balancer with global Anycast IP routing is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Global External Application Load Balancer with backends distributed across regional GKE clusters." },
      { id: 'B', text: "Configure regional external passthrough Network Load Balancers in each region with separate public IPs." },
      { id: 'C', text: "Rely on external DNS round-robin routing across individual regional virtual machines." },
      { id: 'D', text: "Deploy an on-premises physical load balancing appliance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Global External Application Load Balancer with backends distributed across regional GKE clusters. The Global External Application Load Balancer uses Google's global Anycast IP infrastructure to terminate client TLS connections at the nearest Point of Presence (PoP) edge, routing traffic over Google's low-latency private fiber network to backend instances.",
    referenceUrl: "https://cloud.google.com/load-balancing/docs/https",
    tags: ["Cloud Load Balancing", "Load Balancing", "High Load Scale"]
  },
  {
    id: "gcp-pca-268",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Global External Application Load Balancer (Anycast): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Cloud Load Balancing to provide a single Anycast IP address to serve global web traffic, routing users to the nearest regional GKE cluster over Google's private backbone network.",
    question: "Which solution properly implements these mandatory security and governance controls? Global External Application Load Balancer with global Anycast IP routing is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Global External Application Load Balancer with backends distributed across regional GKE clusters." },
      { id: 'B', text: "Configure regional external passthrough Network Load Balancers in each region with separate public IPs." },
      { id: 'C', text: "Rely on external DNS round-robin routing across individual regional virtual machines." },
      { id: 'D', text: "Deploy an on-premises physical load balancing appliance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Global External Application Load Balancer with backends distributed across regional GKE clusters. The Global External Application Load Balancer uses Google's global Anycast IP infrastructure to terminate client TLS connections at the nearest Point of Presence (PoP) edge, routing traffic over Google's low-latency private fiber network to backend instances.",
    referenceUrl: "https://cloud.google.com/load-balancing/docs/https",
    tags: ["Cloud Load Balancing", "Load Balancing", "Security Compliance"]
  },
  {
    id: "gcp-pca-269",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Global External Application Load Balancer (Anycast): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Cloud Load Balancing to provide a single Anycast IP address to serve global web traffic, routing users to the nearest regional GKE cluster over Google's private backbone network.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Global External Application Load Balancer with global Anycast IP routing is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Global External Application Load Balancer with backends distributed across regional GKE clusters." },
      { id: 'B', text: "Configure regional external passthrough Network Load Balancers in each region with separate public IPs." },
      { id: 'C', text: "Rely on external DNS round-robin routing across individual regional virtual machines." },
      { id: 'D', text: "Deploy an on-premises physical load balancing appliance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Global External Application Load Balancer with backends distributed across regional GKE clusters. The Global External Application Load Balancer uses Google's global Anycast IP infrastructure to terminate client TLS connections at the nearest Point of Presence (PoP) edge, routing traffic over Google's low-latency private fiber network to backend instances.",
    referenceUrl: "https://cloud.google.com/load-balancing/docs/https",
    tags: ["Cloud Load Balancing", "Load Balancing", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-270",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Global External Application Load Balancer (Anycast): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Cloud Load Balancing to provide a single Anycast IP address to serve global web traffic, routing users to the nearest regional GKE cluster over Google's private backbone network.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Global External Application Load Balancer with global Anycast IP routing is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Global External Application Load Balancer with backends distributed across regional GKE clusters." },
      { id: 'B', text: "Configure regional external passthrough Network Load Balancers in each region with separate public IPs." },
      { id: 'C', text: "Rely on external DNS round-robin routing across individual regional virtual machines." },
      { id: 'D', text: "Deploy an on-premises physical load balancing appliance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Global External Application Load Balancer with backends distributed across regional GKE clusters. The Global External Application Load Balancer uses Google's global Anycast IP infrastructure to terminate client TLS connections at the nearest Point of Presence (PoP) edge, routing traffic over Google's low-latency private fiber network to backend instances.",
    referenceUrl: "https://cloud.google.com/load-balancing/docs/https",
    tags: ["Cloud Load Balancing", "Load Balancing", "Resilience Failure"]
  },
  {
    id: "gcp-pca-271",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Hybrid Interconnect: Dedicated vs Partner Interconnect: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Cloud Interconnect to establish a private, high-capacity 100 Gbps connection between an enterprise data center and Google Cloud that does not traverse the public internet.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Dedicated Interconnect (10/100 Gbps cross-connects) vs Partner Interconnect is under consideration.",
    options: [
      { id: 'A', text: "Provision Google Cloud Dedicated Interconnect with 100 Gbps circuits at a designated colocation facility." },
      { id: 'B', text: "Establish an HA Cloud VPN tunnel over the public internet." },
      { id: 'C', text: "Use standard public internet routing with dynamic DNS." },
      { id: 'D', text: "Provision an unencrypted FTP connection over public broadband." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision Google Cloud Dedicated Interconnect with 100 Gbps circuits at a designated colocation facility. Dedicated Interconnect provides direct physical cross-connects between an on-premises network and Google Cloud at designated colocation facilities with 10 Gbps or 100 Gbps circuits, delivering high throughput and enterprise SLA guarantees.",
    referenceUrl: "https://cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview",
    tags: ["Cloud Interconnect", "Interconnect", "Dr Failover"]
  },
  {
    id: "gcp-pca-272",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Hybrid Interconnect: Dedicated vs Partner Interconnect: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Cloud Interconnect to establish a private, high-capacity 100 Gbps connection between an enterprise data center and Google Cloud that does not traverse the public internet.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Dedicated Interconnect (10/100 Gbps cross-connects) vs Partner Interconnect is under consideration.",
    options: [
      { id: 'A', text: "Provision Google Cloud Dedicated Interconnect with 100 Gbps circuits at a designated colocation facility." },
      { id: 'B', text: "Establish an HA Cloud VPN tunnel over the public internet." },
      { id: 'C', text: "Use standard public internet routing with dynamic DNS." },
      { id: 'D', text: "Provision an unencrypted FTP connection over public broadband." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision Google Cloud Dedicated Interconnect with 100 Gbps circuits at a designated colocation facility. Dedicated Interconnect provides direct physical cross-connects between an on-premises network and Google Cloud at designated colocation facilities with 10 Gbps or 100 Gbps circuits, delivering high throughput and enterprise SLA guarantees.",
    referenceUrl: "https://cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview",
    tags: ["Cloud Interconnect", "Interconnect", "High Load Scale"]
  },
  {
    id: "gcp-pca-273",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Hybrid Interconnect: Dedicated vs Partner Interconnect: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Cloud Interconnect to establish a private, high-capacity 100 Gbps connection between an enterprise data center and Google Cloud that does not traverse the public internet.",
    question: "Which solution properly implements these mandatory security and governance controls? Dedicated Interconnect (10/100 Gbps cross-connects) vs Partner Interconnect is under consideration.",
    options: [
      { id: 'A', text: "Provision Google Cloud Dedicated Interconnect with 100 Gbps circuits at a designated colocation facility." },
      { id: 'B', text: "Establish an HA Cloud VPN tunnel over the public internet." },
      { id: 'C', text: "Use standard public internet routing with dynamic DNS." },
      { id: 'D', text: "Provision an unencrypted FTP connection over public broadband." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision Google Cloud Dedicated Interconnect with 100 Gbps circuits at a designated colocation facility. Dedicated Interconnect provides direct physical cross-connects between an on-premises network and Google Cloud at designated colocation facilities with 10 Gbps or 100 Gbps circuits, delivering high throughput and enterprise SLA guarantees.",
    referenceUrl: "https://cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview",
    tags: ["Cloud Interconnect", "Interconnect", "Security Compliance"]
  },
  {
    id: "gcp-pca-274",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Hybrid Interconnect: Dedicated vs Partner Interconnect: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Cloud Interconnect to establish a private, high-capacity 100 Gbps connection between an enterprise data center and Google Cloud that does not traverse the public internet.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Dedicated Interconnect (10/100 Gbps cross-connects) vs Partner Interconnect is under consideration.",
    options: [
      { id: 'A', text: "Provision Google Cloud Dedicated Interconnect with 100 Gbps circuits at a designated colocation facility." },
      { id: 'B', text: "Establish an HA Cloud VPN tunnel over the public internet." },
      { id: 'C', text: "Use standard public internet routing with dynamic DNS." },
      { id: 'D', text: "Provision an unencrypted FTP connection over public broadband." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision Google Cloud Dedicated Interconnect with 100 Gbps circuits at a designated colocation facility. Dedicated Interconnect provides direct physical cross-connects between an on-premises network and Google Cloud at designated colocation facilities with 10 Gbps or 100 Gbps circuits, delivering high throughput and enterprise SLA guarantees.",
    referenceUrl: "https://cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview",
    tags: ["Cloud Interconnect", "Interconnect", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-275",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Hybrid Interconnect: Dedicated vs Partner Interconnect: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Cloud Interconnect to establish a private, high-capacity 100 Gbps connection between an enterprise data center and Google Cloud that does not traverse the public internet.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Dedicated Interconnect (10/100 Gbps cross-connects) vs Partner Interconnect is under consideration.",
    options: [
      { id: 'A', text: "Provision Google Cloud Dedicated Interconnect with 100 Gbps circuits at a designated colocation facility." },
      { id: 'B', text: "Establish an HA Cloud VPN tunnel over the public internet." },
      { id: 'C', text: "Use standard public internet routing with dynamic DNS." },
      { id: 'D', text: "Provision an unencrypted FTP connection over public broadband." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision Google Cloud Dedicated Interconnect with 100 Gbps circuits at a designated colocation facility. Dedicated Interconnect provides direct physical cross-connects between an on-premises network and Google Cloud at designated colocation facilities with 10 Gbps or 100 Gbps circuits, delivering high throughput and enterprise SLA guarantees.",
    referenceUrl: "https://cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview",
    tags: ["Cloud Interconnect", "Interconnect", "Resilience Failure"]
  }
];

export default GCP_PCA_QUESTIONS_11;
