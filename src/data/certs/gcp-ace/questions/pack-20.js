export const GCP_ACE_QUESTIONS_20 = [
  {
    id: "gcp-ace-476",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Secret Manager for Application Credentials: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Cloud Security to store third-party payment gateway API keys securely and allow an application on Cloud Run to access them with versioning and access audit logs.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Secret Manager storing API keys, passwords, and certificates is under consideration.",
    options: [
      { id: 'A', text: "Store the API keys in Secret Manager and grant the Cloud Run service account the 'Secret Manager Secret Accessor' role." },
      { id: 'B', text: "Embed the API keys as plaintext strings in the Dockerfile source code." },
      { id: 'C', text: "Store the keys in an unencrypted public GitHub repository." },
      { id: 'D', text: "Write the API keys to an environment variable in an unversioned shell script." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store the API keys in Secret Manager and grant the Cloud Run service account the 'Secret Manager Secret Accessor' role. Secret Manager is a secure and convenient storage system for API keys, passwords, certificates, and other sensitive data. It provides centralized management, fine-grained IAM access control, automatic encryption at rest, versioning, and first-class integration with Cloud Run and GKE.",
    referenceUrl: "https://cloud.google.com/secret-manager/docs/overview",
    tags: ["Cloud Security", "Secret Manager", "Dr Failover"]
  },
  {
    id: "gcp-ace-477",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Secret Manager for Application Credentials: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Cloud Security to store third-party payment gateway API keys securely and allow an application on Cloud Run to access them with versioning and access audit logs.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Secret Manager storing API keys, passwords, and certificates is under consideration.",
    options: [
      { id: 'A', text: "Store the API keys in Secret Manager and grant the Cloud Run service account the 'Secret Manager Secret Accessor' role." },
      { id: 'B', text: "Embed the API keys as plaintext strings in the Dockerfile source code." },
      { id: 'C', text: "Store the keys in an unencrypted public GitHub repository." },
      { id: 'D', text: "Write the API keys to an environment variable in an unversioned shell script." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store the API keys in Secret Manager and grant the Cloud Run service account the 'Secret Manager Secret Accessor' role. Secret Manager is a secure and convenient storage system for API keys, passwords, certificates, and other sensitive data. It provides centralized management, fine-grained IAM access control, automatic encryption at rest, versioning, and first-class integration with Cloud Run and GKE.",
    referenceUrl: "https://cloud.google.com/secret-manager/docs/overview",
    tags: ["Cloud Security", "Secret Manager", "High Load Scale"]
  },
  {
    id: "gcp-ace-478",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Secret Manager for Application Credentials: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Cloud Security to store third-party payment gateway API keys securely and allow an application on Cloud Run to access them with versioning and access audit logs.",
    question: "Which solution properly implements these mandatory security and governance controls? Secret Manager storing API keys, passwords, and certificates is under consideration.",
    options: [
      { id: 'A', text: "Store the API keys in Secret Manager and grant the Cloud Run service account the 'Secret Manager Secret Accessor' role." },
      { id: 'B', text: "Embed the API keys as plaintext strings in the Dockerfile source code." },
      { id: 'C', text: "Store the keys in an unencrypted public GitHub repository." },
      { id: 'D', text: "Write the API keys to an environment variable in an unversioned shell script." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store the API keys in Secret Manager and grant the Cloud Run service account the 'Secret Manager Secret Accessor' role. Secret Manager is a secure and convenient storage system for API keys, passwords, certificates, and other sensitive data. It provides centralized management, fine-grained IAM access control, automatic encryption at rest, versioning, and first-class integration with Cloud Run and GKE.",
    referenceUrl: "https://cloud.google.com/secret-manager/docs/overview",
    tags: ["Cloud Security", "Secret Manager", "Security Compliance"]
  },
  {
    id: "gcp-ace-479",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Secret Manager for Application Credentials: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Cloud Security to store third-party payment gateway API keys securely and allow an application on Cloud Run to access them with versioning and access audit logs.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Secret Manager storing API keys, passwords, and certificates is under consideration.",
    options: [
      { id: 'A', text: "Store the API keys in Secret Manager and grant the Cloud Run service account the 'Secret Manager Secret Accessor' role." },
      { id: 'B', text: "Embed the API keys as plaintext strings in the Dockerfile source code." },
      { id: 'C', text: "Store the keys in an unencrypted public GitHub repository." },
      { id: 'D', text: "Write the API keys to an environment variable in an unversioned shell script." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store the API keys in Secret Manager and grant the Cloud Run service account the 'Secret Manager Secret Accessor' role. Secret Manager is a secure and convenient storage system for API keys, passwords, certificates, and other sensitive data. It provides centralized management, fine-grained IAM access control, automatic encryption at rest, versioning, and first-class integration with Cloud Run and GKE.",
    referenceUrl: "https://cloud.google.com/secret-manager/docs/overview",
    tags: ["Cloud Security", "Secret Manager", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-480",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Secret Manager for Application Credentials: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Cloud Security to store third-party payment gateway API keys securely and allow an application on Cloud Run to access them with versioning and access audit logs.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Secret Manager storing API keys, passwords, and certificates is under consideration.",
    options: [
      { id: 'A', text: "Store the API keys in Secret Manager and grant the Cloud Run service account the 'Secret Manager Secret Accessor' role." },
      { id: 'B', text: "Embed the API keys as plaintext strings in the Dockerfile source code." },
      { id: 'C', text: "Store the keys in an unencrypted public GitHub repository." },
      { id: 'D', text: "Write the API keys to an environment variable in an unversioned shell script." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store the API keys in Secret Manager and grant the Cloud Run service account the 'Secret Manager Secret Accessor' role. Secret Manager is a secure and convenient storage system for API keys, passwords, certificates, and other sensitive data. It provides centralized management, fine-grained IAM access control, automatic encryption at rest, versioning, and first-class integration with Cloud Run and GKE.",
    referenceUrl: "https://cloud.google.com/secret-manager/docs/overview",
    tags: ["Cloud Security", "Secret Manager", "Resilience Failure"]
  },
  {
    id: "gcp-ace-481",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Cloud Storage Signed URLs: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Cloud Storage Security to grant an external customer temporary, secure access to download a 2 GB video file from a private Cloud Storage bucket for 30 minutes without a Google account.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Signed URLs granting time-limited read or write access is under consideration.",
    options: [
      { id: 'A', text: "Generate a Cloud Storage Signed URL with an expiration time of 30 minutes." },
      { id: 'B', text: "Make the entire Cloud Storage bucket public to allUsers on the internet." },
      { id: 'C', text: "Create a new Google account for the external customer and add them to the project." },
      { id: 'D', text: "Download the file to an on-premises web server and send an unencrypted email attachment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate a Cloud Storage Signed URL with an expiration time of 30 minutes. A Signed URL gives time-limited read or write access to a specific Cloud Storage resource. Anyone who possesses the URL can use it for the specified duration, regardless of whether they have a Google Cloud account, while the underlying bucket remains private.",
    referenceUrl: "https://cloud.google.com/storage/docs/access-control/signed-urls",
    tags: ["Cloud Storage Security", "Cloud Storage Security", "Dr Failover"]
  },
  {
    id: "gcp-ace-482",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Cloud Storage Signed URLs: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Cloud Storage Security to grant an external customer temporary, secure access to download a 2 GB video file from a private Cloud Storage bucket for 30 minutes without a Google account.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Signed URLs granting time-limited read or write access is under consideration.",
    options: [
      { id: 'A', text: "Generate a Cloud Storage Signed URL with an expiration time of 30 minutes." },
      { id: 'B', text: "Make the entire Cloud Storage bucket public to allUsers on the internet." },
      { id: 'C', text: "Create a new Google account for the external customer and add them to the project." },
      { id: 'D', text: "Download the file to an on-premises web server and send an unencrypted email attachment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate a Cloud Storage Signed URL with an expiration time of 30 minutes. A Signed URL gives time-limited read or write access to a specific Cloud Storage resource. Anyone who possesses the URL can use it for the specified duration, regardless of whether they have a Google Cloud account, while the underlying bucket remains private.",
    referenceUrl: "https://cloud.google.com/storage/docs/access-control/signed-urls",
    tags: ["Cloud Storage Security", "Cloud Storage Security", "High Load Scale"]
  },
  {
    id: "gcp-ace-483",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Cloud Storage Signed URLs: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Cloud Storage Security to grant an external customer temporary, secure access to download a 2 GB video file from a private Cloud Storage bucket for 30 minutes without a Google account.",
    question: "Which solution properly implements these mandatory security and governance controls? Signed URLs granting time-limited read or write access is under consideration.",
    options: [
      { id: 'A', text: "Generate a Cloud Storage Signed URL with an expiration time of 30 minutes." },
      { id: 'B', text: "Make the entire Cloud Storage bucket public to allUsers on the internet." },
      { id: 'C', text: "Create a new Google account for the external customer and add them to the project." },
      { id: 'D', text: "Download the file to an on-premises web server and send an unencrypted email attachment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate a Cloud Storage Signed URL with an expiration time of 30 minutes. A Signed URL gives time-limited read or write access to a specific Cloud Storage resource. Anyone who possesses the URL can use it for the specified duration, regardless of whether they have a Google Cloud account, while the underlying bucket remains private.",
    referenceUrl: "https://cloud.google.com/storage/docs/access-control/signed-urls",
    tags: ["Cloud Storage Security", "Cloud Storage Security", "Security Compliance"]
  },
  {
    id: "gcp-ace-484",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Cloud Storage Signed URLs: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Cloud Storage Security to grant an external customer temporary, secure access to download a 2 GB video file from a private Cloud Storage bucket for 30 minutes without a Google account.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Signed URLs granting time-limited read or write access is under consideration.",
    options: [
      { id: 'A', text: "Generate a Cloud Storage Signed URL with an expiration time of 30 minutes." },
      { id: 'B', text: "Make the entire Cloud Storage bucket public to allUsers on the internet." },
      { id: 'C', text: "Create a new Google account for the external customer and add them to the project." },
      { id: 'D', text: "Download the file to an on-premises web server and send an unencrypted email attachment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate a Cloud Storage Signed URL with an expiration time of 30 minutes. A Signed URL gives time-limited read or write access to a specific Cloud Storage resource. Anyone who possesses the URL can use it for the specified duration, regardless of whether they have a Google Cloud account, while the underlying bucket remains private.",
    referenceUrl: "https://cloud.google.com/storage/docs/access-control/signed-urls",
    tags: ["Cloud Storage Security", "Cloud Storage Security", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-485",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Cloud Storage Signed URLs: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Cloud Storage Security to grant an external customer temporary, secure access to download a 2 GB video file from a private Cloud Storage bucket for 30 minutes without a Google account.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Signed URLs granting time-limited read or write access is under consideration.",
    options: [
      { id: 'A', text: "Generate a Cloud Storage Signed URL with an expiration time of 30 minutes." },
      { id: 'B', text: "Make the entire Cloud Storage bucket public to allUsers on the internet." },
      { id: 'C', text: "Create a new Google account for the external customer and add them to the project." },
      { id: 'D', text: "Download the file to an on-premises web server and send an unencrypted email attachment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate a Cloud Storage Signed URL with an expiration time of 30 minutes. A Signed URL gives time-limited read or write access to a specific Cloud Storage resource. Anyone who possesses the URL can use it for the specified duration, regardless of whether they have a Google Cloud account, while the underlying bucket remains private.",
    referenceUrl: "https://cloud.google.com/storage/docs/access-control/signed-urls",
    tags: ["Cloud Storage Security", "Cloud Storage Security", "Resilience Failure"]
  },
  {
    id: "gcp-ace-486",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "VPC Service Controls and Service Perimeters: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Cloud Security to prevent malicious employees or compromised service accounts from exfiltrating sensitive BigQuery and Cloud Storage data to external public cloud accounts.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? VPC Service Controls establishing cryptographically isolated service perimeters is under consideration.",
    options: [
      { id: 'A', text: "Configure a VPC Service Controls Service Perimeter around the sensitive projects and API services." },
      { id: 'B', text: "Apply a standard VPC firewall rule blocking port 80 egress." },
      { id: 'C', text: "Rely on signed employment contracts and company conduct policies." },
      { id: 'D', text: "Delete all external DNS server addresses from virtual machines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a VPC Service Controls Service Perimeter around the sensitive projects and API services. VPC Service Controls allows organizations to define a security perimeter around Google Cloud resources (like BigQuery, Cloud Storage) to isolate data and services. It blocks unauthorized network access and prevents data exfiltration to external, unauthorized cloud storage buckets.",
    referenceUrl: "https://cloud.google.com/vpc-service-controls/docs/overview",
    tags: ["Cloud Security", "Security Perimeters", "Dr Failover"]
  },
  {
    id: "gcp-ace-487",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "VPC Service Controls and Service Perimeters: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Cloud Security to prevent malicious employees or compromised service accounts from exfiltrating sensitive BigQuery and Cloud Storage data to external public cloud accounts.",
    question: "Which architectural approach should the team select to manage this demand efficiently? VPC Service Controls establishing cryptographically isolated service perimeters is under consideration.",
    options: [
      { id: 'A', text: "Configure a VPC Service Controls Service Perimeter around the sensitive projects and API services." },
      { id: 'B', text: "Apply a standard VPC firewall rule blocking port 80 egress." },
      { id: 'C', text: "Rely on signed employment contracts and company conduct policies." },
      { id: 'D', text: "Delete all external DNS server addresses from virtual machines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a VPC Service Controls Service Perimeter around the sensitive projects and API services. VPC Service Controls allows organizations to define a security perimeter around Google Cloud resources (like BigQuery, Cloud Storage) to isolate data and services. It blocks unauthorized network access and prevents data exfiltration to external, unauthorized cloud storage buckets.",
    referenceUrl: "https://cloud.google.com/vpc-service-controls/docs/overview",
    tags: ["Cloud Security", "Security Perimeters", "High Load Scale"]
  },
  {
    id: "gcp-ace-488",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "VPC Service Controls and Service Perimeters: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Cloud Security to prevent malicious employees or compromised service accounts from exfiltrating sensitive BigQuery and Cloud Storage data to external public cloud accounts.",
    question: "Which solution properly implements these mandatory security and governance controls? VPC Service Controls establishing cryptographically isolated service perimeters is under consideration.",
    options: [
      { id: 'A', text: "Configure a VPC Service Controls Service Perimeter around the sensitive projects and API services." },
      { id: 'B', text: "Apply a standard VPC firewall rule blocking port 80 egress." },
      { id: 'C', text: "Rely on signed employment contracts and company conduct policies." },
      { id: 'D', text: "Delete all external DNS server addresses from virtual machines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a VPC Service Controls Service Perimeter around the sensitive projects and API services. VPC Service Controls allows organizations to define a security perimeter around Google Cloud resources (like BigQuery, Cloud Storage) to isolate data and services. It blocks unauthorized network access and prevents data exfiltration to external, unauthorized cloud storage buckets.",
    referenceUrl: "https://cloud.google.com/vpc-service-controls/docs/overview",
    tags: ["Cloud Security", "Security Perimeters", "Security Compliance"]
  },
  {
    id: "gcp-ace-489",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "VPC Service Controls and Service Perimeters: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Cloud Security to prevent malicious employees or compromised service accounts from exfiltrating sensitive BigQuery and Cloud Storage data to external public cloud accounts.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? VPC Service Controls establishing cryptographically isolated service perimeters is under consideration.",
    options: [
      { id: 'A', text: "Configure a VPC Service Controls Service Perimeter around the sensitive projects and API services." },
      { id: 'B', text: "Apply a standard VPC firewall rule blocking port 80 egress." },
      { id: 'C', text: "Rely on signed employment contracts and company conduct policies." },
      { id: 'D', text: "Delete all external DNS server addresses from virtual machines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a VPC Service Controls Service Perimeter around the sensitive projects and API services. VPC Service Controls allows organizations to define a security perimeter around Google Cloud resources (like BigQuery, Cloud Storage) to isolate data and services. It blocks unauthorized network access and prevents data exfiltration to external, unauthorized cloud storage buckets.",
    referenceUrl: "https://cloud.google.com/vpc-service-controls/docs/overview",
    tags: ["Cloud Security", "Security Perimeters", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-490",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "VPC Service Controls and Service Perimeters: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Cloud Security to prevent malicious employees or compromised service accounts from exfiltrating sensitive BigQuery and Cloud Storage data to external public cloud accounts.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? VPC Service Controls establishing cryptographically isolated service perimeters is under consideration.",
    options: [
      { id: 'A', text: "Configure a VPC Service Controls Service Perimeter around the sensitive projects and API services." },
      { id: 'B', text: "Apply a standard VPC firewall rule blocking port 80 egress." },
      { id: 'C', text: "Rely on signed employment contracts and company conduct policies." },
      { id: 'D', text: "Delete all external DNS server addresses from virtual machines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a VPC Service Controls Service Perimeter around the sensitive projects and API services. VPC Service Controls allows organizations to define a security perimeter around Google Cloud resources (like BigQuery, Cloud Storage) to isolate data and services. It blocks unauthorized network access and prevents data exfiltration to external, unauthorized cloud storage buckets.",
    referenceUrl: "https://cloud.google.com/vpc-service-controls/docs/overview",
    tags: ["Cloud Security", "Security Perimeters", "Resilience Failure"]
  },
  {
    id: "gcp-ace-491",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Cloud Armor Security Policies and DDoS Protection: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Cloud Security to protect a public web application fronted by an External Application Load Balancer against SQL injection, Cross-Site Scripting (XSS), and Layer 7 HTTP flood DDoS attacks.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Cloud Armor WAF rules, IP filtering, and DDoS protection on external load balancers is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Cloud Armor Security Policy with pre-configured WAF rules and attach it to the load balancer backend service." },
      { id: 'B', text: "Install antivirus software inside the virtual machine guest operating systems." },
      { id: 'C', text: "Rely on standard layer 4 network firewall rules to inspect HTTP payload strings." },
      { id: 'D', text: "Change the web application port number from 443 to 8443." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Cloud Armor Security Policy with pre-configured WAF rules and attach it to the load balancer backend service. Google Cloud Armor provides enterprise DDoS defense and Web Application Firewall (WAF) services at Google's edge. Attached to external load balancers, Cloud Armor inspects incoming traffic against OWASP Top 10 vulnerabilities (SQLi, XSS) and rate-limits abusive traffic.",
    referenceUrl: "https://cloud.google.com/armor/docs/cloud-armor-overview",
    tags: ["Cloud Security", "Cloud Armor", "Dr Failover"]
  },
  {
    id: "gcp-ace-492",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Cloud Armor Security Policies and DDoS Protection: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Cloud Security to protect a public web application fronted by an External Application Load Balancer against SQL injection, Cross-Site Scripting (XSS), and Layer 7 HTTP flood DDoS attacks.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Cloud Armor WAF rules, IP filtering, and DDoS protection on external load balancers is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Cloud Armor Security Policy with pre-configured WAF rules and attach it to the load balancer backend service." },
      { id: 'B', text: "Install antivirus software inside the virtual machine guest operating systems." },
      { id: 'C', text: "Rely on standard layer 4 network firewall rules to inspect HTTP payload strings." },
      { id: 'D', text: "Change the web application port number from 443 to 8443." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Cloud Armor Security Policy with pre-configured WAF rules and attach it to the load balancer backend service. Google Cloud Armor provides enterprise DDoS defense and Web Application Firewall (WAF) services at Google's edge. Attached to external load balancers, Cloud Armor inspects incoming traffic against OWASP Top 10 vulnerabilities (SQLi, XSS) and rate-limits abusive traffic.",
    referenceUrl: "https://cloud.google.com/armor/docs/cloud-armor-overview",
    tags: ["Cloud Security", "Cloud Armor", "High Load Scale"]
  },
  {
    id: "gcp-ace-493",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Cloud Armor Security Policies and DDoS Protection: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Cloud Security to protect a public web application fronted by an External Application Load Balancer against SQL injection, Cross-Site Scripting (XSS), and Layer 7 HTTP flood DDoS attacks.",
    question: "Which solution properly implements these mandatory security and governance controls? Cloud Armor WAF rules, IP filtering, and DDoS protection on external load balancers is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Cloud Armor Security Policy with pre-configured WAF rules and attach it to the load balancer backend service." },
      { id: 'B', text: "Install antivirus software inside the virtual machine guest operating systems." },
      { id: 'C', text: "Rely on standard layer 4 network firewall rules to inspect HTTP payload strings." },
      { id: 'D', text: "Change the web application port number from 443 to 8443." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Cloud Armor Security Policy with pre-configured WAF rules and attach it to the load balancer backend service. Google Cloud Armor provides enterprise DDoS defense and Web Application Firewall (WAF) services at Google's edge. Attached to external load balancers, Cloud Armor inspects incoming traffic against OWASP Top 10 vulnerabilities (SQLi, XSS) and rate-limits abusive traffic.",
    referenceUrl: "https://cloud.google.com/armor/docs/cloud-armor-overview",
    tags: ["Cloud Security", "Cloud Armor", "Security Compliance"]
  },
  {
    id: "gcp-ace-494",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Cloud Armor Security Policies and DDoS Protection: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Cloud Security to protect a public web application fronted by an External Application Load Balancer against SQL injection, Cross-Site Scripting (XSS), and Layer 7 HTTP flood DDoS attacks.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Cloud Armor WAF rules, IP filtering, and DDoS protection on external load balancers is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Cloud Armor Security Policy with pre-configured WAF rules and attach it to the load balancer backend service." },
      { id: 'B', text: "Install antivirus software inside the virtual machine guest operating systems." },
      { id: 'C', text: "Rely on standard layer 4 network firewall rules to inspect HTTP payload strings." },
      { id: 'D', text: "Change the web application port number from 443 to 8443." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Cloud Armor Security Policy with pre-configured WAF rules and attach it to the load balancer backend service. Google Cloud Armor provides enterprise DDoS defense and Web Application Firewall (WAF) services at Google's edge. Attached to external load balancers, Cloud Armor inspects incoming traffic against OWASP Top 10 vulnerabilities (SQLi, XSS) and rate-limits abusive traffic.",
    referenceUrl: "https://cloud.google.com/armor/docs/cloud-armor-overview",
    tags: ["Cloud Security", "Cloud Armor", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-495",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Cloud Armor Security Policies and DDoS Protection: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Cloud Security to protect a public web application fronted by an External Application Load Balancer against SQL injection, Cross-Site Scripting (XSS), and Layer 7 HTTP flood DDoS attacks.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Cloud Armor WAF rules, IP filtering, and DDoS protection on external load balancers is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Cloud Armor Security Policy with pre-configured WAF rules and attach it to the load balancer backend service." },
      { id: 'B', text: "Install antivirus software inside the virtual machine guest operating systems." },
      { id: 'C', text: "Rely on standard layer 4 network firewall rules to inspect HTTP payload strings." },
      { id: 'D', text: "Change the web application port number from 443 to 8443." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Cloud Armor Security Policy with pre-configured WAF rules and attach it to the load balancer backend service. Google Cloud Armor provides enterprise DDoS defense and Web Application Firewall (WAF) services at Google's edge. Attached to external load balancers, Cloud Armor inspects incoming traffic against OWASP Top 10 vulnerabilities (SQLi, XSS) and rate-limits abusive traffic.",
    referenceUrl: "https://cloud.google.com/armor/docs/cloud-armor-overview",
    tags: ["Cloud Security", "Cloud Armor", "Resilience Failure"]
  },
  {
    id: "gcp-ace-496",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Security Command Center (SCC): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Cloud Security to gain centralized visibility into the security posture of an entire organization, automatically detecting misconfigured storage buckets and compromised virtual machines.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Security Command Center (SCC) asset discovery, vulnerability assessment, and threat detection is under consideration.",
    options: [
      { id: 'A', text: "Enable Security Command Center (SCC) Standard or Premium at the Organization level." },
      { id: 'B', text: "Manually inspect configuration settings across 200 projects once a year." },
      { id: 'C', text: "Install open-source antivirus tools on individual developer laptops." },
      { id: 'D', text: "Review historical billing invoices for unusual computing charges." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Security Command Center (SCC) Standard or Premium at the Organization level. Security Command Center (SCC) is Google Cloud's centralized security management and risk assessment platform. It continuously discovers cloud assets, identifies security misconfigurations (like open storage buckets), uncovers vulnerabilities, and detects active cyber threats across the organization.",
    referenceUrl: "https://cloud.google.com/security-command-center/docs/overview",
    tags: ["Cloud Security", "Security Posture", "Dr Failover"]
  },
  {
    id: "gcp-ace-497",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Security Command Center (SCC): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Cloud Security to gain centralized visibility into the security posture of an entire organization, automatically detecting misconfigured storage buckets and compromised virtual machines.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Security Command Center (SCC) asset discovery, vulnerability assessment, and threat detection is under consideration.",
    options: [
      { id: 'A', text: "Enable Security Command Center (SCC) Standard or Premium at the Organization level." },
      { id: 'B', text: "Manually inspect configuration settings across 200 projects once a year." },
      { id: 'C', text: "Install open-source antivirus tools on individual developer laptops." },
      { id: 'D', text: "Review historical billing invoices for unusual computing charges." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Security Command Center (SCC) Standard or Premium at the Organization level. Security Command Center (SCC) is Google Cloud's centralized security management and risk assessment platform. It continuously discovers cloud assets, identifies security misconfigurations (like open storage buckets), uncovers vulnerabilities, and detects active cyber threats across the organization.",
    referenceUrl: "https://cloud.google.com/security-command-center/docs/overview",
    tags: ["Cloud Security", "Security Posture", "High Load Scale"]
  },
  {
    id: "gcp-ace-498",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Security Command Center (SCC): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Cloud Security to gain centralized visibility into the security posture of an entire organization, automatically detecting misconfigured storage buckets and compromised virtual machines.",
    question: "Which solution properly implements these mandatory security and governance controls? Security Command Center (SCC) asset discovery, vulnerability assessment, and threat detection is under consideration.",
    options: [
      { id: 'A', text: "Enable Security Command Center (SCC) Standard or Premium at the Organization level." },
      { id: 'B', text: "Manually inspect configuration settings across 200 projects once a year." },
      { id: 'C', text: "Install open-source antivirus tools on individual developer laptops." },
      { id: 'D', text: "Review historical billing invoices for unusual computing charges." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Security Command Center (SCC) Standard or Premium at the Organization level. Security Command Center (SCC) is Google Cloud's centralized security management and risk assessment platform. It continuously discovers cloud assets, identifies security misconfigurations (like open storage buckets), uncovers vulnerabilities, and detects active cyber threats across the organization.",
    referenceUrl: "https://cloud.google.com/security-command-center/docs/overview",
    tags: ["Cloud Security", "Security Posture", "Security Compliance"]
  },
  {
    id: "gcp-ace-499",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Security Command Center (SCC): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Cloud Security to gain centralized visibility into the security posture of an entire organization, automatically detecting misconfigured storage buckets and compromised virtual machines.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Security Command Center (SCC) asset discovery, vulnerability assessment, and threat detection is under consideration.",
    options: [
      { id: 'A', text: "Enable Security Command Center (SCC) Standard or Premium at the Organization level." },
      { id: 'B', text: "Manually inspect configuration settings across 200 projects once a year." },
      { id: 'C', text: "Install open-source antivirus tools on individual developer laptops." },
      { id: 'D', text: "Review historical billing invoices for unusual computing charges." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Security Command Center (SCC) Standard or Premium at the Organization level. Security Command Center (SCC) is Google Cloud's centralized security management and risk assessment platform. It continuously discovers cloud assets, identifies security misconfigurations (like open storage buckets), uncovers vulnerabilities, and detects active cyber threats across the organization.",
    referenceUrl: "https://cloud.google.com/security-command-center/docs/overview",
    tags: ["Cloud Security", "Security Posture", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-500",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Security Command Center (SCC): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Cloud Security to gain centralized visibility into the security posture of an entire organization, automatically detecting misconfigured storage buckets and compromised virtual machines.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Security Command Center (SCC) asset discovery, vulnerability assessment, and threat detection is under consideration.",
    options: [
      { id: 'A', text: "Enable Security Command Center (SCC) Standard or Premium at the Organization level." },
      { id: 'B', text: "Manually inspect configuration settings across 200 projects once a year." },
      { id: 'C', text: "Install open-source antivirus tools on individual developer laptops." },
      { id: 'D', text: "Review historical billing invoices for unusual computing charges." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Security Command Center (SCC) Standard or Premium at the Organization level. Security Command Center (SCC) is Google Cloud's centralized security management and risk assessment platform. It continuously discovers cloud assets, identifies security misconfigurations (like open storage buckets), uncovers vulnerabilities, and detects active cyber threats across the organization.",
    referenceUrl: "https://cloud.google.com/security-command-center/docs/overview",
    tags: ["Cloud Security", "Security Posture", "Resilience Failure"]
  }
];

export default GCP_ACE_QUESTIONS_20;
