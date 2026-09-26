export const CNCF_KCSA_QUESTIONS_13 = [
  {
    id: "cncf-kcsa-301",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "The hub every component talks through",
    scenario: "A security architect at an energy utility is drawing a data-flow diagram for a threat-modelling workshop. She needs to show how the scheduler, the controller manager and every kubelet learn about desired state and report status, so that the workshop can decide where to concentrate authentication and logging controls.",
    question: "Which component should sit at the centre of those data flows?",
    options: [
      { id: 'A', text: "The kube-apiserver, since the other components read and write cluster state only through it." },
      { id: 'B', text: "The kube-proxy on each node, since it relays all control traffic between nodes and the control plane." },
      { id: 'C', text: "The etcd cluster, since each component keeps a direct client session open to it for its state." },
      { id: 'D', text: "The cluster DNS service, since components discover and call one another by resolving service names." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The kube-apiserver is the hub of the control plane: the scheduler, the controller manager, kubelets and users all read and write state through its authenticated, authorized and audited API, and only the API server talks to etcd. That makes it the natural place for authentication, authorization, admission and audit controls in the threat model. Other components do not hold direct etcd sessions; giving them one would bypass every API control. Kube-proxy programs Service routing for pod traffic and relays no control plane traffic. Control plane components are configured with the API server address and do not discover each other through cluster DNS.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/",
    tags: ["Trust boundaries","Data flow","kube-apiserver"]
  },
  {
    id: "cncf-kcsa-302",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Keeping cluster credentials out of the CI system",
    scenario: "A retailer's CI server holds a kubeconfig with cluster-admin rights so it can run kubectl apply after every build. A threat model flags the CI server, which is reachable by hundreds of developers and third-party plugins, as a path to full cluster compromise.",
    question: "Which delivery model best removes that path?",
    options: [
      { id: 'A', text: "A push-based pipeline that stores the same kubeconfig in an encrypted CI variable instead of a file." },
      { id: 'B', text: "A pull-based script on a developer workstation that fetches the kubeconfig at deploy time only." },
      { id: 'C', text: "A pull-based GitOps controller running inside the cluster that applies manifests from a Git repository." },
      { id: 'D', text: "A push-based pipeline that uses kubectl --as to impersonate a less privileged user for every apply." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In a pull-based GitOps model, a controller such as Argo CD or Flux runs inside the cluster with its own in-cluster identity and pulls changes from Git, so the CI system no longer needs any credential that can change the cluster and the trust boundary stays at the cluster edge. Encrypting the CI variable still hands the credential to every job and plugin that can read it. Impersonation requires the CI identity to hold impersonate rights, so the powerful credential remains on the CI server. Moving deployment to a workstation just relocates the credential to a less controlled machine.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["Trust boundaries","GitOps","CI/CD"]
  },
  {
    id: "cncf-kcsa-303",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "What an admission webhook gets to see",
    scenario: "A startup installs a third-party validating webhook to enforce naming conventions. Its default configuration intercepts CREATE and UPDATE for all resources in all API groups, and the webhook runs on the vendor's SaaS endpoint on the internet.",
    question: "Which data-flow risk should the threat model highlight?",
    options: [
      { id: 'A', text: "The webhook receives only object names and namespaces, so the main risk is leaking the cluster's naming scheme." },
      { id: 'B', text: "The API server sends each matched object to the webhook, including Secret contents, so they leave the cluster." },
      { id: 'C', text: "The webhook receives objects only after they are stored in etcd, so it can read data but never affect requests." },
      { id: 'D', text: "The API server sends requests to the webhook over plain HTTP by default, so the traffic could be modified." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An AdmissionReview sent to a webhook contains the full object being created or updated, and the old object for updates, so a rule matching all resources ships Secret data and every other object to the vendor's endpoint outside the cluster boundary. The threat model should scope the rules to the resources the webhook really needs and prefer in-cluster policy engines. The webhook sees complete objects, not just names. Admission runs before persistence, and validating webhooks can reject requests. The API server calls webhooks over TLS and verifies them using the configured CA bundle.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/",
    tags: ["Admission webhooks","Data flow","Trust boundaries"]
  },
  {
    id: "cncf-kcsa-304",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "An operator that holds the keys to everything",
    scenario: "A data team wants to install a community database operator whose Helm chart binds its service account to cluster-admin so it can manage databases in any namespace. The operator image is pulled from a public registry and updated weekly by its maintainers.",
    question: "How should the threat model characterise this operator?",
    options: [
      { id: 'A', text: "As a node-level risk only, because cluster-admin grants apply to the node the operator pod is scheduled on." },
      { id: 'B', text: "As a control plane component, which the API server exempts from RBAC checks and audit logging by design." },
      { id: 'C', text: "As a component crossing every namespace boundary, so compromise of its image or pod becomes compromise of the cluster." },
      { id: 'D', text: "As a low-risk tenant workload, because an operator image only acts on custom resources, never on built-in objects." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Binding the operator's service account to cluster-admin means anyone who controls its pod, image or supply chain controls the whole cluster, so the operator must be modelled as a trust boundary crossing that deserves least-privilege RBAC, image pinning and signature checks. Operators can manage any resource their RBAC allows, not only custom resources. The API server does not exempt operators from RBAC or audit; they are ordinary clients. Cluster-admin is a cluster-wide API permission, not a node-scoped one.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/",
    tags: ["Operators","Least privilege","Trust boundaries"]
  },
  {
    id: "cncf-kcsa-305",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "A node agent that runs everywhere",
    scenario: "A logistics firm deploys a vendor's log-collection agent as a DaemonSet with privileged containers and hostPath mounts of /var/log and /var/lib/docker. A threat-modelling session asks why this agent deserves more scrutiny than any single application Deployment.",
    question: "What is the strongest reason?",
    options: [
      { id: 'A', text: "A DaemonSet runs its pods in the kube-system namespace, where NetworkPolicies cannot apply to them." },
      { id: 'B', text: "A privileged DaemonSet bypasses the scheduler, so the agent's pods are never checked by admission or RBAC." },
      { id: 'C', text: "A compromise of the agent image gives an attacker privileged footholds on every node at the same time." },
      { id: 'D', text: "A DaemonSet pod keeps running after its node is drained, so it cannot be removed during an incident." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A privileged DaemonSet runs on every node with host access, so one malicious image update or one exploited agent process crosses the container-to-host boundary on the entire fleet at once; its blast radius is the cluster's data plane. DaemonSet pods are scheduled by the default scheduler today and are subject to admission and RBAC like other pods. They run in whatever namespace they are created in, and NetworkPolicies apply in kube-system too, unless the pods use the host network. Draining a node skips DaemonSet pods by default, but deleting the DaemonSet or its pods removes them.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/",
    tags: ["DaemonSets","Blast radius","Trust boundaries"]
  },
  {
    id: "cncf-kcsa-306",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Where an encrypted Secret is plaintext again",
    scenario: "A bank has enabled KMS-based encryption at rest for Secrets and TLS on every control plane connection. A threat modeller traces a database password from etcd to the application container and asks at which point on that path an attacker with root on a worker node could read it.",
    question: "Where can the node-root attacker read the password?",
    options: [
      { id: 'A', text: "Only while it crosses the network, because the kubelet talks to the API server over plain HTTP by default." },
      { id: 'B', text: "In the tmpfs Secret volume and container memory on that node, once a pod using it is scheduled there." },
      { id: 'C', text: "Nowhere on the node, because the kubelet passes the ciphertext to the container, which decrypts it itself." },
      { id: 'D', text: "Only in etcd, because encryption at rest protects the Secret on every hop until the application reads it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Encryption at rest protects the Secret inside etcd; the API server decrypts it before sending it over TLS to the kubelet, which writes the plaintext into a tmpfs volume or the container's environment. Root on that node can read both, which is why node compromise exposes the Secrets of pods running there. Containers never receive ciphertext to decrypt themselves. Encryption at rest does not follow the data beyond etcd, and a node-root attacker who has not also compromised etcd cannot read it there. Kubelet connections to the API server use TLS.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/secrets-good-practices/",
    tags: ["Secrets","Data flow","Node compromise"]
  },
  {
    id: "cncf-kcsa-307",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "The component at the edge that can read every certificate",
    scenario: "A media company exposes forty applications through a single ingress controller that terminates TLS for all of them. Its ClusterRole allows list and watch on Secrets in every namespace, and its admission webhook endpoint is reachable from any pod in the cluster.",
    question: "Why does this component deserve a dedicated place in the threat model?",
    options: [
      { id: 'A', text: "It uses a ClusterRole, which the Node authorizer grants automatically to every pod scheduled on ingress nodes." },
      { id: 'B', text: "It faces untrusted traffic and holds cluster-wide Secret access, so one exploit there reveals every namespace." },
      { id: 'C', text: "It runs as a DaemonSet with hostNetwork, so it bypasses the API server and reads Secrets directly from etcd." },
      { id: 'D', text: "It terminates TLS, so each application's traffic is decrypted inside the controller and cannot be re-encrypted." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An ingress controller sits on the external trust boundary, parsing untrusted requests, and commonly holds list and watch on Secrets across all namespaces to load certificates, so remote code execution in it, as in the 2025 ingress-nginx admission webhook vulnerabilities, hands an attacker every Secret in the cluster. Mitigations include restricting access to its webhook, splitting controllers per trust zone and narrowing its RBAC. It reads Secrets through the API server like any client, not directly from etcd, and does not need hostNetwork. TLS termination does not prevent re-encrypting to backends. The Node authorizer applies to kubelets, not to pods or ClusterRoles.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/",
    tags: ["Ingress","Trust boundaries","Secrets"]
  },
  {
    id: "cncf-kcsa-308",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "A pod token handed to an outside service",
    scenario: "A pod authenticates to an external secrets service by presenting its service account token, which the service validates through the TokenReview API. The threat model notes that a malicious insider at the external service could replay any token it receives against the Kubernetes API server with that pod's permissions.",
    question: "Which change best closes the replay path?",
    options: [
      { id: 'A', text: "Give the pod a projected token whose audience names the external service, which the API server will not accept." },
      { id: 'B', text: "Give the pod a token that has a shorter expiry, which fully prevents replay against the Kubernetes API server." },
      { id: 'C', text: "Give the external service the cluster CA certificate, so it can verify tokens offline and avoid calling the API." },
      { id: 'D', text: "Give the pod the legacy token from a service-account-token Secret, since those tokens are bound to one caller." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Projected service account tokens carry an audience claim; if the token is issued for the external service's audience, the API server, which accepts only its own configured audiences, rejects it, so the external party cannot replay it against Kubernetes. Legacy Secret-based tokens are the worst option: they are not audience-bound and never expire. A shorter expiry narrows the replay window but does not remove it. Verifying tokens offline changes how the service checks tokens, not what a stolen token can do at the API server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#serviceaccount-token-volume-projection",
    tags: ["Service accounts","Token audience","Trust boundaries"]
  },
  {
    id: "cncf-kcsa-309",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "A backdoor that comes back every ten minutes",
    scenario: "Responders at an online retailer delete a cryptocurrency-mining pod from the web namespace, but a fresh miner pod with a random name appears every ten minutes. No Deployment, ReplicaSet or DaemonSet in the namespace references the miner image.",
    question: "Which object should the responders look for first?",
    options: [
      { id: 'A', text: "A HorizontalPodAutoscaler that scales pods running the miner image back up." },
      { id: 'B', text: "A LimitRange in the namespace that injects the miner container into new pods." },
      { id: 'C', text: "A PodDisruptionBudget in the namespace that keeps a minimum number of miner pods." },
      { id: 'D', text: "A CronJob in the namespace whose job template runs the miner image on a schedule." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A CronJob creates a Job, and so a pod, on a schedule, which matches a miner that reappears every ten minutes with no long-running controller behind it; attackers use CronJobs as a Kubernetes-native persistence technique. A PodDisruptionBudget limits voluntary evictions but never creates pods. A HorizontalPodAutoscaler scales an existing workload controller, and there is none here. A LimitRange sets resource defaults and bounds and cannot inject containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/",
    tags: ["Persistence","CronJob","Incident response"]
  },
  {
    id: "cncf-kcsa-310",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Deleting a backdoor pod that keeps returning",
    scenario: "An attacker with edit rights in a namespace created a Deployment named metrics-helper that runs a reverse shell. The on-call engineer deletes the metrics-helper pod, and within seconds an identical pod with a new name is running again.",
    question: "What should the engineer delete to remove the backdoor?",
    options: [
      { id: 'A', text: "The metrics-helper Service, since kube-proxy recreates endpoints and pods while it exists." },
      { id: 'B', text: "The pod's node, since the kubelet restores pods from its local cache until the node is gone." },
      { id: 'C', text: "The namespace's default service account, which authorizes the controller to recreate pods." },
      { id: 'D', text: "The metrics-helper Deployment, whose ReplicaSet keeps recreating the pod after it is deleted." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pods owned by a Deployment are recreated by its ReplicaSet to maintain the desired replica count, so the fix is to delete the Deployment, which garbage-collects the ReplicaSet and its pods, and then revoke the attacker's access. Kubelets do not restore deleted pods from a cache, apart from static pods defined on disk. The ReplicaSet controller acts with its own identity, not the namespace's default service account. Services select pods but never create them, and kube-proxy only programs routing.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Persistence","Deployments","Incident response"]
  },
  {
    id: "cncf-kcsa-311",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Cluster-admin that no RBAC binding shows",
    scenario: "After evicting an intruder from an Amazon EKS cluster and deleting every suspicious ClusterRoleBinding, responders see the attacker's IAM role still performing admin actions. The cluster authenticates IAM principals through EKS's mappings from IAM identities to Kubernetes users and groups.",
    question: "Where should the responders look for the persistence?",
    options: [
      { id: 'A', text: "In the kube-system ServiceAccounts, where the attacker's IAM role would appear as an annotation on a token Secret." },
      { id: 'B', text: "In the aws-auth ConfigMap and EKS access entries, where the role may be mapped to an admin group." },
      { id: 'C', text: "In the cluster's ClusterRoles, where an aggregated rule grants admin rights to any caller with an AWS signature." },
      { id: 'D', text: "In the node IAM role's trust policy, which gives every IAM principal in the account admin access automatically." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "On EKS, IAM principals are mapped to Kubernetes identities and groups by the aws-auth ConfigMap or by EKS access entries, and a mapping to system:masters or an admin access policy grants cluster-admin without any visible RBAC binding, which makes it an attractive persistence mechanism. Both must be reviewed and cleaned, alongside the IAM side. Service account annotations are used for workload identity, not for authenticating IAM users to the API. The node role's trust policy controls which services can assume it and grants no one cluster-admin. ClusterRole rules cannot match on how a caller authenticated.",
    referenceUrl: "https://docs.aws.amazon.com/eks/latest/userguide/grant-k8s-access.html",
    tags: ["Persistence","Managed Kubernetes","Authentication"]
  },
  {
    id: "cncf-kcsa-312",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "A sidecar that appears in every new pod",
    scenario: "Weeks after a contractor's cluster-admin credentials were revoked, a SaaS company notices that every newly created pod in every namespace includes an extra container that sends data to an unknown host. None of the Deployment manifests in Git mention the container.",
    question: "Which kind of object is the most likely source of the injected container?",
    options: [
      { id: 'A', text: "A MutatingWebhookConfiguration pointing at an attacker-controlled service that patches each new pod." },
      { id: 'B', text: "A PodTemplate object in kube-system that the scheduler merges into every pod it binds to a node." },
      { id: 'C', text: "A ValidatingAdmissionPolicy that adds the container to pods which fail its CEL validation expression." },
      { id: 'D', text: "A RuntimeClass whose handler adds the container at start-up for pods that run with that runtime." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A mutating admission webhook can patch every pod at creation, so a MutatingWebhookConfiguration pointing at an attacker's service is a stealthy persistence mechanism that outlives the revoked credentials; audit logs for webhook configuration changes and reviews of registered webhooks reveal it. ValidatingAdmissionPolicy only accepts or rejects requests and cannot mutate. PodTemplate objects are not merged into pods by the scheduler. A RuntimeClass selects a runtime handler configured on nodes and does not inject containers into pod specs.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/",
    tags: ["Persistence","Admission webhooks","Detection"]
  },
  {
    id: "cncf-kcsa-313",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "API access that survives the pod cleanup",
    scenario: "An attacker briefly had rights to create Secrets and pods in the ci namespace. Responders deleted all attacker pods and rotated every user's credentials, yet audit logs show new API requests authenticated as the ci-deployer service account from an unknown address.",
    question: "What should the responders look for?",
    options: [
      { id: 'A', text: "A kubeconfig file stored in a ConfigMap, which the API server treats as a credential for the service account." },
      { id: 'B', text: "A kubernetes.io/service-account-token Secret created for ci-deployer, which holds a non-expiring token until deleted." },
      { id: 'C', text: "A client certificate issued to ci-deployer by the kubelet, which renews it automatically every twenty-four hours." },
      { id: 'D', text: "A projected token from a deleted attacker pod, which stays valid indefinitely after its pod is removed from the node." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Anyone who can create Secrets in a namespace can create a kubernetes.io/service-account-token Secret for a service account there; the token controller fills it with a long-lived token that keeps working until the Secret is deleted, making it a quiet persistence mechanism. Projected tokens are bound to their pod and are rejected once the pod is gone, besides expiring. A ConfigMap is not a credential store the API server consults. Kubelets do not issue certificates to service accounts; they rotate only their own node certificates.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/service-accounts/",
    tags: ["Persistence","Service accounts","Tokens"]
  },
  {
    id: "cncf-kcsa-314",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Cleaning up after a hostPath escape",
    scenario: "An attacker compromised a pod that mounted the node's root filesystem through a hostPath volume and wrote files under /etc and /root/.ssh on the worker node. The responders have already deleted the pod and patched the vulnerable application image.",
    question: "What should they do with the affected node?",
    options: [
      { id: 'A', text: "Uncordon the node once the patched image runs, since hostPath writes are rolled back when a pod ends." },
      { id: 'B', text: "Restart the kubelet on the node, which resets host files that pods changed through their hostPath mounts." },
      { id: 'C', text: "Delete and recreate the node object in the API, which makes the kubelet wipe local state on registration." },
      { id: 'D', text: "Cordon, drain and replace the node from a known-good image, since host changes outlive any pod deletion." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Writes through a hostPath mount change the node itself, planting SSH keys, cron entries or altered binaries that persist after the pod is gone, so the node must be drained and rebuilt from a trusted image rather than cleaned in place. Restarting the kubelet changes nothing on the host filesystem. Deleting the Node object only removes its API record; the kubelet re-registers without touching local files. HostPath writes are never rolled back when a pod ends, unlike an emptyDir, which is deleted with the pod.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#hostpath",
    tags: ["Persistence","hostPath","Incident response"]
  },
  {
    id: "cncf-kcsa-315",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Cluster-admin for anyone who asks",
    scenario: "During an incident review, a platform team runs a query over all ClusterRoleBindings and finds one named system-monitoring-read, created three months ago by a now-disabled account, that binds cluster-admin to the group system:unauthenticated. The API server allows anonymous authentication for health checks.",
    question: "What does this binding give an attacker?",
    options: [
      { id: 'A', text: "Cluster-admin only for pods in kube-system, since system groups are limited to system namespaces." },
      { id: 'B', text: "Full cluster-admin rights for any request without credentials that reaches the API server." },
      { id: 'C', text: "Read-only access to health endpoints, because anonymous requests are restricted to non-resource URLs." },
      { id: 'D', text: "Nothing, because RBAC ignores bindings to system: groups unless the node authorizer approves them." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "With anonymous authentication enabled, requests without credentials are authenticated as system:anonymous in the system:unauthenticated group, so binding cluster-admin to that group gives anyone who can reach the API server full control: a classic backdoor that survives credential rotation. RBAC applies bindings to system groups exactly like any other subject and has no namespace restriction for them. Anonymous access is limited only by what is bound to those subjects, unless the API server restricts anonymous auth to specific endpoints. The Node authorizer handles kubelet requests and does not gate RBAC.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authentication/#anonymous-requests",
    tags: ["Persistence","RBAC","Anonymous auth"]
  },
  {
    id: "cncf-kcsa-316",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Finding objects nobody meant to create",
    scenario: "A fintech manages every Kubernetes object through Argo CD from Git. After an intrusion, the security team wants a dependable way to find resources the attacker may have created, such as a DaemonSet named kube-proxy-helper or an extra RoleBinding, among thousands of legitimate objects.",
    question: "Which approach finds them most reliably?",
    options: [
      { id: 'A', text: "Compare live cluster state against Git and review objects Argo CD does not manage or reports as out of sync." },
      { id: 'B', text: "List pods that restarted in the last day, since injected workloads are restarted more often than normal pods." },
      { id: 'C', text: "Check each namespace's ResourceQuota usage, since attacker objects push usage above the recorded baseline." },
      { id: 'D', text: "Search Argo CD applications for names lacking a team prefix, since attackers rarely follow naming rules." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When Git is the source of truth, anything in the cluster that Git does not declare, or that differs from it, is suspect; comparing live state with the repository, including listing unmanaged resources across kinds, surfaces backdoor DaemonSets, RoleBindings and webhooks regardless of their names, and audit logs then show who created them. Attackers deliberately choose names that blend in, like kube-proxy-helper. Restart counts say nothing about origin. Quotas count only some resource types and ignore cluster-scoped objects such as ClusterRoleBindings.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/orphaned-resources/",
    tags: ["Persistence","GitOps","Detection"]
  },
  {
    id: "cncf-kcsa-317",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Objects that no audit event explains",
    scenario: "A crypto exchange's audit logs are complete and tamper-evident. Investigators find a ClusterRoleBinding granting cluster-admin to an unknown user, but there is no audit event for its creation at any stage, and the object's creation timestamp falls inside the logged period.",
    question: "What is the most likely explanation?",
    options: [
      { id: 'A', text: "The object was created through the aggregation layer, which forwards requests to extension servers without auditing." },
      { id: 'B', text: "The object was created by a controller, whose requests the API server always excludes from its audit events by default." },
      { id: 'C', text: "The object was written directly into etcd, bypassing the API server, so etcd credentials should be treated as compromised." },
      { id: 'D', text: "The object was created with kubectl apply using server-side apply, which audits only the managedFields and not creation." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Every request through the API server can be audited, so an object with no creation event despite complete logs points to a write straight into etcd, which bypasses authentication, authorization, admission and audit. The response is to treat etcd client certificates and access paths as compromised, rotate them and restrict who can reach etcd. Controller requests are audited like any others unless the policy excludes them. Built-in resources such as ClusterRoleBindings are served by the kube-apiserver itself, not by aggregated extension servers. Server-side apply requests are ordinary patch or create requests and are audited normally.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#securing-etcd-clusters",
    tags: ["Persistence","etcd","Audit logging"]
  },
  {
    id: "cncf-kcsa-318",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Thousands of ConfigMaps from one runaway script",
    scenario: "A bug in a tenant's automation created 400,000 small ConfigMaps in its namespace overnight, and the control plane's etcd database grew until API latency spiked for every tenant. The platform team wants a hard limit on how many such objects each tenant namespace can hold.",
    question: "Which control provides that limit?",
    options: [
      { id: 'A', text: "A LimitRange in each tenant namespace that caps the size of all configmaps at 1 MiB each." },
      { id: 'B', text: "A NetworkPolicy in each tenant namespace that blocks the automation's calls to the API server." },
      { id: 'C', text: "A PodDisruptionBudget in each tenant namespace that stops controllers from creating objects." },
      { id: 'D', text: "A ResourceQuota in each tenant namespace that sets count/configmaps to a sensible maximum." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "ResourceQuota supports object count quotas with the count/ prefix followed by a resource name, so count/configmaps caps how many ConfigMaps a namespace can hold and the API server rejects creation beyond it, protecting etcd and the API server from one tenant's runaway automation. LimitRange constrains compute resources and storage requests, not ConfigMap size, and ConfigMaps are already limited to 1 MiB each. PodDisruptionBudgets concern voluntary pod evictions. A NetworkPolicy would also block legitimate API use and does not apply to automation running outside the cluster.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/#object-count-quota",
    tags: ["Denial of service","ResourceQuota","etcd"]
  },
  {
    id: "cncf-kcsa-319",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "An autoscaler with no ceiling",
    scenario: "A marketing site's HorizontalPodAutoscaler scales on requests per second, and the cluster autoscaler adds nodes whenever pods are pending. During a bot flood the site scaled to thousands of pods and hundreds of nodes, and the monthly cloud bill tripled before anyone noticed.",
    question: "Which control would have bounded this denial-of-wallet attack inside the cluster?",
    options: [
      { id: 'A', text: "A PodDisruptionBudget on the site so the autoscaler cannot remove pods once traffic begins falling." },
      { id: 'B', text: "A realistic maxReplicas on the autoscaler plus a namespace ResourceQuota and a node group size limit." },
      { id: 'C', text: "A readiness probe on each pod so that new replicas take longer to join the Service during the flood." },
      { id: 'D', text: "A lower CPU target on the autoscaler so that it reacts earlier and more smoothly to incoming traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Autoscaling turns attacker traffic into spend unless it has ceilings, so a sensible maxReplicas, a ResourceQuota on the namespace and a maximum size on the node group bound the cost, ideally alongside rate limiting at the edge. A lower CPU target would scale out sooner and further. A PodDisruptionBudget limits voluntary evictions and would slow scale-in, not cap growth. Readiness probes gate traffic to new pods but do not stop them from being created.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",
    tags: ["Denial of service","Autoscaling","Cost"]
  },
  {
    id: "cncf-kcsa-320",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Flood traffic before it reaches the pods",
    scenario: "A ticketing company's public API is hit by a burst of requests from thousands of IP addresses whenever popular concerts go on sale. The pods behind the ingress controller exhaust their connection pools, and legitimate buyers see timeouts.",
    question: "Where should the company first apply controls against this volumetric abuse?",
    options: [
      { id: 'A', text: "At the nodes, by lowering the kubelet eviction threshold so overloaded pods are restarted more quickly." },
      { id: 'B', text: "At the pods behind the ingress controller, by raising memory limits so connection pools can grow." },
      { id: 'C', text: "At the API server, by enabling API Priority and Fairness so that application requests are queued fairly." },
      { id: 'D', text: "At the edge, with rate limiting in the ingress controller or a cloud load balancer and WAF in front of it." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Volumetric application traffic is best absorbed before it reaches workloads: rate limits and connection limits in the ingress controller, plus a cloud load balancer, WAF or DDoS protection service, drop abusive requests at the edge. Bigger memory limits just let pods hold more doomed connections. API Priority and Fairness protects the Kubernetes API server from its own clients and has no role in application traffic. Faster evictions restart overloaded pods without reducing the load.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/",
    tags: ["Denial of service","Ingress","Rate limiting"]
  },
  {
    id: "cncf-kcsa-321",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "A runaway controller starving the API server",
    scenario: "A buggy in-house operator started issuing thousands of list requests per second across all namespaces. The API server became so busy that kubectl commands from administrators and kubelet status updates timed out, leaving nodes flapping between Ready and NotReady.",
    question: "Which API server feature is designed to keep that operator from starving everyone else?",
    options: [
      { id: 'A', text: "The EventRateLimit admission plugin, configured with a per-user limit for the operator's service account." },
      { id: 'B', text: "A ResourceQuota on the operator's namespace that limits the number of list requests it can make per second." },
      { id: 'C', text: "A NetworkPolicy on the operator's namespace that drops its egress to the API server during traffic spikes." },
      { id: 'D', text: "API Priority and Fairness, using a FlowSchema that maps the operator to its own limited priority level." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "API Priority and Fairness classifies requests with FlowSchemas into priority levels, each with its own share of the API server's concurrency and fair queuing between flows, so an operator assigned to a limited level queues or is rejected on its own while system and administrator traffic keeps flowing. EventRateLimit is an admission plugin, and admission only sees mutating requests, not list calls. ResourceQuota counts objects and resources, not request rates. Blocking the operator's egress entirely would break it and does not provide fair sharing.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/flow-control/",
    tags: ["Denial of service","API Priority and Fairness","kube-apiserver"]
  },
  {
    id: "cncf-kcsa-322",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "An event storm filling etcd",
    scenario: "A crash-looping application in a shared cluster generates tens of thousands of Kubernetes Event objects per minute through a misbehaving client library. The etcd write rate spikes and other tenants' API calls slow down. The platform team wants to cap how fast Events can be created per namespace and per user.",
    question: "Which control is intended for exactly this?",
    options: [
      { id: 'A', text: "The EventRateLimit admission plugin, configured with Namespace and User limit types for Event creation." },
      { id: 'B', text: "The --event-ttl flag on the API server, lowered so that each Event object is deleted sooner after creation." },
      { id: 'C', text: "A PriorityClass for the crash-looping application so the scheduler places it on an isolated node." },
      { id: 'D', text: "A LimitRange in each namespace that sets a maximum number of Events each user's pods may generate." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The EventRateLimit admission plugin rejects Event creation beyond configured rates, with limit types for the whole server, per namespace, per user and per source and object, which is designed to stop event floods from overloading the API server and etcd. A shorter event TTL deletes Events sooner but does not slow the write storm. LimitRange has no notion of Events. A PriorityClass affects scheduling order and preemption, not API writes.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#eventratelimit",
    tags: ["Denial of service","Admission control","Events"]
  },
  {
    id: "cncf-kcsa-323",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Keeping the kubelet alive under memory pressure",
    scenario: "On a batch cluster, tenant pods with high memory limits sometimes push worker nodes into memory exhaustion. The kernel OOM killer then terminates the container runtime or the kubelet itself, and the node drops out of the cluster until someone reboots it.",
    question: "Which node configuration best protects the system daemons?",
    options: [
      { id: 'A', text: "Disable swap accounting on the node so the kubelet can count the tenants' memory more accurately." },
      { id: 'B', text: "Set a PriorityClass of system-node-critical on all tenant pods so the kernel treats them as preferred victims." },
      { id: 'C', text: "Set kube-reserved and system-reserved on the kubelet and keep hard eviction thresholds for memory.available." },
      { id: 'D', text: "Raise the tenant pods' memory requests to match their limits so they are always scheduled onto separate nodes." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kube-reserved and system-reserved subtract capacity for the kubelet, runtime and operating system from what pods can be allocated, and hard eviction thresholds such as memory.available make the kubelet evict pods before the kernel OOM killer starts killing daemons. Marking tenant pods system-node-critical does the opposite, raising their priority and protecting them from eviction. Swap accounting settings do not reserve memory for daemons. Setting requests equal to limits gives pods Guaranteed QoS but still lets them fill the node and does not force them onto separate nodes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/reserve-compute-resources/",
    tags: ["Denial of service","Kubelet","Node resources"]
  },
  {
    id: "cncf-kcsa-324",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Tenants burning through public load balancers",
    scenario: "On a shared cluster, one tenant's automation created 300 Services of type LoadBalancer in a day. Each one provisioned a public cloud load balancer and IP address until the account hit its regional quota, and other tenants could no longer expose their applications.",
    question: "Which control limits this per tenant namespace?",
    options: [
      { id: 'A', text: "A ResourceQuota that sets services.loadbalancers, and services.nodeports if needed, to a low number or zero." },
      { id: 'B', text: "A LimitRange that caps the number of ports each Service can declare and rejects Services above that value." },
      { id: 'C', text: "A PriorityClass with a low value on the tenant's Services so that their load balancers are provisioned last." },
      { id: 'D', text: "A NetworkPolicy that blocks egress from the tenant namespace to the cloud provider's load balancer API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "ResourceQuota includes services.loadbalancers and services.nodeports, so a tenant namespace can be limited to a few load balancers, or none, and the API server rejects Service creation beyond that, protecting shared cloud quotas and budgets. LimitRange covers compute and storage values for pods, containers and PVCs, not Service counts or ports. Load balancers are provisioned by the cloud controller manager, not by tenant pods, so tenant egress rules do not stop it. PriorityClass applies to pods, not Services.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/#object-count-quota",
    tags: ["Denial of service","ResourceQuota","Services"]
  },
  {
    id: "cncf-kcsa-325",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    domainName: "Kubernetes Threat Model",
    title: "Tenants who could evict everyone else",
    scenario: "A shared cluster defines a PriorityClass named critical with a high value for platform components. A tenant discovers that setting priorityClassName critical on its batch pods lets them preempt other tenants' pods whenever the cluster is full, effectively evicting competitors at will.",
    question: "Which control prevents tenants from using the high priority class?",
    options: [
      { id: 'A', text: "Set preemptionPolicy Never on the tenants' own namespaces, which removes any PriorityClass value from their pods." },
      { id: 'B', text: "Configure the ResourceQuota admission plugin to limit critical-priority pods, and grant quota only to platform namespaces." },
      { id: 'C', text: "Remove the tenants' RBAC get permission on priorityclasses, so the API server rejects pods that name the class." },
      { id: 'D', text: "Add a LimitRange to each tenant namespace that caps the priority value a pod may request at admission time." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The ResourceQuota admission plugin can be configured with limitedResources for pods using a given PriorityClass, so such pods are admitted only in namespaces that have a matching quota scoped with a PriorityClass scopeSelector; granting that quota only to platform namespaces stops tenants from using critical. PreemptionPolicy is a field of a PriorityClass, not a namespace setting, and does not strip priority values. Referencing a PriorityClass in a pod does not require RBAC get on priorityclasses. LimitRange has no priority controls.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/#limit-priority-class-consumption-by-default",
    tags: ["Denial of service","PriorityClass","ResourceQuota"]
  }
];

export default CNCF_KCSA_QUESTIONS_13;
