export const AWS_DVA_QUESTIONS_16 = [
  {
    id: "aws-dva-376",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "ACM SSL/TLS Certificates for Custom Domains: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS Certificate Manager to provision and automatically renew public SSL/TLS certificates for API Gateway and CloudFront custom domain names with zero administrative overhead.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? AWS Certificate Manager (ACM) DNS validation is being implemented.",
    options: [
      { id: 'A', text: "Request a public certificate in AWS Certificate Manager (ACM) and use DNS validation by creating CNAME records in Amazon Route 53." },
      { id: 'B', text: "Request an ACM certificate using email validation and renew it manually every year." },
      { id: 'C', text: "Generate a self-signed OpenSSL certificate on an EC2 instance and upload it to IAM." },
      { id: 'D', text: "Purchase an SSL certificate from an external registrar and email the private key to AWS Support." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Request a public certificate in AWS Certificate Manager (ACM) and use DNS validation by creating CNAME records in Amazon Route 53. AWS Certificate Manager (ACM) provisions, manages, and automatically renews public SSL/TLS certificates for AWS services. Choosing DNS validation allows ACM to renew certificates automatically and indefinitely as long as the DNS CNAME record remains in Route 53, eliminating manual renewal friction.",
    referenceUrl: "https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html",
    tags: ["AWS Certificate Manager", "ACM", "Dr Failover"]
  },
  {
    id: "aws-dva-377",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "ACM SSL/TLS Certificates for Custom Domains: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS Certificate Manager to provision and automatically renew public SSL/TLS certificates for API Gateway and CloudFront custom domain names with zero administrative overhead.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? AWS Certificate Manager (ACM) DNS validation is being implemented.",
    options: [
      { id: 'A', text: "Request a public certificate in AWS Certificate Manager (ACM) and use DNS validation by creating CNAME records in Amazon Route 53." },
      { id: 'B', text: "Request an ACM certificate using email validation and renew it manually every year." },
      { id: 'C', text: "Generate a self-signed OpenSSL certificate on an EC2 instance and upload it to IAM." },
      { id: 'D', text: "Purchase an SSL certificate from an external registrar and email the private key to AWS Support." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Request a public certificate in AWS Certificate Manager (ACM) and use DNS validation by creating CNAME records in Amazon Route 53. AWS Certificate Manager (ACM) provisions, manages, and automatically renews public SSL/TLS certificates for AWS services. Choosing DNS validation allows ACM to renew certificates automatically and indefinitely as long as the DNS CNAME record remains in Route 53, eliminating manual renewal friction.",
    referenceUrl: "https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html",
    tags: ["AWS Certificate Manager", "ACM", "High Load Scale"]
  },
  {
    id: "aws-dva-378",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "ACM SSL/TLS Certificates for Custom Domains: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS Certificate Manager to provision and automatically renew public SSL/TLS certificates for API Gateway and CloudFront custom domain names with zero administrative overhead.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Certificate Manager (ACM) DNS validation is being implemented.",
    options: [
      { id: 'A', text: "Request a public certificate in AWS Certificate Manager (ACM) and use DNS validation by creating CNAME records in Amazon Route 53." },
      { id: 'B', text: "Request an ACM certificate using email validation and renew it manually every year." },
      { id: 'C', text: "Generate a self-signed OpenSSL certificate on an EC2 instance and upload it to IAM." },
      { id: 'D', text: "Purchase an SSL certificate from an external registrar and email the private key to AWS Support." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Request a public certificate in AWS Certificate Manager (ACM) and use DNS validation by creating CNAME records in Amazon Route 53. AWS Certificate Manager (ACM) provisions, manages, and automatically renews public SSL/TLS certificates for AWS services. Choosing DNS validation allows ACM to renew certificates automatically and indefinitely as long as the DNS CNAME record remains in Route 53, eliminating manual renewal friction.",
    referenceUrl: "https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html",
    tags: ["AWS Certificate Manager", "ACM", "Security Compliance"]
  },
  {
    id: "aws-dva-379",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "ACM SSL/TLS Certificates for Custom Domains: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS Certificate Manager to provision and automatically renew public SSL/TLS certificates for API Gateway and CloudFront custom domain names with zero administrative overhead.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? AWS Certificate Manager (ACM) DNS validation is being implemented.",
    options: [
      { id: 'A', text: "Request a public certificate in AWS Certificate Manager (ACM) and use DNS validation by creating CNAME records in Amazon Route 53." },
      { id: 'B', text: "Request an ACM certificate using email validation and renew it manually every year." },
      { id: 'C', text: "Generate a self-signed OpenSSL certificate on an EC2 instance and upload it to IAM." },
      { id: 'D', text: "Purchase an SSL certificate from an external registrar and email the private key to AWS Support." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Request a public certificate in AWS Certificate Manager (ACM) and use DNS validation by creating CNAME records in Amazon Route 53. AWS Certificate Manager (ACM) provisions, manages, and automatically renews public SSL/TLS certificates for AWS services. Choosing DNS validation allows ACM to renew certificates automatically and indefinitely as long as the DNS CNAME record remains in Route 53, eliminating manual renewal friction.",
    referenceUrl: "https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html",
    tags: ["AWS Certificate Manager", "ACM", "Hybrid Migration"]
  },
  {
    id: "aws-dva-380",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "ACM SSL/TLS Certificates for Custom Domains: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS Certificate Manager to provision and automatically renew public SSL/TLS certificates for API Gateway and CloudFront custom domain names with zero administrative overhead.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? AWS Certificate Manager (ACM) DNS validation is being implemented.",
    options: [
      { id: 'A', text: "Request a public certificate in AWS Certificate Manager (ACM) and use DNS validation by creating CNAME records in Amazon Route 53." },
      { id: 'B', text: "Request an ACM certificate using email validation and renew it manually every year." },
      { id: 'C', text: "Generate a self-signed OpenSSL certificate on an EC2 instance and upload it to IAM." },
      { id: 'D', text: "Purchase an SSL certificate from an external registrar and email the private key to AWS Support." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Request a public certificate in AWS Certificate Manager (ACM) and use DNS validation by creating CNAME records in Amazon Route 53. AWS Certificate Manager (ACM) provisions, manages, and automatically renews public SSL/TLS certificates for AWS services. Choosing DNS validation allows ACM to renew certificates automatically and indefinitely as long as the DNS CNAME record remains in Route 53, eliminating manual renewal friction.",
    referenceUrl: "https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html",
    tags: ["AWS Certificate Manager", "ACM", "Resilience Failure"]
  },
  {
    id: "aws-dva-381",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Secrets Manager Client-Side Caching: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS Secrets Manager to reduce API calls, lower request costs, and prevent API rate-limiting when microservices running on AWS Lambda or Amazon ECS frequently retrieve secrets.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? AWS Secrets Manager Client-Side Caching Library is being implemented.",
    options: [
      { id: 'A', text: "Integrate the AWS Secrets Manager Client-side Caching library in the application code to cache secrets in memory with a configurable TTL." },
      { id: 'B', text: "Query the Secrets Manager `GetSecretValue` API on every single incoming HTTP request." },
      { id: 'C', text: "Store the database secret in a public Amazon S3 bucket." },
      { id: 'D', text: "Hardcode the database password in the Docker container image environment variables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate the AWS Secrets Manager Client-side Caching library in the application code to cache secrets in memory with a configurable TTL. The AWS Secrets Manager Client-side Caching library enables in-memory caching of secrets for Java, Python, .NET, and Go applications. It handles secret retrieval and TTL expiration locally in memory, drastically reducing `GetSecretValue` API call volume, avoiding throttling limits, and reducing billing costs.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets_cache-python.html",
    tags: ["AWS Secrets Manager", "Secrets Manager", "Dr Failover"]
  },
  {
    id: "aws-dva-382",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Secrets Manager Client-Side Caching: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS Secrets Manager to reduce API calls, lower request costs, and prevent API rate-limiting when microservices running on AWS Lambda or Amazon ECS frequently retrieve secrets.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? AWS Secrets Manager Client-Side Caching Library is being implemented.",
    options: [
      { id: 'A', text: "Integrate the AWS Secrets Manager Client-side Caching library in the application code to cache secrets in memory with a configurable TTL." },
      { id: 'B', text: "Query the Secrets Manager `GetSecretValue` API on every single incoming HTTP request." },
      { id: 'C', text: "Store the database secret in a public Amazon S3 bucket." },
      { id: 'D', text: "Hardcode the database password in the Docker container image environment variables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate the AWS Secrets Manager Client-side Caching library in the application code to cache secrets in memory with a configurable TTL. The AWS Secrets Manager Client-side Caching library enables in-memory caching of secrets for Java, Python, .NET, and Go applications. It handles secret retrieval and TTL expiration locally in memory, drastically reducing `GetSecretValue` API call volume, avoiding throttling limits, and reducing billing costs.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets_cache-python.html",
    tags: ["AWS Secrets Manager", "Secrets Manager", "High Load Scale"]
  },
  {
    id: "aws-dva-383",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Secrets Manager Client-Side Caching: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS Secrets Manager to reduce API calls, lower request costs, and prevent API rate-limiting when microservices running on AWS Lambda or Amazon ECS frequently retrieve secrets.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Secrets Manager Client-Side Caching Library is being implemented.",
    options: [
      { id: 'A', text: "Integrate the AWS Secrets Manager Client-side Caching library in the application code to cache secrets in memory with a configurable TTL." },
      { id: 'B', text: "Query the Secrets Manager `GetSecretValue` API on every single incoming HTTP request." },
      { id: 'C', text: "Store the database secret in a public Amazon S3 bucket." },
      { id: 'D', text: "Hardcode the database password in the Docker container image environment variables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate the AWS Secrets Manager Client-side Caching library in the application code to cache secrets in memory with a configurable TTL. The AWS Secrets Manager Client-side Caching library enables in-memory caching of secrets for Java, Python, .NET, and Go applications. It handles secret retrieval and TTL expiration locally in memory, drastically reducing `GetSecretValue` API call volume, avoiding throttling limits, and reducing billing costs.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets_cache-python.html",
    tags: ["AWS Secrets Manager", "Secrets Manager", "Security Compliance"]
  },
  {
    id: "aws-dva-384",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Secrets Manager Client-Side Caching: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS Secrets Manager to reduce API calls, lower request costs, and prevent API rate-limiting when microservices running on AWS Lambda or Amazon ECS frequently retrieve secrets.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? AWS Secrets Manager Client-Side Caching Library is being implemented.",
    options: [
      { id: 'A', text: "Integrate the AWS Secrets Manager Client-side Caching library in the application code to cache secrets in memory with a configurable TTL." },
      { id: 'B', text: "Query the Secrets Manager `GetSecretValue` API on every single incoming HTTP request." },
      { id: 'C', text: "Store the database secret in a public Amazon S3 bucket." },
      { id: 'D', text: "Hardcode the database password in the Docker container image environment variables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate the AWS Secrets Manager Client-side Caching library in the application code to cache secrets in memory with a configurable TTL. The AWS Secrets Manager Client-side Caching library enables in-memory caching of secrets for Java, Python, .NET, and Go applications. It handles secret retrieval and TTL expiration locally in memory, drastically reducing `GetSecretValue` API call volume, avoiding throttling limits, and reducing billing costs.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets_cache-python.html",
    tags: ["AWS Secrets Manager", "Secrets Manager", "Hybrid Migration"]
  },
  {
    id: "aws-dva-385",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Secrets Manager Client-Side Caching: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS Secrets Manager to reduce API calls, lower request costs, and prevent API rate-limiting when microservices running on AWS Lambda or Amazon ECS frequently retrieve secrets.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? AWS Secrets Manager Client-Side Caching Library is being implemented.",
    options: [
      { id: 'A', text: "Integrate the AWS Secrets Manager Client-side Caching library in the application code to cache secrets in memory with a configurable TTL." },
      { id: 'B', text: "Query the Secrets Manager `GetSecretValue` API on every single incoming HTTP request." },
      { id: 'C', text: "Store the database secret in a public Amazon S3 bucket." },
      { id: 'D', text: "Hardcode the database password in the Docker container image environment variables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate the AWS Secrets Manager Client-side Caching library in the application code to cache secrets in memory with a configurable TTL. The AWS Secrets Manager Client-side Caching library enables in-memory caching of secrets for Java, Python, .NET, and Go applications. It handles secret retrieval and TTL expiration locally in memory, drastically reducing `GetSecretValue` API call volume, avoiding throttling limits, and reducing billing costs.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets_cache-python.html",
    tags: ["AWS Secrets Manager", "Secrets Manager", "Resilience Failure"]
  },
  {
    id: "aws-dva-386",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "IAM Policy Evaluation Logic: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS IAM to design an IAM access control architecture where an organizational security policy unconditionally overrides any permissions granted by developer team policies.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? IAM Policy Evaluation Logic with Explicit Deny is being implemented.",
    options: [
      { id: 'A', text: "Rely on the IAM policy evaluation hierarchy where an explicit Deny in any applicable policy (SCP, identity-based, or permissions boundary) always overrides any explicit Allow." },
      { id: 'B', text: "Configure multiple Allow policies and rely on the policy creation timestamp." },
      { id: 'C', text: "Attach an IAM permission boundary that duplicates developer Allow statements." },
      { id: 'D', text: "Configure an S3 ACL that grants public read access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on the IAM policy evaluation hierarchy where an explicit Deny in any applicable policy (SCP, identity-based, or permissions boundary) always overrides any explicit Allow. In AWS IAM policy evaluation, the default state is an implicit deny. An explicit allow grants access only if no explicit deny exists anywhere in the evaluation path. An explicit Deny in any applicable policy (SCP, permissions boundary, identity-based policy, or resource-based policy) unconditionally overrides any Allow.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html",
    tags: ["AWS IAM", "IAM", "Dr Failover"]
  },
  {
    id: "aws-dva-387",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "IAM Policy Evaluation Logic: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS IAM to design an IAM access control architecture where an organizational security policy unconditionally overrides any permissions granted by developer team policies.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? IAM Policy Evaluation Logic with Explicit Deny is being implemented.",
    options: [
      { id: 'A', text: "Rely on the IAM policy evaluation hierarchy where an explicit Deny in any applicable policy (SCP, identity-based, or permissions boundary) always overrides any explicit Allow." },
      { id: 'B', text: "Configure multiple Allow policies and rely on the policy creation timestamp." },
      { id: 'C', text: "Attach an IAM permission boundary that duplicates developer Allow statements." },
      { id: 'D', text: "Configure an S3 ACL that grants public read access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on the IAM policy evaluation hierarchy where an explicit Deny in any applicable policy (SCP, identity-based, or permissions boundary) always overrides any explicit Allow. In AWS IAM policy evaluation, the default state is an implicit deny. An explicit allow grants access only if no explicit deny exists anywhere in the evaluation path. An explicit Deny in any applicable policy (SCP, permissions boundary, identity-based policy, or resource-based policy) unconditionally overrides any Allow.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html",
    tags: ["AWS IAM", "IAM", "High Load Scale"]
  },
  {
    id: "aws-dva-388",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "IAM Policy Evaluation Logic: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS IAM to design an IAM access control architecture where an organizational security policy unconditionally overrides any permissions granted by developer team policies.",
    question: "Which solution properly implements these mandatory security and governance controls? IAM Policy Evaluation Logic with Explicit Deny is being implemented.",
    options: [
      { id: 'A', text: "Rely on the IAM policy evaluation hierarchy where an explicit Deny in any applicable policy (SCP, identity-based, or permissions boundary) always overrides any explicit Allow." },
      { id: 'B', text: "Configure multiple Allow policies and rely on the policy creation timestamp." },
      { id: 'C', text: "Attach an IAM permission boundary that duplicates developer Allow statements." },
      { id: 'D', text: "Configure an S3 ACL that grants public read access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on the IAM policy evaluation hierarchy where an explicit Deny in any applicable policy (SCP, identity-based, or permissions boundary) always overrides any explicit Allow. In AWS IAM policy evaluation, the default state is an implicit deny. An explicit allow grants access only if no explicit deny exists anywhere in the evaluation path. An explicit Deny in any applicable policy (SCP, permissions boundary, identity-based policy, or resource-based policy) unconditionally overrides any Allow.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html",
    tags: ["AWS IAM", "IAM", "Security Compliance"]
  },
  {
    id: "aws-dva-389",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "IAM Policy Evaluation Logic: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS IAM to design an IAM access control architecture where an organizational security policy unconditionally overrides any permissions granted by developer team policies.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? IAM Policy Evaluation Logic with Explicit Deny is being implemented.",
    options: [
      { id: 'A', text: "Rely on the IAM policy evaluation hierarchy where an explicit Deny in any applicable policy (SCP, identity-based, or permissions boundary) always overrides any explicit Allow." },
      { id: 'B', text: "Configure multiple Allow policies and rely on the policy creation timestamp." },
      { id: 'C', text: "Attach an IAM permission boundary that duplicates developer Allow statements." },
      { id: 'D', text: "Configure an S3 ACL that grants public read access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on the IAM policy evaluation hierarchy where an explicit Deny in any applicable policy (SCP, identity-based, or permissions boundary) always overrides any explicit Allow. In AWS IAM policy evaluation, the default state is an implicit deny. An explicit allow grants access only if no explicit deny exists anywhere in the evaluation path. An explicit Deny in any applicable policy (SCP, permissions boundary, identity-based policy, or resource-based policy) unconditionally overrides any Allow.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html",
    tags: ["AWS IAM", "IAM", "Hybrid Migration"]
  },
  {
    id: "aws-dva-390",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "IAM Policy Evaluation Logic: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS IAM to design an IAM access control architecture where an organizational security policy unconditionally overrides any permissions granted by developer team policies.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? IAM Policy Evaluation Logic with Explicit Deny is being implemented.",
    options: [
      { id: 'A', text: "Rely on the IAM policy evaluation hierarchy where an explicit Deny in any applicable policy (SCP, identity-based, or permissions boundary) always overrides any explicit Allow." },
      { id: 'B', text: "Configure multiple Allow policies and rely on the policy creation timestamp." },
      { id: 'C', text: "Attach an IAM permission boundary that duplicates developer Allow statements." },
      { id: 'D', text: "Configure an S3 ACL that grants public read access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on the IAM policy evaluation hierarchy where an explicit Deny in any applicable policy (SCP, identity-based, or permissions boundary) always overrides any explicit Allow. In AWS IAM policy evaluation, the default state is an implicit deny. An explicit allow grants access only if no explicit deny exists anywhere in the evaluation path. An explicit Deny in any applicable policy (SCP, permissions boundary, identity-based policy, or resource-based policy) unconditionally overrides any Allow.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html",
    tags: ["AWS IAM", "IAM", "Resilience Failure"]
  },
  {
    id: "aws-dva-391",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Amazon Inspector Automated Scanning: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon Inspector to automatically scan container images for operating system and application package vulnerabilities upon push to Amazon ECR.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? Amazon Inspector container vulnerability scanning is being implemented.",
    options: [
      { id: 'A', text: "Enable Amazon Inspector enhanced scanning for Amazon ECR with continuous automated vulnerability assessments." },
      { id: 'B', text: "Run manual container scans on local developer laptops before docker push." },
      { id: 'C', text: "Deploy an open-source scanner container as an EC2 cron job running weekly." },
      { id: 'D', text: "Configure Amazon GuardDuty to inspect application logs for vulnerability mentions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Inspector enhanced scanning for Amazon ECR with continuous automated vulnerability assessments. Amazon Inspector integrates natively with Amazon ECR to provide automated, continuous scanning of container images for both operating system package and programming language package (application dependency) vulnerabilities (CVEs) as soon as images are pushed.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/scanning-ecr.html",
    tags: ["Amazon Inspector", "Inspector", "Dr Failover"]
  },
  {
    id: "aws-dva-392",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Amazon Inspector Automated Scanning: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon Inspector to automatically scan container images for operating system and application package vulnerabilities upon push to Amazon ECR.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? Amazon Inspector container vulnerability scanning is being implemented.",
    options: [
      { id: 'A', text: "Enable Amazon Inspector enhanced scanning for Amazon ECR with continuous automated vulnerability assessments." },
      { id: 'B', text: "Run manual container scans on local developer laptops before docker push." },
      { id: 'C', text: "Deploy an open-source scanner container as an EC2 cron job running weekly." },
      { id: 'D', text: "Configure Amazon GuardDuty to inspect application logs for vulnerability mentions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Inspector enhanced scanning for Amazon ECR with continuous automated vulnerability assessments. Amazon Inspector integrates natively with Amazon ECR to provide automated, continuous scanning of container images for both operating system package and programming language package (application dependency) vulnerabilities (CVEs) as soon as images are pushed.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/scanning-ecr.html",
    tags: ["Amazon Inspector", "Inspector", "High Load Scale"]
  },
  {
    id: "aws-dva-393",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Amazon Inspector Automated Scanning: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon Inspector to automatically scan container images for operating system and application package vulnerabilities upon push to Amazon ECR.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon Inspector container vulnerability scanning is being implemented.",
    options: [
      { id: 'A', text: "Enable Amazon Inspector enhanced scanning for Amazon ECR with continuous automated vulnerability assessments." },
      { id: 'B', text: "Run manual container scans on local developer laptops before docker push." },
      { id: 'C', text: "Deploy an open-source scanner container as an EC2 cron job running weekly." },
      { id: 'D', text: "Configure Amazon GuardDuty to inspect application logs for vulnerability mentions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Inspector enhanced scanning for Amazon ECR with continuous automated vulnerability assessments. Amazon Inspector integrates natively with Amazon ECR to provide automated, continuous scanning of container images for both operating system package and programming language package (application dependency) vulnerabilities (CVEs) as soon as images are pushed.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/scanning-ecr.html",
    tags: ["Amazon Inspector", "Inspector", "Security Compliance"]
  },
  {
    id: "aws-dva-394",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Amazon Inspector Automated Scanning: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon Inspector to automatically scan container images for operating system and application package vulnerabilities upon push to Amazon ECR.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? Amazon Inspector container vulnerability scanning is being implemented.",
    options: [
      { id: 'A', text: "Enable Amazon Inspector enhanced scanning for Amazon ECR with continuous automated vulnerability assessments." },
      { id: 'B', text: "Run manual container scans on local developer laptops before docker push." },
      { id: 'C', text: "Deploy an open-source scanner container as an EC2 cron job running weekly." },
      { id: 'D', text: "Configure Amazon GuardDuty to inspect application logs for vulnerability mentions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Inspector enhanced scanning for Amazon ECR with continuous automated vulnerability assessments. Amazon Inspector integrates natively with Amazon ECR to provide automated, continuous scanning of container images for both operating system package and programming language package (application dependency) vulnerabilities (CVEs) as soon as images are pushed.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/scanning-ecr.html",
    tags: ["Amazon Inspector", "Inspector", "Hybrid Migration"]
  },
  {
    id: "aws-dva-395",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Amazon Inspector Automated Scanning: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon Inspector to automatically scan container images for operating system and application package vulnerabilities upon push to Amazon ECR.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? Amazon Inspector container vulnerability scanning is being implemented.",
    options: [
      { id: 'A', text: "Enable Amazon Inspector enhanced scanning for Amazon ECR with continuous automated vulnerability assessments." },
      { id: 'B', text: "Run manual container scans on local developer laptops before docker push." },
      { id: 'C', text: "Deploy an open-source scanner container as an EC2 cron job running weekly." },
      { id: 'D', text: "Configure Amazon GuardDuty to inspect application logs for vulnerability mentions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Inspector enhanced scanning for Amazon ECR with continuous automated vulnerability assessments. Amazon Inspector integrates natively with Amazon ECR to provide automated, continuous scanning of container images for both operating system package and programming language package (application dependency) vulnerabilities (CVEs) as soon as images are pushed.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/scanning-ecr.html",
    tags: ["Amazon Inspector", "Inspector", "Resilience Failure"]
  },
  {
    id: "aws-dva-396",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "AWS SAM Template Syntax: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS SAM to define serverless applications containing Lambda functions, API Gateway endpoints, and DynamoDB tables with concise declarative shorthand syntax.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? AWS Serverless Application Model (SAM) template transform is being implemented.",
    options: [
      { id: 'A', text: "Use an AWS SAM template with `Transform: AWS::Serverless-2016-10-31` and declare `AWS::Serverless::Function` resources." },
      { id: 'B', text: "Write a 1,000-line standard CloudFormation template declaring raw `AWS::Lambda::Function` and `AWS::IAM::Role` resources." },
      { id: 'C', text: "Write a custom bash script that invokes the AWS CLI `aws lambda create-function` command sequentially." },
      { id: 'D', text: "Deploy resources manually using the AWS Management Console." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use an AWS SAM template with `Transform: AWS::Serverless-2016-10-31` and declare `AWS::Serverless::Function` resources. AWS SAM is an extension of AWS CloudFormation specifically optimized for serverless applications. Using `Transform: AWS::Serverless-2016-10-31`, developers write concise shorthand resource definitions (like `AWS::Serverless::Function`) that SAM expands into full CloudFormation syntax during deployment.",
    referenceUrl: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification.html",
    tags: ["AWS SAM", "SAM", "Dr Failover"]
  },
  {
    id: "aws-dva-397",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "AWS SAM Template Syntax: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS SAM to define serverless applications containing Lambda functions, API Gateway endpoints, and DynamoDB tables with concise declarative shorthand syntax.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? AWS Serverless Application Model (SAM) template transform is being implemented.",
    options: [
      { id: 'A', text: "Use an AWS SAM template with `Transform: AWS::Serverless-2016-10-31` and declare `AWS::Serverless::Function` resources." },
      { id: 'B', text: "Write a 1,000-line standard CloudFormation template declaring raw `AWS::Lambda::Function` and `AWS::IAM::Role` resources." },
      { id: 'C', text: "Write a custom bash script that invokes the AWS CLI `aws lambda create-function` command sequentially." },
      { id: 'D', text: "Deploy resources manually using the AWS Management Console." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use an AWS SAM template with `Transform: AWS::Serverless-2016-10-31` and declare `AWS::Serverless::Function` resources. AWS SAM is an extension of AWS CloudFormation specifically optimized for serverless applications. Using `Transform: AWS::Serverless-2016-10-31`, developers write concise shorthand resource definitions (like `AWS::Serverless::Function`) that SAM expands into full CloudFormation syntax during deployment.",
    referenceUrl: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification.html",
    tags: ["AWS SAM", "SAM", "High Load Scale"]
  },
  {
    id: "aws-dva-398",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "AWS SAM Template Syntax: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS SAM to define serverless applications containing Lambda functions, API Gateway endpoints, and DynamoDB tables with concise declarative shorthand syntax.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Serverless Application Model (SAM) template transform is being implemented.",
    options: [
      { id: 'A', text: "Use an AWS SAM template with `Transform: AWS::Serverless-2016-10-31` and declare `AWS::Serverless::Function` resources." },
      { id: 'B', text: "Write a 1,000-line standard CloudFormation template declaring raw `AWS::Lambda::Function` and `AWS::IAM::Role` resources." },
      { id: 'C', text: "Write a custom bash script that invokes the AWS CLI `aws lambda create-function` command sequentially." },
      { id: 'D', text: "Deploy resources manually using the AWS Management Console." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use an AWS SAM template with `Transform: AWS::Serverless-2016-10-31` and declare `AWS::Serverless::Function` resources. AWS SAM is an extension of AWS CloudFormation specifically optimized for serverless applications. Using `Transform: AWS::Serverless-2016-10-31`, developers write concise shorthand resource definitions (like `AWS::Serverless::Function`) that SAM expands into full CloudFormation syntax during deployment.",
    referenceUrl: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification.html",
    tags: ["AWS SAM", "SAM", "Security Compliance"]
  },
  {
    id: "aws-dva-399",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "AWS SAM Template Syntax: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS SAM to define serverless applications containing Lambda functions, API Gateway endpoints, and DynamoDB tables with concise declarative shorthand syntax.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? AWS Serverless Application Model (SAM) template transform is being implemented.",
    options: [
      { id: 'A', text: "Use an AWS SAM template with `Transform: AWS::Serverless-2016-10-31` and declare `AWS::Serverless::Function` resources." },
      { id: 'B', text: "Write a 1,000-line standard CloudFormation template declaring raw `AWS::Lambda::Function` and `AWS::IAM::Role` resources." },
      { id: 'C', text: "Write a custom bash script that invokes the AWS CLI `aws lambda create-function` command sequentially." },
      { id: 'D', text: "Deploy resources manually using the AWS Management Console." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use an AWS SAM template with `Transform: AWS::Serverless-2016-10-31` and declare `AWS::Serverless::Function` resources. AWS SAM is an extension of AWS CloudFormation specifically optimized for serverless applications. Using `Transform: AWS::Serverless-2016-10-31`, developers write concise shorthand resource definitions (like `AWS::Serverless::Function`) that SAM expands into full CloudFormation syntax during deployment.",
    referenceUrl: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification.html",
    tags: ["AWS SAM", "SAM", "Hybrid Migration"]
  },
  {
    id: "aws-dva-400",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "AWS SAM Template Syntax: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS SAM to define serverless applications containing Lambda functions, API Gateway endpoints, and DynamoDB tables with concise declarative shorthand syntax.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? AWS Serverless Application Model (SAM) template transform is being implemented.",
    options: [
      { id: 'A', text: "Use an AWS SAM template with `Transform: AWS::Serverless-2016-10-31` and declare `AWS::Serverless::Function` resources." },
      { id: 'B', text: "Write a 1,000-line standard CloudFormation template declaring raw `AWS::Lambda::Function` and `AWS::IAM::Role` resources." },
      { id: 'C', text: "Write a custom bash script that invokes the AWS CLI `aws lambda create-function` command sequentially." },
      { id: 'D', text: "Deploy resources manually using the AWS Management Console." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use an AWS SAM template with `Transform: AWS::Serverless-2016-10-31` and declare `AWS::Serverless::Function` resources. AWS SAM is an extension of AWS CloudFormation specifically optimized for serverless applications. Using `Transform: AWS::Serverless-2016-10-31`, developers write concise shorthand resource definitions (like `AWS::Serverless::Function`) that SAM expands into full CloudFormation syntax during deployment.",
    referenceUrl: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification.html",
    tags: ["AWS SAM", "SAM", "Resilience Failure"]
  }
];

export default AWS_DVA_QUESTIONS_16;
