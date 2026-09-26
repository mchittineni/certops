export const CNCF_KCSA_QUESTIONS_3 = [
  {
    id: "cncf-kcsa-51",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Build tools shipping inside a production image",
    scenario: "An airline's booking service image is built from a single Dockerfile stage based on a full JDK image, and it still contains Maven, git, a compiler toolchain and the source tree when it reaches production. The security team wants the runtime image to contain only what the service needs to run.",
    question: "Which change achieves this most directly?",
    options: [
      { id: 'A', text: "Keep the current image and accept its scanner findings, since the build tools are never started in production." },
      { id: 'B', text: "Use a multi-stage build that compiles in a JDK stage and copies only the JAR into a minimal runtime image." },
      { id: 'C', text: "Keep the current image but add a USER instruction so the service and the build tools run as a non-root user." },
      { id: 'D', text: "Squash the single build stage into one layer so the build tools no longer appear in the runtime history." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A multi-stage build keeps compilers, package managers and source in a throwaway build stage and copies only the built artifact into a small runtime base such as a JRE or distroless image, which removes those tools and their vulnerabilities from what runs in production. Squashing merges layers but keeps every file that exists in the final filesystem, so the tools are still there. Running as non-root is good practice but leaves the unnecessary software in place for an attacker to use. Unused tools still expand the attack surface and give an intruder ready-made utilities.",
    referenceUrl: "https://docs.docker.com/build/building/multi-stage/",
    tags: ["Image security", "Multi-stage builds", "Minimal images"]
  },
  {
    id: "cncf-kcsa-52",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "A deleted token still living in an image layer",
    scenario: "A developer's Dockerfile copies an .npmrc containing a private registry token, runs npm install, then removes the file in the next RUN instruction. A reviewer later extracted the token from the published image, which has been pulled by several partner teams.",
    question: "What should the team do?",
    options: [
      { id: 'A', text: "Make the registry repository private so that only internal accounts can pull the image from now on." },
      { id: 'B', text: "Revoke and rotate the token, then pass it with a BuildKit secret mount so it never lands in any layer." },
      { id: 'C', text: "Squash future builds into one layer and keep using the same token, since new images will no longer expose it." },
      { id: 'D', text: "Add another RUN instruction that overwrites the token file with random bytes before the image is pushed again." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Each Dockerfile instruction creates an immutable layer, so a file deleted in a later layer remains readable in the earlier one; the token is already exposed to everyone who pulled the image and must be revoked, and a BuildKit secret mount (RUN --mount=type=secret) makes the credential available during the step without writing it into any layer. Overwriting the file in a new layer has the same problem as deleting it. Making the repository private does not un-expose copies already pulled. Squashing future builds fixes new images but leaves the leaked token valid.",
    referenceUrl: "https://docs.docker.com/build/building/secrets/",
    tags: ["Image security", "Build secrets", "Credential rotation"]
  },
  {
    id: "cncf-kcsa-53",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "A release tag that silently changed content",
    scenario: "A fintech discovered that the image tagged payments:2.3.1 in its registry had been overwritten by a later push, so clusters pulling that tag received different code than the version that passed review. The registry team wants to make that impossible for release tags.",
    question: "Which registry-side control should be enabled?",
    options: [
      { id: 'A', text: "Tag immutability on the repository, so that a pushed release tag can never be moved to another digest." },
      { id: 'B', text: "A retention policy that deletes untagged manifests older than thirty days from the payments repository." },
      { id: 'C', text: "Vulnerability scanning on push, so that every new manifest pushed to the tag is scanned before it is used." },
      { id: 'D', text: "Replication of the repository to a second region, so that each release tag also exists in a backup copy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Registries such as Harbor, Amazon ECR and Google Artifact Registry support tag immutability, which rejects any push that would repoint an existing tag, so payments:2.3.1 always refers to the reviewed digest; clients can additionally pin by digest. Retention policies clean up old artifacts and do nothing to stop a tag being overwritten. Scanning on push checks the new content for CVEs but still lets it replace the reviewed image. Replication copies whatever the tag currently points at, including an overwritten version.",
    referenceUrl: "https://goharbor.io/docs/main/working-with-projects/working-with-images/create-tag-immutability-rules/",
    tags: ["Registry security", "Tag immutability"]
  },
  {
    id: "cncf-kcsa-54",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "A pulled tag whose image keeps coming back",
    scenario: "A retailer learned that its image api:4.2.0 contained a backdoored dependency, so an engineer deleted the 4.2.0 tag from the private registry. Hours later new pods were still starting that image, because the production manifests reference it by digest rather than by tag.",
    question: "What should the team do to stop the compromised image from running?",
    options: [
      { id: 'A', text: "Set imagePullPolicy to Always on the Deployments so every node fetches a fresh copy from the registry." },
      { id: 'B', text: "Push a clean build under the same 4.2.0 tag so the registry serves the fixed image for that version." },
      { id: 'C', text: "Rescan the registry repository so the scanner marks the compromised digest as critical in its report." },
      { id: 'D', text: "Delete the manifest by its digest, let garbage collection remove it, and deny that digest at admission." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deleting a tag only removes a pointer; in most registries the manifest stays pullable by digest until it is deleted and garbage-collected, and nodes that already cached it can start it without the registry at all. Deleting the manifest by digest, collecting garbage, denying the digest in an admission policy and rolling workloads to a fixed digest together stop it. imagePullPolicy Always would pull the same digest again. Reusing the tag does nothing for manifests pinned to the old digest. A rescan labels the image but does not stop anything from pulling or running it.",
    referenceUrl: "https://distribution.github.io/distribution/about/garbage-collection/",
    tags: ["Registry security", "Digests", "Incident response"]
  },
  {
    id: "cncf-kcsa-55",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Nodes pulling straight from a public registry",
    scenario: "A retailer's nodes pull community base images directly from a public registry. Deployments have failed during the public registry's outages and rate limiting, and security cannot scan or control what enters the cluster. The team wants one controlled source for these images.",
    question: "Which approach fits best?",
    options: [
      { id: 'A', text: "Set imagePullPolicy to Always on every workload so that nodes fetch the freshest image on each start." },
      { id: 'B', text: "Mirror the images through a private registry pull-through cache that is scanned and used by all nodes." },
      { id: 'C', text: "Give every node a personal account on the public registry so that pulls count against separate limits." },
      { id: 'D', text: "Switch workloads to the latest tag so the public registry serves cached manifests more often to nodes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A pull-through cache or mirror in a private registry (for example ECR pull-through cache, Harbor proxy projects or Artifact Registry remote repositories) fetches upstream images once, stores them where they can be scanned and governed, and keeps serving them during upstream outages. imagePullPolicy Always increases dependence on the public registry. Per-node accounts spread rate limits but still bypass scanning and control. The latest tag makes deployments unpredictable and does not change caching or control.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECR/latest/userguide/pull-through-cache.html",
    tags: ["Registry security", "Pull-through cache"]
  },
  {
    id: "cncf-kcsa-56",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "An in-house registry reached over plain HTTP",
    scenario: "To get started quickly, a manufacturer's platform team configured containerd on every node to treat its on-premises registry as an insecure registry reached over plain HTTP. The plant network is shared with thousands of industrial devices that the team does not control.",
    question: "What should the team change?",
    options: [
      { id: 'A', text: "Keep HTTP but require basic authentication so that only nodes with valid credentials can pull images." },
      { id: 'B', text: "Keep HTTP but move the registry to a non-standard port so that devices on the plant network miss it." },
      { id: 'C', text: "Serve the registry over TLS with a certificate from the company CA and configure that CA on every node." },
      { id: 'D', text: "Keep HTTP but enable vulnerability scanning in the registry so tampered images are flagged on push." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Over plain HTTP, anyone on the shared network can intercept or alter image pulls and capture credentials; serving the registry over TLS and configuring the company CA in containerd's registry host configuration gives nodes an authenticated, encrypted channel. Basic authentication over HTTP sends the credentials in clear text and still allows image tampering in transit. A non-standard port is obscurity. Push-time scanning cannot detect an image that is modified on the wire after it leaves the registry.",
    referenceUrl: "https://github.com/containerd/containerd/blob/main/docs/hosts.md",
    tags: ["Registry security", "TLS", "containerd"]
  },
  {
    id: "cncf-kcsa-57",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Upstream base fixes that never reach production",
    scenario: "A media company's services build on an internal base image that is itself derived from a public distribution image. The distribution publishes patched base images several times a month, but the service images are rebuilt only when developers change application code, sometimes months apart.",
    question: "What should the platform team introduce?",
    options: [
      { id: 'A', text: "Add an entrypoint step that runs the package manager's upgrade command every time a container starts up." },
      { id: 'B', text: "Scan the service images weekly and file tickets for the owning teams whenever a base package CVE is reported." },
      { id: 'C', text: "Pin base images by digest and automate updates that rebuild and redeploy images when a new base is published." },
      { id: 'D', text: "Change every Dockerfile to FROM the base image's latest tag so each build automatically uses the newest base." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Pinning the base by digest keeps builds reproducible, and a bot such as Renovate or Dependabot that proposes the new digest and triggers a rebuild and redeploy makes base image patches flow to production continuously instead of waiting for code changes. The latest tag makes builds non-reproducible and still only helps when someone happens to rebuild. Upgrading packages at container start makes the running image differ from what was scanned and signed, slows startup and requires network access and a package manager at runtime. Weekly scans identify the problem but leave remediation to manual tickets, which is what is failing today.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/cloud-native-security/",
    tags: ["Image security", "Patching", "Base images"]
  },
  {
    id: "cncf-kcsa-58",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "A Dockerfile that fetches a binary from the web",
    scenario: "A logistics team's Dockerfile downloads a monitoring agent binary from a vendor's HTTPS download URL at build time and adds it to the image. Security is concerned that a compromised download server or a swapped file would go unnoticed, and wants builds to fail if the content ever changes.",
    question: "Which change addresses the concern?",
    options: [
      { id: 'A', text: "Scan the finished image with a vulnerability scanner so that any compromised agent binary gets reported." },
      { id: 'B', text: "Verify a pinned SHA-256 checksum of the downloaded file in the build, such as with ADD --checksum." },
      { id: 'C', text: "Run the download step with a larger timeout and a retry loop so transient network errors stop failing builds." },
      { id: 'D', text: "Switch the download to plain HTTP so a corporate proxy can inspect the file content for malware on the way." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pinning the expected SHA-256 digest of the artifact and verifying it at build time, for example with ADD --checksum or a sha256sum check in the RUN step, makes the build fail if the downloaded content ever differs from the vetted file. Downgrading to HTTP removes transport integrity and lets anyone on the path alter the file. Retries improve reliability, not integrity. Vulnerability scanners match known CVEs in recognised packages and would not notice a trojanised binary with a plausible version string.",
    referenceUrl: "https://docs.docker.com/reference/dockerfile/#add---checksum",
    tags: ["Image security", "Build integrity", "Checksums"]
  },
  {
    id: "cncf-kcsa-59",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "COPY . . picked up the local environment file",
    scenario: "A startup's Dockerfile uses COPY . . to add its Node.js service to the image. A scan of the published image found the developer's .env file, containing a database password, and the full .git directory inside it.",
    question: "What should the team do in addition to rotating the password?",
    options: [
      { id: 'A', text: "Add a .dockerignore file that excludes .env, .git and other local-only files from the build context." },
      { id: 'B', text: "Mark the container's root filesystem read-only so the application cannot modify the copied .env file." },
      { id: 'C', text: "Add a later RUN instruction that deletes the .env file and the .git directory from the image filesystem." },
      { id: 'D', text: "Run the service as a non-root user so it is not able to read the copied .env file inside the container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A .dockerignore file keeps listed files out of the build context altogether, so COPY . . can no longer place secrets or repository history into any layer. Deleting the files in a later instruction leaves them intact in the earlier layer. A read-only root filesystem stops writes, not reads, and does not remove the file from the image that anyone with pull access can extract. Changing the runtime user does nothing for someone who pulls the image and inspects its layers offline.",
    referenceUrl: "https://docs.docker.com/build/concepts/context/#dockerignore-files",
    tags: ["Image security", "Build context", "Secrets"]
  },
  {
    id: "cncf-kcsa-60",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "An admission rule that trusts an image label",
    scenario: "A healthcare company's admission policy admits only images carrying the label security.scan=passed, which the official CI pipeline adds after a successful scan. A red team built its own image with that label on a laptop, pushed it to a repository it could write to, and the policy admitted it.",
    question: "How should the policy be redesigned?",
    options: [
      { id: 'A', text: "Keep checking the label but restrict the policy to images from repositories whose names start with prod." },
      { id: 'B', text: "Admit only images whose label value matches a secret string that the CI pipeline injects during builds." },
      { id: 'C', text: "Verify a scan-result attestation signed by the CI pipeline's identity instead of trusting image labels." },
      { id: 'D', text: "Require an additional label containing the scan date and reject images whose date is older than seven days." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Image labels are ordinary metadata that anyone who builds an image can set, so they cannot carry trust; an attestation signed by the CI pipeline's identity (for example an in-toto scan attestation verified by Kyverno or the Sigstore policy controller) proves the claim came from the trusted pipeline and is bound to that image digest. A date label is just as forgeable. A secret string embedded in a label becomes readable by anyone who pulls an image. Restricting by repository name helps only if write access to those repositories is tightly controlled, and the label itself still proves nothing.",
    referenceUrl: "https://kyverno.io/docs/policy-types/cluster-policy/verify-images/",
    tags: ["Image security", "Attestations", "Admission control"]
  },
  {
    id: "cncf-kcsa-61",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "A cloud key pushed to a shared repository",
    scenario: "A developer at an e-commerce company accidentally committed a cloud access key in a configuration file and pushed it to the shared Git repository. It was spotted two days later, and the company wants such mistakes caught before they reach the remote in future.",
    question: "Which pair of actions is appropriate?",
    options: [
      { id: 'A', text: "Rewrite the repository history to remove the key and ask all developers to re-clone the repository." },
      { id: 'B', text: "Make the repository private and add the configuration file's name to the project's .gitignore list." },
      { id: 'C', text: "Delete the file in a new commit and add a code owner review for configuration files from now on." },
      { id: 'D', text: "Revoke the key at once, then add secret scanning in pre-commit hooks and in the CI pipeline for pushes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A pushed credential must be treated as compromised and revoked immediately; tools such as gitleaks or the Git host's secret scanning with push protection then catch new secrets before they are committed or accepted by the remote. Deleting the file in a new commit leaves the key in history. Rewriting history is worthwhile hygiene, but the key has already been exposed for two days and remains valid until revoked. Changing visibility and adding a .gitignore entry protect nothing that was already pushed and do not detect other secrets.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning",
    tags: ["Code security", "Secret scanning"]
  },
  {
    id: "cncf-kcsa-62",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "An internal package name claimed on the public index",
    scenario: "A bank's services depend on an internal Python package called acme-auth hosted on a private index. An attacker published a package with the same name and a higher version number on the public index, and a build server configured with both indexes installed the attacker's version.",
    question: "Which change prevents a repeat?",
    options: [
      { id: 'A', text: "Run a vulnerability scanner on the built images so malicious acme-auth versions are reported after the build." },
      { id: 'B', text: "Resolve internal package names only from the private index, which proxies the public one for everything else." },
      { id: 'C', text: "Switch the build servers to install acme-auth from a pre-built wheel stored in the container image's layer cache." },
      { id: 'D', text: "Pin the acme-auth package to a version range and keep both the private index and public one configured." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "This is a dependency confusion attack: when a resolver queries several indexes it may pick the highest version wherever it lives. Configuring a single private index that serves internal names itself and proxies only genuine public packages removes the ambiguity, ideally with hash-pinned requirements as well. A version range can still be satisfied by the attacker's higher version. A scanner matches known CVEs and would not recognise a newly published malicious package. Relying on a layer cache is fragile, and the first uncached build falls back to the same ambiguous resolution.",
    referenceUrl: "https://owasp.github.io/www-project-top-10-ci-cd-security-risks/CICD-SEC-03-Dependency-Chain-Abuse",
    tags: ["Code security", "Dependency confusion", "Supply chain"]
  },
  {
    id: "cncf-kcsa-63",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Knowing when an imported library turns vulnerable",
    scenario: "A travel company's Node.js services import several hundred npm packages directly and transitively. The security team wants to be told, in pull requests and on a schedule, whenever any of those packages has a published vulnerability, including packages the developers never listed themselves.",
    question: "Which practice meets the requirement?",
    options: [
      { id: 'A', text: "Software composition analysis of the lockfile that matches every direct and transitive npm dependency." },
      { id: 'B', text: "Static application security testing of the team's source code to find insecure patterns in each change." },
      { id: 'C', text: "Signing each release image with the team's key so tampered builds are rejected by the admission gate." },
      { id: 'D', text: "Dynamic application security testing that sends attack payloads to the staging endpoints each night." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Software composition analysis tools such as npm audit, Dependabot, Snyk or Trivy's filesystem mode read the dependency manifest and lockfile, resolve transitive packages and match them against vulnerability databases, both in pull requests and on a schedule as new advisories appear. SAST analyses the team's own code rather than third-party package versions. DAST tests the running service and would only catch a library flaw if a probe happened to trigger it. Image signing proves integrity and origin, not the absence of vulnerable dependencies.",
    referenceUrl: "https://owasp.org/www-community/Component_Analysis",
    tags: ["Code security", "SCA", "Dependencies"]
  },
  {
    id: "cncf-kcsa-64",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Management endpoints reachable through the Ingress",
    scenario: "An insurer's Spring Boot service exposes its actuator endpoints, including /actuator/env and /actuator/heapdump, on the same port as its public API, which is published through an Ingress. The operations team still needs health and metrics endpoints for Kubernetes probes and Prometheus.",
    question: "What should the developers change?",
    options: [
      { id: 'A', text: "Expose only health and metrics, on a separate management port that the Ingress and Service do not publish." },
      { id: 'B', text: "Keep every endpoint exposed but rename the actuator base path to a random string known only to operations." },
      { id: 'C', text: "Keep every endpoint exposed and add a NetworkPolicy that allows ingress to the pod only from the Ingress." },
      { id: 'D', text: "Keep health, metrics and every other endpoint on the API port and rely on TLS at the Ingress for privacy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Endpoints such as env and heapdump can reveal configuration, credentials and memory contents, so only the endpoints that are needed should be exposed, on a separate management port that the public Service and Ingress do not route, with authentication where appropriate. A random path is obscurity and is easily found in logs or by brute force. TLS protects the response in transit to whoever requests it, including an attacker. Allowing traffic only from the Ingress changes nothing, because the Ingress is exactly how the public reaches the endpoints.",
    referenceUrl: "https://docs.spring.io/spring-boot/reference/actuator/endpoints.html",
    tags: ["Code security", "Debug endpoints", "Exposure"]
  },
  {
    id: "cncf-kcsa-65",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Bearer tokens appearing in the central log platform",
    scenario: "A payments API logs every incoming request's full headers to stdout at info level for troubleshooting. The cluster's log agent ships stdout to a central logging platform that more than two hundred engineers can search, and an auditor found customer bearer tokens in it.",
    question: "What is the most effective fix?",
    options: [
      { id: 'A', text: "Remove pods/log from developers' Roles so they can no longer run kubectl logs to read the API's headers." },
      { id: 'B', text: "Encrypt the logging platform's storage at rest with customer-managed keys held in the company's KMS." },
      { id: 'C', text: "Reduce the retention of the API's logs on the central platform from ninety days to seven days only." },
      { id: 'D', text: "Change the application's logging to redact Authorization headers and other sensitive fields at source." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Sensitive values should never be written to logs; redacting Authorization headers, cookies and similar fields in the application's logging stops the tokens at the source, wherever the logs travel. Encryption at rest protects the storage media but not the data from the hundreds of engineers who can legitimately search it. Removing pods/log does not affect the central platform, which receives the logs from the node agent. Shorter retention narrows the exposure window but keeps writing live tokens into a widely readable system.",
    referenceUrl: "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html",
    tags: ["Code security", "Logging", "Sensitive data"]
  },
  {
    id: "cncf-kcsa-66",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "One database password shared by twelve services",
    scenario: "Twelve microservices at a retailer connect to the orders database with the same long-lived username and password stored in a Kubernetes Secret. When one service was compromised, nobody could tell which service's queries were malicious, and rotating the password required a coordinated restart of every service.",
    question: "Which design addresses both problems?",
    options: [
      { id: 'A', text: "Mount the Secret as a volume rather than an environment variable so the password rotates in place." },
      { id: 'B', text: "Issue dynamic, short-lived per-service database credentials from a secrets manager such as Vault." },
      { id: 'C', text: "Enable encryption at rest for Secrets so the shared password is encrypted with a key held in the KMS." },
      { id: 'D', text: "Rotate the shared database password every ninety days and store it in a SealedSecret encrypted in Git." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A secrets engine such as Vault's database engine creates a unique username and password per service with a short lease and revokes it automatically, so queries are attributable to one service, a compromised credential expires quickly, and rotation needs no coordinated restart. Periodic rotation of a shared password keeps the attribution problem and the coordinated restart. Encryption at rest and SealedSecrets protect the stored value but do not make it per-service or short-lived. Volume mounts let a new value propagate to pods, but everyone still shares one credential and the database still sees one identity.",
    referenceUrl: "https://developer.hashicorp.com/vault/docs/secrets/databases",
    tags: ["Code security", "Dynamic secrets", "Least privilege"]
  },
  {
    id: "cncf-kcsa-67",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Injection found in a product search endpoint",
    scenario: "A penetration test of an online grocer found that its product search endpoint builds a SQL statement by concatenating the user's search text into the query string, allowing the tester to dump the customers table. The fix must be made in the application itself.",
    question: "Which code change removes the vulnerability?",
    options: [
      { id: 'A', text: "Encrypt the connection between the search service and the database with TLS and a pinned certificate." },
      { id: 'B', text: "Use parameterised queries so the search text is always bound as data and never parsed as SQL syntax." },
      { id: 'C', text: "Escape single quotes in the search text with a regular expression before it is added to the query string." },
      { id: 'D', text: "Run the search service as a non-root user so a successful injection cannot touch the host filesystem." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Parameterised queries, or prepared statements, send the SQL structure and the user-supplied values separately, so input can never change the statement's meaning; this is the primary defence recommended for SQL injection. Hand-rolled escaping is error-prone and routinely bypassed with encodings or other metacharacters. Running as non-root limits host impact but does not stop the query from returning the customers table. TLS protects the connection in transit, while the malicious query still runs with the service's privileges.",
    referenceUrl: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html",
    tags: ["Code security", "Injection"]
  },
  {
    id: "cncf-kcsa-68",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Proving which workload is calling an internal API",
    scenario: "A logistics company's internal pricing API currently trusts any request that reaches it. There is no service mesh, and the architects want each calling workload to present a short-lived credential that identifies its service account and cannot be replayed against other services.",
    question: "Which approach fits?",
    options: [
      { id: 'A', text: "Callers send a shared API key from a Kubernetes Secret, and the pricing API compares it to its own copy." },
      { id: 'B', text: "Callers send the legacy service account token Secret from their namespace, which never expires or rotates." },
      { id: 'C', text: "Callers send a projected service account token with a pricing audience, which the API checks via TokenReview." },
      { id: 'D', text: "The API trusts callers whose source pod IP falls inside the pod CIDR range assigned to the calling namespace." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Projected service account tokens are short-lived, bound to the pod, and carry an audience claim; if callers request a token for the pricing API's audience, the API can validate it through the TokenReview API (or the cluster's OIDC keys), learn the caller's service account and reject tokens minted for any other audience. Legacy Secret-based tokens are long-lived and not audience-bound, so a stolen one works everywhere indefinitely. A shared API key identifies no particular workload and is replayable. Pod IPs are reassigned constantly and do not establish identity.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/projected-volumes/",
    tags: ["Code security", "Workload identity", "Service account tokens"]
  },
  {
    id: "cncf-kcsa-69",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "A stolen developer token pushed straight to main",
    scenario: "An attacker used a phished developer access token to push a backdoor directly to the main branch of a SaaS company's API repository, and the change was deployed automatically within minutes. The company wants source changes to require more than one compromised account before they reach main.",
    question: "Which control addresses this?",
    options: [
      { id: 'A', text: "Scan the built image for CVEs before deployment so a backdoor introduced in main is reported automatically." },
      { id: 'B', text: "Mirror the repository to a second Git host so there is an untouched copy if main is ever tampered with." },
      { id: 'C', text: "Protect main so changes need a pull request approved by another reviewer and passing required checks." },
      { id: 'D', text: "Rotate every developer's access token monthly so that phished tokens have a shorter useful lifetime." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Branch protection that forbids direct pushes and requires an approving review from someone other than the author, plus required status checks, means a single stolen token can no longer put code on main; signed commits add further assurance about authorship. CVE scanning finds known vulnerable packages, not a custom backdoor. Monthly rotation shortens a stolen token's life but still allows a direct push within minutes of theft. A mirror helps recovery but does not stop the malicious change from being deployed.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches",
    tags: ["Code security", "Branch protection", "Source integrity"]
  },
  {
    id: "cncf-kcsa-70",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "A link-preview feature that fetched internal URLs",
    scenario: "A social app's link-preview service fetches any URL a user posts and returns the page title. A researcher showed it would fetch http://10.0.12.7:8080/admin from inside the cluster and return internal responses, and it could also reach other cluster services. The service must keep fetching arbitrary public websites.",
    question: "What is the right remediation?",
    options: [
      { id: 'A', text: "Allow only https URLs in the preview service so that internal plain-HTTP admin pages cannot be fetched." },
      { id: 'B', text: "Require users to log in before posting links so that only authenticated accounts can trigger URL fetches." },
      { id: 'C', text: "Validate resolved addresses in code to refuse private ranges, and add an egress policy blocking cluster CIDRs." },
      { id: 'D', text: "Move the preview service into its own namespace so it can no longer resolve the other services' DNS names." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "This is server-side request forgery. The defence belongs in the application, which must resolve each hostname and refuse private, loopback, link-local and cluster ranges (checking after redirects too), backed by an egress NetworkPolicy that blocks pod and service CIDRs and the metadata address as a second layer. Requiring login only changes who can exploit it. Restricting to https is bypassed by any internal service with TLS or by redirects. A separate namespace does not stop connections to raw IP addresses, and cluster DNS still resolves names across namespaces.",
    referenceUrl: "https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html",
    tags: ["Code security", "SSRF", "Egress"]
  },
  {
    id: "cncf-kcsa-71",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "A service still running on an end-of-life runtime",
    scenario: "A university's course-registration service still runs on a language runtime version that reached end of life two years ago. Its image passes the current scanner policy only because the scanner has no fix versions to suggest for the runtime's newer CVEs.",
    question: "What should the team do?",
    options: [
      { id: 'A', text: "Keep the runtime but rebuild the image nightly so the operating system packages beneath it stay current." },
      { id: 'B', text: "Keep the runtime and add the unfixable CVEs to the scanner's ignore list so the pipeline stays green." },
      { id: 'C', text: "Keep the runtime but run the service under a Restricted Pod Security profile to compensate for it." },
      { id: 'D', text: "Upgrade to a supported runtime release that still receives security fixes, and test the service on it." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An end-of-life runtime no longer receives security patches, so newly discovered vulnerabilities in it will never be fixed; moving to a supported release is the only durable remedy. Ignoring the findings hides a growing, permanent risk. A Restricted profile limits damage on the node but does nothing about exploitable flaws in the service itself. Nightly rebuilds keep OS packages current, but the unsupported runtime stays exactly as vulnerable.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/cloud-native-security/",
    tags: ["Code security", "Patching", "End of life"]
  },
  {
    id: "cncf-kcsa-72",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "A third-party CI action referenced by a movable tag",
    scenario: "A fintech's build workflow uses a popular community CI action referenced as some-org/setup-tool@v3, and the step has access to the repository's deployment credentials. An incident at another company showed that a compromised maintainer account can repoint such a tag to malicious code.",
    question: "What should the team change?",
    options: [
      { id: 'A', text: "Keep the v3 tag reference and add a job that scans the final built image for known CVEs after the build." },
      { id: 'B', text: "Pin the action to a full commit SHA that has been reviewed, and update that pin through reviewed changes." },
      { id: 'C', text: "Keep the v3 tag reference and enable verbose logging so that any unexpected behaviour shows up in the job." },
      { id: 'D', text: "Reference the action as some-org/setup-tool@main so the workflow always runs the maintainer's latest fixes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Git tags and branches can be moved, but a full commit SHA refers to immutable content; pinning third-party actions by SHA, and updating the pin through a reviewed pull request, is the hardening guidance for CI actions. Tracking main is even more exposed to a compromised maintainer. An image scan would not detect a malicious action that exfiltrates credentials during the build. Verbose logs might record the damage after the fact but do not prevent the malicious code from running with deployment credentials.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions",
    tags: ["Code security", "CI security", "Supply chain"]
  },
  {
    id: "cncf-kcsa-73",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "An image parser that crashes on odd files",
    scenario: "A property website's thumbnail service parses user-uploaded images with a library the company maintains in C. Two production crashes were traced to malformed files, and the team wants to find memory-safety bugs in the parser automatically before each release rather than waiting for attackers to find them.",
    question: "Which technique is most effective for this goal?",
    options: [
      { id: 'A', text: "Container image signing so that only reviewed builds of the thumbnail service reach the production cluster." },
      { id: 'B', text: "Coverage-guided fuzzing of the parser with mutated inputs, running continuously in the CI pipeline." },
      { id: 'C', text: "Software composition analysis of the service's dependencies against public vulnerability databases." },
      { id: 'D', text: "Dynamic application security testing with a standard web scanner against the upload endpoint URL." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Coverage-guided fuzzing, with tools such as libFuzzer, AFL++ or OSS-Fuzz, generates huge numbers of mutated inputs that steer toward new code paths and is especially effective at finding crashes and memory-corruption bugs in parsers of untrusted data. SCA only reports known vulnerabilities in third-party packages, and this parser is in-house. A generic web scanner sends a limited set of HTTP attack payloads and would rarely produce the malformed image structures that reach deep parser states. Image signing protects build integrity, not code correctness.",
    referenceUrl: "https://owasp.org/www-community/Fuzzing",
    tags: ["Code security", "Fuzzing"]
  },
  {
    id: "cncf-kcsa-74",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Credentials kept in a ConfigMap for convenience",
    scenario: "Developers at a logistics firm store a third-party API password in a ConfigMap because it is easier to template alongside other settings. Support engineers hold the built-in view role in every namespace so they can troubleshoot, and the cluster's encryption at rest configuration covers only the secrets resource.",
    question: "Why should the password move to a Secret?",
    options: [
      { id: 'A', text: "ConfigMaps are limited to 1 KiB of data, so a long password is truncated whenever a pod reads the value." },
      { id: 'B', text: "The view role can read ConfigMaps but not Secrets, and encryption at rest here covers Secrets alone." },
      { id: 'C', text: "Values in a ConfigMap are logged in plain text by the API server whenever any pod mounts that ConfigMap." },
      { id: 'D', text: "ConfigMaps are copied to every node in the cluster, whereas Secrets are delivered only to control planes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The built-in view role deliberately excludes Secrets but includes ConfigMaps, so every support engineer can read the password today, and the encryption configuration protects only Secret objects in etcd; moving the value to a Secret brings it under both protections, and Secrets can be further restricted by RBAC. ConfigMaps and Secrets share the same 1 MiB size limit. The kubelet fetches both ConfigMaps and Secrets only for pods scheduled on its node. The API server does not log ConfigMap contents when a pod mounts one.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles",
    tags: ["Workload security", "Secrets", "ConfigMaps"]
  },
  {
    id: "cncf-kcsa-75",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d1",
    domainName: "Overview of Cloud Native Security",
    title: "Catching weak cryptography before code is merged",
    scenario: "A health-records company wants every pull request checked automatically for insecure coding patterns in its own source, such as hard-coded keys, weak hash algorithms and unsafe deserialisation, before the code is merged and without deploying it anywhere.",
    question: "Which technique fits?",
    options: [
      { id: 'A', text: "Static application security testing that analyses the source code in the pull request pipeline itself." },
      { id: 'B', text: "Runtime threat detection on production nodes that alerts when the application loads weak cipher suites." },
      { id: 'C', text: "Dynamic application security testing against a staging deployment built from each pull request branch." },
      { id: 'D', text: "Container image vulnerability scanning of the image built from each pull request branch before merging." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Static application security testing analyses source code without running it and flags insecure patterns such as hard-coded secrets, weak algorithms and dangerous deserialisation directly in the pull request. DAST requires a running deployment and finds issues through behaviour, which the team wants to avoid. Runtime detection only acts after code is in production. Image scanning looks for known CVEs in packages, not insecure patterns in the team's own code.",
    referenceUrl: "https://owasp.org/www-community/Source_Code_Analysis_Tools",
    tags: ["Code security", "SAST"]
  }
];

export default CNCF_KCSA_QUESTIONS_3;
