export const GCP_CDL_QUESTIONS_13 = [
  {
    id: "gcp-cdl-301",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "The data center lease ends in five months",
    scenario: "A regional distributor's co-location lease expires in five months and will not be renewed. It runs 180 servers hosting stable business applications, and the priority is to get everything out of the facility on time with as little change to the applications as possible.",
    question: "Which migration approach best fits this priority?",
    options: [
      { id: 'A', text: "Rehost the servers to Compute Engine with minimal or no changes, then optimise them later." },
      { id: 'B', text: "Refactor each application into cloud-native microservices before moving it to Google Cloud." },
      { id: 'C', text: "Retain the applications in the current facility and extend the lease one year at a time." },
      { id: 'D', text: "Reimagine the underlying business processes and build replacement applications from scratch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rehosting, often called lift and shift, moves workloads to the cloud with few or no modifications, which makes it the fastest, lowest-risk way to exit a data center on a fixed deadline; optimisation can follow once the applications are running on Compute Engine. Refactoring into microservices and reimagining the processes both require substantial redesign and development, which cannot fit a five-month window for 180 VMs. Retaining the applications contradicts the fact that the lease will not be renewed.",
    referenceUrl: "https://docs.cloud.google.com/architecture/migration-to-gcp-getting-started",
    tags: ["Rehost", "Lift and shift", "Migration"]
  },
  {
    id: "gcp-cdl-302",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "An expense tool nobody has logged into",
    scenario: "During discovery for a cloud migration, a manufacturer finds an old expense-reporting application whose functions were replaced by the new ERP system two years ago. Access logs show no logins in eighteen months, yet it still runs on two servers that the IT team patches monthly.",
    question: "What should the migration plan do with this application?",
    options: [
      { id: 'A', text: "Retire it and decommission the two servers it runs on" },
      { id: 'B', text: "Refactor it into containers so it can run on GKE later" },
      { id: 'C', text: "Replatform it onto a managed database to reduce patching" },
      { id: 'D', text: "Rehost it to Compute Engine so it keeps running unchanged" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Retiring means switching off workloads that no longer deliver value. An application whose functions have been replaced and that nobody has used in eighteen months should be decommissioned, saving migration effort, licences and ongoing maintenance. Rehosting, replatforming or refactoring would all spend time and money moving or improving something the business does not need.",
    referenceUrl: "https://docs.cloud.google.com/migration-center/docs/migration-center-overview",
    tags: ["Retire", "Migration", "Discovery"]
  },
  {
    id: "gcp-cdl-303",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "A claims system tied to a mainframe for now",
    scenario: "An insurer is moving most workloads to Google Cloud. Its core policy administration system runs on a mainframe, is due to be replaced by a new platform in three years, and would be expensive and risky to move before then. Leadership wants to focus migration effort where it pays back soonest.",
    question: "Which approach should the insurer take for the policy system?",
    options: [
      { id: 'A', text: "Refactor it into microservices on GKE before the new platform is ready to take over" },
      { id: 'B', text: "Rehost it immediately onto Compute Engine VMs so the mainframe can be switched off" },
      { id: 'C', text: "Retain it on premises for now and revisit the decision when the replacement is ready" },
      { id: 'D', text: "Retire it this year and ask policy staff to use spreadsheets until the new platform" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Retaining means deliberately keeping a workload where it is, often because moving it now is too costly or risky, or because it will be replaced soon. With a replacement due in three years, keeping the mainframe system in place and focusing migration on workloads with faster payback is sensible. Rehosting mainframe code onto VMs is not a simple lift and shift and adds risk for a short life. Refactoring invests heavily in a system about to be replaced. Retiring a core system before its replacement exists would disrupt the business.",
    referenceUrl: "https://docs.cloud.google.com/architecture/migration-to-gcp-getting-started",
    tags: ["Retain", "Migration strategy"]
  },
  {
    id: "gcp-cdl-304",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Stop patching the database, keep the code",
    scenario: "A travel agency's booking application runs on VMs with a self-managed MySQL database that the two-person ops team spends hours patching and backing up. For the migration, the agency wants to shed that database administration work but cannot afford to change the application code in any meaningful way.",
    question: "Which migration approach describes what the agency should do?",
    options: [
      { id: 'A', text: "Refactor the code into event-driven functions that use a new NoSQL database" },
      { id: 'B', text: "Replatform by moving the database onto Cloud SQL while the app code stays unchanged" },
      { id: 'C', text: "Retain the whole application on premises until the ops team has more staff to spare" },
      { id: 'D', text: "Rehost both the application and the self-managed MySQL VM exactly as they are today" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Replatforming moves a workload and makes targeted optimisations for the cloud, such as swapping a self-managed database for a managed service, without changing the application's core architecture. Cloud SQL for MySQL takes over patching, backups and replication while the application keeps using MySQL. Rehosting as-is keeps all the database administration work. Refactoring into functions with a new database requires major code changes the agency cannot afford. Retaining the workload does nothing to relieve the ops team.",
    referenceUrl: "https://docs.cloud.google.com/sql/docs/introduction",
    tags: ["Replatform", "Cloud SQL", "Managed services"]
  },
  {
    id: "gcp-cdl-305",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "One slow checkout drags down the whole store",
    scenario: "An online retailer's storefront is one large codebase. During sales, the checkout function needs ten times more capacity than browsing, but the whole application must be scaled together, and every small change requires a full redeployment. The CTO is prepared to invest in code changes to fix this.",
    question: "Which migration approach addresses the CTO's goals?",
    options: [
      { id: 'A', text: "Refactor the codebase into independent services that can scale and deploy separately" },
      { id: 'B', text: "Retire the storefront and direct customers to third-party marketplaces during sales" },
      { id: 'C', text: "Rehost the codebase onto larger Compute Engine VMs that can absorb the sales peaks" },
      { id: 'D', text: "Replatform the database onto Cloud SQL and keep the single codebase as it is today" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Refactoring modifies the application's code to take advantage of cloud capabilities; breaking a monolith into independent services lets checkout scale on its own and lets teams deploy changes to one service without redeploying everything. Rehosting on bigger VMs still scales the whole monolith together and keeps full redeployments. Replatforming the database improves operations but leaves the scaling and deployment problems in the codebase. Retiring the storefront abandons the business's own channel.",
    referenceUrl: "https://cloud.google.com/learn/what-is-microservices-architecture",
    tags: ["Refactor", "Microservices", "Migration"]
  },
  {
    id: "gcp-cdl-306",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Rethinking claims instead of moving the old system",
    scenario: "A car insurer's claims process relies on a twenty-year-old application built around paper forms and manual adjuster reviews. Rather than moving or tidying up that application, the board wants a new customer experience in which drivers submit photos from their phones and AI triages most claims in minutes, with the paper-based workflow abolished.",
    question: "Which migration approach does the board's vision represent?",
    options: [
      { id: 'A', text: "Reimagine: redesign the workflow and build a new cloud-native solution" },
      { id: 'B', text: "Replatform: move the application and swap in managed services where possible" },
      { id: 'C', text: "Rehost: move the application to Compute Engine with no changes to the code" },
      { id: 'D', text: "Retain: keep the existing application and workflow running on premises as they are" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Reimagining goes beyond changing where or how the old application runs: the organisation rethinks the business process itself and builds a new solution with cloud-native and AI capabilities, here a mobile, photo-based claims flow with automated triage. Refactoring would restructure the existing code but keep the paper-era process. Replatforming and rehosting move the existing application largely as it is. Retaining keeps the current system, which is the opposite of the board's vision.",
    referenceUrl: "https://cloud.google.com/learn/what-is-cloud-native",
    tags: ["Reimagine", "Migration strategy", "Cloud native"]
  },
  {
    id: "gcp-cdl-307",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Nobody knows exactly what runs where",
    scenario: "A hospital group has decided to move to Google Cloud, but its IT inventory is out of date: nobody is sure how many servers exist, which applications depend on each other, or what running them costs today. The CIO wants to build a realistic migration plan.",
    question: "What should the hospital group do first?",
    options: [
      { id: 'A', text: "Run discovery and assessment, for example with Migration Center, to map the estate" },
      { id: 'B', text: "Refactor every application into containers so their dependencies become clear" },
      { id: 'C', text: "Start rehosting the largest servers immediately to build momentum for the program" },
      { id: 'D', text: "Sign a multi-year committed use discount sized to the servers they can remember" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Discovery and assessment comes first in a migration: it inventories servers and applications, maps dependencies, measures utilisation and estimates cloud costs, giving the evidence to group workloads and choose an approach for each. Migration Center provides discovery, assessment and cost estimates for this phase. Moving servers before understanding dependencies risks breaking applications. Refactoring everything is a costly decision that should follow assessment, not replace it. Committing spend based on memory risks buying the wrong capacity.",
    referenceUrl: "https://docs.cloud.google.com/migration-center/docs/migration-center-overview",
    tags: ["Discovery and assessment", "Migration Center"]
  },
  {
    id: "gcp-cdl-308",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Counting what actually has to move",
    scenario: "A migration consultant tells a retailer's executives that the program covers 42 workloads. The CFO had counted 300 servers and asks why the numbers differ, and what the consultant means by the term.",
    question: "Which explanation of a workload is accurate?",
    options: [
      { id: 'A', text: "An application or service together with the compute, storage and data it needs to run" },
      { id: 'B', text: "A single physical server, counted once regardless of what software it happens to host" },
      { id: 'C', text: "A software licence, counted once for each vendor contract the company currently holds" },
      { id: 'D', text: "A department's full IT budget, counted once per business unit that pays for services" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In cloud migration, a workload is a unit of work that delivers a business function: an application or service together with the compute, storage, networking and data resources it depends on. One workload can span many servers, which is why 42 workloads can map to 300 servers. Treating each server as a workload ignores that servers belong together. Licences and departmental budgets are commercial and organisational concepts, not units of migration.",
    referenceUrl: "https://docs.cloud.google.com/architecture/migration-to-gcp-getting-started",
    tags: ["Workload", "Migration terms"]
  },
  {
    id: "gcp-cdl-309",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "A VMware estate that must move before renewal",
    scenario: "A bank runs 600 virtual machines on VMware vSphere and must leave its data center before a hardware renewal in six months. Its operations team wants to continue using the same vSphere tooling, processes and skills after the move, and the applications must not be modified.",
    question: "Which option best meets these constraints?",
    options: [
      { id: 'A', text: "Rebuild the applications as new cloud-native software before the hardware renewal date" },
      { id: 'B', text: "Refactor the applications into serverless services on Cloud Run and adopt new tooling" },
      { id: 'C', text: "Rehost the VMs onto Google Cloud VMware Engine and run them with the existing tooling" },
      { id: 'D', text: "Migrate to Containers, converting the VMware VMs into container workloads that run on GKE" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Google Cloud VMware Engine runs a native VMware stack (vSphere, vSAN, NSX) as a managed service on Google Cloud, so VMs can be rehosted without modification and the team keeps its familiar tools and processes, which fits both the six-month deadline and the operational requirement. Migrate to Containers is a replatforming tool that changes how workloads run and what tools manage them. Refactoring to Cloud Run and rebuilding the applications both require modifying the software and far more time.",
    referenceUrl: "https://docs.cloud.google.com/vmware-engine/docs/overview",
    tags: ["VMware Engine", "Rehost", "Migration"]
  },
  {
    id: "gcp-cdl-310",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "What is actually inside a virtual machine",
    scenario: "A retail chain's finance director hears that the company's point-of-sale back office will run on virtual machines after the migration. She asks the IT lead what a virtual machine is, in plain terms.",
    question: "Which description should the IT lead give?",
    options: [
      { id: 'A', text: "A software-defined computer with its own full operating system, running on shared physical hardware" },
      { id: 'B', text: "A single function that runs only when an event occurs and is billed per invocation and duration" },
      { id: 'C', text: "A physical server reserved in a data center for one customer, including its dedicated power feed" },
      { id: 'D', text: "A lightweight package of an application and its libraries that shares the host's operating system" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A virtual machine is a software emulation of a complete computer, with its own virtual CPU, memory, disks and full guest operating system, and a hypervisor lets many VMs share one physical host. A package that shares the host operating system describes a container. A function triggered by events and billed per invocation describes serverless functions. A dedicated physical server is bare metal, not a virtual machine.",
    referenceUrl: "https://cloud.google.com/learn/what-is-a-virtual-machine",
    tags: ["Virtual machines", "Compute terms"]
  },
  {
    id: "gcp-cdl-311",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "It worked on the developer's laptop",
    scenario: "A software team keeps hitting bugs that appear only in production because the servers have different library versions from developer laptops. The team wants to package each application with everything it needs so it runs the same way on a laptop, in testing and in the cloud.",
    question: "Which technology addresses this problem most directly?",
    options: [
      { id: 'A', text: "A load balancer, so requests are spread evenly across production servers" },
      { id: 'B', text: "Larger VMs, so production has more memory and CPU than developer laptops" },
      { id: 'C', text: "Committed use discounts, so the production servers cost less to keep running" },
      { id: 'D', text: "Containers, which bundle code with its dependencies into a portable image" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Containers package an application together with its libraries, runtime and configuration into an image that runs consistently wherever a container runtime exists, removing the differences between laptop, test and production environments. Bigger VMs add resources but do not fix mismatched library versions. A load balancer distributes traffic, which does not change what software is installed. Committed use discounts reduce cost and have no effect on consistency.",
    referenceUrl: "https://cloud.google.com/learn/what-are-containers",
    tags: ["Containers", "Portability"]
  },
  {
    id: "gcp-cdl-312",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Five teams waiting on one release train",
    scenario: "A bank's mobile app backend is maintained by five teams: payments, cards, loans, notifications and profiles. Because everything ships as one application, a delay in the loans team's work holds back releases from all the others. Leadership wants each team to release on its own schedule.",
    question: "Which architectural concept supports this goal?",
    options: [
      { id: 'A', text: "Microservices, where each capability is a separately deployable service" },
      { id: 'B', text: "Vertical scaling, where the one application gets a larger machine type" },
      { id: 'C', text: "Data replication, where the database is copied to a second cloud region" },
      { id: 'D', text: "Sole-tenant nodes, where the application runs on dedicated physical hosts" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A microservices architecture splits an application into small, independent services that communicate through APIs; each team owns and deploys its service on its own schedule, so one team's delay no longer blocks the others. Vertical scaling adds capacity to the same single deployment. Sole-tenant nodes change where the application runs, not how it is released. Replicating the database improves resilience but leaves the release coupling in place.",
    referenceUrl: "https://cloud.google.com/learn/what-is-microservices-architecture",
    tags: ["Microservices", "Application architecture"]
  },
  {
    id: "gcp-cdl-313",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "A ticketing site that is quiet most of the year",
    scenario: "A small theatre sells tickets online. For most of the year its website receives a few requests an hour, but on the morning a popular show goes on sale traffic jumps a thousandfold for two hours. The theatre has no staff to manage servers and wants to pay only when the site is used.",
    question: "Which approach best matches these needs?",
    options: [
      { id: 'A', text: "A self-managed Kubernetes cluster that the theatre's staff operate" },
      { id: 'B', text: "Dedicated physical servers sized for the busiest morning of the year" },
      { id: 'C', text: "Serverless computing that scales automatically, even down to zero" },
      { id: 'D', text: "A fixed pool of VMs covered by a three-year committed use discount" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Serverless computing removes server management entirely: the provider provisions and scales capacity automatically with demand, including down to zero when idle, and charges only for actual usage, which suits spiky, mostly idle traffic and a team with no ops staff. Physical servers and a committed VM pool both pay for peak capacity all year. A self-managed Kubernetes cluster requires operational skills the theatre does not have.",
    referenceUrl: "https://cloud.google.com/discover/what-is-serverless-computing",
    tags: ["Serverless", "Compute terms"]
  },
  {
    id: "gcp-cdl-314",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Nightly video transcoding on a budget",
    scenario: "A media company transcodes newly uploaded videos into several formats each night. Each file is processed independently, a failed file can simply be retried, and there is no penalty if the batch finishes a little later than usual. The CFO wants compute costs cut as far as possible.",
    question: "Which Compute Engine option fits best?",
    options: [
      { id: 'A', text: "Spot VMs that use spare capacity at a large discount" },
      { id: 'B', text: "On-demand VMs with a standard reservation for every night" },
      { id: 'C', text: "Sole-tenant nodes that dedicate physical hosts to the company" },
      { id: 'D', text: "Memory-optimised VMs sized to hold every video in memory" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Spot VMs offer Compute Engine's spare capacity at a steep discount compared with standard VMs, with the trade-off that Google can reclaim them at any time; independent, retryable batch jobs with flexible deadlines tolerate that trade-off well. Sole-tenant nodes cost more and address isolation or licensing, not batch cost. On-demand VMs with reservations pay full price for assured capacity the job does not need. Memory-optimised machines are priced for in-memory databases, and transcoding does not need everything held in memory.",
    referenceUrl: "https://docs.cloud.google.com/compute/docs/instances/spot",
    tags: ["Spot VMs", "Batch processing", "Cost optimization"]
  },
  {
    id: "gcp-cdl-315",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Hundreds of containers and a tired ops team",
    scenario: "A logistics platform now runs about 400 containerised services across many hosts. Operators currently decide by hand where each container runs, restart crashed ones and roll out new versions host by host. They want a system that places workloads on hosts, replaces failed ones automatically and handles rolling updates.",
    question: "Which technology is designed for this job?",
    options: [
      { id: 'A', text: "Kubernetes, which orchestrates containers on a cluster of machines" },
      { id: 'B', text: "A relational database, which stores data in tables linked by keys" },
      { id: 'C', text: "A content delivery network, which caches static files near end users" },
      { id: 'D', text: "A hypervisor, which divides one physical host into several virtual machines" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes is an open-source container orchestration system: it schedules containers onto machines in a cluster, restarts or replaces failed containers to match the desired state, scales workloads and performs rolling updates, which is exactly the manual work the operators want automated. A hypervisor creates VMs but does not manage containers. A CDN accelerates content delivery to users. A relational database stores data and plays no part in running containers.",
    referenceUrl: "https://cloud.google.com/learn/what-is-kubernetes",
    tags: ["Kubernetes", "Containers", "Orchestration"]
  },
  {
    id: "gcp-cdl-316",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Two terms the steering committee keeps mixing up",
    scenario: "In a steering committee meeting, one executive says the load balancer will add servers when traffic grows, and another says autoscaling will spread requests over servers. The architect needs to correct both statements in one sentence.",
    question: "Which statement is correct?",
    options: [
      { id: 'A', text: "Load balancing and autoscaling are the same feature under two different product names" },
      { id: 'B', text: "Load balancing adds servers under heavy load; autoscaling routes users to the nearest one" },
      { id: 'C', text: "Load balancing distributes traffic among instances; autoscaling sets how many instances run" },
      { id: 'D', text: "Load balancing backs up data between regions; autoscaling encrypts traffic between servers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A load balancer distributes incoming requests across healthy backend instances, and Google Cloud's global load balancing can also route users to the nearest healthy region. Autoscaling adds or removes instances as load changes, for example in a managed instance group. They work together: autoscaling adjusts capacity and the load balancer spreads traffic over whatever capacity exists. They are not the same feature, the statement that swaps their roles is backwards, and neither feature performs backups or encryption.",
    referenceUrl: "https://docs.cloud.google.com/load-balancing/docs/load-balancing-overview",
    tags: ["Load balancing", "Autoscaling"]
  },
  {
    id: "gcp-cdl-317",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Engineers spending weekends on upgrades",
    scenario: "A fintech startup's engineers spend many weekends applying OS updates, upgrading database versions and testing restores instead of building product features. The CEO wants that undifferentiated work taken off the engineers' plates so they can focus on the product.",
    question: "Which approach reflects the CEO's goal?",
    options: [
      { id: 'A', text: "Buy sole-tenant nodes so the startup controls exactly when each host is upgraded" },
      { id: 'B', text: "Adopt managed services, where the provider runs patching, upgrades and backups" },
      { id: 'C', text: "Move the same self-managed software onto larger VMs with more CPU and memory" },
      { id: 'D', text: "Keep the servers on premises and hire contractors to do the weekend maintenance" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Managed services, such as Cloud SQL for databases or serverless platforms for applications, hand operational tasks like provisioning, patching, upgrades, backups and scaling to Google, freeing engineers to spend time on features that differentiate the business. Larger VMs keep all the same maintenance. Sole-tenant nodes provide dedicated hardware but the startup still manages its own software. Hiring contractors on premises shifts cost around without gaining the cloud's operational benefits.",
    referenceUrl: "https://docs.cloud.google.com/sql/docs/introduction",
    tags: ["Managed services", "Operational efficiency"]
  },
  {
    id: "gcp-cdl-318",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "A legacy app that needs its own kernel modules",
    scenario: "A laboratory runs a vendor application that installs custom kernel modules, requires a specific older operating system release, keeps state on local disks and runs continuously. The vendor will not support containers. The lab wants to move it to Google Cloud without changing the software.",
    question: "Which compute model is the most suitable target?",
    options: [
      { id: 'A', text: "Serverless containers on Cloud Run that scale to zero between requests" },
      { id: 'B', text: "A GKE Autopilot cluster where Google manages the nodes, OS and kernel modules" },
      { id: 'C', text: "Event-driven Cloud Run functions triggered each time a sample arrives" },
      { id: 'D', text: "Compute Engine VMs running the required OS version and modules" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Compute Engine VMs give full control of the operating system, including choosing an older distribution and installing kernel drivers, and they run continuously with persistent disks, so the vendor application can be rehosted unchanged. Cloud Run and Cloud Run functions run stateless containers or functions on Google-managed infrastructure and do not allow custom kernel modules. GKE Autopilot manages the nodes' operating system for you and also requires containers, which the vendor does not support.",
    referenceUrl: "https://docs.cloud.google.com/compute/docs/overview",
    tags: ["Compute Engine", "Virtual machines", "Legacy applications"]
  },
  {
    id: "gcp-cdl-319",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Why the ERP team is happy with Compute Engine",
    scenario: "An engineering firm moves its ERP servers to Compute Engine. The ERP team keeps full administrator access to the operating systems, installs the vendor's software exactly as before, and no longer has to buy hardware years in advance.",
    question: "Which cloud service model does Compute Engine provide here?",
    options: [
      { id: 'A', text: "Function as a Service, running code only in response to events" },
      { id: 'B', text: "Infrastructure as a Service, providing VMs the customer fully controls" },
      { id: 'C', text: "Platform as a Service, where developers deploy code but never see a VM" },
      { id: 'D', text: "Software as a Service, where the vendor runs the complete application" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Compute Engine is Google Cloud's Infrastructure as a Service offering: customers get on-demand virtual machines on Google's infrastructure, with full control of the operating system and installed software, while Google handles the physical hardware, data centers and network. In SaaS the vendor runs the whole application and customers do not manage servers. Function and platform services abstract the operating system away, which would not let the team install the ERP software as before.",
    referenceUrl: "https://cloud.google.com/learn/what-is-iaas",
    tags: ["Compute Engine", "IaaS"]
  },
  {
    id: "gcp-cdl-320",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Paying for memory the application never uses",
    scenario: "A publisher's content management system needs 6 vCPUs and 40 GB of memory. The closest predefined shapes either lack RAM or bring far more vCPUs than needed, so the company is paying for idle capacity across dozens of VMs.",
    question: "Which Compute Engine capability helps most?",
    options: [
      { id: 'A', text: "Custom machine types that set the vCPU and memory amounts independently" },
      { id: 'B', text: "Machine images that capture a VM's disks, memory settings and configuration as a backup" },
      { id: 'C', text: "Sole-tenant nodes that place the VMs on dedicated physical servers" },
      { id: 'D', text: "Live migration that moves VMs to a new host during planned maintenance" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Custom machine types let customers choose the number of vCPUs and the amount of memory independently, within supported ratios, so VMs match the workload precisely and the company stops paying for capacity it does not use. Live migration keeps VMs running during host maintenance but does not change their size. Machine images are for backup and cloning. Sole-tenant nodes provide dedicated hardware, which usually costs more and does not solve over-provisioning.",
    referenceUrl: "https://docs.cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type",
    tags: ["Compute Engine", "Custom machine types", "Rightsizing"]
  },
  {
    id: "gcp-cdl-321",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "No more weekend maintenance windows",
    scenario: "A payments processor's on-premises servers need a planned outage every quarter for hardware and firmware maintenance, which forces weekend downtime notices to merchants. The operations director asks how Compute Engine handles maintenance on the physical hosts under its VMs.",
    question: "What should the operations director be told?",
    options: [
      { id: 'A', text: "Every VM is restarted during a monthly maintenance window that customers must schedule" },
      { id: 'B', text: "Live migration moves running VMs to another host during maintenance without reboot" },
      { id: 'C', text: "Customers must patch the host firmware themselves through the Google Cloud console" },
      { id: 'D', text: "Host maintenance is avoided only by buying a committed use discount for the VMs" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Compute Engine uses live migration to move running VMs from a host that needs maintenance to another host in the same zone, without rebooting them and usually without users noticing, so infrastructure maintenance no longer requires customer downtime windows. Google, not customers, maintains host hardware and firmware. There is no mandatory monthly restart window for standard VMs. Committed use discounts are a pricing model and have no bearing on maintenance behaviour.",
    referenceUrl: "https://docs.cloud.google.com/compute/docs/instances/live-migration-process",
    tags: ["Compute Engine", "Live migration", "Availability"]
  },
  {
    id: "gcp-cdl-322",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "A web tier that heals and grows on its own",
    scenario: "A ticket reseller runs its web servers on identical Compute Engine VMs. When a VM's application hangs, someone must notice and rebuild it by hand, and during big on-sales the team adds VMs manually. The company wants unhealthy VMs recreated and capacity adjusted automatically.",
    question: "Which Compute Engine feature should the team adopt?",
    options: [
      { id: 'A', text: "A sole-tenant node group that isolates the web servers on dedicated hosts" },
      { id: 'B', text: "A managed instance group with autohealing health checks and autoscaling" },
      { id: 'C', text: "A snapshot schedule that backs up each web server's disk every hour" },
      { id: 'D', text: "A single large VM with a bigger machine type and a persistent disk" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A managed instance group creates identical VMs from an instance template; health-check-based autohealing recreates VMs whose application stops responding, and autoscaling adds or removes VMs based on load, so the web tier repairs itself and follows demand without manual work. One large VM is a single point of failure and does not scale out. Snapshots protect data but do not detect failures or add capacity. Sole-tenant nodes provide isolation, not self-healing or elasticity.",
    referenceUrl: "https://docs.cloud.google.com/compute/docs/instance-groups/autohealing-instances-in-migs",
    tags: ["Managed instance groups", "Autohealing", "Autoscaling"]
  },
  {
    id: "gcp-cdl-323",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Licences counted by physical cores",
    scenario: "A healthcare software company is moving a database product whose existing licences are tied to physical cores on dedicated hardware. Its compliance team also requires that these VMs never share a host with other Google Cloud customers.",
    question: "Which Compute Engine option satisfies both requirements?",
    options: [
      { id: 'A', text: "Spot VMs, which run on spare capacity at a deep discount" },
      { id: 'B', text: "Custom machine types, which set vCPU and memory independently" },
      { id: 'C', text: "Shielded VMs, which verify boot integrity with secure boot" },
      { id: 'D', text: "Sole-tenant nodes, which dedicate hosts to one project" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Sole-tenant nodes are physical Compute Engine servers dedicated to a single customer's VMs, which provides the host-level isolation compliance requires and supports bring-your-own-licence scenarios that are counted on physical cores. Spot VMs share infrastructure and can be reclaimed at any time. Shielded VMs harden a VM against boot-level tampering but still run on shared hosts. Custom machine types change a VM's size, not whether its host is shared.",
    referenceUrl: "https://docs.cloud.google.com/compute/docs/nodes/sole-tenant-nodes",
    tags: ["Sole-tenant nodes", "Licensing", "Compliance"]
  },
  {
    id: "gcp-cdl-324",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Surviving the loss of one data center building",
    scenario: "An e-commerce company is moving its web servers to Compute Engine in a single region near its customers. It wants the site to stay up even if one isolated location in that region suffers a power or network failure.",
    question: "How should the company place its VMs?",
    options: [
      { id: 'A', text: "Place the VMs in a region on another continent to diversify the risk" },
      { id: 'B', text: "Put all the VMs on one large host in one zone for simpler management" },
      { id: 'C', text: "Spread the VMs across several zones in the region behind a load balancer" },
      { id: 'D', text: "Run a single VM and take a daily snapshot to rebuild it after a failure" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A Google Cloud region contains several zones, which are isolated deployment areas with independent failure domains; spreading VMs across zones in the same region, with a load balancer in front, keeps the site running if one zone fails while staying close to customers. Placing everything in one zone makes that zone a single point of failure. Moving to another continent adds latency for customers and does not add redundancy on its own. A single VM restored from a snapshot causes downtime while it is rebuilt.",
    referenceUrl: "https://docs.cloud.google.com/compute/docs/regions-zones",
    tags: ["Regions and zones", "High availability", "Compute Engine"]
  },
  {
    id: "gcp-cdl-325",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "An ERP fleet that will run unchanged for years",
    scenario: "A food manufacturer's ERP system runs on a fixed set of Compute Engine VMs 24 hours a day. Usage has been flat for three years and the system will not be replaced for at least another three. Finance wants a lower price for this predictable usage without risking interruptions.",
    question: "Which pricing option should finance choose?",
    options: [
      { id: 'A', text: "Flex-start VMs that run for up to seven days at a time" },
      { id: 'B', text: "On-demand pricing, which avoids any commitment at all" },
      { id: 'C', text: "Spot VMs, which are deeply discounted but can be reclaimed" },
      { id: 'D', text: "Committed use discounts for a one- or three-year term" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Committed use discounts give a substantial price reduction in exchange for committing to a level of resources or spend for one or three years, and the VMs run normally without interruption, which suits a stable, always-on ERP system. Spot VMs can be reclaimed at any time, which is unacceptable for ERP. On-demand pricing keeps full flexibility but costs the most for steady usage. Flex-start VMs are designed for short jobs of up to seven days, not a system running continuously for years.",
    referenceUrl: "https://docs.cloud.google.com/compute/docs/instances/committed-use-discounts-overview",
    tags: ["Committed use discounts", "Compute Engine", "Cost optimization"]
  }
];

export default GCP_CDL_QUESTIONS_13;
