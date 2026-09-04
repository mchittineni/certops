export const GCP_PCDOE_QUESTIONS_15 = [
  {
    id: "gcp-pcdoe-351",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Infrastructure as Code (IaC) Pipelines with Terraform Cloud / Atlantis: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates GitOps Infrastructure to automate cloud infrastructure changes via Git pull requests, executing automated 'terraform plan' on PR creation and 'terraform apply' on PR merge.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Automated Terraform plan/apply workflows in CI/CD pipelines is under consideration.",
    options: [
      { id: 'A', text: "Implement an automated CI/CD pipeline (e.g. Cloud Build or Atlantis) that executes terraform plan on PRs and terraform apply on merge." },
      { id: 'B', text: "Allow individual engineers to run 'terraform apply' from local laptops against production." },
      { id: 'C', text: "Store Terraform state files in unversioned email attachments." },
      { id: 'D', text: "Delete the Terraform state file after every infrastructure change." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement an automated CI/CD pipeline (e.g. Cloud Build or Atlantis) that executes terraform plan on PRs and terraform apply on merge. Automating Infrastructure as Code (IaC) via CI/CD pipelines ensures that all infrastructure changes are peer-reviewed, version-controlled, and audited. The pipeline runs `terraform plan` on pull requests for validation and executes `terraform apply` with state locking in Cloud Storage upon merge.",
    referenceUrl: "https://cloud.google.com/docs/terraform/best-practices/continuous-integration",
    tags: ["GitOps Infrastructure", "GitOps", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-352",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Infrastructure as Code (IaC) Pipelines with Terraform Cloud / Atlantis: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates GitOps Infrastructure to automate cloud infrastructure changes via Git pull requests, executing automated 'terraform plan' on PR creation and 'terraform apply' on PR merge.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Automated Terraform plan/apply workflows in CI/CD pipelines is under consideration.",
    options: [
      { id: 'A', text: "Implement an automated CI/CD pipeline (e.g. Cloud Build or Atlantis) that executes terraform plan on PRs and terraform apply on merge." },
      { id: 'B', text: "Allow individual engineers to run 'terraform apply' from local laptops against production." },
      { id: 'C', text: "Store Terraform state files in unversioned email attachments." },
      { id: 'D', text: "Delete the Terraform state file after every infrastructure change." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement an automated CI/CD pipeline (e.g. Cloud Build or Atlantis) that executes terraform plan on PRs and terraform apply on merge. Automating Infrastructure as Code (IaC) via CI/CD pipelines ensures that all infrastructure changes are peer-reviewed, version-controlled, and audited. The pipeline runs `terraform plan` on pull requests for validation and executes `terraform apply` with state locking in Cloud Storage upon merge.",
    referenceUrl: "https://cloud.google.com/docs/terraform/best-practices/continuous-integration",
    tags: ["GitOps Infrastructure", "GitOps", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-353",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Infrastructure as Code (IaC) Pipelines with Terraform Cloud / Atlantis: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates GitOps Infrastructure to automate cloud infrastructure changes via Git pull requests, executing automated 'terraform plan' on PR creation and 'terraform apply' on PR merge.",
    question: "Which solution implements these mandatory compliance and security controls? Automated Terraform plan/apply workflows in CI/CD pipelines is under consideration.",
    options: [
      { id: 'A', text: "Implement an automated CI/CD pipeline (e.g. Cloud Build or Atlantis) that executes terraform plan on PRs and terraform apply on merge." },
      { id: 'B', text: "Allow individual engineers to run 'terraform apply' from local laptops against production." },
      { id: 'C', text: "Store Terraform state files in unversioned email attachments." },
      { id: 'D', text: "Delete the Terraform state file after every infrastructure change." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement an automated CI/CD pipeline (e.g. Cloud Build or Atlantis) that executes terraform plan on PRs and terraform apply on merge. Automating Infrastructure as Code (IaC) via CI/CD pipelines ensures that all infrastructure changes are peer-reviewed, version-controlled, and audited. The pipeline runs `terraform plan` on pull requests for validation and executes `terraform apply` with state locking in Cloud Storage upon merge.",
    referenceUrl: "https://cloud.google.com/docs/terraform/best-practices/continuous-integration",
    tags: ["GitOps Infrastructure", "GitOps", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-354",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Infrastructure as Code (IaC) Pipelines with Terraform Cloud / Atlantis: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates GitOps Infrastructure to automate cloud infrastructure changes via Git pull requests, executing automated 'terraform plan' on PR creation and 'terraform apply' on PR merge.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Automated Terraform plan/apply workflows in CI/CD pipelines is under consideration.",
    options: [
      { id: 'A', text: "Implement an automated CI/CD pipeline (e.g. Cloud Build or Atlantis) that executes terraform plan on PRs and terraform apply on merge." },
      { id: 'B', text: "Allow individual engineers to run 'terraform apply' from local laptops against production." },
      { id: 'C', text: "Store Terraform state files in unversioned email attachments." },
      { id: 'D', text: "Delete the Terraform state file after every infrastructure change." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement an automated CI/CD pipeline (e.g. Cloud Build or Atlantis) that executes terraform plan on PRs and terraform apply on merge. Automating Infrastructure as Code (IaC) via CI/CD pipelines ensures that all infrastructure changes are peer-reviewed, version-controlled, and audited. The pipeline runs `terraform plan` on pull requests for validation and executes `terraform apply` with state locking in Cloud Storage upon merge.",
    referenceUrl: "https://cloud.google.com/docs/terraform/best-practices/continuous-integration",
    tags: ["GitOps Infrastructure", "GitOps", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-355",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Infrastructure as Code (IaC) Pipelines with Terraform Cloud / Atlantis: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates GitOps Infrastructure to automate cloud infrastructure changes via Git pull requests, executing automated 'terraform plan' on PR creation and 'terraform apply' on PR merge.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Automated Terraform plan/apply workflows in CI/CD pipelines is under consideration.",
    options: [
      { id: 'A', text: "Implement an automated CI/CD pipeline (e.g. Cloud Build or Atlantis) that executes terraform plan on PRs and terraform apply on merge." },
      { id: 'B', text: "Allow individual engineers to run 'terraform apply' from local laptops against production." },
      { id: 'C', text: "Store Terraform state files in unversioned email attachments." },
      { id: 'D', text: "Delete the Terraform state file after every infrastructure change." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement an automated CI/CD pipeline (e.g. Cloud Build or Atlantis) that executes terraform plan on PRs and terraform apply on merge. Automating Infrastructure as Code (IaC) via CI/CD pipelines ensures that all infrastructure changes are peer-reviewed, version-controlled, and audited. The pipeline runs `terraform plan` on pull requests for validation and executes `terraform apply` with state locking in Cloud Storage upon merge.",
    referenceUrl: "https://cloud.google.com/docs/terraform/best-practices/continuous-integration",
    tags: ["GitOps Infrastructure", "GitOps", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-356",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Secret Management in CI/CD Pipelines: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates CI/CD Security to pass private third-party API credentials securely to a Cloud Build pipeline without exposing secrets in build logs or source code files.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Secret Manager integration with Cloud Build via secretEnv bindings is under consideration.",
    options: [
      { id: 'A', text: "Retrieve secrets from Secret Manager using Cloud Build's native 'availableSecrets' and 'secretEnv' configuration blocks." },
      { id: 'B', text: "Hardcode the API credentials directly in the cloudbuild.yaml file." },
      { id: 'C', text: "Echo the API secret in cleartext to stdout during build execution." },
      { id: 'D', text: "Commit credentials to a public GitHub repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Retrieve secrets from Secret Manager using Cloud Build's native 'availableSecrets' and 'secretEnv' configuration blocks. Cloud Build provides native integration with Secret Manager. Using the `availableSecrets` block in `cloudbuild.yaml`, secrets are fetched securely at build time and injected into step environments (`secretEnv`) without exposing raw credentials in configuration files or build logs.",
    referenceUrl: "https://cloud.google.com/build/docs/securing-builds/use-secrets",
    tags: ["CI/CD Security", "Secret Management", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-357",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Secret Management in CI/CD Pipelines: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates CI/CD Security to pass private third-party API credentials securely to a Cloud Build pipeline without exposing secrets in build logs or source code files.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Secret Manager integration with Cloud Build via secretEnv bindings is under consideration.",
    options: [
      { id: 'A', text: "Retrieve secrets from Secret Manager using Cloud Build's native 'availableSecrets' and 'secretEnv' configuration blocks." },
      { id: 'B', text: "Hardcode the API credentials directly in the cloudbuild.yaml file." },
      { id: 'C', text: "Echo the API secret in cleartext to stdout during build execution." },
      { id: 'D', text: "Commit credentials to a public GitHub repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Retrieve secrets from Secret Manager using Cloud Build's native 'availableSecrets' and 'secretEnv' configuration blocks. Cloud Build provides native integration with Secret Manager. Using the `availableSecrets` block in `cloudbuild.yaml`, secrets are fetched securely at build time and injected into step environments (`secretEnv`) without exposing raw credentials in configuration files or build logs.",
    referenceUrl: "https://cloud.google.com/build/docs/securing-builds/use-secrets",
    tags: ["CI/CD Security", "Secret Management", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-358",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Secret Management in CI/CD Pipelines: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates CI/CD Security to pass private third-party API credentials securely to a Cloud Build pipeline without exposing secrets in build logs or source code files.",
    question: "Which solution implements these mandatory compliance and security controls? Secret Manager integration with Cloud Build via secretEnv bindings is under consideration.",
    options: [
      { id: 'A', text: "Retrieve secrets from Secret Manager using Cloud Build's native 'availableSecrets' and 'secretEnv' configuration blocks." },
      { id: 'B', text: "Hardcode the API credentials directly in the cloudbuild.yaml file." },
      { id: 'C', text: "Echo the API secret in cleartext to stdout during build execution." },
      { id: 'D', text: "Commit credentials to a public GitHub repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Retrieve secrets from Secret Manager using Cloud Build's native 'availableSecrets' and 'secretEnv' configuration blocks. Cloud Build provides native integration with Secret Manager. Using the `availableSecrets` block in `cloudbuild.yaml`, secrets are fetched securely at build time and injected into step environments (`secretEnv`) without exposing raw credentials in configuration files or build logs.",
    referenceUrl: "https://cloud.google.com/build/docs/securing-builds/use-secrets",
    tags: ["CI/CD Security", "Secret Management", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-359",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Secret Management in CI/CD Pipelines: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates CI/CD Security to pass private third-party API credentials securely to a Cloud Build pipeline without exposing secrets in build logs or source code files.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Secret Manager integration with Cloud Build via secretEnv bindings is under consideration.",
    options: [
      { id: 'A', text: "Retrieve secrets from Secret Manager using Cloud Build's native 'availableSecrets' and 'secretEnv' configuration blocks." },
      { id: 'B', text: "Hardcode the API credentials directly in the cloudbuild.yaml file." },
      { id: 'C', text: "Echo the API secret in cleartext to stdout during build execution." },
      { id: 'D', text: "Commit credentials to a public GitHub repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Retrieve secrets from Secret Manager using Cloud Build's native 'availableSecrets' and 'secretEnv' configuration blocks. Cloud Build provides native integration with Secret Manager. Using the `availableSecrets` block in `cloudbuild.yaml`, secrets are fetched securely at build time and injected into step environments (`secretEnv`) without exposing raw credentials in configuration files or build logs.",
    referenceUrl: "https://cloud.google.com/build/docs/securing-builds/use-secrets",
    tags: ["CI/CD Security", "Secret Management", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-360",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Secret Management in CI/CD Pipelines: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates CI/CD Security to pass private third-party API credentials securely to a Cloud Build pipeline without exposing secrets in build logs or source code files.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Secret Manager integration with Cloud Build via secretEnv bindings is under consideration.",
    options: [
      { id: 'A', text: "Retrieve secrets from Secret Manager using Cloud Build's native 'availableSecrets' and 'secretEnv' configuration blocks." },
      { id: 'B', text: "Hardcode the API credentials directly in the cloudbuild.yaml file." },
      { id: 'C', text: "Echo the API secret in cleartext to stdout during build execution." },
      { id: 'D', text: "Commit credentials to a public GitHub repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Retrieve secrets from Secret Manager using Cloud Build's native 'availableSecrets' and 'secretEnv' configuration blocks. Cloud Build provides native integration with Secret Manager. Using the `availableSecrets` block in `cloudbuild.yaml`, secrets are fetched securely at build time and injected into step environments (`secretEnv`) without exposing raw credentials in configuration files or build logs.",
    referenceUrl: "https://cloud.google.com/build/docs/securing-builds/use-secrets",
    tags: ["CI/CD Security", "Secret Management", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-361",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Database Schema Migrations in Continuous Delivery: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Database Delivery to execute database schema modifications (such as renaming a column) in a continuous delivery pipeline without causing downtime or SQL syntax errors for running services.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Zero-downtime database schema migrations using expand/contract pattern is under consideration.",
    options: [
      { id: 'A', text: "Implement the Expand/Contract (Parallel Run) pattern: add the new column (expand), dual-write, backfill data, migrate reads, and drop the old column (contract)." },
      { id: 'B', text: "Rename the column in-place in production during active daytime user traffic." },
      { id: 'C', text: "Shut down all application servers for 12 hours while running manual database alter scripts." },
      { id: 'D', text: "Never alter database schemas to avoid breaking running applications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Expand/Contract (Parallel Run) pattern: add the new column (expand), dual-write, backfill data, migrate reads, and drop the old column (contract). The Expand/Contract pattern (Parallel Run) enables zero-downtime database refactoring. In the Expand phase, new schema elements are added while maintaining backward compatibility. After application code is updated to write to both schemas, the Contract phase safely removes deprecated structures.",
    referenceUrl: "https://cloud.google.com/architecture/database-migration-concepts-principles-part-1",
    tags: ["Database Delivery", "Database Migrations", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-362",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Database Schema Migrations in Continuous Delivery: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Database Delivery to execute database schema modifications (such as renaming a column) in a continuous delivery pipeline without causing downtime or SQL syntax errors for running services.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Zero-downtime database schema migrations using expand/contract pattern is under consideration.",
    options: [
      { id: 'A', text: "Implement the Expand/Contract (Parallel Run) pattern: add the new column (expand), dual-write, backfill data, migrate reads, and drop the old column (contract)." },
      { id: 'B', text: "Rename the column in-place in production during active daytime user traffic." },
      { id: 'C', text: "Shut down all application servers for 12 hours while running manual database alter scripts." },
      { id: 'D', text: "Never alter database schemas to avoid breaking running applications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Expand/Contract (Parallel Run) pattern: add the new column (expand), dual-write, backfill data, migrate reads, and drop the old column (contract). The Expand/Contract pattern (Parallel Run) enables zero-downtime database refactoring. In the Expand phase, new schema elements are added while maintaining backward compatibility. After application code is updated to write to both schemas, the Contract phase safely removes deprecated structures.",
    referenceUrl: "https://cloud.google.com/architecture/database-migration-concepts-principles-part-1",
    tags: ["Database Delivery", "Database Migrations", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-363",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Database Schema Migrations in Continuous Delivery: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Database Delivery to execute database schema modifications (such as renaming a column) in a continuous delivery pipeline without causing downtime or SQL syntax errors for running services.",
    question: "Which solution implements these mandatory compliance and security controls? Zero-downtime database schema migrations using expand/contract pattern is under consideration.",
    options: [
      { id: 'A', text: "Implement the Expand/Contract (Parallel Run) pattern: add the new column (expand), dual-write, backfill data, migrate reads, and drop the old column (contract)." },
      { id: 'B', text: "Rename the column in-place in production during active daytime user traffic." },
      { id: 'C', text: "Shut down all application servers for 12 hours while running manual database alter scripts." },
      { id: 'D', text: "Never alter database schemas to avoid breaking running applications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Expand/Contract (Parallel Run) pattern: add the new column (expand), dual-write, backfill data, migrate reads, and drop the old column (contract). The Expand/Contract pattern (Parallel Run) enables zero-downtime database refactoring. In the Expand phase, new schema elements are added while maintaining backward compatibility. After application code is updated to write to both schemas, the Contract phase safely removes deprecated structures.",
    referenceUrl: "https://cloud.google.com/architecture/database-migration-concepts-principles-part-1",
    tags: ["Database Delivery", "Database Migrations", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-364",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Database Schema Migrations in Continuous Delivery: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Database Delivery to execute database schema modifications (such as renaming a column) in a continuous delivery pipeline without causing downtime or SQL syntax errors for running services.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Zero-downtime database schema migrations using expand/contract pattern is under consideration.",
    options: [
      { id: 'A', text: "Implement the Expand/Contract (Parallel Run) pattern: add the new column (expand), dual-write, backfill data, migrate reads, and drop the old column (contract)." },
      { id: 'B', text: "Rename the column in-place in production during active daytime user traffic." },
      { id: 'C', text: "Shut down all application servers for 12 hours while running manual database alter scripts." },
      { id: 'D', text: "Never alter database schemas to avoid breaking running applications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Expand/Contract (Parallel Run) pattern: add the new column (expand), dual-write, backfill data, migrate reads, and drop the old column (contract). The Expand/Contract pattern (Parallel Run) enables zero-downtime database refactoring. In the Expand phase, new schema elements are added while maintaining backward compatibility. After application code is updated to write to both schemas, the Contract phase safely removes deprecated structures.",
    referenceUrl: "https://cloud.google.com/architecture/database-migration-concepts-principles-part-1",
    tags: ["Database Delivery", "Database Migrations", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-365",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Database Schema Migrations in Continuous Delivery: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Database Delivery to execute database schema modifications (such as renaming a column) in a continuous delivery pipeline without causing downtime or SQL syntax errors for running services.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Zero-downtime database schema migrations using expand/contract pattern is under consideration.",
    options: [
      { id: 'A', text: "Implement the Expand/Contract (Parallel Run) pattern: add the new column (expand), dual-write, backfill data, migrate reads, and drop the old column (contract)." },
      { id: 'B', text: "Rename the column in-place in production during active daytime user traffic." },
      { id: 'C', text: "Shut down all application servers for 12 hours while running manual database alter scripts." },
      { id: 'D', text: "Never alter database schemas to avoid breaking running applications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Expand/Contract (Parallel Run) pattern: add the new column (expand), dual-write, backfill data, migrate reads, and drop the old column (contract). The Expand/Contract pattern (Parallel Run) enables zero-downtime database refactoring. In the Expand phase, new schema elements are added while maintaining backward compatibility. After application code is updated to write to both schemas, the Contract phase safely removes deprecated structures.",
    referenceUrl: "https://cloud.google.com/architecture/database-migration-concepts-principles-part-1",
    tags: ["Database Delivery", "Database Migrations", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-366",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Custom Metrics: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Metrics & Telemetry to collect custom business and operational metrics from containerized workloads running in GKE and ingest them into Cloud Monitoring.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? OpenTelemetry collector exporting custom application metrics to Cloud Monitoring is under consideration.",
    options: [
      { id: 'A', text: "Deploy the OpenTelemetry Collector as a sidecar or DaemonSet to scrape Prometheus endpoints and export metrics to Cloud Monitoring using the Google Cloud Monitoring exporter." },
      { id: 'B', text: "Write metrics to flat text files inside containers and manually SCP them periodically to an external server." },
      { id: 'C', text: "Require application threads to perform synchronous HTTP POST calls to an external logging SaaS on every incoming request." },
      { id: 'D', text: "Disable all metric collection to conserve network egress bandwidth." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the OpenTelemetry Collector as a sidecar or DaemonSet to scrape Prometheus endpoints and export metrics to Cloud Monitoring using the Google Cloud Monitoring exporter. Deploying the OpenTelemetry Collector allows standard metric collection from Prometheus endpoints and direct ingestion into Cloud Monitoring via the Google Cloud Monitoring exporter, decoupling instrumentation from storage and keeping latency minimal.",
    referenceUrl: "https://cloud.google.com/monitoring/custom-metrics/open-telemetry",
    tags: ["Metrics & Telemetry", "Telemetry Collection", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-367",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Custom Metrics: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Metrics & Telemetry to collect custom business and operational metrics from containerized workloads running in GKE and ingest them into Cloud Monitoring.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? OpenTelemetry collector exporting custom application metrics to Cloud Monitoring is under consideration.",
    options: [
      { id: 'A', text: "Deploy the OpenTelemetry Collector as a sidecar or DaemonSet to scrape Prometheus endpoints and export metrics to Cloud Monitoring using the Google Cloud Monitoring exporter." },
      { id: 'B', text: "Write metrics to flat text files inside containers and manually SCP them periodically to an external server." },
      { id: 'C', text: "Require application threads to perform synchronous HTTP POST calls to an external logging SaaS on every incoming request." },
      { id: 'D', text: "Disable all metric collection to conserve network egress bandwidth." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the OpenTelemetry Collector as a sidecar or DaemonSet to scrape Prometheus endpoints and export metrics to Cloud Monitoring using the Google Cloud Monitoring exporter. Deploying the OpenTelemetry Collector allows standard metric collection from Prometheus endpoints and direct ingestion into Cloud Monitoring via the Google Cloud Monitoring exporter, decoupling instrumentation from storage and keeping latency minimal.",
    referenceUrl: "https://cloud.google.com/monitoring/custom-metrics/open-telemetry",
    tags: ["Metrics & Telemetry", "Telemetry Collection", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-368",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Custom Metrics: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Metrics & Telemetry to collect custom business and operational metrics from containerized workloads running in GKE and ingest them into Cloud Monitoring.",
    question: "Which solution implements these mandatory compliance and security controls? OpenTelemetry collector exporting custom application metrics to Cloud Monitoring is under consideration.",
    options: [
      { id: 'A', text: "Deploy the OpenTelemetry Collector as a sidecar or DaemonSet to scrape Prometheus endpoints and export metrics to Cloud Monitoring using the Google Cloud Monitoring exporter." },
      { id: 'B', text: "Write metrics to flat text files inside containers and manually SCP them periodically to an external server." },
      { id: 'C', text: "Require application threads to perform synchronous HTTP POST calls to an external logging SaaS on every incoming request." },
      { id: 'D', text: "Disable all metric collection to conserve network egress bandwidth." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the OpenTelemetry Collector as a sidecar or DaemonSet to scrape Prometheus endpoints and export metrics to Cloud Monitoring using the Google Cloud Monitoring exporter. Deploying the OpenTelemetry Collector allows standard metric collection from Prometheus endpoints and direct ingestion into Cloud Monitoring via the Google Cloud Monitoring exporter, decoupling instrumentation from storage and keeping latency minimal.",
    referenceUrl: "https://cloud.google.com/monitoring/custom-metrics/open-telemetry",
    tags: ["Metrics & Telemetry", "Telemetry Collection", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-369",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Custom Metrics: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Metrics & Telemetry to collect custom business and operational metrics from containerized workloads running in GKE and ingest them into Cloud Monitoring.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? OpenTelemetry collector exporting custom application metrics to Cloud Monitoring is under consideration.",
    options: [
      { id: 'A', text: "Deploy the OpenTelemetry Collector as a sidecar or DaemonSet to scrape Prometheus endpoints and export metrics to Cloud Monitoring using the Google Cloud Monitoring exporter." },
      { id: 'B', text: "Write metrics to flat text files inside containers and manually SCP them periodically to an external server." },
      { id: 'C', text: "Require application threads to perform synchronous HTTP POST calls to an external logging SaaS on every incoming request." },
      { id: 'D', text: "Disable all metric collection to conserve network egress bandwidth." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the OpenTelemetry Collector as a sidecar or DaemonSet to scrape Prometheus endpoints and export metrics to Cloud Monitoring using the Google Cloud Monitoring exporter. Deploying the OpenTelemetry Collector allows standard metric collection from Prometheus endpoints and direct ingestion into Cloud Monitoring via the Google Cloud Monitoring exporter, decoupling instrumentation from storage and keeping latency minimal.",
    referenceUrl: "https://cloud.google.com/monitoring/custom-metrics/open-telemetry",
    tags: ["Metrics & Telemetry", "Telemetry Collection", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-370",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Custom Metrics: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Metrics & Telemetry to collect custom business and operational metrics from containerized workloads running in GKE and ingest them into Cloud Monitoring.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? OpenTelemetry collector exporting custom application metrics to Cloud Monitoring is under consideration.",
    options: [
      { id: 'A', text: "Deploy the OpenTelemetry Collector as a sidecar or DaemonSet to scrape Prometheus endpoints and export metrics to Cloud Monitoring using the Google Cloud Monitoring exporter." },
      { id: 'B', text: "Write metrics to flat text files inside containers and manually SCP them periodically to an external server." },
      { id: 'C', text: "Require application threads to perform synchronous HTTP POST calls to an external logging SaaS on every incoming request." },
      { id: 'D', text: "Disable all metric collection to conserve network egress bandwidth." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the OpenTelemetry Collector as a sidecar or DaemonSet to scrape Prometheus endpoints and export metrics to Cloud Monitoring using the Google Cloud Monitoring exporter. Deploying the OpenTelemetry Collector allows standard metric collection from Prometheus endpoints and direct ingestion into Cloud Monitoring via the Google Cloud Monitoring exporter, decoupling instrumentation from storage and keeping latency minimal.",
    referenceUrl: "https://cloud.google.com/monitoring/custom-metrics/open-telemetry",
    tags: ["Metrics & Telemetry", "Telemetry Collection", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-371",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Alerting Policies: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Alerting & Notifications to configure alerting for a customer-facing service to notify on-call engineers when the service error budget is depleting rapidly without generating alert fatigue during minor spikes.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Burn-rate alerting policies based on multi-window multi-burn-rate SLI consumption is under consideration.",
    options: [
      { id: 'A', text: "Implement multi-window, multi-burn-rate alerting policies in Cloud Monitoring that trigger notifications based on both short-term (fast burn) and long-term (slow burn) error budget consumption." },
      { id: 'B', text: "Configure alerts to page on-call engineers immediately whenever a single 500 error response occurs." },
      { id: 'C', text: "Set a static CPU threshold alert at 50% utilization regardless of user request success rate." },
      { id: 'D', text: "Disable all automated alerts and rely on customer tweets and support tickets to detect service degradation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement multi-window, multi-burn-rate alerting policies in Cloud Monitoring that trigger notifications based on both short-term (fast burn) and long-term (slow burn) error budget consumption. Multi-window multi-burn-rate alerts evaluate both short lookback windows (to detect rapid, catastrophic budget depletion) and long lookback windows (to detect slow, continuous erosion). This SRE standard avoids false alarms while ensuring prompt intervention when budgets are at risk.",
    referenceUrl: "https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/alerting-on-budget-burn-rate",
    tags: ["Alerting & Notifications", "SLO Alerting", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-372",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Alerting Policies: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Alerting & Notifications to configure alerting for a customer-facing service to notify on-call engineers when the service error budget is depleting rapidly without generating alert fatigue during minor spikes.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Burn-rate alerting policies based on multi-window multi-burn-rate SLI consumption is under consideration.",
    options: [
      { id: 'A', text: "Implement multi-window, multi-burn-rate alerting policies in Cloud Monitoring that trigger notifications based on both short-term (fast burn) and long-term (slow burn) error budget consumption." },
      { id: 'B', text: "Configure alerts to page on-call engineers immediately whenever a single 500 error response occurs." },
      { id: 'C', text: "Set a static CPU threshold alert at 50% utilization regardless of user request success rate." },
      { id: 'D', text: "Disable all automated alerts and rely on customer tweets and support tickets to detect service degradation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement multi-window, multi-burn-rate alerting policies in Cloud Monitoring that trigger notifications based on both short-term (fast burn) and long-term (slow burn) error budget consumption. Multi-window multi-burn-rate alerts evaluate both short lookback windows (to detect rapid, catastrophic budget depletion) and long lookback windows (to detect slow, continuous erosion). This SRE standard avoids false alarms while ensuring prompt intervention when budgets are at risk.",
    referenceUrl: "https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/alerting-on-budget-burn-rate",
    tags: ["Alerting & Notifications", "SLO Alerting", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-373",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Alerting Policies: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Alerting & Notifications to configure alerting for a customer-facing service to notify on-call engineers when the service error budget is depleting rapidly without generating alert fatigue during minor spikes.",
    question: "Which solution implements these mandatory compliance and security controls? Burn-rate alerting policies based on multi-window multi-burn-rate SLI consumption is under consideration.",
    options: [
      { id: 'A', text: "Implement multi-window, multi-burn-rate alerting policies in Cloud Monitoring that trigger notifications based on both short-term (fast burn) and long-term (slow burn) error budget consumption." },
      { id: 'B', text: "Configure alerts to page on-call engineers immediately whenever a single 500 error response occurs." },
      { id: 'C', text: "Set a static CPU threshold alert at 50% utilization regardless of user request success rate." },
      { id: 'D', text: "Disable all automated alerts and rely on customer tweets and support tickets to detect service degradation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement multi-window, multi-burn-rate alerting policies in Cloud Monitoring that trigger notifications based on both short-term (fast burn) and long-term (slow burn) error budget consumption. Multi-window multi-burn-rate alerts evaluate both short lookback windows (to detect rapid, catastrophic budget depletion) and long lookback windows (to detect slow, continuous erosion). This SRE standard avoids false alarms while ensuring prompt intervention when budgets are at risk.",
    referenceUrl: "https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/alerting-on-budget-burn-rate",
    tags: ["Alerting & Notifications", "SLO Alerting", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-374",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Alerting Policies: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Alerting & Notifications to configure alerting for a customer-facing service to notify on-call engineers when the service error budget is depleting rapidly without generating alert fatigue during minor spikes.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Burn-rate alerting policies based on multi-window multi-burn-rate SLI consumption is under consideration.",
    options: [
      { id: 'A', text: "Implement multi-window, multi-burn-rate alerting policies in Cloud Monitoring that trigger notifications based on both short-term (fast burn) and long-term (slow burn) error budget consumption." },
      { id: 'B', text: "Configure alerts to page on-call engineers immediately whenever a single 500 error response occurs." },
      { id: 'C', text: "Set a static CPU threshold alert at 50% utilization regardless of user request success rate." },
      { id: 'D', text: "Disable all automated alerts and rely on customer tweets and support tickets to detect service degradation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement multi-window, multi-burn-rate alerting policies in Cloud Monitoring that trigger notifications based on both short-term (fast burn) and long-term (slow burn) error budget consumption. Multi-window multi-burn-rate alerts evaluate both short lookback windows (to detect rapid, catastrophic budget depletion) and long lookback windows (to detect slow, continuous erosion). This SRE standard avoids false alarms while ensuring prompt intervention when budgets are at risk.",
    referenceUrl: "https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/alerting-on-budget-burn-rate",
    tags: ["Alerting & Notifications", "SLO Alerting", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-375",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Alerting Policies: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Alerting & Notifications to configure alerting for a customer-facing service to notify on-call engineers when the service error budget is depleting rapidly without generating alert fatigue during minor spikes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Burn-rate alerting policies based on multi-window multi-burn-rate SLI consumption is under consideration.",
    options: [
      { id: 'A', text: "Implement multi-window, multi-burn-rate alerting policies in Cloud Monitoring that trigger notifications based on both short-term (fast burn) and long-term (slow burn) error budget consumption." },
      { id: 'B', text: "Configure alerts to page on-call engineers immediately whenever a single 500 error response occurs." },
      { id: 'C', text: "Set a static CPU threshold alert at 50% utilization regardless of user request success rate." },
      { id: 'D', text: "Disable all automated alerts and rely on customer tweets and support tickets to detect service degradation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement multi-window, multi-burn-rate alerting policies in Cloud Monitoring that trigger notifications based on both short-term (fast burn) and long-term (slow burn) error budget consumption. Multi-window multi-burn-rate alerts evaluate both short lookback windows (to detect rapid, catastrophic budget depletion) and long lookback windows (to detect slow, continuous erosion). This SRE standard avoids false alarms while ensuring prompt intervention when budgets are at risk.",
    referenceUrl: "https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/alerting-on-budget-burn-rate",
    tags: ["Alerting & Notifications", "SLO Alerting", "Resilience Failure"]
  }
];

export default GCP_PCDOE_QUESTIONS_15;
