export const AWS_SOA_FLASHCARDS_10 = [
  {
    id: 'aws-soa-fc-226',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'What are the parts of an EC2 Image Builder image pipeline?',
    hint: 'What to build, where to build it, where to send it, and when.',
    back: 'An <strong>image recipe</strong> (or container recipe) names the parent image and the ordered <strong>build and test components</strong>. The <strong>infrastructure configuration</strong> sets the instance type, subnet, security groups, instance profile, log bucket and SNS topic for build and test instances. The <strong>distribution configuration</strong> sets output Regions, AMI names, launch permissions or ECR targets. The <strong>pipeline</strong> ties them together with a schedule or manual runs.',
    tags: ['EC2 Image Builder']
  },
  {
    id: 'aws-soa-fc-227',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Image Builder build components vs test components: when does each run?',
    hint: 'Two separate instances.',
    back: '<strong>Build components</strong> run on the build instance to customize it (install packages, apply hardening, configure agents); Image Builder then creates the image from it. <strong>Test components</strong> run on a separate <strong>test instance launched from the new image</strong> to validate it, for example by starting the service or running compliance checks. If any test fails, the image is marked failed and is not distributed. Components are YAML documents run by the AWS Task Orchestrator and Executor.',
    tags: ['EC2 Image Builder', 'Components']
  },
  {
    id: 'aws-soa-fc-228',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'How do Image Builder lifecycle policies manage old images?',
    hint: 'Three actions, driven by age or count.',
    back: 'A lifecycle policy selects images by recipe or tag and applies actions in stages: <strong>deprecate</strong> the AMI, then <strong>disable</strong> it, then <strong>delete</strong> it together with its snapshots (or delete container images), based on <strong>age</strong> or on keeping a <strong>count</strong> of the newest images. Exclusion rules can protect images that are still in use, for example those referenced by launch templates or shared. It replaces custom clean-up scripts for AMI sprawl.',
    tags: ['EC2 Image Builder', 'Lifecycle policies']
  },
  {
    id: 'aws-soa-fc-229',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'EBS-backed AMI vs instance store-backed AMI: what are the operational differences?',
    hint: 'Can you stop it, and how fast does it boot?',
    back: '<strong>EBS-backed</strong>: the root device is an EBS volume created from a snapshot; instances boot quickly, can be <strong>stopped and started</strong>, the root volume can persist after termination, and creating an AMI is a single API call. <strong>Instance store-backed</strong>: the root device is copied from S3 to ephemeral storage at launch, so boot is slower, instances cannot be stopped (only rebooted or terminated), and root data is lost on termination. Nearly all current AMIs are EBS-backed.',
    tags: ['AMI', 'EBS']
  },
  {
    id: 'aws-soa-fc-230',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Creating an AMI from a running instance: what does the no-reboot option trade away?',
    hint: 'Speed versus file system consistency.',
    back: 'By default, CreateImage <strong>shuts down and reboots</strong> the instance so file systems are flushed and the snapshots are consistent. With <strong>no reboot</strong>, the instance keeps running, but data in memory or open files may not be captured, so the image is only <strong>crash-consistent</strong> and applications may need recovery on first boot. Use no reboot only when downtime is impossible and the application can tolerate it.',
    tags: ['AMI', 'Consistency']
  },
  {
    id: 'aws-soa-fc-231',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'You deregistered an old AMI, but storage costs did not fall. Why?',
    hint: 'The image and its data are separate.',
    back: 'Deregistering an EBS-backed AMI removes the image registration only; the <strong>EBS snapshots</strong> that back it remain and keep incurring charges. Delete the snapshots separately after deregistering (they cannot be deleted while the AMI is still registered), or use an Image Builder or Data Lifecycle Manager policy that removes both. Instances already launched from the AMI are not affected.',
    tags: ['AMI', 'Snapshots', 'Cost']
  },
  {
    id: 'aws-soa-fc-232',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'AMI deprecation vs disabling an AMI: what can still happen in each case?',
    hint: 'One hides, the other blocks.',
    back: '<strong>Deprecated</strong>: after the deprecation time the AMI disappears from DescribeImages results for users who do not own it (unless they ask to include deprecated images), but <strong>it can still be launched by ID</strong>, so existing launch templates keep working. <strong>Disabled</strong>: the AMI cannot be used for <strong>new launches</strong> and is hidden from listings, while existing instances keep running; the owner can re-enable it. Disable before deleting to find out who still depends on an image.',
    tags: ['AMI', 'Deprecation']
  },
  {
    id: 'aws-soa-fc-233',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'How are ECR lifecycle policy rules evaluated?',
    hint: 'Priority order, and one rule must come last.',
    back: 'Rules are evaluated in ascending <strong>rulePriority</strong> order. Each rule selects images by tag status (tagged with prefixes or patterns, untagged, or any) and expires them by <strong>imageCountMoreThan</strong> or <strong>sinceImagePushed</strong>. An image is expired by at most one rule, and an image kept by a higher-priority rule is not expired by a later one. A rule with tagStatus <strong>any</strong> must have the highest priority number, so it is evaluated last. Preview a policy before applying it.',
    tags: ['ECR', 'Lifecycle policies']
  },
  {
    id: 'aws-soa-fc-234',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'What does an ECR pull through cache rule do?',
    hint: 'A private mirror that fills itself.',
    back: 'A pull through cache rule maps a repository prefix in your private registry to an <strong>upstream registry</strong> such as Docker Hub, Quay, GitHub Container Registry, Amazon ECR Public or another ECR registry. The first pull through the prefix fetches the image and stores it in your registry; later pulls are served locally and the cache is refreshed periodically. It avoids upstream rate limits and outages and lets you apply your own scanning and lifecycle rules.',
    tags: ['ECR', 'Pull through cache']
  },
  {
    id: 'aws-soa-fc-235',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Image tags vs image digests: how do you make deployments reproducible?',
    hint: 'One is a label, one is a fingerprint.',
    back: 'A <strong>tag</strong> such as v1.4 or latest is a movable label; by default anyone with push rights can point it at a different image. A <strong>digest</strong> (sha256:...) identifies exact image content and never changes. Make deployments reproducible by referencing digests, or by enabling <strong>tag immutability</strong> on the repository so a pushed tag can never be overwritten.',
    tags: ['ECR', 'Tag immutability']
  },
  {
    id: 'aws-soa-fc-236',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Which sections can a CloudFormation template contain, and which one is required?',
    hint: 'Only one section is mandatory.',
    back: '<strong>Resources</strong> is the only required section. Optional sections: <strong>AWSTemplateFormatVersion</strong>, <strong>Description</strong>, <strong>Metadata</strong>, <strong>Parameters</strong> (inputs at deploy time), <strong>Rules</strong> (validate parameter combinations), <strong>Mappings</strong> (static lookup tables), <strong>Conditions</strong> (decide whether resources or properties are created), <strong>Transform</strong> (macros such as AWS::Serverless) and <strong>Outputs</strong> (values to display or export).',
    tags: ['CloudFormation', 'Templates']
  },
  {
    id: 'aws-soa-fc-237',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'CloudFormation Ref vs Fn::GetAtt vs Fn::Sub: what does each return?',
    hint: 'Default identifier, named attribute, string building.',
    back: '<strong>Ref</strong> returns a parameter\'s value or a resource\'s default identifier, which varies by type (an instance ID, a bucket name, a queue URL). <strong>Fn::GetAtt</strong> returns a named attribute of a resource, such as an ARN, a DNS name or an endpoint address. <strong>Fn::Sub</strong> builds a string by substituting <code>${Param}</code>, <code>${Resource.Attribute}</code> and pseudo parameters such as <code>${AWS::Region}</code>. Check each resource type\'s documentation for its Ref and attribute values.',
    tags: ['CloudFormation', 'Intrinsic functions']
  },
  {
    id: 'aws-soa-fc-238',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Nested stacks vs cross-stack references: when do you use each?',
    hint: 'One lifecycle or separate lifecycles?',
    back: '<strong>Nested stacks</strong> (AWS::CloudFormation::Stack) reuse template components inside a parent that deploys, updates and deletes them together; use them to break up a large template that one team owns. <strong>Cross-stack references</strong> (Outputs with Export, read by Fn::ImportValue) connect independently managed stacks, such as a network stack and many application stacks, in the same account and Region. Exports cannot be changed or deleted while imported.',
    tags: ['CloudFormation', 'Nested stacks', 'Exports']
  },
  {
    id: 'aws-soa-fc-239',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'What are the CloudFormation DeletionPolicy options, and what is the default?',
    hint: 'The default is not the same for every resource type.',
    back: '<strong>Delete</strong> removes the resource; it is the default for most types. <strong>Retain</strong> keeps the resource, now unmanaged, when it leaves the stack. <strong>RetainExceptOnCreate</strong> retains except when the resource was created in a stack operation that rolled back. <strong>Snapshot</strong> takes a final snapshot before deletion, for types such as EBS volumes, RDS, ElastiCache, Neptune and Redshift. The default for <strong>AWS::RDS::DBCluster</strong>, and for DB instances without a DBClusterIdentifier, is <strong>Snapshot</strong>. UpdateReplacePolicy offers the same choices for replacements.',
    tags: ['CloudFormation', 'DeletionPolicy']
  },
  {
    id: 'aws-soa-fc-240',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'CloudFormation dynamic references: ssm vs ssm-secure vs secretsmanager?',
    hint: 'Plain parameters, SecureString parameters, secrets.',
    back: '<code>{{resolve:ssm:name}}</code> reads a String or StringList Parameter Store value (optionally a version) and works in any property. <code>{{resolve:ssm-secure:name}}</code> reads a SecureString, but only in <strong>supported properties</strong> such as some password fields. <code>{{resolve:secretsmanager:secret:SecretString:key}}</code> reads a Secrets Manager secret, optionally by version stage, in any property. Values are resolved at deploy time and are not shown for secure types; CloudFormation does not detect later changes until the next stack update.',
    tags: ['CloudFormation', 'Dynamic references']
  },
  {
    id: 'aws-soa-fc-241',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'What do the CloudFormation helper scripts cfn-init, cfn-signal, cfn-hup and cfn-get-metadata do?',
    hint: 'Configure, report, watch, read.',
    back: '<strong>cfn-init</strong> reads AWS::CloudFormation::Init metadata and installs packages, writes files, runs commands and starts services. <strong>cfn-signal</strong> sends success or failure to a CreationPolicy, UpdatePolicy or wait condition. <strong>cfn-hup</strong> is a daemon that detects metadata changes after stack updates and runs hooks, usually cfn-init again. <strong>cfn-get-metadata</strong> retrieves a resource\'s metadata. They come preinstalled on Amazon Linux AMIs.',
    tags: ['CloudFormation', 'Helper scripts']
  },
  {
    id: 'aws-soa-fc-242',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'How do you deploy one CloudFormation template to dev, test and prod with different sizes?',
    hint: 'Inputs, lookup tables and switches.',
    back: 'Add an <strong>Environment parameter</strong> with AllowedValues. Use a <strong>Mapping</strong> keyed on it for per-environment values such as instance type or desired capacity, read with Fn::FindInMap. Use <strong>Conditions</strong> (for example IsProd) to create resources only in some environments, such as Multi-AZ or alarms, and Fn::If for single properties. Keep environment-specific values in parameter files or Parameter Store rather than in separate copies of the template.',
    tags: ['CloudFormation', 'Parameters', 'Conditions']
  },
  {
    id: 'aws-soa-fc-243',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'What are CloudFormation transforms, and which AWS-provided ones matter?',
    hint: 'Templates that rewrite themselves before deployment.',
    back: 'A <strong>transform</strong> (macro) processes the template before CloudFormation creates the change set. <strong>AWS::Serverless</strong> expands AWS SAM resources such as AWS::Serverless::Function into standard resources. <strong>AWS::LanguageExtensions</strong> adds functions such as Fn::ForEach, Fn::Length and Fn::ToJsonString. <strong>AWS::Include</strong> inserts template snippets from S3. Stacks using macros must be deployed through a change set and need the CAPABILITY_AUTO_EXPAND acknowledgement.',
    tags: ['CloudFormation', 'Transforms', 'AWS SAM']
  },
  {
    id: 'aws-soa-fc-244',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'What are CloudFormation Hooks used for?',
    hint: 'Checks that run before resources are provisioned.',
    back: 'Hooks run your validation logic, written as Guard rules, Lambda functions or Hook code, <strong>before</strong> CloudFormation creates, updates or deletes resources or stacks, and before change sets are applied. A hook in <strong>FAIL</strong> mode blocks a non-compliant operation, and one in <strong>WARN</strong> mode lets it continue with a warning. Use them for proactive controls, such as blocking unencrypted buckets or public security groups, instead of detecting problems after deployment.',
    tags: ['CloudFormation', 'Hooks', 'Governance']
  },
  {
    id: 'aws-soa-fc-245',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'AWS CDK construct levels L1, L2 and L3: what is the difference?',
    hint: 'Raw, curated, patterns.',
    back: '<strong>L1</strong> (Cfn* classes) map one-to-one to CloudFormation resource types with every property exposed and no defaults. <strong>L2</strong> constructs (such as s3.Bucket) wrap a resource with sensible defaults and helper methods like <code>grantRead</code>. <strong>L3</strong> constructs, or patterns, combine several resources for a common architecture, such as an Application Load Balanced Fargate service. Drop to L1 through <code>node.defaultChild</code> when an L2 does not expose a property.',
    tags: ['AWS CDK', 'Constructs']
  },
  {
    id: 'aws-soa-fc-246',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Which AWS CDK CLI commands cover the normal workflow?',
    hint: 'Prepare the account, render, compare, ship, remove.',
    back: '<code>cdk bootstrap</code> prepares an account and Region with the toolkit bucket, repository and roles. <code>cdk synth</code> renders the app into CloudFormation templates in cdk.out. <code>cdk diff</code> compares them with what is deployed. <code>cdk deploy</code> deploys stacks through CloudFormation. <code>cdk destroy</code> deletes stacks. <code>cdk ls</code> lists the stacks in the app.',
    tags: ['AWS CDK', 'CLI']
  },
  {
    id: 'aws-soa-fc-247',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Why can renaming a construct in a CDK app replace a production resource?',
    hint: 'Where do logical IDs come from?',
    back: 'CDK generates each resource\'s CloudFormation <strong>logical ID</strong> from its <strong>construct path</strong> (the IDs of the construct and its parents) plus a hash. Renaming a construct or moving it under a different parent changes the logical ID, and CloudFormation treats that as deleting the old resource and creating a new one. Always run <code>cdk diff</code> before deploying refactors, and keep IDs stable or pin them with <code>overrideLogicalId</code>.',
    tags: ['AWS CDK', 'Logical IDs']
  },
  {
    id: 'aws-soa-fc-248',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'What does a CDK removal policy control, and what are the defaults for stateful resources?',
    hint: 'What happens when the resource leaves the stack.',
    back: 'The removal policy becomes the resource\'s CloudFormation DeletionPolicy and UpdateReplacePolicy. Stateful L2 constructs such as <strong>S3 buckets</strong> and <strong>DynamoDB tables</strong> default to <strong>RETAIN</strong>, so <code>cdk destroy</code> leaves them behind; set <code>RemovalPolicy.DESTROY</code> (plus <code>autoDeleteObjects</code> for buckets) only for disposable environments, or <code>SNAPSHOT</code> where supported, such as RDS.',
    tags: ['AWS CDK', 'Removal policy']
  },
  {
    id: 'aws-soa-fc-249',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Environment-agnostic vs environment-specific CDK stacks: what changes?',
    hint: 'Can the app look things up in your account?',
    back: 'A stack with no <code>env</code> is <strong>environment-agnostic</strong>: it synthesizes one template deployable anywhere, but it cannot use lookups such as <code>Vpc.fromLookup</code>, and values like the Region or Availability Zones are resolved as tokens at deploy time. Setting <code>env</code> with an account and Region makes it <strong>environment-specific</strong>: lookups work, and their results are cached in <code>cdk.context.json</code>, which should be committed so synthesis stays repeatable.',
    tags: ['AWS CDK', 'Environments', 'Context']
  },
  {
    id: 'aws-soa-fc-250',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'What is cdk deploy --hotswap, and why keep it out of production?',
    hint: 'It skips the service that normally applies changes.',
    back: 'Hotswap deployments update supported resources, such as Lambda function code, ECS task images and Step Functions definitions, <strong>directly through their service APIs</strong> instead of through CloudFormation, so development iterations take seconds. Because CloudFormation is bypassed, the stack <strong>drifts</strong> from its template and no rollback protection applies. <code>cdk watch</code> uses hotswap by default. Use them only in development stacks.',
    tags: ['AWS CDK', 'Hotswap']
  }
];

export default AWS_SOA_FLASHCARDS_10;
