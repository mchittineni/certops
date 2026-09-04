export const HASHICORP_TFP_FLASHCARDS_17 = [
  {
    id: "hashicorp-tfp-fc-401",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    front: "Cross-Workspace State Sharing in HCP Terraform (Dr Failover)",
    hint: "Sharing outputs securely across workspaces using fine-grained permissions.",
    back: "Using <strong>workspace sharing permissions with tfe_outputs</strong> in HCP Terraform allows downstream workspaces to consume upstream networking attributes without granting raw state access.",
    tags: ["Cross-State Sharing", "Workspace State Sharing", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-fc-402",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    front: "Cross-Workspace State Sharing in HCP Terraform (High Load Scale)",
    hint: "Sharing outputs securely across workspaces using fine-grained permissions.",
    back: "Using <strong>workspace sharing permissions with tfe_outputs</strong> in HCP Terraform allows downstream workspaces to consume upstream networking attributes without granting raw state access.",
    tags: ["Cross-State Sharing", "Workspace State Sharing", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-fc-403",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    front: "Cross-Workspace State Sharing in HCP Terraform (Security Compliance)",
    hint: "Sharing outputs securely across workspaces using fine-grained permissions.",
    back: "Using <strong>workspace sharing permissions with tfe_outputs</strong> in HCP Terraform allows downstream workspaces to consume upstream networking attributes without granting raw state access.",
    tags: ["Cross-State Sharing", "Workspace State Sharing", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-fc-404",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    front: "Cross-Workspace State Sharing in HCP Terraform (Hybrid Migration)",
    hint: "Sharing outputs securely across workspaces using fine-grained permissions.",
    back: "Using <strong>workspace sharing permissions with tfe_outputs</strong> in HCP Terraform allows downstream workspaces to consume upstream networking attributes without granting raw state access.",
    tags: ["Cross-State Sharing", "Workspace State Sharing", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-fc-405",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    front: "Cross-Workspace State Sharing in HCP Terraform (Resilience Failure)",
    hint: "Sharing outputs securely across workspaces using fine-grained permissions.",
    back: "Using <strong>workspace sharing permissions with tfe_outputs</strong> in HCP Terraform allows downstream workspaces to consume upstream networking attributes without granting raw state access.",
    tags: ["Cross-State Sharing", "Workspace State Sharing", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-fc-406",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    front: "Forcing Resource Recreation with -replace (Dr Failover)",
    hint: "Modern replacement for deprecated taint using -replace on plan/apply.",
    back: "The <strong>-replace flag</strong> on <code>terraform plan/apply</code> forces resource destruction and recreation without modifying state beforehand, serving as the modern replacement for <code>terraform taint</code>.",
    tags: ["CLI Replace", "terraform apply -replace", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-fc-407",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    front: "Forcing Resource Recreation with -replace (High Load Scale)",
    hint: "Modern replacement for deprecated taint using -replace on plan/apply.",
    back: "The <strong>-replace flag</strong> on <code>terraform plan/apply</code> forces resource destruction and recreation without modifying state beforehand, serving as the modern replacement for <code>terraform taint</code>.",
    tags: ["CLI Replace", "terraform apply -replace", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-fc-408",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    front: "Forcing Resource Recreation with -replace (Security Compliance)",
    hint: "Modern replacement for deprecated taint using -replace on plan/apply.",
    back: "The <strong>-replace flag</strong> on <code>terraform plan/apply</code> forces resource destruction and recreation without modifying state beforehand, serving as the modern replacement for <code>terraform taint</code>.",
    tags: ["CLI Replace", "terraform apply -replace", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-fc-409",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    front: "Forcing Resource Recreation with -replace (Hybrid Migration)",
    hint: "Modern replacement for deprecated taint using -replace on plan/apply.",
    back: "The <strong>-replace flag</strong> on <code>terraform plan/apply</code> forces resource destruction and recreation without modifying state beforehand, serving as the modern replacement for <code>terraform taint</code>.",
    tags: ["CLI Replace", "terraform apply -replace", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-fc-410",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    front: "Forcing Resource Recreation with -replace (Resilience Failure)",
    hint: "Modern replacement for deprecated taint using -replace on plan/apply.",
    back: "The <strong>-replace flag</strong> on <code>terraform plan/apply</code> forces resource destruction and recreation without modifying state beforehand, serving as the modern replacement for <code>terraform taint</code>.",
    tags: ["CLI Replace", "terraform apply -replace", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-fc-411",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    front: "Terraform CI/CD Pipeline Automation Patterns (Dr Failover)",
    hint: "Enforcing speculative plan reviews and applying immutable plan artifacts.",
    back: "Automating Terraform in CI/CD requires generating <strong>saved plan files (-out=tfplan)</strong> during PR review and applying that exact artifact upon merge, preventing race conditions and drift.",
    tags: ["CI/CD Automation", "CI/CD Workflows", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-fc-412",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    front: "Terraform CI/CD Pipeline Automation Patterns (High Load Scale)",
    hint: "Enforcing speculative plan reviews and applying immutable plan artifacts.",
    back: "Automating Terraform in CI/CD requires generating <strong>saved plan files (-out=tfplan)</strong> during PR review and applying that exact artifact upon merge, preventing race conditions and drift.",
    tags: ["CI/CD Automation", "CI/CD Workflows", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-fc-413",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    front: "Terraform CI/CD Pipeline Automation Patterns (Security Compliance)",
    hint: "Enforcing speculative plan reviews and applying immutable plan artifacts.",
    back: "Automating Terraform in CI/CD requires generating <strong>saved plan files (-out=tfplan)</strong> during PR review and applying that exact artifact upon merge, preventing race conditions and drift.",
    tags: ["CI/CD Automation", "CI/CD Workflows", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-fc-414",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    front: "Terraform CI/CD Pipeline Automation Patterns (Hybrid Migration)",
    hint: "Enforcing speculative plan reviews and applying immutable plan artifacts.",
    back: "Automating Terraform in CI/CD requires generating <strong>saved plan files (-out=tfplan)</strong> during PR review and applying that exact artifact upon merge, preventing race conditions and drift.",
    tags: ["CI/CD Automation", "CI/CD Workflows", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-fc-415",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    front: "Terraform CI/CD Pipeline Automation Patterns (Resilience Failure)",
    hint: "Enforcing speculative plan reviews and applying immutable plan artifacts.",
    back: "Automating Terraform in CI/CD requires generating <strong>saved plan files (-out=tfplan)</strong> during PR review and applying that exact artifact upon merge, preventing race conditions and drift.",
    tags: ["CI/CD Automation", "CI/CD Workflows", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-fc-416",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    front: "Policy as Code Enforcement (Sentinel / OPA) (Dr Failover)",
    hint: "Blocking non-compliant infrastructure changes between plan and apply.",
    back: "<strong>Policy as Code (Sentinel / OPA)</strong> evaluates execution plans against security guardrails pre-apply, automatically blocking oversized instances or unencrypted storage before provisioning.",
    tags: ["Policy as Code", "Policy as Code", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-fc-417",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    front: "Policy as Code Enforcement (Sentinel / OPA) (High Load Scale)",
    hint: "Blocking non-compliant infrastructure changes between plan and apply.",
    back: "<strong>Policy as Code (Sentinel / OPA)</strong> evaluates execution plans against security guardrails pre-apply, automatically blocking oversized instances or unencrypted storage before provisioning.",
    tags: ["Policy as Code", "Policy as Code", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-fc-418",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    front: "Policy as Code Enforcement (Sentinel / OPA) (Security Compliance)",
    hint: "Blocking non-compliant infrastructure changes between plan and apply.",
    back: "<strong>Policy as Code (Sentinel / OPA)</strong> evaluates execution plans against security guardrails pre-apply, automatically blocking oversized instances or unencrypted storage before provisioning.",
    tags: ["Policy as Code", "Policy as Code", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-fc-419",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    front: "Policy as Code Enforcement (Sentinel / OPA) (Hybrid Migration)",
    hint: "Blocking non-compliant infrastructure changes between plan and apply.",
    back: "<strong>Policy as Code (Sentinel / OPA)</strong> evaluates execution plans against security guardrails pre-apply, automatically blocking oversized instances or unencrypted storage before provisioning.",
    tags: ["Policy as Code", "Policy as Code", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-fc-420",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    front: "Policy as Code Enforcement (Sentinel / OPA) (Resilience Failure)",
    hint: "Blocking non-compliant infrastructure changes between plan and apply.",
    back: "<strong>Policy as Code (Sentinel / OPA)</strong> evaluates execution plans against security guardrails pre-apply, automatically blocking oversized instances or unencrypted storage before provisioning.",
    tags: ["Policy as Code", "Policy as Code", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-fc-421",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    front: "Automated Cost Estimation in Pull Requests (Dr Failover)",
    hint: "Previewing infrastructure spending impacts during plan generation.",
    back: "Integrating <strong>cost estimation</strong> into Terraform PR pipelines calculates monthly financial impacts before apply, enabling teams to prevent budget overruns proactively.",
    tags: ["Cost Estimation", "Cost Estimation", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-fc-422",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    front: "Automated Cost Estimation in Pull Requests (High Load Scale)",
    hint: "Previewing infrastructure spending impacts during plan generation.",
    back: "Integrating <strong>cost estimation</strong> into Terraform PR pipelines calculates monthly financial impacts before apply, enabling teams to prevent budget overruns proactively.",
    tags: ["Cost Estimation", "Cost Estimation", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-fc-423",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    front: "Automated Cost Estimation in Pull Requests (Security Compliance)",
    hint: "Previewing infrastructure spending impacts during plan generation.",
    back: "Integrating <strong>cost estimation</strong> into Terraform PR pipelines calculates monthly financial impacts before apply, enabling teams to prevent budget overruns proactively.",
    tags: ["Cost Estimation", "Cost Estimation", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-fc-424",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    front: "Automated Cost Estimation in Pull Requests (Hybrid Migration)",
    hint: "Previewing infrastructure spending impacts during plan generation.",
    back: "Integrating <strong>cost estimation</strong> into Terraform PR pipelines calculates monthly financial impacts before apply, enabling teams to prevent budget overruns proactively.",
    tags: ["Cost Estimation", "Cost Estimation", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-fc-425",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    front: "Automated Cost Estimation in Pull Requests (Resilience Failure)",
    hint: "Previewing infrastructure spending impacts during plan generation.",
    back: "Integrating <strong>cost estimation</strong> into Terraform PR pipelines calculates monthly financial impacts before apply, enabling teams to prevent budget overruns proactively.",
    tags: ["Cost Estimation", "Cost Estimation", "Resilience Failure"]
  }
];

export default HASHICORP_TFP_FLASHCARDS_17;
