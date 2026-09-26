export const CNCF_KCSA_FLASHCARDS_16 = [
  {
    id: 'cncf-kcsa-fc-376',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'SPDX vs CycloneDX: what are they, and does the choice matter for security?',
    hint: 'Two standards, one job.',
    back: 'Both are machine-readable <strong>SBOM formats</strong> that list the components, versions and relationships in a piece of software. <strong>SPDX</strong> is a Linux Foundation standard (ISO/IEC 5962) with roots in licence compliance; <strong>CycloneDX</strong> is an OWASP standard designed around security use cases, including VEX data. Scanners such as Trivy and Syft emit either. What matters is that an SBOM exists for every artifact and can be queried when a new CVE lands.',
    tags: ['SBOM', 'SPDX', 'CycloneDX']
  },
  {
    id: 'cncf-kcsa-fc-377',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'In Sigstore keyless signing, what do Fulcio and Rekor each do?',
    hint: 'One issues, one remembers.',
    back: '<strong>Fulcio</strong> is a certificate authority: it takes an OIDC token (from a CI workflow or a person) and issues a <strong>short-lived signing certificate</strong> whose subject is that identity. <strong>Rekor</strong> is a <strong>transparency log</strong>: the signature and certificate are appended to a tamper-evident, publicly auditable ledger, which proves the signature was made while the certificate was valid. Cosign ties them together, so there is no long-lived private key to protect.',
    tags: ['Sigstore', 'Fulcio', 'Rekor']
  },
  {
    id: 'cncf-kcsa-fc-378',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Why put a pull-through cache or mirror registry between your nodes and public registries?',
    hint: 'One governed front door for upstream images.',
    back: 'A pull-through cache (Harbor proxy project, ECR pull-through cache, Artifact Registry remote repository and similar) fetches an upstream image <strong>once</strong>, stores it in a registry you control and serves nodes from there. That gives <strong>one place to scan, verify and allow-list</strong> what enters the cluster, keeps deployments working through upstream <strong>outages and rate limits</strong>, and lets egress rules block nodes from public registries entirely. Pair it with admission policy that only admits images from the mirror\'s hostname, pinned by digest.',
    tags: ['Registry', 'Pull-through cache', 'Supply chain']
  },
  {
    id: 'cncf-kcsa-fc-379',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'in-toto: what is the difference between the layout and link metadata?',
    hint: 'The plan versus the evidence.',
    back: 'The <strong>layout</strong> is signed by the project owner and defines the supply chain: the steps, which <strong>functionaries</strong> (keys) may perform each step, the expected materials and products, and final inspections. <strong>Link metadata</strong> is produced and signed by a functionary when it performs a step, recording the hashes of the materials it consumed and the products it produced. Verification checks that the links satisfy the layout, proving each step ran as planned by the authorised party and nothing was swapped between steps.',
    tags: ['in-toto', 'Attestation', 'Supply chain']
  },
  {
    id: 'cncf-kcsa-fc-380',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Why reference container images by digest rather than by tag in production?',
    hint: 'Which one can be moved?',
    back: 'A <strong>tag</strong> (app:1.4, latest) is a mutable pointer that anyone with push rights can move to different content. A <strong>digest</strong> (app@sha256:...) is the hash of the image manifest, so it always resolves to exactly the same bytes. Digests make deployments reproducible, guarantee production runs what was tested, and are what image signatures actually bind to.',
    tags: ['Image digests', 'Image tags']
  },
  {
    id: 'cncf-kcsa-fc-381',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'If a container omits imagePullPolicy, what default does Kubernetes apply?',
    hint: 'It depends on the tag.',
    back: 'Set at creation time: if the tag is <strong>:latest</strong> or there is <strong>no tag</strong> (and no digest), the default is <strong>Always</strong>. For any other tag, or a digest, the default is <strong>IfNotPresent</strong>. The value is not re-evaluated if the tag later changes. <strong>Never</strong> is only used when set explicitly, and the AlwaysPullImages admission plugin overrides whatever the pod asks for.',
    tags: ['imagePullPolicy', 'Images']
  },
  {
    id: 'cncf-kcsa-fc-382',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'What does the AlwaysPullImages admission plugin protect against, and what does it cost?',
    hint: 'Think shared nodes and registry outages.',
    back: 'It mutates every new pod to <strong>imagePullPolicy: Always</strong>, so the kubelet must authenticate to the registry each time and a tenant cannot run another tenant\'s <strong>cached private image</strong> without credentials. Costs: every pod start depends on <strong>registry availability</strong>, starts are slower, and registry traffic rises. Layer caching still applies, so only changed layers are downloaded.',
    tags: ['AlwaysPullImages', 'Multi-tenancy']
  },
  {
    id: 'cncf-kcsa-fc-383',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Name three ways the kubelet can obtain private registry credentials.',
    hint: 'One per pod, one per node file, one per plugin.',
    back: '<strong>imagePullSecrets</strong>: dockerconfigjson Secrets referenced by the pod, or added from its ServiceAccount. <strong>Node-level docker config</strong>: a config.json in the kubelet\'s search path (for example /var/lib/kubelet/config.json) that applies to every pod on the node. <strong>Kubelet credential provider plugins</strong>: executables the kubelet calls to fetch short-lived credentials for matching images, configured with --image-credential-provider-config and --image-credential-provider-bin-dir. Plugins avoid both namespace Secrets and static node credentials.',
    tags: ['Private registry', 'Kubelet', 'Credentials']
  },
  {
    id: 'cncf-kcsa-fc-384',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'List the four Kubernetes audit levels from least to most detail.',
    hint: 'Nothing, who, what was asked, what was answered.',
    back: '<strong>None</strong>: do not log. <strong>Metadata</strong>: user, groups, source IP, verb, resource, timestamps and status, but no bodies. <strong>Request</strong>: metadata plus the request body. <strong>RequestResponse</strong>: metadata plus request and response bodies. Use Metadata for Secrets and tokens so their values never reach the log.',
    tags: ['Audit logging', 'Audit levels']
  },
  {
    id: 'cncf-kcsa-fc-385',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'What are the four audit stages a request can generate events in?',
    hint: 'Received, streaming, done, crashed.',
    back: '<strong>RequestReceived</strong>: as soon as the audit handler gets the request. <strong>ResponseStarted</strong>: headers sent but body not yet complete, only for long-running requests such as watch. <strong>ResponseComplete</strong>: the response body is finished. <strong>Panic</strong>: a panic occurred. Many policies use <strong>omitStages: [RequestReceived]</strong> because ResponseComplete already captures the request and its outcome.',
    tags: ['Audit logging', 'Audit stages']
  },
  {
    id: 'cncf-kcsa-fc-386',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Audit log backend vs webhook backend: how is each enabled and when do you choose it?',
    hint: 'File on the node or HTTP to a collector.',
    back: '<strong>Log backend</strong>: --audit-log-path (a file, or - for stdout) with rotation flags --audit-log-maxage, --audit-log-maxbackup and --audit-log-maxsize; simple, but the records sit on the control-plane node until shipped. <strong>Webhook backend</strong>: --audit-webhook-config-file (kubeconfig format) sends events to an external API, in batch mode by default; better when records must leave the node quickly. Both need --audit-policy-file.',
    tags: ['Audit logging', 'Audit backends']
  },
  {
    id: 'cncf-kcsa-fc-387',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Two rules in an audit policy both match a request. Which level applies, and how does omitStages combine?',
    hint: 'Order is everything; stages are additive.',
    back: 'The <strong>first matching rule</strong> in the list sets the level; later rules are ignored, so specific rules must sit above catch-alls. <strong>omitStages</strong> can be set at the policy level and on individual rules; the stages omitted for a request are the <strong>union</strong> of both lists. A rule cannot re-enable a stage the policy omits.',
    tags: ['Audit policy', 'omitStages']
  },
  {
    id: 'cncf-kcsa-fc-388',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'What is Falco, and where does it get its data?',
    hint: 'The kernel sees everything a container does.',
    back: '<strong>Falco</strong> is a CNCF graduated <strong>runtime threat detection</strong> engine. It observes <strong>system calls</strong> through an eBPF probe (or kernel module) and can also consume Kubernetes audit events via plugins, matching them against YAML rules such as a shell spawned in a container, a write below /etc, or an unexpected outbound connection. It detects and alerts; it does not block by itself.',
    tags: ['Falco', 'Runtime security']
  },
  {
    id: 'cncf-kcsa-fc-389',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Scratch vs distroless vs Alpine base images: when is each the right choice?',
    hint: 'How much userland does the app actually need?',
    back: '<strong>scratch</strong>: empty; only for fully static binaries, and you must add CA certificates and time zone data yourself. <strong>Distroless</strong>: the language runtime and minimal libraries (glibc, CA certs, a nonroot user) but no shell or package manager, which suits most compiled and interpreted apps. <strong>Alpine</strong>: tiny but still has a shell and apk, handy when debugging tools are required, at the cost of more attack surface and musl compatibility quirks.',
    tags: ['Base images', 'Distroless']
  },
  {
    id: 'cncf-kcsa-fc-390',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Image scanning in CI, in the registry, at admission, and in the running cluster: what does each catch that the others miss?',
    hint: 'When was the vulnerability database last consulted?',
    back: '<strong>CI</strong>: stops known-vulnerable builds before they ship. <strong>Registry</strong> (scan on push and on a schedule): covers images from any source and can block pulls. <strong>Admission</strong>: gates what is deployed right now, including third-party images that never passed your CI. <strong>Runtime/continuous</strong> (for example Trivy Operator): rescans images already running when <strong>new CVEs are published</strong>. Only the last one catches vulnerabilities disclosed after deployment.',
    tags: ['Vulnerability scanning', 'Defence in depth']
  },
  {
    id: 'cncf-kcsa-fc-391',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Image signature vs attestation: what does an attestation add?',
    hint: 'A signed statement about something.',
    back: 'A <strong>signature</strong> says only "this identity vouches for this digest". An <strong>attestation</strong> is a signed <strong>in-toto statement</strong>: a subject (the image digest), a <strong>predicateType</strong> (SLSA provenance, SPDX or CycloneDX SBOM, vulnerability scan) and the predicate data, wrapped in a DSSE envelope. Created with cosign attest, attestations let admission policies check claims such as "built by our pipeline" or "scanned within 7 days", not just who signed.',
    tags: ['Attestations', 'in-toto', 'cosign']
  },
  {
    id: 'cncf-kcsa-fc-392',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Which security features does the Harbor registry provide out of the box?',
    hint: 'CNCF graduated registry.',
    back: '<strong>Harbor</strong> offers project-level <strong>RBAC</strong> and OIDC/LDAP login, <strong>robot accounts</strong> for automation, built-in <strong>vulnerability scanning</strong> (Trivy) with a policy to prevent vulnerable images from being pulled, <strong>content trust</strong> via cosign or Notation signatures, <strong>tag immutability</strong> and retention rules, audit logs, and replication to other registries.',
    tags: ['Harbor', 'Registry security']
  },
  {
    id: 'cncf-kcsa-fc-393',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Notation vs cosign: how do the two OCI signing tools differ?',
    hint: 'Notary Project vs Sigstore.',
    back: '<strong>Notation</strong> is the CNCF <strong>Notary Project</strong> CLI; it signs with <strong>X.509 certificates</strong> from your own PKI or a key management service, uses trust policies and trust stores, and stores signatures as OCI referrers. <strong>cosign</strong> (Sigstore) supports key-based signing and <strong>keyless</strong> signing with Fulcio certificates and the Rekor transparency log. Both are verified at admission by tools such as Ratify, Kyverno, or the Sigstore policy-controller.',
    tags: ['Notation', 'cosign', 'Image signing']
  },
  {
    id: 'cncf-kcsa-fc-394',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Which tools enforce image signature verification when pods are admitted?',
    hint: 'Four common admission-time options.',
    back: '<strong>Sigstore policy-controller</strong> (ClusterImagePolicy resources), <strong>Kyverno</strong> verifyImages rules (signatures and attestations, can also rewrite tags to digests), <strong>Ratify</strong> as an external data provider for OPA Gatekeeper (Notation and cosign), and <strong>Connaisseur</strong>. All run as admission webhooks, so a signature check only protects clusters where the webhook fails closed.',
    tags: ['Admission control', 'Image signing']
  },
  {
    id: 'cncf-kcsa-fc-395',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Where does cosign store a signature for an image in a registry?',
    hint: 'Look for a tag derived from the digest, or the referrers API.',
    back: 'By default cosign pushes the signature as a separate OCI artifact in the <strong>same repository</strong>, under a tag derived from the image digest: <strong>sha256-&lt;hex&gt;.sig</strong> (attestations use .att, SBOMs .sbom). Newer releases can instead attach it through the <strong>OCI 1.1 referrers API</strong>, which is how Notation stores signatures. This is why copying only the image, and not its related artifacts, loses the signature.',
    tags: ['cosign', 'OCI', 'Registry']
  },
  {
    id: 'cncf-kcsa-fc-396',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Audit logs, Kubernetes events, container logs: which answers which question?',
    hint: 'Who asked, what happened to the object, what the app said.',
    back: '<strong>Audit logs</strong>: who made which API request, from where, and the result, the source for attribution. <strong>Events</strong>: what controllers and the kubelet did to objects (scheduling, pulling, back-off), kept about an hour by default. <strong>Container logs</strong>: stdout and stderr of the application, stored on the node and lost with the pod unless shipped. Investigations usually need all three.',
    tags: ['Observability', 'Audit logging', 'Events']
  },
  {
    id: 'cncf-kcsa-fc-397',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Why must container logs be shipped off the node for security investigations?',
    hint: 'Rotation and pod deletion.',
    back: 'The kubelet stores container logs on the node and rotates them by <strong>containerLogMaxSize</strong> (default 10Mi) and <strong>containerLogMaxFiles</strong> (default 5). When a pod is deleted or evicted, its logs go with it, and an attacker with node access can alter them. A node-level agent (usually a DaemonSet such as Fluent Bit) should forward logs to central storage with its own retention and access control.',
    tags: ['Container logs', 'Log retention']
  },
  {
    id: 'cncf-kcsa-fc-398',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'How is access to the kube-apiserver /metrics endpoint controlled?',
    hint: 'It is not a resource, but RBAC still applies.',
    back: '/metrics is a <strong>non-resource URL</strong>, so it is authorised through RBAC with nonResourceURLs: ["/metrics"] and verb get in a <strong>ClusterRole</strong> bound to the scraper\'s identity (for example Prometheus\'s ServiceAccount). Metrics can reveal object counts, request patterns and component versions, so grant it only to monitoring identities rather than allowing anonymous access.',
    tags: ['Metrics', 'RBAC', 'Observability']
  },
  {
    id: 'cncf-kcsa-fc-399',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'Why would a team monitor the Rekor transparency log for its own signing identity?',
    hint: 'Detection, not prevention.',
    back: 'Every keyless signature is recorded publicly in <strong>Rekor</strong> with the signer\'s identity. Watching the log for entries under <strong>your</strong> workflow identities or email addresses reveals signatures you did not make, for example after a CI token or OIDC account is compromised. Tools such as rekor-monitor alert on unexpected entries, so misuse is detected even if the forged image has not yet been deployed.',
    tags: ['Rekor', 'Transparency log', 'Sigstore']
  },
  {
    id: 'cncf-kcsa-fc-400',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd5',
    front: 'What makes a third-party base image trustworthy enough to build on?',
    hint: 'Source, size, maintenance, pinning.',
    back: 'Prefer images from a <strong>verified publisher</strong> or official program with a signed, documented provenance; keep them <strong>minimal</strong> (distroless or slim variants); confirm they are <strong>actively patched</strong>; and pin them by <strong>digest</strong> with automated updates (for example Renovate or Dependabot) so upgrades are deliberate. Mirroring them into your own registry adds scanning and availability control.',
    tags: ['Base images', 'Supply chain']
  }
];

export default CNCF_KCSA_FLASHCARDS_16;
