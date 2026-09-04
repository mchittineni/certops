export const AWS_SAA_QUESTIONS_13 = [
  {
    id: "aws-saa-301",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "RDS Multi-AZ DB Cluster with Two Readable Standbys: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon RDS to achieve automated failover under 35 seconds combined with read capacity across multiple Availability Zones without creating separate read replicas.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Amazon RDS Multi-AZ DB Cluster deployment is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Amazon RDS Multi-AZ DB Cluster with one primary writer and two readable standby database instances across three Availability Zones." },
      { id: 'B', text: "Deploy an Amazon RDS Multi-AZ DB Instance with one non-readable standby instance." },
      { id: 'C', text: "Deploy an Amazon RDS Single-AZ instance with asynchronous cross-region read replicas." },
      { id: 'D', text: "Deploy DynamoDB Accelerator (DAX) in front of an RDS PostgreSQL instance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Amazon RDS Multi-AZ DB Cluster with one primary writer and two readable standby database instances across three Availability Zones. RDS Multi-AZ DB Clusters deploy one primary writer and two readable standby instances across three Availability Zones. This architecture supports transaction commit latency up to 2x faster than traditional Multi-AZ DB instances, delivers automated failovers typically under 35 seconds, and allows the two standbys to serve read traffic without creating separate read replicas.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html",
    tags: ["Amazon RDS", "RDS", "Dr Failover"]
  },
  {
    id: "aws-saa-302",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "RDS Multi-AZ DB Cluster with Two Readable Standbys: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon RDS to achieve automated failover under 35 seconds combined with read capacity across multiple Availability Zones without creating separate read replicas.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Amazon RDS Multi-AZ DB Cluster deployment is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Amazon RDS Multi-AZ DB Cluster with one primary writer and two readable standby database instances across three Availability Zones." },
      { id: 'B', text: "Deploy an Amazon RDS Multi-AZ DB Instance with one non-readable standby instance." },
      { id: 'C', text: "Deploy an Amazon RDS Single-AZ instance with asynchronous cross-region read replicas." },
      { id: 'D', text: "Deploy DynamoDB Accelerator (DAX) in front of an RDS PostgreSQL instance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Amazon RDS Multi-AZ DB Cluster with one primary writer and two readable standby database instances across three Availability Zones. RDS Multi-AZ DB Clusters deploy one primary writer and two readable standby instances across three Availability Zones. This architecture supports transaction commit latency up to 2x faster than traditional Multi-AZ DB instances, delivers automated failovers typically under 35 seconds, and allows the two standbys to serve read traffic without creating separate read replicas.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html",
    tags: ["Amazon RDS", "RDS", "High Load Scale"]
  },
  {
    id: "aws-saa-303",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "RDS Multi-AZ DB Cluster with Two Readable Standbys: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon RDS to achieve automated failover under 35 seconds combined with read capacity across multiple Availability Zones without creating separate read replicas.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon RDS Multi-AZ DB Cluster deployment is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Amazon RDS Multi-AZ DB Cluster with one primary writer and two readable standby database instances across three Availability Zones." },
      { id: 'B', text: "Deploy an Amazon RDS Multi-AZ DB Instance with one non-readable standby instance." },
      { id: 'C', text: "Deploy an Amazon RDS Single-AZ instance with asynchronous cross-region read replicas." },
      { id: 'D', text: "Deploy DynamoDB Accelerator (DAX) in front of an RDS PostgreSQL instance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Amazon RDS Multi-AZ DB Cluster with one primary writer and two readable standby database instances across three Availability Zones. RDS Multi-AZ DB Clusters deploy one primary writer and two readable standby instances across three Availability Zones. This architecture supports transaction commit latency up to 2x faster than traditional Multi-AZ DB instances, delivers automated failovers typically under 35 seconds, and allows the two standbys to serve read traffic without creating separate read replicas.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html",
    tags: ["Amazon RDS", "RDS", "Security Compliance"]
  },
  {
    id: "aws-saa-304",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "RDS Multi-AZ DB Cluster with Two Readable Standbys: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon RDS to achieve automated failover under 35 seconds combined with read capacity across multiple Availability Zones without creating separate read replicas.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Amazon RDS Multi-AZ DB Cluster deployment is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Amazon RDS Multi-AZ DB Cluster with one primary writer and two readable standby database instances across three Availability Zones." },
      { id: 'B', text: "Deploy an Amazon RDS Multi-AZ DB Instance with one non-readable standby instance." },
      { id: 'C', text: "Deploy an Amazon RDS Single-AZ instance with asynchronous cross-region read replicas." },
      { id: 'D', text: "Deploy DynamoDB Accelerator (DAX) in front of an RDS PostgreSQL instance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Amazon RDS Multi-AZ DB Cluster with one primary writer and two readable standby database instances across three Availability Zones. RDS Multi-AZ DB Clusters deploy one primary writer and two readable standby instances across three Availability Zones. This architecture supports transaction commit latency up to 2x faster than traditional Multi-AZ DB instances, delivers automated failovers typically under 35 seconds, and allows the two standbys to serve read traffic without creating separate read replicas.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html",
    tags: ["Amazon RDS", "RDS", "Hybrid Migration"]
  },
  {
    id: "aws-saa-305",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "RDS Multi-AZ DB Cluster with Two Readable Standbys: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon RDS to achieve automated failover under 35 seconds combined with read capacity across multiple Availability Zones without creating separate read replicas.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Amazon RDS Multi-AZ DB Cluster deployment is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Amazon RDS Multi-AZ DB Cluster with one primary writer and two readable standby database instances across three Availability Zones." },
      { id: 'B', text: "Deploy an Amazon RDS Multi-AZ DB Instance with one non-readable standby instance." },
      { id: 'C', text: "Deploy an Amazon RDS Single-AZ instance with asynchronous cross-region read replicas." },
      { id: 'D', text: "Deploy DynamoDB Accelerator (DAX) in front of an RDS PostgreSQL instance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Amazon RDS Multi-AZ DB Cluster with one primary writer and two readable standby database instances across three Availability Zones. RDS Multi-AZ DB Clusters deploy one primary writer and two readable standby instances across three Availability Zones. This architecture supports transaction commit latency up to 2x faster than traditional Multi-AZ DB instances, delivers automated failovers typically under 35 seconds, and allows the two standbys to serve read traffic without creating separate read replicas.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html",
    tags: ["Amazon RDS", "RDS", "Resilience Failure"]
  },
  {
    id: "aws-saa-306",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "NAT Gateway Zonal Redundancy: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon VPC to prevent an Availability Zone outage from severing outbound internet connectivity for workloads in private subnets across the entire VPC.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Multi-AZ NAT Gateway deployment is being evaluated.",
    options: [
      { id: 'A', text: "Deploy a dedicated NAT Gateway in the public subnet of each Availability Zone and configure private subnet route tables to route to the NAT Gateway in their own zone." },
      { id: 'B', text: "Deploy a single NAT Gateway in AZ-a and configure route tables in all private subnets to point to it." },
      { id: 'C', text: "Deploy an egress-only internet gateway in AZ-b and enable cross-zone load balancing." },
      { id: 'D', text: "Attach an Internet Gateway directly to the private subnets without public IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a dedicated NAT Gateway in the public subnet of each Availability Zone and configure private subnet route tables to route to the NAT Gateway in their own zone. A NAT Gateway is an Availability Zone-redundant service within its specific zone, but it is not resilient to an entire AZ failure if other zones route through it. High availability best practices mandate deploying one NAT Gateway per AZ and configuring each private subnet route table to point to the NAT Gateway in its own zone.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-architecture",
    tags: ["Amazon VPC", "VPC", "Dr Failover"]
  },
  {
    id: "aws-saa-307",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "NAT Gateway Zonal Redundancy: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon VPC to prevent an Availability Zone outage from severing outbound internet connectivity for workloads in private subnets across the entire VPC.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Multi-AZ NAT Gateway deployment is being evaluated.",
    options: [
      { id: 'A', text: "Deploy a dedicated NAT Gateway in the public subnet of each Availability Zone and configure private subnet route tables to route to the NAT Gateway in their own zone." },
      { id: 'B', text: "Deploy a single NAT Gateway in AZ-a and configure route tables in all private subnets to point to it." },
      { id: 'C', text: "Deploy an egress-only internet gateway in AZ-b and enable cross-zone load balancing." },
      { id: 'D', text: "Attach an Internet Gateway directly to the private subnets without public IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a dedicated NAT Gateway in the public subnet of each Availability Zone and configure private subnet route tables to route to the NAT Gateway in their own zone. A NAT Gateway is an Availability Zone-redundant service within its specific zone, but it is not resilient to an entire AZ failure if other zones route through it. High availability best practices mandate deploying one NAT Gateway per AZ and configuring each private subnet route table to point to the NAT Gateway in its own zone.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-architecture",
    tags: ["Amazon VPC", "VPC", "High Load Scale"]
  },
  {
    id: "aws-saa-308",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "NAT Gateway Zonal Redundancy: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon VPC to prevent an Availability Zone outage from severing outbound internet connectivity for workloads in private subnets across the entire VPC.",
    question: "Which solution properly implements these mandatory security and governance controls? Multi-AZ NAT Gateway deployment is being evaluated.",
    options: [
      { id: 'A', text: "Deploy a dedicated NAT Gateway in the public subnet of each Availability Zone and configure private subnet route tables to route to the NAT Gateway in their own zone." },
      { id: 'B', text: "Deploy a single NAT Gateway in AZ-a and configure route tables in all private subnets to point to it." },
      { id: 'C', text: "Deploy an egress-only internet gateway in AZ-b and enable cross-zone load balancing." },
      { id: 'D', text: "Attach an Internet Gateway directly to the private subnets without public IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a dedicated NAT Gateway in the public subnet of each Availability Zone and configure private subnet route tables to route to the NAT Gateway in their own zone. A NAT Gateway is an Availability Zone-redundant service within its specific zone, but it is not resilient to an entire AZ failure if other zones route through it. High availability best practices mandate deploying one NAT Gateway per AZ and configuring each private subnet route table to point to the NAT Gateway in its own zone.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-architecture",
    tags: ["Amazon VPC", "VPC", "Security Compliance"]
  },
  {
    id: "aws-saa-309",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "NAT Gateway Zonal Redundancy: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon VPC to prevent an Availability Zone outage from severing outbound internet connectivity for workloads in private subnets across the entire VPC.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Multi-AZ NAT Gateway deployment is being evaluated.",
    options: [
      { id: 'A', text: "Deploy a dedicated NAT Gateway in the public subnet of each Availability Zone and configure private subnet route tables to route to the NAT Gateway in their own zone." },
      { id: 'B', text: "Deploy a single NAT Gateway in AZ-a and configure route tables in all private subnets to point to it." },
      { id: 'C', text: "Deploy an egress-only internet gateway in AZ-b and enable cross-zone load balancing." },
      { id: 'D', text: "Attach an Internet Gateway directly to the private subnets without public IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a dedicated NAT Gateway in the public subnet of each Availability Zone and configure private subnet route tables to route to the NAT Gateway in their own zone. A NAT Gateway is an Availability Zone-redundant service within its specific zone, but it is not resilient to an entire AZ failure if other zones route through it. High availability best practices mandate deploying one NAT Gateway per AZ and configuring each private subnet route table to point to the NAT Gateway in its own zone.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-architecture",
    tags: ["Amazon VPC", "VPC", "Hybrid Migration"]
  },
  {
    id: "aws-saa-310",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "NAT Gateway Zonal Redundancy: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon VPC to prevent an Availability Zone outage from severing outbound internet connectivity for workloads in private subnets across the entire VPC.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Multi-AZ NAT Gateway deployment is being evaluated.",
    options: [
      { id: 'A', text: "Deploy a dedicated NAT Gateway in the public subnet of each Availability Zone and configure private subnet route tables to route to the NAT Gateway in their own zone." },
      { id: 'B', text: "Deploy a single NAT Gateway in AZ-a and configure route tables in all private subnets to point to it." },
      { id: 'C', text: "Deploy an egress-only internet gateway in AZ-b and enable cross-zone load balancing." },
      { id: 'D', text: "Attach an Internet Gateway directly to the private subnets without public IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a dedicated NAT Gateway in the public subnet of each Availability Zone and configure private subnet route tables to route to the NAT Gateway in their own zone. A NAT Gateway is an Availability Zone-redundant service within its specific zone, but it is not resilient to an entire AZ failure if other zones route through it. High availability best practices mandate deploying one NAT Gateway per AZ and configuring each private subnet route table to point to the NAT Gateway in its own zone.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-architecture",
    tags: ["Amazon VPC", "VPC", "Resilience Failure"]
  },
  {
    id: "aws-saa-311",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Step Functions Distributed Map: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on AWS Step Functions to orchestrate large-scale parallel processing of tens of thousands of image files stored in Amazon S3 with controlled maximum concurrency to protect downstream databases.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? AWS Step Functions Distributed Map state is being evaluated.",
    options: [
      { id: 'A', text: "Configure an AWS Step Functions state machine with a Distributed Map state referencing Amazon S3 as the data source and defining a maxConcurrency limit." },
      { id: 'B', text: "Deploy an AWS Lambda function executing an internal asyncio thread pool iterating over all S3 keys." },
      { id: 'C', text: "Configure an Amazon SQS standard queue triggering Lambda with batch size set to 10,000." },
      { id: 'D', text: "Configure an Amazon EventBridge rule triggering concurrent Lambda executions simultaneously without throttling." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an AWS Step Functions state machine with a Distributed Map state referencing Amazon S3 as the data source and defining a maxConcurrency limit. Step Functions Distributed Map state is designed for high-concurrency serverless data processing directly from S3. It can orchestrate up to 10,000 parallel executions, batch inputs, and enforce strict maximum concurrency limits to protect downstream resources from overload.",
    referenceUrl: "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-asl-use-map-state-distributed.html",
    tags: ["AWS Step Functions", "Step Functions", "Dr Failover"]
  },
  {
    id: "aws-saa-312",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Step Functions Distributed Map: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on AWS Step Functions to orchestrate large-scale parallel processing of tens of thousands of image files stored in Amazon S3 with controlled maximum concurrency to protect downstream databases.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? AWS Step Functions Distributed Map state is being evaluated.",
    options: [
      { id: 'A', text: "Configure an AWS Step Functions state machine with a Distributed Map state referencing Amazon S3 as the data source and defining a maxConcurrency limit." },
      { id: 'B', text: "Deploy an AWS Lambda function executing an internal asyncio thread pool iterating over all S3 keys." },
      { id: 'C', text: "Configure an Amazon SQS standard queue triggering Lambda with batch size set to 10,000." },
      { id: 'D', text: "Configure an Amazon EventBridge rule triggering concurrent Lambda executions simultaneously without throttling." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an AWS Step Functions state machine with a Distributed Map state referencing Amazon S3 as the data source and defining a maxConcurrency limit. Step Functions Distributed Map state is designed for high-concurrency serverless data processing directly from S3. It can orchestrate up to 10,000 parallel executions, batch inputs, and enforce strict maximum concurrency limits to protect downstream resources from overload.",
    referenceUrl: "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-asl-use-map-state-distributed.html",
    tags: ["AWS Step Functions", "Step Functions", "High Load Scale"]
  },
  {
    id: "aws-saa-313",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Step Functions Distributed Map: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on AWS Step Functions to orchestrate large-scale parallel processing of tens of thousands of image files stored in Amazon S3 with controlled maximum concurrency to protect downstream databases.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Step Functions Distributed Map state is being evaluated.",
    options: [
      { id: 'A', text: "Configure an AWS Step Functions state machine with a Distributed Map state referencing Amazon S3 as the data source and defining a maxConcurrency limit." },
      { id: 'B', text: "Deploy an AWS Lambda function executing an internal asyncio thread pool iterating over all S3 keys." },
      { id: 'C', text: "Configure an Amazon SQS standard queue triggering Lambda with batch size set to 10,000." },
      { id: 'D', text: "Configure an Amazon EventBridge rule triggering concurrent Lambda executions simultaneously without throttling." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an AWS Step Functions state machine with a Distributed Map state referencing Amazon S3 as the data source and defining a maxConcurrency limit. Step Functions Distributed Map state is designed for high-concurrency serverless data processing directly from S3. It can orchestrate up to 10,000 parallel executions, batch inputs, and enforce strict maximum concurrency limits to protect downstream resources from overload.",
    referenceUrl: "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-asl-use-map-state-distributed.html",
    tags: ["AWS Step Functions", "Step Functions", "Security Compliance"]
  },
  {
    id: "aws-saa-314",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Step Functions Distributed Map: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on AWS Step Functions to orchestrate large-scale parallel processing of tens of thousands of image files stored in Amazon S3 with controlled maximum concurrency to protect downstream databases.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? AWS Step Functions Distributed Map state is being evaluated.",
    options: [
      { id: 'A', text: "Configure an AWS Step Functions state machine with a Distributed Map state referencing Amazon S3 as the data source and defining a maxConcurrency limit." },
      { id: 'B', text: "Deploy an AWS Lambda function executing an internal asyncio thread pool iterating over all S3 keys." },
      { id: 'C', text: "Configure an Amazon SQS standard queue triggering Lambda with batch size set to 10,000." },
      { id: 'D', text: "Configure an Amazon EventBridge rule triggering concurrent Lambda executions simultaneously without throttling." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an AWS Step Functions state machine with a Distributed Map state referencing Amazon S3 as the data source and defining a maxConcurrency limit. Step Functions Distributed Map state is designed for high-concurrency serverless data processing directly from S3. It can orchestrate up to 10,000 parallel executions, batch inputs, and enforce strict maximum concurrency limits to protect downstream resources from overload.",
    referenceUrl: "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-asl-use-map-state-distributed.html",
    tags: ["AWS Step Functions", "Step Functions", "Hybrid Migration"]
  },
  {
    id: "aws-saa-315",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Step Functions Distributed Map: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on AWS Step Functions to orchestrate large-scale parallel processing of tens of thousands of image files stored in Amazon S3 with controlled maximum concurrency to protect downstream databases.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? AWS Step Functions Distributed Map state is being evaluated.",
    options: [
      { id: 'A', text: "Configure an AWS Step Functions state machine with a Distributed Map state referencing Amazon S3 as the data source and defining a maxConcurrency limit." },
      { id: 'B', text: "Deploy an AWS Lambda function executing an internal asyncio thread pool iterating over all S3 keys." },
      { id: 'C', text: "Configure an Amazon SQS standard queue triggering Lambda with batch size set to 10,000." },
      { id: 'D', text: "Configure an Amazon EventBridge rule triggering concurrent Lambda executions simultaneously without throttling." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an AWS Step Functions state machine with a Distributed Map state referencing Amazon S3 as the data source and defining a maxConcurrency limit. Step Functions Distributed Map state is designed for high-concurrency serverless data processing directly from S3. It can orchestrate up to 10,000 parallel executions, batch inputs, and enforce strict maximum concurrency limits to protect downstream resources from overload.",
    referenceUrl: "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-asl-use-map-state-distributed.html",
    tags: ["AWS Step Functions", "Step Functions", "Resilience Failure"]
  },
  {
    id: "aws-saa-316",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "EC2 Cluster Placement Groups with EFA: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon EC2 to achieve lowest possible inter-node network latency and maximum throughput for a tightly coupled High Performance Computing (HPC) simulation workload.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? EC2 Cluster Placement Group with Elastic Fabric Adapter (EFA) is being evaluated.",
    options: [
      { id: 'A', text: "Launch EC2 instances supporting Elastic Fabric Adapter (EFA) into a single Cluster Placement Group within an Availability Zone." },
      { id: 'B', text: "Deploy EC2 instances across multiple Availability Zones using a Spread Placement Group." },
      { id: 'C', text: "Deploy EC2 instances across multiple AWS Regions connected via VPC Peering." },
      { id: 'D', text: "Launch EC2 instances into a Partition Placement Group with seven partitions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Launch EC2 instances supporting Elastic Fabric Adapter (EFA) into a single Cluster Placement Group within an Availability Zone. A Cluster Placement Group packs instances close together inside an Availability Zone to achieve low-latency network performance up to 100 Gbps. Elastic Fabric Adapter (EFA) provides an OS-bypass network interface that allows HPC and machine learning applications to communicate directly with hardware, drastically reducing inter-node latency. Spread and partition placement groups separate instances across hardware racks.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html#placement-groups-cluster",
    tags: ["Amazon EC2", "EC2", "Dr Failover"]
  },
  {
    id: "aws-saa-317",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "EC2 Cluster Placement Groups with EFA: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon EC2 to achieve lowest possible inter-node network latency and maximum throughput for a tightly coupled High Performance Computing (HPC) simulation workload.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? EC2 Cluster Placement Group with Elastic Fabric Adapter (EFA) is being evaluated.",
    options: [
      { id: 'A', text: "Launch EC2 instances supporting Elastic Fabric Adapter (EFA) into a single Cluster Placement Group within an Availability Zone." },
      { id: 'B', text: "Deploy EC2 instances across multiple Availability Zones using a Spread Placement Group." },
      { id: 'C', text: "Deploy EC2 instances across multiple AWS Regions connected via VPC Peering." },
      { id: 'D', text: "Launch EC2 instances into a Partition Placement Group with seven partitions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Launch EC2 instances supporting Elastic Fabric Adapter (EFA) into a single Cluster Placement Group within an Availability Zone. A Cluster Placement Group packs instances close together inside an Availability Zone to achieve low-latency network performance up to 100 Gbps. Elastic Fabric Adapter (EFA) provides an OS-bypass network interface that allows HPC and machine learning applications to communicate directly with hardware, drastically reducing inter-node latency. Spread and partition placement groups separate instances across hardware racks.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html#placement-groups-cluster",
    tags: ["Amazon EC2", "EC2", "High Load Scale"]
  },
  {
    id: "aws-saa-318",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "EC2 Cluster Placement Groups with EFA: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon EC2 to achieve lowest possible inter-node network latency and maximum throughput for a tightly coupled High Performance Computing (HPC) simulation workload.",
    question: "Which solution properly implements these mandatory security and governance controls? EC2 Cluster Placement Group with Elastic Fabric Adapter (EFA) is being evaluated.",
    options: [
      { id: 'A', text: "Launch EC2 instances supporting Elastic Fabric Adapter (EFA) into a single Cluster Placement Group within an Availability Zone." },
      { id: 'B', text: "Deploy EC2 instances across multiple Availability Zones using a Spread Placement Group." },
      { id: 'C', text: "Deploy EC2 instances across multiple AWS Regions connected via VPC Peering." },
      { id: 'D', text: "Launch EC2 instances into a Partition Placement Group with seven partitions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Launch EC2 instances supporting Elastic Fabric Adapter (EFA) into a single Cluster Placement Group within an Availability Zone. A Cluster Placement Group packs instances close together inside an Availability Zone to achieve low-latency network performance up to 100 Gbps. Elastic Fabric Adapter (EFA) provides an OS-bypass network interface that allows HPC and machine learning applications to communicate directly with hardware, drastically reducing inter-node latency. Spread and partition placement groups separate instances across hardware racks.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html#placement-groups-cluster",
    tags: ["Amazon EC2", "EC2", "Security Compliance"]
  },
  {
    id: "aws-saa-319",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "EC2 Cluster Placement Groups with EFA: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon EC2 to achieve lowest possible inter-node network latency and maximum throughput for a tightly coupled High Performance Computing (HPC) simulation workload.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? EC2 Cluster Placement Group with Elastic Fabric Adapter (EFA) is being evaluated.",
    options: [
      { id: 'A', text: "Launch EC2 instances supporting Elastic Fabric Adapter (EFA) into a single Cluster Placement Group within an Availability Zone." },
      { id: 'B', text: "Deploy EC2 instances across multiple Availability Zones using a Spread Placement Group." },
      { id: 'C', text: "Deploy EC2 instances across multiple AWS Regions connected via VPC Peering." },
      { id: 'D', text: "Launch EC2 instances into a Partition Placement Group with seven partitions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Launch EC2 instances supporting Elastic Fabric Adapter (EFA) into a single Cluster Placement Group within an Availability Zone. A Cluster Placement Group packs instances close together inside an Availability Zone to achieve low-latency network performance up to 100 Gbps. Elastic Fabric Adapter (EFA) provides an OS-bypass network interface that allows HPC and machine learning applications to communicate directly with hardware, drastically reducing inter-node latency. Spread and partition placement groups separate instances across hardware racks.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html#placement-groups-cluster",
    tags: ["Amazon EC2", "EC2", "Hybrid Migration"]
  },
  {
    id: "aws-saa-320",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "EC2 Cluster Placement Groups with EFA: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon EC2 to achieve lowest possible inter-node network latency and maximum throughput for a tightly coupled High Performance Computing (HPC) simulation workload.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? EC2 Cluster Placement Group with Elastic Fabric Adapter (EFA) is being evaluated.",
    options: [
      { id: 'A', text: "Launch EC2 instances supporting Elastic Fabric Adapter (EFA) into a single Cluster Placement Group within an Availability Zone." },
      { id: 'B', text: "Deploy EC2 instances across multiple Availability Zones using a Spread Placement Group." },
      { id: 'C', text: "Deploy EC2 instances across multiple AWS Regions connected via VPC Peering." },
      { id: 'D', text: "Launch EC2 instances into a Partition Placement Group with seven partitions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Launch EC2 instances supporting Elastic Fabric Adapter (EFA) into a single Cluster Placement Group within an Availability Zone. A Cluster Placement Group packs instances close together inside an Availability Zone to achieve low-latency network performance up to 100 Gbps. Elastic Fabric Adapter (EFA) provides an OS-bypass network interface that allows HPC and machine learning applications to communicate directly with hardware, drastically reducing inter-node latency. Spread and partition placement groups separate instances across hardware racks.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html#placement-groups-cluster",
    tags: ["Amazon EC2", "EC2", "Resilience Failure"]
  },
  {
    id: "aws-saa-321",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "FSx for Lustre Linked to S3: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon FSx to process compute-intensive machine learning datasets stored in Amazon S3 with sub-millisecond POSIX filesystem latency and automatic synchronization of updated results back to S3.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Amazon FSx for Lustre linked to an S3 data repository is being evaluated.",
    options: [
      { id: 'A', text: "Provision an Amazon FSx for Lustre file system linked to the Amazon S3 bucket, configure data repository integration, and export updated results back to S3." },
      { id: 'B', text: "Mount the Amazon S3 bucket directly onto EC2 instances using the S3FS-FUSE driver." },
      { id: 'C', text: "Copy the entire S3 dataset to EBS gp3 volumes on each EC2 instance at boot time." },
      { id: 'D', text: "Deploy Amazon EFS in General Purpose mode with default bursting throughput." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision an Amazon FSx for Lustre file system linked to the Amazon S3 bucket, configure data repository integration, and export updated results back to S3. Amazon FSx for Lustre provides a high-performance POSIX file system designed for compute-intensive workloads such as machine learning and high-performance analytics. When linked to an S3 bucket, it automatically reads data on-demand and writes back results via data repository tasks with sub-millisecond latency. FUSE drivers introduce severe I/O bottlenecks and EBS local copying wastes time and capacity.",
    referenceUrl: "https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-fs-data-repository.html",
    tags: ["Amazon FSx", "FSx", "Dr Failover"]
  },
  {
    id: "aws-saa-322",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "FSx for Lustre Linked to S3: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon FSx to process compute-intensive machine learning datasets stored in Amazon S3 with sub-millisecond POSIX filesystem latency and automatic synchronization of updated results back to S3.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Amazon FSx for Lustre linked to an S3 data repository is being evaluated.",
    options: [
      { id: 'A', text: "Provision an Amazon FSx for Lustre file system linked to the Amazon S3 bucket, configure data repository integration, and export updated results back to S3." },
      { id: 'B', text: "Mount the Amazon S3 bucket directly onto EC2 instances using the S3FS-FUSE driver." },
      { id: 'C', text: "Copy the entire S3 dataset to EBS gp3 volumes on each EC2 instance at boot time." },
      { id: 'D', text: "Deploy Amazon EFS in General Purpose mode with default bursting throughput." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision an Amazon FSx for Lustre file system linked to the Amazon S3 bucket, configure data repository integration, and export updated results back to S3. Amazon FSx for Lustre provides a high-performance POSIX file system designed for compute-intensive workloads such as machine learning and high-performance analytics. When linked to an S3 bucket, it automatically reads data on-demand and writes back results via data repository tasks with sub-millisecond latency. FUSE drivers introduce severe I/O bottlenecks and EBS local copying wastes time and capacity.",
    referenceUrl: "https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-fs-data-repository.html",
    tags: ["Amazon FSx", "FSx", "High Load Scale"]
  },
  {
    id: "aws-saa-323",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "FSx for Lustre Linked to S3: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon FSx to process compute-intensive machine learning datasets stored in Amazon S3 with sub-millisecond POSIX filesystem latency and automatic synchronization of updated results back to S3.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon FSx for Lustre linked to an S3 data repository is being evaluated.",
    options: [
      { id: 'A', text: "Provision an Amazon FSx for Lustre file system linked to the Amazon S3 bucket, configure data repository integration, and export updated results back to S3." },
      { id: 'B', text: "Mount the Amazon S3 bucket directly onto EC2 instances using the S3FS-FUSE driver." },
      { id: 'C', text: "Copy the entire S3 dataset to EBS gp3 volumes on each EC2 instance at boot time." },
      { id: 'D', text: "Deploy Amazon EFS in General Purpose mode with default bursting throughput." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision an Amazon FSx for Lustre file system linked to the Amazon S3 bucket, configure data repository integration, and export updated results back to S3. Amazon FSx for Lustre provides a high-performance POSIX file system designed for compute-intensive workloads such as machine learning and high-performance analytics. When linked to an S3 bucket, it automatically reads data on-demand and writes back results via data repository tasks with sub-millisecond latency. FUSE drivers introduce severe I/O bottlenecks and EBS local copying wastes time and capacity.",
    referenceUrl: "https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-fs-data-repository.html",
    tags: ["Amazon FSx", "FSx", "Security Compliance"]
  },
  {
    id: "aws-saa-324",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "FSx for Lustre Linked to S3: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon FSx to process compute-intensive machine learning datasets stored in Amazon S3 with sub-millisecond POSIX filesystem latency and automatic synchronization of updated results back to S3.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Amazon FSx for Lustre linked to an S3 data repository is being evaluated.",
    options: [
      { id: 'A', text: "Provision an Amazon FSx for Lustre file system linked to the Amazon S3 bucket, configure data repository integration, and export updated results back to S3." },
      { id: 'B', text: "Mount the Amazon S3 bucket directly onto EC2 instances using the S3FS-FUSE driver." },
      { id: 'C', text: "Copy the entire S3 dataset to EBS gp3 volumes on each EC2 instance at boot time." },
      { id: 'D', text: "Deploy Amazon EFS in General Purpose mode with default bursting throughput." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision an Amazon FSx for Lustre file system linked to the Amazon S3 bucket, configure data repository integration, and export updated results back to S3. Amazon FSx for Lustre provides a high-performance POSIX file system designed for compute-intensive workloads such as machine learning and high-performance analytics. When linked to an S3 bucket, it automatically reads data on-demand and writes back results via data repository tasks with sub-millisecond latency. FUSE drivers introduce severe I/O bottlenecks and EBS local copying wastes time and capacity.",
    referenceUrl: "https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-fs-data-repository.html",
    tags: ["Amazon FSx", "FSx", "Hybrid Migration"]
  },
  {
    id: "aws-saa-325",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "FSx for Lustre Linked to S3: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon FSx to process compute-intensive machine learning datasets stored in Amazon S3 with sub-millisecond POSIX filesystem latency and automatic synchronization of updated results back to S3.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Amazon FSx for Lustre linked to an S3 data repository is being evaluated.",
    options: [
      { id: 'A', text: "Provision an Amazon FSx for Lustre file system linked to the Amazon S3 bucket, configure data repository integration, and export updated results back to S3." },
      { id: 'B', text: "Mount the Amazon S3 bucket directly onto EC2 instances using the S3FS-FUSE driver." },
      { id: 'C', text: "Copy the entire S3 dataset to EBS gp3 volumes on each EC2 instance at boot time." },
      { id: 'D', text: "Deploy Amazon EFS in General Purpose mode with default bursting throughput." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision an Amazon FSx for Lustre file system linked to the Amazon S3 bucket, configure data repository integration, and export updated results back to S3. Amazon FSx for Lustre provides a high-performance POSIX file system designed for compute-intensive workloads such as machine learning and high-performance analytics. When linked to an S3 bucket, it automatically reads data on-demand and writes back results via data repository tasks with sub-millisecond latency. FUSE drivers introduce severe I/O bottlenecks and EBS local copying wastes time and capacity.",
    referenceUrl: "https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-fs-data-repository.html",
    tags: ["Amazon FSx", "FSx", "Resilience Failure"]
  }
];

export default AWS_SAA_QUESTIONS_13;
