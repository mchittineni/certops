export const AZURE_AZ204_QUESTIONS_11 = [
  {
    id: "azure-az204-251",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Deployment Slots & Warm-Up: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure App Service to deploy an updated microservice container to staging and warm up worker processes before executing a zero-downtime production swap.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? App Service deployment slots with applicationInitialization warm-up is under consideration.",
    options: [
      { id: 'A', text: "Configure an App Service staging deployment slot and define an applicationInitialization element in web.config for pre-swap warm-up." },
      { id: 'B', text: "Deploy new code directly to the production slot and restart the App Service Plan during business hours." },
      { id: 'C', text: "Point DNS records to an unverified third-party virtual machine." },
      { id: 'D', text: "Delete the production slot and recreate it from a Git repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an App Service staging deployment slot and define an applicationInitialization element in web.config for pre-swap warm-up. Azure App Service deployment slots allow developers to validate application changes in a staging environment. Specifying applicationInitialization rules in web.config ensures that worker instances are fully warmed up and responsive before the virtual IP swap occurs, guaranteeing zero client downtime.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots#custom-warm-up",
    tags: ["Azure App Service", "App Service", "Dr Failover"]
  },
  {
    id: "azure-az204-252",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Deployment Slots & Warm-Up: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure App Service to deploy an updated microservice container to staging and warm up worker processes before executing a zero-downtime production swap.",
    question: "Which architectural approach should the team select to manage this demand efficiently? App Service deployment slots with applicationInitialization warm-up is under consideration.",
    options: [
      { id: 'A', text: "Configure an App Service staging deployment slot and define an applicationInitialization element in web.config for pre-swap warm-up." },
      { id: 'B', text: "Deploy new code directly to the production slot and restart the App Service Plan during business hours." },
      { id: 'C', text: "Point DNS records to an unverified third-party virtual machine." },
      { id: 'D', text: "Delete the production slot and recreate it from a Git repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an App Service staging deployment slot and define an applicationInitialization element in web.config for pre-swap warm-up. Azure App Service deployment slots allow developers to validate application changes in a staging environment. Specifying applicationInitialization rules in web.config ensures that worker instances are fully warmed up and responsive before the virtual IP swap occurs, guaranteeing zero client downtime.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots#custom-warm-up",
    tags: ["Azure App Service", "App Service", "High Load Scale"]
  },
  {
    id: "azure-az204-253",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Deployment Slots & Warm-Up: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure App Service to deploy an updated microservice container to staging and warm up worker processes before executing a zero-downtime production swap.",
    question: "Which solution properly implements these mandatory security and governance controls? App Service deployment slots with applicationInitialization warm-up is under consideration.",
    options: [
      { id: 'A', text: "Configure an App Service staging deployment slot and define an applicationInitialization element in web.config for pre-swap warm-up." },
      { id: 'B', text: "Deploy new code directly to the production slot and restart the App Service Plan during business hours." },
      { id: 'C', text: "Point DNS records to an unverified third-party virtual machine." },
      { id: 'D', text: "Delete the production slot and recreate it from a Git repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an App Service staging deployment slot and define an applicationInitialization element in web.config for pre-swap warm-up. Azure App Service deployment slots allow developers to validate application changes in a staging environment. Specifying applicationInitialization rules in web.config ensures that worker instances are fully warmed up and responsive before the virtual IP swap occurs, guaranteeing zero client downtime.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots#custom-warm-up",
    tags: ["Azure App Service", "App Service", "Security Compliance"]
  },
  {
    id: "azure-az204-254",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Deployment Slots & Warm-Up: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure App Service to deploy an updated microservice container to staging and warm up worker processes before executing a zero-downtime production swap.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? App Service deployment slots with applicationInitialization warm-up is under consideration.",
    options: [
      { id: 'A', text: "Configure an App Service staging deployment slot and define an applicationInitialization element in web.config for pre-swap warm-up." },
      { id: 'B', text: "Deploy new code directly to the production slot and restart the App Service Plan during business hours." },
      { id: 'C', text: "Point DNS records to an unverified third-party virtual machine." },
      { id: 'D', text: "Delete the production slot and recreate it from a Git repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an App Service staging deployment slot and define an applicationInitialization element in web.config for pre-swap warm-up. Azure App Service deployment slots allow developers to validate application changes in a staging environment. Specifying applicationInitialization rules in web.config ensures that worker instances are fully warmed up and responsive before the virtual IP swap occurs, guaranteeing zero client downtime.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots#custom-warm-up",
    tags: ["Azure App Service", "App Service", "Hybrid Migration"]
  },
  {
    id: "azure-az204-255",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Deployment Slots & Warm-Up: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure App Service to deploy an updated microservice container to staging and warm up worker processes before executing a zero-downtime production swap.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? App Service deployment slots with applicationInitialization warm-up is under consideration.",
    options: [
      { id: 'A', text: "Configure an App Service staging deployment slot and define an applicationInitialization element in web.config for pre-swap warm-up." },
      { id: 'B', text: "Deploy new code directly to the production slot and restart the App Service Plan during business hours." },
      { id: 'C', text: "Point DNS records to an unverified third-party virtual machine." },
      { id: 'D', text: "Delete the production slot and recreate it from a Git repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an App Service staging deployment slot and define an applicationInitialization element in web.config for pre-swap warm-up. Azure App Service deployment slots allow developers to validate application changes in a staging environment. Specifying applicationInitialization rules in web.config ensures that worker instances are fully warmed up and responsive before the virtual IP swap occurs, guaranteeing zero client downtime.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots#custom-warm-up",
    tags: ["Azure App Service", "App Service", "Resilience Failure"]
  },
  {
    id: "azure-az204-256",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Sticky Configuration Settings: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure App Service to ensure that database connection strings remain bound to their specific deployment slot (staging DB on staging, production DB on production) across slot swaps.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Deployment slot settings (sticky settings) is under consideration.",
    options: [
      { id: 'A', text: "Designate the database connection string app setting as a Deployment Slot Setting (sticky setting)." },
      { id: 'B', text: "Hardcode the database credentials in application source code files." },
      { id: 'C', text: "Store the connection string in an unencrypted client-side cookie." },
      { id: 'D', text: "Disable deployment slot swaps on the App Service Plan." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Designate the database connection string app setting as a Deployment Slot Setting (sticky setting). When an app setting or connection string is marked as a 'Deployment slot setting' (sticky setting), it remains pinned to that specific slot and does not move with application code during a slot swap. This ensures environment-specific configurations remain isolated.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots#which-settings-are-swapped",
    tags: ["Azure App Service", "App Service", "Dr Failover"]
  },
  {
    id: "azure-az204-257",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Sticky Configuration Settings: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure App Service to ensure that database connection strings remain bound to their specific deployment slot (staging DB on staging, production DB on production) across slot swaps.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Deployment slot settings (sticky settings) is under consideration.",
    options: [
      { id: 'A', text: "Designate the database connection string app setting as a Deployment Slot Setting (sticky setting)." },
      { id: 'B', text: "Hardcode the database credentials in application source code files." },
      { id: 'C', text: "Store the connection string in an unencrypted client-side cookie." },
      { id: 'D', text: "Disable deployment slot swaps on the App Service Plan." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Designate the database connection string app setting as a Deployment Slot Setting (sticky setting). When an app setting or connection string is marked as a 'Deployment slot setting' (sticky setting), it remains pinned to that specific slot and does not move with application code during a slot swap. This ensures environment-specific configurations remain isolated.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots#which-settings-are-swapped",
    tags: ["Azure App Service", "App Service", "High Load Scale"]
  },
  {
    id: "azure-az204-258",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Sticky Configuration Settings: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure App Service to ensure that database connection strings remain bound to their specific deployment slot (staging DB on staging, production DB on production) across slot swaps.",
    question: "Which solution properly implements these mandatory security and governance controls? Deployment slot settings (sticky settings) is under consideration.",
    options: [
      { id: 'A', text: "Designate the database connection string app setting as a Deployment Slot Setting (sticky setting)." },
      { id: 'B', text: "Hardcode the database credentials in application source code files." },
      { id: 'C', text: "Store the connection string in an unencrypted client-side cookie." },
      { id: 'D', text: "Disable deployment slot swaps on the App Service Plan." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Designate the database connection string app setting as a Deployment Slot Setting (sticky setting). When an app setting or connection string is marked as a 'Deployment slot setting' (sticky setting), it remains pinned to that specific slot and does not move with application code during a slot swap. This ensures environment-specific configurations remain isolated.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots#which-settings-are-swapped",
    tags: ["Azure App Service", "App Service", "Security Compliance"]
  },
  {
    id: "azure-az204-259",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Sticky Configuration Settings: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure App Service to ensure that database connection strings remain bound to their specific deployment slot (staging DB on staging, production DB on production) across slot swaps.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Deployment slot settings (sticky settings) is under consideration.",
    options: [
      { id: 'A', text: "Designate the database connection string app setting as a Deployment Slot Setting (sticky setting)." },
      { id: 'B', text: "Hardcode the database credentials in application source code files." },
      { id: 'C', text: "Store the connection string in an unencrypted client-side cookie." },
      { id: 'D', text: "Disable deployment slot swaps on the App Service Plan." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Designate the database connection string app setting as a Deployment Slot Setting (sticky setting). When an app setting or connection string is marked as a 'Deployment slot setting' (sticky setting), it remains pinned to that specific slot and does not move with application code during a slot swap. This ensures environment-specific configurations remain isolated.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots#which-settings-are-swapped",
    tags: ["Azure App Service", "App Service", "Hybrid Migration"]
  },
  {
    id: "azure-az204-260",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Sticky Configuration Settings: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure App Service to ensure that database connection strings remain bound to their specific deployment slot (staging DB on staging, production DB on production) across slot swaps.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Deployment slot settings (sticky settings) is under consideration.",
    options: [
      { id: 'A', text: "Designate the database connection string app setting as a Deployment Slot Setting (sticky setting)." },
      { id: 'B', text: "Hardcode the database credentials in application source code files." },
      { id: 'C', text: "Store the connection string in an unencrypted client-side cookie." },
      { id: 'D', text: "Disable deployment slot swaps on the App Service Plan." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Designate the database connection string app setting as a Deployment Slot Setting (sticky setting). When an app setting or connection string is marked as a 'Deployment slot setting' (sticky setting), it remains pinned to that specific slot and does not move with application code during a slot swap. This ensures environment-specific configurations remain isolated.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots#which-settings-are-swapped",
    tags: ["Azure App Service", "App Service", "Resilience Failure"]
  },
  {
    id: "azure-az204-261",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Regional VNet Integration: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure App Service to allow an App Service web application to securely access an Azure SQL Database that has a private endpoint inside an isolated corporate VNet.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Regional Virtual Network integration for private backend connectivity is under consideration.",
    options: [
      { id: 'A', text: "Configure Regional VNet Integration connecting the App Service to a delegated subnet in the virtual network." },
      { id: 'B', text: "Assign a public IP address directly to the Azure SQL Database with no firewall rules." },
      { id: 'C', text: "Use an unencrypted public internet webhook to bridge traffic." },
      { id: 'D', text: "Deploy an ExpressRoute gateway to route outbound web app calls over on-premises routers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Regional VNet Integration connecting the App Service to a delegated subnet in the virtual network. Regional VNet Integration enables an Azure App Service app to make outbound calls into a delegated subnet in an Azure Virtual Network. This allows the app to communicate privately with Azure resources secured by Private Endpoints, service endpoints, or internal VMs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview-vnet-integration",
    tags: ["Azure App Service", "Networking", "Dr Failover"]
  },
  {
    id: "azure-az204-262",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Regional VNet Integration: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure App Service to allow an App Service web application to securely access an Azure SQL Database that has a private endpoint inside an isolated corporate VNet.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Regional Virtual Network integration for private backend connectivity is under consideration.",
    options: [
      { id: 'A', text: "Configure Regional VNet Integration connecting the App Service to a delegated subnet in the virtual network." },
      { id: 'B', text: "Assign a public IP address directly to the Azure SQL Database with no firewall rules." },
      { id: 'C', text: "Use an unencrypted public internet webhook to bridge traffic." },
      { id: 'D', text: "Deploy an ExpressRoute gateway to route outbound web app calls over on-premises routers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Regional VNet Integration connecting the App Service to a delegated subnet in the virtual network. Regional VNet Integration enables an Azure App Service app to make outbound calls into a delegated subnet in an Azure Virtual Network. This allows the app to communicate privately with Azure resources secured by Private Endpoints, service endpoints, or internal VMs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview-vnet-integration",
    tags: ["Azure App Service", "Networking", "High Load Scale"]
  },
  {
    id: "azure-az204-263",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Regional VNet Integration: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure App Service to allow an App Service web application to securely access an Azure SQL Database that has a private endpoint inside an isolated corporate VNet.",
    question: "Which solution properly implements these mandatory security and governance controls? Regional Virtual Network integration for private backend connectivity is under consideration.",
    options: [
      { id: 'A', text: "Configure Regional VNet Integration connecting the App Service to a delegated subnet in the virtual network." },
      { id: 'B', text: "Assign a public IP address directly to the Azure SQL Database with no firewall rules." },
      { id: 'C', text: "Use an unencrypted public internet webhook to bridge traffic." },
      { id: 'D', text: "Deploy an ExpressRoute gateway to route outbound web app calls over on-premises routers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Regional VNet Integration connecting the App Service to a delegated subnet in the virtual network. Regional VNet Integration enables an Azure App Service app to make outbound calls into a delegated subnet in an Azure Virtual Network. This allows the app to communicate privately with Azure resources secured by Private Endpoints, service endpoints, or internal VMs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview-vnet-integration",
    tags: ["Azure App Service", "Networking", "Security Compliance"]
  },
  {
    id: "azure-az204-264",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Regional VNet Integration: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure App Service to allow an App Service web application to securely access an Azure SQL Database that has a private endpoint inside an isolated corporate VNet.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Regional Virtual Network integration for private backend connectivity is under consideration.",
    options: [
      { id: 'A', text: "Configure Regional VNet Integration connecting the App Service to a delegated subnet in the virtual network." },
      { id: 'B', text: "Assign a public IP address directly to the Azure SQL Database with no firewall rules." },
      { id: 'C', text: "Use an unencrypted public internet webhook to bridge traffic." },
      { id: 'D', text: "Deploy an ExpressRoute gateway to route outbound web app calls over on-premises routers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Regional VNet Integration connecting the App Service to a delegated subnet in the virtual network. Regional VNet Integration enables an Azure App Service app to make outbound calls into a delegated subnet in an Azure Virtual Network. This allows the app to communicate privately with Azure resources secured by Private Endpoints, service endpoints, or internal VMs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview-vnet-integration",
    tags: ["Azure App Service", "Networking", "Hybrid Migration"]
  },
  {
    id: "azure-az204-265",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Regional VNet Integration: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure App Service to allow an App Service web application to securely access an Azure SQL Database that has a private endpoint inside an isolated corporate VNet.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Regional Virtual Network integration for private backend connectivity is under consideration.",
    options: [
      { id: 'A', text: "Configure Regional VNet Integration connecting the App Service to a delegated subnet in the virtual network." },
      { id: 'B', text: "Assign a public IP address directly to the Azure SQL Database with no firewall rules." },
      { id: 'C', text: "Use an unencrypted public internet webhook to bridge traffic." },
      { id: 'D', text: "Deploy an ExpressRoute gateway to route outbound web app calls over on-premises routers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Regional VNet Integration connecting the App Service to a delegated subnet in the virtual network. Regional VNet Integration enables an Azure App Service app to make outbound calls into a delegated subnet in an Azure Virtual Network. This allows the app to communicate privately with Azure resources secured by Private Endpoints, service endpoints, or internal VMs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview-vnet-integration",
    tags: ["Azure App Service", "Networking", "Resilience Failure"]
  },
  {
    id: "azure-az204-266",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Triggers and Bindings: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Functions to trigger execution when a message arrives in a Service Bus queue and automatically write output records to Cosmos DB without writing boilerplate SDK connection code.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Declarative input and output bindings in function code is under consideration.",
    options: [
      { id: 'A', text: "Configure a ServiceBusTrigger input binding and a CosmosDBOutput binding in the function definition." },
      { id: 'B', text: "Instantiate raw TCP socket connections inside the function handler to poll the queue." },
      { id: 'C', text: "Write custom background daemon threads that sleep for 5 seconds between database polling cycles." },
      { id: 'D', text: "Deploy an Azure Virtual Machine to relay messages from Service Bus to Cosmos DB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a ServiceBusTrigger input binding and a CosmosDBOutput binding in the function definition. Azure Functions uses triggers to determine how a function is invoked and bindings to connect to external data sources declaratively. Input and output bindings eliminate boilerplate code by allowing the runtime to handle client connections and serialize data automatically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings",
    tags: ["Azure Functions", "Serverless", "Dr Failover"]
  },
  {
    id: "azure-az204-267",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Triggers and Bindings: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Functions to trigger execution when a message arrives in a Service Bus queue and automatically write output records to Cosmos DB without writing boilerplate SDK connection code.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Declarative input and output bindings in function code is under consideration.",
    options: [
      { id: 'A', text: "Configure a ServiceBusTrigger input binding and a CosmosDBOutput binding in the function definition." },
      { id: 'B', text: "Instantiate raw TCP socket connections inside the function handler to poll the queue." },
      { id: 'C', text: "Write custom background daemon threads that sleep for 5 seconds between database polling cycles." },
      { id: 'D', text: "Deploy an Azure Virtual Machine to relay messages from Service Bus to Cosmos DB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a ServiceBusTrigger input binding and a CosmosDBOutput binding in the function definition. Azure Functions uses triggers to determine how a function is invoked and bindings to connect to external data sources declaratively. Input and output bindings eliminate boilerplate code by allowing the runtime to handle client connections and serialize data automatically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings",
    tags: ["Azure Functions", "Serverless", "High Load Scale"]
  },
  {
    id: "azure-az204-268",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Triggers and Bindings: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Functions to trigger execution when a message arrives in a Service Bus queue and automatically write output records to Cosmos DB without writing boilerplate SDK connection code.",
    question: "Which solution properly implements these mandatory security and governance controls? Declarative input and output bindings in function code is under consideration.",
    options: [
      { id: 'A', text: "Configure a ServiceBusTrigger input binding and a CosmosDBOutput binding in the function definition." },
      { id: 'B', text: "Instantiate raw TCP socket connections inside the function handler to poll the queue." },
      { id: 'C', text: "Write custom background daemon threads that sleep for 5 seconds between database polling cycles." },
      { id: 'D', text: "Deploy an Azure Virtual Machine to relay messages from Service Bus to Cosmos DB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a ServiceBusTrigger input binding and a CosmosDBOutput binding in the function definition. Azure Functions uses triggers to determine how a function is invoked and bindings to connect to external data sources declaratively. Input and output bindings eliminate boilerplate code by allowing the runtime to handle client connections and serialize data automatically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings",
    tags: ["Azure Functions", "Serverless", "Security Compliance"]
  },
  {
    id: "azure-az204-269",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Triggers and Bindings: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Functions to trigger execution when a message arrives in a Service Bus queue and automatically write output records to Cosmos DB without writing boilerplate SDK connection code.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Declarative input and output bindings in function code is under consideration.",
    options: [
      { id: 'A', text: "Configure a ServiceBusTrigger input binding and a CosmosDBOutput binding in the function definition." },
      { id: 'B', text: "Instantiate raw TCP socket connections inside the function handler to poll the queue." },
      { id: 'C', text: "Write custom background daemon threads that sleep for 5 seconds between database polling cycles." },
      { id: 'D', text: "Deploy an Azure Virtual Machine to relay messages from Service Bus to Cosmos DB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a ServiceBusTrigger input binding and a CosmosDBOutput binding in the function definition. Azure Functions uses triggers to determine how a function is invoked and bindings to connect to external data sources declaratively. Input and output bindings eliminate boilerplate code by allowing the runtime to handle client connections and serialize data automatically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings",
    tags: ["Azure Functions", "Serverless", "Hybrid Migration"]
  },
  {
    id: "azure-az204-270",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Triggers and Bindings: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Functions to trigger execution when a message arrives in a Service Bus queue and automatically write output records to Cosmos DB without writing boilerplate SDK connection code.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Declarative input and output bindings in function code is under consideration.",
    options: [
      { id: 'A', text: "Configure a ServiceBusTrigger input binding and a CosmosDBOutput binding in the function definition." },
      { id: 'B', text: "Instantiate raw TCP socket connections inside the function handler to poll the queue." },
      { id: 'C', text: "Write custom background daemon threads that sleep for 5 seconds between database polling cycles." },
      { id: 'D', text: "Deploy an Azure Virtual Machine to relay messages from Service Bus to Cosmos DB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a ServiceBusTrigger input binding and a CosmosDBOutput binding in the function definition. Azure Functions uses triggers to determine how a function is invoked and bindings to connect to external data sources declaratively. Input and output bindings eliminate boilerplate code by allowing the runtime to handle client connections and serialize data automatically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings",
    tags: ["Azure Functions", "Serverless", "Resilience Failure"]
  },
  {
    id: "azure-az204-271",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Orchestrator & Activity Pattern: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Durable Functions to orchestrate a complex, multi-step order fulfillment workflow that executes multiple tasks sequentially, handles retries, and checkpoint state automatically.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Orchestrator, Activity, and Client functions in stateful serverless workflows is under consideration.",
    options: [
      { id: 'A', text: "Implement the Function Chaining pattern using a Durable Functions Orchestrator function calling Activity functions." },
      { id: 'B', text: "Store state in static in-memory variables inside a standard Consumption Function." },
      { id: 'C', text: "Deploy a monolithic console application on a dedicated IaaS VM." },
      { id: 'D', text: "Chain standard functions together using unmonitored HTTP webhooks without retry logic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Function Chaining pattern using a Durable Functions Orchestrator function calling Activity functions. Azure Durable Functions is an extension of Azure Functions that enables writing stateful serverless functions. Orchestrator functions define workflows in code and use durable execution checkpointing to call Activity functions deterministically without paying for idle time.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview",
    tags: ["Azure Durable Functions", "Durable Functions", "Dr Failover"]
  },
  {
    id: "azure-az204-272",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Orchestrator & Activity Pattern: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Durable Functions to orchestrate a complex, multi-step order fulfillment workflow that executes multiple tasks sequentially, handles retries, and checkpoint state automatically.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Orchestrator, Activity, and Client functions in stateful serverless workflows is under consideration.",
    options: [
      { id: 'A', text: "Implement the Function Chaining pattern using a Durable Functions Orchestrator function calling Activity functions." },
      { id: 'B', text: "Store state in static in-memory variables inside a standard Consumption Function." },
      { id: 'C', text: "Deploy a monolithic console application on a dedicated IaaS VM." },
      { id: 'D', text: "Chain standard functions together using unmonitored HTTP webhooks without retry logic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Function Chaining pattern using a Durable Functions Orchestrator function calling Activity functions. Azure Durable Functions is an extension of Azure Functions that enables writing stateful serverless functions. Orchestrator functions define workflows in code and use durable execution checkpointing to call Activity functions deterministically without paying for idle time.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview",
    tags: ["Azure Durable Functions", "Durable Functions", "High Load Scale"]
  },
  {
    id: "azure-az204-273",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Orchestrator & Activity Pattern: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Durable Functions to orchestrate a complex, multi-step order fulfillment workflow that executes multiple tasks sequentially, handles retries, and checkpoint state automatically.",
    question: "Which solution properly implements these mandatory security and governance controls? Orchestrator, Activity, and Client functions in stateful serverless workflows is under consideration.",
    options: [
      { id: 'A', text: "Implement the Function Chaining pattern using a Durable Functions Orchestrator function calling Activity functions." },
      { id: 'B', text: "Store state in static in-memory variables inside a standard Consumption Function." },
      { id: 'C', text: "Deploy a monolithic console application on a dedicated IaaS VM." },
      { id: 'D', text: "Chain standard functions together using unmonitored HTTP webhooks without retry logic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Function Chaining pattern using a Durable Functions Orchestrator function calling Activity functions. Azure Durable Functions is an extension of Azure Functions that enables writing stateful serverless functions. Orchestrator functions define workflows in code and use durable execution checkpointing to call Activity functions deterministically without paying for idle time.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview",
    tags: ["Azure Durable Functions", "Durable Functions", "Security Compliance"]
  },
  {
    id: "azure-az204-274",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Orchestrator & Activity Pattern: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Durable Functions to orchestrate a complex, multi-step order fulfillment workflow that executes multiple tasks sequentially, handles retries, and checkpoint state automatically.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Orchestrator, Activity, and Client functions in stateful serverless workflows is under consideration.",
    options: [
      { id: 'A', text: "Implement the Function Chaining pattern using a Durable Functions Orchestrator function calling Activity functions." },
      { id: 'B', text: "Store state in static in-memory variables inside a standard Consumption Function." },
      { id: 'C', text: "Deploy a monolithic console application on a dedicated IaaS VM." },
      { id: 'D', text: "Chain standard functions together using unmonitored HTTP webhooks without retry logic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Function Chaining pattern using a Durable Functions Orchestrator function calling Activity functions. Azure Durable Functions is an extension of Azure Functions that enables writing stateful serverless functions. Orchestrator functions define workflows in code and use durable execution checkpointing to call Activity functions deterministically without paying for idle time.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview",
    tags: ["Azure Durable Functions", "Durable Functions", "Hybrid Migration"]
  },
  {
    id: "azure-az204-275",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Orchestrator & Activity Pattern: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Durable Functions to orchestrate a complex, multi-step order fulfillment workflow that executes multiple tasks sequentially, handles retries, and checkpoint state automatically.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Orchestrator, Activity, and Client functions in stateful serverless workflows is under consideration.",
    options: [
      { id: 'A', text: "Implement the Function Chaining pattern using a Durable Functions Orchestrator function calling Activity functions." },
      { id: 'B', text: "Store state in static in-memory variables inside a standard Consumption Function." },
      { id: 'C', text: "Deploy a monolithic console application on a dedicated IaaS VM." },
      { id: 'D', text: "Chain standard functions together using unmonitored HTTP webhooks without retry logic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Function Chaining pattern using a Durable Functions Orchestrator function calling Activity functions. Azure Durable Functions is an extension of Azure Functions that enables writing stateful serverless functions. Orchestrator functions define workflows in code and use durable execution checkpointing to call Activity functions deterministically without paying for idle time.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview",
    tags: ["Azure Durable Functions", "Durable Functions", "Resilience Failure"]
  }
];

export default AZURE_AZ204_QUESTIONS_11;
