export const AZURE_AZ900_FLASHCARDS_1 = [
  {
    "id": "azure-az900-fc-1",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "CapEx vs. OpEx in Cloud Computing",
    "hint": "Upfront asset purchase vs. ongoing operational billing.",
    "back": "<strong>CapEx (Capital Expenditure)</strong> involves spending money upfront on physical infrastructure (servers, storage, facilities) that depreciates over multiple years on balance sheets. <strong>OpEx (Operational Expenditure)</strong> is spending money on services as you consume them with no upfront cost, deductible in the current accounting period.",
    "tags": [
      "CapEx",
      "OpEx",
      "Economics"
    ]
  },
  {
    "id": "azure-az900-fc-2",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "Public Cloud vs. Private Cloud vs. Hybrid Cloud",
    "hint": "Shared hardware, dedicated hardware, or bridging both.",
    "back": "<strong>Public Cloud</strong> is multi-tenant infrastructure owned by a third-party (Microsoft) accessed over internet. <strong>Private Cloud</strong> is single-tenant infrastructure dedicated exclusively to one organization. <strong>Hybrid Cloud</strong> combines on-premises or private cloud with public cloud, enabling data and workload portability.",
    "tags": [
      "Cloud Models",
      "Public Cloud",
      "Hybrid Cloud"
    ]
  },
  {
    "id": "azure-az900-fc-3",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "Scalability vs. Elasticity",
    "hint": "The capacity to grow vs. the dynamic automated reaction to load.",
    "back": "<strong>Scalability</strong> is the architectural ability of a system to handle increased workload by adding resources vertically (scaling up) or horizontally (scaling out). <strong>Elasticity</strong> is the automated, dynamic ability to provision and de-provision resources in real time as demand fluctuates.",
    "tags": [
      "Scalability",
      "Elasticity",
      "Architecture"
    ]
  },
  {
    "id": "azure-az900-fc-4",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "Vertical Scaling (Scale Up) vs. Horizontal Scaling (Scale Out)",
    "hint": "Bigger box vs. more boxes.",
    "back": "<strong>Vertical Scaling (Scale Up/Down)</strong> adds more compute power, RAM, or faster disk to an existing machine (often requiring a reboot). <strong>Horizontal Scaling (Scale Out/In)</strong> adds or removes identical machine instances in a pool (e.g. Virtual Machine Scale Sets), enabling seamless autoscaling.",
    "tags": [
      "Scalability",
      "Scale Up",
      "Scale Out"
    ]
  },
  {
    "id": "azure-az900-fc-5",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "High Availability (HA) vs. Fault Tolerance (FT)",
    "hint": "Minimizing downtime vs. absorbing failure with zero downtime.",
    "back": "<strong>High Availability</strong> ensures a system remains accessible with minimal planned and unplanned downtime through automated failover and redundancy (aiming for 99.9%\u201399.99% uptime). <strong>Fault Tolerance</strong> guarantees continuous operation without any perceptible disruption or data loss when a component fails.",
    "tags": [
      "High Availability",
      "Fault Tolerance",
      "Reliability"
    ]
  },
  {
    "id": "azure-az900-fc-6",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "Disaster Recovery: RTO vs. RPO",
    "hint": "How fast you recover vs. how much data you can afford to lose.",
    "back": "<strong>RTO (Recovery Time Objective)</strong> is the maximum acceptable duration of time an application can be offline following a disaster. <strong>RPO (Recovery Point Objective)</strong> is the maximum acceptable age of data that can be lost when unexpected disaster strikes.",
    "tags": [
      "Disaster Recovery",
      "RTO",
      "RPO"
    ]
  },
  {
    "id": "azure-az900-fc-7",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "IaaS vs. PaaS vs. SaaS \u2014 Customer Responsibilities",
    "hint": "Virtual machines, application platforms, or hosted software.",
    "back": "<strong>IaaS</strong>: Customer manages OS, runtime, middleware, apps, and data. <strong>PaaS</strong>: Azure manages OS, hardware, and runtime; customer manages app code and data. <strong>SaaS</strong>: Azure manages entire stack; customer manages user access and data.",
    "tags": [
      "Shared Responsibility",
      "IaaS",
      "PaaS",
      "SaaS"
    ]
  },
  {
    "id": "azure-az900-fc-8",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "Shared Responsibility: Who secures customer data in SaaS?",
    "hint": "Even when using Microsoft 365, who owns the data?",
    "back": "<strong>The customer always owns and secures customer data</strong> across IaaS, PaaS, and SaaS. Microsoft secures the physical infrastructure, network, and application binaries, but classification, retention, and access credentials remain the customer's sole responsibility.",
    "tags": [
      "Shared Responsibility",
      "Data Security",
      "SaaS"
    ]
  },
  {
    "id": "azure-az900-fc-9",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "Consumption-Based Pricing Model",
    "hint": "Pay-as-you-go vs. static hardware leasing.",
    "back": "In Azure's <strong>consumption-based model</strong>, customers pay strictly for the compute cycles, memory, and storage they actively use. When resources are deallocated or scaled to zero, compute charges stop immediately, eliminating costs for idle capacity.",
    "tags": [
      "Consumption",
      "Pricing",
      "Cost"
    ]
  },
  {
    "id": "azure-az900-fc-10",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "Agility as a Cloud Benefit",
    "hint": "Procurement lead time measured in minutes instead of months.",
    "back": "<strong>Cloud agility</strong> is the speed and operational flexibility to rapidly develop, test, deploy, and dismantle IT infrastructure on demand using APIs and templates without waiting for hardware procurement.",
    "tags": [
      "Agility",
      "DevOps",
      "Cloud Concepts"
    ]
  },
  {
    "id": "azure-az900-fc-11",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "Geo-Distribution",
    "hint": "Placing compute near users around the globe.",
    "back": "<strong>Geo-distribution</strong> is deploying applications and data across multiple globally distributed Azure regions. It brings services geographically close to users to minimize network latency and ensures regional compliance.",
    "tags": [
      "Geo-distribution",
      "Latency",
      "Regions"
    ]
  },
  {
    "id": "azure-az900-fc-12",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "Serverless Computing",
    "hint": "Code execution without server management.",
    "back": "<strong>Serverless</strong> (e.g. Azure Functions) enables event-driven code execution with sub-second billing. Azure automatically provisions, scales, and manages the infrastructure, scaling to zero when idle so customers pay only while code is executing.",
    "tags": [
      "Serverless",
      "Azure Functions",
      "Compute"
    ]
  },
  {
    "id": "azure-az900-fc-13",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "Multi-Cloud Strategy",
    "hint": "Diversifying infrastructure across multiple public cloud vendors.",
    "back": "A <strong>multi-cloud strategy</strong> deploys workloads across two or more public cloud providers (e.g. Azure, AWS, GCP) to avoid single-vendor lock-in, increase resilience against vendor outages, and leverage best-of-breed specialized services.",
    "tags": [
      "Multi-Cloud",
      "Strategy",
      "Architecture"
    ]
  },
  {
    "id": "azure-az900-fc-14",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "Cloud Economies of Scale",
    "hint": "Why hyperscalers can deliver lower per-unit computing costs.",
    "back": "<strong>Economies of scale</strong> refers to the cost advantage cloud providers achieve by purchasing massive volumes of servers, storage, and electricity at wholesale discounts, passing savings to consumers as lower per-unit prices.",
    "tags": [
      "Economies of Scale",
      "Cost",
      "Cloud Concepts"
    ]
  },
  {
    "id": "azure-az900-fc-15",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "Cloud Bursting Architecture",
    "hint": "Running baseline on-premises, expanding to cloud during peaks.",
    "back": "<strong>Cloud bursting</strong> is a hybrid cloud configuration where an application runs in a private cloud or on-premises datacenter and dynamically bursts into Azure when traffic surges exceed on-premises capacity.",
    "tags": [
      "Cloud Bursting",
      "Hybrid Cloud",
      "Elasticity"
    ]
  },
  {
    "id": "azure-az900-fc-16",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "Public Cloud Tenancy Model",
    "hint": "Shared physical hardware with logical hypervisor isolation.",
    "back": "In a <strong>public cloud</strong>, multiple customer tenants share the same physical server racks and hardware, separated by the hypervisor and strict logical encryption barriers.",
    "tags": [
      "Cloud Concepts",
      "Public"
    ]
  },
  {
    "id": "azure-az900-fc-17",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "Private Cloud Location Options",
    "hint": "On-premises datacenter or hosted by a third party.",
    "back": "A <strong>private cloud</strong> can be physically hosted inside an organization's on-premises datacenter or hosted in a colocation facility on dedicated, single-tenant hardware.",
    "tags": [
      "Cloud Concepts",
      "Private"
    ]
  },
  {
    "id": "azure-az900-fc-18",
    "difficulty": "hard",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "SaaS Zero Infrastructure Maintenance",
    "hint": "Users consume software over the web without server patching.",
    "back": "<strong>Software as a Service (SaaS)</strong> eliminates all server and OS patching overhead for the customer; updates, feature releases, and infrastructure scaling are handled by the provider.",
    "tags": [
      "Cloud Concepts",
      "SaaS"
    ]
  },
  {
    "id": "azure-az900-fc-19",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "IaaS Lift-and-Shift Migration",
    "hint": "Fastest migration path with minimal code changes.",
    "back": "<strong>IaaS</strong> provides virtual machines that mirror existing on-premises servers, making it the preferred model for 'lift-and-shift' migrations without rewriting software.",
    "tags": [
      "Cloud Concepts",
      "IaaS"
    ]
  },
  {
    "id": "azure-az900-fc-20",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "PaaS Development Acceleration",
    "hint": "Focusing on application code rather than middleware or runtimes.",
    "back": "<strong>Platform as a Service (PaaS)</strong> provides pre-configured runtimes (.NET, Java, Node.js, Python), allowing developers to deploy code without managing web server daemons or OS updates.",
    "tags": [
      "Cloud Concepts",
      "PaaS"
    ]
  },
  {
    "id": "azure-az900-fc-21",
    "difficulty": "hard",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "Shared Responsibility: Physical Datacenter Security",
    "hint": "Perimeter fencing, guards, biometric scanners.",
    "back": "<strong>Microsoft is always 100% responsible for physical datacenter security</strong> across IaaS, PaaS, and SaaS, including physical perimeter access, power, and environmental controls.",
    "tags": [
      "Cloud Concepts",
      "Shared"
    ]
  },
  {
    "id": "azure-az900-fc-22",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "Shared Responsibility: Guest OS Patching",
    "hint": "Windows Update and Linux kernel patching responsibility.",
    "back": "In <strong>IaaS</strong>, the customer is responsible for applying OS updates and security patches. In <strong>PaaS</strong> and <strong>SaaS</strong>, Microsoft automatically patches the operating system.",
    "tags": [
      "Cloud Concepts",
      "Shared"
    ]
  },
  {
    "id": "azure-az900-fc-23",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "Cost Predictability: Azure Pricing Calculator",
    "hint": "Estimating monthly spend before deploying workloads.",
    "back": "The <strong>Azure Pricing Calculator</strong> is a pre-deployment web tool used to model architectures and calculate estimated monthly operational expenditures before provisioning resources.",
    "tags": [
      "Cloud Concepts",
      "Cost"
    ]
  },
  {
    "id": "azure-az900-fc-24",
    "difficulty": "hard",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "Cost Comparison: TCO Calculator",
    "hint": "Comparing 5-year datacenter costs to Azure migration.",
    "back": "The <strong>Total Cost of Ownership (TCO) Calculator</strong> compares the complete cost of operating an on-premises datacenter (servers, power, cooling, labor) against running in Azure over time.",
    "tags": [
      "Cloud Concepts",
      "Cost"
    ]
  },
  {
    "id": "azure-az900-fc-25",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d1",
    "front": "Service Level Agreements (SLAs) in Azure",
    "hint": "Formal financial commitments to uptime and performance.",
    "back": "Microsoft publishes <strong>SLAs</strong> that define uptime commitments (e.g. 99.9%, 99.95%, 99.99%). If Azure fails to meet the SLA, customers receive financial service credits.",
    "tags": [
      "Cloud Concepts",
      "Service"
    ]
  }
];

export default AZURE_AZ900_FLASHCARDS_1;
