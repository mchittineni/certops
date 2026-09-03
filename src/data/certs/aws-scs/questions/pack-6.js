export const AWS_SCS_QUESTIONS_6 = [
  {
    id: "aws-scs-126",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS WAF IP Sets: Dynamically Blocking Attacker IPs via Lambda",
    scenario: "A custom intrusion detection system (IDS) analyzes application error logs and identifies malicious IP addresses executing vulnerability probes. The security team wants to block these IP addresses at the CloudFront edge within seconds.",
    question: "Which AWS WAF component should be updated programmatically to enforce immediate blocking?",
    options: [
      { id: 'A', text: "An AWS WAF **IP Set** associated with a rule set to Block in the Web ACL, updated dynamically using the AWS SDK API <code>UpdateIPSet</code>" },
      { id: 'B', text: "A Network ACL entry created manually in each subnet" },
      { id: 'C', text: "A security group ingress rule with action Deny" },
      { id: 'D', text: "An IAM user policy containing IP restrictions" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS WAF IP Sets define collections of IP addresses and CIDR blocks. When a WAF rule evaluates an IP Set with a Block action, any client IP in the set is dropped at the edge. A Lambda function can call the `UpdateIPSet` API to add malicious IPs in real time as attacks are detected.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["AWS-WAF", "IP-Set", "Dynamic-Blocking", "Automation"]
  },
  {
    id: "aws-scs-127",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Protecting API Gateway with Resource Policies",
    scenario: "An internal REST API deployed on Amazon API Gateway must be invoked only by specific IAM roles residing in a designated partner AWS account, and must reject all traffic from other accounts even if callers possess valid API keys.",
    question: "Which security feature controls caller access directly at the API Gateway layer?",
    options: [
      { id: 'A', text: "An IAM group policy attached to the API Gateway deployment stage" },
      { id: 'B', text: "An **API Gateway Resource Policy** with an explicit Allow for the partner IAM role ARNs and a default Deny for all other callers" },
      { id: 'C', text: "A Network ACL attached to the API Gateway edge server" },
      { id: 'D', text: "An AWS WAF Web ACL matching HTTP 200 responses" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "API Gateway Resource Policies are JSON policy documents attached directly to REST APIs. They control which IAM principals, IP addresses, VPCs, or VPC endpoints are authorized to invoke the API, providing an essential layer of authorization prior to executing backend Lambda or HTTP integrations.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["API-Gateway", "Resource-Policy", "Authorization", "Access-Control"]
  },
  {
    id: "aws-scs-128",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "Hardening Amazon CloudFront with Signed URLs and Signed Cookies",
    scenario: "A subscription video streaming service serves premium video content from Amazon S3 through Amazon CloudFront. Content must be restricted to paying subscribers who have authenticated against the company's web portal.",
    question: "Which CloudFront mechanism restricts viewer access to authorized users?",
    options: [
      { id: 'A', text: "Require all users to enter AWS IAM access keys in their web browsers" },
      { id: 'B', text: "Generate CloudFront **Signed URLs** or **Signed Cookies** using a CloudFront key group and private RSA key, setting an expiration timestamp and optional IP address restriction" },
      { id: 'C', text: "Deploy an AWS WAF rate-limiting rule on the video files" },
      { id: 'D', text: "Configure S3 bucket public-read permissions with long obfuscated object keys" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CloudFront Signed URLs and Signed Cookies restrict access to private content. The application server authenticates the user, signs a policy statement using an RSA private key associated with a CloudFront Key Group, and issues a Signed URL (for individual files) or Signed Cookie (for multiple files/streams) with strict expiration times.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["CloudFront", "Signed-URLs", "Signed-Cookies", "Content-Protection"]
  },
  {
    id: "aws-scs-129",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Systems Manager State Manager for Continuous Configuration Baselines",
    scenario: "An enterprise requires that all EC2 instances continuously enforce operating system configuration baselines (e.g. enforcing specific antivirus agent services and deleting unapproved local admin accounts), automatically correcting drift every 24 hours.",
    question: "Which Systems Manager capability enforces continuous in-guest configuration compliance?",
    options: [
      { id: 'A', text: "AWS Systems Manager **State Manager** associations executing compliance documents on a recurring schedule" },
      { id: 'B', text: "Amazon EventBridge rules monitoring EC2 CPU usage" },
      { id: 'C', text: "AWS CloudFormation template deployments on every instance boot" },
      { id: 'D', text: "AWS Config managed rules running once per week" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Systems Manager State Manager automates the process of keeping managed instances in a defined state. Associations execute SSM documents (or Ansible playbooks) on targeted instances on a schedule, automatically remediating configuration drift if local settings diverge from the baseline.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["Systems-Manager", "State-Manager", "Configuration-Drift", "Baseline-Security"]
  },
  {
    id: "aws-scs-130",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Network Firewall: Stateless vs. Stateful Rule Processing Flow",
    scenario: "A network architect is designing high-throughput traffic filtering in AWS Network Firewall. High-volume known benign UDP traffic must bypass heavy inspection, while all other packets must undergo deep stateful inspection.",
    question: "How does AWS Network Firewall sequence stateless and stateful rule group evaluations?",
    options: [
      { id: 'A', text: "Network Firewall does not support stateless rules" },
      { id: 'B', text: "Stateless and stateful rules are merged into a single iptables chain" },
      { id: 'C', text: "Stateless rule groups evaluate first; matching packets can be dropped, passed immediately, or forwarded to stateful rule groups for deep packet inspection" },
      { id: 'D', text: "Stateful rule groups evaluate first, and stateless groups evaluate only on error" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In AWS Network Firewall, all incoming packets enter the **Stateless engine first**. Stateless rules evaluate 5-tuple attributes with sub-millisecond latency. Actions include `Pass` (bypasses all further inspection), `Drop`, or `Forward to stateful rule groups`. Forwarded packets are then evaluated by stateful Suricata rule groups.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["Network-Firewall", "Stateless-vs-Stateful", "Packet-Processing", "Architecture"]
  },
  {
    id: "aws-scs-131",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Permissions Boundaries for Delegated Administration",
    scenario: "A central security team wants to allow development leads to create and manage IAM roles for their application developers and CI/CD pipelines. However, leads must be strictly prevented from escalating their own privileges or granting administrator permissions (e.g. attaching AdministratorAccess).",
    question: "Which IAM mechanism enforces this constraint?",
    options: [
      { id: 'A', text: "Use AWS Systems Manager Parameter Store to store encrypted IAM credentials" },
      { id: 'B', text: "Apply an AWS Organizations Service Control Policy (SCP) at the root level" },
      { id: 'C', text: "Require all developers to share a single shared administrative IAM user account" },
      { id: 'D', text: "Attach an IAM permissions boundary to all developer roles and mandate that any role created by leads must have that permissions boundary attached using a condition in the lead's IAM policy" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "IAM permissions boundaries are an advanced feature that sets the maximum permissions an identity-based policy can grant to an IAM principal. By requiring that leads attach a specific permissions boundary (e.g. preventing iam:* or full admin rights) whenever they create new roles (using the `iam:PermissionsBoundary` condition key), organizations safely delegate role creation without risking privilege escalation.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["IAM", "Permissions Boundaries", "Least Privilege", "Governance"]
  },
  {
    id: "aws-scs-132",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account Access with External ID for Confused Deputy Protection",
    scenario: "A company contracts with a third-party SaaS vendor that provides automated cloud cost optimization. The vendor requires an IAM role in the company's AWS account to perform read-only resource analysis across EC2 and RDS.",
    question: "What must be included in the IAM role's trust policy to prevent the 'confused deputy' attack?",
    options: [
      { id: 'A', text: "A condition restricting source IP to the SaaS vendor's public CIDR range" },
      { id: 'B', text: "A condition requiring the sts:ExternalId provided uniquely by the SaaS vendor for this customer relationship" },
      { id: 'C', text: "A service-linked role trust policy allowing only aws:SourceArn from AWS Cost Explorer" },
      { id: 'D', text: "Attaching the AdministratorAccess policy to the cross-account role" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The confused deputy problem occurs when a third-party service (acting on behalf of multiple customers) can be tricked by an attacker into using its permissions against another victim's account. Requiring an `sts:ExternalId` in the IAM role trust policy ensures that the vendor only assumes the role when acting explicitly on behalf of the customer who configured that specific ID.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html",
    tags: ["IAM", "External ID", "Confused Deputy", "Cross-Account"]
  },
  {
    id: "aws-scs-133",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM and Access Governance Scenario #1",
    scenario: "An identity architect is establishing least privilege, temporary credentials, and federation across an AWS enterprise estate.",
    question: "Which IAM architecture best satisfies objective #1?",
    options: [
      { id: 'A', text: "Hardcoding root account access credentials in application configuration files" },
      { id: 'B', text: "Creating long-lived IAM user access keys for every employee and disabling MFA" },
      { id: 'C', text: "Disabling IAM Access Analyzer and allowing unrestricted cross-account trust policies" },
      { id: 'D', text: "Enforcing AWS IAM Identity Center with SAML 2.0 federation, MFA enforcement, and automated credential rotation" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "IAM best practices mandate eliminating long-lived access keys, adopting federated single sign-on with IAM Identity Center, enforcing MFA, and validating policies using IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
    tags: ["IAM", "Identity Center", "Least Privilege", "Federation"]
  },
  {
    id: "aws-scs-134",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM and Access Governance Scenario #2",
    scenario: "An identity architect is establishing least privilege, temporary credentials, and federation across an AWS enterprise estate.",
    question: "Which IAM architecture best satisfies objective #2?",
    options: [
      { id: 'A', text: "Creating long-lived IAM user access keys for every employee and disabling MFA" },
      { id: 'B', text: "Hardcoding root account access credentials in application configuration files" },
      { id: 'C', text: "Enforcing AWS IAM Identity Center with SAML 2.0 federation, MFA enforcement, and automated credential rotation" },
      { id: 'D', text: "Disabling IAM Access Analyzer and allowing unrestricted cross-account trust policies" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "IAM best practices mandate eliminating long-lived access keys, adopting federated single sign-on with IAM Identity Center, enforcing MFA, and validating policies using IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
    tags: ["IAM", "Identity Center", "Least Privilege", "Federation"]
  },
  {
    id: "aws-scs-135",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM and Access Governance Scenario #3",
    scenario: "An identity architect is establishing least privilege, temporary credentials, and federation across an AWS enterprise estate.",
    question: "Which IAM architecture best satisfies objective #3?",
    options: [
      { id: 'A', text: "Creating long-lived IAM user access keys for every employee and disabling MFA" },
      { id: 'B', text: "Enforcing AWS IAM Identity Center with SAML 2.0 federation, MFA enforcement, and automated credential rotation" },
      { id: 'C', text: "Hardcoding root account access credentials in application configuration files" },
      { id: 'D', text: "Disabling IAM Access Analyzer and allowing unrestricted cross-account trust policies" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "IAM best practices mandate eliminating long-lived access keys, adopting federated single sign-on with IAM Identity Center, enforcing MFA, and validating policies using IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
    tags: ["IAM", "Identity Center", "Least Privilege", "Federation"]
  },
  {
    id: "aws-scs-136",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM and Access Governance Scenario #4",
    scenario: "An identity architect is establishing least privilege, temporary credentials, and federation across an AWS enterprise estate.",
    question: "Which IAM architecture best satisfies objective #4?",
    options: [
      { id: 'A', text: "Hardcoding root account access credentials in application configuration files" },
      { id: 'B', text: "Disabling IAM Access Analyzer and allowing unrestricted cross-account trust policies" },
      { id: 'C', text: "Enforcing AWS IAM Identity Center with SAML 2.0 federation, MFA enforcement, and automated credential rotation" },
      { id: 'D', text: "Creating long-lived IAM user access keys for every employee and disabling MFA" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "IAM best practices mandate eliminating long-lived access keys, adopting federated single sign-on with IAM Identity Center, enforcing MFA, and validating policies using IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
    tags: ["IAM", "Identity Center", "Least Privilege", "Federation"]
  },
  {
    id: "aws-scs-137",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM and Access Governance Scenario #5",
    scenario: "An identity architect is establishing least privilege, temporary credentials, and federation across an AWS enterprise estate.",
    question: "Which IAM architecture best satisfies objective #5?",
    options: [
      { id: 'A', text: "Enforcing AWS IAM Identity Center with SAML 2.0 federation, MFA enforcement, and automated credential rotation" },
      { id: 'B', text: "Hardcoding root account access credentials in application configuration files" },
      { id: 'C', text: "Disabling IAM Access Analyzer and allowing unrestricted cross-account trust policies" },
      { id: 'D', text: "Creating long-lived IAM user access keys for every employee and disabling MFA" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "IAM best practices mandate eliminating long-lived access keys, adopting federated single sign-on with IAM Identity Center, enforcing MFA, and validating policies using IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
    tags: ["IAM", "Identity Center", "Least Privilege", "Federation"]
  },
  {
    id: "aws-scs-138",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM and Access Governance Scenario #6",
    scenario: "An identity architect is establishing least privilege, temporary credentials, and federation across an AWS enterprise estate.",
    question: "Which IAM architecture best satisfies objective #6?",
    options: [
      { id: 'A', text: "Creating long-lived IAM user access keys for every employee and disabling MFA" },
      { id: 'B', text: "Enforcing AWS IAM Identity Center with SAML 2.0 federation, MFA enforcement, and automated credential rotation" },
      { id: 'C', text: "Hardcoding root account access credentials in application configuration files" },
      { id: 'D', text: "Disabling IAM Access Analyzer and allowing unrestricted cross-account trust policies" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "IAM best practices mandate eliminating long-lived access keys, adopting federated single sign-on with IAM Identity Center, enforcing MFA, and validating policies using IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
    tags: ["IAM", "Identity Center", "Least Privilege", "Federation"]
  },
  {
    id: "aws-scs-139",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM and Access Governance Scenario #7",
    scenario: "An identity architect is establishing least privilege, temporary credentials, and federation across an AWS enterprise estate.",
    question: "Which IAM architecture best satisfies objective #7?",
    options: [
      { id: 'A', text: "Hardcoding root account access credentials in application configuration files" },
      { id: 'B', text: "Enforcing AWS IAM Identity Center with SAML 2.0 federation, MFA enforcement, and automated credential rotation" },
      { id: 'C', text: "Disabling IAM Access Analyzer and allowing unrestricted cross-account trust policies" },
      { id: 'D', text: "Creating long-lived IAM user access keys for every employee and disabling MFA" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "IAM best practices mandate eliminating long-lived access keys, adopting federated single sign-on with IAM Identity Center, enforcing MFA, and validating policies using IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
    tags: ["IAM", "Identity Center", "Least Privilege", "Federation"]
  },
  {
    id: "aws-scs-140",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM and Access Governance Scenario #8",
    scenario: "An identity architect is establishing least privilege, temporary credentials, and federation across an AWS enterprise estate.",
    question: "Which IAM architecture best satisfies objective #8?",
    options: [
      { id: 'A', text: "Hardcoding root account access credentials in application configuration files" },
      { id: 'B', text: "Creating long-lived IAM user access keys for every employee and disabling MFA" },
      { id: 'C', text: "Enforcing AWS IAM Identity Center with SAML 2.0 federation, MFA enforcement, and automated credential rotation" },
      { id: 'D', text: "Disabling IAM Access Analyzer and allowing unrestricted cross-account trust policies" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "IAM best practices mandate eliminating long-lived access keys, adopting federated single sign-on with IAM Identity Center, enforcing MFA, and validating policies using IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
    tags: ["IAM", "Identity Center", "Least Privilege", "Federation"]
  },
  {
    id: "aws-scs-141",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM and Access Governance Scenario #9",
    scenario: "An identity architect is establishing least privilege, temporary credentials, and federation across an AWS enterprise estate.",
    question: "Which IAM architecture best satisfies objective #9?",
    options: [
      { id: 'A', text: "Creating long-lived IAM user access keys for every employee and disabling MFA" },
      { id: 'B', text: "Disabling IAM Access Analyzer and allowing unrestricted cross-account trust policies" },
      { id: 'C', text: "Enforcing AWS IAM Identity Center with SAML 2.0 federation, MFA enforcement, and automated credential rotation" },
      { id: 'D', text: "Hardcoding root account access credentials in application configuration files" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "IAM best practices mandate eliminating long-lived access keys, adopting federated single sign-on with IAM Identity Center, enforcing MFA, and validating policies using IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
    tags: ["IAM", "Identity Center", "Least Privilege", "Federation"]
  },
  {
    id: "aws-scs-142",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM and Access Governance Scenario #10",
    scenario: "An identity architect is establishing least privilege, temporary credentials, and federation across an AWS enterprise estate.",
    question: "Which IAM architecture best satisfies objective #10?",
    options: [
      { id: 'A', text: "Hardcoding root account access credentials in application configuration files" },
      { id: 'B', text: "Disabling IAM Access Analyzer and allowing unrestricted cross-account trust policies" },
      { id: 'C', text: "Enforcing AWS IAM Identity Center with SAML 2.0 federation, MFA enforcement, and automated credential rotation" },
      { id: 'D', text: "Creating long-lived IAM user access keys for every employee and disabling MFA" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "IAM best practices mandate eliminating long-lived access keys, adopting federated single sign-on with IAM Identity Center, enforcing MFA, and validating policies using IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
    tags: ["IAM", "Identity Center", "Least Privilege", "Federation"]
  },
  {
    id: "aws-scs-143",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM and Access Governance Scenario #11",
    scenario: "An identity architect is establishing least privilege, temporary credentials, and federation across an AWS enterprise estate.",
    question: "Which IAM architecture best satisfies objective #11?",
    options: [
      { id: 'A', text: "Creating long-lived IAM user access keys for every employee and disabling MFA" },
      { id: 'B', text: "Enforcing AWS IAM Identity Center with SAML 2.0 federation, MFA enforcement, and automated credential rotation" },
      { id: 'C', text: "Disabling IAM Access Analyzer and allowing unrestricted cross-account trust policies" },
      { id: 'D', text: "Hardcoding root account access credentials in application configuration files" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "IAM best practices mandate eliminating long-lived access keys, adopting federated single sign-on with IAM Identity Center, enforcing MFA, and validating policies using IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
    tags: ["IAM", "Identity Center", "Least Privilege", "Federation"]
  },
  {
    id: "aws-scs-144",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM and Access Governance Scenario #12",
    scenario: "An identity architect is establishing least privilege, temporary credentials, and federation across an AWS enterprise estate.",
    question: "Which IAM architecture best satisfies objective #12?",
    options: [
      { id: 'A', text: "Creating long-lived IAM user access keys for every employee and disabling MFA" },
      { id: 'B', text: "Disabling IAM Access Analyzer and allowing unrestricted cross-account trust policies" },
      { id: 'C', text: "Hardcoding root account access credentials in application configuration files" },
      { id: 'D', text: "Enforcing AWS IAM Identity Center with SAML 2.0 federation, MFA enforcement, and automated credential rotation" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "IAM best practices mandate eliminating long-lived access keys, adopting federated single sign-on with IAM Identity Center, enforcing MFA, and validating policies using IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
    tags: ["IAM", "Identity Center", "Least Privilege", "Federation"]
  },
  {
    id: "aws-scs-145",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM and Access Governance Scenario #13",
    scenario: "An identity architect is establishing least privilege, temporary credentials, and federation across an AWS enterprise estate.",
    question: "Which IAM architecture best satisfies objective #13?",
    options: [
      { id: 'A', text: "Hardcoding root account access credentials in application configuration files" },
      { id: 'B', text: "Enforcing AWS IAM Identity Center with SAML 2.0 federation, MFA enforcement, and automated credential rotation" },
      { id: 'C', text: "Creating long-lived IAM user access keys for every employee and disabling MFA" },
      { id: 'D', text: "Disabling IAM Access Analyzer and allowing unrestricted cross-account trust policies" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "IAM best practices mandate eliminating long-lived access keys, adopting federated single sign-on with IAM Identity Center, enforcing MFA, and validating policies using IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
    tags: ["IAM", "Identity Center", "Least Privilege", "Federation"]
  },
  {
    id: "aws-scs-146",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM and Access Governance Scenario #14",
    scenario: "An identity architect is establishing least privilege, temporary credentials, and federation across an AWS enterprise estate.",
    question: "Which IAM architecture best satisfies objective #14?",
    options: [
      { id: 'A', text: "Hardcoding root account access credentials in application configuration files" },
      { id: 'B', text: "Enforcing AWS IAM Identity Center with SAML 2.0 federation, MFA enforcement, and automated credential rotation" },
      { id: 'C', text: "Disabling IAM Access Analyzer and allowing unrestricted cross-account trust policies" },
      { id: 'D', text: "Creating long-lived IAM user access keys for every employee and disabling MFA" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "IAM best practices mandate eliminating long-lived access keys, adopting federated single sign-on with IAM Identity Center, enforcing MFA, and validating policies using IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
    tags: ["IAM", "Identity Center", "Least Privilege", "Federation"]
  },
  {
    id: "aws-scs-147",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM and Access Governance Scenario #15",
    scenario: "An identity architect is establishing least privilege, temporary credentials, and federation across an AWS enterprise estate.",
    question: "Which IAM architecture best satisfies objective #15?",
    options: [
      { id: 'A', text: "Enforcing AWS IAM Identity Center with SAML 2.0 federation, MFA enforcement, and automated credential rotation" },
      { id: 'B', text: "Disabling IAM Access Analyzer and allowing unrestricted cross-account trust policies" },
      { id: 'C', text: "Creating long-lived IAM user access keys for every employee and disabling MFA" },
      { id: 'D', text: "Hardcoding root account access credentials in application configuration files" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "IAM best practices mandate eliminating long-lived access keys, adopting federated single sign-on with IAM Identity Center, enforcing MFA, and validating policies using IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
    tags: ["IAM", "Identity Center", "Least Privilege", "Federation"]
  },
  {
    id: "aws-scs-148",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM and Access Governance Scenario #16",
    scenario: "An identity architect is establishing least privilege, temporary credentials, and federation across an AWS enterprise estate.",
    question: "Which IAM architecture best satisfies objective #16?",
    options: [
      { id: 'A', text: "Enforcing AWS IAM Identity Center with SAML 2.0 federation, MFA enforcement, and automated credential rotation" },
      { id: 'B', text: "Disabling IAM Access Analyzer and allowing unrestricted cross-account trust policies" },
      { id: 'C', text: "Hardcoding root account access credentials in application configuration files" },
      { id: 'D', text: "Creating long-lived IAM user access keys for every employee and disabling MFA" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "IAM best practices mandate eliminating long-lived access keys, adopting federated single sign-on with IAM Identity Center, enforcing MFA, and validating policies using IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
    tags: ["IAM", "Identity Center", "Least Privilege", "Federation"]
  },
  {
    id: "aws-scs-149",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM and Access Governance Scenario #17",
    scenario: "An identity architect is establishing least privilege, temporary credentials, and federation across an AWS enterprise estate.",
    question: "Which IAM architecture best satisfies objective #17?",
    options: [
      { id: 'A', text: "Hardcoding root account access credentials in application configuration files" },
      { id: 'B', text: "Creating long-lived IAM user access keys for every employee and disabling MFA" },
      { id: 'C', text: "Enforcing AWS IAM Identity Center with SAML 2.0 federation, MFA enforcement, and automated credential rotation" },
      { id: 'D', text: "Disabling IAM Access Analyzer and allowing unrestricted cross-account trust policies" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "IAM best practices mandate eliminating long-lived access keys, adopting federated single sign-on with IAM Identity Center, enforcing MFA, and validating policies using IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
    tags: ["IAM", "Identity Center", "Least Privilege", "Federation"]
  },
  {
    id: "aws-scs-150",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM and Access Governance Scenario #18",
    scenario: "An identity architect is establishing least privilege, temporary credentials, and federation across an AWS enterprise estate.",
    question: "Which IAM architecture best satisfies objective #18?",
    options: [
      { id: 'A', text: "Hardcoding root account access credentials in application configuration files" },
      { id: 'B', text: "Enforcing AWS IAM Identity Center with SAML 2.0 federation, MFA enforcement, and automated credential rotation" },
      { id: 'C', text: "Disabling IAM Access Analyzer and allowing unrestricted cross-account trust policies" },
      { id: 'D', text: "Creating long-lived IAM user access keys for every employee and disabling MFA" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "IAM best practices mandate eliminating long-lived access keys, adopting federated single sign-on with IAM Identity Center, enforcing MFA, and validating policies using IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
    tags: ["IAM", "Identity Center", "Least Privilege", "Federation"]
  }
];

export default AWS_SCS_QUESTIONS_6;
