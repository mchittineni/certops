export const GCP_CDL_QUESTIONS_1 = [
  {
    id: "gcp-cdl-1",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Understanding CapEx versus OpEx in Cloud Computing",
    scenario: "An enterprise executive is transitioning an on-premises data center to Google Cloud and wants to explain the financial model change to the board of directors.",
    question: "How does cloud migration typically shift IT infrastructure spending?",
    options: [
      { id: 'A', text: "From Capital Expenditures (CapEx) to Operational Expenditures (OpEx)" },
      { id: 'B', text: "From Operational Expenditures (OpEx) to Capital Expenditures (CapEx)" },
      { id: 'C', text: "To fixed multi-decade depreciating hardware assets" },
      { id: 'D', text: "To mandatory upfront hardware procurement cycles" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "On-premises data centers require upfront Capital Expenditures (CapEx) for physical servers, cooling, and facility leases with multi-year depreciation. Cloud computing shifts infrastructure to Operational Expenditures (OpEx), where organizations pay only for consumed compute, storage, and networking resources on an ongoing operational basis.",
    referenceUrl: "https://cloud.google.com/learn/what-is-capex-vs-opex",
    tags: ["Cloud Economics", "CapEx", "OpEx"]
  },
  {
    id: "gcp-cdl-2",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Innovating with Data and Google Cloud",
    title: "Petabyte-Scale Serverless Analytics with BigQuery",
    scenario: "A retail enterprise collects billions of point-of-sale customer transactions daily and needs to execute rapid SQL analytics queries across historical data without provisioning or managing database server clusters.",
    question: "Which Google Cloud data analytics service meets this requirement?",
    options: [
      { id: 'A', text: "BigQuery" },
      { id: 'B', text: "Cloud SQL for MySQL" },
      { id: 'C', text: "Cloud Bigtable" },
      { id: 'D', text: "Persistent Disk SSD" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Cloud BigQuery is a fully managed, serverless enterprise data warehouse that enables SQL queries over petabytes of structured and semi-structured data with built-in machine learning and business intelligence capabilities, completely abstracting cluster provisioning and infrastructure operations.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/introduction",
    tags: ["BigQuery", "Data Analytics", "Serverless"]
  },
  {
    id: "gcp-cdl-3",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Infrastructure and Application Modernization",
    title: "Serverless Container Execution with Cloud Run",
    scenario: "A development team has packaged their web microservices into standard OCI Docker container images. They want to deploy these containers such that the platform scales from zero to hundreds of instances based on incoming HTTP requests without managing VM clusters.",
    question: "Which Google Cloud serverless compute platform is designed for containerized web applications?",
    options: [
      { id: 'A', text: "Cloud Run" },
      { id: 'B', text: "Google Compute Engine managed instance groups" },
      { id: 'C', text: "Google Cloud VMware Engine" },
      { id: 'D', text: "Cloud Spanner" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Cloud Run is a managed compute platform that lets developers deploy containerized applications that automatically scale up or down to zero in response to incoming HTTP traffic, eliminating Kubernetes or virtual machine cluster management overhead.",
    referenceUrl: "https://cloud.google.com/run/docs/overview/what-is-cloud-run",
    tags: ["Cloud Run", "Containers", "Serverless"]
  },
  {
    id: "gcp-cdl-4",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Google Cloud Security and Operations",
    title: "Shared Responsibility Model for IaaS versus SaaS",
    scenario: "A company's compliance auditor asks which security obligations are customer responsibilities when using an Infrastructure as a Service (IaaS) solution like Google Compute Engine.",
    question: "Under the Google Cloud shared responsibility model for Compute Engine, which task is the customer's responsibility?",
    options: [
      { id: 'A', text: "Operating system security patching, guest OS firewall rules, and application code" },
      { id: 'B', text: "Physical security and biometric access controls at Google data centers" },
      { id: 'C', text: "Hardware blade disposal and disk shredding at end of life" },
      { id: 'D', text: "Hypervisor virtualization layer maintenance and updates" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Infrastructure as a Service (IaaS) such as Compute Engine, Google manages physical hardware, data center facilities, optical networks, and the core hypervisor. The customer retains responsibility for configuring and updating guest operating systems, applying security patches, configuring firewalls, managing IAM credentials, and securing applications and data.",
    referenceUrl: "https://cloud.google.com/architecture/framework/security/shared-responsibility-shared-fate",
    tags: ["Shared Responsibility", "Compute Engine", "Security"]
  }
];

export default GCP_CDL_QUESTIONS_1;
