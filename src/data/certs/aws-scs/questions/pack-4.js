export const AWS_SCS_QUESTIONS_4 = [
  {
    id: "aws-scs-76",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Detecting Unencrypted EBS Volume Creation via CloudTrail and EventBridge",
    scenario: "A security architect wants to prevent unencrypted EBS volumes from remaining active. Whenever an unencrypted volume is created, an automated script must immediately delete or snapshot the volume and terminate the instance.",
    question: "Which EventBridge event pattern matches the creation of an unencrypted EBS volume from CloudTrail?",
    options: [
      { id: 'A', text: "An EventBridge rule matching <code>AttachVolume</code> where <code>detail.requestParameters.device</code> is <code>/dev/xvda</code>" },
      { id: 'B', text: "A CloudWatch Logs subscription filter on <code>dmesg</code>" },
      { id: 'C', text: "An AWS Config rule running once per week" },
      { id: 'D', text: "An EventBridge rule matching <code>CreateVolume</code> where <code>detail.responseElements.encrypted</code> is <code>false</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When `CreateVolume` succeeds, the CloudTrail response elements record `encrypted: false` if encryption was not enabled. An EventBridge rule matching `detail.responseElements.encrypted = false` immediately triggers a Lambda function to take corrective containment action within seconds.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["EventBridge", "CloudTrail", "EBS", "Unencrypted-Volume"]
  },
  {
    id: "aws-scs-77",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Amazon GuardDuty CloudWatch Metric Export for Centralized SOC Dashboard",
    scenario: "A centralized security operations center tracks finding counts by severity (Low, Medium, High) in Amazon CloudWatch dashboards across multiple AWS Regions.",
    question: "Where does GuardDuty publish quantitative finding metrics for CloudWatch dashboards?",
    options: [
      { id: 'A', text: "GuardDuty automatically populates metrics in the AWS/EC2 namespace" },
      { id: 'B', text: "GuardDuty writes metrics to the Linux syslog daemon" },
      { id: 'C', text: "GuardDuty streams directly to Amazon Athena via internal queues" },
      { id: 'D', text: "Through EventBridge rules matching GuardDuty findings that emit custom CloudWatch metrics via a Lambda function (or native CloudWatch metric filters)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "GuardDuty publishes raw finding JSON payloads to Amazon EventBridge. To create aggregate CloudWatch dashboards showing finding counts by severity, teams configure an EventBridge rule that routes findings to a lightweight Lambda function or CloudWatch custom metric publisher.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["GuardDuty", "CloudWatch", "EventBridge", "Dashboards"]
  },
  {
    id: "aws-scs-78",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Auditing Lambda Function Environment Variable Encryption Settings",
    scenario: "An auditor flags that AWS Lambda functions might expose sensitive API tokens in plain text if helper encryption is not enabled.",
    question: "Which AWS Config managed rule checks whether AWS Lambda environment variables are encrypted with a customer managed KMS key?",
    options: [
      { id: 'A', text: "<code>ec2-volume-inuse-check</code>" },
      { id: 'B', text: "<code>iam-password-policy</code>" },
      { id: 'C', text: "<code>lambda-function-settings-check</code>" },
      { id: 'D', text: "<code>s3-bucket-ssl-requests-only</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The AWS Config managed rule `lambda-function-settings-check` evaluates Lambda function configurations, verifying that function settings (including environment variable encryption with customer managed KMS keys, runtime version, and VPC attachment) comply with organizational security policies.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["AWS-Config", "Lambda", "Environment-Variables", "KMS"]
  },
  {
    id: "aws-scs-79",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Monitoring Network Firewall Drop Events with CloudWatch Logs",
    scenario: "AWS Network Firewall is deployed in an inspection VPC. The security team needs to analyze all packets dropped by stateful Suricata rules to track active exploit attempts.",
    question: "How should AWS Network Firewall logging be configured to capture dropped packet metadata?",
    options: [
      { id: 'A', text: "Attach an AWS WAF Web ACL to the Network Firewall endpoint" },
      { id: 'B', text: "Configure Network Firewall logging to write <code>Alert</code> log types to an Amazon CloudWatch Log group or S3 bucket" },
      { id: 'C', text: "Rely on VPC Flow Logs on the transit gateway" },
      { id: 'D', text: "Configure Network Firewall to log only <code>Flow</code> logs" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Network Firewall provides two types of logs: **Flow logs** (standard network traffic metadata for all evaluated packets) and **Alert logs** (detailed records generated when stateful rules trigger an action, including `drop`, `reject`, or `alert`). Dropped packets and Suricata rule signatures are recorded in Alert logs.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["Network-Firewall", "Alert-Logs", "Suricata", "Intrusion-Detection"]
  },
  {
    id: "aws-scs-80",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Monitoring CloudTrail Trail Configuration Changes with CloudWatch",
    scenario: "To prevent stealthy tampering with compliance logging, an alert must trigger immediately if any administrator updates or deletes a CloudTrail trail configuration.",
    question: "Which metric filter pattern satisfies CIS Benchmark compliance for CloudTrail trail changes?",
    options: [
      { id: 'A', text: "<code>{ $.userIdentity.type = \"IAMUser\" }</code>" },
      { id: 'B', text: "<code>{ $.eventSource = \"ec2.amazonaws.com\" }</code>" },
      { id: 'C', text: "<code>{ $.errorCode = \"404\" }</code>" },
      { id: 'D', text: "<code>{($.eventName=CreateTrail)||($.eventName=UpdateTrail)||($.eventName=DeleteTrail)||($.eventName=StartLogging)||($.eventName=StopLogging)}</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The CIS AWS Foundations Benchmark specifies filtering CloudTrail logs for all trail lifecycle events (CreateTrail, UpdateTrail, DeleteTrail, StartLogging, StopLogging) to ensure that any tampering with audit trail collection is flagged instantly to security teams.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["CloudWatch", "Metric-Filter", "CloudTrail-Configuration", "CIS-Benchmark"]
  },
  {
    id: "aws-scs-81",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS WAF Rate-Based Rules for DDoS and Brute-Force Mitigation",
    scenario: "A public-facing e-commerce API running behind an Application Load Balancer is targeted by a distributed brute-force login attack from rotating IP addresses. The security team needs to automatically block any client IP address that sends more than 100 requests per 5-minute period to the /api/login endpoint.",
    question: "Which AWS WAF configuration implements this protection?",
    options: [
      { id: 'A', text: "Add a deny rule in the VPC Network ACL for every individual IP address observed in logs" },
      { id: 'B', text: "Configure an AWS Shield Advanced proactive engagement rule on the ALB" },
      { id: 'C', text: "Configure an Auto Scaling group scaling policy to terminate instances under high HTTP load" },
      { id: 'D', text: "Create an AWS WAF Web ACL with a rate-based rule evaluating requests matching the URI path /api/login, setting the rate limit to 100 requests per 5-minute evaluation window with a Block action" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS WAF rate-based rules track the number of requests arriving from each IP address over a sliding 5-minute evaluation window. When combined with a scope-down statement (such as matching requests with URI path /api/login), AWS WAF automatically blocks or CAPTCHA-challenges offending IPs that exceed the threshold.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based.html",
    tags: ["WAF", "Rate-Based Rules", "DDoS", "ALB"]
  },
  {
    id: "aws-scs-82",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Restricting VPC Interface Endpoints with Endpoint Policies",
    scenario: "A company uses an Amazon S3 interface endpoint (AWS PrivateLink) inside a private subnet. The security policy mandates that instances in this subnet must only be allowed to access an internal corporate S3 bucket (arn:aws:s3:::corp-internal-data) and must be blocked from accessing any other S3 buckets (including personal or external AWS accounts).",
    question: "How should this restriction be enforced?",
    options: [
      { id: 'A', text: "Configure a security group on the interface endpoint allowing port 443 outbound to 0.0.0.0/0" },
      { id: 'B', text: "Attach a VPC endpoint policy to the interface endpoint that allows s3:* actions only when Resource equals arn:aws:s3:::corp-internal-data and arn:aws:s3:::corp-internal-data/*" },
      { id: 'C', text: "Add an entry in the VPC route table pointing 0.0.0.0/0 to an egress-only internet gateway" },
      { id: 'D', text: "Attach a bucket policy on the internal S3 bucket denying access to all external VPCs" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "VPC endpoint policies are resource-based policies attached to VPC endpoints (both gateway and interface endpoints). Unlike security groups which control network traffic by IP and port, endpoint policies control which specific AWS resources and API actions can be accessed through that endpoint, preventing data exfiltration to unauthorized external buckets.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-access.html",
    tags: ["VPC Endpoints", "Endpoint Policies", "PrivateLink", "S3", "Data Exfiltration"]
  },
  {
    id: "aws-scs-83",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Mitigating Server-Side Request Forgery (SSRF) with IMDSv2",
    scenario: "A penetration testing report demonstrates that a web application running on Amazon EC2 is vulnerable to Server-Side Request Forgery (SSRF). An attacker exploited the vulnerability to query 169.254.169.254 and exfiltrate IAM role credentials from the instance metadata service.",
    question: "Which configuration must be enforced across all EC2 instances to neutralize this SSRF attack vector?",
    options: [
      { id: 'A', text: "Disable the instance metadata service completely on all application instances" },
      { id: 'B', text: "Attach a VPC Network ACL rule blocking traffic to 169.254.169.254" },
      { id: 'C', text: "Store the instance credentials in an Amazon S3 bucket instead of an IAM role" },
      { id: 'D', text: "Enforce Instance Metadata Service Version 2 (IMDSv2) by setting <code>HttpTokens=required</code> and setting <code>HttpPutResponseHopLimit=1</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "IMDSv2 mitigates SSRF by requiring session-oriented authentication. Callers must first send an HTTP PUT request with the header `X-aws-ec2-metadata-token-ttl-seconds` to obtain a session token, and subsequent requests must pass this token in the `X-aws-ec2-metadata-token` header. Most SSRF vulnerabilities cannot execute arbitrary PUT requests with custom headers. Setting `HttpPutResponseHopLimit=1` additionally blocks containers or pods running on the instance from reaching IMDSv2.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["EC2", "IMDSv2", "SSRF", "Instance-Metadata"]
  },
  {
    id: "aws-scs-84",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS WAF Rate-Based Rules for Brute-Force and DoS Defense",
    scenario: "A public authentication endpoint (/api/v1/login) on an Application Load Balancer is suffering from credential stuffing attacks. The security team wants to automatically block any client IP address that makes more than 100 requests to this specific URL within a 5-minute window.",
    question: "Which AWS WAF rule configuration achieves this rate-limiting defense?",
    options: [
      { id: 'A', text: "Create a Network ACL rule that denies TCP port 443 after 100 packets" },
      { id: 'B', text: "Deploy an AWS Shield Standard rule on the ALB target group" },
      { id: 'C', text: "Create an AWS WAF rate-based rule evaluated on IP address with a rate limit of 100, scoped with a condition statement matching URI path equals <code>/api/v1/login</code>, and set the action to Block" },
      { id: 'D', text: "Configure an ALB listener rule with a fixed response of 429 Too Many Requests" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS WAF supports rate-based rules that track request counts from client IPs over a sliding 5-minute evaluation window. Scoping down the rate-based rule with a nested statement (URI path equals `/api/v1/login`) ensures that the rate limit applies specifically to the sensitive login endpoint without impacting normal browsing traffic.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["AWS-WAF", "Rate-Based-Rule", "Credential-Stuffing", "ALB"]
  },
  {
    id: "aws-scs-85",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Centralized Egress Filtering via AWS Network Firewall in an Inspection VPC",
    scenario: "An enterprise requires that all outbound internet traffic from 20 application VPCs must route through a centralized inspection VPC to perform deep packet inspection, domain allow-listing, and Suricata intrusion prevention before reaching an Internet Gateway.",
    question: "Which routing architecture securely routes outbound traffic through AWS Network Firewall?",
    options: [
      { id: 'A', text: "Deploy an Internet Gateway in every application VPC with public subnets" },
      { id: 'B', text: "Attach an AWS WAF Web ACL to the Transit Gateway route table" },
      { id: 'C', text: "Configure VPC peering between all 20 application VPCs in a full mesh" },
      { id: 'D', text: "Connect the application VPCs to an AWS Transit Gateway (TGW). In the TGW route table for application VPCs, set the default route (0.0.0.0/0) to the Inspection VPC attachment. Route traffic within the Inspection VPC to the AWS Network Firewall endpoint, and from the firewall subnet to the NAT Gateway / Internet Gateway" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The centralized egress inspection architecture connects spoke VPCs via Transit Gateway. The spoke route table directs 0.0.0.0/0 to the inspection VPC attachment. Inside the inspection VPC, traffic enters through TGW attachment subnets, routes to Network Firewall endpoints for stateful inspection and domain filtering, passes through a NAT Gateway, and exits through the Internet Gateway.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["Network-Firewall", "Inspection-VPC", "Transit-Gateway", "Egress-Filtering"]
  },
  {
    id: "aws-scs-86",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Network Firewall: Restricting Egress to Approved FQDNs",
    scenario: "A compliance standard requires that production database instances must only connect to external update repositories on approved domain names (e.g. *.github.com, packages.microsoft.com). All other outbound internet connections must be dropped.",
    question: "Which AWS Network Firewall rule group type and configuration enforces this domain-based restriction?",
    options: [
      { id: 'A', text: "A VPC Network ACL with DNS domain names in rule entries" },
      { id: 'B', text: "A stateful rule group configured with Domain List filtering, specifying allowed domain names, target type HTTP_HOST and TLS_SNI, and default action to Drop" },
      { id: 'C', text: "An AWS WAF Web ACL attached to the private subnet route table" },
      { id: 'D', text: "A stateless rule group with 5-tuple IP match rules" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Network Firewall stateful rule groups support Domain List rules. The firewall inspects both the HTTP `Host` header and the TLS Server Name Indication (`SNI`) extension in the TLS ClientHello handshake. Setting the domain list to allow specific FQDNs and dropping all other destinations enforces strict outbound egress control.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["Network-Firewall", "Domain-List", "SNI", "Egress-Control"]
  },
  {
    id: "aws-scs-87",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Eliminating Bastion Hosts with AWS Systems Manager Session Manager",
    scenario: "A security audit flags that maintaining traditional Linux bastion hosts with open SSH port 22 in public subnets exposes the organization to brute-force attacks and requires managing static SSH keys.",
    question: "Which architecture provides secure, auditable terminal access to private EC2 instances without opening inbound firewall ports?",
    options: [
      { id: 'A', text: "Store all private SSH keys in an encrypted public S3 bucket" },
      { id: 'B', text: "Install the AWS Systems Manager (SSM) Agent on private instances, assign an IAM role with <code>AmazonSSMManagedInstanceCore</code>, and access the instances via AWS Systems Manager Session Manager over HTTPS using private VPC endpoints" },
      { id: 'C', text: "Deploy an OpenVPN Access Server in a public subnet" },
      { id: 'D', text: "Open port 22 in the security group only for the corporate office public IP address" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Systems Manager Session Manager provides secure remote instance management via the SSM Agent. The agent initiates outbound TLS connections (port 443) to the Systems Manager service, requiring zero inbound ports in Security Groups or Network ACLs. Access is authorized via IAM, and all terminal keystrokes and session logs can be encrypted with KMS and delivered to S3/CloudWatch.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["Session-Manager", "SSM", "Bastion-Less", "Least-Privilege"]
  },
  {
    id: "aws-scs-88",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Mutual TLS (mTLS) Authentication on Application Load Balancers",
    scenario: "A financial API must authenticate B2B partner clients using X.509 client certificates at the transport layer before requests reach backend microservices.",
    question: "Which AWS service feature terminates client TLS handshakes and verifies client certificates natively?",
    options: [
      { id: 'A', text: "Network Load Balancer (NLB) with TCP passthrough to backend instances" },
      { id: 'B', text: "Application Load Balancer (ALB) with mutual TLS (mTLS) enabled on the HTTPS listener, configured with a trust store containing the partner's CA certificate bundle in Amazon S3" },
      { id: 'C', text: "AWS WAF with an IP allow-list rule" },
      { id: 'D', text: "Amazon CloudFront with Origin Access Control" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Application Load Balancers natively support mutual TLS (mTLS). Administrators create a trust store in ALB containing the root or intermediate CA certificates that signed the client certificates, enabling the ALB to validate client certificates directly at the load balancer layer before forwarding requests to target groups.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["ALB", "mTLS", "Client-Certificates", "Authentication"]
  },
  {
    id: "aws-scs-89",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Firewall Manager for Centralized Security Group Governance",
    scenario: "An enterprise with 100 AWS accounts must ensure that no security group in any VPC ever allows unrestricted inbound access (0.0.0.0/0) on port 22 (SSH) or port 3389 (RDP). Any violating rule must be automatically revoked.",
    question: "Which centralized AWS service enforces and auto-remediates security group rules across all member accounts in an organization?",
    options: [
      { id: 'A', text: "AWS Firewall Manager using a Common Security Group policy with automated remediation enabled" },
      { id: 'B', text: "Deploying a Python cron script on an EC2 instance in the management account" },
      { id: 'C', text: "AWS Shield Advanced applied to each member account" },
      { id: 'D', text: "Amazon GuardDuty Runtime Monitoring" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Firewall Manager integrates with AWS Organizations to centrally manage security policies. A Firewall Manager security group policy audits all security groups across all member accounts and Regions. Enabling auto-remediation automatically strips out disallowed inbound rules (such as 0.0.0.0/0 on SSH/RDP).",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["Firewall-Manager", "Security-Groups", "Organizations", "Auto-Remediation"]
  },
  {
    id: "aws-scs-90",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "VPC Endpoint Policies for Data Exfiltration Prevention",
    scenario: "A company wants to prevent malicious insiders on EC2 instances in private subnets from exfiltrating company data to their personal Amazon S3 buckets, while still allowing access to the corporate S3 buckets.",
    question: "Which security control enforces this boundary at the network layer?",
    options: [
      { id: 'A', text: "Use Network ACLs to block port 443" },
      { id: 'B', text: "Attach a VPC Endpoint Policy to the S3 VPC Gateway Endpoint that allows S3 actions only when <code>aws:ResourceAccount</code> matches the corporate AWS account ID (or specific bucket ARNs)" },
      { id: 'C', text: "Attach an S3 bucket policy to the personal external buckets" },
      { id: 'D', text: "Remove the S3 VPC Gateway Endpoint and route S3 traffic through an Internet Gateway" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "VPC Endpoint policies attach directly to VPC endpoints (Gateway or Interface endpoints). By restricting the `Resource` or using the `aws:ResourceAccount` / `aws:PrincipalOrgID` condition key, the endpoint will drop any requests targeting S3 buckets outside the corporate organization, preventing exfiltration to unauthorized accounts.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["VPC-Endpoint-Policy", "S3", "Data-Exfiltration", "Network-Security"]
  },
  {
    id: "aws-scs-91",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Security Groups vs. Network ACLs: Ephemeral Port Return Traffic",
    scenario: "A database instance in a private subnet must connect outbound to an external software repository on TCP port 443. The security group has an outbound rule allowing TCP 443 to 0.0.0.0/0, but the Network ACL denies all inbound traffic. Outbound connections are timing out.",
    question: "Why is the connection failing, and how should the Network ACL be updated?",
    options: [
      { id: 'A', text: "The private subnet must be converted to a public subnet" },
      { id: 'B', text: "Network ACLs do not support TCP port 443" },
      { id: 'C', text: "Network ACLs are stateless; an inbound rule allowing return traffic on ephemeral ports (TCP 1024-65535) from 0.0.0.0/0 must be added to the private subnet Network ACL" },
      { id: 'D', text: "Security groups are stateless; an inbound rule on port 443 must be added to the security group" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Unlike Security Groups (which are stateful and automatically permit return traffic), Network ACLs are stateless. When an EC2 instance initiates an outbound connection on port 443, the remote server responds on a temporary ephemeral port (typically TCP 1024–65535). The subnet's Network ACL must have an inbound rule allowing return traffic on the ephemeral port range.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["Network-ACL", "Security-Groups", "Ephemeral-Ports", "Stateless"]
  },
  {
    id: "aws-scs-92",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Securing ALB Ingress with AWS WAF Bot Control",
    scenario: "A ticketing website is overwhelmed by automated scraping bots that enumerate seat availability and execute high-frequency HTTP requests, bypassing simple rate-limiting rules.",
    question: "Which AWS WAF managed rule group detects and blocks sophisticated bot signatures and scrapers?",
    options: [
      { id: 'A', text: "AWS Managed Rules for Core Rule Set (AWSManagedRulesCommonRuleSet)" },
      { id: 'B', text: "AWS Managed Rules for SQL Database (AWSManagedRulesSQLiRuleSet)" },
      { id: 'C', text: "AWS Managed Rules for Known Bad Inputs (AWSManagedRulesKnownBadInputsRuleSet)" },
      { id: 'D', text: "AWS Managed Rules for Bot Control (AWSManagedRulesBotControlRuleSet)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The AWS WAF Bot Control managed rule group analyzes incoming HTTP request signatures, browser fingerprints, and token payloads to detect and mitigate malicious bot traffic, scrapers, search engine impersonators, and automated crawlers.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["AWS-WAF", "Bot-Control", "DDoS", "Scraping"]
  },
  {
    id: "aws-scs-93",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Enforcing HTTPS and Minimum TLS 1.2 on Application Load Balancers",
    scenario: "A compliance regulation requires that all web traffic entering an Application Load Balancer must use HTTPS, and deprecated cryptographic ciphers (SSLv3, TLS 1.0, and TLS 1.1) must be completely disabled.",
    question: "How must the ALB listeners and security policies be configured?",
    options: [
      { id: 'A', text: "Create an HTTP listener on port 80 that redirects all requests to HTTPS port 443 with a 301 redirect, and attach the <code>ELBSecurityPolicy-TLS13-1-2-2021-06</code> security policy to the HTTPS port 443 listener" },
      { id: 'B', text: "Attach an SSL certificate directly to the EC2 instances in private subnets" },
      { id: 'C', text: "Deploy an AWS WAF rule that blocks HTTP requests" },
      { id: 'D', text: "Delete the port 80 listener and configure an IAM policy restricting TLS versions" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "To enforce HTTPS, the ALB HTTP (port 80) listener should be configured with an automatic redirect action to HTTPS (port 443). To disable insecure TLS protocols and weak ciphers, administrators assign a modern predefined SSL/TLS security policy (e.g. `ELBSecurityPolicy-TLS13-1-2-2021-06`) on the HTTPS listener.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["ALB", "TLS-1.2", "SSL-Policy", "Redirect"]
  },
  {
    id: "aws-scs-94",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Securing Private EC2 Communication with AWS PrivateLink",
    scenario: "An enterprise application running in VPC A needs to access a proprietary microservice hosted by a vendor in VPC B. The traffic must never traverse the public internet, VPC peering is forbidden due to overlapping CIDR ranges, and the vendor must not have access to any other resources in VPC A.",
    question: "Which architectural pattern fulfills these strict network isolation criteria?",
    options: [
      { id: 'A', text: "Establish an IPsec VPN tunnel between VPC A and VPC B using Internet Gateways" },
      { id: 'B', text: "The vendor configures a Network Load Balancer (NLB) in VPC B and creates a VPC Endpoint Service (AWS PrivateLink). The enterprise creates an Interface VPC Endpoint in VPC A connected to the vendor's service" },
      { id: 'C', text: "Create an AWS Transit Gateway and enable route leaking between the VPCs" },
      { id: 'D', text: "Deploy an Application Load Balancer with public Elastic IP addresses" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS PrivateLink enables private, unidirectional connectivity between VPCs without requiring VPC peering or internet exposure. The service provider frontends their service with an NLB and creates an Endpoint Service; the consumer provisions an Interface Endpoint (ENI) in their VPC. PrivateLink works seamlessly across overlapping IP CIDR ranges.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["PrivateLink", "VPC-Endpoint", "Overlapping-CIDR", "Zero-Trust"]
  },
  {
    id: "aws-scs-95",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Protecting Web Applications with AWS Shield Advanced",
    scenario: "A global media company hosting their web application on Amazon CloudFront and ALB experiences a multi-gigabit Layer 7 distributed denial of service attack that escalates AWS auto-scaling costs significantly.",
    question: "Which features provided by AWS Shield Advanced protect the organization during this event?",
    options: [
      { id: 'A', text: "Automatic deletion of all EC2 instances under high CPU utilization" },
      { id: 'B', text: "Free SSL/TLS certificates with automated email renewal" },
      { id: 'C', text: "Instant conversion of dynamic web applications into static S3 sites" },
      { id: 'D', text: "Access to the 24/7 AWS Shield Response Team (SRT), automated application layer DDoS mitigation, and Cost Protection for Spike Coverage to credit charges incurred by DDoS scaling" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Shield Advanced provides enterprise DDoS protection. Key benefits include 24/7 engagement with the Shield Response Team (SRT), automated creation of custom AWS WAF mitigation rules against Layer 7 attacks, and Cost Protection for Spike Coverage (which refunds auto-scaling costs incurred due to DDoS attacks).",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["Shield-Advanced", "DDoS", "Cost-Protection", "SRT"]
  },
  {
    id: "aws-scs-96",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "EC2 Image Builder for Hardened CIS Benchmark AMIs",
    scenario: "An enterprise must ensure that all EC2 instances deployed across 30 development and production accounts originate from a hardened Amazon Linux 2023 AMI that complies with the CIS Level 1 Benchmark.",
    question: "Which AWS native pipeline automates the continuous building, testing, and distribution of hardened AMIs?",
    options: [
      { id: 'A', text: "AWS CodeDeploy deploying bash scripts on running instances" },
      { id: 'B', text: "EC2 Image Builder with a CIS benchmark component recipe, automated validation tests, and distribution configuration sharing the AMI across AWS Organizations accounts" },
      { id: 'C', text: "Manual snapshotting of a single EC2 instance in the default VPC" },
      { id: 'D', text: "AWS Cloud9 integrated development environment" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "EC2 Image Builder automates the creation, management, and deployment of customized, secure, and up-to-date server images. AWS provides pre-built CIS benchmark components that can be incorporated into image recipes. The distribution settings automatically share encrypted AMIs with other AWS accounts or organizations.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["EC2-Image-Builder", "CIS-Benchmark", "Hardened-AMI", "Golden-Image"]
  },
  {
    id: "aws-scs-97",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Restricting S3 Bucket Access to Specific VPC Endpoints",
    scenario: "An S3 bucket storing sensitive medical imaging files must be accessible only from applications running within a specific VPC. Requests originating from any other network, including other corporate VPCs or the public internet, must be rejected.",
    question: "Which condition block in the S3 bucket policy restricts access strictly to the VPC's Gateway Endpoint?",
    options: [
      { id: 'A', text: "<code>\"Condition\": { \"StringNotEquals\": { \"aws:sourceVpce\": \"vpce-12345678\" } }, \"Effect\": \"Deny\"</code>" },
      { id: 'B', text: "<code>\"Condition\": { \"StringEquals\": { \"aws:PrincipalArn\": \"*\" } }</code>" },
      { id: 'C', text: "<code>\"Condition\": { \"IpAddress\": { \"aws:SourceIp\": \"10.0.0.0/16\" } }, \"Effect\": \"Allow\"</code>" },
      { id: 'D', text: "<code>\"Condition\": { \"Bool\": { \"aws:SecureTransport\": \"false\" } }</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "To restrict an S3 bucket strictly to a designated VPC endpoint, an explicit Deny policy is attached with the condition `StringNotEquals: { 'aws:sourceVpce': 'vpce-12345678' }`. Any request that does not traverse that specific endpoint ID is immediately denied.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["S3-Bucket-Policy", "aws-sourceVpce", "Gateway-Endpoint", "Network-Isolation"]
  },
  {
    id: "aws-scs-98",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Patching EC2 Fleets Securely with AWS Systems Manager Patch Manager",
    scenario: "A security policy mandates that all production EC2 instances must have security patches categorized as Critical or High automatically installed within 7 days of release, with automated rollback and compliance reporting.",
    question: "Which AWS Systems Manager capability executes and tracks this patching lifecycle?",
    options: [
      { id: 'A', text: "AWS CodePipeline executing yum update every night" },
      { id: 'B', text: "SSM State Manager running shell scripts with curl commands" },
      { id: 'C', text: "AWS CloudTrail executing SSM automation on every instance boot" },
      { id: 'D', text: "SSM Patch Manager configured with a custom Patch Baseline approving Critical and High patches with a 7-day auto-approval delay, executed via Maintenance Windows" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Systems Manager Patch Manager allows defining Patch Baselines. Baselines can specify auto-approval rules based on severity (Critical, Important) and an approval delay (e.g. 7 days). SSM Maintenance Windows schedule the non-disruptive execution of patches across tagged target instance groups with full compliance dashboards.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["Systems-Manager", "Patch-Manager", "Vulnerability-Management", "Compliance"]
  },
  {
    id: "aws-scs-99",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS WAF Custom Rules for Geo-Blocking and Header Validation",
    scenario: "A company operating strictly in North America wants to block all web requests originating from outside the US and Canada, and also reject any request that does not include a proprietary authorization header (X-Custom-Auth).",
    question: "Which combination of AWS WAF rules enforces these requirements?",
    options: [
      { id: 'A', text: "An ALB listener rule forwarding traffic to an on-premises proxy" },
      { id: 'B', text: "A Web ACL with: 1. A geo match statement configured to Block requests if country code is not US or CA; 2. A size constraint or string match statement checking that the header <code>X-Custom-Auth</code> exists and contains the valid secret" },
      { id: 'C', text: "A Network ACL denying all IP addresses outside North America" },
      { id: 'D', text: "A Route 53 latency routing policy that excludes European DNS queries" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS WAF Web ACLs support geographic match statements (inspecting the client IP against MaxMind databases) to allow or block traffic by country code. Custom header rules inspect incoming HTTP headers, verifying the presence and value of custom authentication tokens.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["AWS-WAF", "Geo-Blocking", "Custom-Headers", "Perimeter-Defense"]
  },
  {
    id: "aws-scs-100",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Detecting Compromised Instances Probing AWS Metadata via VPC Flow Logs",
    scenario: "An attacker gains a webshell on an EC2 instance and attempts to scan other internal subnets and probe the link-local metadata address (169.254.169.254) for credentials.",
    question: "How do VPC Flow Logs capture traffic to the link-local metadata address?",
    options: [
      { id: 'A', text: "AWS WAF logs metadata traffic when attached to the private subnet" },
      { id: 'B', text: "Route 53 Resolver query logs record all link-local HTTP requests" },
      { id: 'C', text: "VPC Flow Logs automatically capture link-local packets with action ACCEPT" },
      { id: 'D', text: "VPC Flow Logs do not capture link-local traffic (169.254.169.254); host-level monitoring (e.g. iptables, GuardDuty Runtime Monitoring, or osquery via SSM) must be used" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A critical AWS networking limitation: VPC Flow Logs do **not** capture traffic to the link-local address `169.254.169.254`, traffic to Amazon DNS (VPC base+2), or DHCP traffic. To detect probing of instance metadata or link-local endpoints, security teams must deploy in-guest monitoring (such as Amazon GuardDuty Runtime Monitoring, auditd, or iptables logging).",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["VPC-Flow-Logs", "Link-Local", "IMDS", "Gotcha"]
  }
];

export default AWS_SCS_QUESTIONS_4;
