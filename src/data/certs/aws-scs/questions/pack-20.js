export const AWS_SCS_QUESTIONS_20 = [
  {
    id: "aws-scs-476",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS CloudFormation StackSets with Service-Managed Permissions: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates CloudFormation StackSets to automatically deploy standard security monitoring agents, IAM incident response roles, and KMS keys into any newly created AWS account.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Deploying security baselines, IAM roles, and logging resources across AWS Organizations automatically is under consideration.",
    options: [
      { id: 'A', text: "Instruct security engineers to log into each newly created account and run manual CloudFormation templates." },
      { id: 'B', text: "Write custom Python scripts that run continuously on a developer workstation trying to detect new accounts." },
      { id: 'C', text: "Deploy AWS CloudFormation StackSets with service-managed permissions and automatic deployment enabled across target Organizational Units." },
      { id: 'D', text: "Avoid deploying security baselines to newly created accounts until after they launch production applications." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy AWS CloudFormation StackSets with service-managed permissions and automatic deployment enabled across target Organizational Units. CloudFormation StackSets deploy stacks across multiple accounts and regions. Using `service-managed permissions` integrated with AWS Organizations, StackSets automatically deploys security templates to new accounts as soon as they join an Organizational Unit (OU), with automatic rollback on failure.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html",
    tags: ["CloudFormation StackSets", "CloudFormation StackSets", "Enterprise Governance"]
  },
  {
    id: "aws-scs-477",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS CloudFormation StackSets with Service-Managed Permissions: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates CloudFormation StackSets to automatically deploy standard security monitoring agents, IAM incident response roles, and KMS keys into any newly created AWS account.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Deploying security baselines, IAM roles, and logging resources across AWS Organizations automatically is under consideration.",
    options: [
      { id: 'A', text: "Avoid deploying security baselines to newly created accounts until after they launch production applications." },
      { id: 'B', text: "Write custom Python scripts that run continuously on a developer workstation trying to detect new accounts." },
      { id: 'C', text: "Instruct security engineers to log into each newly created account and run manual CloudFormation templates." },
      { id: 'D', text: "Deploy AWS CloudFormation StackSets with service-managed permissions and automatic deployment enabled across target Organizational Units." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy AWS CloudFormation StackSets with service-managed permissions and automatic deployment enabled across target Organizational Units. CloudFormation StackSets deploy stacks across multiple accounts and regions. Using `service-managed permissions` integrated with AWS Organizations, StackSets automatically deploys security templates to new accounts as soon as they join an Organizational Unit (OU), with automatic rollback on failure.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html",
    tags: ["CloudFormation StackSets", "CloudFormation StackSets", "Incident Containment"]
  },
  {
    id: "aws-scs-478",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS CloudFormation StackSets with Service-Managed Permissions: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates CloudFormation StackSets to automatically deploy standard security monitoring agents, IAM incident response roles, and KMS keys into any newly created AWS account.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Deploying security baselines, IAM roles, and logging resources across AWS Organizations automatically is under consideration.",
    options: [
      { id: 'A', text: "Deploy AWS CloudFormation StackSets with service-managed permissions and automatic deployment enabled across target Organizational Units." },
      { id: 'B', text: "Write custom Python scripts that run continuously on a developer workstation trying to detect new accounts." },
      { id: 'C', text: "Avoid deploying security baselines to newly created accounts until after they launch production applications." },
      { id: 'D', text: "Instruct security engineers to log into each newly created account and run manual CloudFormation templates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS CloudFormation StackSets with service-managed permissions and automatic deployment enabled across target Organizational Units. CloudFormation StackSets deploy stacks across multiple accounts and regions. Using `service-managed permissions` integrated with AWS Organizations, StackSets automatically deploys security templates to new accounts as soon as they join an Organizational Unit (OU), with automatic rollback on failure.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html",
    tags: ["CloudFormation StackSets", "CloudFormation StackSets", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-479",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS CloudFormation StackSets with Service-Managed Permissions: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates CloudFormation StackSets to automatically deploy standard security monitoring agents, IAM incident response roles, and KMS keys into any newly created AWS account.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Deploying security baselines, IAM roles, and logging resources across AWS Organizations automatically is under consideration.",
    options: [
      { id: 'A', text: "Avoid deploying security baselines to newly created accounts until after they launch production applications." },
      { id: 'B', text: "Write custom Python scripts that run continuously on a developer workstation trying to detect new accounts." },
      { id: 'C', text: "Deploy AWS CloudFormation StackSets with service-managed permissions and automatic deployment enabled across target Organizational Units." },
      { id: 'D', text: "Instruct security engineers to log into each newly created account and run manual CloudFormation templates." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy AWS CloudFormation StackSets with service-managed permissions and automatic deployment enabled across target Organizational Units. CloudFormation StackSets deploy stacks across multiple accounts and regions. Using `service-managed permissions` integrated with AWS Organizations, StackSets automatically deploys security templates to new accounts as soon as they join an Organizational Unit (OU), with automatic rollback on failure.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html",
    tags: ["CloudFormation StackSets", "CloudFormation StackSets", "Data Protection"]
  },
  {
    id: "aws-scs-480",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS CloudFormation StackSets with Service-Managed Permissions: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates CloudFormation StackSets to automatically deploy standard security monitoring agents, IAM incident response roles, and KMS keys into any newly created AWS account.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Deploying security baselines, IAM roles, and logging resources across AWS Organizations automatically is under consideration.",
    options: [
      { id: 'A', text: "Avoid deploying security baselines to newly created accounts until after they launch production applications." },
      { id: 'B', text: "Instruct security engineers to log into each newly created account and run manual CloudFormation templates." },
      { id: 'C', text: "Deploy AWS CloudFormation StackSets with service-managed permissions and automatic deployment enabled across target Organizational Units." },
      { id: 'D', text: "Write custom Python scripts that run continuously on a developer workstation trying to detect new accounts." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy AWS CloudFormation StackSets with service-managed permissions and automatic deployment enabled across target Organizational Units. CloudFormation StackSets deploy stacks across multiple accounts and regions. Using `service-managed permissions` integrated with AWS Organizations, StackSets automatically deploys security templates to new accounts as soon as they join an Organizational Unit (OU), with automatic rollback on failure.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html",
    tags: ["CloudFormation StackSets", "CloudFormation StackSets", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-481",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Audit Manager Continuous Compliance Evidence Collection: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates AWS Audit Manager to streamline annual SOC 2 and ISO 27001 audit preparation without requiring engineering teams to manually gather screenshots.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Automating compliance evidence collection against frameworks like SOC 2, PCI-DSS, and HIPAA is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS Audit Manager with prebuilt compliance frameworks to continuously collect and map evidence from CloudTrail, Config, and Security Hub." },
      { id: 'B', text: "Refuse to participate in regulatory audits." },
      { id: 'C', text: "Falsify audit documentation to pass regulatory assessments." },
      { id: 'D', text: "Spend three months every year taking manual screenshots of AWS management console settings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Audit Manager with prebuilt compliance frameworks to continuously collect and map evidence from CloudTrail, Config, and Security Hub. AWS Audit Manager continuously collects evidence to assess whether your cloud usage satisfies compliance regulations (SOC 2, PCI-DSS, HIPAA, GDPR). It automatically gathers configuration changes from Config, API activity from CloudTrail, and security checks from Security Hub, generating auditor-ready assessment reports.",
    referenceUrl: "https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html",
    tags: ["AWS Audit Manager", "Audit Manager", "Enterprise Governance"]
  },
  {
    id: "aws-scs-482",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Audit Manager Continuous Compliance Evidence Collection: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates AWS Audit Manager to streamline annual SOC 2 and ISO 27001 audit preparation without requiring engineering teams to manually gather screenshots.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Automating compliance evidence collection against frameworks like SOC 2, PCI-DSS, and HIPAA is under consideration.",
    options: [
      { id: 'A', text: "Falsify audit documentation to pass regulatory assessments." },
      { id: 'B', text: "Configure AWS Audit Manager with prebuilt compliance frameworks to continuously collect and map evidence from CloudTrail, Config, and Security Hub." },
      { id: 'C', text: "Refuse to participate in regulatory audits." },
      { id: 'D', text: "Spend three months every year taking manual screenshots of AWS management console settings." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure AWS Audit Manager with prebuilt compliance frameworks to continuously collect and map evidence from CloudTrail, Config, and Security Hub. AWS Audit Manager continuously collects evidence to assess whether your cloud usage satisfies compliance regulations (SOC 2, PCI-DSS, HIPAA, GDPR). It automatically gathers configuration changes from Config, API activity from CloudTrail, and security checks from Security Hub, generating auditor-ready assessment reports.",
    referenceUrl: "https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html",
    tags: ["AWS Audit Manager", "Audit Manager", "Incident Containment"]
  },
  {
    id: "aws-scs-483",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Audit Manager Continuous Compliance Evidence Collection: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates AWS Audit Manager to streamline annual SOC 2 and ISO 27001 audit preparation without requiring engineering teams to manually gather screenshots.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Automating compliance evidence collection against frameworks like SOC 2, PCI-DSS, and HIPAA is under consideration.",
    options: [
      { id: 'A', text: "Refuse to participate in regulatory audits." },
      { id: 'B', text: "Configure AWS Audit Manager with prebuilt compliance frameworks to continuously collect and map evidence from CloudTrail, Config, and Security Hub." },
      { id: 'C', text: "Spend three months every year taking manual screenshots of AWS management console settings." },
      { id: 'D', text: "Falsify audit documentation to pass regulatory assessments." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure AWS Audit Manager with prebuilt compliance frameworks to continuously collect and map evidence from CloudTrail, Config, and Security Hub. AWS Audit Manager continuously collects evidence to assess whether your cloud usage satisfies compliance regulations (SOC 2, PCI-DSS, HIPAA, GDPR). It automatically gathers configuration changes from Config, API activity from CloudTrail, and security checks from Security Hub, generating auditor-ready assessment reports.",
    referenceUrl: "https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html",
    tags: ["AWS Audit Manager", "Audit Manager", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-484",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Audit Manager Continuous Compliance Evidence Collection: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates AWS Audit Manager to streamline annual SOC 2 and ISO 27001 audit preparation without requiring engineering teams to manually gather screenshots.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Automating compliance evidence collection against frameworks like SOC 2, PCI-DSS, and HIPAA is under consideration.",
    options: [
      { id: 'A', text: "Spend three months every year taking manual screenshots of AWS management console settings." },
      { id: 'B', text: "Refuse to participate in regulatory audits." },
      { id: 'C', text: "Configure AWS Audit Manager with prebuilt compliance frameworks to continuously collect and map evidence from CloudTrail, Config, and Security Hub." },
      { id: 'D', text: "Falsify audit documentation to pass regulatory assessments." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure AWS Audit Manager with prebuilt compliance frameworks to continuously collect and map evidence from CloudTrail, Config, and Security Hub. AWS Audit Manager continuously collects evidence to assess whether your cloud usage satisfies compliance regulations (SOC 2, PCI-DSS, HIPAA, GDPR). It automatically gathers configuration changes from Config, API activity from CloudTrail, and security checks from Security Hub, generating auditor-ready assessment reports.",
    referenceUrl: "https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html",
    tags: ["AWS Audit Manager", "Audit Manager", "Data Protection"]
  },
  {
    id: "aws-scs-485",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Audit Manager Continuous Compliance Evidence Collection: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates AWS Audit Manager to streamline annual SOC 2 and ISO 27001 audit preparation without requiring engineering teams to manually gather screenshots.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Automating compliance evidence collection against frameworks like SOC 2, PCI-DSS, and HIPAA is under consideration.",
    options: [
      { id: 'A', text: "Refuse to participate in regulatory audits." },
      { id: 'B', text: "Falsify audit documentation to pass regulatory assessments." },
      { id: 'C', text: "Configure AWS Audit Manager with prebuilt compliance frameworks to continuously collect and map evidence from CloudTrail, Config, and Security Hub." },
      { id: 'D', text: "Spend three months every year taking manual screenshots of AWS management console settings." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure AWS Audit Manager with prebuilt compliance frameworks to continuously collect and map evidence from CloudTrail, Config, and Security Hub. AWS Audit Manager continuously collects evidence to assess whether your cloud usage satisfies compliance regulations (SOC 2, PCI-DSS, HIPAA, GDPR). It automatically gathers configuration changes from Config, API activity from CloudTrail, and security checks from Security Hub, generating auditor-ready assessment reports.",
    referenceUrl: "https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html",
    tags: ["AWS Audit Manager", "Audit Manager", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-486",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Artifact for Accessing Regulatory Compliance Reports: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates AWS Artifact to provide an external enterprise financial auditor with official AWS SOC 2 Type II reports and execute a HIPAA Business Associate Addendum (BAA).",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? On-demand access to AWS compliance reports, SOC 1/2/3, ISO certifications, and BAA agreements is under consideration.",
    options: [
      { id: 'A', text: "Write custom compliance reports claiming AWS infrastructure is certified without documentation." },
      { id: 'B', text: "Instruct auditors to inspect AWS physical data centers in person." },
      { id: 'C', text: "Open a support ticket asking AWS customer support to mail printed paper copies of SOC reports." },
      { id: 'D', text: "Use AWS Artifact to download official AWS compliance reports and accept the online HIPAA Business Associate Addendum (BAA)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use AWS Artifact to download official AWS compliance reports and accept the online HIPAA Business Associate Addendum (BAA). AWS Artifact is the central portal for on-demand access to AWS compliance documentation (SOC 1/2/3, ISO 27001, PCI-DSS reports) and AWS agreements (such as the HIPAA Business Associate Addendum). Reports downloaded from Artifact provide official evidence of AWS underlying security controls.",
    referenceUrl: "https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html",
    tags: ["AWS Artifact", "AWS Artifact", "Enterprise Governance"]
  },
  {
    id: "aws-scs-487",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Artifact for Accessing Regulatory Compliance Reports: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates AWS Artifact to provide an external enterprise financial auditor with official AWS SOC 2 Type II reports and execute a HIPAA Business Associate Addendum (BAA).",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? On-demand access to AWS compliance reports, SOC 1/2/3, ISO certifications, and BAA agreements is under consideration.",
    options: [
      { id: 'A', text: "Instruct auditors to inspect AWS physical data centers in person." },
      { id: 'B', text: "Open a support ticket asking AWS customer support to mail printed paper copies of SOC reports." },
      { id: 'C', text: "Write custom compliance reports claiming AWS infrastructure is certified without documentation." },
      { id: 'D', text: "Use AWS Artifact to download official AWS compliance reports and accept the online HIPAA Business Associate Addendum (BAA)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use AWS Artifact to download official AWS compliance reports and accept the online HIPAA Business Associate Addendum (BAA). AWS Artifact is the central portal for on-demand access to AWS compliance documentation (SOC 1/2/3, ISO 27001, PCI-DSS reports) and AWS agreements (such as the HIPAA Business Associate Addendum). Reports downloaded from Artifact provide official evidence of AWS underlying security controls.",
    referenceUrl: "https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html",
    tags: ["AWS Artifact", "AWS Artifact", "Incident Containment"]
  },
  {
    id: "aws-scs-488",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Artifact for Accessing Regulatory Compliance Reports: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates AWS Artifact to provide an external enterprise financial auditor with official AWS SOC 2 Type II reports and execute a HIPAA Business Associate Addendum (BAA).",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? On-demand access to AWS compliance reports, SOC 1/2/3, ISO certifications, and BAA agreements is under consideration.",
    options: [
      { id: 'A', text: "Instruct auditors to inspect AWS physical data centers in person." },
      { id: 'B', text: "Open a support ticket asking AWS customer support to mail printed paper copies of SOC reports." },
      { id: 'C', text: "Write custom compliance reports claiming AWS infrastructure is certified without documentation." },
      { id: 'D', text: "Use AWS Artifact to download official AWS compliance reports and accept the online HIPAA Business Associate Addendum (BAA)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use AWS Artifact to download official AWS compliance reports and accept the online HIPAA Business Associate Addendum (BAA). AWS Artifact is the central portal for on-demand access to AWS compliance documentation (SOC 1/2/3, ISO 27001, PCI-DSS reports) and AWS agreements (such as the HIPAA Business Associate Addendum). Reports downloaded from Artifact provide official evidence of AWS underlying security controls.",
    referenceUrl: "https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html",
    tags: ["AWS Artifact", "AWS Artifact", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-489",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Artifact for Accessing Regulatory Compliance Reports: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates AWS Artifact to provide an external enterprise financial auditor with official AWS SOC 2 Type II reports and execute a HIPAA Business Associate Addendum (BAA).",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? On-demand access to AWS compliance reports, SOC 1/2/3, ISO certifications, and BAA agreements is under consideration.",
    options: [
      { id: 'A', text: "Use AWS Artifact to download official AWS compliance reports and accept the online HIPAA Business Associate Addendum (BAA)." },
      { id: 'B', text: "Open a support ticket asking AWS customer support to mail printed paper copies of SOC reports." },
      { id: 'C', text: "Instruct auditors to inspect AWS physical data centers in person." },
      { id: 'D', text: "Write custom compliance reports claiming AWS infrastructure is certified without documentation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use AWS Artifact to download official AWS compliance reports and accept the online HIPAA Business Associate Addendum (BAA). AWS Artifact is the central portal for on-demand access to AWS compliance documentation (SOC 1/2/3, ISO 27001, PCI-DSS reports) and AWS agreements (such as the HIPAA Business Associate Addendum). Reports downloaded from Artifact provide official evidence of AWS underlying security controls.",
    referenceUrl: "https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html",
    tags: ["AWS Artifact", "AWS Artifact", "Data Protection"]
  },
  {
    id: "aws-scs-490",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Artifact for Accessing Regulatory Compliance Reports: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates AWS Artifact to provide an external enterprise financial auditor with official AWS SOC 2 Type II reports and execute a HIPAA Business Associate Addendum (BAA).",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? On-demand access to AWS compliance reports, SOC 1/2/3, ISO certifications, and BAA agreements is under consideration.",
    options: [
      { id: 'A', text: "Open a support ticket asking AWS customer support to mail printed paper copies of SOC reports." },
      { id: 'B', text: "Write custom compliance reports claiming AWS infrastructure is certified without documentation." },
      { id: 'C', text: "Instruct auditors to inspect AWS physical data centers in person." },
      { id: 'D', text: "Use AWS Artifact to download official AWS compliance reports and accept the online HIPAA Business Associate Addendum (BAA)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use AWS Artifact to download official AWS compliance reports and accept the online HIPAA Business Associate Addendum (BAA). AWS Artifact is the central portal for on-demand access to AWS compliance documentation (SOC 1/2/3, ISO 27001, PCI-DSS reports) and AWS agreements (such as the HIPAA Business Associate Addendum). Reports downloaded from Artifact provide official evidence of AWS underlying security controls.",
    referenceUrl: "https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html",
    tags: ["AWS Artifact", "AWS Artifact", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-491",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Tag Policies in AWS Organizations for Security Governance: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates Tag Policies to ensure that all EC2 instances, S3 buckets, and RDS databases across the enterprise include mandatory `CostCenter` and `Environment` tags.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Enforcing standardized tagging taxonomy across accounts via AWS Organizations Tag Policies is under consideration.",
    options: [
      { id: 'A', text: "Delete all untagged resources immediately without warning." },
      { id: 'B', text: "Rely on developers to voluntarily follow tagging guidelines documented on an internal wiki." },
      { id: 'C', text: "Prohibit the use of resource tags across the AWS Organization." },
      { id: 'D', text: "Implement AWS Organizations Tag Policies, specifying allowed tag keys and values, and enforcing compliance during resource creation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement AWS Organizations Tag Policies, specifying allowed tag keys and values, and enforcing compliance during resource creation. Tag Policies in AWS Organizations standardize tags across resources and accounts. Platform teams define allowed tag keys and case-sensitive values (e.g., `Environment: [prod, staging, dev]`), preventing non-compliant tagging and enabling reliable ABAC and cost allocation.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html",
    tags: ["Tag Policies", "Tag Policies", "Enterprise Governance"]
  },
  {
    id: "aws-scs-492",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Tag Policies in AWS Organizations for Security Governance: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates Tag Policies to ensure that all EC2 instances, S3 buckets, and RDS databases across the enterprise include mandatory `CostCenter` and `Environment` tags.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Enforcing standardized tagging taxonomy across accounts via AWS Organizations Tag Policies is under consideration.",
    options: [
      { id: 'A', text: "Rely on developers to voluntarily follow tagging guidelines documented on an internal wiki." },
      { id: 'B', text: "Implement AWS Organizations Tag Policies, specifying allowed tag keys and values, and enforcing compliance during resource creation." },
      { id: 'C', text: "Prohibit the use of resource tags across the AWS Organization." },
      { id: 'D', text: "Delete all untagged resources immediately without warning." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement AWS Organizations Tag Policies, specifying allowed tag keys and values, and enforcing compliance during resource creation. Tag Policies in AWS Organizations standardize tags across resources and accounts. Platform teams define allowed tag keys and case-sensitive values (e.g., `Environment: [prod, staging, dev]`), preventing non-compliant tagging and enabling reliable ABAC and cost allocation.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html",
    tags: ["Tag Policies", "Tag Policies", "Incident Containment"]
  },
  {
    id: "aws-scs-493",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Tag Policies in AWS Organizations for Security Governance: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates Tag Policies to ensure that all EC2 instances, S3 buckets, and RDS databases across the enterprise include mandatory `CostCenter` and `Environment` tags.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Enforcing standardized tagging taxonomy across accounts via AWS Organizations Tag Policies is under consideration.",
    options: [
      { id: 'A', text: "Implement AWS Organizations Tag Policies, specifying allowed tag keys and values, and enforcing compliance during resource creation." },
      { id: 'B', text: "Prohibit the use of resource tags across the AWS Organization." },
      { id: 'C', text: "Delete all untagged resources immediately without warning." },
      { id: 'D', text: "Rely on developers to voluntarily follow tagging guidelines documented on an internal wiki." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement AWS Organizations Tag Policies, specifying allowed tag keys and values, and enforcing compliance during resource creation. Tag Policies in AWS Organizations standardize tags across resources and accounts. Platform teams define allowed tag keys and case-sensitive values (e.g., `Environment: [prod, staging, dev]`), preventing non-compliant tagging and enabling reliable ABAC and cost allocation.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html",
    tags: ["Tag Policies", "Tag Policies", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-494",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Tag Policies in AWS Organizations for Security Governance: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates Tag Policies to ensure that all EC2 instances, S3 buckets, and RDS databases across the enterprise include mandatory `CostCenter` and `Environment` tags.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Enforcing standardized tagging taxonomy across accounts via AWS Organizations Tag Policies is under consideration.",
    options: [
      { id: 'A', text: "Implement AWS Organizations Tag Policies, specifying allowed tag keys and values, and enforcing compliance during resource creation." },
      { id: 'B', text: "Delete all untagged resources immediately without warning." },
      { id: 'C', text: "Prohibit the use of resource tags across the AWS Organization." },
      { id: 'D', text: "Rely on developers to voluntarily follow tagging guidelines documented on an internal wiki." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement AWS Organizations Tag Policies, specifying allowed tag keys and values, and enforcing compliance during resource creation. Tag Policies in AWS Organizations standardize tags across resources and accounts. Platform teams define allowed tag keys and case-sensitive values (e.g., `Environment: [prod, staging, dev]`), preventing non-compliant tagging and enabling reliable ABAC and cost allocation.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html",
    tags: ["Tag Policies", "Tag Policies", "Data Protection"]
  },
  {
    id: "aws-scs-495",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Tag Policies in AWS Organizations for Security Governance: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates Tag Policies to ensure that all EC2 instances, S3 buckets, and RDS databases across the enterprise include mandatory `CostCenter` and `Environment` tags.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Enforcing standardized tagging taxonomy across accounts via AWS Organizations Tag Policies is under consideration.",
    options: [
      { id: 'A', text: "Rely on developers to voluntarily follow tagging guidelines documented on an internal wiki." },
      { id: 'B', text: "Prohibit the use of resource tags across the AWS Organization." },
      { id: 'C', text: "Delete all untagged resources immediately without warning." },
      { id: 'D', text: "Implement AWS Organizations Tag Policies, specifying allowed tag keys and values, and enforcing compliance during resource creation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement AWS Organizations Tag Policies, specifying allowed tag keys and values, and enforcing compliance during resource creation. Tag Policies in AWS Organizations standardize tags across resources and accounts. Platform teams define allowed tag keys and case-sensitive values (e.g., `Environment: [prod, staging, dev]`), preventing non-compliant tagging and enabling reliable ABAC and cost allocation.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html",
    tags: ["Tag Policies", "Tag Policies", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-496",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Delegated Administrator Accounts in AWS Organizations: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates Delegated Administrator to allow the enterprise security team to manage GuardDuty, Security Hub, and Macie organization-wide without accessing the Organizations management account.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Designating dedicated security tooling accounts for GuardDuty, Security Hub, and Macie is under consideration.",
    options: [
      { id: 'A', text: "Grant full root management account credentials to the entire security operations team." },
      { id: 'B', text: "Manage security services individually in each of the 200 member accounts with no central delegation." },
      { id: 'C', text: "Disable security tooling to eliminate multi-account administration requirements." },
      { id: 'D', text: "Designate a dedicated Security Tooling member account as the Delegated Administrator for GuardDuty, Security Hub, and Macie." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Designate a dedicated Security Tooling member account as the Delegated Administrator for GuardDuty, Security Hub, and Macie. AWS Organizations best practices dictate isolating the management account from day-to-day operations. AWS services (GuardDuty, Security Hub, Inspector, Macie, IAM Access Analyzer) support Delegated Administrator accounts, allowing dedicated security accounts to manage organization-wide findings without management account access.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-delegated-admin.html",
    tags: ["Delegated Administrator", "Delegated Administrator", "Enterprise Governance"]
  },
  {
    id: "aws-scs-497",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Delegated Administrator Accounts in AWS Organizations: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates Delegated Administrator to allow the enterprise security team to manage GuardDuty, Security Hub, and Macie organization-wide without accessing the Organizations management account.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Designating dedicated security tooling accounts for GuardDuty, Security Hub, and Macie is under consideration.",
    options: [
      { id: 'A', text: "Manage security services individually in each of the 200 member accounts with no central delegation." },
      { id: 'B', text: "Grant full root management account credentials to the entire security operations team." },
      { id: 'C', text: "Designate a dedicated Security Tooling member account as the Delegated Administrator for GuardDuty, Security Hub, and Macie." },
      { id: 'D', text: "Disable security tooling to eliminate multi-account administration requirements." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Designate a dedicated Security Tooling member account as the Delegated Administrator for GuardDuty, Security Hub, and Macie. AWS Organizations best practices dictate isolating the management account from day-to-day operations. AWS services (GuardDuty, Security Hub, Inspector, Macie, IAM Access Analyzer) support Delegated Administrator accounts, allowing dedicated security accounts to manage organization-wide findings without management account access.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-delegated-admin.html",
    tags: ["Delegated Administrator", "Delegated Administrator", "Incident Containment"]
  },
  {
    id: "aws-scs-498",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Delegated Administrator Accounts in AWS Organizations: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates Delegated Administrator to allow the enterprise security team to manage GuardDuty, Security Hub, and Macie organization-wide without accessing the Organizations management account.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Designating dedicated security tooling accounts for GuardDuty, Security Hub, and Macie is under consideration.",
    options: [
      { id: 'A', text: "Disable security tooling to eliminate multi-account administration requirements." },
      { id: 'B', text: "Grant full root management account credentials to the entire security operations team." },
      { id: 'C', text: "Manage security services individually in each of the 200 member accounts with no central delegation." },
      { id: 'D', text: "Designate a dedicated Security Tooling member account as the Delegated Administrator for GuardDuty, Security Hub, and Macie." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Designate a dedicated Security Tooling member account as the Delegated Administrator for GuardDuty, Security Hub, and Macie. AWS Organizations best practices dictate isolating the management account from day-to-day operations. AWS services (GuardDuty, Security Hub, Inspector, Macie, IAM Access Analyzer) support Delegated Administrator accounts, allowing dedicated security accounts to manage organization-wide findings without management account access.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-delegated-admin.html",
    tags: ["Delegated Administrator", "Delegated Administrator", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-499",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Delegated Administrator Accounts in AWS Organizations: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates Delegated Administrator to allow the enterprise security team to manage GuardDuty, Security Hub, and Macie organization-wide without accessing the Organizations management account.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Designating dedicated security tooling accounts for GuardDuty, Security Hub, and Macie is under consideration.",
    options: [
      { id: 'A', text: "Grant full root management account credentials to the entire security operations team." },
      { id: 'B', text: "Disable security tooling to eliminate multi-account administration requirements." },
      { id: 'C', text: "Designate a dedicated Security Tooling member account as the Delegated Administrator for GuardDuty, Security Hub, and Macie." },
      { id: 'D', text: "Manage security services individually in each of the 200 member accounts with no central delegation." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Designate a dedicated Security Tooling member account as the Delegated Administrator for GuardDuty, Security Hub, and Macie. AWS Organizations best practices dictate isolating the management account from day-to-day operations. AWS services (GuardDuty, Security Hub, Inspector, Macie, IAM Access Analyzer) support Delegated Administrator accounts, allowing dedicated security accounts to manage organization-wide findings without management account access.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-delegated-admin.html",
    tags: ["Delegated Administrator", "Delegated Administrator", "Data Protection"]
  },
  {
    id: "aws-scs-500",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Delegated Administrator Accounts in AWS Organizations: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates Delegated Administrator to allow the enterprise security team to manage GuardDuty, Security Hub, and Macie organization-wide without accessing the Organizations management account.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Designating dedicated security tooling accounts for GuardDuty, Security Hub, and Macie is under consideration.",
    options: [
      { id: 'A', text: "Grant full root management account credentials to the entire security operations team." },
      { id: 'B', text: "Designate a dedicated Security Tooling member account as the Delegated Administrator for GuardDuty, Security Hub, and Macie." },
      { id: 'C', text: "Manage security services individually in each of the 200 member accounts with no central delegation." },
      { id: 'D', text: "Disable security tooling to eliminate multi-account administration requirements." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Designate a dedicated Security Tooling member account as the Delegated Administrator for GuardDuty, Security Hub, and Macie. AWS Organizations best practices dictate isolating the management account from day-to-day operations. AWS services (GuardDuty, Security Hub, Inspector, Macie, IAM Access Analyzer) support Delegated Administrator accounts, allowing dedicated security accounts to manage organization-wide findings without management account access.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-delegated-admin.html",
    tags: ["Delegated Administrator", "Delegated Administrator", "Infrastructure Defense"]
  }
];

export default AWS_SCS_QUESTIONS_20;
