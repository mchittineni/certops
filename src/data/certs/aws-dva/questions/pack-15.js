export const AWS_DVA_QUESTIONS_15 = [
  {
    id: "aws-dva-351",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "IAM Cross-Account AssumeRole with ExternalId: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS IAM to allow a third-party SaaS monitoring platform to access AWS resources in an enterprise account while preventing the confused deputy security vulnerability.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? IAM cross-account role assumption with sts:ExternalId is being implemented.",
    options: [
      { id: 'A', text: "Create an IAM user with an access key and secret key and share them with the third party." },
      { id: 'B', text: "Configure an IAM role trust policy that allows the third-party account to call `sts:AssumeRole` with a mandatory `sts:ExternalId` condition." },
      { id: 'C', text: "Attach an AdministratorAccess managed policy to the third-party role without conditions." },
      { id: 'D', text: "Configure an S3 Bucket Policy granting public read access to all monitoring logs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an IAM role trust policy that allows the third-party account to call `sts:AssumeRole` with a mandatory `sts:ExternalId` condition. The `sts:ExternalId` condition in an IAM role trust policy protects against the confused deputy attack when delegating access to third-party multi-tenant SaaS providers. The third party must supply the unique shared External ID secret when assuming the customer role, ensuring one customer cannot trick the SaaS platform into accessing another customer's account.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html",
    tags: ["AWS IAM", "IAM", "Dr Failover"]
  },
  {
    id: "aws-dva-352",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "IAM Cross-Account AssumeRole with ExternalId: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS IAM to allow a third-party SaaS monitoring platform to access AWS resources in an enterprise account while preventing the confused deputy security vulnerability.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? IAM cross-account role assumption with sts:ExternalId is being implemented.",
    options: [
      { id: 'A', text: "Create an IAM user with an access key and secret key and share them with the third party." },
      { id: 'B', text: "Configure an S3 Bucket Policy granting public read access to all monitoring logs." },
      { id: 'C', text: "Attach an AdministratorAccess managed policy to the third-party role without conditions." },
      { id: 'D', text: "Configure an IAM role trust policy that allows the third-party account to call `sts:AssumeRole` with a mandatory `sts:ExternalId` condition." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an IAM role trust policy that allows the third-party account to call `sts:AssumeRole` with a mandatory `sts:ExternalId` condition. The `sts:ExternalId` condition in an IAM role trust policy protects against the confused deputy attack when delegating access to third-party multi-tenant SaaS providers. The third party must supply the unique shared External ID secret when assuming the customer role, ensuring one customer cannot trick the SaaS platform into accessing another customer's account.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html",
    tags: ["AWS IAM", "IAM", "High Load Scale"]
  },
  {
    id: "aws-dva-353",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "IAM Cross-Account AssumeRole with ExternalId: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS IAM to allow a third-party SaaS monitoring platform to access AWS resources in an enterprise account while preventing the confused deputy security vulnerability.",
    question: "Which solution properly implements these mandatory security and governance controls? IAM cross-account role assumption with sts:ExternalId is being implemented.",
    options: [
      { id: 'A', text: "Attach an AdministratorAccess managed policy to the third-party role without conditions." },
      { id: 'B', text: "Configure an IAM role trust policy that allows the third-party account to call `sts:AssumeRole` with a mandatory `sts:ExternalId` condition." },
      { id: 'C', text: "Configure an S3 Bucket Policy granting public read access to all monitoring logs." },
      { id: 'D', text: "Create an IAM user with an access key and secret key and share them with the third party." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an IAM role trust policy that allows the third-party account to call `sts:AssumeRole` with a mandatory `sts:ExternalId` condition. The `sts:ExternalId` condition in an IAM role trust policy protects against the confused deputy attack when delegating access to third-party multi-tenant SaaS providers. The third party must supply the unique shared External ID secret when assuming the customer role, ensuring one customer cannot trick the SaaS platform into accessing another customer's account.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html",
    tags: ["AWS IAM", "IAM", "Security Compliance"]
  },
  {
    id: "aws-dva-354",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "IAM Cross-Account AssumeRole with ExternalId: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS IAM to allow a third-party SaaS monitoring platform to access AWS resources in an enterprise account while preventing the confused deputy security vulnerability.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? IAM cross-account role assumption with sts:ExternalId is being implemented.",
    options: [
      { id: 'A', text: "Configure an S3 Bucket Policy granting public read access to all monitoring logs." },
      { id: 'B', text: "Create an IAM user with an access key and secret key and share them with the third party." },
      { id: 'C', text: "Configure an IAM role trust policy that allows the third-party account to call `sts:AssumeRole` with a mandatory `sts:ExternalId` condition." },
      { id: 'D', text: "Attach an AdministratorAccess managed policy to the third-party role without conditions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an IAM role trust policy that allows the third-party account to call `sts:AssumeRole` with a mandatory `sts:ExternalId` condition. The `sts:ExternalId` condition in an IAM role trust policy protects against the confused deputy attack when delegating access to third-party multi-tenant SaaS providers. The third party must supply the unique shared External ID secret when assuming the customer role, ensuring one customer cannot trick the SaaS platform into accessing another customer's account.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html",
    tags: ["AWS IAM", "IAM", "Hybrid Migration"]
  },
  {
    id: "aws-dva-355",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "IAM Cross-Account AssumeRole with ExternalId: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS IAM to allow a third-party SaaS monitoring platform to access AWS resources in an enterprise account while preventing the confused deputy security vulnerability.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? IAM cross-account role assumption with sts:ExternalId is being implemented.",
    options: [
      { id: 'A', text: "Create an IAM user with an access key and secret key and share them with the third party." },
      { id: 'B', text: "Configure an IAM role trust policy that allows the third-party account to call `sts:AssumeRole` with a mandatory `sts:ExternalId` condition." },
      { id: 'C', text: "Configure an S3 Bucket Policy granting public read access to all monitoring logs." },
      { id: 'D', text: "Attach an AdministratorAccess managed policy to the third-party role without conditions." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an IAM role trust policy that allows the third-party account to call `sts:AssumeRole` with a mandatory `sts:ExternalId` condition. The `sts:ExternalId` condition in an IAM role trust policy protects against the confused deputy attack when delegating access to third-party multi-tenant SaaS providers. The third party must supply the unique shared External ID secret when assuming the customer role, ensuring one customer cannot trick the SaaS platform into accessing another customer's account.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html",
    tags: ["AWS IAM", "IAM", "Resilience Failure"]
  },
  {
    id: "aws-dva-356",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Cognito User Pools vs Identity Pools: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon Cognito to authenticate mobile users via OAuth 2.0 social providers, manage user profiles, and provide temporary scoped AWS IAM credentials to upload photos directly to Amazon S3.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? Cognito User Pools for directory and Identity Pools for AWS credentials is being implemented.",
    options: [
      { id: 'A', text: "Use an Amazon Cognito User Pool for user registration and authentication, federate the user into an Amazon Cognito Identity Pool, and obtain temporary scoped IAM credentials to access Amazon S3." },
      { id: 'B', text: "Use an Amazon Cognito User Pool alone and embed an IAM access key in the user profile." },
      { id: 'C', text: "Deploy an AWS Lambda function that issues hardcoded IAM user credentials to authenticated clients." },
      { id: 'D', text: "Use an Amazon Cognito Identity Pool alone to manage user passwords and email verification." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use an Amazon Cognito User Pool for user registration and authentication, federate the user into an Amazon Cognito Identity Pool, and obtain temporary scoped IAM credentials to access Amazon S3. Cognito User Pools act as a user directory providing sign-up, sign-in, and OAuth tokens (ID, Access, Refresh). Cognito Identity Pools (Federated Identities) exchange tokens from identity providers (including User Pools or social logins) for temporary, scoped AWS IAM credentials allowing direct access to AWS services like S3.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-pools.html",
    tags: ["Amazon Cognito", "Cognito", "Dr Failover"]
  },
  {
    id: "aws-dva-357",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Cognito User Pools vs Identity Pools: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon Cognito to authenticate mobile users via OAuth 2.0 social providers, manage user profiles, and provide temporary scoped AWS IAM credentials to upload photos directly to Amazon S3.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? Cognito User Pools for directory and Identity Pools for AWS credentials is being implemented.",
    options: [
      { id: 'A', text: "Use an Amazon Cognito User Pool alone and embed an IAM access key in the user profile." },
      { id: 'B', text: "Deploy an AWS Lambda function that issues hardcoded IAM user credentials to authenticated clients." },
      { id: 'C', text: "Use an Amazon Cognito Identity Pool alone to manage user passwords and email verification." },
      { id: 'D', text: "Use an Amazon Cognito User Pool for user registration and authentication, federate the user into an Amazon Cognito Identity Pool, and obtain temporary scoped IAM credentials to access Amazon S3." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use an Amazon Cognito User Pool for user registration and authentication, federate the user into an Amazon Cognito Identity Pool, and obtain temporary scoped IAM credentials to access Amazon S3. Cognito User Pools act as a user directory providing sign-up, sign-in, and OAuth tokens (ID, Access, Refresh). Cognito Identity Pools (Federated Identities) exchange tokens from identity providers (including User Pools or social logins) for temporary, scoped AWS IAM credentials allowing direct access to AWS services like S3.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-pools.html",
    tags: ["Amazon Cognito", "Cognito", "High Load Scale"]
  },
  {
    id: "aws-dva-358",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Cognito User Pools vs Identity Pools: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon Cognito to authenticate mobile users via OAuth 2.0 social providers, manage user profiles, and provide temporary scoped AWS IAM credentials to upload photos directly to Amazon S3.",
    question: "Which solution properly implements these mandatory security and governance controls? Cognito User Pools for directory and Identity Pools for AWS credentials is being implemented.",
    options: [
      { id: 'A', text: "Deploy an AWS Lambda function that issues hardcoded IAM user credentials to authenticated clients." },
      { id: 'B', text: "Use an Amazon Cognito Identity Pool alone to manage user passwords and email verification." },
      { id: 'C', text: "Use an Amazon Cognito User Pool for user registration and authentication, federate the user into an Amazon Cognito Identity Pool, and obtain temporary scoped IAM credentials to access Amazon S3." },
      { id: 'D', text: "Use an Amazon Cognito User Pool alone and embed an IAM access key in the user profile." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use an Amazon Cognito User Pool for user registration and authentication, federate the user into an Amazon Cognito Identity Pool, and obtain temporary scoped IAM credentials to access Amazon S3. Cognito User Pools act as a user directory providing sign-up, sign-in, and OAuth tokens (ID, Access, Refresh). Cognito Identity Pools (Federated Identities) exchange tokens from identity providers (including User Pools or social logins) for temporary, scoped AWS IAM credentials allowing direct access to AWS services like S3.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-pools.html",
    tags: ["Amazon Cognito", "Cognito", "Security Compliance"]
  },
  {
    id: "aws-dva-359",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Cognito User Pools vs Identity Pools: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon Cognito to authenticate mobile users via OAuth 2.0 social providers, manage user profiles, and provide temporary scoped AWS IAM credentials to upload photos directly to Amazon S3.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? Cognito User Pools for directory and Identity Pools for AWS credentials is being implemented.",
    options: [
      { id: 'A', text: "Deploy an AWS Lambda function that issues hardcoded IAM user credentials to authenticated clients." },
      { id: 'B', text: "Use an Amazon Cognito User Pool alone and embed an IAM access key in the user profile." },
      { id: 'C', text: "Use an Amazon Cognito User Pool for user registration and authentication, federate the user into an Amazon Cognito Identity Pool, and obtain temporary scoped IAM credentials to access Amazon S3." },
      { id: 'D', text: "Use an Amazon Cognito Identity Pool alone to manage user passwords and email verification." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use an Amazon Cognito User Pool for user registration and authentication, federate the user into an Amazon Cognito Identity Pool, and obtain temporary scoped IAM credentials to access Amazon S3. Cognito User Pools act as a user directory providing sign-up, sign-in, and OAuth tokens (ID, Access, Refresh). Cognito Identity Pools (Federated Identities) exchange tokens from identity providers (including User Pools or social logins) for temporary, scoped AWS IAM credentials allowing direct access to AWS services like S3.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-pools.html",
    tags: ["Amazon Cognito", "Cognito", "Hybrid Migration"]
  },
  {
    id: "aws-dva-360",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Cognito User Pools vs Identity Pools: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon Cognito to authenticate mobile users via OAuth 2.0 social providers, manage user profiles, and provide temporary scoped AWS IAM credentials to upload photos directly to Amazon S3.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? Cognito User Pools for directory and Identity Pools for AWS credentials is being implemented.",
    options: [
      { id: 'A', text: "Deploy an AWS Lambda function that issues hardcoded IAM user credentials to authenticated clients." },
      { id: 'B', text: "Use an Amazon Cognito Identity Pool alone to manage user passwords and email verification." },
      { id: 'C', text: "Use an Amazon Cognito User Pool for user registration and authentication, federate the user into an Amazon Cognito Identity Pool, and obtain temporary scoped IAM credentials to access Amazon S3." },
      { id: 'D', text: "Use an Amazon Cognito User Pool alone and embed an IAM access key in the user profile." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use an Amazon Cognito User Pool for user registration and authentication, federate the user into an Amazon Cognito Identity Pool, and obtain temporary scoped IAM credentials to access Amazon S3. Cognito User Pools act as a user directory providing sign-up, sign-in, and OAuth tokens (ID, Access, Refresh). Cognito Identity Pools (Federated Identities) exchange tokens from identity providers (including User Pools or social logins) for temporary, scoped AWS IAM credentials allowing direct access to AWS services like S3.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-pools.html",
    tags: ["Amazon Cognito", "Cognito", "Resilience Failure"]
  },
  {
    id: "aws-dva-361",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "API Gateway Lambda Authorizers: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon API Gateway to validate custom HMAC request headers or third-party OAuth bearer tokens on incoming API Gateway requests and cache authorization policy decisions to reduce latency.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? API Gateway Lambda Authorizer with JWT caching is being implemented.",
    options: [
      { id: 'A', text: "Deploy an AWS WAF rule that decodes JWT tokens in the request body." },
      { id: 'B', text: "Deploy an Amazon API Gateway Lambda Request-based Authorizer and configure identity sources with policy caching enabled." },
      { id: 'C', text: "Validate authentication headers inside each individual backend Lambda integration function." },
      { id: 'D', text: "Store client API keys in an Amazon DynamoDB table and query it on every request." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an Amazon API Gateway Lambda Request-based Authorizer and configure identity sources with policy caching enabled. API Gateway Lambda Authorizers execute custom authorization code (validating tokens or headers) before invoking backend APIs. When caching is enabled, API Gateway caches the generated IAM policy for a configurable TTL (e.g. 300 seconds) keyed by identity sources, eliminating redundant Lambda authorizer invocations.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html",
    tags: ["Amazon API Gateway", "API Gateway", "Dr Failover"]
  },
  {
    id: "aws-dva-362",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "API Gateway Lambda Authorizers: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon API Gateway to validate custom HMAC request headers or third-party OAuth bearer tokens on incoming API Gateway requests and cache authorization policy decisions to reduce latency.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? API Gateway Lambda Authorizer with JWT caching is being implemented.",
    options: [
      { id: 'A', text: "Deploy an Amazon API Gateway Lambda Request-based Authorizer and configure identity sources with policy caching enabled." },
      { id: 'B', text: "Deploy an AWS WAF rule that decodes JWT tokens in the request body." },
      { id: 'C', text: "Store client API keys in an Amazon DynamoDB table and query it on every request." },
      { id: 'D', text: "Validate authentication headers inside each individual backend Lambda integration function." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Amazon API Gateway Lambda Request-based Authorizer and configure identity sources with policy caching enabled. API Gateway Lambda Authorizers execute custom authorization code (validating tokens or headers) before invoking backend APIs. When caching is enabled, API Gateway caches the generated IAM policy for a configurable TTL (e.g. 300 seconds) keyed by identity sources, eliminating redundant Lambda authorizer invocations.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html",
    tags: ["Amazon API Gateway", "API Gateway", "High Load Scale"]
  },
  {
    id: "aws-dva-363",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "API Gateway Lambda Authorizers: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon API Gateway to validate custom HMAC request headers or third-party OAuth bearer tokens on incoming API Gateway requests and cache authorization policy decisions to reduce latency.",
    question: "Which solution properly implements these mandatory security and governance controls? API Gateway Lambda Authorizer with JWT caching is being implemented.",
    options: [
      { id: 'A', text: "Deploy an Amazon API Gateway Lambda Request-based Authorizer and configure identity sources with policy caching enabled." },
      { id: 'B', text: "Store client API keys in an Amazon DynamoDB table and query it on every request." },
      { id: 'C', text: "Deploy an AWS WAF rule that decodes JWT tokens in the request body." },
      { id: 'D', text: "Validate authentication headers inside each individual backend Lambda integration function." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Amazon API Gateway Lambda Request-based Authorizer and configure identity sources with policy caching enabled. API Gateway Lambda Authorizers execute custom authorization code (validating tokens or headers) before invoking backend APIs. When caching is enabled, API Gateway caches the generated IAM policy for a configurable TTL (e.g. 300 seconds) keyed by identity sources, eliminating redundant Lambda authorizer invocations.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html",
    tags: ["Amazon API Gateway", "API Gateway", "Security Compliance"]
  },
  {
    id: "aws-dva-364",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "API Gateway Lambda Authorizers: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon API Gateway to validate custom HMAC request headers or third-party OAuth bearer tokens on incoming API Gateway requests and cache authorization policy decisions to reduce latency.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? API Gateway Lambda Authorizer with JWT caching is being implemented.",
    options: [
      { id: 'A', text: "Validate authentication headers inside each individual backend Lambda integration function." },
      { id: 'B', text: "Deploy an Amazon API Gateway Lambda Request-based Authorizer and configure identity sources with policy caching enabled." },
      { id: 'C', text: "Store client API keys in an Amazon DynamoDB table and query it on every request." },
      { id: 'D', text: "Deploy an AWS WAF rule that decodes JWT tokens in the request body." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an Amazon API Gateway Lambda Request-based Authorizer and configure identity sources with policy caching enabled. API Gateway Lambda Authorizers execute custom authorization code (validating tokens or headers) before invoking backend APIs. When caching is enabled, API Gateway caches the generated IAM policy for a configurable TTL (e.g. 300 seconds) keyed by identity sources, eliminating redundant Lambda authorizer invocations.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html",
    tags: ["Amazon API Gateway", "API Gateway", "Hybrid Migration"]
  },
  {
    id: "aws-dva-365",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "API Gateway Lambda Authorizers: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon API Gateway to validate custom HMAC request headers or third-party OAuth bearer tokens on incoming API Gateway requests and cache authorization policy decisions to reduce latency.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? API Gateway Lambda Authorizer with JWT caching is being implemented.",
    options: [
      { id: 'A', text: "Deploy an Amazon API Gateway Lambda Request-based Authorizer and configure identity sources with policy caching enabled." },
      { id: 'B', text: "Validate authentication headers inside each individual backend Lambda integration function." },
      { id: 'C', text: "Deploy an AWS WAF rule that decodes JWT tokens in the request body." },
      { id: 'D', text: "Store client API keys in an Amazon DynamoDB table and query it on every request." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Amazon API Gateway Lambda Request-based Authorizer and configure identity sources with policy caching enabled. API Gateway Lambda Authorizers execute custom authorization code (validating tokens or headers) before invoking backend APIs. When caching is enabled, API Gateway caches the generated IAM policy for a configurable TTL (e.g. 300 seconds) keyed by identity sources, eliminating redundant Lambda authorizer invocations.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html",
    tags: ["Amazon API Gateway", "API Gateway", "Resilience Failure"]
  },
  {
    id: "aws-dva-366",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "API Gateway Resource Policies Restricting VPCs: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon API Gateway to restrict access to an API Gateway REST API so that it can only be invoked by resources residing within a specific Amazon Virtual Private Cloud (VPC).",
    question: "Which implementation or architectural approach satisfies these resilience criteria? API Gateway Resource Policy with aws:sourceVpc condition is being implemented.",
    options: [
      { id: 'A', text: "Attach an API Gateway Resource Policy with an explicit Deny action for all requests where the `aws:sourceVpc` condition does not match the allowed VPC ID." },
      { id: 'B', text: "Configure a Security Group on the API Gateway endpoint allowing port 443." },
      { id: 'C', text: "Attach an IAM permission boundary to all users invoking the API." },
      { id: 'D', text: "Deploy an AWS Network Firewall cluster in front of the API Gateway public endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an API Gateway Resource Policy with an explicit Deny action for all requests where the `aws:sourceVpc` condition does not match the allowed VPC ID. API Gateway Resource Policies are JSON policy documents attached directly to a REST API to control whether a specified principal can invoke the API. Using condition keys like `aws:sourceVpc` or `aws:SourceIp`, architects can restrict access exclusively to specific private VPCs or corporate IP ranges.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies-examples.html",
    tags: ["Amazon API Gateway", "API Gateway", "Dr Failover"]
  },
  {
    id: "aws-dva-367",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "API Gateway Resource Policies Restricting VPCs: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon API Gateway to restrict access to an API Gateway REST API so that it can only be invoked by resources residing within a specific Amazon Virtual Private Cloud (VPC).",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? API Gateway Resource Policy with aws:sourceVpc condition is being implemented.",
    options: [
      { id: 'A', text: "Attach an API Gateway Resource Policy with an explicit Deny action for all requests where the `aws:sourceVpc` condition does not match the allowed VPC ID." },
      { id: 'B', text: "Attach an IAM permission boundary to all users invoking the API." },
      { id: 'C', text: "Deploy an AWS Network Firewall cluster in front of the API Gateway public endpoint." },
      { id: 'D', text: "Configure a Security Group on the API Gateway endpoint allowing port 443." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an API Gateway Resource Policy with an explicit Deny action for all requests where the `aws:sourceVpc` condition does not match the allowed VPC ID. API Gateway Resource Policies are JSON policy documents attached directly to a REST API to control whether a specified principal can invoke the API. Using condition keys like `aws:sourceVpc` or `aws:SourceIp`, architects can restrict access exclusively to specific private VPCs or corporate IP ranges.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies-examples.html",
    tags: ["Amazon API Gateway", "API Gateway", "High Load Scale"]
  },
  {
    id: "aws-dva-368",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "API Gateway Resource Policies Restricting VPCs: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon API Gateway to restrict access to an API Gateway REST API so that it can only be invoked by resources residing within a specific Amazon Virtual Private Cloud (VPC).",
    question: "Which solution properly implements these mandatory security and governance controls? API Gateway Resource Policy with aws:sourceVpc condition is being implemented.",
    options: [
      { id: 'A', text: "Configure a Security Group on the API Gateway endpoint allowing port 443." },
      { id: 'B', text: "Attach an IAM permission boundary to all users invoking the API." },
      { id: 'C', text: "Attach an API Gateway Resource Policy with an explicit Deny action for all requests where the `aws:sourceVpc` condition does not match the allowed VPC ID." },
      { id: 'D', text: "Deploy an AWS Network Firewall cluster in front of the API Gateway public endpoint." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Attach an API Gateway Resource Policy with an explicit Deny action for all requests where the `aws:sourceVpc` condition does not match the allowed VPC ID. API Gateway Resource Policies are JSON policy documents attached directly to a REST API to control whether a specified principal can invoke the API. Using condition keys like `aws:sourceVpc` or `aws:SourceIp`, architects can restrict access exclusively to specific private VPCs or corporate IP ranges.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies-examples.html",
    tags: ["Amazon API Gateway", "API Gateway", "Security Compliance"]
  },
  {
    id: "aws-dva-369",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "API Gateway Resource Policies Restricting VPCs: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon API Gateway to restrict access to an API Gateway REST API so that it can only be invoked by resources residing within a specific Amazon Virtual Private Cloud (VPC).",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? API Gateway Resource Policy with aws:sourceVpc condition is being implemented.",
    options: [
      { id: 'A', text: "Deploy an AWS Network Firewall cluster in front of the API Gateway public endpoint." },
      { id: 'B', text: "Configure a Security Group on the API Gateway endpoint allowing port 443." },
      { id: 'C', text: "Attach an API Gateway Resource Policy with an explicit Deny action for all requests where the `aws:sourceVpc` condition does not match the allowed VPC ID." },
      { id: 'D', text: "Attach an IAM permission boundary to all users invoking the API." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Attach an API Gateway Resource Policy with an explicit Deny action for all requests where the `aws:sourceVpc` condition does not match the allowed VPC ID. API Gateway Resource Policies are JSON policy documents attached directly to a REST API to control whether a specified principal can invoke the API. Using condition keys like `aws:sourceVpc` or `aws:SourceIp`, architects can restrict access exclusively to specific private VPCs or corporate IP ranges.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies-examples.html",
    tags: ["Amazon API Gateway", "API Gateway", "Hybrid Migration"]
  },
  {
    id: "aws-dva-370",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "API Gateway Resource Policies Restricting VPCs: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon API Gateway to restrict access to an API Gateway REST API so that it can only be invoked by resources residing within a specific Amazon Virtual Private Cloud (VPC).",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? API Gateway Resource Policy with aws:sourceVpc condition is being implemented.",
    options: [
      { id: 'A', text: "Attach an API Gateway Resource Policy with an explicit Deny action for all requests where the `aws:sourceVpc` condition does not match the allowed VPC ID." },
      { id: 'B', text: "Configure a Security Group on the API Gateway endpoint allowing port 443." },
      { id: 'C', text: "Attach an IAM permission boundary to all users invoking the API." },
      { id: 'D', text: "Deploy an AWS Network Firewall cluster in front of the API Gateway public endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an API Gateway Resource Policy with an explicit Deny action for all requests where the `aws:sourceVpc` condition does not match the allowed VPC ID. API Gateway Resource Policies are JSON policy documents attached directly to a REST API to control whether a specified principal can invoke the API. Using condition keys like `aws:sourceVpc` or `aws:SourceIp`, architects can restrict access exclusively to specific private VPCs or corporate IP ranges.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies-examples.html",
    tags: ["Amazon API Gateway", "API Gateway", "Resilience Failure"]
  },
  {
    id: "aws-dva-371",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "S3 Bucket Policies Enforcing TLS: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon S3 to ensure that all data uploaded or downloaded from an Amazon S3 bucket is encrypted in transit over HTTPS and reject all plaintext HTTP traffic.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? S3 Bucket Policy enforcing in-transit TLS encryption is being implemented.",
    options: [
      { id: 'A', text: "Configure S3 Object Lock in compliance mode." },
      { id: 'B', text: "Enable default Amazon S3 server-side encryption (SSE-S3) on the bucket." },
      { id: 'C', text: "Attach an AWS WAF Web ACL to the S3 bucket endpoint." },
      { id: 'D', text: "Attach an S3 bucket policy with an explicit Deny action on `s3:*` where the condition `aws:SecureTransport` is false." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Attach an S3 bucket policy with an explicit Deny action on `s3:*` where the condition `aws:SecureTransport` is false. The `aws:SecureTransport` condition key in an S3 bucket policy checks whether requests are transmitted over TLS (HTTPS). Combining an explicit Deny with `aws:SecureTransport: false` unconditionally blocks any unencrypted HTTP requests, satisfying compliance requirements for encryption in transit.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html#example-bucket-policies-use-case-1",
    tags: ["Amazon S3", "S3", "Dr Failover"]
  },
  {
    id: "aws-dva-372",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "S3 Bucket Policies Enforcing TLS: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon S3 to ensure that all data uploaded or downloaded from an Amazon S3 bucket is encrypted in transit over HTTPS and reject all plaintext HTTP traffic.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? S3 Bucket Policy enforcing in-transit TLS encryption is being implemented.",
    options: [
      { id: 'A', text: "Attach an AWS WAF Web ACL to the S3 bucket endpoint." },
      { id: 'B', text: "Configure S3 Object Lock in compliance mode." },
      { id: 'C', text: "Enable default Amazon S3 server-side encryption (SSE-S3) on the bucket." },
      { id: 'D', text: "Attach an S3 bucket policy with an explicit Deny action on `s3:*` where the condition `aws:SecureTransport` is false." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Attach an S3 bucket policy with an explicit Deny action on `s3:*` where the condition `aws:SecureTransport` is false. The `aws:SecureTransport` condition key in an S3 bucket policy checks whether requests are transmitted over TLS (HTTPS). Combining an explicit Deny with `aws:SecureTransport: false` unconditionally blocks any unencrypted HTTP requests, satisfying compliance requirements for encryption in transit.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html#example-bucket-policies-use-case-1",
    tags: ["Amazon S3", "S3", "High Load Scale"]
  },
  {
    id: "aws-dva-373",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "S3 Bucket Policies Enforcing TLS: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon S3 to ensure that all data uploaded or downloaded from an Amazon S3 bucket is encrypted in transit over HTTPS and reject all plaintext HTTP traffic.",
    question: "Which solution properly implements these mandatory security and governance controls? S3 Bucket Policy enforcing in-transit TLS encryption is being implemented.",
    options: [
      { id: 'A', text: "Configure S3 Object Lock in compliance mode." },
      { id: 'B', text: "Attach an S3 bucket policy with an explicit Deny action on `s3:*` where the condition `aws:SecureTransport` is false." },
      { id: 'C', text: "Enable default Amazon S3 server-side encryption (SSE-S3) on the bucket." },
      { id: 'D', text: "Attach an AWS WAF Web ACL to the S3 bucket endpoint." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Attach an S3 bucket policy with an explicit Deny action on `s3:*` where the condition `aws:SecureTransport` is false. The `aws:SecureTransport` condition key in an S3 bucket policy checks whether requests are transmitted over TLS (HTTPS). Combining an explicit Deny with `aws:SecureTransport: false` unconditionally blocks any unencrypted HTTP requests, satisfying compliance requirements for encryption in transit.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html#example-bucket-policies-use-case-1",
    tags: ["Amazon S3", "S3", "Security Compliance"]
  },
  {
    id: "aws-dva-374",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "S3 Bucket Policies Enforcing TLS: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon S3 to ensure that all data uploaded or downloaded from an Amazon S3 bucket is encrypted in transit over HTTPS and reject all plaintext HTTP traffic.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? S3 Bucket Policy enforcing in-transit TLS encryption is being implemented.",
    options: [
      { id: 'A', text: "Attach an S3 bucket policy with an explicit Deny action on `s3:*` where the condition `aws:SecureTransport` is false." },
      { id: 'B', text: "Enable default Amazon S3 server-side encryption (SSE-S3) on the bucket." },
      { id: 'C', text: "Configure S3 Object Lock in compliance mode." },
      { id: 'D', text: "Attach an AWS WAF Web ACL to the S3 bucket endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an S3 bucket policy with an explicit Deny action on `s3:*` where the condition `aws:SecureTransport` is false. The `aws:SecureTransport` condition key in an S3 bucket policy checks whether requests are transmitted over TLS (HTTPS). Combining an explicit Deny with `aws:SecureTransport: false` unconditionally blocks any unencrypted HTTP requests, satisfying compliance requirements for encryption in transit.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html#example-bucket-policies-use-case-1",
    tags: ["Amazon S3", "S3", "Hybrid Migration"]
  },
  {
    id: "aws-dva-375",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "S3 Bucket Policies Enforcing TLS: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon S3 to ensure that all data uploaded or downloaded from an Amazon S3 bucket is encrypted in transit over HTTPS and reject all plaintext HTTP traffic.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? S3 Bucket Policy enforcing in-transit TLS encryption is being implemented.",
    options: [
      { id: 'A', text: "Attach an S3 bucket policy with an explicit Deny action on `s3:*` where the condition `aws:SecureTransport` is false." },
      { id: 'B', text: "Attach an AWS WAF Web ACL to the S3 bucket endpoint." },
      { id: 'C', text: "Configure S3 Object Lock in compliance mode." },
      { id: 'D', text: "Enable default Amazon S3 server-side encryption (SSE-S3) on the bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an S3 bucket policy with an explicit Deny action on `s3:*` where the condition `aws:SecureTransport` is false. The `aws:SecureTransport` condition key in an S3 bucket policy checks whether requests are transmitted over TLS (HTTPS). Combining an explicit Deny with `aws:SecureTransport: false` unconditionally blocks any unencrypted HTTP requests, satisfying compliance requirements for encryption in transit.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html#example-bucket-policies-use-case-1",
    tags: ["Amazon S3", "S3", "Resilience Failure"]
  }
];

export default AWS_DVA_QUESTIONS_15;
