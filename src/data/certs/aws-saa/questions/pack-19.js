export const AWS_SAA_QUESTIONS_19 = [
  {
    id: "aws-saa-451",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Compute Savings Plans vs EC2 Instance Savings Plans: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on AWS Cost Management to reduce compute spend across Amazon EC2, AWS Lambda, and AWS Fargate while maintaining flexibility to change instance families, operating systems, and AWS Regions.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Compute Savings Plans vs EC2 Instance Savings Plans is being evaluated.",
    options: [
      { id: 'A', text: "Purchase Compute Savings Plans with a 1-year or 3-year commitment." },
      { id: 'B', text: "Purchase Standard Reserved Instances for specific EC2 instance types." },
      { id: 'C', text: "Rely exclusively on On-Demand instance pricing with volume discounts." },
      { id: 'D', text: "Purchase EC2 Instance Savings Plans for a specific instance family in us-east-1." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Purchase Compute Savings Plans with a 1-year or 3-year commitment. Compute Savings Plans provide the greatest flexibility, automatically applying up to 66% discounts to Amazon EC2 instance usage regardless of instance family, size, OS, or AWS Region, while also applying to AWS Fargate and AWS Lambda usage. EC2 Instance Savings Plans apply only to a specific family within a single region.",
    referenceUrl: "https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html",
    tags: ["AWS Cost Management", "Cost Optimization", "Dr Failover"]
  },
  {
    id: "aws-saa-452",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Compute Savings Plans vs EC2 Instance Savings Plans: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on AWS Cost Management to reduce compute spend across Amazon EC2, AWS Lambda, and AWS Fargate while maintaining flexibility to change instance families, operating systems, and AWS Regions.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Compute Savings Plans vs EC2 Instance Savings Plans is being evaluated.",
    options: [
      { id: 'A', text: "Purchase Compute Savings Plans with a 1-year or 3-year commitment." },
      { id: 'B', text: "Purchase Standard Reserved Instances for specific EC2 instance types." },
      { id: 'C', text: "Rely exclusively on On-Demand instance pricing with volume discounts." },
      { id: 'D', text: "Purchase EC2 Instance Savings Plans for a specific instance family in us-east-1." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Purchase Compute Savings Plans with a 1-year or 3-year commitment. Compute Savings Plans provide the greatest flexibility, automatically applying up to 66% discounts to Amazon EC2 instance usage regardless of instance family, size, OS, or AWS Region, while also applying to AWS Fargate and AWS Lambda usage. EC2 Instance Savings Plans apply only to a specific family within a single region.",
    referenceUrl: "https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html",
    tags: ["AWS Cost Management", "Cost Optimization", "High Load Scale"]
  },
  {
    id: "aws-saa-453",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Compute Savings Plans vs EC2 Instance Savings Plans: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on AWS Cost Management to reduce compute spend across Amazon EC2, AWS Lambda, and AWS Fargate while maintaining flexibility to change instance families, operating systems, and AWS Regions.",
    question: "Which solution properly implements these mandatory security and governance controls? Compute Savings Plans vs EC2 Instance Savings Plans is being evaluated.",
    options: [
      { id: 'A', text: "Purchase Standard Reserved Instances for specific EC2 instance types." },
      { id: 'B', text: "Rely exclusively on On-Demand instance pricing with volume discounts." },
      { id: 'C', text: "Purchase Compute Savings Plans with a 1-year or 3-year commitment." },
      { id: 'D', text: "Purchase EC2 Instance Savings Plans for a specific instance family in us-east-1." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Purchase Compute Savings Plans with a 1-year or 3-year commitment. Compute Savings Plans provide the greatest flexibility, automatically applying up to 66% discounts to Amazon EC2 instance usage regardless of instance family, size, OS, or AWS Region, while also applying to AWS Fargate and AWS Lambda usage. EC2 Instance Savings Plans apply only to a specific family within a single region.",
    referenceUrl: "https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html",
    tags: ["AWS Cost Management", "Cost Optimization", "Security Compliance"]
  },
  {
    id: "aws-saa-454",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Compute Savings Plans vs EC2 Instance Savings Plans: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on AWS Cost Management to reduce compute spend across Amazon EC2, AWS Lambda, and AWS Fargate while maintaining flexibility to change instance families, operating systems, and AWS Regions.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Compute Savings Plans vs EC2 Instance Savings Plans is being evaluated.",
    options: [
      { id: 'A', text: "Rely exclusively on On-Demand instance pricing with volume discounts." },
      { id: 'B', text: "Purchase Compute Savings Plans with a 1-year or 3-year commitment." },
      { id: 'C', text: "Purchase EC2 Instance Savings Plans for a specific instance family in us-east-1." },
      { id: 'D', text: "Purchase Standard Reserved Instances for specific EC2 instance types." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Purchase Compute Savings Plans with a 1-year or 3-year commitment. Compute Savings Plans provide the greatest flexibility, automatically applying up to 66% discounts to Amazon EC2 instance usage regardless of instance family, size, OS, or AWS Region, while also applying to AWS Fargate and AWS Lambda usage. EC2 Instance Savings Plans apply only to a specific family within a single region.",
    referenceUrl: "https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html",
    tags: ["AWS Cost Management", "Cost Optimization", "Hybrid Migration"]
  },
  {
    id: "aws-saa-455",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Compute Savings Plans vs EC2 Instance Savings Plans: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on AWS Cost Management to reduce compute spend across Amazon EC2, AWS Lambda, and AWS Fargate while maintaining flexibility to change instance families, operating systems, and AWS Regions.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Compute Savings Plans vs EC2 Instance Savings Plans is being evaluated.",
    options: [
      { id: 'A', text: "Rely exclusively on On-Demand instance pricing with volume discounts." },
      { id: 'B', text: "Purchase EC2 Instance Savings Plans for a specific instance family in us-east-1." },
      { id: 'C', text: "Purchase Compute Savings Plans with a 1-year or 3-year commitment." },
      { id: 'D', text: "Purchase Standard Reserved Instances for specific EC2 instance types." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Purchase Compute Savings Plans with a 1-year or 3-year commitment. Compute Savings Plans provide the greatest flexibility, automatically applying up to 66% discounts to Amazon EC2 instance usage regardless of instance family, size, OS, or AWS Region, while also applying to AWS Fargate and AWS Lambda usage. EC2 Instance Savings Plans apply only to a specific family within a single region.",
    referenceUrl: "https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html",
    tags: ["AWS Cost Management", "Cost Optimization", "Resilience Failure"]
  },
  {
    id: "aws-saa-456",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "EC2 Spot Fleet Price-Capacity-Optimized: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon EC2 to run stateless fault-tolerant batch workloads at the lowest possible cost while minimizing Spot instance interruptions.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? EC2 Spot Fleet with price-capacity-optimized allocation strategy is being evaluated.",
    options: [
      { id: 'A', text: "Configure an EC2 Auto Scaling group or Spot Fleet using the `price-capacity-optimized` allocation strategy across multiple instance families." },
      { id: 'B', text: "Deploy EC2 On-Demand instances using the lowest-cost t4g instance types." },
      { id: 'C', text: "Purchase 3-year All Upfront Convertible Reserved Instances." },
      { id: 'D', text: "Configure Spot Fleet with the `lowest-price` allocation strategy restricted to a single instance type in one AZ." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an EC2 Auto Scaling group or Spot Fleet using the `price-capacity-optimized` allocation strategy across multiple instance families. The `price-capacity-optimized` allocation strategy analyzes historical capacity and price data to launch Spot instances from the pools that have the lowest likelihood of interruption while still offering deep Spot discounts (up to 90%), making it ideal for resilient workloads.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-allocation-strategy.html",
    tags: ["Amazon EC2", "EC2 Spot", "Dr Failover"]
  },
  {
    id: "aws-saa-457",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "EC2 Spot Fleet Price-Capacity-Optimized: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon EC2 to run stateless fault-tolerant batch workloads at the lowest possible cost while minimizing Spot instance interruptions.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? EC2 Spot Fleet with price-capacity-optimized allocation strategy is being evaluated.",
    options: [
      { id: 'A', text: "Deploy EC2 On-Demand instances using the lowest-cost t4g instance types." },
      { id: 'B', text: "Purchase 3-year All Upfront Convertible Reserved Instances." },
      { id: 'C', text: "Configure an EC2 Auto Scaling group or Spot Fleet using the `price-capacity-optimized` allocation strategy across multiple instance families." },
      { id: 'D', text: "Configure Spot Fleet with the `lowest-price` allocation strategy restricted to a single instance type in one AZ." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an EC2 Auto Scaling group or Spot Fleet using the `price-capacity-optimized` allocation strategy across multiple instance families. The `price-capacity-optimized` allocation strategy analyzes historical capacity and price data to launch Spot instances from the pools that have the lowest likelihood of interruption while still offering deep Spot discounts (up to 90%), making it ideal for resilient workloads.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-allocation-strategy.html",
    tags: ["Amazon EC2", "EC2 Spot", "High Load Scale"]
  },
  {
    id: "aws-saa-458",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "EC2 Spot Fleet Price-Capacity-Optimized: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon EC2 to run stateless fault-tolerant batch workloads at the lowest possible cost while minimizing Spot instance interruptions.",
    question: "Which solution properly implements these mandatory security and governance controls? EC2 Spot Fleet with price-capacity-optimized allocation strategy is being evaluated.",
    options: [
      { id: 'A', text: "Configure Spot Fleet with the `lowest-price` allocation strategy restricted to a single instance type in one AZ." },
      { id: 'B', text: "Deploy EC2 On-Demand instances using the lowest-cost t4g instance types." },
      { id: 'C', text: "Configure an EC2 Auto Scaling group or Spot Fleet using the `price-capacity-optimized` allocation strategy across multiple instance families." },
      { id: 'D', text: "Purchase 3-year All Upfront Convertible Reserved Instances." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an EC2 Auto Scaling group or Spot Fleet using the `price-capacity-optimized` allocation strategy across multiple instance families. The `price-capacity-optimized` allocation strategy analyzes historical capacity and price data to launch Spot instances from the pools that have the lowest likelihood of interruption while still offering deep Spot discounts (up to 90%), making it ideal for resilient workloads.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-allocation-strategy.html",
    tags: ["Amazon EC2", "EC2 Spot", "Security Compliance"]
  },
  {
    id: "aws-saa-459",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "EC2 Spot Fleet Price-Capacity-Optimized: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon EC2 to run stateless fault-tolerant batch workloads at the lowest possible cost while minimizing Spot instance interruptions.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? EC2 Spot Fleet with price-capacity-optimized allocation strategy is being evaluated.",
    options: [
      { id: 'A', text: "Deploy EC2 On-Demand instances using the lowest-cost t4g instance types." },
      { id: 'B', text: "Configure Spot Fleet with the `lowest-price` allocation strategy restricted to a single instance type in one AZ." },
      { id: 'C', text: "Purchase 3-year All Upfront Convertible Reserved Instances." },
      { id: 'D', text: "Configure an EC2 Auto Scaling group or Spot Fleet using the `price-capacity-optimized` allocation strategy across multiple instance families." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an EC2 Auto Scaling group or Spot Fleet using the `price-capacity-optimized` allocation strategy across multiple instance families. The `price-capacity-optimized` allocation strategy analyzes historical capacity and price data to launch Spot instances from the pools that have the lowest likelihood of interruption while still offering deep Spot discounts (up to 90%), making it ideal for resilient workloads.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-allocation-strategy.html",
    tags: ["Amazon EC2", "EC2 Spot", "Hybrid Migration"]
  },
  {
    id: "aws-saa-460",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "EC2 Spot Fleet Price-Capacity-Optimized: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon EC2 to run stateless fault-tolerant batch workloads at the lowest possible cost while minimizing Spot instance interruptions.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? EC2 Spot Fleet with price-capacity-optimized allocation strategy is being evaluated.",
    options: [
      { id: 'A', text: "Deploy EC2 On-Demand instances using the lowest-cost t4g instance types." },
      { id: 'B', text: "Purchase 3-year All Upfront Convertible Reserved Instances." },
      { id: 'C', text: "Configure Spot Fleet with the `lowest-price` allocation strategy restricted to a single instance type in one AZ." },
      { id: 'D', text: "Configure an EC2 Auto Scaling group or Spot Fleet using the `price-capacity-optimized` allocation strategy across multiple instance families." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an EC2 Auto Scaling group or Spot Fleet using the `price-capacity-optimized` allocation strategy across multiple instance families. The `price-capacity-optimized` allocation strategy analyzes historical capacity and price data to launch Spot instances from the pools that have the lowest likelihood of interruption while still offering deep Spot discounts (up to 90%), making it ideal for resilient workloads.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-allocation-strategy.html",
    tags: ["Amazon EC2", "EC2 Spot", "Resilience Failure"]
  },
  {
    id: "aws-saa-461",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Auto Scaling Mixed Instances Policies: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon EC2 Auto Scaling to ensure baseline availability with On-Demand instances while handling elastic traffic surges with low-cost Spot instances across multiple instance types.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? EC2 Auto Scaling Mixed Instances Policies with Spot and On-Demand is being evaluated.",
    options: [
      { id: 'A', text: "Deploy two separate Auto Scaling groups and balance traffic manually using Route 53 Weighted routing." },
      { id: 'B', text: "Deploy 100% Spot instances without On-Demand base capacity." },
      { id: 'C', text: "Deploy 100% On-Demand instances with Target Tracking scaling policies." },
      { id: 'D', text: "Configure an Auto Scaling group with a Mixed Instances Policy specifying an On-Demand base capacity and Spot instances for the remaining capacity across multiple instance types." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an Auto Scaling group with a Mixed Instances Policy specifying an On-Demand base capacity and Spot instances for the remaining capacity across multiple instance types. Mixed Instances Policies in EC2 Auto Scaling allow a single Auto Scaling group to combine On-Demand and Spot instances across multiple instance families and sizes. Specifying an On-Demand base capacity ensures critical baseline workload availability, while Spot handles burst traffic at up to 90% savings.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html",
    tags: ["Amazon EC2 Auto Scaling", "Auto Scaling", "Dr Failover"]
  },
  {
    id: "aws-saa-462",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Auto Scaling Mixed Instances Policies: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon EC2 Auto Scaling to ensure baseline availability with On-Demand instances while handling elastic traffic surges with low-cost Spot instances across multiple instance types.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? EC2 Auto Scaling Mixed Instances Policies with Spot and On-Demand is being evaluated.",
    options: [
      { id: 'A', text: "Deploy 100% On-Demand instances with Target Tracking scaling policies." },
      { id: 'B', text: "Deploy 100% Spot instances without On-Demand base capacity." },
      { id: 'C', text: "Configure an Auto Scaling group with a Mixed Instances Policy specifying an On-Demand base capacity and Spot instances for the remaining capacity across multiple instance types." },
      { id: 'D', text: "Deploy two separate Auto Scaling groups and balance traffic manually using Route 53 Weighted routing." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Auto Scaling group with a Mixed Instances Policy specifying an On-Demand base capacity and Spot instances for the remaining capacity across multiple instance types. Mixed Instances Policies in EC2 Auto Scaling allow a single Auto Scaling group to combine On-Demand and Spot instances across multiple instance families and sizes. Specifying an On-Demand base capacity ensures critical baseline workload availability, while Spot handles burst traffic at up to 90% savings.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html",
    tags: ["Amazon EC2 Auto Scaling", "Auto Scaling", "High Load Scale"]
  },
  {
    id: "aws-saa-463",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Auto Scaling Mixed Instances Policies: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon EC2 Auto Scaling to ensure baseline availability with On-Demand instances while handling elastic traffic surges with low-cost Spot instances across multiple instance types.",
    question: "Which solution properly implements these mandatory security and governance controls? EC2 Auto Scaling Mixed Instances Policies with Spot and On-Demand is being evaluated.",
    options: [
      { id: 'A', text: "Deploy two separate Auto Scaling groups and balance traffic manually using Route 53 Weighted routing." },
      { id: 'B', text: "Deploy 100% On-Demand instances with Target Tracking scaling policies." },
      { id: 'C', text: "Deploy 100% Spot instances without On-Demand base capacity." },
      { id: 'D', text: "Configure an Auto Scaling group with a Mixed Instances Policy specifying an On-Demand base capacity and Spot instances for the remaining capacity across multiple instance types." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an Auto Scaling group with a Mixed Instances Policy specifying an On-Demand base capacity and Spot instances for the remaining capacity across multiple instance types. Mixed Instances Policies in EC2 Auto Scaling allow a single Auto Scaling group to combine On-Demand and Spot instances across multiple instance families and sizes. Specifying an On-Demand base capacity ensures critical baseline workload availability, while Spot handles burst traffic at up to 90% savings.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html",
    tags: ["Amazon EC2 Auto Scaling", "Auto Scaling", "Security Compliance"]
  },
  {
    id: "aws-saa-464",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Auto Scaling Mixed Instances Policies: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon EC2 Auto Scaling to ensure baseline availability with On-Demand instances while handling elastic traffic surges with low-cost Spot instances across multiple instance types.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? EC2 Auto Scaling Mixed Instances Policies with Spot and On-Demand is being evaluated.",
    options: [
      { id: 'A', text: "Configure an Auto Scaling group with a Mixed Instances Policy specifying an On-Demand base capacity and Spot instances for the remaining capacity across multiple instance types." },
      { id: 'B', text: "Deploy 100% On-Demand instances with Target Tracking scaling policies." },
      { id: 'C', text: "Deploy 100% Spot instances without On-Demand base capacity." },
      { id: 'D', text: "Deploy two separate Auto Scaling groups and balance traffic manually using Route 53 Weighted routing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Auto Scaling group with a Mixed Instances Policy specifying an On-Demand base capacity and Spot instances for the remaining capacity across multiple instance types. Mixed Instances Policies in EC2 Auto Scaling allow a single Auto Scaling group to combine On-Demand and Spot instances across multiple instance families and sizes. Specifying an On-Demand base capacity ensures critical baseline workload availability, while Spot handles burst traffic at up to 90% savings.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html",
    tags: ["Amazon EC2 Auto Scaling", "Auto Scaling", "Hybrid Migration"]
  },
  {
    id: "aws-saa-465",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Auto Scaling Mixed Instances Policies: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon EC2 Auto Scaling to ensure baseline availability with On-Demand instances while handling elastic traffic surges with low-cost Spot instances across multiple instance types.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? EC2 Auto Scaling Mixed Instances Policies with Spot and On-Demand is being evaluated.",
    options: [
      { id: 'A', text: "Deploy 100% Spot instances without On-Demand base capacity." },
      { id: 'B', text: "Configure an Auto Scaling group with a Mixed Instances Policy specifying an On-Demand base capacity and Spot instances for the remaining capacity across multiple instance types." },
      { id: 'C', text: "Deploy two separate Auto Scaling groups and balance traffic manually using Route 53 Weighted routing." },
      { id: 'D', text: "Deploy 100% On-Demand instances with Target Tracking scaling policies." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Auto Scaling group with a Mixed Instances Policy specifying an On-Demand base capacity and Spot instances for the remaining capacity across multiple instance types. Mixed Instances Policies in EC2 Auto Scaling allow a single Auto Scaling group to combine On-Demand and Spot instances across multiple instance families and sizes. Specifying an On-Demand base capacity ensures critical baseline workload availability, while Spot handles burst traffic at up to 90% savings.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html",
    tags: ["Amazon EC2 Auto Scaling", "Auto Scaling", "Resilience Failure"]
  },
  {
    id: "aws-saa-466",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "AWS Graviton Processor Migration: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon EC2 to reduce compute costs by 20% while improving compute performance for containerized Python and Go microservices.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? AWS Graviton3 processor-based instance families is being evaluated.",
    options: [
      { id: 'A', text: "Overclock existing x86 instances using EC2 detailed monitoring." },
      { id: 'B', text: "Switch instance storage from EBS gp3 to EBS io2 Block Express." },
      { id: 'C', text: "Migrate workloads from containerized ECS tasks to standalone bare-metal EC2 instances." },
      { id: 'D', text: "Migrate workloads from x86 instance families (e.g. c6i/m6i) to AWS Graviton3 arm64 instance families (e.g. c7g/m7g)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Migrate workloads from x86 instance families (e.g. c6i/m6i) to AWS Graviton3 arm64 instance families (e.g. c7g/m7g). AWS Graviton3 processors (custom ARM-based silicon developed by AWS) deliver up to 25% better compute performance and up to 20% lower cost compared to comparable current-generation x86-based instances, delivering the best price-performance ratio in Amazon EC2 for modern applications.",
    referenceUrl: "https://aws.amazon.com/ec2/graviton/",
    tags: ["Amazon EC2", "Graviton", "Dr Failover"]
  },
  {
    id: "aws-saa-467",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "AWS Graviton Processor Migration: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon EC2 to reduce compute costs by 20% while improving compute performance for containerized Python and Go microservices.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? AWS Graviton3 processor-based instance families is being evaluated.",
    options: [
      { id: 'A', text: "Migrate workloads from containerized ECS tasks to standalone bare-metal EC2 instances." },
      { id: 'B', text: "Migrate workloads from x86 instance families (e.g. c6i/m6i) to AWS Graviton3 arm64 instance families (e.g. c7g/m7g)." },
      { id: 'C', text: "Switch instance storage from EBS gp3 to EBS io2 Block Express." },
      { id: 'D', text: "Overclock existing x86 instances using EC2 detailed monitoring." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Migrate workloads from x86 instance families (e.g. c6i/m6i) to AWS Graviton3 arm64 instance families (e.g. c7g/m7g). AWS Graviton3 processors (custom ARM-based silicon developed by AWS) deliver up to 25% better compute performance and up to 20% lower cost compared to comparable current-generation x86-based instances, delivering the best price-performance ratio in Amazon EC2 for modern applications.",
    referenceUrl: "https://aws.amazon.com/ec2/graviton/",
    tags: ["Amazon EC2", "Graviton", "High Load Scale"]
  },
  {
    id: "aws-saa-468",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "AWS Graviton Processor Migration: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon EC2 to reduce compute costs by 20% while improving compute performance for containerized Python and Go microservices.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Graviton3 processor-based instance families is being evaluated.",
    options: [
      { id: 'A', text: "Overclock existing x86 instances using EC2 detailed monitoring." },
      { id: 'B', text: "Migrate workloads from containerized ECS tasks to standalone bare-metal EC2 instances." },
      { id: 'C', text: "Migrate workloads from x86 instance families (e.g. c6i/m6i) to AWS Graviton3 arm64 instance families (e.g. c7g/m7g)." },
      { id: 'D', text: "Switch instance storage from EBS gp3 to EBS io2 Block Express." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Migrate workloads from x86 instance families (e.g. c6i/m6i) to AWS Graviton3 arm64 instance families (e.g. c7g/m7g). AWS Graviton3 processors (custom ARM-based silicon developed by AWS) deliver up to 25% better compute performance and up to 20% lower cost compared to comparable current-generation x86-based instances, delivering the best price-performance ratio in Amazon EC2 for modern applications.",
    referenceUrl: "https://aws.amazon.com/ec2/graviton/",
    tags: ["Amazon EC2", "Graviton", "Security Compliance"]
  },
  {
    id: "aws-saa-469",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "AWS Graviton Processor Migration: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon EC2 to reduce compute costs by 20% while improving compute performance for containerized Python and Go microservices.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? AWS Graviton3 processor-based instance families is being evaluated.",
    options: [
      { id: 'A', text: "Migrate workloads from x86 instance families (e.g. c6i/m6i) to AWS Graviton3 arm64 instance families (e.g. c7g/m7g)." },
      { id: 'B', text: "Switch instance storage from EBS gp3 to EBS io2 Block Express." },
      { id: 'C', text: "Overclock existing x86 instances using EC2 detailed monitoring." },
      { id: 'D', text: "Migrate workloads from containerized ECS tasks to standalone bare-metal EC2 instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Migrate workloads from x86 instance families (e.g. c6i/m6i) to AWS Graviton3 arm64 instance families (e.g. c7g/m7g). AWS Graviton3 processors (custom ARM-based silicon developed by AWS) deliver up to 25% better compute performance and up to 20% lower cost compared to comparable current-generation x86-based instances, delivering the best price-performance ratio in Amazon EC2 for modern applications.",
    referenceUrl: "https://aws.amazon.com/ec2/graviton/",
    tags: ["Amazon EC2", "Graviton", "Hybrid Migration"]
  },
  {
    id: "aws-saa-470",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "AWS Graviton Processor Migration: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon EC2 to reduce compute costs by 20% while improving compute performance for containerized Python and Go microservices.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? AWS Graviton3 processor-based instance families is being evaluated.",
    options: [
      { id: 'A', text: "Migrate workloads from containerized ECS tasks to standalone bare-metal EC2 instances." },
      { id: 'B', text: "Switch instance storage from EBS gp3 to EBS io2 Block Express." },
      { id: 'C', text: "Migrate workloads from x86 instance families (e.g. c6i/m6i) to AWS Graviton3 arm64 instance families (e.g. c7g/m7g)." },
      { id: 'D', text: "Overclock existing x86 instances using EC2 detailed monitoring." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Migrate workloads from x86 instance families (e.g. c6i/m6i) to AWS Graviton3 arm64 instance families (e.g. c7g/m7g). AWS Graviton3 processors (custom ARM-based silicon developed by AWS) deliver up to 25% better compute performance and up to 20% lower cost compared to comparable current-generation x86-based instances, delivering the best price-performance ratio in Amazon EC2 for modern applications.",
    referenceUrl: "https://aws.amazon.com/ec2/graviton/",
    tags: ["Amazon EC2", "Graviton", "Resilience Failure"]
  },
  {
    id: "aws-saa-471",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "S3 Intelligent-Tiering Automatic Archival: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon S3 to automatically reduce storage costs for data with unknown or unpredictable access patterns without incurring retrieval fees or operational lifecycle management.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Amazon S3 Intelligent-Tiering with Archive Access tiers is being evaluated.",
    options: [
      { id: 'A', text: "Create an S3 Lifecycle rule transitioning all objects to S3 Glacier Flexible Retrieval after 30 days." },
      { id: 'B', text: "Store all objects in Amazon S3 One Zone-Infrequent Access (One Zone-IA)." },
      { id: 'C', text: "Store objects in Amazon S3 Intelligent-Tiering and activate the Archive Access and Deep Archive Access tiers." },
      { id: 'D', text: "Configure AWS Storage Gateway to cache all files locally on on-premises storage arrays." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Store objects in Amazon S3 Intelligent-Tiering and activate the Archive Access and Deep Archive Access tiers. S3 Intelligent-Tiering automatically monitors access patterns and moves objects between access tiers (Frequent, Infrequent, Archive Instant, Archive, Deep Archive) without operational overhead or retrieval fees, delivering maximum cost optimization for data with changing or unknown access frequencies.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html",
    tags: ["Amazon S3", "S3", "Dr Failover"]
  },
  {
    id: "aws-saa-472",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "S3 Intelligent-Tiering Automatic Archival: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon S3 to automatically reduce storage costs for data with unknown or unpredictable access patterns without incurring retrieval fees or operational lifecycle management.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Amazon S3 Intelligent-Tiering with Archive Access tiers is being evaluated.",
    options: [
      { id: 'A', text: "Configure AWS Storage Gateway to cache all files locally on on-premises storage arrays." },
      { id: 'B', text: "Store all objects in Amazon S3 One Zone-Infrequent Access (One Zone-IA)." },
      { id: 'C', text: "Store objects in Amazon S3 Intelligent-Tiering and activate the Archive Access and Deep Archive Access tiers." },
      { id: 'D', text: "Create an S3 Lifecycle rule transitioning all objects to S3 Glacier Flexible Retrieval after 30 days." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Store objects in Amazon S3 Intelligent-Tiering and activate the Archive Access and Deep Archive Access tiers. S3 Intelligent-Tiering automatically monitors access patterns and moves objects between access tiers (Frequent, Infrequent, Archive Instant, Archive, Deep Archive) without operational overhead or retrieval fees, delivering maximum cost optimization for data with changing or unknown access frequencies.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html",
    tags: ["Amazon S3", "S3", "High Load Scale"]
  },
  {
    id: "aws-saa-473",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "S3 Intelligent-Tiering Automatic Archival: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon S3 to automatically reduce storage costs for data with unknown or unpredictable access patterns without incurring retrieval fees or operational lifecycle management.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon S3 Intelligent-Tiering with Archive Access tiers is being evaluated.",
    options: [
      { id: 'A', text: "Configure AWS Storage Gateway to cache all files locally on on-premises storage arrays." },
      { id: 'B', text: "Store objects in Amazon S3 Intelligent-Tiering and activate the Archive Access and Deep Archive Access tiers." },
      { id: 'C', text: "Create an S3 Lifecycle rule transitioning all objects to S3 Glacier Flexible Retrieval after 30 days." },
      { id: 'D', text: "Store all objects in Amazon S3 One Zone-Infrequent Access (One Zone-IA)." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Store objects in Amazon S3 Intelligent-Tiering and activate the Archive Access and Deep Archive Access tiers. S3 Intelligent-Tiering automatically monitors access patterns and moves objects between access tiers (Frequent, Infrequent, Archive Instant, Archive, Deep Archive) without operational overhead or retrieval fees, delivering maximum cost optimization for data with changing or unknown access frequencies.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html",
    tags: ["Amazon S3", "S3", "Security Compliance"]
  },
  {
    id: "aws-saa-474",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "S3 Intelligent-Tiering Automatic Archival: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon S3 to automatically reduce storage costs for data with unknown or unpredictable access patterns without incurring retrieval fees or operational lifecycle management.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Amazon S3 Intelligent-Tiering with Archive Access tiers is being evaluated.",
    options: [
      { id: 'A', text: "Configure AWS Storage Gateway to cache all files locally on on-premises storage arrays." },
      { id: 'B', text: "Create an S3 Lifecycle rule transitioning all objects to S3 Glacier Flexible Retrieval after 30 days." },
      { id: 'C', text: "Store all objects in Amazon S3 One Zone-Infrequent Access (One Zone-IA)." },
      { id: 'D', text: "Store objects in Amazon S3 Intelligent-Tiering and activate the Archive Access and Deep Archive Access tiers." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Store objects in Amazon S3 Intelligent-Tiering and activate the Archive Access and Deep Archive Access tiers. S3 Intelligent-Tiering automatically monitors access patterns and moves objects between access tiers (Frequent, Infrequent, Archive Instant, Archive, Deep Archive) without operational overhead or retrieval fees, delivering maximum cost optimization for data with changing or unknown access frequencies.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html",
    tags: ["Amazon S3", "S3", "Hybrid Migration"]
  },
  {
    id: "aws-saa-475",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "S3 Intelligent-Tiering Automatic Archival: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon S3 to automatically reduce storage costs for data with unknown or unpredictable access patterns without incurring retrieval fees or operational lifecycle management.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Amazon S3 Intelligent-Tiering with Archive Access tiers is being evaluated.",
    options: [
      { id: 'A', text: "Store all objects in Amazon S3 One Zone-Infrequent Access (One Zone-IA)." },
      { id: 'B', text: "Create an S3 Lifecycle rule transitioning all objects to S3 Glacier Flexible Retrieval after 30 days." },
      { id: 'C', text: "Store objects in Amazon S3 Intelligent-Tiering and activate the Archive Access and Deep Archive Access tiers." },
      { id: 'D', text: "Configure AWS Storage Gateway to cache all files locally on on-premises storage arrays." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Store objects in Amazon S3 Intelligent-Tiering and activate the Archive Access and Deep Archive Access tiers. S3 Intelligent-Tiering automatically monitors access patterns and moves objects between access tiers (Frequent, Infrequent, Archive Instant, Archive, Deep Archive) without operational overhead or retrieval fees, delivering maximum cost optimization for data with changing or unknown access frequencies.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html",
    tags: ["Amazon S3", "S3", "Resilience Failure"]
  }
];

export default AWS_SAA_QUESTIONS_19;
