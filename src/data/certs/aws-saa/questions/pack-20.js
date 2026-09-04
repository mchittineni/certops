export const AWS_SAA_QUESTIONS_20 = [
  {
    id: "aws-saa-476",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "S3 Lifecycle Expiring Noncurrent Versions: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon S3 to prevent runaway storage charges caused by millions of accumulated historical object versions in an S3 versioning-enabled bucket.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? S3 Lifecycle rule expiring noncurrent versions is being evaluated.",
    options: [
      { id: 'A', text: "Configure an S3 Lifecycle rule with an Expiration action on current versions." },
      { id: 'B', text: "Disable S3 Versioning on the bucket and purge all objects manually." },
      { id: 'C', text: "Configure an S3 Lifecycle rule with NoncurrentVersionExpiration to permanently delete older noncurrent versions after 30 days." },
      { id: 'D', text: "Enable MFA Delete on the S3 bucket to prevent object versioning." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an S3 Lifecycle rule with NoncurrentVersionExpiration to permanently delete older noncurrent versions after 30 days. In S3 buckets with Versioning enabled, overwriting or deleting an object creates a noncurrent version that continues to incur storage costs indefinitely. Configuring a `NoncurrentVersionExpiration` lifecycle rule automatically and permanently purges historical versions after a designated number of days.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html#lifecycle-config-concept-ex6",
    tags: ["Amazon S3", "S3", "Dr Failover"]
  },
  {
    id: "aws-saa-477",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "S3 Lifecycle Expiring Noncurrent Versions: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon S3 to prevent runaway storage charges caused by millions of accumulated historical object versions in an S3 versioning-enabled bucket.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? S3 Lifecycle rule expiring noncurrent versions is being evaluated.",
    options: [
      { id: 'A', text: "Enable MFA Delete on the S3 bucket to prevent object versioning." },
      { id: 'B', text: "Configure an S3 Lifecycle rule with NoncurrentVersionExpiration to permanently delete older noncurrent versions after 30 days." },
      { id: 'C', text: "Configure an S3 Lifecycle rule with an Expiration action on current versions." },
      { id: 'D', text: "Disable S3 Versioning on the bucket and purge all objects manually." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an S3 Lifecycle rule with NoncurrentVersionExpiration to permanently delete older noncurrent versions after 30 days. In S3 buckets with Versioning enabled, overwriting or deleting an object creates a noncurrent version that continues to incur storage costs indefinitely. Configuring a `NoncurrentVersionExpiration` lifecycle rule automatically and permanently purges historical versions after a designated number of days.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html#lifecycle-config-concept-ex6",
    tags: ["Amazon S3", "S3", "High Load Scale"]
  },
  {
    id: "aws-saa-478",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "S3 Lifecycle Expiring Noncurrent Versions: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon S3 to prevent runaway storage charges caused by millions of accumulated historical object versions in an S3 versioning-enabled bucket.",
    question: "Which solution properly implements these mandatory security and governance controls? S3 Lifecycle rule expiring noncurrent versions is being evaluated.",
    options: [
      { id: 'A', text: "Enable MFA Delete on the S3 bucket to prevent object versioning." },
      { id: 'B', text: "Configure an S3 Lifecycle rule with an Expiration action on current versions." },
      { id: 'C', text: "Disable S3 Versioning on the bucket and purge all objects manually." },
      { id: 'D', text: "Configure an S3 Lifecycle rule with NoncurrentVersionExpiration to permanently delete older noncurrent versions after 30 days." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an S3 Lifecycle rule with NoncurrentVersionExpiration to permanently delete older noncurrent versions after 30 days. In S3 buckets with Versioning enabled, overwriting or deleting an object creates a noncurrent version that continues to incur storage costs indefinitely. Configuring a `NoncurrentVersionExpiration` lifecycle rule automatically and permanently purges historical versions after a designated number of days.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html#lifecycle-config-concept-ex6",
    tags: ["Amazon S3", "S3", "Security Compliance"]
  },
  {
    id: "aws-saa-479",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "S3 Lifecycle Expiring Noncurrent Versions: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon S3 to prevent runaway storage charges caused by millions of accumulated historical object versions in an S3 versioning-enabled bucket.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? S3 Lifecycle rule expiring noncurrent versions is being evaluated.",
    options: [
      { id: 'A', text: "Disable S3 Versioning on the bucket and purge all objects manually." },
      { id: 'B', text: "Configure an S3 Lifecycle rule with NoncurrentVersionExpiration to permanently delete older noncurrent versions after 30 days." },
      { id: 'C', text: "Enable MFA Delete on the S3 bucket to prevent object versioning." },
      { id: 'D', text: "Configure an S3 Lifecycle rule with an Expiration action on current versions." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an S3 Lifecycle rule with NoncurrentVersionExpiration to permanently delete older noncurrent versions after 30 days. In S3 buckets with Versioning enabled, overwriting or deleting an object creates a noncurrent version that continues to incur storage costs indefinitely. Configuring a `NoncurrentVersionExpiration` lifecycle rule automatically and permanently purges historical versions after a designated number of days.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html#lifecycle-config-concept-ex6",
    tags: ["Amazon S3", "S3", "Hybrid Migration"]
  },
  {
    id: "aws-saa-480",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "S3 Lifecycle Expiring Noncurrent Versions: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon S3 to prevent runaway storage charges caused by millions of accumulated historical object versions in an S3 versioning-enabled bucket.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? S3 Lifecycle rule expiring noncurrent versions is being evaluated.",
    options: [
      { id: 'A', text: "Configure an S3 Lifecycle rule with an Expiration action on current versions." },
      { id: 'B', text: "Configure an S3 Lifecycle rule with NoncurrentVersionExpiration to permanently delete older noncurrent versions after 30 days." },
      { id: 'C', text: "Enable MFA Delete on the S3 bucket to prevent object versioning." },
      { id: 'D', text: "Disable S3 Versioning on the bucket and purge all objects manually." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an S3 Lifecycle rule with NoncurrentVersionExpiration to permanently delete older noncurrent versions after 30 days. In S3 buckets with Versioning enabled, overwriting or deleting an object creates a noncurrent version that continues to incur storage costs indefinitely. Configuring a `NoncurrentVersionExpiration` lifecycle rule automatically and permanently purges historical versions after a designated number of days.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html#lifecycle-config-concept-ex6",
    tags: ["Amazon S3", "S3", "Resilience Failure"]
  },
  {
    id: "aws-saa-481",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "AWS Cost Anomaly Detection: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on AWS Cost Management to automatically detect unexpected cloud spending spikes in real time and receive immediate notifications with root-cause analysis.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? AWS Cost Anomaly Detection with SNS alerts is being evaluated.",
    options: [
      { id: 'A', text: "Configure AWS Budgets with a fixed monthly forecast threshold only." },
      { id: 'B', text: "Review the AWS Monthly Billing invoice PDF manually at the end of each billing cycle." },
      { id: 'C', text: "Deploy an AWS CloudWatch metric alarm on the EstimatedCharges billing metric." },
      { id: 'D', text: "Configure AWS Cost Anomaly Detection with a cost monitor across all AWS services and create an alert subscription linked to an Amazon SNS topic." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure AWS Cost Anomaly Detection with a cost monitor across all AWS services and create an alert subscription linked to an Amazon SNS topic. AWS Cost Anomaly Detection uses machine learning to continually monitor billing and usage patterns, detecting abnormal spending spikes in real time. It automatically performs root-cause analysis identifying the account, service, region, and usage type responsible and alerts teams via SNS or email.",
    referenceUrl: "https://docs.aws.amazon.com/cost-management/latest/userguide/manage-cost-anomalies.html",
    tags: ["AWS Cost Management", "Cost Management", "Dr Failover"]
  },
  {
    id: "aws-saa-482",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "AWS Cost Anomaly Detection: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on AWS Cost Management to automatically detect unexpected cloud spending spikes in real time and receive immediate notifications with root-cause analysis.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? AWS Cost Anomaly Detection with SNS alerts is being evaluated.",
    options: [
      { id: 'A', text: "Configure AWS Cost Anomaly Detection with a cost monitor across all AWS services and create an alert subscription linked to an Amazon SNS topic." },
      { id: 'B', text: "Review the AWS Monthly Billing invoice PDF manually at the end of each billing cycle." },
      { id: 'C', text: "Deploy an AWS CloudWatch metric alarm on the EstimatedCharges billing metric." },
      { id: 'D', text: "Configure AWS Budgets with a fixed monthly forecast threshold only." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Cost Anomaly Detection with a cost monitor across all AWS services and create an alert subscription linked to an Amazon SNS topic. AWS Cost Anomaly Detection uses machine learning to continually monitor billing and usage patterns, detecting abnormal spending spikes in real time. It automatically performs root-cause analysis identifying the account, service, region, and usage type responsible and alerts teams via SNS or email.",
    referenceUrl: "https://docs.aws.amazon.com/cost-management/latest/userguide/manage-cost-anomalies.html",
    tags: ["AWS Cost Management", "Cost Management", "High Load Scale"]
  },
  {
    id: "aws-saa-483",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "AWS Cost Anomaly Detection: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on AWS Cost Management to automatically detect unexpected cloud spending spikes in real time and receive immediate notifications with root-cause analysis.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Cost Anomaly Detection with SNS alerts is being evaluated.",
    options: [
      { id: 'A', text: "Configure AWS Budgets with a fixed monthly forecast threshold only." },
      { id: 'B', text: "Configure AWS Cost Anomaly Detection with a cost monitor across all AWS services and create an alert subscription linked to an Amazon SNS topic." },
      { id: 'C', text: "Review the AWS Monthly Billing invoice PDF manually at the end of each billing cycle." },
      { id: 'D', text: "Deploy an AWS CloudWatch metric alarm on the EstimatedCharges billing metric." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure AWS Cost Anomaly Detection with a cost monitor across all AWS services and create an alert subscription linked to an Amazon SNS topic. AWS Cost Anomaly Detection uses machine learning to continually monitor billing and usage patterns, detecting abnormal spending spikes in real time. It automatically performs root-cause analysis identifying the account, service, region, and usage type responsible and alerts teams via SNS or email.",
    referenceUrl: "https://docs.aws.amazon.com/cost-management/latest/userguide/manage-cost-anomalies.html",
    tags: ["AWS Cost Management", "Cost Management", "Security Compliance"]
  },
  {
    id: "aws-saa-484",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "AWS Cost Anomaly Detection: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on AWS Cost Management to automatically detect unexpected cloud spending spikes in real time and receive immediate notifications with root-cause analysis.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? AWS Cost Anomaly Detection with SNS alerts is being evaluated.",
    options: [
      { id: 'A', text: "Configure AWS Budgets with a fixed monthly forecast threshold only." },
      { id: 'B', text: "Deploy an AWS CloudWatch metric alarm on the EstimatedCharges billing metric." },
      { id: 'C', text: "Review the AWS Monthly Billing invoice PDF manually at the end of each billing cycle." },
      { id: 'D', text: "Configure AWS Cost Anomaly Detection with a cost monitor across all AWS services and create an alert subscription linked to an Amazon SNS topic." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure AWS Cost Anomaly Detection with a cost monitor across all AWS services and create an alert subscription linked to an Amazon SNS topic. AWS Cost Anomaly Detection uses machine learning to continually monitor billing and usage patterns, detecting abnormal spending spikes in real time. It automatically performs root-cause analysis identifying the account, service, region, and usage type responsible and alerts teams via SNS or email.",
    referenceUrl: "https://docs.aws.amazon.com/cost-management/latest/userguide/manage-cost-anomalies.html",
    tags: ["AWS Cost Management", "Cost Management", "Hybrid Migration"]
  },
  {
    id: "aws-saa-485",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "AWS Cost Anomaly Detection: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on AWS Cost Management to automatically detect unexpected cloud spending spikes in real time and receive immediate notifications with root-cause analysis.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? AWS Cost Anomaly Detection with SNS alerts is being evaluated.",
    options: [
      { id: 'A', text: "Review the AWS Monthly Billing invoice PDF manually at the end of each billing cycle." },
      { id: 'B', text: "Deploy an AWS CloudWatch metric alarm on the EstimatedCharges billing metric." },
      { id: 'C', text: "Configure AWS Budgets with a fixed monthly forecast threshold only." },
      { id: 'D', text: "Configure AWS Cost Anomaly Detection with a cost monitor across all AWS services and create an alert subscription linked to an Amazon SNS topic." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure AWS Cost Anomaly Detection with a cost monitor across all AWS services and create an alert subscription linked to an Amazon SNS topic. AWS Cost Anomaly Detection uses machine learning to continually monitor billing and usage patterns, detecting abnormal spending spikes in real time. It automatically performs root-cause analysis identifying the account, service, region, and usage type responsible and alerts teams via SNS or email.",
    referenceUrl: "https://docs.aws.amazon.com/cost-management/latest/userguide/manage-cost-anomalies.html",
    tags: ["AWS Cost Management", "Cost Management", "Resilience Failure"]
  },
  {
    id: "aws-saa-486",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "AWS Compute Optimizer Rightsizing: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on AWS Cost Management to identify overprovisioned EC2 instances, EBS volumes, and Lambda functions and obtain data-driven rightsizing recommendations to eliminate waste.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? AWS Compute Optimizer rightsizing recommendations is being evaluated.",
    options: [
      { id: 'A', text: "Configure an Auto Scaling group with a minimum capacity of 0 instances." },
      { id: 'B', text: "Activate AWS Compute Optimizer across the AWS Organization to evaluate historical CloudWatch utilization metrics and implement rightsizing recommendations." },
      { id: 'C', text: "Deploy an Amazon CloudWatch Logs Insights query to inspect operating system memory logs manually." },
      { id: 'D', text: "Terminate 50% of all running EC2 instances across development environments arbitrarily." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Activate AWS Compute Optimizer across the AWS Organization to evaluate historical CloudWatch utilization metrics and implement rightsizing recommendations. AWS Compute Optimizer uses machine learning to analyze historical CloudWatch resource utilization metrics (CPU, memory, storage, network) and delivers actionable rightsizing recommendations for EC2 instances, Auto Scaling groups, EBS volumes, and Lambda functions to maximize price-performance.",
    referenceUrl: "https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html",
    tags: ["AWS Cost Management", "Compute Optimizer", "Dr Failover"]
  },
  {
    id: "aws-saa-487",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "AWS Compute Optimizer Rightsizing: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on AWS Cost Management to identify overprovisioned EC2 instances, EBS volumes, and Lambda functions and obtain data-driven rightsizing recommendations to eliminate waste.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? AWS Compute Optimizer rightsizing recommendations is being evaluated.",
    options: [
      { id: 'A', text: "Configure an Auto Scaling group with a minimum capacity of 0 instances." },
      { id: 'B', text: "Activate AWS Compute Optimizer across the AWS Organization to evaluate historical CloudWatch utilization metrics and implement rightsizing recommendations." },
      { id: 'C', text: "Terminate 50% of all running EC2 instances across development environments arbitrarily." },
      { id: 'D', text: "Deploy an Amazon CloudWatch Logs Insights query to inspect operating system memory logs manually." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Activate AWS Compute Optimizer across the AWS Organization to evaluate historical CloudWatch utilization metrics and implement rightsizing recommendations. AWS Compute Optimizer uses machine learning to analyze historical CloudWatch resource utilization metrics (CPU, memory, storage, network) and delivers actionable rightsizing recommendations for EC2 instances, Auto Scaling groups, EBS volumes, and Lambda functions to maximize price-performance.",
    referenceUrl: "https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html",
    tags: ["AWS Cost Management", "Compute Optimizer", "High Load Scale"]
  },
  {
    id: "aws-saa-488",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "AWS Compute Optimizer Rightsizing: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on AWS Cost Management to identify overprovisioned EC2 instances, EBS volumes, and Lambda functions and obtain data-driven rightsizing recommendations to eliminate waste.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Compute Optimizer rightsizing recommendations is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Amazon CloudWatch Logs Insights query to inspect operating system memory logs manually." },
      { id: 'B', text: "Configure an Auto Scaling group with a minimum capacity of 0 instances." },
      { id: 'C', text: "Terminate 50% of all running EC2 instances across development environments arbitrarily." },
      { id: 'D', text: "Activate AWS Compute Optimizer across the AWS Organization to evaluate historical CloudWatch utilization metrics and implement rightsizing recommendations." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Activate AWS Compute Optimizer across the AWS Organization to evaluate historical CloudWatch utilization metrics and implement rightsizing recommendations. AWS Compute Optimizer uses machine learning to analyze historical CloudWatch resource utilization metrics (CPU, memory, storage, network) and delivers actionable rightsizing recommendations for EC2 instances, Auto Scaling groups, EBS volumes, and Lambda functions to maximize price-performance.",
    referenceUrl: "https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html",
    tags: ["AWS Cost Management", "Compute Optimizer", "Security Compliance"]
  },
  {
    id: "aws-saa-489",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "AWS Compute Optimizer Rightsizing: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on AWS Cost Management to identify overprovisioned EC2 instances, EBS volumes, and Lambda functions and obtain data-driven rightsizing recommendations to eliminate waste.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? AWS Compute Optimizer rightsizing recommendations is being evaluated.",
    options: [
      { id: 'A', text: "Terminate 50% of all running EC2 instances across development environments arbitrarily." },
      { id: 'B', text: "Activate AWS Compute Optimizer across the AWS Organization to evaluate historical CloudWatch utilization metrics and implement rightsizing recommendations." },
      { id: 'C', text: "Deploy an Amazon CloudWatch Logs Insights query to inspect operating system memory logs manually." },
      { id: 'D', text: "Configure an Auto Scaling group with a minimum capacity of 0 instances." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Activate AWS Compute Optimizer across the AWS Organization to evaluate historical CloudWatch utilization metrics and implement rightsizing recommendations. AWS Compute Optimizer uses machine learning to analyze historical CloudWatch resource utilization metrics (CPU, memory, storage, network) and delivers actionable rightsizing recommendations for EC2 instances, Auto Scaling groups, EBS volumes, and Lambda functions to maximize price-performance.",
    referenceUrl: "https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html",
    tags: ["AWS Cost Management", "Compute Optimizer", "Hybrid Migration"]
  },
  {
    id: "aws-saa-490",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "AWS Compute Optimizer Rightsizing: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on AWS Cost Management to identify overprovisioned EC2 instances, EBS volumes, and Lambda functions and obtain data-driven rightsizing recommendations to eliminate waste.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? AWS Compute Optimizer rightsizing recommendations is being evaluated.",
    options: [
      { id: 'A', text: "Terminate 50% of all running EC2 instances across development environments arbitrarily." },
      { id: 'B', text: "Activate AWS Compute Optimizer across the AWS Organization to evaluate historical CloudWatch utilization metrics and implement rightsizing recommendations." },
      { id: 'C', text: "Configure an Auto Scaling group with a minimum capacity of 0 instances." },
      { id: 'D', text: "Deploy an Amazon CloudWatch Logs Insights query to inspect operating system memory logs manually." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Activate AWS Compute Optimizer across the AWS Organization to evaluate historical CloudWatch utilization metrics and implement rightsizing recommendations. AWS Compute Optimizer uses machine learning to analyze historical CloudWatch resource utilization metrics (CPU, memory, storage, network) and delivers actionable rightsizing recommendations for EC2 instances, Auto Scaling groups, EBS volumes, and Lambda functions to maximize price-performance.",
    referenceUrl: "https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html",
    tags: ["AWS Cost Management", "Compute Optimizer", "Resilience Failure"]
  },
  {
    id: "aws-saa-491",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "EBS gp3 Volume Migration: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon EBS to reduce storage costs by 20% while independently scaling IOPS and throughput without provisioning additional storage capacity.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Amazon EBS General Purpose SSD (gp3) migration is being evaluated.",
    options: [
      { id: 'A', text: "Migrate EBS gp2 volumes to Provisioned IOPS SSD (io2) volumes." },
      { id: 'B', text: "Attach an Amazon S3 bucket to the EC2 instances using S3FS." },
      { id: 'C', text: "Migrate EBS gp2 volumes to Cold HDD (sc1) magnetic storage volumes." },
      { id: 'D', text: "Migrate existing EBS gp2 volumes to General Purpose SSD (gp3) volumes using Amazon EBS Elastic Volumes without instance downtime." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Migrate existing EBS gp2 volumes to General Purpose SSD (gp3) volumes using Amazon EBS Elastic Volumes without instance downtime. EBS gp3 volumes deliver baseline performance of 3,000 IOPS and 125 MiB/s included with any volume size at a 20% lower price per GB than gp2. Furthermore, gp3 allows administrators to scale IOPS and throughput independently without paying for unnecessary storage capacity.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html#gp3",
    tags: ["Amazon EBS", "EBS", "Dr Failover"]
  },
  {
    id: "aws-saa-492",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "EBS gp3 Volume Migration: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon EBS to reduce storage costs by 20% while independently scaling IOPS and throughput without provisioning additional storage capacity.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Amazon EBS General Purpose SSD (gp3) migration is being evaluated.",
    options: [
      { id: 'A', text: "Migrate existing EBS gp2 volumes to General Purpose SSD (gp3) volumes using Amazon EBS Elastic Volumes without instance downtime." },
      { id: 'B', text: "Attach an Amazon S3 bucket to the EC2 instances using S3FS." },
      { id: 'C', text: "Migrate EBS gp2 volumes to Cold HDD (sc1) magnetic storage volumes." },
      { id: 'D', text: "Migrate EBS gp2 volumes to Provisioned IOPS SSD (io2) volumes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Migrate existing EBS gp2 volumes to General Purpose SSD (gp3) volumes using Amazon EBS Elastic Volumes without instance downtime. EBS gp3 volumes deliver baseline performance of 3,000 IOPS and 125 MiB/s included with any volume size at a 20% lower price per GB than gp2. Furthermore, gp3 allows administrators to scale IOPS and throughput independently without paying for unnecessary storage capacity.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html#gp3",
    tags: ["Amazon EBS", "EBS", "High Load Scale"]
  },
  {
    id: "aws-saa-493",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "EBS gp3 Volume Migration: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon EBS to reduce storage costs by 20% while independently scaling IOPS and throughput without provisioning additional storage capacity.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon EBS General Purpose SSD (gp3) migration is being evaluated.",
    options: [
      { id: 'A', text: "Migrate existing EBS gp2 volumes to General Purpose SSD (gp3) volumes using Amazon EBS Elastic Volumes without instance downtime." },
      { id: 'B', text: "Attach an Amazon S3 bucket to the EC2 instances using S3FS." },
      { id: 'C', text: "Migrate EBS gp2 volumes to Cold HDD (sc1) magnetic storage volumes." },
      { id: 'D', text: "Migrate EBS gp2 volumes to Provisioned IOPS SSD (io2) volumes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Migrate existing EBS gp2 volumes to General Purpose SSD (gp3) volumes using Amazon EBS Elastic Volumes without instance downtime. EBS gp3 volumes deliver baseline performance of 3,000 IOPS and 125 MiB/s included with any volume size at a 20% lower price per GB than gp2. Furthermore, gp3 allows administrators to scale IOPS and throughput independently without paying for unnecessary storage capacity.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html#gp3",
    tags: ["Amazon EBS", "EBS", "Security Compliance"]
  },
  {
    id: "aws-saa-494",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "EBS gp3 Volume Migration: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon EBS to reduce storage costs by 20% while independently scaling IOPS and throughput without provisioning additional storage capacity.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Amazon EBS General Purpose SSD (gp3) migration is being evaluated.",
    options: [
      { id: 'A', text: "Migrate EBS gp2 volumes to Cold HDD (sc1) magnetic storage volumes." },
      { id: 'B', text: "Migrate EBS gp2 volumes to Provisioned IOPS SSD (io2) volumes." },
      { id: 'C', text: "Migrate existing EBS gp2 volumes to General Purpose SSD (gp3) volumes using Amazon EBS Elastic Volumes without instance downtime." },
      { id: 'D', text: "Attach an Amazon S3 bucket to the EC2 instances using S3FS." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Migrate existing EBS gp2 volumes to General Purpose SSD (gp3) volumes using Amazon EBS Elastic Volumes without instance downtime. EBS gp3 volumes deliver baseline performance of 3,000 IOPS and 125 MiB/s included with any volume size at a 20% lower price per GB than gp2. Furthermore, gp3 allows administrators to scale IOPS and throughput independently without paying for unnecessary storage capacity.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html#gp3",
    tags: ["Amazon EBS", "EBS", "Hybrid Migration"]
  },
  {
    id: "aws-saa-495",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "EBS gp3 Volume Migration: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon EBS to reduce storage costs by 20% while independently scaling IOPS and throughput without provisioning additional storage capacity.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Amazon EBS General Purpose SSD (gp3) migration is being evaluated.",
    options: [
      { id: 'A', text: "Migrate existing EBS gp2 volumes to General Purpose SSD (gp3) volumes using Amazon EBS Elastic Volumes without instance downtime." },
      { id: 'B', text: "Attach an Amazon S3 bucket to the EC2 instances using S3FS." },
      { id: 'C', text: "Migrate EBS gp2 volumes to Provisioned IOPS SSD (io2) volumes." },
      { id: 'D', text: "Migrate EBS gp2 volumes to Cold HDD (sc1) magnetic storage volumes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Migrate existing EBS gp2 volumes to General Purpose SSD (gp3) volumes using Amazon EBS Elastic Volumes without instance downtime. EBS gp3 volumes deliver baseline performance of 3,000 IOPS and 125 MiB/s included with any volume size at a 20% lower price per GB than gp2. Furthermore, gp3 allows administrators to scale IOPS and throughput independently without paying for unnecessary storage capacity.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html#gp3",
    tags: ["Amazon EBS", "EBS", "Resilience Failure"]
  },
  {
    id: "aws-saa-496",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Gateway VPC Endpoints Cost Elimination: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon VPC to eliminate substantial data processing charges incurred when private EC2 instances transfer terabytes of data daily to Amazon S3 via NAT Gateways.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Gateway VPC Endpoints for S3 and DynamoDB is being evaluated.",
    options: [
      { id: 'A', text: "Create a Gateway VPC Endpoint for Amazon S3, associate it with the private subnet route tables, and route S3 traffic directly over the AWS private network." },
      { id: 'B', text: "Assign public IP addresses to all private EC2 instances and route traffic through an Internet Gateway." },
      { id: 'C', text: "Deploy an Interface VPC Endpoint (AWS PrivateLink) for Amazon S3 in each private subnet." },
      { id: 'D', text: "Deploy a larger NAT Gateway instance type to increase data processing efficiency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Gateway VPC Endpoint for Amazon S3, associate it with the private subnet route tables, and route S3 traffic directly over the AWS private network. Gateway VPC Endpoints for Amazon S3 and Amazon DynamoDB are provided at no additional cost and incur zero data processing charges. Routing private subnet traffic through Gateway VPC Endpoints bypasses NAT Gateways completely, eliminating heavy per-GB NAT Gateway data processing fees.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html",
    tags: ["Amazon VPC", "VPC Endpoints", "Dr Failover"]
  },
  {
    id: "aws-saa-497",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Gateway VPC Endpoints Cost Elimination: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon VPC to eliminate substantial data processing charges incurred when private EC2 instances transfer terabytes of data daily to Amazon S3 via NAT Gateways.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Gateway VPC Endpoints for S3 and DynamoDB is being evaluated.",
    options: [
      { id: 'A', text: "Deploy a larger NAT Gateway instance type to increase data processing efficiency." },
      { id: 'B', text: "Create a Gateway VPC Endpoint for Amazon S3, associate it with the private subnet route tables, and route S3 traffic directly over the AWS private network." },
      { id: 'C', text: "Deploy an Interface VPC Endpoint (AWS PrivateLink) for Amazon S3 in each private subnet." },
      { id: 'D', text: "Assign public IP addresses to all private EC2 instances and route traffic through an Internet Gateway." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a Gateway VPC Endpoint for Amazon S3, associate it with the private subnet route tables, and route S3 traffic directly over the AWS private network. Gateway VPC Endpoints for Amazon S3 and Amazon DynamoDB are provided at no additional cost and incur zero data processing charges. Routing private subnet traffic through Gateway VPC Endpoints bypasses NAT Gateways completely, eliminating heavy per-GB NAT Gateway data processing fees.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html",
    tags: ["Amazon VPC", "VPC Endpoints", "High Load Scale"]
  },
  {
    id: "aws-saa-498",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Gateway VPC Endpoints Cost Elimination: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon VPC to eliminate substantial data processing charges incurred when private EC2 instances transfer terabytes of data daily to Amazon S3 via NAT Gateways.",
    question: "Which solution properly implements these mandatory security and governance controls? Gateway VPC Endpoints for S3 and DynamoDB is being evaluated.",
    options: [
      { id: 'A', text: "Create a Gateway VPC Endpoint for Amazon S3, associate it with the private subnet route tables, and route S3 traffic directly over the AWS private network." },
      { id: 'B', text: "Deploy an Interface VPC Endpoint (AWS PrivateLink) for Amazon S3 in each private subnet." },
      { id: 'C', text: "Assign public IP addresses to all private EC2 instances and route traffic through an Internet Gateway." },
      { id: 'D', text: "Deploy a larger NAT Gateway instance type to increase data processing efficiency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Gateway VPC Endpoint for Amazon S3, associate it with the private subnet route tables, and route S3 traffic directly over the AWS private network. Gateway VPC Endpoints for Amazon S3 and Amazon DynamoDB are provided at no additional cost and incur zero data processing charges. Routing private subnet traffic through Gateway VPC Endpoints bypasses NAT Gateways completely, eliminating heavy per-GB NAT Gateway data processing fees.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html",
    tags: ["Amazon VPC", "VPC Endpoints", "Security Compliance"]
  },
  {
    id: "aws-saa-499",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Gateway VPC Endpoints Cost Elimination: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon VPC to eliminate substantial data processing charges incurred when private EC2 instances transfer terabytes of data daily to Amazon S3 via NAT Gateways.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Gateway VPC Endpoints for S3 and DynamoDB is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Interface VPC Endpoint (AWS PrivateLink) for Amazon S3 in each private subnet." },
      { id: 'B', text: "Assign public IP addresses to all private EC2 instances and route traffic through an Internet Gateway." },
      { id: 'C', text: "Create a Gateway VPC Endpoint for Amazon S3, associate it with the private subnet route tables, and route S3 traffic directly over the AWS private network." },
      { id: 'D', text: "Deploy a larger NAT Gateway instance type to increase data processing efficiency." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a Gateway VPC Endpoint for Amazon S3, associate it with the private subnet route tables, and route S3 traffic directly over the AWS private network. Gateway VPC Endpoints for Amazon S3 and Amazon DynamoDB are provided at no additional cost and incur zero data processing charges. Routing private subnet traffic through Gateway VPC Endpoints bypasses NAT Gateways completely, eliminating heavy per-GB NAT Gateway data processing fees.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html",
    tags: ["Amazon VPC", "VPC Endpoints", "Hybrid Migration"]
  },
  {
    id: "aws-saa-500",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Gateway VPC Endpoints Cost Elimination: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon VPC to eliminate substantial data processing charges incurred when private EC2 instances transfer terabytes of data daily to Amazon S3 via NAT Gateways.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Gateway VPC Endpoints for S3 and DynamoDB is being evaluated.",
    options: [
      { id: 'A', text: "Create a Gateway VPC Endpoint for Amazon S3, associate it with the private subnet route tables, and route S3 traffic directly over the AWS private network." },
      { id: 'B', text: "Assign public IP addresses to all private EC2 instances and route traffic through an Internet Gateway." },
      { id: 'C', text: "Deploy an Interface VPC Endpoint (AWS PrivateLink) for Amazon S3 in each private subnet." },
      { id: 'D', text: "Deploy a larger NAT Gateway instance type to increase data processing efficiency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Gateway VPC Endpoint for Amazon S3, associate it with the private subnet route tables, and route S3 traffic directly over the AWS private network. Gateway VPC Endpoints for Amazon S3 and Amazon DynamoDB are provided at no additional cost and incur zero data processing charges. Routing private subnet traffic through Gateway VPC Endpoints bypasses NAT Gateways completely, eliminating heavy per-GB NAT Gateway data processing fees.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html",
    tags: ["Amazon VPC", "VPC Endpoints", "Resilience Failure"]
  }
];

export default AWS_SAA_QUESTIONS_20;
