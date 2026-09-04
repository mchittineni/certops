export const GCP_ACE_QUESTIONS_12 = [
  {
    id: "gcp-ace-276",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "IAM Predefined vs Custom Roles: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Google Cloud IAM to grant a junior operator permission to start and stop Compute Engine virtual machines without granting permission to delete disks or modify network firewalls.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? IAM predefined roles vs custom roles adhering to least privilege is under consideration.",
    options: [
      { id: 'A', text: "Assign the predefined 'Compute Instance Admin (v1)' role or create a tailored custom role with compute.instances.start and compute.instances.stop." },
      { id: 'B', text: "Grant the junior operator the basic 'Owner' role on the project." },
      { id: 'C', text: "Grant the junior operator the basic 'Editor' role on the project." },
      { id: 'D', text: "Share the root Organization Administrator password with the junior operator." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assign the predefined 'Compute Instance Admin (v1)' role or create a tailored custom role with compute.instances.start and compute.instances.stop. Google Cloud IAM provides basic roles (Owner, Editor, Viewer - legacy and coarse), predefined roles (fine-grained, managed by Google, such as Compute Instance Admin), and custom roles (user-defined collections of specific permissions) to adhere strictly to the principle of least privilege.",
    referenceUrl: "https://cloud.google.com/iam/docs/understanding-roles",
    tags: ["Google Cloud IAM", "IAM", "Dr Failover"]
  },
  {
    id: "gcp-ace-277",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "IAM Predefined vs Custom Roles: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Google Cloud IAM to grant a junior operator permission to start and stop Compute Engine virtual machines without granting permission to delete disks or modify network firewalls.",
    question: "Which architectural approach should the team select to manage this demand efficiently? IAM predefined roles vs custom roles adhering to least privilege is under consideration.",
    options: [
      { id: 'A', text: "Assign the predefined 'Compute Instance Admin (v1)' role or create a tailored custom role with compute.instances.start and compute.instances.stop." },
      { id: 'B', text: "Grant the junior operator the basic 'Owner' role on the project." },
      { id: 'C', text: "Grant the junior operator the basic 'Editor' role on the project." },
      { id: 'D', text: "Share the root Organization Administrator password with the junior operator." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assign the predefined 'Compute Instance Admin (v1)' role or create a tailored custom role with compute.instances.start and compute.instances.stop. Google Cloud IAM provides basic roles (Owner, Editor, Viewer - legacy and coarse), predefined roles (fine-grained, managed by Google, such as Compute Instance Admin), and custom roles (user-defined collections of specific permissions) to adhere strictly to the principle of least privilege.",
    referenceUrl: "https://cloud.google.com/iam/docs/understanding-roles",
    tags: ["Google Cloud IAM", "IAM", "High Load Scale"]
  },
  {
    id: "gcp-ace-278",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "IAM Predefined vs Custom Roles: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Google Cloud IAM to grant a junior operator permission to start and stop Compute Engine virtual machines without granting permission to delete disks or modify network firewalls.",
    question: "Which solution properly implements these mandatory security and governance controls? IAM predefined roles vs custom roles adhering to least privilege is under consideration.",
    options: [
      { id: 'A', text: "Assign the predefined 'Compute Instance Admin (v1)' role or create a tailored custom role with compute.instances.start and compute.instances.stop." },
      { id: 'B', text: "Grant the junior operator the basic 'Owner' role on the project." },
      { id: 'C', text: "Grant the junior operator the basic 'Editor' role on the project." },
      { id: 'D', text: "Share the root Organization Administrator password with the junior operator." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assign the predefined 'Compute Instance Admin (v1)' role or create a tailored custom role with compute.instances.start and compute.instances.stop. Google Cloud IAM provides basic roles (Owner, Editor, Viewer - legacy and coarse), predefined roles (fine-grained, managed by Google, such as Compute Instance Admin), and custom roles (user-defined collections of specific permissions) to adhere strictly to the principle of least privilege.",
    referenceUrl: "https://cloud.google.com/iam/docs/understanding-roles",
    tags: ["Google Cloud IAM", "IAM", "Security Compliance"]
  },
  {
    id: "gcp-ace-279",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "IAM Predefined vs Custom Roles: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Google Cloud IAM to grant a junior operator permission to start and stop Compute Engine virtual machines without granting permission to delete disks or modify network firewalls.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? IAM predefined roles vs custom roles adhering to least privilege is under consideration.",
    options: [
      { id: 'A', text: "Assign the predefined 'Compute Instance Admin (v1)' role or create a tailored custom role with compute.instances.start and compute.instances.stop." },
      { id: 'B', text: "Grant the junior operator the basic 'Owner' role on the project." },
      { id: 'C', text: "Grant the junior operator the basic 'Editor' role on the project." },
      { id: 'D', text: "Share the root Organization Administrator password with the junior operator." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assign the predefined 'Compute Instance Admin (v1)' role or create a tailored custom role with compute.instances.start and compute.instances.stop. Google Cloud IAM provides basic roles (Owner, Editor, Viewer - legacy and coarse), predefined roles (fine-grained, managed by Google, such as Compute Instance Admin), and custom roles (user-defined collections of specific permissions) to adhere strictly to the principle of least privilege.",
    referenceUrl: "https://cloud.google.com/iam/docs/understanding-roles",
    tags: ["Google Cloud IAM", "IAM", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-280",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "IAM Predefined vs Custom Roles: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Google Cloud IAM to grant a junior operator permission to start and stop Compute Engine virtual machines without granting permission to delete disks or modify network firewalls.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? IAM predefined roles vs custom roles adhering to least privilege is under consideration.",
    options: [
      { id: 'A', text: "Assign the predefined 'Compute Instance Admin (v1)' role or create a tailored custom role with compute.instances.start and compute.instances.stop." },
      { id: 'B', text: "Grant the junior operator the basic 'Owner' role on the project." },
      { id: 'C', text: "Grant the junior operator the basic 'Editor' role on the project." },
      { id: 'D', text: "Share the root Organization Administrator password with the junior operator." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assign the predefined 'Compute Instance Admin (v1)' role or create a tailored custom role with compute.instances.start and compute.instances.stop. Google Cloud IAM provides basic roles (Owner, Editor, Viewer - legacy and coarse), predefined roles (fine-grained, managed by Google, such as Compute Instance Admin), and custom roles (user-defined collections of specific permissions) to adhere strictly to the principle of least privilege.",
    referenceUrl: "https://cloud.google.com/iam/docs/understanding-roles",
    tags: ["Google Cloud IAM", "IAM", "Resilience Failure"]
  },
  {
    id: "gcp-ace-281",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Service Accounts and Service Account Keys: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Google Cloud IAM to allow an application running on an on-premises server to write backup files to a Cloud Storage bucket securely without downloading long-lived JSON service account keys.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Service accounts, IAM roles, and keyless short-lived authentication is under consideration.",
    options: [
      { id: 'A', text: "Configure Workload Identity Federation to allow the on-premises server to exchange local identity tokens for short-lived Google Cloud access tokens." },
      { id: 'B', text: "Generate a long-lived JSON service account key and commit it to a public GitHub repository." },
      { id: 'C', text: "Make the Cloud Storage bucket publicly readable and writable by allUsers." },
      { id: 'D', text: "Store service account credentials in a plaintext text file on an unencrypted network share." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Workload Identity Federation to allow the on-premises server to exchange local identity tokens for short-lived Google Cloud access tokens. Workload Identity Federation allows external workloads (running on-premises or in AWS/Azure) to access Google Cloud resources securely using short-lived tokens without requiring downloadable, manageable service account private keys, eliminating key rotation risks.",
    referenceUrl: "https://cloud.google.com/iam/docs/workload-identity-federation",
    tags: ["Google Cloud IAM", "Security", "Dr Failover"]
  },
  {
    id: "gcp-ace-282",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Service Accounts and Service Account Keys: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Google Cloud IAM to allow an application running on an on-premises server to write backup files to a Cloud Storage bucket securely without downloading long-lived JSON service account keys.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Service accounts, IAM roles, and keyless short-lived authentication is under consideration.",
    options: [
      { id: 'A', text: "Configure Workload Identity Federation to allow the on-premises server to exchange local identity tokens for short-lived Google Cloud access tokens." },
      { id: 'B', text: "Generate a long-lived JSON service account key and commit it to a public GitHub repository." },
      { id: 'C', text: "Make the Cloud Storage bucket publicly readable and writable by allUsers." },
      { id: 'D', text: "Store service account credentials in a plaintext text file on an unencrypted network share." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Workload Identity Federation to allow the on-premises server to exchange local identity tokens for short-lived Google Cloud access tokens. Workload Identity Federation allows external workloads (running on-premises or in AWS/Azure) to access Google Cloud resources securely using short-lived tokens without requiring downloadable, manageable service account private keys, eliminating key rotation risks.",
    referenceUrl: "https://cloud.google.com/iam/docs/workload-identity-federation",
    tags: ["Google Cloud IAM", "Security", "High Load Scale"]
  },
  {
    id: "gcp-ace-283",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Service Accounts and Service Account Keys: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Google Cloud IAM to allow an application running on an on-premises server to write backup files to a Cloud Storage bucket securely without downloading long-lived JSON service account keys.",
    question: "Which solution properly implements these mandatory security and governance controls? Service accounts, IAM roles, and keyless short-lived authentication is under consideration.",
    options: [
      { id: 'A', text: "Configure Workload Identity Federation to allow the on-premises server to exchange local identity tokens for short-lived Google Cloud access tokens." },
      { id: 'B', text: "Generate a long-lived JSON service account key and commit it to a public GitHub repository." },
      { id: 'C', text: "Make the Cloud Storage bucket publicly readable and writable by allUsers." },
      { id: 'D', text: "Store service account credentials in a plaintext text file on an unencrypted network share." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Workload Identity Federation to allow the on-premises server to exchange local identity tokens for short-lived Google Cloud access tokens. Workload Identity Federation allows external workloads (running on-premises or in AWS/Azure) to access Google Cloud resources securely using short-lived tokens without requiring downloadable, manageable service account private keys, eliminating key rotation risks.",
    referenceUrl: "https://cloud.google.com/iam/docs/workload-identity-federation",
    tags: ["Google Cloud IAM", "Security", "Security Compliance"]
  },
  {
    id: "gcp-ace-284",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Service Accounts and Service Account Keys: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Google Cloud IAM to allow an application running on an on-premises server to write backup files to a Cloud Storage bucket securely without downloading long-lived JSON service account keys.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Service accounts, IAM roles, and keyless short-lived authentication is under consideration.",
    options: [
      { id: 'A', text: "Configure Workload Identity Federation to allow the on-premises server to exchange local identity tokens for short-lived Google Cloud access tokens." },
      { id: 'B', text: "Generate a long-lived JSON service account key and commit it to a public GitHub repository." },
      { id: 'C', text: "Make the Cloud Storage bucket publicly readable and writable by allUsers." },
      { id: 'D', text: "Store service account credentials in a plaintext text file on an unencrypted network share." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Workload Identity Federation to allow the on-premises server to exchange local identity tokens for short-lived Google Cloud access tokens. Workload Identity Federation allows external workloads (running on-premises or in AWS/Azure) to access Google Cloud resources securely using short-lived tokens without requiring downloadable, manageable service account private keys, eliminating key rotation risks.",
    referenceUrl: "https://cloud.google.com/iam/docs/workload-identity-federation",
    tags: ["Google Cloud IAM", "Security", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-285",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Service Accounts and Service Account Keys: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Google Cloud IAM to allow an application running on an on-premises server to write backup files to a Cloud Storage bucket securely without downloading long-lived JSON service account keys.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Service accounts, IAM roles, and keyless short-lived authentication is under consideration.",
    options: [
      { id: 'A', text: "Configure Workload Identity Federation to allow the on-premises server to exchange local identity tokens for short-lived Google Cloud access tokens." },
      { id: 'B', text: "Generate a long-lived JSON service account key and commit it to a public GitHub repository." },
      { id: 'C', text: "Make the Cloud Storage bucket publicly readable and writable by allUsers." },
      { id: 'D', text: "Store service account credentials in a plaintext text file on an unencrypted network share." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Workload Identity Federation to allow the on-premises server to exchange local identity tokens for short-lived Google Cloud access tokens. Workload Identity Federation allows external workloads (running on-premises or in AWS/Azure) to access Google Cloud resources securely using short-lived tokens without requiring downloadable, manageable service account private keys, eliminating key rotation risks.",
    referenceUrl: "https://cloud.google.com/iam/docs/workload-identity-federation",
    tags: ["Google Cloud IAM", "Security", "Resilience Failure"]
  },
  {
    id: "gcp-ace-286",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Audit Logs (Admin Activity vs Data Access): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Google Cloud Observability to maintain an immutable compliance audit record of every administrative configuration change made to cloud infrastructure, retaining records for legal audits.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Cloud Audit Logs: Admin Activity vs Data Access audit logs is under consideration.",
    options: [
      { id: 'A', text: "Rely on Cloud Audit Logs Admin Activity logs (enabled by default and retained for 400 days at no charge)." },
      { id: 'B', text: "Export local browser history logs from developer workstations." },
      { id: 'C', text: "Rely on developers to document their administrative CLI commands in shared documents." },
      { id: 'D', text: "Disable all logging across the project to reduce data ingestion fees." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on Cloud Audit Logs Admin Activity logs (enabled by default and retained for 400 days at no charge). Cloud Audit Logs maintain two primary categories: Admin Activity logs (record API calls that modify configuration or metadata, enabled by default, free, and retained for 400 days) and Data Access logs (record API calls that read or write user-provided data, disabled by default due to volume).",
    referenceUrl: "https://cloud.google.com/logging/docs/audit",
    tags: ["Google Cloud Observability", "Audit Logging", "Dr Failover"]
  },
  {
    id: "gcp-ace-287",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Audit Logs (Admin Activity vs Data Access): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Google Cloud Observability to maintain an immutable compliance audit record of every administrative configuration change made to cloud infrastructure, retaining records for legal audits.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Cloud Audit Logs: Admin Activity vs Data Access audit logs is under consideration.",
    options: [
      { id: 'A', text: "Rely on Cloud Audit Logs Admin Activity logs (enabled by default and retained for 400 days at no charge)." },
      { id: 'B', text: "Export local browser history logs from developer workstations." },
      { id: 'C', text: "Rely on developers to document their administrative CLI commands in shared documents." },
      { id: 'D', text: "Disable all logging across the project to reduce data ingestion fees." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on Cloud Audit Logs Admin Activity logs (enabled by default and retained for 400 days at no charge). Cloud Audit Logs maintain two primary categories: Admin Activity logs (record API calls that modify configuration or metadata, enabled by default, free, and retained for 400 days) and Data Access logs (record API calls that read or write user-provided data, disabled by default due to volume).",
    referenceUrl: "https://cloud.google.com/logging/docs/audit",
    tags: ["Google Cloud Observability", "Audit Logging", "High Load Scale"]
  },
  {
    id: "gcp-ace-288",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Audit Logs (Admin Activity vs Data Access): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Google Cloud Observability to maintain an immutable compliance audit record of every administrative configuration change made to cloud infrastructure, retaining records for legal audits.",
    question: "Which solution properly implements these mandatory security and governance controls? Cloud Audit Logs: Admin Activity vs Data Access audit logs is under consideration.",
    options: [
      { id: 'A', text: "Rely on Cloud Audit Logs Admin Activity logs (enabled by default and retained for 400 days at no charge)." },
      { id: 'B', text: "Export local browser history logs from developer workstations." },
      { id: 'C', text: "Rely on developers to document their administrative CLI commands in shared documents." },
      { id: 'D', text: "Disable all logging across the project to reduce data ingestion fees." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on Cloud Audit Logs Admin Activity logs (enabled by default and retained for 400 days at no charge). Cloud Audit Logs maintain two primary categories: Admin Activity logs (record API calls that modify configuration or metadata, enabled by default, free, and retained for 400 days) and Data Access logs (record API calls that read or write user-provided data, disabled by default due to volume).",
    referenceUrl: "https://cloud.google.com/logging/docs/audit",
    tags: ["Google Cloud Observability", "Audit Logging", "Security Compliance"]
  },
  {
    id: "gcp-ace-289",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Audit Logs (Admin Activity vs Data Access): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Google Cloud Observability to maintain an immutable compliance audit record of every administrative configuration change made to cloud infrastructure, retaining records for legal audits.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Cloud Audit Logs: Admin Activity vs Data Access audit logs is under consideration.",
    options: [
      { id: 'A', text: "Rely on Cloud Audit Logs Admin Activity logs (enabled by default and retained for 400 days at no charge)." },
      { id: 'B', text: "Export local browser history logs from developer workstations." },
      { id: 'C', text: "Rely on developers to document their administrative CLI commands in shared documents." },
      { id: 'D', text: "Disable all logging across the project to reduce data ingestion fees." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on Cloud Audit Logs Admin Activity logs (enabled by default and retained for 400 days at no charge). Cloud Audit Logs maintain two primary categories: Admin Activity logs (record API calls that modify configuration or metadata, enabled by default, free, and retained for 400 days) and Data Access logs (record API calls that read or write user-provided data, disabled by default due to volume).",
    referenceUrl: "https://cloud.google.com/logging/docs/audit",
    tags: ["Google Cloud Observability", "Audit Logging", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-290",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Audit Logs (Admin Activity vs Data Access): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Google Cloud Observability to maintain an immutable compliance audit record of every administrative configuration change made to cloud infrastructure, retaining records for legal audits.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Cloud Audit Logs: Admin Activity vs Data Access audit logs is under consideration.",
    options: [
      { id: 'A', text: "Rely on Cloud Audit Logs Admin Activity logs (enabled by default and retained for 400 days at no charge)." },
      { id: 'B', text: "Export local browser history logs from developer workstations." },
      { id: 'C', text: "Rely on developers to document their administrative CLI commands in shared documents." },
      { id: 'D', text: "Disable all logging across the project to reduce data ingestion fees." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on Cloud Audit Logs Admin Activity logs (enabled by default and retained for 400 days at no charge). Cloud Audit Logs maintain two primary categories: Admin Activity logs (record API calls that modify configuration or metadata, enabled by default, free, and retained for 400 days) and Data Access logs (record API calls that read or write user-provided data, disabled by default due to volume).",
    referenceUrl: "https://cloud.google.com/logging/docs/audit",
    tags: ["Google Cloud Observability", "Audit Logging", "Resilience Failure"]
  },
  {
    id: "gcp-ace-291",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Shell and Cloud Shell Persistent Storage: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Google Cloud Management to provide cloud administrators with an instant, browser-based administrative terminal pre-loaded with gcloud, kubectl, and Terraform with persistent user storage.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Cloud Shell browser terminal with persistent 5 GB home directory is under consideration.",
    options: [
      { id: 'A', text: "Launch Google Cloud Shell directly from the Google Cloud Console." },
      { id: 'B', text: "Install desktop virtualization software on personal workstations to run local Linux VMs." },
      { id: 'C', text: "Open inbound SSH port 22 on the corporate firewall to connect to a personal server." },
      { id: 'D', text: "Use unauthenticated web scraping to interact with the Google Cloud Console." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Launch Google Cloud Shell directly from the Google Cloud Console. Google Cloud Shell is a free, browser-accessible Debian-based virtual machine pre-configured with Google Cloud CLI, development tools, and language runtimes. It includes 5 GB of persistent `$HOME` directory storage that persists between sessions.",
    referenceUrl: "https://cloud.google.com/shell/docs/how-cloud-shell-works",
    tags: ["Google Cloud Management", "Cloud Shell", "Dr Failover"]
  },
  {
    id: "gcp-ace-292",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Shell and Cloud Shell Persistent Storage: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Google Cloud Management to provide cloud administrators with an instant, browser-based administrative terminal pre-loaded with gcloud, kubectl, and Terraform with persistent user storage.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Cloud Shell browser terminal with persistent 5 GB home directory is under consideration.",
    options: [
      { id: 'A', text: "Launch Google Cloud Shell directly from the Google Cloud Console." },
      { id: 'B', text: "Install desktop virtualization software on personal workstations to run local Linux VMs." },
      { id: 'C', text: "Open inbound SSH port 22 on the corporate firewall to connect to a personal server." },
      { id: 'D', text: "Use unauthenticated web scraping to interact with the Google Cloud Console." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Launch Google Cloud Shell directly from the Google Cloud Console. Google Cloud Shell is a free, browser-accessible Debian-based virtual machine pre-configured with Google Cloud CLI, development tools, and language runtimes. It includes 5 GB of persistent `$HOME` directory storage that persists between sessions.",
    referenceUrl: "https://cloud.google.com/shell/docs/how-cloud-shell-works",
    tags: ["Google Cloud Management", "Cloud Shell", "High Load Scale"]
  },
  {
    id: "gcp-ace-293",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Shell and Cloud Shell Persistent Storage: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Google Cloud Management to provide cloud administrators with an instant, browser-based administrative terminal pre-loaded with gcloud, kubectl, and Terraform with persistent user storage.",
    question: "Which solution properly implements these mandatory security and governance controls? Cloud Shell browser terminal with persistent 5 GB home directory is under consideration.",
    options: [
      { id: 'A', text: "Launch Google Cloud Shell directly from the Google Cloud Console." },
      { id: 'B', text: "Install desktop virtualization software on personal workstations to run local Linux VMs." },
      { id: 'C', text: "Open inbound SSH port 22 on the corporate firewall to connect to a personal server." },
      { id: 'D', text: "Use unauthenticated web scraping to interact with the Google Cloud Console." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Launch Google Cloud Shell directly from the Google Cloud Console. Google Cloud Shell is a free, browser-accessible Debian-based virtual machine pre-configured with Google Cloud CLI, development tools, and language runtimes. It includes 5 GB of persistent `$HOME` directory storage that persists between sessions.",
    referenceUrl: "https://cloud.google.com/shell/docs/how-cloud-shell-works",
    tags: ["Google Cloud Management", "Cloud Shell", "Security Compliance"]
  },
  {
    id: "gcp-ace-294",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Shell and Cloud Shell Persistent Storage: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Google Cloud Management to provide cloud administrators with an instant, browser-based administrative terminal pre-loaded with gcloud, kubectl, and Terraform with persistent user storage.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Cloud Shell browser terminal with persistent 5 GB home directory is under consideration.",
    options: [
      { id: 'A', text: "Launch Google Cloud Shell directly from the Google Cloud Console." },
      { id: 'B', text: "Install desktop virtualization software on personal workstations to run local Linux VMs." },
      { id: 'C', text: "Open inbound SSH port 22 on the corporate firewall to connect to a personal server." },
      { id: 'D', text: "Use unauthenticated web scraping to interact with the Google Cloud Console." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Launch Google Cloud Shell directly from the Google Cloud Console. Google Cloud Shell is a free, browser-accessible Debian-based virtual machine pre-configured with Google Cloud CLI, development tools, and language runtimes. It includes 5 GB of persistent `$HOME` directory storage that persists between sessions.",
    referenceUrl: "https://cloud.google.com/shell/docs/how-cloud-shell-works",
    tags: ["Google Cloud Management", "Cloud Shell", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-295",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Shell and Cloud Shell Persistent Storage: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Google Cloud Management to provide cloud administrators with an instant, browser-based administrative terminal pre-loaded with gcloud, kubectl, and Terraform with persistent user storage.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Cloud Shell browser terminal with persistent 5 GB home directory is under consideration.",
    options: [
      { id: 'A', text: "Launch Google Cloud Shell directly from the Google Cloud Console." },
      { id: 'B', text: "Install desktop virtualization software on personal workstations to run local Linux VMs." },
      { id: 'C', text: "Open inbound SSH port 22 on the corporate firewall to connect to a personal server." },
      { id: 'D', text: "Use unauthenticated web scraping to interact with the Google Cloud Console." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Launch Google Cloud Shell directly from the Google Cloud Console. Google Cloud Shell is a free, browser-accessible Debian-based virtual machine pre-configured with Google Cloud CLI, development tools, and language runtimes. It includes 5 GB of persistent `$HOME` directory storage that persists between sessions.",
    referenceUrl: "https://cloud.google.com/shell/docs/how-cloud-shell-works",
    tags: ["Google Cloud Management", "Cloud Shell", "Resilience Failure"]
  },
  {
    id: "gcp-ace-296",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Google Cloud Organization Policies: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Google Cloud Governance to enforce a mandatory corporate security constraint that prevents any virtual machine in the entire organization from being assigned an external public IP address.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Organization Policy Service constraints and inheritance is under consideration.",
    options: [
      { id: 'A', text: "Apply the 'compute.vmExternalIpAccess' Organization Policy constraint at the Organization root level." },
      { id: 'B', text: "Write a custom bash script that runs every hour to delete public IPs from VMs." },
      { id: 'C', text: "Rely on manual code reviews of Terraform files to spot public IP declarations." },
      { id: 'D', text: "Ask developers to agree verbally to avoid configuring public IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply the 'compute.vmExternalIpAccess' Organization Policy constraint at the Organization root level. The Organization Policy Service provides centralized, programmatic control over the organization's cloud resources. Administrators configure constraints (such as disabling external IP addresses, restricting resource locations, or enforcing domain-restricted sharing) that strictly prevent non-compliant resource creation.",
    referenceUrl: "https://cloud.google.com/resource-manager/docs/organization-policy/overview",
    tags: ["Google Cloud Governance", "Organization Policies", "Dr Failover"]
  },
  {
    id: "gcp-ace-297",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Google Cloud Organization Policies: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Google Cloud Governance to enforce a mandatory corporate security constraint that prevents any virtual machine in the entire organization from being assigned an external public IP address.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Organization Policy Service constraints and inheritance is under consideration.",
    options: [
      { id: 'A', text: "Apply the 'compute.vmExternalIpAccess' Organization Policy constraint at the Organization root level." },
      { id: 'B', text: "Write a custom bash script that runs every hour to delete public IPs from VMs." },
      { id: 'C', text: "Rely on manual code reviews of Terraform files to spot public IP declarations." },
      { id: 'D', text: "Ask developers to agree verbally to avoid configuring public IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply the 'compute.vmExternalIpAccess' Organization Policy constraint at the Organization root level. The Organization Policy Service provides centralized, programmatic control over the organization's cloud resources. Administrators configure constraints (such as disabling external IP addresses, restricting resource locations, or enforcing domain-restricted sharing) that strictly prevent non-compliant resource creation.",
    referenceUrl: "https://cloud.google.com/resource-manager/docs/organization-policy/overview",
    tags: ["Google Cloud Governance", "Organization Policies", "High Load Scale"]
  },
  {
    id: "gcp-ace-298",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Google Cloud Organization Policies: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Google Cloud Governance to enforce a mandatory corporate security constraint that prevents any virtual machine in the entire organization from being assigned an external public IP address.",
    question: "Which solution properly implements these mandatory security and governance controls? Organization Policy Service constraints and inheritance is under consideration.",
    options: [
      { id: 'A', text: "Apply the 'compute.vmExternalIpAccess' Organization Policy constraint at the Organization root level." },
      { id: 'B', text: "Write a custom bash script that runs every hour to delete public IPs from VMs." },
      { id: 'C', text: "Rely on manual code reviews of Terraform files to spot public IP declarations." },
      { id: 'D', text: "Ask developers to agree verbally to avoid configuring public IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply the 'compute.vmExternalIpAccess' Organization Policy constraint at the Organization root level. The Organization Policy Service provides centralized, programmatic control over the organization's cloud resources. Administrators configure constraints (such as disabling external IP addresses, restricting resource locations, or enforcing domain-restricted sharing) that strictly prevent non-compliant resource creation.",
    referenceUrl: "https://cloud.google.com/resource-manager/docs/organization-policy/overview",
    tags: ["Google Cloud Governance", "Organization Policies", "Security Compliance"]
  },
  {
    id: "gcp-ace-299",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Google Cloud Organization Policies: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Google Cloud Governance to enforce a mandatory corporate security constraint that prevents any virtual machine in the entire organization from being assigned an external public IP address.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Organization Policy Service constraints and inheritance is under consideration.",
    options: [
      { id: 'A', text: "Apply the 'compute.vmExternalIpAccess' Organization Policy constraint at the Organization root level." },
      { id: 'B', text: "Write a custom bash script that runs every hour to delete public IPs from VMs." },
      { id: 'C', text: "Rely on manual code reviews of Terraform files to spot public IP declarations." },
      { id: 'D', text: "Ask developers to agree verbally to avoid configuring public IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply the 'compute.vmExternalIpAccess' Organization Policy constraint at the Organization root level. The Organization Policy Service provides centralized, programmatic control over the organization's cloud resources. Administrators configure constraints (such as disabling external IP addresses, restricting resource locations, or enforcing domain-restricted sharing) that strictly prevent non-compliant resource creation.",
    referenceUrl: "https://cloud.google.com/resource-manager/docs/organization-policy/overview",
    tags: ["Google Cloud Governance", "Organization Policies", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-300",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Google Cloud Organization Policies: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Google Cloud Governance to enforce a mandatory corporate security constraint that prevents any virtual machine in the entire organization from being assigned an external public IP address.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Organization Policy Service constraints and inheritance is under consideration.",
    options: [
      { id: 'A', text: "Apply the 'compute.vmExternalIpAccess' Organization Policy constraint at the Organization root level." },
      { id: 'B', text: "Write a custom bash script that runs every hour to delete public IPs from VMs." },
      { id: 'C', text: "Rely on manual code reviews of Terraform files to spot public IP declarations." },
      { id: 'D', text: "Ask developers to agree verbally to avoid configuring public IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply the 'compute.vmExternalIpAccess' Organization Policy constraint at the Organization root level. The Organization Policy Service provides centralized, programmatic control over the organization's cloud resources. Administrators configure constraints (such as disabling external IP addresses, restricting resource locations, or enforcing domain-restricted sharing) that strictly prevent non-compliant resource creation.",
    referenceUrl: "https://cloud.google.com/resource-manager/docs/organization-policy/overview",
    tags: ["Google Cloud Governance", "Organization Policies", "Resilience Failure"]
  }
];

export default GCP_ACE_QUESTIONS_12;
