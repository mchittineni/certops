export const GCP_ACE_QUESTIONS_18 = [
  {
    id: "gcp-ace-426",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Compute Engine Snapshot Schedules and Disaster Recovery: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer needs to ensure all Compute Engine persistent disks are backed up automatically every night at midnight with snapshots retained for 30 days.",
    question: "Which concept or service configuration satisfies these operational resilience objectives?",
    options: [
      { id: 'A', text: "Manually click 'Create Snapshot' on every disk in the console each night." },
      { id: 'B', text: "Write an in-guest script that copies all files to a secondary local folder." },
      { id: 'C', text: "Create a Snapshot Schedule in Compute Engine and attach it to the persistent disks." },
      { id: 'D', text: "Shut down all production servers every night to export virtual machine images." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a Snapshot Schedule in Compute Engine and attach it to the persistent disks. Snapshot schedules in Compute Engine automate the creation and retention of point-in-time persistent disk backups. Snapshots are incremental, compressed, and stored across multiple zones or regions, enabling rapid point-in-time recovery.",
    referenceUrl: "https://cloud.google.com/compute/docs/disks/scheduled-snapshots",
    tags: ["Compute Engine Disks","Disks & Backups","Dr Failover"]
  },
  {
    id: "gcp-ace-427",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Compute Engine Snapshot Schedules and Disaster Recovery: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer needs to ensure all Compute Engine persistent disks are backed up automatically every night at midnight with snapshots retained for 30 days.",
    question: "Which architectural approach should the team select to manage this demand efficiently?",
    options: [
      { id: 'A', text: "Write an in-guest script that copies all files to a secondary local folder." },
      { id: 'B', text: "Create a Snapshot Schedule in Compute Engine and attach it to the persistent disks." },
      { id: 'C', text: "Shut down all production servers every night to export virtual machine images." },
      { id: 'D', text: "Manually click 'Create Snapshot' on every disk in the console each night." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a Snapshot Schedule in Compute Engine and attach it to the persistent disks. Snapshot schedules in Compute Engine automate the creation and retention of point-in-time persistent disk backups. Snapshots are incremental, compressed, and stored across multiple zones or regions, enabling rapid point-in-time recovery.",
    referenceUrl: "https://cloud.google.com/compute/docs/disks/scheduled-snapshots",
    tags: ["Compute Engine Disks","Disks & Backups","High Load Scale"]
  },
  {
    id: "gcp-ace-428",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Compute Engine Snapshot Schedules and Disaster Recovery: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer needs to ensure all Compute Engine persistent disks are backed up automatically every night at midnight with snapshots retained for 30 days.",
    question: "Which solution properly implements these mandatory security and governance controls?",
    options: [
      { id: 'A', text: "Manually click 'Create Snapshot' on every disk in the console each night." },
      { id: 'B', text: "Create a Snapshot Schedule in Compute Engine and attach it to the persistent disks." },
      { id: 'C', text: "Shut down all production servers every night to export virtual machine images." },
      { id: 'D', text: "Write an in-guest script that copies all files to a secondary local folder." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a Snapshot Schedule in Compute Engine and attach it to the persistent disks. Snapshot schedules in Compute Engine automate the creation and retention of point-in-time persistent disk backups. Snapshots are incremental, compressed, and stored across multiple zones or regions, enabling rapid point-in-time recovery.",
    referenceUrl: "https://cloud.google.com/compute/docs/disks/scheduled-snapshots",
    tags: ["Compute Engine Disks","Disks & Backups","Security Compliance"]
  },
  {
    id: "gcp-ace-429",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Compute Engine Snapshot Schedules and Disaster Recovery: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer needs to ensure all Compute Engine persistent disks are backed up automatically every night at midnight with snapshots retained for 30 days.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals?",
    options: [
      { id: 'A', text: "Create a Snapshot Schedule in Compute Engine and attach it to the persistent disks." },
      { id: 'B', text: "Manually click 'Create Snapshot' on every disk in the console each night." },
      { id: 'C', text: "Shut down all production servers every night to export virtual machine images." },
      { id: 'D', text: "Write an in-guest script that copies all files to a secondary local folder." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Snapshot Schedule in Compute Engine and attach it to the persistent disks. Snapshot schedules in Compute Engine automate the creation and retention of point-in-time persistent disk backups. Snapshots are incremental, compressed, and stored across multiple zones or regions, enabling rapid point-in-time recovery.",
    referenceUrl: "https://cloud.google.com/compute/docs/disks/scheduled-snapshots",
    tags: ["Compute Engine Disks","Disks & Backups","Hybrid Migration"]
  },
  {
    id: "gcp-ace-430",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Compute Engine Snapshot Schedules and Disaster Recovery: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer needs to ensure all Compute Engine persistent disks are backed up automatically every night at midnight with snapshots retained for 30 days.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management?",
    options: [
      { id: 'A', text: "Shut down all production servers every night to export virtual machine images." },
      { id: 'B', text: "Create a Snapshot Schedule in Compute Engine and attach it to the persistent disks." },
      { id: 'C', text: "Write an in-guest script that copies all files to a secondary local folder." },
      { id: 'D', text: "Manually click 'Create Snapshot' on every disk in the console each night." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a Snapshot Schedule in Compute Engine and attach it to the persistent disks. Snapshot schedules in Compute Engine automate the creation and retention of point-in-time persistent disk backups. Snapshots are incremental, compressed, and stored across multiple zones or regions, enabling rapid point-in-time recovery.",
    referenceUrl: "https://cloud.google.com/compute/docs/disks/scheduled-snapshots",
    tags: ["Compute Engine Disks","Disks & Backups","Resilience Failure"]
  },
  {
    id: "gcp-ace-431",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "GKE Pod and Node Autoscaling (HPA and Cluster Autoscaler): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer needs to automatically increase the number of application pods during traffic spikes, and automatically provision additional GKE worker nodes when existing nodes run out of capacity.",
    question: "Which concept or service configuration satisfies these operational resilience objectives?",
    options: [
      { id: 'A', text: "Deploy 100 oversized virtual machine nodes permanently to ensure capacity is never exceeded." },
      { id: 'B', text: "A Horizontal Pod Autoscaler plus the GKE cluster autoscaler on the pool." },
      { id: 'C', text: "Manually run 'kubectl scale deployment' whenever response times slow down." },
      { id: 'D', text: "Restart the Kubernetes cluster every 6 hours to clear memory." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure the Horizontal Pod Autoscaler (HPA) for application deployments and enable the GKE Cluster Autoscaler on the node pool. The Horizontal Pod Autoscaler (HPA) scales the number of pod replicas based on observed CPU/memory utilization or custom metrics. When pending pods cannot be scheduled due to insufficient node resources, the GKE Cluster Autoscaler automatically provisions additional worker nodes.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-autoscaler",
    tags: ["Google Kubernetes Engine","GKE Autoscaling","Dr Failover"]
  },
  {
    id: "gcp-ace-432",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "GKE Pod and Node Autoscaling (HPA and Cluster Autoscaler): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer needs to automatically increase the number of application pods during traffic spikes, and automatically provision additional GKE worker nodes when existing nodes run out of capacity.",
    question: "Which architectural approach should the team select to manage this demand efficiently?",
    options: [
      { id: 'A', text: "Deploy 100 oversized virtual machine nodes permanently to ensure capacity is never exceeded." },
      { id: 'B', text: "Manually run 'kubectl scale deployment' whenever response times slow down." },
      { id: 'C', text: "Restart the Kubernetes cluster every 6 hours to clear memory." },
      { id: 'D', text: "A Horizontal Pod Autoscaler plus the GKE cluster autoscaler on the pool." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure the Horizontal Pod Autoscaler (HPA) for application deployments and enable the GKE Cluster Autoscaler on the node pool. The Horizontal Pod Autoscaler (HPA) scales the number of pod replicas based on observed CPU/memory utilization or custom metrics. When pending pods cannot be scheduled due to insufficient node resources, the GKE Cluster Autoscaler automatically provisions additional worker nodes.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-autoscaler",
    tags: ["Google Kubernetes Engine","GKE Autoscaling","High Load Scale"]
  },
  {
    id: "gcp-ace-433",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "GKE Pod and Node Autoscaling (HPA and Cluster Autoscaler): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer needs to automatically increase the number of application pods during traffic spikes, and automatically provision additional GKE worker nodes when existing nodes run out of capacity.",
    question: "Which solution properly implements these mandatory security and governance controls?",
    options: [
      { id: 'A', text: "Deploy 100 oversized virtual machine nodes permanently to ensure capacity is never exceeded." },
      { id: 'B', text: "Manually run 'kubectl scale deployment' whenever response times slow down." },
      { id: 'C', text: "Restart the Kubernetes cluster every 6 hours to clear memory." },
      { id: 'D', text: "A Horizontal Pod Autoscaler plus the GKE cluster autoscaler on the pool." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure the Horizontal Pod Autoscaler (HPA) for application deployments and enable the GKE Cluster Autoscaler on the node pool. The Horizontal Pod Autoscaler (HPA) scales the number of pod replicas based on observed CPU/memory utilization or custom metrics. When pending pods cannot be scheduled due to insufficient node resources, the GKE Cluster Autoscaler automatically provisions additional worker nodes.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-autoscaler",
    tags: ["Google Kubernetes Engine","GKE Autoscaling","Security Compliance"]
  },
  {
    id: "gcp-ace-434",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "GKE Pod and Node Autoscaling (HPA and Cluster Autoscaler): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer needs to automatically increase the number of application pods during traffic spikes, and automatically provision additional GKE worker nodes when existing nodes run out of capacity.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals?",
    options: [
      { id: 'A', text: "Deploy 100 oversized virtual machine nodes permanently to ensure capacity is never exceeded." },
      { id: 'B', text: "A Horizontal Pod Autoscaler plus the GKE cluster autoscaler on the pool." },
      { id: 'C', text: "Manually run 'kubectl scale deployment' whenever response times slow down." },
      { id: 'D', text: "Restart the Kubernetes cluster every 6 hours to clear memory." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure the Horizontal Pod Autoscaler (HPA) for application deployments and enable the GKE Cluster Autoscaler on the node pool. The Horizontal Pod Autoscaler (HPA) scales the number of pod replicas based on observed CPU/memory utilization or custom metrics. When pending pods cannot be scheduled due to insufficient node resources, the GKE Cluster Autoscaler automatically provisions additional worker nodes.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-autoscaler",
    tags: ["Google Kubernetes Engine","GKE Autoscaling","Hybrid Migration"]
  },
  {
    id: "gcp-ace-435",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "GKE Pod and Node Autoscaling (HPA and Cluster Autoscaler): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer needs to automatically increase the number of application pods during traffic spikes, and automatically provision additional GKE worker nodes when existing nodes run out of capacity.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management?",
    options: [
      { id: 'A', text: "A Horizontal Pod Autoscaler plus the GKE cluster autoscaler on the pool." },
      { id: 'B', text: "Restart the Kubernetes cluster every 6 hours to clear memory." },
      { id: 'C', text: "Manually run 'kubectl scale deployment' whenever response times slow down." },
      { id: 'D', text: "Deploy 100 oversized virtual machine nodes permanently to ensure capacity is never exceeded." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Horizontal Pod Autoscaler (HPA) for application deployments and enable the GKE Cluster Autoscaler on the node pool. The Horizontal Pod Autoscaler (HPA) scales the number of pod replicas based on observed CPU/memory utilization or custom metrics. When pending pods cannot be scheduled due to insufficient node resources, the GKE Cluster Autoscaler automatically provisions additional worker nodes.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-autoscaler",
    tags: ["Google Kubernetes Engine","GKE Autoscaling","Resilience Failure"]
  },
  {
    id: "gcp-ace-436",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Storage Object Lifecycle Management Rules: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer needs to automatically transition Cloud Storage objects from Standard to Coldline after 90 days of creation and permanently delete objects older than 365 days.",
    question: "Which concept or service configuration satisfies these operational resilience objectives?",
    options: [
      { id: 'A', text: "Download all objects to an on-premises disk after 90 days." },
      { id: 'B', text: "Configure an Object Lifecycle Management rule on the Cloud Storage bucket with Age conditions." },
      { id: 'C', text: "Run a scheduled Cloud Function that lists the bucket and deletes old objects." },
      { id: 'D', text: "Write a custom python script scheduled on a VM to check object timestamps daily." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Object Lifecycle Management rule on the Cloud Storage bucket with Age conditions. Cloud Storage Object Lifecycle Management provides automated, rule-based lifecycle management. Rules define actions (SetStorageClass, Delete, AbortIncompleteMultipartUpload) triggered by conditions (Age, CreatedBefore, IsLive, MatchesPrefix), reducing storage costs automatically.",
    referenceUrl: "https://cloud.google.com/storage/docs/lifecycle",
    tags: ["Cloud Storage","Storage Lifecycle","Dr Failover"]
  },
  {
    id: "gcp-ace-437",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Storage Object Lifecycle Management Rules: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer needs to automatically transition Cloud Storage objects from Standard to Coldline after 90 days of creation and permanently delete objects older than 365 days.",
    question: "Which architectural approach should the team select to manage this demand efficiently?",
    options: [
      { id: 'A', text: "Run a scheduled Cloud Function that lists the bucket and deletes old objects." },
      { id: 'B', text: "Download all objects to an on-premises disk after 90 days." },
      { id: 'C', text: "Configure an Object Lifecycle Management rule on the Cloud Storage bucket with Age conditions." },
      { id: 'D', text: "Write a custom python script scheduled on a VM to check object timestamps daily." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Object Lifecycle Management rule on the Cloud Storage bucket with Age conditions. Cloud Storage Object Lifecycle Management provides automated, rule-based lifecycle management. Rules define actions (SetStorageClass, Delete, AbortIncompleteMultipartUpload) triggered by conditions (Age, CreatedBefore, IsLive, MatchesPrefix), reducing storage costs automatically.",
    referenceUrl: "https://cloud.google.com/storage/docs/lifecycle",
    tags: ["Cloud Storage","Storage Lifecycle","High Load Scale"]
  },
  {
    id: "gcp-ace-438",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Storage Object Lifecycle Management Rules: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer needs to automatically transition Cloud Storage objects from Standard to Coldline after 90 days of creation and permanently delete objects older than 365 days.",
    question: "Which solution properly implements these mandatory security and governance controls?",
    options: [
      { id: 'A', text: "Write a custom python script scheduled on a VM to check object timestamps daily." },
      { id: 'B', text: "Run a scheduled Cloud Function that lists the bucket and deletes old objects." },
      { id: 'C', text: "Configure an Object Lifecycle Management rule on the Cloud Storage bucket with Age conditions." },
      { id: 'D', text: "Download all objects to an on-premises disk after 90 days." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Object Lifecycle Management rule on the Cloud Storage bucket with Age conditions. Cloud Storage Object Lifecycle Management provides automated, rule-based lifecycle management. Rules define actions (SetStorageClass, Delete, AbortIncompleteMultipartUpload) triggered by conditions (Age, CreatedBefore, IsLive, MatchesPrefix), reducing storage costs automatically.",
    referenceUrl: "https://cloud.google.com/storage/docs/lifecycle",
    tags: ["Cloud Storage","Storage Lifecycle","Security Compliance"]
  },
  {
    id: "gcp-ace-439",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Storage Object Lifecycle Management Rules: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer needs to automatically transition Cloud Storage objects from Standard to Coldline after 90 days of creation and permanently delete objects older than 365 days.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals?",
    options: [
      { id: 'A', text: "Write a custom python script scheduled on a VM to check object timestamps daily." },
      { id: 'B', text: "Configure an Object Lifecycle Management rule on the Cloud Storage bucket with Age conditions." },
      { id: 'C', text: "Run a scheduled Cloud Function that lists the bucket and deletes old objects." },
      { id: 'D', text: "Download all objects to an on-premises disk after 90 days." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Object Lifecycle Management rule on the Cloud Storage bucket with Age conditions. Cloud Storage Object Lifecycle Management provides automated, rule-based lifecycle management. Rules define actions (SetStorageClass, Delete, AbortIncompleteMultipartUpload) triggered by conditions (Age, CreatedBefore, IsLive, MatchesPrefix), reducing storage costs automatically.",
    referenceUrl: "https://cloud.google.com/storage/docs/lifecycle",
    tags: ["Cloud Storage","Storage Lifecycle","Hybrid Migration"]
  },
  {
    id: "gcp-ace-440",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Storage Object Lifecycle Management Rules: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer needs to automatically transition Cloud Storage objects from Standard to Coldline after 90 days of creation and permanently delete objects older than 365 days.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management?",
    options: [
      { id: 'A', text: "Write a custom python script scheduled on a VM to check object timestamps daily." },
      { id: 'B', text: "Download all objects to an on-premises disk after 90 days." },
      { id: 'C', text: "Configure an Object Lifecycle Management rule on the Cloud Storage bucket with Age conditions." },
      { id: 'D', text: "Run a scheduled Cloud Function that lists the bucket and deletes old objects." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Object Lifecycle Management rule on the Cloud Storage bucket with Age conditions. Cloud Storage Object Lifecycle Management provides automated, rule-based lifecycle management. Rules define actions (SetStorageClass, Delete, AbortIncompleteMultipartUpload) triggered by conditions (Age, CreatedBefore, IsLive, MatchesPrefix), reducing storage costs automatically.",
    referenceUrl: "https://cloud.google.com/storage/docs/lifecycle",
    tags: ["Cloud Storage","Storage Lifecycle","Resilience Failure"]
  },
  {
    id: "gcp-ace-441",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Compute Engine Health Checks and Auto-Healing: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer needs to automatically detect when an application running inside a Managed Instance Group VM becomes unresponsive to HTTP health probes and recreate the unhealthy instance.",
    question: "Which concept or service configuration satisfies these operational resilience objectives?",
    options: [
      { id: 'A', text: "Configure a ping probe against the VM network interface." },
      { id: 'B', text: "Attach an HTTP Health Check to the Managed Instance Group with an autohealing policy." },
      { id: 'C', text: "Rely on operations engineers to manually reboot frozen virtual machines." },
      { id: 'D', text: "Disable health checks to prevent instance restarts." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Attach an HTTP Health Check to the Managed Instance Group with an autohealing policy. Compute Engine auto-healing in Managed Instance Groups uses application-level health checks (HTTP, HTTPS, or TCP). If an application fails health check probes for the configured threshold, the MIG automatically stops, deletes, and recreates the VM instance to restore service availability.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups/autohealing-instances-in-migs",
    tags: ["Compute Engine","High Availability","Dr Failover"]
  },
  {
    id: "gcp-ace-442",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Compute Engine Health Checks and Auto-Healing: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer needs to automatically detect when an application running inside a Managed Instance Group VM becomes unresponsive to HTTP health probes and recreate the unhealthy instance.",
    question: "Which architectural approach should the team select to manage this demand efficiently?",
    options: [
      { id: 'A', text: "Disable health checks to prevent instance restarts." },
      { id: 'B', text: "Rely on operations engineers to manually reboot frozen virtual machines." },
      { id: 'C', text: "Configure a ping probe against the VM network interface." },
      { id: 'D', text: "Attach an HTTP Health Check to the Managed Instance Group with an autohealing policy." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Attach an HTTP Health Check to the Managed Instance Group with an autohealing policy. Compute Engine auto-healing in Managed Instance Groups uses application-level health checks (HTTP, HTTPS, or TCP). If an application fails health check probes for the configured threshold, the MIG automatically stops, deletes, and recreates the VM instance to restore service availability.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups/autohealing-instances-in-migs",
    tags: ["Compute Engine","High Availability","High Load Scale"]
  },
  {
    id: "gcp-ace-443",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Compute Engine Health Checks and Auto-Healing: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer needs to automatically detect when an application running inside a Managed Instance Group VM becomes unresponsive to HTTP health probes and recreate the unhealthy instance.",
    question: "Which solution properly implements these mandatory security and governance controls?",
    options: [
      { id: 'A', text: "Rely on operations engineers to manually reboot frozen virtual machines." },
      { id: 'B', text: "Attach an HTTP Health Check to the Managed Instance Group with an autohealing policy." },
      { id: 'C', text: "Disable health checks to prevent instance restarts." },
      { id: 'D', text: "Configure a ping probe against the VM network interface." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Attach an HTTP Health Check to the Managed Instance Group with an autohealing policy. Compute Engine auto-healing in Managed Instance Groups uses application-level health checks (HTTP, HTTPS, or TCP). If an application fails health check probes for the configured threshold, the MIG automatically stops, deletes, and recreates the VM instance to restore service availability.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups/autohealing-instances-in-migs",
    tags: ["Compute Engine","High Availability","Security Compliance"]
  },
  {
    id: "gcp-ace-444",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Compute Engine Health Checks and Auto-Healing: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer needs to automatically detect when an application running inside a Managed Instance Group VM becomes unresponsive to HTTP health probes and recreate the unhealthy instance.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals?",
    options: [
      { id: 'A', text: "Rely on operations engineers to manually reboot frozen virtual machines." },
      { id: 'B', text: "Disable health checks to prevent instance restarts." },
      { id: 'C', text: "Configure a ping probe against the VM network interface." },
      { id: 'D', text: "Attach an HTTP Health Check to the Managed Instance Group with an autohealing policy." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Attach an HTTP Health Check to the Managed Instance Group with an autohealing policy. Compute Engine auto-healing in Managed Instance Groups uses application-level health checks (HTTP, HTTPS, or TCP). If an application fails health check probes for the configured threshold, the MIG automatically stops, deletes, and recreates the VM instance to restore service availability.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups/autohealing-instances-in-migs",
    tags: ["Compute Engine","High Availability","Hybrid Migration"]
  },
  {
    id: "gcp-ace-445",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Compute Engine Health Checks and Auto-Healing: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer needs to automatically detect when an application running inside a Managed Instance Group VM becomes unresponsive to HTTP health probes and recreate the unhealthy instance.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management?",
    options: [
      { id: 'A', text: "Attach an HTTP Health Check to the Managed Instance Group with an autohealing policy." },
      { id: 'B', text: "Configure a ping probe against the VM network interface." },
      { id: 'C', text: "Rely on operations engineers to manually reboot frozen virtual machines." },
      { id: 'D', text: "Disable health checks to prevent instance restarts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an HTTP Health Check to the Managed Instance Group with an autohealing policy. Compute Engine auto-healing in Managed Instance Groups uses application-level health checks (HTTP, HTTPS, or TCP). If an application fails health check probes for the configured threshold, the MIG automatically stops, deletes, and recreates the VM instance to restore service availability.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups/autohealing-instances-in-migs",
    tags: ["Compute Engine","High Availability","Resilience Failure"]
  },
  {
    id: "gcp-ace-446",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud SQL Automated Backups and Point-in-Time Recovery (PITR): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer needs to recover a Cloud SQL database to its exact state 15 minutes before an accidental DROP TABLE command was executed by an administrator.",
    question: "Which concept or service configuration satisfies these operational resilience objectives?",
    options: [
      { id: 'A', text: "Point-in-time recovery from backups and write-ahead logs." },
      { id: 'B', text: "Submit a ticket to Google support requesting disk-level file undeletion." },
      { id: 'C', text: "Restore from last Sunday's full database export file." },
      { id: 'D', text: "Recreate the dropped table manually from memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute a Point-in-Time Recovery (PITR) using automated backups and transaction write-ahead logs. Point-in-Time Recovery (PITR) in Cloud SQL uses binary logs (MySQL) or write-ahead logs (PostgreSQL) in conjunction with automated daily backups to restore the database to the exact minute and second prior to data corruption or accidental table deletion.",
    referenceUrl: "https://cloud.google.com/sql/docs/postgres/backup-recovery/pitr",
    tags: ["Cloud SQL","Database Recovery","Dr Failover"]
  },
  {
    id: "gcp-ace-447",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud SQL Automated Backups and Point-in-Time Recovery (PITR): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer needs to recover a Cloud SQL database to its exact state 15 minutes before an accidental DROP TABLE command was executed by an administrator.",
    question: "Which architectural approach should the team select to manage this demand efficiently?",
    options: [
      { id: 'A', text: "Point-in-time recovery from backups and write-ahead logs." },
      { id: 'B', text: "Submit a ticket to Google support requesting disk-level file undeletion." },
      { id: 'C', text: "Restore from last Sunday's full database export file." },
      { id: 'D', text: "Recreate the dropped table manually from memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute a Point-in-Time Recovery (PITR) using automated backups and transaction write-ahead logs. Point-in-Time Recovery (PITR) in Cloud SQL uses binary logs (MySQL) or write-ahead logs (PostgreSQL) in conjunction with automated daily backups to restore the database to the exact minute and second prior to data corruption or accidental table deletion.",
    referenceUrl: "https://cloud.google.com/sql/docs/postgres/backup-recovery/pitr",
    tags: ["Cloud SQL","Database Recovery","High Load Scale"]
  },
  {
    id: "gcp-ace-448",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud SQL Automated Backups and Point-in-Time Recovery (PITR): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer needs to recover a Cloud SQL database to its exact state 15 minutes before an accidental DROP TABLE command was executed by an administrator.",
    question: "Which solution properly implements these mandatory security and governance controls?",
    options: [
      { id: 'A', text: "Recreate the dropped table manually from memory." },
      { id: 'B', text: "Restore from last Sunday's full database export file." },
      { id: 'C', text: "Submit a ticket to Google support requesting disk-level file undeletion." },
      { id: 'D', text: "Point-in-time recovery from backups and write-ahead logs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute a Point-in-Time Recovery (PITR) using automated backups and transaction write-ahead logs. Point-in-Time Recovery (PITR) in Cloud SQL uses binary logs (MySQL) or write-ahead logs (PostgreSQL) in conjunction with automated daily backups to restore the database to the exact minute and second prior to data corruption or accidental table deletion.",
    referenceUrl: "https://cloud.google.com/sql/docs/postgres/backup-recovery/pitr",
    tags: ["Cloud SQL","Database Recovery","Security Compliance"]
  },
  {
    id: "gcp-ace-449",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud SQL Automated Backups and Point-in-Time Recovery (PITR): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer needs to recover a Cloud SQL database to its exact state 15 minutes before an accidental DROP TABLE command was executed by an administrator.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals?",
    options: [
      { id: 'A', text: "Submit a ticket to Google support requesting disk-level file undeletion." },
      { id: 'B', text: "Recreate the dropped table manually from memory." },
      { id: 'C', text: "Restore from last Sunday's full database export file." },
      { id: 'D', text: "Point-in-time recovery from backups and write-ahead logs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute a Point-in-Time Recovery (PITR) using automated backups and transaction write-ahead logs. Point-in-Time Recovery (PITR) in Cloud SQL uses binary logs (MySQL) or write-ahead logs (PostgreSQL) in conjunction with automated daily backups to restore the database to the exact minute and second prior to data corruption or accidental table deletion.",
    referenceUrl: "https://cloud.google.com/sql/docs/postgres/backup-recovery/pitr",
    tags: ["Cloud SQL","Database Recovery","Hybrid Migration"]
  },
  {
    id: "gcp-ace-450",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud SQL Automated Backups and Point-in-Time Recovery (PITR): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer needs to recover a Cloud SQL database to its exact state 15 minutes before an accidental DROP TABLE command was executed by an administrator.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management?",
    options: [
      { id: 'A', text: "Submit a ticket to Google support requesting disk-level file undeletion." },
      { id: 'B', text: "Recreate the dropped table manually from memory." },
      { id: 'C', text: "Restore from last Sunday's full database export file." },
      { id: 'D', text: "Point-in-time recovery from backups and write-ahead logs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute a Point-in-Time Recovery (PITR) using automated backups and transaction write-ahead logs. Point-in-Time Recovery (PITR) in Cloud SQL uses binary logs (MySQL) or write-ahead logs (PostgreSQL) in conjunction with automated daily backups to restore the database to the exact minute and second prior to data corruption or accidental table deletion.",
    referenceUrl: "https://cloud.google.com/sql/docs/postgres/backup-recovery/pitr",
    tags: ["Cloud SQL","Database Recovery","Resilience Failure"]
  }
];

export default GCP_ACE_QUESTIONS_18;
