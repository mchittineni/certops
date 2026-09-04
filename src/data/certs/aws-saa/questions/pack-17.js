export const AWS_SAA_QUESTIONS_17 = [
  {
    id: "aws-saa-401",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS WAF Bot Control and Rate Limiting: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on AWS WAF to protect an e-commerce checkout API from credential stuffing attacks, scraping bots, and brute force HTTP floods.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? AWS WAF Web ACL with Rate-Based Rules and Bot Control is being evaluated.",
    options: [
      { id: 'A', text: "Associate an AWS WAF Web ACL with the Application Load Balancer, enabling the AWSManagedRulesBotControlRuleSet and a rate-based rule per client IP." },
      { id: 'B', text: "Deploy an Amazon CloudWatch alarm to restart the EC2 instances when CPU exceeds 90%." },
      { id: 'C', text: "Configure a Network Access Control List (NACL) rule blocking all incoming traffic on port 80." },
      { id: 'D', text: "Increase the timeout on the backend Application Load Balancer to 300 seconds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate an AWS WAF Web ACL with the Application Load Balancer, enabling the AWSManagedRulesBotControlRuleSet and a rate-based rule per client IP. AWS WAF Bot Control detects and mitigates automated bot traffic like scrapers and credential stuffers using managed machine learning rules. Rate-based rules track request rates per client IP address and temporarily block IPs that exceed the threshold, protecting endpoints from brute force and denial of service attacks.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/waf-bot-control.html",
    tags: ["AWS WAF", "AWS WAF", "Dr Failover"]
  },
  {
    id: "aws-saa-402",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS WAF Bot Control and Rate Limiting: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on AWS WAF to protect an e-commerce checkout API from credential stuffing attacks, scraping bots, and brute force HTTP floods.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? AWS WAF Web ACL with Rate-Based Rules and Bot Control is being evaluated.",
    options: [
      { id: 'A', text: "Associate an AWS WAF Web ACL with the Application Load Balancer, enabling the AWSManagedRulesBotControlRuleSet and a rate-based rule per client IP." },
      { id: 'B', text: "Deploy an Amazon CloudWatch alarm to restart the EC2 instances when CPU exceeds 90%." },
      { id: 'C', text: "Configure a Network Access Control List (NACL) rule blocking all incoming traffic on port 80." },
      { id: 'D', text: "Increase the timeout on the backend Application Load Balancer to 300 seconds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate an AWS WAF Web ACL with the Application Load Balancer, enabling the AWSManagedRulesBotControlRuleSet and a rate-based rule per client IP. AWS WAF Bot Control detects and mitigates automated bot traffic like scrapers and credential stuffers using managed machine learning rules. Rate-based rules track request rates per client IP address and temporarily block IPs that exceed the threshold, protecting endpoints from brute force and denial of service attacks.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/waf-bot-control.html",
    tags: ["AWS WAF", "AWS WAF", "High Load Scale"]
  },
  {
    id: "aws-saa-403",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS WAF Bot Control and Rate Limiting: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on AWS WAF to protect an e-commerce checkout API from credential stuffing attacks, scraping bots, and brute force HTTP floods.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS WAF Web ACL with Rate-Based Rules and Bot Control is being evaluated.",
    options: [
      { id: 'A', text: "Associate an AWS WAF Web ACL with the Application Load Balancer, enabling the AWSManagedRulesBotControlRuleSet and a rate-based rule per client IP." },
      { id: 'B', text: "Deploy an Amazon CloudWatch alarm to restart the EC2 instances when CPU exceeds 90%." },
      { id: 'C', text: "Configure a Network Access Control List (NACL) rule blocking all incoming traffic on port 80." },
      { id: 'D', text: "Increase the timeout on the backend Application Load Balancer to 300 seconds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate an AWS WAF Web ACL with the Application Load Balancer, enabling the AWSManagedRulesBotControlRuleSet and a rate-based rule per client IP. AWS WAF Bot Control detects and mitigates automated bot traffic like scrapers and credential stuffers using managed machine learning rules. Rate-based rules track request rates per client IP address and temporarily block IPs that exceed the threshold, protecting endpoints from brute force and denial of service attacks.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/waf-bot-control.html",
    tags: ["AWS WAF", "AWS WAF", "Security Compliance"]
  },
  {
    id: "aws-saa-404",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS WAF Bot Control and Rate Limiting: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on AWS WAF to protect an e-commerce checkout API from credential stuffing attacks, scraping bots, and brute force HTTP floods.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? AWS WAF Web ACL with Rate-Based Rules and Bot Control is being evaluated.",
    options: [
      { id: 'A', text: "Associate an AWS WAF Web ACL with the Application Load Balancer, enabling the AWSManagedRulesBotControlRuleSet and a rate-based rule per client IP." },
      { id: 'B', text: "Deploy an Amazon CloudWatch alarm to restart the EC2 instances when CPU exceeds 90%." },
      { id: 'C', text: "Configure a Network Access Control List (NACL) rule blocking all incoming traffic on port 80." },
      { id: 'D', text: "Increase the timeout on the backend Application Load Balancer to 300 seconds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate an AWS WAF Web ACL with the Application Load Balancer, enabling the AWSManagedRulesBotControlRuleSet and a rate-based rule per client IP. AWS WAF Bot Control detects and mitigates automated bot traffic like scrapers and credential stuffers using managed machine learning rules. Rate-based rules track request rates per client IP address and temporarily block IPs that exceed the threshold, protecting endpoints from brute force and denial of service attacks.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/waf-bot-control.html",
    tags: ["AWS WAF", "AWS WAF", "Hybrid Migration"]
  },
  {
    id: "aws-saa-405",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS WAF Bot Control and Rate Limiting: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on AWS WAF to protect an e-commerce checkout API from credential stuffing attacks, scraping bots, and brute force HTTP floods.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? AWS WAF Web ACL with Rate-Based Rules and Bot Control is being evaluated.",
    options: [
      { id: 'A', text: "Associate an AWS WAF Web ACL with the Application Load Balancer, enabling the AWSManagedRulesBotControlRuleSet and a rate-based rule per client IP." },
      { id: 'B', text: "Deploy an Amazon CloudWatch alarm to restart the EC2 instances when CPU exceeds 90%." },
      { id: 'C', text: "Configure a Network Access Control List (NACL) rule blocking all incoming traffic on port 80." },
      { id: 'D', text: "Increase the timeout on the backend Application Load Balancer to 300 seconds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate an AWS WAF Web ACL with the Application Load Balancer, enabling the AWSManagedRulesBotControlRuleSet and a rate-based rule per client IP. AWS WAF Bot Control detects and mitigates automated bot traffic like scrapers and credential stuffers using managed machine learning rules. Rate-based rules track request rates per client IP address and temporarily block IPs that exceed the threshold, protecting endpoints from brute force and denial of service attacks.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/waf-bot-control.html",
    tags: ["AWS WAF", "AWS WAF", "Resilience Failure"]
  },
  {
    id: "aws-saa-406",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS Shield Advanced DDoS Protection: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on AWS Shield to protect critical public web applications from complex layer 3/4 and layer 7 DDoS attacks with automated mitigation and 24/7 access to the DDoS Response Team (DRT).",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? AWS Shield Advanced with Route 53 health check integration is being evaluated.",
    options: [
      { id: 'A', text: "Subscribe to AWS Shield Advanced, associate protected resources (CloudFront, ALB, Route 53), and configure Route 53 health-check based automated layer 7 mitigation." },
      { id: 'B', text: "Deploy an AWS Network Firewall cluster in every Availability Zone." },
      { id: 'C', text: "Configure Amazon GuardDuty with automated Lambda instance termination." },
      { id: 'D', text: "Deploy an Amazon CloudFront distribution with default AWS Shield Standard." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Subscribe to AWS Shield Advanced, associate protected resources (CloudFront, ALB, Route 53), and configure Route 53 health-check based automated layer 7 mitigation. AWS Shield Advanced provides comprehensive DDoS protection for infrastructure and applications, including automatic layer 7 DDoS mitigation based on Route 53 health check signals, cost protection against scaling charges caused by DDoS spikes, and 24/7 access to the AWS Shield Response Team (SRT).",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/shield-advanced-features.html",
    tags: ["AWS Shield", "Shield", "Dr Failover"]
  },
  {
    id: "aws-saa-407",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS Shield Advanced DDoS Protection: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on AWS Shield to protect critical public web applications from complex layer 3/4 and layer 7 DDoS attacks with automated mitigation and 24/7 access to the DDoS Response Team (DRT).",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? AWS Shield Advanced with Route 53 health check integration is being evaluated.",
    options: [
      { id: 'A', text: "Subscribe to AWS Shield Advanced, associate protected resources (CloudFront, ALB, Route 53), and configure Route 53 health-check based automated layer 7 mitigation." },
      { id: 'B', text: "Deploy an AWS Network Firewall cluster in every Availability Zone." },
      { id: 'C', text: "Configure Amazon GuardDuty with automated Lambda instance termination." },
      { id: 'D', text: "Deploy an Amazon CloudFront distribution with default AWS Shield Standard." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Subscribe to AWS Shield Advanced, associate protected resources (CloudFront, ALB, Route 53), and configure Route 53 health-check based automated layer 7 mitigation. AWS Shield Advanced provides comprehensive DDoS protection for infrastructure and applications, including automatic layer 7 DDoS mitigation based on Route 53 health check signals, cost protection against scaling charges caused by DDoS spikes, and 24/7 access to the AWS Shield Response Team (SRT).",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/shield-advanced-features.html",
    tags: ["AWS Shield", "Shield", "High Load Scale"]
  },
  {
    id: "aws-saa-408",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS Shield Advanced DDoS Protection: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on AWS Shield to protect critical public web applications from complex layer 3/4 and layer 7 DDoS attacks with automated mitigation and 24/7 access to the DDoS Response Team (DRT).",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Shield Advanced with Route 53 health check integration is being evaluated.",
    options: [
      { id: 'A', text: "Subscribe to AWS Shield Advanced, associate protected resources (CloudFront, ALB, Route 53), and configure Route 53 health-check based automated layer 7 mitigation." },
      { id: 'B', text: "Deploy an AWS Network Firewall cluster in every Availability Zone." },
      { id: 'C', text: "Configure Amazon GuardDuty with automated Lambda instance termination." },
      { id: 'D', text: "Deploy an Amazon CloudFront distribution with default AWS Shield Standard." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Subscribe to AWS Shield Advanced, associate protected resources (CloudFront, ALB, Route 53), and configure Route 53 health-check based automated layer 7 mitigation. AWS Shield Advanced provides comprehensive DDoS protection for infrastructure and applications, including automatic layer 7 DDoS mitigation based on Route 53 health check signals, cost protection against scaling charges caused by DDoS spikes, and 24/7 access to the AWS Shield Response Team (SRT).",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/shield-advanced-features.html",
    tags: ["AWS Shield", "Shield", "Security Compliance"]
  },
  {
    id: "aws-saa-409",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS Shield Advanced DDoS Protection: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on AWS Shield to protect critical public web applications from complex layer 3/4 and layer 7 DDoS attacks with automated mitigation and 24/7 access to the DDoS Response Team (DRT).",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? AWS Shield Advanced with Route 53 health check integration is being evaluated.",
    options: [
      { id: 'A', text: "Subscribe to AWS Shield Advanced, associate protected resources (CloudFront, ALB, Route 53), and configure Route 53 health-check based automated layer 7 mitigation." },
      { id: 'B', text: "Deploy an AWS Network Firewall cluster in every Availability Zone." },
      { id: 'C', text: "Configure Amazon GuardDuty with automated Lambda instance termination." },
      { id: 'D', text: "Deploy an Amazon CloudFront distribution with default AWS Shield Standard." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Subscribe to AWS Shield Advanced, associate protected resources (CloudFront, ALB, Route 53), and configure Route 53 health-check based automated layer 7 mitigation. AWS Shield Advanced provides comprehensive DDoS protection for infrastructure and applications, including automatic layer 7 DDoS mitigation based on Route 53 health check signals, cost protection against scaling charges caused by DDoS spikes, and 24/7 access to the AWS Shield Response Team (SRT).",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/shield-advanced-features.html",
    tags: ["AWS Shield", "Shield", "Hybrid Migration"]
  },
  {
    id: "aws-saa-410",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS Shield Advanced DDoS Protection: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on AWS Shield to protect critical public web applications from complex layer 3/4 and layer 7 DDoS attacks with automated mitigation and 24/7 access to the DDoS Response Team (DRT).",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? AWS Shield Advanced with Route 53 health check integration is being evaluated.",
    options: [
      { id: 'A', text: "Subscribe to AWS Shield Advanced, associate protected resources (CloudFront, ALB, Route 53), and configure Route 53 health-check based automated layer 7 mitigation." },
      { id: 'B', text: "Deploy an AWS Network Firewall cluster in every Availability Zone." },
      { id: 'C', text: "Configure Amazon GuardDuty with automated Lambda instance termination." },
      { id: 'D', text: "Deploy an Amazon CloudFront distribution with default AWS Shield Standard." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Subscribe to AWS Shield Advanced, associate protected resources (CloudFront, ALB, Route 53), and configure Route 53 health-check based automated layer 7 mitigation. AWS Shield Advanced provides comprehensive DDoS protection for infrastructure and applications, including automatic layer 7 DDoS mitigation based on Route 53 health check signals, cost protection against scaling charges caused by DDoS spikes, and 24/7 access to the AWS Shield Response Team (SRT).",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/shield-advanced-features.html",
    tags: ["AWS Shield", "Shield", "Resilience Failure"]
  },
  {
    id: "aws-saa-411",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS Network Firewall Stateful Inspection: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on AWS Network Firewall to inspect all outbound internet traffic from private VPC subnets, enforce domain name allow-lists (FQDN), and block unauthorized egress protocols.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? AWS Network Firewall stateful domain filtering and TLS inspection is being evaluated.",
    options: [
      { id: 'A', text: "Deploy AWS Network Firewall endpoints in dedicated firewall subnets and route outbound VPC traffic through the firewall stateful rule group." },
      { id: 'B', text: "Configure Network Access Control Lists (NACLs) on private subnets with domain name rules." },
      { id: 'C', text: "Configure Security Groups with outbound rules specifying external domain URLs." },
      { id: 'D', text: "Deploy an Internet Gateway directly in private subnets with egress filtering enabled." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Network Firewall endpoints in dedicated firewall subnets and route outbound VPC traffic through the firewall stateful rule group. AWS Network Firewall provides stateful network inspection, intrusion detection and prevention (IPS), and domain name filtering (Suricata rules) across thousands of VPCs. Security Groups and NACLs operate only on IP addresses and ports, and cannot inspect domain names (FQDNs) or application-layer payloads.",
    referenceUrl: "https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html",
    tags: ["AWS Network Firewall", "Network Firewall", "Dr Failover"]
  },
  {
    id: "aws-saa-412",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS Network Firewall Stateful Inspection: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on AWS Network Firewall to inspect all outbound internet traffic from private VPC subnets, enforce domain name allow-lists (FQDN), and block unauthorized egress protocols.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? AWS Network Firewall stateful domain filtering and TLS inspection is being evaluated.",
    options: [
      { id: 'A', text: "Deploy AWS Network Firewall endpoints in dedicated firewall subnets and route outbound VPC traffic through the firewall stateful rule group." },
      { id: 'B', text: "Configure Network Access Control Lists (NACLs) on private subnets with domain name rules." },
      { id: 'C', text: "Configure Security Groups with outbound rules specifying external domain URLs." },
      { id: 'D', text: "Deploy an Internet Gateway directly in private subnets with egress filtering enabled." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Network Firewall endpoints in dedicated firewall subnets and route outbound VPC traffic through the firewall stateful rule group. AWS Network Firewall provides stateful network inspection, intrusion detection and prevention (IPS), and domain name filtering (Suricata rules) across thousands of VPCs. Security Groups and NACLs operate only on IP addresses and ports, and cannot inspect domain names (FQDNs) or application-layer payloads.",
    referenceUrl: "https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html",
    tags: ["AWS Network Firewall", "Network Firewall", "High Load Scale"]
  },
  {
    id: "aws-saa-413",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS Network Firewall Stateful Inspection: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on AWS Network Firewall to inspect all outbound internet traffic from private VPC subnets, enforce domain name allow-lists (FQDN), and block unauthorized egress protocols.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Network Firewall stateful domain filtering and TLS inspection is being evaluated.",
    options: [
      { id: 'A', text: "Deploy AWS Network Firewall endpoints in dedicated firewall subnets and route outbound VPC traffic through the firewall stateful rule group." },
      { id: 'B', text: "Configure Network Access Control Lists (NACLs) on private subnets with domain name rules." },
      { id: 'C', text: "Configure Security Groups with outbound rules specifying external domain URLs." },
      { id: 'D', text: "Deploy an Internet Gateway directly in private subnets with egress filtering enabled." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Network Firewall endpoints in dedicated firewall subnets and route outbound VPC traffic through the firewall stateful rule group. AWS Network Firewall provides stateful network inspection, intrusion detection and prevention (IPS), and domain name filtering (Suricata rules) across thousands of VPCs. Security Groups and NACLs operate only on IP addresses and ports, and cannot inspect domain names (FQDNs) or application-layer payloads.",
    referenceUrl: "https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html",
    tags: ["AWS Network Firewall", "Network Firewall", "Security Compliance"]
  },
  {
    id: "aws-saa-414",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS Network Firewall Stateful Inspection: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on AWS Network Firewall to inspect all outbound internet traffic from private VPC subnets, enforce domain name allow-lists (FQDN), and block unauthorized egress protocols.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? AWS Network Firewall stateful domain filtering and TLS inspection is being evaluated.",
    options: [
      { id: 'A', text: "Deploy AWS Network Firewall endpoints in dedicated firewall subnets and route outbound VPC traffic through the firewall stateful rule group." },
      { id: 'B', text: "Configure Network Access Control Lists (NACLs) on private subnets with domain name rules." },
      { id: 'C', text: "Configure Security Groups with outbound rules specifying external domain URLs." },
      { id: 'D', text: "Deploy an Internet Gateway directly in private subnets with egress filtering enabled." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Network Firewall endpoints in dedicated firewall subnets and route outbound VPC traffic through the firewall stateful rule group. AWS Network Firewall provides stateful network inspection, intrusion detection and prevention (IPS), and domain name filtering (Suricata rules) across thousands of VPCs. Security Groups and NACLs operate only on IP addresses and ports, and cannot inspect domain names (FQDNs) or application-layer payloads.",
    referenceUrl: "https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html",
    tags: ["AWS Network Firewall", "Network Firewall", "Hybrid Migration"]
  },
  {
    id: "aws-saa-415",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS Network Firewall Stateful Inspection: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on AWS Network Firewall to inspect all outbound internet traffic from private VPC subnets, enforce domain name allow-lists (FQDN), and block unauthorized egress protocols.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? AWS Network Firewall stateful domain filtering and TLS inspection is being evaluated.",
    options: [
      { id: 'A', text: "Deploy AWS Network Firewall endpoints in dedicated firewall subnets and route outbound VPC traffic through the firewall stateful rule group." },
      { id: 'B', text: "Configure Network Access Control Lists (NACLs) on private subnets with domain name rules." },
      { id: 'C', text: "Configure Security Groups with outbound rules specifying external domain URLs." },
      { id: 'D', text: "Deploy an Internet Gateway directly in private subnets with egress filtering enabled." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Network Firewall endpoints in dedicated firewall subnets and route outbound VPC traffic through the firewall stateful rule group. AWS Network Firewall provides stateful network inspection, intrusion detection and prevention (IPS), and domain name filtering (Suricata rules) across thousands of VPCs. Security Groups and NACLs operate only on IP addresses and ports, and cannot inspect domain names (FQDNs) or application-layer payloads.",
    referenceUrl: "https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html",
    tags: ["AWS Network Firewall", "Network Firewall", "Resilience Failure"]
  },
  {
    id: "aws-saa-416",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "S3 Bucket Policy Enforcing TLS 1.2+: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon S3 to prevent unencrypted HTTP data transmission and mandate that all clients connect using TLS 1.2 or higher for compliance auditing.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? S3 Bucket Policy with aws:SecureTransport and TLS condition is being evaluated.",
    options: [
      { id: 'A', text: "Attach an S3 bucket policy with an explicit Deny action for requests where `aws:SecureTransport` is false or `s3:TlsVersion` is less than 1.2." },
      { id: 'B', text: "Enable default SSE-S3 encryption on the S3 bucket settings." },
      { id: 'C', text: "Configure S3 Object Lock in compliance mode." },
      { id: 'D', text: "Deploy an AWS WAF Web ACL associated directly with the S3 bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an S3 bucket policy with an explicit Deny action for requests where `aws:SecureTransport` is false or `s3:TlsVersion` is less than 1.2. S3 bucket policies can enforce in-transit encryption using the `aws:SecureTransport` condition key (which denies plaintext HTTP) combined with the `s3:TlsVersion` condition key to enforce modern TLS standards (TLS 1.2+). Server-side encryption (SSE-S3) protects data at rest, not data in transit.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html#example-bucket-policies-tls-version",
    tags: ["Amazon S3", "S3", "Dr Failover"]
  },
  {
    id: "aws-saa-417",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "S3 Bucket Policy Enforcing TLS 1.2+: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon S3 to prevent unencrypted HTTP data transmission and mandate that all clients connect using TLS 1.2 or higher for compliance auditing.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? S3 Bucket Policy with aws:SecureTransport and TLS condition is being evaluated.",
    options: [
      { id: 'A', text: "Attach an S3 bucket policy with an explicit Deny action for requests where `aws:SecureTransport` is false or `s3:TlsVersion` is less than 1.2." },
      { id: 'B', text: "Enable default SSE-S3 encryption on the S3 bucket settings." },
      { id: 'C', text: "Configure S3 Object Lock in compliance mode." },
      { id: 'D', text: "Deploy an AWS WAF Web ACL associated directly with the S3 bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an S3 bucket policy with an explicit Deny action for requests where `aws:SecureTransport` is false or `s3:TlsVersion` is less than 1.2. S3 bucket policies can enforce in-transit encryption using the `aws:SecureTransport` condition key (which denies plaintext HTTP) combined with the `s3:TlsVersion` condition key to enforce modern TLS standards (TLS 1.2+). Server-side encryption (SSE-S3) protects data at rest, not data in transit.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html#example-bucket-policies-tls-version",
    tags: ["Amazon S3", "S3", "High Load Scale"]
  },
  {
    id: "aws-saa-418",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "S3 Bucket Policy Enforcing TLS 1.2+: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon S3 to prevent unencrypted HTTP data transmission and mandate that all clients connect using TLS 1.2 or higher for compliance auditing.",
    question: "Which solution properly implements these mandatory security and governance controls? S3 Bucket Policy with aws:SecureTransport and TLS condition is being evaluated.",
    options: [
      { id: 'A', text: "Attach an S3 bucket policy with an explicit Deny action for requests where `aws:SecureTransport` is false or `s3:TlsVersion` is less than 1.2." },
      { id: 'B', text: "Enable default SSE-S3 encryption on the S3 bucket settings." },
      { id: 'C', text: "Configure S3 Object Lock in compliance mode." },
      { id: 'D', text: "Deploy an AWS WAF Web ACL associated directly with the S3 bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an S3 bucket policy with an explicit Deny action for requests where `aws:SecureTransport` is false or `s3:TlsVersion` is less than 1.2. S3 bucket policies can enforce in-transit encryption using the `aws:SecureTransport` condition key (which denies plaintext HTTP) combined with the `s3:TlsVersion` condition key to enforce modern TLS standards (TLS 1.2+). Server-side encryption (SSE-S3) protects data at rest, not data in transit.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html#example-bucket-policies-tls-version",
    tags: ["Amazon S3", "S3", "Security Compliance"]
  },
  {
    id: "aws-saa-419",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "S3 Bucket Policy Enforcing TLS 1.2+: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon S3 to prevent unencrypted HTTP data transmission and mandate that all clients connect using TLS 1.2 or higher for compliance auditing.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? S3 Bucket Policy with aws:SecureTransport and TLS condition is being evaluated.",
    options: [
      { id: 'A', text: "Attach an S3 bucket policy with an explicit Deny action for requests where `aws:SecureTransport` is false or `s3:TlsVersion` is less than 1.2." },
      { id: 'B', text: "Enable default SSE-S3 encryption on the S3 bucket settings." },
      { id: 'C', text: "Configure S3 Object Lock in compliance mode." },
      { id: 'D', text: "Deploy an AWS WAF Web ACL associated directly with the S3 bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an S3 bucket policy with an explicit Deny action for requests where `aws:SecureTransport` is false or `s3:TlsVersion` is less than 1.2. S3 bucket policies can enforce in-transit encryption using the `aws:SecureTransport` condition key (which denies plaintext HTTP) combined with the `s3:TlsVersion` condition key to enforce modern TLS standards (TLS 1.2+). Server-side encryption (SSE-S3) protects data at rest, not data in transit.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html#example-bucket-policies-tls-version",
    tags: ["Amazon S3", "S3", "Hybrid Migration"]
  },
  {
    id: "aws-saa-420",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "S3 Bucket Policy Enforcing TLS 1.2+: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon S3 to prevent unencrypted HTTP data transmission and mandate that all clients connect using TLS 1.2 or higher for compliance auditing.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? S3 Bucket Policy with aws:SecureTransport and TLS condition is being evaluated.",
    options: [
      { id: 'A', text: "Attach an S3 bucket policy with an explicit Deny action for requests where `aws:SecureTransport` is false or `s3:TlsVersion` is less than 1.2." },
      { id: 'B', text: "Enable default SSE-S3 encryption on the S3 bucket settings." },
      { id: 'C', text: "Configure S3 Object Lock in compliance mode." },
      { id: 'D', text: "Deploy an AWS WAF Web ACL associated directly with the S3 bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an S3 bucket policy with an explicit Deny action for requests where `aws:SecureTransport` is false or `s3:TlsVersion` is less than 1.2. S3 bucket policies can enforce in-transit encryption using the `aws:SecureTransport` condition key (which denies plaintext HTTP) combined with the `s3:TlsVersion` condition key to enforce modern TLS standards (TLS 1.2+). Server-side encryption (SSE-S3) protects data at rest, not data in transit.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html#example-bucket-policies-tls-version",
    tags: ["Amazon S3", "S3", "Resilience Failure"]
  },
  {
    id: "aws-saa-421",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "S3 Object Lock Compliance Mode: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon S3 to store regulatory SEC financial records in an immutable WORM (Write Once, Read Many) format that cannot be deleted or overwritten by anyone, including the root account.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Amazon S3 Object Lock in compliance mode with Legal Hold is being evaluated.",
    options: [
      { id: 'A', text: "Create an S3 bucket with Object Lock enabled, configure default retention in compliance mode, and apply Legal Holds to critical audit objects." },
      { id: 'B', text: "Enable S3 Versioning and configure an S3 Lifecycle rule to transition objects to S3 Glacier." },
      { id: 'C', text: "Configure an S3 bucket policy denying `s3:DeleteObject` to all users except root." },
      { id: 'D', text: "Configure S3 Object Lock in governance mode." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an S3 bucket with Object Lock enabled, configure default retention in compliance mode, and apply Legal Holds to critical audit objects. S3 Object Lock in compliance mode prevents an object version from being deleted or overwritten by any user, including the AWS account root user, throughout its retention period. Governance mode allows users with special permissions to bypass retention. Versioning without Object Lock still allows users to delete versions.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html",
    tags: ["Amazon S3", "S3", "Dr Failover"]
  },
  {
    id: "aws-saa-422",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "S3 Object Lock Compliance Mode: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon S3 to store regulatory SEC financial records in an immutable WORM (Write Once, Read Many) format that cannot be deleted or overwritten by anyone, including the root account.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Amazon S3 Object Lock in compliance mode with Legal Hold is being evaluated.",
    options: [
      { id: 'A', text: "Create an S3 bucket with Object Lock enabled, configure default retention in compliance mode, and apply Legal Holds to critical audit objects." },
      { id: 'B', text: "Enable S3 Versioning and configure an S3 Lifecycle rule to transition objects to S3 Glacier." },
      { id: 'C', text: "Configure an S3 bucket policy denying `s3:DeleteObject` to all users except root." },
      { id: 'D', text: "Configure S3 Object Lock in governance mode." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an S3 bucket with Object Lock enabled, configure default retention in compliance mode, and apply Legal Holds to critical audit objects. S3 Object Lock in compliance mode prevents an object version from being deleted or overwritten by any user, including the AWS account root user, throughout its retention period. Governance mode allows users with special permissions to bypass retention. Versioning without Object Lock still allows users to delete versions.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html",
    tags: ["Amazon S3", "S3", "High Load Scale"]
  },
  {
    id: "aws-saa-423",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "S3 Object Lock Compliance Mode: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon S3 to store regulatory SEC financial records in an immutable WORM (Write Once, Read Many) format that cannot be deleted or overwritten by anyone, including the root account.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon S3 Object Lock in compliance mode with Legal Hold is being evaluated.",
    options: [
      { id: 'A', text: "Create an S3 bucket with Object Lock enabled, configure default retention in compliance mode, and apply Legal Holds to critical audit objects." },
      { id: 'B', text: "Enable S3 Versioning and configure an S3 Lifecycle rule to transition objects to S3 Glacier." },
      { id: 'C', text: "Configure an S3 bucket policy denying `s3:DeleteObject` to all users except root." },
      { id: 'D', text: "Configure S3 Object Lock in governance mode." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an S3 bucket with Object Lock enabled, configure default retention in compliance mode, and apply Legal Holds to critical audit objects. S3 Object Lock in compliance mode prevents an object version from being deleted or overwritten by any user, including the AWS account root user, throughout its retention period. Governance mode allows users with special permissions to bypass retention. Versioning without Object Lock still allows users to delete versions.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html",
    tags: ["Amazon S3", "S3", "Security Compliance"]
  },
  {
    id: "aws-saa-424",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "S3 Object Lock Compliance Mode: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon S3 to store regulatory SEC financial records in an immutable WORM (Write Once, Read Many) format that cannot be deleted or overwritten by anyone, including the root account.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Amazon S3 Object Lock in compliance mode with Legal Hold is being evaluated.",
    options: [
      { id: 'A', text: "Create an S3 bucket with Object Lock enabled, configure default retention in compliance mode, and apply Legal Holds to critical audit objects." },
      { id: 'B', text: "Enable S3 Versioning and configure an S3 Lifecycle rule to transition objects to S3 Glacier." },
      { id: 'C', text: "Configure an S3 bucket policy denying `s3:DeleteObject` to all users except root." },
      { id: 'D', text: "Configure S3 Object Lock in governance mode." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an S3 bucket with Object Lock enabled, configure default retention in compliance mode, and apply Legal Holds to critical audit objects. S3 Object Lock in compliance mode prevents an object version from being deleted or overwritten by any user, including the AWS account root user, throughout its retention period. Governance mode allows users with special permissions to bypass retention. Versioning without Object Lock still allows users to delete versions.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html",
    tags: ["Amazon S3", "S3", "Hybrid Migration"]
  },
  {
    id: "aws-saa-425",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "S3 Object Lock Compliance Mode: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon S3 to store regulatory SEC financial records in an immutable WORM (Write Once, Read Many) format that cannot be deleted or overwritten by anyone, including the root account.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Amazon S3 Object Lock in compliance mode with Legal Hold is being evaluated.",
    options: [
      { id: 'A', text: "Create an S3 bucket with Object Lock enabled, configure default retention in compliance mode, and apply Legal Holds to critical audit objects." },
      { id: 'B', text: "Enable S3 Versioning and configure an S3 Lifecycle rule to transition objects to S3 Glacier." },
      { id: 'C', text: "Configure an S3 bucket policy denying `s3:DeleteObject` to all users except root." },
      { id: 'D', text: "Configure S3 Object Lock in governance mode." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an S3 bucket with Object Lock enabled, configure default retention in compliance mode, and apply Legal Holds to critical audit objects. S3 Object Lock in compliance mode prevents an object version from being deleted or overwritten by any user, including the AWS account root user, throughout its retention period. Governance mode allows users with special permissions to bypass retention. Versioning without Object Lock still allows users to delete versions.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html",
    tags: ["Amazon S3", "S3", "Resilience Failure"]
  }
];

export default AWS_SAA_QUESTIONS_17;
