export const AWS_SAA_QUESTIONS_14 = [
  {
    id: "aws-saa-326",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "ElastiCache Redis Read Replica Auto-scaling: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon ElastiCache to scale in-memory cache read throughput dynamically to handle sudden weekend spikes while maintaining sub-millisecond query response times.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Amazon ElastiCache for Redis with read replica auto-scaling is being evaluated.",
    options: [
      { id: 'A', text: "Configure an ElastiCache for Redis replication group with Auto Scaling enabled on read replicas using a target tracking scaling policy." },
      { id: 'B', text: "Deploy an Amazon CloudFront distribution fronting the ElastiCache cluster." },
      { id: 'C', text: "Configure Amazon RDS Read Replicas with provisioned IOPS SSD (io2) storage." },
      { id: 'D', text: "Increase the cache node instance type vertically during each traffic spike." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an ElastiCache for Redis replication group with Auto Scaling enabled on read replicas using a target tracking scaling policy. ElastiCache for Redis supports auto-scaling for read replicas, dynamically adding or removing read replicas based on CPU utilization or memory usage metrics to handle traffic fluctuations automatically. Vertical scaling requires downtime or cluster recreation. CloudFront cannot front Redis TCP protocol endpoints.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoScaling.html",
    tags: ["Amazon ElastiCache", "ElastiCache", "Dr Failover"]
  },
  {
    id: "aws-saa-327",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "ElastiCache Redis Read Replica Auto-scaling: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon ElastiCache to scale in-memory cache read throughput dynamically to handle sudden weekend spikes while maintaining sub-millisecond query response times.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Amazon ElastiCache for Redis with read replica auto-scaling is being evaluated.",
    options: [
      { id: 'A', text: "Configure an ElastiCache for Redis replication group with Auto Scaling enabled on read replicas using a target tracking scaling policy." },
      { id: 'B', text: "Configure Amazon RDS Read Replicas with provisioned IOPS SSD (io2) storage." },
      { id: 'C', text: "Deploy an Amazon CloudFront distribution fronting the ElastiCache cluster." },
      { id: 'D', text: "Increase the cache node instance type vertically during each traffic spike." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an ElastiCache for Redis replication group with Auto Scaling enabled on read replicas using a target tracking scaling policy. ElastiCache for Redis supports auto-scaling for read replicas, dynamically adding or removing read replicas based on CPU utilization or memory usage metrics to handle traffic fluctuations automatically. Vertical scaling requires downtime or cluster recreation. CloudFront cannot front Redis TCP protocol endpoints.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoScaling.html",
    tags: ["Amazon ElastiCache", "ElastiCache", "High Load Scale"]
  },
  {
    id: "aws-saa-328",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "ElastiCache Redis Read Replica Auto-scaling: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon ElastiCache to scale in-memory cache read throughput dynamically to handle sudden weekend spikes while maintaining sub-millisecond query response times.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon ElastiCache for Redis with read replica auto-scaling is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Amazon CloudFront distribution fronting the ElastiCache cluster." },
      { id: 'B', text: "Increase the cache node instance type vertically during each traffic spike." },
      { id: 'C', text: "Configure an ElastiCache for Redis replication group with Auto Scaling enabled on read replicas using a target tracking scaling policy." },
      { id: 'D', text: "Configure Amazon RDS Read Replicas with provisioned IOPS SSD (io2) storage." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an ElastiCache for Redis replication group with Auto Scaling enabled on read replicas using a target tracking scaling policy. ElastiCache for Redis supports auto-scaling for read replicas, dynamically adding or removing read replicas based on CPU utilization or memory usage metrics to handle traffic fluctuations automatically. Vertical scaling requires downtime or cluster recreation. CloudFront cannot front Redis TCP protocol endpoints.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoScaling.html",
    tags: ["Amazon ElastiCache", "ElastiCache", "Security Compliance"]
  },
  {
    id: "aws-saa-329",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "ElastiCache Redis Read Replica Auto-scaling: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon ElastiCache to scale in-memory cache read throughput dynamically to handle sudden weekend spikes while maintaining sub-millisecond query response times.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Amazon ElastiCache for Redis with read replica auto-scaling is being evaluated.",
    options: [
      { id: 'A', text: "Configure Amazon RDS Read Replicas with provisioned IOPS SSD (io2) storage." },
      { id: 'B', text: "Configure an ElastiCache for Redis replication group with Auto Scaling enabled on read replicas using a target tracking scaling policy." },
      { id: 'C', text: "Deploy an Amazon CloudFront distribution fronting the ElastiCache cluster." },
      { id: 'D', text: "Increase the cache node instance type vertically during each traffic spike." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an ElastiCache for Redis replication group with Auto Scaling enabled on read replicas using a target tracking scaling policy. ElastiCache for Redis supports auto-scaling for read replicas, dynamically adding or removing read replicas based on CPU utilization or memory usage metrics to handle traffic fluctuations automatically. Vertical scaling requires downtime or cluster recreation. CloudFront cannot front Redis TCP protocol endpoints.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoScaling.html",
    tags: ["Amazon ElastiCache", "ElastiCache", "Hybrid Migration"]
  },
  {
    id: "aws-saa-330",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "ElastiCache Redis Read Replica Auto-scaling: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon ElastiCache to scale in-memory cache read throughput dynamically to handle sudden weekend spikes while maintaining sub-millisecond query response times.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Amazon ElastiCache for Redis with read replica auto-scaling is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Amazon CloudFront distribution fronting the ElastiCache cluster." },
      { id: 'B', text: "Configure an ElastiCache for Redis replication group with Auto Scaling enabled on read replicas using a target tracking scaling policy." },
      { id: 'C', text: "Configure Amazon RDS Read Replicas with provisioned IOPS SSD (io2) storage." },
      { id: 'D', text: "Increase the cache node instance type vertically during each traffic spike." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an ElastiCache for Redis replication group with Auto Scaling enabled on read replicas using a target tracking scaling policy. ElastiCache for Redis supports auto-scaling for read replicas, dynamically adding or removing read replicas based on CPU utilization or memory usage metrics to handle traffic fluctuations automatically. Vertical scaling requires downtime or cluster recreation. CloudFront cannot front Redis TCP protocol endpoints.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoScaling.html",
    tags: ["Amazon ElastiCache", "ElastiCache", "Resilience Failure"]
  },
  {
    id: "aws-saa-331",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "DynamoDB Partition Key Random Suffixing: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon DynamoDB to prevent partition hot-spotting when millions of transactions per second write to a table partitioned by a high-frequency date field.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? DynamoDB write sharding using random suffixes is being evaluated.",
    options: [
      { id: 'A', text: "Append a calculated random suffix (e.g. date_0 to date_N) to the partition key value at write time, and perform parallel queries across suffixes at read time." },
      { id: 'B', text: "Store all transactions in a single item by appending objects to a DynamoDB List attribute." },
      { id: 'C', text: "Convert the DynamoDB table from On-Demand capacity to Provisioned capacity with 40,000 WCU." },
      { id: 'D', text: "Create a Global Secondary Index on the date field with projection set to ALL." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Append a calculated random suffix (e.g. date_0 to date_N) to the partition key value at write time, and perform parallel queries across suffixes at read time. When an application writes heavily to a single partition key value (such as current date), a hot partition bottleneck occurs regardless of overall table capacity. Write sharding by adding a calculated random suffix (0 to N) distributes the writes uniformly across multiple physical partitions, eliminating hot spots.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-sharding.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Dr Failover"]
  },
  {
    id: "aws-saa-332",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "DynamoDB Partition Key Random Suffixing: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon DynamoDB to prevent partition hot-spotting when millions of transactions per second write to a table partitioned by a high-frequency date field.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? DynamoDB write sharding using random suffixes is being evaluated.",
    options: [
      { id: 'A', text: "Convert the DynamoDB table from On-Demand capacity to Provisioned capacity with 40,000 WCU." },
      { id: 'B', text: "Store all transactions in a single item by appending objects to a DynamoDB List attribute." },
      { id: 'C', text: "Append a calculated random suffix (e.g. date_0 to date_N) to the partition key value at write time, and perform parallel queries across suffixes at read time." },
      { id: 'D', text: "Create a Global Secondary Index on the date field with projection set to ALL." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Append a calculated random suffix (e.g. date_0 to date_N) to the partition key value at write time, and perform parallel queries across suffixes at read time. When an application writes heavily to a single partition key value (such as current date), a hot partition bottleneck occurs regardless of overall table capacity. Write sharding by adding a calculated random suffix (0 to N) distributes the writes uniformly across multiple physical partitions, eliminating hot spots.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-sharding.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "High Load Scale"]
  },
  {
    id: "aws-saa-333",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "DynamoDB Partition Key Random Suffixing: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon DynamoDB to prevent partition hot-spotting when millions of transactions per second write to a table partitioned by a high-frequency date field.",
    question: "Which solution properly implements these mandatory security and governance controls? DynamoDB write sharding using random suffixes is being evaluated.",
    options: [
      { id: 'A', text: "Create a Global Secondary Index on the date field with projection set to ALL." },
      { id: 'B', text: "Convert the DynamoDB table from On-Demand capacity to Provisioned capacity with 40,000 WCU." },
      { id: 'C', text: "Append a calculated random suffix (e.g. date_0 to date_N) to the partition key value at write time, and perform parallel queries across suffixes at read time." },
      { id: 'D', text: "Store all transactions in a single item by appending objects to a DynamoDB List attribute." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Append a calculated random suffix (e.g. date_0 to date_N) to the partition key value at write time, and perform parallel queries across suffixes at read time. When an application writes heavily to a single partition key value (such as current date), a hot partition bottleneck occurs regardless of overall table capacity. Write sharding by adding a calculated random suffix (0 to N) distributes the writes uniformly across multiple physical partitions, eliminating hot spots.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-sharding.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Security Compliance"]
  },
  {
    id: "aws-saa-334",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "DynamoDB Partition Key Random Suffixing: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon DynamoDB to prevent partition hot-spotting when millions of transactions per second write to a table partitioned by a high-frequency date field.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? DynamoDB write sharding using random suffixes is being evaluated.",
    options: [
      { id: 'A', text: "Create a Global Secondary Index on the date field with projection set to ALL." },
      { id: 'B', text: "Store all transactions in a single item by appending objects to a DynamoDB List attribute." },
      { id: 'C', text: "Append a calculated random suffix (e.g. date_0 to date_N) to the partition key value at write time, and perform parallel queries across suffixes at read time." },
      { id: 'D', text: "Convert the DynamoDB table from On-Demand capacity to Provisioned capacity with 40,000 WCU." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Append a calculated random suffix (e.g. date_0 to date_N) to the partition key value at write time, and perform parallel queries across suffixes at read time. When an application writes heavily to a single partition key value (such as current date), a hot partition bottleneck occurs regardless of overall table capacity. Write sharding by adding a calculated random suffix (0 to N) distributes the writes uniformly across multiple physical partitions, eliminating hot spots.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-sharding.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Hybrid Migration"]
  },
  {
    id: "aws-saa-335",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "DynamoDB Partition Key Random Suffixing: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon DynamoDB to prevent partition hot-spotting when millions of transactions per second write to a table partitioned by a high-frequency date field.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? DynamoDB write sharding using random suffixes is being evaluated.",
    options: [
      { id: 'A', text: "Convert the DynamoDB table from On-Demand capacity to Provisioned capacity with 40,000 WCU." },
      { id: 'B', text: "Store all transactions in a single item by appending objects to a DynamoDB List attribute." },
      { id: 'C', text: "Append a calculated random suffix (e.g. date_0 to date_N) to the partition key value at write time, and perform parallel queries across suffixes at read time." },
      { id: 'D', text: "Create a Global Secondary Index on the date field with projection set to ALL." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Append a calculated random suffix (e.g. date_0 to date_N) to the partition key value at write time, and perform parallel queries across suffixes at read time. When an application writes heavily to a single partition key value (such as current date), a hot partition bottleneck occurs regardless of overall table capacity. Write sharding by adding a calculated random suffix (0 to N) distributes the writes uniformly across multiple physical partitions, eliminating hot spots.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-sharding.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Resilience Failure"]
  },
  {
    id: "aws-saa-336",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Aurora Read Replica Auto-scaling: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon Aurora to scale read throughput automatically for an Aurora MySQL cluster during unpredictable marketing promotions without dropping active database connections.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Amazon Aurora Auto Scaling with Target Tracking is being evaluated.",
    options: [
      { id: 'A', text: "Increase the instance class of the Aurora primary writer instance during each promotional event." },
      { id: 'B', text: "Deploy an AWS Lambda function triggered every minute by EventBridge to execute alter cluster commands." },
      { id: 'C', text: "Configure an Aurora Auto Scaling policy for Aurora Replicas based on Average CPU Utilization of Aurora Replicas." },
      { id: 'D', text: "Deploy an Application Load Balancer in front of the Aurora MySQL endpoint." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Aurora Auto Scaling policy for Aurora Replicas based on Average CPU Utilization of Aurora Replicas. Aurora Auto Scaling dynamically adjusts the number of Aurora Replicas (up to 15) provisioned for an Aurora DB cluster using Target Tracking scaling policies based on CPU utilization or connection count. It scales replicas out seamlessly and removes them when load subsides, balancing read queries across the reader endpoint.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Performance.html",
    tags: ["Amazon Aurora", "Aurora", "Dr Failover"]
  },
  {
    id: "aws-saa-337",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Aurora Read Replica Auto-scaling: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon Aurora to scale read throughput automatically for an Aurora MySQL cluster during unpredictable marketing promotions without dropping active database connections.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Amazon Aurora Auto Scaling with Target Tracking is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Application Load Balancer in front of the Aurora MySQL endpoint." },
      { id: 'B', text: "Increase the instance class of the Aurora primary writer instance during each promotional event." },
      { id: 'C', text: "Deploy an AWS Lambda function triggered every minute by EventBridge to execute alter cluster commands." },
      { id: 'D', text: "Configure an Aurora Auto Scaling policy for Aurora Replicas based on Average CPU Utilization of Aurora Replicas." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an Aurora Auto Scaling policy for Aurora Replicas based on Average CPU Utilization of Aurora Replicas. Aurora Auto Scaling dynamically adjusts the number of Aurora Replicas (up to 15) provisioned for an Aurora DB cluster using Target Tracking scaling policies based on CPU utilization or connection count. It scales replicas out seamlessly and removes them when load subsides, balancing read queries across the reader endpoint.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Performance.html",
    tags: ["Amazon Aurora", "Aurora", "High Load Scale"]
  },
  {
    id: "aws-saa-338",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Aurora Read Replica Auto-scaling: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon Aurora to scale read throughput automatically for an Aurora MySQL cluster during unpredictable marketing promotions without dropping active database connections.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon Aurora Auto Scaling with Target Tracking is being evaluated.",
    options: [
      { id: 'A', text: "Configure an Aurora Auto Scaling policy for Aurora Replicas based on Average CPU Utilization of Aurora Replicas." },
      { id: 'B', text: "Deploy an AWS Lambda function triggered every minute by EventBridge to execute alter cluster commands." },
      { id: 'C', text: "Increase the instance class of the Aurora primary writer instance during each promotional event." },
      { id: 'D', text: "Deploy an Application Load Balancer in front of the Aurora MySQL endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Aurora Auto Scaling policy for Aurora Replicas based on Average CPU Utilization of Aurora Replicas. Aurora Auto Scaling dynamically adjusts the number of Aurora Replicas (up to 15) provisioned for an Aurora DB cluster using Target Tracking scaling policies based on CPU utilization or connection count. It scales replicas out seamlessly and removes them when load subsides, balancing read queries across the reader endpoint.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Performance.html",
    tags: ["Amazon Aurora", "Aurora", "Security Compliance"]
  },
  {
    id: "aws-saa-339",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Aurora Read Replica Auto-scaling: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon Aurora to scale read throughput automatically for an Aurora MySQL cluster during unpredictable marketing promotions without dropping active database connections.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Amazon Aurora Auto Scaling with Target Tracking is being evaluated.",
    options: [
      { id: 'A', text: "Configure an Aurora Auto Scaling policy for Aurora Replicas based on Average CPU Utilization of Aurora Replicas." },
      { id: 'B', text: "Deploy an AWS Lambda function triggered every minute by EventBridge to execute alter cluster commands." },
      { id: 'C', text: "Deploy an Application Load Balancer in front of the Aurora MySQL endpoint." },
      { id: 'D', text: "Increase the instance class of the Aurora primary writer instance during each promotional event." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Aurora Auto Scaling policy for Aurora Replicas based on Average CPU Utilization of Aurora Replicas. Aurora Auto Scaling dynamically adjusts the number of Aurora Replicas (up to 15) provisioned for an Aurora DB cluster using Target Tracking scaling policies based on CPU utilization or connection count. It scales replicas out seamlessly and removes them when load subsides, balancing read queries across the reader endpoint.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Performance.html",
    tags: ["Amazon Aurora", "Aurora", "Hybrid Migration"]
  },
  {
    id: "aws-saa-340",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Aurora Read Replica Auto-scaling: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon Aurora to scale read throughput automatically for an Aurora MySQL cluster during unpredictable marketing promotions without dropping active database connections.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Amazon Aurora Auto Scaling with Target Tracking is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Application Load Balancer in front of the Aurora MySQL endpoint." },
      { id: 'B', text: "Deploy an AWS Lambda function triggered every minute by EventBridge to execute alter cluster commands." },
      { id: 'C', text: "Configure an Aurora Auto Scaling policy for Aurora Replicas based on Average CPU Utilization of Aurora Replicas." },
      { id: 'D', text: "Increase the instance class of the Aurora primary writer instance during each promotional event." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Aurora Auto Scaling policy for Aurora Replicas based on Average CPU Utilization of Aurora Replicas. Aurora Auto Scaling dynamically adjusts the number of Aurora Replicas (up to 15) provisioned for an Aurora DB cluster using Target Tracking scaling policies based on CPU utilization or connection count. It scales replicas out seamlessly and removes them when load subsides, balancing read queries across the reader endpoint.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Performance.html",
    tags: ["Amazon Aurora", "Aurora", "Resilience Failure"]
  },
  {
    id: "aws-saa-341",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Global Accelerator Anycast IP Routing: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on AWS Global Accelerator to improve global application performance and reduce packet loss for users worldwide accessing Application Load Balancers across multiple AWS Regions.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? AWS Global Accelerator with static Anycast IP addresses is being evaluated.",
    options: [
      { id: 'A', text: "Deploy AWS Global Accelerator, allocate two static Anycast IP addresses, and configure endpoint groups for the regional Application Load Balancers." },
      { id: 'B', text: "Deploy an AWS Direct Connect connection with public virtual interfaces in each region." },
      { id: 'C', text: "Deploy an Amazon CloudFront distribution with dynamic caching disabled." },
      { id: 'D', text: "Configure Route 53 Latency-based routing pointing to regional public IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Global Accelerator, allocate two static Anycast IP addresses, and configure endpoint groups for the regional Application Load Balancers. AWS Global Accelerator uses static Anycast IP addresses to route user traffic into the closest AWS edge location, traversing the congestion-free AWS global private network backbone directly to regional application endpoints. This significantly reduces latency, jitter, and packet loss compared to traversing the public internet. Route 53 latency routing still routes client packets over the public internet.",
    referenceUrl: "https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html",
    tags: ["AWS Global Accelerator", "Global Accelerator", "Dr Failover"]
  },
  {
    id: "aws-saa-342",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Global Accelerator Anycast IP Routing: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on AWS Global Accelerator to improve global application performance and reduce packet loss for users worldwide accessing Application Load Balancers across multiple AWS Regions.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? AWS Global Accelerator with static Anycast IP addresses is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Amazon CloudFront distribution with dynamic caching disabled." },
      { id: 'B', text: "Configure Route 53 Latency-based routing pointing to regional public IP addresses." },
      { id: 'C', text: "Deploy an AWS Direct Connect connection with public virtual interfaces in each region." },
      { id: 'D', text: "Deploy AWS Global Accelerator, allocate two static Anycast IP addresses, and configure endpoint groups for the regional Application Load Balancers." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy AWS Global Accelerator, allocate two static Anycast IP addresses, and configure endpoint groups for the regional Application Load Balancers. AWS Global Accelerator uses static Anycast IP addresses to route user traffic into the closest AWS edge location, traversing the congestion-free AWS global private network backbone directly to regional application endpoints. This significantly reduces latency, jitter, and packet loss compared to traversing the public internet. Route 53 latency routing still routes client packets over the public internet.",
    referenceUrl: "https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html",
    tags: ["AWS Global Accelerator", "Global Accelerator", "High Load Scale"]
  },
  {
    id: "aws-saa-343",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Global Accelerator Anycast IP Routing: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on AWS Global Accelerator to improve global application performance and reduce packet loss for users worldwide accessing Application Load Balancers across multiple AWS Regions.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Global Accelerator with static Anycast IP addresses is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an AWS Direct Connect connection with public virtual interfaces in each region." },
      { id: 'B', text: "Configure Route 53 Latency-based routing pointing to regional public IP addresses." },
      { id: 'C', text: "Deploy AWS Global Accelerator, allocate two static Anycast IP addresses, and configure endpoint groups for the regional Application Load Balancers." },
      { id: 'D', text: "Deploy an Amazon CloudFront distribution with dynamic caching disabled." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy AWS Global Accelerator, allocate two static Anycast IP addresses, and configure endpoint groups for the regional Application Load Balancers. AWS Global Accelerator uses static Anycast IP addresses to route user traffic into the closest AWS edge location, traversing the congestion-free AWS global private network backbone directly to regional application endpoints. This significantly reduces latency, jitter, and packet loss compared to traversing the public internet. Route 53 latency routing still routes client packets over the public internet.",
    referenceUrl: "https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html",
    tags: ["AWS Global Accelerator", "Global Accelerator", "Security Compliance"]
  },
  {
    id: "aws-saa-344",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Global Accelerator Anycast IP Routing: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on AWS Global Accelerator to improve global application performance and reduce packet loss for users worldwide accessing Application Load Balancers across multiple AWS Regions.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? AWS Global Accelerator with static Anycast IP addresses is being evaluated.",
    options: [
      { id: 'A', text: "Deploy AWS Global Accelerator, allocate two static Anycast IP addresses, and configure endpoint groups for the regional Application Load Balancers." },
      { id: 'B', text: "Configure Route 53 Latency-based routing pointing to regional public IP addresses." },
      { id: 'C', text: "Deploy an AWS Direct Connect connection with public virtual interfaces in each region." },
      { id: 'D', text: "Deploy an Amazon CloudFront distribution with dynamic caching disabled." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Global Accelerator, allocate two static Anycast IP addresses, and configure endpoint groups for the regional Application Load Balancers. AWS Global Accelerator uses static Anycast IP addresses to route user traffic into the closest AWS edge location, traversing the congestion-free AWS global private network backbone directly to regional application endpoints. This significantly reduces latency, jitter, and packet loss compared to traversing the public internet. Route 53 latency routing still routes client packets over the public internet.",
    referenceUrl: "https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html",
    tags: ["AWS Global Accelerator", "Global Accelerator", "Hybrid Migration"]
  },
  {
    id: "aws-saa-345",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Global Accelerator Anycast IP Routing: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on AWS Global Accelerator to improve global application performance and reduce packet loss for users worldwide accessing Application Load Balancers across multiple AWS Regions.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? AWS Global Accelerator with static Anycast IP addresses is being evaluated.",
    options: [
      { id: 'A', text: "Deploy AWS Global Accelerator, allocate two static Anycast IP addresses, and configure endpoint groups for the regional Application Load Balancers." },
      { id: 'B', text: "Deploy an Amazon CloudFront distribution with dynamic caching disabled." },
      { id: 'C', text: "Deploy an AWS Direct Connect connection with public virtual interfaces in each region." },
      { id: 'D', text: "Configure Route 53 Latency-based routing pointing to regional public IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Global Accelerator, allocate two static Anycast IP addresses, and configure endpoint groups for the regional Application Load Balancers. AWS Global Accelerator uses static Anycast IP addresses to route user traffic into the closest AWS edge location, traversing the congestion-free AWS global private network backbone directly to regional application endpoints. This significantly reduces latency, jitter, and packet loss compared to traversing the public internet. Route 53 latency routing still routes client packets over the public internet.",
    referenceUrl: "https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html",
    tags: ["AWS Global Accelerator", "Global Accelerator", "Resilience Failure"]
  },
  {
    id: "aws-saa-346",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "CloudFront Field-Level Encryption: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon CloudFront to encrypt sensitive user data (such as credit card numbers) at the edge before sending requests to the origin Application Load Balancer so only specific downstream microservices can decrypt it.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? CloudFront Field-Level Encryption is being evaluated.",
    options: [
      { id: 'A', text: "Deploy a Lambda@Edge viewer-request function to encrypt request parameters using a symmetric KMS key." },
      { id: 'B', text: "Configure HTTPS with TLS 1.3 between CloudFront and the Application Load Balancer." },
      { id: 'C', text: "Deploy an AWS WAF rule group to inspect and hash credit card numbers in the request body." },
      { id: 'D', text: "Configure CloudFront Field-Level Encryption with an asymmetric encryption public key profile mapped to the target form fields." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure CloudFront Field-Level Encryption with an asymmetric encryption public key profile mapped to the target form fields. CloudFront Field-Level Encryption allows sensitive data in POST requests to be securely encrypted at edge locations using a public encryption key. The data remains encrypted as it traverses origins, load balancers, and intermediate services, ensuring that only backend systems with the corresponding private key can decrypt the specific sensitive fields.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html",
    tags: ["Amazon CloudFront", "CloudFront", "Dr Failover"]
  },
  {
    id: "aws-saa-347",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "CloudFront Field-Level Encryption: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon CloudFront to encrypt sensitive user data (such as credit card numbers) at the edge before sending requests to the origin Application Load Balancer so only specific downstream microservices can decrypt it.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? CloudFront Field-Level Encryption is being evaluated.",
    options: [
      { id: 'A', text: "Deploy a Lambda@Edge viewer-request function to encrypt request parameters using a symmetric KMS key." },
      { id: 'B', text: "Configure HTTPS with TLS 1.3 between CloudFront and the Application Load Balancer." },
      { id: 'C', text: "Deploy an AWS WAF rule group to inspect and hash credit card numbers in the request body." },
      { id: 'D', text: "Configure CloudFront Field-Level Encryption with an asymmetric encryption public key profile mapped to the target form fields." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure CloudFront Field-Level Encryption with an asymmetric encryption public key profile mapped to the target form fields. CloudFront Field-Level Encryption allows sensitive data in POST requests to be securely encrypted at edge locations using a public encryption key. The data remains encrypted as it traverses origins, load balancers, and intermediate services, ensuring that only backend systems with the corresponding private key can decrypt the specific sensitive fields.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html",
    tags: ["Amazon CloudFront", "CloudFront", "High Load Scale"]
  },
  {
    id: "aws-saa-348",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "CloudFront Field-Level Encryption: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon CloudFront to encrypt sensitive user data (such as credit card numbers) at the edge before sending requests to the origin Application Load Balancer so only specific downstream microservices can decrypt it.",
    question: "Which solution properly implements these mandatory security and governance controls? CloudFront Field-Level Encryption is being evaluated.",
    options: [
      { id: 'A', text: "Deploy a Lambda@Edge viewer-request function to encrypt request parameters using a symmetric KMS key." },
      { id: 'B', text: "Deploy an AWS WAF rule group to inspect and hash credit card numbers in the request body." },
      { id: 'C', text: "Configure HTTPS with TLS 1.3 between CloudFront and the Application Load Balancer." },
      { id: 'D', text: "Configure CloudFront Field-Level Encryption with an asymmetric encryption public key profile mapped to the target form fields." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure CloudFront Field-Level Encryption with an asymmetric encryption public key profile mapped to the target form fields. CloudFront Field-Level Encryption allows sensitive data in POST requests to be securely encrypted at edge locations using a public encryption key. The data remains encrypted as it traverses origins, load balancers, and intermediate services, ensuring that only backend systems with the corresponding private key can decrypt the specific sensitive fields.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html",
    tags: ["Amazon CloudFront", "CloudFront", "Security Compliance"]
  },
  {
    id: "aws-saa-349",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "CloudFront Field-Level Encryption: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon CloudFront to encrypt sensitive user data (such as credit card numbers) at the edge before sending requests to the origin Application Load Balancer so only specific downstream microservices can decrypt it.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? CloudFront Field-Level Encryption is being evaluated.",
    options: [
      { id: 'A', text: "Configure HTTPS with TLS 1.3 between CloudFront and the Application Load Balancer." },
      { id: 'B', text: "Deploy an AWS WAF rule group to inspect and hash credit card numbers in the request body." },
      { id: 'C', text: "Configure CloudFront Field-Level Encryption with an asymmetric encryption public key profile mapped to the target form fields." },
      { id: 'D', text: "Deploy a Lambda@Edge viewer-request function to encrypt request parameters using a symmetric KMS key." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure CloudFront Field-Level Encryption with an asymmetric encryption public key profile mapped to the target form fields. CloudFront Field-Level Encryption allows sensitive data in POST requests to be securely encrypted at edge locations using a public encryption key. The data remains encrypted as it traverses origins, load balancers, and intermediate services, ensuring that only backend systems with the corresponding private key can decrypt the specific sensitive fields.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html",
    tags: ["Amazon CloudFront", "CloudFront", "Hybrid Migration"]
  },
  {
    id: "aws-saa-350",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "CloudFront Field-Level Encryption: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon CloudFront to encrypt sensitive user data (such as credit card numbers) at the edge before sending requests to the origin Application Load Balancer so only specific downstream microservices can decrypt it.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? CloudFront Field-Level Encryption is being evaluated.",
    options: [
      { id: 'A', text: "Deploy a Lambda@Edge viewer-request function to encrypt request parameters using a symmetric KMS key." },
      { id: 'B', text: "Deploy an AWS WAF rule group to inspect and hash credit card numbers in the request body." },
      { id: 'C', text: "Configure CloudFront Field-Level Encryption with an asymmetric encryption public key profile mapped to the target form fields." },
      { id: 'D', text: "Configure HTTPS with TLS 1.3 between CloudFront and the Application Load Balancer." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure CloudFront Field-Level Encryption with an asymmetric encryption public key profile mapped to the target form fields. CloudFront Field-Level Encryption allows sensitive data in POST requests to be securely encrypted at edge locations using a public encryption key. The data remains encrypted as it traverses origins, load balancers, and intermediate services, ensuring that only backend systems with the corresponding private key can decrypt the specific sensitive fields.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html",
    tags: ["Amazon CloudFront", "CloudFront", "Resilience Failure"]
  }
];

export default AWS_SAA_QUESTIONS_14;
