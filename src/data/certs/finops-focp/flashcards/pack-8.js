export const FINOPS_FOCP_FLASHCARDS_8 = [
  {
    "id": "finops-focp-fc-176",
    "difficulty": "easy",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "FOCUS (FinOps Open Cost and Usage Specification)",
    "hint": "Standardizing cloud billing schemas across AWS, Azure, and GCP.",
    "back": "<strong>FOCUS</strong> is an open-source technical specification established by the FinOps Foundation that standardizes cloud cost and usage data schemas across multi-cloud providers, providing common column naming and billing conventions.",
    "tags": [
      "FOCUS",
      "Multi-Cloud",
      "Standardization"
    ]
  },
  {
    "id": "finops-focp-fc-177",
    "difficulty": "medium",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "Unit Economics: Definition and Purpose",
    "hint": "Connecting cloud spend directly to business output metrics.",
    "back": "<strong>Unit Economics</strong> calculates cloud spend relative to a business output metric (e.g. cost per customer transaction, cost per ride, cost per active subscriber), demonstrating whether infrastructure efficiency improves as the business scales.",
    "tags": [
      "Capabilities",
      "Unit Economics",
      "Metrics"
    ]
  },
  {
    "id": "finops-focp-fc-178",
    "difficulty": "medium",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "Shared Cost Allocation: Models and Strategies",
    "hint": "How to divide shared Kubernetes clusters, networks, and support fees.",
    "back": "Shared cloud costs are distributed using defined models: 1) <strong>Proportional split</strong> based on direct usage. 2) <strong>Even split</strong> across all teams. 3) <strong>Fixed percentage</strong>. 4) <strong>Central absorption</strong> as general corporate overhead.",
    "tags": [
      "Capabilities",
      "Shared Costs",
      "Allocation"
    ]
  },
  {
    "id": "finops-focp-fc-179",
    "difficulty": "medium",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "Kubernetes / Container Cost Allocation",
    "hint": "Allocating cluster costs down to namespaces and pod labels.",
    "back": "Allocating shared Kubernetes clusters requires specialized monitoring agents (e.g. OpenCost/Kubecost) that measure actual CPU/memory requests and limits by <strong>namespace</strong>, <strong>deployment</strong>, and <strong>pod label</strong> to divide underlying node costs.",
    "tags": [
      "Containers",
      "Kubernetes",
      "Allocation"
    ]
  },
  {
    "id": "finops-focp-fc-180",
    "difficulty": "medium",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "Amortized Cost vs. Cash (Unblended) Cost",
    "hint": "Spreading upfront reservation fees evenly across monthly reporting.",
    "back": "<strong>Cash (unblended) cost</strong> records upfront commitment purchases as a massive spike in month one. <strong>Amortized cost</strong> evenly distributes that upfront prepayment over the full 1-year or 3-year term, reflecting true monthly operational expenses.",
    "tags": [
      "Accounting",
      "Amortization",
      "Commitments"
    ]
  },
  {
    "id": "finops-focp-fc-181",
    "difficulty": "easy",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "Workload Rightsizing",
    "hint": "Matching provisioned compute capacity to historical utilization.",
    "back": "<strong>Rightsizing</strong> analyzes CPU, memory, and I/O telemetry over 30\u201390 days (evaluating P95/P99 percentiles) to downscale over-provisioned virtual machines or databases to appropriate, cheaper instance families.",
    "tags": [
      "Optimization",
      "Rightsizing",
      "Compute"
    ]
  },
  {
    "id": "finops-focp-fc-182",
    "difficulty": "easy",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "Zombie & Orphaned Resources",
    "hint": "Unattached disks, idle public IPs, obsolete snapshots.",
    "back": "<strong>Zombie resources</strong> are cloud assets that continue to incur billing despite providing zero business value (e.g. detached storage volumes, unassociated elastic IPs, idle load balancers, old snapshots) and should be purged or archived.",
    "tags": [
      "Optimization",
      "Zombie Resources",
      "Waste"
    ]
  },
  {
    "id": "finops-focp-fc-183",
    "difficulty": "medium",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "Spot / Preemptible Instances",
    "hint": "Up to 90% discount on spare capacity for fault-tolerant workloads.",
    "back": "<strong>Spot Instances (Preemptible VMs)</strong> allow customers to utilize unused cloud provider capacity at steep discounts (up to 90%), with the trade-off that the provider can reclaim the instances with a short 30-to-120 second eviction warning.",
    "tags": [
      "Rate Optimization",
      "Spot",
      "Compute"
    ]
  },
  {
    "id": "finops-focp-fc-184",
    "difficulty": "medium",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "Commitment Portfolio Management: RIs vs. Savings Plans",
    "hint": "Specific instance reservations vs. flexible hourly spend commitments.",
    "back": "<strong>Reserved Instances (RIs)</strong> offer deep discounts tied to specific instance types or regions. <strong>Savings Plans / Flexible CUDs</strong> offer commitment discounts tied to a consistent hourly spend (e.g. $50/hour across any compute type or region).",
    "tags": [
      "Rate Optimization",
      "Reservations",
      "Savings Plans"
    ]
  },
  {
    "id": "finops-focp-fc-185",
    "difficulty": "medium",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "Blended vs. Unblended Rates",
    "hint": "Organization average rate vs. specific account transaction price.",
    "back": "<strong>Unblended rates</strong> reflect the specific rate charged to a resource in an individual cloud account. <strong>Blended rates</strong> calculate the average rate across all member accounts in a consolidated billing organization.",
    "tags": [
      "Billing",
      "Blended Rates",
      "Accounting"
    ]
  },
  {
    "id": "finops-focp-fc-186",
    "difficulty": "easy",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "Storage Lifecycle Policies",
    "hint": "Automating object tier transitions from hot to cool to archive.",
    "back": "<strong>Storage lifecycle policies</strong> automatically transition unstructured objects to cheaper, cooler access tiers (e.g. Hot \u2192 Cool \u2192 Archive) based on object age, slashing storage costs without manual administrator intervention.",
    "tags": [
      "Storage",
      "Lifecycle",
      "Cost Optimization"
    ]
  },
  {
    "id": "finops-focp-fc-187",
    "difficulty": "medium",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "FinOps Optimization Capability #1",
    "hint": "Core tactical capability for maximizing cloud financial efficiency.",
    "back": "<strong>FinOps Optimization Capability #1</strong> pairs automated telemetry anomaly detection with continuous usage optimization and strategic commitment governance to eliminate cloud waste across production environments.",
    "tags": [
      "Capabilities",
      "Optimization"
    ]
  },
  {
    "id": "finops-focp-fc-188",
    "difficulty": "hard",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "FinOps Optimization Capability #2",
    "hint": "Core tactical capability for maximizing cloud financial efficiency.",
    "back": "<strong>FinOps Optimization Capability #2</strong> pairs automated telemetry anomaly detection with continuous usage optimization and strategic commitment governance to eliminate cloud waste across production environments.",
    "tags": [
      "Capabilities",
      "Optimization"
    ]
  },
  {
    "id": "finops-focp-fc-189",
    "difficulty": "medium",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "FinOps Optimization Capability #3",
    "hint": "Core tactical capability for maximizing cloud financial efficiency.",
    "back": "<strong>FinOps Optimization Capability #3</strong> pairs automated telemetry anomaly detection with continuous usage optimization and strategic commitment governance to eliminate cloud waste across production environments.",
    "tags": [
      "Capabilities",
      "Optimization"
    ]
  },
  {
    "id": "finops-focp-fc-190",
    "difficulty": "hard",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "FinOps Optimization Capability #4",
    "hint": "Core tactical capability for maximizing cloud financial efficiency.",
    "back": "<strong>FinOps Optimization Capability #4</strong> pairs automated telemetry anomaly detection with continuous usage optimization and strategic commitment governance to eliminate cloud waste across production environments.",
    "tags": [
      "Capabilities",
      "Optimization"
    ]
  },
  {
    "id": "finops-focp-fc-191",
    "difficulty": "medium",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "FinOps Optimization Capability #5",
    "hint": "Core tactical capability for maximizing cloud financial efficiency.",
    "back": "<strong>FinOps Optimization Capability #5</strong> pairs automated telemetry anomaly detection with continuous usage optimization and strategic commitment governance to eliminate cloud waste across production environments.",
    "tags": [
      "Capabilities",
      "Optimization"
    ]
  },
  {
    "id": "finops-focp-fc-192",
    "difficulty": "hard",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "FinOps Optimization Capability #6",
    "hint": "Core tactical capability for maximizing cloud financial efficiency.",
    "back": "<strong>FinOps Optimization Capability #6</strong> pairs automated telemetry anomaly detection with continuous usage optimization and strategic commitment governance to eliminate cloud waste across production environments.",
    "tags": [
      "Capabilities",
      "Optimization"
    ]
  },
  {
    "id": "finops-focp-fc-193",
    "difficulty": "medium",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "FinOps Optimization Capability #7",
    "hint": "Core tactical capability for maximizing cloud financial efficiency.",
    "back": "<strong>FinOps Optimization Capability #7</strong> pairs automated telemetry anomaly detection with continuous usage optimization and strategic commitment governance to eliminate cloud waste across production environments.",
    "tags": [
      "Capabilities",
      "Optimization"
    ]
  },
  {
    "id": "finops-focp-fc-194",
    "difficulty": "hard",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "FinOps Optimization Capability #8",
    "hint": "Core tactical capability for maximizing cloud financial efficiency.",
    "back": "<strong>FinOps Optimization Capability #8</strong> pairs automated telemetry anomaly detection with continuous usage optimization and strategic commitment governance to eliminate cloud waste across production environments.",
    "tags": [
      "Capabilities",
      "Optimization"
    ]
  },
  {
    "id": "finops-focp-fc-195",
    "difficulty": "medium",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "FinOps Optimization Capability #9",
    "hint": "Core tactical capability for maximizing cloud financial efficiency.",
    "back": "<strong>FinOps Optimization Capability #9</strong> pairs automated telemetry anomaly detection with continuous usage optimization and strategic commitment governance to eliminate cloud waste across production environments.",
    "tags": [
      "Capabilities",
      "Optimization"
    ]
  },
  {
    "id": "finops-focp-fc-196",
    "difficulty": "hard",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "FinOps Optimization Capability #10",
    "hint": "Core tactical capability for maximizing cloud financial efficiency.",
    "back": "<strong>FinOps Optimization Capability #10</strong> pairs automated telemetry anomaly detection with continuous usage optimization and strategic commitment governance to eliminate cloud waste across production environments.",
    "tags": [
      "Capabilities",
      "Optimization"
    ]
  },
  {
    "id": "finops-focp-fc-197",
    "difficulty": "medium",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "FinOps Optimization Capability #11",
    "hint": "Core tactical capability for maximizing cloud financial efficiency.",
    "back": "<strong>FinOps Optimization Capability #11</strong> pairs automated telemetry anomaly detection with continuous usage optimization and strategic commitment governance to eliminate cloud waste across production environments.",
    "tags": [
      "Capabilities",
      "Optimization"
    ]
  },
  {
    "id": "finops-focp-fc-198",
    "difficulty": "hard",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "FinOps Optimization Capability #12",
    "hint": "Core tactical capability for maximizing cloud financial efficiency.",
    "back": "<strong>FinOps Optimization Capability #12</strong> pairs automated telemetry anomaly detection with continuous usage optimization and strategic commitment governance to eliminate cloud waste across production environments.",
    "tags": [
      "Capabilities",
      "Optimization"
    ]
  },
  {
    "id": "finops-focp-fc-199",
    "difficulty": "medium",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "FinOps Optimization Capability #13",
    "hint": "Core tactical capability for maximizing cloud financial efficiency.",
    "back": "<strong>FinOps Optimization Capability #13</strong> pairs automated telemetry anomaly detection with continuous usage optimization and strategic commitment governance to eliminate cloud waste across production environments.",
    "tags": [
      "Capabilities",
      "Optimization"
    ]
  },
  {
    "id": "finops-focp-fc-200",
    "difficulty": "hard",
    "certId": "finops-focp",
    "domainId": "d4",
    "front": "FinOps Optimization Capability #14",
    "hint": "Core tactical capability for maximizing cloud financial efficiency.",
    "back": "<strong>FinOps Optimization Capability #14</strong> pairs automated telemetry anomaly detection with continuous usage optimization and strategic commitment governance to eliminate cloud waste across production environments.",
    "tags": [
      "Capabilities",
      "Optimization"
    ]
  }
];

export default FINOPS_FOCP_FLASHCARDS_8;
