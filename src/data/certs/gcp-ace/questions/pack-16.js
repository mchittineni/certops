export const GCP_ACE_QUESTIONS_16 = [
  {
    id: "gcp-ace-376",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud Storage Bucket Creation and gsutil / gcloud storage: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Cloud Storage to create a regionally redundant Cloud Storage bucket in us-central1 with uniform access controls and object versioning enabled via CLI.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Bucket creation with uniform bucket-level access and versioning is under consideration.",
    options: [
      { id: 'A', text: "Execute 'gcloud storage buckets create gs://BUCKET_NAME --location=us-central1 --uniform-bucket-level-access' and enable versioning." },
      { id: 'B', text: "Create the bucket using an unencrypted local FTP client." },
      { id: 'C', text: "Store files in an unformatted Compute Engine persistent disk." },
      { id: 'D', text: "Create a public Google Drive folder and share the link with the internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute 'gcloud storage buckets create gs://BUCKET_NAME --location=us-central1 --uniform-bucket-level-access' and enable versioning. The `gcloud storage` CLI manages Cloud Storage buckets and objects. Uniform bucket-level access unifies permissions using IAM policies exclusively (disabling ACLs on individual objects), while object versioning preserves historical copies of overwritten or deleted objects.",
    referenceUrl: "https://cloud.google.com/storage/docs/creating-buckets#storage-create-bucket-cli",
    tags: ["Cloud Storage", "Cloud Storage", "Dr Failover"]
  },
  {
    id: "gcp-ace-377",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud Storage Bucket Creation and gsutil / gcloud storage: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Cloud Storage to create a regionally redundant Cloud Storage bucket in us-central1 with uniform access controls and object versioning enabled via CLI.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Bucket creation with uniform bucket-level access and versioning is under consideration.",
    options: [
      { id: 'A', text: "Execute 'gcloud storage buckets create gs://BUCKET_NAME --location=us-central1 --uniform-bucket-level-access' and enable versioning." },
      { id: 'B', text: "Create the bucket using an unencrypted local FTP client." },
      { id: 'C', text: "Store files in an unformatted Compute Engine persistent disk." },
      { id: 'D', text: "Create a public Google Drive folder and share the link with the internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute 'gcloud storage buckets create gs://BUCKET_NAME --location=us-central1 --uniform-bucket-level-access' and enable versioning. The `gcloud storage` CLI manages Cloud Storage buckets and objects. Uniform bucket-level access unifies permissions using IAM policies exclusively (disabling ACLs on individual objects), while object versioning preserves historical copies of overwritten or deleted objects.",
    referenceUrl: "https://cloud.google.com/storage/docs/creating-buckets#storage-create-bucket-cli",
    tags: ["Cloud Storage", "Cloud Storage", "High Load Scale"]
  },
  {
    id: "gcp-ace-378",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud Storage Bucket Creation and gsutil / gcloud storage: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Cloud Storage to create a regionally redundant Cloud Storage bucket in us-central1 with uniform access controls and object versioning enabled via CLI.",
    question: "Which solution properly implements these mandatory security and governance controls? Bucket creation with uniform bucket-level access and versioning is under consideration.",
    options: [
      { id: 'A', text: "Execute 'gcloud storage buckets create gs://BUCKET_NAME --location=us-central1 --uniform-bucket-level-access' and enable versioning." },
      { id: 'B', text: "Create the bucket using an unencrypted local FTP client." },
      { id: 'C', text: "Store files in an unformatted Compute Engine persistent disk." },
      { id: 'D', text: "Create a public Google Drive folder and share the link with the internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute 'gcloud storage buckets create gs://BUCKET_NAME --location=us-central1 --uniform-bucket-level-access' and enable versioning. The `gcloud storage` CLI manages Cloud Storage buckets and objects. Uniform bucket-level access unifies permissions using IAM policies exclusively (disabling ACLs on individual objects), while object versioning preserves historical copies of overwritten or deleted objects.",
    referenceUrl: "https://cloud.google.com/storage/docs/creating-buckets#storage-create-bucket-cli",
    tags: ["Cloud Storage", "Cloud Storage", "Security Compliance"]
  },
  {
    id: "gcp-ace-379",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud Storage Bucket Creation and gsutil / gcloud storage: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Cloud Storage to create a regionally redundant Cloud Storage bucket in us-central1 with uniform access controls and object versioning enabled via CLI.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Bucket creation with uniform bucket-level access and versioning is under consideration.",
    options: [
      { id: 'A', text: "Execute 'gcloud storage buckets create gs://BUCKET_NAME --location=us-central1 --uniform-bucket-level-access' and enable versioning." },
      { id: 'B', text: "Create the bucket using an unencrypted local FTP client." },
      { id: 'C', text: "Store files in an unformatted Compute Engine persistent disk." },
      { id: 'D', text: "Create a public Google Drive folder and share the link with the internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute 'gcloud storage buckets create gs://BUCKET_NAME --location=us-central1 --uniform-bucket-level-access' and enable versioning. The `gcloud storage` CLI manages Cloud Storage buckets and objects. Uniform bucket-level access unifies permissions using IAM policies exclusively (disabling ACLs on individual objects), while object versioning preserves historical copies of overwritten or deleted objects.",
    referenceUrl: "https://cloud.google.com/storage/docs/creating-buckets#storage-create-bucket-cli",
    tags: ["Cloud Storage", "Cloud Storage", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-380",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud Storage Bucket Creation and gsutil / gcloud storage: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Cloud Storage to create a regionally redundant Cloud Storage bucket in us-central1 with uniform access controls and object versioning enabled via CLI.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Bucket creation with uniform bucket-level access and versioning is under consideration.",
    options: [
      { id: 'A', text: "Execute 'gcloud storage buckets create gs://BUCKET_NAME --location=us-central1 --uniform-bucket-level-access' and enable versioning." },
      { id: 'B', text: "Create the bucket using an unencrypted local FTP client." },
      { id: 'C', text: "Store files in an unformatted Compute Engine persistent disk." },
      { id: 'D', text: "Create a public Google Drive folder and share the link with the internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute 'gcloud storage buckets create gs://BUCKET_NAME --location=us-central1 --uniform-bucket-level-access' and enable versioning. The `gcloud storage` CLI manages Cloud Storage buckets and objects. Uniform bucket-level access unifies permissions using IAM policies exclusively (disabling ACLs on individual objects), while object versioning preserves historical copies of overwritten or deleted objects.",
    referenceUrl: "https://cloud.google.com/storage/docs/creating-buckets#storage-create-bucket-cli",
    tags: ["Cloud Storage", "Cloud Storage", "Resilience Failure"]
  },
  {
    id: "gcp-ace-381",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud SQL Instance Provisioning and Database Creation: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Cloud SQL to deploy a fully managed PostgreSQL database on Cloud SQL configured with private IP connectivity to a designated VPC without public internet exposure.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? gcloud sql instances create for MySQL/PostgreSQL with private IP is under consideration.",
    options: [
      { id: 'A', text: "Execute 'gcloud sql instances create' specifying private network flags and enabling automated backups." },
      { id: 'B', text: "Install PostgreSQL on a Compute Engine VM and assign a public IP address." },
      { id: 'C', text: "Deploy a local SQLite database file on an NFS share." },
      { id: 'D', text: "Use Cloud Bigtable for relational SQL queries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute 'gcloud sql instances create' specifying private network flags and enabling automated backups. Cloud SQL instances can be created with Private IP addresses using Private Services Access (VPC peering between your VPC and Google's managed services network). This ensures database connections never leave Google's internal network fabric.",
    referenceUrl: "https://cloud.google.com/sql/docs/postgres/configure-private-ip",
    tags: ["Cloud SQL", "Cloud SQL", "Dr Failover"]
  },
  {
    id: "gcp-ace-382",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud SQL Instance Provisioning and Database Creation: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Cloud SQL to deploy a fully managed PostgreSQL database on Cloud SQL configured with private IP connectivity to a designated VPC without public internet exposure.",
    question: "Which architectural approach should the team select to manage this demand efficiently? gcloud sql instances create for MySQL/PostgreSQL with private IP is under consideration.",
    options: [
      { id: 'A', text: "Execute 'gcloud sql instances create' specifying private network flags and enabling automated backups." },
      { id: 'B', text: "Install PostgreSQL on a Compute Engine VM and assign a public IP address." },
      { id: 'C', text: "Deploy a local SQLite database file on an NFS share." },
      { id: 'D', text: "Use Cloud Bigtable for relational SQL queries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute 'gcloud sql instances create' specifying private network flags and enabling automated backups. Cloud SQL instances can be created with Private IP addresses using Private Services Access (VPC peering between your VPC and Google's managed services network). This ensures database connections never leave Google's internal network fabric.",
    referenceUrl: "https://cloud.google.com/sql/docs/postgres/configure-private-ip",
    tags: ["Cloud SQL", "Cloud SQL", "High Load Scale"]
  },
  {
    id: "gcp-ace-383",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud SQL Instance Provisioning and Database Creation: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Cloud SQL to deploy a fully managed PostgreSQL database on Cloud SQL configured with private IP connectivity to a designated VPC without public internet exposure.",
    question: "Which solution properly implements these mandatory security and governance controls? gcloud sql instances create for MySQL/PostgreSQL with private IP is under consideration.",
    options: [
      { id: 'A', text: "Execute 'gcloud sql instances create' specifying private network flags and enabling automated backups." },
      { id: 'B', text: "Install PostgreSQL on a Compute Engine VM and assign a public IP address." },
      { id: 'C', text: "Deploy a local SQLite database file on an NFS share." },
      { id: 'D', text: "Use Cloud Bigtable for relational SQL queries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute 'gcloud sql instances create' specifying private network flags and enabling automated backups. Cloud SQL instances can be created with Private IP addresses using Private Services Access (VPC peering between your VPC and Google's managed services network). This ensures database connections never leave Google's internal network fabric.",
    referenceUrl: "https://cloud.google.com/sql/docs/postgres/configure-private-ip",
    tags: ["Cloud SQL", "Cloud SQL", "Security Compliance"]
  },
  {
    id: "gcp-ace-384",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud SQL Instance Provisioning and Database Creation: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Cloud SQL to deploy a fully managed PostgreSQL database on Cloud SQL configured with private IP connectivity to a designated VPC without public internet exposure.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? gcloud sql instances create for MySQL/PostgreSQL with private IP is under consideration.",
    options: [
      { id: 'A', text: "Execute 'gcloud sql instances create' specifying private network flags and enabling automated backups." },
      { id: 'B', text: "Install PostgreSQL on a Compute Engine VM and assign a public IP address." },
      { id: 'C', text: "Deploy a local SQLite database file on an NFS share." },
      { id: 'D', text: "Use Cloud Bigtable for relational SQL queries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute 'gcloud sql instances create' specifying private network flags and enabling automated backups. Cloud SQL instances can be created with Private IP addresses using Private Services Access (VPC peering between your VPC and Google's managed services network). This ensures database connections never leave Google's internal network fabric.",
    referenceUrl: "https://cloud.google.com/sql/docs/postgres/configure-private-ip",
    tags: ["Cloud SQL", "Cloud SQL", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-385",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud SQL Instance Provisioning and Database Creation: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Cloud SQL to deploy a fully managed PostgreSQL database on Cloud SQL configured with private IP connectivity to a designated VPC without public internet exposure.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? gcloud sql instances create for MySQL/PostgreSQL with private IP is under consideration.",
    options: [
      { id: 'A', text: "Execute 'gcloud sql instances create' specifying private network flags and enabling automated backups." },
      { id: 'B', text: "Install PostgreSQL on a Compute Engine VM and assign a public IP address." },
      { id: 'C', text: "Deploy a local SQLite database file on an NFS share." },
      { id: 'D', text: "Use Cloud Bigtable for relational SQL queries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute 'gcloud sql instances create' specifying private network flags and enabling automated backups. Cloud SQL instances can be created with Private IP addresses using Private Services Access (VPC peering between your VPC and Google's managed services network). This ensures database connections never leave Google's internal network fabric.",
    referenceUrl: "https://cloud.google.com/sql/docs/postgres/configure-private-ip",
    tags: ["Cloud SQL", "Cloud SQL", "Resilience Failure"]
  },
  {
    id: "gcp-ace-386",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "VPC Network and Subnet Creation (Custom Mode): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates VPC Networking to create a secure enterprise Virtual Private Cloud (VPC) network with custom subnets in us-east1 and europe-west1, ensuring no default auto-mode subnets are created.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Custom mode VPC networks with non-overlapping regional subnets is under consideration.",
    options: [
      { id: 'A', text: "Create a Custom Mode VPC network using 'gcloud compute networks create --subnet-mode=custom' and add defined subnets." },
      { id: 'B', text: "Create an Auto Mode VPC network that automatically creates subnets in every global region." },
      { id: 'C', text: "Deploy all servers into the legacy default VPC network." },
      { id: 'D', text: "Connect virtual machines using public internet IP addresses without a VPC." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Custom Mode VPC network using 'gcloud compute networks create --subnet-mode=custom' and add defined subnets. A custom mode VPC network gives administrators complete control over IP address ranges and regional subnets, preventing IP overlapping conflicts when connecting to on-premises networks via Cloud VPN or Cloud Interconnect. Auto mode subnets should be avoided in enterprise production.",
    referenceUrl: "https://cloud.google.com/vpc/docs/using-vpc#create-custom-network",
    tags: ["VPC Networking", "VPC Networking", "Dr Failover"]
  },
  {
    id: "gcp-ace-387",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "VPC Network and Subnet Creation (Custom Mode): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates VPC Networking to create a secure enterprise Virtual Private Cloud (VPC) network with custom subnets in us-east1 and europe-west1, ensuring no default auto-mode subnets are created.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Custom mode VPC networks with non-overlapping regional subnets is under consideration.",
    options: [
      { id: 'A', text: "Create a Custom Mode VPC network using 'gcloud compute networks create --subnet-mode=custom' and add defined subnets." },
      { id: 'B', text: "Create an Auto Mode VPC network that automatically creates subnets in every global region." },
      { id: 'C', text: "Deploy all servers into the legacy default VPC network." },
      { id: 'D', text: "Connect virtual machines using public internet IP addresses without a VPC." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Custom Mode VPC network using 'gcloud compute networks create --subnet-mode=custom' and add defined subnets. A custom mode VPC network gives administrators complete control over IP address ranges and regional subnets, preventing IP overlapping conflicts when connecting to on-premises networks via Cloud VPN or Cloud Interconnect. Auto mode subnets should be avoided in enterprise production.",
    referenceUrl: "https://cloud.google.com/vpc/docs/using-vpc#create-custom-network",
    tags: ["VPC Networking", "VPC Networking", "High Load Scale"]
  },
  {
    id: "gcp-ace-388",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "VPC Network and Subnet Creation (Custom Mode): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates VPC Networking to create a secure enterprise Virtual Private Cloud (VPC) network with custom subnets in us-east1 and europe-west1, ensuring no default auto-mode subnets are created.",
    question: "Which solution properly implements these mandatory security and governance controls? Custom mode VPC networks with non-overlapping regional subnets is under consideration.",
    options: [
      { id: 'A', text: "Create a Custom Mode VPC network using 'gcloud compute networks create --subnet-mode=custom' and add defined subnets." },
      { id: 'B', text: "Create an Auto Mode VPC network that automatically creates subnets in every global region." },
      { id: 'C', text: "Deploy all servers into the legacy default VPC network." },
      { id: 'D', text: "Connect virtual machines using public internet IP addresses without a VPC." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Custom Mode VPC network using 'gcloud compute networks create --subnet-mode=custom' and add defined subnets. A custom mode VPC network gives administrators complete control over IP address ranges and regional subnets, preventing IP overlapping conflicts when connecting to on-premises networks via Cloud VPN or Cloud Interconnect. Auto mode subnets should be avoided in enterprise production.",
    referenceUrl: "https://cloud.google.com/vpc/docs/using-vpc#create-custom-network",
    tags: ["VPC Networking", "VPC Networking", "Security Compliance"]
  },
  {
    id: "gcp-ace-389",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "VPC Network and Subnet Creation (Custom Mode): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates VPC Networking to create a secure enterprise Virtual Private Cloud (VPC) network with custom subnets in us-east1 and europe-west1, ensuring no default auto-mode subnets are created.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Custom mode VPC networks with non-overlapping regional subnets is under consideration.",
    options: [
      { id: 'A', text: "Create a Custom Mode VPC network using 'gcloud compute networks create --subnet-mode=custom' and add defined subnets." },
      { id: 'B', text: "Create an Auto Mode VPC network that automatically creates subnets in every global region." },
      { id: 'C', text: "Deploy all servers into the legacy default VPC network." },
      { id: 'D', text: "Connect virtual machines using public internet IP addresses without a VPC." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Custom Mode VPC network using 'gcloud compute networks create --subnet-mode=custom' and add defined subnets. A custom mode VPC network gives administrators complete control over IP address ranges and regional subnets, preventing IP overlapping conflicts when connecting to on-premises networks via Cloud VPN or Cloud Interconnect. Auto mode subnets should be avoided in enterprise production.",
    referenceUrl: "https://cloud.google.com/vpc/docs/using-vpc#create-custom-network",
    tags: ["VPC Networking", "VPC Networking", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-390",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "VPC Network and Subnet Creation (Custom Mode): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates VPC Networking to create a secure enterprise Virtual Private Cloud (VPC) network with custom subnets in us-east1 and europe-west1, ensuring no default auto-mode subnets are created.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Custom mode VPC networks with non-overlapping regional subnets is under consideration.",
    options: [
      { id: 'A', text: "Create a Custom Mode VPC network using 'gcloud compute networks create --subnet-mode=custom' and add defined subnets." },
      { id: 'B', text: "Create an Auto Mode VPC network that automatically creates subnets in every global region." },
      { id: 'C', text: "Deploy all servers into the legacy default VPC network." },
      { id: 'D', text: "Connect virtual machines using public internet IP addresses without a VPC." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Custom Mode VPC network using 'gcloud compute networks create --subnet-mode=custom' and add defined subnets. A custom mode VPC network gives administrators complete control over IP address ranges and regional subnets, preventing IP overlapping conflicts when connecting to on-premises networks via Cloud VPN or Cloud Interconnect. Auto mode subnets should be avoided in enterprise production.",
    referenceUrl: "https://cloud.google.com/vpc/docs/using-vpc#create-custom-network",
    tags: ["VPC Networking", "VPC Networking", "Resilience Failure"]
  },
  {
    id: "gcp-ace-391",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "VPC Firewall Rules (Ingress and Egress Filtering): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates VPC Networking to allow inbound HTTPS (port 443) traffic from the public internet only to frontend web server VMs that possess the network tag 'web-frontend'.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Firewall rules with target tags, source ranges, and priority ordering is under consideration.",
    options: [
      { id: 'A', text: "Create a VPC ingress firewall rule with target-tags='web-frontend', source-ranges='0.0.0.0/0', and allow=tcp:443." },
      { id: 'B', text: "Allow all inbound TCP traffic on all ports across the entire virtual network." },
      { id: 'C', text: "Delete the default-deny-all-ingress firewall rule." },
      { id: 'D', text: "Rely on client operating system software firewalls alone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a VPC ingress firewall rule with target-tags='web-frontend', source-ranges='0.0.0.0/0', and allow=tcp:443. Google Cloud VPC firewall rules apply at the VM network interface level. By utilizing `target-tags`, rules apply specifically to VMs carrying that tag, decoupling network security policy from dynamic IP address assignments.",
    referenceUrl: "https://cloud.google.com/firewall/docs/using-firewalls",
    tags: ["VPC Networking", "Firewall Rules", "Dr Failover"]
  },
  {
    id: "gcp-ace-392",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "VPC Firewall Rules (Ingress and Egress Filtering): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates VPC Networking to allow inbound HTTPS (port 443) traffic from the public internet only to frontend web server VMs that possess the network tag 'web-frontend'.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Firewall rules with target tags, source ranges, and priority ordering is under consideration.",
    options: [
      { id: 'A', text: "Create a VPC ingress firewall rule with target-tags='web-frontend', source-ranges='0.0.0.0/0', and allow=tcp:443." },
      { id: 'B', text: "Allow all inbound TCP traffic on all ports across the entire virtual network." },
      { id: 'C', text: "Delete the default-deny-all-ingress firewall rule." },
      { id: 'D', text: "Rely on client operating system software firewalls alone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a VPC ingress firewall rule with target-tags='web-frontend', source-ranges='0.0.0.0/0', and allow=tcp:443. Google Cloud VPC firewall rules apply at the VM network interface level. By utilizing `target-tags`, rules apply specifically to VMs carrying that tag, decoupling network security policy from dynamic IP address assignments.",
    referenceUrl: "https://cloud.google.com/firewall/docs/using-firewalls",
    tags: ["VPC Networking", "Firewall Rules", "High Load Scale"]
  },
  {
    id: "gcp-ace-393",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "VPC Firewall Rules (Ingress and Egress Filtering): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates VPC Networking to allow inbound HTTPS (port 443) traffic from the public internet only to frontend web server VMs that possess the network tag 'web-frontend'.",
    question: "Which solution properly implements these mandatory security and governance controls? Firewall rules with target tags, source ranges, and priority ordering is under consideration.",
    options: [
      { id: 'A', text: "Create a VPC ingress firewall rule with target-tags='web-frontend', source-ranges='0.0.0.0/0', and allow=tcp:443." },
      { id: 'B', text: "Allow all inbound TCP traffic on all ports across the entire virtual network." },
      { id: 'C', text: "Delete the default-deny-all-ingress firewall rule." },
      { id: 'D', text: "Rely on client operating system software firewalls alone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a VPC ingress firewall rule with target-tags='web-frontend', source-ranges='0.0.0.0/0', and allow=tcp:443. Google Cloud VPC firewall rules apply at the VM network interface level. By utilizing `target-tags`, rules apply specifically to VMs carrying that tag, decoupling network security policy from dynamic IP address assignments.",
    referenceUrl: "https://cloud.google.com/firewall/docs/using-firewalls",
    tags: ["VPC Networking", "Firewall Rules", "Security Compliance"]
  },
  {
    id: "gcp-ace-394",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "VPC Firewall Rules (Ingress and Egress Filtering): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates VPC Networking to allow inbound HTTPS (port 443) traffic from the public internet only to frontend web server VMs that possess the network tag 'web-frontend'.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Firewall rules with target tags, source ranges, and priority ordering is under consideration.",
    options: [
      { id: 'A', text: "Create a VPC ingress firewall rule with target-tags='web-frontend', source-ranges='0.0.0.0/0', and allow=tcp:443." },
      { id: 'B', text: "Allow all inbound TCP traffic on all ports across the entire virtual network." },
      { id: 'C', text: "Delete the default-deny-all-ingress firewall rule." },
      { id: 'D', text: "Rely on client operating system software firewalls alone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a VPC ingress firewall rule with target-tags='web-frontend', source-ranges='0.0.0.0/0', and allow=tcp:443. Google Cloud VPC firewall rules apply at the VM network interface level. By utilizing `target-tags`, rules apply specifically to VMs carrying that tag, decoupling network security policy from dynamic IP address assignments.",
    referenceUrl: "https://cloud.google.com/firewall/docs/using-firewalls",
    tags: ["VPC Networking", "Firewall Rules", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-395",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "VPC Firewall Rules (Ingress and Egress Filtering): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates VPC Networking to allow inbound HTTPS (port 443) traffic from the public internet only to frontend web server VMs that possess the network tag 'web-frontend'.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Firewall rules with target tags, source ranges, and priority ordering is under consideration.",
    options: [
      { id: 'A', text: "Create a VPC ingress firewall rule with target-tags='web-frontend', source-ranges='0.0.0.0/0', and allow=tcp:443." },
      { id: 'B', text: "Allow all inbound TCP traffic on all ports across the entire virtual network." },
      { id: 'C', text: "Delete the default-deny-all-ingress firewall rule." },
      { id: 'D', text: "Rely on client operating system software firewalls alone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a VPC ingress firewall rule with target-tags='web-frontend', source-ranges='0.0.0.0/0', and allow=tcp:443. Google Cloud VPC firewall rules apply at the VM network interface level. By utilizing `target-tags`, rules apply specifically to VMs carrying that tag, decoupling network security policy from dynamic IP address assignments.",
    referenceUrl: "https://cloud.google.com/firewall/docs/using-firewalls",
    tags: ["VPC Networking", "Firewall Rules", "Resilience Failure"]
  },
  {
    id: "gcp-ace-396",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud DNS Managed Public and Private Zones: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Cloud DNS to resolve custom internal hostnames (e.g. db.corp.internal) privately across multiple VPC networks without exposing records to the public internet.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Cloud DNS managed private zones with VPC network binding is under consideration.",
    options: [
      { id: 'A', text: "Create a Cloud DNS managed private zone, specify the DNS name, and bind the allowed VPC networks." },
      { id: 'B', text: "Register public DNS records on an external domain registrar with internal RFC 1918 IPs." },
      { id: 'C', text: "Edit the /etc/hosts file on every virtual machine manually using SSH." },
      { id: 'D', text: "Deploy a standalone BIND9 DNS server on a single Compute Engine VM." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Cloud DNS managed private zone, specify the DNS name, and bind the allowed VPC networks. Cloud DNS private zones provide high-availability, low-latency internal domain name resolution within specified VPC networks without exposing private infrastructure details to the public internet or requiring custom DNS server maintenance.",
    referenceUrl: "https://cloud.google.com/dns/docs/zones/private-zones",
    tags: ["Cloud DNS", "Cloud DNS", "Dr Failover"]
  },
  {
    id: "gcp-ace-397",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud DNS Managed Public and Private Zones: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Cloud DNS to resolve custom internal hostnames (e.g. db.corp.internal) privately across multiple VPC networks without exposing records to the public internet.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Cloud DNS managed private zones with VPC network binding is under consideration.",
    options: [
      { id: 'A', text: "Create a Cloud DNS managed private zone, specify the DNS name, and bind the allowed VPC networks." },
      { id: 'B', text: "Register public DNS records on an external domain registrar with internal RFC 1918 IPs." },
      { id: 'C', text: "Edit the /etc/hosts file on every virtual machine manually using SSH." },
      { id: 'D', text: "Deploy a standalone BIND9 DNS server on a single Compute Engine VM." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Cloud DNS managed private zone, specify the DNS name, and bind the allowed VPC networks. Cloud DNS private zones provide high-availability, low-latency internal domain name resolution within specified VPC networks without exposing private infrastructure details to the public internet or requiring custom DNS server maintenance.",
    referenceUrl: "https://cloud.google.com/dns/docs/zones/private-zones",
    tags: ["Cloud DNS", "Cloud DNS", "High Load Scale"]
  },
  {
    id: "gcp-ace-398",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud DNS Managed Public and Private Zones: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Cloud DNS to resolve custom internal hostnames (e.g. db.corp.internal) privately across multiple VPC networks without exposing records to the public internet.",
    question: "Which solution properly implements these mandatory security and governance controls? Cloud DNS managed private zones with VPC network binding is under consideration.",
    options: [
      { id: 'A', text: "Create a Cloud DNS managed private zone, specify the DNS name, and bind the allowed VPC networks." },
      { id: 'B', text: "Register public DNS records on an external domain registrar with internal RFC 1918 IPs." },
      { id: 'C', text: "Edit the /etc/hosts file on every virtual machine manually using SSH." },
      { id: 'D', text: "Deploy a standalone BIND9 DNS server on a single Compute Engine VM." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Cloud DNS managed private zone, specify the DNS name, and bind the allowed VPC networks. Cloud DNS private zones provide high-availability, low-latency internal domain name resolution within specified VPC networks without exposing private infrastructure details to the public internet or requiring custom DNS server maintenance.",
    referenceUrl: "https://cloud.google.com/dns/docs/zones/private-zones",
    tags: ["Cloud DNS", "Cloud DNS", "Security Compliance"]
  },
  {
    id: "gcp-ace-399",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud DNS Managed Public and Private Zones: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Cloud DNS to resolve custom internal hostnames (e.g. db.corp.internal) privately across multiple VPC networks without exposing records to the public internet.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Cloud DNS managed private zones with VPC network binding is under consideration.",
    options: [
      { id: 'A', text: "Create a Cloud DNS managed private zone, specify the DNS name, and bind the allowed VPC networks." },
      { id: 'B', text: "Register public DNS records on an external domain registrar with internal RFC 1918 IPs." },
      { id: 'C', text: "Edit the /etc/hosts file on every virtual machine manually using SSH." },
      { id: 'D', text: "Deploy a standalone BIND9 DNS server on a single Compute Engine VM." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Cloud DNS managed private zone, specify the DNS name, and bind the allowed VPC networks. Cloud DNS private zones provide high-availability, low-latency internal domain name resolution within specified VPC networks without exposing private infrastructure details to the public internet or requiring custom DNS server maintenance.",
    referenceUrl: "https://cloud.google.com/dns/docs/zones/private-zones",
    tags: ["Cloud DNS", "Cloud DNS", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-400",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud DNS Managed Public and Private Zones: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Cloud DNS to resolve custom internal hostnames (e.g. db.corp.internal) privately across multiple VPC networks without exposing records to the public internet.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Cloud DNS managed private zones with VPC network binding is under consideration.",
    options: [
      { id: 'A', text: "Create a Cloud DNS managed private zone, specify the DNS name, and bind the allowed VPC networks." },
      { id: 'B', text: "Register public DNS records on an external domain registrar with internal RFC 1918 IPs." },
      { id: 'C', text: "Edit the /etc/hosts file on every virtual machine manually using SSH." },
      { id: 'D', text: "Deploy a standalone BIND9 DNS server on a single Compute Engine VM." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Cloud DNS managed private zone, specify the DNS name, and bind the allowed VPC networks. Cloud DNS private zones provide high-availability, low-latency internal domain name resolution within specified VPC networks without exposing private infrastructure details to the public internet or requiring custom DNS server maintenance.",
    referenceUrl: "https://cloud.google.com/dns/docs/zones/private-zones",
    tags: ["Cloud DNS", "Cloud DNS", "Resilience Failure"]
  }
];

export default GCP_ACE_QUESTIONS_16;
