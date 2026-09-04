export const AWS_CLF_QUESTIONS_16 = [
  {
    id: "aws-clf-376",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Amazon Macie Sensitive Data Discovery: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Amazon Macie to automatically discover, classify, and protect sensitive data such as Personally Identifiable Information (PII) and credit card numbers stored in Amazon S3 buckets.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Amazon Macie data security and privacy is under consideration.",
    options: [
      { id: 'A', text: "Use AWS Key Management Service (KMS) to scan file content." },
      { id: 'B', text: "Use Amazon Macie to evaluate S3 buckets and detect sensitive personal data using machine learning and pattern matching." },
      { id: 'C', text: "Use Amazon CloudWatch Logs Insights to parse S3 objects." },
      { id: 'D', text: "Download all S3 objects and run regex search scripts manually." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use Amazon Macie to evaluate S3 buckets and detect sensitive personal data using machine learning and pattern matching. Amazon Macie is a fully managed data security and privacy service that uses machine learning and pattern matching to discover, monitor, and protect sensitive data (like PII, financial details, or national IDs) stored in Amazon S3 buckets.",
    referenceUrl: "https://aws.amazon.com/macie/",
    tags: ["Amazon Macie", "Macie", "Dr Failover"]
  },
  {
    id: "aws-clf-377",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Amazon Macie Sensitive Data Discovery: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Amazon Macie to automatically discover, classify, and protect sensitive data such as Personally Identifiable Information (PII) and credit card numbers stored in Amazon S3 buckets.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Amazon Macie data security and privacy is under consideration.",
    options: [
      { id: 'A', text: "Use Amazon Macie to evaluate S3 buckets and detect sensitive personal data using machine learning and pattern matching." },
      { id: 'B', text: "Use Amazon CloudWatch Logs Insights to parse S3 objects." },
      { id: 'C', text: "Use AWS Key Management Service (KMS) to scan file content." },
      { id: 'D', text: "Download all S3 objects and run regex search scripts manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Amazon Macie to evaluate S3 buckets and detect sensitive personal data using machine learning and pattern matching. Amazon Macie is a fully managed data security and privacy service that uses machine learning and pattern matching to discover, monitor, and protect sensitive data (like PII, financial details, or national IDs) stored in Amazon S3 buckets.",
    referenceUrl: "https://aws.amazon.com/macie/",
    tags: ["Amazon Macie", "Macie", "High Load Scale"]
  },
  {
    id: "aws-clf-378",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Amazon Macie Sensitive Data Discovery: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Amazon Macie to automatically discover, classify, and protect sensitive data such as Personally Identifiable Information (PII) and credit card numbers stored in Amazon S3 buckets.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon Macie data security and privacy is under consideration.",
    options: [
      { id: 'A', text: "Download all S3 objects and run regex search scripts manually." },
      { id: 'B', text: "Use Amazon Macie to evaluate S3 buckets and detect sensitive personal data using machine learning and pattern matching." },
      { id: 'C', text: "Use Amazon CloudWatch Logs Insights to parse S3 objects." },
      { id: 'D', text: "Use AWS Key Management Service (KMS) to scan file content." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use Amazon Macie to evaluate S3 buckets and detect sensitive personal data using machine learning and pattern matching. Amazon Macie is a fully managed data security and privacy service that uses machine learning and pattern matching to discover, monitor, and protect sensitive data (like PII, financial details, or national IDs) stored in Amazon S3 buckets.",
    referenceUrl: "https://aws.amazon.com/macie/",
    tags: ["Amazon Macie", "Macie", "Security Compliance"]
  },
  {
    id: "aws-clf-379",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Amazon Macie Sensitive Data Discovery: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the AWS Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Amazon Macie to automatically discover, classify, and protect sensitive data such as Personally Identifiable Information (PII) and credit card numbers stored in Amazon S3 buckets.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Amazon Macie data security and privacy is under consideration.",
    options: [
      { id: 'A', text: "Download all S3 objects and run regex search scripts manually." },
      { id: 'B', text: "Use Amazon Macie to evaluate S3 buckets and detect sensitive personal data using machine learning and pattern matching." },
      { id: 'C', text: "Use Amazon CloudWatch Logs Insights to parse S3 objects." },
      { id: 'D', text: "Use AWS Key Management Service (KMS) to scan file content." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use Amazon Macie to evaluate S3 buckets and detect sensitive personal data using machine learning and pattern matching. Amazon Macie is a fully managed data security and privacy service that uses machine learning and pattern matching to discover, monitor, and protect sensitive data (like PII, financial details, or national IDs) stored in Amazon S3 buckets.",
    referenceUrl: "https://aws.amazon.com/macie/",
    tags: ["Amazon Macie", "Macie", "Hybrid Migration"]
  },
  {
    id: "aws-clf-380",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Amazon Macie Sensitive Data Discovery: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Amazon Macie to automatically discover, classify, and protect sensitive data such as Personally Identifiable Information (PII) and credit card numbers stored in Amazon S3 buckets.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Amazon Macie data security and privacy is under consideration.",
    options: [
      { id: 'A', text: "Use AWS Key Management Service (KMS) to scan file content." },
      { id: 'B', text: "Use Amazon CloudWatch Logs Insights to parse S3 objects." },
      { id: 'C', text: "Use Amazon Macie to evaluate S3 buckets and detect sensitive personal data using machine learning and pattern matching." },
      { id: 'D', text: "Download all S3 objects and run regex search scripts manually." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use Amazon Macie to evaluate S3 buckets and detect sensitive personal data using machine learning and pattern matching. Amazon Macie is a fully managed data security and privacy service that uses machine learning and pattern matching to discover, monitor, and protect sensitive data (like PII, financial details, or national IDs) stored in Amazon S3 buckets.",
    referenceUrl: "https://aws.amazon.com/macie/",
    tags: ["Amazon Macie", "Macie", "Resilience Failure"]
  },
  {
    id: "aws-clf-381",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Artifact Compliance Portal: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates AWS Artifact to download official AWS security and compliance audit reports (such as SOC 1/2/3, PCI-DSS, and ISO certifications) to prove cloud compliance to external auditors.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? AWS Artifact compliance documents and reports is under consideration.",
    options: [
      { id: 'A', text: "Email AWS Customer Support requesting physical copies of audit certificates." },
      { id: 'B', text: "Open a technical support case with AWS Premium Support." },
      { id: 'C', text: "Access AWS Artifact in the AWS Management Console to download on-demand AWS compliance reports and sign agreements." },
      { id: 'D', text: "Search public internet forums for third-party audit summaries." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Access AWS Artifact in the AWS Management Console to download on-demand AWS compliance reports and sign agreements. AWS Artifact is the central resource for compliance-related information. It provides on-demand access to AWS security and compliance reports (like SOC reports, PCI reports) and certifications from accreditation bodies, as well as agreements like the Business Associate Addendum (BAA) for HIPAA.",
    referenceUrl: "https://aws.amazon.com/artifact/",
    tags: ["AWS Artifact", "Artifact", "Dr Failover"]
  },
  {
    id: "aws-clf-382",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Artifact Compliance Portal: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates AWS Artifact to download official AWS security and compliance audit reports (such as SOC 1/2/3, PCI-DSS, and ISO certifications) to prove cloud compliance to external auditors.",
    question: "Which architectural approach should the team select to manage this demand efficiently? AWS Artifact compliance documents and reports is under consideration.",
    options: [
      { id: 'A', text: "Search public internet forums for third-party audit summaries." },
      { id: 'B', text: "Access AWS Artifact in the AWS Management Console to download on-demand AWS compliance reports and sign agreements." },
      { id: 'C', text: "Open a technical support case with AWS Premium Support." },
      { id: 'D', text: "Email AWS Customer Support requesting physical copies of audit certificates." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Access AWS Artifact in the AWS Management Console to download on-demand AWS compliance reports and sign agreements. AWS Artifact is the central resource for compliance-related information. It provides on-demand access to AWS security and compliance reports (like SOC reports, PCI reports) and certifications from accreditation bodies, as well as agreements like the Business Associate Addendum (BAA) for HIPAA.",
    referenceUrl: "https://aws.amazon.com/artifact/",
    tags: ["AWS Artifact", "Artifact", "High Load Scale"]
  },
  {
    id: "aws-clf-383",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Artifact Compliance Portal: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates AWS Artifact to download official AWS security and compliance audit reports (such as SOC 1/2/3, PCI-DSS, and ISO certifications) to prove cloud compliance to external auditors.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Artifact compliance documents and reports is under consideration.",
    options: [
      { id: 'A', text: "Email AWS Customer Support requesting physical copies of audit certificates." },
      { id: 'B', text: "Search public internet forums for third-party audit summaries." },
      { id: 'C', text: "Open a technical support case with AWS Premium Support." },
      { id: 'D', text: "Access AWS Artifact in the AWS Management Console to download on-demand AWS compliance reports and sign agreements." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Access AWS Artifact in the AWS Management Console to download on-demand AWS compliance reports and sign agreements. AWS Artifact is the central resource for compliance-related information. It provides on-demand access to AWS security and compliance reports (like SOC reports, PCI reports) and certifications from accreditation bodies, as well as agreements like the Business Associate Addendum (BAA) for HIPAA.",
    referenceUrl: "https://aws.amazon.com/artifact/",
    tags: ["AWS Artifact", "Artifact", "Security Compliance"]
  },
  {
    id: "aws-clf-384",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Artifact Compliance Portal: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the AWS Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates AWS Artifact to download official AWS security and compliance audit reports (such as SOC 1/2/3, PCI-DSS, and ISO certifications) to prove cloud compliance to external auditors.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? AWS Artifact compliance documents and reports is under consideration.",
    options: [
      { id: 'A', text: "Email AWS Customer Support requesting physical copies of audit certificates." },
      { id: 'B', text: "Open a technical support case with AWS Premium Support." },
      { id: 'C', text: "Search public internet forums for third-party audit summaries." },
      { id: 'D', text: "Access AWS Artifact in the AWS Management Console to download on-demand AWS compliance reports and sign agreements." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Access AWS Artifact in the AWS Management Console to download on-demand AWS compliance reports and sign agreements. AWS Artifact is the central resource for compliance-related information. It provides on-demand access to AWS security and compliance reports (like SOC reports, PCI reports) and certifications from accreditation bodies, as well as agreements like the Business Associate Addendum (BAA) for HIPAA.",
    referenceUrl: "https://aws.amazon.com/artifact/",
    tags: ["AWS Artifact", "Artifact", "Hybrid Migration"]
  },
  {
    id: "aws-clf-385",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Artifact Compliance Portal: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates AWS Artifact to download official AWS security and compliance audit reports (such as SOC 1/2/3, PCI-DSS, and ISO certifications) to prove cloud compliance to external auditors.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? AWS Artifact compliance documents and reports is under consideration.",
    options: [
      { id: 'A', text: "Access AWS Artifact in the AWS Management Console to download on-demand AWS compliance reports and sign agreements." },
      { id: 'B', text: "Email AWS Customer Support requesting physical copies of audit certificates." },
      { id: 'C', text: "Open a technical support case with AWS Premium Support." },
      { id: 'D', text: "Search public internet forums for third-party audit summaries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Access AWS Artifact in the AWS Management Console to download on-demand AWS compliance reports and sign agreements. AWS Artifact is the central resource for compliance-related information. It provides on-demand access to AWS security and compliance reports (like SOC reports, PCI reports) and certifications from accreditation bodies, as well as agreements like the Business Associate Addendum (BAA) for HIPAA.",
    referenceUrl: "https://aws.amazon.com/artifact/",
    tags: ["AWS Artifact", "Artifact", "Resilience Failure"]
  },
  {
    id: "aws-clf-386",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EC2 Instance Purchasing Options: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Amazon EC2 to select the most cost-effective EC2 purchasing option for stateless, fault-tolerant batch video transcoding workloads that can withstand random interruptions.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? EC2 Purchasing Options: On-Demand, Spot, Reserved, Dedicated is under consideration.",
    options: [
      { id: 'A', text: "Use On-Demand instances exclusively." },
      { id: 'B', text: "Use Standard 3-year Reserved Instances." },
      { id: 'C', text: "Use Dedicated Hosts with annual commitments." },
      { id: 'D', text: "Use EC2 Spot Instances to achieve up to 90% cost savings compared to On-Demand pricing." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use EC2 Spot Instances to achieve up to 90% cost savings compared to On-Demand pricing. EC2 Spot Instances let you take advantage of unused EC2 capacity in the AWS cloud at steep discounts (up to 90% off On-Demand prices). Spot instances are ideal for fault-tolerant, stateless, or batch workloads that can handle server interruptions.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html",
    tags: ["Amazon EC2", "EC2", "Dr Failover"]
  },
  {
    id: "aws-clf-387",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EC2 Instance Purchasing Options: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Amazon EC2 to select the most cost-effective EC2 purchasing option for stateless, fault-tolerant batch video transcoding workloads that can withstand random interruptions.",
    question: "Which architectural approach should the team select to manage this demand efficiently? EC2 Purchasing Options: On-Demand, Spot, Reserved, Dedicated is under consideration.",
    options: [
      { id: 'A', text: "Use EC2 Spot Instances to achieve up to 90% cost savings compared to On-Demand pricing." },
      { id: 'B', text: "Use On-Demand instances exclusively." },
      { id: 'C', text: "Use Dedicated Hosts with annual commitments." },
      { id: 'D', text: "Use Standard 3-year Reserved Instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use EC2 Spot Instances to achieve up to 90% cost savings compared to On-Demand pricing. EC2 Spot Instances let you take advantage of unused EC2 capacity in the AWS cloud at steep discounts (up to 90% off On-Demand prices). Spot instances are ideal for fault-tolerant, stateless, or batch workloads that can handle server interruptions.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html",
    tags: ["Amazon EC2", "EC2", "High Load Scale"]
  },
  {
    id: "aws-clf-388",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EC2 Instance Purchasing Options: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Amazon EC2 to select the most cost-effective EC2 purchasing option for stateless, fault-tolerant batch video transcoding workloads that can withstand random interruptions.",
    question: "Which solution properly implements these mandatory security and governance controls? EC2 Purchasing Options: On-Demand, Spot, Reserved, Dedicated is under consideration.",
    options: [
      { id: 'A', text: "Use EC2 Spot Instances to achieve up to 90% cost savings compared to On-Demand pricing." },
      { id: 'B', text: "Use Standard 3-year Reserved Instances." },
      { id: 'C', text: "Use On-Demand instances exclusively." },
      { id: 'D', text: "Use Dedicated Hosts with annual commitments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use EC2 Spot Instances to achieve up to 90% cost savings compared to On-Demand pricing. EC2 Spot Instances let you take advantage of unused EC2 capacity in the AWS cloud at steep discounts (up to 90% off On-Demand prices). Spot instances are ideal for fault-tolerant, stateless, or batch workloads that can handle server interruptions.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html",
    tags: ["Amazon EC2", "EC2", "Security Compliance"]
  },
  {
    id: "aws-clf-389",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EC2 Instance Purchasing Options: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the AWS Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Amazon EC2 to select the most cost-effective EC2 purchasing option for stateless, fault-tolerant batch video transcoding workloads that can withstand random interruptions.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? EC2 Purchasing Options: On-Demand, Spot, Reserved, Dedicated is under consideration.",
    options: [
      { id: 'A', text: "Use On-Demand instances exclusively." },
      { id: 'B', text: "Use EC2 Spot Instances to achieve up to 90% cost savings compared to On-Demand pricing." },
      { id: 'C', text: "Use Standard 3-year Reserved Instances." },
      { id: 'D', text: "Use Dedicated Hosts with annual commitments." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use EC2 Spot Instances to achieve up to 90% cost savings compared to On-Demand pricing. EC2 Spot Instances let you take advantage of unused EC2 capacity in the AWS cloud at steep discounts (up to 90% off On-Demand prices). Spot instances are ideal for fault-tolerant, stateless, or batch workloads that can handle server interruptions.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html",
    tags: ["Amazon EC2", "EC2", "Hybrid Migration"]
  },
  {
    id: "aws-clf-390",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EC2 Instance Purchasing Options: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Amazon EC2 to select the most cost-effective EC2 purchasing option for stateless, fault-tolerant batch video transcoding workloads that can withstand random interruptions.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? EC2 Purchasing Options: On-Demand, Spot, Reserved, Dedicated is under consideration.",
    options: [
      { id: 'A', text: "Use Dedicated Hosts with annual commitments." },
      { id: 'B', text: "Use Standard 3-year Reserved Instances." },
      { id: 'C', text: "Use On-Demand instances exclusively." },
      { id: 'D', text: "Use EC2 Spot Instances to achieve up to 90% cost savings compared to On-Demand pricing." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use EC2 Spot Instances to achieve up to 90% cost savings compared to On-Demand pricing. EC2 Spot Instances let you take advantage of unused EC2 capacity in the AWS cloud at steep discounts (up to 90% off On-Demand prices). Spot instances are ideal for fault-tolerant, stateless, or batch workloads that can handle server interruptions.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html",
    tags: ["Amazon EC2", "EC2", "Resilience Failure"]
  },
  {
    id: "aws-clf-391",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EC2 Auto Scaling: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Amazon EC2 to automatically increase the number of Amazon EC2 instances during business hours when CPU utilization exceeds 70% and reduce capacity when traffic drops.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? EC2 Auto Scaling dynamic and predictive scaling is under consideration.",
    options: [
      { id: 'A', text: "Configure an EC2 Auto Scaling group with a Target Tracking scaling policy based on Average CPU Utilization." },
      { id: 'B', text: "Increase the instance size vertically every morning." },
      { id: 'C', text: "Deploy an Amazon CloudFront distribution to cache EC2 instance compute power." },
      { id: 'D', text: "Manually launch additional EC2 instances from the console during busy periods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an EC2 Auto Scaling group with a Target Tracking scaling policy based on Average CPU Utilization. Amazon EC2 Auto Scaling helps ensure that you have the correct number of Amazon EC2 instances available to handle the load for your application. Using Target Tracking scaling policies, Auto Scaling automatically launches or terminates instances to keep metrics (like CPU or request count) at a target level.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",
    tags: ["Amazon EC2", "Auto Scaling", "Dr Failover"]
  },
  {
    id: "aws-clf-392",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EC2 Auto Scaling: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Amazon EC2 to automatically increase the number of Amazon EC2 instances during business hours when CPU utilization exceeds 70% and reduce capacity when traffic drops.",
    question: "Which architectural approach should the team select to manage this demand efficiently? EC2 Auto Scaling dynamic and predictive scaling is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Amazon CloudFront distribution to cache EC2 instance compute power." },
      { id: 'B', text: "Manually launch additional EC2 instances from the console during busy periods." },
      { id: 'C', text: "Increase the instance size vertically every morning." },
      { id: 'D', text: "Configure an EC2 Auto Scaling group with a Target Tracking scaling policy based on Average CPU Utilization." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an EC2 Auto Scaling group with a Target Tracking scaling policy based on Average CPU Utilization. Amazon EC2 Auto Scaling helps ensure that you have the correct number of Amazon EC2 instances available to handle the load for your application. Using Target Tracking scaling policies, Auto Scaling automatically launches or terminates instances to keep metrics (like CPU or request count) at a target level.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",
    tags: ["Amazon EC2", "Auto Scaling", "High Load Scale"]
  },
  {
    id: "aws-clf-393",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EC2 Auto Scaling: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Amazon EC2 to automatically increase the number of Amazon EC2 instances during business hours when CPU utilization exceeds 70% and reduce capacity when traffic drops.",
    question: "Which solution properly implements these mandatory security and governance controls? EC2 Auto Scaling dynamic and predictive scaling is under consideration.",
    options: [
      { id: 'A', text: "Increase the instance size vertically every morning." },
      { id: 'B', text: "Manually launch additional EC2 instances from the console during busy periods." },
      { id: 'C', text: "Deploy an Amazon CloudFront distribution to cache EC2 instance compute power." },
      { id: 'D', text: "Configure an EC2 Auto Scaling group with a Target Tracking scaling policy based on Average CPU Utilization." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an EC2 Auto Scaling group with a Target Tracking scaling policy based on Average CPU Utilization. Amazon EC2 Auto Scaling helps ensure that you have the correct number of Amazon EC2 instances available to handle the load for your application. Using Target Tracking scaling policies, Auto Scaling automatically launches or terminates instances to keep metrics (like CPU or request count) at a target level.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",
    tags: ["Amazon EC2", "Auto Scaling", "Security Compliance"]
  },
  {
    id: "aws-clf-394",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EC2 Auto Scaling: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the AWS Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Amazon EC2 to automatically increase the number of Amazon EC2 instances during business hours when CPU utilization exceeds 70% and reduce capacity when traffic drops.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? EC2 Auto Scaling dynamic and predictive scaling is under consideration.",
    options: [
      { id: 'A', text: "Manually launch additional EC2 instances from the console during busy periods." },
      { id: 'B', text: "Configure an EC2 Auto Scaling group with a Target Tracking scaling policy based on Average CPU Utilization." },
      { id: 'C', text: "Increase the instance size vertically every morning." },
      { id: 'D', text: "Deploy an Amazon CloudFront distribution to cache EC2 instance compute power." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an EC2 Auto Scaling group with a Target Tracking scaling policy based on Average CPU Utilization. Amazon EC2 Auto Scaling helps ensure that you have the correct number of Amazon EC2 instances available to handle the load for your application. Using Target Tracking scaling policies, Auto Scaling automatically launches or terminates instances to keep metrics (like CPU or request count) at a target level.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",
    tags: ["Amazon EC2", "Auto Scaling", "Hybrid Migration"]
  },
  {
    id: "aws-clf-395",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EC2 Auto Scaling: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Amazon EC2 to automatically increase the number of Amazon EC2 instances during business hours when CPU utilization exceeds 70% and reduce capacity when traffic drops.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? EC2 Auto Scaling dynamic and predictive scaling is under consideration.",
    options: [
      { id: 'A', text: "Increase the instance size vertically every morning." },
      { id: 'B', text: "Manually launch additional EC2 instances from the console during busy periods." },
      { id: 'C', text: "Deploy an Amazon CloudFront distribution to cache EC2 instance compute power." },
      { id: 'D', text: "Configure an EC2 Auto Scaling group with a Target Tracking scaling policy based on Average CPU Utilization." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an EC2 Auto Scaling group with a Target Tracking scaling policy based on Average CPU Utilization. Amazon EC2 Auto Scaling helps ensure that you have the correct number of Amazon EC2 instances available to handle the load for your application. Using Target Tracking scaling policies, Auto Scaling automatically launches or terminates instances to keep metrics (like CPU or request count) at a target level.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",
    tags: ["Amazon EC2", "Auto Scaling", "Resilience Failure"]
  },
  {
    id: "aws-clf-396",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Elastic Load Balancing (ALB vs NLB): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Elastic Load Balancing to distribute incoming HTTP and HTTPS web traffic based on URL request paths (e.g. /api vs /images) across multiple target EC2 instances.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Application Load Balancer vs. Network Load Balancer is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Network Load Balancer (NLB)." },
      { id: 'B', text: "Deploy an Application Load Balancer (ALB) and configure path-based routing rules." },
      { id: 'C', text: "Deploy a Gateway Load Balancer." },
      { id: 'D', text: "Configure Amazon Route 53 Weighted DNS routing." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an Application Load Balancer (ALB) and configure path-based routing rules. Application Load Balancer (ALB) operates at the application layer (Layer 7) and supports advanced routing features such as host-based, path-based, and query parameter routing. Network Load Balancer (NLB) operates at the transport layer (Layer 4) for extreme performance and ultra-low latency with static IP support.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html",
    tags: ["Elastic Load Balancing", "ELB", "Dr Failover"]
  },
  {
    id: "aws-clf-397",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Elastic Load Balancing (ALB vs NLB): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Elastic Load Balancing to distribute incoming HTTP and HTTPS web traffic based on URL request paths (e.g. /api vs /images) across multiple target EC2 instances.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Application Load Balancer vs. Network Load Balancer is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Network Load Balancer (NLB)." },
      { id: 'B', text: "Deploy an Application Load Balancer (ALB) and configure path-based routing rules." },
      { id: 'C', text: "Deploy a Gateway Load Balancer." },
      { id: 'D', text: "Configure Amazon Route 53 Weighted DNS routing." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an Application Load Balancer (ALB) and configure path-based routing rules. Application Load Balancer (ALB) operates at the application layer (Layer 7) and supports advanced routing features such as host-based, path-based, and query parameter routing. Network Load Balancer (NLB) operates at the transport layer (Layer 4) for extreme performance and ultra-low latency with static IP support.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html",
    tags: ["Elastic Load Balancing", "ELB", "High Load Scale"]
  },
  {
    id: "aws-clf-398",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Elastic Load Balancing (ALB vs NLB): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Elastic Load Balancing to distribute incoming HTTP and HTTPS web traffic based on URL request paths (e.g. /api vs /images) across multiple target EC2 instances.",
    question: "Which solution properly implements these mandatory security and governance controls? Application Load Balancer vs. Network Load Balancer is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Network Load Balancer (NLB)." },
      { id: 'B', text: "Configure Amazon Route 53 Weighted DNS routing." },
      { id: 'C', text: "Deploy an Application Load Balancer (ALB) and configure path-based routing rules." },
      { id: 'D', text: "Deploy a Gateway Load Balancer." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an Application Load Balancer (ALB) and configure path-based routing rules. Application Load Balancer (ALB) operates at the application layer (Layer 7) and supports advanced routing features such as host-based, path-based, and query parameter routing. Network Load Balancer (NLB) operates at the transport layer (Layer 4) for extreme performance and ultra-low latency with static IP support.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html",
    tags: ["Elastic Load Balancing", "ELB", "Security Compliance"]
  },
  {
    id: "aws-clf-399",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Elastic Load Balancing (ALB vs NLB): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the AWS Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Elastic Load Balancing to distribute incoming HTTP and HTTPS web traffic based on URL request paths (e.g. /api vs /images) across multiple target EC2 instances.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Application Load Balancer vs. Network Load Balancer is under consideration.",
    options: [
      { id: 'A', text: "Configure Amazon Route 53 Weighted DNS routing." },
      { id: 'B', text: "Deploy a Network Load Balancer (NLB)." },
      { id: 'C', text: "Deploy an Application Load Balancer (ALB) and configure path-based routing rules." },
      { id: 'D', text: "Deploy a Gateway Load Balancer." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an Application Load Balancer (ALB) and configure path-based routing rules. Application Load Balancer (ALB) operates at the application layer (Layer 7) and supports advanced routing features such as host-based, path-based, and query parameter routing. Network Load Balancer (NLB) operates at the transport layer (Layer 4) for extreme performance and ultra-low latency with static IP support.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html",
    tags: ["Elastic Load Balancing", "ELB", "Hybrid Migration"]
  },
  {
    id: "aws-clf-400",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Elastic Load Balancing (ALB vs NLB): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Elastic Load Balancing to distribute incoming HTTP and HTTPS web traffic based on URL request paths (e.g. /api vs /images) across multiple target EC2 instances.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Application Load Balancer vs. Network Load Balancer is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Application Load Balancer (ALB) and configure path-based routing rules." },
      { id: 'B', text: "Deploy a Network Load Balancer (NLB)." },
      { id: 'C', text: "Deploy a Gateway Load Balancer." },
      { id: 'D', text: "Configure Amazon Route 53 Weighted DNS routing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Application Load Balancer (ALB) and configure path-based routing rules. Application Load Balancer (ALB) operates at the application layer (Layer 7) and supports advanced routing features such as host-based, path-based, and query parameter routing. Network Load Balancer (NLB) operates at the transport layer (Layer 4) for extreme performance and ultra-low latency with static IP support.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html",
    tags: ["Elastic Load Balancing", "ELB", "Resilience Failure"]
  }
];

export default AWS_CLF_QUESTIONS_16;
