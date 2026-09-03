export const HASHICORP_TFA_FLASHCARDS_1 = [
  {
    id: "hashicorp-tfa-fc-1",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "IaC: Declarative vs. Imperative",
    hint: "Desired end-state vs step-by-step instructions.",
    back: "<strong>Declarative IaC</strong> defines what the end-state should look like (Terraform calculates the diff); <strong>Imperative IaC</strong> scripts explicit procedural commands.",
    tags: ["IaC", "Declarative", "Terraform Concepts"]
  },
  {
    id: "hashicorp-tfa-fc-2",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "IaC: Idempotency",
    hint: "Consistent results across repeated executions.",
    back: "<strong>Idempotency</strong> guarantees that running <code>terraform apply</code> repeatedly on unchanged configurations makes <strong>zero modifications</strong>.",
    tags: ["IaC", "Idempotency", "Core Concepts"]
  },
  {
    id: "hashicorp-tfa-fc-3",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "IaC: Version Control Benefits",
    hint: "Peer reviews, change tracking, and auditability.",
    back: "Storing IaC in <strong>version control (Git)</strong> enables peer reviews, automated CI/CD validation, and complete historical auditability of all infrastructure changes.",
    tags: ["IaC", "Version Control", "GitOps"]
  },
  {
    id: "hashicorp-tfa-fc-4",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "IaC: Configuration Drift Reconciliation",
    hint: "Reverting out-of-band manual console edits.",
    back: "Terraform detects <strong>configuration drift</strong> by querying cloud APIs, proposing changes to revert unauthorized manual modifications back to declared code.",
    tags: ["IaC", "Configuration Drift", "State Refresh"]
  },
  {
    id: "hashicorp-tfa-fc-5",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "IaC: Cloud-Agnostic Workflow",
    hint: "Unified HCL workflow across multi-cloud environments.",
    back: "Terraform provides a <strong>cloud-agnostic workflow</strong> (HCL + Providers) that manages AWS, Azure, GCP, and Kubernetes with consistent tooling.",
    tags: ["IaC", "Cloud-Agnostic", "Providers"]
  },
  {
    id: "hashicorp-tfa-fc-6",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "IaC Mental Model: Cattle vs. Pets",
    hint: "Disposable, automated infrastructure.",
    back: "In modern cloud architectures, servers are treated as <strong>disposable cattle</strong> (terminated and replaced automatically) rather than irreplaceable pets requiring manual fixes.",
    tags: ["IaC", "Cattle vs Pets", "Immutable Infrastructure"]
  },
  {
    id: "hashicorp-tfa-fc-7",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "IaC Lifecycle: Day 0 vs. Day 1 vs. Day 2",
    hint: "Planning, deployment, and ongoing operations.",
    back: "<strong>Day 0</strong> is architectural planning; <strong>Day 1</strong> is initial provisioning; <strong>Day 2</strong> covers ongoing maintenance, scaling, and drift reconciliation.",
    tags: ["IaC", "Lifecycle", "Day 2 Operations"]
  },
  {
    id: "hashicorp-tfa-fc-8",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "IaC: Environment Parity",
    hint: "Identical infrastructure across Dev, Stage, and Prod.",
    back: "IaC guarantees <strong>environment parity</strong> by provisioning Dev, Staging, and Prod from identical reusable code modules with parameterized inputs.",
    tags: ["IaC", "Environment Parity", "Repeatability"]
  },
  {
    id: "hashicorp-tfa-fc-9",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "IaC: Living Documentation",
    hint: "Code as the authoritative architectural blueprint.",
    back: "Declarative IaC acts as <strong>self-documenting infrastructure</strong>; the version-controlled codebase represents the accurate, active blueprint of cloud environments.",
    tags: ["IaC", "Documentation", "HCL"]
  },
  {
    id: "hashicorp-tfa-fc-10",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "IaC: Rapid Disaster Recovery",
    hint: "Restoring full stacks in minutes via automated pipelines.",
    back: "IaC minimizes <strong>Recovery Time Objective (RTO)</strong> during disaster recovery by enabling teams to deploy complete, identical cloud topologies to secondary regions in minutes.",
    tags: ["IaC", "Disaster Recovery", "RTO"]
  },
  {
    id: "hashicorp-tfa-fc-11",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "IaC: Immutable vs. Mutable Infrastructure",
    hint: "Replacing servers vs patching in-place.",
    back: "<strong>Immutable infrastructure</strong> deploys fresh, pre-configured servers and terminates old instances, eliminating configuration drift caused by in-place patching.",
    tags: ["IaC", "Immutable Infrastructure", "Architecture"]
  },
  {
    id: "hashicorp-tfa-fc-12",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "IaC: Static Security Scanning",
    hint: "Catching misconfigurations before deployment.",
    back: "Run <strong>static analysis scanners (tfsec, Checkov, Sentinel)</strong> in CI/CD pipelines to catch unencrypted disks and public buckets before code reaches production.",
    tags: ["IaC", "Security Scanning", "Policy as Code"]
  },
  {
    id: "hashicorp-tfa-fc-13",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "Policy as Code: Automated Guardrails",
    hint: "Enforcing organizational compliance on Terraform plans.",
    back: "<strong>Policy as Code (Sentinel/OPA)</strong> evaluates Terraform plans against compliance rules, automatically rejecting non-compliant instance types or regions.",
    tags: ["IaC", "Policy as Code", "Governance"]
  },
  {
    id: "hashicorp-tfa-fc-14",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "IaC FinOps: Shift-Left Cost Estimation",
    hint: "Visualizing financial impact before provisioning.",
    back: "Integrate <strong>Cost Estimation tools</strong> into pull requests to calculate monthly financial deltas before code is applied to cloud accounts.",
    tags: ["FinOps", "Cost Estimation", "Shift-Left"]
  },
  {
    id: "hashicorp-tfa-fc-15",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "Terraform: Dependency Graph (DAG)",
    hint: "Concurrent provisioning of independent resources.",
    back: "Terraform constructs a <strong>Directed Acyclic Graph (DAG)</strong> to map dependencies, provisioning independent resources in parallel for maximum speed.",
    tags: ["Terraform", "Dependency Graph", "DAG"]
  },
  {
    id: "hashicorp-tfa-fc-16",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "IaC: Minimizing Blast Radius",
    hint: "Decoupling state to confine operational risks.",
    back: "Decompose monolithic configurations into smaller, independent states to <strong>minimize the blast radius</strong> of accidental misconfigurations.",
    tags: ["IaC", "Blast Radius", "Architecture Best Practices"]
  },
  {
    id: "hashicorp-tfa-fc-17",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "IaC: Ephemeral Preview Environments",
    hint: "On-demand test stacks created and destroyed in CI.",
    back: "Use IaC to provision <strong>ephemeral testing environments</strong> on-demand in CI/CD pipelines, automatically running <code>terraform destroy</code> when tests finish.",
    tags: ["IaC", "Ephemeral Environments", "CI/CD"]
  },
  {
    id: "hashicorp-tfa-fc-18",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "Terraform: terraform destroy",
    hint: "Ordered teardown of all managed infrastructure.",
    back: "Run <strong>terraform destroy</strong> to safely tear down all managed infrastructure in reverse dependency order based on the state file.",
    tags: ["Terraform CLI", "terraform destroy", "Lifecycle"]
  },
  {
    id: "hashicorp-tfa-fc-19",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "IaC: Golden Images vs. UserData",
    hint: "Pre-baking dependencies for rapid boot times.",
    back: "Pre-bake dependencies into <strong>Golden Images (via Packer)</strong> to enable virtual machines to boot and serve traffic in seconds rather than minutes.",
    tags: ["IaC", "Packer", "Golden Images"]
  },
  {
    id: "hashicorp-tfa-fc-20",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "Terraform Architecture: Providers",
    hint: "Plugins translating HCL into target cloud APIs.",
    back: "<strong>Providers</strong> are modular plugins that translate declarative HCL configurations into native API calls against cloud platforms and SaaS tools.",
    tags: ["Terraform Architecture", "Providers", "Core Concepts"]
  },
  {
    id: "hashicorp-tfa-fc-21",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "Terraform: Out-of-Band Deletion Reconciliation",
    hint: "Re-creating externally deleted resources.",
    back: "If a resource is deleted out-of-band in the cloud console, Terraform detects its absence during refresh and plans to <strong>re-create the missing resource</strong>.",
    tags: ["IaC", "Configuration Drift", "Reconciliation"]
  },
  {
    id: "hashicorp-tfa-fc-22",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "Terraform: Purpose of State",
    hint: "Mapping HCL code to real-world cloud resources.",
    back: "The <strong>state file</strong> maps declared HCL resource blocks to real-world cloud IDs, tracks dependencies, and caches attributes to prevent API rate limiting.",
    tags: ["Terraform State", "Purpose of State", "Core Architecture"]
  },
  {
    id: "hashicorp-tfa-fc-23",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "Declarative Lifecycle: Removing Code Blocks",
    hint: "Automated destruction of omitted resources.",
    back: "In declarative IaC, <strong>removing a resource block from code</strong> causes Terraform to plan and execute its <strong>destruction in the cloud</strong>.",
    tags: ["IaC", "Declarative Management", "Resource Lifecycle"]
  },
  {
    id: "hashicorp-tfa-fc-24",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "Terraform Internals: Core vs. Providers",
    hint: "Graph orchestration vs API execution.",
    back: "<strong>Terraform Core</strong> handles HCL parsing, state management, and the DAG graph; <strong>Providers</strong> execute the actual cloud API requests.",
    tags: ["Terraform Architecture", "Core vs Plugins", "Internals"]
  },
  {
    id: "hashicorp-tfa-fc-25",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    front: "IaC CI/CD: Automated Pipeline Workflow",
    hint: "Speculative plan on PR, automated apply on merge.",
    back: "In CI/CD, run <strong>fmt, validate, and plan on pull requests</strong> for peer review, restricting <strong>terraform apply</strong> to merged commits on main.",
    tags: ["IaC", "CI/CD Best Practices", "GitOps"]
  }
];

export default HASHICORP_TFA_FLASHCARDS_1;
