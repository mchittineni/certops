export const GCP_ACE_QUESTIONS_18 = [
  {
    id: "gcp-ace-426",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Compute Engine Snapshot Schedules and Disaster Recovery: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Compute Engine Disks to ensure all Compute Engine persistent disks are backed up automatically every night at midnight with snapshots retained for 30 days.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Automated disk snapshot schedules for point-in-time recovery is under consideration.",
    options: [
      { id: 'A', text: "Create a Snapshot Schedule in Compute Engine and attach it to the persistent disks." },
      { id: 'B', text: "Manually click 'Create Snapshot' on every disk in the console each night." },
      { id: 'C', text: "Write an in-guest script that copies all files to a secondary local folder." },
      { id: 'D', text: "Shut down all production servers every night to export virtual machine images." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Snapshot Schedule in Compute Engine and attach it to the persistent disks. Snapshot schedules in Compute Engine automate the creation and retention of point-in-time persistent disk backups. Snapshots are incremental, compressed, and stored across multiple zones or regions, enabling rapid point-in-time recovery.",
    referenceUrl: "https://cloud.google.com/compute/docs/disks/scheduled-snapshots",
    tags: ["Compute Engine Disks", "Disks & Backups", "Dr Failover"]
  },
  {
    id: "gcp-ace-427",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Compute Engine Snapshot Schedules and Disaster Recovery: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Compute Engine Disks to ensure all Compute Engine persistent disks are backed up automatically every night at midnight with snapshots retained for 30 days.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Automated disk snapshot schedules for point-in-time recovery is under consideration.",
    options: [
      { id: 'A', text: "Create a Snapshot Schedule in Compute Engine and attach it to the persistent disks." },
      { id: 'B', text: "Manually click 'Create Snapshot' on every disk in the console each night." },
      { id: 'C', text: "Write an in-guest script that copies all files to a secondary local folder." },
      { id: 'D', text: "Shut down all production servers every night to export virtual machine images." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Snapshot Schedule in Compute Engine and attach it to the persistent disks. Snapshot schedules in Compute Engine automate the creation and retention of point-in-time persistent disk backups. Snapshots are incremental, compressed, and stored across multiple zones or regions, enabling rapid point-in-time recovery.",
    referenceUrl: "https://cloud.google.com/compute/docs/disks/scheduled-snapshots",
    tags: ["Compute Engine Disks", "Disks & Backups", "High Load Scale"]
  },
  {
    id: "gcp-ace-428",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Compute Engine Snapshot Schedules and Disaster Recovery: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Compute Engine Disks to ensure all Compute Engine persistent disks are backed up automatically every night at midnight with snapshots retained for 30 days.",
    question: "Which solution properly implements these mandatory security and governance controls? Automated disk snapshot schedules for point-in-time recovery is under consideration.",
    options: [
      { id: 'A', text: "Create a Snapshot Schedule in Compute Engine and attach it to the persistent disks." },
      { id: 'B', text: "Manually click 'Create Snapshot' on every disk in the console each night." },
      { id: 'C', text: "Write an in-guest script that copies all files to a secondary local folder." },
      { id: 'D', text: "Shut down all production servers every night to export virtual machine images." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Snapshot Schedule in Compute Engine and attach it to the persistent disks. Snapshot schedules in Compute Engine automate the creation and retention of point-in-time persistent disk backups. Snapshots are incremental, compressed, and stored across multiple zones or regions, enabling rapid point-in-time recovery.",
    referenceUrl: "https://cloud.google.com/compute/docs/disks/scheduled-snapshots",
    tags: ["Compute Engine Disks", "Disks & Backups", "Security Compliance"]
  },
  {
    id: "gcp-ace-429",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Compute Engine Snapshot Schedules and Disaster Recovery: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Compute Engine Disks to ensure all Compute Engine persistent disks are backed up automatically every night at midnight with snapshots retained for 30 days.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Automated disk snapshot schedules for point-in-time recovery is under consideration.",
    options: [
      { id: 'A', text: "Create a Snapshot Schedule in Compute Engine and attach it to the persistent disks." },
      { id: 'B', text: "Manually click 'Create Snapshot' on every disk in the console each night." },
      { id: 'C', text: "Write an in-guest script that copies all files to a secondary local folder." },
      { id: 'D', text: "Shut down all production servers every night to export virtual machine images." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Snapshot Schedule in Compute Engine and attach it to the persistent disks. Snapshot schedules in Compute Engine automate the creation and retention of point-in-time persistent disk backups. Snapshots are incremental, compressed, and stored across multiple zones or regions, enabling rapid point-in-time recovery.",
    referenceUrl: "https://cloud.google.com/compute/docs/disks/scheduled-snapshots",
    tags: ["Compute Engine Disks", "Disks & Backups", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-430",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Compute Engine Snapshot Schedules and Disaster Recovery: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Compute Engine Disks to ensure all Compute Engine persistent disks are backed up automatically every night at midnight with snapshots retained for 30 days.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Automated disk snapshot schedules for point-in-time recovery is under consideration.",
    options: [
      { id: 'A', text: "Create a Snapshot Schedule in Compute Engine and attach it to the persistent disks." },
      { id: 'B', text: "Manually click 'Create Snapshot' on every disk in the console each night." },
      { id: 'C', text: "Write an in-guest script that copies all files to a secondary local folder." },
      { id: 'D', text: "Shut down all production servers every night to export virtual machine images." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Snapshot Schedule in Compute Engine and attach it to the persistent disks. Snapshot schedules in Compute Engine automate the creation and retention of point-in-time persistent disk backups. Snapshots are incremental, compressed, and stored across multiple zones or regions, enabling rapid point-in-time recovery.",
    referenceUrl: "https://cloud.google.com/compute/docs/disks/scheduled-snapshots",
    tags: ["Compute Engine Disks", "Disks & Backups", "Resilience Failure"]
  },
  {
    id: "gcp-ace-431",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "GKE Pod and Node Autoscaling (HPA and Cluster Autoscaler): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Google Kubernetes Engine to automatically increase the number of application pods during traffic spikes, and automatically provision additional GKE worker nodes when existing nodes run out of capacity.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Horizontal Pod Autoscaler (HPA) and GKE Cluster Autoscaler is under consideration.",
    options: [
      { id: 'A', text: "Configure the Horizontal Pod Autoscaler (HPA) for application deployments and enable the GKE Cluster Autoscaler on the node pool." },
      { id: 'B', text: "Manually run 'kubectl scale deployment' whenever response times slow down." },
      { id: 'C', text: "Deploy 100 oversized virtual machine nodes permanently to ensure capacity is never exceeded." },
      { id: 'D', text: "Restart the Kubernetes cluster every 6 hours to clear memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Horizontal Pod Autoscaler (HPA) for application deployments and enable the GKE Cluster Autoscaler on the node pool. The Horizontal Pod Autoscaler (HPA) scales the number of pod replicas based on observed CPU/memory utilization or custom metrics. When pending pods cannot be scheduled due to insufficient node resources, the GKE Cluster Autoscaler automatically provisions additional worker nodes.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-autoscaler",
    tags: ["Google Kubernetes Engine", "GKE Autoscaling", "Dr Failover"]
  },
  {
    id: "gcp-ace-432",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "GKE Pod and Node Autoscaling (HPA and Cluster Autoscaler): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Google Kubernetes Engine to automatically increase the number of application pods during traffic spikes, and automatically provision additional GKE worker nodes when existing nodes run out of capacity.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Horizontal Pod Autoscaler (HPA) and GKE Cluster Autoscaler is under consideration.",
    options: [
      { id: 'A', text: "Configure the Horizontal Pod Autoscaler (HPA) for application deployments and enable the GKE Cluster Autoscaler on the node pool." },
      { id: 'B', text: "Manually run 'kubectl scale deployment' whenever response times slow down." },
      { id: 'C', text: "Deploy 100 oversized virtual machine nodes permanently to ensure capacity is never exceeded." },
      { id: 'D', text: "Restart the Kubernetes cluster every 6 hours to clear memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Horizontal Pod Autoscaler (HPA) for application deployments and enable the GKE Cluster Autoscaler on the node pool. The Horizontal Pod Autoscaler (HPA) scales the number of pod replicas based on observed CPU/memory utilization or custom metrics. When pending pods cannot be scheduled due to insufficient node resources, the GKE Cluster Autoscaler automatically provisions additional worker nodes.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-autoscaler",
    tags: ["Google Kubernetes Engine", "GKE Autoscaling", "High Load Scale"]
  },
  {
    id: "gcp-ace-433",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "GKE Pod and Node Autoscaling (HPA and Cluster Autoscaler): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Google Kubernetes Engine to automatically increase the number of application pods during traffic spikes, and automatically provision additional GKE worker nodes when existing nodes run out of capacity.",
    question: "Which solution properly implements these mandatory security and governance controls? Horizontal Pod Autoscaler (HPA) and GKE Cluster Autoscaler is under consideration.",
    options: [
      { id: 'A', text: "Configure the Horizontal Pod Autoscaler (HPA) for application deployments and enable the GKE Cluster Autoscaler on the node pool." },
      { id: 'B', text: "Manually run 'kubectl scale deployment' whenever response times slow down." },
      { id: 'C', text: "Deploy 100 oversized virtual machine nodes permanently to ensure capacity is never exceeded." },
      { id: 'D', text: "Restart the Kubernetes cluster every 6 hours to clear memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Horizontal Pod Autoscaler (HPA) for application deployments and enable the GKE Cluster Autoscaler on the node pool. The Horizontal Pod Autoscaler (HPA) scales the number of pod replicas based on observed CPU/memory utilization or custom metrics. When pending pods cannot be scheduled due to insufficient node resources, the GKE Cluster Autoscaler automatically provisions additional worker nodes.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-autoscaler",
    tags: ["Google Kubernetes Engine", "GKE Autoscaling", "Security Compliance"]
  },
  {
    id: "gcp-ace-434",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "GKE Pod and Node Autoscaling (HPA and Cluster Autoscaler): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Google Kubernetes Engine to automatically increase the number of application pods during traffic spikes, and automatically provision additional GKE worker nodes when existing nodes run out of capacity.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Horizontal Pod Autoscaler (HPA) and GKE Cluster Autoscaler is under consideration.",
    options: [
      { id: 'A', text: "Configure the Horizontal Pod Autoscaler (HPA) for application deployments and enable the GKE Cluster Autoscaler on the node pool." },
      { id: 'B', text: "Manually run 'kubectl scale deployment' whenever response times slow down." },
      { id: 'C', text: "Deploy 100 oversized virtual machine nodes permanently to ensure capacity is never exceeded." },
      { id: 'D', text: "Restart the Kubernetes cluster every 6 hours to clear memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Horizontal Pod Autoscaler (HPA) for application deployments and enable the GKE Cluster Autoscaler on the node pool. The Horizontal Pod Autoscaler (HPA) scales the number of pod replicas based on observed CPU/memory utilization or custom metrics. When pending pods cannot be scheduled due to insufficient node resources, the GKE Cluster Autoscaler automatically provisions additional worker nodes.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-autoscaler",
    tags: ["Google Kubernetes Engine", "GKE Autoscaling", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-435",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "GKE Pod and Node Autoscaling (HPA and Cluster Autoscaler): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Google Kubernetes Engine to automatically increase the number of application pods during traffic spikes, and automatically provision additional GKE worker nodes when existing nodes run out of capacity.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Horizontal Pod Autoscaler (HPA) and GKE Cluster Autoscaler is under consideration.",
    options: [
      { id: 'A', text: "Configure the Horizontal Pod Autoscaler (HPA) for application deployments and enable the GKE Cluster Autoscaler on the node pool." },
      { id: 'B', text: "Manually run 'kubectl scale deployment' whenever response times slow down." },
      { id: 'C', text: "Deploy 100 oversized virtual machine nodes permanently to ensure capacity is never exceeded." },
      { id: 'D', text: "Restart the Kubernetes cluster every 6 hours to clear memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Horizontal Pod Autoscaler (HPA) for application deployments and enable the GKE Cluster Autoscaler on the node pool. The Horizontal Pod Autoscaler (HPA) scales the number of pod replicas based on observed CPU/memory utilization or custom metrics. When pending pods cannot be scheduled due to insufficient node resources, the GKE Cluster Autoscaler automatically provisions additional worker nodes.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-autoscaler",
    tags: ["Google Kubernetes Engine", "GKE Autoscaling", "Resilience Failure"]
  },
  {
    id: "gcp-ace-436",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Storage Object Lifecycle Management Rules: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Cloud Storage to automatically transition Cloud Storage objects from Standard to Coldline after 90 days of creation and permanently delete objects older than 365 days.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Automated lifecycle management rules for storage class transitions and object deletion is under consideration.",
    options: [
      { id: 'A', text: "Configure an Object Lifecycle Management rule on the Cloud Storage bucket with Age conditions." },
      { id: 'B', text: "Write a custom python script scheduled on a VM to check object timestamps daily." },
      { id: 'C', text: "Manually inspect bucket contents in the console at the end of each month." },
      { id: 'D', text: "Download all objects to an on-premises disk after 90 days." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Object Lifecycle Management rule on the Cloud Storage bucket with Age conditions. Cloud Storage Object Lifecycle Management provides automated, rule-based lifecycle management. Rules define actions (SetStorageClass, Delete, AbortIncompleteMultipartUpload) triggered by conditions (Age, CreatedBefore, IsLive, MatchesPrefix), reducing storage costs automatically.",
    referenceUrl: "https://cloud.google.com/storage/docs/lifecycle",
    tags: ["Cloud Storage", "Storage Lifecycle", "Dr Failover"]
  },
  {
    id: "gcp-ace-437",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Storage Object Lifecycle Management Rules: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Cloud Storage to automatically transition Cloud Storage objects from Standard to Coldline after 90 days of creation and permanently delete objects older than 365 days.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Automated lifecycle management rules for storage class transitions and object deletion is under consideration.",
    options: [
      { id: 'A', text: "Configure an Object Lifecycle Management rule on the Cloud Storage bucket with Age conditions." },
      { id: 'B', text: "Write a custom python script scheduled on a VM to check object timestamps daily." },
      { id: 'C', text: "Manually inspect bucket contents in the console at the end of each month." },
      { id: 'D', text: "Download all objects to an on-premises disk after 90 days." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Object Lifecycle Management rule on the Cloud Storage bucket with Age conditions. Cloud Storage Object Lifecycle Management provides automated, rule-based lifecycle management. Rules define actions (SetStorageClass, Delete, AbortIncompleteMultipartUpload) triggered by conditions (Age, CreatedBefore, IsLive, MatchesPrefix), reducing storage costs automatically.",
    referenceUrl: "https://cloud.google.com/storage/docs/lifecycle",
    tags: ["Cloud Storage", "Storage Lifecycle", "High Load Scale"]
  },
  {
    id: "gcp-ace-438",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Storage Object Lifecycle Management Rules: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Cloud Storage to automatically transition Cloud Storage objects from Standard to Coldline after 90 days of creation and permanently delete objects older than 365 days.",
    question: "Which solution properly implements these mandatory security and governance controls? Automated lifecycle management rules for storage class transitions and object deletion is under consideration.",
    options: [
      { id: 'A', text: "Configure an Object Lifecycle Management rule on the Cloud Storage bucket with Age conditions." },
      { id: 'B', text: "Write a custom python script scheduled on a VM to check object timestamps daily." },
      { id: 'C', text: "Manually inspect bucket contents in the console at the end of each month." },
      { id: 'D', text: "Download all objects to an on-premises disk after 90 days." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Object Lifecycle Management rule on the Cloud Storage bucket with Age conditions. Cloud Storage Object Lifecycle Management provides automated, rule-based lifecycle management. Rules define actions (SetStorageClass, Delete, AbortIncompleteMultipartUpload) triggered by conditions (Age, CreatedBefore, IsLive, MatchesPrefix), reducing storage costs automatically.",
    referenceUrl: "https://cloud.google.com/storage/docs/lifecycle",
    tags: ["Cloud Storage", "Storage Lifecycle", "Security Compliance"]
  },
  {
    id: "gcp-ace-439",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Storage Object Lifecycle Management Rules: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Cloud Storage to automatically transition Cloud Storage objects from Standard to Coldline after 90 days of creation and permanently delete objects older than 365 days.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Automated lifecycle management rules for storage class transitions and object deletion is under consideration.",
    options: [
      { id: 'A', text: "Configure an Object Lifecycle Management rule on the Cloud Storage bucket with Age conditions." },
      { id: 'B', text: "Write a custom python script scheduled on a VM to check object timestamps daily." },
      { id: 'C', text: "Manually inspect bucket contents in the console at the end of each month." },
      { id: 'D', text: "Download all objects to an on-premises disk after 90 days." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Object Lifecycle Management rule on the Cloud Storage bucket with Age conditions. Cloud Storage Object Lifecycle Management provides automated, rule-based lifecycle management. Rules define actions (SetStorageClass, Delete, AbortIncompleteMultipartUpload) triggered by conditions (Age, CreatedBefore, IsLive, MatchesPrefix), reducing storage costs automatically.",
    referenceUrl: "https://cloud.google.com/storage/docs/lifecycle",
    tags: ["Cloud Storage", "Storage Lifecycle", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-440",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Storage Object Lifecycle Management Rules: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Cloud Storage to automatically transition Cloud Storage objects from Standard to Coldline after 90 days of creation and permanently delete objects older than 365 days.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Automated lifecycle management rules for storage class transitions and object deletion is under consideration.",
    options: [
      { id: 'A', text: "Configure an Object Lifecycle Management rule on the Cloud Storage bucket with Age conditions." },
      { id: 'B', text: "Write a custom python script scheduled on a VM to check object timestamps daily." },
      { id: 'C', text: "Manually inspect bucket contents in the console at the end of each month." },
      { id: 'D', text: "Download all objects to an on-premises disk after 90 days." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Object Lifecycle Management rule on the Cloud Storage bucket with Age conditions. Cloud Storage Object Lifecycle Management provides automated, rule-based lifecycle management. Rules define actions (SetStorageClass, Delete, AbortIncompleteMultipartUpload) triggered by conditions (Age, CreatedBefore, IsLive, MatchesPrefix), reducing storage costs automatically.",
    referenceUrl: "https://cloud.google.com/storage/docs/lifecycle",
    tags: ["Cloud Storage", "Storage Lifecycle", "Resilience Failure"]
  },
  {
    id: "gcp-ace-441",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Compute Engine Health Checks and Auto-Healing: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Compute Engine to automatically detect when an application running inside a Managed Instance Group VM becomes unresponsive to HTTP health probes and recreate the unhealthy instance.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Application health checks and automated VM auto-healing in MIGs is under consideration.",
    options: [
      { id: 'A', text: "Attach an HTTP Health Check to the Managed Instance Group with an autohealing policy." },
      { id: 'B', text: "Rely on operations engineers to manually reboot frozen virtual machines." },
      { id: 'C', text: "Configure a ping probe against the VM network interface." },
      { id: 'D', text: "Disable health checks to prevent instance restarts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an HTTP Health Check to the Managed Instance Group with an autohealing policy. Compute Engine auto-healing in Managed Instance Groups uses application-level health checks (HTTP, HTTPS, or TCP). If an application fails health check probes for the configured threshold, the MIG automatically stops, deletes, and recreates the VM instance to restore service availability.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups/autohealing-instances-in-migs",
    tags: ["Compute Engine", "High Availability", "Dr Failover"]
  },
  {
    id: "gcp-ace-442",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Compute Engine Health Checks and Auto-Healing: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Compute Engine to automatically detect when an application running inside a Managed Instance Group VM becomes unresponsive to HTTP health probes and recreate the unhealthy instance.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Application health checks and automated VM auto-healing in MIGs is under consideration.",
    options: [
      { id: 'A', text: "Attach an HTTP Health Check to the Managed Instance Group with an autohealing policy." },
      { id: 'B', text: "Rely on operations engineers to manually reboot frozen virtual machines." },
      { id: 'C', text: "Configure a ping probe against the VM network interface." },
      { id: 'D', text: "Disable health checks to prevent instance restarts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an HTTP Health Check to the Managed Instance Group with an autohealing policy. Compute Engine auto-healing in Managed Instance Groups uses application-level health checks (HTTP, HTTPS, or TCP). If an application fails health check probes for the configured threshold, the MIG automatically stops, deletes, and recreates the VM instance to restore service availability.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups/autohealing-instances-in-migs",
    tags: ["Compute Engine", "High Availability", "High Load Scale"]
  },
  {
    id: "gcp-ace-443",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Compute Engine Health Checks and Auto-Healing: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Compute Engine to automatically detect when an application running inside a Managed Instance Group VM becomes unresponsive to HTTP health probes and recreate the unhealthy instance.",
    question: "Which solution properly implements these mandatory security and governance controls? Application health checks and automated VM auto-healing in MIGs is under consideration.",
    options: [
      { id: 'A', text: "Attach an HTTP Health Check to the Managed Instance Group with an autohealing policy." },
      { id: 'B', text: "Rely on operations engineers to manually reboot frozen virtual machines." },
      { id: 'C', text: "Configure a ping probe against the VM network interface." },
      { id: 'D', text: "Disable health checks to prevent instance restarts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an HTTP Health Check to the Managed Instance Group with an autohealing policy. Compute Engine auto-healing in Managed Instance Groups uses application-level health checks (HTTP, HTTPS, or TCP). If an application fails health check probes for the configured threshold, the MIG automatically stops, deletes, and recreates the VM instance to restore service availability.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups/autohealing-instances-in-migs",
    tags: ["Compute Engine", "High Availability", "Security Compliance"]
  },
  {
    id: "gcp-ace-444",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Compute Engine Health Checks and Auto-Healing: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Compute Engine to automatically detect when an application running inside a Managed Instance Group VM becomes unresponsive to HTTP health probes and recreate the unhealthy instance.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Application health checks and automated VM auto-healing in MIGs is under consideration.",
    options: [
      { id: 'A', text: "Attach an HTTP Health Check to the Managed Instance Group with an autohealing policy." },
      { id: 'B', text: "Rely on operations engineers to manually reboot frozen virtual machines." },
      { id: 'C', text: "Configure a ping probe against the VM network interface." },
      { id: 'D', text: "Disable health checks to prevent instance restarts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an HTTP Health Check to the Managed Instance Group with an autohealing policy. Compute Engine auto-healing in Managed Instance Groups uses application-level health checks (HTTP, HTTPS, or TCP). If an application fails health check probes for the configured threshold, the MIG automatically stops, deletes, and recreates the VM instance to restore service availability.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups/autohealing-instances-in-migs",
    tags: ["Compute Engine", "High Availability", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-445",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Compute Engine Health Checks and Auto-Healing: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Compute Engine to automatically detect when an application running inside a Managed Instance Group VM becomes unresponsive to HTTP health probes and recreate the unhealthy instance.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Application health checks and automated VM auto-healing in MIGs is under consideration.",
    options: [
      { id: 'A', text: "Attach an HTTP Health Check to the Managed Instance Group with an autohealing policy." },
      { id: 'B', text: "Rely on operations engineers to manually reboot frozen virtual machines." },
      { id: 'C', text: "Configure a ping probe against the VM network interface." },
      { id: 'D', text: "Disable health checks to prevent instance restarts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an HTTP Health Check to the Managed Instance Group with an autohealing policy. Compute Engine auto-healing in Managed Instance Groups uses application-level health checks (HTTP, HTTPS, or TCP). If an application fails health check probes for the configured threshold, the MIG automatically stops, deletes, and recreates the VM instance to restore service availability.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups/autohealing-instances-in-migs",
    tags: ["Compute Engine", "High Availability", "Resilience Failure"]
  },
  {
    id: "gcp-ace-446",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud SQL Automated Backups and Point-in-Time Recovery (PITR): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Cloud SQL to recover a Cloud SQL database to its exact state 15 minutes before an accidental DROP TABLE command was executed by an administrator.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Automated daily backups and write-ahead transaction log point-in-time recovery is under consideration.",
    options: [
      { id: 'A', text: "Execute a Point-in-Time Recovery (PITR) using automated backups and transaction write-ahead logs." },
      { id: 'B', text: "Restore from last Sunday's full database export file." },
      { id: 'C', text: "Recreate the dropped table manually from memory." },
      { id: 'D', text: "Submit a ticket to Google support requesting disk-level file undeletion." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute a Point-in-Time Recovery (PITR) using automated backups and transaction write-ahead logs. Point-in-Time Recovery (PITR) in Cloud SQL uses binary logs (MySQL) or write-ahead logs (PostgreSQL) in conjunction with automated daily backups to restore the database to the exact minute and second prior to data corruption or accidental table deletion.",
    referenceUrl: "https://cloud.google.com/sql/docs/postgres/backup-recovery/pitr",
    tags: ["Cloud SQL", "Database Recovery", "Dr Failover"]
  },
  {
    id: "gcp-ace-447",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud SQL Automated Backups and Point-in-Time Recovery (PITR): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Cloud SQL to recover a Cloud SQL database to its exact state 15 minutes before an accidental DROP TABLE command was executed by an administrator.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Automated daily backups and write-ahead transaction log point-in-time recovery is under consideration.",
    options: [
      { id: 'A', text: "Execute a Point-in-Time Recovery (PITR) using automated backups and transaction write-ahead logs." },
      { id: 'B', text: "Restore from last Sunday's full database export file." },
      { id: 'C', text: "Recreate the dropped table manually from memory." },
      { id: 'D', text: "Submit a ticket to Google support requesting disk-level file undeletion." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute a Point-in-Time Recovery (PITR) using automated backups and transaction write-ahead logs. Point-in-Time Recovery (PITR) in Cloud SQL uses binary logs (MySQL) or write-ahead logs (PostgreSQL) in conjunction with automated daily backups to restore the database to the exact minute and second prior to data corruption or accidental table deletion.",
    referenceUrl: "https://cloud.google.com/sql/docs/postgres/backup-recovery/pitr",
    tags: ["Cloud SQL", "Database Recovery", "High Load Scale"]
  },
  {
    id: "gcp-ace-448",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud SQL Automated Backups and Point-in-Time Recovery (PITR): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Cloud SQL to recover a Cloud SQL database to its exact state 15 minutes before an accidental DROP TABLE command was executed by an administrator.",
    question: "Which solution properly implements these mandatory security and governance controls? Automated daily backups and write-ahead transaction log point-in-time recovery is under consideration.",
    options: [
      { id: 'A', text: "Execute a Point-in-Time Recovery (PITR) using automated backups and transaction write-ahead logs." },
      { id: 'B', text: "Restore from last Sunday's full database export file." },
      { id: 'C', text: "Recreate the dropped table manually from memory." },
      { id: 'D', text: "Submit a ticket to Google support requesting disk-level file undeletion." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute a Point-in-Time Recovery (PITR) using automated backups and transaction write-ahead logs. Point-in-Time Recovery (PITR) in Cloud SQL uses binary logs (MySQL) or write-ahead logs (PostgreSQL) in conjunction with automated daily backups to restore the database to the exact minute and second prior to data corruption or accidental table deletion.",
    referenceUrl: "https://cloud.google.com/sql/docs/postgres/backup-recovery/pitr",
    tags: ["Cloud SQL", "Database Recovery", "Security Compliance"]
  },
  {
    id: "gcp-ace-449",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud SQL Automated Backups and Point-in-Time Recovery (PITR): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Cloud SQL to recover a Cloud SQL database to its exact state 15 minutes before an accidental DROP TABLE command was executed by an administrator.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Automated daily backups and write-ahead transaction log point-in-time recovery is under consideration.",
    options: [
      { id: 'A', text: "Execute a Point-in-Time Recovery (PITR) using automated backups and transaction write-ahead logs." },
      { id: 'B', text: "Restore from last Sunday's full database export file." },
      { id: 'C', text: "Recreate the dropped table manually from memory." },
      { id: 'D', text: "Submit a ticket to Google support requesting disk-level file undeletion." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute a Point-in-Time Recovery (PITR) using automated backups and transaction write-ahead logs. Point-in-Time Recovery (PITR) in Cloud SQL uses binary logs (MySQL) or write-ahead logs (PostgreSQL) in conjunction with automated daily backups to restore the database to the exact minute and second prior to data corruption or accidental table deletion.",
    referenceUrl: "https://cloud.google.com/sql/docs/postgres/backup-recovery/pitr",
    tags: ["Cloud SQL", "Database Recovery", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-450",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud SQL Automated Backups and Point-in-Time Recovery (PITR): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Cloud SQL to recover a Cloud SQL database to its exact state 15 minutes before an accidental DROP TABLE command was executed by an administrator.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Automated daily backups and write-ahead transaction log point-in-time recovery is under consideration.",
    options: [
      { id: 'A', text: "Execute a Point-in-Time Recovery (PITR) using automated backups and transaction write-ahead logs." },
      { id: 'B', text: "Restore from last Sunday's full database export file." },
      { id: 'C', text: "Recreate the dropped table manually from memory." },
      { id: 'D', text: "Submit a ticket to Google support requesting disk-level file undeletion." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute a Point-in-Time Recovery (PITR) using automated backups and transaction write-ahead logs. Point-in-Time Recovery (PITR) in Cloud SQL uses binary logs (MySQL) or write-ahead logs (PostgreSQL) in conjunction with automated daily backups to restore the database to the exact minute and second prior to data corruption or accidental table deletion.",
    referenceUrl: "https://cloud.google.com/sql/docs/postgres/backup-recovery/pitr",
    tags: ["Cloud SQL", "Database Recovery", "Resilience Failure"]
  }
];

export default GCP_ACE_QUESTIONS_18;
