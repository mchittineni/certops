export const CNCF_KCSA_QUESTIONS_15 = [
  {
    id: "cncf-kcsa-351",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Who can read a mounted credential file",
    scenario: "A web application runs as UID 1001 in a container that also runs a small reporting agent as UID 2002. The database password is mounted from a Secret volume without any mode settings, and an audit asks whether the reporting agent, which has no need for it, can read the file.",
    question: "What should the audit conclude, and how can the exposure be reduced?",
    options: [
      { id: 'A', text: "Secret volume files are readable only by the container's first process, so the agent is already blocked from it." },
      { id: 'B', text: "Secret volume files are encrypted on tmpfs with the pod's key, so the agent reads only ciphertext it cannot use." },
      { id: 'C', text: "Secret volume files default to mode 0644, so the agent can read it; set a tighter defaultMode and an fsGroup." },
      { id: 'D', text: "Secret volume files default to mode 0400 owned by root, so neither process can read it unless root." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Unless defaultMode or per-item mode is set, files in a Secret volume are created with mode 0644, readable by every user in the container, so the agent can read the password; setting defaultMode to 0400 or 0440, combined with fsGroup or runAsUser so the application still owns the file, narrows access, and running unrelated processes in separate containers is better still. The default is not 0400. File permissions apply to users, not to process start order. Secret files on tmpfs are plaintext to anyone with permission to read them.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#secret-files-permissions",
    tags: ["Access to sensitive data","Secrets","File permissions"]
  },
  {
    id: "cncf-kcsa-352",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "A password passed on the command line",
    scenario: "A legacy batch image accepts its database password only as a command-line flag, so a developer writes the literal password into the args field of the Job's container. The team's developers hold the built-in view role in the namespace, which deliberately excludes Secrets.",
    question: "Who can now see the password?",
    options: [
      { id: 'A', text: "Only users who hold get on secrets, because the API server redacts sensitive-looking arguments in specs." },
      { id: 'B', text: "Anyone who can get the pod or Job spec, view holders included, and anyone listing node processes." },
      { id: 'C', text: "Only the container itself, because args are passed to the process at start and never stored in the spec." },
      { id: 'D', text: "Only cluster administrators, because args fields are hidden from namespace-scoped roles such as view." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Literal values in command, args or env are part of the pod and Job specs, so anyone who can read those objects, including holders of the view role, sees the password, and on the node it appears in the process list and /proc cmdline. The fix is to pass it from a Secret, as an env var or file read by a wrapper, so the spec holds only a reference. The API server does not redact arguments. Args are stored in the object like any other field. Namespace roles see the full spec of objects they can read.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/",
    tags: ["Access to sensitive data","Pod spec","RBAC"]
  },
  {
    id: "cncf-kcsa-353",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "What describing a Secret gives away",
    scenario: "A support engineer holds a Role that allows get on secrets in the billing namespace so he can confirm that required keys exist. His manager believes this is safe because the engineer only ever runs kubectl describe secret, which prints key names and sizes.",
    question: "What is wrong with the manager's reasoning?",
    options: [
      { id: 'A', text: "The describe command writes the values to the audit log, where every analyst can read them later." },
      { id: 'B', text: "The same get permission returns the full object, values included, to kubectl get secret -o yaml." },
      { id: 'C', text: "The kubectl describe output already includes the decoded values of each key below the sizes." },
      { id: 'D', text: "The describe command needs list rather than get, so the Role would have to be widened for it to work." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kubectl describe only formats what the API returns; the permission that allows describe is get on secrets, which returns the full object including data, so the engineer can read every value with kubectl get secret -o yaml or a direct API call. RBAC cannot grant metadata-only access to Secret objects. Describe prints key names and byte counts, not decoded values. It works with get. Audit contents depend on the audit policy, not on which kubectl subcommand was used.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/secrets-good-practices/",
    tags: ["Access to sensitive data","Secrets","RBAC"]
  },
  {
    id: "cncf-kcsa-354",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Recognising a privilege escalation",
    scenario: "A security trainer is building examples for a workshop on the Kubernetes threat model. She wants one example that clearly illustrates privilege escalation, as opposed to persistence, denial of service or data access, for attendees who are new to threat modelling.",
    question: "Which example best illustrates privilege escalation?",
    options: [
      { id: 'A', text: "A user with cluster-admin creates a CronJob that recreates a backdoor pod every hour after it is deleted." },
      { id: 'B', text: "A user with read access to one namespace downloads a ConfigMap that contains a customer's email address." },
      { id: 'C', text: "A user allowed only to create pods in one namespace launches a privileged pod and gains root on its node." },
      { id: 'D', text: "A user with edit rights in a namespace launches thousands of pods until the namespace exhausts its quota." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Privilege escalation means gaining capabilities beyond those granted, such as turning namespace-scoped pod creation into root on a node through a privileged pod. Reading a ConfigMap within granted access is access to sensitive data, not escalation. A cluster administrator creating a recurring backdoor already holds full rights; the CronJob provides persistence. Launching pods until quota runs out is a denial-of-service pattern.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/#privilege-escalation-risks",
    tags: ["Privilege escalation","Threat model"]
  },
  {
    id: "cncf-kcsa-355",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Any service account in the namespace",
    scenario: "The integrations namespace hosts a Deployment whose service account can create ClusterRoleBindings, used by an old onboarding tool. Developers in the namespace have a Role allowing create on deployments and pods, but no RBAC permissions of their own beyond that.",
    question: "Why does this arrangement give developers a path to cluster-admin?",
    options: [
      { id: 'A', text: "A developer can bind the powerful service account to himself, because RoleBindings need only pod rights." },
      { id: 'B', text: "A developer can read the account's token from the Deployment's status field, which stores it in plaintext." },
      { id: 'C', text: "A developer inherits every service account's rights automatically when working in the same namespace." },
      { id: 'D', text: "A developer can run a pod as the powerful service account and use its rights from inside the container." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A pod may run as any service account in its namespace, so anyone who can create pods or pod-creating workloads there can set serviceAccountName to the powerful account and use its token from inside the container, then create a ClusterRoleBinding granting themselves cluster-admin. The fix is to move such service accounts into a namespace only administrators can deploy to. Creating RoleBindings needs RBAC rights, not pod rights. Users never inherit service account permissions automatically. Deployment status holds replica counts and conditions, not tokens.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/#workload-creation",
    tags: ["Privilege escalation","Service accounts","RBAC"]
  },
  {
    id: "cncf-kcsa-356",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Pod creation hiding behind other resources",
    scenario: "A platform team carefully removed create on pods from its developer Role to limit privilege escalation through pod specs. The Role still allows create on deployments, jobs and cronjobs so developers can ship software, and the team believes pod-level risks are now contained.",
    question: "What has the team overlooked?",
    options: [
      { id: 'A', text: "Deployments, Jobs and CronJobs can create pods only with the default service account, so the risks are small." },
      { id: 'B', text: "Deployments, Jobs and CronJobs skip Pod Security Admission, so their pods are the more dangerous option." },
      { id: 'C', text: "Deployments, Jobs and CronJobs need pod create rights as well, so developers can no longer deploy anything." },
      { id: 'D', text: "Deployments, Jobs and CronJobs create pods from templates, so these rights carry the same escalation risks." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Workload controllers create pods on the user's behalf from the pod template the user writes, so create on Deployments, Jobs, CronJobs, StatefulSets, DaemonSets or ReplicaSets lets a user run any pod spec, service account and volume that Pod Security and other admission controls allow. Templates can name any service account in the namespace. Pod Security Admission enforces on the resulting pods and warns on templates, so these pods are not exempt. Controllers create the pods with their own identities, so users do not need pod create rights for it to work.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/#workload-creation",
    tags: ["Privilege escalation","Workloads","RBAC"]
  },
  {
    id: "cncf-kcsa-357",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "A capability that reaches into the kernel",
    scenario: "A vendor's storage agent asks for the SYS_MODULE capability in its container's securityContext, saying it needs to load a driver on first start. The security team is reviewing what this single capability would let an attacker do if the agent were compromised.",
    question: "What does SYS_MODULE give a compromised container?",
    options: [
      { id: 'A', text: "The ability to list which kernel modules are loaded on the node, which reveals only version information." },
      { id: 'B', text: "The ability to load modules into the shared host kernel, which amounts to full control of the node." },
      { id: 'C', text: "The ability to unload the container runtime's own modules, which only restarts the runtime's processes." },
      { id: 'D', text: "The ability to load modules only into its own filesystem view, with no effect on the host kernel." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CAP_SYS_MODULE allows loading and unloading kernel modules, and containers share the host kernel, so a module loaded from a compromised container runs as kernel code with complete control of the node and every container on it. It is not limited to the container's filesystem. Listing loaded modules needs no capability. Its power goes far beyond disrupting the runtime; loading a malicious module is a full node compromise. Drivers should be installed by the node image or a tightly controlled privileged installer, not by an agent that runs continuously.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/linux-kernel-security-constraints/",
    tags: ["Privilege escalation","Capabilities","Kernel"]
  },
  {
    id: "cncf-kcsa-358",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Reading the token through a file download bug",
    scenario: "A penetration tester finds a path traversal flaw in a document-preview service that lets her download arbitrary files from the container. She retrieves /var/run/secrets/kubernetes.io/serviceaccount/token and uses it from her laptop to list Secrets in the service's namespace.",
    question: "Which combination of controls would most reduce the impact of this flaw?",
    options: [
      { id: 'A', text: "Mount the token with defaultMode 0400 so the preview process can no longer read it through the traversal bug." },
      { id: 'B', text: "Move the token to an environment variable so it no longer exists on the container's filesystem." },
      { id: 'C', text: "Rotate the node's kubelet certificate so the tokens issued to pods on that node are automatically revoked." },
      { id: 'D', text: "Disable token automount or give its service account minimal rights, and limit where the API is reachable." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A file-read flaw exposes whatever credentials the container holds, so the service account token matters only if it exists and grants something useful: turning off automount when the service never calls the API, or restricting its RBAC to nothing sensitive, removes the prize, and restricting network access to the API server narrows where a stolen token works. Bound tokens also expire and are tied to the pod. The token must be readable by the application user if it is mounted at all, so a stricter mode that still lets the app read it does not block a bug in the app. Environment variables leak through /proc/self/environ just as easily. Kubelet certificate rotation does not revoke service account tokens.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/service-accounts/",
    tags: ["Access to sensitive data","Service accounts","Tokens"]
  },
  {
    id: "cncf-kcsa-359",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "What auditors with view can still read",
    scenario: "External auditors receive the built-in view ClusterRole across all namespaces, with the assurance that it excludes Secrets. During the audit they report several database connection strings, including passwords, that they found without ever touching a Secret object.",
    question: "Where did the auditors most likely find the passwords?",
    options: [
      { id: 'A', text: "In the service account tokens of each namespace, which the view role reads through the tokens subresource." },
      { id: 'B', text: "In the kubelet's running pod list, which the view role can open through the nodes/proxy subresource." },
      { id: 'C', text: "In the etcd database, which the view role can query directly because it includes read access to storage." },
      { id: 'D', text: "In ConfigMaps and in literal env values of pod and workload specs, which the view role is allowed to read." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The view role excludes Secrets but can read ConfigMaps and the full specs of pods and workload objects, so credentials placed in ConfigMaps or written as literal env values are visible to it; the remedy is to move them into Secrets and reference them. View cannot request service account tokens. No Kubernetes role grants direct etcd access; etcd is reached only through the API server or with etcd client certificates. View does not include nodes/proxy, which is a highly privileged permission.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles",
    tags: ["Access to sensitive data","RBAC","ConfigMaps"]
  },
  {
    id: "cncf-kcsa-360",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Cluster backups sitting in a bucket",
    scenario: "A retail company uses Velero to back up every namespace nightly to an object storage bucket, including Secrets, so that it can restore complete applications. The bucket is readable by a broad data-engineering group that uses the same storage account for analytics exports.",
    question: "What risk should the security team raise?",
    options: [
      { id: 'A', text: "The backup archives are encrypted with the cluster's etcd encryption key, so bucket readers see only ciphertext." },
      { id: 'B', text: "The backup archives can be restored only by Velero itself, so bucket readers cannot extract any of the data." },
      { id: 'C', text: "The backup archives contain only Secret names, since Velero strips data fields from Secrets before upload." },
      { id: 'D', text: "The backup archives contain Secret objects in decodable form, so bucket readers gain the cluster's credentials." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Backup tools such as Velero read objects through the API, where Secrets are already decrypted, and store them in the backup archives, so anyone who can read the bucket can extract every credential; the bucket needs strict access control and server-side or client-side encryption with separately controlled keys. Velero backs up Secret data, not just names, which is what makes restores work. Encryption at rest in etcd does not follow objects into backups made through the API. Backup archives are ordinary files that can be unpacked without Velero.",
    referenceUrl: "https://velero.io/docs/main/how-velero-works/",
    tags: ["Access to sensitive data","Backups","Secrets"]
  },
  {
    id: "cncf-kcsa-361",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Keeping a password away from a vendor sidecar",
    scenario: "A payment pod runs the in-house application alongside a third-party telemetry sidecar. The application needs one key, db-password, from a Secret that also holds an API signing key. The security team wants the sidecar unable to read either value, and the signing key exposed to nobody in the pod.",
    question: "How should the pod spec be written?",
    options: [
      { id: 'A', text: "Use envFrom in the application container, which exposes only the db-password key the code actually reads." },
      { id: 'B', text: "Mount the Secret volume only in the application container and use items to project just the db-password key." },
      { id: 'C', text: "Mount the Secret volume in both containers and set readOnly on the sidecar's mount so it cannot use the keys." },
      { id: 'D', text: "Mount the Secret volume at the pod level so the kubelet decides per container which keys each process needs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Volumes are declared per pod but mounted per container, so a Secret volume that appears only in the application container's volumeMounts is invisible to the sidecar, and listing items projects just db-password, leaving the signing key out of the pod entirely; avoiding shareProcessNamespace keeps the sidecar from peeking through /proc. A read-only mount still lets the sidecar read the values. EnvFrom injects every key in the Secret as a variable, including the signing key. Kubelets do not make per-container decisions; a volume is visible exactly where it is mounted.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#projection-of-secret-keys-to-specific-paths",
    tags: ["Access to sensitive data","Secrets","Sidecars"]
  },
  {
    id: "cncf-kcsa-362",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Rotating a password that leaked",
    scenario: "A payments team discovers that its database password leaked in a public paste. An engineer updates the value in the Kubernetes Secret and declares the incident closed. Some consumers read the password from a mounted volume, and others from an environment variable set with secretKeyRef.",
    question: "What else must happen before the incident is actually closed?",
    options: [
      { id: 'A', text: "Revoke the old password in the database and restart the pods that read it through environment variables." },
      { id: 'B', text: "Nothing further, because the kubelet updates both mounted files and environment variables within minutes." },
      { id: 'C', text: "Mark the Secret immutable, because immutability stops attackers from using the leaked password." },
      { id: 'D', text: "Delete and recreate the namespace, because Secrets keep previous values cached until namespace recreation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Changing the Secret object does not invalidate the leaked credential; the database must stop accepting the old password, and pods that consume it through environment variables keep the old value until they restart, while mounted volumes are refreshed by the kubelet and the application must reread them. Environment variables are never updated in running containers. Recreating the namespace is unnecessary and disruptive, since Secrets hold only their current value. Immutability prevents future edits to the Secret; it does nothing about the leaked value already in an attacker's hands.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-environment-variables",
    tags: ["Access to sensitive data","Rotation","Incident response"]
  },
  {
    id: "cncf-kcsa-363",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Cluster credentials in infrastructure state",
    scenario: "A company provisions its clusters with Terraform, which also creates an initial admin kubeconfig and several Kubernetes Secrets for bootstrap services. The Terraform state file is stored in a shared object storage bucket that the whole engineering department can read.",
    question: "What exposure should the security team flag?",
    options: [
      { id: 'A', text: "The state file stores only hashes of sensitive values, so readers learn resource names but not credentials." },
      { id: 'B', text: "The state file is encrypted by Terraform with the cluster CA key, so only cluster nodes are able to decrypt it." },
      { id: 'C', text: "The state file is deleted after each apply, so the exposure lasts only while a Terraform run is in progress." },
      { id: 'D', text: "The state file holds those credentials and Secret values in plaintext, letting readers take over the cluster." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Terraform records resource attributes in state, including generated kubeconfigs, certificates and Secret data, and marking values sensitive only hides them from console output, so a readable state file is a direct route to cluster admin; the backend needs tight access control and encryption, and bootstrap credentials should be rotated after use. Terraform does not hash sensitive values in state or encrypt state with the cluster CA. State persists between runs so that Terraform can plan changes.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["Access to sensitive data","Infrastructure as code","Credentials"]
  },
  {
    id: "cncf-kcsa-364",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "An exec into the network agent",
    scenario: "An SRE team is granted pods/exec in kube-system so it can debug DNS problems in CoreDNS pods. The namespace also runs the CNI agent as a privileged DaemonSet with hostPID and host filesystem mounts on every node.",
    question: "What escalation does this grant create?",
    options: [
      { id: 'A', text: "The SREs can exec into the privileged CNI agent pods and act as root on any node where those pods run." },
      { id: 'B', text: "The SREs can exec only into CoreDNS pods, because pods/exec rights are limited to the pods named in the ticket." },
      { id: 'C', text: "The SREs can exec into the CNI pods but cannot reach the node, as exec ignores hostPID and privileged settings." },
      { id: 'D', text: "The SREs can exec into the CNI pods but only as an unprivileged user, because exec drops all capabilities." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pods/exec in a namespace applies to every pod there unless restricted by resourceNames, and exec starts a process inside the target container with that container's privileges, so exec into a privileged, host-PID CNI agent is effectively root on the node. Grant exec narrowly, in namespaces without privileged pods, or through audited break-glass access. Nothing limits exec to pods named in a ticket. Exec inherits the container's user and capabilities rather than dropping them. The process joins the container's namespaces, including the host PID namespace when hostPID is set.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/",
    tags: ["Privilege escalation","pods/exec","kube-system"]
  },
  {
    id: "cncf-kcsa-365",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Minting tokens for someone else",
    scenario: "A deployment tool's Role in the apps namespace includes create on serviceaccounts/token, which a developer added so the tool could refresh its own token. The namespace also contains a service account that a database operator uses, bound to a ClusterRole that can read Secrets cluster-wide.",
    question: "Why is the added permission an escalation risk?",
    options: [
      { id: 'A', text: "It lets the tool request tokens for any service account in the namespace, including the operator's account." },
      { id: 'B', text: "It lets the tool read the private key used to sign service account tokens, and forge tokens for any user." },
      { id: 'C', text: "It lets the tool extend its own token's expiry indefinitely, but has no effect on other service accounts." },
      { id: 'D', text: "It lets the tool create new service accounts, which automatically inherit the operator's ClusterRole binding." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create on serviceaccounts/token authorizes TokenRequest calls for any service account in the namespace unless the rule is limited with resourceNames, so the tool, or anyone who compromises it, can mint a token for the operator's account and read Secrets across the cluster. It does not expose the signing key, which lives on the control plane. Token requests are for the named account, and the permission is not limited to the caller's own account by default. New service accounts start with no bindings.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/#privilege-escalation-risks",
    tags: ["Privilege escalation","Service accounts","TokenRequest"]
  },
  {
    id: "cncf-kcsa-366",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Editing a workload that runs as someone powerful",
    scenario: "A backup controller runs as a Deployment in the ops namespace with a service account that can read all Secrets cluster-wide. A contractor's Role in ops allows update on deployments so he can adjust resource settings, but it does not allow creating pods or reading Secrets.",
    question: "What can the contractor actually do with his permission?",
    options: [
      { id: 'A', text: "Change the Deployment's image or command so his own code runs with the controller's service account." },
      { id: 'B', text: "Change resource limits only, because the API server blocks edits to images in Deployments he did not create." },
      { id: 'C', text: "Change the replica count only, because a Deployment treats its pod template as immutable after creation." },
      { id: 'D', text: "Change the template, but new pods run as the default account because the controller resets serviceAccountName." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Update on a Deployment lets a user change its pod template, including the image, command and environment, and the new pods keep running as the template's service account, so the contractor can run his own code with the backup controller's cluster-wide Secret access. Highly privileged workloads belong in namespaces where only trusted administrators can edit workloads. The API server does not restrict which template fields an editor may change based on who created the object. Pod templates are mutable, which is how rollouts work. Edits do not reset serviceAccountName.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/#workload-creation",
    tags: ["Privilege escalation","Deployments","Service accounts"]
  },
  {
    id: "cncf-kcsa-367",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "A custom resource that creates whatever you ask",
    scenario: "An in-house operator watches a Notebook custom resource and creates a pod for each one using the operator's own service account, copying the image, volumes and securityContext from the Notebook spec. Data scientists may create Notebooks in their namespaces but not pods.",
    question: "What is the security problem with this design?",
    options: [
      { id: 'A', text: "The operator runs as a service account, so its pods cannot mount volumes or use any securityContext settings." },
      { id: 'B', text: "The operator uses a custom resource, which Kubernetes keeps out of RBAC and audit logging." },
      { id: 'C', text: "The operator acts as a confused deputy, giving users pods and settings they could not create themselves." },
      { id: 'D', text: "The operator bypasses etcd, so Notebook pods are never stored and cannot be seen or deleted by administrators." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When an operator copies user-supplied fields into objects it creates with its own privileges, create on the custom resource effectively delegates the operator's power, a confused deputy, so users can obtain hostPath volumes, privileged settings or other service accounts; the operator must validate and constrain those fields, and the target namespaces should enforce Pod Security so admission still rejects dangerous pods. Operator-created pods are stored in etcd like any other. Service accounts can create pods with volumes and security contexts if RBAC and admission allow. Custom resources are covered by RBAC and audit like built-in ones.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/operator/",
    tags: ["Privilege escalation","Operators","Confused deputy"]
  },
  {
    id: "cncf-kcsa-368",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Legacy tokens behind a read permission",
    scenario: "A monitoring integration was given get and list on secrets in kube-system to read one TLS certificate. The namespace, created on an older cluster, still contains kubernetes.io/service-account-token Secrets for several controllers that hold broad cluster permissions.",
    question: "What privilege does the integration effectively hold?",
    options: [
      { id: 'A', text: "Only the rights of its own service account, because tokens read from Secrets fail when used by another pod." },
      { id: 'B', text: "Only read access to Secrets, because service account tokens are rejected when presented from outside a pod." },
      { id: 'C', text: "Only read access to the TLS certificate, because token Secrets are hidden from list responses for non-owners." },
      { id: 'D', text: "The rights of each controller whose legacy token Secret it can read, since those tokens work anywhere." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Legacy service account token Secrets hold long-lived bearer tokens, so reading them grants the ability to authenticate as each of those service accounts with all of their permissions; the integration should be limited with resourceNames to its certificate, and unused token Secrets should be removed. List responses include token Secrets for anyone with list rights. Legacy tokens are not bound to a pod, so they work from anywhere. The API server accepts bearer tokens from any client that can reach it.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/#privilege-escalation-risks",
    tags: ["Privilege escalation","Service accounts","Secrets"]
  },
  {
    id: "cncf-kcsa-369",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "A dashboard that lends its own identity",
    scenario: "A team installed a web-based cluster dashboard years ago, bound its service account to cluster-admin for convenience, and exposed it on the internal network with the skip-login option enabled. Any employee who opens the page can browse and change resources.",
    question: "What is the core escalation problem?",
    options: [
      { id: 'A', text: "Visitors act with read-only rights, because dashboards cannot perform write operations through the API." },
      { id: 'B', text: "Visitors act with their own RBAC identity, but the dashboard caches the cluster-admin token in a file." },
      { id: 'C', text: "Visitors act with the dashboard's cluster-admin identity instead of their own, bypassing their RBAC limits." },
      { id: 'D', text: "Visitors act as system:anonymous, which the API server always limits to health checks and discovery." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "With login skipped, the dashboard makes API calls with its own service account, so every visitor inherits cluster-admin regardless of their personal permissions. The fix is to require each user's own token or an authenticating proxy, disable skip-login, and give the dashboard's service account minimal rights. Visitors do not use their own identity in this setup. Dashboards can write through the API with whatever permissions they hold. The requests are authenticated as the dashboard's service account, not as system:anonymous.",
    referenceUrl: "https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/",
    tags: ["Privilege escalation","Dashboard","Service accounts"]
  },
  {
    id: "cncf-kcsa-370",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Helm release records readable by the wrong people",
    scenario: "To let developers inspect release history with the view role, a platform team set HELM_DRIVER=configmap for all deployments. Charts receive database passwords through --set values, and several charts template those values into Secret objects.",
    question: "What sensitive-data exposure has this change created?",
    options: [
      { id: 'A', text: "Helm now stores release records, including supplied values and rendered manifests, in ConfigMaps that view can read." },
      { id: 'B', text: "Helm now stores only chart names and versions in ConfigMaps, so the change exposes release metadata and nothing else." },
      { id: 'C', text: "Helm now stores release records in the developer's local cache instead of the cluster, so nothing is exposed there." },
      { id: 'D', text: "Helm now stores release records in ConfigMaps but encrypts values with the cluster's KMS key, hiding them from view." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Helm keeps each release record, with the chart, the supplied values and the rendered manifests, in the cluster using a storage driver; the default Secret driver keeps those records behind Secret permissions, while the configmap driver puts the same encoded but unencrypted data into ConfigMaps, which the view role can read, exposing the passwords and the contents of templated Secrets. Release records contain far more than names and versions. Helm does not encrypt them itself, and KMS encryption at rest covers Secrets, not ConfigMaps, unless configured otherwise. The configmap driver stores records in the cluster, not locally.",
    referenceUrl: "https://helm.sh/docs/topics/advanced/#storage-backends",
    tags: ["Access to sensitive data","Helm","ConfigMaps"]
  },
  {
    id: "cncf-kcsa-371",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Why powerful agents make every node a prize",
    scenario: "A cluster runs a third-party security agent as a DaemonSet whose service account can list Secrets and update Deployments cluster-wide. A threat modeller argues that this makes a compromise of any single worker node, even one running only low-value pods, a path to the whole cluster.",
    question: "What is the reasoning behind the modeller's argument?",
    options: [
      { id: 'A', text: "Root on any node can read every Secret cluster-wide, because DaemonSets cache all Secrets on their hosts." },
      { id: 'B', text: "Root on any node can use the Node authorizer to request the DaemonSet's permissions for its own kubelet." },
      { id: 'C', text: "Root on any node can disable the DaemonSet, which switches the cluster into an unauthenticated mode." },
      { id: 'D', text: "Root on any node can read the agent pod's token there, which carries the agent's cluster-wide permissions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Because a DaemonSet runs on every node, its service account token is present on every node, and root on a host can read the tokens of all local pods, so any node compromise yields the agent's cluster-wide rights. Mitigations include minimal RBAC for DaemonSets, preferring node-scoped permissions, and running highly privileged controllers as Deployments on dedicated or control plane nodes. The Node authorizer limits kubelets and never grants them pod permissions. DaemonSets do not cache the cluster's Secrets on hosts; only the Secrets their pods use are present. Disabling a DaemonSet does not change the API server's authentication.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/",
    tags: ["Privilege escalation","DaemonSets","Node compromise"]
  },
  {
    id: "cncf-kcsa-372",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Landing a pod on a control plane node directly",
    scenario: "A tenant namespace allows hostPath volumes for a legacy agent. A red team shows that a tenant can create a pod with spec.nodeName set to a control plane node and a hostPath mount of /etc/kubernetes, despite the node-role.kubernetes.io/control-plane:NoSchedule taint, and then read the cluster's admin credentials.",
    question: "Which controls close this escalation path?",
    options: [
      { id: 'A', text: "Enforce Baseline Pod Security in the namespace and reject pods setting nodeName to control plane nodes." },
      { id: 'B', text: "Remove the tenant's get permission on nodes, since a pod can set nodeName only when the user can read that node." },
      { id: 'C', text: "Enable the NodeRestriction admission plugin, which stops pods binding directly to control plane nodes." },
      { id: 'D', text: "Add a second NoSchedule taint to the control plane nodes, since two taints together are enforced for nodeName pods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Setting spec.nodeName bypasses the scheduler, and NoSchedule taints are enforced by the scheduler, so the pod lands on the control plane node anyway; Baseline Pod Security forbids hostPath volumes, removing access to host files, and an admission policy that rejects nodeName or tolerations targeting control plane nodes stops the placement itself. Extra NoSchedule taints are bypassed the same way. Setting nodeName does not require read access to the Node object. NodeRestriction limits what kubelets can modify; it does not govern where pods are bound.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodename",
    tags: ["Privilege escalation","Control plane","hostPath"]
  },
  {
    id: "cncf-kcsa-373",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Swapping the image of a running pod",
    scenario: "A support Role allows patch on pods in the payments namespace so engineers can add annotations during incidents. A payments pod there runs with a service account that can read the namespace's Secrets. An engineer without Secret access wonders whether the patch permission is really as harmless as it looks.",
    question: "What can the patch permission be used for?",
    options: [
      { id: 'A', text: "Changing the pod's serviceAccountName to a more privileged account, which takes effect on the next restart." },
      { id: 'B', text: "Adding capabilities to a running container's securityContext, which the runtime applies to the live process." },
      { id: 'C', text: "Changing a container's image on the running pod, so it restarts running code of the engineer's choice." },
      { id: 'D', text: "Adding a hostPath volume to the running pod, which the kubelet mounts without restarting any of its containers." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Most of a pod's spec is immutable after creation, but container images are one of the few mutable fields; patching the image makes the kubelet restart that container with the new image, which then runs with the pod's service account and mounts, including its Secret access. Patch on pods therefore needs the same care as workload editing. The serviceAccountName field cannot be changed on an existing pod. Volumes cannot be added to a running pod, and securityContext capabilities are immutable too.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/#pod-update-and-replacement",
    tags: ["Privilege escalation","Pods","RBAC"]
  },
  {
    id: "cncf-kcsa-374",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "A policy webhook that never sees debug containers",
    scenario: "A company's custom validating webhook rejects privileged containers and matches only CREATE operations on the pods resource. The namespaces have no Pod Security labels. An engineer with update on pods/ephemeralcontainers adds a privileged debug container to a running pod and the webhook never objects.",
    question: "Why did the webhook miss it, and what should change?",
    options: [
      { id: 'A', text: "Ephemeral containers are validated only by mutating webhooks, so the rule must move to a mutating webhook." },
      { id: 'B', text: "Ephemeral containers inherit the pod's original admission decision, so they can only be governed by RBAC." },
      { id: 'C', text: "Ephemeral containers arrive as updates to the ephemeralcontainers subresource, so rules must match that too." },
      { id: 'D', text: "Ephemeral containers are created by the kubelet directly, so no webhook on ephemeralcontainers sees them." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Adding an ephemeral container is an UPDATE to the pods/ephemeralcontainers subresource, so a webhook matching only CREATE on pods never sees it; policies must include that subresource and operation, and enabling Pod Security Admission, which evaluates ephemeral containers, closes the gap as well. The request goes through the API server and its admission chain, not directly to the kubelet. It is a new admission request, not a reuse of the pod's original decision. Validating webhooks can evaluate subresources just as mutating ones can.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/ephemeral-containers/",
    tags: ["Privilege escalation","Ephemeral containers","Admission webhooks"]
  },
  {
    id: "cncf-kcsa-375",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Tracing into processes on the host",
    scenario: "A performance-profiling DaemonSet requests hostPID true and the SYS_PTRACE capability so it can attach to processes for flame graphs. Its containers run as root without user namespaces. The security team is deciding whether this combination is acceptable on production nodes.",
    question: "Which escalation does this combination enable if the profiler is compromised?",
    options: [
      { id: 'A', text: "Pausing the kubelet briefly, since SYS_PTRACE permits signals but not memory access to host processes." },
      { id: 'B', text: "Reading other containers' environment variables only, since ptrace cannot modify processes it attaches to." },
      { id: 'C', text: "Attaching to root-owned host processes and injecting code into them, which yields control of the node." },
      { id: 'D', text: "Tracing processes in its own containers only, because hostPID shares process IDs without the processes." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "HostPID exposes every host process to the container, and SYS_PTRACE as root lets it attach to them, read and write their memory and inject code, so compromising the profiler means code execution inside host processes such as the kubelet or systemd services, full node control. Ptrace can modify the processes it attaches to, not just read them. HostPID shares the host's process namespace itself, so the processes are fully visible. SYS_PTRACE allows memory access and control, well beyond sending signals.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/linux-kernel-security-constraints/",
    tags: ["Privilege escalation","hostPID","Capabilities"]
  }
];

export default CNCF_KCSA_QUESTIONS_15;
