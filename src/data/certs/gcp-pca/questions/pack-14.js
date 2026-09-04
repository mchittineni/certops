export const GCP_PCA_QUESTIONS_14 = [
  {
    id: "gcp-pca-326",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud NAT (Network Address Translation): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates VPC Egress Networking to allow private Compute Engine virtual machines without external public IP addresses to download operating system security patches from the internet securely.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Cloud NAT providing managed outbound SNAT without external VM IPs is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cloud NAT configured on the Cloud Router associated with the subnet." },
      { id: 'B', text: "Assign public IP addresses directly to all virtual machines." },
      { id: 'C', text: "Deploy an unmanaged Linux virtual machine with iptables forwarding on a public subnet." },
      { id: 'D', text: "Open all inbound ports in the VPC firewall rules to 0.0.0.0/0." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cloud NAT configured on the Cloud Router associated with the subnet. Cloud NAT (Network Address Translation) is a fully managed, software-defined service that enables instances without external IP addresses to access the internet for updates and downloads, while preventing external hosts from initiating inbound connections to the private instances.",
    referenceUrl: "https://cloud.google.com/nat/docs/overview",
    tags: ["VPC Egress Networking", "Cloud NAT", "Dr Failover"]
  },
  {
    id: "gcp-pca-327",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud NAT (Network Address Translation): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates VPC Egress Networking to allow private Compute Engine virtual machines without external public IP addresses to download operating system security patches from the internet securely.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Cloud NAT providing managed outbound SNAT without external VM IPs is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cloud NAT configured on the Cloud Router associated with the subnet." },
      { id: 'B', text: "Assign public IP addresses directly to all virtual machines." },
      { id: 'C', text: "Deploy an unmanaged Linux virtual machine with iptables forwarding on a public subnet." },
      { id: 'D', text: "Open all inbound ports in the VPC firewall rules to 0.0.0.0/0." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cloud NAT configured on the Cloud Router associated with the subnet. Cloud NAT (Network Address Translation) is a fully managed, software-defined service that enables instances without external IP addresses to access the internet for updates and downloads, while preventing external hosts from initiating inbound connections to the private instances.",
    referenceUrl: "https://cloud.google.com/nat/docs/overview",
    tags: ["VPC Egress Networking", "Cloud NAT", "High Load Scale"]
  },
  {
    id: "gcp-pca-328",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud NAT (Network Address Translation): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates VPC Egress Networking to allow private Compute Engine virtual machines without external public IP addresses to download operating system security patches from the internet securely.",
    question: "Which solution properly implements these mandatory security and governance controls? Cloud NAT providing managed outbound SNAT without external VM IPs is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cloud NAT configured on the Cloud Router associated with the subnet." },
      { id: 'B', text: "Assign public IP addresses directly to all virtual machines." },
      { id: 'C', text: "Deploy an unmanaged Linux virtual machine with iptables forwarding on a public subnet." },
      { id: 'D', text: "Open all inbound ports in the VPC firewall rules to 0.0.0.0/0." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cloud NAT configured on the Cloud Router associated with the subnet. Cloud NAT (Network Address Translation) is a fully managed, software-defined service that enables instances without external IP addresses to access the internet for updates and downloads, while preventing external hosts from initiating inbound connections to the private instances.",
    referenceUrl: "https://cloud.google.com/nat/docs/overview",
    tags: ["VPC Egress Networking", "Cloud NAT", "Security Compliance"]
  },
  {
    id: "gcp-pca-329",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud NAT (Network Address Translation): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates VPC Egress Networking to allow private Compute Engine virtual machines without external public IP addresses to download operating system security patches from the internet securely.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Cloud NAT providing managed outbound SNAT without external VM IPs is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cloud NAT configured on the Cloud Router associated with the subnet." },
      { id: 'B', text: "Assign public IP addresses directly to all virtual machines." },
      { id: 'C', text: "Deploy an unmanaged Linux virtual machine with iptables forwarding on a public subnet." },
      { id: 'D', text: "Open all inbound ports in the VPC firewall rules to 0.0.0.0/0." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cloud NAT configured on the Cloud Router associated with the subnet. Cloud NAT (Network Address Translation) is a fully managed, software-defined service that enables instances without external IP addresses to access the internet for updates and downloads, while preventing external hosts from initiating inbound connections to the private instances.",
    referenceUrl: "https://cloud.google.com/nat/docs/overview",
    tags: ["VPC Egress Networking", "Cloud NAT", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-330",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud NAT (Network Address Translation): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates VPC Egress Networking to allow private Compute Engine virtual machines without external public IP addresses to download operating system security patches from the internet securely.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Cloud NAT providing managed outbound SNAT without external VM IPs is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cloud NAT configured on the Cloud Router associated with the subnet." },
      { id: 'B', text: "Assign public IP addresses directly to all virtual machines." },
      { id: 'C', text: "Deploy an unmanaged Linux virtual machine with iptables forwarding on a public subnet." },
      { id: 'D', text: "Open all inbound ports in the VPC firewall rules to 0.0.0.0/0." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cloud NAT configured on the Cloud Router associated with the subnet. Cloud NAT (Network Address Translation) is a fully managed, software-defined service that enables instances without external IP addresses to access the internet for updates and downloads, while preventing external hosts from initiating inbound connections to the private instances.",
    referenceUrl: "https://cloud.google.com/nat/docs/overview",
    tags: ["VPC Egress Networking", "Cloud NAT", "Resilience Failure"]
  },
  {
    id: "gcp-pca-331",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Router and Dynamic BGP Routing: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates VPC Dynamic Routing to dynamically exchange IP route prefixes between an on-premises network and a Google Cloud VPC over an HA VPN tunnel with automated failover.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Cloud Router managing dynamic BGP route exchanges over hybrid links is under consideration.",
    options: [
      { id: 'A', text: "Deploy Google Cloud Router and establish Border Gateway Protocol (BGP) sessions with on-premises routers." },
      { id: 'B', text: "Configure static routes manually in the Google Cloud Console for every on-premises subnet." },
      { id: 'C', text: "Edit local /etc/network/interfaces files on individual virtual machines." },
      { id: 'D', text: "Use DNS round-robin routing to advertise on-premises subnets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Google Cloud Router and establish Border Gateway Protocol (BGP) sessions with on-premises routers. Google Cloud Router uses Border Gateway Protocol (BGP) to dynamically exchange routes between your Google Cloud VPC network and on-premises networks. If a link fails, BGP automatically updates route tables within seconds without manual intervention.",
    referenceUrl: "https://cloud.google.com/network-connectivity/docs/router/concepts/overview",
    tags: ["VPC Dynamic Routing", "Cloud Router", "Dr Failover"]
  },
  {
    id: "gcp-pca-332",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Router and Dynamic BGP Routing: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates VPC Dynamic Routing to dynamically exchange IP route prefixes between an on-premises network and a Google Cloud VPC over an HA VPN tunnel with automated failover.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Cloud Router managing dynamic BGP route exchanges over hybrid links is under consideration.",
    options: [
      { id: 'A', text: "Deploy Google Cloud Router and establish Border Gateway Protocol (BGP) sessions with on-premises routers." },
      { id: 'B', text: "Configure static routes manually in the Google Cloud Console for every on-premises subnet." },
      { id: 'C', text: "Edit local /etc/network/interfaces files on individual virtual machines." },
      { id: 'D', text: "Use DNS round-robin routing to advertise on-premises subnets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Google Cloud Router and establish Border Gateway Protocol (BGP) sessions with on-premises routers. Google Cloud Router uses Border Gateway Protocol (BGP) to dynamically exchange routes between your Google Cloud VPC network and on-premises networks. If a link fails, BGP automatically updates route tables within seconds without manual intervention.",
    referenceUrl: "https://cloud.google.com/network-connectivity/docs/router/concepts/overview",
    tags: ["VPC Dynamic Routing", "Cloud Router", "High Load Scale"]
  },
  {
    id: "gcp-pca-333",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Router and Dynamic BGP Routing: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates VPC Dynamic Routing to dynamically exchange IP route prefixes between an on-premises network and a Google Cloud VPC over an HA VPN tunnel with automated failover.",
    question: "Which solution properly implements these mandatory security and governance controls? Cloud Router managing dynamic BGP route exchanges over hybrid links is under consideration.",
    options: [
      { id: 'A', text: "Deploy Google Cloud Router and establish Border Gateway Protocol (BGP) sessions with on-premises routers." },
      { id: 'B', text: "Configure static routes manually in the Google Cloud Console for every on-premises subnet." },
      { id: 'C', text: "Edit local /etc/network/interfaces files on individual virtual machines." },
      { id: 'D', text: "Use DNS round-robin routing to advertise on-premises subnets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Google Cloud Router and establish Border Gateway Protocol (BGP) sessions with on-premises routers. Google Cloud Router uses Border Gateway Protocol (BGP) to dynamically exchange routes between your Google Cloud VPC network and on-premises networks. If a link fails, BGP automatically updates route tables within seconds without manual intervention.",
    referenceUrl: "https://cloud.google.com/network-connectivity/docs/router/concepts/overview",
    tags: ["VPC Dynamic Routing", "Cloud Router", "Security Compliance"]
  },
  {
    id: "gcp-pca-334",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Router and Dynamic BGP Routing: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates VPC Dynamic Routing to dynamically exchange IP route prefixes between an on-premises network and a Google Cloud VPC over an HA VPN tunnel with automated failover.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Cloud Router managing dynamic BGP route exchanges over hybrid links is under consideration.",
    options: [
      { id: 'A', text: "Deploy Google Cloud Router and establish Border Gateway Protocol (BGP) sessions with on-premises routers." },
      { id: 'B', text: "Configure static routes manually in the Google Cloud Console for every on-premises subnet." },
      { id: 'C', text: "Edit local /etc/network/interfaces files on individual virtual machines." },
      { id: 'D', text: "Use DNS round-robin routing to advertise on-premises subnets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Google Cloud Router and establish Border Gateway Protocol (BGP) sessions with on-premises routers. Google Cloud Router uses Border Gateway Protocol (BGP) to dynamically exchange routes between your Google Cloud VPC network and on-premises networks. If a link fails, BGP automatically updates route tables within seconds without manual intervention.",
    referenceUrl: "https://cloud.google.com/network-connectivity/docs/router/concepts/overview",
    tags: ["VPC Dynamic Routing", "Cloud Router", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-335",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Router and Dynamic BGP Routing: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates VPC Dynamic Routing to dynamically exchange IP route prefixes between an on-premises network and a Google Cloud VPC over an HA VPN tunnel with automated failover.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Cloud Router managing dynamic BGP route exchanges over hybrid links is under consideration.",
    options: [
      { id: 'A', text: "Deploy Google Cloud Router and establish Border Gateway Protocol (BGP) sessions with on-premises routers." },
      { id: 'B', text: "Configure static routes manually in the Google Cloud Console for every on-premises subnet." },
      { id: 'C', text: "Edit local /etc/network/interfaces files on individual virtual machines." },
      { id: 'D', text: "Use DNS round-robin routing to advertise on-premises subnets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Google Cloud Router and establish Border Gateway Protocol (BGP) sessions with on-premises routers. Google Cloud Router uses Border Gateway Protocol (BGP) to dynamically exchange routes between your Google Cloud VPC network and on-premises networks. If a link fails, BGP automatically updates route tables within seconds without manual intervention.",
    referenceUrl: "https://cloud.google.com/network-connectivity/docs/router/concepts/overview",
    tags: ["VPC Dynamic Routing", "Cloud Router", "Resilience Failure"]
  },
  {
    id: "gcp-pca-336",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Regional Managed Instance Groups (MIGs): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Compute Engine to deploy an auto-scaling application across three availability zones within a region so that a single zonal outage leaves two-thirds of compute capacity fully functional.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Regional MIGs distributing identical VMs across 3 zones is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Regional Managed Instance Group (MIG) distributing instances across multiple zones." },
      { id: 'B', text: "Deploy a Zonal Managed Instance Group in zone-a only." },
      { id: 'C', text: "Manually deploy single virtual machines in two separate regions." },
      { id: 'D', text: "Host the application on an unmanaged local physical server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Regional Managed Instance Group (MIG) distributing instances across multiple zones. Regional Managed Instance Groups (MIGs) distribute virtual machine instances across multiple availability zones within a single region. This provides superior high availability compared to zonal MIGs, protecting workloads from zonal failures while sharing a single load balancer backend.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups/distributing-instances-with-regional-instance-groups",
    tags: ["Compute Engine", "Compute Engine", "Dr Failover"]
  },
  {
    id: "gcp-pca-337",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Regional Managed Instance Groups (MIGs): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Compute Engine to deploy an auto-scaling application across three availability zones within a region so that a single zonal outage leaves two-thirds of compute capacity fully functional.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Regional MIGs distributing identical VMs across 3 zones is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Regional Managed Instance Group (MIG) distributing instances across multiple zones." },
      { id: 'B', text: "Deploy a Zonal Managed Instance Group in zone-a only." },
      { id: 'C', text: "Manually deploy single virtual machines in two separate regions." },
      { id: 'D', text: "Host the application on an unmanaged local physical server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Regional Managed Instance Group (MIG) distributing instances across multiple zones. Regional Managed Instance Groups (MIGs) distribute virtual machine instances across multiple availability zones within a single region. This provides superior high availability compared to zonal MIGs, protecting workloads from zonal failures while sharing a single load balancer backend.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups/distributing-instances-with-regional-instance-groups",
    tags: ["Compute Engine", "Compute Engine", "High Load Scale"]
  },
  {
    id: "gcp-pca-338",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Regional Managed Instance Groups (MIGs): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Compute Engine to deploy an auto-scaling application across three availability zones within a region so that a single zonal outage leaves two-thirds of compute capacity fully functional.",
    question: "Which solution properly implements these mandatory security and governance controls? Regional MIGs distributing identical VMs across 3 zones is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Regional Managed Instance Group (MIG) distributing instances across multiple zones." },
      { id: 'B', text: "Deploy a Zonal Managed Instance Group in zone-a only." },
      { id: 'C', text: "Manually deploy single virtual machines in two separate regions." },
      { id: 'D', text: "Host the application on an unmanaged local physical server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Regional Managed Instance Group (MIG) distributing instances across multiple zones. Regional Managed Instance Groups (MIGs) distribute virtual machine instances across multiple availability zones within a single region. This provides superior high availability compared to zonal MIGs, protecting workloads from zonal failures while sharing a single load balancer backend.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups/distributing-instances-with-regional-instance-groups",
    tags: ["Compute Engine", "Compute Engine", "Security Compliance"]
  },
  {
    id: "gcp-pca-339",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Regional Managed Instance Groups (MIGs): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Compute Engine to deploy an auto-scaling application across three availability zones within a region so that a single zonal outage leaves two-thirds of compute capacity fully functional.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Regional MIGs distributing identical VMs across 3 zones is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Regional Managed Instance Group (MIG) distributing instances across multiple zones." },
      { id: 'B', text: "Deploy a Zonal Managed Instance Group in zone-a only." },
      { id: 'C', text: "Manually deploy single virtual machines in two separate regions." },
      { id: 'D', text: "Host the application on an unmanaged local physical server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Regional Managed Instance Group (MIG) distributing instances across multiple zones. Regional Managed Instance Groups (MIGs) distribute virtual machine instances across multiple availability zones within a single region. This provides superior high availability compared to zonal MIGs, protecting workloads from zonal failures while sharing a single load balancer backend.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups/distributing-instances-with-regional-instance-groups",
    tags: ["Compute Engine", "Compute Engine", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-340",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Regional Managed Instance Groups (MIGs): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Compute Engine to deploy an auto-scaling application across three availability zones within a region so that a single zonal outage leaves two-thirds of compute capacity fully functional.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Regional MIGs distributing identical VMs across 3 zones is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Regional Managed Instance Group (MIG) distributing instances across multiple zones." },
      { id: 'B', text: "Deploy a Zonal Managed Instance Group in zone-a only." },
      { id: 'C', text: "Manually deploy single virtual machines in two separate regions." },
      { id: 'D', text: "Host the application on an unmanaged local physical server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Regional Managed Instance Group (MIG) distributing instances across multiple zones. Regional Managed Instance Groups (MIGs) distribute virtual machine instances across multiple availability zones within a single region. This provides superior high availability compared to zonal MIGs, protecting workloads from zonal failures while sharing a single load balancer backend.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups/distributing-instances-with-regional-instance-groups",
    tags: ["Compute Engine", "Compute Engine", "Resilience Failure"]
  },
  {
    id: "gcp-pca-341",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Storage Dual-Region Buckets with Turbo Replication: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Cloud Storage to replicate regulatory compliance archive objects between two European regions (e.g. europe-west1 and europe-west4) with an SLA-backed replication window of under 15 minutes.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Dual-region storage buckets with Turbo Replication 15-minute RPO SLA is under consideration.",
    options: [
      { id: 'A', text: "Create a Dual-Region Cloud Storage bucket with Turbo Replication enabled." },
      { id: 'B', text: "Create a standard multi-region bucket without replication SLAs." },
      { id: 'C', text: "Schedule an hourly cron job on a VM to rsync files between regional buckets." },
      { id: 'D', text: "Write a custom Python script that downloads and re-uploads objects sequentially." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Dual-Region Cloud Storage bucket with Turbo Replication enabled. Cloud Storage Turbo Replication provides an SLA-backed guarantee that 100% of newly written objects are replicated to a secondary paired region within 15 minutes, meeting strict business continuity and disaster recovery compliance requirements.",
    referenceUrl: "https://cloud.google.com/storage/docs/turbo-replication",
    tags: ["Cloud Storage", "Cloud Storage", "Dr Failover"]
  },
  {
    id: "gcp-pca-342",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Storage Dual-Region Buckets with Turbo Replication: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Cloud Storage to replicate regulatory compliance archive objects between two European regions (e.g. europe-west1 and europe-west4) with an SLA-backed replication window of under 15 minutes.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Dual-region storage buckets with Turbo Replication 15-minute RPO SLA is under consideration.",
    options: [
      { id: 'A', text: "Create a Dual-Region Cloud Storage bucket with Turbo Replication enabled." },
      { id: 'B', text: "Create a standard multi-region bucket without replication SLAs." },
      { id: 'C', text: "Schedule an hourly cron job on a VM to rsync files between regional buckets." },
      { id: 'D', text: "Write a custom Python script that downloads and re-uploads objects sequentially." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Dual-Region Cloud Storage bucket with Turbo Replication enabled. Cloud Storage Turbo Replication provides an SLA-backed guarantee that 100% of newly written objects are replicated to a secondary paired region within 15 minutes, meeting strict business continuity and disaster recovery compliance requirements.",
    referenceUrl: "https://cloud.google.com/storage/docs/turbo-replication",
    tags: ["Cloud Storage", "Cloud Storage", "High Load Scale"]
  },
  {
    id: "gcp-pca-343",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Storage Dual-Region Buckets with Turbo Replication: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Cloud Storage to replicate regulatory compliance archive objects between two European regions (e.g. europe-west1 and europe-west4) with an SLA-backed replication window of under 15 minutes.",
    question: "Which solution properly implements these mandatory security and governance controls? Dual-region storage buckets with Turbo Replication 15-minute RPO SLA is under consideration.",
    options: [
      { id: 'A', text: "Create a Dual-Region Cloud Storage bucket with Turbo Replication enabled." },
      { id: 'B', text: "Create a standard multi-region bucket without replication SLAs." },
      { id: 'C', text: "Schedule an hourly cron job on a VM to rsync files between regional buckets." },
      { id: 'D', text: "Write a custom Python script that downloads and re-uploads objects sequentially." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Dual-Region Cloud Storage bucket with Turbo Replication enabled. Cloud Storage Turbo Replication provides an SLA-backed guarantee that 100% of newly written objects are replicated to a secondary paired region within 15 minutes, meeting strict business continuity and disaster recovery compliance requirements.",
    referenceUrl: "https://cloud.google.com/storage/docs/turbo-replication",
    tags: ["Cloud Storage", "Cloud Storage", "Security Compliance"]
  },
  {
    id: "gcp-pca-344",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Storage Dual-Region Buckets with Turbo Replication: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Cloud Storage to replicate regulatory compliance archive objects between two European regions (e.g. europe-west1 and europe-west4) with an SLA-backed replication window of under 15 minutes.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Dual-region storage buckets with Turbo Replication 15-minute RPO SLA is under consideration.",
    options: [
      { id: 'A', text: "Create a Dual-Region Cloud Storage bucket with Turbo Replication enabled." },
      { id: 'B', text: "Create a standard multi-region bucket without replication SLAs." },
      { id: 'C', text: "Schedule an hourly cron job on a VM to rsync files between regional buckets." },
      { id: 'D', text: "Write a custom Python script that downloads and re-uploads objects sequentially." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Dual-Region Cloud Storage bucket with Turbo Replication enabled. Cloud Storage Turbo Replication provides an SLA-backed guarantee that 100% of newly written objects are replicated to a secondary paired region within 15 minutes, meeting strict business continuity and disaster recovery compliance requirements.",
    referenceUrl: "https://cloud.google.com/storage/docs/turbo-replication",
    tags: ["Cloud Storage", "Cloud Storage", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-345",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Storage Dual-Region Buckets with Turbo Replication: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Cloud Storage to replicate regulatory compliance archive objects between two European regions (e.g. europe-west1 and europe-west4) with an SLA-backed replication window of under 15 minutes.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Dual-region storage buckets with Turbo Replication 15-minute RPO SLA is under consideration.",
    options: [
      { id: 'A', text: "Create a Dual-Region Cloud Storage bucket with Turbo Replication enabled." },
      { id: 'B', text: "Create a standard multi-region bucket without replication SLAs." },
      { id: 'C', text: "Schedule an hourly cron job on a VM to rsync files between regional buckets." },
      { id: 'D', text: "Write a custom Python script that downloads and re-uploads objects sequentially." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Dual-Region Cloud Storage bucket with Turbo Replication enabled. Cloud Storage Turbo Replication provides an SLA-backed guarantee that 100% of newly written objects are replicated to a secondary paired region within 15 minutes, meeting strict business continuity and disaster recovery compliance requirements.",
    referenceUrl: "https://cloud.google.com/storage/docs/turbo-replication",
    tags: ["Cloud Storage", "Cloud Storage", "Resilience Failure"]
  },
  {
    id: "gcp-pca-346",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "GKE Private Clusters and Authorized Networks: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates GKE Security to deploy a GKE cluster where worker nodes have zero public IP addresses and the Kubernetes API server endpoint is accessible only from an authorized corporate office CIDR block.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? GKE Private Clusters with isolated nodes and master authorized networks is under consideration.",
    options: [
      { id: 'A', text: "Deploy a GKE Private Cluster and configure Master Authorized Networks with the corporate CIDR range." },
      { id: 'B', text: "Deploy a standard public GKE cluster with 0.0.0.0/0 master access." },
      { id: 'C', text: "Assign external public IP addresses to all GKE node pool instances." },
      { id: 'D', text: "Disable Kubernetes RBAC authentication on the cluster control plane." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a GKE Private Cluster and configure Master Authorized Networks with the corporate CIDR range. In a GKE Private Cluster, worker nodes have private IP addresses only, completely isolated from direct public internet access. Master Authorized Networks restricts access to the cluster's control plane API endpoint to designated, trusted IP CIDR blocks.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept",
    tags: ["GKE Security", "GKE Security", "Dr Failover"]
  },
  {
    id: "gcp-pca-347",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "GKE Private Clusters and Authorized Networks: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates GKE Security to deploy a GKE cluster where worker nodes have zero public IP addresses and the Kubernetes API server endpoint is accessible only from an authorized corporate office CIDR block.",
    question: "Which architectural approach should the team select to manage this demand efficiently? GKE Private Clusters with isolated nodes and master authorized networks is under consideration.",
    options: [
      { id: 'A', text: "Deploy a GKE Private Cluster and configure Master Authorized Networks with the corporate CIDR range." },
      { id: 'B', text: "Deploy a standard public GKE cluster with 0.0.0.0/0 master access." },
      { id: 'C', text: "Assign external public IP addresses to all GKE node pool instances." },
      { id: 'D', text: "Disable Kubernetes RBAC authentication on the cluster control plane." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a GKE Private Cluster and configure Master Authorized Networks with the corporate CIDR range. In a GKE Private Cluster, worker nodes have private IP addresses only, completely isolated from direct public internet access. Master Authorized Networks restricts access to the cluster's control plane API endpoint to designated, trusted IP CIDR blocks.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept",
    tags: ["GKE Security", "GKE Security", "High Load Scale"]
  },
  {
    id: "gcp-pca-348",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "GKE Private Clusters and Authorized Networks: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates GKE Security to deploy a GKE cluster where worker nodes have zero public IP addresses and the Kubernetes API server endpoint is accessible only from an authorized corporate office CIDR block.",
    question: "Which solution properly implements these mandatory security and governance controls? GKE Private Clusters with isolated nodes and master authorized networks is under consideration.",
    options: [
      { id: 'A', text: "Deploy a GKE Private Cluster and configure Master Authorized Networks with the corporate CIDR range." },
      { id: 'B', text: "Deploy a standard public GKE cluster with 0.0.0.0/0 master access." },
      { id: 'C', text: "Assign external public IP addresses to all GKE node pool instances." },
      { id: 'D', text: "Disable Kubernetes RBAC authentication on the cluster control plane." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a GKE Private Cluster and configure Master Authorized Networks with the corporate CIDR range. In a GKE Private Cluster, worker nodes have private IP addresses only, completely isolated from direct public internet access. Master Authorized Networks restricts access to the cluster's control plane API endpoint to designated, trusted IP CIDR blocks.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept",
    tags: ["GKE Security", "GKE Security", "Security Compliance"]
  },
  {
    id: "gcp-pca-349",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "GKE Private Clusters and Authorized Networks: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates GKE Security to deploy a GKE cluster where worker nodes have zero public IP addresses and the Kubernetes API server endpoint is accessible only from an authorized corporate office CIDR block.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? GKE Private Clusters with isolated nodes and master authorized networks is under consideration.",
    options: [
      { id: 'A', text: "Deploy a GKE Private Cluster and configure Master Authorized Networks with the corporate CIDR range." },
      { id: 'B', text: "Deploy a standard public GKE cluster with 0.0.0.0/0 master access." },
      { id: 'C', text: "Assign external public IP addresses to all GKE node pool instances." },
      { id: 'D', text: "Disable Kubernetes RBAC authentication on the cluster control plane." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a GKE Private Cluster and configure Master Authorized Networks with the corporate CIDR range. In a GKE Private Cluster, worker nodes have private IP addresses only, completely isolated from direct public internet access. Master Authorized Networks restricts access to the cluster's control plane API endpoint to designated, trusted IP CIDR blocks.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept",
    tags: ["GKE Security", "GKE Security", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-350",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "GKE Private Clusters and Authorized Networks: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates GKE Security to deploy a GKE cluster where worker nodes have zero public IP addresses and the Kubernetes API server endpoint is accessible only from an authorized corporate office CIDR block.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? GKE Private Clusters with isolated nodes and master authorized networks is under consideration.",
    options: [
      { id: 'A', text: "Deploy a GKE Private Cluster and configure Master Authorized Networks with the corporate CIDR range." },
      { id: 'B', text: "Deploy a standard public GKE cluster with 0.0.0.0/0 master access." },
      { id: 'C', text: "Assign external public IP addresses to all GKE node pool instances." },
      { id: 'D', text: "Disable Kubernetes RBAC authentication on the cluster control plane." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a GKE Private Cluster and configure Master Authorized Networks with the corporate CIDR range. In a GKE Private Cluster, worker nodes have private IP addresses only, completely isolated from direct public internet access. Master Authorized Networks restricts access to the cluster's control plane API endpoint to designated, trusted IP CIDR blocks.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept",
    tags: ["GKE Security", "GKE Security", "Resilience Failure"]
  }
];

export default GCP_PCA_QUESTIONS_14;
