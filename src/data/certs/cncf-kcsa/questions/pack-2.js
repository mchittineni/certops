export const CNCF_KCSA_QUESTIONS_2 = [
  {
    id: "cncf-kcsa-26",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Picking the control that stops a bad pod up front",
    scenario: "An insurance company's risk register asks the platform team to name one control that stops privileged pods before they ever run, rather than noticing them afterwards or cleaning up once they exist. The team has four candidate mechanisms already deployed.",
    question: "Which mechanism is a preventive control for this risk?",
    options: [
      { id: 'A', text: "A Falco rule that raises an alert whenever a container starts with privileged set to true on any node." },
      { id: 'B', text: "Pod Security admission in enforce mode, which rejects pod specs that ask for privileged containers." },
      { id: 'C', text: "A weekly review of API server audit logs to find pod creations that requested privileged containers." },
      { id: 'D', text: "A nightly job that deletes any running pod found with privileged containers and pages the owning team." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A preventive control stops the undesired event from happening; Pod Security admission in enforce mode rejects the pod at the API server, so a privileged container never starts. A Falco rule is a detective control: it notices the container after it is already running. Reviewing audit logs weekly is also detective, and slow. Deleting offending pods on a schedule is a corrective control, and the privileged pod has run for hours before the job removes it.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/",
    tags: ["Control types", "Pod Security admission"]
  },
  {
    id: "cncf-kcsa-27",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "A vendor app that insists on running as root",
    scenario: "A bank requires every application namespace to enforce the Restricted Pod Security Standard. A vendor's reconciliation service must run as root, and the vendor cannot ship a fixed image for six months. The CISO will accept a deviation only if the residual risk is visibly reduced and the exception expires.",
    question: "What should the platform team do?",
    options: [
      { id: 'A', text: "Give its service account cluster-admin so that the Pod Security checks are skipped for pods it creates." },
      { id: 'B', text: "Deploy it into kube-system, which already runs privileged system pods, so no new namespace labels are needed." },
      { id: 'C', text: "Relabel every namespace Privileged as a blanket exception until the vendor ships a fixed image, then revert." },
      { id: 'D', text: "Run it in its own Baseline namespace under a time-bound exception, with strict NetworkPolicy and runtime alerts." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A compensating control accepts a documented, time-limited deviation and adds other controls that reduce the resulting risk: Baseline permits running as root while still blocking privileged containers and host namespaces, and a dedicated namespace with tight NetworkPolicy and runtime detection limits what a compromise could reach. kube-system hosts cluster-critical components, so dropping a vendor workload there widens its blast radius and hides it among trusted pods. Relabelling every namespace Privileged removes the control for all workloads to accommodate one. Pod Security admission evaluates the pod spec regardless of who creates it, so cluster-admin rights only add risk without bypassing the check.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Compensating controls", "Pod Security Standards", "Risk exceptions"]
  },
  {
    id: "cncf-kcsa-28",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Measuring detection coverage by attacker tactic",
    scenario: "A security operations centre wants to show leadership how well its Kubernetes detections cover the stages of an attack, from initial access through execution, persistence, privilege escalation and impact. It needs a publicly maintained knowledge base of adversary tactics and techniques specific to container environments to map each detection against.",
    question: "Which framework should the SOC use?",
    options: [
      { id: 'A', text: "The MITRE ATT&CK Containers matrix, which catalogues adversary tactics and techniques seen against containers." },
      { id: 'B', text: "NIST SP 800-190, which explains the major risks to container images, registries, orchestrators and hosts." },
      { id: 'C', text: "SLSA, which defines graduated levels of assurance for how software artifacts are built and their provenance." },
      { id: 'D', text: "The CIS Kubernetes Benchmark, whose numbered checks cover control plane, etcd, node and policy configuration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "MITRE ATT&CK organises real-world adversary behaviour into tactics and techniques, and its Containers matrix covers techniques such as deploying a container, escaping to the host or using a service account token, which makes it the natural backbone for measuring detection coverage. The CIS Kubernetes Benchmark is a configuration hardening checklist, not a model of attacker behaviour. NIST SP 800-190 describes risks and countermeasures in prose and is not structured as a tactic-and-technique catalogue. SLSA addresses supply chain build integrity and says nothing about detections at runtime.",
    referenceUrl: "https://attack.mitre.org/matrices/enterprise/containers/",
    tags: ["MITRE ATT&CK", "Threat detection", "Frameworks"]
  },
  {
    id: "cncf-kcsa-29",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Six SREs sharing one administrator kubeconfig",
    scenario: "At a travel company, six SREs use the same cluster-admin kubeconfig file stored in a team password vault. After a production Namespace was deleted, the audit log showed only the shared certificate's username, and nobody could establish who had done it. The team is applying STRIDE to record the threat.",
    question: "Which STRIDE category and mitigation should be recorded?",
    options: [
      { id: 'A', text: "Information disclosure, mitigated by encrypting the kubeconfig file at rest inside the team password vault." },
      { id: 'B', text: "Elevation of privilege, mitigated by binding the shared identity to the edit role instead of cluster-admin." },
      { id: 'C', text: "Spoofing, mitigated by requiring multi-factor authentication to open the vault that holds the shared file." },
      { id: 'D', text: "Repudiation, mitigated by giving each SRE an individual identity, such as OIDC, with audit logging kept." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Repudiation is the ability to deny having performed an action because the system cannot attribute it; a shared credential makes every SRE indistinguishable in the audit log. Individual identities, typically through OIDC single sign-on mapped to RBAC groups, combined with retained audit logs, restore accountability. MFA on the vault controls who can fetch the file but still leaves every action attributed to one shared user. Encrypting the file protects confidentiality, not attribution. Reducing the shared identity's rights limits damage but still leaves actions unattributable.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authentication/",
    tags: ["STRIDE", "Threat modelling", "Accountability"]
  },
  {
    id: "cncf-kcsa-30",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "The NIST guide written for containers",
    scenario: "A US federal agency adopting Kubernetes has been told by its authorising official to base the programme on the NIST special publication that specifically describes the security risks of container images, registries, orchestrators, containers and host operating systems, with recommended countermeasures.",
    question: "Which publication fits that description?",
    options: [
      { id: 'A', text: "NIST SP 800-53, the catalogue of security and privacy controls for federal information systems." },
      { id: 'B', text: "NIST SP 800-190, the Application Container Security Guide covering container-specific risks and fixes." },
      { id: 'C', text: "NIST SP 800-61, the computer security incident handling guide for preparing and responding to incidents." },
      { id: 'D', text: "NIST SP 800-207, which defines the principles and logical components of a zero trust architecture." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "NIST SP 800-190, the Application Container Security Guide, is organised around exactly those five areas: images, registries, orchestrators, containers and host OSes, each with risks and countermeasures. SP 800-53 is the general control catalogue used across all federal systems, not a container-specific guide. SP 800-207 defines zero trust architecture principles. SP 800-61 covers incident response processes rather than container technology risks.",
    referenceUrl: "https://csrc.nist.gov/pubs/sp/800/190/final",
    tags: ["NIST SP 800-190", "Frameworks"]
  },
  {
    id: "cncf-kcsa-31",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Services that trust any caller on the pod network",
    scenario: "A logistics platform's internal services accept any request that arrives from an in-cluster IP address, on the assumption that only trusted workloads live inside the cluster. After a compromised pod was used to call the billing service directly, the architects want to adopt zero trust principles for service-to-service traffic.",
    question: "Which change best reflects zero trust?",
    options: [
      { id: 'A', text: "Put every engineer and CI system behind a VPN so that only trusted networks can ever reach the internal services." },
      { id: 'B', text: "Move the cluster into private subnets behind a stricter perimeter firewall so fewer outside hosts can reach it." },
      { id: 'C', text: "Require mutual TLS with workload identities and authorise each call per service, whatever its network origin." },
      { id: 'D', text: "Group services into namespaces and let each service trust all callers from inside its own namespace boundary." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Zero trust removes implicit trust based on network location: every request is authenticated with a strong workload identity, typically through mutual TLS, and authorised against an explicit policy, so a compromised pod cannot call billing simply because it is inside the cluster. A stricter perimeter or a VPN strengthens the boundary but keeps the flawed assumption that anything inside is trusted, which is exactly what the attacker exploited. Trusting everything in the same namespace just draws a smaller perimeter and still grants trust by location.",
    referenceUrl: "https://csrc.nist.gov/pubs/sp/800/207/final",
    tags: ["Zero trust", "Mutual TLS"]
  },
  {
    id: "cncf-kcsa-32",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "One engineer who writes, approves and deploys",
    scenario: "An auditor at a payments firm notes that any platform engineer can write a manifest change, approve their own pull request and apply it to production with kubectl using their personal credentials. The firm must introduce segregation of duties for production changes without slowing emergency fixes more than necessary.",
    question: "Which control addresses the finding?",
    options: [
      { id: 'A', text: "Enforce multi-factor authentication whenever an engineer obtains production credentials for kubectl access." },
      { id: 'B', text: "Issue each engineer a separate kubeconfig per environment so that production changes need a deliberate switch." },
      { id: 'C', text: "Forward every kubectl command and pull request event to the SIEM to review who changed production later." },
      { id: 'D', text: "Require a second person's approval on pull requests and make a GitOps controller the only production writer." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Segregation of duties means no single person can both make and approve a change; branch protection that requires another reviewer, combined with a GitOps controller that is the only identity allowed to write to production, enforces that split while still allowing a fast, reviewed emergency change. Forwarding commands to a SIEM is detective and still lets one person make the change alone. Separate kubeconfigs add friction but not a second person. Multi-factor authentication strengthens who someone is, not whether someone else approved what they do.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/",
    tags: ["Segregation of duties", "GitOps", "Change control"]
  },
  {
    id: "cncf-kcsa-33",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Benchmark failures the team cannot touch",
    scenario: "A retailer runs kube-bench with the generic CIS Kubernetes Benchmark against its Amazon EKS clusters. The report shows dozens of failures for API server and etcd file permissions and flags, none of which the team can inspect or change because AWS operates the control plane.",
    question: "How should the team get a meaningful baseline?",
    options: [
      { id: 'A', text: "Open a support case asking AWS to change control plane flags until the generic benchmark shows all passes." },
      { id: 'B', text: "Replace kube-bench with an image scanner, since control plane configuration is irrelevant on managed services." },
      { id: 'C', text: "Assess against the CIS Amazon EKS Benchmark, which scopes checks to the parts a customer actually controls." },
      { id: 'D', text: "Mark every control plane check as a passed exception, because a managed service is secure by definition." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CIS publishes provider-specific benchmarks for EKS, GKE and AKS that drop or re-scope control plane checks the customer cannot see and focus on worker nodes, policies and managed-service settings; kube-bench can run those targets directly. Recording blanket passes misrepresents the evidence and hides nothing useful. The provider will not tune a managed control plane to a generic benchmark per customer. An image scanner answers a different question, and configuration still matters for the nodes and policies the customer does control.",
    referenceUrl: "https://www.cisecurity.org/benchmark/kubernetes",
    tags: ["CIS Benchmark", "kube-bench", "Managed Kubernetes"]
  },
  {
    id: "cncf-kcsa-34",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "A ranked list of Kubernetes risks for training",
    scenario: "An application security team is designing a training curriculum for developers who deploy to Kubernetes. They want a community-maintained, ranked list of the most common Kubernetes risk categories, such as insecure workload configurations, overly permissive RBAC and secrets management failures, to structure the modules.",
    question: "Which resource matches the request?",
    options: [
      { id: 'A', text: "The CIS Kubernetes Benchmark, a consensus list of configuration checks for cluster components and policies." },
      { id: 'B', text: "The Pod Security Standards, which define Privileged, Baseline and Restricted profiles for pod specifications." },
      { id: 'C', text: "The OWASP Kubernetes Top Ten, a ranked list of the most prevalent Kubernetes security risk categories." },
      { id: 'D', text: "The CNCF Cloud Native Security Whitepaper, which describes controls across the application lifecycle phases." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The OWASP Kubernetes Top Ten ranks risk categories such as insecure workload configurations, overly permissive RBAC, missing network segmentation and secrets management failures, which is exactly the structure the curriculum needs. The CIS Benchmark is a long list of individual configuration checks, not a ranked set of risk themes. The Pod Security Standards cover only pod specification settings. The CNCF whitepaper is organised by lifecycle phase rather than as a prioritised list of risks.",
    referenceUrl: "https://owasp.org/www-project-kubernetes-top-ten/",
    tags: ["OWASP", "Frameworks", "Security training"]
  },
  {
    id: "cncf-kcsa-35",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Blocking public load balancers without a webhook",
    scenario: "A media company requires that every Service of type LoadBalancer carry the cloud annotation that makes the load balancer internal-only, and the API server must reject any that do not. The platform team is small and does not want to operate, scale and secure an additional webhook service just for this rule.",
    question: "Which mechanism fits best?",
    options: [
      { id: 'A', text: "A NetworkPolicy in each namespace that blocks internet traffic to LoadBalancer Services lacking it." },
      { id: 'B', text: "A ValidatingAdmissionPolicy with a CEL expression, evaluated in-process by the API server itself." },
      { id: 'C', text: "Pod Security admission, labelling each namespace so that Services without the annotation are rejected." },
      { id: 'D', text: "A MutatingAdmissionWebhook that calls an in-cluster service to add the internal-only annotation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "ValidatingAdmissionPolicy, stable since Kubernetes 1.30, lets administrators express validation rules in CEL that the API server evaluates in-process, so a rule rejecting LoadBalancer Services without the annotation needs no webhook service. Pod Security admission only applies the fixed Pod Security Standards to pods and cannot inspect Services. A mutating webhook requires exactly the extra service the team wants to avoid, and silently adding the annotation would not reject anything. NetworkPolicy governs traffic to pods and does not decide whether an API object is admitted or which kind of load balancer the cloud creates.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/validating-admission-policy/",
    tags: ["Admission control", "ValidatingAdmissionPolicy", "CEL"]
  },
  {
    id: "cncf-kcsa-36",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Audit evidence for a control plane you cannot see",
    scenario: "A SaaS company runs all production workloads on a managed Kubernetes service. Its SOC 2 auditor asks for evidence that the Kubernetes control plane is patched promptly, that etcd is encrypted and that access to control plane hosts is restricted. The company has no access to those hosts.",
    question: "How should the company satisfy the request?",
    options: [
      { id: 'A', text: "Run kube-bench against the managed control plane endpoint and submit its report as evidence for every item." },
      { id: 'B', text: "Rely on the provider's independent audit reports for its controls and evidence the company's own controls." },
      { id: 'C', text: "Submit a screenshot of the cluster's current Kubernetes version as proof that patches are applied promptly." },
      { id: 'D', text: "Ask the provider for SSH access to the control plane hosts so internal staff can collect the evidence." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Under shared responsibility, controls the provider operates are evidenced by the provider's independent attestations, such as its SOC 2 Type II or ISO 27001 reports, which the customer reviews along with any complementary user entity controls they require; the company then evidences the controls it owns, such as RBAC, workload policies and node patching. kube-bench runs on hosts and cannot inspect a managed control plane. Managed providers do not grant customers SSH access to control plane hosts. A version screenshot at one point in time does not show a patching process, encryption or host access controls.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/overview/",
    tags: ["Shared responsibility", "Audit evidence", "Frameworks"]
  },
  {
    id: "cncf-kcsa-37",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Undoing emergency edits made directly in production",
    scenario: "SREs at a streaming service keep write access to production so they can respond to incidents, and they sometimes patch Deployments directly with kubectl. Those edits drift from the reviewed manifests in Git and are forgotten. The company wants such changes reverted to the approved state automatically.",
    question: "Which corrective control fits?",
    options: [
      { id: 'A', text: "Run a GitOps controller with automated self-heal so it reapplies the manifests from Git when drift appears." },
      { id: 'B', text: "Enable audit logging for patch requests on Deployments and review the drift from Git manifests weekly." },
      { id: 'C', text: "Remove update and patch verbs from the SRE RoleBindings so that no one can change production Deployments." },
      { id: 'D', text: "Enforce the Restricted Pod Security Standard so that manual Deployment edits are rejected at admission time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A corrective control restores the desired state after a deviation; a GitOps controller such as Argo CD with self-heal, or Flux's continuous reconciliation, detects drift from Git and reapplies the approved manifests automatically. Audit logging records the edits but leaves them in place. Removing write verbs is preventive and would break the emergency access the SREs must keep. Pod Security admission checks pod security settings, not whether a Deployment matches its source in Git, so ordinary edits would still pass.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/cloud-native-security/",
    tags: ["Control types", "GitOps", "Drift"]
  },
  {
    id: "cncf-kcsa-38",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Adopting a policy engine alongside the pod standards",
    scenario: "A telco is adopting Kyverno for policies such as registry restrictions and required labels. An architect proposes dropping the Pod Security Standards from the security baseline, arguing that they belong to the built-in admission controller the team may no longer use.",
    question: "How should the security lead respond?",
    options: [
      { id: 'A', text: "Agree, because a policy engine replaces the need for any baseline of pod-level security requirements." },
      { id: 'B', text: "Agree, because the Pod Security Standards only exist as labels read by the built-in admission controller." },
      { id: 'C', text: "Disagree, because Kyverno cannot run when the built-in admission controller is also enabled in a cluster." },
      { id: 'D', text: "Disagree, because the Pod Security Standards are definitions that a policy engine can enforce as well." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Pod Security Standards are a documented set of policy levels, Privileged, Baseline and Restricted, independent of the mechanism that enforces them; Pod Security admission is the built-in enforcer, and engines such as Kyverno and Gatekeeper ship policy libraries that implement the same levels, so the standards remain the baseline whichever tool enforces them. The namespace labels are just how the built-in controller is configured. A policy engine is an enforcement tool and still needs a baseline of requirements to enforce. Kyverno and Pod Security admission can run together, and many clusters use both.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Pod Security Standards", "Policy engines", "Frameworks"]
  },
  {
    id: "cncf-kcsa-39",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Capping the memory a noisy container can use",
    scenario: "A shared analytics cluster keeps losing nodes when one team's container leaks memory and starves every other process on the host. The security architect explains that Linux provides one kernel feature for isolating what a process can see and another for limiting how much it can consume.",
    question: "Which kernel feature enforces the memory and CPU limits set on a container?",
    options: [
      { id: 'A', text: "Linux namespaces, which give each container its own view of process IDs, mounts and network interfaces." },
      { id: 'B', text: "Linux capabilities, which split root's privileges into units such as NET_ADMIN and SYS_ADMIN." },
      { id: 'C', text: "Seccomp filters, which restrict the system calls a process may invoke, such as those that map memory." },
      { id: 'D', text: "Control groups (cgroups), which account for and cap the CPU, memory and PIDs a process group uses." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Control groups meter and limit resources such as CPU, memory and process counts for a group of processes; the container runtime translates a container's resource limits into cgroup settings, and the kernel enforces them. Namespaces isolate what a process can see, not how much it can consume. Seccomp filters system calls and has no notion of resource quantities. Capabilities govern privileged operations, not memory or CPU usage.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/cgroups/",
    tags: ["Isolation", "cgroups", "Resource limits"]
  },
  {
    id: "cncf-kcsa-40",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "A vendor sidecar that can reach the admin port",
    scenario: "A fintech runs a closed-source monitoring agent from a third-party vendor as a sidecar in the same pod as its trading service. The trading service exposes an unauthenticated admin interface bound to 127.0.0.1:9090, and the security team does not want the vendor agent able to reach it.",
    question: "What should the team change?",
    options: [
      { id: 'A', text: "Set shareProcessNamespace to false on the pod so that the sidecar can no longer see the trading service ports." },
      { id: 'B', text: "Run the vendor agent as a different user ID so its sockets cannot connect to a port owned by the trading service." },
      { id: 'C', text: "Move the vendor agent into its own pod, because containers in one pod share a network namespace and loopback." },
      { id: 'D', text: "Add a NetworkPolicy that denies the sidecar's traffic to port 9090 while still allowing other ingress to the pod." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "All containers in a pod share one network namespace, so anything bound to 127.0.0.1 in one container is reachable from every other container in that pod; putting the untrusted agent in a separate pod gives it its own network namespace. NetworkPolicy applies to traffic entering and leaving the pod and cannot filter loopback traffic between containers inside it. Different user IDs do not restrict TCP connections to a listening port. shareProcessNamespace controls whether containers see each other's processes, and it is already false by default; it has no effect on the shared network namespace.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Isolation", "Linux namespaces", "Sidecars"]
  },
  {
    id: "cncf-kcsa-41",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Path-level limits for a service on Ubuntu nodes",
    scenario: "A healthcare company runs a document converter on Ubuntu worker nodes. The security team wants the converter's process confined so that it can execute only its own binary and write only under /data, while still being able to read its configuration from /etc/converter.",
    question: "Which mechanism provides this confinement?",
    options: [
      { id: 'A', text: "Dropping CAP_DAC_OVERRIDE and CAP_FOWNER so the process cannot bypass file permissions anywhere." },
      { id: 'B', text: "A ResourceQuota on the namespace that limits ephemeral storage so writes outside /data are refused." },
      { id: 'C', text: "A seccomp profile that removes the execve and write system calls from the converter's allowed list." },
      { id: 'D', text: "An AppArmor profile loaded on the nodes with path rules, referenced from the pod's securityContext." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AppArmor is a path-based mandatory access control system, available by default on Ubuntu, whose profiles can allow execution of specific binaries and restrict read and write access by path; the pod references a Localhost profile loaded on the node through securityContext.appArmorProfile. Seccomp filters system calls without regard to file paths, so removing execve or write would stop the converter from starting or writing at all. Dropping DAC capabilities stops bypassing file permissions but does not confine the process to particular paths it already has permission for. ResourceQuota limits quantities of resources, not which paths a process may write.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/security/apparmor/",
    tags: ["Isolation", "AppArmor", "Mandatory access control"]
  },
  {
    id: "cncf-kcsa-42",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Two containers, same UID, different MCS categories",
    scenario: "On a RHEL-based cluster with user namespaces disabled, two pods from different teams run on the same node and both processes use UID 1000. A penetration tester who escaped one container's filesystem view could not read the other container's writable files, even though standard Unix permissions would have allowed it.",
    question: "Which mechanism most likely blocked the access?",
    options: [
      { id: 'A', text: "SELinux, which gives each container a unique MCS category pair that must match to access its files." },
      { id: 'B', text: "Control groups, which prevent a process in one pod's cgroup from reading files owned by another cgroup." },
      { id: 'C', text: "The runtime's default AppArmor profile, which assigns every container a different per-container label." },
      { id: 'D', text: "The runtime's default seccomp profile, which denies the open system call on files owned by other pods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "With SELinux enforcing, container runtimes label each container's processes and files with the container type plus a unique Multi-Category Security pair such as s0:c123,c456; the policy denies access when categories differ, so two containers sharing a UID still cannot read each other's files. The default seccomp profile blocks dangerous system calls, not opens of particular files. cgroups limit resource consumption and do not control file access. AppArmor is not the default on RHEL, and its default container profile is the same for every container rather than unique per container.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Isolation", "SELinux", "MCS"]
  },
  {
    id: "cncf-kcsa-43",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Why ps shows only one process inside the container",
    scenario: "A junior engineer at a charity opens a shell in a running container and runs ps. Only the application process, shown as PID 1, and the shell appear, even though the node is running hundreds of processes for other containers and system services.",
    question: "Which isolation mechanism produces this view?",
    options: [
      { id: 'A', text: "A PID namespace, which gives the container its own process ID space starting from PID 1 inside it." },
      { id: 'B', text: "A control group, which hides processes belonging to other cgroups from tools run inside the container." },
      { id: 'C', text: "A seccomp profile, which blocks the system calls that ps would need to read other processes' details." },
      { id: 'D', text: "A mount namespace alone, which gives the container a private filesystem without any host directories." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Each container normally gets its own PID namespace, so processes inside see only each other, numbered from PID 1, while the host sees them under different IDs; hostPID or shareProcessNamespace change that. cgroups limit and account for resources but do not hide processes. The default seccomp profile does not block the calls ps uses; it filters dangerous system calls. A mount namespace gives the container its own filesystem view, and although that includes its own /proc mount, which processes appear there is decided by the PID namespace.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/share-process-namespace/",
    tags: ["Isolation", "Linux namespaces", "PID namespace"]
  },
  {
    id: "cncf-kcsa-44",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "A tenant asking to tune a kernel memory setting",
    scenario: "A database team on a shared cluster asks the platform team to let their pods set vm.swappiness through the pod's securityContext sysctls field, arguing that the setting will apply only to their own containers. Other tenants' pods share the same nodes.",
    question: "How should the platform team respond?",
    options: [
      { id: 'A', text: "Allow it, because every sysctl set in a pod spec is scoped to that pod's own namespaces by the kernel." },
      { id: 'B', text: "Refuse it, because vm.* sysctls are not namespaced, so the value would change the whole shared node." },
      { id: 'C', text: "Allow it, because vm.swappiness is on the safe sysctl list that the kubelet permits for every pod." },
      { id: 'D', text: "Refuse it, because pods may never set any sysctl, whether it is namespaced or node-level, in any case." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Only namespaced sysctls, such as many net.* and some kernel.* parameters, can be isolated per pod; vm.* parameters are node-level, so they cannot be set through a pod's sysctls field and would affect every workload on the node if changed another way, which breaks tenant isolation. Node-level tuning belongs in node configuration, perhaps on a dedicated pool. Not every sysctl is namespaced by the kernel. vm.swappiness is not on the safe list, which contains a handful of namespaced parameters like net.ipv4.ip_local_port_range. Pods may set safe sysctls by default, and administrators can allow specific unsafe namespaced ones on chosen nodes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/",
    tags: ["Isolation", "Sysctls", "Multi-tenancy"]
  },
  {
    id: "cncf-kcsa-45",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Data that must stay hidden from the node's root user",
    scenario: "A genomics company processes patient sequences on a shared Kubernetes platform operated by a separate infrastructure team. Its regulator requires that the data remain protected while in use, even from an administrator who has root on the worker node or access to the hypervisor.",
    question: "Which isolation approach addresses that threat?",
    options: [
      { id: 'A', text: "Enable API server encryption at rest so the patient data is encrypted before it is stored in etcd." },
      { id: 'B', text: "Use confidential containers backed by hardware TEEs that encrypt memory against the host and hypervisor." },
      { id: 'C', text: "Enable user namespaces so container root maps to an unprivileged ID on the node and hypervisor host." },
      { id: 'D', text: "Run the pods under gVisor so their system calls are handled by a user-space kernel instead of the host." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Confidential computing uses hardware trusted execution environments, such as AMD SEV-SNP or Intel TDX, to encrypt a workload's memory and attest its integrity, so even root on the host or the hypervisor operator cannot read data in use; the CNCF Confidential Containers project brings this to Kubernetes pods. gVisor protects the host from the container, not the container from a privileged host user. User namespaces likewise protect the node from the container's root. Encryption at rest protects stored Secrets in etcd, not data being processed in memory.",
    referenceUrl: "https://confidentialcontainers.org/docs/overview/",
    tags: ["Isolation", "Confidential computing", "Data in use"]
  },
  {
    id: "cncf-kcsa-46",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Self-service RBAC confined to one namespace",
    scenario: "A bank gives each product team its own namespace and wants team leads to manage Roles, RoleBindings and workloads there without raising tickets. Team leads must not be able to see or change anything in other teams' namespaces or cluster-scoped resources.",
    question: "How should access be granted?",
    options: [
      { id: 'A', text: "A ClusterRoleBinding to the built-in admin ClusterRole for each lead, scoped by a label on their namespace." },
      { id: 'B', text: "A ClusterRoleBinding to the built-in edit ClusterRole, since edit excludes Roles and RoleBindings." },
      { id: 'C', text: "A RoleBinding in each namespace granting cluster-admin, which a RoleBinding also limits to that namespace." },
      { id: 'D', text: "A RoleBinding in each team's namespace that grants its lead the built-in admin ClusterRole there only." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A RoleBinding can reference a ClusterRole and grants its permissions only within the binding's namespace; binding the built-in admin role that way lets a lead manage workloads, Roles and RoleBindings in their namespace with no access elsewhere. ClusterRoleBindings apply cluster-wide and cannot be scoped by namespace labels. The edit role does not allow managing Roles or RoleBindings, so leads could not self-serve access, and a ClusterRoleBinding would expose every namespace. Binding cluster-admin through a RoleBinding is limited to the namespace, but it grants more than needed, such as changing the ResourceQuotas and LimitRanges administrators set, which the admin role deliberately excludes.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["Isolation", "RBAC", "Multi-tenancy"]
  },
  {
    id: "cncf-kcsa-47",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "A fork bomb that froze a whole node",
    scenario: "A buggy batch job in a shared cluster spawned processes in a loop until the worker node could no longer start any new process, which knocked out every other tenant's pods on that node. The job had CPU and memory limits set well within the node's capacity.",
    question: "Which setting would have contained the damage to the offending pod?",
    options: [
      { id: 'A', text: "A lower memory limit on the job's containers so the kernel kills it before it creates many processes." },
      { id: 'B', text: "A kubelet pod PID limit, which caps how many processes any single pod may run on the node at once." },
      { id: 'C', text: "A ResourceQuota on the namespace capping the number of pods the batch team is allowed to create." },
      { id: 'D', text: "A LimitRange that sets a default CPU limit for every container created in the batch namespace." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Process IDs are a shared node resource; the kubelet's podPidsLimit (the --pod-max-pids flag) caps the number of PIDs each pod can use, so one pod's runaway forking cannot exhaust the node's PID space for others. Tiny processes can exhaust PIDs long before a memory limit triggers. A pod-count quota does not limit processes inside a single pod. A default CPU limit throttles compute but places no ceiling on process creation.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/pid-limiting/",
    tags: ["Isolation", "PID limits", "Noisy neighbour"]
  },
  {
    id: "cncf-kcsa-48",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Customers who must not learn each other's service names",
    scenario: "A B2B platform hosts each customer in its own namespace of a shared cluster, with default-deny NetworkPolicies and RBAC that grants customers no list rights outside their namespace. A new contract says one customer must not be able to discover even the names of the Services running for other customers.",
    question: "Which statement is accurate?",
    options: [
      { id: 'A', text: "Without list rights on Services, a customer's pods cannot resolve other namespaces' Service DNS names." },
      { id: 'B', text: "Default-deny NetworkPolicies already stop cluster DNS from answering queries about other namespaces." },
      { id: 'C', text: "Converting the Services to headless makes their DNS records resolvable only from inside that namespace." },
      { id: 'D', text: "Cluster DNS answers for Services in every namespace, so hiding names needs a stronger tenant boundary." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cluster DNS serves records for Services in all namespaces to any pod that can reach it, and names are easily guessed or enumerated, so namespaces do not hide Service names; meeting the clause requires something stronger, such as separate clusters or per-tenant DNS configuration. NetworkPolicy may block connections to the discovered addresses, but pods must reach DNS to work, and the answers still describe other namespaces. RBAC controls the Kubernetes API, not DNS queries. Headless Services still publish records in cluster DNS that any namespace can query.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/multi-tenancy/",
    tags: ["Isolation", "Multi-tenancy", "DNS"]
  },
  {
    id: "cncf-kcsa-49",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Why one kernel CVE affects every container",
    scenario: "A security bulletin announces a Linux kernel privilege-escalation vulnerability. A product manager asks why the platform team must patch every node urgently when each application already runs in its own container with separate filesystems and process trees.",
    question: "What is the key reason?",
    options: [
      { id: 'A', text: "Standard containers share the node's kernel, so a kernel flaw can let any container escape its isolation." },
      { id: 'B', text: "Containers run inside lightweight virtual machines, and the hypervisor inherits the kernel vulnerability." },
      { id: 'C', text: "The container runtime downloads kernel modules from the registry each time a container starts on a node." },
      { id: 'D', text: "Each container ships its own kernel inside the image, so every image has to be rebuilt with a fixed one." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Namespaces and cgroups are features of a single shared host kernel; every standard container on a node makes system calls into that kernel, so a kernel privilege-escalation bug can let a process in any container break out. Images contain user-space files only, not a kernel. Ordinary runc containers are not virtual machines; only sandboxed runtimes such as Kata Containers add a separate guest kernel. Runtimes do not fetch kernel modules from registries.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/linux-kernel-security-constraints/",
    tags: ["Isolation", "Shared kernel"]
  },
  {
    id: "cncf-kcsa-50",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Spare capacity on the control plane nodes",
    scenario: "To save money, an engineer at a self-managed cluster removed the NoSchedule taint from the control plane nodes so that application pods could use their idle CPU. Those nodes also host etcd, the API server and the cluster's CA key.",
    question: "What should the team do?",
    options: [
      { id: 'A', text: "Keep the untainted nodes but add a LimitRange so application pods there use less CPU and memory." },
      { id: 'B', text: "Restore the control-plane taint so application workloads never run beside etcd and CA secrets." },
      { id: 'C', text: "Keep the change but move etcd to port 12379 so application pods cannot find it on the node." },
      { id: 'D', text: "Keep the change but enforce the Baseline Pod Security Standard on all application namespaces." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Control plane nodes hold the most sensitive material in the cluster, so kubeadm taints them with node-role.kubernetes.io/control-plane:NoSchedule to keep ordinary workloads off; a compromised application pod on such a node is one escape away from etcd data and the CA key. A LimitRange controls resource use, not co-location risk. Baseline blocks the most dangerous pod settings but a container escape through a kernel flaw would still land on a control plane host. Changing etcd's port is obscurity and does not isolate anything.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Isolation", "Control plane", "Taints"]
  }
];

export default CNCF_KCSA_QUESTIONS_2;
