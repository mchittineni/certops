export const AWS_SCS_QUESTIONS_17 = [
  {
    id: "aws-scs-401",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account IAM Roles and External ID Protection: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer needs to allow a third-party SaaS security monitoring platform to assume an IAM role in your AWS account without risking confused deputy attacks.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives?",
    options: [
      { id: 'A', text: "Require a secret `ExternalId` on the provider's `AssumeRole` and enforce it" },
      { id: 'B', text: "Trust the provider's account ID alone, with no external identifier on the role." },
      { id: 'C', text: "Issue the provider an IAM user whose access keys the platform team rotates." },
      { id: 'D', text: "Give the provider a role with a wildcard trust policy and a permissions boundary." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Require the SaaS provider to supply a unique, secret `ExternalId` in their STS AssumeRole request and enforce it in the role trust policy. In cross-account access for multi-tenant SaaS providers, the 'confused deputy' attack occurs when an attacker tricks the SaaS vendor into assuming another customer's role. Enforcing `sts:ExternalId` in the role trust policy ensures the vendor only assumes the role when acting on behalf of the verified customer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html",
    tags: ["IAM External ID","IAM External ID","Enterprise Governance"]
  },
  {
    id: "aws-scs-402",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account IAM Roles and External ID Protection: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer needs to allow a third-party SaaS security monitoring platform to assume an IAM role in your AWS account without risking confused deputy attacks.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence?",
    options: [
      { id: 'A', text: "Issue the provider an IAM user whose access keys the platform team rotates." },
      { id: 'B', text: "Require a secret `ExternalId` on the provider's `AssumeRole` and enforce it" },
      { id: 'C', text: "Trust the provider's account ID alone, with no external identifier on the role." },
      { id: 'D', text: "Give the provider a role with a wildcard trust policy and a permissions boundary." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Require the SaaS provider to supply a unique, secret `ExternalId` in their STS AssumeRole request and enforce it in the role trust policy. In cross-account access for multi-tenant SaaS providers, the 'confused deputy' attack occurs when an attacker tricks the SaaS vendor into assuming another customer's role. Enforcing `sts:ExternalId` in the role trust policy ensures the vendor only assumes the role when acting on behalf of the verified customer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html",
    tags: ["IAM External ID","IAM External ID","Incident Containment"]
  },
  {
    id: "aws-scs-403",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account IAM Roles and External ID Protection: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer needs to allow a third-party SaaS security monitoring platform to assume an IAM role in your AWS account without risking confused deputy attacks.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls?",
    options: [
      { id: 'A', text: "Issue the provider an IAM user whose access keys the platform team rotates." },
      { id: 'B', text: "Trust the provider's account ID alone, with no external identifier on the role." },
      { id: 'C', text: "Give the provider a role with a wildcard trust policy and a permissions boundary." },
      { id: 'D', text: "Require a secret `ExternalId` on the provider's `AssumeRole` and enforce it" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Require the SaaS provider to supply a unique, secret `ExternalId` in their STS AssumeRole request and enforce it in the role trust policy. In cross-account access for multi-tenant SaaS providers, the 'confused deputy' attack occurs when an attacker tricks the SaaS vendor into assuming another customer's role. Enforcing `sts:ExternalId` in the role trust policy ensures the vendor only assumes the role when acting on behalf of the verified customer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html",
    tags: ["IAM External ID","IAM External ID","Zero Trust Iam"]
  },
  {
    id: "aws-scs-404",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account IAM Roles and External ID Protection: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer needs to allow a third-party SaaS security monitoring platform to assume an IAM role in your AWS account without risking confused deputy attacks.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity?",
    options: [
      { id: 'A', text: "Require a secret `ExternalId` on the provider's `AssumeRole` and enforce it" },
      { id: 'B', text: "Issue the provider an IAM user whose access keys the platform team rotates." },
      { id: 'C', text: "Give the provider a role with a wildcard trust policy and a permissions boundary." },
      { id: 'D', text: "Trust the provider's account ID alone, with no external identifier on the role." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Require the SaaS provider to supply a unique, secret `ExternalId` in their STS AssumeRole request and enforce it in the role trust policy. In cross-account access for multi-tenant SaaS providers, the 'confused deputy' attack occurs when an attacker tricks the SaaS vendor into assuming another customer's role. Enforcing `sts:ExternalId` in the role trust policy ensures the vendor only assumes the role when acting on behalf of the verified customer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html",
    tags: ["IAM External ID","IAM External ID","Data Protection"]
  },
  {
    id: "aws-scs-405",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account IAM Roles and External ID Protection: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer needs to allow a third-party SaaS security monitoring platform to assume an IAM role in your AWS account without risking confused deputy attacks.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense?",
    options: [
      { id: 'A', text: "Require a secret `ExternalId` on the provider's `AssumeRole` and enforce it" },
      { id: 'B', text: "Trust the provider's account ID alone, with no external identifier on the role." },
      { id: 'C', text: "Issue the provider an IAM user whose access keys the platform team rotates." },
      { id: 'D', text: "Give the provider a role with a wildcard trust policy and a permissions boundary." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Require the SaaS provider to supply a unique, secret `ExternalId` in their STS AssumeRole request and enforce it in the role trust policy. In cross-account access for multi-tenant SaaS providers, the 'confused deputy' attack occurs when an attacker tricks the SaaS vendor into assuming another customer's role. Enforcing `sts:ExternalId` in the role trust policy ensures the vendor only assumes the role when acting on behalf of the verified customer.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html",
    tags: ["IAM External ID","IAM External ID","Infrastructure Defense"]
  },
  {
    id: "aws-scs-406",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account S3 Bucket Access and KMS Key Delegation: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer needs to enable Account B to read and write KMS-encrypted objects in an S3 bucket owned by Account A without assuming IAM roles.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives?",
    options: [
      { id: 'A', text: "A bucket policy allowing Account B, with the bucket left on the AWS-managed S3 key." },
      { id: 'B', text: "A role in Account A that Account B assumes, with the bucket policy left unchanged." },
      { id: 'C', text: "An access point in Account A scoped to Account B, with no change to the key policy." },
      { id: 'D', text: "A bucket policy allowing Account B, plus key policy permissions for Account B to use the key." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Attach an S3 bucket policy allowing Account B and grant Account B usage permissions on the Customer Managed KMS Key policy. Cross-account access to encrypted S3 objects requires dual permissions: 1) the S3 bucket policy (or ACL) must allow the external account, and 2) the KMS key policy must explicitly permit the external account (`kms:Decrypt`, `kms:GenerateDataKey`). AWS Managed Keys (`aws/s3`) cannot be used across accounts.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html",
    tags: ["Cross-Account Access","Cross-Account Access","Enterprise Governance"]
  },
  {
    id: "aws-scs-407",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account S3 Bucket Access and KMS Key Delegation: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer needs to enable Account B to read and write KMS-encrypted objects in an S3 bucket owned by Account A without assuming IAM roles.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence?",
    options: [
      { id: 'A', text: "A bucket policy allowing Account B, plus key policy permissions for Account B to use the key." },
      { id: 'B', text: "An access point in Account A scoped to Account B, with no change to the key policy." },
      { id: 'C', text: "A role in Account A that Account B assumes, with the bucket policy left unchanged." },
      { id: 'D', text: "A bucket policy allowing Account B, with the bucket left on the AWS-managed S3 key." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an S3 bucket policy allowing Account B and grant Account B usage permissions on the Customer Managed KMS Key policy. Cross-account access to encrypted S3 objects requires dual permissions: 1) the S3 bucket policy (or ACL) must allow the external account, and 2) the KMS key policy must explicitly permit the external account (`kms:Decrypt`, `kms:GenerateDataKey`). AWS Managed Keys (`aws/s3`) cannot be used across accounts.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html",
    tags: ["Cross-Account Access","Cross-Account Access","Incident Containment"]
  },
  {
    id: "aws-scs-408",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account S3 Bucket Access and KMS Key Delegation: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer needs to enable Account B to read and write KMS-encrypted objects in an S3 bucket owned by Account A without assuming IAM roles.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls?",
    options: [
      { id: 'A', text: "A bucket policy allowing Account B, plus key policy permissions for Account B to use the key." },
      { id: 'B', text: "A bucket policy allowing Account B, with the bucket left on the AWS-managed S3 key." },
      { id: 'C', text: "An access point in Account A scoped to Account B, with no change to the key policy." },
      { id: 'D', text: "A role in Account A that Account B assumes, with the bucket policy left unchanged." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an S3 bucket policy allowing Account B and grant Account B usage permissions on the Customer Managed KMS Key policy. Cross-account access to encrypted S3 objects requires dual permissions: 1) the S3 bucket policy (or ACL) must allow the external account, and 2) the KMS key policy must explicitly permit the external account (`kms:Decrypt`, `kms:GenerateDataKey`). AWS Managed Keys (`aws/s3`) cannot be used across accounts.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html",
    tags: ["Cross-Account Access","Cross-Account Access","Zero Trust Iam"]
  },
  {
    id: "aws-scs-409",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account S3 Bucket Access and KMS Key Delegation: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer needs to enable Account B to read and write KMS-encrypted objects in an S3 bucket owned by Account A without assuming IAM roles.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity?",
    options: [
      { id: 'A', text: "A bucket policy allowing Account B, plus key policy permissions for Account B to use the key." },
      { id: 'B', text: "A bucket policy allowing Account B, with the bucket left on the AWS-managed S3 key." },
      { id: 'C', text: "An access point in Account A scoped to Account B, with no change to the key policy." },
      { id: 'D', text: "A role in Account A that Account B assumes, with the bucket policy left unchanged." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an S3 bucket policy allowing Account B and grant Account B usage permissions on the Customer Managed KMS Key policy. Cross-account access to encrypted S3 objects requires dual permissions: 1) the S3 bucket policy (or ACL) must allow the external account, and 2) the KMS key policy must explicitly permit the external account (`kms:Decrypt`, `kms:GenerateDataKey`). AWS Managed Keys (`aws/s3`) cannot be used across accounts.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html",
    tags: ["Cross-Account Access","Cross-Account Access","Data Protection"]
  },
  {
    id: "aws-scs-410",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-Account S3 Bucket Access and KMS Key Delegation: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer needs to enable Account B to read and write KMS-encrypted objects in an S3 bucket owned by Account A without assuming IAM roles.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense?",
    options: [
      { id: 'A', text: "A bucket policy allowing Account B, plus key policy permissions for Account B to use the key." },
      { id: 'B', text: "A bucket policy allowing Account B, with the bucket left on the AWS-managed S3 key." },
      { id: 'C', text: "An access point in Account A scoped to Account B, with no change to the key policy." },
      { id: 'D', text: "A role in Account A that Account B assumes, with the bucket policy left unchanged." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an S3 bucket policy allowing Account B and grant Account B usage permissions on the Customer Managed KMS Key policy. Cross-account access to encrypted S3 objects requires dual permissions: 1) the S3 bucket policy (or ACL) must allow the external account, and 2) the KMS key policy must explicitly permit the external account (`kms:Decrypt`, `kms:GenerateDataKey`). AWS Managed Keys (`aws/s3`) cannot be used across accounts.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html",
    tags: ["Cross-Account Access","Cross-Account Access","Infrastructure Defense"]
  },
  {
    id: "aws-scs-411",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Access Analyzer and Least-Privilege Policy Generation: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer needs to identify all S3 buckets, KMS keys, and IAM roles shared outside the corporate AWS Organization and generate right-sized policies.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives?",
    options: [
      { id: 'A', text: "Review each account's resource policies through a scheduled Config query." },
      { id: 'B', text: "IAM Access Analyzer for the external findings, with its policy generator" },
      { id: 'C', text: "Grant the application roles wildcard permissions and audit their use afterwards." },
      { id: 'D', text: "Rely on the account's public access block settings to catch external exposure." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable IAM Access Analyzer to detect external sharing findings and use its CloudTrail policy generator to author least-privilege IAM policies. IAM Access Analyzer uses automated reasoning to mathematical prove access. It identifies resources (S3, IAM roles, KMS, SQS, Secrets Manager) accessible outside your organization. It also analyzes CloudTrail logs to generate least-privilege IAM policies containing only the actions actually used.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html",
    tags: ["IAM Access Analyzer","Access Analyzer","Enterprise Governance"]
  },
  {
    id: "aws-scs-412",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Access Analyzer and Least-Privilege Policy Generation: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer needs to identify all S3 buckets, KMS keys, and IAM roles shared outside the corporate AWS Organization and generate right-sized policies.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence?",
    options: [
      { id: 'A', text: "IAM Access Analyzer for the external findings, with its policy generator" },
      { id: 'B', text: "Review each account's resource policies through a scheduled Config query." },
      { id: 'C', text: "Rely on the account's public access block settings to catch external exposure." },
      { id: 'D', text: "Grant the application roles wildcard permissions and audit their use afterwards." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable IAM Access Analyzer to detect external sharing findings and use its CloudTrail policy generator to author least-privilege IAM policies. IAM Access Analyzer uses automated reasoning to mathematical prove access. It identifies resources (S3, IAM roles, KMS, SQS, Secrets Manager) accessible outside your organization. It also analyzes CloudTrail logs to generate least-privilege IAM policies containing only the actions actually used.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html",
    tags: ["IAM Access Analyzer","Access Analyzer","Incident Containment"]
  },
  {
    id: "aws-scs-413",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Access Analyzer and Least-Privilege Policy Generation: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer needs to identify all S3 buckets, KMS keys, and IAM roles shared outside the corporate AWS Organization and generate right-sized policies.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls?",
    options: [
      { id: 'A', text: "IAM Access Analyzer for the external findings, with its policy generator" },
      { id: 'B', text: "Review each account's resource policies through a scheduled Config query." },
      { id: 'C', text: "Rely on the account's public access block settings to catch external exposure." },
      { id: 'D', text: "Grant the application roles wildcard permissions and audit their use afterwards." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable IAM Access Analyzer to detect external sharing findings and use its CloudTrail policy generator to author least-privilege IAM policies. IAM Access Analyzer uses automated reasoning to mathematical prove access. It identifies resources (S3, IAM roles, KMS, SQS, Secrets Manager) accessible outside your organization. It also analyzes CloudTrail logs to generate least-privilege IAM policies containing only the actions actually used.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html",
    tags: ["IAM Access Analyzer","Access Analyzer","Zero Trust Iam"]
  },
  {
    id: "aws-scs-414",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Access Analyzer and Least-Privilege Policy Generation: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer needs to identify all S3 buckets, KMS keys, and IAM roles shared outside the corporate AWS Organization and generate right-sized policies.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity?",
    options: [
      { id: 'A', text: "IAM Access Analyzer for the external findings, with its policy generator" },
      { id: 'B', text: "Review each account's resource policies through a scheduled Config query." },
      { id: 'C', text: "Rely on the account's public access block settings to catch external exposure." },
      { id: 'D', text: "Grant the application roles wildcard permissions and audit their use afterwards." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable IAM Access Analyzer to detect external sharing findings and use its CloudTrail policy generator to author least-privilege IAM policies. IAM Access Analyzer uses automated reasoning to mathematical prove access. It identifies resources (S3, IAM roles, KMS, SQS, Secrets Manager) accessible outside your organization. It also analyzes CloudTrail logs to generate least-privilege IAM policies containing only the actions actually used.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html",
    tags: ["IAM Access Analyzer","Access Analyzer","Data Protection"]
  },
  {
    id: "aws-scs-415",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Access Analyzer and Least-Privilege Policy Generation: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer needs to identify all S3 buckets, KMS keys, and IAM roles shared outside the corporate AWS Organization and generate right-sized policies.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense?",
    options: [
      { id: 'A', text: "IAM Access Analyzer for the external findings, with its policy generator" },
      { id: 'B', text: "Rely on the account's public access block settings to catch external exposure." },
      { id: 'C', text: "Grant the application roles wildcard permissions and audit their use afterwards." },
      { id: 'D', text: "Review each account's resource policies through a scheduled Config query." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable IAM Access Analyzer to detect external sharing findings and use its CloudTrail policy generator to author least-privilege IAM policies. IAM Access Analyzer uses automated reasoning to mathematical prove access. It identifies resources (S3, IAM roles, KMS, SQS, Secrets Manager) accessible outside your organization. It also analyzes CloudTrail logs to generate least-privilege IAM policies containing only the actions actually used.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html",
    tags: ["IAM Access Analyzer","Access Analyzer","Infrastructure Defense"]
  },
  {
    id: "aws-scs-416",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Multi-Factor Authentication (MFA) Enforcement in IAM Policies: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer needs to ensure that critical actions like terminating EC2 instances or deleting S3 objects can only be executed by users authenticated with hardware MFA.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives?",
    options: [
      { id: 'A', text: "An IAM Identity Center MFA policy requiring a second factor at sign-in." },
      { id: 'B', text: "An explicit `Deny` on those actions when `aws:MultiFactorAuthPresent` is false." },
      { id: 'C', text: "A permissions boundary on each role restricting it to read-only actions." },
      { id: 'D', text: "A Config rule that reports principals without an MFA device enrolled." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Include an explicit `Deny` block in IAM policies for target actions with condition `BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`. Enforcing MFA for sensitive API operations requires policy conditions. Attaching an explicit `Deny` condition (`BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`) ensures that API requests initiated via the AWS CLI or SDK without a valid MFA token session are rejected.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_my-sec-creds-self-manage.html",
    tags: ["MFA Enforcement","MFA Enforcement","Enterprise Governance"]
  },
  {
    id: "aws-scs-417",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Multi-Factor Authentication (MFA) Enforcement in IAM Policies: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer needs to ensure that critical actions like terminating EC2 instances or deleting S3 objects can only be executed by users authenticated with hardware MFA.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence?",
    options: [
      { id: 'A', text: "An explicit `Deny` on those actions when `aws:MultiFactorAuthPresent` is false." },
      { id: 'B', text: "An IAM Identity Center MFA policy requiring a second factor at sign-in." },
      { id: 'C', text: "A Config rule that reports principals without an MFA device enrolled." },
      { id: 'D', text: "A permissions boundary on each role restricting it to read-only actions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Include an explicit `Deny` block in IAM policies for target actions with condition `BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`. Enforcing MFA for sensitive API operations requires policy conditions. Attaching an explicit `Deny` condition (`BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`) ensures that API requests initiated via the AWS CLI or SDK without a valid MFA token session are rejected.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_my-sec-creds-self-manage.html",
    tags: ["MFA Enforcement","MFA Enforcement","Incident Containment"]
  },
  {
    id: "aws-scs-418",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Multi-Factor Authentication (MFA) Enforcement in IAM Policies: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer needs to ensure that critical actions like terminating EC2 instances or deleting S3 objects can only be executed by users authenticated with hardware MFA.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls?",
    options: [
      { id: 'A', text: "An explicit `Deny` on those actions when `aws:MultiFactorAuthPresent` is false." },
      { id: 'B', text: "An IAM Identity Center MFA policy requiring a second factor at sign-in." },
      { id: 'C', text: "A Config rule that reports principals without an MFA device enrolled." },
      { id: 'D', text: "A permissions boundary on each role restricting it to read-only actions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Include an explicit `Deny` block in IAM policies for target actions with condition `BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`. Enforcing MFA for sensitive API operations requires policy conditions. Attaching an explicit `Deny` condition (`BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`) ensures that API requests initiated via the AWS CLI or SDK without a valid MFA token session are rejected.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_my-sec-creds-self-manage.html",
    tags: ["MFA Enforcement","MFA Enforcement","Zero Trust Iam"]
  },
  {
    id: "aws-scs-419",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Multi-Factor Authentication (MFA) Enforcement in IAM Policies: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer needs to ensure that critical actions like terminating EC2 instances or deleting S3 objects can only be executed by users authenticated with hardware MFA.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity?",
    options: [
      { id: 'A', text: "An explicit `Deny` on those actions when `aws:MultiFactorAuthPresent` is false." },
      { id: 'B', text: "A Config rule that reports principals without an MFA device enrolled." },
      { id: 'C', text: "A permissions boundary on each role restricting it to read-only actions." },
      { id: 'D', text: "An IAM Identity Center MFA policy requiring a second factor at sign-in." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Include an explicit `Deny` block in IAM policies for target actions with condition `BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`. Enforcing MFA for sensitive API operations requires policy conditions. Attaching an explicit `Deny` condition (`BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`) ensures that API requests initiated via the AWS CLI or SDK without a valid MFA token session are rejected.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_my-sec-creds-self-manage.html",
    tags: ["MFA Enforcement","MFA Enforcement","Data Protection"]
  },
  {
    id: "aws-scs-420",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Multi-Factor Authentication (MFA) Enforcement in IAM Policies: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer needs to ensure that critical actions like terminating EC2 instances or deleting S3 objects can only be executed by users authenticated with hardware MFA.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense?",
    options: [
      { id: 'A', text: "An explicit `Deny` on those actions when `aws:MultiFactorAuthPresent` is false." },
      { id: 'B', text: "An IAM Identity Center MFA policy requiring a second factor at sign-in." },
      { id: 'C', text: "A Config rule that reports principals without an MFA device enrolled." },
      { id: 'D', text: "A permissions boundary on each role restricting it to read-only actions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Include an explicit `Deny` block in IAM policies for target actions with condition `BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`. Enforcing MFA for sensitive API operations requires policy conditions. Attaching an explicit `Deny` condition (`BoolIfExists: { 'aws:MultiFactorAuthPresent': 'false' }`) ensures that API requests initiated via the AWS CLI or SDK without a valid MFA token session are rejected.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_my-sec-creds-self-manage.html",
    tags: ["MFA Enforcement","MFA Enforcement","Infrastructure Defense"]
  },
  {
    id: "aws-scs-421",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS KMS Customer Managed Keys (CMKs) vs AWS Managed Keys: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer needs to control cryptographic key deletion schedules, enforce key policies, and enable automated annual key rotation.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives?",
    options: [
      { id: 'A', text: "Use the default AWS Managed Key (`aws/s3` or `aws/ebs`), which does not support custom key policies or cross-account access." },
      { id: 'B', text: "Create a Customer Managed Key (CMK) in AWS KMS, configure a custom key policy, and enable automatic annual key rotation." },
      { id: 'C', text: "Delete the KMS key immediately after encrypting data to prevent attackers from finding it." },
      { id: 'D', text: "Store unencrypted private keys in plaintext text files inside application code repositories." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a Customer Managed Key (CMK) in AWS KMS, configure a custom key policy, and enable automatic annual key rotation. Customer Managed Keys (CMKs) offer full administrative control: custom key policies, key grants, annual automatic rotation, cryptographic deletion waiting periods (7–30 days), and cross-account access. AWS Managed Keys cannot be shared across accounts and their key policies cannot be modified.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk",
    tags: ["AWS KMS Keys","KMS CMKs","Enterprise Governance"]
  },
  {
    id: "aws-scs-422",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS KMS Customer Managed Keys (CMKs) vs AWS Managed Keys: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer needs to control cryptographic key deletion schedules, enforce key policies, and enable automated annual key rotation.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence?",
    options: [
      { id: 'A', text: "Delete the KMS key immediately after encrypting data to prevent attackers from finding it." },
      { id: 'B', text: "Store unencrypted private keys in plaintext text files inside application code repositories." },
      { id: 'C', text: "Use the default AWS Managed Key (`aws/s3` or `aws/ebs`), which does not support custom key policies or cross-account access." },
      { id: 'D', text: "Create a Customer Managed Key (CMK) in AWS KMS, configure a custom key policy, and enable automatic annual key rotation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a Customer Managed Key (CMK) in AWS KMS, configure a custom key policy, and enable automatic annual key rotation. Customer Managed Keys (CMKs) offer full administrative control: custom key policies, key grants, annual automatic rotation, cryptographic deletion waiting periods (7–30 days), and cross-account access. AWS Managed Keys cannot be shared across accounts and their key policies cannot be modified.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk",
    tags: ["AWS KMS Keys","KMS CMKs","Incident Containment"]
  },
  {
    id: "aws-scs-423",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS KMS Customer Managed Keys (CMKs) vs AWS Managed Keys: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer needs to control cryptographic key deletion schedules, enforce key policies, and enable automated annual key rotation.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls?",
    options: [
      { id: 'A', text: "Create a Customer Managed Key (CMK) in AWS KMS, configure a custom key policy, and enable automatic annual key rotation." },
      { id: 'B', text: "Use the default AWS Managed Key (`aws/s3` or `aws/ebs`), which does not support custom key policies or cross-account access." },
      { id: 'C', text: "Store unencrypted private keys in plaintext text files inside application code repositories." },
      { id: 'D', text: "Delete the KMS key immediately after encrypting data to prevent attackers from finding it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Customer Managed Key (CMK) in AWS KMS, configure a custom key policy, and enable automatic annual key rotation. Customer Managed Keys (CMKs) offer full administrative control: custom key policies, key grants, annual automatic rotation, cryptographic deletion waiting periods (7–30 days), and cross-account access. AWS Managed Keys cannot be shared across accounts and their key policies cannot be modified.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk",
    tags: ["AWS KMS Keys","KMS CMKs","Zero Trust Iam"]
  },
  {
    id: "aws-scs-424",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS KMS Customer Managed Keys (CMKs) vs AWS Managed Keys: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer needs to control cryptographic key deletion schedules, enforce key policies, and enable automated annual key rotation.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity?",
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
    tags: ["AWS KMS Keys","KMS CMKs","Data Protection"]
  },
  {
    id: "aws-scs-425",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS KMS Customer Managed Keys (CMKs) vs AWS Managed Keys: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer needs to control cryptographic key deletion schedules, enforce key policies, and enable automated annual key rotation.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense?",
    options: [
      { id: 'A', text: "Delete the KMS key immediately after encrypting data to prevent attackers from finding it." },
      { id: 'B', text: "Create a Customer Managed Key (CMK) in AWS KMS, configure a custom key policy, and enable automatic annual key rotation." },
      { id: 'C', text: "Store unencrypted private keys in plaintext text files inside application code repositories." },
      { id: 'D', text: "Use the default AWS Managed Key (`aws/s3` or `aws/ebs`), which does not support custom key policies or cross-account access." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a Customer Managed Key (CMK) in AWS KMS, configure a custom key policy, and enable automatic annual key rotation. Customer Managed Keys (CMKs) offer full administrative control: custom key policies, key grants, annual automatic rotation, cryptographic deletion waiting periods (7–30 days), and cross-account access. AWS Managed Keys cannot be shared across accounts and their key policies cannot be modified.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk",
    tags: ["AWS KMS Keys","KMS CMKs","Infrastructure Defense"]
  }
];

export default AWS_SCS_QUESTIONS_17;
