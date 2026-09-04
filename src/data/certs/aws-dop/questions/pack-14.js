export const AWS_DOP_QUESTIONS_14 = [
  {
    id: "aws-dop-326",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Systems Manager Patch Manager and Patch Baselines: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates SSM Patch Manager to automate the installation of critical operating system security patches across a hybrid fleet of Linux and Windows servers during non-business hours.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Automating OS and application security patching with approval rules and maintenance windows is under consideration.",
    options: [
      { id: 'A', text: "Define custom Patch Baselines in Systems Manager Patch Manager and execute patching via Systems Manager Maintenance Windows targeting instance tags." },
      { id: 'B', text: "Instruct system administrators to log in to each server and run apt-get upgrade manually." },
      { id: 'C', text: "Disable all operating system security patching to avoid unexpected software regressions." },
      { id: 'D', text: "Allow servers to automatically reboot and patch during peak daytime traffic hours." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define custom Patch Baselines in Systems Manager Patch Manager and execute patching via Systems Manager Maintenance Windows targeting instance tags. Systems Manager Patch Manager automates the process of patching managed instances for security updates. Custom patch baselines define auto-approval rules for critical CVEs, and Maintenance Windows ensure patches are installed only during scheduled maintenance windows without disrupting production.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
    tags: ["SSM Patch Manager", "Patch Manager", "Dr Failover"]
  },
  {
    id: "aws-dop-327",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Systems Manager Patch Manager and Patch Baselines: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates SSM Patch Manager to automate the installation of critical operating system security patches across a hybrid fleet of Linux and Windows servers during non-business hours.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Automating OS and application security patching with approval rules and maintenance windows is under consideration.",
    options: [
      { id: 'A', text: "Disable all operating system security patching to avoid unexpected software regressions." },
      { id: 'B', text: "Instruct system administrators to log in to each server and run apt-get upgrade manually." },
      { id: 'C', text: "Define custom Patch Baselines in Systems Manager Patch Manager and execute patching via Systems Manager Maintenance Windows targeting instance tags." },
      { id: 'D', text: "Allow servers to automatically reboot and patch during peak daytime traffic hours." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define custom Patch Baselines in Systems Manager Patch Manager and execute patching via Systems Manager Maintenance Windows targeting instance tags. Systems Manager Patch Manager automates the process of patching managed instances for security updates. Custom patch baselines define auto-approval rules for critical CVEs, and Maintenance Windows ensure patches are installed only during scheduled maintenance windows without disrupting production.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
    tags: ["SSM Patch Manager", "Patch Manager", "High Load Scale"]
  },
  {
    id: "aws-dop-328",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Systems Manager Patch Manager and Patch Baselines: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates SSM Patch Manager to automate the installation of critical operating system security patches across a hybrid fleet of Linux and Windows servers during non-business hours.",
    question: "Which solution implements these mandatory compliance and security controls? Automating OS and application security patching with approval rules and maintenance windows is under consideration.",
    options: [
      { id: 'A', text: "Instruct system administrators to log in to each server and run apt-get upgrade manually." },
      { id: 'B', text: "Allow servers to automatically reboot and patch during peak daytime traffic hours." },
      { id: 'C', text: "Disable all operating system security patching to avoid unexpected software regressions." },
      { id: 'D', text: "Define custom Patch Baselines in Systems Manager Patch Manager and execute patching via Systems Manager Maintenance Windows targeting instance tags." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define custom Patch Baselines in Systems Manager Patch Manager and execute patching via Systems Manager Maintenance Windows targeting instance tags. Systems Manager Patch Manager automates the process of patching managed instances for security updates. Custom patch baselines define auto-approval rules for critical CVEs, and Maintenance Windows ensure patches are installed only during scheduled maintenance windows without disrupting production.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
    tags: ["SSM Patch Manager", "Patch Manager", "Security Compliance"]
  },
  {
    id: "aws-dop-329",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Systems Manager Patch Manager and Patch Baselines: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates SSM Patch Manager to automate the installation of critical operating system security patches across a hybrid fleet of Linux and Windows servers during non-business hours.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Automating OS and application security patching with approval rules and maintenance windows is under consideration.",
    options: [
      { id: 'A', text: "Disable all operating system security patching to avoid unexpected software regressions." },
      { id: 'B', text: "Define custom Patch Baselines in Systems Manager Patch Manager and execute patching via Systems Manager Maintenance Windows targeting instance tags." },
      { id: 'C', text: "Instruct system administrators to log in to each server and run apt-get upgrade manually." },
      { id: 'D', text: "Allow servers to automatically reboot and patch during peak daytime traffic hours." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define custom Patch Baselines in Systems Manager Patch Manager and execute patching via Systems Manager Maintenance Windows targeting instance tags. Systems Manager Patch Manager automates the process of patching managed instances for security updates. Custom patch baselines define auto-approval rules for critical CVEs, and Maintenance Windows ensure patches are installed only during scheduled maintenance windows without disrupting production.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
    tags: ["SSM Patch Manager", "Patch Manager", "Hybrid Migration"]
  },
  {
    id: "aws-dop-330",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Systems Manager Patch Manager and Patch Baselines: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates SSM Patch Manager to automate the installation of critical operating system security patches across a hybrid fleet of Linux and Windows servers during non-business hours.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Automating OS and application security patching with approval rules and maintenance windows is under consideration.",
    options: [
      { id: 'A', text: "Disable all operating system security patching to avoid unexpected software regressions." },
      { id: 'B', text: "Allow servers to automatically reboot and patch during peak daytime traffic hours." },
      { id: 'C', text: "Instruct system administrators to log in to each server and run apt-get upgrade manually." },
      { id: 'D', text: "Define custom Patch Baselines in Systems Manager Patch Manager and execute patching via Systems Manager Maintenance Windows targeting instance tags." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define custom Patch Baselines in Systems Manager Patch Manager and execute patching via Systems Manager Maintenance Windows targeting instance tags. Systems Manager Patch Manager automates the process of patching managed instances for security updates. Custom patch baselines define auto-approval rules for critical CVEs, and Maintenance Windows ensure patches are installed only during scheduled maintenance windows without disrupting production.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
    tags: ["SSM Patch Manager", "Patch Manager", "Resilience Failure"]
  },
  {
    id: "aws-dop-331",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Custom Resources and Lambda: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Custom Resources to provision a third-party SaaS resource or perform complex data lookups that are not natively supported by standard AWS CloudFormation resource types.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Extending CloudFormation capabilities using Lambda-backed custom resources is under consideration.",
    options: [
      { id: 'A', text: "Manually create the unsupported resource in the third-party web console after stack deployment." },
      { id: 'B', text: "Wait for AWS to release native CloudFormation support before deploying the stack." },
      { id: 'C', text: "Write an external shell script that runs outside of the CloudFormation lifecycle." },
      { id: 'D', text: "Define a CloudFormation `Custom::` resource backed by an AWS Lambda function that handles `Create`, `Update`, and `Delete` lifecycle events via cfn-response." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define a CloudFormation `Custom::` resource backed by an AWS Lambda function that handles `Create`, `Update`, and `Delete` lifecycle events via cfn-response. CloudFormation Custom Resources enable developers to write custom provisioning logic in AWS Lambda. When CloudFormation creates, updates, or deletes the stack, it sends an event to the Lambda function, which performs arbitrary API calls and returns success or failure via the `cfn-response` protocol.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html",
    tags: ["Custom Resources", "Custom Resources", "Dr Failover"]
  },
  {
    id: "aws-dop-332",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Custom Resources and Lambda: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Custom Resources to provision a third-party SaaS resource or perform complex data lookups that are not natively supported by standard AWS CloudFormation resource types.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Extending CloudFormation capabilities using Lambda-backed custom resources is under consideration.",
    options: [
      { id: 'A', text: "Manually create the unsupported resource in the third-party web console after stack deployment." },
      { id: 'B', text: "Write an external shell script that runs outside of the CloudFormation lifecycle." },
      { id: 'C', text: "Wait for AWS to release native CloudFormation support before deploying the stack." },
      { id: 'D', text: "Define a CloudFormation `Custom::` resource backed by an AWS Lambda function that handles `Create`, `Update`, and `Delete` lifecycle events via cfn-response." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define a CloudFormation `Custom::` resource backed by an AWS Lambda function that handles `Create`, `Update`, and `Delete` lifecycle events via cfn-response. CloudFormation Custom Resources enable developers to write custom provisioning logic in AWS Lambda. When CloudFormation creates, updates, or deletes the stack, it sends an event to the Lambda function, which performs arbitrary API calls and returns success or failure via the `cfn-response` protocol.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html",
    tags: ["Custom Resources", "Custom Resources", "High Load Scale"]
  },
  {
    id: "aws-dop-333",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Custom Resources and Lambda: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Custom Resources to provision a third-party SaaS resource or perform complex data lookups that are not natively supported by standard AWS CloudFormation resource types.",
    question: "Which solution implements these mandatory compliance and security controls? Extending CloudFormation capabilities using Lambda-backed custom resources is under consideration.",
    options: [
      { id: 'A', text: "Wait for AWS to release native CloudFormation support before deploying the stack." },
      { id: 'B', text: "Define a CloudFormation `Custom::` resource backed by an AWS Lambda function that handles `Create`, `Update`, and `Delete` lifecycle events via cfn-response." },
      { id: 'C', text: "Write an external shell script that runs outside of the CloudFormation lifecycle." },
      { id: 'D', text: "Manually create the unsupported resource in the third-party web console after stack deployment." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define a CloudFormation `Custom::` resource backed by an AWS Lambda function that handles `Create`, `Update`, and `Delete` lifecycle events via cfn-response. CloudFormation Custom Resources enable developers to write custom provisioning logic in AWS Lambda. When CloudFormation creates, updates, or deletes the stack, it sends an event to the Lambda function, which performs arbitrary API calls and returns success or failure via the `cfn-response` protocol.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html",
    tags: ["Custom Resources", "Custom Resources", "Security Compliance"]
  },
  {
    id: "aws-dop-334",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Custom Resources and Lambda: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Custom Resources to provision a third-party SaaS resource or perform complex data lookups that are not natively supported by standard AWS CloudFormation resource types.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Extending CloudFormation capabilities using Lambda-backed custom resources is under consideration.",
    options: [
      { id: 'A', text: "Write an external shell script that runs outside of the CloudFormation lifecycle." },
      { id: 'B', text: "Manually create the unsupported resource in the third-party web console after stack deployment." },
      { id: 'C', text: "Define a CloudFormation `Custom::` resource backed by an AWS Lambda function that handles `Create`, `Update`, and `Delete` lifecycle events via cfn-response." },
      { id: 'D', text: "Wait for AWS to release native CloudFormation support before deploying the stack." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define a CloudFormation `Custom::` resource backed by an AWS Lambda function that handles `Create`, `Update`, and `Delete` lifecycle events via cfn-response. CloudFormation Custom Resources enable developers to write custom provisioning logic in AWS Lambda. When CloudFormation creates, updates, or deletes the stack, it sends an event to the Lambda function, which performs arbitrary API calls and returns success or failure via the `cfn-response` protocol.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html",
    tags: ["Custom Resources", "Custom Resources", "Hybrid Migration"]
  },
  {
    id: "aws-dop-335",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Custom Resources and Lambda: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Custom Resources to provision a third-party SaaS resource or perform complex data lookups that are not natively supported by standard AWS CloudFormation resource types.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Extending CloudFormation capabilities using Lambda-backed custom resources is under consideration.",
    options: [
      { id: 'A', text: "Write an external shell script that runs outside of the CloudFormation lifecycle." },
      { id: 'B', text: "Define a CloudFormation `Custom::` resource backed by an AWS Lambda function that handles `Create`, `Update`, and `Delete` lifecycle events via cfn-response." },
      { id: 'C', text: "Manually create the unsupported resource in the third-party web console after stack deployment." },
      { id: 'D', text: "Wait for AWS to release native CloudFormation support before deploying the stack." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define a CloudFormation `Custom::` resource backed by an AWS Lambda function that handles `Create`, `Update`, and `Delete` lifecycle events via cfn-response. CloudFormation Custom Resources enable developers to write custom provisioning logic in AWS Lambda. When CloudFormation creates, updates, or deletes the stack, it sends an event to the Lambda function, which performs arbitrary API calls and returns success or failure via the `cfn-response` protocol.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html",
    tags: ["Custom Resources", "Custom Resources", "Resilience Failure"]
  },
  {
    id: "aws-dop-336",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager Parameter Store vs Secrets Manager: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Configuration vs Secrets to manage hundreds of non-sensitive application configuration strings cost-effectively while storing database passwords with automated rotation.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Hierarchical configuration storage in Parameter Store vs lifecycle rotation in Secrets Manager is under consideration.",
    options: [
      { id: 'A', text: "Hardcode environment parameters in the application binary." },
      { id: 'B', text: "Store non-sensitive configurations in SSM Parameter Store (Standard tier, free), and store database passwords in AWS Secrets Manager with automated Lambda rotation." },
      { id: 'C', text: "Store all database passwords in plaintext in Git repository source code." },
      { id: 'D', text: "Store all non-sensitive configuration keys in Secrets Manager, paying monthly per-secret charges unnecessarily." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Store non-sensitive configurations in SSM Parameter Store (Standard tier, free), and store database passwords in AWS Secrets Manager with automated Lambda rotation. SSM Parameter Store provides low-cost/free hierarchical storage for configuration data and encrypted strings. AWS Secrets Manager is purpose-built for sensitive credentials, offering native cross-account access, fine-grained access control, and automated credential rotation using Lambda functions.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html",
    tags: ["Configuration vs Secrets", "Parameter Store vs Secrets", "Dr Failover"]
  },
  {
    id: "aws-dop-337",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager Parameter Store vs Secrets Manager: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Configuration vs Secrets to manage hundreds of non-sensitive application configuration strings cost-effectively while storing database passwords with automated rotation.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Hierarchical configuration storage in Parameter Store vs lifecycle rotation in Secrets Manager is under consideration.",
    options: [
      { id: 'A', text: "Store all database passwords in plaintext in Git repository source code." },
      { id: 'B', text: "Store all non-sensitive configuration keys in Secrets Manager, paying monthly per-secret charges unnecessarily." },
      { id: 'C', text: "Store non-sensitive configurations in SSM Parameter Store (Standard tier, free), and store database passwords in AWS Secrets Manager with automated Lambda rotation." },
      { id: 'D', text: "Hardcode environment parameters in the application binary." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Store non-sensitive configurations in SSM Parameter Store (Standard tier, free), and store database passwords in AWS Secrets Manager with automated Lambda rotation. SSM Parameter Store provides low-cost/free hierarchical storage for configuration data and encrypted strings. AWS Secrets Manager is purpose-built for sensitive credentials, offering native cross-account access, fine-grained access control, and automated credential rotation using Lambda functions.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html",
    tags: ["Configuration vs Secrets", "Parameter Store vs Secrets", "High Load Scale"]
  },
  {
    id: "aws-dop-338",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager Parameter Store vs Secrets Manager: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Configuration vs Secrets to manage hundreds of non-sensitive application configuration strings cost-effectively while storing database passwords with automated rotation.",
    question: "Which solution implements these mandatory compliance and security controls? Hierarchical configuration storage in Parameter Store vs lifecycle rotation in Secrets Manager is under consideration.",
    options: [
      { id: 'A', text: "Store non-sensitive configurations in SSM Parameter Store (Standard tier, free), and store database passwords in AWS Secrets Manager with automated Lambda rotation." },
      { id: 'B', text: "Store all database passwords in plaintext in Git repository source code." },
      { id: 'C', text: "Hardcode environment parameters in the application binary." },
      { id: 'D', text: "Store all non-sensitive configuration keys in Secrets Manager, paying monthly per-secret charges unnecessarily." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store non-sensitive configurations in SSM Parameter Store (Standard tier, free), and store database passwords in AWS Secrets Manager with automated Lambda rotation. SSM Parameter Store provides low-cost/free hierarchical storage for configuration data and encrypted strings. AWS Secrets Manager is purpose-built for sensitive credentials, offering native cross-account access, fine-grained access control, and automated credential rotation using Lambda functions.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html",
    tags: ["Configuration vs Secrets", "Parameter Store vs Secrets", "Security Compliance"]
  },
  {
    id: "aws-dop-339",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager Parameter Store vs Secrets Manager: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Configuration vs Secrets to manage hundreds of non-sensitive application configuration strings cost-effectively while storing database passwords with automated rotation.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Hierarchical configuration storage in Parameter Store vs lifecycle rotation in Secrets Manager is under consideration.",
    options: [
      { id: 'A', text: "Store all database passwords in plaintext in Git repository source code." },
      { id: 'B', text: "Hardcode environment parameters in the application binary." },
      { id: 'C', text: "Store all non-sensitive configuration keys in Secrets Manager, paying monthly per-secret charges unnecessarily." },
      { id: 'D', text: "Store non-sensitive configurations in SSM Parameter Store (Standard tier, free), and store database passwords in AWS Secrets Manager with automated Lambda rotation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Store non-sensitive configurations in SSM Parameter Store (Standard tier, free), and store database passwords in AWS Secrets Manager with automated Lambda rotation. SSM Parameter Store provides low-cost/free hierarchical storage for configuration data and encrypted strings. AWS Secrets Manager is purpose-built for sensitive credentials, offering native cross-account access, fine-grained access control, and automated credential rotation using Lambda functions.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html",
    tags: ["Configuration vs Secrets", "Parameter Store vs Secrets", "Hybrid Migration"]
  },
  {
    id: "aws-dop-340",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager Parameter Store vs Secrets Manager: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Configuration vs Secrets to manage hundreds of non-sensitive application configuration strings cost-effectively while storing database passwords with automated rotation.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Hierarchical configuration storage in Parameter Store vs lifecycle rotation in Secrets Manager is under consideration.",
    options: [
      { id: 'A', text: "Store all non-sensitive configuration keys in Secrets Manager, paying monthly per-secret charges unnecessarily." },
      { id: 'B', text: "Store all database passwords in plaintext in Git repository source code." },
      { id: 'C', text: "Store non-sensitive configurations in SSM Parameter Store (Standard tier, free), and store database passwords in AWS Secrets Manager with automated Lambda rotation." },
      { id: 'D', text: "Hardcode environment parameters in the application binary." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Store non-sensitive configurations in SSM Parameter Store (Standard tier, free), and store database passwords in AWS Secrets Manager with automated Lambda rotation. SSM Parameter Store provides low-cost/free hierarchical storage for configuration data and encrypted strings. AWS Secrets Manager is purpose-built for sensitive credentials, offering native cross-account access, fine-grained access control, and automated credential rotation using Lambda functions.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html",
    tags: ["Configuration vs Secrets", "Parameter Store vs Secrets", "Resilience Failure"]
  },
  {
    id: "aws-dop-341",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Stack Termination Protection and DeletionPolicy: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Resource Protection to prevent accidental deletion of a production Amazon RDS database if an engineer accidentally deletes or updates the enclosing CloudFormation stack.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Protecting critical production databases with DeletionPolicy Retain and termination protection is under consideration.",
    options: [
      { id: 'A', text: "Set `DeletionPolicy: Delete` so all resources are removed cleanly." },
      { id: 'B', text: "Grant full CloudFormation administrator access to all team members." },
      { id: 'C', text: "Delete the CloudFormation stack template from S3." },
      { id: 'D', text: "Set `DeletionPolicy: Retain` on the RDS resource and enable `TerminationProtection` on the CloudFormation stack." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set `DeletionPolicy: Retain` on the RDS resource and enable `TerminationProtection` on the CloudFormation stack. Enabling `TerminationProtection` blocks stack deletion requests until protection is explicitly disabled. Setting `DeletionPolicy: Retain` on specific resources (like RDS databases or S3 buckets) ensures that even if the stack is deleted, the underlying physical data resource is preserved intact.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html",
    tags: ["Resource Protection", "Termination Protection", "Dr Failover"]
  },
  {
    id: "aws-dop-342",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Stack Termination Protection and DeletionPolicy: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Resource Protection to prevent accidental deletion of a production Amazon RDS database if an engineer accidentally deletes or updates the enclosing CloudFormation stack.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Protecting critical production databases with DeletionPolicy Retain and termination protection is under consideration.",
    options: [
      { id: 'A', text: "Set `DeletionPolicy: Retain` on the RDS resource and enable `TerminationProtection` on the CloudFormation stack." },
      { id: 'B', text: "Set `DeletionPolicy: Delete` so all resources are removed cleanly." },
      { id: 'C', text: "Delete the CloudFormation stack template from S3." },
      { id: 'D', text: "Grant full CloudFormation administrator access to all team members." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `DeletionPolicy: Retain` on the RDS resource and enable `TerminationProtection` on the CloudFormation stack. Enabling `TerminationProtection` blocks stack deletion requests until protection is explicitly disabled. Setting `DeletionPolicy: Retain` on specific resources (like RDS databases or S3 buckets) ensures that even if the stack is deleted, the underlying physical data resource is preserved intact.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html",
    tags: ["Resource Protection", "Termination Protection", "High Load Scale"]
  },
  {
    id: "aws-dop-343",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Stack Termination Protection and DeletionPolicy: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Resource Protection to prevent accidental deletion of a production Amazon RDS database if an engineer accidentally deletes or updates the enclosing CloudFormation stack.",
    question: "Which solution implements these mandatory compliance and security controls? Protecting critical production databases with DeletionPolicy Retain and termination protection is under consideration.",
    options: [
      { id: 'A', text: "Delete the CloudFormation stack template from S3." },
      { id: 'B', text: "Grant full CloudFormation administrator access to all team members." },
      { id: 'C', text: "Set `DeletionPolicy: Delete` so all resources are removed cleanly." },
      { id: 'D', text: "Set `DeletionPolicy: Retain` on the RDS resource and enable `TerminationProtection` on the CloudFormation stack." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set `DeletionPolicy: Retain` on the RDS resource and enable `TerminationProtection` on the CloudFormation stack. Enabling `TerminationProtection` blocks stack deletion requests until protection is explicitly disabled. Setting `DeletionPolicy: Retain` on specific resources (like RDS databases or S3 buckets) ensures that even if the stack is deleted, the underlying physical data resource is preserved intact.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html",
    tags: ["Resource Protection", "Termination Protection", "Security Compliance"]
  },
  {
    id: "aws-dop-344",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Stack Termination Protection and DeletionPolicy: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Resource Protection to prevent accidental deletion of a production Amazon RDS database if an engineer accidentally deletes or updates the enclosing CloudFormation stack.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Protecting critical production databases with DeletionPolicy Retain and termination protection is under consideration.",
    options: [
      { id: 'A', text: "Set `DeletionPolicy: Delete` so all resources are removed cleanly." },
      { id: 'B', text: "Set `DeletionPolicy: Retain` on the RDS resource and enable `TerminationProtection` on the CloudFormation stack." },
      { id: 'C', text: "Grant full CloudFormation administrator access to all team members." },
      { id: 'D', text: "Delete the CloudFormation stack template from S3." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `DeletionPolicy: Retain` on the RDS resource and enable `TerminationProtection` on the CloudFormation stack. Enabling `TerminationProtection` blocks stack deletion requests until protection is explicitly disabled. Setting `DeletionPolicy: Retain` on specific resources (like RDS databases or S3 buckets) ensures that even if the stack is deleted, the underlying physical data resource is preserved intact.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html",
    tags: ["Resource Protection", "Termination Protection", "Hybrid Migration"]
  },
  {
    id: "aws-dop-345",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Stack Termination Protection and DeletionPolicy: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Resource Protection to prevent accidental deletion of a production Amazon RDS database if an engineer accidentally deletes or updates the enclosing CloudFormation stack.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Protecting critical production databases with DeletionPolicy Retain and termination protection is under consideration.",
    options: [
      { id: 'A', text: "Grant full CloudFormation administrator access to all team members." },
      { id: 'B', text: "Set `DeletionPolicy: Retain` on the RDS resource and enable `TerminationProtection` on the CloudFormation stack." },
      { id: 'C', text: "Set `DeletionPolicy: Delete` so all resources are removed cleanly." },
      { id: 'D', text: "Delete the CloudFormation stack template from S3." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `DeletionPolicy: Retain` on the RDS resource and enable `TerminationProtection` on the CloudFormation stack. Enabling `TerminationProtection` blocks stack deletion requests until protection is explicitly disabled. Setting `DeletionPolicy: Retain` on specific resources (like RDS databases or S3 buckets) ensures that even if the stack is deleted, the underlying physical data resource is preserved intact.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html",
    tags: ["Resource Protection", "Termination Protection", "Resilience Failure"]
  },
  {
    id: "aws-dop-346",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Multi-Region Disaster Recovery: Pilot Light vs Warm Standby: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Disaster Recovery to design a disaster recovery strategy for a mission-critical financial application that satisfies an RTO under 15 minutes and RPO under 1 minute across AWS regions.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Cost-optimized multi-region DR architectures using Aurora Global Databases is under consideration.",
    options: [
      { id: 'A', text: "Deploy a single-region active-passive architecture in the same availability zone." },
      { id: 'B', text: "Rely on manual DNS updates and cold server provisioning during a regional disaster." },
      { id: 'C', text: "Deploy a Warm Standby architecture using Amazon Aurora Global Database with cross-region replication and Route 53 Application Recovery Controller routing controls." },
      { id: 'D', text: "Deploy a Backup and Restore strategy restoring raw database snapshots from S3 during an outage." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy a Warm Standby architecture using Amazon Aurora Global Database with cross-region replication and Route 53 Application Recovery Controller routing controls. Amazon Aurora Global Databases provide sub-second replication latency across AWS regions (RPO &lt; 1s). Combining Aurora Global Database with Warm Standby compute (minimal scaled instances running in the secondary region) allows fast failover (RTO &lt; 15m) via Route 53 Application Recovery Controller.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html",
    tags: ["Disaster Recovery", "DR Strategies", "Dr Failover"]
  },
  {
    id: "aws-dop-347",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Multi-Region Disaster Recovery: Pilot Light vs Warm Standby: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Disaster Recovery to design a disaster recovery strategy for a mission-critical financial application that satisfies an RTO under 15 minutes and RPO under 1 minute across AWS regions.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Cost-optimized multi-region DR architectures using Aurora Global Databases is under consideration.",
    options: [
      { id: 'A', text: "Deploy a single-region active-passive architecture in the same availability zone." },
      { id: 'B', text: "Deploy a Warm Standby architecture using Amazon Aurora Global Database with cross-region replication and Route 53 Application Recovery Controller routing controls." },
      { id: 'C', text: "Rely on manual DNS updates and cold server provisioning during a regional disaster." },
      { id: 'D', text: "Deploy a Backup and Restore strategy restoring raw database snapshots from S3 during an outage." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy a Warm Standby architecture using Amazon Aurora Global Database with cross-region replication and Route 53 Application Recovery Controller routing controls. Amazon Aurora Global Databases provide sub-second replication latency across AWS regions (RPO &lt; 1s). Combining Aurora Global Database with Warm Standby compute (minimal scaled instances running in the secondary region) allows fast failover (RTO &lt; 15m) via Route 53 Application Recovery Controller.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html",
    tags: ["Disaster Recovery", "DR Strategies", "High Load Scale"]
  },
  {
    id: "aws-dop-348",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Multi-Region Disaster Recovery: Pilot Light vs Warm Standby: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Disaster Recovery to design a disaster recovery strategy for a mission-critical financial application that satisfies an RTO under 15 minutes and RPO under 1 minute across AWS regions.",
    question: "Which solution implements these mandatory compliance and security controls? Cost-optimized multi-region DR architectures using Aurora Global Databases is under consideration.",
    options: [
      { id: 'A', text: "Deploy a single-region active-passive architecture in the same availability zone." },
      { id: 'B', text: "Rely on manual DNS updates and cold server provisioning during a regional disaster." },
      { id: 'C', text: "Deploy a Warm Standby architecture using Amazon Aurora Global Database with cross-region replication and Route 53 Application Recovery Controller routing controls." },
      { id: 'D', text: "Deploy a Backup and Restore strategy restoring raw database snapshots from S3 during an outage." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy a Warm Standby architecture using Amazon Aurora Global Database with cross-region replication and Route 53 Application Recovery Controller routing controls. Amazon Aurora Global Databases provide sub-second replication latency across AWS regions (RPO &lt; 1s). Combining Aurora Global Database with Warm Standby compute (minimal scaled instances running in the secondary region) allows fast failover (RTO &lt; 15m) via Route 53 Application Recovery Controller.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html",
    tags: ["Disaster Recovery", "DR Strategies", "Security Compliance"]
  },
  {
    id: "aws-dop-349",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Multi-Region Disaster Recovery: Pilot Light vs Warm Standby: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Disaster Recovery to design a disaster recovery strategy for a mission-critical financial application that satisfies an RTO under 15 minutes and RPO under 1 minute across AWS regions.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Cost-optimized multi-region DR architectures using Aurora Global Databases is under consideration.",
    options: [
      { id: 'A', text: "Rely on manual DNS updates and cold server provisioning during a regional disaster." },
      { id: 'B', text: "Deploy a Warm Standby architecture using Amazon Aurora Global Database with cross-region replication and Route 53 Application Recovery Controller routing controls." },
      { id: 'C', text: "Deploy a Backup and Restore strategy restoring raw database snapshots from S3 during an outage." },
      { id: 'D', text: "Deploy a single-region active-passive architecture in the same availability zone." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy a Warm Standby architecture using Amazon Aurora Global Database with cross-region replication and Route 53 Application Recovery Controller routing controls. Amazon Aurora Global Databases provide sub-second replication latency across AWS regions (RPO &lt; 1s). Combining Aurora Global Database with Warm Standby compute (minimal scaled instances running in the secondary region) allows fast failover (RTO &lt; 15m) via Route 53 Application Recovery Controller.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html",
    tags: ["Disaster Recovery", "DR Strategies", "Hybrid Migration"]
  },
  {
    id: "aws-dop-350",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Multi-Region Disaster Recovery: Pilot Light vs Warm Standby: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Disaster Recovery to design a disaster recovery strategy for a mission-critical financial application that satisfies an RTO under 15 minutes and RPO under 1 minute across AWS regions.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Cost-optimized multi-region DR architectures using Aurora Global Databases is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Warm Standby architecture using Amazon Aurora Global Database with cross-region replication and Route 53 Application Recovery Controller routing controls." },
      { id: 'B', text: "Deploy a Backup and Restore strategy restoring raw database snapshots from S3 during an outage." },
      { id: 'C', text: "Deploy a single-region active-passive architecture in the same availability zone." },
      { id: 'D', text: "Rely on manual DNS updates and cold server provisioning during a regional disaster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Warm Standby architecture using Amazon Aurora Global Database with cross-region replication and Route 53 Application Recovery Controller routing controls. Amazon Aurora Global Databases provide sub-second replication latency across AWS regions (RPO &lt; 1s). Combining Aurora Global Database with Warm Standby compute (minimal scaled instances running in the secondary region) allows fast failover (RTO &lt; 15m) via Route 53 Application Recovery Controller.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html",
    tags: ["Disaster Recovery", "DR Strategies", "Resilience Failure"]
  }
];

export default AWS_DOP_QUESTIONS_14;
