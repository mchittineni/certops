export const GCP_PCDOE_QUESTIONS_13 = [
  {
    id: "gcp-pcdoe-301",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "SRE Engagement Models (Embedded vs Consulting): Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates SRE Organization to transition a legacy product engineering team toward modern cloud reliability standards when full-time dedicated SRE staffing is constrained.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? SRE engagement models: Embedded SRE vs Consulting / Platform SRE is under consideration.",
    options: [
      { id: 'A', text: "Adopt a Consulting / Platform SRE model to provide shared tools, CI/CD templates, and reliability coaching to product teams." },
      { id: 'B', text: "Disband the software engineering team and hire third-party contractors." },
      { id: 'C', text: "Force product engineers to handle all 3:00 AM server crashes without training or monitoring tools." },
      { id: 'D', text: "Assign one SRE to manage 50 disparate legacy applications single-handedly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt a Consulting / Platform SRE model to provide shared tools, CI/CD templates, and reliability coaching to product teams. SRE engagement models vary based on organizational maturity and scale. In a Consulting or Platform SRE model, SREs build centralized self-service infrastructure, observability frameworks, and golden deployment paths, empowering software developers to own service reliability autonomously.",
    referenceUrl: "https://sre.google/workbook/engagement-model/",
    tags: ["SRE Organization", "SRE Engagement", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-302",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "SRE Engagement Models (Embedded vs Consulting): High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates SRE Organization to transition a legacy product engineering team toward modern cloud reliability standards when full-time dedicated SRE staffing is constrained.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? SRE engagement models: Embedded SRE vs Consulting / Platform SRE is under consideration.",
    options: [
      { id: 'A', text: "Adopt a Consulting / Platform SRE model to provide shared tools, CI/CD templates, and reliability coaching to product teams." },
      { id: 'B', text: "Force product engineers to handle all 3:00 AM server crashes without training or monitoring tools." },
      { id: 'C', text: "Disband the software engineering team and hire third-party contractors." },
      { id: 'D', text: "Assign one SRE to manage 50 disparate legacy applications single-handedly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt a Consulting / Platform SRE model to provide shared tools, CI/CD templates, and reliability coaching to product teams. SRE engagement models vary based on organizational maturity and scale. In a Consulting or Platform SRE model, SREs build centralized self-service infrastructure, observability frameworks, and golden deployment paths, empowering software developers to own service reliability autonomously.",
    referenceUrl: "https://sre.google/workbook/engagement-model/",
    tags: ["SRE Organization", "SRE Engagement", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-303",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "SRE Engagement Models (Embedded vs Consulting): Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates SRE Organization to transition a legacy product engineering team toward modern cloud reliability standards when full-time dedicated SRE staffing is constrained.",
    question: "Which solution implements these mandatory compliance and security controls? SRE engagement models: Embedded SRE vs Consulting / Platform SRE is under consideration.",
    options: [
      { id: 'A', text: "Disband the software engineering team and hire third-party contractors." },
      { id: 'B', text: "Force product engineers to handle all 3:00 AM server crashes without training or monitoring tools." },
      { id: 'C', text: "Adopt a Consulting / Platform SRE model to provide shared tools, CI/CD templates, and reliability coaching to product teams." },
      { id: 'D', text: "Assign one SRE to manage 50 disparate legacy applications single-handedly." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Adopt a Consulting / Platform SRE model to provide shared tools, CI/CD templates, and reliability coaching to product teams. SRE engagement models vary based on organizational maturity and scale. In a Consulting or Platform SRE model, SREs build centralized self-service infrastructure, observability frameworks, and golden deployment paths, empowering software developers to own service reliability autonomously.",
    referenceUrl: "https://sre.google/workbook/engagement-model/",
    tags: ["SRE Organization", "SRE Engagement", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-304",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "SRE Engagement Models (Embedded vs Consulting): Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates SRE Organization to transition a legacy product engineering team toward modern cloud reliability standards when full-time dedicated SRE staffing is constrained.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? SRE engagement models: Embedded SRE vs Consulting / Platform SRE is under consideration.",
    options: [
      { id: 'A', text: "Assign one SRE to manage 50 disparate legacy applications single-handedly." },
      { id: 'B', text: "Force product engineers to handle all 3:00 AM server crashes without training or monitoring tools." },
      { id: 'C', text: "Adopt a Consulting / Platform SRE model to provide shared tools, CI/CD templates, and reliability coaching to product teams." },
      { id: 'D', text: "Disband the software engineering team and hire third-party contractors." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Adopt a Consulting / Platform SRE model to provide shared tools, CI/CD templates, and reliability coaching to product teams. SRE engagement models vary based on organizational maturity and scale. In a Consulting or Platform SRE model, SREs build centralized self-service infrastructure, observability frameworks, and golden deployment paths, empowering software developers to own service reliability autonomously.",
    referenceUrl: "https://sre.google/workbook/engagement-model/",
    tags: ["SRE Organization", "SRE Engagement", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-305",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "SRE Engagement Models (Embedded vs Consulting): Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates SRE Organization to transition a legacy product engineering team toward modern cloud reliability standards when full-time dedicated SRE staffing is constrained.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? SRE engagement models: Embedded SRE vs Consulting / Platform SRE is under consideration.",
    options: [
      { id: 'A', text: "Adopt a Consulting / Platform SRE model to provide shared tools, CI/CD templates, and reliability coaching to product teams." },
      { id: 'B', text: "Assign one SRE to manage 50 disparate legacy applications single-handedly." },
      { id: 'C', text: "Disband the software engineering team and hire third-party contractors." },
      { id: 'D', text: "Force product engineers to handle all 3:00 AM server crashes without training or monitoring tools." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt a Consulting / Platform SRE model to provide shared tools, CI/CD templates, and reliability coaching to product teams. SRE engagement models vary based on organizational maturity and scale. In a Consulting or Platform SRE model, SREs build centralized self-service infrastructure, observability frameworks, and golden deployment paths, empowering software developers to own service reliability autonomously.",
    referenceUrl: "https://sre.google/workbook/engagement-model/",
    tags: ["SRE Organization", "SRE Engagement", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-306",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Build Configuration with cloudbuild.yaml: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Cloud Build to automate container compilation, security linting, and automated unit test execution using Google Cloud Build.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? cloudbuild.yaml defining sequential and parallel build steps, caching, and substitutions is under consideration.",
    options: [
      { id: 'A', text: "Write custom compile scripts directly into virtual machine operating system crontabs." },
      { id: 'B', text: "Commit compiled binary files directly into source code version control." },
      { id: 'C', text: "Run manual shell scripts sequentially on a personal workstation." },
      { id: 'D', text: "Define build steps in a cloudbuild.yaml file using containerized builder images with built-in substitution variables." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define build steps in a cloudbuild.yaml file using containerized builder images with built-in substitution variables. Cloud Build executes builds as a series of containerized build steps defined in a `cloudbuild.yaml` file. Steps run sequentially or in parallel, share workspace files in `/workspace`, use substitution variables (`$PROJECT_ID`, `$COMMIT_SHA`), and utilize Docker layer caching.",
    referenceUrl: "https://cloud.google.com/build/docs/configuring-builds/create-basic-configuration",
    tags: ["Cloud Build", "Cloud Build", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-307",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Build Configuration with cloudbuild.yaml: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Cloud Build to automate container compilation, security linting, and automated unit test execution using Google Cloud Build.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? cloudbuild.yaml defining sequential and parallel build steps, caching, and substitutions is under consideration.",
    options: [
      { id: 'A', text: "Define build steps in a cloudbuild.yaml file using containerized builder images with built-in substitution variables." },
      { id: 'B', text: "Run manual shell scripts sequentially on a personal workstation." },
      { id: 'C', text: "Commit compiled binary files directly into source code version control." },
      { id: 'D', text: "Write custom compile scripts directly into virtual machine operating system crontabs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define build steps in a cloudbuild.yaml file using containerized builder images with built-in substitution variables. Cloud Build executes builds as a series of containerized build steps defined in a `cloudbuild.yaml` file. Steps run sequentially or in parallel, share workspace files in `/workspace`, use substitution variables (`$PROJECT_ID`, `$COMMIT_SHA`), and utilize Docker layer caching.",
    referenceUrl: "https://cloud.google.com/build/docs/configuring-builds/create-basic-configuration",
    tags: ["Cloud Build", "Cloud Build", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-308",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Build Configuration with cloudbuild.yaml: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Cloud Build to automate container compilation, security linting, and automated unit test execution using Google Cloud Build.",
    question: "Which solution implements these mandatory compliance and security controls? cloudbuild.yaml defining sequential and parallel build steps, caching, and substitutions is under consideration.",
    options: [
      { id: 'A', text: "Write custom compile scripts directly into virtual machine operating system crontabs." },
      { id: 'B', text: "Run manual shell scripts sequentially on a personal workstation." },
      { id: 'C', text: "Define build steps in a cloudbuild.yaml file using containerized builder images with built-in substitution variables." },
      { id: 'D', text: "Commit compiled binary files directly into source code version control." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define build steps in a cloudbuild.yaml file using containerized builder images with built-in substitution variables. Cloud Build executes builds as a series of containerized build steps defined in a `cloudbuild.yaml` file. Steps run sequentially or in parallel, share workspace files in `/workspace`, use substitution variables (`$PROJECT_ID`, `$COMMIT_SHA`), and utilize Docker layer caching.",
    referenceUrl: "https://cloud.google.com/build/docs/configuring-builds/create-basic-configuration",
    tags: ["Cloud Build", "Cloud Build", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-309",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Build Configuration with cloudbuild.yaml: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Cloud Build to automate container compilation, security linting, and automated unit test execution using Google Cloud Build.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? cloudbuild.yaml defining sequential and parallel build steps, caching, and substitutions is under consideration.",
    options: [
      { id: 'A', text: "Define build steps in a cloudbuild.yaml file using containerized builder images with built-in substitution variables." },
      { id: 'B', text: "Commit compiled binary files directly into source code version control." },
      { id: 'C', text: "Write custom compile scripts directly into virtual machine operating system crontabs." },
      { id: 'D', text: "Run manual shell scripts sequentially on a personal workstation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define build steps in a cloudbuild.yaml file using containerized builder images with built-in substitution variables. Cloud Build executes builds as a series of containerized build steps defined in a `cloudbuild.yaml` file. Steps run sequentially or in parallel, share workspace files in `/workspace`, use substitution variables (`$PROJECT_ID`, `$COMMIT_SHA`), and utilize Docker layer caching.",
    referenceUrl: "https://cloud.google.com/build/docs/configuring-builds/create-basic-configuration",
    tags: ["Cloud Build", "Cloud Build", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-310",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Build Configuration with cloudbuild.yaml: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Cloud Build to automate container compilation, security linting, and automated unit test execution using Google Cloud Build.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? cloudbuild.yaml defining sequential and parallel build steps, caching, and substitutions is under consideration.",
    options: [
      { id: 'A', text: "Commit compiled binary files directly into source code version control." },
      { id: 'B', text: "Write custom compile scripts directly into virtual machine operating system crontabs." },
      { id: 'C', text: "Run manual shell scripts sequentially on a personal workstation." },
      { id: 'D', text: "Define build steps in a cloudbuild.yaml file using containerized builder images with built-in substitution variables." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define build steps in a cloudbuild.yaml file using containerized builder images with built-in substitution variables. Cloud Build executes builds as a series of containerized build steps defined in a `cloudbuild.yaml` file. Steps run sequentially or in parallel, share workspace files in `/workspace`, use substitution variables (`$PROJECT_ID`, `$COMMIT_SHA`), and utilize Docker layer caching.",
    referenceUrl: "https://cloud.google.com/build/docs/configuring-builds/create-basic-configuration",
    tags: ["Cloud Build", "Cloud Build", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-311",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Build Triggers and Webhook Integrations: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Cloud Build to automatically trigger a security scan and build pipeline whenever a developer creates or updates a pull request targeting the 'main' branch in GitHub.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Cloud Build triggers listening for Git branch pushes, pull requests, and webhooks is under consideration.",
    options: [
      { id: 'A', text: "Require developers to log into the Cloud Console and click 'Run Build' manually for every pull request." },
      { id: 'B', text: "Create a Cloud Build Trigger configured to invoke on pull requests matching the 'main' branch regex." },
      { id: 'C', text: "Poll the GitHub API using a Python while loop running on a Compute Engine instance." },
      { id: 'D', text: "Schedule an hourly cron job that pulls code from GitHub." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a Cloud Build Trigger configured to invoke on pull requests matching the 'main' branch regex. Cloud Build triggers listen directly to events from connected repositories (GitHub, GitLab, Bitbucket, Cloud Source Repositories). Triggers automatically kick off builds upon commits to branches, tag creations, or pull request events, providing status checks back to Git PRs.",
    referenceUrl: "https://cloud.google.com/build/docs/automating-builds/create-manage-triggers",
    tags: ["Cloud Build", "Cloud Build", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-312",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Build Triggers and Webhook Integrations: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Cloud Build to automatically trigger a security scan and build pipeline whenever a developer creates or updates a pull request targeting the 'main' branch in GitHub.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Cloud Build triggers listening for Git branch pushes, pull requests, and webhooks is under consideration.",
    options: [
      { id: 'A', text: "Poll the GitHub API using a Python while loop running on a Compute Engine instance." },
      { id: 'B', text: "Create a Cloud Build Trigger configured to invoke on pull requests matching the 'main' branch regex." },
      { id: 'C', text: "Schedule an hourly cron job that pulls code from GitHub." },
      { id: 'D', text: "Require developers to log into the Cloud Console and click 'Run Build' manually for every pull request." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a Cloud Build Trigger configured to invoke on pull requests matching the 'main' branch regex. Cloud Build triggers listen directly to events from connected repositories (GitHub, GitLab, Bitbucket, Cloud Source Repositories). Triggers automatically kick off builds upon commits to branches, tag creations, or pull request events, providing status checks back to Git PRs.",
    referenceUrl: "https://cloud.google.com/build/docs/automating-builds/create-manage-triggers",
    tags: ["Cloud Build", "Cloud Build", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-313",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Build Triggers and Webhook Integrations: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Cloud Build to automatically trigger a security scan and build pipeline whenever a developer creates or updates a pull request targeting the 'main' branch in GitHub.",
    question: "Which solution implements these mandatory compliance and security controls? Cloud Build triggers listening for Git branch pushes, pull requests, and webhooks is under consideration.",
    options: [
      { id: 'A', text: "Schedule an hourly cron job that pulls code from GitHub." },
      { id: 'B', text: "Create a Cloud Build Trigger configured to invoke on pull requests matching the 'main' branch regex." },
      { id: 'C', text: "Require developers to log into the Cloud Console and click 'Run Build' manually for every pull request." },
      { id: 'D', text: "Poll the GitHub API using a Python while loop running on a Compute Engine instance." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a Cloud Build Trigger configured to invoke on pull requests matching the 'main' branch regex. Cloud Build triggers listen directly to events from connected repositories (GitHub, GitLab, Bitbucket, Cloud Source Repositories). Triggers automatically kick off builds upon commits to branches, tag creations, or pull request events, providing status checks back to Git PRs.",
    referenceUrl: "https://cloud.google.com/build/docs/automating-builds/create-manage-triggers",
    tags: ["Cloud Build", "Cloud Build", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-314",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Build Triggers and Webhook Integrations: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Cloud Build to automatically trigger a security scan and build pipeline whenever a developer creates or updates a pull request targeting the 'main' branch in GitHub.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Cloud Build triggers listening for Git branch pushes, pull requests, and webhooks is under consideration.",
    options: [
      { id: 'A', text: "Schedule an hourly cron job that pulls code from GitHub." },
      { id: 'B', text: "Require developers to log into the Cloud Console and click 'Run Build' manually for every pull request." },
      { id: 'C', text: "Poll the GitHub API using a Python while loop running on a Compute Engine instance." },
      { id: 'D', text: "Create a Cloud Build Trigger configured to invoke on pull requests matching the 'main' branch regex." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a Cloud Build Trigger configured to invoke on pull requests matching the 'main' branch regex. Cloud Build triggers listen directly to events from connected repositories (GitHub, GitLab, Bitbucket, Cloud Source Repositories). Triggers automatically kick off builds upon commits to branches, tag creations, or pull request events, providing status checks back to Git PRs.",
    referenceUrl: "https://cloud.google.com/build/docs/automating-builds/create-manage-triggers",
    tags: ["Cloud Build", "Cloud Build", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-315",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Build Triggers and Webhook Integrations: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Cloud Build to automatically trigger a security scan and build pipeline whenever a developer creates or updates a pull request targeting the 'main' branch in GitHub.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Cloud Build triggers listening for Git branch pushes, pull requests, and webhooks is under consideration.",
    options: [
      { id: 'A', text: "Schedule an hourly cron job that pulls code from GitHub." },
      { id: 'B', text: "Require developers to log into the Cloud Console and click 'Run Build' manually for every pull request." },
      { id: 'C', text: "Poll the GitHub API using a Python while loop running on a Compute Engine instance." },
      { id: 'D', text: "Create a Cloud Build Trigger configured to invoke on pull requests matching the 'main' branch regex." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a Cloud Build Trigger configured to invoke on pull requests matching the 'main' branch regex. Cloud Build triggers listen directly to events from connected repositories (GitHub, GitLab, Bitbucket, Cloud Source Repositories). Triggers automatically kick off builds upon commits to branches, tag creations, or pull request events, providing status checks back to Git PRs.",
    referenceUrl: "https://cloud.google.com/build/docs/automating-builds/create-manage-triggers",
    tags: ["Cloud Build", "Cloud Build", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-316",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Build Private Pools and VPC Peering: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Cloud Build Networking to run continuous integration build steps that must access internal databases and private artifact repositories inside an isolated VPC without internet access.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Cloud Build Private Pools with custom network peering and static egress IPs is under consideration.",
    options: [
      { id: 'A', text: "Use unencrypted public internet webhooks to transfer internal source code." },
      { id: 'B', text: "Configure Cloud Build Private Pools with VPC Network Peering to the internal virtual network." },
      { id: 'C', text: "Download internal databases to public Cloud Storage buckets during every build." },
      { id: 'D', text: "Run builds on public Cloud Build default pools and open database ports to 0.0.0.0/0 on the internet." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Cloud Build Private Pools with VPC Network Peering to the internal virtual network. Default Cloud Build pools execute in a Google-managed multi-tenant network with public internet access. Cloud Build Private Pools provide dedicated, isolated worker virtual machines with private VPC peering, allowing build steps to access internal private IPs and corporate resources.",
    referenceUrl: "https://cloud.google.com/build/docs/private-pools/private-pools-overview",
    tags: ["Cloud Build Networking", "Cloud Build Security", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-317",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Build Private Pools and VPC Peering: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Cloud Build Networking to run continuous integration build steps that must access internal databases and private artifact repositories inside an isolated VPC without internet access.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Cloud Build Private Pools with custom network peering and static egress IPs is under consideration.",
    options: [
      { id: 'A', text: "Configure Cloud Build Private Pools with VPC Network Peering to the internal virtual network." },
      { id: 'B', text: "Use unencrypted public internet webhooks to transfer internal source code." },
      { id: 'C', text: "Run builds on public Cloud Build default pools and open database ports to 0.0.0.0/0 on the internet." },
      { id: 'D', text: "Download internal databases to public Cloud Storage buckets during every build." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Cloud Build Private Pools with VPC Network Peering to the internal virtual network. Default Cloud Build pools execute in a Google-managed multi-tenant network with public internet access. Cloud Build Private Pools provide dedicated, isolated worker virtual machines with private VPC peering, allowing build steps to access internal private IPs and corporate resources.",
    referenceUrl: "https://cloud.google.com/build/docs/private-pools/private-pools-overview",
    tags: ["Cloud Build Networking", "Cloud Build Security", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-318",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Build Private Pools and VPC Peering: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Cloud Build Networking to run continuous integration build steps that must access internal databases and private artifact repositories inside an isolated VPC without internet access.",
    question: "Which solution implements these mandatory compliance and security controls? Cloud Build Private Pools with custom network peering and static egress IPs is under consideration.",
    options: [
      { id: 'A', text: "Run builds on public Cloud Build default pools and open database ports to 0.0.0.0/0 on the internet." },
      { id: 'B', text: "Use unencrypted public internet webhooks to transfer internal source code." },
      { id: 'C', text: "Configure Cloud Build Private Pools with VPC Network Peering to the internal virtual network." },
      { id: 'D', text: "Download internal databases to public Cloud Storage buckets during every build." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure Cloud Build Private Pools with VPC Network Peering to the internal virtual network. Default Cloud Build pools execute in a Google-managed multi-tenant network with public internet access. Cloud Build Private Pools provide dedicated, isolated worker virtual machines with private VPC peering, allowing build steps to access internal private IPs and corporate resources.",
    referenceUrl: "https://cloud.google.com/build/docs/private-pools/private-pools-overview",
    tags: ["Cloud Build Networking", "Cloud Build Security", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-319",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Build Private Pools and VPC Peering: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Cloud Build Networking to run continuous integration build steps that must access internal databases and private artifact repositories inside an isolated VPC without internet access.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Cloud Build Private Pools with custom network peering and static egress IPs is under consideration.",
    options: [
      { id: 'A', text: "Configure Cloud Build Private Pools with VPC Network Peering to the internal virtual network." },
      { id: 'B', text: "Use unencrypted public internet webhooks to transfer internal source code." },
      { id: 'C', text: "Run builds on public Cloud Build default pools and open database ports to 0.0.0.0/0 on the internet." },
      { id: 'D', text: "Download internal databases to public Cloud Storage buckets during every build." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Cloud Build Private Pools with VPC Network Peering to the internal virtual network. Default Cloud Build pools execute in a Google-managed multi-tenant network with public internet access. Cloud Build Private Pools provide dedicated, isolated worker virtual machines with private VPC peering, allowing build steps to access internal private IPs and corporate resources.",
    referenceUrl: "https://cloud.google.com/build/docs/private-pools/private-pools-overview",
    tags: ["Cloud Build Networking", "Cloud Build Security", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-320",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Build Private Pools and VPC Peering: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Cloud Build Networking to run continuous integration build steps that must access internal databases and private artifact repositories inside an isolated VPC without internet access.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Cloud Build Private Pools with custom network peering and static egress IPs is under consideration.",
    options: [
      { id: 'A', text: "Use unencrypted public internet webhooks to transfer internal source code." },
      { id: 'B', text: "Configure Cloud Build Private Pools with VPC Network Peering to the internal virtual network." },
      { id: 'C', text: "Run builds on public Cloud Build default pools and open database ports to 0.0.0.0/0 on the internet." },
      { id: 'D', text: "Download internal databases to public Cloud Storage buckets during every build." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Cloud Build Private Pools with VPC Network Peering to the internal virtual network. Default Cloud Build pools execute in a Google-managed multi-tenant network with public internet access. Cloud Build Private Pools provide dedicated, isolated worker virtual machines with private VPC peering, allowing build steps to access internal private IPs and corporate resources.",
    referenceUrl: "https://cloud.google.com/build/docs/private-pools/private-pools-overview",
    tags: ["Cloud Build Networking", "Cloud Build Security", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-321",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Deploy Delivery Pipelines and Targets: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Google Cloud Deploy to establish a progressive continuous delivery pipeline that deploys containerized releases to dev, promotes to staging, and requires human sign-off for production.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Cloud Deploy delivery pipelines with progressive promotion across environments is under consideration.",
    options: [
      { id: 'A', text: "Define a Cloud Deploy delivery pipeline with dev, staging, and production targets, requiring approval on the production stage." },
      { id: 'B', text: "Deploy software by copying binary files over RDP connections to production servers." },
      { id: 'C', text: "Write custom shell scripts executing kubectl apply against production clusters without auditing." },
      { id: 'D', text: "Manually edit Kubernetes manifest files directly inside the production cluster using vi." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a Cloud Deploy delivery pipeline with dev, staging, and production targets, requiring approval on the production stage. Google Cloud Deploy provides opinionated, managed continuous delivery. Delivery pipelines specify the sequence of targets (GKE, Cloud Run, Anthos). Releases progress from development to staging and production, with built-in rollback capabilities and audit trails.",
    referenceUrl: "https://cloud.google.com/deploy/docs/overview",
    tags: ["Google Cloud Deploy", "Cloud Deploy", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-322",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Deploy Delivery Pipelines and Targets: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Google Cloud Deploy to establish a progressive continuous delivery pipeline that deploys containerized releases to dev, promotes to staging, and requires human sign-off for production.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Cloud Deploy delivery pipelines with progressive promotion across environments is under consideration.",
    options: [
      { id: 'A', text: "Manually edit Kubernetes manifest files directly inside the production cluster using vi." },
      { id: 'B', text: "Deploy software by copying binary files over RDP connections to production servers." },
      { id: 'C', text: "Define a Cloud Deploy delivery pipeline with dev, staging, and production targets, requiring approval on the production stage." },
      { id: 'D', text: "Write custom shell scripts executing kubectl apply against production clusters without auditing." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define a Cloud Deploy delivery pipeline with dev, staging, and production targets, requiring approval on the production stage. Google Cloud Deploy provides opinionated, managed continuous delivery. Delivery pipelines specify the sequence of targets (GKE, Cloud Run, Anthos). Releases progress from development to staging and production, with built-in rollback capabilities and audit trails.",
    referenceUrl: "https://cloud.google.com/deploy/docs/overview",
    tags: ["Google Cloud Deploy", "Cloud Deploy", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-323",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Deploy Delivery Pipelines and Targets: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Google Cloud Deploy to establish a progressive continuous delivery pipeline that deploys containerized releases to dev, promotes to staging, and requires human sign-off for production.",
    question: "Which solution implements these mandatory compliance and security controls? Cloud Deploy delivery pipelines with progressive promotion across environments is under consideration.",
    options: [
      { id: 'A', text: "Define a Cloud Deploy delivery pipeline with dev, staging, and production targets, requiring approval on the production stage." },
      { id: 'B', text: "Deploy software by copying binary files over RDP connections to production servers." },
      { id: 'C', text: "Write custom shell scripts executing kubectl apply against production clusters without auditing." },
      { id: 'D', text: "Manually edit Kubernetes manifest files directly inside the production cluster using vi." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a Cloud Deploy delivery pipeline with dev, staging, and production targets, requiring approval on the production stage. Google Cloud Deploy provides opinionated, managed continuous delivery. Delivery pipelines specify the sequence of targets (GKE, Cloud Run, Anthos). Releases progress from development to staging and production, with built-in rollback capabilities and audit trails.",
    referenceUrl: "https://cloud.google.com/deploy/docs/overview",
    tags: ["Google Cloud Deploy", "Cloud Deploy", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-324",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Deploy Delivery Pipelines and Targets: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Google Cloud Deploy to establish a progressive continuous delivery pipeline that deploys containerized releases to dev, promotes to staging, and requires human sign-off for production.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Cloud Deploy delivery pipelines with progressive promotion across environments is under consideration.",
    options: [
      { id: 'A', text: "Deploy software by copying binary files over RDP connections to production servers." },
      { id: 'B', text: "Write custom shell scripts executing kubectl apply against production clusters without auditing." },
      { id: 'C', text: "Define a Cloud Deploy delivery pipeline with dev, staging, and production targets, requiring approval on the production stage." },
      { id: 'D', text: "Manually edit Kubernetes manifest files directly inside the production cluster using vi." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define a Cloud Deploy delivery pipeline with dev, staging, and production targets, requiring approval on the production stage. Google Cloud Deploy provides opinionated, managed continuous delivery. Delivery pipelines specify the sequence of targets (GKE, Cloud Run, Anthos). Releases progress from development to staging and production, with built-in rollback capabilities and audit trails.",
    referenceUrl: "https://cloud.google.com/deploy/docs/overview",
    tags: ["Google Cloud Deploy", "Cloud Deploy", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-325",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Deploy Delivery Pipelines and Targets: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Google Cloud Deploy to establish a progressive continuous delivery pipeline that deploys containerized releases to dev, promotes to staging, and requires human sign-off for production.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Cloud Deploy delivery pipelines with progressive promotion across environments is under consideration.",
    options: [
      { id: 'A', text: "Deploy software by copying binary files over RDP connections to production servers." },
      { id: 'B', text: "Manually edit Kubernetes manifest files directly inside the production cluster using vi." },
      { id: 'C', text: "Write custom shell scripts executing kubectl apply against production clusters without auditing." },
      { id: 'D', text: "Define a Cloud Deploy delivery pipeline with dev, staging, and production targets, requiring approval on the production stage." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define a Cloud Deploy delivery pipeline with dev, staging, and production targets, requiring approval on the production stage. Google Cloud Deploy provides opinionated, managed continuous delivery. Delivery pipelines specify the sequence of targets (GKE, Cloud Run, Anthos). Releases progress from development to staging and production, with built-in rollback capabilities and audit trails.",
    referenceUrl: "https://cloud.google.com/deploy/docs/overview",
    tags: ["Google Cloud Deploy", "Cloud Deploy", "Resilience Failure"]
  }
];

export default GCP_PCDOE_QUESTIONS_13;
