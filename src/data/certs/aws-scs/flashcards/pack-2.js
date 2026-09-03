export const AWS_SCS_FLASHCARDS_2 = [
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Amazon GuardDuty Suppression Rules vs. Disabling Finding Types",
    "hint": "Filtering expected false-positive findings without losing threat detection.",
    "back": "<strong>Suppression rules</strong> filter and auto-archive findings matching specific criteria (e.g. penetration testing IPs or expected dev instances) without altering finding generation. Disabling detection engines completely stops scanning and creates blind spots.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-26"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "AWS Security Hub Cross-Region Aggregation",
    "hint": "Designating an aggregation region to centralize multi-region findings.",
    "back": "Security Hub supports designating a <strong>home/aggregation Region</strong>. All findings, insights, and compliance statuses across all enabled linked AWS Regions are continuously synchronized to the aggregation region for single-pane-of-glass management.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-27"
  },
  {
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Containment: Revoking Active STS Temporary Sessions for an IAM Role",
    "hint": "Condition aws:PrincipalType and aws:CurrentTime in an inline policy.",
    "back": "Attach an inline policy to the role denying all actions with a condition that the session was issued prior to the revocation event: <code>Condition: { DateLessThan: { 'aws:TokenIssueTime': '&lt;ISO-timestamp&gt;' } }</code>. This invalidates all existing temporary credentials.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-28"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Amazon Inspector Agentless EC2 Scanning vs. SSM Agent Scanning",
    "hint": "EBS snapshot inspection vs. in-guest continuous inventory.",
    "back": "Inspector offers hybrid EC2 scanning: <strong>SSM agent-based</strong> scanning provides continuous, in-depth package assessment. <strong>Agentless scanning</strong> takes automated EBS snapshots of instances without the SSM agent, inspecting the disk for CVEs without installing software.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-29"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "AWS CloudTrail Event: AwsConsoleSignIn Finding Types",
    "hint": "Detecting credential stuffing and unauthorized console logins.",
    "back": "GuardDuty monitors <code>AwsConsoleSignIn</code> events in CloudTrail to flag <strong>UnauthorizedAccess:IAMUser/ConsoleLoginSuccess.B</strong> (login from an unusual location/ISP) and <strong>AnomalousBehavior:IAMUser/ConsoleLogin</strong>.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-30"
  },
  {
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Amazon GuardDuty Trusted IP Lists vs. Threat IP Lists",
    "hint": "Allow-listing known corporate scanners vs. blocking known malicious actors.",
    "back": "<strong>Trusted IP Lists</strong> contain IP addresses (e.g. corporate VPNs, authorized vulnerability scanners) for which GuardDuty suppresses finding generation. <strong>Threat IP Lists</strong> contain known malicious IPs that immediately trigger high-severity findings upon communication.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-31"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Security Hub Finding Ingestion: Third-Party SIEM and Scanner Formats",
    "hint": "AWS Security Finding Format (ASFF).",
    "back": "All security tools (GuardDuty, Inspector, Macie, IAM Access Analyzer, and third-party partners like CrowdStrike or Palo Alto) normalize findings into the <strong>AWS Security Finding Format (ASFF)</strong>, a standard JSON schema enabling unified parsing.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-32"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Incident Response: Preserving CloudTrail Logs against Deletion during a Breach",
    "hint": "S3 Object Lock Compliance Mode and multi-account log archiving.",
    "back": "Deliver CloudTrail logs to an S3 bucket in a <strong>dedicated, locked-down Log Archive account</strong>. Enable <strong>S3 Object Lock in Compliance mode</strong>, enable S3 bucket versioning, and require MFA Delete to make logs immutable and delete-proof even by root.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-33"
  },
  {
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Amazon Detective Core Visualizations: What graphs are presented?",
    "hint": "Visualizing geographic IP location, VPC volume spikes, and API call history.",
    "back": "Detective visualizes: 1. <strong>Overall resource activity</strong> compared to normal 45-day baselines; 2. <strong>Geographic map</strong> of inbound/outbound IP traffic; 3. <strong>VPC flow volume spikes</strong>; 4. Distinct <strong>IAM user agent and API call lineage</strong>.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-34"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "front": "Quarantining an EC2 Instance with AWS Network Firewall",
    "hint": "Dynamic IP rule group insertion via Lambda.",
    "back": "When an instance is compromised, an EventBridge rule triggers a Lambda function that adds the instance's private IP address to a <strong>strict Drop rule group</strong> in AWS Network Firewall, instantly isolating the workload at the subnet boundary.",
    "tags": [
      "Security",
      "Incident Response",
      "GuardDuty"
    ],
    "id": "aws-scs-fc-35"
  },
  {
    "id": "aws-scs-fc-36",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d2",
    "front": "CloudTrail Log File Integrity Validation",
    "hint": "Cryptographic SHA-256 and RSA digest verification.",
    "back": "<strong>Log file integrity validation</strong> delivers an hourly digest file containing SHA-256 hashes of all delivered log files, signed using an AWS private key with RSA. Running <code>aws cloudtrail validate-logs</code> cryptographically proves whether logs were modified, deleted, or forged.",
    "tags": [
      "CloudTrail",
      "Log Integrity",
      "Compliance"
    ]
  },
  {
    "id": "aws-scs-fc-37",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "front": "Centralized Organization Trail with KMS CMK",
    "hint": "Capturing multi-account activity into an isolated log archive bucket.",
    "back": "An <strong>Organization Trail</strong> logs events across all member accounts into an S3 bucket located in a dedicated Security/Log Archive account. The KMS CMK policy must explicitly grant <code>kms:GenerateDataKey*</code> to <code>cloudtrail.amazonaws.com</code> scoped with an <code>aws:SourceArn</code> condition.",
    "tags": [
      "CloudTrail",
      "KMS",
      "Organizations",
      "Logging"
    ]
  },
  {
    "id": "aws-scs-fc-38",
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d2",
    "front": "VPC Flow Logs: Accepted vs. Rejected Traffic",
    "hint": "Security group drops vs. NACL drops.",
    "back": "<strong>REJECT</strong> records in VPC Flow Logs indicate traffic blocked by either a Security Group or a Network ACL. <strong>ACCEPT</strong> records indicate traffic allowed by both. Flow logs capture IP 5-tuple, bytes, packets, and action, published to CloudWatch Logs or S3 without impacting instance network performance.",
    "tags": [
      "VPC Flow Logs",
      "Networking",
      "Monitoring"
    ]
  },
  {
    "id": "aws-scs-fc-39",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "front": "Security Monitoring Control #1",
    "hint": "Audit logging, metric filter alarm, or SIEM integration pattern.",
    "back": "<strong>Security Monitoring Control #1</strong> provides centralized, tamper-resistant telemetry forwarding across enterprise multi-account architectures.",
    "tags": [
      "Logging",
      "CloudWatch",
      "CloudTrail"
    ]
  },
  {
    "id": "aws-scs-fc-40",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d2",
    "front": "Security Monitoring Control #2",
    "hint": "Audit logging, metric filter alarm, or SIEM integration pattern.",
    "back": "<strong>Security Monitoring Control #2</strong> provides centralized, tamper-resistant telemetry forwarding across enterprise multi-account architectures.",
    "tags": [
      "Logging",
      "CloudWatch",
      "CloudTrail"
    ]
  },
  {
    "id": "aws-scs-fc-41",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "front": "Security Monitoring Control #3",
    "hint": "Audit logging, metric filter alarm, or SIEM integration pattern.",
    "back": "<strong>Security Monitoring Control #3</strong> provides centralized, tamper-resistant telemetry forwarding across enterprise multi-account architectures.",
    "tags": [
      "Logging",
      "CloudWatch",
      "CloudTrail"
    ]
  },
  {
    "id": "aws-scs-fc-42",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d2",
    "front": "Security Monitoring Control #4",
    "hint": "Audit logging, metric filter alarm, or SIEM integration pattern.",
    "back": "<strong>Security Monitoring Control #4</strong> provides centralized, tamper-resistant telemetry forwarding across enterprise multi-account architectures.",
    "tags": [
      "Logging",
      "CloudWatch",
      "CloudTrail"
    ]
  },
  {
    "id": "aws-scs-fc-43",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "front": "Security Monitoring Control #5",
    "hint": "Audit logging, metric filter alarm, or SIEM integration pattern.",
    "back": "<strong>Security Monitoring Control #5</strong> provides centralized, tamper-resistant telemetry forwarding across enterprise multi-account architectures.",
    "tags": [
      "Logging",
      "CloudWatch",
      "CloudTrail"
    ]
  },
  {
    "id": "aws-scs-fc-44",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d2",
    "front": "Security Monitoring Control #6",
    "hint": "Audit logging, metric filter alarm, or SIEM integration pattern.",
    "back": "<strong>Security Monitoring Control #6</strong> provides centralized, tamper-resistant telemetry forwarding across enterprise multi-account architectures.",
    "tags": [
      "Logging",
      "CloudWatch",
      "CloudTrail"
    ]
  },
  {
    "id": "aws-scs-fc-45",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "front": "Security Monitoring Control #7",
    "hint": "Audit logging, metric filter alarm, or SIEM integration pattern.",
    "back": "<strong>Security Monitoring Control #7</strong> provides centralized, tamper-resistant telemetry forwarding across enterprise multi-account architectures.",
    "tags": [
      "Logging",
      "CloudWatch",
      "CloudTrail"
    ]
  },
  {
    "id": "aws-scs-fc-46",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d2",
    "front": "Security Monitoring Control #8",
    "hint": "Audit logging, metric filter alarm, or SIEM integration pattern.",
    "back": "<strong>Security Monitoring Control #8</strong> provides centralized, tamper-resistant telemetry forwarding across enterprise multi-account architectures.",
    "tags": [
      "Logging",
      "CloudWatch",
      "CloudTrail"
    ]
  },
  {
    "id": "aws-scs-fc-47",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "front": "Security Monitoring Control #9",
    "hint": "Audit logging, metric filter alarm, or SIEM integration pattern.",
    "back": "<strong>Security Monitoring Control #9</strong> provides centralized, tamper-resistant telemetry forwarding across enterprise multi-account architectures.",
    "tags": [
      "Logging",
      "CloudWatch",
      "CloudTrail"
    ]
  },
  {
    "id": "aws-scs-fc-48",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d2",
    "front": "Security Monitoring Control #10",
    "hint": "Audit logging, metric filter alarm, or SIEM integration pattern.",
    "back": "<strong>Security Monitoring Control #10</strong> provides centralized, tamper-resistant telemetry forwarding across enterprise multi-account architectures.",
    "tags": [
      "Logging",
      "CloudWatch",
      "CloudTrail"
    ]
  },
  {
    "id": "aws-scs-fc-49",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "front": "Security Monitoring Control #11",
    "hint": "Audit logging, metric filter alarm, or SIEM integration pattern.",
    "back": "<strong>Security Monitoring Control #11</strong> provides centralized, tamper-resistant telemetry forwarding across enterprise multi-account architectures.",
    "tags": [
      "Logging",
      "CloudWatch",
      "CloudTrail"
    ]
  },
  {
    "id": "aws-scs-fc-50",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d2",
    "front": "Security Monitoring Control #12",
    "hint": "Audit logging, metric filter alarm, or SIEM integration pattern.",
    "back": "<strong>Security Monitoring Control #12</strong> provides centralized, tamper-resistant telemetry forwarding across enterprise multi-account architectures.",
    "tags": [
      "Logging",
      "CloudWatch",
      "CloudTrail"
    ]
  }
];

export default AWS_SCS_FLASHCARDS_2;
