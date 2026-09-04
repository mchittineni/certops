export const GCP_PCA_QUESTIONS_18 = [
  {
    id: "gcp-pca-426",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Network Service Tiers (Premium vs Standard): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates VPC Networking to minimize cloud network egress costs for an international static content download site where latency is not critical, while routing high-priority API calls over Google's global private fiber.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Network Service Tiers: Premium Tier (Google backbone) vs Standard Tier (public internet routing) is under consideration.",
    options: [
      { id: 'A', text: "Select Standard Tier networking for the static download traffic and Premium Tier networking for low-latency API services." },
      { id: 'B', text: "Deploy physical satellite links between regional offices." },
      { id: 'C', text: "Disable network caching on all servers." },
      { id: 'D', text: "Route all traffic exclusively over consumer broadband networks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Select Standard Tier networking for the static download traffic and Premium Tier networking for low-latency API services. Google Cloud Network Service Tiers offer Premium Tier (delivers traffic over Google's low-latency, highly redundant global private fiber network, entering and exiting at edge points closest to the user) and Standard Tier (routes traffic over transit ISP networks, offering lower cost at slightly higher latency).",
    referenceUrl: "https://cloud.google.com/network-tiers/docs/overview",
    tags: ["VPC Networking", "Network Tiers", "Dr Failover"]
  },
  {
    id: "gcp-pca-427",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Network Service Tiers (Premium vs Standard): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates VPC Networking to minimize cloud network egress costs for an international static content download site where latency is not critical, while routing high-priority API calls over Google's global private fiber.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Network Service Tiers: Premium Tier (Google backbone) vs Standard Tier (public internet routing) is under consideration.",
    options: [
      { id: 'A', text: "Route all traffic exclusively over consumer broadband networks." },
      { id: 'B', text: "Deploy physical satellite links between regional offices." },
      { id: 'C', text: "Disable network caching on all servers." },
      { id: 'D', text: "Select Standard Tier networking for the static download traffic and Premium Tier networking for low-latency API services." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Select Standard Tier networking for the static download traffic and Premium Tier networking for low-latency API services. Google Cloud Network Service Tiers offer Premium Tier (delivers traffic over Google's low-latency, highly redundant global private fiber network, entering and exiting at edge points closest to the user) and Standard Tier (routes traffic over transit ISP networks, offering lower cost at slightly higher latency).",
    referenceUrl: "https://cloud.google.com/network-tiers/docs/overview",
    tags: ["VPC Networking", "Network Tiers", "High Load Scale"]
  },
  {
    id: "gcp-pca-428",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Network Service Tiers (Premium vs Standard): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates VPC Networking to minimize cloud network egress costs for an international static content download site where latency is not critical, while routing high-priority API calls over Google's global private fiber.",
    question: "Which solution properly implements these mandatory security and governance controls? Network Service Tiers: Premium Tier (Google backbone) vs Standard Tier (public internet routing) is under consideration.",
    options: [
      { id: 'A', text: "Select Standard Tier networking for the static download traffic and Premium Tier networking for low-latency API services." },
      { id: 'B', text: "Route all traffic exclusively over consumer broadband networks." },
      { id: 'C', text: "Disable network caching on all servers." },
      { id: 'D', text: "Deploy physical satellite links between regional offices." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Select Standard Tier networking for the static download traffic and Premium Tier networking for low-latency API services. Google Cloud Network Service Tiers offer Premium Tier (delivers traffic over Google's low-latency, highly redundant global private fiber network, entering and exiting at edge points closest to the user) and Standard Tier (routes traffic over transit ISP networks, offering lower cost at slightly higher latency).",
    referenceUrl: "https://cloud.google.com/network-tiers/docs/overview",
    tags: ["VPC Networking", "Network Tiers", "Security Compliance"]
  },
  {
    id: "gcp-pca-429",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Network Service Tiers (Premium vs Standard): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates VPC Networking to minimize cloud network egress costs for an international static content download site where latency is not critical, while routing high-priority API calls over Google's global private fiber.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Network Service Tiers: Premium Tier (Google backbone) vs Standard Tier (public internet routing) is under consideration.",
    options: [
      { id: 'A', text: "Select Standard Tier networking for the static download traffic and Premium Tier networking for low-latency API services." },
      { id: 'B', text: "Route all traffic exclusively over consumer broadband networks." },
      { id: 'C', text: "Deploy physical satellite links between regional offices." },
      { id: 'D', text: "Disable network caching on all servers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Select Standard Tier networking for the static download traffic and Premium Tier networking for low-latency API services. Google Cloud Network Service Tiers offer Premium Tier (delivers traffic over Google's low-latency, highly redundant global private fiber network, entering and exiting at edge points closest to the user) and Standard Tier (routes traffic over transit ISP networks, offering lower cost at slightly higher latency).",
    referenceUrl: "https://cloud.google.com/network-tiers/docs/overview",
    tags: ["VPC Networking", "Network Tiers", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-430",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Network Service Tiers (Premium vs Standard): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates VPC Networking to minimize cloud network egress costs for an international static content download site where latency is not critical, while routing high-priority API calls over Google's global private fiber.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Network Service Tiers: Premium Tier (Google backbone) vs Standard Tier (public internet routing) is under consideration.",
    options: [
      { id: 'A', text: "Select Standard Tier networking for the static download traffic and Premium Tier networking for low-latency API services." },
      { id: 'B', text: "Deploy physical satellite links between regional offices." },
      { id: 'C', text: "Route all traffic exclusively over consumer broadband networks." },
      { id: 'D', text: "Disable network caching on all servers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Select Standard Tier networking for the static download traffic and Premium Tier networking for low-latency API services. Google Cloud Network Service Tiers offer Premium Tier (delivers traffic over Google's low-latency, highly redundant global private fiber network, entering and exiting at edge points closest to the user) and Standard Tier (routes traffic over transit ISP networks, offering lower cost at slightly higher latency).",
    referenceUrl: "https://cloud.google.com/network-tiers/docs/overview",
    tags: ["VPC Networking", "Network Tiers", "Resilience Failure"]
  },
  {
    id: "gcp-pca-431",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "BigQuery BI Engine In-Memory Acceleration: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates BigQuery Acceleration to accelerate executive Looker and Data Studio business intelligence dashboards so that complex aggregate SQL queries return in sub-second response times without extracting data.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? BigQuery BI Engine sub-second SQL queries for interactive dashboards is under consideration.",
    options: [
      { id: 'A', text: "Export data to local Excel spreadsheets for executive review." },
      { id: 'B', text: "Allocate BigQuery BI Engine reservation capacity to accelerate dashboard queries in-memory." },
      { id: 'C', text: "Pre-calculate all dashboard queries manually every morning." },
      { id: 'D', text: "Recreate the analytical dataset inside a single-node MySQL database." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Allocate BigQuery BI Engine reservation capacity to accelerate dashboard queries in-memory. BigQuery BI Engine is a fast, in-memory analysis service built directly into BigQuery. By allocating a BI Engine memory reservation, queries from Looker, Power BI, Tableau, or custom apps run in sub-second response times by caching frequently used table columns in RAM.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/bi-engine-overview",
    tags: ["BigQuery Acceleration", "BigQuery", "Dr Failover"]
  },
  {
    id: "gcp-pca-432",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "BigQuery BI Engine In-Memory Acceleration: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates BigQuery Acceleration to accelerate executive Looker and Data Studio business intelligence dashboards so that complex aggregate SQL queries return in sub-second response times without extracting data.",
    question: "Which architectural approach should the team select to manage this demand efficiently? BigQuery BI Engine sub-second SQL queries for interactive dashboards is under consideration.",
    options: [
      { id: 'A', text: "Pre-calculate all dashboard queries manually every morning." },
      { id: 'B', text: "Export data to local Excel spreadsheets for executive review." },
      { id: 'C', text: "Recreate the analytical dataset inside a single-node MySQL database." },
      { id: 'D', text: "Allocate BigQuery BI Engine reservation capacity to accelerate dashboard queries in-memory." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Allocate BigQuery BI Engine reservation capacity to accelerate dashboard queries in-memory. BigQuery BI Engine is a fast, in-memory analysis service built directly into BigQuery. By allocating a BI Engine memory reservation, queries from Looker, Power BI, Tableau, or custom apps run in sub-second response times by caching frequently used table columns in RAM.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/bi-engine-overview",
    tags: ["BigQuery Acceleration", "BigQuery", "High Load Scale"]
  },
  {
    id: "gcp-pca-433",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "BigQuery BI Engine In-Memory Acceleration: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates BigQuery Acceleration to accelerate executive Looker and Data Studio business intelligence dashboards so that complex aggregate SQL queries return in sub-second response times without extracting data.",
    question: "Which solution properly implements these mandatory security and governance controls? BigQuery BI Engine sub-second SQL queries for interactive dashboards is under consideration.",
    options: [
      { id: 'A', text: "Allocate BigQuery BI Engine reservation capacity to accelerate dashboard queries in-memory." },
      { id: 'B', text: "Export data to local Excel spreadsheets for executive review." },
      { id: 'C', text: "Recreate the analytical dataset inside a single-node MySQL database." },
      { id: 'D', text: "Pre-calculate all dashboard queries manually every morning." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Allocate BigQuery BI Engine reservation capacity to accelerate dashboard queries in-memory. BigQuery BI Engine is a fast, in-memory analysis service built directly into BigQuery. By allocating a BI Engine memory reservation, queries from Looker, Power BI, Tableau, or custom apps run in sub-second response times by caching frequently used table columns in RAM.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/bi-engine-overview",
    tags: ["BigQuery Acceleration", "BigQuery", "Security Compliance"]
  },
  {
    id: "gcp-pca-434",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "BigQuery BI Engine In-Memory Acceleration: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates BigQuery Acceleration to accelerate executive Looker and Data Studio business intelligence dashboards so that complex aggregate SQL queries return in sub-second response times without extracting data.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? BigQuery BI Engine sub-second SQL queries for interactive dashboards is under consideration.",
    options: [
      { id: 'A', text: "Pre-calculate all dashboard queries manually every morning." },
      { id: 'B', text: "Allocate BigQuery BI Engine reservation capacity to accelerate dashboard queries in-memory." },
      { id: 'C', text: "Export data to local Excel spreadsheets for executive review." },
      { id: 'D', text: "Recreate the analytical dataset inside a single-node MySQL database." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Allocate BigQuery BI Engine reservation capacity to accelerate dashboard queries in-memory. BigQuery BI Engine is a fast, in-memory analysis service built directly into BigQuery. By allocating a BI Engine memory reservation, queries from Looker, Power BI, Tableau, or custom apps run in sub-second response times by caching frequently used table columns in RAM.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/bi-engine-overview",
    tags: ["BigQuery Acceleration", "BigQuery", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-435",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "BigQuery BI Engine In-Memory Acceleration: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates BigQuery Acceleration to accelerate executive Looker and Data Studio business intelligence dashboards so that complex aggregate SQL queries return in sub-second response times without extracting data.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? BigQuery BI Engine sub-second SQL queries for interactive dashboards is under consideration.",
    options: [
      { id: 'A', text: "Export data to local Excel spreadsheets for executive review." },
      { id: 'B', text: "Recreate the analytical dataset inside a single-node MySQL database." },
      { id: 'C', text: "Pre-calculate all dashboard queries manually every morning." },
      { id: 'D', text: "Allocate BigQuery BI Engine reservation capacity to accelerate dashboard queries in-memory." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Allocate BigQuery BI Engine reservation capacity to accelerate dashboard queries in-memory. BigQuery BI Engine is a fast, in-memory analysis service built directly into BigQuery. By allocating a BI Engine memory reservation, queries from Looker, Power BI, Tableau, or custom apps run in sub-second response times by caching frequently used table columns in RAM.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/bi-engine-overview",
    tags: ["BigQuery Acceleration", "BigQuery", "Resilience Failure"]
  },
  {
    id: "gcp-pca-436",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "BigQuery Slot Reservations (Editions / Autoscaling Slots): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates BigQuery Capacity to establish predictable monthly analytics spending and protect business queries from on-demand per-terabyte query scanning cost spikes during high-volume reporting periods.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? BigQuery flat-rate / Editions slot reservations with dynamic autoscaling slots is under consideration.",
    options: [
      { id: 'A', text: "Allow unmetered on-demand query execution across all developer accounts." },
      { id: 'B', text: "Purchase BigQuery Editions (Standard, Enterprise, Enterprise Plus) with autoscaling slot reservations." },
      { id: 'C', text: "Migrate data to an unmanaged CSV flat file storage system." },
      { id: 'D', text: "Restrict all analysts to querying 10 MB of data per day." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Purchase BigQuery Editions (Standard, Enterprise, Enterprise Plus) with autoscaling slot reservations. BigQuery Editions provide dedicated compute capacity measured in query processing slots. With autoscaling slot reservations, organizations set minimum baseline slots and maximum scaling limits, delivering predictable monthly costs and eliminating per-query scanning cost volatility.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/editions-intro",
    tags: ["BigQuery Capacity", "BigQuery Capacity", "Dr Failover"]
  },
  {
    id: "gcp-pca-437",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "BigQuery Slot Reservations (Editions / Autoscaling Slots): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates BigQuery Capacity to establish predictable monthly analytics spending and protect business queries from on-demand per-terabyte query scanning cost spikes during high-volume reporting periods.",
    question: "Which architectural approach should the team select to manage this demand efficiently? BigQuery flat-rate / Editions slot reservations with dynamic autoscaling slots is under consideration.",
    options: [
      { id: 'A', text: "Purchase BigQuery Editions (Standard, Enterprise, Enterprise Plus) with autoscaling slot reservations." },
      { id: 'B', text: "Restrict all analysts to querying 10 MB of data per day." },
      { id: 'C', text: "Migrate data to an unmanaged CSV flat file storage system." },
      { id: 'D', text: "Allow unmetered on-demand query execution across all developer accounts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Purchase BigQuery Editions (Standard, Enterprise, Enterprise Plus) with autoscaling slot reservations. BigQuery Editions provide dedicated compute capacity measured in query processing slots. With autoscaling slot reservations, organizations set minimum baseline slots and maximum scaling limits, delivering predictable monthly costs and eliminating per-query scanning cost volatility.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/editions-intro",
    tags: ["BigQuery Capacity", "BigQuery Capacity", "High Load Scale"]
  },
  {
    id: "gcp-pca-438",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "BigQuery Slot Reservations (Editions / Autoscaling Slots): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates BigQuery Capacity to establish predictable monthly analytics spending and protect business queries from on-demand per-terabyte query scanning cost spikes during high-volume reporting periods.",
    question: "Which solution properly implements these mandatory security and governance controls? BigQuery flat-rate / Editions slot reservations with dynamic autoscaling slots is under consideration.",
    options: [
      { id: 'A', text: "Allow unmetered on-demand query execution across all developer accounts." },
      { id: 'B', text: "Migrate data to an unmanaged CSV flat file storage system." },
      { id: 'C', text: "Purchase BigQuery Editions (Standard, Enterprise, Enterprise Plus) with autoscaling slot reservations." },
      { id: 'D', text: "Restrict all analysts to querying 10 MB of data per day." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Purchase BigQuery Editions (Standard, Enterprise, Enterprise Plus) with autoscaling slot reservations. BigQuery Editions provide dedicated compute capacity measured in query processing slots. With autoscaling slot reservations, organizations set minimum baseline slots and maximum scaling limits, delivering predictable monthly costs and eliminating per-query scanning cost volatility.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/editions-intro",
    tags: ["BigQuery Capacity", "BigQuery Capacity", "Security Compliance"]
  },
  {
    id: "gcp-pca-439",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "BigQuery Slot Reservations (Editions / Autoscaling Slots): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates BigQuery Capacity to establish predictable monthly analytics spending and protect business queries from on-demand per-terabyte query scanning cost spikes during high-volume reporting periods.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? BigQuery flat-rate / Editions slot reservations with dynamic autoscaling slots is under consideration.",
    options: [
      { id: 'A', text: "Purchase BigQuery Editions (Standard, Enterprise, Enterprise Plus) with autoscaling slot reservations." },
      { id: 'B', text: "Restrict all analysts to querying 10 MB of data per day." },
      { id: 'C', text: "Migrate data to an unmanaged CSV flat file storage system." },
      { id: 'D', text: "Allow unmetered on-demand query execution across all developer accounts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Purchase BigQuery Editions (Standard, Enterprise, Enterprise Plus) with autoscaling slot reservations. BigQuery Editions provide dedicated compute capacity measured in query processing slots. With autoscaling slot reservations, organizations set minimum baseline slots and maximum scaling limits, delivering predictable monthly costs and eliminating per-query scanning cost volatility.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/editions-intro",
    tags: ["BigQuery Capacity", "BigQuery Capacity", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-440",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "BigQuery Slot Reservations (Editions / Autoscaling Slots): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates BigQuery Capacity to establish predictable monthly analytics spending and protect business queries from on-demand per-terabyte query scanning cost spikes during high-volume reporting periods.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? BigQuery flat-rate / Editions slot reservations with dynamic autoscaling slots is under consideration.",
    options: [
      { id: 'A', text: "Restrict all analysts to querying 10 MB of data per day." },
      { id: 'B', text: "Allow unmetered on-demand query execution across all developer accounts." },
      { id: 'C', text: "Migrate data to an unmanaged CSV flat file storage system." },
      { id: 'D', text: "Purchase BigQuery Editions (Standard, Enterprise, Enterprise Plus) with autoscaling slot reservations." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Purchase BigQuery Editions (Standard, Enterprise, Enterprise Plus) with autoscaling slot reservations. BigQuery Editions provide dedicated compute capacity measured in query processing slots. With autoscaling slot reservations, organizations set minimum baseline slots and maximum scaling limits, delivering predictable monthly costs and eliminating per-query scanning cost volatility.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/editions-intro",
    tags: ["BigQuery Capacity", "BigQuery Capacity", "Resilience Failure"]
  },
  {
    id: "gcp-pca-441",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Anthos / Google Cloud Distributed Cloud Overview: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Hybrid & Multi-Cloud to modernize and manage containerized microservices uniformly across on-premises VMware environments, AWS, and Google Cloud using consistent Kubernetes control planes and security policies.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Anthos / Google Cloud Distributed Cloud for unified hybrid management is under consideration.",
    options: [
      { id: 'A', text: "Implement Google Cloud Distributed Cloud (formerly Anthos) with Anthos Config Management." },
      { id: 'B', text: "Manage each cloud platform independently using disparate proprietary management tools." },
      { id: 'C', text: "Force all workloads to run exclusively on on-premises physical blade servers." },
      { id: 'D', text: "Rewrite application code specifically for each individual cloud vendor SDK." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Google Cloud Distributed Cloud (formerly Anthos) with Anthos Config Management. Google Cloud Distributed Cloud (Anthos) is a hybrid and multi-cloud management platform. It extends Google Cloud services and engineering practices to on-premises datacenters and other public clouds, enabling consistent Kubernetes management, centralized configuration, and unified service mesh observability.",
    referenceUrl: "https://cloud.google.com/distributed-cloud/overview",
    tags: ["Hybrid & Multi-Cloud", "Hybrid Cloud", "Dr Failover"]
  },
  {
    id: "gcp-pca-442",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Anthos / Google Cloud Distributed Cloud Overview: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Hybrid & Multi-Cloud to modernize and manage containerized microservices uniformly across on-premises VMware environments, AWS, and Google Cloud using consistent Kubernetes control planes and security policies.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Anthos / Google Cloud Distributed Cloud for unified hybrid management is under consideration.",
    options: [
      { id: 'A', text: "Manage each cloud platform independently using disparate proprietary management tools." },
      { id: 'B', text: "Force all workloads to run exclusively on on-premises physical blade servers." },
      { id: 'C', text: "Implement Google Cloud Distributed Cloud (formerly Anthos) with Anthos Config Management." },
      { id: 'D', text: "Rewrite application code specifically for each individual cloud vendor SDK." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement Google Cloud Distributed Cloud (formerly Anthos) with Anthos Config Management. Google Cloud Distributed Cloud (Anthos) is a hybrid and multi-cloud management platform. It extends Google Cloud services and engineering practices to on-premises datacenters and other public clouds, enabling consistent Kubernetes management, centralized configuration, and unified service mesh observability.",
    referenceUrl: "https://cloud.google.com/distributed-cloud/overview",
    tags: ["Hybrid & Multi-Cloud", "Hybrid Cloud", "High Load Scale"]
  },
  {
    id: "gcp-pca-443",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Anthos / Google Cloud Distributed Cloud Overview: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Hybrid & Multi-Cloud to modernize and manage containerized microservices uniformly across on-premises VMware environments, AWS, and Google Cloud using consistent Kubernetes control planes and security policies.",
    question: "Which solution properly implements these mandatory security and governance controls? Anthos / Google Cloud Distributed Cloud for unified hybrid management is under consideration.",
    options: [
      { id: 'A', text: "Manage each cloud platform independently using disparate proprietary management tools." },
      { id: 'B', text: "Force all workloads to run exclusively on on-premises physical blade servers." },
      { id: 'C', text: "Rewrite application code specifically for each individual cloud vendor SDK." },
      { id: 'D', text: "Implement Google Cloud Distributed Cloud (formerly Anthos) with Anthos Config Management." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement Google Cloud Distributed Cloud (formerly Anthos) with Anthos Config Management. Google Cloud Distributed Cloud (Anthos) is a hybrid and multi-cloud management platform. It extends Google Cloud services and engineering practices to on-premises datacenters and other public clouds, enabling consistent Kubernetes management, centralized configuration, and unified service mesh observability.",
    referenceUrl: "https://cloud.google.com/distributed-cloud/overview",
    tags: ["Hybrid & Multi-Cloud", "Hybrid Cloud", "Security Compliance"]
  },
  {
    id: "gcp-pca-444",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Anthos / Google Cloud Distributed Cloud Overview: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Hybrid & Multi-Cloud to modernize and manage containerized microservices uniformly across on-premises VMware environments, AWS, and Google Cloud using consistent Kubernetes control planes and security policies.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Anthos / Google Cloud Distributed Cloud for unified hybrid management is under consideration.",
    options: [
      { id: 'A', text: "Manage each cloud platform independently using disparate proprietary management tools." },
      { id: 'B', text: "Rewrite application code specifically for each individual cloud vendor SDK." },
      { id: 'C', text: "Force all workloads to run exclusively on on-premises physical blade servers." },
      { id: 'D', text: "Implement Google Cloud Distributed Cloud (formerly Anthos) with Anthos Config Management." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement Google Cloud Distributed Cloud (formerly Anthos) with Anthos Config Management. Google Cloud Distributed Cloud (Anthos) is a hybrid and multi-cloud management platform. It extends Google Cloud services and engineering practices to on-premises datacenters and other public clouds, enabling consistent Kubernetes management, centralized configuration, and unified service mesh observability.",
    referenceUrl: "https://cloud.google.com/distributed-cloud/overview",
    tags: ["Hybrid & Multi-Cloud", "Hybrid Cloud", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-445",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Anthos / Google Cloud Distributed Cloud Overview: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Hybrid & Multi-Cloud to modernize and manage containerized microservices uniformly across on-premises VMware environments, AWS, and Google Cloud using consistent Kubernetes control planes and security policies.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Anthos / Google Cloud Distributed Cloud for unified hybrid management is under consideration.",
    options: [
      { id: 'A', text: "Implement Google Cloud Distributed Cloud (formerly Anthos) with Anthos Config Management." },
      { id: 'B', text: "Manage each cloud platform independently using disparate proprietary management tools." },
      { id: 'C', text: "Force all workloads to run exclusively on on-premises physical blade servers." },
      { id: 'D', text: "Rewrite application code specifically for each individual cloud vendor SDK." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Google Cloud Distributed Cloud (formerly Anthos) with Anthos Config Management. Google Cloud Distributed Cloud (Anthos) is a hybrid and multi-cloud management platform. It extends Google Cloud services and engineering practices to on-premises datacenters and other public clouds, enabling consistent Kubernetes management, centralized configuration, and unified service mesh observability.",
    referenceUrl: "https://cloud.google.com/distributed-cloud/overview",
    tags: ["Hybrid & Multi-Cloud", "Hybrid Cloud", "Resilience Failure"]
  },
  {
    id: "gcp-pca-446",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Cloud Build CI/CD Pipelines: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates CI/CD Automation to build, test, vulnerability-scan, and deploy containerized microservices automatically to GKE whenever a pull request is merged into the main Git branch.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Cloud Build serverless automated container compilation and deployment is under consideration.",
    options: [
      { id: 'A', text: "Configure a Cloud Build trigger linked to the Git repository executing a cloudbuild.yaml pipeline." },
      { id: 'B', text: "Require operations staff to manually apply Kubernetes YAML files after business hours." },
      { id: 'C', text: "Deploy an unmanaged Jenkins instance with hardcoded root passwords on a public VM." },
      { id: 'D', text: "Compile software binaries manually on developer laptops and copy via SCP to production servers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Cloud Build trigger linked to the Git repository executing a cloudbuild.yaml pipeline. Cloud Build is Google Cloud's serverless continuous integration and continuous delivery (CI/CD) platform. It executes builds on high-performance infrastructure with native Docker, Kubernetes, and gcloud integrations, supporting automated triggers, parallel steps, and secure secret retrieval.",
    referenceUrl: "https://cloud.google.com/build/docs/overview",
    tags: ["CI/CD Automation", "Cloud Build", "Dr Failover"]
  },
  {
    id: "gcp-pca-447",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Cloud Build CI/CD Pipelines: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates CI/CD Automation to build, test, vulnerability-scan, and deploy containerized microservices automatically to GKE whenever a pull request is merged into the main Git branch.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Cloud Build serverless automated container compilation and deployment is under consideration.",
    options: [
      { id: 'A', text: "Require operations staff to manually apply Kubernetes YAML files after business hours." },
      { id: 'B', text: "Compile software binaries manually on developer laptops and copy via SCP to production servers." },
      { id: 'C', text: "Deploy an unmanaged Jenkins instance with hardcoded root passwords on a public VM." },
      { id: 'D', text: "Configure a Cloud Build trigger linked to the Git repository executing a cloudbuild.yaml pipeline." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a Cloud Build trigger linked to the Git repository executing a cloudbuild.yaml pipeline. Cloud Build is Google Cloud's serverless continuous integration and continuous delivery (CI/CD) platform. It executes builds on high-performance infrastructure with native Docker, Kubernetes, and gcloud integrations, supporting automated triggers, parallel steps, and secure secret retrieval.",
    referenceUrl: "https://cloud.google.com/build/docs/overview",
    tags: ["CI/CD Automation", "Cloud Build", "High Load Scale"]
  },
  {
    id: "gcp-pca-448",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Cloud Build CI/CD Pipelines: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates CI/CD Automation to build, test, vulnerability-scan, and deploy containerized microservices automatically to GKE whenever a pull request is merged into the main Git branch.",
    question: "Which solution properly implements these mandatory security and governance controls? Cloud Build serverless automated container compilation and deployment is under consideration.",
    options: [
      { id: 'A', text: "Configure a Cloud Build trigger linked to the Git repository executing a cloudbuild.yaml pipeline." },
      { id: 'B', text: "Compile software binaries manually on developer laptops and copy via SCP to production servers." },
      { id: 'C', text: "Require operations staff to manually apply Kubernetes YAML files after business hours." },
      { id: 'D', text: "Deploy an unmanaged Jenkins instance with hardcoded root passwords on a public VM." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Cloud Build trigger linked to the Git repository executing a cloudbuild.yaml pipeline. Cloud Build is Google Cloud's serverless continuous integration and continuous delivery (CI/CD) platform. It executes builds on high-performance infrastructure with native Docker, Kubernetes, and gcloud integrations, supporting automated triggers, parallel steps, and secure secret retrieval.",
    referenceUrl: "https://cloud.google.com/build/docs/overview",
    tags: ["CI/CD Automation", "Cloud Build", "Security Compliance"]
  },
  {
    id: "gcp-pca-449",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Cloud Build CI/CD Pipelines: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates CI/CD Automation to build, test, vulnerability-scan, and deploy containerized microservices automatically to GKE whenever a pull request is merged into the main Git branch.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Cloud Build serverless automated container compilation and deployment is under consideration.",
    options: [
      { id: 'A', text: "Configure a Cloud Build trigger linked to the Git repository executing a cloudbuild.yaml pipeline." },
      { id: 'B', text: "Require operations staff to manually apply Kubernetes YAML files after business hours." },
      { id: 'C', text: "Compile software binaries manually on developer laptops and copy via SCP to production servers." },
      { id: 'D', text: "Deploy an unmanaged Jenkins instance with hardcoded root passwords on a public VM." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Cloud Build trigger linked to the Git repository executing a cloudbuild.yaml pipeline. Cloud Build is Google Cloud's serverless continuous integration and continuous delivery (CI/CD) platform. It executes builds on high-performance infrastructure with native Docker, Kubernetes, and gcloud integrations, supporting automated triggers, parallel steps, and secure secret retrieval.",
    referenceUrl: "https://cloud.google.com/build/docs/overview",
    tags: ["CI/CD Automation", "Cloud Build", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-450",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Cloud Build CI/CD Pipelines: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates CI/CD Automation to build, test, vulnerability-scan, and deploy containerized microservices automatically to GKE whenever a pull request is merged into the main Git branch.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Cloud Build serverless automated container compilation and deployment is under consideration.",
    options: [
      { id: 'A', text: "Compile software binaries manually on developer laptops and copy via SCP to production servers." },
      { id: 'B', text: "Deploy an unmanaged Jenkins instance with hardcoded root passwords on a public VM." },
      { id: 'C', text: "Require operations staff to manually apply Kubernetes YAML files after business hours." },
      { id: 'D', text: "Configure a Cloud Build trigger linked to the Git repository executing a cloudbuild.yaml pipeline." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a Cloud Build trigger linked to the Git repository executing a cloudbuild.yaml pipeline. Cloud Build is Google Cloud's serverless continuous integration and continuous delivery (CI/CD) platform. It executes builds on high-performance infrastructure with native Docker, Kubernetes, and gcloud integrations, supporting automated triggers, parallel steps, and secure secret retrieval.",
    referenceUrl: "https://cloud.google.com/build/docs/overview",
    tags: ["CI/CD Automation", "Cloud Build", "Resilience Failure"]
  }
];

export default GCP_PCA_QUESTIONS_18;
