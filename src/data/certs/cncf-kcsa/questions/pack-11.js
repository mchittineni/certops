export const CNCF_KCSA_QUESTIONS_11 = [
  {
    id: "cncf-kcsa-251",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "What base64 in a Secret manifest really means",
    scenario: "A junior developer at an insurance startup commits a Secret manifest to a private Git repository, arguing that the database password is safe because the data field holds an unreadable base64 string. The security lead asks the team to explain what protection that encoding actually provides.",
    question: "How should the team describe the protection that base64 encoding gives the password?",
    options: [
      { id: 'A', text: "It is a keyed obfuscation that the API server reverses using the cluster CA, so the manifest is unreadable outside the cluster." },
      { id: 'B', text: "It is a one-way hash encoding of the password, so the repository only holds a digest the kubelet checks at pod startup." },
      { id: 'C', text: "It is a reversible encoding for binary-safe transport, so anyone reading the manifest can decode the password at once." },
      { id: 'D', text: "It is encryption at rest applied by kubectl, so the password in Git stays protected until etcd decrypts it." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Base64 is an encoding, not encryption: it carries arbitrary bytes safely through YAML and JSON, and decoding it needs no key at all, so a Secret manifest in Git exposes the password to everyone with repository access. The API server does not use the cluster CA to obfuscate Secret values; the CA signs certificates. Kubectl performs no encryption, and encryption at rest is an API server feature configured separately for etcd. It is not a hash either, because the kubelet must hand the original value to the container, which a digest could never reproduce.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/",
    tags: ["Secrets","Base64","GitOps"]
  },
  {
    id: "cncf-kcsa-252",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Existing Secrets after enabling encryption at rest",
    scenario: "A platform team at a logistics firm adds an EncryptionConfiguration with an aescbc provider listed first for secrets and restarts every kube-apiserver. An etcdctl read of a two-year-old Secret still shows the plaintext value, while a Secret created after the restart is stored with the k8s:enc:aescbc prefix.",
    question: "What should the team do so that every existing Secret is stored encrypted?",
    options: [
      { id: 'A', text: "Rewrite every Secret through the API server, for example by reading them and replacing them unchanged." },
      { id: 'B', text: "Run etcdctl defrag on every member so that compaction re-encodes old revisions with the new provider key." },
      { id: 'C', text: "Move the identity provider above aescbc in the providers list so that reads decrypt older data correctly." },
      { id: 'D', text: "Restart the kubelet on every node so mounted Secrets are fetched again and written back encrypted." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Encryption at rest applies when the API server writes an object, so data stored before the configuration change stays in plaintext until it is written again. Reading every Secret and replacing it unchanged, for example with kubectl get secrets across all namespaces piped to kubectl replace, forces each one through the first provider. Putting identity first would make new writes plaintext again. Defragmenting etcd reclaims space but never passes data through the API server, so no provider touches it. Kubelets only read Secrets; restarting them writes nothing back to etcd.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/",
    tags: ["Secrets","Encryption at rest","etcd"]
  },
  {
    id: "cncf-kcsa-253",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Choosing an encryption provider when the key must live off-cluster",
    scenario: "A bank's risk office rules that the key encrypting Kubernetes Secrets must never be stored on control plane disks and must be rotatable in the bank's HSM-backed key service without touching API server flags. The cluster runs Kubernetes 1.31 and the team is writing its EncryptionConfiguration.",
    question: "Which provider should head the secrets resource list?",
    options: [
      { id: 'A', text: "The aescbc provider with its key file mounted from a tmpfs volume so that the key never lands on a persistent disk." },
      { id: 'B', text: "The secretbox provider, whose XSalsa20 and Poly1305 construction keeps the stored key sealed from filesystem readers." },
      { id: 'C', text: "The kms v2 provider pointing at a plugin for the HSM service, which wraps per-cluster data keys with a remote key." },
      { id: 'D', text: "The aesgcm provider with a 32-byte key, rotated by adding a fresh key above the old one in the configuration file." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "With the KMS v2 provider the API server encrypts data with data encryption keys and asks an external KMS plugin to wrap them with a key encryption key that stays in the external service, so the root key is never on control plane disks and rotation happens in the key service. The aesgcm, secretbox and aescbc providers all read their key directly from the EncryptionConfiguration file on the control plane, and rotating them means editing that file and restarting the API servers. Mounting the key file from tmpfs still places the key in control plane memory and in whatever process writes the file, which the ruling forbids.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/",
    tags: ["Secrets","KMS","Encryption at rest"]
  },
  {
    id: "cncf-kcsa-254",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Pod creators and Secrets they cannot read",
    scenario: "A retail company grants its storefront developers a Role in the shop namespace that allows create on pods and deployments but deliberately omits get and list on secrets. A penetration tester still retrieves the payment gateway API key stored in a Secret in that namespace without any extra permissions.",
    question: "What most likely allowed the tester to read the key?",
    options: [
      { id: 'A', text: "The Role lacks an explicit deny rule on secrets, and RBAC treats any missing rule as an allow for reads." },
      { id: 'B', text: "Anyone who can create a pod can mount any Secret in that namespace and print it from the container." },
      { id: 'C', text: "The default service account token in every pod includes cluster-wide read access to Secret objects." },
      { id: 'D', text: "Pods that a Deployment will create inherit get on secrets from the ReplicaSet controller's ClusterRole." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kubernetes documentation warns that the ability to create a workload in a namespace implies access to every Secret in it, because the pod spec can reference any Secret as a volume or environment variable and the kubelet delivers it without checking the creator's RBAC on secrets. Controllers act with their own identities but do not lend permissions to users. The default service account has no rights to read Secrets unless someone grants them. RBAC has no deny rules at all and is deny-by-default, so a missing rule never grants access.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/secrets-good-practices/",
    tags: ["Secrets","RBAC","Least privilege"]
  },
  {
    id: "cncf-kcsa-255",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Why list on secrets is as good as get",
    scenario: "An observability vendor asks for a ClusterRole so its agent can count how many Secrets exist in each namespace for an inventory dashboard. The vendor argues that granting list without get is harmless because the agent never fetches an individual Secret by name.",
    question: "What should the cluster administrator know before granting list on secrets?",
    options: [
      { id: 'A', text: "A list response includes the full data of each Secret, so list exposes every value just as get would." },
      { id: 'B', text: "A list request on secrets is refused unless the agent also holds watch, so list alone is unusable." },
      { id: 'C', text: "A list response returns values only for Secrets of type Opaque, while TLS and token types stay redacted." },
      { id: 'D', text: "A list response on secrets returns only object names and metadata, so values stay hidden from the agent." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "List and watch requests return complete objects, including the data field, so a principal that can list secrets can read every value in scope; the Kubernetes good-practice guides treat list and watch on secrets as equivalent to get. There is no metadata-only redaction for Secrets in a normal list response, no type-based redaction for TLS or token Secrets, and list does not depend on watch. An inventory need is better met by a metadata-only query tool or by a narrower count exposed through another source.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/",
    tags: ["Secrets","RBAC","List verb"]
  },
  {
    id: "cncf-kcsa-256",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Env var or volume for a rotating credential",
    scenario: "A fintech runs a long-lived reconciliation service that reads a partner API token from a Secret. The partner forces a token rotation every 24 hours, and the team wants running pods to pick up the new value without a restart while also reducing the chance that the token shows up in crash dumps or debug output.",
    question: "How should the pod consume the Secret?",
    options: [
      { id: 'A', text: "Mount it as a Secret volume without subPath and have the service reread the file when its contents change." },
      { id: 'B', text: "Inject it with an env entry using secretKeyRef and add a liveness probe so pods restart when rotation happens." },
      { id: 'C', text: "Inject it with envFrom referencing the Secret, since the kubelet refreshes environment variables every sync." },
      { id: 'D', text: "Mount it with a projected volume that uses a subPath, so only the single token file appears in the container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Secret volumes are updated by the kubelet after the Secret changes, so an application that rereads the file sees the rotated token without a restart, and a file is less likely than an environment variable to be dumped with the process environment or inherited by child processes. Environment variables are fixed when the container starts, whether set by secretKeyRef or envFrom, and the kubelet never refreshes them. A liveness probe does not detect rotation and restarting on a timer is a workaround, not the requirement. A volume mounted with subPath does not receive updates, which defeats rotation.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/",
    tags: ["Secrets","Volumes","Rotation"]
  },
  {
    id: "cncf-kcsa-257",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Locking a TLS bundle against accidental edits",
    scenario: "A media company stores a wildcard TLS certificate in a Secret that dozens of ingress pods read. Twice this quarter an operator edited the Secret by mistake and broke HTTPS for every site. The team wants the Secret's data to be impossible to change after creation, accepting that rotation will mean creating a new Secret.",
    question: "Which setting meets the requirement?",
    options: [
      { id: 'A', text: "Add a finalizer to the Secret so that the API server blocks updates until the finalizer is removed." },
      { id: 'B', text: "Annotate the Secret with a last-applied configuration so that kubectl refuses edits that drift from it." },
      { id: 'C', text: "Set immutable to true on the Secret so that later updates to its data are rejected by the API server." },
      { id: 'D', text: "Change the Secret type to kubernetes.io/tls, which the API server treats as read-only after creation." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "An immutable Secret rejects changes to its data after creation; the only way forward is to delete and recreate it, and the kubelet also stops watching it, which reduces API server load. Finalizers delay deletion, not updates. The kubernetes.io/tls type enforces that tls.crt and tls.key keys exist but still allows edits. The last-applied annotation is bookkeeping for kubectl apply and does not stop kubectl edit or any other client from updating the object.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#secret-immutable",
    tags: ["Secrets","Immutable","TLS"]
  },
  {
    id: "cncf-kcsa-258",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Who can see a password passed as an environment variable",
    scenario: "A travel company injects its booking database password into the api container with an env entry that uses secretKeyRef. A reviewer claims that anyone who can run kubectl get pod -o yaml in the namespace can read the password, and asks the platform team to confirm who can actually see it.",
    question: "Which statement about exposure is accurate?",
    options: [
      { id: 'A', text: "The pod spec holds only a reference to the Secret; users with pods/exec can print the value by running env in the container." },
      { id: 'B', text: "The pod spec holds the value encrypted with the node's key, so only the kubelet on the pod's node is able to decode it." },
      { id: 'C', text: "The pod spec holds a hash of the value, so no user can see it unless they also hold get on the Secret it came from." },
      { id: 'D', text: "The pod spec holds the decoded value after admission, so anyone with get on pods can read it in the output of the manifest." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A secretKeyRef stores only the Secret name and key in the pod spec; the kubelet resolves the value when it starts the container, so get on pods reveals the reference, not the password. The value is visible to anyone who can exec into the container and run env, to processes that can read the container's environment, including root on the node, and to anything the application logs. The API server does not write decoded values into pod specs. There is no per-node encryption or hashing of environment values in the spec.",
    referenceUrl: "https://kubernetes.io/docs/tasks/inject-data-application/distribute-credentials-secure/",
    tags: ["Secrets","Environment variables","pods/exec"]
  },
  {
    id: "cncf-kcsa-259",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Keeping Vault as the only home for a credential",
    scenario: "A payments processor keeps all credentials in HashiCorp Vault. Its policy says a credential may appear in a pod's filesystem while the pod runs but must never be persisted as a Kubernetes Secret object in etcd. Several teams already use Kubernetes Secrets and want a similar consumption experience.",
    question: "Which approach satisfies the policy?",
    options: [
      { id: 'A', text: "Run the Secrets Store CSI Driver with the Vault provider and leave the optional sync to Kubernetes Secrets off." },
      { id: 'B', text: "Run External Secrets Operator with a Vault SecretStore so that each Vault path is synced into a Kubernetes Secret." },
      { id: 'C', text: "Use the kms v2 encryption provider backed by Vault Transit so that Secret objects in etcd are encrypted by Vault." },
      { id: 'D', text: "Encrypt each Secret with the Sealed Secrets controller so that etcd only ever stores the sealed ciphertext." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Secrets Store CSI Driver fetches the credential from Vault at pod start and mounts it into the pod as a volume, so nothing is written to etcd as long as the optional syncing to Kubernetes Secrets stays disabled. External Secrets Operator's purpose is to create Kubernetes Secrets from the external store, which the policy forbids. The Sealed Secrets controller decrypts SealedSecret resources into ordinary Secrets inside the cluster, so the plaintext Secret still lands in etcd. A KMS provider encrypts Secret objects, but they remain Kubernetes Secrets in etcd, again violating the rule.",
    referenceUrl: "https://secrets-store-csi-driver.sigs.k8s.io/",
    tags: ["Secrets","CSI","Vault"]
  },
  {
    id: "cncf-kcsa-260",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Credentials a registry pull should use",
    scenario: "An e-commerce team pulls images from a private registry that requires a username and password. A developer proposes putting the password in an Opaque Secret and passing it to the application container as an environment variable so the pod can pull its own image at startup.",
    question: "How should the cluster supply the registry credential instead?",
    options: [
      { id: 'A', text: "Store it in a ConfigMap referenced by the node's kubelet configuration so every pod on the node shares one login." },
      { id: 'B', text: "Store it as a kubernetes.io/basic-auth Secret and mount it into the container so the runtime reads it at start." },
      { id: 'C', text: "Store it as a kubernetes.io/dockerconfigjson Secret listed in imagePullSecrets on the pod or on its service account." },
      { id: 'D', text: "Store it as a kubernetes.io/service-account-token Secret so that the kubelet exchanges it for a registry token." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Image pulls are done by the kubelet and container runtime before any container runs, so the credential must be a dockerconfigjson Secret referenced through imagePullSecrets, either on the pod or attached to its service account. A basic-auth Secret mounted into the container is only visible after the image has already been pulled. Service account token Secrets hold Kubernetes API tokens and are never exchanged for registry logins. A ConfigMap is not meant for credentials, and a node-wide login removes per-namespace control over who can pull which images.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod",
    tags: ["Secrets","Image pull","Registry"]
  },
  {
    id: "cncf-kcsa-261",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Where Secret volumes live on the node",
    scenario: "During a hardening review of worker nodes, an engineer asks whether the contents of Secrets mounted into pods are written to the node's persistent disk, where they might survive in a disk image or backup long after the pod has been deleted.",
    question: "Where does the kubelet place the data of a mounted Secret volume?",
    options: [
      { id: 'A', text: "In a tmpfs mount under the kubelet's pod directory, held in memory rather than on the node's disk." },
      { id: 'B', text: "In a hostPath directory under /etc/kubernetes, shared by every pod scheduled onto that node." },
      { id: 'C', text: "In the node's local etcd cache, from which the kubelet copies values into each new container." },
      { id: 'D', text: "In the container's writable layer on the node's disk, removed only when the image is garbage collected." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The kubelet backs Secret volumes with tmpfs, a RAM-backed filesystem, so the data is not written to the node's persistent storage and disappears when the pod's volume is torn down. Secret data is never copied into an image layer. The kubelet does not place Secrets in a shared hostPath under /etc/kubernetes, which would expose one pod's data to others. Nodes do not run a local etcd cache; the kubelet fetches Secrets from the API server, and the Node authorizer limits it to Secrets used by pods bound to that node.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#information-security-for-secrets",
    tags: ["Secrets","tmpfs","Kubelet"]
  },
  {
    id: "cncf-kcsa-262",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A deploy credential for CI that expires on its own",
    scenario: "A game studio's external CI system deploys to a cluster for about ten minutes per pipeline run using a dedicated service account. Today it authenticates with a token copied from a kubernetes.io/service-account-token Secret created two years ago. The security team wants every credential the pipeline holds to expire on its own within an hour, even if a run crashes midway.",
    question: "How should the pipeline obtain its credential?",
    options: [
      { id: 'A', text: "Create a new kubernetes.io/service-account-token Secret at the start of each run and delete it in the final pipeline step." },
      { id: 'B', text: "Copy the projected token from a running pod that uses the service account, since those tokens are rotated by the kubelet." },
      { id: 'C', text: "Request a bound token for the service account through the TokenRequest API, for example kubectl create token with a duration." },
      { id: 'D', text: "Keep the existing Secret but annotate it with an expiry time so that the token controller revokes it after one hour." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The TokenRequest API issues service account tokens with an explicit expiry and audience, so a token requested per run, for instance with kubectl create token and a duration, stops working on its own even if the pipeline dies. Token Secrets of type kubernetes.io/service-account-token never expire; deleting one in a final step fails exactly when a run crashes. A projected token lifted from a pod is bound to that pod's lifetime rather than the pipeline's, and extracting credentials from running workloads is itself an attack pattern. The token controller does not honour an expiry annotation on token Secrets.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/service-accounts-admin/",
    tags: ["Service accounts","TokenRequest","CI/CD"]
  },
  {
    id: "cncf-kcsa-263",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "What a namespace does and does not isolate",
    scenario: "A university IT group gives each research lab its own namespace on a shared cluster and tells the labs they are now fully isolated from one another. A lab's student soon finds that her pods can still reach another lab's database service by its cluster DNS name.",
    question: "Why is the student's traffic able to reach the other lab's service?",
    options: [
      { id: 'A', text: "Namespaces scope names and API access, but they do not block pod-to-pod network traffic on their own." },
      { id: 'B', text: "Namespaces block cross-lab traffic, but cluster DNS names bypass that isolation by resolving to node IPs." },
      { id: 'C', text: "Namespaces block traffic between labs only when each namespace has its own dedicated node pool." },
      { id: 'D', text: "Namespaces isolate traffic only after the kube-proxy restarts and picks up the new namespace labels." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A namespace is a scope for names, RBAC and quotas, not a network boundary: the Kubernetes network model lets every pod reach every other pod unless NetworkPolicy, enforced by the CNI plugin, restricts it. Kube-proxy programs service routing and never adds namespace isolation, restart or not. Dedicated node pools separate where pods run but pods on different nodes still talk freely. Cluster DNS resolves services to cluster IPs, not to node IPs, and there is no namespace isolation for it to bypass.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/multi-tenancy/",
    tags: ["Namespaces","Isolation","Multi-tenancy"]
  },
  {
    id: "cncf-kcsa-264",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Hard isolation for mutually untrusted customers",
    scenario: "A SaaS vendor wants to let enterprise customers upload and run their own container images. The customers compete with each other, the vendor cannot vet their code, and one customer's contract states that a kernel exploit in another tenant's workload must not be able to reach its data.",
    question: "Which isolation design best satisfies that contract?",
    options: [
      { id: 'A', text: "Give each customer workloads on dedicated nodes or clusters, optionally with a sandboxed runtime per pod." },
      { id: 'B', text: "Give each customer a virtual cluster through vCluster that schedules its pods onto the shared node pool." },
      { id: 'C', text: "Give each customer a namespace with a ResourceQuota and a default-deny NetworkPolicy on a shared node pool." },
      { id: 'D', text: "Give each customer a namespace enforcing the restricted Pod Security Standard on a shared node pool." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Containers on the same node share the host kernel, so a kernel exploit crosses every namespace-level control; only separating tenants onto dedicated nodes or clusters, optionally strengthened with sandboxed runtimes such as gVisor or Kata Containers, keeps an exploited kernel from exposing another customer. Quotas and default-deny policies isolate resources and network paths but not the kernel. The restricted Pod Security Standard hardens pods yet still shares the kernel. A virtual cluster separates the control plane view, but when its pods land on shared nodes they share the kernel too.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/multi-tenancy/",
    tags: ["Multi-tenancy","Node isolation","Hard isolation"]
  },
  {
    id: "cncf-kcsa-265",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Tenants who add their own tolerations",
    scenario: "A platform team reserves tainted GPU nodes for one research tenant and relies on the taint to keep other tenants off. An audit finds that another tenant's developers simply copied the toleration into their own pod specs and now run jobs on the reserved nodes. Every tenant is allowed to create pods in its own namespace.",
    question: "What control closes this gap?",
    options: [
      { id: 'A', text: "A higher PriorityClass for the research tenant so that its pods preempt anything from other tenants on those nodes." },
      { id: 'B', text: "An admission policy, such as PodTolerationRestriction or a ValidatingAdmissionPolicy, that rejects unapproved tolerations." },
      { id: 'C', text: "An RBAC Role in each tenant namespace that omits the tolerations field from the pods resource the tenant may create." },
      { id: 'D', text: "Add a second taint with the NoExecute effect so that any pod which copied the toleration is evicted from the nodes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A taint only repels pods that lack a matching toleration, and any tenant who can write a pod spec can add one, so the fix is to control which tolerations each namespace may use at admission, for example with the PodTolerationRestriction plugin's per-namespace allow-list or a ValidatingAdmissionPolicy or Kyverno rule. Another taint is defeated the same way, since tenants can copy that toleration too, or use operator Exists. RBAC authorizes verbs on resources and cannot restrict individual fields of a pod spec. Priority governs preemption under contention and still lets other tenants use idle reserved capacity.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#podtolerationrestriction",
    tags: ["Taints","Admission control","Multi-tenancy"]
  },
  {
    id: "cncf-kcsa-266",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Node labels a compromised kubelet cannot forge",
    scenario: "A defence contractor pins classified workloads to a set of nodes using a nodeSelector on a label called tier=classified. A red team shows that after compromising an ordinary worker, they can use its kubelet credentials to add tier=classified to that node and attract the classified pods to it.",
    question: "Which change stops a compromised kubelet from applying the isolation label?",
    options: [
      { id: 'A', text: "Replace the nodeSelector with a required podAntiAffinity rule that keeps classified pods off ordinary nodes." },
      { id: 'B', text: "Move the label into a node annotation, since kubelet credentials are allowed to patch labels but not annotations." },
      { id: 'C', text: "Rename the label under the node-restriction.kubernetes.io/ prefix and keep the NodeRestriction plugin enabled." },
      { id: 'D', text: "Add a NoSchedule taint to the classified nodes and a toleration to the classified pods, keeping the label as it is." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The NodeRestriction admission plugin stops kubelets from setting or changing labels under the node-restriction.kubernetes.io/ prefix, so labels there can only be applied by administrators, and a compromised node cannot claim them to attract workloads. Pod anti-affinity is about co-location with other pods, not node identity. A taint and toleration keep other pods away from the classified nodes but do not stop classified pods from also landing on a forged node that has the label. Kubelet credentials can modify their own node object's annotations too, and nodeSelector cannot match annotations at all.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-isolation-restriction",
    tags: ["NodeRestriction","Node isolation","Labels"]
  },
  {
    id: "cncf-kcsa-267",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Keeping one lab from consuming the whole cluster",
    scenario: "A shared analytics cluster serves several data science groups, each in its own namespace. Last week one group launched hundreds of large notebook pods, and the other groups could not schedule anything for hours. The platform team wants a hard cap on total CPU and memory requests per group.",
    question: "Which object provides that cap?",
    options: [
      { id: 'A', text: "A ResourceQuota in each namespace limiting the sum of requests.cpu and requests.memory across all its pods." },
      { id: 'B', text: "A PodDisruptionBudget in each namespace capping how many of the group's pods can run at the same time." },
      { id: 'C', text: "A PriorityClass for each group so that the scheduler preempts the noisiest group's pods under pressure." },
      { id: 'D', text: "A LimitRange in each namespace setting default CPU and memory requests for containers that omit them." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A ResourceQuota constrains aggregate consumption in a namespace, and with requests.cpu and requests.memory limits the API server rejects new pods once the group's total would exceed its share. A LimitRange sets per-container defaults and bounds but places no ceiling on the namespace total. PriorityClasses decide who wins under contention rather than capping anyone, and could even let one group evict others. A PodDisruptionBudget limits voluntary disruptions and says nothing about how many pods may run.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
    tags: ["ResourceQuota","Noisy neighbour","Namespaces"]
  },
  {
    id: "cncf-kcsa-268",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Root in the container without root on the host",
    scenario: "A legacy mail server image must run as UID 0 inside its container because its init scripts call chown on startup. The security team accepts root in the container but insists that, if the process escapes, it must land as an unprivileged user on the node. The cluster runs a recent Kubernetes release with a runtime that supports the feature.",
    question: "Which pod setting addresses the requirement?",
    options: [
      { id: 'A', text: "Set hostUsers to false so the pod runs in a user namespace that maps container root to an unprivileged UID." },
      { id: 'B', text: "Set runAsNonRoot to true so that the kubelet remaps UID 0 to an unprivileged user ID at container start." },
      { id: 'C', text: "Set allowPrivilegeEscalation to false so the root user loses its host privileges if it breaks out." },
      { id: 'D', text: "Set runAsUser to 0 with a fsGroup of 65534 so files are owned by nobody on the host filesystem." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Setting hostUsers to false places the pod in a Linux user namespace, so UID 0 inside the container maps to an unprivileged UID range on the node; the process keeps root semantics for chown within the container but is unprivileged if it escapes. RunAsNonRoot does not remap anything; it makes the kubelet refuse to start a container that would run as root, which breaks this image. AllowPrivilegeEscalation sets no_new_privs to stop gaining more privilege through setuid binaries, but a process already running as host root keeps it. FsGroup only changes volume ownership and does not change the identity of the process.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/user-namespaces/",
    tags: ["User namespaces","Isolation","Pod security"]
  },
  {
    id: "cncf-kcsa-269",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Blast radius between development and production",
    scenario: "A media streaming company runs development and production as two namespaces on one cluster. After a developer laptop with cluster-admin credentials for the development environment was stolen, the CISO demands that a full compromise of development credentials, including cluster-scoped rights, can never reach production workloads.",
    question: "Which segmentation meets that demand?",
    options: [
      { id: 'A', text: "Keep one cluster and move production to dedicated nodes with a taint that development pods do not tolerate." },
      { id: 'B', text: "Keep one cluster and give development credentials only RoleBindings to the namespaced admin role." },
      { id: 'C', text: "Run production in a separate cluster with its own control plane, credentials and identity bindings." },
      { id: 'D', text: "Keep one cluster and add a default-deny NetworkPolicy between the development and production namespaces." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cluster-admin rights, or any cluster-scoped rights that development tooling needs, apply to every namespace and node in the cluster, so only a separate cluster with its own control plane and credentials removes the path from a development compromise to production. A NetworkPolicy blocks pod traffic, but an attacker with API rights can simply delete it. Tainted production nodes do not stop a cluster administrator from editing taints or the production pods themselves. Narrowing development to namespaced admin rights helps, yet the CISO's scenario explicitly includes cluster-scoped rights, which would still span both environments.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/multi-tenancy/",
    tags: ["Segmentation","Blast radius","Clusters"]
  },
  {
    id: "cncf-kcsa-270",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Cluster-scoped objects that namespaces cannot contain",
    scenario: "A platform team designs soft multi-tenancy where each product team gets full admin rights inside its own namespace through a RoleBinding to the built-in admin ClusterRole. One team then asks for rights to install its own CustomResourceDefinitions and to label nodes for its workloads.",
    question: "Why can these requests not be satisfied within the namespace model?",
    options: [
      { id: 'A', text: "CRDs and nodes can only be changed by the system:masters group, so no RBAC binding is able to grant these rights." },
      { id: 'B', text: "CRDs and nodes are cluster-scoped, so rights on them affect every tenant and need a ClusterRoleBinding." },
      { id: 'C', text: "CRDs and nodes live in the kube-system namespace, so the team would need admin rights there too." },
      { id: 'D', text: "CRDs and nodes are namespaced but hidden, so the admin ClusterRole must be patched to reveal them per namespace." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CustomResourceDefinitions and Node objects are cluster-scoped: they do not live in any namespace, a RoleBinding cannot grant access to them, and granting access through a ClusterRoleBinding lets one tenant change objects every tenant depends on. That is why the Kubernetes multi-tenancy guidance keeps cluster-scoped resources with the platform team. They are not hidden namespaced objects, and they do not live in kube-system. RBAC can grant rights on both to any subject, not only system:masters; the concern is the blast radius, not a hard restriction.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/multi-tenancy/",
    tags: ["Multi-tenancy","Cluster-scoped","RBAC"]
  },
  {
    id: "cncf-kcsa-271",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "What a stolen kubelet credential can read",
    scenario: "Incident responders at a telecom confirm that an attacker obtained root on one worker node and is using the kubelet's client certificate to query the API server. The cluster uses the Node and RBAC authorizers with the NodeRestriction admission plugin enabled, and the responders must scope which Secrets to rotate first.",
    question: "Which Secrets could the attacker read through the kubelet credential?",
    options: [
      { id: 'A', text: "Every Secret in the cluster, because the system:nodes group is bound to a ClusterRole that grants get on secrets." },
      { id: 'B', text: "Only Secrets referenced by pods bound to that node, since the Node authorizer ties kubelet reads to its own pods." },
      { id: 'C', text: "No Secrets at all, because the kubelet fetches Secret data through the runtime rather than the API server." },
      { id: 'D', text: "Every Secret in the namespaces that have at least one pod running on the node, whether or not those pods use them." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Node authorizer lets a kubelet identity read only the Secrets, ConfigMaps and persistent volume objects referenced by pods scheduled to its own node, so rotation should start with those Secrets and any other credentials present on the host. It does not open whole namespaces just because one pod runs there. Current Kubernetes versions do not bind the system:nodes group to broad RBAC read access on secrets; node permissions come from the Node authorizer. Kubelets do fetch Secret data from the API server; the runtime only receives the resulting volume or environment values.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/node/",
    tags: ["Node authorizer","Secrets","Incident response"]
  },
  {
    id: "cncf-kcsa-272",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Dedicated nodes for a payment workload",
    scenario: "A card processor must run its PCI-scoped pods on a dedicated set of nodes and keep every other workload off those nodes. The team has already labelled the dedicated nodes pool=pci and added a nodeSelector to the PCI pods, but other teams' pods still land there.",
    question: "What should the team add to keep other workloads off the dedicated nodes?",
    options: [
      { id: 'A', text: "A NetworkPolicy in every other namespace denying egress to the dedicated nodes' IP addresses." },
      { id: 'B', text: "A ResourceQuota in the PCI namespace that reserves the dedicated nodes' capacity for PCI pods." },
      { id: 'C', text: "A PriorityClass on the PCI pods so the scheduler assigns them to the dedicated nodes first." },
      { id: 'D', text: "A NoSchedule taint on the dedicated nodes, with a matching toleration only on the PCI pods." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Node selectors attract pods to nodes but never repel others; a NoSchedule taint repels every pod that lacks a matching toleration, so tainting the dedicated nodes and giving the toleration only to PCI pods, together with the existing nodeSelector, both pins and fences the workload. ResourceQuota counts namespace usage and does not reserve particular nodes. NetworkPolicy governs traffic, not scheduling. A PriorityClass affects ordering and preemption, and the other pods would still be allowed onto the nodes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Taints","Tolerations","Node isolation"]
  },
  {
    id: "cncf-kcsa-273",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Sharing one Secret with pods in another namespace",
    scenario: "A retail group keeps a shared SMTP relay password in a Secret in the platform namespace. The checkout team's pods run in the checkout namespace and reference that Secret in a secretKeyRef, but the pods fail to start with an error saying the Secret cannot be found.",
    question: "What explains the failure, and what is the supported fix?",
    options: [
      { id: 'A', text: "Pods must run with a service account from the platform namespace, which the checkout pod spec can reference directly." },
      { id: 'B', text: "Pods can reference Secrets only in their own namespace, so the value must be copied or synced into checkout." },
      { id: 'C', text: "Pods need a RoleBinding in the platform namespace, after which a secretKeyRef can name the Secret as platform/smtp." },
      { id: 'D', text: "Pods can reach other namespaces' Secrets only through a projected volume, which supports cross-namespace sources." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Secret references in a pod spec resolve only within the pod's own namespace, which is part of the namespace isolation model; the supported approach is to create the Secret in the checkout namespace, often by syncing it from an external store with a tool such as External Secrets Operator. A RoleBinding grants API rights to a user or service account, but the pod spec has no field for a Secret's namespace. Projected volumes combine sources from the same namespace only. A pod can use only a service account in its own namespace.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#restrictions",
    tags: ["Secrets","Namespaces","Segmentation"]
  },
  {
    id: "cncf-kcsa-274",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Per-container defaults in a tenant namespace",
    scenario: "A shared platform enforces a ResourceQuota on CPU and memory limits in each tenant namespace. Developers complain that their pods are rejected at creation with a message saying they must specify limits, and they want the namespace to fill in sensible values automatically when a manifest omits them.",
    question: "Which object should the platform team add to each namespace?",
    options: [
      { id: 'A', text: "A LimitRange that sets default and defaultRequest values for containers in the namespace." },
      { id: 'B', text: "A mutating PriorityClass that assigns default limits to every container in the namespace." },
      { id: 'C', text: "A HorizontalPodAutoscaler that calculates limit values from observed usage before admission." },
      { id: 'D', text: "A ResourceQuota with a scopeSelector that exempts pods lacking limits from the quota check." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When a quota covers limits or requests, every new pod must declare them, and a LimitRange with default and defaultRequest values fills them in at admission for containers that omit them, while also bounding the min and max per container. ResourceQuota scopes such as BestEffort select which pods a quota tracks, but they cannot waive the requirement for a quota that tracks limits. PriorityClass objects only carry a priority value and never mutate pods. An autoscaler adjusts replica counts after pods exist and plays no part in admission.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/limit-range/",
    tags: ["LimitRange","ResourceQuota","Multi-tenancy"]
  },
  {
    id: "cncf-kcsa-275",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Separate control planes for tenants who need CRDs",
    scenario: "An internal developer platform hosts forty product teams on one cluster. Several teams need to install their own operators and CRDs with conflicting versions, and leadership refuses to fund forty separate clusters. The security team requires that one team's cluster-scoped objects never be visible to or modifiable by another team.",
    question: "Which design meets the requirement at reasonable cost?",
    options: [
      { id: 'A', text: "Give each team a namespace and a ClusterRole that allows CRD creation only when names carry the team's prefix." },
      { id: 'B', text: "Give each team an Istio sidecar in every namespace so mTLS identities keep their CRDs apart." },
      { id: 'C', text: "Give each team a hierarchical namespace tree so that CRDs created in a parent namespace stay within its subtree." },
      { id: 'D', text: "Give each team a virtual cluster with its own API server and datastore, syncing its pods to the host cluster." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A virtual cluster, such as one created with vCluster, runs a separate API server and backing store per team, so each team can install its own CRDs and cluster-scoped objects that other tenants cannot see, while pods are synced down to the shared host cluster for scheduling, avoiding the cost of forty real clusters. RBAC resourceNames can restrict by exact name but cannot express prefixes, and CRDs remain visible cluster-wide. Hierarchical namespaces propagate namespaced objects such as RoleBindings, and CRDs are cluster-scoped so they cannot be contained in a subtree. A service mesh secures traffic between workloads and has no effect on API objects.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/multi-tenancy/",
    tags: ["Multi-tenancy","Virtual clusters","Control plane isolation"]
  }
];

export default CNCF_KCSA_QUESTIONS_11;
