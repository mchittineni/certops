export const CNCF_KCNA_QUESTIONS_12 = [
  {
    id: "cncf-kcna-276",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Is a Secret's value encrypted?",
    scenario: "A developer runs kubectl get secret db-creds -o yaml, copies the value of the password field, and decodes it on her laptop in one command. She is surprised, because the team assumed Secrets were stored encrypted by default.",
    question: "What explains what she saw?",
    options: [
      { id: 'A', text: "Secret data is encrypted only for the Opaque type, and db-creds must have been created with a different type." },
      { id: 'B', text: "Secret data is encrypted with the cluster CA key, and kubectl decrypts it for any user who can reach the API." },
      { id: 'C', text: "Secret data is only base64-encoded, and etcd stores it unencrypted unless encryption at rest is configured." },
      { id: 'D', text: "Secret data is hashed with SHA-256, and she decoded a cached plaintext copy held by kubectl on her laptop." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Values in a Secret's data field are base64-encoded, which is an encoding, not encryption, and by default the API server writes them to etcd unencrypted. Anyone with get access on the Secret can read it, so RBAC and encryption at rest are what protect it. There is no automatic encryption with the cluster CA key. Hashing is one-way, so a hashed value could not be used by applications. The Secret type affects validation of expected keys, not whether the data is encrypted.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/",
    tags: ["Secrets", "base64", "etcd"]
  },
  {
    id: "cncf-kcna-277",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Protecting Secrets in etcd backups",
    scenario: "An auditor points out that the nightly etcd snapshots copied to object storage would expose every Secret in the cluster if the bucket leaked. The platform team runs its own control plane and wants Secret values unreadable in etcd and its backups, ideally with keys held outside the cluster.",
    question: "What should the team configure?",
    options: [
      { id: 'A', text: "Pod Security Admission at the restricted level on every namespace holding Secrets" },
      { id: 'B', text: "A NetworkPolicy that blocks all Pods from reaching the etcd client port on 2379" },
      { id: 'C', text: "An EncryptionConfiguration on the kube-apiserver using a KMS provider for Secrets" },
      { id: 'D', text: "Immutable: true on every Secret so the values can no longer be read back from etcd" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Encryption at rest is set with an EncryptionConfiguration passed to the kube-apiserver; with a KMS provider, a key held in an external key management service wraps the data keys, so Secrets are ciphertext in etcd and in any snapshot of it. Marking Secrets immutable prevents updates but leaves the stored value in plaintext. Blocking Pods from etcd reduces one attack path but does nothing for leaked backups. Pod Security Admission governs Pod security settings and has no effect on how Secrets are stored.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/",
    tags: ["Secrets", "Encryption at rest", "KMS"]
  },
  {
    id: "cncf-kcna-278",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Refusing to start containers as root",
    scenario: "A company policy says no application container may run as the root user. The team wants the kubelet itself to refuse to start a container if its image would run as UID 0, rather than relying on image authors to remember.",
    question: "Which setting should they add to the Pod or container securityContext?",
    options: [
      { id: 'A', text: "privileged: false on the container" },
      { id: 'B', text: "readOnlyRootFilesystem: true" },
      { id: 'C', text: "runAsNonRoot: true" },
      { id: 'D', text: "fsGroup: 2000 on the Pod" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "With runAsNonRoot: true the kubelet checks the effective user at start-up and refuses to run the container if it would be UID 0, which enforces the policy regardless of how the image was built. privileged: false is already the default and only prevents full host access; the process can still be root inside the container. readOnlyRootFilesystem stops writes to the image filesystem but says nothing about the user. fsGroup sets group ownership of mounted volumes, not the running user.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["securityContext", "runAsNonRoot"]
  },
  {
    id: "cncf-kcna-279",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Blocking setuid privilege gains",
    scenario: "A container runs as UID 1000, but a penetration tester shows that a setuid binary left in the image lets the process become root. The team wants the kernel to stop any process in the container from gaining more privileges than its parent, without rebuilding the image today.",
    question: "Which securityContext field addresses this?",
    options: [
      { id: 'A', text: "runAsGroup: 1000 with runAsUser: 1000" },
      { id: 'B', text: "hostPID: false set on the Pod spec" },
      { id: 'C', text: "procMount: Default on the container" },
      { id: 'D', text: "allowPrivilegeEscalation: false" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "allowPrivilegeEscalation: false sets the no_new_privs flag on the container process, so setuid binaries and file capabilities cannot raise privileges above the parent's, which defeats the exploit. runAsGroup sets the primary group ID but does not stop a setuid binary changing the user. procMount controls how /proc is masked, not privilege escalation. hostPID: false, the default, keeps the Pod out of the host's process namespace but does nothing about setuid inside the container.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["securityContext", "Privilege escalation"]
  },
  {
    id: "cncf-kcna-280",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Trimming Linux capabilities",
    scenario: "A web server container runs as a non-root user and only needs to bind to port 80. A hardening guide asks the team to remove every Linux capability the process does not require, instead of relying on the runtime's default capability set.",
    question: "What should the container's securityContext contain?",
    options: [
      { id: 'A', text: "capabilities with add: [ALL] and drop: [NET_BIND_SERVICE]" },
      { id: 'B', text: "capabilities with drop: [NET_RAW] and add: [SYS_ADMIN]" },
      { id: 'C', text: "privileged: true with capabilities drop: [ALL] applied" },
      { id: 'D', text: "capabilities with drop: [ALL] and add: [NET_BIND_SERVICE]" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Dropping ALL removes the runtime's default capabilities, and adding back only NET_BIND_SERVICE lets the non-root process bind to a port below 1024; this is exactly the pattern the Restricted Pod Security Standard expects. Adding ALL and dropping one grants far more than needed. Dropping NET_RAW is sensible, but SYS_ADMIN is close to full root and is unrelated to binding ports. A privileged container gets every capability and host device access regardless of the drop list.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-capabilities-for-a-container",
    tags: ["securityContext", "Capabilities"]
  },
  {
    id: "cncf-kcna-281",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "The built-in replacement for PodSecurityPolicy",
    scenario: "A team upgrading an old cluster learns that PodSecurityPolicy objects no longer exist in their target version. They want a built-in way, without installing third-party software, to stop Pods that run privileged or mount host paths from being created in application namespaces.",
    question: "What should they use?",
    options: [
      { id: 'A', text: "Pod Security Admission applying the Pod Security Standards per namespace" },
      { id: 'B', text: "NetworkPolicy objects that deny traffic to Pods running in privileged mode" },
      { id: 'C', text: "RBAC ClusterRoles that remove the privileged verb from application users" },
      { id: 'D', text: "ResourceQuota objects that set the count of privileged Pods to zero" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "PodSecurityPolicy was removed in Kubernetes 1.25 and replaced by the built-in Pod Security Admission controller, which enforces the Privileged, Baseline or Restricted Pod Security Standards per namespace through labels; Baseline already blocks privileged containers and hostPath volumes. NetworkPolicy filters traffic and cannot inspect how a Pod is configured. RBAC has no privileged verb; it controls who may create Pods, not what the Pod spec contains. ResourceQuota limits resource consumption and object counts, not security settings.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/",
    tags: ["Pod Security Admission", "Pod Security Standards"]
  },
  {
    id: "cncf-kcna-282",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Previewing a stricter Pod Security level",
    scenario: "The apps namespace currently enforces the baseline Pod Security Standard. The team wants to move to restricted, but first wants kubectl users to see a message whenever something they apply would violate restricted, without any Pod actually being rejected yet.",
    question: "Which namespace label should they add?",
    options: [
      { id: 'A', text: "pod-security.kubernetes.io/audit: baseline" },
      { id: 'B', text: "pod-security.kubernetes.io/enforce-version: v1.30" },
      { id: 'C', text: "pod-security.kubernetes.io/warn: restricted" },
      { id: 'D', text: "pod-security.kubernetes.io/enforce: restricted" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Pod Security Admission has three modes: enforce rejects violating Pods, audit records violations in the audit log, and warn returns a warning to the user without blocking. Adding warn: restricted alongside the existing enforce: baseline shows users what would break. Setting enforce to restricted would start rejecting Pods immediately. Audit at baseline repeats the current level and only writes to the audit log, which kubectl users never see. enforce-version pins which version of the standard is applied; it does not change the level or add warnings.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/#pod-security-admission-labels-for-namespaces",
    tags: ["Pod Security Admission", "Namespace labels"]
  },
  {
    id: "cncf-kcna-283",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Deployment created but no Pods appear",
    scenario: "Right after a namespace is labelled pod-security.kubernetes.io/enforce: restricted, a developer runs kubectl apply for a Deployment whose containers run as root. The command succeeds with a warning, yet no Pods appear. kubectl describe replicaset shows repeated FailedCreate events.",
    question: "Why did the Deployment itself get created?",
    options: [
      { id: 'A', text: "Enforce mode never applies to kubectl clients; only controllers are checked when they create objects." },
      { id: 'B', text: "Enforce mode checks Pods, not workload objects; the ReplicaSet's Pod creations are what get rejected." },
      { id: 'C', text: "Enforce mode exempts every ReplicaSet by default; its Pods fail only because audit mode was also on." },
      { id: 'D', text: "Enforce mode starts blocking only after a grace period, so the Deployment slipped through the window." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pod Security Admission enforces only on Pod objects. For workload resources such as Deployments it evaluates the Pod template and returns warnings (and audit annotations) but does not reject them, so the Deployment is stored and its ReplicaSet then fails to create each Pod, which surfaces as FailedCreate events. There is no grace period; enforcement starts as soon as the label is set. Enforcement applies to every creator of Pods, human or controller. Audit mode only records violations and never rejects anything.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/#workload-resources-and-pod-templates",
    tags: ["Pod Security Admission", "Troubleshooting"]
  },
  {
    id: "cncf-kcna-284",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Most permissive Pod Security Standard",
    scenario: "The kube-system namespace runs CNI agents and storage drivers that need host networking, host paths and full access to host devices. The platform team is labelling every namespace with a Pod Security Standard and needs a level that will not break these system components.",
    question: "Which level fits kube-system?",
    options: [
      { id: 'A', text: "Unconfined, the profile with no filtering" },
      { id: 'B', text: "Restricted, the heavily hardened level" },
      { id: 'C', text: "Privileged, the unrestricted level" },
      { id: 'D', text: "Baseline, the minimally restrictive level" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Privileged standard is intentionally unrestricted and is meant for system and infrastructure workloads managed by trusted administrators, such as CNI and CSI node agents. Baseline blocks known privilege escalations, including privileged containers, host namespaces and hostPath volumes, so these agents would be rejected. Restricted is stricter still, following current Pod hardening practice. Unconfined is a seccomp profile type, not a Pod Security Standard level.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Pod Security Standards"]
  },
  {
    id: "cncf-kcna-285",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Custom rule without running a webhook",
    scenario: "A platform team wants every Deployment in the cluster to carry a team label and to be rejected otherwise. They would prefer not to deploy and operate a separate webhook server, and their clusters run a current Kubernetes release.",
    question: "Which built-in feature should they use?",
    options: [
      { id: 'A', text: "A ValidatingAdmissionPolicy with a CEL expression plus a binding" },
      { id: 'B', text: "Pod Security Admission labels set to restricted in every namespace" },
      { id: 'C', text: "A MutatingAdmissionWebhook that points at an in-cluster Service" },
      { id: 'D', text: "A LimitRange in each namespace requiring the team label on objects" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "ValidatingAdmissionPolicy, GA since Kubernetes 1.30, lets administrators write validation rules as CEL expressions that run inside the API server, and a ValidatingAdmissionPolicyBinding selects where they apply, so no external webhook is needed. A mutating webhook requires running exactly the kind of server they want to avoid, and it mutates rather than validates. LimitRange sets default and maximum resource values; it cannot require labels. Pod Security Admission checks Pod security fields, not arbitrary labels on Deployments.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/validating-admission-policy/",
    tags: ["ValidatingAdmissionPolicy", "CEL", "Admission"]
  },
  {
    id: "cncf-kcna-286",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Policy engines in the CNCF landscape",
    scenario: "A security team wants a policy engine they can install into Kubernetes that validates, mutates and even generates resources, with policies written as ordinary Kubernetes YAML rather than a separate policy language. It should be a CNCF project.",
    question: "Which project matches?",
    options: [
      { id: 'A', text: "The Falco runtime engine" },
      { id: 'B', text: "OPA Gatekeeper policy constraints" },
      { id: 'C', text: "The Kyverno policy engine" },
      { id: 'D', text: "Notary Project signing" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kyverno is a CNCF policy engine built for Kubernetes whose policies are Kubernetes resources written in YAML, and it can validate, mutate, generate and clean up resources as well as verify image signatures. OPA Gatekeeper is also an admission policy engine, but its constraint templates are written in the Rego language, which the team wants to avoid. Falco detects suspicious behaviour at runtime from system calls and is not an admission controller. The Notary Project signs and verifies artifacts rather than enforcing resource policies.",
    referenceUrl: "https://kyverno.io/docs/introduction/",
    tags: ["Kyverno", "Policy", "Admission"]
  },
  {
    id: "cncf-kcna-287",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Detecting a shell spawned in a container",
    scenario: "A security operations team wants to be alerted in real time when someone opens an interactive shell inside a running production container or when a process writes under /etc. They want a CNCF project that watches kernel system calls on each node.",
    question: "Which tool fits?",
    options: [
      { id: 'A', text: "cert-manager issuer" },
      { id: 'B', text: "The Falco engine" },
      { id: 'C', text: "The Trivy scanner" },
      { id: 'D', text: "Kyverno policies" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Falco is a CNCF graduated runtime security tool that observes system calls through eBPF or a kernel module and raises alerts on rules such as a shell running in a container or writes to sensitive paths. Trivy scans images and configurations for known vulnerabilities before deployment; it does not watch running processes. cert-manager issues and renews TLS certificates. Kyverno enforces policy at admission time, when objects are created, not during execution.",
    referenceUrl: "https://falco.org/docs/",
    tags: ["Falco", "Runtime security"]
  },
  {
    id: "cncf-kcna-288",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "An open kubelet port on every node",
    scenario: "A penetration tester reaches port 10250 on a worker node from inside the network and lists the node's Pods, even running commands in containers, without presenting any credentials. The cluster was built by hand from old installation notes.",
    question: "Which kubelet settings close this gap?",
    options: [
      { id: 'A', text: "Enforce the restricted Pod Security Standard so exec into containers is refused" },
      { id: 'B', text: "Enable the kubelet read-only port 10255 so clients use it instead of the 10250 API" },
      { id: 'C', text: "Apply a default-deny NetworkPolicy in kube-system so Pods cannot reach the node" },
      { id: 'D', text: "Disable anonymous authentication and use Webhook authorization for the kubelet API" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The kubelet serves an HTTPS API on 10250 that can list Pods and run exec and logs. With anonymous authentication enabled and authorization mode AlwaysAllow, anyone who can reach it controls the node's workloads. Setting authentication.anonymous.enabled to false and authorization.mode to Webhook makes the kubelet check credentials and ask the API server whether the caller is allowed. The read-only port exposes data without authentication and should be disabled, not added. NetworkPolicy applies to Pod traffic and does not protect a host port from the network. Pod Security Standards govern Pod specs, not the kubelet API.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/kubelet-authn-authz/",
    tags: ["Kubelet", "Authentication", "Hardening"]
  },
  {
    id: "cncf-kcna-289",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Proving an image came from our pipeline",
    scenario: "A regulated company wants cryptographic proof that each container image was built by its own CI pipeline and not altered afterwards, and it wants admission control to reject images that lack that proof. They are looking at open source tooling for signing.",
    question: "Which tool is designed to sign and verify container images?",
    options: [
      { id: 'A', text: "Sigstore cosign" },
      { id: 'B', text: "Harbor quotas" },
      { id: 'C', text: "Helm provenance" },
      { id: 'D', text: "Trivy scanner" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "cosign, part of the Sigstore project, signs container images and other OCI artifacts and stores the signatures in the registry, and admission tools such as Kyverno or the Sigstore policy controller can verify them before Pods start. Trivy finds vulnerabilities and misconfigurations, which is valuable but proves nothing about who built an image. Helm provenance files sign Helm charts, not the container images they reference. Harbor quotas limit storage use in a registry project.",
    referenceUrl: "https://docs.sigstore.dev/cosign/signing/overview/",
    tags: ["Sigstore", "cosign", "Supply chain"]
  },
  {
    id: "cncf-kcna-290",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Answering 'are we affected?' within minutes",
    scenario: "When a critical flaw was announced in a popular logging library, a retailer needed two days to work out which of its 300 running images included that library. Next time it wants a machine-readable list of every package and version inside each image, produced at build time and stored alongside the image.",
    question: "What should the build pipeline generate for each image?",
    options: [
      { id: 'A', text: "A Software Bill of Materials in SPDX or CycloneDX format" },
      { id: 'B', text: "A Helm values file recording the image tag for each release" },
      { id: 'C', text: "A signed provenance attestation describing the build steps" },
      { id: 'D', text: "A Falco rules file listing the processes the image may run" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A Software Bill of Materials is an inventory of the components and versions in an artifact, in standard formats such as SPDX or CycloneDX, so a newly announced vulnerable library can be matched against every image's SBOM in minutes. A provenance attestation records how and where an image was built, which is valuable for trust but does not enumerate packages. Falco rules describe suspicious runtime behaviour, not image contents. A Helm values file records deployment settings such as tags, not what is inside the image.",
    referenceUrl: "https://www.cisa.gov/sbom",
    tags: ["SBOM", "Supply chain"]
  },
  {
    id: "cncf-kcna-291",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Filtering dangerous system calls",
    scenario: "A team running untrusted plug-in code in containers wants the kernel to block uncommon system calls that containers rarely need, using the container runtime's standard profile instead of writing one from scratch.",
    question: "What should they set in the securityContext?",
    options: [
      { id: 'A', text: "seccompProfile type: Unconfined" },
      { id: 'B', text: "seccompProfile type: RuntimeDefault" },
      { id: 'C', text: "appArmorProfile type: Unconfined" },
      { id: 'D', text: "seLinuxOptions with the type set to spc_t" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "seccomp filters system calls, and the RuntimeDefault profile applies the container runtime's curated default list, blocking many rarely needed calls without the team writing a profile; it is required by the Restricted Pod Security Standard. Unconfined disables seccomp filtering entirely. An Unconfined AppArmor profile removes AppArmor restrictions rather than adding syscall filtering. The spc_t SELinux type is the super-privileged container type, which relaxes confinement.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/security/seccomp/",
    tags: ["seccomp", "securityContext"]
  },
  {
    id: "cncf-kcna-292",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Stopping writes to the container image",
    scenario: "An attacker who exploited a web app was able to drop a script into /usr/local/bin inside the container. The team wants the container's image filesystem to be unwritable while still letting the app write temporary files to /tmp.",
    question: "What combination achieves this?",
    options: [
      { id: 'A', text: "readOnlyRootFilesystem: true plus an emptyDir volume mounted at /tmp" },
      { id: 'B', text: "allowPrivilegeEscalation: false plus a Secret volume mounted at /tmp" },
      { id: 'C', text: "runAsNonRoot: true plus a ConfigMap volume mounted at /usr/local/bin" },
      { id: 'D', text: "readOnlyRootFilesystem: true plus a hostPath volume mounted at /tmp" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "readOnlyRootFilesystem: true makes the container's root filesystem read-only, and mounting an emptyDir at /tmp gives the app a writable scratch directory scoped to the Pod. A hostPath at /tmp would work mechanically but exposes a directory on the node, which Baseline Pod Security forbids and which widens the attack surface. Running as non-root may block writes to some paths, but a ConfigMap over /usr/local/bin replaces the image's binaries. Blocking privilege escalation does not stop writes, and Secret volumes are read-only, so /tmp would be unusable.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["securityContext", "readOnlyRootFilesystem", "emptyDir"]
  },
  {
    id: "cncf-kcna-293",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Secrets as environment variables or files",
    scenario: "A team injects a database password into an application through an environment variable sourced from a Secret. When they rotate the password in the Secret, the running Pods keep using the old value. They also worry that crash reports dump the process environment.",
    question: "What change addresses both concerns?",
    options: [
      { id: 'A', text: "Keep the variable but mark the Secret immutable so the kubelet pushes new values" },
      { id: 'B', text: "Keep the variable but use envFrom so every key in the Secret reloads automatically" },
      { id: 'C', text: "Move the password into a ConfigMap so updates reach running Pods more quickly" },
      { id: 'D', text: "Mount the Secret as a volume and have the application re-read the file after rotation" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Environment variables are set once when the container starts and never change, and they are easy to leak through crash dumps or process listings. Secret volumes (without subPath) are refreshed by the kubelet after the Secret changes, so an application that re-reads the file picks up the rotated value, and the value never sits in the environment. Immutable Secrets cannot be updated at all, the opposite of rotation. envFrom is still environment variables and does not reload. A ConfigMap is not meant for confidential data and offers nothing extra.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-files-from-a-pod",
    tags: ["Secrets", "Volumes", "Rotation"]
  },
  {
    id: "cncf-kcna-294",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Keeping secrets in an external vault",
    scenario: "A company already stores application credentials in HashiCorp Vault and a cloud secrets manager, and policy forbids copying them by hand into Kubernetes manifests in Git. Applications still expect to read credentials as files or native Kubernetes Secrets.",
    question: "Which approach fits?",
    options: [
      { id: 'A', text: "Bake the Secrets into the container image at build time as environment defaults" },
      { id: 'B', text: "Copy the vault credentials into ConfigMaps and restrict reads with a NetworkPolicy" },
      { id: 'C', text: "Base64-encode each credential into a Secret manifest committed to the Git repository" },
      { id: 'D', text: "Use the External Secrets Operator or the Secrets Store CSI Driver to sync from the vault" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The External Secrets Operator syncs values from external stores such as Vault or a cloud secrets manager into native Secrets, and the Secrets Store CSI Driver mounts them directly into Pods as files, so nobody copies credentials into Git. Base64 in a committed manifest is plaintext in the repository. ConfigMaps are not intended for confidential data, and NetworkPolicy does not control who can read API objects. Baking credentials into images exposes them to anyone who can pull the image and makes rotation require a rebuild.",
    referenceUrl: "https://secrets-store-csi-driver.sigs.k8s.io/",
    tags: ["Secrets", "External Secrets", "CSI"]
  },
  {
    id: "cncf-kcna-295",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Pulling from a private registry",
    scenario: "Pods that use an image from the company's private registry stay in ImagePullBackOff, and the events show an authorization error from the registry. The image name and tag are correct, and the nodes can reach the registry over the network.",
    question: "What should be added so the kubelet can pull the image?",
    options: [
      { id: 'A', text: "A docker-registry Secret referenced in imagePullSecrets" },
      { id: 'B', text: "A NetworkPolicy that allows egress to the registry host" },
      { id: 'C', text: "A ConfigMap with registry credentials mounted in the Pod" },
      { id: 'D', text: "A ServiceAccount token mounted into the app container" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The kubelet pulls images before any container starts, using credentials from a kubernetes.io/dockerconfigjson Secret listed in the Pod's imagePullSecrets (directly or through its ServiceAccount). A token mounted into the container is only visible to the running application, which never starts. The network path already works, and NetworkPolicy does not govern the node's pulls anyway. A ConfigMap mounted in the Pod is likewise only seen by containers, not by the kubelet's image pull.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/",
    tags: ["Images", "imagePullSecrets", "Registry"]
  },
  {
    id: "cncf-kcna-296",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Why a hostPath mount is risky",
    scenario: "A developer's Pod mounts the node's / directory through a hostPath volume so a debug tool can read logs. The security team says this Pod should never run in an application namespace, even though it does not request privileged mode.",
    question: "What is the main risk?",
    options: [
      { id: 'A', text: "The container can read and possibly modify node files, such as kubelet credentials, and so escape its isolation." },
      { id: 'B', text: "The container's writes to the node directory are lost when the Pod restarts, corrupting debug data." },
      { id: 'C', text: "The volume is shared with every other Pod in the namespace, which lets them read each other's logs." },
      { id: 'D', text: "The volume forces the Pod onto the control plane nodes, which crowds out system components there." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "hostPath exposes the node's filesystem to the container; mounting / gives access to kubelet credentials, other Pods' volumes and system binaries, so a compromised container can take over the node. That is why the Baseline Pod Security Standard forbids hostPath volumes. hostPath data actually persists on the node across restarts, so data loss is not the concern. The volume is not automatically shared with other Pods in the namespace; only Pods that declare it on the same node see it. hostPath has no effect on which nodes the scheduler picks.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#hostpath",
    tags: ["hostPath", "Pod Security Standards", "Isolation"]
  },
  {
    id: "cncf-kcna-297",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Encrypting traffic between microservices",
    scenario: "A compliance audit requires all traffic between a company's forty microservices inside the cluster to be encrypted and mutually authenticated. The developers do not want to add TLS code or certificate handling to each service.",
    question: "What is the most practical way to meet this?",
    options: [
      { id: 'A', text: "Enable encryption at rest on the kube-apiserver for all Service objects" },
      { id: 'B', text: "Apply NetworkPolicy rules that allow only encrypted ports between Pods" },
      { id: 'C', text: "Adopt a service mesh such as Linkerd or Istio that provides automatic mTLS" },
      { id: 'D', text: "Put an Ingress controller in front of each service to terminate TLS for it" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A service mesh issues workload identities and certificates and transparently wraps service-to-service traffic in mutual TLS through sidecar or node proxies, so application code does not change. An Ingress controller handles traffic entering the cluster, not east-west calls between services. Encryption at rest protects data stored in etcd, not network traffic. NetworkPolicy filters by address and port but cannot encrypt anything or verify identities.",
    referenceUrl: "https://linkerd.io/2/features/automatic-mtls/",
    tags: ["Service mesh", "mTLS", "Zero trust"]
  },
  {
    id: "cncf-kcna-298",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Automating TLS certificates for Ingress",
    scenario: "A team exposes several services through Ingress and currently renews their TLS certificates by hand every few months, which has already caused one outage. They want certificates issued from Let's Encrypt and renewed automatically as Kubernetes resources.",
    question: "Which CNCF project provides this?",
    options: [
      { id: 'A', text: "Notary Project" },
      { id: 'B', text: "SPIRE identity" },
      { id: 'C', text: "cert-manager" },
      { id: 'D', text: "CoreDNS plugin" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "cert-manager adds Issuer and Certificate resources, obtains certificates from ACME providers such as Let's Encrypt as well as internal CAs, stores them in Secrets that Ingress objects reference, and renews them before expiry. CoreDNS serves cluster DNS and does not issue certificates. SPIRE issues workload identities (SPIFFE IDs) for service-to-service authentication rather than public Ingress certificates. Notary signs and verifies artifacts such as images.",
    referenceUrl: "https://cert-manager.io/docs/",
    tags: ["cert-manager", "TLS", "Ingress"]
  },
  {
    id: "cncf-kcna-299",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Preventing noisy-neighbour exhaustion",
    scenario: "In a shared cluster, a bug in one team's CronJob created thousands of Pods overnight and starved other teams' workloads of CPU and memory. The platform team wants to cap the total resources and object counts each team's namespace can consume.",
    question: "Which object should they create in each namespace?",
    options: [
      { id: 'A', text: "ResourceQuota" },
      { id: 'B', text: "LimitRange defaults" },
      { id: 'C', text: "PodDisruptionBudget" },
      { id: 'D', text: "PriorityClass tiers" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A ResourceQuota limits the aggregate CPU and memory requests and limits, and the number of objects such as Pods, that a namespace may consume, so one team's runaway job cannot starve the others. A LimitRange sets per-container defaults and bounds but places no cap on the namespace total, so thousands of small Pods would still fit. A PriorityClass influences scheduling and preemption order rather than capping use. A PodDisruptionBudget limits voluntary evictions and does nothing about over-creation.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
    tags: ["ResourceQuota", "Multi-tenancy"]
  },
  {
    id: "cncf-kcna-300",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Stronger isolation for untrusted code",
    scenario: "A SaaS provider runs customer-supplied code in Pods on shared nodes. Its security team worries that a kernel exploit in one container could reach the host, because all containers share the node's kernel. They want stronger isolation per Pod without dedicating a node to each customer.",
    question: "What should the provider use?",
    options: [
      { id: 'A', text: "A NetworkPolicy that denies all egress traffic from the customer namespaces" },
      { id: 'B', text: "A PriorityClass that marks customer Pods as lower priority than system Pods" },
      { id: 'C', text: "A ResourceQuota that limits customer containers to one CPU core per Pod" },
      { id: 'D', text: "A RuntimeClass selecting a sandboxed runtime such as gVisor or Kata Containers" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A RuntimeClass lets Pods choose a different container runtime handler; sandboxed runtimes such as gVisor (a user-space kernel) or Kata Containers (lightweight VMs) stop containers from sharing the host kernel directly, which mitigates kernel exploits. PriorityClass affects scheduling and preemption only. Denying egress limits data exfiltration but does nothing against a local kernel exploit. ResourceQuota bounds consumption and provides no isolation from the kernel.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/runtime-class/",
    tags: ["RuntimeClass", "Sandboxing", "gVisor"]
  }
];

export default CNCF_KCNA_QUESTIONS_12;
