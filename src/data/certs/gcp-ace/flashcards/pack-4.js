export const GCP_ACE_FLASHCARDS_4 = [
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "BigQuery Partitioning vs. Clustering",
    "hint": "Pruning physical date blocks vs. co-locating data with common filter values.",
    "back": "<strong>Partitioning</strong> divides a table into distinct physical segments based on date, timestamp, or integer range, allowing queries to prune whole partitions and drastically reduce scanned bytes. <strong>Clustering</strong> sorts data within partitions based on up to 4 columns (e.g., customer_id), accelerating filters and aggregations.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-76"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Estimating BigQuery Query Costs with Dry Run",
    "hint": "How to verify scanned gigabytes before executing an expensive query.",
    "back": "Pass the <code>--dry-run</code> flag to <code>bq query</code> or click the query validator in the Cloud Console. BigQuery parses the SQL statement and returns the exact number of bytes the query will scan without executing it or incurring any monetary charge.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-77"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Auto Mode VPC vs. Custom Mode VPC",
    "hint": "Predefined default subnets vs. architected enterprise address spaces.",
    "back": "<strong>Auto Mode VPC</strong> automatically creates one subnet per region with a predefined /20 IP range, creating potential IP overlap risks with on-premises networks. <strong>Custom Mode VPC</strong> requires explicit subnet creation with custom IP ranges, giving full control over CIDR blocks; enterprise production should always use Custom Mode.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-78"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Converting Auto Mode VPC to Custom Mode VPC",
    "hint": "A one-way irreversible network transformation.",
    "back": "An Auto Mode VPC can be converted to Custom Mode using <code>gcloud compute networks switch-mode [NAME] --mode=custom</code>. Once converted to Custom Mode, the operation is <strong>strictly irreversible</strong>; new regions will no longer automatically receive subnets.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-79"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Shared VPC: Host Project vs. Service Project Architecture",
    "hint": "Centralized networking administration with decentralized workload deployment.",
    "back": "The <strong>Host Project</strong> contains the shared VPC, subnets, VPNs, and firewall rules managed by network administrators. <strong>Service Projects</strong> are attached to the host project, allowing application developers to provision VMs and GKE clusters attached directly to the host subnets without managing network routing.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-80"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "VPC Network Peering: Non-Transitive Routing Property",
    "hint": "Why VPC A cannot talk to VPC C through peered VPC B.",
    "back": "VPC Network Peering is strictly <strong>non-transitive</strong>. If VPC A is peered with VPC B, and VPC B is peered with VPC C, traffic from VPC A <strong>cannot</strong> route through VPC B to reach VPC C. Direct peering between A and C, or a VPN gateway/hub appliance, is required.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-81"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "VPC Network Peering: Overlapping CIDR Rule",
    "hint": "The fundamental prerequisite before peering two VPC networks.",
    "back": "VPC networks with <strong>overlapping IP address ranges (CIDRs) cannot be peered</strong>. The peering connection will immediately fail or reject routes if any subnet range in one VPC overlaps with a subnet range in the target VPC.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-82"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Cloud VPN: HA VPN vs. Classic VPN SLAs",
    "hint": "99.99% availability with dynamic routing vs. 99.9% legacy tunnels.",
    "back": "<strong>HA VPN</strong> provides a 99.99% service availability SLA by configuring two public IP interfaces connected to dual peer gateways, mandating dynamic routing with Cloud Router (BGP). <strong>Classic VPN</strong> offers only a 99.9% SLA, supports static or dynamic routing, and is deprecated for new deployments.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-83"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Dedicated Interconnect vs. Partner Interconnect",
    "hint": "Direct 10G/100G physical fiber cross-connect vs. third-party network provider.",
    "back": "<strong>Dedicated Interconnect</strong> provides a direct physical fiber cable connection between on-premises routers and Google's colocation facility at 10 Gbps or 100 Gbps. <strong>Partner Interconnect</strong> connects through a supported service provider, offering sub-gigabit to 50 Gbps speeds without requiring physical colocation presence.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-84"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Cloud NAT: Egress-Only Internet Gateway",
    "hint": "Allowing private VMs to fetch software updates without public IPs.",
    "back": "<strong>Cloud NAT</strong> provides managed outbound internet connectivity for private Compute Engine instances and private GKE nodes. It performs Source Network Address Translation (SNAT) for egress traffic, while strictly preventing unsolicited inbound connections from the public internet.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-85"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Cloud Router: Dynamic Routing via BGP",
    "hint": "Automated route advertisement between on-premises and Google Cloud VPCs.",
    "back": "<strong>Cloud Router</strong> is a fully distributed software router that manages dynamic routing using Border Gateway Protocol (BGP). It automatically advertises VPC subnet ranges to on-premises routers over Cloud VPN or Cloud Interconnect and updates VPC routing tables when remote topology changes.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-86"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "VPC Firewall Rules: Implicit Default Rules",
    "hint": "The two built-in rules present at priority 65535 in every VPC.",
    "back": "Every Google Cloud VPC contains two un-deletable default firewall rules at lowest priority (65535): 1) <strong>Default Allow Egress</strong> (permits all outbound traffic); and 2) <strong>Default Deny Ingress</strong> (blocks all inbound traffic). Custom user-defined rules (priority 0-65534) override these defaults.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-87"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Firewall Rule Targets: Network Tags vs. Service Accounts",
    "hint": "String labels that any VM editor can edit vs. cryptographically enforced IAM identities.",
    "back": "Targeting firewall rules by <strong>Network Tags</strong> allows any user with Compute Instance Admin to attach tags to VMs, potentially granting unauthorized network access. Targeting by <strong>Service Accounts</strong> enforces strict IAM controls, ensuring only VMs authorized to run as that service account receive the firewall policy.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-88"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "External Application Load Balancer (Global HTTPS) Architecture",
    "hint": "Anycast IP, global SSL termination, URL map path routing, and Cloud Armor.",
    "back": "The <strong>External Application Load Balancer</strong> is a proxy-based L7 load balancer utilizing Google's global Anycast IP address. It terminates TLS at the edge close to users, routes traffic across multiple regions based on URL host and path rules, and integrates natively with Cloud CDN and Cloud Armor.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-89"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "External Passthrough Network Load Balancer (L4)",
    "hint": "Non-proxy L4 load balancing preserving client source IP addresses.",
    "back": "The <strong>External Passthrough Network Load Balancer</strong> operates at Layer 4 (TCP/UDP). It is a non-proxy pass-through load balancer that routes raw packets directly to backend VMs without terminating connections, fully preserving the original client source IP address with line-rate throughput.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-90"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Internal Application Load Balancer (Internal HTTP/HTTPS)",
    "hint": "Private Layer 7 proxy within a VPC for microservice communication.",
    "back": "The <strong>Internal Application Load Balancer</strong> is a regional Layer 7 load balancer built on open-source Envoy proxies deployed inside a dedicated <strong>proxy-only subnet</strong>. It provides internal URL routing, header rewriting, and TLS offloading for internal microservice architectures.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-91"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Cloud DNS: Private Zones vs. Public Zones",
    "hint": "Internal VPC domain resolution vs. internet-facing authoritative name servers.",
    "back": "<strong>Public DNS Zones</strong> publish authoritative DNS records accessible to anyone on the public internet. <strong>Private DNS Zones</strong> are scoped exclusively to one or more VPC networks, translating custom domain names (e.g., <code>db.corp.internal</code>) only for VM instances residing within those authorized VPCs.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-92"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Cloud DNS Forwarding Zones: Hybrid Name Resolution",
    "hint": "Resolving on-premises corporate domains from Google Cloud VMs.",
    "back": "A <strong>DNS Forwarding Zone</strong> configures Cloud DNS to forward queries for a specific domain suffix (e.g., <code>onprem.example.com</code>) to on-premises DNS servers across a Cloud VPN or Interconnect, enabling seamless hybrid name resolution without maintaining DNS forwarder VMs.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-93"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Regional Persistent Disks: Cross-Zone Block Storage Replication",
    "hint": "Synchronous block-level replication between two zones in a single region.",
    "back": "<strong>Regional Persistent Disks</strong> synchronously replicate block data across two zones within the same region. In the event of an unplanned zonal outage, the disk can be immediately force-attached to a standby VM in the surviving zone with zero data loss, enabling rapid disaster recovery.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-94"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Compute Engine Snapshot Schedules: Automated Disk Backup",
    "hint": "Configuring recurring point-in-time persistent disk backups.",
    "back": "<strong>Snapshot Schedules</strong> attach automated recurring backup policies (hourly, daily, or weekly) to Persistent Disks. Snapshots are incremental, compressed, and stored across multiple zones in a region or multi-region by default, ensuring data durability against zonal disasters.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-95"
  },
  {
    "id": "gcp-ace-fc-96",
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "GKE Autopilot vs. GKE Standard",
    "hint": "Google-managed nodes billed per Pod vs. customer-managed node pools.",
    "back": "<strong>GKE Autopilot</strong>: Google manages node provisioning, scaling, OS updates, and security hardening; customers are billed only for CPU/RAM requested by running Pods. <strong>GKE Standard</strong>: Customers manage and configure node pools, machine types, and scaling, paying for underlying Compute Engine VMs.",
    "tags": [
      "GKE",
      "Autopilot",
      "Kubernetes",
      "Containers"
    ]
  },
  {
    "id": "gcp-ace-fc-97",
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Cloud Run: Serverless Container Deployment",
    "hint": "Stateless HTTP containers scaling to zero with automatic TLS.",
    "back": "<strong>Cloud Run</strong> executes stateless containers directly on Google's serverless infrastructure. It features automatic HTTPS endpoints, zero infrastructure management, dynamic autoscaling to zero when idle, and sub-second per-request billing.",
    "tags": [
      "Cloud Run",
      "Serverless",
      "Containers"
    ]
  },
  {
    "id": "gcp-ace-fc-98",
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Compute Engine Regional Managed Instance Groups (MIGs)",
    "hint": "Surviving zonal outages with automated autohealing and autoscaling.",
    "back": "A <strong>Regional MIG</strong> distributes VM instances across multiple zones in a region. Backed by instance templates and HTTP health checks, it automatically replaces unhealthy instances (autohealing) and scales capacity based on CPU, load balancing utilization, or Cloud Monitoring metrics.",
    "tags": [
      "Compute Engine",
      "MIG",
      "Autohealing",
      "High Availability"
    ]
  },
  {
    "id": "gcp-ace-fc-99",
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Cloud Storage Object Lifecycle Management",
    "hint": "Automating object tier transitions and expiration declarative rules.",
    "back": "<strong>Lifecycle Management</strong> applies declarative JSON rules directly to Cloud Storage buckets. Rules inspect conditions (e.g. <code>age: 30</code>) to automatically transition objects between storage classes (e.g. Standard \u2192 Nearline) or permanently delete expired objects without scripting.",
    "tags": [
      "Cloud Storage",
      "Lifecycle",
      "Automation"
    ]
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Creating Compute Engine Instances with gcloud: Core Flags",
    "hint": "The essential syntax to provision a VM with custom specs and network.",
    "back": "Use <code>gcloud compute instances create [NAME] --zone=[ZONE] --machine-type=[TYPE] --image-family=[FAMILY] --image-project=[PROJECT] --subnet=[SUBNET] --tags=[TAGS] --service-account=[SA_EMAIL] --scopes=cloud-platform</code> to launch instances declaratively.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-100"
  }
];

export default GCP_ACE_FLASHCARDS_4;
