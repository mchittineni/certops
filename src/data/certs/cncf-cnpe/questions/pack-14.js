export const CNCF_CNPE_QUESTIONS_14 = [
  {
    id: "cncf-cnpe-326",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Enterprise GitOps at Scale: ArgoCD ApplicationSets: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates ApplicationSets to deploy a microservice automatically across 100 regional Kubernetes clusters with cluster-specific configuration overrides.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Managing thousands of applications across multi-cluster fleets using ApplicationSet generators is under consideration.",
    options: [
      { id: 'A', text: "Deploy applications by running manual kubectl apply commands from local laptops." },
      { id: 'B', text: "Implement an ArgoCD `ApplicationSet` utilizing cluster and git directory generators to synthesize applications across clusters dynamically." },
      { id: 'C', text: "Rely on manual SSH scripts executing concurrent git clones across server fleets." },
      { id: 'D', text: "Manually create and maintain 100 individual ArgoCD Application manifests by hand in the web console." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement an ArgoCD `ApplicationSet` utilizing cluster and git directory generators to synthesize applications across clusters dynamically. ArgoCD ApplicationSets automate multi-cluster GitOps delivery. Using generators (`Cluster`, `Git`, `PullRequest`, `Matrix`), a single ApplicationSet resource dynamically generates and updates hundreds of individual ArgoCD Applications as clusters join or leave the fleet.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/application-set/",
    tags: ["ApplicationSets", "ApplicationSets", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-327",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Enterprise GitOps at Scale: ArgoCD ApplicationSets: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates ApplicationSets to deploy a microservice automatically across 100 regional Kubernetes clusters with cluster-specific configuration overrides.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Managing thousands of applications across multi-cluster fleets using ApplicationSet generators is under consideration.",
    options: [
      { id: 'A', text: "Rely on manual SSH scripts executing concurrent git clones across server fleets." },
      { id: 'B', text: "Deploy applications by running manual kubectl apply commands from local laptops." },
      { id: 'C', text: "Manually create and maintain 100 individual ArgoCD Application manifests by hand in the web console." },
      { id: 'D', text: "Implement an ArgoCD `ApplicationSet` utilizing cluster and git directory generators to synthesize applications across clusters dynamically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement an ArgoCD `ApplicationSet` utilizing cluster and git directory generators to synthesize applications across clusters dynamically. ArgoCD ApplicationSets automate multi-cluster GitOps delivery. Using generators (`Cluster`, `Git`, `PullRequest`, `Matrix`), a single ApplicationSet resource dynamically generates and updates hundreds of individual ArgoCD Applications as clusters join or leave the fleet.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/application-set/",
    tags: ["ApplicationSets", "ApplicationSets", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-328",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Enterprise GitOps at Scale: ArgoCD ApplicationSets: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates ApplicationSets to deploy a microservice automatically across 100 regional Kubernetes clusters with cluster-specific configuration overrides.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Managing thousands of applications across multi-cluster fleets using ApplicationSet generators is under consideration.",
    options: [
      { id: 'A', text: "Rely on manual SSH scripts executing concurrent git clones across server fleets." },
      { id: 'B', text: "Implement an ArgoCD `ApplicationSet` utilizing cluster and git directory generators to synthesize applications across clusters dynamically." },
      { id: 'C', text: "Manually create and maintain 100 individual ArgoCD Application manifests by hand in the web console." },
      { id: 'D', text: "Deploy applications by running manual kubectl apply commands from local laptops." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement an ArgoCD `ApplicationSet` utilizing cluster and git directory generators to synthesize applications across clusters dynamically. ArgoCD ApplicationSets automate multi-cluster GitOps delivery. Using generators (`Cluster`, `Git`, `PullRequest`, `Matrix`), a single ApplicationSet resource dynamically generates and updates hundreds of individual ArgoCD Applications as clusters join or leave the fleet.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/application-set/",
    tags: ["ApplicationSets", "ApplicationSets", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-329",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Enterprise GitOps at Scale: ArgoCD ApplicationSets: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates ApplicationSets to deploy a microservice automatically across 100 regional Kubernetes clusters with cluster-specific configuration overrides.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Managing thousands of applications across multi-cluster fleets using ApplicationSet generators is under consideration.",
    options: [
      { id: 'A', text: "Implement an ArgoCD `ApplicationSet` utilizing cluster and git directory generators to synthesize applications across clusters dynamically." },
      { id: 'B', text: "Deploy applications by running manual kubectl apply commands from local laptops." },
      { id: 'C', text: "Manually create and maintain 100 individual ArgoCD Application manifests by hand in the web console." },
      { id: 'D', text: "Rely on manual SSH scripts executing concurrent git clones across server fleets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement an ArgoCD `ApplicationSet` utilizing cluster and git directory generators to synthesize applications across clusters dynamically. ArgoCD ApplicationSets automate multi-cluster GitOps delivery. Using generators (`Cluster`, `Git`, `PullRequest`, `Matrix`), a single ApplicationSet resource dynamically generates and updates hundreds of individual ArgoCD Applications as clusters join or leave the fleet.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/application-set/",
    tags: ["ApplicationSets", "ApplicationSets", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-330",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Enterprise GitOps at Scale: ArgoCD ApplicationSets: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates ApplicationSets to deploy a microservice automatically across 100 regional Kubernetes clusters with cluster-specific configuration overrides.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Managing thousands of applications across multi-cluster fleets using ApplicationSet generators is under consideration.",
    options: [
      { id: 'A', text: "Manually create and maintain 100 individual ArgoCD Application manifests by hand in the web console." },
      { id: 'B', text: "Deploy applications by running manual kubectl apply commands from local laptops." },
      { id: 'C', text: "Implement an ArgoCD `ApplicationSet` utilizing cluster and git directory generators to synthesize applications across clusters dynamically." },
      { id: 'D', text: "Rely on manual SSH scripts executing concurrent git clones across server fleets." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement an ArgoCD `ApplicationSet` utilizing cluster and git directory generators to synthesize applications across clusters dynamically. ArgoCD ApplicationSets automate multi-cluster GitOps delivery. Using generators (`Cluster`, `Git`, `PullRequest`, `Matrix`), a single ApplicationSet resource dynamically generates and updates hundreds of individual ArgoCD Applications as clusters join or leave the fleet.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/application-set/",
    tags: ["ApplicationSets", "ApplicationSets", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-331",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Progressive Rollout Orchestration: Argo Rollouts and Flagger: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Progressive Rollouts to safely deploy a mission-critical banking service by testing new versions against live production traffic before full cutover.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Automating canary releases, automated metric analysis, and instant rollbacks with Argo Rollouts is under consideration.",
    options: [
      { id: 'A', text: "Perform an instant 100% replacement of all running production pods without health checks or traffic analysis." },
      { id: 'B', text: "Rely on customer support ticket volume to determine whether a newly deployed release contains fatal defects." },
      { id: 'C', text: "Deploy an Argo Rollouts resource configured with automated canary steps, Prometheus metric analysis, and automated abort thresholds." },
      { id: 'D', text: "Prevent developers from deploying software updates to eliminate operational risk." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an Argo Rollouts resource configured with automated canary steps, Prometheus metric analysis, and automated abort thresholds. Argo Rollouts replaces the standard Kubernetes Deployment with advanced rollout capabilities. It manages traffic splitting via ingress/mesh controllers, evaluates metric queries (e.g., error rate &lt; 0.1%), and automatically promotes or reverts the canary.",
    referenceUrl: "https://argoproj.github.io/argo-rollouts/",
    tags: ["Progressive Rollouts", "Progressive Rollouts", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-332",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Progressive Rollout Orchestration: Argo Rollouts and Flagger: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Progressive Rollouts to safely deploy a mission-critical banking service by testing new versions against live production traffic before full cutover.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Automating canary releases, automated metric analysis, and instant rollbacks with Argo Rollouts is under consideration.",
    options: [
      { id: 'A', text: "Rely on customer support ticket volume to determine whether a newly deployed release contains fatal defects." },
      { id: 'B', text: "Prevent developers from deploying software updates to eliminate operational risk." },
      { id: 'C', text: "Perform an instant 100% replacement of all running production pods without health checks or traffic analysis." },
      { id: 'D', text: "Deploy an Argo Rollouts resource configured with automated canary steps, Prometheus metric analysis, and automated abort thresholds." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy an Argo Rollouts resource configured with automated canary steps, Prometheus metric analysis, and automated abort thresholds. Argo Rollouts replaces the standard Kubernetes Deployment with advanced rollout capabilities. It manages traffic splitting via ingress/mesh controllers, evaluates metric queries (e.g., error rate &lt; 0.1%), and automatically promotes or reverts the canary.",
    referenceUrl: "https://argoproj.github.io/argo-rollouts/",
    tags: ["Progressive Rollouts", "Progressive Rollouts", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-333",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Progressive Rollout Orchestration: Argo Rollouts and Flagger: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Progressive Rollouts to safely deploy a mission-critical banking service by testing new versions against live production traffic before full cutover.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Automating canary releases, automated metric analysis, and instant rollbacks with Argo Rollouts is under consideration.",
    options: [
      { id: 'A', text: "Perform an instant 100% replacement of all running production pods without health checks or traffic analysis." },
      { id: 'B', text: "Rely on customer support ticket volume to determine whether a newly deployed release contains fatal defects." },
      { id: 'C', text: "Prevent developers from deploying software updates to eliminate operational risk." },
      { id: 'D', text: "Deploy an Argo Rollouts resource configured with automated canary steps, Prometheus metric analysis, and automated abort thresholds." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy an Argo Rollouts resource configured with automated canary steps, Prometheus metric analysis, and automated abort thresholds. Argo Rollouts replaces the standard Kubernetes Deployment with advanced rollout capabilities. It manages traffic splitting via ingress/mesh controllers, evaluates metric queries (e.g., error rate &lt; 0.1%), and automatically promotes or reverts the canary.",
    referenceUrl: "https://argoproj.github.io/argo-rollouts/",
    tags: ["Progressive Rollouts", "Progressive Rollouts", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-334",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Progressive Rollout Orchestration: Argo Rollouts and Flagger: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Progressive Rollouts to safely deploy a mission-critical banking service by testing new versions against live production traffic before full cutover.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Automating canary releases, automated metric analysis, and instant rollbacks with Argo Rollouts is under consideration.",
    options: [
      { id: 'A', text: "Prevent developers from deploying software updates to eliminate operational risk." },
      { id: 'B', text: "Perform an instant 100% replacement of all running production pods without health checks or traffic analysis." },
      { id: 'C', text: "Rely on customer support ticket volume to determine whether a newly deployed release contains fatal defects." },
      { id: 'D', text: "Deploy an Argo Rollouts resource configured with automated canary steps, Prometheus metric analysis, and automated abort thresholds." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy an Argo Rollouts resource configured with automated canary steps, Prometheus metric analysis, and automated abort thresholds. Argo Rollouts replaces the standard Kubernetes Deployment with advanced rollout capabilities. It manages traffic splitting via ingress/mesh controllers, evaluates metric queries (e.g., error rate &lt; 0.1%), and automatically promotes or reverts the canary.",
    referenceUrl: "https://argoproj.github.io/argo-rollouts/",
    tags: ["Progressive Rollouts", "Progressive Rollouts", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-335",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Progressive Rollout Orchestration: Argo Rollouts and Flagger: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Progressive Rollouts to safely deploy a mission-critical banking service by testing new versions against live production traffic before full cutover.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Automating canary releases, automated metric analysis, and instant rollbacks with Argo Rollouts is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Argo Rollouts resource configured with automated canary steps, Prometheus metric analysis, and automated abort thresholds." },
      { id: 'B', text: "Rely on customer support ticket volume to determine whether a newly deployed release contains fatal defects." },
      { id: 'C', text: "Perform an instant 100% replacement of all running production pods without health checks or traffic analysis." },
      { id: 'D', text: "Prevent developers from deploying software updates to eliminate operational risk." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Argo Rollouts resource configured with automated canary steps, Prometheus metric analysis, and automated abort thresholds. Argo Rollouts replaces the standard Kubernetes Deployment with advanced rollout capabilities. It manages traffic splitting via ingress/mesh controllers, evaluates metric queries (e.g., error rate &lt; 0.1%), and automatically promotes or reverts the canary.",
    referenceUrl: "https://argoproj.github.io/argo-rollouts/",
    tags: ["Progressive Rollouts", "Progressive Rollouts", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-336",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Vault Secrets Operator (VSO) and Dynamic Secret Leasing: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Vault Operator to eliminate static database passwords by provisioning short-lived, automatically rotated database credentials for application pods.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Dynamic credential issuance, automatic lease renewal, and Kubernetes Secret synthesis via VSO is under consideration.",
    options: [
      { id: 'A', text: "Print database passwords in plaintext container startup logs." },
      { id: 'B', text: "Store long-lived database root credentials in plaintext inside application git repositories." },
      { id: 'C', text: "Share a single hardcoded database password across all microservices for five years without rotation." },
      { id: 'D', text: "Deploy the HashiCorp Vault Secrets Operator (VSO) to dynamically generate, lease, and rotate short-lived database credentials directly into pod secrets." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy the HashiCorp Vault Secrets Operator (VSO) to dynamically generate, lease, and rotate short-lived database credentials directly into pod secrets. The Vault Secrets Operator (VSO) integrates Kubernetes natively with HashiCorp Vault. By leveraging Vault's dynamic secrets engines, VSO provisions ephemeral, role-based credentials for databases, renewing leases and rotating secrets automatically before expiration.",
    referenceUrl: "https://developer.hashicorp.com/vault/docs/platform/k8s/vso",
    tags: ["Vault Operator", "Vault Operator", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-337",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Vault Secrets Operator (VSO) and Dynamic Secret Leasing: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Vault Operator to eliminate static database passwords by provisioning short-lived, automatically rotated database credentials for application pods.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Dynamic credential issuance, automatic lease renewal, and Kubernetes Secret synthesis via VSO is under consideration.",
    options: [
      { id: 'A', text: "Print database passwords in plaintext container startup logs." },
      { id: 'B', text: "Store long-lived database root credentials in plaintext inside application git repositories." },
      { id: 'C', text: "Share a single hardcoded database password across all microservices for five years without rotation." },
      { id: 'D', text: "Deploy the HashiCorp Vault Secrets Operator (VSO) to dynamically generate, lease, and rotate short-lived database credentials directly into pod secrets." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy the HashiCorp Vault Secrets Operator (VSO) to dynamically generate, lease, and rotate short-lived database credentials directly into pod secrets. The Vault Secrets Operator (VSO) integrates Kubernetes natively with HashiCorp Vault. By leveraging Vault's dynamic secrets engines, VSO provisions ephemeral, role-based credentials for databases, renewing leases and rotating secrets automatically before expiration.",
    referenceUrl: "https://developer.hashicorp.com/vault/docs/platform/k8s/vso",
    tags: ["Vault Operator", "Vault Operator", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-338",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Vault Secrets Operator (VSO) and Dynamic Secret Leasing: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Vault Operator to eliminate static database passwords by provisioning short-lived, automatically rotated database credentials for application pods.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Dynamic credential issuance, automatic lease renewal, and Kubernetes Secret synthesis via VSO is under consideration.",
    options: [
      { id: 'A', text: "Share a single hardcoded database password across all microservices for five years without rotation." },
      { id: 'B', text: "Deploy the HashiCorp Vault Secrets Operator (VSO) to dynamically generate, lease, and rotate short-lived database credentials directly into pod secrets." },
      { id: 'C', text: "Store long-lived database root credentials in plaintext inside application git repositories." },
      { id: 'D', text: "Print database passwords in plaintext container startup logs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the HashiCorp Vault Secrets Operator (VSO) to dynamically generate, lease, and rotate short-lived database credentials directly into pod secrets. The Vault Secrets Operator (VSO) integrates Kubernetes natively with HashiCorp Vault. By leveraging Vault's dynamic secrets engines, VSO provisions ephemeral, role-based credentials for databases, renewing leases and rotating secrets automatically before expiration.",
    referenceUrl: "https://developer.hashicorp.com/vault/docs/platform/k8s/vso",
    tags: ["Vault Operator", "Vault Operator", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-339",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Vault Secrets Operator (VSO) and Dynamic Secret Leasing: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Vault Operator to eliminate static database passwords by provisioning short-lived, automatically rotated database credentials for application pods.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Dynamic credential issuance, automatic lease renewal, and Kubernetes Secret synthesis via VSO is under consideration.",
    options: [
      { id: 'A', text: "Deploy the HashiCorp Vault Secrets Operator (VSO) to dynamically generate, lease, and rotate short-lived database credentials directly into pod secrets." },
      { id: 'B', text: "Store long-lived database root credentials in plaintext inside application git repositories." },
      { id: 'C', text: "Print database passwords in plaintext container startup logs." },
      { id: 'D', text: "Share a single hardcoded database password across all microservices for five years without rotation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the HashiCorp Vault Secrets Operator (VSO) to dynamically generate, lease, and rotate short-lived database credentials directly into pod secrets. The Vault Secrets Operator (VSO) integrates Kubernetes natively with HashiCorp Vault. By leveraging Vault's dynamic secrets engines, VSO provisions ephemeral, role-based credentials for databases, renewing leases and rotating secrets automatically before expiration.",
    referenceUrl: "https://developer.hashicorp.com/vault/docs/platform/k8s/vso",
    tags: ["Vault Operator", "Vault Operator", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-340",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Vault Secrets Operator (VSO) and Dynamic Secret Leasing: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Vault Operator to eliminate static database passwords by provisioning short-lived, automatically rotated database credentials for application pods.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Dynamic credential issuance, automatic lease renewal, and Kubernetes Secret synthesis via VSO is under consideration.",
    options: [
      { id: 'A', text: "Store long-lived database root credentials in plaintext inside application git repositories." },
      { id: 'B', text: "Deploy the HashiCorp Vault Secrets Operator (VSO) to dynamically generate, lease, and rotate short-lived database credentials directly into pod secrets." },
      { id: 'C', text: "Share a single hardcoded database password across all microservices for five years without rotation." },
      { id: 'D', text: "Print database passwords in plaintext container startup logs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the HashiCorp Vault Secrets Operator (VSO) to dynamically generate, lease, and rotate short-lived database credentials directly into pod secrets. The Vault Secrets Operator (VSO) integrates Kubernetes natively with HashiCorp Vault. By leveraging Vault's dynamic secrets engines, VSO provisions ephemeral, role-based credentials for databases, renewing leases and rotating secrets automatically before expiration.",
    referenceUrl: "https://developer.hashicorp.com/vault/docs/platform/k8s/vso",
    tags: ["Vault Operator", "Vault Operator", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-341",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Automated Dependency Campaigns and Renovate Bot: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Dependency Automation to upgrade a vulnerable logging library across 400 microservice repositories simultaneously without human engineering toil.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Orchestrating automated PR campaigns across hundreds of repositories for vulnerability patching is under consideration.",
    options: [
      { id: 'A', text: "Block all production deployments permanently until manual updates are complete." },
      { id: 'B', text: "Ignore critical security vulnerabilities and hope attackers do not notice." },
      { id: 'C', text: "Send an email blast begging 400 developers to manually update their dependencies over the next six months." },
      { id: 'D', text: "Deploy an enterprise Renovate bot instance with curated presets that automatically opens tested, rebasing pull requests across all repositories." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy an enterprise Renovate bot instance with curated presets that automatically opens tested, rebasing pull requests across all repositories. Platform engineering automates dependency maintenance. Tools like Renovate bot scan repository dependency trees and automatically generate pull requests with updated packages. Combined with CI testing and auto-merge policies, security patches roll out across the fleet with minimal human toil.",
    referenceUrl: "https://docs.renovatebot.com/",
    tags: ["Dependency Automation", "Dependency Automation", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-342",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Automated Dependency Campaigns and Renovate Bot: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Dependency Automation to upgrade a vulnerable logging library across 400 microservice repositories simultaneously without human engineering toil.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Orchestrating automated PR campaigns across hundreds of repositories for vulnerability patching is under consideration.",
    options: [
      { id: 'A', text: "Ignore critical security vulnerabilities and hope attackers do not notice." },
      { id: 'B', text: "Send an email blast begging 400 developers to manually update their dependencies over the next six months." },
      { id: 'C', text: "Deploy an enterprise Renovate bot instance with curated presets that automatically opens tested, rebasing pull requests across all repositories." },
      { id: 'D', text: "Block all production deployments permanently until manual updates are complete." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an enterprise Renovate bot instance with curated presets that automatically opens tested, rebasing pull requests across all repositories. Platform engineering automates dependency maintenance. Tools like Renovate bot scan repository dependency trees and automatically generate pull requests with updated packages. Combined with CI testing and auto-merge policies, security patches roll out across the fleet with minimal human toil.",
    referenceUrl: "https://docs.renovatebot.com/",
    tags: ["Dependency Automation", "Dependency Automation", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-343",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Automated Dependency Campaigns and Renovate Bot: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Dependency Automation to upgrade a vulnerable logging library across 400 microservice repositories simultaneously without human engineering toil.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Orchestrating automated PR campaigns across hundreds of repositories for vulnerability patching is under consideration.",
    options: [
      { id: 'A', text: "Deploy an enterprise Renovate bot instance with curated presets that automatically opens tested, rebasing pull requests across all repositories." },
      { id: 'B', text: "Ignore critical security vulnerabilities and hope attackers do not notice." },
      { id: 'C', text: "Send an email blast begging 400 developers to manually update their dependencies over the next six months." },
      { id: 'D', text: "Block all production deployments permanently until manual updates are complete." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an enterprise Renovate bot instance with curated presets that automatically opens tested, rebasing pull requests across all repositories. Platform engineering automates dependency maintenance. Tools like Renovate bot scan repository dependency trees and automatically generate pull requests with updated packages. Combined with CI testing and auto-merge policies, security patches roll out across the fleet with minimal human toil.",
    referenceUrl: "https://docs.renovatebot.com/",
    tags: ["Dependency Automation", "Dependency Automation", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-344",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Automated Dependency Campaigns and Renovate Bot: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Dependency Automation to upgrade a vulnerable logging library across 400 microservice repositories simultaneously without human engineering toil.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Orchestrating automated PR campaigns across hundreds of repositories for vulnerability patching is under consideration.",
    options: [
      { id: 'A', text: "Deploy an enterprise Renovate bot instance with curated presets that automatically opens tested, rebasing pull requests across all repositories." },
      { id: 'B', text: "Send an email blast begging 400 developers to manually update their dependencies over the next six months." },
      { id: 'C', text: "Ignore critical security vulnerabilities and hope attackers do not notice." },
      { id: 'D', text: "Block all production deployments permanently until manual updates are complete." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an enterprise Renovate bot instance with curated presets that automatically opens tested, rebasing pull requests across all repositories. Platform engineering automates dependency maintenance. Tools like Renovate bot scan repository dependency trees and automatically generate pull requests with updated packages. Combined with CI testing and auto-merge policies, security patches roll out across the fleet with minimal human toil.",
    referenceUrl: "https://docs.renovatebot.com/",
    tags: ["Dependency Automation", "Dependency Automation", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-345",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Automated Dependency Campaigns and Renovate Bot: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Dependency Automation to upgrade a vulnerable logging library across 400 microservice repositories simultaneously without human engineering toil.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Orchestrating automated PR campaigns across hundreds of repositories for vulnerability patching is under consideration.",
    options: [
      { id: 'A', text: "Send an email blast begging 400 developers to manually update their dependencies over the next six months." },
      { id: 'B', text: "Deploy an enterprise Renovate bot instance with curated presets that automatically opens tested, rebasing pull requests across all repositories." },
      { id: 'C', text: "Block all production deployments permanently until manual updates are complete." },
      { id: 'D', text: "Ignore critical security vulnerabilities and hope attackers do not notice." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an enterprise Renovate bot instance with curated presets that automatically opens tested, rebasing pull requests across all repositories. Platform engineering automates dependency maintenance. Tools like Renovate bot scan repository dependency trees and automatically generate pull requests with updated packages. Combined with CI testing and auto-merge policies, security patches roll out across the fleet with minimal human toil.",
    referenceUrl: "https://docs.renovatebot.com/",
    tags: ["Dependency Automation", "Dependency Automation", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-346",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Cloud-Native Database Operators: CloudNativePG: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Database Operators to provide development teams with production-grade, highly available PostgreSQL clusters with automated failover and backups via self-service.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Declarative PostgreSQL clustering, streaming replication, automated failover, and Barman backups is under consideration.",
    options: [
      { id: 'A', text: "Deploy standalone un-replicated PostgreSQL pods on ephemeral host disks without backups." },
      { id: 'B', text: "Deploy CloudNativePG (or CrunchyData PGO) to manage declarative PostgreSQL clusters with automated streaming replication and failover." },
      { id: 'C', text: "Instruct developers to manually install database packages on Linux VMs over SSH." },
      { id: 'D', text: "Require all applications to write data to flat text files on shared network drives." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy CloudNativePG (or CrunchyData PGO) to manage declarative PostgreSQL clusters with automated streaming replication and failover. Database operators bring cloud-like managed database experiences into Kubernetes. Operators like CloudNativePG use declarative custom resources (`Cluster`) to manage primary/standby replication, physical WAL archiving, connection pooling, and sub-minute automated failovers.",
    referenceUrl: "https://cloudnative-pg.io/",
    tags: ["Database Operators", "Database Operators", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-347",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Cloud-Native Database Operators: CloudNativePG: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Database Operators to provide development teams with production-grade, highly available PostgreSQL clusters with automated failover and backups via self-service.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Declarative PostgreSQL clustering, streaming replication, automated failover, and Barman backups is under consideration.",
    options: [
      { id: 'A', text: "Require all applications to write data to flat text files on shared network drives." },
      { id: 'B', text: "Instruct developers to manually install database packages on Linux VMs over SSH." },
      { id: 'C', text: "Deploy CloudNativePG (or CrunchyData PGO) to manage declarative PostgreSQL clusters with automated streaming replication and failover." },
      { id: 'D', text: "Deploy standalone un-replicated PostgreSQL pods on ephemeral host disks without backups." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy CloudNativePG (or CrunchyData PGO) to manage declarative PostgreSQL clusters with automated streaming replication and failover. Database operators bring cloud-like managed database experiences into Kubernetes. Operators like CloudNativePG use declarative custom resources (`Cluster`) to manage primary/standby replication, physical WAL archiving, connection pooling, and sub-minute automated failovers.",
    referenceUrl: "https://cloudnative-pg.io/",
    tags: ["Database Operators", "Database Operators", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-348",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Cloud-Native Database Operators: CloudNativePG: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Database Operators to provide development teams with production-grade, highly available PostgreSQL clusters with automated failover and backups via self-service.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Declarative PostgreSQL clustering, streaming replication, automated failover, and Barman backups is under consideration.",
    options: [
      { id: 'A', text: "Deploy standalone un-replicated PostgreSQL pods on ephemeral host disks without backups." },
      { id: 'B', text: "Require all applications to write data to flat text files on shared network drives." },
      { id: 'C', text: "Deploy CloudNativePG (or CrunchyData PGO) to manage declarative PostgreSQL clusters with automated streaming replication and failover." },
      { id: 'D', text: "Instruct developers to manually install database packages on Linux VMs over SSH." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy CloudNativePG (or CrunchyData PGO) to manage declarative PostgreSQL clusters with automated streaming replication and failover. Database operators bring cloud-like managed database experiences into Kubernetes. Operators like CloudNativePG use declarative custom resources (`Cluster`) to manage primary/standby replication, physical WAL archiving, connection pooling, and sub-minute automated failovers.",
    referenceUrl: "https://cloudnative-pg.io/",
    tags: ["Database Operators", "Database Operators", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-349",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Cloud-Native Database Operators: CloudNativePG: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Database Operators to provide development teams with production-grade, highly available PostgreSQL clusters with automated failover and backups via self-service.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Declarative PostgreSQL clustering, streaming replication, automated failover, and Barman backups is under consideration.",
    options: [
      { id: 'A', text: "Deploy CloudNativePG (or CrunchyData PGO) to manage declarative PostgreSQL clusters with automated streaming replication and failover." },
      { id: 'B', text: "Instruct developers to manually install database packages on Linux VMs over SSH." },
      { id: 'C', text: "Require all applications to write data to flat text files on shared network drives." },
      { id: 'D', text: "Deploy standalone un-replicated PostgreSQL pods on ephemeral host disks without backups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy CloudNativePG (or CrunchyData PGO) to manage declarative PostgreSQL clusters with automated streaming replication and failover. Database operators bring cloud-like managed database experiences into Kubernetes. Operators like CloudNativePG use declarative custom resources (`Cluster`) to manage primary/standby replication, physical WAL archiving, connection pooling, and sub-minute automated failovers.",
    referenceUrl: "https://cloudnative-pg.io/",
    tags: ["Database Operators", "Database Operators", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-350",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Cloud-Native Database Operators: CloudNativePG: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Database Operators to provide development teams with production-grade, highly available PostgreSQL clusters with automated failover and backups via self-service.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Declarative PostgreSQL clustering, streaming replication, automated failover, and Barman backups is under consideration.",
    options: [
      { id: 'A', text: "Require all applications to write data to flat text files on shared network drives." },
      { id: 'B', text: "Deploy standalone un-replicated PostgreSQL pods on ephemeral host disks without backups." },
      { id: 'C', text: "Deploy CloudNativePG (or CrunchyData PGO) to manage declarative PostgreSQL clusters with automated streaming replication and failover." },
      { id: 'D', text: "Instruct developers to manually install database packages on Linux VMs over SSH." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy CloudNativePG (or CrunchyData PGO) to manage declarative PostgreSQL clusters with automated streaming replication and failover. Database operators bring cloud-like managed database experiences into Kubernetes. Operators like CloudNativePG use declarative custom resources (`Cluster`) to manage primary/standby replication, physical WAL archiving, connection pooling, and sub-minute automated failovers.",
    referenceUrl: "https://cloudnative-pg.io/",
    tags: ["Database Operators", "Database Operators", "Resilience And Sre"]
  }
];

export default CNCF_CNPE_QUESTIONS_14;
