export const AWS_SOA_FLASHCARDS_12 = [
  {
    id: 'aws-soa-fc-276',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Elastic Beanstalk deployment policies: which ones keep full capacity during a deployment?',
    hint: 'Two of the five never take serving capacity away.',
    back: '<strong>All at once</strong>: fastest, causes downtime. <strong>Rolling</strong>: batches go out of service, capacity dips. <strong>Rolling with additional batch</strong>: launches an extra batch first, so <strong>full capacity</strong> at the cost of one batch. <strong>Immutable</strong>: a full new set of instances in a temporary Auto Scaling group, <strong>full capacity</strong>, safest rollback, highest temporary cost. <strong>Traffic splitting</strong>: immutable-style canary that sends a share of traffic to the new instances first.',
    tags: ['Elastic Beanstalk', 'Deployment policies']
  },
  {
    id: 'aws-soa-fc-277',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'How does Elastic Beanstalk traffic-splitting deployment work?',
    hint: 'Canary testing built into the environment.',
    back: 'Beanstalk launches a full set of new instances in a <strong>temporary Auto Scaling group</strong>, then the load balancer sends a configured <strong>percentage of client traffic</strong> to them for an <strong>evaluation time</strong>. If they stay healthy, all traffic moves over and the old instances are terminated; if not, traffic returns to the old instances. It requires an <strong>Application Load Balancer</strong> environment and costs a full second fleet during the test.',
    tags: ['Elastic Beanstalk', 'Canary']
  },
  {
    id: 'aws-soa-fc-278',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'CodeDeploy compute platforms: which deployment types does each support?',
    hint: 'Only one platform supports in-place.',
    back: '<strong>EC2/On-premises</strong>: <strong>in-place</strong> (update running instances) or <strong>blue/green</strong> (new instances, EC2 only, not on-premises). <strong>AWS Lambda</strong>: blue/green only, shifting alias traffic between versions as canary, linear or all at once. <strong>Amazon ECS</strong>: blue/green only, shifting load balancer traffic from the original task set to a replacement task set, also canary, linear or all at once.',
    tags: ['CodeDeploy', 'Deployment types']
  },
  {
    id: 'aws-soa-fc-279',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'In what order do the EC2 in-place AppSpec lifecycle events run, and which can you script?',
    hint: 'Stop, fetch, install, start, check.',
    back: '<strong>ApplicationStop</strong> &rarr; DownloadBundle &rarr; <strong>BeforeInstall</strong> &rarr; Install &rarr; <strong>AfterInstall</strong> &rarr; <strong>ApplicationStart</strong> &rarr; <strong>ValidateService</strong>. DownloadBundle and Install are performed by the agent and cannot run scripts. With a load balancer, BeforeBlockTraffic, BlockTraffic and AfterBlockTraffic run first and BeforeAllowTraffic, AllowTraffic and AfterAllowTraffic run last. Note that ApplicationStop runs the script from the <strong>previous</strong> revision.',
    tags: ['CodeDeploy', 'AppSpec', 'Lifecycle hooks']
  },
  {
    id: 'aws-soa-fc-280',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'CodeDeploy EC2 deployment configurations: what do OneAtATime, HalfAtATime and AllAtOnce guarantee?',
    hint: 'They are defined by minimum healthy hosts.',
    back: 'Each configuration sets a <strong>minimum healthy hosts</strong> value. <strong>OneAtATime</strong>: deploys to one instance at a time; slowest, least impact. <strong>HalfAtATime</strong>: up to half the instances at once (50 percent must stay healthy). <strong>AllAtOnce</strong>: every instance at once; the deployment succeeds if at least one instance succeeds. Custom configurations set minimum healthy hosts as a count or percentage, and zonal configurations deploy one Availability Zone at a time.',
    tags: ['CodeDeploy', 'Deployment configurations']
  },
  {
    id: 'aws-soa-fc-281',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'CodeDeploy EC2 blue/green: what happens to the original instances after traffic moves?',
    hint: 'You choose, within a limit.',
    back: 'You choose to <strong>keep</strong> the original instances running or <strong>terminate</strong> them after a wait of up to <strong>2 days</strong>. Keeping them for a while gives a fast manual fallback by re-registering them with the load balancer. The replacement fleet is created by <strong>copying the Auto Scaling group</strong> or by using instances you tag yourself. Traffic can be rerouted immediately or only after you choose to continue.',
    tags: ['CodeDeploy', 'Blue/green', 'EC2']
  },
  {
    id: 'aws-soa-fc-282',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Which lifecycle hooks can a CodeDeploy Lambda deployment run, and what are they for?',
    hint: 'There are only two.',
    back: '<strong>BeforeAllowTraffic</strong>: runs before any traffic shifts to the new version, for checks such as warm-up or a smoke test invoked directly on the new version. <strong>AfterAllowTraffic</strong>: runs after all traffic has shifted, for end-to-end validation. Each hook is a Lambda function that must call <code>PutLifecycleEventHookExecutionStatus</code> with Succeeded or Failed; a failure stops the deployment and rolls traffic back to the old version.',
    tags: ['CodeDeploy', 'Lambda', 'Lifecycle hooks']
  },
  {
    id: 'aws-soa-fc-283',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Amazon ECS deployment controllers: what are the options?',
    hint: 'Who decides how tasks are replaced?',
    back: '<strong>ECS</strong> (default): rolling updates governed by minimum healthy percent and maximum percent, with the <strong>deployment circuit breaker</strong> for automatic rollback; newer versions of this controller also offer built-in <strong>blue/green</strong> strategies with bake time and lifecycle hooks. <strong>CODE_DEPLOY</strong>: blue/green through CodeDeploy with two target groups, optional test listener and canary or linear traffic shifting. <strong>EXTERNAL</strong>: a third-party controller manages task sets through the API.',
    tags: ['Amazon ECS', 'Deployment controllers']
  },
  {
    id: 'aws-soa-fc-284',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Rolling vs blue/green vs canary: which strategy fits which requirement?',
    hint: 'Cost, rollback speed and blast radius.',
    back: '<strong>Rolling</strong>: updates existing capacity in batches; cheapest, but rollback means another rolling deployment and versions mix during the rollout. <strong>Blue/green</strong>: a full parallel environment and a cutover; fastest rollback (switch back), doubles cost temporarily. <strong>Canary</strong>: a small share of traffic first, then the rest; limits blast radius while real traffic validates the release. <strong>All at once</strong>: only when brief downtime is acceptable.',
    tags: ['Deployment strategies']
  },
  {
    id: 'aws-soa-fc-285',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'How do Lambda weighted aliases split traffic, and what are the limits?',
    hint: 'One alias, two versions.',
    back: 'An alias can point to a primary version plus <strong>one additional version</strong> with a routing weight (for example 90/10). Invocations through the alias are split randomly by weight; the <code>$LATEST</code> version cannot be one of the two, and both versions must share the same execution role and dead-letter setup. CodeDeploy automates this by moving weights over time and rolling back on alarms, rather than you editing weights by hand.',
    tags: ['Lambda', 'Aliases', 'Canary']
  },
  {
    id: 'aws-soa-fc-286',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'CloudFormation CreationPolicy vs WaitCondition: when do you use each?',
    hint: 'One is attached to the resource itself.',
    back: '<strong>CreationPolicy</strong>: an attribute on an EC2 instance or Auto Scaling group that makes CloudFormation wait for a number of <code>cfn-signal</code> success signals before marking the resource complete; preferred for instance bootstrapping. <strong>WaitCondition</strong> with a <strong>WaitConditionHandle</strong>: a separate resource that waits for signals sent to a presigned S3 URL, useful for coordinating with something outside the stack. Both fail the resource if the timeout passes without the required signals.',
    tags: ['CloudFormation', 'cfn-signal']
  },
  {
    id: 'aws-soa-fc-287',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'What is the catch with DNS-based blue/green cutovers?',
    hint: 'Clients remember answers.',
    back: 'Route 53 weighted records change which endpoint <strong>new</strong> resolutions receive, but resolvers and clients cache answers for the record\'s <strong>TTL</strong>, and some clients ignore TTL entirely, so traffic shifts gradually and a rollback is not instant. Lower the TTL well before the cutover. For immediate, precise shifting within one Region, use <strong>ALB weighted target groups</strong> instead, which the load balancer applies per request.',
    tags: ['Route 53', 'Blue/green', 'DNS']
  },
  {
    id: 'aws-soa-fc-288',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'How do ALB weighted target groups support blue/green and canary releases?',
    hint: 'A listener rule can forward to more than one place.',
    back: 'A listener rule\'s <strong>forward</strong> action can list up to <strong>five target groups with weights</strong>, such as blue 90 and green 10. The ALB applies the split <strong>per request</strong>, so changing weights takes effect immediately without DNS caching. Enable <strong>target group stickiness</strong> if a user must stay on one version for the session. Rollback is setting green back to 0.',
    tags: ['Elastic Load Balancing', 'Blue/green', 'Canary']
  },
  {
    id: 'aws-soa-fc-289',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'What settings make up an AWS AppConfig deployment strategy?',
    hint: 'Duration, shape, and a waiting period.',
    back: '<strong>Deployment duration</strong>: total time to reach all targets. <strong>Growth type</strong>: <strong>linear</strong> (equal steps) or <strong>exponential</strong>. <strong>Growth factor</strong>: the percentage of targets added per step. <strong>Final bake time</strong>: how long AppConfig keeps watching CloudWatch alarm monitors after reaching 100 percent; an alarm during rollout or bake time triggers automatic rollback. Predefined strategies include AllAtOnce, Linear50PercentEvery30Seconds and Canary10Percent20Minutes.',
    tags: ['AppConfig', 'Deployment strategy']
  },
  {
    id: 'aws-soa-fc-290',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'What does each step of the core Terraform workflow do?',
    hint: 'init, plan, apply, destroy.',
    back: '<code>terraform init</code>: downloads providers and modules and configures the backend. <code>terraform plan</code>: compares configuration with state and real resources and shows proposed creates, updates and replacements. <code>terraform apply</code>: executes a plan and records the result in state. <code>terraform destroy</code>: removes everything the configuration manages. <code>validate</code> and <code>fmt</code> check syntax and formatting without contacting AWS.',
    tags: ['Terraform', 'Workflow']
  },
  {
    id: 'aws-soa-fc-291',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Why does Terraform need a state file, and where should a team keep it?',
    hint: 'Terraform maps code to real resource IDs.',
    back: 'State maps each resource address to the <strong>real resource ID</strong> and records attributes, so Terraform knows what it manages and can compute changes. Teams keep it in a <strong>remote backend</strong>, typically <strong>S3</strong> with <strong>state locking</strong> (an S3 lock file in current Terraform; DynamoDB tables in older setups) so one run changes it at a time. State can contain secrets, so encrypt the bucket, enable versioning and restrict access.',
    tags: ['Terraform', 'State']
  },
  {
    id: 'aws-soa-fc-292',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Terraform workspaces vs separate configurations per environment: which do you use for dev, test and prod?',
    hint: 'Workspaces share everything except state.',
    back: '<strong>CLI workspaces</strong> give one configuration several state files; good for short-lived copies of the same thing, but every workspace shares the same backend, credentials and code version, so a mistake in prod is one <code>workspace select</code> away. For long-lived environments, especially in <strong>separate AWS accounts</strong>, prefer <strong>separate root configurations or directories</strong> with their own backend and role, reusing shared <strong>modules</strong>.',
    tags: ['Terraform', 'Workspaces', 'Environments']
  },
  {
    id: 'aws-soa-fc-293',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'How do you make Terraform runs reproducible across engineers and CI?',
    hint: 'Pin what gets downloaded.',
    back: 'Pin the Terraform version with <code>required_version</code>, provider versions with <code>required_providers</code> constraints, and module versions in each module source. Commit <strong>.terraform.lock.hcl</strong>, which records the exact provider versions and checksums selected by <code>init</code>, so every run uses the same builds. Upgrade deliberately with <code>terraform init -upgrade</code> in a reviewed change.',
    tags: ['Terraform', 'Versioning']
  },
  {
    id: 'aws-soa-fc-294',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Terraform import vs moved vs state rm: which fixes which problem?',
    hint: 'Adopt, rename, forget.',
    back: '<strong>import</strong> (block or command): <strong>adopt</strong> an existing, unmanaged resource into state at an address. <strong>moved</strong> block (or <code>state mv</code>): the resource is already managed but its <strong>address changed</strong> (renamed, moved into a module), so remap it instead of destroying and recreating. <strong>state rm</strong>: <strong>forget</strong> a resource without destroying it, for example before handing it to another configuration. The newer <code>removed</code> block does the same declaratively.',
    tags: ['Terraform', 'State management']
  },
  {
    id: 'aws-soa-fc-295',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Terraform vs CloudFormation: where does state live and how is drift handled?',
    hint: 'One tool keeps a file, the other is a service.',
    back: '<strong>CloudFormation</strong>: state is held by the service as a stack; no file to secure or lock, built-in rollback, drift detection per stack, and StackSets for multi-account. <strong>Terraform</strong>: state is a file you store and lock yourself; <code>plan</code> refreshes and shows drift on every run; no automatic rollback on failure, so a failed apply leaves partial changes to fix forward. Both are declarative and can coexist, but a resource should be owned by only one tool.',
    tags: ['Terraform', 'CloudFormation']
  },
  {
    id: 'aws-soa-fc-296',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Trunk-based development vs long-lived branches for infrastructure code?',
    hint: 'Short branches merge often.',
    back: '<strong>Trunk-based</strong>: short-lived feature branches merged to <code>main</code> through pull requests, with environments promoted by the pipeline; less drift between branches and a single source of truth. <strong>GitFlow-style long-lived branches</strong> (develop, release, main) suit scheduled releases but let environments diverge and make infrastructure merges painful. Either way, protect <code>main</code> with required reviews and status checks.',
    tags: ['Git', 'Branching']
  },
  {
    id: 'aws-soa-fc-297',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'What should an infrastructure pull request show reviewers before merge?',
    hint: 'Evidence, not just diffs of code.',
    back: 'Automated checks posted to the PR: formatting and validation (<code>terraform fmt -check</code>, <code>validate</code>, or <code>cfn-lint</code>), static policy scans such as tflint, Checkov or CloudFormation Guard, and the <strong>plan or change set output</strong> so reviewers see every create, update and <strong>replacement</strong>. Branch protection should require these checks and an approval before merge, and the pipeline should apply exactly the reviewed plan.',
    tags: ['Git', 'Code review', 'IaC']
  },
  {
    id: 'aws-soa-fc-298',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'CodePipeline V1 vs V2 pipeline type: what changes?',
    hint: 'Triggers and pricing.',
    back: '<strong>V2</strong> adds <strong>trigger filters</strong> on Git push and pull request events (branches, file paths, tags), pipeline-level <strong>variables</strong>, and execution modes (queued, superseded, parallel); it is billed per <strong>action execution minute</strong>. <strong>V1</strong> starts on any change to the configured branch and is billed per active pipeline per month. Git sources connect through <strong>CodeConnections</strong> (formerly CodeStar Connections).',
    tags: ['CodePipeline', 'Git']
  },
  {
    id: 'aws-soa-fc-299',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'How should Terraform running in CodeBuild authenticate to AWS?',
    hint: 'No keys in the buildspec.',
    back: 'Give the CodeBuild project a <strong>service role</strong> with the permissions Terraform needs; the AWS provider picks up its temporary credentials automatically. For other accounts, use the provider\'s <code>assume_role</code> block to assume a <strong>deploy role</strong> in each target account whose trust policy allows the CodeBuild role. Keep state access in a separate backend role or policy. Never store access keys in environment variables or the repository.',
    tags: ['Terraform', 'CodeBuild', 'IAM']
  },
  {
    id: 'aws-soa-fc-300',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'In what order does the Terraform AWS provider look for credentials?',
    hint: 'Explicit settings first, instance roles last.',
    back: 'Roughly: explicit provider arguments, then <strong>environment variables</strong> (<code>AWS_ACCESS_KEY_ID</code>, <code>AWS_PROFILE</code>, web identity token variables), then the <strong>shared config and credentials files</strong> (profiles, SSO, credential_process), then <strong>container credentials</strong> (ECS task or CodeBuild role) and finally the <strong>EC2 instance profile</strong>. An <code>assume_role</code> block then uses those base credentials to assume another role. Stray environment variables are a common reason Terraform hits the wrong account.',
    tags: ['Terraform', 'Credentials']
  }
];

export default AWS_SOA_FLASHCARDS_12;
