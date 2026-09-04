export const AWS_CLF_QUESTIONS_14 = [
  {
    id: "aws-clf-326",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "IAM Users, Groups, and Roles: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates AWS IAM to grant temporary, secure access to an Amazon EC2 instance to read objects from an Amazon S3 bucket without storing long-term AWS access keys on the instance.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? IAM entities: Users, Groups, and Roles is under consideration.",
    options: [
      { id: 'A', text: "Create an IAM Group and add the EC2 instance IP address to the group." },
      { id: 'B', text: "Create an IAM User, generate an access key and secret key, and paste them into a text file on the EC2 instance." },
      { id: 'C', text: "Create an IAM Role with an S3 read policy, attach it to an EC2 instance profile, and assign the profile to the EC2 instance." },
      { id: 'D', text: "Configure the S3 bucket with public read access." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create an IAM Role with an S3 read policy, attach it to an EC2 instance profile, and assign the profile to the EC2 instance. An IAM Role is an IAM identity that you can create in your account that has specific permissions but is not associated with a specific person. Applications running on Amazon EC2 assume an IAM role via instance profiles to obtain temporary, automatically rotated security credentials, eliminating the danger of hardcoding access keys.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html",
    tags: ["AWS IAM", "IAM", "Dr Failover"]
  },
  {
    id: "aws-clf-327",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "IAM Users, Groups, and Roles: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates AWS IAM to grant temporary, secure access to an Amazon EC2 instance to read objects from an Amazon S3 bucket without storing long-term AWS access keys on the instance.",
    question: "Which architectural approach should the team select to manage this demand efficiently? IAM entities: Users, Groups, and Roles is under consideration.",
    options: [
      { id: 'A', text: "Configure the S3 bucket with public read access." },
      { id: 'B', text: "Create an IAM Role with an S3 read policy, attach it to an EC2 instance profile, and assign the profile to the EC2 instance." },
      { id: 'C', text: "Create an IAM User, generate an access key and secret key, and paste them into a text file on the EC2 instance." },
      { id: 'D', text: "Create an IAM Group and add the EC2 instance IP address to the group." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create an IAM Role with an S3 read policy, attach it to an EC2 instance profile, and assign the profile to the EC2 instance. An IAM Role is an IAM identity that you can create in your account that has specific permissions but is not associated with a specific person. Applications running on Amazon EC2 assume an IAM role via instance profiles to obtain temporary, automatically rotated security credentials, eliminating the danger of hardcoding access keys.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html",
    tags: ["AWS IAM", "IAM", "High Load Scale"]
  },
  {
    id: "aws-clf-328",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "IAM Users, Groups, and Roles: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates AWS IAM to grant temporary, secure access to an Amazon EC2 instance to read objects from an Amazon S3 bucket without storing long-term AWS access keys on the instance.",
    question: "Which solution properly implements these mandatory security and governance controls? IAM entities: Users, Groups, and Roles is under consideration.",
    options: [
      { id: 'A', text: "Create an IAM User, generate an access key and secret key, and paste them into a text file on the EC2 instance." },
      { id: 'B', text: "Create an IAM Group and add the EC2 instance IP address to the group." },
      { id: 'C', text: "Configure the S3 bucket with public read access." },
      { id: 'D', text: "Create an IAM Role with an S3 read policy, attach it to an EC2 instance profile, and assign the profile to the EC2 instance." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create an IAM Role with an S3 read policy, attach it to an EC2 instance profile, and assign the profile to the EC2 instance. An IAM Role is an IAM identity that you can create in your account that has specific permissions but is not associated with a specific person. Applications running on Amazon EC2 assume an IAM role via instance profiles to obtain temporary, automatically rotated security credentials, eliminating the danger of hardcoding access keys.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html",
    tags: ["AWS IAM", "IAM", "Security Compliance"]
  },
  {
    id: "aws-clf-329",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "IAM Users, Groups, and Roles: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the AWS Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates AWS IAM to grant temporary, secure access to an Amazon EC2 instance to read objects from an Amazon S3 bucket without storing long-term AWS access keys on the instance.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? IAM entities: Users, Groups, and Roles is under consideration.",
    options: [
      { id: 'A', text: "Create an IAM Role with an S3 read policy, attach it to an EC2 instance profile, and assign the profile to the EC2 instance." },
      { id: 'B', text: "Create an IAM User, generate an access key and secret key, and paste them into a text file on the EC2 instance." },
      { id: 'C', text: "Configure the S3 bucket with public read access." },
      { id: 'D', text: "Create an IAM Group and add the EC2 instance IP address to the group." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an IAM Role with an S3 read policy, attach it to an EC2 instance profile, and assign the profile to the EC2 instance. An IAM Role is an IAM identity that you can create in your account that has specific permissions but is not associated with a specific person. Applications running on Amazon EC2 assume an IAM role via instance profiles to obtain temporary, automatically rotated security credentials, eliminating the danger of hardcoding access keys.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html",
    tags: ["AWS IAM", "IAM", "Hybrid Migration"]
  },
  {
    id: "aws-clf-330",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "IAM Users, Groups, and Roles: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates AWS IAM to grant temporary, secure access to an Amazon EC2 instance to read objects from an Amazon S3 bucket without storing long-term AWS access keys on the instance.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? IAM entities: Users, Groups, and Roles is under consideration.",
    options: [
      { id: 'A', text: "Create an IAM Role with an S3 read policy, attach it to an EC2 instance profile, and assign the profile to the EC2 instance." },
      { id: 'B', text: "Configure the S3 bucket with public read access." },
      { id: 'C', text: "Create an IAM User, generate an access key and secret key, and paste them into a text file on the EC2 instance." },
      { id: 'D', text: "Create an IAM Group and add the EC2 instance IP address to the group." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an IAM Role with an S3 read policy, attach it to an EC2 instance profile, and assign the profile to the EC2 instance. An IAM Role is an IAM identity that you can create in your account that has specific permissions but is not associated with a specific person. Applications running on Amazon EC2 assume an IAM role via instance profiles to obtain temporary, automatically rotated security credentials, eliminating the danger of hardcoding access keys.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html",
    tags: ["AWS IAM", "IAM", "Resilience Failure"]
  },
  {
    id: "aws-clf-331",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "IAM Root User Best Practices: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates AWS IAM to secure the AWS account root user following official AWS security best practices immediately after creating a new AWS account.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? AWS Account Root User Security Best Practices is under consideration.",
    options: [
      { id: 'A', text: "Enable hardware or virtual Multi-Factor Authentication (MFA) on the root user, lock away root credentials, delete root access keys, and create an administrative IAM user for daily tasks." },
      { id: 'B', text: "Disable password complexity requirements on the root user." },
      { id: 'C', text: "Generate access keys for the root user and share them with all development team leads." },
      { id: 'D', text: "Use the root user credentials for daily application deployment and database administration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable hardware or virtual Multi-Factor Authentication (MFA) on the root user, lock away root credentials, delete root access keys, and create an administrative IAM user for daily tasks. The AWS account root user has complete, unrestricted access to all resources in the account. Best practices mandate enabling MFA on the root account immediately, deleting any access keys for root, and creating dedicated IAM users or roles with least privilege for day-to-day administrative tasks.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html",
    tags: ["AWS IAM", "IAM", "Dr Failover"]
  },
  {
    id: "aws-clf-332",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "IAM Root User Best Practices: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates AWS IAM to secure the AWS account root user following official AWS security best practices immediately after creating a new AWS account.",
    question: "Which architectural approach should the team select to manage this demand efficiently? AWS Account Root User Security Best Practices is under consideration.",
    options: [
      { id: 'A', text: "Generate access keys for the root user and share them with all development team leads." },
      { id: 'B', text: "Enable hardware or virtual Multi-Factor Authentication (MFA) on the root user, lock away root credentials, delete root access keys, and create an administrative IAM user for daily tasks." },
      { id: 'C', text: "Disable password complexity requirements on the root user." },
      { id: 'D', text: "Use the root user credentials for daily application deployment and database administration." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable hardware or virtual Multi-Factor Authentication (MFA) on the root user, lock away root credentials, delete root access keys, and create an administrative IAM user for daily tasks. The AWS account root user has complete, unrestricted access to all resources in the account. Best practices mandate enabling MFA on the root account immediately, deleting any access keys for root, and creating dedicated IAM users or roles with least privilege for day-to-day administrative tasks.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html",
    tags: ["AWS IAM", "IAM", "High Load Scale"]
  },
  {
    id: "aws-clf-333",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "IAM Root User Best Practices: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates AWS IAM to secure the AWS account root user following official AWS security best practices immediately after creating a new AWS account.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Account Root User Security Best Practices is under consideration.",
    options: [
      { id: 'A', text: "Enable hardware or virtual Multi-Factor Authentication (MFA) on the root user, lock away root credentials, delete root access keys, and create an administrative IAM user for daily tasks." },
      { id: 'B', text: "Use the root user credentials for daily application deployment and database administration." },
      { id: 'C', text: "Generate access keys for the root user and share them with all development team leads." },
      { id: 'D', text: "Disable password complexity requirements on the root user." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable hardware or virtual Multi-Factor Authentication (MFA) on the root user, lock away root credentials, delete root access keys, and create an administrative IAM user for daily tasks. The AWS account root user has complete, unrestricted access to all resources in the account. Best practices mandate enabling MFA on the root account immediately, deleting any access keys for root, and creating dedicated IAM users or roles with least privilege for day-to-day administrative tasks.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html",
    tags: ["AWS IAM", "IAM", "Security Compliance"]
  },
  {
    id: "aws-clf-334",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "IAM Root User Best Practices: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the AWS Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates AWS IAM to secure the AWS account root user following official AWS security best practices immediately after creating a new AWS account.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? AWS Account Root User Security Best Practices is under consideration.",
    options: [
      { id: 'A', text: "Use the root user credentials for daily application deployment and database administration." },
      { id: 'B', text: "Enable hardware or virtual Multi-Factor Authentication (MFA) on the root user, lock away root credentials, delete root access keys, and create an administrative IAM user for daily tasks." },
      { id: 'C', text: "Disable password complexity requirements on the root user." },
      { id: 'D', text: "Generate access keys for the root user and share them with all development team leads." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable hardware or virtual Multi-Factor Authentication (MFA) on the root user, lock away root credentials, delete root access keys, and create an administrative IAM user for daily tasks. The AWS account root user has complete, unrestricted access to all resources in the account. Best practices mandate enabling MFA on the root account immediately, deleting any access keys for root, and creating dedicated IAM users or roles with least privilege for day-to-day administrative tasks.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html",
    tags: ["AWS IAM", "IAM", "Hybrid Migration"]
  },
  {
    id: "aws-clf-335",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "IAM Root User Best Practices: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates AWS IAM to secure the AWS account root user following official AWS security best practices immediately after creating a new AWS account.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? AWS Account Root User Security Best Practices is under consideration.",
    options: [
      { id: 'A', text: "Enable hardware or virtual Multi-Factor Authentication (MFA) on the root user, lock away root credentials, delete root access keys, and create an administrative IAM user for daily tasks." },
      { id: 'B', text: "Disable password complexity requirements on the root user." },
      { id: 'C', text: "Generate access keys for the root user and share them with all development team leads." },
      { id: 'D', text: "Use the root user credentials for daily application deployment and database administration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable hardware or virtual Multi-Factor Authentication (MFA) on the root user, lock away root credentials, delete root access keys, and create an administrative IAM user for daily tasks. The AWS account root user has complete, unrestricted access to all resources in the account. Best practices mandate enabling MFA on the root account immediately, deleting any access keys for root, and creating dedicated IAM users or roles with least privilege for day-to-day administrative tasks.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html",
    tags: ["AWS IAM", "IAM", "Resilience Failure"]
  },
  {
    id: "aws-clf-336",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Multi-Factor Authentication (MFA): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates AWS IAM to protect privileged user accounts by requiring a second authentication factor in addition to a standard username and password.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Multi-Factor Authentication (MFA) enforcement is under consideration.",
    options: [
      { id: 'A', text: "Require users to change their password every 24 hours." },
      { id: 'B', text: "Restrict console sign-ins to corporate VPN IP addresses only without second-factor authentication." },
      { id: 'C', text: "Require passwords to contain at least 50 characters." },
      { id: 'D', text: "Enable Multi-Factor Authentication (MFA) using a FIDO security key, hardware TOTP token, or virtual authenticator app." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Multi-Factor Authentication (MFA) using a FIDO security key, hardware TOTP token, or virtual authenticator app. Multi-Factor Authentication (MFA) adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to the AWS Management Console, they must provide their password and an authentication code from their physical or virtual MFA device.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html",
    tags: ["AWS IAM", "IAM", "Dr Failover"]
  },
  {
    id: "aws-clf-337",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Multi-Factor Authentication (MFA): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates AWS IAM to protect privileged user accounts by requiring a second authentication factor in addition to a standard username and password.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Multi-Factor Authentication (MFA) enforcement is under consideration.",
    options: [
      { id: 'A', text: "Require users to change their password every 24 hours." },
      { id: 'B', text: "Restrict console sign-ins to corporate VPN IP addresses only without second-factor authentication." },
      { id: 'C', text: "Enable Multi-Factor Authentication (MFA) using a FIDO security key, hardware TOTP token, or virtual authenticator app." },
      { id: 'D', text: "Require passwords to contain at least 50 characters." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Multi-Factor Authentication (MFA) using a FIDO security key, hardware TOTP token, or virtual authenticator app. Multi-Factor Authentication (MFA) adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to the AWS Management Console, they must provide their password and an authentication code from their physical or virtual MFA device.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html",
    tags: ["AWS IAM", "IAM", "High Load Scale"]
  },
  {
    id: "aws-clf-338",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Multi-Factor Authentication (MFA): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates AWS IAM to protect privileged user accounts by requiring a second authentication factor in addition to a standard username and password.",
    question: "Which solution properly implements these mandatory security and governance controls? Multi-Factor Authentication (MFA) enforcement is under consideration.",
    options: [
      { id: 'A', text: "Require passwords to contain at least 50 characters." },
      { id: 'B', text: "Require users to change their password every 24 hours." },
      { id: 'C', text: "Enable Multi-Factor Authentication (MFA) using a FIDO security key, hardware TOTP token, or virtual authenticator app." },
      { id: 'D', text: "Restrict console sign-ins to corporate VPN IP addresses only without second-factor authentication." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Multi-Factor Authentication (MFA) using a FIDO security key, hardware TOTP token, or virtual authenticator app. Multi-Factor Authentication (MFA) adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to the AWS Management Console, they must provide their password and an authentication code from their physical or virtual MFA device.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html",
    tags: ["AWS IAM", "IAM", "Security Compliance"]
  },
  {
    id: "aws-clf-339",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Multi-Factor Authentication (MFA): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the AWS Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates AWS IAM to protect privileged user accounts by requiring a second authentication factor in addition to a standard username and password.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Multi-Factor Authentication (MFA) enforcement is under consideration.",
    options: [
      { id: 'A', text: "Restrict console sign-ins to corporate VPN IP addresses only without second-factor authentication." },
      { id: 'B', text: "Enable Multi-Factor Authentication (MFA) using a FIDO security key, hardware TOTP token, or virtual authenticator app." },
      { id: 'C', text: "Require users to change their password every 24 hours." },
      { id: 'D', text: "Require passwords to contain at least 50 characters." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Multi-Factor Authentication (MFA) using a FIDO security key, hardware TOTP token, or virtual authenticator app. Multi-Factor Authentication (MFA) adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to the AWS Management Console, they must provide their password and an authentication code from their physical or virtual MFA device.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html",
    tags: ["AWS IAM", "IAM", "Hybrid Migration"]
  },
  {
    id: "aws-clf-340",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Multi-Factor Authentication (MFA): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates AWS IAM to protect privileged user accounts by requiring a second authentication factor in addition to a standard username and password.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Multi-Factor Authentication (MFA) enforcement is under consideration.",
    options: [
      { id: 'A', text: "Enable Multi-Factor Authentication (MFA) using a FIDO security key, hardware TOTP token, or virtual authenticator app." },
      { id: 'B', text: "Restrict console sign-ins to corporate VPN IP addresses only without second-factor authentication." },
      { id: 'C', text: "Require users to change their password every 24 hours." },
      { id: 'D', text: "Require passwords to contain at least 50 characters." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Multi-Factor Authentication (MFA) using a FIDO security key, hardware TOTP token, or virtual authenticator app. Multi-Factor Authentication (MFA) adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to the AWS Management Console, they must provide their password and an authentication code from their physical or virtual MFA device.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html",
    tags: ["AWS IAM", "IAM", "Resilience Failure"]
  },
  {
    id: "aws-clf-341",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Security Groups vs Network ACLs: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Amazon VPC to compare the operational behavior of Amazon VPC Security Groups and Network Access Control Lists (NACLs).",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Security Groups vs. Network ACLs comparison is under consideration.",
    options: [
      { id: 'A', text: "Security Groups are stateful firewalls evaluated at the instance network interface level that only support Allow rules; Network ACLs are stateless firewalls evaluated at the subnet level that support both Allow and Deny rules." },
      { id: 'B', text: "Security Groups evaluate rules in strict numerical order, while Network ACLs evaluate all rules simultaneously." },
      { id: 'C', text: "Security Groups are stateless and support Deny rules; Network ACLs are stateful and support Allow rules only." },
      { id: 'D', text: "Security Groups operate at the subnet level, while Network ACLs operate at the instance level." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Security Groups are stateful firewalls evaluated at the instance network interface level that only support Allow rules; Network ACLs are stateless firewalls evaluated at the subnet level that support both Allow and Deny rules. Security Groups act as stateful firewalls for EC2 instances—if an inbound request is permitted, return traffic is automatically allowed regardless of outbound rules. Network ACLs act as stateless firewalls for subnets, requiring explicit inbound and outbound rules, and evaluate rules in numerical order with support for explicit Deny rules.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html",
    tags: ["Amazon VPC", "VPC Security", "Dr Failover"]
  },
  {
    id: "aws-clf-342",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Security Groups vs Network ACLs: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Amazon VPC to compare the operational behavior of Amazon VPC Security Groups and Network Access Control Lists (NACLs).",
    question: "Which architectural approach should the team select to manage this demand efficiently? Security Groups vs. Network ACLs comparison is under consideration.",
    options: [
      { id: 'A', text: "Security Groups evaluate rules in strict numerical order, while Network ACLs evaluate all rules simultaneously." },
      { id: 'B', text: "Security Groups are stateless and support Deny rules; Network ACLs are stateful and support Allow rules only." },
      { id: 'C', text: "Security Groups operate at the subnet level, while Network ACLs operate at the instance level." },
      { id: 'D', text: "Security Groups are stateful firewalls evaluated at the instance network interface level that only support Allow rules; Network ACLs are stateless firewalls evaluated at the subnet level that support both Allow and Deny rules." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Security Groups are stateful firewalls evaluated at the instance network interface level that only support Allow rules; Network ACLs are stateless firewalls evaluated at the subnet level that support both Allow and Deny rules. Security Groups act as stateful firewalls for EC2 instances—if an inbound request is permitted, return traffic is automatically allowed regardless of outbound rules. Network ACLs act as stateless firewalls for subnets, requiring explicit inbound and outbound rules, and evaluate rules in numerical order with support for explicit Deny rules.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html",
    tags: ["Amazon VPC", "VPC Security", "High Load Scale"]
  },
  {
    id: "aws-clf-343",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Security Groups vs Network ACLs: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Amazon VPC to compare the operational behavior of Amazon VPC Security Groups and Network Access Control Lists (NACLs).",
    question: "Which solution properly implements these mandatory security and governance controls? Security Groups vs. Network ACLs comparison is under consideration.",
    options: [
      { id: 'A', text: "Security Groups evaluate rules in strict numerical order, while Network ACLs evaluate all rules simultaneously." },
      { id: 'B', text: "Security Groups operate at the subnet level, while Network ACLs operate at the instance level." },
      { id: 'C', text: "Security Groups are stateless and support Deny rules; Network ACLs are stateful and support Allow rules only." },
      { id: 'D', text: "Security Groups are stateful firewalls evaluated at the instance network interface level that only support Allow rules; Network ACLs are stateless firewalls evaluated at the subnet level that support both Allow and Deny rules." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Security Groups are stateful firewalls evaluated at the instance network interface level that only support Allow rules; Network ACLs are stateless firewalls evaluated at the subnet level that support both Allow and Deny rules. Security Groups act as stateful firewalls for EC2 instances—if an inbound request is permitted, return traffic is automatically allowed regardless of outbound rules. Network ACLs act as stateless firewalls for subnets, requiring explicit inbound and outbound rules, and evaluate rules in numerical order with support for explicit Deny rules.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html",
    tags: ["Amazon VPC", "VPC Security", "Security Compliance"]
  },
  {
    id: "aws-clf-344",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Security Groups vs Network ACLs: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the AWS Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Amazon VPC to compare the operational behavior of Amazon VPC Security Groups and Network Access Control Lists (NACLs).",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Security Groups vs. Network ACLs comparison is under consideration.",
    options: [
      { id: 'A', text: "Security Groups are stateful firewalls evaluated at the instance network interface level that only support Allow rules; Network ACLs are stateless firewalls evaluated at the subnet level that support both Allow and Deny rules." },
      { id: 'B', text: "Security Groups are stateless and support Deny rules; Network ACLs are stateful and support Allow rules only." },
      { id: 'C', text: "Security Groups operate at the subnet level, while Network ACLs operate at the instance level." },
      { id: 'D', text: "Security Groups evaluate rules in strict numerical order, while Network ACLs evaluate all rules simultaneously." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Security Groups are stateful firewalls evaluated at the instance network interface level that only support Allow rules; Network ACLs are stateless firewalls evaluated at the subnet level that support both Allow and Deny rules. Security Groups act as stateful firewalls for EC2 instances—if an inbound request is permitted, return traffic is automatically allowed regardless of outbound rules. Network ACLs act as stateless firewalls for subnets, requiring explicit inbound and outbound rules, and evaluate rules in numerical order with support for explicit Deny rules.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html",
    tags: ["Amazon VPC", "VPC Security", "Hybrid Migration"]
  },
  {
    id: "aws-clf-345",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Security Groups vs Network ACLs: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Amazon VPC to compare the operational behavior of Amazon VPC Security Groups and Network Access Control Lists (NACLs).",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Security Groups vs. Network ACLs comparison is under consideration.",
    options: [
      { id: 'A', text: "Security Groups are stateless and support Deny rules; Network ACLs are stateful and support Allow rules only." },
      { id: 'B', text: "Security Groups evaluate rules in strict numerical order, while Network ACLs evaluate all rules simultaneously." },
      { id: 'C', text: "Security Groups are stateful firewalls evaluated at the instance network interface level that only support Allow rules; Network ACLs are stateless firewalls evaluated at the subnet level that support both Allow and Deny rules." },
      { id: 'D', text: "Security Groups operate at the subnet level, while Network ACLs operate at the instance level." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Security Groups are stateful firewalls evaluated at the instance network interface level that only support Allow rules; Network ACLs are stateless firewalls evaluated at the subnet level that support both Allow and Deny rules. Security Groups act as stateful firewalls for EC2 instances—if an inbound request is permitted, return traffic is automatically allowed regardless of outbound rules. Network ACLs act as stateless firewalls for subnets, requiring explicit inbound and outbound rules, and evaluate rules in numerical order with support for explicit Deny rules.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html",
    tags: ["Amazon VPC", "VPC Security", "Resilience Failure"]
  },
  {
    id: "aws-clf-346",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Key Management Service (KMS): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates AWS KMS to manage encryption keys and protect sensitive data stored in Amazon S3, Amazon EBS, and Amazon RDS with automated cryptographic key management.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? AWS KMS managed encryption at rest is under consideration.",
    options: [
      { id: 'A', text: "Rely on operating system passwords to encrypt hard disk drives." },
      { id: 'B', text: "Write custom symmetric encryption algorithms inside application code." },
      { id: 'C', text: "Use AWS Key Management Service (KMS) to create, rotate, and manage cryptographic keys for transparent encryption at rest." },
      { id: 'D', text: "Store encryption keys in plaintext files inside an Amazon S3 bucket." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use AWS Key Management Service (KMS) to create, rotate, and manage cryptographic keys for transparent encryption at rest. AWS Key Management Service (KMS) is a fully managed service that makes it easy to create and manage cryptographic keys used to encrypt data across AWS services and applications. KMS integrates with AWS CloudTrail to log all key usage for regulatory compliance.",
    referenceUrl: "https://aws.amazon.com/kms/",
    tags: ["AWS KMS", "KMS", "Dr Failover"]
  },
  {
    id: "aws-clf-347",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Key Management Service (KMS): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates AWS KMS to manage encryption keys and protect sensitive data stored in Amazon S3, Amazon EBS, and Amazon RDS with automated cryptographic key management.",
    question: "Which architectural approach should the team select to manage this demand efficiently? AWS KMS managed encryption at rest is under consideration.",
    options: [
      { id: 'A', text: "Use AWS Key Management Service (KMS) to create, rotate, and manage cryptographic keys for transparent encryption at rest." },
      { id: 'B', text: "Write custom symmetric encryption algorithms inside application code." },
      { id: 'C', text: "Rely on operating system passwords to encrypt hard disk drives." },
      { id: 'D', text: "Store encryption keys in plaintext files inside an Amazon S3 bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use AWS Key Management Service (KMS) to create, rotate, and manage cryptographic keys for transparent encryption at rest. AWS Key Management Service (KMS) is a fully managed service that makes it easy to create and manage cryptographic keys used to encrypt data across AWS services and applications. KMS integrates with AWS CloudTrail to log all key usage for regulatory compliance.",
    referenceUrl: "https://aws.amazon.com/kms/",
    tags: ["AWS KMS", "KMS", "High Load Scale"]
  },
  {
    id: "aws-clf-348",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Key Management Service (KMS): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates AWS KMS to manage encryption keys and protect sensitive data stored in Amazon S3, Amazon EBS, and Amazon RDS with automated cryptographic key management.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS KMS managed encryption at rest is under consideration.",
    options: [
      { id: 'A', text: "Store encryption keys in plaintext files inside an Amazon S3 bucket." },
      { id: 'B', text: "Use AWS Key Management Service (KMS) to create, rotate, and manage cryptographic keys for transparent encryption at rest." },
      { id: 'C', text: "Write custom symmetric encryption algorithms inside application code." },
      { id: 'D', text: "Rely on operating system passwords to encrypt hard disk drives." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use AWS Key Management Service (KMS) to create, rotate, and manage cryptographic keys for transparent encryption at rest. AWS Key Management Service (KMS) is a fully managed service that makes it easy to create and manage cryptographic keys used to encrypt data across AWS services and applications. KMS integrates with AWS CloudTrail to log all key usage for regulatory compliance.",
    referenceUrl: "https://aws.amazon.com/kms/",
    tags: ["AWS KMS", "KMS", "Security Compliance"]
  },
  {
    id: "aws-clf-349",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Key Management Service (KMS): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the AWS Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates AWS KMS to manage encryption keys and protect sensitive data stored in Amazon S3, Amazon EBS, and Amazon RDS with automated cryptographic key management.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? AWS KMS managed encryption at rest is under consideration.",
    options: [
      { id: 'A', text: "Store encryption keys in plaintext files inside an Amazon S3 bucket." },
      { id: 'B', text: "Write custom symmetric encryption algorithms inside application code." },
      { id: 'C', text: "Use AWS Key Management Service (KMS) to create, rotate, and manage cryptographic keys for transparent encryption at rest." },
      { id: 'D', text: "Rely on operating system passwords to encrypt hard disk drives." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use AWS Key Management Service (KMS) to create, rotate, and manage cryptographic keys for transparent encryption at rest. AWS Key Management Service (KMS) is a fully managed service that makes it easy to create and manage cryptographic keys used to encrypt data across AWS services and applications. KMS integrates with AWS CloudTrail to log all key usage for regulatory compliance.",
    referenceUrl: "https://aws.amazon.com/kms/",
    tags: ["AWS KMS", "KMS", "Hybrid Migration"]
  },
  {
    id: "aws-clf-350",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Key Management Service (KMS): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates AWS KMS to manage encryption keys and protect sensitive data stored in Amazon S3, Amazon EBS, and Amazon RDS with automated cryptographic key management.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? AWS KMS managed encryption at rest is under consideration.",
    options: [
      { id: 'A', text: "Store encryption keys in plaintext files inside an Amazon S3 bucket." },
      { id: 'B', text: "Write custom symmetric encryption algorithms inside application code." },
      { id: 'C', text: "Rely on operating system passwords to encrypt hard disk drives." },
      { id: 'D', text: "Use AWS Key Management Service (KMS) to create, rotate, and manage cryptographic keys for transparent encryption at rest." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use AWS Key Management Service (KMS) to create, rotate, and manage cryptographic keys for transparent encryption at rest. AWS Key Management Service (KMS) is a fully managed service that makes it easy to create and manage cryptographic keys used to encrypt data across AWS services and applications. KMS integrates with AWS CloudTrail to log all key usage for regulatory compliance.",
    referenceUrl: "https://aws.amazon.com/kms/",
    tags: ["AWS KMS", "KMS", "Resilience Failure"]
  }
];

export default AWS_CLF_QUESTIONS_14;
