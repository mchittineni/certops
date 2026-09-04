export const GCP_PCA_QUESTIONS_12 = [
  {
    id: "gcp-pca-276",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Shared VPC Architecture (Host and Service Projects): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates VPC Networking to allow multiple independent application teams to deploy workloads into isolated projects while sharing a centralized enterprise VPC network managed by network engineers.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Shared VPC with designated Host Project and delegated Service Projects is under consideration.",
    options: [
      { id: 'A', text: "Force all teams to share a single Google Cloud project with Owner permissions." },
      { id: 'B', text: "Deploy separate isolated VPC networks in every project and connect them using public IPs." },
      { id: 'C', text: "Deploy custom software routers inside each project with manual BGP peering." },
      { id: 'D', text: "Implement Shared VPC: designate a central project as the Host Project and attach application projects as Service Projects." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement Shared VPC: designate a central project as the Host Project and attach application projects as Service Projects. Shared VPC allows an organization to connect resources from multiple service projects to a common Shared VPC network hosted in a central host project. Network administrators retain control over subnets and security policies while project teams control application resources.",
    referenceUrl: "https://cloud.google.com/vpc/docs/shared-vpc",
    tags: ["VPC Networking", "Networking", "Dr Failover"]
  },
  {
    id: "gcp-pca-277",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Shared VPC Architecture (Host and Service Projects): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates VPC Networking to allow multiple independent application teams to deploy workloads into isolated projects while sharing a centralized enterprise VPC network managed by network engineers.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Shared VPC with designated Host Project and delegated Service Projects is under consideration.",
    options: [
      { id: 'A', text: "Deploy custom software routers inside each project with manual BGP peering." },
      { id: 'B', text: "Implement Shared VPC: designate a central project as the Host Project and attach application projects as Service Projects." },
      { id: 'C', text: "Force all teams to share a single Google Cloud project with Owner permissions." },
      { id: 'D', text: "Deploy separate isolated VPC networks in every project and connect them using public IPs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement Shared VPC: designate a central project as the Host Project and attach application projects as Service Projects. Shared VPC allows an organization to connect resources from multiple service projects to a common Shared VPC network hosted in a central host project. Network administrators retain control over subnets and security policies while project teams control application resources.",
    referenceUrl: "https://cloud.google.com/vpc/docs/shared-vpc",
    tags: ["VPC Networking", "Networking", "High Load Scale"]
  },
  {
    id: "gcp-pca-278",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Shared VPC Architecture (Host and Service Projects): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates VPC Networking to allow multiple independent application teams to deploy workloads into isolated projects while sharing a centralized enterprise VPC network managed by network engineers.",
    question: "Which solution properly implements these mandatory security and governance controls? Shared VPC with designated Host Project and delegated Service Projects is under consideration.",
    options: [
      { id: 'A', text: "Deploy separate isolated VPC networks in every project and connect them using public IPs." },
      { id: 'B', text: "Implement Shared VPC: designate a central project as the Host Project and attach application projects as Service Projects." },
      { id: 'C', text: "Force all teams to share a single Google Cloud project with Owner permissions." },
      { id: 'D', text: "Deploy custom software routers inside each project with manual BGP peering." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement Shared VPC: designate a central project as the Host Project and attach application projects as Service Projects. Shared VPC allows an organization to connect resources from multiple service projects to a common Shared VPC network hosted in a central host project. Network administrators retain control over subnets and security policies while project teams control application resources.",
    referenceUrl: "https://cloud.google.com/vpc/docs/shared-vpc",
    tags: ["VPC Networking", "Networking", "Security Compliance"]
  },
  {
    id: "gcp-pca-279",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Shared VPC Architecture (Host and Service Projects): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates VPC Networking to allow multiple independent application teams to deploy workloads into isolated projects while sharing a centralized enterprise VPC network managed by network engineers.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Shared VPC with designated Host Project and delegated Service Projects is under consideration.",
    options: [
      { id: 'A', text: "Deploy custom software routers inside each project with manual BGP peering." },
      { id: 'B', text: "Force all teams to share a single Google Cloud project with Owner permissions." },
      { id: 'C', text: "Deploy separate isolated VPC networks in every project and connect them using public IPs." },
      { id: 'D', text: "Implement Shared VPC: designate a central project as the Host Project and attach application projects as Service Projects." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement Shared VPC: designate a central project as the Host Project and attach application projects as Service Projects. Shared VPC allows an organization to connect resources from multiple service projects to a common Shared VPC network hosted in a central host project. Network administrators retain control over subnets and security policies while project teams control application resources.",
    referenceUrl: "https://cloud.google.com/vpc/docs/shared-vpc",
    tags: ["VPC Networking", "Networking", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-280",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Shared VPC Architecture (Host and Service Projects): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates VPC Networking to allow multiple independent application teams to deploy workloads into isolated projects while sharing a centralized enterprise VPC network managed by network engineers.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Shared VPC with designated Host Project and delegated Service Projects is under consideration.",
    options: [
      { id: 'A', text: "Force all teams to share a single Google Cloud project with Owner permissions." },
      { id: 'B', text: "Deploy custom software routers inside each project with manual BGP peering." },
      { id: 'C', text: "Implement Shared VPC: designate a central project as the Host Project and attach application projects as Service Projects." },
      { id: 'D', text: "Deploy separate isolated VPC networks in every project and connect them using public IPs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement Shared VPC: designate a central project as the Host Project and attach application projects as Service Projects. Shared VPC allows an organization to connect resources from multiple service projects to a common Shared VPC network hosted in a central host project. Network administrators retain control over subnets and security policies while project teams control application resources.",
    referenceUrl: "https://cloud.google.com/vpc/docs/shared-vpc",
    tags: ["VPC Networking", "Networking", "Resilience Failure"]
  },
  {
    id: "gcp-pca-281",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Run Microservices Architecture: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Cloud Run to deploy a fleet of stateless microservices in containers that scale rapidly to thousands of instances during marketing promotions and scale to zero when idle.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Serverless microservices with automated concurrency and request-based autoscaling is under consideration.",
    options: [
      { id: 'A', text: "Deploy microservices on physical on-premises servers." },
      { id: 'B', text: "Host microservices inside App Engine Standard Java 8 runtimes." },
      { id: 'C', text: "Deploy microservices onto static Compute Engine instances running 24/7." },
      { id: 'D', text: "Deploy containerized microservices to Cloud Run with configured concurrency and scaling limits." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy containerized microservices to Cloud Run with configured concurrency and scaling limits. Cloud Run enables deploying containerized applications serverlessly. Each revision automatically scales up to handle incoming HTTP requests and scales down to zero when idle, charging strictly per 100 milliseconds of active vCPU and memory allocation.",
    referenceUrl: "https://cloud.google.com/run/docs/overview/what-is-cloud-run",
    tags: ["Cloud Run", "Serverless", "Dr Failover"]
  },
  {
    id: "gcp-pca-282",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Run Microservices Architecture: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Cloud Run to deploy a fleet of stateless microservices in containers that scale rapidly to thousands of instances during marketing promotions and scale to zero when idle.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Serverless microservices with automated concurrency and request-based autoscaling is under consideration.",
    options: [
      { id: 'A', text: "Deploy microservices onto static Compute Engine instances running 24/7." },
      { id: 'B', text: "Deploy containerized microservices to Cloud Run with configured concurrency and scaling limits." },
      { id: 'C', text: "Deploy microservices on physical on-premises servers." },
      { id: 'D', text: "Host microservices inside App Engine Standard Java 8 runtimes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy containerized microservices to Cloud Run with configured concurrency and scaling limits. Cloud Run enables deploying containerized applications serverlessly. Each revision automatically scales up to handle incoming HTTP requests and scales down to zero when idle, charging strictly per 100 milliseconds of active vCPU and memory allocation.",
    referenceUrl: "https://cloud.google.com/run/docs/overview/what-is-cloud-run",
    tags: ["Cloud Run", "Serverless", "High Load Scale"]
  },
  {
    id: "gcp-pca-283",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Run Microservices Architecture: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Cloud Run to deploy a fleet of stateless microservices in containers that scale rapidly to thousands of instances during marketing promotions and scale to zero when idle.",
    question: "Which solution properly implements these mandatory security and governance controls? Serverless microservices with automated concurrency and request-based autoscaling is under consideration.",
    options: [
      { id: 'A', text: "Deploy containerized microservices to Cloud Run with configured concurrency and scaling limits." },
      { id: 'B', text: "Host microservices inside App Engine Standard Java 8 runtimes." },
      { id: 'C', text: "Deploy microservices on physical on-premises servers." },
      { id: 'D', text: "Deploy microservices onto static Compute Engine instances running 24/7." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy containerized microservices to Cloud Run with configured concurrency and scaling limits. Cloud Run enables deploying containerized applications serverlessly. Each revision automatically scales up to handle incoming HTTP requests and scales down to zero when idle, charging strictly per 100 milliseconds of active vCPU and memory allocation.",
    referenceUrl: "https://cloud.google.com/run/docs/overview/what-is-cloud-run",
    tags: ["Cloud Run", "Serverless", "Security Compliance"]
  },
  {
    id: "gcp-pca-284",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Run Microservices Architecture: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Cloud Run to deploy a fleet of stateless microservices in containers that scale rapidly to thousands of instances during marketing promotions and scale to zero when idle.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Serverless microservices with automated concurrency and request-based autoscaling is under consideration.",
    options: [
      { id: 'A', text: "Deploy containerized microservices to Cloud Run with configured concurrency and scaling limits." },
      { id: 'B', text: "Deploy microservices onto static Compute Engine instances running 24/7." },
      { id: 'C', text: "Host microservices inside App Engine Standard Java 8 runtimes." },
      { id: 'D', text: "Deploy microservices on physical on-premises servers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy containerized microservices to Cloud Run with configured concurrency and scaling limits. Cloud Run enables deploying containerized applications serverlessly. Each revision automatically scales up to handle incoming HTTP requests and scales down to zero when idle, charging strictly per 100 milliseconds of active vCPU and memory allocation.",
    referenceUrl: "https://cloud.google.com/run/docs/overview/what-is-cloud-run",
    tags: ["Cloud Run", "Serverless", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-285",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Run Microservices Architecture: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Cloud Run to deploy a fleet of stateless microservices in containers that scale rapidly to thousands of instances during marketing promotions and scale to zero when idle.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Serverless microservices with automated concurrency and request-based autoscaling is under consideration.",
    options: [
      { id: 'A', text: "Host microservices inside App Engine Standard Java 8 runtimes." },
      { id: 'B', text: "Deploy microservices onto static Compute Engine instances running 24/7." },
      { id: 'C', text: "Deploy containerized microservices to Cloud Run with configured concurrency and scaling limits." },
      { id: 'D', text: "Deploy microservices on physical on-premises servers." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy containerized microservices to Cloud Run with configured concurrency and scaling limits. Cloud Run enables deploying containerized applications serverlessly. Each revision automatically scales up to handle incoming HTTP requests and scales down to zero when idle, charging strictly per 100 milliseconds of active vCPU and memory allocation.",
    referenceUrl: "https://cloud.google.com/run/docs/overview/what-is-cloud-run",
    tags: ["Cloud Run", "Serverless", "Resilience Failure"]
  },
  {
    id: "gcp-pca-286",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Dataflow Streaming ETL with Apache Beam: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Cloud Dataflow to ingest, transform, and aggregate real-time clickstream events from Cloud Pub/Sub and write analytics results to BigQuery with exactly-once processing guarantees.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Dataflow unified batch and streaming pipelines with exactly-once processing is under consideration.",
    options: [
      { id: 'A', text: "Write a custom Python script that polls Pub/Sub and executes SQL inserts one by one." },
      { id: 'B', text: "Export Pub/Sub messages to CSV text files on a local file share." },
      { id: 'C', text: "Deploy a Google Cloud Dataflow streaming pipeline built with Apache Beam." },
      { id: 'D', text: "Deploy an Apache Spark cluster on unmanaged Compute Engine virtual machines." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy a Google Cloud Dataflow streaming pipeline built with Apache Beam. Cloud Dataflow is a fully managed service for executing Apache Beam data processing pipelines. It manages resource provisioning, horizontal autoscaling, dynamic work rebalancing, and guarantees exactly-once processing for streaming datasets.",
    referenceUrl: "https://cloud.google.com/dataflow/docs/overview",
    tags: ["Cloud Dataflow", "Dataflow", "Dr Failover"]
  },
  {
    id: "gcp-pca-287",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Dataflow Streaming ETL with Apache Beam: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Cloud Dataflow to ingest, transform, and aggregate real-time clickstream events from Cloud Pub/Sub and write analytics results to BigQuery with exactly-once processing guarantees.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Dataflow unified batch and streaming pipelines with exactly-once processing is under consideration.",
    options: [
      { id: 'A', text: "Write a custom Python script that polls Pub/Sub and executes SQL inserts one by one." },
      { id: 'B', text: "Deploy a Google Cloud Dataflow streaming pipeline built with Apache Beam." },
      { id: 'C', text: "Deploy an Apache Spark cluster on unmanaged Compute Engine virtual machines." },
      { id: 'D', text: "Export Pub/Sub messages to CSV text files on a local file share." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy a Google Cloud Dataflow streaming pipeline built with Apache Beam. Cloud Dataflow is a fully managed service for executing Apache Beam data processing pipelines. It manages resource provisioning, horizontal autoscaling, dynamic work rebalancing, and guarantees exactly-once processing for streaming datasets.",
    referenceUrl: "https://cloud.google.com/dataflow/docs/overview",
    tags: ["Cloud Dataflow", "Dataflow", "High Load Scale"]
  },
  {
    id: "gcp-pca-288",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Dataflow Streaming ETL with Apache Beam: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Cloud Dataflow to ingest, transform, and aggregate real-time clickstream events from Cloud Pub/Sub and write analytics results to BigQuery with exactly-once processing guarantees.",
    question: "Which solution properly implements these mandatory security and governance controls? Dataflow unified batch and streaming pipelines with exactly-once processing is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Apache Spark cluster on unmanaged Compute Engine virtual machines." },
      { id: 'B', text: "Write a custom Python script that polls Pub/Sub and executes SQL inserts one by one." },
      { id: 'C', text: "Export Pub/Sub messages to CSV text files on a local file share." },
      { id: 'D', text: "Deploy a Google Cloud Dataflow streaming pipeline built with Apache Beam." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy a Google Cloud Dataflow streaming pipeline built with Apache Beam. Cloud Dataflow is a fully managed service for executing Apache Beam data processing pipelines. It manages resource provisioning, horizontal autoscaling, dynamic work rebalancing, and guarantees exactly-once processing for streaming datasets.",
    referenceUrl: "https://cloud.google.com/dataflow/docs/overview",
    tags: ["Cloud Dataflow", "Dataflow", "Security Compliance"]
  },
  {
    id: "gcp-pca-289",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Dataflow Streaming ETL with Apache Beam: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Cloud Dataflow to ingest, transform, and aggregate real-time clickstream events from Cloud Pub/Sub and write analytics results to BigQuery with exactly-once processing guarantees.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Dataflow unified batch and streaming pipelines with exactly-once processing is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Apache Spark cluster on unmanaged Compute Engine virtual machines." },
      { id: 'B', text: "Export Pub/Sub messages to CSV text files on a local file share." },
      { id: 'C', text: "Deploy a Google Cloud Dataflow streaming pipeline built with Apache Beam." },
      { id: 'D', text: "Write a custom Python script that polls Pub/Sub and executes SQL inserts one by one." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy a Google Cloud Dataflow streaming pipeline built with Apache Beam. Cloud Dataflow is a fully managed service for executing Apache Beam data processing pipelines. It manages resource provisioning, horizontal autoscaling, dynamic work rebalancing, and guarantees exactly-once processing for streaming datasets.",
    referenceUrl: "https://cloud.google.com/dataflow/docs/overview",
    tags: ["Cloud Dataflow", "Dataflow", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-290",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Dataflow Streaming ETL with Apache Beam: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Cloud Dataflow to ingest, transform, and aggregate real-time clickstream events from Cloud Pub/Sub and write analytics results to BigQuery with exactly-once processing guarantees.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Dataflow unified batch and streaming pipelines with exactly-once processing is under consideration.",
    options: [
      { id: 'A', text: "Write a custom Python script that polls Pub/Sub and executes SQL inserts one by one." },
      { id: 'B', text: "Deploy a Google Cloud Dataflow streaming pipeline built with Apache Beam." },
      { id: 'C', text: "Deploy an Apache Spark cluster on unmanaged Compute Engine virtual machines." },
      { id: 'D', text: "Export Pub/Sub messages to CSV text files on a local file share." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy a Google Cloud Dataflow streaming pipeline built with Apache Beam. Cloud Dataflow is a fully managed service for executing Apache Beam data processing pipelines. It manages resource provisioning, horizontal autoscaling, dynamic work rebalancing, and guarantees exactly-once processing for streaming datasets.",
    referenceUrl: "https://cloud.google.com/dataflow/docs/overview",
    tags: ["Cloud Dataflow", "Dataflow", "Resilience Failure"]
  },
  {
    id: "gcp-pca-291",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Pub/Sub Message Ingestion and Buffering: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Cloud Pub/Sub to decouple high-throughput mobile event producers from backend processing systems, absorbing traffic surges without dropping messages.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Global asynchronous messaging buffer decoupling producers and consumers is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Cloud Pub/Sub topic and create subscription endpoints for downstream consumers." },
      { id: 'B', text: "Use a local Redis cache on a single Compute Engine instance as the messaging buffer." },
      { id: 'C', text: "Write mobile events directly to local text files on client devices." },
      { id: 'D', text: "Have mobile clients connect directly to backend database tables over public internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Cloud Pub/Sub topic and create subscription endpoints for downstream consumers. Cloud Pub/Sub is a fully managed, scalable messaging service that provides reliable, low-latency, many-to-many asynchronous messaging between applications. It automatically scales to handle millions of messages per second, buffering spikes seamlessly.",
    referenceUrl: "https://cloud.google.com/pubsub/docs/overview",
    tags: ["Cloud Pub/Sub", "Pub/Sub", "Dr Failover"]
  },
  {
    id: "gcp-pca-292",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Pub/Sub Message Ingestion and Buffering: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Cloud Pub/Sub to decouple high-throughput mobile event producers from backend processing systems, absorbing traffic surges without dropping messages.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Global asynchronous messaging buffer decoupling producers and consumers is under consideration.",
    options: [
      { id: 'A', text: "Use a local Redis cache on a single Compute Engine instance as the messaging buffer." },
      { id: 'B', text: "Have mobile clients connect directly to backend database tables over public internet." },
      { id: 'C', text: "Deploy a Cloud Pub/Sub topic and create subscription endpoints for downstream consumers." },
      { id: 'D', text: "Write mobile events directly to local text files on client devices." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy a Cloud Pub/Sub topic and create subscription endpoints for downstream consumers. Cloud Pub/Sub is a fully managed, scalable messaging service that provides reliable, low-latency, many-to-many asynchronous messaging between applications. It automatically scales to handle millions of messages per second, buffering spikes seamlessly.",
    referenceUrl: "https://cloud.google.com/pubsub/docs/overview",
    tags: ["Cloud Pub/Sub", "Pub/Sub", "High Load Scale"]
  },
  {
    id: "gcp-pca-293",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Pub/Sub Message Ingestion and Buffering: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Cloud Pub/Sub to decouple high-throughput mobile event producers from backend processing systems, absorbing traffic surges without dropping messages.",
    question: "Which solution properly implements these mandatory security and governance controls? Global asynchronous messaging buffer decoupling producers and consumers is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Cloud Pub/Sub topic and create subscription endpoints for downstream consumers." },
      { id: 'B', text: "Write mobile events directly to local text files on client devices." },
      { id: 'C', text: "Have mobile clients connect directly to backend database tables over public internet." },
      { id: 'D', text: "Use a local Redis cache on a single Compute Engine instance as the messaging buffer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Cloud Pub/Sub topic and create subscription endpoints for downstream consumers. Cloud Pub/Sub is a fully managed, scalable messaging service that provides reliable, low-latency, many-to-many asynchronous messaging between applications. It automatically scales to handle millions of messages per second, buffering spikes seamlessly.",
    referenceUrl: "https://cloud.google.com/pubsub/docs/overview",
    tags: ["Cloud Pub/Sub", "Pub/Sub", "Security Compliance"]
  },
  {
    id: "gcp-pca-294",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Pub/Sub Message Ingestion and Buffering: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Cloud Pub/Sub to decouple high-throughput mobile event producers from backend processing systems, absorbing traffic surges without dropping messages.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Global asynchronous messaging buffer decoupling producers and consumers is under consideration.",
    options: [
      { id: 'A', text: "Write mobile events directly to local text files on client devices." },
      { id: 'B', text: "Deploy a Cloud Pub/Sub topic and create subscription endpoints for downstream consumers." },
      { id: 'C', text: "Have mobile clients connect directly to backend database tables over public internet." },
      { id: 'D', text: "Use a local Redis cache on a single Compute Engine instance as the messaging buffer." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy a Cloud Pub/Sub topic and create subscription endpoints for downstream consumers. Cloud Pub/Sub is a fully managed, scalable messaging service that provides reliable, low-latency, many-to-many asynchronous messaging between applications. It automatically scales to handle millions of messages per second, buffering spikes seamlessly.",
    referenceUrl: "https://cloud.google.com/pubsub/docs/overview",
    tags: ["Cloud Pub/Sub", "Pub/Sub", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-295",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Pub/Sub Message Ingestion and Buffering: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Cloud Pub/Sub to decouple high-throughput mobile event producers from backend processing systems, absorbing traffic surges without dropping messages.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Global asynchronous messaging buffer decoupling producers and consumers is under consideration.",
    options: [
      { id: 'A', text: "Have mobile clients connect directly to backend database tables over public internet." },
      { id: 'B', text: "Deploy a Cloud Pub/Sub topic and create subscription endpoints for downstream consumers." },
      { id: 'C', text: "Write mobile events directly to local text files on client devices." },
      { id: 'D', text: "Use a local Redis cache on a single Compute Engine instance as the messaging buffer." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy a Cloud Pub/Sub topic and create subscription endpoints for downstream consumers. Cloud Pub/Sub is a fully managed, scalable messaging service that provides reliable, low-latency, many-to-many asynchronous messaging between applications. It automatically scales to handle millions of messages per second, buffering spikes seamlessly.",
    referenceUrl: "https://cloud.google.com/pubsub/docs/overview",
    tags: ["Cloud Pub/Sub", "Pub/Sub", "Resilience Failure"]
  },
  {
    id: "gcp-pca-296",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "BigQuery Partitioning and Clustering: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates BigQuery to optimize query performance and minimize query billing costs when analyzing multi-terabyte transactional audit tables queried by transaction date and customer ID.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Ingestion-time/date partitioning combined with high-cardinality column clustering is under consideration.",
    options: [
      { id: 'A', text: "Export the entire dataset to Cloud Storage and grep text files using Compute Engine." },
      { id: 'B', text: "Partition the BigQuery table by transaction_date and cluster by customer_id." },
      { id: 'C', text: "Store all data in a single unpartitioned, unclustered BigQuery table." },
      { id: 'D', text: "Create separate physical BigQuery tables for every single minute of the year." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Partition the BigQuery table by transaction_date and cluster by customer_id. BigQuery table partitioning divides a table into segments based on a date, timestamp, or integer column, pruning scanned data. Clustering sorts data based on specified columns within partitions, enabling BigQuery to skip scanning irrelevant data blocks and dramatically reducing query costs.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/partitioned-tables",
    tags: ["BigQuery", "BigQuery", "Dr Failover"]
  },
  {
    id: "gcp-pca-297",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "BigQuery Partitioning and Clustering: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates BigQuery to optimize query performance and minimize query billing costs when analyzing multi-terabyte transactional audit tables queried by transaction date and customer ID.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Ingestion-time/date partitioning combined with high-cardinality column clustering is under consideration.",
    options: [
      { id: 'A', text: "Partition the BigQuery table by transaction_date and cluster by customer_id." },
      { id: 'B', text: "Create separate physical BigQuery tables for every single minute of the year." },
      { id: 'C', text: "Store all data in a single unpartitioned, unclustered BigQuery table." },
      { id: 'D', text: "Export the entire dataset to Cloud Storage and grep text files using Compute Engine." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Partition the BigQuery table by transaction_date and cluster by customer_id. BigQuery table partitioning divides a table into segments based on a date, timestamp, or integer column, pruning scanned data. Clustering sorts data based on specified columns within partitions, enabling BigQuery to skip scanning irrelevant data blocks and dramatically reducing query costs.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/partitioned-tables",
    tags: ["BigQuery", "BigQuery", "High Load Scale"]
  },
  {
    id: "gcp-pca-298",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "BigQuery Partitioning and Clustering: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates BigQuery to optimize query performance and minimize query billing costs when analyzing multi-terabyte transactional audit tables queried by transaction date and customer ID.",
    question: "Which solution properly implements these mandatory security and governance controls? Ingestion-time/date partitioning combined with high-cardinality column clustering is under consideration.",
    options: [
      { id: 'A', text: "Partition the BigQuery table by transaction_date and cluster by customer_id." },
      { id: 'B', text: "Export the entire dataset to Cloud Storage and grep text files using Compute Engine." },
      { id: 'C', text: "Create separate physical BigQuery tables for every single minute of the year." },
      { id: 'D', text: "Store all data in a single unpartitioned, unclustered BigQuery table." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Partition the BigQuery table by transaction_date and cluster by customer_id. BigQuery table partitioning divides a table into segments based on a date, timestamp, or integer column, pruning scanned data. Clustering sorts data based on specified columns within partitions, enabling BigQuery to skip scanning irrelevant data blocks and dramatically reducing query costs.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/partitioned-tables",
    tags: ["BigQuery", "BigQuery", "Security Compliance"]
  },
  {
    id: "gcp-pca-299",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "BigQuery Partitioning and Clustering: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates BigQuery to optimize query performance and minimize query billing costs when analyzing multi-terabyte transactional audit tables queried by transaction date and customer ID.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Ingestion-time/date partitioning combined with high-cardinality column clustering is under consideration.",
    options: [
      { id: 'A', text: "Export the entire dataset to Cloud Storage and grep text files using Compute Engine." },
      { id: 'B', text: "Create separate physical BigQuery tables for every single minute of the year." },
      { id: 'C', text: "Partition the BigQuery table by transaction_date and cluster by customer_id." },
      { id: 'D', text: "Store all data in a single unpartitioned, unclustered BigQuery table." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Partition the BigQuery table by transaction_date and cluster by customer_id. BigQuery table partitioning divides a table into segments based on a date, timestamp, or integer column, pruning scanned data. Clustering sorts data based on specified columns within partitions, enabling BigQuery to skip scanning irrelevant data blocks and dramatically reducing query costs.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/partitioned-tables",
    tags: ["BigQuery", "BigQuery", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-300",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "BigQuery Partitioning and Clustering: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates BigQuery to optimize query performance and minimize query billing costs when analyzing multi-terabyte transactional audit tables queried by transaction date and customer ID.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Ingestion-time/date partitioning combined with high-cardinality column clustering is under consideration.",
    options: [
      { id: 'A', text: "Create separate physical BigQuery tables for every single minute of the year." },
      { id: 'B', text: "Export the entire dataset to Cloud Storage and grep text files using Compute Engine." },
      { id: 'C', text: "Store all data in a single unpartitioned, unclustered BigQuery table." },
      { id: 'D', text: "Partition the BigQuery table by transaction_date and cluster by customer_id." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Partition the BigQuery table by transaction_date and cluster by customer_id. BigQuery table partitioning divides a table into segments based on a date, timestamp, or integer column, pruning scanned data. Clustering sorts data based on specified columns within partitions, enabling BigQuery to skip scanning irrelevant data blocks and dramatically reducing query costs.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/partitioned-tables",
    tags: ["BigQuery", "BigQuery", "Resilience Failure"]
  }
];

export default GCP_PCA_QUESTIONS_12;
