export const CNCF_KCSA_FLASHCARDS_9 = [
  {
    id: 'cncf-kcsa-fc-201',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'What is the exact label format Pod Security Admission reads from a namespace?',
    hint: 'A fixed prefix, a mode, and optionally a version suffix.',
    back: '<code>pod-security.kubernetes.io/&lt;MODE&gt;: &lt;LEVEL&gt;</code>, where MODE is <strong>enforce</strong>, <strong>audit</strong> or <strong>warn</strong> and LEVEL is <strong>privileged</strong>, <strong>baseline</strong> or <strong>restricted</strong>. Each mode can also carry <code>pod-security.kubernetes.io/&lt;MODE&gt;-version: v1.NN</code> or <code>latest</code>. Example: <code>pod-security.kubernetes.io/enforce: baseline</code>.',
    tags: ['Pod Security Admission', 'Namespace labels']
  },
  {
    id: 'cncf-kcsa-fc-202',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'What does the privileged Pod Security level allow, and where does it belong?',
    hint: 'It is the absence of restrictions.',
    back: 'The <strong>privileged</strong> level is <strong>entirely unrestricted</strong>: it permits known privilege escalations such as privileged containers, host namespaces and hostPath. It is meant for trusted, system-level and infrastructure workloads run by privileged users, such as CNI agents, storage drivers and node monitoring, kept in dedicated namespaces with tight RBAC.',
    tags: ['Pod Security Standards', 'Privileged']
  },
  {
    id: 'cncf-kcsa-fc-203',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'Which areas does the baseline Pod Security Standard control?',
    hint: 'Everything that reaches the host, plus a few confinement settings.',
    back: 'Baseline forbids <strong>Windows HostProcess</strong> pods, <strong>host namespaces</strong> (network, PID, IPC), <strong>privileged</strong> containers, <strong>capabilities</strong> beyond the default set, <strong>hostPath</strong> volumes and <strong>host ports</strong>. It also blocks disabling <strong>AppArmor</strong>, custom <strong>SELinux</strong> users, roles and privileged types, an unmasked <strong>/proc</strong> mount, <strong>Unconfined seccomp</strong>, and any <strong>sysctls</strong> outside a safe set.',
    tags: ['Pod Security Standards', 'Baseline']
  },
  {
    id: 'cncf-kcsa-fc-204',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'What does the restricted level require on top of baseline?',
    hint: 'Five additions about volumes, users, escalation, capabilities and syscalls.',
    back: 'Restricted adds: only the allowed <strong>volume types</strong> (configMap, csi, downwardAPI, emptyDir, ephemeral, persistentVolumeClaim, projected, secret); <strong>allowPrivilegeEscalation: false</strong>; <strong>runAsNonRoot: true</strong> and no runAsUser of 0; <strong>seccompProfile</strong> explicitly RuntimeDefault or Localhost; and capabilities dropped to <strong>ALL</strong>, with only <strong>NET_BIND_SERVICE</strong> addable.',
    tags: ['Pod Security Standards', 'Restricted']
  },
  {
    id: 'cncf-kcsa-fc-205',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'Which Linux capabilities may a pod add and still pass baseline?',
    hint: 'Roughly the runtime\'s default set; nothing powerful.',
    back: 'Only capabilities from the usual runtime default set: <strong>AUDIT_WRITE, CHOWN, DAC_OVERRIDE, FOWNER, FSETID, KILL, MKNOD, NET_BIND_SERVICE, SETFCAP, SETGID, SETPCAP, SETUID and SYS_CHROOT</strong>. Anything else, such as NET_ADMIN, SYS_ADMIN, SYS_PTRACE or NET_RAW, fails baseline. Restricted is stricter again: drop ALL and add back at most NET_BIND_SERVICE.',
    tags: ['Pod Security Standards', 'Baseline', 'Capabilities']
  },
  {
    id: 'cncf-kcsa-fc-206',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'Which sysctls may a pod set under the baseline level?',
    hint: 'A short allowlist of namespaced, isolated settings.',
    back: 'Only a fixed safe set, which has grown over releases: <strong>kernel.shm_rmid_forced</strong>, <strong>net.ipv4.ip_local_port_range</strong>, <strong>net.ipv4.ip_unprivileged_port_start</strong>, <strong>net.ipv4.tcp_syncookies</strong>, <strong>net.ipv4.ping_group_range</strong>, <strong>net.ipv4.ip_local_reserved_ports</strong> and the TCP keepalive and fin-timeout settings. Any other sysctl fails baseline, even if the kubelet has been told to allow it as an unsafe sysctl.',
    tags: ['Pod Security Standards', 'Baseline', 'sysctls']
  },
  {
    id: 'cncf-kcsa-fc-207',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'Which objects does each Pod Security Admission mode evaluate?',
    hint: 'One mode ignores Deployments.',
    back: '<strong>enforce</strong> evaluates only <strong>pod</strong> objects, so a violating Deployment is created and its pods are then refused, showing up as ReplicaSet FailedCreate events. <strong>warn</strong> and <strong>audit</strong> also evaluate <strong>workload resources</strong> with pod templates (Deployments, Jobs, StatefulSets and so on), which gives early feedback at apply time. Setting warn alongside enforce avoids silent failures.',
    tags: ['Pod Security Admission', 'Workload resources']
  },
  {
    id: 'cncf-kcsa-fc-208',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'Which pod updates are exempt from Pod Security checks even if the pod violates policy?',
    hint: 'Changes that cannot raise privileges.',
    back: 'Updates that only change: <strong>metadata</strong> (except the legacy seccomp or AppArmor annotations), valid changes to <strong>spec.activeDeadlineSeconds</strong>, and valid changes to <strong>spec.tolerations</strong>. Such updates are not denied, so controllers can label or annotate an existing non-compliant pod. Any other update, such as adding an ephemeral container, is evaluated against the current level.',
    tags: ['Pod Security Admission', 'Updates', 'Exemptions']
  },
  {
    id: 'cncf-kcsa-fc-209',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'How do you preview which running pods would violate a level before enforcing it?',
    hint: 'A label change that is never saved.',
    back: 'Run a <strong>server-side dry run</strong> of the label change, for example <code>kubectl label --dry-run=server --overwrite ns --all pod-security.kubernetes.io/enforce=restricted</code>. The API server evaluates the existing pods in each namespace and returns warnings listing violations, without persisting the label. A client-side dry run skips admission and shows nothing useful.',
    tags: ['Pod Security Admission', 'Dry run', 'Migration']
  },
  {
    id: 'cncf-kcsa-fc-210',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'What happened to PodSecurityPolicy, and what replaced it?',
    hint: 'Removed in the mid-1.2x releases.',
    back: '<strong>PodSecurityPolicy</strong> was deprecated in 1.21 and <strong>removed in 1.25</strong> because it was confusing to apply (policies granted through RBAC on use) and hard to roll out. Its built-in replacement is <strong>Pod Security Admission</strong>, which enforces the Pod Security Standards per namespace. Needs beyond the three levels are handled by policy engines or ValidatingAdmissionPolicy.',
    tags: ['PodSecurityPolicy', 'Pod Security Admission', 'History']
  },
  {
    id: 'cncf-kcsa-fc-211',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'What goes in the PodSecurity admission plugin\'s configuration file?',
    hint: 'Two sections: what to do by default, and who is left out.',
    back: 'An AdmissionConfiguration passed with <code>--admission-control-config-file</code> contains a <strong>PodSecurityConfiguration</strong> with <strong>defaults</strong> (enforce, audit and warn levels and versions applied to namespaces without labels) and <strong>exemptions</strong> (lists of <strong>usernames</strong>, <strong>runtimeClasses</strong> and <strong>namespaces</strong> that bypass evaluation). Namespace labels override the defaults; exemptions override everything.',
    tags: ['Pod Security Admission', 'AdmissionConfiguration']
  },
  {
    id: 'cncf-kcsa-fc-212',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'How exactly does restricted check the user a container runs as?',
    hint: 'One field must be true; another must not be zero.',
    back: '<strong>runAsNonRoot</strong> must be <strong>true</strong>, set at pod level or on every container (a container may not set it false). <strong>runAsUser</strong>, if set anywhere, must not be <strong>0</strong>. Admission checks only the spec; the kubelet then enforces runAsNonRoot at start-up against the image\'s actual user, which is why a named, non-numeric image user can still fail to start.',
    tags: ['Pod Security Standards', 'Restricted', 'runAsNonRoot']
  },
  {
    id: 'cncf-kcsa-fc-213',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'A pod sets RuntimeDefault seccomp at pod level, but one container sets Unconfined. How does Pod Security treat it?',
    hint: 'The container value overrides the pod value.',
    back: 'It <strong>fails baseline</strong> (and therefore restricted): Unconfined is forbidden wherever it appears, and the container-level setting overrides the pod-level one for that container. Restricted additionally requires every container to end up with RuntimeDefault or Localhost, either inherited from the pod or set directly, so leaving the pod level unset and one container unset also fails.',
    tags: ['Pod Security Standards', 'seccomp', 'Security context']
  },
  {
    id: 'cncf-kcsa-fc-214',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'Does Pod Security Admission check init containers and ephemeral containers?',
    hint: 'Every place a process can run.',
    back: 'Yes. Checks apply to <strong>containers</strong>, <strong>initContainers</strong> and <strong>ephemeralContainers</strong>. A privileged init container fails baseline just like a privileged main container, and adding a privileged debug container through the ephemeralcontainers subresource (for example kubectl debug with the sysadmin profile) is rejected in a baseline or restricted namespace.',
    tags: ['Pod Security Admission', 'Init containers', 'Ephemeral containers']
  },
  {
    id: 'cncf-kcsa-fc-215',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'What policy applies to a namespace with no Pod Security labels and no configured defaults?',
    hint: 'The permissive end of the scale.',
    back: '<strong>privileged</strong> for all three modes, at version <strong>latest</strong>: nothing is enforced, warned or audited. That is why clusters should either label every namespace or set <strong>defaults</strong> in the PodSecurity admission configuration, and why managed platforms often ship their own defaults.',
    tags: ['Pod Security Admission', 'Defaults']
  },
  {
    id: 'cncf-kcsa-fc-216',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'Why must permission to edit Namespace objects be tightly controlled when using Pod Security Admission?',
    hint: 'The policy lives in the object\'s labels.',
    back: 'Pod Security Admission trusts whatever <strong>labels</strong> the namespace carries, so anyone with <strong>update</strong> or <strong>patch</strong> on the Namespace can set enforce to privileged and then run privileged pods. Keep those verbs for platform admins (the namespaced admin and edit roles do not include them), and consider an admission policy that blocks changes to pod-security labels.',
    tags: ['Pod Security Admission', 'RBAC', 'Namespaces']
  },
  {
    id: 'cncf-kcsa-fc-217',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'Pod Security Standards, Pod Security Admission and securityContext: how do they relate?',
    hint: 'Definition, enforcer, and the settings being judged.',
    back: 'The <strong>Pod Security Standards</strong> are the policy definitions (privileged, baseline, restricted). <strong>Pod Security Admission</strong> is the built-in admission controller that enforces those standards per namespace. <strong>securityContext</strong> (plus fields such as hostNetwork and volumes) is where a pod declares the settings that the standards judge.',
    tags: ['Pod Security Standards', 'Pod Security Admission', 'Security context']
  },
  {
    id: 'cncf-kcsa-fc-218',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'Name three things Pod Security Admission cannot do that a policy engine can.',
    hint: 'Fixed levels, no edits, no other objects.',
    back: 'PSA only <strong>validates pods</strong> against the <strong>three fixed levels</strong>. It cannot express <strong>custom rules</strong> (image registries, required labels, resource limits), cannot <strong>mutate</strong> objects to add safe defaults, and cannot apply policy to <strong>non-pod resources</strong> such as Services or Ingresses. Its granularity is the namespace (plus exemptions), not individual workloads. Kyverno, Gatekeeper or ValidatingAdmissionPolicy fill those gaps.',
    tags: ['Pod Security Admission', 'Policy engines', 'Limitations']
  },
  {
    id: 'cncf-kcsa-fc-219',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'What is a safe rollout sequence for moving a namespace to restricted?',
    hint: 'See, fix, then block.',
    back: '1) Enforce <strong>baseline</strong> (or keep current) and set <strong>warn</strong> and <strong>audit</strong> to <strong>restricted</strong>. 2) Use warnings, audit annotations and a server-side dry run to find violations. 3) Fix manifests or move legitimate exceptions to separate namespaces. 4) Switch <strong>enforce</strong> to restricted, ideally pinning enforce-version, then roll workloads so pods are re-admitted.',
    tags: ['Pod Security Admission', 'Migration', 'Rollout']
  },
  {
    id: 'cncf-kcsa-fc-220',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'Where does Pod Security Admission run, and does it need to be installed?',
    hint: 'It is part of a control plane component.',
    back: 'It is the <strong>PodSecurity</strong> admission plugin built into <strong>kube-apiserver</strong>, enabled by default since 1.23 (beta) and stable since <strong>1.25</strong>. Nothing extra needs installing; you configure it with namespace labels and, optionally, an admission configuration file. It runs as a validating step, so it never changes the pods it checks.',
    tags: ['Pod Security Admission', 'API server']
  },
  {
    id: 'cncf-kcsa-fc-221',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'What does procMount: Unmasked do, and how do the Pod Security levels treat it?',
    hint: 'Some /proc paths are hidden for a reason.',
    back: 'By default the runtime <strong>masks</strong> or makes read-only sensitive paths under <code>/proc</code> (such as /proc/kcore and /proc/sys) to reduce kernel attack surface. <strong>Unmasked</strong> removes that masking, typically for nested container runtimes, and requires a user-namespaced pod. <strong>Baseline</strong> (and restricted) allow only <strong>Default</strong>, so Unmasked needs a privileged namespace.',
    tags: ['Pod Security Standards', 'procMount', 'Baseline']
  },
  {
    id: 'cncf-kcsa-fc-222',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'What is a Windows HostProcess pod, and which level blocks it?',
    hint: 'The Windows counterpart of privileged plus host network.',
    back: 'A <strong>HostProcess</strong> container (<code>windowsOptions.hostProcess: true</code>) runs directly on the Windows node as a host process with access to the host network and filesystem, used for node management tasks. It is the Windows equivalent of full node access, so <strong>baseline</strong> and restricted forbid it and it belongs only in privileged namespaces.',
    tags: ['Pod Security Standards', 'Windows', 'HostProcess']
  },
  {
    id: 'cncf-kcsa-fc-223',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'What does the value latest mean in a Pod Security version label?',
    hint: 'It moves with the cluster.',
    back: '<strong>latest</strong> means the level is evaluated using the definition shipped with the API server\'s current Kubernetes version, so an upgrade can add checks. A specific value such as <code>v1.33</code> freezes the definition from that release. Unset version labels default to latest.',
    tags: ['Pod Security Admission', 'Versioning']
  },
  {
    id: 'cncf-kcsa-fc-224',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'How should system namespaces such as kube-system be handled when enforcing Pod Security cluster-wide?',
    hint: 'Some pods legitimately need the host.',
    back: 'Label them <strong>enforce: privileged</strong> or list them as <strong>exempt namespaces</strong>, because CNI agents, kube-proxy, CSI node plugins and similar components need host networking and privileges. Compensate with <strong>strict RBAC</strong> so ordinary users cannot create pods there, and keep audit and warn at baseline or restricted to spot unexpected workloads.',
    tags: ['Pod Security Admission', 'kube-system', 'Exemptions']
  },
  {
    id: 'cncf-kcsa-fc-225',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'When does a runtimeClass exemption in Pod Security Admission make sense?',
    hint: 'The sandbox, not the namespace, supplies the isolation.',
    back: 'Exempting a <strong>runtimeClassName</strong> skips Pod Security checks for pods using that runtime, which can suit workloads in a strong <strong>sandbox</strong> such as Kata Containers, where the VM boundary rather than pod settings contains a compromise. Use it sparingly: the exemption covers every pod that names the class, so restrict which namespaces may use it (for example with RuntimeClass scheduling and admission policy).',
    tags: ['Pod Security Admission', 'Exemptions', 'RuntimeClass']
  }
];

export default CNCF_KCSA_FLASHCARDS_9;
