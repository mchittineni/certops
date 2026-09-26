export const CNCF_KCSA_FLASHCARDS_15 = [
  {
    id: "cncf-kcsa-fc-351",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "What file mode do Secret volume files get by default, and how do you tighten it?",
    hint: "Readable by more than you might think.",
    back: "Mode <strong>0644</strong>, readable by every user in the container. Set <code>defaultMode</code> on the volume (or <code>mode</code> per item), for example 0400 or 0440, and use <code>fsGroup</code> or <code>runAsUser</code> so the application still owns or can read the file. Separate containers are a stronger boundary than file modes between processes.",
    tags: ["Secrets","File permissions"]
  },
  {
    id: "cncf-kcsa-fc-352",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Where do literal values in command, args and env end up?",
    hint: "Specs are readable by more roles than Secrets are.",
    back: "In the <strong>pod and workload specs</strong>, visible to anyone who can get those objects, including the built-in <strong>view</strong> role, and on the node in the process list and <code>/proc</code>. Credentials belong in Secrets referenced by <code>secretKeyRef</code> or volumes, so the spec holds only a reference.",
    tags: ["Pod spec","Access to sensitive data"]
  },
  {
    id: "cncf-kcsa-fc-353",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "The built-in view role excludes Secrets. What sensitive data can it still read?",
    hint: "Look at everything that is not a Secret.",
    back: "<strong>ConfigMaps</strong>, <strong>literal env values and args</strong> in pod and workload specs, <strong>custom resources</strong> the role is aggregated to, events and service definitions. Anything sensitive stored outside Secrets is exposed to view holders. It cannot read Secrets, service account tokens or pods/exec, but it is not a safe role for data that lives in ConfigMaps.",
    tags: ["RBAC","Access to sensitive data"]
  },
  {
    id: "cncf-kcsa-fc-354",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Does kubectl describe secret expose values, and what permission does it need?",
    hint: "The display is not the permission.",
    back: "Describe prints key names and byte sizes, not values, but it needs <strong>get on secrets</strong>, which returns the <strong>full object including data</strong> to any client. RBAC cannot grant metadata-only access to Secrets, so anyone allowed to describe a Secret can read it.",
    tags: ["Secrets","RBAC"]
  },
  {
    id: "cncf-kcsa-fc-355",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "After a credential stored in a Secret leaks, what does full remediation involve?",
    hint: "Updating the object is only step one.",
    back: "<strong>Revoke</strong> the old credential at its source (database, cloud, third party); update the Secret; <strong>restart pods</strong> that read it through environment variables (never refreshed) and make sure volume consumers reread the file; check logs, backups and Git for other copies; and review audit logs for who read the Secret.",
    tags: ["Rotation","Incident response"]
  },
  {
    id: "cncf-kcsa-fc-356",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Why are cluster backups (Velero, etcd snapshots) sensitive data stores?",
    hint: "What form are Secrets in inside the backup?",
    back: "<strong>Velero</strong> reads objects through the API, so Secrets are stored <strong>decrypted</strong> in its archives. <strong>etcd snapshots</strong> hold Secrets encrypted only if encryption at rest was enabled, and the key may sit beside them on the control plane. Restrict access to backup storage, encrypt it with separately controlled keys, and treat restore rights as admin rights.",
    tags: ["Backups","Secrets"]
  },
  {
    id: "cncf-kcsa-fc-357",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "How do you limit which containers and keys of a pod can see a Secret?",
    hint: "Mount per container; project per key.",
    back: "Declare the Secret volume once but add it to <code>volumeMounts</code> <strong>only in the containers that need it</strong>, and use <code>items</code> to project <strong>only the needed keys</strong>. Avoid <code>envFrom</code>, which injects every key, and <code>shareProcessNamespace</code>, which lets containers see each other's processes and files through <code>/proc</code>.",
    tags: ["Secrets","Sidecars"]
  },
  {
    id: "cncf-kcsa-fc-358",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Why can Helm release records expose secrets, and how does the storage driver matter?",
    hint: "Records include values and rendered manifests.",
    back: "Helm v3 stores each release's <strong>chart, supplied values and rendered manifests</strong> in the cluster. The default <strong>Secret</strong> driver keeps them behind Secret RBAC; the <strong>configmap</strong> driver stores the same encoded, unencrypted data in ConfigMaps readable by view. Passing passwords via <code>--set</code> puts them in those records either way.",
    tags: ["Helm","Access to sensitive data"]
  },
  {
    id: "cncf-kcsa-fc-359",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Why are infrastructure-as-code state files sensitive?",
    hint: "Marked sensitive is not encrypted.",
    back: "Terraform and similar tools record resource attributes in state, including <strong>generated kubeconfigs, certificates, tokens and Secret data</strong>, in plaintext. The <code>sensitive</code> flag only hides values from console output. Store state in a backend with strict access control and encryption, and rotate bootstrap credentials after provisioning.",
    tags: ["Infrastructure as code","Credentials"]
  },
  {
    id: "cncf-kcsa-fc-360",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Which RBAC permissions imply the ability to run arbitrary pods?",
    hint: "More than create on pods.",
    back: "Create on <strong>pods</strong> and on any pod-creating workload: <strong>deployments, replicasets, statefulsets, daemonsets, jobs, cronjobs</strong>, plus update or patch on existing workloads (templates are editable). Whoever holds them can choose images, volumes and any <strong>service account in the namespace</strong>, bounded only by admission controls such as Pod Security.",
    tags: ["Privilege escalation","Workloads"]
  },
  {
    id: "cncf-kcsa-fc-361",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Why should powerful service accounts live in their own namespace?",
    hint: "Pods can choose any account in their namespace.",
    back: "Any pod can set <code>serviceAccountName</code> to <strong>any service account in its namespace</strong>. If a highly privileged account shares a namespace with developer workloads, every developer who can create or edit workloads can run code as it. Put privileged controllers in namespaces only administrators can deploy to.",
    tags: ["Service accounts","Privilege escalation"]
  },
  {
    id: "cncf-kcsa-fc-362",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "What does create on serviceaccounts/token allow?",
    hint: "TokenRequest for someone else.",
    back: "Calling the <strong>TokenRequest API</strong> to mint tokens for <strong>any service account in the namespace</strong> (or only the ones listed in <code>resourceNames</code>), then acting with that account's rights. The Kubernetes RBAC good-practice guide lists it among escalation risks; scope it to specific accounts or avoid granting it.",
    tags: ["TokenRequest","Privilege escalation"]
  },
  {
    id: "cncf-kcsa-fc-363",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Which pod spec fields can be changed on a running pod, and why does one matter for security?",
    hint: "Most of the spec is immutable.",
    back: "Mutable fields include <strong>container images</strong>, <code>activeDeadlineSeconds</code>, additions to <strong>tolerations</strong>, and ephemeral containers through their subresource. Changing an image restarts that container with new code under the <strong>same service account and mounts</strong>, so patch or update on pods is a code-execution permission.",
    tags: ["Pods","Privilege escalation"]
  },
  {
    id: "cncf-kcsa-fc-364",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Which pod spec fields turn pod-creation rights into node compromise?",
    hint: "Privilege, host sharing, placement.",
    back: "<strong>privileged: true</strong>; <strong>hostPID, hostIPC, hostNetwork</strong>; <strong>hostPath</strong> volumes (especially /, /etc, /var/lib/kubelet, runtime sockets); dangerous <strong>capabilities</strong> such as SYS_ADMIN, SYS_MODULE, SYS_PTRACE; <strong>allowPrivilegeEscalation</strong> with setuid binaries; and placement on sensitive nodes via <strong>nodeName</strong> or control plane tolerations. Baseline Pod Security blocks most; admission policy covers placement.",
    tags: ["Privilege escalation","Pod security"]
  },
  {
    id: "cncf-kcsa-fc-365",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "How are ephemeral containers admitted, and why do custom policies miss them?",
    hint: "A subresource and an operation.",
    back: "They are added with an <strong>UPDATE</strong> to the <code>pods/ephemeralcontainers</code> subresource, not a pod CREATE. Webhooks or policies matching only CREATE on pods never see them. Include the subresource in policy rules; <strong>Pod Security Admission</strong> checks ephemeral containers against the namespace's level.",
    tags: ["Ephemeral containers","Admission control"]
  },
  {
    id: "cncf-kcsa-fc-366",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "What is a confused deputy in a Kubernetes operator?",
    hint: "User input, operator privileges.",
    back: "An operator that copies user-supplied fields (image, volumes, securityContext, service account) from a custom resource into objects it creates <strong>with its own privileges</strong>. Users with create on the custom resource gain what the operator can do. Operators must validate and constrain those fields, and target namespaces should still enforce Pod Security.",
    tags: ["Operators","Confused deputy"]
  },
  {
    id: "cncf-kcsa-fc-367",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "hostPID plus SYS_PTRACE: what can a root container do?",
    hint: "Visibility plus control.",
    back: "HostPID makes every host process visible; <strong>SYS_PTRACE</strong> as root lets the container <strong>attach to them, read and write their memory and inject code</strong>. Together they amount to code execution in host processes such as the kubelet: a node compromise. Profilers and debuggers that ask for both should run only briefly, in controlled namespaces.",
    tags: ["hostPID","Capabilities"]
  },
  {
    id: "cncf-kcsa-fc-368",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Which Linux capabilities are close to root on the node for a container?",
    hint: "Kernel, mounts, tracing, networking.",
    back: "<strong>SYS_ADMIN</strong> (mounts, namespaces and much more), <strong>SYS_MODULE</strong> (load kernel modules), <strong>SYS_PTRACE</strong> (with hostPID, trace host processes), <strong>SYS_RAWIO</strong> (raw device access), <strong>DAC_READ_SEARCH</strong> (bypass file read checks, the basis of the Shocker escape) and <strong>NET_ADMIN</strong> with hostNetwork (reconfigure node networking). Restricted Pod Security allows only adding NET_BIND_SERVICE.",
    tags: ["Capabilities","Privilege escalation"]
  },
  {
    id: "cncf-kcsa-fc-369",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Why is a service account token on a node a cluster-wide risk when it belongs to a DaemonSet?",
    hint: "A DaemonSet is everywhere.",
    back: "Root on a node can read the tokens of <strong>every pod on that node</strong>. A DaemonSet runs on all nodes, so its token is on all nodes, and any single node compromise yields its permissions. Keep DaemonSet RBAC minimal and node-scoped, and run powerful controllers as Deployments on dedicated or control plane nodes.",
    tags: ["DaemonSets","Node compromise"]
  },
  {
    id: "cncf-kcsa-fc-370",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Why is pods/exec in a namespace risky when privileged pods run there?",
    hint: "Exec inherits the container's privileges.",
    back: "Exec starts a process <strong>inside the target container</strong> with its user, capabilities and namespaces. Exec into a privileged or host-namespace pod (CNI agents, node exporters, CSI node plugins) is effectively <strong>root on the node</strong>. Keep privileged pods out of namespaces where people hold exec, or scope exec with <code>resourceNames</code>.",
    tags: ["pods/exec","Privilege escalation"]
  },
  {
    id: "cncf-kcsa-fc-371",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Why do legacy token Secrets turn read access on secrets into privilege escalation?",
    hint: "A token is a login.",
    back: "A <code>kubernetes.io/service-account-token</code> Secret holds a <strong>long-lived bearer token</strong> not bound to any pod. Anyone who can get or list those Secrets can <strong>authenticate as the service account</strong> from anywhere, with all its permissions. Remove unused token Secrets and scope Secret reads with <code>resourceNames</code>.",
    tags: ["Service accounts","Secrets"]
  },
  {
    id: "cncf-kcsa-fc-372",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "What went wrong with dashboards that offered a skip-login option?",
    hint: "Whose identity does the dashboard use?",
    back: "Skipping login made the dashboard call the API with <strong>its own service account</strong>, so every visitor inherited that account's rights, often cluster-admin. Current Kubernetes Dashboard disables skip-login by default. Require users' own tokens or an authenticating proxy, and give the dashboard service account minimal permissions.",
    tags: ["Dashboard","Privilege escalation"]
  },
  {
    id: "cncf-kcsa-fc-373",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Why is create on PersistentVolumes an escalation risk?",
    hint: "PVs are cluster-scoped and can point anywhere.",
    back: "A user who can create <strong>PersistentVolumes</strong> can define one of type <strong>hostPath</strong> (or another backend they choose), bind it through a claim and mount <strong>host files</strong> into a pod, sidestepping rules that only inspect pod volume types. Keep PV creation with administrators and dynamic provisioners, and restrict which StorageClasses tenants can use.",
    tags: ["Privilege escalation","Storage"]
  },
  {
    id: "cncf-kcsa-fc-374",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Why is update on a Deployment that runs as a privileged service account an escalation path?",
    hint: "The template is editable; the identity stays.",
    back: "Editing the pod template (image, command, env) makes the new pods run <strong>the editor's code</strong> as the template's <strong>service account</strong>, with its mounts and RBAC. Anyone who can update such a workload effectively holds its permissions. Keep privileged workloads in namespaces where only trusted administrators can edit workloads.",
    tags: ["Deployments","Privilege escalation"]
  },
  {
    id: "cncf-kcsa-fc-375",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "What does a path traversal or file-read bug in a pod usually expose, and what limits the damage?",
    hint: "Credentials on the filesystem.",
    back: "The <strong>service account token</strong>, mounted Secrets and config files, and process environment through <code>/proc/self/environ</code>. Damage is limited by <strong>not mounting</strong> tokens or Secrets the app does not need, <strong>minimal RBAC</strong> for its service account, <strong>bound, expiring tokens</strong>, and network rules that keep the API server and other backends out of reach from where a stolen token might be replayed.",
    tags: ["Access to sensitive data","Tokens"]
  }
];

export default CNCF_KCSA_FLASHCARDS_15;
