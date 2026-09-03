export const AWS_SCS_QUESTIONS_1 = [
  {
    "id": "aws-scs-1",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Remediating a Compromised EC2 Instance Forensic Workflow",
    "scenario": "Amazon GuardDuty generates a high-severity finding (UnauthorizedAccess:EC2/TorIPCaller) indicating that an Amazon EC2 web server instance is communicating with known Tor exit nodes and may be actively compromised. Security response policy requires isolating the instance immediately while preserving volatile system memory for forensic analysis.",
    "question": "Which incident response sequence should the security team execute?",
    "options": [
      {
        "id": "A",
        "text": "Immediately terminate the EC2 instance using the AWS CLI and delete its attached root EBS volumes to stop data exfiltration"
      },
      {
        "id": "B",
        "text": "Reboot the instance to clear malware from memory and assign a new public Elastic IP address"
      },
      {
        "id": "C",
        "text": "Add a deny-all rule to the VPC Network ACL for the entire subnet, disconnecting all other healthy workloads"
      },
      {
        "id": "D",
        "text": "Tag the instance, modify its security group to remove all inbound/outbound rules and attach an isolation security group that allows inbound forensic analysis from a secure bastion, create an EBS volume snapshot of all attached volumes, and capture volatile RAM using an SSM Automation document or kernel module prior to stopping"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "type": "single",
    "explanation": "When responding to an EC2 compromise, volatile memory (RAM) and disk state must be preserved for forensic chain of custody before terminating or rebooting the instance. Isolating the instance via a restrictive security group containing only authorized forensic access, taking point-in-time EBS snapshots, and collecting memory dumps satisfies incident response best practices without impacting adjacent workloads.",
    "referenceUrl": "https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/containment.html",
    "tags": [
      "Incident Response",
      "GuardDuty",
      "Forensics",
      "EC2"
    ]
  },
  {
    "id": "aws-scs-2",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Automated GuardDuty Finding Remediation via EventBridge",
    "scenario": "An enterprise requires that whenever Amazon GuardDuty detects cryptocurrency mining activity (CryptoCurrency:EC2/BitcoinTool.B!) on any EC2 instance across any member account, the instance must be automatically stopped and an emergency alert sent to the SOC on-call engineer within 60 seconds.",
    "question": "Which event-driven architecture satisfies this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Create an AWS Config managed rule that evaluates instance CPU utilization every hour"
      },
      {
        "id": "B",
        "text": "Configure Amazon CloudWatch Logs metric filters on VPC Flow Logs to reboot instances"
      },
      {
        "id": "C",
        "text": "Write a cron job running on an on-premises server that calls aws guardduty list-findings every 30 minutes"
      },
      {
        "id": "D",
        "text": "Configure an Amazon EventBridge rule that filters for GuardDuty findings of type CryptoCurrency:EC2/BitcoinTool.B!, targeting an AWS Systems Manager Automation runbook (AWS-StopEC2Instance) and an Amazon SNS topic for SOC notification"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "type": "single",
    "explanation": "Amazon GuardDuty findings are published in real time to Amazon EventBridge (formerly CloudWatch Events). EventBridge rules matching specific finding types can automatically trigger remediation workflows using AWS Systems Manager Automation documents or AWS Lambda functions while alerting responders via Amazon SNS.",
    "referenceUrl": "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    "tags": [
      "GuardDuty",
      "EventBridge",
      "Automation",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-3",
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #1",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #1?",
    "options": [
      {
        "id": "A",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "B",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      },
      {
        "id": "C",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      },
      {
        "id": "D",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-4",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #2",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #2?",
    "options": [
      {
        "id": "A",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "B",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      },
      {
        "id": "C",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      },
      {
        "id": "D",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-5",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #3",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #3?",
    "options": [
      {
        "id": "A",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      },
      {
        "id": "B",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "C",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      },
      {
        "id": "D",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-6",
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #4",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #4?",
    "options": [
      {
        "id": "A",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      },
      {
        "id": "B",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      },
      {
        "id": "C",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "D",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-7",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #5",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #5?",
    "options": [
      {
        "id": "A",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      },
      {
        "id": "B",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "C",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      },
      {
        "id": "D",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-8",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #6",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #6?",
    "options": [
      {
        "id": "A",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "B",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      },
      {
        "id": "C",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      },
      {
        "id": "D",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-9",
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #7",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #7?",
    "options": [
      {
        "id": "A",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "B",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      },
      {
        "id": "C",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      },
      {
        "id": "D",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-10",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #8",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #8?",
    "options": [
      {
        "id": "A",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      },
      {
        "id": "B",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      },
      {
        "id": "C",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "D",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-11",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #9",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #9?",
    "options": [
      {
        "id": "A",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "B",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      },
      {
        "id": "C",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      },
      {
        "id": "D",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-12",
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #10",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #10?",
    "options": [
      {
        "id": "A",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      },
      {
        "id": "B",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "C",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      },
      {
        "id": "D",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-13",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #11",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #11?",
    "options": [
      {
        "id": "A",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "B",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      },
      {
        "id": "C",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      },
      {
        "id": "D",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-14",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #12",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #12?",
    "options": [
      {
        "id": "A",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      },
      {
        "id": "B",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "C",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      },
      {
        "id": "D",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-15",
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #13",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #13?",
    "options": [
      {
        "id": "A",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "B",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      },
      {
        "id": "C",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      },
      {
        "id": "D",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-16",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #14",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #14?",
    "options": [
      {
        "id": "A",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "B",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      },
      {
        "id": "C",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      },
      {
        "id": "D",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-17",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #15",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #15?",
    "options": [
      {
        "id": "A",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      },
      {
        "id": "B",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      },
      {
        "id": "C",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "D",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-18",
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #16",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #16?",
    "options": [
      {
        "id": "A",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      },
      {
        "id": "B",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      },
      {
        "id": "C",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "D",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-19",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #17",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #17?",
    "options": [
      {
        "id": "A",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      },
      {
        "id": "B",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "C",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      },
      {
        "id": "D",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-20",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #18",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #18?",
    "options": [
      {
        "id": "A",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      },
      {
        "id": "B",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      },
      {
        "id": "C",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      },
      {
        "id": "D",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-21",
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #19",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #19?",
    "options": [
      {
        "id": "A",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      },
      {
        "id": "B",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      },
      {
        "id": "C",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      },
      {
        "id": "D",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-22",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #20",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #20?",
    "options": [
      {
        "id": "A",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "B",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      },
      {
        "id": "C",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      },
      {
        "id": "D",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-23",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #21",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #21?",
    "options": [
      {
        "id": "A",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      },
      {
        "id": "B",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      },
      {
        "id": "C",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "D",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-24",
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #22",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #22?",
    "options": [
      {
        "id": "A",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      },
      {
        "id": "B",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      },
      {
        "id": "C",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "D",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  },
  {
    "id": "aws-scs-25",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d1",
    "domainName": "Threat Detection and Incident Response",
    "title": "Threat Detection Scenario #23",
    "scenario": "A security operations center (SOC) is configuring threat detection, incident triage, and automated containment across AWS environments.",
    "question": "Which threat detection architecture best satisfies objective #23?",
    "options": [
      {
        "id": "A",
        "text": "Aggregating security findings in AWS Security Hub, analyzing root cause graphs in Amazon Detective, and automating containment via EventBridge"
      },
      {
        "id": "B",
        "text": "Relying on end-user email reports as the sole source of threat intelligence"
      },
      {
        "id": "C",
        "text": "Disabling Amazon GuardDuty to save on VPC Flow Log and DNS log analysis fees"
      },
      {
        "id": "D",
        "text": "Granting public SSH ingress to all instances to enable rapid external forensic inspection"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Threat detection and incident response in AWS combines GuardDuty intelligent threat monitoring, Security Hub central posture aggregation, Detective graph forensics, and EventBridge auto-remediation.",
    "referenceUrl": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    "tags": [
      "Security Hub",
      "GuardDuty",
      "Detective",
      "Incident Response"
    ]
  }
];

export default AWS_SCS_QUESTIONS_1;
