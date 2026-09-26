export const AWS_SOA_FLASHCARDS_6 = [
  {
    id: 'aws-soa-fc-126',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Target tracking, step scaling or simple scaling: how do you choose an EC2 Auto Scaling dynamic policy?',
    hint: 'Who owns the alarms, and does the policy wait between actions?',
    back: '<strong>Target tracking</strong>: you name a metric and a target value; Auto Scaling creates and tunes the alarms itself. The default choice for metrics that move in proportion to capacity (CPU, request count per target). <strong>Step scaling</strong>: you own the alarm and define several adjustments sized to how far the breach goes; useful when the response must grow with the size of the breach. <strong>Simple scaling</strong>: one adjustment per alarm, then it waits out the cooldown before acting again; legacy, and slow to respond to sustained change.',
    tags: ['EC2 Auto Scaling', 'Scaling policies']
  },
  {
    id: 'aws-soa-fc-127',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'An Auto Scaling group has two target tracking policies, one on CPU and one on request count. How do they combine?',
    hint: 'Scaling out and scaling in are treated differently.',
    back: 'Auto Scaling scales <strong>out</strong> when <strong>any</strong> policy calls for more capacity and uses the policy that gives the largest capacity. It scales <strong>in</strong> only when <strong>all</strong> target tracking policies (with scale-in enabled) agree that capacity can be removed. This biases the group toward availability. Target tracking alarms must not be edited by hand; change the policy instead, or Auto Scaling may overwrite your edits.',
    tags: ['EC2 Auto Scaling', 'Target tracking']
  },
  {
    id: 'aws-soa-fc-128',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What does EC2 Auto Scaling predictive scaling need, and how can you trial it safely?',
    hint: 'Think history, forecast horizon and a mode that changes nothing.',
    back: 'Predictive scaling needs at least <strong>24 hours</strong> of metric history (more gives better forecasts) and suits <strong>cyclical</strong> load such as daily or weekly patterns. It forecasts capacity for the next 48 hours and refreshes the forecast every few hours. Start in <strong>forecast only</strong> mode to compare forecasts with real load, then switch to <strong>forecast and scale</strong>. Keep a target tracking policy alongside it for demand the forecast misses. It cannot help with irregular spikes.',
    tags: ['EC2 Auto Scaling', 'Predictive scaling']
  },
  {
    id: 'aws-soa-fc-129',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'EC2 Auto Scaling warm pools: what do the Stopped, Running and Hibernated pool states trade off?',
    hint: 'Speed of joining the group versus what you pay while waiting.',
    back: 'A warm pool holds instances that have already run their initialization. <strong>Stopped</strong>: pay only for EBS; restart takes a short while; the cheapest option. <strong>Running</strong>: fastest to go into service but billed as running instances. <strong>Hibernated</strong>: RAM is saved to the EBS root volume, so in-memory state survives; pay for EBS and the saved memory. Use warm pools when <strong>boot and initialization time</strong>, not forecasting, is the bottleneck.',
    tags: ['EC2 Auto Scaling', 'Warm pools']
  },
  {
    id: 'aws-soa-fc-130',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'How long can an Auto Scaling lifecycle hook hold an instance, and how do you extend or end the wait?',
    hint: 'One default, two ceilings, two API calls.',
    back: 'The default <strong>heartbeat timeout is 3,600 seconds</strong>. Call <code>record-lifecycle-action-heartbeat</code> to restart the timer, up to a maximum wait of <strong>48 hours or 100 times the heartbeat timeout</strong>, whichever is smaller. End the wait early with <code>complete-lifecycle-action</code> using CONTINUE or ABANDON. When the timeout expires, the hook\'s default result applies: for launch hooks ABANDON terminates the instance; for termination hooks both results let termination proceed.',
    tags: ['EC2 Auto Scaling', 'Lifecycle hooks']
  },
  {
    id: 'aws-soa-fc-131',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'In what order does the default termination policy choose an instance to terminate on scale-in?',
    hint: 'Balance first, then age of configuration, then billing.',
    back: '1. Pick the <strong>Availability Zone with the most instances</strong> that are not scale-in protected. 2. With a mixed instances policy, choose instances that bring the group back in line with its <strong>allocation strategy</strong>. 3. Prefer instances on the <strong>oldest launch template or launch configuration</strong>. 4. Prefer instances closest to the <strong>next billing hour</strong>. 5. Otherwise choose at random. Custom policies (OldestInstance, NewestInstance, a Lambda function) change this order; scale-in protection removes instances from consideration.',
    tags: ['EC2 Auto Scaling', 'Termination policy']
  },
  {
    id: 'aws-soa-fc-132',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'You need to debug a failing instance without Auto Scaling replacing it. Which tools do you have?',
    hint: 'One affects the whole group, one affects a single instance.',
    back: 'Move the instance to <strong>Standby</strong>: it stays in the group, is deregistered from the load balancer, and is not health-checked or replaced; decrement desired capacity if you do not want a substitute launched. Or <strong>suspend a process</strong> such as ReplaceUnhealthy or HealthCheck for the whole group. <strong>Detaching</strong> removes it from the group entirely. <strong>Scale-in protection</strong> only stops scale-in from choosing it; an unhealthy protected instance is still replaced.',
    tags: ['EC2 Auto Scaling', 'Standby', 'Troubleshooting']
  },
  {
    id: 'aws-soa-fc-133',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What is the Auto Scaling health check grace period, and what is its default?',
    hint: 'It delays judgement, not scaling.',
    back: 'The grace period is how long Auto Scaling waits after an instance enters <strong>InService</strong> before it acts on failed EC2 or ELB health checks. Groups created in the console default to <strong>300 seconds</strong>; groups created with the CLI or SDK default to 0. Set it to cover application start-up so new instances are not replaced before they are ready. It does not affect which metrics count toward scaling; that is instance warmup.',
    tags: ['EC2 Auto Scaling', 'Health checks']
  },
  {
    id: 'aws-soa-fc-134',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Amazon ECS on EC2: what scales the tasks, and what scales the instances underneath them?',
    hint: 'Two different scaling mechanisms work as a pair.',
    back: '<strong>Service auto scaling</strong> (Application Auto Scaling) changes the service\'s desired task count, with target tracking on CPU, memory or ALBRequestCountPerTarget, or with step and scheduled scaling. An <strong>Auto Scaling group capacity provider with managed scaling</strong> then adds or removes EC2 instances so the tasks have somewhere to run, driven by the CapacityProviderReservation metric. On Fargate only the first layer exists.',
    tags: ['ECS', 'Service auto scaling', 'Capacity providers']
  },
  {
    id: 'aws-soa-fc-135',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Lambda reserved concurrency vs provisioned concurrency: which removes cold starts?',
    hint: 'One is a quota, the other is warm capacity.',
    back: '<strong>Reserved concurrency</strong> sets aside part of the account\'s concurrency for a function and also caps it at that number; it is free and does not pre-initialize anything. <strong>Provisioned concurrency</strong> keeps a set number of execution environments initialized on a version or alias, removing cold starts for requests they serve; it is billed, and it can be scheduled or target-tracked with Application Auto Scaling.',
    tags: ['Lambda', 'Concurrency']
  },
  {
    id: 'aws-soa-fc-136',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Which EC2 Auto Scaling policies use the scaling cooldown?',
    hint: 'The oldest policy type.',
    back: 'Only <strong>simple scaling</strong> policies honour the cooldown (300 seconds by default): after an activity, the group ignores further simple scaling alarms until it expires. <strong>Target tracking</strong> and <strong>step scaling</strong> ignore the cooldown and rely on <strong>instance warmup</strong> instead, which keeps a new instance\'s metrics out of the group aggregate until it is ready. Scheduled actions are not affected by it either.',
    tags: ['EC2 Auto Scaling', 'Cooldown']
  },
  {
    id: 'aws-soa-fc-137',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'How do CloudFront minimum, default and maximum TTL interact with the origin\'s Cache-Control header?',
    hint: 'The header is honoured, but only inside the fence.',
    back: 'If the origin sends <code>Cache-Control: max-age</code> (or s-maxage, or Expires), CloudFront uses it <strong>clamped between minimum and maximum TTL</strong>: below the minimum it caches for the minimum, above the maximum it caches for the maximum. If the origin sends no caching header, CloudFront uses the <strong>default TTL</strong>. <code>no-cache</code>, <code>no-store</code> or <code>private</code> are honoured unless the minimum TTL is above zero. Browsers follow the header, not the TTLs.',
    tags: ['CloudFront', 'TTL', 'Cache-Control']
  },
  {
    id: 'aws-soa-fc-138',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'CloudFront cache policy vs origin request policy: what does each control?',
    hint: 'One shapes the key, the other shapes the trip to the origin.',
    back: 'The <strong>cache policy</strong> defines the <strong>cache key</strong> (which headers, cookies and query strings make objects distinct) and the TTLs. Everything in the cache key is also sent to the origin. The <strong>origin request policy</strong> adds values that are forwarded to the origin <strong>without</strong> being part of the cache key. To raise the hit ratio, keep the cache key minimal and move the rest to the origin request policy.',
    tags: ['CloudFront', 'Cache policy']
  },
  {
    id: 'aws-soa-fc-139',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'How are CloudFront invalidations billed, and what is the alternative for frequent releases?',
    hint: 'Count paths, and think about file names.',
    back: 'The first <strong>1,000 invalidation paths per month</strong> are free; after that each path is charged. A wildcard such as <code>/images/*</code> counts as <strong>one path</strong> even if it matches thousands of objects. For frequent releases, prefer <strong>versioned file names</strong> (app.3f9c.js), which avoid invalidation entirely and also defeat stale browser caches, which an invalidation cannot reach.',
    tags: ['CloudFront', 'Invalidation']
  },
  {
    id: 'aws-soa-fc-140',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'ElastiCache lazy loading vs write-through: what does each strategy risk?',
    hint: 'One risks stale reads, the other risks wasted memory.',
    back: '<strong>Lazy loading</strong> (cache-aside) writes to the cache only on a miss, so it caches only requested data, and a node failure just causes misses; the risks are a miss penalty and <strong>stale data</strong> until the TTL expires. <strong>Write-through</strong> updates the cache on every database write, so data is never stale, but it caches items that may never be read and adds write latency. Combining both with a <strong>TTL</strong> is the common practice.',
    tags: ['ElastiCache', 'Caching strategies']
  },
  {
    id: 'aws-soa-fc-141',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'ElastiCache for Memcached or for Valkey/Redis OSS: which requirements point to each?',
    hint: 'Only one of them has replication.',
    back: '<strong>Memcached</strong>: simple key-value strings, multithreaded nodes, scale by adding nodes; no replication, persistence, snapshots or failover, so a lost node is lost data. <strong>Valkey or Redis OSS</strong>: rich data types (sorted sets, hashes, streams), replication with <strong>Multi-AZ automatic failover</strong>, backups and snapshots, pub/sub, sharding with cluster mode, and Global Datastore across Regions. If the requirement mentions high availability, backup or leaderboards, it is Valkey or Redis OSS.',
    tags: ['ElastiCache', 'Memcached', 'Valkey']
  },
  {
    id: 'aws-soa-fc-142',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'ElastiCache for Valkey or Redis OSS, cluster mode disabled vs enabled: how does each scale?',
    hint: 'One shard or many.',
    back: '<strong>Cluster mode disabled</strong>: one shard with a primary and up to five replicas. Scale reads by adding replicas; scale memory and writes only <strong>vertically</strong> with a larger node type. <strong>Cluster mode enabled</strong>: the keyspace is split across up to 500 shards, each with its own primary. Scale memory and write throughput <strong>horizontally</strong> by adding shards through online resharding, as well as vertically.',
    tags: ['ElastiCache', 'Cluster mode', 'Scaling']
  },
  {
    id: 'aws-soa-fc-143',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'When does ElastiCache Serverless make more sense than a node-based cluster?',
    hint: 'Who picks node types and shard counts?',
    back: 'ElastiCache Serverless (Valkey, Redis OSS or Memcached) removes capacity planning: it scales memory and compute automatically, replicates across Availability Zones, and bills by <strong>data stored</strong> and <strong>ElastiCache Processing Units</strong> consumed. Pick it for spiky or unknown workloads and small teams. Pick <strong>node-based clusters</strong> when you need a specific node type, reserved node pricing for a steady load, or engine settings Serverless does not expose.',
    tags: ['ElastiCache', 'Serverless']
  },
  {
    id: 'aws-soa-fc-144',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'How does DynamoDB Accelerator treat strongly consistent reads and writes?',
    hint: 'DAX only helps one kind of read.',
    back: 'DAX serves <strong>eventually consistent</strong> GetItem, BatchGetItem, Query and Scan from its item cache and query cache in microseconds. <strong>Strongly consistent reads pass straight through</strong> to DynamoDB and are not cached. Writes are <strong>write-through</strong>: DAX writes to the table first, then updates the item cache (the query cache is not updated and relies on its TTL). DAX therefore helps read-heavy, eventually consistent workloads, not write throttling.',
    tags: ['DynamoDB', 'DAX', 'Consistency']
  },
  {
    id: 'aws-soa-fc-145',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'EC2 Auto Scaling scheduled actions: what do they change, and how do they coexist with dynamic scaling?',
    hint: 'They move the boundaries at a known time.',
    back: 'A <strong>scheduled action</strong> sets a new <strong>minimum, maximum and/or desired capacity</strong> at a specific time, once or on a recurring cron schedule, with an optional time zone so it follows daylight saving. Use it for predictable load such as business hours or a nightly batch. Dynamic scaling policies keep working afterwards, but only within the new minimum and maximum, so a scheduled minimum of 10 acts as a floor that target tracking cannot scale below.',
    tags: ['EC2 Auto Scaling', 'Scheduled scaling']
  },
  {
    id: 'aws-soa-fc-146',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'When does RDS storage autoscaling actually add storage, and by how much?',
    hint: 'Three conditions must all be true.',
    back: 'RDS grows storage when <strong>free space is 10% or less</strong> of allocated storage, the low-storage condition has <strong>lasted at least five minutes</strong>, and at least <strong>six hours</strong> have passed since the last storage modification (or since storage optimization finished). It adds the greatest of 10 GiB, 10% of current allocated storage, or the predicted growth over the next seven hours, and never beyond the <strong>maximum storage threshold</strong> you set.',
    tags: ['RDS', 'Storage autoscaling']
  },
  {
    id: 'aws-soa-fc-147',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'DynamoDB on-demand or provisioned capacity: what is the quick decision rule?',
    hint: 'How well can you predict the traffic?',
    back: '<strong>On-demand</strong>: pay per request, no capacity to manage, absorbs sudden spikes; best for new tables, unpredictable or spiky traffic, and tables idle much of the time. <strong>Provisioned with auto scaling</strong>: cheaper for steady or gradually changing traffic, and can be combined with <strong>reserved capacity</strong>. Auto scaling reacts over minutes, so very sharp spikes can still throttle unless capacity is raised ahead of them.',
    tags: ['DynamoDB', 'Capacity modes']
  },
  {
    id: 'aws-soa-fc-148',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'DynamoDB burst capacity vs adaptive capacity: what does each give you?',
    hint: 'One is about time, the other about skew across partitions.',
    back: '<strong>Burst capacity</strong>: DynamoDB retains up to <strong>five minutes (300 seconds)</strong> of unused read and write capacity and can spend it on short spikes; it is best effort and cannot be configured. <strong>Adaptive capacity</strong>: automatically gives more of the table\'s throughput to <strong>hot partitions</strong> and can isolate frequently accessed items, as long as total table capacity is not exceeded. Neither fixes a key design with very few distinct partition key values.',
    tags: ['DynamoDB', 'Burst capacity', 'Adaptive capacity']
  },
  {
    id: 'aws-soa-fc-149',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Aurora Serverless v2: what is an ACU and what do the minimum and maximum settings govern?',
    hint: 'Memory per unit, and what the floor does to scaling speed.',
    back: 'One <strong>Aurora capacity unit</strong> is about <strong>2 GiB of memory</strong> with matching CPU and networking. Each instance scales in fine-grained increments between its minimum and maximum ACUs, with no connection drops. The <strong>maximum</strong> caps cost and performance. The <strong>minimum</strong> sets the idle floor: a higher minimum scales up faster and keeps more buffer cache warm, while supported versions can set it to 0 so idle instances auto-pause.',
    tags: ['Aurora Serverless v2', 'ACU']
  },
  {
    id: 'aws-soa-fc-150',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Which Aurora endpoints should applications use, and how do Auto Scaling replicas join them?',
    hint: 'Writes, reads, and a hand-picked subset.',
    back: 'The <strong>cluster endpoint</strong> always points to the current writer and follows failover; use it for writes. The <strong>reader endpoint</strong> load-balances connections across Aurora Replicas; use it for reads. <strong>Custom endpoints</strong> group chosen instances, for example larger replicas for reporting. Replicas added by <strong>Aurora Auto Scaling</strong> join the reader endpoint automatically, so read traffic spreads onto them without application changes.',
    tags: ['Aurora', 'Endpoints', 'Auto Scaling']
  }
];

export default AWS_SOA_FLASHCARDS_6;
