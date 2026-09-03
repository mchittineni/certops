export const AWS_CLF_FLASHCARDS_4 = [
  {
    id: "aws-clf-fc-76",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon DynamoDB: Fully Managed NoSQL Database",
    hint: "Single-digit millisecond latency at any scale, serverless key-value / document store.",
    back: "<strong>Amazon DynamoDB</strong> is a serverless NoSQL database delivering consistent sub-10ms performance at petabyte scale. It supports key-value and document data models, automatic multi-AZ data replication, and either on-demand pay-per-request or provisioned capacity billing.",
    tags: ["DynamoDB", "NoSQL", "Serverless", "Databases"]
  },
  {
    id: "aws-clf-fc-77",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon DynamoDB Accelerator (DAX)",
    hint: "In-memory microsecond caching tier purpose-built for DynamoDB tables.",
    back: "<strong>DynamoDB Accelerator (DAX)</strong> is a fully managed in-memory cache that reduces DynamoDB response times from single-digit milliseconds down to <strong>microseconds</strong> for read-intensive workloads without requiring developers to manage cache invalidation logic.",
    tags: ["DynamoDB", "DAX", "Caching", "Performance"]
  },
  {
    id: "aws-clf-fc-78",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon ElastiCache: Redis vs. Memcached",
    hint: "Advanced data structures & persistence vs. simple multithreaded caching.",
    back: "<strong>Redis</strong> supports complex data structures (sets, sorted sets, hashes), pub/sub, replication, backup snapshots, and Multi-AZ failover. <strong>Memcached</strong> is a simple, multithreaded, pure in-memory key-value cache designed for horizontal scaling of simple object caching.",
    tags: ["ElastiCache", "Redis", "Memcached", "Caching"]
  },
  {
    id: "aws-clf-fc-79",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Redshift: Petabyte-Scale Cloud Data Warehousing",
    hint: "Columnar storage and Massively Parallel Processing (MPP) for SQL analytics.",
    back: "<strong>Amazon Redshift</strong> is a fully managed cloud data warehouse using columnar storage and MPP architecture to execute complex analytical queries against petabytes of structured and semi-structured data, integrating directly with S3 data lakes via Redshift Spectrum.",
    tags: ["Redshift", "Data Warehouse", "Analytics"]
  },
  {
    id: "aws-clf-fc-80",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon DocumentDB vs. Amazon Neptune",
    hint: "Managed MongoDB-compatible JSON store vs. highly connected graph database.",
    back: "<strong>Amazon DocumentDB</strong> provides a scalable, managed document database compatible with MongoDB workloads. <strong>Amazon Neptune</strong> is a fast, reliable graph database built for social networks, fraud detection, and recommendation engines supporting Property Graph (Gremlin) and W3C RDF (SPARQL).",
    tags: ["Databases", "DocumentDB", "Neptune", "NoSQL"]
  },
  {
    id: "aws-clf-fc-81",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon VPC (Virtual Private Cloud): Subnet Isolation",
    hint: "Public subnets with internet gateways vs. private subnets with NAT gateways.",
    back: "A <strong>Public Subnet</strong> has a route table entry pointing directly to an <strong>Internet Gateway (IGW)</strong>, allowing resources with public IPs to communicate with the internet. A <strong>Private Subnet</strong> routes outbound internet traffic through a <strong>NAT Gateway</strong> located in a public subnet.",
    tags: ["VPC", "Networking", "Subnets", "NAT Gateway"]
  },
  {
    id: "aws-clf-fc-82",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "NAT Gateway vs. Internet Gateway (IGW)",
    hint: "Outbound-only internet egress for private resources vs. bidirectional public internet gateway.",
    back: "An <strong>Internet Gateway (IGW)</strong> attaches to a VPC to enable two-way public internet communication. A <strong>NAT Gateway</strong> enables instances in private subnets to initiate outbound connections to the internet (for software updates) while preventing external internet hosts from initiating inbound connections.",
    tags: ["VPC", "NAT Gateway", "Internet Gateway", "Networking"]
  },
  {
    id: "aws-clf-fc-83",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "VPC Peering vs. AWS Transit Gateway",
    hint: "1-to-1 non-transitive mesh connection vs. centralized hub-and-spoke router.",
    back: "<strong>VPC Peering</strong> connects two VPCs directly; it is non-transitive, meaning connecting A-B and B-C does not allow A to talk to C. <strong>AWS Transit Gateway</strong> acts as a cloud router connecting thousands of VPCs and on-premises networks in a scalable hub-and-spoke topology.",
    tags: ["VPC Peering", "Transit Gateway", "Networking"]
  },
  {
    id: "aws-clf-fc-84",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "VPC Endpoints: Gateway Endpoints vs. Interface Endpoints (PrivateLink)",
    hint: "Free route table target for S3/DynamoDB vs. private IP ENIs for all services.",
    back: "<strong>Gateway Endpoints</strong> are route table targets supporting only Amazon S3 and DynamoDB at zero cost. <strong>Interface Endpoints (PrivateLink)</strong> create an Elastic Network Interface (ENI) with a private IP in your VPC subnet, supporting almost all AWS services and custom applications for an hourly fee.",
    tags: ["VPC Endpoints", "PrivateLink", "Security", "Networking"]
  },
  {
    id: "aws-clf-fc-85",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Direct Connect vs. AWS Site-to-Site VPN",
    hint: "Dedicated physical fiber connection vs. encrypted IPsec tunnel over the public internet.",
    back: "<strong>AWS Direct Connect</strong> links on-premises datacenters to AWS over a dedicated private physical fiber cross-connect, ensuring consistent latency and lower data egress costs. <strong>Site-to-Site VPN</strong> establishes an encrypted IPsec tunnel quickly over the public internet.",
    tags: ["Direct Connect", "VPN", "Hybrid", "Networking"]
  },
  {
    id: "aws-clf-fc-86",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Route 53: Core Routing Policies",
    hint: "Simple, Weighted, Latency-based, Failover, Geolocation, and Multivalue routing.",
    back: "Route 53 supports: <strong>Simple</strong> (single resource), <strong>Weighted</strong> (split traffic by percentage for A/B tests), <strong>Latency</strong> (lowest network latency to user), <strong>Failover</strong> (active-passive DR), <strong>Geolocation</strong> (routing based on user country/state), and <strong>Multivalue</strong> (DNS load balancing with health checks).",
    tags: ["Route 53", "DNS", "Networking"]
  },
  {
    id: "aws-clf-fc-87",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon CloudFront: Global Content Delivery Network (CDN)",
    hint: "Caching static and dynamic web content at Edge Locations worldwide.",
    back: "<strong>Amazon CloudFront</strong> delivers web pages, videos, images, and APIs to global viewers with low latency and high transfer speeds by caching content at 400+ Points of Presence (Edge Locations), integrated with AWS Shield and WAF for DDoS defense.",
    tags: ["CloudFront", "CDN", "Edge", "Performance"]
  },
  {
    id: "aws-clf-fc-88",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Global Accelerator: Anycast IP Routing",
    hint: "Two static anycast IPs routing TCP/UDP traffic across the private AWS backbone.",
    back: "<strong>AWS Global Accelerator</strong> provides two static Anycast public IP addresses that onboard customer TCP/UDP traffic at the edge location closest to the user, routing it across the congestion-free AWS global private fiber network directly to regional ALBs, NLBs, or EC2 instances.",
    tags: ["Global Accelerator", "Anycast", "Networking", "Performance"]
  },
  {
    id: "aws-clf-fc-89",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon SQS: Standard vs. FIFO Queues",
    hint: "At-least-once delivery with best-effort ordering vs. strictly once delivery with ordered processing.",
    back: "<strong>Standard Queues</strong> offer near-unlimited throughput with at-least-once delivery (duplicates possible) and best-effort ordering. <strong>FIFO Queues</strong> guarantee that messages are processed exactly once and in the strict order sent, capped at 300 msgs/sec (or 3,000 with batching).",
    tags: ["SQS", "Queues", "Messaging", "Decoupling"]
  },
  {
    id: "aws-clf-fc-90",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon SNS: Publish/Subscribe Notification Service",
    hint: "One-to-many push messaging across email, SMS, SQS queues, and HTTP endpoints.",
    back: "<strong>Amazon SNS (Simple Notification Service)</strong> is a managed pub/sub messaging service. Publishers send messages to an SNS topic, which instantly fans out notifications asynchronously to multiple subscribers\u2014including SQS queues, Lambda functions, HTTP webhooks, SMS, and email.",
    tags: ["SNS", "PubSub", "Messaging", "Fanout"]
  },
  {
    id: "aws-clf-fc-91",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon EventBridge: Serverless Event Bus",
    hint: "Event-driven architecture routing SaaS events and AWS services via rules.",
    back: "<strong>Amazon EventBridge</strong> connects applications using event data from custom applications, integrated SaaS partners (Datadog, Zendesk), and AWS services. It filters and routes events based on JSON schema rules to targets like Lambda, Step Functions, or SQS queues.",
    tags: ["EventBridge", "Event-Driven", "Serverless", "Integration"]
  },
  {
    id: "aws-clf-fc-92",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Step Functions: Visual State Machine Workflow Orchestration",
    hint: "Coordinate distributed serverless microservices with automated retries and error handling.",
    back: "<strong>AWS Step Functions</strong> lets you coordinate multiple AWS services (Lambda, ECS, DynamoDB) into serverless visual workflows. It tracks workflow state, handles conditional branching, manages retries, and executes compensation logic automatically when errors occur.",
    tags: ["Step Functions", "Microservices", "Orchestration", "Serverless"]
  },
  {
    id: "aws-clf-fc-93",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS CloudFormation: Infrastructure as Code (IaC)",
    hint: "Declarative JSON/YAML templates defining and provisioning AWS resources.",
    back: "<strong>AWS CloudFormation</strong> enables you to model your entire infrastructure as code in JSON or YAML templates. CloudFormation provisions and configures resources predictably in automated <strong>Stacks</strong> and previews infrastructure modifications using <strong>Change Sets</strong>.",
    tags: ["CloudFormation", "IaC", "DevOps"]
  },
  {
    id: "aws-clf-fc-94",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Cloud Development Kit (AWS CDK)",
    hint: "Authoring infrastructure as code using familiar programming languages.",
    back: "<strong>AWS CDK</strong> is an open-source software framework that lets developers define cloud application resources using languages like TypeScript, Python, Java, or C#. CDK synthesizes code into standard AWS CloudFormation templates for deterministic deployment.",
    tags: ["CDK", "IaC", "DevOps"]
  },
  {
    id: "aws-clf-fc-95",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS CloudTrail: API Auditing and Governance",
    hint: "Recording every API call and user action across your entire AWS account.",
    back: "<strong>AWS CloudTrail</strong> logs, continuously monitors, and retains account activity related to actions across your AWS infrastructure. CloudTrail captures the caller identity, timestamp, source IP, and requested parameters, providing essential compliance and security audit trails.",
    tags: ["CloudTrail", "Auditing", "Governance", "Security"]
  },
  {
    id: "aws-clf-fc-96",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon CloudWatch: Metrics, Logs, and Alarms",
    hint: "Operational telemetry monitoring performance, CPU, memory, and application logs.",
    back: "<strong>Amazon CloudWatch</strong> collects metrics, logs, and traces from AWS resources and applications. It triggers automated actions via <strong>CloudWatch Alarms</strong> (e.g. initiating EC2 Auto Scaling or sending SNS alerts) when performance thresholds are breached.",
    tags: ["CloudWatch", "Monitoring", "Metrics", "Alarms"]
  },
  {
    id: "aws-clf-fc-97",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "CloudWatch vs. CloudTrail: When to Use Which?",
    hint: "Performance and operational health vs. security and API call history.",
    back: "<strong>CloudWatch</strong> answers: <em>'How are my resources performing?'</em> (CPU utilization, disk IOPS, log errors, alarm states). <strong>CloudTrail</strong> answers: <em>'Who did what, from where, and when?'</em> (which IAM user called <code>RunInstances</code> or deleted an S3 bucket).",
    tags: ["CloudWatch", "CloudTrail", "Governance", "Monitoring"]
  },
  {
    id: "aws-clf-fc-98",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Snow Family: Physical Edge and Data Migration Devices",
    hint: "Snowcone (8 TB), Snowball Edge (80 TB), and Snowmobile (up to 100 PB).",
    back: "The <strong>AWS Snow Family</strong> physically ships ruggedized hardware devices to customer sites to migrate petabytes of data where internet connectivity is limited or slow. <strong>Snowcone</strong> is ultracompact (8 TB); <strong>Snowball Edge</strong> includes local compute (80 TB); <strong>Snowmobile</strong> is a 45-foot container truck.",
    tags: ["Snow Family", "Migration", "Storage"]
  },
  {
    id: "aws-clf-fc-99",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Database Migration Service (AWS DMS)",
    hint: "Homogeneous and heterogeneous live database migration with minimal downtime.",
    back: "<strong>AWS DMS</strong> securely migrates databases to AWS while the source database remains fully operational, minimizing application downtime. Paired with the <strong>AWS Schema Conversion Tool (SCT)</strong>, it converts schemas between heterogeneous database engines (e.g. Oracle to PostgreSQL).",
    tags: ["DMS", "Migration", "Databases"]
  },
  {
    id: "aws-clf-fc-100",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Application Migration Service (AWS MGN)",
    hint: "Lift-and-shift server migration with block-level continuous replication.",
    back: "<strong>AWS MGN</strong> is the primary automated lift-and-shift service for moving physical, virtual, or cloud servers into AWS. It uses an agent to perform non-disruptive, block-level background data replication directly to an AWS staging area.",
    tags: ["MGN", "Migration", "Compute"]
  }
];

export default AWS_CLF_FLASHCARDS_4;
