export const AWS_CLF_FLASHCARDS_10 = [
  {
    id: "aws-clf-fc-226",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    front: "Multi-Cloud Strategy vs. Hybrid Cloud Strategy",
    hint: "Multiple public cloud providers vs. on-premises datacenter combined with public cloud.",
    back: "A <strong>Multi-Cloud</strong> strategy intentionally runs workloads across multiple distinct public cloud vendors (e.g. AWS, Azure, Google Cloud). A <strong>Hybrid Cloud</strong> strategy combines on-premises private datacenter infrastructure with AWS cloud services via Direct Connect or VPN.",
    tags: ["Cloud Concepts", "Hybrid", "Multi-Cloud"]
  },
  {
    id: "aws-clf-fc-227",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    front: "AWS Snowball Edge: Compute Optimized vs. Storage Optimized",
    hint: "Local edge AI/ML execution vs. high-volume bulk data migration.",
    back: "<strong>Snowball Edge Storage Optimized</strong> provides 80 TB of block/object storage and 24 vCPUs for large data migrations. <strong>Snowball Edge Compute Optimized</strong> provides 104 vCPUs and optional GPUs for remote edge data processing, machine learning, and video transcoding.",
    tags: ["Snowball Edge", "Edge Computing", "Migration"]
  },
  {
    id: "aws-clf-fc-228",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS Shield Standard: Automatic Protection for All Customers",
    hint: "Always-on perimeter defense against Layer 3 and Layer 4 volumetric attacks.",
    back: "<strong>AWS Shield Standard</strong> is an automated, always-on perimeter defense service that protects all AWS customers at no extra charge against the most common network and transport layer attacks (like SYN/ACK floods and reflection attacks).",
    tags: ["Shield Standard", "DDoS", "Security"]
  },
  {
    id: "aws-clf-fc-229",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS WAF vs. AWS Shield: Layer 7 Application vs. Layer 3/4 Network Defense",
    hint: "Inspecting HTTP headers and payloads vs. mitigating volumetric network floods.",
    back: "<strong>AWS WAF</strong> inspects Layer 7 HTTP/HTTPS traffic for malicious web exploits (SQLi, XSS, bot scraping). <strong>AWS Shield</strong> defends Layer 3 and Layer 4 infrastructure from volumetric packet floods and bandwidth exhaustion attacks.",
    tags: ["WAF", "Shield", "Security", "DDoS"]
  },
  {
    id: "aws-clf-fc-230",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "Amazon GuardDuty: Automated Remediation Workflow",
    hint: "Connecting GuardDuty findings through EventBridge to automated Lambda or SSM actions.",
    back: "When GuardDuty identifies a high-severity threat (like a compromised instance communicating with a command-and-control server), it emits an event to <strong>Amazon EventBridge</strong>, which triggers an automated <strong>AWS Lambda</strong> function to detach the instance profile and isolate the network security group.",
    tags: ["GuardDuty", "EventBridge", "Automation", "Incident Response"]
  },
  {
    id: "aws-clf-fc-231",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS Macie: Custom Data Identifiers",
    hint: "Defining custom regex expressions to find proprietary company secret identifiers in S3.",
    back: "In addition to built-in PII patterns (passports, SSNs, credit cards), <strong>Amazon Macie</strong> allows administrators to create <strong>Custom Data Identifiers</strong> using regular expressions, keyword proximity, and character exclusion rules to detect proprietary employee IDs or internal account numbers.",
    tags: ["Macie", "Custom Identifiers", "S3", "Data Governance"]
  },
  {
    id: "aws-clf-fc-232",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "IAM Permission Boundaries",
    hint: "Setting the maximum allowable permissions an identity or delegated admin can grant.",
    back: "A <strong>Permission Boundary</strong> is an advanced IAM feature using a managed policy to set the maximum permissions that an identity-based policy can grant. It prevents delegated administrators or developers from escalating privileges beyond their authorized ceiling.",
    tags: ["IAM", "Permission Boundaries", "Security"]
  },
  {
    id: "aws-clf-fc-233",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS Network Firewall vs. VPC Security Groups",
    hint: "Centralized stateful packet inspection and IPS vs. per-instance virtual network interface firewalls.",
    back: "<strong>Security Groups</strong> are simple virtual firewalls attached directly to individual ENIs allowing port/protocol permits. <strong>AWS Network Firewall</strong> is a centrally managed appliance supporting deep packet inspection, domain name filtering, and Suricata intrusion detection and prevention rules.",
    tags: ["Network Firewall", "Security Groups", "VPC", "Security"]
  },
  {
    id: "aws-clf-fc-234",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Elastic Block Store (EBS) vs. Instance Store",
    hint: "Persistent network-attached block volume vs. ephemeral temporary physical host disk.",
    back: "<strong>Amazon EBS</strong> volumes persist independently of instance life cycles and survive instance termination. <strong>Instance Store</strong> volumes are physically attached to the host server; they provide extreme I/O performance at zero cost, but data is <strong>ephemeral</strong> and lost on instance stop or termination.",
    tags: ["EBS", "Instance Store", "Storage", "Compute"]
  },
  {
    id: "aws-clf-fc-235",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon EC2 Placement Groups: Cluster vs. Spread vs. Partition",
    hint: "Ultra-low latency HPC vs. maximum hardware isolation vs. large distributed workloads.",
    back: "<strong>Cluster</strong> groups instances together inside a single AZ for low-latency network performance. <strong>Spread</strong> places each instance on distinct physical hardware racks to reduce correlated failure risk. <strong>Partition</strong> divides instances into logical partitions for distributed systems like HDFS and Cassandra.",
    tags: ["EC2", "Placement Groups", "Compute", "High Availability"]
  },
  {
    id: "aws-clf-fc-236",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon S3 Object Lock: Governance Mode vs. Compliance Mode",
    hint: "Reversible lock with special IAM permissions vs. immutable lock un-deletable even by root.",
    back: "Under <strong>Governance Mode</strong>, users cannot overwrite or delete an object version unless they possess special IAM bypass permissions (<code>s3:BypassGovernanceRetention</code>). Under <strong>Compliance Mode</strong>, the retention period cannot be shortened, altered, or deleted by any user\u2014including the AWS root account.",
    tags: ["S3", "Object Lock", "Compliance", "Security"]
  },
  {
    id: "aws-clf-fc-237",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Route 53 Geolocation vs. Geoproximity Routing",
    hint: "Routing based on geographic location of user vs. routing based on geographic coordinates and bias.",
    back: "<strong>Geolocation Routing</strong> routes DNS queries based on the geographic location of the user (e.g. route all European users to Frankfurt). <strong>Geoproximity Routing</strong> uses Route 53 Traffic Flow to route traffic based on geographic coordinates and adjust traffic boundaries using a visual <strong>bias</strong> score.",
    tags: ["Route 53", "DNS", "Routing", "Networking"]
  },
  {
    id: "aws-clf-fc-238",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Global Accelerator vs. Route 53 Latency-Based Routing",
    hint: "Static Anycast IPs over AWS global private fiber vs. public internet DNS resolution.",
    back: "<strong>Route 53 Latency Routing</strong> resolves DNS queries over the public internet to the region offering lowest latency. <strong>AWS Global Accelerator</strong> provides static Anycast IPs and moves traffic onto the high-speed private AWS global network immediately at the nearest edge location.",
    tags: ["Global Accelerator", "Route 53", "Networking", "Performance"]
  },
  {
    id: "aws-clf-fc-239",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon SQS vs. Amazon SNS: Pull vs. Push Messaging",
    hint: "Consumers pull messages from queues vs. topic pushes notifications to subscribers.",
    back: "<strong>Amazon SQS</strong> is a <strong>pull-based</strong> queue: worker instances poll the queue to retrieve and process messages at their own pace. <strong>Amazon SNS</strong> is a <strong>push-based</strong> messaging service: messages published to a topic are instantly pushed out to all subscribed endpoints.",
    tags: ["SQS", "SNS", "Messaging", "Decoupling"]
  },
  {
    id: "aws-clf-fc-240",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Step Functions: Standard vs. Express Workflows",
    hint: "Long-running durable workflows (up to 1 year) vs. high-volume fast workflows (up to 5 mins).",
    back: "<strong>Standard Workflows</strong> run for up to one year with exactly-once execution and full visual audit execution history. <strong>Express Workflows</strong> are built for high-volume, event-driven IoT and payment ingestion (up to 100,000 executions/sec) running for a maximum duration of 5 minutes.",
    tags: ["Step Functions", "Workflows", "Serverless", "Architecture"]
  },
  {
    id: "aws-clf-fc-241",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS CloudFormation Stacks: Deletion Policy (Retain, Snapshot, Delete)",
    hint: "Protecting critical databases or EBS volumes when a CloudFormation stack is torn down.",
    back: "The <strong>DeletionPolicy</strong> attribute in a CloudFormation resource tells AWS what to do with that resource when its stack is deleted. Setting <code>DeletionPolicy: Retain</code> preserves the S3 bucket or database intact, preventing catastrophic accidental data loss.",
    tags: ["CloudFormation", "DeletionPolicy", "IaC", "Safety"]
  },
  {
    id: "aws-clf-fc-242",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon CloudWatch Anomaly Detection",
    hint: "Machine learning baselines that automatically identify unexpected metric variations.",
    back: "<strong>CloudWatch Anomaly Detection</strong> applies machine learning algorithms to continuous metric data to create expected dynamic baseline bands. CloudWatch Alarms can trigger when metric values deviate outside these expected bands, avoiding rigid static threshold limits.",
    tags: ["CloudWatch", "Anomaly Detection", "Machine Learning", "Monitoring"]
  },
  {
    id: "aws-clf-fc-243",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Snowmobile: Exabyte-Scale Physical Data Migration",
    hint: "45-foot ruggedized shipping container truck moving up to 100 PB per vehicle.",
    back: "<strong>AWS Snowmobile</strong> is an exabyte-scale data migration service. A 45-foot-long ruggedized, tamper-resistant shipping container truck pulled by a semi-trailer transports up to <strong>100 PB</strong> of data directly to AWS datacenters for massive datacenter decommissioning projects.",
    tags: ["Snowmobile", "Snow Family", "Migration", "Storage"]
  },
  {
    id: "aws-clf-fc-244",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Athena Partitioning: Slashing Query Costs and Latency",
    hint: "Restricting scanned data by organizing S3 object prefixes by year, month, and day.",
    back: "By organizing data in Amazon S3 using partitioned prefixes (e.g. <code>year=2026/month=09/day=03/</code>), <strong>Athena</strong> reads only the specific subdirectories queried. Because Athena charges $5 per TB scanned, partitioning cuts query costs by over 90% and drastically accelerates performance.",
    tags: ["Athena", "Partitioning", "Cost Optimization", "Analytics"]
  },
  {
    id: "aws-clf-fc-245",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Cost Allocation: Tags vs. Cost Categories",
    hint: "Raw key-value resource labels vs. multi-account composite business rule mappings.",
    back: "<strong>Tags</strong> are simple key-value metadata attached directly to individual resources. <strong>AWS Cost Categories</strong> allow finance administrators to write multi-dimensional logic (combining accounts, tags, chargeback adjustments, and services) to map raw costs into corporate financial categories.",
    tags: ["Cost Allocation", "FinOps", "Tags", "Cost Categories"]
  },
  {
    id: "aws-clf-fc-246",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Budgets Actions: Automated Cost Enforcement",
    hint: "Automatically stopping EC2 instances or attaching restrictive SCPs when budgets breach.",
    back: "In addition to sending email notifications, <strong>AWS Budgets Actions</strong> can automatically execute corrective operations\u2014such as applying a restrictive IAM policy, attaching an SCP, or stopping specific EC2 and RDS instances when a cost threshold is exceeded.",
    tags: ["Budgets", "Automation", "FinOps", "Cost Management"]
  },
  {
    id: "aws-clf-fc-247",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    front: "Reserved Instance Marketplace: Selling Unused EC2 RIs",
    hint: "Selling excess Standard EC2 Reserved Instances to other AWS customers.",
    back: "If business needs change and an organization has excess <strong>Standard EC2 Reserved Instances</strong> with remaining terms, the <strong>Amazon EC2 Reserved Instance Marketplace</strong> allows them to sell these unused commitments directly to other AWS customers.",
    tags: ["Reserved Instances", "RI Marketplace", "FinOps", "Cost Optimization"]
  },
  {
    id: "aws-clf-fc-248",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Support: Trusted Advisor Checks Available by Plan",
    hint: "Basic/Developer (7 core checks) vs. Business/Enterprise (all 100+ checks).",
    back: "The <strong>Basic and Developer</strong> support plans include 7 core security and service quota checks. Upgrading to <strong>Business or Enterprise Support</strong> unlocks the complete library of over 100+ automated Trusted Advisor checks across cost optimization, performance, fault tolerance, and security.",
    tags: ["Trusted Advisor", "Support Plans", "Best Practices"]
  },
  {
    id: "aws-clf-fc-249",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Incident Detection and Response (Enterprise Support Add-On)",
    hint: "24/7 dedicated proactive monitoring and 5-minute response for critical incidents.",
    back: "<strong>AWS Incident Detection and Response</strong> is an add-on service for Enterprise Support. AWS provides 24/7 proactive monitoring of designated critical workloads, engaging AWS incident managers within 5 minutes of an alarm to orchestrate rapid recovery.",
    tags: ["Incident Response", "Enterprise Support", "Reliability"]
  },
  {
    id: "aws-clf-fc-250",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Infrastructure Event Management (IEM)",
    hint: "Structured architecture guidance and live AWS engineer standby during major product launches.",
    back: "<strong>AWS IEM</strong> is a short-term engagement included with Enterprise Support (and available for purchase with Business Support) providing architectural guidance, scaling capacity reservations, and real-time support engineer standby during major business events (like Prime Day or migrations).",
    tags: ["IEM", "Enterprise Support", "Launch Planning", "Reliability"]
  }
];

export default AWS_CLF_FLASHCARDS_10;
