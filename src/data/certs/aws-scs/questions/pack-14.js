export const AWS_SCS_QUESTIONS_14 = [
  {
    id: "aws-scs-326",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "AWS Config Continuous Compliance and Configuration Recorders: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates AWS Config to detect and automatically remediate security group rules that open SSH port 22 to 0.0.0.0/0 across all enterprise accounts.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Recording resource configuration changes across all regions and evaluating conformance rules is under consideration.",
    options: [
      { id: 'A', text: "Enable AWS Config recorders across all accounts and regions with the managed rule `restricted-ssh` linked to SSM automated remediation." },
      { id: 'B', text: "Perform quarterly manual audits where engineers inspect EC2 security groups in the management console." },
      { id: 'C', text: "Disable AWS Config to reduce monthly configuration snapshot recording fees." },
      { id: 'D', text: "Rely on developers to voluntarily restrict their security group rules." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable AWS Config recorders across all accounts and regions with the managed rule `restricted-ssh` linked to SSM automated remediation. AWS Config continuously records resource configurations, relationships, and historical changes. Managed rules (such as `restricted-ssh` or `s3-bucket-public-read-prohibited`) evaluate resources in real time, triggering automated SSM remediation documents when non-compliant resources are created.",
    referenceUrl: "https://docs.aws.amazon.com/config/latest/developerguide/remediation-ssm.html",
    tags: ["AWS Config", "AWS Config", "Enterprise Governance"]
  },
  {
    id: "aws-scs-327",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "AWS Config Continuous Compliance and Configuration Recorders: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates AWS Config to detect and automatically remediate security group rules that open SSH port 22 to 0.0.0.0/0 across all enterprise accounts.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Recording resource configuration changes across all regions and evaluating conformance rules is under consideration.",
    options: [
      { id: 'A', text: "Enable AWS Config recorders across all accounts and regions with the managed rule `restricted-ssh` linked to SSM automated remediation." },
      { id: 'B', text: "Perform quarterly manual audits where engineers inspect EC2 security groups in the management console." },
      { id: 'C', text: "Disable AWS Config to reduce monthly configuration snapshot recording fees." },
      { id: 'D', text: "Rely on developers to voluntarily restrict their security group rules." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable AWS Config recorders across all accounts and regions with the managed rule `restricted-ssh` linked to SSM automated remediation. AWS Config continuously records resource configurations, relationships, and historical changes. Managed rules (such as `restricted-ssh` or `s3-bucket-public-read-prohibited`) evaluate resources in real time, triggering automated SSM remediation documents when non-compliant resources are created.",
    referenceUrl: "https://docs.aws.amazon.com/config/latest/developerguide/remediation-ssm.html",
    tags: ["AWS Config", "AWS Config", "Incident Containment"]
  },
  {
    id: "aws-scs-328",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "AWS Config Continuous Compliance and Configuration Recorders: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates AWS Config to detect and automatically remediate security group rules that open SSH port 22 to 0.0.0.0/0 across all enterprise accounts.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Recording resource configuration changes across all regions and evaluating conformance rules is under consideration.",
    options: [
      { id: 'A', text: "Enable AWS Config recorders across all accounts and regions with the managed rule `restricted-ssh` linked to SSM automated remediation." },
      { id: 'B', text: "Perform quarterly manual audits where engineers inspect EC2 security groups in the management console." },
      { id: 'C', text: "Disable AWS Config to reduce monthly configuration snapshot recording fees." },
      { id: 'D', text: "Rely on developers to voluntarily restrict their security group rules." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable AWS Config recorders across all accounts and regions with the managed rule `restricted-ssh` linked to SSM automated remediation. AWS Config continuously records resource configurations, relationships, and historical changes. Managed rules (such as `restricted-ssh` or `s3-bucket-public-read-prohibited`) evaluate resources in real time, triggering automated SSM remediation documents when non-compliant resources are created.",
    referenceUrl: "https://docs.aws.amazon.com/config/latest/developerguide/remediation-ssm.html",
    tags: ["AWS Config", "AWS Config", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-329",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "AWS Config Continuous Compliance and Configuration Recorders: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates AWS Config to detect and automatically remediate security group rules that open SSH port 22 to 0.0.0.0/0 across all enterprise accounts.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Recording resource configuration changes across all regions and evaluating conformance rules is under consideration.",
    options: [
      { id: 'A', text: "Enable AWS Config recorders across all accounts and regions with the managed rule `restricted-ssh` linked to SSM automated remediation." },
      { id: 'B', text: "Perform quarterly manual audits where engineers inspect EC2 security groups in the management console." },
      { id: 'C', text: "Disable AWS Config to reduce monthly configuration snapshot recording fees." },
      { id: 'D', text: "Rely on developers to voluntarily restrict their security group rules." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable AWS Config recorders across all accounts and regions with the managed rule `restricted-ssh` linked to SSM automated remediation. AWS Config continuously records resource configurations, relationships, and historical changes. Managed rules (such as `restricted-ssh` or `s3-bucket-public-read-prohibited`) evaluate resources in real time, triggering automated SSM remediation documents when non-compliant resources are created.",
    referenceUrl: "https://docs.aws.amazon.com/config/latest/developerguide/remediation-ssm.html",
    tags: ["AWS Config", "AWS Config", "Data Protection"]
  },
  {
    id: "aws-scs-330",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "AWS Config Continuous Compliance and Configuration Recorders: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates AWS Config to detect and automatically remediate security group rules that open SSH port 22 to 0.0.0.0/0 across all enterprise accounts.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Recording resource configuration changes across all regions and evaluating conformance rules is under consideration.",
    options: [
      { id: 'A', text: "Enable AWS Config recorders across all accounts and regions with the managed rule `restricted-ssh` linked to SSM automated remediation." },
      { id: 'B', text: "Perform quarterly manual audits where engineers inspect EC2 security groups in the management console." },
      { id: 'C', text: "Disable AWS Config to reduce monthly configuration snapshot recording fees." },
      { id: 'D', text: "Rely on developers to voluntarily restrict their security group rules." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable AWS Config recorders across all accounts and regions with the managed rule `restricted-ssh` linked to SSM automated remediation. AWS Config continuously records resource configurations, relationships, and historical changes. Managed rules (such as `restricted-ssh` or `s3-bucket-public-read-prohibited`) evaluate resources in real time, triggering automated SSM remediation documents when non-compliant resources are created.",
    referenceUrl: "https://docs.aws.amazon.com/config/latest/developerguide/remediation-ssm.html",
    tags: ["AWS Config", "AWS Config", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-331",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Network Firewall Centralized Inspection Architecture: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates Network Firewall to inspect and filter all north-south internet egress and east-west VPC traffic centrally across an entire AWS Organization.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Transit Gateway routing traffic through a centralized inspection VPC with AWS Network Firewall is under consideration.",
    options: [
      { id: 'A', text: "Deploy AWS Network Firewall in a centralized inspection VPC with Transit Gateway route tables directing traffic through firewall endpoints." },
      { id: 'B', text: "Deploy individual NAT Gateways and third-party firewall instances in every private subnet with no central management." },
      { id: 'C', text: "Allow all VPC traffic to egress directly to the internet without stateful inspection." },
      { id: 'D', text: "Disable Transit Gateway routing to force all traffic through public internet VPNs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Network Firewall in a centralized inspection VPC with Transit Gateway route tables directing traffic through firewall endpoints. Centralized inspection architecture uses AWS Transit Gateway to route VPC egress and inter-VPC traffic through dedicated inspection VPCs hosting AWS Network Firewall endpoints. This centralizes stateful intrusion prevention (IPS) and URL filtering without deploying firewalls in every spoke VPC.",
    referenceUrl: "https://docs.aws.amazon.com/network-firewall/latest/developerguide/arch-centralized.html",
    tags: ["Network Firewall", "Centralized Firewall", "Enterprise Governance"]
  },
  {
    id: "aws-scs-332",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Network Firewall Centralized Inspection Architecture: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates Network Firewall to inspect and filter all north-south internet egress and east-west VPC traffic centrally across an entire AWS Organization.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Transit Gateway routing traffic through a centralized inspection VPC with AWS Network Firewall is under consideration.",
    options: [
      { id: 'A', text: "Deploy AWS Network Firewall in a centralized inspection VPC with Transit Gateway route tables directing traffic through firewall endpoints." },
      { id: 'B', text: "Deploy individual NAT Gateways and third-party firewall instances in every private subnet with no central management." },
      { id: 'C', text: "Allow all VPC traffic to egress directly to the internet without stateful inspection." },
      { id: 'D', text: "Disable Transit Gateway routing to force all traffic through public internet VPNs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Network Firewall in a centralized inspection VPC with Transit Gateway route tables directing traffic through firewall endpoints. Centralized inspection architecture uses AWS Transit Gateway to route VPC egress and inter-VPC traffic through dedicated inspection VPCs hosting AWS Network Firewall endpoints. This centralizes stateful intrusion prevention (IPS) and URL filtering without deploying firewalls in every spoke VPC.",
    referenceUrl: "https://docs.aws.amazon.com/network-firewall/latest/developerguide/arch-centralized.html",
    tags: ["Network Firewall", "Centralized Firewall", "Incident Containment"]
  },
  {
    id: "aws-scs-333",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Network Firewall Centralized Inspection Architecture: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates Network Firewall to inspect and filter all north-south internet egress and east-west VPC traffic centrally across an entire AWS Organization.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Transit Gateway routing traffic through a centralized inspection VPC with AWS Network Firewall is under consideration.",
    options: [
      { id: 'A', text: "Deploy AWS Network Firewall in a centralized inspection VPC with Transit Gateway route tables directing traffic through firewall endpoints." },
      { id: 'B', text: "Deploy individual NAT Gateways and third-party firewall instances in every private subnet with no central management." },
      { id: 'C', text: "Allow all VPC traffic to egress directly to the internet without stateful inspection." },
      { id: 'D', text: "Disable Transit Gateway routing to force all traffic through public internet VPNs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Network Firewall in a centralized inspection VPC with Transit Gateway route tables directing traffic through firewall endpoints. Centralized inspection architecture uses AWS Transit Gateway to route VPC egress and inter-VPC traffic through dedicated inspection VPCs hosting AWS Network Firewall endpoints. This centralizes stateful intrusion prevention (IPS) and URL filtering without deploying firewalls in every spoke VPC.",
    referenceUrl: "https://docs.aws.amazon.com/network-firewall/latest/developerguide/arch-centralized.html",
    tags: ["Network Firewall", "Centralized Firewall", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-334",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Network Firewall Centralized Inspection Architecture: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates Network Firewall to inspect and filter all north-south internet egress and east-west VPC traffic centrally across an entire AWS Organization.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Transit Gateway routing traffic through a centralized inspection VPC with AWS Network Firewall is under consideration.",
    options: [
      { id: 'A', text: "Deploy AWS Network Firewall in a centralized inspection VPC with Transit Gateway route tables directing traffic through firewall endpoints." },
      { id: 'B', text: "Deploy individual NAT Gateways and third-party firewall instances in every private subnet with no central management." },
      { id: 'C', text: "Allow all VPC traffic to egress directly to the internet without stateful inspection." },
      { id: 'D', text: "Disable Transit Gateway routing to force all traffic through public internet VPNs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Network Firewall in a centralized inspection VPC with Transit Gateway route tables directing traffic through firewall endpoints. Centralized inspection architecture uses AWS Transit Gateway to route VPC egress and inter-VPC traffic through dedicated inspection VPCs hosting AWS Network Firewall endpoints. This centralizes stateful intrusion prevention (IPS) and URL filtering without deploying firewalls in every spoke VPC.",
    referenceUrl: "https://docs.aws.amazon.com/network-firewall/latest/developerguide/arch-centralized.html",
    tags: ["Network Firewall", "Centralized Firewall", "Data Protection"]
  },
  {
    id: "aws-scs-335",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Network Firewall Centralized Inspection Architecture: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates Network Firewall to inspect and filter all north-south internet egress and east-west VPC traffic centrally across an entire AWS Organization.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Transit Gateway routing traffic through a centralized inspection VPC with AWS Network Firewall is under consideration.",
    options: [
      { id: 'A', text: "Deploy AWS Network Firewall in a centralized inspection VPC with Transit Gateway route tables directing traffic through firewall endpoints." },
      { id: 'B', text: "Deploy individual NAT Gateways and third-party firewall instances in every private subnet with no central management." },
      { id: 'C', text: "Allow all VPC traffic to egress directly to the internet without stateful inspection." },
      { id: 'D', text: "Disable Transit Gateway routing to force all traffic through public internet VPNs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Network Firewall in a centralized inspection VPC with Transit Gateway route tables directing traffic through firewall endpoints. Centralized inspection architecture uses AWS Transit Gateway to route VPC egress and inter-VPC traffic through dedicated inspection VPCs hosting AWS Network Firewall endpoints. This centralizes stateful intrusion prevention (IPS) and URL filtering without deploying firewalls in every spoke VPC.",
    referenceUrl: "https://docs.aws.amazon.com/network-firewall/latest/developerguide/arch-centralized.html",
    tags: ["Network Firewall", "Centralized Firewall", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-336",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS WAF Rate-Based Rules and Bot Control: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates AWS WAF to protect an e-commerce login API from distributed credential stuffing attacks originating from thousands of rotating IP addresses.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Protecting login endpoints against credential stuffing and brute-force attacks via rate-based rules is under consideration.",
    options: [
      { id: 'A', text: "Implement an AWS WAF Web ACL with a rate-based rule limiting requests to `/login` and enable AWS WAF Bot Control." },
      { id: 'B', text: "Increase EC2 instance sizes to absorb the massive volume of fraudulent login attempts." },
      { id: 'C', text: "Disable rate limiting to prevent blocking legitimate customers who forget their passwords." },
      { id: 'D', text: "Rely on client-side JavaScript popups to deter automated attack scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement an AWS WAF Web ACL with a rate-based rule limiting requests to `/login` and enable AWS WAF Bot Control. AWS WAF rate-based rules track the rate of requests from each IP address over 1-minute or 5-minute evaluation windows, automatically blocking IPs that breach configured limits. AWS WAF Bot Control adds managed signatures and machine learning to detect and mitigate malicious automated botnets.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/waf-bot-control.html",
    tags: ["AWS WAF", "AWS WAF", "Enterprise Governance"]
  },
  {
    id: "aws-scs-337",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS WAF Rate-Based Rules and Bot Control: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates AWS WAF to protect an e-commerce login API from distributed credential stuffing attacks originating from thousands of rotating IP addresses.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Protecting login endpoints against credential stuffing and brute-force attacks via rate-based rules is under consideration.",
    options: [
      { id: 'A', text: "Implement an AWS WAF Web ACL with a rate-based rule limiting requests to `/login` and enable AWS WAF Bot Control." },
      { id: 'B', text: "Increase EC2 instance sizes to absorb the massive volume of fraudulent login attempts." },
      { id: 'C', text: "Disable rate limiting to prevent blocking legitimate customers who forget their passwords." },
      { id: 'D', text: "Rely on client-side JavaScript popups to deter automated attack scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement an AWS WAF Web ACL with a rate-based rule limiting requests to `/login` and enable AWS WAF Bot Control. AWS WAF rate-based rules track the rate of requests from each IP address over 1-minute or 5-minute evaluation windows, automatically blocking IPs that breach configured limits. AWS WAF Bot Control adds managed signatures and machine learning to detect and mitigate malicious automated botnets.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/waf-bot-control.html",
    tags: ["AWS WAF", "AWS WAF", "Incident Containment"]
  },
  {
    id: "aws-scs-338",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS WAF Rate-Based Rules and Bot Control: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates AWS WAF to protect an e-commerce login API from distributed credential stuffing attacks originating from thousands of rotating IP addresses.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Protecting login endpoints against credential stuffing and brute-force attacks via rate-based rules is under consideration.",
    options: [
      { id: 'A', text: "Implement an AWS WAF Web ACL with a rate-based rule limiting requests to `/login` and enable AWS WAF Bot Control." },
      { id: 'B', text: "Increase EC2 instance sizes to absorb the massive volume of fraudulent login attempts." },
      { id: 'C', text: "Disable rate limiting to prevent blocking legitimate customers who forget their passwords." },
      { id: 'D', text: "Rely on client-side JavaScript popups to deter automated attack scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement an AWS WAF Web ACL with a rate-based rule limiting requests to `/login` and enable AWS WAF Bot Control. AWS WAF rate-based rules track the rate of requests from each IP address over 1-minute or 5-minute evaluation windows, automatically blocking IPs that breach configured limits. AWS WAF Bot Control adds managed signatures and machine learning to detect and mitigate malicious automated botnets.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/waf-bot-control.html",
    tags: ["AWS WAF", "AWS WAF", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-339",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS WAF Rate-Based Rules and Bot Control: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates AWS WAF to protect an e-commerce login API from distributed credential stuffing attacks originating from thousands of rotating IP addresses.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Protecting login endpoints against credential stuffing and brute-force attacks via rate-based rules is under consideration.",
    options: [
      { id: 'A', text: "Implement an AWS WAF Web ACL with a rate-based rule limiting requests to `/login` and enable AWS WAF Bot Control." },
      { id: 'B', text: "Increase EC2 instance sizes to absorb the massive volume of fraudulent login attempts." },
      { id: 'C', text: "Disable rate limiting to prevent blocking legitimate customers who forget their passwords." },
      { id: 'D', text: "Rely on client-side JavaScript popups to deter automated attack scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement an AWS WAF Web ACL with a rate-based rule limiting requests to `/login` and enable AWS WAF Bot Control. AWS WAF rate-based rules track the rate of requests from each IP address over 1-minute or 5-minute evaluation windows, automatically blocking IPs that breach configured limits. AWS WAF Bot Control adds managed signatures and machine learning to detect and mitigate malicious automated botnets.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/waf-bot-control.html",
    tags: ["AWS WAF", "AWS WAF", "Data Protection"]
  },
  {
    id: "aws-scs-340",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS WAF Rate-Based Rules and Bot Control: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates AWS WAF to protect an e-commerce login API from distributed credential stuffing attacks originating from thousands of rotating IP addresses.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Protecting login endpoints against credential stuffing and brute-force attacks via rate-based rules is under consideration.",
    options: [
      { id: 'A', text: "Implement an AWS WAF Web ACL with a rate-based rule limiting requests to `/login` and enable AWS WAF Bot Control." },
      { id: 'B', text: "Increase EC2 instance sizes to absorb the massive volume of fraudulent login attempts." },
      { id: 'C', text: "Disable rate limiting to prevent blocking legitimate customers who forget their passwords." },
      { id: 'D', text: "Rely on client-side JavaScript popups to deter automated attack scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement an AWS WAF Web ACL with a rate-based rule limiting requests to `/login` and enable AWS WAF Bot Control. AWS WAF rate-based rules track the rate of requests from each IP address over 1-minute or 5-minute evaluation windows, automatically blocking IPs that breach configured limits. AWS WAF Bot Control adds managed signatures and machine learning to detect and mitigate malicious automated botnets.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/waf-bot-control.html",
    tags: ["AWS WAF", "AWS WAF", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-341",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Shield Advanced and DDoS Mitigation: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates AWS Shield Advanced to protect mission-critical web applications against sophisticated multi-gigabit layer 3/4 and layer 7 DDoS attacks with financial indemnity.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Layer 7 DDoS attack mitigation, cost protection, and AWS DDoS Response Team (DRT) support is under consideration.",
    options: [
      { id: 'A', text: "Subscribe to AWS Shield Advanced, enable automatic layer 7 DDoS mitigation, and authorize the AWS DDoS Response Team (DRT)." },
      { id: 'B', text: "Rely on default AWS Shield Standard which only provides basic layer 3/4 SYN flood protection without financial guarantees." },
      { id: 'C', text: "Shut down all public web servers whenever a DDoS attack begins to save bandwidth costs." },
      { id: 'D', text: "Manually add individual attacker IP addresses to VPC Network ACLs during the DDoS event." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Subscribe to AWS Shield Advanced, enable automatic layer 7 DDoS mitigation, and authorize the AWS DDoS Response Team (DRT). AWS Shield Advanced provides enterprise protection against complex DDoS attacks. It includes automated layer 7 mitigation, 24/7 engagement with the AWS DDoS Response Team (DRT), and DDoS cost protection that credits charges incurred from scaling during an attack.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced.html",
    tags: ["AWS Shield Advanced", "Shield Advanced", "Enterprise Governance"]
  },
  {
    id: "aws-scs-342",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Shield Advanced and DDoS Mitigation: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates AWS Shield Advanced to protect mission-critical web applications against sophisticated multi-gigabit layer 3/4 and layer 7 DDoS attacks with financial indemnity.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Layer 7 DDoS attack mitigation, cost protection, and AWS DDoS Response Team (DRT) support is under consideration.",
    options: [
      { id: 'A', text: "Subscribe to AWS Shield Advanced, enable automatic layer 7 DDoS mitigation, and authorize the AWS DDoS Response Team (DRT)." },
      { id: 'B', text: "Rely on default AWS Shield Standard which only provides basic layer 3/4 SYN flood protection without financial guarantees." },
      { id: 'C', text: "Shut down all public web servers whenever a DDoS attack begins to save bandwidth costs." },
      { id: 'D', text: "Manually add individual attacker IP addresses to VPC Network ACLs during the DDoS event." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Subscribe to AWS Shield Advanced, enable automatic layer 7 DDoS mitigation, and authorize the AWS DDoS Response Team (DRT). AWS Shield Advanced provides enterprise protection against complex DDoS attacks. It includes automated layer 7 mitigation, 24/7 engagement with the AWS DDoS Response Team (DRT), and DDoS cost protection that credits charges incurred from scaling during an attack.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced.html",
    tags: ["AWS Shield Advanced", "Shield Advanced", "Incident Containment"]
  },
  {
    id: "aws-scs-343",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Shield Advanced and DDoS Mitigation: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates AWS Shield Advanced to protect mission-critical web applications against sophisticated multi-gigabit layer 3/4 and layer 7 DDoS attacks with financial indemnity.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Layer 7 DDoS attack mitigation, cost protection, and AWS DDoS Response Team (DRT) support is under consideration.",
    options: [
      { id: 'A', text: "Subscribe to AWS Shield Advanced, enable automatic layer 7 DDoS mitigation, and authorize the AWS DDoS Response Team (DRT)." },
      { id: 'B', text: "Rely on default AWS Shield Standard which only provides basic layer 3/4 SYN flood protection without financial guarantees." },
      { id: 'C', text: "Shut down all public web servers whenever a DDoS attack begins to save bandwidth costs." },
      { id: 'D', text: "Manually add individual attacker IP addresses to VPC Network ACLs during the DDoS event." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Subscribe to AWS Shield Advanced, enable automatic layer 7 DDoS mitigation, and authorize the AWS DDoS Response Team (DRT). AWS Shield Advanced provides enterprise protection against complex DDoS attacks. It includes automated layer 7 mitigation, 24/7 engagement with the AWS DDoS Response Team (DRT), and DDoS cost protection that credits charges incurred from scaling during an attack.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced.html",
    tags: ["AWS Shield Advanced", "Shield Advanced", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-344",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Shield Advanced and DDoS Mitigation: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates AWS Shield Advanced to protect mission-critical web applications against sophisticated multi-gigabit layer 3/4 and layer 7 DDoS attacks with financial indemnity.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Layer 7 DDoS attack mitigation, cost protection, and AWS DDoS Response Team (DRT) support is under consideration.",
    options: [
      { id: 'A', text: "Subscribe to AWS Shield Advanced, enable automatic layer 7 DDoS mitigation, and authorize the AWS DDoS Response Team (DRT)." },
      { id: 'B', text: "Rely on default AWS Shield Standard which only provides basic layer 3/4 SYN flood protection without financial guarantees." },
      { id: 'C', text: "Shut down all public web servers whenever a DDoS attack begins to save bandwidth costs." },
      { id: 'D', text: "Manually add individual attacker IP addresses to VPC Network ACLs during the DDoS event." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Subscribe to AWS Shield Advanced, enable automatic layer 7 DDoS mitigation, and authorize the AWS DDoS Response Team (DRT). AWS Shield Advanced provides enterprise protection against complex DDoS attacks. It includes automated layer 7 mitigation, 24/7 engagement with the AWS DDoS Response Team (DRT), and DDoS cost protection that credits charges incurred from scaling during an attack.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced.html",
    tags: ["AWS Shield Advanced", "Shield Advanced", "Data Protection"]
  },
  {
    id: "aws-scs-345",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Shield Advanced and DDoS Mitigation: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates AWS Shield Advanced to protect mission-critical web applications against sophisticated multi-gigabit layer 3/4 and layer 7 DDoS attacks with financial indemnity.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Layer 7 DDoS attack mitigation, cost protection, and AWS DDoS Response Team (DRT) support is under consideration.",
    options: [
      { id: 'A', text: "Subscribe to AWS Shield Advanced, enable automatic layer 7 DDoS mitigation, and authorize the AWS DDoS Response Team (DRT)." },
      { id: 'B', text: "Rely on default AWS Shield Standard which only provides basic layer 3/4 SYN flood protection without financial guarantees." },
      { id: 'C', text: "Shut down all public web servers whenever a DDoS attack begins to save bandwidth costs." },
      { id: 'D', text: "Manually add individual attacker IP addresses to VPC Network ACLs during the DDoS event." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Subscribe to AWS Shield Advanced, enable automatic layer 7 DDoS mitigation, and authorize the AWS DDoS Response Team (DRT). AWS Shield Advanced provides enterprise protection against complex DDoS attacks. It includes automated layer 7 mitigation, 24/7 engagement with the AWS DDoS Response Team (DRT), and DDoS cost protection that credits charges incurred from scaling during an attack.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced.html",
    tags: ["AWS Shield Advanced", "Shield Advanced", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-346",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "VPC Security Groups vs Network ACLs Deep Dive: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates Security Groups & NACLs to block a specific malicious IP subnet from reaching any resources in a subnet while allowing stateful return traffic for application servers.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Stateful security groups vs stateless network access control lists (NACLs) evaluation order is under consideration.",
    options: [
      { id: 'A', text: "Add an explicit `DENY` rule for the CIDR block in the subnet's stateless Network ACL, while managing stateful application rules in Security Groups." },
      { id: 'B', text: "Attempt to add a DENY rule to a Security Group, which only supports permissive ALLOW rules." },
      { id: 'C', text: "Disable Network ACLs and leave subnets completely unshielded." },
      { id: 'D', text: "Remove all outbound rules from Security Groups expecting them to block response traffic for accepted inbound connections." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add an explicit `DENY` rule for the CIDR block in the subnet's stateless Network ACL, while managing stateful application rules in Security Groups. Security Groups are stateful (return traffic is automatically allowed regardless of outbound rules) and support only `ALLOW` rules. Network ACLs are stateless (operating at the subnet boundary, evaluated by rule number order), and explicitly support both `ALLOW` and `DENY` rules, making NACLs ideal for blocking specific IP ranges.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html",
    tags: ["Security Groups & NACLs", "SG vs NACL", "Enterprise Governance"]
  },
  {
    id: "aws-scs-347",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "VPC Security Groups vs Network ACLs Deep Dive: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates Security Groups & NACLs to block a specific malicious IP subnet from reaching any resources in a subnet while allowing stateful return traffic for application servers.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Stateful security groups vs stateless network access control lists (NACLs) evaluation order is under consideration.",
    options: [
      { id: 'A', text: "Add an explicit `DENY` rule for the CIDR block in the subnet's stateless Network ACL, while managing stateful application rules in Security Groups." },
      { id: 'B', text: "Attempt to add a DENY rule to a Security Group, which only supports permissive ALLOW rules." },
      { id: 'C', text: "Disable Network ACLs and leave subnets completely unshielded." },
      { id: 'D', text: "Remove all outbound rules from Security Groups expecting them to block response traffic for accepted inbound connections." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add an explicit `DENY` rule for the CIDR block in the subnet's stateless Network ACL, while managing stateful application rules in Security Groups. Security Groups are stateful (return traffic is automatically allowed regardless of outbound rules) and support only `ALLOW` rules. Network ACLs are stateless (operating at the subnet boundary, evaluated by rule number order), and explicitly support both `ALLOW` and `DENY` rules, making NACLs ideal for blocking specific IP ranges.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html",
    tags: ["Security Groups & NACLs", "SG vs NACL", "Incident Containment"]
  },
  {
    id: "aws-scs-348",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "VPC Security Groups vs Network ACLs Deep Dive: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates Security Groups & NACLs to block a specific malicious IP subnet from reaching any resources in a subnet while allowing stateful return traffic for application servers.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Stateful security groups vs stateless network access control lists (NACLs) evaluation order is under consideration.",
    options: [
      { id: 'A', text: "Add an explicit `DENY` rule for the CIDR block in the subnet's stateless Network ACL, while managing stateful application rules in Security Groups." },
      { id: 'B', text: "Attempt to add a DENY rule to a Security Group, which only supports permissive ALLOW rules." },
      { id: 'C', text: "Disable Network ACLs and leave subnets completely unshielded." },
      { id: 'D', text: "Remove all outbound rules from Security Groups expecting them to block response traffic for accepted inbound connections." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add an explicit `DENY` rule for the CIDR block in the subnet's stateless Network ACL, while managing stateful application rules in Security Groups. Security Groups are stateful (return traffic is automatically allowed regardless of outbound rules) and support only `ALLOW` rules. Network ACLs are stateless (operating at the subnet boundary, evaluated by rule number order), and explicitly support both `ALLOW` and `DENY` rules, making NACLs ideal for blocking specific IP ranges.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html",
    tags: ["Security Groups & NACLs", "SG vs NACL", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-349",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "VPC Security Groups vs Network ACLs Deep Dive: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates Security Groups & NACLs to block a specific malicious IP subnet from reaching any resources in a subnet while allowing stateful return traffic for application servers.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Stateful security groups vs stateless network access control lists (NACLs) evaluation order is under consideration.",
    options: [
      { id: 'A', text: "Add an explicit `DENY` rule for the CIDR block in the subnet's stateless Network ACL, while managing stateful application rules in Security Groups." },
      { id: 'B', text: "Attempt to add a DENY rule to a Security Group, which only supports permissive ALLOW rules." },
      { id: 'C', text: "Disable Network ACLs and leave subnets completely unshielded." },
      { id: 'D', text: "Remove all outbound rules from Security Groups expecting them to block response traffic for accepted inbound connections." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add an explicit `DENY` rule for the CIDR block in the subnet's stateless Network ACL, while managing stateful application rules in Security Groups. Security Groups are stateful (return traffic is automatically allowed regardless of outbound rules) and support only `ALLOW` rules. Network ACLs are stateless (operating at the subnet boundary, evaluated by rule number order), and explicitly support both `ALLOW` and `DENY` rules, making NACLs ideal for blocking specific IP ranges.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html",
    tags: ["Security Groups & NACLs", "SG vs NACL", "Data Protection"]
  },
  {
    id: "aws-scs-350",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "VPC Security Groups vs Network ACLs Deep Dive: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates Security Groups & NACLs to block a specific malicious IP subnet from reaching any resources in a subnet while allowing stateful return traffic for application servers.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Stateful security groups vs stateless network access control lists (NACLs) evaluation order is under consideration.",
    options: [
      { id: 'A', text: "Add an explicit `DENY` rule for the CIDR block in the subnet's stateless Network ACL, while managing stateful application rules in Security Groups." },
      { id: 'B', text: "Attempt to add a DENY rule to a Security Group, which only supports permissive ALLOW rules." },
      { id: 'C', text: "Disable Network ACLs and leave subnets completely unshielded." },
      { id: 'D', text: "Remove all outbound rules from Security Groups expecting them to block response traffic for accepted inbound connections." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add an explicit `DENY` rule for the CIDR block in the subnet's stateless Network ACL, while managing stateful application rules in Security Groups. Security Groups are stateful (return traffic is automatically allowed regardless of outbound rules) and support only `ALLOW` rules. Network ACLs are stateless (operating at the subnet boundary, evaluated by rule number order), and explicitly support both `ALLOW` and `DENY` rules, making NACLs ideal for blocking specific IP ranges.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html",
    tags: ["Security Groups & NACLs", "SG vs NACL", "Infrastructure Defense"]
  }
];

export default AWS_SCS_QUESTIONS_14;
