export const AWS_DOP_FLASHCARDS_9 = [
  {
    "id": "aws-dop-fc-201",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d5",
    "front": "Incident Response Playbook #26",
    "hint": "Automated escalation, event routing, or failover procedure.",
    "back": "<strong>Incident Response Playbook #26</strong> leverages AWS Systems Manager Incident Manager and automated runbooks to reduce Mean Time to Recovery (MTTR) during production incidents.",
    "tags": [
      "Incident Response",
      "EventBridge",
      "Systems Manager"
    ]
  },
  {
    "id": "aws-dop-fc-202",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d5",
    "front": "Incident Response Playbook #27",
    "hint": "Automated escalation, event routing, or failover procedure.",
    "back": "<strong>Incident Response Playbook #27</strong> leverages AWS Systems Manager Incident Manager and automated runbooks to reduce Mean Time to Recovery (MTTR) during production incidents.",
    "tags": [
      "Incident Response",
      "EventBridge",
      "Systems Manager"
    ]
  },
  {
    "id": "aws-dop-fc-203",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d5",
    "front": "Incident Response Playbook #28",
    "hint": "Automated escalation, event routing, or failover procedure.",
    "back": "<strong>Incident Response Playbook #28</strong> leverages AWS Systems Manager Incident Manager and automated runbooks to reduce Mean Time to Recovery (MTTR) during production incidents.",
    "tags": [
      "Incident Response",
      "EventBridge",
      "Systems Manager"
    ]
  },
  {
    "id": "aws-dop-fc-204",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d5",
    "front": "Incident Response Playbook #29",
    "hint": "Automated escalation, event routing, or failover procedure.",
    "back": "<strong>Incident Response Playbook #29</strong> leverages AWS Systems Manager Incident Manager and automated runbooks to reduce Mean Time to Recovery (MTTR) during production incidents.",
    "tags": [
      "Incident Response",
      "EventBridge",
      "Systems Manager"
    ]
  },
  {
    "id": "aws-dop-fc-205",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d5",
    "front": "Incident Response Playbook #30",
    "hint": "Automated escalation, event routing, or failover procedure.",
    "back": "<strong>Incident Response Playbook #30</strong> leverages AWS Systems Manager Incident Manager and automated runbooks to reduce Mean Time to Recovery (MTTR) during production incidents.",
    "tags": [
      "Incident Response",
      "EventBridge",
      "Systems Manager"
    ]
  },
  {
    "id": "aws-dop-fc-206",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d5",
    "front": "Incident Response Playbook #31",
    "hint": "Automated escalation, event routing, or failover procedure.",
    "back": "<strong>Incident Response Playbook #31</strong> leverages AWS Systems Manager Incident Manager and automated runbooks to reduce Mean Time to Recovery (MTTR) during production incidents.",
    "tags": [
      "Incident Response",
      "EventBridge",
      "Systems Manager"
    ]
  },
  {
    "id": "aws-dop-fc-207",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d5",
    "front": "Incident Response Playbook #32",
    "hint": "Automated escalation, event routing, or failover procedure.",
    "back": "<strong>Incident Response Playbook #32</strong> leverages AWS Systems Manager Incident Manager and automated runbooks to reduce Mean Time to Recovery (MTTR) during production incidents.",
    "tags": [
      "Incident Response",
      "EventBridge",
      "Systems Manager"
    ]
  },
  {
    "id": "aws-dop-fc-208",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d5",
    "front": "Incident Response Playbook #33",
    "hint": "Automated escalation, event routing, or failover procedure.",
    "back": "<strong>Incident Response Playbook #33</strong> leverages AWS Systems Manager Incident Manager and automated runbooks to reduce Mean Time to Recovery (MTTR) during production incidents.",
    "tags": [
      "Incident Response",
      "EventBridge",
      "Systems Manager"
    ]
  },
  {
    "id": "aws-dop-fc-209",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d6",
    "front": "AWS KMS Key Policy vs. IAM Policy",
    "hint": "Root delegation statements vs. identity permission attachments.",
    "back": "An IAM policy alone cannot grant access to an <strong>AWS KMS Customer Managed Key (CMK)</strong> unless the KMS key policy explicitly includes a statement delegating access to the account root (<code>arn:aws:iam::account-id:root</code>) or names the specific IAM principal directly in the key policy.",
    "tags": [
      "KMS",
      "Key Policies",
      "IAM",
      "Security"
    ]
  },
  {
    "id": "aws-dop-fc-210",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d6",
    "front": "AWS Secrets Manager Automated Rotation for RDS",
    "hint": "Built-in Lambda rotation functions inside database VPCs.",
    "back": "<strong>AWS Secrets Manager</strong> provides out-of-the-box automated password rotation for Amazon RDS. It provisions a managed Lambda function inside the database VPC that securely changes the master or user password in RDS and updates the secret in Secrets Manager without downtime.",
    "tags": [
      "Secrets Manager",
      "RDS",
      "Rotation",
      "Security"
    ]
  },
  {
    "id": "aws-dop-fc-211",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d6",
    "front": "AWS Config: Managed Rules vs. Custom Rules",
    "hint": "Out-of-the-box compliance checks vs. bespoke Lambda/Guard evaluation.",
    "back": "<strong>AWS Config Managed Rules</strong> are pre-built evaluations provided by AWS (e.g. verifying S3 buckets are encrypted, EBS volumes have encryption). <strong>Custom Rules</strong> use custom AWS Lambda functions or AWS CloudFormation Guard to evaluate specialized enterprise compliance policies.",
    "tags": [
      "AWS Config",
      "Compliance",
      "Governance"
    ]
  },
  {
    "id": "aws-dop-fc-212",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d6",
    "front": "Security & Compliance Safeguard #1",
    "hint": "Least privilege IAM boundary, vulnerability scan, or encryption control.",
    "back": "<strong>Security & Compliance Safeguard #1</strong> enforces least-privilege IAM permissions boundaries, automated vulnerability scanning with Amazon Inspector, and continuous posture management with AWS Security Hub.",
    "tags": [
      "Security",
      "Compliance",
      "IAM"
    ]
  },
  {
    "id": "aws-dop-fc-213",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d6",
    "front": "Security & Compliance Safeguard #2",
    "hint": "Least privilege IAM boundary, vulnerability scan, or encryption control.",
    "back": "<strong>Security & Compliance Safeguard #2</strong> enforces least-privilege IAM permissions boundaries, automated vulnerability scanning with Amazon Inspector, and continuous posture management with AWS Security Hub.",
    "tags": [
      "Security",
      "Compliance",
      "IAM"
    ]
  },
  {
    "id": "aws-dop-fc-214",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d6",
    "front": "Security & Compliance Safeguard #3",
    "hint": "Least privilege IAM boundary, vulnerability scan, or encryption control.",
    "back": "<strong>Security & Compliance Safeguard #3</strong> enforces least-privilege IAM permissions boundaries, automated vulnerability scanning with Amazon Inspector, and continuous posture management with AWS Security Hub.",
    "tags": [
      "Security",
      "Compliance",
      "IAM"
    ]
  },
  {
    "id": "aws-dop-fc-215",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d6",
    "front": "Security & Compliance Safeguard #4",
    "hint": "Least privilege IAM boundary, vulnerability scan, or encryption control.",
    "back": "<strong>Security & Compliance Safeguard #4</strong> enforces least-privilege IAM permissions boundaries, automated vulnerability scanning with Amazon Inspector, and continuous posture management with AWS Security Hub.",
    "tags": [
      "Security",
      "Compliance",
      "IAM"
    ]
  },
  {
    "id": "aws-dop-fc-216",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d6",
    "front": "Security & Compliance Safeguard #5",
    "hint": "Least privilege IAM boundary, vulnerability scan, or encryption control.",
    "back": "<strong>Security & Compliance Safeguard #5</strong> enforces least-privilege IAM permissions boundaries, automated vulnerability scanning with Amazon Inspector, and continuous posture management with AWS Security Hub.",
    "tags": [
      "Security",
      "Compliance",
      "IAM"
    ]
  },
  {
    "id": "aws-dop-fc-217",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d6",
    "front": "Security & Compliance Safeguard #6",
    "hint": "Least privilege IAM boundary, vulnerability scan, or encryption control.",
    "back": "<strong>Security & Compliance Safeguard #6</strong> enforces least-privilege IAM permissions boundaries, automated vulnerability scanning with Amazon Inspector, and continuous posture management with AWS Security Hub.",
    "tags": [
      "Security",
      "Compliance",
      "IAM"
    ]
  },
  {
    "id": "aws-dop-fc-218",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d6",
    "front": "Security & Compliance Safeguard #7",
    "hint": "Least privilege IAM boundary, vulnerability scan, or encryption control.",
    "back": "<strong>Security & Compliance Safeguard #7</strong> enforces least-privilege IAM permissions boundaries, automated vulnerability scanning with Amazon Inspector, and continuous posture management with AWS Security Hub.",
    "tags": [
      "Security",
      "Compliance",
      "IAM"
    ]
  },
  {
    "id": "aws-dop-fc-219",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d6",
    "front": "Security & Compliance Safeguard #8",
    "hint": "Least privilege IAM boundary, vulnerability scan, or encryption control.",
    "back": "<strong>Security & Compliance Safeguard #8</strong> enforces least-privilege IAM permissions boundaries, automated vulnerability scanning with Amazon Inspector, and continuous posture management with AWS Security Hub.",
    "tags": [
      "Security",
      "Compliance",
      "IAM"
    ]
  },
  {
    "id": "aws-dop-fc-220",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d6",
    "front": "Security & Compliance Safeguard #9",
    "hint": "Least privilege IAM boundary, vulnerability scan, or encryption control.",
    "back": "<strong>Security & Compliance Safeguard #9</strong> enforces least-privilege IAM permissions boundaries, automated vulnerability scanning with Amazon Inspector, and continuous posture management with AWS Security Hub.",
    "tags": [
      "Security",
      "Compliance",
      "IAM"
    ]
  },
  {
    "id": "aws-dop-fc-221",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d6",
    "front": "Security & Compliance Safeguard #10",
    "hint": "Least privilege IAM boundary, vulnerability scan, or encryption control.",
    "back": "<strong>Security & Compliance Safeguard #10</strong> enforces least-privilege IAM permissions boundaries, automated vulnerability scanning with Amazon Inspector, and continuous posture management with AWS Security Hub.",
    "tags": [
      "Security",
      "Compliance",
      "IAM"
    ]
  },
  {
    "id": "aws-dop-fc-222",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d6",
    "front": "Security & Compliance Safeguard #11",
    "hint": "Least privilege IAM boundary, vulnerability scan, or encryption control.",
    "back": "<strong>Security & Compliance Safeguard #11</strong> enforces least-privilege IAM permissions boundaries, automated vulnerability scanning with Amazon Inspector, and continuous posture management with AWS Security Hub.",
    "tags": [
      "Security",
      "Compliance",
      "IAM"
    ]
  },
  {
    "id": "aws-dop-fc-223",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d6",
    "front": "Security & Compliance Safeguard #12",
    "hint": "Least privilege IAM boundary, vulnerability scan, or encryption control.",
    "back": "<strong>Security & Compliance Safeguard #12</strong> enforces least-privilege IAM permissions boundaries, automated vulnerability scanning with Amazon Inspector, and continuous posture management with AWS Security Hub.",
    "tags": [
      "Security",
      "Compliance",
      "IAM"
    ]
  },
  {
    "id": "aws-dop-fc-224",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d6",
    "front": "Security & Compliance Safeguard #13",
    "hint": "Least privilege IAM boundary, vulnerability scan, or encryption control.",
    "back": "<strong>Security & Compliance Safeguard #13</strong> enforces least-privilege IAM permissions boundaries, automated vulnerability scanning with Amazon Inspector, and continuous posture management with AWS Security Hub.",
    "tags": [
      "Security",
      "Compliance",
      "IAM"
    ]
  },
  {
    "id": "aws-dop-fc-225",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d6",
    "front": "Security & Compliance Safeguard #14",
    "hint": "Least privilege IAM boundary, vulnerability scan, or encryption control.",
    "back": "<strong>Security & Compliance Safeguard #14</strong> enforces least-privilege IAM permissions boundaries, automated vulnerability scanning with Amazon Inspector, and continuous posture management with AWS Security Hub.",
    "tags": [
      "Security",
      "Compliance",
      "IAM"
    ]
  }
];

export default AWS_DOP_FLASHCARDS_9;
