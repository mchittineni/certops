export const GCP_PCA_QUESTIONS_15 = [
  {
    id: "gcp-pca-351",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Sole-Tenant Nodes: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Compute Engine to run sensitive workloads requiring physical hardware isolation and support existing per-core server software licenses (BYOL) on dedicated physical infrastructure.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Dedicated physical server hardware for regulatory isolation and licensing is under consideration.",
    options: [
      { id: 'A', text: "Provision Compute Engine Sole-Tenant Nodes and schedule instances onto dedicated node groups." },
      { id: 'B', text: "Deploy shared-core E2 virtual machines on public multi-tenant hardware." },
      { id: 'C', text: "Deploy the workload into a shared Google App Engine environment." },
      { id: 'D', text: "Use serverless Cloud Functions for all processing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision Compute Engine Sole-Tenant Nodes and schedule instances onto dedicated node groups. Sole-Tenant Nodes are physical Compute Engine servers dedicated entirely to hosting your organization's virtual machines. They provide hardware isolation for compliance, satisfy Bring-Your-Own-License (BYOL) requirements, and allow strict control over host maintenance timing.",
    referenceUrl: "https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes",
    tags: ["Compute Engine", "Compute Engine", "Dr Failover"]
  },
  {
    id: "gcp-pca-352",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Sole-Tenant Nodes: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Compute Engine to run sensitive workloads requiring physical hardware isolation and support existing per-core server software licenses (BYOL) on dedicated physical infrastructure.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Dedicated physical server hardware for regulatory isolation and licensing is under consideration.",
    options: [
      { id: 'A', text: "Provision Compute Engine Sole-Tenant Nodes and schedule instances onto dedicated node groups." },
      { id: 'B', text: "Deploy shared-core E2 virtual machines on public multi-tenant hardware." },
      { id: 'C', text: "Deploy the workload into a shared Google App Engine environment." },
      { id: 'D', text: "Use serverless Cloud Functions for all processing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision Compute Engine Sole-Tenant Nodes and schedule instances onto dedicated node groups. Sole-Tenant Nodes are physical Compute Engine servers dedicated entirely to hosting your organization's virtual machines. They provide hardware isolation for compliance, satisfy Bring-Your-Own-License (BYOL) requirements, and allow strict control over host maintenance timing.",
    referenceUrl: "https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes",
    tags: ["Compute Engine", "Compute Engine", "High Load Scale"]
  },
  {
    id: "gcp-pca-353",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Sole-Tenant Nodes: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Compute Engine to run sensitive workloads requiring physical hardware isolation and support existing per-core server software licenses (BYOL) on dedicated physical infrastructure.",
    question: "Which solution properly implements these mandatory security and governance controls? Dedicated physical server hardware for regulatory isolation and licensing is under consideration.",
    options: [
      { id: 'A', text: "Provision Compute Engine Sole-Tenant Nodes and schedule instances onto dedicated node groups." },
      { id: 'B', text: "Deploy shared-core E2 virtual machines on public multi-tenant hardware." },
      { id: 'C', text: "Deploy the workload into a shared Google App Engine environment." },
      { id: 'D', text: "Use serverless Cloud Functions for all processing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision Compute Engine Sole-Tenant Nodes and schedule instances onto dedicated node groups. Sole-Tenant Nodes are physical Compute Engine servers dedicated entirely to hosting your organization's virtual machines. They provide hardware isolation for compliance, satisfy Bring-Your-Own-License (BYOL) requirements, and allow strict control over host maintenance timing.",
    referenceUrl: "https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes",
    tags: ["Compute Engine", "Compute Engine", "Security Compliance"]
  },
  {
    id: "gcp-pca-354",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Sole-Tenant Nodes: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Compute Engine to run sensitive workloads requiring physical hardware isolation and support existing per-core server software licenses (BYOL) on dedicated physical infrastructure.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Dedicated physical server hardware for regulatory isolation and licensing is under consideration.",
    options: [
      { id: 'A', text: "Provision Compute Engine Sole-Tenant Nodes and schedule instances onto dedicated node groups." },
      { id: 'B', text: "Deploy shared-core E2 virtual machines on public multi-tenant hardware." },
      { id: 'C', text: "Deploy the workload into a shared Google App Engine environment." },
      { id: 'D', text: "Use serverless Cloud Functions for all processing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision Compute Engine Sole-Tenant Nodes and schedule instances onto dedicated node groups. Sole-Tenant Nodes are physical Compute Engine servers dedicated entirely to hosting your organization's virtual machines. They provide hardware isolation for compliance, satisfy Bring-Your-Own-License (BYOL) requirements, and allow strict control over host maintenance timing.",
    referenceUrl: "https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes",
    tags: ["Compute Engine", "Compute Engine", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-355",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Sole-Tenant Nodes: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Compute Engine to run sensitive workloads requiring physical hardware isolation and support existing per-core server software licenses (BYOL) on dedicated physical infrastructure.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Dedicated physical server hardware for regulatory isolation and licensing is under consideration.",
    options: [
      { id: 'A', text: "Provision Compute Engine Sole-Tenant Nodes and schedule instances onto dedicated node groups." },
      { id: 'B', text: "Deploy shared-core E2 virtual machines on public multi-tenant hardware." },
      { id: 'C', text: "Deploy the workload into a shared Google App Engine environment." },
      { id: 'D', text: "Use serverless Cloud Functions for all processing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision Compute Engine Sole-Tenant Nodes and schedule instances onto dedicated node groups. Sole-Tenant Nodes are physical Compute Engine servers dedicated entirely to hosting your organization's virtual machines. They provide hardware isolation for compliance, satisfy Bring-Your-Own-License (BYOL) requirements, and allow strict control over host maintenance timing.",
    referenceUrl: "https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes",
    tags: ["Compute Engine", "Compute Engine", "Resilience Failure"]
  },
  {
    id: "gcp-pca-356",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Load Balancing SSL Policies and Custom Domains: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Cloud Security to enforce strict corporate cryptographic standards on an External Application Load Balancer, disabling TLS 1.0/1.1 and insecure cipher suites.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? SSL Policies enforcing TLS 1.2+ and modern cipher suites is under consideration.",
    options: [
      { id: 'A', text: "Create a custom Cloud SSL Policy configured with a minimum TLS version of 1.2 and attach it to the load balancer target HTTPS proxy." },
      { id: 'B', text: "Rely on default client browser TLS negotiation." },
      { id: 'C', text: "Configure SSL termination inside individual backend virtual machines." },
      { id: 'D', text: "Disable HTTPS encryption and use cleartext HTTP traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a custom Cloud SSL Policy configured with a minimum TLS version of 1.2 and attach it to the load balancer target HTTPS proxy. Google Cloud SSL Policies allow administrators to control the SSL/TLS versions and cipher suites negotiated by External Application Load Balancers and SSL Proxy Load Balancers, enforcing modern security standards like TLS 1.2 or 1.3 across all public endpoints.",
    referenceUrl: "https://cloud.google.com/load-balancing/docs/ssl-policies-concepts",
    tags: ["Cloud Security", "Load Balancing Security", "Dr Failover"]
  },
  {
    id: "gcp-pca-357",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Load Balancing SSL Policies and Custom Domains: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Cloud Security to enforce strict corporate cryptographic standards on an External Application Load Balancer, disabling TLS 1.0/1.1 and insecure cipher suites.",
    question: "Which architectural approach should the team select to manage this demand efficiently? SSL Policies enforcing TLS 1.2+ and modern cipher suites is under consideration.",
    options: [
      { id: 'A', text: "Create a custom Cloud SSL Policy configured with a minimum TLS version of 1.2 and attach it to the load balancer target HTTPS proxy." },
      { id: 'B', text: "Rely on default client browser TLS negotiation." },
      { id: 'C', text: "Configure SSL termination inside individual backend virtual machines." },
      { id: 'D', text: "Disable HTTPS encryption and use cleartext HTTP traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a custom Cloud SSL Policy configured with a minimum TLS version of 1.2 and attach it to the load balancer target HTTPS proxy. Google Cloud SSL Policies allow administrators to control the SSL/TLS versions and cipher suites negotiated by External Application Load Balancers and SSL Proxy Load Balancers, enforcing modern security standards like TLS 1.2 or 1.3 across all public endpoints.",
    referenceUrl: "https://cloud.google.com/load-balancing/docs/ssl-policies-concepts",
    tags: ["Cloud Security", "Load Balancing Security", "High Load Scale"]
  },
  {
    id: "gcp-pca-358",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Load Balancing SSL Policies and Custom Domains: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Cloud Security to enforce strict corporate cryptographic standards on an External Application Load Balancer, disabling TLS 1.0/1.1 and insecure cipher suites.",
    question: "Which solution properly implements these mandatory security and governance controls? SSL Policies enforcing TLS 1.2+ and modern cipher suites is under consideration.",
    options: [
      { id: 'A', text: "Create a custom Cloud SSL Policy configured with a minimum TLS version of 1.2 and attach it to the load balancer target HTTPS proxy." },
      { id: 'B', text: "Rely on default client browser TLS negotiation." },
      { id: 'C', text: "Configure SSL termination inside individual backend virtual machines." },
      { id: 'D', text: "Disable HTTPS encryption and use cleartext HTTP traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a custom Cloud SSL Policy configured with a minimum TLS version of 1.2 and attach it to the load balancer target HTTPS proxy. Google Cloud SSL Policies allow administrators to control the SSL/TLS versions and cipher suites negotiated by External Application Load Balancers and SSL Proxy Load Balancers, enforcing modern security standards like TLS 1.2 or 1.3 across all public endpoints.",
    referenceUrl: "https://cloud.google.com/load-balancing/docs/ssl-policies-concepts",
    tags: ["Cloud Security", "Load Balancing Security", "Security Compliance"]
  },
  {
    id: "gcp-pca-359",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Load Balancing SSL Policies and Custom Domains: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Cloud Security to enforce strict corporate cryptographic standards on an External Application Load Balancer, disabling TLS 1.0/1.1 and insecure cipher suites.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? SSL Policies enforcing TLS 1.2+ and modern cipher suites is under consideration.",
    options: [
      { id: 'A', text: "Create a custom Cloud SSL Policy configured with a minimum TLS version of 1.2 and attach it to the load balancer target HTTPS proxy." },
      { id: 'B', text: "Rely on default client browser TLS negotiation." },
      { id: 'C', text: "Configure SSL termination inside individual backend virtual machines." },
      { id: 'D', text: "Disable HTTPS encryption and use cleartext HTTP traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a custom Cloud SSL Policy configured with a minimum TLS version of 1.2 and attach it to the load balancer target HTTPS proxy. Google Cloud SSL Policies allow administrators to control the SSL/TLS versions and cipher suites negotiated by External Application Load Balancers and SSL Proxy Load Balancers, enforcing modern security standards like TLS 1.2 or 1.3 across all public endpoints.",
    referenceUrl: "https://cloud.google.com/load-balancing/docs/ssl-policies-concepts",
    tags: ["Cloud Security", "Load Balancing Security", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-360",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Load Balancing SSL Policies and Custom Domains: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Cloud Security to enforce strict corporate cryptographic standards on an External Application Load Balancer, disabling TLS 1.0/1.1 and insecure cipher suites.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? SSL Policies enforcing TLS 1.2+ and modern cipher suites is under consideration.",
    options: [
      { id: 'A', text: "Create a custom Cloud SSL Policy configured with a minimum TLS version of 1.2 and attach it to the load balancer target HTTPS proxy." },
      { id: 'B', text: "Rely on default client browser TLS negotiation." },
      { id: 'C', text: "Configure SSL termination inside individual backend virtual machines." },
      { id: 'D', text: "Disable HTTPS encryption and use cleartext HTTP traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a custom Cloud SSL Policy configured with a minimum TLS version of 1.2 and attach it to the load balancer target HTTPS proxy. Google Cloud SSL Policies allow administrators to control the SSL/TLS versions and cipher suites negotiated by External Application Load Balancers and SSL Proxy Load Balancers, enforcing modern security standards like TLS 1.2 or 1.3 across all public endpoints.",
    referenceUrl: "https://cloud.google.com/load-balancing/docs/ssl-policies-concepts",
    tags: ["Cloud Security", "Load Balancing Security", "Resilience Failure"]
  },
  {
    id: "gcp-pca-361",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Google Cloud IAM Conditions: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Google Cloud IAM to grant a vendor temporary administrative access to restart Compute Engine instances in a specific project, valid only during working hours on weekdays and expiring in 30 days.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? IAM Conditions evaluating resource attributes, time windows, and request paths is under consideration.",
    options: [
      { id: 'A', text: "Configure an IAM policy binding with IAM Conditions evaluating request.time and date constraints." },
      { id: 'B', text: "Grant the vendor permanent Owner permissions on the project." },
      { id: 'C', text: "Share the corporate IT administrator's username and password with the vendor." },
      { id: 'D', text: "Write a cron job to delete the vendor's user account from the system every evening." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an IAM policy binding with IAM Conditions evaluating request.time and date constraints. IAM Conditions allow administrators to define conditional access controls in IAM role bindings based on attributes like request time, date, resource name, resource type, or IP address, enforcing time-bound and context-aware least privilege.",
    referenceUrl: "https://cloud.google.com/iam/docs/conditions-overview",
    tags: ["Google Cloud IAM", "IAM Conditions", "Dr Failover"]
  },
  {
    id: "gcp-pca-362",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Google Cloud IAM Conditions: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Google Cloud IAM to grant a vendor temporary administrative access to restart Compute Engine instances in a specific project, valid only during working hours on weekdays and expiring in 30 days.",
    question: "Which architectural approach should the team select to manage this demand efficiently? IAM Conditions evaluating resource attributes, time windows, and request paths is under consideration.",
    options: [
      { id: 'A', text: "Configure an IAM policy binding with IAM Conditions evaluating request.time and date constraints." },
      { id: 'B', text: "Grant the vendor permanent Owner permissions on the project." },
      { id: 'C', text: "Share the corporate IT administrator's username and password with the vendor." },
      { id: 'D', text: "Write a cron job to delete the vendor's user account from the system every evening." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an IAM policy binding with IAM Conditions evaluating request.time and date constraints. IAM Conditions allow administrators to define conditional access controls in IAM role bindings based on attributes like request time, date, resource name, resource type, or IP address, enforcing time-bound and context-aware least privilege.",
    referenceUrl: "https://cloud.google.com/iam/docs/conditions-overview",
    tags: ["Google Cloud IAM", "IAM Conditions", "High Load Scale"]
  },
  {
    id: "gcp-pca-363",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Google Cloud IAM Conditions: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Google Cloud IAM to grant a vendor temporary administrative access to restart Compute Engine instances in a specific project, valid only during working hours on weekdays and expiring in 30 days.",
    question: "Which solution properly implements these mandatory security and governance controls? IAM Conditions evaluating resource attributes, time windows, and request paths is under consideration.",
    options: [
      { id: 'A', text: "Configure an IAM policy binding with IAM Conditions evaluating request.time and date constraints." },
      { id: 'B', text: "Grant the vendor permanent Owner permissions on the project." },
      { id: 'C', text: "Share the corporate IT administrator's username and password with the vendor." },
      { id: 'D', text: "Write a cron job to delete the vendor's user account from the system every evening." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an IAM policy binding with IAM Conditions evaluating request.time and date constraints. IAM Conditions allow administrators to define conditional access controls in IAM role bindings based on attributes like request time, date, resource name, resource type, or IP address, enforcing time-bound and context-aware least privilege.",
    referenceUrl: "https://cloud.google.com/iam/docs/conditions-overview",
    tags: ["Google Cloud IAM", "IAM Conditions", "Security Compliance"]
  },
  {
    id: "gcp-pca-364",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Google Cloud IAM Conditions: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Google Cloud IAM to grant a vendor temporary administrative access to restart Compute Engine instances in a specific project, valid only during working hours on weekdays and expiring in 30 days.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? IAM Conditions evaluating resource attributes, time windows, and request paths is under consideration.",
    options: [
      { id: 'A', text: "Configure an IAM policy binding with IAM Conditions evaluating request.time and date constraints." },
      { id: 'B', text: "Grant the vendor permanent Owner permissions on the project." },
      { id: 'C', text: "Share the corporate IT administrator's username and password with the vendor." },
      { id: 'D', text: "Write a cron job to delete the vendor's user account from the system every evening." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an IAM policy binding with IAM Conditions evaluating request.time and date constraints. IAM Conditions allow administrators to define conditional access controls in IAM role bindings based on attributes like request time, date, resource name, resource type, or IP address, enforcing time-bound and context-aware least privilege.",
    referenceUrl: "https://cloud.google.com/iam/docs/conditions-overview",
    tags: ["Google Cloud IAM", "IAM Conditions", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-365",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Google Cloud IAM Conditions: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Google Cloud IAM to grant a vendor temporary administrative access to restart Compute Engine instances in a specific project, valid only during working hours on weekdays and expiring in 30 days.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? IAM Conditions evaluating resource attributes, time windows, and request paths is under consideration.",
    options: [
      { id: 'A', text: "Configure an IAM policy binding with IAM Conditions evaluating request.time and date constraints." },
      { id: 'B', text: "Grant the vendor permanent Owner permissions on the project." },
      { id: 'C', text: "Share the corporate IT administrator's username and password with the vendor." },
      { id: 'D', text: "Write a cron job to delete the vendor's user account from the system every evening." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an IAM policy binding with IAM Conditions evaluating request.time and date constraints. IAM Conditions allow administrators to define conditional access controls in IAM role bindings based on attributes like request time, date, resource name, resource type, or IP address, enforcing time-bound and context-aware least privilege.",
    referenceUrl: "https://cloud.google.com/iam/docs/conditions-overview",
    tags: ["Google Cloud IAM", "IAM Conditions", "Resilience Failure"]
  },
  {
    id: "gcp-pca-366",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Cloud KMS Envelope Encryption and Key Rotation: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Cloud KMS to encrypt 100 GB database backup files efficiently using client-side encryption while keeping root encryption keys secured inside Cloud KMS with automated 90-day rotation.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Envelope encryption using DEKs and KEKs with automated rotation schedules is under consideration.",
    options: [
      { id: 'A', text: "Implement envelope encryption: generate a local Data Encryption Key (DEK), encrypt the data, encrypt the DEK with a Cloud KMS Key Encryption Key (KEK), and configure automated key rotation." },
      { id: 'B', text: "Transmit the entire 100 GB file directly to the Cloud KMS Encrypt API endpoint." },
      { id: 'C', text: "Store encryption keys in plaintext in an unencrypted GitHub repository." },
      { id: 'D', text: "Disable encryption for files larger than 1 GB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement envelope encryption: generate a local Data Encryption Key (DEK), encrypt the data, encrypt the DEK with a Cloud KMS Key Encryption Key (KEK), and configure automated key rotation. Cloud KMS has a 64 KB payload limit for direct cryptographic operations. In envelope encryption, an application generates a fast local Data Encryption Key (DEK) to encrypt large data, and uses a Cloud KMS Key Encryption Key (KEK) to protect the DEK, combining high performance with managed key governance.",
    referenceUrl: "https://cloud.google.com/kms/docs/envelope-encryption",
    tags: ["Cloud KMS", "Cloud KMS", "Dr Failover"]
  },
  {
    id: "gcp-pca-367",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Cloud KMS Envelope Encryption and Key Rotation: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Cloud KMS to encrypt 100 GB database backup files efficiently using client-side encryption while keeping root encryption keys secured inside Cloud KMS with automated 90-day rotation.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Envelope encryption using DEKs and KEKs with automated rotation schedules is under consideration.",
    options: [
      { id: 'A', text: "Implement envelope encryption: generate a local Data Encryption Key (DEK), encrypt the data, encrypt the DEK with a Cloud KMS Key Encryption Key (KEK), and configure automated key rotation." },
      { id: 'B', text: "Transmit the entire 100 GB file directly to the Cloud KMS Encrypt API endpoint." },
      { id: 'C', text: "Store encryption keys in plaintext in an unencrypted GitHub repository." },
      { id: 'D', text: "Disable encryption for files larger than 1 GB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement envelope encryption: generate a local Data Encryption Key (DEK), encrypt the data, encrypt the DEK with a Cloud KMS Key Encryption Key (KEK), and configure automated key rotation. Cloud KMS has a 64 KB payload limit for direct cryptographic operations. In envelope encryption, an application generates a fast local Data Encryption Key (DEK) to encrypt large data, and uses a Cloud KMS Key Encryption Key (KEK) to protect the DEK, combining high performance with managed key governance.",
    referenceUrl: "https://cloud.google.com/kms/docs/envelope-encryption",
    tags: ["Cloud KMS", "Cloud KMS", "High Load Scale"]
  },
  {
    id: "gcp-pca-368",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Cloud KMS Envelope Encryption and Key Rotation: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Cloud KMS to encrypt 100 GB database backup files efficiently using client-side encryption while keeping root encryption keys secured inside Cloud KMS with automated 90-day rotation.",
    question: "Which solution properly implements these mandatory security and governance controls? Envelope encryption using DEKs and KEKs with automated rotation schedules is under consideration.",
    options: [
      { id: 'A', text: "Implement envelope encryption: generate a local Data Encryption Key (DEK), encrypt the data, encrypt the DEK with a Cloud KMS Key Encryption Key (KEK), and configure automated key rotation." },
      { id: 'B', text: "Transmit the entire 100 GB file directly to the Cloud KMS Encrypt API endpoint." },
      { id: 'C', text: "Store encryption keys in plaintext in an unencrypted GitHub repository." },
      { id: 'D', text: "Disable encryption for files larger than 1 GB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement envelope encryption: generate a local Data Encryption Key (DEK), encrypt the data, encrypt the DEK with a Cloud KMS Key Encryption Key (KEK), and configure automated key rotation. Cloud KMS has a 64 KB payload limit for direct cryptographic operations. In envelope encryption, an application generates a fast local Data Encryption Key (DEK) to encrypt large data, and uses a Cloud KMS Key Encryption Key (KEK) to protect the DEK, combining high performance with managed key governance.",
    referenceUrl: "https://cloud.google.com/kms/docs/envelope-encryption",
    tags: ["Cloud KMS", "Cloud KMS", "Security Compliance"]
  },
  {
    id: "gcp-pca-369",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Cloud KMS Envelope Encryption and Key Rotation: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Cloud KMS to encrypt 100 GB database backup files efficiently using client-side encryption while keeping root encryption keys secured inside Cloud KMS with automated 90-day rotation.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Envelope encryption using DEKs and KEKs with automated rotation schedules is under consideration.",
    options: [
      { id: 'A', text: "Implement envelope encryption: generate a local Data Encryption Key (DEK), encrypt the data, encrypt the DEK with a Cloud KMS Key Encryption Key (KEK), and configure automated key rotation." },
      { id: 'B', text: "Transmit the entire 100 GB file directly to the Cloud KMS Encrypt API endpoint." },
      { id: 'C', text: "Store encryption keys in plaintext in an unencrypted GitHub repository." },
      { id: 'D', text: "Disable encryption for files larger than 1 GB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement envelope encryption: generate a local Data Encryption Key (DEK), encrypt the data, encrypt the DEK with a Cloud KMS Key Encryption Key (KEK), and configure automated key rotation. Cloud KMS has a 64 KB payload limit for direct cryptographic operations. In envelope encryption, an application generates a fast local Data Encryption Key (DEK) to encrypt large data, and uses a Cloud KMS Key Encryption Key (KEK) to protect the DEK, combining high performance with managed key governance.",
    referenceUrl: "https://cloud.google.com/kms/docs/envelope-encryption",
    tags: ["Cloud KMS", "Cloud KMS", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-370",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Cloud KMS Envelope Encryption and Key Rotation: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Cloud KMS to encrypt 100 GB database backup files efficiently using client-side encryption while keeping root encryption keys secured inside Cloud KMS with automated 90-day rotation.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Envelope encryption using DEKs and KEKs with automated rotation schedules is under consideration.",
    options: [
      { id: 'A', text: "Implement envelope encryption: generate a local Data Encryption Key (DEK), encrypt the data, encrypt the DEK with a Cloud KMS Key Encryption Key (KEK), and configure automated key rotation." },
      { id: 'B', text: "Transmit the entire 100 GB file directly to the Cloud KMS Encrypt API endpoint." },
      { id: 'C', text: "Store encryption keys in plaintext in an unencrypted GitHub repository." },
      { id: 'D', text: "Disable encryption for files larger than 1 GB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement envelope encryption: generate a local Data Encryption Key (DEK), encrypt the data, encrypt the DEK with a Cloud KMS Key Encryption Key (KEK), and configure automated key rotation. Cloud KMS has a 64 KB payload limit for direct cryptographic operations. In envelope encryption, an application generates a fast local Data Encryption Key (DEK) to encrypt large data, and uses a Cloud KMS Key Encryption Key (KEK) to protect the DEK, combining high performance with managed key governance.",
    referenceUrl: "https://cloud.google.com/kms/docs/envelope-encryption",
    tags: ["Cloud KMS", "Cloud KMS", "Resilience Failure"]
  },
  {
    id: "gcp-pca-371",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "VPC Service Controls Ingress and Egress Rules: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Security Perimeters to allow an authorized BigQuery client in Project A inside a service perimeter to securely query a dataset in Project B located in a different perimeter without opening the perimeter to the internet.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? VPC Service Controls perimeter bridges and ingress/egress rules is under consideration.",
    options: [
      { id: 'A', text: "Configure an Ingress and Egress rule in the VPC Service Controls perimeters (or establish a Perimeter Bridge)." },
      { id: 'B', text: "Export the BigQuery dataset to a public Cloud Storage bucket accessible to the internet." },
      { id: 'C', text: "Delete the VPC Service Controls service perimeter entirely." },
      { id: 'D', text: "Assign the Owner role to allUsers on both BigQuery datasets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Ingress and Egress rule in the VPC Service Controls perimeters (or establish a Perimeter Bridge). VPC Service Controls perimeters strictly isolate project services. To allow legitimate cross-perimeter communication without compromising security boundaries, administrators configure perimeter Ingress/Egress rules specifying allowed sources, identities, and target methods.",
    referenceUrl: "https://cloud.google.com/vpc-service-controls/docs/ingress-egress-rules",
    tags: ["Security Perimeters", "VPC Service Controls", "Dr Failover"]
  },
  {
    id: "gcp-pca-372",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "VPC Service Controls Ingress and Egress Rules: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Security Perimeters to allow an authorized BigQuery client in Project A inside a service perimeter to securely query a dataset in Project B located in a different perimeter without opening the perimeter to the internet.",
    question: "Which architectural approach should the team select to manage this demand efficiently? VPC Service Controls perimeter bridges and ingress/egress rules is under consideration.",
    options: [
      { id: 'A', text: "Configure an Ingress and Egress rule in the VPC Service Controls perimeters (or establish a Perimeter Bridge)." },
      { id: 'B', text: "Export the BigQuery dataset to a public Cloud Storage bucket accessible to the internet." },
      { id: 'C', text: "Delete the VPC Service Controls service perimeter entirely." },
      { id: 'D', text: "Assign the Owner role to allUsers on both BigQuery datasets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Ingress and Egress rule in the VPC Service Controls perimeters (or establish a Perimeter Bridge). VPC Service Controls perimeters strictly isolate project services. To allow legitimate cross-perimeter communication without compromising security boundaries, administrators configure perimeter Ingress/Egress rules specifying allowed sources, identities, and target methods.",
    referenceUrl: "https://cloud.google.com/vpc-service-controls/docs/ingress-egress-rules",
    tags: ["Security Perimeters", "VPC Service Controls", "High Load Scale"]
  },
  {
    id: "gcp-pca-373",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "VPC Service Controls Ingress and Egress Rules: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Security Perimeters to allow an authorized BigQuery client in Project A inside a service perimeter to securely query a dataset in Project B located in a different perimeter without opening the perimeter to the internet.",
    question: "Which solution properly implements these mandatory security and governance controls? VPC Service Controls perimeter bridges and ingress/egress rules is under consideration.",
    options: [
      { id: 'A', text: "Configure an Ingress and Egress rule in the VPC Service Controls perimeters (or establish a Perimeter Bridge)." },
      { id: 'B', text: "Export the BigQuery dataset to a public Cloud Storage bucket accessible to the internet." },
      { id: 'C', text: "Delete the VPC Service Controls service perimeter entirely." },
      { id: 'D', text: "Assign the Owner role to allUsers on both BigQuery datasets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Ingress and Egress rule in the VPC Service Controls perimeters (or establish a Perimeter Bridge). VPC Service Controls perimeters strictly isolate project services. To allow legitimate cross-perimeter communication without compromising security boundaries, administrators configure perimeter Ingress/Egress rules specifying allowed sources, identities, and target methods.",
    referenceUrl: "https://cloud.google.com/vpc-service-controls/docs/ingress-egress-rules",
    tags: ["Security Perimeters", "VPC Service Controls", "Security Compliance"]
  },
  {
    id: "gcp-pca-374",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "VPC Service Controls Ingress and Egress Rules: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Security Perimeters to allow an authorized BigQuery client in Project A inside a service perimeter to securely query a dataset in Project B located in a different perimeter without opening the perimeter to the internet.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? VPC Service Controls perimeter bridges and ingress/egress rules is under consideration.",
    options: [
      { id: 'A', text: "Configure an Ingress and Egress rule in the VPC Service Controls perimeters (or establish a Perimeter Bridge)." },
      { id: 'B', text: "Export the BigQuery dataset to a public Cloud Storage bucket accessible to the internet." },
      { id: 'C', text: "Delete the VPC Service Controls service perimeter entirely." },
      { id: 'D', text: "Assign the Owner role to allUsers on both BigQuery datasets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Ingress and Egress rule in the VPC Service Controls perimeters (or establish a Perimeter Bridge). VPC Service Controls perimeters strictly isolate project services. To allow legitimate cross-perimeter communication without compromising security boundaries, administrators configure perimeter Ingress/Egress rules specifying allowed sources, identities, and target methods.",
    referenceUrl: "https://cloud.google.com/vpc-service-controls/docs/ingress-egress-rules",
    tags: ["Security Perimeters", "VPC Service Controls", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-375",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "VPC Service Controls Ingress and Egress Rules: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Security Perimeters to allow an authorized BigQuery client in Project A inside a service perimeter to securely query a dataset in Project B located in a different perimeter without opening the perimeter to the internet.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? VPC Service Controls perimeter bridges and ingress/egress rules is under consideration.",
    options: [
      { id: 'A', text: "Configure an Ingress and Egress rule in the VPC Service Controls perimeters (or establish a Perimeter Bridge)." },
      { id: 'B', text: "Export the BigQuery dataset to a public Cloud Storage bucket accessible to the internet." },
      { id: 'C', text: "Delete the VPC Service Controls service perimeter entirely." },
      { id: 'D', text: "Assign the Owner role to allUsers on both BigQuery datasets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Ingress and Egress rule in the VPC Service Controls perimeters (or establish a Perimeter Bridge). VPC Service Controls perimeters strictly isolate project services. To allow legitimate cross-perimeter communication without compromising security boundaries, administrators configure perimeter Ingress/Egress rules specifying allowed sources, identities, and target methods.",
    referenceUrl: "https://cloud.google.com/vpc-service-controls/docs/ingress-egress-rules",
    tags: ["Security Perimeters", "VPC Service Controls", "Resilience Failure"]
  }
];

export default GCP_PCA_QUESTIONS_15;
