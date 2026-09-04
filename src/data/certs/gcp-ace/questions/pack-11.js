export const GCP_ACE_QUESTIONS_11 = [
  {
    id: "gcp-ace-251",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Google Cloud Resource Hierarchy: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Google Cloud Resource Management to structure enterprise cloud governance so that corporate policies and IAM permissions cascade from the organization down through department folders to development and production projects.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Resource hierarchy: Organization, Folders, Projects, and Resources is under consideration.",
    options: [
      { id: 'A', text: "Manage cloud infrastructure using independent personal Gmail accounts without an organization node." },
      { id: 'B', text: "Deploy all company workloads into a single flat project without folders." },
      { id: 'C', text: "Create separate unlinked Google Cloud organizations for every developer." },
      { id: 'D', text: "Establish a resource hierarchy with an Organization node, structured department Folders, and scoped Projects." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Establish a resource hierarchy with an Organization node, structured department Folders, and scoped Projects. The Google Cloud resource hierarchy consists of Organization, Folders, Projects, and Resources. Policies and IAM role bindings configured at higher parent nodes (Organization or Folder) automatically inherit down to child projects and resources, enabling centralized governance.",
    referenceUrl: "https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy",
    tags: ["Google Cloud Resource Management", "Resource Hierarchy", "Dr Failover"]
  },
  {
    id: "gcp-ace-252",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Google Cloud Resource Hierarchy: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Google Cloud Resource Management to structure enterprise cloud governance so that corporate policies and IAM permissions cascade from the organization down through department folders to development and production projects.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Resource hierarchy: Organization, Folders, Projects, and Resources is under consideration.",
    options: [
      { id: 'A', text: "Deploy all company workloads into a single flat project without folders." },
      { id: 'B', text: "Create separate unlinked Google Cloud organizations for every developer." },
      { id: 'C', text: "Establish a resource hierarchy with an Organization node, structured department Folders, and scoped Projects." },
      { id: 'D', text: "Manage cloud infrastructure using independent personal Gmail accounts without an organization node." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Establish a resource hierarchy with an Organization node, structured department Folders, and scoped Projects. The Google Cloud resource hierarchy consists of Organization, Folders, Projects, and Resources. Policies and IAM role bindings configured at higher parent nodes (Organization or Folder) automatically inherit down to child projects and resources, enabling centralized governance.",
    referenceUrl: "https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy",
    tags: ["Google Cloud Resource Management", "Resource Hierarchy", "High Load Scale"]
  },
  {
    id: "gcp-ace-253",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Google Cloud Resource Hierarchy: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Google Cloud Resource Management to structure enterprise cloud governance so that corporate policies and IAM permissions cascade from the organization down through department folders to development and production projects.",
    question: "Which solution properly implements these mandatory security and governance controls? Resource hierarchy: Organization, Folders, Projects, and Resources is under consideration.",
    options: [
      { id: 'A', text: "Deploy all company workloads into a single flat project without folders." },
      { id: 'B', text: "Create separate unlinked Google Cloud organizations for every developer." },
      { id: 'C', text: "Manage cloud infrastructure using independent personal Gmail accounts without an organization node." },
      { id: 'D', text: "Establish a resource hierarchy with an Organization node, structured department Folders, and scoped Projects." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Establish a resource hierarchy with an Organization node, structured department Folders, and scoped Projects. The Google Cloud resource hierarchy consists of Organization, Folders, Projects, and Resources. Policies and IAM role bindings configured at higher parent nodes (Organization or Folder) automatically inherit down to child projects and resources, enabling centralized governance.",
    referenceUrl: "https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy",
    tags: ["Google Cloud Resource Management", "Resource Hierarchy", "Security Compliance"]
  },
  {
    id: "gcp-ace-254",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Google Cloud Resource Hierarchy: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Google Cloud Resource Management to structure enterprise cloud governance so that corporate policies and IAM permissions cascade from the organization down through department folders to development and production projects.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Resource hierarchy: Organization, Folders, Projects, and Resources is under consideration.",
    options: [
      { id: 'A', text: "Deploy all company workloads into a single flat project without folders." },
      { id: 'B', text: "Manage cloud infrastructure using independent personal Gmail accounts without an organization node." },
      { id: 'C', text: "Establish a resource hierarchy with an Organization node, structured department Folders, and scoped Projects." },
      { id: 'D', text: "Create separate unlinked Google Cloud organizations for every developer." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Establish a resource hierarchy with an Organization node, structured department Folders, and scoped Projects. The Google Cloud resource hierarchy consists of Organization, Folders, Projects, and Resources. Policies and IAM role bindings configured at higher parent nodes (Organization or Folder) automatically inherit down to child projects and resources, enabling centralized governance.",
    referenceUrl: "https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy",
    tags: ["Google Cloud Resource Management", "Resource Hierarchy", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-255",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Google Cloud Resource Hierarchy: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Google Cloud Resource Management to structure enterprise cloud governance so that corporate policies and IAM permissions cascade from the organization down through department folders to development and production projects.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Resource hierarchy: Organization, Folders, Projects, and Resources is under consideration.",
    options: [
      { id: 'A', text: "Establish a resource hierarchy with an Organization node, structured department Folders, and scoped Projects." },
      { id: 'B', text: "Deploy all company workloads into a single flat project without folders." },
      { id: 'C', text: "Manage cloud infrastructure using independent personal Gmail accounts without an organization node." },
      { id: 'D', text: "Create separate unlinked Google Cloud organizations for every developer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Establish a resource hierarchy with an Organization node, structured department Folders, and scoped Projects. The Google Cloud resource hierarchy consists of Organization, Folders, Projects, and Resources. Policies and IAM role bindings configured at higher parent nodes (Organization or Folder) automatically inherit down to child projects and resources, enabling centralized governance.",
    referenceUrl: "https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy",
    tags: ["Google Cloud Resource Management", "Resource Hierarchy", "Resilience Failure"]
  },
  {
    id: "gcp-ace-256",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Billing Accounts and Project Billing Association: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Google Cloud Billing to link multiple independent development and production projects to a central enterprise billing account and export daily billing metrics to BigQuery for analysis.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Cloud Billing Accounts and multi-project billing export is under consideration.",
    options: [
      { id: 'A', text: "Enter individual physical credit cards separately into every project." },
      { id: 'B', text: "Disable billing on production projects to prevent accidental overages." },
      { id: 'C', text: "Rely on quarterly paper invoices sent by mail without automated data export." },
      { id: 'D', text: "Link the projects to the central Cloud Billing Account and configure daily Cloud Billing data export to BigQuery." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Link the projects to the central Cloud Billing Account and configure daily Cloud Billing data export to BigQuery. A Google Cloud Billing Account tracks costs across one or more linked projects. Enabling Cloud Billing export to BigQuery delivers detailed daily cost and pricing telemetry into BigQuery datasets for custom reporting, dashboarding, and audit tracking.",
    referenceUrl: "https://cloud.google.com/billing/docs/how-to/export-data-bigquery",
    tags: ["Google Cloud Billing", "Billing", "Dr Failover"]
  },
  {
    id: "gcp-ace-257",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Billing Accounts and Project Billing Association: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Google Cloud Billing to link multiple independent development and production projects to a central enterprise billing account and export daily billing metrics to BigQuery for analysis.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Cloud Billing Accounts and multi-project billing export is under consideration.",
    options: [
      { id: 'A', text: "Rely on quarterly paper invoices sent by mail without automated data export." },
      { id: 'B', text: "Enter individual physical credit cards separately into every project." },
      { id: 'C', text: "Link the projects to the central Cloud Billing Account and configure daily Cloud Billing data export to BigQuery." },
      { id: 'D', text: "Disable billing on production projects to prevent accidental overages." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Link the projects to the central Cloud Billing Account and configure daily Cloud Billing data export to BigQuery. A Google Cloud Billing Account tracks costs across one or more linked projects. Enabling Cloud Billing export to BigQuery delivers detailed daily cost and pricing telemetry into BigQuery datasets for custom reporting, dashboarding, and audit tracking.",
    referenceUrl: "https://cloud.google.com/billing/docs/how-to/export-data-bigquery",
    tags: ["Google Cloud Billing", "Billing", "High Load Scale"]
  },
  {
    id: "gcp-ace-258",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Billing Accounts and Project Billing Association: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Google Cloud Billing to link multiple independent development and production projects to a central enterprise billing account and export daily billing metrics to BigQuery for analysis.",
    question: "Which solution properly implements these mandatory security and governance controls? Cloud Billing Accounts and multi-project billing export is under consideration.",
    options: [
      { id: 'A', text: "Link the projects to the central Cloud Billing Account and configure daily Cloud Billing data export to BigQuery." },
      { id: 'B', text: "Rely on quarterly paper invoices sent by mail without automated data export." },
      { id: 'C', text: "Enter individual physical credit cards separately into every project." },
      { id: 'D', text: "Disable billing on production projects to prevent accidental overages." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Link the projects to the central Cloud Billing Account and configure daily Cloud Billing data export to BigQuery. A Google Cloud Billing Account tracks costs across one or more linked projects. Enabling Cloud Billing export to BigQuery delivers detailed daily cost and pricing telemetry into BigQuery datasets for custom reporting, dashboarding, and audit tracking.",
    referenceUrl: "https://cloud.google.com/billing/docs/how-to/export-data-bigquery",
    tags: ["Google Cloud Billing", "Billing", "Security Compliance"]
  },
  {
    id: "gcp-ace-259",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Billing Accounts and Project Billing Association: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Google Cloud Billing to link multiple independent development and production projects to a central enterprise billing account and export daily billing metrics to BigQuery for analysis.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Cloud Billing Accounts and multi-project billing export is under consideration.",
    options: [
      { id: 'A', text: "Link the projects to the central Cloud Billing Account and configure daily Cloud Billing data export to BigQuery." },
      { id: 'B', text: "Rely on quarterly paper invoices sent by mail without automated data export." },
      { id: 'C', text: "Enter individual physical credit cards separately into every project." },
      { id: 'D', text: "Disable billing on production projects to prevent accidental overages." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Link the projects to the central Cloud Billing Account and configure daily Cloud Billing data export to BigQuery. A Google Cloud Billing Account tracks costs across one or more linked projects. Enabling Cloud Billing export to BigQuery delivers detailed daily cost and pricing telemetry into BigQuery datasets for custom reporting, dashboarding, and audit tracking.",
    referenceUrl: "https://cloud.google.com/billing/docs/how-to/export-data-bigquery",
    tags: ["Google Cloud Billing", "Billing", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-260",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Billing Accounts and Project Billing Association: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Google Cloud Billing to link multiple independent development and production projects to a central enterprise billing account and export daily billing metrics to BigQuery for analysis.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Cloud Billing Accounts and multi-project billing export is under consideration.",
    options: [
      { id: 'A', text: "Rely on quarterly paper invoices sent by mail without automated data export." },
      { id: 'B', text: "Link the projects to the central Cloud Billing Account and configure daily Cloud Billing data export to BigQuery." },
      { id: 'C', text: "Enter individual physical credit cards separately into every project." },
      { id: 'D', text: "Disable billing on production projects to prevent accidental overages." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Link the projects to the central Cloud Billing Account and configure daily Cloud Billing data export to BigQuery. A Google Cloud Billing Account tracks costs across one or more linked projects. Enabling Cloud Billing export to BigQuery delivers detailed daily cost and pricing telemetry into BigQuery datasets for custom reporting, dashboarding, and audit tracking.",
    referenceUrl: "https://cloud.google.com/billing/docs/how-to/export-data-bigquery",
    tags: ["Google Cloud Billing", "Billing", "Resilience Failure"]
  },
  {
    id: "gcp-ace-261",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Billing Budgets and Alert Thresholds: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Google Cloud Billing to notify finance managers via email and publish a message to a Pub/Sub topic when a department's monthly cloud expenditure reaches 50%, 90%, and 100% of its budget.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Billing budgets with percentage-based threshold alerts and Pub/Sub notifications is under consideration.",
    options: [
      { id: 'A', text: "Set compute engine quota limits to zero when estimated costs exceed expectations." },
      { id: 'B', text: "Create a Cloud Billing Budget with threshold rules at 50%, 90%, and 100% connected to email recipients and a Pub/Sub topic." },
      { id: 'C', text: "Manually check the billing console on the last day of each billing cycle." },
      { id: 'D', text: "Instruct engineers to stop all virtual machines when budget limits are approached." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a Cloud Billing Budget with threshold rules at 50%, 90%, and 100% connected to email recipients and a Pub/Sub topic. Cloud Billing Budgets allow tracking costs against defined monthly spending targets. When actual or forecasted spending crosses specified percentage thresholds, budgets send email notifications to billing administrators and trigger Pub/Sub topics for automated remediation.",
    referenceUrl: "https://cloud.google.com/billing/docs/how-to/budgets",
    tags: ["Google Cloud Billing", "Billing", "Dr Failover"]
  },
  {
    id: "gcp-ace-262",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Billing Budgets and Alert Thresholds: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Google Cloud Billing to notify finance managers via email and publish a message to a Pub/Sub topic when a department's monthly cloud expenditure reaches 50%, 90%, and 100% of its budget.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Billing budgets with percentage-based threshold alerts and Pub/Sub notifications is under consideration.",
    options: [
      { id: 'A', text: "Manually check the billing console on the last day of each billing cycle." },
      { id: 'B', text: "Create a Cloud Billing Budget with threshold rules at 50%, 90%, and 100% connected to email recipients and a Pub/Sub topic." },
      { id: 'C', text: "Instruct engineers to stop all virtual machines when budget limits are approached." },
      { id: 'D', text: "Set compute engine quota limits to zero when estimated costs exceed expectations." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a Cloud Billing Budget with threshold rules at 50%, 90%, and 100% connected to email recipients and a Pub/Sub topic. Cloud Billing Budgets allow tracking costs against defined monthly spending targets. When actual or forecasted spending crosses specified percentage thresholds, budgets send email notifications to billing administrators and trigger Pub/Sub topics for automated remediation.",
    referenceUrl: "https://cloud.google.com/billing/docs/how-to/budgets",
    tags: ["Google Cloud Billing", "Billing", "High Load Scale"]
  },
  {
    id: "gcp-ace-263",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Billing Budgets and Alert Thresholds: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Google Cloud Billing to notify finance managers via email and publish a message to a Pub/Sub topic when a department's monthly cloud expenditure reaches 50%, 90%, and 100% of its budget.",
    question: "Which solution properly implements these mandatory security and governance controls? Billing budgets with percentage-based threshold alerts and Pub/Sub notifications is under consideration.",
    options: [
      { id: 'A', text: "Set compute engine quota limits to zero when estimated costs exceed expectations." },
      { id: 'B', text: "Create a Cloud Billing Budget with threshold rules at 50%, 90%, and 100% connected to email recipients and a Pub/Sub topic." },
      { id: 'C', text: "Manually check the billing console on the last day of each billing cycle." },
      { id: 'D', text: "Instruct engineers to stop all virtual machines when budget limits are approached." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a Cloud Billing Budget with threshold rules at 50%, 90%, and 100% connected to email recipients and a Pub/Sub topic. Cloud Billing Budgets allow tracking costs against defined monthly spending targets. When actual or forecasted spending crosses specified percentage thresholds, budgets send email notifications to billing administrators and trigger Pub/Sub topics for automated remediation.",
    referenceUrl: "https://cloud.google.com/billing/docs/how-to/budgets",
    tags: ["Google Cloud Billing", "Billing", "Security Compliance"]
  },
  {
    id: "gcp-ace-264",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Billing Budgets and Alert Thresholds: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Google Cloud Billing to notify finance managers via email and publish a message to a Pub/Sub topic when a department's monthly cloud expenditure reaches 50%, 90%, and 100% of its budget.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Billing budgets with percentage-based threshold alerts and Pub/Sub notifications is under consideration.",
    options: [
      { id: 'A', text: "Create a Cloud Billing Budget with threshold rules at 50%, 90%, and 100% connected to email recipients and a Pub/Sub topic." },
      { id: 'B', text: "Manually check the billing console on the last day of each billing cycle." },
      { id: 'C', text: "Set compute engine quota limits to zero when estimated costs exceed expectations." },
      { id: 'D', text: "Instruct engineers to stop all virtual machines when budget limits are approached." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Cloud Billing Budget with threshold rules at 50%, 90%, and 100% connected to email recipients and a Pub/Sub topic. Cloud Billing Budgets allow tracking costs against defined monthly spending targets. When actual or forecasted spending crosses specified percentage thresholds, budgets send email notifications to billing administrators and trigger Pub/Sub topics for automated remediation.",
    referenceUrl: "https://cloud.google.com/billing/docs/how-to/budgets",
    tags: ["Google Cloud Billing", "Billing", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-265",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Billing Budgets and Alert Thresholds: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Google Cloud Billing to notify finance managers via email and publish a message to a Pub/Sub topic when a department's monthly cloud expenditure reaches 50%, 90%, and 100% of its budget.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Billing budgets with percentage-based threshold alerts and Pub/Sub notifications is under consideration.",
    options: [
      { id: 'A', text: "Create a Cloud Billing Budget with threshold rules at 50%, 90%, and 100% connected to email recipients and a Pub/Sub topic." },
      { id: 'B', text: "Manually check the billing console on the last day of each billing cycle." },
      { id: 'C', text: "Set compute engine quota limits to zero when estimated costs exceed expectations." },
      { id: 'D', text: "Instruct engineers to stop all virtual machines when budget limits are approached." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Cloud Billing Budget with threshold rules at 50%, 90%, and 100% connected to email recipients and a Pub/Sub topic. Cloud Billing Budgets allow tracking costs against defined monthly spending targets. When actual or forecasted spending crosses specified percentage thresholds, budgets send email notifications to billing administrators and trigger Pub/Sub topics for automated remediation.",
    referenceUrl: "https://cloud.google.com/billing/docs/how-to/budgets",
    tags: ["Google Cloud Billing", "Billing", "Resilience Failure"]
  },
  {
    id: "gcp-ace-266",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Google Cloud CLI (gcloud) Configuration and Authentication: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Google Cloud CLI to switch administrative CLI contexts seamlessly between production and staging projects across different service accounts on a local workstation.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? gcloud configurations, named profiles, and service account activation is under consideration.",
    options: [
      { id: 'A', text: "Reinstall the entire Google Cloud SDK every time a project context change is needed." },
      { id: 'B', text: "Use only the Cloud Console web interface to avoid configuring local CLI profiles." },
      { id: 'C', text: "Create named gcloud configurations using 'gcloud config configurations create' and activate them with 'gcloud config configurations activate'." },
      { id: 'D', text: "Hardcode OAuth access tokens in local shell startup scripts." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create named gcloud configurations using 'gcloud config configurations create' and activate them with 'gcloud config configurations activate'. The `gcloud` CLI supports multiple named configurations (profiles) that store project IDs, compute zones, and authenticated accounts. Administrators switch between environments using `gcloud config configurations activate [NAME]` without re-authenticating.",
    referenceUrl: "https://cloud.google.com/sdk/docs/configurations",
    tags: ["Google Cloud CLI", "gcloud CLI", "Dr Failover"]
  },
  {
    id: "gcp-ace-267",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Google Cloud CLI (gcloud) Configuration and Authentication: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Google Cloud CLI to switch administrative CLI contexts seamlessly between production and staging projects across different service accounts on a local workstation.",
    question: "Which architectural approach should the team select to manage this demand efficiently? gcloud configurations, named profiles, and service account activation is under consideration.",
    options: [
      { id: 'A', text: "Create named gcloud configurations using 'gcloud config configurations create' and activate them with 'gcloud config configurations activate'." },
      { id: 'B', text: "Hardcode OAuth access tokens in local shell startup scripts." },
      { id: 'C', text: "Reinstall the entire Google Cloud SDK every time a project context change is needed." },
      { id: 'D', text: "Use only the Cloud Console web interface to avoid configuring local CLI profiles." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create named gcloud configurations using 'gcloud config configurations create' and activate them with 'gcloud config configurations activate'. The `gcloud` CLI supports multiple named configurations (profiles) that store project IDs, compute zones, and authenticated accounts. Administrators switch between environments using `gcloud config configurations activate [NAME]` without re-authenticating.",
    referenceUrl: "https://cloud.google.com/sdk/docs/configurations",
    tags: ["Google Cloud CLI", "gcloud CLI", "High Load Scale"]
  },
  {
    id: "gcp-ace-268",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Google Cloud CLI (gcloud) Configuration and Authentication: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Google Cloud CLI to switch administrative CLI contexts seamlessly between production and staging projects across different service accounts on a local workstation.",
    question: "Which solution properly implements these mandatory security and governance controls? gcloud configurations, named profiles, and service account activation is under consideration.",
    options: [
      { id: 'A', text: "Use only the Cloud Console web interface to avoid configuring local CLI profiles." },
      { id: 'B', text: "Create named gcloud configurations using 'gcloud config configurations create' and activate them with 'gcloud config configurations activate'." },
      { id: 'C', text: "Reinstall the entire Google Cloud SDK every time a project context change is needed." },
      { id: 'D', text: "Hardcode OAuth access tokens in local shell startup scripts." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create named gcloud configurations using 'gcloud config configurations create' and activate them with 'gcloud config configurations activate'. The `gcloud` CLI supports multiple named configurations (profiles) that store project IDs, compute zones, and authenticated accounts. Administrators switch between environments using `gcloud config configurations activate [NAME]` without re-authenticating.",
    referenceUrl: "https://cloud.google.com/sdk/docs/configurations",
    tags: ["Google Cloud CLI", "gcloud CLI", "Security Compliance"]
  },
  {
    id: "gcp-ace-269",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Google Cloud CLI (gcloud) Configuration and Authentication: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Google Cloud CLI to switch administrative CLI contexts seamlessly between production and staging projects across different service accounts on a local workstation.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? gcloud configurations, named profiles, and service account activation is under consideration.",
    options: [
      { id: 'A', text: "Reinstall the entire Google Cloud SDK every time a project context change is needed." },
      { id: 'B', text: "Hardcode OAuth access tokens in local shell startup scripts." },
      { id: 'C', text: "Create named gcloud configurations using 'gcloud config configurations create' and activate them with 'gcloud config configurations activate'." },
      { id: 'D', text: "Use only the Cloud Console web interface to avoid configuring local CLI profiles." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create named gcloud configurations using 'gcloud config configurations create' and activate them with 'gcloud config configurations activate'. The `gcloud` CLI supports multiple named configurations (profiles) that store project IDs, compute zones, and authenticated accounts. Administrators switch between environments using `gcloud config configurations activate [NAME]` without re-authenticating.",
    referenceUrl: "https://cloud.google.com/sdk/docs/configurations",
    tags: ["Google Cloud CLI", "gcloud CLI", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-270",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Google Cloud CLI (gcloud) Configuration and Authentication: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Google Cloud CLI to switch administrative CLI contexts seamlessly between production and staging projects across different service accounts on a local workstation.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? gcloud configurations, named profiles, and service account activation is under consideration.",
    options: [
      { id: 'A', text: "Create named gcloud configurations using 'gcloud config configurations create' and activate them with 'gcloud config configurations activate'." },
      { id: 'B', text: "Use only the Cloud Console web interface to avoid configuring local CLI profiles." },
      { id: 'C', text: "Reinstall the entire Google Cloud SDK every time a project context change is needed." },
      { id: 'D', text: "Hardcode OAuth access tokens in local shell startup scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create named gcloud configurations using 'gcloud config configurations create' and activate them with 'gcloud config configurations activate'. The `gcloud` CLI supports multiple named configurations (profiles) that store project IDs, compute zones, and authenticated accounts. Administrators switch between environments using `gcloud config configurations activate [NAME]` without re-authenticating.",
    referenceUrl: "https://cloud.google.com/sdk/docs/configurations",
    tags: ["Google Cloud CLI", "gcloud CLI", "Resilience Failure"]
  },
  {
    id: "gcp-ace-271",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Identity and Google Workspace Directory Sync: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Cloud Identity to synchronize 5,000 corporate employee user accounts and security groups from an on-premises Microsoft Active Directory to Google Cloud automatically.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Google Cloud Directory Sync (GCDS) synchronizing Active Directory to Cloud Identity is under consideration.",
    options: [
      { id: 'A', text: "Export employee usernames to a public CSV file and upload it to Cloud Storage." },
      { id: 'B', text: "Instruct employees to create personal consumer Google accounts using corporate email addresses." },
      { id: 'C', text: "Manually create 5,000 user accounts in the Google Cloud Console one by one." },
      { id: 'D', text: "Deploy Google Cloud Directory Sync (GCDS) on-premises to sync users and groups to Cloud Identity." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Google Cloud Directory Sync (GCDS) on-premises to sync users and groups to Cloud Identity. Google Cloud Directory Sync (GCDS) is an on-premises utility that synchronizes user accounts, groups, and non-sensitive attributes from Microsoft Active Directory or LDAP servers to Google Cloud Identity or Google Workspace, ensuring one-way automated provisioning.",
    referenceUrl: "https://cloud.google.com/architecture/identity/authenticating-corporate-users-federated-environment",
    tags: ["Cloud Identity", "Cloud Identity", "Dr Failover"]
  },
  {
    id: "gcp-ace-272",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Identity and Google Workspace Directory Sync: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Cloud Identity to synchronize 5,000 corporate employee user accounts and security groups from an on-premises Microsoft Active Directory to Google Cloud automatically.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Google Cloud Directory Sync (GCDS) synchronizing Active Directory to Cloud Identity is under consideration.",
    options: [
      { id: 'A', text: "Instruct employees to create personal consumer Google accounts using corporate email addresses." },
      { id: 'B', text: "Manually create 5,000 user accounts in the Google Cloud Console one by one." },
      { id: 'C', text: "Export employee usernames to a public CSV file and upload it to Cloud Storage." },
      { id: 'D', text: "Deploy Google Cloud Directory Sync (GCDS) on-premises to sync users and groups to Cloud Identity." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Google Cloud Directory Sync (GCDS) on-premises to sync users and groups to Cloud Identity. Google Cloud Directory Sync (GCDS) is an on-premises utility that synchronizes user accounts, groups, and non-sensitive attributes from Microsoft Active Directory or LDAP servers to Google Cloud Identity or Google Workspace, ensuring one-way automated provisioning.",
    referenceUrl: "https://cloud.google.com/architecture/identity/authenticating-corporate-users-federated-environment",
    tags: ["Cloud Identity", "Cloud Identity", "High Load Scale"]
  },
  {
    id: "gcp-ace-273",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Identity and Google Workspace Directory Sync: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Cloud Identity to synchronize 5,000 corporate employee user accounts and security groups from an on-premises Microsoft Active Directory to Google Cloud automatically.",
    question: "Which solution properly implements these mandatory security and governance controls? Google Cloud Directory Sync (GCDS) synchronizing Active Directory to Cloud Identity is under consideration.",
    options: [
      { id: 'A', text: "Manually create 5,000 user accounts in the Google Cloud Console one by one." },
      { id: 'B', text: "Deploy Google Cloud Directory Sync (GCDS) on-premises to sync users and groups to Cloud Identity." },
      { id: 'C', text: "Instruct employees to create personal consumer Google accounts using corporate email addresses." },
      { id: 'D', text: "Export employee usernames to a public CSV file and upload it to Cloud Storage." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Google Cloud Directory Sync (GCDS) on-premises to sync users and groups to Cloud Identity. Google Cloud Directory Sync (GCDS) is an on-premises utility that synchronizes user accounts, groups, and non-sensitive attributes from Microsoft Active Directory or LDAP servers to Google Cloud Identity or Google Workspace, ensuring one-way automated provisioning.",
    referenceUrl: "https://cloud.google.com/architecture/identity/authenticating-corporate-users-federated-environment",
    tags: ["Cloud Identity", "Cloud Identity", "Security Compliance"]
  },
  {
    id: "gcp-ace-274",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Identity and Google Workspace Directory Sync: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Cloud Identity to synchronize 5,000 corporate employee user accounts and security groups from an on-premises Microsoft Active Directory to Google Cloud automatically.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Google Cloud Directory Sync (GCDS) synchronizing Active Directory to Cloud Identity is under consideration.",
    options: [
      { id: 'A', text: "Instruct employees to create personal consumer Google accounts using corporate email addresses." },
      { id: 'B', text: "Deploy Google Cloud Directory Sync (GCDS) on-premises to sync users and groups to Cloud Identity." },
      { id: 'C', text: "Export employee usernames to a public CSV file and upload it to Cloud Storage." },
      { id: 'D', text: "Manually create 5,000 user accounts in the Google Cloud Console one by one." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Google Cloud Directory Sync (GCDS) on-premises to sync users and groups to Cloud Identity. Google Cloud Directory Sync (GCDS) is an on-premises utility that synchronizes user accounts, groups, and non-sensitive attributes from Microsoft Active Directory or LDAP servers to Google Cloud Identity or Google Workspace, ensuring one-way automated provisioning.",
    referenceUrl: "https://cloud.google.com/architecture/identity/authenticating-corporate-users-federated-environment",
    tags: ["Cloud Identity", "Cloud Identity", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-275",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Identity and Google Workspace Directory Sync: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Cloud Identity to synchronize 5,000 corporate employee user accounts and security groups from an on-premises Microsoft Active Directory to Google Cloud automatically.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Google Cloud Directory Sync (GCDS) synchronizing Active Directory to Cloud Identity is under consideration.",
    options: [
      { id: 'A', text: "Export employee usernames to a public CSV file and upload it to Cloud Storage." },
      { id: 'B', text: "Manually create 5,000 user accounts in the Google Cloud Console one by one." },
      { id: 'C', text: "Deploy Google Cloud Directory Sync (GCDS) on-premises to sync users and groups to Cloud Identity." },
      { id: 'D', text: "Instruct employees to create personal consumer Google accounts using corporate email addresses." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Google Cloud Directory Sync (GCDS) on-premises to sync users and groups to Cloud Identity. Google Cloud Directory Sync (GCDS) is an on-premises utility that synchronizes user accounts, groups, and non-sensitive attributes from Microsoft Active Directory or LDAP servers to Google Cloud Identity or Google Workspace, ensuring one-way automated provisioning.",
    referenceUrl: "https://cloud.google.com/architecture/identity/authenticating-corporate-users-federated-environment",
    tags: ["Cloud Identity", "Cloud Identity", "Resilience Failure"]
  }
];

export default GCP_ACE_QUESTIONS_11;
