export const CNCF_KCSA_QUESTIONS_9 = [
  {
    id: "cncf-kcsa-201",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A first Pod Security level for many ordinary apps",
    scenario: "A retail company is rolling out Pod Security Standards across 80 application namespaces. The first step must stop pods from gaining host-level power through privileged containers or host namespaces, while most existing web and API workloads keep running without manifest changes.",
    question: "Which Pod Security Standard level fits this first step?",
    options: [
      { id: 'A', text: "Restricted, which applies current hardening best practice and still admits most workloads without manifest changes." },
      { id: 'B', text: "Default, which the API server applies to namespaces without labels and blocks privileged and host-namespace pods." },
      { id: 'C', text: "Privileged, which records every risky setting in the pod spec but leaves each workload free to run as it does today." },
      { id: 'D', text: "Baseline, which blocks the well-known escalation paths yet stays permissive enough for common containerized apps." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The baseline level is designed for ease of adoption for common workloads while preventing known privilege escalations: it forbids privileged containers, host namespaces, hostPath volumes, host ports, extra capabilities and similar settings, but does not demand non-root users or seccomp profiles. Privileged is entirely unrestricted and does not record anything. Restricted adds requirements such as runAsNonRoot, dropping all capabilities and an explicit seccomp profile, which many existing manifests do not meet. There is no level called Default; unlabelled namespaces follow the admission defaults, which are privileged unless configured otherwise.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Pod Security Standards", "Baseline"]
  },
  {
    id: "cncf-kcsa-202",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Hardening the namespace that holds payment services",
    scenario: "A fintech's payments namespace runs a small set of in-house services that the security team controls closely. It wants the strictest built-in Pod Security Standard there, following current pod hardening best practice even if some manifests need updating.",
    question: "Which level should the namespace enforce?",
    options: [
      { id: 'A', text: "Baseline, which is the strictest built-in level and already requires non-root users and a seccomp profile." },
      { id: 'B', text: "Privileged, which is reserved for sensitive namespaces and restricts pods to the cluster's trusted images." },
      { id: 'C', text: "Restricted, which adds non-root users, dropped capabilities and a seccomp profile on top of everything in baseline." },
      { id: 'D', text: "Hardened, which extends restricted with read-only root filesystems and mandatory resource limits on pods." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Restricted is the most locked-down of the three standards: it includes everything in baseline and additionally requires allowPrivilegeEscalation false, runAsNonRoot true, capabilities dropped to ALL with only NET_BIND_SERVICE addable, an explicit RuntimeDefault or Localhost seccomp profile and a limited set of volume types. Baseline does not require non-root users or seccomp profiles. Privileged is the unrestricted level for system and infrastructure workloads, and it knows nothing about images. There is no built-in Hardened level; read-only root filesystems and resource limits are not part of any standard.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Pod Security Standards", "Restricted"]
  },
  {
    id: "cncf-kcsa-203",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "The lowest level that still stops host access",
    scenario: "A media company's legacy batch images run as root and would break under strict hardening. The security team is willing to accept root inside containers for now, but pods in the batch namespace must never be able to use hostNetwork, hostPID, hostPath volumes or privileged mode.",
    question: "What is the least restrictive Pod Security level that meets the requirement?",
    options: [
      { id: 'A', text: "Restricted, since it is the only level that blocks hostPath volumes along with host namespaces and privileged mode." },
      { id: 'B', text: "Privileged, with a warn label for restricted so that host-access settings in batch pods are reported and blocked." },
      { id: 'C', text: "Privileged, with an audit label for baseline so that host-access settings in batch pods are rejected at creation." },
      { id: 'D', text: "Baseline, which forbids host namespaces, hostPath and privileged mode but does not require a non-root user." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Baseline disallows privileged containers, hostNetwork, hostPID and hostIPC, and hostPath volumes, yet places no requirement on the user a container runs as, so the root batch images keep working while host access is blocked. Restricted also blocks those settings but additionally requires non-root, which would break the images, so it is not the least restrictive choice. Warn and audit modes never block anything: warn returns a message to the client and audit adds an annotation to the audit event, so a privileged enforce level would still admit the pods.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Pod Security Standards", "Baseline", "Host namespaces"]
  },
  {
    id: "cncf-kcsa-204",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A hardened pod still refused by restricted",
    scenario: "A developer's pod sets runAsNonRoot true, allowPrivilegeEscalation false and drops ALL capabilities on every container. It is rejected in a namespace enforcing restricted, with a message that mentions seccompProfile. The cluster's kubelets do not have seccompDefault enabled.",
    question: "What must the developer add?",
    options: [
      { id: 'A', text: "A seccompProfile of type Unconfined on the pod, which the restricted level accepts as an explicit seccomp declaration." },
      { id: 'B', text: "A readOnlyRootFilesystem setting of true on each container, which the restricted level requires alongside seccomp." },
      { id: 'C', text: "An appArmorProfile of type RuntimeDefault on each container, which the restricted level treats as a seccomp equivalent." },
      { id: 'D', text: "A seccompProfile of type RuntimeDefault or Localhost, set at pod level or on every container, to satisfy the check." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The restricted standard requires seccomp to be explicitly set to RuntimeDefault or Localhost, either in the pod-level securityContext or on every container; leaving it unset is a violation because the default would be unconfined. Unconfined is explicitly forbidden, even under baseline. AppArmor is a separate control and does not satisfy the seccomp requirement. readOnlyRootFilesystem is good practice but is not part of any Pod Security Standard, so it is neither required nor the cause of this rejection.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted",
    tags: ["Pod Security Standards", "Restricted", "seccomp"]
  },
  {
    id: "cncf-kcsa-205",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A network agent that needs NET_ADMIN",
    scenario: "A security vendor's flow-monitoring agent must add the NET_ADMIN capability to program traffic mirroring on each node. The cluster enforces baseline on application namespaces, and the agent's pods are rejected there. The platform team trusts the vendor and wants to run the agent without weakening application namespaces.",
    question: "What is the appropriate approach?",
    options: [
      { id: 'A', text: "Deploy the agent into an application namespace and set its warn label to privileged so baseline stops rejecting it." },
      { id: 'B', text: "Deploy the agent into a restricted namespace, because restricted allows NET_ADMIN as long as the pod runs as non-root." },
      { id: 'C', text: "Deploy the agent into its own namespace labelled to enforce privileged, with RBAC limiting who can deploy into it." },
      { id: 'D', text: "Deploy the agent into an application namespace but request NET_ADMIN through an annotation that baseline does not check." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Baseline only allows adding capabilities from the runtime's default set, and restricted allows adding only NET_BIND_SERVICE, so a legitimate infrastructure agent that needs NET_ADMIN belongs in a dedicated namespace labelled to enforce privileged, with tight RBAC so application teams cannot schedule pods there. The warn label never affects admission, so changing it would not help and the enforce label would still reject the pod. Restricted is stricter than baseline and rejects NET_ADMIN regardless of the user. Capabilities are granted through the securityContext, not annotations, so there is no annotation route around the check.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/",
    tags: ["Pod Security Admission", "Privileged", "Linux capabilities"]
  },
  {
    id: "cncf-kcsa-206",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A root container admitted under baseline",
    scenario: "An auditor at an insurance company finds a pod running as UID 0 in a namespace labelled pod-security.kubernetes.io/enforce: baseline. The pod is not privileged, uses no host namespaces and adds no capabilities. The auditor assumes Pod Security Admission is malfunctioning.",
    question: "What explains the finding?",
    options: [
      { id: 'A', text: "Baseline blocks UID 0 only when runAsUser is set explicitly, and this image sets its user in the Dockerfile." },
      { id: 'B', text: "Baseline checks the running user only in audit mode, so enforce mode admits root containers but records them." },
      { id: 'C', text: "Baseline blocks root only on nodes with seccompDefault enabled, and this pod was scheduled to a node without it." },
      { id: 'D', text: "Baseline does not restrict the user a container runs as; requiring non-root users is part of the restricted level." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The baseline standard targets known privilege escalations such as privileged mode, host namespaces, hostPath and added capabilities; it places no constraint on running as root. The runAsNonRoot and non-zero runAsUser requirements belong to restricted, so the pod is correctly admitted. Neither level treats a Dockerfile USER differently from runAsUser for this purpose. Enforce, audit and warn all evaluate the same checks for a given level. Pod Security Admission is an API server admission plugin and does not depend on node seccomp settings.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Pod Security Standards", "Baseline", "runAsNonRoot"]
  },
  {
    id: "cncf-kcsa-207",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Upgrades that might tighten a Pod Security level",
    scenario: "A bank upgrades Kubernetes every quarter. Its namespaces enforce restricted, and the platform team worries that a future release could add new checks to the restricted definition and start rejecting pods mid-rollout. It still wants early notice of any new checks before adopting them.",
    question: "Which labelling approach meets both goals?",
    options: [
      { id: 'A', text: "Set enforce-version to latest and pin audit-version to the validated release so that new checks are only recorded." },
      { id: 'B', text: "Pin enforce-version to the currently validated release and set warn with warn-version latest to preview new checks." },
      { id: 'C', text: "Leave every version label unset, since Pod Security Admission freezes each level at the release the label was added in." },
      { id: 'D', text: "Pin enforce-version to the validated release and set audit to privileged so that no new checks are ever evaluated." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Each mode has a matching -version label. Pinning enforce-version to a specific release, such as v1.33, keeps enforcement on that release's definition of restricted after upgrades, while warn at restricted with warn-version latest shows clients warnings for any checks added since, giving notice without blocking. Setting enforce-version latest is exactly what exposes enforcement to new checks. Setting audit to privileged removes visibility rather than providing it. When version labels are unset they default to latest, not to the release in which the label was applied.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/#pod-security-admission-labels-for-namespaces",
    tags: ["Pod Security Admission", "Versioning", "Upgrades"]
  },
  {
    id: "cncf-kcsa-208",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Turning off AppArmor for a troublesome container",
    scenario: "An engineer debugging a file-access error sets appArmorProfile type Unconfined on a container in a namespace that enforces baseline, and the pod is rejected. The nodes run with AppArmor enabled and the runtime applies its default profile to other containers.",
    question: "Why was the pod rejected?",
    options: [
      { id: 'A', text: "Baseline rejects any appArmorProfile field, because AppArmor settings are only accepted in privileged namespaces." },
      { id: 'B', text: "Baseline requires every container to use a Localhost AppArmor profile, and Unconfined is not a Localhost profile." },
      { id: 'C', text: "Baseline disallows disabling or overriding the default AppArmor profile, so the Unconfined value is not permitted." },
      { id: 'D', text: "Baseline requires the AppArmor field to be set at pod level, and the engineer placed it on a single container." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The baseline standard forbids overriding or disabling the default AppArmor profile: the profile may be left unset, set to RuntimeDefault, or set to a Localhost profile, but Unconfined is rejected. Baseline does not require a Localhost profile; RuntimeDefault or leaving the field unset both pass. The field is accepted at any level as long as its value is allowed. AppArmor can be set at pod or container level, and a container-level setting is evaluated just the same.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/#baseline",
    tags: ["Pod Security Standards", "Baseline", "AppArmor"]
  },
  {
    id: "cncf-kcsa-209",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Standards documented but nothing enforced",
    scenario: "A startup's security policy document states that all namespaces follow the restricted Pod Security Standard. A penetration tester nonetheless creates a privileged pod in a production namespace. The namespace has no labels, and no admission webhooks or policy engines are installed.",
    question: "What does this reveal about Pod Security Standards?",
    options: [
      { id: 'A', text: "They are enforced by the kubelet, which should have refused the privileged pod when it started on the node." },
      { id: 'B', text: "They are enforced by the scheduler, which should have kept the privileged pod from being placed on any node." },
      { id: 'C', text: "They are enforced by RBAC, which should have refused the tester because pods need a restricted role to be created." },
      { id: 'D', text: "They only define three levels; something such as Pod Security Admission labels must be configured to enforce them." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pod Security Standards are definitions of three policy levels. They take effect only when an enforcement mechanism applies them, usually the built-in Pod Security Admission controller driven by namespace labels or cluster defaults, or a policy engine such as Kyverno or OPA Gatekeeper. With no labels or configured defaults, the namespace is effectively privileged. The kubelet and scheduler do not evaluate the standards. RBAC decides whether a user may create pods at all, not what security settings those pods contain.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Pod Security Standards", "Enforcement"]
  },
  {
    id: "cncf-kcsa-210",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "An SELinux type that sidesteps container confinement",
    scenario: "On a cluster with SELinux-enforcing nodes, a vendor's backup pod sets seLinuxOptions with type spc_t so it can read files across the host. The pod is not privileged and requests no host namespaces, but it is rejected in a namespace that enforces baseline.",
    question: "Why does baseline reject the pod?",
    options: [
      { id: 'A', text: "Baseline forbids any seLinuxOptions field, because SELinux labels may be set only by the container runtime on the node." },
      { id: 'B', text: "Baseline requires SELinux to be disabled for pods that read host files, and the nodes are running in enforcing mode." },
      { id: 'C', text: "Baseline allows only the standard container types such as container_t, and spc_t is a super-privileged type." },
      { id: 'D', text: "Baseline accepts SELinux types only when a user and role are also set, and the pod specified the type alone." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Baseline restricts seLinuxOptions: the type may be unset or one of the standard container types such as container_t, container_init_t or container_kvm_t, and custom user and role values are forbidden. spc_t is the super-privileged container type that is effectively unconfined by SELinux, so setting it is an escalation that baseline blocks. The field itself is allowed with an approved type. Setting a user or role would be another violation, not a requirement. Baseline says nothing about node SELinux modes; it evaluates only the pod spec.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/#baseline",
    tags: ["Pod Security Standards", "Baseline", "SELinux"]
  },
  {
    id: "cncf-kcsa-211",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A game server that publishes a port on its node",
    scenario: "A gaming company's matchmaking pod declares hostPort 7777 so players can reach it on the node's address. It is rejected in the games namespace, which enforces baseline. The team asks for the namespace to be relaxed so it can deploy.",
    question: "What should the platform team recommend?",
    options: [
      { id: 'A', text: "Keep baseline and expose the pod through a Service of type LoadBalancer or NodePort instead of a host port." },
      { id: 'B', text: "Keep baseline and switch the pod to hostNetwork, which baseline allows as long as no host port is declared." },
      { id: 'C', text: "Switch the namespace to restricted, which permits host ports when the container runs as a non-root user." },
      { id: 'D', text: "Keep baseline and move the port above 30000, since baseline blocks host ports only in the privileged range." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Baseline disallows host ports because they bind directly to node addresses and bypass the Service layer, so the right answer is to keep the policy and expose the game server through a Service such as LoadBalancer or NodePort. hostNetwork is also forbidden by baseline and would expose far more. Restricted includes every baseline control, so it rejects host ports too. The Pod Security Admission implementation of baseline rejects any non-zero hostPort, not only low-numbered ones.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/#baseline",
    tags: ["Pod Security Standards", "Baseline", "hostPort"]
  },
  {
    id: "cncf-kcsa-212",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Omitting a field that defaults to the unsafe value",
    scenario: "A team's pod runs as UID 1000 with runAsNonRoot true, drops ALL capabilities and sets a RuntimeDefault seccomp profile. It never mentions allowPrivilegeEscalation because nothing in the image uses setuid binaries. The restricted namespace rejects the pod.",
    question: "Why is the pod rejected?",
    options: [
      { id: 'A', text: "Restricted requires allowPrivilegeEscalation set to true together with dropping ALL, to keep setuid binaries usable." },
      { id: 'B', text: "Restricted requires allowPrivilegeEscalation explicitly false, because when it is unset the effective value is true." },
      { id: 'C', text: "Restricted requires a Localhost seccomp profile, so the runtime's default profile does not count toward the check." },
      { id: 'D', text: "Restricted rejects runAsNonRoot when runAsUser is also set, because the two fields overlap and conflict." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When allowPrivilegeEscalation is not set, the container runs without the no_new_privs flag, so the effective value is true. The restricted standard therefore requires the field to be explicitly set to false on every container, and an unset field is a violation even if the image never uses setuid binaries. Restricted forbids true, it does not require it. Setting both runAsNonRoot and a non-zero runAsUser is valid and common. RuntimeDefault is one of the two seccomp types restricted accepts, along with Localhost.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted",
    tags: ["Pod Security Standards", "Restricted", "allowPrivilegeEscalation"]
  },
  {
    id: "cncf-kcsa-213",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Turning on Pod Security enforcement for one namespace",
    scenario: "A logistics company runs Kubernetes 1.33 with the built-in Pod Security Admission controller enabled by default. The platform team wants the tracking namespace to reject any new pod that violates the baseline standard.",
    question: "How should the team configure this?",
    options: [
      { id: 'A', text: "Add the label pod-security.kubernetes.io/enforce with value baseline to the tracking namespace object." },
      { id: 'B', text: "Create a PodSecurityPolicy named baseline and bind it to every service account in the tracking namespace." },
      { id: 'C', text: "Add the annotation pod-security.kubernetes.io/enforce with value baseline to each Deployment in tracking." },
      { id: 'D', text: "Add a ResourceQuota in the tracking namespace with the scope baseline to limit pods to compliant specs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pod Security Admission is configured per namespace through labels: pod-security.kubernetes.io/enforce: baseline makes the API server reject new pods in that namespace that violate baseline. PodSecurityPolicy was removed in Kubernetes 1.25, so it cannot be used on 1.33. The controller reads namespace labels, not annotations on workloads. ResourceQuota scopes are for things like priority classes and terminating pods, and quotas have no notion of Pod Security levels.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/enforce-standards-namespace-labels/",
    tags: ["Pod Security Admission", "Namespace labels"]
  },
  {
    id: "cncf-kcsa-214",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Telling developers about violations as they deploy",
    scenario: "A SaaS company wants developers to see an immediate message in their kubectl output whenever they apply a pod or Deployment that would violate restricted, but nothing should be blocked yet while teams fix their manifests.",
    question: "Which Pod Security Admission mode provides this?",
    options: [
      { id: 'A', text: "dry-run set to restricted, which the API server applies to every request so that violations are reported." },
      { id: 'B', text: "enforce set to restricted, which returns a message to kubectl and admits the object after logging the violation." },
      { id: 'C', text: "audit set to restricted, which prints each violation in the kubectl output while the pod is still admitted." },
      { id: 'D', text: "warn set to restricted, which returns a user-facing warning with the response and still admits the object." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "warn mode adds a warning to the API response, which kubectl prints, while still allowing the request, so developers get feedback during deployment without being blocked. enforce mode rejects violating pods rather than admitting them. audit mode records violations as annotations in the audit log, which developers do not see in kubectl. There is no dry-run mode label; server-side dry-run is a request option, not a Pod Security mode.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/#pod-security-admission-labels-for-namespaces",
    tags: ["Pod Security Admission", "Warn mode"]
  },
  {
    id: "cncf-kcsa-215",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A Deployment created but its pods never appear",
    scenario: "A developer applies a Deployment with a privileged container to a namespace labelled only with pod-security.kubernetes.io/enforce: baseline. kubectl reports the Deployment as created with no warning, yet no pods ever start. kubectl get pods shows nothing in the namespace.",
    question: "Where will the developer find the reason, and why was the Deployment itself accepted?",
    options: [
      { id: 'A', text: "In the ReplicaSet's events, because enforce checks pod objects, which the ReplicaSet controller is refused on creation." },
      { id: 'B', text: "In the Deployment's status conditions, because enforce rejects the Deployment after creation and marks it failed." },
      { id: 'C', text: "In the kubelet logs on each node, because enforce runs on the kubelet and it refuses to start the privileged container." },
      { id: 'D', text: "In the scheduler logs, because baseline is evaluated when pods are bound to nodes and privileged pods are left unscheduled." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pod Security Admission applies enforce mode only to pod objects. The Deployment is valid, so it is created, and with no warn label the client sees no message. When the ReplicaSet controller tries to create pods, the API server rejects them, and the failure appears as FailedCreate events on the ReplicaSet. Adding warn and audit labels helps, because those modes also evaluate workload resources such as Deployments. Admission happens in the API server, not the scheduler or kubelet. The Deployment's own conditions may eventually show a progress problem, but the Deployment object was never rejected.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/#workload-resources-and-pod-templates",
    tags: ["Pod Security Admission", "Workload resources", "Troubleshooting"]
  },
  {
    id: "cncf-kcsa-216",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Previewing what restricted would break",
    scenario: "Before enforcing restricted on 40 existing namespaces, a telecom's platform team wants a quick list of the running pods in each namespace that would violate it, without changing any labels or disrupting workloads.",
    question: "Which approach gives this preview?",
    options: [
      { id: 'A', text: "Run kubectl auth can-i for the restricted level in each namespace, which lists pods whose specs would be denied." },
      { id: 'B', text: "Label the namespaces with enforce set to restricted overnight and read which pods the API server evicts by morning." },
      { id: 'C', text: "Run kubectl label with --dry-run=client for the enforce label, which checks each pod locally against restricted." },
      { id: 'D', text: "Run kubectl label with --dry-run=server for the enforce label, which returns warnings naming each non-compliant pod." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A server-side dry run of the label change, such as kubectl label --dry-run=server --overwrite ns --all pod-security.kubernetes.io/enforce=restricted, makes Pod Security Admission evaluate existing pods in each namespace and return warnings naming the violations, without persisting the label. Applying enforce does not evict running pods, so there would be nothing to read in the morning, and it changes the labels. A client-side dry run never reaches the admission controller. kubectl auth can-i checks RBAC permissions, not pod specs.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/enforce-standards-namespace-labels/",
    tags: ["Pod Security Admission", "Dry run", "Migration"]
  },
  {
    id: "cncf-kcsa-217",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Privileged pods that survive enforcement",
    scenario: "A week after a bank labelled its reporting namespace to enforce baseline, an audit finds two long-running privileged pods still there. Their Deployment has not been changed, and the pods were created a month before the label was added.",
    question: "Why are the pods still running?",
    options: [
      { id: 'A', text: "Enforcement applies only to pods created by human users, and these pods were created by the ReplicaSet controller." },
      { id: 'B', text: "Enforcement applies to pods as they are created or updated, and existing pods are not evicted when it is switched on." },
      { id: 'C', text: "Enforcement ignores pods owned by Deployments, which are evaluated only when the Deployment is deleted and re-created." },
      { id: 'D', text: "Enforcement takes up to thirty days to reach every node, because each kubelet re-reads namespace labels on a cycle." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pod Security Admission is an admission check, so it evaluates pods when they are created and certain updates are made; setting the enforce label never evicts pods that are already running. The two pods will be rejected the next time they need to be recreated, for example after a node drain or rollout, which is why teams run a dry run first and then roll workloads deliberately. Kubelets do not enforce the labels. Pods created by controllers are evaluated like any other pods, and a ReplicaSet's new pods would be refused.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/",
    tags: ["Pod Security Admission", "Existing workloads"]
  },
  {
    id: "cncf-kcsa-218",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Exempting a deploy user did not exempt its pods",
    scenario: "A platform team added the CI system's user, ci-deployer, to the usernames exemption list in the Pod Security Admission configuration so that one legacy workload could bypass restricted. CI applies a Deployment for that workload, yet its pods are still rejected.",
    question: "Why does the exemption not help, and what is a better option?",
    options: [
      { id: 'A', text: "Pods are created by the ReplicaSet controller, not ci-deployer; exempting a runtimeClass or namespace suits it." },
      { id: 'B', text: "Exemptions require the user to be in system:masters; the team should add ci-deployer to that group instead." },
      { id: 'C', text: "Exemptions apply only to audit mode; the team should add ci-deployer to the enforce exemptions stanza as well." },
      { id: 'D', text: "Exemptions are cached for a day; the team should restart kube-apiserver so the new usernames list is loaded." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A username exemption applies to requests made by that user. CI creates the Deployment, but the pods are created by the ReplicaSet controller's service account, so the exemption does not cover them, and exempting controller service accounts would exempt almost everything. Exempting the workload's dedicated namespace or a specific runtimeClassName is a better fit, or better still fixing the manifest. Exemptions apply across all modes rather than per mode. The admission configuration is read at API server startup, but these requests fail for the reason above, not because of caching. Exemptions have nothing to do with system:masters.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/#exemptions",
    tags: ["Pod Security Admission", "Exemptions", "Controllers"]
  },
  {
    id: "cncf-kcsa-219",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A floor for namespaces nobody remembered to label",
    scenario: "A self-managed cluster has hundreds of namespaces created by many teams, and new ones appear daily without Pod Security labels. The security team wants every unlabelled namespace to enforce at least baseline automatically, while labelled namespaces keep their own settings.",
    question: "Where should this default be configured?",
    options: [
      { id: 'A', text: "In a LimitRange added to the default namespace, which the API server copies into every newly created namespace." },
      { id: 'B', text: "In the PodSecurity plugin's AdmissionConfiguration defaults, passed to kube-apiserver with --admission-control-config-file." },
      { id: 'C', text: "In the kubelet configuration on each node, setting a podSecurityDefault field that applies to unlabelled pods." },
      { id: 'D', text: "In a ClusterRole named pod-security-default, which the admission controller reads when a namespace lacks labels." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The PodSecurity admission plugin accepts a configuration, supplied through the API server's --admission-control-config-file, whose defaults section sets the enforce, audit and warn levels and versions used for namespaces that do not carry the labels; exemptions live in the same file. Labels on a namespace override these defaults. LimitRange objects set resource defaults and are not copied into other namespaces. The kubelet does not evaluate Pod Security. Admission defaults are not read from RBAC objects.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/enforce-standards-admission-controller/",
    tags: ["Pod Security Admission", "AdmissionConfiguration", "Defaults"]
  },
  {
    id: "cncf-kcsa-220",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Upgrading a cluster that still relies on PSPs",
    scenario: "A manufacturer's cluster on Kubernetes 1.24 uses PodSecurityPolicy objects to stop privileged pods. The team plans to upgrade to a current release and wants to keep equivalent protection with the built-in tooling.",
    question: "What must the team plan for?",
    options: [
      { id: 'A', text: "PodSecurityPolicy remains but becomes audit-only after 1.25, so the team should add webhooks for enforcement." },
      { id: 'B', text: "PodSecurityPolicy was removed in 1.25, so it must move to Pod Security Admission or a policy engine first." },
      { id: 'C', text: "Nothing, because PodSecurityPolicy objects are converted automatically into namespace labels during the upgrade." },
      { id: 'D', text: "PodSecurityPolicy is renamed PodSecurityStandard in 1.25, so the team only needs to update apiVersion fields." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "PodSecurityPolicy was deprecated in 1.21 and removed in 1.25. Before upgrading past 1.24, the team must migrate to Pod Security Admission, which enforces the Pod Security Standards through namespace labels, or to a policy engine such as Kyverno or Gatekeeper for custom rules. There is no automatic conversion of PSP objects. PSP did not linger in an audit-only form. Pod Security Standards are policy definitions, not a renamed API kind, so changing apiVersion does not carry anything over.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/migrate-from-psp/",
    tags: ["Pod Security Admission", "PodSecurityPolicy", "Migration"]
  },
  {
    id: "cncf-kcsa-221",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Tenants who can relabel their own namespace",
    scenario: "A multi-tenant cluster gives each team the built-in admin ClusterRole in its own namespace and enforces restricted with namespace labels. A penetration tester shows that one team lead changed their namespace's enforce label to privileged and then ran a privileged pod.",
    question: "Which control addresses the root cause?",
    options: [
      { id: 'A', text: "Remove create on pods from tenant roles, so that only CI service accounts can create workloads in the namespaces." },
      { id: 'B', text: "Remove update and patch on the Namespace object from tenant roles, so only platform admins can change the labels." },
      { id: 'C', text: "Add the audit label set to restricted, so that a privileged pod in a relabelled namespace is rejected at creation." },
      { id: 'D', text: "Pin the enforce-version label to the current release, so that the enforce label value cannot be changed later on." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pod Security Admission trusts whatever labels the namespace carries, so anyone who can update or patch the Namespace object can weaken its own policy. The namespaced admin role does not normally grant that, which means the tenant's access came from an extra grant that should be removed, with label changes reserved for platform admins or protected by admission policy. Removing pod creation from tenants breaks their workflow and CI would still run into the same relabelled namespace. The audit mode only records violations and never rejects pods. The version label pins the policy definition, not the level, and is just as editable.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/",
    tags: ["Pod Security Admission", "RBAC", "Multi-tenancy"]
  },
  {
    id: "cncf-kcsa-222",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Requirements the built-in admission cannot express",
    scenario: "An insurer already enforces restricted through namespace labels. Its new standard also requires that images come only from the company registry, that every pod carry a cost-centre label and that missing resource limits be filled in automatically.",
    question: "What should the insurer add?",
    options: [
      { id: 'A', text: "A policy engine or admission webhooks alongside it, because Pod Security Admission cannot add custom rules." },
      { id: 'B', text: "The enforce-version label set to latest, which adds registry, label and limit checks to the restricted level." },
      { id: 'C', text: "The audit label set to restricted, which extends Pod Security Admission to check labels and image registries." },
      { id: 'D', text: "A custom Pod Security level defined in a ConfigMap, referenced from the enforce label on each namespace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pod Security Admission only validates pods against the three fixed Pod Security Standards and never mutates objects. Registry allowlists and label requirements need validating policies, such as ValidatingAdmissionPolicy, Kyverno or OPA Gatekeeper, and filling in resource limits needs a mutating mechanism such as a Kyverno mutate rule, a mutating webhook or a LimitRange. The levels cannot be customised through ConfigMaps. Later versions of restricted cover pod security fields only, not registries or labels. Audit mode records the same fixed checks.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/",
    tags: ["Pod Security Admission", "Policy engines", "Admission control"]
  },
  {
    id: "cncf-kcsa-223",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Cluster-wide restricted breaks the network plugin",
    scenario: "Right after a platform team set the PodSecurity admission default to enforce restricted for every namespace, new nodes stopped becoming Ready. Their CNI and kube-proxy DaemonSet pods in kube-system are being rejected because they need host networking and privileges.",
    question: "What is the appropriate fix?",
    options: [
      { id: 'A', text: "Label that namespace to enforce privileged, or exempt it, since system components legitimately need such rights." },
      { id: 'B', text: "Switch the CNI and kube-proxy DaemonSets to run as non-root, which lets them pass restricted without host access." },
      { id: 'C', text: "Delete the enforce defaults and fall back to warn mode across the whole cluster until each system vendor updates." },
      { id: 'D', text: "Move the CNI and kube-proxy pods into the default namespace, which Pod Security Admission always leaves unchecked." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Node-level infrastructure such as CNI agents and kube-proxy legitimately needs host networking and elevated privileges, so the namespace they run in should enforce privileged, or be listed as an exempt namespace, with RBAC keeping ordinary users out of it. Running as non-root does not remove their need for hostNetwork and capabilities, which restricted forbids. Dropping to warn everywhere throws away enforcement for every application namespace. The default namespace receives no special treatment and should not host system components.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/#exemptions",
    tags: ["Pod Security Admission", "kube-system", "Privileged"]
  },
  {
    id: "cncf-kcsa-224",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A privileged debug container denied in production",
    scenario: "An SRE runs kubectl debug with the sysadmin profile against a pod in a namespace enforcing baseline, hoping to use tools that need full privileges. The request fails with a Pod Security violation, even though the target pod itself is compliant.",
    question: "Why is the request rejected?",
    options: [
      { id: 'A', text: "Ephemeral containers are evaluated by Pod Security Admission, and the sysadmin profile adds a privileged container." },
      { id: 'B', text: "kubectl debug can only target pods in privileged namespaces, and any profile is refused elsewhere by the API server." },
      { id: 'C', text: "The sysadmin profile needs the SRE to be in system:masters, and Pod Security reports the missing group as a violation." },
      { id: 'D', text: "Ephemeral containers are evaluated by the kubelet, which refuses privileged containers on nodes running baseline pods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adding an ephemeral container updates the pod through the ephemeralcontainers subresource, and Pod Security Admission evaluates that update against the namespace's level. The sysadmin debug profile sets privileged true, which baseline forbids, so the request is denied; the general, baseline or restricted profiles produce compliant debug containers. kubectl debug works in any namespace when the profile is compliant. Pod Security is unrelated to group membership. The check happens in the API server, not the kubelet.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/#debugging-profiles",
    tags: ["Pod Security Admission", "Ephemeral containers", "Debugging"]
  },
  {
    id: "cncf-kcsa-225",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Three mode labels at different levels",
    scenario: "The orders namespace carries enforce: baseline, warn: restricted and audit: restricted labels. A developer creates a pod that runs as root but otherwise meets baseline, using a client that displays API warnings. The cluster's audit policy records pod creation at the Metadata level.",
    question: "What happens to the request?",
    options: [
      { id: 'A', text: "The pod is admitted, kubectl shows a restricted warning, and the audit event gets a violation annotation." },
      { id: 'B', text: "The pod is rejected because the strictest level among the labels wins, and the audit log records the rejection." },
      { id: 'C', text: "The pod is admitted silently, because warn and audit apply only to workload resources and not to bare pods." },
      { id: 'D', text: "The pod is admitted with no warning, because warn mode messages appear only when the enforce level also fails." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Each mode is evaluated independently at its own level. The pod meets baseline, so enforce admits it; it fails restricted, so warn returns a warning the client displays and audit adds a pod-security.kubernetes.io/audit-violations annotation to the audit event. Levels are not combined into a strictest-wins decision. Warn and audit evaluate pods as well as workload resources. Warnings are produced whenever the warn level is violated, regardless of the enforce outcome.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/#pod-security-admission-labels-for-namespaces",
    tags: ["Pod Security Admission", "Modes", "Audit"]
  }
];

export default CNCF_KCSA_QUESTIONS_9;
