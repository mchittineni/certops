export const CNCF_KCSA_FLASHCARDS_2 = [
  {
    id: 'cncf-kcsa-fc-26',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Preventive, detective, corrective and compensating controls: give a Kubernetes example of each.',
    hint: 'Before, during/after, repair, substitute.',
    back: '<strong>Preventive</strong> stops the event: Pod Security admission rejecting a privileged pod, RBAC denying a verb. <strong>Detective</strong> notices it: Falco alerts, audit log analysis. <strong>Corrective</strong> restores the good state: GitOps self-heal, automated rollback. <strong>Compensating</strong> reduces risk when the ideal control cannot be applied: a root-requiring app isolated in its own namespace with tight NetworkPolicy and runtime monitoring.',
    tags: ['Control types']
  },
  {
    id: 'cncf-kcsa-fc-27',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'What are the main themes of the NSA/CISA Kubernetes Hardening Guidance?',
    hint: 'A free US government guide; think pods, network, identity, logs, upkeep.',
    back: '<ul><li><strong>Scan</strong> containers and pods for vulnerabilities and misconfigurations</li><li>Run with <strong>least privilege</strong>: non-root, immutable filesystems</li><li><strong>Network separation</strong>: NetworkPolicy, firewalls, protected control plane</li><li><strong>Strong authentication and authorization</strong> (RBAC, no anonymous access)</li><li><strong>Audit logging</strong> and threat detection</li><li><strong>Regular review and prompt upgrades</strong></li></ul>',
    tags: ['NSA/CISA', 'Frameworks']
  },
  {
    id: 'cncf-kcsa-fc-28',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'CIS Benchmark profiles: Level 1 vs Level 2, and Automated vs Manual recommendations.',
    hint: 'One axis is impact, the other is how you check.',
    back: '<strong>Level 1</strong>: essential, practical settings with little impact on functionality; a baseline for everyone. <strong>Level 2</strong>: defense-in-depth settings for high-security environments that may reduce functionality or need planning. <strong>Automated</strong> recommendations can be checked by a tool such as kube-bench; <strong>Manual</strong> ones need human judgement (formerly Scored and Not Scored).',
    tags: ['CIS Benchmark']
  },
  {
    id: 'cncf-kcsa-fc-29',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'MITRE ATT&CK Containers matrix vs the Microsoft Threat Matrix for Kubernetes: how are they related?',
    hint: 'Which came first, and which is the maintained standard?',
    back: 'Microsoft published the <strong>Threat Matrix for Kubernetes</strong> in 2020, adapting ATT&amp;CK tactics (initial access, execution, persistence, privilege escalation, credential access, lateral movement, impact) to Kubernetes-specific techniques. MITRE later added an official <strong>Containers matrix</strong> to ATT&amp;CK, informed by that work. Both map attacker behaviour; use them to measure detection coverage, not as configuration checklists.',
    tags: ['MITRE ATT&CK', 'Threat modelling']
  },
  {
    id: 'cncf-kcsa-fc-30',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Spell out STRIDE with one Kubernetes example per category.',
    hint: 'Six letters, six threat types.',
    back: '<strong>S</strong>poofing: using a stolen service account token. <strong>T</strong>ampering: altering an image in a registry. <strong>R</strong>epudiation: changes made with audit logging disabled. <strong>I</strong>nformation disclosure: reading Secrets through over-broad RBAC. <strong>D</strong>enial of service: a pod exhausting node resources or flooding the API server. <strong>E</strong>levation of privilege: escaping a privileged container to node root.',
    tags: ['STRIDE', 'Threat modelling']
  },
  {
    id: 'cncf-kcsa-fc-31',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Summarise the three Pod Security Standards levels.',
    hint: 'Open, known-bad blocked, hardened.',
    back: '<strong>Privileged</strong>: unrestricted, for trusted system and infrastructure workloads. <strong>Baseline</strong>: blocks known privilege escalations (privileged containers, host namespaces, hostPath, added dangerous capabilities) while running most apps unchanged. <strong>Restricted</strong>: current hardening best practice, adding non-root, dropping ALL capabilities, no privilege escalation and a seccomp profile.',
    tags: ['Pod Security Standards']
  },
  {
    id: 'cncf-kcsa-fc-32',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Pod Security admission has three modes. What does each do?',
    hint: 'Reject, tell the user, tell the log.',
    back: '<strong>enforce</strong>: violating pods are rejected. <strong>warn</strong>: the request succeeds but the user gets a warning. <strong>audit</strong>: the request succeeds and an annotation is added to the audit event. Set per namespace with labels like <code>pod-security.kubernetes.io/enforce: baseline</code>. warn and audit also evaluate workload templates such as Deployments; enforce applies to the pods themselves.',
    tags: ['Pod Security admission']
  },
  {
    id: 'cncf-kcsa-fc-33',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Why pin a Pod Security version label, and what can be exempted from Pod Security admission?',
    hint: 'Standards evolve; exemptions have exactly three dimensions.',
    back: 'A label such as <code>pod-security.kubernetes.io/enforce-version: v1.30</code> pins the rules of that release, so a cluster upgrade that tightens a profile cannot suddenly reject workloads; <code>latest</code> follows the running version. <strong>Exemptions</strong>, set in the admission configuration, can match only <strong>usernames</strong>, <strong>runtimeClassNames</strong> or <strong>namespaces</strong>. Exempt requests skip evaluation entirely, including warn and audit.',
    tags: ['Pod Security admission', 'Exemptions']
  },
  {
    id: 'cncf-kcsa-fc-34',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'ValidatingAdmissionPolicy vs a webhook policy engine (Gatekeeper, Kyverno): when choose which?',
    hint: 'In-process CEL vs an extra service.',
    back: '<strong>ValidatingAdmissionPolicy</strong> (stable since 1.30) evaluates CEL rules inside the API server: no extra service to run, secure or scale, and no webhook latency or availability risk. <strong>Webhook engines</strong> add mutation, image verification, generation of resources, reporting on existing objects and richer policy libraries, at the cost of running a highly available admission service with a failure policy to decide.',
    tags: ['Admission control', 'Policy engines']
  },
  {
    id: 'cncf-kcsa-fc-35',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'What are the core tenets of zero trust as applied to a Kubernetes cluster?',
    hint: 'Location grants nothing.',
    back: '<strong>Never trust network location</strong>; <strong>authenticate and authorise every request</strong> with a strong identity (users via OIDC, workloads via service account tokens or mTLS/SPIFFE identities); grant <strong>least privilege</strong> per request; and <strong>assume breach</strong>, so monitor continuously and limit lateral movement. NIST SP 800-207 is the reference architecture.',
    tags: ['Zero trust']
  },
  {
    id: 'cncf-kcsa-fc-36',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Which five areas does NIST SP 800-190 organise container risks into?',
    hint: 'Follow an image from build to host.',
    back: '<strong>Images</strong> (vulnerabilities, embedded secrets, untrusted sources), <strong>registries</strong> (insecure connections, stale images, weak authentication), <strong>orchestrators</strong> (unbounded admin access, mixed-sensitivity workloads, weak control plane security), <strong>containers</strong> (runtime vulnerabilities, unbounded network access, rogue containers) and <strong>host OSes</strong> (large attack surface, shared kernel, tampering).',
    tags: ['NIST SP 800-190', 'Frameworks']
  },
  {
    id: 'cncf-kcsa-fc-37',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'In what order does the API server run admission, and why does it matter for policy?',
    hint: 'Change first, judge second.',
    back: 'After authentication and authorization: <strong>mutating admission</strong> (built-in plugins and mutating webhooks), then <strong>object schema validation</strong>, then <strong>validating admission</strong> (built-in plugins, ValidatingAdmissionPolicy, validating webhooks), then persistence to etcd. Validation therefore sees the final object after every mutation, so a validating policy can reliably reject a spec that a mutating webhook altered.',
    tags: ['Admission control']
  },
  {
    id: 'cncf-kcsa-fc-38',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Which Linux namespaces isolate containers, and which ones do containers in a pod share?',
    hint: 'Seven kinds; a pod shares a few by default.',
    back: '<strong>pid</strong>, <strong>net</strong>, <strong>mnt</strong>, <strong>uts</strong>, <strong>ipc</strong>, <strong>user</strong> and <strong>cgroup</strong> namespaces. Containers in one pod share the <strong>network</strong> (same IP and localhost) and <strong>IPC</strong> namespaces and can share volumes; each keeps its own mount namespace, and the PID namespace is shared only if <code>shareProcessNamespace: true</code>.',
    tags: ['Isolation', 'Linux namespaces']
  },
  {
    id: 'cncf-kcsa-fc-39',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'cgroup v1 vs cgroup v2 on Kubernetes nodes: what changed and why does it matter?',
    hint: 'One unified tree.',
    back: 'cgroup v2 provides a <strong>single unified hierarchy</strong> with consistent resource accounting, safer delegation and features such as memory QoS and pressure stall information. Kubernetes support for cgroup v2 is GA since 1.25, and cgroup v1 support is in <strong>maintenance mode</strong> since 1.31. Current container-optimised OSes default to v2, which also improves the reliability of memory limits.',
    tags: ['Isolation', 'cgroups']
  },
  {
    id: 'cncf-kcsa-fc-40',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'seccomp vs AppArmor vs SELinux: what does each restrict?',
    hint: 'Calls, paths, labels.',
    back: '<strong>seccomp</strong> filters <strong>system calls</strong> (and their arguments); set via <code>securityContext.seccompProfile</code>. <strong>AppArmor</strong> confines a process by <strong>file paths</strong>, capabilities and network access; default on Ubuntu/Debian, set via <code>appArmorProfile</code>. <strong>SELinux</strong> enforces policy by <strong>labels</strong> on processes and objects; default on RHEL/Fedora, set via <code>seLinuxOptions</code>. They are complementary layers.',
    tags: ['Isolation', 'Linux security modules']
  },
  {
    id: 'cncf-kcsa-fc-41',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'How do SELinux MCS categories keep two containers apart even when they share a UID?',
    hint: 'Look at the last part of the label.',
    back: 'With SELinux enforcing, the runtime gives each container a label such as <code>system_u:system_r:container_t:s0:c123,c456</code>, with a <strong>unique category pair</strong>, and labels its files to match. Policy permits access only when the categories dominate, so a process from one container cannot read another container\'s files regardless of Unix permissions. Pods can set a fixed level with <code>seLinuxOptions.level</code> when they must share volumes.',
    tags: ['Isolation', 'SELinux']
  },
  {
    id: 'cncf-kcsa-fc-42',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Soft vs hard multi-tenancy: what is the difference?',
    hint: 'How much do the tenants trust each other?',
    back: '<strong>Soft multi-tenancy</strong> assumes tenants are cooperative (teams in one company) and mainly guards against accidents: namespaces, RBAC, quotas, NetworkPolicies. <strong>Hard multi-tenancy</strong> assumes tenants may be hostile (external customers) and needs much stronger boundaries: sandboxed runtimes, dedicated nodes, separate control planes or separate clusters.',
    tags: ['Isolation', 'Multi-tenancy']
  },
  {
    id: 'cncf-kcsa-fc-43',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Order these isolation options from weakest to strongest: sandboxed runtime, separate cluster, namespace, dedicated node pool, virtual control plane.',
    hint: 'Each step removes something tenants share.',
    back: '<strong>Namespace</strong> (shares nodes, kernel and control plane) → <strong>dedicated node pool</strong> (separate nodes, shared control plane) → <strong>sandboxed runtime</strong> such as gVisor or Kata (separate kernel boundary per pod) → <strong>virtual control plane</strong> such as vcluster (own API server, shared nodes) → <strong>separate cluster</strong> (nothing shared but infrastructure). The ordering of the middle options depends on the threat; combine them as needed.',
    tags: ['Isolation', 'Multi-tenancy']
  },
  {
    id: 'cncf-kcsa-fc-44',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'What do confidential containers add that sandboxed runtimes do not?',
    hint: 'Who is being protected from whom?',
    back: 'Sandboxed runtimes protect the <strong>host from the workload</strong>. Confidential containers protect the <strong>workload from the host</strong>: pods run in hardware trusted execution environments (AMD SEV-SNP, Intel TDX) that encrypt memory, and <strong>remote attestation</strong> proves the environment is genuine before a key broker releases secrets. Node root and the hypervisor operator cannot read data in use.',
    tags: ['Isolation', 'Confidential computing']
  },
  {
    id: 'cncf-kcsa-fc-45',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'How do you stop one pod from exhausting a node\'s process IDs?',
    hint: 'A kubelet setting, not a container limit.',
    back: 'Set the kubelet <strong><code>podPidsLimit</code></strong> (flag <code>--pod-max-pids</code>) to cap PIDs per pod, and reserve PIDs for the system with <code>--system-reserved</code>/<code>--kube-reserved</code> <code>pid=</code> values so node daemons keep working. The kubelet can also evict pods under PID pressure. CPU and memory limits do not bound the number of processes.',
    tags: ['Isolation', 'PID limits']
  },
  {
    id: 'cncf-kcsa-fc-46',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'How can you restrict pod egress to specific external destinations, and what are the limits of standard NetworkPolicy?',
    hint: 'Standard policy speaks IP, not names.',
    back: 'Standard NetworkPolicy egress rules match pods, namespaces and <strong><code>ipBlock</code> CIDRs</strong> plus ports; they cannot match DNS names, so remember to allow DNS to the cluster resolver. For hostname-based rules use CNI extensions such as <strong>Cilium <code>toFQDNs</code></strong>, or route traffic through an <strong>egress gateway or proxy</strong> that enforces an allow-list and gives a stable source IP.',
    tags: ['Isolation', 'NetworkPolicy', 'Egress']
  },
  {
    id: 'cncf-kcsa-fc-47',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Two containers in the same pod: what can one reach on the other without any network rule?',
    hint: 'Same IP.',
    back: 'Everything the other listens on, including ports bound to <strong>127.0.0.1</strong>, because containers in a pod share one network namespace. NetworkPolicy cannot filter traffic between them. Put untrusted sidecars or agents in <strong>separate pods</strong> when they should not reach the main container\'s local-only interfaces.',
    tags: ['Isolation', 'Pods']
  },
  {
    id: 'cncf-kcsa-fc-48',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Explain three NetworkPolicy semantics that often surprise people.',
    hint: 'Additive, isolation on selection, both ends.',
    back: '<strong>1. Policies are additive allow-lists</strong>: there are no deny rules, and the union of all matching policies applies. <strong>2. A pod is isolated only once a policy selects it</strong> for that direction; unselected pods accept everything. <strong>3. A connection needs both sides to allow it</strong>: the source pod\'s egress (if isolated) and the destination pod\'s ingress (if isolated). And none of it works unless the CNI plugin enforces NetworkPolicy.',
    tags: ['Isolation', 'NetworkPolicy']
  },
  {
    id: 'cncf-kcsa-fc-49',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'What gap does AdminNetworkPolicy address that namespaced NetworkPolicy cannot?',
    hint: 'Guardrails a namespace owner cannot override.',
    back: 'NetworkPolicy is namespaced, allow-only and written by namespace owners, so administrators cannot impose cluster-wide rules that tenants cannot loosen. <strong>AdminNetworkPolicy</strong> and <strong>BaselineAdminNetworkPolicy</strong>, from the SIG Network network-policy-api project (alpha, implemented by some CNIs), are cluster-scoped, support <strong>Deny</strong>, <strong>Allow</strong> and <strong>Pass</strong> actions, and are evaluated before (or, for Baseline, after) namespace policies.',
    tags: ['Isolation', 'AdminNetworkPolicy']
  },
  {
    id: 'cncf-kcsa-fc-50',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'What happens when a RoleBinding references a ClusterRole?',
    hint: 'The binding sets the scope.',
    back: 'The ClusterRole\'s rules are granted <strong>only within the RoleBinding\'s namespace</strong>. This lets administrators define roles such as the built-in <code>admin</code>, <code>edit</code> and <code>view</code> once and reuse them per namespace, which is the standard way to give tenants self-service inside their own namespace without cluster-wide rights.',
    tags: ['Isolation', 'RBAC']
  }
];

export default CNCF_KCSA_FLASHCARDS_2;
