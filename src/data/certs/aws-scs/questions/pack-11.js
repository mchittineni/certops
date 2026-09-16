export const AWS_SCS_QUESTIONS_11 = [
  {
    id: "aws-scs-251",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Automated GuardDuty Finding Remediation: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer needs to isolate an EC2 instance communicating with command-and-control servers automatically within seconds of detection.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives?",
    options: [
      { id: 'A', text: "An EventBridge rule on the finding, running a Lambda that isolates it" },
      { id: 'B', text: "Route the GuardDuty finding to an SNS topic that pages the on-call analyst." },
      { id: 'C', text: "Route the finding to a Step Functions workflow that snapshots the volumes first." },
      { id: 'D', text: "Route the finding to Security Hub and let its automation rule suppress the duplicates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Amazon EventBridge to capture GuardDuty findings and trigger a Lambda function that attaches an isolation security group. Amazon GuardDuty detects threats using machine learning and threat intelligence. Integrating GuardDuty with Amazon EventBridge enables near real-time automated incident response: EventBridge filters high-severity findings and triggers AWS Lambda or SSM Automation to isolate instances without human delay.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["Amazon GuardDuty","GuardDuty Automation","Enterprise Governance"]
  },
  {
    id: "aws-scs-252",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Automated GuardDuty Finding Remediation: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer needs to isolate an EC2 instance communicating with command-and-control servers automatically within seconds of detection.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence?",
    options: [
      { id: 'A', text: "An EventBridge rule on the finding, running a Lambda that isolates it" },
      { id: 'B', text: "Route the GuardDuty finding to an SNS topic that pages the on-call analyst." },
      { id: 'C', text: "Route the finding to a Step Functions workflow that snapshots the volumes first." },
      { id: 'D', text: "Route the finding to Security Hub and let its automation rule suppress the duplicates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Amazon EventBridge to capture GuardDuty findings and trigger a Lambda function that attaches an isolation security group. Amazon GuardDuty detects threats using machine learning and threat intelligence. Integrating GuardDuty with Amazon EventBridge enables near real-time automated incident response: EventBridge filters high-severity findings and triggers AWS Lambda or SSM Automation to isolate instances without human delay.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["Amazon GuardDuty","GuardDuty Automation","Incident Containment"]
  },
  {
    id: "aws-scs-253",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Automated GuardDuty Finding Remediation: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer needs to isolate an EC2 instance communicating with command-and-control servers automatically within seconds of detection.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls?",
    options: [
      { id: 'A', text: "An EventBridge rule on the finding, running a Lambda that isolates it" },
      { id: 'B', text: "Route the GuardDuty finding to an SNS topic that pages the on-call analyst." },
      { id: 'C', text: "Route the finding to a Step Functions workflow that snapshots the volumes first." },
      { id: 'D', text: "Route the finding to Security Hub and let its automation rule suppress the duplicates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Amazon EventBridge to capture GuardDuty findings and trigger a Lambda function that attaches an isolation security group. Amazon GuardDuty detects threats using machine learning and threat intelligence. Integrating GuardDuty with Amazon EventBridge enables near real-time automated incident response: EventBridge filters high-severity findings and triggers AWS Lambda or SSM Automation to isolate instances without human delay.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["Amazon GuardDuty","GuardDuty Automation","Zero Trust Iam"]
  },
  {
    id: "aws-scs-254",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Automated GuardDuty Finding Remediation: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer needs to isolate an EC2 instance communicating with command-and-control servers automatically within seconds of detection.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity?",
    options: [
      { id: 'A', text: "An EventBridge rule on the finding, running a Lambda that isolates it" },
      { id: 'B', text: "Route the GuardDuty finding to an SNS topic that pages the on-call analyst." },
      { id: 'C', text: "Route the finding to a Step Functions workflow that snapshots the volumes first." },
      { id: 'D', text: "Route the finding to Security Hub and let its automation rule suppress the duplicates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Amazon EventBridge to capture GuardDuty findings and trigger a Lambda function that attaches an isolation security group. Amazon GuardDuty detects threats using machine learning and threat intelligence. Integrating GuardDuty with Amazon EventBridge enables near real-time automated incident response: EventBridge filters high-severity findings and triggers AWS Lambda or SSM Automation to isolate instances without human delay.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["Amazon GuardDuty","GuardDuty Automation","Data Protection"]
  },
  {
    id: "aws-scs-255",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Automated GuardDuty Finding Remediation: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer needs to isolate an EC2 instance communicating with command-and-control servers automatically within seconds of detection.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense?",
    options: [
      { id: 'A', text: "An EventBridge rule on the finding, running a Lambda that isolates it" },
      { id: 'B', text: "Route the GuardDuty finding to an SNS topic that pages the on-call analyst." },
      { id: 'C', text: "Route the finding to a Step Functions workflow that snapshots the volumes first." },
      { id: 'D', text: "Route the finding to Security Hub and let its automation rule suppress the duplicates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Amazon EventBridge to capture GuardDuty findings and trigger a Lambda function that attaches an isolation security group. Amazon GuardDuty detects threats using machine learning and threat intelligence. Integrating GuardDuty with Amazon EventBridge enables near real-time automated incident response: EventBridge filters high-severity findings and triggers AWS Lambda or SSM Automation to isolate instances without human delay.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["Amazon GuardDuty","GuardDuty Automation","Infrastructure Defense"]
  },
  {
    id: "aws-scs-256",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon Detective Graph Investigation and Root Cause Analysis: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer needs to investigate the full scope and lateral movement of an attacker who accessed an S3 bucket and created unauthorized IAM users.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives?",
    options: [
      { id: 'A', text: "Query the CloudTrail logs in Athena and join them with the flow logs by address and time." },
      { id: 'B', text: "Read the GuardDuty findings in order and follow the resources each one names." },
      { id: 'C', text: "Replay the CloudWatch metrics around the window to locate the affected service." },
      { id: 'D', text: "Enable Detective to correlate CloudTrail, flow logs and GuardDuty findings in one graph" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Amazon Detective to analyze and visualize correlated CloudTrail events, VPC Flow Logs, and GuardDuty findings in a graph model. Amazon Detective automatically collects log data from VPC Flow Logs, CloudTrail, and GuardDuty, building a graph model that visualizes resource interactions over time. Security teams investigate anomalies, root cause, and attacker lateral movement rapidly through interactive visual timelines.",
    referenceUrl: "https://docs.aws.amazon.com/detective/latest/adminguide/what-is-detective.html",
    tags: ["Amazon Detective","Amazon Detective","Enterprise Governance"]
  },
  {
    id: "aws-scs-257",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon Detective Graph Investigation and Root Cause Analysis: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer needs to investigate the full scope and lateral movement of an attacker who accessed an S3 bucket and created unauthorized IAM users.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence?",
    options: [
      { id: 'A', text: "Query the CloudTrail logs in Athena and join them with the flow logs by address and time." },
      { id: 'B', text: "Replay the CloudWatch metrics around the window to locate the affected service." },
      { id: 'C', text: "Enable Detective to correlate CloudTrail, flow logs and GuardDuty findings in one graph" },
      { id: 'D', text: "Read the GuardDuty findings in order and follow the resources each one names." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Amazon Detective to analyze and visualize correlated CloudTrail events, VPC Flow Logs, and GuardDuty findings in a graph model. Amazon Detective automatically collects log data from VPC Flow Logs, CloudTrail, and GuardDuty, building a graph model that visualizes resource interactions over time. Security teams investigate anomalies, root cause, and attacker lateral movement rapidly through interactive visual timelines.",
    referenceUrl: "https://docs.aws.amazon.com/detective/latest/adminguide/what-is-detective.html",
    tags: ["Amazon Detective","Amazon Detective","Incident Containment"]
  },
  {
    id: "aws-scs-258",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon Detective Graph Investigation and Root Cause Analysis: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer needs to investigate the full scope and lateral movement of an attacker who accessed an S3 bucket and created unauthorized IAM users.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls?",
    options: [
      { id: 'A', text: "Enable Detective to correlate CloudTrail, flow logs and GuardDuty findings in one graph" },
      { id: 'B', text: "Read the GuardDuty findings in order and follow the resources each one names." },
      { id: 'C', text: "Query the CloudTrail logs in Athena and join them with the flow logs by address and time." },
      { id: 'D', text: "Replay the CloudWatch metrics around the window to locate the affected service." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Detective to analyze and visualize correlated CloudTrail events, VPC Flow Logs, and GuardDuty findings in a graph model. Amazon Detective automatically collects log data from VPC Flow Logs, CloudTrail, and GuardDuty, building a graph model that visualizes resource interactions over time. Security teams investigate anomalies, root cause, and attacker lateral movement rapidly through interactive visual timelines.",
    referenceUrl: "https://docs.aws.amazon.com/detective/latest/adminguide/what-is-detective.html",
    tags: ["Amazon Detective","Amazon Detective","Zero Trust Iam"]
  },
  {
    id: "aws-scs-259",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon Detective Graph Investigation and Root Cause Analysis: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer needs to investigate the full scope and lateral movement of an attacker who accessed an S3 bucket and created unauthorized IAM users.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity?",
    options: [
      { id: 'A', text: "Enable Detective to correlate CloudTrail, flow logs and GuardDuty findings in one graph" },
      { id: 'B', text: "Read the GuardDuty findings in order and follow the resources each one names." },
      { id: 'C', text: "Query the CloudTrail logs in Athena and join them with the flow logs by address and time." },
      { id: 'D', text: "Replay the CloudWatch metrics around the window to locate the affected service." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Detective to analyze and visualize correlated CloudTrail events, VPC Flow Logs, and GuardDuty findings in a graph model. Amazon Detective automatically collects log data from VPC Flow Logs, CloudTrail, and GuardDuty, building a graph model that visualizes resource interactions over time. Security teams investigate anomalies, root cause, and attacker lateral movement rapidly through interactive visual timelines.",
    referenceUrl: "https://docs.aws.amazon.com/detective/latest/adminguide/what-is-detective.html",
    tags: ["Amazon Detective","Amazon Detective","Data Protection"]
  },
  {
    id: "aws-scs-260",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon Detective Graph Investigation and Root Cause Analysis: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer needs to investigate the full scope and lateral movement of an attacker who accessed an S3 bucket and created unauthorized IAM users.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense?",
    options: [
      { id: 'A', text: "Query the CloudTrail logs in Athena and join them with the flow logs by address and time." },
      { id: 'B', text: "Replay the CloudWatch metrics around the window to locate the affected service." },
      { id: 'C', text: "Enable Detective to correlate CloudTrail, flow logs and GuardDuty findings in one graph" },
      { id: 'D', text: "Read the GuardDuty findings in order and follow the resources each one names." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Amazon Detective to analyze and visualize correlated CloudTrail events, VPC Flow Logs, and GuardDuty findings in a graph model. Amazon Detective automatically collects log data from VPC Flow Logs, CloudTrail, and GuardDuty, building a graph model that visualizes resource interactions over time. Security teams investigate anomalies, root cause, and attacker lateral movement rapidly through interactive visual timelines.",
    referenceUrl: "https://docs.aws.amazon.com/detective/latest/adminguide/what-is-detective.html",
    tags: ["Amazon Detective","Amazon Detective","Infrastructure Defense"]
  },
  {
    id: "aws-scs-261",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Compromised IAM Access Key Response Workflow: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer needs to neutralize an active compromised IAM long-term access key immediately while preserving identity attributes for audit.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives?",
    options: [
      { id: 'A', text: "Delete the IAM user immediately, destroying all historic CloudTrail event references and forensic evidence." },
      { id: 'B', text: "Send an email to the user asking them to delete the compromised credential voluntarily." },
      { id: 'C', text: "Change the user's password while leaving active long-term access keys and STS session tokens untouched." },
      { id: 'D', text: "Deactivate the key, attach an explicit deny-all policy, and revoke the active sessions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deactivate the IAM access key, attach an inline `DenyAll` policy with an explicit Deny on all actions, and revoke active STS sessions. When an IAM credential is leaked, immediate containment requires: 1) deactivating the access key (`aws iam update-access-key --status Inactive`), 2) revoking temporary STS sessions via `aws:CurrentTime &lt; [timestamp]` revoke policy, and 3) attaching an explicit Deny policy to block ongoing operations.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_troubleshoot.html#credentials_troubleshoot_compromised-keys",
    tags: ["IAM Remediation","Compromised IAM Keys","Enterprise Governance"]
  },
  {
    id: "aws-scs-262",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Compromised IAM Access Key Response Workflow: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer needs to neutralize an active compromised IAM long-term access key immediately while preserving identity attributes for audit.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence?",
    options: [
      { id: 'A', text: "Change the user's password while leaving active long-term access keys and STS session tokens untouched." },
      { id: 'B', text: "Delete the IAM user immediately, destroying all historic CloudTrail event references and forensic evidence." },
      { id: 'C', text: "Send an email to the user asking them to delete the compromised credential voluntarily." },
      { id: 'D', text: "Deactivate the key, attach an explicit deny-all policy, and revoke the active sessions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deactivate the IAM access key, attach an inline `DenyAll` policy with an explicit Deny on all actions, and revoke active STS sessions. When an IAM credential is leaked, immediate containment requires: 1) deactivating the access key (`aws iam update-access-key --status Inactive`), 2) revoking temporary STS sessions via `aws:CurrentTime &lt; [timestamp]` revoke policy, and 3) attaching an explicit Deny policy to block ongoing operations.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_troubleshoot.html#credentials_troubleshoot_compromised-keys",
    tags: ["IAM Remediation","Compromised IAM Keys","Incident Containment"]
  },
  {
    id: "aws-scs-263",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Compromised IAM Access Key Response Workflow: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer needs to neutralize an active compromised IAM long-term access key immediately while preserving identity attributes for audit.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls?",
    options: [
      { id: 'A', text: "Deactivate the key, attach an explicit deny-all policy, and revoke the active sessions" },
      { id: 'B', text: "Delete the IAM user immediately, destroying all historic CloudTrail event references and forensic evidence." },
      { id: 'C', text: "Change the user's password while leaving active long-term access keys and STS session tokens untouched." },
      { id: 'D', text: "Send an email to the user asking them to delete the compromised credential voluntarily." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deactivate the IAM access key, attach an inline `DenyAll` policy with an explicit Deny on all actions, and revoke active STS sessions. When an IAM credential is leaked, immediate containment requires: 1) deactivating the access key (`aws iam update-access-key --status Inactive`), 2) revoking temporary STS sessions via `aws:CurrentTime &lt; [timestamp]` revoke policy, and 3) attaching an explicit Deny policy to block ongoing operations.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_troubleshoot.html#credentials_troubleshoot_compromised-keys",
    tags: ["IAM Remediation","Compromised IAM Keys","Zero Trust Iam"]
  },
  {
    id: "aws-scs-264",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Compromised IAM Access Key Response Workflow: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer needs to neutralize an active compromised IAM long-term access key immediately while preserving identity attributes for audit.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity?",
    options: [
      { id: 'A', text: "Deactivate the key, attach an explicit deny-all policy, and revoke the active sessions" },
      { id: 'B', text: "Delete the IAM user immediately, destroying all historic CloudTrail event references and forensic evidence." },
      { id: 'C', text: "Change the user's password while leaving active long-term access keys and STS session tokens untouched." },
      { id: 'D', text: "Send an email to the user asking them to delete the compromised credential voluntarily." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deactivate the IAM access key, attach an inline `DenyAll` policy with an explicit Deny on all actions, and revoke active STS sessions. When an IAM credential is leaked, immediate containment requires: 1) deactivating the access key (`aws iam update-access-key --status Inactive`), 2) revoking temporary STS sessions via `aws:CurrentTime &lt; [timestamp]` revoke policy, and 3) attaching an explicit Deny policy to block ongoing operations.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_troubleshoot.html#credentials_troubleshoot_compromised-keys",
    tags: ["IAM Remediation","Compromised IAM Keys","Data Protection"]
  },
  {
    id: "aws-scs-265",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Compromised IAM Access Key Response Workflow: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer needs to neutralize an active compromised IAM long-term access key immediately while preserving identity attributes for audit.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense?",
    options: [
      { id: 'A', text: "Change the user's password while leaving active long-term access keys and STS session tokens untouched." },
      { id: 'B', text: "Send an email to the user asking them to delete the compromised credential voluntarily." },
      { id: 'C', text: "Deactivate the key, attach an explicit deny-all policy, and revoke the active sessions" },
      { id: 'D', text: "Delete the IAM user immediately, destroying all historic CloudTrail event references and forensic evidence." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deactivate the IAM access key, attach an inline `DenyAll` policy with an explicit Deny on all actions, and revoke active STS sessions. When an IAM credential is leaked, immediate containment requires: 1) deactivating the access key (`aws iam update-access-key --status Inactive`), 2) revoking temporary STS sessions via `aws:CurrentTime &lt; [timestamp]` revoke policy, and 3) attaching an explicit Deny policy to block ongoing operations.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_troubleshoot.html#credentials_troubleshoot_compromised-keys",
    tags: ["IAM Remediation","Compromised IAM Keys","Infrastructure Defense"]
  },
  {
    id: "aws-scs-266",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Forensic Disk and Memory Acquisition on EC2: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer needs to acquire forensically sound volatile RAM and persistent disk state from a suspected compromised EC2 instance without rebooting.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives?",
    options: [
      { id: 'A', text: "An Automation document capturing memory to an isolated bucket and snapshotting the volumes." },
      { id: 'B', text: "Reboot the instance to single-user mode to inspect running processes directly." },
      { id: 'C', text: "Stop the instance immediately, permanently destroying volatile RAM and in-flight network sockets." },
      { id: 'D', text: "Run unencrypted disk cloning utilities that transmit raw forensic images across the public internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute an SSM Automation document to capture volatile RAM to an isolated S3 bucket and take EBS volume snapshots immediately. Forensic preservation requires capturing volatile memory (RAM) first, as shutting down or stopping an instance loses running processes, network connections, and unwritten malware artifacts. Systems Manager (SSM) captures RAM safely, followed by point-in-time EBS snapshots tagged for chain of custody.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/containment.html",
    tags: ["EC2 Forensics","Forensics","Enterprise Governance"]
  },
  {
    id: "aws-scs-267",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Forensic Disk and Memory Acquisition on EC2: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer needs to acquire forensically sound volatile RAM and persistent disk state from a suspected compromised EC2 instance without rebooting.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence?",
    options: [
      { id: 'A', text: "Run unencrypted disk cloning utilities that transmit raw forensic images across the public internet." },
      { id: 'B', text: "Reboot the instance to single-user mode to inspect running processes directly." },
      { id: 'C', text: "An Automation document capturing memory to an isolated bucket and snapshotting the volumes." },
      { id: 'D', text: "Stop the instance immediately, permanently destroying volatile RAM and in-flight network sockets." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute an SSM Automation document to capture volatile RAM to an isolated S3 bucket and take EBS volume snapshots immediately. Forensic preservation requires capturing volatile memory (RAM) first, as shutting down or stopping an instance loses running processes, network connections, and unwritten malware artifacts. Systems Manager (SSM) captures RAM safely, followed by point-in-time EBS snapshots tagged for chain of custody.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/containment.html",
    tags: ["EC2 Forensics","Forensics","Incident Containment"]
  },
  {
    id: "aws-scs-268",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Forensic Disk and Memory Acquisition on EC2: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer needs to acquire forensically sound volatile RAM and persistent disk state from a suspected compromised EC2 instance without rebooting.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls?",
    options: [
      { id: 'A', text: "Stop the instance immediately, permanently destroying volatile RAM and in-flight network sockets." },
      { id: 'B', text: "Run unencrypted disk cloning utilities that transmit raw forensic images across the public internet." },
      { id: 'C', text: "An Automation document capturing memory to an isolated bucket and snapshotting the volumes." },
      { id: 'D', text: "Reboot the instance to single-user mode to inspect running processes directly." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute an SSM Automation document to capture volatile RAM to an isolated S3 bucket and take EBS volume snapshots immediately. Forensic preservation requires capturing volatile memory (RAM) first, as shutting down or stopping an instance loses running processes, network connections, and unwritten malware artifacts. Systems Manager (SSM) captures RAM safely, followed by point-in-time EBS snapshots tagged for chain of custody.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/containment.html",
    tags: ["EC2 Forensics","Forensics","Zero Trust Iam"]
  },
  {
    id: "aws-scs-269",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Forensic Disk and Memory Acquisition on EC2: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer needs to acquire forensically sound volatile RAM and persistent disk state from a suspected compromised EC2 instance without rebooting.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity?",
    options: [
      { id: 'A', text: "An Automation document capturing memory to an isolated bucket and snapshotting the volumes." },
      { id: 'B', text: "Reboot the instance to single-user mode to inspect running processes directly." },
      { id: 'C', text: "Stop the instance immediately, permanently destroying volatile RAM and in-flight network sockets." },
      { id: 'D', text: "Run unencrypted disk cloning utilities that transmit raw forensic images across the public internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute an SSM Automation document to capture volatile RAM to an isolated S3 bucket and take EBS volume snapshots immediately. Forensic preservation requires capturing volatile memory (RAM) first, as shutting down or stopping an instance loses running processes, network connections, and unwritten malware artifacts. Systems Manager (SSM) captures RAM safely, followed by point-in-time EBS snapshots tagged for chain of custody.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/containment.html",
    tags: ["EC2 Forensics","Forensics","Data Protection"]
  },
  {
    id: "aws-scs-270",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Forensic Disk and Memory Acquisition on EC2: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer needs to acquire forensically sound volatile RAM and persistent disk state from a suspected compromised EC2 instance without rebooting.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense?",
    options: [
      { id: 'A', text: "An Automation document capturing memory to an isolated bucket and snapshotting the volumes." },
      { id: 'B', text: "Run unencrypted disk cloning utilities that transmit raw forensic images across the public internet." },
      { id: 'C', text: "Reboot the instance to single-user mode to inspect running processes directly." },
      { id: 'D', text: "Stop the instance immediately, permanently destroying volatile RAM and in-flight network sockets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute an SSM Automation document to capture volatile RAM to an isolated S3 bucket and take EBS volume snapshots immediately. Forensic preservation requires capturing volatile memory (RAM) first, as shutting down or stopping an instance loses running processes, network connections, and unwritten malware artifacts. Systems Manager (SSM) captures RAM safely, followed by point-in-time EBS snapshots tagged for chain of custody.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/containment.html",
    tags: ["EC2 Forensics","Forensics","Infrastructure Defense"]
  },
  {
    id: "aws-scs-271",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "AWS Security Hub Automated Remediation Workflows: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer needs to enable security analysts to remediate non-compliant S3 buckets or open security groups with one click from a central console.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives?",
    options: [
      { id: 'A', text: "Security Hub custom actions to EventBridge, which run Automation runbooks" },
      { id: 'B', text: "Security Hub automation rules that suppress the findings once they are triaged." },
      { id: 'C', text: "A scheduled Lambda polling the findings API and acting on those it recognises." },
      { id: 'D', text: "An EventBridge rule per finding type, each paging the account's own owner." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Security Hub Custom Actions that send finding events to Amazon EventBridge, invoking AWS Systems Manager Automation runbooks. AWS Security Hub aggregates findings from GuardDuty, Inspector, Macie, and IAM Access Analyzer. Custom Actions allow security teams to select findings in the console and emit EventBridge events, triggering automated SSM runbooks (e.g., closing open port 22, enabling S3 encryption) with full auditability.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-custom-actions.html",
    tags: ["AWS Security Hub","Security Hub Actions","Enterprise Governance"]
  },
  {
    id: "aws-scs-272",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "AWS Security Hub Automated Remediation Workflows: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer needs to enable security analysts to remediate non-compliant S3 buckets or open security groups with one click from a central console.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence?",
    options: [
      { id: 'A', text: "Security Hub custom actions to EventBridge, which run Automation runbooks" },
      { id: 'B', text: "An EventBridge rule per finding type, each paging the account's own owner." },
      { id: 'C', text: "Security Hub automation rules that suppress the findings once they are triaged." },
      { id: 'D', text: "A scheduled Lambda polling the findings API and acting on those it recognises." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Security Hub Custom Actions that send finding events to Amazon EventBridge, invoking AWS Systems Manager Automation runbooks. AWS Security Hub aggregates findings from GuardDuty, Inspector, Macie, and IAM Access Analyzer. Custom Actions allow security teams to select findings in the console and emit EventBridge events, triggering automated SSM runbooks (e.g., closing open port 22, enabling S3 encryption) with full auditability.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-custom-actions.html",
    tags: ["AWS Security Hub","Security Hub Actions","Incident Containment"]
  },
  {
    id: "aws-scs-273",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "AWS Security Hub Automated Remediation Workflows: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer needs to enable security analysts to remediate non-compliant S3 buckets or open security groups with one click from a central console.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls?",
    options: [
      { id: 'A', text: "Security Hub automation rules that suppress the findings once they are triaged." },
      { id: 'B', text: "Security Hub custom actions to EventBridge, which run Automation runbooks" },
      { id: 'C', text: "An EventBridge rule per finding type, each paging the account's own owner." },
      { id: 'D', text: "A scheduled Lambda polling the findings API and acting on those it recognises." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure AWS Security Hub Custom Actions that send finding events to Amazon EventBridge, invoking AWS Systems Manager Automation runbooks. AWS Security Hub aggregates findings from GuardDuty, Inspector, Macie, and IAM Access Analyzer. Custom Actions allow security teams to select findings in the console and emit EventBridge events, triggering automated SSM runbooks (e.g., closing open port 22, enabling S3 encryption) with full auditability.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-custom-actions.html",
    tags: ["AWS Security Hub","Security Hub Actions","Zero Trust Iam"]
  },
  {
    id: "aws-scs-274",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "AWS Security Hub Automated Remediation Workflows: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer needs to enable security analysts to remediate non-compliant S3 buckets or open security groups with one click from a central console.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity?",
    options: [
      { id: 'A', text: "Security Hub automation rules that suppress the findings once they are triaged." },
      { id: 'B', text: "An EventBridge rule per finding type, each paging the account's own owner." },
      { id: 'C', text: "A scheduled Lambda polling the findings API and acting on those it recognises." },
      { id: 'D', text: "Security Hub custom actions to EventBridge, which run Automation runbooks" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure AWS Security Hub Custom Actions that send finding events to Amazon EventBridge, invoking AWS Systems Manager Automation runbooks. AWS Security Hub aggregates findings from GuardDuty, Inspector, Macie, and IAM Access Analyzer. Custom Actions allow security teams to select findings in the console and emit EventBridge events, triggering automated SSM runbooks (e.g., closing open port 22, enabling S3 encryption) with full auditability.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-custom-actions.html",
    tags: ["AWS Security Hub","Security Hub Actions","Data Protection"]
  },
  {
    id: "aws-scs-275",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "AWS Security Hub Automated Remediation Workflows: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer needs to enable security analysts to remediate non-compliant S3 buckets or open security groups with one click from a central console.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense?",
    options: [
      { id: 'A', text: "Security Hub custom actions to EventBridge, which run Automation runbooks" },
      { id: 'B', text: "Security Hub automation rules that suppress the findings once they are triaged." },
      { id: 'C', text: "A scheduled Lambda polling the findings API and acting on those it recognises." },
      { id: 'D', text: "An EventBridge rule per finding type, each paging the account's own owner." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Security Hub Custom Actions that send finding events to Amazon EventBridge, invoking AWS Systems Manager Automation runbooks. AWS Security Hub aggregates findings from GuardDuty, Inspector, Macie, and IAM Access Analyzer. Custom Actions allow security teams to select findings in the console and emit EventBridge events, triggering automated SSM runbooks (e.g., closing open port 22, enabling S3 encryption) with full auditability.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-custom-actions.html",
    tags: ["AWS Security Hub","Security Hub Actions","Infrastructure Defense"]
  }
];

export default AWS_SCS_QUESTIONS_11;
