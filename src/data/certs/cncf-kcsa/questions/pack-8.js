export const CNCF_KCSA_QUESTIONS_8 = [
  {
    id: "cncf-kcsa-176",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Kubeconfig files on a shared jump host",
    scenario: "Six operators at a logistics firm log in to one Linux jump host to administer clusters. A review finds each person's ~/.kube/config file has mode 0644, and one of them embeds a long-lived bearer token for a user with broad cluster rights.",
    question: "What is the most immediate fix for the file exposure?",
    options: [
      { id: 'A', text: "Restrict each kubeconfig to its owner with mode 0600 so other accounts on the host cannot read the credentials inside." },
      { id: 'B', text: "Rename each kubeconfig to a hidden file name and point KUBECONFIG at it so other users do not discover it." },
      { id: 'C', text: "Move each kubeconfig to /etc/kubernetes so all operators share one file in mode 0600 with the same credentials." },
      { id: 'D', text: "Base64-encode the token field in each kubeconfig so another user on the host who opens the file cannot read it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A kubeconfig holds live credentials, whether client keys, bearer tokens or refresh tokens, so it should be readable only by its owner; mode 0600 stops the other operators on the shared host from copying someone else's identity. Consolidating everyone onto one shared file destroys accountability and widens exposure. Base64 is an encoding that anyone can reverse, and kubeconfig certificate data is already base64. A hidden file name is obscurity; with mode 0644 it is still readable by every account on the host.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/",
    tags: ["Client security", "kubeconfig", "File permissions"]
  },
  {
    id: "cncf-kcsa-177",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Kubectl warnings silenced with one kubeconfig line",
    scenario: "A developer at a travel company got x509 unknown-authority errors when connecting to a new cluster, so the team's shared kubeconfig template now sets insecure-skip-tls-verify to true for that cluster. The engineers often work from hotel and airport networks.",
    question: "Why is this dangerous, and what is the proper fix?",
    options: [
      { id: 'A', text: "The flag stops kubectl verifying the server, so a spoofed endpoint can steal credentials; add certificate-authority-data." },
      { id: 'B', text: "The flag downgrades the connection to plain HTTP, so traffic is readable on the wire; set the server URL to use https instead." },
      { id: 'C', text: "The flag disables certificate rotation on the kubelets, so node certificates expire; enable rotateCertificates instead." },
      { id: 'D', text: "The flag disables client authentication, so the API server accepts requests without a token; add a token to the user entry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "insecure-skip-tls-verify tells kubectl to accept any server certificate, so on a hostile network an attacker can impersonate the API server, capture the bearer token or other credentials sent to it and feed back false responses. The fix is to trust the cluster's CA by adding certificate-authority-data, or certificate-authority, to the cluster entry. The flag does not affect client authentication, which still happens. The connection remains TLS, just unverified. Kubelet certificate rotation is a node setting unrelated to a client's kubeconfig.",
    referenceUrl: "https://kubernetes.io/docs/reference/config-api/kubeconfig.v1/",
    tags: ["Client security", "TLS", "kubeconfig"]
  },
  {
    id: "cncf-kcsa-178",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "A kubeconfig attached to a support ticket",
    scenario: "A consultant emails a platform engineer a kubeconfig, saying it grants read access to a demo cluster for troubleshooting. The engineer plans to run kubectl get pods with it from a laptop that also holds production credentials in other files.",
    question: "What should the engineer check before using the file?",
    options: [
      { id: 'A', text: "That the users entry has no exec or auth-provider section, since kubectl runs those commands with the user's local rights." },
      { id: 'B', text: "That the users entry uses a client certificate rather than a token, since certificates cannot carry any executable content." },
      { id: 'C', text: "That the server URL uses https, since kubectl only executes commands found in the file when it connects over plain HTTP." },
      { id: 'D', text: "That the cluster entry sets certificate-authority-data, since that is the only field kubectl will read from a foreign file." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A kubeconfig user entry can contain an exec credential plugin, a command kubectl runs locally to obtain a token, and file references for keys and CAs. A crafted file can therefore execute arbitrary code or read local files with the engineer's privileges, which is why the Kubernetes documentation says to use kubeconfig files only from trusted sources and to inspect them first. A client certificate entry is fine, but checking the auth method alone misses the exec section. Exec plugins run regardless of the server scheme. kubectl reads every field of the file, not only the CA data.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/",
    tags: ["Client security", "kubeconfig", "Exec plugins"]
  },
  {
    id: "cncf-kcsa-179",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Replacing static tokens in engineers' kubeconfigs",
    scenario: "Engineers at an e-commerce company authenticate to clusters with static bearer tokens pasted into their kubeconfigs, and tokens have leaked twice through screen shares and backups. The company already runs an OIDC identity provider with MFA for every employee.",
    question: "Which client-side approach best reduces the impact of leaked kubeconfigs?",
    options: [
      { id: 'A', text: "Keep the static tokens but encrypt each kubeconfig with a password that engineers type before running kubectl." },
      { id: 'B', text: "Use a single shared service account token stored in a password manager and copied into kubeconfigs when needed." },
      { id: 'C', text: "Use an exec credential plugin that signs in to the IdP with MFA and caches short-lived ID tokens for each request." },
      { id: 'D', text: "Issue each engineer a client certificate valid for five years so the kubeconfig no longer contains any bearer token." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "An exec credential plugin, such as kubelogin for OIDC, authenticates the user against the IdP, including MFA, and supplies kubectl with short-lived tokens, so a copied kubeconfig contains no long-lived secret and a leaked token soon expires. Long-lived client certificates are worse: Kubernetes has no certificate revocation, so a leaked one is valid until expiry. kubectl has no built-in support for password-encrypted kubeconfig files, and the token would still be long-lived. A shared service account token removes individual accountability and is itself a static credential.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authentication/#client-go-credential-plugins",
    tags: ["Client security", "OIDC", "Exec plugins"]
  },
  {
    id: "cncf-kcsa-180",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Stolen laptop with a cached OIDC session",
    scenario: "An engineer's unlocked laptop is stolen from a café. Their kubeconfig uses an OIDC exec plugin that caches an ID token with a 15-minute lifetime and a refresh token in the user's home directory. The API server validates ID tokens against the identity provider's published signing keys.",
    question: "What is the most effective containment step?",
    options: [
      { id: 'A', text: "Rotate the API server's serving certificate so that tokens cached on the laptop no longer validate against the cluster." },
      { id: 'B', text: "Restart every kube-apiserver to flush its OIDC refresh cache, which holds the only valid record of issued ID tokens." },
      { id: 'C', text: "Revoke the user's refresh tokens and sessions at the identity provider so no new ID tokens can be obtained." },
      { id: 'D', text: "Rotate the cluster CA and reissue component certificates, since OIDC ID tokens are signed by the cluster CA's key." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The refresh token is the long-lived part of the session: while it is valid, the plugin can keep obtaining new ID tokens without the user. Revoking the user's sessions and refresh tokens at the identity provider stops that, and any ID token already issued stops working within its 15-minute lifetime, because the API server checks the expiry offline. The API server's serving certificate has nothing to do with validating client tokens. kube-apiserver keeps no session store for OIDC; it verifies each token's signature and claims. ID tokens are signed by the IdP, not the cluster CA, so rotating the CA is disruptive and ineffective.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authentication/#openid-connect-tokens",
    tags: ["Client security", "OIDC", "Incident response"]
  },
  {
    id: "cncf-kcsa-181",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "A dashboard reached through kubectl proxy",
    scenario: "To let a colleague view a web dashboard, an engineer runs kubectl proxy --address 0.0.0.0 --accept-hosts '.*' on a workstation connected to the office network. The engineer's kubeconfig identity is bound to cluster-admin.",
    question: "What is the risk of this command?",
    options: [
      { id: 'A', text: "The proxy copies the engineer's kubeconfig to the colleague's machine, so the colleague keeps the cluster-admin credential afterwards." },
      { id: 'B', text: "The proxy publishes the dashboard through a public load balancer, so anyone on the internet can open it without signing in." },
      { id: 'C', text: "Anyone on the office network can send API requests through the proxy and they run with the engineer's cluster-admin rights." },
      { id: 'D', text: "The proxy disables TLS between the workstation and the API server, so traffic crossing the office network is visible in clear." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "kubectl proxy forwards any HTTP request it receives to the API server, attaching the local user's credentials. By default it listens only on 127.0.0.1 and restricts hosts, but binding to 0.0.0.0 and accepting every host lets anyone who can reach the workstation act as cluster-admin with no authentication of their own. It does not create load balancers or cloud resources. The proxy still uses TLS to reach the API server; the exposure is the unauthenticated local listener. No file is copied to anyone; the credential is used on their behalf.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/http-proxy-access-api/",
    tags: ["Client security", "kubectl proxy", "Credential exposure"]
  },
  {
    id: "cncf-kcsa-182",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Developers tunnelling to production databases",
    scenario: "A fintech's developers hold a Role in production namespaces that lets them view pods and logs. Auditors discover that developers have been running kubectl port-forward to reach production database pods from their laptops, bypassing the ingress NetworkPolicies that protect those pods.",
    question: "Which RBAC permission should be removed to stop the tunnels while keeping read access?",
    options: [
      { id: 'A', text: "The get verb on the pods/log subresource, which kubectl port-forward also uses to stream the tunnel's traffic." },
      { id: 'B', text: "The list verb on services, because kubectl port-forward can only target pods through a Service in the namespace." },
      { id: 'C', text: "The create verb on the pods/portforward subresource, which is what kubectl port-forward requests from the API." },
      { id: 'D', text: "The update verb on the pods/status subresource, which kubectl port-forward uses to open a port on the pod." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "kubectl port-forward opens a streaming connection through the API server and kubelet by creating on the pods/portforward subresource, and the traffic enters the pod's network namespace locally, which is why ingress NetworkPolicies do not stop it. Removing create on pods/portforward ends the tunnels while get and list on pods and get on pods/log keep read access. Port-forwarding does not use the log subresource. It can target pods directly, so hiding Services changes nothing. It never updates pod status.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/",
    tags: ["Client security", "port-forward", "RBAC"]
  },
  {
    id: "cncf-kcsa-183",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Admins who run every command as cluster-admin",
    scenario: "At a university, the three platform administrators use a single kubeconfig context bound to cluster-admin for everything, including casual browsing of workloads. Last month one of them deleted a production namespace by running a command against the wrong context.",
    question: "Which practice best reduces the risk from their day-to-day client use?",
    options: [
      { id: 'A', text: "Use the cluster-admin context everywhere but add a shell alias that prints the context before each command." },
      { id: 'B', text: "Use one cluster-admin identity shared by all three administrators so audit logs show a single consistent user." },
      { id: 'C', text: "Use a cluster-admin client certificate instead of a token, because certificates block commands on system objects." },
      { id: 'D', text: "Use a read-only identity for everyday work and switch to a separate privileged identity only for changes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Least privilege applies to humans' client credentials too: a default context with read-only rights means casual commands cannot change anything, and elevating deliberately, through a separate context or impersonation, makes destructive actions a conscious step. A prompt or alias helps awareness but still leaves full rights on every command. Sharing an identity removes accountability in audit logs. The credential type does not limit what an identity may do; cluster-admin is cluster-admin whether it arrives by certificate or token.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/",
    tags: ["Client security", "Least privilege", "kubeconfig"]
  },
  {
    id: "cncf-kcsa-184",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Deploy credentials stored in the CI system",
    scenario: "A SaaS company's CI pipeline deploys to Kubernetes with a kubeconfig containing a non-expiring service account token saved as a CI secret variable. The CI platform can issue signed OIDC identity tokens to each job, and the cluster's API server is configured to trust that issuer.",
    question: "What is the stronger design for pipeline credentials?",
    options: [
      { id: 'A', text: "Store the token in a ConfigMap in the cluster and have each job read it at runtime so it never appears in CI settings." },
      { id: 'B', text: "Authenticate each job with its short-lived CI-issued OIDC token, mapped to an identity with only the rights it needs." },
      { id: 'C', text: "Keep the non-expiring token but rotate the CI secret variable by hand once per quarter so any leak has a limited window." },
      { id: 'D', text: "Replace the token with a client certificate identity for the pipeline, as it is harder to leak than OIDC tokens." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When the API server trusts the CI platform's OIDC issuer, each job can present its own short-lived, signed identity token, so no long-lived credential is stored anywhere and RBAC can grant the job's identity exactly the rights it needs. Quarterly rotation still leaves a valid credential sitting in CI for months. A job would need a credential to read a ConfigMap in the first place, and ConfigMaps are not meant for secrets. A client certificate is also long-lived, cannot be revoked and is as easy to copy as a token.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authentication/#openid-connect-tokens",
    tags: ["Client security", "CI/CD", "OIDC"]
  },
  {
    id: "cncf-kcsa-185",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "A kubectl plugin downloaded from a forum",
    scenario: "An SRE installs a kubectl plugin named kubectl-cleanup, found on a community forum, by copying the binary into a directory on their PATH. Their kubeconfig contains contexts for several production clusters with write access. The security team asks what level of trust the plugin needs.",
    question: "Which statement about the plugin is accurate?",
    options: [
      { id: 'A', text: "The plugin can use only the current context, because kubectl passes it one short-lived token scoped to one namespace." },
      { id: 'B', text: "The plugin runs as an ordinary local program that can read the kubeconfig, so it can act with any of those identities." },
      { id: 'C', text: "kubectl runs plugins in a sandbox with a read-only copy of the kubeconfig, so it can list objects but never change them." },
      { id: 'D', text: "kubectl signs and verifies every plugin binary against the Kubernetes release key before running it from PATH." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A kubectl plugin is just an executable named kubectl-something on the PATH; kubectl invokes it with the user's environment and privileges, so it can read the kubeconfig, any referenced key files and exec plugins, and act on every cluster the user can reach. Plugins deserve the same vetting as any software run with production credentials, and plugin managers like Krew do not audit plugin code. kubectl provides no sandbox, performs no signature verification of plugins and does not mint scoped tokens for them.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubectl/kubectl-plugins/",
    tags: ["Client security", "kubectl plugins", "Supply chain"]
  },
  {
    id: "cncf-kcsa-186",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "New load balancer name that clients reject",
    scenario: "A company puts its three API servers behind a new internal load balancer with the DNS name k8s-api.corp.example. kubectl fails with a certificate error saying the certificate is valid for the node names and the kubernetes Service names but not for k8s-api.corp.example. The kubeconfig already contains the right CA.",
    question: "What is the correct fix?",
    options: [
      { id: 'A', text: "Reissue the API server serving certificates with k8s-api.corp.example in their SAN list and redeploy them to each server." },
      { id: 'B', text: "Set tls-server-name in each kubeconfig to a node name so clients can check the certificate against a name it already covers." },
      { id: 'C', text: "Set insecure-skip-tls-verify for the new cluster entry only, since the CA is already trusted and the network is internal." },
      { id: 'D', text: "Point every kubeconfig at one API server's IP instead of k8s-api.corp.example so clients skip the hostname check." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Clients verify that the server certificate covers the hostname they connected to, so the serving certificate must list the load balancer's DNS name as a subject alternative name; with kubeadm this is done by adding it to certSANs and regenerating the certificates. Overriding the expected name with tls-server-name works around the check for one identity and hides the design error. Pinning clients to one server's IP defeats the load balancer and still needs the IP in the SANs. Skipping verification makes spoofing possible even on internal networks.",
    referenceUrl: "https://kubernetes.io/docs/setup/best-practices/certificates/",
    tags: ["Client security", "TLS", "API server"]
  },
  {
    id: "cncf-kcsa-187",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Copying admin.conf to every engineer",
    scenario: "After building a cluster with kubeadm, a startup copied /etc/kubernetes/admin.conf to the laptops of all twelve engineers so everyone could use kubectl. The audit log now attributes every request to the same user name.",
    question: "What should the startup do instead?",
    options: [
      { id: 'A', text: "Replace admin.conf with the kubelet's kubeconfig from a worker node, which grants fewer rights and is simpler to share." },
      { id: 'B', text: "Keep admin.conf for everyone but add a separate namespace per engineer so their changes are kept apart from one another." },
      { id: 'C', text: "Give each engineer an individual identity, such as through OIDC, with RBAC scoped to their role, and keep admin.conf for break-glass." },
      { id: 'D', text: "Keep admin.conf for everyone but set each laptop's KUBECONFIG path differently so the audit log can tell engineers apart." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "admin.conf carries a cluster-admin client certificate; sharing it gives every engineer unlimited rights, makes audit attribution impossible and leaves an irrevocable credential on twelve laptops. Individual identities from an IdP, with RBAC matching each role, restore accountability and least privilege, while admin.conf stays locked away for emergencies. The file path on a laptop is invisible to the API server, so audit records are unchanged. Namespaces do not limit a cluster-admin credential. A kubelet credential is a node identity restricted by the Node authorizer, and sharing it would let people impersonate a node.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/",
    tags: ["Client security", "kubeadm", "Accountability"]
  },
  {
    id: "cncf-kcsa-188",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "A kubeconfig found in a public repository",
    scenario: "A secret scanner alerts that a kubeconfig containing a bearer token for the deploy-bot service account was pushed to a public GitHub repository four hours ago. The token was created as a long-lived service account token Secret. The developer has already deleted the file and force-pushed the branch.",
    question: "What must happen next to contain the exposure?",
    options: [
      { id: 'A', text: "Delete the token's Secret so the API server rejects it, issue a new credential, and review audit logs for its use." },
      { id: 'B', text: "Make the repository private, which invalidates any copies of the file that were fetched while it was publicly visible." },
      { id: 'C', text: "Nothing further, because force-pushing removes the commit from every clone and cache so the token is no longer exposed." },
      { id: 'D', text: "Rename the deploy-bot service account in place so the leaked token and its Secret refer to an identity that no longer exists." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A long-lived service account token stays valid as long as its Secret exists, so containment means deleting that Secret, which invalidates the token, issuing a replacement, preferably short-lived, and checking audit logs for any requests made with the leaked token during the four hours. Force-pushing and making the repository private do nothing about clones, forks, caches or scrapers that already copied it. Kubernetes objects cannot be renamed in place, and a leaked token keeps working for as long as its Secret exists.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/service-accounts/",
    tags: ["Client security", "Credential leak", "Service accounts"]
  },
  {
    id: "cncf-kcsa-189",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Customer data left behind after offboarding",
    scenario: "A SaaS provider creates a PersistentVolumeClaim per customer through a StorageClass whose reclaimPolicy is Retain. When a customer leaves, the namespace is deleted, but auditors find former customers' disks still exist in the cloud account months later, full of data.",
    question: "What explains the leftover disks?",
    options: [
      { id: 'A', text: "With Retain, the PV is bound to the next matching claim automatically, so a new customer inherits the previous data." },
      { id: 'B', text: "With Retain, deleting a claim keeps the PV and its backing disk in place, so the data stays until an admin removes it." },
      { id: 'C', text: "With Retain, namespaces cannot be deleted until the volume is detached, so the offboarding job must have failed quietly." },
      { id: 'D', text: "With Retain, the backing disk is wiped with rm -rf when the claim is deleted but the empty disk itself is kept for reuse." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Retain reclaim policy keeps the PersistentVolume, in the Released state, and the underlying storage asset when its claim is deleted; an administrator must clean up and delete them manually, so without a process the data lingers. For offboarding where data must be destroyed, Delete removes the backing volume, ideally combined with encryption. Scrubbing with rm -rf was the deprecated Recycle policy, not Retain. A Released PV is not rebound automatically because the previous claimant's data is still on it. Deleting a namespace deletes its claims; it is not blocked by Retain.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#reclaiming",
    tags: ["Storage", "PersistentVolume", "Data remanence"]
  },
  {
    id: "cncf-kcsa-190",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Host access through a PersistentVolume",
    scenario: "A cluster enforces the baseline Pod Security Standard on all application namespaces, which rejects pods with hostPath volumes. A team lead with permission to create PersistentVolumes creates one of type hostPath pointing at / and a PVC in an application namespace that binds to it. A pod mounting that PVC is admitted and can read node files.",
    question: "What should the platform team do to close this gap?",
    options: [
      { id: 'A', text: "Enable the NodeRestriction admission plugin, which stops pods from mounting hostPath data through a claim on the node." },
      { id: 'B', text: "Switch the namespaces to the restricted Pod Security Standard, which also inspects the PersistentVolumes that claims bind to." },
      { id: 'C', text: "Limit create on PersistentVolumes to cluster admins and add an admission policy that denies any hostPath PV." },
      { id: 'D', text: "Set the StorageClass reclaimPolicy to Delete so hostPath PVs that users create are removed once a claim binds." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Pod Security admission evaluates the volumes declared in the pod spec, and a persistentVolumeClaim volume is allowed even at the restricted level; it does not follow the claim to the bound PersistentVolume. Because PVs are cluster-scoped, create on them should be reserved for administrators, and an admission policy such as a ValidatingAdmissionPolicy, Kyverno or Gatekeeper rule can reject hostPath PVs outright. NodeRestriction limits what kubelets can modify, not what volumes pods use. A statically created hostPath PV does not use a StorageClass reclaim policy, and deletion after binding would not stop the pod reading the host.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#hostpath",
    tags: ["Storage", "hostPath", "Pod Security", "Admission control"]
  },
  {
    id: "cncf-kcsa-191",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Encrypting dynamically provisioned block volumes",
    scenario: "A healthcare company runs databases on dynamically provisioned block volumes through a cloud provider's CSI driver. Its policy requires every volume to be encrypted at rest with a customer-managed key, and application teams should not have to remember any extra setting in their claims.",
    question: "Where should the encryption be configured?",
    options: [
      { id: 'A', text: "In an EncryptionConfiguration file on the API servers, listing persistentvolumes as a resource to encrypt with the key." },
      { id: 'B', text: "In each pod's securityContext, setting fsGroup so that the kubelet encrypts files as it changes volume ownership." },
      { id: 'C', text: "In each PersistentVolumeClaim's annotations, which the kubelet and driver read to encrypt data before it reaches disk." },
      { id: 'D', text: "In the StorageClass parameters that the CSI driver reads, naming the managed key, and made the namespace default class." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Volume encryption is a property of the storage backend, so it is requested through StorageClass parameters that the CSI driver passes to the provider, such as an encrypted flag and a customer-managed key ID. Making that class the default means claims get encrypted volumes without extra settings, and quotas or policy can block other classes. EncryptionConfiguration encrypts API objects stored in etcd, not the contents of disks; a PersistentVolume object only describes the disk. fsGroup changes group ownership. The kubelet does not encrypt volume data based on claim annotations.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/",
    tags: ["Storage", "StorageClass", "Encryption at rest", "CSI"]
  },
  {
    id: "cncf-kcsa-192",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Guaranteeing a single writer for a ledger volume",
    scenario: "A bank's ledger service must never have two pods writing to its volume at once, even briefly during a rollout or if two replicas land on the same node. The volume is provisioned through a CSI driver, and the team currently uses the ReadWriteOnce access mode.",
    question: "Which access mode gives the strongest guarantee?",
    options: [
      { id: 'A', text: "ReadWriteOncePod, which lets only one pod in the whole cluster mount the volume read-write." },
      { id: 'B', text: "ReadWriteMany, which lets the storage backend coordinate writers so that only one of them commits at a time." },
      { id: 'C', text: "ReadOnlyMany, which lets one pod write while every other pod that mounts the same volume can only read it." },
      { id: 'D', text: "ReadWriteOnce, which already limits the volume to one pod no matter which node the other replicas run on." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "ReadWriteOnce limits a volume to one node, but several pods on that node can all mount it read-write. ReadWriteOncePod, stable since Kubernetes 1.29 for CSI volumes, restricts the volume to a single pod across the cluster, so a second pod stays pending. ReadWriteMany allows many writers and does not serialize them. ReadOnlyMany mounts the volume read-only for every consumer rather than giving one pod write access.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes",
    tags: ["Storage", "Access modes", "Data integrity"]
  },
  {
    id: "cncf-kcsa-193",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Reading node files through a volume subPath",
    scenario: "A security bulletin describes a flaw, tracked as CVE-2021-25741, where a user who can create pods could craft a symlink inside a volume and then mount it with subPath to reach files outside the volume, including on the host. A company cannot upgrade its kubelets for two weeks.",
    question: "Which interim mitigation addresses this flaw?",
    options: [
      { id: 'A', text: "Enable encryption at rest for Secrets, so any host files read through the subPath mount appear to the attacker as ciphertext." },
      { id: 'B', text: "Use admission policy to reject pods that set subPath, or disable the subPath feature gate on kubelets and API servers." },
      { id: 'C', text: "Mount every volume with readOnly true, since kubelets resolve subPath symlinks only for writable mounts on the node." },
      { id: 'D', text: "Apply a default-deny NetworkPolicy to every namespace, so pods cannot send any host files they read to external hosts." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The advisory's mitigations were to upgrade, or meanwhile to disable the VolumeSubpath feature gate on kubelets and kube-apiserver, or to use admission control to prevent untrusted users from creating pods with subPath mounts. Read-only mounts do not stop the kubelet following the symlink during setup, so files outside the volume could still be exposed. Encryption at rest protects data stored in etcd, not files on the node. A network policy might hinder exfiltration but leaves the host file access itself in place.",
    referenceUrl: "https://github.com/kubernetes/kubernetes/issues/104980",
    tags: ["Storage", "subPath", "CVE", "Admission control"]
  },
  {
    id: "cncf-kcsa-194",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Choosing a third-party CSI driver",
    scenario: "A platform team is evaluating an open-source CSI driver for a storage appliance. Its node plugin runs as a DaemonSet with privileged set to true, bidirectional mount propagation and hostPath mounts of /var/lib/kubelet and /dev. A reviewer asks how much trust the driver needs.",
    question: "What is the correct way to treat the driver?",
    options: [
      { id: 'A', text: "As an application workload that can share a namespace with tenant pods, since it only exposes volumes to their pods." },
      { id: 'B', text: "As low risk, because the restricted Pod Security Standard in the driver's namespace strips privileged mode on admission." },
      { id: 'C', text: "As low risk, because CSI drivers talk to the kubelet only through gRPC and cannot reach the node beyond that socket." },
      { id: 'D', text: "As a node-level component: vet its supply chain, pin and patch its images and isolate it in a locked-down namespace." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A CSI node plugin must mount devices into the kubelet's directories, so it legitimately needs privileged access, device nodes and bidirectional mount propagation; compromising it is equivalent to compromising every node it runs on. It should be treated like other node components: trusted source, pinned and patched images, a dedicated namespace with tight RBAC on who can modify it. The gRPC interface is how the kubelet calls it, but the plugin process itself has host-level privileges. Restricted Pod Security rejects privileged pods rather than stripping settings, so the driver would simply fail to run there. Sharing a namespace with tenants lets tenants tamper with it.",
    referenceUrl: "https://kubernetes-csi.github.io/docs/deploying.html",
    tags: ["Storage", "CSI", "Node security"]
  },
  {
    id: "cncf-kcsa-195",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "A reporting sidecar that only reads shared files",
    scenario: "A pod runs an application that writes records to a PersistentVolumeClaim and a reporting sidecar that only reads those records to build charts. The security team wants a bug in the sidecar to be unable to modify or delete the records.",
    question: "What is the simplest control?",
    options: [
      { id: 'A', text: "Set readOnlyRootFilesystem to true on the sidecar so the container cannot write anywhere, including the volume." },
      { id: 'B', text: "Mount the claim in the sidecar with readOnly set to true in its volumeMounts while the app keeps its write mount." },
      { id: 'C', text: "Give the sidecar its own claim bound to a copy of the volume that a nightly job refreshes from the original." },
      { id: 'D', text: "Change the claim's access mode to ReadOnlyMany so every container in the pod has read-only access to the files." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "readOnly on a container's volumeMount makes that mount read-only for that container alone, so the sidecar can read the records while the application keeps writing. A nightly copy adds storage and staleness for no benefit. ReadOnlyMany would also make the application's mount read-only. readOnlyRootFilesystem covers the container's image filesystem, not mounted volumes, so the sidecar could still write to the claim.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/",
    tags: ["Storage", "volumeMounts", "Least privilege"]
  },
  {
    id: "cncf-kcsa-196",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Who can read data restored from a volume snapshot",
    scenario: "A research institute takes nightly VolumeSnapshots of a genomics database in the genomics namespace. Several analysts hold edit rights there so they can run jobs, and a data owner worries they could obtain a full copy of the database without ever touching the live volume.",
    question: "Which statement reflects the real exposure?",
    options: [
      { id: 'A', text: "Snapshots are write-only objects, so data can only be restored by the storage team working directly in the provider's console." },
      { id: 'B', text: "Snapshots are encrypted with a key held by the snapshot controller, so a volume restored from one is readable only by admins." },
      { id: 'C', text: "Anyone who can create PVCs in that namespace can restore a snapshot into a new volume and mount it, so treat snapshot access as data access." },
      { id: 'D', text: "Snapshots can only be restored into a new namespace created by cluster admins, which keeps analysts from reaching the data." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A PersistentVolumeClaim can name a VolumeSnapshot in the same namespace as its dataSource, and the new volume contains a full copy of the data, which any pod the user creates can then mount. Users who can create claims and pods in the namespace can therefore read snapshot contents, so snapshot and claim permissions must be granted as carefully as access to the live data. Snapshots are restorable through the Kubernetes API, not only the provider console. The snapshot controller does not add its own encryption layer. By default restores happen within the same namespace, not only into admin-created ones.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volume-snapshots/",
    tags: ["Storage", "VolumeSnapshot", "RBAC"]
  },
  {
    id: "cncf-kcsa-197",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Pods mounting an NFS export directly",
    scenario: "A university's NFS server exports a research share to the whole worker subnet with no per-client authentication. Any user who can create pods can declare an inline nfs volume pointing at the server and read the share, bypassing the claims and quotas the platform team set up.",
    question: "Which cluster-side control blocks the inline mounts while still allowing approved volumes through claims?",
    options: [
      { id: 'A', text: "Enforce the baseline Pod Security Standard, which rejects nfs and other network filesystem volumes in the pod spec." },
      { id: 'B', text: "Enforce a ResourceQuota on persistentvolumeclaims, which caps the storage each namespace can use through inline volumes." },
      { id: 'C', text: "Enforce the restricted Pod Security Standard, whose volume list allows persistentVolumeClaim but not inline nfs volumes." },
      { id: 'D', text: "Enforce a StorageClass with reclaimPolicy Delete, which removes inline nfs volumes as soon as the pod using them exits." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The restricted Pod Security Standard allows only a fixed set of volume types: configMap, csi, downwardAPI, emptyDir, ephemeral, persistentVolumeClaim, projected and secret. Inline nfs volumes are rejected, while admin-provisioned NFS storage can still be consumed through claims. The baseline level blocks hostPath but permits other inline types such as nfs. ResourceQuota counts claims and requested storage but has no view of inline volumes. StorageClasses and reclaim policies apply to provisioned PVs, not inline pod volumes, and deleting access after use does not stop the reading.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Storage", "Pod Security", "NFS"]
  },
  {
    id: "cncf-kcsa-198",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "One pod filling the node's disk",
    scenario: "A buggy batch job in a shared cluster wrote hundreds of gigabytes into an emptyDir volume, filling the node's disk. The kubelet then began evicting unrelated pods from the node under disk pressure. The platform team wants to contain this kind of failure to the offending pod.",
    question: "Which configuration limits the damage to the offending pod?",
    options: [
      { id: 'A', text: "Set the StorageClass volumeBindingMode to WaitForFirstConsumer, so emptyDir space is reserved only when a pod starts." },
      { id: 'B', text: "Set memory requests and limits on containers, since the kubelet counts disk-backed emptyDir data as memory use." },
      { id: 'C', text: "Set ephemeral-storage requests and limits on containers and a sizeLimit on emptyDir so the kubelet evicts only that pod." },
      { id: 'D', text: "Set a ResourceQuota on persistentvolumeclaims in the namespace, since emptyDir volumes are carved from the claim quota." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Local ephemeral storage, which covers writable container layers, logs and disk-backed emptyDir, can be requested and limited per container, and emptyDir accepts a sizeLimit; when a pod exceeds its limit the kubelet evicts that pod instead of letting the node hit disk pressure and evict others. Memory limits only cover emptyDir when medium is Memory, which this job did not use. PVC quotas do not govern emptyDir. volumeBindingMode affects when PVs are provisioned for claims and has nothing to do with emptyDir.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#local-ephemeral-storage",
    tags: ["Storage", "Ephemeral storage", "Denial of service"]
  },
  {
    id: "cncf-kcsa-199",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Assuming Secret encryption covers database disks",
    scenario: "A retailer enabled encryption at rest for Secrets using a KMS provider on its API servers. A manager now reports to auditors that all customer data in the cluster is encrypted at rest, including the order database running on PersistentVolumes.",
    question: "Why is the manager's claim incorrect?",
    options: [
      { id: 'A', text: "API server encryption covers objects stored in etcd, not the data written to volumes, which needs storage encryption." },
      { id: 'B', text: "KMS encryption applies only to ConfigMaps by default, so Secrets and volumes both stay unencrypted until listed." },
      { id: 'C', text: "API server encryption covers volumes only when their StorageClass sets reclaimPolicy to Retain for each volume." },
      { id: 'D', text: "KMS encryption covers volumes only after each pod restarts, so the running database's disk is still unencrypted." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Encryption at rest configured on kube-apiserver encrypts the listed API resources, typically Secrets, before they are written to etcd. The database's files live on the storage backend behind the PersistentVolume, and protecting them needs encryption from the storage provider or CSI driver, or at the filesystem or application level. The configuration applies to whatever resources it lists, commonly Secrets, not ConfigMaps by default. Pod restarts and reclaim policies have no bearing on whether API server encryption touches volume data, because it never does.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/",
    tags: ["Storage", "Encryption at rest", "Misconceptions"]
  },
  {
    id: "cncf-kcsa-200",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Per-tenant encryption keys for provisioned volumes",
    scenario: "A multi-tenant analytics platform gives each tenant a namespace. A new enterprise tenant's contract requires its volumes to be encrypted with a key dedicated to that tenant, and other tenants must be unable to provision volumes with that key even if they learn the StorageClass name.",
    question: "Which design meets the contract?",
    options: [
      { id: 'A', text: "A single shared StorageClass with the tenant's key ID set as an annotation on the tenant's namespace for the CSI driver." },
      { id: 'B', text: "A dedicated StorageClass using the tenant's key and a NetworkPolicy that blocks other tenants from the CSI controller." },
      { id: 'C', text: "A dedicated StorageClass using the tenant's key and a RoleBinding that grants only that tenant get on StorageClasses." },
      { id: 'D', text: "A dedicated StorageClass using the tenant's key, with every other namespace's quota for that class set to zero." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A StorageClass per key lets the CSI driver encrypt the tenant's volumes with the dedicated key. StorageClasses are cluster-scoped and any user who can create a claim can name one, so ResourceQuota is the tool to restrict it: setting the class-specific quota keys, NAME.storageclass.storage.k8s.io/requests.storage or persistentvolumeclaims, to 0 in other namespaces blocks them from provisioning with it; admission policy is an alternative. CSI drivers do not read namespace annotations to choose keys. RBAC on StorageClass objects does not control whether a claim may reference a class. Provisioning requests go from the external provisioner to the backend, so a NetworkPolicy on tenant pods does not stop them.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/#storage-resource-quota",
    tags: ["Storage", "Multi-tenancy", "ResourceQuota", "Encryption at rest"]
  }
];

export default CNCF_KCSA_QUESTIONS_8;
