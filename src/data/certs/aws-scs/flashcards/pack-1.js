export const AWS_SCS_FLASHCARDS_1 = [
  {
    "id": "aws-scs-fc-1",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Compromised EC2 Instance Containment Workflow",
    "hint": "Forensic preservation before termination.",
    "back": "When an EC2 instance is compromised, <strong>isolate the instance via a restrictive security group</strong> (allowing only inbound forensic inspection from a designated analyst bastion). <strong>Do NOT terminate or reboot</strong>: capture volatile RAM and create EBS volume snapshots to preserve evidence chain of custody.",
    "tags": [
      "Incident Response",
      "Forensics",
      "GuardDuty",
      "EC2"
    ]
  },
  {
    "id": "aws-scs-fc-2",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Amazon GuardDuty vs. Amazon Inspector",
    "hint": "Intelligent anomaly threat detection vs. CVE vulnerability software scanning.",
    "back": "<strong>Amazon GuardDuty</strong> analyzes independent data streams (CloudTrail, VPC Flow Logs, DNS logs, EKS audit logs) using ML to detect active threats and unauthorized behavior in real time. <strong>Amazon Inspector</strong> scans EC2, ECR container images, and Lambda functions for software vulnerabilities (CVEs) and unintended network exposure.",
    "tags": [
      "GuardDuty",
      "Inspector",
      "Threat Detection",
      "Vulnerability"
    ]
  },
  {
    "id": "aws-scs-fc-3",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Automating Incident Remediation with EventBridge",
    "hint": "Event-driven closed-loop response to security findings.",
    "back": "GuardDuty and Security Hub publish findings to <strong>Amazon EventBridge</strong> in real time. EventBridge rules match specific finding types or severity levels and trigger automated remediation via <strong>AWS Systems Manager Automation runbooks</strong> (e.g. <code>AWS-StopEC2Instance</code>) or Lambda functions.",
    "tags": [
      "EventBridge",
      "Automation",
      "Incident Response"
    ]
  },
  {
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Amazon GuardDuty Finding Types: Recon:IAMUser vs. UnauthorizedAccess:IAMUser",
    "hint": "Reconnaissance discovery vs. anomalous unauthorized API usage.",
    "back": "<strong>Recon:IAMUser</strong> indicates enumeration activity (e.g. calling <code>Describe*</code>, <code>List*</code>, or <code>Get*</code> APIs from a suspicious IP or Tor exit node). <strong>UnauthorizedAccess:IAMUser</strong> indicates high-risk execution attempts using compromised credentials (e.g. creating administrative IAM users, modifying policies, or launching EC2 instances from anomalous locations).",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-4"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Amazon Detective: How does it investigate GuardDuty findings?",
    "hint": "Pre-built graph analytics model analyzing raw telemetry streams.",
    "back": "<strong>Amazon Detective</strong> automatically extracts events from VPC Flow Logs, CloudTrail management/data events, and EKS audit logs to build an interactive graph model. It visualizes IP traffic volume, API call patterns, and user agent baselines over time to identify root causes and blast radius.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-5"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "AWS Security Hub: Standard Security Frameworks and Automated Remediation",
    "hint": "Aggregated posture management and compliance checks.",
    "back": "Security Hub evaluates account compliance against benchmarks like <strong>AWS Foundational Security Best Practices (FSBP)</strong> and <strong>CIS AWS Foundations</strong>. When findings fail, Security Hub can emit findings to <strong>Amazon EventBridge</strong> to trigger automated remediation via AWS Systems Manager Automation runbooks or Lambda functions.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-6"
  },
  {
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Amazon GuardDuty Malware Protection for EC2",
    "hint": "Agentless EBS volume scanning triggered by suspicious activity.",
    "back": "When GuardDuty detects Trojan or cryptocurrency activity on an EC2 instance, <strong>Malware Protection</strong> takes an automated snapshot of the instance's EBS volumes, creates a duplicate volume in a service account, scans it for malware using antivirus engines, and auto-deletes the replica without impacting production workload performance.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-7"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Amazon GuardDuty S3 Protection Mechanism",
    "hint": "Monitors CloudTrail S3 data events without S3 data event logging costs.",
    "back": "GuardDuty S3 Protection analyzes <strong>AWS CloudTrail S3 data events</strong> and S3 access logs directly from internal streaming pipelines. It detects anomalous S3 operations (e.g. mass object downloads, unusual IP callers, or public bucket policy alterations) without requiring customers to enable CloudTrail S3 data event logging.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-8"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Amazon GuardDuty EKS Protection: Audit Log Monitoring vs. Runtime Monitoring",
    "hint": "Control plane API audit logs vs. in-container eBPF system call telemetry.",
    "back": "<strong>EKS Audit Log Monitoring</strong> consumes Kubernetes control plane audit events to detect suspicious API requests (e.g. anonymous user access, privileged pod creation). <strong>EKS Runtime Monitoring</strong> uses a lightweight host daemon (eBPF) to monitor operating system system calls inside container pods for fileless malware and unauthorized processes.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-9"
  },
  {
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Amazon Inspector: Continuous Vulnerability Scanning across EC2, ECR, and Lambda",
    "hint": "Automated discovery of CVEs and unintended network exposure.",
    "back": "Inspector automatically scans <strong>EC2 instances</strong> (via the SSM agent), <strong>container images in ECR</strong> (on push and continuously for new CVEs), and <strong>Lambda functions</strong> (application dependencies and code vulnerabilities). It provides vulnerability scores and correlates network reachability to prioritize actual exploitable risks.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-10"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Compromised IAM User Credentials: Immediate Containment Sequence",
    "hint": "Inactivate keys, revoke sessions, and attach an explicit Deny policy.",
    "back": "1. <strong>Inactivate or delete</strong> the active access keys immediately.<br>2. Attach an inline policy denying all actions (<code>Deny *</code>) or revoke active STS sessions by attaching an inline policy that denies actions where <code>aws:TokenIssueTime</code> is prior to the incident timestamp.<br>3. Change the console password and deactivate unauthorized MFA devices.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-11"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "EC2 Instance Forensics: Preserving Volatile RAM and Disk State",
    "hint": "Quarantine before stopping or terminating.",
    "back": "Attach an <strong>isolation Security Group</strong> (blocking all ingress and egress except from a designated forensic analyst bastion). Capture volatile memory using <strong>AWS Systems Manager Run Command</strong> (with LiME or AVML) before stopping or rebooting. Snapshot all attached EBS volumes for offline forensic mounting.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-12"
  },
  {
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Amazon Macie: Managed vs. Custom Data Identifiers",
    "hint": "Built-in machine learning/regex patterns vs. proprietary enterprise regex patterns.",
    "back": "<strong>Managed Data Identifiers</strong> detect standard sensitive data types (e.g. credit card numbers, Social Security Numbers, AWS secret keys) using built-in ML and regex. <strong>Custom Data Identifiers</strong> use customer-defined regular expressions, proximity rules, and keywords to identify proprietary enterprise data like internal employee IDs.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-13"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "AWS Security Hub Central Administrator Account Setup in Organizations",
    "hint": "Delegated administrator account managing multi-account security posture.",
    "back": "Security Hub integrates with AWS Organizations. An organization management account designates a <strong>delegated administrator account</strong> (typically a dedicated Security Tooling account), which enables Security Hub, aggregates findings from all member accounts and regions, and auto-enables Security Hub in newly created member accounts.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-14"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "GuardDuty RDS Protection Mechanism",
    "hint": "ML profiling of database login attempts across Aurora clusters.",
    "back": "GuardDuty RDS Protection analyzes <strong>RDS Aurora database login activity</strong> streams without impacting database query latency. It flags anomalous login attempts, brute-force password cracking, and successful logins originating from unusual client IP addresses or compromised IAM roles.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-15"
  },
  {
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Incident Response: Isolating a Compromised Lambda Function",
    "hint": "Concurrency limits and IAM execution role permissions.",
    "back": "To immediately contain a compromised Lambda function without deleting the code: <strong>set the function reserved concurrency to 0</strong> (throttling all invocations), update the function's IAM execution role to an empty or deny-all policy, and disconnect any VPC-attached ENIs or event source mappings.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-16"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Amazon EventBridge Rule Pattern for High-Severity GuardDuty Findings",
    "hint": "Filtering detail.severity >= 7.0 in EventBridge.",
    "back": "In the EventBridge rule event pattern, specify <code>source: ['aws.guardduty']</code>, <code>detail-type: ['GuardDuty Finding']</code>, and a numeric filter on severity: <code>detail: { severity: [{ numeric: ['>=', 7] }] }</code> (findings 7.0\u20138.9 are High; 9.0+ are Critical).",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-17"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "S3 Bucket Ransomware Incident Containment",
    "hint": "Preventing unauthorized overwrites and restoring previous versions.",
    "back": "Ensure <strong>S3 Versioning</strong> and <strong>S3 Object Lock</strong> are enabled. In the event of ransomware overwriting objects with encrypted variants, attach a restrictive bucket policy denying write operations to the suspect principal and execute an S3 Batch Operations job to restore previous unencrypted object versions.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-18"
  },
  {
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "AWS Compromised Credentials Incident: AWS Health and Security Notification",
    "hint": "Automated detection of exposed AWS keys in public repositories.",
    "back": "When AWS discovers customer access keys publicly exposed (e.g. on GitHub), it issues an <strong>AWS Health notification</strong>, emails account contacts, and automatically attaches an <code>AWSExposedCredentialPolicy_RevokeSession</code> policy to quarantine the compromised IAM user.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-19"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Amazon Inspector SBOM Export: Format and Storage",
    "hint": "Software Bill of Materials export across all scanned container images and EC2.",
    "back": "Inspector can export a consolidated <strong>Software Bill of Materials (SBOM)</strong> for all scanned resources (EC2, ECR, Lambda) in industry-standard formats (<strong>SPDX</strong> or <strong>CycloneDX</strong>) directly to an encrypted Amazon S3 bucket for compliance auditing.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-20"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Forensic Analysis in an Isolated VPC: Architecture and Routing",
    "hint": "Zero internet connectivity and strictly controlled forensic analyst access.",
    "back": "Deploy a dedicated <strong>Forensic VPC</strong> with no Internet Gateway or NAT Gateway. Attach the snapshot-restored forensic EBS volumes to an analysis EC2 instance. Analysts access the analysis instance via <strong>AWS Systems Manager Session Manager</strong> through private VPC endpoints (PrivateLink).",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-21"
  },
  {
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Automating Security Hub Custom Actions via EventBridge",
    "hint": "Manual SOC-triggered remediation button in Security Hub console.",
    "back": "Security Hub supports <strong>Custom Actions</strong>. An analyst selects a finding in the console and clicks the custom action (e.g. 'Isolate Host'). Security Hub emits an EventBridge event containing the finding payload to trigger a Lambda function or Step Functions state machine.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-22"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "GuardDuty Lambda Protection: What does it monitor?",
    "hint": "VPC Flow Logs generated during Lambda execution.",
    "back": "GuardDuty Lambda Protection monitors network activity by analyzing <strong>VPC Flow Logs</strong> generated during Lambda function executions, detecting anomalous outbound network calls (e.g. connections to known crypto-mining pools or command-and-control servers).",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-23"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Amazon Detective: Scope of Data Retention and History",
    "hint": "12-month behavioral baseline graph.",
    "back": "Amazon Detective retains up to <strong>12 months of aggregated security event data</strong> in its graph model, allowing security analysts to establish normal historical baselines and track long-term persistent threat actor movements.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-24"
  },
  {
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Remediating an Overly Permissive S3 Bucket via AWS Config",
    "hint": "AWS Config Rule with automatic SSM remediation.",
    "back": "Enable the AWS Config managed rule <strong>s3-bucket-public-read-prohibited</strong>. Associate an automated remediation action using SSM Automation document <strong>AWS-DisableS3BucketPublicReadWrite</strong> to automatically apply S3 Block Public Access.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-25"
  }
];

export default AWS_SCS_FLASHCARDS_1;
