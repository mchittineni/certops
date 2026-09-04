export const AWS_SCS_QUESTIONS_15 = [
  {
    id: "aws-scs-351",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Gateway Load Balancer (GWLB) Transparent Appliance Routing: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates Gateway Load Balancers to route all ingress and egress VPC traffic transparently through a scalable fleet of third-party deep packet inspection appliances.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Routing VPC traffic through third-party firewall appliances via GENEVE encapsulation is under consideration.",
    options: [
      { id: 'A', text: "Route traffic through public internet VPN tunnels to on-premises hardware appliances." },
      { id: 'B', text: "Configure EC2 instances as static NAT routers with single points of failure and source NAT port exhaustion." },
      { id: 'C', text: "Deploy a Gateway Load Balancer (GWLB) backed by a firewall appliance fleet, using Gateway Load Balancer Endpoints (GWLBE) in consumer VPCs." },
      { id: 'D', text: "Disable deep packet inspection to improve network throughput." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy a Gateway Load Balancer (GWLB) backed by a firewall appliance fleet, using Gateway Load Balancer Endpoints (GWLBE) in consumer VPCs. AWS Gateway Load Balancer (GWLB) enables transparent deployment of third-party virtual appliances (firewalls, IDS/IPS). It uses GENEVE encapsulation (port 6081) to preserve original packet headers while scaling appliances elastically across Availability Zones.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/introduction.html",
    tags: ["Gateway Load Balancers", "Gateway Load Balancer", "Enterprise Governance"]
  },
  {
    id: "aws-scs-352",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Gateway Load Balancer (GWLB) Transparent Appliance Routing: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates Gateway Load Balancers to route all ingress and egress VPC traffic transparently through a scalable fleet of third-party deep packet inspection appliances.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Routing VPC traffic through third-party firewall appliances via GENEVE encapsulation is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Gateway Load Balancer (GWLB) backed by a firewall appliance fleet, using Gateway Load Balancer Endpoints (GWLBE) in consumer VPCs." },
      { id: 'B', text: "Disable deep packet inspection to improve network throughput." },
      { id: 'C', text: "Route traffic through public internet VPN tunnels to on-premises hardware appliances." },
      { id: 'D', text: "Configure EC2 instances as static NAT routers with single points of failure and source NAT port exhaustion." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Gateway Load Balancer (GWLB) backed by a firewall appliance fleet, using Gateway Load Balancer Endpoints (GWLBE) in consumer VPCs. AWS Gateway Load Balancer (GWLB) enables transparent deployment of third-party virtual appliances (firewalls, IDS/IPS). It uses GENEVE encapsulation (port 6081) to preserve original packet headers while scaling appliances elastically across Availability Zones.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/introduction.html",
    tags: ["Gateway Load Balancers", "Gateway Load Balancer", "Incident Containment"]
  },
  {
    id: "aws-scs-353",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Gateway Load Balancer (GWLB) Transparent Appliance Routing: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates Gateway Load Balancers to route all ingress and egress VPC traffic transparently through a scalable fleet of third-party deep packet inspection appliances.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Routing VPC traffic through third-party firewall appliances via GENEVE encapsulation is under consideration.",
    options: [
      { id: 'A', text: "Disable deep packet inspection to improve network throughput." },
      { id: 'B', text: "Deploy a Gateway Load Balancer (GWLB) backed by a firewall appliance fleet, using Gateway Load Balancer Endpoints (GWLBE) in consumer VPCs." },
      { id: 'C', text: "Configure EC2 instances as static NAT routers with single points of failure and source NAT port exhaustion." },
      { id: 'D', text: "Route traffic through public internet VPN tunnels to on-premises hardware appliances." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy a Gateway Load Balancer (GWLB) backed by a firewall appliance fleet, using Gateway Load Balancer Endpoints (GWLBE) in consumer VPCs. AWS Gateway Load Balancer (GWLB) enables transparent deployment of third-party virtual appliances (firewalls, IDS/IPS). It uses GENEVE encapsulation (port 6081) to preserve original packet headers while scaling appliances elastically across Availability Zones.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/introduction.html",
    tags: ["Gateway Load Balancers", "Gateway Load Balancer", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-354",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Gateway Load Balancer (GWLB) Transparent Appliance Routing: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates Gateway Load Balancers to route all ingress and egress VPC traffic transparently through a scalable fleet of third-party deep packet inspection appliances.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Routing VPC traffic through third-party firewall appliances via GENEVE encapsulation is under consideration.",
    options: [
      { id: 'A', text: "Route traffic through public internet VPN tunnels to on-premises hardware appliances." },
      { id: 'B', text: "Disable deep packet inspection to improve network throughput." },
      { id: 'C', text: "Deploy a Gateway Load Balancer (GWLB) backed by a firewall appliance fleet, using Gateway Load Balancer Endpoints (GWLBE) in consumer VPCs." },
      { id: 'D', text: "Configure EC2 instances as static NAT routers with single points of failure and source NAT port exhaustion." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy a Gateway Load Balancer (GWLB) backed by a firewall appliance fleet, using Gateway Load Balancer Endpoints (GWLBE) in consumer VPCs. AWS Gateway Load Balancer (GWLB) enables transparent deployment of third-party virtual appliances (firewalls, IDS/IPS). It uses GENEVE encapsulation (port 6081) to preserve original packet headers while scaling appliances elastically across Availability Zones.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/introduction.html",
    tags: ["Gateway Load Balancers", "Gateway Load Balancer", "Data Protection"]
  },
  {
    id: "aws-scs-355",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Gateway Load Balancer (GWLB) Transparent Appliance Routing: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates Gateway Load Balancers to route all ingress and egress VPC traffic transparently through a scalable fleet of third-party deep packet inspection appliances.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Routing VPC traffic through third-party firewall appliances via GENEVE encapsulation is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Gateway Load Balancer (GWLB) backed by a firewall appliance fleet, using Gateway Load Balancer Endpoints (GWLBE) in consumer VPCs." },
      { id: 'B', text: "Route traffic through public internet VPN tunnels to on-premises hardware appliances." },
      { id: 'C', text: "Disable deep packet inspection to improve network throughput." },
      { id: 'D', text: "Configure EC2 instances as static NAT routers with single points of failure and source NAT port exhaustion." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Gateway Load Balancer (GWLB) backed by a firewall appliance fleet, using Gateway Load Balancer Endpoints (GWLBE) in consumer VPCs. AWS Gateway Load Balancer (GWLB) enables transparent deployment of third-party virtual appliances (firewalls, IDS/IPS). It uses GENEVE encapsulation (port 6081) to preserve original packet headers while scaling appliances elastically across Availability Zones.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/introduction.html",
    tags: ["Gateway Load Balancers", "Gateway Load Balancer", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-356",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Systems Manager (SSM) Session Manager for Secure Administration: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates SSM Session Manager to allow systems engineers to access private EC2 instances administrative shells without opening inbound port 22 or maintaining bastion hosts.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? SSH-free bastion-less instance administration with KMS encryption and CloudWatch logging is under consideration.",
    options: [
      { id: 'A', text: "Use AWS Systems Manager Session Manager, encrypting sessions with a customer-managed KMS key and streaming audit logs to CloudWatch." },
      { id: 'B', text: "Store private SSH keys in a public GitHub repository so all team members can access them." },
      { id: 'C', text: "Deploy a single unpatched Linux bastion host with public IP and static credentials." },
      { id: 'D', text: "Open inbound SSH port 22 to 0.0.0.0/0 on all production EC2 instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use AWS Systems Manager Session Manager, encrypting sessions with a customer-managed KMS key and streaming audit logs to CloudWatch. SSM Session Manager provides secure instance management without opening inbound ports, managing bastion hosts, or distributing SSH keys. All administrative sessions communicate outbound over TLS via the SSM Agent, are authenticated via IAM, and can be encrypted via KMS and fully logged to S3/CloudWatch.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",
    tags: ["SSM Session Manager", "SSM Session Manager", "Enterprise Governance"]
  },
  {
    id: "aws-scs-357",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Systems Manager (SSM) Session Manager for Secure Administration: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates SSM Session Manager to allow systems engineers to access private EC2 instances administrative shells without opening inbound port 22 or maintaining bastion hosts.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? SSH-free bastion-less instance administration with KMS encryption and CloudWatch logging is under consideration.",
    options: [
      { id: 'A', text: "Deploy a single unpatched Linux bastion host with public IP and static credentials." },
      { id: 'B', text: "Use AWS Systems Manager Session Manager, encrypting sessions with a customer-managed KMS key and streaming audit logs to CloudWatch." },
      { id: 'C', text: "Open inbound SSH port 22 to 0.0.0.0/0 on all production EC2 instances." },
      { id: 'D', text: "Store private SSH keys in a public GitHub repository so all team members can access them." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use AWS Systems Manager Session Manager, encrypting sessions with a customer-managed KMS key and streaming audit logs to CloudWatch. SSM Session Manager provides secure instance management without opening inbound ports, managing bastion hosts, or distributing SSH keys. All administrative sessions communicate outbound over TLS via the SSM Agent, are authenticated via IAM, and can be encrypted via KMS and fully logged to S3/CloudWatch.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",
    tags: ["SSM Session Manager", "SSM Session Manager", "Incident Containment"]
  },
  {
    id: "aws-scs-358",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Systems Manager (SSM) Session Manager for Secure Administration: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates SSM Session Manager to allow systems engineers to access private EC2 instances administrative shells without opening inbound port 22 or maintaining bastion hosts.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? SSH-free bastion-less instance administration with KMS encryption and CloudWatch logging is under consideration.",
    options: [
      { id: 'A', text: "Deploy a single unpatched Linux bastion host with public IP and static credentials." },
      { id: 'B', text: "Use AWS Systems Manager Session Manager, encrypting sessions with a customer-managed KMS key and streaming audit logs to CloudWatch." },
      { id: 'C', text: "Store private SSH keys in a public GitHub repository so all team members can access them." },
      { id: 'D', text: "Open inbound SSH port 22 to 0.0.0.0/0 on all production EC2 instances." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use AWS Systems Manager Session Manager, encrypting sessions with a customer-managed KMS key and streaming audit logs to CloudWatch. SSM Session Manager provides secure instance management without opening inbound ports, managing bastion hosts, or distributing SSH keys. All administrative sessions communicate outbound over TLS via the SSM Agent, are authenticated via IAM, and can be encrypted via KMS and fully logged to S3/CloudWatch.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",
    tags: ["SSM Session Manager", "SSM Session Manager", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-359",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Systems Manager (SSM) Session Manager for Secure Administration: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates SSM Session Manager to allow systems engineers to access private EC2 instances administrative shells without opening inbound port 22 or maintaining bastion hosts.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? SSH-free bastion-less instance administration with KMS encryption and CloudWatch logging is under consideration.",
    options: [
      { id: 'A', text: "Store private SSH keys in a public GitHub repository so all team members can access them." },
      { id: 'B', text: "Open inbound SSH port 22 to 0.0.0.0/0 on all production EC2 instances." },
      { id: 'C', text: "Use AWS Systems Manager Session Manager, encrypting sessions with a customer-managed KMS key and streaming audit logs to CloudWatch." },
      { id: 'D', text: "Deploy a single unpatched Linux bastion host with public IP and static credentials." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use AWS Systems Manager Session Manager, encrypting sessions with a customer-managed KMS key and streaming audit logs to CloudWatch. SSM Session Manager provides secure instance management without opening inbound ports, managing bastion hosts, or distributing SSH keys. All administrative sessions communicate outbound over TLS via the SSM Agent, are authenticated via IAM, and can be encrypted via KMS and fully logged to S3/CloudWatch.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",
    tags: ["SSM Session Manager", "SSM Session Manager", "Data Protection"]
  },
  {
    id: "aws-scs-360",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Systems Manager (SSM) Session Manager for Secure Administration: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates SSM Session Manager to allow systems engineers to access private EC2 instances administrative shells without opening inbound port 22 or maintaining bastion hosts.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? SSH-free bastion-less instance administration with KMS encryption and CloudWatch logging is under consideration.",
    options: [
      { id: 'A', text: "Store private SSH keys in a public GitHub repository so all team members can access them." },
      { id: 'B', text: "Deploy a single unpatched Linux bastion host with public IP and static credentials." },
      { id: 'C', text: "Open inbound SSH port 22 to 0.0.0.0/0 on all production EC2 instances." },
      { id: 'D', text: "Use AWS Systems Manager Session Manager, encrypting sessions with a customer-managed KMS key and streaming audit logs to CloudWatch." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use AWS Systems Manager Session Manager, encrypting sessions with a customer-managed KMS key and streaming audit logs to CloudWatch. SSM Session Manager provides secure instance management without opening inbound ports, managing bastion hosts, or distributing SSH keys. All administrative sessions communicate outbound over TLS via the SSM Agent, are authenticated via IAM, and can be encrypted via KMS and fully logged to S3/CloudWatch.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",
    tags: ["SSM Session Manager", "SSM Session Manager", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-361",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Systems Manager Patch Manager Baseline Governance: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates SSM Patch Manager to automate the installation of critical operating system security patches across thousands of Linux and Windows EC2 instances.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Automated OS patching baselines, maintenance windows, and compliance reporting across fleets is under consideration.",
    options: [
      { id: 'A', text: "Configure SSM Patch Manager with custom patch baselines, auto-approval delays, and scheduled Maintenance Windows." },
      { id: 'B', text: "Disable operating system security updates to avoid testing application compatibility." },
      { id: 'C', text: "Reboot servers at random times during peak customer business hours without notice." },
      { id: 'D', text: "Log into each server individually via SSH every Sunday to run manual yum/apt update commands." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure SSM Patch Manager with custom patch baselines, auto-approval delays, and scheduled Maintenance Windows. Systems Manager Patch Manager automates operating system patching against predefined patch baselines (e.g., auto-approving Critical and Security updates with an N-day delay). Scheduled Maintenance Windows execute patching systematically, generating compliance reports in Security Hub and Config.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
    tags: ["SSM Patch Manager", "Patch Manager", "Enterprise Governance"]
  },
  {
    id: "aws-scs-362",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Systems Manager Patch Manager Baseline Governance: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates SSM Patch Manager to automate the installation of critical operating system security patches across thousands of Linux and Windows EC2 instances.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Automated OS patching baselines, maintenance windows, and compliance reporting across fleets is under consideration.",
    options: [
      { id: 'A', text: "Disable operating system security updates to avoid testing application compatibility." },
      { id: 'B', text: "Configure SSM Patch Manager with custom patch baselines, auto-approval delays, and scheduled Maintenance Windows." },
      { id: 'C', text: "Reboot servers at random times during peak customer business hours without notice." },
      { id: 'D', text: "Log into each server individually via SSH every Sunday to run manual yum/apt update commands." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure SSM Patch Manager with custom patch baselines, auto-approval delays, and scheduled Maintenance Windows. Systems Manager Patch Manager automates operating system patching against predefined patch baselines (e.g., auto-approving Critical and Security updates with an N-day delay). Scheduled Maintenance Windows execute patching systematically, generating compliance reports in Security Hub and Config.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
    tags: ["SSM Patch Manager", "Patch Manager", "Incident Containment"]
  },
  {
    id: "aws-scs-363",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Systems Manager Patch Manager Baseline Governance: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates SSM Patch Manager to automate the installation of critical operating system security patches across thousands of Linux and Windows EC2 instances.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Automated OS patching baselines, maintenance windows, and compliance reporting across fleets is under consideration.",
    options: [
      { id: 'A', text: "Reboot servers at random times during peak customer business hours without notice." },
      { id: 'B', text: "Log into each server individually via SSH every Sunday to run manual yum/apt update commands." },
      { id: 'C', text: "Configure SSM Patch Manager with custom patch baselines, auto-approval delays, and scheduled Maintenance Windows." },
      { id: 'D', text: "Disable operating system security updates to avoid testing application compatibility." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure SSM Patch Manager with custom patch baselines, auto-approval delays, and scheduled Maintenance Windows. Systems Manager Patch Manager automates operating system patching against predefined patch baselines (e.g., auto-approving Critical and Security updates with an N-day delay). Scheduled Maintenance Windows execute patching systematically, generating compliance reports in Security Hub and Config.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
    tags: ["SSM Patch Manager", "Patch Manager", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-364",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Systems Manager Patch Manager Baseline Governance: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates SSM Patch Manager to automate the installation of critical operating system security patches across thousands of Linux and Windows EC2 instances.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Automated OS patching baselines, maintenance windows, and compliance reporting across fleets is under consideration.",
    options: [
      { id: 'A', text: "Configure SSM Patch Manager with custom patch baselines, auto-approval delays, and scheduled Maintenance Windows." },
      { id: 'B', text: "Disable operating system security updates to avoid testing application compatibility." },
      { id: 'C', text: "Reboot servers at random times during peak customer business hours without notice." },
      { id: 'D', text: "Log into each server individually via SSH every Sunday to run manual yum/apt update commands." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure SSM Patch Manager with custom patch baselines, auto-approval delays, and scheduled Maintenance Windows. Systems Manager Patch Manager automates operating system patching against predefined patch baselines (e.g., auto-approving Critical and Security updates with an N-day delay). Scheduled Maintenance Windows execute patching systematically, generating compliance reports in Security Hub and Config.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
    tags: ["SSM Patch Manager", "Patch Manager", "Data Protection"]
  },
  {
    id: "aws-scs-365",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Systems Manager Patch Manager Baseline Governance: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates SSM Patch Manager to automate the installation of critical operating system security patches across thousands of Linux and Windows EC2 instances.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Automated OS patching baselines, maintenance windows, and compliance reporting across fleets is under consideration.",
    options: [
      { id: 'A', text: "Configure SSM Patch Manager with custom patch baselines, auto-approval delays, and scheduled Maintenance Windows." },
      { id: 'B', text: "Log into each server individually via SSH every Sunday to run manual yum/apt update commands." },
      { id: 'C', text: "Reboot servers at random times during peak customer business hours without notice." },
      { id: 'D', text: "Disable operating system security updates to avoid testing application compatibility." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure SSM Patch Manager with custom patch baselines, auto-approval delays, and scheduled Maintenance Windows. Systems Manager Patch Manager automates operating system patching against predefined patch baselines (e.g., auto-approving Critical and Security updates with an N-day delay). Scheduled Maintenance Windows execute patching systematically, generating compliance reports in Security Hub and Config.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
    tags: ["SSM Patch Manager", "Patch Manager", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-366",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Amazon EKS Cluster Security and IRSA Hardening: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates Amazon EKS Security to restrict pods in an Amazon EKS cluster so they can only access their specific DynamoDB table and prevent cluster API exposure to the internet.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? IAM Roles for Service Accounts (IRSA), private API endpoints, and Kubernetes NetworkPolicies is under consideration.",
    options: [
      { id: 'A', text: "Configure IAM Roles for Service Accounts (IRSA) with least-privilege policies, and set the EKS cluster API endpoint to Private-only." },
      { id: 'B', text: "Expose the Kubernetes API server endpoint to 0.0.0.0/0 without authentication." },
      { id: 'C', text: "Store AWS access keys as plaintext environment variables inside pod definitions." },
      { id: 'D', text: "Attach the AdministratorAccess IAM policy to the worker node EC2 instance profile, granting all pods full AWS permissions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure IAM Roles for Service Accounts (IRSA) with least-privilege policies, and set the EKS cluster API endpoint to Private-only. Hardening Amazon EKS requires: 1) IAM Roles for Service Accounts (IRSA) using OIDC federation so individual pods assume scoped IAM roles without node-level permissions, 2) Private API endpoints accessible only via VPC/VPN, and 3) NetworkPolicies restricting inter-pod east-west traffic.",
    referenceUrl: "https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html",
    tags: ["Amazon EKS Security", "EKS Security", "Enterprise Governance"]
  },
  {
    id: "aws-scs-367",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Amazon EKS Cluster Security and IRSA Hardening: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates Amazon EKS Security to restrict pods in an Amazon EKS cluster so they can only access their specific DynamoDB table and prevent cluster API exposure to the internet.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? IAM Roles for Service Accounts (IRSA), private API endpoints, and Kubernetes NetworkPolicies is under consideration.",
    options: [
      { id: 'A', text: "Expose the Kubernetes API server endpoint to 0.0.0.0/0 without authentication." },
      { id: 'B', text: "Store AWS access keys as plaintext environment variables inside pod definitions." },
      { id: 'C', text: "Attach the AdministratorAccess IAM policy to the worker node EC2 instance profile, granting all pods full AWS permissions." },
      { id: 'D', text: "Configure IAM Roles for Service Accounts (IRSA) with least-privilege policies, and set the EKS cluster API endpoint to Private-only." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure IAM Roles for Service Accounts (IRSA) with least-privilege policies, and set the EKS cluster API endpoint to Private-only. Hardening Amazon EKS requires: 1) IAM Roles for Service Accounts (IRSA) using OIDC federation so individual pods assume scoped IAM roles without node-level permissions, 2) Private API endpoints accessible only via VPC/VPN, and 3) NetworkPolicies restricting inter-pod east-west traffic.",
    referenceUrl: "https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html",
    tags: ["Amazon EKS Security", "EKS Security", "Incident Containment"]
  },
  {
    id: "aws-scs-368",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Amazon EKS Cluster Security and IRSA Hardening: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates Amazon EKS Security to restrict pods in an Amazon EKS cluster so they can only access their specific DynamoDB table and prevent cluster API exposure to the internet.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? IAM Roles for Service Accounts (IRSA), private API endpoints, and Kubernetes NetworkPolicies is under consideration.",
    options: [
      { id: 'A', text: "Store AWS access keys as plaintext environment variables inside pod definitions." },
      { id: 'B', text: "Expose the Kubernetes API server endpoint to 0.0.0.0/0 without authentication." },
      { id: 'C', text: "Attach the AdministratorAccess IAM policy to the worker node EC2 instance profile, granting all pods full AWS permissions." },
      { id: 'D', text: "Configure IAM Roles for Service Accounts (IRSA) with least-privilege policies, and set the EKS cluster API endpoint to Private-only." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure IAM Roles for Service Accounts (IRSA) with least-privilege policies, and set the EKS cluster API endpoint to Private-only. Hardening Amazon EKS requires: 1) IAM Roles for Service Accounts (IRSA) using OIDC federation so individual pods assume scoped IAM roles without node-level permissions, 2) Private API endpoints accessible only via VPC/VPN, and 3) NetworkPolicies restricting inter-pod east-west traffic.",
    referenceUrl: "https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html",
    tags: ["Amazon EKS Security", "EKS Security", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-369",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Amazon EKS Cluster Security and IRSA Hardening: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates Amazon EKS Security to restrict pods in an Amazon EKS cluster so they can only access their specific DynamoDB table and prevent cluster API exposure to the internet.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? IAM Roles for Service Accounts (IRSA), private API endpoints, and Kubernetes NetworkPolicies is under consideration.",
    options: [
      { id: 'A', text: "Configure IAM Roles for Service Accounts (IRSA) with least-privilege policies, and set the EKS cluster API endpoint to Private-only." },
      { id: 'B', text: "Store AWS access keys as plaintext environment variables inside pod definitions." },
      { id: 'C', text: "Expose the Kubernetes API server endpoint to 0.0.0.0/0 without authentication." },
      { id: 'D', text: "Attach the AdministratorAccess IAM policy to the worker node EC2 instance profile, granting all pods full AWS permissions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure IAM Roles for Service Accounts (IRSA) with least-privilege policies, and set the EKS cluster API endpoint to Private-only. Hardening Amazon EKS requires: 1) IAM Roles for Service Accounts (IRSA) using OIDC federation so individual pods assume scoped IAM roles without node-level permissions, 2) Private API endpoints accessible only via VPC/VPN, and 3) NetworkPolicies restricting inter-pod east-west traffic.",
    referenceUrl: "https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html",
    tags: ["Amazon EKS Security", "EKS Security", "Data Protection"]
  },
  {
    id: "aws-scs-370",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Amazon EKS Cluster Security and IRSA Hardening: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates Amazon EKS Security to restrict pods in an Amazon EKS cluster so they can only access their specific DynamoDB table and prevent cluster API exposure to the internet.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? IAM Roles for Service Accounts (IRSA), private API endpoints, and Kubernetes NetworkPolicies is under consideration.",
    options: [
      { id: 'A', text: "Attach the AdministratorAccess IAM policy to the worker node EC2 instance profile, granting all pods full AWS permissions." },
      { id: 'B', text: "Store AWS access keys as plaintext environment variables inside pod definitions." },
      { id: 'C', text: "Expose the Kubernetes API server endpoint to 0.0.0.0/0 without authentication." },
      { id: 'D', text: "Configure IAM Roles for Service Accounts (IRSA) with least-privilege policies, and set the EKS cluster API endpoint to Private-only." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure IAM Roles for Service Accounts (IRSA) with least-privilege policies, and set the EKS cluster API endpoint to Private-only. Hardening Amazon EKS requires: 1) IAM Roles for Service Accounts (IRSA) using OIDC federation so individual pods assume scoped IAM roles without node-level permissions, 2) Private API endpoints accessible only via VPC/VPN, and 3) NetworkPolicies restricting inter-pod east-west traffic.",
    referenceUrl: "https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html",
    tags: ["Amazon EKS Security", "EKS Security", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-371",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Amazon CloudFront Origin Access Control (OAC): Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates CloudFront OAC to ensure users can only access private S3 bucket static assets through an encrypted CloudFront CDN distribution and not directly via S3 URLs.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Restricting Amazon S3 bucket access strictly to CloudFront distributions using SigV4 authentication is under consideration.",
    options: [
      { id: 'A', text: "Use deprecated Origin Access Identity (OAI) which lacks support for SSE-KMS encryption and dynamic PUT requests." },
      { id: 'B', text: "Disable CloudFront caching and force all requests to hit the backend origin directly." },
      { id: 'C', text: "Make the S3 bucket publicly readable to 0.0.0.0/0 so CloudFront can fetch objects." },
      { id: 'D', text: "Configure CloudFront Origin Access Control (OAC) with an S3 bucket policy allowing `s3:GetObject` only to the CloudFront distribution ARN." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure CloudFront Origin Access Control (OAC) with an S3 bucket policy allowing `s3:GetObject` only to the CloudFront distribution ARN. Origin Access Control (OAC) supersedes legacy Origin Access Identity (OAI). OAC uses AWS Signature Version 4 (SigV4) to authenticate requests between CloudFront and S3, supporting all AWS regions, SSE-KMS encrypted objects, and dynamic HTTP methods while keeping S3 buckets completely private.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html",
    tags: ["CloudFront OAC", "CloudFront OAC", "Enterprise Governance"]
  },
  {
    id: "aws-scs-372",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Amazon CloudFront Origin Access Control (OAC): Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates CloudFront OAC to ensure users can only access private S3 bucket static assets through an encrypted CloudFront CDN distribution and not directly via S3 URLs.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Restricting Amazon S3 bucket access strictly to CloudFront distributions using SigV4 authentication is under consideration.",
    options: [
      { id: 'A', text: "Configure CloudFront Origin Access Control (OAC) with an S3 bucket policy allowing `s3:GetObject` only to the CloudFront distribution ARN." },
      { id: 'B', text: "Disable CloudFront caching and force all requests to hit the backend origin directly." },
      { id: 'C', text: "Use deprecated Origin Access Identity (OAI) which lacks support for SSE-KMS encryption and dynamic PUT requests." },
      { id: 'D', text: "Make the S3 bucket publicly readable to 0.0.0.0/0 so CloudFront can fetch objects." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CloudFront Origin Access Control (OAC) with an S3 bucket policy allowing `s3:GetObject` only to the CloudFront distribution ARN. Origin Access Control (OAC) supersedes legacy Origin Access Identity (OAI). OAC uses AWS Signature Version 4 (SigV4) to authenticate requests between CloudFront and S3, supporting all AWS regions, SSE-KMS encrypted objects, and dynamic HTTP methods while keeping S3 buckets completely private.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html",
    tags: ["CloudFront OAC", "CloudFront OAC", "Incident Containment"]
  },
  {
    id: "aws-scs-373",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Amazon CloudFront Origin Access Control (OAC): Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates CloudFront OAC to ensure users can only access private S3 bucket static assets through an encrypted CloudFront CDN distribution and not directly via S3 URLs.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Restricting Amazon S3 bucket access strictly to CloudFront distributions using SigV4 authentication is under consideration.",
    options: [
      { id: 'A', text: "Make the S3 bucket publicly readable to 0.0.0.0/0 so CloudFront can fetch objects." },
      { id: 'B', text: "Disable CloudFront caching and force all requests to hit the backend origin directly." },
      { id: 'C', text: "Use deprecated Origin Access Identity (OAI) which lacks support for SSE-KMS encryption and dynamic PUT requests." },
      { id: 'D', text: "Configure CloudFront Origin Access Control (OAC) with an S3 bucket policy allowing `s3:GetObject` only to the CloudFront distribution ARN." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure CloudFront Origin Access Control (OAC) with an S3 bucket policy allowing `s3:GetObject` only to the CloudFront distribution ARN. Origin Access Control (OAC) supersedes legacy Origin Access Identity (OAI). OAC uses AWS Signature Version 4 (SigV4) to authenticate requests between CloudFront and S3, supporting all AWS regions, SSE-KMS encrypted objects, and dynamic HTTP methods while keeping S3 buckets completely private.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html",
    tags: ["CloudFront OAC", "CloudFront OAC", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-374",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Amazon CloudFront Origin Access Control (OAC): Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates CloudFront OAC to ensure users can only access private S3 bucket static assets through an encrypted CloudFront CDN distribution and not directly via S3 URLs.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Restricting Amazon S3 bucket access strictly to CloudFront distributions using SigV4 authentication is under consideration.",
    options: [
      { id: 'A', text: "Configure CloudFront Origin Access Control (OAC) with an S3 bucket policy allowing `s3:GetObject` only to the CloudFront distribution ARN." },
      { id: 'B', text: "Disable CloudFront caching and force all requests to hit the backend origin directly." },
      { id: 'C', text: "Make the S3 bucket publicly readable to 0.0.0.0/0 so CloudFront can fetch objects." },
      { id: 'D', text: "Use deprecated Origin Access Identity (OAI) which lacks support for SSE-KMS encryption and dynamic PUT requests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CloudFront Origin Access Control (OAC) with an S3 bucket policy allowing `s3:GetObject` only to the CloudFront distribution ARN. Origin Access Control (OAC) supersedes legacy Origin Access Identity (OAI). OAC uses AWS Signature Version 4 (SigV4) to authenticate requests between CloudFront and S3, supporting all AWS regions, SSE-KMS encrypted objects, and dynamic HTTP methods while keeping S3 buckets completely private.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html",
    tags: ["CloudFront OAC", "CloudFront OAC", "Data Protection"]
  },
  {
    id: "aws-scs-375",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Amazon CloudFront Origin Access Control (OAC): Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates CloudFront OAC to ensure users can only access private S3 bucket static assets through an encrypted CloudFront CDN distribution and not directly via S3 URLs.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Restricting Amazon S3 bucket access strictly to CloudFront distributions using SigV4 authentication is under consideration.",
    options: [
      { id: 'A', text: "Disable CloudFront caching and force all requests to hit the backend origin directly." },
      { id: 'B', text: "Configure CloudFront Origin Access Control (OAC) with an S3 bucket policy allowing `s3:GetObject` only to the CloudFront distribution ARN." },
      { id: 'C', text: "Use deprecated Origin Access Identity (OAI) which lacks support for SSE-KMS encryption and dynamic PUT requests." },
      { id: 'D', text: "Make the S3 bucket publicly readable to 0.0.0.0/0 so CloudFront can fetch objects." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure CloudFront Origin Access Control (OAC) with an S3 bucket policy allowing `s3:GetObject` only to the CloudFront distribution ARN. Origin Access Control (OAC) supersedes legacy Origin Access Identity (OAI). OAC uses AWS Signature Version 4 (SigV4) to authenticate requests between CloudFront and S3, supporting all AWS regions, SSE-KMS encrypted objects, and dynamic HTTP methods while keeping S3 buckets completely private.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html",
    tags: ["CloudFront OAC", "CloudFront OAC", "Infrastructure Defense"]
  }
];

export default AWS_SCS_QUESTIONS_15;
