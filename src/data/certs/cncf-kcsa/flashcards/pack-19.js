export const CNCF_KCSA_FLASHCARDS_19 = [
  {
    id: 'cncf-kcsa-fc-451',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'How is the CIS Kubernetes Benchmark organised, and what does each recommendation contain?',
    hint: 'Five sections, four parts per item.',
    back: 'The sections are <strong>1 Control Plane Components</strong>, <strong>2 etcd</strong>, <strong>3 Control Plane Configuration</strong> (authentication and logging), <strong>4 Worker Nodes</strong> and <strong>5 Policies</strong> (RBAC, Pod Security, network policies, Secrets). Each recommendation gives a <strong>profile level</strong>, a rationale, an <strong>audit</strong> procedure for checking it, a <strong>remediation</strong>, and whether the assessment is Automated or Manual.',
    tags: ['CIS Benchmark']
  },
  {
    id: 'cncf-kcsa-fc-452',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'Why does CIS publish separate benchmarks for EKS, GKE and AKS?',
    hint: 'Who can see the control plane?',
    back: 'On managed services the provider runs the control plane, so customers cannot inspect or change API server flags, etcd settings or control-plane file permissions. The <strong>provider-specific benchmarks</strong> drop or rewrite those checks and add controls for provider features such as IAM integration, private endpoints and node images. Evidence for the control plane comes from the provider\'s own attestations (SOC 2, ISO 27001) under the <strong>shared responsibility model</strong>.',
    tags: ['CIS Benchmark', 'Managed Kubernetes']
  },
  {
    id: 'cncf-kcsa-fc-453',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'What is the OWASP Kubernetes Top Ten, and which risks does its 2025 edition list?',
    hint: 'A ranked list of risk themes, not a list of individual checks.',
    back: 'A community-maintained, <strong>ranked list of Kubernetes risk categories</strong>, useful for structuring training, reviews and control roadmaps, unlike the CIS Benchmark\'s long list of individual settings. The <strong>2025 edition</strong>: K01 Insecure Workload Configurations, K02 Overly Permissive Authorization Configurations, K03 Secrets Management Failures, K04 Lack of Cluster Level Policy Enforcement, K05 Missing Network Segmentation Controls, K06 Overly Exposed Kubernetes Components, K07 Misconfigured and Vulnerable Cluster Components, K08 Cluster to Cloud Lateral Movement, K09 Broken Authentication Mechanisms, K10 Inadequate Logging and Monitoring. (The 2022 edition had Supply Chain Vulnerabilities at K02.)',
    tags: ['OWASP', 'Risk frameworks']
  },
  {
    id: 'cncf-kcsa-fc-454',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'Which NIST SP 800-53 control families map most directly onto Kubernetes controls?',
    hint: 'Think access, logging, configuration, communications and integrity.',
    back: '<strong>AC</strong> (Access Control): RBAC, least privilege, namespaces. <strong>AU</strong> (Audit and Accountability): API audit logs and their retention. <strong>CM</strong> (Configuration Management): CIS baselines, GitOps, admission policy. <strong>SC</strong> (System and Communications Protection): TLS and mTLS, NetworkPolicy, encryption at rest. <strong>SI</strong> (System and Information Integrity): image scanning, runtime detection, patching. <strong>IA</strong> (Identification and Authentication): OIDC and service account identity.',
    tags: ['NIST SP 800-53', 'Control mapping']
  },
  {
    id: 'cncf-kcsa-fc-455',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'Regulation, standard, framework, benchmark: what is the difference?',
    hint: 'Law, certifiable requirements, structure, settings.',
    back: 'A <strong>regulation</strong> is legally binding (GDPR, HIPAA). A <strong>standard</strong> sets requirements you can be audited or certified against (ISO/IEC 27001, PCI DSS, which is contractual). A <strong>framework</strong> is a voluntary structure of outcomes or practices (NIST CSF, SLSA). A <strong>benchmark</strong> is a concrete, testable configuration baseline for one technology (the CIS Kubernetes Benchmark, DISA STIGs). Compliance programmes usually map many of these onto one set of controls.',
    tags: ['Compliance', 'Terminology']
  },
  {
    id: 'cncf-kcsa-fc-456',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'Which PCI DSS requirement areas matter most for a cluster that runs card workloads?',
    hint: 'Network, configuration, data, software, access, logging, testing.',
    back: '<strong>Req 1</strong> network security controls and segmentation (NetworkPolicy, dedicated clusters). <strong>Req 2</strong> secure configurations (CIS hardening, no defaults). <strong>Req 3-4</strong> protecting stored data and data in transit (encryption, TLS). <strong>Req 6</strong> secure software and patching (scanning, supply chain). <strong>Req 7-8</strong> least privilege and unique IDs (RBAC, SSO). <strong>Req 10</strong> logging and 12-month retention. <strong>Req 11</strong> regular testing and change detection.',
    tags: ['PCI DSS', 'Control mapping']
  },
  {
    id: 'cncf-kcsa-fc-457',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'What are the three HIPAA Security Rule safeguard types, and what are Kubernetes examples of each?',
    hint: 'People and process, facilities, technology.',
    back: '<strong>Administrative</strong>: risk analysis, workforce training, access management procedures, contingency planning (backup and restore of etcd and volumes). <strong>Physical</strong>: facility and device controls, which on cloud are mostly inherited from the provider. <strong>Technical</strong>: access control (RBAC, unique IDs), <strong>audit controls</strong> (API audit logs), integrity controls, authentication, and <strong>transmission security</strong> (TLS and mTLS).',
    tags: ['HIPAA', 'Safeguards']
  },
  {
    id: 'cncf-kcsa-fc-458',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'What are the five SOC 2 Trust Services Criteria categories, and which one is mandatory?',
    hint: 'One is called the common criteria.',
    back: '<strong>Security</strong> (the common criteria, CC1-CC9) is required in every SOC 2 report. <strong>Availability</strong>, <strong>Processing Integrity</strong>, <strong>Confidentiality</strong> and <strong>Privacy</strong> are optional and included according to what the service promises its customers. A SaaS platform on Kubernetes typically adds Availability, supported by evidence such as multi-zone control planes, backups and incident response.',
    tags: ['SOC 2', 'Trust Services Criteria']
  },
  {
    id: 'cncf-kcsa-fc-459',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'What are the four questions of Shostack\'s Four Question Framework for threat modelling?',
    hint: 'Start with the system and finish by checking your own work.',
    back: '<strong>1. What are we working on?</strong> Scope the system, usually as a data flow diagram. <strong>2. What can go wrong?</strong> Find threats with STRIDE, attack trees or kill chains. <strong>3. What are we going to do about it?</strong> Mitigate, eliminate, transfer or accept each threat. <strong>4. Did we do a good job?</strong> Validate the model and the fixes. It underpins the Threat Modeling Manifesto and suits small teams: an hour per new cluster feature, repeated when the design changes.',
    tags: ['Threat modelling', 'Four Question Framework']
  },
  {
    id: 'cncf-kcsa-fc-460',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'What does FedRAMP mean for how a Kubernetes platform is built?',
    hint: 'A baseline level, plus a specific cryptography requirement.',
    back: 'You pick an impact baseline (<strong>Low, Moderate or High</strong>) built from NIST SP 800-53 controls, and a third-party assessor tests the system before an agency grants the authorisation to operate. It also requires <strong>FIPS 140-validated cryptographic modules</strong>, which in practice means FIPS-enabled node images and Kubernetes and component builds that use validated crypto libraries, plus continuous monitoring with monthly scanning and POA&amp;M tracking.',
    tags: ['FedRAMP', 'FIPS 140']
  },
  {
    id: 'cncf-kcsa-fc-461',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'Which GDPR obligations most affect how a Kubernetes platform is operated?',
    hint: 'Where the data goes, erasing it, and a deadline.',
    back: '<strong>International transfers</strong> (Chapter V): personal data in volumes, etcd, logs and backups can leave the EEA only with adequacy or safeguards such as SCCs. <strong>Right to erasure</strong> and storage limitation, which must also cover backups and log retention. <strong>Security of processing</strong> (Article 32): encryption, access control, resilience. <strong>Breach notification</strong> to the supervisory authority within <strong>72 hours</strong> of becoming aware of it.',
    tags: ['GDPR', 'Data protection']
  },
  {
    id: 'cncf-kcsa-fc-462',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'Why is a clean CIS Benchmark scan not proof of PCI DSS or HIPAA compliance?',
    hint: 'Configuration is only one slice of what those regimes require.',
    back: 'CIS checks the <strong>technical configuration</strong> of cluster components at one point in time. PCI DSS and HIPAA also require <strong>processes and evidence over time</strong>: risk assessments, access reviews, log retention and review, incident response, vulnerability management, change control, training, vendor management and data-specific controls such as encryption and scoping. A benchmark supports some requirements (secure configuration) but covers only part of the scope.',
    tags: ['Compliance', 'CIS Benchmark']
  },
  {
    id: 'cncf-kcsa-fc-463',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'List the six STRIDE categories and the security property each one violates.',
    hint: 'Each letter has an opposite property.',
    back: '<strong>Spoofing</strong> violates authentication. <strong>Tampering</strong> violates integrity. <strong>Repudiation</strong> violates non-repudiation, meaning actions cannot be attributed. <strong>Information disclosure</strong> violates confidentiality. <strong>Denial of service</strong> violates availability. <strong>Elevation of privilege</strong> violates authorisation.',
    tags: ['STRIDE', 'Threat modelling']
  },
  {
    id: 'cncf-kcsa-fc-464',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'STRIDE-per-element vs STRIDE-per-interaction: how do they differ?',
    hint: 'Where do you apply the six questions?',
    back: '<strong>Per-element</strong>: every element of a data flow diagram is checked against the STRIDE categories that apply to its type. External entities get S and R; processes get all six; data stores get T, I and D, plus R for logs; data flows get T, I and D. <strong>Per-interaction</strong>: threats are listed for each interaction, meaning each flow between two elements that crosses a trust boundary. That gives fewer, more focused results, useful for large systems.',
    tags: ['STRIDE', 'Data flow diagrams']
  },
  {
    id: 'cncf-kcsa-fc-465',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'What are the five building blocks of a data flow diagram used for threat modelling?',
    hint: 'Four shapes and one dashed line.',
    back: '<strong>External entities</strong> (users, CI systems, cloud APIs), <strong>processes</strong> (API server, controllers, pods), <strong>data stores</strong> (etcd, volumes, registries), <strong>data flows</strong> (API calls, pulls, replication) and <strong>trust boundaries</strong>, where the level of trust changes, for example between a pod and the node or between the internet and the ingress. Threats cluster where flows cross trust boundaries.',
    tags: ['Data flow diagrams', 'Trust boundaries']
  },
  {
    id: 'cncf-kcsa-fc-466',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'Name the container-specific techniques in the MITRE ATT&CK Containers matrix.',
    hint: 'All five have IDs between T1609 and T1613.',
    back: '<strong>T1609</strong> Container Administration Command (for example kubectl exec). <strong>T1610</strong> Deploy Container. <strong>T1611</strong> Escape to Host. <strong>T1612</strong> Build Image on Host. <strong>T1613</strong> Container and Resource Discovery. They sit alongside general techniques such as valid accounts, implant internal image, and unsecured credentials, across tactics from Initial Access to Impact. Exfiltration and Collection are not part of the Containers matrix.',
    tags: ['MITRE ATT&CK', 'Containers matrix']
  },
  {
    id: 'cncf-kcsa-fc-467',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'In an attack tree, what do AND and OR nodes mean?',
    hint: 'All children versus any child.',
    back: 'The root is the attacker\'s goal. An <strong>OR node</strong> is achieved if <strong>any</strong> of its children is achieved (alternative paths). An <strong>AND node</strong> needs <strong>all</strong> of its children (steps that must be combined). Leaves can carry cost, skill or likelihood, so you can find the cheapest path and see which single control cuts off the most paths.',
    tags: ['Attack trees']
  },
  {
    id: 'cncf-kcsa-fc-468',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'What is the main criticism of DREAD scoring?',
    hint: 'Two analysts, two different scores.',
    back: 'DREAD (Damage, Reproducibility, Exploitability, Affected users, Discoverability) is <strong>subjective</strong>, so different people score the same threat very differently. <strong>Discoverability</strong> also rewards security through obscurity. Microsoft, where it originated, stopped recommending it. Teams often use simpler high, medium and low ratings or CVSS-style scoring instead, and keep DREAD only for rough relative ranking.',
    tags: ['DREAD', 'Risk scoring']
  },
  {
    id: 'cncf-kcsa-fc-469',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'What are the seven stages of PASTA?',
    hint: 'From business objectives to risk.',
    back: '1. Define <strong>business objectives</strong>. 2. Define the <strong>technical scope</strong>. 3. <strong>Decompose</strong> the application. 4. <strong>Threat</strong> analysis, using threat intelligence. 5. <strong>Vulnerability</strong> and weakness analysis. 6. <strong>Attack modelling and simulation</strong>. 7. <strong>Risk and impact analysis</strong>, including countermeasures and residual risk. It is attacker-centric and risk-centric, heavier than STRIDE, and suited to organisations that need results in business terms.',
    tags: ['PASTA', 'Threat modelling']
  },
  {
    id: 'cncf-kcsa-fc-470',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'LINDDUN vs STRIDE: what kind of threat does LINDDUN find that STRIDE misses?',
    hint: 'Harm that can happen even when the system is perfectly secure.',
    back: 'Both are applied to a data flow diagram, but <strong>STRIDE</strong> targets security properties while <strong>LINDDUN</strong> targets <strong>privacy</strong> harms: <strong>L</strong>inking, <strong>I</strong>dentifying, <strong>N</strong>on-repudiation, <strong>D</strong>etecting, <strong>D</strong>ata disclosure, <strong>U</strong>nawareness and <strong>N</strong>on-compliance. Re-identifying pseudonymised records by joining datasets, or users not knowing what telemetry is collected, are LINDDUN threats with no STRIDE category. Note the inversion: non-repudiation is a security goal in STRIDE but a privacy threat in LINDDUN.',
    tags: ['LINDDUN', 'STRIDE', 'Privacy']
  },
  {
    id: 'cncf-kcsa-fc-471',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'What is a trust boundary, and where are typical ones in a Kubernetes cluster?',
    hint: 'Where the level of trust changes.',
    back: 'A <strong>trust boundary</strong> is a point where data or control passes between parts of the system that are trusted to different degrees. In a cluster, typical boundaries sit between the <strong>internet and the ingress</strong>, <strong>pods and the API server</strong>, the <strong>container and the node</strong> kernel, <strong>tenants</strong> in different namespaces, <strong>nodes and the control plane</strong>, and <strong>the cluster and cloud APIs</strong>. Threat modelling concentrates on these crossings.',
    tags: ['Trust boundaries', 'Threat modelling']
  },
  {
    id: 'cncf-kcsa-fc-472',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'What should a finished threat model document contain?',
    hint: 'The picture, the threats, the decisions, the owners.',
    back: 'A <strong>scope</strong> and system description with a data flow diagram and trust boundaries, the <strong>assumptions</strong> made, a list of <strong>threats</strong> (for example by STRIDE category) with a risk rating, the chosen <strong>mitigations</strong> linked to controls or tickets, the <strong>residual risks</strong> with who accepted them, and a <strong>review trigger</strong> such as an architecture change or a date. It is a living document, not a one-off deliverable.',
    tags: ['Threat modelling', 'Documentation']
  },
  {
    id: 'cncf-kcsa-fc-473',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'Name the four risk treatment options for a threat you have identified.',
    hint: 'Reduce, keep, share, or stop doing it.',
    back: '<strong>Mitigate</strong>: reduce the risk with controls, for example NetworkPolicy or admission rules. <strong>Accept</strong>: keep the risk knowingly, with a named owner and a review date. <strong>Transfer</strong>: shift it, for example through insurance or a managed service with contractual responsibility. <strong>Avoid</strong>: remove the feature or design that creates it, for example by not exposing the dashboard at all.',
    tags: ['Risk treatment', 'Risk management']
  },
  {
    id: 'cncf-kcsa-fc-474',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'CVSS, EPSS and CISA KEV: what does each tell you when prioritising vulnerabilities?',
    hint: 'Severity, likelihood, observed reality.',
    back: '<strong>CVSS</strong> scores a vulnerability\'s technical <strong>severity</strong> (0-10), not how likely it is to be exploited. <strong>EPSS</strong> (from FIRST) estimates the <strong>probability of exploitation</strong> in the next 30 days. <strong>CISA KEV</strong> lists vulnerabilities that are <strong>known to be exploited</strong> in the wild. Patching KEV entries and high-EPSS findings first, weighted by exposure, beats sorting by CVSS alone.',
    tags: ['Vulnerability prioritisation', 'CVSS', 'EPSS']
  },
  {
    id: 'cncf-kcsa-fc-475',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'Which threat actors should a Kubernetes threat model usually consider?',
    hint: 'Outside, inside a pod, inside the company, on a node.',
    back: 'An <strong>external attacker</strong> reaching exposed endpoints. A <strong>compromised container</strong>, for example through an application remote code execution bug. A <strong>malicious or careless insider</strong> or tenant with legitimate but limited access. A <strong>compromised node</strong> or kubelet credential. A <strong>compromised supply chain</strong>, meaning poisoned images or dependencies. Each actor starts with different access, so controls are layered.',
    tags: ['Threat actors', 'Threat modelling']
  }
];

export default CNCF_KCSA_FLASHCARDS_19;
