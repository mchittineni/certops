export const CNCF_CNPA_QUESTIONS_17 = [
  {
    id: "cncf-cnpa-401",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "GitOps Continuous Delivery Workflows: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates GitOps Delivery to eliminate human access to production clusters while ensuring automated, auditable deployments and self-healing drift correction.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Reconciling declared Git state with live clusters using ArgoCD or Flux is under consideration.",
    options: [
      { id: 'A', text: "Grant direct SSH and kubectl access to production cluster nodes for all software developers." },
      { id: 'B', text: "Implement GitOps continuous delivery using ArgoCD or Flux, where clusters pull and reconcile configurations directly from Git." },
      { id: 'C', text: "Deploy applications by manually copying binary files over unencrypted FTP." },
      { id: 'D', text: "Rely on manual CLI deployments executed from developer laptops." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement GitOps continuous delivery using ArgoCD or Flux, where clusters pull and reconcile configurations directly from Git. GitOps continuous delivery uses Git as the single source of truth for declared infrastructure and application state. Controllers running inside clusters (ArgoCD, Flux) pull changes, apply manifests automatically, and continuously correct configuration drift without human cluster access.",
    referenceUrl: "https://opengitops.net/",
    tags: ["GitOps Delivery", "GitOps", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-402",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "GitOps Continuous Delivery Workflows: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates GitOps Delivery to eliminate human access to production clusters while ensuring automated, auditable deployments and self-healing drift correction.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Reconciling declared Git state with live clusters using ArgoCD or Flux is under consideration.",
    options: [
      { id: 'A', text: "Grant direct SSH and kubectl access to production cluster nodes for all software developers." },
      { id: 'B', text: "Implement GitOps continuous delivery using ArgoCD or Flux, where clusters pull and reconcile configurations directly from Git." },
      { id: 'C', text: "Deploy applications by manually copying binary files over unencrypted FTP." },
      { id: 'D', text: "Rely on manual CLI deployments executed from developer laptops." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement GitOps continuous delivery using ArgoCD or Flux, where clusters pull and reconcile configurations directly from Git. GitOps continuous delivery uses Git as the single source of truth for declared infrastructure and application state. Controllers running inside clusters (ArgoCD, Flux) pull changes, apply manifests automatically, and continuously correct configuration drift without human cluster access.",
    referenceUrl: "https://opengitops.net/",
    tags: ["GitOps Delivery", "GitOps", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-403",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "GitOps Continuous Delivery Workflows: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates GitOps Delivery to eliminate human access to production clusters while ensuring automated, auditable deployments and self-healing drift correction.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Reconciling declared Git state with live clusters using ArgoCD or Flux is under consideration.",
    options: [
      { id: 'A', text: "Implement GitOps continuous delivery using ArgoCD or Flux, where clusters pull and reconcile configurations directly from Git." },
      { id: 'B', text: "Grant direct SSH and kubectl access to production cluster nodes for all software developers." },
      { id: 'C', text: "Rely on manual CLI deployments executed from developer laptops." },
      { id: 'D', text: "Deploy applications by manually copying binary files over unencrypted FTP." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement GitOps continuous delivery using ArgoCD or Flux, where clusters pull and reconcile configurations directly from Git. GitOps continuous delivery uses Git as the single source of truth for declared infrastructure and application state. Controllers running inside clusters (ArgoCD, Flux) pull changes, apply manifests automatically, and continuously correct configuration drift without human cluster access.",
    referenceUrl: "https://opengitops.net/",
    tags: ["GitOps Delivery", "GitOps", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-404",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "GitOps Continuous Delivery Workflows: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates GitOps Delivery to eliminate human access to production clusters while ensuring automated, auditable deployments and self-healing drift correction.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Reconciling declared Git state with live clusters using ArgoCD or Flux is under consideration.",
    options: [
      { id: 'A', text: "Grant direct SSH and kubectl access to production cluster nodes for all software developers." },
      { id: 'B', text: "Deploy applications by manually copying binary files over unencrypted FTP." },
      { id: 'C', text: "Implement GitOps continuous delivery using ArgoCD or Flux, where clusters pull and reconcile configurations directly from Git." },
      { id: 'D', text: "Rely on manual CLI deployments executed from developer laptops." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement GitOps continuous delivery using ArgoCD or Flux, where clusters pull and reconcile configurations directly from Git. GitOps continuous delivery uses Git as the single source of truth for declared infrastructure and application state. Controllers running inside clusters (ArgoCD, Flux) pull changes, apply manifests automatically, and continuously correct configuration drift without human cluster access.",
    referenceUrl: "https://opengitops.net/",
    tags: ["GitOps Delivery", "GitOps", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-405",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "GitOps Continuous Delivery Workflows: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates GitOps Delivery to eliminate human access to production clusters while ensuring automated, auditable deployments and self-healing drift correction.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Reconciling declared Git state with live clusters using ArgoCD or Flux is under consideration.",
    options: [
      { id: 'A', text: "Deploy applications by manually copying binary files over unencrypted FTP." },
      { id: 'B', text: "Implement GitOps continuous delivery using ArgoCD or Flux, where clusters pull and reconcile configurations directly from Git." },
      { id: 'C', text: "Rely on manual CLI deployments executed from developer laptops." },
      { id: 'D', text: "Grant direct SSH and kubectl access to production cluster nodes for all software developers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement GitOps continuous delivery using ArgoCD or Flux, where clusters pull and reconcile configurations directly from Git. GitOps continuous delivery uses Git as the single source of truth for declared infrastructure and application state. Controllers running inside clusters (ArgoCD, Flux) pull changes, apply manifests automatically, and continuously correct configuration drift without human cluster access.",
    referenceUrl: "https://opengitops.net/",
    tags: ["GitOps Delivery", "GitOps", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-406",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Progressive Delivery and Automated Canary Rollouts: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Progressive Delivery to roll out a new version of a critical payments service gradually to 5% of customer traffic while automatically aborting if error rates spike.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Fine-grained traffic shifting and automated metric analysis using Argo Rollouts or Flagger is under consideration.",
    options: [
      { id: 'A', text: "Implement progressive delivery using Argo Rollouts or Flagger to execute automated canary analysis and dynamic traffic shifting." },
      { id: 'B', text: "Rely on manual customer complaint tickets to determine whether a newly deployed release is functional." },
      { id: 'C', text: "Deploy new releases immediately to 100% of production traffic during peak business hours without monitoring." },
      { id: 'D', text: "Prohibit updating production software to avoid any potential downtime." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement progressive delivery using Argo Rollouts or Flagger to execute automated canary analysis and dynamic traffic shifting. Progressive delivery builds upon continuous delivery by introducing automated, metric-driven rollouts. Controllers like Argo Rollouts or Flagger shift a small percentage of traffic (e.g., 5% -&gt; 20% -&gt; 100%) to the canary, analyzing Prometheus metrics and automatically rolling back if latency or HTTP errors breach thresholds.",
    referenceUrl: "https://argoproj.github.io/argo-rollouts/",
    tags: ["Progressive Delivery", "Progressive Delivery", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-407",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Progressive Delivery and Automated Canary Rollouts: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Progressive Delivery to roll out a new version of a critical payments service gradually to 5% of customer traffic while automatically aborting if error rates spike.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Fine-grained traffic shifting and automated metric analysis using Argo Rollouts or Flagger is under consideration.",
    options: [
      { id: 'A', text: "Implement progressive delivery using Argo Rollouts or Flagger to execute automated canary analysis and dynamic traffic shifting." },
      { id: 'B', text: "Prohibit updating production software to avoid any potential downtime." },
      { id: 'C', text: "Rely on manual customer complaint tickets to determine whether a newly deployed release is functional." },
      { id: 'D', text: "Deploy new releases immediately to 100% of production traffic during peak business hours without monitoring." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement progressive delivery using Argo Rollouts or Flagger to execute automated canary analysis and dynamic traffic shifting. Progressive delivery builds upon continuous delivery by introducing automated, metric-driven rollouts. Controllers like Argo Rollouts or Flagger shift a small percentage of traffic (e.g., 5% -&gt; 20% -&gt; 100%) to the canary, analyzing Prometheus metrics and automatically rolling back if latency or HTTP errors breach thresholds.",
    referenceUrl: "https://argoproj.github.io/argo-rollouts/",
    tags: ["Progressive Delivery", "Progressive Delivery", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-408",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Progressive Delivery and Automated Canary Rollouts: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Progressive Delivery to roll out a new version of a critical payments service gradually to 5% of customer traffic while automatically aborting if error rates spike.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Fine-grained traffic shifting and automated metric analysis using Argo Rollouts or Flagger is under consideration.",
    options: [
      { id: 'A', text: "Deploy new releases immediately to 100% of production traffic during peak business hours without monitoring." },
      { id: 'B', text: "Rely on manual customer complaint tickets to determine whether a newly deployed release is functional." },
      { id: 'C', text: "Prohibit updating production software to avoid any potential downtime." },
      { id: 'D', text: "Implement progressive delivery using Argo Rollouts or Flagger to execute automated canary analysis and dynamic traffic shifting." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement progressive delivery using Argo Rollouts or Flagger to execute automated canary analysis and dynamic traffic shifting. Progressive delivery builds upon continuous delivery by introducing automated, metric-driven rollouts. Controllers like Argo Rollouts or Flagger shift a small percentage of traffic (e.g., 5% -&gt; 20% -&gt; 100%) to the canary, analyzing Prometheus metrics and automatically rolling back if latency or HTTP errors breach thresholds.",
    referenceUrl: "https://argoproj.github.io/argo-rollouts/",
    tags: ["Progressive Delivery", "Progressive Delivery", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-409",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Progressive Delivery and Automated Canary Rollouts: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Progressive Delivery to roll out a new version of a critical payments service gradually to 5% of customer traffic while automatically aborting if error rates spike.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Fine-grained traffic shifting and automated metric analysis using Argo Rollouts or Flagger is under consideration.",
    options: [
      { id: 'A', text: "Prohibit updating production software to avoid any potential downtime." },
      { id: 'B', text: "Implement progressive delivery using Argo Rollouts or Flagger to execute automated canary analysis and dynamic traffic shifting." },
      { id: 'C', text: "Deploy new releases immediately to 100% of production traffic during peak business hours without monitoring." },
      { id: 'D', text: "Rely on manual customer complaint tickets to determine whether a newly deployed release is functional." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement progressive delivery using Argo Rollouts or Flagger to execute automated canary analysis and dynamic traffic shifting. Progressive delivery builds upon continuous delivery by introducing automated, metric-driven rollouts. Controllers like Argo Rollouts or Flagger shift a small percentage of traffic (e.g., 5% -&gt; 20% -&gt; 100%) to the canary, analyzing Prometheus metrics and automatically rolling back if latency or HTTP errors breach thresholds.",
    referenceUrl: "https://argoproj.github.io/argo-rollouts/",
    tags: ["Progressive Delivery", "Progressive Delivery", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-410",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Progressive Delivery and Automated Canary Rollouts: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Progressive Delivery to roll out a new version of a critical payments service gradually to 5% of customer traffic while automatically aborting if error rates spike.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Fine-grained traffic shifting and automated metric analysis using Argo Rollouts or Flagger is under consideration.",
    options: [
      { id: 'A', text: "Prohibit updating production software to avoid any potential downtime." },
      { id: 'B', text: "Deploy new releases immediately to 100% of production traffic during peak business hours without monitoring." },
      { id: 'C', text: "Rely on manual customer complaint tickets to determine whether a newly deployed release is functional." },
      { id: 'D', text: "Implement progressive delivery using Argo Rollouts or Flagger to execute automated canary analysis and dynamic traffic shifting." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement progressive delivery using Argo Rollouts or Flagger to execute automated canary analysis and dynamic traffic shifting. Progressive delivery builds upon continuous delivery by introducing automated, metric-driven rollouts. Controllers like Argo Rollouts or Flagger shift a small percentage of traffic (e.g., 5% -&gt; 20% -&gt; 100%) to the canary, analyzing Prometheus metrics and automatically rolling back if latency or HTTP errors breach thresholds.",
    referenceUrl: "https://argoproj.github.io/argo-rollouts/",
    tags: ["Progressive Delivery", "Progressive Delivery", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-411",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Automated Quality Gates and Contract Testing: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Quality Gates to prevent breaking API schema changes from deploying to staging or production environments and breaking dependent services.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Enforcing consumer-driven contract testing (Pact) and automated smoke tests in delivery pipelines is under consideration.",
    options: [
      { id: 'A', text: "Instruct teams to never alter any API endpoints under any circumstances." },
      { id: 'B', text: "Disable all automated integration tests to improve build pipeline speed." },
      { id: 'C', text: "Deploy changes directly to production and wait for downstream dependent teams to discover broken endpoints." },
      { id: 'D', text: "Integrate automated contract testing (such as Pact) and integration quality gates into the continuous delivery pipeline." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Integrate automated contract testing (such as Pact) and integration quality gates into the continuous delivery pipeline. Platform golden paths incorporate automated quality gates. By utilizing consumer-driven contract testing frameworks (like Pact) and automated smoke tests, pipelines detect breaking API schema modifications before code ever deploys to shared environments.",
    referenceUrl: "https://docs.pact.io/",
    tags: ["Quality Gates", "Quality Gates", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-412",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Automated Quality Gates and Contract Testing: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Quality Gates to prevent breaking API schema changes from deploying to staging or production environments and breaking dependent services.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Enforcing consumer-driven contract testing (Pact) and automated smoke tests in delivery pipelines is under consideration.",
    options: [
      { id: 'A', text: "Disable all automated integration tests to improve build pipeline speed." },
      { id: 'B', text: "Deploy changes directly to production and wait for downstream dependent teams to discover broken endpoints." },
      { id: 'C', text: "Integrate automated contract testing (such as Pact) and integration quality gates into the continuous delivery pipeline." },
      { id: 'D', text: "Instruct teams to never alter any API endpoints under any circumstances." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Integrate automated contract testing (such as Pact) and integration quality gates into the continuous delivery pipeline. Platform golden paths incorporate automated quality gates. By utilizing consumer-driven contract testing frameworks (like Pact) and automated smoke tests, pipelines detect breaking API schema modifications before code ever deploys to shared environments.",
    referenceUrl: "https://docs.pact.io/",
    tags: ["Quality Gates", "Quality Gates", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-413",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Automated Quality Gates and Contract Testing: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Quality Gates to prevent breaking API schema changes from deploying to staging or production environments and breaking dependent services.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Enforcing consumer-driven contract testing (Pact) and automated smoke tests in delivery pipelines is under consideration.",
    options: [
      { id: 'A', text: "Integrate automated contract testing (such as Pact) and integration quality gates into the continuous delivery pipeline." },
      { id: 'B', text: "Instruct teams to never alter any API endpoints under any circumstances." },
      { id: 'C', text: "Deploy changes directly to production and wait for downstream dependent teams to discover broken endpoints." },
      { id: 'D', text: "Disable all automated integration tests to improve build pipeline speed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate automated contract testing (such as Pact) and integration quality gates into the continuous delivery pipeline. Platform golden paths incorporate automated quality gates. By utilizing consumer-driven contract testing frameworks (like Pact) and automated smoke tests, pipelines detect breaking API schema modifications before code ever deploys to shared environments.",
    referenceUrl: "https://docs.pact.io/",
    tags: ["Quality Gates", "Quality Gates", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-414",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Automated Quality Gates and Contract Testing: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Quality Gates to prevent breaking API schema changes from deploying to staging or production environments and breaking dependent services.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Enforcing consumer-driven contract testing (Pact) and automated smoke tests in delivery pipelines is under consideration.",
    options: [
      { id: 'A', text: "Integrate automated contract testing (such as Pact) and integration quality gates into the continuous delivery pipeline." },
      { id: 'B', text: "Deploy changes directly to production and wait for downstream dependent teams to discover broken endpoints." },
      { id: 'C', text: "Instruct teams to never alter any API endpoints under any circumstances." },
      { id: 'D', text: "Disable all automated integration tests to improve build pipeline speed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate automated contract testing (such as Pact) and integration quality gates into the continuous delivery pipeline. Platform golden paths incorporate automated quality gates. By utilizing consumer-driven contract testing frameworks (like Pact) and automated smoke tests, pipelines detect breaking API schema modifications before code ever deploys to shared environments.",
    referenceUrl: "https://docs.pact.io/",
    tags: ["Quality Gates", "Quality Gates", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-415",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Automated Quality Gates and Contract Testing: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Quality Gates to prevent breaking API schema changes from deploying to staging or production environments and breaking dependent services.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Enforcing consumer-driven contract testing (Pact) and automated smoke tests in delivery pipelines is under consideration.",
    options: [
      { id: 'A', text: "Disable all automated integration tests to improve build pipeline speed." },
      { id: 'B', text: "Instruct teams to never alter any API endpoints under any circumstances." },
      { id: 'C', text: "Deploy changes directly to production and wait for downstream dependent teams to discover broken endpoints." },
      { id: 'D', text: "Integrate automated contract testing (such as Pact) and integration quality gates into the continuous delivery pipeline." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Integrate automated contract testing (such as Pact) and integration quality gates into the continuous delivery pipeline. Platform golden paths incorporate automated quality gates. By utilizing consumer-driven contract testing frameworks (like Pact) and automated smoke tests, pipelines detect breaking API schema modifications before code ever deploys to shared environments.",
    referenceUrl: "https://docs.pact.io/",
    tags: ["Quality Gates", "Quality Gates", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-416",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Automated Security Scanning: SAST, DAST, and Container CVEs: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Security Gates to detect critical vulnerabilities in open-source dependencies and base container images before workloads reach production.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Embedding Trivy, Grype, and static analysis tools into delivery pipelines to block vulnerabilities is under consideration.",
    options: [
      { id: 'A', text: "Disable vulnerability scanners because they generate security warnings that delay deployment deadlines." },
      { id: 'B', text: "Integrate automated container image scanning (e.g., Trivy, Grype) and SAST into CI pipelines to block builds containing critical CVEs." },
      { id: 'C', text: "Rely on developers to visually inspect compiled container binary files for malicious exploits." },
      { id: 'D', text: "Scan production containers once every three years using manual penetration testers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Integrate automated container image scanning (e.g., Trivy, Grype) and SAST into CI pipelines to block builds containing critical CVEs. Golden paths embed security early in the developer lifecycle ('shift left'). CI/CD pipelines automatically execute Static Application Security Testing (SAST) and container vulnerability scanning (using Trivy or Grype), halting pipelines when unpatched high or critical CVEs are detected.",
    referenceUrl: "https://aquasecurity.github.io/trivy/",
    tags: ["Security Gates", "Security Scanning", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-417",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Automated Security Scanning: SAST, DAST, and Container CVEs: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Security Gates to detect critical vulnerabilities in open-source dependencies and base container images before workloads reach production.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Embedding Trivy, Grype, and static analysis tools into delivery pipelines to block vulnerabilities is under consideration.",
    options: [
      { id: 'A', text: "Scan production containers once every three years using manual penetration testers." },
      { id: 'B', text: "Integrate automated container image scanning (e.g., Trivy, Grype) and SAST into CI pipelines to block builds containing critical CVEs." },
      { id: 'C', text: "Disable vulnerability scanners because they generate security warnings that delay deployment deadlines." },
      { id: 'D', text: "Rely on developers to visually inspect compiled container binary files for malicious exploits." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Integrate automated container image scanning (e.g., Trivy, Grype) and SAST into CI pipelines to block builds containing critical CVEs. Golden paths embed security early in the developer lifecycle ('shift left'). CI/CD pipelines automatically execute Static Application Security Testing (SAST) and container vulnerability scanning (using Trivy or Grype), halting pipelines when unpatched high or critical CVEs are detected.",
    referenceUrl: "https://aquasecurity.github.io/trivy/",
    tags: ["Security Gates", "Security Scanning", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-418",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Automated Security Scanning: SAST, DAST, and Container CVEs: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Security Gates to detect critical vulnerabilities in open-source dependencies and base container images before workloads reach production.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Embedding Trivy, Grype, and static analysis tools into delivery pipelines to block vulnerabilities is under consideration.",
    options: [
      { id: 'A', text: "Rely on developers to visually inspect compiled container binary files for malicious exploits." },
      { id: 'B', text: "Disable vulnerability scanners because they generate security warnings that delay deployment deadlines." },
      { id: 'C', text: "Scan production containers once every three years using manual penetration testers." },
      { id: 'D', text: "Integrate automated container image scanning (e.g., Trivy, Grype) and SAST into CI pipelines to block builds containing critical CVEs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Integrate automated container image scanning (e.g., Trivy, Grype) and SAST into CI pipelines to block builds containing critical CVEs. Golden paths embed security early in the developer lifecycle ('shift left'). CI/CD pipelines automatically execute Static Application Security Testing (SAST) and container vulnerability scanning (using Trivy or Grype), halting pipelines when unpatched high or critical CVEs are detected.",
    referenceUrl: "https://aquasecurity.github.io/trivy/",
    tags: ["Security Gates", "Security Scanning", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-419",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Automated Security Scanning: SAST, DAST, and Container CVEs: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Security Gates to detect critical vulnerabilities in open-source dependencies and base container images before workloads reach production.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Embedding Trivy, Grype, and static analysis tools into delivery pipelines to block vulnerabilities is under consideration.",
    options: [
      { id: 'A', text: "Integrate automated container image scanning (e.g., Trivy, Grype) and SAST into CI pipelines to block builds containing critical CVEs." },
      { id: 'B', text: "Disable vulnerability scanners because they generate security warnings that delay deployment deadlines." },
      { id: 'C', text: "Rely on developers to visually inspect compiled container binary files for malicious exploits." },
      { id: 'D', text: "Scan production containers once every three years using manual penetration testers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate automated container image scanning (e.g., Trivy, Grype) and SAST into CI pipelines to block builds containing critical CVEs. Golden paths embed security early in the developer lifecycle ('shift left'). CI/CD pipelines automatically execute Static Application Security Testing (SAST) and container vulnerability scanning (using Trivy or Grype), halting pipelines when unpatched high or critical CVEs are detected.",
    referenceUrl: "https://aquasecurity.github.io/trivy/",
    tags: ["Security Gates", "Security Scanning", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-420",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Automated Security Scanning: SAST, DAST, and Container CVEs: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Security Gates to detect critical vulnerabilities in open-source dependencies and base container images before workloads reach production.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Embedding Trivy, Grype, and static analysis tools into delivery pipelines to block vulnerabilities is under consideration.",
    options: [
      { id: 'A', text: "Disable vulnerability scanners because they generate security warnings that delay deployment deadlines." },
      { id: 'B', text: "Integrate automated container image scanning (e.g., Trivy, Grype) and SAST into CI pipelines to block builds containing critical CVEs." },
      { id: 'C', text: "Scan production containers once every three years using manual penetration testers." },
      { id: 'D', text: "Rely on developers to visually inspect compiled container binary files for malicious exploits." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Integrate automated container image scanning (e.g., Trivy, Grype) and SAST into CI pipelines to block builds containing critical CVEs. Golden paths embed security early in the developer lifecycle ('shift left'). CI/CD pipelines automatically execute Static Application Security Testing (SAST) and container vulnerability scanning (using Trivy or Grype), halting pipelines when unpatched high or critical CVEs are detected.",
    referenceUrl: "https://aquasecurity.github.io/trivy/",
    tags: ["Security Gates", "Security Scanning", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-421",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Software Supply Chain Security: SBOM and Cryptographic Signing: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Supply Chain Security to guarantee that only verified, tamper-proof container images built by authorized CI pipelines can execute in production clusters.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Generating Software Bills of Materials (Syft) and cryptographically signing images with Cosign is under consideration.",
    options: [
      { id: 'A', text: "Allow clusters to pull untracked, unsigned container images from arbitrary public repositories." },
      { id: 'B', text: "Disable admission controllers that verify image provenance." },
      { id: 'C', text: "Store signing private keys in plaintext in public GitHub repositories." },
      { id: 'D', text: "Generate Software Bills of Materials (SBOMs) using Syft and cryptographically sign container images using Cosign (Sigstore)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Generate Software Bills of Materials (SBOMs) using Syft and cryptographically sign container images using Cosign (Sigstore). Securing the software supply chain requires cryptographic provenance. Golden paths generate Software Bills of Materials (SBOMs) to track dependencies and sign images with Cosign (Sigstore). Kubernetes admission controllers then verify signatures before allowing pods to run.",
    referenceUrl: "https://docs.sigstore.dev/cosign/overview/",
    tags: ["Supply Chain Security", "Supply Chain Security", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-422",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Software Supply Chain Security: SBOM and Cryptographic Signing: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Supply Chain Security to guarantee that only verified, tamper-proof container images built by authorized CI pipelines can execute in production clusters.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Generating Software Bills of Materials (Syft) and cryptographically signing images with Cosign is under consideration.",
    options: [
      { id: 'A', text: "Disable admission controllers that verify image provenance." },
      { id: 'B', text: "Allow clusters to pull untracked, unsigned container images from arbitrary public repositories." },
      { id: 'C', text: "Store signing private keys in plaintext in public GitHub repositories." },
      { id: 'D', text: "Generate Software Bills of Materials (SBOMs) using Syft and cryptographically sign container images using Cosign (Sigstore)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Generate Software Bills of Materials (SBOMs) using Syft and cryptographically sign container images using Cosign (Sigstore). Securing the software supply chain requires cryptographic provenance. Golden paths generate Software Bills of Materials (SBOMs) to track dependencies and sign images with Cosign (Sigstore). Kubernetes admission controllers then verify signatures before allowing pods to run.",
    referenceUrl: "https://docs.sigstore.dev/cosign/overview/",
    tags: ["Supply Chain Security", "Supply Chain Security", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-423",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Software Supply Chain Security: SBOM and Cryptographic Signing: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Supply Chain Security to guarantee that only verified, tamper-proof container images built by authorized CI pipelines can execute in production clusters.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Generating Software Bills of Materials (Syft) and cryptographically signing images with Cosign is under consideration.",
    options: [
      { id: 'A', text: "Disable admission controllers that verify image provenance." },
      { id: 'B', text: "Generate Software Bills of Materials (SBOMs) using Syft and cryptographically sign container images using Cosign (Sigstore)." },
      { id: 'C', text: "Allow clusters to pull untracked, unsigned container images from arbitrary public repositories." },
      { id: 'D', text: "Store signing private keys in plaintext in public GitHub repositories." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Generate Software Bills of Materials (SBOMs) using Syft and cryptographically sign container images using Cosign (Sigstore). Securing the software supply chain requires cryptographic provenance. Golden paths generate Software Bills of Materials (SBOMs) to track dependencies and sign images with Cosign (Sigstore). Kubernetes admission controllers then verify signatures before allowing pods to run.",
    referenceUrl: "https://docs.sigstore.dev/cosign/overview/",
    tags: ["Supply Chain Security", "Supply Chain Security", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-424",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Software Supply Chain Security: SBOM and Cryptographic Signing: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Supply Chain Security to guarantee that only verified, tamper-proof container images built by authorized CI pipelines can execute in production clusters.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Generating Software Bills of Materials (Syft) and cryptographically signing images with Cosign is under consideration.",
    options: [
      { id: 'A', text: "Generate Software Bills of Materials (SBOMs) using Syft and cryptographically sign container images using Cosign (Sigstore)." },
      { id: 'B', text: "Disable admission controllers that verify image provenance." },
      { id: 'C', text: "Allow clusters to pull untracked, unsigned container images from arbitrary public repositories." },
      { id: 'D', text: "Store signing private keys in plaintext in public GitHub repositories." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate Software Bills of Materials (SBOMs) using Syft and cryptographically sign container images using Cosign (Sigstore). Securing the software supply chain requires cryptographic provenance. Golden paths generate Software Bills of Materials (SBOMs) to track dependencies and sign images with Cosign (Sigstore). Kubernetes admission controllers then verify signatures before allowing pods to run.",
    referenceUrl: "https://docs.sigstore.dev/cosign/overview/",
    tags: ["Supply Chain Security", "Supply Chain Security", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-425",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Software Supply Chain Security: SBOM and Cryptographic Signing: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Supply Chain Security to guarantee that only verified, tamper-proof container images built by authorized CI pipelines can execute in production clusters.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Generating Software Bills of Materials (Syft) and cryptographically signing images with Cosign is under consideration.",
    options: [
      { id: 'A', text: "Allow clusters to pull untracked, unsigned container images from arbitrary public repositories." },
      { id: 'B', text: "Generate Software Bills of Materials (SBOMs) using Syft and cryptographically sign container images using Cosign (Sigstore)." },
      { id: 'C', text: "Disable admission controllers that verify image provenance." },
      { id: 'D', text: "Store signing private keys in plaintext in public GitHub repositories." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Generate Software Bills of Materials (SBOMs) using Syft and cryptographically sign container images using Cosign (Sigstore). Securing the software supply chain requires cryptographic provenance. Golden paths generate Software Bills of Materials (SBOMs) to track dependencies and sign images with Cosign (Sigstore). Kubernetes admission controllers then verify signatures before allowing pods to run.",
    referenceUrl: "https://docs.sigstore.dev/cosign/overview/",
    tags: ["Supply Chain Security", "Supply Chain Security", "Resilience And Observability"]
  }
];

export default CNCF_CNPA_QUESTIONS_17;
