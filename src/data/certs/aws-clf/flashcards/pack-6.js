export const AWS_CLF_FLASHCARDS_6 = [
  {
    id: "aws-clf-fc-126",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    front: "AWS Well-Architected Pillar: Operational Excellence",
    hint: "Perform operations as code, make frequent small reversible changes, anticipate failure.",
    back: "<strong>Operational Excellence</strong> focuses on running and monitoring systems to deliver business value and continuously improving processes. Key design principles: perform operations as code, annotate documentation, refine operations procedures frequently, and learn from all operational failures.",
    tags: ["Well-Architected", "Operational Excellence"]
  },
  {
    id: "aws-clf-fc-127",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    front: "AWS Well-Architected Pillar: Security",
    hint: "Implement a strong identity foundation, enable traceability, protect data in transit and rest.",
    back: "The <strong>Security pillar</strong> focuses on protecting information, systems, and assets while delivering business value. Key principles: automate security best practices, apply defense in depth, maintain audit trails, and keep people away from raw data.",
    tags: ["Well-Architected", "Security"]
  },
  {
    id: "aws-clf-fc-128",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    front: "AWS Well-Architected Pillar: Reliability",
    hint: "Automatically recover from failure, test recovery procedures, scale horizontally.",
    back: "The <strong>Reliability pillar</strong> ensures a workload performs its intended function correctly and consistently. Key principles: automatically recover from failures, test recovery procedures through fault injection, scale horizontally to aggregate resilience, and stop guessing capacity.",
    tags: ["Well-Architected", "Reliability"]
  },
  {
    id: "aws-clf-fc-129",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    front: "AWS Well-Architected Pillar: Performance Efficiency",
    hint: "Democratize advanced technologies, go serverless, mechanical sympathy, experiment often.",
    back: "The <strong>Performance Efficiency pillar</strong> focuses on using computing resources efficiently to meet requirements as demand changes. Key principles: use serverless architectures, democratize complex technologies (AI/databases as services), and deploy globally in minutes.",
    tags: ["Well-Architected", "Performance"]
  },
  {
    id: "aws-clf-fc-130",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    front: "AWS Well-Architected Pillar: Cost Optimization",
    hint: "Adopt a consumption model, measure overall efficiency, stop spending money on undifferentiated heavy lifting.",
    back: "The <strong>Cost Optimization pillar</strong> focuses on avoiding unnecessary spending. Key principles: implement cloud financial management, adopt consumption-based pricing, measure unit costs, and analyze expenditure with Cost Explorer.",
    tags: ["Well-Architected", "Cost Optimization"]
  },
  {
    id: "aws-clf-fc-131",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    front: "AWS Well-Architected Pillar: Sustainability",
    hint: "Understand your impact, establish sustainability goals, maximize utilization.",
    back: "The <strong>Sustainability pillar</strong> focuses on minimizing the environmental impacts of running cloud workloads. Key principles: maximize resource utilization, adopt new efficient hardware (like AWS Graviton processors), and manage data lifecycle to minimize storage footprint.",
    tags: ["Well-Architected", "Sustainability", "Graviton"]
  },
  {
    id: "aws-clf-fc-132",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "Data Encryption: In-Transit vs. At-Rest",
    hint: "TLS/SSL cryptographic network tunnels vs. encrypted block/object storage.",
    back: "<strong>Encryption in Transit</strong> protects network packets between clients and servers using TLS/SSL cryptographic protocols. <strong>Encryption at Rest</strong> protects data written to disk (EBS, S3, RDS) using symmetric keys like AES-256 managed by AWS KMS.",
    tags: ["Encryption", "Security", "KMS", "TLS"]
  },
  {
    id: "aws-clf-fc-133",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "Server-Side Encryption in Amazon S3 (SSE-S3, SSE-KMS, SSE-C)",
    hint: "AWS managed keys vs. customer KMS keys vs. client-supplied cryptographic keys.",
    back: "<strong>SSE-S3</strong> encrypts objects with keys managed entirely by Amazon S3. <strong>SSE-KMS</strong> uses AWS KMS customer managed keys, providing audit logging and key rotation. <strong>SSE-C</strong> lets the customer supply their own encryption key in the HTTPS header with zero key storage by AWS.",
    tags: ["S3", "Encryption", "KMS", "Security"]
  },
  {
    id: "aws-clf-fc-134",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "IAM Credential Report: Auditing Account Credentials",
    hint: "CSV report listing all users, password ages, access key states, and MFA status.",
    back: "The <strong>IAM Credential Report</strong> generates a complete CSV file auditing the status of credentials across all account users. It shows whether MFA is enabled, when passwords were last changed, and whether access keys are active or aged beyond security policies.",
    tags: ["IAM", "Auditing", "Compliance", "Security"]
  },
  {
    id: "aws-clf-fc-135",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "IAM Access Analyzer: Discovering External Sharing",
    hint: "Mathematical verification of resource policies that allow external public or cross-account access.",
    back: "<strong>IAM Access Analyzer</strong> uses automated reasoning to analyze resource-based policies (S3 bucket policies, KMS keys, IAM roles) and alerts administrators whenever a resource is accessible by identities outside of the AWS organization or account.",
    tags: ["IAM", "Access Analyzer", "Security"]
  },
  {
    id: "aws-clf-fc-136",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS CloudTrail Insights: Detecting Unusual API Spikes",
    hint: "Automated baseline anomaly detection for unexpected write call spikes or throttling.",
    back: "<strong>CloudTrail Insights</strong> continuously models baseline normal management event patterns in your AWS accounts. It automatically generates an Insights Event when it detects unusual anomalies\u2014such as an unexpected burst in resource deletions or API call throttling.",
    tags: ["CloudTrail", "Insights", "Auditing", "Anomaly Detection"]
  },
  {
    id: "aws-clf-fc-137",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Graviton Processors: ARM-Based Price-Performance",
    hint: "Custom 64-bit ARM Neoverse chips delivering up to 40% better price-performance.",
    back: "<strong>AWS Graviton</strong> processors are custom silicon designed by AWS using 64-bit ARM architecture. Graviton-powered instances (e.g. <code>c7g</code>, <code>m7g</code>, <code>r7g</code>) deliver up to 40% better price-performance compared to comparable x86 processors.",
    tags: ["Graviton", "Compute", "Hardware", "Cost Optimization"]
  },
  {
    id: "aws-clf-fc-138",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon EC2 Auto Scaling: Target Tracking vs. Step Scaling",
    hint: "Maintaining a specific metric level (like 50% CPU) vs. responding to tiered alarm thresholds.",
    back: "<strong>Target Tracking Scaling</strong> dynamically adjusts capacity to keep a metric at a target value (e.g. average CPU at 50%). <strong>Step Scaling</strong> applies predefined capacity increments based on the size of the CloudWatch alarm breach (e.g. +1 instance at 60%, +3 instances at 80%).",
    tags: ["Auto Scaling", "EC2", "Compute", "Reliability"]
  },
  {
    id: "aws-clf-fc-139",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Elastic Load Balancing (ELB): The Four Flavors",
    hint: "ALB (Layer 7 HTTP), NLB (Layer 4 TCP/UDP), GLB (firewall appliances), and CLB (legacy).",
    back: "<strong>ALB</strong> routes HTTP/HTTPS via path/host rules. <strong>NLB</strong> handles millions of TCP/UDP requests/sec with ultra-low latency. <strong>Gateway Load Balancer (GLB)</strong> transparently routes third-party virtual security/firewall appliances. <strong>Classic (CLB)</strong> is the legacy load balancer.",
    tags: ["ELB", "Load Balancer", "ALB", "NLB", "Networking"]
  },
  {
    id: "aws-clf-fc-140",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon S3 Transfer Acceleration",
    hint: "Accelerating global bucket uploads by routing traffic through AWS Edge Locations.",
    back: "<strong>S3 Transfer Acceleration</strong> speeds up long-distance uploads to Amazon S3 by directing client traffic to the nearest CloudFront Edge Location. From the edge, data travels over the optimized private AWS global network directly to the destination bucket.",
    tags: ["S3", "Transfer Acceleration", "CloudFront", "Networking"]
  },
  {
    id: "aws-clf-fc-141",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon S3 Cross-Region Replication (CRR) vs. Same-Region Replication (SRR)",
    hint: "Geographic DR and compliance vs. log aggregation and developer test isolation.",
    back: "<strong>CRR</strong> replicates objects asynchronously to a bucket in a different AWS Region for disaster recovery and latency reduction. <strong>SRR</strong> replicates objects within the same Region for log aggregation across multiple accounts or syncing test environments.",
    tags: ["S3", "Replication", "Disaster Recovery", "Storage"]
  },
  {
    id: "aws-clf-fc-142",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Storage Gateway: Volume, File, and Tape Gateways",
    hint: "Hybrid storage connecting on-premises servers seamlessly to cloud storage.",
    back: "<strong>Storage Gateway</strong> bridges on-premises apps with AWS storage. <strong>S3 File Gateway</strong> provides local NFS/SMB access to S3. <strong>Volume Gateway</strong> provides local iSCSI block storage backed by EBS snapshots. <strong>Tape Gateway</strong> replaces physical tape backups with Glacier.",
    tags: ["Storage Gateway", "Hybrid", "Storage", "Backup"]
  },
  {
    id: "aws-clf-fc-143",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Backup: Centralized Backup Automation",
    hint: "Policy-driven backup schedules, retention, and lifecycle across all AWS storage services.",
    back: "<strong>AWS Backup</strong> provides a centralized console to automate and configure backup policies across EBS volumes, RDS databases, DynamoDB tables, EFS file systems, and S3 buckets. It supports automated lifecycle transitions to cold storage and cross-region copies.",
    tags: ["AWS Backup", "Disaster Recovery", "Storage"]
  },
  {
    id: "aws-clf-fc-144",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS App Runner vs. AWS Elastic Beanstalk",
    hint: "Container-centric automated web service runner vs. full VM-level PaaS platform.",
    back: "<strong>AWS App Runner</strong> is a fully managed container service that automatically builds, deploys, scales, and load-balances containerized web apps directly from a Git repo or container registry with zero infrastructure management. Beanstalk exposes underlying EC2 instances.",
    tags: ["App Runner", "Containers", "Serverless", "Beanstalk"]
  },
  {
    id: "aws-clf-fc-145",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon API Gateway: Managed API Front Door",
    hint: "Create, publish, maintain, monitor, and secure REST, HTTP, and WebSocket APIs at any scale.",
    back: "<strong>Amazon API Gateway</strong> acts as a secure front door for applications to access backend services (like Lambda, ECS, or external HTTP endpoints). It natively manages traffic throttling, API keys, CORS, authorization, and staging versions.",
    tags: ["API Gateway", "Serverless", "Networking"]
  },
  {
    id: "aws-clf-fc-146",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS X-Ray: Distributed Tracing for Microservices",
    hint: "Trace requests end-to-end across distributed services to identify performance bottlenecks.",
    back: "<strong>AWS X-Ray</strong> collects data about requests that an application serves, producing an interactive service map that visualizes calls across Lambda, API Gateway, DynamoDB, and external APIs to isolate latency bottlenecks and root cause failures.",
    tags: ["X-Ray", "Distributed Tracing", "Monitoring", "Observability"]
  },
  {
    id: "aws-clf-fc-147",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Simple Email Service (Amazon SES)",
    hint: "Cost-effective transactional, marketing, and bulk email sending platform.",
    back: "<strong>Amazon SES</strong> is a reliable, cloud-based email sending service designed to help digital marketers and application developers send transactional notifications, order confirmations, and bulk marketing newsletters with high deliverability.",
    tags: ["SES", "Email", "Messaging"]
  },
  {
    id: "aws-clf-fc-148",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Connect: Cloud-Based Contact Center",
    hint: "Self-service, omnichannel cloud contact center with built-in AI speech analytics.",
    back: "<strong>Amazon Connect</strong> enables businesses to set up an omnichannel cloud customer contact center in minutes. It features voice and chat channels, interactive voice response (IVR), dynamic skills-based routing, and AI-powered speech analytics.",
    tags: ["Connect", "Customer Service", "Contact Center"]
  },
  {
    id: "aws-clf-fc-149",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon WorkSpaces: Desktop-as-a-Service (DaaS)",
    hint: "Secure, fully managed cloud desktops running Windows or Linux accessible from any device.",
    back: "<strong>Amazon WorkSpaces</strong> delivers persistent cloud desktops to remote end users. Users can securely access their corporate desktop applications and files from laptops, tablets, or thin clients while all company data remains secured inside the AWS cloud.",
    tags: ["WorkSpaces", "DaaS", "End User Computing"]
  },
  {
    id: "aws-clf-fc-150",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon AppStream 2.0: Non-Persistent Application Streaming",
    hint: "Stream desktop applications securely to any web browser without managing client installs.",
    back: "<strong>Amazon AppStream 2.0</strong> streams desktop applications (like CAD, engineering software, or legacy desktop apps) from AWS directly into an HTML5 web browser session on any device without users needing to install the software locally.",
    tags: ["AppStream", "Streaming", "End User Computing"]
  }
];

export default AWS_CLF_FLASHCARDS_6;
