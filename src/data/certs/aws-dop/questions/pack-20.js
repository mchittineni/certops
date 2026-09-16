export const AWS_DOP_QUESTIONS_20 = [
  {
    id: "aws-dop-476",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Amazon Inspector Automated Container Scanning: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to automatically scan container images for operating system and application package CVEs upon push to Amazon ECR and continuously thereafter.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Disable vulnerability scanning to accelerate CI/CD push speeds." },
      { id: 'B', text: "Scan containers only after they have been running in production for three months." },
      { id: 'C', text: "Rely on developers manually running local vulnerability scanners before pushing." },
      { id: 'D', text: "Enable Amazon Inspector enhanced scanning for Amazon ECR repositories." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Amazon Inspector enhanced scanning for Amazon ECR repositories. Amazon Inspector integrates with Amazon ECR to provide automated, continuous vulnerability scanning. It inspects images upon push and continuously monitors them for new CVEs as new vulnerability advisories are published in national databases.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/scanning-ecr.html",
    tags: ["Vulnerability Management","Amazon Inspector","Dr Failover"]
  },
  {
    id: "aws-dop-477",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Amazon Inspector Automated Container Scanning: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to automatically scan container images for operating system and application package CVEs upon push to Amazon ECR and continuously thereafter.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "Enable Amazon Inspector enhanced scanning for Amazon ECR repositories." },
      { id: 'B', text: "Disable vulnerability scanning to accelerate CI/CD push speeds." },
      { id: 'C', text: "Rely on developers manually running local vulnerability scanners before pushing." },
      { id: 'D', text: "Scan containers only after they have been running in production for three months." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Inspector enhanced scanning for Amazon ECR repositories. Amazon Inspector integrates with Amazon ECR to provide automated, continuous vulnerability scanning. It inspects images upon push and continuously monitors them for new CVEs as new vulnerability advisories are published in national databases.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/scanning-ecr.html",
    tags: ["Vulnerability Management","Amazon Inspector","High Load Scale"]
  },
  {
    id: "aws-dop-478",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Amazon Inspector Automated Container Scanning: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to automatically scan container images for operating system and application package CVEs upon push to Amazon ECR and continuously thereafter.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "Scan containers only after they have been running in production for three months." },
      { id: 'B', text: "Rely on developers manually running local vulnerability scanners before pushing." },
      { id: 'C', text: "Disable vulnerability scanning to accelerate CI/CD push speeds." },
      { id: 'D', text: "Enable Amazon Inspector enhanced scanning for Amazon ECR repositories." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Amazon Inspector enhanced scanning for Amazon ECR repositories. Amazon Inspector integrates with Amazon ECR to provide automated, continuous vulnerability scanning. It inspects images upon push and continuously monitors them for new CVEs as new vulnerability advisories are published in national databases.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/scanning-ecr.html",
    tags: ["Vulnerability Management","Amazon Inspector","Security Compliance"]
  },
  {
    id: "aws-dop-479",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Amazon Inspector Automated Container Scanning: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to automatically scan container images for operating system and application package CVEs upon push to Amazon ECR and continuously thereafter.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "Enable Amazon Inspector enhanced scanning for Amazon ECR repositories." },
      { id: 'B', text: "Rely on developers manually running local vulnerability scanners before pushing." },
      { id: 'C', text: "Scan containers only after they have been running in production for three months." },
      { id: 'D', text: "Disable vulnerability scanning to accelerate CI/CD push speeds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Inspector enhanced scanning for Amazon ECR repositories. Amazon Inspector integrates with Amazon ECR to provide automated, continuous vulnerability scanning. It inspects images upon push and continuously monitors them for new CVEs as new vulnerability advisories are published in national databases.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/scanning-ecr.html",
    tags: ["Vulnerability Management","Amazon Inspector","Hybrid Migration"]
  },
  {
    id: "aws-dop-480",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Amazon Inspector Automated Container Scanning: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to automatically scan container images for operating system and application package CVEs upon push to Amazon ECR and continuously thereafter.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "Enable Amazon Inspector enhanced scanning for Amazon ECR repositories." },
      { id: 'B', text: "Rely on developers manually running local vulnerability scanners before pushing." },
      { id: 'C', text: "Scan containers only after they have been running in production for three months." },
      { id: 'D', text: "Disable vulnerability scanning to accelerate CI/CD push speeds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Inspector enhanced scanning for Amazon ECR repositories. Amazon Inspector integrates with Amazon ECR to provide automated, continuous vulnerability scanning. It inspects images upon push and continuously monitors them for new CVEs as new vulnerability advisories are published in national databases.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/scanning-ecr.html",
    tags: ["Vulnerability Management","Amazon Inspector","Resilience Failure"]
  },
  {
    id: "aws-dop-481",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS KMS Key Policies and Multi-Region Keys: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to replicate encrypted data across AWS regions while allowing applications in both regions to decrypt data using identical key IDs without re-encrypting.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "A separate KMS key per region, with the data re-encrypted as it replicates." },
      { id: 'B', text: "A single-region KMS key, with the secondary region granted decrypt on it." },
      { id: 'C', text: "A KMS multi-region key, with a replica in the second region and matching policies." },
      { id: 'D', text: "A customer-supplied key held by the application in both of the regions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create an AWS KMS multi-region key (primary key in primary region, replica key in secondary region) with matching key policies. AWS KMS multi-region keys share the same key ID, key material, and ARN across regions. They allow client applications in secondary regions to decrypt data encrypted in the primary region without requiring cross-region network calls or re-encryption steps.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html",
    tags: ["KMS Encryption","KMS Multi-Region","Dr Failover"]
  },
  {
    id: "aws-dop-482",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS KMS Key Policies and Multi-Region Keys: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to replicate encrypted data across AWS regions while allowing applications in both regions to decrypt data using identical key IDs without re-encrypting.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "A separate KMS key per region, with the data re-encrypted as it replicates." },
      { id: 'B', text: "A KMS multi-region key, with a replica in the second region and matching policies." },
      { id: 'C', text: "A customer-supplied key held by the application in both of the regions." },
      { id: 'D', text: "A single-region KMS key, with the secondary region granted decrypt on it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create an AWS KMS multi-region key (primary key in primary region, replica key in secondary region) with matching key policies. AWS KMS multi-region keys share the same key ID, key material, and ARN across regions. They allow client applications in secondary regions to decrypt data encrypted in the primary region without requiring cross-region network calls or re-encryption steps.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html",
    tags: ["KMS Encryption","KMS Multi-Region","High Load Scale"]
  },
  {
    id: "aws-dop-483",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS KMS Key Policies and Multi-Region Keys: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to replicate encrypted data across AWS regions while allowing applications in both regions to decrypt data using identical key IDs without re-encrypting.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "A separate KMS key per region, with the data re-encrypted as it replicates." },
      { id: 'B', text: "A customer-supplied key held by the application in both of the regions." },
      { id: 'C', text: "A single-region KMS key, with the secondary region granted decrypt on it." },
      { id: 'D', text: "A KMS multi-region key, with a replica in the second region and matching policies." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create an AWS KMS multi-region key (primary key in primary region, replica key in secondary region) with matching key policies. AWS KMS multi-region keys share the same key ID, key material, and ARN across regions. They allow client applications in secondary regions to decrypt data encrypted in the primary region without requiring cross-region network calls or re-encryption steps.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html",
    tags: ["KMS Encryption","KMS Multi-Region","Security Compliance"]
  },
  {
    id: "aws-dop-484",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS KMS Key Policies and Multi-Region Keys: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to replicate encrypted data across AWS regions while allowing applications in both regions to decrypt data using identical key IDs without re-encrypting.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "A KMS multi-region key, with a replica in the second region and matching policies." },
      { id: 'B', text: "A separate KMS key per region, with the data re-encrypted as it replicates." },
      { id: 'C', text: "A single-region KMS key, with the secondary region granted decrypt on it." },
      { id: 'D', text: "A customer-supplied key held by the application in both of the regions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an AWS KMS multi-region key (primary key in primary region, replica key in secondary region) with matching key policies. AWS KMS multi-region keys share the same key ID, key material, and ARN across regions. They allow client applications in secondary regions to decrypt data encrypted in the primary region without requiring cross-region network calls or re-encryption steps.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html",
    tags: ["KMS Encryption","KMS Multi-Region","Hybrid Migration"]
  },
  {
    id: "aws-dop-485",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS KMS Key Policies and Multi-Region Keys: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to replicate encrypted data across AWS regions while allowing applications in both regions to decrypt data using identical key IDs without re-encrypting.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "A KMS multi-region key, with a replica in the second region and matching policies." },
      { id: 'B', text: "A customer-supplied key held by the application in both of the regions." },
      { id: 'C', text: "A separate KMS key per region, with the data re-encrypted as it replicates." },
      { id: 'D', text: "A single-region KMS key, with the secondary region granted decrypt on it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an AWS KMS multi-region key (primary key in primary region, replica key in secondary region) with matching key policies. AWS KMS multi-region keys share the same key ID, key material, and ARN across regions. They allow client applications in secondary regions to decrypt data encrypted in the primary region without requiring cross-region network calls or re-encryption steps.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html",
    tags: ["KMS Encryption","KMS Multi-Region","Resilience Failure"]
  },
  {
    id: "aws-dop-486",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS Security Hub Automated Compliance Scoring: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to continuously evaluate organizational adherence to security standards (CIS AWS Foundations, AWS Foundational Security Best Practices) across all member accounts.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Enable Security Hub with a delegated administrator, the standard benchmarks, and finding aggregation." },
      { id: 'B', text: "Enable AWS Config with an organization aggregator and the conformance packs per account." },
      { id: 'C', text: "Enable GuardDuty with a delegated administrator and route the findings to a central topic." },
      { id: 'D', text: "Enable CloudTrail organization trails and query the events with Athena on a schedule." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable AWS Security Hub as a delegated administrator across all accounts, enabling standard security benchmarks and automated finding aggregation. AWS Security Hub provides a comprehensive view of cloud security posture. It continuously evaluates accounts against security frameworks (CIS, PCI-DSS, NIST), generates automated compliance scores, and centralizes findings from GuardDuty, Inspector, and IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Posture","Security Hub","Dr Failover"]
  },
  {
    id: "aws-dop-487",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS Security Hub Automated Compliance Scoring: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to continuously evaluate organizational adherence to security standards (CIS AWS Foundations, AWS Foundational Security Best Practices) across all member accounts.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "Enable CloudTrail organization trails and query the events with Athena on a schedule." },
      { id: 'B', text: "Enable AWS Config with an organization aggregator and the conformance packs per account." },
      { id: 'C', text: "Enable Security Hub with a delegated administrator, the standard benchmarks, and finding aggregation." },
      { id: 'D', text: "Enable GuardDuty with a delegated administrator and route the findings to a central topic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable AWS Security Hub as a delegated administrator across all accounts, enabling standard security benchmarks and automated finding aggregation. AWS Security Hub provides a comprehensive view of cloud security posture. It continuously evaluates accounts against security frameworks (CIS, PCI-DSS, NIST), generates automated compliance scores, and centralizes findings from GuardDuty, Inspector, and IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Posture","Security Hub","High Load Scale"]
  },
  {
    id: "aws-dop-488",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS Security Hub Automated Compliance Scoring: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to continuously evaluate organizational adherence to security standards (CIS AWS Foundations, AWS Foundational Security Best Practices) across all member accounts.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "Enable GuardDuty with a delegated administrator and route the findings to a central topic." },
      { id: 'B', text: "Enable AWS Config with an organization aggregator and the conformance packs per account." },
      { id: 'C', text: "Enable CloudTrail organization trails and query the events with Athena on a schedule." },
      { id: 'D', text: "Enable Security Hub with a delegated administrator, the standard benchmarks, and finding aggregation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable AWS Security Hub as a delegated administrator across all accounts, enabling standard security benchmarks and automated finding aggregation. AWS Security Hub provides a comprehensive view of cloud security posture. It continuously evaluates accounts against security frameworks (CIS, PCI-DSS, NIST), generates automated compliance scores, and centralizes findings from GuardDuty, Inspector, and IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Posture","Security Hub","Security Compliance"]
  },
  {
    id: "aws-dop-489",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS Security Hub Automated Compliance Scoring: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to continuously evaluate organizational adherence to security standards (CIS AWS Foundations, AWS Foundational Security Best Practices) across all member accounts.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "Enable GuardDuty with a delegated administrator and route the findings to a central topic." },
      { id: 'B', text: "Enable AWS Config with an organization aggregator and the conformance packs per account." },
      { id: 'C', text: "Enable CloudTrail organization trails and query the events with Athena on a schedule." },
      { id: 'D', text: "Enable Security Hub with a delegated administrator, the standard benchmarks, and finding aggregation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable AWS Security Hub as a delegated administrator across all accounts, enabling standard security benchmarks and automated finding aggregation. AWS Security Hub provides a comprehensive view of cloud security posture. It continuously evaluates accounts against security frameworks (CIS, PCI-DSS, NIST), generates automated compliance scores, and centralizes findings from GuardDuty, Inspector, and IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Posture","Security Hub","Hybrid Migration"]
  },
  {
    id: "aws-dop-490",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS Security Hub Automated Compliance Scoring: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to continuously evaluate organizational adherence to security standards (CIS AWS Foundations, AWS Foundational Security Best Practices) across all member accounts.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "Enable GuardDuty with a delegated administrator and route the findings to a central topic." },
      { id: 'B', text: "Enable AWS Config with an organization aggregator and the conformance packs per account." },
      { id: 'C', text: "Enable CloudTrail organization trails and query the events with Athena on a schedule." },
      { id: 'D', text: "Enable Security Hub with a delegated administrator, the standard benchmarks, and finding aggregation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable AWS Security Hub as a delegated administrator across all accounts, enabling standard security benchmarks and automated finding aggregation. AWS Security Hub provides a comprehensive view of cloud security posture. It continuously evaluates accounts against security frameworks (CIS, PCI-DSS, NIST), generates automated compliance scores, and centralizes findings from GuardDuty, Inspector, and IAM Access Analyzer.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Posture","Security Hub","Resilience Failure"]
  },
  {
    id: "aws-dop-491",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "IAM Roles Anywhere for On-Premises Workloads: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to enable on-premises servers in a corporate data center to authenticate to AWS APIs securely without creating or storing long-lived IAM access keys.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "IAM Roles Anywhere, with the on-premises certificate authority as the trust anchor." },
      { id: 'B', text: "An IAM user per server, with its access keys rotated by a scheduled job." },
      { id: 'C', text: "An OIDC identity provider trusting the on-premises workload identity system." },
      { id: 'D', text: "A bastion in the VPC that the servers reach through, holding the credentials." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS IAM Roles Anywhere using an on-premises enterprise Public Key Infrastructure (PKI) Certificate Authority (CA) trust anchor. IAM Roles Anywhere allows workloads running outside of AWS (on-premises servers, other cloud providers) to exchange X.509 digital certificates from an internal CA for short-lived, temporary AWS IAM credentials, eliminating dangerous long-lived access keys.",
    referenceUrl: "https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html",
    tags: ["Hybrid Authentication","IAM Roles Anywhere","Dr Failover"]
  },
  {
    id: "aws-dop-492",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "IAM Roles Anywhere for On-Premises Workloads: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to enable on-premises servers in a corporate data center to authenticate to AWS APIs securely without creating or storing long-lived IAM access keys.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "An OIDC identity provider trusting the on-premises workload identity system." },
      { id: 'B', text: "A bastion in the VPC that the servers reach through, holding the credentials." },
      { id: 'C', text: "IAM Roles Anywhere, with the on-premises certificate authority as the trust anchor." },
      { id: 'D', text: "An IAM user per server, with its access keys rotated by a scheduled job." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy AWS IAM Roles Anywhere using an on-premises enterprise Public Key Infrastructure (PKI) Certificate Authority (CA) trust anchor. IAM Roles Anywhere allows workloads running outside of AWS (on-premises servers, other cloud providers) to exchange X.509 digital certificates from an internal CA for short-lived, temporary AWS IAM credentials, eliminating dangerous long-lived access keys.",
    referenceUrl: "https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html",
    tags: ["Hybrid Authentication","IAM Roles Anywhere","High Load Scale"]
  },
  {
    id: "aws-dop-493",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "IAM Roles Anywhere for On-Premises Workloads: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to enable on-premises servers in a corporate data center to authenticate to AWS APIs securely without creating or storing long-lived IAM access keys.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "IAM Roles Anywhere, with the on-premises certificate authority as the trust anchor." },
      { id: 'B', text: "An IAM user per server, with its access keys rotated by a scheduled job." },
      { id: 'C', text: "An OIDC identity provider trusting the on-premises workload identity system." },
      { id: 'D', text: "A bastion in the VPC that the servers reach through, holding the credentials." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS IAM Roles Anywhere using an on-premises enterprise Public Key Infrastructure (PKI) Certificate Authority (CA) trust anchor. IAM Roles Anywhere allows workloads running outside of AWS (on-premises servers, other cloud providers) to exchange X.509 digital certificates from an internal CA for short-lived, temporary AWS IAM credentials, eliminating dangerous long-lived access keys.",
    referenceUrl: "https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html",
    tags: ["Hybrid Authentication","IAM Roles Anywhere","Security Compliance"]
  },
  {
    id: "aws-dop-494",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "IAM Roles Anywhere for On-Premises Workloads: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to enable on-premises servers in a corporate data center to authenticate to AWS APIs securely without creating or storing long-lived IAM access keys.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "An IAM user per server, with its access keys rotated by a scheduled job." },
      { id: 'B', text: "IAM Roles Anywhere, with the on-premises certificate authority as the trust anchor." },
      { id: 'C', text: "A bastion in the VPC that the servers reach through, holding the credentials." },
      { id: 'D', text: "An OIDC identity provider trusting the on-premises workload identity system." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy AWS IAM Roles Anywhere using an on-premises enterprise Public Key Infrastructure (PKI) Certificate Authority (CA) trust anchor. IAM Roles Anywhere allows workloads running outside of AWS (on-premises servers, other cloud providers) to exchange X.509 digital certificates from an internal CA for short-lived, temporary AWS IAM credentials, eliminating dangerous long-lived access keys.",
    referenceUrl: "https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html",
    tags: ["Hybrid Authentication","IAM Roles Anywhere","Hybrid Migration"]
  },
  {
    id: "aws-dop-495",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "IAM Roles Anywhere for On-Premises Workloads: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to enable on-premises servers in a corporate data center to authenticate to AWS APIs securely without creating or storing long-lived IAM access keys.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "IAM Roles Anywhere, with the on-premises certificate authority as the trust anchor." },
      { id: 'B', text: "An IAM user per server, with its access keys rotated by a scheduled job." },
      { id: 'C', text: "An OIDC identity provider trusting the on-premises workload identity system." },
      { id: 'D', text: "A bastion in the VPC that the servers reach through, holding the credentials." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS IAM Roles Anywhere using an on-premises enterprise Public Key Infrastructure (PKI) Certificate Authority (CA) trust anchor. IAM Roles Anywhere allows workloads running outside of AWS (on-premises servers, other cloud providers) to exchange X.509 digital certificates from an internal CA for short-lived, temporary AWS IAM credentials, eliminating dangerous long-lived access keys.",
    referenceUrl: "https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html",
    tags: ["Hybrid Authentication","IAM Roles Anywhere","Resilience Failure"]
  },
  {
    id: "aws-dop-496",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Amazon Macie Automated Sensitive Data Discovery: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to discover and protect unencrypted Personally Identifiable Information (PII) or credit card numbers stored across enterprise Amazon S3 buckets.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Enable Macie across the organization to scan the buckets and raise findings." },
      { id: 'B', text: "Enable S3 Inventory across the buckets and review the object listings." },
      { id: 'C', text: "Enable Access Analyzer for S3 and act on the public access findings." },
      { id: 'D', text: "Enable S3 server access logging and query the logs for the object keys." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Macie across the organization to automatically scan S3 buckets for sensitive data and generate findings for unencrypted PII. Amazon Macie is a fully managed data security and privacy service that uses machine learning and pattern matching to discover and protect sensitive data in Amazon S3. Macie automatically alerts when buckets contain unencrypted PII, credentials, or financial data.",
    referenceUrl: "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html",
    tags: ["Data Privacy","Amazon Macie","Dr Failover"]
  },
  {
    id: "aws-dop-497",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Amazon Macie Automated Sensitive Data Discovery: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to discover and protect unencrypted Personally Identifiable Information (PII) or credit card numbers stored across enterprise Amazon S3 buckets.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "Enable Access Analyzer for S3 and act on the public access findings." },
      { id: 'B', text: "Enable S3 Inventory across the buckets and review the object listings." },
      { id: 'C', text: "Enable S3 server access logging and query the logs for the object keys." },
      { id: 'D', text: "Enable Macie across the organization to scan the buckets and raise findings." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Amazon Macie across the organization to automatically scan S3 buckets for sensitive data and generate findings for unencrypted PII. Amazon Macie is a fully managed data security and privacy service that uses machine learning and pattern matching to discover and protect sensitive data in Amazon S3. Macie automatically alerts when buckets contain unencrypted PII, credentials, or financial data.",
    referenceUrl: "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html",
    tags: ["Data Privacy","Amazon Macie","High Load Scale"]
  },
  {
    id: "aws-dop-498",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Amazon Macie Automated Sensitive Data Discovery: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to discover and protect unencrypted Personally Identifiable Information (PII) or credit card numbers stored across enterprise Amazon S3 buckets.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "Enable Macie across the organization to scan the buckets and raise findings." },
      { id: 'B', text: "Enable S3 Inventory across the buckets and review the object listings." },
      { id: 'C', text: "Enable Access Analyzer for S3 and act on the public access findings." },
      { id: 'D', text: "Enable S3 server access logging and query the logs for the object keys." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Macie across the organization to automatically scan S3 buckets for sensitive data and generate findings for unencrypted PII. Amazon Macie is a fully managed data security and privacy service that uses machine learning and pattern matching to discover and protect sensitive data in Amazon S3. Macie automatically alerts when buckets contain unencrypted PII, credentials, or financial data.",
    referenceUrl: "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html",
    tags: ["Data Privacy","Amazon Macie","Security Compliance"]
  },
  {
    id: "aws-dop-499",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Amazon Macie Automated Sensitive Data Discovery: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to discover and protect unencrypted Personally Identifiable Information (PII) or credit card numbers stored across enterprise Amazon S3 buckets.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "Enable Macie across the organization to scan the buckets and raise findings." },
      { id: 'B', text: "Enable S3 server access logging and query the logs for the object keys." },
      { id: 'C', text: "Enable S3 Inventory across the buckets and review the object listings." },
      { id: 'D', text: "Enable Access Analyzer for S3 and act on the public access findings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Macie across the organization to automatically scan S3 buckets for sensitive data and generate findings for unencrypted PII. Amazon Macie is a fully managed data security and privacy service that uses machine learning and pattern matching to discover and protect sensitive data in Amazon S3. Macie automatically alerts when buckets contain unencrypted PII, credentials, or financial data.",
    referenceUrl: "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html",
    tags: ["Data Privacy","Amazon Macie","Hybrid Migration"]
  },
  {
    id: "aws-dop-500",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Amazon Macie Automated Sensitive Data Discovery: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to discover and protect unencrypted Personally Identifiable Information (PII) or credit card numbers stored across enterprise Amazon S3 buckets.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "Enable Macie across the organization to scan the buckets and raise findings." },
      { id: 'B', text: "Enable S3 Inventory across the buckets and review the object listings." },
      { id: 'C', text: "Enable Access Analyzer for S3 and act on the public access findings." },
      { id: 'D', text: "Enable S3 server access logging and query the logs for the object keys." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Macie across the organization to automatically scan S3 buckets for sensitive data and generate findings for unencrypted PII. Amazon Macie is a fully managed data security and privacy service that uses machine learning and pattern matching to discover and protect sensitive data in Amazon S3. Macie automatically alerts when buckets contain unencrypted PII, credentials, or financial data.",
    referenceUrl: "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html",
    tags: ["Data Privacy","Amazon Macie","Resilience Failure"]
  }
];

export default AWS_DOP_QUESTIONS_20;
