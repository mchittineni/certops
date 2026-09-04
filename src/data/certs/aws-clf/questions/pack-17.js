export const AWS_CLF_QUESTIONS_17 = [
  {
    id: "aws-clf-401",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 Storage Classes: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Amazon S3 to archive compliance files that must be retained for 10 years, are rarely accessed, but can tolerate a retrieval time of 12 hours for the lowest storage cost in AWS.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Amazon S3 Storage Classes lifecycle hierarchy is under consideration.",
    options: [
      { id: 'A', text: "Store files in Amazon S3 One Zone-Infrequent Access." },
      { id: 'B', text: "Store files in Amazon S3 Standard." },
      { id: 'C', text: "Store archived files in Amazon S3 Glacier Deep Archive." },
      { id: 'D', text: "Store files in Amazon EBS Cold HDD (sc1)." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Store archived files in Amazon S3 Glacier Deep Archive. Amazon S3 Glacier Deep Archive is Amazon S3's lowest-cost storage class, designed for long-term retention of data that is accessed once or twice a year. It provides 99.999999999% (11 9s) of durability with retrieval times typically within 12 hours.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html",
    tags: ["Amazon S3", "S3", "Dr Failover"]
  },
  {
    id: "aws-clf-402",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 Storage Classes: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Amazon S3 to archive compliance files that must be retained for 10 years, are rarely accessed, but can tolerate a retrieval time of 12 hours for the lowest storage cost in AWS.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Amazon S3 Storage Classes lifecycle hierarchy is under consideration.",
    options: [
      { id: 'A', text: "Store files in Amazon EBS Cold HDD (sc1)." },
      { id: 'B', text: "Store files in Amazon S3 One Zone-Infrequent Access." },
      { id: 'C', text: "Store files in Amazon S3 Standard." },
      { id: 'D', text: "Store archived files in Amazon S3 Glacier Deep Archive." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Store archived files in Amazon S3 Glacier Deep Archive. Amazon S3 Glacier Deep Archive is Amazon S3's lowest-cost storage class, designed for long-term retention of data that is accessed once or twice a year. It provides 99.999999999% (11 9s) of durability with retrieval times typically within 12 hours.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html",
    tags: ["Amazon S3", "S3", "High Load Scale"]
  },
  {
    id: "aws-clf-403",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 Storage Classes: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Amazon S3 to archive compliance files that must be retained for 10 years, are rarely accessed, but can tolerate a retrieval time of 12 hours for the lowest storage cost in AWS.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon S3 Storage Classes lifecycle hierarchy is under consideration.",
    options: [
      { id: 'A', text: "Store files in Amazon EBS Cold HDD (sc1)." },
      { id: 'B', text: "Store archived files in Amazon S3 Glacier Deep Archive." },
      { id: 'C', text: "Store files in Amazon S3 Standard." },
      { id: 'D', text: "Store files in Amazon S3 One Zone-Infrequent Access." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Store archived files in Amazon S3 Glacier Deep Archive. Amazon S3 Glacier Deep Archive is Amazon S3's lowest-cost storage class, designed for long-term retention of data that is accessed once or twice a year. It provides 99.999999999% (11 9s) of durability with retrieval times typically within 12 hours.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html",
    tags: ["Amazon S3", "S3", "Security Compliance"]
  },
  {
    id: "aws-clf-404",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 Storage Classes: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the AWS Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Amazon S3 to archive compliance files that must be retained for 10 years, are rarely accessed, but can tolerate a retrieval time of 12 hours for the lowest storage cost in AWS.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Amazon S3 Storage Classes lifecycle hierarchy is under consideration.",
    options: [
      { id: 'A', text: "Store files in Amazon S3 Standard." },
      { id: 'B', text: "Store files in Amazon S3 One Zone-Infrequent Access." },
      { id: 'C', text: "Store archived files in Amazon S3 Glacier Deep Archive." },
      { id: 'D', text: "Store files in Amazon EBS Cold HDD (sc1)." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Store archived files in Amazon S3 Glacier Deep Archive. Amazon S3 Glacier Deep Archive is Amazon S3's lowest-cost storage class, designed for long-term retention of data that is accessed once or twice a year. It provides 99.999999999% (11 9s) of durability with retrieval times typically within 12 hours.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html",
    tags: ["Amazon S3", "S3", "Hybrid Migration"]
  },
  {
    id: "aws-clf-405",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 Storage Classes: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Amazon S3 to archive compliance files that must be retained for 10 years, are rarely accessed, but can tolerate a retrieval time of 12 hours for the lowest storage cost in AWS.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Amazon S3 Storage Classes lifecycle hierarchy is under consideration.",
    options: [
      { id: 'A', text: "Store files in Amazon EBS Cold HDD (sc1)." },
      { id: 'B', text: "Store archived files in Amazon S3 Glacier Deep Archive." },
      { id: 'C', text: "Store files in Amazon S3 Standard." },
      { id: 'D', text: "Store files in Amazon S3 One Zone-Infrequent Access." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Store archived files in Amazon S3 Glacier Deep Archive. Amazon S3 Glacier Deep Archive is Amazon S3's lowest-cost storage class, designed for long-term retention of data that is accessed once or twice a year. It provides 99.999999999% (11 9s) of durability with retrieval times typically within 12 hours.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html",
    tags: ["Amazon S3", "S3", "Resilience Failure"]
  },
  {
    id: "aws-clf-406",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Elastic Block Store (EBS): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Amazon EBS to provide high-performance, persistent block storage volumes that can be attached to Amazon EC2 instances to host an operating system and relational database files.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Amazon Elastic Block Store (EBS) persistent block storage is under consideration.",
    options: [
      { id: 'A', text: "Use EC2 Instance Store volumes for persistent database files." },
      { id: 'B', text: "Mount an AWS Storage Gateway Tape Gateway." },
      { id: 'C', text: "Store the operating system files in an Amazon S3 bucket." },
      { id: 'D', text: "Attach Amazon Elastic Block Store (EBS) General Purpose SSD (gp3) volumes to the EC2 instances." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Attach Amazon Elastic Block Store (EBS) General Purpose SSD (gp3) volumes to the EC2 instances. Amazon Elastic Block Store (EBS) provides block-level storage volumes for use with Amazon EC2 instances. EBS volumes are highly available, persistent, point-in-time snapshot-capable storage drives that persist independently from the life of the EC2 instance (unlike ephemeral Instance Store).",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html",
    tags: ["Amazon EBS", "EBS", "Dr Failover"]
  },
  {
    id: "aws-clf-407",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Elastic Block Store (EBS): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Amazon EBS to provide high-performance, persistent block storage volumes that can be attached to Amazon EC2 instances to host an operating system and relational database files.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Amazon Elastic Block Store (EBS) persistent block storage is under consideration.",
    options: [
      { id: 'A', text: "Use EC2 Instance Store volumes for persistent database files." },
      { id: 'B', text: "Attach Amazon Elastic Block Store (EBS) General Purpose SSD (gp3) volumes to the EC2 instances." },
      { id: 'C', text: "Store the operating system files in an Amazon S3 bucket." },
      { id: 'D', text: "Mount an AWS Storage Gateway Tape Gateway." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Attach Amazon Elastic Block Store (EBS) General Purpose SSD (gp3) volumes to the EC2 instances. Amazon Elastic Block Store (EBS) provides block-level storage volumes for use with Amazon EC2 instances. EBS volumes are highly available, persistent, point-in-time snapshot-capable storage drives that persist independently from the life of the EC2 instance (unlike ephemeral Instance Store).",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html",
    tags: ["Amazon EBS", "EBS", "High Load Scale"]
  },
  {
    id: "aws-clf-408",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Elastic Block Store (EBS): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Amazon EBS to provide high-performance, persistent block storage volumes that can be attached to Amazon EC2 instances to host an operating system and relational database files.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon Elastic Block Store (EBS) persistent block storage is under consideration.",
    options: [
      { id: 'A', text: "Store the operating system files in an Amazon S3 bucket." },
      { id: 'B', text: "Use EC2 Instance Store volumes for persistent database files." },
      { id: 'C', text: "Attach Amazon Elastic Block Store (EBS) General Purpose SSD (gp3) volumes to the EC2 instances." },
      { id: 'D', text: "Mount an AWS Storage Gateway Tape Gateway." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Attach Amazon Elastic Block Store (EBS) General Purpose SSD (gp3) volumes to the EC2 instances. Amazon Elastic Block Store (EBS) provides block-level storage volumes for use with Amazon EC2 instances. EBS volumes are highly available, persistent, point-in-time snapshot-capable storage drives that persist independently from the life of the EC2 instance (unlike ephemeral Instance Store).",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html",
    tags: ["Amazon EBS", "EBS", "Security Compliance"]
  },
  {
    id: "aws-clf-409",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Elastic Block Store (EBS): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the AWS Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Amazon EBS to provide high-performance, persistent block storage volumes that can be attached to Amazon EC2 instances to host an operating system and relational database files.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Amazon Elastic Block Store (EBS) persistent block storage is under consideration.",
    options: [
      { id: 'A', text: "Attach Amazon Elastic Block Store (EBS) General Purpose SSD (gp3) volumes to the EC2 instances." },
      { id: 'B', text: "Store the operating system files in an Amazon S3 bucket." },
      { id: 'C', text: "Use EC2 Instance Store volumes for persistent database files." },
      { id: 'D', text: "Mount an AWS Storage Gateway Tape Gateway." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach Amazon Elastic Block Store (EBS) General Purpose SSD (gp3) volumes to the EC2 instances. Amazon Elastic Block Store (EBS) provides block-level storage volumes for use with Amazon EC2 instances. EBS volumes are highly available, persistent, point-in-time snapshot-capable storage drives that persist independently from the life of the EC2 instance (unlike ephemeral Instance Store).",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html",
    tags: ["Amazon EBS", "EBS", "Hybrid Migration"]
  },
  {
    id: "aws-clf-410",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Elastic Block Store (EBS): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Amazon EBS to provide high-performance, persistent block storage volumes that can be attached to Amazon EC2 instances to host an operating system and relational database files.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Amazon Elastic Block Store (EBS) persistent block storage is under consideration.",
    options: [
      { id: 'A', text: "Mount an AWS Storage Gateway Tape Gateway." },
      { id: 'B', text: "Use EC2 Instance Store volumes for persistent database files." },
      { id: 'C', text: "Store the operating system files in an Amazon S3 bucket." },
      { id: 'D', text: "Attach Amazon Elastic Block Store (EBS) General Purpose SSD (gp3) volumes to the EC2 instances." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Attach Amazon Elastic Block Store (EBS) General Purpose SSD (gp3) volumes to the EC2 instances. Amazon Elastic Block Store (EBS) provides block-level storage volumes for use with Amazon EC2 instances. EBS volumes are highly available, persistent, point-in-time snapshot-capable storage drives that persist independently from the life of the EC2 instance (unlike ephemeral Instance Store).",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html",
    tags: ["Amazon EBS", "EBS", "Resilience Failure"]
  },
  {
    id: "aws-clf-411",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Elastic File System (EFS): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Amazon EFS to share a single POSIX-compliant file system simultaneously across hundreds of Amazon EC2 Linux instances located in multiple Availability Zones.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Amazon Elastic File System (EFS) shared file storage is under consideration.",
    options: [
      { id: 'A', text: "Attach a single Amazon EBS volume to hundreds of EC2 instances across multiple AZs." },
      { id: 'B', text: "Deploy Amazon Elastic File System (EFS) and mount it across the EC2 instances using the NFSv4 protocol." },
      { id: 'C', text: "Store all files in an Amazon S3 bucket and use local cron jobs to download copies." },
      { id: 'D', text: "Deploy Amazon FSx for Windows File Server." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Amazon Elastic File System (EFS) and mount it across the EC2 instances using the NFSv4 protocol. Amazon EFS provides a serverless, fully managed, elastic file system supporting the NFSv4 protocol. It can be mounted concurrently by hundreds of EC2 instances across multiple Availability Zones, automatically growing and shrinking as files are added or removed.",
    referenceUrl: "https://docs.aws.amazon.com/efs/latest/ug/what-is.html",
    tags: ["Amazon EFS", "EFS", "Dr Failover"]
  },
  {
    id: "aws-clf-412",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Elastic File System (EFS): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Amazon EFS to share a single POSIX-compliant file system simultaneously across hundreds of Amazon EC2 Linux instances located in multiple Availability Zones.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Amazon Elastic File System (EFS) shared file storage is under consideration.",
    options: [
      { id: 'A', text: "Attach a single Amazon EBS volume to hundreds of EC2 instances across multiple AZs." },
      { id: 'B', text: "Store all files in an Amazon S3 bucket and use local cron jobs to download copies." },
      { id: 'C', text: "Deploy Amazon FSx for Windows File Server." },
      { id: 'D', text: "Deploy Amazon Elastic File System (EFS) and mount it across the EC2 instances using the NFSv4 protocol." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Amazon Elastic File System (EFS) and mount it across the EC2 instances using the NFSv4 protocol. Amazon EFS provides a serverless, fully managed, elastic file system supporting the NFSv4 protocol. It can be mounted concurrently by hundreds of EC2 instances across multiple Availability Zones, automatically growing and shrinking as files are added or removed.",
    referenceUrl: "https://docs.aws.amazon.com/efs/latest/ug/what-is.html",
    tags: ["Amazon EFS", "EFS", "High Load Scale"]
  },
  {
    id: "aws-clf-413",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Elastic File System (EFS): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Amazon EFS to share a single POSIX-compliant file system simultaneously across hundreds of Amazon EC2 Linux instances located in multiple Availability Zones.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon Elastic File System (EFS) shared file storage is under consideration.",
    options: [
      { id: 'A', text: "Deploy Amazon Elastic File System (EFS) and mount it across the EC2 instances using the NFSv4 protocol." },
      { id: 'B', text: "Store all files in an Amazon S3 bucket and use local cron jobs to download copies." },
      { id: 'C', text: "Deploy Amazon FSx for Windows File Server." },
      { id: 'D', text: "Attach a single Amazon EBS volume to hundreds of EC2 instances across multiple AZs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Amazon Elastic File System (EFS) and mount it across the EC2 instances using the NFSv4 protocol. Amazon EFS provides a serverless, fully managed, elastic file system supporting the NFSv4 protocol. It can be mounted concurrently by hundreds of EC2 instances across multiple Availability Zones, automatically growing and shrinking as files are added or removed.",
    referenceUrl: "https://docs.aws.amazon.com/efs/latest/ug/what-is.html",
    tags: ["Amazon EFS", "EFS", "Security Compliance"]
  },
  {
    id: "aws-clf-414",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Elastic File System (EFS): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the AWS Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Amazon EFS to share a single POSIX-compliant file system simultaneously across hundreds of Amazon EC2 Linux instances located in multiple Availability Zones.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Amazon Elastic File System (EFS) shared file storage is under consideration.",
    options: [
      { id: 'A', text: "Store all files in an Amazon S3 bucket and use local cron jobs to download copies." },
      { id: 'B', text: "Deploy Amazon Elastic File System (EFS) and mount it across the EC2 instances using the NFSv4 protocol." },
      { id: 'C', text: "Attach a single Amazon EBS volume to hundreds of EC2 instances across multiple AZs." },
      { id: 'D', text: "Deploy Amazon FSx for Windows File Server." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Amazon Elastic File System (EFS) and mount it across the EC2 instances using the NFSv4 protocol. Amazon EFS provides a serverless, fully managed, elastic file system supporting the NFSv4 protocol. It can be mounted concurrently by hundreds of EC2 instances across multiple Availability Zones, automatically growing and shrinking as files are added or removed.",
    referenceUrl: "https://docs.aws.amazon.com/efs/latest/ug/what-is.html",
    tags: ["Amazon EFS", "EFS", "Hybrid Migration"]
  },
  {
    id: "aws-clf-415",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Elastic File System (EFS): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Amazon EFS to share a single POSIX-compliant file system simultaneously across hundreds of Amazon EC2 Linux instances located in multiple Availability Zones.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Amazon Elastic File System (EFS) shared file storage is under consideration.",
    options: [
      { id: 'A', text: "Deploy Amazon FSx for Windows File Server." },
      { id: 'B', text: "Attach a single Amazon EBS volume to hundreds of EC2 instances across multiple AZs." },
      { id: 'C', text: "Deploy Amazon Elastic File System (EFS) and mount it across the EC2 instances using the NFSv4 protocol." },
      { id: 'D', text: "Store all files in an Amazon S3 bucket and use local cron jobs to download copies." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Amazon Elastic File System (EFS) and mount it across the EC2 instances using the NFSv4 protocol. Amazon EFS provides a serverless, fully managed, elastic file system supporting the NFSv4 protocol. It can be mounted concurrently by hundreds of EC2 instances across multiple Availability Zones, automatically growing and shrinking as files are added or removed.",
    referenceUrl: "https://docs.aws.amazon.com/efs/latest/ug/what-is.html",
    tags: ["Amazon EFS", "EFS", "Resilience Failure"]
  },
  {
    id: "aws-clf-416",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon RDS Multi-AZ vs Read Replicas: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Amazon RDS to differentiate the primary use case of an Amazon RDS Multi-AZ deployment from an Amazon RDS Read Replica.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Amazon RDS Multi-AZ deployments vs. Read Replicas is under consideration.",
    options: [
      { id: 'A', text: "Multi-AZ is designed for read scalability, while Read Replicas are designed for high availability." },
      { id: 'B', text: "Read Replicas synchronously replicate data and act as the primary write target." },
      { id: 'C', text: "Amazon RDS Multi-AZ provides high availability and automated synchronous failover for disaster recovery; Read Replicas provide asynchronous read scalability for read-heavy database workloads." },
      { id: 'D', text: "Multi-AZ deployments do not provide automated failover." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon RDS Multi-AZ provides high availability and automated synchronous failover for disaster recovery; Read Replicas provide asynchronous read scalability for read-heavy database workloads. Amazon RDS Multi-AZ deployments maintain a synchronous standby replica in a second Availability Zone to provide high availability and automated failover during outages. Read Replicas replicate asynchronously to offload read-heavy traffic from the primary writer instance.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html",
    tags: ["Amazon RDS", "RDS", "Dr Failover"]
  },
  {
    id: "aws-clf-417",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon RDS Multi-AZ vs Read Replicas: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Amazon RDS to differentiate the primary use case of an Amazon RDS Multi-AZ deployment from an Amazon RDS Read Replica.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Amazon RDS Multi-AZ deployments vs. Read Replicas is under consideration.",
    options: [
      { id: 'A', text: "Amazon RDS Multi-AZ provides high availability and automated synchronous failover for disaster recovery; Read Replicas provide asynchronous read scalability for read-heavy database workloads." },
      { id: 'B', text: "Multi-AZ deployments do not provide automated failover." },
      { id: 'C', text: "Multi-AZ is designed for read scalability, while Read Replicas are designed for high availability." },
      { id: 'D', text: "Read Replicas synchronously replicate data and act as the primary write target." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon RDS Multi-AZ provides high availability and automated synchronous failover for disaster recovery; Read Replicas provide asynchronous read scalability for read-heavy database workloads. Amazon RDS Multi-AZ deployments maintain a synchronous standby replica in a second Availability Zone to provide high availability and automated failover during outages. Read Replicas replicate asynchronously to offload read-heavy traffic from the primary writer instance.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html",
    tags: ["Amazon RDS", "RDS", "High Load Scale"]
  },
  {
    id: "aws-clf-418",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon RDS Multi-AZ vs Read Replicas: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Amazon RDS to differentiate the primary use case of an Amazon RDS Multi-AZ deployment from an Amazon RDS Read Replica.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon RDS Multi-AZ deployments vs. Read Replicas is under consideration.",
    options: [
      { id: 'A', text: "Read Replicas synchronously replicate data and act as the primary write target." },
      { id: 'B', text: "Amazon RDS Multi-AZ provides high availability and automated synchronous failover for disaster recovery; Read Replicas provide asynchronous read scalability for read-heavy database workloads." },
      { id: 'C', text: "Multi-AZ deployments do not provide automated failover." },
      { id: 'D', text: "Multi-AZ is designed for read scalability, while Read Replicas are designed for high availability." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon RDS Multi-AZ provides high availability and automated synchronous failover for disaster recovery; Read Replicas provide asynchronous read scalability for read-heavy database workloads. Amazon RDS Multi-AZ deployments maintain a synchronous standby replica in a second Availability Zone to provide high availability and automated failover during outages. Read Replicas replicate asynchronously to offload read-heavy traffic from the primary writer instance.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html",
    tags: ["Amazon RDS", "RDS", "Security Compliance"]
  },
  {
    id: "aws-clf-419",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon RDS Multi-AZ vs Read Replicas: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the AWS Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Amazon RDS to differentiate the primary use case of an Amazon RDS Multi-AZ deployment from an Amazon RDS Read Replica.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Amazon RDS Multi-AZ deployments vs. Read Replicas is under consideration.",
    options: [
      { id: 'A', text: "Amazon RDS Multi-AZ provides high availability and automated synchronous failover for disaster recovery; Read Replicas provide asynchronous read scalability for read-heavy database workloads." },
      { id: 'B', text: "Multi-AZ deployments do not provide automated failover." },
      { id: 'C', text: "Multi-AZ is designed for read scalability, while Read Replicas are designed for high availability." },
      { id: 'D', text: "Read Replicas synchronously replicate data and act as the primary write target." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon RDS Multi-AZ provides high availability and automated synchronous failover for disaster recovery; Read Replicas provide asynchronous read scalability for read-heavy database workloads. Amazon RDS Multi-AZ deployments maintain a synchronous standby replica in a second Availability Zone to provide high availability and automated failover during outages. Read Replicas replicate asynchronously to offload read-heavy traffic from the primary writer instance.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html",
    tags: ["Amazon RDS", "RDS", "Hybrid Migration"]
  },
  {
    id: "aws-clf-420",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon RDS Multi-AZ vs Read Replicas: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Amazon RDS to differentiate the primary use case of an Amazon RDS Multi-AZ deployment from an Amazon RDS Read Replica.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Amazon RDS Multi-AZ deployments vs. Read Replicas is under consideration.",
    options: [
      { id: 'A', text: "Multi-AZ deployments do not provide automated failover." },
      { id: 'B', text: "Read Replicas synchronously replicate data and act as the primary write target." },
      { id: 'C', text: "Amazon RDS Multi-AZ provides high availability and automated synchronous failover for disaster recovery; Read Replicas provide asynchronous read scalability for read-heavy database workloads." },
      { id: 'D', text: "Multi-AZ is designed for read scalability, while Read Replicas are designed for high availability." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon RDS Multi-AZ provides high availability and automated synchronous failover for disaster recovery; Read Replicas provide asynchronous read scalability for read-heavy database workloads. Amazon RDS Multi-AZ deployments maintain a synchronous standby replica in a second Availability Zone to provide high availability and automated failover during outages. Read Replicas replicate asynchronously to offload read-heavy traffic from the primary writer instance.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html",
    tags: ["Amazon RDS", "RDS", "Resilience Failure"]
  },
  {
    id: "aws-clf-421",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Aurora High-Durability Storage: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Amazon Aurora to understand how Amazon Aurora replicates database volume storage to provide enterprise durability and fault tolerance.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Amazon Aurora cloud-native distributed storage architecture is under consideration.",
    options: [
      { id: 'A', text: "Amazon Aurora stores data on a single local hard drive in one data center." },
      { id: 'B', text: "Amazon Aurora relies on nightly tape backups to provide durability." },
      { id: 'C', text: "Amazon Aurora automatically replicates database storage across three Availability Zones with six storage copies, handling the loss of up to two copies without affecting write availability." },
      { id: 'D', text: "Amazon Aurora requires users to configure manual storage replication across regions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon Aurora automatically replicates database storage across three Availability Zones with six storage copies, handling the loss of up to two copies without affecting write availability. Amazon Aurora features a purpose-built cloud-native distributed storage system. It automatically maintains six copies of your data across three Availability Zones and continually backs up data to Amazon S3, providing 99.99% availability and instant recovery from disk failures.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.StorageReliability.html",
    tags: ["Amazon Aurora", "Aurora", "Dr Failover"]
  },
  {
    id: "aws-clf-422",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Aurora High-Durability Storage: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Amazon Aurora to understand how Amazon Aurora replicates database volume storage to provide enterprise durability and fault tolerance.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Amazon Aurora cloud-native distributed storage architecture is under consideration.",
    options: [
      { id: 'A', text: "Amazon Aurora automatically replicates database storage across three Availability Zones with six storage copies, handling the loss of up to two copies without affecting write availability." },
      { id: 'B', text: "Amazon Aurora relies on nightly tape backups to provide durability." },
      { id: 'C', text: "Amazon Aurora requires users to configure manual storage replication across regions." },
      { id: 'D', text: "Amazon Aurora stores data on a single local hard drive in one data center." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon Aurora automatically replicates database storage across three Availability Zones with six storage copies, handling the loss of up to two copies without affecting write availability. Amazon Aurora features a purpose-built cloud-native distributed storage system. It automatically maintains six copies of your data across three Availability Zones and continually backs up data to Amazon S3, providing 99.99% availability and instant recovery from disk failures.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.StorageReliability.html",
    tags: ["Amazon Aurora", "Aurora", "High Load Scale"]
  },
  {
    id: "aws-clf-423",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Aurora High-Durability Storage: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Amazon Aurora to understand how Amazon Aurora replicates database volume storage to provide enterprise durability and fault tolerance.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon Aurora cloud-native distributed storage architecture is under consideration.",
    options: [
      { id: 'A', text: "Amazon Aurora relies on nightly tape backups to provide durability." },
      { id: 'B', text: "Amazon Aurora stores data on a single local hard drive in one data center." },
      { id: 'C', text: "Amazon Aurora automatically replicates database storage across three Availability Zones with six storage copies, handling the loss of up to two copies without affecting write availability." },
      { id: 'D', text: "Amazon Aurora requires users to configure manual storage replication across regions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon Aurora automatically replicates database storage across three Availability Zones with six storage copies, handling the loss of up to two copies without affecting write availability. Amazon Aurora features a purpose-built cloud-native distributed storage system. It automatically maintains six copies of your data across three Availability Zones and continually backs up data to Amazon S3, providing 99.99% availability and instant recovery from disk failures.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.StorageReliability.html",
    tags: ["Amazon Aurora", "Aurora", "Security Compliance"]
  },
  {
    id: "aws-clf-424",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Aurora High-Durability Storage: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the AWS Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Amazon Aurora to understand how Amazon Aurora replicates database volume storage to provide enterprise durability and fault tolerance.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Amazon Aurora cloud-native distributed storage architecture is under consideration.",
    options: [
      { id: 'A', text: "Amazon Aurora requires users to configure manual storage replication across regions." },
      { id: 'B', text: "Amazon Aurora stores data on a single local hard drive in one data center." },
      { id: 'C', text: "Amazon Aurora relies on nightly tape backups to provide durability." },
      { id: 'D', text: "Amazon Aurora automatically replicates database storage across three Availability Zones with six storage copies, handling the loss of up to two copies without affecting write availability." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon Aurora automatically replicates database storage across three Availability Zones with six storage copies, handling the loss of up to two copies without affecting write availability. Amazon Aurora features a purpose-built cloud-native distributed storage system. It automatically maintains six copies of your data across three Availability Zones and continually backs up data to Amazon S3, providing 99.99% availability and instant recovery from disk failures.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.StorageReliability.html",
    tags: ["Amazon Aurora", "Aurora", "Hybrid Migration"]
  },
  {
    id: "aws-clf-425",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Aurora High-Durability Storage: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Amazon Aurora to understand how Amazon Aurora replicates database volume storage to provide enterprise durability and fault tolerance.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Amazon Aurora cloud-native distributed storage architecture is under consideration.",
    options: [
      { id: 'A', text: "Amazon Aurora requires users to configure manual storage replication across regions." },
      { id: 'B', text: "Amazon Aurora relies on nightly tape backups to provide durability." },
      { id: 'C', text: "Amazon Aurora automatically replicates database storage across three Availability Zones with six storage copies, handling the loss of up to two copies without affecting write availability." },
      { id: 'D', text: "Amazon Aurora stores data on a single local hard drive in one data center." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon Aurora automatically replicates database storage across three Availability Zones with six storage copies, handling the loss of up to two copies without affecting write availability. Amazon Aurora features a purpose-built cloud-native distributed storage system. It automatically maintains six copies of your data across three Availability Zones and continually backs up data to Amazon S3, providing 99.99% availability and instant recovery from disk failures.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.StorageReliability.html",
    tags: ["Amazon Aurora", "Aurora", "Resilience Failure"]
  }
];

export default AWS_CLF_QUESTIONS_17;
