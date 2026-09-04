export const HASHICORP_TFA_FLASHCARDS_12 = [
  {
    id: "hashicorp-tfa-fc-276",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Core and Provider Plugins (Dr Failover)",
    hint: "Decoupled architecture communicating via gRPC plugins.",
    back: "<strong>Terraform Core</strong> evaluates configuration and state graphs, communicating via <strong>gRPC plugins (Providers)</strong> that translate resource declarations into cloud vendor API calls.",
    tags: ["Architecture", "Provider Architecture", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-fc-277",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Core and Provider Plugins (High Load Scale)",
    hint: "Decoupled architecture communicating via gRPC plugins.",
    back: "<strong>Terraform Core</strong> evaluates configuration and state graphs, communicating via <strong>gRPC plugins (Providers)</strong> that translate resource declarations into cloud vendor API calls.",
    tags: ["Architecture", "Provider Architecture", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-fc-278",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Core and Provider Plugins (Security Compliance)",
    hint: "Decoupled architecture communicating via gRPC plugins.",
    back: "<strong>Terraform Core</strong> evaluates configuration and state graphs, communicating via <strong>gRPC plugins (Providers)</strong> that translate resource declarations into cloud vendor API calls.",
    tags: ["Architecture", "Provider Architecture", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-fc-279",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Core and Provider Plugins (Hybrid Migration)",
    hint: "Decoupled architecture communicating via gRPC plugins.",
    back: "<strong>Terraform Core</strong> evaluates configuration and state graphs, communicating via <strong>gRPC plugins (Providers)</strong> that translate resource declarations into cloud vendor API calls.",
    tags: ["Architecture", "Provider Architecture", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-fc-280",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Core and Provider Plugins (Resilience Failure)",
    hint: "Decoupled architecture communicating via gRPC plugins.",
    back: "<strong>Terraform Core</strong> evaluates configuration and state graphs, communicating via <strong>gRPC plugins (Providers)</strong> that translate resource declarations into cloud vendor API calls.",
    tags: ["Architecture", "Provider Architecture", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-fc-281",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Provider Source and Version Constraints (Dr Failover)",
    hint: "Pinning provider versions using pessimistic operator constraints.",
    back: "Declaring providers in <strong>required_providers</strong> with source addresses and <strong>version constraints (~&gt; 5.0)</strong> locks provider releases, preventing breaking API changes from disrupting deployments.",
    tags: ["Providers", "Provider Versioning", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-fc-282",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Provider Source and Version Constraints (High Load Scale)",
    hint: "Pinning provider versions using pessimistic operator constraints.",
    back: "Declaring providers in <strong>required_providers</strong> with source addresses and <strong>version constraints (~&gt; 5.0)</strong> locks provider releases, preventing breaking API changes from disrupting deployments.",
    tags: ["Providers", "Provider Versioning", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-fc-283",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Provider Source and Version Constraints (Security Compliance)",
    hint: "Pinning provider versions using pessimistic operator constraints.",
    back: "Declaring providers in <strong>required_providers</strong> with source addresses and <strong>version constraints (~&gt; 5.0)</strong> locks provider releases, preventing breaking API changes from disrupting deployments.",
    tags: ["Providers", "Provider Versioning", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-fc-284",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Provider Source and Version Constraints (Hybrid Migration)",
    hint: "Pinning provider versions using pessimistic operator constraints.",
    back: "Declaring providers in <strong>required_providers</strong> with source addresses and <strong>version constraints (~&gt; 5.0)</strong> locks provider releases, preventing breaking API changes from disrupting deployments.",
    tags: ["Providers", "Provider Versioning", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-fc-285",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Provider Source and Version Constraints (Resilience Failure)",
    hint: "Pinning provider versions using pessimistic operator constraints.",
    back: "Declaring providers in <strong>required_providers</strong> with source addresses and <strong>version constraints (~&gt; 5.0)</strong> locks provider releases, preventing breaking API changes from disrupting deployments.",
    tags: ["Providers", "Provider Versioning", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-fc-286",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Dependency Graph and Implicit References (Dr Failover)",
    hint: "Automatic provisioning ordering derived from attribute references.",
    back: "Referencing another resource's attributes (like <code>aws_security_group.web.id</code>) creates an <strong>implicit dependency</strong>, prompting Terraform's DAG engine to order resource creation automatically.",
    tags: ["Dependency Graph", "Implicit Dependencies", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-fc-287",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Dependency Graph and Implicit References (High Load Scale)",
    hint: "Automatic provisioning ordering derived from attribute references.",
    back: "Referencing another resource's attributes (like <code>aws_security_group.web.id</code>) creates an <strong>implicit dependency</strong>, prompting Terraform's DAG engine to order resource creation automatically.",
    tags: ["Dependency Graph", "Implicit Dependencies", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-fc-288",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Dependency Graph and Implicit References (Security Compliance)",
    hint: "Automatic provisioning ordering derived from attribute references.",
    back: "Referencing another resource's attributes (like <code>aws_security_group.web.id</code>) creates an <strong>implicit dependency</strong>, prompting Terraform's DAG engine to order resource creation automatically.",
    tags: ["Dependency Graph", "Implicit Dependencies", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-fc-289",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Dependency Graph and Implicit References (Hybrid Migration)",
    hint: "Automatic provisioning ordering derived from attribute references.",
    back: "Referencing another resource's attributes (like <code>aws_security_group.web.id</code>) creates an <strong>implicit dependency</strong>, prompting Terraform's DAG engine to order resource creation automatically.",
    tags: ["Dependency Graph", "Implicit Dependencies", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-fc-290",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Dependency Graph and Implicit References (Resilience Failure)",
    hint: "Automatic provisioning ordering derived from attribute references.",
    back: "Referencing another resource's attributes (like <code>aws_security_group.web.id</code>) creates an <strong>implicit dependency</strong>, prompting Terraform's DAG engine to order resource creation automatically.",
    tags: ["Dependency Graph", "Implicit Dependencies", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-fc-291",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Explicit Dependencies with depends_on (Dr Failover)",
    hint: "Enforcing ordering constraints for hidden or indirect resource relationships.",
    back: "The <strong>depends_on meta-argument</strong> enforces explicit creation ordering when resource relationships are not captured through direct attribute references (e.g., IAM role attachments).",
    tags: ["Explicit Dependencies", "depends_on", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-fc-292",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Explicit Dependencies with depends_on (High Load Scale)",
    hint: "Enforcing ordering constraints for hidden or indirect resource relationships.",
    back: "The <strong>depends_on meta-argument</strong> enforces explicit creation ordering when resource relationships are not captured through direct attribute references (e.g., IAM role attachments).",
    tags: ["Explicit Dependencies", "depends_on", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-fc-293",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Explicit Dependencies with depends_on (Security Compliance)",
    hint: "Enforcing ordering constraints for hidden or indirect resource relationships.",
    back: "The <strong>depends_on meta-argument</strong> enforces explicit creation ordering when resource relationships are not captured through direct attribute references (e.g., IAM role attachments).",
    tags: ["Explicit Dependencies", "depends_on", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-fc-294",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Explicit Dependencies with depends_on (Hybrid Migration)",
    hint: "Enforcing ordering constraints for hidden or indirect resource relationships.",
    back: "The <strong>depends_on meta-argument</strong> enforces explicit creation ordering when resource relationships are not captured through direct attribute references (e.g., IAM role attachments).",
    tags: ["Explicit Dependencies", "depends_on", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-fc-295",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Explicit Dependencies with depends_on (Resilience Failure)",
    hint: "Enforcing ordering constraints for hidden or indirect resource relationships.",
    back: "The <strong>depends_on meta-argument</strong> enforces explicit creation ordering when resource relationships are not captured through direct attribute references (e.g., IAM role attachments).",
    tags: ["Explicit Dependencies", "depends_on", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfa-fc-296",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Resource CRUD Lifecycle (Dr Failover)",
    hint: "Understanding in-place updates vs destructive replacement (ForceNew).",
    back: "Terraform inspects provider schemas to determine if property changes can be applied <strong>in-place (Update)</strong> or require <strong>destroy-and-recreate (forces replacement)</strong>.",
    tags: ["Resource Lifecycle", "Resource Lifecycle", "Dr Failover"]
  },
  {
    id: "hashicorp-tfa-fc-297",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Resource CRUD Lifecycle (High Load Scale)",
    hint: "Understanding in-place updates vs destructive replacement (ForceNew).",
    back: "Terraform inspects provider schemas to determine if property changes can be applied <strong>in-place (Update)</strong> or require <strong>destroy-and-recreate (forces replacement)</strong>.",
    tags: ["Resource Lifecycle", "Resource Lifecycle", "High Load Scale"]
  },
  {
    id: "hashicorp-tfa-fc-298",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Resource CRUD Lifecycle (Security Compliance)",
    hint: "Understanding in-place updates vs destructive replacement (ForceNew).",
    back: "Terraform inspects provider schemas to determine if property changes can be applied <strong>in-place (Update)</strong> or require <strong>destroy-and-recreate (forces replacement)</strong>.",
    tags: ["Resource Lifecycle", "Resource Lifecycle", "Security Compliance"]
  },
  {
    id: "hashicorp-tfa-fc-299",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Resource CRUD Lifecycle (Hybrid Migration)",
    hint: "Understanding in-place updates vs destructive replacement (ForceNew).",
    back: "Terraform inspects provider schemas to determine if property changes can be applied <strong>in-place (Update)</strong> or require <strong>destroy-and-recreate (forces replacement)</strong>.",
    tags: ["Resource Lifecycle", "Resource Lifecycle", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfa-fc-300",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Resource CRUD Lifecycle (Resilience Failure)",
    hint: "Understanding in-place updates vs destructive replacement (ForceNew).",
    back: "Terraform inspects provider schemas to determine if property changes can be applied <strong>in-place (Update)</strong> or require <strong>destroy-and-recreate (forces replacement)</strong>.",
    tags: ["Resource Lifecycle", "Resource Lifecycle", "Resilience Failure"]
  }
];

export default HASHICORP_TFA_FLASHCARDS_12;
