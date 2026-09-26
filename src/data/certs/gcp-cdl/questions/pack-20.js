export const GCP_CDL_QUESTIONS_20 = [
  {
    id: "gcp-cdl-476",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Paging the on-call engineer before customers notice",
    scenario: "A food delivery app runs on Google Cloud. The operations lead wants the on-call engineer to be paged automatically whenever checkout latency stays above two seconds for five minutes or the order service's error rate climbs past one percent, instead of learning about problems from customer complaints.",
    question: "Which Google Cloud capability should the team set up?",
    options: [
      { id: 'A', text: "Error Reporting, which groups application exceptions and shows how often each has occurred" },
      { id: 'B', text: "Cloud Profiler, which samples CPU and memory use of running code to find expensive functions" },
      { id: 'C', text: "Cloud Monitoring alerting policies, which page people when metrics breach conditions" },
      { id: 'D', text: "Cloud Billing budgets, which email finance when costs pass a threshold" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Monitoring collects metrics such as latency and error rates, and its alerting policies evaluate conditions like a value staying above a threshold for a duration, sending notifications through channels such as paging tools, email or SMS, so problems are caught before customers report them. Cloud Profiler analyzes code performance and does not alert on service metrics. Budgets alert on spending, not service health. Error Reporting groups exceptions and can notify on new errors, but it does not evaluate latency or error-rate thresholds.",
    referenceUrl: "https://docs.cloud.google.com/monitoring/alerts",
    tags: ["Cloud Monitoring", "Alerting", "Observability"]
  },
  {
    id: "gcp-cdl-477",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "One slow hop among eight microservices",
    scenario: "A travel booking site's search requests pass through eight microservices before returning results. Median response time has doubled since last week, but every service's CPU and memory graphs look normal. Engineers need to see how long each request spends in each service to find the one adding the delay.",
    question: "Which Google Cloud tool is designed for this investigation?",
    options: [
      { id: 'A', text: "Cloud Monitoring uptime checks, which probe endpoints from locations around the world" },
      { id: 'B', text: "Cloud Logging, which stores the text log entries written by each service and component" },
      { id: 'C', text: "Error Reporting, which groups crashes and exceptions raised by applications in production" },
      { id: 'D', text: "Cloud Trace, which records the path and timing of requests as they move across services" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Trace is a distributed tracing system: it captures how a request flows through services and how much time each step takes, so engineers can see exactly which hop introduced the added latency. Cloud Logging holds log entries that might contain clues, but it does not assemble per-request timing across eight services. Error Reporting focuses on exceptions, and slow requests are not necessarily errors. Uptime checks confirm that an endpoint responds from the outside but cannot break a request down by service.",
    referenceUrl: "https://docs.cloud.google.com/trace/docs/overview",
    tags: ["Cloud Trace", "Latency", "Microservices"]
  },
  {
    id: "gcp-cdl-478",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Which functions are burning the CPU budget?",
    scenario: "A video platform's recommendation service needs twice as many VMs as last year for the same traffic. Engineers suspect a few inefficient code paths but cannot reproduce production behavior on their laptops. They want continuous insight into which functions consume the most CPU and memory in production, with overhead low enough to leave running all the time.",
    question: "Which tool meets this need?",
    options: [
      { id: 'A', text: "Cloud Monitoring dashboards, which chart total CPU utilization for every VM in the fleet" },
      { id: 'B', text: "Cloud Trace, which measures how long each request takes as it travels between services" },
      { id: 'C', text: "Cloud Profiler, which continuously samples live processes to show resource use per function" },
      { id: 'D', text: "Cloud Logging log-based metrics, which count how often chosen log messages are written" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Profiler is a low-overhead statistical profiler that runs continuously in production, sampling CPU time and memory allocation and attributing it to functions in the source code, which pinpoints the inefficient paths driving extra VMs. Cloud Trace measures request latency between services, not CPU cost per function. Monitoring dashboards show that CPU use is high but not which code causes it. Log-based metrics count log entries and cannot attribute resource usage to functions.",
    referenceUrl: "https://docs.cloud.google.com/profiler/docs/about-profiler",
    tags: ["Cloud Profiler", "Performance", "Observability"]
  },
  {
    id: "gcp-cdl-479",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "New crashes after Tuesday's release",
    scenario: "A fitness app's backend team deploys several times a week. After each release they want the exceptions thrown by their services automatically grouped into distinct issues, with counts and stack traces, and a notification when a brand-new kind of problem first appears.",
    question: "Which Google Cloud service provides this?",
    options: [
      { id: 'A', text: "Cloud Billing reports, which chart how spending on each service changes over time" },
      { id: 'B', text: "Error Reporting, which clusters similar failures and flags novel ones" },
      { id: 'C', text: "Cloud Profiler, which shows how much CPU each function of the service is consuming" },
      { id: 'D', text: "Cloud Trace, which follows the timing of requests across several backend services" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Error Reporting automatically analyzes errors from running services, groups similar exceptions into issues with occurrence counts, stack traces and first-seen and last-seen times, and can notify the team when a new error group appears, which is ideal for spotting problems introduced by a release. Cloud Trace analyzes latency, not exceptions. Cloud Profiler analyzes resource consumption by function. Billing reports show costs.",
    referenceUrl: "https://docs.cloud.google.com/error-reporting/docs/grouping-errors",
    tags: ["Error Reporting", "Observability"]
  },
  {
    id: "gcp-cdl-480",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Piecing together a failed payment",
    scenario: "A subscription service's support team escalates a customer whose payment failed yesterday at 14:02. Engineers need to search the records written by the web front end, the payment service and the database proxy for that customer's ID around that time, and later chart how often the same failure message appears.",
    question: "Which Google Cloud service is built for this?",
    options: [
      { id: 'A', text: "Cloud Profiler, which samples CPU and heap usage of running code in the payment path" },
      { id: 'B', text: "Cloud Logging, with a query interface for log entries and log-based metrics for trends" },
      { id: 'C', text: "Cloud Trace, which charts request latency distributions for each backend service" },
      { id: 'D', text: "Cloud Monitoring uptime checks, which probe the site from several global locations" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud Logging collects log entries from Google Cloud services and applications, and its Logs Explorer lets engineers query across sources by fields such as a customer ID and a time range; log-based metrics then turn matching entries into metrics that can be charted and alerted on. Cloud Profiler shows resource use by function rather than individual events. Uptime checks only confirm endpoints respond. Cloud Trace can show timing for traced requests but is not the place to search every component's records for a customer's failure message.",
    referenceUrl: "https://docs.cloud.google.com/logging/docs/overview",
    tags: ["Cloud Logging", "Log-based metrics", "Troubleshooting"]
  },
  {
    id: "gcp-cdl-481",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "A portal that must stay reachable around the clock",
    scenario: "A national emergency-alert agency is designing a public information portal. Its requirement states that the portal must remain accessible to citizens with as little downtime as possible, even during component failures and maintenance, because people rely on it during crises.",
    question: "Which operations term describes this requirement?",
    options: [
      { id: 'A', text: "Data residency, the practice of keeping stored data within a chosen geography" },
      { id: 'B', text: "Observability, understanding a system from what it emits" },
      { id: 'C', text: "Elastic pricing, the practice of paying only for the resources a system consumes" },
      { id: 'D', text: "High availability, the design goal of keeping a service up nearly all the time" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "High availability describes systems designed to remain accessible with minimal downtime, typically through redundancy, automatic failover and maintenance that does not interrupt service, and it is often expressed as a percentage of uptime. Elastic pricing concerns cost rather than uptime. Data residency concerns where data is stored. Observability helps teams understand and troubleshoot systems, which supports availability but is not the requirement itself.",
    referenceUrl: "https://cloud.google.com/learn/what-is-high-availability",
    tags: ["High availability", "Operations terms"]
  },
  {
    id: "gcp-cdl-482",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Translating an uptime target into minutes",
    scenario: "A payroll software company promises its customers that the service will be available 99.9 percent of the time in each 30-day month. The support director wants to know roughly how much total downtime that target allows in a month, so she can plan maintenance communication.",
    question: "About how much downtime per month does 99.9 percent availability allow?",
    options: [
      { id: 'A', text: "About 3.6 days, since the target allows one-tenth of the month to be spent unavailable" },
      { id: 'B', text: "About 7 hours, since 0.1 percent of a month adds up to most of a working day of outage" },
      { id: 'C', text: "About 4 minutes, since each additional nine removes almost all of the remaining downtime" },
      { id: 'D', text: "About 43 minutes, since 0.1 percent of 43,200 minutes is 43.2 minutes" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A 30-day month has 43,200 minutes, and 0.1 percent of that is 43.2 minutes, so 99.9 percent availability allows about 43 minutes of downtime per month. About 4 minutes corresponds to 99.99 percent, one more nine. Seven hours would be roughly 99 percent availability. A tenth of the month, about three days, would be 90 percent availability. Knowing these numbers helps teams judge how ambitious an availability target really is.",
    referenceUrl: "https://sre.google/sre-book/embracing-risk/",
    tags: ["Availability", "Nines", "SLA"]
  },
  {
    id: "gcp-cdl-483",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Running operations well, not just keeping the lights on",
    scenario: "A retail chain's cloud team wants to be judged on more than whether systems are up. Its goals are to automate deployments, monitor services in a consistent way, manage incidents with clear processes and keep improving through reviews, so the business gets value from the cloud efficiently.",
    question: "Which cloud operations term describes these goals?",
    options: [
      { id: 'A', text: "Capital expenditure, investing up front in hardware that is depreciated over several years" },
      { id: 'B', text: "Data sovereignty, keeping full control over where data lives and who can operate the systems" },
      { id: 'C', text: "Vendor lock-in, heavy dependence on one provider's proprietary services" },
      { id: 'D', text: "Operational excellence, operating workloads well and refining how they are run" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Operational excellence, one of the pillars of the Google Cloud Well-Architected Framework, is about efficiently running, managing and monitoring workloads that deliver business value: automating deployments, building observability, managing incidents well and continuously improving. Data sovereignty concerns control over data and operations for regulatory reasons. Capital expenditure is a financial model. Vendor lock-in is a risk to manage, not an operations goal.",
    referenceUrl: "https://docs.cloud.google.com/architecture/framework/operational-excellence",
    tags: ["Operational excellence", "Operations terms"]
  },
  {
    id: "gcp-cdl-484",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Green dashboards, angry customers",
    scenario: "A streaming company's server dashboards show every VM healthy and at 100 percent uptime, yet a quarter of viewers in one country cannot start videos because a misconfigured content delivery route returns errors. The reliability lead says the team is measuring the wrong thing.",
    question: "How should the team measure reliability instead?",
    options: [
      { id: 'A', text: "By tracking average CPU utilization across the fleet and keeping it below a set percentage" },
      { id: 'B', text: "By tracking the share of user requests that succeed, as experienced from the user's side" },
      { id: 'C', text: "By counting how many VMs are running at any moment compared with the number it planned" },
      { id: 'D', text: "By counting the deployments made each week, since frequent releases imply healthy systems" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Reliability should be measured from the user's perspective: if users cannot complete their journeys, the service is unreliable no matter how healthy servers look. Service level indicators such as the proportion of successful requests, measured as close to the user as practical, capture problems anywhere in the path, including network and delivery issues. VM counts and CPU utilization describe infrastructure, which was healthy while users failed. Deployment frequency measures delivery speed, not whether users are being served.",
    referenceUrl: "https://sre.google/sre-book/service-level-objectives/",
    tags: ["Reliability", "SLI", "User experience"]
  },
  {
    id: "gcp-cdl-485",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "How much data and time can we lose?",
    scenario: "An online brokerage is writing its disaster recovery plan. The business says that after a regional outage, trading must be back within 30 minutes, and no more than 5 minutes of executed trades may be lost. The architect must record these two requirements using the standard terms.",
    question: "Which pairing of terms is correct?",
    options: [
      { id: 'A', text: "A 30-minute recovery time objective and a 5-minute recovery point objective" },
      { id: 'B', text: "A 30-minute recovery point objective and a 5-minute recovery time objective" },
      { id: 'C', text: "A 30-minute error budget and a 5-minute mean time between system failures" },
      { id: 'D', text: "A 30-minute service level indicator and a 5-minute service level objective" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The recovery time objective (RTO) is the maximum acceptable time to restore service after a disruption, here 30 minutes. The recovery point objective (RPO) is the maximum acceptable amount of data loss measured in time, here 5 minutes of trades. Swapping them misstates both requirements. Service level indicators and objectives measure ongoing service quality rather than disaster recovery targets. An error budget is the allowed unreliability under an SLO, and mean time between failures measures how often failures occur.",
    referenceUrl: "https://docs.cloud.google.com/architecture/dr-scenarios-planning-guide",
    tags: ["RTO", "RPO", "Disaster recovery"]
  },
  {
    id: "gcp-cdl-486",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "One database VM holding everything up",
    scenario: "A clinic booking system runs its web tier on several VMs across zones, but all of them use a single self-managed MySQL VM in one zone. When that zone had a brief outage, the whole system went down even though the web servers were fine.",
    question: "Which change removes this weakness most directly?",
    options: [
      { id: 'A', text: "Moving to a Cloud SQL high-availability instance with a standby in a second zone" },
      { id: 'B', text: "Adding more web servers in each zone so the front end can handle heavier traffic" },
      { id: 'C', text: "Increasing the machine size of the database VM so it can process queries more quickly" },
      { id: 'D', text: "Scheduling a nightly export of the database so a copy exists if something goes wrong" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The single database VM is a single point of failure; resilient design adds redundancy for it. A Cloud SQL high-availability configuration keeps a synchronously replicated standby in another zone of the same region and fails over automatically if the primary's zone fails. More web servers do not help when the shared database is down. A larger VM is faster but still a single point of failure. Nightly exports support recovery from data loss but would mean a long outage and up to a day of lost bookings.",
    referenceUrl: "https://docs.cloud.google.com/sql/docs/mysql/high-availability",
    tags: ["Redundancy", "Cloud SQL", "High availability"]
  },
  {
    id: "gcp-cdl-487",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "The replica faithfully copied the mistake",
    scenario: "A logistics firm protects its order database with a cross-region replica so it can survive a regional outage. Last week an engineer ran a faulty script that deleted a week of shipment records. The deletion reached the replica within seconds, and the team could not recover the lost rows from it.",
    question: "What should the firm add to its resilience design?",
    options: [
      { id: 'A', text: "A second cross-region replica, so that two copies of the database exist in separate regions" },
      { id: 'B', text: "Larger machine types for the replica, so that it can apply changes from the primary faster" },
      { id: 'C', text: "A global load balancer in front of the database, so traffic can shift away from bad data" },
      { id: 'D', text: "Point-in-time backups kept independently, so data can be restored to before the mistake" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Replication and backups solve different problems. Replication keeps copies in sync to survive infrastructure failures, which means it also copies deletions and corruption almost instantly. Backups with point-in-time recovery keep historical states separately, so data can be restored to the moment before the faulty script ran. A second replica would copy the deletion too. Faster replica hardware would spread the mistake even sooner. A load balancer distributes traffic and cannot restore deleted records.",
    referenceUrl: "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr",
    tags: ["Backups", "Replication", "Resilience"]
  },
  {
    id: "gcp-cdl-488",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Backups nobody has ever restored",
    scenario: "A law firm has backed up its document system every night for three years, but no one has ever tried restoring from those backups. The managing partner asks what would most increase confidence that the firm could actually recover after a ransomware attack or a hardware failure.",
    question: "Which practice should the firm adopt?",
    options: [
      { id: 'A', text: "Storing backups on the same server as the documents so restores run fast" },
      { id: 'B', text: "Keeping only the most recent backup and deleting older ones to reduce storage costs" },
      { id: 'C', text: "Regularly test-restoring backups and keeping copies isolated from production" },
      { id: 'D', text: "Taking backups every hour instead of every night, while still never restoring from them" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A backup is only as good as the ability to restore it. Regular restore tests confirm backups are complete and usable and measure how long recovery takes, while keeping copies isolated from production, for example in another location with protections against deletion, ensures an attacker or failure cannot destroy both. More frequent untested backups still carry the same unknown risk. Backups on the same server fail with it. Keeping only the latest backup may leave nothing clean if the latest one is already corrupted or encrypted.",
    referenceUrl: "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr",
    tags: ["Backups", "Resilience"]
  },
  {
    id: "gcp-cdl-489",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Fifteen minutes of image uploads at most",
    scenario: "A photo-sharing startup stores user uploads in Cloud Storage. It must keep serving and accepting photos if an entire region fails, and its insurer requires a guarantee that no more than 15 minutes of newly uploaded photos could be lost in such an event.",
    question: "Which storage configuration meets these requirements?",
    options: [
      { id: 'A', text: "A regional bucket with a nightly transfer job copying new objects into a bucket in another region" },
      { id: 'B', text: "A regional bucket in the Archive storage class, which is designed for long-term data retention" },
      { id: 'C', text: "A dual-region bucket with turbo replication, which targets a 15-minute recovery point objective" },
      { id: 'D', text: "A regional bucket with object versioning enabled, so older versions can be restored after loss" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Dual-region buckets store data redundantly in two regions so that data stays available if one region fails, and turbo replication adds a guarantee to replicate newly written objects to both regions within 15 minutes, a 15-minute RPO. Object versioning in a regional bucket protects against overwrites and deletions but not against losing the region itself. The Archive class lowers storage cost for rarely accessed data and does not add regional redundancy. A nightly transfer could lose up to a day of uploads, far beyond 15 minutes.",
    referenceUrl: "https://docs.cloud.google.com/storage/docs/locations",
    tags: ["Replication", "Cloud Storage", "Disaster recovery"]
  },
  {
    id: "gcp-cdl-490",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Recovery in minutes on a moderate budget",
    scenario: "A regional insurer needs its claims system recoverable within about 20 minutes after a regional outage. Running a full second copy at production scale in another region all the time is beyond its budget, but restoring everything from backups onto new infrastructure would take many hours.",
    question: "Which disaster recovery approach fits best?",
    options: [
      { id: 'A', text: "Warm standby, keeping a smaller copy running in another region, ready to grow on demand" },
      { id: 'B', text: "Hot standby, running a full production-scale copy in another region at all times" },
      { id: 'C', text: "Cold standby, restoring from backups onto newly created infrastructure after a disaster" },
      { id: 'D', text: "No standby at all, relying on Google to rebuild the claims system in a new region" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A warm standby keeps a smaller but functioning copy of the environment running in another region, with data replicated, so it can be scaled up and take over within minutes at a fraction of the cost of a full duplicate, which matches a 20-minute RTO on a moderate budget. A cold standby is cheapest but restoring onto new infrastructure takes hours. A hot standby, or active-active, gives the fastest recovery but is the full-scale duplicate the insurer cannot afford. Google does not rebuild customers' applications for them; disaster recovery design is the customer's responsibility.",
    referenceUrl: "https://docs.cloud.google.com/architecture/dr-scenarios-planning-guide",
    tags: ["Disaster recovery", "Warm standby", "RTO"]
  },
  {
    id: "gcp-cdl-491",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Four numbers for every user-facing service",
    scenario: "A newly formed SRE team at an airline wants a small, standard set of metrics to monitor for each customer-facing service before adding anything else, based on Google's own site reliability engineering guidance.",
    question: "Which set of signals does Google's SRE guidance recommend?",
    options: [
      { id: 'A', text: "Latency, traffic, errors and saturation, known as the four golden signals" },
      { id: 'B', text: "Cost, carbon, compliance and capacity, measured monthly for every service" },
      { id: 'C', text: "Deployments, lead time, change failures and restore time, per release" },
      { id: 'D', text: "Uptime, CPU, memory and disk space signals, sampled on every VM" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google's SRE guidance names four golden signals for monitoring user-facing systems: latency (how long requests take), traffic (how much demand the system receives), errors (the rate of failed requests) and saturation (how full the system is). Cost, carbon and compliance matter but are not service health signals. Deployment frequency, lead time, change failure rate and time to restore are DORA metrics for software delivery performance, not runtime monitoring. Host-level uptime and resource metrics miss what users actually experience.",
    referenceUrl: "https://sre.google/sre-book/monitoring-distributed-systems/",
    tags: ["Golden signals", "SRE", "Monitoring"]
  },
  {
    id: "gcp-cdl-492",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "The queue that keeps getting longer",
    scenario: "A ride-hailing company's dispatch service still answers quickly and has almost no errors, but its message queue depth has grown steadily all afternoon and worker memory is at 92 percent. Engineers expect it to fall over if demand rises any further.",
    question: "Which golden signal is warning the team?",
    options: [
      { id: 'A', text: "Saturation, showing how close the service is to the limits of its constrained resources" },
      { id: 'B', text: "Traffic, showing the number of dispatch requests reaching the service each second" },
      { id: 'C', text: "Latency, showing how long individual dispatch requests take to receive a response" },
      { id: 'D', text: "Errors, showing the proportion of dispatch requests that fail or return wrong results" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Saturation measures how full a service is relative to its most constrained resources, such as memory, CPU or queue capacity, and it often predicts trouble before latency or errors rise, which is exactly what the growing queue and 92 percent memory show. Latency is still low and errors are near zero, so those signals are not yet warning. Traffic measures demand; it may be rising, but the signal that shows the service approaching its limit is saturation.",
    referenceUrl: "https://sre.google/sre-book/monitoring-distributed-systems/",
    tags: ["Golden signals", "Saturation"]
  },
  {
    id: "gcp-cdl-493",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Average latency improved while users suffered",
    scenario: "After a faulty release, a payments API began rejecting 30 percent of requests almost instantly with errors. The team's dashboard, which shows average latency across all requests, reported that the service had become faster, and nobody was alerted.",
    question: "What change to latency monitoring would have exposed the problem?",
    options: [
      { id: 'A', text: "Replacing latency with average CPU utilization, since CPU reflects the real user load" },
      { id: 'B', text: "Sampling latency from one request in every thousand, to reduce monitoring overhead" },
      { id: 'C', text: "Tracking the latency of successful and failed requests separately, next to error rates" },
      { id: 'D', text: "Measuring average latency over longer windows, so short-term swings are smoothed out" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Google's SRE guidance stresses distinguishing the latency of successful requests from that of failed ones, because fast errors pull an average down and hide a failing service; tracking them separately alongside the error rate would have shown successful payments unchanged and a surge of instant failures. Longer averaging windows smooth the data even more and hide the problem further. CPU utilization is an infrastructure metric that does not reflect what users experience. Heavier sampling reduces visibility rather than improving it.",
    referenceUrl: "https://sre.google/sre-book/monitoring-distributed-systems/",
    tags: ["Golden signals", "Latency", "Errors"]
  },
  {
    id: "gcp-cdl-494",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "How busy the service really is",
    scenario: "Before the holiday season, an online florist's SRE team wants to track the demand placed on its ordering service, measured as HTTP requests per second, so they can compare this year's load with last year's peak and plan capacity.",
    question: "Which golden signal are they tracking?",
    options: [
      { id: 'A', text: "Traffic, the volume of work arriving at the service over a given period" },
      { id: 'B', text: "Saturation, how close the service is to the limit of its most constrained resource" },
      { id: 'C', text: "Errors, the rate at which requests fail explicitly, implicitly or by policy" },
      { id: 'D', text: "Latency, the time it takes the service to respond to each individual request" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Traffic measures how much demand is being placed on a system, expressed in a service-specific unit such as HTTP requests per second, which is what the team compares against last year's peak. Saturation describes how full the system is relative to its capacity, not demand itself. Errors measure failed requests. Latency measures response time.",
    referenceUrl: "https://sre.google/sre-book/monitoring-distributed-systems/",
    tags: ["Golden signals", "Traffic", "Capacity planning"]
  },
  {
    id: "gcp-cdl-495",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "A 200 OK that still counts as a failure",
    scenario: "An e-commerce search service returns HTTP 200 for every request, but after a bad index update some responses contain empty results for popular products, and others take more than five seconds, which the business treats as unacceptable. The team's error dashboard shows zero errors.",
    question: "How should the team define errors for monitoring?",
    options: [
      { id: 'A', text: "Count requests only when the servers restart, since a crash is the only true failure" },
      { id: 'B', text: "Count only HTTP 500 responses, since any other status code means the request succeeded" },
      { id: 'C', text: "Count errors only when a customer files a complaint, since that proves real impact" },
      { id: 'D', text: "Count explicit failures, wrong content, and responses slower than the agreed limit" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Google's SRE guidance defines errors broadly: explicit failures such as HTTP 500s, implicit failures such as a 200 response with the wrong content, and failures by policy, such as responses slower than a committed threshold. Counting all three would have exposed both the empty results and the five-second responses. Counting only 500s is what produced the misleading zero. Waiting for complaints detects problems late and misses most affected users. Server restarts capture only a narrow class of failures.",
    referenceUrl: "https://sre.google/sre-book/monitoring-distributed-systems/",
    tags: ["Golden signals", "Errors", "SRE"]
  },
  {
    id: "gcp-cdl-496",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Measuring what users feel on the checkout page",
    scenario: "An SRE team is defining how to measure the health of a retailer's checkout. They choose the proportion of checkout requests that complete successfully in under 800 milliseconds, measured at the load balancer, as the figure they will track continuously.",
    question: "What is this measure called in SRE practice?",
    options: [
      { id: 'A', text: "An error budget, the amount of unreliability the service is allowed in a period" },
      { id: 'B', text: "A service level indicator, a number that quantifies one aspect of the service" },
      { id: 'C', text: "A postmortem, the written analysis produced after an incident has been resolved" },
      { id: 'D', text: "A service level agreement, a contract with penalties for missed targets" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A service level indicator (SLI) is a carefully defined quantitative measure of some aspect of the level of service provided, often expressed as the proportion of good events, such as successful checkouts under 800 milliseconds, out of all events. A service level agreement is a contract with consequences if targets are missed. An error budget is derived from an SLO as the allowed shortfall. A postmortem documents an incident and its lessons.",
    referenceUrl: "https://sre.google/sre-book/service-level-objectives/",
    tags: ["SLI", "SRE"]
  },
  {
    id: "gcp-cdl-497",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Internal target versus customer contract",
    scenario: "A cloud accounting vendor's contracts promise customers 99.9 percent monthly availability, with service credits if it is missed. The SRE team is now choosing the internal availability target it will engineer and alert against.",
    question: "How should the internal target relate to the contract?",
    options: [
      { id: 'A', text: "The internal SLO should be looser than the SLA, since contracts always include a safety margin" },
      { id: 'B', text: "The internal SLO should equal the SLA exactly, so the team never works harder than required" },
      { id: 'C', text: "The internal SLO should be stricter than the SLA, warning before penalties apply" },
      { id: 'D', text: "The internal SLO should be set to 100 percent, so that the SLA can never be missed in practice" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A service level agreement is an external contract with consequences such as credits, while a service level objective is the internal target the team manages to. Setting the SLO stricter than the SLA, for example 99.95 percent against a 99.9 percent SLA, gives the team room to detect and fix problems before customers are owed compensation. Matching them exactly leaves no warning margin. A looser SLO would let the team breach the contract while meeting its own goal. A 100 percent target is unachievable and would halt change.",
    referenceUrl: "https://sre.google/sre-book/service-level-objectives/",
    tags: ["SLO", "SLA", "SRE"]
  },
  {
    id: "gcp-cdl-498",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "The month's reliability allowance is used up",
    scenario: "A ticketing platform has an SLO of 99.9 percent of requests succeeding over 30 days. Two incidents in the first two weeks have already consumed all of the allowed failures for the period. Product managers want to ship a large new feature next week.",
    question: "According to SRE practice, what should happen next?",
    options: [
      { id: 'A', text: "Pause risky releases and focus engineering on reliability until the budget recovers" },
      { id: 'B', text: "Ship the feature on schedule and lower the SLO to 99 percent so that it is met this month" },
      { id: 'C', text: "Ignore the budget this month, since error budgets only matter at the end of each quarter" },
      { id: 'D', text: "Double the number of releases, so that each individual change is smaller and less risky" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The error budget is the allowed unreliability implied by the SLO, here 0.1 percent of requests. When it is exhausted, a typical error budget policy pauses risky launches and redirects effort to reliability work until the service is back within its SLO, which balances innovation against user experience using data rather than argument. Lowering the SLO to excuse the miss defeats its purpose. The budget applies to the SLO's own window, here 30 days. Releasing more often while already out of budget adds risk at the worst time.",
    referenceUrl: "https://sre.google/workbook/error-budget-policy/",
    tags: ["Error budget", "SLO", "SRE"]
  },
  {
    id: "gcp-cdl-499",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "The executive who wants perfect uptime",
    scenario: "A bank's new COO tells the platform team that the mobile banking service should have a 100 percent availability objective, because any downtime is unacceptable. The head of SRE disagrees, even though reliability is the team's top priority.",
    question: "Which argument best supports the head of SRE's position?",
    options: [
      { id: 'A', text: "A 100 percent objective would require removing monitoring, since alerts count as downtime" },
      { id: 'B', text: "A 100 percent objective is fine for internal services but cannot be written into contracts" },
      { id: 'C', text: "A 100 percent objective is achievable only if the bank moves its service to a single region" },
      { id: 'D', text: "A 100 percent objective is unrealistic and would block change, while users cannot perceive it" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SRE practice holds that 100 percent is the wrong reliability target for almost everything: it is effectively impossible to achieve, the cost of each additional nine rises steeply, users cannot distinguish very high availability from perfect because their own devices and networks fail more often, and a zero error budget would forbid the changes needed to improve the product. The right target is as reliable as users need. The claim about contracts misses the point. A single region reduces availability rather than improving it. Monitoring does not count as downtime.",
    referenceUrl: "https://sre.google/sre-book/embracing-risk/",
    tags: ["SLO", "Error budget", "SRE"]
  },
  {
    id: "gcp-cdl-500",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "After the outage, what kind of review?",
    scenario: "A four-hour outage at a streaming service was triggered when an engineer pushed a configuration change that lacked validation. Some managers want the engineer disciplined. The VP of engineering instead wants a review culture that uncovers the systemic causes and prevents a repeat.",
    question: "Which practice from DevOps and SRE should the VP adopt?",
    options: [
      { id: 'A', text: "A policy that bans configuration changes entirely until the next annual platform review" },
      { id: 'B', text: "A blameless postmortem that records what failed and the fixes, without assigning personal fault" },
      { id: 'C', text: "A rule that only senior managers may deploy changes, to reduce the number of people involved" },
      { id: 'D', text: "A private discussion with the engineer and no written record, to protect the team's image" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Blameless postmortems are a core DevOps and SRE practice: they document what happened, its impact, the contributing causes and follow-up actions, such as adding automated validation, without blaming individuals, so people share information openly and the system is fixed. Banning changes halts progress and does not address the missing safeguard. Keeping no written record loses the lessons. Restricting deployments to senior managers creates a bottleneck and leaves the underlying gap in place.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["Postmortems", "DevOps", "SRE"]
  }
];

export default GCP_CDL_QUESTIONS_20;
