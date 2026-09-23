export const AWS_SCS_QUESTIONS_16 = [
  {
    id: "aws-scs-376",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Transit Gateway Route Table Network Segmentation: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer needs to prevent workloads in development VPCs from initiating network connections to production databases while sharing common security services.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives?",
    options: [
      { id: 'A', text: "A dedicated route table per attachment, with no route between the two environments" },
      { id: 'B', text: "Create full-mesh VPC peering connections between all development and production VPCs." },
      { id: 'C', text: "Route all traffic through a single default route table that interconnects every subnet across the enterprise." },
      { id: 'D', text: "Disable network firewalls between development and production environments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate each VPC attachment with a dedicated Transit Gateway route table and omit routes between development and production VPCs. AWS Transit Gateway route tables act as virtual routing instances (VRFs). Platform engineers establish strict network segmentation by creating separate route tables (e.g., `Prod-RT`, `Dev-RT`, `Shared-RT`). Prod and Dev tables route only to Shared Services and the Internet, maintaining complete isolation from each other.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html",
    tags: ["Transit Gateway Isolation","Transit Gateway Isolation","Enterprise Governance"]
  },
  {
    id: "aws-scs-377",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Transit Gateway Route Table Network Segmentation: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer needs to prevent workloads in development VPCs from initiating network connections to production databases while sharing common security services.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence?",
    options: [
      { id: 'A', text: "Create full-mesh VPC peering connections between all development and production VPCs." },
      { id: 'B', text: "Route all traffic through a single default route table that interconnects every subnet across the enterprise." },
      { id: 'C', text: "A dedicated route table per attachment, with no route between the two environments" },
      { id: 'D', text: "Disable network firewalls between development and production environments." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Associate each VPC attachment with a dedicated Transit Gateway route table and omit routes between development and production VPCs. AWS Transit Gateway route tables act as virtual routing instances (VRFs). Platform engineers establish strict network segmentation by creating separate route tables (e.g., `Prod-RT`, `Dev-RT`, `Shared-RT`). Prod and Dev tables route only to Shared Services and the Internet, maintaining complete isolation from each other.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html",
    tags: ["Transit Gateway Isolation","Transit Gateway Isolation","Incident Containment"]
  },
  {
    id: "aws-scs-378",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Transit Gateway Route Table Network Segmentation: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer needs to prevent workloads in development VPCs from initiating network connections to production databases while sharing common security services.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls?",
    options: [
      { id: 'A', text: "Route all traffic through a single default route table that interconnects every subnet across the enterprise." },
      { id: 'B', text: "Disable network firewalls between development and production environments." },
      { id: 'C', text: "A dedicated route table per attachment, with no route between the two environments" },
      { id: 'D', text: "Create full-mesh VPC peering connections between all development and production VPCs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Associate each VPC attachment with a dedicated Transit Gateway route table and omit routes between development and production VPCs. AWS Transit Gateway route tables act as virtual routing instances (VRFs). Platform engineers establish strict network segmentation by creating separate route tables (e.g., `Prod-RT`, `Dev-RT`, `Shared-RT`). Prod and Dev tables route only to Shared Services and the Internet, maintaining complete isolation from each other.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html",
    tags: ["Transit Gateway Isolation","Transit Gateway Isolation","Zero Trust Iam"]
  },
  {
    id: "aws-scs-379",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Transit Gateway Route Table Network Segmentation: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer needs to prevent workloads in development VPCs from initiating network connections to production databases while sharing common security services.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity?",
    options: [
      { id: 'A', text: "A dedicated route table per attachment, with no route between the two environments" },
      { id: 'B', text: "Route all traffic through a single default route table that interconnects every subnet across the enterprise." },
      { id: 'C', text: "Disable network firewalls between development and production environments." },
      { id: 'D', text: "Create full-mesh VPC peering connections between all development and production VPCs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate each VPC attachment with a dedicated Transit Gateway route table and omit routes between development and production VPCs. AWS Transit Gateway route tables act as virtual routing instances (VRFs). Platform engineers establish strict network segmentation by creating separate route tables (e.g., `Prod-RT`, `Dev-RT`, `Shared-RT`). Prod and Dev tables route only to Shared Services and the Internet, maintaining complete isolation from each other.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html",
    tags: ["Transit Gateway Isolation","Transit Gateway Isolation","Data Protection"]
  },
  {
    id: "aws-scs-380",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Transit Gateway Route Table Network Segmentation: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer needs to prevent workloads in development VPCs from initiating network connections to production databases while sharing common security services.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense?",
    options: [
      { id: 'A', text: "A dedicated route table per attachment, with no route between the two environments" },
      { id: 'B', text: "Create full-mesh VPC peering connections between all development and production VPCs." },
      { id: 'C', text: "Route all traffic through a single default route table that interconnects every subnet across the enterprise." },
      { id: 'D', text: "Disable network firewalls between development and production environments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate each VPC attachment with a dedicated Transit Gateway route table and omit routes between development and production VPCs. AWS Transit Gateway route tables act as virtual routing instances (VRFs). Platform engineers establish strict network segmentation by creating separate route tables (e.g., `Prod-RT`, `Dev-RT`, `Shared-RT`). Prod and Dev tables route only to Shared Services and the Internet, maintaining complete isolation from each other.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html",
    tags: ["Transit Gateway Isolation","Transit Gateway Isolation","Infrastructure Defense"]
  },
  {
    id: "aws-scs-381",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Permission Boundaries for Delegated Administration: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer needs to allow development team leads to create IAM roles for their microservices without allowing them to escalate privileges to AdministratorAccess.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives?",
    options: [
      { id: 'A', text: "A permissions boundary on the developer roles, required on any role they create." },
      { id: 'B', text: "Grant developers unrestricted `iam:*` permissions across all AWS accounts." },
      { id: 'C', text: "Disable IAM role creation and force all microservices to share a single static access key." },
      { id: 'D', text: "Rely on annual code reviews to detect unauthorized administrative role creation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an IAM Permissions Boundary to developer roles, requiring any newly created role to have that boundary attached. An IAM Permissions Boundary defines the maximum permissions an IAM identity can have. By enforcing a condition (`iam:PermissionsBoundary`) on `iam:CreateRole`, administrators delegate role creation safely: developers can create roles, but those roles can never exceed the permissions boundary (preventing privilege escalation).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["IAM Permission Boundaries","Permissions Boundaries","Enterprise Governance"]
  },
  {
    id: "aws-scs-382",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Permission Boundaries for Delegated Administration: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer needs to allow development team leads to create IAM roles for their microservices without allowing them to escalate privileges to AdministratorAccess.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence?",
    options: [
      { id: 'A', text: "A permissions boundary on the developer roles, required on any role they create." },
      { id: 'B', text: "Rely on annual code reviews to detect unauthorized administrative role creation." },
      { id: 'C', text: "Grant developers unrestricted `iam:*` permissions across all AWS accounts." },
      { id: 'D', text: "Disable IAM role creation and force all microservices to share a single static access key." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an IAM Permissions Boundary to developer roles, requiring any newly created role to have that boundary attached. An IAM Permissions Boundary defines the maximum permissions an IAM identity can have. By enforcing a condition (`iam:PermissionsBoundary`) on `iam:CreateRole`, administrators delegate role creation safely: developers can create roles, but those roles can never exceed the permissions boundary (preventing privilege escalation).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["IAM Permission Boundaries","Permissions Boundaries","Incident Containment"]
  },
  {
    id: "aws-scs-383",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Permission Boundaries for Delegated Administration: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer needs to allow development team leads to create IAM roles for their microservices without allowing them to escalate privileges to AdministratorAccess.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls?",
    options: [
      { id: 'A', text: "A permissions boundary on the developer roles, required on any role they create." },
      { id: 'B', text: "Grant developers unrestricted `iam:*` permissions across all AWS accounts." },
      { id: 'C', text: "Disable IAM role creation and force all microservices to share a single static access key." },
      { id: 'D', text: "Rely on annual code reviews to detect unauthorized administrative role creation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an IAM Permissions Boundary to developer roles, requiring any newly created role to have that boundary attached. An IAM Permissions Boundary defines the maximum permissions an IAM identity can have. By enforcing a condition (`iam:PermissionsBoundary`) on `iam:CreateRole`, administrators delegate role creation safely: developers can create roles, but those roles can never exceed the permissions boundary (preventing privilege escalation).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["IAM Permission Boundaries","Permissions Boundaries","Zero Trust Iam"]
  },
  {
    id: "aws-scs-384",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Permission Boundaries for Delegated Administration: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer needs to allow development team leads to create IAM roles for their microservices without allowing them to escalate privileges to AdministratorAccess.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity?",
    options: [
      { id: 'A', text: "Disable IAM role creation and force all microservices to share a single static access key." },
      { id: 'B', text: "A permissions boundary on the developer roles, required on any role they create." },
      { id: 'C', text: "Grant developers unrestricted `iam:*` permissions across all AWS accounts." },
      { id: 'D', text: "Rely on annual code reviews to detect unauthorized administrative role creation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Attach an IAM Permissions Boundary to developer roles, requiring any newly created role to have that boundary attached. An IAM Permissions Boundary defines the maximum permissions an IAM identity can have. By enforcing a condition (`iam:PermissionsBoundary`) on `iam:CreateRole`, administrators delegate role creation safely: developers can create roles, but those roles can never exceed the permissions boundary (preventing privilege escalation).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["IAM Permission Boundaries","Permissions Boundaries","Data Protection"]
  },
  {
    id: "aws-scs-385",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Permission Boundaries for Delegated Administration: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer needs to allow development team leads to create IAM roles for their microservices without allowing them to escalate privileges to AdministratorAccess.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense?",
    options: [
      { id: 'A', text: "A permissions boundary on the developer roles, required on any role they create." },
      { id: 'B', text: "Grant developers unrestricted `iam:*` permissions across all AWS accounts." },
      { id: 'C', text: "Disable IAM role creation and force all microservices to share a single static access key." },
      { id: 'D', text: "Rely on annual code reviews to detect unauthorized administrative role creation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an IAM Permissions Boundary to developer roles, requiring any newly created role to have that boundary attached. An IAM Permissions Boundary defines the maximum permissions an IAM identity can have. By enforcing a condition (`iam:PermissionsBoundary`) on `iam:CreateRole`, administrators delegate role creation safely: developers can create roles, but those roles can never exceed the permissions boundary (preventing privilege escalation).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["IAM Permission Boundaries","Permissions Boundaries","Infrastructure Defense"]
  },
  {
    id: "aws-scs-386",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Security Foundations and Governance",
    title: "Service Control Policies (SCPs) in AWS Organizations: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer needs to prevent all member accounts in an AWS Organization from launching resources in unapproved geographic regions or disabling GuardDuty.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives?",
    options: [
      { id: 'A', text: "A permissions boundary on each role restricting it to the permitted regions." },
      { id: 'B', text: "An SCP denying the non-permitted regions and the security services' disablement." },
      { id: 'C', text: "A Config rule reporting resources created outside the permitted regions." },
      { id: 'D', text: "An IAM policy on each user denying the regions, applied by the account owner." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Attach an AWS Organizations Service Control Policy (SCP) with an explicit Deny on non-whitelisted regions and security service disablement. Service Control Policies (SCPs) define the maximum permissions for an organization or organizational unit (OU). An explicit `Deny` in an SCP overrides all IAM policies and applies to all principals, including the member account root user, establishing non-bypassable organizational guardrails.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
    tags: ["Organizations SCPs","Organizations SCPs","Enterprise Governance"]
  },
  {
    id: "aws-scs-387",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Security Foundations and Governance",
    title: "Service Control Policies (SCPs) in AWS Organizations: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer needs to prevent all member accounts in an AWS Organization from launching resources in unapproved geographic regions or disabling GuardDuty.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence?",
    options: [
      { id: 'A', text: "An SCP denying the non-permitted regions and the security services' disablement." },
      { id: 'B', text: "A permissions boundary on each role restricting it to the permitted regions." },
      { id: 'C', text: "An IAM policy on each user denying the regions, applied by the account owner." },
      { id: 'D', text: "A Config rule reporting resources created outside the permitted regions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an AWS Organizations Service Control Policy (SCP) with an explicit Deny on non-whitelisted regions and security service disablement. Service Control Policies (SCPs) define the maximum permissions for an organization or organizational unit (OU). An explicit `Deny` in an SCP overrides all IAM policies and applies to all principals, including the member account root user, establishing non-bypassable organizational guardrails.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
    tags: ["Organizations SCPs","Organizations SCPs","Incident Containment"]
  },
  {
    id: "aws-scs-388",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Security Foundations and Governance",
    title: "Service Control Policies (SCPs) in AWS Organizations: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer needs to prevent all member accounts in an AWS Organization from launching resources in unapproved geographic regions or disabling GuardDuty.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls?",
    options: [
      { id: 'A', text: "An SCP denying the non-permitted regions and the security services' disablement." },
      { id: 'B', text: "A permissions boundary on each role restricting it to the permitted regions." },
      { id: 'C', text: "An IAM policy on each user denying the regions, applied by the account owner." },
      { id: 'D', text: "A Config rule reporting resources created outside the permitted regions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an AWS Organizations Service Control Policy (SCP) with an explicit Deny on non-whitelisted regions and security service disablement. Service Control Policies (SCPs) define the maximum permissions for an organization or organizational unit (OU). An explicit `Deny` in an SCP overrides all IAM policies and applies to all principals, including the member account root user, establishing non-bypassable organizational guardrails.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
    tags: ["Organizations SCPs","Organizations SCPs","Zero Trust Iam"]
  },
  {
    id: "aws-scs-389",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Security Foundations and Governance",
    title: "Service Control Policies (SCPs) in AWS Organizations: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer needs to prevent all member accounts in an AWS Organization from launching resources in unapproved geographic regions or disabling GuardDuty.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity?",
    options: [
      { id: 'A', text: "A Config rule reporting resources created outside the permitted regions." },
      { id: 'B', text: "An SCP denying the non-permitted regions and the security services' disablement." },
      { id: 'C', text: "An IAM policy on each user denying the regions, applied by the account owner." },
      { id: 'D', text: "A permissions boundary on each role restricting it to the permitted regions." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Attach an AWS Organizations Service Control Policy (SCP) with an explicit Deny on non-whitelisted regions and security service disablement. Service Control Policies (SCPs) define the maximum permissions for an organization or organizational unit (OU). An explicit `Deny` in an SCP overrides all IAM policies and applies to all principals, including the member account root user, establishing non-bypassable organizational guardrails.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
    tags: ["Organizations SCPs","Organizations SCPs","Data Protection"]
  },
  {
    id: "aws-scs-390",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Security Foundations and Governance",
    title: "Service Control Policies (SCPs) in AWS Organizations: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer needs to prevent all member accounts in an AWS Organization from launching resources in unapproved geographic regions or disabling GuardDuty.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense?",
    options: [
      { id: 'A', text: "A Config rule reporting resources created outside the permitted regions." },
      { id: 'B', text: "An IAM policy on each user denying the regions, applied by the account owner." },
      { id: 'C', text: "A permissions boundary on each role restricting it to the permitted regions." },
      { id: 'D', text: "An SCP denying the non-permitted regions and the security services' disablement." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Attach an AWS Organizations Service Control Policy (SCP) with an explicit Deny on non-whitelisted regions and security service disablement. Service Control Policies (SCPs) define the maximum permissions for an organization or organizational unit (OU). An explicit `Deny` in an SCP overrides all IAM policies and applies to all principals, including the member account root user, establishing non-bypassable organizational guardrails.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
    tags: ["Organizations SCPs","Organizations SCPs","Infrastructure Defense"]
  },
  {
    id: "aws-scs-391",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Attribute-Based Access Control (ABAC) with IAM Tags: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer needs to grant developers access to manage only the EC2 instances, S3 buckets, and RDS databases matching their specific team tag.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives?",
    options: [
      { id: 'A', text: "RBAC with one IAM group per team and a managed policy attached to each of them." },
      { id: 'B', text: "One IAM policy per developer, listing the resource ARNs that developer may use." },
      { id: 'C', text: "One account per team, with a role in each that the developers assume as needed." },
      { id: 'D', text: "ABAC with a condition matching `aws:ResourceTag/Team` to `aws:PrincipalTag/Team`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement Attribute-Based Access Control (ABAC) using IAM policies with the condition `StringEquals: { 'aws:ResourceTag/Team': '${aws:PrincipalTag/Team}' }`. Attribute-Based Access Control (ABAC) scales access management by defining policies based on tags. Instead of updating policies when new resources or employees are added, the policy dynamically evaluates whether the principal's tag matches the resource's tag (`aws:PrincipalTag/Team == aws:ResourceTag/Team`).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html",
    tags: ["IAM ABAC","IAM ABAC","Enterprise Governance"]
  },
  {
    id: "aws-scs-392",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Attribute-Based Access Control (ABAC) with IAM Tags: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer needs to grant developers access to manage only the EC2 instances, S3 buckets, and RDS databases matching their specific team tag.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence?",
    options: [
      { id: 'A', text: "ABAC with a condition matching `aws:ResourceTag/Team` to `aws:PrincipalTag/Team`." },
      { id: 'B', text: "One IAM policy per developer, listing the resource ARNs that developer may use." },
      { id: 'C', text: "RBAC with one IAM group per team and a managed policy attached to each of them." },
      { id: 'D', text: "One account per team, with a role in each that the developers assume as needed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Attribute-Based Access Control (ABAC) using IAM policies with the condition `StringEquals: { 'aws:ResourceTag/Team': '${aws:PrincipalTag/Team}' }`. Attribute-Based Access Control (ABAC) scales access management by defining policies based on tags. Instead of updating policies when new resources or employees are added, the policy dynamically evaluates whether the principal's tag matches the resource's tag (`aws:PrincipalTag/Team == aws:ResourceTag/Team`).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html",
    tags: ["IAM ABAC","IAM ABAC","Incident Containment"]
  },
  {
    id: "aws-scs-393",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Attribute-Based Access Control (ABAC) with IAM Tags: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer needs to grant developers access to manage only the EC2 instances, S3 buckets, and RDS databases matching their specific team tag.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls?",
    options: [
      { id: 'A', text: "RBAC with one IAM group per team and a managed policy attached to each of them." },
      { id: 'B', text: "One account per team, with a role in each that the developers assume as needed." },
      { id: 'C', text: "ABAC with a condition matching `aws:ResourceTag/Team` to `aws:PrincipalTag/Team`." },
      { id: 'D', text: "One IAM policy per developer, listing the resource ARNs that developer may use." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement Attribute-Based Access Control (ABAC) using IAM policies with the condition `StringEquals: { 'aws:ResourceTag/Team': '${aws:PrincipalTag/Team}' }`. Attribute-Based Access Control (ABAC) scales access management by defining policies based on tags. Instead of updating policies when new resources or employees are added, the policy dynamically evaluates whether the principal's tag matches the resource's tag (`aws:PrincipalTag/Team == aws:ResourceTag/Team`).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html",
    tags: ["IAM ABAC","IAM ABAC","Zero Trust Iam"]
  },
  {
    id: "aws-scs-394",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Attribute-Based Access Control (ABAC) with IAM Tags: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer needs to grant developers access to manage only the EC2 instances, S3 buckets, and RDS databases matching their specific team tag.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity?",
    options: [
      { id: 'A', text: "ABAC with a condition matching `aws:ResourceTag/Team` to `aws:PrincipalTag/Team`." },
      { id: 'B', text: "RBAC with one IAM group per team and a managed policy attached to each of them." },
      { id: 'C', text: "One account per team, with a role in each that the developers assume as needed." },
      { id: 'D', text: "One IAM policy per developer, listing the resource ARNs that developer may use." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Attribute-Based Access Control (ABAC) using IAM policies with the condition `StringEquals: { 'aws:ResourceTag/Team': '${aws:PrincipalTag/Team}' }`. Attribute-Based Access Control (ABAC) scales access management by defining policies based on tags. Instead of updating policies when new resources or employees are added, the policy dynamically evaluates whether the principal's tag matches the resource's tag (`aws:PrincipalTag/Team == aws:ResourceTag/Team`).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html",
    tags: ["IAM ABAC","IAM ABAC","Data Protection"]
  },
  {
    id: "aws-scs-395",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Attribute-Based Access Control (ABAC) with IAM Tags: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer needs to grant developers access to manage only the EC2 instances, S3 buckets, and RDS databases matching their specific team tag.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense?",
    options: [
      { id: 'A', text: "RBAC with one IAM group per team and a managed policy attached to each of them." },
      { id: 'B', text: "ABAC with a condition matching `aws:ResourceTag/Team` to `aws:PrincipalTag/Team`." },
      { id: 'C', text: "One IAM policy per developer, listing the resource ARNs that developer may use." },
      { id: 'D', text: "One account per team, with a role in each that the developers assume as needed." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement Attribute-Based Access Control (ABAC) using IAM policies with the condition `StringEquals: { 'aws:ResourceTag/Team': '${aws:PrincipalTag/Team}' }`. Attribute-Based Access Control (ABAC) scales access management by defining policies based on tags. Instead of updating policies when new resources or employees are added, the policy dynamically evaluates whether the principal's tag matches the resource's tag (`aws:PrincipalTag/Team == aws:ResourceTag/Team`).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html",
    tags: ["IAM ABAC","IAM ABAC","Infrastructure Defense"]
  },
  {
    id: "aws-scs-396",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "AWS IAM Identity Center (SSO) and Permission Sets: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer needs to manage human access across 200 AWS accounts through corporate Okta or Azure AD with automated user offboarding.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives?",
    options: [
      { id: 'A', text: "IAM Identity Center with the built-in directory and one permission set for all." },
      { id: 'B', text: "IAM users created in each account, with a password policy and enforced MFA." },
      { id: 'C', text: "IAM Identity Center with SCIM synchronisation and scoped permission sets per account." },
      { id: 'D', text: "A single hub account holding the users, with roles assumed into the others." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure AWS IAM Identity Center (AWS SSO) with SCIM identity synchronization and assign scoped Permission Sets across accounts. AWS IAM Identity Center (successor to AWS Single Sign-On) centralizes workforce authentication. It integrates with corporate IdPs via SAML 2.0 and SCIM (for automatic user provisioning/deprovisioning) and manages multi-account access through reusable, temporary credential Permission Sets.",
    referenceUrl: "https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html",
    tags: ["IAM Identity Center","IAM Identity Center","Enterprise Governance"]
  },
  {
    id: "aws-scs-397",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "AWS IAM Identity Center (SSO) and Permission Sets: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer needs to manage human access across 200 AWS accounts through corporate Okta or Azure AD with automated user offboarding.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence?",
    options: [
      { id: 'A', text: "IAM Identity Center with SCIM synchronisation and scoped permission sets per account." },
      { id: 'B', text: "IAM users created in each account, with a password policy and enforced MFA." },
      { id: 'C', text: "A single hub account holding the users, with roles assumed into the others." },
      { id: 'D', text: "IAM Identity Center with the built-in directory and one permission set for all." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS IAM Identity Center (AWS SSO) with SCIM identity synchronization and assign scoped Permission Sets across accounts. AWS IAM Identity Center (successor to AWS Single Sign-On) centralizes workforce authentication. It integrates with corporate IdPs via SAML 2.0 and SCIM (for automatic user provisioning/deprovisioning) and manages multi-account access through reusable, temporary credential Permission Sets.",
    referenceUrl: "https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html",
    tags: ["IAM Identity Center","IAM Identity Center","Incident Containment"]
  },
  {
    id: "aws-scs-398",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "AWS IAM Identity Center (SSO) and Permission Sets: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer needs to manage human access across 200 AWS accounts through corporate Okta or Azure AD with automated user offboarding.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls?",
    options: [
      { id: 'A', text: "IAM users created in each account, with a password policy and enforced MFA." },
      { id: 'B', text: "A single hub account holding the users, with roles assumed into the others." },
      { id: 'C', text: "IAM Identity Center with SCIM synchronisation and scoped permission sets per account." },
      { id: 'D', text: "IAM Identity Center with the built-in directory and one permission set for all." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure AWS IAM Identity Center (AWS SSO) with SCIM identity synchronization and assign scoped Permission Sets across accounts. AWS IAM Identity Center (successor to AWS Single Sign-On) centralizes workforce authentication. It integrates with corporate IdPs via SAML 2.0 and SCIM (for automatic user provisioning/deprovisioning) and manages multi-account access through reusable, temporary credential Permission Sets.",
    referenceUrl: "https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html",
    tags: ["IAM Identity Center","IAM Identity Center","Zero Trust Iam"]
  },
  {
    id: "aws-scs-399",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "AWS IAM Identity Center (SSO) and Permission Sets: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer needs to manage human access across 200 AWS accounts through corporate Okta or Azure AD with automated user offboarding.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity?",
    options: [
      { id: 'A', text: "IAM Identity Center with SCIM synchronisation and scoped permission sets per account." },
      { id: 'B', text: "IAM users created in each account, with a password policy and enforced MFA." },
      { id: 'C', text: "A single hub account holding the users, with roles assumed into the others." },
      { id: 'D', text: "IAM Identity Center with the built-in directory and one permission set for all." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS IAM Identity Center (AWS SSO) with SCIM identity synchronization and assign scoped Permission Sets across accounts. AWS IAM Identity Center (successor to AWS Single Sign-On) centralizes workforce authentication. It integrates with corporate IdPs via SAML 2.0 and SCIM (for automatic user provisioning/deprovisioning) and manages multi-account access through reusable, temporary credential Permission Sets.",
    referenceUrl: "https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html",
    tags: ["IAM Identity Center","IAM Identity Center","Data Protection"]
  },
  {
    id: "aws-scs-400",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "AWS IAM Identity Center (SSO) and Permission Sets: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer needs to manage human access across 200 AWS accounts through corporate Okta or Azure AD with automated user offboarding.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense?",
    options: [
      { id: 'A', text: "IAM Identity Center with SCIM synchronisation and scoped permission sets per account." },
      { id: 'B', text: "IAM users created in each account, with a password policy and enforced MFA." },
      { id: 'C', text: "A single hub account holding the users, with roles assumed into the others." },
      { id: 'D', text: "IAM Identity Center with the built-in directory and one permission set for all." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS IAM Identity Center (AWS SSO) with SCIM identity synchronization and assign scoped Permission Sets across accounts. AWS IAM Identity Center (successor to AWS Single Sign-On) centralizes workforce authentication. It integrates with corporate IdPs via SAML 2.0 and SCIM (for automatic user provisioning/deprovisioning) and manages multi-account access through reusable, temporary credential Permission Sets.",
    referenceUrl: "https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html",
    tags: ["IAM Identity Center","IAM Identity Center","Infrastructure Defense"]
  }
];

export default AWS_SCS_QUESTIONS_16;
