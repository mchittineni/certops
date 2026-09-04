export const GCP_PCDOE_QUESTIONS_14 = [
  {
    id: "gcp-pcdoe-326",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Deployment Strategies: Blue/Green Deployments: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Deployment Strategies to deploy a major version upgrade of a web application with zero user downtime and the ability to instantly revert traffic if unexpected bugs appear.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Blue/Green deployment eliminating cutover downtime and enabling instant rollback is under consideration.",
    options: [
      { id: 'A', text: "Implement a Blue/Green deployment: spin up the new version (Green) alongside the current version (Blue) and switch load balancer target pools." },
      { id: 'B', text: "Replace the production servers in-place during peak business hours." },
      { id: 'C', text: "Deploy new code directly over existing running processes and reboot all servers." },
      { id: 'D', text: "Shut down the website for 4 hours while software is updated manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a Blue/Green deployment: spin up the new version (Green) alongside the current version (Blue) and switch load balancer target pools. Blue/Green deployments run two identical production environments. The 'Blue' environment serves live production traffic, while the 'Green' environment hosts the new release. Once Green is validated, traffic is shifted instantly via the load balancer, enabling immediate rollback if needed.",
    referenceUrl: "https://cloud.google.com/architecture/application-deployment-and-testing-strategies#blue-green_deployment",
    tags: ["Deployment Strategies", "Blue/Green", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-327",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Deployment Strategies: Blue/Green Deployments: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Deployment Strategies to deploy a major version upgrade of a web application with zero user downtime and the ability to instantly revert traffic if unexpected bugs appear.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Blue/Green deployment eliminating cutover downtime and enabling instant rollback is under consideration.",
    options: [
      { id: 'A', text: "Implement a Blue/Green deployment: spin up the new version (Green) alongside the current version (Blue) and switch load balancer target pools." },
      { id: 'B', text: "Replace the production servers in-place during peak business hours." },
      { id: 'C', text: "Deploy new code directly over existing running processes and reboot all servers." },
      { id: 'D', text: "Shut down the website for 4 hours while software is updated manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a Blue/Green deployment: spin up the new version (Green) alongside the current version (Blue) and switch load balancer target pools. Blue/Green deployments run two identical production environments. The 'Blue' environment serves live production traffic, while the 'Green' environment hosts the new release. Once Green is validated, traffic is shifted instantly via the load balancer, enabling immediate rollback if needed.",
    referenceUrl: "https://cloud.google.com/architecture/application-deployment-and-testing-strategies#blue-green_deployment",
    tags: ["Deployment Strategies", "Blue/Green", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-328",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Deployment Strategies: Blue/Green Deployments: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Deployment Strategies to deploy a major version upgrade of a web application with zero user downtime and the ability to instantly revert traffic if unexpected bugs appear.",
    question: "Which solution implements these mandatory compliance and security controls? Blue/Green deployment eliminating cutover downtime and enabling instant rollback is under consideration.",
    options: [
      { id: 'A', text: "Implement a Blue/Green deployment: spin up the new version (Green) alongside the current version (Blue) and switch load balancer target pools." },
      { id: 'B', text: "Replace the production servers in-place during peak business hours." },
      { id: 'C', text: "Deploy new code directly over existing running processes and reboot all servers." },
      { id: 'D', text: "Shut down the website for 4 hours while software is updated manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a Blue/Green deployment: spin up the new version (Green) alongside the current version (Blue) and switch load balancer target pools. Blue/Green deployments run two identical production environments. The 'Blue' environment serves live production traffic, while the 'Green' environment hosts the new release. Once Green is validated, traffic is shifted instantly via the load balancer, enabling immediate rollback if needed.",
    referenceUrl: "https://cloud.google.com/architecture/application-deployment-and-testing-strategies#blue-green_deployment",
    tags: ["Deployment Strategies", "Blue/Green", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-329",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Deployment Strategies: Blue/Green Deployments: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Deployment Strategies to deploy a major version upgrade of a web application with zero user downtime and the ability to instantly revert traffic if unexpected bugs appear.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Blue/Green deployment eliminating cutover downtime and enabling instant rollback is under consideration.",
    options: [
      { id: 'A', text: "Implement a Blue/Green deployment: spin up the new version (Green) alongside the current version (Blue) and switch load balancer target pools." },
      { id: 'B', text: "Replace the production servers in-place during peak business hours." },
      { id: 'C', text: "Deploy new code directly over existing running processes and reboot all servers." },
      { id: 'D', text: "Shut down the website for 4 hours while software is updated manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a Blue/Green deployment: spin up the new version (Green) alongside the current version (Blue) and switch load balancer target pools. Blue/Green deployments run two identical production environments. The 'Blue' environment serves live production traffic, while the 'Green' environment hosts the new release. Once Green is validated, traffic is shifted instantly via the load balancer, enabling immediate rollback if needed.",
    referenceUrl: "https://cloud.google.com/architecture/application-deployment-and-testing-strategies#blue-green_deployment",
    tags: ["Deployment Strategies", "Blue/Green", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-330",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Deployment Strategies: Blue/Green Deployments: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Deployment Strategies to deploy a major version upgrade of a web application with zero user downtime and the ability to instantly revert traffic if unexpected bugs appear.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Blue/Green deployment eliminating cutover downtime and enabling instant rollback is under consideration.",
    options: [
      { id: 'A', text: "Implement a Blue/Green deployment: spin up the new version (Green) alongside the current version (Blue) and switch load balancer target pools." },
      { id: 'B', text: "Replace the production servers in-place during peak business hours." },
      { id: 'C', text: "Deploy new code directly over existing running processes and reboot all servers." },
      { id: 'D', text: "Shut down the website for 4 hours while software is updated manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a Blue/Green deployment: spin up the new version (Green) alongside the current version (Blue) and switch load balancer target pools. Blue/Green deployments run two identical production environments. The 'Blue' environment serves live production traffic, while the 'Green' environment hosts the new release. Once Green is validated, traffic is shifted instantly via the load balancer, enabling immediate rollback if needed.",
    referenceUrl: "https://cloud.google.com/architecture/application-deployment-and-testing-strategies#blue-green_deployment",
    tags: ["Deployment Strategies", "Blue/Green", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-331",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Deployment Strategies: Canary Deployments with Istio/Anthos Service Mesh: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Deployment Strategies to route exactly 5% of production user traffic to a candidate microservice version and monitor error rates before expanding traffic to 100%.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Canary deployments with percentage-based traffic splitting via Service Mesh is under consideration.",
    options: [
      { id: 'A', text: "Deploy the candidate service version and configure an Istio / Anthos Service Mesh VirtualService with a 95/5 traffic weight split." },
      { id: 'B', text: "Deploy 100 candidate pods and 5 old pods without service mesh traffic routing." },
      { id: 'C', text: "Configure DNS A records with 5% weight on public internet DNS resolvers." },
      { id: 'D', text: "Instruct 5% of users via email to type a special beta URL in their browsers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the candidate service version and configure an Istio / Anthos Service Mesh VirtualService with a 95/5 traffic weight split. Canary deployments with a service mesh (Istio/ASM) use dynamic Layer 7 traffic routing rules (VirtualService) to route precise percentages of live requests to the canary deployment based on weights or HTTP headers, enabling safe validation without altering pod counts.",
    referenceUrl: "https://cloud.google.com/service-mesh/docs/traffic-management#traffic_splitting",
    tags: ["Deployment Strategies", "Service Mesh", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-332",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Deployment Strategies: Canary Deployments with Istio/Anthos Service Mesh: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Deployment Strategies to route exactly 5% of production user traffic to a candidate microservice version and monitor error rates before expanding traffic to 100%.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Canary deployments with percentage-based traffic splitting via Service Mesh is under consideration.",
    options: [
      { id: 'A', text: "Deploy the candidate service version and configure an Istio / Anthos Service Mesh VirtualService with a 95/5 traffic weight split." },
      { id: 'B', text: "Deploy 100 candidate pods and 5 old pods without service mesh traffic routing." },
      { id: 'C', text: "Configure DNS A records with 5% weight on public internet DNS resolvers." },
      { id: 'D', text: "Instruct 5% of users via email to type a special beta URL in their browsers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the candidate service version and configure an Istio / Anthos Service Mesh VirtualService with a 95/5 traffic weight split. Canary deployments with a service mesh (Istio/ASM) use dynamic Layer 7 traffic routing rules (VirtualService) to route precise percentages of live requests to the canary deployment based on weights or HTTP headers, enabling safe validation without altering pod counts.",
    referenceUrl: "https://cloud.google.com/service-mesh/docs/traffic-management#traffic_splitting",
    tags: ["Deployment Strategies", "Service Mesh", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-333",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Deployment Strategies: Canary Deployments with Istio/Anthos Service Mesh: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Deployment Strategies to route exactly 5% of production user traffic to a candidate microservice version and monitor error rates before expanding traffic to 100%.",
    question: "Which solution implements these mandatory compliance and security controls? Canary deployments with percentage-based traffic splitting via Service Mesh is under consideration.",
    options: [
      { id: 'A', text: "Deploy the candidate service version and configure an Istio / Anthos Service Mesh VirtualService with a 95/5 traffic weight split." },
      { id: 'B', text: "Deploy 100 candidate pods and 5 old pods without service mesh traffic routing." },
      { id: 'C', text: "Configure DNS A records with 5% weight on public internet DNS resolvers." },
      { id: 'D', text: "Instruct 5% of users via email to type a special beta URL in their browsers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the candidate service version and configure an Istio / Anthos Service Mesh VirtualService with a 95/5 traffic weight split. Canary deployments with a service mesh (Istio/ASM) use dynamic Layer 7 traffic routing rules (VirtualService) to route precise percentages of live requests to the canary deployment based on weights or HTTP headers, enabling safe validation without altering pod counts.",
    referenceUrl: "https://cloud.google.com/service-mesh/docs/traffic-management#traffic_splitting",
    tags: ["Deployment Strategies", "Service Mesh", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-334",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Deployment Strategies: Canary Deployments with Istio/Anthos Service Mesh: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Deployment Strategies to route exactly 5% of production user traffic to a candidate microservice version and monitor error rates before expanding traffic to 100%.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Canary deployments with percentage-based traffic splitting via Service Mesh is under consideration.",
    options: [
      { id: 'A', text: "Deploy the candidate service version and configure an Istio / Anthos Service Mesh VirtualService with a 95/5 traffic weight split." },
      { id: 'B', text: "Deploy 100 candidate pods and 5 old pods without service mesh traffic routing." },
      { id: 'C', text: "Configure DNS A records with 5% weight on public internet DNS resolvers." },
      { id: 'D', text: "Instruct 5% of users via email to type a special beta URL in their browsers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the candidate service version and configure an Istio / Anthos Service Mesh VirtualService with a 95/5 traffic weight split. Canary deployments with a service mesh (Istio/ASM) use dynamic Layer 7 traffic routing rules (VirtualService) to route precise percentages of live requests to the canary deployment based on weights or HTTP headers, enabling safe validation without altering pod counts.",
    referenceUrl: "https://cloud.google.com/service-mesh/docs/traffic-management#traffic_splitting",
    tags: ["Deployment Strategies", "Service Mesh", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-335",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Deployment Strategies: Canary Deployments with Istio/Anthos Service Mesh: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Deployment Strategies to route exactly 5% of production user traffic to a candidate microservice version and monitor error rates before expanding traffic to 100%.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Canary deployments with percentage-based traffic splitting via Service Mesh is under consideration.",
    options: [
      { id: 'A', text: "Deploy the candidate service version and configure an Istio / Anthos Service Mesh VirtualService with a 95/5 traffic weight split." },
      { id: 'B', text: "Deploy 100 candidate pods and 5 old pods without service mesh traffic routing." },
      { id: 'C', text: "Configure DNS A records with 5% weight on public internet DNS resolvers." },
      { id: 'D', text: "Instruct 5% of users via email to type a special beta URL in their browsers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the candidate service version and configure an Istio / Anthos Service Mesh VirtualService with a 95/5 traffic weight split. Canary deployments with a service mesh (Istio/ASM) use dynamic Layer 7 traffic routing rules (VirtualService) to route precise percentages of live requests to the canary deployment based on weights or HTTP headers, enabling safe validation without altering pod counts.",
    referenceUrl: "https://cloud.google.com/service-mesh/docs/traffic-management#traffic_splitting",
    tags: ["Deployment Strategies", "Service Mesh", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-336",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Deployment Strategies: Rolling Updates on GKE and Compute Engine: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Deployment Strategies to update a 20-replica GKE web application gradually while guaranteeing that at least 18 replicas remain available at all times and no more than 24 total replicas exist.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Kubernetes RollingUpdate strategy with maxSurge and maxUnavailable controls is under consideration.",
    options: [
      { id: 'A', text: "Configure the Deployment spec with strategy: RollingUpdate, maxUnavailable: 2, and maxSurge: 4." },
      { id: 'B', text: "Configure strategy: Recreate, terminating all 20 pods simultaneously before starting new pods." },
      { id: 'C', text: "Delete the Kubernetes Deployment object and recreate it from scratch." },
      { id: 'D', text: "Manually restart worker node VMs one by one." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Deployment spec with strategy: RollingUpdate, maxUnavailable: 2, and maxSurge: 4. In Kubernetes, the `RollingUpdate` strategy updates pods in a gradual, rolling fashion. The `maxSurge` parameter specifies how many extra pods can be created over the desired replica count, while `maxUnavailable` specifies the maximum number of pods that can be unavailable during the update.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment",
    tags: ["Deployment Strategies", "Rolling Updates", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-337",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Deployment Strategies: Rolling Updates on GKE and Compute Engine: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Deployment Strategies to update a 20-replica GKE web application gradually while guaranteeing that at least 18 replicas remain available at all times and no more than 24 total replicas exist.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Kubernetes RollingUpdate strategy with maxSurge and maxUnavailable controls is under consideration.",
    options: [
      { id: 'A', text: "Configure the Deployment spec with strategy: RollingUpdate, maxUnavailable: 2, and maxSurge: 4." },
      { id: 'B', text: "Configure strategy: Recreate, terminating all 20 pods simultaneously before starting new pods." },
      { id: 'C', text: "Delete the Kubernetes Deployment object and recreate it from scratch." },
      { id: 'D', text: "Manually restart worker node VMs one by one." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Deployment spec with strategy: RollingUpdate, maxUnavailable: 2, and maxSurge: 4. In Kubernetes, the `RollingUpdate` strategy updates pods in a gradual, rolling fashion. The `maxSurge` parameter specifies how many extra pods can be created over the desired replica count, while `maxUnavailable` specifies the maximum number of pods that can be unavailable during the update.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment",
    tags: ["Deployment Strategies", "Rolling Updates", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-338",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Deployment Strategies: Rolling Updates on GKE and Compute Engine: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Deployment Strategies to update a 20-replica GKE web application gradually while guaranteeing that at least 18 replicas remain available at all times and no more than 24 total replicas exist.",
    question: "Which solution implements these mandatory compliance and security controls? Kubernetes RollingUpdate strategy with maxSurge and maxUnavailable controls is under consideration.",
    options: [
      { id: 'A', text: "Configure the Deployment spec with strategy: RollingUpdate, maxUnavailable: 2, and maxSurge: 4." },
      { id: 'B', text: "Configure strategy: Recreate, terminating all 20 pods simultaneously before starting new pods." },
      { id: 'C', text: "Delete the Kubernetes Deployment object and recreate it from scratch." },
      { id: 'D', text: "Manually restart worker node VMs one by one." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Deployment spec with strategy: RollingUpdate, maxUnavailable: 2, and maxSurge: 4. In Kubernetes, the `RollingUpdate` strategy updates pods in a gradual, rolling fashion. The `maxSurge` parameter specifies how many extra pods can be created over the desired replica count, while `maxUnavailable` specifies the maximum number of pods that can be unavailable during the update.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment",
    tags: ["Deployment Strategies", "Rolling Updates", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-339",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Deployment Strategies: Rolling Updates on GKE and Compute Engine: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Deployment Strategies to update a 20-replica GKE web application gradually while guaranteeing that at least 18 replicas remain available at all times and no more than 24 total replicas exist.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Kubernetes RollingUpdate strategy with maxSurge and maxUnavailable controls is under consideration.",
    options: [
      { id: 'A', text: "Configure the Deployment spec with strategy: RollingUpdate, maxUnavailable: 2, and maxSurge: 4." },
      { id: 'B', text: "Configure strategy: Recreate, terminating all 20 pods simultaneously before starting new pods." },
      { id: 'C', text: "Delete the Kubernetes Deployment object and recreate it from scratch." },
      { id: 'D', text: "Manually restart worker node VMs one by one." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Deployment spec with strategy: RollingUpdate, maxUnavailable: 2, and maxSurge: 4. In Kubernetes, the `RollingUpdate` strategy updates pods in a gradual, rolling fashion. The `maxSurge` parameter specifies how many extra pods can be created over the desired replica count, while `maxUnavailable` specifies the maximum number of pods that can be unavailable during the update.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment",
    tags: ["Deployment Strategies", "Rolling Updates", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-340",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Deployment Strategies: Rolling Updates on GKE and Compute Engine: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Deployment Strategies to update a 20-replica GKE web application gradually while guaranteeing that at least 18 replicas remain available at all times and no more than 24 total replicas exist.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Kubernetes RollingUpdate strategy with maxSurge and maxUnavailable controls is under consideration.",
    options: [
      { id: 'A', text: "Configure the Deployment spec with strategy: RollingUpdate, maxUnavailable: 2, and maxSurge: 4." },
      { id: 'B', text: "Configure strategy: Recreate, terminating all 20 pods simultaneously before starting new pods." },
      { id: 'C', text: "Delete the Kubernetes Deployment object and recreate it from scratch." },
      { id: 'D', text: "Manually restart worker node VMs one by one." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Deployment spec with strategy: RollingUpdate, maxUnavailable: 2, and maxSurge: 4. In Kubernetes, the `RollingUpdate` strategy updates pods in a gradual, rolling fashion. The `maxSurge` parameter specifies how many extra pods can be created over the desired replica count, while `maxUnavailable` specifies the maximum number of pods that can be unavailable during the update.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment",
    tags: ["Deployment Strategies", "Rolling Updates", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-341",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Artifact Registry Vulnerability Scanning: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Software Supply Chain to automatically scan container images for known Common Vulnerabilities and Exposures (CVEs) as soon as images are pushed to Artifact Registry.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Automated container vulnerability scanning in Artifact Registry is under consideration.",
    options: [
      { id: 'A', text: "Enable Automated Vulnerability Scanning on Artifact Registry repositories in Google Cloud." },
      { id: 'B', text: "Wait for external security researchers to report vulnerabilities." },
      { id: 'C', text: "Manually inspect installed software packages inside each container filesystem." },
      { id: 'D', text: "Disable container base image updates to avoid changing package dependencies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Automated Vulnerability Scanning on Artifact Registry repositories in Google Cloud. Artifact Registry integrates with Google Cloud's Container Scanning service. When enabled, every container image pushed to the registry is automatically scanned against known CVE vulnerability databases, generating vulnerability reports and triggering alerts for critical package flaws.",
    referenceUrl: "https://cloud.google.com/artifact-registry/docs/analysis",
    tags: ["Software Supply Chain", "Vulnerability Scanning", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-342",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Artifact Registry Vulnerability Scanning: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Software Supply Chain to automatically scan container images for known Common Vulnerabilities and Exposures (CVEs) as soon as images are pushed to Artifact Registry.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Automated container vulnerability scanning in Artifact Registry is under consideration.",
    options: [
      { id: 'A', text: "Enable Automated Vulnerability Scanning on Artifact Registry repositories in Google Cloud." },
      { id: 'B', text: "Wait for external security researchers to report vulnerabilities." },
      { id: 'C', text: "Manually inspect installed software packages inside each container filesystem." },
      { id: 'D', text: "Disable container base image updates to avoid changing package dependencies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Automated Vulnerability Scanning on Artifact Registry repositories in Google Cloud. Artifact Registry integrates with Google Cloud's Container Scanning service. When enabled, every container image pushed to the registry is automatically scanned against known CVE vulnerability databases, generating vulnerability reports and triggering alerts for critical package flaws.",
    referenceUrl: "https://cloud.google.com/artifact-registry/docs/analysis",
    tags: ["Software Supply Chain", "Vulnerability Scanning", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-343",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Artifact Registry Vulnerability Scanning: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Software Supply Chain to automatically scan container images for known Common Vulnerabilities and Exposures (CVEs) as soon as images are pushed to Artifact Registry.",
    question: "Which solution implements these mandatory compliance and security controls? Automated container vulnerability scanning in Artifact Registry is under consideration.",
    options: [
      { id: 'A', text: "Enable Automated Vulnerability Scanning on Artifact Registry repositories in Google Cloud." },
      { id: 'B', text: "Wait for external security researchers to report vulnerabilities." },
      { id: 'C', text: "Manually inspect installed software packages inside each container filesystem." },
      { id: 'D', text: "Disable container base image updates to avoid changing package dependencies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Automated Vulnerability Scanning on Artifact Registry repositories in Google Cloud. Artifact Registry integrates with Google Cloud's Container Scanning service. When enabled, every container image pushed to the registry is automatically scanned against known CVE vulnerability databases, generating vulnerability reports and triggering alerts for critical package flaws.",
    referenceUrl: "https://cloud.google.com/artifact-registry/docs/analysis",
    tags: ["Software Supply Chain", "Vulnerability Scanning", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-344",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Artifact Registry Vulnerability Scanning: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Software Supply Chain to automatically scan container images for known Common Vulnerabilities and Exposures (CVEs) as soon as images are pushed to Artifact Registry.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Automated container vulnerability scanning in Artifact Registry is under consideration.",
    options: [
      { id: 'A', text: "Enable Automated Vulnerability Scanning on Artifact Registry repositories in Google Cloud." },
      { id: 'B', text: "Wait for external security researchers to report vulnerabilities." },
      { id: 'C', text: "Manually inspect installed software packages inside each container filesystem." },
      { id: 'D', text: "Disable container base image updates to avoid changing package dependencies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Automated Vulnerability Scanning on Artifact Registry repositories in Google Cloud. Artifact Registry integrates with Google Cloud's Container Scanning service. When enabled, every container image pushed to the registry is automatically scanned against known CVE vulnerability databases, generating vulnerability reports and triggering alerts for critical package flaws.",
    referenceUrl: "https://cloud.google.com/artifact-registry/docs/analysis",
    tags: ["Software Supply Chain", "Vulnerability Scanning", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-345",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Artifact Registry Vulnerability Scanning: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Software Supply Chain to automatically scan container images for known Common Vulnerabilities and Exposures (CVEs) as soon as images are pushed to Artifact Registry.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Automated container vulnerability scanning in Artifact Registry is under consideration.",
    options: [
      { id: 'A', text: "Enable Automated Vulnerability Scanning on Artifact Registry repositories in Google Cloud." },
      { id: 'B', text: "Wait for external security researchers to report vulnerabilities." },
      { id: 'C', text: "Manually inspect installed software packages inside each container filesystem." },
      { id: 'D', text: "Disable container base image updates to avoid changing package dependencies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Automated Vulnerability Scanning on Artifact Registry repositories in Google Cloud. Artifact Registry integrates with Google Cloud's Container Scanning service. When enabled, every container image pushed to the registry is automatically scanned against known CVE vulnerability databases, generating vulnerability reports and triggering alerts for critical package flaws.",
    referenceUrl: "https://cloud.google.com/artifact-registry/docs/analysis",
    tags: ["Software Supply Chain", "Vulnerability Scanning", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-346",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Binary Authorization Policy Attestations: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Software Supply Chain to ensure that only container images that have been signed by an automated Cloud Build security pipeline can execute in a production GKE cluster.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Binary Authorization with Cloud KMS cryptographically signed attestations is under consideration.",
    options: [
      { id: 'A', text: "Configure Binary Authorization requiring an attestor whose public key verifies Cloud KMS signatures generated during build." },
      { id: 'B', text: "Rely on developers promising not to deploy untrusted container images." },
      { id: 'C', text: "Restrict cluster access by changing the cluster root password daily." },
      { id: 'D', text: "Disable Kubernetes admission controllers in the cluster settings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Binary Authorization requiring an attestor whose public key verifies Cloud KMS signatures generated during build. Binary Authorization integrates with Cloud Build and Cloud KMS. After automated security checks pass, Cloud Build signs the container image digest using a Cloud KMS key to create an attestation. GKE's admission controller verifies this cryptographic signature before allowing pod deployment.",
    referenceUrl: "https://cloud.google.com/binary-authorization/docs/key-concepts",
    tags: ["Software Supply Chain", "Binary Authorization", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-347",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Binary Authorization Policy Attestations: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Software Supply Chain to ensure that only container images that have been signed by an automated Cloud Build security pipeline can execute in a production GKE cluster.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Binary Authorization with Cloud KMS cryptographically signed attestations is under consideration.",
    options: [
      { id: 'A', text: "Configure Binary Authorization requiring an attestor whose public key verifies Cloud KMS signatures generated during build." },
      { id: 'B', text: "Rely on developers promising not to deploy untrusted container images." },
      { id: 'C', text: "Restrict cluster access by changing the cluster root password daily." },
      { id: 'D', text: "Disable Kubernetes admission controllers in the cluster settings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Binary Authorization requiring an attestor whose public key verifies Cloud KMS signatures generated during build. Binary Authorization integrates with Cloud Build and Cloud KMS. After automated security checks pass, Cloud Build signs the container image digest using a Cloud KMS key to create an attestation. GKE's admission controller verifies this cryptographic signature before allowing pod deployment.",
    referenceUrl: "https://cloud.google.com/binary-authorization/docs/key-concepts",
    tags: ["Software Supply Chain", "Binary Authorization", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-348",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Binary Authorization Policy Attestations: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Software Supply Chain to ensure that only container images that have been signed by an automated Cloud Build security pipeline can execute in a production GKE cluster.",
    question: "Which solution implements these mandatory compliance and security controls? Binary Authorization with Cloud KMS cryptographically signed attestations is under consideration.",
    options: [
      { id: 'A', text: "Configure Binary Authorization requiring an attestor whose public key verifies Cloud KMS signatures generated during build." },
      { id: 'B', text: "Rely on developers promising not to deploy untrusted container images." },
      { id: 'C', text: "Restrict cluster access by changing the cluster root password daily." },
      { id: 'D', text: "Disable Kubernetes admission controllers in the cluster settings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Binary Authorization requiring an attestor whose public key verifies Cloud KMS signatures generated during build. Binary Authorization integrates with Cloud Build and Cloud KMS. After automated security checks pass, Cloud Build signs the container image digest using a Cloud KMS key to create an attestation. GKE's admission controller verifies this cryptographic signature before allowing pod deployment.",
    referenceUrl: "https://cloud.google.com/binary-authorization/docs/key-concepts",
    tags: ["Software Supply Chain", "Binary Authorization", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-349",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Binary Authorization Policy Attestations: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Software Supply Chain to ensure that only container images that have been signed by an automated Cloud Build security pipeline can execute in a production GKE cluster.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Binary Authorization with Cloud KMS cryptographically signed attestations is under consideration.",
    options: [
      { id: 'A', text: "Configure Binary Authorization requiring an attestor whose public key verifies Cloud KMS signatures generated during build." },
      { id: 'B', text: "Rely on developers promising not to deploy untrusted container images." },
      { id: 'C', text: "Restrict cluster access by changing the cluster root password daily." },
      { id: 'D', text: "Disable Kubernetes admission controllers in the cluster settings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Binary Authorization requiring an attestor whose public key verifies Cloud KMS signatures generated during build. Binary Authorization integrates with Cloud Build and Cloud KMS. After automated security checks pass, Cloud Build signs the container image digest using a Cloud KMS key to create an attestation. GKE's admission controller verifies this cryptographic signature before allowing pod deployment.",
    referenceUrl: "https://cloud.google.com/binary-authorization/docs/key-concepts",
    tags: ["Software Supply Chain", "Binary Authorization", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-350",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Binary Authorization Policy Attestations: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Software Supply Chain to ensure that only container images that have been signed by an automated Cloud Build security pipeline can execute in a production GKE cluster.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Binary Authorization with Cloud KMS cryptographically signed attestations is under consideration.",
    options: [
      { id: 'A', text: "Configure Binary Authorization requiring an attestor whose public key verifies Cloud KMS signatures generated during build." },
      { id: 'B', text: "Rely on developers promising not to deploy untrusted container images." },
      { id: 'C', text: "Restrict cluster access by changing the cluster root password daily." },
      { id: 'D', text: "Disable Kubernetes admission controllers in the cluster settings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Binary Authorization requiring an attestor whose public key verifies Cloud KMS signatures generated during build. Binary Authorization integrates with Cloud Build and Cloud KMS. After automated security checks pass, Cloud Build signs the container image digest using a Cloud KMS key to create an attestation. GKE's admission controller verifies this cryptographic signature before allowing pod deployment.",
    referenceUrl: "https://cloud.google.com/binary-authorization/docs/key-concepts",
    tags: ["Software Supply Chain", "Binary Authorization", "Resilience Failure"]
  }
];

export default GCP_PCDOE_QUESTIONS_14;
