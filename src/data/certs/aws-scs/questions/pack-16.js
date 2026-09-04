export const AWS_SCS_QUESTIONS_16 = [
  {
    id: "aws-scs-376",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Transit Gateway Route Table Network Segmentation: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates Transit Gateway Isolation to prevent workloads in development VPCs from initiating network connections to production databases while sharing common security services.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Isolating Production, Development, and Shared Services VPCs via dedicated TGW route tables is under consideration.",
    options: [
      { id: 'A', text: "Associate each VPC attachment with a dedicated Transit Gateway route table and omit routes between development and production VPCs." },
      { id: 'B', text: "Create full-mesh VPC peering connections between all development and production VPCs." },
      { id: 'C', text: "Route all traffic through a single default route table that interconnects every subnet across the enterprise." },
      { id: 'D', text: "Disable network firewalls between development and production environments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate each VPC attachment with a dedicated Transit Gateway route table and omit routes between development and production VPCs. AWS Transit Gateway route tables act as virtual routing instances (VRFs). Platform engineers establish strict network segmentation by creating separate route tables (e.g., `Prod-RT`, `Dev-RT`, `Shared-RT`). Prod and Dev tables route only to Shared Services and the Internet, maintaining complete isolation from each other.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html",
    tags: ["Transit Gateway Isolation", "Transit Gateway Isolation", "Enterprise Governance"]
  },
  {
    id: "aws-scs-377",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Transit Gateway Route Table Network Segmentation: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates Transit Gateway Isolation to prevent workloads in development VPCs from initiating network connections to production databases while sharing common security services.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Isolating Production, Development, and Shared Services VPCs via dedicated TGW route tables is under consideration.",
    options: [
      { id: 'A', text: "Associate each VPC attachment with a dedicated Transit Gateway route table and omit routes between development and production VPCs." },
      { id: 'B', text: "Create full-mesh VPC peering connections between all development and production VPCs." },
      { id: 'C', text: "Route all traffic through a single default route table that interconnects every subnet across the enterprise." },
      { id: 'D', text: "Disable network firewalls between development and production environments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate each VPC attachment with a dedicated Transit Gateway route table and omit routes between development and production VPCs. AWS Transit Gateway route tables act as virtual routing instances (VRFs). Platform engineers establish strict network segmentation by creating separate route tables (e.g., `Prod-RT`, `Dev-RT`, `Shared-RT`). Prod and Dev tables route only to Shared Services and the Internet, maintaining complete isolation from each other.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html",
    tags: ["Transit Gateway Isolation", "Transit Gateway Isolation", "Incident Containment"]
  },
  {
    id: "aws-scs-378",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Transit Gateway Route Table Network Segmentation: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates Transit Gateway Isolation to prevent workloads in development VPCs from initiating network connections to production databases while sharing common security services.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Isolating Production, Development, and Shared Services VPCs via dedicated TGW route tables is under consideration.",
    options: [
      { id: 'A', text: "Associate each VPC attachment with a dedicated Transit Gateway route table and omit routes between development and production VPCs." },
      { id: 'B', text: "Create full-mesh VPC peering connections between all development and production VPCs." },
      { id: 'C', text: "Route all traffic through a single default route table that interconnects every subnet across the enterprise." },
      { id: 'D', text: "Disable network firewalls between development and production environments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate each VPC attachment with a dedicated Transit Gateway route table and omit routes between development and production VPCs. AWS Transit Gateway route tables act as virtual routing instances (VRFs). Platform engineers establish strict network segmentation by creating separate route tables (e.g., `Prod-RT`, `Dev-RT`, `Shared-RT`). Prod and Dev tables route only to Shared Services and the Internet, maintaining complete isolation from each other.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html",
    tags: ["Transit Gateway Isolation", "Transit Gateway Isolation", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-379",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Transit Gateway Route Table Network Segmentation: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates Transit Gateway Isolation to prevent workloads in development VPCs from initiating network connections to production databases while sharing common security services.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Isolating Production, Development, and Shared Services VPCs via dedicated TGW route tables is under consideration.",
    options: [
      { id: 'A', text: "Associate each VPC attachment with a dedicated Transit Gateway route table and omit routes between development and production VPCs." },
      { id: 'B', text: "Create full-mesh VPC peering connections between all development and production VPCs." },
      { id: 'C', text: "Route all traffic through a single default route table that interconnects every subnet across the enterprise." },
      { id: 'D', text: "Disable network firewalls between development and production environments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate each VPC attachment with a dedicated Transit Gateway route table and omit routes between development and production VPCs. AWS Transit Gateway route tables act as virtual routing instances (VRFs). Platform engineers establish strict network segmentation by creating separate route tables (e.g., `Prod-RT`, `Dev-RT`, `Shared-RT`). Prod and Dev tables route only to Shared Services and the Internet, maintaining complete isolation from each other.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html",
    tags: ["Transit Gateway Isolation", "Transit Gateway Isolation", "Data Protection"]
  },
  {
    id: "aws-scs-380",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Transit Gateway Route Table Network Segmentation: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates Transit Gateway Isolation to prevent workloads in development VPCs from initiating network connections to production databases while sharing common security services.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Isolating Production, Development, and Shared Services VPCs via dedicated TGW route tables is under consideration.",
    options: [
      { id: 'A', text: "Associate each VPC attachment with a dedicated Transit Gateway route table and omit routes between development and production VPCs." },
      { id: 'B', text: "Create full-mesh VPC peering connections between all development and production VPCs." },
      { id: 'C', text: "Route all traffic through a single default route table that interconnects every subnet across the enterprise." },
      { id: 'D', text: "Disable network firewalls between development and production environments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate each VPC attachment with a dedicated Transit Gateway route table and omit routes between development and production VPCs. AWS Transit Gateway route tables act as virtual routing instances (VRFs). Platform engineers establish strict network segmentation by creating separate route tables (e.g., `Prod-RT`, `Dev-RT`, `Shared-RT`). Prod and Dev tables route only to Shared Services and the Internet, maintaining complete isolation from each other.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html",
    tags: ["Transit Gateway Isolation", "Transit Gateway Isolation", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-381",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Permission Boundaries for Delegated Administration: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates IAM Permission Boundaries to allow development team leads to create IAM roles for their microservices without allowing them to escalate privileges to AdministratorAccess.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Setting maximum permissions boundary policies for delegated IAM role creation is under consideration.",
    options: [
      { id: 'A', text: "Attach an IAM Permissions Boundary to developer roles, requiring any newly created role to have that boundary attached." },
      { id: 'B', text: "Grant developers unrestricted `iam:*` permissions across all AWS accounts." },
      { id: 'C', text: "Disable IAM role creation and force all microservices to share a single static access key." },
      { id: 'D', text: "Rely on annual code reviews to detect unauthorized administrative role creation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an IAM Permissions Boundary to developer roles, requiring any newly created role to have that boundary attached. An IAM Permissions Boundary defines the maximum permissions an IAM identity can have. By enforcing a condition (`iam:PermissionsBoundary`) on `iam:CreateRole`, administrators delegate role creation safely: developers can create roles, but those roles can never exceed the permissions boundary (preventing privilege escalation).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["IAM Permission Boundaries", "Permissions Boundaries", "Enterprise Governance"]
  },
  {
    id: "aws-scs-382",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Permission Boundaries for Delegated Administration: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates IAM Permission Boundaries to allow development team leads to create IAM roles for their microservices without allowing them to escalate privileges to AdministratorAccess.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Setting maximum permissions boundary policies for delegated IAM role creation is under consideration.",
    options: [
      { id: 'A', text: "Attach an IAM Permissions Boundary to developer roles, requiring any newly created role to have that boundary attached." },
      { id: 'B', text: "Grant developers unrestricted `iam:*` permissions across all AWS accounts." },
      { id: 'C', text: "Disable IAM role creation and force all microservices to share a single static access key." },
      { id: 'D', text: "Rely on annual code reviews to detect unauthorized administrative role creation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an IAM Permissions Boundary to developer roles, requiring any newly created role to have that boundary attached. An IAM Permissions Boundary defines the maximum permissions an IAM identity can have. By enforcing a condition (`iam:PermissionsBoundary`) on `iam:CreateRole`, administrators delegate role creation safely: developers can create roles, but those roles can never exceed the permissions boundary (preventing privilege escalation).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["IAM Permission Boundaries", "Permissions Boundaries", "Incident Containment"]
  },
  {
    id: "aws-scs-383",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Permission Boundaries for Delegated Administration: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates IAM Permission Boundaries to allow development team leads to create IAM roles for their microservices without allowing them to escalate privileges to AdministratorAccess.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Setting maximum permissions boundary policies for delegated IAM role creation is under consideration.",
    options: [
      { id: 'A', text: "Attach an IAM Permissions Boundary to developer roles, requiring any newly created role to have that boundary attached." },
      { id: 'B', text: "Grant developers unrestricted `iam:*` permissions across all AWS accounts." },
      { id: 'C', text: "Disable IAM role creation and force all microservices to share a single static access key." },
      { id: 'D', text: "Rely on annual code reviews to detect unauthorized administrative role creation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an IAM Permissions Boundary to developer roles, requiring any newly created role to have that boundary attached. An IAM Permissions Boundary defines the maximum permissions an IAM identity can have. By enforcing a condition (`iam:PermissionsBoundary`) on `iam:CreateRole`, administrators delegate role creation safely: developers can create roles, but those roles can never exceed the permissions boundary (preventing privilege escalation).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["IAM Permission Boundaries", "Permissions Boundaries", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-384",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Permission Boundaries for Delegated Administration: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates IAM Permission Boundaries to allow development team leads to create IAM roles for their microservices without allowing them to escalate privileges to AdministratorAccess.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Setting maximum permissions boundary policies for delegated IAM role creation is under consideration.",
    options: [
      { id: 'A', text: "Attach an IAM Permissions Boundary to developer roles, requiring any newly created role to have that boundary attached." },
      { id: 'B', text: "Grant developers unrestricted `iam:*` permissions across all AWS accounts." },
      { id: 'C', text: "Disable IAM role creation and force all microservices to share a single static access key." },
      { id: 'D', text: "Rely on annual code reviews to detect unauthorized administrative role creation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an IAM Permissions Boundary to developer roles, requiring any newly created role to have that boundary attached. An IAM Permissions Boundary defines the maximum permissions an IAM identity can have. By enforcing a condition (`iam:PermissionsBoundary`) on `iam:CreateRole`, administrators delegate role creation safely: developers can create roles, but those roles can never exceed the permissions boundary (preventing privilege escalation).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["IAM Permission Boundaries", "Permissions Boundaries", "Data Protection"]
  },
  {
    id: "aws-scs-385",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Permission Boundaries for Delegated Administration: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates IAM Permission Boundaries to allow development team leads to create IAM roles for their microservices without allowing them to escalate privileges to AdministratorAccess.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Setting maximum permissions boundary policies for delegated IAM role creation is under consideration.",
    options: [
      { id: 'A', text: "Attach an IAM Permissions Boundary to developer roles, requiring any newly created role to have that boundary attached." },
      { id: 'B', text: "Grant developers unrestricted `iam:*` permissions across all AWS accounts." },
      { id: 'C', text: "Disable IAM role creation and force all microservices to share a single static access key." },
      { id: 'D', text: "Rely on annual code reviews to detect unauthorized administrative role creation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an IAM Permissions Boundary to developer roles, requiring any newly created role to have that boundary attached. An IAM Permissions Boundary defines the maximum permissions an IAM identity can have. By enforcing a condition (`iam:PermissionsBoundary`) on `iam:CreateRole`, administrators delegate role creation safely: developers can create roles, but those roles can never exceed the permissions boundary (preventing privilege escalation).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["IAM Permission Boundaries", "Permissions Boundaries", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-386",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Service Control Policies (SCPs) in AWS Organizations: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates Organizations SCPs to prevent all member accounts in an AWS Organization from launching resources in unapproved geographic regions or disabling GuardDuty.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Preventive organization guardrails enforcing region restrictions and protecting security tools is under consideration.",
    options: [
      { id: 'A', text: "Attach an AWS Organizations Service Control Policy (SCP) with an explicit Deny on non-whitelisted regions and security service disablement." },
      { id: 'B', text: "Configure IAM policies on individual users in each account, leaving root accounts unrestricted." },
      { id: 'C', text: "Send an executive email memo asking developers not to use overseas AWS regions." },
      { id: 'D', text: "Rely on billing alerts to discover resources deployed in unapproved regions weeks after deployment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an AWS Organizations Service Control Policy (SCP) with an explicit Deny on non-whitelisted regions and security service disablement. Service Control Policies (SCPs) define the maximum permissions for an organization or organizational unit (OU). An explicit `Deny` in an SCP overrides all IAM policies and applies to all principals, including the member account root user, establishing non-bypassable organizational guardrails.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
    tags: ["Organizations SCPs", "Organizations SCPs", "Enterprise Governance"]
  },
  {
    id: "aws-scs-387",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Service Control Policies (SCPs) in AWS Organizations: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates Organizations SCPs to prevent all member accounts in an AWS Organization from launching resources in unapproved geographic regions or disabling GuardDuty.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Preventive organization guardrails enforcing region restrictions and protecting security tools is under consideration.",
    options: [
      { id: 'A', text: "Attach an AWS Organizations Service Control Policy (SCP) with an explicit Deny on non-whitelisted regions and security service disablement." },
      { id: 'B', text: "Configure IAM policies on individual users in each account, leaving root accounts unrestricted." },
      { id: 'C', text: "Send an executive email memo asking developers not to use overseas AWS regions." },
      { id: 'D', text: "Rely on billing alerts to discover resources deployed in unapproved regions weeks after deployment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an AWS Organizations Service Control Policy (SCP) with an explicit Deny on non-whitelisted regions and security service disablement. Service Control Policies (SCPs) define the maximum permissions for an organization or organizational unit (OU). An explicit `Deny` in an SCP overrides all IAM policies and applies to all principals, including the member account root user, establishing non-bypassable organizational guardrails.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
    tags: ["Organizations SCPs", "Organizations SCPs", "Incident Containment"]
  },
  {
    id: "aws-scs-388",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Service Control Policies (SCPs) in AWS Organizations: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates Organizations SCPs to prevent all member accounts in an AWS Organization from launching resources in unapproved geographic regions or disabling GuardDuty.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Preventive organization guardrails enforcing region restrictions and protecting security tools is under consideration.",
    options: [
      { id: 'A', text: "Attach an AWS Organizations Service Control Policy (SCP) with an explicit Deny on non-whitelisted regions and security service disablement." },
      { id: 'B', text: "Configure IAM policies on individual users in each account, leaving root accounts unrestricted." },
      { id: 'C', text: "Send an executive email memo asking developers not to use overseas AWS regions." },
      { id: 'D', text: "Rely on billing alerts to discover resources deployed in unapproved regions weeks after deployment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an AWS Organizations Service Control Policy (SCP) with an explicit Deny on non-whitelisted regions and security service disablement. Service Control Policies (SCPs) define the maximum permissions for an organization or organizational unit (OU). An explicit `Deny` in an SCP overrides all IAM policies and applies to all principals, including the member account root user, establishing non-bypassable organizational guardrails.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
    tags: ["Organizations SCPs", "Organizations SCPs", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-389",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Service Control Policies (SCPs) in AWS Organizations: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates Organizations SCPs to prevent all member accounts in an AWS Organization from launching resources in unapproved geographic regions or disabling GuardDuty.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Preventive organization guardrails enforcing region restrictions and protecting security tools is under consideration.",
    options: [
      { id: 'A', text: "Attach an AWS Organizations Service Control Policy (SCP) with an explicit Deny on non-whitelisted regions and security service disablement." },
      { id: 'B', text: "Configure IAM policies on individual users in each account, leaving root accounts unrestricted." },
      { id: 'C', text: "Send an executive email memo asking developers not to use overseas AWS regions." },
      { id: 'D', text: "Rely on billing alerts to discover resources deployed in unapproved regions weeks after deployment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an AWS Organizations Service Control Policy (SCP) with an explicit Deny on non-whitelisted regions and security service disablement. Service Control Policies (SCPs) define the maximum permissions for an organization or organizational unit (OU). An explicit `Deny` in an SCP overrides all IAM policies and applies to all principals, including the member account root user, establishing non-bypassable organizational guardrails.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
    tags: ["Organizations SCPs", "Organizations SCPs", "Data Protection"]
  },
  {
    id: "aws-scs-390",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Service Control Policies (SCPs) in AWS Organizations: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates Organizations SCPs to prevent all member accounts in an AWS Organization from launching resources in unapproved geographic regions or disabling GuardDuty.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Preventive organization guardrails enforcing region restrictions and protecting security tools is under consideration.",
    options: [
      { id: 'A', text: "Attach an AWS Organizations Service Control Policy (SCP) with an explicit Deny on non-whitelisted regions and security service disablement." },
      { id: 'B', text: "Configure IAM policies on individual users in each account, leaving root accounts unrestricted." },
      { id: 'C', text: "Send an executive email memo asking developers not to use overseas AWS regions." },
      { id: 'D', text: "Rely on billing alerts to discover resources deployed in unapproved regions weeks after deployment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an AWS Organizations Service Control Policy (SCP) with an explicit Deny on non-whitelisted regions and security service disablement. Service Control Policies (SCPs) define the maximum permissions for an organization or organizational unit (OU). An explicit `Deny` in an SCP overrides all IAM policies and applies to all principals, including the member account root user, establishing non-bypassable organizational guardrails.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
    tags: ["Organizations SCPs", "Organizations SCPs", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-391",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Attribute-Based Access Control (ABAC) with IAM Tags: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates IAM ABAC to grant developers access to manage only the EC2 instances, S3 buckets, and RDS databases matching their specific team tag.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Dynamic authorization using aws:PrincipalTag and aws:ResourceTag conditions is under consideration.",
    options: [
      { id: 'A', text: "Implement Attribute-Based Access Control (ABAC) using IAM policies with the condition `StringEquals: { 'aws:ResourceTag/Team': '${aws:PrincipalTag/Team}' }`." },
      { id: 'B', text: "Create hundreds of bespoke IAM policies listing explicit resource ARNs for every developer." },
      { id: 'C', text: "Grant all developers unrestricted access to all resources regardless of project ownership." },
      { id: 'D', text: "Require developers to switch AWS accounts for every individual resource modification." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Attribute-Based Access Control (ABAC) using IAM policies with the condition `StringEquals: { 'aws:ResourceTag/Team': '${aws:PrincipalTag/Team}' }`. Attribute-Based Access Control (ABAC) scales access management by defining policies based on tags. Instead of updating policies when new resources or employees are added, the policy dynamically evaluates whether the principal's tag matches the resource's tag (`aws:PrincipalTag/Team == aws:ResourceTag/Team`).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html",
    tags: ["IAM ABAC", "IAM ABAC", "Enterprise Governance"]
  },
  {
    id: "aws-scs-392",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Attribute-Based Access Control (ABAC) with IAM Tags: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates IAM ABAC to grant developers access to manage only the EC2 instances, S3 buckets, and RDS databases matching their specific team tag.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Dynamic authorization using aws:PrincipalTag and aws:ResourceTag conditions is under consideration.",
    options: [
      { id: 'A', text: "Implement Attribute-Based Access Control (ABAC) using IAM policies with the condition `StringEquals: { 'aws:ResourceTag/Team': '${aws:PrincipalTag/Team}' }`." },
      { id: 'B', text: "Create hundreds of bespoke IAM policies listing explicit resource ARNs for every developer." },
      { id: 'C', text: "Grant all developers unrestricted access to all resources regardless of project ownership." },
      { id: 'D', text: "Require developers to switch AWS accounts for every individual resource modification." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Attribute-Based Access Control (ABAC) using IAM policies with the condition `StringEquals: { 'aws:ResourceTag/Team': '${aws:PrincipalTag/Team}' }`. Attribute-Based Access Control (ABAC) scales access management by defining policies based on tags. Instead of updating policies when new resources or employees are added, the policy dynamically evaluates whether the principal's tag matches the resource's tag (`aws:PrincipalTag/Team == aws:ResourceTag/Team`).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html",
    tags: ["IAM ABAC", "IAM ABAC", "Incident Containment"]
  },
  {
    id: "aws-scs-393",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Attribute-Based Access Control (ABAC) with IAM Tags: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates IAM ABAC to grant developers access to manage only the EC2 instances, S3 buckets, and RDS databases matching their specific team tag.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Dynamic authorization using aws:PrincipalTag and aws:ResourceTag conditions is under consideration.",
    options: [
      { id: 'A', text: "Implement Attribute-Based Access Control (ABAC) using IAM policies with the condition `StringEquals: { 'aws:ResourceTag/Team': '${aws:PrincipalTag/Team}' }`." },
      { id: 'B', text: "Create hundreds of bespoke IAM policies listing explicit resource ARNs for every developer." },
      { id: 'C', text: "Grant all developers unrestricted access to all resources regardless of project ownership." },
      { id: 'D', text: "Require developers to switch AWS accounts for every individual resource modification." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Attribute-Based Access Control (ABAC) using IAM policies with the condition `StringEquals: { 'aws:ResourceTag/Team': '${aws:PrincipalTag/Team}' }`. Attribute-Based Access Control (ABAC) scales access management by defining policies based on tags. Instead of updating policies when new resources or employees are added, the policy dynamically evaluates whether the principal's tag matches the resource's tag (`aws:PrincipalTag/Team == aws:ResourceTag/Team`).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html",
    tags: ["IAM ABAC", "IAM ABAC", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-394",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Attribute-Based Access Control (ABAC) with IAM Tags: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates IAM ABAC to grant developers access to manage only the EC2 instances, S3 buckets, and RDS databases matching their specific team tag.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Dynamic authorization using aws:PrincipalTag and aws:ResourceTag conditions is under consideration.",
    options: [
      { id: 'A', text: "Implement Attribute-Based Access Control (ABAC) using IAM policies with the condition `StringEquals: { 'aws:ResourceTag/Team': '${aws:PrincipalTag/Team}' }`." },
      { id: 'B', text: "Create hundreds of bespoke IAM policies listing explicit resource ARNs for every developer." },
      { id: 'C', text: "Grant all developers unrestricted access to all resources regardless of project ownership." },
      { id: 'D', text: "Require developers to switch AWS accounts for every individual resource modification." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Attribute-Based Access Control (ABAC) using IAM policies with the condition `StringEquals: { 'aws:ResourceTag/Team': '${aws:PrincipalTag/Team}' }`. Attribute-Based Access Control (ABAC) scales access management by defining policies based on tags. Instead of updating policies when new resources or employees are added, the policy dynamically evaluates whether the principal's tag matches the resource's tag (`aws:PrincipalTag/Team == aws:ResourceTag/Team`).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html",
    tags: ["IAM ABAC", "IAM ABAC", "Data Protection"]
  },
  {
    id: "aws-scs-395",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Attribute-Based Access Control (ABAC) with IAM Tags: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates IAM ABAC to grant developers access to manage only the EC2 instances, S3 buckets, and RDS databases matching their specific team tag.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Dynamic authorization using aws:PrincipalTag and aws:ResourceTag conditions is under consideration.",
    options: [
      { id: 'A', text: "Implement Attribute-Based Access Control (ABAC) using IAM policies with the condition `StringEquals: { 'aws:ResourceTag/Team': '${aws:PrincipalTag/Team}' }`." },
      { id: 'B', text: "Create hundreds of bespoke IAM policies listing explicit resource ARNs for every developer." },
      { id: 'C', text: "Grant all developers unrestricted access to all resources regardless of project ownership." },
      { id: 'D', text: "Require developers to switch AWS accounts for every individual resource modification." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Attribute-Based Access Control (ABAC) using IAM policies with the condition `StringEquals: { 'aws:ResourceTag/Team': '${aws:PrincipalTag/Team}' }`. Attribute-Based Access Control (ABAC) scales access management by defining policies based on tags. Instead of updating policies when new resources or employees are added, the policy dynamically evaluates whether the principal's tag matches the resource's tag (`aws:PrincipalTag/Team == aws:ResourceTag/Team`).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html",
    tags: ["IAM ABAC", "IAM ABAC", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-396",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "AWS IAM Identity Center (SSO) and Permission Sets: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates IAM Identity Center to manage human access across 200 AWS accounts through corporate Okta or Azure AD with automated user offboarding.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Federating corporate IdP via SAML/SCIM and deploying multi-account Permission Sets is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS IAM Identity Center (AWS SSO) with SCIM identity synchronization and assign scoped Permission Sets across accounts." },
      { id: 'B', text: "Create local IAM users with static passwords in every individual AWS account." },
      { id: 'C', text: "Distribute a shared master root password spreadsheet to all developers." },
      { id: 'D', text: "Allow developers to access production accounts without multi-factor authentication." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS IAM Identity Center (AWS SSO) with SCIM identity synchronization and assign scoped Permission Sets across accounts. AWS IAM Identity Center (successor to AWS Single Sign-On) centralizes workforce authentication. It integrates with corporate IdPs via SAML 2.0 and SCIM (for automatic user provisioning/deprovisioning) and manages multi-account access through reusable, temporary credential Permission Sets.",
    referenceUrl: "https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html",
    tags: ["IAM Identity Center", "IAM Identity Center", "Enterprise Governance"]
  },
  {
    id: "aws-scs-397",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "AWS IAM Identity Center (SSO) and Permission Sets: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates IAM Identity Center to manage human access across 200 AWS accounts through corporate Okta or Azure AD with automated user offboarding.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Federating corporate IdP via SAML/SCIM and deploying multi-account Permission Sets is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS IAM Identity Center (AWS SSO) with SCIM identity synchronization and assign scoped Permission Sets across accounts." },
      { id: 'B', text: "Create local IAM users with static passwords in every individual AWS account." },
      { id: 'C', text: "Distribute a shared master root password spreadsheet to all developers." },
      { id: 'D', text: "Allow developers to access production accounts without multi-factor authentication." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS IAM Identity Center (AWS SSO) with SCIM identity synchronization and assign scoped Permission Sets across accounts. AWS IAM Identity Center (successor to AWS Single Sign-On) centralizes workforce authentication. It integrates with corporate IdPs via SAML 2.0 and SCIM (for automatic user provisioning/deprovisioning) and manages multi-account access through reusable, temporary credential Permission Sets.",
    referenceUrl: "https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html",
    tags: ["IAM Identity Center", "IAM Identity Center", "Incident Containment"]
  },
  {
    id: "aws-scs-398",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "AWS IAM Identity Center (SSO) and Permission Sets: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates IAM Identity Center to manage human access across 200 AWS accounts through corporate Okta or Azure AD with automated user offboarding.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Federating corporate IdP via SAML/SCIM and deploying multi-account Permission Sets is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS IAM Identity Center (AWS SSO) with SCIM identity synchronization and assign scoped Permission Sets across accounts." },
      { id: 'B', text: "Create local IAM users with static passwords in every individual AWS account." },
      { id: 'C', text: "Distribute a shared master root password spreadsheet to all developers." },
      { id: 'D', text: "Allow developers to access production accounts without multi-factor authentication." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS IAM Identity Center (AWS SSO) with SCIM identity synchronization and assign scoped Permission Sets across accounts. AWS IAM Identity Center (successor to AWS Single Sign-On) centralizes workforce authentication. It integrates with corporate IdPs via SAML 2.0 and SCIM (for automatic user provisioning/deprovisioning) and manages multi-account access through reusable, temporary credential Permission Sets.",
    referenceUrl: "https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html",
    tags: ["IAM Identity Center", "IAM Identity Center", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-399",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "AWS IAM Identity Center (SSO) and Permission Sets: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates IAM Identity Center to manage human access across 200 AWS accounts through corporate Okta or Azure AD with automated user offboarding.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Federating corporate IdP via SAML/SCIM and deploying multi-account Permission Sets is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS IAM Identity Center (AWS SSO) with SCIM identity synchronization and assign scoped Permission Sets across accounts." },
      { id: 'B', text: "Create local IAM users with static passwords in every individual AWS account." },
      { id: 'C', text: "Distribute a shared master root password spreadsheet to all developers." },
      { id: 'D', text: "Allow developers to access production accounts without multi-factor authentication." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS IAM Identity Center (AWS SSO) with SCIM identity synchronization and assign scoped Permission Sets across accounts. AWS IAM Identity Center (successor to AWS Single Sign-On) centralizes workforce authentication. It integrates with corporate IdPs via SAML 2.0 and SCIM (for automatic user provisioning/deprovisioning) and manages multi-account access through reusable, temporary credential Permission Sets.",
    referenceUrl: "https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html",
    tags: ["IAM Identity Center", "IAM Identity Center", "Data Protection"]
  },
  {
    id: "aws-scs-400",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "AWS IAM Identity Center (SSO) and Permission Sets: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates IAM Identity Center to manage human access across 200 AWS accounts through corporate Okta or Azure AD with automated user offboarding.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Federating corporate IdP via SAML/SCIM and deploying multi-account Permission Sets is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS IAM Identity Center (AWS SSO) with SCIM identity synchronization and assign scoped Permission Sets across accounts." },
      { id: 'B', text: "Create local IAM users with static passwords in every individual AWS account." },
      { id: 'C', text: "Distribute a shared master root password spreadsheet to all developers." },
      { id: 'D', text: "Allow developers to access production accounts without multi-factor authentication." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS IAM Identity Center (AWS SSO) with SCIM identity synchronization and assign scoped Permission Sets across accounts. AWS IAM Identity Center (successor to AWS Single Sign-On) centralizes workforce authentication. It integrates with corporate IdPs via SAML 2.0 and SCIM (for automatic user provisioning/deprovisioning) and manages multi-account access through reusable, temporary credential Permission Sets.",
    referenceUrl: "https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html",
    tags: ["IAM Identity Center", "IAM Identity Center", "Infrastructure Defense"]
  }
];

export default AWS_SCS_QUESTIONS_16;
