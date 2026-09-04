export const AWS_SCS_QUESTIONS_17 = [
  {
    id: "aws-scs-401",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account IAM Roles and External ID Protection: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates IAM External ID to allow a third-party SaaS security monitoring platform to assume an IAM role in your AWS account without risking confused deputy attacks.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Preventing the confused deputy vulnerability in multi-tenant third-party SaaS integrations is under consideration.",
    options: [
      { id: 'A', text: "Require the SaaS provider to supply a unique, secret `ExternalId` in their STS AssumeRole request and enforce it in the role trust policy." },
      { id: 'B', text: "Allow the SaaS provider to assume the role based solely on their AWS Account ID without an ExternalId." },
      { id: 'C', text: "Grant the third-party vendor unrestricted root credentials to your AWS account." },
      { id: 'D', text: "Create a long-term IAM user with an access key and email the credentials to the third-party vendor." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Require the SaaS provider to supply a unique, secret `ExternalId` in their STS AssumeRole request and enforce it in the role trust policy. In cross-account access for multi-tenant SaaS providers, the 'confused deputy' attack occurs when an attacker tricks the SaaS vendor into assuming another customer's role. Enforcing `sts:ExternalId` in the role trust policy ensures the vendor only assumes the role when acting on behalf of the verified customer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html",
    tags: ["IAM External ID", "IAM External ID", "Enterprise Governance"]
  },
  {
    id: "aws-scs-402",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account IAM Roles and External ID Protection: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates IAM External ID to allow a third-party SaaS security monitoring platform to assume an IAM role in your AWS account without risking confused deputy attacks.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Preventing the confused deputy vulnerability in multi-tenant third-party SaaS integrations is under consideration.",
    options: [
      { id: 'A', text: "Allow the SaaS provider to assume the role based solely on their AWS Account ID without an ExternalId." },
      { id: 'B', text: "Create a long-term IAM user with an access key and email the credentials to the third-party vendor." },
      { id: 'C', text: "Require the SaaS provider to supply a unique, secret `ExternalId` in their STS AssumeRole request and enforce it in the role trust policy." },
      { id: 'D', text: "Grant the third-party vendor unrestricted root credentials to your AWS account." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Require the SaaS provider to supply a unique, secret `ExternalId` in their STS AssumeRole request and enforce it in the role trust policy. In cross-account access for multi-tenant SaaS providers, the 'confused deputy' attack occurs when an attacker tricks the SaaS vendor into assuming another customer's role. Enforcing `sts:ExternalId` in the role trust policy ensures the vendor only assumes the role when acting on behalf of the verified customer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html",
    tags: ["IAM External ID", "IAM External ID", "Incident Containment"]
  },
  {
    id: "aws-scs-403",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account IAM Roles and External ID Protection: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates IAM External ID to allow a third-party SaaS security monitoring platform to assume an IAM role in your AWS account without risking confused deputy attacks.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Preventing the confused deputy vulnerability in multi-tenant third-party SaaS integrations is under consideration.",
    options: [
      { id: 'A', text: "Grant the third-party vendor unrestricted root credentials to your AWS account." },
      { id: 'B', text: "Allow the SaaS provider to assume the role based solely on their AWS Account ID without an ExternalId." },
      { id: 'C', text: "Require the SaaS provider to supply a unique, secret `ExternalId` in their STS AssumeRole request and enforce it in the role trust policy." },
      { id: 'D', text: "Create a long-term IAM user with an access key and email the credentials to the third-party vendor." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Require the SaaS provider to supply a unique, secret `ExternalId` in their STS AssumeRole request and enforce it in the role trust policy. In cross-account access for multi-tenant SaaS providers, the 'confused deputy' attack occurs when an attacker tricks the SaaS vendor into assuming another customer's role. Enforcing `sts:ExternalId` in the role trust policy ensures the vendor only assumes the role when acting on behalf of the verified customer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html",
    tags: ["IAM External ID", "IAM External ID", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-404",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account IAM Roles and External ID Protection: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates IAM External ID to allow a third-party SaaS security monitoring platform to assume an IAM role in your AWS account without risking confused deputy attacks.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Preventing the confused deputy vulnerability in multi-tenant third-party SaaS integrations is under consideration.",
    options: [
      { id: 'A', text: "Require the SaaS provider to supply a unique, secret `ExternalId` in their STS AssumeRole request and enforce it in the role trust policy." },
      { id: 'B', text: "Grant the third-party vendor unrestricted root credentials to your AWS account." },
      { id: 'C', text: "Allow the SaaS provider to assume the role based solely on their AWS Account ID without an ExternalId." },
      { id: 'D', text: "Create a long-term IAM user with an access key and email the credentials to the third-party vendor." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Require the SaaS provider to supply a unique, secret `ExternalId` in their STS AssumeRole request and enforce it in the role trust policy. In cross-account access for multi-tenant SaaS providers, the 'confused deputy' attack occurs when an attacker tricks the SaaS vendor into assuming another customer's role. Enforcing `sts:ExternalId` in the role trust policy ensures the vendor only assumes the role when acting on behalf of the verified customer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html",
    tags: ["IAM External ID", "IAM External ID", "Data Protection"]
  },
  {
    id: "aws-scs-405",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account IAM Roles and External ID Protection: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates IAM External ID to allow a third-party SaaS security monitoring platform to assume an IAM role in your AWS account without risking confused deputy attacks.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Preventing the confused deputy vulnerability in multi-tenant third-party SaaS integrations is under consideration.",
    options: [
      { id: 'A', text: "Allow the SaaS provider to assume the role based solely on their AWS Account ID without an ExternalId." },
      { id: 'B', text: "Require the SaaS provider to supply a unique, secret `ExternalId` in their STS AssumeRole request and enforce it in the role trust policy." },
      { id: 'C', text: "Create a long-term IAM user with an access key and email the credentials to the third-party vendor." },
      { id: 'D', text: "Grant the third-party vendor unrestricted root credentials to your AWS account." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Require the SaaS provider to supply a unique, secret `ExternalId` in their STS AssumeRole request and enforce it in the role trust policy. In cross-account access for multi-tenant SaaS providers, the 'confused deputy' attack occurs when an attacker tricks the SaaS vendor into assuming another customer's role. Enforcing `sts:ExternalId` in the role trust policy ensures the vendor only assumes the role when acting on behalf of the verified customer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html",
    tags: ["IAM External ID", "IAM External ID", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-406",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account S3 Bucket Access and KMS Key Delegation: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates Cross-Account Access to enable Account B to read and write KMS-encrypted objects in an S3 bucket owned by Account A without assuming IAM roles.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Bucket policies, KMS key policies, and object ownership in multi-account data sharing is under consideration.",
    options: [
      { id: 'A', text: "Disable encryption on the S3 bucket so KMS permissions are unnecessary." },
      { id: 'B', text: "Attach an S3 bucket policy allowing Account B and grant Account B usage permissions on the Customer Managed KMS Key policy." },
      { id: 'C', text: "Make the S3 bucket publicly readable to 0.0.0.0/0." },
      { id: 'D', text: "Use AWS Managed Key `aws/s3`, which can never be shared across different AWS accounts." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Attach an S3 bucket policy allowing Account B and grant Account B usage permissions on the Customer Managed KMS Key policy. Cross-account access to encrypted S3 objects requires dual permissions: 1) the S3 bucket policy (or ACL) must allow the external account, and 2) the KMS key policy must explicitly permit the external account (`kms:Decrypt`, `kms:GenerateDataKey`). AWS Managed Keys (`aws/s3`) cannot be used across accounts.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html",
    tags: ["Cross-Account Access", "Cross-Account Access", "Enterprise Governance"]
  },
  {
    id: "aws-scs-407",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account S3 Bucket Access and KMS Key Delegation: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates Cross-Account Access to enable Account B to read and write KMS-encrypted objects in an S3 bucket owned by Account A without assuming IAM roles.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Bucket policies, KMS key policies, and object ownership in multi-account data sharing is under consideration.",
    options: [
      { id: 'A', text: "Attach an S3 bucket policy allowing Account B and grant Account B usage permissions on the Customer Managed KMS Key policy." },
      { id: 'B', text: "Disable encryption on the S3 bucket so KMS permissions are unnecessary." },
      { id: 'C', text: "Use AWS Managed Key `aws/s3`, which can never be shared across different AWS accounts." },
      { id: 'D', text: "Make the S3 bucket publicly readable to 0.0.0.0/0." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an S3 bucket policy allowing Account B and grant Account B usage permissions on the Customer Managed KMS Key policy. Cross-account access to encrypted S3 objects requires dual permissions: 1) the S3 bucket policy (or ACL) must allow the external account, and 2) the KMS key policy must explicitly permit the external account (`kms:Decrypt`, `kms:GenerateDataKey`). AWS Managed Keys (`aws/s3`) cannot be used across accounts.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html",
    tags: ["Cross-Account Access", "Cross-Account Access", "Incident Containment"]
  },
  {
    id: "aws-scs-408",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account S3 Bucket Access and KMS Key Delegation: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates Cross-Account Access to enable Account B to read and write KMS-encrypted objects in an S3 bucket owned by Account A without assuming IAM roles.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Bucket policies, KMS key policies, and object ownership in multi-account data sharing is under consideration.",
    options: [
      { id: 'A', text: "Attach an S3 bucket policy allowing Account B and grant Account B usage permissions on the Customer Managed KMS Key policy." },
      { id: 'B', text: "Make the S3 bucket publicly readable to 0.0.0.0/0." },
      { id: 'C', text: "Use AWS Managed Key `aws/s3`, which can never be shared across different AWS accounts." },
      { id: 'D', text: "Disable encryption on the S3 bucket so KMS permissions are unnecessary." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an S3 bucket policy allowing Account B and grant Account B usage permissions on the Customer Managed KMS Key policy. Cross-account access to encrypted S3 objects requires dual permissions: 1) the S3 bucket policy (or ACL) must allow the external account, and 2) the KMS key policy must explicitly permit the external account (`kms:Decrypt`, `kms:GenerateDataKey`). AWS Managed Keys (`aws/s3`) cannot be used across accounts.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html",
    tags: ["Cross-Account Access", "Cross-Account Access", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-409",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account S3 Bucket Access and KMS Key Delegation: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates Cross-Account Access to enable Account B to read and write KMS-encrypted objects in an S3 bucket owned by Account A without assuming IAM roles.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Bucket policies, KMS key policies, and object ownership in multi-account data sharing is under consideration.",
    options: [
      { id: 'A', text: "Use AWS Managed Key `aws/s3`, which can never be shared across different AWS accounts." },
      { id: 'B', text: "Attach an S3 bucket policy allowing Account B and grant Account B usage permissions on the Customer Managed KMS Key policy." },
      { id: 'C', text: "Make the S3 bucket publicly readable to 0.0.0.0/0." },
      { id: 'D', text: "Disable encryption on the S3 bucket so KMS permissions are unnecessary." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Attach an S3 bucket policy allowing Account B and grant Account B usage permissions on the Customer Managed KMS Key policy. Cross-account access to encrypted S3 objects requires dual permissions: 1) the S3 bucket policy (or ACL) must allow the external account, and 2) the KMS key policy must explicitly permit the external account (`kms:Decrypt`, `kms:GenerateDataKey`). AWS Managed Keys (`aws/s3`) cannot be used across accounts.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html",
    tags: ["Cross-Account Access", "Cross-Account Access", "Data Protection"]
  },
  {
    id: "aws-scs-410",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account S3 Bucket Access and KMS Key Delegation: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates Cross-Account Access to enable Account B to read and write KMS-encrypted objects in an S3 bucket owned by Account A without assuming IAM roles.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Bucket policies, KMS key policies, and object ownership in multi-account data sharing is under consideration.",
    options: [
      { id: 'A', text: "Attach an S3 bucket policy allowing Account B and grant Account B usage permissions on the Customer Managed KMS Key policy." },
      { id: 'B', text: "Make the S3 bucket publicly readable to 0.0.0.0/0." },
      { id: 'C', text: "Use AWS Managed Key `aws/s3`, which can never be shared across different AWS accounts." },
      { id: 'D', text: "Disable encryption on the S3 bucket so KMS permissions are unnecessary." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an S3 bucket policy allowing Account B and grant Account B usage permissions on the Customer Managed KMS Key policy. Cross-account access to encrypted S3 objects requires dual permissions: 1) the S3 bucket policy (or ACL) must allow the external account, and 2) the KMS key policy must explicitly permit the external account (`kms:Decrypt`, `kms:GenerateDataKey`). AWS Managed Keys (`aws/s3`) cannot be used across accounts.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html",
    tags: ["Cross-Account Access", "Cross-Account Access", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-411",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Access Analyzer and Least-Privilege Policy Generation: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates IAM Access Analyzer to identify all S3 buckets, KMS keys, and IAM roles shared outside the corporate AWS Organization and generate right-sized policies.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Detecting unintended external resource sharing and generating least-privilege policies from CloudTrail is under consideration.",
    options: [
      { id: 'A', text: "Assume no resources are exposed to the internet without automated validation." },
      { id: 'B', text: "Grant wildcard `*` permissions to all application roles to prevent permission-related outages." },
      { id: 'C', text: "Manually inspect thousands of individual resource JSON policies across 50 AWS accounts in the web console." },
      { id: 'D', text: "Enable IAM Access Analyzer to detect external sharing findings and use its CloudTrail policy generator to author least-privilege IAM policies." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable IAM Access Analyzer to detect external sharing findings and use its CloudTrail policy generator to author least-privilege IAM policies. IAM Access Analyzer uses automated reasoning to mathematical prove access. It identifies resources (S3, IAM roles, KMS, SQS, Secrets Manager) accessible outside your organization. It also analyzes CloudTrail logs to generate least-privilege IAM policies containing only the actions actually used.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html",
    tags: ["IAM Access Analyzer", "Access Analyzer", "Enterprise Governance"]
  },
  {
    id: "aws-scs-412",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Access Analyzer and Least-Privilege Policy Generation: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates IAM Access Analyzer to identify all S3 buckets, KMS keys, and IAM roles shared outside the corporate AWS Organization and generate right-sized policies.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Detecting unintended external resource sharing and generating least-privilege policies from CloudTrail is under consideration.",
    options: [
      { id: 'A', text: "Enable IAM Access Analyzer to detect external sharing findings and use its CloudTrail policy generator to author least-privilege IAM policies." },
      { id: 'B', text: "Manually inspect thousands of individual resource JSON policies across 50 AWS accounts in the web console." },
      { id: 'C', text: "Grant wildcard `*` permissions to all application roles to prevent permission-related outages." },
      { id: 'D', text: "Assume no resources are exposed to the internet without automated validation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable IAM Access Analyzer to detect external sharing findings and use its CloudTrail policy generator to author least-privilege IAM policies. IAM Access Analyzer uses automated reasoning to mathematical prove access. It identifies resources (S3, IAM roles, KMS, SQS, Secrets Manager) accessible outside your organization. It also analyzes CloudTrail logs to generate least-privilege IAM policies containing only the actions actually used.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html",
    tags: ["IAM Access Analyzer", "Access Analyzer", "Incident Containment"]
  },
  {
    id: "aws-scs-413",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Access Analyzer and Least-Privilege Policy Generation: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates IAM Access Analyzer to identify all S3 buckets, KMS keys, and IAM roles shared outside the corporate AWS Organization and generate right-sized policies.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Detecting unintended external resource sharing and generating least-privilege policies from CloudTrail is under consideration.",
    options: [
      { id: 'A', text: "Enable IAM Access Analyzer to detect external sharing findings and use its CloudTrail policy generator to author least-privilege IAM policies." },
      { id: 'B', text: "Manually inspect thousands of individual resource JSON policies across 50 AWS accounts in the web console." },
      { id: 'C', text: "Assume no resources are exposed to the internet without automated validation." },
      { id: 'D', text: "Grant wildcard `*` permissions to all application roles to prevent permission-related outages." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable IAM Access Analyzer to detect external sharing findings and use its CloudTrail policy generator to author least-privilege IAM policies. IAM Access Analyzer uses automated reasoning to mathematical prove access. It identifies resources (S3, IAM roles, KMS, SQS, Secrets Manager) accessible outside your organization. It also analyzes CloudTrail logs to generate least-privilege IAM policies containing only the actions actually used.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html",
    tags: ["IAM Access Analyzer", "Access Analyzer", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-414",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Access Analyzer and Least-Privilege Policy Generation: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates IAM Access Analyzer to identify all S3 buckets, KMS keys, and IAM roles shared outside the corporate AWS Organization and generate right-sized policies.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Detecting unintended external resource sharing and generating least-privilege policies from CloudTrail is under consideration.",
    options: [
      { id: 'A', text: "Assume no resources are exposed to the internet without automated validation." },
      { id: 'B', text: "Manually inspect thousands of individual resource JSON policies across 50 AWS accounts in the web console." },
      { id: 'C', text: "Enable IAM Access Analyzer to detect external sharing findings and use its CloudTrail policy generator to author least-privilege IAM policies." },
      { id: 'D', text: "Grant wildcard `*` permissions to all application roles to prevent permission-related outages." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable IAM Access Analyzer to detect external sharing findings and use its CloudTrail policy generator to author least-privilege IAM policies. IAM Access Analyzer uses automated reasoning to mathematical prove access. It identifies resources (S3, IAM roles, KMS, SQS, Secrets Manager) accessible outside your organization. It also analyzes CloudTrail logs to generate least-privilege IAM policies containing only the actions actually used.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html",
    tags: ["IAM Access Analyzer", "Access Analyzer", "Data Protection"]
  },
  {
    id: "aws-scs-415",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Access Analyzer and Least-Privilege Policy Generation: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates IAM Access Analyzer to identify all S3 buckets, KMS keys, and IAM roles shared outside the corporate AWS Organization and generate right-sized policies.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Detecting unintended external resource sharing and generating least-privilege policies from CloudTrail is under consideration.",
    options: [
      { id: 'A', text: "Enable IAM Access Analyzer to detect external sharing findings and use its CloudTrail policy generator to author least-privilege IAM policies." },
      { id: 'B', text: "Grant wildcard `*` permissions to all application roles to prevent permission-related outages." },
      { id: 'C', text: "Manually inspect thousands of individual resource JSON policies across 50 AWS accounts in the web console." },
      { id: 'D', text: "Assume no resources are exposed to the internet without automated validation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable IAM Access Analyzer to detect external sharing findings and use its CloudTrail policy generator to author least-privilege IAM policies. IAM Access Analyzer uses automated reasoning to mathematical prove access. It identifies resources (S3, IAM roles, KMS, SQS, Secrets Manager) accessible outside your organization. It also analyzes CloudTrail logs to generate least-privilege IAM policies containing only the actions actually used.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html",
    tags: ["IAM Access Analyzer", "Access Analyzer", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-416",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Multi-Factor Authentication (MFA) Enforcement in IAM Policies: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates MFA Enforcement to ensure that critical actions like terminating EC2 instances or deleting S3 objects can only be executed by users authenticated with hardware MFA.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Enforcing aws:MultiFactorAuthPresent condition for sensitive API actions and STS sessions is under consideration.",
    options: [
      { id: 'A', text: "Disable MFA requirements to prevent developers from being locked out when traveling." },
      { id: 'B', text: "Send an email to developers asking them to enable MFA voluntarily on their smartphones." },
      { id: 'C', text: "Include an explicit `Deny` block in IAM policies for target actions with condition `BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`." },
      { id: 'D', text: "Rely on console login MFA alone, leaving CLI and API requests unprotected." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Include an explicit `Deny` block in IAM policies for target actions with condition `BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`. Enforcing MFA for sensitive API operations requires policy conditions. Attaching an explicit `Deny` condition (`BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`) ensures that API requests initiated via the AWS CLI or SDK without a valid MFA token session are rejected.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_my-sec-creds-self-manage.html",
    tags: ["MFA Enforcement", "MFA Enforcement", "Enterprise Governance"]
  },
  {
    id: "aws-scs-417",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Multi-Factor Authentication (MFA) Enforcement in IAM Policies: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates MFA Enforcement to ensure that critical actions like terminating EC2 instances or deleting S3 objects can only be executed by users authenticated with hardware MFA.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Enforcing aws:MultiFactorAuthPresent condition for sensitive API actions and STS sessions is under consideration.",
    options: [
      { id: 'A', text: "Disable MFA requirements to prevent developers from being locked out when traveling." },
      { id: 'B', text: "Rely on console login MFA alone, leaving CLI and API requests unprotected." },
      { id: 'C', text: "Send an email to developers asking them to enable MFA voluntarily on their smartphones." },
      { id: 'D', text: "Include an explicit `Deny` block in IAM policies for target actions with condition `BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Include an explicit `Deny` block in IAM policies for target actions with condition `BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`. Enforcing MFA for sensitive API operations requires policy conditions. Attaching an explicit `Deny` condition (`BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`) ensures that API requests initiated via the AWS CLI or SDK without a valid MFA token session are rejected.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_my-sec-creds-self-manage.html",
    tags: ["MFA Enforcement", "MFA Enforcement", "Incident Containment"]
  },
  {
    id: "aws-scs-418",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Multi-Factor Authentication (MFA) Enforcement in IAM Policies: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates MFA Enforcement to ensure that critical actions like terminating EC2 instances or deleting S3 objects can only be executed by users authenticated with hardware MFA.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Enforcing aws:MultiFactorAuthPresent condition for sensitive API actions and STS sessions is under consideration.",
    options: [
      { id: 'A', text: "Include an explicit `Deny` block in IAM policies for target actions with condition `BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`." },
      { id: 'B', text: "Send an email to developers asking them to enable MFA voluntarily on their smartphones." },
      { id: 'C', text: "Rely on console login MFA alone, leaving CLI and API requests unprotected." },
      { id: 'D', text: "Disable MFA requirements to prevent developers from being locked out when traveling." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Include an explicit `Deny` block in IAM policies for target actions with condition `BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`. Enforcing MFA for sensitive API operations requires policy conditions. Attaching an explicit `Deny` condition (`BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`) ensures that API requests initiated via the AWS CLI or SDK without a valid MFA token session are rejected.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_my-sec-creds-self-manage.html",
    tags: ["MFA Enforcement", "MFA Enforcement", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-419",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Multi-Factor Authentication (MFA) Enforcement in IAM Policies: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates MFA Enforcement to ensure that critical actions like terminating EC2 instances or deleting S3 objects can only be executed by users authenticated with hardware MFA.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Enforcing aws:MultiFactorAuthPresent condition for sensitive API actions and STS sessions is under consideration.",
    options: [
      { id: 'A', text: "Include an explicit `Deny` block in IAM policies for target actions with condition `BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`." },
      { id: 'B', text: "Disable MFA requirements to prevent developers from being locked out when traveling." },
      { id: 'C', text: "Rely on console login MFA alone, leaving CLI and API requests unprotected." },
      { id: 'D', text: "Send an email to developers asking them to enable MFA voluntarily on their smartphones." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Include an explicit `Deny` block in IAM policies for target actions with condition `BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`. Enforcing MFA for sensitive API operations requires policy conditions. Attaching an explicit `Deny` condition (`BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`) ensures that API requests initiated via the AWS CLI or SDK without a valid MFA token session are rejected.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_my-sec-creds-self-manage.html",
    tags: ["MFA Enforcement", "MFA Enforcement", "Data Protection"]
  },
  {
    id: "aws-scs-420",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Multi-Factor Authentication (MFA) Enforcement in IAM Policies: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates MFA Enforcement to ensure that critical actions like terminating EC2 instances or deleting S3 objects can only be executed by users authenticated with hardware MFA.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Enforcing aws:MultiFactorAuthPresent condition for sensitive API actions and STS sessions is under consideration.",
    options: [
      { id: 'A', text: "Disable MFA requirements to prevent developers from being locked out when traveling." },
      { id: 'B', text: "Rely on console login MFA alone, leaving CLI and API requests unprotected." },
      { id: 'C', text: "Send an email to developers asking them to enable MFA voluntarily on their smartphones." },
      { id: 'D', text: "Include an explicit `Deny` block in IAM policies for target actions with condition `BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Include an explicit `Deny` block in IAM policies for target actions with condition `BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`. Enforcing MFA for sensitive API operations requires policy conditions. Attaching an explicit `Deny` condition (`BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`) ensures that API requests initiated via the AWS CLI or SDK without a valid MFA token session are rejected.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_my-sec-creds-self-manage.html",
    tags: ["MFA Enforcement", "MFA Enforcement", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-421",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS KMS Customer Managed Keys (CMKs) vs AWS Managed Keys: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates AWS KMS Keys to control cryptographic key deletion schedules, enforce key policies, and enable automated annual key rotation.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Key policy control, automatic annual rotation, and cross-account access differences is under consideration.",
    options: [
      { id: 'A', text: "Delete the KMS key immediately after encrypting data to prevent attackers from finding it." },
      { id: 'B', text: "Store unencrypted private keys in plaintext text files inside application code repositories." },
      { id: 'C', text: "Create a Customer Managed Key (CMK) in AWS KMS, configure a custom key policy, and enable automatic annual key rotation." },
      { id: 'D', text: "Use the default AWS Managed Key (`aws/s3` or `aws/ebs`), which does not support custom key policies or cross-account access." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a Customer Managed Key (CMK) in AWS KMS, configure a custom key policy, and enable automatic annual key rotation. Customer Managed Keys (CMKs) offer full administrative control: custom key policies, key grants, annual automatic rotation, cryptographic deletion waiting periods (7–30 days), and cross-account access. AWS Managed Keys cannot be shared across accounts and their key policies cannot be modified.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk",
    tags: ["AWS KMS Keys", "KMS CMKs", "Enterprise Governance"]
  },
  {
    id: "aws-scs-422",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS KMS Customer Managed Keys (CMKs) vs AWS Managed Keys: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates AWS KMS Keys to control cryptographic key deletion schedules, enforce key policies, and enable automated annual key rotation.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Key policy control, automatic annual rotation, and cross-account access differences is under consideration.",
    options: [
      { id: 'A', text: "Store unencrypted private keys in plaintext text files inside application code repositories." },
      { id: 'B', text: "Create a Customer Managed Key (CMK) in AWS KMS, configure a custom key policy, and enable automatic annual key rotation." },
      { id: 'C', text: "Delete the KMS key immediately after encrypting data to prevent attackers from finding it." },
      { id: 'D', text: "Use the default AWS Managed Key (`aws/s3` or `aws/ebs`), which does not support custom key policies or cross-account access." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a Customer Managed Key (CMK) in AWS KMS, configure a custom key policy, and enable automatic annual key rotation. Customer Managed Keys (CMKs) offer full administrative control: custom key policies, key grants, annual automatic rotation, cryptographic deletion waiting periods (7–30 days), and cross-account access. AWS Managed Keys cannot be shared across accounts and their key policies cannot be modified.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk",
    tags: ["AWS KMS Keys", "KMS CMKs", "Incident Containment"]
  },
  {
    id: "aws-scs-423",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS KMS Customer Managed Keys (CMKs) vs AWS Managed Keys: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates AWS KMS Keys to control cryptographic key deletion schedules, enforce key policies, and enable automated annual key rotation.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Key policy control, automatic annual rotation, and cross-account access differences is under consideration.",
    options: [
      { id: 'A', text: "Store unencrypted private keys in plaintext text files inside application code repositories." },
      { id: 'B', text: "Delete the KMS key immediately after encrypting data to prevent attackers from finding it." },
      { id: 'C', text: "Create a Customer Managed Key (CMK) in AWS KMS, configure a custom key policy, and enable automatic annual key rotation." },
      { id: 'D', text: "Use the default AWS Managed Key (`aws/s3` or `aws/ebs`), which does not support custom key policies or cross-account access." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a Customer Managed Key (CMK) in AWS KMS, configure a custom key policy, and enable automatic annual key rotation. Customer Managed Keys (CMKs) offer full administrative control: custom key policies, key grants, annual automatic rotation, cryptographic deletion waiting periods (7–30 days), and cross-account access. AWS Managed Keys cannot be shared across accounts and their key policies cannot be modified.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk",
    tags: ["AWS KMS Keys", "KMS CMKs", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-424",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS KMS Customer Managed Keys (CMKs) vs AWS Managed Keys: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates AWS KMS Keys to control cryptographic key deletion schedules, enforce key policies, and enable automated annual key rotation.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Key policy control, automatic annual rotation, and cross-account access differences is under consideration.",
    options: [
      { id: 'A', text: "Use the default AWS Managed Key (`aws/s3` or `aws/ebs`), which does not support custom key policies or cross-account access." },
      { id: 'B', text: "Store unencrypted private keys in plaintext text files inside application code repositories." },
      { id: 'C', text: "Delete the KMS key immediately after encrypting data to prevent attackers from finding it." },
      { id: 'D', text: "Create a Customer Managed Key (CMK) in AWS KMS, configure a custom key policy, and enable automatic annual key rotation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a Customer Managed Key (CMK) in AWS KMS, configure a custom key policy, and enable automatic annual key rotation. Customer Managed Keys (CMKs) offer full administrative control: custom key policies, key grants, annual automatic rotation, cryptographic deletion waiting periods (7–30 days), and cross-account access. AWS Managed Keys cannot be shared across accounts and their key policies cannot be modified.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk",
    tags: ["AWS KMS Keys", "KMS CMKs", "Data Protection"]
  },
  {
    id: "aws-scs-425",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS KMS Customer Managed Keys (CMKs) vs AWS Managed Keys: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates AWS KMS Keys to control cryptographic key deletion schedules, enforce key policies, and enable automated annual key rotation.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Key policy control, automatic annual rotation, and cross-account access differences is under consideration.",
    options: [
      { id: 'A', text: "Use the default AWS Managed Key (`aws/s3` or `aws/ebs`), which does not support custom key policies or cross-account access." },
      { id: 'B', text: "Delete the KMS key immediately after encrypting data to prevent attackers from finding it." },
      { id: 'C', text: "Store unencrypted private keys in plaintext text files inside application code repositories." },
      { id: 'D', text: "Create a Customer Managed Key (CMK) in AWS KMS, configure a custom key policy, and enable automatic annual key rotation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a Customer Managed Key (CMK) in AWS KMS, configure a custom key policy, and enable automatic annual key rotation. Customer Managed Keys (CMKs) offer full administrative control: custom key policies, key grants, annual automatic rotation, cryptographic deletion waiting periods (7–30 days), and cross-account access. AWS Managed Keys cannot be shared across accounts and their key policies cannot be modified.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk",
    tags: ["AWS KMS Keys", "KMS CMKs", "Infrastructure Defense"]
  }
];

export default AWS_SCS_QUESTIONS_17;
