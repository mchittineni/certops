export const AWS_SCS_QUESTIONS_11 = [
  {
    id: "aws-scs-251",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Automated GuardDuty Finding Remediation: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates Amazon GuardDuty to isolate an EC2 instance communicating with command-and-control servers automatically within seconds of detection.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? EventBridge rules triggering Lambda functions to isolate compromised EC2 instances is under consideration.",
    options: [
      { id: 'A', text: "Require a security analyst to manually review email alerts and log into the AWS console over the weekend." },
      { id: 'B', text: "Configure Amazon EventBridge to capture GuardDuty findings and trigger a Lambda function that attaches an isolation security group." },
      { id: 'C', text: "Disable GuardDuty finding generation to prevent unnecessary automation triggers." },
      { id: 'D', text: "Terminate the entire AWS account immediately upon receiving any GuardDuty finding." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Amazon EventBridge to capture GuardDuty findings and trigger a Lambda function that attaches an isolation security group. Amazon GuardDuty detects threats using machine learning and threat intelligence. Integrating GuardDuty with Amazon EventBridge enables near real-time automated incident response: EventBridge filters high-severity findings and triggers AWS Lambda or SSM Automation to isolate instances without human delay.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["Amazon GuardDuty", "GuardDuty Automation", "Enterprise Governance"]
  },
  {
    id: "aws-scs-252",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Automated GuardDuty Finding Remediation: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates Amazon GuardDuty to isolate an EC2 instance communicating with command-and-control servers automatically within seconds of detection.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? EventBridge rules triggering Lambda functions to isolate compromised EC2 instances is under consideration.",
    options: [
      { id: 'A', text: "Terminate the entire AWS account immediately upon receiving any GuardDuty finding." },
      { id: 'B', text: "Require a security analyst to manually review email alerts and log into the AWS console over the weekend." },
      { id: 'C', text: "Configure Amazon EventBridge to capture GuardDuty findings and trigger a Lambda function that attaches an isolation security group." },
      { id: 'D', text: "Disable GuardDuty finding generation to prevent unnecessary automation triggers." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure Amazon EventBridge to capture GuardDuty findings and trigger a Lambda function that attaches an isolation security group. Amazon GuardDuty detects threats using machine learning and threat intelligence. Integrating GuardDuty with Amazon EventBridge enables near real-time automated incident response: EventBridge filters high-severity findings and triggers AWS Lambda or SSM Automation to isolate instances without human delay.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["Amazon GuardDuty", "GuardDuty Automation", "Incident Containment"]
  },
  {
    id: "aws-scs-253",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Automated GuardDuty Finding Remediation: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates Amazon GuardDuty to isolate an EC2 instance communicating with command-and-control servers automatically within seconds of detection.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? EventBridge rules triggering Lambda functions to isolate compromised EC2 instances is under consideration.",
    options: [
      { id: 'A', text: "Require a security analyst to manually review email alerts and log into the AWS console over the weekend." },
      { id: 'B', text: "Configure Amazon EventBridge to capture GuardDuty findings and trigger a Lambda function that attaches an isolation security group." },
      { id: 'C', text: "Terminate the entire AWS account immediately upon receiving any GuardDuty finding." },
      { id: 'D', text: "Disable GuardDuty finding generation to prevent unnecessary automation triggers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Amazon EventBridge to capture GuardDuty findings and trigger a Lambda function that attaches an isolation security group. Amazon GuardDuty detects threats using machine learning and threat intelligence. Integrating GuardDuty with Amazon EventBridge enables near real-time automated incident response: EventBridge filters high-severity findings and triggers AWS Lambda or SSM Automation to isolate instances without human delay.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["Amazon GuardDuty", "GuardDuty Automation", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-254",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Automated GuardDuty Finding Remediation: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates Amazon GuardDuty to isolate an EC2 instance communicating with command-and-control servers automatically within seconds of detection.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? EventBridge rules triggering Lambda functions to isolate compromised EC2 instances is under consideration.",
    options: [
      { id: 'A', text: "Require a security analyst to manually review email alerts and log into the AWS console over the weekend." },
      { id: 'B', text: "Configure Amazon EventBridge to capture GuardDuty findings and trigger a Lambda function that attaches an isolation security group." },
      { id: 'C', text: "Terminate the entire AWS account immediately upon receiving any GuardDuty finding." },
      { id: 'D', text: "Disable GuardDuty finding generation to prevent unnecessary automation triggers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Amazon EventBridge to capture GuardDuty findings and trigger a Lambda function that attaches an isolation security group. Amazon GuardDuty detects threats using machine learning and threat intelligence. Integrating GuardDuty with Amazon EventBridge enables near real-time automated incident response: EventBridge filters high-severity findings and triggers AWS Lambda or SSM Automation to isolate instances without human delay.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["Amazon GuardDuty", "GuardDuty Automation", "Data Protection"]
  },
  {
    id: "aws-scs-255",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Automated GuardDuty Finding Remediation: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates Amazon GuardDuty to isolate an EC2 instance communicating with command-and-control servers automatically within seconds of detection.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? EventBridge rules triggering Lambda functions to isolate compromised EC2 instances is under consideration.",
    options: [
      { id: 'A', text: "Disable GuardDuty finding generation to prevent unnecessary automation triggers." },
      { id: 'B', text: "Terminate the entire AWS account immediately upon receiving any GuardDuty finding." },
      { id: 'C', text: "Require a security analyst to manually review email alerts and log into the AWS console over the weekend." },
      { id: 'D', text: "Configure Amazon EventBridge to capture GuardDuty findings and trigger a Lambda function that attaches an isolation security group." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Amazon EventBridge to capture GuardDuty findings and trigger a Lambda function that attaches an isolation security group. Amazon GuardDuty detects threats using machine learning and threat intelligence. Integrating GuardDuty with Amazon EventBridge enables near real-time automated incident response: EventBridge filters high-severity findings and triggers AWS Lambda or SSM Automation to isolate instances without human delay.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["Amazon GuardDuty", "GuardDuty Automation", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-256",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon Detective Graph Investigation and Root Cause Analysis: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates Amazon Detective to investigate the full scope and lateral movement of an attacker who accessed an S3 bucket and created unauthorized IAM users.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Visualizing VPC flow logs, CloudTrail management events, and GuardDuty findings in a unified graph is under consideration.",
    options: [
      { id: 'A', text: "Rely exclusively on basic CloudWatch billing metrics to determine the breach root cause." },
      { id: 'B', text: "Manually download gigabytes of raw gzip CloudTrail files and grep through them using a spreadsheet program." },
      { id: 'C', text: "Enable Amazon Detective to analyze and visualize correlated CloudTrail events, VPC Flow Logs, and GuardDuty findings in a graph model." },
      { id: 'D', text: "Delete CloudTrail logs to prevent the attacker from tracking security forensic queries." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Amazon Detective to analyze and visualize correlated CloudTrail events, VPC Flow Logs, and GuardDuty findings in a graph model. Amazon Detective automatically collects log data from VPC Flow Logs, CloudTrail, and GuardDuty, building a graph model that visualizes resource interactions over time. Security teams investigate anomalies, root cause, and attacker lateral movement rapidly through interactive visual timelines.",
    referenceUrl: "https://docs.aws.amazon.com/detective/latest/adminguide/what-is-detective.html",
    tags: ["Amazon Detective", "Amazon Detective", "Enterprise Governance"]
  },
  {
    id: "aws-scs-257",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon Detective Graph Investigation and Root Cause Analysis: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates Amazon Detective to investigate the full scope and lateral movement of an attacker who accessed an S3 bucket and created unauthorized IAM users.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Visualizing VPC flow logs, CloudTrail management events, and GuardDuty findings in a unified graph is under consideration.",
    options: [
      { id: 'A', text: "Manually download gigabytes of raw gzip CloudTrail files and grep through them using a spreadsheet program." },
      { id: 'B', text: "Delete CloudTrail logs to prevent the attacker from tracking security forensic queries." },
      { id: 'C', text: "Rely exclusively on basic CloudWatch billing metrics to determine the breach root cause." },
      { id: 'D', text: "Enable Amazon Detective to analyze and visualize correlated CloudTrail events, VPC Flow Logs, and GuardDuty findings in a graph model." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Amazon Detective to analyze and visualize correlated CloudTrail events, VPC Flow Logs, and GuardDuty findings in a graph model. Amazon Detective automatically collects log data from VPC Flow Logs, CloudTrail, and GuardDuty, building a graph model that visualizes resource interactions over time. Security teams investigate anomalies, root cause, and attacker lateral movement rapidly through interactive visual timelines.",
    referenceUrl: "https://docs.aws.amazon.com/detective/latest/adminguide/what-is-detective.html",
    tags: ["Amazon Detective", "Amazon Detective", "Incident Containment"]
  },
  {
    id: "aws-scs-258",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon Detective Graph Investigation and Root Cause Analysis: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates Amazon Detective to investigate the full scope and lateral movement of an attacker who accessed an S3 bucket and created unauthorized IAM users.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Visualizing VPC flow logs, CloudTrail management events, and GuardDuty findings in a unified graph is under consideration.",
    options: [
      { id: 'A', text: "Enable Amazon Detective to analyze and visualize correlated CloudTrail events, VPC Flow Logs, and GuardDuty findings in a graph model." },
      { id: 'B', text: "Manually download gigabytes of raw gzip CloudTrail files and grep through them using a spreadsheet program." },
      { id: 'C', text: "Delete CloudTrail logs to prevent the attacker from tracking security forensic queries." },
      { id: 'D', text: "Rely exclusively on basic CloudWatch billing metrics to determine the breach root cause." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Detective to analyze and visualize correlated CloudTrail events, VPC Flow Logs, and GuardDuty findings in a graph model. Amazon Detective automatically collects log data from VPC Flow Logs, CloudTrail, and GuardDuty, building a graph model that visualizes resource interactions over time. Security teams investigate anomalies, root cause, and attacker lateral movement rapidly through interactive visual timelines.",
    referenceUrl: "https://docs.aws.amazon.com/detective/latest/adminguide/what-is-detective.html",
    tags: ["Amazon Detective", "Amazon Detective", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-259",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon Detective Graph Investigation and Root Cause Analysis: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates Amazon Detective to investigate the full scope and lateral movement of an attacker who accessed an S3 bucket and created unauthorized IAM users.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Visualizing VPC flow logs, CloudTrail management events, and GuardDuty findings in a unified graph is under consideration.",
    options: [
      { id: 'A', text: "Delete CloudTrail logs to prevent the attacker from tracking security forensic queries." },
      { id: 'B', text: "Rely exclusively on basic CloudWatch billing metrics to determine the breach root cause." },
      { id: 'C', text: "Enable Amazon Detective to analyze and visualize correlated CloudTrail events, VPC Flow Logs, and GuardDuty findings in a graph model." },
      { id: 'D', text: "Manually download gigabytes of raw gzip CloudTrail files and grep through them using a spreadsheet program." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Amazon Detective to analyze and visualize correlated CloudTrail events, VPC Flow Logs, and GuardDuty findings in a graph model. Amazon Detective automatically collects log data from VPC Flow Logs, CloudTrail, and GuardDuty, building a graph model that visualizes resource interactions over time. Security teams investigate anomalies, root cause, and attacker lateral movement rapidly through interactive visual timelines.",
    referenceUrl: "https://docs.aws.amazon.com/detective/latest/adminguide/what-is-detective.html",
    tags: ["Amazon Detective", "Amazon Detective", "Data Protection"]
  },
  {
    id: "aws-scs-260",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon Detective Graph Investigation and Root Cause Analysis: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates Amazon Detective to investigate the full scope and lateral movement of an attacker who accessed an S3 bucket and created unauthorized IAM users.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Visualizing VPC flow logs, CloudTrail management events, and GuardDuty findings in a unified graph is under consideration.",
    options: [
      { id: 'A', text: "Rely exclusively on basic CloudWatch billing metrics to determine the breach root cause." },
      { id: 'B', text: "Enable Amazon Detective to analyze and visualize correlated CloudTrail events, VPC Flow Logs, and GuardDuty findings in a graph model." },
      { id: 'C', text: "Manually download gigabytes of raw gzip CloudTrail files and grep through them using a spreadsheet program." },
      { id: 'D', text: "Delete CloudTrail logs to prevent the attacker from tracking security forensic queries." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Amazon Detective to analyze and visualize correlated CloudTrail events, VPC Flow Logs, and GuardDuty findings in a graph model. Amazon Detective automatically collects log data from VPC Flow Logs, CloudTrail, and GuardDuty, building a graph model that visualizes resource interactions over time. Security teams investigate anomalies, root cause, and attacker lateral movement rapidly through interactive visual timelines.",
    referenceUrl: "https://docs.aws.amazon.com/detective/latest/adminguide/what-is-detective.html",
    tags: ["Amazon Detective", "Amazon Detective", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-261",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Compromised IAM Access Key Response Workflow: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates IAM Remediation to neutralize an active compromised IAM long-term access key immediately while preserving identity attributes for audit.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Deactivating access keys, applying inline Deny-all policies, and revoking active STS sessions is under consideration.",
    options: [
      { id: 'A', text: "Send an email to the user asking them to delete the compromised credential voluntarily." },
      { id: 'B', text: "Deactivate the IAM access key, attach an inline `DenyAll` policy with an explicit Deny on all actions, and revoke active STS sessions." },
      { id: 'C', text: "Change the user's password while leaving active long-term access keys and STS session tokens untouched." },
      { id: 'D', text: "Delete the IAM user immediately, destroying all historic CloudTrail event references and forensic evidence." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deactivate the IAM access key, attach an inline `DenyAll` policy with an explicit Deny on all actions, and revoke active STS sessions. When an IAM credential is leaked, immediate containment requires: 1) deactivating the access key (`aws iam update-access-key --status Inactive`), 2) revoking temporary STS sessions via `aws:CurrentTime &lt; [timestamp]` revoke policy, and 3) attaching an explicit Deny policy to block ongoing operations.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_troubleshoot.html#credentials_troubleshoot_compromised-keys",
    tags: ["IAM Remediation", "Compromised IAM Keys", "Enterprise Governance"]
  },
  {
    id: "aws-scs-262",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Compromised IAM Access Key Response Workflow: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates IAM Remediation to neutralize an active compromised IAM long-term access key immediately while preserving identity attributes for audit.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Deactivating access keys, applying inline Deny-all policies, and revoking active STS sessions is under consideration.",
    options: [
      { id: 'A', text: "Send an email to the user asking them to delete the compromised credential voluntarily." },
      { id: 'B', text: "Delete the IAM user immediately, destroying all historic CloudTrail event references and forensic evidence." },
      { id: 'C', text: "Deactivate the IAM access key, attach an inline `DenyAll` policy with an explicit Deny on all actions, and revoke active STS sessions." },
      { id: 'D', text: "Change the user's password while leaving active long-term access keys and STS session tokens untouched." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deactivate the IAM access key, attach an inline `DenyAll` policy with an explicit Deny on all actions, and revoke active STS sessions. When an IAM credential is leaked, immediate containment requires: 1) deactivating the access key (`aws iam update-access-key --status Inactive`), 2) revoking temporary STS sessions via `aws:CurrentTime &lt; [timestamp]` revoke policy, and 3) attaching an explicit Deny policy to block ongoing operations.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_troubleshoot.html#credentials_troubleshoot_compromised-keys",
    tags: ["IAM Remediation", "Compromised IAM Keys", "Incident Containment"]
  },
  {
    id: "aws-scs-263",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Compromised IAM Access Key Response Workflow: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates IAM Remediation to neutralize an active compromised IAM long-term access key immediately while preserving identity attributes for audit.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Deactivating access keys, applying inline Deny-all policies, and revoking active STS sessions is under consideration.",
    options: [
      { id: 'A', text: "Deactivate the IAM access key, attach an inline `DenyAll` policy with an explicit Deny on all actions, and revoke active STS sessions." },
      { id: 'B', text: "Change the user's password while leaving active long-term access keys and STS session tokens untouched." },
      { id: 'C', text: "Delete the IAM user immediately, destroying all historic CloudTrail event references and forensic evidence." },
      { id: 'D', text: "Send an email to the user asking them to delete the compromised credential voluntarily." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deactivate the IAM access key, attach an inline `DenyAll` policy with an explicit Deny on all actions, and revoke active STS sessions. When an IAM credential is leaked, immediate containment requires: 1) deactivating the access key (`aws iam update-access-key --status Inactive`), 2) revoking temporary STS sessions via `aws:CurrentTime &lt; [timestamp]` revoke policy, and 3) attaching an explicit Deny policy to block ongoing operations.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_troubleshoot.html#credentials_troubleshoot_compromised-keys",
    tags: ["IAM Remediation", "Compromised IAM Keys", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-264",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Compromised IAM Access Key Response Workflow: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates IAM Remediation to neutralize an active compromised IAM long-term access key immediately while preserving identity attributes for audit.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Deactivating access keys, applying inline Deny-all policies, and revoking active STS sessions is under consideration.",
    options: [
      { id: 'A', text: "Delete the IAM user immediately, destroying all historic CloudTrail event references and forensic evidence." },
      { id: 'B', text: "Deactivate the IAM access key, attach an inline `DenyAll` policy with an explicit Deny on all actions, and revoke active STS sessions." },
      { id: 'C', text: "Send an email to the user asking them to delete the compromised credential voluntarily." },
      { id: 'D', text: "Change the user's password while leaving active long-term access keys and STS session tokens untouched." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deactivate the IAM access key, attach an inline `DenyAll` policy with an explicit Deny on all actions, and revoke active STS sessions. When an IAM credential is leaked, immediate containment requires: 1) deactivating the access key (`aws iam update-access-key --status Inactive`), 2) revoking temporary STS sessions via `aws:CurrentTime &lt; [timestamp]` revoke policy, and 3) attaching an explicit Deny policy to block ongoing operations.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_troubleshoot.html#credentials_troubleshoot_compromised-keys",
    tags: ["IAM Remediation", "Compromised IAM Keys", "Data Protection"]
  },
  {
    id: "aws-scs-265",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Compromised IAM Access Key Response Workflow: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates IAM Remediation to neutralize an active compromised IAM long-term access key immediately while preserving identity attributes for audit.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Deactivating access keys, applying inline Deny-all policies, and revoking active STS sessions is under consideration.",
    options: [
      { id: 'A', text: "Delete the IAM user immediately, destroying all historic CloudTrail event references and forensic evidence." },
      { id: 'B', text: "Change the user's password while leaving active long-term access keys and STS session tokens untouched." },
      { id: 'C', text: "Send an email to the user asking them to delete the compromised credential voluntarily." },
      { id: 'D', text: "Deactivate the IAM access key, attach an inline `DenyAll` policy with an explicit Deny on all actions, and revoke active STS sessions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deactivate the IAM access key, attach an inline `DenyAll` policy with an explicit Deny on all actions, and revoke active STS sessions. When an IAM credential is leaked, immediate containment requires: 1) deactivating the access key (`aws iam update-access-key --status Inactive`), 2) revoking temporary STS sessions via `aws:CurrentTime &lt; [timestamp]` revoke policy, and 3) attaching an explicit Deny policy to block ongoing operations.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_troubleshoot.html#credentials_troubleshoot_compromised-keys",
    tags: ["IAM Remediation", "Compromised IAM Keys", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-266",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Forensic Disk and Memory Acquisition on EC2: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates EC2 Forensics to acquire forensically sound volatile RAM and persistent disk state from a suspected compromised EC2 instance without rebooting.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Capturing volatile memory via SSM Automation and snapshotting EBS volumes without rebooting is under consideration.",
    options: [
      { id: 'A', text: "Stop the instance immediately, permanently destroying volatile RAM and in-flight network sockets." },
      { id: 'B', text: "Run unencrypted disk cloning utilities that transmit raw forensic images across the public internet." },
      { id: 'C', text: "Execute an SSM Automation document to capture volatile RAM to an isolated S3 bucket and take EBS volume snapshots immediately." },
      { id: 'D', text: "Reboot the instance to single-user mode to inspect running processes directly." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute an SSM Automation document to capture volatile RAM to an isolated S3 bucket and take EBS volume snapshots immediately. Forensic preservation requires capturing volatile memory (RAM) first, as shutting down or stopping an instance loses running processes, network connections, and unwritten malware artifacts. Systems Manager (SSM) captures RAM safely, followed by point-in-time EBS snapshots tagged for chain of custody.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/containment.html",
    tags: ["EC2 Forensics", "Forensics", "Enterprise Governance"]
  },
  {
    id: "aws-scs-267",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Forensic Disk and Memory Acquisition on EC2: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates EC2 Forensics to acquire forensically sound volatile RAM and persistent disk state from a suspected compromised EC2 instance without rebooting.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Capturing volatile memory via SSM Automation and snapshotting EBS volumes without rebooting is under consideration.",
    options: [
      { id: 'A', text: "Stop the instance immediately, permanently destroying volatile RAM and in-flight network sockets." },
      { id: 'B', text: "Reboot the instance to single-user mode to inspect running processes directly." },
      { id: 'C', text: "Run unencrypted disk cloning utilities that transmit raw forensic images across the public internet." },
      { id: 'D', text: "Execute an SSM Automation document to capture volatile RAM to an isolated S3 bucket and take EBS volume snapshots immediately." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute an SSM Automation document to capture volatile RAM to an isolated S3 bucket and take EBS volume snapshots immediately. Forensic preservation requires capturing volatile memory (RAM) first, as shutting down or stopping an instance loses running processes, network connections, and unwritten malware artifacts. Systems Manager (SSM) captures RAM safely, followed by point-in-time EBS snapshots tagged for chain of custody.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/containment.html",
    tags: ["EC2 Forensics", "Forensics", "Incident Containment"]
  },
  {
    id: "aws-scs-268",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Forensic Disk and Memory Acquisition on EC2: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates EC2 Forensics to acquire forensically sound volatile RAM and persistent disk state from a suspected compromised EC2 instance without rebooting.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Capturing volatile memory via SSM Automation and snapshotting EBS volumes without rebooting is under consideration.",
    options: [
      { id: 'A', text: "Reboot the instance to single-user mode to inspect running processes directly." },
      { id: 'B', text: "Stop the instance immediately, permanently destroying volatile RAM and in-flight network sockets." },
      { id: 'C', text: "Run unencrypted disk cloning utilities that transmit raw forensic images across the public internet." },
      { id: 'D', text: "Execute an SSM Automation document to capture volatile RAM to an isolated S3 bucket and take EBS volume snapshots immediately." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute an SSM Automation document to capture volatile RAM to an isolated S3 bucket and take EBS volume snapshots immediately. Forensic preservation requires capturing volatile memory (RAM) first, as shutting down or stopping an instance loses running processes, network connections, and unwritten malware artifacts. Systems Manager (SSM) captures RAM safely, followed by point-in-time EBS snapshots tagged for chain of custody.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/containment.html",
    tags: ["EC2 Forensics", "Forensics", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-269",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Forensic Disk and Memory Acquisition on EC2: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates EC2 Forensics to acquire forensically sound volatile RAM and persistent disk state from a suspected compromised EC2 instance without rebooting.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Capturing volatile memory via SSM Automation and snapshotting EBS volumes without rebooting is under consideration.",
    options: [
      { id: 'A', text: "Run unencrypted disk cloning utilities that transmit raw forensic images across the public internet." },
      { id: 'B', text: "Reboot the instance to single-user mode to inspect running processes directly." },
      { id: 'C', text: "Stop the instance immediately, permanently destroying volatile RAM and in-flight network sockets." },
      { id: 'D', text: "Execute an SSM Automation document to capture volatile RAM to an isolated S3 bucket and take EBS volume snapshots immediately." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute an SSM Automation document to capture volatile RAM to an isolated S3 bucket and take EBS volume snapshots immediately. Forensic preservation requires capturing volatile memory (RAM) first, as shutting down or stopping an instance loses running processes, network connections, and unwritten malware artifacts. Systems Manager (SSM) captures RAM safely, followed by point-in-time EBS snapshots tagged for chain of custody.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/containment.html",
    tags: ["EC2 Forensics", "Forensics", "Data Protection"]
  },
  {
    id: "aws-scs-270",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Forensic Disk and Memory Acquisition on EC2: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates EC2 Forensics to acquire forensically sound volatile RAM and persistent disk state from a suspected compromised EC2 instance without rebooting.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Capturing volatile memory via SSM Automation and snapshotting EBS volumes without rebooting is under consideration.",
    options: [
      { id: 'A', text: "Execute an SSM Automation document to capture volatile RAM to an isolated S3 bucket and take EBS volume snapshots immediately." },
      { id: 'B', text: "Stop the instance immediately, permanently destroying volatile RAM and in-flight network sockets." },
      { id: 'C', text: "Run unencrypted disk cloning utilities that transmit raw forensic images across the public internet." },
      { id: 'D', text: "Reboot the instance to single-user mode to inspect running processes directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute an SSM Automation document to capture volatile RAM to an isolated S3 bucket and take EBS volume snapshots immediately. Forensic preservation requires capturing volatile memory (RAM) first, as shutting down or stopping an instance loses running processes, network connections, and unwritten malware artifacts. Systems Manager (SSM) captures RAM safely, followed by point-in-time EBS snapshots tagged for chain of custody.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/containment.html",
    tags: ["EC2 Forensics", "Forensics", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-271",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "AWS Security Hub Automated Remediation Workflows: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates AWS Security Hub to enable security analysts to remediate non-compliant S3 buckets or open security groups with one click from a central console.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Custom Actions triggering EventBridge rules and SSM Automation runbooks is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS Security Hub Custom Actions that send finding events to Amazon EventBridge, invoking AWS Systems Manager Automation runbooks." },
      { id: 'B', text: "Grant full administrative IAM rights to all third-party finding ingestion integrations." },
      { id: 'C', text: "Disable Security Hub compliance standards (CIS AWS Foundations) to clear the finding queue." },
      { id: 'D', text: "Write custom shell scripts on individual developer laptops that invoke raw AWS CLI delete commands." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Security Hub Custom Actions that send finding events to Amazon EventBridge, invoking AWS Systems Manager Automation runbooks. AWS Security Hub aggregates findings from GuardDuty, Inspector, Macie, and IAM Access Analyzer. Custom Actions allow security teams to select findings in the console and emit EventBridge events, triggering automated SSM runbooks (e.g., closing open port 22, enabling S3 encryption) with full auditability.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-custom-actions.html",
    tags: ["AWS Security Hub", "Security Hub Actions", "Enterprise Governance"]
  },
  {
    id: "aws-scs-272",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "AWS Security Hub Automated Remediation Workflows: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates AWS Security Hub to enable security analysts to remediate non-compliant S3 buckets or open security groups with one click from a central console.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Custom Actions triggering EventBridge rules and SSM Automation runbooks is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS Security Hub Custom Actions that send finding events to Amazon EventBridge, invoking AWS Systems Manager Automation runbooks." },
      { id: 'B', text: "Disable Security Hub compliance standards (CIS AWS Foundations) to clear the finding queue." },
      { id: 'C', text: "Write custom shell scripts on individual developer laptops that invoke raw AWS CLI delete commands." },
      { id: 'D', text: "Grant full administrative IAM rights to all third-party finding ingestion integrations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Security Hub Custom Actions that send finding events to Amazon EventBridge, invoking AWS Systems Manager Automation runbooks. AWS Security Hub aggregates findings from GuardDuty, Inspector, Macie, and IAM Access Analyzer. Custom Actions allow security teams to select findings in the console and emit EventBridge events, triggering automated SSM runbooks (e.g., closing open port 22, enabling S3 encryption) with full auditability.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-custom-actions.html",
    tags: ["AWS Security Hub", "Security Hub Actions", "Incident Containment"]
  },
  {
    id: "aws-scs-273",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "AWS Security Hub Automated Remediation Workflows: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates AWS Security Hub to enable security analysts to remediate non-compliant S3 buckets or open security groups with one click from a central console.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Custom Actions triggering EventBridge rules and SSM Automation runbooks is under consideration.",
    options: [
      { id: 'A', text: "Write custom shell scripts on individual developer laptops that invoke raw AWS CLI delete commands." },
      { id: 'B', text: "Disable Security Hub compliance standards (CIS AWS Foundations) to clear the finding queue." },
      { id: 'C', text: "Grant full administrative IAM rights to all third-party finding ingestion integrations." },
      { id: 'D', text: "Configure AWS Security Hub Custom Actions that send finding events to Amazon EventBridge, invoking AWS Systems Manager Automation runbooks." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure AWS Security Hub Custom Actions that send finding events to Amazon EventBridge, invoking AWS Systems Manager Automation runbooks. AWS Security Hub aggregates findings from GuardDuty, Inspector, Macie, and IAM Access Analyzer. Custom Actions allow security teams to select findings in the console and emit EventBridge events, triggering automated SSM runbooks (e.g., closing open port 22, enabling S3 encryption) with full auditability.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-custom-actions.html",
    tags: ["AWS Security Hub", "Security Hub Actions", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-274",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "AWS Security Hub Automated Remediation Workflows: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates AWS Security Hub to enable security analysts to remediate non-compliant S3 buckets or open security groups with one click from a central console.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Custom Actions triggering EventBridge rules and SSM Automation runbooks is under consideration.",
    options: [
      { id: 'A', text: "Grant full administrative IAM rights to all third-party finding ingestion integrations." },
      { id: 'B', text: "Configure AWS Security Hub Custom Actions that send finding events to Amazon EventBridge, invoking AWS Systems Manager Automation runbooks." },
      { id: 'C', text: "Disable Security Hub compliance standards (CIS AWS Foundations) to clear the finding queue." },
      { id: 'D', text: "Write custom shell scripts on individual developer laptops that invoke raw AWS CLI delete commands." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure AWS Security Hub Custom Actions that send finding events to Amazon EventBridge, invoking AWS Systems Manager Automation runbooks. AWS Security Hub aggregates findings from GuardDuty, Inspector, Macie, and IAM Access Analyzer. Custom Actions allow security teams to select findings in the console and emit EventBridge events, triggering automated SSM runbooks (e.g., closing open port 22, enabling S3 encryption) with full auditability.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-custom-actions.html",
    tags: ["AWS Security Hub", "Security Hub Actions", "Data Protection"]
  },
  {
    id: "aws-scs-275",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "AWS Security Hub Automated Remediation Workflows: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates AWS Security Hub to enable security analysts to remediate non-compliant S3 buckets or open security groups with one click from a central console.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Custom Actions triggering EventBridge rules and SSM Automation runbooks is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS Security Hub Custom Actions that send finding events to Amazon EventBridge, invoking AWS Systems Manager Automation runbooks." },
      { id: 'B', text: "Grant full administrative IAM rights to all third-party finding ingestion integrations." },
      { id: 'C', text: "Disable Security Hub compliance standards (CIS AWS Foundations) to clear the finding queue." },
      { id: 'D', text: "Write custom shell scripts on individual developer laptops that invoke raw AWS CLI delete commands." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Security Hub Custom Actions that send finding events to Amazon EventBridge, invoking AWS Systems Manager Automation runbooks. AWS Security Hub aggregates findings from GuardDuty, Inspector, Macie, and IAM Access Analyzer. Custom Actions allow security teams to select findings in the console and emit EventBridge events, triggering automated SSM runbooks (e.g., closing open port 22, enabling S3 encryption) with full auditability.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-custom-actions.html",
    tags: ["AWS Security Hub", "Security Hub Actions", "Infrastructure Defense"]
  }
];

export default AWS_SCS_QUESTIONS_11;
