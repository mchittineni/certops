export const HASHICORP_TFP_FLASHCARDS_14 = [
  {
    id: "hashicorp-tfp-fc-326",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Passing Providers to Child Modules (Dr Failover)",
    hint: "Mapping root provider configurations to child modules via providers meta-argument.",
    back: "Using <strong>providers = { aws = aws.alias }</strong> in module blocks passes specific provider instances into child modules, avoiding anti-pattern provider declarations inside reusable modules.",
    tags: ["Module Providers", "Module Providers", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-fc-327",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Passing Providers to Child Modules (High Load Scale)",
    hint: "Mapping root provider configurations to child modules via providers meta-argument.",
    back: "Using <strong>providers = { aws = aws.alias }</strong> in module blocks passes specific provider instances into child modules, avoiding anti-pattern provider declarations inside reusable modules.",
    tags: ["Module Providers", "Module Providers", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-fc-328",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Passing Providers to Child Modules (Security Compliance)",
    hint: "Mapping root provider configurations to child modules via providers meta-argument.",
    back: "Using <strong>providers = { aws = aws.alias }</strong> in module blocks passes specific provider instances into child modules, avoiding anti-pattern provider declarations inside reusable modules.",
    tags: ["Module Providers", "Module Providers", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-fc-329",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Passing Providers to Child Modules (Hybrid Migration)",
    hint: "Mapping root provider configurations to child modules via providers meta-argument.",
    back: "Using <strong>providers = { aws = aws.alias }</strong> in module blocks passes specific provider instances into child modules, avoiding anti-pattern provider declarations inside reusable modules.",
    tags: ["Module Providers", "Module Providers", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-fc-330",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Passing Providers to Child Modules (Resilience Failure)",
    hint: "Mapping root provider configurations to child modules via providers meta-argument.",
    back: "Using <strong>providers = { aws = aws.alias }</strong> in module blocks passes specific provider instances into child modules, avoiding anti-pattern provider declarations inside reusable modules.",
    tags: ["Module Providers", "Module Providers", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-fc-331",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Pessimistic Module Version Constraints (~&gt;) (Dr Failover)",
    hint: "Protecting against breaking major releases while accepting minor bug fixes.",
    back: "Specifying <strong>version = \"~&gt; 3.2\"</strong> on module invocations allows backward-compatible minor updates while blocking breaking major version jumps, ensuring deployment stability.",
    tags: ["Module Pinning", "Module Pinning", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-fc-332",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Pessimistic Module Version Constraints (~&gt;) (High Load Scale)",
    hint: "Protecting against breaking major releases while accepting minor bug fixes.",
    back: "Specifying <strong>version = \"~&gt; 3.2\"</strong> on module invocations allows backward-compatible minor updates while blocking breaking major version jumps, ensuring deployment stability.",
    tags: ["Module Pinning", "Module Pinning", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-fc-333",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Pessimistic Module Version Constraints (~&gt;) (Security Compliance)",
    hint: "Protecting against breaking major releases while accepting minor bug fixes.",
    back: "Specifying <strong>version = \"~&gt; 3.2\"</strong> on module invocations allows backward-compatible minor updates while blocking breaking major version jumps, ensuring deployment stability.",
    tags: ["Module Pinning", "Module Pinning", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-fc-334",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Pessimistic Module Version Constraints (~&gt;) (Hybrid Migration)",
    hint: "Protecting against breaking major releases while accepting minor bug fixes.",
    back: "Specifying <strong>version = \"~&gt; 3.2\"</strong> on module invocations allows backward-compatible minor updates while blocking breaking major version jumps, ensuring deployment stability.",
    tags: ["Module Pinning", "Module Pinning", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-fc-335",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Pessimistic Module Version Constraints (~&gt;) (Resilience Failure)",
    hint: "Protecting against breaking major releases while accepting minor bug fixes.",
    back: "Specifying <strong>version = \"~&gt; 3.2\"</strong> on module invocations allows backward-compatible minor updates while blocking breaking major version jumps, ensuring deployment stability.",
    tags: ["Module Pinning", "Module Pinning", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-fc-336",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Native Terraform Testing Framework (terraform test) (Dr Failover)",
    hint: "Validating module logic and assertions using .tftest.hcl files.",
    back: "The native <strong>terraform test</strong> framework executes <code>.tftest.hcl</code> test suites to validate assertions and plan outcomes, delivering automated unit and integration testing for modules.",
    tags: ["Native Testing", "terraform test", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-fc-337",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Native Terraform Testing Framework (terraform test) (High Load Scale)",
    hint: "Validating module logic and assertions using .tftest.hcl files.",
    back: "The native <strong>terraform test</strong> framework executes <code>.tftest.hcl</code> test suites to validate assertions and plan outcomes, delivering automated unit and integration testing for modules.",
    tags: ["Native Testing", "terraform test", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-fc-338",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Native Terraform Testing Framework (terraform test) (Security Compliance)",
    hint: "Validating module logic and assertions using .tftest.hcl files.",
    back: "The native <strong>terraform test</strong> framework executes <code>.tftest.hcl</code> test suites to validate assertions and plan outcomes, delivering automated unit and integration testing for modules.",
    tags: ["Native Testing", "terraform test", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-fc-339",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Native Terraform Testing Framework (terraform test) (Hybrid Migration)",
    hint: "Validating module logic and assertions using .tftest.hcl files.",
    back: "The native <strong>terraform test</strong> framework executes <code>.tftest.hcl</code> test suites to validate assertions and plan outcomes, delivering automated unit and integration testing for modules.",
    tags: ["Native Testing", "terraform test", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-fc-340",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Native Terraform Testing Framework (terraform test) (Resilience Failure)",
    hint: "Validating module logic and assertions using .tftest.hcl files.",
    back: "The native <strong>terraform test</strong> framework executes <code>.tftest.hcl</code> test suites to validate assertions and plan outcomes, delivering automated unit and integration testing for modules.",
    tags: ["Native Testing", "terraform test", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-fc-341",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Mocking Providers in Unit Tests (Dr Failover)",
    hint: "Simulating cloud provider APIs in-memory for credential-free CI test runs.",
    back: "Configuring <strong>mock_provider blocks in .tftest.hcl</strong> simulates provider responses in-memory, enabling fast, isolated unit tests in CI without real cloud credentials or cost.",
    tags: ["Mock Testing", "Mock Providers", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-fc-342",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Mocking Providers in Unit Tests (High Load Scale)",
    hint: "Simulating cloud provider APIs in-memory for credential-free CI test runs.",
    back: "Configuring <strong>mock_provider blocks in .tftest.hcl</strong> simulates provider responses in-memory, enabling fast, isolated unit tests in CI without real cloud credentials or cost.",
    tags: ["Mock Testing", "Mock Providers", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-fc-343",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Mocking Providers in Unit Tests (Security Compliance)",
    hint: "Simulating cloud provider APIs in-memory for credential-free CI test runs.",
    back: "Configuring <strong>mock_provider blocks in .tftest.hcl</strong> simulates provider responses in-memory, enabling fast, isolated unit tests in CI without real cloud credentials or cost.",
    tags: ["Mock Testing", "Mock Providers", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-fc-344",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Mocking Providers in Unit Tests (Hybrid Migration)",
    hint: "Simulating cloud provider APIs in-memory for credential-free CI test runs.",
    back: "Configuring <strong>mock_provider blocks in .tftest.hcl</strong> simulates provider responses in-memory, enabling fast, isolated unit tests in CI without real cloud credentials or cost.",
    tags: ["Mock Testing", "Mock Providers", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-fc-345",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Mocking Providers in Unit Tests (Resilience Failure)",
    hint: "Simulating cloud provider APIs in-memory for credential-free CI test runs.",
    back: "Configuring <strong>mock_provider blocks in .tftest.hcl</strong> simulates provider responses in-memory, enabling fast, isolated unit tests in CI without real cloud credentials or cost.",
    tags: ["Mock Testing", "Mock Providers", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-fc-346",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Automated Module Documentation with terraform-docs (Dr Failover)",
    hint: "Generating README input and output tables automatically from HCL schemas.",
    back: "Integrating <strong>terraform-docs</strong> into pre-commit hooks generates accurate Markdown tables of inputs, outputs, and providers in <code>README.md</code>, eliminating documentation drift.",
    tags: ["Module Documentation", "terraform-docs", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-fc-347",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Automated Module Documentation with terraform-docs (High Load Scale)",
    hint: "Generating README input and output tables automatically from HCL schemas.",
    back: "Integrating <strong>terraform-docs</strong> into pre-commit hooks generates accurate Markdown tables of inputs, outputs, and providers in <code>README.md</code>, eliminating documentation drift.",
    tags: ["Module Documentation", "terraform-docs", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-fc-348",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Automated Module Documentation with terraform-docs (Security Compliance)",
    hint: "Generating README input and output tables automatically from HCL schemas.",
    back: "Integrating <strong>terraform-docs</strong> into pre-commit hooks generates accurate Markdown tables of inputs, outputs, and providers in <code>README.md</code>, eliminating documentation drift.",
    tags: ["Module Documentation", "terraform-docs", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-fc-349",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Automated Module Documentation with terraform-docs (Hybrid Migration)",
    hint: "Generating README input and output tables automatically from HCL schemas.",
    back: "Integrating <strong>terraform-docs</strong> into pre-commit hooks generates accurate Markdown tables of inputs, outputs, and providers in <code>README.md</code>, eliminating documentation drift.",
    tags: ["Module Documentation", "terraform-docs", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-fc-350",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Automated Module Documentation with terraform-docs (Resilience Failure)",
    hint: "Generating README input and output tables automatically from HCL schemas.",
    back: "Integrating <strong>terraform-docs</strong> into pre-commit hooks generates accurate Markdown tables of inputs, outputs, and providers in <code>README.md</code>, eliminating documentation drift.",
    tags: ["Module Documentation", "terraform-docs", "Resilience Failure"]
  }
];

export default HASHICORP_TFP_FLASHCARDS_14;
