export const AWS_SCS_QUESTIONS_1 = [
  {
    id: "aws-scs-1",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Remediating a Compromised EC2 Instance Forensic Workflow",
    scenario: "Amazon GuardDuty generates a high-severity finding (UnauthorizedAccess:EC2/TorIPCaller) indicating that an Amazon EC2 web server instance is communicating with known Tor exit nodes and may be actively compromised. Security response policy requires isolating the instance immediately while preserving volatile system memory for forensic analysis.",
    question: "Which incident response sequence should the security team execute?",
    options: [
      { id: 'A', text: "Add a deny-all network ACL for the subnet, which cuts the instance off from every other workload" },
      { id: 'B', text: "Reboot the instance to clear memory, then assign it a new address and re-examine the traffic" },
      { id: 'C', text: "Terminate the instance and delete its volumes at once, so the exfiltration cannot continue" },
      { id: 'D', text: "Tag it, swap in an isolation security group, snapshot the volumes, and capture memory before stopping it" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When responding to an EC2 compromise, volatile memory (RAM) and disk state must be preserved for forensic chain of custody before terminating or rebooting the instance. Isolating the instance via a restrictive security group containing only authorized forensic access, taking point-in-time EBS snapshots, and collecting memory dumps satisfies incident response best practices without impacting adjacent workloads.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/containment.html",
    tags: ["Incident Response", "GuardDuty", "Forensics", "EC2"]
  },
  {
    id: "aws-scs-2",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Automated GuardDuty Finding Remediation via EventBridge",
    scenario: "An enterprise requires that whenever Amazon GuardDuty detects cryptocurrency mining activity (CryptoCurrency:EC2/BitcoinTool.B!) on any EC2 instance across any member account, the instance must be automatically stopped and an emergency alert sent to the SOC on-call engineer within 60 seconds.",
    question: "Which event-driven architecture satisfies this requirement?",
    options: [
      { id: 'A', text: "Configure Amazon CloudWatch Logs metric filters on VPC Flow Logs to reboot instances" },
      { id: 'B', text: "An EventBridge rule on that GuardDuty finding type, targeting an Automation runbook" },
      { id: 'C', text: "Create an AWS Config managed rule that evaluates instance CPU utilization every hour" },
      { id: 'D', text: "Write a cron job running on an on-premises server that calls aws guardduty list-findings every 30 minutes" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon GuardDuty findings are published in real time to Amazon EventBridge (formerly CloudWatch Events). EventBridge rules matching specific finding types can automatically trigger remediation workflows using AWS Systems Manager Automation documents or AWS Lambda functions while alerting responders via Amazon SNS.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["GuardDuty", "EventBridge", "Automation", "Incident Response"]
  },
  {
    id: "aws-scs-3",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #1",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #1?",
    options: [
      { id: 'A', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" },
      { id: 'B', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" },
      { id: 'C', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" },
      { id: 'D', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-4",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #2",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #2?",
    options: [
      { id: 'A', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" },
      { id: 'B', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" },
      { id: 'C', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" },
      { id: 'D', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-5",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #3",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #3?",
    options: [
      { id: 'A', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" },
      { id: 'B', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" },
      { id: 'C', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" },
      { id: 'D', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-6",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #4",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #4?",
    options: [
      { id: 'A', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" },
      { id: 'B', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" },
      { id: 'C', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" },
      { id: 'D', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-7",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #5",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #5?",
    options: [
      { id: 'A', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" },
      { id: 'B', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" },
      { id: 'C', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" },
      { id: 'D', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-8",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #6",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #6?",
    options: [
      { id: 'A', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" },
      { id: 'B', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" },
      { id: 'C', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" },
      { id: 'D', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-9",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #7",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #7?",
    options: [
      { id: 'A', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" },
      { id: 'B', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" },
      { id: 'C', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" },
      { id: 'D', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-10",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #8",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #8?",
    options: [
      { id: 'A', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" },
      { id: 'B', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" },
      { id: 'C', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" },
      { id: 'D', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-11",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #9",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #9?",
    options: [
      { id: 'A', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" },
      { id: 'B', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" },
      { id: 'C', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" },
      { id: 'D', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-12",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #10",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #10?",
    options: [
      { id: 'A', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" },
      { id: 'B', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" },
      { id: 'C', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" },
      { id: 'D', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-13",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #11",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #11?",
    options: [
      { id: 'A', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" },
      { id: 'B', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" },
      { id: 'C', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" },
      { id: 'D', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-14",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #12",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #12?",
    options: [
      { id: 'A', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" },
      { id: 'B', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" },
      { id: 'C', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" },
      { id: 'D', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-15",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #13",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #13?",
    options: [
      { id: 'A', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" },
      { id: 'B', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" },
      { id: 'C', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" },
      { id: 'D', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-16",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #14",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #14?",
    options: [
      { id: 'A', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" },
      { id: 'B', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" },
      { id: 'C', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" },
      { id: 'D', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-17",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #15",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #15?",
    options: [
      { id: 'A', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" },
      { id: 'B', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" },
      { id: 'C', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" },
      { id: 'D', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-18",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #16",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #16?",
    options: [
      { id: 'A', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" },
      { id: 'B', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" },
      { id: 'C', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" },
      { id: 'D', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-19",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #17",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #17?",
    options: [
      { id: 'A', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" },
      { id: 'B', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" },
      { id: 'C', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" },
      { id: 'D', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-20",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #18",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #18?",
    options: [
      { id: 'A', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" },
      { id: 'B', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" },
      { id: 'C', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" },
      { id: 'D', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-21",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #19",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #19?",
    options: [
      { id: 'A', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" },
      { id: 'B', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" },
      { id: 'C', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" },
      { id: 'D', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-22",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #20",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #20?",
    options: [
      { id: 'A', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" },
      { id: 'B', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" },
      { id: 'C', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" },
      { id: 'D', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-23",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #21",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #21?",
    options: [
      { id: 'A', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" },
      { id: 'B', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" },
      { id: 'C', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" },
      { id: 'D', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-24",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #22",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #22?",
    options: [
      { id: 'A', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" },
      { id: 'B', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" },
      { id: 'C', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" },
      { id: 'D', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  },
  {
    id: "aws-scs-25",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Threat Detection Scenario #23",
    scenario: "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    question: "Which threat detection architecture best satisfies objective #23?",
    options: [
      { id: 'A', text: "Streaming GuardDuty findings to a queue that the on-call engineer reads each morning" },
      { id: 'B', text: "Aggregating findings in Security Hub and triaging them from each member account's own console" },
      { id: 'C', text: "Enabling GuardDuty in one account and reviewing its findings in the monthly report" },
      { id: 'D', text: "Aggregating in Security Hub, investigating in Detective, and containing through EventBridge" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "GuardDuty", "Detective", "Incident Response"]
  }
];

export default AWS_SCS_QUESTIONS_1;
