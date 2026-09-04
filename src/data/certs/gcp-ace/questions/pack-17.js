export const GCP_ACE_QUESTIONS_17 = [
  {
    id: "gcp-ace-401",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Artifact Registry (Docker / OCI Repositories): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Artifact Registry to store, version, and manage private Docker container images with integrated vulnerability scanning and fine-grained IAM access control.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Artifact Registry managing container images and language packages is under consideration.",
    options: [
      { id: 'A', text: "Upload Docker image tarballs to an unencrypted public Cloud Storage bucket." },
      { id: 'B', text: "Store container source code directly in an unversioned Compute Engine persistent disk." },
      { id: 'C', text: "Push container images to an unauthenticated public registry on the internet." },
      { id: 'D', text: "Create a Docker repository in Artifact Registry and configure Docker authentication using 'gcloud auth configure-docker'." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a Docker repository in Artifact Registry and configure Docker authentication using 'gcloud auth configure-docker'. Artifact Registry is the next-generation container and package management service in Google Cloud, replacing Container Registry (GCR). It supports Docker images, Helm charts, and language packages (npm, maven, python) with granular IAM and automatic vulnerability scanning.",
    referenceUrl: "https://cloud.google.com/artifact-registry/docs/docker/store-docker-container-images",
    tags: ["Artifact Registry", "Artifact Registry", "Dr Failover"]
  },
  {
    id: "gcp-ace-402",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Artifact Registry (Docker / OCI Repositories): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Artifact Registry to store, version, and manage private Docker container images with integrated vulnerability scanning and fine-grained IAM access control.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Artifact Registry managing container images and language packages is under consideration.",
    options: [
      { id: 'A', text: "Create a Docker repository in Artifact Registry and configure Docker authentication using 'gcloud auth configure-docker'." },
      { id: 'B', text: "Upload Docker image tarballs to an unencrypted public Cloud Storage bucket." },
      { id: 'C', text: "Push container images to an unauthenticated public registry on the internet." },
      { id: 'D', text: "Store container source code directly in an unversioned Compute Engine persistent disk." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Docker repository in Artifact Registry and configure Docker authentication using 'gcloud auth configure-docker'. Artifact Registry is the next-generation container and package management service in Google Cloud, replacing Container Registry (GCR). It supports Docker images, Helm charts, and language packages (npm, maven, python) with granular IAM and automatic vulnerability scanning.",
    referenceUrl: "https://cloud.google.com/artifact-registry/docs/docker/store-docker-container-images",
    tags: ["Artifact Registry", "Artifact Registry", "High Load Scale"]
  },
  {
    id: "gcp-ace-403",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Artifact Registry (Docker / OCI Repositories): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Artifact Registry to store, version, and manage private Docker container images with integrated vulnerability scanning and fine-grained IAM access control.",
    question: "Which solution properly implements these mandatory security and governance controls? Artifact Registry managing container images and language packages is under consideration.",
    options: [
      { id: 'A', text: "Upload Docker image tarballs to an unencrypted public Cloud Storage bucket." },
      { id: 'B', text: "Create a Docker repository in Artifact Registry and configure Docker authentication using 'gcloud auth configure-docker'." },
      { id: 'C', text: "Push container images to an unauthenticated public registry on the internet." },
      { id: 'D', text: "Store container source code directly in an unversioned Compute Engine persistent disk." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a Docker repository in Artifact Registry and configure Docker authentication using 'gcloud auth configure-docker'. Artifact Registry is the next-generation container and package management service in Google Cloud, replacing Container Registry (GCR). It supports Docker images, Helm charts, and language packages (npm, maven, python) with granular IAM and automatic vulnerability scanning.",
    referenceUrl: "https://cloud.google.com/artifact-registry/docs/docker/store-docker-container-images",
    tags: ["Artifact Registry", "Artifact Registry", "Security Compliance"]
  },
  {
    id: "gcp-ace-404",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Artifact Registry (Docker / OCI Repositories): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Artifact Registry to store, version, and manage private Docker container images with integrated vulnerability scanning and fine-grained IAM access control.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Artifact Registry managing container images and language packages is under consideration.",
    options: [
      { id: 'A', text: "Upload Docker image tarballs to an unencrypted public Cloud Storage bucket." },
      { id: 'B', text: "Store container source code directly in an unversioned Compute Engine persistent disk." },
      { id: 'C', text: "Create a Docker repository in Artifact Registry and configure Docker authentication using 'gcloud auth configure-docker'." },
      { id: 'D', text: "Push container images to an unauthenticated public registry on the internet." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a Docker repository in Artifact Registry and configure Docker authentication using 'gcloud auth configure-docker'. Artifact Registry is the next-generation container and package management service in Google Cloud, replacing Container Registry (GCR). It supports Docker images, Helm charts, and language packages (npm, maven, python) with granular IAM and automatic vulnerability scanning.",
    referenceUrl: "https://cloud.google.com/artifact-registry/docs/docker/store-docker-container-images",
    tags: ["Artifact Registry", "Artifact Registry", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-405",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Artifact Registry (Docker / OCI Repositories): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Artifact Registry to store, version, and manage private Docker container images with integrated vulnerability scanning and fine-grained IAM access control.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Artifact Registry managing container images and language packages is under consideration.",
    options: [
      { id: 'A', text: "Push container images to an unauthenticated public registry on the internet." },
      { id: 'B', text: "Upload Docker image tarballs to an unencrypted public Cloud Storage bucket." },
      { id: 'C', text: "Create a Docker repository in Artifact Registry and configure Docker authentication using 'gcloud auth configure-docker'." },
      { id: 'D', text: "Store container source code directly in an unversioned Compute Engine persistent disk." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a Docker repository in Artifact Registry and configure Docker authentication using 'gcloud auth configure-docker'. Artifact Registry is the next-generation container and package management service in Google Cloud, replacing Container Registry (GCR). It supports Docker images, Helm charts, and language packages (npm, maven, python) with granular IAM and automatic vulnerability scanning.",
    referenceUrl: "https://cloud.google.com/artifact-registry/docs/docker/store-docker-container-images",
    tags: ["Artifact Registry", "Artifact Registry", "Resilience Failure"]
  },
  {
    id: "gcp-ace-406",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Monitoring Dashboards and Metrics Explorer: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Cloud Monitoring to create a centralized operations dashboard displaying real-time CPU utilization, network egress, and disk IOPS across 50 Compute Engine instances.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Metrics Explorer, custom dashboards, and resource utilization graphs is under consideration.",
    options: [
      { id: 'A', text: "Export data to a local spreadsheet and generate graphs manually." },
      { id: 'B', text: "Log into each of the 50 virtual machines via SSH and run the 'top' command." },
      { id: 'C', text: "Create a custom Cloud Monitoring Dashboard and add charts configured via Metrics Explorer." },
      { id: 'D', text: "Review historical billing CSV exports once per month." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a custom Cloud Monitoring Dashboard and add charts configured via Metrics Explorer. Cloud Monitoring collects metrics, events, and metadata from Google Cloud services and infrastructure. The Metrics Explorer allows querying and visualizing system and custom metrics, which can be pinned to custom dashboards for real-time operational visibility.",
    referenceUrl: "https://cloud.google.com/monitoring/charts/dashboards",
    tags: ["Cloud Monitoring", "Monitoring", "Dr Failover"]
  },
  {
    id: "gcp-ace-407",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Monitoring Dashboards and Metrics Explorer: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Cloud Monitoring to create a centralized operations dashboard displaying real-time CPU utilization, network egress, and disk IOPS across 50 Compute Engine instances.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Metrics Explorer, custom dashboards, and resource utilization graphs is under consideration.",
    options: [
      { id: 'A', text: "Export data to a local spreadsheet and generate graphs manually." },
      { id: 'B', text: "Log into each of the 50 virtual machines via SSH and run the 'top' command." },
      { id: 'C', text: "Create a custom Cloud Monitoring Dashboard and add charts configured via Metrics Explorer." },
      { id: 'D', text: "Review historical billing CSV exports once per month." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a custom Cloud Monitoring Dashboard and add charts configured via Metrics Explorer. Cloud Monitoring collects metrics, events, and metadata from Google Cloud services and infrastructure. The Metrics Explorer allows querying and visualizing system and custom metrics, which can be pinned to custom dashboards for real-time operational visibility.",
    referenceUrl: "https://cloud.google.com/monitoring/charts/dashboards",
    tags: ["Cloud Monitoring", "Monitoring", "High Load Scale"]
  },
  {
    id: "gcp-ace-408",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Monitoring Dashboards and Metrics Explorer: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Cloud Monitoring to create a centralized operations dashboard displaying real-time CPU utilization, network egress, and disk IOPS across 50 Compute Engine instances.",
    question: "Which solution properly implements these mandatory security and governance controls? Metrics Explorer, custom dashboards, and resource utilization graphs is under consideration.",
    options: [
      { id: 'A', text: "Create a custom Cloud Monitoring Dashboard and add charts configured via Metrics Explorer." },
      { id: 'B', text: "Review historical billing CSV exports once per month." },
      { id: 'C', text: "Export data to a local spreadsheet and generate graphs manually." },
      { id: 'D', text: "Log into each of the 50 virtual machines via SSH and run the 'top' command." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a custom Cloud Monitoring Dashboard and add charts configured via Metrics Explorer. Cloud Monitoring collects metrics, events, and metadata from Google Cloud services and infrastructure. The Metrics Explorer allows querying and visualizing system and custom metrics, which can be pinned to custom dashboards for real-time operational visibility.",
    referenceUrl: "https://cloud.google.com/monitoring/charts/dashboards",
    tags: ["Cloud Monitoring", "Monitoring", "Security Compliance"]
  },
  {
    id: "gcp-ace-409",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Monitoring Dashboards and Metrics Explorer: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Cloud Monitoring to create a centralized operations dashboard displaying real-time CPU utilization, network egress, and disk IOPS across 50 Compute Engine instances.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Metrics Explorer, custom dashboards, and resource utilization graphs is under consideration.",
    options: [
      { id: 'A', text: "Export data to a local spreadsheet and generate graphs manually." },
      { id: 'B', text: "Review historical billing CSV exports once per month." },
      { id: 'C', text: "Create a custom Cloud Monitoring Dashboard and add charts configured via Metrics Explorer." },
      { id: 'D', text: "Log into each of the 50 virtual machines via SSH and run the 'top' command." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a custom Cloud Monitoring Dashboard and add charts configured via Metrics Explorer. Cloud Monitoring collects metrics, events, and metadata from Google Cloud services and infrastructure. The Metrics Explorer allows querying and visualizing system and custom metrics, which can be pinned to custom dashboards for real-time operational visibility.",
    referenceUrl: "https://cloud.google.com/monitoring/charts/dashboards",
    tags: ["Cloud Monitoring", "Monitoring", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-410",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Monitoring Dashboards and Metrics Explorer: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Cloud Monitoring to create a centralized operations dashboard displaying real-time CPU utilization, network egress, and disk IOPS across 50 Compute Engine instances.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Metrics Explorer, custom dashboards, and resource utilization graphs is under consideration.",
    options: [
      { id: 'A', text: "Create a custom Cloud Monitoring Dashboard and add charts configured via Metrics Explorer." },
      { id: 'B', text: "Export data to a local spreadsheet and generate graphs manually." },
      { id: 'C', text: "Review historical billing CSV exports once per month." },
      { id: 'D', text: "Log into each of the 50 virtual machines via SSH and run the 'top' command." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a custom Cloud Monitoring Dashboard and add charts configured via Metrics Explorer. Cloud Monitoring collects metrics, events, and metadata from Google Cloud services and infrastructure. The Metrics Explorer allows querying and visualizing system and custom metrics, which can be pinned to custom dashboards for real-time operational visibility.",
    referenceUrl: "https://cloud.google.com/monitoring/charts/dashboards",
    tags: ["Cloud Monitoring", "Monitoring", "Resilience Failure"]
  },
  {
    id: "gcp-ace-411",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Monitoring Alerting Policies and Notification Channels: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Cloud Monitoring to automatically alert on-call DevOps engineers via PagerDuty, Slack, and email whenever an application's HTTP 5xx error rate exceeds 5% for 5 consecutive minutes.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Alerting policies with threshold conditions and notification channels is under consideration.",
    options: [
      { id: 'A', text: "Instruct customer support to telephone engineers whenever users complain about outages." },
      { id: 'B', text: "Inspect web server access logs manually at the end of each day." },
      { id: 'C', text: "Configure a Cloud Monitoring Alerting Policy with an error rate condition linked to Notification Channels." },
      { id: 'D', text: "Schedule an hourly cron job to check if the website returns HTTP 200." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a Cloud Monitoring Alerting Policy with an error rate condition linked to Notification Channels. Cloud Monitoring alerting policies evaluate metric conditions over specified duration windows. When thresholds are breached, incidents are opened and automated notifications are dispatched across configured notification channels (email, Slack, Webhooks, PagerDuty).",
    referenceUrl: "https://cloud.google.com/monitoring/alerts",
    tags: ["Cloud Monitoring", "Alerting", "Dr Failover"]
  },
  {
    id: "gcp-ace-412",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Monitoring Alerting Policies and Notification Channels: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Cloud Monitoring to automatically alert on-call DevOps engineers via PagerDuty, Slack, and email whenever an application's HTTP 5xx error rate exceeds 5% for 5 consecutive minutes.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Alerting policies with threshold conditions and notification channels is under consideration.",
    options: [
      { id: 'A', text: "Schedule an hourly cron job to check if the website returns HTTP 200." },
      { id: 'B', text: "Inspect web server access logs manually at the end of each day." },
      { id: 'C', text: "Instruct customer support to telephone engineers whenever users complain about outages." },
      { id: 'D', text: "Configure a Cloud Monitoring Alerting Policy with an error rate condition linked to Notification Channels." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a Cloud Monitoring Alerting Policy with an error rate condition linked to Notification Channels. Cloud Monitoring alerting policies evaluate metric conditions over specified duration windows. When thresholds are breached, incidents are opened and automated notifications are dispatched across configured notification channels (email, Slack, Webhooks, PagerDuty).",
    referenceUrl: "https://cloud.google.com/monitoring/alerts",
    tags: ["Cloud Monitoring", "Alerting", "High Load Scale"]
  },
  {
    id: "gcp-ace-413",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Monitoring Alerting Policies and Notification Channels: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Cloud Monitoring to automatically alert on-call DevOps engineers via PagerDuty, Slack, and email whenever an application's HTTP 5xx error rate exceeds 5% for 5 consecutive minutes.",
    question: "Which solution properly implements these mandatory security and governance controls? Alerting policies with threshold conditions and notification channels is under consideration.",
    options: [
      { id: 'A', text: "Configure a Cloud Monitoring Alerting Policy with an error rate condition linked to Notification Channels." },
      { id: 'B', text: "Schedule an hourly cron job to check if the website returns HTTP 200." },
      { id: 'C', text: "Inspect web server access logs manually at the end of each day." },
      { id: 'D', text: "Instruct customer support to telephone engineers whenever users complain about outages." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Cloud Monitoring Alerting Policy with an error rate condition linked to Notification Channels. Cloud Monitoring alerting policies evaluate metric conditions over specified duration windows. When thresholds are breached, incidents are opened and automated notifications are dispatched across configured notification channels (email, Slack, Webhooks, PagerDuty).",
    referenceUrl: "https://cloud.google.com/monitoring/alerts",
    tags: ["Cloud Monitoring", "Alerting", "Security Compliance"]
  },
  {
    id: "gcp-ace-414",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Monitoring Alerting Policies and Notification Channels: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Cloud Monitoring to automatically alert on-call DevOps engineers via PagerDuty, Slack, and email whenever an application's HTTP 5xx error rate exceeds 5% for 5 consecutive minutes.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Alerting policies with threshold conditions and notification channels is under consideration.",
    options: [
      { id: 'A', text: "Configure a Cloud Monitoring Alerting Policy with an error rate condition linked to Notification Channels." },
      { id: 'B', text: "Inspect web server access logs manually at the end of each day." },
      { id: 'C', text: "Schedule an hourly cron job to check if the website returns HTTP 200." },
      { id: 'D', text: "Instruct customer support to telephone engineers whenever users complain about outages." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Cloud Monitoring Alerting Policy with an error rate condition linked to Notification Channels. Cloud Monitoring alerting policies evaluate metric conditions over specified duration windows. When thresholds are breached, incidents are opened and automated notifications are dispatched across configured notification channels (email, Slack, Webhooks, PagerDuty).",
    referenceUrl: "https://cloud.google.com/monitoring/alerts",
    tags: ["Cloud Monitoring", "Alerting", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-415",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Monitoring Alerting Policies and Notification Channels: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Cloud Monitoring to automatically alert on-call DevOps engineers via PagerDuty, Slack, and email whenever an application's HTTP 5xx error rate exceeds 5% for 5 consecutive minutes.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Alerting policies with threshold conditions and notification channels is under consideration.",
    options: [
      { id: 'A', text: "Configure a Cloud Monitoring Alerting Policy with an error rate condition linked to Notification Channels." },
      { id: 'B', text: "Schedule an hourly cron job to check if the website returns HTTP 200." },
      { id: 'C', text: "Instruct customer support to telephone engineers whenever users complain about outages." },
      { id: 'D', text: "Inspect web server access logs manually at the end of each day." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Cloud Monitoring Alerting Policy with an error rate condition linked to Notification Channels. Cloud Monitoring alerting policies evaluate metric conditions over specified duration windows. When thresholds are breached, incidents are opened and automated notifications are dispatched across configured notification channels (email, Slack, Webhooks, PagerDuty).",
    referenceUrl: "https://cloud.google.com/monitoring/alerts",
    tags: ["Cloud Monitoring", "Alerting", "Resilience Failure"]
  },
  {
    id: "gcp-ace-416",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Logging Logs Explorer and Log Queries: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Cloud Logging to investigate a production application crash by searching all application logs in the last 30 minutes containing the error string 'DatabaseConnectionException'.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Logs Explorer querying structured JSON logs with boolean and regex filters is under consideration.",
    options: [
      { id: 'A', text: "Connect to each server individually using SSH and grep text files in /var/log." },
      { id: 'B', text: "Use the Cloud Logging Logs Explorer with a query filtering by resource type, timestamp, and textPayload." },
      { id: 'C', text: "Deploy a separate third-party database to store log backups." },
      { id: 'D', text: "Ask users to replicate the crash while an engineer watches their screen." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the Cloud Logging Logs Explorer with a query filtering by resource type, timestamp, and textPayload. Cloud Logging Logs Explorer provides powerful query capabilities to search, filter, and analyze billions of structured and unstructured log entries across all Google Cloud services, applications, and hybrid systems in real time.",
    referenceUrl: "https://cloud.google.com/logging/docs/view/logs-explorer-interface",
    tags: ["Cloud Logging", "Logging", "Dr Failover"]
  },
  {
    id: "gcp-ace-417",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Logging Logs Explorer and Log Queries: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Cloud Logging to investigate a production application crash by searching all application logs in the last 30 minutes containing the error string 'DatabaseConnectionException'.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Logs Explorer querying structured JSON logs with boolean and regex filters is under consideration.",
    options: [
      { id: 'A', text: "Connect to each server individually using SSH and grep text files in /var/log." },
      { id: 'B', text: "Use the Cloud Logging Logs Explorer with a query filtering by resource type, timestamp, and textPayload." },
      { id: 'C', text: "Ask users to replicate the crash while an engineer watches their screen." },
      { id: 'D', text: "Deploy a separate third-party database to store log backups." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the Cloud Logging Logs Explorer with a query filtering by resource type, timestamp, and textPayload. Cloud Logging Logs Explorer provides powerful query capabilities to search, filter, and analyze billions of structured and unstructured log entries across all Google Cloud services, applications, and hybrid systems in real time.",
    referenceUrl: "https://cloud.google.com/logging/docs/view/logs-explorer-interface",
    tags: ["Cloud Logging", "Logging", "High Load Scale"]
  },
  {
    id: "gcp-ace-418",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Logging Logs Explorer and Log Queries: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Cloud Logging to investigate a production application crash by searching all application logs in the last 30 minutes containing the error string 'DatabaseConnectionException'.",
    question: "Which solution properly implements these mandatory security and governance controls? Logs Explorer querying structured JSON logs with boolean and regex filters is under consideration.",
    options: [
      { id: 'A', text: "Ask users to replicate the crash while an engineer watches their screen." },
      { id: 'B', text: "Deploy a separate third-party database to store log backups." },
      { id: 'C', text: "Connect to each server individually using SSH and grep text files in /var/log." },
      { id: 'D', text: "Use the Cloud Logging Logs Explorer with a query filtering by resource type, timestamp, and textPayload." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the Cloud Logging Logs Explorer with a query filtering by resource type, timestamp, and textPayload. Cloud Logging Logs Explorer provides powerful query capabilities to search, filter, and analyze billions of structured and unstructured log entries across all Google Cloud services, applications, and hybrid systems in real time.",
    referenceUrl: "https://cloud.google.com/logging/docs/view/logs-explorer-interface",
    tags: ["Cloud Logging", "Logging", "Security Compliance"]
  },
  {
    id: "gcp-ace-419",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Logging Logs Explorer and Log Queries: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Cloud Logging to investigate a production application crash by searching all application logs in the last 30 minutes containing the error string 'DatabaseConnectionException'.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Logs Explorer querying structured JSON logs with boolean and regex filters is under consideration.",
    options: [
      { id: 'A', text: "Connect to each server individually using SSH and grep text files in /var/log." },
      { id: 'B', text: "Use the Cloud Logging Logs Explorer with a query filtering by resource type, timestamp, and textPayload." },
      { id: 'C', text: "Deploy a separate third-party database to store log backups." },
      { id: 'D', text: "Ask users to replicate the crash while an engineer watches their screen." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the Cloud Logging Logs Explorer with a query filtering by resource type, timestamp, and textPayload. Cloud Logging Logs Explorer provides powerful query capabilities to search, filter, and analyze billions of structured and unstructured log entries across all Google Cloud services, applications, and hybrid systems in real time.",
    referenceUrl: "https://cloud.google.com/logging/docs/view/logs-explorer-interface",
    tags: ["Cloud Logging", "Logging", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-420",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Logging Logs Explorer and Log Queries: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Cloud Logging to investigate a production application crash by searching all application logs in the last 30 minutes containing the error string 'DatabaseConnectionException'.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Logs Explorer querying structured JSON logs with boolean and regex filters is under consideration.",
    options: [
      { id: 'A', text: "Deploy a separate third-party database to store log backups." },
      { id: 'B', text: "Ask users to replicate the crash while an engineer watches their screen." },
      { id: 'C', text: "Connect to each server individually using SSH and grep text files in /var/log." },
      { id: 'D', text: "Use the Cloud Logging Logs Explorer with a query filtering by resource type, timestamp, and textPayload." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the Cloud Logging Logs Explorer with a query filtering by resource type, timestamp, and textPayload. Cloud Logging Logs Explorer provides powerful query capabilities to search, filter, and analyze billions of structured and unstructured log entries across all Google Cloud services, applications, and hybrid systems in real time.",
    referenceUrl: "https://cloud.google.com/logging/docs/view/logs-explorer-interface",
    tags: ["Cloud Logging", "Logging", "Resilience Failure"]
  },
  {
    id: "gcp-ace-421",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Logging Log Sinks and Log Routing: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Cloud Logging to route all organization security audit logs to an immutable Cloud Storage bucket for 7-year regulatory retention and stream error logs to BigQuery for SQL analysis.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Log router sinks routing logs to BigQuery, Cloud Storage, or Pub/Sub is under consideration.",
    options: [
      { id: 'A', text: "Configure Log Router Sinks targeting Cloud Storage for long-term retention and BigQuery for analytical querying." },
      { id: 'B', text: "Print out paper copies of critical audit log entries." },
      { id: 'C', text: "Store all logs inside the default 30-day logging bucket without export sinks." },
      { id: 'D', text: "Write a custom daemon that downloads logs via the API and uploads them to a local disk." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Log Router Sinks targeting Cloud Storage for long-term retention and BigQuery for analytical querying. Cloud Logging Log Router sinks allow filtering and exporting logs to external destinations in real time. Sinks can route logs to Cloud Storage (cost-effective long-term archival), BigQuery (analytical querying), Pub/Sub (streaming to third-party SIEMs), or another log bucket.",
    referenceUrl: "https://cloud.google.com/logging/docs/export/configure_export_v2",
    tags: ["Cloud Logging", "Log Routing", "Dr Failover"]
  },
  {
    id: "gcp-ace-422",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Logging Log Sinks and Log Routing: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Cloud Logging to route all organization security audit logs to an immutable Cloud Storage bucket for 7-year regulatory retention and stream error logs to BigQuery for SQL analysis.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Log router sinks routing logs to BigQuery, Cloud Storage, or Pub/Sub is under consideration.",
    options: [
      { id: 'A', text: "Write a custom daemon that downloads logs via the API and uploads them to a local disk." },
      { id: 'B', text: "Configure Log Router Sinks targeting Cloud Storage for long-term retention and BigQuery for analytical querying." },
      { id: 'C', text: "Print out paper copies of critical audit log entries." },
      { id: 'D', text: "Store all logs inside the default 30-day logging bucket without export sinks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Log Router Sinks targeting Cloud Storage for long-term retention and BigQuery for analytical querying. Cloud Logging Log Router sinks allow filtering and exporting logs to external destinations in real time. Sinks can route logs to Cloud Storage (cost-effective long-term archival), BigQuery (analytical querying), Pub/Sub (streaming to third-party SIEMs), or another log bucket.",
    referenceUrl: "https://cloud.google.com/logging/docs/export/configure_export_v2",
    tags: ["Cloud Logging", "Log Routing", "High Load Scale"]
  },
  {
    id: "gcp-ace-423",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Logging Log Sinks and Log Routing: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Cloud Logging to route all organization security audit logs to an immutable Cloud Storage bucket for 7-year regulatory retention and stream error logs to BigQuery for SQL analysis.",
    question: "Which solution properly implements these mandatory security and governance controls? Log router sinks routing logs to BigQuery, Cloud Storage, or Pub/Sub is under consideration.",
    options: [
      { id: 'A', text: "Configure Log Router Sinks targeting Cloud Storage for long-term retention and BigQuery for analytical querying." },
      { id: 'B', text: "Print out paper copies of critical audit log entries." },
      { id: 'C', text: "Store all logs inside the default 30-day logging bucket without export sinks." },
      { id: 'D', text: "Write a custom daemon that downloads logs via the API and uploads them to a local disk." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Log Router Sinks targeting Cloud Storage for long-term retention and BigQuery for analytical querying. Cloud Logging Log Router sinks allow filtering and exporting logs to external destinations in real time. Sinks can route logs to Cloud Storage (cost-effective long-term archival), BigQuery (analytical querying), Pub/Sub (streaming to third-party SIEMs), or another log bucket.",
    referenceUrl: "https://cloud.google.com/logging/docs/export/configure_export_v2",
    tags: ["Cloud Logging", "Log Routing", "Security Compliance"]
  },
  {
    id: "gcp-ace-424",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Logging Log Sinks and Log Routing: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Cloud Logging to route all organization security audit logs to an immutable Cloud Storage bucket for 7-year regulatory retention and stream error logs to BigQuery for SQL analysis.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Log router sinks routing logs to BigQuery, Cloud Storage, or Pub/Sub is under consideration.",
    options: [
      { id: 'A', text: "Write a custom daemon that downloads logs via the API and uploads them to a local disk." },
      { id: 'B', text: "Store all logs inside the default 30-day logging bucket without export sinks." },
      { id: 'C', text: "Configure Log Router Sinks targeting Cloud Storage for long-term retention and BigQuery for analytical querying." },
      { id: 'D', text: "Print out paper copies of critical audit log entries." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure Log Router Sinks targeting Cloud Storage for long-term retention and BigQuery for analytical querying. Cloud Logging Log Router sinks allow filtering and exporting logs to external destinations in real time. Sinks can route logs to Cloud Storage (cost-effective long-term archival), BigQuery (analytical querying), Pub/Sub (streaming to third-party SIEMs), or another log bucket.",
    referenceUrl: "https://cloud.google.com/logging/docs/export/configure_export_v2",
    tags: ["Cloud Logging", "Log Routing", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-425",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Logging Log Sinks and Log Routing: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Cloud Logging to route all organization security audit logs to an immutable Cloud Storage bucket for 7-year regulatory retention and stream error logs to BigQuery for SQL analysis.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Log router sinks routing logs to BigQuery, Cloud Storage, or Pub/Sub is under consideration.",
    options: [
      { id: 'A', text: "Configure Log Router Sinks targeting Cloud Storage for long-term retention and BigQuery for analytical querying." },
      { id: 'B', text: "Print out paper copies of critical audit log entries." },
      { id: 'C', text: "Write a custom daemon that downloads logs via the API and uploads them to a local disk." },
      { id: 'D', text: "Store all logs inside the default 30-day logging bucket without export sinks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Log Router Sinks targeting Cloud Storage for long-term retention and BigQuery for analytical querying. Cloud Logging Log Router sinks allow filtering and exporting logs to external destinations in real time. Sinks can route logs to Cloud Storage (cost-effective long-term archival), BigQuery (analytical querying), Pub/Sub (streaming to third-party SIEMs), or another log bucket.",
    referenceUrl: "https://cloud.google.com/logging/docs/export/configure_export_v2",
    tags: ["Cloud Logging", "Log Routing", "Resilience Failure"]
  }
];

export default GCP_ACE_QUESTIONS_17;
