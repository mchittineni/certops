export const AZURE_AZ204_QUESTIONS_18 = [
  {
    id: "azure-az204-426",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Cache for Redis Eviction Policies: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Cache for Redis to configure an Azure Cache for Redis instance so that when memory limit is reached, it automatically evicts the least recently used keys among those that have an expiration set.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Redis eviction policies: volatile-lru, allkeys-lru, noeviction is under consideration.",
    options: [
      { id: 'A', text: "Delete the entire Redis database when memory usage reaches 90%." },
      { id: 'B', text: "Set the maxmemory-policy configuration to volatile-lru." },
      { id: 'C', text: "Set the maxmemory-policy configuration to noeviction." },
      { id: 'D', text: "Set the maxmemory-policy configuration to allkeys-random." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set the maxmemory-policy configuration to volatile-lru. Azure Cache for Redis supports multiple `maxmemory-policy` eviction algorithms. The `volatile-lru` policy evicts the least recently used keys out of the keys that have an expiration (TTL) set, protecting persistent keys while shedding expired cache entries under memory pressure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-configure#maxmemory-policy",
    tags: ["Azure Cache for Redis", "Redis Cache", "Dr Failover"]
  },
  {
    id: "azure-az204-427",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Cache for Redis Eviction Policies: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Cache for Redis to configure an Azure Cache for Redis instance so that when memory limit is reached, it automatically evicts the least recently used keys among those that have an expiration set.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Redis eviction policies: volatile-lru, allkeys-lru, noeviction is under consideration.",
    options: [
      { id: 'A', text: "Set the maxmemory-policy configuration to allkeys-random." },
      { id: 'B', text: "Delete the entire Redis database when memory usage reaches 90%." },
      { id: 'C', text: "Set the maxmemory-policy configuration to volatile-lru." },
      { id: 'D', text: "Set the maxmemory-policy configuration to noeviction." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set the maxmemory-policy configuration to volatile-lru. Azure Cache for Redis supports multiple `maxmemory-policy` eviction algorithms. The `volatile-lru` policy evicts the least recently used keys out of the keys that have an expiration (TTL) set, protecting persistent keys while shedding expired cache entries under memory pressure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-configure#maxmemory-policy",
    tags: ["Azure Cache for Redis", "Redis Cache", "High Load Scale"]
  },
  {
    id: "azure-az204-428",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Cache for Redis Eviction Policies: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Cache for Redis to configure an Azure Cache for Redis instance so that when memory limit is reached, it automatically evicts the least recently used keys among those that have an expiration set.",
    question: "Which solution properly implements these mandatory security and governance controls? Redis eviction policies: volatile-lru, allkeys-lru, noeviction is under consideration.",
    options: [
      { id: 'A', text: "Set the maxmemory-policy configuration to volatile-lru." },
      { id: 'B', text: "Delete the entire Redis database when memory usage reaches 90%." },
      { id: 'C', text: "Set the maxmemory-policy configuration to noeviction." },
      { id: 'D', text: "Set the maxmemory-policy configuration to allkeys-random." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set the maxmemory-policy configuration to volatile-lru. Azure Cache for Redis supports multiple `maxmemory-policy` eviction algorithms. The `volatile-lru` policy evicts the least recently used keys out of the keys that have an expiration (TTL) set, protecting persistent keys while shedding expired cache entries under memory pressure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-configure#maxmemory-policy",
    tags: ["Azure Cache for Redis", "Redis Cache", "Security Compliance"]
  },
  {
    id: "azure-az204-429",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Cache for Redis Eviction Policies: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Cache for Redis to configure an Azure Cache for Redis instance so that when memory limit is reached, it automatically evicts the least recently used keys among those that have an expiration set.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Redis eviction policies: volatile-lru, allkeys-lru, noeviction is under consideration.",
    options: [
      { id: 'A', text: "Set the maxmemory-policy configuration to allkeys-random." },
      { id: 'B', text: "Delete the entire Redis database when memory usage reaches 90%." },
      { id: 'C', text: "Set the maxmemory-policy configuration to volatile-lru." },
      { id: 'D', text: "Set the maxmemory-policy configuration to noeviction." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set the maxmemory-policy configuration to volatile-lru. Azure Cache for Redis supports multiple `maxmemory-policy` eviction algorithms. The `volatile-lru` policy evicts the least recently used keys out of the keys that have an expiration (TTL) set, protecting persistent keys while shedding expired cache entries under memory pressure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-configure#maxmemory-policy",
    tags: ["Azure Cache for Redis", "Redis Cache", "Hybrid Migration"]
  },
  {
    id: "azure-az204-430",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Cache for Redis Eviction Policies: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Cache for Redis to configure an Azure Cache for Redis instance so that when memory limit is reached, it automatically evicts the least recently used keys among those that have an expiration set.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Redis eviction policies: volatile-lru, allkeys-lru, noeviction is under consideration.",
    options: [
      { id: 'A', text: "Set the maxmemory-policy configuration to noeviction." },
      { id: 'B', text: "Set the maxmemory-policy configuration to volatile-lru." },
      { id: 'C', text: "Delete the entire Redis database when memory usage reaches 90%." },
      { id: 'D', text: "Set the maxmemory-policy configuration to allkeys-random." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set the maxmemory-policy configuration to volatile-lru. Azure Cache for Redis supports multiple `maxmemory-policy` eviction algorithms. The `volatile-lru` policy evicts the least recently used keys out of the keys that have an expiration (TTL) set, protecting persistent keys while shedding expired cache entries under memory pressure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-configure#maxmemory-policy",
    tags: ["Azure Cache for Redis", "Redis Cache", "Resilience Failure"]
  },
  {
    id: "azure-az204-431",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Cache for Redis Cache-Aside Pattern: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Cache for Redis to improve application read performance and reduce relational database load by caching frequently requested product catalog records in Azure Cache for Redis.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Cache-Aside pattern implementation for high-read applications is under consideration.",
    options: [
      { id: 'A', text: "Store the entire relational database table in browser local storage." },
      { id: 'B', text: "Implement the Cache-Aside pattern: check Redis first, query SQL on cache miss, and write result to Redis with a TTL." },
      { id: 'C', text: "Write all database queries directly to the relational database and never read from Redis." },
      { id: 'D', text: "Update the database every 10 milliseconds using a synchronous polling loop." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement the Cache-Aside pattern: check Redis first, query SQL on cache miss, and write result to Redis with a TTL. The Cache-Aside pattern loads data on demand into a cache from a data store. The application first attempts to read from the cache; if the item is missing (cache miss), it reads from the data store, stores the result in the cache with a suitable expiration (TTL), and returns the data.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
    tags: ["Azure Cache for Redis", "Caching Patterns", "Dr Failover"]
  },
  {
    id: "azure-az204-432",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Cache for Redis Cache-Aside Pattern: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Cache for Redis to improve application read performance and reduce relational database load by caching frequently requested product catalog records in Azure Cache for Redis.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Cache-Aside pattern implementation for high-read applications is under consideration.",
    options: [
      { id: 'A', text: "Write all database queries directly to the relational database and never read from Redis." },
      { id: 'B', text: "Update the database every 10 milliseconds using a synchronous polling loop." },
      { id: 'C', text: "Store the entire relational database table in browser local storage." },
      { id: 'D', text: "Implement the Cache-Aside pattern: check Redis first, query SQL on cache miss, and write result to Redis with a TTL." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement the Cache-Aside pattern: check Redis first, query SQL on cache miss, and write result to Redis with a TTL. The Cache-Aside pattern loads data on demand into a cache from a data store. The application first attempts to read from the cache; if the item is missing (cache miss), it reads from the data store, stores the result in the cache with a suitable expiration (TTL), and returns the data.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
    tags: ["Azure Cache for Redis", "Caching Patterns", "High Load Scale"]
  },
  {
    id: "azure-az204-433",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Cache for Redis Cache-Aside Pattern: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Cache for Redis to improve application read performance and reduce relational database load by caching frequently requested product catalog records in Azure Cache for Redis.",
    question: "Which solution properly implements these mandatory security and governance controls? Cache-Aside pattern implementation for high-read applications is under consideration.",
    options: [
      { id: 'A', text: "Implement the Cache-Aside pattern: check Redis first, query SQL on cache miss, and write result to Redis with a TTL." },
      { id: 'B', text: "Store the entire relational database table in browser local storage." },
      { id: 'C', text: "Write all database queries directly to the relational database and never read from Redis." },
      { id: 'D', text: "Update the database every 10 milliseconds using a synchronous polling loop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Cache-Aside pattern: check Redis first, query SQL on cache miss, and write result to Redis with a TTL. The Cache-Aside pattern loads data on demand into a cache from a data store. The application first attempts to read from the cache; if the item is missing (cache miss), it reads from the data store, stores the result in the cache with a suitable expiration (TTL), and returns the data.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
    tags: ["Azure Cache for Redis", "Caching Patterns", "Security Compliance"]
  },
  {
    id: "azure-az204-434",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Cache for Redis Cache-Aside Pattern: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Cache for Redis to improve application read performance and reduce relational database load by caching frequently requested product catalog records in Azure Cache for Redis.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Cache-Aside pattern implementation for high-read applications is under consideration.",
    options: [
      { id: 'A', text: "Update the database every 10 milliseconds using a synchronous polling loop." },
      { id: 'B', text: "Store the entire relational database table in browser local storage." },
      { id: 'C', text: "Write all database queries directly to the relational database and never read from Redis." },
      { id: 'D', text: "Implement the Cache-Aside pattern: check Redis first, query SQL on cache miss, and write result to Redis with a TTL." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement the Cache-Aside pattern: check Redis first, query SQL on cache miss, and write result to Redis with a TTL. The Cache-Aside pattern loads data on demand into a cache from a data store. The application first attempts to read from the cache; if the item is missing (cache miss), it reads from the data store, stores the result in the cache with a suitable expiration (TTL), and returns the data.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
    tags: ["Azure Cache for Redis", "Caching Patterns", "Hybrid Migration"]
  },
  {
    id: "azure-az204-435",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Cache for Redis Cache-Aside Pattern: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Cache for Redis to improve application read performance and reduce relational database load by caching frequently requested product catalog records in Azure Cache for Redis.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Cache-Aside pattern implementation for high-read applications is under consideration.",
    options: [
      { id: 'A', text: "Store the entire relational database table in browser local storage." },
      { id: 'B', text: "Implement the Cache-Aside pattern: check Redis first, query SQL on cache miss, and write result to Redis with a TTL." },
      { id: 'C', text: "Write all database queries directly to the relational database and never read from Redis." },
      { id: 'D', text: "Update the database every 10 milliseconds using a synchronous polling loop." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement the Cache-Aside pattern: check Redis first, query SQL on cache miss, and write result to Redis with a TTL. The Cache-Aside pattern loads data on demand into a cache from a data store. The application first attempts to read from the cache; if the item is missing (cache miss), it reads from the data store, stores the result in the cache with a suitable expiration (TTL), and returns the data.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
    tags: ["Azure Cache for Redis", "Caching Patterns", "Resilience Failure"]
  },
  {
    id: "azure-az204-436",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Content Delivery Network (CDN) Caching Rules: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure CDN to accelerate static asset delivery to global users by caching images at edge servers for 30 days while ensuring updated product catalog images bypass the cache immediately upon release.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Custom caching rules, query string caching, and cache purging is under consideration.",
    options: [
      { id: 'A', text: "Instruct global users to clear their web browser cookies manually." },
      { id: 'B', text: "Configure CDN custom caching rules with defined TTLs and execute a CDN endpoint purge upon releasing new images." },
      { id: 'C', text: "Host all images on an on-premises physical file server." },
      { id: 'D', text: "Change the DNS A record of the origin web server every time an image changes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure CDN custom caching rules with defined TTLs and execute a CDN endpoint purge upon releasing new images. Azure Content Delivery Network (CDN) caches static content at strategically placed physical nodes globally to reduce latency. Custom caching rules control expiration durations (TTLs), while the Purge API forces edge nodes to discard cached assets and fetch fresh copies from the origin immediately.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cdn/cdn-overview",
    tags: ["Azure CDN", "Azure CDN", "Dr Failover"]
  },
  {
    id: "azure-az204-437",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Content Delivery Network (CDN) Caching Rules: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure CDN to accelerate static asset delivery to global users by caching images at edge servers for 30 days while ensuring updated product catalog images bypass the cache immediately upon release.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Custom caching rules, query string caching, and cache purging is under consideration.",
    options: [
      { id: 'A', text: "Configure CDN custom caching rules with defined TTLs and execute a CDN endpoint purge upon releasing new images." },
      { id: 'B', text: "Host all images on an on-premises physical file server." },
      { id: 'C', text: "Change the DNS A record of the origin web server every time an image changes." },
      { id: 'D', text: "Instruct global users to clear their web browser cookies manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CDN custom caching rules with defined TTLs and execute a CDN endpoint purge upon releasing new images. Azure Content Delivery Network (CDN) caches static content at strategically placed physical nodes globally to reduce latency. Custom caching rules control expiration durations (TTLs), while the Purge API forces edge nodes to discard cached assets and fetch fresh copies from the origin immediately.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cdn/cdn-overview",
    tags: ["Azure CDN", "Azure CDN", "High Load Scale"]
  },
  {
    id: "azure-az204-438",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Content Delivery Network (CDN) Caching Rules: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure CDN to accelerate static asset delivery to global users by caching images at edge servers for 30 days while ensuring updated product catalog images bypass the cache immediately upon release.",
    question: "Which solution properly implements these mandatory security and governance controls? Custom caching rules, query string caching, and cache purging is under consideration.",
    options: [
      { id: 'A', text: "Configure CDN custom caching rules with defined TTLs and execute a CDN endpoint purge upon releasing new images." },
      { id: 'B', text: "Host all images on an on-premises physical file server." },
      { id: 'C', text: "Instruct global users to clear their web browser cookies manually." },
      { id: 'D', text: "Change the DNS A record of the origin web server every time an image changes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CDN custom caching rules with defined TTLs and execute a CDN endpoint purge upon releasing new images. Azure Content Delivery Network (CDN) caches static content at strategically placed physical nodes globally to reduce latency. Custom caching rules control expiration durations (TTLs), while the Purge API forces edge nodes to discard cached assets and fetch fresh copies from the origin immediately.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cdn/cdn-overview",
    tags: ["Azure CDN", "Azure CDN", "Security Compliance"]
  },
  {
    id: "azure-az204-439",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Content Delivery Network (CDN) Caching Rules: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure CDN to accelerate static asset delivery to global users by caching images at edge servers for 30 days while ensuring updated product catalog images bypass the cache immediately upon release.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Custom caching rules, query string caching, and cache purging is under consideration.",
    options: [
      { id: 'A', text: "Configure CDN custom caching rules with defined TTLs and execute a CDN endpoint purge upon releasing new images." },
      { id: 'B', text: "Host all images on an on-premises physical file server." },
      { id: 'C', text: "Change the DNS A record of the origin web server every time an image changes." },
      { id: 'D', text: "Instruct global users to clear their web browser cookies manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CDN custom caching rules with defined TTLs and execute a CDN endpoint purge upon releasing new images. Azure Content Delivery Network (CDN) caches static content at strategically placed physical nodes globally to reduce latency. Custom caching rules control expiration durations (TTLs), while the Purge API forces edge nodes to discard cached assets and fetch fresh copies from the origin immediately.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cdn/cdn-overview",
    tags: ["Azure CDN", "Azure CDN", "Hybrid Migration"]
  },
  {
    id: "azure-az204-440",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Content Delivery Network (CDN) Caching Rules: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure CDN to accelerate static asset delivery to global users by caching images at edge servers for 30 days while ensuring updated product catalog images bypass the cache immediately upon release.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Custom caching rules, query string caching, and cache purging is under consideration.",
    options: [
      { id: 'A', text: "Host all images on an on-premises physical file server." },
      { id: 'B', text: "Instruct global users to clear their web browser cookies manually." },
      { id: 'C', text: "Configure CDN custom caching rules with defined TTLs and execute a CDN endpoint purge upon releasing new images." },
      { id: 'D', text: "Change the DNS A record of the origin web server every time an image changes." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure CDN custom caching rules with defined TTLs and execute a CDN endpoint purge upon releasing new images. Azure Content Delivery Network (CDN) caches static content at strategically placed physical nodes globally to reduce latency. Custom caching rules control expiration durations (TTLs), while the Purge API forces edge nodes to discard cached assets and fetch fresh copies from the origin immediately.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cdn/cdn-overview",
    tags: ["Azure CDN", "Azure CDN", "Resilience Failure"]
  },
  {
    id: "azure-az204-441",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Monitor Alerts on Custom KQL Queries: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Monitor to trigger an alert notification to on-call engineers whenever the count of application error logs containing 'PaymentGatewayException' exceeds 10 within a 5-minute window.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Log Analytics scheduled query rules generating automated alert signals is under consideration.",
    options: [
      { id: 'A', text: "Create a Scheduled Query Rule in Azure Monitor using a KQL query with a 5-minute aggregation granularity." },
      { id: 'B', text: "Review application error logs manually at the start of each working week." },
      { id: 'C', text: "Deploy an Azure Virtual Machine to ping the payment gateway endpoint continuously." },
      { id: 'D', text: "Write a Windows desktop application that polls the Azure portal HTML DOM every 5 seconds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Scheduled Query Rule in Azure Monitor using a KQL query with a 5-minute aggregation granularity. Azure Monitor Scheduled Query Rules execute Kusto Query Language (KQL) queries against Log Analytics at specified frequencies (e.g. every 5 minutes). If the query results satisfy the condition (e.g. count &gt; 10), the alert rule fires and triggers associated Action Groups.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-types#log-alerts",
    tags: ["Azure Monitor", "Alerting", "Dr Failover"]
  },
  {
    id: "azure-az204-442",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Monitor Alerts on Custom KQL Queries: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Monitor to trigger an alert notification to on-call engineers whenever the count of application error logs containing 'PaymentGatewayException' exceeds 10 within a 5-minute window.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Log Analytics scheduled query rules generating automated alert signals is under consideration.",
    options: [
      { id: 'A', text: "Write a Windows desktop application that polls the Azure portal HTML DOM every 5 seconds." },
      { id: 'B', text: "Deploy an Azure Virtual Machine to ping the payment gateway endpoint continuously." },
      { id: 'C', text: "Review application error logs manually at the start of each working week." },
      { id: 'D', text: "Create a Scheduled Query Rule in Azure Monitor using a KQL query with a 5-minute aggregation granularity." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a Scheduled Query Rule in Azure Monitor using a KQL query with a 5-minute aggregation granularity. Azure Monitor Scheduled Query Rules execute Kusto Query Language (KQL) queries against Log Analytics at specified frequencies (e.g. every 5 minutes). If the query results satisfy the condition (e.g. count &gt; 10), the alert rule fires and triggers associated Action Groups.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-types#log-alerts",
    tags: ["Azure Monitor", "Alerting", "High Load Scale"]
  },
  {
    id: "azure-az204-443",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Monitor Alerts on Custom KQL Queries: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Monitor to trigger an alert notification to on-call engineers whenever the count of application error logs containing 'PaymentGatewayException' exceeds 10 within a 5-minute window.",
    question: "Which solution properly implements these mandatory security and governance controls? Log Analytics scheduled query rules generating automated alert signals is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Azure Virtual Machine to ping the payment gateway endpoint continuously." },
      { id: 'B', text: "Create a Scheduled Query Rule in Azure Monitor using a KQL query with a 5-minute aggregation granularity." },
      { id: 'C', text: "Write a Windows desktop application that polls the Azure portal HTML DOM every 5 seconds." },
      { id: 'D', text: "Review application error logs manually at the start of each working week." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a Scheduled Query Rule in Azure Monitor using a KQL query with a 5-minute aggregation granularity. Azure Monitor Scheduled Query Rules execute Kusto Query Language (KQL) queries against Log Analytics at specified frequencies (e.g. every 5 minutes). If the query results satisfy the condition (e.g. count &gt; 10), the alert rule fires and triggers associated Action Groups.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-types#log-alerts",
    tags: ["Azure Monitor", "Alerting", "Security Compliance"]
  },
  {
    id: "azure-az204-444",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Monitor Alerts on Custom KQL Queries: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Monitor to trigger an alert notification to on-call engineers whenever the count of application error logs containing 'PaymentGatewayException' exceeds 10 within a 5-minute window.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Log Analytics scheduled query rules generating automated alert signals is under consideration.",
    options: [
      { id: 'A', text: "Create a Scheduled Query Rule in Azure Monitor using a KQL query with a 5-minute aggregation granularity." },
      { id: 'B', text: "Write a Windows desktop application that polls the Azure portal HTML DOM every 5 seconds." },
      { id: 'C', text: "Review application error logs manually at the start of each working week." },
      { id: 'D', text: "Deploy an Azure Virtual Machine to ping the payment gateway endpoint continuously." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Scheduled Query Rule in Azure Monitor using a KQL query with a 5-minute aggregation granularity. Azure Monitor Scheduled Query Rules execute Kusto Query Language (KQL) queries against Log Analytics at specified frequencies (e.g. every 5 minutes). If the query results satisfy the condition (e.g. count &gt; 10), the alert rule fires and triggers associated Action Groups.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-types#log-alerts",
    tags: ["Azure Monitor", "Alerting", "Hybrid Migration"]
  },
  {
    id: "azure-az204-445",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Monitor Alerts on Custom KQL Queries: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Monitor to trigger an alert notification to on-call engineers whenever the count of application error logs containing 'PaymentGatewayException' exceeds 10 within a 5-minute window.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Log Analytics scheduled query rules generating automated alert signals is under consideration.",
    options: [
      { id: 'A', text: "Write a Windows desktop application that polls the Azure portal HTML DOM every 5 seconds." },
      { id: 'B', text: "Review application error logs manually at the start of each working week." },
      { id: 'C', text: "Create a Scheduled Query Rule in Azure Monitor using a KQL query with a 5-minute aggregation granularity." },
      { id: 'D', text: "Deploy an Azure Virtual Machine to ping the payment gateway endpoint continuously." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a Scheduled Query Rule in Azure Monitor using a KQL query with a 5-minute aggregation granularity. Azure Monitor Scheduled Query Rules execute Kusto Query Language (KQL) queries against Log Analytics at specified frequencies (e.g. every 5 minutes). If the query results satisfy the condition (e.g. count &gt; 10), the alert rule fires and triggers associated Action Groups.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-types#log-alerts",
    tags: ["Azure Monitor", "Alerting", "Resilience Failure"]
  },
  {
    id: "azure-az204-446",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "API Management (APIM) Inbound Policies (validate-jwt): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure API Management to validate JSON Web Tokens (JWT) issued by Microsoft Entra ID at the API gateway before forwarding requests to backend microservices.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Inbound policy processing with validate-jwt token verification is under consideration.",
    options: [
      { id: 'A', text: "Store user passwords in query string parameters in cleartext." },
      { id: 'B', text: "Allow all incoming HTTP requests without inspecting authorization headers." },
      { id: 'C', text: "Implement custom JWT validation logic inside every individual backend microservice." },
      { id: 'D', text: "Add a validate-jwt policy in the inbound processing section of the API definition in API Management." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add a validate-jwt policy in the inbound processing section of the API definition in API Management. Azure API Management policies are configurable statements executed inside the gateway proxy pipeline. The `validate-jwt` policy enforces the presence and validity of a JWT issued by a specified identity provider (checking signature, expiration, audience, and issuer) before backend routing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/validate-jwt-policy",
    tags: ["Azure API Management", "APIM", "Dr Failover"]
  },
  {
    id: "azure-az204-447",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "API Management (APIM) Inbound Policies (validate-jwt): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure API Management to validate JSON Web Tokens (JWT) issued by Microsoft Entra ID at the API gateway before forwarding requests to backend microservices.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Inbound policy processing with validate-jwt token verification is under consideration.",
    options: [
      { id: 'A', text: "Add a validate-jwt policy in the inbound processing section of the API definition in API Management." },
      { id: 'B', text: "Allow all incoming HTTP requests without inspecting authorization headers." },
      { id: 'C', text: "Implement custom JWT validation logic inside every individual backend microservice." },
      { id: 'D', text: "Store user passwords in query string parameters in cleartext." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add a validate-jwt policy in the inbound processing section of the API definition in API Management. Azure API Management policies are configurable statements executed inside the gateway proxy pipeline. The `validate-jwt` policy enforces the presence and validity of a JWT issued by a specified identity provider (checking signature, expiration, audience, and issuer) before backend routing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/validate-jwt-policy",
    tags: ["Azure API Management", "APIM", "High Load Scale"]
  },
  {
    id: "azure-az204-448",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "API Management (APIM) Inbound Policies (validate-jwt): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure API Management to validate JSON Web Tokens (JWT) issued by Microsoft Entra ID at the API gateway before forwarding requests to backend microservices.",
    question: "Which solution properly implements these mandatory security and governance controls? Inbound policy processing with validate-jwt token verification is under consideration.",
    options: [
      { id: 'A', text: "Implement custom JWT validation logic inside every individual backend microservice." },
      { id: 'B', text: "Store user passwords in query string parameters in cleartext." },
      { id: 'C', text: "Add a validate-jwt policy in the inbound processing section of the API definition in API Management." },
      { id: 'D', text: "Allow all incoming HTTP requests without inspecting authorization headers." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add a validate-jwt policy in the inbound processing section of the API definition in API Management. Azure API Management policies are configurable statements executed inside the gateway proxy pipeline. The `validate-jwt` policy enforces the presence and validity of a JWT issued by a specified identity provider (checking signature, expiration, audience, and issuer) before backend routing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/validate-jwt-policy",
    tags: ["Azure API Management", "APIM", "Security Compliance"]
  },
  {
    id: "azure-az204-449",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "API Management (APIM) Inbound Policies (validate-jwt): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure API Management to validate JSON Web Tokens (JWT) issued by Microsoft Entra ID at the API gateway before forwarding requests to backend microservices.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Inbound policy processing with validate-jwt token verification is under consideration.",
    options: [
      { id: 'A', text: "Allow all incoming HTTP requests without inspecting authorization headers." },
      { id: 'B', text: "Add a validate-jwt policy in the inbound processing section of the API definition in API Management." },
      { id: 'C', text: "Store user passwords in query string parameters in cleartext." },
      { id: 'D', text: "Implement custom JWT validation logic inside every individual backend microservice." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add a validate-jwt policy in the inbound processing section of the API definition in API Management. Azure API Management policies are configurable statements executed inside the gateway proxy pipeline. The `validate-jwt` policy enforces the presence and validity of a JWT issued by a specified identity provider (checking signature, expiration, audience, and issuer) before backend routing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/validate-jwt-policy",
    tags: ["Azure API Management", "APIM", "Hybrid Migration"]
  },
  {
    id: "azure-az204-450",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "API Management (APIM) Inbound Policies (validate-jwt): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure API Management to validate JSON Web Tokens (JWT) issued by Microsoft Entra ID at the API gateway before forwarding requests to backend microservices.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Inbound policy processing with validate-jwt token verification is under consideration.",
    options: [
      { id: 'A', text: "Allow all incoming HTTP requests without inspecting authorization headers." },
      { id: 'B', text: "Add a validate-jwt policy in the inbound processing section of the API definition in API Management." },
      { id: 'C', text: "Store user passwords in query string parameters in cleartext." },
      { id: 'D', text: "Implement custom JWT validation logic inside every individual backend microservice." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add a validate-jwt policy in the inbound processing section of the API definition in API Management. Azure API Management policies are configurable statements executed inside the gateway proxy pipeline. The `validate-jwt` policy enforces the presence and validity of a JWT issued by a specified identity provider (checking signature, expiration, audience, and issuer) before backend routing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/validate-jwt-policy",
    tags: ["Azure API Management", "APIM", "Resilience Failure"]
  }
];

export default AZURE_AZ204_QUESTIONS_18;
