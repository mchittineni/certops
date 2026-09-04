export const GCP_PCA_QUESTIONS_13 = [
  {
    id: "gcp-pca-301",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Disaster Recovery Patterns (Cold vs Warm vs Hot Standby): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Disaster Recovery to design a disaster recovery architecture with an RTO of under 10 minutes and an RPO of under 1 minute without doubling baseline infrastructure costs.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Warm Standby cross-region disaster recovery with automated failover is under consideration.",
    options: [
      { id: 'A', text: "Implement a Warm Standby architecture with asynchronous cross-region data replication and minimal scaled-down compute capacity." },
      { id: 'B', text: "Implement a Cold Standby architecture relying on weekly tape backups shipped by truck." },
      { id: 'C', text: "Run duplicate 100% full-capacity infrastructure 24/7 in two regions without traffic distribution." },
      { id: 'D', text: "Disable cross-region disaster recovery to minimize cloud operational spending." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a Warm Standby architecture with asynchronous cross-region data replication and minimal scaled-down compute capacity. A Warm Standby DR pattern maintains a scaled-down version of a fully functional environment running in a secondary region. Critical data is replicated asynchronously to meet low RPO, while autoscaling expands compute capacity rapidly during failover to meet an RTO of under 10 minutes.",
    referenceUrl: "https://cloud.google.com/architecture/dr-scenarios-planning-guide",
    tags: ["Disaster Recovery", "Disaster Recovery", "Dr Failover"]
  },
  {
    id: "gcp-pca-302",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Disaster Recovery Patterns (Cold vs Warm vs Hot Standby): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Disaster Recovery to design a disaster recovery architecture with an RTO of under 10 minutes and an RPO of under 1 minute without doubling baseline infrastructure costs.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Warm Standby cross-region disaster recovery with automated failover is under consideration.",
    options: [
      { id: 'A', text: "Implement a Warm Standby architecture with asynchronous cross-region data replication and minimal scaled-down compute capacity." },
      { id: 'B', text: "Implement a Cold Standby architecture relying on weekly tape backups shipped by truck." },
      { id: 'C', text: "Run duplicate 100% full-capacity infrastructure 24/7 in two regions without traffic distribution." },
      { id: 'D', text: "Disable cross-region disaster recovery to minimize cloud operational spending." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a Warm Standby architecture with asynchronous cross-region data replication and minimal scaled-down compute capacity. A Warm Standby DR pattern maintains a scaled-down version of a fully functional environment running in a secondary region. Critical data is replicated asynchronously to meet low RPO, while autoscaling expands compute capacity rapidly during failover to meet an RTO of under 10 minutes.",
    referenceUrl: "https://cloud.google.com/architecture/dr-scenarios-planning-guide",
    tags: ["Disaster Recovery", "Disaster Recovery", "High Load Scale"]
  },
  {
    id: "gcp-pca-303",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Disaster Recovery Patterns (Cold vs Warm vs Hot Standby): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Disaster Recovery to design a disaster recovery architecture with an RTO of under 10 minutes and an RPO of under 1 minute without doubling baseline infrastructure costs.",
    question: "Which solution properly implements these mandatory security and governance controls? Warm Standby cross-region disaster recovery with automated failover is under consideration.",
    options: [
      { id: 'A', text: "Implement a Warm Standby architecture with asynchronous cross-region data replication and minimal scaled-down compute capacity." },
      { id: 'B', text: "Implement a Cold Standby architecture relying on weekly tape backups shipped by truck." },
      { id: 'C', text: "Run duplicate 100% full-capacity infrastructure 24/7 in two regions without traffic distribution." },
      { id: 'D', text: "Disable cross-region disaster recovery to minimize cloud operational spending." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a Warm Standby architecture with asynchronous cross-region data replication and minimal scaled-down compute capacity. A Warm Standby DR pattern maintains a scaled-down version of a fully functional environment running in a secondary region. Critical data is replicated asynchronously to meet low RPO, while autoscaling expands compute capacity rapidly during failover to meet an RTO of under 10 minutes.",
    referenceUrl: "https://cloud.google.com/architecture/dr-scenarios-planning-guide",
    tags: ["Disaster Recovery", "Disaster Recovery", "Security Compliance"]
  },
  {
    id: "gcp-pca-304",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Disaster Recovery Patterns (Cold vs Warm vs Hot Standby): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Disaster Recovery to design a disaster recovery architecture with an RTO of under 10 minutes and an RPO of under 1 minute without doubling baseline infrastructure costs.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Warm Standby cross-region disaster recovery with automated failover is under consideration.",
    options: [
      { id: 'A', text: "Implement a Warm Standby architecture with asynchronous cross-region data replication and minimal scaled-down compute capacity." },
      { id: 'B', text: "Implement a Cold Standby architecture relying on weekly tape backups shipped by truck." },
      { id: 'C', text: "Run duplicate 100% full-capacity infrastructure 24/7 in two regions without traffic distribution." },
      { id: 'D', text: "Disable cross-region disaster recovery to minimize cloud operational spending." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a Warm Standby architecture with asynchronous cross-region data replication and minimal scaled-down compute capacity. A Warm Standby DR pattern maintains a scaled-down version of a fully functional environment running in a secondary region. Critical data is replicated asynchronously to meet low RPO, while autoscaling expands compute capacity rapidly during failover to meet an RTO of under 10 minutes.",
    referenceUrl: "https://cloud.google.com/architecture/dr-scenarios-planning-guide",
    tags: ["Disaster Recovery", "Disaster Recovery", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-305",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Disaster Recovery Patterns (Cold vs Warm vs Hot Standby): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Disaster Recovery to design a disaster recovery architecture with an RTO of under 10 minutes and an RPO of under 1 minute without doubling baseline infrastructure costs.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Warm Standby cross-region disaster recovery with automated failover is under consideration.",
    options: [
      { id: 'A', text: "Implement a Warm Standby architecture with asynchronous cross-region data replication and minimal scaled-down compute capacity." },
      { id: 'B', text: "Implement a Cold Standby architecture relying on weekly tape backups shipped by truck." },
      { id: 'C', text: "Run duplicate 100% full-capacity infrastructure 24/7 in two regions without traffic distribution." },
      { id: 'D', text: "Disable cross-region disaster recovery to minimize cloud operational spending." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a Warm Standby architecture with asynchronous cross-region data replication and minimal scaled-down compute capacity. A Warm Standby DR pattern maintains a scaled-down version of a fully functional environment running in a secondary region. Critical data is replicated asynchronously to meet low RPO, while autoscaling expands compute capacity rapidly during failover to meet an RTO of under 10 minutes.",
    referenceUrl: "https://cloud.google.com/architecture/dr-scenarios-planning-guide",
    tags: ["Disaster Recovery", "Disaster Recovery", "Resilience Failure"]
  },
  {
    id: "gcp-pca-306",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Data Sovereignty and Residency with Cloud Storage: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Cloud Governance to comply with European GDPR data protection regulations mandating that customer biometric data remain physically within EU boundaries at all times.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Regional and dual-region bucket placement preserving data sovereignty is under consideration.",
    options: [
      { id: 'A', text: "Create a regional or dual-region Cloud Storage bucket explicitly located within European regions (e.g. europe-west1 or europe-west4)." },
      { id: 'B', text: "Store data in a global multi-region US storage bucket." },
      { id: 'C', text: "Allow storage data to replicate automatically to random worldwide edge data centers." },
      { id: 'D', text: "Disable storage encryption and allow public internet access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a regional or dual-region Cloud Storage bucket explicitly located within European regions (e.g. europe-west1 or europe-west4). Google Cloud Storage guarantees that data placed in regional or dual-region buckets is stored exclusively within the designated geographic locations, ensuring compliance with strict data sovereignty, data localization, and legal residency frameworks.",
    referenceUrl: "https://cloud.google.com/storage/docs/locations",
    tags: ["Cloud Governance", "Data Sovereignty", "Dr Failover"]
  },
  {
    id: "gcp-pca-307",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Data Sovereignty and Residency with Cloud Storage: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Cloud Governance to comply with European GDPR data protection regulations mandating that customer biometric data remain physically within EU boundaries at all times.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Regional and dual-region bucket placement preserving data sovereignty is under consideration.",
    options: [
      { id: 'A', text: "Create a regional or dual-region Cloud Storage bucket explicitly located within European regions (e.g. europe-west1 or europe-west4)." },
      { id: 'B', text: "Store data in a global multi-region US storage bucket." },
      { id: 'C', text: "Allow storage data to replicate automatically to random worldwide edge data centers." },
      { id: 'D', text: "Disable storage encryption and allow public internet access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a regional or dual-region Cloud Storage bucket explicitly located within European regions (e.g. europe-west1 or europe-west4). Google Cloud Storage guarantees that data placed in regional or dual-region buckets is stored exclusively within the designated geographic locations, ensuring compliance with strict data sovereignty, data localization, and legal residency frameworks.",
    referenceUrl: "https://cloud.google.com/storage/docs/locations",
    tags: ["Cloud Governance", "Data Sovereignty", "High Load Scale"]
  },
  {
    id: "gcp-pca-308",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Data Sovereignty and Residency with Cloud Storage: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Cloud Governance to comply with European GDPR data protection regulations mandating that customer biometric data remain physically within EU boundaries at all times.",
    question: "Which solution properly implements these mandatory security and governance controls? Regional and dual-region bucket placement preserving data sovereignty is under consideration.",
    options: [
      { id: 'A', text: "Create a regional or dual-region Cloud Storage bucket explicitly located within European regions (e.g. europe-west1 or europe-west4)." },
      { id: 'B', text: "Store data in a global multi-region US storage bucket." },
      { id: 'C', text: "Allow storage data to replicate automatically to random worldwide edge data centers." },
      { id: 'D', text: "Disable storage encryption and allow public internet access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a regional or dual-region Cloud Storage bucket explicitly located within European regions (e.g. europe-west1 or europe-west4). Google Cloud Storage guarantees that data placed in regional or dual-region buckets is stored exclusively within the designated geographic locations, ensuring compliance with strict data sovereignty, data localization, and legal residency frameworks.",
    referenceUrl: "https://cloud.google.com/storage/docs/locations",
    tags: ["Cloud Governance", "Data Sovereignty", "Security Compliance"]
  },
  {
    id: "gcp-pca-309",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Data Sovereignty and Residency with Cloud Storage: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Cloud Governance to comply with European GDPR data protection regulations mandating that customer biometric data remain physically within EU boundaries at all times.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Regional and dual-region bucket placement preserving data sovereignty is under consideration.",
    options: [
      { id: 'A', text: "Create a regional or dual-region Cloud Storage bucket explicitly located within European regions (e.g. europe-west1 or europe-west4)." },
      { id: 'B', text: "Store data in a global multi-region US storage bucket." },
      { id: 'C', text: "Allow storage data to replicate automatically to random worldwide edge data centers." },
      { id: 'D', text: "Disable storage encryption and allow public internet access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a regional or dual-region Cloud Storage bucket explicitly located within European regions (e.g. europe-west1 or europe-west4). Google Cloud Storage guarantees that data placed in regional or dual-region buckets is stored exclusively within the designated geographic locations, ensuring compliance with strict data sovereignty, data localization, and legal residency frameworks.",
    referenceUrl: "https://cloud.google.com/storage/docs/locations",
    tags: ["Cloud Governance", "Data Sovereignty", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-310",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Data Sovereignty and Residency with Cloud Storage: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Cloud Governance to comply with European GDPR data protection regulations mandating that customer biometric data remain physically within EU boundaries at all times.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Regional and dual-region bucket placement preserving data sovereignty is under consideration.",
    options: [
      { id: 'A', text: "Create a regional or dual-region Cloud Storage bucket explicitly located within European regions (e.g. europe-west1 or europe-west4)." },
      { id: 'B', text: "Store data in a global multi-region US storage bucket." },
      { id: 'C', text: "Allow storage data to replicate automatically to random worldwide edge data centers." },
      { id: 'D', text: "Disable storage encryption and allow public internet access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a regional or dual-region Cloud Storage bucket explicitly located within European regions (e.g. europe-west1 or europe-west4). Google Cloud Storage guarantees that data placed in regional or dual-region buckets is stored exclusively within the designated geographic locations, ensuring compliance with strict data sovereignty, data localization, and legal residency frameworks.",
    referenceUrl: "https://cloud.google.com/storage/docs/locations",
    tags: ["Cloud Governance", "Data Sovereignty", "Resilience Failure"]
  },
  {
    id: "gcp-pca-311",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Terraform / Google Cloud Provider (IaC): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Infrastructure as Code to deploy, version, and manage identical production, staging, and development cloud environments reproducibly using declarative code.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Declarative Terraform configurations managing Google Cloud infrastructure is under consideration.",
    options: [
      { id: 'A', text: "Use Terraform with the official Google Cloud provider and a remote Cloud Storage state backend." },
      { id: 'B', text: "Click through the Cloud Console web interface manually for each environment." },
      { id: 'C', text: "Write custom unversioned shell scripts executing gcloud commands sequentially without state tracking." },
      { id: 'D', text: "Maintain manual Word documents detailing installation steps for server operators." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Terraform with the official Google Cloud provider and a remote Cloud Storage state backend. Terraform is an open-source Infrastructure as Code (IaC) tool that allows defining cloud resources in human-readable configuration files. Using the Google provider with remote state locking in Cloud Storage ensures consistent, repeatable, and automated deployments across environments.",
    referenceUrl: "https://cloud.google.com/docs/terraform",
    tags: ["Infrastructure as Code", "Terraform", "Dr Failover"]
  },
  {
    id: "gcp-pca-312",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Terraform / Google Cloud Provider (IaC): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Infrastructure as Code to deploy, version, and manage identical production, staging, and development cloud environments reproducibly using declarative code.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Declarative Terraform configurations managing Google Cloud infrastructure is under consideration.",
    options: [
      { id: 'A', text: "Use Terraform with the official Google Cloud provider and a remote Cloud Storage state backend." },
      { id: 'B', text: "Click through the Cloud Console web interface manually for each environment." },
      { id: 'C', text: "Write custom unversioned shell scripts executing gcloud commands sequentially without state tracking." },
      { id: 'D', text: "Maintain manual Word documents detailing installation steps for server operators." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Terraform with the official Google Cloud provider and a remote Cloud Storage state backend. Terraform is an open-source Infrastructure as Code (IaC) tool that allows defining cloud resources in human-readable configuration files. Using the Google provider with remote state locking in Cloud Storage ensures consistent, repeatable, and automated deployments across environments.",
    referenceUrl: "https://cloud.google.com/docs/terraform",
    tags: ["Infrastructure as Code", "Terraform", "High Load Scale"]
  },
  {
    id: "gcp-pca-313",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Terraform / Google Cloud Provider (IaC): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Infrastructure as Code to deploy, version, and manage identical production, staging, and development cloud environments reproducibly using declarative code.",
    question: "Which solution properly implements these mandatory security and governance controls? Declarative Terraform configurations managing Google Cloud infrastructure is under consideration.",
    options: [
      { id: 'A', text: "Use Terraform with the official Google Cloud provider and a remote Cloud Storage state backend." },
      { id: 'B', text: "Click through the Cloud Console web interface manually for each environment." },
      { id: 'C', text: "Write custom unversioned shell scripts executing gcloud commands sequentially without state tracking." },
      { id: 'D', text: "Maintain manual Word documents detailing installation steps for server operators." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Terraform with the official Google Cloud provider and a remote Cloud Storage state backend. Terraform is an open-source Infrastructure as Code (IaC) tool that allows defining cloud resources in human-readable configuration files. Using the Google provider with remote state locking in Cloud Storage ensures consistent, repeatable, and automated deployments across environments.",
    referenceUrl: "https://cloud.google.com/docs/terraform",
    tags: ["Infrastructure as Code", "Terraform", "Security Compliance"]
  },
  {
    id: "gcp-pca-314",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Terraform / Google Cloud Provider (IaC): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Infrastructure as Code to deploy, version, and manage identical production, staging, and development cloud environments reproducibly using declarative code.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Declarative Terraform configurations managing Google Cloud infrastructure is under consideration.",
    options: [
      { id: 'A', text: "Use Terraform with the official Google Cloud provider and a remote Cloud Storage state backend." },
      { id: 'B', text: "Click through the Cloud Console web interface manually for each environment." },
      { id: 'C', text: "Write custom unversioned shell scripts executing gcloud commands sequentially without state tracking." },
      { id: 'D', text: "Maintain manual Word documents detailing installation steps for server operators." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Terraform with the official Google Cloud provider and a remote Cloud Storage state backend. Terraform is an open-source Infrastructure as Code (IaC) tool that allows defining cloud resources in human-readable configuration files. Using the Google provider with remote state locking in Cloud Storage ensures consistent, repeatable, and automated deployments across environments.",
    referenceUrl: "https://cloud.google.com/docs/terraform",
    tags: ["Infrastructure as Code", "Terraform", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-315",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Terraform / Google Cloud Provider (IaC): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Infrastructure as Code to deploy, version, and manage identical production, staging, and development cloud environments reproducibly using declarative code.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Declarative Terraform configurations managing Google Cloud infrastructure is under consideration.",
    options: [
      { id: 'A', text: "Use Terraform with the official Google Cloud provider and a remote Cloud Storage state backend." },
      { id: 'B', text: "Click through the Cloud Console web interface manually for each environment." },
      { id: 'C', text: "Write custom unversioned shell scripts executing gcloud commands sequentially without state tracking." },
      { id: 'D', text: "Maintain manual Word documents detailing installation steps for server operators." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Terraform with the official Google Cloud provider and a remote Cloud Storage state backend. Terraform is an open-source Infrastructure as Code (IaC) tool that allows defining cloud resources in human-readable configuration files. Using the Google provider with remote state locking in Cloud Storage ensures consistent, repeatable, and automated deployments across environments.",
    referenceUrl: "https://cloud.google.com/docs/terraform",
    tags: ["Infrastructure as Code", "Terraform", "Resilience Failure"]
  },
  {
    id: "gcp-pca-316",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Google Cloud Deployment Manager / Config Controller: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Infrastructure as Code to manage Google Cloud infrastructure declaratively using Kubernetes-style resource definitions (KRM) alongside containerized applications.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Declarative cloud resource provisioning using Config Connector and KRM is under consideration.",
    options: [
      { id: 'A', text: "Deploy Config Connector on GKE to manage Google Cloud resources using Kubernetes manifests." },
      { id: 'B', text: "Write custom imperative Python scripts calling Google REST APIs directly." },
      { id: 'C', text: "Deploy an on-premises Puppet server to manage cloud services." },
      { id: 'D', text: "Configure all resources using unmanaged CLI commands." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Config Connector on GKE to manage Google Cloud resources using Kubernetes manifests. Config Connector is a Kubernetes addon that lets you manage Google Cloud resources through Kubernetes custom resource definitions (CRDs). This allows platform teams to manage infrastructure and applications using a unified GitOps workflow and declarative Kubernetes manifests.",
    referenceUrl: "https://cloud.google.com/config-connector/docs/overview",
    tags: ["Infrastructure as Code", "Config Connector", "Dr Failover"]
  },
  {
    id: "gcp-pca-317",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Google Cloud Deployment Manager / Config Controller: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Infrastructure as Code to manage Google Cloud infrastructure declaratively using Kubernetes-style resource definitions (KRM) alongside containerized applications.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Declarative cloud resource provisioning using Config Connector and KRM is under consideration.",
    options: [
      { id: 'A', text: "Deploy Config Connector on GKE to manage Google Cloud resources using Kubernetes manifests." },
      { id: 'B', text: "Write custom imperative Python scripts calling Google REST APIs directly." },
      { id: 'C', text: "Deploy an on-premises Puppet server to manage cloud services." },
      { id: 'D', text: "Configure all resources using unmanaged CLI commands." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Config Connector on GKE to manage Google Cloud resources using Kubernetes manifests. Config Connector is a Kubernetes addon that lets you manage Google Cloud resources through Kubernetes custom resource definitions (CRDs). This allows platform teams to manage infrastructure and applications using a unified GitOps workflow and declarative Kubernetes manifests.",
    referenceUrl: "https://cloud.google.com/config-connector/docs/overview",
    tags: ["Infrastructure as Code", "Config Connector", "High Load Scale"]
  },
  {
    id: "gcp-pca-318",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Google Cloud Deployment Manager / Config Controller: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Infrastructure as Code to manage Google Cloud infrastructure declaratively using Kubernetes-style resource definitions (KRM) alongside containerized applications.",
    question: "Which solution properly implements these mandatory security and governance controls? Declarative cloud resource provisioning using Config Connector and KRM is under consideration.",
    options: [
      { id: 'A', text: "Deploy Config Connector on GKE to manage Google Cloud resources using Kubernetes manifests." },
      { id: 'B', text: "Write custom imperative Python scripts calling Google REST APIs directly." },
      { id: 'C', text: "Deploy an on-premises Puppet server to manage cloud services." },
      { id: 'D', text: "Configure all resources using unmanaged CLI commands." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Config Connector on GKE to manage Google Cloud resources using Kubernetes manifests. Config Connector is a Kubernetes addon that lets you manage Google Cloud resources through Kubernetes custom resource definitions (CRDs). This allows platform teams to manage infrastructure and applications using a unified GitOps workflow and declarative Kubernetes manifests.",
    referenceUrl: "https://cloud.google.com/config-connector/docs/overview",
    tags: ["Infrastructure as Code", "Config Connector", "Security Compliance"]
  },
  {
    id: "gcp-pca-319",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Google Cloud Deployment Manager / Config Controller: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Infrastructure as Code to manage Google Cloud infrastructure declaratively using Kubernetes-style resource definitions (KRM) alongside containerized applications.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Declarative cloud resource provisioning using Config Connector and KRM is under consideration.",
    options: [
      { id: 'A', text: "Deploy Config Connector on GKE to manage Google Cloud resources using Kubernetes manifests." },
      { id: 'B', text: "Write custom imperative Python scripts calling Google REST APIs directly." },
      { id: 'C', text: "Deploy an on-premises Puppet server to manage cloud services." },
      { id: 'D', text: "Configure all resources using unmanaged CLI commands." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Config Connector on GKE to manage Google Cloud resources using Kubernetes manifests. Config Connector is a Kubernetes addon that lets you manage Google Cloud resources through Kubernetes custom resource definitions (CRDs). This allows platform teams to manage infrastructure and applications using a unified GitOps workflow and declarative Kubernetes manifests.",
    referenceUrl: "https://cloud.google.com/config-connector/docs/overview",
    tags: ["Infrastructure as Code", "Config Connector", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-320",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Google Cloud Deployment Manager / Config Controller: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Infrastructure as Code to manage Google Cloud infrastructure declaratively using Kubernetes-style resource definitions (KRM) alongside containerized applications.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Declarative cloud resource provisioning using Config Connector and KRM is under consideration.",
    options: [
      { id: 'A', text: "Deploy Config Connector on GKE to manage Google Cloud resources using Kubernetes manifests." },
      { id: 'B', text: "Write custom imperative Python scripts calling Google REST APIs directly." },
      { id: 'C', text: "Deploy an on-premises Puppet server to manage cloud services." },
      { id: 'D', text: "Configure all resources using unmanaged CLI commands." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Config Connector on GKE to manage Google Cloud resources using Kubernetes manifests. Config Connector is a Kubernetes addon that lets you manage Google Cloud resources through Kubernetes custom resource definitions (CRDs). This allows platform teams to manage infrastructure and applications using a unified GitOps workflow and declarative Kubernetes manifests.",
    referenceUrl: "https://cloud.google.com/config-connector/docs/overview",
    tags: ["Infrastructure as Code", "Config Connector", "Resilience Failure"]
  },
  {
    id: "gcp-pca-321",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "VPC Network Peering: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates VPC Networking to connect two separate VPC networks in different projects within the same organization to allow low-latency, private RFC 1918 communication without public internet gateways.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? VPC Network Peering connecting independent VPC networks over internal Google fabric is under consideration.",
    options: [
      { id: 'A', text: "Establish VPC Network Peering between the two VPC networks." },
      { id: 'B', text: "Deploy an external VPN gateway in each VPC and connect over public internet." },
      { id: 'C', text: "Route all traffic through an external third-party proxy server." },
      { id: 'D', text: "Assign external public IP addresses to all backend virtual machines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Establish VPC Network Peering between the two VPC networks. VPC Network Peering allows internal IP address connectivity across two Virtual Private Cloud (VPC) networks regardless of whether they belong to the same project or organization. Traffic stays entirely within Google's private network fabric, offering high bandwidth and lower latency than VPNs.",
    referenceUrl: "https://cloud.google.com/vpc/docs/vpc-peering",
    tags: ["VPC Networking", "VPC Peering", "Dr Failover"]
  },
  {
    id: "gcp-pca-322",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "VPC Network Peering: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates VPC Networking to connect two separate VPC networks in different projects within the same organization to allow low-latency, private RFC 1918 communication without public internet gateways.",
    question: "Which architectural approach should the team select to manage this demand efficiently? VPC Network Peering connecting independent VPC networks over internal Google fabric is under consideration.",
    options: [
      { id: 'A', text: "Establish VPC Network Peering between the two VPC networks." },
      { id: 'B', text: "Deploy an external VPN gateway in each VPC and connect over public internet." },
      { id: 'C', text: "Route all traffic through an external third-party proxy server." },
      { id: 'D', text: "Assign external public IP addresses to all backend virtual machines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Establish VPC Network Peering between the two VPC networks. VPC Network Peering allows internal IP address connectivity across two Virtual Private Cloud (VPC) networks regardless of whether they belong to the same project or organization. Traffic stays entirely within Google's private network fabric, offering high bandwidth and lower latency than VPNs.",
    referenceUrl: "https://cloud.google.com/vpc/docs/vpc-peering",
    tags: ["VPC Networking", "VPC Peering", "High Load Scale"]
  },
  {
    id: "gcp-pca-323",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "VPC Network Peering: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates VPC Networking to connect two separate VPC networks in different projects within the same organization to allow low-latency, private RFC 1918 communication without public internet gateways.",
    question: "Which solution properly implements these mandatory security and governance controls? VPC Network Peering connecting independent VPC networks over internal Google fabric is under consideration.",
    options: [
      { id: 'A', text: "Establish VPC Network Peering between the two VPC networks." },
      { id: 'B', text: "Deploy an external VPN gateway in each VPC and connect over public internet." },
      { id: 'C', text: "Route all traffic through an external third-party proxy server." },
      { id: 'D', text: "Assign external public IP addresses to all backend virtual machines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Establish VPC Network Peering between the two VPC networks. VPC Network Peering allows internal IP address connectivity across two Virtual Private Cloud (VPC) networks regardless of whether they belong to the same project or organization. Traffic stays entirely within Google's private network fabric, offering high bandwidth and lower latency than VPNs.",
    referenceUrl: "https://cloud.google.com/vpc/docs/vpc-peering",
    tags: ["VPC Networking", "VPC Peering", "Security Compliance"]
  },
  {
    id: "gcp-pca-324",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "VPC Network Peering: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates VPC Networking to connect two separate VPC networks in different projects within the same organization to allow low-latency, private RFC 1918 communication without public internet gateways.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? VPC Network Peering connecting independent VPC networks over internal Google fabric is under consideration.",
    options: [
      { id: 'A', text: "Establish VPC Network Peering between the two VPC networks." },
      { id: 'B', text: "Deploy an external VPN gateway in each VPC and connect over public internet." },
      { id: 'C', text: "Route all traffic through an external third-party proxy server." },
      { id: 'D', text: "Assign external public IP addresses to all backend virtual machines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Establish VPC Network Peering between the two VPC networks. VPC Network Peering allows internal IP address connectivity across two Virtual Private Cloud (VPC) networks regardless of whether they belong to the same project or organization. Traffic stays entirely within Google's private network fabric, offering high bandwidth and lower latency than VPNs.",
    referenceUrl: "https://cloud.google.com/vpc/docs/vpc-peering",
    tags: ["VPC Networking", "VPC Peering", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-325",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "VPC Network Peering: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates VPC Networking to connect two separate VPC networks in different projects within the same organization to allow low-latency, private RFC 1918 communication without public internet gateways.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? VPC Network Peering connecting independent VPC networks over internal Google fabric is under consideration.",
    options: [
      { id: 'A', text: "Establish VPC Network Peering between the two VPC networks." },
      { id: 'B', text: "Deploy an external VPN gateway in each VPC and connect over public internet." },
      { id: 'C', text: "Route all traffic through an external third-party proxy server." },
      { id: 'D', text: "Assign external public IP addresses to all backend virtual machines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Establish VPC Network Peering between the two VPC networks. VPC Network Peering allows internal IP address connectivity across two Virtual Private Cloud (VPC) networks regardless of whether they belong to the same project or organization. Traffic stays entirely within Google's private network fabric, offering high bandwidth and lower latency than VPNs.",
    referenceUrl: "https://cloud.google.com/vpc/docs/vpc-peering",
    tags: ["VPC Networking", "VPC Peering", "Resilience Failure"]
  }
];

export default GCP_PCA_QUESTIONS_13;
