export const AZURE_AZ305_FLASHCARDS_14 = [
  {
    id: "azure-az305-fc-326",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Compute decision tree: which Azure service fits each of these starting points?",
    hint: "Ask how much control you need, then what shape the code has.",
    back: "<strong>Full OS control or unmodifiable legacy software</strong>: Virtual Machines. <strong>Web app or API, no containers required</strong>: App Service. <strong>Containerised microservices without managing Kubernetes</strong>: Container Apps. <strong>Need the Kubernetes API, CRDs or operators</strong>: AKS. <strong>Short event-driven functions</strong>: Azure Functions. <strong>One-off or occasional container task</strong>: Container Instances. <strong>Large parallel or HPC jobs</strong>: Azure Batch. Start with the most managed option that meets the requirements.",
    tags: ["Compute selection", "Architecture"]
  },
  {
    id: "azure-az305-fc-327",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "Azure VM family letters: what do B, D, E, F, L, M, N and H stand for?",
    hint: "Each letter hints at the resource it emphasises.",
    back: "<strong>B</strong>: burstable, low baseline CPU with credits. <strong>D</strong>: general purpose, balanced CPU and memory. <strong>E</strong>: memory optimised. <strong>F</strong>: compute optimised, high CPU-to-memory ratio. <strong>L</strong>: storage optimised, large local NVMe. <strong>M</strong>: very large memory, e.g. SAP HANA. <strong>N</strong>: GPU for AI, visualisation and rendering. <strong>H</strong>: high-performance computing with fast interconnects such as InfiniBand.",
    tags: ["Virtual machines", "VM sizing"]
  },
  {
    id: "azure-az305-fc-328",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d4",
    front: "How do you read a VM size name such as Standard_D8ads_v5?",
    hint: "Family, cores, feature letters, version.",
    back: "<strong>D</strong> family, <strong>8</strong> vCPUs, then additive feature letters: <strong>a</strong> = AMD processor, <strong>d</strong> = local temporary disk included, <strong>s</strong> = supports Premium SSD. Other letters: <strong>p</strong> = Arm-based, <strong>m</strong> = memory intensive, <strong>l</strong> = low memory, <strong>i</strong> = isolated, <strong>b</strong> = higher remote block storage performance. The suffix <strong>_v5</strong> is the generation. A size without <strong>s</strong> cannot attach Premium SSD disks.",
    tags: ["Virtual machines", "VM sizing"]
  },
  {
    id: "azure-az305-fc-329",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Spot VMs: what triggers an eviction, what warning do you get, and what happens to the VM?",
    hint: "Two eviction types, two eviction policies.",
    back: "Eviction type: <strong>capacity only</strong>, or <strong>price or capacity</strong> when you set a maximum price. Azure gives about <strong>30 seconds' notice</strong> through Scheduled Events. The eviction policy decides the outcome: <strong>Deallocate</strong> stops the VM and keeps its disks (still billed for storage) so it can be restarted later; <strong>Delete</strong> removes the VM and its disks. Spot suits interruptible, stateless or checkpointed work, never workloads that need guaranteed capacity.",
    tags: ["Spot VMs", "Cost optimization"]
  },
  {
    id: "azure-az305-fc-330",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "AKS Automatic vs AKS Standard: what does Automatic take off the team's hands, and what do you give up?",
    hint: "Preconfigured means you cannot switch it off.",
    back: "<strong>AKS Automatic</strong> manages the system node pools for you, provisions user nodes automatically from Pod requests (node autoprovisioning), enables HPA, KEDA and VPA, auto-upgrades the cluster and node images, and enforces a hardened baseline: Azure RBAC, workload identity, deployment safeguards and a locked node resource group. It includes the Standard tier uptime SLA plus a pod readiness SLA. The trade-off is less choice: many settings are preconfigured and cannot be changed. <strong>AKS Standard</strong> leaves node pools, networking and upgrades to you.",
    tags: ["AKS Automatic", "AKS"]
  },
  {
    id: "azure-az305-fc-331",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Azure Dedicated Host vs isolated VM sizes: how do you choose?",
    hint: "A whole server you fill, or one very large VM.",
    back: "<strong>Dedicated Host</strong>: an entire physical server for your subscription, on which you place many VMs of sizes supported by the host's SKU; you see sockets and cores for licensing, can use Azure Hybrid Benefit per core, and control maintenance with a maintenance configuration. <strong>Isolated VM sizes</strong>: a single large VM that occupies the whole host, with no host management. Pick Dedicated Host for a mixed estate that needs host-level control; isolated sizes for one big workload.",
    tags: ["Azure Dedicated Host", "Isolation"]
  },
  {
    id: "azure-az305-fc-332",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d4",
    front: "Confidential VM vs Trusted launch vs encryption at host: which threat does each address?",
    hint: "Boot, rest, or in use.",
    back: "<strong>Trusted launch</strong>: Secure Boot, vTPM and boot integrity monitoring against rootkits and bootkits. <strong>Encryption at host</strong>: encrypts temporary disks and disk caches on the host so data at rest is encrypted end to end. <strong>Confidential VM</strong>: hardware trusted execution environment (AMD SEV-SNP or Intel TDX) that encrypts <strong>memory in use</strong> from the hypervisor and operators, with attestation and optional confidential OS disk encryption. Only the last protects data while it is processed.",
    tags: ["Confidential computing", "Trusted launch", "Security"]
  },
  {
    id: "azure-az305-fc-333",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "Getting software onto VMs: custom script extension vs VM Applications vs Azure VM Image Builder?",
    hint: "At boot every time, as a managed package, or baked into the image.",
    back: "The <strong>custom script extension</strong> downloads and runs a script on a VM after deployment; simple, but it runs on every new instance and slows scale-out. <strong>VM Applications</strong> in Azure Compute Gallery package software as versioned applications that are replicated across regions and installed on VMs or scale sets at deployment. <strong>Azure VM Image Builder</strong> bakes software and hardening into a <strong>golden image</strong> published to a gallery, so instances boot ready. Bake what rarely changes; install what changes often.",
    tags: ["Virtual machines", "Images", "VM Applications"]
  },
  {
    id: "azure-az305-fc-334",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "What does Azure Compute Gallery provide that a managed image does not?",
    hint: "Versions, regions and sharing.",
    back: "An <strong>image definition</strong> with multiple <strong>image versions</strong>, so deployments can use the latest or pin one; <strong>replication</strong> of each version to chosen regions with a configurable replica count for scale; optional ZRS storage for versions; and sharing through <strong>RBAC</strong>, a <strong>direct shared gallery</strong> with other subscriptions or tenants, or a public <strong>community gallery</strong>. It also stores VM application packages. A managed image is a single regional, unversioned resource.",
    tags: ["Azure Compute Gallery", "Images"]
  },
  {
    id: "azure-az305-fc-335",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Scale set autoscale: reactive metric rules vs scheduled profiles vs predictive autoscale?",
    hint: "React, follow a calendar, or forecast.",
    back: "<strong>Metric rules</strong> react to current load (CPU, queue length, custom metrics) and lag by the instance boot time. <strong>Scheduled profiles</strong> set capacity for known times and must be maintained when the pattern changes. <strong>Predictive autoscale</strong> forecasts cyclical CPU load from at least seven days of history and scales out <strong>ahead</strong> of the predicted demand; it works only for scale sets, only on CPU, and only for scale-out, so keep a reactive rule alongside it.",
    tags: ["Virtual Machine Scale Sets", "Autoscale"]
  },
  {
    id: "azure-az305-fc-336",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d4",
    front: "What does Spot Priority Mix let a scale set do, and what does it require?",
    hint: "A base, then a percentage split.",
    back: "In one scale set, keep a <strong>base count of regular (standard-priority) VMs</strong> and then fill capacity above the base with a <strong>percentage split</strong> between Spot and regular VMs, for example a base of 10 with 70% Spot above it. Evicted Spot capacity can be replaced according to the scale set's settings, while the base protects a minimum service level. It requires <strong>Flexible orchestration</strong>; Uniform scale sets are single-priority.",
    tags: ["Virtual Machine Scale Sets", "Spot VMs"]
  },
  {
    id: "azure-az305-fc-337",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "Azure Virtual Desktop vs Windows 365: how do you tell which one a scenario wants?",
    hint: "Shared and elastic, or personal and fixed-price.",
    back: "<strong>Azure Virtual Desktop</strong>: you run session hosts in your subscription, can use <strong>Windows 11 Enterprise multi-session</strong> pooled host pools with autoscale, and pay for the compute you use; best for shift workers, shared apps and cost control. <strong>Windows 365</strong>: a dedicated <strong>Cloud PC per user</strong> at a <strong>fixed monthly price</strong>, managed like a physical PC through Intune, with no infrastructure to run. Multi-session or pay-per-use points to AVD; simplicity and personal desktops to Windows 365.",
    tags: ["Azure Virtual Desktop", "Windows 365"]
  },
  {
    id: "azure-az305-fc-338",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "When is Azure Container Instances the right container host, and what does it lack?",
    hint: "Fast and simple, not an orchestrator.",
    back: "Use ACI for <strong>short-lived or occasional</strong> containers, build agents, burst jobs and simple sidecar groups: a <strong>container group</strong> starts in seconds, supports Linux and Windows, can join a VNet, and bills per second. It lacks <strong>autoscaling</strong>, rolling upgrades, built-in service discovery and ingress routing, so for long-running microservices choose Container Apps or AKS. AKS virtual nodes can burst pods onto ACI.",
    tags: ["Container Instances", "Containers"]
  },
  {
    id: "azure-az305-fc-339",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Container Apps building blocks: environment, revisions and workload profiles. What does each control?",
    hint: "Boundary, version, hardware.",
    back: "An <strong>environment</strong> is the secure boundary that apps share: one virtual network, one Log Analytics destination and internal service discovery. A <strong>revision</strong> is an immutable snapshot of an app version; multiple revisions can run with <strong>traffic splitting</strong> for blue-green or canary releases. A <strong>workload profile</strong> sets the hardware: the serverless <strong>Consumption</strong> profile scales to zero, while <strong>Dedicated</strong> profiles give reserved node sizes, including larger memory and GPU options.",
    tags: ["Container Apps", "Revisions", "Workload profiles"]
  },
  {
    id: "azure-az305-fc-340",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "Container Apps or AKS: what is the one question that usually decides it?",
    hint: "Who needs to touch Kubernetes itself?",
    back: "<strong>Do you need direct access to the Kubernetes API?</strong> If you need CRDs, operators, Helm charts that install cluster-level resources, custom admission controllers, a particular service mesh or Windows containers, choose <strong>AKS</strong> and accept cluster operations. If you just want containers with HTTP or event-driven scaling, scale to zero, Dapr and revisions, choose <strong>Container Apps</strong>, which runs Kubernetes for you and hides it.",
    tags: ["Container Apps", "AKS", "Compute selection"]
  },
  {
    id: "azure-az305-fc-341",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "AKS system node pools vs user node pools: what belongs on each?",
    hint: "The cluster's own pods need a home.",
    back: "<strong>System node pools</strong> host critical system pods such as CoreDNS and metrics-server; every cluster needs at least one, it must be Linux, and it should have at least three nodes for production resilience. <strong>User node pools</strong> host application workloads; they can be Linux or Windows, use different VM sizes (GPU, memory-optimised, Spot), and scale to zero. Taint the system pool with <code>CriticalAddonsOnly</code> to keep application pods off it.",
    tags: ["AKS", "Node pools"]
  },
  {
    id: "azure-az305-fc-342",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d4",
    front: "AKS network plugins: kubenet vs Azure CNI (flat) vs Azure CNI Overlay?",
    hint: "Where do pod IP addresses come from?",
    back: "<strong>Azure CNI flat</strong>: every pod gets a routable VNet address (static or dynamic allocation), so pods are directly reachable but the VNet must be large. <strong>Azure CNI Overlay</strong>: nodes use VNet addresses, pods get addresses from a separate private CIDR, and egress is translated to the node IP; conserves address space and scales well, the usual default. <strong>Kubenet</strong>: an older overlay using route tables with scale limits, being retired; migrate to Overlay.",
    tags: ["AKS", "Networking"]
  },
  {
    id: "azure-az305-fc-343",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "How does Microsoft Entra Workload ID give an AKS pod an Azure identity without a secret?",
    hint: "Token exchange through a federated credential.",
    back: "Enable the <strong>OIDC issuer</strong> and workload identity on the cluster, create a user-assigned managed identity (or app registration), and add a <strong>federated identity credential</strong> that trusts the cluster's issuer and a specific <strong>namespace/service account</strong>. Pods using that service account receive a projected token that the Azure Identity SDK exchanges for an Entra access token. Each workload gets its own identity; it replaces the deprecated pod-managed identity.",
    tags: ["AKS", "Workload identity"]
  },
  {
    id: "azure-az305-fc-344",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d4",
    front: "AKS scaling layers: HPA, VPA, KEDA, cluster autoscaler and node auto-provisioning. What does each scale?",
    hint: "Pods sideways, pods up, events, nodes.",
    back: "<strong>HPA</strong>: adds or removes pod replicas based on CPU, memory or custom metrics. <strong>VPA</strong>: adjusts the CPU and memory requests of pods. <strong>KEDA</strong>: event-driven pod scaling from sources such as queue length or Kafka lag, including to zero, driving an HPA under the hood. <strong>Cluster autoscaler</strong>: adds nodes to a node pool when pods are pending and removes idle ones. <strong>Node auto-provisioning</strong> (Karpenter-based) picks suitable VM sizes for pending pods automatically.",
    tags: ["AKS", "Autoscaling", "KEDA"]
  },
  {
    id: "azure-az305-fc-345",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "AKS upgrades: cluster auto-upgrade channel vs node OS upgrade channel?",
    hint: "Kubernetes version vs the node image underneath.",
    back: "The <strong>cluster auto-upgrade channel</strong> (none, patch, stable, rapid) moves the Kubernetes version of the control plane and nodes. The <strong>node OS upgrade channel</strong> (None, Unmanaged, SecurityPatch, NodeImage) keeps the node operating system patched independently of the Kubernetes version. Pair both with <strong>planned maintenance windows</strong> so disruptive operations happen in approved hours, and use pod disruption budgets so drains stay safe.",
    tags: ["AKS", "Upgrades", "Planned maintenance"]
  },
  {
    id: "azure-az305-fc-346",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Azure Container Registry tiers: what does Premium add over Basic and Standard?",
    hint: "Multi-region and private networking.",
    back: "All tiers host images and artifacts, integrate with Entra ID and support ACR Tasks. <strong>Standard</strong> adds more storage and throughput than Basic. <strong>Premium</strong> adds <strong>geo-replication</strong> (one registry name, replicas in several regions), <strong>private endpoints</strong> and firewall rules, <strong>customer-managed keys</strong>, and the highest storage and concurrent operation limits. Multi-region AKS or network isolation requirements point to Premium.",
    tags: ["Container Registry", "Tiers"]
  },
  {
    id: "azure-az305-fc-347",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d4",
    front: "Restricting access to the AKS API server: authorized IP ranges vs private cluster vs API server VNet integration?",
    hint: "Is the endpoint still public?",
    back: "<strong>Authorized IP ranges</strong>: the API server stays <strong>public</strong> but only accepts listed source IPs; quick, but not private. <strong>Private cluster</strong>: the API server is reached through a <strong>private endpoint</strong> in your VNet with private DNS, so there is no public endpoint; tooling must run from connected networks. <strong>API server VNet integration</strong>: the API server is projected into a delegated subnet in your VNet, giving private access without a private endpoint and allowing public access to be toggled.",
    tags: ["AKS", "Security", "Private cluster"]
  },
  {
    id: "azure-az305-fc-348",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "AKS scheduling: taints and tolerations vs node selectors and affinity. What does each do?",
    hint: "One repels, the other attracts.",
    back: "A <strong>taint</strong> on nodes <strong>repels</strong> every pod that does not carry a matching <strong>toleration</strong>, keeping general workloads off special nodes such as GPU or Spot pools. A <strong>node selector</strong> or <strong>node affinity</strong> <strong>attracts</strong> a pod to nodes with certain labels. A toleration only permits scheduling on tainted nodes; it does not force it, so dedicate nodes by using both a taint and an affinity or selector.",
    tags: ["AKS", "Scheduling"]
  },
  {
    id: "azure-az305-fc-349",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "When should a design choose Azure Red Hat OpenShift instead of AKS?",
    hint: "The organisation already speaks OpenShift.",
    back: "When teams already depend on <strong>OpenShift</strong> constructs and tooling (routes, templates, the OpenShift console, Operators from OperatorHub, the Red Hat ecosystem) and want a <strong>fully managed</strong> service <strong>jointly engineered and supported by Microsoft and Red Hat</strong>, with a financially backed SLA. AKS is plain managed Kubernetes and would require converting OpenShift-specific resources. Self-managed OpenShift on VMs keeps the tooling but not the managed service.",
    tags: ["Azure Red Hat OpenShift", "AKS"]
  },
  {
    id: "azure-az305-fc-350",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "VM maintenance configurations: what can the Host, OS image and Guest scopes each control?",
    hint: "Platform updates, scale set images, and patches inside the VM.",
    back: "<strong>Host</strong> scope controls when platform updates that do not require a reboot are applied to <strong>Azure Dedicated Hosts</strong> and <strong>isolated VMs</strong>, within a maintenance window you define. <strong>OS image</strong> scope schedules automatic OS image upgrades for <strong>scale sets</strong>. <strong>Guest</strong> scope schedules operating system and application patching inside VMs and Arc-enabled servers through <strong>Azure Update Manager</strong>. Ordinary shared-host VMs cannot defer host maintenance this way.",
    tags: ["Maintenance configurations", "Virtual machines"]
  }
];

export default AZURE_AZ305_FLASHCARDS_14;
