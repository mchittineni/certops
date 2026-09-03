export const AWS_SCS_QUESTIONS_5 = [
  {
    id: "aws-scs-101",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Secure Cross-VPC Peering: Security Group Referencing",
    scenario: "VPC A (10.1.0.0/16) and VPC B (10.2.0.0/16) in the same AWS Region are connected via a VPC Peering connection. Application servers in VPC A must communicate with database servers in VPC B on port 5432 without opening access to all instances in VPC A's CIDR.",
    question: "How should the security group in VPC B be configured for least privilege?",
    options: [
      { id: 'A', text: "Attach a Network ACL rule permitting port 5432 to 0.0.0.0/0" },
      { id: 'B', text: "Specify the entire subnet CIDR block of VPC A (10.1.0.0/16)" },
      { id: 'C', text: "Reference the security group ID of the application servers in VPC A (e.g. <code>sg-app12345</code>) as the source in the database security group ingress rule" },
      { id: 'D', text: "Establish an SSH tunnel between the instances" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In same-region VPC peering connections (and same-region Transit Gateway connections), Security Groups support security group referencing. The receiving security group in VPC B can specify the peer security group ID (from VPC A) as the source, enforcing least privilege without hardcoding IP subnets.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["Security-Groups", "VPC-Peering", "Least-Privilege", "Referencing"]
  },
  {
    id: "aws-scs-102",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Preventing Public AMI Sharing in AWS Organizations",
    scenario: "A company must guarantee that no IAM user or automated build pipeline can ever change an Amazon Machine Image (AMI) permission to make it publicly accessible.",
    question: "Which preventive control blocks making AMIs public across all accounts in an organization?",
    options: [
      { id: 'A', text: "Deploy an AWS Config rule that sends an email after an AMI is made public" },
      { id: 'B', text: "Enable the Amazon EC2 Block Public Access for AMIs feature at the AWS account or AWS Organizations level" },
      { id: 'C', text: "Rely on Amazon Inspector vulnerability scans" },
      { id: 'D', text: "Delete all customer managed AMIs from the account" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon EC2 offers **Block Public Access for AMIs**. When enabled at the account or organizational level, it prevents users from sharing AMIs publicly (via the `ModifyImageAttribute` API), blocking accidental or malicious public exposure of proprietary operating system images and secrets.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["EC2", "Block-Public-Access", "AMI-Hardening", "Preventive-Control"]
  },
  {
    id: "aws-scs-103",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Network Firewall: Stateful Inspection Action Order",
    scenario: "A network security administrator writes custom Suricata rules in an AWS Network Firewall stateful rule group. The administrator wants rules to be evaluated strictly in the order they appear in the configuration file, rather than by default Suricata action priority (Pass, Drop, Alert).",
    question: "Which rule order setting must be configured on the stateful rule group?",
    options: [
      { id: 'A', text: "Disable stateless inspection on the firewall policy" },
      { id: 'B', text: "Set the rule order to <code>Strict order</code> and specify rule order evaluation priority" },
      { id: 'C', text: "Set the rule order to <code>Default action order</code>" },
      { id: 'D', text: "Configure all rules as stateless rules" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "By default, AWS Network Firewall uses Suricata default action ordering: Pass rules take precedence over Drop rules, which take precedence over Alert rules. Configuring **Strict order** allows administrators to define explicit numerical rule evaluation order, ensuring that specific Drop rules execute before general Pass rules.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["Network-Firewall", "Suricata", "Strict-Order", "Rule-Evaluation"]
  },
  {
    id: "aws-scs-104",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Hardening S3 Endpoints against Unauthorized Principals",
    scenario: "An enterprise wants to allow internal applications in a VPC to access corporate S3 buckets via a Gateway Endpoint, but wants to block external contractors using their own AWS accounts on the same VPC from accessing their personal AWS S3 buckets.",
    question: "Which condition key in the VPC endpoint policy restricts S3 access strictly to corporate organization identities?",
    options: [
      { id: 'A', text: "<code>\"Condition\": { \"Bool\": { \"aws:MultiFactorAuthPresent\": \"true\" } }</code>" },
      { id: 'B', text: "<code>\"Condition\": { \"StringLike\": { \"s3:prefix\": \"*\" } }</code>" },
      { id: 'C', text: "<code>\"Condition\": { \"IpAddress\": { \"aws:SourceIp\": \"0.0.0.0/0\" } }</code>" },
      { id: 'D', text: "<code>\"Condition\": { \"StringEquals\": { \"aws:PrincipalOrgID\": \"o-exampleorg123\" } }</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The global condition key `aws:PrincipalOrgID` matches the AWS Organizations ID of the principal making the request. In a VPC endpoint policy, requiring `aws:PrincipalOrgID` ensures that only IAM users and roles belonging to the company's AWS Organization can utilize the endpoint to access S3.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["VPC-Endpoint-Policy", "aws-PrincipalOrgID", "Data-Protection", "Organizations"]
  },
  {
    id: "aws-scs-105",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS WAF Captcha and Challenge Actions for Anti-Scraping",
    scenario: "An e-commerce site wants to deter automated bots from inventory-scraping product pages without completely blocking human users who happen to browse rapidly.",
    question: "Which AWS WAF rule action tests suspected client browsers with silent or interactive puzzles before permitting access?",
    options: [
      { id: 'A', text: "Attach an Amazon Cognito User Pool to the load balancer" },
      { id: 'B', text: "Set the action to <code>Block</code> with HTTP 500 error code" },
      { id: 'C', text: "Set the action to <code>Count</code> and ignore the logs" },
      { id: 'D', text: "Configure the WAF rule action to <code>Challenge</code> (silent browser token verification) or <code>CAPTCHA</code> (interactive visual puzzle)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS WAF supports **Challenge** and **CAPTCHA** actions. Challenge runs silent client-side JavaScript tests to verify that the client is an authentic web browser. If silent validation fails or high suspicion remains, the CAPTCHA action presents an interactive puzzle to differentiate humans from bots.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["AWS-WAF", "CAPTCHA", "Challenge", "Bot-Mitigation"]
  },
  {
    id: "aws-scs-106",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Securing Application Load Balancers with Target Group IP Deregistration Delay",
    scenario: "During an incident, a compromised EC2 instance behind an ALB must be deregistered from the target group immediately without waiting for the default 300-second connection draining period.",
    question: "Which target group attribute controls this connection draining timeout?",
    options: [
      { id: 'A', text: "<code>slow_start.duration_seconds</code>" },
      { id: 'B', text: "<code>health_check_interval_seconds</code>" },
      { id: 'C', text: "<code>stickiness.lb_cookie.duration_seconds</code>" },
      { id: 'D', text: "<code>deregistration_delay.timeout_seconds</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `deregistration_delay.timeout_seconds` attribute specifies the time (default 300s) the load balancer waits for in-flight requests to complete before terminating connections to a deregistered target. During an active breach, setting this attribute to 0 forcibly severs all active connections to the compromised instance immediately.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["ALB", "Target-Group", "Connection-Draining", "Incident-Response"]
  },
  {
    id: "aws-scs-107",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Protecting Network Load Balancers with TLS Termination and Security Groups",
    scenario: "A legacy architecture uses a Network Load Balancer (NLB) fronting financial microservices. The security team needs to terminate TLS on the load balancer and restrict ingress traffic using security groups directly on the NLB.",
    question: "Which NLB configuration supports both TLS termination and native security group attachments?",
    options: [
      { id: 'A', text: "Convert the NLB into a Classic Load Balancer" },
      { id: 'B', text: "Attach an AWS WAF Web ACL directly to the NLB TCP listener" },
      { id: 'C', text: "Create a TLS listener on port 443 with an ACM certificate and attach a security group directly to the Network Load Balancer" },
      { id: 'D', text: "Deploy an iptables firewall on each backend target instance" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Modern Network Load Balancers support native TLS termination (decrypting traffic and offloading certificates from target instances) and support attaching Security Groups directly to the NLB. This allows stateful IP filtering at the NLB entry point before traffic reaches target instances.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["NLB", "Security-Groups", "TLS-Termination", "Network-Security"]
  },
  {
    id: "aws-scs-108",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Hardening Linux Kernel Parameters via EC2 User Data and sysctl",
    scenario: "A security baseline requires disabling IP source routing, enabling TCP SYN cookies to mitigate SYN flood attacks, and ignoring ICMP broadcast requests across all newly launched EC2 instances.",
    question: "Where should these kernel parameter modifications be applied during automated instance provisioning?",
    options: [
      { id: 'A', text: "In the VPC DHCP options set configuration" },
      { id: 'B', text: "In the EC2 User Data script by writing parameters to <code>/etc/sysctl.d/99-security.conf</code> and running <code>sysctl -p /etc/sysctl.d/99-security.conf</code>" },
      { id: 'C', text: "In the IAM role trust policy attached to the instance" },
      { id: 'D', text: "In the Network ACL inbound rule configuration" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kernel network parameters in Linux are configured via `sysctl`. Placing configuration entries (such as `net.ipv4.tcp_syncookies = 1` and `net.ipv4.conf.all.accept_source_route = 0`) into `/etc/sysctl.d/` and applying them during EC2 User Data execution ensures instances boot in a hardened state.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["EC2", "sysctl", "Host-Hardening", "SYN-Cookies"]
  },
  {
    id: "aws-scs-109",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Preventing S3 Bucket Ransomware with S3 Versioning and MFA Delete",
    scenario: "A security engineer must prevent attackers with compromised administrative credentials from deleting backups or permanently wiping previous object versions in an Amazon S3 bucket.",
    question: "Which combination of S3 data protection features enforces hardware token approval for permanent object deletion?",
    options: [
      { id: 'A', text: "Enable S3 Server Access Logging and S3 Event Notifications" },
      { id: 'B', text: "Attach an S3 bucket policy allowing s3:DeleteObject only during business hours" },
      { id: 'C', text: "Configure Amazon S3 Transfer Acceleration" },
      { id: 'D', text: "Enable S3 Versioning and configure MFA Delete using the AWS CLI with the AWS account root credentials and a physical MFA token" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "MFA Delete requires multi-factor authentication (an MFA code and root credentials) to permanently delete an object version or alter the bucket's versioning state. Even if an attacker steals administrator IAM credentials, they cannot delete versioned objects without the physical MFA device.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["S3", "MFA-Delete", "Versioning", "Ransomware-Defense"]
  },
  {
    id: "aws-scs-110",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Network Firewall: Stateful Suricata IPS Rule Syntax",
    scenario: "A security engineer wants to write a custom Suricata rule in AWS Network Firewall that detects and drops any outbound HTTP connection containing the string 'malware_c2_beacon' in the URI.",
    question: "Which Suricata rule syntax accurately defines this drop action?",
    options: [
      { id: 'A', text: "<code>drop http $HOME_NET any -&gt; $EXTERNAL_NET any (msg:\"Malware C2 Beacon Detected\"; content:\"malware_c2_beacon\"; http_uri; sid:1000001; rev:1;)</code>" },
      { id: 'B', text: "<code>reject ip any -&gt; any (payload: \"malware_c2_beacon\")</code>" },
      { id: 'C', text: "<code>deny tcp any any -&gt; any any (action: block; string: \"malware_c2_beacon\";)</code>" },
      { id: 'D', text: "<code>filter outbound http where uri contains 'malware_c2_beacon' drop</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Network Firewall stateful rule groups support open standard Suricata IPS format. The rule specifies the action (`drop`), protocol (`http`), direction (`$HOME_NET any -> $EXTERNAL_NET any`), message (`msg`), pattern matching modifier (`content:\"malware_c2_beacon\"; http_uri;`), and unique signature identifier (`sid:1000001; rev:1;`).",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["Network-Firewall", "Suricata", "IPS", "Custom-Rules"]
  },
  {
    id: "aws-scs-111",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Isolating Workloads with Dedicated Hosts vs. Dedicated Instances",
    scenario: "A financial client has strict software licensing terms and regulatory mandates requiring hardware isolation from other AWS customers, visibility into physical socket and core counts, and control over instance placement on physical servers.",
    question: "Which EC2 tenancy model satisfies both regulatory physical isolation and host-level software licensing requirements?",
    options: [
      { id: 'A', text: "Spot Instances with placement groups" },
      { id: 'B', text: "Amazon EC2 Dedicated Instances" },
      { id: 'C', text: "Amazon EC2 Dedicated Hosts" },
      { id: 'D', text: "Default tenancy EC2 instances in an isolated VPC" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Both Dedicated Instances and Dedicated Hosts run on single-tenant physical hardware. However, **Dedicated Hosts** provide visibility into physical sockets and cores, allow controlling instance placement (affinity), and support Bring-Your-Own-License (BYOL) software agreements based on physical CPU cores.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["EC2", "Dedicated-Hosts", "Tenancy", "Compliance"]
  },
  {
    id: "aws-scs-112",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS WAF Header Inspection: Preventing SQL Injection in Cookies",
    scenario: "A vulnerability assessment discovers that a web application is vulnerable to SQL injection through a session tracking cookie named 'session_token'. Standard WAF query string inspection rules are not intercepting this vector.",
    question: "How should the AWS WAF rule statement be updated?",
    options: [
      { id: 'A', text: "Configure an ALB listener rule to drop all cookies" },
      { id: 'B', text: "Attach a rate-based rule on the IP address" },
      { id: 'C', text: "Inspect the query string for SQL injection patterns" },
      { id: 'D', text: "Configure a WAF SQL injection match statement that inspects the <code>Single header</code> or <code>Cookie</code> with the specific cookie name <code>session_token</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Attackers frequently attempt SQL injection and cross-site scripting attacks within HTTP cookies or custom headers. AWS WAF allows configuring inspection statements targeting specific cookies by name (`session_token`), verifying the cookie value against SQL injection signatures.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["AWS-WAF", "SQLi", "Cookie-Inspection", "AppSec"]
  },
  {
    id: "aws-scs-113",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Detecting Unapproved Ports in Security Groups via AWS Config",
    scenario: "An enterprise baseline mandates that no security group may permit inbound traffic on port 21 (FTP), 23 (Telnet), or 3389 (RDP) from any source address.",
    question: "Which AWS Config managed rule audits security groups for restricted incoming ports?",
    options: [
      { id: 'A', text: "<code>cloudtrail-enabled</code>" },
      { id: 'B', text: "<code>restricted-common-ports</code>" },
      { id: 'C', text: "<code>s3-bucket-public-read-prohibited</code>" },
      { id: 'D', text: "<code>ec2-instance-managed-by-ssm</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The AWS Config managed rule `restricted-common-ports` evaluates whether security groups permit unrestricted incoming traffic to specified blocked ports (such as FTP, Telnet, SSH, or RDP), marking non-compliant rules for alerting or automated revocation.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["AWS-Config", "restricted-common-ports", "Security-Groups", "Compliance"]
  },
  {
    id: "aws-scs-114",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Protecting CloudFront Origins with Origin Access Control (OAC)",
    scenario: "A static website hosted on Amazon S3 is fronted by an Amazon CloudFront distribution. Users must be prevented from bypassing CloudFront and accessing the S3 bucket URL directly.",
    question: "Which modern AWS feature securely restricts S3 bucket access strictly to the CloudFront distribution?",
    options: [
      { id: 'A', text: "Configure CloudFront Origin Access Control (OAC), and update the S3 bucket policy to allow s3:GetObject only when <code>aws:SourceArn</code> matches the CloudFront distribution ARN" },
      { id: 'B', text: "Store S3 objects with public-read ACLs" },
      { id: 'C', text: "Configure Route 53 CNAME records pointing directly to S3" },
      { id: 'D', text: "Configure CloudFront Origin Access Identity (OAI) with an open S3 bucket policy" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Origin Access Control (OAC) is the modern replacement for legacy OAI. OAC supports all AWS Regions, supports SSE-KMS encryption with customer managed keys, and supports dynamic requests. The S3 bucket policy grants `s3:GetObject` to `cloudfront.amazonaws.com` with a condition matching `aws:SourceArn: arn:aws:cloudfront::{account}:distribution/{id}`.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["CloudFront", "OAC", "S3-Bucket-Policy", "Perimeter-Security"]
  },
  {
    id: "aws-scs-115",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Certificate Manager (ACM) Automated Renewal Requirements",
    scenario: "A public TLS certificate provisioned via AWS Certificate Manager (ACM) for an Application Load Balancer fails to renew automatically, resulting in an outage.",
    question: "Which condition must be met for ACM public certificates to renew automatically using DNS validation?",
    options: [
      { id: 'A', text: "The certificate private key must be exported to an S3 bucket" },
      { id: 'B', text: "The domain registrar must send a signed fax to Amazon Trust Services" },
      { id: 'C', text: "The certificate must be renewed manually every 13 months via the AWS CLI" },
      { id: 'D', text: "The CNAME record created during initial certificate issuance must remain permanently present in the domain's public DNS zone, and the certificate must be actively associated with an in-use AWS service" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "ACM automatically attempts renewal 60 days before expiration for public certificates validated via DNS. For automated renewal to succeed: 1. The CNAME validation record must remain in place in the DNS zone; 2. The certificate must be actively in use (associated with an ALB, CloudFront, or API Gateway).",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["ACM", "Automated-Renewal", "DNS-Validation", "TLS"]
  },
  {
    id: "aws-scs-116",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Systems Manager Run Command for Ephemeral Forensic Scripting",
    scenario: "During an incident, a forensic investigator needs to run a memory dumping script across 50 production EC2 instances simultaneously without opening SSH ports or sharing credentials.",
    question: "Which AWS service executes scripts securely across fleet instances with centralized logging?",
    options: [
      { id: 'A', text: "AWS Lambda running inside the default VPC" },
      { id: 'B', text: "AWS Systems Manager Run Command using the <code>AWS-RunShellScript</code> document, logging standard output to an encrypted S3 bucket" },
      { id: 'C', text: "SSH executed via bash loops over a public bastion host" },
      { id: 'D', text: "AWS CodeDeploy deploying a full application update" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Systems Manager Run Command allows administrators to execute scripts (using predefined SSM documents like `AWS-RunShellScript` or `AWS-RunPowerShellScript`) across fleets of instances without establishing interactive login sessions. Execution is authenticated via IAM, rate-limited, and output can be encrypted and archived in S3.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["Systems-Manager", "Run-Command", "Forensics", "Fleet-Management"]
  },
  {
    id: "aws-scs-117",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Securing VPC Peering against Unintended Transitive Routing",
    scenario: "VPC A is peered with VPC B, and VPC B is peered with VPC C. An auditor is concerned that instances in VPC A might be able to route packets to VPC C through VPC B.",
    question: "How does AWS VPC Peering handle transitive routing between peered VPCs?",
    options: [
      { id: 'A', text: "AWS VPC Peering strictly forbids transitive routing; traffic cannot hop through an intermediate VPC, so VPC A cannot reach VPC C unless a direct peering connection is established" },
      { id: 'B', text: "VPC B automatically acts as a NAT gateway for VPC A" },
      { id: 'C', text: "Transitive routing occurs only if Network ACLs allow port 80" },
      { id: 'D', text: "Transitive routing is enabled by default in all VPC peering connections" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS VPC Peering does **not** support edge-to-edge or transitive routing. Packets originating in VPC A cannot traverse through VPC B to reach VPC C, an on-premises network, or the internet. To enable hub-and-spoke multi-VPC transit routing, AWS Transit Gateway must be used.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["VPC-Peering", "Transitive-Routing", "Network-Security", "Architecture"]
  },
  {
    id: "aws-scs-118",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Hardening Amazon CloudFront with Custom Security Headers",
    scenario: "A security assessment requires that all HTTP responses returned by an Amazon CloudFront distribution must include strict security headers: <code>Strict-Transport-Security</code>, <code>X-Content-Type-Options: nosniff</code>, <code>X-Frame-Options: DENY</code>, and a <code>Content-Security-Policy</code>.",
    question: "Which native CloudFront feature injects these HTTP response headers without modifying origin application code?",
    options: [
      { id: 'A', text: "S3 metadata tags on each uploaded static file" },
      { id: 'B', text: "CloudFront Response Headers Policies attached to the distribution's cache behaviors" },
      { id: 'C', text: "AWS WAF Web ACL request transformation rules" },
      { id: 'D', text: "Route 53 latency routing policies" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CloudFront Response Headers Policies allow administrators to specify HTTP security headers (HSTS, X-Frame-Options, X-Content-Type-Options, Content-Security-Policy, Referrer-Policy) that CloudFront automatically inserts into every HTTP response returned to viewers, requiring zero origin modifications.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["CloudFront", "Security-Headers", "HSTS", "CSP"]
  },
  {
    id: "aws-scs-119",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Network Firewall: TLS Decryption and Inspection Architecture",
    scenario: "An organization must inspect encrypted outbound HTTPS traffic to detect malware payloads and prevent data exfiltration. The firewall must terminate TLS, inspect cleartext payloads against Suricata rules, and re-encrypt traffic toward the destination.",
    question: "Which AWS Network Firewall capability and configuration enables TLS outbound inspection?",
    options: [
      { id: 'A', text: "Deploy CloudFront in reverse proxy mode inside the private subnet" },
      { id: 'B', text: "Attach an AWS WAF Web ACL to the NAT Gateway" },
      { id: 'C', text: "Enable TLS Inspection configuration on the Network Firewall policy, providing an internal CA certificate imported into AWS Certificate Manager (ACM) to generate re-signed certificates for inspected sessions" },
      { id: 'D', text: "Install Wireshark on the Internet Gateway" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Network Firewall supports **TLS Inspection**. By associating a TLS inspection configuration with the firewall policy and providing an internal root or intermediate CA certificate stored in ACM, the firewall acts as a forward proxy: it intercepts outbound HTTPS connections, terminates TLS, inspects decrypted payloads, and re-encrypts to the destination.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["Network-Firewall", "TLS-Inspection", "Deep-Packet-Inspection", "ACM"]
  },
  {
    id: "aws-scs-120",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Configuring AWS WAF Web ACL Association with Application Resources",
    scenario: "A security engineer creates a regional AWS WAF Web ACL containing rate-limiting and SQL injection rules. Which set of AWS resources can be directly associated with this Web ACL?",
    question: "Which AWS services support direct regional AWS WAF Web ACL association?",
    options: [
      { id: 'A', text: "Amazon RDS databases and Amazon ElastiCache clusters" },
      { id: 'B', text: "Amazon S3 buckets and Amazon EFS file systems" },
      { id: 'C', text: "Application Load Balancers (ALB), Amazon API Gateway REST APIs, AWS AppSync GraphQL APIs, Amazon Cognito User Pools, and AWS App Runner services" },
      { id: 'D', text: "Amazon EC2 instances directly and Network Load Balancers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Regional AWS WAF Web ACLs can be directly associated with Application Load Balancers, Amazon API Gateway REST APIs, AWS AppSync GraphQL APIs, Amazon Cognito User Pools, AWS App Runner services, and AWS Verified Access instances. CloudFront distributions require a global Web ACL created in `us-east-1`.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["AWS-WAF", "Associations", "ALB", "API-Gateway"]
  },
  {
    id: "aws-scs-121",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Securing Container Workloads with Amazon EKS Security Groups for Pods",
    scenario: "A microservices application running on Amazon EKS has a payment service pod and a public catalog pod co-located on the same EC2 worker node. The payment pod must connect to an RDS database that restricts access via security group, but the catalog pod must not have network access to the database.",
    question: "Which Kubernetes and AWS networking capability enforces security group isolation per pod?",
    options: [
      { id: 'A', text: "Standard Kubernetes ClusterIP services without VPC integration" },
      { id: 'B', text: "Deploying an external squid proxy in a separate VPC" },
      { id: 'C', text: "Amazon EKS Security Groups for Pods using the Amazon VPC CNI plugin to attach dedicated Elastic Network Interfaces (ENIs) with distinct security groups directly to individual Kubernetes pods" },
      { id: 'D', text: "Relying solely on node-level security groups on the EC2 worker instances" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon EKS Security Groups for Pods leverages the Amazon VPC CNI to associate AWS Security Groups directly with Kubernetes Pods. Branch network interfaces are attached to pods, allowing granular, least-privilege security group rules matching specific pod identities even when running on shared worker nodes.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["EKS", "Security-Groups-for-Pods", "Microservices", "VPC-CNI"]
  },
  {
    id: "aws-scs-122",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Preventing Accidental Deletion of Critical EC2 Instances",
    scenario: "A mission-critical database running on EC2 must be protected from accidental termination by administrators using the AWS Management Console or AWS CLI scripts.",
    question: "Which two configurations provide defense-in-depth against instance termination?",
    options: [
      { id: 'A', text: "Enable Termination Protection (<code>DisableApiTermination=true</code>) on the EC2 instance, and attach an IAM policy with an explicit Deny on <code>ec2:TerminateInstances</code> unless a specific MFA token is presented" },
      { id: 'B', text: "Remove all security groups from the instance" },
      { id: 'C', text: "Change the instance tenancy from Default to Dedicated" },
      { id: 'D', text: "Store the EC2 instance ID in a private S3 bucket" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enabling `DisableApiTermination` on an EC2 instance blocks `TerminateInstances` API calls until termination protection is explicitly disabled. Combining this with an IAM policy that enforces MFA or denies `ec2:TerminateInstances` provides robust defense against human error and automated script bugs.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["EC2", "Termination-Protection", "IAM", "Operational-Resilience"]
  },
  {
    id: "aws-scs-123",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS WAF Token Domain and Cross-Site Request Forgery (CSRF) Mitigation",
    scenario: "A banking web portal must defend against Cross-Site Request Forgery (CSRF) and automated session replay attacks by validating cryptographic tokens tied to the browser session.",
    question: "How does AWS WAF Application Integration SDK and Token Validation protect against CSRF?",
    options: [
      { id: 'A', text: "AWS WAF replaces all user passwords with one-time SMS codes" },
      { id: 'B', text: "The ALB drops all HTTP requests containing cookies" },
      { id: 'C', text: "CloudFront caches all POST requests for 24 hours" },
      { id: 'D', text: "The application embeds the AWS WAF JavaScript SDK to obtain an encrypted WAF token (cookie) verified by Challenge or CAPTCHA rules on sensitive mutating endpoints" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The AWS WAF Application Integration SDK (JavaScript) runs on client web pages to generate encrypted WAF tokens proving browser authenticity and session context. Rules inspect these tokens on sensitive mutating endpoints (e.g. fund transfers) to reject requests originating from external CSRF origins.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["AWS-WAF", "CSRF", "WAF-Token", "Application-Security"]
  },
  {
    id: "aws-scs-124",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Enforcing Default EBS Encryption across an Entire AWS Region",
    scenario: "A security policy mandates that every new Amazon EBS volume created in an AWS account must be encrypted with a Customer Managed KMS Key, even if developers forget to specify the encryption flag during volume or instance creation.",
    question: "Which Amazon EC2 feature automatically enforces encryption on all newly created volumes?",
    options: [
      { id: 'A', text: "Deploy an AWS Lambda function that stops instances every 10 minutes" },
      { id: 'B', text: "Attach an IAM policy denying ec2:RunInstances" },
      { id: 'C', text: "Enable S3 bucket default encryption" },
      { id: 'D', text: "Enable **EBS encryption by default** in the EC2 settings for the Region, and specify a Customer Managed KMS Key as the default key" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon EC2 allows enabling **EBS encryption by default** on a per-Region basis. Once enabled, all newly created EBS volumes and snapshot copies are automatically encrypted at creation time using the designated KMS key (AWS managed or customer managed), with zero developer intervention required.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["EBS", "Encryption-by-Default", "KMS", "Compliance"]
  },
  {
    id: "aws-scs-125",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Network Segmentation: Private Subnet Routing Table Isolation",
    scenario: "A database subnet must be completely isolated from the internet. It must not have routes to an Internet Gateway, NAT Gateway, or Virtual Private Gateway, but must receive software patches from an internal repository hosted in another private subnet.",
    question: "How should the route table for this isolated database subnet be configured?",
    options: [
      { id: 'A', text: "Associate a custom route table containing only the local VPC route (e.g. <code>10.0.0.0/16 -&gt; local</code>) with zero 0.0.0.0/0 default routes" },
      { id: 'B', text: "Add a route 0.0.0.0/0 pointing to an Internet Gateway with a disabled state" },
      { id: 'C', text: "Configure a 0.0.0.0/0 route pointing to blackhole" },
      { id: 'D', text: "Delete the subnet from the VPC" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An isolated private subnet has a route table with only the default local route (e.g. `10.0.0.0/16 -> local`). Because there is no `0.0.0.0/0` route pointing to an Internet Gateway or NAT Gateway, workloads inside the subnet have zero internet ingress or egress capability, providing absolute perimeter isolation.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["VPC", "Route-Table", "Network-Segmentation", "Isolation"]
  }
];

export default AWS_SCS_QUESTIONS_5;
