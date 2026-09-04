export const AWS_DVA_QUESTIONS_17 = [
  {
    id: "aws-dva-401",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "AWS SAM CLI Local Testing: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS SAM to test and debug an AWS Lambda function locally in a Docker container simulating API Gateway events before deploying code to an AWS account.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? AWS SAM CLI local invocation and debugging is being implemented.",
    options: [
      { id: 'A', text: "Use the AWS SAM CLI command `sam local invoke` or `sam local start-api` with a sample event JSON file." },
      { id: 'B', text: "Deploy the function to a production AWS account and trigger it with live traffic." },
      { id: 'C', text: "Mock AWS services by writing custom HTTP mock servers in python." },
      { id: 'D', text: "Upload code zip files to an S3 bucket and inspect CloudWatch Logs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the AWS SAM CLI command `sam local invoke` or `sam local start-api` with a sample event JSON file. The AWS SAM CLI provides local emulation of AWS Lambda and Amazon API Gateway by spinning up local Docker containers that match the execution environment of Lambda runtimes. Commands like `sam local invoke` and `sam local start-api` allow rapid, offline local testing and step-through debugging.",
    referenceUrl: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-command-reference.html",
    tags: ["AWS SAM", "SAM", "Dr Failover"]
  },
  {
    id: "aws-dva-402",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "AWS SAM CLI Local Testing: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS SAM to test and debug an AWS Lambda function locally in a Docker container simulating API Gateway events before deploying code to an AWS account.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? AWS SAM CLI local invocation and debugging is being implemented.",
    options: [
      { id: 'A', text: "Use the AWS SAM CLI command `sam local invoke` or `sam local start-api` with a sample event JSON file." },
      { id: 'B', text: "Deploy the function to a production AWS account and trigger it with live traffic." },
      { id: 'C', text: "Mock AWS services by writing custom HTTP mock servers in python." },
      { id: 'D', text: "Upload code zip files to an S3 bucket and inspect CloudWatch Logs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the AWS SAM CLI command `sam local invoke` or `sam local start-api` with a sample event JSON file. The AWS SAM CLI provides local emulation of AWS Lambda and Amazon API Gateway by spinning up local Docker containers that match the execution environment of Lambda runtimes. Commands like `sam local invoke` and `sam local start-api` allow rapid, offline local testing and step-through debugging.",
    referenceUrl: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-command-reference.html",
    tags: ["AWS SAM", "SAM", "High Load Scale"]
  },
  {
    id: "aws-dva-403",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "AWS SAM CLI Local Testing: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS SAM to test and debug an AWS Lambda function locally in a Docker container simulating API Gateway events before deploying code to an AWS account.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS SAM CLI local invocation and debugging is being implemented.",
    options: [
      { id: 'A', text: "Use the AWS SAM CLI command `sam local invoke` or `sam local start-api` with a sample event JSON file." },
      { id: 'B', text: "Deploy the function to a production AWS account and trigger it with live traffic." },
      { id: 'C', text: "Mock AWS services by writing custom HTTP mock servers in python." },
      { id: 'D', text: "Upload code zip files to an S3 bucket and inspect CloudWatch Logs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the AWS SAM CLI command `sam local invoke` or `sam local start-api` with a sample event JSON file. The AWS SAM CLI provides local emulation of AWS Lambda and Amazon API Gateway by spinning up local Docker containers that match the execution environment of Lambda runtimes. Commands like `sam local invoke` and `sam local start-api` allow rapid, offline local testing and step-through debugging.",
    referenceUrl: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-command-reference.html",
    tags: ["AWS SAM", "SAM", "Security Compliance"]
  },
  {
    id: "aws-dva-404",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "AWS SAM CLI Local Testing: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS SAM to test and debug an AWS Lambda function locally in a Docker container simulating API Gateway events before deploying code to an AWS account.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? AWS SAM CLI local invocation and debugging is being implemented.",
    options: [
      { id: 'A', text: "Use the AWS SAM CLI command `sam local invoke` or `sam local start-api` with a sample event JSON file." },
      { id: 'B', text: "Deploy the function to a production AWS account and trigger it with live traffic." },
      { id: 'C', text: "Mock AWS services by writing custom HTTP mock servers in python." },
      { id: 'D', text: "Upload code zip files to an S3 bucket and inspect CloudWatch Logs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the AWS SAM CLI command `sam local invoke` or `sam local start-api` with a sample event JSON file. The AWS SAM CLI provides local emulation of AWS Lambda and Amazon API Gateway by spinning up local Docker containers that match the execution environment of Lambda runtimes. Commands like `sam local invoke` and `sam local start-api` allow rapid, offline local testing and step-through debugging.",
    referenceUrl: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-command-reference.html",
    tags: ["AWS SAM", "SAM", "Hybrid Migration"]
  },
  {
    id: "aws-dva-405",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "AWS SAM CLI Local Testing: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS SAM to test and debug an AWS Lambda function locally in a Docker container simulating API Gateway events before deploying code to an AWS account.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? AWS SAM CLI local invocation and debugging is being implemented.",
    options: [
      { id: 'A', text: "Use the AWS SAM CLI command `sam local invoke` or `sam local start-api` with a sample event JSON file." },
      { id: 'B', text: "Deploy the function to a production AWS account and trigger it with live traffic." },
      { id: 'C', text: "Mock AWS services by writing custom HTTP mock servers in python." },
      { id: 'D', text: "Upload code zip files to an S3 bucket and inspect CloudWatch Logs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the AWS SAM CLI command `sam local invoke` or `sam local start-api` with a sample event JSON file. The AWS SAM CLI provides local emulation of AWS Lambda and Amazon API Gateway by spinning up local Docker containers that match the execution environment of Lambda runtimes. Commands like `sam local invoke` and `sam local start-api` allow rapid, offline local testing and step-through debugging.",
    referenceUrl: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-command-reference.html",
    tags: ["AWS SAM", "SAM", "Resilience Failure"]
  },
  {
    id: "aws-dva-406",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "AWS CodeBuild buildspec.yml Phases: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS CodeBuild to configure a continuous integration build job that installs dependencies, runs unit tests, compiles binaries, and outputs build artifacts to Amazon S3.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? AWS CodeBuild buildspec.yml phase ordering is being implemented.",
    options: [
      { id: 'A', text: "Define a `buildspec.yml` file in the source repository containing `install`, `pre_build`, `build`, and `post_build` phases with an `artifacts` block." },
      { id: 'B', text: "Write a custom Windows batch script and run it on an EC2 instance manually." },
      { id: 'C', text: "Execute tests inside an AWS Lambda function handler with a 3-second timeout." },
      { id: 'D', text: "Store build commands in an S3 bucket policy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `buildspec.yml` file in the source repository containing `install`, `pre_build`, `build`, and `post_build` phases with an `artifacts` block. AWS CodeBuild relies on a `buildspec.yml` file located in the root of the source directory. It defines structured execution phases: `install` (runtime setup), `pre_build` (linting/dependency verification), `build` (compilation/testing), and `post_build` (packaging/tagging), followed by artifact declarations.",
    referenceUrl: "https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html",
    tags: ["AWS CodeBuild", "CodeBuild", "Dr Failover"]
  },
  {
    id: "aws-dva-407",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "AWS CodeBuild buildspec.yml Phases: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS CodeBuild to configure a continuous integration build job that installs dependencies, runs unit tests, compiles binaries, and outputs build artifacts to Amazon S3.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? AWS CodeBuild buildspec.yml phase ordering is being implemented.",
    options: [
      { id: 'A', text: "Define a `buildspec.yml` file in the source repository containing `install`, `pre_build`, `build`, and `post_build` phases with an `artifacts` block." },
      { id: 'B', text: "Write a custom Windows batch script and run it on an EC2 instance manually." },
      { id: 'C', text: "Execute tests inside an AWS Lambda function handler with a 3-second timeout." },
      { id: 'D', text: "Store build commands in an S3 bucket policy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `buildspec.yml` file in the source repository containing `install`, `pre_build`, `build`, and `post_build` phases with an `artifacts` block. AWS CodeBuild relies on a `buildspec.yml` file located in the root of the source directory. It defines structured execution phases: `install` (runtime setup), `pre_build` (linting/dependency verification), `build` (compilation/testing), and `post_build` (packaging/tagging), followed by artifact declarations.",
    referenceUrl: "https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html",
    tags: ["AWS CodeBuild", "CodeBuild", "High Load Scale"]
  },
  {
    id: "aws-dva-408",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "AWS CodeBuild buildspec.yml Phases: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS CodeBuild to configure a continuous integration build job that installs dependencies, runs unit tests, compiles binaries, and outputs build artifacts to Amazon S3.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS CodeBuild buildspec.yml phase ordering is being implemented.",
    options: [
      { id: 'A', text: "Define a `buildspec.yml` file in the source repository containing `install`, `pre_build`, `build`, and `post_build` phases with an `artifacts` block." },
      { id: 'B', text: "Write a custom Windows batch script and run it on an EC2 instance manually." },
      { id: 'C', text: "Execute tests inside an AWS Lambda function handler with a 3-second timeout." },
      { id: 'D', text: "Store build commands in an S3 bucket policy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `buildspec.yml` file in the source repository containing `install`, `pre_build`, `build`, and `post_build` phases with an `artifacts` block. AWS CodeBuild relies on a `buildspec.yml` file located in the root of the source directory. It defines structured execution phases: `install` (runtime setup), `pre_build` (linting/dependency verification), `build` (compilation/testing), and `post_build` (packaging/tagging), followed by artifact declarations.",
    referenceUrl: "https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html",
    tags: ["AWS CodeBuild", "CodeBuild", "Security Compliance"]
  },
  {
    id: "aws-dva-409",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "AWS CodeBuild buildspec.yml Phases: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS CodeBuild to configure a continuous integration build job that installs dependencies, runs unit tests, compiles binaries, and outputs build artifacts to Amazon S3.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? AWS CodeBuild buildspec.yml phase ordering is being implemented.",
    options: [
      { id: 'A', text: "Define a `buildspec.yml` file in the source repository containing `install`, `pre_build`, `build`, and `post_build` phases with an `artifacts` block." },
      { id: 'B', text: "Write a custom Windows batch script and run it on an EC2 instance manually." },
      { id: 'C', text: "Execute tests inside an AWS Lambda function handler with a 3-second timeout." },
      { id: 'D', text: "Store build commands in an S3 bucket policy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `buildspec.yml` file in the source repository containing `install`, `pre_build`, `build`, and `post_build` phases with an `artifacts` block. AWS CodeBuild relies on a `buildspec.yml` file located in the root of the source directory. It defines structured execution phases: `install` (runtime setup), `pre_build` (linting/dependency verification), `build` (compilation/testing), and `post_build` (packaging/tagging), followed by artifact declarations.",
    referenceUrl: "https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html",
    tags: ["AWS CodeBuild", "CodeBuild", "Hybrid Migration"]
  },
  {
    id: "aws-dva-410",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "AWS CodeBuild buildspec.yml Phases: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS CodeBuild to configure a continuous integration build job that installs dependencies, runs unit tests, compiles binaries, and outputs build artifacts to Amazon S3.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? AWS CodeBuild buildspec.yml phase ordering is being implemented.",
    options: [
      { id: 'A', text: "Define a `buildspec.yml` file in the source repository containing `install`, `pre_build`, `build`, and `post_build` phases with an `artifacts` block." },
      { id: 'B', text: "Write a custom Windows batch script and run it on an EC2 instance manually." },
      { id: 'C', text: "Execute tests inside an AWS Lambda function handler with a 3-second timeout." },
      { id: 'D', text: "Store build commands in an S3 bucket policy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `buildspec.yml` file in the source repository containing `install`, `pre_build`, `build`, and `post_build` phases with an `artifacts` block. AWS CodeBuild relies on a `buildspec.yml` file located in the root of the source directory. It defines structured execution phases: `install` (runtime setup), `pre_build` (linting/dependency verification), `build` (compilation/testing), and `post_build` (packaging/tagging), followed by artifact declarations.",
    referenceUrl: "https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html",
    tags: ["AWS CodeBuild", "CodeBuild", "Resilience Failure"]
  },
  {
    id: "aws-dva-411",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeDeploy AppSpec Hooks for Lambda: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS CodeDeploy to validate the health of a new AWS Lambda function version using synthetic test traffic before shifting production user traffic to it.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? AWS CodeDeploy AppSpec lifecycle hooks for Lambda deployments is being implemented.",
    options: [
      { id: 'A', text: "Define an `appspec.yaml` file with `BeforeAllowTraffic` and `AfterAllowTraffic` lifecycle hooks pointing to validation Lambda functions." },
      { id: 'B', text: "Configure an Application Load Balancer target group health check on port 8080." },
      { id: 'C', text: "Write a bash script that sleeps for 5 minutes during the build pipeline." },
      { id: 'D', text: "Deploy the function using the AWS Management Console with an overwrite flag." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an `appspec.yaml` file with `BeforeAllowTraffic` and `AfterAllowTraffic` lifecycle hooks pointing to validation Lambda functions. AWS CodeDeploy uses lifecycle hooks in `appspec.yaml` for serverless deployments. The `BeforeAllowTraffic` hook runs test queries against the new function version before traffic shifting begins, and `AfterAllowTraffic` verifies metrics after traffic is shifted. If validation fails, CodeDeploy automatically rolls back.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda",
    tags: ["AWS CodeDeploy", "CodeDeploy", "Dr Failover"]
  },
  {
    id: "aws-dva-412",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeDeploy AppSpec Hooks for Lambda: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS CodeDeploy to validate the health of a new AWS Lambda function version using synthetic test traffic before shifting production user traffic to it.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? AWS CodeDeploy AppSpec lifecycle hooks for Lambda deployments is being implemented.",
    options: [
      { id: 'A', text: "Define an `appspec.yaml` file with `BeforeAllowTraffic` and `AfterAllowTraffic` lifecycle hooks pointing to validation Lambda functions." },
      { id: 'B', text: "Configure an Application Load Balancer target group health check on port 8080." },
      { id: 'C', text: "Write a bash script that sleeps for 5 minutes during the build pipeline." },
      { id: 'D', text: "Deploy the function using the AWS Management Console with an overwrite flag." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an `appspec.yaml` file with `BeforeAllowTraffic` and `AfterAllowTraffic` lifecycle hooks pointing to validation Lambda functions. AWS CodeDeploy uses lifecycle hooks in `appspec.yaml` for serverless deployments. The `BeforeAllowTraffic` hook runs test queries against the new function version before traffic shifting begins, and `AfterAllowTraffic` verifies metrics after traffic is shifted. If validation fails, CodeDeploy automatically rolls back.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda",
    tags: ["AWS CodeDeploy", "CodeDeploy", "High Load Scale"]
  },
  {
    id: "aws-dva-413",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeDeploy AppSpec Hooks for Lambda: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS CodeDeploy to validate the health of a new AWS Lambda function version using synthetic test traffic before shifting production user traffic to it.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS CodeDeploy AppSpec lifecycle hooks for Lambda deployments is being implemented.",
    options: [
      { id: 'A', text: "Define an `appspec.yaml` file with `BeforeAllowTraffic` and `AfterAllowTraffic` lifecycle hooks pointing to validation Lambda functions." },
      { id: 'B', text: "Configure an Application Load Balancer target group health check on port 8080." },
      { id: 'C', text: "Write a bash script that sleeps for 5 minutes during the build pipeline." },
      { id: 'D', text: "Deploy the function using the AWS Management Console with an overwrite flag." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an `appspec.yaml` file with `BeforeAllowTraffic` and `AfterAllowTraffic` lifecycle hooks pointing to validation Lambda functions. AWS CodeDeploy uses lifecycle hooks in `appspec.yaml` for serverless deployments. The `BeforeAllowTraffic` hook runs test queries against the new function version before traffic shifting begins, and `AfterAllowTraffic` verifies metrics after traffic is shifted. If validation fails, CodeDeploy automatically rolls back.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda",
    tags: ["AWS CodeDeploy", "CodeDeploy", "Security Compliance"]
  },
  {
    id: "aws-dva-414",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeDeploy AppSpec Hooks for Lambda: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS CodeDeploy to validate the health of a new AWS Lambda function version using synthetic test traffic before shifting production user traffic to it.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? AWS CodeDeploy AppSpec lifecycle hooks for Lambda deployments is being implemented.",
    options: [
      { id: 'A', text: "Define an `appspec.yaml` file with `BeforeAllowTraffic` and `AfterAllowTraffic` lifecycle hooks pointing to validation Lambda functions." },
      { id: 'B', text: "Configure an Application Load Balancer target group health check on port 8080." },
      { id: 'C', text: "Write a bash script that sleeps for 5 minutes during the build pipeline." },
      { id: 'D', text: "Deploy the function using the AWS Management Console with an overwrite flag." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an `appspec.yaml` file with `BeforeAllowTraffic` and `AfterAllowTraffic` lifecycle hooks pointing to validation Lambda functions. AWS CodeDeploy uses lifecycle hooks in `appspec.yaml` for serverless deployments. The `BeforeAllowTraffic` hook runs test queries against the new function version before traffic shifting begins, and `AfterAllowTraffic` verifies metrics after traffic is shifted. If validation fails, CodeDeploy automatically rolls back.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda",
    tags: ["AWS CodeDeploy", "CodeDeploy", "Hybrid Migration"]
  },
  {
    id: "aws-dva-415",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeDeploy AppSpec Hooks for Lambda: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS CodeDeploy to validate the health of a new AWS Lambda function version using synthetic test traffic before shifting production user traffic to it.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? AWS CodeDeploy AppSpec lifecycle hooks for Lambda deployments is being implemented.",
    options: [
      { id: 'A', text: "Define an `appspec.yaml` file with `BeforeAllowTraffic` and `AfterAllowTraffic` lifecycle hooks pointing to validation Lambda functions." },
      { id: 'B', text: "Configure an Application Load Balancer target group health check on port 8080." },
      { id: 'C', text: "Write a bash script that sleeps for 5 minutes during the build pipeline." },
      { id: 'D', text: "Deploy the function using the AWS Management Console with an overwrite flag." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an `appspec.yaml` file with `BeforeAllowTraffic` and `AfterAllowTraffic` lifecycle hooks pointing to validation Lambda functions. AWS CodeDeploy uses lifecycle hooks in `appspec.yaml` for serverless deployments. The `BeforeAllowTraffic` hook runs test queries against the new function version before traffic shifting begins, and `AfterAllowTraffic` verifies metrics after traffic is shifted. If validation fails, CodeDeploy automatically rolls back.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda",
    tags: ["AWS CodeDeploy", "CodeDeploy", "Resilience Failure"]
  },
  {
    id: "aws-dva-416",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeDeploy Deployment Configurations: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS CodeDeploy to shift traffic to a new Lambda function version gradually (e.g. 10% every 10 minutes) and roll back automatically if CloudWatch error alarms trigger.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? CodeDeploy Linear and Canary deployment configurations is being implemented.",
    options: [
      { id: 'A', text: "Specify the `Linear10PercentEvery10Minutes` deployment configuration in CodeDeploy and configure automatic rollback on CloudWatch metric alarms." },
      { id: 'B', text: "Specify the `AllAtOnce` deployment configuration." },
      { id: 'C', text: "Manually update the Route 53 DNS record weight by 10% every 10 minutes." },
      { id: 'D', text: "Deploy an EC2 instance with a custom NGINX proxy shifting traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify the `Linear10PercentEvery10Minutes` deployment configuration in CodeDeploy and configure automatic rollback on CloudWatch metric alarms. CodeDeploy provides managed deployment configurations like Canary (e.g. `Canary10Percent5Minutes`) and Linear (e.g. `Linear10PercentEvery10Minutes`) that shift traffic in controlled increments. If associated CloudWatch alarms trigger during deployment, CodeDeploy initiates an immediate automated rollback to the previous stable version.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html",
    tags: ["AWS CodeDeploy", "CodeDeploy", "Dr Failover"]
  },
  {
    id: "aws-dva-417",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeDeploy Deployment Configurations: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS CodeDeploy to shift traffic to a new Lambda function version gradually (e.g. 10% every 10 minutes) and roll back automatically if CloudWatch error alarms trigger.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? CodeDeploy Linear and Canary deployment configurations is being implemented.",
    options: [
      { id: 'A', text: "Specify the `Linear10PercentEvery10Minutes` deployment configuration in CodeDeploy and configure automatic rollback on CloudWatch metric alarms." },
      { id: 'B', text: "Specify the `AllAtOnce` deployment configuration." },
      { id: 'C', text: "Manually update the Route 53 DNS record weight by 10% every 10 minutes." },
      { id: 'D', text: "Deploy an EC2 instance with a custom NGINX proxy shifting traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify the `Linear10PercentEvery10Minutes` deployment configuration in CodeDeploy and configure automatic rollback on CloudWatch metric alarms. CodeDeploy provides managed deployment configurations like Canary (e.g. `Canary10Percent5Minutes`) and Linear (e.g. `Linear10PercentEvery10Minutes`) that shift traffic in controlled increments. If associated CloudWatch alarms trigger during deployment, CodeDeploy initiates an immediate automated rollback to the previous stable version.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html",
    tags: ["AWS CodeDeploy", "CodeDeploy", "High Load Scale"]
  },
  {
    id: "aws-dva-418",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeDeploy Deployment Configurations: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS CodeDeploy to shift traffic to a new Lambda function version gradually (e.g. 10% every 10 minutes) and roll back automatically if CloudWatch error alarms trigger.",
    question: "Which solution properly implements these mandatory security and governance controls? CodeDeploy Linear and Canary deployment configurations is being implemented.",
    options: [
      { id: 'A', text: "Specify the `Linear10PercentEvery10Minutes` deployment configuration in CodeDeploy and configure automatic rollback on CloudWatch metric alarms." },
      { id: 'B', text: "Specify the `AllAtOnce` deployment configuration." },
      { id: 'C', text: "Manually update the Route 53 DNS record weight by 10% every 10 minutes." },
      { id: 'D', text: "Deploy an EC2 instance with a custom NGINX proxy shifting traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify the `Linear10PercentEvery10Minutes` deployment configuration in CodeDeploy and configure automatic rollback on CloudWatch metric alarms. CodeDeploy provides managed deployment configurations like Canary (e.g. `Canary10Percent5Minutes`) and Linear (e.g. `Linear10PercentEvery10Minutes`) that shift traffic in controlled increments. If associated CloudWatch alarms trigger during deployment, CodeDeploy initiates an immediate automated rollback to the previous stable version.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html",
    tags: ["AWS CodeDeploy", "CodeDeploy", "Security Compliance"]
  },
  {
    id: "aws-dva-419",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeDeploy Deployment Configurations: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS CodeDeploy to shift traffic to a new Lambda function version gradually (e.g. 10% every 10 minutes) and roll back automatically if CloudWatch error alarms trigger.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? CodeDeploy Linear and Canary deployment configurations is being implemented.",
    options: [
      { id: 'A', text: "Specify the `Linear10PercentEvery10Minutes` deployment configuration in CodeDeploy and configure automatic rollback on CloudWatch metric alarms." },
      { id: 'B', text: "Specify the `AllAtOnce` deployment configuration." },
      { id: 'C', text: "Manually update the Route 53 DNS record weight by 10% every 10 minutes." },
      { id: 'D', text: "Deploy an EC2 instance with a custom NGINX proxy shifting traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify the `Linear10PercentEvery10Minutes` deployment configuration in CodeDeploy and configure automatic rollback on CloudWatch metric alarms. CodeDeploy provides managed deployment configurations like Canary (e.g. `Canary10Percent5Minutes`) and Linear (e.g. `Linear10PercentEvery10Minutes`) that shift traffic in controlled increments. If associated CloudWatch alarms trigger during deployment, CodeDeploy initiates an immediate automated rollback to the previous stable version.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html",
    tags: ["AWS CodeDeploy", "CodeDeploy", "Hybrid Migration"]
  },
  {
    id: "aws-dva-420",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeDeploy Deployment Configurations: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS CodeDeploy to shift traffic to a new Lambda function version gradually (e.g. 10% every 10 minutes) and roll back automatically if CloudWatch error alarms trigger.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? CodeDeploy Linear and Canary deployment configurations is being implemented.",
    options: [
      { id: 'A', text: "Specify the `Linear10PercentEvery10Minutes` deployment configuration in CodeDeploy and configure automatic rollback on CloudWatch metric alarms." },
      { id: 'B', text: "Specify the `AllAtOnce` deployment configuration." },
      { id: 'C', text: "Manually update the Route 53 DNS record weight by 10% every 10 minutes." },
      { id: 'D', text: "Deploy an EC2 instance with a custom NGINX proxy shifting traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify the `Linear10PercentEvery10Minutes` deployment configuration in CodeDeploy and configure automatic rollback on CloudWatch metric alarms. CodeDeploy provides managed deployment configurations like Canary (e.g. `Canary10Percent5Minutes`) and Linear (e.g. `Linear10PercentEvery10Minutes`) that shift traffic in controlled increments. If associated CloudWatch alarms trigger during deployment, CodeDeploy initiates an immediate automated rollback to the previous stable version.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html",
    tags: ["AWS CodeDeploy", "CodeDeploy", "Resilience Failure"]
  },
  {
    id: "aws-dva-421",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodePipeline Cross-Account Deployments: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS CodePipeline to automate deployments from a centralized CI/CD tools account into separate development, staging, and production target AWS accounts.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? AWS CodePipeline cross-account deployment with KMS is being implemented.",
    options: [
      { id: 'A', text: "Configure AWS CodePipeline with cross-account IAM roles, an S3 artifact bucket encrypted with a customer managed KMS key, and KMS key policy delegation to the target accounts." },
      { id: 'B', text: "Create IAM user access keys in the production account and embed them in the pipeline build script." },
      { id: 'C', text: "Deploy independent CodePipeline pipelines in each target account without artifact sharing." },
      { id: 'D', text: "Configure public S3 bucket access for the deployment artifact bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS CodePipeline with cross-account IAM roles, an S3 artifact bucket encrypted with a customer managed KMS key, and KMS key policy delegation to the target accounts. Cross-account CodePipeline deployments require an S3 artifact bucket in the source account encrypted with a customer managed KMS key (as the default `aws/s3` key cannot be shared across accounts), along with cross-account IAM roles in the target accounts that CodePipeline assumes to execute deployments.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-create-cross-account.html",
    tags: ["AWS CodePipeline", "CodePipeline", "Dr Failover"]
  },
  {
    id: "aws-dva-422",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodePipeline Cross-Account Deployments: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS CodePipeline to automate deployments from a centralized CI/CD tools account into separate development, staging, and production target AWS accounts.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? AWS CodePipeline cross-account deployment with KMS is being implemented.",
    options: [
      { id: 'A', text: "Configure AWS CodePipeline with cross-account IAM roles, an S3 artifact bucket encrypted with a customer managed KMS key, and KMS key policy delegation to the target accounts." },
      { id: 'B', text: "Create IAM user access keys in the production account and embed them in the pipeline build script." },
      { id: 'C', text: "Deploy independent CodePipeline pipelines in each target account without artifact sharing." },
      { id: 'D', text: "Configure public S3 bucket access for the deployment artifact bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS CodePipeline with cross-account IAM roles, an S3 artifact bucket encrypted with a customer managed KMS key, and KMS key policy delegation to the target accounts. Cross-account CodePipeline deployments require an S3 artifact bucket in the source account encrypted with a customer managed KMS key (as the default `aws/s3` key cannot be shared across accounts), along with cross-account IAM roles in the target accounts that CodePipeline assumes to execute deployments.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-create-cross-account.html",
    tags: ["AWS CodePipeline", "CodePipeline", "High Load Scale"]
  },
  {
    id: "aws-dva-423",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodePipeline Cross-Account Deployments: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS CodePipeline to automate deployments from a centralized CI/CD tools account into separate development, staging, and production target AWS accounts.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS CodePipeline cross-account deployment with KMS is being implemented.",
    options: [
      { id: 'A', text: "Configure AWS CodePipeline with cross-account IAM roles, an S3 artifact bucket encrypted with a customer managed KMS key, and KMS key policy delegation to the target accounts." },
      { id: 'B', text: "Create IAM user access keys in the production account and embed them in the pipeline build script." },
      { id: 'C', text: "Deploy independent CodePipeline pipelines in each target account without artifact sharing." },
      { id: 'D', text: "Configure public S3 bucket access for the deployment artifact bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS CodePipeline with cross-account IAM roles, an S3 artifact bucket encrypted with a customer managed KMS key, and KMS key policy delegation to the target accounts. Cross-account CodePipeline deployments require an S3 artifact bucket in the source account encrypted with a customer managed KMS key (as the default `aws/s3` key cannot be shared across accounts), along with cross-account IAM roles in the target accounts that CodePipeline assumes to execute deployments.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-create-cross-account.html",
    tags: ["AWS CodePipeline", "CodePipeline", "Security Compliance"]
  },
  {
    id: "aws-dva-424",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodePipeline Cross-Account Deployments: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS CodePipeline to automate deployments from a centralized CI/CD tools account into separate development, staging, and production target AWS accounts.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? AWS CodePipeline cross-account deployment with KMS is being implemented.",
    options: [
      { id: 'A', text: "Configure AWS CodePipeline with cross-account IAM roles, an S3 artifact bucket encrypted with a customer managed KMS key, and KMS key policy delegation to the target accounts." },
      { id: 'B', text: "Create IAM user access keys in the production account and embed them in the pipeline build script." },
      { id: 'C', text: "Deploy independent CodePipeline pipelines in each target account without artifact sharing." },
      { id: 'D', text: "Configure public S3 bucket access for the deployment artifact bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS CodePipeline with cross-account IAM roles, an S3 artifact bucket encrypted with a customer managed KMS key, and KMS key policy delegation to the target accounts. Cross-account CodePipeline deployments require an S3 artifact bucket in the source account encrypted with a customer managed KMS key (as the default `aws/s3` key cannot be shared across accounts), along with cross-account IAM roles in the target accounts that CodePipeline assumes to execute deployments.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-create-cross-account.html",
    tags: ["AWS CodePipeline", "CodePipeline", "Hybrid Migration"]
  },
  {
    id: "aws-dva-425",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodePipeline Cross-Account Deployments: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS CodePipeline to automate deployments from a centralized CI/CD tools account into separate development, staging, and production target AWS accounts.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? AWS CodePipeline cross-account deployment with KMS is being implemented.",
    options: [
      { id: 'A', text: "Configure AWS CodePipeline with cross-account IAM roles, an S3 artifact bucket encrypted with a customer managed KMS key, and KMS key policy delegation to the target accounts." },
      { id: 'B', text: "Create IAM user access keys in the production account and embed them in the pipeline build script." },
      { id: 'C', text: "Deploy independent CodePipeline pipelines in each target account without artifact sharing." },
      { id: 'D', text: "Configure public S3 bucket access for the deployment artifact bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS CodePipeline with cross-account IAM roles, an S3 artifact bucket encrypted with a customer managed KMS key, and KMS key policy delegation to the target accounts. Cross-account CodePipeline deployments require an S3 artifact bucket in the source account encrypted with a customer managed KMS key (as the default `aws/s3` key cannot be shared across accounts), along with cross-account IAM roles in the target accounts that CodePipeline assumes to execute deployments.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-create-cross-account.html",
    tags: ["AWS CodePipeline", "CodePipeline", "Resilience Failure"]
  }
];

export default AWS_DVA_QUESTIONS_17;
