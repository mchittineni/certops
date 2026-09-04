export const AWS_SAA_QUESTIONS_12 = [
  {
    id: "aws-saa-276",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "SQS Dead-Letter Queue Redrive: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon SQS to isolate poison-pill messages after exhausting retry attempts and replay them after deploying a consumer bug fix.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Amazon SQS Dead-Letter Queue (DLQ) with automated redrive is being evaluated.",
    options: [
      { id: 'A', text: "Configure client-side message deletion immediately upon receiving each batch." },
      { id: 'B', text: "Configure a Dead-Letter Queue (DLQ) with a maxReceiveCount threshold on the source queue, and use SQS DLQ redrive to replay corrected messages after fixing the consumer bug." },
      { id: 'C', text: "Replace the standard SQS queue with an Amazon SNS topic with subscription filters." },
      { id: 'D', text: "Increase the source queue message visibility timeout to 12 hours." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a Dead-Letter Queue (DLQ) with a maxReceiveCount threshold on the source queue, and use SQS DLQ redrive to replay corrected messages after fixing the consumer bug. An Amazon SQS Dead-Letter Queue with a configured `maxReceiveCount` automatically redirects messages that exceed the failure threshold into a dedicated DLQ. This unblocks the source queue and isolates malformed payloads for root cause analysis and automated redrive. Increasing visibility timeout merely delays message retries. Deletion before processing risks permanent data loss on crash.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html",
    tags: ["Amazon SQS", "SQS", "Dr Failover"]
  },
  {
    id: "aws-saa-277",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "SQS Dead-Letter Queue Redrive: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon SQS to isolate poison-pill messages after exhausting retry attempts and replay them after deploying a consumer bug fix.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Amazon SQS Dead-Letter Queue (DLQ) with automated redrive is being evaluated.",
    options: [
      { id: 'A', text: "Configure a Dead-Letter Queue (DLQ) with a maxReceiveCount threshold on the source queue, and use SQS DLQ redrive to replay corrected messages after fixing the consumer bug." },
      { id: 'B', text: "Configure client-side message deletion immediately upon receiving each batch." },
      { id: 'C', text: "Replace the standard SQS queue with an Amazon SNS topic with subscription filters." },
      { id: 'D', text: "Increase the source queue message visibility timeout to 12 hours." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Dead-Letter Queue (DLQ) with a maxReceiveCount threshold on the source queue, and use SQS DLQ redrive to replay corrected messages after fixing the consumer bug. An Amazon SQS Dead-Letter Queue with a configured `maxReceiveCount` automatically redirects messages that exceed the failure threshold into a dedicated DLQ. This unblocks the source queue and isolates malformed payloads for root cause analysis and automated redrive. Increasing visibility timeout merely delays message retries. Deletion before processing risks permanent data loss on crash.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html",
    tags: ["Amazon SQS", "SQS", "High Load Scale"]
  },
  {
    id: "aws-saa-278",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "SQS Dead-Letter Queue Redrive: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon SQS to isolate poison-pill messages after exhausting retry attempts and replay them after deploying a consumer bug fix.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon SQS Dead-Letter Queue (DLQ) with automated redrive is being evaluated.",
    options: [
      { id: 'A', text: "Configure client-side message deletion immediately upon receiving each batch." },
      { id: 'B', text: "Replace the standard SQS queue with an Amazon SNS topic with subscription filters." },
      { id: 'C', text: "Increase the source queue message visibility timeout to 12 hours." },
      { id: 'D', text: "Configure a Dead-Letter Queue (DLQ) with a maxReceiveCount threshold on the source queue, and use SQS DLQ redrive to replay corrected messages after fixing the consumer bug." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a Dead-Letter Queue (DLQ) with a maxReceiveCount threshold on the source queue, and use SQS DLQ redrive to replay corrected messages after fixing the consumer bug. An Amazon SQS Dead-Letter Queue with a configured `maxReceiveCount` automatically redirects messages that exceed the failure threshold into a dedicated DLQ. This unblocks the source queue and isolates malformed payloads for root cause analysis and automated redrive. Increasing visibility timeout merely delays message retries. Deletion before processing risks permanent data loss on crash.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html",
    tags: ["Amazon SQS", "SQS", "Security Compliance"]
  },
  {
    id: "aws-saa-279",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "SQS Dead-Letter Queue Redrive: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon SQS to isolate poison-pill messages after exhausting retry attempts and replay them after deploying a consumer bug fix.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Amazon SQS Dead-Letter Queue (DLQ) with automated redrive is being evaluated.",
    options: [
      { id: 'A', text: "Configure client-side message deletion immediately upon receiving each batch." },
      { id: 'B', text: "Replace the standard SQS queue with an Amazon SNS topic with subscription filters." },
      { id: 'C', text: "Increase the source queue message visibility timeout to 12 hours." },
      { id: 'D', text: "Configure a Dead-Letter Queue (DLQ) with a maxReceiveCount threshold on the source queue, and use SQS DLQ redrive to replay corrected messages after fixing the consumer bug." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a Dead-Letter Queue (DLQ) with a maxReceiveCount threshold on the source queue, and use SQS DLQ redrive to replay corrected messages after fixing the consumer bug. An Amazon SQS Dead-Letter Queue with a configured `maxReceiveCount` automatically redirects messages that exceed the failure threshold into a dedicated DLQ. This unblocks the source queue and isolates malformed payloads for root cause analysis and automated redrive. Increasing visibility timeout merely delays message retries. Deletion before processing risks permanent data loss on crash.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html",
    tags: ["Amazon SQS", "SQS", "Hybrid Migration"]
  },
  {
    id: "aws-saa-280",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "SQS Dead-Letter Queue Redrive: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon SQS to isolate poison-pill messages after exhausting retry attempts and replay them after deploying a consumer bug fix.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Amazon SQS Dead-Letter Queue (DLQ) with automated redrive is being evaluated.",
    options: [
      { id: 'A', text: "Configure a Dead-Letter Queue (DLQ) with a maxReceiveCount threshold on the source queue, and use SQS DLQ redrive to replay corrected messages after fixing the consumer bug." },
      { id: 'B', text: "Replace the standard SQS queue with an Amazon SNS topic with subscription filters." },
      { id: 'C', text: "Increase the source queue message visibility timeout to 12 hours." },
      { id: 'D', text: "Configure client-side message deletion immediately upon receiving each batch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Dead-Letter Queue (DLQ) with a maxReceiveCount threshold on the source queue, and use SQS DLQ redrive to replay corrected messages after fixing the consumer bug. An Amazon SQS Dead-Letter Queue with a configured `maxReceiveCount` automatically redirects messages that exceed the failure threshold into a dedicated DLQ. This unblocks the source queue and isolates malformed payloads for root cause analysis and automated redrive. Increasing visibility timeout merely delays message retries. Deletion before processing risks permanent data loss on crash.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html",
    tags: ["Amazon SQS", "SQS", "Resilience Failure"]
  },
  {
    id: "aws-saa-281",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "FSx for NetApp ONTAP Multi-AZ: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon FSx to provide high availability shared storage supporting both NFS and SMB protocols with sub-minute automated failover and hardware snapshot cloning.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Amazon FSx for NetApp ONTAP Multi-AZ deployment is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Amazon FSx for NetApp ONTAP Multi-AZ file system across two Availability Zones." },
      { id: 'B', text: "Deploy an Amazon S3 File Gateway on an Amazon EC2 instance." },
      { id: 'C', text: "Deploy Amazon EFS with General Purpose performance mode." },
      { id: 'D', text: "Deploy Amazon FSx for Windows File Server Single-AZ." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Amazon FSx for NetApp ONTAP Multi-AZ file system across two Availability Zones. Amazon FSx for NetApp ONTAP delivers full NetApp ONTAP enterprise storage features, including unified NFS/SMB support, Multi-AZ high availability with automated sub-minute failover, block-level deduplication, compression, and thin-cloning. Amazon EFS does not natively support SMB. Single-AZ FSx lacks Multi-AZ resilience. S3 File Gateway lacks POSIX and SMB feature parity for transactional enterprise databases.",
    referenceUrl: "https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/what-is-fsx-ontap.html",
    tags: ["Amazon FSx", "FSx", "Dr Failover"]
  },
  {
    id: "aws-saa-282",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "FSx for NetApp ONTAP Multi-AZ: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon FSx to provide high availability shared storage supporting both NFS and SMB protocols with sub-minute automated failover and hardware snapshot cloning.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Amazon FSx for NetApp ONTAP Multi-AZ deployment is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Amazon FSx for NetApp ONTAP Multi-AZ file system across two Availability Zones." },
      { id: 'B', text: "Deploy an Amazon S3 File Gateway on an Amazon EC2 instance." },
      { id: 'C', text: "Deploy Amazon FSx for Windows File Server Single-AZ." },
      { id: 'D', text: "Deploy Amazon EFS with General Purpose performance mode." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Amazon FSx for NetApp ONTAP Multi-AZ file system across two Availability Zones. Amazon FSx for NetApp ONTAP delivers full NetApp ONTAP enterprise storage features, including unified NFS/SMB support, Multi-AZ high availability with automated sub-minute failover, block-level deduplication, compression, and thin-cloning. Amazon EFS does not natively support SMB. Single-AZ FSx lacks Multi-AZ resilience. S3 File Gateway lacks POSIX and SMB feature parity for transactional enterprise databases.",
    referenceUrl: "https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/what-is-fsx-ontap.html",
    tags: ["Amazon FSx", "FSx", "High Load Scale"]
  },
  {
    id: "aws-saa-283",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "FSx for NetApp ONTAP Multi-AZ: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon FSx to provide high availability shared storage supporting both NFS and SMB protocols with sub-minute automated failover and hardware snapshot cloning.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon FSx for NetApp ONTAP Multi-AZ deployment is being evaluated.",
    options: [
      { id: 'A', text: "Deploy Amazon FSx for Windows File Server Single-AZ." },
      { id: 'B', text: "Deploy Amazon EFS with General Purpose performance mode." },
      { id: 'C', text: "Deploy an Amazon S3 File Gateway on an Amazon EC2 instance." },
      { id: 'D', text: "Deploy an Amazon FSx for NetApp ONTAP Multi-AZ file system across two Availability Zones." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy an Amazon FSx for NetApp ONTAP Multi-AZ file system across two Availability Zones. Amazon FSx for NetApp ONTAP delivers full NetApp ONTAP enterprise storage features, including unified NFS/SMB support, Multi-AZ high availability with automated sub-minute failover, block-level deduplication, compression, and thin-cloning. Amazon EFS does not natively support SMB. Single-AZ FSx lacks Multi-AZ resilience. S3 File Gateway lacks POSIX and SMB feature parity for transactional enterprise databases.",
    referenceUrl: "https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/what-is-fsx-ontap.html",
    tags: ["Amazon FSx", "FSx", "Security Compliance"]
  },
  {
    id: "aws-saa-284",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "FSx for NetApp ONTAP Multi-AZ: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon FSx to provide high availability shared storage supporting both NFS and SMB protocols with sub-minute automated failover and hardware snapshot cloning.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Amazon FSx for NetApp ONTAP Multi-AZ deployment is being evaluated.",
    options: [
      { id: 'A', text: "Deploy Amazon EFS with General Purpose performance mode." },
      { id: 'B', text: "Deploy an Amazon S3 File Gateway on an Amazon EC2 instance." },
      { id: 'C', text: "Deploy an Amazon FSx for NetApp ONTAP Multi-AZ file system across two Availability Zones." },
      { id: 'D', text: "Deploy Amazon FSx for Windows File Server Single-AZ." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an Amazon FSx for NetApp ONTAP Multi-AZ file system across two Availability Zones. Amazon FSx for NetApp ONTAP delivers full NetApp ONTAP enterprise storage features, including unified NFS/SMB support, Multi-AZ high availability with automated sub-minute failover, block-level deduplication, compression, and thin-cloning. Amazon EFS does not natively support SMB. Single-AZ FSx lacks Multi-AZ resilience. S3 File Gateway lacks POSIX and SMB feature parity for transactional enterprise databases.",
    referenceUrl: "https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/what-is-fsx-ontap.html",
    tags: ["Amazon FSx", "FSx", "Hybrid Migration"]
  },
  {
    id: "aws-saa-285",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "FSx for NetApp ONTAP Multi-AZ: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon FSx to provide high availability shared storage supporting both NFS and SMB protocols with sub-minute automated failover and hardware snapshot cloning.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Amazon FSx for NetApp ONTAP Multi-AZ deployment is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Amazon S3 File Gateway on an Amazon EC2 instance." },
      { id: 'B', text: "Deploy Amazon EFS with General Purpose performance mode." },
      { id: 'C', text: "Deploy Amazon FSx for Windows File Server Single-AZ." },
      { id: 'D', text: "Deploy an Amazon FSx for NetApp ONTAP Multi-AZ file system across two Availability Zones." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy an Amazon FSx for NetApp ONTAP Multi-AZ file system across two Availability Zones. Amazon FSx for NetApp ONTAP delivers full NetApp ONTAP enterprise storage features, including unified NFS/SMB support, Multi-AZ high availability with automated sub-minute failover, block-level deduplication, compression, and thin-cloning. Amazon EFS does not natively support SMB. Single-AZ FSx lacks Multi-AZ resilience. S3 File Gateway lacks POSIX and SMB feature parity for transactional enterprise databases.",
    referenceUrl: "https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/what-is-fsx-ontap.html",
    tags: ["Amazon FSx", "FSx", "Resilience Failure"]
  },
  {
    id: "aws-saa-286",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "DynamoDB Global Tables Multi-Region Replication: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon DynamoDB to provide multi-region active-active read and write capabilities with sub-10 millisecond latency and automated conflict resolution.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Amazon DynamoDB Global Tables active-active replication is being evaluated.",
    options: [
      { id: 'A', text: "Deploy Amazon Aurora PostgreSQL with cross-region read replicas." },
      { id: 'B', text: "Deploy Amazon DynamoDB Global Tables replicated across the required AWS Regions." },
      { id: 'C', text: "Deploy Amazon DocumentDB with global clusters in read-only mode." },
      { id: 'D', text: "Deploy Amazon ElastiCache for Redis with manual cross-region sync scripts." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Amazon DynamoDB Global Tables replicated across the required AWS Regions. DynamoDB Global Tables provide fully managed, active-active multi-region replication with automatic multi-master write resolution using last-writer-wins based on internal reconciliation timestamps. Applications in both regions read and write locally with single-digit millisecond latency. Aurora cross-region replicas and DocumentDB global clusters are read-only in secondary regions.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Dr Failover"]
  },
  {
    id: "aws-saa-287",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "DynamoDB Global Tables Multi-Region Replication: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon DynamoDB to provide multi-region active-active read and write capabilities with sub-10 millisecond latency and automated conflict resolution.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Amazon DynamoDB Global Tables active-active replication is being evaluated.",
    options: [
      { id: 'A', text: "Deploy Amazon Aurora PostgreSQL with cross-region read replicas." },
      { id: 'B', text: "Deploy Amazon ElastiCache for Redis with manual cross-region sync scripts." },
      { id: 'C', text: "Deploy Amazon DocumentDB with global clusters in read-only mode." },
      { id: 'D', text: "Deploy Amazon DynamoDB Global Tables replicated across the required AWS Regions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Amazon DynamoDB Global Tables replicated across the required AWS Regions. DynamoDB Global Tables provide fully managed, active-active multi-region replication with automatic multi-master write resolution using last-writer-wins based on internal reconciliation timestamps. Applications in both regions read and write locally with single-digit millisecond latency. Aurora cross-region replicas and DocumentDB global clusters are read-only in secondary regions.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "High Load Scale"]
  },
  {
    id: "aws-saa-288",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "DynamoDB Global Tables Multi-Region Replication: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon DynamoDB to provide multi-region active-active read and write capabilities with sub-10 millisecond latency and automated conflict resolution.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon DynamoDB Global Tables active-active replication is being evaluated.",
    options: [
      { id: 'A', text: "Deploy Amazon DynamoDB Global Tables replicated across the required AWS Regions." },
      { id: 'B', text: "Deploy Amazon DocumentDB with global clusters in read-only mode." },
      { id: 'C', text: "Deploy Amazon Aurora PostgreSQL with cross-region read replicas." },
      { id: 'D', text: "Deploy Amazon ElastiCache for Redis with manual cross-region sync scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Amazon DynamoDB Global Tables replicated across the required AWS Regions. DynamoDB Global Tables provide fully managed, active-active multi-region replication with automatic multi-master write resolution using last-writer-wins based on internal reconciliation timestamps. Applications in both regions read and write locally with single-digit millisecond latency. Aurora cross-region replicas and DocumentDB global clusters are read-only in secondary regions.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Security Compliance"]
  },
  {
    id: "aws-saa-289",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "DynamoDB Global Tables Multi-Region Replication: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon DynamoDB to provide multi-region active-active read and write capabilities with sub-10 millisecond latency and automated conflict resolution.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Amazon DynamoDB Global Tables active-active replication is being evaluated.",
    options: [
      { id: 'A', text: "Deploy Amazon Aurora PostgreSQL with cross-region read replicas." },
      { id: 'B', text: "Deploy Amazon DynamoDB Global Tables replicated across the required AWS Regions." },
      { id: 'C', text: "Deploy Amazon ElastiCache for Redis with manual cross-region sync scripts." },
      { id: 'D', text: "Deploy Amazon DocumentDB with global clusters in read-only mode." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Amazon DynamoDB Global Tables replicated across the required AWS Regions. DynamoDB Global Tables provide fully managed, active-active multi-region replication with automatic multi-master write resolution using last-writer-wins based on internal reconciliation timestamps. Applications in both regions read and write locally with single-digit millisecond latency. Aurora cross-region replicas and DocumentDB global clusters are read-only in secondary regions.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Hybrid Migration"]
  },
  {
    id: "aws-saa-290",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "DynamoDB Global Tables Multi-Region Replication: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon DynamoDB to provide multi-region active-active read and write capabilities with sub-10 millisecond latency and automated conflict resolution.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Amazon DynamoDB Global Tables active-active replication is being evaluated.",
    options: [
      { id: 'A', text: "Deploy Amazon DocumentDB with global clusters in read-only mode." },
      { id: 'B', text: "Deploy Amazon Aurora PostgreSQL with cross-region read replicas." },
      { id: 'C', text: "Deploy Amazon DynamoDB Global Tables replicated across the required AWS Regions." },
      { id: 'D', text: "Deploy Amazon ElastiCache for Redis with manual cross-region sync scripts." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Amazon DynamoDB Global Tables replicated across the required AWS Regions. DynamoDB Global Tables provide fully managed, active-active multi-region replication with automatic multi-master write resolution using last-writer-wins based on internal reconciliation timestamps. Applications in both regions read and write locally with single-digit millisecond latency. Aurora cross-region replicas and DocumentDB global clusters are read-only in secondary regions.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Resilience Failure"]
  },
  {
    id: "aws-saa-291",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "EventBridge API Destinations Rate Limiting: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon EventBridge to deliver events reliably to an external third-party HTTP webhook that enforces strict rate limits and intermittently returns HTTP 429 errors.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Amazon EventBridge API Destinations with retry and rate limiting is being evaluated.",
    options: [
      { id: 'A', text: "Configure a CloudWatch Logs subscription filter streaming directly to the external endpoint." },
      { id: 'B', text: "Configure an AWS Step Functions state machine with a direct Lambda HTTP call lacking backoff." },
      { id: 'C', text: "Configure an Amazon EventBridge API Destination with a connection, dead-letter queue, and configured invocation rate limit." },
      { id: 'D', text: "Configure an Amazon SNS HTTP subscription without retry configuration." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Amazon EventBridge API Destination with a connection, dead-letter queue, and configured invocation rate limit. EventBridge API Destinations allow EventBridge to route events directly to external HTTP APIs with built-in authentication, configurable maximum invocation rates (to avoid 429 throttling), and automatic exponential backoff retry with Dead-Letter Queue support. Direct SNS HTTP subscriptions lack granular invocation rate controls. CloudWatch Logs cannot invoke external webhooks directly.",
    referenceUrl: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html",
    tags: ["Amazon EventBridge", "EventBridge", "Dr Failover"]
  },
  {
    id: "aws-saa-292",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "EventBridge API Destinations Rate Limiting: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon EventBridge to deliver events reliably to an external third-party HTTP webhook that enforces strict rate limits and intermittently returns HTTP 429 errors.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Amazon EventBridge API Destinations with retry and rate limiting is being evaluated.",
    options: [
      { id: 'A', text: "Configure an AWS Step Functions state machine with a direct Lambda HTTP call lacking backoff." },
      { id: 'B', text: "Configure an Amazon EventBridge API Destination with a connection, dead-letter queue, and configured invocation rate limit." },
      { id: 'C', text: "Configure a CloudWatch Logs subscription filter streaming directly to the external endpoint." },
      { id: 'D', text: "Configure an Amazon SNS HTTP subscription without retry configuration." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Amazon EventBridge API Destination with a connection, dead-letter queue, and configured invocation rate limit. EventBridge API Destinations allow EventBridge to route events directly to external HTTP APIs with built-in authentication, configurable maximum invocation rates (to avoid 429 throttling), and automatic exponential backoff retry with Dead-Letter Queue support. Direct SNS HTTP subscriptions lack granular invocation rate controls. CloudWatch Logs cannot invoke external webhooks directly.",
    referenceUrl: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html",
    tags: ["Amazon EventBridge", "EventBridge", "High Load Scale"]
  },
  {
    id: "aws-saa-293",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "EventBridge API Destinations Rate Limiting: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon EventBridge to deliver events reliably to an external third-party HTTP webhook that enforces strict rate limits and intermittently returns HTTP 429 errors.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon EventBridge API Destinations with retry and rate limiting is being evaluated.",
    options: [
      { id: 'A', text: "Configure an Amazon EventBridge API Destination with a connection, dead-letter queue, and configured invocation rate limit." },
      { id: 'B', text: "Configure an AWS Step Functions state machine with a direct Lambda HTTP call lacking backoff." },
      { id: 'C', text: "Configure an Amazon SNS HTTP subscription without retry configuration." },
      { id: 'D', text: "Configure a CloudWatch Logs subscription filter streaming directly to the external endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Amazon EventBridge API Destination with a connection, dead-letter queue, and configured invocation rate limit. EventBridge API Destinations allow EventBridge to route events directly to external HTTP APIs with built-in authentication, configurable maximum invocation rates (to avoid 429 throttling), and automatic exponential backoff retry with Dead-Letter Queue support. Direct SNS HTTP subscriptions lack granular invocation rate controls. CloudWatch Logs cannot invoke external webhooks directly.",
    referenceUrl: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html",
    tags: ["Amazon EventBridge", "EventBridge", "Security Compliance"]
  },
  {
    id: "aws-saa-294",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "EventBridge API Destinations Rate Limiting: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon EventBridge to deliver events reliably to an external third-party HTTP webhook that enforces strict rate limits and intermittently returns HTTP 429 errors.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Amazon EventBridge API Destinations with retry and rate limiting is being evaluated.",
    options: [
      { id: 'A', text: "Configure an Amazon EventBridge API Destination with a connection, dead-letter queue, and configured invocation rate limit." },
      { id: 'B', text: "Configure an Amazon SNS HTTP subscription without retry configuration." },
      { id: 'C', text: "Configure an AWS Step Functions state machine with a direct Lambda HTTP call lacking backoff." },
      { id: 'D', text: "Configure a CloudWatch Logs subscription filter streaming directly to the external endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Amazon EventBridge API Destination with a connection, dead-letter queue, and configured invocation rate limit. EventBridge API Destinations allow EventBridge to route events directly to external HTTP APIs with built-in authentication, configurable maximum invocation rates (to avoid 429 throttling), and automatic exponential backoff retry with Dead-Letter Queue support. Direct SNS HTTP subscriptions lack granular invocation rate controls. CloudWatch Logs cannot invoke external webhooks directly.",
    referenceUrl: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html",
    tags: ["Amazon EventBridge", "EventBridge", "Hybrid Migration"]
  },
  {
    id: "aws-saa-295",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "EventBridge API Destinations Rate Limiting: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon EventBridge to deliver events reliably to an external third-party HTTP webhook that enforces strict rate limits and intermittently returns HTTP 429 errors.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Amazon EventBridge API Destinations with retry and rate limiting is being evaluated.",
    options: [
      { id: 'A', text: "Configure an AWS Step Functions state machine with a direct Lambda HTTP call lacking backoff." },
      { id: 'B', text: "Configure a CloudWatch Logs subscription filter streaming directly to the external endpoint." },
      { id: 'C', text: "Configure an Amazon EventBridge API Destination with a connection, dead-letter queue, and configured invocation rate limit." },
      { id: 'D', text: "Configure an Amazon SNS HTTP subscription without retry configuration." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Amazon EventBridge API Destination with a connection, dead-letter queue, and configured invocation rate limit. EventBridge API Destinations allow EventBridge to route events directly to external HTTP APIs with built-in authentication, configurable maximum invocation rates (to avoid 429 throttling), and automatic exponential backoff retry with Dead-Letter Queue support. Direct SNS HTTP subscriptions lack granular invocation rate controls. CloudWatch Logs cannot invoke external webhooks directly.",
    referenceUrl: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html",
    tags: ["Amazon EventBridge", "EventBridge", "Resilience Failure"]
  },
  {
    id: "aws-saa-296",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "CloudFront Origin Groups Automated Failover: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon CloudFront to deliver media content with automatic failover to a backup S3 bucket in a secondary region when the primary bucket returns 5xx HTTP status codes.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Amazon CloudFront Origin Groups with 5xx status code failover is being evaluated.",
    options: [
      { id: 'A', text: "Enable S3 Transfer Acceleration on both buckets and configure cross-origin resource sharing (CORS)." },
      { id: 'B', text: "Configure a CloudFront Origin Group containing the primary S3 bucket and secondary S3 bucket, specifying failover criteria for 5xx status codes." },
      { id: 'C', text: "Deploy a Lambda@Edge viewer-request function to catch 5xx errors and redirect client browsers." },
      { id: 'D', text: "Configure a Route 53 Weighted routing policy with equal weights pointing to both S3 buckets." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a CloudFront Origin Group containing the primary S3 bucket and secondary S3 bucket, specifying failover criteria for 5xx status codes. CloudFront Origin Groups allow configuration of primary and secondary origins with failover criteria based on HTTP status codes (such as 500, 502, 503, 504, 403, 404). When the primary origin fails the health check or returns a configured error code, CloudFront seamlessly retries the request against the secondary origin before returning a response to the viewer. Route 53 cannot inspect CloudFront origin HTTP status codes dynamically. Viewer-request Lambda@Edge runs before origin fetch and cannot catch 5xx origin responses.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html",
    tags: ["Amazon CloudFront", "CloudFront", "Dr Failover"]
  },
  {
    id: "aws-saa-297",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "CloudFront Origin Groups Automated Failover: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon CloudFront to deliver media content with automatic failover to a backup S3 bucket in a secondary region when the primary bucket returns 5xx HTTP status codes.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Amazon CloudFront Origin Groups with 5xx status code failover is being evaluated.",
    options: [
      { id: 'A', text: "Configure a Route 53 Weighted routing policy with equal weights pointing to both S3 buckets." },
      { id: 'B', text: "Configure a CloudFront Origin Group containing the primary S3 bucket and secondary S3 bucket, specifying failover criteria for 5xx status codes." },
      { id: 'C', text: "Deploy a Lambda@Edge viewer-request function to catch 5xx errors and redirect client browsers." },
      { id: 'D', text: "Enable S3 Transfer Acceleration on both buckets and configure cross-origin resource sharing (CORS)." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a CloudFront Origin Group containing the primary S3 bucket and secondary S3 bucket, specifying failover criteria for 5xx status codes. CloudFront Origin Groups allow configuration of primary and secondary origins with failover criteria based on HTTP status codes (such as 500, 502, 503, 504, 403, 404). When the primary origin fails the health check or returns a configured error code, CloudFront seamlessly retries the request against the secondary origin before returning a response to the viewer. Route 53 cannot inspect CloudFront origin HTTP status codes dynamically. Viewer-request Lambda@Edge runs before origin fetch and cannot catch 5xx origin responses.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html",
    tags: ["Amazon CloudFront", "CloudFront", "High Load Scale"]
  },
  {
    id: "aws-saa-298",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "CloudFront Origin Groups Automated Failover: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon CloudFront to deliver media content with automatic failover to a backup S3 bucket in a secondary region when the primary bucket returns 5xx HTTP status codes.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon CloudFront Origin Groups with 5xx status code failover is being evaluated.",
    options: [
      { id: 'A', text: "Deploy a Lambda@Edge viewer-request function to catch 5xx errors and redirect client browsers." },
      { id: 'B', text: "Configure a CloudFront Origin Group containing the primary S3 bucket and secondary S3 bucket, specifying failover criteria for 5xx status codes." },
      { id: 'C', text: "Configure a Route 53 Weighted routing policy with equal weights pointing to both S3 buckets." },
      { id: 'D', text: "Enable S3 Transfer Acceleration on both buckets and configure cross-origin resource sharing (CORS)." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a CloudFront Origin Group containing the primary S3 bucket and secondary S3 bucket, specifying failover criteria for 5xx status codes. CloudFront Origin Groups allow configuration of primary and secondary origins with failover criteria based on HTTP status codes (such as 500, 502, 503, 504, 403, 404). When the primary origin fails the health check or returns a configured error code, CloudFront seamlessly retries the request against the secondary origin before returning a response to the viewer. Route 53 cannot inspect CloudFront origin HTTP status codes dynamically. Viewer-request Lambda@Edge runs before origin fetch and cannot catch 5xx origin responses.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html",
    tags: ["Amazon CloudFront", "CloudFront", "Security Compliance"]
  },
  {
    id: "aws-saa-299",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "CloudFront Origin Groups Automated Failover: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon CloudFront to deliver media content with automatic failover to a backup S3 bucket in a secondary region when the primary bucket returns 5xx HTTP status codes.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Amazon CloudFront Origin Groups with 5xx status code failover is being evaluated.",
    options: [
      { id: 'A', text: "Deploy a Lambda@Edge viewer-request function to catch 5xx errors and redirect client browsers." },
      { id: 'B', text: "Configure a CloudFront Origin Group containing the primary S3 bucket and secondary S3 bucket, specifying failover criteria for 5xx status codes." },
      { id: 'C', text: "Enable S3 Transfer Acceleration on both buckets and configure cross-origin resource sharing (CORS)." },
      { id: 'D', text: "Configure a Route 53 Weighted routing policy with equal weights pointing to both S3 buckets." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a CloudFront Origin Group containing the primary S3 bucket and secondary S3 bucket, specifying failover criteria for 5xx status codes. CloudFront Origin Groups allow configuration of primary and secondary origins with failover criteria based on HTTP status codes (such as 500, 502, 503, 504, 403, 404). When the primary origin fails the health check or returns a configured error code, CloudFront seamlessly retries the request against the secondary origin before returning a response to the viewer. Route 53 cannot inspect CloudFront origin HTTP status codes dynamically. Viewer-request Lambda@Edge runs before origin fetch and cannot catch 5xx origin responses.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html",
    tags: ["Amazon CloudFront", "CloudFront", "Hybrid Migration"]
  },
  {
    id: "aws-saa-300",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "CloudFront Origin Groups Automated Failover: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon CloudFront to deliver media content with automatic failover to a backup S3 bucket in a secondary region when the primary bucket returns 5xx HTTP status codes.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Amazon CloudFront Origin Groups with 5xx status code failover is being evaluated.",
    options: [
      { id: 'A', text: "Enable S3 Transfer Acceleration on both buckets and configure cross-origin resource sharing (CORS)." },
      { id: 'B', text: "Configure a CloudFront Origin Group containing the primary S3 bucket and secondary S3 bucket, specifying failover criteria for 5xx status codes." },
      { id: 'C', text: "Deploy a Lambda@Edge viewer-request function to catch 5xx errors and redirect client browsers." },
      { id: 'D', text: "Configure a Route 53 Weighted routing policy with equal weights pointing to both S3 buckets." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a CloudFront Origin Group containing the primary S3 bucket and secondary S3 bucket, specifying failover criteria for 5xx status codes. CloudFront Origin Groups allow configuration of primary and secondary origins with failover criteria based on HTTP status codes (such as 500, 502, 503, 504, 403, 404). When the primary origin fails the health check or returns a configured error code, CloudFront seamlessly retries the request against the secondary origin before returning a response to the viewer. Route 53 cannot inspect CloudFront origin HTTP status codes dynamically. Viewer-request Lambda@Edge runs before origin fetch and cannot catch 5xx origin responses.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html",
    tags: ["Amazon CloudFront", "CloudFront", "Resilience Failure"]
  }
];

export default AWS_SAA_QUESTIONS_12;
