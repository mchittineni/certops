export const AWS_DVA_QUESTIONS_18 = [
  {
    id: "aws-dva-426",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Elastic Beanstalk Deployment Policies: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS Elastic Beanstalk to deploy updates to an Elastic Beanstalk application with zero downtime, full capacity preservation, and guaranteed isolation from the existing running fleet.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? Elastic Beanstalk Immutable and Traffic Splitting deployments is being implemented.",
    options: [
      { id: 'A', text: "Configure the Elastic Beanstalk deployment policy to Immutable or Traffic Splitting." },
      { id: 'B', text: "Configure the deployment policy to All at Once." },
      { id: 'C', text: "Configure the deployment policy to Rolling with 50% batch sizes." },
      { id: 'D', text: "Terminate all running EC2 instances manually before deploying the new version." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Elastic Beanstalk deployment policy to Immutable or Traffic Splitting. Elastic Beanstalk `Immutable` deployments create a brand-new Auto Scaling group with instances running the new version behind the load balancer, validating health before swapping and terminating the old fleet. This guarantees zero downtime and maintains 100% serving capacity throughout deployment.",
    referenceUrl: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html",
    tags: ["AWS Elastic Beanstalk", "Elastic Beanstalk", "Dr Failover"]
  },
  {
    id: "aws-dva-427",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Elastic Beanstalk Deployment Policies: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS Elastic Beanstalk to deploy updates to an Elastic Beanstalk application with zero downtime, full capacity preservation, and guaranteed isolation from the existing running fleet.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? Elastic Beanstalk Immutable and Traffic Splitting deployments is being implemented.",
    options: [
      { id: 'A', text: "Configure the Elastic Beanstalk deployment policy to Immutable or Traffic Splitting." },
      { id: 'B', text: "Configure the deployment policy to All at Once." },
      { id: 'C', text: "Configure the deployment policy to Rolling with 50% batch sizes." },
      { id: 'D', text: "Terminate all running EC2 instances manually before deploying the new version." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Elastic Beanstalk deployment policy to Immutable or Traffic Splitting. Elastic Beanstalk `Immutable` deployments create a brand-new Auto Scaling group with instances running the new version behind the load balancer, validating health before swapping and terminating the old fleet. This guarantees zero downtime and maintains 100% serving capacity throughout deployment.",
    referenceUrl: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html",
    tags: ["AWS Elastic Beanstalk", "Elastic Beanstalk", "High Load Scale"]
  },
  {
    id: "aws-dva-428",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Elastic Beanstalk Deployment Policies: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS Elastic Beanstalk to deploy updates to an Elastic Beanstalk application with zero downtime, full capacity preservation, and guaranteed isolation from the existing running fleet.",
    question: "Which solution properly implements these mandatory security and governance controls? Elastic Beanstalk Immutable and Traffic Splitting deployments is being implemented.",
    options: [
      { id: 'A', text: "Configure the Elastic Beanstalk deployment policy to Immutable or Traffic Splitting." },
      { id: 'B', text: "Configure the deployment policy to All at Once." },
      { id: 'C', text: "Configure the deployment policy to Rolling with 50% batch sizes." },
      { id: 'D', text: "Terminate all running EC2 instances manually before deploying the new version." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Elastic Beanstalk deployment policy to Immutable or Traffic Splitting. Elastic Beanstalk `Immutable` deployments create a brand-new Auto Scaling group with instances running the new version behind the load balancer, validating health before swapping and terminating the old fleet. This guarantees zero downtime and maintains 100% serving capacity throughout deployment.",
    referenceUrl: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html",
    tags: ["AWS Elastic Beanstalk", "Elastic Beanstalk", "Security Compliance"]
  },
  {
    id: "aws-dva-429",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Elastic Beanstalk Deployment Policies: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS Elastic Beanstalk to deploy updates to an Elastic Beanstalk application with zero downtime, full capacity preservation, and guaranteed isolation from the existing running fleet.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? Elastic Beanstalk Immutable and Traffic Splitting deployments is being implemented.",
    options: [
      { id: 'A', text: "Configure the Elastic Beanstalk deployment policy to Immutable or Traffic Splitting." },
      { id: 'B', text: "Configure the deployment policy to All at Once." },
      { id: 'C', text: "Configure the deployment policy to Rolling with 50% batch sizes." },
      { id: 'D', text: "Terminate all running EC2 instances manually before deploying the new version." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Elastic Beanstalk deployment policy to Immutable or Traffic Splitting. Elastic Beanstalk `Immutable` deployments create a brand-new Auto Scaling group with instances running the new version behind the load balancer, validating health before swapping and terminating the old fleet. This guarantees zero downtime and maintains 100% serving capacity throughout deployment.",
    referenceUrl: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html",
    tags: ["AWS Elastic Beanstalk", "Elastic Beanstalk", "Hybrid Migration"]
  },
  {
    id: "aws-dva-430",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Elastic Beanstalk Deployment Policies: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS Elastic Beanstalk to deploy updates to an Elastic Beanstalk application with zero downtime, full capacity preservation, and guaranteed isolation from the existing running fleet.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? Elastic Beanstalk Immutable and Traffic Splitting deployments is being implemented.",
    options: [
      { id: 'A', text: "Configure the Elastic Beanstalk deployment policy to Immutable or Traffic Splitting." },
      { id: 'B', text: "Configure the deployment policy to All at Once." },
      { id: 'C', text: "Configure the deployment policy to Rolling with 50% batch sizes." },
      { id: 'D', text: "Terminate all running EC2 instances manually before deploying the new version." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Elastic Beanstalk deployment policy to Immutable or Traffic Splitting. Elastic Beanstalk `Immutable` deployments create a brand-new Auto Scaling group with instances running the new version behind the load balancer, validating health before swapping and terminating the old fleet. This guarantees zero downtime and maintains 100% serving capacity throughout deployment.",
    referenceUrl: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html",
    tags: ["AWS Elastic Beanstalk", "Elastic Beanstalk", "Resilience Failure"]
  },
  {
    id: "aws-dva-431",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Elastic Beanstalk .ebextensions Configuration: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS Elastic Beanstalk to customize the runtime environment of an Elastic Beanstalk application by installing Linux packages, configuring system daemons, and setting environment variables at deploy time.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? Elastic Beanstalk .ebextensions configuration files is being implemented.",
    options: [
      { id: 'A', text: "Include YAML or JSON configuration files in the `.ebextensions` directory in the root of the source bundle." },
      { id: 'B', text: "SSH into each EC2 instance after deployment and install packages manually." },
      { id: 'C', text: "Deploy an AWS Systems Manager Run Command script every 5 minutes." },
      { id: 'D', text: "Store package install scripts in an S3 bucket policy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Include YAML or JSON configuration files in the `.ebextensions` directory in the root of the source bundle. Elastic Beanstalk evaluates configuration files located in the `.ebextensions` directory of the application source code bundle in alphanumeric order. Developers use keys like `packages`, `commands`, `files`, and `services` to customize instance operating systems and software dependencies declaratively.",
    referenceUrl: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/ebextensions.html",
    tags: ["AWS Elastic Beanstalk", "Elastic Beanstalk", "Dr Failover"]
  },
  {
    id: "aws-dva-432",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Elastic Beanstalk .ebextensions Configuration: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS Elastic Beanstalk to customize the runtime environment of an Elastic Beanstalk application by installing Linux packages, configuring system daemons, and setting environment variables at deploy time.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? Elastic Beanstalk .ebextensions configuration files is being implemented.",
    options: [
      { id: 'A', text: "Include YAML or JSON configuration files in the `.ebextensions` directory in the root of the source bundle." },
      { id: 'B', text: "SSH into each EC2 instance after deployment and install packages manually." },
      { id: 'C', text: "Deploy an AWS Systems Manager Run Command script every 5 minutes." },
      { id: 'D', text: "Store package install scripts in an S3 bucket policy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Include YAML or JSON configuration files in the `.ebextensions` directory in the root of the source bundle. Elastic Beanstalk evaluates configuration files located in the `.ebextensions` directory of the application source code bundle in alphanumeric order. Developers use keys like `packages`, `commands`, `files`, and `services` to customize instance operating systems and software dependencies declaratively.",
    referenceUrl: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/ebextensions.html",
    tags: ["AWS Elastic Beanstalk", "Elastic Beanstalk", "High Load Scale"]
  },
  {
    id: "aws-dva-433",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Elastic Beanstalk .ebextensions Configuration: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS Elastic Beanstalk to customize the runtime environment of an Elastic Beanstalk application by installing Linux packages, configuring system daemons, and setting environment variables at deploy time.",
    question: "Which solution properly implements these mandatory security and governance controls? Elastic Beanstalk .ebextensions configuration files is being implemented.",
    options: [
      { id: 'A', text: "Include YAML or JSON configuration files in the `.ebextensions` directory in the root of the source bundle." },
      { id: 'B', text: "SSH into each EC2 instance after deployment and install packages manually." },
      { id: 'C', text: "Deploy an AWS Systems Manager Run Command script every 5 minutes." },
      { id: 'D', text: "Store package install scripts in an S3 bucket policy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Include YAML or JSON configuration files in the `.ebextensions` directory in the root of the source bundle. Elastic Beanstalk evaluates configuration files located in the `.ebextensions` directory of the application source code bundle in alphanumeric order. Developers use keys like `packages`, `commands`, `files`, and `services` to customize instance operating systems and software dependencies declaratively.",
    referenceUrl: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/ebextensions.html",
    tags: ["AWS Elastic Beanstalk", "Elastic Beanstalk", "Security Compliance"]
  },
  {
    id: "aws-dva-434",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Elastic Beanstalk .ebextensions Configuration: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS Elastic Beanstalk to customize the runtime environment of an Elastic Beanstalk application by installing Linux packages, configuring system daemons, and setting environment variables at deploy time.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? Elastic Beanstalk .ebextensions configuration files is being implemented.",
    options: [
      { id: 'A', text: "Include YAML or JSON configuration files in the `.ebextensions` directory in the root of the source bundle." },
      { id: 'B', text: "SSH into each EC2 instance after deployment and install packages manually." },
      { id: 'C', text: "Deploy an AWS Systems Manager Run Command script every 5 minutes." },
      { id: 'D', text: "Store package install scripts in an S3 bucket policy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Include YAML or JSON configuration files in the `.ebextensions` directory in the root of the source bundle. Elastic Beanstalk evaluates configuration files located in the `.ebextensions` directory of the application source code bundle in alphanumeric order. Developers use keys like `packages`, `commands`, `files`, and `services` to customize instance operating systems and software dependencies declaratively.",
    referenceUrl: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/ebextensions.html",
    tags: ["AWS Elastic Beanstalk", "Elastic Beanstalk", "Hybrid Migration"]
  },
  {
    id: "aws-dva-435",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Elastic Beanstalk .ebextensions Configuration: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS Elastic Beanstalk to customize the runtime environment of an Elastic Beanstalk application by installing Linux packages, configuring system daemons, and setting environment variables at deploy time.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? Elastic Beanstalk .ebextensions configuration files is being implemented.",
    options: [
      { id: 'A', text: "Include YAML or JSON configuration files in the `.ebextensions` directory in the root of the source bundle." },
      { id: 'B', text: "SSH into each EC2 instance after deployment and install packages manually." },
      { id: 'C', text: "Deploy an AWS Systems Manager Run Command script every 5 minutes." },
      { id: 'D', text: "Store package install scripts in an S3 bucket policy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Include YAML or JSON configuration files in the `.ebextensions` directory in the root of the source bundle. Elastic Beanstalk evaluates configuration files located in the `.ebextensions` directory of the application source code bundle in alphanumeric order. Developers use keys like `packages`, `commands`, `files`, and `services` to customize instance operating systems and software dependencies declaratively.",
    referenceUrl: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/ebextensions.html",
    tags: ["AWS Elastic Beanstalk", "Elastic Beanstalk", "Resilience Failure"]
  },
  {
    id: "aws-dva-436",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "ECS Task Definition Parameter Tuning: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon ECS to configure containerized microservices in Amazon ECS with explicit CPU and memory boundaries, container port mappings, and environment variables sourced from AWS Secrets Manager.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? ECS Task Definition resource allocations is being implemented.",
    options: [
      { id: 'A', text: "Define an Amazon ECS Task Definition specifying task-level CPU and memory, containerDefinitions, and `secrets` attributes referencing Secrets Manager ARNs." },
      { id: 'B', text: "Hardcode environment variables in the Dockerfile directly." },
      { id: 'C', text: "Deploy containers using docker-compose on a standalone EC2 instance." },
      { id: 'D', text: "Configure an Application Load Balancer listener rule with hardcoded credentials." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an Amazon ECS Task Definition specifying task-level CPU and memory, containerDefinitions, and `secrets` attributes referencing Secrets Manager ARNs. ECS Task Definitions act as the blueprint for running Docker containers in ECS. They declare container images, CPU/memory resource limits, logging drivers, port mappings, and securely inject sensitive configuration directly from AWS Secrets Manager or Parameter Store into container environment variables.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html",
    tags: ["Amazon ECS", "ECS", "Dr Failover"]
  },
  {
    id: "aws-dva-437",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "ECS Task Definition Parameter Tuning: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon ECS to configure containerized microservices in Amazon ECS with explicit CPU and memory boundaries, container port mappings, and environment variables sourced from AWS Secrets Manager.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? ECS Task Definition resource allocations is being implemented.",
    options: [
      { id: 'A', text: "Define an Amazon ECS Task Definition specifying task-level CPU and memory, containerDefinitions, and `secrets` attributes referencing Secrets Manager ARNs." },
      { id: 'B', text: "Hardcode environment variables in the Dockerfile directly." },
      { id: 'C', text: "Deploy containers using docker-compose on a standalone EC2 instance." },
      { id: 'D', text: "Configure an Application Load Balancer listener rule with hardcoded credentials." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an Amazon ECS Task Definition specifying task-level CPU and memory, containerDefinitions, and `secrets` attributes referencing Secrets Manager ARNs. ECS Task Definitions act as the blueprint for running Docker containers in ECS. They declare container images, CPU/memory resource limits, logging drivers, port mappings, and securely inject sensitive configuration directly from AWS Secrets Manager or Parameter Store into container environment variables.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html",
    tags: ["Amazon ECS", "ECS", "High Load Scale"]
  },
  {
    id: "aws-dva-438",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "ECS Task Definition Parameter Tuning: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon ECS to configure containerized microservices in Amazon ECS with explicit CPU and memory boundaries, container port mappings, and environment variables sourced from AWS Secrets Manager.",
    question: "Which solution properly implements these mandatory security and governance controls? ECS Task Definition resource allocations is being implemented.",
    options: [
      { id: 'A', text: "Define an Amazon ECS Task Definition specifying task-level CPU and memory, containerDefinitions, and `secrets` attributes referencing Secrets Manager ARNs." },
      { id: 'B', text: "Hardcode environment variables in the Dockerfile directly." },
      { id: 'C', text: "Deploy containers using docker-compose on a standalone EC2 instance." },
      { id: 'D', text: "Configure an Application Load Balancer listener rule with hardcoded credentials." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an Amazon ECS Task Definition specifying task-level CPU and memory, containerDefinitions, and `secrets` attributes referencing Secrets Manager ARNs. ECS Task Definitions act as the blueprint for running Docker containers in ECS. They declare container images, CPU/memory resource limits, logging drivers, port mappings, and securely inject sensitive configuration directly from AWS Secrets Manager or Parameter Store into container environment variables.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html",
    tags: ["Amazon ECS", "ECS", "Security Compliance"]
  },
  {
    id: "aws-dva-439",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "ECS Task Definition Parameter Tuning: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon ECS to configure containerized microservices in Amazon ECS with explicit CPU and memory boundaries, container port mappings, and environment variables sourced from AWS Secrets Manager.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? ECS Task Definition resource allocations is being implemented.",
    options: [
      { id: 'A', text: "Define an Amazon ECS Task Definition specifying task-level CPU and memory, containerDefinitions, and `secrets` attributes referencing Secrets Manager ARNs." },
      { id: 'B', text: "Hardcode environment variables in the Dockerfile directly." },
      { id: 'C', text: "Deploy containers using docker-compose on a standalone EC2 instance." },
      { id: 'D', text: "Configure an Application Load Balancer listener rule with hardcoded credentials." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an Amazon ECS Task Definition specifying task-level CPU and memory, containerDefinitions, and `secrets` attributes referencing Secrets Manager ARNs. ECS Task Definitions act as the blueprint for running Docker containers in ECS. They declare container images, CPU/memory resource limits, logging drivers, port mappings, and securely inject sensitive configuration directly from AWS Secrets Manager or Parameter Store into container environment variables.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html",
    tags: ["Amazon ECS", "ECS", "Hybrid Migration"]
  },
  {
    id: "aws-dva-440",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "ECS Task Definition Parameter Tuning: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon ECS to configure containerized microservices in Amazon ECS with explicit CPU and memory boundaries, container port mappings, and environment variables sourced from AWS Secrets Manager.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? ECS Task Definition resource allocations is being implemented.",
    options: [
      { id: 'A', text: "Define an Amazon ECS Task Definition specifying task-level CPU and memory, containerDefinitions, and `secrets` attributes referencing Secrets Manager ARNs." },
      { id: 'B', text: "Hardcode environment variables in the Dockerfile directly." },
      { id: 'C', text: "Deploy containers using docker-compose on a standalone EC2 instance." },
      { id: 'D', text: "Configure an Application Load Balancer listener rule with hardcoded credentials." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an Amazon ECS Task Definition specifying task-level CPU and memory, containerDefinitions, and `secrets` attributes referencing Secrets Manager ARNs. ECS Task Definitions act as the blueprint for running Docker containers in ECS. They declare container images, CPU/memory resource limits, logging drivers, port mappings, and securely inject sensitive configuration directly from AWS Secrets Manager or Parameter Store into container environment variables.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html",
    tags: ["Amazon ECS", "ECS", "Resilience Failure"]
  },
  {
    id: "aws-dva-441",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "ECS Fargate Serverless Compute: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon ECS to run containerized microservices without provisioning, configuring, patching, or scaling underlying EC2 virtual machine instances.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? AWS Fargate serverless launch type for Amazon ECS is being implemented.",
    options: [
      { id: 'A', text: "Configure the Amazon ECS service to use the AWS Fargate launch type." },
      { id: 'B', text: "Deploy an EC2 Auto Scaling group with custom AMI configurations." },
      { id: 'C', text: "Launch a cluster of t4g.nano EC2 instances." },
      { id: 'D', text: "Deploy containers directly on an on-premises VMware cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Amazon ECS service to use the AWS Fargate launch type. AWS Fargate is a serverless compute engine for Amazon ECS and EKS that removes the need to manage underlying virtual machines. Developers specify container requirements, and Fargate dynamically provisions and isolates compute capacity per container with pay-as-you-go billing.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/userguide/what-is-fargate.html",
    tags: ["Amazon ECS", "ECS Fargate", "Dr Failover"]
  },
  {
    id: "aws-dva-442",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "ECS Fargate Serverless Compute: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon ECS to run containerized microservices without provisioning, configuring, patching, or scaling underlying EC2 virtual machine instances.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? AWS Fargate serverless launch type for Amazon ECS is being implemented.",
    options: [
      { id: 'A', text: "Configure the Amazon ECS service to use the AWS Fargate launch type." },
      { id: 'B', text: "Deploy an EC2 Auto Scaling group with custom AMI configurations." },
      { id: 'C', text: "Launch a cluster of t4g.nano EC2 instances." },
      { id: 'D', text: "Deploy containers directly on an on-premises VMware cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Amazon ECS service to use the AWS Fargate launch type. AWS Fargate is a serverless compute engine for Amazon ECS and EKS that removes the need to manage underlying virtual machines. Developers specify container requirements, and Fargate dynamically provisions and isolates compute capacity per container with pay-as-you-go billing.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/userguide/what-is-fargate.html",
    tags: ["Amazon ECS", "ECS Fargate", "High Load Scale"]
  },
  {
    id: "aws-dva-443",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "ECS Fargate Serverless Compute: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon ECS to run containerized microservices without provisioning, configuring, patching, or scaling underlying EC2 virtual machine instances.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Fargate serverless launch type for Amazon ECS is being implemented.",
    options: [
      { id: 'A', text: "Configure the Amazon ECS service to use the AWS Fargate launch type." },
      { id: 'B', text: "Deploy an EC2 Auto Scaling group with custom AMI configurations." },
      { id: 'C', text: "Launch a cluster of t4g.nano EC2 instances." },
      { id: 'D', text: "Deploy containers directly on an on-premises VMware cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Amazon ECS service to use the AWS Fargate launch type. AWS Fargate is a serverless compute engine for Amazon ECS and EKS that removes the need to manage underlying virtual machines. Developers specify container requirements, and Fargate dynamically provisions and isolates compute capacity per container with pay-as-you-go billing.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/userguide/what-is-fargate.html",
    tags: ["Amazon ECS", "ECS Fargate", "Security Compliance"]
  },
  {
    id: "aws-dva-444",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "ECS Fargate Serverless Compute: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon ECS to run containerized microservices without provisioning, configuring, patching, or scaling underlying EC2 virtual machine instances.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? AWS Fargate serverless launch type for Amazon ECS is being implemented.",
    options: [
      { id: 'A', text: "Configure the Amazon ECS service to use the AWS Fargate launch type." },
      { id: 'B', text: "Deploy an EC2 Auto Scaling group with custom AMI configurations." },
      { id: 'C', text: "Launch a cluster of t4g.nano EC2 instances." },
      { id: 'D', text: "Deploy containers directly on an on-premises VMware cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Amazon ECS service to use the AWS Fargate launch type. AWS Fargate is a serverless compute engine for Amazon ECS and EKS that removes the need to manage underlying virtual machines. Developers specify container requirements, and Fargate dynamically provisions and isolates compute capacity per container with pay-as-you-go billing.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/userguide/what-is-fargate.html",
    tags: ["Amazon ECS", "ECS Fargate", "Hybrid Migration"]
  },
  {
    id: "aws-dva-445",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "ECS Fargate Serverless Compute: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon ECS to run containerized microservices without provisioning, configuring, patching, or scaling underlying EC2 virtual machine instances.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? AWS Fargate serverless launch type for Amazon ECS is being implemented.",
    options: [
      { id: 'A', text: "Configure the Amazon ECS service to use the AWS Fargate launch type." },
      { id: 'B', text: "Deploy an EC2 Auto Scaling group with custom AMI configurations." },
      { id: 'C', text: "Launch a cluster of t4g.nano EC2 instances." },
      { id: 'D', text: "Deploy containers directly on an on-premises VMware cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Amazon ECS service to use the AWS Fargate launch type. AWS Fargate is a serverless compute engine for Amazon ECS and EKS that removes the need to manage underlying virtual machines. Developers specify container requirements, and Fargate dynamically provisions and isolates compute capacity per container with pay-as-you-go billing.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/userguide/what-is-fargate.html",
    tags: ["Amazon ECS", "ECS Fargate", "Resilience Failure"]
  },
  {
    id: "aws-dva-446",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CloudFormation DeletionPolicy: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS CloudFormation to prevent an Amazon S3 bucket or Amazon RDS database from being accidentally destroyed when a developer deletes the associated CloudFormation stack.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? CloudFormation DeletionPolicy attribute is being implemented.",
    options: [
      { id: 'A', text: "Set the `DeletionPolicy: Retain` attribute on the S3 bucket and RDS database resources in the CloudFormation template." },
      { id: 'B', text: "Remove the resources from the template and run `update-stack`." },
      { id: 'C', text: "Configure an IAM Deny policy on `cloudformation:DeleteStack`." },
      { id: 'D', text: "Enable CloudFormation termination protection on the EC2 instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set the `DeletionPolicy: Retain` attribute on the S3 bucket and RDS database resources in the CloudFormation template. The `DeletionPolicy` attribute in AWS CloudFormation controls what happens to a resource when its stack is deleted. Setting `DeletionPolicy: Retain` preserves the resource intact in the AWS account when the stack is deleted, preventing accidental data loss for persistent databases and S3 buckets.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html",
    tags: ["AWS CloudFormation", "CloudFormation", "Dr Failover"]
  },
  {
    id: "aws-dva-447",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CloudFormation DeletionPolicy: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS CloudFormation to prevent an Amazon S3 bucket or Amazon RDS database from being accidentally destroyed when a developer deletes the associated CloudFormation stack.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? CloudFormation DeletionPolicy attribute is being implemented.",
    options: [
      { id: 'A', text: "Set the `DeletionPolicy: Retain` attribute on the S3 bucket and RDS database resources in the CloudFormation template." },
      { id: 'B', text: "Remove the resources from the template and run `update-stack`." },
      { id: 'C', text: "Configure an IAM Deny policy on `cloudformation:DeleteStack`." },
      { id: 'D', text: "Enable CloudFormation termination protection on the EC2 instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set the `DeletionPolicy: Retain` attribute on the S3 bucket and RDS database resources in the CloudFormation template. The `DeletionPolicy` attribute in AWS CloudFormation controls what happens to a resource when its stack is deleted. Setting `DeletionPolicy: Retain` preserves the resource intact in the AWS account when the stack is deleted, preventing accidental data loss for persistent databases and S3 buckets.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html",
    tags: ["AWS CloudFormation", "CloudFormation", "High Load Scale"]
  },
  {
    id: "aws-dva-448",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CloudFormation DeletionPolicy: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS CloudFormation to prevent an Amazon S3 bucket or Amazon RDS database from being accidentally destroyed when a developer deletes the associated CloudFormation stack.",
    question: "Which solution properly implements these mandatory security and governance controls? CloudFormation DeletionPolicy attribute is being implemented.",
    options: [
      { id: 'A', text: "Set the `DeletionPolicy: Retain` attribute on the S3 bucket and RDS database resources in the CloudFormation template." },
      { id: 'B', text: "Remove the resources from the template and run `update-stack`." },
      { id: 'C', text: "Configure an IAM Deny policy on `cloudformation:DeleteStack`." },
      { id: 'D', text: "Enable CloudFormation termination protection on the EC2 instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set the `DeletionPolicy: Retain` attribute on the S3 bucket and RDS database resources in the CloudFormation template. The `DeletionPolicy` attribute in AWS CloudFormation controls what happens to a resource when its stack is deleted. Setting `DeletionPolicy: Retain` preserves the resource intact in the AWS account when the stack is deleted, preventing accidental data loss for persistent databases and S3 buckets.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html",
    tags: ["AWS CloudFormation", "CloudFormation", "Security Compliance"]
  },
  {
    id: "aws-dva-449",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CloudFormation DeletionPolicy: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS CloudFormation to prevent an Amazon S3 bucket or Amazon RDS database from being accidentally destroyed when a developer deletes the associated CloudFormation stack.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? CloudFormation DeletionPolicy attribute is being implemented.",
    options: [
      { id: 'A', text: "Set the `DeletionPolicy: Retain` attribute on the S3 bucket and RDS database resources in the CloudFormation template." },
      { id: 'B', text: "Remove the resources from the template and run `update-stack`." },
      { id: 'C', text: "Configure an IAM Deny policy on `cloudformation:DeleteStack`." },
      { id: 'D', text: "Enable CloudFormation termination protection on the EC2 instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set the `DeletionPolicy: Retain` attribute on the S3 bucket and RDS database resources in the CloudFormation template. The `DeletionPolicy` attribute in AWS CloudFormation controls what happens to a resource when its stack is deleted. Setting `DeletionPolicy: Retain` preserves the resource intact in the AWS account when the stack is deleted, preventing accidental data loss for persistent databases and S3 buckets.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html",
    tags: ["AWS CloudFormation", "CloudFormation", "Hybrid Migration"]
  },
  {
    id: "aws-dva-450",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CloudFormation DeletionPolicy: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS CloudFormation to prevent an Amazon S3 bucket or Amazon RDS database from being accidentally destroyed when a developer deletes the associated CloudFormation stack.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? CloudFormation DeletionPolicy attribute is being implemented.",
    options: [
      { id: 'A', text: "Set the `DeletionPolicy: Retain` attribute on the S3 bucket and RDS database resources in the CloudFormation template." },
      { id: 'B', text: "Remove the resources from the template and run `update-stack`." },
      { id: 'C', text: "Configure an IAM Deny policy on `cloudformation:DeleteStack`." },
      { id: 'D', text: "Enable CloudFormation termination protection on the EC2 instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set the `DeletionPolicy: Retain` attribute on the S3 bucket and RDS database resources in the CloudFormation template. The `DeletionPolicy` attribute in AWS CloudFormation controls what happens to a resource when its stack is deleted. Setting `DeletionPolicy: Retain` preserves the resource intact in the AWS account when the stack is deleted, preventing accidental data loss for persistent databases and S3 buckets.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html",
    tags: ["AWS CloudFormation", "CloudFormation", "Resilience Failure"]
  }
];

export default AWS_DVA_QUESTIONS_18;
