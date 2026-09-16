export const AWS_DOP_QUESTIONS_14 = [
  {
    id: "aws-dop-326",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Systems Manager Patch Manager and Patch Baselines: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to automate the installation of critical operating system security patches across a hybrid fleet of Linux and Windows servers during non-business hours.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Patch Manager baselines applied through maintenance windows targeting instance tags." },
      { id: 'B', text: "Patch Manager baselines applied by a State Manager association on every instance." },
      { id: 'C', text: "An Image Builder pipeline that rebuilds the AMI and replaces the fleet each month." },
      { id: 'D', text: "A Run Command document invoked by hand against the fleet during the window." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define custom Patch Baselines in Systems Manager Patch Manager and execute patching via Systems Manager Maintenance Windows targeting instance tags. Systems Manager Patch Manager automates the process of patching managed instances for security updates. Custom patch baselines define auto-approval rules for critical CVEs, and Maintenance Windows ensure patches are installed only during scheduled maintenance windows without disrupting production.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
    tags: ["SSM Patch Manager","Patch Manager","Dr Failover"]
  },
  {
    id: "aws-dop-327",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Systems Manager Patch Manager and Patch Baselines: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to automate the installation of critical operating system security patches across a hybrid fleet of Linux and Windows servers during non-business hours.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "An Image Builder pipeline that rebuilds the AMI and replaces the fleet each month." },
      { id: 'B', text: "Patch Manager baselines applied through maintenance windows targeting instance tags." },
      { id: 'C', text: "Patch Manager baselines applied by a State Manager association on every instance." },
      { id: 'D', text: "A Run Command document invoked by hand against the fleet during the window." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define custom Patch Baselines in Systems Manager Patch Manager and execute patching via Systems Manager Maintenance Windows targeting instance tags. Systems Manager Patch Manager automates the process of patching managed instances for security updates. Custom patch baselines define auto-approval rules for critical CVEs, and Maintenance Windows ensure patches are installed only during scheduled maintenance windows without disrupting production.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
    tags: ["SSM Patch Manager","Patch Manager","High Load Scale"]
  },
  {
    id: "aws-dop-328",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Systems Manager Patch Manager and Patch Baselines: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to automate the installation of critical operating system security patches across a hybrid fleet of Linux and Windows servers during non-business hours.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "Patch Manager baselines applied by a State Manager association on every instance." },
      { id: 'B', text: "An Image Builder pipeline that rebuilds the AMI and replaces the fleet each month." },
      { id: 'C', text: "Patch Manager baselines applied through maintenance windows targeting instance tags." },
      { id: 'D', text: "A Run Command document invoked by hand against the fleet during the window." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define custom Patch Baselines in Systems Manager Patch Manager and execute patching via Systems Manager Maintenance Windows targeting instance tags. Systems Manager Patch Manager automates the process of patching managed instances for security updates. Custom patch baselines define auto-approval rules for critical CVEs, and Maintenance Windows ensure patches are installed only during scheduled maintenance windows without disrupting production.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
    tags: ["SSM Patch Manager","Patch Manager","Security Compliance"]
  },
  {
    id: "aws-dop-329",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Systems Manager Patch Manager and Patch Baselines: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to automate the installation of critical operating system security patches across a hybrid fleet of Linux and Windows servers during non-business hours.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "An Image Builder pipeline that rebuilds the AMI and replaces the fleet each month." },
      { id: 'B', text: "Patch Manager baselines applied by a State Manager association on every instance." },
      { id: 'C', text: "A Run Command document invoked by hand against the fleet during the window." },
      { id: 'D', text: "Patch Manager baselines applied through maintenance windows targeting instance tags." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define custom Patch Baselines in Systems Manager Patch Manager and execute patching via Systems Manager Maintenance Windows targeting instance tags. Systems Manager Patch Manager automates the process of patching managed instances for security updates. Custom patch baselines define auto-approval rules for critical CVEs, and Maintenance Windows ensure patches are installed only during scheduled maintenance windows without disrupting production.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
    tags: ["SSM Patch Manager","Patch Manager","Hybrid Migration"]
  },
  {
    id: "aws-dop-330",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Systems Manager Patch Manager and Patch Baselines: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to automate the installation of critical operating system security patches across a hybrid fleet of Linux and Windows servers during non-business hours.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "Patch Manager baselines applied through maintenance windows targeting instance tags." },
      { id: 'B', text: "An Image Builder pipeline that rebuilds the AMI and replaces the fleet each month." },
      { id: 'C', text: "A Run Command document invoked by hand against the fleet during the window." },
      { id: 'D', text: "Patch Manager baselines applied by a State Manager association on every instance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define custom Patch Baselines in Systems Manager Patch Manager and execute patching via Systems Manager Maintenance Windows targeting instance tags. Systems Manager Patch Manager automates the process of patching managed instances for security updates. Custom patch baselines define auto-approval rules for critical CVEs, and Maintenance Windows ensure patches are installed only during scheduled maintenance windows without disrupting production.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
    tags: ["SSM Patch Manager","Patch Manager","Resilience Failure"]
  },
  {
    id: "aws-dop-331",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Custom Resources and Lambda: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to provision a third-party SaaS resource or perform complex data lookups that are not natively supported by standard AWS CloudFormation resource types.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "A CloudFormation macro that expands the template before the stack is created." },
      { id: 'B', text: "A CloudFormation `Custom::` resource backed by a Lambda handling the lifecycle events." },
      { id: 'C', text: "A CloudFormation module packaging the resource for reuse across the stacks." },
      { id: 'D', text: "A stack output consumed by a pipeline step that creates the resource afterwards." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define a CloudFormation `Custom::` resource backed by an AWS Lambda function that handles `Create`, `Update`, and `Delete` lifecycle events via cfn-response. CloudFormation Custom Resources enable developers to write custom provisioning logic in AWS Lambda. When CloudFormation creates, updates, or deletes the stack, it sends an event to the Lambda function, which performs arbitrary API calls and returns success or failure via the `cfn-response` protocol.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html",
    tags: ["Custom Resources","Custom Resources","Dr Failover"]
  },
  {
    id: "aws-dop-332",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Custom Resources and Lambda: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to provision a third-party SaaS resource or perform complex data lookups that are not natively supported by standard AWS CloudFormation resource types.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "A CloudFormation module packaging the resource for reuse across the stacks." },
      { id: 'B', text: "A CloudFormation macro that expands the template before the stack is created." },
      { id: 'C', text: "A CloudFormation `Custom::` resource backed by a Lambda handling the lifecycle events." },
      { id: 'D', text: "A stack output consumed by a pipeline step that creates the resource afterwards." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define a CloudFormation `Custom::` resource backed by an AWS Lambda function that handles `Create`, `Update`, and `Delete` lifecycle events via cfn-response. CloudFormation Custom Resources enable developers to write custom provisioning logic in AWS Lambda. When CloudFormation creates, updates, or deletes the stack, it sends an event to the Lambda function, which performs arbitrary API calls and returns success or failure via the `cfn-response` protocol.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html",
    tags: ["Custom Resources","Custom Resources","High Load Scale"]
  },
  {
    id: "aws-dop-333",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Custom Resources and Lambda: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to provision a third-party SaaS resource or perform complex data lookups that are not natively supported by standard AWS CloudFormation resource types.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "A stack output consumed by a pipeline step that creates the resource afterwards." },
      { id: 'B', text: "A CloudFormation module packaging the resource for reuse across the stacks." },
      { id: 'C', text: "A CloudFormation `Custom::` resource backed by a Lambda handling the lifecycle events." },
      { id: 'D', text: "A CloudFormation macro that expands the template before the stack is created." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define a CloudFormation `Custom::` resource backed by an AWS Lambda function that handles `Create`, `Update`, and `Delete` lifecycle events via cfn-response. CloudFormation Custom Resources enable developers to write custom provisioning logic in AWS Lambda. When CloudFormation creates, updates, or deletes the stack, it sends an event to the Lambda function, which performs arbitrary API calls and returns success or failure via the `cfn-response` protocol.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html",
    tags: ["Custom Resources","Custom Resources","Security Compliance"]
  },
  {
    id: "aws-dop-334",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Custom Resources and Lambda: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to provision a third-party SaaS resource or perform complex data lookups that are not natively supported by standard AWS CloudFormation resource types.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "A stack output consumed by a pipeline step that creates the resource afterwards." },
      { id: 'B', text: "A CloudFormation `Custom::` resource backed by a Lambda handling the lifecycle events." },
      { id: 'C', text: "A CloudFormation macro that expands the template before the stack is created." },
      { id: 'D', text: "A CloudFormation module packaging the resource for reuse across the stacks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define a CloudFormation `Custom::` resource backed by an AWS Lambda function that handles `Create`, `Update`, and `Delete` lifecycle events via cfn-response. CloudFormation Custom Resources enable developers to write custom provisioning logic in AWS Lambda. When CloudFormation creates, updates, or deletes the stack, it sends an event to the Lambda function, which performs arbitrary API calls and returns success or failure via the `cfn-response` protocol.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html",
    tags: ["Custom Resources","Custom Resources","Hybrid Migration"]
  },
  {
    id: "aws-dop-335",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Custom Resources and Lambda: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to provision a third-party SaaS resource or perform complex data lookups that are not natively supported by standard AWS CloudFormation resource types.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "A CloudFormation `Custom::` resource backed by a Lambda handling the lifecycle events." },
      { id: 'B', text: "A CloudFormation macro that expands the template before the stack is created." },
      { id: 'C', text: "A stack output consumed by a pipeline step that creates the resource afterwards." },
      { id: 'D', text: "A CloudFormation module packaging the resource for reuse across the stacks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a CloudFormation `Custom::` resource backed by an AWS Lambda function that handles `Create`, `Update`, and `Delete` lifecycle events via cfn-response. CloudFormation Custom Resources enable developers to write custom provisioning logic in AWS Lambda. When CloudFormation creates, updates, or deletes the stack, it sends an event to the Lambda function, which performs arbitrary API calls and returns success or failure via the `cfn-response` protocol.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html",
    tags: ["Custom Resources","Custom Resources","Resilience Failure"]
  },
  {
    id: "aws-dop-336",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager Parameter Store vs Secrets Manager: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to manage hundreds of non-sensitive application configuration strings cost-effectively while storing database passwords with automated rotation.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Secrets Manager for both, so every value is rotated on the same schedule." },
      { id: 'B', text: "Parameter Store secure strings for both, with a rotation Lambda per parameter." },
      { id: 'C', text: "Parameter Store for the plain values, Secrets Manager for the passwords." },
      { id: 'D', text: "Environment variables on the task definition for both, set by the pipeline." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Store non-sensitive configurations in SSM Parameter Store (Standard tier, free), and store database passwords in AWS Secrets Manager with automated Lambda rotation. SSM Parameter Store provides low-cost/free hierarchical storage for configuration data and encrypted strings. AWS Secrets Manager is purpose-built for sensitive credentials, offering native cross-account access, fine-grained access control, and automated credential rotation using Lambda functions.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html",
    tags: ["Configuration vs Secrets","Parameter Store vs Secrets","Dr Failover"]
  },
  {
    id: "aws-dop-337",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager Parameter Store vs Secrets Manager: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to manage hundreds of non-sensitive application configuration strings cost-effectively while storing database passwords with automated rotation.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "Secrets Manager for both, so every value is rotated on the same schedule." },
      { id: 'B', text: "Parameter Store for the plain values, Secrets Manager for the passwords." },
      { id: 'C', text: "Environment variables on the task definition for both, set by the pipeline." },
      { id: 'D', text: "Parameter Store secure strings for both, with a rotation Lambda per parameter." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Store non-sensitive configurations in SSM Parameter Store (Standard tier, free), and store database passwords in AWS Secrets Manager with automated Lambda rotation. SSM Parameter Store provides low-cost/free hierarchical storage for configuration data and encrypted strings. AWS Secrets Manager is purpose-built for sensitive credentials, offering native cross-account access, fine-grained access control, and automated credential rotation using Lambda functions.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html",
    tags: ["Configuration vs Secrets","Parameter Store vs Secrets","High Load Scale"]
  },
  {
    id: "aws-dop-338",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager Parameter Store vs Secrets Manager: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to manage hundreds of non-sensitive application configuration strings cost-effectively while storing database passwords with automated rotation.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "Parameter Store for the plain values, Secrets Manager for the passwords." },
      { id: 'B', text: "Environment variables on the task definition for both, set by the pipeline." },
      { id: 'C', text: "Secrets Manager for both, so every value is rotated on the same schedule." },
      { id: 'D', text: "Parameter Store secure strings for both, with a rotation Lambda per parameter." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store non-sensitive configurations in SSM Parameter Store (Standard tier, free), and store database passwords in AWS Secrets Manager with automated Lambda rotation. SSM Parameter Store provides low-cost/free hierarchical storage for configuration data and encrypted strings. AWS Secrets Manager is purpose-built for sensitive credentials, offering native cross-account access, fine-grained access control, and automated credential rotation using Lambda functions.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html",
    tags: ["Configuration vs Secrets","Parameter Store vs Secrets","Security Compliance"]
  },
  {
    id: "aws-dop-339",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager Parameter Store vs Secrets Manager: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to manage hundreds of non-sensitive application configuration strings cost-effectively while storing database passwords with automated rotation.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "Parameter Store secure strings for both, with a rotation Lambda per parameter." },
      { id: 'B', text: "Parameter Store for the plain values, Secrets Manager for the passwords." },
      { id: 'C', text: "Secrets Manager for both, so every value is rotated on the same schedule." },
      { id: 'D', text: "Environment variables on the task definition for both, set by the pipeline." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Store non-sensitive configurations in SSM Parameter Store (Standard tier, free), and store database passwords in AWS Secrets Manager with automated Lambda rotation. SSM Parameter Store provides low-cost/free hierarchical storage for configuration data and encrypted strings. AWS Secrets Manager is purpose-built for sensitive credentials, offering native cross-account access, fine-grained access control, and automated credential rotation using Lambda functions.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html",
    tags: ["Configuration vs Secrets","Parameter Store vs Secrets","Hybrid Migration"]
  },
  {
    id: "aws-dop-340",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager Parameter Store vs Secrets Manager: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to manage hundreds of non-sensitive application configuration strings cost-effectively while storing database passwords with automated rotation.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "Parameter Store for the plain values, Secrets Manager for the passwords." },
      { id: 'B', text: "Environment variables on the task definition for both, set by the pipeline." },
      { id: 'C', text: "Secrets Manager for both, so every value is rotated on the same schedule." },
      { id: 'D', text: "Parameter Store secure strings for both, with a rotation Lambda per parameter." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store non-sensitive configurations in SSM Parameter Store (Standard tier, free), and store database passwords in AWS Secrets Manager with automated Lambda rotation. SSM Parameter Store provides low-cost/free hierarchical storage for configuration data and encrypted strings. AWS Secrets Manager is purpose-built for sensitive credentials, offering native cross-account access, fine-grained access control, and automated credential rotation using Lambda functions.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html",
    tags: ["Configuration vs Secrets","Parameter Store vs Secrets","Resilience Failure"]
  },
  {
    id: "aws-dop-341",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Stack Termination Protection and DeletionPolicy: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to prevent accidental deletion of a production Amazon RDS database if an engineer accidentally deletes or updates the enclosing CloudFormation stack.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "A stack policy denying updates or deletes on the database resource." },
      { id: 'B', text: "`DeletionPolicy: Retain` on the database, with stack termination protection on." },
      { id: 'C', text: "`UpdateReplacePolicy: Retain` on the database, with no deletion policy." },
      { id: 'D', text: "`DeletionPolicy: Snapshot` on the database, with a manual final snapshot." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `DeletionPolicy: Retain` on the RDS resource and enable `TerminationProtection` on the CloudFormation stack. Enabling `TerminationProtection` blocks stack deletion requests until protection is explicitly disabled. Setting `DeletionPolicy: Retain` on specific resources (like RDS databases or S3 buckets) ensures that even if the stack is deleted, the underlying physical data resource is preserved intact.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html",
    tags: ["Resource Protection","Termination Protection","Dr Failover"]
  },
  {
    id: "aws-dop-342",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Stack Termination Protection and DeletionPolicy: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to prevent accidental deletion of a production Amazon RDS database if an engineer accidentally deletes or updates the enclosing CloudFormation stack.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "`DeletionPolicy: Retain` on the database, with stack termination protection on." },
      { id: 'B', text: "`DeletionPolicy: Snapshot` on the database, with a manual final snapshot." },
      { id: 'C', text: "`UpdateReplacePolicy: Retain` on the database, with no deletion policy." },
      { id: 'D', text: "A stack policy denying updates or deletes on the database resource." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `DeletionPolicy: Retain` on the RDS resource and enable `TerminationProtection` on the CloudFormation stack. Enabling `TerminationProtection` blocks stack deletion requests until protection is explicitly disabled. Setting `DeletionPolicy: Retain` on specific resources (like RDS databases or S3 buckets) ensures that even if the stack is deleted, the underlying physical data resource is preserved intact.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html",
    tags: ["Resource Protection","Termination Protection","High Load Scale"]
  },
  {
    id: "aws-dop-343",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Stack Termination Protection and DeletionPolicy: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to prevent accidental deletion of a production Amazon RDS database if an engineer accidentally deletes or updates the enclosing CloudFormation stack.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "`DeletionPolicy: Snapshot` on the database, with a manual final snapshot." },
      { id: 'B', text: "`DeletionPolicy: Retain` on the database, with stack termination protection on." },
      { id: 'C', text: "A stack policy denying updates or deletes on the database resource." },
      { id: 'D', text: "`UpdateReplacePolicy: Retain` on the database, with no deletion policy." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `DeletionPolicy: Retain` on the RDS resource and enable `TerminationProtection` on the CloudFormation stack. Enabling `TerminationProtection` blocks stack deletion requests until protection is explicitly disabled. Setting `DeletionPolicy: Retain` on specific resources (like RDS databases or S3 buckets) ensures that even if the stack is deleted, the underlying physical data resource is preserved intact.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html",
    tags: ["Resource Protection","Termination Protection","Security Compliance"]
  },
  {
    id: "aws-dop-344",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Stack Termination Protection and DeletionPolicy: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to prevent accidental deletion of a production Amazon RDS database if an engineer accidentally deletes or updates the enclosing CloudFormation stack.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "`DeletionPolicy: Retain` on the database, with stack termination protection on." },
      { id: 'B', text: "`DeletionPolicy: Snapshot` on the database, with a manual final snapshot." },
      { id: 'C', text: "`UpdateReplacePolicy: Retain` on the database, with no deletion policy." },
      { id: 'D', text: "A stack policy denying updates or deletes on the database resource." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `DeletionPolicy: Retain` on the RDS resource and enable `TerminationProtection` on the CloudFormation stack. Enabling `TerminationProtection` blocks stack deletion requests until protection is explicitly disabled. Setting `DeletionPolicy: Retain` on specific resources (like RDS databases or S3 buckets) ensures that even if the stack is deleted, the underlying physical data resource is preserved intact.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html",
    tags: ["Resource Protection","Termination Protection","Hybrid Migration"]
  },
  {
    id: "aws-dop-345",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Stack Termination Protection and DeletionPolicy: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to prevent accidental deletion of a production Amazon RDS database if an engineer accidentally deletes or updates the enclosing CloudFormation stack.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "`UpdateReplacePolicy: Retain` on the database, with no deletion policy." },
      { id: 'B', text: "A stack policy denying updates or deletes on the database resource." },
      { id: 'C', text: "`DeletionPolicy: Retain` on the database, with stack termination protection on." },
      { id: 'D', text: "`DeletionPolicy: Snapshot` on the database, with a manual final snapshot." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set `DeletionPolicy: Retain` on the RDS resource and enable `TerminationProtection` on the CloudFormation stack. Enabling `TerminationProtection` blocks stack deletion requests until protection is explicitly disabled. Setting `DeletionPolicy: Retain` on specific resources (like RDS databases or S3 buckets) ensures that even if the stack is deleted, the underlying physical data resource is preserved intact.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html",
    tags: ["Resource Protection","Termination Protection","Resilience Failure"]
  },
  {
    id: "aws-dop-346",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Multi-Region Disaster Recovery: Pilot Light vs Warm Standby: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to design a disaster recovery strategy for a mission-critical financial application that satisfies an RTO under 15 minutes and RPO under 1 minute across AWS regions.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "A warm standby on Aurora Global Database, with Route 53 ARC routing controls." },
      { id: 'B', text: "A backup-and-restore strategy restoring the latest snapshot into the second region." },
      { id: 'C', text: "A pilot light with the database replicated and the compute tier scaled to zero." },
      { id: 'D', text: "An active-active deployment with the writer in one region and readers in the other." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Warm Standby architecture using Amazon Aurora Global Database with cross-region replication and Route 53 Application Recovery Controller routing controls. Amazon Aurora Global Databases provide sub-second replication latency across AWS regions (RPO &lt; 1s). Combining Aurora Global Database with Warm Standby compute (minimal scaled instances running in the secondary region) allows fast failover (RTO &lt; 15m) via Route 53 Application Recovery Controller.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html",
    tags: ["Disaster Recovery","DR Strategies","Dr Failover"]
  },
  {
    id: "aws-dop-347",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Multi-Region Disaster Recovery: Pilot Light vs Warm Standby: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to design a disaster recovery strategy for a mission-critical financial application that satisfies an RTO under 15 minutes and RPO under 1 minute across AWS regions.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "An active-active deployment with the writer in one region and readers in the other." },
      { id: 'B', text: "A pilot light with the database replicated and the compute tier scaled to zero." },
      { id: 'C', text: "A backup-and-restore strategy restoring the latest snapshot into the second region." },
      { id: 'D', text: "A warm standby on Aurora Global Database, with Route 53 ARC routing controls." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy a Warm Standby architecture using Amazon Aurora Global Database with cross-region replication and Route 53 Application Recovery Controller routing controls. Amazon Aurora Global Databases provide sub-second replication latency across AWS regions (RPO &lt; 1s). Combining Aurora Global Database with Warm Standby compute (minimal scaled instances running in the secondary region) allows fast failover (RTO &lt; 15m) via Route 53 Application Recovery Controller.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html",
    tags: ["Disaster Recovery","DR Strategies","High Load Scale"]
  },
  {
    id: "aws-dop-348",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Multi-Region Disaster Recovery: Pilot Light vs Warm Standby: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to design a disaster recovery strategy for a mission-critical financial application that satisfies an RTO under 15 minutes and RPO under 1 minute across AWS regions.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "A warm standby on Aurora Global Database, with Route 53 ARC routing controls." },
      { id: 'B', text: "A backup-and-restore strategy restoring the latest snapshot into the second region." },
      { id: 'C', text: "A pilot light with the database replicated and the compute tier scaled to zero." },
      { id: 'D', text: "An active-active deployment with the writer in one region and readers in the other." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Warm Standby architecture using Amazon Aurora Global Database with cross-region replication and Route 53 Application Recovery Controller routing controls. Amazon Aurora Global Databases provide sub-second replication latency across AWS regions (RPO &lt; 1s). Combining Aurora Global Database with Warm Standby compute (minimal scaled instances running in the secondary region) allows fast failover (RTO &lt; 15m) via Route 53 Application Recovery Controller.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html",
    tags: ["Disaster Recovery","DR Strategies","Security Compliance"]
  },
  {
    id: "aws-dop-349",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Multi-Region Disaster Recovery: Pilot Light vs Warm Standby: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to design a disaster recovery strategy for a mission-critical financial application that satisfies an RTO under 15 minutes and RPO under 1 minute across AWS regions.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "A pilot light with the database replicated and the compute tier scaled to zero." },
      { id: 'B', text: "An active-active deployment with the writer in one region and readers in the other." },
      { id: 'C', text: "A warm standby on Aurora Global Database, with Route 53 ARC routing controls." },
      { id: 'D', text: "A backup-and-restore strategy restoring the latest snapshot into the second region." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy a Warm Standby architecture using Amazon Aurora Global Database with cross-region replication and Route 53 Application Recovery Controller routing controls. Amazon Aurora Global Databases provide sub-second replication latency across AWS regions (RPO &lt; 1s). Combining Aurora Global Database with Warm Standby compute (minimal scaled instances running in the secondary region) allows fast failover (RTO &lt; 15m) via Route 53 Application Recovery Controller.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html",
    tags: ["Disaster Recovery","DR Strategies","Hybrid Migration"]
  },
  {
    id: "aws-dop-350",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Multi-Region Disaster Recovery: Pilot Light vs Warm Standby: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to design a disaster recovery strategy for a mission-critical financial application that satisfies an RTO under 15 minutes and RPO under 1 minute across AWS regions.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "A warm standby on Aurora Global Database, with Route 53 ARC routing controls." },
      { id: 'B', text: "A backup-and-restore strategy restoring the latest snapshot into the second region." },
      { id: 'C', text: "A pilot light with the database replicated and the compute tier scaled to zero." },
      { id: 'D', text: "An active-active deployment with the writer in one region and readers in the other." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Warm Standby architecture using Amazon Aurora Global Database with cross-region replication and Route 53 Application Recovery Controller routing controls. Amazon Aurora Global Databases provide sub-second replication latency across AWS regions (RPO &lt; 1s). Combining Aurora Global Database with Warm Standby compute (minimal scaled instances running in the secondary region) allows fast failover (RTO &lt; 15m) via Route 53 Application Recovery Controller.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html",
    tags: ["Disaster Recovery","DR Strategies","Resilience Failure"]
  }
];

export default AWS_DOP_QUESTIONS_14;
