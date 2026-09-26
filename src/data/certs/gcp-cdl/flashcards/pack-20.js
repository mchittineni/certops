export const GCP_CDL_FLASHCARDS_20 = [
  {
    id: "gcp-cdl-fc-476",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "What are the main tools in Google Cloud Observability, formerly the operations suite?",
    hint: "Metrics, logs, traces, profiles, errors.",
    back: "<strong>Cloud Monitoring</strong> (metrics, dashboards, alerting, uptime checks, SLO monitoring), <strong>Cloud Logging</strong> (collecting, storing, querying and routing logs), <strong>Cloud Trace</strong> (distributed request latency), <strong>Cloud Profiler</strong> (continuous CPU and memory profiling of code) and <strong>Error Reporting</strong> (grouping and alerting on application errors). Together they help teams detect, diagnose and prevent problems.",
    tags: ["Observability", "Operations suite"]
  },
  {
    id: "gcp-cdl-fc-477",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Cloud Monitoring vs Cloud Logging: what kind of data does each handle?",
    hint: "Numbers over time vs records of events.",
    back: "<strong>Cloud Monitoring</strong> works with <strong>metrics</strong>: numeric measurements over time, such as latency, CPU or request counts, shown on dashboards and used for alerting. <strong>Cloud Logging</strong> works with <strong>log entries</strong>: timestamped records of individual events written by services and applications, searched when investigating what happened. Log-based metrics connect the two by turning log patterns into metrics.",
    tags: ["Cloud Monitoring", "Cloud Logging"]
  },
  {
    id: "gcp-cdl-fc-478",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Cloud Trace vs Cloud Profiler: which answers \"where is the request slow\" and which \"which code is expensive\"?",
    hint: "Across services vs inside one program.",
    back: "<strong>Cloud Trace</strong> follows individual requests <strong>across services</strong> and shows how long each step takes, finding which hop adds latency. <strong>Cloud Profiler</strong> continuously samples running programs and attributes <strong>CPU time and memory</strong> to functions in the code, finding which code paths consume resources. Trace is for latency in distributed systems; Profiler is for efficiency within a service.",
    tags: ["Cloud Trace", "Cloud Profiler"]
  },
  {
    id: "gcp-cdl-fc-479",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "What does a Cloud Monitoring uptime check do?",
    hint: "An outside-in probe.",
    back: "An <strong>uptime check</strong> sends requests to a public URL, VM or other endpoint from <strong>multiple locations around the world</strong> at regular intervals and records whether it responds correctly and how fast. Combined with an alerting policy, it notifies the team when the service becomes unreachable from the outside, even if internal metrics look healthy.",
    tags: ["Cloud Monitoring", "Uptime checks"]
  },
  {
    id: "gcp-cdl-fc-480",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "What is a log-based metric, and when would you use one?",
    hint: "Turning log lines into a number you can chart.",
    back: "A <strong>log-based metric</strong> counts log entries that match a filter, or extracts a value from them, and exposes the result as a Cloud Monitoring metric. Use it when the signal you care about exists only in logs, for example the number of \"payment declined\" messages per minute, so you can chart it on dashboards and <strong>alert on it</strong> like any other metric.",
    tags: ["Cloud Logging", "Log-based metrics"]
  },
  {
    id: "gcp-cdl-fc-481",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "What is Google Cloud Managed Service for Prometheus?",
    hint: "Keep the open-source tooling, drop the servers.",
    back: "A fully managed, globally scalable backend for <strong>Prometheus</strong> metrics, the widely used open-source monitoring system. Teams keep using Prometheus instrumentation and <strong>PromQL</strong> queries, including for Kubernetes workloads, while Google runs storage and scaling, and the metrics are available in Cloud Monitoring alongside other Google Cloud metrics, avoiding lock-in to proprietary instrumentation.",
    tags: ["Managed Service for Prometheus", "Observability"]
  },
  {
    id: "gcp-cdl-fc-482",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Reliability vs availability: are they the same thing?",
    hint: "One is a component of the other.",
    back: "<strong>Availability</strong> is the proportion of time or requests for which a service is usable. <strong>Reliability</strong> is broader: the service consistently performs its intended function correctly, at acceptable speed, over time. A service can be up but unreliable if it returns wrong results or is too slow. SRE measures reliability with user-centric SLIs such as success rate and latency.",
    tags: ["Reliability", "Availability"]
  },
  {
    id: "gcp-cdl-fc-483",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "How much downtime do 99%, 99.9%, 99.99% and 99.999% allow per 30-day month?",
    hint: "Each extra nine divides the allowance by ten.",
    back: "<strong>99%</strong>: about 7.2 hours. <strong>99.9%</strong>: about 43 minutes. <strong>99.99%</strong>: about 4.3 minutes. <strong>99.999%</strong>: about 26 seconds. Each additional nine cuts allowed downtime tenfold and usually costs considerably more to achieve, which is why targets should match what users actually need.",
    tags: ["Availability", "Nines"]
  },
  {
    id: "gcp-cdl-fc-484",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "If a service depends on three components that are each 99.9% available, what is its best-case availability?",
    hint: "Serial dependencies multiply.",
    back: "When every component must work, availabilities <strong>multiply</strong>: 0.999 x 0.999 x 0.999 is about <strong>99.7%</strong>, roughly 2 hours of downtime a month instead of 43 minutes. A service cannot be more available than the product of its critical dependencies, which is why architects add <strong>redundancy</strong> to critical components and remove unnecessary serial dependencies.",
    tags: ["Availability", "Dependencies", "Resilience"]
  },
  {
    id: "gcp-cdl-fc-485",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Synchronous vs asynchronous replication: what is the trade-off?",
    hint: "Zero data loss vs distance and speed.",
    back: "<strong>Synchronous</strong> replication confirms a write only after it reaches both copies, so no committed data is lost on failover (an RPO of zero), but every write waits for the second copy, which suits nearby zones, as in Cloud SQL high availability. <strong>Asynchronous</strong> replication confirms writes immediately and copies them afterward, suiting distant regions without slowing writes, but a failure can lose the most recent changes.",
    tags: ["Replication", "RPO", "Resilience"]
  },
  {
    id: "gcp-cdl-fc-486",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Why are replicas not a substitute for backups?",
    hint: "A replica faithfully copies your mistakes.",
    back: "<strong>Replication</strong> keeps copies in sync to survive infrastructure failure, so deletions, corruption and ransomware encryption are copied to the replica almost immediately. <strong>Backups</strong> preserve earlier points in time, kept independently, so data can be restored to before the damage. Resilient designs use both: replicas for availability, backups (ideally with point-in-time recovery) for recoverability.",
    tags: ["Backups", "Replication"]
  },
  {
    id: "gcp-cdl-fc-487",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "RTO vs RPO: what does each measure?",
    hint: "Time to recover vs data you can afford to lose.",
    back: "<strong>Recovery time objective (RTO)</strong>: the maximum acceptable time to restore a service after a disruption. <strong>Recovery point objective (RPO)</strong>: the maximum acceptable data loss, measured as time, for example the last 5 minutes of transactions. Smaller values of either require more expensive designs, so they are set by business impact.",
    tags: ["RTO", "RPO", "Disaster recovery"]
  },
  {
    id: "gcp-cdl-fc-488",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Cold, warm and hot disaster recovery patterns: how do cost and recovery time compare?",
    hint: "The more that is already running, the faster and dearer.",
    back: "<strong>Cold</strong>: backups only; infrastructure is created after a disaster, cheapest but recovery takes hours or longer. <strong>Warm</strong>: a scaled-down copy runs in another region with replicated data and scales up on failover, recovering in minutes at moderate cost. <strong>Hot</strong> (active-active): full capacity runs in multiple regions, recovering almost instantly at the highest cost.",
    tags: ["Disaster recovery", "Resilience"]
  },
  {
    id: "gcp-cdl-fc-489",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "What is a blameless postmortem, and why does SRE insist it be blameless?",
    hint: "Focus on the system, not the person.",
    back: "A <strong>postmortem</strong> is a written record of an incident: its impact, timeline, root and contributing causes, and <strong>follow-up actions with owners</strong>. It is <strong>blameless</strong> because it looks for gaps in systems and processes rather than a person to punish; people who fear blame hide mistakes, so the organisation stops learning and the same failure recurs.",
    tags: ["Postmortems", "SRE", "Incident management"]
  },
  {
    id: "gcp-cdl-fc-490",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "What are the four golden signals of monitoring?",
    hint: "How slow, how busy, how broken, how full.",
    back: "<strong>Latency</strong>: how long requests take. <strong>Traffic</strong>: how much demand the system is handling, for example requests per second. <strong>Errors</strong>: the rate of failed requests, including wrong or too-slow responses. <strong>Saturation</strong>: how full the system is relative to its most constrained resource. Google's SRE guidance recommends these four for any user-facing system.",
    tags: ["Golden signals", "SRE"]
  },
  {
    id: "gcp-cdl-fc-491",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Why do SRE teams track latency percentiles instead of averages?",
    hint: "An average can look fine while many users suffer.",
    back: "Averages hide the <strong>long tail</strong>: if 95% of requests take 100 ms and 5% take 5 seconds, the average looks acceptable while one user in twenty has a terrible experience. Percentiles such as the <strong>95th or 99th</strong> show what the slowest users see. Fast errors can also drag an average down, so successful and failed request latency should be tracked separately.",
    tags: ["Latency", "Percentiles", "SRE"]
  },
  {
    id: "gcp-cdl-fc-492",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Alert on symptoms or causes: which does SRE practice prefer for paging?",
    hint: "Wake people for what users feel.",
    back: "Page on <strong>symptoms</strong>, conditions users experience such as high error rates, slow responses or SLO burn, because they always matter and catch unknown causes. <strong>Cause</strong>-based alerts, such as high CPU on one VM, often fire without user impact and cause alert fatigue; they belong on dashboards or in lower-urgency tickets that help diagnose a symptom once it appears.",
    tags: ["Alerting", "SRE", "Monitoring"]
  },
  {
    id: "gcp-cdl-fc-493",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "SLI, SLO, SLA: define each in one line.",
    hint: "The measure, the target, the contract.",
    back: "<strong>SLI</strong> (service level indicator): a quantitative measure of service, such as the percentage of successful requests. <strong>SLO</strong> (service level objective): the internal target for an SLI over a period, such as 99.9% over 30 days. <strong>SLA</strong> (service level agreement): a contract with customers that specifies consequences, such as credits, if promised levels are missed.",
    tags: ["SLI", "SLO", "SLA"]
  },
  {
    id: "gcp-cdl-fc-494",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "How do you calculate an error budget?",
    hint: "Start from 100% and subtract the SLO.",
    back: "The <strong>error budget</strong> is <strong>1 minus the SLO</strong>, applied to the SLO's window. With a 99.9% success SLO over 30 days, 0.1% of requests may fail: if the service handles 10 million requests in that window, the budget is about <strong>10,000 failed requests</strong>. For a time-based SLO it is about 43 minutes of downtime a month.",
    tags: ["Error budget", "SLO"]
  },
  {
    id: "gcp-cdl-fc-495",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "What does an error budget policy do when the budget is exhausted, and why is it useful?",
    hint: "It settles the argument between shipping and stability in advance.",
    back: "An <strong>error budget policy</strong> is agreed in advance by product and engineering. When the budget is spent, it typically <strong>pauses risky releases</strong> other than fixes and security patches and <strong>redirects effort to reliability</strong> until the service is back within its SLO. It turns the tension between feature velocity and stability into a data-driven rule instead of a negotiation during every incident.",
    tags: ["Error budget", "SRE"]
  },
  {
    id: "gcp-cdl-fc-496",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "How do DevOps and SRE relate?",
    hint: "A philosophy and one concrete way to implement it.",
    back: "<strong>DevOps</strong> is a set of cultural and technical practices that break down silos between development and operations: shared ownership, automation, small frequent changes and learning from failure. <strong>SRE</strong> is Google's concrete implementation of those ideas, applying software engineering to operations with SLOs, error budgets, toil limits and blameless postmortems. Google describes it as \"class SRE implements interface DevOps\".",
    tags: ["DevOps", "SRE"]
  },
  {
    id: "gcp-cdl-fc-497",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "What are the four key DORA metrics of software delivery performance?",
    hint: "Two measure speed; two measure stability.",
    back: "<strong>Deployment frequency</strong> and <strong>lead time for changes</strong> measure throughput. <strong>Change failure rate</strong> and <strong>time to restore service</strong> after a failed change measure stability. DORA research, supported by Google Cloud, finds that high performers do well on all four at once, so speed and stability reinforce rather than trade off against each other.",
    tags: ["DORA", "DevOps", "Metrics"]
  },
  {
    id: "gcp-cdl-fc-498",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "What is toil in SRE terms?",
    hint: "Work that grows with the service and teaches nothing.",
    back: "<strong>Toil</strong> is manual, repetitive, automatable operational work that has no enduring value and scales linearly as the service grows, such as hand-restarting jobs or manually provisioning accounts. Google SRE aims to cap toil, commonly at <strong>50%</strong> of an engineer's time, and invest the rest in engineering work, such as automation, that removes toil permanently.",
    tags: ["Toil", "SRE"]
  },
  {
    id: "gcp-cdl-fc-499",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "How do canary releases and gradual rollouts improve reliability?",
    hint: "Most outages start with a change.",
    back: "A <strong>canary release</strong> sends a new version to a small share of traffic or users first, while monitoring SLIs; if errors or latency rise, the change is rolled back before most users are affected. <strong>Gradual rollouts</strong> then widen exposure in stages. Because most incidents are triggered by changes, limiting the blast radius of each change protects the error budget.",
    tags: ["Canary releases", "DevOps", "SRE"]
  },
  {
    id: "gcp-cdl-fc-500",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "What makes an alert worth paging someone for?",
    hint: "Urgent, actionable, and about real user impact.",
    back: "A good page is <strong>urgent</strong> (something must be done now), <strong>actionable</strong> (a human can do something useful) and tied to <strong>user impact</strong>, such as a fast SLO burn rate. Alerts that fire often without needing action cause fatigue, so real problems get missed. Anything informational belongs on a dashboard or in a ticket, not a page.",
    tags: ["Alerting", "Operational excellence"]
  }
];

export default GCP_CDL_FLASHCARDS_20;
