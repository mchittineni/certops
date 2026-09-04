export const GCP_ACE_QUESTIONS_15 = [
  {
    id: "gcp-ace-351",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Compute Engine Instance Templates and Managed Instance Groups (MIGs): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Compute Engine to deploy a fleet of identical, auto-healing Compute Engine virtual machines that automatically scale across multiple zones within a region based on CPU utilization.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Instance Templates defining configuration for regional Managed Instance Groups is under consideration.",
    options: [
      { id: 'A', text: "Create an Instance Template and deploy a regional Managed Instance Group (MIG) with autoscaling enabled." },
      { id: 'B', text: "Deploy five independent standalone VMs in a single zone without an instance template." },
      { id: 'C', text: "Use an unmanaged instance group without health checks or autoscaling." },
      { id: 'D', text: "Configure an on-premises hypervisor cluster to clone virtual machines manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Instance Template and deploy a regional Managed Instance Group (MIG) with autoscaling enabled. A regional Managed Instance Group (MIG) uses an Instance Template to deploy and manage identical VMs across multiple zones in a region. It provides automatic scaling, automated health checking and auto-healing, and coordinated rolling updates.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups",
    tags: ["Compute Engine", "Compute Engine", "Dr Failover"]
  },
  {
    id: "gcp-ace-352",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Compute Engine Instance Templates and Managed Instance Groups (MIGs): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Compute Engine to deploy a fleet of identical, auto-healing Compute Engine virtual machines that automatically scale across multiple zones within a region based on CPU utilization.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Instance Templates defining configuration for regional Managed Instance Groups is under consideration.",
    options: [
      { id: 'A', text: "Create an Instance Template and deploy a regional Managed Instance Group (MIG) with autoscaling enabled." },
      { id: 'B', text: "Deploy five independent standalone VMs in a single zone without an instance template." },
      { id: 'C', text: "Use an unmanaged instance group without health checks or autoscaling." },
      { id: 'D', text: "Configure an on-premises hypervisor cluster to clone virtual machines manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Instance Template and deploy a regional Managed Instance Group (MIG) with autoscaling enabled. A regional Managed Instance Group (MIG) uses an Instance Template to deploy and manage identical VMs across multiple zones in a region. It provides automatic scaling, automated health checking and auto-healing, and coordinated rolling updates.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups",
    tags: ["Compute Engine", "Compute Engine", "High Load Scale"]
  },
  {
    id: "gcp-ace-353",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Compute Engine Instance Templates and Managed Instance Groups (MIGs): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Compute Engine to deploy a fleet of identical, auto-healing Compute Engine virtual machines that automatically scale across multiple zones within a region based on CPU utilization.",
    question: "Which solution properly implements these mandatory security and governance controls? Instance Templates defining configuration for regional Managed Instance Groups is under consideration.",
    options: [
      { id: 'A', text: "Create an Instance Template and deploy a regional Managed Instance Group (MIG) with autoscaling enabled." },
      { id: 'B', text: "Deploy five independent standalone VMs in a single zone without an instance template." },
      { id: 'C', text: "Use an unmanaged instance group without health checks or autoscaling." },
      { id: 'D', text: "Configure an on-premises hypervisor cluster to clone virtual machines manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Instance Template and deploy a regional Managed Instance Group (MIG) with autoscaling enabled. A regional Managed Instance Group (MIG) uses an Instance Template to deploy and manage identical VMs across multiple zones in a region. It provides automatic scaling, automated health checking and auto-healing, and coordinated rolling updates.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups",
    tags: ["Compute Engine", "Compute Engine", "Security Compliance"]
  },
  {
    id: "gcp-ace-354",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Compute Engine Instance Templates and Managed Instance Groups (MIGs): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Compute Engine to deploy a fleet of identical, auto-healing Compute Engine virtual machines that automatically scale across multiple zones within a region based on CPU utilization.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Instance Templates defining configuration for regional Managed Instance Groups is under consideration.",
    options: [
      { id: 'A', text: "Create an Instance Template and deploy a regional Managed Instance Group (MIG) with autoscaling enabled." },
      { id: 'B', text: "Deploy five independent standalone VMs in a single zone without an instance template." },
      { id: 'C', text: "Use an unmanaged instance group without health checks or autoscaling." },
      { id: 'D', text: "Configure an on-premises hypervisor cluster to clone virtual machines manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Instance Template and deploy a regional Managed Instance Group (MIG) with autoscaling enabled. A regional Managed Instance Group (MIG) uses an Instance Template to deploy and manage identical VMs across multiple zones in a region. It provides automatic scaling, automated health checking and auto-healing, and coordinated rolling updates.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups",
    tags: ["Compute Engine", "Compute Engine", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-355",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Compute Engine Instance Templates and Managed Instance Groups (MIGs): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Compute Engine to deploy a fleet of identical, auto-healing Compute Engine virtual machines that automatically scale across multiple zones within a region based on CPU utilization.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Instance Templates defining configuration for regional Managed Instance Groups is under consideration.",
    options: [
      { id: 'A', text: "Create an Instance Template and deploy a regional Managed Instance Group (MIG) with autoscaling enabled." },
      { id: 'B', text: "Deploy five independent standalone VMs in a single zone without an instance template." },
      { id: 'C', text: "Use an unmanaged instance group without health checks or autoscaling." },
      { id: 'D', text: "Configure an on-premises hypervisor cluster to clone virtual machines manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Instance Template and deploy a regional Managed Instance Group (MIG) with autoscaling enabled. A regional Managed Instance Group (MIG) uses an Instance Template to deploy and manage identical VMs across multiple zones in a region. It provides automatic scaling, automated health checking and auto-healing, and coordinated rolling updates.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups",
    tags: ["Compute Engine", "Compute Engine", "Resilience Failure"]
  },
  {
    id: "gcp-ace-356",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Google Kubernetes Engine (GKE) Cluster Creation: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Google Kubernetes Engine to deploy a production-grade Kubernetes cluster in Google Cloud with automated node management, security hardening, and Google-managed control planes.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? gcloud container clusters create for Autopilot and Standard clusters is under consideration.",
    options: [
      { id: 'A', text: "Execute 'gcloud container clusters create-auto' to provision a GKE Autopilot cluster." },
      { id: 'B', text: "Install Minikube on a single Compute Engine virtual machine." },
      { id: 'C', text: "Deploy a bare-metal Kubernetes cluster on on-premises physical servers." },
      { id: 'D', text: "Run Docker containers manually using docker-compose on a standalone VM." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute 'gcloud container clusters create-auto' to provision a GKE Autopilot cluster. GKE Autopilot is an optimized mode of operation in which Google provisions and manages the cluster's underlying infrastructure, including nodes and node pools, enforcing security baselines and charging only for pod resource requests.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/creating-an-autopilot-cluster",
    tags: ["Google Kubernetes Engine", "GKE", "Dr Failover"]
  },
  {
    id: "gcp-ace-357",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Google Kubernetes Engine (GKE) Cluster Creation: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Google Kubernetes Engine to deploy a production-grade Kubernetes cluster in Google Cloud with automated node management, security hardening, and Google-managed control planes.",
    question: "Which architectural approach should the team select to manage this demand efficiently? gcloud container clusters create for Autopilot and Standard clusters is under consideration.",
    options: [
      { id: 'A', text: "Execute 'gcloud container clusters create-auto' to provision a GKE Autopilot cluster." },
      { id: 'B', text: "Install Minikube on a single Compute Engine virtual machine." },
      { id: 'C', text: "Deploy a bare-metal Kubernetes cluster on on-premises physical servers." },
      { id: 'D', text: "Run Docker containers manually using docker-compose on a standalone VM." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute 'gcloud container clusters create-auto' to provision a GKE Autopilot cluster. GKE Autopilot is an optimized mode of operation in which Google provisions and manages the cluster's underlying infrastructure, including nodes and node pools, enforcing security baselines and charging only for pod resource requests.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/creating-an-autopilot-cluster",
    tags: ["Google Kubernetes Engine", "GKE", "High Load Scale"]
  },
  {
    id: "gcp-ace-358",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Google Kubernetes Engine (GKE) Cluster Creation: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Google Kubernetes Engine to deploy a production-grade Kubernetes cluster in Google Cloud with automated node management, security hardening, and Google-managed control planes.",
    question: "Which solution properly implements these mandatory security and governance controls? gcloud container clusters create for Autopilot and Standard clusters is under consideration.",
    options: [
      { id: 'A', text: "Execute 'gcloud container clusters create-auto' to provision a GKE Autopilot cluster." },
      { id: 'B', text: "Install Minikube on a single Compute Engine virtual machine." },
      { id: 'C', text: "Deploy a bare-metal Kubernetes cluster on on-premises physical servers." },
      { id: 'D', text: "Run Docker containers manually using docker-compose on a standalone VM." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute 'gcloud container clusters create-auto' to provision a GKE Autopilot cluster. GKE Autopilot is an optimized mode of operation in which Google provisions and manages the cluster's underlying infrastructure, including nodes and node pools, enforcing security baselines and charging only for pod resource requests.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/creating-an-autopilot-cluster",
    tags: ["Google Kubernetes Engine", "GKE", "Security Compliance"]
  },
  {
    id: "gcp-ace-359",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Google Kubernetes Engine (GKE) Cluster Creation: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Google Kubernetes Engine to deploy a production-grade Kubernetes cluster in Google Cloud with automated node management, security hardening, and Google-managed control planes.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? gcloud container clusters create for Autopilot and Standard clusters is under consideration.",
    options: [
      { id: 'A', text: "Execute 'gcloud container clusters create-auto' to provision a GKE Autopilot cluster." },
      { id: 'B', text: "Install Minikube on a single Compute Engine virtual machine." },
      { id: 'C', text: "Deploy a bare-metal Kubernetes cluster on on-premises physical servers." },
      { id: 'D', text: "Run Docker containers manually using docker-compose on a standalone VM." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute 'gcloud container clusters create-auto' to provision a GKE Autopilot cluster. GKE Autopilot is an optimized mode of operation in which Google provisions and manages the cluster's underlying infrastructure, including nodes and node pools, enforcing security baselines and charging only for pod resource requests.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/creating-an-autopilot-cluster",
    tags: ["Google Kubernetes Engine", "GKE", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-360",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Google Kubernetes Engine (GKE) Cluster Creation: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Google Kubernetes Engine to deploy a production-grade Kubernetes cluster in Google Cloud with automated node management, security hardening, and Google-managed control planes.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? gcloud container clusters create for Autopilot and Standard clusters is under consideration.",
    options: [
      { id: 'A', text: "Execute 'gcloud container clusters create-auto' to provision a GKE Autopilot cluster." },
      { id: 'B', text: "Install Minikube on a single Compute Engine virtual machine." },
      { id: 'C', text: "Deploy a bare-metal Kubernetes cluster on on-premises physical servers." },
      { id: 'D', text: "Run Docker containers manually using docker-compose on a standalone VM." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute 'gcloud container clusters create-auto' to provision a GKE Autopilot cluster. GKE Autopilot is an optimized mode of operation in which Google provisions and manages the cluster's underlying infrastructure, including nodes and node pools, enforcing security baselines and charging only for pod resource requests.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/creating-an-autopilot-cluster",
    tags: ["Google Kubernetes Engine", "GKE", "Resilience Failure"]
  },
  {
    id: "gcp-ace-361",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Kubernetes Workload Deployment (Deployments and Services): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Kubernetes to deploy a multi-replica web application to a GKE cluster and expose it to the internet with an external IP address and automated health probes.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Declarative YAML deployments and ClusterIP / LoadBalancer services is under consideration.",
    options: [
      { id: 'A', text: "Apply a Kubernetes Deployment manifest with readiness probes and expose it via a Service of type: LoadBalancer." },
      { id: 'B', text: "Deploy a single standalone Pod with no controller or service definition." },
      { id: 'C', text: "Expose the pod directly using hostPort on a worker node without a Kubernetes service." },
      { id: 'D', text: "Manually install nginx inside each running node container filesystem." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply a Kubernetes Deployment manifest with readiness probes and expose it via a Service of type: LoadBalancer. In Kubernetes, a Deployment manages the desired state and rolling updates for a replica set of Pods. A Service of `type: LoadBalancer` automatically provisions a Google Cloud Network Load Balancer with an external IP, forwarding internet traffic to healthy pods.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/exposing-apps",
    tags: ["Kubernetes", "Kubernetes", "Dr Failover"]
  },
  {
    id: "gcp-ace-362",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Kubernetes Workload Deployment (Deployments and Services): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Kubernetes to deploy a multi-replica web application to a GKE cluster and expose it to the internet with an external IP address and automated health probes.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Declarative YAML deployments and ClusterIP / LoadBalancer services is under consideration.",
    options: [
      { id: 'A', text: "Apply a Kubernetes Deployment manifest with readiness probes and expose it via a Service of type: LoadBalancer." },
      { id: 'B', text: "Deploy a single standalone Pod with no controller or service definition." },
      { id: 'C', text: "Expose the pod directly using hostPort on a worker node without a Kubernetes service." },
      { id: 'D', text: "Manually install nginx inside each running node container filesystem." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply a Kubernetes Deployment manifest with readiness probes and expose it via a Service of type: LoadBalancer. In Kubernetes, a Deployment manages the desired state and rolling updates for a replica set of Pods. A Service of `type: LoadBalancer` automatically provisions a Google Cloud Network Load Balancer with an external IP, forwarding internet traffic to healthy pods.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/exposing-apps",
    tags: ["Kubernetes", "Kubernetes", "High Load Scale"]
  },
  {
    id: "gcp-ace-363",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Kubernetes Workload Deployment (Deployments and Services): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Kubernetes to deploy a multi-replica web application to a GKE cluster and expose it to the internet with an external IP address and automated health probes.",
    question: "Which solution properly implements these mandatory security and governance controls? Declarative YAML deployments and ClusterIP / LoadBalancer services is under consideration.",
    options: [
      { id: 'A', text: "Apply a Kubernetes Deployment manifest with readiness probes and expose it via a Service of type: LoadBalancer." },
      { id: 'B', text: "Deploy a single standalone Pod with no controller or service definition." },
      { id: 'C', text: "Expose the pod directly using hostPort on a worker node without a Kubernetes service." },
      { id: 'D', text: "Manually install nginx inside each running node container filesystem." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply a Kubernetes Deployment manifest with readiness probes and expose it via a Service of type: LoadBalancer. In Kubernetes, a Deployment manages the desired state and rolling updates for a replica set of Pods. A Service of `type: LoadBalancer` automatically provisions a Google Cloud Network Load Balancer with an external IP, forwarding internet traffic to healthy pods.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/exposing-apps",
    tags: ["Kubernetes", "Kubernetes", "Security Compliance"]
  },
  {
    id: "gcp-ace-364",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Kubernetes Workload Deployment (Deployments and Services): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Kubernetes to deploy a multi-replica web application to a GKE cluster and expose it to the internet with an external IP address and automated health probes.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Declarative YAML deployments and ClusterIP / LoadBalancer services is under consideration.",
    options: [
      { id: 'A', text: "Apply a Kubernetes Deployment manifest with readiness probes and expose it via a Service of type: LoadBalancer." },
      { id: 'B', text: "Deploy a single standalone Pod with no controller or service definition." },
      { id: 'C', text: "Expose the pod directly using hostPort on a worker node without a Kubernetes service." },
      { id: 'D', text: "Manually install nginx inside each running node container filesystem." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply a Kubernetes Deployment manifest with readiness probes and expose it via a Service of type: LoadBalancer. In Kubernetes, a Deployment manages the desired state and rolling updates for a replica set of Pods. A Service of `type: LoadBalancer` automatically provisions a Google Cloud Network Load Balancer with an external IP, forwarding internet traffic to healthy pods.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/exposing-apps",
    tags: ["Kubernetes", "Kubernetes", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-365",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Kubernetes Workload Deployment (Deployments and Services): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Kubernetes to deploy a multi-replica web application to a GKE cluster and expose it to the internet with an external IP address and automated health probes.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Declarative YAML deployments and ClusterIP / LoadBalancer services is under consideration.",
    options: [
      { id: 'A', text: "Apply a Kubernetes Deployment manifest with readiness probes and expose it via a Service of type: LoadBalancer." },
      { id: 'B', text: "Deploy a single standalone Pod with no controller or service definition." },
      { id: 'C', text: "Expose the pod directly using hostPort on a worker node without a Kubernetes service." },
      { id: 'D', text: "Manually install nginx inside each running node container filesystem." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply a Kubernetes Deployment manifest with readiness probes and expose it via a Service of type: LoadBalancer. In Kubernetes, a Deployment manages the desired state and rolling updates for a replica set of Pods. A Service of `type: LoadBalancer` automatically provisions a Google Cloud Network Load Balancer with an external IP, forwarding internet traffic to healthy pods.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/exposing-apps",
    tags: ["Kubernetes", "Kubernetes", "Resilience Failure"]
  },
  {
    id: "gcp-ace-366",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud Run Container Deployment: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Cloud Run to deploy a stateless microservice packaged as a Docker container that automatically scales to zero when idle and scales out to 1,000 instances under load.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Serverless container deployment with scale-to-zero and HTTPS endpoints is under consideration.",
    options: [
      { id: 'A', text: "Deploy the container image to Cloud Run using 'gcloud run deploy' with authentication flags." },
      { id: 'B', text: "Deploy the container on a dedicated Compute Engine instance running 24/7." },
      { id: 'C', text: "Host the application inside an App Engine Standard environment without container support." },
      { id: 'D', text: "Run the container on an on-premises developer laptop connected to the internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the container image to Cloud Run using 'gcloud run deploy' with authentication flags. Cloud Run is a fully managed serverless platform that enables deploying containerized applications directly on top of Google's scalable infrastructure. It provisions an automated HTTPS URL, scales dynamically based on concurrent requests, and scales to zero when no traffic arrives.",
    referenceUrl: "https://cloud.google.com/run/docs/deploying",
    tags: ["Cloud Run", "Cloud Run", "Dr Failover"]
  },
  {
    id: "gcp-ace-367",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud Run Container Deployment: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Cloud Run to deploy a stateless microservice packaged as a Docker container that automatically scales to zero when idle and scales out to 1,000 instances under load.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Serverless container deployment with scale-to-zero and HTTPS endpoints is under consideration.",
    options: [
      { id: 'A', text: "Deploy the container image to Cloud Run using 'gcloud run deploy' with authentication flags." },
      { id: 'B', text: "Deploy the container on a dedicated Compute Engine instance running 24/7." },
      { id: 'C', text: "Host the application inside an App Engine Standard environment without container support." },
      { id: 'D', text: "Run the container on an on-premises developer laptop connected to the internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the container image to Cloud Run using 'gcloud run deploy' with authentication flags. Cloud Run is a fully managed serverless platform that enables deploying containerized applications directly on top of Google's scalable infrastructure. It provisions an automated HTTPS URL, scales dynamically based on concurrent requests, and scales to zero when no traffic arrives.",
    referenceUrl: "https://cloud.google.com/run/docs/deploying",
    tags: ["Cloud Run", "Cloud Run", "High Load Scale"]
  },
  {
    id: "gcp-ace-368",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud Run Container Deployment: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Cloud Run to deploy a stateless microservice packaged as a Docker container that automatically scales to zero when idle and scales out to 1,000 instances under load.",
    question: "Which solution properly implements these mandatory security and governance controls? Serverless container deployment with scale-to-zero and HTTPS endpoints is under consideration.",
    options: [
      { id: 'A', text: "Deploy the container image to Cloud Run using 'gcloud run deploy' with authentication flags." },
      { id: 'B', text: "Deploy the container on a dedicated Compute Engine instance running 24/7." },
      { id: 'C', text: "Host the application inside an App Engine Standard environment without container support." },
      { id: 'D', text: "Run the container on an on-premises developer laptop connected to the internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the container image to Cloud Run using 'gcloud run deploy' with authentication flags. Cloud Run is a fully managed serverless platform that enables deploying containerized applications directly on top of Google's scalable infrastructure. It provisions an automated HTTPS URL, scales dynamically based on concurrent requests, and scales to zero when no traffic arrives.",
    referenceUrl: "https://cloud.google.com/run/docs/deploying",
    tags: ["Cloud Run", "Cloud Run", "Security Compliance"]
  },
  {
    id: "gcp-ace-369",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud Run Container Deployment: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Cloud Run to deploy a stateless microservice packaged as a Docker container that automatically scales to zero when idle and scales out to 1,000 instances under load.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Serverless container deployment with scale-to-zero and HTTPS endpoints is under consideration.",
    options: [
      { id: 'A', text: "Deploy the container image to Cloud Run using 'gcloud run deploy' with authentication flags." },
      { id: 'B', text: "Deploy the container on a dedicated Compute Engine instance running 24/7." },
      { id: 'C', text: "Host the application inside an App Engine Standard environment without container support." },
      { id: 'D', text: "Run the container on an on-premises developer laptop connected to the internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the container image to Cloud Run using 'gcloud run deploy' with authentication flags. Cloud Run is a fully managed serverless platform that enables deploying containerized applications directly on top of Google's scalable infrastructure. It provisions an automated HTTPS URL, scales dynamically based on concurrent requests, and scales to zero when no traffic arrives.",
    referenceUrl: "https://cloud.google.com/run/docs/deploying",
    tags: ["Cloud Run", "Cloud Run", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-370",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud Run Container Deployment: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Cloud Run to deploy a stateless microservice packaged as a Docker container that automatically scales to zero when idle and scales out to 1,000 instances under load.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Serverless container deployment with scale-to-zero and HTTPS endpoints is under consideration.",
    options: [
      { id: 'A', text: "Deploy the container image to Cloud Run using 'gcloud run deploy' with authentication flags." },
      { id: 'B', text: "Deploy the container on a dedicated Compute Engine instance running 24/7." },
      { id: 'C', text: "Host the application inside an App Engine Standard environment without container support." },
      { id: 'D', text: "Run the container on an on-premises developer laptop connected to the internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the container image to Cloud Run using 'gcloud run deploy' with authentication flags. Cloud Run is a fully managed serverless platform that enables deploying containerized applications directly on top of Google's scalable infrastructure. It provisions an automated HTTPS URL, scales dynamically based on concurrent requests, and scales to zero when no traffic arrives.",
    referenceUrl: "https://cloud.google.com/run/docs/deploying",
    tags: ["Cloud Run", "Cloud Run", "Resilience Failure"]
  },
  {
    id: "gcp-ace-371",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud Functions (2nd Gen) Deployment: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Cloud Functions to execute lightweight Python code in response to a new file being uploaded to a specific Cloud Storage bucket without managing server infrastructure.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Event-driven functions built on Cloud Run with Eventarc triggers is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Cloud Function (2nd gen) with a Cloud Storage Eventarc trigger using 'gcloud functions deploy'." },
      { id: 'B', text: "Run an infinite while loop on a Compute Engine VM polling the Cloud Storage API." },
      { id: 'C', text: "Deploy an on-premises Windows server to check the bucket every 10 minutes." },
      { id: 'D', text: "Configure a cron job inside a local database server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Cloud Function (2nd gen) with a Cloud Storage Eventarc trigger using 'gcloud functions deploy'. Cloud Functions (2nd gen) is Google Cloud's event-driven serverless compute platform built on Cloud Run and Eventarc. It allows running code in response to Cloud Storage, Pub/Sub, and hundreds of Google Cloud events without managing servers or runtimes.",
    referenceUrl: "https://cloud.google.com/functions/docs/deploy",
    tags: ["Cloud Functions", "Cloud Functions", "Dr Failover"]
  },
  {
    id: "gcp-ace-372",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud Functions (2nd Gen) Deployment: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Cloud Functions to execute lightweight Python code in response to a new file being uploaded to a specific Cloud Storage bucket without managing server infrastructure.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Event-driven functions built on Cloud Run with Eventarc triggers is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Cloud Function (2nd gen) with a Cloud Storage Eventarc trigger using 'gcloud functions deploy'." },
      { id: 'B', text: "Run an infinite while loop on a Compute Engine VM polling the Cloud Storage API." },
      { id: 'C', text: "Deploy an on-premises Windows server to check the bucket every 10 minutes." },
      { id: 'D', text: "Configure a cron job inside a local database server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Cloud Function (2nd gen) with a Cloud Storage Eventarc trigger using 'gcloud functions deploy'. Cloud Functions (2nd gen) is Google Cloud's event-driven serverless compute platform built on Cloud Run and Eventarc. It allows running code in response to Cloud Storage, Pub/Sub, and hundreds of Google Cloud events without managing servers or runtimes.",
    referenceUrl: "https://cloud.google.com/functions/docs/deploy",
    tags: ["Cloud Functions", "Cloud Functions", "High Load Scale"]
  },
  {
    id: "gcp-ace-373",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud Functions (2nd Gen) Deployment: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Cloud Functions to execute lightweight Python code in response to a new file being uploaded to a specific Cloud Storage bucket without managing server infrastructure.",
    question: "Which solution properly implements these mandatory security and governance controls? Event-driven functions built on Cloud Run with Eventarc triggers is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Cloud Function (2nd gen) with a Cloud Storage Eventarc trigger using 'gcloud functions deploy'." },
      { id: 'B', text: "Run an infinite while loop on a Compute Engine VM polling the Cloud Storage API." },
      { id: 'C', text: "Deploy an on-premises Windows server to check the bucket every 10 minutes." },
      { id: 'D', text: "Configure a cron job inside a local database server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Cloud Function (2nd gen) with a Cloud Storage Eventarc trigger using 'gcloud functions deploy'. Cloud Functions (2nd gen) is Google Cloud's event-driven serverless compute platform built on Cloud Run and Eventarc. It allows running code in response to Cloud Storage, Pub/Sub, and hundreds of Google Cloud events without managing servers or runtimes.",
    referenceUrl: "https://cloud.google.com/functions/docs/deploy",
    tags: ["Cloud Functions", "Cloud Functions", "Security Compliance"]
  },
  {
    id: "gcp-ace-374",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud Functions (2nd Gen) Deployment: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Cloud Functions to execute lightweight Python code in response to a new file being uploaded to a specific Cloud Storage bucket without managing server infrastructure.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Event-driven functions built on Cloud Run with Eventarc triggers is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Cloud Function (2nd gen) with a Cloud Storage Eventarc trigger using 'gcloud functions deploy'." },
      { id: 'B', text: "Run an infinite while loop on a Compute Engine VM polling the Cloud Storage API." },
      { id: 'C', text: "Deploy an on-premises Windows server to check the bucket every 10 minutes." },
      { id: 'D', text: "Configure a cron job inside a local database server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Cloud Function (2nd gen) with a Cloud Storage Eventarc trigger using 'gcloud functions deploy'. Cloud Functions (2nd gen) is Google Cloud's event-driven serverless compute platform built on Cloud Run and Eventarc. It allows running code in response to Cloud Storage, Pub/Sub, and hundreds of Google Cloud events without managing servers or runtimes.",
    referenceUrl: "https://cloud.google.com/functions/docs/deploy",
    tags: ["Cloud Functions", "Cloud Functions", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-375",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud Functions (2nd Gen) Deployment: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Cloud Functions to execute lightweight Python code in response to a new file being uploaded to a specific Cloud Storage bucket without managing server infrastructure.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Event-driven functions built on Cloud Run with Eventarc triggers is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Cloud Function (2nd gen) with a Cloud Storage Eventarc trigger using 'gcloud functions deploy'." },
      { id: 'B', text: "Run an infinite while loop on a Compute Engine VM polling the Cloud Storage API." },
      { id: 'C', text: "Deploy an on-premises Windows server to check the bucket every 10 minutes." },
      { id: 'D', text: "Configure a cron job inside a local database server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Cloud Function (2nd gen) with a Cloud Storage Eventarc trigger using 'gcloud functions deploy'. Cloud Functions (2nd gen) is Google Cloud's event-driven serverless compute platform built on Cloud Run and Eventarc. It allows running code in response to Cloud Storage, Pub/Sub, and hundreds of Google Cloud events without managing servers or runtimes.",
    referenceUrl: "https://cloud.google.com/functions/docs/deploy",
    tags: ["Cloud Functions", "Cloud Functions", "Resilience Failure"]
  }
];

export default GCP_ACE_QUESTIONS_15;
