export const GCP_PCA_QUESTIONS_17 = [
  {
    id: "gcp-pca-401",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Secret Manager Rotation and Automatic Secret Notification: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect needs to automatically trigger a Cloud Function to rotate an external database password every 30 days and update Secret Manager with the new version.",
    question: "Which concept or service configuration satisfies these operational resilience objectives?",
    options: [
      { id: 'A', text: "Store each new password as a new Secret Manager version and redeploy the application." },
      { id: 'B', text: "Instruct a system administrator to manually change the database password and update text files every month." },
      { id: 'C', text: "Configure a Secret Manager rotation schedule with an associated Cloud Pub/Sub topic triggering a rotation Cloud Function." },
      { id: 'D', text: "Keep the same database password permanently without rotation to avoid breaking applications." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a Secret Manager rotation schedule with an associated Cloud Pub/Sub topic triggering a rotation Cloud Function. Secret Manager supports automatic secret rotation schedules. When a secret reaches its rotation time, Secret Manager publishes an event to a designated Pub/Sub topic, which triggers an automated rotation workflow (such as a Cloud Function) to update the credential in both the target service and Secret Manager.",
    referenceUrl: "https://cloud.google.com/secret-manager/docs/rotating-secrets",
    tags: ["Secret Management","Secret Manager","Dr Failover"]
  },
  {
    id: "gcp-pca-402",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Secret Manager Rotation and Automatic Secret Notification: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect needs to automatically trigger a Cloud Function to rotate an external database password every 30 days and update Secret Manager with the new version.",
    question: "Which architectural approach should the team select to manage this demand efficiently?",
    options: [
      { id: 'A', text: "Store each new password as a new Secret Manager version and redeploy the application." },
      { id: 'B', text: "Keep the same database password permanently without rotation to avoid breaking applications." },
      { id: 'C', text: "Instruct a system administrator to manually change the database password and update text files every month." },
      { id: 'D', text: "Configure a Secret Manager rotation schedule with an associated Cloud Pub/Sub topic triggering a rotation Cloud Function." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a Secret Manager rotation schedule with an associated Cloud Pub/Sub topic triggering a rotation Cloud Function. Secret Manager supports automatic secret rotation schedules. When a secret reaches its rotation time, Secret Manager publishes an event to a designated Pub/Sub topic, which triggers an automated rotation workflow (such as a Cloud Function) to update the credential in both the target service and Secret Manager.",
    referenceUrl: "https://cloud.google.com/secret-manager/docs/rotating-secrets",
    tags: ["Secret Management","Secret Manager","High Load Scale"]
  },
  {
    id: "gcp-pca-403",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Secret Manager Rotation and Automatic Secret Notification: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect needs to automatically trigger a Cloud Function to rotate an external database password every 30 days and update Secret Manager with the new version.",
    question: "Which solution properly implements these mandatory security and governance controls?",
    options: [
      { id: 'A', text: "Store each new password as a new Secret Manager version and redeploy the application." },
      { id: 'B', text: "Keep the same database password permanently without rotation to avoid breaking applications." },
      { id: 'C', text: "Instruct a system administrator to manually change the database password and update text files every month." },
      { id: 'D', text: "Configure a Secret Manager rotation schedule with an associated Cloud Pub/Sub topic triggering a rotation Cloud Function." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a Secret Manager rotation schedule with an associated Cloud Pub/Sub topic triggering a rotation Cloud Function. Secret Manager supports automatic secret rotation schedules. When a secret reaches its rotation time, Secret Manager publishes an event to a designated Pub/Sub topic, which triggers an automated rotation workflow (such as a Cloud Function) to update the credential in both the target service and Secret Manager.",
    referenceUrl: "https://cloud.google.com/secret-manager/docs/rotating-secrets",
    tags: ["Secret Management","Secret Manager","Security Compliance"]
  },
  {
    id: "gcp-pca-404",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Secret Manager Rotation and Automatic Secret Notification: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect needs to automatically trigger a Cloud Function to rotate an external database password every 30 days and update Secret Manager with the new version.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals?",
    options: [
      { id: 'A', text: "Keep the same database password permanently without rotation to avoid breaking applications." },
      { id: 'B', text: "Store each new password as a new Secret Manager version and redeploy the application." },
      { id: 'C', text: "Configure a Secret Manager rotation schedule with an associated Cloud Pub/Sub topic triggering a rotation Cloud Function." },
      { id: 'D', text: "Instruct a system administrator to manually change the database password and update text files every month." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a Secret Manager rotation schedule with an associated Cloud Pub/Sub topic triggering a rotation Cloud Function. Secret Manager supports automatic secret rotation schedules. When a secret reaches its rotation time, Secret Manager publishes an event to a designated Pub/Sub topic, which triggers an automated rotation workflow (such as a Cloud Function) to update the credential in both the target service and Secret Manager.",
    referenceUrl: "https://cloud.google.com/secret-manager/docs/rotating-secrets",
    tags: ["Secret Management","Secret Manager","Hybrid Migration"]
  },
  {
    id: "gcp-pca-405",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Secret Manager Rotation and Automatic Secret Notification: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect needs to automatically trigger a Cloud Function to rotate an external database password every 30 days and update Secret Manager with the new version.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management?",
    options: [
      { id: 'A', text: "Store each new password as a new Secret Manager version and redeploy the application." },
      { id: 'B', text: "Instruct a system administrator to manually change the database password and update text files every month." },
      { id: 'C', text: "Keep the same database password permanently without rotation to avoid breaking applications." },
      { id: 'D', text: "Configure a Secret Manager rotation schedule with an associated Cloud Pub/Sub topic triggering a rotation Cloud Function." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a Secret Manager rotation schedule with an associated Cloud Pub/Sub topic triggering a rotation Cloud Function. Secret Manager supports automatic secret rotation schedules. When a secret reaches its rotation time, Secret Manager publishes an event to a designated Pub/Sub topic, which triggers an automated rotation workflow (such as a Cloud Function) to update the credential in both the target service and Secret Manager.",
    referenceUrl: "https://cloud.google.com/secret-manager/docs/rotating-secrets",
    tags: ["Secret Management","Secret Manager","Resilience Failure"]
  },
  {
    id: "gcp-pca-406",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Committed Use Discounts (CUDs) vs Spot VMs: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect needs to optimize compute spending for a predictable 24/7 production core database running 100 vCPUs, alongside a batch video encoding pipeline that can tolerate sudden VM preemptions.",
    question: "Which concept or service configuration satisfies these operational resilience objectives?",
    options: [
      { id: 'A', text: "Committed use discounts for the database, Spot VMs for encoding." },
      { id: 'B', text: "Run the production mission-critical database on Spot VMs without persistent backups." },
      { id: 'C', text: "Purchase 10-year upfront physical hardware leases." },
      { id: 'D', text: "Run all workloads on on-demand instances at list price." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Purchase 1-year or 3-year Committed Use Discounts (CUDs) for the database, and use Spot VMs for the batch encoding pipeline. Committed Use Discounts (CUDs) provide deep discounts (up to 57-70%) in exchange for a 1-year or 3-year commitment, ideal for steady-state production workloads. Spot VMs offer up to 91% discount for fault-tolerant workloads that can withstand preemption when compute capacity is reclaimed.",
    referenceUrl: "https://cloud.google.com/compute/docs/sustained-use-discounts#committed-use-discounts",
    tags: ["Cloud Cost Optimization","Cost Optimization","Dr Failover"]
  },
  {
    id: "gcp-pca-407",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Committed Use Discounts (CUDs) vs Spot VMs: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect needs to optimize compute spending for a predictable 24/7 production core database running 100 vCPUs, alongside a batch video encoding pipeline that can tolerate sudden VM preemptions.",
    question: "Which architectural approach should the team select to manage this demand efficiently?",
    options: [
      { id: 'A', text: "Committed use discounts for the database, Spot VMs for encoding." },
      { id: 'B', text: "Purchase 10-year upfront physical hardware leases." },
      { id: 'C', text: "Run the production mission-critical database on Spot VMs without persistent backups." },
      { id: 'D', text: "Run all workloads on on-demand instances at list price." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Purchase 1-year or 3-year Committed Use Discounts (CUDs) for the database, and use Spot VMs for the batch encoding pipeline. Committed Use Discounts (CUDs) provide deep discounts (up to 57-70%) in exchange for a 1-year or 3-year commitment, ideal for steady-state production workloads. Spot VMs offer up to 91% discount for fault-tolerant workloads that can withstand preemption when compute capacity is reclaimed.",
    referenceUrl: "https://cloud.google.com/compute/docs/sustained-use-discounts#committed-use-discounts",
    tags: ["Cloud Cost Optimization","Cost Optimization","High Load Scale"]
  },
  {
    id: "gcp-pca-408",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Committed Use Discounts (CUDs) vs Spot VMs: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect needs to optimize compute spending for a predictable 24/7 production core database running 100 vCPUs, alongside a batch video encoding pipeline that can tolerate sudden VM preemptions.",
    question: "Which solution properly implements these mandatory security and governance controls?",
    options: [
      { id: 'A', text: "Run all workloads on on-demand instances at list price." },
      { id: 'B', text: "Committed use discounts for the database, Spot VMs for encoding." },
      { id: 'C', text: "Purchase 10-year upfront physical hardware leases." },
      { id: 'D', text: "Run the production mission-critical database on Spot VMs without persistent backups." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Purchase 1-year or 3-year Committed Use Discounts (CUDs) for the database, and use Spot VMs for the batch encoding pipeline. Committed Use Discounts (CUDs) provide deep discounts (up to 57-70%) in exchange for a 1-year or 3-year commitment, ideal for steady-state production workloads. Spot VMs offer up to 91% discount for fault-tolerant workloads that can withstand preemption when compute capacity is reclaimed.",
    referenceUrl: "https://cloud.google.com/compute/docs/sustained-use-discounts#committed-use-discounts",
    tags: ["Cloud Cost Optimization","Cost Optimization","Security Compliance"]
  },
  {
    id: "gcp-pca-409",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Committed Use Discounts (CUDs) vs Spot VMs: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect needs to optimize compute spending for a predictable 24/7 production core database running 100 vCPUs, alongside a batch video encoding pipeline that can tolerate sudden VM preemptions.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals?",
    options: [
      { id: 'A', text: "Committed use discounts for the database, Spot VMs for encoding." },
      { id: 'B', text: "Purchase 10-year upfront physical hardware leases." },
      { id: 'C', text: "Run all workloads on on-demand instances at list price." },
      { id: 'D', text: "Run the production mission-critical database on Spot VMs without persistent backups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Purchase 1-year or 3-year Committed Use Discounts (CUDs) for the database, and use Spot VMs for the batch encoding pipeline. Committed Use Discounts (CUDs) provide deep discounts (up to 57-70%) in exchange for a 1-year or 3-year commitment, ideal for steady-state production workloads. Spot VMs offer up to 91% discount for fault-tolerant workloads that can withstand preemption when compute capacity is reclaimed.",
    referenceUrl: "https://cloud.google.com/compute/docs/sustained-use-discounts#committed-use-discounts",
    tags: ["Cloud Cost Optimization","Cost Optimization","Hybrid Migration"]
  },
  {
    id: "gcp-pca-410",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Committed Use Discounts (CUDs) vs Spot VMs: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect needs to optimize compute spending for a predictable 24/7 production core database running 100 vCPUs, alongside a batch video encoding pipeline that can tolerate sudden VM preemptions.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management?",
    options: [
      { id: 'A', text: "Run the production mission-critical database on Spot VMs without persistent backups." },
      { id: 'B', text: "Committed use discounts for the database, Spot VMs for encoding." },
      { id: 'C', text: "Run all workloads on on-demand instances at list price." },
      { id: 'D', text: "Purchase 10-year upfront physical hardware leases." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Purchase 1-year or 3-year Committed Use Discounts (CUDs) for the database, and use Spot VMs for the batch encoding pipeline. Committed Use Discounts (CUDs) provide deep discounts (up to 57-70%) in exchange for a 1-year or 3-year commitment, ideal for steady-state production workloads. Spot VMs offer up to 91% discount for fault-tolerant workloads that can withstand preemption when compute capacity is reclaimed.",
    referenceUrl: "https://cloud.google.com/compute/docs/sustained-use-discounts#committed-use-discounts",
    tags: ["Cloud Cost Optimization","Cost Optimization","Resilience Failure"]
  },
  {
    id: "gcp-pca-411",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Google Cloud Active Assist Recommender: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect needs to identify oversized virtual machines across 50 projects and uncover unattached persistent disks to reduce enterprise cloud waste automatically.",
    question: "Which concept or service configuration satisfies these operational resilience objectives?",
    options: [
      { id: 'A', text: "Alert on low CPU in Cloud Monitoring and resize each instance when it fires." },
      { id: 'B', text: "Apply rightsizing recommendations from Active Assist." },
      { id: 'C', text: "Export CPU metrics to BigQuery and build a sizing query over the history." },
      { id: 'D', text: "Hire external consultants to conduct annual physical hardware reviews." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Review and apply VM rightsizing and idle resource recommendations provided by Active Assist Recommender. Active Assist is a portfolio of intelligent tools that use machine learning to analyze usage patterns and generate actionable recommendations. The VM Recommender identifies underutilized or idle VMs and unattached disks, projecting monthly cost savings and optimizing performance.",
    referenceUrl: "https://cloud.google.com/recommender/docs/overview",
    tags: ["Cloud Optimization","Active Assist","Dr Failover"]
  },
  {
    id: "gcp-pca-412",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Google Cloud Active Assist Recommender: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect needs to identify oversized virtual machines across 50 projects and uncover unattached persistent disks to reduce enterprise cloud waste automatically.",
    question: "Which architectural approach should the team select to manage this demand efficiently?",
    options: [
      { id: 'A', text: "Apply rightsizing recommendations from Active Assist." },
      { id: 'B', text: "Hire external consultants to conduct annual physical hardware reviews." },
      { id: 'C', text: "Alert on low CPU in Cloud Monitoring and resize each instance when it fires." },
      { id: 'D', text: "Export CPU metrics to BigQuery and build a sizing query over the history." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Review and apply VM rightsizing and idle resource recommendations provided by Active Assist Recommender. Active Assist is a portfolio of intelligent tools that use machine learning to analyze usage patterns and generate actionable recommendations. The VM Recommender identifies underutilized or idle VMs and unattached disks, projecting monthly cost savings and optimizing performance.",
    referenceUrl: "https://cloud.google.com/recommender/docs/overview",
    tags: ["Cloud Optimization","Active Assist","High Load Scale"]
  },
  {
    id: "gcp-pca-413",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Google Cloud Active Assist Recommender: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect needs to identify oversized virtual machines across 50 projects and uncover unattached persistent disks to reduce enterprise cloud waste automatically.",
    question: "Which solution properly implements these mandatory security and governance controls?",
    options: [
      { id: 'A', text: "Export CPU metrics to BigQuery and build a sizing query over the history." },
      { id: 'B', text: "Hire external consultants to conduct annual physical hardware reviews." },
      { id: 'C', text: "Alert on low CPU in Cloud Monitoring and resize each instance when it fires." },
      { id: 'D', text: "Apply rightsizing recommendations from Active Assist." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Review and apply VM rightsizing and idle resource recommendations provided by Active Assist Recommender. Active Assist is a portfolio of intelligent tools that use machine learning to analyze usage patterns and generate actionable recommendations. The VM Recommender identifies underutilized or idle VMs and unattached disks, projecting monthly cost savings and optimizing performance.",
    referenceUrl: "https://cloud.google.com/recommender/docs/overview",
    tags: ["Cloud Optimization","Active Assist","Security Compliance"]
  },
  {
    id: "gcp-pca-414",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Google Cloud Active Assist Recommender: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect needs to identify oversized virtual machines across 50 projects and uncover unattached persistent disks to reduce enterprise cloud waste automatically.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals?",
    options: [
      { id: 'A', text: "Export CPU metrics to BigQuery and build a sizing query over the history." },
      { id: 'B', text: "Alert on low CPU in Cloud Monitoring and resize each instance when it fires." },
      { id: 'C', text: "Hire external consultants to conduct annual physical hardware reviews." },
      { id: 'D', text: "Apply rightsizing recommendations from Active Assist." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Review and apply VM rightsizing and idle resource recommendations provided by Active Assist Recommender. Active Assist is a portfolio of intelligent tools that use machine learning to analyze usage patterns and generate actionable recommendations. The VM Recommender identifies underutilized or idle VMs and unattached disks, projecting monthly cost savings and optimizing performance.",
    referenceUrl: "https://cloud.google.com/recommender/docs/overview",
    tags: ["Cloud Optimization","Active Assist","Hybrid Migration"]
  },
  {
    id: "gcp-pca-415",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Google Cloud Active Assist Recommender: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect needs to identify oversized virtual machines across 50 projects and uncover unattached persistent disks to reduce enterprise cloud waste automatically.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management?",
    options: [
      { id: 'A', text: "Apply rightsizing recommendations from Active Assist." },
      { id: 'B', text: "Hire external consultants to conduct annual physical hardware reviews." },
      { id: 'C', text: "Alert on low CPU in Cloud Monitoring and resize each instance when it fires." },
      { id: 'D', text: "Export CPU metrics to BigQuery and build a sizing query over the history." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Review and apply VM rightsizing and idle resource recommendations provided by Active Assist Recommender. Active Assist is a portfolio of intelligent tools that use machine learning to analyze usage patterns and generate actionable recommendations. The VM Recommender identifies underutilized or idle VMs and unattached disks, projecting monthly cost savings and optimizing performance.",
    referenceUrl: "https://cloud.google.com/recommender/docs/overview",
    tags: ["Cloud Optimization","Active Assist","Resilience Failure"]
  },
  {
    id: "gcp-pca-416",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Cloud Architecture Framework Five Pillars: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect needs to conduct a formal architectural well-architected review of an enterprise banking solution before production launch against Google Cloud best practices.",
    question: "Which concept or service configuration satisfies these operational resilience objectives?",
    options: [
      { id: 'A', text: "Rely solely on developer intuition and informal verbal discussions." },
      { id: 'B', text: "Skip architecture validation to accelerate immediate feature deployment." },
      { id: 'C', text: "Evaluate the architecture against the five pillars of the Google Cloud Architecture Framework." },
      { id: 'D', text: "Conduct a compliance review focused strictly on physical data center door locks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Evaluate the architecture against the five pillars of the Google Cloud Architecture Framework. The Google Cloud Architecture Framework provides architectural best practices and recommendations across five core pillars: System Design, Operational Excellence, Security/Privacy/Compliance, Reliability, and Cost Optimization, guiding resilient, secure, and scalable cloud designs.",
    referenceUrl: "https://cloud.google.com/architecture/framework",
    tags: ["Cloud Architecture Framework","Architecture Framework","Dr Failover"]
  },
  {
    id: "gcp-pca-417",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Cloud Architecture Framework Five Pillars: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect needs to conduct a formal architectural well-architected review of an enterprise banking solution before production launch against Google Cloud best practices.",
    question: "Which architectural approach should the team select to manage this demand efficiently?",
    options: [
      { id: 'A', text: "Evaluate the architecture against the five pillars of the Google Cloud Architecture Framework." },
      { id: 'B', text: "Skip architecture validation to accelerate immediate feature deployment." },
      { id: 'C', text: "Rely solely on developer intuition and informal verbal discussions." },
      { id: 'D', text: "Conduct a compliance review focused strictly on physical data center door locks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Evaluate the architecture against the five pillars of the Google Cloud Architecture Framework. The Google Cloud Architecture Framework provides architectural best practices and recommendations across five core pillars: System Design, Operational Excellence, Security/Privacy/Compliance, Reliability, and Cost Optimization, guiding resilient, secure, and scalable cloud designs.",
    referenceUrl: "https://cloud.google.com/architecture/framework",
    tags: ["Cloud Architecture Framework","Architecture Framework","High Load Scale"]
  },
  {
    id: "gcp-pca-418",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Cloud Architecture Framework Five Pillars: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect needs to conduct a formal architectural well-architected review of an enterprise banking solution before production launch against Google Cloud best practices.",
    question: "Which solution properly implements these mandatory security and governance controls?",
    options: [
      { id: 'A', text: "Rely solely on developer intuition and informal verbal discussions." },
      { id: 'B', text: "Evaluate the architecture against the five pillars of the Google Cloud Architecture Framework." },
      { id: 'C', text: "Conduct a compliance review focused strictly on physical data center door locks." },
      { id: 'D', text: "Skip architecture validation to accelerate immediate feature deployment." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Evaluate the architecture against the five pillars of the Google Cloud Architecture Framework. The Google Cloud Architecture Framework provides architectural best practices and recommendations across five core pillars: System Design, Operational Excellence, Security/Privacy/Compliance, Reliability, and Cost Optimization, guiding resilient, secure, and scalable cloud designs.",
    referenceUrl: "https://cloud.google.com/architecture/framework",
    tags: ["Cloud Architecture Framework","Architecture Framework","Security Compliance"]
  },
  {
    id: "gcp-pca-419",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Cloud Architecture Framework Five Pillars: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect needs to conduct a formal architectural well-architected review of an enterprise banking solution before production launch against Google Cloud best practices.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals?",
    options: [
      { id: 'A', text: "Skip architecture validation to accelerate immediate feature deployment." },
      { id: 'B', text: "Rely solely on developer intuition and informal verbal discussions." },
      { id: 'C', text: "Evaluate the architecture against the five pillars of the Google Cloud Architecture Framework." },
      { id: 'D', text: "Conduct a compliance review focused strictly on physical data center door locks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Evaluate the architecture against the five pillars of the Google Cloud Architecture Framework. The Google Cloud Architecture Framework provides architectural best practices and recommendations across five core pillars: System Design, Operational Excellence, Security/Privacy/Compliance, Reliability, and Cost Optimization, guiding resilient, secure, and scalable cloud designs.",
    referenceUrl: "https://cloud.google.com/architecture/framework",
    tags: ["Cloud Architecture Framework","Architecture Framework","Hybrid Migration"]
  },
  {
    id: "gcp-pca-420",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Cloud Architecture Framework Five Pillars: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect needs to conduct a formal architectural well-architected review of an enterprise banking solution before production launch against Google Cloud best practices.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management?",
    options: [
      { id: 'A', text: "Conduct a compliance review focused strictly on physical data center door locks." },
      { id: 'B', text: "Evaluate the architecture against the five pillars of the Google Cloud Architecture Framework." },
      { id: 'C', text: "Skip architecture validation to accelerate immediate feature deployment." },
      { id: 'D', text: "Rely solely on developer intuition and informal verbal discussions." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Evaluate the architecture against the five pillars of the Google Cloud Architecture Framework. The Google Cloud Architecture Framework provides architectural best practices and recommendations across five core pillars: System Design, Operational Excellence, Security/Privacy/Compliance, Reliability, and Cost Optimization, guiding resilient, secure, and scalable cloud designs.",
    referenceUrl: "https://cloud.google.com/architecture/framework",
    tags: ["Cloud Architecture Framework","Architecture Framework","Resilience Failure"]
  },
  {
    id: "gcp-pca-421",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Cloud Storage Autoclass for Dynamic Tiering: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect needs to eliminate manual lifecycle management rules for an unstructured analytics bucket with unpredictable, shifting data access patterns.",
    question: "Which concept or service configuration satisfies these operational resilience objectives?",
    options: [
      { id: 'A', text: "Write a custom background thread that modifies storage classes daily via REST API calls." },
      { id: 'B', text: "Enable Autoclass so objects move between classes by access." },
      { id: 'C', text: "Set all objects permanently to Standard storage class." },
      { id: 'D', text: "Delete data after 30 days regardless of whether analysts still need it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Cloud Storage Autoclass on the bucket to automatically transition objects between hot and cold classes based on access history. Cloud Storage Autoclass automatically transitions objects between storage classes (Standard, Nearline, Coldline, and Archive) based on each object's access pattern, eliminating manual lifecycle policy administration and avoiding early deletion or retrieval fees.",
    referenceUrl: "https://cloud.google.com/storage/docs/autoclass",
    tags: ["Cloud Storage Optimization","Storage Optimization","Dr Failover"]
  },
  {
    id: "gcp-pca-422",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Cloud Storage Autoclass for Dynamic Tiering: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect needs to eliminate manual lifecycle management rules for an unstructured analytics bucket with unpredictable, shifting data access patterns.",
    question: "Which architectural approach should the team select to manage this demand efficiently?",
    options: [
      { id: 'A', text: "Set all objects permanently to Standard storage class." },
      { id: 'B', text: "Write a custom background thread that modifies storage classes daily via REST API calls." },
      { id: 'C', text: "Delete data after 30 days regardless of whether analysts still need it." },
      { id: 'D', text: "Enable Autoclass so objects move between classes by access." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Cloud Storage Autoclass on the bucket to automatically transition objects between hot and cold classes based on access history. Cloud Storage Autoclass automatically transitions objects between storage classes (Standard, Nearline, Coldline, and Archive) based on each object's access pattern, eliminating manual lifecycle policy administration and avoiding early deletion or retrieval fees.",
    referenceUrl: "https://cloud.google.com/storage/docs/autoclass",
    tags: ["Cloud Storage Optimization","Storage Optimization","High Load Scale"]
  },
  {
    id: "gcp-pca-423",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Cloud Storage Autoclass for Dynamic Tiering: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect needs to eliminate manual lifecycle management rules for an unstructured analytics bucket with unpredictable, shifting data access patterns.",
    question: "Which solution properly implements these mandatory security and governance controls?",
    options: [
      { id: 'A', text: "Delete data after 30 days regardless of whether analysts still need it." },
      { id: 'B', text: "Enable Autoclass so objects move between classes by access." },
      { id: 'C', text: "Set all objects permanently to Standard storage class." },
      { id: 'D', text: "Write a custom background thread that modifies storage classes daily via REST API calls." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Cloud Storage Autoclass on the bucket to automatically transition objects between hot and cold classes based on access history. Cloud Storage Autoclass automatically transitions objects between storage classes (Standard, Nearline, Coldline, and Archive) based on each object's access pattern, eliminating manual lifecycle policy administration and avoiding early deletion or retrieval fees.",
    referenceUrl: "https://cloud.google.com/storage/docs/autoclass",
    tags: ["Cloud Storage Optimization","Storage Optimization","Security Compliance"]
  },
  {
    id: "gcp-pca-424",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Cloud Storage Autoclass for Dynamic Tiering: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect needs to eliminate manual lifecycle management rules for an unstructured analytics bucket with unpredictable, shifting data access patterns.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals?",
    options: [
      { id: 'A', text: "Enable Autoclass so objects move between classes by access." },
      { id: 'B', text: "Delete data after 30 days regardless of whether analysts still need it." },
      { id: 'C', text: "Set all objects permanently to Standard storage class." },
      { id: 'D', text: "Write a custom background thread that modifies storage classes daily via REST API calls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Cloud Storage Autoclass on the bucket to automatically transition objects between hot and cold classes based on access history. Cloud Storage Autoclass automatically transitions objects between storage classes (Standard, Nearline, Coldline, and Archive) based on each object's access pattern, eliminating manual lifecycle policy administration and avoiding early deletion or retrieval fees.",
    referenceUrl: "https://cloud.google.com/storage/docs/autoclass",
    tags: ["Cloud Storage Optimization","Storage Optimization","Hybrid Migration"]
  },
  {
    id: "gcp-pca-425",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Cloud Storage Autoclass for Dynamic Tiering: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect needs to eliminate manual lifecycle management rules for an unstructured analytics bucket with unpredictable, shifting data access patterns.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management?",
    options: [
      { id: 'A', text: "Enable Autoclass so objects move between classes by access." },
      { id: 'B', text: "Set all objects permanently to Standard storage class." },
      { id: 'C', text: "Delete data after 30 days regardless of whether analysts still need it." },
      { id: 'D', text: "Write a custom background thread that modifies storage classes daily via REST API calls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Cloud Storage Autoclass on the bucket to automatically transition objects between hot and cold classes based on access history. Cloud Storage Autoclass automatically transitions objects between storage classes (Standard, Nearline, Coldline, and Archive) based on each object's access pattern, eliminating manual lifecycle policy administration and avoiding early deletion or retrieval fees.",
    referenceUrl: "https://cloud.google.com/storage/docs/autoclass",
    tags: ["Cloud Storage Optimization","Storage Optimization","Resilience Failure"]
  }
];

export default GCP_PCA_QUESTIONS_17;
