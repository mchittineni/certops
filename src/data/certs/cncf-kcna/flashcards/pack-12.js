export const CNCF_KCNA_FLASHCARDS_12 = [
  {
    id: 'cncf-kcna-fc-276',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'The three Pod Security Standards, from loosest to strictest',
    hint: 'One is for system agents, one blocks known escalations, one is best practice.',
    back: '<strong>Privileged</strong>: no restrictions; for trusted system and infrastructure workloads. <strong>Baseline</strong>: blocks known privilege escalations (privileged containers, host namespaces, hostPath, extra capabilities) while running most ordinary apps unchanged. <strong>Restricted</strong>: heavy hardening, adding non-root, dropping ALL capabilities, seccomp RuntimeDefault and no privilege escalation.',
    tags: ['Pod Security Standards']
  },
  {
    id: 'cncf-kcna-fc-277',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Pod Security Admission modes: enforce vs audit vs warn',
    hint: 'Reject, record, or tell the user.',
    back: 'Set per namespace with labels <code>pod-security.kubernetes.io/MODE: LEVEL</code>. <strong>enforce</strong>: violating Pods are rejected. <strong>audit</strong>: allowed, but an annotation is added to the audit log event. <strong>warn</strong>: allowed, but the client (kubectl) gets a warning. Modes can use different levels at once, for example enforce baseline while warning on restricted.',
    tags: ['Pod Security Admission']
  },
  {
    id: 'cncf-kcna-fc-278',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Pod-level vs container-level securityContext: which wins?',
    hint: 'The more specific scope.',
    back: 'Fields such as <code>runAsUser</code>, <code>runAsNonRoot</code> and <code>seccompProfile</code> can be set on the Pod (applies to all containers) and on each container; the <strong>container setting overrides</strong> the Pod one. Some fields exist only at one level: <code>fsGroup</code> is Pod-only, while <code>capabilities</code>, <code>privileged</code> and <code>readOnlyRootFilesystem</code> are container-only.',
    tags: ['securityContext']
  },
  {
    id: 'cncf-kcna-fc-279',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What does privileged: true give a container?',
    hint: 'Close to being the host itself.',
    back: 'Essentially the same access as root on the node: <strong>all Linux capabilities</strong>, access to <strong>host devices</strong>, and no seccomp or AppArmor confinement. Needed by some CNI, CSI and hardware agents; forbidden by the Baseline and Restricted Pod Security Standards for everything else.',
    tags: ['securityContext', 'Privileged']
  },
  {
    id: 'cncf-kcna-fc-280',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'runAsNonRoot vs runAsUser: what does each actually do?',
    hint: 'One is a check, the other sets a value.',
    back: '<strong>runAsUser: 1000</strong> sets the UID the process runs as, overriding the image\'s USER. <strong>runAsNonRoot: true</strong> sets nothing; it makes the kubelet <strong>refuse to start</strong> the container if the effective UID would be 0. With a non-numeric USER in the image the kubelet cannot verify it, so pair it with a numeric runAsUser.',
    tags: ['securityContext', 'runAsNonRoot']
  },
  {
    id: 'cncf-kcna-fc-281',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'seccomp vs AppArmor vs SELinux in a Pod spec',
    hint: 'System calls, program profiles, labels.',
    back: '<strong>seccomp</strong> filters which <strong>system calls</strong> a process may make (<code>seccompProfile: RuntimeDefault</code> is the easy win). <strong>AppArmor</strong> confines programs by path-based profiles for file, network and capability access (<code>appArmorProfile</code>, on AppArmor hosts such as Ubuntu). <strong>SELinux</strong> applies label-based mandatory access control (<code>seLinuxOptions</code>, on hosts such as RHEL). They stack; none replaces the others.',
    tags: ['seccomp', 'AppArmor', 'SELinux']
  },
  {
    id: 'cncf-kcna-fc-282',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Is base64 in a Secret a security control?',
    hint: 'Encoding, not encryption.',
    back: 'No. base64 exists so binary data fits in YAML and JSON; anyone can decode it. What actually protects a Secret is <strong>RBAC</strong> on who can get or list it, <strong>encryption at rest</strong> in etcd, TLS on the wire, and keeping Secret manifests out of Git.',
    tags: ['Secrets', 'base64']
  },
  {
    id: 'cncf-kcna-fc-283',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'EncryptionConfiguration providers: identity, aescbc/aesgcm/secretbox, kms',
    hint: 'The first listed provider encrypts; all listed can decrypt.',
    back: '<strong>identity</strong>: no encryption (the default). <strong>aescbc, aesgcm, secretbox</strong>: local keys written in the config file on the control plane, so whoever reads that file can decrypt. <strong>kms</strong> (v2): envelope encryption with a key held in an external KMS; the recommended option. The <strong>first</strong> provider in the list is used for new writes; others only decrypt, which is how key rotation works.',
    tags: ['Encryption at rest', 'KMS']
  },
  {
    id: 'cncf-kcna-fc-284',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Why mark a Secret or ConfigMap immutable: true?',
    hint: 'Safety plus less work for the API server.',
    back: 'It prevents accidental or malicious edits that could break running apps, and it lets kubelets <strong>stop watching</strong> the object, reducing API server load in large clusters. The flag cannot be undone; to change the data you create a new object (for example with a versioned name) and roll Pods to it.',
    tags: ['Secrets', 'ConfigMap', 'Immutable']
  },
  {
    id: 'cncf-kcna-fc-285',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Secret as environment variable vs mounted file: what changes after rotation?',
    hint: 'One is read once at start.',
    back: '<strong>Environment variables</strong> are fixed when the container starts; a rotated value needs a Pod restart, and env vars leak easily into logs and crash dumps. <strong>Volume-mounted</strong> Secrets are refreshed by the kubelet after a delay (not when mounted with <code>subPath</code>), so an app that re-reads the file picks up the new value.',
    tags: ['Secrets', 'Rotation']
  },
  {
    id: 'cncf-kcna-fc-286',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Mutating vs validating admission: order and purpose',
    hint: 'Change first, then check the final result.',
    back: '<strong>Mutating</strong> admission runs first and may modify the object (inject sidecars, add defaults or labels). <strong>Validating</strong> admission runs after all mutation and may only accept or reject, so it sees the final object. Both run after authentication and authorization and before the object is saved to etcd.',
    tags: ['Admission']
  },
  {
    id: 'cncf-kcna-fc-287',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'ValidatingAdmissionPolicy vs a validating admission webhook',
    hint: 'In-process CEL or an external HTTPS call.',
    back: '<strong>ValidatingAdmissionPolicy</strong> (GA in 1.30) runs <strong>CEL expressions inside the API server</strong>: no extra service to run, no network hop, and nothing to fail if a webhook Pod is down. A <strong>validating webhook</strong> calls your HTTPS service, allowing arbitrary logic and external lookups at the cost of latency and an extra availability dependency.',
    tags: ['ValidatingAdmissionPolicy', 'Webhooks']
  },
  {
    id: 'cncf-kcna-fc-288',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'OPA Gatekeeper vs Kyverno',
    hint: 'Policy language is the main difference.',
    back: 'Both are CNCF admission policy engines for Kubernetes. <strong>Gatekeeper</strong> uses Open Policy Agent, with ConstraintTemplates written in <strong>Rego</strong>, and OPA itself works well beyond Kubernetes. <strong>Kyverno</strong> policies are plain <strong>Kubernetes YAML</strong> (plus CEL) and can validate, mutate, generate and clean up resources and verify image signatures.',
    tags: ['OPA Gatekeeper', 'Kyverno']
  },
  {
    id: 'cncf-kcna-fc-289',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Image tag vs image digest: which is immutable?',
    hint: 'One is a label, the other a hash.',
    back: 'A <strong>tag</strong> (<code>app:1.4</code>, <code>latest</code>) is a movable pointer; someone can push a different image under it. A <strong>digest</strong> (<code>app@sha256:...</code>) is the hash of the image manifest and always refers to the same content. Pin by digest for reproducible, tamper-evident deployments.',
    tags: ['Images', 'Digest']
  },
  {
    id: 'cncf-kcna-fc-290',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'imagePullPolicy: Always vs IfNotPresent vs Never, and the defaults',
    hint: 'The tag you use changes the default.',
    back: '<strong>Always</strong>: check the registry on every container start (uses the cache if the digest matches). <strong>IfNotPresent</strong>: pull only if the image is not on the node. <strong>Never</strong>: only use a local image. If omitted, the default is <strong>Always</strong> for <code>:latest</code> or no tag, and <strong>IfNotPresent</strong> otherwise.',
    tags: ['Images', 'imagePullPolicy']
  },
  {
    id: 'cncf-kcna-fc-291',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Scanning, signing and SBOMs: what does each prove about an image?',
    hint: 'Known flaws, origin, contents.',
    back: '<strong>Scanning</strong> (Trivy, Grype) finds <strong>known vulnerabilities</strong> in the packages present. <strong>Signing</strong> (Sigstore cosign, Notary) proves <strong>who built it</strong> and that it has not changed since. An <strong>SBOM</strong> (SPDX, CycloneDX) is an <strong>inventory</strong> of what the image contains, so you can answer "are we affected?" when a new CVE appears.',
    tags: ['Supply chain', 'SBOM', 'cosign']
  },
  {
    id: 'cncf-kcna-fc-292',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Admission-time policy vs runtime security: where do Kyverno and Falco sit?',
    hint: 'Before it starts vs while it runs.',
    back: '<strong>Admission-time</strong> tools (Kyverno, Gatekeeper, Pod Security Admission) decide whether an object may be <strong>created</strong>. <strong>Runtime</strong> tools such as <strong>Falco</strong> watch <strong>running</strong> containers through kernel system calls and alert on behaviour like a shell spawning or unexpected file writes. You want both layers.',
    tags: ['Falco', 'Runtime security']
  },
  {
    id: 'cncf-kcna-fc-293',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What does a RuntimeClass let a Pod choose, and why would you?',
    hint: 'Same kubelet, different runtime handler.',
    back: 'A <strong>RuntimeClass</strong> maps a name to a CRI runtime <strong>handler</strong> configured on nodes; a Pod sets <code>runtimeClassName</code> to use it. Typical use: run untrusted workloads in a <strong>sandboxed runtime</strong> such as <strong>gVisor</strong> (user-space kernel) or <strong>Kata Containers</strong> (lightweight VM) so they do not share the host kernel directly. It can also carry scheduling constraints and Pod overhead.',
    tags: ['RuntimeClass', 'Sandboxing']
  },
  {
    id: 'cncf-kcna-fc-294',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What does allowPrivilegeEscalation: false stop a container process from doing?',
    hint: 'Think setuid binaries and the no_new_privs flag.',
    back: 'It sets the Linux <strong>no_new_privs</strong> flag on the container process, so the process and its children <strong>cannot gain more privileges than they started with</strong>, for example through setuid or setgid binaries such as <code>sudo</code>, or file capabilities. It is always effectively true when the container is <strong>privileged</strong> or has <code>CAP_SYS_ADMIN</code>. The <strong>Restricted</strong> Pod Security Standard requires it to be set to <code>false</code>.',
    tags: ['securityContext', 'Pod Security']
  },
  {
    id: 'cncf-kcna-fc-295',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'How does a Pod authenticate to a private container registry?',
    hint: 'The kubelet pulls, not the app.',
    back: 'Create a <code>kubernetes.io/dockerconfigjson</code> Secret (<code>kubectl create secret docker-registry</code>) and list it in the Pod\'s <strong>imagePullSecrets</strong>, or attach it to the ServiceAccount so every Pod using that account gets it. The <strong>kubelet</strong> uses it when pulling, before any container starts.',
    tags: ['Images', 'imagePullSecrets']
  },
  {
    id: 'cncf-kcna-fc-296',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What do SPIFFE and SPIRE provide?',
    hint: 'Identity for workloads, not people.',
    back: '<strong>SPIFFE</strong> is a standard for workload identity: an ID like <code>spiffe://example.org/ns/prod/sa/api</code> carried in a short-lived X.509 or JWT document (an SVID). <strong>SPIRE</strong> is the CNCF implementation that attests workloads and issues and rotates those SVIDs, giving services cryptographic identities for mTLS without shared secrets.',
    tags: ['SPIFFE', 'SPIRE', 'Workload identity']
  },
  {
    id: 'cncf-kcna-fc-297',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'TLS vs mutual TLS between services',
    hint: 'Who proves their identity?',
    back: 'With ordinary <strong>TLS</strong> only the server presents a certificate; the client verifies it and traffic is encrypted. With <strong>mTLS</strong> the <strong>client presents a certificate too</strong>, so both sides authenticate each other. Service meshes such as Linkerd and Istio automate mTLS between Pods, which underpins zero-trust networking.',
    tags: ['mTLS', 'Service mesh']
  },
  {
    id: 'cncf-kcna-fc-298',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What does cert-manager add to a cluster?',
    hint: 'Issuers and certificates as resources.',
    back: 'CRDs such as <strong>Issuer/ClusterIssuer</strong> (an ACME provider like Let\'s Encrypt, a private CA, or Vault) and <strong>Certificate</strong> (the desired cert). Its controller obtains the certificate, stores it in a <strong>Secret</strong>, and <strong>renews it before expiry</strong>. It can also create certificates automatically from annotated Ingress or Gateway objects.',
    tags: ['cert-manager', 'TLS']
  },
  {
    id: 'cncf-kcna-fc-299',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Which Pod spec settings break container isolation from the host?',
    hint: 'Anything with "host" in its name, plus one more.',
    back: '<strong>hostNetwork</strong> (share the node\'s network stack), <strong>hostPID</strong> and <strong>hostIPC</strong> (see and signal host processes, share IPC), <strong>hostPath</strong> volumes (node filesystem access), <strong>hostPort</strong>, and <strong>privileged: true</strong>. The Baseline Pod Security Standard blocks all of these for ordinary workloads.',
    tags: ['Isolation', 'Pod Security Standards']
  },
  {
    id: 'cncf-kcna-fc-300',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What is the principle of least privilege in Kubernetes terms?',
    hint: 'Apply it to people, workloads and containers.',
    back: 'Grant only what is needed: narrow RBAC Roles instead of cluster-admin, a <strong>dedicated ServiceAccount</strong> per workload with automounting off when the API is not used, <strong>non-root</strong> containers with capabilities dropped and privilege escalation disabled, and NetworkPolicies that allow only required traffic.',
    tags: ['Least privilege', 'Security']
  }
];

export default CNCF_KCNA_FLASHCARDS_12;
