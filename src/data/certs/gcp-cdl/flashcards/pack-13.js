export const GCP_CDL_FLASHCARDS_13 = [
  {
    id: 'gcp-cdl-fc-301',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What is rehosting (lift and shift), and when is it the right call?',
    hint: 'Speed over improvement.',
    back: 'Moving workloads to the cloud with <strong>minimal or no changes</strong>, for example VMs onto Compute Engine. Choose it when <strong>speed and low risk</strong> matter most, such as a data center exit deadline. It delivers few cloud-native benefits at first, so plan to optimise after the move.',
    tags: ['Rehost', 'Migration']
  },
  {
    id: 'gcp-cdl-fc-302',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Replatform vs refactor: what is the difference?',
    hint: 'Swap a component, or change the code?',
    back: '<strong>Replatform</strong>: move the workload and make targeted optimisations without changing its core architecture, such as moving a self-managed database to Cloud SQL. <strong>Refactor</strong>: modify the application code to use cloud capabilities, such as splitting a monolith into microservices. Refactoring costs more but unlocks more scalability and agility.',
    tags: ['Replatform', 'Refactor']
  },
  {
    id: 'gcp-cdl-fc-303',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Retire vs retain: when does each apply to a workload?',
    hint: 'Switch it off, or leave it where it is?',
    back: '<strong>Retire</strong>: the workload no longer delivers value (unused, duplicated by another system), so decommission it and save the migration effort. <strong>Retain</strong>: the workload still matters but should stay where it is for now, for example because it is due for replacement, is too risky to move yet, or faces a regulatory constraint.',
    tags: ['Retire', 'Retain']
  },
  {
    id: 'gcp-cdl-fc-304',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Refactor vs reimagine: how do you tell them apart in a scenario?',
    hint: 'Same process, new code; or new process altogether?',
    back: '<strong>Refactor</strong> keeps the <strong>existing business process</strong> but restructures the application\'s code to use cloud capabilities. <strong>Reimagine</strong> rethinks the <strong>process itself</strong> and builds a new cloud-native solution, often with AI or SaaS, for example replacing paper-based claims with photo-based, AI-triaged claims. If the scenario says "rather than moving the old system", think reimagine.',
    tags: ['Reimagine', 'Refactor']
  },
  {
    id: 'gcp-cdl-fc-305',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What are the four phases of a Google Cloud migration?',
    hint: 'Learn, design, move, improve.',
    back: '<strong>Assess</strong> (discover workloads, dependencies and costs), <strong>Plan</strong> (build the cloud foundation and prioritise workloads), <strong>Deploy</strong> (move the workloads) and <strong>Optimise</strong> (improve performance and cost using cloud capabilities). Discovery and assessment always comes first.',
    tags: ['Migration phases', 'Discovery and assessment']
  },
  {
    id: 'gcp-cdl-fc-306',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What does Migration Center do in a migration program?',
    hint: 'The map before the journey.',
    back: 'It is Google Cloud\'s hub for the <strong>assess and plan</strong> phases: it <strong>discovers</strong> servers and applications, collects utilisation and dependency data, and produces <strong>cost estimates and TCO comparisons</strong> for running them on Google Cloud, so teams can group workloads and pick a migration approach for each.',
    tags: ['Migration Center', 'Discovery and assessment']
  },
  {
    id: 'gcp-cdl-fc-307',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Match the migration tool to the job: VMware Engine, Migrate to Virtual Machines, Migrate to Containers, Database Migration Service.',
    hint: 'Keep VMware, move VMs, containerise, move databases.',
    back: '<strong>Google Cloud VMware Engine</strong>: run VMware workloads unchanged with existing VMware tools. <strong>Migrate to Virtual Machines</strong>: rehost VMs from on premises or other clouds onto Compute Engine. <strong>Migrate to Containers</strong>: replatform suitable VMs into containers for GKE or Cloud Run. <strong>Database Migration Service</strong>: move databases to Cloud SQL or AlloyDB with minimal downtime.',
    tags: ['Migration tools', 'Migration']
  },
  {
    id: 'gcp-cdl-fc-308',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'In migration language, what is a workload?',
    hint: 'Bigger than a server.',
    back: 'A unit of work that delivers a business function: an <strong>application or service together with the compute, storage, networking and data</strong> it needs. One workload often spans several servers, which is why migration plans count workloads rather than machines.',
    tags: ['Workload', 'Migration terms']
  },
  {
    id: 'gcp-cdl-fc-309',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Virtual machine vs container: what does each include?',
    hint: 'Who brings the operating system?',
    back: 'A <strong>virtual machine</strong> includes a <strong>full guest operating system</strong> on virtualised hardware provided by a hypervisor. A <strong>container</strong> packages the <strong>application and its dependencies</strong> but <strong>shares the host\'s operating system kernel</strong>, so it is smaller, starts in seconds and runs consistently wherever a container runtime exists.',
    tags: ['Virtual machines', 'Containers']
  },
  {
    id: 'gcp-cdl-fc-310',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'When is a VM a better choice than a container?',
    hint: 'Think about OS control and vendor support.',
    back: 'Choose a <strong>VM</strong> when the software needs <strong>full OS control</strong> (a specific OS version, kernel modules, custom drivers), is a legacy or vendor product not supported in containers, or must be rehosted unchanged. Choose <strong>containers</strong> for portable, fast-starting, densely packed applications, especially microservices.',
    tags: ['Virtual machines', 'Containers']
  },
  {
    id: 'gcp-cdl-fc-311',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What is a microservices architecture?',
    hint: 'Many small services instead of one big application.',
    back: 'An application built as a set of <strong>small, independent services</strong>, each owning one business capability and communicating through <strong>APIs</strong>. Each service can be <strong>developed, deployed and scaled separately</strong>, so teams release faster and a busy component scales without scaling everything.',
    tags: ['Microservices', 'Application architecture']
  },
  {
    id: 'gcp-cdl-fc-312',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What is the main trade-off of moving from a monolith to microservices?',
    hint: 'Agility has an operational price.',
    back: 'You gain <strong>independent deployment, targeted scaling and fault isolation</strong>, but take on <strong>more operational complexity</strong>: many services to deploy, monitor and secure, plus network calls between them. Managed platforms such as GKE and Cloud Run, and API management, reduce that burden.',
    tags: ['Microservices', 'Trade-offs']
  },
  {
    id: 'gcp-cdl-fc-313',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What does "serverless" mean for a business?',
    hint: 'Servers still exist; you just never see them.',
    back: 'The provider <strong>provisions, scales and maintains all infrastructure</strong>; you deploy code or containers. Capacity scales <strong>automatically with demand, even to zero</strong>, and you <strong>pay only for actual usage</strong>. On Google Cloud, Cloud Run and Cloud Run functions are the main serverless compute services.',
    tags: ['Serverless', 'Compute terms']
  },
  {
    id: 'gcp-cdl-fc-314',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Spot VMs vs standard VMs: what do you gain and what do you give up?',
    hint: 'Big discount, one big caveat.',
    back: 'Spot VMs cost <strong>60-91% less</strong> than standard VMs because they use spare capacity, but Compute Engine can <strong>preempt them at any time</strong> with little notice. Use them for fault-tolerant, restartable work such as batch processing, rendering or CI; keep standard VMs for workloads that must stay up.',
    tags: ['Spot VMs', 'Cost optimization']
  },
  {
    id: 'gcp-cdl-fc-315',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What is Kubernetes?',
    hint: 'A conductor for containers.',
    back: 'An <strong>open-source container orchestration</strong> system, originally created at Google. It <strong>schedules containers</strong> across a cluster of machines, <strong>restarts or replaces failed ones</strong>, scales workloads and performs <strong>rolling updates</strong>. Because it is open source, the same workloads can run on premises and on any cloud.',
    tags: ['Kubernetes', 'Containers']
  },
  {
    id: 'gcp-cdl-fc-316',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Load balancing vs autoscaling: what does each do, and how do they work together?',
    hint: 'Distribute vs resize.',
    back: '<strong>Load balancing</strong> distributes incoming requests across healthy instances (and, globally, routes users to the nearest healthy region). <strong>Autoscaling</strong> adds or removes instances as demand changes. Together, autoscaling keeps the right amount of capacity and the load balancer spreads traffic across whatever capacity exists.',
    tags: ['Load balancing', 'Autoscaling']
  },
  {
    id: 'gcp-cdl-fc-317',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What is a managed service, and what is its business value?',
    hint: 'Who does the patching?',
    back: 'A cloud service where the <strong>provider runs the operational work</strong>: provisioning, patching, upgrades, backups, replication and scaling. Examples: Cloud SQL, BigQuery, GKE Autopilot, Cloud Run. Value: engineers stop doing <strong>undifferentiated maintenance</strong> and spend time on features, with Google\'s reliability built in.',
    tags: ['Managed services', 'Operational efficiency']
  },
  {
    id: 'gcp-cdl-fc-318',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'With Compute Engine, what does Google manage and what does the customer manage?',
    hint: 'IaaS draws the line at the operating system.',
    back: '<strong>Google</strong> manages the physical data centers, servers, storage hardware, network and hypervisor. The <strong>customer</strong> manages the guest <strong>operating system</strong>, patches, installed software, applications, data and access settings. That control is why Compute Engine suits rehosted and legacy workloads.',
    tags: ['Compute Engine', 'IaaS']
  },
  {
    id: 'gcp-cdl-fc-319',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Name the Compute Engine machine families and a typical use for each.',
    hint: 'Balanced, fast CPU, lots of RAM, accelerators.',
    back: '<strong>General-purpose</strong> (E2, N-series, C4): balanced price-performance for web servers and business apps. <strong>Compute-optimised</strong>: highest per-core performance for gaming servers or HPC. <strong>Memory-optimised</strong> (M-series): very large in-memory databases such as SAP HANA. <strong>Accelerator-optimised</strong> (A and G series): GPUs for AI training, inference and graphics.',
    tags: ['Compute Engine', 'Machine types']
  },
  {
    id: 'gcp-cdl-fc-320',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Why would a company use custom machine types?',
    hint: 'Predefined sizes rarely fit exactly.',
    back: 'They let you pick <strong>vCPU count and memory independently</strong> (within supported ratios), so a VM matches what the workload actually needs. That avoids paying for idle vCPUs or RAM that a predefined machine type would force you to buy, which adds up across large fleets.',
    tags: ['Custom machine types', 'Rightsizing']
  },
  {
    id: 'gcp-cdl-fc-321',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'When are sole-tenant nodes the right Compute Engine choice?',
    hint: 'Hardware you do not share.',
    back: 'When VMs must run on <strong>physical hosts dedicated to one customer</strong>: compliance or security rules that forbid sharing hardware with other tenants, or <strong>bring-your-own-licence</strong> software licensed per physical core or socket. They cost more than shared hosts, so use them only when isolation or licensing requires it.',
    tags: ['Sole-tenant nodes', 'Licensing']
  },
  {
    id: 'gcp-cdl-fc-322',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What does a managed instance group (MIG) add to plain VMs?',
    hint: 'Identical VMs that fix and resize themselves.',
    back: 'A MIG runs <strong>identical VMs from an instance template</strong> and adds <strong>autohealing</strong> (recreate VMs that fail a health check), <strong>autoscaling</strong> (add or remove VMs with load), rolling updates and optional multi-zone placement. It turns a set of servers into a self-repairing, elastic service behind a load balancer.',
    tags: ['Managed instance groups', 'Autohealing']
  },
  {
    id: 'gcp-cdl-fc-323',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Sustained use discounts, committed use discounts, Spot VMs: which pricing fits which pattern?',
    hint: 'Automatic, promised, interruptible.',
    back: '<strong>Sustained use discounts</strong>: applied <strong>automatically</strong> to eligible machine types that run for a large part of the month, with no commitment. <strong>Committed use discounts</strong>: bigger savings for a <strong>one- or three-year commitment</strong>, ideal for steady baselines. <strong>Spot VMs</strong>: the deepest discount for <strong>interruptible</strong> work. Use on-demand for everything unpredictable.',
    tags: ['Pricing', 'Compute Engine']
  },
  {
    id: 'gcp-cdl-fc-324',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Region vs zone: how should VMs be placed for high availability?',
    hint: 'A region contains several zones.',
    back: 'A <strong>region</strong> is a geographic area; a <strong>zone</strong> is an isolated deployment area inside it with independent power and networking. Spread VMs across <strong>multiple zones in a region</strong> behind a load balancer to survive a zone failure; use <strong>multiple regions</strong> when you must survive a regional outage or serve users on other continents.',
    tags: ['Regions and zones', 'High availability']
  },
  {
    id: 'gcp-cdl-fc-325',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'How does Compute Engine billing help avoid paying for idle capacity?',
    hint: 'Small billing increments and helpful suggestions.',
    back: 'VMs are billed <strong>per second</strong> (after a one-minute minimum), so stopping them stops compute charges, and there is no upfront hardware purchase. <strong>Rightsizing recommendations</strong> flag VMs that are consistently over-provisioned and suggest smaller machine types, and autoscaling removes capacity when demand drops.',
    tags: ['Compute Engine', 'Cost optimization']
  }
];

export default GCP_CDL_FLASHCARDS_13;
