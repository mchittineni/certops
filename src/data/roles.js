/**
 * Role-based certification paths.
 *
 * Each role is an *ordered* route, not a bag of certifications: step one should be
 * genuinely startable by someone new to the role, and each later step should assume
 * the ones before it. `why` explains what that step adds to the role — it is the whole
 * reason a path beats a filter, so keep it concrete and avoid restating the cert title.
 *
 * certId values must exist in the catalog. A step naming a `planned` certification is
 * fine and is rendered as a roadmap step; the path still reads as a complete route.
 *
 * Icons are not stored here: `roleIcon(role.id)` in views/brand.js keeps the markup
 * out of the data and the glyph consistent with the discipline marks.
 */
export const ROLES = [
  {
    id: 'cloud-engineer',
    title: 'Cloud Engineer',
    blurb: 'Build, operate, and automate infrastructure across modern public clouds.',
    path: [
      { certId: 'aws-clf', why: 'Shared responsibility model, core computing primitives, and cloud pricing vocabulary before touching production resources.' },
      { certId: 'aws-saa', why: 'Architectural trade-offs you must defend in engineering review: multi-AZ resilience, tiered S3 storage, and decoupled message queues.' },
      { certId: 'azure-az104', why: 'Enterprise identity with Microsoft Entra ID, virtual networks, and hybrid cloud management to avoid single-vendor assumptions.' },
      { certId: 'gcp-ace', why: 'Google Cloud resource hierarchy, IAM bindings, Cloud Run serverless deployments, and GKE operational administration.' },
      { certId: 'hashicorp-tfp', why: 'State locking, reusable modules, and automated drift management — the difference between manual console clicking and reproducible infrastructure.' }
    ]
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    blurb: 'Own the automated path from developer commit to resilient production release.',
    path: [
      { certId: 'github-actions', why: 'Automated workflow pipelines, custom action authoring, self-hosted runners, and secret governance where code is written.' },
      { certId: 'hashicorp-tfp', why: 'Infrastructure as code with an explicit state engine, preventing configuration drift across staging and production environments.' },
      { certId: 'k8s-cka', why: 'The standard deployment target: pod scheduling, service discovery, ingress routing, and debugging broken runtime workloads.' },
      { certId: 'cncf-cgoa', why: 'Declarative continuous delivery: using Git as the single source of truth with automated reconciliation loops and instant rollbacks.' },
      { certId: 'aws-dop', why: 'Multi-account delivery pipelines, zero-downtime blue/green deployment strategies, and automated incident recovery at cloud scale.' },
      { certId: 'azure-az400', why: 'Enterprise release orchestration, source control branching strategies, dependency management, and continuous feedback telemetry.' }
    ]
  },
  {
    id: 'platform-engineer',
    title: 'Platform Engineer',
    blurb: 'Build the internal developer platform and golden paths other engineers ship on.',
    path: [
      { certId: 'cncf-cnpa', why: 'Core platform engineering principles: treating platforms as products, reducing developer cognitive load, and designing paved roads.' },
      { certId: 'k8s-cka', why: 'The scheduling and container substrate: custom resources, cluster networking, namespaces, and tenancy boundaries your abstractions build upon.' },
      { certId: 'hashicorp-tfp', why: 'Creating composable, self-service infrastructure modules that application teams consume without filing infrastructure tickets.' },
      { certId: 'cncf-cba', why: 'Internal developer portals: Backstage software catalog, service metadata templates, scaffolding actions, and unified developer self-service.' },
      { certId: 'cncf-cnpe', why: 'Enterprise platform architecture: multi-cluster control planes, Day-2 operations, governance policy enforcement, and platform adoption metrics.' }
    ]
  },
  {
    id: 'sre',
    title: 'Site Reliability Engineer',
    blurb: 'Guarantee service reliability, eliminate toil, and master incident response.',
    path: [
      { certId: 'k8s-cka', why: 'Live cluster troubleshooting under pressure: triaging crash looping pods, broken DNS, node resource exhaustion, and failing health probes.' },
      { certId: 'cncf-otca', why: 'Full-stack distributed observability: instrumenting traces, metrics, and logs into a unified telemetry pipeline to spot anomalies before users do.' },
      { certId: 'gcp-pcdoe', why: 'Production SRE discipline from Google: defining meaningful SLIs and SLOs, managing error budgets, automated canaries, and blameless postmortems.' },
      { certId: 'aws-dop', why: 'Automated system remediation, cross-region disaster recovery architectures, self-healing workloads, and runbook automation.' },
      { certId: 'doi-sre-practitioner', why: 'Organizational reliability practice: transforming engineering culture, establishing toil reduction budgets, and aligning reliability with business SLAs.' }
    ]
  },
  {
    id: 'security-engineer',
    title: 'Security Engineer',
    blurb: 'Shift security left into code, harden runtime platforms, and defend cloud perimeters.',
    path: [
      { certId: 'github-ghas', why: 'Application security at the source: semantic code analysis with CodeQL, secret push protection, and supply chain vulnerability scanning.' },
      { certId: 'aws-scs', why: 'Cloud perimeter defense: KMS envelope encryption, restrictive IAM permission boundaries, VPC flow monitoring, and automated threat detection.' },
      { certId: 'k8s-cks', why: 'Container and cluster hardening: admission control policies, AppArmor and seccomp syscall profiles, container image sandboxing, and runtime threat detection.' },
      { certId: 'hashicorp-vault', why: 'Centralized secrets lifecycle orchestration: dynamic database credentials, PKI certificate automation, and transit data encryption across multi-cloud environments.' },
      { certId: 'isc2-ccsp', why: 'Enterprise cloud governance: zero-trust architecture, ISO 27001/SOC 2 compliance frameworks, data sovereignty, and cloud risk management.' }
    ]
  },
  {
    id: 'finops',
    title: 'FinOps Practitioner',
    blurb: 'Make multi-cloud spend transparent, optimize unit economics, and drive cultural accountability.',
    path: [
      { certId: 'finops-focp', why: 'The FinOps framework and cultural principles: Inform, Optimize, and Operate phases to align engineering velocity with financial accountability.' },
      { certId: 'aws-clf', why: 'Cloud billing building blocks: compute pricing models, tiered storage classes, egress data costs, and commitment discounts like Savings Plans.' },
      { certId: 'finops-focus', why: 'Normalizing multi-cloud cost and usage billing datasets across AWS, Azure, and Google Cloud using the FinOps Open Cost & Usage Specification.' },
      { certId: 'cloud-economics', why: 'Translating cloud bills into unit economics: calculating cost per customer or transaction rather than tracking generic monthly server spend.' },
      { certId: 'finops-engineer', why: 'Codifying financial optimization into delivery pipelines: automated rightsizing, anomaly detection algorithms, and architectural cost guardrails.' },
      { certId: 'finops-professional', why: 'Directing enterprise FinOps practice: cross-organizational chargeback/showback models, KPI governance, and executive cloud forecasting.' }
    ]
  },
  {
    id: 'solutions-architect',
    title: 'Solutions Architect',
    blurb: 'Design resilient, cost-effective, and scalable systems across enterprise cloud providers.',
    path: [
      { certId: 'aws-clf', why: 'Foundational breadth: global regions, availability zones, shared responsibility, and high-level service selection vocabulary.' },
      { certId: 'aws-saa', why: 'The core discipline of architecture: balancing durability, performance efficiency, and cost across decoupled distributed components.' },
      { certId: 'azure-az305', why: 'Enterprise multi-cloud architecture: Microsoft Entra ID zero-trust identity, landing zones, hybrid connectivity, and business continuity.' },
      { certId: 'gcp-pca', why: 'Designing on Google Cloud: global VPC networks, managed Kubernetes topologies, data analytics pipelines, and dynamic auto-scaling architectures.' },
      { certId: 'aws-sap', why: 'Complex multi-account enterprise architecture: organizational SCP governance, large-scale cloud migrations, and disaster recovery at global scale.' }
    ]
  },
  {
    id: 'ai-ml-engineer',
    title: 'AI / Machine Learning Engineer',
    blurb: 'Build, deploy, and operationalize machine learning models and generative AI systems.',
    path: [
      { certId: 'aws-mla', why: 'Machine learning engineering fundamentals: data preparation, feature engineering pipelines, model training workflows, and containerized deployment.' },
      { certId: 'azure-ai-apps-agents', why: 'Generative AI applications: prompt orchestration, Retrieval-Augmented Generation (RAG) architectures, and autonomous AI agent workflows.' },
      { certId: 'gcp-pmle', why: 'Production MLOps at scale: Vertex AI continuous training pipelines, data drift detection, feature stores, and low-latency inference serving.' },
      { certId: 'databricks-genai', why: 'Enterprise LLM lifecycle: fine-tuning foundation models, vector search indexing, model evaluation with MLflow, and governance guardrails.' },
      { certId: 'aws-mls', why: 'Advanced ML architecture: distributed model training, custom loss optimization, inference cost optimization, and secure model governance.' }
    ]
  },
  {
    id: 'data-engineer',
    title: 'Cloud Data Engineer',
    blurb: 'Design high-throughput data pipelines, analytical warehouses, and managed cloud databases.',
    path: [
      { certId: 'aws-clf', why: 'Foundational data storage concepts: object storage classes, managed relational engines, and core cloud networking for data movement.' },
      { certId: 'aws-dbs', why: 'Specialized database architecture: choosing between relational, document, graph, and key-value datastores for specific query workloads.' },
      { certId: 'gcp-pde', why: 'Scalable data pipeline engineering: streaming with Pub/Sub and Apache Beam on Dataflow, plus petabyte-scale analytics in BigQuery.' },
      { certId: 'gcp-pcdbe', why: 'Enterprise database operations: global high availability with Cloud Spanner, automated failover in Cloud SQL, and zero-downtime migrations.' },
      { certId: 'databricks-genai', why: 'Modern data lakehouse architectures: unified batch and streaming tables, vector embedding generation, and data preparation for AI workloads.' }
    ]
  }
];

export const ROLE_BY_ID = Object.fromEntries(ROLES.map(r => [r.id, r]));

/** Certification ids on a role's path, in order. */
export function roleCertIds(roleId) {
  return ROLE_BY_ID[roleId]?.path.map(step => step.certId) || [];
}
