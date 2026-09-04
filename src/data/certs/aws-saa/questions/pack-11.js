export const AWS_SAA_QUESTIONS_11 = [
  {
    id: "aws-saa-251",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "S3 Cross-Region Replication with RTC: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon S3 to replicate objects asynchronously to a secondary AWS Region within an SLA of 15 minutes with KMS CMK encryption.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? S3 Cross-Region Replication (CRR) with Replication Time Control (RTC) is being evaluated.",
    options: [
      { id: 'A', text: "Enable S3 Cross-Region Replication with S3 Replication Time Control (RTC), specify the destination region KMS key ARN, and grant the replication IAM role decrypt and encrypt permissions." },
      { id: 'B', text: "Deploy an AWS Lambda function triggered by S3 ObjectCreated events to download and re-upload objects using default SSE-S3 encryption." },
      { id: 'C', text: "Configure S3 Batch Replication scheduled to run hourly without RTC." },
      { id: 'D', text: "Export the source region customer managed KMS key to the destination region and enable standard replication." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable S3 Cross-Region Replication with S3 Replication Time Control (RTC), specify the destination region KMS key ARN, and grant the replication IAM role decrypt and encrypt permissions. S3 Replication Time Control (RTC) provides an SLA-backed 15-minute replication guarantee for 99.99% of objects, and natively supports KMS customer-managed keys when the destination key ARN and appropriate IAM decrypt/encrypt permissions are configured. KMS keys are strictly regional and cannot be exported across regions. Lambda and Batch Replication do not provide a 15-minute SLA guarantee.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-time-control.html",
    tags: ["Amazon S3", "S3", "Dr Failover"]
  },
  {
    id: "aws-saa-252",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "S3 Cross-Region Replication with RTC: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon S3 to replicate objects asynchronously to a secondary AWS Region within an SLA of 15 minutes with KMS CMK encryption.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? S3 Cross-Region Replication (CRR) with Replication Time Control (RTC) is being evaluated.",
    options: [
      { id: 'A', text: "Export the source region customer managed KMS key to the destination region and enable standard replication." },
      { id: 'B', text: "Enable S3 Cross-Region Replication with S3 Replication Time Control (RTC), specify the destination region KMS key ARN, and grant the replication IAM role decrypt and encrypt permissions." },
      { id: 'C', text: "Deploy an AWS Lambda function triggered by S3 ObjectCreated events to download and re-upload objects using default SSE-S3 encryption." },
      { id: 'D', text: "Configure S3 Batch Replication scheduled to run hourly without RTC." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable S3 Cross-Region Replication with S3 Replication Time Control (RTC), specify the destination region KMS key ARN, and grant the replication IAM role decrypt and encrypt permissions. S3 Replication Time Control (RTC) provides an SLA-backed 15-minute replication guarantee for 99.99% of objects, and natively supports KMS customer-managed keys when the destination key ARN and appropriate IAM decrypt/encrypt permissions are configured. KMS keys are strictly regional and cannot be exported across regions. Lambda and Batch Replication do not provide a 15-minute SLA guarantee.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-time-control.html",
    tags: ["Amazon S3", "S3", "High Load Scale"]
  },
  {
    id: "aws-saa-253",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "S3 Cross-Region Replication with RTC: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon S3 to replicate objects asynchronously to a secondary AWS Region within an SLA of 15 minutes with KMS CMK encryption.",
    question: "Which solution properly implements these mandatory security and governance controls? S3 Cross-Region Replication (CRR) with Replication Time Control (RTC) is being evaluated.",
    options: [
      { id: 'A', text: "Enable S3 Cross-Region Replication with S3 Replication Time Control (RTC), specify the destination region KMS key ARN, and grant the replication IAM role decrypt and encrypt permissions." },
      { id: 'B', text: "Export the source region customer managed KMS key to the destination region and enable standard replication." },
      { id: 'C', text: "Deploy an AWS Lambda function triggered by S3 ObjectCreated events to download and re-upload objects using default SSE-S3 encryption." },
      { id: 'D', text: "Configure S3 Batch Replication scheduled to run hourly without RTC." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable S3 Cross-Region Replication with S3 Replication Time Control (RTC), specify the destination region KMS key ARN, and grant the replication IAM role decrypt and encrypt permissions. S3 Replication Time Control (RTC) provides an SLA-backed 15-minute replication guarantee for 99.99% of objects, and natively supports KMS customer-managed keys when the destination key ARN and appropriate IAM decrypt/encrypt permissions are configured. KMS keys are strictly regional and cannot be exported across regions. Lambda and Batch Replication do not provide a 15-minute SLA guarantee.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-time-control.html",
    tags: ["Amazon S3", "S3", "Security Compliance"]
  },
  {
    id: "aws-saa-254",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "S3 Cross-Region Replication with RTC: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon S3 to replicate objects asynchronously to a secondary AWS Region within an SLA of 15 minutes with KMS CMK encryption.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? S3 Cross-Region Replication (CRR) with Replication Time Control (RTC) is being evaluated.",
    options: [
      { id: 'A', text: "Configure S3 Batch Replication scheduled to run hourly without RTC." },
      { id: 'B', text: "Deploy an AWS Lambda function triggered by S3 ObjectCreated events to download and re-upload objects using default SSE-S3 encryption." },
      { id: 'C', text: "Export the source region customer managed KMS key to the destination region and enable standard replication." },
      { id: 'D', text: "Enable S3 Cross-Region Replication with S3 Replication Time Control (RTC), specify the destination region KMS key ARN, and grant the replication IAM role decrypt and encrypt permissions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable S3 Cross-Region Replication with S3 Replication Time Control (RTC), specify the destination region KMS key ARN, and grant the replication IAM role decrypt and encrypt permissions. S3 Replication Time Control (RTC) provides an SLA-backed 15-minute replication guarantee for 99.99% of objects, and natively supports KMS customer-managed keys when the destination key ARN and appropriate IAM decrypt/encrypt permissions are configured. KMS keys are strictly regional and cannot be exported across regions. Lambda and Batch Replication do not provide a 15-minute SLA guarantee.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-time-control.html",
    tags: ["Amazon S3", "S3", "Hybrid Migration"]
  },
  {
    id: "aws-saa-255",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "S3 Cross-Region Replication with RTC: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon S3 to replicate objects asynchronously to a secondary AWS Region within an SLA of 15 minutes with KMS CMK encryption.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? S3 Cross-Region Replication (CRR) with Replication Time Control (RTC) is being evaluated.",
    options: [
      { id: 'A', text: "Enable S3 Cross-Region Replication with S3 Replication Time Control (RTC), specify the destination region KMS key ARN, and grant the replication IAM role decrypt and encrypt permissions." },
      { id: 'B', text: "Configure S3 Batch Replication scheduled to run hourly without RTC." },
      { id: 'C', text: "Export the source region customer managed KMS key to the destination region and enable standard replication." },
      { id: 'D', text: "Deploy an AWS Lambda function triggered by S3 ObjectCreated events to download and re-upload objects using default SSE-S3 encryption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable S3 Cross-Region Replication with S3 Replication Time Control (RTC), specify the destination region KMS key ARN, and grant the replication IAM role decrypt and encrypt permissions. S3 Replication Time Control (RTC) provides an SLA-backed 15-minute replication guarantee for 99.99% of objects, and natively supports KMS customer-managed keys when the destination key ARN and appropriate IAM decrypt/encrypt permissions are configured. KMS keys are strictly regional and cannot be exported across regions. Lambda and Batch Replication do not provide a 15-minute SLA guarantee.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-time-control.html",
    tags: ["Amazon S3", "S3", "Resilience Failure"]
  },
  {
    id: "aws-saa-256",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Aurora Global Database Managed Write Forwarding: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon Aurora to allow read replica clusters in secondary regions to process write transactions transparently without application connection string rewrites.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Aurora Global Database with managed write forwarding is being evaluated.",
    options: [
      { id: 'A', text: "Enable managed write forwarding on the secondary Aurora DB clusters." },
      { id: 'B', text: "Deploy an AWS Global Accelerator endpoint fronting the primary writer instance." },
      { id: 'C', text: "Deploy bidirectional AWS Database Migration Service (DMS) tasks between regional clusters." },
      { id: 'D', text: "Configure Route 53 latency routing to parse SQL write statements and redirect them to the primary region." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable managed write forwarding on the secondary Aurora DB clusters. Aurora Global Database managed write forwarding allows read replicas in secondary clusters to seamlessly forward SQL write statements directly to the primary writer node over the AWS global network fabric without code changes. Route 53 and Global Accelerator operate at network layers and cannot inspect SQL statements. Bidirectional DMS introduces complex conflict resolution issues.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-write-forwarding.html",
    tags: ["Amazon Aurora", "Aurora", "Dr Failover"]
  },
  {
    id: "aws-saa-257",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Aurora Global Database Managed Write Forwarding: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon Aurora to allow read replica clusters in secondary regions to process write transactions transparently without application connection string rewrites.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Aurora Global Database with managed write forwarding is being evaluated.",
    options: [
      { id: 'A', text: "Configure Route 53 latency routing to parse SQL write statements and redirect them to the primary region." },
      { id: 'B', text: "Deploy an AWS Global Accelerator endpoint fronting the primary writer instance." },
      { id: 'C', text: "Enable managed write forwarding on the secondary Aurora DB clusters." },
      { id: 'D', text: "Deploy bidirectional AWS Database Migration Service (DMS) tasks between regional clusters." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable managed write forwarding on the secondary Aurora DB clusters. Aurora Global Database managed write forwarding allows read replicas in secondary clusters to seamlessly forward SQL write statements directly to the primary writer node over the AWS global network fabric without code changes. Route 53 and Global Accelerator operate at network layers and cannot inspect SQL statements. Bidirectional DMS introduces complex conflict resolution issues.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-write-forwarding.html",
    tags: ["Amazon Aurora", "Aurora", "High Load Scale"]
  },
  {
    id: "aws-saa-258",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Aurora Global Database Managed Write Forwarding: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon Aurora to allow read replica clusters in secondary regions to process write transactions transparently without application connection string rewrites.",
    question: "Which solution properly implements these mandatory security and governance controls? Aurora Global Database with managed write forwarding is being evaluated.",
    options: [
      { id: 'A', text: "Enable managed write forwarding on the secondary Aurora DB clusters." },
      { id: 'B', text: "Configure Route 53 latency routing to parse SQL write statements and redirect them to the primary region." },
      { id: 'C', text: "Deploy an AWS Global Accelerator endpoint fronting the primary writer instance." },
      { id: 'D', text: "Deploy bidirectional AWS Database Migration Service (DMS) tasks between regional clusters." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable managed write forwarding on the secondary Aurora DB clusters. Aurora Global Database managed write forwarding allows read replicas in secondary clusters to seamlessly forward SQL write statements directly to the primary writer node over the AWS global network fabric without code changes. Route 53 and Global Accelerator operate at network layers and cannot inspect SQL statements. Bidirectional DMS introduces complex conflict resolution issues.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-write-forwarding.html",
    tags: ["Amazon Aurora", "Aurora", "Security Compliance"]
  },
  {
    id: "aws-saa-259",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Aurora Global Database Managed Write Forwarding: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon Aurora to allow read replica clusters in secondary regions to process write transactions transparently without application connection string rewrites.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Aurora Global Database with managed write forwarding is being evaluated.",
    options: [
      { id: 'A', text: "Configure Route 53 latency routing to parse SQL write statements and redirect them to the primary region." },
      { id: 'B', text: "Enable managed write forwarding on the secondary Aurora DB clusters." },
      { id: 'C', text: "Deploy bidirectional AWS Database Migration Service (DMS) tasks between regional clusters." },
      { id: 'D', text: "Deploy an AWS Global Accelerator endpoint fronting the primary writer instance." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable managed write forwarding on the secondary Aurora DB clusters. Aurora Global Database managed write forwarding allows read replicas in secondary clusters to seamlessly forward SQL write statements directly to the primary writer node over the AWS global network fabric without code changes. Route 53 and Global Accelerator operate at network layers and cannot inspect SQL statements. Bidirectional DMS introduces complex conflict resolution issues.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-write-forwarding.html",
    tags: ["Amazon Aurora", "Aurora", "Hybrid Migration"]
  },
  {
    id: "aws-saa-260",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Aurora Global Database Managed Write Forwarding: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon Aurora to allow read replica clusters in secondary regions to process write transactions transparently without application connection string rewrites.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Aurora Global Database with managed write forwarding is being evaluated.",
    options: [
      { id: 'A', text: "Deploy bidirectional AWS Database Migration Service (DMS) tasks between regional clusters." },
      { id: 'B', text: "Configure Route 53 latency routing to parse SQL write statements and redirect them to the primary region." },
      { id: 'C', text: "Deploy an AWS Global Accelerator endpoint fronting the primary writer instance." },
      { id: 'D', text: "Enable managed write forwarding on the secondary Aurora DB clusters." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable managed write forwarding on the secondary Aurora DB clusters. Aurora Global Database managed write forwarding allows read replicas in secondary clusters to seamlessly forward SQL write statements directly to the primary writer node over the AWS global network fabric without code changes. Route 53 and Global Accelerator operate at network layers and cannot inspect SQL statements. Bidirectional DMS introduces complex conflict resolution issues.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-write-forwarding.html",
    tags: ["Amazon Aurora", "Aurora", "Resilience Failure"]
  },
  {
    id: "aws-saa-261",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Route 53 ARC Routing Controls: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon Route 53 to divert 100% of regional user traffic instantly during an availability zone or regional outage without waiting for DNS TTL expirations.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Route 53 Application Recovery Controller (ARC) routing controls is being evaluated.",
    options: [
      { id: 'A', text: "Execute an automated AWS CloudFormation stack deletion in the degraded region." },
      { id: 'B', text: "Configure Route 53 Application Recovery Controller (ARC) routing control states integrated with regional health checks." },
      { id: 'C', text: "Decrease the DNS record TTL to 1 second in Route 53 public hosted zones." },
      { id: 'D', text: "Delete the Route 53 alias record pointing to the failed region Application Load Balancer." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Route 53 Application Recovery Controller (ARC) routing control states integrated with regional health checks. Route 53 ARC routing controls provide highly reliable, redundant control plane endpoints that immediately toggle regional traffic flow by altering health check states associated with DNS records, bypassing DNS caching delays. Low TTLs are frequently cached or ignored by downstream resolvers. Deleting records or stacks causes ungraceful failures.",
    referenceUrl: "https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html",
    tags: ["Amazon Route 53", "Route 53", "Dr Failover"]
  },
  {
    id: "aws-saa-262",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Route 53 ARC Routing Controls: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon Route 53 to divert 100% of regional user traffic instantly during an availability zone or regional outage without waiting for DNS TTL expirations.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Route 53 Application Recovery Controller (ARC) routing controls is being evaluated.",
    options: [
      { id: 'A', text: "Execute an automated AWS CloudFormation stack deletion in the degraded region." },
      { id: 'B', text: "Decrease the DNS record TTL to 1 second in Route 53 public hosted zones." },
      { id: 'C', text: "Configure Route 53 Application Recovery Controller (ARC) routing control states integrated with regional health checks." },
      { id: 'D', text: "Delete the Route 53 alias record pointing to the failed region Application Load Balancer." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure Route 53 Application Recovery Controller (ARC) routing control states integrated with regional health checks. Route 53 ARC routing controls provide highly reliable, redundant control plane endpoints that immediately toggle regional traffic flow by altering health check states associated with DNS records, bypassing DNS caching delays. Low TTLs are frequently cached or ignored by downstream resolvers. Deleting records or stacks causes ungraceful failures.",
    referenceUrl: "https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html",
    tags: ["Amazon Route 53", "Route 53", "High Load Scale"]
  },
  {
    id: "aws-saa-263",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Route 53 ARC Routing Controls: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon Route 53 to divert 100% of regional user traffic instantly during an availability zone or regional outage without waiting for DNS TTL expirations.",
    question: "Which solution properly implements these mandatory security and governance controls? Route 53 Application Recovery Controller (ARC) routing controls is being evaluated.",
    options: [
      { id: 'A', text: "Configure Route 53 Application Recovery Controller (ARC) routing control states integrated with regional health checks." },
      { id: 'B', text: "Delete the Route 53 alias record pointing to the failed region Application Load Balancer." },
      { id: 'C', text: "Execute an automated AWS CloudFormation stack deletion in the degraded region." },
      { id: 'D', text: "Decrease the DNS record TTL to 1 second in Route 53 public hosted zones." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Route 53 Application Recovery Controller (ARC) routing control states integrated with regional health checks. Route 53 ARC routing controls provide highly reliable, redundant control plane endpoints that immediately toggle regional traffic flow by altering health check states associated with DNS records, bypassing DNS caching delays. Low TTLs are frequently cached or ignored by downstream resolvers. Deleting records or stacks causes ungraceful failures.",
    referenceUrl: "https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html",
    tags: ["Amazon Route 53", "Route 53", "Security Compliance"]
  },
  {
    id: "aws-saa-264",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Route 53 ARC Routing Controls: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon Route 53 to divert 100% of regional user traffic instantly during an availability zone or regional outage without waiting for DNS TTL expirations.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Route 53 Application Recovery Controller (ARC) routing controls is being evaluated.",
    options: [
      { id: 'A', text: "Configure Route 53 Application Recovery Controller (ARC) routing control states integrated with regional health checks." },
      { id: 'B', text: "Execute an automated AWS CloudFormation stack deletion in the degraded region." },
      { id: 'C', text: "Delete the Route 53 alias record pointing to the failed region Application Load Balancer." },
      { id: 'D', text: "Decrease the DNS record TTL to 1 second in Route 53 public hosted zones." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Route 53 Application Recovery Controller (ARC) routing control states integrated with regional health checks. Route 53 ARC routing controls provide highly reliable, redundant control plane endpoints that immediately toggle regional traffic flow by altering health check states associated with DNS records, bypassing DNS caching delays. Low TTLs are frequently cached or ignored by downstream resolvers. Deleting records or stacks causes ungraceful failures.",
    referenceUrl: "https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html",
    tags: ["Amazon Route 53", "Route 53", "Hybrid Migration"]
  },
  {
    id: "aws-saa-265",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Route 53 ARC Routing Controls: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon Route 53 to divert 100% of regional user traffic instantly during an availability zone or regional outage without waiting for DNS TTL expirations.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Route 53 Application Recovery Controller (ARC) routing controls is being evaluated.",
    options: [
      { id: 'A', text: "Decrease the DNS record TTL to 1 second in Route 53 public hosted zones." },
      { id: 'B', text: "Configure Route 53 Application Recovery Controller (ARC) routing control states integrated with regional health checks." },
      { id: 'C', text: "Execute an automated AWS CloudFormation stack deletion in the degraded region." },
      { id: 'D', text: "Delete the Route 53 alias record pointing to the failed region Application Load Balancer." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Route 53 Application Recovery Controller (ARC) routing control states integrated with regional health checks. Route 53 ARC routing controls provide highly reliable, redundant control plane endpoints that immediately toggle regional traffic flow by altering health check states associated with DNS records, bypassing DNS caching delays. Low TTLs are frequently cached or ignored by downstream resolvers. Deleting records or stacks causes ungraceful failures.",
    referenceUrl: "https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html",
    tags: ["Amazon Route 53", "Route 53", "Resilience Failure"]
  },
  {
    id: "aws-saa-266",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "AWS Backup Vault Lock Compliance Mode: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on AWS Backup to prevent deletion or modification of daily EBS and RDS recovery points by any user, including the root account, for a mandatory 7-year retention period.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? AWS Backup Vault Lock in compliance mode is being evaluated.",
    options: [
      { id: 'A', text: "Configure AWS Backup Vault Lock in compliance mode with minimum and maximum retention periods." },
      { id: 'B', text: "Attach an IAM permissions boundary policy to the AWS account root user." },
      { id: 'C', text: "Configure an S3 Glacier Flexible Retrieval archive with a customer-managed bucket policy." },
      { id: 'D', text: "Configure AWS Backup Vault Lock in governance mode." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Backup Vault Lock in compliance mode with minimum and maximum retention periods. AWS Backup Vault Lock in compliance mode locks the vault so that no user, including AWS account root or administrative users, can delete recovery points before their retention periods expire. Governance mode allows privileged users to delete backups. IAM boundary policies cannot restrict root account actions.",
    referenceUrl: "https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html",
    tags: ["AWS Backup", "AWS Backup", "Dr Failover"]
  },
  {
    id: "aws-saa-267",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "AWS Backup Vault Lock Compliance Mode: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on AWS Backup to prevent deletion or modification of daily EBS and RDS recovery points by any user, including the root account, for a mandatory 7-year retention period.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? AWS Backup Vault Lock in compliance mode is being evaluated.",
    options: [
      { id: 'A', text: "Attach an IAM permissions boundary policy to the AWS account root user." },
      { id: 'B', text: "Configure AWS Backup Vault Lock in governance mode." },
      { id: 'C', text: "Configure an S3 Glacier Flexible Retrieval archive with a customer-managed bucket policy." },
      { id: 'D', text: "Configure AWS Backup Vault Lock in compliance mode with minimum and maximum retention periods." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure AWS Backup Vault Lock in compliance mode with minimum and maximum retention periods. AWS Backup Vault Lock in compliance mode locks the vault so that no user, including AWS account root or administrative users, can delete recovery points before their retention periods expire. Governance mode allows privileged users to delete backups. IAM boundary policies cannot restrict root account actions.",
    referenceUrl: "https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html",
    tags: ["AWS Backup", "AWS Backup", "High Load Scale"]
  },
  {
    id: "aws-saa-268",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "AWS Backup Vault Lock Compliance Mode: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on AWS Backup to prevent deletion or modification of daily EBS and RDS recovery points by any user, including the root account, for a mandatory 7-year retention period.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Backup Vault Lock in compliance mode is being evaluated.",
    options: [
      { id: 'A', text: "Configure AWS Backup Vault Lock in compliance mode with minimum and maximum retention periods." },
      { id: 'B', text: "Configure an S3 Glacier Flexible Retrieval archive with a customer-managed bucket policy." },
      { id: 'C', text: "Configure AWS Backup Vault Lock in governance mode." },
      { id: 'D', text: "Attach an IAM permissions boundary policy to the AWS account root user." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Backup Vault Lock in compliance mode with minimum and maximum retention periods. AWS Backup Vault Lock in compliance mode locks the vault so that no user, including AWS account root or administrative users, can delete recovery points before their retention periods expire. Governance mode allows privileged users to delete backups. IAM boundary policies cannot restrict root account actions.",
    referenceUrl: "https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html",
    tags: ["AWS Backup", "AWS Backup", "Security Compliance"]
  },
  {
    id: "aws-saa-269",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "AWS Backup Vault Lock Compliance Mode: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on AWS Backup to prevent deletion or modification of daily EBS and RDS recovery points by any user, including the root account, for a mandatory 7-year retention period.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? AWS Backup Vault Lock in compliance mode is being evaluated.",
    options: [
      { id: 'A', text: "Configure AWS Backup Vault Lock in governance mode." },
      { id: 'B', text: "Configure AWS Backup Vault Lock in compliance mode with minimum and maximum retention periods." },
      { id: 'C', text: "Attach an IAM permissions boundary policy to the AWS account root user." },
      { id: 'D', text: "Configure an S3 Glacier Flexible Retrieval archive with a customer-managed bucket policy." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure AWS Backup Vault Lock in compliance mode with minimum and maximum retention periods. AWS Backup Vault Lock in compliance mode locks the vault so that no user, including AWS account root or administrative users, can delete recovery points before their retention periods expire. Governance mode allows privileged users to delete backups. IAM boundary policies cannot restrict root account actions.",
    referenceUrl: "https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html",
    tags: ["AWS Backup", "AWS Backup", "Hybrid Migration"]
  },
  {
    id: "aws-saa-270",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "AWS Backup Vault Lock Compliance Mode: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on AWS Backup to prevent deletion or modification of daily EBS and RDS recovery points by any user, including the root account, for a mandatory 7-year retention period.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? AWS Backup Vault Lock in compliance mode is being evaluated.",
    options: [
      { id: 'A', text: "Attach an IAM permissions boundary policy to the AWS account root user." },
      { id: 'B', text: "Configure an S3 Glacier Flexible Retrieval archive with a customer-managed bucket policy." },
      { id: 'C', text: "Configure AWS Backup Vault Lock in governance mode." },
      { id: 'D', text: "Configure AWS Backup Vault Lock in compliance mode with minimum and maximum retention periods." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure AWS Backup Vault Lock in compliance mode with minimum and maximum retention periods. AWS Backup Vault Lock in compliance mode locks the vault so that no user, including AWS account root or administrative users, can delete recovery points before their retention periods expire. Governance mode allows privileged users to delete backups. IAM boundary policies cannot restrict root account actions.",
    referenceUrl: "https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html",
    tags: ["AWS Backup", "AWS Backup", "Resilience Failure"]
  },
  {
    id: "aws-saa-271",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Auto Scaling Terminating Lifecycle Hooks: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon EC2 Auto Scaling to pause instance termination during scale-in events to allow up to 15 minutes for memory buffers to drain to persistent storage.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Auto Scaling terminating lifecycle hooks with SQS is being evaluated.",
    options: [
      { id: 'A', text: "Increase the Auto Scaling group Default Cooldown period to 900 seconds." },
      { id: 'B', text: "Modify the Auto Scaling group termination policy to prioritize OldestInstance." },
      { id: 'C', text: "Attach an Auto Scaling terminating lifecycle hook, send a notification to Amazon EventBridge or Amazon SQS, invoke a drain script, and complete the lifecycle action upon completion." },
      { id: 'D', text: "Configure an Application Load Balancer deregistration delay of 900 seconds." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Attach an Auto Scaling terminating lifecycle hook, send a notification to Amazon EventBridge or Amazon SQS, invoke a drain script, and complete the lifecycle action upon completion. Auto Scaling lifecycle hooks pause instance termination, placing the instance into the `Terminating:Wait` state for a configured timeout. This allows custom scripts or Lambda functions to complete data draining before calling `complete-lifecycle-action`. Cooldown periods only delay subsequent scaling activities. ALB deregistration delay only drains HTTP connections, not background worker buffers.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html",
    tags: ["Amazon EC2 Auto Scaling", "Auto Scaling", "Dr Failover"]
  },
  {
    id: "aws-saa-272",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Auto Scaling Terminating Lifecycle Hooks: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon EC2 Auto Scaling to pause instance termination during scale-in events to allow up to 15 minutes for memory buffers to drain to persistent storage.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Auto Scaling terminating lifecycle hooks with SQS is being evaluated.",
    options: [
      { id: 'A', text: "Configure an Application Load Balancer deregistration delay of 900 seconds." },
      { id: 'B', text: "Attach an Auto Scaling terminating lifecycle hook, send a notification to Amazon EventBridge or Amazon SQS, invoke a drain script, and complete the lifecycle action upon completion." },
      { id: 'C', text: "Increase the Auto Scaling group Default Cooldown period to 900 seconds." },
      { id: 'D', text: "Modify the Auto Scaling group termination policy to prioritize OldestInstance." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Attach an Auto Scaling terminating lifecycle hook, send a notification to Amazon EventBridge or Amazon SQS, invoke a drain script, and complete the lifecycle action upon completion. Auto Scaling lifecycle hooks pause instance termination, placing the instance into the `Terminating:Wait` state for a configured timeout. This allows custom scripts or Lambda functions to complete data draining before calling `complete-lifecycle-action`. Cooldown periods only delay subsequent scaling activities. ALB deregistration delay only drains HTTP connections, not background worker buffers.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html",
    tags: ["Amazon EC2 Auto Scaling", "Auto Scaling", "High Load Scale"]
  },
  {
    id: "aws-saa-273",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Auto Scaling Terminating Lifecycle Hooks: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon EC2 Auto Scaling to pause instance termination during scale-in events to allow up to 15 minutes for memory buffers to drain to persistent storage.",
    question: "Which solution properly implements these mandatory security and governance controls? Auto Scaling terminating lifecycle hooks with SQS is being evaluated.",
    options: [
      { id: 'A', text: "Attach an Auto Scaling terminating lifecycle hook, send a notification to Amazon EventBridge or Amazon SQS, invoke a drain script, and complete the lifecycle action upon completion." },
      { id: 'B', text: "Configure an Application Load Balancer deregistration delay of 900 seconds." },
      { id: 'C', text: "Increase the Auto Scaling group Default Cooldown period to 900 seconds." },
      { id: 'D', text: "Modify the Auto Scaling group termination policy to prioritize OldestInstance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an Auto Scaling terminating lifecycle hook, send a notification to Amazon EventBridge or Amazon SQS, invoke a drain script, and complete the lifecycle action upon completion. Auto Scaling lifecycle hooks pause instance termination, placing the instance into the `Terminating:Wait` state for a configured timeout. This allows custom scripts or Lambda functions to complete data draining before calling `complete-lifecycle-action`. Cooldown periods only delay subsequent scaling activities. ALB deregistration delay only drains HTTP connections, not background worker buffers.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html",
    tags: ["Amazon EC2 Auto Scaling", "Auto Scaling", "Security Compliance"]
  },
  {
    id: "aws-saa-274",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Auto Scaling Terminating Lifecycle Hooks: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon EC2 Auto Scaling to pause instance termination during scale-in events to allow up to 15 minutes for memory buffers to drain to persistent storage.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Auto Scaling terminating lifecycle hooks with SQS is being evaluated.",
    options: [
      { id: 'A', text: "Modify the Auto Scaling group termination policy to prioritize OldestInstance." },
      { id: 'B', text: "Increase the Auto Scaling group Default Cooldown period to 900 seconds." },
      { id: 'C', text: "Attach an Auto Scaling terminating lifecycle hook, send a notification to Amazon EventBridge or Amazon SQS, invoke a drain script, and complete the lifecycle action upon completion." },
      { id: 'D', text: "Configure an Application Load Balancer deregistration delay of 900 seconds." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Attach an Auto Scaling terminating lifecycle hook, send a notification to Amazon EventBridge or Amazon SQS, invoke a drain script, and complete the lifecycle action upon completion. Auto Scaling lifecycle hooks pause instance termination, placing the instance into the `Terminating:Wait` state for a configured timeout. This allows custom scripts or Lambda functions to complete data draining before calling `complete-lifecycle-action`. Cooldown periods only delay subsequent scaling activities. ALB deregistration delay only drains HTTP connections, not background worker buffers.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html",
    tags: ["Amazon EC2 Auto Scaling", "Auto Scaling", "Hybrid Migration"]
  },
  {
    id: "aws-saa-275",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Auto Scaling Terminating Lifecycle Hooks: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon EC2 Auto Scaling to pause instance termination during scale-in events to allow up to 15 minutes for memory buffers to drain to persistent storage.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Auto Scaling terminating lifecycle hooks with SQS is being evaluated.",
    options: [
      { id: 'A', text: "Increase the Auto Scaling group Default Cooldown period to 900 seconds." },
      { id: 'B', text: "Attach an Auto Scaling terminating lifecycle hook, send a notification to Amazon EventBridge or Amazon SQS, invoke a drain script, and complete the lifecycle action upon completion." },
      { id: 'C', text: "Configure an Application Load Balancer deregistration delay of 900 seconds." },
      { id: 'D', text: "Modify the Auto Scaling group termination policy to prioritize OldestInstance." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Attach an Auto Scaling terminating lifecycle hook, send a notification to Amazon EventBridge or Amazon SQS, invoke a drain script, and complete the lifecycle action upon completion. Auto Scaling lifecycle hooks pause instance termination, placing the instance into the `Terminating:Wait` state for a configured timeout. This allows custom scripts or Lambda functions to complete data draining before calling `complete-lifecycle-action`. Cooldown periods only delay subsequent scaling activities. ALB deregistration delay only drains HTTP connections, not background worker buffers.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html",
    tags: ["Amazon EC2 Auto Scaling", "Auto Scaling", "Resilience Failure"]
  }
];

export default AWS_SAA_QUESTIONS_11;
