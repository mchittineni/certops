export const GCP_PCDOE_QUESTIONS_12 = [
  {
    id: "gcp-pcdoe-276",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Graceful Degradation and Load Shedding: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Traffic Management to maintain core payment transaction processing during an unprecedented 10x traffic spike by shedding non-critical user background tasks.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Graceful degradation, priority queuing, and critical request load shedding is under consideration.",
    options: [
      { id: 'A', text: "Allow all requests equal priority until the entire server cluster runs out of memory and crashes." },
      { id: 'B', text: "Implement load shedding and graceful degradation: drop non-essential requests (e.g. recommendations) and prioritize critical transactions." },
      { id: 'C', text: "Throttle all incoming traffic randomly without distinguishing between critical and non-critical operations." },
      { id: 'D', text: "Shut down all application servers until traffic subsides." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement load shedding and graceful degradation: drop non-essential requests (e.g. recommendations) and prioritize critical transactions. Graceful degradation and load shedding preserve core business functionality during extreme overload. By categorizing requests into critical and non-critical tiers, services shed low-priority background requests early to guarantee sufficient resources for revenue-generating transactions.",
    referenceUrl: "https://sre.google.com/sre-book/handling-overload/",
    tags: ["Traffic Management", "Load Shedding", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-277",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Graceful Degradation and Load Shedding: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Traffic Management to maintain core payment transaction processing during an unprecedented 10x traffic spike by shedding non-critical user background tasks.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Graceful degradation, priority queuing, and critical request load shedding is under consideration.",
    options: [
      { id: 'A', text: "Implement load shedding and graceful degradation: drop non-essential requests (e.g. recommendations) and prioritize critical transactions." },
      { id: 'B', text: "Shut down all application servers until traffic subsides." },
      { id: 'C', text: "Throttle all incoming traffic randomly without distinguishing between critical and non-critical operations." },
      { id: 'D', text: "Allow all requests equal priority until the entire server cluster runs out of memory and crashes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement load shedding and graceful degradation: drop non-essential requests (e.g. recommendations) and prioritize critical transactions. Graceful degradation and load shedding preserve core business functionality during extreme overload. By categorizing requests into critical and non-critical tiers, services shed low-priority background requests early to guarantee sufficient resources for revenue-generating transactions.",
    referenceUrl: "https://sre.google.com/sre-book/handling-overload/",
    tags: ["Traffic Management", "Load Shedding", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-278",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Graceful Degradation and Load Shedding: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Traffic Management to maintain core payment transaction processing during an unprecedented 10x traffic spike by shedding non-critical user background tasks.",
    question: "Which solution implements these mandatory compliance and security controls? Graceful degradation, priority queuing, and critical request load shedding is under consideration.",
    options: [
      { id: 'A', text: "Implement load shedding and graceful degradation: drop non-essential requests (e.g. recommendations) and prioritize critical transactions." },
      { id: 'B', text: "Throttle all incoming traffic randomly without distinguishing between critical and non-critical operations." },
      { id: 'C', text: "Allow all requests equal priority until the entire server cluster runs out of memory and crashes." },
      { id: 'D', text: "Shut down all application servers until traffic subsides." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement load shedding and graceful degradation: drop non-essential requests (e.g. recommendations) and prioritize critical transactions. Graceful degradation and load shedding preserve core business functionality during extreme overload. By categorizing requests into critical and non-critical tiers, services shed low-priority background requests early to guarantee sufficient resources for revenue-generating transactions.",
    referenceUrl: "https://sre.google.com/sre-book/handling-overload/",
    tags: ["Traffic Management", "Load Shedding", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-279",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Graceful Degradation and Load Shedding: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Traffic Management to maintain core payment transaction processing during an unprecedented 10x traffic spike by shedding non-critical user background tasks.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Graceful degradation, priority queuing, and critical request load shedding is under consideration.",
    options: [
      { id: 'A', text: "Implement load shedding and graceful degradation: drop non-essential requests (e.g. recommendations) and prioritize critical transactions." },
      { id: 'B', text: "Throttle all incoming traffic randomly without distinguishing between critical and non-critical operations." },
      { id: 'C', text: "Allow all requests equal priority until the entire server cluster runs out of memory and crashes." },
      { id: 'D', text: "Shut down all application servers until traffic subsides." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement load shedding and graceful degradation: drop non-essential requests (e.g. recommendations) and prioritize critical transactions. Graceful degradation and load shedding preserve core business functionality during extreme overload. By categorizing requests into critical and non-critical tiers, services shed low-priority background requests early to guarantee sufficient resources for revenue-generating transactions.",
    referenceUrl: "https://sre.google.com/sre-book/handling-overload/",
    tags: ["Traffic Management", "Load Shedding", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-280",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Graceful Degradation and Load Shedding: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Traffic Management to maintain core payment transaction processing during an unprecedented 10x traffic spike by shedding non-critical user background tasks.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Graceful degradation, priority queuing, and critical request load shedding is under consideration.",
    options: [
      { id: 'A', text: "Allow all requests equal priority until the entire server cluster runs out of memory and crashes." },
      { id: 'B', text: "Shut down all application servers until traffic subsides." },
      { id: 'C', text: "Implement load shedding and graceful degradation: drop non-essential requests (e.g. recommendations) and prioritize critical transactions." },
      { id: 'D', text: "Throttle all incoming traffic randomly without distinguishing between critical and non-critical operations." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement load shedding and graceful degradation: drop non-essential requests (e.g. recommendations) and prioritize critical transactions. Graceful degradation and load shedding preserve core business functionality during extreme overload. By categorizing requests into critical and non-critical tiers, services shed low-priority background requests early to guarantee sufficient resources for revenue-generating transactions.",
    referenceUrl: "https://sre.google.com/sre-book/handling-overload/",
    tags: ["Traffic Management", "Load Shedding", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-281",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Capacity Planning and Demand Forecasting: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Capacity Management to prepare cloud infrastructure capacity for an upcoming national Black Friday e-commerce sales event expected to generate 500% normal peak traffic.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Organic growth vs inorganic event capacity planning and load testing is under consideration.",
    options: [
      { id: 'A', text: "Rely entirely on default reactive autoscaling without verifying regional cloud quota limits." },
      { id: 'B', text: "Order on-premises physical server racks 2 days before the sale begins." },
      { id: 'C', text: "Throttle all user web traffic to 1 request per minute during the holiday weekend." },
      { id: 'D', text: "Conduct load and stress testing, forecast inorganic demand spikes, and request quota increases in advance." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conduct load and stress testing, forecast inorganic demand spikes, and request quota increases in advance. Effective SRE capacity planning combines organic growth modeling with inorganic demand forecasting. Teams conduct synthetic stress tests to identify bottlenecks and proactively request cloud resource quota increases (vCPU, IP addresses, persistent disks) well ahead of marketing events.",
    referenceUrl: "https://sre.google/sre-book/capacity-planning/",
    tags: ["Capacity Management", "Capacity Planning", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-282",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Capacity Planning and Demand Forecasting: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Capacity Management to prepare cloud infrastructure capacity for an upcoming national Black Friday e-commerce sales event expected to generate 500% normal peak traffic.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Organic growth vs inorganic event capacity planning and load testing is under consideration.",
    options: [
      { id: 'A', text: "Conduct load and stress testing, forecast inorganic demand spikes, and request quota increases in advance." },
      { id: 'B', text: "Order on-premises physical server racks 2 days before the sale begins." },
      { id: 'C', text: "Throttle all user web traffic to 1 request per minute during the holiday weekend." },
      { id: 'D', text: "Rely entirely on default reactive autoscaling without verifying regional cloud quota limits." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conduct load and stress testing, forecast inorganic demand spikes, and request quota increases in advance. Effective SRE capacity planning combines organic growth modeling with inorganic demand forecasting. Teams conduct synthetic stress tests to identify bottlenecks and proactively request cloud resource quota increases (vCPU, IP addresses, persistent disks) well ahead of marketing events.",
    referenceUrl: "https://sre.google/sre-book/capacity-planning/",
    tags: ["Capacity Management", "Capacity Planning", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-283",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Capacity Planning and Demand Forecasting: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Capacity Management to prepare cloud infrastructure capacity for an upcoming national Black Friday e-commerce sales event expected to generate 500% normal peak traffic.",
    question: "Which solution implements these mandatory compliance and security controls? Organic growth vs inorganic event capacity planning and load testing is under consideration.",
    options: [
      { id: 'A', text: "Throttle all user web traffic to 1 request per minute during the holiday weekend." },
      { id: 'B', text: "Conduct load and stress testing, forecast inorganic demand spikes, and request quota increases in advance." },
      { id: 'C', text: "Rely entirely on default reactive autoscaling without verifying regional cloud quota limits." },
      { id: 'D', text: "Order on-premises physical server racks 2 days before the sale begins." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Conduct load and stress testing, forecast inorganic demand spikes, and request quota increases in advance. Effective SRE capacity planning combines organic growth modeling with inorganic demand forecasting. Teams conduct synthetic stress tests to identify bottlenecks and proactively request cloud resource quota increases (vCPU, IP addresses, persistent disks) well ahead of marketing events.",
    referenceUrl: "https://sre.google/sre-book/capacity-planning/",
    tags: ["Capacity Management", "Capacity Planning", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-284",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Capacity Planning and Demand Forecasting: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Capacity Management to prepare cloud infrastructure capacity for an upcoming national Black Friday e-commerce sales event expected to generate 500% normal peak traffic.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Organic growth vs inorganic event capacity planning and load testing is under consideration.",
    options: [
      { id: 'A', text: "Order on-premises physical server racks 2 days before the sale begins." },
      { id: 'B', text: "Rely entirely on default reactive autoscaling without verifying regional cloud quota limits." },
      { id: 'C', text: "Conduct load and stress testing, forecast inorganic demand spikes, and request quota increases in advance." },
      { id: 'D', text: "Throttle all user web traffic to 1 request per minute during the holiday weekend." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Conduct load and stress testing, forecast inorganic demand spikes, and request quota increases in advance. Effective SRE capacity planning combines organic growth modeling with inorganic demand forecasting. Teams conduct synthetic stress tests to identify bottlenecks and proactively request cloud resource quota increases (vCPU, IP addresses, persistent disks) well ahead of marketing events.",
    referenceUrl: "https://sre.google/sre-book/capacity-planning/",
    tags: ["Capacity Management", "Capacity Planning", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-285",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Capacity Planning and Demand Forecasting: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Capacity Management to prepare cloud infrastructure capacity for an upcoming national Black Friday e-commerce sales event expected to generate 500% normal peak traffic.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Organic growth vs inorganic event capacity planning and load testing is under consideration.",
    options: [
      { id: 'A', text: "Rely entirely on default reactive autoscaling without verifying regional cloud quota limits." },
      { id: 'B', text: "Order on-premises physical server racks 2 days before the sale begins." },
      { id: 'C', text: "Throttle all user web traffic to 1 request per minute during the holiday weekend." },
      { id: 'D', text: "Conduct load and stress testing, forecast inorganic demand spikes, and request quota increases in advance." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conduct load and stress testing, forecast inorganic demand spikes, and request quota increases in advance. Effective SRE capacity planning combines organic growth modeling with inorganic demand forecasting. Teams conduct synthetic stress tests to identify bottlenecks and proactively request cloud resource quota increases (vCPU, IP addresses, persistent disks) well ahead of marketing events.",
    referenceUrl: "https://sre.google/sre-book/capacity-planning/",
    tags: ["Capacity Management", "Capacity Planning", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-286",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Canary Deployment Analysis and Automated Rollbacks: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Continuous Delivery to automatically detect if a new software release introduces memory leaks or increased HTTP 500 errors on 2% of live production traffic and roll back immediately.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Canary release analysis comparing metrics between canary and baseline pods is under consideration.",
    options: [
      { id: 'A', text: "Deploy the software update to 100% of production servers on Friday evening." },
      { id: 'B', text: "Manually inspect raw log files on each server during the deployment window." },
      { id: 'C', text: "Deploy a canary release alongside a baseline release and use automated metric analysis to trigger instant rollbacks upon regression." },
      { id: 'D', text: "Ask users on social media to report if they experience software bugs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy a canary release alongside a baseline release and use automated metric analysis to trigger instant rollbacks upon regression. Canary deployment analysis routes a small fraction of live user traffic to newly deployed instances (canary) while comparing error rates and latency against an identical baseline instance. Automated canary analysis halts the rollout and triggers instant rollbacks if anomalies are detected.",
    referenceUrl: "https://cloud.google.com/architecture/application-deployment-and-testing-strategies#canary_deployment",
    tags: ["Continuous Delivery", "Canary Analysis", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-287",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Canary Deployment Analysis and Automated Rollbacks: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Continuous Delivery to automatically detect if a new software release introduces memory leaks or increased HTTP 500 errors on 2% of live production traffic and roll back immediately.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Canary release analysis comparing metrics between canary and baseline pods is under consideration.",
    options: [
      { id: 'A', text: "Manually inspect raw log files on each server during the deployment window." },
      { id: 'B', text: "Ask users on social media to report if they experience software bugs." },
      { id: 'C', text: "Deploy the software update to 100% of production servers on Friday evening." },
      { id: 'D', text: "Deploy a canary release alongside a baseline release and use automated metric analysis to trigger instant rollbacks upon regression." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy a canary release alongside a baseline release and use automated metric analysis to trigger instant rollbacks upon regression. Canary deployment analysis routes a small fraction of live user traffic to newly deployed instances (canary) while comparing error rates and latency against an identical baseline instance. Automated canary analysis halts the rollout and triggers instant rollbacks if anomalies are detected.",
    referenceUrl: "https://cloud.google.com/architecture/application-deployment-and-testing-strategies#canary_deployment",
    tags: ["Continuous Delivery", "Canary Analysis", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-288",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Canary Deployment Analysis and Automated Rollbacks: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Continuous Delivery to automatically detect if a new software release introduces memory leaks or increased HTTP 500 errors on 2% of live production traffic and roll back immediately.",
    question: "Which solution implements these mandatory compliance and security controls? Canary release analysis comparing metrics between canary and baseline pods is under consideration.",
    options: [
      { id: 'A', text: "Deploy a canary release alongside a baseline release and use automated metric analysis to trigger instant rollbacks upon regression." },
      { id: 'B', text: "Deploy the software update to 100% of production servers on Friday evening." },
      { id: 'C', text: "Manually inspect raw log files on each server during the deployment window." },
      { id: 'D', text: "Ask users on social media to report if they experience software bugs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a canary release alongside a baseline release and use automated metric analysis to trigger instant rollbacks upon regression. Canary deployment analysis routes a small fraction of live user traffic to newly deployed instances (canary) while comparing error rates and latency against an identical baseline instance. Automated canary analysis halts the rollout and triggers instant rollbacks if anomalies are detected.",
    referenceUrl: "https://cloud.google.com/architecture/application-deployment-and-testing-strategies#canary_deployment",
    tags: ["Continuous Delivery", "Canary Analysis", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-289",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Canary Deployment Analysis and Automated Rollbacks: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Continuous Delivery to automatically detect if a new software release introduces memory leaks or increased HTTP 500 errors on 2% of live production traffic and roll back immediately.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Canary release analysis comparing metrics between canary and baseline pods is under consideration.",
    options: [
      { id: 'A', text: "Manually inspect raw log files on each server during the deployment window." },
      { id: 'B', text: "Ask users on social media to report if they experience software bugs." },
      { id: 'C', text: "Deploy the software update to 100% of production servers on Friday evening." },
      { id: 'D', text: "Deploy a canary release alongside a baseline release and use automated metric analysis to trigger instant rollbacks upon regression." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy a canary release alongside a baseline release and use automated metric analysis to trigger instant rollbacks upon regression. Canary deployment analysis routes a small fraction of live user traffic to newly deployed instances (canary) while comparing error rates and latency against an identical baseline instance. Automated canary analysis halts the rollout and triggers instant rollbacks if anomalies are detected.",
    referenceUrl: "https://cloud.google.com/architecture/application-deployment-and-testing-strategies#canary_deployment",
    tags: ["Continuous Delivery", "Canary Analysis", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-290",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Canary Deployment Analysis and Automated Rollbacks: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Continuous Delivery to automatically detect if a new software release introduces memory leaks or increased HTTP 500 errors on 2% of live production traffic and roll back immediately.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Canary release analysis comparing metrics between canary and baseline pods is under consideration.",
    options: [
      { id: 'A', text: "Deploy the software update to 100% of production servers on Friday evening." },
      { id: 'B', text: "Ask users on social media to report if they experience software bugs." },
      { id: 'C', text: "Manually inspect raw log files on each server during the deployment window." },
      { id: 'D', text: "Deploy a canary release alongside a baseline release and use automated metric analysis to trigger instant rollbacks upon regression." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy a canary release alongside a baseline release and use automated metric analysis to trigger instant rollbacks upon regression. Canary deployment analysis routes a small fraction of live user traffic to newly deployed instances (canary) while comparing error rates and latency against an identical baseline instance. Automated canary analysis halts the rollout and triggers instant rollbacks if anomalies are detected.",
    referenceUrl: "https://cloud.google.com/architecture/application-deployment-and-testing-strategies#canary_deployment",
    tags: ["Continuous Delivery", "Canary Analysis", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-291",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Disaster Recovery Testing: DiRT and Chaos Engineering: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Resilience Testing to validate that multi-region failover automation operates properly during real-world crises without waiting for an actual regional datacenter catastrophe.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Disaster Recovery Testing (DiRT) and intentional chaos fault injection is under consideration.",
    options: [
      { id: 'A', text: "Never test disaster recovery procedures to avoid risking service interruptions." },
      { id: 'B', text: "Assume multi-region failover scripts work based on whiteboard architectural designs." },
      { id: 'C', text: "Conduct scheduled Disaster Recovery Testing (DiRT) exercises and inject controlled failures into staging and production systems." },
      { id: 'D', text: "Wait for a real earthquake or blackout to test disaster recovery plans for the first time." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Conduct scheduled Disaster Recovery Testing (DiRT) exercises and inject controlled failures into staging and production systems. Google Disaster Recovery Testing (DiRT) exercises deliberately introduce large-scale simulated failures (simulating fiber cuts, regional outages, power grid collapses) into production and staging systems to test organizational readiness, automated failover systems, and disaster runbooks.",
    referenceUrl: "https://cloud.google.com/blog/products/management-tools/why-you-should-run-a-disaster-recovery-test",
    tags: ["Resilience Testing", "DiRT Testing", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-292",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Disaster Recovery Testing: DiRT and Chaos Engineering: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Resilience Testing to validate that multi-region failover automation operates properly during real-world crises without waiting for an actual regional datacenter catastrophe.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Disaster Recovery Testing (DiRT) and intentional chaos fault injection is under consideration.",
    options: [
      { id: 'A', text: "Conduct scheduled Disaster Recovery Testing (DiRT) exercises and inject controlled failures into staging and production systems." },
      { id: 'B', text: "Wait for a real earthquake or blackout to test disaster recovery plans for the first time." },
      { id: 'C', text: "Never test disaster recovery procedures to avoid risking service interruptions." },
      { id: 'D', text: "Assume multi-region failover scripts work based on whiteboard architectural designs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conduct scheduled Disaster Recovery Testing (DiRT) exercises and inject controlled failures into staging and production systems. Google Disaster Recovery Testing (DiRT) exercises deliberately introduce large-scale simulated failures (simulating fiber cuts, regional outages, power grid collapses) into production and staging systems to test organizational readiness, automated failover systems, and disaster runbooks.",
    referenceUrl: "https://cloud.google.com/blog/products/management-tools/why-you-should-run-a-disaster-recovery-test",
    tags: ["Resilience Testing", "DiRT Testing", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-293",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Disaster Recovery Testing: DiRT and Chaos Engineering: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Resilience Testing to validate that multi-region failover automation operates properly during real-world crises without waiting for an actual regional datacenter catastrophe.",
    question: "Which solution implements these mandatory compliance and security controls? Disaster Recovery Testing (DiRT) and intentional chaos fault injection is under consideration.",
    options: [
      { id: 'A', text: "Never test disaster recovery procedures to avoid risking service interruptions." },
      { id: 'B', text: "Conduct scheduled Disaster Recovery Testing (DiRT) exercises and inject controlled failures into staging and production systems." },
      { id: 'C', text: "Assume multi-region failover scripts work based on whiteboard architectural designs." },
      { id: 'D', text: "Wait for a real earthquake or blackout to test disaster recovery plans for the first time." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Conduct scheduled Disaster Recovery Testing (DiRT) exercises and inject controlled failures into staging and production systems. Google Disaster Recovery Testing (DiRT) exercises deliberately introduce large-scale simulated failures (simulating fiber cuts, regional outages, power grid collapses) into production and staging systems to test organizational readiness, automated failover systems, and disaster runbooks.",
    referenceUrl: "https://cloud.google.com/blog/products/management-tools/why-you-should-run-a-disaster-recovery-test",
    tags: ["Resilience Testing", "DiRT Testing", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-294",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Disaster Recovery Testing: DiRT and Chaos Engineering: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Resilience Testing to validate that multi-region failover automation operates properly during real-world crises without waiting for an actual regional datacenter catastrophe.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Disaster Recovery Testing (DiRT) and intentional chaos fault injection is under consideration.",
    options: [
      { id: 'A', text: "Never test disaster recovery procedures to avoid risking service interruptions." },
      { id: 'B', text: "Wait for a real earthquake or blackout to test disaster recovery plans for the first time." },
      { id: 'C', text: "Conduct scheduled Disaster Recovery Testing (DiRT) exercises and inject controlled failures into staging and production systems." },
      { id: 'D', text: "Assume multi-region failover scripts work based on whiteboard architectural designs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Conduct scheduled Disaster Recovery Testing (DiRT) exercises and inject controlled failures into staging and production systems. Google Disaster Recovery Testing (DiRT) exercises deliberately introduce large-scale simulated failures (simulating fiber cuts, regional outages, power grid collapses) into production and staging systems to test organizational readiness, automated failover systems, and disaster runbooks.",
    referenceUrl: "https://cloud.google.com/blog/products/management-tools/why-you-should-run-a-disaster-recovery-test",
    tags: ["Resilience Testing", "DiRT Testing", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-295",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Disaster Recovery Testing: DiRT and Chaos Engineering: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Resilience Testing to validate that multi-region failover automation operates properly during real-world crises without waiting for an actual regional datacenter catastrophe.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Disaster Recovery Testing (DiRT) and intentional chaos fault injection is under consideration.",
    options: [
      { id: 'A', text: "Wait for a real earthquake or blackout to test disaster recovery plans for the first time." },
      { id: 'B', text: "Conduct scheduled Disaster Recovery Testing (DiRT) exercises and inject controlled failures into staging and production systems." },
      { id: 'C', text: "Assume multi-region failover scripts work based on whiteboard architectural designs." },
      { id: 'D', text: "Never test disaster recovery procedures to avoid risking service interruptions." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Conduct scheduled Disaster Recovery Testing (DiRT) exercises and inject controlled failures into staging and production systems. Google Disaster Recovery Testing (DiRT) exercises deliberately introduce large-scale simulated failures (simulating fiber cuts, regional outages, power grid collapses) into production and staging systems to test organizational readiness, automated failover systems, and disaster runbooks.",
    referenceUrl: "https://cloud.google.com/blog/products/management-tools/why-you-should-run-a-disaster-recovery-test",
    tags: ["Resilience Testing", "DiRT Testing", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-296",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "On-Call Rotation Design and Alert Fatigue Mitigation: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates SRE Operations to mitigate severe on-call engineer burnout caused by hundreds of non-actionable alert pages firing every night.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Actionable on-call paging, alert hygiene, and maximum shift thresholds is under consideration.",
    options: [
      { id: 'A', text: "Instruct on-call engineers to ignore their pagers and sleep through nighttime alerts." },
      { id: 'B', text: "Require engineers to remain on-call 24 hours a day, 365 days a year without rotation." },
      { id: 'C', text: "Double the number of alerts to ensure no minor event is ever missed." },
      { id: 'D', text: "Audit alert rules: eliminate alerts that do not require immediate human action, convert non-urgent alerts into tickets, and enforce on-call paging limits." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Audit alert rules: eliminate alerts that do not require immediate human action, convert non-urgent alerts into tickets, and enforce on-call paging limits. Google SRE guidelines state that alerts must be strictly actionable, urgent, and represent real or imminent user impact. Alerts that do not require immediate manual intervention should be logged or turned into email digests/tickets, mitigating alert fatigue and preserving engineer focus.",
    referenceUrl: "https://sre.google/sre-book/being-on-call/",
    tags: ["SRE Operations", "On-Call Engineering", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-297",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "On-Call Rotation Design and Alert Fatigue Mitigation: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates SRE Operations to mitigate severe on-call engineer burnout caused by hundreds of non-actionable alert pages firing every night.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Actionable on-call paging, alert hygiene, and maximum shift thresholds is under consideration.",
    options: [
      { id: 'A', text: "Require engineers to remain on-call 24 hours a day, 365 days a year without rotation." },
      { id: 'B', text: "Instruct on-call engineers to ignore their pagers and sleep through nighttime alerts." },
      { id: 'C', text: "Audit alert rules: eliminate alerts that do not require immediate human action, convert non-urgent alerts into tickets, and enforce on-call paging limits." },
      { id: 'D', text: "Double the number of alerts to ensure no minor event is ever missed." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Audit alert rules: eliminate alerts that do not require immediate human action, convert non-urgent alerts into tickets, and enforce on-call paging limits. Google SRE guidelines state that alerts must be strictly actionable, urgent, and represent real or imminent user impact. Alerts that do not require immediate manual intervention should be logged or turned into email digests/tickets, mitigating alert fatigue and preserving engineer focus.",
    referenceUrl: "https://sre.google/sre-book/being-on-call/",
    tags: ["SRE Operations", "On-Call Engineering", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-298",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "On-Call Rotation Design and Alert Fatigue Mitigation: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates SRE Operations to mitigate severe on-call engineer burnout caused by hundreds of non-actionable alert pages firing every night.",
    question: "Which solution implements these mandatory compliance and security controls? Actionable on-call paging, alert hygiene, and maximum shift thresholds is under consideration.",
    options: [
      { id: 'A', text: "Instruct on-call engineers to ignore their pagers and sleep through nighttime alerts." },
      { id: 'B', text: "Audit alert rules: eliminate alerts that do not require immediate human action, convert non-urgent alerts into tickets, and enforce on-call paging limits." },
      { id: 'C', text: "Require engineers to remain on-call 24 hours a day, 365 days a year without rotation." },
      { id: 'D', text: "Double the number of alerts to ensure no minor event is ever missed." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Audit alert rules: eliminate alerts that do not require immediate human action, convert non-urgent alerts into tickets, and enforce on-call paging limits. Google SRE guidelines state that alerts must be strictly actionable, urgent, and represent real or imminent user impact. Alerts that do not require immediate manual intervention should be logged or turned into email digests/tickets, mitigating alert fatigue and preserving engineer focus.",
    referenceUrl: "https://sre.google/sre-book/being-on-call/",
    tags: ["SRE Operations", "On-Call Engineering", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-299",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "On-Call Rotation Design and Alert Fatigue Mitigation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates SRE Operations to mitigate severe on-call engineer burnout caused by hundreds of non-actionable alert pages firing every night.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Actionable on-call paging, alert hygiene, and maximum shift thresholds is under consideration.",
    options: [
      { id: 'A', text: "Require engineers to remain on-call 24 hours a day, 365 days a year without rotation." },
      { id: 'B', text: "Instruct on-call engineers to ignore their pagers and sleep through nighttime alerts." },
      { id: 'C', text: "Double the number of alerts to ensure no minor event is ever missed." },
      { id: 'D', text: "Audit alert rules: eliminate alerts that do not require immediate human action, convert non-urgent alerts into tickets, and enforce on-call paging limits." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Audit alert rules: eliminate alerts that do not require immediate human action, convert non-urgent alerts into tickets, and enforce on-call paging limits. Google SRE guidelines state that alerts must be strictly actionable, urgent, and represent real or imminent user impact. Alerts that do not require immediate manual intervention should be logged or turned into email digests/tickets, mitigating alert fatigue and preserving engineer focus.",
    referenceUrl: "https://sre.google/sre-book/being-on-call/",
    tags: ["SRE Operations", "On-Call Engineering", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-300",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "On-Call Rotation Design and Alert Fatigue Mitigation: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates SRE Operations to mitigate severe on-call engineer burnout caused by hundreds of non-actionable alert pages firing every night.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Actionable on-call paging, alert hygiene, and maximum shift thresholds is under consideration.",
    options: [
      { id: 'A', text: "Require engineers to remain on-call 24 hours a day, 365 days a year without rotation." },
      { id: 'B', text: "Instruct on-call engineers to ignore their pagers and sleep through nighttime alerts." },
      { id: 'C', text: "Audit alert rules: eliminate alerts that do not require immediate human action, convert non-urgent alerts into tickets, and enforce on-call paging limits." },
      { id: 'D', text: "Double the number of alerts to ensure no minor event is ever missed." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Audit alert rules: eliminate alerts that do not require immediate human action, convert non-urgent alerts into tickets, and enforce on-call paging limits. Google SRE guidelines state that alerts must be strictly actionable, urgent, and represent real or imminent user impact. Alerts that do not require immediate manual intervention should be logged or turned into email digests/tickets, mitigating alert fatigue and preserving engineer focus.",
    referenceUrl: "https://sre.google/sre-book/being-on-call/",
    tags: ["SRE Operations", "On-Call Engineering", "Resilience Failure"]
  }
];

export default GCP_PCDOE_QUESTIONS_12;
