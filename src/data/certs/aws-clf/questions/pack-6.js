export const AWS_CLF_QUESTIONS_6 = [
  {
    id: "aws-clf-126",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon DocumentDB Managed MongoDB-Compatible Database",
    scenario: "A software team migrating a document-oriented JSON application from on-premises MongoDB to AWS requires a fully managed, scalable, and highly available document database service.",
    question: "Which AWS database service provides native compatibility with MongoDB workloads and JSON document data?",
    options: [
      { id: 'A', text: "Amazon Neptune" },
      { id: 'B', text: "Amazon DocumentDB (with MongoDB compatibility)" },
      { id: 'C', text: "Amazon RDS for PostgreSQL" },
      { id: 'D', text: "Amazon DynamoDB" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon DocumentDB (with MongoDB compatibility) is a fully managed native JSON document database service that supports MongoDB workloads, decoupling compute and storage with 6-way multi-AZ replication.",
    referenceUrl: "https://docs.aws.amazon.com/documentdb/latest/developerguide/what-is.html",
    tags: ["DocumentDB", "MongoDB", "NoSQL", "Databases"]
  },
  {
    id: "aws-clf-127",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Neptune Graph Database Service",
    scenario: "A fraud detection and social network analysis application requires querying billions of complex relationships and interconnected data points using Apache TinkerPop Gremlin and SPARQL.",
    question: "Which AWS managed database service is purpose-built for highly connected graph datasets and relationship queries?",
    options: [
      { id: 'A', text: "Amazon Redshift" },
      { id: 'B', text: "Amazon DynamoDB" },
      { id: 'C', text: "Amazon Neptune" },
      { id: 'D', text: "Amazon DocumentDB" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon Neptune is a fast, reliable, fully managed graph database service built for applications that work with highly connected datasets (such as social networks, fraud graphs, and knowledge graphs).",
    referenceUrl: "https://docs.aws.amazon.com/neptune/latest/userguide/intro.html",
    tags: ["Neptune", "Graph Database", "Databases"]
  },
  {
    id: "aws-clf-128",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Quantum Ledger Database (Amazon QLDB)",
    scenario: "A supply chain organization requires a centralized, transparent, immutable, and cryptographically verifiable transaction log that records every state change with no ability to delete or alter past history.",
    question: "Which AWS ledger database provides a cryptographically verifiable transaction log owned by a central authority?",
    options: [
      { id: 'A', text: "Amazon DynamoDB" },
      { id: 'B', text: "Amazon Quantum Ledger Database (Amazon QLDB)" },
      { id: 'C', text: "Amazon Managed Blockchain" },
      { id: 'D', text: "AWS CloudTrail" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon QLDB is a fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log owned by a central trusted authority.",
    referenceUrl: "https://docs.aws.amazon.com/qldb/latest/developerguide/what-is.html",
    tags: ["QLDB", "Ledger", "Immutable", "Databases"]
  },
  {
    id: "aws-clf-129",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Identity and Access Management (IAM) Password Policies",
    scenario: "A security compliance policy requires that all IAM user passwords must be at least 14 characters long, contain uppercase letters and numbers, and expire every 90 days.",
    question: "Which IAM feature allows setting account-wide complexity and expiration rules for user passwords?",
    options: [
      { id: 'A', text: "Service Control Policies (SCPs)" },
      { id: 'B', text: "IAM Account Password Policy" },
      { id: 'C', text: "AWS Secrets Manager" },
      { id: 'D', text: "AWS Config" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An IAM Account Password Policy defines password complexity requirements, minimum length, expiration frequency, and reuse prevention for all IAM users within an AWS account.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html",
    tags: ["IAM", "Password Policy", "Security"]
  },
  {
    id: "aws-clf-130",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS IAM Permission Boundaries",
    scenario: "An enterprise allows developer team leads to create IAM users and roles for their developers, but wants to ensure that newly created IAM users cannot grant themselves administrator privileges.",
    question: "Which advanced IAM feature sets the maximum permissions that an IAM identity-based policy can grant to a user or role?",
    options: [
      { id: 'A', text: "Service Control Policies" },
      { id: 'B', text: "IAM Permission Boundaries" },
      { id: 'C', text: "IAM User Groups" },
      { id: 'D', text: "Session Policies" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A Permission Boundary is an advanced IAM feature that uses a managed policy to set the maximum permissions that an identity-based policy can grant to an IAM entity, preventing privilege escalation.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["IAM", "Permission Boundaries", "Security", "Governance"]
  },
  {
    id: "aws-clf-131",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "Fault Tolerance vs High Availability",
    scenario: "A mission-critical transaction processing system is designed so that if any individual component fails, the system continues operating with zero downtime and zero degradation in service.",
    question: "Which architectural characteristic describes a system's ability to continue operating without interruption despite the failure of one or more components?",
    options: [
      { id: 'A', text: "Elasticity" },
      { id: 'B', text: "Fault Tolerance" },
      { id: 'C', text: "Scalability" },
      { id: 'D', text: "Agility" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Fault Tolerance is the ability of a system to continue operating properly without interruption in the event of failure of one or more of its components, usually achieved through complete active redundancy.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/real-time-communication-on-aws/high-availability-and-fault-tolerance.html",
    tags: ["Fault Tolerance", "Resilience", "Cloud Concepts"]
  },
  {
    id: "aws-clf-132",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "AWS Cloud Adoption Framework: Platform Perspective",
    scenario: "A cloud platform engineering team is establishing cloud architecture patterns, CI/CD provisioning pipelines, and landing zone standards.",
    question: "Which perspective of the AWS Cloud Adoption Framework (AWS CAF) focuses on delivering cloud infrastructure solutions, migrating workloads, and modernizing platforms?",
    options: [
      { id: 'A', text: "Platform Perspective" },
      { id: 'B', text: "Security Perspective" },
      { id: 'C', text: "People Perspective" },
      { id: 'D', text: "Business Perspective" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Platform Perspective of the AWS CAF provides guidance on principles and patterns for delivering scalable cloud architecture, cloud engineering, data engineering, and modern application development.",
    referenceUrl: "https://aws.amazon.com/professional-services/CAF/",
    tags: ["CAF", "Platform Perspective", "Architecture"]
  },
  {
    id: "aws-clf-133",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Directory Service for Microsoft Active Directory",
    scenario: "An enterprise needs to integrate AWS workloads (such as Amazon EC2 instances and Amazon WorkSpaces) with their existing on-premises Microsoft Active Directory domain.",
    question: "Which AWS service provides managed Microsoft Active Directory in the AWS Cloud?",
    options: [
      { id: 'A', text: "AWS IAM Identity Center" },
      { id: 'B', text: "Amazon Cognito" },
      { id: 'C', text: "AWS Directory Service" },
      { id: 'D', text: "AWS Secrets Manager" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Directory Service (also known as AWS Managed Microsoft AD) enables your directory-aware workloads and AWS resources to use managed Active Directory in the AWS Cloud.",
    referenceUrl: "https://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html",
    tags: ["Directory Service", "Active Directory", "Identity", "Security"]
  },
  {
    id: "aws-clf-134",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Elastic Disaster Recovery (AWS DRS)",
    scenario: "An enterprise wants a cost-effective cloud-based disaster recovery solution that continuously replicates physical and virtual on-premises servers into AWS EBS volumes with minimal compute running during standby.",
    question: "Which AWS service provides automated block-level continuous replication of on-premises servers for rapid disaster recovery into AWS?",
    options: [
      { id: 'A', text: "AWS DataSync" },
      { id: 'B', text: "AWS Backup" },
      { id: 'C', text: "AWS Snowball Edge" },
      { id: 'D', text: "AWS Elastic Disaster Recovery (AWS DRS)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Elastic Disaster Recovery (AWS DRS) minimizes downtime and data loss by providing fast, reliable recovery of physical, virtual, and cloud-based servers into AWS at low cost.",
    referenceUrl: "https://docs.aws.amazon.com/drs/latest/userguide/what-is-drs.html",
    tags: ["DRS", "Disaster Recovery", "Business Continuity"]
  },
  {
    id: "aws-clf-135",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Backup Centralized Data Protection",
    scenario: "An operations team needs a centralized backup service to automate and manage policy-based backups across Amazon EBS, Amazon RDS, Amazon DynamoDB, and Amazon EFS.",
    question: "Which AWS managed service provides centralized policy-based backup automation across multiple AWS services?",
    options: [
      { id: 'A', text: "AWS DataSync" },
      { id: 'B', text: "AWS Backup" },
      { id: 'C', text: "Amazon S3 Lifecycle" },
      { id: 'D', text: "AWS Storage Gateway" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Backup is a cost-effective, fully managed, policy-based service that simplifies data protection at scale across AWS services and hybrid workloads, supporting compliance auditing.",
    referenceUrl: "https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html",
    tags: ["AWS Backup", "Backups", "Data Protection", "Storage"]
  },
  {
    id: "aws-clf-136",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Storage Gateway Types: Volume, File, and Tape Gateway",
    scenario: "An enterprise wants to replace physical tape backup automation libraries with virtual tapes in AWS without changing existing on-premises backup software (like Veeam or Commvault).",
    question: "Which AWS Storage Gateway configuration emulates an iSCSI-based physical Virtual Tape Library (VTL) backed by S3 and S3 Glacier?",
    options: [
      { id: 'A', text: "Amazon S3 File Gateway" },
      { id: 'B', text: "Amazon FSx File Gateway" },
      { id: 'C', text: "Tape Gateway" },
      { id: 'D', text: "Volume Gateway" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A Tape Gateway is a cloud-based virtual tape storage solution that lets you seamlessly replace physical tapes on-premises with virtual tapes in AWS without altering existing backup workflows.",
    referenceUrl: "https://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html#tape-gateway",
    tags: ["Storage Gateway", "Tape Gateway", "Hybrid Storage", "Archival"]
  },
  {
    id: "aws-clf-137",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 File Gateway for On-Premises File Sharing",
    scenario: "An on-premises branch office needs local SMB/NFS file share access for users, with local caching for low latency, while storing all files durable in an Amazon S3 bucket.",
    question: "Which AWS Storage Gateway type provides seamless on-premises file share access backed directly by Amazon S3?",
    options: [
      { id: 'A', text: "Amazon S3 File Gateway" },
      { id: 'B', text: "Volume Gateway" },
      { id: 'C', text: "Tape Gateway" },
      { id: 'D', text: "AWS DataSync" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon S3 File Gateway presents a file interface that enables you to store files as objects in Amazon S3 using the industry-standard NFS and SMB protocols, with a local cache for fast access.",
    referenceUrl: "https://docs.aws.amazon.com/filegateway/latest/filecontent/what-is-file-s3.html",
    tags: ["Storage Gateway", "File Gateway", "S3", "Hybrid Storage"]
  },
  {
    id: "aws-clf-138",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS DataSync for High-Speed Online Data Transfer",
    scenario: "An organization needs to transfer 50 TB of research files from an on-premises Network Attached Storage (NAS) array to Amazon EFS over an AWS Direct Connect connection with automated bandwidth throttling and data integrity verification.",
    question: "Which AWS service automates and accelerates online data transfers between on-premises storage and AWS storage services?",
    options: [
      { id: 'A', text: "AWS DataSync" },
      { id: 'B', text: "AWS Snowball Edge" },
      { id: 'C', text: "AWS Storage Gateway" },
      { id: 'D', text: "AWS Transfer Family" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS DataSync is an online data transfer and discovery service that simplifies, automates, and accelerates moving data between on-premises storage systems and AWS storage services up to 10x faster.",
    referenceUrl: "https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html",
    tags: ["DataSync", "Data Transfer", "Migration", "Storage"]
  },
  {
    id: "aws-clf-139",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Transfer Family for SFTP, FTPS, and FTP",
    scenario: "A financial organization needs to allow business partners to securely upload invoices via SFTP (SSH File Transfer Protocol) directly into Amazon S3 buckets without managing SFTP server infrastructure.",
    question: "Which fully managed AWS service provides secure SFTP, FTPS, and FTP endpoints backed by Amazon S3 and Amazon EFS?",
    options: [
      { id: 'A', text: "Amazon S3 Transfer Acceleration" },
      { id: 'B', text: "AWS DataSync" },
      { id: 'C', text: "AWS Storage Gateway" },
      { id: 'D', text: "AWS Transfer Family" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Transfer Family is a fully managed service that enables the transfer of files directly into and out of Amazon S3 or Amazon EFS using SFTP, FTPS, and FTP protocols.",
    referenceUrl: "https://docs.aws.amazon.com/transfer/latest/userguide/what-is-aws-transfer-family.html",
    tags: ["Transfer Family", "SFTP", "S3", "Integration"]
  },
  {
    id: "aws-clf-140",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Migration Hub for Tracking Multi-Tool Migrations",
    scenario: "A cloud program office is migrating 200 servers using AWS Application Migration Service and several databases using AWS DMS and needs a single dashboard to track progress.",
    question: "Which AWS service provides a single place to discover servers and track the progress of migrations across multiple AWS and partner tools?",
    options: [
      { id: 'A', text: "AWS Application Discovery Service" },
      { id: 'B', text: "AWS Migration Hub" },
      { id: 'C', text: "AWS Control Tower" },
      { id: 'D', text: "AWS Systems Manager" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Migration Hub provides a single location to track the progress of application migrations across multiple AWS tools and partner solutions, giving centralized visibility.",
    referenceUrl: "https://docs.aws.amazon.com/migrationhub/latest/ug/whatis.html",
    tags: ["Migration Hub", "Migration", "Tracking"]
  },
  {
    id: "aws-clf-141",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Application Discovery Service for On-Premises Server Profiling",
    scenario: "Before migrating an enterprise data centre to AWS, an architect needs to automatically discover server hardware configurations, CPU/RAM utilization, and network communication dependencies.",
    question: "Which AWS service collects configuration, usage, and behavior data from on-premises servers to plan cloud migrations?",
    options: [
      { id: 'A', text: "AWS Config" },
      { id: 'B', text: "AWS Application Discovery Service" },
      { id: 'C', text: "Amazon Inspector" },
      { id: 'D', text: "AWS Application Migration Service" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Application Discovery Service helps enterprise customers plan migration projects by gathering information about their on-premises data centres (server utilization and network dependencies).",
    referenceUrl: "https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html",
    tags: ["Application Discovery Service", "Migration", "Planning"]
  },
  {
    id: "aws-clf-142",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Application Migration Service (AWS MGN)",
    scenario: "A company wants to lift-and-shift 50 physical and VMware Windows and Linux virtual servers into Amazon EC2 with minimal cutover downtime.",
    question: "Which primary AWS service is recommended for lift-and-shift server migration to AWS?",
    options: [
      { id: 'A', text: "AWS Application Migration Service (AWS MGN)" },
      { id: 'B', text: "AWS Elastic Beanstalk" },
      { id: 'C', text: "AWS Database Migration Service (DMS)" },
      { id: 'D', text: "AWS DataSync" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Application Migration Service (AWS MGN) is the primary migration service recommended for lift-and-shift migrations to AWS, automatically replicating physical, virtual, and cloud servers into AWS.",
    referenceUrl: "https://docs.aws.amazon.com/mgn/latest/ug/what-is-application-migration-service.html",
    tags: ["AWS MGN", "Migration", "Lift-and-Shift", "EC2"]
  },
  {
    id: "aws-clf-143",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Database Migration Service (AWS DMS) and Schema Conversion Tool (SCT)",
    scenario: "A team needs to migrate an on-premises Oracle database to Amazon Aurora PostgreSQL. Because the database engines differ, the schema must be converted before migrating data.",
    question: "Which combination of AWS tools converts heterogeneous database schemas and performs ongoing replication with minimal downtime?",
    options: [
      { id: 'A', text: "AWS Snowball Edge with Amazon RDS" },
      { id: 'B', text: "AWS Schema Conversion Tool (SCT) with AWS Database Migration Service (AWS DMS)" },
      { id: 'C', text: "AWS Application Migration Service (MGN) alone" },
      { id: 'D', text: "AWS DataSync with Amazon S3" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS SCT converts heterogeneous database schemas (e.g. Oracle to PostgreSQL), while AWS DMS migrates data and performs Change Data Capture (CDC) to keep the target database in sync with minimal downtime.",
    referenceUrl: "https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html",
    tags: ["DMS", "SCT", "Database Migration", "Databases"]
  },
  {
    id: "aws-clf-144",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Cost Categories for Custom Cost Aggregation",
    scenario: "A FinOps manager needs to group AWS costs across accounts and tags into customized business dimensions (such as `CostCenter`, `Environment`, and `Project`) to build clean executive cost reports.",
    question: "Which feature within AWS Billing and Cost Management allows you to group cost and usage information into custom categories?",
    options: [
      { id: 'A', text: "AWS Cost Categories" },
      { id: 'B', text: "AWS Budgets" },
      { id: 'C', text: "AWS Compute Optimizer" },
      { id: 'D', text: "AWS Cost Allocation Tags" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Cost Categories is a feature in AWS Cost Management that enables you to group cost and usage information into meaningful categories based on account, tag, service, and charge type rules.",
    referenceUrl: "https://docs.aws.amazon.com/cost-management/latest/userguide/control-costs-categories.html",
    tags: ["Cost Categories", "FinOps", "Billing", "Cost Management"]
  },
  {
    id: "aws-clf-145",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Enterprise On-Ramp Support Plan",
    scenario: "A mid-sized company with production workloads needs designated Technical Account Manager (TAM) access, 30-minute response time for production down cases, and consultative architecture guidance at a lower cost than full Enterprise Support.",
    question: "Which AWS Support Plan bridges the gap between Business Support and Enterprise Support with a 30-minute response SLA?",
    options: [
      { id: 'A', text: "Basic Support" },
      { id: 'B', text: "Business Support" },
      { id: 'C', text: "Developer Support" },
      { id: 'D', text: "Enterprise On-Ramp Support" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enterprise On-Ramp is an AWS Support plan tailored for customers migrating production workloads, providing a pool of Technical Account Managers (TAMs) and a 30-minute response time SLA for critical issues.",
    referenceUrl: "https://aws.amazon.com/premiumsupport/plans/enterprise-on-ramp/",
    tags: ["Support Plans", "Enterprise On-Ramp", "TAM", "Billing"]
  },
  {
    id: "aws-clf-146",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Amazon GuardDuty Malware Protection for EBS Volumes",
    scenario: "When suspicious Trojan activity is detected on an EC2 instance, a security tool automatically takes a snapshot of the attached EBS volume and scans for malware without installing agents on the instance.",
    question: "Which Amazon GuardDuty feature provides agentless malware detection for Amazon EBS volumes attached to EC2 instances?",
    options: [
      { id: 'A', text: "GuardDuty Malware Protection" },
      { id: 'B', text: "Amazon Inspector" },
      { id: 'C', text: "AWS Shield Advanced" },
      { id: 'D', text: "AWS WAF" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "GuardDuty Malware Protection initiates an agentless scan of Amazon EBS volumes attached to EC2 instances or container workloads when suspicious behavior or malware-related findings are detected.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/malware-protection.html",
    tags: ["GuardDuty", "Malware Protection", "EBS", "Security"]
  },
  {
    id: "aws-clf-147",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "AWS Well-Architected Tool for Workload Reviews",
    scenario: "A solutions architect wants to review a new application architecture against the official AWS Well-Architected best practices and obtain a milestone report highlighting high-risk issues (HRIs).",
    question: "Which AWS service provides an interactive questionnaire tool to review workloads against Well-Architected Framework pillars?",
    options: [
      { id: 'A', text: "AWS Trusted Advisor" },
      { id: 'B', text: "AWS Security Hub" },
      { id: 'C', text: "AWS Compute Optimizer" },
      { id: 'D', text: "AWS Well-Architected Tool" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The AWS Well-Architected Tool provides a consistent process for evaluating your architectures against AWS best practices, producing an action plan with recommendations to remediate high-risk issues.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html",
    tags: ["Well-Architected Tool", "Architecture", "Best Practices"]
  },
  {
    id: "aws-clf-148",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS CodeCommit, CodeBuild, CodeDeploy, and CodePipeline (CI/CD Suite)",
    scenario: "A development organization wants a fully managed continuous integration and continuous delivery (CI/CD) service that models, visualizes, and automates build, test, and release stages.",
    question: "Which AWS service orchestrates and automates software release stages across source, build, and deployment tools?",
    options: [
      { id: 'A', text: "AWS CodeDeploy" },
      { id: 'B', text: "AWS CodeBuild" },
      { id: 'C', text: "AWS CodeCommit" },
      { id: 'D', text: "AWS CodePipeline" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS CodePipeline is a fully managed continuous delivery service that helps you automate your release pipelines for fast and reliable application and infrastructure updates.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["CodePipeline", "CI/CD", "DevOps", "Automation"]
  },
  {
    id: "aws-clf-149",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS CodeBuild Serverless Build and Test Service",
    scenario: "A software team wants a build service that compiles source code, runs unit tests, and produces deployable Docker container images, scaling on-demand without managing build server instances.",
    question: "Which fully managed serverless build service compiles code and runs unit test suites with pay-per-minute billing?",
    options: [
      { id: 'A', text: "AWS CodePipeline" },
      { id: 'B', text: "AWS CodeCommit" },
      { id: 'C', text: "AWS CodeDeploy" },
      { id: 'D', text: "AWS CodeBuild" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages ready for deployment, scaling elastically without build server management.",
    referenceUrl: "https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html",
    tags: ["CodeBuild", "CI/CD", "Build", "DevOps"]
  },
  {
    id: "aws-clf-150",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS CodeDeploy Automated Deployment Service",
    scenario: "An operations team needs to automate blue/green and rolling software deployments to Amazon EC2 instances, AWS Fargate tasks, and AWS Lambda functions with automatic rollback on error.",
    question: "Which AWS deployment service automates software deployments across compute platforms with zero downtime deployment strategies?",
    options: [
      { id: 'A', text: "AWS CloudFormation" },
      { id: 'B', text: "AWS Elastic Beanstalk" },
      { id: 'C', text: "AWS CodeDeploy" },
      { id: 'D', text: "AWS CodeBuild" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS CodeDeploy is a fully managed deployment service that automates software deployments to a variety of compute services such as Amazon EC2, AWS Fargate, AWS Lambda, and on-premises servers.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html",
    tags: ["CodeDeploy", "Deployments", "CI/CD", "DevOps"]
  }
];

export default AWS_CLF_QUESTIONS_6;
