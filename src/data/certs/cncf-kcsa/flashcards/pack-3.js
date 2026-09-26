export const CNCF_KCSA_FLASHCARDS_3 = [
  {
    id: 'cncf-kcsa-fc-51',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Image tag vs image digest: which one guarantees you run the same bits every time?',
    hint: 'One is a label, one is a hash.',
    back: 'A <strong>tag</strong> (<code>app:2.3</code>) is a movable pointer that can be repointed by any later push. A <strong>digest</strong> (<code>app@sha256:...</code>) is the content hash of the manifest, so it always identifies exactly the same image. Pin by digest (optionally with the tag for readability) for reproducible, verifiable deployments.',
    tags: ['Image security', 'Digests']
  },
  {
    id: 'cncf-kcsa-fc-52',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'scratch vs distroless vs Alpine as a base image: what are the trade-offs?',
    hint: 'How much is left for an attacker, and for a debugger?',
    back: '<strong>scratch</strong>: empty; only a static binary and what you copy in. Smallest surface, but no CA bundle, timezone data or user database unless added. <strong>distroless</strong>: language runtime plus essentials (CA certs, passwd), <strong>no shell or package manager</strong>. <strong>Alpine</strong>: small full distro with a shell and apk, musl libc. Less software means fewer CVEs and fewer tools for an intruder; debug with ephemeral containers instead of a shell in the image.',
    tags: ['Image security', 'Minimal images']
  },
  {
    id: 'cncf-kcsa-fc-53',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Why does deleting a secret file in a later Dockerfile step not remove it from the image?',
    hint: 'Layers are stacked, not edited.',
    back: 'Each instruction produces an <strong>immutable layer</strong>; a later deletion only adds a whiteout entry that hides the file in the merged view. The original layer, with the file, is still shipped and can be extracted with <code>docker save</code> or any layer tool. Use <strong>BuildKit secret mounts</strong> (<code>RUN --mount=type=secret</code>) or multi-stage builds so secrets never enter a shipped layer, and rotate anything already leaked.',
    tags: ['Image security', 'Build secrets']
  },
  {
    id: 'cncf-kcsa-fc-54',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'SBOM vs VEX vs provenance: what question does each answer?',
    hint: 'What is in it, does it matter, where did it come from.',
    back: '<strong>SBOM</strong> (SPDX or CycloneDX): <em>what components and versions are inside?</em> <strong>VEX</strong> (OpenVEX, CSAF, CycloneDX): <em>is this product actually affected by a given CVE, and why or why not?</em> <strong>Provenance</strong> (SLSA, in-toto): <em>how, where and from which source was this artifact built?</em> Signed and attached to the image as attestations, they feed scanners and admission policies.',
    tags: ['Supply chain', 'SBOM', 'VEX']
  },
  {
    id: 'cncf-kcsa-fc-55',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Name the three core Sigstore components and what each does.',
    hint: 'Sign, certify, record.',
    back: '<strong>cosign</strong> signs and verifies container images and attestations. <strong>Fulcio</strong> is a certificate authority that issues <strong>short-lived certificates</strong> bound to an OIDC identity, enabling keyless signing. <strong>Rekor</strong> is a <strong>transparency log</strong> that records signing events so they can be audited and verified later.',
    tags: ['Supply chain', 'Sigstore']
  },
  {
    id: 'cncf-kcsa-fc-56',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'What controls should a production container registry provide?',
    hint: 'Transport, identity, integrity, hygiene.',
    back: '<ul><li><strong>TLS</strong> for every push and pull</li><li><strong>Authentication and per-repository authorization</strong>: CI can push to its repos; nodes can only pull</li><li><strong>Tag immutability</strong> for release tags</li><li><strong>Vulnerability scanning</strong> on push and continuously</li><li><strong>Signature and attestation storage</strong></li><li><strong>Retention policies</strong> and audit logs of pushes and deletions</li></ul>',
    tags: ['Registry security']
  },
  {
    id: 'cncf-kcsa-fc-57',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'What is the default imagePullPolicy when you do not set one?',
    hint: 'It depends on the tag.',
    back: '<strong>Always</strong> if the tag is <code>:latest</code> or omitted; <strong>IfNotPresent</strong> for any other tag or a digest. The default is set when the pod is created and does not change if the image reference is later updated. <strong>Never</strong> uses only images already on the node.',
    tags: ['Image security', 'imagePullPolicy']
  },
  {
    id: 'cncf-kcsa-fc-58',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'What do SLSA build levels 1 to 3 require?',
    hint: 'Provenance exists, then is signed by a platform, then cannot be forged.',
    back: '<strong>Build L1</strong>: provenance describing how the artifact was built <strong>exists</strong>. <strong>Build L2</strong>: builds run on a <strong>hosted build platform</strong> that generates and <strong>signs</strong> the provenance. <strong>Build L3</strong>: the platform is <strong>hardened</strong> so builds are isolated from each other and provenance <strong>cannot be forged</strong> by the build\'s own steps or its tenants. (SLSA v1.0 levels; L0 means no guarantees.)',
    tags: ['Supply chain', 'SLSA']
  },
  {
    id: 'cncf-kcsa-fc-59',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'List five Dockerfile practices that improve image security.',
    hint: 'Base, user, context, downloads, secrets.',
    back: '<ul><li><strong>Pin the base image</strong> by digest and choose a minimal, maintained one</li><li>Set a <strong>non-root <code>USER</code></strong></li><li>Use <strong><code>.dockerignore</code></strong> and copy specific paths, not the whole context</li><li><strong>Verify checksums</strong> of anything downloaded; avoid unverified <code>ADD &lt;url&gt;</code></li><li>Keep secrets out of <code>ARG</code>/<code>ENV</code>; use <strong>secret mounts</strong> and multi-stage builds</li></ul>',
    tags: ['Image security', 'Dockerfile']
  },
  {
    id: 'cncf-kcsa-fc-60',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Why are Dockerfile ARG and ENV unsafe places for credentials?',
    hint: 'Try docker history and docker inspect.',
    back: '<strong>ENV</strong> values are stored in the image config and visible to anyone with <code>docker inspect</code>, and they are inherited by every container. <strong>ARG</strong> values used by a <code>RUN</code> step are recorded in the image history and build cache metadata. Pass build-time credentials with <strong>secret mounts</strong> and runtime credentials through Kubernetes Secrets or a secrets manager.',
    tags: ['Image security', 'Secrets']
  },
  {
    id: 'cncf-kcsa-fc-61',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'SAST vs DAST vs SCA: what does each test?',
    hint: 'Your code at rest, your app in motion, other people\'s code.',
    back: '<strong>SAST</strong> analyses your <strong>source code</strong> without running it (injection patterns, weak crypto, hard-coded secrets). <strong>DAST</strong> probes the <strong>running application</strong> from outside with attack payloads. <strong>SCA</strong> inventories <strong>third-party dependencies</strong> from manifests and lockfiles and matches them to known vulnerabilities and licences. They are complementary.',
    tags: ['Code security', 'Testing']
  },
  {
    id: 'cncf-kcsa-fc-62',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Where should secret scanning run, and what must happen when it finds a real credential?',
    hint: 'Before the push, and after.',
    back: 'Run it at three points: <strong>pre-commit hooks</strong> on laptops (gitleaks, detect-secrets), <strong>push protection</strong> on the Git host, and <strong>CI or scheduled scans</strong> of full history. A credential that reached a shared remote must be <strong>revoked and rotated</strong> first; deleting it or rewriting history does not undo the exposure.',
    tags: ['Code security', 'Secret scanning']
  },
  {
    id: 'cncf-kcsa-fc-63',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Dependency confusion vs typosquatting: how do they differ and how are they prevented?',
    hint: 'Same name elsewhere vs a similar name.',
    back: '<strong>Dependency confusion</strong>: an attacker publishes your <strong>internal package name</strong> on a public index with a higher version, and a resolver that queries both picks it. Prevent with a single private index that proxies public packages, scoped or namespaced names, and hash pinning. <strong>Typosquatting</strong>: a <strong>look-alike name</strong> (<code>reqeusts</code>) waits for a typo. Prevent with curated allow-lists, lockfile review and SCA tooling that flags new or suspicious packages.',
    tags: ['Code security', 'Supply chain']
  },
  {
    id: 'cncf-kcsa-fc-64',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Static vs dynamic secrets: why do dynamic secrets reduce risk?',
    hint: 'Leases.',
    back: 'A <strong>static secret</strong> is long-lived and often shared, so a leak stays useful until someone rotates it manually. A <strong>dynamic secret</strong> is generated on demand <strong>per client</strong> with a short <strong>lease</strong> (for example by Vault\'s database engine) and revoked automatically. Leaks expire quickly, every credential is attributable to one workload, and rotation needs no coordinated restarts.',
    tags: ['Code security', 'Secrets management']
  },
  {
    id: 'cncf-kcsa-fc-65',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'What is SSRF, and why is it especially dangerous inside a cloud-hosted cluster?',
    hint: 'The server makes the request for you.',
    back: '<strong>Server-side request forgery</strong> tricks an application into fetching a URL the attacker chooses. From inside a cluster that can reach the <strong>instance metadata endpoint</strong> (cloud credentials), <strong>internal Services</strong> with no authentication, and sometimes the <strong>kubelet or API server</strong>. Defend in code (resolve and deny private ranges, allow-list destinations, re-check redirects) and with egress NetworkPolicy.',
    tags: ['Code security', 'SSRF']
  },
  {
    id: 'cncf-kcsa-fc-66',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'What properties make projected service account tokens safer than legacy token Secrets?',
    hint: 'Audience, expiry, binding.',
    back: 'Projected tokens come from the <strong>TokenRequest API</strong> and are <strong>time-limited</strong> (<code>expirationSeconds</code>, minimum 10 minutes), <strong>audience-bound</strong> (<code>audience</code>), and <strong>bound to the pod</strong>, so they stop validating when the pod is deleted. The kubelet refreshes them when older than 80% of their TTL or 24 hours. Legacy Secret-based tokens never expire, have no audience and survive the pod; they are no longer auto-created since 1.24.',
    tags: ['Workload security', 'Service account tokens']
  },
  {
    id: 'cncf-kcsa-fc-67',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'What permissions does a namespace\'s default service account have, and why create dedicated ones anyway?',
    hint: 'Almost none, but it is shared.',
    back: 'By default it has <strong>no RBAC permissions beyond basic discovery</strong>, but a token is still mounted into every pod that does not opt out. Create a <strong>dedicated service account per workload</strong> so permissions granted to one application do not leak to every pod in the namespace, and set <code>automountServiceAccountToken: false</code> where the API is not needed.',
    tags: ['Workload security', 'Service accounts']
  },
  {
    id: 'cncf-kcsa-fc-68',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'How do lockfiles and hash pinning protect builds?',
    hint: 'Same inputs, verified.',
    back: 'A <strong>lockfile</strong> (package-lock.json, poetry.lock, go.sum) records the exact resolved version of every direct and transitive dependency, so builds are reproducible. <strong>Hashes</strong> in the lockfile (or <code>pip --require-hashes</code>) make the package manager refuse any artifact whose content differs, which defeats tampered mirrors and republished versions. Install with the locked mode (<code>npm ci</code>) in CI.',
    tags: ['Code security', 'Dependencies']
  },
  {
    id: 'cncf-kcsa-fc-69',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'How should CI pipelines treat third-party actions or plugins?',
    hint: 'They run with your secrets.',
    back: 'Third-party steps run with the pipeline\'s credentials, so <strong>pin them by full commit SHA</strong> (tags can be moved), review them before adoption, grant the workflow token <strong>least privilege</strong>, keep deployment secrets in protected environments that require approval, and prefer short-lived OIDC federation to cloud providers over stored long-lived keys.',
    tags: ['Code security', 'CI security']
  },
  {
    id: 'cncf-kcsa-fc-70',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'What can a container image vulnerability scanner miss?',
    hint: 'It reads package metadata.',
    back: 'Scanners mostly match <strong>package-manager metadata</strong> against CVE databases, so they can miss <strong>statically linked or vendored code</strong> without metadata, <strong>custom binaries</strong>, <strong>zero-days</strong>, <strong>malicious but CVE-free packages</strong>, <strong>embedded secrets</strong> and <strong>misconfigurations</strong>. A clean scan is one signal; combine it with SCA, secret scanning, SBOMs, signing and runtime detection.',
    tags: ['Image security', 'Vulnerability scanning']
  },
  {
    id: 'cncf-kcsa-fc-71',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'What security benefits does a multi-stage Docker build provide?',
    hint: 'Build heavy, ship light.',
    back: 'Compilers, package managers, source code and build-time credentials stay in <strong>earlier stages</strong>; only the built artifact is copied into a <strong>minimal final stage</strong>. The shipped image is smaller, has fewer CVEs and gives an intruder fewer tools, and build-only files never appear in its layers.',
    tags: ['Image security', 'Multi-stage builds']
  },
  {
    id: 'cncf-kcsa-fc-72',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Which data should an application never write to its logs?',
    hint: 'Anything that grants access or identifies a person.',
    back: '<strong>Credentials and tokens</strong> (passwords, Authorization headers, session cookies, API keys), <strong>encryption keys</strong>, <strong>full payment card data</strong> and <strong>unnecessary personal data</strong>. Logs are copied to many systems and read by many people, so redact at the source in the logging library rather than relying on access controls downstream.',
    tags: ['Code security', 'Logging']
  },
  {
    id: 'cncf-kcsa-fc-73',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Map these controls to lifecycle phases: SAST, image signing, admission policy, Falco rules, SBOM generation, branch protection.',
    hint: 'Develop, Distribute, Deploy, Runtime.',
    back: '<strong>Develop</strong>: SAST, branch protection. <strong>Distribute</strong>: SBOM generation, image signing (and scanning in the registry). <strong>Deploy</strong>: admission policy that checks signatures, attestations and pod settings. <strong>Runtime</strong>: Falco-style behavioural detection. Controls in early phases are cheaper to fix; runtime controls catch what slipped through.',
    tags: ['Lifecycle phases', 'Controls']
  },
  {
    id: 'cncf-kcsa-fc-74',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'Why rebuild and redeploy images instead of patching running containers?',
    hint: 'Immutable infrastructure.',
    back: 'Changes made inside a running container are <strong>lost on restart</strong>, make the workload <strong>differ from the scanned and signed image</strong>, need a shell and package manager at runtime, and cannot be reviewed or rolled back. Treat images as <strong>immutable</strong>: fix in the Dockerfile or dependencies, rebuild, scan, sign and roll out; a read-only root filesystem enforces the habit.',
    tags: ['Image security', 'Immutable infrastructure']
  },
  {
    id: 'cncf-kcsa-fc-75',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd1',
    front: 'What should you look for when choosing a base image?',
    hint: 'Who publishes it, how big, how often patched.',
    back: 'A <strong>trusted publisher</strong> (official or verified images, or your own golden image), a <strong>minimal</strong> footprint, an <strong>active patch cadence</strong> with published security advisories, <strong>supported</strong> OS and runtime versions, and ideally <strong>signatures and SBOMs</strong> from the publisher. Mirror it into your own registry and pin it by digest.',
    tags: ['Image security', 'Base images']
  }
];

export default CNCF_KCSA_FLASHCARDS_3;
