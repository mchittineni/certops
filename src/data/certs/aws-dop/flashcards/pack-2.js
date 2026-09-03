export const AWS_DOP_FLASHCARDS_2 = [
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "AWS AppConfig: Feature Flags vs. Application Deployments",
    "hint": "Decoupling code release from feature exposure at runtime.",
    "back": "<strong>AWS AppConfig</strong> deploys runtime configuration changes and feature flags dynamically without redeploying code or restarting containers. It provides validation checks (JSON Schema or Lambda validators) and graduated deployment strategies (linear or exponential ramp with automated rollback monitoring).",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-26"
  },
  {
    "difficulty": "easy",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "Semantic Versioning (SemVer): MAJOR vs. MINOR vs. PATCH in CI/CD",
    "hint": "Breaking changes vs. backward-compatible features vs. bug fixes.",
    "back": "<strong>MAJOR</strong>: Incompatible API breaking changes. <strong>MINOR</strong>: Backward-compatible new functionality. <strong>PATCH</strong>: Backward-compatible bug fixes. Automated release tools (e.g., <code>semantic-release</code>) analyze commit messages (Conventional Commits) to determine the next version number and generate changelogs automatically.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-27"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "Canary Release Routing: AWS Route 53 Weighted Records vs. ALB Target Groups",
    "hint": "DNS-level shifting vs. HTTP proxy layer shifting.",
    "back": "<strong>Route 53 Weighted Records</strong> shift traffic at the DNS resolution layer, but are subject to client-side DNS caching and TTL delays (slow rollback propagation). <strong>ALB Weighted Target Groups</strong> shift traffic immediately at Layer 7 based on configurable percentage weights without DNS TTL delay, providing instant rollback.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-28"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CloudWatch Synthetics Canaries: Heartbeat vs. API Canary vs. GUI Workflow",
    "hint": "Synthetic user journey testing against microservices and web UIs.",
    "back": "<strong>Heartbeat Monitor</strong> pings a single URL to verify HTTP 200 response and latency. <strong>API Canary</strong> sends multi-step HTTP requests with payload validation. <strong>GUI Workflow Canary</strong> launches a headless Puppeteer/Selenium browser in Lambda to simulate real user UI interactions (login, cart checkout) and capture screenshots.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-29"
  },
  {
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodePipeline Stages: Serial vs. Parallel Action Execution",
    "hint": "RunOrder property in pipeline definitions.",
    "back": "Actions within the same pipeline stage that share the same <code>runOrder</code> execute in <strong>parallel</strong> (e.g., running unit tests, linting, and security static analysis simultaneously). Actions with increasing <code>runOrder</code> numbers execute in <strong>serial</strong> sequence, waiting for earlier actions to complete successfully.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-30"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "AWS CodeStar Connections vs. Legacy GitHub OAuth Webhooks",
    "hint": "Secure, enterprise-level GitHub/GitLab integration.",
    "back": "<strong>CodeStar Connections</strong> uses GitHub Apps for granular organization-level authorization, eliminating personal access tokens and service account passwords. It supports GitHub, GitLab, and Bitbucket, and integrates with AWS Secrets Manager and IAM for secure, rotation-free repository access.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-31"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "Docker Multi-Stage Builds: Security & Optimization in CI/CD",
    "hint": "Separating build toolchains from final minimal runtime scratch images.",
    "back": "Multi-stage builds compile code and install dependencies in an initial heavy builder stage (e.g., <code>golang:alpine</code>), and then copy only the compiled binary or final bundle into a minimal runtime image (e.g., <code>distroless</code> or <code>alpine</code>). This dramatically reduces container image attack surface and deployment transfer time.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-32"
  },
  {
    "difficulty": "easy",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodeDeploy EC2 Rollback: Minimum Healthy Hosts Configuration",
    "hint": "Balancing deployment speed against service availability during updates.",
    "back": "<code>MinimumHealthyHosts</code> specifies the minimum percentage (e.g., 75%) or number of EC2 instances that must remain healthy and servicing traffic during deployment. If healthy instances drop below this threshold at any point, CodeDeploy halts the deployment immediately to prevent customer-facing service degradation.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-33"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodePipeline Variables: Namespace & Downstream Action Consumption",
    "hint": "Passing dynamic outputs between pipeline build, test, and deploy stages.",
    "back": "A stage action can export output variables by declaring a <code>namespace</code> (e.g., <code>namespace: MyBuild</code>). Downstream actions reference these variables in their configuration using the syntax <code>#{MyBuild.VARIABLE_NAME}</code> (e.g., passing image tags or commit IDs to CloudFormation parameter overrides).",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-34"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "Blue/Green Deployment with Lambda: Version & Alias Routing",
    "hint": "Shifting invocation traffic between immutable Lambda version snapshots.",
    "back": "Lambda Blue/Green uses <strong>Aliases</strong> (e.g., <code>prod</code>) pointing to two published versions (e.g., <code>version 1</code> and <code>version 2</code>) with <code>routing-config</code> weights. CodeDeploy shifts the weight according to the chosen deployment preference while running <code>BeforeAllowTraffic</code> validation functions.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-35"
  },
  {
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodeBuild Batch Builds: Build Matrix vs. Build Graph",
    "hint": "Parallel parameter combinations vs. dependency DAG execution.",
    "back": "A <strong>Build Matrix</strong> runs multiple parallel builds testing combinations of variables (e.g., 3 OS types &times; 3 Node.js versions = 9 parallel builds). A <strong>Build Graph</strong> defines a directed acyclic graph (DAG) of build tasks with explicit dependencies (e.g., build core before building downstream microservices).",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-36"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "AWS Step Functions in CI/CD: Long-Running Orchestration",
    "hint": "Handling multi-day promotion pipelines with complex human approvals.",
    "back": "Step Functions orchestrates multi-step delivery workflows exceeding CodePipeline limits (e.g., long-running database migrations, soak testing over 72 hours, multi-region coordinated rollouts, and task token wait states with external ticketing systems like Jira/ServiceNow).",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-37"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "ECR Lifecycle Policies: Rule Evaluation Order & Tag Status",
    "hint": "Managing repository storage costs and image pruning automatically.",
    "back": "ECR Lifecycle Policies evaluate rules in priority order (lowest rulePriority first). Rules can filter by <code>tagStatus</code> (<code>tagged</code>, <code>untagged</code>, or <code>any</code>) and retention criteria (<code>imageCountMoreThan</code> or <code>sinceImagePushed</code>). Once an image matches a rule, it is marked for expiration and subsequent rules are ignored.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-38"
  },
  {
    "difficulty": "easy",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "Immutable Infrastructure vs. Mutable In-Place Patching",
    "hint": "Replace whole servers vs. run configuration scripts on living instances.",
    "back": "<strong>Immutable Infrastructure</strong> provisions completely new instances or AMIs with updated code and dependencies, verifies them, and destroys the old ones; eliminates configuration drift and ensures reproducible rollbacks. <strong>Mutable Patching</strong> modifies running instances via SSH or Ansible, risking inconsistent state across fleet nodes.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-39"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CloudFormation Deployment with CodePipeline: CreateChangeSet vs. ExecuteChangeSet",
    "hint": "Separating template diff preview from actual resource provisioning.",
    "back": "Splitting CloudFormation deployments into <code>CreateChangeSet</code> and <code>ExecuteChangeSet</code> actions allows pipeline authors to inspect proposed infrastructure changes, run automated drift and security checks (e.g., cfn-nag or Checkov), or require manual approval before changes are applied.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-40"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "Canary Deployments: Baking Period Purpose & Rollback Window",
    "hint": "Monitoring runtime error rates after initial traffic shift.",
    "back": "The <strong>Baking Period</strong> is a configured pause (e.g., 15\u201360 minutes) after shifting traffic to the canary where the deployment engine monitors CloudWatch error rates, latency, and logs. If any alarm triggers during the bake, the deployment automatically rolls back before wide blast-radius exposure.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-41"
  },
  {
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "ECR Replication: Cross-Region vs. Cross-Account",
    "hint": "Automating container distribution for global multi-region deployments.",
    "back": "ECR registry-level replication automatically copies images pushed to a primary repository to destination repositories in other <strong>AWS Regions</strong> (reducing latency) or other <strong>AWS Accounts</strong> (for staging/production isolation). Replication is asynchronous and maintains repository tags.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-42"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodeBuild Custom VPC Connectivity: Private Subnet vs. NAT Gateway",
    "hint": "Accessing private RDS/internal APIs while pulling public packages.",
    "back": "When CodeBuild runs inside a custom VPC to access private resources (RDS, Redis, on-prem via Direct Connect), build containers cannot access public endpoints directly. You must attach CodeBuild to <strong>private subnets</strong> routed through a <strong>NAT Gateway</strong> or configured with <strong>VPC Endpoints</strong>.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-43"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "Blue/Green ECS Deployment: Termination Wait Time",
    "hint": "How long the original blue task set remains dormant before destruction.",
    "back": "In CodeDeploy for ECS, the <strong>Termination Wait Time</strong> specifies how long the original (blue) task set remains running in the background after 100% traffic is shifted to green. This allows immediate, zero-delay rollback if latent defects emerge before the blue tasks are terminated.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-44"
  },
  {
    "difficulty": "easy",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "AWS CodeDeploy Agent: Communication Model & Permissions",
    "hint": "Outbound HTTPS polling vs. inbound SSH listeners.",
    "back": "The CodeDeploy Agent installed on EC2 instances polls the CodeDeploy service endpoint via outbound HTTPS (port 443); it requires <strong>zero inbound open ports</strong>. The EC2 instance profile must include the <code>AWSCodeDeployRole</code> or permissions to poll S3 and CodeDeploy endpoints.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-45"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "Continuous Integration vs. Continuous Delivery vs. Continuous Deployment",
    "hint": "Merge & test vs. automatically ready to deploy vs. automatic production push.",
    "back": "<strong>Continuous Integration (CI)</strong> automatically builds and tests code commits on every push. <strong>Continuous Delivery (CD)</strong> ensures code is always in a deployable state and automatically deployed to staging, requiring manual approval for production. <strong>Continuous Deployment</strong> deploys every passing commit to production automatically with zero human intervention.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-46"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "AWS CodePipeline Execution Modes: QUEUED vs. SUPERSEDED vs. PARALLEL",
    "hint": "Handling concurrent commits triggering a busy deployment pipeline.",
    "back": "<strong>SUPERSEDED</strong> (default) cancels older in-flight executions at stage boundaries in favor of the latest commit. <strong>QUEUED</strong> processes executions in strict FIFO order one after another without cancelling. <strong>PARALLEL</strong> allows multiple executions to run through the stages concurrently without waiting.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-47"
  },
  {
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "Automated Smoke Tests vs. Unit Tests vs. Integration Tests in CI/CD",
    "hint": "Code-level logic vs. service boundaries vs. deployed health checks.",
    "back": "<strong>Unit Tests</strong> run in CodeBuild to verify isolated functions without external dependencies. <strong>Integration Tests</strong> verify interaction between microservices and databases in a test environment. <strong>Smoke Tests</strong> run immediately post-deployment to verify that critical user pathways and endpoints respond correctly.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-48"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodeDeploy BeforeInstall vs. AfterInstall Hooks",
    "hint": "Pre-cleanup and dependency checks vs. configuration file preparation.",
    "back": "<code>BeforeInstall</code> runs before new files are copied; used to decrypt secrets, backup configurations, or terminate legacy processes. <code>AfterInstall</code> runs after files are copied to instance directories; used to set file permissions, compile assets, or run database migration scripts.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-49"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "AWS Fault Injection Simulator (FIS) in CI/CD Pipelines",
    "hint": "Automating chaos engineering experiments as deployment verification gates.",
    "back": "AWS FIS integrates into deployment pipelines to inject controlled faults (e.g., terminating instances, throttling network, simulating AZ outages) into staging environments. Pipelines evaluate CloudWatch alarms and stop execution if resilient failover does not occur within target SLAs.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-50"
  }
];

export default AWS_DOP_FLASHCARDS_2;
